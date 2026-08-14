---
tags: [题目/综合, 王道DS, DS/07-查找/03-树型查找]
---
## 题干

7. 利用二叉树遍历的思想编写一个判断二叉树是否是平衡二叉树的算法。

> [!note]- 原题截图
> ![[王道DS-7.3综-007.png]]

> [!success]- 答案与解析
> **答案：**
>
> 采用后序遍历，同时计算子树高度；用 -1 表示子树已经不平衡：
>
>     int AVLHeight(BiTree t) {
>         if (t == NULL) return 0;
>         int lh = AVLHeight(t->lchild);
>         if (lh < 0) return -1;
>         int rh = AVLHeight(t->rchild);
>         if (rh < 0) return -1;
>         if (abs(lh - rh) > 1) return -1;
>         return (lh > rh ? lh : rh) + 1;
>     }
>
>     bool IsAVL(BiTree t) {
>         return AVLHeight(t) >= 0;
>     }
>
> **解析：** 后序遍历保证检查当前结点前已经得到左右子树的高度和平衡状态。只有左右子树均平衡且高度差不超过 1，当前子树才平衡。每个结点只访问一次，时间复杂度 O(n)，递归栈空间 O(h)。

## 关联

- 知识点：
- 题型：
