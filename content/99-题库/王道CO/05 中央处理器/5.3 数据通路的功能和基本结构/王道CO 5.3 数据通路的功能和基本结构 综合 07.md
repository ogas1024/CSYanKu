---
source: 王道CO
subject: CO
chapter: 05 中央处理器
section: 5.3 数据通路的功能和基本结构
qtype: 综合
topic: []
answer_status: 已录入
tags: []
---
## 题干

【答案 P226】7. 【2009 统考真题】某计算机字长 16 位,采用 16 位定长指令字结构,部分数据通路结构如下图所示。

图中所有控制信号为 1 时表示有效,为 0 时表示无效。

例如,控制信号 MDRinE 为 1 表示允许数据从 DB 打入 MDR,MDRin 为 1 表示允许数据从总线打入 MDR。

假设 MAR 的输出一直处于使能状态。

加法指令 “ADD(R1),R0” 的功能为(R0)+((R1))→(R1),即将 R0 中的数据与 R1 的内容所指主存单元的数据相加,并将结果送入 R1 的内容所指主存单元中保存。

![[王道CO 5.3 数据通路的功能和基本结构 综合 07-fig1.jpg]]

下表给出了上述指令取指和译码阶段每个节拍(时钟周期)的功能和有效控制信号，请按表中描述方式用表格列出指令执行阶段每个节拍的功能和有效控制信号。

| 时钟 | 功能 | 有效控制信号 |
| --- | --- | --- |
| C1 | $MAR\leftarrow(PC)$ | PCout，MARin |
| C2 | $MDR\leftarrow M(MAR)$<br>$PC\leftarrow(PC)+1$ | MemR，MDRinE，PC+1 |
| C3 | $IR\leftarrow(MDR)$ | MDRout，IRin |
| C4 | 指令译码 | 无 |

> [!note]- 原题截图
> ![[王道CO 5.3 数据通路的功能和基本结构 综合 07.png]]

> [!success]- 答案与解析
> **答案：**
>
> | 时钟 | 功能 | 有效控制信号 |
> | --- | --- | --- |
> | C5 | MAR←(R1) | R1out, MARin |
> | C6 | MDR←M(MAR) | MemR, MDRinE |
> | C7 | A←(MDR) | MDRout, Ain |
> | C8 | AC←(A)+(R0) | R0out, ADD, ACin |
> | C9 | MDR←(AC) | ACout, MDRin |
> | C10 | M(MAR)←(MDR) | MDRoutE, MemW |
>
> 也可把执行阶段压缩为 5 拍：C5 MAR←R1；C6 同时 MDR←M(MAR)、A←R0；C7 AC←MDR+A；C8 MDR←AC；C9 写主存。
>
> **解析：** R1 先作为地址送 MAR，R0 与读出的主存数相加后写回同址。DB 与内部总线独立，故主存读与 R0→A 可以并行。

## 关联

- 知识点：
- 题型：
