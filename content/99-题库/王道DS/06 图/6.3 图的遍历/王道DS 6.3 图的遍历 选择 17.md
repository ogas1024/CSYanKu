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

17. 【2015 统考真题】设有向图 $G=(V,E)$，顶点集 $V=\{V_{0},V_{1},V_{2},V_{3}\}$，边集 $E=\{\langle V_{0},V_{1}\rangle,\langle V_{0},V_{2}\rangle,\langle V_{0},V_{3}\rangle,\langle V_{1},V_{3}\rangle\}$。

若从顶点 $V_{0}$ 开始对图进行深度优先遍历，则可能得到的不同遍历序列个数是（ ）。

A. 2

B. 3

C. 4

D. 5

> [!note]- 原题截图
> ![[王道DS 6.3 图的遍历 选择 17.png]]

> [!success]- 答案与解析
> **答案：** D
>
> **解析：** 从 $V_0$ 出发，根据三个邻接点的选择次序以及从 $V_1$ 可继续访问 $V_3$，可得到 5 个不同 DFS 序列：$V_0V_1V_3V_2$、$V_0V_2V_3V_1$、$V_0V_2V_1V_3$、$V_0V_3V_2V_1$、$V_0V_3V_1V_2$。

## 关联

- 知识点：
- 题型：
