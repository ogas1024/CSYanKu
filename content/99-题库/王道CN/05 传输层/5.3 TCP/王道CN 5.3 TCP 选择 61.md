---
source: 王道CN
subject: CN
chapter: 05 传输层
section: 5.3 TCP
qtype: 选择
topic: []
answer: B
answer_status: 已录入
tags: []
---
## 题干

61. （2025 统考真题）Time 是一个提供时间查询服务的 C/S 架构网络应用，支持客户通过 UDP 或 TCP 向 Time 服务器请求时间服务。

若某客户与某 Time 服务器通信的往返时间 RTT=8ms，则该客户分别通过 UDP 和 TCP 向该服务器请求服务，所需的最少时间分别是（）

A. 8 ms, 8 ms

B. 8 ms, 16 ms

C. 16 ms, 8 ms

D. 16 ms, 16 ms

> [!note]- 原题截图
> ![[王道CN 5.3 TCP 选择 61.png]]

> [!success]- 答案与解析
> **答案：** B
>
> **解析：** RTT=8ms；UDP请求响应最少1RTT=8ms，TCP含握手并可在第三次握手携带请求，共2RTT=16ms。

## 关联

- 知识点：
- 题型：
