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

19. 【2020 统考真题】已知森林 $F$ 及与之对应的二叉树 $T$，若 F 的先根遍历序列是 a, b, c, d, e, f，后根遍历序列是 `b,a,d,f,e,c`，则 $T$ 的后序遍历序列是（ ）。

A. `b,a,d,f,e,c`

B. `b,d,f,e,c,a`

C. `b,f,e,d,c,a`

D. `f,e,d,c,b,a`

> [!note]- 原题截图
> ![[王道DS 5.4 树、森林 选择 19.webp]]

> [!success]- 答案与解析
> **答案：** C
>
> **解析：** 森林的先根序列对应二叉树 T 的先序序列，后根序列对应 T 的中序序列。用先序 `abcdef` 和中序 `badfec` 重建 T，其后序序列为 `bfedca`。

## 关联

- 知识点：
- 题型：
