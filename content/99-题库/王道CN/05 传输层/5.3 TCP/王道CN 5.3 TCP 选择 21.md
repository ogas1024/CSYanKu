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

21. 主机 A 和 B 之间建立了一个 TCP 连接，A 向 B 发送的第一个 SYN 报文段中的序号值（seq）等于 211，数据传输结束在释放连接时，A 向 B 发送的第 4 次挥手报文段的 seq 等于 985，则在本次通信过程中，A 向 B 总共发送了（）字节的数据。

A. 771

B. 772

C. 773

D. 774

> [!note]- 原题截图
> ![[王道CN 5.3 TCP 选择 21.png]]

> [!success]- 答案与解析
> **答案：** B
>
> **解析：** SYN和FIN各消耗一个序号；结合初始序号211和断开报文seq=985，可得应用数据量984−212=772B。

## 关联

- 知识点：
- 题型：
