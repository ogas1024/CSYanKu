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

36. 【P130】两个进程 $P_0$ 和 $P_1$ 互斥的 Peterson 算法描述如下：

进程 $P_0$：

```c
flag[0]=1;
(1);
while(flag[1]&&turn==1);
临界区;
flag[0]=0;
其余代码;
```

进程 $P_1$：

```c
flag[1]=1;
(2);
while(flag[0]&&turn==0);
临界区;
flag[1]=0;
其余代码;
```

其中，（1）和（2）处的代码分别为（ ）

A. `turn=0`，`turn=0`

B. `turn=0`，`turn=1`

C. `turn=1`，`turn=0`

D. `turn=1`，`turn=1`

> [!note]- 原题截图
> ![[王道OS 2.3 同步与互斥 选择 36.webp]]

> [!success]- 答案与解析
> **答案：** C
>
> **解析：** 按Peterson算法，两个空缺依次应赋turn=1和turn=0。

## 关联

- 知识点：
- 题型：
