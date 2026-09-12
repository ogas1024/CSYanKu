---
source: 王道DS
subject: DS
chapter: 08 排序
section: 8.3 交换排序
qtype: 综合
topic: []
answer_status: 已录入
tags: []
---
## 题干

4. 【2016 统考真题】已知由 $n$（$n\geq 2$）个正整数构成的集合 $A=\{a_k\mid 0\leq k<n\}$，将其划分为两个不相交的子集 $A_1$ 和 $A_2$，元素个数分别是 $n_1$ 和 $n_2$，$A_1$ 和 $A_2$ 中的元素之和分别为 $S_1$ 和 $S_2$。

设计一个尽可能高效的划分算法，满足 $|n_1-n_2|$ 最小且 $|S_1-S_2|$ 最大。

要求：

- **（1）** 给出算法的基本设计思想。
- **（2）** 根据设计思想，采用 C 或 C++ 语言描述算法，关键之处给出注释。
- **（3）** 说明你所设计算法的平均时间复杂度和空间复杂度。

> [!note]- 原题截图
> ![[王道DS 8.3 交换排序 综合 04.png]]

> [!success]- 答案与解析
> **答案：**
>
> **（1）设计思想**
>
> 要使 $|n_1-n_2|$ 最小，应令 $A_1$ 含较小的 $floor(n/2)$ 个元素，$A_2$ 含其余较大的元素。这样两组元素个数之差最小，同时 $S_2-S_1$ 最大。无需完整排序，只需用快速选择找到第 $floor(n/2)$ 小元素的边界。
>
> **（2）算法**
>
> ```cpp
> int partition(int a[], int low, int high) {
>     int pivot = a[low];
>     while (low < high) {
>         while (low < high && a[high] >= pivot) --high;
>         a[low] = a[high];
>         while (low < high && a[low] <= pivot) ++low;
>         a[high] = a[low];
>     }
>     a[low] = pivot;
>     return low;
> }
>
> long long setPartition(int a[], int n) {
>     int k = n / 2;                 // A1 的元素个数
>     int low = 0, high = n - 1;
>     while (true) {
>         int p = partition(a, low, high);
>         if (p == k - 1) break;     // 前 k 个元素即较小的一组
>         if (p < k - 1) low = p + 1;
>         else high = p - 1;
>     }
>
>     long long S1 = 0, S2 = 0;
>     for (int i = 0; i < k; ++i) S1 += a[i];
>     for (int i = k; i < n; ++i) S2 += a[i];
>     return S2 - S1;                // 正整数集合下即最大 |S1-S2|
> }
> ```
>
> 划分后取前 `k` 个元素为 $A_1$，其余元素为 $A_2$。
>
> **（3）复杂度**
>
> 快速选择的平均时间复杂度为 **$O(n)$**，求和仍为 $O(n)$；迭代实现的辅助空间复杂度为 **$O(1)$**。最坏时间复杂度为 $O(n^2)$。
>
> **解析：** 在两组人数尽量相等的前提下，交换论证可知：若较小组中存在比另一组某元素更大的数，交换它们会扩大两组和之差。因此极值划分必然由最小的一半与最大的一半组成。快速选择只确定这条秩边界，避免完整排序的 $O(n log n)$ 开销。

## 关联

- 知识点：
- 题型：
