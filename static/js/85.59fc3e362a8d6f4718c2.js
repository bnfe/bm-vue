(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{524:function(t,s,a){"use strict";a.r(s);var l={data:()=>({min:"2018-01-06",max:"2018-10-02",value:["2018-01-10","2018-03-20"],multiple:"1",multipleOptions:[{value:"1",label:"true"},{value:"0",label:"false"}]}),methods:{change(t){console.log("change:"+t)},handleChange(t){this.multiple=t.value},disabledDate(t){if(/(0|6)/.test(t.getDay()))return!0},dateRender(t){const s=this.$createElement;return/(6)/.test(t.getDate())?s("bm-badge",{props:{theme:"primary",sup:!0,shape:"dot"}},t.getDate()):s("span",t.getDate())}},watch:{value(t){console.log("watch:"+t)}}},e=a(6),n=Object(e.a)(l,(function(){var t=this,s=t._self._c;return s("div",[s("div",{staticClass:"bm-vue-demo"},[s("div",{staticClass:"bm-panel"},[t._m(0),t._v(" "),s("div",{staticClass:"bm-panel__body"},[s("bm-cell",{attrs:{title:"multiple"}},[s("bm-select",{attrs:{"data-source":t.multipleOptions},on:{ok:t.handleChange},model:{value:t.multiple,callback:function(s){t.multiple=s},expression:"multiple"}})],1),t._v(" "),s("bm-cell",{attrs:{title:"min"}},[s("bm-date-select",{attrs:{title:"选择日期",placeholder:"请选择日期",mode:"date",format:"yyyy-MM-dd",max:"2030-10-25",min:"1917-10-25"},model:{value:t.min,callback:function(s){t.min=s},expression:"min"}})],1),t._v(" "),s("bm-cell",{attrs:{title:"max"}},[s("bm-date-select",{attrs:{title:"选择日期",placeholder:"请选择日期",mode:"date",format:"yyyy-MM-dd",max:"2030-10-25",min:"1917-10-25"},model:{value:t.max,callback:function(s){t.max=s},expression:"max"}})],1),t._v(" "),s("bm-calendar",{attrs:{multiple:"1"==t.multiple,"date-render":t.dateRender,"disabled-date":t.disabledDate,min:t.min,max:t.max},on:{change:t.change},model:{value:t.value,callback:function(s){t.value=s},expression:"value"}})],1)])]),t._m(1)])}),[function(){var t=this._self._c;return t("div",{staticClass:"bm-panel__header"},[t("div",{staticClass:"bm-panel__title"},[this._v("简单日历\n\n")])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"bm-markdown-doc"},[s("h2",[t._v("日历 Calendar")]),t._v(" "),s("div",{staticClass:"demo custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("简单日历")]),t._v(" "),s("pre",{staticClass:"hljs"},[s("code",[s("span",{staticClass:"hljs-tag"},[t._v("<"),s("span",{staticClass:"hljs-name"},[t._v("bm-cell")]),t._v(" "),s("span",{staticClass:"hljs-attr"},[t._v("title")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v('"multiple"')]),t._v(">")]),t._v("\n  "),s("span",{staticClass:"hljs-tag"},[t._v("<"),s("span",{staticClass:"hljs-name"},[t._v("bm-select")]),t._v(" "),s("span",{staticClass:"hljs-attr"},[t._v("v-model")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v('"multiple"')]),t._v(" @"),s("span",{staticClass:"hljs-attr"},[t._v("ok")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v('"handleChange"')]),t._v(" "),s("span",{staticClass:"hljs-attr"},[t._v(":data-source")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v('"multipleOptions"')]),t._v(">")]),t._v("\n"),s("span",{staticClass:"hljs-tag"},[t._v("</"),s("span",{staticClass:"hljs-name"},[t._v("bm-select")]),t._v(">")]),s("span",{staticClass:"hljs-tag"},[t._v("</"),s("span",{staticClass:"hljs-name"},[t._v("bm-cell")]),t._v(">")]),t._v("\n"),s("span",{staticClass:"hljs-tag"},[t._v("<"),s("span",{staticClass:"hljs-name"},[t._v("bm-cell")]),t._v(" "),s("span",{staticClass:"hljs-attr"},[t._v("title")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v('"min"')]),t._v(">")]),t._v("\n  "),s("span",{staticClass:"hljs-tag"},[t._v("<"),s("span",{staticClass:"hljs-name"},[t._v("bm-date-select")]),t._v(" "),s("span",{staticClass:"hljs-attr"},[t._v("v-model")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v('"min"')]),t._v(" "),s("span",{staticClass:"hljs-attr"},[t._v("title")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v('"选择日期"')]),t._v(" "),s("span",{staticClass:"hljs-attr"},[t._v("placeholder")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v('"请选择日期"')]),t._v(" "),s("span",{staticClass:"hljs-attr"},[t._v("mode")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v('"date"')]),t._v(" "),s("span",{staticClass:"hljs-attr"},[t._v("format")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v('"yyyy-MM-dd"')]),t._v(" "),s("span",{staticClass:"hljs-attr"},[t._v("max")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v('"2030-10-25"')]),t._v(" "),s("span",{staticClass:"hljs-attr"},[t._v("min")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v('"1917-10-25"')]),t._v(">")]),t._v("\n  "),s("span",{staticClass:"hljs-tag"},[t._v("</"),s("span",{staticClass:"hljs-name"},[t._v("bm-date-select")]),t._v(">")]),t._v("\n"),s("span",{staticClass:"hljs-tag"},[t._v("</"),s("span",{staticClass:"hljs-name"},[t._v("bm-cell")]),t._v(">")]),t._v("\n"),s("span",{staticClass:"hljs-tag"},[t._v("<"),s("span",{staticClass:"hljs-name"},[t._v("bm-cell")]),t._v(" "),s("span",{staticClass:"hljs-attr"},[t._v("title")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v('"max"')]),t._v(">")]),t._v("\n  "),s("span",{staticClass:"hljs-tag"},[t._v("<"),s("span",{staticClass:"hljs-name"},[t._v("bm-date-select")]),t._v(" "),s("span",{staticClass:"hljs-attr"},[t._v("v-model")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v('"max"')]),t._v(" "),s("span",{staticClass:"hljs-attr"},[t._v("title")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v('"选择日期"')]),t._v(" "),s("span",{staticClass:"hljs-attr"},[t._v("placeholder")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v('"请选择日期"')]),t._v(" "),s("span",{staticClass:"hljs-attr"},[t._v("mode")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v('"date"')]),t._v(" "),s("span",{staticClass:"hljs-attr"},[t._v("format")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v('"yyyy-MM-dd"')]),t._v(" "),s("span",{staticClass:"hljs-attr"},[t._v("max")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v('"2030-10-25"')]),t._v(" "),s("span",{staticClass:"hljs-attr"},[t._v("min")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v('"1917-10-25"')]),t._v(">")]),t._v("\n  "),s("span",{staticClass:"hljs-tag"},[t._v("</"),s("span",{staticClass:"hljs-name"},[t._v("bm-date-select")]),t._v(">")]),t._v("\n"),s("span",{staticClass:"hljs-tag"},[t._v("</"),s("span",{staticClass:"hljs-name"},[t._v("bm-cell")]),t._v(">")]),t._v("\n"),s("span",{staticClass:"hljs-tag"},[t._v("<"),s("span",{staticClass:"hljs-name"},[t._v("bm-calendar")]),t._v(" "),s("span",{staticClass:"hljs-attr"},[t._v("v-model")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v('"value"')]),t._v(" @"),s("span",{staticClass:"hljs-attr"},[t._v("change")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v('"change"')]),t._v(" "),s("span",{staticClass:"hljs-attr"},[t._v(":multiple")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v("\"multiple == '1'\"")]),t._v(" "),s("span",{staticClass:"hljs-attr"},[t._v(":date-render")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v('"dateRender"')]),t._v(" "),s("span",{staticClass:"hljs-attr"},[t._v(":disabled-date")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v('"disabledDate"')]),t._v(" "),s("span",{staticClass:"hljs-attr"},[t._v(":min")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v('"min"')]),t._v(" "),s("span",{staticClass:"hljs-attr"},[t._v(":max")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v('"max"')]),t._v(">")]),t._v("\n")])])]),t._v(" "),s("h3",[t._v("Vue Script")]),t._v(" "),s("pre",{staticClass:"hljs"},[s("code",[t._v("<script name="),s("span",{staticClass:"hljs-string"},[t._v('"vue"')]),t._v(">\n"),s("span",{staticClass:"hljs-keyword"},[t._v("export")]),t._v(" "),s("span",{staticClass:"hljs-keyword"},[t._v("default")]),t._v(" {\n  "),s("span",{staticClass:"hljs-title function_"},[t._v("data")]),t._v("("),s("span",{staticClass:"hljs-params"}),t._v(") {\n    "),s("span",{staticClass:"hljs-keyword"},[t._v("return")]),t._v(" {\n      "),s("span",{staticClass:"hljs-attr"},[t._v("min")]),t._v(": "),s("span",{staticClass:"hljs-string"},[t._v('"2018-01-06"')]),t._v(",\n      "),s("span",{staticClass:"hljs-attr"},[t._v("max")]),t._v(": "),s("span",{staticClass:"hljs-string"},[t._v('"2018-10-02"')]),t._v(",\n      "),s("span",{staticClass:"hljs-attr"},[t._v("value")]),t._v(": ["),s("span",{staticClass:"hljs-string"},[t._v("'2018-01-10'")]),t._v(", "),s("span",{staticClass:"hljs-string"},[t._v("'2018-03-20'")]),t._v("],\n      "),s("span",{staticClass:"hljs-attr"},[t._v("multiple")]),t._v(": "),s("span",{staticClass:"hljs-string"},[t._v('"1"')]),t._v(",\n      "),s("span",{staticClass:"hljs-attr"},[t._v("multipleOptions")]),t._v(": [\n        { "),s("span",{staticClass:"hljs-attr"},[t._v("value")]),t._v(": "),s("span",{staticClass:"hljs-string"},[t._v("'1'")]),t._v(", "),s("span",{staticClass:"hljs-attr"},[t._v("label")]),t._v(": "),s("span",{staticClass:"hljs-string"},[t._v('"true"')]),t._v(" },\n        { "),s("span",{staticClass:"hljs-attr"},[t._v("value")]),t._v(": "),s("span",{staticClass:"hljs-string"},[t._v("'0'")]),t._v(", "),s("span",{staticClass:"hljs-attr"},[t._v("label")]),t._v(": "),s("span",{staticClass:"hljs-string"},[t._v('"false"')]),t._v(" }\n      ]\n    }\n  },\n  "),s("span",{staticClass:"hljs-attr"},[t._v("methods")]),t._v(": {\n    "),s("span",{staticClass:"hljs-title function_"},[t._v("change")]),t._v("("),s("span",{staticClass:"hljs-params"},[t._v("date")]),t._v(") {\n      "),s("span",{staticClass:"hljs-variable language_"},[t._v("console")]),t._v("."),s("span",{staticClass:"hljs-title function_"},[t._v("log")]),t._v("("),s("span",{staticClass:"hljs-string"},[t._v("'change:'")]),t._v(" + date);\n    },\n    "),s("span",{staticClass:"hljs-title function_"},[t._v("handleChange")]),t._v("("),s("span",{staticClass:"hljs-params"},[t._v("val")]),t._v(") {\n      "),s("span",{staticClass:"hljs-variable language_"},[t._v("this")]),t._v("."),s("span",{staticClass:"hljs-property"},[t._v("multiple")]),t._v(" = val."),s("span",{staticClass:"hljs-property"},[t._v("value")]),t._v(";\n    },\n    "),s("span",{staticClass:"hljs-title function_"},[t._v("disabledDate")]),t._v("("),s("span",{staticClass:"hljs-params"},[t._v("date")]),t._v(") {\n      "),s("span",{staticClass:"hljs-keyword"},[t._v("if")]),t._v(" ("),s("span",{staticClass:"hljs-regexp"},[t._v("/(0|6)/")]),t._v("."),s("span",{staticClass:"hljs-title function_"},[t._v("test")]),t._v("(date."),s("span",{staticClass:"hljs-title function_"},[t._v("getDay")]),t._v("())) {\n        "),s("span",{staticClass:"hljs-keyword"},[t._v("return")]),t._v(" "),s("span",{staticClass:"hljs-literal"},[t._v("true")]),t._v(";\n      }\n    },\n    "),s("span",{staticClass:"hljs-title function_"},[t._v("dateRender")]),t._v("("),s("span",{staticClass:"hljs-params"},[t._v("date")]),t._v(") {\n      "),s("span",{staticClass:"hljs-keyword"},[t._v("const")]),t._v(" h = "),s("span",{staticClass:"hljs-variable language_"},[t._v("this")]),t._v("."),s("span",{staticClass:"hljs-property"},[t._v("$createElement")]),t._v(";\n      "),s("span",{staticClass:"hljs-keyword"},[t._v("if")]),t._v(" ("),s("span",{staticClass:"hljs-regexp"},[t._v("/(6)/")]),t._v("."),s("span",{staticClass:"hljs-title function_"},[t._v("test")]),t._v("(date."),s("span",{staticClass:"hljs-title function_"},[t._v("getDate")]),t._v("())) {\n        "),s("span",{staticClass:"hljs-keyword"},[t._v("return")]),t._v(" "),s("span",{staticClass:"hljs-title function_"},[t._v("h")]),t._v("("),s("span",{staticClass:"hljs-string"},[t._v("'bm-badge'")]),t._v(", { "),s("span",{staticClass:"hljs-attr"},[t._v("props")]),t._v(": { "),s("span",{staticClass:"hljs-attr"},[t._v("theme")]),t._v(": "),s("span",{staticClass:"hljs-string"},[t._v("'primary'")]),t._v(", "),s("span",{staticClass:"hljs-attr"},[t._v("sup")]),t._v(": "),s("span",{staticClass:"hljs-literal"},[t._v("true")]),t._v(", "),s("span",{staticClass:"hljs-attr"},[t._v("shape")]),t._v(": "),s("span",{staticClass:"hljs-string"},[t._v("'dot'")]),t._v(" }}, date."),s("span",{staticClass:"hljs-title function_"},[t._v("getDate")]),t._v("());\n      }\n      "),s("span",{staticClass:"hljs-keyword"},[t._v("return")]),t._v(" "),s("span",{staticClass:"hljs-title function_"},[t._v("h")]),t._v("("),s("span",{staticClass:"hljs-string"},[t._v("'span'")]),t._v(", date."),s("span",{staticClass:"hljs-title function_"},[t._v("getDate")]),t._v("());\n    }\n  },\n  "),s("span",{staticClass:"hljs-attr"},[t._v("watch")]),t._v(": {\n    "),s("span",{staticClass:"hljs-title function_"},[t._v("value")]),t._v("("),s("span",{staticClass:"hljs-params"},[t._v("val")]),t._v(") {\n      "),s("span",{staticClass:"hljs-variable language_"},[t._v("console")]),t._v("."),s("span",{staticClass:"hljs-title function_"},[t._v("log")]),t._v("("),s("span",{staticClass:"hljs-string"},[t._v("'watch:'")]),t._v(" + val);\n    }\n  }\n};\n<\/script>\n")])]),t._v(" "),s("h3",[t._v("API")]),t._v(" "),s("h4",[t._v("Calendar Attributes")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("属性")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("类型")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("默认值")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("可选值／参数")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("说明")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("titles")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("Array")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}}),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("['日', '一', '二', '三', '四', '五', '六']")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("周期标题")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("multiple")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("boolean")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("false")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}}),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("是否日期范围选择开关")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("default-value")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("String ,Number , Date , [Date, Date]")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("无")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("设置选中的日期")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("v-model")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("String ,Number , Date , [Date, Date]")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("无")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("双向绑定日期值")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("disabled-date")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("(date?: Date) => boolean () => false")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}}),t._v(" "),s("td",{staticStyle:{"text-align":"left"}}),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("日期是否禁止选择")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("min")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("String ,Number , Date")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("当天日期")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}}),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("\b 最小日期限制")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("max")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("String ,Number , Date")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("min 开始往后一年")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}}),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("\b 最大日期限制")])])])]),t._v(" "),s("h4",[t._v("Calendar Events")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("事件名称")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("回调参数")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("change")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("当选择日期点击时触发的事件。")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("multiple 为 true 返回 [Date, Date]，否则返回 Date")])])])])])}],!1,null,null,null);s.default=n.exports}}]);