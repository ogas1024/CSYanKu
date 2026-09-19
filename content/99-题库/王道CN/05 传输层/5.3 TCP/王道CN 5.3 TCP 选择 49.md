---
source: 王道CN
subject: CN
chapter: 05 传输层
section: 5.3 TCP
qtype: 选择
topic: []
answer: A
answer_status: 已录入
tags: []
---
## 题干

49. （2017 统考真题）若甲向乙发起一个 TCP 连接，最大段长 MSS=1KB，RTT=5ms，乙开辟的接收缓存为64 KB，则甲从连接建立成功至发送窗口达到32 KB，需经过的时间至少（）

A. 25 ms

B. 30ms

C. 160ms

D. 165ms

> [!note]- 原题截图
> ![[王道CN 5.3 TCP 选择 49.webp]]

> [!success]- 答案与解析
> **答案：** A
>
> **解析：** 接收缓存64KB不构成限制，慢开始cwnd从1KB经5RTT增至32KB，总计25ms。

## 关联

- 知识点：
- 题型：
