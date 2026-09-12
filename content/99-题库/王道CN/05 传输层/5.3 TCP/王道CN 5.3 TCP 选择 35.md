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

35. 假设一个 TCP 连接的传输过程在慢开始阶段，在 $t\mathrm{RTT}$ 时刻到 $(t+1)\mathrm{RTT}$ 时刻之间发送了 $k$ 个数据段，假设仍然保持在慢开始阶段，预期在 $(t+1)\mathrm{RTT}$ 时刻到 $(t+2)\mathrm{RTT}$ 时刻之间将发送（）个数据段（假设接收方有足够的缓存）

A. $k$

B. $k+1$

C. $2^{k}$

D. $2k$

> [!note]- 原题截图
> ![[王道CN 5.3 TCP 选择 35.png]]

> [!success]- 答案与解析
> **答案：** D
>
> **解析：** 慢开始阶段一个RTT内发送k段并获确认后cwnd翻倍，下一RTT可发送2k段。

## 关联

- 知识点：
- 题型：
