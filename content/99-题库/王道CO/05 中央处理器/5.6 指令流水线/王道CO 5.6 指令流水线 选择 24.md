---
source: 王道CO
subject: CO
chapter: 05 中央处理器
section: 5.6 指令流水线
qtype: 选择
topic: []
answer: B
answer_status: 已录入
tags: []
---
## 题干

24. 【P263】【2016 统考真题】在无转发机制的五段基本流水线（取指、译码/读寄存器、运算、访存、写回寄存器）中，下列指令序列存在数据冒险的指令对是（）

```text
I1: add R1,R2,R3  # (R2)+(R3)→R1
I2: add R5,R2,R4  # (R2)+(R4)→R5
I3: add R4,R5,R3  # (R5)+(R3)→R4
I4: add R5,R2,R6  # (R2)+(R6)→R5
```

A. I1 和 I2

B. I2 和 I3

C. I2 和 I4

D. I3 和 I4

> [!note]- 原题截图
> ![[王道CO 5.6 指令流水线 选择 24.webp]]

> [!success]- 答案与解析
> **答案：** B
>
> **解析：** 前条后写、后条先读造成 RAW 数据冲突，后者必须等待前者写回。

## 关联

- 知识点：
- 题型：
