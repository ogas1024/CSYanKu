---
source: 王道DS
subject: DS
chapter: 08 排序
section: 8.5 归并排序和基数排序
qtype: 选择
topic: []
answer: B
answer_status: 已录入
tags: []
---
## 题干

5. 2 路归并排序中，归并趟数的数量级是（ ）。

A. $O(n)$

B. $O(\log_2 n)$

C. $O(n\log_2 n)$

D. $O(n^2)$

> [!note]- 原题截图
> ![[王道DS 8.5 归并排序和基数排序 选择 05.png]]

> [!success]- 答案与解析
> **答案：** B
>
> **解析：** 每一趟二路归并使有序子表长度约翻倍，经过 m 趟覆盖 n 个元素需 $2^m>=n$，故趟数为 $ceil(log_2 n)$，数量级为 $O(log_2 n)$。

## 关联

- 知识点：
- 题型：
