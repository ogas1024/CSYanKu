---
source: 王道CN
subject: CN
chapter: 05 传输层
section: 5.3 TCP
qtype: 选择
topic: []
answer: A
answer_status: 已录入
tags: []
---
## 题干

15. TCP 在 40Gb/s 的线路上传送数据，若 TCP 充分利用了线路的带宽，则经过（）后，TCP 会发生序号绕回（使用了之前用过的字节序号，已知 $\frac{2^{32}}{5\times10^{9}}=0.859$）

A. 859ms

B. 85.9ms

C. 8.59ms

D. 0.859 ms

> [!note]- 原题截图
> ![[王道CN 5.3 TCP 选择 15.webp]]

> [!success]- 答案与解析
> **答案：** A
>
> **解析：** 40Gb/s等于5×10^9B/s，32位序号空间耗尽时间为2^32/(5×10^9)≈0.859s。

## 关联

- 知识点：
- 题型：
