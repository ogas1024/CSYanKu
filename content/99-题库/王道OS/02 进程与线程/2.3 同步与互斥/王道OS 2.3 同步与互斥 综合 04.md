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

某工厂有两个生产车间和一个装配车间，两个生产车间分别生产 A, B 两种零件，装配车间的任务是把 A, B 两种零件组装成产品。

两个生产车间每生产一个零件后，都要分别把它们送到装配车间的货架 F1, F2 上。

F1 存放零件 A, F2 存放零件 B, F1 和 F2 的容量均可存放 10 个零件。

装配工人每次从货架上取一个零件 A 和一个零件 B 后组装成产品。

请用 P, V 操作进行正确管理。

> [!note]- 原题截图
> ![[王道OS 2.3 同步与互斥 综合 04.png]]

> [!success]- 答案与解析
> **答案：**
>
> 把货架 F1、F2 视为两个容量10的缓冲区：`empty1=10, full1=0, mutex1=1`；`empty2=10, full2=0, mutex2=1`。
>
> - A车间：生产A；`P(empty1),P(mutex1)`，放入F1，`V(mutex1),V(full1)`。
> - B车间：生产B；`P(empty2),P(mutex2)`，放入F2，`V(mutex2),V(full2)`。
> - 装配车间：依次 `P(full1),P(mutex1)` 取A，释放F1并 `V(empty1)`；再 `P(full2),P(mutex2)` 取B，释放F2并 `V(empty2)`；最后把A、B装配成产品。
>
> **解析：** 两个货架分别构成独立生产者—消费者缓冲区，各需空位、产品数和互斥三个信号量。

## 关联

- 知识点：
- 题型：
