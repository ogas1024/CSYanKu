---
source: 王道OS
subject: OS
chapter: 02 进程与线程
section: 2.1 进程与线程简介
qtype: 选择
topic: []
answer: A
answer_status: 已录入
tags: []
---
## 题干

27. 【P60】进程自身决定（ ）

A. 从运行态到阻塞态

B. 从运行态到就绪态

C. 从就绪态到运行态

D. 从阻塞态到就绪态

> [!note]- 原题截图
> ![[王道OS 2.1 进程与线程简介 选择 27.png]]

> [!success]- 答案与解析
> **答案：** A
>
> **解析：** 运行进程可主动通过 read、wait 等系统调用请求 I/O 或资源而转阻塞；其余基本状态转换由调度或外部事件触发。

## 关联

- 知识点：
- 题型：
