---
source: 王道CN
subject: CN
chapter: 05 传输层
section: 5.2 UDP
qtype: 选择
topic: []
answer: B
answer_status: 已录入
tags: []
---
## 题干

17. （2025 统考真题）假设路由器实现 NAT 功能，内网中主机 H 的 IP 地址为 192.168.1.5/24。

若 H 运行某应用向 Internet 发送了一个 UDP 报文段，则路由器在转发封装该 UDP 报文段的 IP 数据报的过程中，UDP 报文段的首部字段会被修改的是（）

I. 源端口号

II. 目的端口号

III. 总长度

IV. 检验和

A. 仅 I、III

B. 仅 I、IV

C. 仅 II、III

D. 仅 II、IV

> [!note]- 原题截图
> ![[王道CN 5.2 UDP 选择 17.png]]

> [!success]- 答案与解析
> **答案：** B
>
> **解析：** NAT修改源IP、可能修改源端口，并因伪首部源IP变化而重算UDP校验和；目的端口和UDP长度不变，故仅I、IV。

## 关联

- 知识点：
- 题型：
