(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{361:function(t,a,s){"use strict";s.r(a);var e=s(7),n=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"死锁"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#死锁"}},[t._v("#")]),t._v(" 死锁")]),t._v(" "),a("h2",{attrs:{id:"出现死锁的场景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#出现死锁的场景"}},[t._v("#")]),t._v(" 出现死锁的场景")]),t._v(" "),a("h3",{attrs:{id:"进程推进顺序不当"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#进程推进顺序不当"}},[t._v("#")]),t._v(" 进程推进顺序不当")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://static.pil0txia.com/picgo/IMG_20221117_102117.jpg",alt:"IMG_20221117_102117"}})]),t._v(" "),a("h3",{attrs:{id:"资源竞争"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#资源竞争"}},[t._v("#")]),t._v(" 资源竞争")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://static.pil0txia.com/picgo/IMG_20221117_102345.jpg",alt:"IMG_20221117_102345"}})]),t._v(" "),a("h2",{attrs:{id:"产生死锁的四个必要条件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#产生死锁的四个必要条件"}},[t._v("#")]),t._v(" 产生死锁的四个必要条件")]),t._v(" "),a("h3",{attrs:{id:"互斥"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#互斥"}},[t._v("#")]),t._v(" 互斥")]),t._v(" "),a("p",[t._v("进程互斥使用资源。因为如果是可以共享使用的资源，多个进程直接同时使用就好，不会陷入等待的僵局。")]),t._v(" "),a("h3",{attrs:{id:"非抢占"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#非抢占"}},[t._v("#")]),t._v(" 非抢占")]),t._v(" "),a("p",[t._v("一个进程不能抢夺其他进程占有的资源。因为如果其它进程可以抢占资源，那么就是直接拿到资源了，也不会陷入等待的僵局。")]),t._v(" "),a("h3",{attrs:{id:"请求和占有"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#请求和占有"}},[t._v("#")]),t._v(" 请求和占有")]),t._v(" "),a("p",[t._v("申请新资源时不释放已占有资源，即要求进程是在占有（holding）至少一个资源的前提下，请求（waiting）新的资源的。由于新的资源被其它进程占有，此时，发出请求的进程就会带着自己占有的资源进入阻塞状态。假设 P1，P2 分别都需要 R1，R2 资源，如果是下面这种方式：")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("P1")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("          "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("P2")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("request")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("R1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("request")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("R2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("request")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("R2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("request")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("R1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("p",[t._v("如果 P1 请求到了 R1 资源之后，P2 请求到了 R2 资源，那么此后不管是哪个进程再次请求资源，都是在占有资源的前提下请求的，此时就会带着这个资源陷入阻塞状态。P1 和 P2 需要互相等待，发生了死锁。")]),t._v(" "),a("p",[t._v("换一种情况：")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("P1")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("          "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("P2")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("request")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("R1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("request")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("R1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("request")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("R2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("request")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("R2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("p",[t._v("如果 P1 请求到了 R1 资源，那么 P2 在请求 R1 的时候虽然也会阻塞，但是"),a("strong",[t._v("是在不占有资源的情况下阻塞的")]),t._v("，不像之前那样占有 R2。所以，此时 P1 可以正常完成任务并释放 R1，P2 拿到 R1 之后再去执行任务。这种情况就不会发生死锁。")]),t._v(" "),a("h3",{attrs:{id:"环路循环等待"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#环路循环等待"}},[t._v("#")]),t._v(" 环路循环等待")]),t._v(" "),a("p",[t._v("要求存在一条进程资源的循环等待链，链中的每一个进程占有的资源同时被另一个进程所请求。")]),t._v(" "),a("p",[t._v("[P0，P1，P2，…Pn] 中的 P0 正在等待 P1 占用的资源，P1 正在等待 P2 占用的资源......Pn 正在等待 P0 占用的资源。")]),t._v(" "),a("p",[t._v("发生死锁时一定有循环等待（因为是死锁的必要条件），但是发生循环等待的时候不一定会发生死锁。这是因为，如果循环等待链中的 P1 和 链外的 P6 都占有某个进程 P2 请求的资源，那么 P2 完全可以选择不等待 P1 释放该资源，而是等待 P6 释放资源。这样就不会发生死锁了。")]),t._v(" "),a("h2",{attrs:{id:"预防死锁"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#预防死锁"}},[t._v("#")]),t._v(" 预防死锁")]),t._v(" "),a("p",[t._v("通过设置某些限制条件，以牺牲资源利用率和系统吞吐量为代价，破坏产生死锁的四个必要条件中的一个或几个。特点是简单、限制条件严格，有可能导致资源利用率和系统吞吐量低")]),t._v(" "),a("h3",{attrs:{id:"破坏互斥条件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#破坏互斥条件"}},[t._v("#")]),t._v(" 破坏互斥条件")]),t._v(" "),a("p",[t._v("如果可以把某个互斥资源转化成共享资源，那么就不存在互相等待资源的情况了，也就不会发生死锁。")]),t._v(" "),a("h3",{attrs:{id:"破坏非抢占条件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#破坏非抢占条件"}},[t._v("#")]),t._v(" 破坏非抢占条件")]),t._v(" "),a("p",[t._v("如果资源是可以抢占的，那么在进程需要资源的时候，就可以直接抢占了，不存在互相等待资源的情况，也就不会发生死锁。要破坏非抢占条件，做到可抢占，可以从两个角度（方案）考虑：")]),t._v(" "),a("ul",[a("li",[t._v("从占有资源的进程的角度考虑，如果它请求不到新的资源，那么它必须立即释放占有的全部资源，以后需要的时候重新申请")]),t._v(" "),a("li",[t._v("从请求资源的进程的角度考虑，如果它需要请求资源，那么操作系统会帮助它抢占相关资源。比如现在有一个优先级更高的进程，如果是采用优先级调度算法，那么它将有机会在操作系统的帮助下抢占到资源。")])]),t._v(" "),a("p",[t._v("这种做法的问题在于：")]),t._v(" "),a("ul",[a("li",[t._v("实现起来复杂")]),t._v(" "),a("li",[t._v("某个占有资源的进程释放占有的全部资源时，可能会导致工作进度丢失")]),t._v(" "),a("li",[t._v("反复的申请和释放资源会增加系统开销")]),t._v(" "),a("li",[t._v("可能导致饥饿")])]),t._v(" "),a("h3",{attrs:{id:"破坏-请求和占有-条件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#破坏-请求和占有-条件"}},[t._v("#")]),t._v(" 破坏 “请求和占有” 条件")]),t._v(" "),a("p",[t._v("所有进程在运行之前，都必须一次性地申请其在整个行过程中的所需的全部资源，此时，若系统有足够的资源分配给某进程，便可把其需要的所有资源分配给该进程，这样，该进程在整个运行期间便不会再提出资源要求。")]),t._v(" "),a("p",[t._v("该方法可能导致饥饿现象。若有 ABC 三类进程，A 用到 a 资源，B 用到 b 资源，C 用到 ab 资源，那么 AB 会在运行前事先申请到 ab 资源，如果 AB 源源不断进入就绪队列，那么 C 进程没有办法在运行前拿到 ab 资源，就进入了饥饿状态。")]),t._v(" "),a("h3",{attrs:{id:"破坏-环路循环等待-条件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#破坏-环路循环等待-条件"}},[t._v("#")]),t._v(" 破坏 “环路循环等待” 条件")]),t._v(" "),a("p",[t._v("将所有资源按类型进行线性排队并编号，所有进程必须严格按照序号递增的顺序请求资源，即先请求小编号资源，后请求大编号资源。这样，在形成的资源分配图中，不再出现环路。")]),t._v(" "),a("p",[t._v("优点：和前两种相比，资源利用率和吞吐量利用率高")]),t._v(" "),a("p",[t._v("缺点：系统中各类资源所分配的序号必须相对稳定，限制了新类型设备的增加；作业（进程）使用各类资源的顺序与系统规定的顺序不同，造成对资源的浪费；为方便用户，系统对用户在编程时所施加的限制条件应尽量少，但必然限制用户简单、自主地编程。")]),t._v(" "),a("p",[t._v("以之前的例子讲解：")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("P1")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("          "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("P2")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("request")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("R1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("request")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("R2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("request")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("R2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("request")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("R1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("p",[t._v("这种情况下资源请求是无序的，尤其是 P2，它没有按照递增的顺序请求资源，因此很容易发生死锁。但是如果是这种情况：")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("P1")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("          "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("P2")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("request")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("R1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("request")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("R1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("request")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("R2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("request")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("R2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("p",[t._v("实际上，这里除了破坏 “占有和请求条件” 之外，更重要的是破坏了循环等待条件 —— 因为这里是按照编号递增的顺序请求资源了，不管是 P1 还是 P2，都是先请求小编号的 R1，后请求大编号的 R2，这样的话就不会发生死锁，因为此时两个进程对资源的请求并没有形成一个闭环。")]),t._v(" "),a("p",[t._v("也可以拿之前的"),a("RouterLink",{attrs:{to:"/pages/1da972/#五个哲学家进餐问题"}},[t._v("哲学家进餐问题")]),t._v("解释，如果我们给每个筷子进行编号，规定必须按照编号递增的顺序申请资源，那么从 0 号到 3 号，它们依然会拿起左手边小编号的筷子，但是轮到 4 号的时候，情况就不一样了。因为对于 4 号来说，右手筷子编号更小，所以在拿到左手筷子之前，它会先试图拿右手筷子，又由于该筷子已经被 0 号拿走，4 号被阻塞。对于 3 号来说，没人和自己抢 4 号筷子了，所以 3 号哲学家可以拿到左右筷子，避免了死锁。")],1),t._v(" "),a("p",[t._v("还可以从另一个角度考虑，因为我们是按照编号递增的顺序请求资源的，设想在某一时刻，若干个进程中必定有一个进程的资源编号暂时是所有进程中最大的，那么该进程在此后申请新的资源的时候，只可能申请编号更大的资源，一方面避开了小编号、可能已经被拿走的资源，也就避开了阻塞和死锁，另一方面，大编号资源并没有被其他进程拿走。因此这个时候，该进程一定可以拿到资源，不会有死锁现象。")]),t._v(" "),a("blockquote",[a("p",[t._v("但这种预防死锁的方法，问题在于：")]),t._v(" "),a("ul",[a("li",[t._v("如何进行编号，从什么角度考虑？")]),t._v(" "),a("li",[t._v("如果增加资源或设备，怎么重新编号？")]),t._v(" "),a("li",[t._v("虽然资源请求上是先小编号资源，后大编号资源，但是实际使用的时候可能是得先使用大编号资源，这就意味着小编号资源虽然暂时用不到，但还是被进程占用，明显有资源浪费的问题。")])])]),t._v(" "),a("h2",{attrs:{id:"避免死锁"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#避免死锁"}},[t._v("#")]),t._v(" 避免死锁")]),t._v(" "),a("p",[t._v("安全状态：指系统按某种顺序 (P1,P2,…,Pn)(称 < P1,P2,…,Pn > 为安全序列) 来为每个进程分配其所需资源，直至满足每个进程资源的最大需求，使每个进程都可顺利地完成。如果系统无法找到这样一个安全序列，则称系统处于不安全状态。")]),t._v(" "),a("p",[t._v("避免死锁的实质在于：系统在进行资源分配时，如何使系统不进入不安全状态")]),t._v(" "),a("p",[t._v("安全状态之例：假定系统中有三个进程 P1、P2 和 P3, 共有 12 台磁带机。进程 P1 总共要求 10 台磁带机，P2 和 P3 分别要求 4 台和 9 台。假设在 T0 时刻，进程 P1、P2 和 P3 分别获得 5 台、2 台和 2 台，尚有 3 台未分配，如下表所示：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://static.pil0txia.com/picgo/IMG_20221117_111227.jpg",alt:"IMG_20221117_111227"}})]),t._v(" "),a("h3",{attrs:{id:"进程-资源分配图"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#进程-资源分配图"}},[t._v("#")]),t._v(" 进程 - 资源分配图")]),t._v(" "),a("p",[t._v("当各类资源都"),a("strong",[t._v("只有一个")]),t._v("的时候，可以使用这种方法求解。资源分配图是描述进程和资源之间请求和分配关系的有向图，从进程指向资源的虚线代表资源需求（要使用），从进程指向资源的实线代表资源请求（申请使用），从资源指向进程的实线代表资源分配（正在使用）。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://static.pil0txia.com/picgo/image-20221118230915805.png",alt:"image-20221118230915805"}})]),t._v(" "),a("ul",[a("li",[t._v("如果 P1 请求 R2 资源：那么就把 P1 到 R2 的需求边改为 R2 到 P1 的分配边，此时整个图中不存在回路，那么就认为系统处于安全状态，不会发生死锁。可以分配资源。")]),t._v(" "),a("li",[t._v("如果 P2 请求 R2 资源：那么就把 P2 到 R2 的需求边改为 R2 到 P2 的分配边，此时整个图中存在一条回路，那么就认为系统处于不安全状态，有可能发生死锁。不可以分配资源。")])]),t._v(" "),a("h3",{attrs:{id:"银行家算法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#银行家算法"}},[t._v("#")]),t._v(" 银行家算法")]),t._v(" "),a("ul",[a("li",[t._v("银行家拥有一笔周转资金")]),t._v(" "),a("li",[t._v("客户要求分期贷款，如果客户能够得到各期贷款，就一定能够归还贷款，否则就一定不能放贷")]),t._v(" "),a("li",[t._v("银行家应谨慎的贷款，防止出现坏帐")])]),t._v(" "),a("h4",{attrs:{id:"银行家算法案例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#银行家算法案例"}},[t._v("#")]),t._v(" 银行家算法案例")]),t._v(" "),a("p",[t._v("设银行家有 10 万贷款，P,Q,R 分别需要 8,3,9 万元搞项目（假设任何人满足资金总额后都会归还所有贷款)")]),t._v(" "),a("p",[t._v("如果 P 已申请到了 4 万：")]),t._v(" "),a("ul",[a("li",[t._v("Q 要申请 2 万，显然，如果满足 Q 的申请，有安全序列 <P,Q,R>/<Q,P,R>")]),t._v(" "),a("li",[t._v("R 要申请 4 万，显然，如果满足 R 的申请，则不存在安全序列。")])]),t._v(" "),a("p",[a("strong",[t._v("基本思想：分配申请的资源前，判断系统是否安全。如果不安全，则不分配。")])]),t._v(" "),a("h4",{attrs:{id:"银行家算法过程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#银行家算法过程"}},[t._v("#")]),t._v(" 银行家算法过程")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://static.pil0txia.com/picgo/image-20221118233726331.png",alt:"image-20221118233726331"}})]),t._v(" "),a("p",[t._v("假设系统中有 n 个进程，m 种资源，规定：")]),t._v(" "),a("ul",[a("li",[t._v("每个进程在运行前先声明自己需要的最大资源数，用一个 n*m 的最大需求矩阵  "),a("code",[t._v("Max")]),t._v("  表示各个进程的需求情况，比如  "),a("code",[t._v("Max[i][j]= K")]),t._v("  就表示进程 i 需要 K 个 j 类型资源")]),t._v(" "),a("li",[t._v("用一个 n*m 的分配矩阵  "),a("code",[t._v("Allocation")]),t._v("  表示各个进程的已分配资源情况")]),t._v(" "),a("li",[t._v("用一个 n*m 的需求矩阵  "),a("code",[t._v("Need")]),t._v("  表示各个进程的最多还需要资源情况， "),a("code",[t._v("Need = Max - Allocation")])]),t._v(" "),a("li",[t._v("用一个 m 长度的一维数组  "),a("code",[t._v("Avaliable")]),t._v("  表示剩余资源数目")]),t._v(" "),a("li",[t._v("用一个 m 长度的申请矩阵  "),a("code",[t._v("Request[i][j]")]),t._v("  表示某个进程 i 某次申请的 j 类型资源数目")])]),t._v(" "),a("p",[t._v("按照之前说过的流程图，银行家算法的工作过程是：")]),t._v(" "),a("ul",[a("li",[t._v("请求资源数是否超过最大资源数？ "),a("code",[t._v("Request[i][j]<=Need[i][j]")]),t._v(" ，则到下一步；否则出错")]),t._v(" "),a("li",[t._v("请求资源数是否超过剩余资源数？ "),a("code",[t._v("Request[i][j]<=Available[j]")]),t._v(" ，则到下一步；否则说明资源不够，进程等待")]),t._v(" "),a("li",[t._v("尝试进行资源分配。\n"),a("ul",[a("li",[t._v("剩余资源减少： "),a("code",[t._v("Available = Available - Request")])]),t._v(" "),a("li",[t._v("已分配资源增加： "),a("code",[t._v("Allocation[i][j] = Allocation[i][j] + Request[i][j]")])]),t._v(" "),a("li",[t._v("需求资源减少： "),a("code",[t._v("Need[i][j] = Need[i][j] - Request[i][j]")])])])]),t._v(" "),a("li",[t._v("对分配后的状态通过安全性算法进行预判：\n"),a("ul",[a("li",[t._v("安全状态：不会发生死锁，可以分配资源")]),t._v(" "),a("li",[t._v("不安全状态：可能发生死锁，不分配资源，进程进入等待资源状态，并恢复系统状态")])])])]),t._v(" "),a("h4",{attrs:{id:"例题1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#例题1"}},[t._v("#")]),t._v(" 例题 1")]),t._v(" "),a("p",[t._v("假如现在有 P0 ~ P4 共五个进程，ABC 三类资源，个数为（10,5,7）。在某一时刻，资源剩余量为（3,3,2），各个进程的最大需求量、已分配量和需求量如下图所示：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://static.pil0txia.com/picgo/image-20221118232822744.png",alt:"image-20221118232822744"}})]),t._v(" "),a("p",[t._v("如何检测当前是否处于安全状态呢？尝试寻找安全序列：")]),t._v(" "),a("ul",[a("li",[t._v("当前剩余资源（3,3,2），无法满足 P0 需要的（7,4,3），所以不能首先分配给 P0；但是可以满足 P1 需要的（1,2,2），P3 需要的（0,1,1），所以可以分配给 P1 和 P3，P1 和 P3 进入安全序列。")]),t._v(" "),a("li",[t._v("P1 和 P3 执行完之后，归还资源，剩余资源（3,3,2）+（2,0,0）+（2,1,1）=（7,4,3），可以满足 P0 需要的（7,4,3），P2 需要的（6,0,0），P4 需要的（4,3,1），所以 P0、P2、P4 依次进入安全序列。")]),t._v(" "),a("li",[t._v("所以存在安全序列  "),a("code",[t._v("P1->P3->P0->P2->P4")]),t._v("  ，使得按照这个顺序分配资源后，每个进程都能拿到需要的资源并顺利完成，所以该状态是安全状态。")])]),t._v(" "),a("p",[t._v("看另一种情况。假如现在有 P0 ~ P4 共五个进程，ABC 三类资源，个数为（10,5,7）。在某一时刻，资源剩余量为（3,3,2），各个进程的最大需求量、已分配量和需求量如下图所示：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://static.pil0txia.com/picgo/image-20221118232808706.png",alt:"image-20221118232808706"}})]),t._v(" "),a("p",[t._v("当尝试寻找安全序列的时候，容易发现 P1 P3 可以满足，所以 P1 P3 进入安全序列，此后剩余资源为（7,4,3）。又由于 P0 P2 P4 都是无法满足的，所以实际上并不存在一个安全序列使得所有进程都能被分配资源。因此状态是不安全状态，可能发生死锁，取消资源分配。")]),t._v(" "),a("h4",{attrs:{id:"例题2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#例题2"}},[t._v("#")]),t._v(" 例题 2")]),t._v(" "),a("p",[t._v("t0 时刻安全状态检查。如果 t0 时刻都不安全，则后面的部分都不用做了。但是考试时 t0 都是安全的。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://static.pil0txia.com/picgo/IMG_20221117_114149.jpg",alt:"IMG_20221117_114149"}})]),t._v(" "),a("p",[t._v("安全序列之一：<p1,p3,p4,p2,p0>")]),t._v(" "),a("h4",{attrs:{id:"例题3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#例题3"}},[t._v("#")]),t._v(" 例题 3")]),t._v(" "),a("p",[t._v("在银行家算法中，若出现下述资源分配情况，试问：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("Process")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Allocation")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Need")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Available")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("P0")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("0032")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("0012")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("1622")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("P1")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("1000")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("1750")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("P2")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("1354")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("2356")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("P3")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("0332")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("0652")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("P4")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("0014")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("0656")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})])])]),t._v(" "),a("p",[t._v("(1) 该状态是否安全？")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("P0 1622+0032=1654\nP3 1654+0332=1986\nP1 1986+1000=2986\nP4 2986+0014=299 10\nP2 299 10+1354=3 12 14 14\n故存在安全序列P0 P3 P1 P4 P2\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br")]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br")])]),a("p",[t._v("(2) 若进程 P2 提出请求 Request (1,2,2,2) 后，系统能否将资源分配给它？")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("P2的Allocation加上1 2 2 2为2 5 7 6，Need变为1 1 3 4， Available变为0 4 0 0\n由(1)可知，此时系统资源无法满足任何一个进程，安全性检查不通过，无法分配资源\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("h2",{attrs:{id:"检测死锁"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#检测死锁"}},[t._v("#")]),t._v(" 检测死锁")]),t._v(" "),a("h3",{attrs:{id:"简化进程-资源分配图"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#简化进程-资源分配图"}},[t._v("#")]),t._v(" 简化进程 - 资源分配图")]),t._v(" "),a("h4",{attrs:{id:"各类资源只有一个"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#各类资源只有一个"}},[t._v("#")]),t._v(" 各类资源只有一个")]),t._v(" "),a("p",[t._v("当各类资源只有一个的时候，可以把"),a("a",{attrs:{href:"#%E8%BF%9B%E7%A8%8B-%E8%B5%84%E6%BA%90%E5%88%86%E9%85%8D%E5%9B%BE"}},[t._v("资源分配图")]),t._v("化简为一个等待图（wait-for graph），比如说 A 进程请求 X 资源、X 资源被 B 进程占有，这个过程可以被简化为 A 进程等待 B 进程。比如说下面，左图被转化为对应的右图：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://static.pil0txia.com/picgo/image-20221119185911023.png",alt:"image-20221119185911023"}})]),t._v(" "),a("p",[a("strong",[t._v("死锁定理：有环路，且每个类型的资源只有一个，则一定会出现死锁。")])]),t._v(" "),a("ul",[a("li",[t._v("如果进程 - 资源分配图中无环路，则此时系统没有发生死锁。")]),t._v(" "),a("li",[t._v("如果进程 - 资源分配图中有环路，且每个资源类中仅有一个资源，则系统中发生了死锁，此时，环路是系统发生死锁的充分和必要条件，环路中的进程便为死锁进程。")]),t._v(" "),a("li",[t._v("如果进程 - 资源分配图中有环路，且涉及的资源类中有多个资源，则环路的存在只是产生死锁的必要条件而不是充分条件。")])]),t._v(" "),a("h4",{attrs:{id:"各类资源有多个"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#各类资源有多个"}},[t._v("#")]),t._v(" 各类资源有多个")]),t._v(" "),a("p",[t._v("各类资源有多个的时候，我们可能需要根据给定表或给定图检测是否有死锁。对于前者，可以沿用"),a("a",{attrs:{href:"#%E4%BE%8B%E9%A2%981"}},[t._v("之前的安全性算法")]),t._v("进行检测；对于后者，可以尝试简化资源分配图。")]),t._v(" "),a("p",[t._v("给定一个资源分配图为例：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://static.pil0txia.com/picgo/image-20221119205915983.png",alt:"image-20221119205915983"}})]),t._v(" "),a("p",[t._v("约定蓝色线为请求边，黑色线为分配边，资源中的一个圆点代表一个该类资源。那么 P1 占有两个 R1 资源，请求一个 R2 资源；P2 占有一个 R2 资源，一个 R1 资源，请求一个 R1 资源。")]),t._v(" "),a("ul",[a("li",[t._v("首先找出非阻塞非孤立的进程点。P1 P2 都不是孤立的，所谓非阻塞指的是"),a("strong",[t._v("进程请求的资源数量足够")]),t._v("，比如说 P2 请求 R1，由于 R1 已经有两个被 P1 占有，一个被 P2 占有，无多余资源，所以 P2 是阻塞的；而 P1 请求 R2，因为 R2 只有一个被 P2 占有，有多余资源，P1 是非阻塞的。这样就找到了符合条件的进程点 P1")]),t._v(" "),a("li",[t._v("去除这样的点的所有边。那么就会去除 P1 的所有边，归还所有资源。P1 成为孤立点")]),t._v(" "),a("li",[t._v("重复第一步和第二步。此时，因为这次 P2 请求的 R2 资源是足够的（被 P1 释放了），所以 P2 是非阻塞非孤立的点，把他的全部边去除")]),t._v(" "),a("li",[t._v("由于图中所有的边都能被消除，所以称该图"),a("strong",[t._v("可以被简化")]),t._v("，因此它不存在死锁（如果不可简化，则存在死锁）")])]),t._v(" "),a("blockquote",[a("p",[a("img",{attrs:{src:"https://static.pil0txia.com/picgo/IMG_20221117_105216.jpg",alt:"IMG_20221117_105216"}})])]),t._v(" "),a("p",[t._v("又比如下面这种情况：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://static.pil0txia.com/picgo/image-20221119225907074.png",alt:"image-20221119225907074"}})]),t._v(" "),a("p",[t._v("首先还是找一个非孤立非阻塞的点，很显然只有 P3 符合要求。之后把 P3 的分配边去掉，会发现 P1 和 P2 都是非孤立阻塞的点，它们的边都无法消除。此时就说该资源分配图不能简化，因此存在死锁。")]),t._v(" "),a("h2",{attrs:{id:"解除死锁"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解除死锁"}},[t._v("#")]),t._v(" 解除死锁")]),t._v(" "),a("h3",{attrs:{id:"资源剥夺法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#资源剥夺法"}},[t._v("#")]),t._v(" 资源剥夺法")]),t._v(" "),a("p",[t._v("将部分死锁的进程挂起并抢占它的资源，将这些资源分配给其它的死锁进程。但应防止被挂起的进程长时间得不到资源而饥饿。")]),t._v(" "),a("blockquote",[a("p",[t._v("注意不是抢占非死锁进程的资源。")])]),t._v(" "),a("h3",{attrs:{id:"终止进程法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#终止进程法"}},[t._v("#")]),t._v(" 终止进程法")]),t._v(" "),a("p",[t._v("强制终止部分或全部死锁进程，并剥夺它们的资源。这种方式的优点是实现简单，但可能付出很大的代价。因为有些进程可能已经运行了很长时间，一旦被终止就功亏一篑了。")]),t._v(" "),a("h3",{attrs:{id:"进程回退法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#进程回退法"}},[t._v("#")]),t._v(" 进程回退法")]),t._v(" "),a("p",[t._v("让一个或多个死锁进程回退到足以避免死锁的地步。这要求系统必须记录进程的历史信息，设置还原点。")]),t._v(" "),a("blockquote",[a("p",[t._v("无论是哪种方法，都可以从以下角度考虑需要做出牺牲的进程：")]),t._v(" "),a("ul",[a("li",[t._v("优先级比较低的进程做出牺牲")]),t._v(" "),a("li",[t._v("占用过多资源的进程做出牺牲")]),t._v(" "),a("li",[t._v("执行时间长的进程不做出牺牲")]),t._v(" "),a("li",[t._v("快要完成的进程不做出牺牲")]),t._v(" "),a("li",[t._v("交互式进程不做出牺牲")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);