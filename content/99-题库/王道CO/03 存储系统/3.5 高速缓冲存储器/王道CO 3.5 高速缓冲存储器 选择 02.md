---
source: 王道CO
subject: CO
chapter: 03 存储系统
section: 3.5 高速缓冲存储器
qtype: 选择
topic: []
answer: C
answer_status: 已录入
tags: []
---
## 题干

2. 【P123】访问 Cache 系统失效时，通常不仅主存向 CPU 传送信息，同时还需要将信息写入 Cache，在此过程中传送和写入信息的数据宽度各为（）

A. 块、页

B. 字、字

C. 字、块

D. 块、块

> [!note]- 原题截图
> ![[王道CO 3.5 高速缓冲存储器 选择 02.webp]]

> [!success]- 答案与解析
> **答案：** C
>
> **解析：** CPU 与 Cache 之间通常按字交换，Cache 与主存之间按块交换；Cache 缺失时会把包含所需字的整个主存块调入 Cache。

## 关联

- 知识点：
- 题型：
