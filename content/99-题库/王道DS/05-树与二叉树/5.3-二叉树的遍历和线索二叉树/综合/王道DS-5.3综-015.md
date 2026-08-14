---
tags: [题目/综合, 王道DS, DS/05-树与二叉树/03-二叉树的遍历和线索二叉树]
---
## 题干

15. 【2014 统考真题】二叉树的带权路径长度（WPL）是二叉树中所有叶结点的带权路径长度之和。

给定一棵二叉树 $T$，采用二叉链表存储，结点结构为：

| `left` | `weight` | `right` |
|:---:|:---:|:---:|

其中叶结点的 `weight` 域保存该结点的非负权值。

设 `root` 为指向 $T$ 的根结点的指针，请设计求 $T$ 的 WPL 的算法。

要求：

- **（1）** 给出算法的基本设计思想。
- **（2）** 使用 C 或 C++ 语言，给出二叉树结点的数据类型定义。
- **（3）** 根据设计思想，采用 C 或 C++ 语言描述算法，关键之处给出注释。

> [!note]- 原题截图
> ![[王道DS-5.3综-015.png]]

> [!success]- 答案与解析
> **答案：**
>
> **（1）设计思想**
>
> 先序遍历二叉树，同时传入当前结点深度 `depth`。遇到叶结点时累加 `weight * depth`。
>
> **（2）数据类型**
>
> ```c
> typedef struct BiTNode {
>     int weight;
>     struct BiTNode *left, *right;
> } BiTNode, *BiTree;
> ```
>
> **（3）算法**
>
> ```c
> int WPLCore(BiTree root, int depth) {
>     if (root == NULL) return 0;
>     if (root->left == NULL && root->right == NULL)
>         return root->weight * depth;
>     return WPLCore(root->left, depth + 1) +
>            WPLCore(root->right, depth + 1);
> }
>
> int WPL(BiTree root) {
>     return WPLCore(root, 0);
> }
> ```
>
> **解析：** 根的深度为 0，每向下一层深度加 1。非叶结点只负责汇总两棵子树的 WPL，叶结点贡献其权值与路径长度的乘积。时间复杂度为 $O(n)$，递归栈为 $O(h)$。

## 关联

- 知识点：
- 题型：
