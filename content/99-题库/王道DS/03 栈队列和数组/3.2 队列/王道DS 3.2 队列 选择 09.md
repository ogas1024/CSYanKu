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

9. 假设循环队列 `Q[MaxSize]` 的队首指针为 `front`，队尾指针为 `rear`，队列的最大容量为 `MaxSize`，此外，该队列再没有其他数据成员，则判断该队列已满条件是（ ）。

A. `Q.front == Q.rear`

B. `Q.front + Q.rear >= MaxSize`

C. `Q.front == (Q.rear + 1) % MaxSize`

D. `Q.rear == (Q.front + 1) % MaxSize`

> [!note]- 原题截图
> ![[王道DS 3.2 队列 选择 09.webp]]

> [!success]- 答案与解析
> **答案：** C
>
> **解析：** 没有额外的计数或标志位时，需牺牲一个存储单元区分队空和队满；队满条件为 `front==(rear+1)%MaxSize`。

## 关联

- 知识点：
- 题型：
