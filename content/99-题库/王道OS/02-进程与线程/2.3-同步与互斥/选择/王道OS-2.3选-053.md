---
tags: [题目/选择, 王道OS, OS/02-进程与线程/03-同步与互斥]
answer: B
year: 2018
---
## 题干

53. 【P132】【2018 统考真题】属于同一进程的两个线程 thread1 和 thread2 并发执行，共享初值为 0 的全局变量 x。

thread1 和 thread2 实现对全局变量 x 加 1 的机器级代码描述如下。

| thread1 | 说明 | thread2 | 说明 |
| --- | --- | --- | --- |
| `Mov R1, x` | $(x) 
ightarrow R1$ | `Mov R2, x` | $(x) 
ightarrow R2$ |
| `Inc R1` | $(R1)+1 
ightarrow R1$ | `Inc R2` | $(R2)+1 
ightarrow R2$ |
| `Mov x, R1` | $(R1) 
ightarrow x$ | `Mov x, R2` | $(R2) 
ightarrow x$ |

在所有可能的指令执行序列中，使x的值为2的序列个数是（ ）

A. 1

B. 2

C. 3

D. 4

> [!note]- 原题截图
> ![[王道OS-2.3选-053.png]]

> [!success]- 答案与解析
> **答案：** B
>
> **解析：** 两个线程都对x执行加1，要得x=2只能一个线程完整执行后再执行另一个，共两种顺序。

## 关联

- 知识点：
- 题型：
