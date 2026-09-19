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

7. 下列算法的时间复杂度为（ ）。

```c
void fun(int n) {
    int i = 0;
    while (i * i * i <= n)
        i++;
}
```

A. $O(n)$

B. $O(n\log_2n)$

C. $O(\sqrt[3]{n})$

D. $O(\sqrt{n})$

> [!note]- 原题截图
> ![[王道DS 1.2 算法和算法评价 选择 07.webp]]

> [!success]- 答案与解析
> **答案：** C
>
> **解析：** 循环体 `i++` 使 $i$ 每次增加 1。循环执行 $t$ 次后 $i=t$，条件为 $t^3\leq n$，所以执行次数为 $O(\sqrt[3]{n})$。

## 关联

- 知识点：
- 题型：
