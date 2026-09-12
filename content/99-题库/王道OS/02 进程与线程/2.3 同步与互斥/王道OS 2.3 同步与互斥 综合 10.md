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

设 P, Q, R 共享一个缓冲区，P, Q 构成一对生产者-消费者，R 既为生产者又为消费者，若缓冲区为空，则可以写入；

若缓冲区不空，则可以读出。

使用 P, V 操作实现其同步。

> [!note]- 原题截图
> ![[王道OS 2.3 同步与互斥 综合 10.png]]

> [!success]- 答案与解析
> **答案：**
>
> 设 `full=0,empty=1,mutex=1`。
>
> - P为生产者：`P(empty),P(mutex)` 生产一个，`V(mutex),V(full)`。
> - Q为消费者：`P(full),P(mutex)` 消费一个，`V(mutex),V(empty)`。
> - R兼具两种角色：若 `empty==1`，执行与P相同的生产流程；若 `full==1`，执行与Q相同的消费流程。
>
> **解析：** P、Q构成容量1的生产者消费者；R必须先根据缓冲状态选择生产或消费分支，再以标准PV顺序操作。

## 关联

- 知识点：
- 题型：
