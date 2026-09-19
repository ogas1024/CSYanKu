---
source: 王道DS
subject: DS
chapter: 05 树与二叉树
section: 5.3 二叉树的遍历和线索二叉树
qtype: 选择
topic: []
answer_status: 待补
tags: []
---
## 题干

19. 某二叉树中的结点 $x$ 在先序、中序、后序遍历序列中的编号分别为 $\operatorname{pre}(x)$、$\operatorname{in}(x)$、$\operatorname{post}(x)$（假设都从 1 开始依次顺序编号），$a$ 和 $b$ 是该二叉树中的两个结点，其中 $a$ 是 $b$ 的祖先，下列选项中不可能出现的是（ ）。

A. $\operatorname{pre}(a)<\operatorname{pre}(b)$

B. $\operatorname{post}(a)>\operatorname{post}(b)$

C. $\operatorname{in}(a)<\operatorname{in}(b)$

D. $\operatorname{in}(a)>\operatorname{in}(b)$

> [!note]- 原题截图
> ![[王道DS 5.3 二叉树的遍历和线索二叉树 选择 19.webp]]

> [!warning]- 原书题面与答案存在内部冲突
> 原书答案页第 167 页将本题答案标为 **B**，但题面 B 为 `post(a) > post(b)`。当 a 是 b 的祖先时，后序遍历必然先访问子孙 b、后访问祖先 a，所以该关系必然成立，不可能作为题目所问的“不可能出现”。
>
> A 同样必然成立；C、D 分别可在 b 位于 a 的右、左子树时出现。因此按当前题面没有正确选项。原书解析只有在 B 原本为 `post(a) < post(b)` 时才能支持答案 B。
>
> 本题不写入伪“正确答案”，待取得官方勘误或修订题面后再补录。

## 关联

- 知识点：
- 题型：
