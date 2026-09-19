---
source: 王道CN
subject: CN
chapter: 05 传输层
section: 5.3 TCP
qtype: 选择
topic: []
answer: D
answer_status: 已录入
tags: []
---
## 题干

59. （2024 统考真题）假设主机 H 通过 TCP 向服务器发送长度为 3000B 的报文，往返时间 RTT = 10 ms，最长报文段寿命 MSL = 30s，最大报文段长度 MSS = 1000B，忽略 TCP 段的传输时延，报文传输结束后 H 首先请求断开连接，则从H请求建立 TCP 连接时刻起，到H进入 CLOSED 状态为止，所需的时间至少是（）

A. 30.03s

B. 30.04s

C. 60.03s

D. 60.04s

> [!note]- 原题截图
> ![[王道CN 5.3 TCP 选择 59.webp]]

> [!success]- 答案与解析
> **答案：** D
>
> **解析：** 建连、传3000B和挥手共40ms，主动关闭后等待2MSL=60s，总最短时间60.04s。

## 关联

- 知识点：
- 题型：
