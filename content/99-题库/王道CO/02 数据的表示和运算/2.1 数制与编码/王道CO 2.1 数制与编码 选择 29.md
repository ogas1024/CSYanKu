---
source: 王道CO
subject: CO
chapter: 02 数据的表示和运算
section: 2.1 数制与编码
qtype: 选择
topic: []
answer: D
answer_status: 已录入
tags: []
---
## 题干

29. 【P32】【2016 统考真题】有如下 C 语言程序段：

```c
short si = -32767;
unsigned short usi = si;
```

执行上述两条语句后，`usi` 的值为（）

A. -32767

B. 32767

C. 32768

D. 32769

> [!note]- 原题截图
> ![[王道CO 2.1 数制与编码 选择 29.png]]

> [!success]- 答案与解析
> **答案：** D
>
> **解析：** -32767 的 16 位补码为 `1000000000000001`。赋给等长 unsigned short 后位模式不变，但按无符号解释，值为 $2^{16}-32767=32769$。

## 关联

- 知识点：
- 题型：
