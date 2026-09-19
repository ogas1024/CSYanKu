---
source: 王道DS
subject: DS
chapter: 05 树与二叉树
section: 5.2 二叉树的概念
qtype: 选择
topic: []
answer: B
answer_status: 已录入
tags: []
---
## 题干

18. 一棵有 $n$ 个结点的二叉树采用二叉链存储结点，其中空指针数为（ ）。

A. $n$

B. $n+1$

C. $n-1$

D. $2n$

> [!note]- 原题截图
> ![[王道DS 5.2 二叉树的概念 选择 18.webp]]

> [!success]- 答案与解析
> **答案：** B
>
> **解析：** 二叉链表共有 $2n$ 个孩子指针域，树的 $n-1$ 条边对应 $n-1$ 个非空指针，故空指针数为 `2n-(n-1)=n+1`。

## 关联

- 知识点：
- 题型：
