---
source: 王道DS
subject: DS
chapter: 02 线性表
section: 2.3 线性表的链式表示
qtype: 选择
topic: []
answer: B、A
answer_status: 已录入
tags: []
---
## 题干

11. 对于一个头指针为 `head` 的带头结点的单链表，判定该表为空表的条件是（ ）；

对于不带头结点的单链表，判定空表的条件为（ ）。

A. `head==NULL`

B. `head->next==NULL`

C. `head->next==head`

D. `head!=NULL`

> [!note]- 原题截图
> ![[王道DS 2.3 线性表的链式表示 选择 11.webp]]

> [!success]- 答案与解析
> **答案：** B、A
>
> **解析：** 带头结点时，`head` 始终指向头结点，空表表现为头结点的 `next` 为空，即 `head->next==NULL`（B）；不带头结点时，空表没有任何结点，故 `head==NULL`（A）。

## 关联

- 知识点：
- 题型：
