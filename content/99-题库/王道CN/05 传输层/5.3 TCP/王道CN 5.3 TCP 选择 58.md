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

58. （2022 统考真题）假设客户 C 和服务器 S 已建立一个 TCP 连接，通信往返时间 RTT=50ms，最长报文段寿命 MSL=800ms，数据传输结束后，C 主动请求断开连接。

若从 C 主动向 S 发出 FIN 段时刻算起，则 C 和 S 进入 CLOSED 状态所需的时间至少分别是（）

A. 850ms, 50ms

B. 1650ms, 50ms

C. 850ms, 75ms

D. 1650ms, 75ms

> [!note]- 原题截图
> ![[王道CN 5.3 TCP 选择 58.png]]

> [!success]- 答案与解析
> **答案：** D
>
> **解析：** 服务端立即合并ACK+FIN，客户端进入TIME_WAIT；客户端至少1650ms关闭，服务端至少75ms关闭。

## 关联

- 知识点：
- 题型：
