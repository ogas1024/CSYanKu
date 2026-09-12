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

【答案 P224】3. 设有如下图所示的单总线结构，分析指令 ADD (R0)，R1 的指令流程和控制信号.

![[王道CO 5.3 数据通路的功能和基本结构 综合 03-fig1.jpg]]

> [!note]- 原题截图
> ![[王道CO 5.3 数据通路的功能和基本结构 综合 03.png]]

> [!success]- 答案与解析
> **答案：**
>
> 指令功能为 M[(R0)]+(R1)→M[(R0)]。
>
> **取指**：(PC)→MAR（PCout,MARin）；M(MAR)→MDR（MemR,MARout,MDRinE）；(MDR)→IR（MDRout,IRin）；译码；(PC)+1→PC（PC+1）。
>
> **取操作数**：(R0)→MAR（R0out,MARin）；M(MAR)→MDR（MemR,MARout,MDRinE）；(MDR)→Y（MDRout,Yin）。
>
> **执行**：(R1)+(Y)→Z（R1out,ADD,Zin）；(Z)→MDR（Zout,MDRin）；(MDR)→M(MAR)（MDRoutE,MARout,MemW）。
>
> **解析：** R0 给出主存地址，MAR 在写回前仍保存该地址。主存数先进入 Y，与 R1 相加后由 Z、MDR 写回原主存单元。

## 关联

- 知识点：
- 题型：
