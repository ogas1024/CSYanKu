---
source: 王道OS
subject: OS
chapter: 05 输入输出管理
section: 5.1 I／O管理概述
qtype: 选择
topic: []
answer: C
answer_status: 已录入
tags: []
---
## 题干

20. 【P319】下列几种 I/O 方式中,会导致用户进程进入阻塞态的是（）

I. 程序直接控制

II. 中断方式

III. DMA 方式

A. Ⅱ

B. Ⅰ、Ⅲ

C. Ⅱ、Ⅲ

D. Ⅰ、Ⅱ、Ⅲ

> [!note]- 原题截图
> ![[王道OS 5.1 I／O管理概述 选择 20.png]]

> [!success]- 答案与解析
> **答案：** C
>
> **解析：** 程序直接控制时CPU与I/O串行；中断方式下CPU与设备准备并行；DMA传输时CPU可调度其他进程并与数据传送并行。

## 关联

- 知识点：
- 题型：
