---
source: 王道DS
subject: DS
chapter: 08 排序
section: 8.5 归并排序和基数排序
qtype: 选择
topic: []
answer: D、C
answer_status: 已录入
tags: []
---
## 题干

3. 在下列排序算法中，平均情况下空间复杂度为 $O(n)$的是（ ）；

最坏情况下空间复杂度为 $O(n)$的是（ ）。

I. 希尔排序

II. 堆排序

III. 冒泡排序

IV. 归并排序

V. 快速排序

VI. 基数排序

A. I、IV、VI

B. II、V

C. IV、V

D. IV

> [!note]- 原题截图
> ![[王道DS 8.5 归并排序和基数排序 选择 03.webp]]

> [!success]- 答案与解析
> **答案：** D、C
>
> **解析：** 归并排序在平均和最坏情况下都需要 $O(n)$ 辅助数组，所以第一空选 IV，即 D；快速排序最坏递归深度可达 n，也需 $O(n)$ 栈空间，加上归并排序，第二空选 IV、V，即 C。

## 关联

- 知识点：
- 题型：
