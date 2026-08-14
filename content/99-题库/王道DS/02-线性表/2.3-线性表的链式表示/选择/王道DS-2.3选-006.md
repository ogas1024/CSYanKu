---
tags: [题目/选择, 王道DS, DS/02-线性表/03-线性表的链式表示]
answer: C
---
## 题干

6. 在一个单链表中，已知 `q` 所指结点是 `p` 所指结点的前驱结点，若在 `q` 和 `p` 之间插入结点 `s`，则执行（ ）。

A. `s->next=p->next; p->next=s;`

B. `p->next=s->next; s->next=p;`

C. `q->next=s; s->next=p;`

D. `p->next=s; s->next=q;`

> [!note]- 原题截图
> ![[王道DS-2.3选-006.png]]

> [!success]- 答案与解析
> **答案：** C
>
> **解析：** 原来有 `q->next == p`。插入 `s` 后，应让 `q` 指向 `s`，再让 `s` 指向 `p`，即 `q->next=s; s->next=p;`。

## 关联

- 知识点：
- 题型：
