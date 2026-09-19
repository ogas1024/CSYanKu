---
source: 王道DS
subject: DS
chapter: 06 图
section: 6.3 图的遍历
qtype: 选择
topic: []
answer: D
answer_status: 已录入
tags: []
---
## 题干

16. 【2013 统考真题】下列选项中，不是如下无向图的广度优先遍历序列的是（ ）。

![[王道DS 6.3 图的遍历 选择 16-fig1.webp]]

A. `h,c,a,b,d,e,g,f`

B. `e,a,f,g,b,h,c,d`

C. `d,b,c,a,h,e,f,g`

D. `a,b,c,d,h,e,f,g`

> [!note]- 原题截图
> ![[王道DS 6.3 图的遍历 选择 16.webp]]

> [!success]- 答案与解析
> **答案：** D
>
> **解析：** 逐项按 BFS 的分层约束检查，A、B、C 都可对应某个起点和邻接点次序；D 在尚未完成同层顶点的扩展前进入了更深层，实际是可能的 DFS 次序而不是 BFS 次序。

## 关联

- 知识点：
- 题型：
