---
source: 王道DS
subject: DS
chapter: 06 图
section: 6.3 图的遍历
qtype: 选择
topic: []
answer: A、B
answer_status: 已录入
tags: []
---
## 题干

10. 一个有向图 $G$ 的邻接表存储如下图所示，从顶点 1 出发，对图 G 调用深度优先遍历所得顶点序列是（ ）；

按广度优先遍历所得顶点序列是（ ）。

![[王道DS 6.3 图的遍历 选择 10-fig1.webp]]

![[王道DS 6.3 图的遍历 选择 10-fig2.webp]]

A. `125436`

B. `124536`

C. `124563`

D. `362514`

> [!note]- 原题截图
> ![[王道DS 6.3 图的遍历 选择 10.webp]]

> [!success]- 答案与解析
> **答案：** A、B
>
> **解析：** 按题给邻接表中的固定邻接点次序，DFS 的树边依次为 $\langle1,2\rangle,\langle2,5\rangle,\langle5,4\rangle,\langle3,6\rangle$，序列为 125436；BFS 的发现边为 $\langle1,2\rangle,\langle1,4\rangle,\langle2,5\rangle,\langle3,6\rangle$，序列为 124536。

## 关联

- 知识点：
- 题型：
