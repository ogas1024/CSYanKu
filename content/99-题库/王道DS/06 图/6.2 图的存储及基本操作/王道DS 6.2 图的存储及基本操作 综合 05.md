---
source: 王道DS
subject: DS
chapter: 06 图
section: 6.2 图的存储及基本操作
qtype: 综合
topic: []
answer_status: 已录入
tags: []
---
## 题干

5. 写出从图的邻接表表示转换成邻接矩阵表示的算法。

> [!note]- 原题截图
> ![[王道DS 6.2 图的存储及基本操作 综合 05.webp]]

> [!success]- 答案与解析
> **答案：**
>
> 设邻接表顶点数为 `G.vexnum`，边结点中的邻接点域为 `adjvex`：
>
> ```c
> void ListToMatrix(ALGraph G, int A[][MaxVertexNum]) {
>     int i, j;
>     ArcNode *p;
>
>     for (i = 0; i < G.vexnum; ++i)
>         for (j = 0; j < G.vexnum; ++j)
>             A[i][j] = 0;
>
>     for (i = 0; i < G.vexnum; ++i) {
>         for (p = G.vertices[i].firstarc; p != NULL; p = p->nextarc)
>             A[i][p->adjvex] = 1;
>     }
> }
> ```
>
> 若是带权图，将右侧的 `1` 改为边结点保存的权值，并按题目约定初始化无边位置。
>
> **解析：** 先把矩阵清零，再逐个扫描每个顶点的边表。边结点 `p` 位于顶点 $i$ 的链中且其邻接点为 $j$，就令 $A[i][j]=1$。时间复杂度为 $O(n^2+e)$，额外工作空间为 $O(1)$（不计输出矩阵）。

## 关联

- 知识点：
- 题型：
