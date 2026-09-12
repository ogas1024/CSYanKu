---
source: 王道DS
subject: DS
chapter: 05 树与二叉树
section: 5.4 树、森林
qtype: 选择
topic: []
answer: C
answer_status: 已录入
tags: []
---
## 题干

20. 【2021 统考真题】某森林 $F$ 对应的二叉树为 $T$，若 T 的先序遍历序列是 a, b, d, c, e, g, f，中序遍历序列是 b, d, a, e, g, c, f，则 F 中树的棵数是（ ）。

A. 1

B. 2

C. 3

D. 4

> [!note]- 原题截图
> ![[王道DS 5.4 树、森林 选择 20.png]]

> [!success]- 答案与解析
> **答案：** C
>
> **解析：** 由 T 的先序与中序序列重建二叉树，再从根结点沿右孩子指针访问，得到森林中各树的根 a、c、f，所以有 3 棵树。

## 关联

- 知识点：
- 题型：
