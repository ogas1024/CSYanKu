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

7. 给定有 $n$ 个元素的一维数组，建立一个有序单链表的最低时间复杂度是（ ）。

A. $O(1)$

B. $O(n)$

C. $O(n^2)$

D. $O(n\log_2n)$

> [!note]- 原题截图
> ![[王道DS 2.3 线性表的链式表示 选择 07.png]]

> [!success]- 答案与解析
> **答案：** D
>
> **解析：** 最低复杂度的做法是先将数组排序，耗时 $O(n\log_2 n)$，再按序建立链表，耗时 $O(n)$，总复杂度仍为 $O(n\log_2 n)$。逐个有序插入会达到 $O(n^2)$。

## 关联

- 知识点：
- 题型：
