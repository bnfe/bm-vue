(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{523:function(t,s,a){"use strict";a.r(s);const l=[{value:"340000",label:"安徽省",children:[{value:"340800",label:"安庆市",children:[{value:"340803",label:"大观区",children:[]},{value:"340822",label:"怀宁县",children:[]},{value:"340882",label:"其它区",children:[]},{value:"340883",label:"其它区",children:[]},{value:"340884",label:"其它区",children:[]},{value:"340885",label:"其它区",children:[]},{value:"340886",label:"其它区",children:[]},{value:"340887",label:"其它区",children:[]},{value:"340888",label:"其它区",children:[]},{value:"340889",label:"其它区",children:[]},{value:"340890",label:"其它区",children:[]}]}]},{value:"310000",label:"上海",children:[{value:"310100",label:"上海市",children:[{value:"310113",label:"宝山区",children:[]},{value:"310105",label:"长宁区",children:[]},{value:"310230",label:"崇明县",children:[]},{value:"310152",label:"川沙区",children:[]}]}]}];var n={data:()=>({visible1:!1,v1:[],District:l}),methods:{handleOk(t){console.log("it may still scrolling when ok is clicked. so ues v-model or @change instead"),console.log(t)},handleChange(t){console.log(t)},handleCancel(t){console.log("cancelled")}}},i=a(6),e=Object(i.a)(n,(function(){var t=this,s=t._self._c;return s("div",[s("div",{staticClass:"bm-vue-demo"},[s("div",{staticClass:"bm-panel"},[t._m(0),t._v(" "),s("div",{staticClass:"bm-panel__body"},[s("bm-cell",{attrs:{title:"单列"}},[s("bm-button",{attrs:{slot:"description",size:"xs"},on:{click:function(s){t.visible1=!0}},slot:"description"},[t._v("开启")])],1),t._v(" "),s("bm-stack-picker",{attrs:{visible:t.visible1,title:"级联选择",placeholder:"请选择","data-source":t.District,"display-render":t=>t.map(t=>t.label).join("-")},on:{"update:visible":function(s){t.visible1=s},ok:t.handleOk,change:t.handleChange,cancel:t.handleCancel}})],1)]),t._v(" "),s("div",{staticClass:"bm-panel"},[t._m(1),t._v(" "),s("div",{staticClass:"bm-panel__body"},[s("bm-cell",{attrs:{title:"级联选择"}},[s("bm-stack-select",{attrs:{title:"级联选择",placeholder:"请选择","data-source":t.District,"display-render":t=>t.map(t=>t.label).join("-")},on:{ok:t.handleOk,change:t.handleChange,cancel:t.handleCancel},model:{value:t.v1,callback:function(s){t.v1=s},expression:"v1"}})],1)],1)])]),t._m(2)])}),[function(){var t=this._self._c;return t("div",{staticClass:"bm-panel__header"},[t("div",{staticClass:"bm-panel__title"},[this._v("基本\n\n")])])},function(){var t=this._self._c;return t("div",{staticClass:"bm-panel__header"},[t("div",{staticClass:"bm-panel__title"},[this._v("层叠式选择器 StackSelect\n\n")])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"bm-markdown-doc"},[s("h2",[t._v("选择器 StackPicker & StackSelect")]),t._v(" "),s("div",{staticClass:"demo custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("基本")]),t._v(" "),s("pre",{staticClass:"hljs"},[s("code",[s("span",{staticClass:"hljs-tag"},[t._v("<"),s("span",{staticClass:"hljs-name"},[t._v("bm-cell")]),t._v(" "),s("span",{staticClass:"hljs-attr"},[t._v("title")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v('"单列"')]),t._v(">")]),t._v("\n  "),s("span",{staticClass:"hljs-tag"},[t._v("<"),s("span",{staticClass:"hljs-name"},[t._v("bm-button")]),t._v(" "),s("span",{staticClass:"hljs-attr"},[t._v("slot")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v('"description"')]),t._v(" "),s("span",{staticClass:"hljs-attr"},[t._v("size")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v('"xs"')]),t._v(" @"),s("span",{staticClass:"hljs-attr"},[t._v("click")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v('"visible1 = true"')]),t._v(">")]),t._v("开启"),s("span",{staticClass:"hljs-tag"},[t._v("</"),s("span",{staticClass:"hljs-name"},[t._v("bm-button")]),t._v(">")]),t._v("\n"),s("span",{staticClass:"hljs-tag"},[t._v("</"),s("span",{staticClass:"hljs-name"},[t._v("bm-cell")]),t._v(">")]),t._v("\n\n"),s("span",{staticClass:"hljs-tag"},[t._v("<"),s("span",{staticClass:"hljs-name"},[t._v("bm-stack-picker")]),t._v(" "),s("span",{staticClass:"hljs-attr"},[t._v(":visible.sync")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v('"visible1"')]),t._v(" "),s("span",{staticClass:"hljs-attr"},[t._v("title")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v('"级联选择"')]),t._v(" "),s("span",{staticClass:"hljs-attr"},[t._v("placeholder")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v('"请选择"')]),t._v(" "),s("span",{staticClass:"hljs-attr"},[t._v(":data-source")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v('"District"')]),t._v(" "),s("span",{staticClass:"hljs-attr"},[t._v(":display-render")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v("\"selected => selected.map(item => item.label).join('-')\"")]),t._v(" @"),s("span",{staticClass:"hljs-attr"},[t._v("ok")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v('"handleOk"')]),t._v(" @"),s("span",{staticClass:"hljs-attr"},[t._v("change")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v('"handleChange"')]),t._v(" @"),s("span",{staticClass:"hljs-attr"},[t._v("cancel")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v('"handleCancel"')]),t._v(">")]),t._v("\n")])])]),t._v(" "),s("div",{staticClass:"demo custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("层叠式选择器 StackSelect")]),t._v(" "),s("pre",{staticClass:"hljs"},[s("code",[s("span",{staticClass:"hljs-tag"},[t._v("<"),s("span",{staticClass:"hljs-name"},[t._v("bm-cell")]),t._v(" "),s("span",{staticClass:"hljs-attr"},[t._v("title")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v('"级联选择"')]),t._v(">")]),t._v("\n  "),s("span",{staticClass:"hljs-tag"},[t._v("<"),s("span",{staticClass:"hljs-name"},[t._v("bm-stack-select")]),t._v(" "),s("span",{staticClass:"hljs-attr"},[t._v("v-model")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v('"v1"')]),t._v(" "),s("span",{staticClass:"hljs-attr"},[t._v("title")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v('"级联选择"')]),t._v(" "),s("span",{staticClass:"hljs-attr"},[t._v("placeholder")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v('"请选择"')]),t._v(" "),s("span",{staticClass:"hljs-attr"},[t._v(":data-source")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v('"District"')]),t._v(" "),s("span",{staticClass:"hljs-attr"},[t._v(":display-render")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v("\"selected => selected.map(item => item.label).join('-')\"")]),t._v(" @"),s("span",{staticClass:"hljs-attr"},[t._v("ok")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v('"handleOk"')]),t._v(" @"),s("span",{staticClass:"hljs-attr"},[t._v("change")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v('"handleChange"')]),t._v(" @"),s("span",{staticClass:"hljs-attr"},[t._v("cancel")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v('"handleCancel"')]),t._v(">")]),t._v("\n"),s("span",{staticClass:"hljs-tag"},[t._v("</"),s("span",{staticClass:"hljs-name"},[t._v("bm-stack-select")]),t._v(">")]),s("span",{staticClass:"hljs-tag"},[t._v("</"),s("span",{staticClass:"hljs-name"},[t._v("bm-cell")]),t._v(">")]),t._v("\n")])])]),t._v(" "),s("h3",[t._v("Vue Script")]),t._v(" "),s("pre",{staticClass:"hljs"},[s("code",[t._v("<script name="),s("span",{staticClass:"hljs-string"},[t._v('"vue"')]),t._v(">\n"),s("span",{staticClass:"hljs-keyword"},[t._v("const")]),t._v(" "),s("span",{staticClass:"hljs-title class_"},[t._v("District")]),t._v(" = [{\n  "),s("span",{staticClass:"hljs-string"},[t._v('"value"')]),t._v(": "),s("span",{staticClass:"hljs-string"},[t._v('"340000"')]),t._v(",\n  "),s("span",{staticClass:"hljs-string"},[t._v('"label"')]),t._v(": "),s("span",{staticClass:"hljs-string"},[t._v('"安徽省"')]),t._v(",\n  "),s("span",{staticClass:"hljs-string"},[t._v('"children"')]),t._v(": [{\n    "),s("span",{staticClass:"hljs-string"},[t._v('"value"')]),t._v(": "),s("span",{staticClass:"hljs-string"},[t._v('"340800"')]),t._v(",\n    "),s("span",{staticClass:"hljs-string"},[t._v('"label"')]),t._v(": "),s("span",{staticClass:"hljs-string"},[t._v('"安庆市"')]),t._v(",\n    "),s("span",{staticClass:"hljs-string"},[t._v('"children"')]),t._v(": [{\n      "),s("span",{staticClass:"hljs-string"},[t._v('"value"')]),t._v(": "),s("span",{staticClass:"hljs-string"},[t._v('"340803"')]),t._v(",\n      "),s("span",{staticClass:"hljs-string"},[t._v('"label"')]),t._v(": "),s("span",{staticClass:"hljs-string"},[t._v('"大观区"')]),t._v(",\n      "),s("span",{staticClass:"hljs-string"},[t._v('"children"')]),t._v(": []\n    }, {\n      "),s("span",{staticClass:"hljs-string"},[t._v('"value"')]),t._v(": "),s("span",{staticClass:"hljs-string"},[t._v('"340822"')]),t._v(",\n      "),s("span",{staticClass:"hljs-string"},[t._v('"label"')]),t._v(": "),s("span",{staticClass:"hljs-string"},[t._v('"怀宁县"')]),t._v(",\n      "),s("span",{staticClass:"hljs-string"},[t._v('"children"')]),t._v(": []\n    }, {\n      "),s("span",{staticClass:"hljs-string"},[t._v('"value"')]),t._v(": "),s("span",{staticClass:"hljs-string"},[t._v('"340882"')]),t._v(",\n      "),s("span",{staticClass:"hljs-string"},[t._v('"label"')]),t._v(": "),s("span",{staticClass:"hljs-string"},[t._v('"其它区"')]),t._v(",\n      "),s("span",{staticClass:"hljs-string"},[t._v('"children"')]),t._v(": []\n    }, {\n      "),s("span",{staticClass:"hljs-string"},[t._v('"value"')]),t._v(": "),s("span",{staticClass:"hljs-string"},[t._v('"340883"')]),t._v(",\n      "),s("span",{staticClass:"hljs-string"},[t._v('"label"')]),t._v(": "),s("span",{staticClass:"hljs-string"},[t._v('"其它区"')]),t._v(",\n      "),s("span",{staticClass:"hljs-string"},[t._v('"children"')]),t._v(": []\n    }, {\n      "),s("span",{staticClass:"hljs-string"},[t._v('"value"')]),t._v(": "),s("span",{staticClass:"hljs-string"},[t._v('"340884"')]),t._v(",\n      "),s("span",{staticClass:"hljs-string"},[t._v('"label"')]),t._v(": "),s("span",{staticClass:"hljs-string"},[t._v('"其它区"')]),t._v(",\n      "),s("span",{staticClass:"hljs-string"},[t._v('"children"')]),t._v(": []\n    }, {\n      "),s("span",{staticClass:"hljs-string"},[t._v('"value"')]),t._v(": "),s("span",{staticClass:"hljs-string"},[t._v('"340885"')]),t._v(",\n      "),s("span",{staticClass:"hljs-string"},[t._v('"label"')]),t._v(": "),s("span",{staticClass:"hljs-string"},[t._v('"其它区"')]),t._v(",\n      "),s("span",{staticClass:"hljs-string"},[t._v('"children"')]),t._v(": []\n    }, {\n      "),s("span",{staticClass:"hljs-string"},[t._v('"value"')]),t._v(": "),s("span",{staticClass:"hljs-string"},[t._v('"340886"')]),t._v(",\n      "),s("span",{staticClass:"hljs-string"},[t._v('"label"')]),t._v(": "),s("span",{staticClass:"hljs-string"},[t._v('"其它区"')]),t._v(",\n      "),s("span",{staticClass:"hljs-string"},[t._v('"children"')]),t._v(": []\n    }, {\n      "),s("span",{staticClass:"hljs-string"},[t._v('"value"')]),t._v(": "),s("span",{staticClass:"hljs-string"},[t._v('"340887"')]),t._v(",\n      "),s("span",{staticClass:"hljs-string"},[t._v('"label"')]),t._v(": "),s("span",{staticClass:"hljs-string"},[t._v('"其它区"')]),t._v(",\n      "),s("span",{staticClass:"hljs-string"},[t._v('"children"')]),t._v(": []\n    }, {\n      "),s("span",{staticClass:"hljs-string"},[t._v('"value"')]),t._v(": "),s("span",{staticClass:"hljs-string"},[t._v('"340888"')]),t._v(",\n      "),s("span",{staticClass:"hljs-string"},[t._v('"label"')]),t._v(": "),s("span",{staticClass:"hljs-string"},[t._v('"其它区"')]),t._v(",\n      "),s("span",{staticClass:"hljs-string"},[t._v('"children"')]),t._v(": []\n    }, {\n      "),s("span",{staticClass:"hljs-string"},[t._v('"value"')]),t._v(": "),s("span",{staticClass:"hljs-string"},[t._v('"340889"')]),t._v(",\n      "),s("span",{staticClass:"hljs-string"},[t._v('"label"')]),t._v(": "),s("span",{staticClass:"hljs-string"},[t._v('"其它区"')]),t._v(",\n      "),s("span",{staticClass:"hljs-string"},[t._v('"children"')]),t._v(": []\n    }, {\n      "),s("span",{staticClass:"hljs-string"},[t._v('"value"')]),t._v(": "),s("span",{staticClass:"hljs-string"},[t._v('"340890"')]),t._v(",\n      "),s("span",{staticClass:"hljs-string"},[t._v('"label"')]),t._v(": "),s("span",{staticClass:"hljs-string"},[t._v('"其它区"')]),t._v(",\n      "),s("span",{staticClass:"hljs-string"},[t._v('"children"')]),t._v(": []\n    }]\n  }]\n},{\n  "),s("span",{staticClass:"hljs-string"},[t._v('"value"')]),t._v(": "),s("span",{staticClass:"hljs-string"},[t._v('"310000"')]),t._v(",\n  "),s("span",{staticClass:"hljs-string"},[t._v('"label"')]),t._v(": "),s("span",{staticClass:"hljs-string"},[t._v('"上海"')]),t._v(",\n  "),s("span",{staticClass:"hljs-string"},[t._v('"children"')]),t._v(": [{\n    "),s("span",{staticClass:"hljs-string"},[t._v('"value"')]),t._v(": "),s("span",{staticClass:"hljs-string"},[t._v('"310100"')]),t._v(",\n    "),s("span",{staticClass:"hljs-string"},[t._v('"label"')]),t._v(": "),s("span",{staticClass:"hljs-string"},[t._v('"上海市"')]),t._v(",\n    "),s("span",{staticClass:"hljs-string"},[t._v('"children"')]),t._v(": [{\n      "),s("span",{staticClass:"hljs-string"},[t._v('"value"')]),t._v(": "),s("span",{staticClass:"hljs-string"},[t._v('"310113"')]),t._v(",\n      "),s("span",{staticClass:"hljs-string"},[t._v('"label"')]),t._v(": "),s("span",{staticClass:"hljs-string"},[t._v('"宝山区"')]),t._v(",\n      "),s("span",{staticClass:"hljs-string"},[t._v('"children"')]),t._v(": []\n    }, {\n      "),s("span",{staticClass:"hljs-string"},[t._v('"value"')]),t._v(": "),s("span",{staticClass:"hljs-string"},[t._v('"310105"')]),t._v(",\n      "),s("span",{staticClass:"hljs-string"},[t._v('"label"')]),t._v(": "),s("span",{staticClass:"hljs-string"},[t._v('"长宁区"')]),t._v(",\n      "),s("span",{staticClass:"hljs-string"},[t._v('"children"')]),t._v(": []\n    }, {\n      "),s("span",{staticClass:"hljs-string"},[t._v('"value"')]),t._v(": "),s("span",{staticClass:"hljs-string"},[t._v('"310230"')]),t._v(",\n      "),s("span",{staticClass:"hljs-string"},[t._v('"label"')]),t._v(": "),s("span",{staticClass:"hljs-string"},[t._v('"崇明县"')]),t._v(",\n      "),s("span",{staticClass:"hljs-string"},[t._v('"children"')]),t._v(": []\n    }, {\n      "),s("span",{staticClass:"hljs-string"},[t._v('"value"')]),t._v(": "),s("span",{staticClass:"hljs-string"},[t._v('"310152"')]),t._v(",\n      "),s("span",{staticClass:"hljs-string"},[t._v('"label"')]),t._v(": "),s("span",{staticClass:"hljs-string"},[t._v('"川沙区"')]),t._v(",\n      "),s("span",{staticClass:"hljs-string"},[t._v('"children"')]),t._v(": []\n    }]\n  }]\n}];\n"),s("span",{staticClass:"hljs-keyword"},[t._v("export")]),t._v(" "),s("span",{staticClass:"hljs-keyword"},[t._v("default")]),t._v(" {\n  "),s("span",{staticClass:"hljs-title function_"},[t._v("data")]),t._v("("),s("span",{staticClass:"hljs-params"}),t._v(") {\n    "),s("span",{staticClass:"hljs-keyword"},[t._v("return")]),t._v(" {\n      "),s("span",{staticClass:"hljs-attr"},[t._v("visible1")]),t._v(": "),s("span",{staticClass:"hljs-literal"},[t._v("false")]),t._v(",\n      "),s("span",{staticClass:"hljs-attr"},[t._v("v1")]),t._v(": [],\n      "),s("span",{staticClass:"hljs-title class_"},[t._v("District")]),t._v(",\n    }\n  },\n  "),s("span",{staticClass:"hljs-attr"},[t._v("methods")]),t._v(": {\n    "),s("span",{staticClass:"hljs-title function_"},[t._v("handleOk")]),t._v("("),s("span",{staticClass:"hljs-params"},[t._v("v")]),t._v(") {\n      "),s("span",{staticClass:"hljs-variable language_"},[t._v("console")]),t._v("."),s("span",{staticClass:"hljs-title function_"},[t._v("log")]),t._v("("),s("span",{staticClass:"hljs-string"},[t._v("'it may still scrolling when ok is clicked. so ues v-model or @change instead'")]),t._v(")\n      "),s("span",{staticClass:"hljs-variable language_"},[t._v("console")]),t._v("."),s("span",{staticClass:"hljs-title function_"},[t._v("log")]),t._v("(v);\n    },\n    "),s("span",{staticClass:"hljs-title function_"},[t._v("handleChange")]),t._v("("),s("span",{staticClass:"hljs-params"},[t._v("v")]),t._v(") {\n      "),s("span",{staticClass:"hljs-variable language_"},[t._v("console")]),t._v("."),s("span",{staticClass:"hljs-title function_"},[t._v("log")]),t._v("(v);\n    },\n    "),s("span",{staticClass:"hljs-title function_"},[t._v("handleCancel")]),t._v("("),s("span",{staticClass:"hljs-params"},[t._v("event")]),t._v(") {\n      "),s("span",{staticClass:"hljs-variable language_"},[t._v("console")]),t._v("."),s("span",{staticClass:"hljs-title function_"},[t._v("log")]),t._v("("),s("span",{staticClass:"hljs-string"},[t._v("'cancelled'")]),t._v(");\n    },\n  },\n};\n<\/script>\n")])]),t._v(" "),s("h3",[t._v("API")]),t._v(" "),s("h4",[t._v("Attributes")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("属性")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("类型")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("默认值")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("可选值／参数")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("说明")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("data-source")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("array")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("[ ]")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}}),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("数据源")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("default-value")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("array, string")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}}),t._v(" "),s("td",{staticStyle:{"text-align":"left"}}),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("初始值")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("value-member")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("string")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("'value'")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}}),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("值字段对应的 key")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("disabled")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("boolean")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("false")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}}),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("是否禁用")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("item-render")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("function")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("noop")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}}),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("滚轮区域选项址值渲染")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("cols")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("number")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}}),t._v(" "),s("td",{staticStyle:{"text-align":"left"}}),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("级联选择器的级数")])])])]),t._v(" "),s("h4",[t._v("StackPicker & StackSelect Attributes")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("属性")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("类型")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("默认值")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("可选值／参数")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("说明")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("title")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("string")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("'请选择'")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}}),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("选择器标题")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("v-model")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("array, string")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}}),t._v(" "),s("td",{staticStyle:{"text-align":"left"}}),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("绑定值")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("placeholder")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("string")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("'请选择'")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}}),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("输入提示信息")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("okText")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("string")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("'确定'")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}}),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("输入提示信息")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("cancel-text")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("string")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("'取消'")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}}),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("输入提示信息")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("display-render")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("function")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}}),t._v(" "),s("td",{staticStyle:{"text-align":"left"}}),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("所选值的展示")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("visible")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("boolean")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("false")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}}),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("是否显示, 支持.sync 修饰符 (v2.3.0+)")])])])]),t._v(" "),s("h4",[t._v("StackPicker & StackSelect Events")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("事件名称")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("回调参数")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("ok")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("点击确定时触发的回调函数")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("选中值的对象列表")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("cancel")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("点击取消时触发的回调函数")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("event 对象")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("change")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("滚动时值变化时触发的回调函数")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("选中值的对象列表")])])])])])}],!1,null,null,null);s.default=e.exports}}]);