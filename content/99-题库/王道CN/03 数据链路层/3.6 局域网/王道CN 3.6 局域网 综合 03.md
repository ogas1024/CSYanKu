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

【答案 P112】3. 考虑建立一个 CSMA/CD 协议网络，电缆长 1km，运行速率为 1Gb/s，电缆中的信号速率是 200000km/s，最小帧长度是多少?

> [!note]- 原题截图
> ![[王道CN 3.6 局域网 综合 03.png]]

> [!success]- 答案与解析
> **答案：**
>
> 最小帧长为 $10000\,\text{bit}$（即 $1250\,\text{B}$）。
>
> **解析：** 链路长度仍为1 km，传播速率仍为200000 km/s，所以争用期为 $10\,\mu s$。在1 Gb/s下，争用期内发送的比特数为
> $$L_{\min}=1\,\text{Gb/s}\times10\,\mu s=10000\,\text{bit}.$$

## 关联

- 知识点：
- 题型：
