---
tags: [题目/选择, 王道CN, CN/05-传输层/02-UDP]
answer: B
---
## 题干

13. 在进行跨网络的 IP 通信时，不考虑 NAT，传输层使用 UDP 进行封装，数据链路层采用以太网 MAC 帧进行封装，则下列字段中一定保持不变的是（）

I. UDP 总长度

II. UDP 检验和

III. FCS 帧检验序列

IV. 目的 MAC 地址

V. 目的 IP 地址

VI. IP 检验和

A. V

B. I、II、V

C. IV、VI

D. III、IV、V

> [!note]- 原题截图
> ![[王道CN-5.2选-013.png]]

> [!success]- 答案与解析
> **答案：** B
>
> **解析：** 端到端UDP长度、校验和无需路由器更新；每跳变化的是MAC地址、帧FCS、TTL及IPv4首部校验和。

## 关联

- 知识点：
- 题型：
