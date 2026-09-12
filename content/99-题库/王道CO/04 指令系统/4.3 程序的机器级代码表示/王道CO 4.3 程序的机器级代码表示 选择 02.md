---
source: 王道CO
subject: CO
chapter: 04 指令系统
section: 4.3 程序的机器级代码表示
qtype: 选择
topic: []
answer: B
answer_status: 已录入
tags: []
---
## 题干

2. 【P187】假设R[ax] = 7FE6H, R[bx] = FFE8H, 执行指令“sub bx, ax”后，寄存器的内容和各标志的变化为（）

A. R[ax] = 8002H, OF = 0, SF = 1, CF = 1, ZF = 0

B. R[bx] = 8002H, OF = 0, SF = 1, CF = 0, ZF = 0

C. R[ax] = 8002H, OF = 1, SF = 1, CF = 0, ZF = 0

D. R[bx] = 8002H, OF = 1, SF = 1, CF = 0, ZF = 0

> [!note]- 原题截图
> ![[王道CO 4.3 程序的机器级代码表示 选择 02.png]]

> [!success]- 答案与解析
> **答案：** B
>
> **解析：** sub bx,ax 计算 bx-ax。FFE8H-7FE6H=8002H，写回 bx；两负数相减的补码加法结果为负且不溢出，OF=0、SF=1、ZF=0，按减法进位约定 CF=0。

## 关联

- 知识点：
- 题型：
