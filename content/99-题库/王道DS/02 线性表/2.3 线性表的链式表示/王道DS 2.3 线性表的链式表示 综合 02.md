---
source: 王道DS
subject: DS
chapter: 02 线性表
section: 2.3 线性表的链式表示
qtype: 综合
topic: []
answer_status: 已录入
tags: []
---
## 题干

2. 试编写在带头结点的单链表 $L$ 中删除一个最小值结点的高效算法（假设该结点是唯一的）。

> [!note]- 原题截图
> ![[王道DS 2.3 线性表的链式表示 综合 02.webp]]

> [!success]- 答案与解析
> **答案：**
>
> 用 `pre`、`p` 扫描链表，同时用 `minpre` 记录当前最小值结点的前驱，初始令 `minpre=L`。每当 `p->data < minpre->next->data` 时更新 `minpre=pre`。扫描结束后令 `p=minpre->next`，执行 `minpre->next=p->next` 并释放 `p`。
>
> 时间复杂度为 $O(n)$，空间复杂度为 $O(1)$。
>
> **解析：** 单链表删除某结点需要它的前驱，所以扫描时记录最小值结点的前驱比只记录最小结点更直接。最小值唯一，比较时不必处理重复最小值。

## 关联

- 知识点：
- 题型：
