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

23. 【P68】在按字节编址的 32 位计算机中，按边界对齐方式为以下结构型变量 `x` 分配存储空间：

```c
struct cont_info {
    char id;
    unsigned post;
    char phone;
} x;
```

若 `x` 的首地址为 `0x8049820`，则成员变量 `phone` 的起始地址为（）

A. 0x8049828

B. 0x8049826

C. 0x8049825

D. 0x8049822

> [!note]- 原题截图
> ![[王道CO 2.3 浮点数的表示与运算 选择 23.png]]

> [!success]- 答案与解析
> **答案：** A
>
> **解析：** id 从 0x8049820 开始，post 需对齐到 4 字节边界 0x8049824，占 4 字节，因此 phone 从 0x8049828 开始。

## 关联

- 知识点：
- 题型：
