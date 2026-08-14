---
tags: [题目/综合, 王道DS, DS/05-树与二叉树/03-二叉树的遍历和线索二叉树]
---
## 题干

5. 假设二叉树采用二叉链表存储结构存储，试设计一个算法，计算一棵给定二叉树的所有双分支结点个数。

> [!note]- 原题截图
> ![[王道DS-5.3综-005.png]]

> [!success]- 答案与解析
> **答案：**
>
> ```c
> int DsonNodes(BiTree b) {
>     if (b == NULL) return 0;
>     int n = DsonNodes(b->lchild) + DsonNodes(b->rchild);
>     return n + (b->lchild != NULL && b->rchild != NULL);
> }
> ```
>
> **解析：** 递归统计左、右子树的双分支结点数；当前结点左、右孩子均非空时再加 1。每个结点只访问一次，时间复杂度为 $O(n)$。

## 关联

- 知识点：
- 题型：
