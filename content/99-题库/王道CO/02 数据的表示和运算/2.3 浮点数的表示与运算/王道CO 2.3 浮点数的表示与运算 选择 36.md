---
source: 王道CO
subject: CO
chapter: 02 数据的表示和运算
section: 2.3 浮点数的表示与运算
qtype: 选择
topic: []
answer: A
answer_status: 已录入
tags: []
---
## 题干

36. 【P71】【2018 统考真题】某 32 位计算机按字节编址，采用小端方式。

若语句 `int i = 0;` 对应指令的机器代码为 `C7 45 FC 00 00 00 00`，则语句 `int i = -64;` 对应指令的机器代码是（）

A. C7 45 FC C0 FF FF FF

B. C7 45 FC 0C FF FF FF

C. C7 45 FC FF FF FF C0

D. C7 45 FC FF FF FF 0C

> [!note]- 原题截图
> ![[王道CO 2.3 浮点数的表示与运算 选择 36.png]]

> [!success]- 答案与解析
> **答案：** A
>
> **解析：** -64 的 32 位补码为 FFFFFFC0H，小端按字节依次存为 C0 FF FF FF，替换立即数后机器代码为 `C7 45 FC C0 FF FF FF`。

## 关联

- 知识点：
- 题型：
