---
source: 王道OS
subject: OS
chapter: 01 计算机系统概述
section: 1.6 虚拟机
qtype: 选择
topic: []
answer: A
answer_status: 已录入
tags: []
---
## 题干

15. 【P34】检查分区表是否正确，确定哪个分区为活动分区，并在程序结束时将该分区的启动程序（操作系统引导扇区）调入内存加以执行，这是（ ）的任务。

A. MBR

B. 引导程序

C. 操作系统

D. BIOS

> [!note]- 原题截图
> ![[王道OS 1.6 虚拟机 选择 15.webp]]

> [!success]- 答案与解析
> **答案：** A
>
> **解析：** BIOS 选择启动设备并加载其 MBR，随后 MBR 查找活动分区并把该分区的 PBR 加载到内存执行。

## 关联

- 知识点：
- 题型：
