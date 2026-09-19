---
source: 王道DS
subject: DS
chapter: 03 栈队列和数组
section: 3.1 栈
qtype: 选择
topic: []
answer: C
answer_status: 已录入
tags: []
---
## 题干

4. 设用数组 `a[n]` 存储一个栈，初始栈顶指针 `top = -1`，则元素 `x` 入栈的操作是（ ）。

A. `a[--top] = x`

B. `a [top--] = x`

C. `a[++top] = x`

D. `a [top++] = x`

> [!note]- 原题截图
> ![[王道DS 3.1 栈 选择 04.webp]]

> [!success]- 答案与解析
> **答案：** C
>
> **解析：** 初始 `top=-1` 且 `top` 指向栈顶元素，入栈时先使 `top` 加 1，再将 `x` 写入 `a[top]`，即 `a[++top]=x`。

## 关联

- 知识点：
- 题型：
