---
source: 王道DS
subject: DS
chapter: 05 树与二叉树
section: 5.3 二叉树的遍历和线索二叉树
qtype: 选择
topic: []
answer: C
answer_status: 已录入
tags: []
---
## 题干

24. 判断线索二叉树中 `*p` 结点有右孩子结点的条件是（ ）。

A. `p!=NULL`

B. `p->rchild!=NULL`

C. `p->rtag==0`

D. `p->rtag==1`

> [!note]- 原题截图
> ![[王道DS 5.3 二叉树的遍历和线索二叉树 选择 24.webp]]

> [!success]- 答案与解析
> **答案：** C
>
> **解析：** 在线索二叉树中，rtag=0 表示 rchild 指向真正的右孩子；rtag=1 时该指针是后继线索。

## 关联

- 知识点：
- 题型：
