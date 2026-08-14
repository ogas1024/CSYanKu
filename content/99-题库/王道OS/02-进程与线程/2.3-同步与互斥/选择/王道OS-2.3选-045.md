---
tags: [题目/选择, 王道OS, OS/02-进程与线程/03-同步与互斥]
answer: C
---
## 题干

45. 【P130】哲学家就餐问题的解决方案如下：

```c
semaphore *chopstick[5];
semaphore *seat;
哲学家 i:
...
P(seat);
P(chopStick[i]);
P(chopStick[(i+1)%5]);
吃饭
V(chopStick[i]);
V(chopStick[(i+1)%5]);
V(seat);
```

其中，信号量 `seat` 的初值最大为（ ）

A. 0

B. 1

C. 4

D. 5

> [!note]- 原题截图
> ![[王道OS-2.3选-045.png]]

> [!success]- 答案与解析
> **答案：** C
>
> **解析：** 五位哲学家只有四位同时拿左叉才能保证至少一人取得右叉，故seat初值为4。

## 关联

- 知识点：
- 题型：
