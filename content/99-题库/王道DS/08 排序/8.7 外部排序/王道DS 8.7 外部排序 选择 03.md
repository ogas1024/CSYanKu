---
source: 王道DS
subject: DS
chapter: 08 排序
section: 8.7 外部排序
qtype: 选择
topic: []
answer: A
answer_status: 已录入
tags: []
---
## 题干

3. 多路平衡归并的作用是（ ）。

A. 减少归并趟数

B. 减少初始归并段的个数

C. 便于实现败者树

D. 以上都对

> [!note]- 原题截图
> ![[王道DS 8.7 外部排序 选择 03.webp]]

> [!success]- 答案与解析
> **答案：** A
>
> **解析：** m 个初始归并段采用 k 路平衡归并时，归并趟数为 $ceil(log_k m)$。增加归并路数的直接目的就是减少归并趟数，并不减少已有初始归并段的个数。

## 关联

- 知识点：
- 题型：
