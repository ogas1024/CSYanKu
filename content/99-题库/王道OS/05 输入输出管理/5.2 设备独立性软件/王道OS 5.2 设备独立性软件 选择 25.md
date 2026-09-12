---
source: 王道OS
subject: OS
chapter: 05 输入输出管理
section: 5.2 设备独立性软件
qtype: 选择
topic: []
answer: D
answer_status: 已录入
tags: []
---
## 题干

25. 【P336】下面关于 SPOOLing 系统的说法中，正确的是（）

A. 构成 SPOOLing 系统的基本条件是有外围输入机与外围输出机

B. 构成 SPOOLing 系统的基本条件仅是高速的大容量硬盘作为输入井和输出井

C. 当输入设备忙时，SPOOLing 系统中的用户程序暂停执行，待 I/O 空闲时再被唤醒执行输出操作

D. SPOOLing 系统中的用户程序可以随时将输出数据送到输出井中，待输出设备空闲时再由 SPOOLing 系统完成数据的输出操作

> [!note]- 原题截图
> ![[王道OS 5.2 设备独立性软件 选择 25.png]]

> [!success]- 答案与解析
> **答案：** D
>
> **解析：** SPOOLing既需高速大容量外存又需相关软件，并能提高系统与I/O设备利用率，使进程不必等待I/O完成。

## 关联

- 知识点：
- 题型：
