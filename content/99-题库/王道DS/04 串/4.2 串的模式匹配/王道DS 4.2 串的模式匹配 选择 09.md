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

9. KMP 算法使用 `nextval` 数组进行模式匹配，模式串为 $S=\text{‘ababaaa’}$。

当主串中的某字符与 $S$ 中的第 6 个字符失配时，$S$ 向右滑动的距离是（ ）。

A. 1

B. 2

C. 3

D. 4

> [!note]- 原题截图
> ![[王道DS 4.2 串的模式匹配 选择 09.webp]]

> [!success]- 答案与解析
> **答案：** B
>
> **解析：** 对模式串 `ababaaa` 计算 `nextval`，第 6 个字符失配时从 j=5 回退到 `nextval[5]=3`（下标从 0 起算），模式串右移 `5-3=2`。

## 关联

- 知识点：
- 题型：
