(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{366:function(t,v,_){"use strict";_.r(v);var a=_(7),s=Object(a.a)({},(function(){var t=this,v=t._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"页面置换算法"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#页面置换算法"}},[t._v("#")]),t._v(" 页面置换算法")]),t._v(" "),v("h2",{attrs:{id:"最佳置换算法"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#最佳置换算法"}},[t._v("#")]),t._v(" 最佳置换算法")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("是一种理想化的算法，有最好的性能，但无法实现")])]),t._v(" "),v("li",[v("p",[t._v("可以用该算法来评价其他算法")])]),t._v(" "),v("li",[v("p",[t._v("思想：被置换的页面是"),v("strong",[t._v("以后")]),t._v("永远不使用或以后长时间不使用的（需向后遍历）")])])]),t._v(" "),v("h3",{attrs:{id:"案例分析"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#案例分析"}},[t._v("#")]),t._v(" 案例分析")]),t._v(" "),v("p",[t._v("系统为某个进程（有 8 个页面）只分配了 3 个物理块，进程有如下的页面号引用")]),t._v(" "),v("p",[t._v("7，0，1，2，0，3，0，4，2，3，0，3，2，1，2，0，1，7，0，1")]),t._v(" "),v("p",[t._v("求该进程在最佳置换算法下执行完毕缺页多少次？中断多少次？缺页率为多少？页面置换多少次？")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://static.pil0txia.com/picgo/image-20230208102620030.webp",alt:"image-20230208102620030"}})]),t._v(" "),v("p",[t._v("缺页次数：9 次")]),t._v(" "),v("p",[t._v("中断次数：每次缺页都会产生一次缺页中断 = 缺页次数 = 9 次")]),t._v(" "),v("p",[t._v("页面执行次数：页面走向中一共有 20 个页面执行")]),t._v(" "),v("p",[t._v("缺页率：缺页次数 / 页面执行次数 = 9/20 = 45%（不管用什么算法，都不可能使缺页率小于 45%）")]),t._v(" "),v("p",[t._v("页面置换次数：新页面置换内存中老的页面的次数 = 9 - 3 = 6 次")]),t._v(" "),v("h2",{attrs:{id:"先进先出置换算法"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#先进先出置换算法"}},[t._v("#")]),t._v(" 先进先出置换算法")]),t._v(" "),v("ul",[v("li",[t._v("思想：淘汰最先进入内存的页面，即选择在内存中驻留时间最久的页面给予淘汰（向前看）")])]),t._v(" "),v("h3",{attrs:{id:"案例分析-2"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#案例分析-2"}},[t._v("#")]),t._v(" 案例分析")]),t._v(" "),v("p",[t._v("题干同上")]),t._v(" "),v("p",[t._v("缺页次数或中断次数：15 次")]),t._v(" "),v("p",[t._v("页面执行次数：20")]),t._v(" "),v("p",[t._v("缺页率：15/20 = 75%")]),t._v(" "),v("p",[t._v("页面置换次数：15 - 3 = 12 次")]),t._v(" "),v("h2",{attrs:{id:"最近最久未使用置换算法"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#最近最久未使用置换算法"}},[t._v("#")]),t._v(" 最近最久未使用置换算法")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("思想：选择和现在相比最长时间没有使用的页面进行置换（向前看）")])]),t._v(" "),v("li",[v("p",[t._v("硬件")]),t._v(" "),v("ul",[v("li",[t._v("寄存器：记录某进程在内存中各页的使用情况")]),t._v(" "),v("li",[t._v("栈：用来保存当前使用的各个页面的页面号")])])])]),t._v(" "),v("h3",{attrs:{id:"案例分析-3"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#案例分析-3"}},[t._v("#")]),t._v(" 案例分析")]),t._v(" "),v("p",[t._v("题干同上")]),t._v(" "),v("p",[t._v("缺页次数或中断次数：12 次")]),t._v(" "),v("p",[t._v("页面执行次数：20")]),t._v(" "),v("p",[t._v("缺页率：12/20 = 60%")]),t._v(" "),v("p",[t._v("页面置换次数：12 - 3 = 9 次")]),t._v(" "),v("h2",{attrs:{id:"clock-置换算法"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#clock-置换算法"}},[t._v("#")]),t._v(" Clock 置换算法")]),t._v(" "),v("blockquote",[v("p",[t._v("了解即可，不考察。")])]),t._v(" "),v("p",[t._v("LRU 算法是较好的一种算法，但由于它要求有较多的硬件支持，故在实际应用中，大多采用 LRU 的近似算法。Clock 算法就是用得较多的一种 LRU 近似算法。")]),t._v(" "),v("p",[t._v("思想：为每页设置一位访问位，再将内存中的所有页面都通过链接指针链接成一个循环队列。当某页被访问时，其访问位被置为 1。置换算法选择一位淘汰时，只需检查页的访问位。如果是 0，就选择该页换出；若为 1，则重新将它置 0，暂不换出，而是给该页第二次驻留内存的机会，再按照 FIFO 算法检查下一个页面。")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://static.pil0txia.com/picgo/image-20230208113938194.webp",alt:"image-20230208113938194"}})]),t._v(" "),v("p",[v("img",{attrs:{src:"https://static.pil0txia.com/picgo/image-20230208114149443.webp",alt:"image-20230208114149443"}})]),t._v(" "),v("p",[v("img",{attrs:{src:"https://static.pil0txia.com/picgo/image-20230208114239244.webp",alt:"image-20230208114239244"}})])])}),[],!1,null,null,null);v.default=s.exports}}]);