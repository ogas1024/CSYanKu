---
source: 王道CO
subject: CO
chapter: 02 数据的表示和运算
section: 2.2 运算方法和运算电路
qtype: 选择
topic: []
answer: A
answer_status: 已录入
tags: []
---
## 题干

31. 【P51】【2018 统考真题】减法指令“subR1,R2,R3”的功能为“（R1）-（R2）→R3”，该指令执行后将生成进位/借位标志 CF 和溢出标志 OF。

若（R1）=FFFF FFFFH，（R2）=FFFF FFF0H，则该减法指令执行后，CF 与 OF 分别为（ ）

A. CF = 0,OF = 0

B. CF = 1,OF = 0

C. CF = 0,OF = 1

D. CF = 1,OF = 1

> [!note]- 原题截图
> ![[王道CO 2.2 运算方法和运算电路 选择 31.png]]

> [!success]- 答案与解析
> **答案：** A
>
> **解析：** R1-R2 时将 -R2=0000 0010H 与 R1 相加，符号位的进位输入和输出均为 1，故 OF=0；无符号比较下 R1>R2，无借位，CF=0。

## 关联

- 知识点：
- 题型：
