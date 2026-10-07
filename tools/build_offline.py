#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""把本项目编译成**单文件离线版**（双击即用，不联网、不需要服务器）。

【为什么这样做而不是另写一份前端】
离线版**复用小程序同一份数据与同一份计算逻辑** —— 构建时把
`miniprogram/data/curves.js`、`utils/calc.js`、`i18n/{zh,en}.js` **原样内联**。
这样两边**不可能出现"同一个物种算出两个答案"**；将来数据或算法更新，
重跑本脚本即可，不会有第二份代码需要同步。

【产物】
  Health Table Git/index.html   —— 单文件应用（含全部数据，约 300 KB）
  Health Table Git/README.txt   —— 使用说明

【反馈通道】
  改成 **mailto:yuxu446@gmail.com** —— 离线场景下唯一不需要服务器的送达方式，
  且**不调用任何隐私接口**（剪贴板、地理位置等一律不碰）。
"""
import io
import json
import os
import re
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
MINI = os.path.join(ROOT, "miniprogram")
# 默认输出到项目里的「Health Table Git」目录（用户指定的交付目录）。
# ⚠️ 发布到 GitHub 后仓库根目录不叫这个名字，故支持 `--out DIR` 覆盖 ——
#    这样同一份脚本在原项目与发布仓库里都能原样跑通。
OUTDIR = os.path.join(ROOT, "Health Table Git")
for _i, _a in enumerate(sys.argv):
    if _a == "--out" and _i + 1 < len(sys.argv):
        OUTDIR = os.path.abspath(sys.argv[_i + 1])
    elif _a.startswith("--out="):
        OUTDIR = os.path.abspath(_a.split("=", 1)[1])
FEEDBACK_EMAIL = "yuxu446@gmail.com"


def read(p):
    with io.open(p, encoding="utf-8-sig") as fh:
        return fh.read()


def wrap(name, src, note):
    """把一个 CommonJS 模块原样包进 IIFE，挂到 window 上。

    ⚠️ 必须提供 module/exports，因为源文件用的是 `module.exports = ...`。
    """
    return (
        "/* ===== %s ===== */\n"
        "window.%s = (function () {\n"
        "  var module = { exports: {} }; var exports = module.exports;\n"
        "%s\n"
        "  return module.exports;\n"
        "})();\n"
    ) % (note, name, src)


def main():
    curves = read(os.path.join(MINI, "data", "curves.js"))
    calcjs = read(os.path.join(MINI, "utils", "calc.js"))
    zh = read(os.path.join(MINI, "i18n", "zh.js"))
    en = read(os.path.join(MINI, "i18n", "en.js"))
    css = read(os.path.join(ROOT, "tools", "offline", "style.css"))
    appjs = read(os.path.join(ROOT, "tools", "offline", "app.js"))

    # 版本号：用数据文件的指纹，便于用户确认拿到的是哪一版
    import hashlib
    ver = hashlib.sha1(curves.encode("utf-8")).hexdigest()[:8]
    n_species = len(re.findall(r'"id":', curves))
    n_curves = len(re.findall(r'"kind":', curves))

    html = []
    html.append("<!doctype html>")
    html.append('<html lang="zh">')
    html.append("<head>")
    html.append('<meta charset="utf-8">')
    html.append('<meta name="viewport" content="width=device-width,initial-scale=1">')
    html.append("<title>爬宠体型参照 · 离线版</title>")
    html.append("<!--")
    html.append("  爬宠体型参照 · 离线版（单文件）")
    html.append("  · 双击本文件即可使用；不联网、不需要服务器、不调用任何隐私接口。")
    html.append("  · 数据与算法直接复用微信小程序那份源码，由 tools/build_offline.py 生成。")
    html.append("  · 数据指纹 %s ｜ %s 个物种 / %s 条曲线" % (ver, n_species, n_curves))
    html.append("  · 反馈邮箱 %s" % FEEDBACK_EMAIL)
    html.append("-->")
    html.append("<style>")
    html.append(css)
    html.append("</style>")
    html.append("</head>")
    html.append("<body>")
    html.append('<div class="topbar"><div class="topbar-in">')
    html.append('<h1>爬宠体型参照 · 离线版</h1>')
    html.append('<button id="lang">中 / EN</button>')
    html.append('<a href="#/feedback" style="text-decoration:none"><button>反馈</button></a>')
    html.append("</div></div>")
    html.append('<div id="app"></div>')

    # ---- 运行环境垫片 ----
    # i18n 与 calc 会读 wx.getAppBaseInfo / localStorage 等；离线版用浏览器能力顶上。
    html.append("<script>")
    html.append("""/* 给内联模块用的最小 wx 垫片：只用浏览器原生能力，不涉及任何隐私接口 */
