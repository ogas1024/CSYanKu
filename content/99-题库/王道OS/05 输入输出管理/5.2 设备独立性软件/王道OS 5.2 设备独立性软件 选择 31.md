---
source: 王道OS
subject: OS
chapter: 05 输入输出管理
section: 5.2 设备独立性软件
qtype: 选择
topic: []
answer: C
answer_status: 已录入
tags: []
---
## 题干

31. 【P337】下列设备管理工作中,适合由设备独立性软件来完成的有（）

I. 向设备寄存器写命令

II. 检查用户是否有权使用设备

III. 将二进制整数转换成 ASCII 码格式打印

IV. 缓冲区管理

A. I、II 和 III

B. II、III 和 IV

C. II 和 IV

D. I、III 和 IV

> [!note]- 原题截图
> ![[王道OS 5.2 设备独立性软件 选择 31.png]]

> [!success]- 答案与解析
> **答案：** C
>
> **解析：** 写设备寄存器由驱动程序完成；权限检查和缓冲管理在设备独立层，格式转换在用户层。

## 关联

- 知识点：
- 题型：
