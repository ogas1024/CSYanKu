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

11. 假设二叉树采用二叉链表存储结构，设计一个算法，求非空二叉树 $b$ 的宽度（具有结点数最多的那一层的结点个数）。

> [!note]- 原题截图
> ![[王道DS 5.3 二叉树的遍历和线索二叉树 综合 11.png]]

> [!success]- 答案与解析
> **答案：**
>
> ```c
> int Width(BiTree root) {
>     if (root == NULL) return 0;
>     BiTree Q[MaxSize];
>     int front = 0, rear = 0, ans = 0;
>     Q[rear++] = root;
>     while (front < rear) {
>         int levelCount = rear - front;
>         if (levelCount > ans) ans = levelCount;
>         for (int i = 0; i < levelCount; ++i) {
>             BiTree p = Q[front++];
>             if (p->lchild) Q[rear++] = p->lchild;
>             if (p->rchild) Q[rear++] = p->rchild;
>         }
>     }
>     return ans;
> }
> ```
>
> **解析：** 每轮循环开始时，队列中恰好是当前层的全部结点，`rear-front` 即该层宽度。逐层取最大值即得树的宽度。

## 关联

- 知识点：
- 题型：
