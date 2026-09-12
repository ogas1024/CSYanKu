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

63. 【P64】【2015 统考真题】下列选项中，会导致进程从执行态变为就绪态的事件是（ ）

A. 执行 P（wait）操作

B. 申请内存失败

C. 启动 I/O 设备

D. 被高优先级进程抢占

> [!note]- 原题截图
> ![[王道OS 2.1 进程与线程简介 选择 63.png]]

> [!success]- 答案与解析
> **答案：** D
>
> **解析：** P 操作请求资源，不足时进入阻塞；仅被剥夺 CPU 会转入就绪态，获得 CPU 即可继续。

## 关联

- 知识点：
- 题型：
