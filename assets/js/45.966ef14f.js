(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{372:function(_,t,r){"use strict";r.r(t);var v=r(7),a=Object(v.a)({},(function(){var _=this,t=_._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[t("h1",{attrs:{id:"第一章-基础知识"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#第一章-基础知识"}},[_._v("#")]),_._v(" "),t("strong",[_._v("第一章 基础知识")])]),_._v(" "),t("p",[_._v("汇编课程研究重点放在如何利用硬件系统的编程结构和指令集有效灵活的控制系统进行工作。")]),_._v(" "),t("h2",{attrs:{id:"_1-1-机器语言"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-机器语言"}},[_._v("#")]),_._v(" "),t("strong",[_._v("1.1 机器语言")])]),_._v(" "),t("p",[_._v("机器语言是机器指令的集合。电子计算机的机器指令是一列二进制数字。计算机将之转换为一列高低电平，以使计算机的电子器件受到驱动，进行运算。")]),_._v(" "),t("p",[_._v("每一种微处理器都有自己的机器指令集，也就是机器语言。")]),_._v(" "),t("h2",{attrs:{id:"_1-2-汇编语言的产生"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-汇编语言的产生"}},[_._v("#")]),_._v(" "),t("strong",[_._v("1.2 汇编语言的产生")])]),_._v(" "),t("p",[_._v("机器语言难以辩别和记忆，基于此人们发明了汇编语言。")]),_._v(" "),t("p",[t("strong",[_._v("寄存器")]),_._v(" 简单的讲是 CPU 中（内部）可以存储数据的器件。"),t("br"),_._v(" "),t("strong",[_._v("编译器")]),_._v(" 能够将汇编指令转换为机器指令的翻译程序。")]),_._v(" "),t("h2",{attrs:{id:"_1-3-汇编语言的组成"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-汇编语言的组成"}},[_._v("#")]),_._v(" "),t("strong",[_._v("1.3 汇编语言的组成")])]),_._v(" "),t("p",[_._v("汇编语言主要由以下 3 类指令组成：")]),_._v(" "),t("p",[_._v("（1） 汇编指令：机器码的助记符，有对应的机器码。"),t("br"),_._v("\n（2） 伪指令：没有对应的机器码，由编译器执行，计算机并不执行。"),t("br"),_._v("\n（3） 其他符号：如 +、-、*、/ 等，由编译器识别，没有对应的机器码。")]),_._v(" "),t("h2",{attrs:{id:"_1-4-存储器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-存储器"}},[_._v("#")]),_._v(" "),t("strong",[_._v("1.4 存储器")])]),_._v(" "),t("h2",{attrs:{id:"_1-5-指令和数据"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-5-指令和数据"}},[_._v("#")]),_._v(" "),t("strong",[_._v("1.5 指令和数据")])]),_._v(" "),t("p",[_._v("指令和数据是应用上的概念。在内存或磁盘上，指令和数据没有任何区别，都是二进制信息。")]),_._v(" "),t("h2",{attrs:{id:"_1-6-存储单元"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-6-存储单元"}},[_._v("#")]),_._v(" "),t("strong",[_._v("1.6 存储单元")])]),_._v(" "),t("p",[_._v("计算机内的最小信息单位是 bit，即一个二进制位。"),t("br"),_._v("\n计算机内的基本存储单元是 Byte，即一个字节。一个字节等于 8 个二进制位。"),t("br"),_._v("\n1KB = 1024B, 1MB = 1024KB, 1GB = 1024MB, 1TB = 1024GB")]),_._v(" "),t("h2",{attrs:{id:"_1-7-cpu-对存储器的读写"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-7-cpu-对存储器的读写"}},[_._v("#")]),_._v(" "),t("strong",[_._v("1.7 CPU 对存储器的读写")])]),_._v(" "),t("p",[_._v("CPU 通过地址总线给出数据存储位置。"),t("br"),_._v("\nCPU 通过控制总线给出数据存储方向。"),t("br"),_._v("\nCUP 通过数据总线进行数据传输。")]),_._v(" "),t("h2",{attrs:{id:"_1-8-地址总线"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-8-地址总线"}},[_._v("#")]),_._v(" "),t("strong",[_._v("1.8 地址总线")])]),_._v(" "),t("p",[_._v("一个 CPU 有 N 根地址线，则可以说这个 CPU 的地址总线宽度为 N。这样的 CPU 最多可以寻找 2 的 N 次方个内存单元。")]),_._v(" "),t("h2",{attrs:{id:"_1-9-数据总线"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-9-数据总线"}},[_._v("#")]),_._v(" "),t("strong",[_._v("1.9 数据总线")])]),_._v(" "),t("p",[_._v("数据总线的宽度决定了 CPU 和外界的数据传送速度。")]),_._v(" "),t("h2",{attrs:{id:"_1-10-控制总线"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-10-控制总线"}},[_._v("#")]),_._v(" "),t("strong",[_._v("1.10 控制总线")])]),_._v(" "),t("p",[_._v("CPU 对外部器件的控制是通过控制总线来进行的。控制总线是一些不同控制线的集合。")]),_._v(" "),t("h2",{attrs:{id:"_1-1-1-10-小结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-1-10-小结"}},[_._v("#")]),_._v(" "),t("strong",[_._v("1.1~1.10 小结")])]),_._v(" "),t("blockquote",[t("p",[_._v("（1） 汇编指令是机器指令的助记符，同机器指令一一对应。"),t("br"),_._v("\n（2） 每一种 CPU 都有自己的汇编指令集。"),t("br"),_._v("\n（3） CPU 可以直接使用的信息在存储器中存放。"),t("br"),_._v("\n（4） 在存储器中指令和数据没有任何区别，都是二进制信息。"),t("br"),_._v("\n（5） 存储单元从零开始顺序编号。\n（6） 一个存储单元可以存储 8 个 bit，即 8 位二进制数。"),t("br"),_._v("\n（7） 1Byte = 8bit， 1KB = 1024B = 2^10B， 1MB = 1024KB = 2^20B, 1GB = 1024MB = 2"),t("sup",[_._v("30B。2")]),_._v("10 = 1024, 2^16 = 65536。\n（8） 每一个 CPU 芯片都有许多管脚，这些管脚和总线相连。也可以说，这些管脚引出总线。一个 CPU 可以引出 3 中总线的宽度标志了这个 CPU 的不同方面的性能："),t("br"),_._v("\n地址总线的宽度决定了 CPU 的寻址能力；"),t("br"),_._v("\n数据总线的宽度决定了 CPU 与其他器件进行数据传送时一次数据传送量；"),t("br"),_._v("\n控制总线的宽度决定了 CPU 对系统中其他器件的控制能力。")])]),_._v(" "),t("h2",{attrs:{id:"_1-11-内存地址空间-概述"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-11-内存地址空间-概述"}},[_._v("#")]),_._v(" "),t("strong",[_._v("1.11 内存地址空间（概述）")])]),_._v(" "),t("p",[_._v("内存地址空间就是 CPU 可以通过地址总线寻址到的内存单元集合。")]),_._v(" "),t("h2",{attrs:{id:"_1-12-主板"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-12-主板"}},[_._v("#")]),_._v(" "),t("strong",[_._v("1.12 主板")])]),_._v(" "),t("h2",{attrs:{id:"_1-13-接口卡"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-13-接口卡"}},[_._v("#")]),_._v(" "),t("strong",[_._v("1.13 接口卡")])]),_._v(" "),t("p",[_._v("CPU 通过总线向接口卡发送命令，接口卡根据 CPU 的命令控制外设工作。如：网卡、显卡、声卡等。")]),_._v(" "),t("h2",{attrs:{id:"_1-14-各类存储器芯片"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-14-各类存储器芯片"}},[_._v("#")]),_._v(" "),t("strong",[_._v("1.14 各类存储器芯片")])]),_._v(" "),t("p",[t("strong",[_._v("RAM:")]),_._v(" 随机存储器，可读可写，但必须带电存储，断电后存储内容消失。"),t("br"),_._v(" "),t("strong",[_._v("ROM:")]),_._v(" 只读存储器，只能读出，不能写入。断电后存储内容不消失。"),t("br"),_._v(" "),t("strong",[_._v("BIOS:")]),_._v(" Basic Input/Output System，基本输入输出系统。BIOS 是由主板和各类接口卡（如显卡、网卡等）厂商提供的软件系统。 可以通过它利用该硬件设备进行最基本的输入输出。在主板和某些接口卡上茶油存储相应 BIOS 的 ROM。例如，主板上的 ROM 中存储着主板的 BIOS (通常称为系统 BIOS)；显卡上的 ROM 存储着显卡的 BIOS；如果网卡上装有 ROM，那其中就可以存储网卡的 BIOS。")]),_._v(" "),t("h2",{attrs:{id:"_1-15-内存地址空间"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-15-内存地址空间"}},[_._v("#")]),_._v(" "),t("strong",[_._v("1.15 内存地址空间")])]),_._v(" "),t("p",[_._v("最终运行程序的是 CPU，我们用汇编语言编程的时候，必须要从 CPU 的角度考虑问题。对 CPU 来讲，系统中所有存储器中的存储单元都处于一个统一的逻辑存储器中，它的容量受 CPU 寻址能力的限制。这个逻辑存储器即是我们所说的内存地址空间。")]),_._v(" "),t("hr")])}),[],!1,null,null,null);t.default=a.exports}}]);