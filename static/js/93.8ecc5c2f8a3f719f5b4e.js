(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{526:function(t,s,a){"use strict";a.r(s);var l={data:()=>({visible:!0}),methods:{handleClick(){alert("click this notice!")}}},i=a(6),e=Object(i.a)(l,(function(){var t=this,s=t._self._c;return s("div",[s("div",{staticClass:"bm-vue-demo"},[s("div",{staticClass:"bm-panel"},[t._m(0),t._v(" "),s("div",{staticClass:"bm-panel__body"},[s("bm-notice-bar",[t._v("普通")]),t._v(" "),s("bm-notice-bar",{attrs:{theme:"error"}},[t._v("错误色")]),t._v(" "),s("bm-notice-bar",{attrs:{icon:"wrong-round"}},[t._v("自定义图标")]),t._v(" "),s("bm-notice-bar",{attrs:{scrollable:""}},[t._v("请注意，本组件使用了自动滚动功能，更多用法请参见使用文档。")])],1)]),t._v(" "),s("div",{staticClass:"bm-panel"},[t._m(1),t._v(" "),s("div",{staticClass:"bm-panel__body"},[s("bm-notice-bar",{attrs:{hasArrow:""},on:{click:t.handleClick}},[t._v("链接样式的")]),t._v(" "),s("bm-notice-bar",{attrs:{closable:"",visible:t.visible},on:{"update:visible":function(s){t.visible=s}}},[t._v("\n  可关闭的\n")])],1)])]),t._m(2)])}),[function(){var t=this._self._c;return t("div",{staticClass:"bm-panel__header"},[t("div",{staticClass:"bm-panel__title"},[this._v("基本用法\n\n")])])},function(){var t=this._self._c;return t("div",{staticClass:"bm-panel__header"},[t("div",{staticClass:"bm-panel__title"},[this._v("特定场景\n\n")])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"bm-markdown-doc"},[s("h2",[t._v("通告栏 NoticeBar")]),t._v(" "),s("div",{staticClass:"demo custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("基本用法")]),t._v(" "),s("pre",{staticClass:"hljs"},[s("code",[s("span",{staticClass:"hljs-tag"},[t._v("<"),s("span",{staticClass:"hljs-name"},[t._v("bm-notice-bar")]),t._v(">")]),t._v("普通"),s("span",{staticClass:"hljs-tag"},[t._v("</"),s("span",{staticClass:"hljs-name"},[t._v("bm-notice-bar")]),t._v(">")]),t._v("\n"),s("span",{staticClass:"hljs-tag"},[t._v("<"),s("span",{staticClass:"hljs-name"},[t._v("bm-notice-bar")]),t._v(" "),s("span",{staticClass:"hljs-attr"},[t._v("theme")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v('"error"')]),t._v(">")]),t._v("错误色"),s("span",{staticClass:"hljs-tag"},[t._v("</"),s("span",{staticClass:"hljs-name"},[t._v("bm-notice-bar")]),t._v(">")]),t._v("\n"),s("span",{staticClass:"hljs-tag"},[t._v("<"),s("span",{staticClass:"hljs-name"},[t._v("bm-notice-bar")]),t._v(" "),s("span",{staticClass:"hljs-attr"},[t._v("icon")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v('"wrong-round"')]),t._v(">")]),t._v("自定义图标"),s("span",{staticClass:"hljs-tag"},[t._v("</"),s("span",{staticClass:"hljs-name"},[t._v("bm-notice-bar")]),t._v(">")]),t._v("\n"),s("span",{staticClass:"hljs-tag"},[t._v("<"),s("span",{staticClass:"hljs-name"},[t._v("bm-notice-bar")]),t._v(" "),s("span",{staticClass:"hljs-attr"},[t._v("scrollable")]),t._v(">")]),t._v("请注意，本组件使用了自动滚动功能，更多用法请参见使用文档。"),s("span",{staticClass:"hljs-tag"},[t._v("</"),s("span",{staticClass:"hljs-name"},[t._v("bm-notice-bar")]),t._v(">")]),t._v("\n")])])]),t._v(" "),s("div",{staticClass:"demo custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("特定场景")]),t._v(" "),s("pre",{staticClass:"hljs"},[s("code",[s("span",{staticClass:"hljs-tag"},[t._v("<"),s("span",{staticClass:"hljs-name"},[t._v("bm-notice-bar")]),t._v(" "),s("span",{staticClass:"hljs-attr"},[t._v("hasArrow")]),t._v(" @"),s("span",{staticClass:"hljs-attr"},[t._v("click")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v('"handleClick"')]),t._v(">")]),t._v("链接样式的"),s("span",{staticClass:"hljs-tag"},[t._v("</"),s("span",{staticClass:"hljs-name"},[t._v("bm-notice-bar")]),t._v(">")]),t._v("\n"),s("span",{staticClass:"hljs-comment"},[t._v("\x3c!-- 也可以不绑定visible --\x3e")]),t._v("\n"),s("span",{staticClass:"hljs-tag"},[t._v("<"),s("span",{staticClass:"hljs-name"},[t._v("bm-notice-bar")]),t._v(" "),s("span",{staticClass:"hljs-attr"},[t._v("closable")]),t._v(" "),s("span",{staticClass:"hljs-attr"},[t._v(":visible.sync")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v('"visible"')]),t._v(">")]),t._v("\n  可关闭的\n"),s("span",{staticClass:"hljs-tag"},[t._v("</"),s("span",{staticClass:"hljs-name"},[t._v("bm-notice-bar")]),t._v(">")]),t._v("\n")])])]),t._v(" "),s("h3",[t._v("Vue Script")]),t._v(" "),s("pre",{staticClass:"hljs"},[s("code",[t._v("<script name="),s("span",{staticClass:"hljs-string"},[t._v('"vue"')]),t._v(">\n"),s("span",{staticClass:"hljs-keyword"},[t._v("export")]),t._v(" "),s("span",{staticClass:"hljs-keyword"},[t._v("default")]),t._v(" {\n  "),s("span",{staticClass:"hljs-title function_"},[t._v("data")]),t._v("("),s("span",{staticClass:"hljs-params"}),t._v(") {\n    "),s("span",{staticClass:"hljs-keyword"},[t._v("return")]),t._v(" {\n      "),s("span",{staticClass:"hljs-attr"},[t._v("visible")]),t._v(": "),s("span",{staticClass:"hljs-literal"},[t._v("true")]),t._v(",\n    }\n  },\n  "),s("span",{staticClass:"hljs-attr"},[t._v("methods")]),t._v(": {\n    "),s("span",{staticClass:"hljs-title function_"},[t._v("handleClick")]),t._v("("),s("span",{staticClass:"hljs-params"}),t._v("){\n      "),s("span",{staticClass:"hljs-title function_"},[t._v("alert")]),t._v("("),s("span",{staticClass:"hljs-string"},[t._v("'click this notice!'")]),t._v(");\n    }\n  },\n};\n<\/script>\n")])]),t._v(" "),s("h3",[t._v("API")]),t._v(" "),s("h4",[t._v("NoticeBar Attributes")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("属性")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("类型")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("默认值")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("可选值／参数")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("说明")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("theme")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("string")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("'warning'")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("'primary', 'success', 'warning', 'error'")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("主题")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("icon")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("string")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}}),t._v(" "),s("td",{staticStyle:{"text-align":"left"}}),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("设置图标")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("scrollable")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("boolean")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("false")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}}),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("是否开启自动滚动轮播")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("closable")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("boolean")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("false")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}}),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("是否显示关闭按钮")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("has-arrow")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("boolean")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("false")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}}),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("是否显示箭头")])])])]),t._v(" "),s("h4",[t._v("NoticeBar Events")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("事件名称")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("回调参数")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("click")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("click 时触发的事件")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("event 事件对象")])])])])])}],!1,null,null,null);s.default=e.exports}}]);