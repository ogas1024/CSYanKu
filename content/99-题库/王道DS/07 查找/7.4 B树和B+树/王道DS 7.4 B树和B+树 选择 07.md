---
source: 王道DS
subject: DS
chapter: 07 查找
section: 7.4 B树和B+树
qtype: 选择
topic: []
answer: D
answer_status: 已录入
tags: []
---
## 题干

7. 含有 $n$ 个非叶结点的 $m$ 阶 B 树中至少包含（ ）个关键字。

A. $n(m+1)$

B. $n$

C. $n(\lceil m/2\rceil-1)$

D. $(n-1)(\lceil m/2\rceil-1)+1$

> [!note]- 原题截图
> ![[王道DS 7.4 B树和B+树 选择 07.png]]

> [!success]- 答案与解析
> **答案：** D
>
> **解析：** 根结点至少含 1 个关键字，其余 $n-1$ 个非叶结点各至少含 $ceil(m/2)-1$ 个，故最少关键字数为 $(n-1)(ceil(m/2)-1)+1$。

## 关联

- 知识点：
- 题型：
