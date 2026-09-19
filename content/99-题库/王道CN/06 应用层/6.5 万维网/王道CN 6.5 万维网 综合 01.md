---
source: 王道CN
subject: CN
chapter: 06 应用层
section: 6.5 万维网
qtype: 综合
topic: []
answer_status: 已录入
tags: []
---
## 题干

【答案 P301】1. 在浏览器中输入 http://cskaoyan.com 并按回车，直到王道论坛的首页显示在其浏览器中，请问在此过程中，按照 TCP/IP 参考模型，从应用层到网络层都用到了哪些协议？

> [!note]- 原题截图
> ![[王道CN 6.5 万维网 综合 01.webp]]

> [!success]- 答案与解析
> **答案：**
>
> 从应用层到链路层会涉及：应用层HTTP（Web访问）和DNS（域名解析）；传输层TCP（HTTP可靠传输）与UDP（DNS）；网络层IP（分组与路由）、ICMP（差错报告）和ARP（把默认网关IP解析成MAC）；链路层以太网帧。典型封装关系为DNS报文→UDP数据报→IP数据报→以太网帧，以及HTTP报文→TCP报文段→IP数据报→以太网帧。
>
> **解析：** 一次Web访问通常先DNS解析，再建立TCP并发送HTTP；若目的不在本地网，还要ARP解析网关MAC。

## 关联

- 知识点：
- 题型：
