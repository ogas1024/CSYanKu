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

12. 在由 m 个初始归并段构建的 k 阶最佳归并树中，不需要补充虚段，则度为 k 的结点个数是（ ）。

A. $(m-1)/k$

B. m/k

C. $(m-1)/(k-1)$

D. 无法确定

> [!note]- 原题截图
> ![[王道DS 8.7 外部排序 选择 12.png]]

> [!success]- 答案与解析
> **答案：** C
>
> **解析：** 严格 k 叉最佳归并树只有度 0 和度 k 的结点。若叶结点数为 m、度 k 的结点数为 $n_k$，由 $m=(k-1)n_k+1$ 得 $n_k=(m-1)/(k-1)$。

## 关联

- 知识点：
- 题型：
