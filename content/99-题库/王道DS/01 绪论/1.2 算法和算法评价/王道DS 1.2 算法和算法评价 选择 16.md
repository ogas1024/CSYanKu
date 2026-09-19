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

16. 【2019 统考真题】设 $n$ 是描述问题规模的非负整数，下列程序段的时间复杂度是（ ）。

```cpp
x = 0;
while (n >= (x + 1) * (x + 1))
    x = x + 1;
```

A. $O(\log_2 n)$

B. $O(n^{1/2})$

C. $O(n)$

D. $O(n^2)$

> [!note]- 原题截图
> ![[王道DS 1.2 算法和算法评价 选择 16.webp]]

> [!success]- 答案与解析
> **答案：** B
>
> **解析：** 若第 $k$ 次判断后循环结束，则此时 $x=k-1$，并有 $k^2>n$，即 $k>\sqrt n$。循环次数与 $\sqrt n$ 同阶，所以时间复杂度为 $O(n^{1/2})$。

## 关联

- 知识点：
- 题型：
