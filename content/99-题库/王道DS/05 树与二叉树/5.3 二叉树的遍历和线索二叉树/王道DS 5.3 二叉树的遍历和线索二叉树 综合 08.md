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

8. 已知二叉树以二叉链表存储，编写算法完成：对于树中每个元素值为 $x$ 的结点，删除以它为根的子树，并释放相应的空间。

> [!note]- 原题截图
> ![[王道DS 5.3 二叉树的遍历和线索二叉树 综合 08.webp]]

> [!success]- 答案与解析
> **答案：**
>
> ```c
> void FreeTree(BiTree t) {
>     if (t == NULL) return;
>     FreeTree(t->lchild);
>     FreeTree(t->rchild);
>     free(t);
> }
>
> void DeleteX(BiTree *t, ElemType x) {
>     if (*t == NULL) return;
>     if ((*t)->data == x) {
>         FreeTree(*t);
>         *t = NULL;
>         return;
>     }
>     DeleteX(&(*t)->lchild, x);
>     DeleteX(&(*t)->rchild, x);
> }
> ```
>
> **解析：** 递归参数使用指向子树根指针的指针。一旦当前根值为 x，用后序顺序释放整棵子树，再把父结点的相应链接置空；该子树内部其他 x 已随子树一起删除，无需重复遍历。

## 关联

- 知识点：
- 题型：
