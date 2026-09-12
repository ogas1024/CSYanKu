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

12. 设有一棵满二叉树（所有结点值均不同），已知其先序序列为 `pre`，设计一个算法求其后序序列 `post`。

> [!note]- 原题截图
> ![[王道DS 5.3 二叉树的遍历和线索二叉树 综合 12.png]]

> [!success]- 答案与解析
> **答案：**
>
> 设当前子树在 `pre[l1..h1]` 中，对应的后序区间为 `post[l2..h2]`，子树结点数为 $n=h1-l1+1$。满二叉树的左、右子树各有 $(n-1)/2$ 个结点。
>
> ```c
> void PreToPost(ElemType pre[], int l1, int h1,
>                ElemType post[], int l2, int h2) {
>     int n = h1 - l1 + 1;
>     if (n <= 0) return;
>     post[h2] = pre[l1];
>     if (n == 1) return;
>     int half = (n - 1) / 2;
>     PreToPost(pre, l1 + 1, l1 + half,
>               post, l2, l2 + half - 1);
>     PreToPost(pre, l1 + half + 1, h1,
>               post, l2 + half, h2 - 1);
> }
> ```
>
> **解析：** 先序区间的首元素是当前根，应放到对应后序区间的末尾。再利用满二叉树两棵子树结点数相等进行递归分段。例如先序 `ABCDEFG` 转换为后序 `CDBFGEA`。

## 关联

- 知识点：
- 题型：
