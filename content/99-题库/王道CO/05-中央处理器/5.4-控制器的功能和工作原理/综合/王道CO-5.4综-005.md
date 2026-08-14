---
tags: [题目/综合, 王道CO, CO/05-中央处理器/04-控制器的功能和工作原理]
---
## 题干

【答案 P241】5. 设 CPU 中各部件及其相互连接关系如下图所示，其中 W 是写控制标志；

R 是读控制标志；

R1、R2 是暂存器。

![[王道CO-5.4综-005-fig1.jpg]]

- **（1）** 写出指令 ADD #a(#为立即寻址特征,隐含的操作数在 ACC 寄存器中)在执行阶段所完成的微操作命令及节拍安排。

- **（2）** 假设要求在取指周期实现PC+1→PC，且由ALU完成此操作(ALU能对它的一个源操作数完成加1的运算)。

以最少的节拍写出取指周期全部微操作命令及节拍安排。

> [!note]- 原题截图
> ![[王道CO-5.4综-005.png]]

> [!success]- 答案与解析
> **答案：**
>
> **（1）执行 ADD #a**
>
> - $T_0$：$Ad(IR)\rightarrow R1$；
> - $T_1$：$(R1)+(ACC)\rightarrow R2$；
> - $T_2$：$(R2)\rightarrow ACC$。
>
> **（2）最少节拍取指**
>
> - $T_0$：$(PC)\rightarrow MAR,\ 1\rightarrow R1$；
> - $T_1$：$M(MAR)\rightarrow MDR,\ (PC)+1\rightarrow R2$；
> - $T_2$：$(MDR)\rightarrow IR,\ OP(IR)\rightarrow$ 微操作命令形成部件；
> - $T_3$：$(R2)\rightarrow PC$。
>
> T0 中 PC 经总线送 MAR；T1 中 PC 经总线送 ALU 加 1，结果进入 R2；T2 中 MDR 经总线送 IR；T3 中 R2 经总线送 PC。
>
> **解析：** 立即数先由 IR 送 R1，与隐含操作数 ACC 经 ALU 相加后通过 R2 写回。取指时必须避免共享内部总线冲突，因此 PC 加 1 的结果先存 R2，待指令送入 IR 后再写回 PC。

## 关联

- 知识点：
- 题型：
