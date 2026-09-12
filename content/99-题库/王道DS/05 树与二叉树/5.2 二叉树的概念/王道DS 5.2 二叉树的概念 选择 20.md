---
source: 王道DS
subject: DS
chapter: 05 树与二叉树
section: 5.2 二叉树的概念
qtype: 选择
topic: []
answer: A
answer_status: 已录入
tags: []
---
## 题干

20. 在一棵完全二叉树中，其根的序号为 1，（ ）可判定序号为 $p$ 和 $q$ 的两个结点是否在同一层。

A. $\lfloor \log_{2} p \rfloor = \lfloor \log_{2} q \rfloor$

B. $\log_{2} p = \log_{2} q$

C. $\lfloor \log_{2} p \rfloor + 1 = \lfloor \log_{2} q \rfloor$

D. $\lfloor \log_{2} p \rfloor = \lfloor \log_{2} q \rfloor + 1$

> [!note]- 原题截图
> ![[王道DS 5.2 二叉树的概念 选择 20.png]]

> [!success]- 答案与解析
> **答案：** A
>
> **解析：** 序号 i 的结点所在层次为 `floor(log2 i)+1`。因此 p、q 同层当且仅当 `floor(log2 p)=floor(log2 q)`。

## 关联

- 知识点：
- 题型：
