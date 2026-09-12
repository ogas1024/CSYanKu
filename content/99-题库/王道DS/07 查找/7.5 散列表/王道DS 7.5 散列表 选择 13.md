---
source: 王道DS
subject: DS
chapter: 07 查找
section: 7.5 散列表
qtype: 选择
topic: []
answer: A、C
answer_status: 已录入
tags: []
---
## 题干

13. 若采用链地址法构造散列表，散列函数为 $H(key)=key\bmod 17$，则需（①）个链表。

这些链的链首指针构成一个指针数组，数组的下标范围为（②）。

**①**

A. 17

B. 13

C. 16

D. 任意

**②**

A. $0\sim17$

B. $1\sim17$

C. $0\sim16$

D. $1\sim16$

> [!note]- 原题截图
> ![[王道DS 7.5 散列表 选择 13.png]]

> [!success]- 答案与解析
> **答案：** A、C
>
> **解析：** 采用除留余数法 $H(key)=key%17$ 并用链地址法时，应设置 17 个链表，散列地址范围为 0～16。

## 关联

- 知识点：
- 题型：
