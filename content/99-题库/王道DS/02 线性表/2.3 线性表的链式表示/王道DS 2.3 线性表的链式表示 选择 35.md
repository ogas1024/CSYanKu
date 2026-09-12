---
source: 王道DS
subject: DS
chapter: 02 线性表
section: 2.3 线性表的链式表示
qtype: 选择
topic: []
answer: C
answer_status: 已录入
tags: []
---
## 题干

35. 【2023 统考真题】现有非空双链表`L`，其结点结构为 $\boxed{\text{prev}\mid\text{data}\mid\text{next}}$，`prev` 是指向直接前驱结点的指针，`next` 是指向直接后继结点的指针。

若要在 `L` 中指针 `p` 所指向的结点（非尾结点）之后插入指针 `s` 指向的新结点，则在执行语句序列 `s->next=p->next; p->next=s;` 后，下列语句序列中还需要执行的是（ ）。

A. `s->next->prev=p; s->prev=p;`

B. `p->next->prev=s; s->prev=p;`

C. `s->prev=s->next->prev; s->next->prev=s;`

D. `p->next->prev=s->prev; s->next->prev=p;`

> [!note]- 原题截图
> ![[王道DS 2.3 线性表的链式表示 选择 35.png]]

> [!success]- 答案与解析
> **答案：** C
>
> **解析：** 执行给定两句后，`s->next` 已指向原后继，`p->next` 已指向 `s`。还需先令 `s->prev=s->next->prev`（即原来的 `p`），再令 `s->next->prev=s`，故选 C。

## 关联

- 知识点：
- 题型：
