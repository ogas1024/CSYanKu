---
tags: [题目/综合, 王道DS, DS/05-树与二叉树/03-二叉树的遍历和线索二叉树]
---
## 题干

7. 假设二叉树采用二叉链表存储结构存储，试设计一个算法，求先序遍历序列中第 $k$（$1\leq k\leq$ 二叉树中结点个数）个结点的值。

> [!note]- 原题截图
> ![[王道DS-5.3综-007.png]]

> [!success]- 答案与解析
> **答案：**
>
> ```c
> int preNo = 0;
> ElemType PreNode(BiTree b, int k, bool *found) {
>     if (b == NULL) return (ElemType)0;
>     if (++preNo == k) { *found = true; return b->data; }
>     ElemType v = PreNode(b->lchild, k, found);
>     if (*found) return v;
>     return PreNode(b->rchild, k, found);
> }
> ```
>
> 调用前令 `preNo=0` 且 `found=false`。
>
> **解析：** 依照先序遍历模板访问根、左子树、右子树，用计数器记录当前是第几个结点；计数到 k 时返回数据并停止继续查找。

## 关联

- 知识点：
- 题型：
