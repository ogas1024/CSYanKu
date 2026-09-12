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

26. 假设 TCP 客户与 TCP 服务器的通信已结束，端到端的往返时间为 RTT。

t 时刻 TCP 客户请求断开连接，则从 t 时刻起 TCP 服务器释放该连接的最短时间是（）

A. 0.5RTT

B. 1RTT

C. 1.5RTT

D. 2RTT

> [!note]- 原题截图
> ![[王道CN 5.3 TCP 选择 26.png]]

> [!success]- 答案与解析
> **答案：** C
>
> **解析：** 服务端收到FIN后立即合并发送ACK+FIN，客户端回ACK，服务端收到后关闭，最短经历1.5RTT。

## 关联

- 知识点：
- 题型：
