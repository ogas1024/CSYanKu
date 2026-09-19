---
source: 王道DS
subject: DS
chapter: 08 排序
section: 8.2 插入排序
qtype: 选择
topic: []
answer: C
answer_status: 已录入
tags: []
---
## 题干

13. 折半插入排序算法的时间复杂度为（ ）。

A. $O(n)$

B. $O(n \log_{2} n)$

C. $O(n^{2})$

D. $O(n^{3})$

> [!note]- 原题截图
> ![[王道DS 8.2 插入排序 选择 13.webp]]

> [!success]- 答案与解析
> **答案：** C
>
> **解析：** 折半查找只减少寻找插入位置时的比较次数，元素后移次数没有减少；最坏和平均情况下仍需移动平方数量级的元素，故时间复杂度仍为 $O(n^2)$。

## 关联

- 知识点：
- 题型：
