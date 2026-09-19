---
source: 王道DS
subject: DS
chapter: 06 图
section: 6.3 图的遍历
qtype: 选择
topic: []
answer: D
answer_status: 已录入
tags: []
---
## 题干

8. 如下图所示，在下面的5个序列中，符合深度优先遍历的序列个数是（ ）。

![[王道DS 6.3 图的遍历 选择 08-fig1.webp]]

1. `aebfdc`
2. `acfdeb`
3. `aedfcb`
4. `aefdbc`
5. `aecfdb`

A. 5

B. 4

C. 3

D. 2

> [!note]- 原题截图
> ![[王道DS 6.3 图的遍历 选择 08.webp]]

> [!success]- 答案与解析
> **答案：** D
>
> **解析：** 五个序列中只有 1（aebfdc）和 4（aefdbc）可由某种邻接点次序下的 DFS 产生。序列 2 在访问 c 后无可继续深入的邻接点却不能直接转到 f；序列 3、5 也违反递归必须先完成当前分支再回溯的规则，故共有 2 个。

## 关联

- 知识点：
- 题型：
