---
source: 王道CN
subject: CN
chapter: 06 应用层
section: 6.5 万维网
qtype: 选择
topic: []
answer: C
answer_status: 已录入
tags: []
---
## 题干

13. 主机通过超链接 http://www.cskaoyan.com/index.html 请求浏览 Web 页 index.html，若浏览器使用流水线方式的 HTTP/1.1 协议，该 Web 页引用了同一网站上的 7 个小图像文件，假设主机到本地域名服务器和互联网上各服务器的往返时延均为 1RTT。

本地域名服务器只提供递归查询服务，其他域名服务器只提供迭代查询服务，忽略其他所有时延，则从点击超链接开始到浏览器接收到所有内容为止，所需的往返时间 RTT 数最多是（）

A. 5

B. 6

C. 7

D. 8

> [!note]- 原题截图
> ![[王道CN 6.5 万维网 选择 13.webp]]

> [!success]- 答案与解析
> **答案：** C
>
> **解析：** DNS最坏4RTT，随后TCP建连、取HTML和流水线取图3RTT，总计最多7RTT。

## 关联

- 知识点：
- 题型：
