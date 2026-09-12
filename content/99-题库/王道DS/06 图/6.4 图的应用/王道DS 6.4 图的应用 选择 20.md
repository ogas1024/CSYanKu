---
source: 王道DS
subject: DS
chapter: 06 图
section: 6.4 图的应用
qtype: 选择
topic: []
answer: A
answer_status: 已录入
tags: []
---
## 题干

20. 用 DFS 算法遍历一个无环有向图，并在 DFS 算法退栈返回时输出相应的顶点，则输出的顶点序列是（ ）。

A. 逆拓扑有序

B. 拓扑有序

C. 无序的

D. 无法确定

> [!note]- 原题截图
> ![[王道DS 6.4 图的应用 选择 20.png]]

> [!success]- 答案与解析
> **答案：** A
>
> **解析：** 在 DAG 的 DFS 中，顶点只有在所有后继均完成后才退栈输出。因此每条弧 $v_i\to v_j$ 的终点 $v_j$ 先输出，所得序列是逆拓扑有序序列。

## 关联

- 知识点：
- 题型：
