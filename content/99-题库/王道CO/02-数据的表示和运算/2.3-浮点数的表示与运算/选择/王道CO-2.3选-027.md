---
tags: [题目/选择, 王道CO, CO/02-数据的表示和运算/03-浮点数的表示与运算]
answer: B
year: 2010
---
## 题干

27. 【P69】【2010 统考真题】假定变量 i、f 和 d 的数据类型分别为 int、float 和 double（int 用补码表示，float 和 double 分别用 IEEE754 单精度和双精度浮点数格式表示），已知 i = 785，f = 1.5678E3，d = 1.5E100，若在 32 位机器中执行下列关系表达式，则结果为“真”的是（ ）

Ⅰ. f == (int)(float)i

Ⅱ. f == (float)(int)f

Ⅲ. f == (float)(double)f

Ⅳ. (d + f) - d == f

A. 仅 I 和 II

B. 仅 I 和 III

C. 仅 II 和 III

D. 仅 III 和 IV

> [!note]- 原题截图
> ![[王道CO-2.3选-027.png]]

> [!success]- 答案与解析
> **答案：** B
>
> **解析：** i=785 转 float 无损，故 I 真；f 先转 int 丢小数，II 假；float 转 double 再转回无损，III 真；d 与 f 对阶时 f 全部丢失，IV 假。

## 关联

- 知识点：
- 题型：
