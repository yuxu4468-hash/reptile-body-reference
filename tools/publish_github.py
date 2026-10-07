# -*- coding: utf-8 -*-
"""把 `Health Table Git` 发布为 GitHub 仓库 yuxu4468-hash/reptile-body-reference。

【做法】用 **Git Data API** 一次提交全部文件（blobs → tree → commit → ref），
而不是 Contents API 逐文件提交 —— 后者会产生 13 个碎片 commit。

【安全】令牌只经 HTTP 头传递，**不写进命令行、不打印、不落盘到仓库**。
"""
import base64
import io
import json
import os
import ssl
import sys
import urllib.error
import urllib.request

ROOT = r"F:\Health Table"
REPO_DIR = os.path.join(ROOT, "Health Table Git")
TOKEN_FILE = r"C:\Users\39287\.dsh\.gh-issue-token.txt"
OWNER = "yuxu4468-hash"
NAME = "reptile-body-reference"
TAG = "v1.0.0"
# 版本号可传参：python tools/publish_github.py --tag v1.0.1
for _i, _a in enumerate(sys.argv):
    if _a == "--tag" and _i + 1 < len(sys.argv):
        TAG = sys.argv[_i + 1]
    elif _a.startswith("--tag="):
        TAG = _a.split("=", 1)[1]

TOKEN = io.open(TOKEN_FILE, encoding="utf-8").read().strip().strip('"').strip("'").lstrip("\ufeff")
UA = "dsh-agent"
ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE


def api(method, url, payload=None, raw=None, ctype="application/json"):
    data = None
    if payload is not None:
        data = json.dumps(payload).encode("utf-8")
    elif raw is not None:
        data = raw
    req = urllib.request.Request(url, data=data, method=method)
    req.add_header("Authorization", "Bearer " + TOKEN)
    req.add_header("User-Agent", UA)
    req.add_header("Accept", "application/vnd.github+json")
    if data is not None:
        req.add_header("Content-Type", ctype)
    try:
        with urllib.request.urlopen(req, timeout=180, context=ctx) as r:
            body = r.read()
            return r.status, (json.loads(body.decode("utf-8")) if body else None)
    except urllib.error.HTTPError as e:
        body = e.read().decode("utf-8", "replace")
        return e.code, {"_error": body[:500]}


def collect():
    out = []
    for dp, dn, fn in os.walk(REPO_DIR):
        dn[:] = [d for d in dn if d != ".git"]
        for f in fn:
            p = os.path.join(dp, f)
            rel = os.path.relpath(p, REPO_DIR).replace("\\", "/")
            out.append((rel, p))
    out.sort()
    return out


