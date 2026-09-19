---
source: 王道DS
subject: DS
chapter: 06 图
section: 6.3 图的遍历
qtype: 选择
topic: []
answer: A
answer_status: 已录入
tags: []
---
## 题干

14. 图的广度优先生成树的树高比深度优先生成树的树高（ ）。

A. 小或相等

B. 小

C. 大或相等

D. 大

> [!note]- 原题截图
> ![[王道DS 6.3 图的遍历 选择 14.webp]]

> [!success]- 答案与解析
> **答案：** A
>
> **解析：** 从同一起点出发，BFS 生成树中起点到任一顶点的树路径都是原图中的最短边数路径，因此它在所有相应生成树中树高最小；DFS 可能沿长链深入，所以 BFS 树高小于或等于 DFS 树高。

## 关联

- 知识点：
- 题型：
