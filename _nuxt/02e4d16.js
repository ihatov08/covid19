(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{322:function(t,e,n){"use strict";n.r(e);var r=n(45),o=n(0),l=n(334),d=o.a.extend({props:{expansionPanelText:{type:String,required:!0}},data:function(){return{showDetails:!1,mdiChevronRight:r.d}},mounted:function(){this.showDetails=!0},methods:{toggleDetails:function(){l.a.$emit(l.b,{dataView:this.$parent})}}}),c=(n(329),n(8)),h=n(40),f=n.n(h),y=n(580),v=n(581),m=n(582),x=n(583),C=n(314),component=Object(c.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.$slots.notes?n("div",{staticClass:"NotesExpansionPanel"},[t.showDetails?n("v-expansion-panels",{attrs:{flat:""}},[n("v-expansion-panel",[n("v-expansion-panel-header",{style:{transition:"none"},attrs:{"hide-actions":!0},on:{click:t.toggleDetails}},[n("div",{staticClass:"v-expansion-panel-header__icon grey--text text--darken-2"},[n("v-icon",{attrs:{left:"",size:"24"}},[t._v(t._s(t.mdiChevronRight))])],1),t._v(" "),n("span",{staticClass:"expansion-panel-text grey--text text--darken-2"},[t._v("\n          "+t._s(t.expansionPanelText)+"\n        ")])]),t._v(" "),n("v-expansion-panel-content",{staticClass:"grey--text text--darken-2"},[t._t("notes")],2)],1)],1):[t._t("notes")]],2):t._e()}),[],!1,null,null,null);e.default=component.exports;f()(component,{VExpansionPanel:y.a,VExpansionPanelContent:v.a,VExpansionPanelHeader:m.a,VExpansionPanels:x.a,VIcon:C.a})},325:function(t,e,n){var content=n(330);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(23).default)("56069591",content,!0,{sourceMap:!1})},326:function(t,e,n){"use strict";n.r(e);n(16),n(44);var r=n(0),o=n(125),l={props:{headers:{type:Array,default:function(){return[]}},items:{type:Array,default:function(){return[]}},headerKey:{type:String,default:"text"}},computed:{dataKeys:function(){var t=this;return this.headers.map((function(t){return t.value})).filter((function(e){return e!==t.headerKey}))}},methods:{formatDate:function(t){var e=Object(o.e)(t);return e.isValid()?this.$d(e.toDate(),"dateWithoutYear"):t}}},d=r.a.extend(l),c=(n(345),n(8)),h=n(40),f=n.n(h),y=n(590),component=Object(c.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-data-table",{staticClass:"cardTable",attrs:{headers:t.headers,items:t.items,"items-per-page":-1,"hide-default-footer":!0,height:240,"fixed-header":!0,"disable-sort":!0,"mobile-breakpoint":0,"item-key":"name"},scopedSlots:t._u([{key:"body",fn:function(e){var r=e.items;return[n("tbody",t._l(r,(function(e,i){return n("tr",{key:i},[n("th",{staticClass:"cardTable-header",attrs:{scope:"row"}},[t._v("\n          "+t._s(t.formatDate(e[t.headerKey]))+"\n        ")]),t._v(" "),t._l(t.dataKeys,(function(r,o){return n("td",{key:o,staticClass:"text-end"},[t._v("\n          "+t._s(e[r])+"\n        ")])}))],2)})),0)]}}])})}),[],!1,null,null,null);e.default=component.exports;f()(component,{VDataTable:y.a})},327:function(t,e,n){"use strict";n.r(e);n(63);var r=n(364),o={props:{displayData:{type:Object,required:!0}},data:function(){return{chartWidth:300,timerId:0}},watch:{displayData:function(){this.scrollRightSide()}},computed:{labelCount:function(){var t;return(null===(t=this.displayData.labels)||void 0===t?void 0:t.length)||0}},methods:{adjustChartWidth:function(){var t=this.$refs.chartContainer;if(t&&0!==t.clientWidth){var e=t.clientWidth;this.chartWidth=this.calcChartWidth(e,this.labelCount)}},calcChartWidth:function(t,e){var n=(this.$nuxt.$vuetify.breakpoint.smAndDown?4:6)*e+38;return Math.max(n,t)},scrollRightSide:function(){var t=this.$refs.scrollable;t&&(t.scrollLeft=this.chartWidth)},handleResize:function(){clearTimeout(this.timerId),this.timerId=window.setTimeout(this.adjustChartWidth,500)}},mounted:function(){var t=this;this.adjustChartWidth(),this.$on("update-width",this.scrollRightSide),window.addEventListener("resize",this.handleResize),r.a.$on(r.b,(function(){return setTimeout((function(){return t.adjustChartWidth()}))})),window.matchMedia("print").addEventListener("change",(function(){t.scrollRightSide()}))},beforeDestroy:function(){var t=this;window.removeEventListener("resize",this.handleResize),r.a.$off(r.b),window.matchMedia("print").removeEventListener("change",(function(){t.scrollRightSide()}))}},l=(n(347),n(8)),component=Object(l.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{ref:"chartContainer",staticClass:"LegendStickyChart"},[e("div",{ref:"scrollable",staticClass:"scrollable"},[e("div",{style:{width:this.chartWidth+"px"}},[this._t("chart",null,{chartWidth:this.chartWidth})],2)]),this._v(" "),this._t("sticky-chart")],2)}),[],!1,null,"46e997fb",null);e.default=component.exports},328:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return l}));n(230),n(86);function r(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return t<0?function(t){return null==t?void 0:t.toFixed(0)}:t>20?function(t){return null==t?void 0:t.toFixed(20)}:function(e){return null==e?void 0:e.toFixed(t)}}function o(){return function(t){return null==t?void 0:t.toLocaleString()}}function l(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return function(e){return Number(r(t)(e)).toLocaleString("en",{minimumFractionDigits:t})}}},329:function(t,e,n){"use strict";n(325)},330:function(t,e,n){(e=n(22)(!1)).push([t.i,".v-expansion-panels{color:#4d4d4d!important}.v-expansion-panel-header{padding:5px 0}.v-expansion-panel-header__icon{margin-left:-5px!important}.v-expansion-panel-header__icon .v-icon--left{margin-right:5px}.v-expansion-panel--active .v-expansion-panel-header__icon .v-icon{transform:rotate(90deg)!important}.expansion-panel-text{font-size:1.2rem}",""]),t.exports=e},331:function(t,e,n){var content=n(346);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(23).default)("4f9a7631",content,!0,{sourceMap:!1})},332:function(t,e,n){var content=n(348);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(23).default)("42775a72",content,!0,{sourceMap:!1})},333:function(t,e,n){"use strict";n.d(e,"b",(function(){return v})),n.d(e,"a",(function(){return m}));var r={strokeColor:"#5a8055",fillColor:"#1b4d30"},o={strokeColor:"#5a8055",fillColor:"#00a040"},l={strokeColor:"#5a8055",fillColor:"#c5e2c6"},d={strokeColor:"#1b4d30",fillColor:"#cbe1c8"},c={strokeColor:"#cc7004",fillColor:"#cc7004"},h={strokeColor:"#1b4d30",fillColor:"#1b4d30"},f={strokeColor:"#5a8055",fillColor:"#e2eee2"},y={strokeColor:"#aaaaaa",fillColor:"#aaaaaa"};function v(t){switch(t){case 1:return[o];case 2:return[r,l];case 4:return[r,o,l,f];default:return[r,o,l]}}function m(t){return{A:r,B:o,C:l,D:d,E:c,F:h,G:f,H:y}[t]}},340:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));n(35),n(351);var r=n(125),o=n(328),l=function(t){var e=t.displayData,n=t.dataIndex,l=void 0===n?0:n,c=t.digit,h=void 0===c?0:c,f=e.labels.slice(-1)[0],data=e.datasets[l].data,y=data.slice(-1)[0],v=y-data.slice(-2)[0],m=Object(o.a)(h);return{lastDay:Object(r.e)(f).toDate(),lastDayData:m(y),dayBeforeRatio:d(v,m)}};function d(t,e){var n=e(t);switch(Math.sign(t)){case 1:return"+".concat(n);case-1:default:return"".concat(n)}}},345:function(t,e,n){"use strict";n(331)},346:function(t,e,n){(e=n(22)(!1)).push([t.i,".v-data-table-header .text-end{text-align:right!important}.cardTable-header{white-space:nowrap!important}.v-data-table .text-end{text-align:right}",""]),t.exports=e},347:function(t,e,n){"use strict";n(332)},348:function(t,e,n){(e=n(22)(!1)).push([t.i,".LegendStickyChart[data-v-46e997fb]{margin:16px 0;position:relative;overflow:hidden}.LegendStickyChart .scrollable[data-v-46e997fb]{overflow-x:scroll}.LegendStickyChart .sticky-legend[data-v-46e997fb]{position:absolute;top:0;pointer-events:none;width:100%}",""]),t.exports=e},351:function(t,e,n){n(3)({target:"Math",stat:!0},{sign:n(232)})},359:function(t,e,n){var content=n(445);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(23).default)("284e8273",content,!0,{sourceMap:!1})},360:function(t,e,n){var content=n(447);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(23).default)("3509a56b",content,!0,{sourceMap:!1})},377:function(t,e,n){t.exports=function(){"use strict";var t,s,e=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,i=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,n={years:31536e6,months:2592e6,days:864e5,hours:36e5,minutes:6e4,seconds:1e3,milliseconds:1,weeks:6048e5},r=function(t){return t instanceof c},o=function(t,s,e){return new c(t,e,s.$l)},u=function(t){return s.p(t)+"s"},l=function(t){return t<0},a=function(t){return l(t)?Math.ceil(t):Math.floor(t)},d=function(t,s){return t?l(t)?{negative:!0,format:""+function(t){return Math.abs(t)}(t)+s}:{negative:!1,format:""+t+s}:{negative:!1,format:""}},c=function(){function l(t,s,e){var r=this;if(this.$d={},this.$l=e,s)return o(t*n[u(s)],this);if("number"==typeof t)return this.$ms=t,this.parseFromMilliseconds(),this;if("object"==typeof t)return Object.keys(t).forEach((function(s){r.$d[u(s)]=t[s]})),this.calMilliseconds(),this;if("string"==typeof t){var l=t.match(i);if(l)return this.$d.years=l[2],this.$d.months=l[3],this.$d.weeks=l[4],this.$d.days=l[5],this.$d.hours=l[6],this.$d.minutes=l[7],this.$d.seconds=l[8],this.calMilliseconds(),this}return this}var c=l.prototype;return c.calMilliseconds=function(){var t=this;this.$ms=Object.keys(this.$d).reduce((function(s,e){return s+(t.$d[e]||0)*n[e]}),0)},c.parseFromMilliseconds=function(){var t=this.$ms;this.$d.years=a(t/31536e6),t%=31536e6,this.$d.months=a(t/2592e6),t%=2592e6,this.$d.days=a(t/864e5),t%=864e5,this.$d.hours=a(t/36e5),t%=36e5,this.$d.minutes=a(t/6e4),t%=6e4,this.$d.seconds=a(t/1e3),t%=1e3,this.$d.milliseconds=t},c.toISOString=function(){var t=d(this.$d.years,"Y"),s=d(this.$d.months,"M"),e=+this.$d.days||0;this.$d.weeks&&(e+=7*this.$d.weeks);var i=d(e,"D"),n=d(this.$d.hours,"H"),r=d(this.$d.minutes,"M"),o=this.$d.seconds||0;this.$d.milliseconds&&(o+=this.$d.milliseconds/1e3);var u=d(o,"S"),l=t.negative||s.negative||i.negative||n.negative||r.negative||u.negative,a=n.format||r.format||u.format?"T":"",c=(l?"-":"")+"P"+t.format+s.format+i.format+a+n.format+r.format+u.format;return"P"===c||"-P"===c?"P0D":c},c.toJSON=function(){return this.toISOString()},c.format=function(t){var i=t||"YYYY-MM-DDTHH:mm:ss",n={Y:this.$d.years,YY:s.s(this.$d.years,2,"0"),YYYY:s.s(this.$d.years,4,"0"),M:this.$d.months,MM:s.s(this.$d.months,2,"0"),D:this.$d.days,DD:s.s(this.$d.days,2,"0"),H:this.$d.hours,HH:s.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:s.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:s.s(this.$d.seconds,2,"0"),SSS:s.s(this.$d.milliseconds,3,"0")};return i.replace(e,(function(t,s){return s||String(n[t])}))},c.as=function(t){return this.$ms/n[u(t)]},c.get=function(t){var s=this.$ms,e=u(t);return"milliseconds"===e?s%=1e3:s="weeks"===e?a(s/n[e]):this.$d[e],0===s?0:s},c.add=function(t,s,e){var i;return i=s?t*n[u(s)]:r(t)?t.$ms:o(t,this).$ms,o(this.$ms+i*(e?-1:1),this)},c.subtract=function(t,s){return this.add(t,s,!0)},c.locale=function(t){var s=this.clone();return s.$l=t,s},c.clone=function(){return o(this.$ms,this)},c.humanize=function(s){return t().add(this.$ms,"ms").locale(this.$l).fromNow(!s)},c.milliseconds=function(){return this.get("milliseconds")},c.asMilliseconds=function(){return this.as("milliseconds")},c.seconds=function(){return this.get("seconds")},c.asSeconds=function(){return this.as("seconds")},c.minutes=function(){return this.get("minutes")},c.asMinutes=function(){return this.as("minutes")},c.hours=function(){return this.get("hours")},c.asHours=function(){return this.as("hours")},c.days=function(){return this.get("days")},c.asDays=function(){return this.as("days")},c.weeks=function(){return this.get("weeks")},c.asWeeks=function(){return this.as("weeks")},c.months=function(){return this.get("months")},c.asMonths=function(){return this.as("months")},c.years=function(){return this.get("years")},c.asYears=function(){return this.as("years")},l}();return function(e,i,n){t=n,s=n().$utils(),n.duration=function(t,s){var e=n.locale();return o(t,{$l:e},s)},n.isDuration=r;var u=i.prototype.add,l=i.prototype.subtract;i.prototype.add=function(t,s){return r(t)&&(t=t.asMilliseconds()),u.bind(this)(t,s)},i.prototype.subtract=function(t,s){return r(t)&&(t=t.asMilliseconds()),l.bind(this)(t,s)}}}()},397:function(t,e,n){"use strict";n.r(e);var r=n(2),o=n(105),l=(n(24),n(44),n(10),n(67),n(46),n(33),n(36),n(35),n(12)),d=n.n(l),c=n(0),h=n(323),f=n(324),y=n(326),v=n(322),m=n(327),x=n(126),C=n(333),k=n(340),_=n(328),$={created:function(){this.canvas=!0},components:{DataView:h.default,DataViewTable:y.default,DataViewDataSetPanel:f.default,NotesExpansionPanel:v.default,ScrollableChart:m.default},props:{title:{type:String,default:""},titleId:{type:String,required:!1,default:""},infoTitles:{type:Array,required:!1,default:function(){return[]}},chartId:{type:String,default:"PositiveRateMixedChart"},chartData:{type:Array,required:!1,default:function(){return[]}},getFormatter:{type:Function,required:!1,default:function(t){return Object(_.b)()}},date:{type:String,required:!0,default:""},labels:{type:Array,default:function(){return[]}},dataLabels:{type:Array,default:function(){return[]}},tableLabels:{type:Array,default:function(){return[]}},unit:{type:String,default:""},optionUnit:{type:String,required:!1,default:""},yAxesBgPlugin:{type:Array,default:function(){return x.b}},yAxesBgRightPlugin:{type:Array,default:function(){return x.c}}},data:function(){return{displayLegends:[!0,!0,!0,!0,!0,!0],colors:[].concat(Object(o.a)(Object(C.b)(4)),[Object(C.a)("E")]),canvas:!0}},computed:{displayInfo:function(){var t=Object(k.a)({displayData:this.displayData,dataIndex:5,digit:1}),e=t.lastDay,n=t.lastDayData,r=t.dayBeforeRatio,o=Object(k.a)({displayData:this.displayData,dataIndex:4,digit:1}),l=o.lastDay,d=o.lastDayData,c=o.dayBeforeRatio;return[{lText:n,sText:"".concat(this.$t("{date} の数値",{date:this.$d(e,"dateWithoutYear")}),"（").concat(this.$t("前日比"),": ").concat(r," ").concat(this.unit,"）"),unit:this.unit},{lText:d,sText:"".concat(this.$t("{date} の数値",{date:this.$d(l,"dateWithoutYear")}),"（").concat(this.$t("前日比"),": ").concat(c," ").concat(this.optionUnit,"）"),unit:this.optionUnit}]},displayData:function(){var t=[].concat(Object(o.a)(Object(C.b)(4)),[Object(C.a)("E")]);return{labels:this.labels,datasets:[{type:"bar",yAxisID:"y-axis-1",label:this.dataLabels[0],data:this.chartData[0],backgroundColor:t[0].fillColor,borderColor:t[0].strokeColor,borderWidth:1,order:1},{type:"bar",yAxisID:"y-axis-1",label:this.dataLabels[1],data:this.chartData[1],backgroundColor:t[1].fillColor,borderColor:t[1].strokeColor,borderWidth:1,order:2},{type:"bar",yAxisID:"y-axis-1",label:this.dataLabels[2],data:this.chartData[2],backgroundColor:t[2].fillColor,borderColor:t[2].strokeColor,borderWidth:1,order:3},{type:"bar",yAxisID:"y-axis-1",label:this.dataLabels[3],data:this.chartData[3],backgroundColor:t[3].fillColor,borderColor:t[3].strokeColor,borderWidth:1,order:4},{type:"line",yAxisID:"y-axis-1",label:this.dataLabels[4],data:this.chartData[4],pointBackgroundColor:"rgba(0,0,0,0)",pointBorderColor:"rgba(0,0,0,0)",borderColor:t[4].strokeColor,borderWidth:3,fill:!1,order:0,borderDash:[4,4]},{type:"line",yAxisID:"y-axis-2",label:this.dataLabels[5],data:this.chartData[5],pointBackgroundColor:"rgba(0,0,0,0)",pointBorderColor:"rgba(0,0,0,0)",borderColor:t[4].strokeColor,borderWidth:3,fill:!1,order:0,lineTension:0}]}},tableHeaders:function(){return[{text:this.$t("日付"),value:"text"}].concat(Object(o.a)(this.tableLabels.map((function(text,i){return{text:text,value:String(i),align:"end"}}))))},tableData:function(){var t=this;return this.labels.map((function(label,i){return Object.assign.apply(Object,[{text:label}].concat(Object(o.a)(t.dataLabels.map((function(e,n){return null===t.chartData[n][i]?Object(r.a)({},n,""):Object(r.a)({},n,t.getFormatter(n)(t.chartData[n][i]))})))))})).sort((function(a,b){return d()(a.text).unix()-d()(b.text).unix()})).reverse()},displayOption:function(){var t=this,e=this,n=this.unit,r={tooltips:{displayColors:!1,callbacks:{label:function(e){var r=t.getFormatter(e.datasetIndex)(parseFloat(e.value)),label="".concat(t.dataLabels[e.datasetIndex]," : ").concat(r," ").concat(t.$t("Common.人"));return e.datasetIndex>=5&&(label="".concat(t.dataLabels[e.datasetIndex]," : ").concat(r," ").concat(n)),label},title:function(t,data){var label=data.labels[t[0].index].toString();return e.$d(new Date(label),"dateWithoutYear")}}},maintainAspectRatio:!1,legend:{display:!1},scales:{xAxes:[{id:"day",stacked:!0,gridLines:{display:!1},ticks:{fontSize:9,maxTicksLimit:20,fontColor:"#808080",maxRotation:0,callback:function(label){return d()(label).format("D")}}},{id:"month",stacked:!0,gridLines:{drawOnChartArea:!1,drawTicks:!0,drawBorder:!1,tickMarkLength:10},ticks:{fontSize:11,fontColor:"#808080",padding:3,fontStyle:"bold"},type:"time",time:{unit:"month",displayFormats:{month:"MMM"}}}],yAxes:[{id:"y-axis-1",position:"left",stacked:!0,gridLines:{display:!0,drawOnChartArea:!0,color:"#E5E5E5"},ticks:{suggestedMin:0,maxTicksLimit:8,fontColor:"#808080",suggestedMax:this.scaledTicksYAxisMax}},{id:"y-axis-2",position:"right",gridLines:{display:!0,drawOnChartArea:!1,color:"#E5E5E5"},ticks:{suggestedMin:0,maxTicksLimit:8,fontColor:"#808080",suggestedMax:this.scaledTicksYAxisMaxRight,callback:function(t){return"".concat(t,"%")}}}]}};return"true"===this.$route.query.ogp&&Object.assign(r,{animation:{duration:0}}),r},displayDataHeader:function(){var t=this,e=Array.from(this.displayData.datasets[0].data.keys()).map((function(i){return t.displayData.datasets[0].data[i]+t.displayData.datasets[1].data[i]+t.displayData.datasets[2].data[i]+t.displayData.datasets[3].data[i]})),n=e.reduce((function(a,b){return Math.max(a,b)}),0),r=e.indexOf(n);return{labels:["2020-01-01"],datasets:[{data:[this.displayData.datasets[0].data[r]],backgroundColor:"transparent",yAxisID:"y-axis-1",borderWidth:0},{data:[this.displayData.datasets[1].data[r]],backgroundColor:"transparent",yAxisID:"y-axis-1",borderWidth:0},{data:[this.displayData.datasets[2].data[r]],backgroundColor:"transparent",yAxisID:"y-axis-1",borderWidth:0},{data:[this.displayData.datasets[3].data[r]],backgroundColor:"transparent",yAxisID:"y-axis-1",borderWidth:0},{data:[0],backgroundColor:"transparent",yAxisID:"y-axis-1",borderWidth:0},{data:[this.displayData.datasets[5].data[r]],backgroundColor:"transparent",yAxisID:"y-axis-2",borderWidth:0}]}},displayOptionHeader:function(){return{maintainAspectRatio:!1,legend:{display:!1},tooltips:{enabled:!1},scales:{xAxes:[{id:"day",stacked:!0,gridLines:{display:!1},ticks:{fontSize:9,maxTicksLimit:20,fontColor:"transparent",maxRotation:0,minRotation:0,callback:function(label){return d()(label).format("D")}}},{id:"month",stacked:!0,gridLines:{drawOnChartArea:!1,drawTicks:!1,drawBorder:!1,tickMarkLength:10},ticks:{fontSize:11,fontColor:"transparent",padding:13,fontStyle:"bold"},type:"time",time:{unit:"month"}}],yAxes:[{id:"y-axis-1",type:"linear",position:"left",stacked:!0,gridLines:{display:!0,drawOnChartArea:!1,color:"#E5E5E5"},ticks:{suggestedMin:0,maxTicksLimit:8,fontColor:"#808080",suggestedMax:this.scaledTicksYAxisMax}},{id:"y-axis-2",type:"linear",position:"right",stacked:!0,gridLines:{display:!0,drawOnChartArea:!1,color:"#E5E5E5"},ticks:{suggestedMin:0,maxTicksLimit:8,fontColor:"#808080",suggestedMax:this.scaledTicksYAxisMaxRight,callback:function(t){return"".concat(t,"%")}}}]},animation:{duration:0}}},scaledTicksYAxisMax:function(){var t=this;return Array.from(this.chartData[0].keys()).map((function(i){return t.chartData[0][i]+t.chartData[1][i]+t.chartData[2][i]+t.chartData[3][i]})).reduce((function(a,b){return Math.max(a,b)}),0)},scaledTicksYAxisMaxRight:function(){return this.chartData[5].reduce((function(a,b){return Math.max(a,b)}),0)}},methods:{onClickLegend:function(i){this.displayLegends[i]=!this.displayLegends[i],this.displayLegends=this.displayLegends.slice()}},mounted:function(){var canvas=this.$refs.barChart.$el.querySelector("canvas"),t="".concat(this.titleId,"-graph");canvas&&(canvas.setAttribute("role","img"),canvas.setAttribute("aria-labelledby",t))}},D=c.a.extend($),w=n(444),S=n(8);var component=Object(S.a)(D,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("data-view",{attrs:{title:t.title,"title-id":t.titleId,date:t.date,"head-title":t.title+t.infoTitles.join(",")},scopedSlots:t._u([{key:"notes",fn:function(){return[n("notes-expansion-panel",{staticClass:"DataView-ExpansionPanel",attrs:{"expansion-panel-text":t.$t("Common.注")},scopedSlots:t._u([{key:"notes",fn:function(){return[t._t("notes")]},proxy:!0}],null,!0)})]},proxy:!0},{key:"additionalDescription",fn:function(){return[t._t("additionalDescription")]},proxy:!0},{key:"dataTable",fn:function(){return[n("client-only",[n("data-view-table",{attrs:{headers:t.tableHeaders,items:t.tableData}})],1)]},proxy:!0},{key:"dataSetPanel",fn:function(){return[n("data-view-data-set-panel",{attrs:{title:t.infoTitles[0],"l-text":t.displayInfo[0].lText,"s-text":t.displayInfo[0].sText,unit:t.displayInfo[0].unit}}),t._v(" "),n("data-view-data-set-panel",{attrs:{title:t.infoTitles[1],"l-text":t.displayInfo[1].lText,"s-text":t.displayInfo[1].sText,unit:t.displayInfo[1].unit}})]},proxy:!0}],null,!0)},[n("ul",{class:t.$style.GraphLegend,style:{display:t.canvas?"block":"none"}},t._l(t.dataLabels,(function(e,i){return n("li",{key:i,on:{click:function(e){return t.onClickLegend(i)}}},[n("button",[n("div",4===i?{style:{background:"repeating-linear-gradient(90deg, "+t.colors[i].fillColor+", "+t.colors[i].fillColor+" 2px, #fff 2px, #fff 4px)",border:0,height:"3px"}}:5===i?{style:{backgroundColor:t.colors[4].fillColor,border:0,height:"3px"}}:{style:{backgroundColor:t.colors[i].fillColor,borderColor:t.colors[i].strokeColor}}),t._v(" "),n("span",{style:{textDecoration:t.displayLegends[i]?"none":"line-through"}},[t._v(t._s(e))])])])})),0),t._v(" "),n("h4",{staticClass:"visually-hidden",attrs:{id:t.titleId+"-graph"}},[t._v("\n    "+t._s(t.$t("{title}のグラフ",{title:t.title}))+"\n  ")]),t._v(" "),n("scrollable-chart",{directives:[{name:"show",rawName:"v-show",value:t.canvas,expression:"canvas"}],attrs:{"display-data":t.displayData},scopedSlots:t._u([{key:"chart",fn:function(e){var r=e.chartWidth;return[n("bar",{ref:"barChart",attrs:{"chart-id":t.chartId,"chart-data":t.displayData,options:t.displayOption,"display-legends":t.displayLegends,height:240,width:r}})]}},{key:"sticky-chart",fn:function(){return[n("bar",{staticClass:"sticky-legend",attrs:{"chart-id":t.chartId+"-header-right","chart-data":t.displayDataHeader,options:t.displayOptionHeader,plugins:t.yAxesBgRightPlugin,"display-legends":t.displayLegends,height:240}})]},proxy:!0}])})],1)}),[],!1,(function(t){this.$style=w.default.locals||w.default}),null,null);e.default=component.exports;installComponents(component,{ScrollableChart:n(327).default,NotesExpansionPanel:n(322).default,DataViewTable:n(326).default,DataViewDataSetPanel:n(324).default,DataView:n(323).default})},444:function(t,e,n){"use strict";var r=n(359),o=n.n(r);n.d(e,"default",(function(){return o.a}))},445:function(t,e,n){(e=n(22)(!1)).push([t.i,".GraphLegend_21QD7{text-align:center;list-style:none;padding:0!important}.GraphLegend_21QD7 li{display:inline-block;margin:0 3px}.GraphLegend_21QD7 li div{height:12px;margin:2px 4px;width:40px;display:inline-block;vertical-align:middle;border-width:1px;border-style:solid}.GraphLegend_21QD7 li button{color:#707070;font-size:1.2rem}",""]),e.locals={GraphLegend:"GraphLegend_21QD7"},t.exports=e},446:function(t,e,n){"use strict";var r=n(360),o=n.n(r);n.d(e,"default",(function(){return o.a}))},447:function(t,e,n){(e=n(22)(!1)).push([t.i,".newScenario_3ajka hr{border:none;border-bottom:1px solid #d9d9d9;margin-top:20px;margin-bottom:20px}.newScenario_3ajka .newScenarioExternalLink_2rfBj{margin-bottom:10px;text-align:right}.newScenario_3ajka .newScenarioSummarry_1wKWg{color:red}",""]),e.locals={newScenario:"newScenario_3ajka",newScenarioExternalLink:"newScenarioExternalLink_2rfBj",newScenarioSummarry:"newScenarioSummarry_1wKWg"},t.exports=e},479:function(t,e,n){"use strict";n.r(e);n(44);var r=n(12),o=n.n(r),l=n(377),d=n.n(l),c=n(76),h=n(397),f=n(84),y=n(328);o.a.extend(d.a);var v={components:{PositiveRateMixedChart:h.default,AppLink:c.default},props:{md:{type:String,default:"6"}},data:function(){var data=f.data,t=data.map((function(data){return data.pcr_positive_count})),e=data.map((function(data){return data.pcr_negative_count})),n=data.map((function(data){return data.antigen_positive_count})),r=data.map((function(data){return data.antigen_negative_count})),o=data.map((function(data){return data.positive_rate})),l=data.map((function(data){return data.diagnosed_date})),d=[t,n,e,r,data.map((function(data){return data.weekly_average_diagnosed_count})),o],c=[this.$t("PositiveRateCard.a[2]"),this.$t("PositiveRateCard.a[3]"),this.$t("PositiveRateCard.a[4]"),this.$t("PositiveRateCard.a[5]"),this.$t("PositiveRateCard.a[6]"),this.$t("PositiveRateCard.a[7]")],h=c.map((function(t){return t}));return{PositiveRate:f,positiveRateGraph:d,positiveRateLabels:l,positiveRateDataLabels:c,positiveRateTableLabels:h,getFormatter:function(t){return 4===t?Object(y.a)(1):5===t?Object(y.b)(1):Object(y.c)()}}}},m=n(446),x=n(8),C=n(40),k=n.n(C),_=n(586);var component=Object(x.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-col",{staticClass:"DataCard",attrs:{id:"PositiveRateCard",cols:"12",md:t.md}},[n("client-only",[n("positive-rate-mixed-chart",{attrs:{"title-id":"positive-rate","info-titles":[t.$t("PositiveRateCard.a[0]"),t.$t("PositiveRateCard.a[1]")],"chart-id":"positive-rate-chart","chart-data":t.positiveRateGraph,"get-formatter":t.getFormatter,date:t.PositiveRate.date,labels:t.positiveRateLabels,unit:"%","option-unit":t.$t("件.reports"),"data-labels":t.positiveRateDataLabels,"table-labels":t.positiveRateTableLabels},scopedSlots:t._u([{key:"notes",fn:function(){return[n("div",{class:t.$style.newScenario},[n("ul",[n("li",[t._v("\n              "+t._s(t.$t("PositiveRateCard.b[0]"))+"\n            ")]),t._v(" "),n("li",[t._v("\n              "+t._s(t.$t("Common.7MA"))+"\n            ")]),t._v(" "),n("li",[t._v("\n              "+t._s(t.$t("Common.検査結果の判明日を基準とする"))+"\n            ")]),t._v(" "),n("li",[t._v("\n              "+t._s(t.$t("PositiveRateCard.b[1]"))+"\n            ")]),t._v(" "),n("li",[t._v("\n              "+t._s(t.$t("PositiveRateCard.b[2]"))+"\n            ")])]),t._v(" "),n("hr"),t._v(" "),n("div",{class:t.$style.newScenarioSummarry},[n("p",[n("strong",[t._v("\n                "+t._s(t.$t("PositiveRateCard.c[0]"))+"\n              ")])]),t._v(" "),n("p",[t._v("\n              "+t._s(t.$t("PositiveRateCard.c[1]"))+"\n            ")])]),t._v(" "),n("div",{class:t.$style.newScenarioExternalLink},[n("div",[n("app-link",{attrs:{to:t.$t("ExtLink.岩手県17_2.url")}},[t._v("\n                "+t._s(t.$t("ExtLink.岩手県17_2.text"))+"\n              ")])],1)])])]},proxy:!0}])}),t._v(" "),t._t("breadCrumb")],2)],1)}),[],!1,(function(t){this.$style=m.default.locals||m.default}),null,null);e.default=component.exports;k()(component,{AppLink:n(76).default,PositiveRateMixedChart:n(397).default}),k()(component,{VCol:_.a})}}]);