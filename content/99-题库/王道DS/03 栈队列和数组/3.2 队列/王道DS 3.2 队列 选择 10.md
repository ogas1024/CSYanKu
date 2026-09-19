---
source: 王道DS
subject: DS
chapter: 03 栈队列和数组
section: 3.2 队列
qtype: 选择
topic: []
answer: A
answer_status: 已录入
tags: []
---
## 题干

10. 假设用 `A [0...n]` 实现循环队列，`front`、`rear` 分别指向队首元素的前一个位置和队尾元素。

若用 `(rear+1) % (n+1) == front` 作为队满标志，则（ ）。

A. 可用 `front==rear` 作为队空标志

B. 队列中最多可有 $n+1$ 个元素

C. 可用 `front>rear` 作为队空标志

D. 可用 `(front+1) % (n+1) == rear` 作为队空标志

> [!note]- 原题截图
> ![[王道DS 3.2 队列 选择 10.webp]]

> [!success]- 答案与解析
> **答案：** A
>
> **解析：** 已用 `(rear+1)%(n+1)==front` 作为队满标志，说明牺牲一个单元来区分队空与队满，因而可用 `front==rear` 判断队空。

## 关联

- 知识点：
- 题型：
