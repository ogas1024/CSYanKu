---
tags: [题目/选择, 王道DS, DS/02-线性表/03-线性表的链式表示]
answer: A
---
## 题干

16. 在双链表存储结构中，删除 `p` 所指的结点时必须修改指针（ ）。

A. `p->prior->next=p->next; p->next->prior=p->prior;`

B. `p->prior=p->prior->prior; p->prior->next=p;`

C. `p->next->prior=p; p->next=p->next->next;`

D. `p->next=p->prior->prior; p->prior=p->next->next;`

> [!note]- 原题截图
> ![[王道DS-2.3选-016.png]]

> [!success]- 答案与解析
> **答案：** A
>
> **解析：** 删除双链表结点 `p` 时，要把它的前驱与后继直接相连：`p->prior->next=p->next; p->next->prior=p->prior;`，随后再释放 `p`。

## 关联

- 知识点：
- 题型：
