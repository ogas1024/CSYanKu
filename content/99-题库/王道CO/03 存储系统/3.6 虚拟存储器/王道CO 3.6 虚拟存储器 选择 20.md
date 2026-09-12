---
source: 王道CO
subject: CO
chapter: 03 存储系统
section: 3.6 虚拟存储器
qtype: 选择
topic: []
answer: B
answer_status: 已录入
tags: []
---
## 题干

20. 【P143】【2024 统考真题】下列事件中,不是在 MMU 地址转换过程中检测的是（）

A. 访问越权

B. Cache 缺失

C. 页面缺失

D. TLB 缺失

> [!note]- 原题截图
> ![[王道CO 3.6 虚拟存储器 选择 20.png]]

> [!success]- 答案与解析
> **答案：** B
>
> **解析：** MMU 在地址转换时检查页表项的访问权限；先查 TLB，TLB 缺失再查页表，页表也无记录才缺页。Cache 是得到物理地址后才访问的，故 B 错。

## 关联

- 知识点：
- 题型：
