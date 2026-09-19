---
source: 王道DS
subject: DS
chapter: 05 树与二叉树
section: 5.2 二叉树的概念
qtype: 综合
topic: []
answer_status: 已录入
tags: []
---
## 题干

1. 在一棵完全二叉树中，含有 $n_0$ 个叶结点，当度为 1 的结点数为 1 时，该树的高度是多少？当度为 1 的结点数为 0 时，该树的高度是多少？

> [!note]- 原题截图
> ![[王道DS 5.2 二叉树的概念 综合 01.webp]]

> [!success]- 答案与解析
> **答案：**
>
> 设完全二叉树的高度为 h。
>
> - 当度为 1 的结点数 $n_1=1$ 时，$n=2n_0$，故
>   $$h=\left\lceil\log_2(n+1)\right\rceil=\left\lceil\log_2(2n_0+1)\right\rceil.$$
> - 当 $n_1=0$ 时，$n=2n_0-1$，故
>   $$h=\left\lceil\log_2(n+1)\right\rceil=\left\lceil\log_2(2n_0)\right\rceil=\left\lceil\log_2 n_0\right\rceil+1.$$
>
> **解析：** 非空二叉树中 `n0=n2+1`，因而 `n=n0+n1+n2=2n0+n1-1`。再使用完全二叉树高度公式 `h=ceil(log2(n+1))`，分别代入 `n1=1` 和 `n1=0` 即得。

## 关联

- 知识点：
- 题型：
