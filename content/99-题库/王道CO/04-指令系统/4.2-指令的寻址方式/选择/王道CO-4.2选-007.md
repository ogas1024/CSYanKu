---
tags: [题目/选择, 王道CO, CO/04-指令系统/02-指令的寻址方式]
answer: B
---
## 题干

7. 【P166】设指令中的地址码为 A, 变址寄存器为 X, 程序计数器为 PC, 则变址间址寻址方式的操作数的有效地址 EA 是（）

A. $\left(\left(\mathrm{PC}\right) + \mathrm{A}\right)$

B. $\left(\left(\mathrm{X}\right) + \mathrm{A}\right)$

C. $\left(\mathrm{X}\right) + (\mathrm{A})$

D. $\left(\mathrm{X}\right) + \mathrm{A}$

> [!note]- 原题截图
> ![[王道CO-4.2选-007.png]]

> [!success]- 答案与解析
> **答案：** B
>
> **解析：** 先由变址寄存器内容与形式地址相加得到中间地址，再对该地址间接一次，故 EA=((X)+A)。

## 关联

- 知识点：
- 题型：
