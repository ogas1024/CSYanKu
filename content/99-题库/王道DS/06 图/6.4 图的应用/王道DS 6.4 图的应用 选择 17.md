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

17. 已知有向图 $G=(V,E)$，其中

$$
\begin{aligned}
V={}&\{v_1,v_2,v_3,v_4,v_5,v_6,v_7\},\\
E={}&\{\langle v_1,v_2\rangle,\langle v_1,v_3\rangle,\langle v_1,v_4\rangle,
\langle v_2,v_5\rangle,\langle v_3,v_5\rangle,\\
&\langle v_3,v_6\rangle,\langle v_5,v_7\rangle,\langle v_6,v_7\rangle,
\langle v_4,v_6\rangle\}.
\end{aligned}
$$

$G$ 的拓扑序列是（ ）。

A. $\{v_1,v_3,v_4,v_6,v_2,v_5,v_7\}$

B. $\{v_1,v_3,v_2,v_6,v_4,v_5,v_7\}$

C. $\{v_1,v_3,v_4,v_5,v_2,v_6,v_7\}$

D. $\{v_1,v_2,v_5,v_3,v_4,v_6,v_7\}$

> [!note]- 原题截图
> ![[王道DS 6.4 图的应用 选择 17.webp]]

> [!success]- 答案与解析
> **答案：** A
>
> **解析：** 逐条检查弧的先后约束，A 中每条弧的起点都在终点之前。其余选项分别存在某条弧的终点先于起点，违反拓扑序定义。

## 关联

- 知识点：
- 题型：
