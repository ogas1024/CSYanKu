---
source: 王道OS
subject: OS
chapter: 02 进程与线程
section: 2.4 死锁
qtype: 选择
topic: []
answer: B
answer_status: 已录入
tags: []
---
## 题干

23. 【P168】下面是一个并发进程的程序代码，正确的是（ ）

```c
Semaphore x1=x2=y=1;
int c1=c2=0;
```

进程 $P_1$：

```c
while(1){
    P(x1);
    if(++c1==1)P(y);
    V(x1);
    computer(A);
    P(x1);
    if(--c1==0)V(y);
    V(x1);
}
```

进程 $P_2$：

```c
while(1){
    P(x2);
    if(++c2==1)P(y);
    V(x2);
    computer(B);
    P(x2);
    if(--c2==0)V(y);
    V(x2);
}
```

A. 进程不会死锁，也不会“饥饿”

B. 进程不会死锁，但是会“饥饿”

C. 进程会死锁，但是不会“饥饿”

D. 进程会死锁，也会“饥饿”

> [!note]- 原题截图
> ![[王道OS 2.4 死锁 选择 23.webp]]

> [!success]- 答案与解析
> **答案：** B
>
> **解析：** 该单向路段调度能避免相向车辆互锁，但可能持续放行一侧而使另一侧长期等待，即产生饥饿。

## 关联

- 知识点：
- 题型：
