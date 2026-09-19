---
source: 王道CO
subject: CO
chapter: 05 中央处理器
section: 5.6 指令流水线
qtype: 选择
topic: []
answer: A
answer_status: 已录入
tags: []
---
## 题干

11. 【P261】下列关于数据冒险和转发技术的叙述中，正确的是（）

I. 并非所有数据冒险都能通过转发技术解决

II. 五段流水线中 load-use 数据冒险会引起至少一个时钟周期的阻塞

III. 前面的分支指令和后面的 ALU 运算指令之间肯定不会发生数据冒险

A. I、II

B. I、III

C. II、III

D. I、II、III

> [!note]- 原题截图
> ![[王道CO 5.6 指令流水线 选择 11.webp]]

> [!success]- 答案与解析
> **答案：** A
>
> **解析：** 转发不能解决所有数据冒险，典型 load-use 仍需插入气泡；分支产生的值也可能造成数据冒险。

## 关联

- 知识点：
- 题型：
