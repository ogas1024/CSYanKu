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

3. 荷兰国旗问题：设有一个仅由红、白、蓝三种颜色的条块组成的条块序列，存储在一个顺序表中，请编写一个时间复杂度为 $O(n)$ 的算法，使得这些条块按红、白、蓝的顺序排好，即排成荷兰国旗图案。

请完成算法实现：

```c
typedef enum {RED, WHITE, BLUE} color; // 设置枚举数组

void Flag_Arrange(color a[], int n) { ... }
```

> [!note]- 原题截图
> ![[王道DS 8.3 交换排序 综合 03.png]]

> [!success]- 答案与解析
> **答案：**
>
> 设置三个指针：`i` 指向下一个应放红色的位置，`j` 扫描尚未分类的元素，`k` 指向下一个应放蓝色的位置。始终保持 `[0,i)` 全红、`[i,j)` 全白、`(k,n)` 全蓝。
>
> ```cpp
> typedef enum { RED, WHITE, BLUE } color;
>
> void Flag_Arrange(color a[], int n) {
>     int i = 0, j = 0, k = n - 1;
>     while (j <= k) {
>         switch (a[j]) {
>             case RED: {
>                 color t = a[i]; a[i] = a[j]; a[j] = t;
>                 ++i; ++j;
>                 break;
>             }
>             case WHITE:
>                 ++j;
>                 break;
>             case BLUE: {
>                 color t = a[j]; a[j] = a[k]; a[k] = t;
>                 --k;
>                 break;
>             }
>         }
>     }
> }
> ```
>
> 时间复杂度为 **$O(n)$**，辅助空间复杂度为 **$O(1)$**。
>
> **解析：** 遇红色时与前部边界交换，交换过来的元素来自已检查区，所以 `i`、`j` 可同时右移；遇蓝色时与尾部边界交换，交换过来的元素尚未分类，因此只左移 `k`，不能立即增加 `j`。

## 关联

- 知识点：
- 题型：
