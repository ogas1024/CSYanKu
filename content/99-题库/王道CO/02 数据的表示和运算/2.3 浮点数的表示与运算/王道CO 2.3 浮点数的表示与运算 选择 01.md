---
source: 王道CO
subject: CO
chapter: 02 数据的表示和运算
section: 2.3 浮点数的表示与运算
qtype: 选择
topic: []
answer: C
answer_status: 已录入
tags: []
---
## 题干

1. 【P66】在 C 语言的不同类型的数据混合运算中,要先转换成同一类型后进行运算。

设一表达式中包含有 int、long、char 和 double 类型的变量与数据,则表达式最后的运算结果是（），这 4 种类型数据的转换规律是（）

A. long, int  $\rightarrow$ char  $\rightarrow$ double  $\rightarrow$ long

B. long, char  $\rightarrow$ int  $\rightarrow$ long  $\rightarrow$ double

C. double, char  $\rightarrow$ int  $\rightarrow$ long  $\rightarrow$ double

D. double, char  $\rightarrow$ int  $\rightarrow$ double  $\rightarrow$ long

> [!note]- 原题截图
> ![[王道CO 2.3 浮点数的表示与运算 选择 01.png]]

> [!success]- 答案与解析
> **答案：** C
>
> **解析：** C 语言混合运算遵循类型提升，转换顺序为 char→int→long→double，最终结果为 double。

## 关联

- 知识点：
- 题型：
