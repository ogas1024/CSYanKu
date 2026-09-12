---
source: 王道CN
subject: CN
chapter: 05 传输层
section: 5.3 TCP
qtype: 选择
topic: []
answer: B
answer_status: 已录入
tags: []
---
## 题干

40. 甲向乙发起一个 TCP 连接，最大段长 MSS=1KB，RTT=3ms，乙的接收缓存为 16KB，且乙的接收缓存仅有数据存入而无数据取出，则甲从连接建立成功至发送窗口达到 8 KB，需经过的最小时间以及此时乙的接收缓存的可用空间分别为（）

A. 3ms, 15KB

B. 9ms, 9KB

C. 6ms, 13KB

D. 12ms, 8KB

> [!note]- 原题截图
> ![[王道CN 5.3 TCP 选择 40.png]]

> [!success]- 答案与解析
> **答案：** B
>
> **解析：** 为求最短时间令拥塞窗口持续指数增长，3RTT内累计发送7KB，发送窗口达到8KB，故9ms。

## 关联

- 知识点：
- 题型：
