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

50. （2019 统考真题）某客户通过一个 TCP 连接向服务器发送数据的部分过程如图所示。

客户在 $t_{0}$ 时刻第一次收到确认序列号 ack_seq=100 的段，并发送序列号 seq=100 的段，但发生丢失。

若 TCP 支持快速重传，则客户重新发送 seq = 100 段的时刻是（）

![[王道CN 5.3 TCP 选择 50-fig1.jpg]]

A. $t_{1}$

B. $t_{2}$

C. $t_{3}$

D. $t_{4}$

> [!note]- 原题截图
> ![[王道CN 5.3 TCP 选择 50.png]]

> [!success]- 答案与解析
> **答案：** C
>
> **解析：** 首次ACK不算冗余，随后t1、t2、t3三个相同冗余ACK使t3触发seq=100的快速重传。

## 关联

- 知识点：
- 题型：
