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

18. 【2025 统考真题】下列程序段的时间复杂度是（ ）。

```cpp
int count = 0, i, j;
for (i = 1; i * i <= n; i++)
    for (j = 1; j <= i; j++)
        count++;
```

A. $O(\log_2 n)$

B. $O(n)$

C. $O(n\log_2 n)$

D. $O(n^2)$

> [!note]- 原题截图
> ![[王道DS 1.2 算法和算法评价 选择 18.webp]]

> [!success]- 答案与解析
> **答案：** B
>
> **解析：** 外层循环满足 $i^2\leq n$，所以 $i$ 最大约为 $\sqrt n$。内层在第 $i$ 轮执行 $i$ 次，总次数为 $1+2+\cdots+\lfloor\sqrt n\rfloor$，与 $n$ 同阶，因此为 $O(n)$。

## 关联

- 知识点：
- 题型：
