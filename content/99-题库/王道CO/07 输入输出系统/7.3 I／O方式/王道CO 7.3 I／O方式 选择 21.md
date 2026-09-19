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

21. 【P319】在 DMA 传送方式中，由（）发出 DMA 请求，在传送期间总线控制权由（）掌握。

A. 外部设备、CPU

B. DMA 控制器、DMA 控制器

C. 外部设备、DMA 控制器

D. DMA 控制器、内存

> [!note]- 原题截图
> ![[王道CO 7.3 I／O方式 选择 21.webp]]

> [!success]- 答案与解析
> **答案：** C
>
> **解析：** 设备先向 DMA 控制器请求，后者再向 CPU 请求总线；DMA 占总线时 CPU 不能响应 I/O 中断。

## 关联

- 知识点：
- 题型：
