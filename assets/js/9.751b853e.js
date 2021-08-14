(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{216:function(t,a,s){t.exports=s.p+"assets/img/menu_vue.efab9dbc.jpg"},217:function(t,a,s){t.exports=s.p+"assets/img/role_vue.e5464266.jpg"},218:function(t,a,s){t.exports=s.p+"assets/img/user_role_vue.07eabc8c.jpg"},257:function(t,a,s){"use strict";s.r(a);var n=s(6),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"权限管理"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#权限管理"}},[t._v("#")]),t._v(" 权限管理")]),t._v(" "),n("p",[t._v("权限管理内容包括权限的配置，登陆认证，权限校验等部分。")]),t._v(" "),n("h2",{attrs:{id:"权限配置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#权限配置"}},[t._v("#")]),t._v(" 权限配置")]),t._v(" "),n("p",[t._v("权限管理的核心为控制角色对菜单和按钮的访问，所以权限配置主要包含以下内容的维护:")]),t._v(" "),n("ul",[n("li",[t._v("菜单管理： 维护要控制的页面菜单和按钮\n"),n("img",{attrs:{src:s(216),alt:"menu"}})]),t._v(" "),n("li",[t._v("角色管理： 为角色配置可以访问的菜单和按钮\n"),n("img",{attrs:{src:s(217),alt:"menu"}})]),t._v(" "),n("li",[t._v("用户管理： 为用户配置角色\n"),n("img",{attrs:{src:s(218),alt:"menu"}})])]),t._v(" "),n("h2",{attrs:{id:"权限控制"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#权限控制"}},[t._v("#")]),t._v(" 权限控制")]),t._v(" "),n("p",[t._v("权限的实现步骤如下：")]),t._v(" "),n("ul",[n("li",[t._v("配置拦截器")]),t._v(" "),n("li",[t._v("左侧菜单导航的权限控制（页面权限控制和路由生成）")]),t._v(" "),n("li",[t._v("页面功能的权限控制（按钮权限控制）")])]),t._v(" "),n("h2",{attrs:{id:"配置拦截器"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#配置拦截器"}},[t._v("#")]),t._v(" 配置拦截器")]),t._v(" "),n("p",[t._v("cn.enilu.flash.api.interceptor.JwtFilter中配置拦截器，拦截要过滤的请求地址，具体请参考源代码")]),t._v(" "),n("h2",{attrs:{id:"左侧菜单导航的权限控制"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#左侧菜单导航的权限控制"}},[t._v("#")]),t._v(" 左侧菜单导航的权限控制")]),t._v(" "),n("p",[t._v("用户登陆成功后，会根据用户所拥有的角色配置的菜单生成路由表数据返回到前端：cn.enilu.flash.api.controller.AccountController：")]),t._v(" "),n("div",{staticClass:"language-java extra-class"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//获取用户可以操作的菜单列表")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("List")]),t._v(" menus "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" menuRepository"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getMenusByRoleIds")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("shiroUser"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getRoleList")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nmap"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("put")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"menus"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("menus"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("p",[t._v("前端接收到菜单列表信息后根据是否有这些菜单列表的操作权限来生成路由表：flash-vue-admin/src/store/modules/permission.js")]),t._v(" "),n("h2",{attrs:{id:"页面功能-按钮-的权限控制"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#页面功能-按钮-的权限控制"}},[t._v("#")]),t._v(" 页面功能（按钮）的权限控制")]),t._v(" "),n("p",[t._v("页面按钮的控制用到"),n("a",{attrs:{href:"https://github.com/PanJiaChen/vue-element-admin",target:"_blank",rel:"noopener noreferrer"}},[t._v("vue-element-admin"),n("OutboundLink")],1),t._v("封装的一个指令权限"),n("a",{attrs:{href:"https://github.com/PanJiaChen/vue-element-admin/tree/master/src/directive/permission",target:"_blank",rel:"noopener noreferrer"}},[t._v("v-permission"),n("OutboundLink")],1),t._v("，具体用法如下：")]),t._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// js代码")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" permission "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@/directive/permission/index.js'")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  directives"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" permission "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n")])])]),n("div",{staticClass:"language-html extra-class"},[n("pre",{pre:!0,attrs:{class:"language-html"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- vue代码--\x3e")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("el-button")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("success"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("icon")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("el-icon-plus"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("@click.native")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("add"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("v-permission")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("["),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("/mgr/add"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("]"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n           {{$t('button.add') }}\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("el-button")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("el-button")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("primary"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("icon")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("el-icon-edit"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("@click.native")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("edit"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("v-permission")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("["),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("/mgr/edit"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("]"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n {{$t('button.edit') }}\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("el-button")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" \n")])])]),n("p",[t._v('完整的示例参考"系统管理"->"用户管理"的代码'),n("a",{attrs:{href:"https://github.com/enilu/web-flash/tree/master/flash-vue-admin/src/views/system/user",target:"_blank",rel:"noopener noreferrer"}},[t._v("/user/index.vue"),n("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=e.exports}}]);