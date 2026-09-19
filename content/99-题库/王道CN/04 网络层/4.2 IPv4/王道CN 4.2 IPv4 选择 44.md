---
source: 王道CN
subject: CN
chapter: 04 网络层
section: 4.2 IPv4
qtype: 选择
topic: []
answer: C
answer_status: 已录入
tags: []
---
## 题干

44. 下列情况需要启动 ARP 请求的是（）

A. 主机需要接收信息，但 ARP 表中没有源 IP 地址与 MAC 地址的映射关系

B. 主机需要接收信息，但 ARP 表中已有源 IP 地址与 MAC 地址的映射关系

C. 主机需要发送信息，但 ARP 表中没有目的 IP 地址与 MAC 地址的映射关系

D. 主机需要发送信息，但 ARP 表中已有目的 IP 地址与 MAC 地址的映射关系

> [!note]- 原题截图
> ![[王道CN 4.2 IPv4 选择 44.webp]]

> [!success]- 答案与解析
> **答案：** C
>
> **解析：** 同网目的先查ARP缓存，未命中则广播ARP请求并缓存响应；异网目的则解析默认网关MAC并把IP分组交给路由器。

## 关联

- 知识点：
- 题型：
