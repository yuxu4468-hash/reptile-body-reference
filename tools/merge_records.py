#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
合并子代理产出：把 _data/<组>/records.json 合并进 data/curves.json。

三个子代理各自只写自己的 records.json，由本脚本统一校验并合并，
避免并发写同一个文件。

用法:
  python tools/merge_records.py            # 只做校验与预览（dry-run）
  python tools/merge_records.py --apply    # 实际写入 data/curves.json

校验项:
  · 必填字段；kind / group / caliber 取值合法
  · length_weight 必须有 segments，且 range/a/b 合法、区间不重叠
  · age_length 必须有 model + params，且 k > 0（单位须为「每年」）
  · 与现有记录重复（同 species+kind+group+caliber+source）会被识别
  · 口径不在 schema 枚举内会【报错阻断】（口径是硬门槛，见 spec/20 §3）
  · caliber='unspecified' 时必须给 caliber_uncertainty_len_pct
"""
import json, os, sys, io, glob

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CURVES = os.path.join(ROOT, "data", "curves.json")

KINDS = {"length_weight", "age_length"}
GROUPS = {"wild_male", "wild_female", "wild_mixed",
          "captive_male", "captive_female", "captive_mixed"}
# 口径白名单必须与 schema/curve-card.schema.json 保持一致。
# 教训（2026-10-07）：这里曾被加上 "SVL_TL_mixed" 与 "mass_only" 两个
# 非 schema 值，等于把「改测试而不是改代码」固化进了工具链——
# 一条跨 SVL/TL 混用、口径未核实的记录因此每次都带着警告通过合并。
CALIBERS = {"SCL", "CLmax", "CCL", "midline_CL", "MCL", "PL", "SVL", "TL", "unspecified"}
MODELS = {"von_bertalanffy", "gompertz", "logistic", "richards", "two_segment_linear"}
# ⚠️ `two_segment_linear`（2026-10-07 新增，应六角恐龙而加）**没有 Linf / k** ——
#    它的参数是 m1_mm_per_year / m2_mm_per_year / t_break_years / L0_mm，
#    形状为「先近线性上升、到 t_break 后骤然转平」。
#    故它**不参加** Linf/k 的检查，改校验它自己的参数（见 validate()）。
NON_ASYMPTOTIC_MODELS = {"two_segment_linear"}
CAVEATS = {"caliber_unspecified", "no_spread_reported", "age_from_size_frequency", "digitized_from_figure", "small_n", "single_captive_population", "single_wild_population", "extrapolation_only", "age_from_growth_rings", "gravid_females_not_identified"}
REQUIRED = ["species", "kind", "group", "caliber", "n", "source"]
# ⚠️ `U1` = **未发表的一手种群数据**（繁殖者/养殖场具名提供，未经同行评审）。
#    见 docs/42_未发表数据准入清单.md。它与 L1–L4 不是同一个坐标轴上的东西：
#    L1–L4 说的是「来源有多可靠」，U1 说的是「来源没发表但仍是可追的一手种群」。
UNPUBLISHED = {"U1"}

def load(p):
    """容忍 UTF-8 BOM —— PowerShell 的 Out-File -Encoding utf8 会加 BOM，
    子代理很可能用它写文件。"""
    with open(p, encoding="utf-8-sig") as f:
        return json.load(f)

def key_of(r):
    return (r.get("species"), r.get("kind"), r.get("group"),
            r.get("caliber"), str(r.get("source", ""))[:40])

def validate(rec, where, warns, errs):
    """返回 True 表示该记录通过"""
    tag = "%s[%s/%s/%s]" % (where, rec.get("species"), rec.get("kind"), rec.get("group"))
    ok = True
    for k in REQUIRED:
        if k not in rec or rec[k] in ("", None):
            errs.append("%s 缺必填字段 %s" % (tag, k)); ok = False
    if rec.get("kind") not in KINDS:
        errs.append("%s kind 非法: %r" % (tag, rec.get("kind"))); ok = False
    if rec.get("group") not in GROUPS:
        errs.append("%s group 非法: %r" % (tag, rec.get("group"))); ok = False
    if rec.get("caliber") not in CALIBERS:
        # 口径是硬门槛（spec/20 §3）：未知口径必须【阻断】而不是只警告。
        # 教训（2026-10-07）：这里原本是 warns，于是球蟒的 "SVL_TL_mixed"
        # 带着一条警告就写进了 curves.json，而且每次重跑合并都会再加回来。
        errs.append("%s 口径不在已知表: %r（新增口径需人工确认后才可发布；"
                    "口径不明或跨口径混用的记录不得入卡）" % (tag, rec.get("caliber")))

    cv = rec.get("caveats")
    if cv is not None:
        if not isinstance(cv, list):
            errs.append("%s caveats 必须是数组" % tag); ok = False
        else:
            for c in cv:
                if c not in CAVEATS:
                    errs.append("%s caveats 含未知代码: %r" % (tag, c)); ok = False
    if rec.get("caliber") == "unspecified":
        # 口径未说明档：必须给出长度轴上的口径不确定度，否则波动带会低估
        p = rec.get("caliber_uncertainty_len_pct")
        if not isinstance(p, (int, float)) or p <= 0:
            errs.append("%s caliber='unspecified' 必须给 caliber_uncertainty_len_pct" % tag); ok = False
    elif rec.get("caliber_uncertainty_len_pct") is not None:
        warns.append("%s 非 unspecified 口径却给了 caliber_uncertainty_len_pct" % tag)
    try:
        if int(rec.get("n", 0)) < 1:
            errs.append("%s n 必须 >= 1" % tag); ok = False
    except Exception:
        errs.append("%s n 不是整数: %r" % (tag, rec.get("n"))); ok = False

    if rec.get("kind") == "length_weight":
        segs = rec.get("segments")
        if not isinstance(segs, list) or not segs:
            errs.append("%s length_weight 必须有非空 segments" % tag); ok = False
        else:
            prev_hi = None
            for i, s in enumerate(segs):
                rng = s.get("range")
                if not (isinstance(rng, list) and len(rng) == 2):
                    errs.append("%s 第%d段 range 非法" % (tag, i)); ok = False; continue
                lo, hi = rng
                if not (isinstance(lo, (int, float)) and isinstance(hi, (int, float)) and lo < hi):
                    errs.append("%s 第%d段 range 不是 lo<hi: %r" % (tag, i, rng)); ok = False
                if prev_hi is not None and lo < prev_hi:
                    errs.append("%s 第%d段与上一段区间重叠 (%s < %s)" % (tag, i, lo, prev_hi)); ok = False
                prev_hi = hi
                for f in ("a", "b"):
                    if not isinstance(s.get(f), (int, float)) or s[f] <= 0:
                        errs.append("%s 第%d段 %s 非法: %r" % (tag, i, f, s.get(f))); ok = False
                sd = s.get("resid_sd_log10")
                if sd is not None and (not isinstance(sd, (int, float)) or sd <= 0):
                    warns.append("%s 第%d段 resid_sd_log10 可疑: %r" % (tag, i, sd))

    nk = rec.get("n_kind")
    if nk is not None and nk not in ("individuals", "observations"):
        errs.append("%s n_kind 非法: %r" % (tag, nk)); ok = False

    # ⚠️ **分段连续性**（2026-10-07 前移自 test_calc.js）：
    # 若一条记录有多个 segments，相邻两段在交界处的体重必须接近。
    # 判据：段 i 在上界 b 处的估计体重，与段 i+1 在下界 lo 处的估计体重，相对差 < 25%。
    # 实例：Thamnophis_sirtalis/wild_mixed 的两段在 335 mm 处相差 **58.6%**
    #（17.9 g vs 9.8 g），而 335→354 mm 本该只增约 10% —— 说明那是**两个数据集的拼接**
    # 而非同一条曲线的分段拟合，用户量到交界附近的个体会得到相差约一半的参照值。
    if rec.get("kind") == "length_weight":
        segs = rec.get("segments") or []
        for i in range(len(segs) - 1):
            a, b2 = segs[i], segs[i + 1]
            try:
                m1 = a["a"] * (a["range"][1] ** a["b"])
                m2 = b2["a"] * (b2["range"][0] ** b2["b"])
            except Exception:
                continue
            denom = (m1 + m2) / 2.0
            if denom <= 0:
                continue
            rel = abs(m1 - m2) / denom
            if rel >= 0.25:
                errs.append("%s 第%d/%d 段在 %s 处**跨段不连续**（相对差 %.1f%%）—— "
                            "两段很可能是不同数据集的拼接而非同一条曲线的分段"
                            % (tag, i + 1, i + 2, a["range"][1], rel * 100))
                ok = False

    # ---- U1 档的专属要求（docs/42 §2）----
    if rec.get("evidence") in UNPUBLISHED:
        # U-a：必须个体级；只有均值/区间的收不了
        if rec.get("n_kind") == "observations":
            warns.append("%s U1 记录为重复观测（n_kind=observations）—— 请确认同一动物可区分" % tag)
        # U-b：来源必须是「具名提供者 + 可回联」，不能写空
        src = str(rec.get("source") or "")
        if len(src) < 6:
            errs.append("%s U1 记录的 source 太短，必须写明具名提供者与联系方式来源（docs/42 G2）" % tag)
            ok = False

    if rec.get("kind") == "age_length":
        if rec.get("model") not in MODELS:
            errs.append("%s model 非法: %r" % (tag, rec.get("model"))); ok = False
        p = rec.get("params") or {}
        if not p:
            errs.append("%s 缺 params" % tag); ok = False
        elif rec.get("model") in NON_ASYMPTOTIC_MODELS:
            # ⚠️ `two_segment_linear` **没有 Linf / k** —— 它没有渐近线。
            #    硬要用 Linf/k 的判据去校验它，等于把「模型不同」误判成「参数缺失」。
            #    改校验它自己的参数，并同样做单位/量级的合理性检查。
            for f in ("m1_mm_per_year", "m2_mm_per_year", "t_break_years"):
                v = p.get(f)
                if not isinstance(v, (int, float)):
                    errs.append("%s params.%s 非法: %r" % (tag, f, v)); ok = False
            if isinstance(p.get("m1_mm_per_year"), (int, float)) and p.get("m1_mm_per_year", 0) <= 0:
                errs.append("%s params.m1_mm_per_year 必须为正" % tag); ok = False
            if isinstance(p.get("t_break_years"), (int, float)) and p.get("t_break_years", 0) < 0:
                errs.append("%s params.t_break_years 不得为负" % tag); ok = False
            # m2 < m1 是「转平」的定义；若 m2 更大说明拟合/抄写有误
            if (isinstance(p.get("m2_mm_per_year"), (int, float))
                    and isinstance(p.get("m1_mm_per_year"), (int, float))
                    and p["m2_mm_per_year"] > p["m1_mm_per_year"]):
                warns.append("%s params.m2 > m1 —— 第二段比第一段还快，与「转平」不符" % tag)
            if p.get("L0_mm") is not None and not isinstance(p.get("L0_mm"), (int, float)):
                errs.append("%s params.L0_mm 非法: %r" % (tag, p.get("L0_mm"))); ok = False
        else:
            if not isinstance(p.get("k"), (int, float)) or p.get("k", 0) <= 0:
                errs.append("%s params.k 非法: %r" % (tag, p.get("k"))); ok = False
            elif p.get("k", 0) > 1.0:
                warns.append("%s params.k=%s 偏大，确认单位是「每年」而非更大尺度" % (tag, p.get("k")))
            elif p.get("k", 0) < 0.01:
                warns.append("%s params.k=%s 偏小，很可能是「每天」未换算成「每年」"
                             "（本项目遇到过差 175 倍的案例，见陷阱 B2）" % (tag, p.get("k")))
            if not isinstance(p.get("Linf"), (int, float)) or p.get("Linf", 0) <= 0:
                errs.append("%s params.Linf 非法: %r" % (tag, p.get("Linf"))); ok = False
    return ok

def main():
    apply = "--apply" in sys.argv
    # ⚠️ `--update`：同键记录**用新版本替换**旧版本，而不是跳过。
    #    没有它，子代理事后补齐的 note / 修正过的数值**永远进不了库** ——
    #    本项目已因此踩过两次（白氏树蛙的 note、束带蛇重写的 records.json）。
    #    默认仍为「跳过重复」，保持可反复跑。
    update = "--update" in sys.argv
    replaced = []
    out = io.StringIO()
    def P(*a): print(*a, file=out)

    existing = load(CURVES)
    # ---- R3（docs/42 §3）：U1 只在「该物种 / 该类型 / 该口径完全无文献数据」时收。
    #      有了可靠数据还收低可靠层，只会让用户在错的曲线上看到"偏差"。----
    lit_keys = set((r.get("species"), r.get("kind"), r.get("caliber"))
                   for r in existing if r.get("evidence") not in ("U1", None))

    P("现有记录: %d 条" % len(existing))
    known = {key_of(r) for r in existing}

    files = sorted(glob.glob(os.path.join(ROOT, "_data", "*", "records.json")))
    P("发现子代理产出: %d 个文件" % len(files))
    for f in files:
        P("  " + os.path.relpath(f, ROOT))
    P()

    new, warns, errs, dups = [], [], [], []
    for f in files:
        try:
            recs = load(f)
        except Exception as e:
            errs.append("%s 读取失败: %s" % (os.path.relpath(f, ROOT), str(e)[:120])); continue
        if not isinstance(recs, list):
            errs.append("%s 顶层不是数组" % os.path.relpath(f, ROOT)); continue
        for r in recs:
            if r.get("evidence") in UNPUBLISHED:
                kk = (r.get("species"), r.get("kind"), r.get("caliber"))
                if kk in lit_keys:
                    errs.append("%s U1 记录被拒：该物种/类型/口径**已有文献数据**（R3）—— "
                                "有可靠数据时不留会混淆的低可靠层，见 docs/42 §3" % os.path.relpath(f, ROOT))
                    continue
            if validate(r, os.path.relpath(f, ROOT), warns, errs):
                k = key_of(r)
                if k in known:
                    # ⚠️ 默认**跳过重复**（幂等，可反复跑）。但这会让「子代理事后补齐 note / 修正数值」
                    #    永远进不了库 —— 本项目已因此踩过两次（白氏树蛙、束带蛇）。
                    #    加 `--update` 时**用新记录替换旧记录**（键相同即视为同一条）。
                    if update:
                        replaced.append(k)
                        existing = [x for x in existing if key_of(x) != k]
                        known.discard(k)
                        known.add(k)
                        new.append(r)
                    else:
                        dups.append(k)
                else:
                    known.add(k)
                    new.append(r)

    P("校验结果：通过 %d 条 / 重复 %d 条 / 错误 %d 条 / 警告 %d 条" %
      (len(new), len(dups), len(errs), len(warns)))
    if replaced:
        P("\n已替换同键旧记录 %d 条（--update）:" % len(replaced))
        for k in replaced: P("  " + str(k))
    if dups:
        P("\n重复（已跳过）:")
        for k in dups: P("  " + str(k))
    if warns:
        P("\n警告:")
        for w in warns: P("  " + w)
    if errs:
        P("\n错误:")
        for e in errs: P("  " + e)

    if new:
        P("\n待新增记录:")
        bysp = {}
        for r in new: bysp.setdefault(r["species"], []).append(r)
        for sp in sorted(bysp):
            P("  %s（%d 条）" % (sp, len(bysp[sp])))
            for r in bysp[sp]:
                if r["kind"] == "length_weight":
                    P("    体长-体重 %-14s %-11s n=%-5s 段数=%d" %
                      (r["group"], r["caliber"], r["n"], len(r["segments"])))
                else:
                    P("    年龄-体长 %-14s %-11s n=%-5s Linf=%s k=%s" %
                      (r["group"], r["caliber"], r["n"], r["params"].get("Linf"), r["params"].get("k")))

    if apply:
        if errs:
            P("\n⛔ 存在校验错误，拒绝写入。请先修正。")
        elif not new:
            P("\n没有新记录，未改动 curves.json。")
        else:
            merged = existing + new
            with open(CURVES, "w", encoding="utf-8") as fh:
                json.dump(merged, fh, ensure_ascii=False, indent=1)
            P("\n✅ 已写入 %s：%d -> %d 条" % (os.path.relpath(CURVES, ROOT), len(existing), len(merged)))
            P("   接着请跑：python tools/gen_cards.py && python tools/build_miniprogram_data.py")
    else:
        P("\n（dry-run，未写入。加 --apply 才会合并）")

    text = out.getvalue()
    print(text)
    open(os.path.join(ROOT, "data", "_merge_report.txt"), "w", encoding="utf-8").write(text)
    return 1 if errs else 0

if __name__ == "__main__":
    sys.exit(main())
