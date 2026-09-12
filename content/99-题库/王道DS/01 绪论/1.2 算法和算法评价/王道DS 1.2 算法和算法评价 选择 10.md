---
source: 王道DS
subject: DS
chapter: 01 绪论
section: 1.2 算法和算法评价
qtype: 选择
topic: []
answer: A
answer_status: 已录入
tags: []
---
## 题干

10. 下列算法中加下划线的语句的执行次数为（ ）。

<pre><code>int m = 0, i, j;
for (i = 1; i <= n; i++)
    for (j = 1; j <= 2 * i; j++)
        <u>m++;</u></code></pre>

A. $n(n+1)$

B. $n$

C. $n+1$

D. $n^2$

> [!note]- 原题截图
> ![[王道DS 1.2 算法和算法评价 选择 10.png]]

> [!success]- 答案与解析
> **答案：** A
>
> **解析：** 当外层变量为 $i$ 时，内层执行 $2i$ 次，所以 `m++` 的总执行次数为 $\sum_{i=1}^{n}2i=n(n+1)$。

## 关联

- 知识点：
- 题型：
