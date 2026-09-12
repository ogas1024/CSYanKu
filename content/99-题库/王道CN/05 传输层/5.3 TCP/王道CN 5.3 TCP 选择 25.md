---
source: 王道CN
subject: CN
chapter: 05 传输层
section: 5.3 TCP
qtype: 选择
topic: []
answer: C
answer_status: 已录入
tags: []
---
## 题干

25. 某应用程序每秒产生一个60 B的数据块，每个数据块被封装在一个 TCP 报文中，然后封装在一个 IP 数据报中，则最后每个数据报所包含的应用数据所占的百分比是（）（注意：TCP 报文和 IP 数据报文的首部没有附加字段）

A. 20%

B. 40%

C. 60%

D. 80%

> [!note]- 原题截图
> ![[王道CN 5.3 TCP 选择 25.png]]

> [!success]- 答案与解析
> **答案：** C
>
> **解析：** TCP首部20B、IP首部20B、数据60B，总长100B，有效数据占60%。

## 关联

- 知识点：
- 题型：
