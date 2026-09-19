---
source: 王道CO
subject: CO
chapter: 03 存储系统
section: 3.3 主存储器与CPU的连接
qtype: 选择
topic: []
answer: C
answer_status: 已录入
tags: []
---
## 题干

15. 【P102】【2023 统考真题】某计算机的 CPU 有 30 根地址线，按字节编址，CPU 和主存连接时，要求主存芯片占满所有可能的存储地址空间，并且 RAM 区和 ROM 区所分配的空间大小比是 3:1。

若 RAM 在低地址区，ROM 在高地址区，则 ROM 的地址范围是（）

A. $0000\ 0000H$ ~  $0FFF\ FFFFH$

B. $1000\ 0000H$ ~  $2FFF\ FFFFH$

C. $3000\ 0000H$ ~  $3FFF\ FFFFH$

D. $4000\ 0000H$ ~  $4FFF\ FFFFH$

> [!note]- 原题截图
> ![[王道CO 3.3 主存储器与CPU的连接 选择 15.webp]]

> [!success]- 答案与解析
> **答案：** C
>
> **解析：** 30 根地址线对应 00000000H–3FFFFFFFH。ROM 占总空间的 1/4，且位于高地址区，因此范围为 30000000H–3FFFFFFFH。

## 关联

- 知识点：
- 题型：
