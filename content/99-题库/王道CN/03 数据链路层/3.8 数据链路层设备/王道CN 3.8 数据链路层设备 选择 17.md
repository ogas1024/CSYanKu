---
source: 王道CN
subject: CN
chapter: 03 数据链路层
section: 3.8 数据链路层设备
qtype: 选择
topic: []
answer: C
answer_status: 已录入
tags: []
---
## 题干

17. 当以太网交换机某接口收到帧时，若在交换表中未找到目的 MAC 地址，则（）

A. 将帧发送到特定接口进行 ARP 查询

B. 丢弃该帧

C. 将帧发送到除本接口外的所有接口

D. 将帧发送给 DHCP 服务器

> [!note]- 原题截图
> ![[王道CN 3.8 数据链路层设备 选择 17.webp]]

> [!success]- 答案与解析
> **答案：** C
>
> **解析：** 目的MAC不在交换表时采用洪泛，将帧从除入端口外的所有端口转发。

## 关联

- 知识点：
- 题型：
