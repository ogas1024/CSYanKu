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

23. TCP 的通信双方，有一方发送了带有 FIN 标志的数据段后，表示（）

A. 将断开通信双方的 TCP 连接

B. 单方面释放连接，表示本方已经无数据发送，但可以接收对方的数据

C. 中止数据发送，双方都不能发送数据

D. 连接被重新建立

> [!note]- 原题截图
> ![[王道CN 5.3 TCP 选择 23.webp]]

> [!success]- 答案与解析
> **答案：** B
>
> **解析：** FIN只表示本方无数据再发送；半关闭后仍可能继续接收对方数据。

## 关联

- 知识点：
- 题型：
