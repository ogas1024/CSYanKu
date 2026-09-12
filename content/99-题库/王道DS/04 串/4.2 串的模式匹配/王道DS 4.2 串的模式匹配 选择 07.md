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

7. 设主串 $S=\text{‘aabaaaba’}$，模式串 $T=\text{‘aaab’}$，采用 KMP 算法进行模式匹配。

到匹配成功时为止，在匹配过程中进行的单个字符间的比较次数是（ ）。

A. 10

B. 9

C. 8

D. 7

> [!note]- 原题截图
> ![[王道DS 4.2 串的模式匹配 选择 07.png]]

> [!success]- 答案与解析
> **答案：** B
>
> **解析：** 对 `aaab` 有 `next=(0,1,2,3)`。四趟匹配的字符比较次数依次为 3、1、1、4，共 9 次。

## 关联

- 知识点：
- 题型：
