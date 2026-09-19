---
source: 王道DS
subject: DS
chapter: 03 栈队列和数组
section: 3.1 栈
qtype: 选择
topic: []
answer: C
answer_status: 已录入
tags: []
---
## 题干

19. 某栈的输入序列为 $a,b,c,d$，下面的 4 个序列中，不可能为其输出序列的是（ ）。

A. $a,b,c,d$

B. $c,b,d,a$

C. $d,c,a,b$

D. $a,c,b,d$

> [!note]- 原题截图
> ![[王道DS 3.1 栈 选择 19.webp]]

> [!success]- 答案与解析
> **答案：** C
>
> **解析：** `d,c` 先出栈后，栈中仍有自顶向下的 `b,a`，只能先出 `b` 再出 `a`，因而 `d,c,a,b` 不可能。

## 关联

- 知识点：
- 题型：
