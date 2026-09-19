---
source: 王道CO
subject: CO
chapter: 07 输入输出系统
section: 7.3 I／O方式
qtype: 选择
topic: []
answer: D
answer_status: 已录入
tags: []
---
## 题干

35. 【P320】【2011 统考真题】某计算机有五级中断 $L_{4}\sim L_{0}$，中断屏蔽字为 $M_{4}M_{3}M_{2}M_{1}M_{0}$， $M_{i}=1(0\leq i\leq4)$表示对 $L_{i}$级中断进行屏蔽。

若中断响应优先级从高到低的顺序是 $L_{0}\rightarrow L_{1}\rightarrow L_{2}\rightarrow L_{3}\rightarrow L_{4}$，且要求中断处理优先级从高到低的顺序为 $L_{4}\rightarrow L_{0}\rightarrow L_{2}\rightarrow L_{1}\rightarrow L_{3}$，则 $L_{1}$的中断处理程序中设置的中断屏蔽字是（）

A. 11110

B. 01101

C. 00011

D. 01010

> [!note]- 原题截图
> ![[王道CO 7.3 I／O方式 选择 35.webp]]

> [!success]- 答案与解析
> **答案：** D
>
> **解析：** 响应优先级固定，处理优先级可由屏蔽字调整；据题设 L1 屏蔽自身和 L3，屏蔽字为01010。

## 关联

- 知识点：
- 题型：
