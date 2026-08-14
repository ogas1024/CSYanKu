---
tags: [题目/综合, 王道DS, DS/05-树与二叉树/03-二叉树的遍历和线索二叉树]
---
## 题干

13. 设计一个算法将二叉树的叶结点按从左到右的顺序连成一个单链表，表头指针为 `head`。

二叉树按二叉链表方式存储，链接时用叶结点的右指针域来存放单链表指针。

> [!note]- 原题截图
> ![[王道DS-5.3综-013.png]]

> [!success]- 答案与解析
> **答案：**
>
> ```c
> BiTree head = NULL, tail = NULL;
>
> void LinkLeaves(BiTree t) {
>     if (t == NULL) return;
>     if (t->lchild == NULL && t->rchild == NULL) {
>         if (head == NULL) head = t;
>         else tail->rchild = t;
>         tail = t;
>         return;
>     }
>     LinkLeaves(t->lchild);
>     LinkLeaves(t->rchild);
> }
>
> BiTree MakeLeafList(BiTree root) {
>     head = tail = NULL;
>     LinkLeaves(root);
>     if (tail != NULL) tail->rchild = NULL;
>     return head;
> }
> ```
>
> **解析：** 中序（或任一保持左子树先于右子树的深度优先）遍历中，叶结点被遇到的次序就是从左到右的次序。用 `tail` 保存上一个叶结点，通过其右指针链接当前叶结点。

## 关联

- 知识点：
- 题型：
