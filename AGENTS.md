# CSYanKu Agent 契约

先读取 `../AGENTS.md` 和本目录 `CLAUDE.md`。

本项目是 KaoyanVault 的派生静态站，不是内容权威源。

- 可以在用户任务范围内修改 Quartz 源码、配置、样式和构建逻辑。
- `content/` 由 `KaoyanVault/99-题库/` 单向生成，不直接编辑。
- 修改题目内容必须回到 KaoyanVault，再经受控同步产生站点副本。
- `sync.sh` 使用带删除语义的同步，运行前必须得到用户明确授权并先检查影响清单。
- 只存在于本仓库、不存在于 `KaoyanVault/` 的文件会被 `sync.sh` 的 `rsync --delete` 静默删除，必须先加进 `--exclude` 才能长期存活。
- `deploy.sh`、Git commit、Git push 和发布必须由用户明确要求。
- 不编辑 `node_modules/`，不提交凭据或本机路径秘密。

## 站点专属文件

`content/` 由 `rsync --delete` 单向覆盖，**Vault 里没有的文件一律会被删掉**。
2026-09-12 的 `74f4339` 就是这样删掉了 `content/99-题库/index.md`，站点根路径 404 了六天。

新增任何站点专属文件（首页、自定义 404、`CNAME`、`robots.txt` 等）时，必须同时在 `sync.sh`
对应的 `rsync` 上加 `--exclude`，否则下次同步即失效。当前保护清单：

| 位置 | 排除项 | 原因 |
| --- | --- | --- |
| `99-题库` | `_images` | 指向 `../_images` 的符号链接，供 Quartz 解析 wikilink |
| `99-题库` | `index.md` | 站点首页，Vault 中不存在 |
| `99-题库` | `_provenance.json` | 流水线元数据，与题目无关，不参与渲染 |
| `_images` | `错题/` | 错题扫描件，无已发布笔记引用，且含个人手写试卷 |

## 发布范围

仅发布题目内容及其引用的图片。流水线元数据、批次账本、错题扫描件和其他题目无关文件
不进入本仓库：加入 `.gitignore`，并在 `sync.sh` 中排除。
仓库是公开的，加入前先确认内容不含个人隐私信息。
