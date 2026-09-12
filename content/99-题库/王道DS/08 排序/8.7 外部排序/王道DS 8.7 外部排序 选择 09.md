---
source: 王道DS
subject: DS
chapter: 08 排序
section: 8.7 外部排序
qtype: 选择
topic: []
answer: C
answer_status: 已录入
tags: []
---
## 题干

9. 在由 $k$ 路归并构建的败者树中选取一个关键字最小的记录，则所需时间为（ ）

A. $O(1)$

B. $O(k)$

C. $O(\log_{2}k)$

D. 以上都不对

> [!note]- 原题截图
> ![[王道DS 8.7 外部排序 选择 09.png]]

> [!success]- 答案与解析
> **答案：** C
>
> **解析：** 败者树的高度为 $O(log_2 k)$。输出当前最小记录后，从对应叶结点向根调整即可选出下一最小记录，因此一次选择的时间为 $O(log_2 k)$。

## 关联

- 知识点：
- 题型：
