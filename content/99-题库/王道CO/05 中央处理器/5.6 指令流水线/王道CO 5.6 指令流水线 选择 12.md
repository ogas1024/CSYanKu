---
source: 王道CO
subject: CO
chapter: 05 中央处理器
section: 5.6 指令流水线
qtype: 选择
topic: []
answer: D
answer_status: 已录入
tags: []
---
## 题干

12. 【P262】下列关于数据冒险的叙述中，正确的是（）

I. 数据冒险是指后面指令用到的数据还未来得及由前面的指令产生

II. 在发生数据冒险的指令之间插入空操作指令能避免数据冒险

III. 采用转发（旁路）技术可以解决一部分数据冒险现象

IV. 通过编译器调整指令顺序可解决部分数据冒险

A. I、II、IV

B. I、II、III

C. I、III、IV

D. I、II、III 和 IV

> [!note]- 原题截图
> ![[王道CO 5.6 指令流水线 选择 12.png]]

> [!success]- 答案与解析
> **答案：** D
>
> **解析：** 插入空操作、部分转发和编译调度均可缓解数据冒险，但转发不能解决 load-use。

## 关联

- 知识点：
- 题型：
