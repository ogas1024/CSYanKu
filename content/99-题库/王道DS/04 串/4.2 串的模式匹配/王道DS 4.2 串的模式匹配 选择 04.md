---
source: 王道DS
subject: DS
chapter: 04 串
section: 4.2 串的模式匹配
qtype: 选择
topic: []
answer: D
answer_status: 已录入
tags: []
---
## 题干

4. 在 KMP 算法中，用 `next` 数组存放模式串的部分匹配信息。

当模式串位 $j$ 与主串位 $i$ 比较时，两个字符不相等，则 $j$ 的位移方式是（ ）。

A. `j=0`

B. `j=j+1`

C. `j` 不变

D. `j=next[j]`

> [!note]- 原题截图
> ![[王道DS 4.2 串的模式匹配 选择 04.webp]]

> [!success]- 答案与解析
> **答案：** D
>
> **解析：** KMP 在主串第 i 个字符与模式串第 j 个字符失配时，主串指针不变，模式串指针回退到 `next[j]`。

## 关联

- 知识点：
- 题型：
