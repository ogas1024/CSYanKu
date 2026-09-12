---
source: 王道CO
subject: CO
chapter: 05 中央处理器
section: 5.6 指令流水线
qtype: 选择
topic: []
answer: C
answer_status: 已录入
tags: []
---
## 题干

28. 【P263】【2019 统考真题】在采用“取指、译码/取数、执行、访存、写回”5 段流水线的处理器中，执行如下指令序列，其中 s0、s1、s2、s3 和 t2 表示寄存器编号。

下列指令对中，不存在数据冒险的是（）

```text
I1: add   s2,s1,s0  // R[s2]←R[s1]+R[s0]
I2: load  s3,0(t2)  // R[s3]←M[R[t2]+0]
I3: add   s2,s2,s3  // R[s2]←R[s2]+R[s3]
I4: store s2,0(t2)  // M[R[t2]+0]←R[s2]
```

A. I1 和 I3

B. I2 和 I3

C. I2 和 I4

D. I3 和 I4

> [!note]- 原题截图
> ![[王道CO 5.6 指令流水线 选择 28.png]]

> [!success]- 答案与解析
> **答案：** C
>
> **解析：** 指令间存在多处 RAW，按无转发且读须在前条写回后进行的时序，只有 load 与 store 之间无数据冒险。

## 关联

- 知识点：
- 题型：
