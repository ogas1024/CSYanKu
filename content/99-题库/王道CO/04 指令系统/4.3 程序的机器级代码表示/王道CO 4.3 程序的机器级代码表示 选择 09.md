---
source: 王道CO
subject: CO
chapter: 04 指令系统
section: 4.3 程序的机器级代码表示
qtype: 选择
topic: []
answer: D
answer_status: 已录入
tags: []
---
## 题干

9. 【P188】下列关于选择结构语句“if（comp_A）then statement_B; else statement_C”对应的机器级代码表示的叙述中，错误的是（）

A. 一定包含一条无条件转移指令

B. 一定包含一条条件转移指令（分支指令）

C. 计算 comp_A 的代码段一定在条件转移指令之前

D. 对应 statement_B 的代码一定在对应 statement_C 的代码之前

> [!note]- 原题截图
> ![[王道CO 4.3 程序的机器级代码表示 选择 09.webp]]

> [!success]- 答案与解析
> **答案：** D
>
> **解析：** if-else 代码先计算 comp_A，随后条件转移到一个分支，并用无条件转移越过另一分支；B 与 C 两段在机器码中的先后可随分支方向安排，不固定。

## 关联

- 知识点：
- 题型：
