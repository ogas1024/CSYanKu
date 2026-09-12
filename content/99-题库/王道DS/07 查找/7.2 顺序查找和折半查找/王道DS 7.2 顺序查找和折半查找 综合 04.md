---
source: 王道DS
subject: DS
chapter: 07 查找
section: 7.2 顺序查找和折半查找
qtype: 综合
topic: []
answer_status: 已录入
tags: []
---
## 题干

4. 写出折半查找的递归算法。

初始调用时，`low` 为 1，`high` 为 `ST.length`。

> [!note]- 原题截图
> ![[王道DS 7.2 顺序查找和折半查找 综合 04.png]]

> [!success]- 答案与解析
> **答案：**
>
> ```c
> int BinSearchRec(SSTable ST, ElemType key, int low, int high) {
>     if (low > high) return 0;
>
>     int mid = (low + high) / 2;
>     if (key > ST.elem[mid])
>         return BinSearchRec(ST, key, mid + 1, high);
>     if (key < ST.elem[mid])
>         return BinSearchRec(ST, key, low, mid - 1);
>     return mid;
> }
> ```
>
> 初始调用为 `BinSearchRec(ST, key, 1, ST.length)`。时间复杂度为 $O(\log n)$，递归栈的额外空间复杂度为 $O(\log n)$。
>
> **解析：** 每次调用比较中间元素，再将问题规模缩小为原来的一半；`low > high` 是查找失败的递归出口。为使返回位置能逐层传回，两个递归分支必须写 `return`。

## 关联

- 知识点：
- 题型：
