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

27. 某线性表用带头结点的循环单链表存储，头指针为 `head`，当 `head->next->next==head` 成立时，线性表长度可能是（ ）

A. 0

B. 1

C. 2

D. 可能为 0 或 1

> [!note]- 原题截图
> ![[王道DS 2.3 线性表的链式表示 选择 27.webp]]

> [!success]- 答案与解析
> **答案：** D
>
> **解析：** 空表时 `head->next==head`，自然有 `head->next->next==head`；只有一个元素时，头结点指向该元素，而该元素又回指头结点，同样满足条件。因此长度可能为 0 或 1。

## 关联

- 知识点：
- 题型：
