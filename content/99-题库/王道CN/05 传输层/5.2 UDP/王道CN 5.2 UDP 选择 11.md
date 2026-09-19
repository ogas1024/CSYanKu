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

11. 一个 UDP 数据报的数据字段长度为 9192B，若在数据链路层要采用以太网来传送，则应当将其划分为 IP 数据报片的片数是（）

A. 6

B. 7

C. 8

D. 9

> [!note]- 原题截图
> ![[王道CN 5.2 UDP 选择 11.webp]]

> [!success]- 答案与解析
> **答案：** B
>
> **解析：** 9192B数据加8B UDP首部共9200B；每片载荷1480B，共7片，末片320B，偏移为0、185、370、555、740、925、1110。

## 关联

- 知识点：
- 题型：
