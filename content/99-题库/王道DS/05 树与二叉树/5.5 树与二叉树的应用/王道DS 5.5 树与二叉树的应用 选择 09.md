---
source: 王道DS
subject: DS
chapter: 05 树与二叉树
section: 5.5 树与二叉树的应用
qtype: 选择
topic: []
answer: C
answer_status: 已录入
tags: []
---
## 题干

9. 若度为 $m$ 的哈夫曼树中，叶结点个数为 $n$，则非叶结点的个数为（ ）。

A. $n-1$

B. $\lfloor n/m \rfloor-1$

C. $\lceil (n - 1) / (m - 1) \rceil$

D. $\lceil n/(m-1) \rceil-1$

> [!note]- 原题截图
> ![[王道DS 5.5 树与二叉树的应用 选择 09.png]]

> [!success]- 答案与解析
> **答案：** C
>
> **解析：** m 叉哈夫曼树的内部结点都按 $m$ 个孩子补齐。若必要时加入权值为 0 的虚叶，非叶结点数为 $\left\lceil(n-1)/(m-1)\right\rceil$。

## 关联

- 知识点：
- 题型：
