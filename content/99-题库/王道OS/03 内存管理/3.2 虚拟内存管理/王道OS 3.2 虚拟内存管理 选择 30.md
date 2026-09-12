---
source: 王道OS
subject: OS
chapter: 03 内存管理
section: 3.2 虚拟内存管理
qtype: 选择
topic: []
answer: B
answer_status: 已录入
tags: []
---
## 题干

30. 【P239】在配置了 TLB 的页式虚拟存储管理的系统中，假设访问内存需要  $1\mu s$，查询 TLB 需要  $0.2\mu s$。

已知 TLB 和内存的访问是串行的，请问在 TLB 命中率为 85% 和 50% 时，系统的平均访问时间分别是多少？（ ）

A. $1.5\mu s$,  $1.8\mu s$

B. $1.35\mu s$,  $1.7\mu s$

C. $1.6\mu s$,  $1.7\mu s$

D. $1.35\mu s$,  $1.8\mu s$

> [!note]- 原题截图
> ![[王道OS 3.2 虚拟内存管理 选择 30.png]]

> [!success]- 答案与解析
> **答案：** B
>
> **解析：** TLB访问0.2μs、内存1μs，按命中率85%和50%加权得1.35μs与1.7μs。

## 关联

- 知识点：
- 题型：
