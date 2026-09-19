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

3. 【P187】某计算机的数据采用小端方式存储，减法指令 `sub ax, imm` 的功能为 $(ax)-imm\to ax$，imm 表示立即数。

该指令对应的十六进制机器码为 `2dxxxx`（从左到右以字节为单位由低地址到高地址），其中 `xxxx` 对应 imm 的机器码。

若 $imm=-3$，$(ax)=7$，则该指令对应的机器码和执行后 OF 标志位的值分别为（）

A. `2DFFFDH`，0

B. `2DFFFDH`，1

C. `2DFDFFH`，0

D. `2DFDFFH`，1

> [!note]- 原题截图
> ![[王道CO 4.3 程序的机器级代码表示 选择 03.webp]]

> [!success]- 答案与解析
> **答案：** C
>
> **解析：** -3 的 16 位补码为 FFFDH，小端按低字节 FDH、高字节 FFH 存放，因此机器码为 2DFDFFH。7-(-3)=10 未发生有符号溢出，OF=0。

## 关联

- 知识点：
- 题型：
