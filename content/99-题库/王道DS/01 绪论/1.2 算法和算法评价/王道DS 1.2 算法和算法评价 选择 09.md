---
source: 王道DS
subject: DS
chapter: 01 绪论
section: 1.2 算法和算法评价
qtype: 选择
topic: []
answer: A
answer_status: 已录入
tags: []
---
## 题干

9. 下列程序段的时间复杂度为（ ）

```c
if (n >= 0) {
    for (int i = 0; i < n; i++)
        for (int j = 0; j < n; j++)
            printf("输入数据大于或等于零\n")
} else {
    for (int j = 0; j < n; j++)
        printf("输入数据小于零\n")
}
```

A. $O(n^2)$

B. $O(n)$

C. $O(1)$

D. $O(n\log_2n)$

> [!note]- 原题截图
> ![[王道DS 1.2 算法和算法评价 选择 09.webp]]

> [!success]- 答案与解析
> **答案：** A
>
> **解析：** 含条件分支时取各分支中最大的时间复杂度。$n\geq0$ 分支包含两重各执行 $n$ 次的循环，复杂度为 $O(n^2)$，因此整个程序段为 $O(n^2)$。

## 关联

- 知识点：
- 题型：
