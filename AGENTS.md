# CSYanKu Agent 契约

先读取 `../AGENTS.md` 和本目录 `CLAUDE.md`。

本项目是 KaoyanVault 的派生静态站，不是内容权威源。

- 可以在用户任务范围内修改 Quartz 源码、配置、样式和构建逻辑。
- `content/` 由 `KaoyanVault/99-题库/` 单向生成，不直接编辑。
- 修改题目内容必须回到 KaoyanVault，再经受控同步产生站点副本。
- `sync.sh` 使用带删除语义的同步，运行前必须得到用户明确授权并先检查影响清单。
- `deploy.sh`、Git commit、Git push 和发布必须由用户明确要求。
- 不编辑 `node_modules/`，不提交凭据或本机路径秘密。
