---
source: 王道CO
subject: CO
chapter: 07 输入输出系统
section: 7.3 I／O方式
qtype: 选择
topic: []
answer: C
answer_status: 已录入
tags: []
---
## 题干

3. 【P317】关于程序中断方式和 DMA 方式的叙述，错误的是（）

I. DMA 的优先级比程序中断的优先级要高

II. 程序中断方式需要保存现场，DMA方式在传输过程中不需要保存现场

III. 程序中断方式的中断请求是为了报告 CPU 数据的传输结束，而 DMA 方式的中断请求完全是为了传送数据

A. 仅 II

B. Ⅱ、Ⅲ

C. 仅 III

D. Ⅰ、Ⅲ

> [!note]- 原题截图
> ![[王道CO 7.3 I／O方式 选择 03.webp]]

> [!success]- 答案与解析
> **答案：** C
>
> **解析：** DMA 总线优先级通常高于普通中断；DMA 传输不使用 CPU 寄存器，无需保存 CPU 现场。

## 关联

- 知识点：
- 题型：
