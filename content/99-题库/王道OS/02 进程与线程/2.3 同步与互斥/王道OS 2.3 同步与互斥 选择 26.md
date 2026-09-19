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

26. 【P129】一个进程因在互斥信号量 mutex 上执行 V（mutex）操作而导致唤醒另一个进程时，执行 Ⅴ 操作后 mutex 的值为（ ）

A. 大于 0

B. 小于 0

C. 大于等于 0

D. 小于等于 0

> [!note]- 原题截图
> ![[王道OS 2.3 同步与互斥 选择 26.webp]]

> [!success]- 答案与解析
> **答案：** D
>
> **解析：** 原先已有进程等待进入临界区，故 V 前 $mutex\le -1$，执行 V 后仍有 $mutex\le 0$。

## 关联

- 知识点：
- 题型：
