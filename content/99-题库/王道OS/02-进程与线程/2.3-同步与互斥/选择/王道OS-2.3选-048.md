---
tags: [题目/选择, 王道OS, OS/02-进程与线程/03-同步与互斥]
answer: D
year: 2010
---
## 题干

48. 【P131】【2010 统考真题】进程 $P_0$ 和进程 $P_1$ 的共享变量定义及其初值为：

```c
boolean flag[2];
int turn=0;
flag[0]=false; flag[1]=false;
```

若进程 $P_0$ 和进程 $P_1$ 访问临界资源的类 C 代码实现如下：

```c
void P0() // 进程 P0
{
    while(true)
    {
        flag[0]=true; turn=1;
        while(flag[1]&&(turn==1));
        临界区;
        flag[0]=false;
    }
}
```

```c
void P1() // 进程 P1
{
    while(true)
    {
        flag[1]=true; turn=0;
        while(flag[0]&&(turn==0));
        临界区;
        flag[1]=false;
    }
}
```

则并发执行进程 $P_0$ 和进程 $P_1$ 时产生的情况是（ ）

A. 不能保证进程互斥进入临界区，会出现“饥饿”现象

B. 不能保证进程互斥进入临界区，不会出现“饥饿”现象

C. 能保证进程互斥进入临界区，会出现“饥饿”现象

D. 能保证进程互斥进入临界区，不会出现“饥饿”现象

> [!note]- 原题截图
> ![[王道OS-2.3选-048.png]]

> [!success]- 答案与解析
> **答案：** D
>
> **解析：** Peterson算法用flag和turn保证两进程互斥、有限等待和先到先入；较晚写turn者等待较早者进入。

## 关联

- 知识点：
- 题型：
