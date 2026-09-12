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

3. 利用两个栈 $S_1$ 和 $S_2$ 来模拟一个队列，已知栈的 4 个运算定义如下：

```text
Push(S, x);          // 元素 x 入栈 S
Pop(S, x);           // S 出栈并将出栈的值赋给 x
StackEmpty(S);       // 判断栈是否为空
StackOverflow(S);    // 判断栈是否满
```

如何利用栈的运算来实现该队列的 3 个运算（形参由读者根据要求自己设计）？

```text
Enqueue;             // 将元素 x 入队
Dequeue;             // 出队，并将出队元素存储在 x 中
QueueEmpty;          // 判断队列是否为空
```

> [!note]- 原题截图
> ![[王道DS 3.2 队列 综合 03.png]]

> [!success]- 答案与解析
> **答案：**
>
> 用 $S_1$ 接收入队元素，用 $S_2$ 提供出队元素。
>
> ```c
> int EnQueue(Stack *S1, Stack *S2, ElemType x) {
>     ElemType y;
>     if (!StackOverflow(*S1)) {
>         Push(S1, x);
>         return 1;
>     }
>     if (!StackEmpty(*S2))
>         return 0;                  // 此时不能转移，否则破坏队列次序
>     while (!StackEmpty(*S1)) {
>         Pop(S1, &y);
>         Push(S2, y);
>     }
>     Push(S1, x);
>     return 1;
> }
>
> int DeQueue(Stack *S1, Stack *S2, ElemType *x) {
>     ElemType y;
>     if (StackEmpty(*S2)) {
>         if (StackEmpty(*S1))
>             return 0;
>         while (!StackEmpty(*S1)) {
>             Pop(S1, &y);
>             Push(S2, y);
>         }
>     }
>     Pop(S2, x);
>     return 1;
> }
>
> int QueueEmpty(Stack S1, Stack S2) {
>     return StackEmpty(S1) && StackEmpty(S2);
> }
> ```
>
> **解析：** $S_1$ 中的元素从栈底到栈顶按入队先后排列；整体转入 $S_2$ 后顺序反转，队头位于 $S_2$ 栈顶。只有当 $S_2$ 为空时才能再次转移 $S_1$，否则会破坏已有元素的先后次序。

## 关联

- 知识点：
- 题型：
