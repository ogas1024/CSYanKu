---
source: 王道DS
subject: DS
chapter: 03 栈队列和数组
section: 3.2 队列
qtype: 选择
topic: []
answer: D
answer_status: 已录入
tags: []
---
## 题干

5. 循环队列存储在数组 `A[0...n]` 中，入队时的操作为（ ）。

A. `rear=rear+1`

B. `rear=(rear+1) mod (n-1)`

C. `rear=(rear+1) mod n`

D. `rear=(rear+1) mod (n+1)`

> [!note]- 原题截图
> ![[王道DS 3.2 队列 选择 05.webp]]

> [!success]- 答案与解析
> **答案：** D
>
> **解析：** 数组 `A[0...n]` 共有 $n+1$ 个位置，循环队列的队尾指针应按 `rear=(rear+1) mod (n+1)` 循环前进。

## 关联

- 知识点：
- 题型：
