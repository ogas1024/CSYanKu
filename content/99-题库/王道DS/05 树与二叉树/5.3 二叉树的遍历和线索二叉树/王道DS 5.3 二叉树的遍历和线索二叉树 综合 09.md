---
source: 王道DS
subject: DS
chapter: 05 树与二叉树
section: 5.3 二叉树的遍历和线索二叉树
qtype: 综合
topic: []
answer_status: 已录入
tags: []
---
## 题干

9. 在二叉树中查找值为 $x$ 的结点，试编写算法（用 C 语言）打印值为 $x$ 的结点的所有祖先，假设值为 $x$ 的结点不多于一个。

> [!note]- 原题截图
> ![[王道DS 5.3 二叉树的遍历和线索二叉树 综合 09.png]]

> [!success]- 答案与解析
> **答案：**
>
> ```c
> bool PrintAncestors(BiTree t, ElemType x) {
>     if (t == NULL) return false;
>     if (t->data == x) return true;
>     if (PrintAncestors(t->lchild, x) || PrintAncestors(t->rchild, x)) {
>         printf("%d ", t->data);
>         return true;
>     }
>     return false;
> }
> ```
>
> **解析：** 递归函数返回当前子树是否包含 x。当左或右子树找到 x 时，当前结点就是 x 的祖先，在回溯过程中输出。输出次序为父结点到根；若需根到父的次序，可使用显式栈保存路径后顺序输出。

## 关联

- 知识点：
- 题型：
