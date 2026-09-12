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

12. 【2011 统考真题】设 $n$ 是描述问题规模的非负整数，下列程序段的时间复杂度是（ ）。

```c
x = 2;
while (x < n / 2)
    x = 2 * x;
```

A. $O(\log_2n)$

B. $O(n)$

C. $O(n\log_2n)$

D. $O(n^2)$

> [!note]- 原题截图
> ![[王道DS 1.2 算法和算法评价 选择 12.png]]

> [!success]- 答案与解析
> **答案：** A
>
> **解析：** $x$ 初值为 2，每轮乘 2。执行 $t$ 次后 $x=2^{t+1}$；由循环条件可得 $t<\log_2 n-2$，因此时间复杂度为 $O(\log_2 n)$。

## 关联

- 知识点：
- 题型：
