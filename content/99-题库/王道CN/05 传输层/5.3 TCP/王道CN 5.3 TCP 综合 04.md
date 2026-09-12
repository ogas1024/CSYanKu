---
source: 王道CN
subject: CN
chapter: 05 传输层
section: 5.3 TCP
qtype: 综合
topic: []
answer_status: 已录入
tags: []
---
## 题干

【答案 P263】4. 设 TCP 发送窗口的最大尺寸为 64KB，网络的平均往返时间为 20ms，问 TCP 所能得到的最大数据传输速率是多少？（只考虑单向传输，且假设信道带宽不受限）

> [!note]- 原题截图
> ![[王道CN 5.3 TCP 综合 04.png]]

> [!success]- 答案与解析
> **答案：**
>
> 最大速率为窗口大小除以RTT：64×1024×8/(20×10⁻³)≈26.2Mb/s。
>
> **解析：** 每个RTT最多发送一个64KB窗口的数据。

## 关联

- 知识点：
- 题型：