def main():
    files = collect()
    print(u"待发布 %d 个文件：" % len(files))
    for rel, p in files:
        print(u"  %-40s %8.1f KB" % (rel, os.path.getsize(p) / 1024.0))

    # 1) 仓库是否已存在
    st, info = api("GET", "https://api.github.com/repos/%s/%s" % (OWNER, NAME))
    if st == 200:
        print(u"\n仓库已存在，跳过创建。")
    elif st == 404:
        st, info = api("POST", "https://api.github.com/user/repos", {
            "name": NAME,
            "description": u"爬宠体型参照 · 依据公开文献整理的体型参照数据（离线单文件 + 源码）",
            "homepage": "",
            "private": False,
            "has_issues": True,
            "has_wiki": False,
            "auto_init": False,
        })
        if st not in (200, 201):
            print(u"❌ 创建仓库失败 %s: %s" % (st, info))
            return 1
        print(u"\n✅ 已创建仓库 https://github.com/%s/%s" % (OWNER, NAME))
    else:
        print(u"❌ 查询仓库失败 %s: %s" % (st, info))
        return 1

    # 2) ⚠️ 若仓库是**完全空**的（不带 auto_init 创建时没有任何分支），
    #    Git Data API 的 blob 端点会返回 409「Git Repository is empty」。
    #    故先用 Contents API 建一个文件（它会自动创建 main 分支），再继续。
    st, ref0 = api("GET", "https://api.github.com/repos/%s/%s/git/ref/heads/main" % (OWNER, NAME))
    if st != 200:
        boot = os.path.join(REPO_DIR, ".gitignore")
        st2, b2 = api("PUT", "https://api.github.com/repos/%s/%s/contents/.gitignore" % (OWNER, NAME), {
            "message": "chore: 初始化仓库",
            "content": base64.b64encode(open(boot, "rb").read()).decode("ascii"),
        })
        if st2 not in (200, 201):
            print(u"❌ 初始化分支失败 %s: %s" % (st2, b2))
            return 1
        print(u"✅ 已初始化 main 分支")

    # 3) 逐个上传 blob
    entries = []
    for rel, p in files:
        b = open(p, "rb").read()
        st, info = api("POST", "https://api.github.com/repos/%s/%s/git/blobs" % (OWNER, NAME), {
            "content": base64.b64encode(b).decode("ascii"),
            "encoding": "base64",
        })
        if st not in (200, 201):
            print(u"❌ blob 失败 %s (%s): %s" % (rel, st, info))
            return 1
        entries.append({"path": rel, "mode": "100644", "type": "blob", "sha": info["sha"]})
    print(u"✅ 已上传 %d 个 blob" % len(entries))

    # 3) tree
    st, tree = api("POST", "https://api.github.com/repos/%s/%s/git/trees" % (OWNER, NAME),
                   {"tree": entries})
    if st not in (200, 201):
        print(u"❌ tree 失败 %s: %s" % (st, tree))
        return 1
    print(u"✅ tree %s" % tree["sha"][:10])

    # 4) commit（无父提交 = 初始提交）
    st, ref = api("GET", "https://api.github.com/repos/%s/%s/git/ref/heads/main" % (OWNER, NAME))
    parents = [ref["object"]["sha"]] if st == 200 else []
    msg = (u"v1.0.0 · 首个公开版本\n\n"
           u"- 单文件离线版 index.html（52 物种 / 135 条曲线，双击即用、不联网）\n"
           u"- 权威数据 data/curves.json 与物种元数据 data/species_meta.json\n"
           u"- 构建脚本 tools/build_offline.py（复用共享的数据与算法模块）\n"
           u"- 反馈：邮件 yuxu446@gmail.com\n\n"
           u"只报告偏离程度，不判断健康与否，不构成诊断。")
    st, commit = api("POST", "https://api.github.com/repos/%s/%s/git/commits" % (OWNER, NAME),
                     {"message": msg, "tree": tree["sha"], "parents": parents})
    if st not in (200, 201):
        print(u"❌ commit 失败 %s: %s" % (st, commit))
        return 1
    print(u"✅ commit %s" % commit["sha"][:10])

    # 5) 建/更新 ref
    if parents:
        st, r = api("PATCH", "https://api.github.com/repos/%s/%s/git/refs/heads/main" % (OWNER, NAME),
                    {"sha": commit["sha"], "force": True})
    else:
        st, r = api("POST", "https://api.github.com/repos/%s/%s/git/refs" % (OWNER, NAME),
                    {"ref": "refs/heads/main", "sha": commit["sha"]})
    if st not in (200, 201):
        print(u"❌ 更新分支失败 %s: %s" % (st, r))
        return 1
    print(u"✅ main 已指向 %s" % commit["sha"][:10])

    # 6) 创建 / 更新 Release（**幂等**）
    # ⚠️ 重发时会撞 422「tag_name already_exists」—— 第一版就是直接 POST，第二次就失败。
    #    而且即便 Release 存在，tag 仍指向**旧 commit**，会与仓库内容不一致。
    #    所以：已存在就 PATCH 更新正文，并把 tag 强制移到当前 commit。
    rel_body = (u"## 下载即用\n\n"
                u"下载下面的 **index.html**，双击用任意浏览器打开即可。\n"
                u"不需要联网、不需要安装、不需要服务器。\n\n"
                u"## 这一版有什么\n\n"
                u"- **52 个物种**（45 个有数据，7 个如实标注「暂无可靠数据」）\n"
                u"- **135 条参照曲线**（体长-体重 96 / 年龄-体长 39）\n"
                u"- 搜索支持中文正名 / 俗名 / 学名 / 拼音 / 拼音首字母；按龟·蛇·蜥蜴·两栖四类筛选\n"
                u"- **查询对照**：输入体长、体重或年龄，给出各分组的参照值与偏差；"
                u"可自选**测量口径**与**参照分组**\n"
                u"- 每个物种卡片给出：口径、样本量、来源、拟合方程与 R²、95% 波动带、"
                u"覆盖度、以及需要注意的局限\n\n"
                u"## 它不做的事\n\n"
                u"**只报告与参照数据的偏离程度，不判断健康与否，也不构成诊断。**\n\n"
                u"## 反馈\n\n"
                u"希望增加哪个物种：**yuxu446@gmail.com**（离线版页面里也有「用邮件发送」按钮）。")

    st, exist = api("GET", "https://api.github.com/repos/%s/%s/releases/tags/%s" % (OWNER, NAME, TAG))
    if st == 200:
        rel_id = exist["id"]
        # tag 指向旧 commit 时把它移过来，保证 Release 与仓库内容一致
        api("PATCH", "https://api.github.com/repos/%s/%s/git/refs/tags/%s" % (OWNER, NAME, TAG),
            {"sha": commit["sha"], "force": True})
        st, rel = api("PATCH", "https://api.github.com/repos/%s/%s/releases/%d" % (OWNER, NAME, rel_id),
                      {"name": TAG + u" · 爬宠体型参照", "body": rel_body,
                       "draft": False, "prerelease": False})
        print(u"✅ Release %s 已存在 → 已更新，tag 已移到 %s" % (TAG, commit["sha"][:10]))
    else:
        st, rel = api("POST", "https://api.github.com/repos/%s/%s/releases" % (OWNER, NAME), {
            "tag_name": TAG,
            "target_commitish": "main",
            "name": TAG + u" · 爬宠体型参照",
            "body": rel_body,
            "draft": False,
            "prerelease": False,
        })
    if st not in (200, 201):
        print(u"❌ Release 失败 %s: %s" % (st, rel))
        return 1

    # 7) 把 index.html 作为 Release 资源上传（免登录下载）—— **幂等**
    #    ⚠️ 重发时同名资源会撞 422 already_exists，所以先删旧的再传。
    #    不这样做的话，Release 页面上的下载件会永远停在**第一次**发的版本
    #   （仓库源码更新了、用户下载到的却是旧的，是最容易骗过自己的那种不一致）。
    asset = os.path.join(REPO_DIR, "index.html")
    for a in api("GET", "https://api.github.com/repos/%s/%s/releases/%d/assets"
                 % (OWNER, NAME, rel["id"]))[1] or []:
        if a.get("name") == "index.html":
            api("DELETE", "https://api.github.com/repos/%s/%s/releases/assets/%d"
                % (OWNER, NAME, a["id"]))
            print(u"   已删除旧资源 %s（%d 字节）" % (a["name"], a.get("size", 0)))
    url = ("https://uploads.github.com/repos/%s/%s/releases/%d/assets?name=%s"
           % (OWNER, NAME, rel["id"], "index.html"))
    st, a = api("POST", url, raw=open(asset, "rb").read(),
                ctype="text/html; charset=utf-8")
    if st not in (200, 201):
        print(u"⚠️ 资源上传失败 %s: %s" % (st, a))
    else:
        print(u"✅ Release %s 就绪 ｜ 资源 index.html %.1f KB" % (TAG, a.get("size", 0) / 1024.0))
        print(u"   下载：%s" % a.get("browser_download_url", ""))

    print(u"\n仓库：https://github.com/%s/%s" % (OWNER, NAME))
    print(u"发布：https://github.com/%s/%s/releases/tag/%s" % (OWNER, NAME, TAG))
    return 0


if __name__ == "__main__":
    sys.exit(main())
