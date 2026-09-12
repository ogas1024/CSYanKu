---
source: 王道OS
subject: OS
chapter: 01 计算机系统概述
section: 1.3 操作系统的运行环境
qtype: 选择
topic: []
answer: C
answer_status: 已录入
tags: []
---
## 题干

22. 【P24】【2015 统考真题】假定下列指令已装入指令寄存器，则执行时不可能导致 CPU 从用户态变为内核态（系统态）的是（ ）。

A. `DIV R0,R1`；

$(R0)/(R1)\rightarrow R0$

B. `INT n`；

产生软中断

C. `NOT R0`；

寄存器 R0 的内容取非

D. `MOV R0,addr`；

把地址 addr 处的内存数据放入寄存器 R0

> [!note]- 原题截图
> ![[王道OS 1.3 操作系统的运行环境 选择 22.png]]

> [!success]- 答案与解析
> **答案：** C
>
> **解析：** 除零、软中断和缺页都可能使 CPU 转入内核态；题中 C 所示指令不会产生异常，因此不会引起状态切换。

## 关联

- 知识点：
- 题型：
