---
source: 王道CO
subject: CO
chapter: 03 存储系统
section: 3.5 高速缓冲存储器
qtype: 选择
topic: []
answer: A
answer_status: 已录入
tags: []
---
## 题干

16. 【P124】某个主存-Cache 层次的存储器，按字节编址，其主存容量为 1MB，Cache 容量为 16KB，每块有 8 个字，每字 32 位，采用直接地址映像方式，Cache 起始字块为第 0 块，若主存地址为 35301H，且 CPU 访问 Cache 命中，则在 Cache 的第（ ）（十进制表示）字块中。

A. 152

B. 153

C. 154

D. 151

> [!note]- 原题截图
> ![[王道CO 3.5 高速缓冲存储器 选择 16.webp]]

> [!success]- 答案与解析
> **答案：** A
>
> **解析：** 主存与 Cache 容量比为 $1MB/16KB=64$，直接映射的标记为 6 位。块大小 32B，由所给地址得 Cache 块号为 152。

## 关联

- 知识点：
- 题型：
