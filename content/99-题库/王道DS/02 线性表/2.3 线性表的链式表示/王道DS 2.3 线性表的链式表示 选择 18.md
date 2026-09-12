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

18. 在双链表的两个结点之间插入一个新结点，需要修改（ ）个指针域。

A. 1

B. 3

C. 4

D. 2

> [!note]- 原题截图
> ![[王道DS 2.3 线性表的链式表示 选择 18.png]]

> [!success]- 答案与解析
> **答案：** C
>
> **解析：** 在双链表相邻两结点之间插入新结点，需要修改新结点的 `prior`、`next` 两个指针域，以及原前驱的 `next` 和原后继的 `prior`，共 4 个指针域。

## 关联

- 知识点：
- 题型：
