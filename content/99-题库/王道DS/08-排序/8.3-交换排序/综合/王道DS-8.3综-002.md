---
tags: [题目/综合, 王道DS, DS/08-排序/03-交换排序]
---
## 题干

2. 试编写一个算法，使之能够在数组 $L[1\ldots n]$ 中找出第 $k$ 小的元素（即从小到大排序后处于第 $k$ 个位置的元素）。

> [!note]- 原题截图
> ![[王道DS-8.3综-002.png]]

> [!success]- 答案与解析
> **答案：**
>
> 可使用快速选择：对当前区间作一次快速排序式划分，设枢轴最终下标为 `p`。若 `p==k-1`，枢轴就是第 k 小元素；若 `p>k-1`，只在左区间继续；否则只在右区间继续。
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
> int kthSmallest(int a[], int n, int k) {
>     int low = 0, high = n - 1;
>     while (low <= high) {
>         int p = partition(a, low, high);
>         if (p == k - 1) return a[p];
>         if (p > k - 1) high = p - 1;
>         else low = p + 1;
>     }
>     throw "invalid k";
> }
> ```
>
> 平均时间复杂度为 **$O(n)$**，最坏时间复杂度为 **$O(n^2)$**；迭代实现的辅助空间复杂度为 **$O(1)$**。
>
> **解析：** 每次划分只继续处理可能包含第 k 小元素的一侧，不必把整个数组排好。平均情况下待处理区间按比例缩小，工作量形成 $n+n/2+n/4+...$，总量为线性级。

## 关联

- 知识点：
- 题型：