window.wx = {
  getAppBaseInfo: function () { return { language: navigator.language || 'zh' }; },
  getSystemInfoSync: function () { return { language: navigator.language || 'zh' }; },
  getStorageSync: function (k) { try { return localStorage.getItem(k); } catch (e) { return ''; } },
  setStorageSync: function (k, v) { try { localStorage.setItem(k, v); } catch (e) {} },
  removeStorageSync: function (k) { try { localStorage.removeItem(k); } catch (e) {} }
};
window.__FEEDBACK_EMAIL__ = %s;
window.__APP_VER__ = %s;
""" % (json.dumps(FEEDBACK_EMAIL), json.dumps(ver)))
    html.append("</script>")

    # ---- 内联数据与逻辑（原样复用小程序源码） ----
    html.append("<script>")
    html.append(wrap("__SPECIES__", curves, "数据：miniprogram/data/curves.js（原样内联）"))
    html.append(wrap("__CALC__", calcjs, "算法：miniprogram/utils/calc.js（原样内联）"))
    html.append(wrap("__ZH__", zh, "中文文案：i18n/zh.js"))
    html.append(wrap("__EN__", en, "英文文案：i18n/en.js"))
    html.append("window.__LOCALES__ = { zh: window.__ZH__, en: window.__EN__ };")
    html.append("</script>")

    # ---- 应用逻辑 ----
    html.append("<script>")
    html.append(appjs)
    html.append("</script>")
    html.append("</body>")
    html.append("</html>")

    out = "\n".join(html)

    if not os.path.isdir(OUTDIR):
        os.makedirs(OUTDIR)
    p = os.path.join(OUTDIR, "index.html")
    with io.open(p, "w", encoding="utf-8", newline="\n") as fh:
        fh.write(out)

    readme = u"""爬宠体型参照 · 离线版
========================

怎么用
------
双击 index.html，用任意现代浏览器打开即可。不需要联网、不需要装东西、不需要服务器。
手机上可以用「浏览器 → 打开文件」或把它发给自己再打开。

里面有什么
----------
· {ns} 个物种、{nc} 条参照曲线（体长-体重 / 年龄-体长）
· 搜索：支持中文正名、中文俗名、学名、拼音、拼音首字母
· 筛选：龟 / 蛇 / 蜥蜴·守宫 / 蛙·蝾螈
· 详情页有曲线图、数据段、样本量、置信区间、覆盖度与注意事项
· **查询对照**：输入体长 / 体重 / 年龄，看你的个体与参照数据差多少
  （可以自己选「测量口径」和「参照分组」）

反馈
----
页面右上角「反馈」，或直接给 **{mail}** 发邮件。
离线版没有服务器，所以反馈走本机邮件客户端；页面上也会把反馈正文显示出来，
你可以自己选中复制，粘贴到任意邮箱里发。

它不做的事
----------
**只报告与参照数据的偏离程度，不判断健康与否、不给诊断。**
数据来自公开文献，每个物种的来源、样本量、口径与局限都写在卡片上。

数据指纹
--------
{ver}（{ns} 个物种 / {nc} 条曲线）
如需确认拿到的是哪一版，在浏览器里按 F12，看页面源码开头的注释。

这份离线版是从微信小程序那份代码生成的（同一份数据、同一套算法），
所以两边对同一个物种给出的数字一致。
""".format(ns=n_species, nc=n_curves, mail=FEEDBACK_EMAIL, ver=ver)
    with io.open(os.path.join(OUTDIR, "README.txt"), "w", encoding="utf-8", newline="\r\n") as fh:
        fh.write(readme)

    size = os.path.getsize(p) / 1024.0
    print(u"已生成：")
    print(u"  %s   （%.1f KB）" % (p, size))
    print(u"  %s" % os.path.join(OUTDIR, "README.txt"))
    print(u"  数据指纹 %s ｜ %s 个物种 / %s 条曲线 ｜ 反馈邮箱 %s"
          % (ver, n_species, n_curves, FEEDBACK_EMAIL))
    return 0


if __name__ == "__main__":
    sys.exit(main())
