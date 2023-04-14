(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{375:function(s,a,t){"use strict";t.r(a);var n=t(7),v=Object(n.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"第五章-bx-和loop指令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第五章-bx-和loop指令"}},[s._v("#")]),s._v(" "),a("strong",[s._v("第五章  [BX] 和 loop 指令")])]),s._v(" "),a("p",[a("strong",[s._v("1. [bx] 和内存单元的描述")])]),s._v(" "),a("p",[s._v("[bx] 表示一个"),a("strong",[s._v("内存单元")]),s._v("，该内存单元的段地址位于 ds 中，偏移地址位于 bx 中。\n该内存单元的完整地址为： ds*16 + bx。")]),s._v(" "),a("p",[a("strong",[s._v("2. loop")])]),s._v(" "),a("p",[s._v("循环指令。指令格式为：loop 标号"),a("br"),s._v("\n该指令分两步执行。")]),s._v(" "),a("p",[s._v("第一步，计算 cx = cx -1"),a("br"),s._v("\n 第二步，判断 cx 中的值，不为零则跳转至标号出执行程序，如果为零则向下执行。")]),s._v(" "),a("p",[a("strong",[s._v("3. 我们定义的描述性的符号：“（）”")])]),s._v(" "),a("p",[s._v("“（）” 表示一个内存单元或寄存器的内容。也即是存储器中存储的值。")]),s._v(" "),a("p",[s._v("“（）” 中的元素可以有 3 中类型：寄存器名、段寄存器名、内存单元的物理地址（一个 20 位数据）。")]),s._v(" "),a("p",[a("strong",[s._v("4. 约定符号 idata 表示常量")])]),s._v(" "),a("p",[s._v("在以后的学习中我们约定 idata 表示一个常量。")]),s._v(" "),a("h2",{attrs:{id:"_5-1-bx"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-bx"}},[s._v("#")]),s._v(" "),a("strong",[s._v("5.1 [BX]")])]),s._v(" "),a("p",[s._v("[bx] 表示一个"),a("strong",[s._v("内存单元。")])]),s._v(" "),a("p",[s._v("mov ax, [bx] 代码的含义：将 ds:bx 所指向内存单元的内容放入 ax 寄存器中。即：(ax)=((ds*16)+(bx))")]),s._v(" "),a("p",[s._v("mov [bx], ax 代码的含义：将 ax 中的内容放入 ds:bx 所指向的内存单元中。即：((ds*16)+(bx))=(ax)")]),s._v(" "),a("h2",{attrs:{id:"_5-2-loop指令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-loop指令"}},[s._v("#")]),s._v(" "),a("strong",[s._v("5.2 Loop 指令")])]),s._v(" "),a("p",[s._v("首先 loop 指令的格式是：loop 标号。该指令分两步执行：")]),s._v(" "),a("p",[s._v("第一步， 计算 cx = cx - 1；"),a("br"),s._v("\n第二步，判断 cx 中的值，不为零则跳转至标号处执行程序，如果为零则向下执行。")]),s._v(" "),a("p",[s._v("一般使用 loop 指令实现循环功能。格式如下：")]),s._v(" "),a("div",{staticClass:"language-c line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[s._v("    mov cx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" n\ns"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("  add ax"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" ax\n    loop s\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("以上代码会循环执行 n 次。（n >= 0）")]),s._v(" "),a("h2",{attrs:{id:"_5-3-在debug中跟踪用loop指令实现的循环程序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-3-在debug中跟踪用loop指令实现的循环程序"}},[s._v("#")]),s._v(" "),a("strong",[s._v("5.3 在 Debug 中跟踪用 loop 指令实现的循环程序")])]),s._v(" "),a("p",[s._v("使用 Debug 调试程序时，有几条经常用到的指令。")]),s._v(" "),a("p",[a("strong",[s._v("T 指令")]),s._v("，单步执行指令。")]),s._v(" "),a("p",[a("strong",[s._v("g 指令")]),s._v('，跳至断点，从当前 IP 执行至指定 IP 处。"g 0012" 表示程序由当前位置执行至 DS:0012 处。')]),s._v(" "),a("p",[a("strong",[s._v("p 指令")]),s._v("，循环执行指令，p 指令用于执行完当前次数。")]),s._v(" "),a("h2",{attrs:{id:"_5-4-debug和汇编编译器masm对指令的不同处理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-4-debug和汇编编译器masm对指令的不同处理"}},[s._v("#")]),s._v(" "),a("strong",[s._v("5.4 Debug 和汇编编译器 masm 对指令的不同处理")])]),s._v(" "),a("p",[s._v('Debug 和汇编编译器 masm 对形如 “mov ax, [0]” 这类指令的处理是不同的。debug 将 "[0]" 看做是一个内存单元，该内存单元的地址是 ds*6 + 0。而编译器直接将 “[0]” 看做立即数 0。因此有如下约定。')]),s._v(" "),a("p",[s._v('（1）在汇编源程序中，如果指令访问一个内存单元，则在指令中必须用 "[...]" 来表示内存单元，如果在 “[...]” 里用一个常量 idata 直接给出内存单元的偏移地址，就要在 “[]” 的前面显式的给出段地址所在的段寄存器。')]),s._v(" "),a("p",[s._v("（2）如果在 “[]” 里面用寄存器，比如 bx, 间接给出内存单元的偏移地址，则段地址默认在 ds 中。当然，也可以显式的给出段地址所在的段寄存器。")]),s._v(" "),a("p",[s._v("以上两点概括来说就是，如果内存单元的偏移地址使用立即数给出，则必须显式指明其段地址所在的段寄存器。")]),s._v(" "),a("h2",{attrs:{id:"_5-5-loop和-bx-的联合应用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-5-loop和-bx-的联合应用"}},[s._v("#")]),s._v(" "),a("strong",[s._v("5.5 loop 和 [bx] 的联合应用")])]),s._v(" "),a("p",[s._v("通过 loop 和 [bx] 联合应用实现对连续内存单元的操作实例：")]),s._v(" "),a("div",{staticClass:"language-c line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[s._v("    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n    mov bx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n    mov cx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("50")]),s._v("\n\ns"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("  mov ax"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("bx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n    inc bx\n    loop s\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("p",[s._v("以上代码通过循环实现了对内存单元 DS:0000H~DS:0032H 内容的操作。")]),s._v(" "),a("h2",{attrs:{id:"_5-6-段前缀"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-6-段前缀"}},[s._v("#")]),s._v(" "),a("strong",[s._v("5.6 段前缀")])]),s._v(" "),a("p",[s._v("如果内存单元的偏移地址由 bx 给出，如 “mov ax, [bx]”，则段地址默认位于 ds 中。我们也可以在访问内存单元的指令中显式的给出内存单元段地址所在的段寄存器。比如：")]),s._v(" "),a("p",[s._v("（1）mov ax, ds:[bx]"),a("br"),s._v("\n（2）mov ax, cs:[bx]"),a("br"),s._v("\n（3）mov ax, ss:[bx]"),a("br"),s._v("\n（4）mov ax, cs:[bx]"),a("br"),s._v("\n（5）mov ax, ss:[0]"),a("br"),s._v("\n（6）mov ax, cs:[0]")]),s._v(" "),a("p",[s._v("这些出现在访问内存单元的指令中，用于显式的指明内存单元的段地址的 “ds:”、“cs:”、“ss:”、“es:”，在汇编语言中称为"),a("strong",[s._v("段前缀")]),s._v("。")]),s._v(" "),a("h2",{attrs:{id:"_5-7-一段安全的空间"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-7-一段安全的空间"}},[s._v("#")]),s._v(" "),a("strong",[s._v("5.7 一段安全的空间")])]),s._v(" "),a("p",[s._v("（1）我们需要直接向一段内存汇总写入内容；")]),s._v(" "),a("p",[s._v("（2）这段内存空间不应当存放系统或其他程序的数据或代码，否则写入操作很可能引发错误；")]),s._v(" "),a("p",[s._v("（3）DOS 方式下，一般情况，0:200~0:2ff 空间中没有系统或其他程序的数据或代码；")]),s._v(" "),a("p",[s._v("（4）以后，我们需要直接向一段内存中写入内容时，就使用 0:200~0:2ff 这段空间。")]),s._v(" "),a("h2",{attrs:{id:"_5-8-段前缀的使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-8-段前缀的使用"}},[s._v("#")]),s._v(" "),a("strong",[s._v("5.8 段前缀的使用")])]),s._v(" "),a("p",[s._v("当需要操作的内存空间跨段时，显式的使用段前缀给出内存单元的段地址，可以避免在循环中对 ds 的重复设置。")]),s._v(" "),a("p",[s._v("也即是说一个内存单元的段地址不仅仅可以由 ds 给出，也可以通过 cs、ss、es 给出。")]),s._v(" "),a("hr")])}),[],!1,null,null,null);a.default=v.exports}}]);