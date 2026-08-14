---
tags: [题目/选择, 王道DS, DS/07-查找/03-树型查找]
answer: D
---
## 题干

10. 构造一棵具有 n 个结点的二叉排序树时，最理想情况下的深度为（ ）。

A. n/2

B. n

C. $\left\lfloor \log_{2}(n+1) \right\rfloor$

D. $\left\lceil \log_{2}(n+1) \right\rceil$

> [!note]- 原题截图
> ![[王道DS-7.3选-010.png]]

> [!success]- 答案与解析
> **答案：** D
>
> **解析：** 叶结点尽量集中在相邻两层时树的深度最小，理想形态类似完全二叉树，深度为 $ceil(log2(n+1))$。

## 关联

- 知识点：
- 题型：
