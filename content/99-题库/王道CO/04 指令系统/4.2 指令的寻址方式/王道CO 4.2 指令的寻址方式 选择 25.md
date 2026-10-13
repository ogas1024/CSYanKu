---
source: 王道CO
subject: CO
chapter: 04 指令系统
section: 4.2 指令的寻址方式
qtype: 选择
topic: []
answer: C
answer_status: 已录入
tags: []
---
## 题干

25. 【P168】【2011 统考真题】某机器有一个标志寄存器，其中有进位/借位标志 CF、零标志 ZF、符号标志 SF 和溢出标志 OF，条件转移指令 bgt（无符号整数比较大于时转移）的转移条件是（）

A. $\mathrm{CF}+\mathrm{OF}=1$

B. $\overline{\mathrm{SF}}+\mathrm{OF}=1$

C. $\overline{\mathrm{CF}+\mathrm{ZF}}=1$

D. $\overline{\mathrm{CF}+\mathrm{SF}}=1$

> [!note]- 原题截图
> ![[王道CO 4.2 指令的寻址方式 选择 25.webp]]

> [!success]- 答案与解析
> **答案：** C
>
> **解析：** bgt 对两个无符号数做 $A-B$ 后看标志位。$A>B$ 时减法不产生借位，CF $=0$；结果非零，ZF $=0$。两者同时为 0 等价于 $\overline{\mathrm{CF}+\mathrm{ZF}}=1$（选项中的「+」是逻辑或），选 C。SF、OF 只对有符号数有意义，A、B、D 都用到了它们，可直接排除。

## 关联

- 知识点：
- 题型：
- 真题：[[408真题 2011 T17]]
