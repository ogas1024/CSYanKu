---
source: 王道CO
subject: CO
chapter: 02 数据的表示和运算
section: 2.2 运算方法和运算电路
qtype: 选择
topic: []
answer: B
answer_status: 已录入
tags: []
---
## 题干

32. 【P51】【2023 统考真题】已知x,y为int类型，当x=100,y=200时，执行“x减y”指令得到的溢出标志OF和借位标志CF分别为0,1，那么当x=10,y=-20时，执行该指令得到的OF和CF分别为（）

A. OF = 0,CF = 0

B. OF = 0,CF = 1

C. OF = 1,CF = 0

D. OF = 1,CF = 1

> [!note]- 原题截图
> ![[王道CO 2.2 运算方法和运算电路 选择 32.webp]]

> [!success]- 答案与解析
> **答案：** B
>
> **解析：** x=10，y=-20。按有符号数计算 $x-y=30$ 不溢出；按无符号数解释时 y=$2^{32}-20$，减法需借位，CF=1。

## 关联

- 知识点：
- 题型：
