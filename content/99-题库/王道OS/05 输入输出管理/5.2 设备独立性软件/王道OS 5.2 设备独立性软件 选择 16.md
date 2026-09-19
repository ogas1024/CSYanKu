---
source: 王道OS
subject: OS
chapter: 05 输入输出管理
section: 5.2 设备独立性软件
qtype: 选择
topic: []
answer: A
answer_status: 已录入
tags: []
---
## 题干

16. 【P335】设备分配程序需要访问一系列的数据结构来给进程分配设备，这些数据结构有：设备控制表（DCT），控制器控制表（COCT），通道控制表（CHCT），系统设备表（SDT）。

在设备分配的过程中，访问这些数据结构的正确顺序是（）

A. SDT,DCT,COCT,CHCT

B. DCT,COCT,CHCT,SDT

C. SDT,COCT,CHCT,DCT

D. COCT,CHCT,SDT,DCT

> [!note]- 原题截图
> ![[王道OS 5.2 设备独立性软件 选择 16.webp]]

> [!success]- 答案与解析
> **答案：** A
>
> **解析：** 设备分配通常依次访问系统设备表、设备控制表、控制器控制表和通道控制表。

## 关联

- 知识点：
- 题型：
