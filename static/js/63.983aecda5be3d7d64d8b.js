(window.webpackJsonp=window.webpackJsonp||[]).push([[63,97],{519:function(t,s,a){"use strict";a.r(s);var l={data:()=>({initvalue:10}),methods:{handleChange(){console.log(this.initvalue)}}},e=a(6),v=Object(e.a)(l,(function(){var t=this,s=t._self._c;return s("div",[s("div",{staticClass:"bm-vue-demo"},[s("div",{staticClass:"bm-panel"},[t._m(0),t._v(" "),s("div",{staticClass:"bm-panel__body"},[s("bm-cell",{attrs:{title:"普通"}},[s("bm-slider",{attrs:{"default-value":40},on:{change:t.handleChange}})],1),t._v(" "),s("bm-cell",{attrs:{title:"设置默认值"}},[s("bm-slider",{attrs:{"default-value":20}})],1),t._v(" "),s("bm-cell",{attrs:{title:"设置上下限"}},[s("bm-slider",{attrs:{min:-100,max:100},on:{change:t.handleChange},model:{value:t.initvalue,callback:function(s){t.initvalue=s},expression:"initvalue"}})],1),t._v(" "),s("bm-cell",{attrs:{title:"设置步长"}},[s("bm-slider",{attrs:{step:10}})],1),t._v(" "),s("bm-cell",{attrs:{title:"禁用状态"}},[s("bm-slider",{attrs:{"default-value":20,disabled:""}})],1)],1)])]),t._m(1)])}),[function(){var t=this._self._c;return t("div",{staticClass:"bm-panel__header"},[t("div",{staticClass:"bm-panel__title"},[this._v("基本\n\n")])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"bm-markdown-doc"},[s("h2",[t._v("滑动输入条 Slider")]),t._v(" "),s("div",{staticClass:"demo custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("基本")]),t._v(" "),s("pre",{staticClass:"hljs"},[s("code",[s("span",{staticClass:"hljs-tag"},[t._v("<"),s("span",{staticClass:"hljs-name"},[t._v("bm-cell")]),t._v(" "),s("span",{staticClass:"hljs-attr"},[t._v("title")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v('"普通"')]),t._v(">")]),t._v("\n  "),s("span",{staticClass:"hljs-tag"},[t._v("<"),s("span",{staticClass:"hljs-name"},[t._v("bm-slider")]),t._v(" "),s("span",{staticClass:"hljs-attr"},[t._v(":default-value")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v('"40"')]),t._v(" @"),s("span",{staticClass:"hljs-attr"},[t._v("change")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v('"handleChange"')]),t._v(">")]),s("span",{staticClass:"hljs-tag"},[t._v("</"),s("span",{staticClass:"hljs-name"},[t._v("bm-slider")]),t._v(">")]),t._v("\n"),s("span",{staticClass:"hljs-tag"},[t._v("</"),s("span",{staticClass:"hljs-name"},[t._v("bm-cell")]),t._v(">")]),t._v("\n\n"),s("span",{staticClass:"hljs-tag"},[t._v("<"),s("span",{staticClass:"hljs-name"},[t._v("bm-cell")]),t._v(" "),s("span",{staticClass:"hljs-attr"},[t._v("title")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v('"设置默认值"')]),t._v(">")]),t._v("\n  "),s("span",{staticClass:"hljs-tag"},[t._v("<"),s("span",{staticClass:"hljs-name"},[t._v("bm-slider")]),t._v(" "),s("span",{staticClass:"hljs-attr"},[t._v(":default-value")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v('"20"')]),t._v(">")]),s("span",{staticClass:"hljs-tag"},[t._v("</"),s("span",{staticClass:"hljs-name"},[t._v("bm-slider")]),t._v(">")]),t._v("\n"),s("span",{staticClass:"hljs-tag"},[t._v("</"),s("span",{staticClass:"hljs-name"},[t._v("bm-cell")]),t._v(">")]),t._v("\n\n"),s("span",{staticClass:"hljs-tag"},[t._v("<"),s("span",{staticClass:"hljs-name"},[t._v("bm-cell")]),t._v(" "),s("span",{staticClass:"hljs-attr"},[t._v("title")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v('"设置上下限"')]),t._v(">")]),t._v("\n  "),s("span",{staticClass:"hljs-tag"},[t._v("<"),s("span",{staticClass:"hljs-name"},[t._v("bm-slider")]),t._v(" "),s("span",{staticClass:"hljs-attr"},[t._v(":min")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v('"-100"')]),t._v(" "),s("span",{staticClass:"hljs-attr"},[t._v(":max")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v('"100"')]),t._v(" "),s("span",{staticClass:"hljs-attr"},[t._v("v-model")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v('"initvalue"')]),t._v(" @"),s("span",{staticClass:"hljs-attr"},[t._v("change")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v('"handleChange"')]),t._v(">")]),s("span",{staticClass:"hljs-tag"},[t._v("</"),s("span",{staticClass:"hljs-name"},[t._v("bm-slider")]),t._v(">")]),t._v("\n"),s("span",{staticClass:"hljs-tag"},[t._v("</"),s("span",{staticClass:"hljs-name"},[t._v("bm-cell")]),t._v(">")]),t._v("\n\n"),s("span",{staticClass:"hljs-tag"},[t._v("<"),s("span",{staticClass:"hljs-name"},[t._v("bm-cell")]),t._v(" "),s("span",{staticClass:"hljs-attr"},[t._v("title")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v('"设置步长"')]),t._v(">")]),t._v("\n  "),s("span",{staticClass:"hljs-tag"},[t._v("<"),s("span",{staticClass:"hljs-name"},[t._v("bm-slider")]),t._v(" "),s("span",{staticClass:"hljs-attr"},[t._v(":step")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v('"10"')]),t._v(">")]),s("span",{staticClass:"hljs-tag"},[t._v("</"),s("span",{staticClass:"hljs-name"},[t._v("bm-slider")]),t._v(">")]),t._v("\n"),s("span",{staticClass:"hljs-tag"},[t._v("</"),s("span",{staticClass:"hljs-name"},[t._v("bm-cell")]),t._v(">")]),t._v("\n\n"),s("span",{staticClass:"hljs-tag"},[t._v("<"),s("span",{staticClass:"hljs-name"},[t._v("bm-cell")]),t._v(" "),s("span",{staticClass:"hljs-attr"},[t._v("title")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v('"禁用状态"')]),t._v(">")]),t._v("\n  "),s("span",{staticClass:"hljs-tag"},[t._v("<"),s("span",{staticClass:"hljs-name"},[t._v("bm-slider")]),t._v(" "),s("span",{staticClass:"hljs-attr"},[t._v(":default-value")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v('"20"')]),t._v(" "),s("span",{staticClass:"hljs-attr"},[t._v("disabled")]),t._v(">")]),s("span",{staticClass:"hljs-tag"},[t._v("</"),s("span",{staticClass:"hljs-name"},[t._v("bm-slider")]),t._v(">")]),t._v("\n"),s("span",{staticClass:"hljs-tag"},[t._v("</"),s("span",{staticClass:"hljs-name"},[t._v("bm-cell")]),t._v(">")]),t._v("\n")])])]),t._v(" "),s("h3",[t._v("Vue Script")]),t._v(" "),s("pre",{staticClass:"hljs"},[s("code",[t._v("<script name="),s("span",{staticClass:"hljs-string"},[t._v('"vue"')]),t._v(">\n"),s("span",{staticClass:"hljs-keyword"},[t._v("export")]),t._v(" "),s("span",{staticClass:"hljs-keyword"},[t._v("default")]),t._v(" {\n  "),s("span",{staticClass:"hljs-title function_"},[t._v("data")]),t._v("("),s("span",{staticClass:"hljs-params"}),t._v(") {\n    "),s("span",{staticClass:"hljs-keyword"},[t._v("return")]),t._v(" {\n      "),s("span",{staticClass:"hljs-attr"},[t._v("initvalue")]),t._v(": "),s("span",{staticClass:"hljs-number"},[t._v("10")]),t._v(",\n    }\n  },\n  "),s("span",{staticClass:"hljs-attr"},[t._v("methods")]),t._v(": {\n    "),s("span",{staticClass:"hljs-title function_"},[t._v("handleChange")]),t._v("("),s("span",{staticClass:"hljs-params"}),t._v("){\n      "),s("span",{staticClass:"hljs-keyword"},[t._v("const")]),t._v(" self = "),s("span",{staticClass:"hljs-variable language_"},[t._v("this")]),t._v(";\n      "),s("span",{staticClass:"hljs-variable language_"},[t._v("console")]),t._v("."),s("span",{staticClass:"hljs-title function_"},[t._v("log")]),t._v("(self."),s("span",{staticClass:"hljs-property"},[t._v("initvalue")]),t._v(")\n    }\n  },\n};\n<\/script>\n")])]),t._v(" "),s("h3",[t._v("API")]),t._v(" "),s("h4",[t._v("Slider Attributes")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("属性")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("类型")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("默认值")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("可选值／参数")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("说明")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("v-model")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("number")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}}),t._v(" "),s("td",{staticStyle:{"text-align":"left"}}),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("绑定选项值")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("default-value")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("number")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}}),t._v(" "),s("td",{staticStyle:{"text-align":"left"}}),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("值")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("min")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("number")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}}),t._v(" "),s("td",{staticStyle:{"text-align":"left"}}),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("最小值")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("max")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("number")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}}),t._v(" "),s("td",{staticStyle:{"text-align":"left"}}),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("最大值")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("step")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("number")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("1")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}}),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("步长")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("disabled")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("boolean")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("false")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}}),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("是否禁用")])])])]),t._v(" "),s("h4",[t._v("Slider Events")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("事件名称")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("回调参数")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("change")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("function")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("noop")])])])])])}],!1,null,null,null);s.default=v.exports},543:function(t,s,a){},583:function(t,s,a){"use strict";a.r(s);var l=a(519),e=a(152),v=a(153),i=a(154),n=(a(543),{components:{Container:e.a,PageHeader:v.a,PageFooter:i.a,Demo:l.default}}),_=a(6),c=Object(_.a)(n,(function(){var t=this._self._c;return t("Container",{staticClass:"slider-page"},[t("PageHeader",{attrs:{title:"滑动输入条 Slider"}}),this._v(" "),t("Demo"),this._v(" "),t("PageFooter")],1)}),[],!1,null,null,null);s.default=c.exports}}]);