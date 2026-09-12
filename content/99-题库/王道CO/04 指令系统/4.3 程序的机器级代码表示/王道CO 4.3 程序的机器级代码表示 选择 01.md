---
source: 王道CO
subject: CO
chapter: 04 指令系统
section: 4.3 程序的机器级代码表示
qtype: 选择
topic: []
answer: C
answer_status: 已录入
tags: []
---
## 题干

1. 【P187】假设R[ax] = FFE8H, R[bx] = 7FE6H, 执行指令“add ax, bx”后，寄存器的内容和各标志的变化为（）

A. R[ax] = 7FCEH, OF = 1, SF = 0, CF = 0, ZF = 0

B. R[bx] = 7FCEH, OF = 1, SF = 0, CF = 0, ZF = 0

C. R[ax] = 7FCEH, OF = 0, SF = 0, CF = 1, ZF = 0

D. R[bx] = 7FCEH, OF = 0, SF = 0, CF = 1, ZF = 0

> [!note]- 原题截图
> ![[王道CO 4.3 程序的机器级代码表示 选择 01.png]]

> [!success]- 答案与解析
> **答案：** C
>
> **解析：** Intel 格式以第一个操作数为目的。FFE8H+7FE6H=17FCEH，16 位结果 ax=7FCEH；异号相加不产生有符号溢出，OF=0，结果非负且非零，SF=0、ZF=0，并有进位，CF=1。

## 关联

- 知识点：
- 题型：
