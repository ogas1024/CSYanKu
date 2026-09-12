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

3. 对长度为 $n$ 的顺序表 $L$，编写一个时间复杂度为 $O(n)$、空间复杂度为 $O(1)$ 的算法，该算法删除顺序表中所有值为 $x$ 的数据元素。

> [!note]- 原题截图
> ![[王道DS 2.2 线性表的顺序表示 综合 03.png]]

> [!success]- 答案与解析
> **答案：**
>
> 用下标 `k` 记录已经保留的非 `x` 元素个数。顺序扫描原表，遇到不等于 `x` 的元素就写入 `L.data[k++]`；扫描结束后令 `L.length = k`。
>
> ```cpp
> int k = 0;
> for (int i = 0; i < L.length; ++i)
>     if (L.data[i] != x) L.data[k++] = L.data[i];
> L.length = k;
> ```
>
> 时间复杂度为 $O(n)$，空间复杂度为 $O(1)$。
>
> **解析：** 这相当于在原数组上稳定压缩所有非 `x` 元素，每个元素至多读取和写入一次。

## 关联

- 知识点：
- 题型：
