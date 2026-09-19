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

60. （2025 统考真题）主机甲通过 TCP 向主机乙发送数据的部分过程如下图，seq 为序号，ack_seq 为确认序号，rcv_wnd 为接收窗口。

甲在 $t_{0}$ 时刻的拥塞窗口和发送窗口均为 2000B，拥塞控制阈值 8000B，MSS=1000B。

甲始终以 MSS 发送 TCP 段。

若甲在 $t_{1}$ 时刻收到如图所示的确认段，则甲在未收到新的确认段之前，还可以继续向乙发送的 TCP 段数是（）

![[王道CN 5.3 TCP 选择 60-fig1.webp]]

A. 2

B. 3

C. 4

D. 5

> [!note]- 原题截图
> ![[王道CN 5.3 TCP 选择 60.webp]]

> [!success]- 答案与解析
> **答案：** A
>
> **解析：** ACK使cwnd由2000增至3000B，已有1000B未确认，剩余窗口2000B，可再发2个MSS。

## 关联

- 知识点：
- 题型：
