---
source: 王道OS
subject: OS
chapter: 02 进程与线程
section: 2.3 同步与互斥
qtype: 综合
topic: []
answer_status: 已录入
tags: []
---
## 题干

假设有两个线程（编号为 0 和 1）需要去访问同一个共享资源，为避免竞争状态的问题，我们必须实现一种互斥机制，使得在任何时候只能有一个线程访问这个资源。

假设有如下一段代码：

```c
bool flag[2]; // flag 数组，初始化为 FALSE
Enter_Critical_Section(int my_thread_id,int other_thread_id){
    while(flag[other_thread_id] == TRUE); // 空循环语句
    flag[my_thread_id]=TRUE;
}
Exit_Critical_Section(int my_thread_id,int other_thread_id){
    flag[my_thread_id] = FALSE;
}
```

当一个线程想要访问临界资源时，就调用上述的这两个函数。

例如，线程 0 的代码可能是这样的：

```text
Enter_Critical_Section(0, 1);
使用这个资源；
Exit_Critical_Section(0, 1);
做其他的事情；
```

试问：

- **（1）** 以上的这种机制能够实现资源互斥访问吗？为什么？
- **（2）** 若把 `Enter_Critical_Section()` 函数中的两条语句互换一下位置，可能会发生死锁吗？

> [!note]- 原题截图
> ![[王道OS 2.3 同步与互斥 综合 08.webp]]

> [!success]- 答案与解析
> **答案：**
>
> 该仅用 `flag` 的方案不能实现互斥，也可能死锁。
>
> 1. 不能互斥：线程0检查到 `flag[1]=FALSE` 后被中断，线程1也检查到 `flag[0]=FALSE` 并进入临界区；线程0恢复后也进入，二者同时在临界区。根因是检查与设置不是原子操作。
>
> 2. 可死锁：线程0先置 `flag[0]=TRUE` 后被中断，线程1置 `flag[1]=TRUE` 并忙等；线程0恢复后也因 `flag[1]=TRUE` 忙等，双方均无法继续。
>
> **解析：** 仅表达进入意愿不足以解决竞争；需要把检查和修改原子化，或像Peterson算法一样加入turn打破双方同时请求时的僵局。

## 关联

- 知识点：
- 题型：
