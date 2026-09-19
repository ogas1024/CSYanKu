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

42. （2009 统考真题）一个 TCP 连接总以 1KB 的最大段长发送 TCP 段，发送方有足够多的数据要发送，当拥塞窗口为 16KB 时发生了超时，若接下来的 4RTT 时间内的 TCP 段的传输都是成功的，则当第 4 个 RTT 时间内发送的所有 TCP 段都得到肯定应答时，拥塞窗口大小是（）

A. 7KB

B. 8KB

C. 9KB

D. 16KB

> [!note]- 原题截图
> ![[王道CN 5.3 TCP 选择 42.webp]]

> [!success]- 答案与解析
> **答案：** C
>
> **解析：** 超时后ssthresh=8KB、cwnd=1KB；三个RTT慢开始至8KB，第四RTT拥塞避免增至9KB。

## 关联

- 知识点：
- 题型：
