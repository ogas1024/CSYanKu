---
source: 王道DS
subject: DS
chapter: 03 栈队列和数组
section: 3.3 栈与队列的应用
qtype: 选择
topic: []
answer: B
answer_status: 已录入
tags: []
---
## 题干

2. 表达式 `a*(b+c)-d` 的后缀表达式是（ ）。

A. `abcd*+-`

B. `abc+*d-`

C. `abc*+d-`

D. `-+*abcd`

> [!note]- 原题截图
> ![[王道DS 3.3 栈与队列的应用 选择 02.png]]

> [!success]- 答案与解析
> **答案：** B
>
> **解析：** 括号内 `b+c` 转为 `bc+`，再与 `a` 做乘法得 `abc+*`，最后减 `d`，得后缀表达式 `abc+*d-`。

## 关联

- 知识点：
- 题型：
