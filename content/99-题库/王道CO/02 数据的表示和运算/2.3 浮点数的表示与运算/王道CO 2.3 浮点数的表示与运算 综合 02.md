---
source: 王道CO
subject: CO
chapter: 02 数据的表示和运算
section: 2.3 浮点数的表示与运算
qtype: 综合
topic: []
answer_status: 已录入
tags: []
---
## 题干

假定变量 `i` 是一个 32 位的 int 型整数，`f` 和 `d` 分别为 float 型（32 位）和 double 型（64 位）实数。

分析下列各布尔表达式，说明结果是否在任何情况下都是 `true`。

1. `i == (int)((double)i)`
2. `f == (float)((int)f)`
3. `f == (float)((double)f)`
4. `d == (double)((float)d)`

> [!note]- 原题截图
> ![[王道CO 2.3 浮点数的表示与运算 综合 02.webp]]

> [!success]- 答案与解析
> **答案：**
>
> 1. **`i == (int)((double)i)`：总是 `true`。** 32 位 int 最多需要 32 位有效精度，double 有 53 位有效精度，因此 int 转 double 时不丢失精度，再转回 int 仍为原值。
>
> 2. **`f == (float)((int)f)`：不总是 `true`。** float 可含小数部分，转 int 时小数部分被截断，再转回 float 可能已与原值不同。
>
> 3. **`f == (float)((double)f)`：总是 `true`。** double 能精确容纳 float 的有效位和指数范围，扩展后再转回不丢失原 float 值。
>
> 4. **`d == (double)((float)d)`：不总是 `true`。** double 转 float 可能因有效位较少而舍入，也可能因 float 取值范围较小而改变值。
>
> **解析：** 判断往返类型转换是否保值，关键是中间类型能否精确容纳原类型的值。向精度和范围更大的类型扩展通常保值，向更小的类型收窄则可能截断、舍入或溢出。结论按原书对普通有限数值的讨论。

## 关联

- 知识点：
- 题型：
