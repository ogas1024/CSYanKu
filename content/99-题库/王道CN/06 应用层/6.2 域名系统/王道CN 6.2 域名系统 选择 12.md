---
source: 王道CN
subject: CN
chapter: 06 应用层
section: 6.2 域名系统
qtype: 选择
topic: []
answer: C
answer_status: 已录入
tags: []
---
## 题干

12. （2016 统考真题）假设所有域名服务器均采用迭代查询方式进行域名解析。

当主机访问规范域名为 www.abc.xyz.com 的网站时，本地域名服务器在完成该域名解析的过程中，可能发出 DNS 查询的最少和最多次数分别是（）

A. 0,3

B. 1,3

C. 0,4

D. 1,4

> [!note]- 原题截图
> ![[王道CN 6.2 域名系统 选择 12.png]]

> [!success]- 答案与解析
> **答案：** C
>
> **解析：** 缓存命中时0次；最坏迭代查询根、com、xyz.com和abc.xyz.com四级服务器，共4次。

## 关联

- 知识点：
- 题型：
