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

27. 【2010 统考真题】若元素 $a,b,c,d,e,f$ 依次入栈，允许入栈、出栈操作交替进行，但不允许连续 3 次进行出栈操作，不可能得到的出栈序列是（ ）。

A. $dcebfa$

B. $cbdaef$

C. $bcaefd$

D. $afedcb$

> [!note]- 原题截图
> ![[王道DS 3.1 栈 选择 27.png]]

> [!success]- 答案与解析
> **答案：** D
>
> **解析：** 选项 D 的 `a,f,e,d,c,b` 在 `a` 出栈后需将其余元素全部入栈，随后必须连续弹出 `f,e,d,c,b`，不可避免地出现连续 3 次以上出栈。

## 关联

- 知识点：
- 题型：
