---
source: 王道DS
subject: DS
chapter: 06 图
section: 6.4 图的应用
qtype: 选择
topic: []
answer: C
answer_status: 已录入
tags: []
---
## 题干

8. 下列关于图的最短路径的相关叙述中，正确的是（ ）。

Ⅰ. Dijkstra 算法求单源最短路径不允许边的权为负

Ⅱ. Dijkstra 算法求每对顶点间的最短路径的时间复杂度是  $O(n^{2})$

Ⅲ. Floyd 算法求每对顶点间的最短路径允许边的权为负，但不允许含有负边的回路

A. Ⅰ、Ⅱ 和 Ⅲ

B. 仅 Ⅰ

C. Ⅰ 和 Ⅲ

D. Ⅱ 和 Ⅲ

> [!note]- 原题截图
> ![[王道DS 6.4 图的应用 选择 08.webp]]

> [!success]- 答案与解析
> **答案：** C
>
> **解析：** Dijkstra 要求边权非负，Ⅰ正确。朴素 Dijkstra 单次为 $O(n^2)$，求所有源点需运行 $n$ 次，为 $O(n^3)$，Ⅱ错误。Floyd 允许负边，但不能存在总权为负的回路，Ⅲ正确。

## 关联

- 知识点：
- 题型：
