(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{381:function(_,v,t){"use strict";t.r(v);var a=t(7),s=Object(a.a)({},(function(){var _=this,v=_._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("h1",{attrs:{id:"第十一章-标志寄存器"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#第十一章-标志寄存器"}},[_._v("#")]),_._v(" "),v("strong",[_._v("第十一章 标志寄存器")])]),_._v(" "),v("p",[_._v("标志寄存器 (Flag Register) 是我们 8086CPU14 个寄存器中最为复杂的一个。其他 13 个寄存器一般用于存放数据，整个寄存器具有一个含义。而 flag 寄存器是按位起作用的。")]),_._v(" "),v("p",[_._v("这一章中我们主要学习 CF、PF、ZF、SF、OF、DF 等标记位，以及其相关部分指令。")]),_._v(" "),v("h2",{attrs:{id:"_11-1-zf标志"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_11-1-zf标志"}},[_._v("#")]),_._v(" "),v("strong",[_._v("11.1 ZF 标志")])]),_._v(" "),v("p",[_._v("Zero Flag，零标记位。用于记录相关指令执行后，其结果是否为 0。如果结果为 0，则 ZF=1，如果结果非 0，则 ZF=0。")]),_._v(" "),v("p",[_._v("需要特别注意的是：")]),_._v(" "),v("blockquote",[v("p",[_._v("在 8086 的指令集中，有的指令的执行是影响标志寄存器的，比如，add、sub、mul、div、inc、or、and 等，它们大都是运算指令（进行逻辑或算术运算）；有的指令的执行对标志寄存器没有影响，比如 mov、push、pop 等，它们大都是传送指令。")])]),_._v(" "),v("h2",{attrs:{id:"_11-2-pf标志"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_11-2-pf标志"}},[_._v("#")]),_._v(" "),v("strong",[_._v("11.2 PF 标志")])]),_._v(" "),v("p",[_._v("Parity Flag，奇偶标记位。它用于记录相关指令执行后，其结果的所有 bit 位中 1 的个数是否为偶数。如果 1 的个数为偶数，则 pf=1，如果为奇数，则 pf=0。")]),_._v(" "),v("h2",{attrs:{id:"_11-3-sf标志"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_11-3-sf标志"}},[_._v("#")]),_._v(" "),v("strong",[_._v("11.3 SF 标志")])]),_._v(" "),v("p",[_._v("Sign Flag，符号标记位。它用于记录相关指令执行后，其结果是否为负。如果结果为负，则 SF=1，如果结果非负，则 SF=0。")]),_._v(" "),v("p",[_._v("计算机中通常用补码来表示有符号数，补码在形式上与普通的无符号二进制数据并无差异。也即是说，给定的一个二进制数，我们既可以把它当做有符号数的补码形式，也可以当做一个无符号数。对于计算机来说，无论是无符号数还是有符号数的补码形式，在计算方式上并无差异（补码的符号位同样参与运算）。")]),_._v(" "),v("p",[_._v("SF 标志，就是 CPU 对"),v("strong",[_._v("有符号数")]),_._v("运算结果的一种记录，它记录数据的正负。在我们将数据当做有符号数来运算的时候，可以通过它来得知结果的正负。如果我们将数据当做无符号数来运算，SF 的值则没有意义，虽然相关指令影响了它的值。")]),_._v(" "),v("h2",{attrs:{id:"_11-4-cf标志"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_11-4-cf标志"}},[_._v("#")]),_._v(" "),v("strong",[_._v("11.4 CF 标志")])]),_._v(" "),v("p",[_._v("Carry Flag，进位标志位。一般情况下，在进行"),v("strong",[_._v("无符号数运算")]),_._v("的时候，它记录了运算结果的最高有效位向更高位的进位值，或从更高位的借位值。")]),_._v(" "),v("h2",{attrs:{id:"_11-5-of标志"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_11-5-of标志"}},[_._v("#")]),_._v(" "),v("strong",[_._v("11.5 OF 标志")])]),_._v(" "),v("p",[_._v("Overflow Flag，溢出标志位。在进行"),v("strong",[_._v("有符号数运算")]),_._v("的时候，如果计算结果超出了机器所能表示的范围则发生溢出，此时 OF=1。否则，OF=0。")]),_._v(" "),v("p",[_._v("注意区分 CF 和 OF 的区别：CF 是对无符号数运算有意义的标志位，OF 是对有符号数运算有意义的标志位。")]),_._v(" "),v("h2",{attrs:{id:"_11-6-adc指令"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_11-6-adc指令"}},[_._v("#")]),_._v(" "),v("strong",[_._v("11.6 adc 指令")])]),_._v(" "),v("p",[_._v("adc 是带进位加法指令，它利用了 CF 位上记录的进位值。")]),_._v(" "),v("p",[_._v("指令格式：")]),_._v(" "),v("blockquote",[v("p",[_._v("adc 操作对象 1，操作对象 2")])]),_._v(" "),v("p",[_._v("功能：操作对象 1 = 操作对象 1 + 操作对象 2+CF")]),_._v(" "),v("p",[_._v("比如指令 adc ax,bx 实现的功能是：（ax）= （ax）+ （bx）+ CF")]),_._v(" "),v("p",[_._v("既然我们已经有了 add 指令，那为什么还要设计 adc 指令呢？")]),_._v(" "),v("p",[_._v("设想一下，之前我们使用 add 指令做加法运算的时候，相加结果都是 16 位以内，如果和大于 16 位就会产生误差。adc 指令目的就是对任意大的数据进行加法运算。自习观察加法运算可以得到如下规律：")]),_._v(" "),v("p",[_._v("任意大的加法运算都可以分解为多步进行，低位相加，高位相加再加上低位相加产生的进位值，直至所有位都相加完毕。")]),_._v(" "),v("p",[_._v("使用 adc 指令结合上述规律就可以实现对任意大的数据进行加法运算。")]),_._v(" "),v("h2",{attrs:{id:"_11-7-sbb指令"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_11-7-sbb指令"}},[_._v("#")]),_._v(" "),v("strong",[_._v("11.7 sbb 指令")])]),_._v(" "),v("p",[_._v("sbb 是带借位减法指令，它利用了 CF 位上记录的错位值。")]),_._v(" "),v("p",[_._v("指令格式：")]),_._v(" "),v("blockquote",[v("p",[_._v("sbb 操作对象 1，操作对象 2")])]),_._v(" "),v("p",[_._v("功能：操作对象 1 = 操作对象 1 - 操作对象 2-CF。")]),_._v(" "),v("p",[_._v("sbb 指令和 adc 指令是基于同样的思想设计的两条指令，在应用思路上和 adc 指令类似。")]),_._v(" "),v("h2",{attrs:{id:"_11-8-cmp指令"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_11-8-cmp指令"}},[_._v("#")]),_._v(" "),v("strong",[_._v("11.8 cmp 指令")])]),_._v(" "),v("p",[_._v("cmp 是比较指令，cmp 的功能相当于减法指令，只是不保存结果。cmp 指令执行后，将对标志寄存器产生影响。")]),_._v(" "),v("p",[_._v("指令格式：")]),_._v(" "),v("blockquote",[v("p",[_._v("cmp 操作对象 1，操作对象 2")])]),_._v(" "),v("p",[_._v("功能：计算操作对象 1 - 操作对象 2 但并不保存结果，仅仅根据计算结果对标志寄存器进行设置。")]),_._v(" "),v("p",[_._v("利用 cmp ax, bx 指令对两个无符号数 ax 和 bx 进行比较，如果执行后：")]),_._v(" "),v("p",[_._v("zf = 1，说明 (ax) = (bx)"),v("br"),_._v("\n zf = 0，说明 (ax) ≠ (bx)"),v("br"),_._v("\n cf = 1，说明 (ax) < (bx)"),v("br"),_._v("\n cf = 0，说明 (ax) ≥ (bx)"),v("br"),_._v("\n cf = 0 并且 zf = 0，说明 (ax) > (bx)"),v("br"),_._v("\n cf = 1 或 zf = 1，说明 (ax) ≤ (bx)")]),_._v(" "),v("p",[_._v("利用 cmp ah,bh 指令对两个有符号数 ah 和 bh 进行比较，由于有符号数的比较较为复杂，主要是考虑到溢出的特殊情景，我们分类讨论：")]),_._v(" "),v("p",[_._v("（1） 如果 sf = 1 并且 of = 0")]),_._v(" "),v("p",[_._v("of = 0 说明没有溢出，并且 sf = 1 说明逻辑上真正的结果为负数。所以 (ah) < (bh)。")]),_._v(" "),v("p",[_._v("（2） 如果 sf = 1 并且 of = 1")]),_._v(" "),v("p",[_._v("of = 1 说明存在溢出，"),v("strong",[_._v("针对补码求和来说，如果结果非 0 并且产生溢出，正确的逻辑结果符号与实际的结果符号必然相反。")]),_._v(" sf = 1 说明实际结果为负，那么正确的逻辑结果应该为正。所以 (ah) > (bh)。")]),_._v(" "),v("p",[_._v("（3） 如果 sf = 0 并且 of = 1")]),_._v(" "),v("p",[_._v("of = 1 说明存在溢出，"),v("strong",[_._v("针对补码求和来说，如果结果非 0 并且产生溢出，正确的逻辑结果符号与实际的结果符号必然相反。")]),_._v(" sf = 0 说明实际运算结果必然不小于 0，因为存在溢出所以实际运算结果必不等于 0，所以实际运算结果必然大于 0，进而推导出正确的逻辑运算结果必然小于 0。所以 (ah) < (bh)。")]),_._v(" "),v("p",[_._v("（4） 如果 sf = 0 并且 of = 0")]),_._v(" "),v("p",[_._v("of = 0 说明没有溢出，并且 sf = 0，说明逻辑上真正的结果为非负数。所以 (ah) ≥ (bh)。")]),_._v(" "),v("p",[_._v("（5） 如果 zf = 1")]),_._v(" "),v("p",[_._v("这种情形比较简单。此时 (ah) = (bh)。")]),_._v(" "),v("h2",{attrs:{id:"_11-9-检测比较结果的条件转移指令"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_11-9-检测比较结果的条件转移指令"}},[_._v("#")]),_._v(" "),v("strong",[_._v("11.9 检测比较结果的条件转移指令")])]),_._v(" "),v("p",[_._v("“转移” 指的是它能够修改 IP，而 “条件” 指的是它可以根据某种条件，决定是否修改 IP。比如，jcxz 就是一个条件转移指令，它可以检测 cx 中的数值，如果 (cx) = 0，就修改 IP，否则什么也不做。"),v("strong",[_._v("所有条件转移指令的位移都是 [-128, 127]（即它们都是短转移）。")])]),_._v(" "),v("p",[_._v("jcxz 是根据寄存器 cx 的值来判断是否转移，除此之外还存在其他条件转移指令，大多数条件转移指令都检测标志寄存器相关标志位，根据检测的结果来决定是否修改 IP。")]),_._v(" "),v("p",[_._v("下表列出了常用的根据无符号数的比较结果进行转移的条件转移指令：")]),_._v(" "),v("table",[v("thead",[v("tr",[v("th",[_._v("指令")]),_._v(" "),v("th",[_._v("含义")]),_._v(" "),v("th",[_._v("检测的相关标志位")]),_._v(" "),v("th",[_._v("备注")])])]),_._v(" "),v("tbody",[v("tr",[v("td",[_._v("je")]),_._v(" "),v("td",[_._v("等于则转移")]),_._v(" "),v("td",[_._v("zf = 1")]),_._v(" "),v("td",[_._v("e 表示 equal")])]),_._v(" "),v("tr",[v("td",[_._v("jne")]),_._v(" "),v("td",[_._v("不等于则转移")]),_._v(" "),v("td",[_._v("zf = 0")]),_._v(" "),v("td",[_._v("ne 表示 not eauql")])]),_._v(" "),v("tr",[v("td",[_._v("jb")]),_._v(" "),v("td",[_._v("低于则转移")]),_._v(" "),v("td",[_._v("cf = 1")]),_._v(" "),v("td",[_._v("b 表示 below")])]),_._v(" "),v("tr",[v("td",[_._v("jnb")]),_._v(" "),v("td",[_._v("不低于则转移")]),_._v(" "),v("td",[_._v("cf = 0")]),_._v(" "),v("td",[_._v("nb 表示 not blow")])]),_._v(" "),v("tr",[v("td",[_._v("ja")]),_._v(" "),v("td",[_._v("高于则转移")]),_._v(" "),v("td",[_._v("cf = 0 且 zf = 0")]),_._v(" "),v("td",[_._v("a 表示 above")])]),_._v(" "),v("tr",[v("td",[_._v("jna")]),_._v(" "),v("td",[_._v("不高于则转移")]),_._v(" "),v("td",[_._v("cf = 1 或 zf = 1")]),_._v(" "),v("td",[_._v("na 表示 not above")])])])]),_._v(" "),v("p",[_._v("注意，条件转移指令通常与 cmp 指令配合使用。")]),_._v(" "),v("h2",{attrs:{id:"_11-10-df标志和串传送指令"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_11-10-df标志和串传送指令"}},[_._v("#")]),_._v(" "),v("strong",[_._v("11.10 DF 标志和串传送指令")])]),_._v(" "),v("p",[_._v("Direction Flag，方向标志位。在串传送指令中，控制每次操作后 si、di 的增减。")]),_._v(" "),v("p",[_._v("df = 0 ，每次操作后 si、di 递增；"),v("br"),_._v("\ndf = 1 ，每次操作后 si、di 递减。")]),_._v(" "),v("p",[_._v("下面，我们学习几个常见的串传送指令。（写到这里，突然想吃羊肉串了～～）")]),_._v(" "),v("p",[v("strong",[_._v("movsb 指令")])]),_._v(" "),v("p",[_._v("格式：")]),_._v(" "),v("blockquote",[v("p",[_._v("movsb")])]),_._v(" "),v("p",[_._v("功能：将 ds:si 指向的内存单元中的字节送入 es:di 中，并根据标志寄存器 df 的值，将 si 和 di 递增或递减。\n"),v("strong",[_._v("movsw 指令")])]),_._v(" "),v("p",[_._v("与 movsb 指令类似，只不过 movsw 指令传送的是一个字单元。")]),_._v(" "),v("p",[v("strong",[_._v("rep 指令")])]),_._v(" "),v("p",[_._v("本人将其翻译为重复指令（repetition）。movsb 和 movsw 进行的是串传送操作中的一个步骤，一般来说，movsb 和 movsw 都配合 rep 配合使用，格式如下：")]),_._v(" "),v("blockquote",[v("p",[_._v("rep movsb")])]),_._v(" "),v("p",[_._v("功能：根据 cx 的值来决定是否重复执行 movsb 操作。使用汇编语法来描述就是 >")]),_._v(" "),v("blockquote",[v("p",[_._v("s: movsb\nloop s")])]),_._v(" "),v("p",[v("strong",[_._v("cld 指令和 std 指令")])]),_._v(" "),v("p",[_._v("cld 指令：将标志寄存器的 df 位置 0；"),v("br"),_._v("\nstd 指令：将标志寄存器的 df 位置 1。")]),_._v(" "),v("p",[_._v("为了方便记忆，可以将 cld 理解为 clear direction 的缩写，将 std 理解为 set direction 的缩写。")]),_._v(" "),v("h2",{attrs:{id:"_11-11-pushf-和-popf"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_11-11-pushf-和-popf"}},[_._v("#")]),_._v(" "),v("strong",[_._v("11.11 pushf 和 popf")])]),_._v(" "),v("p",[_._v("pushf 的功能是将标志寄存器的值压栈，而 popf 是从栈中弹出数据，送入标志寄存器中。")]),_._v(" "),v("p",[_._v("pushf 和 popf 为直接访问标志寄存器提供了一种方法。")]),_._v(" "),v("h2",{attrs:{id:"_11-12-标志寄存器在debug中的表示"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_11-12-标志寄存器在debug中的表示"}},[_._v("#")]),_._v(" "),v("strong",[_._v("11.12 标志寄存器在 Debug 中的表示")])]),_._v(" "),v("p",[_._v("在 Debug 中，我们使用 r 命令查看寄存器详情，第二行最后几个双字符字母即是标志寄存器中各标志位的值。")]),_._v(" "),v("hr")])}),[],!1,null,null,null);v.default=s.exports}}]);