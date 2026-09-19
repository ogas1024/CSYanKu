---
source: 王道DS
subject: DS
chapter: 03 栈队列和数组
section: 3.2 队列
qtype: 综合
topic: []
answer_status: 已录入
tags: []
---
## 题干

1. 若希望循环队列中的元素都能得到利用，则需设置一个标志域 `tag`，并以 `tag` 的值为 0 或 1 来区分队头指针 `front` 和队尾指针 `rear` 相同时的队列状态是“空”还是“满”。

试编写与此结构相应的入队和出队算法。

> [!note]- 原题截图
> ![[王道DS 3.2 队列 综合 01.webp]]

> [!success]- 答案与解析
> **答案：**
>
> 初始化时令 `Q.front = Q.rear = 0`、`Q.tag = 0`。入队后置 `tag=1`，出队后置 `tag=0`：
>
> - 队空：`Q.front == Q.rear && Q.tag == 0`
> - 队满：`Q.front == Q.rear && Q.tag == 1`
>
> ```c
> int EnQueue(SqQueue *Q, ElemType x) {
>     if (Q->front == Q->rear && Q->tag == 1)
>         return 0;
>     Q->data[Q->rear] = x;
>     Q->rear = (Q->rear + 1) % MaxSize;
>     Q->tag = 1;
>     return 1;
> }
>
> int DeQueue(SqQueue *Q, ElemType *x) {
>     if (Q->front == Q->rear && Q->tag == 0)
>         return 0;
>     *x = Q->data[Q->front];
>     Q->front = (Q->front + 1) % MaxSize;
>     Q->tag = 0;
>     return 1;
> }
> ```
>
> **解析：** 只有入队操作可能使队列由非满变满，只有出队操作可能使队列由非空变空，因此在两类操作后分别记录 `tag=1` 和 `tag=0`，就能在两个指针相等时区分满与空。

## 关联

- 知识点：
- 题型：
