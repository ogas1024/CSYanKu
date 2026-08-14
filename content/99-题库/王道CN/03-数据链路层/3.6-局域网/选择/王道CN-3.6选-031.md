---
tags: [题目/选择, 王道CN, CN/03-数据链路层/06-局域网]
answer: D
---
## 题干

31. 在下图所示的网络中, 假定主机 A 给主机 B 发送数据, 在 MAC 帧从接入点 AP2 转发到目的主机 B 的这段链路上, MAC 帧的地址 1、地址 2 和地址 3 分别是（）

![[王道CN-3.6选-031-fig1.jpg]]

A. BSSID2、BSSID1、$MAC_B$

B. $MAC_B$、BSSID2、BSSID1

C. BSSID2、$MAC_B$、$MAC_A$

D. $MAC_B$、BSSID2、$MAC_2$

> [!note]- 原题截图
> ![[王道CN-3.6选-031.png]]

> [!success]- 答案与解析
> **答案：** D
>
> **解析：** AP2到主机B时To DS=0、From DS=1，地址1为B的MAC，地址2为AP2的BSSID，地址3为原源路由器接口2的MAC。

## 关联

- 知识点：
- 题型：
