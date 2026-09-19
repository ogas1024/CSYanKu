---
source: 王道DS
subject: DS
chapter: 01 绪论
section: 1.2 算法和算法评价
qtype: 选择
topic: []
answer: B
answer_status: 已录入
tags: []
---
## 题干

13. 【2012 统考真题】求整数 $n$（$n\geq 0$）的阶乘的算法如下，其时间复杂度是（ ）。

```c
int fact(int n) {
    if (n <= 1) return 1;
    return n * fact(n - 1);
}
```

A. $O(\log_2n)$

B. $O(n)$

C. $O(n\log_2n)$

D. $O(n^2)$

> [!note]- 原题截图
> ![[王道DS 1.2 算法和算法评价 选择 13.webp]]

> [!success]- 答案与解析
> **答案：** B
>
> **解析：** 递归参数从 $n$ 每次减 1，直到 1，共有 $n$ 量级的递归调用；每层只执行常数次基本运算，所以总时间复杂度为 $O(n)$。

## 关联

- 知识点：
- 题型：
