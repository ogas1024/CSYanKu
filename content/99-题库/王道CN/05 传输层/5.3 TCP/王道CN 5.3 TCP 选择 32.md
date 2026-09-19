---
source: 王道CN
subject: CN
chapter: 05 传输层
section: 5.3 TCP
qtype: 选择
topic: []
answer: A
answer_status: 已录入
tags: []
---
## 题干

32. 若甲向乙发起了一条 TCP 连接，最大段长为 1KB，乙每收到一个数据段都会发出一个接收窗口为 10 KB 的确认段，若甲在 t 时刻发生超时，此时拥塞窗口为 16 KB。

则从 t 时刻起，在不再发生超时的情况下，经过 10RTT 后，甲的发送窗口是（）

A. 10KB

B. 12KB

C. 14KB

D. 15KB

> [!note]- 原题截图
> ![[王道CN 5.3 TCP 选择 32.webp]]

> [!success]- 答案与解析
> **答案：** A
>
> **解析：** 10RTT后拥塞窗口超过10KB，但接收窗口限制为10KB，因此发送窗口仍为10KB。

## 关联

- 知识点：
- 题型：
