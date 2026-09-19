---
source: 王道CN
subject: CN
chapter: 04 网络层
section: 4.4 路由算法与路由协议
qtype: 选择
topic: []
answer: D
answer_status: 已录入
tags: []
---
## 题干

24. （2010 统考真题）某自治系统内采用 RIP, 若该自治系统内的路由器 R1 收到其邻居路由器 R2 的距离向量，距离向量中包含信息  $\langle Net1, 16 \rangle$，则能得出的结论是（）

A. R2 可以经过 R1 到达 Net1, 跳数为 17

B. R2 可以到达 Net1, 跳数为 16

C. R1 可以经过 R2 到达 Net1, 跳数为 17

D. R1 不能经过 R2 到达 Net1

> [!note]- 原题截图
> ![[王道CN 4.4 路由算法与路由协议 选择 24.webp]]

> [!success]- 答案与解析
> **答案：** D
>
> **解析：** RIP距离16表示不可达；经R2到Net1将为17，因此R1、R2都不能经该路径到达，选D。

## 关联

- 知识点：
- 题型：
