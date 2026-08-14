---
tags: [题目/选择, 王道DS, DS/03-栈队列和数组/01-栈]
answer: C
---
## 题干

10. 向一个栈顶指针为 top 的链栈（不带头结点）中插入一个 x 结点，则执行（ ）。

A. top->next=x

B. x->next=top->next; top->next=x

C. x->next=top; top=x

D. x->next=top, top=top->next

> [!note]- 原题截图
> ![[王道DS-3.1选-010.png]]

> [!success]- 答案与解析
> **答案：** C
>
> **解析：** 不带头结点的链栈在表头入栈：先令 `x->next=top`，再令 `top=x`。

## 关联

- 知识点：
- 题型：
