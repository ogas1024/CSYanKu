---
source: 王道DS
subject: DS
chapter: 05 树与二叉树
section: 5.4 树、森林
qtype: 综合
topic: []
answer_status: 已录入
tags: []
---
## 题干

4. 编程求以孩子兄弟表示法存储的森林的叶子结点数。

> [!note]- 原题截图
> ![[王道DS 5.4 树、森林 综合 04.png]]

> [!success]- 答案与解析
> **答案：**
>
> ```c
> typedef struct node {
>     ElemType data;
>     struct node *fch, *nsib;
> } *Tree;
>
> int Leaves(Tree t) {
>     if (t == NULL) return 0;
>     if (t->fch == NULL)
>         return 1 + Leaves(t->nsib);
>     return Leaves(t->fch) + Leaves(t->nsib);
> }
> ```
>
> **解析：** `fch` 为第一孩子，`nsib` 为下一兄弟。若当前结点没有孩子，它就是叶结点，计 1 并继续统计兄弟子树；否则结果为孩子子树和兄弟子树的叶数之和。

## 关联

- 知识点：
- 题型：
