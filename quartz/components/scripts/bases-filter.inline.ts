// Bases 速查表的客户端筛选条。
//
// @quartz-community/bases-page 的表格是构建期静态渲染的，没有 Obsidian 里那种
// 交互式筛选。整张表已经在 DOM 里，每个单元格带 data-value，所以这里在表格上方
// 加一排下拉 + 搜索框，直接对已渲染的行做显示/隐藏，效果接近 Obsidian 的筛选。
//
// 顺带把插件只内置 en-US 的界面文案换成中文。

const HIDDEN = "qbank-filtered-out"

// 取值超过这个数就不做成下拉（比如题目列），改用搜索框覆盖
const MAX_OPTIONS = 100

// 这些列按 displayName 排除：值域本身没有检索意义，做成下拉只是噪音
const NO_FILTER = new Set(["答案", "分值"])

type RowInfo = {
  tr: HTMLTableRowElement
  values: string[]
  group: string
  text: string
}

type GroupInfo = {
  tr: HTMLTableRowElement
  label: string
  countEl: Element | null
  rows: RowInfo[]
}

type Field = {
  select: HTMLSelectElement
  get: (row: RowInfo) => string
}

function textOf(el: Element | null | undefined): string {
  return (el?.textContent ?? "").trim()
}

function labelled(label: string, control: HTMLElement): HTMLElement {
  const field = document.createElement("label")
  field.className = "qbank-filter-field"
  const name = document.createElement("span")
  name.textContent = label
  field.append(name, control)
  return field
}

function localize(page: Element) {
  const dict: Record<string, string> = {
    Uncategorized: "未分类",
    "No data found.": "没有匹配的题目。",
    "No views defined.": "未定义视图。",
  }
  const selector =
    ".bases-table-group-label, .bases-list-group-label, .bases-board-column-title, .bases-empty-state"
  page.querySelectorAll(selector).forEach((el) => {
    const replacement = dict[textOf(el)]
    if (replacement) el.textContent = replacement
  })

  // 表格视图的条数由筛选条接管，其余视图在这里翻译
  page.querySelectorAll(".bases-view-meta").forEach((el) => {
    const m = textOf(el).match(/^Showing (\d+) of (\d+) entries$/)
    if (!m) return
    el.textContent = m[1] === m[2] ? `共 ${m[2]} 题` : `显示 ${m[1]} / ${m[2]} 题`
  })
}

function readTable(tbody: HTMLTableSectionElement) {
  const rows: RowInfo[] = []
  const groups: GroupInfo[] = []
  let current: GroupInfo | null = null

  for (const tr of Array.from(tbody.rows)) {
    if (tr.classList.contains("bases-table-group-header")) {
      current = {
        tr,
        label: textOf(tr.querySelector(".bases-table-group-label")),
        countEl: tr.querySelector(".bases-table-group-count"),
        rows: [],
      }
      groups.push(current)
      continue
    }
    const info: RowInfo = {
      tr,
      values: Array.from(tr.cells).map((td) => (td.dataset.value ?? "").trim()),
      group: current?.label ?? "",
      text: textOf(tr).toLowerCase(),
    }
    rows.push(info)
    current?.rows.push(info)
  }

  return { rows, groups }
}

