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

14. 设 $a,b,c,d,e,f$ 以所给的次序入栈，若在入栈操作时，允许出栈操作，则下面不会出现的出栈序列为（ ）。

A. $fedcba$

B. $bcafed$

C. $dcefba$

D. $cabdef$

> [!note]- 原题截图
> ![[王道DS 3.1 栈 选择 14.png]]

> [!success]- 答案与解析
> **答案：** D
>
> **解析：** 若 `c` 先出栈，此时它下方的 `b`、`a` 只能按 `b`、`a` 的顺序出栈；选项 D 却要求 `a` 早于 `b` 出栈，不可能。

## 关联

- 知识点：
- 题型：
