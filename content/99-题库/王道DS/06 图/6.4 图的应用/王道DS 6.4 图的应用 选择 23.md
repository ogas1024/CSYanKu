---
source: 王道DS
subject: DS
chapter: 06 图
section: 6.4 图的应用
qtype: 选择
topic: []
answer: C
answer_status: 已录入
tags: []
---
## 题干

23. 若某带权图为 $G=(V,E)$，其中

$$
V=\{v_1,v_2,v_3,v_4,v_5,v_6,v_7,v_8,v_9,v_{10}\},
$$

$$
\begin{aligned}
E=\{&\langle v_1,v_2\rangle 5,\langle v_1,v_3\rangle 6,
\langle v_2,v_5\rangle 3,\langle v_3,v_5\rangle 6,
\langle v_3,v_4\rangle 3,\\
&\langle v_4,v_5\rangle 3,\langle v_4,v_7\rangle 1,
\langle v_4,v_8\rangle 4,\langle v_5,v_6\rangle 4,
\langle v_5,v_7\rangle 2,\\
&\langle v_6,v_{10}\rangle 4,\langle v_7,v_9\rangle 5,
\langle v_8,v_9\rangle 2,\langle v_9,v_{10}\rangle 2\}.
\end{aligned}
$$

注：边括号外的数据表示边上的权值。

则 $G$ 的关键路径的长度为（ ）。

A. 19

B. 20

C. 21

D. 22

> [!note]- 原题截图
> ![[王道DS 6.4 图的应用 选择 23.webp]]

> [!success]- 答案与解析
> **答案：** C
>
> **解析：** 按 AOE 网逐层计算事件最早发生时间，源点到汇点的最长路径长度为 21；原书图中标出的两条路径均达到 21，因此关键路径长度为 21。

## 关联

- 知识点：
- 题型：
