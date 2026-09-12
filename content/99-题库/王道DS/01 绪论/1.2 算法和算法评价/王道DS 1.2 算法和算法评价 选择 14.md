---
source: 王道DS
subject: DS
chapter: 01 绪论
section: 1.2 算法和算法评价
qtype: 选择
topic: []
answer: C
answer_status: 已录入
tags: []
---
## 题干

14. 【2014 统考真题】下列程序段的时间复杂度是（ ）。

```c
count = 0;
for (k = 1; k <= n; k *= 2)
    for (j = 1; j <= n; j++)
        count++;
```

A. $O(\log_2n)$

B. $O(n)$

C. $O(n\log_2n)$

D. $O(n^2)$

> [!note]- 原题截图
> ![[王道DS 1.2 算法和算法评价 选择 14.png]]

> [!success]- 答案与解析
> **答案：** C
>
> **解析：** 外层变量 $k$ 每次乘 2，执行 $O(\log_2 n)$ 次；每次外层循环中，内层执行 $n$ 次。因此总执行次数为 $n(\log_2 n+1)$，复杂度为 $O(n\log_2 n)$。

## 关联

- 知识点：
- 题型：
