---
source: 王道OS
subject: OS
chapter: 02 进程与线程
section: 2.2 CPU调度
qtype: 选择
topic: []
answer: B
answer_status: 已录入
tags: []
---
## 题干

40. 【P91】【2012 统考真题】一个多道批处理系统中仅有 $P_1$ 和 $P_2$ 两个作业，$P_2$ 比 $P_1$ 晚 5 ms 到达，它的计算和 I/O 操作顺序如下：

$P_1$：计算 60 ms，I/O 80 ms，计算 20 ms

$P_2$：计算 120 ms，I/O 40 ms，计算 40 ms

若不考虑调度和切换时间，则完成两个作业需要的时间最少是（ ）

A. 240 ms

B. 260 ms

C. 340 ms

D. 360 ms

> [!note]- 原题截图
> ![[王道OS 2.2 CPU调度 选择 40.webp]]

> [!success]- 答案与解析
> **答案：** B
>
> **解析：** 按 P1 先到且 CPU/I/O 可重叠画甘特图，系统完成时间为 260ms，对应选项 B。

## 关联

- 知识点：
- 题型：
