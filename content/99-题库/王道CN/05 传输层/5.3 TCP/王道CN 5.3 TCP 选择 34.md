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

34. 甲和乙刚建立 TCP 连接，并约定最大段长为 2KB，假设乙总是及时清空缓存，保证接收窗口始终为 20KB，ssthresh 为 16KB，若双向传输时间为 10ms，发送时延忽略不计，且没有发生拥塞的情况，则经过（）甲的发送窗口第一次达到 20KB。

A. 40ms

B. 50ms

C. 60ms

D. 70ms

> [!note]- 原题截图
> ![[王道CN 5.3 TCP 选择 34.webp]]

> [!success]- 答案与解析
> **答案：** B
>
> **解析：** cwnd从2到16KB慢开始需3RTT，再线性增至20KB需2RTT，共5RTT=50ms。

## 关联

- 知识点：
- 题型：
