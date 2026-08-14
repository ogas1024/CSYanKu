---
tags: [题目/综合, 王道DS, DS/07-查找/03-树型查找]
---
## 题干

5. 试编写一个算法，判断给定的二叉树是否是二叉排序树。

> [!note]- 原题截图
> ![[王道DS-7.3综-005.png]]

> [!success]- 答案与解析
> **答案：**
>
> 对二叉树做中序遍历，并检查当前关键字是否严格大于前一个访问的关键字：
>
>     bool JudgeBST(BiTree t, KeyType *prev, bool *hasPrev) {
>         if (t == NULL) return true;
>         if (!JudgeBST(t->lchild, prev, hasPrev)) return false;
>         if (*hasPrev && t->data <= *prev) return false;
>         *prev = t->data;
>         *hasPrev = true;
>         return JudgeBST(t->rchild, prev, hasPrev);
>     }
>
>     bool IsBST(BiTree t) {
>         KeyType prev = 0;
>         bool hasPrev = false;
>         return JudgeBST(t, &prev, &hasPrev);
>     }
>
> 若允许重复关键字，应按题设的重复值放置规则相应修改严格比较条件。
>
> **解析：** 一棵无重复关键字的二叉树是二叉排序树，当且仅当其中序遍历序列严格递增。递归先验证左子树，再比较前驱与当前结点，最后验证右子树；任一处违反递增性即可立即返回 false。

## 关联

- 知识点：
- 题型：
