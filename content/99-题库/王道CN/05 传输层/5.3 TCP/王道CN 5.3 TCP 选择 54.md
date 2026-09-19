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

54. （2021 统考真题）若客户首先向服务器发送 FIN 段请求断开 TCP 连接，则当客户收到服务器发送的 FIN 段并向服务器发送 ACK 段后，客户的 TCP 状态转换为（）

A. CLOSE_WAIT

B. TIME_WAIT

C. FIN_WAIT_1

D. FIN_WAIT_2

> [!note]- 原题截图
> ![[王道CN 5.3 TCP 选择 54.webp]]

> [!success]- 答案与解析
> **答案：** B
>
> **解析：** 主动关闭方收到对端FIN并回ACK后进入TIME_WAIT，等待2MSL后才CLOSED。

## 关联

- 知识点：
- 题型：
