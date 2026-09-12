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
> ![[王道OS 2.3 同步与互斥 选择 45.png]]

> [!success]- 答案与解析
> **答案：** C
>
> **解析：** 五位哲学家只有四位同时拿左叉才能保证至少一人取得右叉，故seat初值为4。

## 关联

- 知识点：
- 题型：
