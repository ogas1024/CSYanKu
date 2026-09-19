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

理发店里有一位理发师、一把理发椅和 n 把供等候理发的顾客坐的椅子。

若没有顾客，理发师便在理发椅上睡觉，一位顾客到来时，顾客必须叫醒理发师，若理发师正在理发时又有顾客来到，且有空椅子可坐，则坐下来等待，否则就离开。

试用 P,V 操作实现，并说明信号量的定义和初值。

> [!note]- 原题截图
> ![[王道OS 2.3 同步与互斥 综合 11.webp]]

> [!success]- 答案与解析
> **答案：**
>
> 设 `waiting=0`、椅子数 `chairs=n`，信号量 `customers=0,barbers=0,mutex=1`。
>
> - 理发师：循环 `P(customers),P(mutex)`；`waiting--`，`V(barbers),V(mutex)`，随后理发。无顾客时阻塞睡眠。
> - 顾客：`P(mutex)`；若 `waiting<chairs`，则 `waiting++`、`V(customers),V(mutex)`，再 `P(barbers)` 等候理发；否则 `V(mutex)` 后离开。
>
> **解析：** waiting由mutex保护；customers统计候客并唤醒理发师，barbers表示理发师已接待一名顾客。

## 关联

- 知识点：
- 题型：
