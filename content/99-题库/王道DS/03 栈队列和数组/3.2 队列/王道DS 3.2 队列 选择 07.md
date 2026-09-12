---
source: 王道DS
subject: DS
chapter: 03 栈队列和数组
section: 3.2 队列
qtype: 选择
topic: []
answer: B
answer_status: 已录入
tags: []
---
## 题干

7. 若用数组 `A[0..5]` 来实现循环队列，且当前 `rear` 和 `front` 的值分别为 1 和 5，当从队列中删除一个元素，再加入两个元素后，`rear` 和 `front` 的值分别为（ ）。

A. 3 和 4

B. 3 和 0

C. 5 和 0

D. 5 和 1

> [!note]- 原题截图
> ![[王道DS 3.2 队列 选择 07.png]]

> [!success]- 答案与解析
> **答案：** B
>
> **解析：** 删除一个元素后 `front=(5+1)%6=0`；再入队两个元素后 `rear=(1+2)%6=3`，故 `rear=3`、`front=0`。

## 关联

- 知识点：
- 题型：
