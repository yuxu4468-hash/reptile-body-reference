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
# ⚠️ 版本号**只有一个来源**：仓库/项目根的 `VERSION` 文件。
#    ⚠️ 这个脚本本身是**发布在仓库里**的 —— 所以版本号绝不能在脚本里写死，
#    否则 GitHub 上谁点开源码都会看到一个过期的版本号，
#    即使 Releases 页明明已经是最新的（2026-10-08 实际发生过）。
def _version():
    for cand in (os.path.join(ROOT, "VERSION"),
                 os.path.join(os.path.dirname(os.path.abspath(__file__)), "VERSION")):
        if os.path.isfile(cand):
            v = io.open(cand, encoding="utf-8").read().strip()
            if v:
                return v if v.startswith("v") else ("v" + v)
    return "v0.0.0-unknown"


TAG = _version()
# 版本号默认从 VERSION 读；也可临时指定：python tools/publish_github.py --tag vX.Y.Z
# ⚠️ 注释里**不要写具体版本号** —— 这个脚本会随仓库发布，
#    写过期的版本号就是用户看到的那个「版本号没更新」（见 docs/33 的 E23）。
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


# ⚠️ **发布脚本不能无脑上传目录里的一切**。
#    上一版就是这么做的 —— 结果把 `tools/__pycache__/*.pyc`
#    （用 importlib 导入构建脚本时自动生成的字节码缓存）也传上去了。
#    `.gitignore` 里虽然写了 `__pycache__/`，但**本脚本不看 .gitignore** —— 所以这里显式排除。
EXCLUDE_DIRS = {"__pycache__", ".git", "node_modules", ".dsh-vision-toolkit"}
EXCLUDE_EXT = {".pyc", ".pyo", ".bak", ".tmp", ".log", ".DS_Store"}
EXCLUDE_NAMES = {".DS_Store", "Thumbs.db"}


