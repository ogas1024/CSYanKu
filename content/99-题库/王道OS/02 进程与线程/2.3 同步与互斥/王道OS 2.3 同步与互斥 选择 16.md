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

16. 【P128】用 Ⅴ 操作唤醒一个等待进程时，被唤醒进程变为（ ）态。

A. 运行

B. 等待

C. 就绪

D. 完成

> [!note]- 原题截图
> ![[王道OS 2.3 同步与互斥 选择 16.png]]

> [!success]- 答案与解析
> **答案：** C
>
> **解析：** 仅就绪进程能被调度获得处理器；刚被唤醒的进程先转就绪，不能直接转运行。

## 关联

- 知识点：
- 题型：
