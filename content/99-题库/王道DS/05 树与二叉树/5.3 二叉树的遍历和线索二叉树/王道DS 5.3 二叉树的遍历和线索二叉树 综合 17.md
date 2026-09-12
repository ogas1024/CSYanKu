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

17. 【2022 统考真题】已知非空二叉树 $T$ 的结点值均为正整数，采用顺序存储方式保存，数据结构定义如下：

```c
typedef struct {              // MAX_SIZE 为已定义常量
    int SqBiTNode[MAX_SIZE];  // 保存二叉树结点值的数组
    int ElemNum;              // 实际占用的数组元素个数
} SqBiTree;
```

$T$ 中不存在的结点在数组 `SqBiTNode` 中用 $-1$ 表示。

例如，对于下图所示的两棵非空二叉树 $T_1$ 和 $T_2$：

![[王道DS 5.3 二叉树的遍历和线索二叉树 综合 17-fig3.jpg]]

$T_1$ 的存储结果如下：

![[王道DS 5.3 二叉树的遍历和线索二叉树 综合 17-fig1.jpg]]

`T1.ElemNum = 10`

$T_2$ 的存储结果如下：

![[王道DS 5.3 二叉树的遍历和线索二叉树 综合 17-fig2.jpg]]

`T2.ElemNum = 11`

请设计一个尽可能高效的算法，判定一棵采用这种方式存储的二叉树是否为二叉搜索树，若是，则返回 `true`，否则返回 `false`。

要求：

- **（1）** 给出算法的基本设计思想。
- **（2）** 根据设计思想，采用 C 或 C++ 语言描述算法，关键之处给出注释。

> [!note]- 原题截图
> ![[王道DS 5.3 二叉树的遍历和线索二叉树 综合 17.png]]

> [!success]- 答案与解析
> **答案：**
>
> **（1）设计思想**
>
> 对顺序存储的二叉树作中序遍历，忽略值为 `-1` 的空位置。二叉搜索树的中序序列必须严格递增；遍历中只需保存上一个访问值。
>
> **（2）算法**
>
> ```c
> bool InOrderCheck(const SqBiTree *T, int i, int *prev, bool *first) {
>     if (i >= T->ElemNum || T->SqBiTNode[i] == -1) return true;
>     if (!InOrderCheck(T, 2 * i + 1, prev, first)) return false;
>     if (!*first && T->SqBiTNode[i] <= *prev) return false;
>     *prev = T->SqBiTNode[i];
>     *first = false;
>     return InOrderCheck(T, 2 * i + 2, prev, first);
> }
>
> bool IsBST(const SqBiTree *T) {
>     int prev = 0;
>     bool first = true;
>     return InOrderCheck(T, 0, &prev, &first);
> }
> ```
>
> **解析：** 数组下标从 0 开始时，结点 `i` 的左、右孩子下标分别是 `2*i+1` 和 `2*i+2`。序列一旦不严格递增就立即返回 `false`。每个实际结点至多访问一次，时间复杂度为 $O(n)$，递归栈空间为 $O(h)$。

## 关联

- 知识点：
- 题型：
