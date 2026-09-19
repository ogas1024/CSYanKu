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

37. 在一个 TCP 连接中，MSS 为 1KB，当拥塞窗口为 34KB 时收到了 3 个冗余 ACK 报文。

若在接下来的 4RTT 内报文段传输都是成功的，则当这些报文段均得到确认后，拥塞窗口的大小是（）

A. 8KB

B. 16KB

C. 20KB

D. 21KB

> [!note]- 原题截图
> ![[王道CN 5.3 TCP 选择 37.webp]]

> [!success]- 答案与解析
> **答案：** D
>
> **解析：** 3个冗余ACK触发快恢复，ssthresh和cwnd均设17KB，四个RTT确认后cwnd线性增至21KB。

## 关联

- 知识点：
- 题型：
