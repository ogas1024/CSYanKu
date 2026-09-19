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

1. 已知带权有向图 $G$ 的邻接矩阵如下所示，请画出该带权有向图 $G$。

$$
\begin{bmatrix}
0&15&2&12&\infty&\infty&\infty\\
\infty&0&\infty&\infty&6&\infty&\infty\\
\infty&\infty&0&\infty&8&4&\infty\\
\infty&\infty&\infty&0&\infty&\infty&3\\
\infty&\infty&\infty&\infty&0&\infty&9\\
\infty&\infty&\infty&5&\infty&0&10\\
\infty&4&\infty&\infty&\infty&\infty&0
\end{bmatrix}
$$

> [!note]- 原题截图
> ![[王道DS 6.2 图的存储及基本操作 综合 01.webp]]

> [!success]- 答案与解析
> **答案：**
>
> 以矩阵下标 $0,1,\ldots,6$ 为顶点编号，图的有向边及权值为：
>
> | 有向边 | 权值 |
> |---|---:|
> | $0\to1$ | 15 |
> | $0\to2$ | 2 |
> | $0\to3$ | 12 |
> | $1\to4$ | 6 |
> | $2\to4$ | 8 |
> | $2\to5$ | 4 |
> | $3\to6$ | 3 |
> | $4\to6$ | 9 |
> | $5\to3$ | 5 |
> | $5\to6$ | 10 |
> | $6\to1$ | 4 |
>
> 按表连接即可得到原书所画的带权有向图。若顶点依次记作 $a,b,c,d,e,f,g$，则将编号逐一替换即可。
>
> **解析：** 邻接矩阵中第 $i$ 行第 $j$ 列的有限非零值表示一条有向边 $i\to j$，该值就是边权；主对角线的 0 不画为自环，$\infty$ 表示无边。表中 11 条边与原书答案图逐一对应。

## 关联

- 知识点：
- 题型：
