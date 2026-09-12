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

11. A 和 B 建立了 TCP 连接，当 A 收到确认号为 100 的确认报文段时，表示（）

A. 报文段 99 已收到

B. 报文段 100 已收到

C. 末字节序号为 99 的报文段已收到

D. 末字节序号为 100 的报文段已收到

> [!note]- 原题截图
> ![[王道CN 5.3 TCP 选择 11.png]]

> [!success]- 答案与解析
> **答案：** C
>
> **解析：** 确认号是接收方下一次期望字节的序号；已收到最后字节99，故确认号为100。

## 关联

- 知识点：
- 题型：
