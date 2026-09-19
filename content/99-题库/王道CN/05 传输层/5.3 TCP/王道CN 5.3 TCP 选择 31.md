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

31. 在一个 TCP 连接中，MSS 为 1KB，当拥塞窗口为 34KB 时发生了超时事件。

若在接下来的 4RTT 内报文段传输都是成功的，则当这些报文段均得到确认后，拥塞窗口的大小是（）

A. 8KB

B. 9KB

C. 16KB

D. 17KB

> [!note]- 原题截图
> ![[王道CN 5.3 TCP 选择 31.webp]]

> [!success]- 答案与解析
> **答案：** C
>
> **解析：** 超时时ssthresh=17KB、cwnd=1KB；慢开始四个RTT后窗口依次2、4、8、16KB。

## 关联

- 知识点：
- 题型：
