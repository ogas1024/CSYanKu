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

11. 下列函数代码的时间复杂度是（ ）。

```c
int Func(int n) {
    if (n == 1) return 1;
    else return 2 * Func(n / 2) + n;
}
```

A. $O(n)$

B. $O(n\log_2n)$

C. $O(\log_2n)$

D. $O(n^2)$

> [!note]- 原题截图
> ![[王道DS 1.2 算法和算法评价 选择 11.png]]

> [!success]- 答案与解析
> **答案：** C
>
> **解析：** 函数每次只递归调用一次 `Func(n/2)`；参数依次为 $n,n/2,n/4,\ldots,1$，递归深度为 $O(\log_2 n)$。乘以 2 只是对返回值的常数次运算，不会产生第二次递归调用。

## 关联

- 知识点：
- 题型：
