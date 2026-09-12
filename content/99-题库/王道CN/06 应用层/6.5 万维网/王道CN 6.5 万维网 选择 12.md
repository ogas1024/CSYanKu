---
source: 王道CN
subject: CN
chapter: 06 应用层
section: 6.5 万维网
qtype: 选择
topic: []
answer: A
answer_status: 已录入
tags: []
---
## 题干

12. 假设主机通过 HTTP/1.1（流水线方式）请求浏览某个 Web 服务器 S 上的 Web 页 rfc.html，rfc.html 引用了同目录下的 3 个 JPEG 小图像（假设只有在收到 rfc.html 后才能发送对其引用图像的请求），一次请求响应的时间为 RTT，忽略其他各种时延，不考虑拥塞控制和流量控制，则从发出 HTTP 请求报文开始到收到全部内容为止，所耗费的时间是（）

A. 2RTT

B. 2.5RTT

C. 4RTT

D. 4.5RTT

> [!note]- 原题截图
> ![[王道CN 6.5 万维网 选择 12.png]]

> [!success]- 答案与解析
> **答案：** A
>
> **解析：** 题目从TCP已建立后的HTTP请求开始；流水线持续连接先取HTML再并行请求3图，共2RTT。

## 关联

- 知识点：
- 题型：
