---
source: 王道DS
subject: DS
chapter: 06 图
section: 6.4 图的应用
qtype: 综合
topic: []
answer_status: 已录入
tags: []
---
## 题干

13. 【2024 统考真题】2023 年 10 月 26 日，神舟十七号载人飞船发射取得圆满成功，再次彰显了中国航天事业的辉煌成就。

载人航天工程是包含众多子工程的复杂系统工程，为了保证工程的有序开展，需要明确各子工程的前导子工程，以协调各子工程的实施。

该问题可以简化、抽象为有向图的拓扑序列问题。

已知有向图 $G$ 采用邻接矩阵存储，类型定义如下。

```c
typedef struct {                // 图的类型定义
    int numVertices, numEdges; // 图的顶点数和有向边数
    char VerticesList[MAXV];   // 顶点表，MAXV 为已定义常量
    int Edge[MAXV][MAXV];      // 邻接矩阵
} MGraph;
```

请设计算法 `int uniquely(MGraph G)`，判定 $G$ 是否存在唯一的拓扑序列，若是，则返回 1，否则返回 0。

要求如下。

- **（1）** 给出算法的基本设计思想。
- **（2）** 根据设计思想，采用 C 或 C++ 语言描述算法，关键之处给出注释。

> [!note]- 原题截图
> ![[王道DS 6.4 图的应用 综合 13.webp]]

> [!success]- 答案与解析
> **答案：**
>
> **（1）设计思想**
>
> 先由邻接矩阵计算所有顶点入度。重复寻找当前入度为 0 且尚未删除的顶点：若每一步恰好只有 1 个候选，就删除它的全部出边并继续；若候选数为 0，说明有环；若候选数大于 1，说明拓扑序不唯一。只有恰好处理完全部顶点才返回 1。
>
> **（2）算法**
>
> ```c
> int uniquely(MGraph G) {
>     int n = G.numVertices, processed = 0;
>     int indegree[MAXV] = {0};
>     bool removed[MAXV] = {false};
>
>     for (int j = 0; j < n; ++j)
>         for (int i = 0; i < n; ++i)
>             if (G.Edge[i][j] != 0) ++indegree[j];
>
>     while (processed < n) {
>         int candidate = -1, count = 0;
>         for (int i = 0; i < n; ++i) {
>             if (!removed[i] && indegree[i] == 0) {
>                 candidate = i;
>                 ++count;
>             }
>         }
>         if (count != 1) return 0;
>
>         removed[candidate] = true;
>         ++processed;
>         for (int j = 0; j < n; ++j)
>             if (!removed[j] && G.Edge[candidate][j] != 0)
>                 --indegree[j];
>     }
>     return 1;
> }
> ```
>
> **解析：** 拓扑序唯一的充要判定过程是：Kahn 算法每一步都只有一个入度为 0 的未处理顶点。出现多个候选即可交换选择顺序得到不同拓扑序；无候选而仍有顶点则说明存在环。邻接矩阵实现的时间复杂度为 $O(n^2)$，额外空间为 $O(n)$。

## 关联

- 知识点：
- 题型：
