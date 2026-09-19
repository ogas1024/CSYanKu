---
source: 王道CO
subject: CO
chapter: 02 数据的表示和运算
section: 2.3 浮点数的表示与运算
qtype: 选择
topic: []
answer: D
answer_status: 已录入
tags: []
---
## 题干

37. 【P71】【2020 统考真题】在按字节编址、采用小端方式的 32 位计算机中，按边界对齐方式为以下 C 语言结构型变量 `a` 分配存储空间：

```c
struct record {
    short x1;
    int x2;
} a;
```

若 `a` 的首地址为 `2020 FE00H`，`a` 的成员变量 `x2` 的机器数为 `1234 0000H`，则其中 `34H` 所在存储单元的地址是（）

A. 2020 FE03H

B. 2020 FE04H

C. 2020 FE05H

D. 2020 FE06H

> [!note]- 原题截图
> ![[王道CO 2.3 浮点数的表示与运算 选择 37.webp]]

> [!success]- 答案与解析
> **答案：** D
>
> **解析：** short x1 占地址 FE00H–FE01H，x2 需 4 字节对齐，从 FE04H 开始。12340000H 小端存为 00 00 34 12，因此 34H 在 FE06H。

## 关联

- 知识点：
- 题型：
