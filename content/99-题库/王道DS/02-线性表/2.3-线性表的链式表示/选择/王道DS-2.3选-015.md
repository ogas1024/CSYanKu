---
tags: [题目/选择, 王道DS, DS/02-线性表/03-线性表的链式表示]
answer: D
---
## 题干

15. 在双链表中向 `p` 所指的结点之前插入一个结点 `q` 的操作为（ ）。

A. `p->prior=q; q->next=p; p->prior->next=q; q->prior=p->prior;`

B. `q->prior=p->prior; p->prior->next=q; q->next=p; p->prior=q->next;`

C. `q->next=p; p->next=q; q->prior->next=q; q->next=p;`

D. `p->prior->next=q; q->next=p; q->prior=p->prior; p->prior=q;`

> [!note]- 原题截图
> ![[王道DS-2.3选-015.png]]

> [!success]- 答案与解析
> **答案：** D
>
> **解析：** 在 `p` 前插入 `q`，应先令 `p->prior->next=q`，再设置 `q->next=p`、`q->prior=p->prior`，最后令 `p->prior=q`。选项 D 的次序不会丢失原前驱指针。

## 关联

- 知识点：
- 题型：
