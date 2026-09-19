---
source: 王道CO
subject: CO
chapter: 04 指令系统
section: 4.2 指令的寻址方式
qtype: 选择
topic: []
answer: C
answer_status: 已录入
tags: []
---
## 题干

25. 【P168】【2011 统考真题】某机器有一个标志寄存器，其中有进位/借位标志 CF、零标志 ZF、符号标志 SF 和溢出标志 OF，条件转移指令 bgt（无符号整数比较大于时转移）的转移条件是（）

A. CF + OF = 1

B. SF + OF = 1

C. CF + ZF = 1

D. CF + SF = 1

> [!note]- 原题截图
> ![[王道CO 4.2 指令的寻址方式 选择 25.webp]]

> [!success]- 答案与解析
> **答案：** C
>
> **解析：** 无符号比较通常由减法设置标志；按本题采用的无借位/进位标志约定，A>B 时 CF=1 且 ZF=0，因而条件为 CF+ZF=1，对应 C。

## 关联

- 知识点：
- 题型：
