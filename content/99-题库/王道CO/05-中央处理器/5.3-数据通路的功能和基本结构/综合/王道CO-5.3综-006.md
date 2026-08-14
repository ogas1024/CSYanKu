---
tags: [题目/综合, 王道CO, CO/05-中央处理器/03-数据通路的功能和基本结构]
---
## 题干

【答案 P225】6. 已知单总线计算机结构如下图所示，其中M为主存，XR为变址寄存器，EAR为有效地址寄存器，LATCH为暂存器。

假设指令地址已存在于PC中，请给出ADDX，D指令周期信息流程和相应的控制信号。

说明：

- **（1）** ADDX, D 指令字中，X 为变址寄存器 XR, D 为形式地址。

- **（2）** 寄存器的输入/输出均采用控制信号控制，如  $PC_i$ 表示 PC 的输入控制信号， $MDR_o$ 表示 MDR 的输出控制信号。

- **（3）** 凡需要经过总线的传送,都需要注明,如(PC)→MAR, 相应的控制信号为  $PC_o$ 和  $MAR_i$

![[王道CO-5.3综-006-fig1.jpg]]

> [!note]- 原题截图
> ![[王道CO-5.3综-006.png]]

> [!success]- 答案与解析
> **答案：**
>
> | 阶段 | 微操作 | 控制信号 |
> | --- | --- | --- |
> | 取指 | (PC)→MAR | PC_o, MAR_i |
> | 取指 | M(MAR)→MDR；(PC)+1→PC | MAR_o, R/W, MDR_i；+1 |
> | 取指 | (MDR)→IR | MDR_o, IR_i |
> | 执行 | (XR)+Ad(IR)→EAR | XR_o, IR_o, +, EAR_i |
> | 执行 | (EAR)→MAR | EAR_o, MAR_i |
> | 执行 | M(MAR)→MDR | MAR_o, R/W, MDR_i |
> | 执行 | (MDR)→X | MDR_o, X_i |
> | 执行 | (ACC)+(X)→LATCH | ACC_o, X_o, K_i=+, LATCH_i |
> | 执行 | (LATCH)→ACC | LATCH_o, ACC_i |
>
> **解析：** 先把 XR 与形式地址相加得到有效地址 EAR，再访问主存。运算结果先锁存在 LATCH，下一拍写回 ACC。

## 关联

- 知识点：
- 题型：
