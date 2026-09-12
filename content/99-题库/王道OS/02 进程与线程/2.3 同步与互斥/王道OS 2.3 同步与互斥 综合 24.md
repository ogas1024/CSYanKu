---
source: 王道OS
subject: OS
chapter: 02 进程与线程
section: 2.3 同步与互斥
qtype: 综合
topic: []
answer_status: 已录入
tags: []
---
## 题干

现有 5 个操作 A、B、C、D 和 E，操作 C 必须在 A 和 B 完成后执行，操作 E 必须在 C 和 D 完成后执行，请使用信号量的 wait()、signal()操作 (P、V 操作) 描述上述操作之间的同步关系，并说明所用信号量及其初值。

> [!note]- 原题截图
> ![[王道OS 2.3 同步与互斥 综合 24.png]]

> [!success]- 答案与解析
> **答案：**
>
> 前驱关系为 $A\to C$、$B\to C$、$C\to E$、$D\to E$。设 `SAC=SBC=SCE=SDE=0`。A完成后V(SAC)，B完成后V(SBC)；C先P(SAC),P(SBC)，完成后V(SCE)；D完成后V(SDE)；E先P(SCE),P(SDE)后执行。
>
> **解析：** C有A、B两个前驱，E有C、D两个前驱，因此后继必须分别等待所有入边信号。

## 关联

- 知识点：
- 题型：
