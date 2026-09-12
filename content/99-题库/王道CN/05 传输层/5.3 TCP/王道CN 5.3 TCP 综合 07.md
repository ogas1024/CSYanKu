---
source: 王道CN
subject: CN
chapter: 05 传输层
section: 5.3 TCP
qtype: 综合
topic: []
answer_status: 已录入
tags: []
---
## 题干

【答案 P263】7. 考虑在一条 TCP 连接上采用慢开始拥塞控制而不发生网络拥塞情况下，接收窗口为 24KB，RTT 为 10ms，最大段长为 2KB。

则需要多长时间才能发送第一个完全窗口？

> [!note]- 原题截图
> ![[王道CN 5.3 TCP 综合 07.png]]

> [!success]- 答案与解析
> **答案：**
>
> MSS为2KB，初始拥塞窗口为1MSS=2KB。前三个RTT后依次变为4KB、8KB、16KB；第四个RTT后变为32KB，但发送窗口受24KB接收窗口限制，首次达到完整24KB窗口。因此需要4×10=40ms。
>
> **解析：** 发送窗口取拥塞窗口与接收窗口的较小值。

## 关联

- 知识点：
- 题型：
