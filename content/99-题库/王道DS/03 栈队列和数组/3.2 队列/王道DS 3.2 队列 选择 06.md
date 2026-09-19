---
source: 王道DS
subject: DS
chapter: 03 栈队列和数组
section: 3.2 队列
qtype: 选择
topic: []
answer: C
answer_status: 已录入
tags: []
---
## 题干

6. 已知循环队列的存储空间为数组 `A[21]`，`front` 指向队首元素的前一个位置，`rear` 指向队尾元素，假设当前 `front` 和 `rear` 的值分别为 8 和 3，则该队列的长度为（ ）。

A. 5

B. 6

C. 16

D. 17

> [!note]- 原题截图
> ![[王道DS 3.2 队列 选择 06.webp]]

> [!success]- 答案与解析
> **答案：** C
>
> **解析：** 数组容量为 21，队列长度为 `(rear-front+21)%21=(3-8+21)%21=16`。

## 关联

- 知识点：
- 题型：
