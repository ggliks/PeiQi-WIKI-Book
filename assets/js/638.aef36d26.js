(window.webpackJsonp=window.webpackJsonp||[]).push([[638],{2053:function(t,v,_){t.exports=_.p+"assets/img/image-20220420095102270.c312dd41.png"},3255:function(t,v,_){"use strict";_.r(v);var d=_(64),s=Object(d.a)({},(function(){var t=this,v=t._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"windows-win32k-内核提权漏洞-cve-2022-21882"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#windows-win32k-内核提权漏洞-cve-2022-21882"}},[t._v("#")]),t._v(" Windows Win32k 内核提权漏洞 CVE-2022-21882")]),t._v(" "),v("h2",{attrs:{id:"漏洞描述"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#漏洞描述"}},[t._v("#")]),t._v(" 漏洞描述")]),t._v(" "),v("p",[t._v("CVE-2022-21882是对CVE-2021-1732漏洞的绕过，属于win32k驱动程序中的一个类型混淆漏洞。")]),t._v(" "),v("p",[t._v("攻击者可以在user_mode调用相关的GUI API进行内核调用，如xxxMenuWindowProc、xxxSBWndProc、xxxSwitchWndProc、xxxTooltipWndProc等，这些内核函数会触发回调xxxClientAllocWindowClassExtraBytes。攻击者可以通过hook KernelCallbackTable 中 xxxClientAllocWindowClassExtraBytes 拦截该回调，并使用 NtUserConsoleControl 方法设置 tagWNDK 对象的 ConsoleWindow 标志，从而修改窗口类型。")]),t._v(" "),v("p",[t._v("最终回调后，系统不检查窗口类型是否发生变化，由于类型混淆而引用了错误的数据。flag修改前后的区别在于，在设置flag之前，系统认为tagWNDK.pExtraBytes保存了一个user_mode指针；flag设置后，系统认为tagWNDK.pExtraBytes是内核桌面堆的偏移量，攻击者可以控制这个偏移量，从而导致越界R&W。")]),t._v(" "),v("h2",{attrs:{id:"漏洞影响"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#漏洞影响"}},[t._v("#")]),t._v(" 漏洞影响")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[v("strong",[t._v("Product")])]),t._v(" "),v("th",[v("strong",[t._v("CPU Architecture")])]),t._v(" "),v("th",[v("strong",[t._v("Version")])]),t._v(" "),v("th",[v("strong",[t._v("Update")])]),t._v(" "),v("th",[v("strong",[t._v("Tested")])])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("Windows 10")]),t._v(" "),v("td",[t._v("x86/x64/ARM64")]),t._v(" "),v("td",[t._v("1809")]),t._v(" "),v("td"),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("Windows 10")]),t._v(" "),v("td",[t._v("x86/x64/ARM64")]),t._v(" "),v("td",[t._v("1909")]),t._v(" "),v("td"),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("Windows 10")]),t._v(" "),v("td",[t._v("x86/x64/ARM64")]),t._v(" "),v("td",[t._v("20H2")]),t._v(" "),v("td"),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("Windows 10")]),t._v(" "),v("td",[t._v("x86/x64/ARM64")]),t._v(" "),v("td",[t._v("21H1")]),t._v(" "),v("td"),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("Windows 10")]),t._v(" "),v("td",[t._v("x86/x64/ARM64")]),t._v(" "),v("td",[t._v("21H2")]),t._v(" "),v("td"),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("Windows 11")]),t._v(" "),v("td",[t._v("x64/ARM64")]),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("Windows Server 2019")]),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("Windows Server 2022")]),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("Windows Server")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("20H2")]),t._v(" "),v("td"),t._v(" "),v("td")])])]),t._v(" "),v("h2",{attrs:{id:"漏洞复现"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#漏洞复现"}},[t._v("#")]),t._v(" 漏洞复现")]),t._v(" "),v("p",[t._v("下载POC文件, 在Windows中运行")]),t._v(" "),v("p",[v("img",{attrs:{src:_(2053),alt:"image-20220420095102270"}})]),t._v(" "),v("h2",{attrs:{id:"漏洞poc"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#漏洞poc"}},[t._v("#")]),t._v(" 漏洞POC")]),t._v(" "),v("a-alert",{attrs:{type:"success",message:"https://github.com/Ascotbe/Kernelhub/tree/master/CVE-2022-21882",description:"",showIcon:""}}),t._v(" "),v("br")],1)}),[],!1,null,null,null);v.default=s.exports}}]);