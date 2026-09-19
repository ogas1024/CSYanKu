---
source: 王道DS
subject: DS
chapter: 03 栈队列和数组
section: 3.1 栈
qtype: 选择
topic: []
answer: D
answer_status: 已录入
tags: []
---
## 题干

18. 若栈的输入序列为 $1,2,3,\cdots,n$，输出序列的第一个元素是 $i$，则第 $j$ 个输出元素是（ ）。

A. $i-j-1$

B. $i-j$

C. $j-i+1$

D. 不确定

> [!note]- 原题截图
> ![[王道DS 3.1 栈 选择 18.webp]]

> [!success]- 答案与解析
> **答案：** D
>
> **解析：** 第一个输出为 $i$ 时，$i$ 之前的元素可在其后逆序出栈，剩余元素也可继续入栈并先于它们出栈，因而第 $j$ 个输出不确定。

## 关联

- 知识点：
- 题型：
