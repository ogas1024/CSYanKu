---
source: 王道DS
subject: DS
chapter: 07 查找
section: 7.3 树型查找
qtype: 综合
topic: []
answer_status: 已录入
tags: []
---
## 题干

9. 设计一个算法，从大到小输出二叉排序树中所有值不小于 $k$ 的关键字。

> [!note]- 原题截图
> ![[王道DS 7.3 树型查找 综合 09.png]]

> [!success]- 答案与解析
> **答案：**
>
> 按“右子树—根—左子树”的逆中序顺序遍历，并利用二叉排序树性质剪枝：
>
>     void OutputGE(BSTNode *t, KeyType k) {
>         if (t == NULL) return;
>         if (t->data < k) {
>             OutputGE(t->rchild, k);
>             return;
>         }
>         OutputGE(t->rchild, k);
>         printf("%d ", t->data);
>         OutputGE(t->lchild, k);
>     }
>
> 输出结果从大到小排列，且仅包含关键字不小于 k 的结点。
>
> **解析：** 逆中序遍历天然按关键字递减访问。若当前关键字小于 k，则当前结点及其整个左子树都不可能满足条件，只需继续检查右子树；否则输出右子树、当前结点，并继续在左子树中寻找可能仍不小于 k 的值。

## 关联

- 知识点：
- 题型：
