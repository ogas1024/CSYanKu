---
tags: [题目/选择, 王道CN, CN/05-传输层/03-TCP]
answer: A、C
---
## 题干

18. TCP 使用三次握手协议来建立连接，设 A、B 双方发送报文的初始序列号分别为 $X$ 和 $Y$，A 发送（①）的报文给 B，B 接收到报文后发送（②）的报文给 A，然后 A 发送一个确认报文给 B 便建立了连接（注意，ACK 的下标为捎带的序号）。

①

A. $\mathrm{SYN}=1$，序号为 $X$

B. $\mathrm{SYN}=1$，序号为 $X+1$，$\mathrm{ACK}_{X}=1$

C. $\mathrm{SYN}=1$，序号为 $Y$

D. $\mathrm{SYN}=1$，序号为 $Y$，$\mathrm{ACK}_{Y+1}=1$

②

A. $\mathrm{SYN}=1$，序号为 $X+1$

B. $\mathrm{SYN}=1$，序号为 $X+1$，$\mathrm{ACK}_{X}=1$

C. $\mathrm{SYN}=1$，序号为 $Y$，$\mathrm{ACK}_{X+1}=1$

D. $\mathrm{SYN}=1$，序号为 $Y$，$\mathrm{ACK}_{Y+1}=1$

> [!note]- 原题截图
> ![[王道CN-5.3选-018.png]]

> [!success]- 答案与解析
> **答案：** A、C
>
> **解析：** 第一次握手由A发送SYN=1、seq=X；第二次握手B回SYN=1、ACK=1、ack=X+1并选择seq=Y，故A、C正确。

## 关联

- 知识点：
- 题型：
