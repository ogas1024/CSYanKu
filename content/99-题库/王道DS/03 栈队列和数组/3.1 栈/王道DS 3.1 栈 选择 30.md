---
source: 王道DS
subject: DS
chapter: 03 栈队列和数组
section: 3.1 栈
qtype: 选择
topic: []
answer: D
answer_status: 已录入
tags: []
---
## 题干

30. 【2020 统考真题】对空栈 $S$ 进行 `Push` 和 `Pop` 操作，入栈序列为 $a,b,c,d,e$，经过 `Push`、`Push`、`Pop`、`Push`、`Pop`、`Push`、`Push`、`Pop` 操作后得到的出栈序列是（ ）。

A. $b,a,c$

B. $b,a,e$

C. $b,c,a$

D. $b,c,e$

> [!note]- 原题截图
> ![[王道DS 3.1 栈 选择 30.webp]]

> [!success]- 答案与解析
> **答案：** D
>
> **解析：** 逐步模拟给定的 Push、Pop 序列：第一次 Pop 弹出 `b`，第二次弹出 `c`，第三次弹出 `e`，故出栈序列为 `b,c,e`。

## 关联

- 知识点：
- 题型：
