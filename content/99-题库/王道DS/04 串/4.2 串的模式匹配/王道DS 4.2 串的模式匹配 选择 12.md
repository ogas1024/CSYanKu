---
source: 王道DS
subject: DS
chapter: 04 串
section: 4.2 串的模式匹配
qtype: 选择
topic: []
answer: A
answer_status: 已录入
tags: []
---
## 题干

12. 【2024 统考真题】KMP 算法使用修正后的 `next` 数组进行模式匹配，模式串为 $S=\text{‘aabaab’}$。

当主串的某个字符与 $S$ 的某个字符失配时，$S$ 向右滑动的最长距离是（ ）。

A. 5

B. 4

C. 3

D. 2

> [!note]- 原题截图
> ![[王道DS 4.2 串的模式匹配 选择 12.webp]]

> [!success]- 答案与解析
> **答案：** A
>
> **解析：** 位序从 0 开始，对 `aabaab` 求修正的 `nextval` 数组，在 `S[j]` 处失配时模式串右移 `j-nextval[j]`（$0\le j\le5$），最大值在 j=4 时为 5（按 1 起计即第 5 个字符处失配）。

## 关联

- 知识点：
- 题型：
- 真题：[[408真题 2024 T06]]
