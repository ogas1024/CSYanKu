---
source: 王道DS
subject: DS
chapter: 06 图
section: 6.2 图的存储及基本操作
qtype: 选择
topic: []
answer: B、D
answer_status: 已录入
tags: []
---
## 题干

5. 一个有 $n$ 个顶点的图用邻接矩阵 $A$ 表示，若图为有向图，顶点 $v_i$的入度是（ ）；

若图为无向图，顶点 $v_i$的度是（ ）。

A. $\sum_{i=1}^{n} A[i][j]$

B. $\sum_{j=1}^{n} A[j][i]$

C. $\sum_{i=1}^{n} A[j][i]$

D. $\sum_{j=1}^{n} A[j][i]$或 $\sum_{j=1}^{n} A[i][j]$

> [!note]- 原题截图
> ![[王道DS 6.2 图的存储及基本操作 选择 05.webp]]

> [!success]- 答案与解析
> **答案：** B、D
>
> **解析：** 有向图中，第 $i$ 列非零元素个数等于顶点 $i$ 的入度；无向图的邻接矩阵对称，第 $i$ 行或第 $i$ 列非零元素个数都等于顶点 $i$ 的度。

## 关联

- 知识点：
- 题型：