function setupView(view: Element, cleanups: (() => void)[]) {
  if (view.querySelector(".qbank-filter")) return

  const table = view.querySelector("table.bases-table")
  const tbody = table?.querySelector("tbody")
  if (!table || !tbody) return

  const { rows, groups } = readTable(tbody as HTMLTableSectionElement)
  if (rows.length === 0) return

  const total = rows.length
  const headers = Array.from(table.querySelectorAll("thead th"))
  const labels = headers.map((th) => textOf(th.querySelector(".bases-table-header")) || textOf(th))

  const bar = document.createElement("div")
  bar.className = "qbank-filter"

  const search = document.createElement("input")
  search.type = "search"
  search.className = "qbank-filter-search"
  // 只搜表格里已渲染的文字（题号、章节、考点…），题面全文搜索走侧栏的站点搜索
  search.placeholder = "在本表中搜索"
  bar.appendChild(labelled("搜索", search))

  const fields: Field[] = []
  const addField = (label: string, get: (row: RowInfo) => string) => {
    const values = Array.from(new Set(rows.map(get))).filter((v) => v !== "")
    if (values.length < 2 || values.length > MAX_OPTIONS) return
    values.sort((a, b) => a.localeCompare(b, "zh-Hans-CN", { numeric: true }))

    const select = document.createElement("select")
    select.className = "qbank-filter-select"
    const all = document.createElement("option")
    all.value = ""
    all.textContent = "全部"
    select.appendChild(all)
    for (const value of values) {
      const option = document.createElement("option")
      option.value = value
      option.textContent = value
      select.appendChild(option)
    }
    fields.push({ select, get })
    bar.appendChild(labelled(label, select))
  }

  // 分组属性（年份 / 章 / 考点）只出现在分组标题里，不是列，单独做成一个筛选项
  const groupProperty = groups.length
    ? textOf(groups[0].tr.querySelector(".bases-table-group-property"))
    : ""
  if (groupProperty) addField(groupProperty, (row) => row.group)

  // 第 0 列是题目链接，取值唯一，交给搜索框
  labels.forEach((label, i) => {
    if (i === 0 || label === "" || NO_FILTER.has(label)) return
    addField(label, (row) => row.values[i] ?? "")
  })

  const actions = document.createElement("div")
  actions.className = "qbank-filter-actions"

  const reset = document.createElement("button")
  reset.type = "button"
  reset.className = "qbank-filter-reset"
  reset.textContent = "清除"

  const count = document.createElement("span")
  count.className = "qbank-filter-count"

  actions.append(count, reset)
  bar.appendChild(actions)

  const apply = () => {
    const query = search.value.trim().toLowerCase()
    const active = fields.filter((f) => f.select.value !== "")
    const hitsQuery = (row: RowInfo) => query === "" || row.text.includes(query)

    let visible = 0
    for (const row of rows) {
      let ok = hitsQuery(row)
      if (ok) {
        for (const field of active) {
          if (field.get(row) !== field.select.value) {
            ok = false
            break
          }
        }
      }
      row.tr.classList.toggle(HIDDEN, !ok)
      if (ok) visible++
    }

    for (const group of groups) {
      let shown = 0
      for (const row of group.rows) {
        if (!row.tr.classList.contains(HIDDEN)) shown++
      }
      group.tr.classList.toggle(HIDDEN, shown === 0)
      if (group.countEl) group.countEl.textContent = String(shown)
    }

    // 级联：每个下拉只留下在其他筛选条件下还有题的选项（选定科目后，章就只剩该科的章）
    for (const field of fields) {
      const others = active.filter((other) => other !== field)
      const allowed = new Set<string>()
      for (const row of rows) {
        if (!hitsQuery(row)) continue
        let ok = true
        for (const other of others) {
          if (other.get(row) !== other.select.value) {
            ok = false
            break
          }
        }
        if (ok) allowed.add(field.get(row))
      }
      for (const option of Array.from(field.select.options)) {
        // 选中项永远留着，否则搜索无结果时下拉会显示空白
        const keep = option.value === "" || option.selected || allowed.has(option.value)
        option.hidden = !keep
        option.disabled = !keep
      }
    }

    const filtering = query !== "" || active.length > 0
    reset.disabled = !filtering
    count.textContent = filtering ? `筛出 ${visible} / ${total} 题` : `共 ${total} 题`
  }

  const onInput = () => apply()
  search.addEventListener("input", onInput)
  cleanups.push(() => search.removeEventListener("input", onInput))
  for (const field of fields) {
    field.select.addEventListener("change", onInput)
    cleanups.push(() => field.select.removeEventListener("change", onInput))
  }
  const onReset = () => {
    search.value = ""
    for (const field of fields) field.select.value = ""
    apply()
  }
  reset.addEventListener("click", onReset)
  cleanups.push(() => reset.removeEventListener("click", onReset))

  // 原来的条数显示在横向滚动容器里，会跟着表格滚走，这里换成筛选条上的计数
  view.querySelector(".bases-view-meta")?.remove()
  view.insertBefore(bar, view.firstChild)
  apply()
}

function setupBases() {
  const cleanups: (() => void)[] = []
  for (const page of Array.from(document.querySelectorAll(".bases-page"))) {
    localize(page)
    for (const view of Array.from(page.querySelectorAll(".bases-view"))) {
      setupView(view, cleanups)
    }
  }
  if (cleanups.length > 0) {
    window.addCleanup?.(() => cleanups.forEach((fn) => fn()))
  }
}

document.addEventListener("nav", () => setupBases())
