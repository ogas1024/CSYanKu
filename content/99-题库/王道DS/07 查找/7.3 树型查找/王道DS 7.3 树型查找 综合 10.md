---
source: 王道DS
subject: DS
chapter: 07 查找
section: 7.3 树型查找
qtype: 综合
topic: []
answer_status: 已录入
tags: []
---
## 题干

10. 编写一个递归算法，在一棵有 $n$ 个结点的、随机建立起来的二叉排序树上查找第 $k$ ($1 \leq k \leq n$) 小的元素，并返回指向该结点的指针。

要求算法的平均时间复杂度为 $O(\log_{2} n)$。

二叉排序树的每个结点中除 `data`、`lchild`、`rchild` 等数据成员外，增加一个 `count` 成员，保存以该结点为根的子树上的结点个数。

> [!note]- 原题截图
> ![[王道DS 7.3 树型查找 综合 10.webp]]

> [!success]- 答案与解析
> **答案：**
>
> 设每个结点的 count 保存以该结点为根的子树结点总数。令 leftSize 为左子树结点数，则当前根是该子树中的第 leftSize+1 小元素：
>
>     BSTNode *KthSmallest(BSTNode *t, int k) {
>         if (t == NULL || k < 1 || k > t->count) return NULL;
>         int leftSize = t->lchild ? t->lchild->count : 0;
>         if (k == leftSize + 1) return t;
>         if (k <= leftSize)
>             return KthSmallest(t->lchild, k);
>         return KthSmallest(t->rchild, k - leftSize - 1);
>     }
>
> 在随机建立、期望高度为 O(log n) 的二叉排序树上，平均时间复杂度为 O(log n)，递归栈平均空间复杂度也为 O(log n)。
>
> **解析：** 左子树全部关键字小于根，因此左子树大小直接给出根的秩。若 k 更小就保持 k 在左子树查找；若 k 更大，则跳过左子树和根，在右子树查找第 k-leftSize-1 小元素。每层只进入一个子树，时间与树高成正比。

## 关联

- 知识点：
- 题型：
