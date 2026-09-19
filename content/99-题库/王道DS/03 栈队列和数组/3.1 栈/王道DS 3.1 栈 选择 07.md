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

7. 设有一个空栈，栈顶指针为 `1000H`，栈向高地址方向增长，每个元素占一个存储单元，执行 `Push`、`Push`、`Pop`、`Push`、`Pop`、`Push`、`Pop`、`Push` 操作后，栈顶指针为（ ）。

A. `1002H`

B. `1003H`

C. `1004H`

D. `1005H`

> [!note]- 原题截图
> ![[王道DS 3.1 栈 选择 07.webp]]

> [!success]- 答案与解析
> **答案：** A
>
> **解析：** 栈向高地址增长，每次 Push 使 `top` 加 1，每次 Pop 使 `top` 减 1。给定序列后净入栈 2 次，栈顶指针为 `1002H`。

## 关联

- 知识点：
- 题型：
