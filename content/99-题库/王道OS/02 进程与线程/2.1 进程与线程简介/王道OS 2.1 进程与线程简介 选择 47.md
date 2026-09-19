---
source: 王道OS
subject: OS
chapter: 02 进程与线程
section: 2.1 进程与线程简介
qtype: 选择
topic: []
answer: D
answer_status: 已录入
tags: []
---
## 题干

47. 【P62】进程创建时，不需要做的是（ ）

A. 填写一个该进程的进程表项

B. 分配该进程适当的内存

C. 将该进程插入就绪队列

D. 为该进程分配 CPU

> [!note]- 原题截图
> ![[王道OS 2.1 进程与线程简介 选择 47.webp]]

> [!success]- 答案与解析
> **答案：** D
>
> **解析：** 创建原语申请并初始化 PCB、分配非 CPU 资源、入就绪队列并返回标识号；CPU 分配是调度程序的工作。

## 关联

- 知识点：
- 题型：
