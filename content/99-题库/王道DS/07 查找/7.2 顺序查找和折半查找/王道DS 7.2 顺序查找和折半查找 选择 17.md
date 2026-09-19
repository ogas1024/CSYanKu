---
source: 王道DS
subject: DS
chapter: 07 查找
section: 7.2 顺序查找和折半查找
qtype: 选择
topic: []
answer: A
answer_status: 已录入
tags: []
---
## 题干

17. 对有 2500 个记录的索引顺序表（分块表）进行查找，最理想的块长为（ ）。

A. 50

B. 125

C. 500

D. $\lceil \log_{2} 2500 \rceil$

> [!note]- 原题截图
> ![[王道DS 7.2 顺序查找和折半查找 选择 17.webp]]

> [!success]- 答案与解析
> **答案：** A
>
> **解析：** 采用顺序查找索引表和块内时，最优块长约为 $\sqrt n$。$n=2500$，故块长取 50。

## 关联

- 知识点：
- 题型：
