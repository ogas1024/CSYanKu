---
source: 王道CN
subject: CN
chapter: 06 应用层
section: 6.2 域名系统
qtype: 选择
topic: []
answer: D
answer_status: 已录入
tags: []
---
## 题干

14. （2020 统考真题）假设下图所示网络中的本地域名服务器只提供递归查询服务，其他域名服务器均只提供迭代查询服务；

局域网内主机访问 Internet 上各服务器的往返时间（RTT）均为 10ms，忽略其他各种时延。

若主机 H 通过超链接 http://www.abc.com/index.html 请求浏览纯文本 Web 页面 index.html，则从单击超链接开始到浏览器接收到 index.html 页面为止，所需的最短时间与最长时间分别是（）

![[王道CN 6.2 域名系统 选择 14-fig2.jpg]]

A. 10ms, 40ms

B. 10ms, 50ms

C. 20ms, 40ms

D. 20ms, 50ms

> [!note]- 原题截图
> ![[王道CN 6.2 域名系统 选择 14.png]]

> [!success]- 答案与解析
> **答案：** D
>
> **解析：** 缓存命中时仅TCP/HTTP需2RTT=20ms；最坏DNS迭代3RTT再加2RTT，共50ms。

## 关联

- 知识点：
- 题型：
