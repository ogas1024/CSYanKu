---
source: 王道CN
subject: CN
chapter: 05 传输层
section: 5.3 TCP
qtype: 选择
topic: []
answer: C
answer_status: 已录入
tags: []
---
## 题干

33. 设 TCP 的拥塞窗口的慢开始门限值初始为 8（单位为报文段），当拥塞窗口上升到 12 时发生超时，TCP 开始慢开始和拥塞避免，则第 13 次传输时拥塞窗口的大小为（）

A. 4

B. 6

C. 7

D. 8

> [!note]- 原题截图
> ![[王道CN 5.3 TCP 选择 33.png]]

> [!success]- 答案与解析
> **答案：** C
>
> **解析：** 按慢开始与拥塞避免并在cwnd=12时超时重置，窗口序列计算得第13次传输时cwnd=7。

## 关联

- 知识点：
- 题型：
