---
source: 王道DS
subject: DS
chapter: 03 栈队列和数组
section: 3.1 栈
qtype: 选择
topic: []
answer: A
answer_status: 已录入
tags: []
---
## 题干

12. 经过以下栈的操作后，变量 `x` 的值为（ ）。

`InitStack(st); Push(st,a); Push(st,b); Pop(st,x); GetTop(st,x);`

A. `a`

B. `b`

C. `NULL`

D. `false`

> [!note]- 原题截图
> ![[王道DS 3.1 栈 选择 12.webp]]

> [!success]- 答案与解析
> **答案：** A
>
> **解析：** 依次压入 `a`、`b` 后，Pop 使 `b` 出栈；此时栈顶为 `a`，GetTop 将 `a` 赋给 `x`。

## 关联

- 知识点：
- 题型：
