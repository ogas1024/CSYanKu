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

44. （2011 统考真题）主机甲向主机乙发送一个（SYN=1,seq=11220）的 TCP 段，期望与主机乙建立 TCP 连接，若主机乙接受该连接请求，则主机乙向主机甲发送的正确的 TCP 段可能是（）

A. $(\mathrm{SYN}=0, \mathrm{ACK}=0, \mathrm{seq}=11221, \mathrm{ack}=11221)$

B. $(\mathrm{SYN}=1,\mathrm{ACK}=1,\mathrm{seq}=11220,\mathrm{ack}=11220)$

C. $(\mathrm{SYN}=1,\mathrm{ACK}=1,\mathrm{seq}=11221,\mathrm{ack}=11221)$

D. $(\mathrm{SYN}=0,\mathrm{ACK}=0,\mathrm{seq}=11220,\mathrm{ack}=11220)$

> [!note]- 原题截图
> ![[王道CN 5.3 TCP 选择 44.webp]]

> [!success]- 答案与解析
> **答案：** C
>
> **解析：** 第二次握手须SYN=ACK=1，ack=11221；乙的seq独立选择，选项C给出的值有效。

## 关联

- 知识点：
- 题型：
