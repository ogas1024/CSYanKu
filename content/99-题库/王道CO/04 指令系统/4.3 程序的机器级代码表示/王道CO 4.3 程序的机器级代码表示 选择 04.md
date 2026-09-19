---
source: 王道CO
subject: CO
chapter: 04 指令系统
section: 4.3 程序的机器级代码表示
qtype: 选择
topic: []
answer: A
answer_status: 已录入
tags: []
---
## 题干

4. 【P187】某 C 语言程序中对数组变量 b 的声明为 `int b[10][5];`，有一条 `for` 语句如下：

```c
for (i = 0; i < 10; i++)
    for (j = 0; j < 5; j++)
        sum += b[i][j];
```

假设执行到 `sum += b[i][j];` 时，sum 的值在 eax 中，b[i][0] 所在地址在 edx 中，j 在 esi 中，则 `sum += b[i][j];` 所对应的指令（Intel 格式）可以是（）

A. `add dword ptr eax, [edx+esi*4]`

B. `add dword ptr eax, [esi+edx*4]`

C. `add dword ptr eax, [edx+esi*2]`

D. `add dword ptr eax, [esi+edx*2]`

> [!note]- 原题截图
> ![[王道CO 4.3 程序的机器级代码表示 选择 04.webp]]

> [!success]- 答案与解析
> **答案：** A
>
> **解析：** edx 保存 b[i][0] 的地址，esi 保存 j，int 元素占 4 字节，所以 b[i][j] 地址为 edx+esi*4；Intel 格式目的操作数在前，故选择 A。

## 关联

- 知识点：
- 题型：
