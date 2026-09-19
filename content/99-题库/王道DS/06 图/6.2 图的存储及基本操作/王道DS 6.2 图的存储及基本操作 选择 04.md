---
source: 王道DS
subject: DS
chapter: 06 图
section: 6.2 图的存储及基本操作
qtype: 选择
topic: []
answer: D
answer_status: 已录入
tags: []
---
## 题干

4. 带权有向图 $G$ 用邻接矩阵存储，则  $v_i$ 的入度等于邻接矩阵中（ ）。

A. 第  $i$ 行非  $\infty$ 的元素个数

B. 第  $i$ 列非  $\infty$ 的元素个数

C. 第  $i$ 行非  $\infty$ 且非 0 的元素个数

D. 第  $i$ 列非  $\infty$ 且非 0 的元素个数

> [!note]- 原题截图
> ![[王道DS 6.2 图的存储及基本操作 选择 04.webp]]

> [!success]- 答案与解析
> **答案：** D
>
> **解析：** 在带权有向图的邻接矩阵中，0 和 $\infty$ 都表示不存在相应的非自环边。顶点 $v_i$ 的入度应统计第 $i$ 列中既非 0 又非 $\infty$ 的元素个数。

## 关联

- 知识点：
- 题型：
