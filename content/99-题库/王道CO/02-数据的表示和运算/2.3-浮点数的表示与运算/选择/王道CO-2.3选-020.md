---
tags: [题目/选择, 王道CO, CO/02-数据的表示和运算/03-浮点数的表示与运算]
answer: D
---
## 题干

20. 【P68】假设已定义三个 int 型变量 `x`、`y` 和 `z`，`sizeof(int) = 4`，double 型采用 IEEE 754 双精度浮点数格式，变量 `dx`、`dy` 和 `dz` 的声明和初始化如下：

```c
double dx = (double)x;
double dy = (double)y;
double dz = (double)z;
```

则下列关系表达式中永远为真的是（）

Ⅰ. `dx + dy == (double)(x + y)`

Ⅱ. `(dx + dy) + dz == dx + (dy + dz)`

A. I 和 II

B. 仅 I

C. 仅 II

D. 无正确选项

> [!note]- 原题截图
> ![[王道CO-2.3选-020.png]]

> [!success]- 答案与解析
> **答案：** D
>
> **解析：** I 可因 int 加法溢出而与 double 中先加的结果不同；II 中 32 位 int 都能被 double 精确表示，三数对阶不会超过 53 位有效精度，故 II 永真而 I 非永真。

## 关联

- 知识点：
- 题型：
