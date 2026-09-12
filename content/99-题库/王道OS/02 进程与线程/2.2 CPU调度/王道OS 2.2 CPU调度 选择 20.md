---
source: 王道OS
subject: OS
chapter: 02 进程与线程
section: 2.2 CPU调度
qtype: 选择
topic: []
answer: C
answer_status: 已录入
tags: []
---
## 题干

20. 【P89】采用时间片轮转调度算法分配 CPU 时，当处于运行态的进程用完一个时间片后，它的状态是（ ）状态。

A. 阻塞

B. 运行

C. 就绪

D. 消亡

> [!note]- 原题截图
> ![[王道OS 2.2 CPU调度 选择 20.png]]

> [!success]- 答案与解析
> **答案：** C
>
> **解析：** 运行进程用完时间片转就绪而非终止；只有正常结束并调用 exit 或发生异常终止时进程才结束。

## 关联

- 知识点：
- 题型：
