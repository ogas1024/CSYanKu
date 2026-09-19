---
source: 王道DS
subject: DS
chapter: 06 图
section: 6.2 图的存储及基本操作
qtype: 选择
topic: []
answer: C
answer_status: 已录入
tags: []
---
## 题干

15. 设 $n$ 个顶点、$e$ 条边的有向图用邻接表表示，则求某顶点 v 的入度的时间复杂度为（ ）。

A. $O(n)$

B. $O(e)$

C. $O(n+e)$

D. $O(ne)$

> [!note]- 原题截图
> ![[王道DS 6.2 图的存储及基本操作 选择 15.webp]]

> [!success]- 答案与解析
> **答案：** C
>
> **解析：** 在只存出边的邻接表中求各顶点入度，需要初始化 $n$ 个计数器并遍历全部 $e$ 个边表结点，时间复杂度为 $O(n+e)$。

## 关联

- 知识点：
- 题型：
