(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{420:function(t,e,n){var content=n(482);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(24).default)("6fa15d1c",content,!0,{sourceMap:!1})},445:function(t,e,n){"use strict";n.r(e);n(74);var d=n(0),l=n(340),r=n(339),o=n(341),f=d.a.extend({components:{DataView:l.default,DataViewDataSetPanel:r.default,NotesExpansionPanel:o.default},props:{title:{type:String,default:""},titleId:{type:String,default:""},date:{type:String,default:""},bedSummary:{type:Object,default:function(){}}},methods:{bedInUse:function(t){var e=["Bed"];return t<this.bedSummary.hotel&&e.push("inuse"),t<85&&e.push("phase2"),t>=85&&t<300&&e.push("phase3"),t>=300&&e.push("overflowed"),e.join(" ")}}}),c=(n(481),n(10)),component=Object(c.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("data-view",{attrs:{title:t.title,"title-id":t.titleId,date:t.date},scopedSlots:t._u([{key:"notes",fn:function(){return[n("notes-expansion-panel",{staticClass:"DataView-ExpansionPanel",attrs:{"expansion-panel-text":t.$t("Common.注")},scopedSlots:t._u([{key:"notes",fn:function(){return[t._t("notes")]},proxy:!0}],null,!0)})]},proxy:!0},{key:"dataSetPanel",fn:function(){return[n("data-view-data-set-panel",{attrs:{title:t.$t("HotelCapacityCard.title"),"card-path":"/cards/"+t.titleId+"/"}})]},proxy:!0}])},[n("div",{staticClass:"Beds"},t._l(t.bedSummary.beds,(function(e){return n("div",{key:e,class:t.bedInUse(e),attrs:{title:e+1}},[e%50==49?n("span",[t._v(t._s(e+1))]):t._e()])})),0),t._v(" "),n("div",{staticClass:"legend1"},[n("div",[n("span",{staticClass:"Bed inuse"}),t._v("\n      療養中\n    ")]),t._v(" "),n("div",[n("span",{staticClass:"Bed"}),t._v("\n      空き\n    ")])]),t._v(" "),n("div",{staticClass:"legend2"},[n("div",[n("span",{staticClass:"Bed phase2"}),t._v("\n      実線枠はフェーズ2の確保部屋 (85室)\n    ")]),t._v(" "),n("div",[n("span",{staticClass:"Bed phase3"}),t._v("\n      点線枠はフェーズ3の確保部屋 (300室)\n    ")]),t._v(" "),t.bedSummary.hotel>300?n("div",[n("span",{staticClass:"Bed overflowed"}),t._v("\n      赤線枠はフェーズ3で確保予定の病床を超えた分\n    ")]):t._e()])])}),[],!1,null,"813f64b2",null);e.default=component.exports;installComponents(component,{NotesExpansionPanel:n(341).default,DataViewDataSetPanel:n(339).default,DataView:n(340).default})},481:function(t,e,n){"use strict";n(420)},482:function(t,e,n){var d=n(23)(!1);d.push([t.i,".Beds[data-v-813f64b2]{display:flex;flex-direction:row;justify-content:flex-start;flex-wrap:wrap}.Bed[data-v-813f64b2]{vertical-align:middle;width:16px;height:16px;margin-right:3px;margin-bottom:3px;border:1px solid #aaa;background-color:#fff}.Bed[data-v-813f64b2],.Bed>span[data-v-813f64b2]{display:inline-block}.Bed>span[data-v-813f64b2]{line-height:14px;height:14px;width:14px;text-align:center;font-size:.7rem}.Bed.phase2[data-v-813f64b2]{opacity:1}.Bed.phase3[data-v-813f64b2]{border-style:dotted}.Bed.inuse[data-v-813f64b2]{background-color:#fce5da}.Bed.overflowed[data-v-813f64b2]{border:1px solid #f99}.legend1[data-v-813f64b2]{display:flex;font-size:1.2rem}.legend1>div[data-v-813f64b2]{margin:20px 20px 20px 0;flex-wrap:wrap}.legend2[data-v-813f64b2]{display:flex;flex-direction:column;font-size:1.2rem}.legend2>div[data-v-813f64b2]{margin:1px 0;flex-wrap:wrap}",""]),t.exports=d},612:function(t,e,n){"use strict";n.r(e);var d=n(106),l=(n(9),n(34),n(14)),r=n.n(l),o=n(0),f=n(445),c=n(427),v=n(167),m=o.a.extend({components:{HotelCapacity:f.default},props:{md:{type:String,default:"6"}},data:function(){var t=r()(v.date).format("YYYY/MM/DD HH:mm"),e=c.宿泊療養,n=e>300?e:300;return{date:t,bedSummary:{beds:Object(d.a)(Array(n).keys()),maxBeds:n,hotel:e}}}}),x=n(10),y=n(44),h=n.n(y),_=n(383),component=Object(x.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-col",{staticClass:"DataCard",attrs:{id:"HotelCapacityCard",cols:"12",md:t.md}},[n("client-only",[n("hotel-capacity",{attrs:{title:t.$t("HotelCapacityCard.title"),"title-id":"hotel-capacity",date:t.date,"bed-summary":t.bedSummary}}),t._v(" "),t._t("breadCrumb")],2)],1)}),[],!1,null,null,null);e.default=component.exports;h()(component,{HotelCapacity:n(445).default}),h()(component,{VCol:_.a})}}]);