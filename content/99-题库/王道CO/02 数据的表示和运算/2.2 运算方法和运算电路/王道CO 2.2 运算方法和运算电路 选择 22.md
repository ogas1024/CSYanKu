---
source: 王道CO
subject: CO
chapter: 02 数据的表示和运算
section: 2.2 运算方法和运算电路
qtype: 选择
topic: []
answer: A
answer_status: 已录入
tags: []
---
## 题干

22. 【P50】某 C 语言代码段如下：

```c
int si = 65536;
short i = si;
unsigned j = 0;
if (i <= j - 1)
    printf("王道");
else
    printf("计算机教育");
```

当上述代码段执行到 `if` 分支条件的判断时，会根据标志寄存器中的（）决定执行顺序，最终的输出结果是（）。

A. CF,王道

B. CF,计算机教育

C. OF,王道

D. OF,计算机教育

> [!note]- 原题截图
> ![[王道CO 2.2 运算方法和运算电路 选择 22.png]]

> [!success]- 答案与解析
> **答案：** A
>
> **解析：** 在与无符号数混合比较时，`j-1` 按无符号运算得到可表示的最大值，所以 `i<j-1` 为真，程序输出王道。

## 关联

- 知识点：
- 题型：
