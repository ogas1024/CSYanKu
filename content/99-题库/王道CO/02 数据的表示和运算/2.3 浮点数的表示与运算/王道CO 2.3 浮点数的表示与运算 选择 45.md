---
source: 王道CO
subject: CO
chapter: 02 数据的表示和运算
section: 2.3 浮点数的表示与运算
qtype: 选择
topic: []
answer: C
answer_status: 已录入
tags: []
---
## 题干

45. 【P72】【2025 统考真题】某 32 位计算机按字节编址，采用小端方式存放数据，编译器按边界对齐方式为下列 C 语言结构型数组变量 `employee` 分配存储空间。

```c
struct record {
    int id;
    char name[10];
    int salary;
} employee[200];
```

若 `employee` 的首地址为 `0000 A0B0H`，`employee[1].id` 的机器数为 `12345678H`，则该机器数中的 `56H` 所在存储单元的地址是（）

A. 0000 A0C3H

B. 0000 A0C4H

C. 0000 A0C5H

D. 0000 A0C6H

> [!note]- 原题截图
> ![[王道CO 2.3 浮点数的表示与运算 选择 45.png]]

> [!success]- 答案与解析
> **答案：** C
>
> **解析：** record 的内存布局为 4+10+2 字节填充+4=20 字节，employee[1].id 从 A0C4H 开始。12345678H 小端存为 78 56 34 12，因此 56H 在 A0C5H。

## 关联

- 知识点：
- 题型：
