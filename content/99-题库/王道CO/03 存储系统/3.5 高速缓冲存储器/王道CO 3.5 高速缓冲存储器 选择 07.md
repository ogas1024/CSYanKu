---
source: 王道CO
subject: CO
chapter: 03 存储系统
section: 3.5 高速缓冲存储器
qtype: 选择
topic: []
answer: B
answer_status: 已录入
tags: []
---
## 题干

7. 【P123】对于下列代码，以下哪种变化将使其具有更好的空间局部性（）

```c
int i, j, k, sum = 0;
for (i = 0; i < n; i++)
    for (j = 0; j < n; j++)
        for (k = 0; k < n; k++)
            sum += a[k][j][i];
```

A. 将第 2 行与第 3 行互换

B. 将第 2 行与第 4 行互换

C. 将第 5 行改为 sum+=a[i][k][j];

D. 将第 5 行改为 sum+=a[j][i][k];

> [!note]- 原题截图
> ![[王道CO 3.5 高速缓冲存储器 选择 07.png]]

> [!success]- 答案与解析
> **答案：** B
>
> **解析：** C 语言二维数组按行优先存放。交换内外层循环后可按行连续访问，利用空间局部性，降低 Cache 缺失率。

## 关联

- 知识点：
- 题型：
