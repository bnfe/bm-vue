(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{559:function(s,t,a){"use strict";a.r(t);var l={data:()=>({files:[],fileList:[],visible:!1}),methods:{handleChange(s){console.log(s),this.files.push(s)},handleChangeMulti(s){s.length+this.fileList.length>5?(alert("超过5张"),this.fileList=this.fileList.concat(...s.slice(0,5-this.fileList.length))):this.fileList=this.fileList.concat(...s)},remove(s){this.files.splice(s,1),this.visible=!0},remove2(s){this.fileList.splice(s,1),this.visible=!0},beforeSelect(){if(this.fileList.length>5)return alert("超过5张"),!1;alert("before select")}}},i=a(6),n=Object(i.a)(l,(function(){var s=this,t=s._self._c;return t("div",[t("div",{staticClass:"bm-vue-demo"},[t("div",{staticClass:"bm-panel"},[s._m(0),s._v(" "),t("div",{staticClass:"bm-panel__body"},[t("div",{staticClass:"uploader-wrapper",staticStyle:{display:"flex",padding:"15px"}},[s._l(s.files,(function(a,l){return t("bm-badge",{key:l,staticClass:"uploader-item",staticStyle:{display:"inline-block","margin-right":"15px","align-items":"center","justify-content":"center",width:"74px",height:"74px",border:"2px solid #ddd"},attrs:{sup:"",shape:"circle"},on:{click:function(t){return s.remove(l)}}},[t("bm-icon",{staticStyle:{"font-size":"10px"},attrs:{slot:"text",type:"wrong"},slot:"text"}),s._v(" "),t("div",{staticClass:"uploader-item-img"},[t("a",{attrs:{href:a.thumbnail,target:"_blank"}},[t("img",{attrs:{src:a.thumbnail,alt:""}})])])],1)})),s._v(" "),t("div",{staticClass:"uploader-wrapper"},[t("bm-file-picker",{staticClass:"uploader-btn",staticStyle:{display:"flex","align-items":"center","justify-content":"center",width:"74px",height:"74px",border:"2px dashed #ddd"},attrs:{accept:"image/jpg, image/jpeg, image/gif, image/png"},on:{change:s.handleChange}},[t("bm-icon",{staticStyle:{fontSize:"30px"},attrs:{type:"add"}})],1)],1)],2)])]),s._v(" "),t("div",{staticClass:"bm-panel"},[s._m(1),s._v(" "),t("div",{staticClass:"bm-panel__body"},[t("div",{staticClass:"uploader-wrapper",staticStyle:{display:"flex",padding:"15px"}},[s._l(s.fileList,(function(a,l){return t("bm-badge",{key:l,staticClass:"uploader-item",staticStyle:{display:"inline-block","margin-right":"15px","align-items":"center","justify-content":"center",width:"74px",height:"74px",border:"2px solid #ddd"},attrs:{sup:"",shape:"circle"},on:{click:function(t){return s.remove2(l)}}},[t("bm-icon",{staticStyle:{"font-size":"10px"},attrs:{slot:"text",type:"wrong"},slot:"text"}),s._v(" "),t("div",{staticClass:"uploader-item-img"},[t("a",{attrs:{href:a.thumbnail,target:"_blank"}},[t("img",{attrs:{src:a.thumbnail,alt:""}})])])],1)})),s._v(" "),t("div",{staticClass:"uploader-wrapper"},[s.fileList.length<5?t("bm-file-picker",{staticClass:"uploader-btn",staticStyle:{display:"flex","align-items":"center","justify-content":"center",width:"74px",height:"74px",border:"2px dashed #ddd"},attrs:{multiple:"","before-select":s.beforeSelect,accept:"image/jpg, image/jpeg, image/gif, image/png"},on:{change:s.handleChangeMulti}},[t("bm-icon",{attrs:{type:"add"}})],1):s._e()],1)],2),s._v(" "),t("bm-toast",{attrs:{visible:s.visible,duration:1e3},on:{"update:visible":function(t){s.visible=t}}},[s._v("删除成功")])],1)]),s._v(" "),t("div",{staticClass:"bm-panel"},[s._m(2),s._v(" "),t("div",{staticClass:"bm-panel__body"},[t("div",{staticClass:"uploader-wrapper",staticStyle:{display:"flex",padding:"15px"}},[t("div",{staticClass:"uploader-wrapper"},[t("bm-file-picker",{staticClass:"uploader-btn",staticStyle:{display:"flex","align-items":"center","justify-content":"center",width:"74px",height:"74px",border:"2px dashed #ddd"},attrs:{disabled:""}},[t("bm-icon",{staticStyle:{fontSize:"30px"},attrs:{type:"add"}})],1)],1)])])])]),s._m(3)])}),[function(){var s=this._self._c;return s("div",{staticClass:"bm-panel__header"},[s("div",{staticClass:"bm-panel__title"},[this._v("基本用法\n\n")])])},function(){var s=this._self._c;return s("div",{staticClass:"bm-panel__header"},[s("div",{staticClass:"bm-panel__title"},[this._v("多选模式\n\n")])])},function(){var s=this._self._c;return s("div",{staticClass:"bm-panel__header"},[s("div",{staticClass:"bm-panel__title"},[this._v("禁用状态\n\n")])])},function(){var s=this,t=s._self._c;return t("div",{staticClass:"bm-markdown-doc"},[t("h2",[s._v("文件选择器 FilePicker")]),s._v(" "),t("div",{staticClass:"demo custom-block"},[t("p",{staticClass:"custom-block-title"},[s._v("基本用法")]),s._v(" "),t("pre",{staticClass:"hljs"},[t("code",[t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("class")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"uploader-wrapper"')]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("style")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"display:flex;padding:15px;"')]),s._v(">")]),s._v("\n  "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("bm-badge")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("sup")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("v-for")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"(i, index) in files"')]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("class")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"uploader-item"')]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("shape")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"circle"')]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v(":key")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"index"')]),s._v(" @"),t("span",{staticClass:"hljs-attr"},[s._v("click")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"remove(index)"')]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("style")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"display:inline-block;margin-right:15px;align-items: center;justify-content: center;width:74px;height:74px;border:2px solid #ddd;"')]),s._v(">")]),s._v("\n    "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("bm-icon")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("type")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"wrong"')]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("slot")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"text"')]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("style")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"font-size:10px;"')]),s._v(">")]),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("bm-icon")]),s._v(">")]),s._v("\n    "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("class")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"uploader-item-img"')]),s._v(">")]),s._v("\n      "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("a")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v(":href")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"i.thumbnail"')]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("target")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"_blank"')]),s._v(">")]),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("img")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v(":src")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"i.thumbnail"')]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("alt")]),s._v(">")]),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("a")]),s._v(">")]),s._v("\n    "),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(">")]),s._v("\n  "),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("bm-badge")]),s._v(">")]),s._v("\n  "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("class")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"uploader-wrapper"')]),s._v(">")]),s._v("\n    "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("bm-file-picker")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("class")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"uploader-btn"')]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("style")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"display:flex;align-items: center;justify-content: center;width:74px;height:74px;border:2px dashed #ddd;"')]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("accept")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"image/jpg, image/jpeg, image/gif, image/png"')]),s._v(" @"),t("span",{staticClass:"hljs-attr"},[s._v("change")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"handleChange"')]),s._v(">")]),s._v("\n      "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("bm-icon")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("type")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"add"')]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("style")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"fontSize:30px;"')]),s._v(">")]),s._v("\n    "),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("bm-icon")]),s._v(">")]),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("bm-file-picker")]),s._v(">")]),s._v("\n  "),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(">")]),s._v("\n"),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(">")]),s._v("\n")])])]),s._v(" "),t("div",{staticClass:"demo custom-block"},[t("p",{staticClass:"custom-block-title"},[s._v("多选模式")]),s._v(" "),t("pre",{staticClass:"hljs"},[t("code",[t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("class")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"uploader-wrapper"')]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("style")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"display:flex;padding:15px;"')]),s._v(">")]),s._v("\n  "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("bm-badge")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("sup")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("v-for")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"(i, index) in fileList"')]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("class")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"uploader-item"')]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("shape")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"circle"')]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v(":key")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"index"')]),s._v(" @"),t("span",{staticClass:"hljs-attr"},[s._v("click")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"remove2(index)"')]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("style")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"display:inline-block;margin-right:15px;align-items: center;justify-content: center;width:74px;height:74px;border:2px solid #ddd;"')]),s._v(">")]),s._v("\n    "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("bm-icon")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("type")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"wrong"')]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("slot")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"text"')]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("style")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"font-size:10px;"')]),s._v(">")]),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("bm-icon")]),s._v(">")]),s._v("\n    "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("class")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"uploader-item-img"')]),s._v(">")]),s._v("\n      "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("a")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v(":href")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"i.thumbnail"')]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("target")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"_blank"')]),s._v(">")]),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("img")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v(":src")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"i.thumbnail"')]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("alt")]),s._v(">")]),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("a")]),s._v(">")]),s._v("\n    "),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(">")]),s._v("\n  "),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("bm-badge")]),s._v(">")]),s._v("\n  "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("class")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"uploader-wrapper"')]),s._v(">")]),s._v("\n    "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("bm-file-picker")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("v-if")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"fileList.length < 5"')]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("multiple")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("class")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"uploader-btn"')]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("style")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"display:flex;align-items: center;justify-content: center;width:74px;height:74px;border:2px dashed #ddd;"')]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v(":before-select")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"beforeSelect"')]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("accept")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"image/jpg, image/jpeg, image/gif, image/png"')]),s._v(" @"),t("span",{staticClass:"hljs-attr"},[s._v("change")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"handleChangeMulti"')]),s._v(">")]),s._v("\n      "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("bm-icon")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("type")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"add"')]),s._v(">")]),s._v("\n    "),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("bm-icon")]),s._v(">")]),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("bm-file-picker")]),s._v(">")]),s._v("\n  "),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(">")]),s._v("\n"),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(">")]),s._v("\n"),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("bm-toast")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v(":visible.sync")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"visible"')]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v(":duration")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"1000"')]),s._v(">")]),s._v("删除成功"),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("bm-toast")]),s._v(">")]),s._v("\n")])])]),s._v(" "),t("div",{staticClass:"demo custom-block"},[t("p",{staticClass:"custom-block-title"},[s._v("禁用状态")]),s._v(" "),t("pre",{staticClass:"hljs"},[t("code",[t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("class")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"uploader-wrapper"')]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("style")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"display:flex;padding:15px;"')]),s._v(">")]),s._v("\n  "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("class")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"uploader-wrapper"')]),s._v(">")]),s._v("\n    "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("bm-file-picker")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("class")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"uploader-btn"')]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("style")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"display:flex;align-items: center;justify-content: center;width:74px;height:74px;border:2px dashed #ddd;"')]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("disabled")]),s._v(">")]),s._v("\n      "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("bm-icon")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("type")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"add"')]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("style")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"fontSize:30px;"')]),s._v(">")]),s._v("\n    "),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("bm-icon")]),s._v(">")]),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("bm-file-picker")]),s._v(">")]),s._v("\n  "),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(">")]),s._v("\n"),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(">")]),s._v("\n")])])]),s._v(" "),t("h3",[s._v("Vue Script")]),s._v(" "),t("pre",{staticClass:"hljs"},[t("code",[s._v("<script name="),t("span",{staticClass:"hljs-string"},[s._v('"vue"')]),s._v(">\n"),t("span",{staticClass:"hljs-keyword"},[s._v("export")]),s._v(" "),t("span",{staticClass:"hljs-keyword"},[s._v("default")]),s._v(" {\n  "),t("span",{staticClass:"hljs-title function_"},[s._v("data")]),s._v("("),t("span",{staticClass:"hljs-params"}),s._v(") {\n    "),t("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" {\n      "),t("span",{staticClass:"hljs-attr"},[s._v("files")]),s._v(": [],\n      "),t("span",{staticClass:"hljs-attr"},[s._v("fileList")]),s._v(": [],\n      "),t("span",{staticClass:"hljs-attr"},[s._v("visible")]),s._v(": "),t("span",{staticClass:"hljs-literal"},[s._v("false")]),s._v(",\n    }\n  },\n  "),t("span",{staticClass:"hljs-attr"},[s._v("methods")]),s._v(": {\n    "),t("span",{staticClass:"hljs-title function_"},[s._v("handleChange")]),s._v("("),t("span",{staticClass:"hljs-params"},[s._v("data")]),s._v("){\n      "),t("span",{staticClass:"hljs-variable language_"},[s._v("console")]),s._v("."),t("span",{staticClass:"hljs-title function_"},[s._v("log")]),s._v("(data);\n      "),t("span",{staticClass:"hljs-variable language_"},[s._v("this")]),s._v("."),t("span",{staticClass:"hljs-property"},[s._v("files")]),s._v("."),t("span",{staticClass:"hljs-title function_"},[s._v("push")]),s._v("(data)\n    },\n    "),t("span",{staticClass:"hljs-title function_"},[s._v("handleChangeMulti")]),s._v("("),t("span",{staticClass:"hljs-params"},[s._v("dataList")]),s._v("){\n      "),t("span",{staticClass:"hljs-keyword"},[s._v("if")]),s._v("(dataList."),t("span",{staticClass:"hljs-property"},[s._v("length")]),s._v(" + "),t("span",{staticClass:"hljs-variable language_"},[s._v("this")]),s._v("."),t("span",{staticClass:"hljs-property"},[s._v("fileList")]),s._v("."),t("span",{staticClass:"hljs-property"},[s._v("length")]),s._v(" > "),t("span",{staticClass:"hljs-number"},[s._v("5")]),s._v("){\n        "),t("span",{staticClass:"hljs-title function_"},[s._v("alert")]),s._v("("),t("span",{staticClass:"hljs-string"},[s._v("'超过5张'")]),s._v(")\n        "),t("span",{staticClass:"hljs-variable language_"},[s._v("this")]),s._v("."),t("span",{staticClass:"hljs-property"},[s._v("fileList")]),s._v(" = "),t("span",{staticClass:"hljs-variable language_"},[s._v("this")]),s._v("."),t("span",{staticClass:"hljs-property"},[s._v("fileList")]),s._v("."),t("span",{staticClass:"hljs-title function_"},[s._v("concat")]),s._v("(...(dataList."),t("span",{staticClass:"hljs-title function_"},[s._v("slice")]),s._v("("),t("span",{staticClass:"hljs-number"},[s._v("0")]),s._v(", "),t("span",{staticClass:"hljs-number"},[s._v("5")]),s._v(" - "),t("span",{staticClass:"hljs-variable language_"},[s._v("this")]),s._v("."),t("span",{staticClass:"hljs-property"},[s._v("fileList")]),s._v("."),t("span",{staticClass:"hljs-property"},[s._v("length")]),s._v(")));\n      }"),t("span",{staticClass:"hljs-keyword"},[s._v("else")]),s._v("{\n        "),t("span",{staticClass:"hljs-variable language_"},[s._v("this")]),s._v("."),t("span",{staticClass:"hljs-property"},[s._v("fileList")]),s._v(" = "),t("span",{staticClass:"hljs-variable language_"},[s._v("this")]),s._v("."),t("span",{staticClass:"hljs-property"},[s._v("fileList")]),s._v("."),t("span",{staticClass:"hljs-title function_"},[s._v("concat")]),s._v("(...dataList);\n      }\n    },\n    "),t("span",{staticClass:"hljs-title function_"},[s._v("remove")]),s._v("("),t("span",{staticClass:"hljs-params"},[s._v("index")]),s._v("){\n      "),t("span",{staticClass:"hljs-variable language_"},[s._v("this")]),s._v("."),t("span",{staticClass:"hljs-property"},[s._v("files")]),s._v("."),t("span",{staticClass:"hljs-title function_"},[s._v("splice")]),s._v("(index, "),t("span",{staticClass:"hljs-number"},[s._v("1")]),s._v(");\n      "),t("span",{staticClass:"hljs-variable language_"},[s._v("this")]),s._v("."),t("span",{staticClass:"hljs-property"},[s._v("visible")]),s._v(" = "),t("span",{staticClass:"hljs-literal"},[s._v("true")]),s._v("\n    },\n    "),t("span",{staticClass:"hljs-title function_"},[s._v("remove2")]),s._v("("),t("span",{staticClass:"hljs-params"},[s._v("index")]),s._v("){\n      "),t("span",{staticClass:"hljs-variable language_"},[s._v("this")]),s._v("."),t("span",{staticClass:"hljs-property"},[s._v("fileList")]),s._v("."),t("span",{staticClass:"hljs-title function_"},[s._v("splice")]),s._v("(index, "),t("span",{staticClass:"hljs-number"},[s._v("1")]),s._v(");\n      "),t("span",{staticClass:"hljs-variable language_"},[s._v("this")]),s._v("."),t("span",{staticClass:"hljs-property"},[s._v("visible")]),s._v(" = "),t("span",{staticClass:"hljs-literal"},[s._v("true")]),s._v("\n    },\n    "),t("span",{staticClass:"hljs-title function_"},[s._v("beforeSelect")]),s._v("("),t("span",{staticClass:"hljs-params"}),s._v("){\n      "),t("span",{staticClass:"hljs-keyword"},[s._v("if")]),s._v("("),t("span",{staticClass:"hljs-variable language_"},[s._v("this")]),s._v("."),t("span",{staticClass:"hljs-property"},[s._v("fileList")]),s._v("."),t("span",{staticClass:"hljs-property"},[s._v("length")]),s._v(" > "),t("span",{staticClass:"hljs-number"},[s._v("5")]),s._v("){\n        "),t("span",{staticClass:"hljs-title function_"},[s._v("alert")]),s._v("("),t("span",{staticClass:"hljs-string"},[s._v("'超过5张'")]),s._v(")\n        "),t("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" "),t("span",{staticClass:"hljs-literal"},[s._v("false")]),s._v("\n      }"),t("span",{staticClass:"hljs-keyword"},[s._v("else")]),s._v("{\n        "),t("span",{staticClass:"hljs-title function_"},[s._v("alert")]),s._v("("),t("span",{staticClass:"hljs-string"},[s._v("'before select'")]),s._v(")\n      }\n    }\n  },\n};\n<\/script>\n")])]),s._v(" "),t("h3",[s._v("API")]),s._v(" "),t("h4",[s._v("Uploader")]),s._v(" "),t("table",[t("thead",[t("tr",[t("th",{staticStyle:{"text-align":"left"}},[s._v("属性")]),s._v(" "),t("th",{staticStyle:{"text-align":"left"}},[s._v("类型")]),s._v(" "),t("th",{staticStyle:{"text-align":"left"}},[s._v("默认值")]),s._v(" "),t("th",{staticStyle:{"text-align":"left"}},[s._v("可选值／参数")]),s._v(" "),t("th",{staticStyle:{"text-align":"left"}},[s._v("说明")])])]),s._v(" "),t("tbody",[t("tr",[t("td",{staticStyle:{"text-align":"left"}},[s._v("accept")]),s._v(" "),t("td",{staticStyle:{"text-align":"left"}},[s._v("string")]),s._v(" "),t("td",{staticStyle:{"text-align":"left"}}),s._v(" "),t("td",{staticStyle:{"text-align":"left"}}),s._v(" "),t("td",{staticStyle:{"text-align":"left"}},[s._v("允许上传的附件格式,参考 File 文件类型")])]),s._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[s._v("multiple")]),s._v(" "),t("td",{staticStyle:{"text-align":"left"}},[s._v("boolean")]),s._v(" "),t("td",{staticStyle:{"text-align":"left"}},[s._v("false")]),s._v(" "),t("td",{staticStyle:{"text-align":"left"}}),s._v(" "),t("td",{staticStyle:{"text-align":"left"}},[s._v("是否支持多选")])]),s._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[s._v("disabled")]),s._v(" "),t("td",{staticStyle:{"text-align":"left"}},[s._v("boolean")]),s._v(" "),t("td",{staticStyle:{"text-align":"left"}},[s._v("false")]),s._v(" "),t("td",{staticStyle:{"text-align":"left"}}),s._v(" "),t("td",{staticStyle:{"text-align":"left"}},[s._v("是否禁用")])])])]),s._v(" "),t("h4",[s._v("Uploader Event")]),s._v(" "),t("table",[t("thead",[t("tr",[t("th",{staticStyle:{"text-align":"left"}},[s._v("事件名称")]),s._v(" "),t("th",{staticStyle:{"text-align":"left"}},[s._v("说明")]),s._v(" "),t("th",{staticStyle:{"text-align":"left"}},[s._v("回调参数")])])]),s._v(" "),t("tbody",[t("tr",[t("td",{staticStyle:{"text-align":"left"}},[s._v("before-select")]),s._v(" "),t("td",{staticStyle:{"text-align":"left"}},[s._v("选择前触发的事件")]),s._v(" "),t("td",{staticStyle:{"text-align":"left"}},[s._v("() => boolean")])]),s._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[s._v("change")]),s._v(" "),t("td",{staticStyle:{"text-align":"left"}},[s._v("值变化时触发的回调函数。multiple 为 true 时，返回文件数组格式，否则为文件对象")]),s._v(" "),t("td",{staticStyle:{"text-align":"left"}},[s._v("(file?: object | object[]) => void")])])])])])}],!1,null,null,null);t.default=n.exports}}]);