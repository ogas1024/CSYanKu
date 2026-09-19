---
source: 王道DS
subject: DS
chapter: 08 排序
section: 8.7 外部排序
qtype: 选择
topic: []
answer: C
answer_status: 已录入
tags: []
---
## 题干

6. 若只需 3 趟排序就可完成 64 个元素的多路归并排序，则选取的归并路数最少是（ ）。

A. 2

B. 3

C. 4

D. 5

> [!note]- 原题截图
> ![[王道DS 8.7 外部排序 选择 06.webp]]

> [!success]- 答案与解析
> **答案：** C
>
> **解析：** 要在 3 趟内归并 64 个初始段，需满足 $k^3>=64$，最小 k 为 4，所以至少采用 4 路归并。

## 关联

- 知识点：
- 题型：
