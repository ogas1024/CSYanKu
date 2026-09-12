---
source: 王道DS
subject: DS
chapter: 06 图
section: 6.3 图的遍历
qtype: 选择
topic: []
answer: C、A、C、A
answer_status: 已录入
tags: []
---
## 题干

4. 对一个有 $n$ 个顶点、$e$ 条边的图采用邻接表表示时，进行 DFS 遍历的时间复杂度为（ ），空间复杂度为（ ）；

进行 BFS 遍历的时间复杂度为（ ），空间复杂度为（ ）。

A. $O(n)$

B. $O(e)$

C. $O(n+e)$

D. $O(1)$

> [!note]- 原题截图
> ![[王道DS 6.3 图的遍历 选择 04.png]]

> [!success]- 答案与解析
> **答案：** C、A、C、A
>
> **解析：** 邻接表遍历中，每个顶点和每个边表结点至多检查一次，所以 DFS、BFS 的时间复杂度均为 $O(n+e)$。DFS 的递归栈和 BFS 的辅助队列在最坏情况下都需容纳 $O(n)$ 个顶点。

## 关联

- 知识点：
- 题型：
