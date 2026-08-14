---
tags: [题目/综合, 王道DS, DS/06-图/03-图的遍历]
---
## 题干

3. 试设计一个算法，判断一个无向图 $G$ 是否为一棵树。

若是一棵树，则算法返回 `true`，否则返回 `false`。

> [!note]- 原题截图
> ![[王道DS-6.3综-003.png]]

> [!success]- 答案与解析
> **答案：**
>
> 无向图是一棵树，当且仅当它连通且边数为 $n-1$。可在一次 DFS 中同时统计访问到的顶点数 `vCount` 和扫描到的边表结点数 `arcCount`：
>
> ```c
> void DFSCount(ALGraph G, int v, bool visited[],
>               int *vCount, int *arcCount) {
>     visited[v] = true;
>     ++*vCount;
>     for (ArcNode *p = G.vertices[v].firstarc; p; p = p->nextarc) {
>         ++*arcCount;              // 无向边在邻接表中出现两次
>         int w = p->adjvex;
>         if (!visited[w])
>             DFSCount(G, w, visited, vCount, arcCount);
>     }
> }
>
> bool IsTree(ALGraph G) {
>     if (G.vexnum == 0) return false;
>     bool visited[MaxVertexNum] = {false};
>     int vCount = 0, arcCount = 0;
>     DFSCount(G, 0, visited, &vCount, &arcCount);
>     return vCount == G.vexnum && arcCount == 2 * (G.vexnum - 1);
> }
> ```
>
> 时间复杂度为 $O(n+m)$，递归栈和访问数组空间为 $O(n)$。
>
> **解析：** `vCount==n` 证明图连通；无向图邻接表中每条边有两个边表结点，所以 `arcCount==2(n-1)` 等价于边数为 $n-1$。连通无向图具有 $n-1$ 条边时必无环，因而是一棵树。

## 关联

- 知识点：
- 题型：
