---
tags: [题目/选择, 王道OS, OS/05-输入输出管理/01-I／O管理概述]
answer: B
year: 2017
---
## 题干

26. 【P319】【2017 统考真题】系统将数据从磁盘读到内存的过程包括以下操作：

① DMA 控制器发出中断请求　② 初始化 DMA 控制器并启动磁盘

③ 从磁盘传输一块数据到内存缓冲区　④ 执行“DMA 结束”中断服务程序

正确的执行顺序是（ ）

A. ③ $\rightarrow$ ① $\rightarrow$ ② $\rightarrow$ ④

B. ② $\rightarrow$ ③ $\rightarrow$ ① $\rightarrow$ ④

C. ② $\rightarrow$ ① $\rightarrow$ ③ $\rightarrow$ ④

D. ① $\rightarrow$ ② $\rightarrow$ ④ $\rightarrow$ ③

> [!note]- 原题截图
> ![[王道OS-5.1选-026.png]]

> [!success]- 答案与解析
> **答案：** B
>
> **解析：** DMA依次经历CPU初始化控制器与启动设备、控制器传输数据并申请中断、CPU执行结束中断服务，即②③①④。

## 关联

- 知识点：
- 题型：
