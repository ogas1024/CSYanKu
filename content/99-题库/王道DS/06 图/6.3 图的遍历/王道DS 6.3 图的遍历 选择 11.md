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

11. 无向图 $G=(V,E)$，其中  $V = \{a, b, c, d, e, f\}$， $E = \{(a, b), (a, e), (a, c), (b, e), (c, f), (f, d), (e, d)\}$。

对该图进行深度优先遍历，不能得到的序列是（ ）。

A. `acfdeb`

B. `aebdfc`

C. `aedfcb`

D. `abecdf`

> [!note]- 原题截图
> ![[王道DS 6.3 图的遍历 选择 11.webp]]

> [!success]- 答案与解析
> **答案：** D
>
> **解析：** 本题只给出图而未固定邻接表次序，因此需要判断是否存在某种邻接点排列可产生各序列。A、B、C 均可通过相应排列实现；D 在当前 DFS 分支尚未完成时提前转入另一分支，无法产生。

## 关联

- 知识点：
- 题型：
