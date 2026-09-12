---
source: 王道CN
subject: CN
chapter: 04 网络层
section: 4.3 IPv6
qtype: 选择
topic: []
answer: A
answer_status: 已录入
tags: []
---
## 题干

6. 若一个路由器收到的 IPv6 数据报因太大而不能转发到链路上，则路由器将把该数据报（）

A. 丢弃

B. 暂存

C. 分片

D. 转发至能支持该数据报的链路上

> [!note]- 原题截图
> ![[王道CN 4.3 IPv6 选择 06.png]]

> [!success]- 答案与解析
> **答案：** A
>
> **解析：** IPv6不允许中间路由器分片；分组超过出链路MTU时路由器丢弃，并返回ICMPv6分组太大报文。

## 关联

- 知识点：
- 题型：
