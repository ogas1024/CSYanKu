---
source: 王道DS
subject: DS
chapter: 05 树与二叉树
section: 5.2 二叉树的概念
qtype: 综合
topic: []
answer_status: 已录入
tags: []
---
## 题干

5. 已知一棵二叉树按顺序存储结构进行存储，设计一个算法，求编号分别为 $i$ 和 $j$的两个结点的最近的公共祖先结点的值。

> [!note]- 原题截图
> ![[王道DS 5.2 二叉树的概念 综合 05.png]]

> [!success]- 答案与解析
> **答案：**
>
> 在顺序存储下，反复将序号较大的结点替换为其双亲，直到两个序号相等：
>
> ```c
> ElemType CommonAncestor(SqTree T, int i, int j) {
>     if (T[i] == '#' || T[j] == '#')
>         return ERROR;
>     while (i != j) {
>         if (i > j)
>             i /= 2;
>         else
>             j /= 2;
>     }
>     return T[i];
> }
> ```
>
> 时间复杂度为 $O(h)$，额外空间复杂度为 $O(1)$。
>
> **解析：** 数组下标从 1 开始时，序号 x 的结点的双亲序号为 `floor(x/2)`。较大的序号所在层次不低于较小者，每次让它上移一层，两者首次相等的结点就是最近公共祖先。

## 关联

- 知识点：
- 题型：
