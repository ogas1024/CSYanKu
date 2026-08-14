---
tags: [题目/选择, 王道DS, DS/02-线性表/03-线性表的链式表示]
answer: D
---
## 题干

32. 【2016 统考真题】已知一个带有表头结点的循环双链表 `L`，结点结构为 $\boxed{\text{prev}\mid\text{data}\mid\text{next}}$，其中 `prev` 和 `next` 分别是指向其直接前驱和直接后继结点的指针。

现要删除指针 `p` 所指的结点，正确的语句序列是（ ）。

A. `p->next->prev=p->prev; p->prev->next=p->prev; free(p);`

B. `p->next->prev=p->next; p->prev->next=p->next; free(p);`

C. `p->next->prev=p->next; p->prev->next=p->prev; free(p);`

D. `p->next->prev=p->prev; p->prev->next=p->next; free(p);`

> [!note]- 原题截图
> ![[王道DS-2.3选-032.png]]

> [!success]- 答案与解析
> **答案：** D
>
> **解析：** 删除 `p` 时，应让后继结点的 `prev` 指向 `p` 的前驱，并让前驱结点的 `next` 指向 `p` 的后继，随后释放 `p`：`p->next->prev=p->prev; p->prev->next=p->next; free(p);`。

## 关联

- 知识点：
- 题型：
