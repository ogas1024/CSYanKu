---
source: 王道OS
subject: OS
chapter: 02 进程与线程
section: 2.3 同步与互斥
qtype: 选择
topic: []
answer: B
answer_status: 已录入
tags: []
---
## 题干

24. 【P129】对于两个并发进程，设互斥信号量为  $\text{mutex}$（初值为1），若  $\text{mutex}=0$，则表示（ ）

A. 没有进程进入临界区

B. 有一个进程进入临界区

C. 有一个进程进入临界区，另一个进程等待进入

D. 有一个进程在等待进入

> [!note]- 原题截图
> ![[王道OS 2.3 同步与互斥 选择 24.png]]

> [!success]- 答案与解析
> **答案：** B
>
> **解析：** mutex初值1；mutex=0说明恰有一个进程已进入临界区且无人等待，mutex=-1才表示另有一进程等待。

## 关联

- 知识点：
- 题型：
