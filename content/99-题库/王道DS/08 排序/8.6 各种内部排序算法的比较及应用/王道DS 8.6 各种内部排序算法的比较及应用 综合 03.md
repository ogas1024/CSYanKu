---
source: 王道DS
subject: DS
chapter: 08 排序
section: 8.6 各种内部排序算法的比较及应用
qtype: 综合
topic: []
answer_status: 已录入
tags: []
---
## 题干

3. 设有一个数组中存放了一个无序的关键字序列 $K_1,K_2,\cdots,K_n$。

现要求将 $K_n$ 放在将元素排序后的正确位置上，试编写实现该功能的算法，要求比较关键字的次数不超过 $n$。

> [!note]- 原题截图
> ![[王道DS 8.6 各种内部排序算法的比较及应用 综合 03.png]]

> [!success]- 答案与解析
> **答案：**
>
> 以最后一个元素 `K[n]` 为枢轴，执行一次快速排序的划分：
>
> ```c
> int Partition(ElemType K[], int n) {
>     int i = 1, j = n;
>     ElemType pivot = K[j];
>
>     while (i < j) {
>         while (i < j && K[i] <= pivot)
>             i++;
>         if (i < j)
>             K[j] = K[i];
>
>         while (i < j && K[j] >= pivot)
>             j--;
>         if (i < j)
>             K[i] = K[j];
>     }
>     K[i] = pivot;
>     return i;
> }
> ```
>
> 函数返回的位置 i 就是原末元素在整个序列排好序后的最终位置。
>
> **解析：** 划分结束时，枢轴左侧所有元素均不大于它，右侧所有元素均不小于它，因此枢轴已经处于最终有序位置，无须把其余两部分继续排好序。扫描指针只向中间移动，每个待考察元素至多与枢轴比较一次，满足比较次数不超过 n 的要求。

## 关联

- 知识点：
- 题型：
