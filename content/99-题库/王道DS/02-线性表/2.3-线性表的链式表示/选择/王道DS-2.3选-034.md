---
tags: [题目/选择, 王道DS, DS/02-线性表/03-线性表的链式表示]
answer: D
---
## 题干

34. 【2021 统考真题】已知头指针 `h` 指向一个带头结点的非空单循环链表，结点结构为 $\boxed{\text{data}\mid\text{next}}$，其中 `next` 是指向直接后继结点的指针，`p` 是尾指针，`q` 是临时指针。

现要删除该链表的第一个元素，正确的语句序列是（ ）。

A. `h->next=h->next->next; q=h->next; free(q);`

B. `q=h->next; h->next=h->next->next; free(q);`

C. `q=h->next; h->next=q->next; if (p!=q) p=h; free(q);`

D. `q=h->next; h->next=q->next; if (p==q) p=h; free(q);`

> [!note]- 原题截图
> ![[王道DS-2.3选-034.png]]

> [!success]- 答案与解析
> **答案：** D
>
> **解析：** 先令 `q=h->next` 保存首元结点，再令 `h->next=q->next` 断开它。若链表原来只有一个元素，则 `p==q`，删除后必须令尾指针 `p=h`，最后释放 `q`，故 D 正确。

## 关联

- 知识点：
- 题型：
