(window.webpackJsonp=window.webpackJsonp||[]).push([[75,7,36],{340:function(t,e,n){"use strict";n.r(e);var o=n(0),r=n(81),l=o.a.extend({components:{AppLink:r.default},props:{title:{type:String,required:!0,default:""},lTextBefore:{type:String,required:!1,default:""},lText:{type:String,required:!1,default:""},sText:{type:String,required:!1,default:""},unit:{type:String,required:!1,default:""},cardPath:{type:String,required:!0},selfDisclosureForm:{type:Boolean,required:!1,default:!1}}}),c=(n(355),n(10)),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"DataView-DataSet"},[n("h3",{staticClass:"DataView-DataSet-title"},[n("app-link",{staticClass:"DataView-DataSet-title-HeaderLink",attrs:{to:t.localePath(t.cardPath)}},[t._v("\n      "+t._s(t.title)+"\n    ")])],1),t._v(" "),n("div",{staticClass:"DataView-DataSet-DataInfo"},[""!==t.lText?n("span",{staticClass:"DataView-DataSet-DataInfo-summary"},[n("span",{staticClass:"lTextBefore"},[t._v("\n        "+t._s(t.lTextBefore)+"\n      ")]),t._v(" "),n("strong",[t._v("\n        "+t._s(t.lText)+"\n      ")]),t._v(" "),n("small",{staticClass:"DataView-DataSet-DataInfo-summary-unit"},[t._v("\n        "+t._s(t.unit)+"\n      ")])]):t._e(),t._v(" "),""!==t.lText?n("br"):t._e(),t._v(" "),""!==t.sText?n("small",{staticClass:"DataView-DataSet-DataInfo-date"},[t._v("\n      "+t._s(t.sText)+"\n    ")]):t._e(),t._v(" "),t.selfDisclosureForm?n("div",{staticClass:"DataView-DataSet-DataInfo-SelfDisclosureForm"},[n("app-link",{attrs:{to:"https://forms.gle/JHB4HJ2c4NnPcmy69"}},[t._v("\n        情報提供フォーム\n      ")])],1):t._e()])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{AppLink:n(81).default})},341:function(t,e,n){"use strict";n.r(e);var o=n(0),r=n(343),l=n(348),c=n(127),d=o.a.extend({components:{DataViewExpansionPanel:r.default,DataViewShare:l.default},props:{title:{type:String,default:""},titleId:{type:String,default:""},date:{type:String,default:""},headTitle:{type:String,default:""}},head:function(){return this.$route.params.card?{title:this.headTitle?this.headTitle:this.title,meta:[{hid:"og:title",property:"og:title",content:this.headTitle?this.headTitle:this.title},{hid:"description",name:"description",content:this.date},{hid:"og:description",property:"og:description",content:this.date}]}:{}},computed:{formattedDate:function(){return Object(c.c)(this.date)},formattedDateForDisplay:function(){return this.$d(new Date(this.date),"dateTime")},permalink:function(){var t="/cards/".concat(this.titleId);return this.localePath(t)}}}),f=(n(357),n(10)),h=n(44),m=n.n(h),w=n(690),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{staticClass:"DataView"},[n("div",{staticClass:"DataView-Inner"},[n("div",{staticClass:"DataView-Header"},[t.$slots.dataSetPanel?n("div",{staticClass:"DataView-DataSetPanel"},[t._t("dataSetPanel")],2):t._e()]),t._v(" "),t.$slots.attentionNote?n("div",{staticClass:"DataView-AttentionNote"},[t._t("attentionNote")],2):t._e(),t._v(" "),n("div",{staticClass:"DataView-Description"},[t._t("description")],2),t._v(" "),n("div",[t._t("button")],2),t._v(" "),n("div",{staticClass:"DataView-Content"},[t._t("default")],2),t._v(" "),n("div",{staticClass:"DataView-Description DataView-Description--Additional"},[t.$slots.dataTable?n("data-view-expansion-panel",{staticClass:"DataView-ExpansionPanel"},[t._t("dataTable")],2):t._e()],1),t._v(" "),n("div",{staticClass:"DataView-Description DataView-Description--Additional"},[t._t("notes")],2),t._v(" "),n("div",{staticClass:"DataView-Description DataView-Description--Additional"},[t._t("additionalDescription")],2),t._v(" "),n("div",{staticClass:"DataView-Space"}),t._v(" "),n("div",{staticClass:"DataView-Footer"},[n("div",[t._t("footer"),t._v(" "),n("div",[n("a",{staticClass:"Permalink",attrs:{href:t.permalink}},[n("time",{attrs:{datetime:t.formattedDate}},[t._v("\n              "+t._s(t.$t("{date} 更新",{date:t.formattedDateForDisplay}))+"\n            ")])])])],2),t._v(" "),"true"!=t.$route.query.embed?n("data-view-share",{staticClass:"Footer-Right",attrs:{title:t.title,"title-id":t.titleId}}):t._e()],1)])])}),[],!1,null,null,null);e.default=component.exports;m()(component,{DataViewExpansionPanel:n(343).default,DataViewShare:n(348).default}),m()(component,{VCard:w.a})},342:function(t,e,n){"use strict";n.r(e);var o=n(39),r=n(0),l=n(344),c=r.a.extend({props:{expansionPanelText:{type:String,required:!0}},data:function(){return{showDetails:!1,mdiChevronRight:o.d}},mounted:function(){this.showDetails=!0},methods:{toggleDetails:function(){l.a.$emit(l.b,{dataView:this.$parent})}}}),d=(n(359),n(10)),f=n(44),h=n.n(f),m=n(613),w=n(614),v=n(615),x=n(616),D=n(332),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.$slots.notes?n("div",{staticClass:"NotesExpansionPanel"},[t.showDetails?n("v-expansion-panels",{attrs:{flat:""}},[n("v-expansion-panel",[n("v-expansion-panel-header",{style:{transition:"none"},attrs:{"hide-actions":!0},on:{click:t.toggleDetails}},[n("div",{staticClass:"v-expansion-panel-header__icon grey--text text--darken-2"},[n("v-icon",{attrs:{left:"",size:"24"}},[t._v(t._s(t.mdiChevronRight))])],1),t._v(" "),n("span",{staticClass:"expansion-panel-text grey--text text--darken-2"},[t._v("\n          "+t._s(t.expansionPanelText)+"\n        ")])]),t._v(" "),n("v-expansion-panel-content",{staticClass:"grey--text text--darken-2"},[t._t("notes")],2)],1)],1):[t._t("notes")]],2):t._e()}),[],!1,null,null,null);e.default=component.exports;h()(component,{VExpansionPanel:m.a,VExpansionPanelContent:w.a,VExpansionPanelHeader:v.a,VExpansionPanels:x.a,VIcon:D.a})},343:function(t,e,n){"use strict";n.r(e);var o=n(39),r=n(0),l=n(344),c=r.a.extend({data:function(){return{showDetails:!1,mdiChevronRight:o.d}},mounted:function(){this.showDetails=!0},methods:{toggleDetails:function(){l.a.$emit(l.b,{dataView:this.$parent})}}}),d=(n(351),n(10)),f=n(44),h=n.n(f),m=n(613),w=n(614),v=n(615),x=n(616),D=n(332),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"DataViewExpansionPanel"},[t.showDetails?n("v-expansion-panels",{attrs:{flat:""}},[n("v-expansion-panel",[n("v-expansion-panel-header",{style:{transition:"none"},attrs:{"hide-actions":!0},on:{click:t.toggleDetails}},[n("div",{staticClass:"v-expansion-panel-header__icon grey--text text--darken-2"},[n("v-icon",{attrs:{left:"",size:"24"}},[t._v(t._s(t.mdiChevronRight))])],1),t._v(" "),n("span",{staticClass:"expansion-panel-text grey--text text--darken-2"},[t._v("\n          "+t._s(t.$t("Common.データを表示"))+"\n        ")])]),t._v(" "),n("v-expansion-panel-content",{staticClass:"grey--text text--darken-2"},[t._t("default")],2)],1)],1):[t._t("default")]],2)}),[],!1,null,null,null);e.default=component.exports;h()(component,{VExpansionPanel:m.a,VExpansionPanelContent:w.a,VExpansionPanelHeader:v.a,VExpansionPanels:x.a,VIcon:D.a})},345:function(t,e,n){var content=n(352);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(24).default)("114c0959",content,!0,{sourceMap:!1})},346:function(t,e,n){var content=n(354);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(24).default)("487710d1",content,!0,{sourceMap:!1})},347:function(t,e,n){var content=n(356);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(24).default)("0e424632",content,!0,{sourceMap:!1})},348:function(t,e,n){"use strict";n.r(e);n(64),n(25);var o=n(39),r=n(0).a.extend({props:{title:{type:String,default:""},titleId:{type:String,default:""}},data:function(){return{openGraphEmbed:!1,displayShare:!1,showOverlay:!1,mdiClipboardOutline:o.e,mdiClose:o.f}},computed:{graphEmbedValue:function(){var t='<iframe width="560" height="315" src="'.concat(this.permalink(!0,!0),'" frameborder="0"></iframe>');return t}},watch:{displayShare:function(t){t?document.documentElement.addEventListener("click",this.toggleShareMenu):document.documentElement.removeEventListener("click",this.toggleShareMenu)}},methods:{toggleShareMenu:function(t){t.stopPropagation(),this.displayShare=!this.displayShare},closeShareMenu:function(){this.displayShare=!1},isCopyAvailable:function(){return!!navigator.clipboard},copyEmbedCode:function(){var t=this;navigator.clipboard.writeText(this.graphEmbedValue).then((function(){t.closeShareMenu(),t.showOverlay=!0,setTimeout((function(){t.showOverlay=!1}),2e3)}))},stopClosingShareMenu:function(t){t.stopPropagation()},permalink:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],embed=arguments.length>1&&void 0!==arguments[1]&&arguments[1],e="/cards/".concat(this.titleId);return embed&&(e="".concat(e,"?embed=true")),e=this.localePath(e),t&&(e="".concat(location.protocol,"//").concat(location.host).concat(e)),e},twitter:function(){var t="https://twitter.com/intent/tweet?text=".concat(this.title," / ").concat(this.$t("Common.岩手県"),"\n      ").concat(this.$t("Common.新型コロナウイルス感染症"),"\n      ").concat(this.$t("Common.対策サイト"),"&url=").concat(this.permalink(!0),"&hashtags=StopCovid19JP");window.open(t)},facebook:function(){var t="https://www.facebook.com/sharer.php?u=".concat(this.permalink(!0));window.open(t)},line:function(){var t="https://social-plugins.line.me/lineit/share?url=".concat(this.permalink(!0));window.open(t)}}}),l=(n(353),n(10)),c=n(44),d=n.n(c),f=n(332),h=n(626),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-tooltip",{attrs:{left:"","nudge-right":"20","nudge-bottom":"4"},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("button",t._g({staticClass:"DataView-Share-Opener",on:{click:t.toggleShareMenu}},o),[n("svg",{attrs:{width:"14",height:"16",viewBox:"0 0 14 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",role:"img","aria-label":t.$t("{title}のグラフをシェア",{title:t.title})}},[n("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M7.59999 3.5H9.5L7 0.5L4.5 3.5H6.39999V11H7.59999V3.5ZM8.5 5.75H11.5C11.9142 5.75 12.25 6.08579 12.25 6.5V13.5C12.25 13.9142 11.9142 14.25 11.5 14.25H2.5C2.08579 14.25 1.75 13.9142 1.75 13.5V6.5C1.75 6.08579 2.08579 5.75 2.5 5.75H5.5V4.5H2.5C1.39543 4.5 0.5 5.39543 0.5 6.5V13.5C0.5 14.6046 1.39543 15.5 2.5 15.5H11.5C12.6046 15.5 13.5 14.6046 13.5 13.5V6.5C13.5 5.39543 12.6046 4.5 11.5 4.5H8.5V5.75Z",fill:"#808080"}})])])]}}])},[t._v(" "),n("span",[t._v(t._s(t.$t("情報をシェアする")))])]),t._v(" "),t.displayShare?n("div",{staticClass:"DataView-Share-Buttons py-2",on:{click:t.stopClosingShareMenu}},[n("div",{staticClass:"Close-Button"},[n("v-icon",{attrs:{"aria-label":t.$t("閉じる")},on:{click:t.closeShareMenu}},[t._v("\n        "+t._s(t.mdiClose)+"\n      ")])],1),t._v(" "),n("h4",[t._v(t._s(t.$t("埋め込み用コード")))]),t._v(" "),n("div",{staticClass:"EmbedCode"},[t.isCopyAvailable()?n("v-icon",{staticClass:"EmbedCode-Copy",attrs:{"aria-label":t.$t("クリップボードにコピー")},on:{click:t.copyEmbedCode}},[t._v(t._s(t.mdiClipboardOutline))]):t._e(),t._v("\n      "+t._s(t.graphEmbedValue)+"\n    ")],1),t._v(" "),n("div",{staticClass:"Buttons"},[n("button",{attrs:{"aria-label":t.$t("LINEで{title}のグラフをシェア",{title:t.title})},on:{click:t.line}},[t._m(0)]),t._v(" "),n("button",{attrs:{"aria-label":t.$t("Twitterで{title}のグラフをシェア",{title:t.title})},on:{click:t.twitter}},[t._m(1)]),t._v(" "),n("button",{attrs:{"aria-label":t.$t("facebookで{title}のグラフをシェア",{title:t.title})},on:{click:t.facebook}},[t._m(2)])])]):t._e(),t._v(" "),t.showOverlay?n("div",{staticClass:"overlay"},[n("div",{staticClass:"overlay-text"},[t._v("\n      "+t._s(t.$t("埋め込み用コードをコピーしました"))+"\n    ")])]):t._e()],1)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("picture",[n("source",{staticClass:"icon-resize line",attrs:{srcset:"/line.webp",type:"image/webp"}}),t._v(" "),n("img",{staticClass:"icon-resize line",attrs:{src:"/line.png",alt:"LINE"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("picture",[n("source",{staticClass:"icon-resize twitter",attrs:{srcset:"/twitter.webp",type:"image/webp"}}),t._v(" "),n("img",{staticClass:"icon-resize twitter",attrs:{src:"/twitter.png",alt:"Twitter"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("picture",[n("source",{staticClass:"icon-resize facebook",attrs:{srcset:"/facebook.webp",type:"image/webp"}}),t._v(" "),n("img",{staticClass:"icon-resize facebook",attrs:{src:"/facebook.png",alt:"facebook"}})])}],!1,null,null,null);e.default=component.exports;d()(component,{VIcon:f.a,VTooltip:h.a})},349:function(t,e,n){var content=n(358);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(24).default)("55e0e80f",content,!0,{sourceMap:!1})},350:function(t,e,n){var content=n(360);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(24).default)("56069591",content,!0,{sourceMap:!1})},351:function(t,e,n){"use strict";n(345)},352:function(t,e,n){var o=n(23)(!1);o.push([t.i,".v-expansion-panels{color:#4d4d4d}.v-expansion-panel-header{padding:5px 0}.v-expansion-panel-header__icon{margin-left:-5px!important}.v-expansion-panel-header__icon .v-icon--left{margin-right:5px}.v-expansion-panel--active .v-expansion-panel-header__icon .v-icon{transform:rotate(90deg)!important}.expansion-panel-text{font-size:1.2rem}",""]),t.exports=o},353:function(t,e,n){"use strict";n(346)},354:function(t,e,n){var o=n(23)(!1);o.push([t.i,".DataView-Share-Opener{cursor:pointer;margin:-14px;padding:14px}.DataView-Share-Opener:focus{outline:1px dotted #707070}.DataView-Share-Buttons{position:absolute;padding:8px;right:2rem;bottom:3em;width:240px;border:1px solid #d9d9d9;background:#fff!important;border-radius:8px;text-align:left;z-index:2;font-size:1.6rem}.DataView-Share-Buttons>*{padding:4px 0}.DataView-Share-Buttons>.Close-Button{display:flex;justify-content:flex-end;color:#707070}.DataView-Share-Buttons>.Close-Button button{border-radius:50%;border:1px solid #fff}.DataView-Share-Buttons>.Close-Button button:focus{border:1px dotted #707070;outline:none}.DataView-Share-Buttons>.EmbedCode{position:relative;padding:4px 30px 4px 4px;color:#030303;border:1px solid #eee;border-radius:8px;font-size:1.2rem}.DataView-Share-Buttons>.EmbedCode .EmbedCode-Copy{position:absolute;top:.3em;right:.3em;color:#707070}.DataView-Share-Buttons>.EmbedCode button{border-radius:50%;border:1px solid #eee}.DataView-Share-Buttons>.EmbedCode button:focus{border:1px dotted #707070;outline:none}.DataView-Share-Buttons>.Buttons{display:flex;justify-content:center;margin-top:4px}.DataView-Share-Buttons>.Buttons .icon-resize{border-radius:50%}.DataView-Share-Buttons>.Buttons .icon-resize.twitter{color:#fff;background:#2a96eb}.DataView-Share-Buttons>.Buttons .icon-resize.facebook{color:#364e8a}.DataView-Share-Buttons>.Buttons .icon-resize.line{color:#1cb127}.DataView-Share-Buttons>.Buttons button{width:30px;height:30px;margin-left:4px;margin-right:4px}.DataView-Share-Buttons>.Buttons button:focus{border-radius:50%;border:1px dotted #707070;outline:none}.overlay{position:absolute;display:flex;align-items:center;justify-content:center;z-index:1;top:0;left:0;width:100%;height:100%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;opacity:.8}.overlay>.overlay-text{text-align:center;padding:2em;width:60%;background:#4d4d4d;border-radius:8px;color:#fff!important;font-size:1.6rem}",""]),t.exports=o},355:function(t,e,n){"use strict";n(347)},356:function(t,e,n){var o=n(23)(!1);o.push([t.i,".DataView-DataSet{display:flex;width:100%;margin-bottom:10px}.DataView-DataSet-title{font-size:2rem;font-weight:400;flex:1 1 auto}.DataView-DataSet-title-HeaderLink{text-decoration:none;color:#4d4d4d!important}.DataView-DataSet-title-HeaderLink:hover{color:#008830!important}.DataView-DataSet-DataInfo{text-align:right}.DataView-DataSet-DataInfo-summary{flex:0 1 auto;display:inline-block;color:#4d4d4d;white-space:nowrap;font-style:normal;line-height:30px;font-size:3rem}.DataView-DataSet-DataInfo-summary .lTextBefore{margin-right:.5rem;font-size:1.5rem}.DataView-DataSet-DataInfo-summary strong{font-weight:600}.DataView-DataSet-DataInfo-summary-unit{width:100%;font-size:1.8rem}.DataView-DataSet-DataInfo-date{display:inline-block;width:100%;color:#707070;line-height:normal;font-size:1.2rem}.DataView-DataSet-DataInfo-SelfDisclosureForm>a{height:3rem;line-height:3rem;display:inline-block;font-size:1.1rem}",""]),t.exports=o},357:function(t,e,n){"use strict";n(349)},358:function(t,e,n){var o=n(23)(!1);o.push([t.i,".DataView{height:100%;background-color:#fff;box-shadow:0 0 2px rgba(0,0,0,.15);border:.5px solid #d9d9d9!important;border-radius:4px}.DataView-Header{display:flex;align-items:flex-start;flex-flow:column;padding:0 10px}@media screen and (min-width:769px){.DataView-Header{padding:0 5px}}@media screen and (min-width:1171px){.DataView-Header{justify-content:space-between;flex-flow:row;padding:0}.DataView-Header.with-dataSetPanel{flex-flow:column}}.DataView-Inner{display:flex;flex-flow:column;padding:22px;height:100%}@media screen and (max-width:600px){.DataView-Inner{padding:20px 15px}}.DataView-DataSetPanel{flex:1 0 auto;width:100%}.DataView-Content{margin:10px 0}.DataView-Space{margin-top:10px}.DataView-Description{margin-bottom:10px;color:#707070;font-size:1.2rem}.DataView-Description ol,.DataView-Description ul{list-style:disc inside;padding-left:1em}.DataView-Description ol li,.DataView-Description ul li{margin-left:1.5em;text-indent:-1.5em}.DataView-Footer{display:flex;justify-content:space-between;margin-top:auto;color:#707070;font-size:1.2rem}.DataView-Footer ol,.DataView-Footer ul{list-style-type:none;padding:0}.DataView-Footer .Permalink{color:#707070!important}.DataView-Footer .Footer-Right{display:flex;align-items:flex-end}.DataView-AttentionNote{margin:10px 0;padding:12px;background-color:#ffe200;border-radius:4px;color:#4d4d4d;font-size:1.2rem}.DataView-AttentionNote p{margin:0}",""]),t.exports=o},359:function(t,e,n){"use strict";n(350)},360:function(t,e,n){var o=n(23)(!1);o.push([t.i,".v-expansion-panels{color:#4d4d4d!important}.v-expansion-panel-header{padding:5px 0}.v-expansion-panel-header__icon{margin-left:-5px!important}.v-expansion-panel-header__icon .v-icon--left{margin-right:5px}.v-expansion-panel--active .v-expansion-panel-header__icon .v-icon{transform:rotate(90deg)!important}.expansion-panel-text{font-size:1.2rem}",""]),t.exports=o},384:function(t,e,n){"use strict";n(12),n(19),n(29),n(30);var o=n(3),r=(n(90),n(17),n(26),n(61),n(235),n(9),n(32),n(236),n(237),n(238),n(239),n(240),n(241),n(242),n(243),n(244),n(245),n(246),n(247),n(248),n(34),n(46),n(16),n(65),n(249),n(0)),l=n(165),c=n(8);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var h=["sm","md","lg","xl"],m=h.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{}),w=h.reduce((function(t,e){return t["offset"+Object(c.B)(e)]={type:[String,Number],default:null},t}),{}),v=h.reduce((function(t,e){return t["order"+Object(c.B)(e)]={type:[String,Number],default:null},t}),{}),x={col:Object.keys(m),offset:Object.keys(w),order:Object.keys(v)};function D(t,e,n){var o=t;if(null!=n&&!1!==n){if(e){var r=e.replace(t,"");o+="-".concat(r)}return"col"!==t||""!==n&&!0!==n?(o+="-".concat(n)).toLowerCase():o.toLowerCase()}}var _=new Map;e.a=r.a.extend({name:"v-col",functional:!0,props:f(f(f(f({cols:{type:[Boolean,String,Number],default:!1}},m),{},{offset:{type:[String,Number],default:null}},w),{},{order:{type:[String,Number],default:null}},v),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var n=e.props,data=e.data,r=e.children,c=(e.parent,"");for(var d in n)c+=String(n[d]);var f=_.get(c);return f||function(){var t,e;for(e in f=[],x)x[e].forEach((function(t){var o=n[t],r=D(e,t,o);r&&f.push(r)}));var r=f.some((function(t){return t.startsWith("col-")}));f.push((t={col:!r||!n.cols},Object(o.a)(t,"col-".concat(n.cols),n.cols),Object(o.a)(t,"offset-".concat(n.offset),n.offset),Object(o.a)(t,"order-".concat(n.order),n.order),Object(o.a)(t,"align-self-".concat(n.alignSelf),n.alignSelf),t)),_.set(c,f)}(),t(n.tag,Object(l.a)(data,{class:f}),r)}})},421:function(t,e,n){var content=n(488);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(24).default)("0ffcf5da",content,!0,{sourceMap:!1})},448:function(t,e,n){"use strict";n.r(e);n(31),n(16);var o=n(0),r=n(81),l=n(341),c=n(340),d=n(343),f=n(342),h={components:{AppLink:r.default,DataView:l.default,DataViewDataSetPanel:c.default,DataViewExpansionPanel:d.default,NotesExpansionPanel:f.default},props:{title:{type:String,default:""},titleId:{type:String,required:!1,default:""},date:{type:String,required:!0,default:""},items:{type:Array,required:!0,default:function(){}}},mounted:function(){var t=this.$refs.displayedTable.$el.querySelectorAll("table");Array.prototype.slice.call(t,0).forEach((function(table){table.setAttribute("tabindex","0")}))}},m=o.a.extend(h),w=(n(487),n(10)),v=n(44),x=n.n(v),D=n(694),component=Object(w.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("data-view",{attrs:{title:t.title,"title-id":t.titleId,date:t.date},scopedSlots:t._u([{key:"notes",fn:function(){return[n("notes-expansion-panel",{staticClass:"DataView-ExpansionPanel",attrs:{"expansion-panel-text":t.$t("Common.注")},scopedSlots:t._u([{key:"notes",fn:function(){return[t._t("notes")]},proxy:!0}],null,!0)})]},proxy:!0},{key:"dataSetPanel",fn:function(){return[n("data-view-data-set-panel",{attrs:{title:t.title,"card-path":"/cards/"+t.titleId}})]},proxy:!0}])},[n("div",{staticClass:"WhatsNew-Content"},[n("v-data-table",{ref:"displayedTable",staticClass:"cardTable",attrs:{items:t.items,"mobile-breakpoint":0,"hide-default-header":"","footer-props":{"items-per-page-options":[10,30,50,100,200,300,-1],"items-per-page-text":t.$t("DataView_Footer[0]")}},scopedSlots:t._u([{key:"body",fn:function(e){var o=e.items;return[n("tbody",t._l(o,(function(e,i){return n("tr",{key:i},[n("td",{staticClass:"text-start"},[e.url?[n("app-link",{attrs:{to:e.url,"show-icon":!1}},[t._v("\n                  "+t._s(e.icon)+"\n                  "+t._s(e.text)+"\n                ")])]:[t._v("\n                "+t._s(e.text)+"\n              ")]],2),t._v(" "),n("td",{staticClass:"text-end text-no-wrap"},[n("span",[t._v(t._s(e.date))])])])})),0)]}},{key:"footer.page-text",fn:function(e){return[t._v("\n        "+t._s(t.$t("DataView_Footer[1]",{itemsLength:e.itemsLength,pageStart:e.pageStart,pageStop:e.pageStop}))+"\n      ")]}}])})],1)])}),[],!1,null,null,null);e.default=component.exports;x()(component,{AppLink:n(81).default,NotesExpansionPanel:n(342).default,DataViewDataSetPanel:n(340).default,DataView:n(341).default}),x()(component,{VDataTable:D.a})},487:function(t,e,n){"use strict";n(421)},488:function(t,e,n){var o=n(23)(!1);o.push([t.i,".WhatsNew-Content .cardTable table tbody tr td{padding:10px!important;font-size:1.2rem}",""]),t.exports=o},530:function(t){t.exports=JSON.parse('{"newsItems":[{"date":"2020-07-31T00:00:00+09:00","icon":"🍀","url":{"ja":"https://www.pref.iwate.jp/kurashikankyou/iryou/covid19/1032521.html","en":null},"text":{"ja":"人権に配慮し、差別・偏見・誹謗中傷はやめましょう","en":null}},{"date":"2020-11-29T00:00:00+09:00","icon":"📺","url":{"ja":"https://www.youtube.com/watch?v=ewGUZq-Ku-c","en":null},"text":{"ja":"盛岡市保健所 矢野所長 メッセージ (記者会見)","en":null}},{"date":"2020-12-08T00:00:00+09:00","icon":"📄","url":{"ja":"https://www.pref.iwate.jp/_res/projects/default_project/_page_/001/034/435/20201022dai6kai.pdf","en":null},"text":{"ja":"いわて医療福祉施設等クラスター制御タスクフォース(ICAT)とは","en":null}},{"date":"2021-03-04T00:00:00+09:00","icon":"📄","url":{"ja":"https://www.pref.wakayama.lg.jp/chiji/message/20210304.html","en":null},"text":{"ja":"[他県] 和歌山県知事 データで見るコロナ対策の急所","en":null}},{"date":"2021-03-03T00:00:00+09:00","icon":"📄","url":{"ja":"https://www.pref.iwate.jp/kurashikankyou/iryou/covid19/1037252.html","en":null},"text":{"ja":"新型コロナウイルスワクチン接種に関する情報","en":null}},{"date":"2021-05-07T00:00:00+09:00","icon":"📄","url":{"ja":"https://www.pref.iwate.jp/kurashikankyou/iryou/kenkou/jouhou/1035134.html#33","en":null},"text":{"ja":"岩手県 新型コロナウイルス感染症対策本部 第33回 本部員会議","en":null}},{"date":"2021-04-13T00:00:00+09:00","icon":"📄","url":{"ja":"https://www.pref.iwate.jp/kurashikankyou/iryou/covid19/1041382.html","en":null},"text":{"ja":"県や国などの支援策 まとめ","en":null}}]}')},610:function(t,e,n){"use strict";n.r(e);n(45);var o=n(14),r=n.n(o),l=n(0),c=n(448),d=n(530),f={components:{WhatsNew:c.default},props:{md:{type:String,default:"6"}},data:function(){var t=this,e={newsItems:[]};return e.newsItems=d.newsItems.sort((function(a,b){return r()(a.date).isBefore(r()(b.date))?1:-1})).map((function(e){var n,o,l=t.$i18n.locale;return{date:t.$d(r()(e.date).toDate(),"dateWithoutYear"),icon:e.icon,text:null!==(n=e.text[l])&&void 0!==n?n:e.text.ja,url:null!==(o=e.url[l])&&void 0!==o?o:e.url.ja}})),{newsItems:e,date:r()(d.newsItems.sort((function(a,b){return r()(a.date).isBefore(r()(b.date))?1:-1}))[0].date).format()}}},h=l.a.extend(f),m=n(10),w=n(44),v=n.n(w),x=n(384),component=Object(m.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-col",{staticClass:"DataCard",attrs:{id:"WhatsNewCard",cols:"12",md:t.md}},[n("client-only",[n("whats-new",{attrs:{title:t.$t("WhatsNewCard.title"),"title-id":"whats-new",date:t.date,items:t.newsItems.newsItems}}),t._v(" "),t._t("breadCrumb")],2)],1)}),[],!1,null,null,null);e.default=component.exports;v()(component,{WhatsNew:n(448).default}),v()(component,{VCol:x.a})}}]);