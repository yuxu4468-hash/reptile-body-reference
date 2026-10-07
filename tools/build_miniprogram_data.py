import re
#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
把 data/curves.json 转成小程序可直接 require 的 JS 模块。
小程序运行时不能直接读本地 .json 文件，必须打包成 .js。
同时把缩写口径等术语转成「中文（英文缩写）」形式，避免用户看不懂。

用法: python tools/build_miniprogram_data.py
输出: miniprogram/data/curves.js
"""
import json, os, io

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC  = os.path.join(ROOT, "data", "curves.json")
DST  = os.path.join(ROOT, "miniprogram", "data", "curves.js")

# 物种展示名从 data/species_meta.json 读取（与 gen_cards.py 共用同一份）
_META_PATH = os.path.join(ROOT, "data", "species_meta.json")
def _load_meta():
    try:
        with open(_META_PATH, encoding="utf-8-sig") as fh:
            raw = json.load(fh)
        return {k: v for k, v in raw.items() if not k.startswith("_")}
    except Exception:
        return {}
META = _load_meta()

def meta_of(sp):
    m = META.get(sp)
    if m:
        return {"zh": m.get("zh", sp), "latin": m.get("latin", sp.replace("_", " ")), "en": m.get("en", "")}
    return {"zh": sp.replace("_", " "), "latin": sp.replace("_", " "), "en": ""}
GROUP_ZH = {
    "wild_male": "野外·雄性", "wild_female": "野外·雌性", "wild_mixed": "野外·混合",
    "captive_male": "家养·雄性", "captive_female": "家养·雌性", "captive_mixed": "家养·混合",
}
GROUP_EN = {
    "wild_male": "Wild · Male", "wild_female": "Wild · Female", "wild_mixed": "Wild · Mixed",
    "captive_male": "Captive · Male", "captive_female": "Captive · Female",
    "captive_mixed": "Captive · Mixed",
}

# ---- 术语对照：统一用「中文（英文缩写）」----
CALIBER_ZH = {
    "SCL":         ("直甲长",     "SCL",           "Straight carapace length",  "SCL"),
    "CLmax":       ("最大甲长",   "CLmax",         "Maximum carapace length",   "CLmax"),
    "midline_CL":  ("中线甲长",   "midline CL",    "Midline carapace length",   "midline CL"),
    "MCL":         ("最大甲壳长", "MCL",           "Maximum carapace length",   "MCL"),
    "PL":          ("腹甲长",     "PL",            "Plastron length",           "PL"),
    "SVL":         ("吻肛长",     "SVL",           "Snout\u2013vent length",    "SVL"),
    "TL":          ("全长",       "TL",            "Total length",              "TL"),
    "unspecified": ("体长（原文未说明量法）", "未说明",
                    "Length (method not stated)", "not stated"),
}
def caliber_text(code):
    """把口径代码转成『中文（英文缩写）』。

    'unspecified' 是「原文未说明量法」档：它的中文名本身已经说明了情况，
    再加一层括号会变成「体长（原文未说明量法）（未说明）」，故直接返回中文名。
    """
    if code == "unspecified":
        return CALIBER_ZH["unspecified"][0]
    if code in CALIBER_ZH:
        zh, en = CALIBER_ZH[code][0], CALIBER_ZH[code][1]
        return "%s（%s）" % (zh, en)
    return code
def caliber_text_en(code):
    """英文模式：'Straight carapace length (SCL)'"""
    if code in CALIBER_ZH:
        return "%s (%s)" % (CALIBER_ZH[code][2], CALIBER_ZH[code][3])
    return code

# ⚠️ **没有渐近线的模型**：它们的 `Linf` / `t95` 在数学上都无定义。
#    界面文案必须据此分流 —— 例如覆盖度分母不能对它说「ln(20)/k」（它根本没有 k）。
NON_ASYMPTOTIC_MODELS = {"two_segment_linear"}
# 非文献档：目前只有 U1（未发表的一手种群数据，见 docs/42）。
# 它们的曲线**不进主 curves 数组**，单独放 lowRelCurves，界面独立成区。
NON_LITERATURE = {"U1"}

MODEL_ZH = {
    "von_bertalanffy": ("von Bertalanffy 生长方程", "von Bertalanffy growth equation"),
    "gompertz": ("Gompertz 生长方程", "Gompertz growth equation"),
    "logistic": ("logistic 生长方程", "logistic growth equation"),
    "two_segment_linear": ("两段线性生长模型", "two-segment linear growth model"),
    "richards": ("Richards 生长方程", "Richards growth equation"),
    "linear": ("线性方程", "linear equation"),
}

def n_text(rec, en=False):
    """样本量的展示串。

    n_kind 默认 'individuals'；若为 'observations'（同一批个体跨年重复测量的次数），
    必须换一种说法 —— 否则界面上「样本 6318」会被读成 6318 只龟。
    钻纹龟的 Tokash 2018 年龄层就是这种情形（n = 观测次数）。
    """
    n = rec.get("n")
    kind = rec.get("n_kind") or "individuals"
    if kind == "observations":
        return ("n = %d observations" % n) if en else ("观测 %d 次" % n)
    return ("n = %d" % n) if en else ("样本 %d" % n)


def source_short(src):
    """从来源串里抽「第一作者姓 + 年份」，用于区分同组不同种群的曲线。

    来源串有两种写法，都要认：
        'Turner GS (2010) Natural History Notes...'   -> 年份在括号里
        'Barnard, Hollinger & Romaine 1979, Copeia...' -> 年份是裸的
    姓氏要允许重音字母（如 Denomme / Pino-Vera），故用 [^\\s,]+ 而不是 [A-Za-z]+。
    """
    if not src:
        return ""
    import re as _re
    m = _re.match(r"^\s*([^\s,]+)", src)
    name = m.group(1) if m else ""
    y = _re.search(r"\((\d{4})\)", src) or _re.search(r"\b(1[89]\d{2}|20\d{2})\b", src)
    year = y.group(1) if y else ""
    s = (name + " " + year).strip()
    return s or src[:24]


def plain_text(s):
    """去掉 markdown 标记 —— 小程序 WXML 不渲染 markdown，星号会原样显示成噪声。

    ⚠️ 第一版用 `(?<![\w*])\*(?!\s)…` 的写法**漏掉了单个星号的斜体**：
    Python 的 `\w` 默认匹配 Unicode，于是「是*Terrapene*」里的「是」被当作单词字符，
    后视断言失败，星号原样留下（用户仍会看到 `*Terrapene*`）。
    改法：**不用 \w 判断词边界**，改用「内容的边缘不得是空白或星号」这一更稳的判据。
    """
    if not isinstance(s, str):
        return s
    # ⚠️ **必须迭代两遍**：`**粗体里有*斜体*时**` 这种嵌套，一遍吃不掉 ——
    # 第一版用 `[^*]+?` 限制粗体内容不得含星号，于是嵌套式**整段保留**，
    # 用户会在界面上看到 `**BCI = *Boa imperator*…**` 这样的原文（实测发生过）。
    for _ in range(2):
        # ① 粗体 **…**（允许内容含单星号，非贪婪）
        s = re.sub(r"\*\*(.+?)\*\*", r"\1", s, flags=re.S)
        # ② 斜体 *…*（内容 ≥2 字符、边缘非空白非星号）
        s = re.sub(r"\*([^\s*][^*\n]*?[^\s*])\*", r"\1", s)
        # ③ 单字符斜体 *a*
        s = re.sub(r"\*([^\s*])\*", r"\1", s)
    # ④ 行内代码反引号
    s = s.replace("`", "")
    return s


# ⚠️ 曾经输出 hasLW / lwCount / alCount / nKind 四个字段，**但没有任何地方读它们**：
#    · hasAL 有 test_labels.js 在读，故保留；hasLW 没有（test_calc.js 的 hasLwSameCal 是另一变量）
#    · nKind 冗余 —— 界面已有渲染好的 nText（如「观测 8 次」）
#    教训：「构建器输出了它」不等于「有人用它」。详见 docs/33 E10。


def t95_of(rec):
    """按模型算「达到 Linf 的 95% 所需年龄」。

    ln(20)/k 只是 VBGF 在 L0=0 时的退化解，对 Gompertz / logistic 会算错
    （奶蛇那条 Gompertz：惯例式 11.1 年 vs 严格解 12.97 年，差 17%）。

    ⚠️ `two_segment_linear` **没有渐近线** → `Linf`/`k` 都不存在 → 自然返回 None。
    界面据此显示「—」。**绝不**拿 m2 代进 ln(20)/k 硬造一个数字：
    那既不是该模型的量，也不是任何已定义的量，却会被用户读成「成熟年龄」。
    """
    import math as _m
    p = rec.get("params") or {}
    Linf, k = p.get("Linf"), p.get("k")
    if not Linf or not k:
        return None
    model = rec.get("model") or "von_bertalanffy"
    if model == "gompertz":
        return (p.get("ti") or 0) + _m.log(1 / 0.0512933) / k
    if model == "logistic":
        return (p.get("ti") or 0) + _m.log(19) / k
    t0 = p.get("t0") or 0
    L0 = p.get("L0") or 0
    if L0 >= Linf:
        return t0 + 2.9957 / k
    return t0 + _m.log((Linf - L0) / (0.05 * Linf)) / k


def slim(rec):
    # ⚠️ `U1`（未发表的一手种群数据）标记为 lowRel。构建输出时会把它**分流**到
    #    单独的 lowRelCurves 数组 —— 主 curves 里根本没有它，
    #    于是对照计算与卡片渲染**在物理上碰不到它**（docs/42 红线 R1/R2）。
    o = {
        "lowRel": rec.get("evidence") in NON_LITERATURE,
        "kind": rec["kind"], "group": rec["group"],
        "groupZh": GROUP_ZH.get(rec["group"], rec["group"]),
        "groupEn": GROUP_EN.get(rec["group"], rec["group"]),
        "caliber": rec["caliber"], "caliberText": caliber_text(rec["caliber"]),
        "caliberTextEn": caliber_text_en(rec["caliber"]),
        "n": rec["n"], "nText": n_text(rec, False), "nTextEn": n_text(rec, True),
        "source": rec.get("source", ""), "evidence": rec.get("evidence", ""),
        "sourceShort": source_short(rec.get("source", "")),
        # 需要让用户知道的短警示码；文案走 i18n（见 miniprogram/i18n 的 caveatTexts）
        "caveats": rec.get("caveats", []),
    }
    if rec.get("coverage"):
        c = rec["coverage"]
        o["coverage"] = {"run": c["longest_run"], "total": c["buckets_total"], "ratio": c["ratio"],
                         "domain": c["domain"],
                         # dataRanges 供守门测试核对「分母必须包含全部数据点」（陷阱 E8）。
                         # ⚠️ 曾经漏输出它，导致对应断言**静默跳过**——空转的测试比没有测试更糟。
                         "dataRanges": c.get("data_ranges") or []}
        # 预先算好展示串（WXML 不支持方法调用）
        o["coverageText"] = "%d/%d = %d%%" % (c["longest_run"], c["buckets_total"],
                                              round(c["ratio"] * 100))
        if rec["kind"] == "length_weight":
            o["coverageBasis"] = "分母 = 该物种完整体型范围 %g–%g mm" % (c["domain"][0], c["domain"][1])
            o["coverageBasisEn"] = "Denominator = full body-size range of the species, %g\u2013%g mm" % (
                c["domain"][0], c["domain"][1])
        else:
            # ⚠️ 年龄曲线的分母文案**必须按模型区分**。
            #    这里原来对所有年龄曲线都硬写「分母 = 惯例年龄 ln(20)/k」——
            #    但 `two_segment_linear` **根本没有 k**（它没有渐近线），
            #    于是界面会对用户说一句**不成立**的话（见六角恐龙那两条）。
            #    现在：有渐近线的模型才说 ln(20)/k；无渐近线的照实说是「该曲线覆盖的年龄范围」。
            if rec.get("model") in NON_ASYMPTOTIC_MODELS:
                o["coverageBasis"] = ("分母 = 该曲线覆盖的年龄范围 %.1f 年"
                                      "（本模型无渐近线，不是 ln(20)/k）" % c["domain"][1])
                o["coverageBasisEn"] = ("Denominator = the age range the curve covers (%.1f yr); "
                                        "this model has no asymptote, so ln(20)/k does not apply"
                                        % c["domain"][1])
            else:
                o["coverageBasis"] = "分母 = 惯例年龄 ln(20)/k = %.1f 年" % c["domain"][1]
                o["coverageBasisEn"] = "Denominator = conventional age ln(20)/k = %.1f yr" % c["domain"][1]
    if rec["kind"] == "length_weight":
        o["segments"] = [
            {"lo": s["range"][0], "hi": s["range"][1], "a": s["a"], "b": s["b"],
             "r2": s.get("r2"), "sd": s.get("resid_sd_log10"),
             "interp": bool(s.get("interpolated")),
             "src": (s.get("source") or rec.get("source", ""))}
            for s in sorted(rec["segments"], key=lambda x: x["range"][0])
        ]
        if rec.get("display"):
            o["band95"] = rec["display"].get("observed_band_95_pct")
    else:
        o["model"] = rec["model"]
        mz, me = MODEL_ZH.get(rec["model"], (rec["model"], rec["model"]))
        o["modelText"] = mz
        o["modelTextEn"] = me
        o["params"] = rec["params"]
        # ⚠️ 这里**不能**用 `if params.get("k")` 兜住整块 —— 两段线性没有 k，
        #    那样会让 t95 / t95Text / t95TextEn **三个字段整个缺失**，
        #    界面于是显示**空白**而不是「—」，用户看不出「本模型没有这个量」。
        #    改为：无论有没有 k 都输出，只是 t95 为 None 时文案写「—」。
        t95 = t95_of(rec)
        # t95 存【精确值】：程序端要拿它判断外推、并与覆盖度分母对照。
        # 只有展示串才取一位小数。此前存 round(t95,1) 会截断精度。
        # t95 为 None 表示**该模型在数学上没有这个量**（两段线性无渐近线），不是「缺数据」。
        o["t95"] = t95
        o["t95Text"] = ("%.1f 年" % t95) if t95 is not None else "—"
        o["t95TextEn"] = ("%.1f yr" % t95) if t95 is not None else "—"
    # 说明：note 是**我们自己的工作记录**（方法学细节、拒收理由、取舍过程），
    # 不发给程序端 —— 用户 2026-10-07 明确要求「不必把我们工作中的细节告诉用户」。
    # 数据文件 data/curves.json 里仍完整保留 note，供项目内部追溯。
    # 需要让用户知道的口径限制，另用 caliberInferred + i18n 的短提示表达。

    # ---- 口径未说明档：把口径不确定度叠加进波动带 ----
    # 口径歧义直接影响的是【体长】，而程序端报告的是体重（L-W）或体长（年龄-体长），
    # 所以这里按曲线类型换算，免得把长度百分比当质量百分比用。
    lu = rec.get("caliber_uncertainty_len_pct")
    if rec.get("caliber") == "unspecified" and lu:
        o["caliberInferred"] = True
        o["caliberUncertaintyLen"] = lu
        if rec["kind"] == "length_weight":
            bmax = max((s["b"] for s in rec.get("segments", [])), default=0) or 0
            # 质量不确定度 = (1 + p/100)^b − 1
            massp = ((1 + lu / 100.0) ** bmax - 1) * 100
            o["caliberUncertaintyPct"] = round(massp, 1)
        else:
            o["caliberUncertaintyPct"] = round(lu, 1)
        # 合并：总波动 = sqrt(实测波动² + 口径不确定度²)
        b95 = o.get("band95")
        if b95 is not None:
            o["band95"] = round((b95 ** 2 + o["caliberUncertaintyPct"] ** 2) ** 0.5, 1)
            o["band95Combined"] = True
    return o

def main():
    recs = json.load(open(SRC, encoding="utf-8-sig"))
    by = {}
    for r in recs:
        by.setdefault(r["species"], []).append(r)

    # 已登记物种（含暂无数据的）都要出现在列表里 —— 否则用户会以为"查不到"，
    # 而实际是"查过了，没有可靠的"。这与 IUCN 的 Data Deficient 是同一个意思。
    try:
        with open(_META_PATH, encoding="utf-8-sig") as fh:
            raw_meta = json.load(fh)
        registered = [k for k in raw_meta if not k.startswith("_")]
    except Exception:
        registered = []

    all_ids = list(by.keys())
    for sid in registered:
        if sid not in all_ids:
            all_ids.append(sid)

    species = []
    for sp in sorted(all_ids):
        rs = by.get(sp, [])
        # ⚠️⚠️ 红线 R3 的**第二道防线**（docs/42 §3）。
        #      第一道在 tools/merge_records.py：入库时若该物种/类型/口径已有文献数据，
        #      U1 记录一律不收。
        #      但**直接改 data/curves.json 可以绕过合并器** —— 所以构建器这里再查一次，
        #      而且是**硬失败**而不是静默丢弃：宁可构建不出，也不发出会误导人的数据。
        _lit = set((r["kind"], r["caliber"]) for r in rs if r.get("evidence") not in NON_LITERATURE)
        _bad = [r for r in rs
                if r.get("evidence") in NON_LITERATURE and (r["kind"], r["caliber"]) in _lit]
        if _bad:
            raise SystemExit(
                "构建中止：%s 的 U1（未发表）记录与文献数据同类型同口径 —— 违反红线 R3。\n"
                "  冲突记录：%s\n"
                "  理由：有了可靠数据还发低可靠层，用户会在错的曲线上看到"
                "\"偏差\"。见 docs/42 §3。" % (sp, [r.get("source", "")[:40] for r in _bad]))
        m = meta_of(sp)
        meta_raw = META.get(sp, {})
        lw = [r for r in rs if r["kind"] == "length_weight"]
        al = [r for r in rs if r["kind"] == "age_length"]

        cals = []
        calsEn = []
        for r in rs:
            t = caliber_text(r["caliber"])
            if t not in cals:
                cals.append(t)
            te = caliber_text_en(r["caliber"])
            if te not in calsEn:
                calsEn.append(te)

        # 逐层可用性：没有数据的那一层要显式标出，不能留白
        if len(rs) == 0:
            status = meta_raw.get("status") or "no_data"
        else:
            status = "ok"
        species.append({
            "id": sp,
            "zh": m["zh"], "latin": m["latin"], "en": m["en"],
            "status": status,
            # ⚠️ 不再输出 status_note —— 它是**死字段**：detail.js 里赋了值，但没有 WXML 渲染它，
            # 只是白占包体。而且它承载的是**方法论细节**，用户 2026-10-07 明确要求不要把
            # 「我们为什么拿不到数据」这类工作过程告诉用户。
            # `data/species_meta.json` 里的 status_note 仍原样保留（项目内部核查记录）。
                "hasAL": len(al) > 0,
                    "caliberSummary": "、".join(cals),
            "caliberSummaryEn": ", ".join(calsEn),
            # 搜索用：拼音全拼与首字母（中文用户习惯打拼音，只匹配汉字会搜不到）
            "py": meta_raw.get("py", ""),
            "pyi": meta_raw.get("pyi", ""),
            # 搜索用：中文俗名与英文别名。既然提示里写了「中文俗名」，数据里就必须真有 ——
            # 例如搜「墨蛋」要能命中墨西哥蛋龟，搜「蛋龟」要能一次命中三种动胸龟。
            "alias": [plain_text(x) for x in meta_raw.get("alias", [])],
            "aliasEn": [plain_text(x) for x in meta_raw.get("alias_en", [])],
            # 一行式的适用范围警示，显示在详情页标题下。
            # 例：北美拟鳄龟的数据不能套到中美/南美拟鳄龟上（那是另两个种）。
            "scopeShort": plain_text(meta_raw.get("scope_short", "")),
            "scopeShortEn": plain_text(meta_raw.get("scope_short_en", "")),
            # 类群：龟类 / 蛇类 / 蜥蜴·守宫 / 蛙·蝾螈。供界面按类群筛选。
            # 这是面向使用者的实用分法，不是严格的系统发育分类（见 species_meta 的说明）。
            "taxon": meta_raw.get("taxon", ""),
            # 暂无数据时给用户看的「查过哪些文献」——只列有什么，不解释为什么没有
            "refs": meta_raw.get("refs", []),
            # ⚠️⚠️ 红线 R1/R2（docs/42 §3）：**U1（未发表）曲线不进 curves**，
            #      单独放 lowRelCurves。
            #      对照计算（calc.js）与卡片渲染都只读 curves，所以它们在**物理上**
            #      碰不到低可靠数据 —— 不依赖"谁记得要避开它们"。
            #      这是本设计的核心：把红线做进数据结构，而不是做进纪律。
            "curves": [slim(r) for r in rs if r.get("evidence") not in NON_LITERATURE],
            "lowRelCurves": [slim(r) for r in rs if r.get("evidence") in NON_LITERATURE],
        })

    os.makedirs(os.path.dirname(DST), exist_ok=True)
    with io.open(DST, "w", encoding="utf-8") as f:
        f.write("// 由 tools/build_miniprogram_data.py 自动生成，请勿手工修改\n")
        f.write("// 源: data/curves.json + data/species_meta.json\n")
        f.write("module.exports = ")
        f.write(json.dumps(species, ensure_ascii=False, indent=1))
        f.write(";\n")

    kb = os.path.getsize(DST) / 1024.0
    print("生成 %s" % DST)
    print("  %d 个物种（其中 %d 个暂无数据），%d 条曲线，%.1f KB"
          % (len(species), sum(1 for s in species if len(s["curves"]) == 0), len(recs), kb))
    for s in species:
        lw = [c for c in s["curves"] if c["kind"] == "length_weight"]
        al = [c for c in s["curves"] if c["kind"] == "age_length"]
        print("  %-14s 体长-体重 %d 组 | 年龄-体长 %d 组 | 口径：%s"
              % (s["zh"], len(lw), len(al), s["caliberSummary"]))

if __name__ == "__main__":
    main()
