---
tags: [题目/综合, 王道OS, OS/02-进程与线程/03-同步与互斥]
year: 2017
---
## 题干

某进程中有 3 个并发执行的线程 thread1、thread2 和 thread3，其伪代码如下所示。

```c
// 复数的结构类型定义
typedef struct
{
    float a;
    float b;
} cnum;
cnum x, y, z; // 全局变量

// 计算两个复数之和
cnum add(cnum p, cnum q)
{
    cnum s;
    s.a = p.a + q.a;
    s.b = p.b + q.b;
    return s;
}

thread1
{
    cnum w;
    w = add(x, y);
    ...
}

thread2
{
    cnum w;
    w = add(y, z);
    ...
}

thread3
{
    cnum w;
    w.a = 1;
    w.b = 1;
    z = add(z, w);
    y = add(y, w);
    ...
}
```

请添加必要的信号量和 P、V［或 `wait()`、`signal()`］操作，要求确保线程互斥访问临界资源，并且最大限度地并发执行。

> [!note]- 原题截图
> ![[王道OS-2.3综-022.png]]

> [!success]- 答案与解析
> **答案：**
>
> 只需保护发生写冲突的共享访问。按读者—写者原则，设置三个初值1的信号量：`mutex_y1` 保护thread1与thread3对y的冲突，`mutex_y2`保护thread2与thread3对y的冲突，`mutex_z`保护thread2与thread3对z的冲突。
>
> thread1的 `w=add(x,y)` 用mutex_y1包围；thread2的 `w=add(y,z)` 同时取得mutex_y2与mutex_z；thread3写z时用mutex_z，随后写y时同时取得mutex_y1与mutex_y2。
>
> **解析：** 互斥关系必须按“哪两个线程对哪个变量冲突”分别识别；读读无需互斥，读写和写写需要互斥。

## 关联

- 知识点：
- 题型：
