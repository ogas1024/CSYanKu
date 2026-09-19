---
source: 王道OS
subject: OS
chapter: 02 进程与线程
section: 2.2 CPU调度
qtype: 选择
topic: []
answer: B
answer_status: 已录入
tags: []
---
## 题干

10. 【P88】（ ）有利于CPU繁忙型的作业，而不利于I/O繁忙型的作业。

A. 时间片轮转调度算法

B. 先来先服务调度算法

C. 短作业（进程）优先算法

D. 优先权调度算法

> [!note]- 原题截图
> ![[王道OS 2.2 CPU调度 选择 10.webp]]

> [!success]- 答案与解析
> **答案：** B
>
> **解析：** FCFS 偏向长的 CPU 型作业，SJF 适合短的 I/O 型作业；时间片轮转不因长短而区别，优先级也与作业长度无必然关系。

## 关联

- 知识点：
- 题型：
