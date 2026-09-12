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

17. 【P124】对于由高速缓存、主存、硬盘构成的三级存储体系，CPU 直接根据（）进行访问。

A. 高速缓存地址

B. 虚拟地址

C. 主存物理地址

D. 磁盘地址

> [!note]- 原题截图
> ![[王道CO 3.5 高速缓冲存储器 选择 17.png]]

> [!success]- 答案与解析
> **答案：** C
>
> **解析：** CPU 访问 Cache 时提供可用于 Cache 检索的主存地址；Cache 缺失后由存储层次从主存取块，不会由 CPU 直接访问磁盘。

## 关联

- 知识点：
- 题型：
