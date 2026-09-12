---
source: 王道CO
subject: CO
chapter: 03 存储系统
section: 3.2 主存储器
qtype: 综合
topic: []
answer_status: 已录入
tags: []
---
## 题干

设存储器容量为 32 个字，字长为 64 位，模块数 $m=4$，分别采用顺序方式和交叉方式进行组织。

存取周期 $T=200\,\mathrm{ns}$，数据总线宽度为 64 位，总线传输周期 $r=50\,\mathrm{ns}$。

在连续读出 4 个字的情况下，求顺序存储器和交叉存储器各自的带宽。

> [!note]- 原题截图
> ![[王道CO 3.2 主存储器 综合 03.png]]

> [!success]- 答案与解析
> **答案：**
>
> 连续读出 $m=4$ 个字，信息总量为
>
> $$q=64\times 4=256\text{ bit}.$$
>
> **顺序存储器**
>
> $$t_1=mT=4\times 200\,\mathrm{ns}=800\,\mathrm{ns}=8\times 10^{-7}\,\mathrm{s},$$
>
> $$W_1=q/t_1=256/(8\times 10^{-7})=3.2\times 10^8\,\mathrm{bit/s}.$$
>
> **交叉存储器**
>
> $$t_2=T+(m-1)r=200\,\mathrm{ns}+3\times 50\,\mathrm{ns}=350\,\mathrm{ns}=3.5\times 10^{-7}\,\mathrm{s},$$
>
> $$W_2=q/t_2=256/(3.5\times 10^{-7})\approx 7.3\times 10^8\,\mathrm{bit/s}.$$
>
> **解析：** 顺序存储器必须串行完成 4 次存取，总时间为 $4T$。交叉存储器在第一个字经过 T 后输出，后续字以总线周期 r 流水输出，因此总时间为 $T+(m-1)r$。

## 关联

- 知识点：
- 题型：
