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

16. 下列关于 TCP 窗口与拥塞控制概念的描述中，错误的是（）

A. 接收端窗口（rwnd）通过 TCP 首部中的窗口字段通知数据的发送方

B. 发送窗口确定的依据是：发送窗口 = $\min[\text{接收端窗口}, \text{拥塞窗口}]$

C. 拥塞窗口是接收端根据网络拥塞情况确定的窗口值

D. 拥塞窗口大小在开始时可以按指数规律增长

> [!note]- 原题截图
> ![[王道CN 5.3 TCP 选择 16.png]]

> [!success]- 答案与解析
> **答案：** C
>
> **解析：** 拥塞窗口由发送端依据网络拥塞状态维护和调整。

## 关联

- 知识点：
- 题型：
