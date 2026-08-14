---
tags: [题目/综合, 王道DS, DS/05-树与二叉树/03-二叉树的遍历和线索二叉树]
---
## 题干

3. 假设二叉树采用二叉链表存储结构，设计一个非递归算法求二叉树的高度。

> [!note]- 原题截图
> ![[王道DS-5.3综-003.png]]

> [!success]- 答案与解析
> **答案：**
>
> 用层序遍历计数层数。
>
> ```c
> int BtDepth(BiTree T) {
>     if (T == NULL) return 0;
>     BiTree Q[MaxSize];
>     int front = -1, rear = -1, last = 0, level = 0;
>     Q[++rear] = T;
>     while (front < rear) {
>         BiTree p = Q[++front];
>         if (p->lchild) Q[++rear] = p->lchild;
>         if (p->rchild) Q[++rear] = p->rchild;
>         if (front == last) {
>             ++level;
>             last = rear;
>         }
>     }
>     return level;
> }
> ```
>
> **解析：** `last` 始终指向当前层最后一个结点在队列中的位置。每当 `front == last`，说明一层处理完毕，层数加 1，再令 `last=rear` 标记下一层的末结点。时间复杂度为 $O(n)$，队列空间为 $O(n)$。

## 关联

- 知识点：
- 题型：
