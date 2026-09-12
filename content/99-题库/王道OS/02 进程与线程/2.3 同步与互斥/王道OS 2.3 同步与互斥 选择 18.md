---
source: 王道OS
subject: OS
chapter: 02 进程与线程
section: 2.3 同步与互斥
qtype: 选择
topic: []
answer: D
answer_status: 已录入
tags: []
---
## 题干

18. 【P128】用 P,Ⅴ 操作实现进程同步，信号量的初值为（ ）

A. -1

B. 0

C. 1

D. 由用户确定

> [!note]- 原题截图
> ![[王道OS 2.3 同步与互斥 选择 18.png]]

> [!success]- 答案与解析
> **答案：** D
>
> **解析：** 同步信号量初值由事件初始状态决定：消息未产生取0，已有消息则可取正整数，并不固定为1。

## 关联

- 知识点：
- 题型：
