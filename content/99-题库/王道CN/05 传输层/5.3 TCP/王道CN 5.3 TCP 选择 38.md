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

38. A 和 B 建立 TCP 连接，MSS 为 1KB。

某时，慢开始门限值为 2KB，A 的拥塞窗口为 4KB，在接下来的 1RTT 内，A 向 B 发送了 4KB 的数据（TCP 的数据部分），并且得到了 B 的确认，确认报文中的窗口字段的值为 2KB。

在下一个 RTT 中，A 最多能向 B 发送（）数据。

A. 2KB

B. 8KB

C. 5KB

D. 4KB

> [!note]- 原题截图
> ![[王道CN 5.3 TCP 选择 38.webp]]

> [!success]- 答案与解析
> **答案：** A
>
> **解析：** B通告接收窗口2KB，小于A的拥塞窗口，故下一RTT发送窗口最多2KB。

## 关联

- 知识点：
- 题型：
