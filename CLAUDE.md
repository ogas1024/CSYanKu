@AGENTS.md

# CSYanKu — 考研题库静态站

Quartz v5 静态站，发布 vault 中 99-题库 的 10074 道题，仅供朋友在线浏览。
线上地址：`https://ogas1024.github.io/CSYanKu`

---

## 架构

```
KaoyanVault/          ← Obsidian vault（权威源）
  99-题库/
  _images/
CSYanKu/              ← 本项目（独立 git repo）
  content/            ← sync.sh 从 vault rsync 过来的副本
  quartz/             ← Quartz 源码（含自定义脚本/样式）
  sync.sh             ← vault → content 同步
  deploy.sh           ← 一键 sync + commit + push
```

**内容流向是单向的**：vault → CSYanKu/content。
`content/` 下的文件是 sync 的产物，不直接编辑。

---

## Agent 的边界

| 可以做 | 不可以做 |
|---|---|
| 修改 Quartz 配置 / 自定义脚本 / 样式 | 直接编辑 `content/` 下的 md 或图片 |
| 跑 `sync.sh` 同步内容 | 自主跑 `deploy.sh` 或 `git push`（**用户发起**） |
| 本地 `npx quartz build --serve` 预览验证 | 改 GitHub Actions 工作流（除非用户要求） |
| 修改 Quartz 插件配置（`quartz.config.default.yaml`） | 动 `node_modules/` 里的代码 |

要改题目内容，去 vault 的 `99-题库/` 改，再 sync 过来。

---

## 关键文件

- `quartz.config.default.yaml` — 站点配置（baseUrl、插件、主题、ignorePatterns）
- `quartz/plugins/emitters/componentResources.ts` — 注入的前端脚本（复制按钮等）
- `quartz/styles/custom.scss` — 自定义样式
- `content/99-题库/速查表/*.base` — 站点专属 Bases 速查表，一份资料一页（408真题 / 数一真题 / 数二真题 / 数一880 / 数二880 / 数十年 / 王道 / relax1000），`sync.sh` 已排除
- `quartz/components/scripts/bases-filter.inline.ts` — Bases 表格的客户端筛选条（下拉 + 表内搜索 + 级联置灰）与界面文案中文化
- `sync.sh` — rsync vault → content（题库 + 图片）
- `deploy.sh` — 一键 sync + commit + push
- `.github/workflows/deploy.yml` — GitHub Actions 部署到 Pages

---

## 本地开发

Node 22（`mise.toml` 已锁定），Node 24 会导致 esbuild 死锁。

```bash
npm install --legacy-peer-deps   # 首次
./sync.sh                        # 同步内容
npx quartz build --serve -d content/99-题库
```

---

## 技术备忘

- KaTeX 配置了 `output: htmlAndMathml`——复制按钮依赖 `<annotation>` 元素提取 LaTeX 源码，不能改回 `html`
- `_images` 不在 `ignorePatterns` 中（图片需要被 Quartz 处理），但在 explorer 的 `filterFn` 中隐藏
- `npm install` 必须加 `--legacy-peer-deps`
- 部署后约 2 分钟生效
- Bases 的表格是构建期静态渲染的，插件本身没有交互筛选；筛选条是自己加的一层，靠单元格上的 `data-value` 和分组标题对已渲染的行做显示/隐藏——改动 `.base` 的列会直接改变可筛选的维度
- Bases：`@quartz-community/bases-page` 的 `groupBy.direction` 无效（分组顺序 = 排序后首次出现顺序），要控制分组顺序必须把 groupBy 的属性放进 `sort` 第一位；`summaries` 的 `Count` 未实现（会原样打印 `Count`），计数用 `Filled`；插件只内置 en-US 文案，中文化在 `bases-filter.inline.ts` 里一并处理
