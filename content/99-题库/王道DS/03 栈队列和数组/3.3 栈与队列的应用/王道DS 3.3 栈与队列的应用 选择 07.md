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

7. 设有如下递归函数，在 `func(func(5))` 的执行过程中，第 4 个被执行的 `func` 函数是（ ）。

```cpp
int func(int x)
{
    if (x <= 3) return 2;
    else return func(x - 2) + func(x - 4);
}
```

A. `func(2)`

B. `func(3)`

C. `func(4)`

D. `func(5)`

> [!note]- 原题截图
> ![[王道DS 3.3 栈与队列的应用 选择 07.png]]

> [!success]- 答案与解析
> **答案：** C
>
> **解析：** 执行 `func(5)` 时依次调用 `func(5)`、`func(3)`、`func(1)`，得到 4；随后外层调用 `func(4)`，因而第 4 个被执行的是 `func(4)`。

## 关联

- 知识点：
- 题型：
