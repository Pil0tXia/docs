(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{380:function(_,v,t){"use strict";t.r(v);var r=t(7),a=Object(r.a)({},(function(){var _=this,v=_._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("h1",{attrs:{id:"第十章-call和ret指令"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#第十章-call和ret指令"}},[_._v("#")]),_._v(" "),v("strong",[_._v("第十章 CALL 和 RET 指令")])]),_._v(" "),v("blockquote",[v("p",[_._v("call 和 ret 都是转移指令，它们都修改 IP，或同时修改 CS 和 IP。它们经常被共同用来实现子程序的设计。")])]),_._v(" "),v("h2",{attrs:{id:"_10-1-ret-和-retf"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_10-1-ret-和-retf"}},[_._v("#")]),_._v(" "),v("strong",[_._v("10.1 ret 和 retf")])]),_._v(" "),v("p",[_._v("这个两个指令可以理解为高级语言中的 return 关键字，表示程序返回。")]),_._v(" "),v("p",[_._v("ret 用栈中的数据，修改 IP 的内容，从而实现近转移；"),v("br"),_._v("\nretf 指令用栈中的数据，修改 CS 和 IP 的内容，从而实现远转移。")]),_._v(" "),v("p",[_._v("CPU 执行 ret 指令时，进行下面两步操作：")]),_._v(" "),v("p",[_._v("（1）(IP) = ((SS)*16+(SP))"),v("br"),_._v("\n（2）(sp) = (sp)+2")]),_._v(" "),v("p",[_._v("以上步骤相当于进行：")]),_._v(" "),v("blockquote",[v("p",[_._v("pop IP")])]),_._v(" "),v("p",[_._v("CPU 执行 retf 指令时，进行下面 4 步操作：")]),_._v(" "),v("p",[_._v("（1）(IP) = ((SS)*16+(SP))"),v("br"),_._v("\n（2）(sp) = (sp)+2"),v("br"),_._v("\n（3）(CS) = ((SS)*16+(SP))"),v("br"),_._v("\n（4）(sp) = (sp)+2")]),_._v(" "),v("p",[_._v("以上步骤相当于进行：")]),_._v(" "),v("blockquote",[v("p",[_._v("pop IP\npop CS")])]),_._v(" "),v("h2",{attrs:{id:"_10-2-call-指令"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_10-2-call-指令"}},[_._v("#")]),_._v(" "),v("strong",[_._v("10.2 call 指令")])]),_._v(" "),v("p",[_._v("call 指令可以理解为高级语言中的方法（函数）调用功能。")]),_._v(" "),v("p",[_._v("CPU 指令 call 指令时，进行两步操作：")]),_._v(" "),v("p",[_._v("（1）将当前的 IP 或 CS 和 IP 压入栈中。  （保存现场）\n（2）转移。")]),_._v(" "),v("p",[_._v("call 指令不能实现短转移，除此之外，call 指令实现转移的方法和 jmp 指令的原理相同。")]),_._v(" "),v("h2",{attrs:{id:"_10-3-依据位移进行转移的call指令"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_10-3-依据位移进行转移的call指令"}},[_._v("#")]),_._v(" "),v("strong",[_._v("10.3 依据位移进行转移的 call 指令")])]),_._v(" "),v("p",[_._v("指令格式：")]),_._v(" "),v("blockquote",[v("p",[_._v("call 标号")])]),_._v(" "),v("p",[_._v("CPU 执行该指令时相当于进行：")]),_._v(" "),v("blockquote",[v("p",[_._v("push IP\njmp near ptr 标号")])]),_._v(" "),v("h2",{attrs:{id:"_10-4-转移的目的地址在指令中的call指令"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_10-4-转移的目的地址在指令中的call指令"}},[_._v("#")]),_._v(" "),v("strong",[_._v("10.4 转移的目的地址在指令中的 call 指令")])]),_._v(" "),v("p",[_._v("指令格式：")]),_._v(" "),v("blockquote",[v("p",[_._v("call far ptr 标号")])]),_._v(" "),v("p",[_._v("CPU 执行该指令时相当于进行：")]),_._v(" "),v("blockquote",[v("p",[_._v("push CS\npush IP\njmp far ptr 标号")])]),_._v(" "),v("p",[_._v("该指令编译的机器指令中包含了转移的目的地址。包括段地址 CS 的值及偏移地址 IP 的值。")]),_._v(" "),v("h2",{attrs:{id:"_10-5-转移地址在寄存器中的call指令"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_10-5-转移地址在寄存器中的call指令"}},[_._v("#")]),_._v(" "),v("strong",[_._v("10.5 转移地址在寄存器中的 call 指令")])]),_._v(" "),v("p",[_._v("指令格式：")]),_._v(" "),v("blockquote",[v("p",[_._v("call 16 位 reg")])]),_._v(" "),v("p",[_._v("CPU 执行该指令时相当于进行：")]),_._v(" "),v("blockquote",[v("p",[_._v("push IP\njmp 16 位 reg")])]),_._v(" "),v("h2",{attrs:{id:"_10-6-转移地址在内存中的call指令"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_10-6-转移地址在内存中的call指令"}},[_._v("#")]),_._v(" "),v("strong",[_._v("10.6 转移地址在内存中的 call 指令")])]),_._v(" "),v("p",[_._v("转移地址在内存中的 call 指令有两种格式。")]),_._v(" "),v("p",[_._v("（1）第一种指令格式：")]),_._v(" "),v("blockquote",[v("p",[_._v("call word ptr 内存单元地址")])]),_._v(" "),v("p",[_._v("CPU 执行该指令时相当于进行：")]),_._v(" "),v("blockquote",[v("p",[_._v("push IP\njmp word ptr 内存单元地址")])]),_._v(" "),v("p",[_._v("（2）第二种指令格式:")]),_._v(" "),v("blockquote",[v("p",[_._v("call dword ptr 内存单元地址")])]),_._v(" "),v("p",[_._v("CPU 执行该指令时相当于进行：")]),_._v(" "),v("blockquote",[v("p",[_._v("push CS\npush IP\njmp dword ptr 内存单元地址")])]),_._v(" "),v("h2",{attrs:{id:"_10-7-call和ret的配合使用"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_10-7-call和ret的配合使用"}},[_._v("#")]),_._v(" "),v("strong",[_._v("10.7 call 和 ret 的配合使用")])]),_._v(" "),v("p",[_._v("call 和 ret 的配合使用可以用来实现子程序的机制。call 指令在转去执行子程序之前，会将当前指令下一条指令的位置保持在栈中，当子程序执行 ret 或 retf 指令后，会用栈中的数据设置 ip 或 cs 和 ip 的值，从而转到 call 指令后面的代码处继续执行。")]),_._v(" "),v("h2",{attrs:{id:"_10-8-mul指令"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_10-8-mul指令"}},[_._v("#")]),_._v(" "),v("strong",[_._v("10.8 mul 指令")])]),_._v(" "),v("p",[_._v("（1）两个相乘的数：练歌相乘的数，要么都是 8 位，要么都是 16 位。如果是 8 位，一个默认放在 AL 中，另一个放在 8 位 reg 或内存字节单元中；如果是 16 位，一个默认放在 AX 中，另一个放在 16 位 reg 或内存字单元中。")]),_._v(" "),v("p",[_._v("（2）结果：如果是 8 位乘法，结果默认放在 AX 中；如果是 16 位乘法，结果高位默认在 DX 中存放，低位在 AX 中存放。")]),_._v(" "),v("h2",{attrs:{id:"_10-9-模块化程序设计"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_10-9-模块化程序设计"}},[_._v("#")]),_._v(" "),v("strong",[_._v("10.9 模块化程序设计")])]),_._v(" "),v("blockquote",[v("p",[_._v("现实问题比较复杂，对现实问题进行分析时，把它转化为相互联系、不同层次的子问题，是必须的解决方法。")])]),_._v(" "),v("p",[_._v("在高级语言中的函数或者方法就是这种思想的体现。在汇编语言中我们将高级语言中的方法或函数称之为子程序。")]),_._v(" "),v("h2",{attrs:{id:"_10-10-参数和结果传递的问题"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_10-10-参数和结果传递的问题"}},[_._v("#")]),_._v(" "),v("strong",[_._v("10.10 参数和结果传递的问题")])]),_._v(" "),v("p",[_._v("当我们设计子程序时面临两个问题：")]),_._v(" "),v("p",[_._v("（1）参数存放的位置？"),v("br"),_._v("\n（2）计算结果存放的位置？")]),_._v(" "),v("p",[_._v("实际上，我们可以将参数及结果存放于任何可以存储数据的地方。一般情况下，我们可以将参数存储在寄存器中，也可以存储在普通内存单元中。更一般的做法我们将其存储在栈中进行传递。")]),_._v(" "),v("h2",{attrs:{id:"_10-11-寄存器冲突的问题"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_10-11-寄存器冲突的问题"}},[_._v("#")]),_._v(" "),v("strong",[_._v("10.11 寄存器冲突的问题")])]),_._v(" "),v("p",[_._v("寄存器数量是有限的，子程序中使用的寄存器，很可能在主程序中也要使用，造成了寄存器使用上的冲突。解决这个问题的简捷方法是，"),v("strong",[_._v("在子程序的开始将子程序中所有用到的寄存器中的内容都保存起来，在子程序返回前再恢复。")]),_._v(" 可以用栈来保存寄存器中的内容。")]),_._v(" "),v("p",[_._v("栈是临时保存数据的一个比较理想的数据结构。")]),_._v(" "),v("hr")])}),[],!1,null,null,null);v.default=a.exports}}]);