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

7. 试编写利用 DFS 实现有向无环图拓扑排序的算法。

> [!note]- 原题截图
> ![[王道DS 6.4 图的应用 综合 07.png]]

> [!success]- 答案与解析
> **答案：**
>
> 在 DFS 完成一个顶点时记录结束时间，最后按结束时间从大到小输出即可得到拓扑序：
>
> ```c
> int timer = 0;
> int finishTime[MaxVertexNum];
> bool visited[MaxVertexNum];
>
> void DFSFinish(ALGraph G, int v) {
>     visited[v] = true;
>     for (ArcNode *p = G.vertices[v].firstarc; p; p = p->nextarc) {
>         int w = p->adjvex;
>         if (!visited[w]) DFSFinish(G, w);
>     }
>     finishTime[v] = ++timer;
> }
>
> void TopoByDFS(ALGraph G) {
>     memset(visited, 0, sizeof(visited));
>     timer = 0;
>     for (int v = 0; v < G.vexnum; ++v)
>         if (!visited[v]) DFSFinish(G, v);
>
>     for (int t = G.vexnum; t >= 1; --t)
>         for (int v = 0; v < G.vexnum; ++v)
>             if (finishTime[v] == t) printf("%d ", v);
> }
> ```
>
> **解析：** 在 DAG 中，对任意弧 $u\to v$，DFS 完成时间满足 $finish(u)>finish(v)$：若从 u 搜到 v，必须先完成 v；若 v 已完成，时间关系也仍成立。因此按完成时间递减排列即为拓扑序。也可在退出 DFS 时把顶点压栈，最后依次出栈。

## 关联

- 知识点：
- 题型：
