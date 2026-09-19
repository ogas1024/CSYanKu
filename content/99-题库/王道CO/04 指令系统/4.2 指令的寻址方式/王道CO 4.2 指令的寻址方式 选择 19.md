---
source: 王道CO
subject: CO
chapter: 04 指令系统
section: 4.2 指令的寻址方式
qtype: 选择
topic: []
answer: D
answer_status: 已录入
tags: []
---
## 题干

19. 【P168】某计算机按字节编址，采用大端方式，某指令的一个操作数的机器数为 ABCD 00FFH，该操作数采用基址寻址方式，指令中形式地址（用补码表示）为 FF00H，当前基址寄存器的内容为 C0000000H，则该操作数的 LSB（即 FFH）存放的地址是（）

A. C000 FF00H

B. C000 FF03H

C. BFFF FF00H

D. BFFF FF03H

> [!note]- 原题截图
> ![[王道CO 4.2 指令的寻址方式 选择 19.webp]]

> [!success]- 答案与解析
> **答案：** D
>
> **解析：** FF00H 符号扩展为 FFFFFF00H，与基址 C0000000H 相加得 BFFFFF00H。机器数为 4 字节且采用大端，LSB 位于最高地址 BFFFFF03H。

## 关联

- 知识点：
- 题型：
