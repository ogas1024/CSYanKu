---
source: 王道CN
subject: CN
chapter: 06 应用层
section: 6.5 万维网
qtype: 选择
topic: []
answer: B
answer_status: 已录入
tags: []
---
## 题干

11. 若浏览器支持并行 TCP 连接，使用非持久的 HTTP/1.0 协议请求浏览 1 个 Web 页，该页中引用同一网站上的 7 个小图像文件，则从浏览器为传输 Web 页请求建立 TCP 连接开始，到接收完所有内容为止，所需的往返时间 RTT 数至少是（）

A. 3

B. 4

C. 8

D. 9

> [!note]- 原题截图
> ![[王道CN 6.5 万维网 选择 11.png]]

> [!success]- 答案与解析
> **答案：** B
>
> **解析：** 先用2RTT取得HTML，再并行建立7条连接并取图需2RTT，总计4RTT。

## 关联

- 知识点：
- 题型：
