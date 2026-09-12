---
source: 王道DS
subject: DS
chapter: 05 树与二叉树
section: 5.4 树、森林
qtype: 综合
topic: []
answer_status: 已录入
tags: []
---
## 题干

5. 以孩子兄弟链表为存储结构，请设计递归算法求树的深度。

> [!note]- 原题截图
> ![[王道DS 5.4 树、森林 综合 05.png]]

> [!success]- 答案与解析
> **答案：**
>
> ```c
> int Height(CSTree t) {
>     if (t == NULL) return 0;
>     int childHeight = Height(t->firstchild);
>     int siblingHeight = Height(t->nextsibling);
>     return childHeight + 1 > siblingHeight
>            ? childHeight + 1 : siblingHeight;
> }
> ```
>
> **解析：** 对孩子兄弟链表中的一组兄弟而言，以当前结点为根的树高为第一孩子所代表子树高加 1；而当前森林高度还要与其兄弟子树高度比较，取两者的较大值。

## 关联

- 知识点：
- 题型：
