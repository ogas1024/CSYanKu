---
tags: [题目/综合, 王道DS, DS/07-查找/03-树型查找]
---
## 题干

8. 设计一个算法，求出给定二叉排序树中最小和最大的关键字。

> [!note]- 原题截图
> ![[王道DS-7.3综-008.png]]

> [!success]- 答案与解析
> **答案：**
>
> 二叉排序树中最左下结点保存最小关键字，最右下结点保存最大关键字：
>
>     KeyType MinKey(BSTNode *t) {
>         while (t != NULL && t->lchild != NULL)
>             t = t->lchild;
>         return t->data;
>     }
>
>     KeyType MaxKey(BSTNode *t) {
>         while (t != NULL && t->rchild != NULL)
>             t = t->rchild;
>         return t->data;
>     }
>
> **解析：** 根据二叉排序树性质，向左移动会得到更小关键字，向右移动会得到更大关键字，因此分别沿左链、右链走到尽头即可。两函数时间复杂度均为 O(h)，额外空间 O(1)。

## 关联

- 知识点：
- 题型：
