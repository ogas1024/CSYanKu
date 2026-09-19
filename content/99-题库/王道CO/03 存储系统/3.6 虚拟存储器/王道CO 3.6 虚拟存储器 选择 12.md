---
source: 王道CO
subject: CO
chapter: 03 存储系统
section: 3.6 虚拟存储器
qtype: 选择
topic: []
answer: D
answer_status: 已录入
tags: []
---
## 题干

12. 【P142】【2010 统考真题】下列命令组合的一次访存过程中，不可能发生的是（）

A. TLB 未命中，Cache 未命中，Page 未命中

B. TLB 未命中，Cache 命中，Page 命中

C. TLB 命中，Cache 未命中，Page 命中

D. TLB 命中，Cache 命中，Page 未命中

> [!note]- 原题截图
> ![[王道CO 3.6 虚拟存储器 选择 12.webp]]

> [!success]- 答案与解析
> **答案：** D
>
> **解析：** Cache 是主存数据的副本，TLB 是页表项的副本。TLB 命中则页必在主存，但对应数据不必在 Cache，因而“TLB 命中而页不命中”不可能。

## 关联

- 知识点：
- 题型：
