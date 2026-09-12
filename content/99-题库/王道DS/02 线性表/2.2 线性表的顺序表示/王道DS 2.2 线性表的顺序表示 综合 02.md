---
source: 王道DS
subject: DS
chapter: 02 线性表
section: 2.2 线性表的顺序表示
qtype: 综合
topic: []
answer_status: 已录入
tags: []
---
## 题干

2. 设计一个高效算法，将顺序表 $L$ 的所有元素逆置，要求算法的空间复杂度为 $O(1)$。

> [!note]- 原题截图
> ![[王道DS 2.2 线性表的顺序表示 综合 02.png]]

> [!success]- 答案与解析
> **答案：**
>
> 只扫描顺序表的前半部分。对每个 $0\leq i<L.length/2$，交换 `L.data[i]` 与 `L.data[L.length-i-1]`。
>
> ```cpp
> for (int i = 0; i < L.length / 2; ++i)
>     swap(L.data[i], L.data[L.length - i - 1]);
> ```
>
> 时间复杂度为 $O(n)$，空间复杂度为 $O(1)$。
>
> **解析：** 首尾对应元素原地交换即可完成逆置，只需要一个临时变量，不需要额外数组。

## 关联

- 知识点：
- 题型：
