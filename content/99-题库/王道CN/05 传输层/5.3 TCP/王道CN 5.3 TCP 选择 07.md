---
source: 王道CN
subject: CN
chapter: 05 传输层
section: 5.3 TCP
qtype: 选择
topic: []
answer: D
answer_status: 已录入
tags: []
---
## 题干

7. 下列关于 TCP 报头格式的描述中，错误的是（）。

A. 报头长度为 $20\sim60\,\mathrm{B}$，其中固定部分为 $20\,\mathrm{B}$

B. 端口号字段依次表示源端口号与目的端口号

C. 报头长度总是 4 的倍数个字节

D. TCP 检验和伪首部中 IP 分组头的协议字段为 17

> [!note]- 原题截图
> ![[王道CN 5.3 TCP 选择 07.webp]]

> [!success]- 答案与解析
> **答案：** D
>
> **解析：** IP协议号6代表TCP、17代表UDP，选项D将两者颠倒；TCP首部长度为4B整数倍且最大60B。

## 关联

- 知识点：
- 题型：
