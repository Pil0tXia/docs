(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{356:function(t,a,s){"use strict";s.r(a);var _=s(7),r=Object(_.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"处理机调度的层次"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#处理机调度的层次"}},[t._v("#")]),t._v(" 处理机调度的层次")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://static.pil0txia.com/picgo/IMG_20221031_145313.jpg",alt:"IMG_20221031_145313"}})]),t._v(" "),a("h2",{attrs:{id:"三级调度"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三级调度"}},[t._v("#")]),t._v(" 三级调度")]),t._v(" "),a("h3",{attrs:{id:"作业调度"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#作业调度"}},[t._v("#")]),t._v(" 作业调度")]),t._v(" "),a("p",[t._v("作业调度也即高级调度，这个阶段可以看作是准备阶段。主要任务是根据某种算法从外存上处于后备队列的作业中挑选一个或多个作业，为其分配内存，建立 PCB（进程） 等，使它们具备竞争处理机的能力。")]),t._v(" "),a("p",[t._v("这个阶段进程的状态变化是：无 --\x3e 创建态 --\x3e 就绪态")]),t._v(" "),a("blockquote",[a("p",[a("img",{attrs:{src:"https://static.pil0txia.com/picgo/IMG_20221031_150025.jpg",alt:"IMG_20221031_150025"}})])]),t._v(" "),a("h3",{attrs:{id:"内存调度"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#内存调度"}},[t._v("#")]),t._v(" 内存调度")]),t._v(" "),a("p",[t._v("内存调度也即中级调度，这个阶段可以看作是优化阶段。主要任务是将暂时不能运行的进程对换到外存（虚拟内存）中，使它们挂起；而当挂起的进程具备运行条件时，它们会被重新对换回内存，得到激活。引入中级调度的主要目的是提高内存利用率和系统吞吐量，它实际上就是存储器管理中的对换功能。")]),t._v(" "),a("p",[t._v("这个阶段进程的状态变化是： 静止就绪态 --\x3e 活动就绪态，静止阻塞态 --\x3e 活动阻塞态")]),t._v(" "),a("h3",{attrs:{id:"进程调度"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#进程调度"}},[t._v("#")]),t._v(" 进程调度")]),t._v(" "),a("p",[t._v("进程调度即低级调度，这个阶段让进程真正运行起来。主要任务是按照某种算法，从就绪队列中选取一个进程（内核级线程），分配处理机给它。进程调度是最基本、次数最频繁的阶段。")]),t._v(" "),a("p",[t._v("这个阶段进程的状态变化是： 就绪态 --\x3e 活动态")]),t._v(" "),a("blockquote",[a("p",[t._v("根据进程运行的过程中，处理机能否被其它进程抢占，将调度分为两种方式：非抢占式和抢占式，为抢占式时，抢占原则有：优先权原则、短作业（进程）优先原则、时间片原则。")]),t._v(" "),a("p",[t._v("抢占式的缺点在于进程切换频繁发生，系统开销大。优点在于对短作业而言能更及时的得到调度。")])])])}),[],!1,null,null,null);a.default=r.exports}}]);