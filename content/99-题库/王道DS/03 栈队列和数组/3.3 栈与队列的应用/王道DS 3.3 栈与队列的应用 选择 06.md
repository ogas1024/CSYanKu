---
source: 王道DS
subject: DS
chapter: 03 栈队列和数组
section: 3.3 栈与队列的应用
qtype: 选择
topic: []
answer: C
answer_status: 已录入
tags: []
---
## 题干

6. 设有如下递归函数，则计算 `F(8)` 需要调用该递归函数的次数为（ ）。

```cpp
int F(int n)
{
    if (n <= 3) return 1;
    else return F(n - 2) + F(n - 4) + 1;
}
```

A. 7

B. 8

C. 9

D. 10

> [!note]- 原题截图
> ![[王道DS 3.3 栈与队列的应用 选择 06.png]]

> [!success]- 答案与解析
> **答案：** C
>
> **解析：** 展开 `F(8)` 的递归调用树：根调用 1 次，其下 `F(6)`、`F(4)` 及各自子调用总共构成 9 个函数结点，故调用 9 次。

## 关联

- 知识点：
- 题型：
