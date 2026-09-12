---
source: 王道CN
subject: CN
chapter: 05 传输层
section: 5.2 UDP
qtype: 选择
topic: []
answer: B
answer_status: 已录入
tags: []
---
## 题干

2. 下列关于 UDP 的描述中，错误的是（）

A. UDP 报头主要包括端口号、长度、检验和等字段

B. UDP 长度字段是 UDP 数据报的长度，包括伪首部的长度

C. UDP 检验和对伪首部、UDP 报文头及应用层数据进行检验

D. 伪首部包括 IP 分组报头的一部分

> [!note]- 原题截图
> ![[王道CN 5.2 UDP 选择 02.png]]

> [!success]- 答案与解析
> **答案：** B
>
> **解析：** UDP伪首部只用于校验和计算，不计入UDP长度，也不向下传输；其中IP地址来自IP首部。

## 关联

- 知识点：
- 题型：
