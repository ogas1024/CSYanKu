---
source: 王道CO
subject: CO
chapter: 02 数据的表示和运算
section: 2.1 数制与编码
qtype: 选择
topic: []
answer: D
answer_status: 已录入
tags: []
---
## 题干

34. 【P32】【2025 统考真题】在 32 位计算机上执行下列 C 语言代码段后，`ui` 的值是（）

```c
short si = -32767;
unsigned int ui = si;
```

A. 2^{15} - 1

B. 2^{15} + 1

C. 2^{32} - 2^{15} - 1

D. 2^{32} - 2^{15} + 1

> [!note]- 原题截图
> ![[王道CO 2.1 数制与编码 选择 34.png]]

> [!success]- 答案与解析
> **答案：** D
>
> **解析：** -32767 先从 16 位 short 符号扩展为 32 位有符号补码 FFFF8001，再按 unsigned int 解释，值为 $2^{32}-32767=2^{32}-2^{15}+1$。

## 关联

- 知识点：
- 题型：
