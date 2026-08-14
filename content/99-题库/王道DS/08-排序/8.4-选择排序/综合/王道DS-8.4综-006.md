---
tags: [题目/综合, 王道DS, DS/08-排序/04-选择排序]
---
## 题干

6. 试设计一个算法，判断一个数据序列是否构成一个小根堆。

> [!note]- 原题截图
> ![[王道DS-8.4综-006.png]]

> [!success]- 答案与解析
> **答案：**
>
> 将顺序表按完全二叉树的层序方式解释，逐个检查所有分支结点是否不大于其孩子。以下为 0 下标实现：
>
> ```cpp
> bool isMinHeap(const int A[], int n) {
>     for (int i = 0; i < n / 2; ++i) {
>         int left = 2 * i + 1;
>         int right = 2 * i + 2;
>         if (left < n && A[i] > A[left]) return false;
>         if (right < n && A[i] > A[right]) return false;
>     }
>     return true;
> }
> ```
>
> 时间复杂度为 **$O(n)$**，辅助空间复杂度为 **$O(1)$**。
>
> **解析：** 叶结点没有孩子，无需检查；只要所有分支结点都不大于存在的左、右孩子，整棵完全二叉树就满足小根堆定义。

## 关联

- 知识点：
- 题型：
