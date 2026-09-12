---
source: 王道DS
subject: DS
chapter: 02 线性表
section: 2.3 线性表的链式表示
qtype: 选择
topic: []
answer: A
answer_status: 已录入
tags: []
---
## 题干

17. 在如下图所示的双链表中，已知指针 `p` 指向结点 A，若要在结点 A 和 C 之间插入指针 `q` 所指的结点 B，则依次执行的语句序列可以是（ ）。

![[王道DS 2.3 线性表的链式表示 选择 17-fig1.jpg]]

① `q->next=p->next;`　② `q->prior=p;`　③ `p->next=q;`　④ `p->next->prior=q;`

A. ①②④③

B. ④③②①

C. ③④①②

D. ①③④②

> [!note]- 原题截图
> ![[王道DS 2.3 线性表的链式表示 选择 17.png]]

> [!success]- 答案与解析
> **答案：** A
>
> **解析：** 必须在改写 `p->next` 前先保存原后继 C：先执行①；④也必须在③之前，否则 `p->next` 已变为 `q`，会错误修改 `q->prior`。可行顺序为①②④③。

## 关联

- 知识点：
- 题型：
