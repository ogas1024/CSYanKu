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

24. 某客户与服务器建立 TCP 连接，当连接断开时，客户先向服务器发送一个标志 FIN=1 的报文段 A，此报文段中 seq 值为 x，ack 值为 y。

一段时间后，客户收到了服务器发来的一个标志 FIN=1 的报文段 B，则下列关于报文段 B 的说法中，正确的是（）

A. B 中的 seq 值一定为 y

B. B 中的 seq 值一定为 $y + 1$

C. B 中的 ack 值一定为 x

D. B 中的 ack 值一定为 $x + 1$

> [!note]- 原题截图
> ![[王道CN 5.3 TCP 选择 24.webp]]

> [!success]- 答案与解析
> **答案：** D
>
> **解析：** 客户端FIN消耗一个序号，因此服务器最后FIN段的ack必为x+1；服务器此前可能继续发送数据。

## 关联

- 知识点：
- 题型：
