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

16. 【2017 统考真题】请设计一个算法，将给定的表达式树（二叉树）转换为等价的中缀表达式（通过括号反映操作符的计算次序）并输出。

例如，当下列两棵表达式树作为算法的输入时：

![[王道DS 5.3 二叉树的遍历和线索二叉树 综合 16-fig1.webp]]

![[王道DS 5.3 二叉树的遍历和线索二叉树 综合 16-fig2.webp]]

输出的等价中缀表达式分别为 `(a+b)*(c*(-d))` 和 `(a*b)+(-(c-d))`。

二叉树结点定义如下：

```c
typedef struct node {
    char data[10];  // 存储操作数或操作符
    struct node *left, *right;
} BTree;
```

要求：

- **（1）** 给出算法的基本设计思想。
- **（2）** 根据设计思想，采用 C 或 C++ 语言描述算法，关键之处给出注释。

> [!note]- 原题截图
> ![[王道DS 5.3 二叉树的遍历和线索二叉树 综合 16.webp]]

> [!success]- 答案与解析
> **答案：**
>
> **（1）设计思想**
>
> 按中序顺序输出表达式树。对非根的非叶结点，在输出它所代表的子表达式前后加括号，以保留原树规定的运算次序。
>
> **（2）算法**
>
> ```c
> void PrintExpr(BTree *t, int depth) {
>     if (t == NULL) return;
>     bool leaf = (t->left == NULL && t->right == NULL);
>     if (depth > 0 && !leaf) printf("(");
>     PrintExpr(t->left, depth + 1);
>     printf("%s", t->data);
>     PrintExpr(t->right, depth + 1);
>     if (depth > 0 && !leaf) printf(")");
> }
>
> /* 调用 */
> PrintExpr(root, 0);
> ```
>
> **解析：** 叶结点是操作数，不加括号；根对应整个表达式，也无需最外层括号。其他分支结点代表子表达式，用一对括号包围。对一元运算符，其中一棵子树为空，同一递归过程仍能正确输出。

## 关联

- 知识点：
- 题型：
