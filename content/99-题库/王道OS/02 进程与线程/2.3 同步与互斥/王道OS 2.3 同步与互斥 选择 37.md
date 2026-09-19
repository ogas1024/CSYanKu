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

37. 【P130】在 Peterson 算法中，flag 数组的作用是 （ ）

A. 表示每个线程是否已进入临界区

B. 表示每个线程是否已进入临界区

C. 表示每个线程是否已退出临界区

D. 表示每个线程是否已完成任务

> [!note]- 原题截图
> ![[王道OS 2.3 同步与互斥 选择 37.webp]]

> [!success]- 答案与解析
> **答案：** A
>
> **解析：** flag数组标记各线程进入临界区的意愿，退出时清false；双方都想进入时把机会让给对方。

## 关联

- 知识点：
- 题型：
