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

5. 线性表中各结点的检索概率不等时，可用如下策略提高顺序检索的效率：若找到指定的结点，则将该结点和其前驱结点（若存在）交换，使得经常被检索的结点尽量位于表的前端。

试设计在顺序结构和链式结构的线性表上实现上述策略的顺序检索算法。

> [!note]- 原题截图
> ![[王道DS 7.2 顺序查找和折半查找 综合 05.png]]

> [!success]- 答案与解析
> **答案：**
>
> **（1）顺序存储**
>
> ```c
> int SearchMoveArray(ElemType R[], int n, ElemType key) {
>     for (int i = 0; i < n; ++i) {
>         if (R[i].key == key) {
>             if (i > 0) {
>                 ElemType t = R[i - 1];
>                 R[i - 1] = R[i];
>                 R[i] = t;
>                 return i - 1;
>             }
>             return 0;
>         }
>     }
>     return -1;
> }
> ```
>
> **（2）单链表**
>
> ```c
> LNode *SearchMoveList(LNode **head, ElemType key) {
>     LNode *prepre = NULL, *pre = NULL, *p = *head;
>     while (p && p->data.key != key) {
>         prepre = pre;
>         pre = p;
>         p = p->next;
>     }
>     if (!p) return NULL;
>     if (!pre) return p;
>
>     pre->next = p->next;
>     p->next = pre;
>     if (prepre) prepre->next = p;
>     else *head = p;
>     return p;
> }
> ```
>
> **解析：** 自组织顺序查找在命中后把元素向表头移动一个位置，使频繁查找的元素逐渐靠前。数组中交换相邻元素；链表中必须同时保存前驱和前驱的前驱，通过重连指针交换相邻结点。

## 关联

- 知识点：
- 题型：
