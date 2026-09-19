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

【答案 P264】11. 假定 TCP 最大报文段的长度是 1KB，拥塞窗口被置为 18KB，并且发生了超时事件。

若接着的 4 次迸发量传输都是成功的，则该窗口将是多大？

> [!note]- 原题截图
> ![[王道CN 5.3 TCP 综合 11.webp]]

> [!success]- 答案与解析
> **答案：**
>
> 超时后ssthresh设为当前cwnd的一半，即9KB，cwnd重置为1MSS=1KB。随后4次成功迸发量为1、2、4、8个MSS；第四次成功后cwnd增长到门限9KB。因此窗口为9KB。
>
> **解析：** 慢开始按成功确认指数增长，直到达到超时后设置的门限。

## 关联

- 知识点：
- 题型：
