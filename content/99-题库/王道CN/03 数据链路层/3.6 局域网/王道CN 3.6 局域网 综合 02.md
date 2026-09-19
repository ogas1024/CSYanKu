---
source: 王道CN
subject: CN
chapter: 03 数据链路层
section: 3.6 局域网
qtype: 综合
topic: []
answer_status: 已录入
tags: []
---
## 题干

【答案 P112】2. 长度为 1km、数据传输速率为 10Mb/s 的 CSMA/CD 以太网，信号在电缆中的传播速率为 200000km/s。

试求能够使该网络正常运行的最小帧长。

> [!note]- 原题截图
> ![[王道CN 3.6 局域网 综合 02.webp]]

> [!success]- 答案与解析
> **答案：**
>
> 最小帧长为 $100\,\text{bit}$。
>
> **解析：** 1 km电缆的单向传播时延为 $1/200000=5\,\mu s$，争用期（往返传播时延）为 $10\,\mu s$。CSMA/CD要求帧发送时间不小于争用期，因此
> $$L_{\min}=10\,\text{Mb/s}\times10\,\mu s=100\,\text{bit}.$$

## 关联

- 知识点：
- 题型：
