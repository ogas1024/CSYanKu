---
source: 王道OS
subject: OS
chapter: 02 进程与线程
section: 2.1 进程与线程简介
qtype: 选择
topic: []
answer: C
answer_status: 已录入
tags: []
---
## 题干

8. 【P59】下列任务中，（ ）不是由进程创建原语完成的。

A. 申请 PCB 并初始化

B. 为进程分配内存空间

C. 为进程分配 CPU

D. 将进程插入就绪队列

> [!note]- 原题截图
> ![[王道OS 2.1 进程与线程简介 选择 08.png]]

> [!success]- 答案与解析
> **答案：** C
>
> **解析：** 创建进程需申请 PCB 和标识符、分配资源、初始化 PCB 并加入就绪队列；CPU 分配属于后续调度。

## 关联

- 知识点：
- 题型：
