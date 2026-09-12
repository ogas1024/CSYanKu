---
source: 王道CO
subject: CO
chapter: 05 中央处理器
section: 5.4 控制器的功能和工作原理
qtype: 选择
topic: []
answer: B
answer_status: 已录入
tags: []
---
## 题干

25. 【P240】【2019 统考真题】某指令功能为 $R[r2] \leftarrow R[r1] + M[R[r0]]$，其两个源操作数分别采用寄存器、寄存器间接寻址方式。

对于下列给定部件，该指令在取数及执行过程中需要用到的是（）

I. 通用寄存器组（GPRs）

II. 算术逻辑单元（ALU）

III. 存储器（Memory）

IV. 指令译码器（ID）

A. 仅 I、II

B. 仅 I、II、III

C. 仅 II、III、IV

D. 仅 I、III、IV

> [!note]- 原题截图
> ![[王道CO 5.4 控制器的功能和工作原理 选择 25.png]]

> [!success]- 答案与解析
> **答案：** B
>
> **解析：** 取数需通用寄存器组和存储器，执行加法需 ALU；指令译码器不参与取数与执行阶段的数据运算。

## 关联

- 知识点：
- 题型：
