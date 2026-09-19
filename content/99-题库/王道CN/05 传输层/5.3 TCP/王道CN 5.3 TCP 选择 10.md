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

10. 在采用 TCP 连接的数据传输阶段，若发送端的发送窗口值由 1000 变为 2000，则发送端在收到一个确认之前可以发送（）

A. 2000 个 TCP 报文段

B. 2000B

C. 1000B

D. 1000 个 TCP 报文段

> [!note]- 原题截图
> ![[王道CN 5.3 TCP 选择 10.webp]]

> [!success]- 答案与解析
> **答案：** B
>
> **解析：** 接收方在ACK中通告2000B接收窗口，发送方未获新确认前最多可发送2000B。

## 关联

- 知识点：
- 题型：
