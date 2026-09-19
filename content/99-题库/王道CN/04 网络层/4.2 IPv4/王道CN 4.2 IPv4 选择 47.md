---
source: 王道CN
subject: CN
chapter: 04 网络层
section: 4.2 IPv4
qtype: 选择
topic: []
answer: D
answer_status: 已录入
tags: []
---
## 题干

47. 若某路由器收到一个 TTL 值为 1 的 IP 数据报，则路由器的操作是（）

A. 转发该 IP 数据报

B. 仅仅丢弃该 IP 数据报

C. 丢弃该 IP 数据报并向源主机发送类型为终点不可达的 ICMP 差错报告报文

D. 丢弃该 IP 数据报并向源主机发送类型为时间超过的 ICMP 差错报告报文

> [!note]- 原题截图
> ![[王道CN 4.2 IPv4 选择 47.webp]]

> [!success]- 答案与解析
> **答案：** D
>
> **解析：** 路由器把TTL=1减至0后丢弃分组，并向源主机发送ICMP时间超过差错报文。

## 关联

- 知识点：
- 题型：
