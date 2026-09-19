---
source: 王道CO
subject: CO
chapter: 04 指令系统
section: 4.3 程序的机器级代码表示
qtype: 选择
topic: []
answer: D
answer_status: 已录入
tags: []
---
## 题干

6. 【P187】程序 P 中有两个变量 i 和 j，被分别分配在寄存器 eax 和 edx 中。

P 中语句 `if (i<j) {...}` 对应的指令序列如下（左边为指令地址，中间为机器代码，右边为汇编指令），其中 `jle` 指令的偏移量为 0d：

```text
804846a  39 c2  cmp dword ptr edx,eax
804846c  7e 0d  jle xxxxxxxxx
```

若执行到 804846aH 处的 `cmp` 指令时，$i=105,j=100$，则 `jle` 指令执行后将会转到（）处的指令执行。

A. 8048461H

B. 804846eH

C. 8048479H

D. 804847bH

> [!note]- 原题截图
> ![[王道CO 4.3 程序的机器级代码表示 选择 06.webp]]

> [!success]- 答案与解析
> **答案：** D
>
> **解析：** cmp edx,eax 比较 j 与 i；100<105，jle 条件成立。jle 长 2 字节，目标为 804846CH+2+0DH=804847BH。

## 关联

- 知识点：
- 题型：
