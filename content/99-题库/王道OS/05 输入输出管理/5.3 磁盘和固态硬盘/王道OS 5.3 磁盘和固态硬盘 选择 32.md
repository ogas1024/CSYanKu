---
source: 王道OS
subject: OS
chapter: 05 输入输出管理
section: 5.3 磁盘和固态硬盘
qtype: 选择
topic: []
answer: A
answer_status: 已录入
tags: []
---
## 题干

32. 【P355】【2018 统考真题】系统总是访问磁盘的某个磁道而不响应对其他磁道的访问请求，这种现象称为磁臂黏着。

下列磁盘调度算法中，不会导致磁臂黏着的是（）

A. 先来先服务（FCFS）

B. 最短寻道时间优先（SSTF）

C. 扫描算法（SCAN）

D. 循环扫描算法（C-SCAN）

> [!note]- 原题截图
> ![[王道OS 5.3 磁盘和固态硬盘 选择 32.webp]]

> [!success]- 答案与解析
> **答案：** A
>
> **解析：** 持续的局部请求可使SSTF、SCAN、C-SCAN长期忽略其他请求；FCFS按到达顺序更公平。

## 关联

- 知识点：
- 题型：
