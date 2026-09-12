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

10. 设一棵二叉树的结点结构为（`LLINK`，`INFO`，`RLINK`），`ROOT` 为指向该二叉树根结点的指针，`p` 和 `q` 分别为指向该二叉树中任意两个结点的指针，试编写算法 `ANCESTOR(ROOT, p,q,r)`，找到 `p` 和 `q` 的最近公共祖先结点 `r`。

> [!note]- 原题截图
> ![[王道DS 5.3 二叉树的遍历和线索二叉树 综合 10.png]]

> [!success]- 答案与解析
> **答案：**
>
> ```c
> BiTree LCA(BiTree root, BiTree p, BiTree q) {
>     if (root == NULL || root == p || root == q) return root;
>     BiTree l = LCA(root->lchild, p, q);
>     BiTree r = LCA(root->rchild, p, q);
>     if (l != NULL && r != NULL) return root;
>     return l != NULL ? l : r;
> }
>
> void ANCESTOR(BiTree root, BiTree p, BiTree q, BiTree *r) {
>     *r = LCA(root, p, q);
> }
> ```
>
> **解析：** 若 `p`、`q` 分属当前结点的左、右子树，则当前结点就是最近公共祖先；若只有一侧找到目标，则把该侧返回值向上传递。题设 `p`、`q` 均在树中，故最终必能返回结点。

## 关联

- 知识点：
- 题型：
