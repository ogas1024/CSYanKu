---
tags: [题目/综合, 王道DS, DS/06-图/02-图的存储及基本操作]
---
## 题干

8. 【2023 统考真题】已知有向图 $G$ 采用邻接矩阵存储，类型定义如下：

```c
typedef struct {                   // 图的类型定义
    int numVertices, numEdges;     // 图的顶点数和有向边数
    char VerticesList[MAXV];       // 顶点表，MAXV 为已定义常量
    int Edge[MAXV][MAXV];          // 邻接矩阵
} MGraph;
```

将图中出度大于入度的顶点称为 K 顶点。

例如，在下图中，顶点 $a$ 和 $b$ 为 K 顶点。

![[王道DS-6.2综-008-fig1.jpg]]

请设计算法 `int printVertices(MGraph G)`，对给定的任意非空有向图 $G$，输出 $G$ 中所有的 K 顶点，并返回 K 顶点的个数。

要求：

- **（1）** 给出算法的基本设计思想。
- **（2）** 根据设计思想，采用 C 或 C++ 语言描述算法，关键之处给出注释。

> [!note]- 原题截图
> ![[王道DS-6.2综-008.png]]

> [!success]- 答案与解析
> **答案：**
>
> **（1）设计思想**
>
> 对每个顶点 $i$，第 $i$ 行非零元素数为出度，第 $i$ 列非零元素数为入度。若出度大于入度，就输出该顶点并将计数器加 1。
>
> **（2）算法**
>
> ```c
> int printVertices(MGraph G) {
>     int count = 0;
>     for (int i = 0; i < G.numVertices; ++i) {
>         int outDegree = 0, inDegree = 0;
>         for (int j = 0; j < G.numVertices; ++j) {
>             if (G.Edge[i][j] != 0) ++outDegree;
>             if (G.Edge[j][i] != 0) ++inDegree;
>         }
>         if (outDegree > inDegree) {
>             printf("%c ", G.VerticesList[i]);
>             ++count;
>         }
>     }
>     return count;
> }
> ```
>
> 该算法时间复杂度为 $O(|V|^2)$，额外空间复杂度为 $O(1)$。
>
> **解析：** 邻接矩阵元素 $G.Edge[i][j]$ 表示弧 $i\to j$，所以固定行统计出度、固定列统计入度。每个顶点只需比较这两个计数即可判定是否为 K 顶点。

## 关联

- 知识点：
- 题型：
