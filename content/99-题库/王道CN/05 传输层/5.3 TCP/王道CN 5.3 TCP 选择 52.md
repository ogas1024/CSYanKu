---
source: 王道CN
subject: CN
chapter: 05 传输层
section: 5.3 TCP
qtype: 选择
topic: []
answer: D
answer_status: 已录入
tags: []
---
## 题干

52. （2020 统考真题）若主机甲与主机乙已建立一条 TCP 连接，最大段长（MSS）为 1KB，往返时间（RTT）为 2 ms，则在不出现拥塞的前提下，拥塞窗口从 8 KB 增长到 32 KB 所需的最长时间是（）

A. 4 ms

B. 8 ms

C. 24 ms

D. 48 ms

> [!note]- 原题截图
> ![[王道CN 5.3 TCP 选择 52.webp]]

> [!success]- 答案与解析
> **答案：** D
>
> **解析：** 为使8KB到32KB耗时最长，可令其始终拥塞避免，每RTT增1KB，24RTT×2ms=48ms。

## 关联

- 知识点：
- 题型：
