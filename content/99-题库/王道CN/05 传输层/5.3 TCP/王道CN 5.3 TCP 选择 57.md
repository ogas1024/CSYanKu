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

57. （2022 统考真题）假设主机甲和主机乙已建立一个 TCP 连接，最大段长 MSS=1KB，甲一直向乙发送数据，当甲的拥塞窗口为 16KB 时，计时器发生了超时，则甲的拥塞窗口再次增长到 16KB 所需要的时间至少是（）

A. 4RTT

B. 5RTT

C. 11RTT

D. 16RTT

> [!note]- 原题截图
> ![[王道CN 5.3 TCP 选择 57.png]]

> [!success]- 答案与解析
> **答案：** C
>
> **解析：** 超时后ssthresh=8KB、cwnd=1KB，3RTT到8KB再线性8RTT到16KB，共11RTT。

## 关联

- 知识点：
- 题型：
