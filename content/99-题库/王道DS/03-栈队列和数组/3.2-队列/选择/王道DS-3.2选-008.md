---
tags: [题目/选择, 王道DS, DS/03-栈队列和数组/02-队列]
answer: D
---
## 题干

8. 假设用数组 `Q[MaxSize]` 实现循环队列，队首指针 `front` 指向队首元素的前一位置，队尾指针 `rear` 指向队尾元素，则判断该队列为空的条件是（ ）。

A. `Q.rear == (Q.front + 1) % MaxSize`

B. `(Q.rear + 1) % MaxSize == Q.front + 1`

C. `(Q.rear + 1) % MaxSize == Q.front`

D. `Q.rear == Q.front`

> [!note]- 原题截图
> ![[王道DS-3.2选-008.png]]

> [!success]- 答案与解析
> **答案：** D
>
> **解析：** 当 `front` 指向队首元素前一位、`rear` 指向队尾元素时，空队状态下两个指针相等。

## 关联

- 知识点：
- 题型：
