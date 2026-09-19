---
source: 王道DS
subject: DS
chapter: 08 排序
section: 8.3 交换排序
qtype: 选择
topic: []
answer: B、C
answer_status: 已录入
tags: []
---
## 题干

13. 对 $n$ 个关键字进行快速排序，最大递归深度为（ ），最小递归深度为（ ）。

A. 1

B. $n$

C. $\log_2 n$

D. $n\log_2 n$

> [!note]- 原题截图
> ![[王道DS 8.3 交换排序 选择 13.webp]]

> [!success]- 答案与解析
> **答案：** B、C
>
> **解析：** 快速排序最坏时每次划分只减少一个元素，递归树退化为单链，最大深度为 n；最好时每次近似等分，最小深度为 $log_2 n$。

## 关联

- 知识点：
- 题型：
