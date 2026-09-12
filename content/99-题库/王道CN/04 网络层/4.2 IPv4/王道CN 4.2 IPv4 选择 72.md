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

72. （2025 统考真题）一台新接入网络的主机H通过DHCP服务器动态请求IP地址过程中，与DHCP服务器交换DHCP报文过程如下图所示。

封装DHCP REQUEST报文的IP数据报的目的IP地址和源IP地址分别是（）

![[王道CN 4.2 IPv4 选择 72-fig1.jpg]]

A. 192.168.5.1,0.0.0.0

B. 192.168.5.1,192.168.5.9

C. 255.255.255.255,0.0.0.0

D. 255.255.255.255,192.168.5.9

> [!note]- 原题截图
> ![[王道CN 4.2 IPv4 选择 72.png]]

> [!success]- 答案与解析
> **答案：** C
>
> **解析：** 收到Offer并接受后，未正式获址的客户以源0.0.0.0、目的255.255.255.255广播DHCP REQUEST通知所有服务器。

## 关联

- 知识点：
- 题型：
