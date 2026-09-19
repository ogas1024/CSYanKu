---
source: 王道CN
subject: CN
chapter: 04 网络层
section: 4.2 IPv4
qtype: 选择
topic: []
answer: B
answer_status: 已录入
tags: []
---
## 题干

28. 路由表错误和软件故障都可能使得网络中的数据形成传输环路而无限转发环路的分组，IPv4 协议解决该问题的方法是（）

A. 报文分片

B. 设定生命期

C. 增加检验和

D. 增加选项字段

> [!note]- 原题截图
> ![[王道CN 4.2 IPv4 选择 28.webp]]

> [!success]- 答案与解析
> **答案：** B
>
> **解析：** TTL每经一个路由器减1，减至0便丢弃，从而防止分组在网络中无限循环。

## 关联

- 知识点：
- 题型：
