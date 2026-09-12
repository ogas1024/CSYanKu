---
source: 王道OS
subject: OS
chapter: 02 进程与线程
section: 2.3 同步与互斥
qtype: 选择
topic: []
answer: C
answer_status: 已录入
tags: []
---
## 题干

50. 【P131】【2016 统考真题】进程 $P_1$ 和 $P_2$ 均包含并发执行的线程，部分伪代码描述如下所示。

进程 $P_1$：

```c
int x=0;
Thread1(){ int a; a=1; x+=1; }
Thread2(){ int a; a=2; x+=2; }
```

进程 $P_2$：

```c
int x=0;
Thread3(){ int a; a=x; x+=3; }
Thread4(){ int b; b=x; x+=4; }
```

下列选项中，需要互斥执行的操作是（ ）

A. `a=1` 与 `a=2`

B. `a=x` 与 `b=x`

C. `x+=1` 与 `x+=2`

D. `x+=1` 与 `x+=3`

> [!note]- 原题截图
> ![[王道OS 2.3 同步与互斥 选择 50.png]]

> [!success]- 答案与解析
> **答案：** C
>
> **解析：** 只有不同线程对同一进程内部共享变量的写操作需要互斥；局部变量、不同进程代码或无冲突的读不必。

## 关联

- 知识点：
- 题型：
