---
source: 王道DS
subject: DS
chapter: 01 绪论
section: 1.2 算法和算法评价
qtype: 选择
topic: []
answer: D
answer_status: 已录入
tags: []
---
## 题干

8. 某个程序段如下：

```text
for (i = n - 1; i > 1; i--)
    for (j = 1; j < i; j++)
        if (A[j] > A[j+1])
            A[j] 与 A[j+1] 对换；
```

其中 $n$ 为正整数，则最后一行语句的频度在最坏情况下是（ ）。

A. $O(n)$

B. $O(n\log_2n)$

C. $O(n^3)$

D. $O(n^2)$

> [!note]- 原题截图
> ![[王道DS 1.2 算法和算法评价 选择 08.webp]]

> [!success]- 答案与解析
> **答案：** D
>
> **解析：** 最坏情况下相邻元素均为逆序，交换语句每次比较都会执行。其频度为 $\sum_{i=2}^{n-1}(i-1)=(n-2)(n-1)/2$，因此为 $O(n^2)$。

## 关联

- 知识点：
- 题型：
