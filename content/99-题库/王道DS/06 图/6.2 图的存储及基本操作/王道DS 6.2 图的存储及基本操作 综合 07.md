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

7. 【2021 统考真题】已知无向连通图 $G$ 由顶点集 $V$ 和边集 $E$ 组成，$|E|>0$。

当 $G$ 中度为奇数的顶点个数为不大于 2 的偶数时，$G$ 存在包含所有边且长度为 $|E|$ 的路径（称为 EL 路径）。

设图 $G$ 采用邻接矩阵存储，类型定义如下：

```c
typedef struct {                   // 图的定义
    int numVertices, numEdges;     // 图中实际的顶点数和边数
    char VerticesList[MAXV];       // 顶点表，MAXV 为已定义常量
    int Edge[MAXV][MAXV];          // 邻接矩阵
} MGraph;
```

请设计算法 `int IsExistEL(MGraph G)`，判断 $G$ 是否存在 EL 路径，若存在，则返回 1，否则返回 0。

要求：

- **（1）** 给出算法的基本设计思想。
- **（2）** 根据设计思想，采用 C 或 C++ 语言描述算法，关键之处给出注释。
- **（3）** 说明你所设计算法的时间复杂度和空间复杂度。

> [!note]- 原题截图
> ![[王道DS 6.2 图的存储及基本操作 综合 07.webp]]

> [!success]- 答案与解析
> **答案：**
>
> **（1）设计思想**
>
> 逐个顶点扫描邻接矩阵的一行，计算该顶点的度，并统计奇数度顶点的个数。题设保证 $G$ 是无向连通图且 $|E|>0$，所以奇数度顶点数为 0 或 2 时存在 EL 路径。
>
> **（2）算法**
>
> ```c
> int IsExistEL(MGraph G) {
>     int odd = 0;
>     for (int i = 0; i < G.numVertices; ++i) {
>         int degree = 0;
>         for (int j = 0; j < G.numVertices; ++j)
>             degree += G.Edge[i][j] != 0;
>         if (degree % 2 != 0)
>             ++odd;
>     }
>     return odd == 0 || odd == 2;
> }
> ```
>
> **（3）复杂度**
>
> 时间复杂度为 $O(|V|^2)$，额外空间复杂度为 $O(1)$。
>
> **解析：** 无向连通图存在欧拉回路的充要条件是所有顶点度数均为偶数，存在非闭合欧拉路径的充要条件是恰有两个奇数度顶点。题干把这两种情况统一称为 EL 路径。邻接矩阵求一个顶点的度需要扫描一整行。

## 关联

- 知识点：
- 题型：
