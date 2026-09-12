---
source: 王道OS
subject: OS
chapter: 02 进程与线程
section: 2.3 同步与互斥
qtype: 综合
topic: []
answer_status: 已录入
tags: []
---
## 题干

在一个仓库中可以存放 A 和 B 两种产品，要求:

①每次只能存入一种产品。

②A 产品数量 - B 产品数量 < M，其中 M 是正整数。

③B 产品数量 - A 产品数量 <N，其中 N 是正整数。

假设仓库的容量是无限的，试用 P、V 操作描述产品 A 与产品 B 的入库过程。

> [!note]- 原题截图
> ![[王道OS 2.3 同步与互斥 综合 02.png]]

> [!success]- 答案与解析
> **答案：**
>
> 设 `Sa=M-1`、`Sb=N-1`，分别限制 A 相对 B、B 相对 A 的最大超前量；设 `mutex=1` 互斥访问仓库。
>
> - A：`P(Sa) → P(mutex) → A入库 → V(mutex) → V(Sb)`。
> - B：`P(Sb) → P(mutex) → B入库 → V(mutex) → V(Sa)`。
>
> **解析：** Sa、Sb把两类产品数量差限制在题给范围，mutex保证两进程不能同时修改仓库。

## 关联

- 知识点：
- 题型：
