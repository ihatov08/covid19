(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{332:function(t,e,n){"use strict";n.r(e);var r=n(36),o=n(1),l=n(344),c=o.a.extend({props:{expansionPanelText:{type:String,required:!0}},data:function(){return{showDetails:!1,mdiChevronRight:r.d}},mounted:function(){this.showDetails=!0},methods:{toggleDetails:function(){l.a.$emit(l.b,{dataView:this.$parent})}}}),d=(n(339),n(9)),h=n(32),f=n.n(h),v=n(593),m=n(594),x=n(595),y=n(596),C=n(322),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return this.$slots.notes?n("div",{staticClass:"NotesExpansionPanel"},[t.showDetails?n("v-expansion-panels",{attrs:{flat:""}},[n("v-expansion-panel",[n("v-expansion-panel-header",{style:{transition:"none"},attrs:{"hide-actions":!0},on:{click:t.toggleDetails}},[n("div",{staticClass:"v-expansion-panel-header__icon grey--text text--darken-2"},[n("v-icon",{attrs:{left:"",size:"24"}},[t._v(t._s(t.mdiChevronRight))])],1),t._v(" "),n("span",{staticClass:"expansion-panel-text grey--text text--darken-2"},[t._v("\n          "+t._s(t.expansionPanelText)+"\n        ")])]),t._v(" "),n("v-expansion-panel-content",{staticClass:"grey--text text--darken-2"},[t._t("notes")],2)],1)],1):[t._t("notes")]],2):t._e()}),[],!1,null,null,null);e.default=component.exports;f()(component,{VExpansionPanel:v.a,VExpansionPanelContent:m.a,VExpansionPanelHeader:x.a,VExpansionPanels:y.a,VIcon:C.a})},335:function(t,e,n){var content=n(340);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("56069591",content,!0,{sourceMap:!1})},336:function(t,e,n){"use strict";n.r(e);n(60),n(35);var r=n(1),o=n(124),l={props:{headers:{type:Array,default:function(){return[]}},items:{type:Array,default:function(){return[]}},headerKey:{type:String,default:"text"}},computed:{dataKeys:function(){var t=this;return this.headers.map((function(t){return t.value})).filter((function(e){return e!==t.headerKey}))}},methods:{formatDate:function(t){var e=Object(o.e)(t);return e.isValid()?this.$d(e.toDate(),"dateWithoutYear"):t}}},c=r.a.extend(l),d=(n(355),n(9)),h=n(32),f=n.n(h),v=n(601),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-data-table",{staticClass:"cardTable",attrs:{headers:t.headers,items:t.items,"items-per-page":-1,"hide-default-footer":!0,height:240,"fixed-header":!0,"disable-sort":!0,"mobile-breakpoint":0,"item-key":"name"},scopedSlots:t._u([{key:"body",fn:function(e){var r=e.items;return[n("tbody",t._l(r,(function(e,i){return n("tr",{key:i},[n("th",{staticClass:"cardTable-header",attrs:{scope:"row"}},[t._v("\n          "+t._s(t.formatDate(e[t.headerKey]))+"\n        ")]),t._v(" "),t._l(t.dataKeys,(function(r,o){return n("td",{key:o,staticClass:"text-end"},[t._v("\n          "+t._s(e[r])+"\n        ")])}))],2)})),0)]}}])})}),[],!1,null,null,null);e.default=component.exports;f()(component,{VDataTable:v.a})},337:function(t,e,n){"use strict";n.r(e);n(51);var r=n(374),o={props:{displayData:{type:Object,required:!0}},data:function(){return{chartWidth:300,timerId:0}},watch:{displayData:function(){this.scrollRightSide()}},computed:{labelCount:function(){var t;return(null===(t=this.displayData.labels)||void 0===t?void 0:t.length)||0}},methods:{adjustChartWidth:function(){var t=this.$refs.chartContainer;if(t&&0!==t.clientWidth){var e=t.clientWidth;this.chartWidth=this.calcChartWidth(e,this.labelCount)}},calcChartWidth:function(t,e){var n=(this.$nuxt.$vuetify.breakpoint.smAndDown?4:6)*e+38;return Math.max(n,t)},scrollRightSide:function(){var t=this.$refs.scrollable;t&&(t.scrollLeft=this.chartWidth)},handleResize:function(){clearTimeout(this.timerId),this.timerId=window.setTimeout(this.adjustChartWidth,500)}},mounted:function(){var t=this;this.adjustChartWidth(),this.$on("update-width",this.scrollRightSide),window.addEventListener("resize",this.handleResize),r.a.$on(r.b,(function(){return setTimeout((function(){return t.adjustChartWidth()}))})),window.matchMedia("print").addEventListener("change",(function(){t.scrollRightSide()}))},beforeDestroy:function(){var t=this;window.removeEventListener("resize",this.handleResize),r.a.$off(r.b),window.matchMedia("print").removeEventListener("change",(function(){t.scrollRightSide()}))}},l=(n(357),n(9)),component=Object(l.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{ref:"chartContainer",staticClass:"LegendStickyChart"},[e("div",{ref:"scrollable",staticClass:"scrollable"},[e("div",{style:{width:this.chartWidth+"px"}},[this._t("chart",null,{chartWidth:this.chartWidth})],2)]),this._v(" "),this._t("sticky-chart")],2)}),[],!1,null,"ae0db27c",null);e.default=component.exports},338:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return l}));n(83),n(233);function r(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return t<0?function(t){return null==t?void 0:t.toFixed(0)}:t>20?function(t){return null==t?void 0:t.toFixed(20)}:function(e){return null==e?void 0:e.toFixed(t)}}function o(){return function(t){return null==t?void 0:t.toLocaleString()}}function l(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return function(e){return Number(r(t)(e)).toLocaleString("en",{minimumFractionDigits:t})}}},339:function(t,e,n){"use strict";n(335)},340:function(t,e,n){(e=n(19)(!1)).push([t.i,".v-expansion-panels{color:#4d4d4d!important}.v-expansion-panel-header{padding:5px 0}.v-expansion-panel-header__icon{margin-left:-5px!important}.v-expansion-panel-header__icon .v-icon--left{margin-right:5px}.v-expansion-panel--active .v-expansion-panel-header__icon .v-icon{transform:rotate(90deg)!important}.expansion-panel-text{font-size:1.2rem}",""]),t.exports=e},341:function(t,e,n){var content=n(356);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("4f9a7631",content,!0,{sourceMap:!1})},342:function(t,e,n){var content=n(358);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("2c5f9516",content,!0,{sourceMap:!1})},343:function(t,e,n){"use strict";n.d(e,"b",(function(){return m})),n.d(e,"a",(function(){return x}));var r={strokeColor:"#5a8055",fillColor:"#1b4d30"},o={strokeColor:"#5a8055",fillColor:"#00a040"},l={strokeColor:"#5a8055",fillColor:"#c5e2c6"},c={strokeColor:"#1b4d30",fillColor:"#cbe1c8"},d={strokeColor:"#cc7004",fillColor:"#cc7004"},h={strokeColor:"#1b4d30",fillColor:"#1b4d30"},f={strokeColor:"#5a8055",fillColor:"#e2eee2"},v={strokeColor:"#aaaaaa",fillColor:"#aaaaaa"};function m(t){switch(t){case 1:return[o];case 2:return[r,l];case 4:return[r,o,l,f];default:return[r,o,l]}}function x(t){return{A:r,B:o,C:l,D:c,E:d,F:h,G:f,H:v}[t]}},345:function(t,e,n){"use strict";n.r(e);n(21),n(125),n(35),n(17),n(33);var r=n(102),o=n(12),l=n.n(o),c=n(1),d=n(347),h=n(333),f=n(334),v=n(336),m=n(332),x=n(337),y=n(127),C=n(343),k=n(124),D=n(350),_={created:function(){this.canvas=!0,this.dataKind=this.$route.query.embed&&"cumulative"===this.$route.query.dataKind?"cumulative":"transition"},components:{DataView:h.default,DataSelector:d.default,DataViewDataSetPanel:f.default,DataViewTable:v.default,NotesExpansionPanel:m.default,ScrollableChart:x.default},props:{title:{type:String,default:""},titleId:{type:String,default:""},chartId:{type:String,default:"time-bar-chart"},chartData:{type:Array,default:function(){return[]}},date:{type:String,required:!0},unit:{type:String,default:""},yAxesBgPlugin:{type:Array,default:function(){return y.b}},byDate:{type:Boolean,default:!1}},data:function(){return{dataKind:"transition",canvas:!0}},computed:{displayInfo:function(){var t=Object(D.a)({displayData:this.displayData,dataIndex:1}),e=t.lastDay,n=t.lastDayData,r=t.dayBeforeRatio,o=this.$d(e,"dateWithoutYear");return"transition"===this.dataKind&&this.byDate?{lText:n,sText:"".concat(o," ").concat(this.$t("日別値"),"（").concat(this.$t("前日比"),": ").concat(r," ").concat(this.unit,"）"),unit:this.unit}:"transition"===this.dataKind?{lText:n,sText:"".concat(o," ").concat(this.$t("実績値"),"（").concat(this.$t("前日比"),": ").concat(r," ").concat(this.unit,"）"),unit:this.unit}:{lText:n,sText:"".concat(o," ").concat(this.$t("累計値"),"（").concat(this.$t("前日比"),": ").concat(r," ").concat(this.unit,"）"),unit:this.unit}},displayData:function(){var style=Object(C.b)(1)[0];return"transition"===this.dataKind?{labels:this.chartData.map((function(t){return t.label})),datasets:[{label:this.dataKind,data:this.chartData.map((function(t){return 0})),backgroundColor:"rgba(255,255,255,0)",borderColor:"rgba(255,255,255,0)",borderWidth:0,minBarLength:this.chartData.map((function(t){return t.transition<=0?5:0}))},{label:this.dataKind,data:this.chartData.map((function(t){return t.transition})),backgroundColor:style.fillColor,borderColor:style.strokeColor,borderWidth:1}]}:{labels:this.chartData.map((function(t){return t.label})),datasets:[{label:this.dataKind,data:this.chartData.map((function(t){return 0})),backgroundColor:"rgba(255,255,255,0)",borderColor:"rgba(255,255,255,0)",borderWidth:0,minBarLength:this.chartData.map((function(t){return t.cumulative<=0?5:0}))},{label:this.dataKind,data:this.chartData.map((function(t){return t.cumulative})),backgroundColor:style.fillColor,borderColor:style.strokeColor,borderWidth:1}]}},displayOption:function(){var t=this,e=this.unit,n={tooltips:{displayColors:!1,callbacks:{label:function(t){return"".concat(parseInt(t.value).toLocaleString()," ").concat(e)},title:function(e,data){var label=data.labels[e[0].index];return t.$d(Object(k.d)(label),"dateWithoutYear")}}},maintainAspectRatio:!1,legend:{display:!1},scales:{xAxes:[{id:"day",stacked:!0,gridLines:{display:!1},ticks:{fontSize:9,maxTicksLimit:20,fontColor:"#808080",maxRotation:0,callback:function(label){return l()(label).format("D")}}},{id:"month",stacked:!0,gridLines:{drawOnChartArea:!1,drawTicks:!0,drawBorder:!1,tickMarkLength:10},ticks:{fontSize:11,fontColor:"#808080",padding:3,fontStyle:"bold"},type:"time",time:{unit:"month",displayFormats:{month:"MMM"}}}],yAxes:[{stacked:!0,gridLines:{display:!0,color:"#E5E5E5"},ticks:{suggestedMin:0,maxTicksLimit:8,fontColor:"#808080",suggestedMax:this.scaledTicksYAxisMax}}]}};return"true"===this.$route.query.ogp&&Object.assign(n,{animation:{duration:0}}),n},displayDataHeader:function(){return"transition"===this.dataKind?{labels:["2020-01-01"],datasets:[{data:[Math.max.apply(Math,Object(r.a)(this.chartData.map((function(t){return t.transition}))))],backgroundColor:"transparent",borderWidth:0}]}:{labels:["2020-01-01"],datasets:[{data:[Math.max.apply(Math,Object(r.a)(this.chartData.map((function(t){return t.cumulative}))))],backgroundColor:"transparent",borderWidth:0}]}},displayOptionHeader:function(){return{maintainAspectRatio:!1,legend:{display:!1},tooltips:{enabled:!1},scales:{xAxes:[{id:"day",stacked:!0,gridLines:{display:!1},ticks:{fontSize:9,maxTicksLimit:20,fontColor:"transparent",maxRotation:0,minRotation:0,callback:function(label){return l()(label).format("D")}}},{id:"month",stacked:!0,gridLines:{drawOnChartArea:!1,drawTicks:!1,drawBorder:!1,tickMarkLength:10},ticks:{fontSize:11,fontColor:"transparent",padding:13,fontStyle:"bold",callback:function(label){return["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"].indexOf(label.split(" ")[0])+1+"月"}},type:"time",time:{unit:"month"}}],yAxes:[{stacked:!0,gridLines:{display:!0,drawOnChartArea:!1,color:"#E5E5E5"},ticks:{suggestedMin:0,maxTicksLimit:8,fontColor:"#808080"}}]},animation:{duration:0}}},scaledTicksYAxisMax:function(){var t="transition"===this.dataKind?"transition":"cumulative",e=this.chartData.map((function(e){return e[t]}));return Math.max.apply(Math,Object(r.a)(e))},tableHeaders:function(){return[{text:this.$t("日付"),value:"text"},{text:"".concat(this.title," (").concat(this.$t("日別"),")"),value:"transition",align:"end"},{text:"".concat(this.title," (").concat(this.$t("Common.累計"),")"),value:"cumulative",align:"end"}]},tableData:function(){return this.chartData.map((function(t,e){return{text:t.label,transition:null===t.transition?void 0:t.transition.toLocaleString(),cumulative:t.cumulative.toLocaleString()}})).sort((function(a,b){return l()(a.text).unix()-l()(b.text).unix()})).reverse()}},mounted:function(){var canvas=this.$refs.barChart.$el.querySelector("canvas"),t="".concat(this.titleId,"-graph");canvas&&(canvas.setAttribute("role","img"),canvas.setAttribute("aria-labelledby",t))}},w=c.a.extend(_),S=n(9),component=Object(S.a)(w,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("data-view",{attrs:{title:t.title,"title-id":t.titleId,date:t.date},scopedSlots:t._u([{key:"attentionNote",fn:function(){return[t._t("attentionNote")]},proxy:!0},{key:"description",fn:function(){return[t._t("description")]},proxy:!0},{key:"button",fn:function(){return[n("data-selector",{style:{display:t.canvas?"inline-block":"none"},attrs:{"target-id":t.chartId},model:{value:t.dataKind,callback:function(e){t.dataKind=e},expression:"dataKind"}})]},proxy:!0},{key:"notes",fn:function(){return[n("notes-expansion-panel",{staticClass:"DataView-ExpansionPanel",attrs:{"expansion-panel-text":t.$t("Common.注")},scopedSlots:t._u([{key:"notes",fn:function(){return[t._t("notes")]},proxy:!0}],null,!0)})]},proxy:!0},{key:"additionalDescription",fn:function(){return[t._t("additionalDescription")]},proxy:!0},{key:"dataTable",fn:function(){return[n("client-only",[n("data-view-table",{attrs:{headers:t.tableHeaders,items:t.tableData}})],1)]},proxy:!0},{key:"dataSetPanel",fn:function(){return[n("data-view-data-set-panel",{attrs:{title:t.title,"l-text":t.displayInfo.lText,"s-text":t.displayInfo.sText,unit:t.displayInfo.unit}}),t._v(" "),"cumulative"===t.dataKind?t._t("additionalInfoPanel"):t._e()]},proxy:!0}],null,!0)},[t._v(" "),t._v(" "),t._v(" "),n("h4",{staticClass:"visually-hidden",attrs:{id:t.titleId+"-graph"}},[t._v("\n    "+t._s(t.$t("{title}のグラフ",{title:t.title}))+"\n  ")]),t._v(" "),n("scrollable-chart",{directives:[{name:"show",rawName:"v-show",value:t.canvas,expression:"canvas"}],attrs:{"display-data":t.displayData},scopedSlots:t._u([{key:"chart",fn:function(e){var r=e.chartWidth;return[n("bar",{ref:"barChart",attrs:{"chart-id":t.chartId,"chart-data":t.displayData,options:t.displayOption,height:240,width:r}})]}},{key:"sticky-chart",fn:function(){return[n("bar",{staticClass:"sticky-legend",attrs:{"chart-id":t.chartId+"-header","chart-data":t.displayDataHeader,options:t.displayOptionHeader,plugins:t.yAxesBgPlugin,height:240}})]},proxy:!0}])})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{DataSelector:n(347).default,ScrollableChart:n(337).default,NotesExpansionPanel:n(332).default,DataViewTable:n(336).default,DataViewDataSetPanel:n(334).default,DataView:n(333).default})},347:function(t,e,n){"use strict";n.r(e);var r=n(1).a.extend({name:"DataSelector",props:{value:{type:String,default:"transition"},targetId:{type:String,default:function(t){return t&&""!==t?t:null}}}}),o=(n(381),n(9)),l=n(32),c=n.n(l),d=n(417),h=n(411),f=n(373),v=n.n(f),m=n(346),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-btn-toggle",{staticClass:"DataSelector",attrs:{"aria-controls":t.targetId,value:t.value,mandatory:""},on:{change:function(e){return t.$emit("input",e)}}},[n("v-btn",{directives:[{name:"ripple",rawName:"v-ripple",value:!1,expression:"false"}],staticClass:"DataSelector-Button",attrs:{"aria-pressed":"transition"===t.value?"true":"false",value:"transition"}},[t._v("\n    "+t._s(t.$t("日別"))+"\n  ")]),t._v(" "),n("v-btn",{directives:[{name:"ripple",rawName:"v-ripple",value:!1,expression:"false"}],staticClass:"DataSelector-Button",attrs:{"aria-pressed":"cumulative"===t.value?"true":"false",value:"cumulative"}},[t._v("\n    "+t._s(t.$t("Common.累計"))+"\n  ")])],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VBtn:d.a,VBtnToggle:h.a}),v()(component,{Ripple:m.a})},350:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));n(71),n(361);var r=n(124),o=n(338),l=function(t){var e=t.displayData,n=t.dataIndex,l=void 0===n?0:n,d=t.digit,h=void 0===d?0:d,f=e.labels.slice(-1)[0],data=e.datasets[l].data,v=data.slice(-1)[0],m=v-data.slice(-2)[0],x=Object(o.a)(h);return{lastDay:Object(r.e)(f).toDate(),lastDayData:x(v),dayBeforeRatio:c(m,x)}};function c(t,e){var n=e(t);switch(Math.sign(t)){case 1:return"+".concat(n);case-1:default:return"".concat(n)}}},352:function(t,e,n){var content=n(382);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("59896903",content,!0,{sourceMap:!1})},355:function(t,e,n){"use strict";n(341)},356:function(t,e,n){(e=n(19)(!1)).push([t.i,".v-data-table-header .text-end{text-align:right!important}.cardTable-header{white-space:nowrap!important}.v-data-table .text-end{text-align:right}",""]),t.exports=e},357:function(t,e,n){"use strict";n(342)},358:function(t,e,n){(e=n(19)(!1)).push([t.i,".LegendStickyChart[data-v-ae0db27c]{margin:16px 0;position:relative;overflow:hidden}.LegendStickyChart .scrollable[data-v-ae0db27c]{overflow-x:scroll}.LegendStickyChart .sticky-legend[data-v-ae0db27c]{position:absolute;top:0;pointer-events:none;width:100%}",""]),t.exports=e},375:function(t,e,n){"use strict";n(60),n(59),n(61);var r=n(124);e.a=function(data){var t=[],e=new Date,n=0;return data.filter((function(t){return new Date(t["日付"])<e})).forEach((function(e){var o=e["小計"];isNaN(o)||(n+=o,t.push({label:Object(r.a)(e["日付"]),transition:o,cumulative:n}))})),t}},381:function(t,e,n){"use strict";n(352)},382:function(t,e,n){(e=n(19)(!1)).push([t.i,".DataSelector{margin-top:20px;border:1px solid #d9d9d9;background-color:#fff}.DataSelector-Button{border:none!important;margin:2px;border-radius:4px!important;height:24px!important;color:#333!important;background-color:#fff!important;font-size:1.2rem!important}.DataSelector-Button:before{background-color:inherit}.DataSelector-Button:focus{outline:1px dotted #707070}.DataSelector .v-btn--active{background-color:#4d4d4d!important;color:#fff!important}",""]),t.exports=e}}]);