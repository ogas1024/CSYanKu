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

14. 试设计判断两棵二叉树是否相似的算法。

所谓二叉树  $T_{1}$ 和  $T_{2}$ 相似，指的是  $T_{1}$ 和  $T_{2}$ 都是空的二叉树或都只有一个根结点；

或  $T_{1}$ 的左子树和  $T_{2}$ 的左子树是相似的，且  $T_{1}$ 的右子树和  $T_{2}$ 的右子树是相似的。

> [!note]- 原题截图
> ![[王道DS 5.3 二叉树的遍历和线索二叉树 综合 14.png]]

> [!success]- 答案与解析
> **答案：**
>
> ```c
> bool Similar(BiTree T1, BiTree T2) {
>     if (T1 == NULL && T2 == NULL) return true;
>     if (T1 == NULL || T2 == NULL) return false;
>     return Similar(T1->lchild, T2->lchild) &&
>            Similar(T1->rchild, T2->rchild);
> }
> ```
>
> **解析：** 相似只比较结构，不比较数据域。两树同时为空时相似；仅一棵为空时不相似；否则递归比较对应的左、右子树。

## 关联

- 知识点：
- 题型：
