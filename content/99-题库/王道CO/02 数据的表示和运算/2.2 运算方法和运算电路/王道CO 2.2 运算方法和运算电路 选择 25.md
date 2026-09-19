---
source: 王道CO
subject: CO
chapter: 02 数据的表示和运算
section: 2.2 运算方法和运算电路
qtype: 选择
topic: []
answer: D
answer_status: 已录入
tags: []
---
## 题干

25. 【P51】【2009 统考真题】一个 C 语言程序在一台 32 位机器上运行，程序中定义了三个变量 `x`、`y`、`z`，其中 `x` 和 `z` 为 int 型，`y` 为 short 型。

当 `x = 127`、`y = -9` 时，执行赋值语句 `z = x + y` 后，`x`、`y`、`z` 的值分别是（）

A. x=0000007FH,y=FFF9H,z=00000076H

B. x=0000007FH,y=FFF9H,z=FFFF0076H

C. x=0000007FH,y=FFF7H,z=FFFF0076H

D. x=0000007FH,y=FFF7H,z=00000076H

> [!note]- 原题截图
> ![[王道CO 2.2 运算方法和运算电路 选择 25.webp]]

> [!success]- 答案与解析
> **答案：** D
>
> **解析：** x=0x0000007F；y 为 short 型 0xFFF7，转为 int 时符号扩展为 0xFFFFFFF7。相加得 0x00000076。

## 关联

- 知识点：
- 题型：
