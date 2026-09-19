---
source: 王道CO
subject: CO
chapter: 02 数据的表示和运算
section: 2.2 运算方法和运算电路
qtype: 选择
topic: []
answer: C
answer_status: 已录入
tags: []
---
## 题干

29. 【P51】【2018 统考真题】假定有符号整数采用补码表示，若 int 型变量x和y的机器数分别是 FFFF FFDFH 和0000 0041H，则x、y的值及x-y的机器数分别是（ ）

A. x = -65, y = 41, x-y的机器数溢出

B. x = -33, y = 65, x-y的机器数为 FFFF FF9DH

C. x = -33, y = 65, x-y的机器数为 FFFF FF9EH

D. x = -65, y = 41, x-y的机器数为 FFFF FF96H

> [!note]- 原题截图
> ![[王道CO 2.2 运算方法和运算电路 选择 29.webp]]

> [!success]- 答案与解析
> **答案：** C
>
> **解析：** FFFF FFDFH 按 32 位补码解释为 -33，0000 0041H 为 65，因此 $x-y=-98$，其 32 位补码为 FFFF FF9EH。

## 关联

- 知识点：
- 题型：
