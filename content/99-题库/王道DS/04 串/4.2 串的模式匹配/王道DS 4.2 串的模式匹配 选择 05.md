---
source: 王道DS
subject: DS
chapter: 04 串
section: 4.2 串的模式匹配
qtype: 选择
topic: []
answer: B
answer_status: 已录入
tags: []
---
## 题干

5. 在 KMP 匹配中，用 `next` 数组存放模式串的部分匹配信息。

当模式串位 $j$ 与主串位 $i$ 比较时，两个字符不相等，则 $i$ 的位移方式是（ ）。

A. `i=next[i]`

B. `i` 不变

C. `i=0`

D. `i=i+1`

> [!note]- 原题截图
> ![[王道DS 4.2 串的模式匹配 选择 05.webp]]

> [!success]- 答案与解析
> **答案：** B
>
> **解析：** KMP 的核心是主串指针不回溯；字符失配时 i 保持不变，只更新 j。

## 关联

- 知识点：
- 题型：
