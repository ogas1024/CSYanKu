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

31. 【P169】【2019 统考真题】某计算机采用大端方式，按字节编址。

某指令中操作数的机器数为1234FF00H，该操作数采用基址寻址方式，形式地址（用补码表示）为 FF12H，基址寄存器的内容为 F0000000H，则该操作数的 LSB（最低有效字节）所在的地址是（）

A. F000 FF12H

B. F000 FF15H

C. EFFF FF12H

D. EFFF FF15H

> [!note]- 原题截图
> ![[王道CO 4.2 指令的寻址方式 选择 31.webp]]

> [!success]- 答案与解析
> **答案：** D
>
> **解析：** FF12H 符号扩展为 -00EEH，与基址 F0000000H 相加得 EFFFFF12H。大端 4 字节数据的最低有效字节位于最高地址 EFFFFF15H。

## 关联

- 知识点：
- 题型：
