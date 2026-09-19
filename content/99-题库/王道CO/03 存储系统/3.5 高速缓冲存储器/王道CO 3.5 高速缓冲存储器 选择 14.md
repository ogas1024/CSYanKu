---
source: 王道CO
subject: CO
chapter: 03 存储系统
section: 3.5 高速缓冲存储器
qtype: 选择
topic: []
answer: D
answer_status: 已录入
tags: []
---
## 题干

14. 【P124】某存储系统中，主存容量是 Cache 容量的 4096 倍，Cache 被分为 64 个块，采用直接映射方式、随机替换算法和全写法，则标记阵列（所有标记信息）的大小应为（）

A. $6 \times 4097$ bit

B. $64 \times 12$ bit

C. $6 \times 4096$ bit

D. $64 \times 13$ bit

> [!note]- 原题截图
> ![[王道CO 3.5 高速缓冲存储器 选择 14.webp]]

> [!success]- 答案与解析
> **答案：** D
>
> **解析：** 直接映射无需替换位，全写法无需脏位。主存容量是 Cache 的 4096 倍，标记 12 位，加 1 位有效位，64 行标记阵列为 $64*13$ 位。

## 关联

- 知识点：
- 题型：
