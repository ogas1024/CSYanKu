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

某寺庙有小和尚、老和尚若干，有一水缸，由小和尚提水入缸供老和尚饮用。

水缸可容 10 桶水，水取自同一井中。

水井径窄，每次只能容一个桶取水。

水桶总数为 3 个。

每次入缸取水仅为 1 桶水，且不可同时进行。

试给出有关从缸取水、入水的算法描述。

> [!note]- 原题截图
> ![[王道OS 2.3 同步与互斥 综合 05.webp]]

> [!success]- 答案与解析
> **答案：**
>
> 设 `well=1` 互斥访问水井，`vat=1` 互斥访问水缸，`empty=10` 表示水缸剩余桶数，`full=0` 表示已有水桶数，`pail=3` 表示三只公用水桶。
>
> - 小和尚：`P(empty),P(pail),P(well)` 打水，`V(well),P(vat)` 倒入水缸，`V(vat),V(full),V(pail)`。
> - 老和尚：`P(full),P(pail),P(vat)` 从水缸取一桶，`V(vat),V(empty)`，喝水后 `V(pail)`。
>
> **解析：** 井、水缸是互斥资源，empty/full解决有界缓冲同步，pail限制同时占用水桶的进程数。

## 关联

- 知识点：
- 题型：
