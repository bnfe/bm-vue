(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{503:function(t,n,e){},504:function(t,n,e){},505:function(t,n,e){"use strict";e(503)},506:function(t,n,e){"use strict";e(504)},507:function(t,n,e){"use strict";var a={data:()=>({}),components:{},created(){},mounted(){},methods:{}},i=(e(505),e(6)),s=Object(i.a)(a,(function(){var t=this._self._c;return t("main",[t("div",{staticClass:"main-container"},[this._t("default")],2)])}),[],!1,null,"58c11744",null);n.a=s.exports},508:function(t,n,e){"use strict";var a={props:{url:{type:String,default:""}},computed:{componentPath(){return"demo.html#/"+this.url}}},i=(e(506),e(6)),s=Object(i.a)(a,(function(){var t=this._self._c;return t("div",{staticClass:"simulator"},[t("iframe",{staticStyle:{width:"375px",height:"667px"},attrs:{src:this.componentPath,title:"simulator",frameBorder:"0"}})])}),[],!1,null,"5fdb7f0a",null);n.a=s.exports},607:function(t,n,e){"use strict";e.r(n);var a=e(4),i=e(508),s={components:{Container:e(507).a,Simulator:i.a},data:()=>({path:null}),created(){this.$store.state.version;this.path=this.$route.path.replace("/documents/",""),a.default.component("Demo",(function(t,n){e.e(87).then(function(){var n=[e(532)];t.apply(null,n)}.bind(this)).catch(e.oe)}))}},o=e(6),r=Object(o.a)(s,(function(){var t=this._self._c;return t("Container",[t("Demo"),this._v(" "),t("Simulator",{attrs:{url:this.path}})],1)}),[],!1,null,null,null);n.default=r.exports}}]);