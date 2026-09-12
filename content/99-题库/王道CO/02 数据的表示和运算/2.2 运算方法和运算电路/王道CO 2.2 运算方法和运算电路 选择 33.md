---
source: 王道CO
subject: CO
chapter: 02 数据的表示和运算
section: 2.2 运算方法和运算电路
qtype: 选择
topic: []
answer: B
answer_status: 已录入
tags: []
---
## 题干

33. 【P51】【2024 统考真题】C 语言代码段如下，执行该代码段后 `j` 的值是（）

```c
int i = 32777;
short si = i;
int j = si;
```

A. -32777

B. -32759

C. 32759

D. 32777

> [!note]- 原题截图
> ![[王道CO 2.2 运算方法和运算电路 选择 33.png]]

> [!success]- 答案与解析
> **答案：** B
>
> **解析：** i=$2^{15}+9$=32777，32 位位型为 00008009H。强制转为 short 后保留 8009H，按 16 位补码解释为 -32759，再赋给 int 时符号扩展为 FFFF8009H。

## 关联

- 知识点：
- 题型：
