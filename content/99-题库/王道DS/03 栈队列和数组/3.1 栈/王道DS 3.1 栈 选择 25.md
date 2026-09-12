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

25. 设有一个顺序共享栈 `Share[0:n-1]`，其中第一个栈顶指针 `top1` 的初值为 `-1`，第二个栈顶指针 `top2` 的初值为 `n`，则判断共享栈满的条件是（ ）。

A. `top2-top1==1`

B. `top1-top2==1`

C. `top1==top2`

D. 都不对

> [!note]- 原题截图
> ![[王道DS 3.1 栈 选择 25.png]]

> [!success]- 答案与解析
> **答案：** A
>
> **解析：** 两栈分别从数组两端向中间增长，当两个栈顶指针相邻时再入栈就会冲突，故栈满条件为 `top2-top1==1`。

## 关联

- 知识点：
- 题型：
