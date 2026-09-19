---
source: 王道DS
subject: DS
chapter: 05 树与二叉树
section: 5.3 二叉树的遍历和线索二叉树
qtype: 综合
topic: []
answer_status: 已录入
tags: []
---
## 题干

6. 设树 $B$ 是一棵采用链式结构存储的二叉树，编写一个把树 $B$ 中所有结点的左右子树进行交换的函数。

> [!note]- 原题截图
> ![[王道DS 5.3 二叉树的遍历和线索二叉树 综合 06.webp]]

> [!success]- 答案与解析
> **答案：**
>
> ```c
> void Swap(BiTree b) {
>     if (b == NULL) return;
>     Swap(b->lchild);
>     Swap(b->rchild);
>     BiTree temp = b->lchild;
>     b->lchild = b->rchild;
>     b->rchild = temp;
> }
> ```
>
> **解析：** 按后序顺序先交换左、右子树内部的所有结点，再交换当前根的两个孩子指针。

## 关联

- 知识点：
- 题型：
