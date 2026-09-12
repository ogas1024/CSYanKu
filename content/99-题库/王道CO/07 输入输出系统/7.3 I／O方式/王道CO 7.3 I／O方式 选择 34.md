---
source: 王道CO
subject: CO
chapter: 07 输入输出系统
section: 7.3 I／O方式
qtype: 选择
topic: []
answer: A
answer_status: 已录入
tags: []
---
## 题干

34. 【P320】【2010 统考真题】单级中断系统中，中断服务程序内的执行顺序是（）

I. 保护现场

II. 开中断

III. 关中断

IV. 保存断点

V. 中断事件处理

VI. 恢复现场

VII. 中断返回

A. I  $\rightarrow$ V  $\rightarrow$ VI  $\rightarrow$ II  $\rightarrow$ VII

B. III  $\rightarrow$ I  $\rightarrow$ V  $\rightarrow$ VII

C. III  $\rightarrow$ IV  $\rightarrow$ V  $\rightarrow$ VI  $\rightarrow$ VII

D. IV  $\rightarrow$ I  $\rightarrow$ V  $\rightarrow$ VI  $\rightarrow$ VII

> [!note]- 原题截图
> ![[王道CO 7.3 I／O方式 选择 34.png]]

> [!success]- 答案与解析
> **答案：** A
>
> **解析：** 单级中断顺序为关中断、保存断点、识别中断源、保存现场、处理、恢复、开中断、返回。

## 关联

- 知识点：
- 题型：
