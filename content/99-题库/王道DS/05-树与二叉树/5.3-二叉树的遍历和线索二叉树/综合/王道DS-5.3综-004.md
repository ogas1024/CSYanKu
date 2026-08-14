---
tags: [题目/综合, 王道DS, DS/05-树与二叉树/03-二叉树的遍历和线索二叉树]
---
## 题干

4. 二叉树按二叉链表形式存储，试编写一个判别给定二叉树是否完全二叉树的算法。

> [!note]- 原题截图
> ![[王道DS-5.3综-004.png]]

> [!success]- 答案与解析
> **答案：**
>
> 层序遍历时把空指针也入队；一旦出队遇到空指针，其后若再出现非空结点，则不是完全二叉树。
>
> ```c
> bool IsComplete(BiTree T) {
>     BiTree Q[MaxSize];
>     int front = 0, rear = 0;
>     Q[rear++] = T;
>     while (front < rear) {
>         BiTree p = Q[front++];
>         if (p != NULL) {
>             Q[rear++] = p->lchild;
>             Q[rear++] = p->rchild;
>         } else {
>             while (front < rear)
>                 if (Q[front++] != NULL) return false;
>             return true;
>         }
>     }
>     return true;
> }
> ```
>
> **解析：** 完全二叉树与满二叉树的层序编号一一对应，所以层序序列中不允许在第一个空位置之后再出现非空结点。

## 关联

- 知识点：
- 题型：
