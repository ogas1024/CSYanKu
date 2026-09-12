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

22. 【2014 统考真题】循环队列放在一维数组 `A[0...M-1]` 中，`end1` 指向队首元素，`end2` 指向队尾元素的后一个位置。

假设队列两端均可进行入队和出队操作，队列中最多能容纳 $M-1$ 个元素。

初始时为空。

下列判断队空和队满的条件中，正确的是（ ）。

A. 队空：`end1 == end2`；

队满：`end1 == (end2 + 1) mod M`

B. 队空：`end1 == end2`；

队满：`end2 == (end1 + 1) mod (M - 1)`

C. 队空：`end2 == (end1 + 1) mod M`；

队满：`end1 == (end2 + 1) mod M`

D. 队空：`end1 == (end2 + 1) mod M`；

队满：`end2 == (end1 + 1) mod (M - 1)`

> [!note]- 原题截图
> ![[王道DS 3.2 队列 选择 22.png]]

> [!success]- 答案与解析
> **答案：** A
>
> **解析：** `end1` 指向队首，`end2` 指向队尾后一位，空队时两者相等。队列最多容纳 $M-1$ 个元素，故队满时 `end1==(end2+1) mod M`。

## 关联

- 知识点：
- 题型：
