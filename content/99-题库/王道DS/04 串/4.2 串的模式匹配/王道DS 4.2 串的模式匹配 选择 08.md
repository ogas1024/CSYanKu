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

8. 设主串 $S=\text{‘aabaaaba’}$，模式串 $T=\text{‘aaab’}$，采用改进后的 KMP 算法进行模式匹配。

到匹配成功时为止，在匹配过程中进行的单个字符间的比较次数是（ ）。

A. 9

B. 8

C. 7

D. 6

> [!note]- 原题截图
> ![[王道DS 4.2 串的模式匹配 选择 08.png]]

> [!success]- 答案与解析
> **答案：** C
>
> **解析：** 改进后 `aaab` 的 `nextval=(0,0,0,3)`。第一趟比较 3 次后直接滑到下一有效位置，第二趟比较 4 次成功，共 7 次。

## 关联

- 知识点：
- 题型：
