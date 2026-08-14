---
tags: [题目/选择, 王道DS, DS/03-栈队列和数组/02-队列]
answer: D
---
## 题干

16. 在一个链队列中，假设队头指针为 front，队尾指针为 rear，x 所指向的元素需要入队，则需要执行的操作为（ ）。

A. front=x, front=front->next

B. x->next=front->next, front=x

C. rear->next=x, rear=x

D. rear->next=x, x->next=NULL, rear=x

> [!note]- 原题截图
> ![[王道DS-3.2选-016.png]]

> [!success]- 答案与解析
> **答案：** D
>
> **解析：** 新结点入队时先令原队尾的 `next` 指向 `x`，再将 `x->next` 置空，最后令 `rear=x`。

## 关联

- 知识点：
- 题型：