def collect():
    out = []
    for dp, dn, fn in os.walk(REPO_DIR):
        dn[:] = [d for d in dn if d not in EXCLUDE_DIRS]
        for f in fn:
            if f in EXCLUDE_NAMES or os.path.splitext(f)[1].lower() in EXCLUDE_EXT:
                continue
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
    # ⚠️ 提交信息**不能写死**。原来写死了版本号与「首个公开版本」这几个字，
    #    于是每个版本的 commit 在**提交历史**里都显示同一个旧版本号，
    #    而且后续版本还都自称「首个公开版本」。
    msg = (TAG + u" · 爬宠体型参照\n\n"
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
                u"\u2b07\ufe0f **index.html** \u2014\u2014 \u70b9\u4e0b\u9762\u7684\u9644\u4ef6\u4e0b\u8f7d\uff0c"
                u"\u53cc\u51fb\u7528\u4efb\u610f\u6d4f\u89c8\u5668\u6253\u5f00\u5373\u53ef\u3002\n"
                u"\u4e0d\u9700\u8981\u8054\u7f51\u3001\u4e0d\u9700\u8981\u5b89\u88c5\u3001\u4e0d\u9700\u8981\u670d\u52a1\u5668\u3002\n\n"
                u"## \u8fd9\u4e00\u7248\u6709\u4ec0\u4e48\n\n"
                u"- **52 \u4e2a\u7269\u79cd**\uff0845 \u4e2a\u6709\u6570\u636e\uff0c7 \u4e2a\u5982\u5b9e\u6807\u6ce8\u300c\u6682\u65e0\u53ef\u9760\u6570\u636e\u300d\uff09\n"
                u"- **135 \u6761\u53c2\u7167\u66f2\u7ebf**\uff08\u4f53\u957f-\u4f53\u91cd / \u5e74\u9f84-\u4f53\u957f\uff09\n"
                u"- \u641c\u7d22\u652f\u6301\u4e2d\u6587\u6b63\u540d / \u4fd7\u540d / \u5b66\u540d / \u62fc\u97f3 / \u62fc\u97f3\u9996\u5b57\u6bcd\n"
                u"- \u67e5\u8be2\u5bf9\u7167\uff1a\u8f93\u5165\u4f53\u957f\u3001\u4f53\u91cd\u6216\u5e74\u9f84\uff0c\u53ef\u81ea\u9009**\u6d4b\u91cf\u53e3\u5f84**\u4e0e**\u53c2\u7167\u5206\u7ec4**\n"
                u"- \u6bcf\u5f20\u5361\u7247\u7ed9\u51fa\uff1a\u53e3\u5f84\u3001\u6837\u672c\u91cf\u3001\u6765\u6e90\u3001\u65b9\u7a0b\u4e0e R\u00b2\u3001"
                u"95% \u6ce2\u52a8\u5e26\u3001\u8986\u76d6\u5ea6\u3001\u4ee5\u53ca\u9700\u8981\u6ce8\u610f\u7684\u5c40\u9650\n\n"
                u"## \u2b50 \u6211\u4eec\u5728\u516c\u5f00\u5f81\u96c6\u6570\u636e\n\n"
                u"**\u5982\u679c\u4f60\u624b\u4e0a\u6709\u9972\u517b\u8bb0\u5f55\uff0c\u6b22\u8fce\u63d0\u4f9b\u7ed9\u6211\u4eec\u3002**\n\n"
                u"\u4e0d\u9700\u8981\u4f60\u662f\u7e41\u6b96\u8005\u6216\u517b\u6b96\u573a\uff1b**\u6ca1\u6709\u6570\u91cf\u95e8\u69db**"
                u"\uff08\u6211\u4eec\u81ea\u5df1\u7684\u66f2\u7ebf\u91cc\u5c31\u6709 n<30 \u7684\uff0c\u6700\u5c0f n=3\uff09\uff0c"
                u"\u8bb0\u5f55\u4e5f**\u4e0d\u5fc5\u5b8c\u6574**\u3002\n\n"
                u"\u9700\u8981\u7684\u53ea\u6709\u4e09\u6837\uff1a**\u4f53\u957f\u3001\u4f53\u91cd\u3001\u5e74\u9f84**\u3002"
                u"\u53e3\u5f84\u600e\u4e48\u91cf\u3001\u9700\u8981\u54ea\u4e9b\u5b57\u6bb5\uff0c"
                u"\u89c1\u4ed3\u5e93\u91cc\u7684 `docs/43_\u7ed9\u613f\u610f\u63d0\u4f9b\u6570\u636e\u7684\u4eba.md` "
                u"\u4e0e\u53ef\u76f4\u63a5\u586b\u7684 `docs/43_\u6570\u636e\u6a21\u677f.csv`\u3002\n\n"
                u"\u5f81\u96c6\u6765\u7684\u6570\u636e\u4f1a**\u5355\u72ec\u6807\u660e\u3001\u5217\u51fa**\uff0c"
                u"\u4e0e\u6587\u732e\u6570\u636e\u5206\u5f00\uff1b**\u5bf9\u5916\u9ed8\u8ba4\u4e0d\u7f72\u540d**\uff0c\u4e5f\u53ef\u968f\u65f6\u8981\u6c42\u5220\u9664\u3002\n\n"
                u"## \u5b83\u4e0d\u505a\u7684\u4e8b\n\n"
                u"**\u53ea\u62a5\u544a\u4e0e\u53c2\u7167\u6570\u636e\u7684\u504f\u79bb\u7a0b\u5ea6\uff0c\u4e0d\u5224\u65ad\u5065\u5eb7\u4e0e\u5426\uff0c"
                u"\u4e5f\u4e0d\u6784\u6210\u8bca\u65ad\u3002**\n\n"
                u"## \u53cd\u9988\n\n"
                u"\u5e0c\u671b\u589e\u52a0\u54ea\u4e2a\u7269\u79cd\u3001\u6216\u53d1\u73b0\u54ea\u6761\u66f2\u7ebf\u4e0d\u5bf9\uff1a"
                u"**yuxu446@gmail.com**\uff0c\u6216\u5728 Issues \u91cc\u63d0\u3002")

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
