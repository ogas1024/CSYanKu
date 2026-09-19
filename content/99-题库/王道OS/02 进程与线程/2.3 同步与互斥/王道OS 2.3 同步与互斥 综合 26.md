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

某进程的两个线程 T1 和 T2 并发执行 A、B、C、D、E 和 F 共 6 个操作，其中 T1 执行 A、E 和 F，T2 执行 B、C 和 D。

下图表示上述 6 个操作的执行顺序所必须满足的约束：C 在 A 和 B 完成后执行，D 和 E 在 C 完成后执行，F 在 E 完成后执行。

请使用信号量的 wait()、signal() 操作描述 T1 和 T2 之间的同步关系，并说明所用信号量的作用及其初值。


> [!note]- 原题截图
> ![[王道OS 2.3 同步与互斥 综合 26.webp]]

> [!success]- 答案与解析
> **答案：**
>
> T1顺序A、E、F，T2顺序B、C、D，跨线程约束为 $A\to C$ 和 $C\to E$。设 `SAC=0,SCE=0`。T1执行A后 `signal(SAC)`，执行E前 `wait(SCE)`；T2执行C前 `wait(SAC)`，C完成后 `signal(SCE)`。其余操作保持原线程顺序。
>
> **解析：** 只有跨进程前驱关系需要额外同步；同一线程内 $A\to E\to F$ 及 $B\to C\to D$ 由顺序执行自然保证。

## 关联

- 知识点：
- 题型：
