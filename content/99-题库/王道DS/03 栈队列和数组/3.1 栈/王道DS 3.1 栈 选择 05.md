---
source: 王道DS
subject: DS
chapter: 03 栈队列和数组
section: 3.1 栈
qtype: 选择
topic: []
answer: B
answer_status: 已录入
tags: []
---
## 题干

5. 设用数组 `data[1...n]` 存储一个栈，初始栈顶指针 `top=1`，则元素 `x` 入栈的操作是（ ）。

A. `data[top--]=x`

B. `data[top++]=x`

C. `data[--top]=x`

D. `data[++top]=x`

> [!note]- 原题截图
> ![[王道DS 3.1 栈 选择 05.png]]

> [!success]- 答案与解析
> **答案：** B
>
> **解析：** 此题 `top` 初值为 1，表示指向栈顶元素的下一个位置；入栈应先写入 `data[top]`，再使 `top` 加 1。

## 关联

- 知识点：
- 题型：
