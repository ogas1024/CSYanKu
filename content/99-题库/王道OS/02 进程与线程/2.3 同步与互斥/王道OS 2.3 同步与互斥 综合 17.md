---
source: 王道OS
subject: OS
chapter: 02 进程与线程
section: 2.3 同步与互斥
qtype: 综合
topic: []
answer_status: 已录入
tags: []
---
## 题干

三个进程 $P_1,P_2,P_3$ 互斥使用一个包含 $N$（$N>0$）个单元的缓冲区。

P₁ 每次用 produce() 生成一个正整数并用 put() 送入缓冲区某一空单元; P₂ 每次用 getodd() 从该缓冲区中取出一个奇数并用 countodd() 统计奇数个数; P₃ 每次用 geteven() 从该缓冲区中取出一个偶数并用 counteven() 统计偶数个数。

请用信号量机制实现这三个进程的同步与互斥活动，并说明所定义的信号量的含义(要求用伪代码描述)。

> [!note]- 原题截图
> ![[王道OS 2.3 同步与互斥 综合 17.webp]]

> [!success]- 答案与解析
> **答案：**
>
> 设 `mutex=1,odd=0,even=0,empty=N`。
>
> - P1生产数x：`P(empty),P(mutex)` 放入缓冲，`V(mutex)`；若x偶数则 `V(even)`，否则 `V(odd)`。
> - P2：`P(odd),P(mutex)` 取奇数，`V(mutex),V(empty)` 后统计。
> - P3：`P(even),P(mutex)` 取偶数，`V(mutex),V(empty)` 后统计。
>
> **解析：** empty限制总容量，odd/even分别把对应产品同步给唯一消费者，mutex保护共享缓冲区。

## 关联

- 知识点：
- 题型：
