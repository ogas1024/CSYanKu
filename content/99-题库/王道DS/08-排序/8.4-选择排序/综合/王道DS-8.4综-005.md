---
tags: [题目/综合, 王道DS, DS/08-排序/04-选择排序]
---
## 题干

5. 编写一个算法，在基于单链表表示的待排序关键字序列上进行简单选择排序。

> [!note]- 原题截图
> ![[王道DS-8.4综-005.png]]

> [!success]- 答案与解析
> **答案：**
>
> 每趟在原链表中找到关键字最大的结点，把它摘下并头插到结果链表。被摘出的关键字逐趟减小，而头插后结果链表保持递增。
>
> ```cpp
> struct Node {
>     int data;
>     Node *next;
> };
>
> void selectSort(Node *&head) {
>     Node *result = nullptr;
>     while (head != nullptr) {
>         Node *maxNode = head, *maxPrev = nullptr;
>         Node *prev = head, *cur = head->next;
>
>         while (cur != nullptr) {
>             if (cur->data > maxNode->data) {
>                 maxNode = cur;
>                 maxPrev = prev;
>             }
>             prev = cur;
>             cur = cur->next;
>         }
>
>         if (maxPrev == nullptr) head = head->next;
>         else maxPrev->next = maxNode->next;
>
>         maxNode->next = result;
>         result = maxNode;
>     }
>     head = result;
> }
> ```
>
> **解析：** 链表不能按下标交换元素，但可以在扫描时同时记录最大结点及其前驱，以 $O(1)$ 修改指针将其摘下。算法执行 n 趟线性扫描，时间复杂度为 $O(n^2)$，辅助空间为 $O(1)$。

## 关联

- 知识点：
- 题型：
