---
source: 王道OS
subject: OS
chapter: 02 进程与线程
section: 2.2 CPU调度
qtype: 综合
topic: []
answer_status: 已录入
tags: []
---
## 题干

某个进程调度程序采用基于优先数(priority)的调度策略，即选择优先数最小的进程运行，进程创建时由用户指定一个nice作为静态优先数。

为了动态调整优先数，引入运行时间cpuTime和等待时间waitTime，初值均为0。

进程处于执行态时，cpuTime定时加1，且waitTime置0；

进程处于就绪态时，cpuTime置0，waitTime定时加1。

请回答下列问题：

1) 若调度程序只将 nice 的值作为进程的优先数，即 priority = nice，则可能会出现饥饿现象。

为什么？

2) 使用 nice, cpuTime 和 waitTime 设计一种动态优先数计算方法，以避免产生饥饿现象，并说明 waitTime 的作用。

> [!note]- 原题截图
> ![[王道OS 2.2 CPU调度 综合 10.png]]

> [!success]- 答案与解析
> **答案：**
>
> 1. 采用静态优先数时，只要就绪队列中持续存在优先数更小的进程，优先数较大的进程就可能一直得不到运行，产生饥饿。
>
> 2. 可定义动态优先数：
>
> `priority = nice + k1 × cpuTime − k2 × waitTime`，其中 `k1>0`、`k2>0`。
>
> 运行越久，`cpuTime` 越大，优先数增大、优先级降低；等待越久，`waitTime` 越大，优先数减小、优先级提高。因此 `waitTime` 提供老化机制，使长期等待进程逐步获得更高优先级，从而避免饥饿。
>
> **解析：** 动态优先级同时惩罚累计 CPU 占用并奖励等待时间，既保持 nice 的基础权重，又能让长期等待者最终被调度。

## 关联

- 知识点：
- 题型：
