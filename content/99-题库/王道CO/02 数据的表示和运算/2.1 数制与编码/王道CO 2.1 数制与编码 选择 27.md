---
source: 王道CO
subject: CO
chapter: 02 数据的表示和运算
section: 2.1 数制与编码
qtype: 选择
topic: []
answer: B
answer_status: 已录入
tags: []
---
## 题干

27. 【P31】【2012 统考真题】假定编译器规定 int 型和 short 型长度分别为 32 位和 16 位，执行下列 C 语言语句：

```c
unsigned short x = 65530;
unsigned int y = x;
```

得到 $y$ 的机器数为（）

A. 0000 7FFAH

B. 0000 FFFAH

C. FFFF 7FFAH

D. FFFF FFFAH

> [!note]- 原题截图
> ![[王道CO 2.1 数制与编码 选择 27.webp]]

> [!success]- 答案与解析
> **答案：** B
>
> **解析：** 65530 的 16 位无符号表示为 FFFAH。转换为 32 位无符号整数时采用零扩展，高 16 位补 0，得到 0000FFFAH。

## 关联

- 知识点：
- 题型：
