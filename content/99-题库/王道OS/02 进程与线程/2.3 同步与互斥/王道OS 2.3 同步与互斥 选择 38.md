---
source: 王道OS
subject: OS
chapter: 02 进程与线程
section: 2.3 同步与互斥
qtype: 选择
topic: []
answer: A
answer_status: 已录入
tags: []
---
## 题干

38. 【P130】在 Peterson 算法中，turn 变量的作用是（ ）

A. 表示轮到哪个线程进入临界区

B. 表示哪个线程先发出访问请求

C. 表示哪个线程后发出访问请求

D. 表示哪个线程已进入临界区

> [!note]- 原题截图
> ![[王道OS 2.3 同步与互斥 选择 38.webp]]

> [!success]- 答案与解析
> **答案：** A
>
> **解析：** turn记录被允许进入临界区的线程号；对方flag为true时由turn决定谁先进入。

## 关联

- 知识点：
- 题型：
