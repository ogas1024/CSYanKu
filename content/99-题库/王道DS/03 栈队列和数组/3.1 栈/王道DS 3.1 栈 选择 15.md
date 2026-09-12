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

15. 4 个元素依次入栈的次序为 $abcd$，则以 $cd$ 开头的出栈序列的个数为（ ）。

A. 1

B. 2

C. 3

D. 4

> [!note]- 原题截图
> ![[王道DS 3.1 栈 选择 15.png]]

> [!success]- 答案与解析
> **答案：** A
>
> **解析：** 要以 `c,d` 开头，必须先压入 `a,b,c` 并弹出 `c`，再压入、弹出 `d`；此后栈中只能按 `b,a` 出栈，故只有 `cdba` 一种。

## 关联

- 知识点：
- 题型：
