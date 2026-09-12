---
source: 王道DS
subject: DS
chapter: 04 串
section: 4.2 串的模式匹配
qtype: 选择
topic: []
answer: C
answer_status: 已录入
tags: []
---
## 题干

10. 【2015 统考真题】已知字符串 $s$ 为 ‘abaabaabacacaabaabcc’，模式串 $t$ 为 ‘abaabc’。

采用 KMP 算法进行匹配，第一次出现“失配”（$s[i]\ne t[j]$）时，$i=j=5$，则下次开始匹配时，$i$ 和 $j$ 的值分别是（ ）。

A. $i=1,\ j=0$

B. $i=5,\ j=0$

C. $i=5,\ j=2$

D. $i=6,\ j=2$

> [!note]- 原题截图
> ![[王道DS 4.2 串的模式匹配 选择 10.png]]

> [!success]- 答案与解析
> **答案：** C
>
> **解析：** 题目的 i、j 从 0 起算。模式串 `abaabc` 的 `next[5]=2`；i=j=5 失配后主串指针 i 不变，j 回退到 2。

## 关联

- 知识点：
- 题型：
