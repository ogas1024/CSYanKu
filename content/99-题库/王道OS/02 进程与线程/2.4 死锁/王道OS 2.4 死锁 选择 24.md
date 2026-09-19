---
source: 王道OS
subject: OS
chapter: 02 进程与线程
section: 2.4 死锁
qtype: 选择
topic: []
answer: C
answer_status: 已录入
tags: []
---
## 题干

24. 【P168】有两个并发进程，对于如下这段程序的运行，正确的说法是（ ）

```c
int x,y,z,t,u;
```

进程 $P_1$：

```text
while(1){
    x=1;
    y=0;
    if x>=1 then y=y+1;
    z=y;
}
```

进程 $P_2$：

```text
while(1){
    x=0;
    t=0;
    if x<=1 then t=t+2;
    u=t;
}
```

A. 程序能正确运行，结果唯一

B. 程序不能正确运行，可能有两种结果

C. 程序不能正确运行，结果不确定

D. 程序不能正确运行，可能会死锁

> [!note]- 原题截图
> ![[王道OS 2.4 死锁 选择 24.webp]]

> [!success]- 答案与解析
> **答案：** C
>
> **解析：** 枚举两个并发程序对共享变量的合法交错，可得到3种不同的最终结果。

## 关联

- 知识点：
- 题型：
