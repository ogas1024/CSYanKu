---
source: 王道CN
subject: CN
chapter: 06 应用层
section: 6.5 万维网
qtype: 选择
topic: []
answer: D
answer_status: 已录入
tags: []
---
## 题干

19. （2024 统考真题）若浏览器不支持并行 TCP 连接，使用非持久的 HTTP/1.0 协议请求浏览 1 个 Web 页，该页中引用同一网站上的 7 个小图像文件，则从浏览器为传输 Web 页请求建立 TCP 连接开始，到接收完所有内容为止，所需要的往返时间 RTT 数至少是（）

A. 4

B. 9

C. 14

D. 16

> [!note]- 原题截图
> ![[王道CN 6.5 万维网 选择 19.webp]]

> [!success]- 答案与解析
> **答案：** D
>
> **解析：** 无并行、非持续HTTP/1.0对HTML和7图分别耗2RTT，共16RTT。

## 关联

- 知识点：
- 题型：
