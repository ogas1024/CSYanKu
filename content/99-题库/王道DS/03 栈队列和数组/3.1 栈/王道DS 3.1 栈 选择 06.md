---
source: 王道DS
subject: DS
chapter: 03 栈队列和数组
section: 3.1 栈
qtype: 选择
topic: []
answer: A
answer_status: 已录入
tags: []
---
## 题干

6. 设用数组 `data[1...n]` 存储一个栈，初始栈顶指针 `top=n+1`，则元素 `x` 入栈的操作是（ ）。

A. `data[--top]=x`

B. `data[top++]=x`

C. `data[top--]=x`

D. `data[++top]=x`

> [!note]- 原题截图
> ![[王道DS 3.1 栈 选择 06.png]]

> [!success]- 答案与解析
> **答案：** A
>
> **解析：** 栈向低地址方向增长，`top` 初值为 `n+1`；入栈时先将 `top` 减 1，再写入元素，即 `data[--top]=x`。

## 关联

- 知识点：
- 题型：
