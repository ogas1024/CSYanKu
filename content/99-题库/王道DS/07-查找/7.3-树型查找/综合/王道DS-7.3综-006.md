---
tags: [题目/综合, 王道DS, DS/07-查找/03-树型查找]
---
## 题干

6. 设计一个算法，求出指定结点在给定二叉排序树中的层次。

> [!note]- 原题截图
> ![[王道DS-7.3综-006.png]]

> [!success]- 答案与解析
> **答案：**
>
> 利用目标结点指针中的关键字，从根开始按二叉排序树规则查找；访问的结点数就是层次，规定根为第 1 层：
>
>     int LevelOf(BiTree root, BSTNode *p) {
>         int level = 1;
>         BiTree t = root;
>         while (t != NULL) {
>             if (t == p || t->data == p->data) return level;
>             if (p->data < t->data) t = t->lchild;
>             else t = t->rchild;
>             ++level;
>         }
>         return 0;
>     }
>
> 返回 0 表示目标结点不在树中。
>
> **解析：** 二叉排序树每比较一次就下降一层，因此从根到目标结点的查找比较次数等于该结点的层次。算法时间复杂度为 O(h)，额外空间为 O(1)，其中 h 为树高。

## 关联

- 知识点：
- 题型：
