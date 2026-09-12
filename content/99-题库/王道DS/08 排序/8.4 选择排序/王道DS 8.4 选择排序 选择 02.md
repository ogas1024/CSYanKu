---
source: 王道DS
subject: DS
chapter: 08 排序
section: 8.4 选择排序
qtype: 选择
topic: []
answer: C
answer_status: 已录入
tags: []
---
## 题干

2. 简单选择排序算法的比较次数和移动次数分别为（ ）。

A. $O(n)$,  $O(\log_{2}n)$

B. $O(\log_{2}n)$,  $O(n^{2})$

C. $O(n^{2})$,  $O(n)$

D. $O(n\log_{2}n)$,  $O(n)$

> [!note]- 原题截图
> ![[王道DS 8.4 选择排序 选择 02.png]]

> [!success]- 答案与解析
> **答案：** C
>
> **解析：** 简单选择排序每趟都要扫描全部剩余元素，比较总数为 $n(n-1)/2$，即 $O(n^2)$；每趟至多交换一次，移动次数为 $O(n)$。

## 关联

- 知识点：
- 题型：
