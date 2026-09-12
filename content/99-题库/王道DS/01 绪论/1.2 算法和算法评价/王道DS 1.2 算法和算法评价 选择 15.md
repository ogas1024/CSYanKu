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

15. 【2017 统考真题】下列函数的时间复杂度是（ ）。

```cpp
int func(int n)
{
    int i = 0, sum = 0;
    while (sum < n)
        sum += ++i;
    return i;
}
```

A. $O(\log_2 n)$

B. $O(n^{1/2})$

C. $O(n)$

D. $O(n\log_2 n)$

> [!note]- 原题截图
> ![[王道DS 1.2 算法和算法评价 选择 15.png]]

> [!success]- 答案与解析
> **答案：** B
>
> **解析：** 循环执行 $i$ 次后，`sum` 为 $1+2+\cdots+i=i(i+1)/2$。退出条件要求该和达到 $n$，所以 $i$ 与 $\sqrt n$ 同阶，时间复杂度为 $O(n^{1/2})$。

## 关联

- 知识点：
- 题型：
