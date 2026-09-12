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

6. 下列算法的时间复杂度为（ ）。

```c
void fun(int n) {
    int i = 1;
    while (i <= n)
        i = i * 2;
}
```

A. $O(n)$

B. $O(n^2)$

C. $O(n\log_2n)$

D. $O(\log_2n)$

> [!note]- 原题截图
> ![[王道DS 1.2 算法和算法评价 选择 06.png]]

> [!success]- 答案与解析
> **答案：** D
>
> **解析：** 循环每执行一次就令 $i$ 乘 2。执行 $t$ 次后 $i=2^t$，退出时约有 $2^t>n$，故 $t$ 与 $\log_2 n$ 同阶，时间复杂度为 $O(\log_2 n)$。

## 关联

- 知识点：
- 题型：
