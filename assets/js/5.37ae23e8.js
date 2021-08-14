(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{193:function(t,s,n){t.exports=n.p+"assets/img/doc.29233050.jpg"},194:function(t,s,n){t.exports=n.p+"assets/img/summary.59a1bd14.jpg"},195:function(t,s,n){t.exports=n.p+"assets/img/table.9c206dae.jpg"},196:function(t,s,n){t.exports=n.p+"assets/img/word.fc23163c.jpg"},235:function(t,s,n){"use strict";n.r(s);var a=n(6),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"数据库文档生成器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据库文档生成器"}},[t._v("#")]),t._v(" 数据库文档生成器")]),t._v(" "),a("ul",[a("li",[t._v("这是一个简单的小工具，可以根据数据库表结构生成数据库设计文档（格式包括markdown，html，word)，支持数据库（MySQL,Oracle,PostgreSQL)")]),t._v(" "),a("li",[t._v("如果你嫌PowerDesigner太重，那么可以试试该工具。")]),t._v(" "),a("li",[t._v("你可以下载"),a("a",{attrs:{href:"https://github.com/enilu/database-doc-generator/releases/tag/1.0",target:"_blank",rel:"noopener noreferrer"}},[t._v("release"),a("OutboundLink")],1),t._v("包来或者下载"),a("a",{attrs:{href:"https://github.com/enilu/database-doc-generator",target:"_blank",rel:"noopener noreferrer"}},[t._v("源代码"),a("OutboundLink")],1),t._v("来使用。")]),t._v(" "),a("li",[t._v("如果使用源代码，需要先克隆该项目后运行mvn package打包，然后运行发布包中的bin/start.bat")]),t._v(" "),a("li",[t._v("运行程序后按照下面提示输入对应数据库参数：")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("choose database:\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(":MySQL\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(":Oracle\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(":PostgreSQL\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v(":SQLServer\nSelect the appropriate numbers choose database "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("type")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Enter "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'c'")]),t._v(" to cancel"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(":\n "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\ninput database name:\nweb-flash\ninput host:\nlocalhost\ninput port"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("default "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3306")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(":\n\ninput username:\nroot\ninput password:\nroot\n\n")])])]),a("ul",[a("li",[t._v("输入完成后回车，即可生成数据库文档目录${dbname}-doc,目录中包括markdown文件和word文档：")])]),t._v(" "),a("p",[a("img",{attrs:{src:n(193),alt:"doc"}})]),t._v(" "),a("ul",[a("li",[t._v("将markdown生成html：确保安装了gitbook后，进入上述文件目录的命令行窗口运行：gitbook serve")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("E:"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("database-doc-generator-20181006100721"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("web-flash-doc"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("gitbook serve\nLive reload server started on port: "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("35729")]),t._v("\nPress CTRL+C to quit "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n\ninfo: "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),t._v(" plugins are installed\ninfo: loading plugin "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"livereload"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(". OK\ninfo: loading plugin "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"highlight"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(". OK\ninfo: loading plugin "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"search"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(". OK\ninfo: loading plugin "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"lunr"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(". OK\ninfo: loading plugin "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"sharing"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(". OK\ninfo: loading plugin "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fontsettings"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(". OK\ninfo: loading plugin "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"theme-default"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(". OK\ninfo: found "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("23")]),t._v(" pages\ninfo: found "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" asset files\ninfo: "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v(" generation finished with success "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(".0s "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("\n\nStarting server "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\nServing book on http://localhost:4000\n")])])]),a("ul",[a("li",[t._v("访问 http://localhost:4000，即可在线查看数据库文档")])]),t._v(" "),a("p",[a("img",{attrs:{src:n(194),alt:"summary"}})]),t._v(" "),a("p",[a("img",{attrs:{src:n(195),alt:"table"}})]),t._v(" "),a("ul",[a("li",[t._v("word文档是通过html页面作为模板而生成的，你可以通过调整html模板来调整word模板的生成样式。\n"),a("img",{attrs:{src:n(196),alt:"word"}})])])])}),[],!1,null,null,null);s.default=e.exports}}]);