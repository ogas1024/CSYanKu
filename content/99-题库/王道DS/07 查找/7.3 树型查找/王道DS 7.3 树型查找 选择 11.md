---
source: 王道DS
subject: DS
chapter: 07 查找
section: 7.3 树型查找
qtype: 选择
topic: []
answer: C
answer_status: 已录入
tags: []
---
## 题干

11. 含有 20 个结点的平衡二叉树的最大深度为（ ）。

A. 4

B. 5

C. 6

D. 7

> [!note]- 原题截图
> ![[王道DS 7.3 树型查找 选择 11.webp]]

> [!success]- 答案与解析
> **答案：** C
>
> **解析：** 高度为 $h$ 的 AVL 树最少结点数满足 $n_h=1+n_{h-1}+n_{h-2}$，$n_1=1,n_2=2$。高度 5 至少 12 个结点，高度 6 至少 20 个，故 20 个结点的最大深度为 6。

## 关联

- 知识点：
- 题型：
