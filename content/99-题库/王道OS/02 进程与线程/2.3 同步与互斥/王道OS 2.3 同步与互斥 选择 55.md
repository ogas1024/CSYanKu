---
source: 王道OS
subject: OS
chapter: 02 进程与线程
section: 2.3 同步与互斥
qtype: 选择
topic: []
answer: C
answer_status: 已录入
tags: []
---
## 题干

55. 【P132】【2018统考真题】在下列同步机制中，可以实现让权等待的是（ ）

A. Peterson 方法

B. swap 指令

C. 信号量方法

D. TestAndSet 指令

> [!note]- 原题截图
> ![[王道OS 2.3 同步与互斥 选择 55.png]]

> [!success]- 答案与解析
> **答案：** C
>
> **解析：** 硬件法不能让权等待，Peterson有限等待但仍忙等；记录型信号量引入阻塞，消除了不让权等待。

## 关联

- 知识点：
- 题型：
