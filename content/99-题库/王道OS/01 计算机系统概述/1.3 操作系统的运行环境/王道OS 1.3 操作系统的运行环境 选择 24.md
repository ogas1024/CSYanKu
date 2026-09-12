---
source: 王道OS
subject: OS
chapter: 01 计算机系统概述
section: 1.3 操作系统的运行环境
qtype: 选择
topic: []
answer: C
answer_status: 已录入
tags: []
---
## 题干

24. 【P25】【2017 统考真题】执行系统调用的过程包括如下主要操作，正确的执行顺序是（ ）。

①返回用户态；

②执行陷入（trap）指令；

③传递系统调用参数；

④执行相应的服务程序。

A. ②$\rightarrow$③$\rightarrow$①$\rightarrow$④

B. ②$\rightarrow$④$\rightarrow$③$\rightarrow$①

C. ③$\rightarrow$②$\rightarrow$④$\rightarrow$①

D. ③$\rightarrow$④$\rightarrow$②$\rightarrow$①

> [!note]- 原题截图
> ![[王道OS 1.3 操作系统的运行环境 选择 24.png]]

> [!success]- 答案与解析
> **答案：** C
>
> **解析：** 系统调用先传递参数，再由 Trap 指令把 CPU 从用户态切到内核态并保存返回地址，随后执行内核服务例程，最后返回用户态。

## 关联

- 知识点：
- 题型：
