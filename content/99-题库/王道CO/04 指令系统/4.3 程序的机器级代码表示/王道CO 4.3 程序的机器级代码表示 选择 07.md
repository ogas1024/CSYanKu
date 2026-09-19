---
source: 王道CO
subject: CO
chapter: 04 指令系统
section: 4.3 程序的机器级代码表示
qtype: 选择
topic: []
answer: C
answer_status: 已录入
tags: []
---
## 题干

7. 【P187】假定全局数组 a 的声明为 `double a[8]`，a 的首地址为 80498c0H，变量 i 被分配在寄存器 ecx 中，现要将 a[i] 取到 eax 相应宽度的寄存器中，则所用的汇编指令是（）

A. `mov eax,[ecx*4+80498c0H]`

B. `mov eax,ecx*4+80498c0H`

C. `mov eax,[ecx*8+80498c0H]`

D. `mov eax,ecx*8+80498c0H`

> [!note]- 原题截图
> ![[王道CO 4.3 程序的机器级代码表示 选择 07.webp]]

> [!success]- 答案与解析
> **答案：** C
>
> **解析：** double 元素占 8 字节，a[i] 地址为 80498C0H+ecx*8；方括号表示访问该内存地址，故为 mov eax,[ecx*8+80498c0H]。

## 关联

- 知识点：
- 题型：
