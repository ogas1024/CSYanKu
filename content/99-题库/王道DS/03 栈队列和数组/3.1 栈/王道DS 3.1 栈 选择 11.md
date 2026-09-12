---
source: 王道DS
subject: DS
chapter: 03 栈队列和数组
section: 3.1 栈
qtype: 选择
topic: []
answer: D
answer_status: 已录入
tags: []
---
## 题干

11. 链栈（不带头结点）执行 `Pop` 操作，并将出栈的元素存在 `x` 中，应该执行（ ）。

A. `x=top; top=top->next`

B. `x=top->data`

C. `top=top->next; x=top->data`

D. `x=top->data; top=top->next`

> [!note]- 原题截图
> ![[王道DS 3.1 栈 选择 11.png]]

> [!success]- 答案与解析
> **答案：** D
>
> **解析：** 出栈时应先读取当前栈顶结点的数据 `x=top->data`，再令 `top=top->next`；实际实现还应释放原栈顶结点。

## 关联

- 知识点：
- 题型：
