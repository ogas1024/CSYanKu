---
tags: [题目/综合, 王道DS, DS/06-图/03-图的遍历]
---
## 题干

4. 分别采用基于深度优先遍历和广度优先遍历算法判别以邻接表方式存储的有向图中是否存在由顶点 $v_i$ 到顶点 $v_j$ 的路径 （$i\neq j$）。

注意，算法中涉及的图的基本操作必须在此存储结构上实现。

> [!note]- 原题截图
> ![[王道DS-6.3综-004.png]]

> [!success]- 答案与解析
> **答案：**
>
> 设 `G.vertices[u].firstarc` 指向顶点 $u$ 的第一条出边，边结点含 `adjvex` 和 `nextarc`。
>
> **基于 DFS**
>
> ```c
> bool ReachDFS(ALGraph G, int u, int target, bool visited[]) {
>     if (u == target) return true;
>     visited[u] = true;
>     for (ArcNode *p = G.vertices[u].firstarc; p; p = p->nextarc) {
>         int w = p->adjvex;
>         if (!visited[w] && ReachDFS(G, w, target, visited))
>             return true;
>     }
>     return false;
> }
> ```
>
> 调用前将 `visited[]` 全部置为 `false`，再执行 `ReachDFS(G, i, j, visited)`。
>
> **基于 BFS**
>
> ```c
> bool ReachBFS(ALGraph G, int start, int target) {
>     bool visited[MaxVertexNum] = {false};
>     int Q[MaxVertexNum], front = 0, rear = 0;
>     Q[rear++] = start;
>     visited[start] = true;
>
>     while (front < rear) {
>         int u = Q[front++];
>         if (u == target) return true;
>         for (ArcNode *p = G.vertices[u].firstarc; p; p = p->nextarc) {
>             int w = p->adjvex;
>             if (!visited[w]) {
>                 if (w == target) return true;
>                 visited[w] = true;
>                 Q[rear++] = w;
>             }
>         }
>     }
>     return false;
> }
> ```
>
> 两种方法在最坏情况下都需遍历从 $v_i$ 可达的全部顶点和出边，时间复杂度为 $O(n+m)$，空间复杂度为 $O(n)$。
>
> **解析：** 从 $v_i$ 启动遍历，只沿邻接表中的出边扩展。若搜索过程中遇到 $v_j$，则已找到一条 $v_i$ 到 $v_j$ 的有向路径；队列耗尽或 DFS 完成仍未遇到时，则不存在该路径。访问标志在发现顶点时设置，避免重复入队或递归。

## 关联

- 知识点：
- 题型：
