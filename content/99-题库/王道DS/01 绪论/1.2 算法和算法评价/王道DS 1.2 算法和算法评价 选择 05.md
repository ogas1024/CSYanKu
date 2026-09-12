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

5. 下列关于时间复杂度的函数中，时间复杂度最小的是（ ）。

A. $T_1(n)=n\log_2n+5000n$

B. $T_2(n)=n^2-8000n$

C. $T_3(n)=n\log_2n-6000n$

D. $T_4(n)=20000\log_2n$

> [!note]- 原题截图
> ![[王道DS 1.2 算法和算法评价 选择 05.png]]

> [!success]- 答案与解析
> **答案：** D
>
> **解析：** 只比较最高阶项：A、C 均为 $O(n\log_2 n)$，B 为 $O(n^2)$，D 为 $O(\log_2 n)$，因此 D 的增长率最小。

## 关联

- 知识点：
- 题型：
