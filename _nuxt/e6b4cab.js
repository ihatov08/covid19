(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{361:function(t,e,n){n(4)({target:"Math",stat:!0},{sign:n(233)})},367:function(t,e,n){var content=n(452);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("2de417ed",content,!0,{sourceMap:!1})},368:function(t,e,n){var content=n(454);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("b060073a",content,!0,{sourceMap:!1})},406:function(t,e,n){"use strict";n.r(e);n(21),n(35),n(125),n(71),n(13),n(63);var r=n(3),o=n(102),l=n(12),d=n.n(l),c=n(0),f=n(333),h=n(334),y=n(336),m=n(332),x=n(337),C=n(126),k=n(343),v=n(350),_=n(338),L={created:function(){this.canvas=!0},components:{DataView:f.default,DataViewTable:y.default,DataViewDataSetPanel:h.default,NotesExpansionPanel:m.default,ScrollableChart:x.default},props:{title:{type:String,default:""},titleId:{type:String,required:!1,default:"monitoring-number-of-confirmed-cases"},infoTitles:{type:Array,required:!1,default:function(){return[]}},chartId:{type:String,default:"monitoring-confirmed-cases-chart"},chartData:{type:Array,required:!1,default:function(){return[]}},getFormatter:{type:Function,required:!1,default:function(t){return Object(_.c)()}},date:{type:String,required:!0,default:""},labels:{type:Array,default:function(){return[]}},dataLabels:{type:Array,default:function(){return[]}},tableLabels:{type:Array,default:function(){return[]}},unit:{type:String,default:""}},data:function(){return{displayLegends:[!0,!0],colors:[Object(k.a)("C"),Object(k.a)("E")],canvas:!0,yAxesBgPlugin:C.b}},computed:{displayInfo:function(){var t=Object(v.a)({displayData:this.displayData,dataIndex:1,digit:1}),e=t.lastDay,n=t.lastDayData,r=t.dayBeforeRatio,o=this.chartData[0].slice(this.chartData[0].length-7,this.chartData[0].length).reduce((function(t,e){return t+e}),0),l=Math.round(1e5*o/1212201*10)/10;return[{lText:n,sText:"".concat(this.$t("{date} の数値",{date:this.$d(e,"dateWithoutYear")}),"（").concat(this.$t("前日比"),": ").concat(r," ").concat(this.unit,"）"),unit:this.unit},{lText:"".concat(l),unit:this.unit}]},displayData:function(){return{labels:this.labels,datasets:[{type:"bar",label:this.dataLabels[0],data:this.chartData[0],backgroundColor:this.colors[0].fillColor,borderColor:this.colors[0].strokeColor,borderWidth:1,order:3},{type:"line",label:this.dataLabels[1],data:this.chartData[1],pointBackgroundColor:"rgba(0,0,0,0)",pointBorderColor:"rgba(0,0,0,0)",borderColor:this.colors[1].fillColor,borderWidth:3,fill:!1,order:2,lineTension:0}]}},tableHeaders:function(){return[{text:this.$t("日付"),value:"text"}].concat(Object(o.a)(this.tableLabels.map((function(text,i){return{text:text,value:"".concat(i),align:"end"}}))))},tableData:function(){var t=this;return this.labels.map((function(label,i){return Object.assign.apply(Object,[{text:label}].concat(Object(o.a)(t.tableLabels.map((function(e,n){return Object(r.a)({},n,t.getFormatter(n)(t.chartData[n][i]))})))))})).sort((function(a,b){return d()(a.text).unix()-d()(b.text).unix()})).reverse()},displayOption:function(){var t=this,e=this.unit,n={tooltips:{displayColors:!1,callbacks:{label:function(n){var r=t.getFormatter(n.datasetIndex)(parseFloat(n.value));return"".concat(t.dataLabels[n.datasetIndex]," : ").concat(r," ").concat(e)},title:function(t,data){if(t[0].datasetIndex<2){var e=data.labels[t[0].index].toString();return d()(e).format("M/D")}return""}}},maintainAspectRatio:!1,legend:{display:!1},scales:{xAxes:[{id:"day",stacked:!0,gridLines:{display:!1},ticks:{fontSize:9,maxTicksLimit:20,fontColor:"#808080",maxRotation:0,callback:function(label){return d()(label).format("D")}}},{id:"month",stacked:!0,gridLines:{drawOnChartArea:!1,drawTicks:!0,drawBorder:!1,tickMarkLength:10},ticks:{fontSize:11,fontColor:"#808080",padding:3,fontStyle:"bold"},type:"time",time:{unit:"month",displayFormats:{month:"MMM"}}}],yAxes:[{position:"left",gridLines:{display:!0,drawOnChartArea:!0,color:"#E5E5E5"},ticks:{suggestedMin:0,maxTicksLimit:8,fontColor:"#808080",suggestedMax:this.scaledTicksYAxisMax}}]}};return"true"===this.$route.query.ogp&&Object.assign(n,{animation:{duration:0}}),n},displayDataHeader:function(){return{labels:["2020-01-01"],datasets:this.dataLabels.map((function(t){return{data:[],backgroundColor:"transparent",borderWidth:0}}))}},displayOptionHeader:function(){return{maintainAspectRatio:!1,legend:{display:!1},tooltips:{enabled:!1},scales:{xAxes:[{id:"day",stacked:!0,gridLines:{display:!1},ticks:{fontSize:9,maxTicksLimit:20,fontColor:"transparent",maxRotation:0,minRotation:0,callback:function(label){return d()(label).format("D")}}},{id:"month",stacked:!0,gridLines:{drawOnChartArea:!1,drawTicks:!1,drawBorder:!1,tickMarkLength:10},ticks:{fontSize:11,fontColor:"transparent",padding:13,fontStyle:"bold"},type:"time",time:{unit:"month"}}],yAxes:[{type:"linear",position:"left",gridLines:{display:!0,drawOnChartArea:!1,color:"#E5E5E5"},ticks:{suggestedMin:0,maxTicksLimit:8,fontColor:"#808080",suggestedMax:this.scaledTicksYAxisMax}}]},animation:{duration:0}}},scaledTicksYAxisMax:function(){return this.chartData.reduce((function(t,data){return Math.max.apply(Math,[t].concat(Object(o.a)(data)))}),0)}},methods:{onClickLegend:function(i){this.displayLegends[i]=!this.displayLegends[i],this.displayLegends=this.displayLegends.slice()},makeLineData:function(t){return this.chartData[0].map((function(e){return t}))}},mounted:function(){var canvas=this.$refs.barChart.$el.querySelector("canvas"),t="".concat(this.titleId,"-graph");canvas&&(canvas.setAttribute("role","img"),canvas.setAttribute("aria-labelledby",t))}},w=c.a.extend(L),S=n(451),D=n(8);var component=Object(D.a)(w,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("data-view",{attrs:{title:t.title,"title-id":t.titleId,date:t.date,"head-title":t.title+t.infoTitles.join(",")},scopedSlots:t._u([{key:"notes",fn:function(){return[n("notes-expansion-panel",{staticClass:"DataView-ExpansionPanel",attrs:{"expansion-panel-text":t.$t("Common.注")},scopedSlots:t._u([{key:"notes",fn:function(){return[t._t("notes")]},proxy:!0}],null,!0)})]},proxy:!0},{key:"additionalDescription",fn:function(){return[t._t("additionalDescription")]},proxy:!0},{key:"dataTable",fn:function(){return[n("client-only",[n("data-view-table",{attrs:{headers:t.tableHeaders,items:t.tableData}})],1)]},proxy:!0},{key:"dataSetPanel",fn:function(){return[n("data-view-data-set-panel",{attrs:{title:t.infoTitles[0],"l-text":t.displayInfo[0].lText,"s-text":t.displayInfo[0].sText,unit:t.displayInfo[0].unit}}),t._v(" "),n("data-view-data-set-panel",{attrs:{title:t.infoTitles[1],"l-text":t.displayInfo[1].lText,unit:t.displayInfo[1].unit}})]},proxy:!0}],null,!0)},[n("ul",{class:t.$style.GraphLegend,style:{display:t.canvas?"block":"none"}},t._l(t.dataLabels,(function(e,i){return n("li",{key:i,on:{click:function(e){return t.onClickLegend(i)}}},[n("button",[n("div",1===i?{style:{background:t.colors[i].fillColor,border:0,height:"3px"}}:{style:{backgroundColor:t.colors[i].fillColor,borderColor:t.colors[i].strokeColor}}),t._v(" "),n("span",{style:{textDecoration:t.displayLegends[i]?"none":"line-through"}},[t._v(t._s(e))])])])})),0),t._v(" "),n("h4",{staticClass:"visually-hidden",attrs:{id:t.titleId+"-graph"}},[t._v("\n    "+t._s(t.$t("{title}のグラフ",{title:t.title}))+"\n  ")]),t._v(" "),n("scrollable-chart",{directives:[{name:"show",rawName:"v-show",value:t.canvas,expression:"canvas"}],attrs:{"display-data":t.displayData},scopedSlots:t._u([{key:"chart",fn:function(e){var r=e.chartWidth;return[n("bar",{ref:"barChart",attrs:{"chart-id":t.chartId,"chart-data":t.displayData,options:t.displayOption,"display-legends":t.displayLegends,height:240,width:r}})]}},{key:"sticky-chart",fn:function(){return[n("bar",{staticClass:"sticky-legend",attrs:{"chart-id":t.chartId+"-header-right","chart-data":t.displayDataHeader,options:t.displayOptionHeader,plugins:t.yAxesBgPlugin,"display-legends":t.displayLegends,height:240}})]},proxy:!0}])})],1)}),[],!1,(function(t){this.$style=S.default.locals||S.default}),null,null);e.default=component.exports;installComponents(component,{ScrollableChart:n(337).default,NotesExpansionPanel:n(332).default,DataViewTable:n(336).default,DataViewDataSetPanel:n(334).default,DataView:n(333).default})},451:function(t,e,n){"use strict";var r=n(367),o=n.n(r);n.d(e,"default",(function(){return o.a}))},452:function(t,e,n){(e=n(19)(!1)).push([t.i,".GraphLegend_3HeTz{text-align:center;list-style:none;padding:0!important}.GraphLegend_3HeTz li{display:inline-block;margin:0 3px}.GraphLegend_3HeTz li div{height:12px;margin:2px 4px;width:40px;display:inline-block;vertical-align:middle;border-width:1px;border-style:solid}.GraphLegend_3HeTz li button{color:#707070;font-size:1.2rem}",""]),e.locals={GraphLegend:"GraphLegend_3HeTz"},t.exports=e},453:function(t,e,n){"use strict";var r=n(368),o=n.n(r);n.d(e,"default",(function(){return o.a}))},454:function(t,e,n){(e=n(19)(!1)).push([t.i,".newScenario_2Hz75 hr{border:none;border-bottom:1px solid #d9d9d9;margin-top:20px;margin-bottom:20px}.newScenario_2Hz75 .newScenarioExternalLink_26zYR{margin-bottom:10px;text-align:right}.newScenario_2Hz75 .newScenarioSummarry_2MG44{color:red}",""]),e.locals={newScenario:"newScenario_2Hz75",newScenarioExternalLink:"newScenarioExternalLink_26zYR",newScenarioSummarry:"newScenarioSummarry_2MG44"},t.exports=e},488:function(t,e,n){"use strict";n.r(e);n(125);var r=n(5),o=n(72),l=n(406),d=n(397),c=n(338),f={components:{MonitoringConfirmedCasesChart:l.default,AppLink:o.default},props:{md:{type:String,default:"6"}},data:function(){var t=d.data.reduce((function(t,data){return t[0].push(data.count),t[1].push(data.weekly_average_count),t[2].push(data.diagnosed_date),t}),[[],[],[]]),e=Object(r.a)(t,3),n=e[0],o=e[1],l=e[2],f=[n,o],h=[this.$t("Common.陽性者数"),this.$t("Common.７日間移動平均")],y=[this.$t("Common.陽性者数"),this.$t("Common.７日間移動平均")];return{chartData:f,date:d.date,labels:l,dataLabels:h,tableLabels:y,getFormatter:function(t){return 1===t?Object(c.b)(1):Object(c.c)()}}}},h=n(453),y=n(8),m=n(32),x=n.n(m),C=n(599);var component=Object(y.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-col",{staticClass:"DataCard",attrs:{id:"MonitoringConfirmedCasesNumberCard",cols:"12",md:t.md}},[n("client-only",[n("monitoring-confirmed-cases-chart",{attrs:{"title-id":"monitoring-number-of-confirmed-cases","info-titles":[t.$t("ConfirmedCasesNumberCard.title[0]"),t.$t("ConfirmedCasesNumberCard.title[1]")],"chart-id":"monitoring-confirmed-cases-chart","chart-data":t.chartData,"get-formatter":t.getFormatter,date:t.date,labels:t.labels,"data-labels":t.dataLabels,"table-labels":t.tableLabels,unit:t.$t("Common.人")},scopedSlots:t._u([{key:"notes",fn:function(){return[n("ul",[n("li",[t._v("\n            "+t._s(t.$t("Common.検査結果の判明日を基準とする"))+"\n          ")]),t._v(" "),t._l(t.$t("ConfirmedCasesNumberCard.a"),(function(e,i){return n("li",{key:i},[t._v("\n            "+t._s(e)+"\n          ")])})),t._v(" "),n("li",[t._v("\n            "+t._s(t.$t("Common.7MA"))+"\n          ")])],2),t._v(" "),n("div",{class:t.$style.newScenario},[n("hr"),t._v(" "),n("div",{class:t.$style.newScenarioSummarry},t._l(t.$t("ConfirmedCasesNumberCard.b"),(function(e,i){return n("p",{key:i},[t._v("\n              "+t._s(e)+"\n            ")])})),0),t._v(" "),n("div",{class:t.$style.newScenarioExternalLink},[n("div",[n("app-link",{attrs:{to:t.$t("ExtLink.岩手県17_2.url")}},[t._v("\n                "+t._s(t.$t("ExtLink.岩手県17_2.text"))+"\n              ")])],1),t._v(" "),n("div",[n("app-link",{attrs:{to:t.$t("ExtLink.厚生労働省x696.url")}},[t._v("\n                "+t._s(t.$t("ExtLink.厚生労働省x696.text"))+"\n              ")])],1)])])]},proxy:!0}])}),t._v(" "),t._t("breadCrumb")],2)],1)}),[],!1,(function(t){this.$style=h.default.locals||h.default}),null,null);e.default=component.exports;x()(component,{AppLink:n(72).default,MonitoringConfirmedCasesChart:n(406).default}),x()(component,{VCol:C.a})}}]);