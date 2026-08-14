---
tags: [题目/选择, 王道CO, CO/02-数据的表示和运算/03-浮点数的表示与运算]
answer: D
---
## 题干

24. 【P69】假定变量i、f的数据类型分别是int、float。

已知i = 12345, f = 1.2345 × 2³，则在一个32位机器中执行下列表达式时，结果为“假”的是（ ）

A. i == (int)(double)i

B. f == (float)(double)f

C. i == (int)(float)i

D. f == (float)(int)f

> [!note]- 原题截图
> ![[王道CO-2.3选-024.png]]

> [!success]- 答案与解析
> **答案：** D
>
> **解析：** int 可精确转为 double，float 也可精确转为 double；12345 可精确转为 float。但 1234.5 转 int 会丢失小数部分，所以 D 为假。

## 关联

- 知识点：
- 题型：
