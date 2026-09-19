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

17. 【2022 统考真题】下列程序段的时间复杂度是（ ）。

```cpp
int sum = 0;
for (int i = 1; i < n; i *= 2)
    for (int j = 0; j < i; j++)
        sum++;
```

A. $O(\log_2 n)$

B. $O(n)$

C. $O(n\log_2 n)$

D. $O(n^2)$

> [!note]- 原题截图
> ![[王道DS 1.2 算法和算法评价 选择 17.webp]]

> [!success]- 答案与解析
> **答案：** B
>
> **解析：** 外层循环中的 $i$ 依次为 $1,2,4,\ldots,2^t$；相应内层执行次数之和为 $1+2+4+\cdots+2^t=2^{t+1}-1$。退出时 $2^t<n\leq2^{t+1}$，故总次数与 $n$ 同阶，为 $O(n)$。

## 关联

- 知识点：
- 题型：
