---
source: 王道CN
subject: CN
chapter: 04 网络层
section: 4.5 IP多播
qtype: 选择
topic: []
answer: B
answer_status: 已录入
tags: []
---
## 题干

2. 在设计多播路由时，为了避免路由环路， （）

A. 采用了水平分割技术

B. 构造多播转发树

C. 采用了 IGMP

D. 通过生存时间（TTL）字段

> [!note]- 原题截图
> ![[王道CN 4.5 IP多播 选择 02.webp]]

> [!success]- 答案与解析
> **答案：** B
>
> **解析：** 多播转发树天然无环，按树转发既能覆盖组内主机又能避免路由环路；水平分割针对距离向量，TTL只限制循环寿命。

## 关联

- 知识点：
- 题型：
