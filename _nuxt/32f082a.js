(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{361:function(e,t,r){"use strict";r.r(t);r(19),r(45);var n=r(0),o=r(127),d={props:{headers:{type:Array,default:function(){return[]}},items:{type:Array,default:function(){return[]}},headerKey:{type:String,default:"text"}},computed:{dataKeys:function(){var e=this;return this.headers.map((function(e){return e.value})).filter((function(t){return t!==e.headerKey}))}},methods:{formatDate:function(e){var t=Object(o.e)(e);return t.isValid()?this.$d(t.toDate(),"dateWithoutYear"):e}}},h=n.a.extend(d),c=(r(368),r(10)),l=r(44),f=r.n(l),m=r(694),component=Object(c.a)(h,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-data-table",{staticClass:"cardTable",attrs:{headers:e.headers,items:e.items,"items-per-page":-1,"hide-default-footer":!0,height:240,"fixed-header":!0,"disable-sort":!0,"mobile-breakpoint":0,"item-key":"name"},scopedSlots:e._u([{key:"body",fn:function(t){var n=t.items;return[r("tbody",e._l(n,(function(t,i){return r("tr",{key:i},[r("th",{staticClass:"cardTable-header",attrs:{scope:"row"}},[e._v("\n          "+e._s(e.formatDate(t[e.headerKey]))+"\n        ")]),e._v(" "),e._l(e.dataKeys,(function(n,o){return r("td",{key:o,staticClass:"text-end"},[e._v("\n          "+e._s(t[n])+"\n        ")])}))],2)})),0)]}}])})}),[],!1,null,null,null);t.default=component.exports;f()(component,{VDataTable:m.a})},363:function(e,t,r){var content=r(369);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(24).default)("4f9a7631",content,!0,{sourceMap:!1})},368:function(e,t,r){"use strict";r(363)},369:function(e,t,r){var n=r(23)(!1);n.push([e.i,".v-data-table-header .text-end{text-align:right!important}.cardTable-header{white-space:nowrap!important}.v-data-table .text-end{text-align:right}",""]),e.exports=n},372:function(e,t,r){"use strict";r(90);var n=r(8),o=r(0);t.a=o.a.extend({name:"measurable",props:{height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},computed:{measurableStyles:function(){var e={},t=Object(n.e)(this.height),r=Object(n.e)(this.minHeight),o=Object(n.e)(this.minWidth),d=Object(n.e)(this.maxHeight),h=Object(n.e)(this.maxWidth),c=Object(n.e)(this.width);return t&&(e.height=t),r&&(e.minHeight=r),o&&(e.minWidth=o),d&&(e.maxHeight=d),h&&(e.maxWidth=h),c&&(e.width=c),e}}})},373:function(e,t,r){"use strict";var n=r(27);r(72);function o(e){e._observe&&(e._observe.observer.unobserve(e),delete e._observe)}var d={inserted:function(e,t){var r=t.modifiers||{},d=t.value,h="object"===Object(n.a)(d)?d:{handler:d,options:{}},c=h.handler,l=h.options,f=new IntersectionObserver((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1?arguments[1]:void 0;if(e._observe){if(c&&(!r.quiet||e._observe.init)){var d=Boolean(t.find((function(e){return e.isIntersecting})));c(t,n,d)}e._observe.init&&r.once?o(e):e._observe.init=!0}}),l);e._observe={init:!1,observer:f},f.observe(e)},unbind:o};t.a=d}}]);