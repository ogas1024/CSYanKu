---
source: 王道DS
subject: DS
chapter: 02 线性表
section: 2.3 线性表的链式表示
qtype: 选择
topic: []
answer: D
answer_status: 已录入
tags: []
---
## 题干

22. 对于一个带头结点的循环双链表 `L`，判断该表为空表的条件是（ ）。

A. `L->prior==L&&L->next==NULL`

B. `L->prior==NULL&&L->next==NULL`

C. `L->prior==NULL&&L->next==L`

D. `L->prior==L&&L->next==L`

> [!note]- 原题截图
> ![[王道DS 2.3 线性表的链式表示 选择 22.png]]

> [!success]- 答案与解析
> **答案：** D
>
> **解析：** 带头结点的循环双链表为空时，头结点同时是自身的直接前驱和直接后继，因此 `L->prior==L && L->next==L`。

## 关联

- 知识点：
- 题型：
