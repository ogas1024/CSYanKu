---
source: 王道OS
subject: OS
chapter: 02 进程与线程
section: 2.3 同步与互斥
qtype: 选择
topic: []
answer: D
answer_status: 已录入
tags: []
---
## 题干

20. 【P128】一个进程映像由程序、数据及PCB组成，其中（ ）必须用可重入编码编写。

A. PCB

B. 程序

C. 数据

D. 共享程序段

> [!note]- 原题截图
> ![[王道OS 2.3 同步与互斥 选择 20.webp]]

> [!success]- 答案与解析
> **答案：** D
>
> **解析：** 共享程序段会被多个进程同时使用，必须编写为可重入代码。

## 关联

- 知识点：
- 题型：
