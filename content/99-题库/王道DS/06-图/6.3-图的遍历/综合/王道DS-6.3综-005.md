---
tags: [题目/综合, 王道DS, DS/06-图/03-图的遍历]
---
## 题干

5. 假设图用邻接表表示，设计一个算法，输出从顶点 $V_i$ 到顶点 $V_j$ 的所有简单路径。

> [!note]- 原题截图
> ![[王道DS-6.3综-005.png]]

> [!success]- 答案与解析
> **答案：**
>
> 采用带回溯的 DFS。`path[]` 保存当前递归路径，`visited[]` 只标记当前路径中的顶点：
>
> ```c
> void PrintPath(int path[], int len) {
>     for (int k = 0; k < len; ++k)
>         printf(k + 1 == len ? "%d\n" : "%d -> ", path[k]);
> }
>
> void FindPath(ALGraph G, int u, int target,
>               bool visited[], int path[], int depth) {
>     visited[u] = true;
>     path[depth++] = u;
>
>     if (u == target) {
>         PrintPath(path, depth);
>     } else {
>         for (ArcNode *p = G.vertices[u].firstarc; p; p = p->nextarc) {
>             int w = p->adjvex;
>             if (!visited[w])
>                 FindPath(G, w, target, visited, path, depth);
>         }
>     }
>
>     visited[u] = false;          // 回溯，使该顶点可用于其他路径
> }
> ```
>
> 调用时先将 `visited[]` 清零，再执行 `FindPath(G, i, j, visited, path, 0)`。
>
> **解析：** 简单路径不能重复顶点，所以递归进入 $u$ 时将其标记。到达 $V_j$ 时输出当前 `path[]`。从 $u$ 返回前撤销标记，才能让 $u$ 出现在另一条候选路径中。算法运行时间与输出路径总量相关；单条递归路径和辅助数组最多占 $O(n)$ 空间。

## 关联

- 知识点：
- 题型：
