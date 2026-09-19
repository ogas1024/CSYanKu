---
source: 王道CN
subject: CN
chapter: 01 计算机网络体系结构
section: 1.1 计算机网络概述
qtype: 选择
topic: []
answer: B
answer_status: 已录入
tags: []
---
## 题干

17. 【2025 统考真题】某网络拓扑及各链路带宽如下图所示。

网络按电路交换方式运行时，主机 H1 与 H2 建立一条带宽为 10Mb/s 的电路，建立电路时间为 $32\,\mu\mathrm{s}$；

按分组交换方式运行时，分组长度为 400B，忽略分组首部开销。

现 H1 向 H2 发送一个 2MB（$1\mathrm{M}=10^6$）的文件，分别采用电路交换、报文交换、分组交换方式时，H2 至少需要 $T_{\mathrm{CS}}$、$T_{\mathrm{MS}}$、$T_{\mathrm{PS}}$ 时间才能接收到全部文件内容，则 $T_{\mathrm{CS}}$、$T_{\mathrm{MS}}$、$T_{\mathrm{PS}}$ 满足的关系是（）。

![[王道CN 1.1 计算机网络概述 选择 17-fig1.webp]]

A. $T_{\mathrm{CS}}>T_{\mathrm{MS}}>T_{\mathrm{PS}}$

B. $T_{\mathrm{MS}}>T_{\mathrm{PS}}>T_{\mathrm{CS}}$

C. $T_{\mathrm{MS}}>T_{\mathrm{CS}}>T_{\mathrm{PS}}$

D. $T_{\mathrm{PS}}>T_{\mathrm{MS}}>T_{\mathrm{CS}}$

> [!note]- 原题截图
> ![[王道CN 1.1 计算机网络概述 选择 17.webp]]

> [!success]- 答案与解析
> **答案：** B
>
> **解析：** 电路交换约1.600032s，分组流水约1.6352s，报文存储转发约1.776s，故报文交换最慢。

## 关联

- 知识点：
- 题型：
