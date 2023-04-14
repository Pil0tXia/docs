(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{371:function(_,v,t){"use strict";t.r(v);var a=t(7),r=Object(a.a)({},(function(){var _=this,v=_._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("h1",{attrs:{id:"第二章-寄存器"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#第二章-寄存器"}},[_._v("#")]),_._v(" "),v("strong",[_._v("第二章 寄存器")])]),_._v(" "),v("p",[_._v("一个典型的 CPU 由运算器、控制器、寄存器等器件构成：")]),_._v(" "),v("ul",[v("li",[_._v("运算器进行信息处理；")]),_._v(" "),v("li",[_._v("寄存器进行信息存储；")]),_._v(" "),v("li",[_._v("控制器控制各种器件进行工作；")]),_._v(" "),v("li",[_._v("内部总线连接各种器件，在它们之间进行数据的传送。")])]),_._v(" "),v("p",[_._v("寄存器是 CPU 内部的存储器件。")]),_._v(" "),v("p",[_._v("8086CPU 内部有 14 个寄存器，分别是：AX、BX、CX、DX、SI、DI、SP、BP、IP、CS、SS、DS、ES、PSW。这 14 个寄存器都是 16 位的。")]),_._v(" "),v("h2",{attrs:{id:"_2-1-通用寄存器"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-通用寄存器"}},[_._v("#")]),_._v(" "),v("strong",[_._v("2.1 通用寄存器")])]),_._v(" "),v("p",[_._v("AX、BX、CX、DX 这这四个寄存器通常用来存放一般性数据，被称为通用寄存器。")]),_._v(" "),v("p",[_._v("为了保证向前兼容，8086CPU 的 AX、BX、CX、DX 这 4 个寄存器可以分为两个独立使用的 8 位寄存器来用：")]),_._v(" "),v("ul",[v("li",[_._v("AX 可以分为 AH 和 AL;")]),_._v(" "),v("li",[_._v("BX 可以分为 BH 和 BL;")]),_._v(" "),v("li",[_._v("CX 可以分为 CH 和 CL;")]),_._v(" "),v("li",[_._v("DX 可以分为 DH 和 DL。")])]),_._v(" "),v("h2",{attrs:{id:"_2-2-字在寄存器中的存储"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-字在寄存器中的存储"}},[_._v("#")]),_._v(" "),v("strong",[_._v("2.2 字在寄存器中的存储")])]),_._v(" "),v("p",[_._v("对于 8086CPU 来说，一个字由两个字节组成，这两个字节分别称之为高位字节和低位字节，并且存储于寄存器中的高 8 位和低 8 位。")]),_._v(" "),v("h2",{attrs:{id:"_2-3-几条汇编指令"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-几条汇编指令"}},[_._v("#")]),_._v(" "),v("strong",[_._v("2.3 几条汇编指令")])]),_._v(" "),v("p",[_._v("mov ax, 001AH—— 转移指令"),v("br"),_._v("\n add ax, bx—— 求和指令")]),_._v(" "),v("h2",{attrs:{id:"_2-4-物理地址"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-物理地址"}},[_._v("#")]),_._v(" "),v("strong",[_._v("2.4 物理地址")])]),_._v(" "),v("p",[_._v("所有内存单元构成的存储空间是一个一维线性空间，每一个内存单元在这个空间都有唯一的地址，我们将这个唯一的地址称为物理地址。")]),_._v(" "),v("h2",{attrs:{id:"_2-5-16位结构的cpu"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-5-16位结构的cpu"}},[_._v("#")]),_._v(" "),v("strong",[_._v("2.5 16 位结构的 CPU")])]),_._v(" "),v("p",[_._v("8086CPU 是 16 位结构的 CPU，这也就是说，在 8086 内部，能够一次性处理、传输、暂时存储的信息的最大长度是 16 位的。内存单元的地址在送上地址总线之前，必须在 CPU 中处理、传输、暂时存放，对于 16 位 CPU，能一次性处理、传输、暂时存储 16 位的地址。")]),_._v(" "),v("p",[_._v("但 8086CPU 有 20 根地址总线，那么 16 位的 8086CPU 是如何给出 20 位的地址总线的呢？")]),_._v(" "),v("h2",{attrs:{id:"_2-6-8086cpu给出物理地址的方法"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-6-8086cpu给出物理地址的方法"}},[_._v("#")]),_._v(" "),v("strong",[_._v("2.6 8086CPU 给出物理地址的方法")])]),_._v(" "),v("p",[_._v("8086CPU 地址总线长度大于字长，导致程序物理地址无法一次性传递给 CPU。为此，8086CPU 采用一种在内部用两个 16 位地址合成的方法来形成一个 20 位的物理地址。")]),_._v(" "),v("p",[_._v("当 8086CPU 要读写内存时："),v("br"),_._v("\n（1）CPU 中的相关部件提供两个 16 位的地址，一个称为段地址，另一个称为偏移地址；"),v("br"),_._v("\n（2）段地址和偏移地址通过内部总线送入一个称为地址加法器的部件；"),v("br"),_._v("\n（3）地址加法器将两个 16 位地址合成为一个 20 位的物理地址；"),v("br"),_._v("\n（4）地址加法器通过内部总线将 20 位物理地址送入输入输出控制电路；"),v("br"),_._v("\n（5）输入输出控制电路将 20 位物理地址送上地址总线；"),v("br"),_._v("\n（6）20 位物理地址被地址总线送到存储器。")]),_._v(" "),v("p",[_._v("地址加法器采用物理地址 = 段地址 X16 + 偏移地址的方法用段地址和偏移地址合成物理地址。")]),_._v(" "),v("h2",{attrs:{id:"_2-7-段地址x16-偏移地址-物理地址-的本质含义"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-7-段地址x16-偏移地址-物理地址-的本质含义"}},[_._v("#")]),_._v(" "),v("strong",[_._v("2.7  “段地址 X16 + 偏移地址 = 物理地址” 的本质含义")])]),_._v(" "),v("p",[_._v("“段地址 X16 + 偏移地址 = 物理地址” 的本质含义是：CPU 在访问内存时，用一个基础地址（段地址 X16）和一个相对基础地址的偏移地址相加，给出内存单元的物理地址。")]),_._v(" "),v("p",[_._v("举个例子：")]),_._v(" "),v("p",[_._v("假如说隔壁部门的同事张三来找你询问李四的工位？你发现李四的工位不好直接描述，既不是在角落也不是在中间。这时你发现李四旁边坐着的是经理，所以你告诉张三说李四就是经理左边第二位的那个人。这就是生活中使用 “基础地址 + 偏移地址 = 物理地址” 的例子。")]),_._v(" "),v("p",[_._v("还有比方说，大家描述学校水房的位置，一般会说在几号餐厅后面，或某宿舍楼旁边。")]),_._v(" "),v("h2",{attrs:{id:"_2-8-段的概念"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-8-段的概念"}},[_._v("#")]),_._v(" "),v("strong",[_._v("2.8 段的概念")])]),_._v(" "),v("p",[_._v("CPU 访问内存单元时，必须向内存提供内存单元的物理地址。8086CPU 在内部用段地址和偏移地址移位相加的方法形成最终的物理地址。")]),_._v(" "),v("p",[_._v("CPU 可以用不同的段地址和偏移地址形成同一个物理地址。")]),_._v(" "),v("p",[_._v("可以根据需要，将地址连续、起始地址为 16 的倍数的一组内存单元定义为一个段。")]),_._v(" "),v("h2",{attrs:{id:"_2-9-段寄存器"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-9-段寄存器"}},[_._v("#")]),_._v(" "),v("strong",[_._v("2.9 段寄存器")]),_._v(" *")]),_._v(" "),v("p",[_._v("8086CPU 内部有四个段寄存器：CS、DS、SS、ES。用于存储指定内存单元的段地址。")]),_._v(" "),v("h2",{attrs:{id:"_2-10-cs和ip"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-10-cs和ip"}},[_._v("#")]),_._v(" "),v("strong",[_._v("2.10 CS 和 IP")])]),_._v(" "),v("p",[_._v("8086PC 机中，任意时刻，CPU 将 CS:IP 指向的内容当作指令执行。其中 CS 为代码段寄存器，IP 为指令指针寄存器。")]),_._v(" "),v("p",[_._v("8086CPU 执行指令过程如下：")]),_._v(" "),v("p",[_._v("（1） 从 CS：IP 指向的内存单元读取指令，读取的指令进入指令缓冲器；"),v("br"),_._v("\n（2） IP = IP + 所读指令的长度，从而指向下一条指令；"),v("br"),_._v("\n（3） 执行指令。转到步骤（1），重复这个过程。")]),_._v(" "),v("h2",{attrs:{id:"_2-11-修改cs、ip的指令"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-11-修改cs、ip的指令"}},[_._v("#")]),_._v(" "),v("strong",[_._v("2.11 修改 CS、IP 的指令")])]),_._v(" "),v("p",[_._v("能够改变 CS、IP 内容的指令被统称为转移指令。如 jump 指令。")]),_._v(" "),v("h2",{attrs:{id:"_2-12-代码段"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-12-代码段"}},[_._v("#")]),_._v(" "),v("strong",[_._v("2.12 代码段")])]),_._v(" "),v("p",[_._v("我们可以将长度为 N (N <= 64KB) 的一组代码，存在一组地址连续、起始地址为 16 的倍数的内存单元中。这段地质连续的内存空间就称之为代码段。简单来说也就是存放代码的段。")]),_._v(" "),v("h2",{attrs:{id:"_2-9-2-12小结"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-9-2-12小结"}},[_._v("#")]),_._v(" "),v("strong",[_._v("2.9~2.12 小结")])]),_._v(" "),v("blockquote",[v("p",[_._v("（1） 段地址在 8086CPU 的段寄存器中存放。当 8086CPU 要访问内存时，由段寄存器提供内存单元的段地址。8086CPU 有 4 个段寄存器，其中 CS 用来存放指令的段地址。"),v("br"),_._v("\n（2） CS 存放指令的段地址，IP 存放指令的偏移地址。8086 机中，任意时刻，CPU 将 CS:IP 指向的内容当做指令指向。"),v("br"),_._v("\n（3） 8086CPU 工作过程：略"),v("br"),_._v("\n（4） 8086CPU 提供转移指令修改 CS、IP 的内容。")])]),_._v(" "),v("hr")])}),[],!1,null,null,null);v.default=r.exports}}]);