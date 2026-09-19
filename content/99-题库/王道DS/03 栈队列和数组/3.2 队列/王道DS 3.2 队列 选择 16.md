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

16. 在一个链队列中，假设队头指针为 `front`，队尾指针为 `rear`，`x` 所指向的元素需要入队，则需要执行的操作为（ ）。

A. `front=x, front=front->next`

B. `x->next=front->next, front=x`

C. `rear->next=x, rear=x`

D. `rear->next=x, x->next=NULL, rear=x`

> [!note]- 原题截图
> ![[王道DS 3.2 队列 选择 16.webp]]

> [!success]- 答案与解析
> **答案：** D
>
> **解析：** 新结点入队时先令原队尾的 `next` 指向 `x`，再将 `x->next` 置空，最后令 `rear=x`。

## 关联

- 知识点：
- 题型：
