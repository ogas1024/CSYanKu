---
tags: [题目/综合, 王道DS, DS/03-栈队列和数组/02-队列]
---
## 题干

2. `Q` 是一个队列，`S` 是一个空栈，实现将队列中的元素逆置的算法。

> [!note]- 原题截图
> ![[王道DS-3.2综-002.png]]

> [!success]- 答案与解析
> **答案：**
>
> ```c
> void ReverseQueue(Queue *Q, Stack *S) {
>     ElemType x;
>     while (!QueueEmpty(*Q)) {
>         DeQueue(Q, &x);
>         Push(S, x);
>     }
>     while (!StackEmpty(*S)) {
>         Pop(S, &x);
>         EnQueue(Q, x);
>     }
> }
> ```
>
> **解析：** 元素先按原顺序出队并依次入栈，栈的后进先出性质使其出栈次序恰好反转，再依次入队即可。

## 关联

- 知识点：
- 题型：
