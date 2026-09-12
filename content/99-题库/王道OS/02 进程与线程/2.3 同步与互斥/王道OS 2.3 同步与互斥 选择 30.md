---
source: 王道OS
subject: OS
chapter: 02 进程与线程
section: 2.3 同步与互斥
qtype: 选择
topic: []
answer: A
answer_status: 已录入
tags: []
---
## 题干

30. 【P129】对信号量 S 执行 P 操作后，使该进程进入资源等待队列的条件是（ ）

A. S.value<0

B. S.value<=0

C. S.value>0

D. S.value>=0

> [!note]- 原题截图
> ![[王道OS 2.3 同步与互斥 选择 30.png]]

> [!success]- 答案与解析
> **答案：** A
>
> **解析：** 记录型信号量 $S>0$ 表示可用资源数；$S\le 0$ 表示无资源且有等待者，绝对值为等待进程数，须区分 P 操作前后。

## 关联

- 知识点：
- 题型：
