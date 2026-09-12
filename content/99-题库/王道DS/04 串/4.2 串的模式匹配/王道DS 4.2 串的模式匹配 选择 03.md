---
source: 王道DS
subject: DS
chapter: 04 串
section: 4.2 串的模式匹配
qtype: 选择
topic: []
answer: C、D
answer_status: 已录入
tags: []
---
## 题干

3. 设主串的长度为 $n$，子串的长度为 $m$，则简单的模式匹配算法的时间复杂度为（ ），KMP 算法的时间复杂度为（ ）。

A. $O(m)$

B. $O(n)$

C. $O(mn)$

D. $O(m+n)$

> [!note]- 原题截图
> ![[王道DS 4.2 串的模式匹配 选择 03.png]]

> [!success]- 答案与解析
> **答案：** C、D
>
> **解析：** 简单模式匹配在最坏情况下对每个起点比较至多 m 个字符，时间复杂度为 `O(mn)`；KMP 为 `O(m+n)`。

## 关联

- 知识点：
- 题型：
