(window.webpackJsonp=window.webpackJsonp||[]).push([[82,38],{339:function(t,e,n){"use strict";n.r(e);var o=n(0),r=n(81),l=o.a.extend({components:{AppLink:r.default},props:{title:{type:String,required:!0,default:""},lTextBefore:{type:String,required:!1,default:""},lText:{type:String,required:!1,default:""},sText:{type:String,required:!1,default:""},unit:{type:String,required:!1,default:""},cardPath:{type:String,required:!0},selfDisclosureForm:{type:Boolean,required:!1,default:!1}}}),c=(n(354),n(10)),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"DataView-DataSet"},[n("h3",{staticClass:"DataView-DataSet-title"},[n("app-link",{staticClass:"DataView-DataSet-title-HeaderLink",attrs:{to:t.localePath(t.cardPath)}},[t._v("\n      "+t._s(t.title)+"\n    ")])],1),t._v(" "),n("div",{staticClass:"DataView-DataSet-DataInfo"},[""!==t.lText?n("span",{staticClass:"DataView-DataSet-DataInfo-summary"},[n("span",{staticClass:"lTextBefore"},[t._v("\n        "+t._s(t.lTextBefore)+"\n      ")]),t._v(" "),n("strong",[t._v("\n        "+t._s(t.lText)+"\n      ")]),t._v(" "),n("small",{staticClass:"DataView-DataSet-DataInfo-summary-unit"},[t._v("\n        "+t._s(t.unit)+"\n      ")])]):t._e(),t._v(" "),""!==t.lText?n("br"):t._e(),t._v(" "),""!==t.sText?n("small",{staticClass:"DataView-DataSet-DataInfo-date"},[t._v("\n      "+t._s(t.sText)+"\n    ")]):t._e(),t._v(" "),t.selfDisclosureForm?n("div",{staticClass:"DataView-DataSet-DataInfo-SelfDisclosureForm"},[n("app-link",{attrs:{to:"https://forms.gle/JHB4HJ2c4NnPcmy69"}},[t._v("\n        情報提供フォーム\n      ")])],1):t._e()])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{AppLink:n(81).default})},340:function(t,e,n){"use strict";n.r(e);var o=n(0),r=n(342),l=n(347),c=n(127),d=o.a.extend({components:{DataViewExpansionPanel:r.default,DataViewShare:l.default},props:{title:{type:String,default:""},titleId:{type:String,default:""},date:{type:String,default:""},headTitle:{type:String,default:""}},head:function(){return this.$route.params.card?{title:this.headTitle?this.headTitle:this.title,meta:[{hid:"og:title",property:"og:title",content:this.headTitle?this.headTitle:this.title},{hid:"description",name:"description",content:this.date},{hid:"og:description",property:"og:description",content:this.date}]}:{}},computed:{formattedDate:function(){return Object(c.c)(this.date)},formattedDateForDisplay:function(){return this.$d(new Date(this.date),"dateTime")},permalink:function(){var t="/cards/".concat(this.titleId);return this.localePath(t)}}}),f=(n(356),n(10)),h=n(44),m=n.n(h),_=n(702),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{staticClass:"DataView"},[n("div",{staticClass:"DataView-Inner"},[n("div",{staticClass:"DataView-Header"},[t.$slots.dataSetPanel?n("div",{staticClass:"DataView-DataSetPanel"},[t._t("dataSetPanel")],2):t._e()]),t._v(" "),t.$slots.attentionNote?n("div",{staticClass:"DataView-AttentionNote"},[t._t("attentionNote")],2):t._e(),t._v(" "),n("div",{staticClass:"DataView-Description"},[t._t("description")],2),t._v(" "),n("div",[t._t("button")],2),t._v(" "),n("div",{staticClass:"DataView-Content"},[t._t("default")],2),t._v(" "),n("div",{staticClass:"DataView-Description DataView-Description--Additional"},[t.$slots.dataTable?n("data-view-expansion-panel",{staticClass:"DataView-ExpansionPanel"},[t._t("dataTable")],2):t._e()],1),t._v(" "),n("div",{staticClass:"DataView-Description DataView-Description--Additional"},[t._t("notes")],2),t._v(" "),n("div",{staticClass:"DataView-Description DataView-Description--Additional"},[t._t("additionalDescription")],2),t._v(" "),n("div",{staticClass:"DataView-Space"}),t._v(" "),n("div",{staticClass:"DataView-Footer"},[n("div",[t._t("footer"),t._v(" "),n("div",[n("a",{staticClass:"Permalink",attrs:{href:t.permalink}},[n("time",{attrs:{datetime:t.formattedDate}},[t._v("\n              "+t._s(t.$t("{date} 更新",{date:t.formattedDateForDisplay}))+"\n            ")])])])],2),t._v(" "),"true"!=t.$route.query.embed?n("data-view-share",{staticClass:"Footer-Right",attrs:{title:t.title,"title-id":t.titleId}}):t._e()],1)])])}),[],!1,null,null,null);e.default=component.exports;m()(component,{DataViewExpansionPanel:n(342).default,DataViewShare:n(347).default}),m()(component,{VCard:_.a})},341:function(t,e,n){"use strict";n.r(e);var o=n(39),r=n(0),l=n(343),c=r.a.extend({props:{expansionPanelText:{type:String,required:!0}},data:function(){return{showDetails:!1,mdiChevronRight:o.d}},mounted:function(){this.showDetails=!0},methods:{toggleDetails:function(){l.a.$emit(l.b,{dataView:this.$parent})}}}),d=(n(358),n(10)),f=n(44),h=n.n(f),m=n(622),_=n(623),v=n(624),x=n(625),y=n(331),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.$slots.notes?n("div",{staticClass:"NotesExpansionPanel"},[t.showDetails?n("v-expansion-panels",{attrs:{flat:""}},[n("v-expansion-panel",[n("v-expansion-panel-header",{style:{transition:"none"},attrs:{"hide-actions":!0},on:{click:t.toggleDetails}},[n("div",{staticClass:"v-expansion-panel-header__icon grey--text text--darken-2"},[n("v-icon",{attrs:{left:"",size:"24"}},[t._v(t._s(t.mdiChevronRight))])],1),t._v(" "),n("span",{staticClass:"expansion-panel-text grey--text text--darken-2"},[t._v("\n          "+t._s(t.expansionPanelText)+"\n        ")])]),t._v(" "),n("v-expansion-panel-content",{staticClass:"grey--text text--darken-2"},[t._t("notes")],2)],1)],1):[t._t("notes")]],2):t._e()}),[],!1,null,null,null);e.default=component.exports;h()(component,{VExpansionPanel:m.a,VExpansionPanelContent:_.a,VExpansionPanelHeader:v.a,VExpansionPanels:x.a,VIcon:y.a})},342:function(t,e,n){"use strict";n.r(e);var o=n(39),r=n(0),l=n(343),c=r.a.extend({data:function(){return{showDetails:!1,mdiChevronRight:o.d}},mounted:function(){this.showDetails=!0},methods:{toggleDetails:function(){l.a.$emit(l.b,{dataView:this.$parent})}}}),d=(n(350),n(10)),f=n(44),h=n.n(f),m=n(622),_=n(623),v=n(624),x=n(625),y=n(331),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"DataViewExpansionPanel"},[t.showDetails?n("v-expansion-panels",{attrs:{flat:""}},[n("v-expansion-panel",[n("v-expansion-panel-header",{style:{transition:"none"},attrs:{"hide-actions":!0},on:{click:t.toggleDetails}},[n("div",{staticClass:"v-expansion-panel-header__icon grey--text text--darken-2"},[n("v-icon",{attrs:{left:"",size:"24"}},[t._v(t._s(t.mdiChevronRight))])],1),t._v(" "),n("span",{staticClass:"expansion-panel-text grey--text text--darken-2"},[t._v("\n          "+t._s(t.$t("Common.データを表示"))+"\n        ")])]),t._v(" "),n("v-expansion-panel-content",{staticClass:"grey--text text--darken-2"},[t._t("default")],2)],1)],1):[t._t("default")]],2)}),[],!1,null,null,null);e.default=component.exports;h()(component,{VExpansionPanel:m.a,VExpansionPanelContent:_.a,VExpansionPanelHeader:v.a,VExpansionPanels:x.a,VIcon:y.a})},344:function(t,e,n){var content=n(351);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(24).default)("114c0959",content,!0,{sourceMap:!1})},345:function(t,e,n){var content=n(353);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(24).default)("487710d1",content,!0,{sourceMap:!1})},346:function(t,e,n){var content=n(355);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(24).default)("0e424632",content,!0,{sourceMap:!1})},347:function(t,e,n){"use strict";n.r(e);n(64),n(25);var o=n(39),r=n(0).a.extend({props:{title:{type:String,default:""},titleId:{type:String,default:""}},data:function(){return{openGraphEmbed:!1,displayShare:!1,showOverlay:!1,mdiClipboardOutline:o.e,mdiClose:o.f}},computed:{graphEmbedValue:function(){var t='<iframe width="560" height="315" src="'.concat(this.permalink(!0,!0),'" frameborder="0"></iframe>');return t}},watch:{displayShare:function(t){t?document.documentElement.addEventListener("click",this.toggleShareMenu):document.documentElement.removeEventListener("click",this.toggleShareMenu)}},methods:{toggleShareMenu:function(t){t.stopPropagation(),this.displayShare=!this.displayShare},closeShareMenu:function(){this.displayShare=!1},isCopyAvailable:function(){return!!navigator.clipboard},copyEmbedCode:function(){var t=this;navigator.clipboard.writeText(this.graphEmbedValue).then((function(){t.closeShareMenu(),t.showOverlay=!0,setTimeout((function(){t.showOverlay=!1}),2e3)}))},stopClosingShareMenu:function(t){t.stopPropagation()},permalink:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],embed=arguments.length>1&&void 0!==arguments[1]&&arguments[1],e="/cards/".concat(this.titleId,"/");return embed&&(e="".concat(e,"?embed=true")),e=this.localePath(e),t&&(e="".concat(location.protocol,"//").concat(location.host).concat(e)),e},twitter:function(){var t="https://twitter.com/intent/tweet?text=".concat(this.title," / ").concat(this.$t("Common.岩手県"),"\n      ").concat(this.$t("Common.新型コロナウイルス感染症"),"\n      ").concat(this.$t("Common.対策サイト"),"&url=").concat(this.permalink(!0),"&hashtags=StopCovid19JP");window.open(t)},facebook:function(){var t="https://www.facebook.com/sharer.php?u=".concat(this.permalink(!0));window.open(t)},line:function(){var t="https://social-plugins.line.me/lineit/share?url=".concat(this.permalink(!0));window.open(t)}}}),l=(n(352),n(10)),c=n(44),d=n.n(c),f=n(331),h=n(636),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-tooltip",{attrs:{left:"","nudge-right":"20","nudge-bottom":"4"},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("button",t._g({staticClass:"DataView-Share-Opener",on:{click:t.toggleShareMenu}},o),[n("svg",{attrs:{width:"14",height:"16",viewBox:"0 0 14 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",role:"img","aria-label":t.$t("{title}のグラフをシェア",{title:t.title})}},[n("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M7.59999 3.5H9.5L7 0.5L4.5 3.5H6.39999V11H7.59999V3.5ZM8.5 5.75H11.5C11.9142 5.75 12.25 6.08579 12.25 6.5V13.5C12.25 13.9142 11.9142 14.25 11.5 14.25H2.5C2.08579 14.25 1.75 13.9142 1.75 13.5V6.5C1.75 6.08579 2.08579 5.75 2.5 5.75H5.5V4.5H2.5C1.39543 4.5 0.5 5.39543 0.5 6.5V13.5C0.5 14.6046 1.39543 15.5 2.5 15.5H11.5C12.6046 15.5 13.5 14.6046 13.5 13.5V6.5C13.5 5.39543 12.6046 4.5 11.5 4.5H8.5V5.75Z",fill:"#808080"}})])])]}}])},[t._v(" "),n("span",[t._v(t._s(t.$t("情報をシェアする")))])]),t._v(" "),t.displayShare?n("div",{staticClass:"DataView-Share-Buttons py-2",on:{click:t.stopClosingShareMenu}},[n("div",{staticClass:"Close-Button"},[n("v-icon",{attrs:{"aria-label":t.$t("閉じる")},on:{click:t.closeShareMenu}},[t._v("\n        "+t._s(t.mdiClose)+"\n      ")])],1),t._v(" "),n("h4",[t._v(t._s(t.$t("埋め込み用コード")))]),t._v(" "),n("div",{staticClass:"EmbedCode"},[t.isCopyAvailable()?n("v-icon",{staticClass:"EmbedCode-Copy",attrs:{"aria-label":t.$t("クリップボードにコピー")},on:{click:t.copyEmbedCode}},[t._v(t._s(t.mdiClipboardOutline))]):t._e(),t._v("\n      "+t._s(t.graphEmbedValue)+"\n    ")],1),t._v(" "),n("div",{staticClass:"Buttons"},[n("button",{attrs:{"aria-label":t.$t("LINEで{title}のグラフをシェア",{title:t.title})},on:{click:t.line}},[t._m(0)]),t._v(" "),n("button",{attrs:{"aria-label":t.$t("Twitterで{title}のグラフをシェア",{title:t.title})},on:{click:t.twitter}},[t._m(1)]),t._v(" "),n("button",{attrs:{"aria-label":t.$t("facebookで{title}のグラフをシェア",{title:t.title})},on:{click:t.facebook}},[t._m(2)])])]):t._e(),t._v(" "),t.showOverlay?n("div",{staticClass:"overlay"},[n("div",{staticClass:"overlay-text"},[t._v("\n      "+t._s(t.$t("埋め込み用コードをコピーしました"))+"\n    ")])]):t._e()],1)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("picture",[n("source",{staticClass:"icon-resize line",attrs:{srcset:"/line.webp",type:"image/webp"}}),t._v(" "),n("img",{staticClass:"icon-resize line",attrs:{src:"/line.png",alt:"LINE"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("picture",[n("source",{staticClass:"icon-resize twitter",attrs:{srcset:"/twitter.webp",type:"image/webp"}}),t._v(" "),n("img",{staticClass:"icon-resize twitter",attrs:{src:"/twitter.png",alt:"Twitter"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("picture",[n("source",{staticClass:"icon-resize facebook",attrs:{srcset:"/facebook.webp",type:"image/webp"}}),t._v(" "),n("img",{staticClass:"icon-resize facebook",attrs:{src:"/facebook.png",alt:"facebook"}})])}],!1,null,null,null);e.default=component.exports;d()(component,{VIcon:f.a,VTooltip:h.a})},348:function(t,e,n){var content=n(357);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(24).default)("55e0e80f",content,!0,{sourceMap:!1})},349:function(t,e,n){var content=n(359);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(24).default)("56069591",content,!0,{sourceMap:!1})},350:function(t,e,n){"use strict";n(344)},351:function(t,e,n){var o=n(23)(!1);o.push([t.i,".v-expansion-panels{color:#404040}.v-expansion-panel-header{padding:5px 0}.v-expansion-panel-header__icon{margin-left:-5px!important}.v-expansion-panel-header__icon .v-icon--left{margin-right:5px}.v-expansion-panel--active .v-expansion-panel-header__icon .v-icon{transform:rotate(90deg)!important}.expansion-panel-text{font-size:1.2rem}",""]),t.exports=o},352:function(t,e,n){"use strict";n(345)},353:function(t,e,n){var o=n(23)(!1);o.push([t.i,".DataView-Share-Opener{cursor:pointer;margin:-14px;padding:14px}.DataView-Share-Opener:focus{outline:1px dotted #707070}.DataView-Share-Buttons{position:absolute;padding:8px;right:2rem;bottom:3em;width:240px;border:1px solid #d9d9d9;background:#fff!important;border-radius:8px;text-align:left;z-index:2;font-size:1.6rem}.DataView-Share-Buttons>*{padding:4px 0}.DataView-Share-Buttons>.Close-Button{display:flex;justify-content:flex-end;color:#707070}.DataView-Share-Buttons>.Close-Button button{border-radius:50%;border:1px solid #fff}.DataView-Share-Buttons>.Close-Button button:focus{border:1px dotted #707070;outline:none}.DataView-Share-Buttons>.EmbedCode{position:relative;padding:4px 30px 4px 4px;color:#030303;border:1px solid #eee;border-radius:8px;font-size:1.2rem}.DataView-Share-Buttons>.EmbedCode .EmbedCode-Copy{position:absolute;top:.3em;right:.3em;color:#707070}.DataView-Share-Buttons>.EmbedCode button{border-radius:50%;border:1px solid #eee}.DataView-Share-Buttons>.EmbedCode button:focus{border:1px dotted #707070;outline:none}.DataView-Share-Buttons>.Buttons{display:flex;justify-content:center;margin-top:4px}.DataView-Share-Buttons>.Buttons .icon-resize{border-radius:50%}.DataView-Share-Buttons>.Buttons .icon-resize.twitter{color:#fff;background:#2a96eb}.DataView-Share-Buttons>.Buttons .icon-resize.facebook{color:#364e8a}.DataView-Share-Buttons>.Buttons .icon-resize.line{color:#1cb127}.DataView-Share-Buttons>.Buttons button{width:30px;height:30px;margin-left:4px;margin-right:4px}.DataView-Share-Buttons>.Buttons button:focus{border-radius:50%;border:1px dotted #707070;outline:none}.overlay{position:absolute;display:flex;align-items:center;justify-content:center;z-index:1;top:0;left:0;width:100%;height:100%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;opacity:.8}.overlay>.overlay-text{text-align:center;padding:2em;width:60%;background:#404040;border-radius:8px;color:#fff!important;font-size:1.6rem}",""]),t.exports=o},354:function(t,e,n){"use strict";n(346)},355:function(t,e,n){var o=n(23)(!1);o.push([t.i,".DataView-DataSet{display:flex;width:100%;margin-bottom:10px}.DataView-DataSet-title{font-size:2rem;font-weight:400;flex:1 1 auto}.DataView-DataSet-title-HeaderLink{text-decoration:none;color:#404040!important}.DataView-DataSet-title-HeaderLink:hover{color:#03832d!important}.DataView-DataSet-DataInfo{text-align:right}.DataView-DataSet-DataInfo-summary{flex:0 1 auto;display:inline-block;color:#404040;white-space:nowrap;font-style:normal;line-height:30px;font-size:3rem}.DataView-DataSet-DataInfo-summary .lTextBefore{margin-right:.5rem;font-size:1.5rem}.DataView-DataSet-DataInfo-summary strong{font-weight:600}.DataView-DataSet-DataInfo-summary-unit{width:100%;font-size:1.8rem}.DataView-DataSet-DataInfo-date{display:inline-block;width:100%;color:#707070;line-height:normal;font-size:1.2rem}.DataView-DataSet-DataInfo-SelfDisclosureForm>a{height:3rem;line-height:3rem;display:inline-block;font-size:1.1rem}",""]),t.exports=o},356:function(t,e,n){"use strict";n(348)},357:function(t,e,n){var o=n(23)(!1);o.push([t.i,".DataView{height:100%;background-color:#fff;box-shadow:0 0 2px rgba(0,0,0,.15);border:.5px solid #d9d9d9!important;border-radius:4px}.DataView-Header{display:flex;align-items:flex-start;flex-flow:column;padding:0 10px}@media screen and (min-width:769px){.DataView-Header{padding:0 5px}}@media screen and (min-width:1171px){.DataView-Header{justify-content:space-between;flex-flow:row;padding:0}.DataView-Header.with-dataSetPanel{flex-flow:column}}.DataView-Inner{display:flex;flex-flow:column;padding:22px;height:100%}@media screen and (max-width:600px){.DataView-Inner{padding:15px 12px}}.DataView-DataSetPanel{flex:1 0 auto;width:100%}.DataView-Content{margin:10px 0}.DataView-Space{margin-top:10px}.DataView-Description{margin-bottom:10px;color:#707070;font-size:1.2rem}.DataView-Description ol,.DataView-Description ul{list-style:disc inside;padding-left:1em}.DataView-Description ol li,.DataView-Description ul li{margin-left:1.5em;text-indent:-1.5em}.DataView-Footer{display:flex;justify-content:space-between;margin-top:auto;color:#707070;font-size:1.2rem}.DataView-Footer ol,.DataView-Footer ul{list-style-type:none;padding:0}.DataView-Footer .Permalink{color:#707070!important}.DataView-Footer .Footer-Right{display:flex;align-items:flex-end}.DataView-AttentionNote{margin:10px 0;padding:12px;background-color:#ffe200;border-radius:4px;color:#404040;font-size:1.2rem}.DataView-AttentionNote p{margin:0}",""]),t.exports=o},358:function(t,e,n){"use strict";n(349)},359:function(t,e,n){var o=n(23)(!1);o.push([t.i,".v-expansion-panels{color:#404040!important}.v-expansion-panel-header{padding:5px 0}.v-expansion-panel-header__icon{margin-left:-5px!important}.v-expansion-panel-header__icon .v-icon--left{margin-right:5px}.v-expansion-panel--active .v-expansion-panel-header__icon .v-icon{transform:rotate(90deg)!important}.expansion-panel-text{font-size:1.2rem}",""]),t.exports=o},383:function(t,e,n){"use strict";n(12),n(19),n(29),n(30);var o=n(3),r=(n(90),n(17),n(26),n(61),n(234),n(9),n(32),n(235),n(236),n(237),n(238),n(239),n(240),n(241),n(242),n(243),n(244),n(245),n(246),n(247),n(34),n(46),n(16),n(65),n(248),n(0)),l=n(164),c=n(8);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var h=["sm","md","lg","xl"],m=h.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{}),_=h.reduce((function(t,e){return t["offset"+Object(c.B)(e)]={type:[String,Number],default:null},t}),{}),v=h.reduce((function(t,e){return t["order"+Object(c.B)(e)]={type:[String,Number],default:null},t}),{}),x={col:Object.keys(m),offset:Object.keys(_),order:Object.keys(v)};function y(t,e,n){var o=t;if(null!=n&&!1!==n){if(e){var r=e.replace(t,"");o+="-".concat(r)}return"col"!==t||""!==n&&!0!==n?(o+="-".concat(n)).toLowerCase():o.toLowerCase()}}var w=new Map;e.a=r.a.extend({name:"v-col",functional:!0,props:f(f(f(f({cols:{type:[Boolean,String,Number],default:!1}},m),{},{offset:{type:[String,Number],default:null}},_),{},{order:{type:[String,Number],default:null}},v),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var n=e.props,data=e.data,r=e.children,c=(e.parent,"");for(var d in n)c+=String(n[d]);var f=w.get(c);return f||function(){var t,e;for(e in f=[],x)x[e].forEach((function(t){var o=n[t],r=y(e,t,o);r&&f.push(r)}));var r=f.some((function(t){return t.startsWith("col-")}));f.push((t={col:!r||!n.cols},Object(o.a)(t,"col-".concat(n.cols),n.cols),Object(o.a)(t,"offset-".concat(n.offset),n.offset),Object(o.a)(t,"order-".concat(n.order),n.order),Object(o.a)(t,"align-self-".concat(n.alignSelf),n.alignSelf),t)),w.set(c,f)}(),t(n.tag,Object(l.a)(data,{class:f}),r)}})},426:function(t){t.exports=JSON.parse('{"date":"2021-05-22T12:39:52+09:00","datasets":{"date":"2021-05-22T12:39:52+09:00","data":[{"code":"032018","area":"岩手県","label":"盛岡市","ruby":"もりおかし","count":480,"count_per_population":"0.165"},{"code":"032026","area":"岩手県","label":"宮古市","ruby":"みやこし","count":69,"count_per_population":"0.135"},{"code":"032034","area":"岩手県","label":"大船渡市","ruby":"おおふなとし","count":30,"count_per_population":"0.086"},{"code":"032051","area":"岩手県","label":"花巻市","ruby":"はなまきし","count":56,"count_per_population":"0.060"},{"code":"032069","area":"岩手県","label":"北上市","ruby":"きたかみし","count":43,"count_per_population":"0.047"},{"code":"032077","area":"岩手県","label":"久慈市","ruby":"くじし","count":21,"count_per_population":"0.064"},{"code":"032085","area":"岩手県","label":"遠野市","ruby":"とおのし","count":6,"count_per_population":"0.024"},{"code":"032093","area":"岩手県","label":"一関市","ruby":"いちのせきし","count":76,"count_per_population":"0.068"},{"code":"032107","area":"岩手県","label":"陸前高田市","ruby":"りくぜんたかたし","count":6,"count_per_population":"0.033"},{"code":"032115","area":"岩手県","label":"釜石市","ruby":"かまいしし","count":13,"count_per_population":"0.039"},{"code":"032131","area":"岩手県","label":"二戸市","ruby":"にのへし","count":0,"count_per_population":"0.000"},{"code":"032140","area":"岩手県","label":"八幡平市","ruby":"はちまんたいし","count":1,"count_per_population":"0.004"},{"code":"032158","area":"岩手県","label":"奥州市","ruby":"おうしゅうし","count":148,"count_per_population":"0.131"},{"code":"032166","area":"岩手県","label":"滝沢市","ruby":"たきざわし","count":101,"count_per_population":"0.181"},{"code":"033014","area":"岩手県","label":"雫石町","ruby":"しずくいしちょう","count":81,"count_per_population":"0.516"},{"code":"033022","area":"岩手県","label":"葛巻町","ruby":"くずまきまち","count":1,"count_per_population":"0.018"},{"code":"033031","area":"岩手県","label":"岩手町","ruby":"いわてまち","count":1,"count_per_population":"0.008"},{"code":"033219","area":"岩手県","label":"紫波町","ruby":"しわちょう","count":6,"count_per_population":"0.019"},{"code":"033227","area":"岩手県","label":"矢巾町","ruby":"やはばちょう","count":16,"count_per_population":"0.058"},{"code":"033669","area":"岩手県","label":"西和賀町","ruby":"にしわがまち","count":2,"count_per_population":"0.039"},{"code":"033812","area":"岩手県","label":"金ケ崎町","ruby":"かねがさきちょう","count":0,"count_per_population":"0.000"},{"code":"034029","area":"岩手県","label":"平泉町","ruby":"ひらいずみちょう","count":0,"count_per_population":"0.000"},{"code":"034410","area":"岩手県","label":"住田町","ruby":"すみたちょう","count":5,"count_per_population":"0.099"},{"code":"034614","area":"岩手県","label":"大槌町","ruby":"おおつちちょう","count":0,"count_per_population":"0.000"},{"code":"034827","area":"岩手県","label":"山田町","ruby":"やまだまち","count":1,"count_per_population":"0.007"},{"code":"034835","area":"岩手県","label":"岩泉町","ruby":"いわいずみちょう","count":0,"count_per_population":"0.000"},{"code":"034843","area":"岩手県","label":"田野畑村","ruby":"たのはたむら","count":3,"count_per_population":"0.099"},{"code":"034851","area":"岩手県","label":"普代村","ruby":"ふだいむら","count":0,"count_per_population":"0.000"},{"code":"035017","area":"岩手県","label":"軽米町","ruby":"かるまいまち","count":1,"count_per_population":"0.012"},{"code":"035033","area":"岩手県","label":"野田村","ruby":"のだむら","count":0,"count_per_population":"0.000"},{"code":"035068","area":"岩手県","label":"九戸村","ruby":"くのへむら","count":0,"count_per_population":"0.000"},{"code":"035076","area":"岩手県","label":"洋野町","ruby":"ひろのちょう","count":10,"count_per_population":"0.067"},{"code":"035246","area":"岩手県","label":"一戸町","ruby":"いちのへまち","count":4,"count_per_population":"0.035"},{"code":"999999","area":"県外","label":"県外","ruby":"けんがい","count":25,"count_per_population":null}]}}')},441:function(t,e,n){"use strict";n.r(e);n(31),n(16);var o=n(0),r=n(340),l=n(339),c=n(341),d=o.a.extend({components:{DataView:r.default,DataViewDataSetPanel:l.default,NotesExpansionPanel:c.default},props:{title:{type:String,default:""},titleId:{type:String,default:""},chartData:{type:Object,default:function(){}},date:{type:String,default:""},info:{type:Object,default:function(){}}},mounted:function(){var t=this.$refs.displayedTable.$el.querySelectorAll("table");Array.prototype.slice.call(t,0).forEach((function(table){table.setAttribute("tabindex","0")}))},methods:{customSort:function(t,e,n){return t.sort((function(a,b){var t;if("999999"===a.code)return 1;if("999999"===b.code)return-1;switch(e[0]){case"label":t=a.ruby<b.ruby?-1:1;break;case"count":t=parseInt(a.count)<parseInt(b.count)?-1:1;break;case"count_per_population":t=parseFloat(a.count_per_population)<parseFloat(b.count_per_population)?-1:1;break;case"last7days":t=parseInt(a.last7days)<parseInt(b.last7days)?-1:1;break;case"last7_per_100k":t=parseFloat(a.last7_per_100k)<parseFloat(b.last7_per_100k)?-1:1;break;default:t=parseInt(a.code)-parseInt(b.code)}return n[0]?-1*t:t})),t}}}),f=n(10),h=n(44),m=n.n(h),_=n(706),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("data-view",{attrs:{title:t.title,"title-id":t.titleId,date:t.date},scopedSlots:t._u([{key:"notes",fn:function(){return[n("notes-expansion-panel",{staticClass:"DataView-ExpansionPanel",attrs:{"expansion-panel-text":t.$t("Common.注")},scopedSlots:t._u([{key:"notes",fn:function(){return[t._t("notes")]},proxy:!0}],null,!0)})]},proxy:!0},{key:"dataSetPanel",fn:function(){return[n("data-view-data-set-panel",{attrs:{title:t.title,"l-text":t.info.lText,"s-text":t.info.sText,unit:t.info.unit,"card-path":"/cards/"+t.titleId}})]},proxy:!0}])},[n("v-data-table",{ref:"displayedTable",staticClass:"cardTable",attrs:{headers:t.chartData.headers,items:t.chartData.datasets,"items-per-page":-1,"hide-default-footer":!0,height:580,"fixed-header":!0,"mobile-breakpoint":0,"custom-sort":t.customSort}})],1)}),[],!1,null,null,null);e.default=component.exports;m()(component,{NotesExpansionPanel:n(341).default,DataViewDataSetPanel:n(339).default,DataView:n(340).default}),m()(component,{VDataTable:_.a})},607:function(t,e,n){"use strict";n.r(e);n(19),n(249),n(45);var o=n(14),r=n.n(o),l=n(166),c=n(426),d=n(441),f={"盛岡市":291320,"宮古市":51197,"大船渡市":34738,"花巻市":93108,"北上市":92292,"久慈市":33023,"遠野市":25366,"一関市":112496,"陸前高田市":18233,"釜石市":33337,"二戸市":25247,"八幡平市":23939,"奥州市":112808,"滝沢市":55938,"雫石町":15704,"葛巻町":5517,"岩手町":12213,"紫波町":32054,"矢巾町":27715,"西和賀町":5093,"金ケ崎町":15405,"平泉町":7231,"住田町":5040,"大槌町":10786,"山田町":14443,"岩泉町":8641,"田野畑村":3029,"普代村":2505,"軽米町":8314,"野田村":3887,"九戸村":5308,"洋野町":14874,"一戸町":11400},h={components:{ConfirmedCasesByMunicipalitiesTable:d.default},props:{md:{type:String,default:"6"}},data:function(){var t=this,e={headers:[],datasets:[]};e.headers=[{text:this.$t("ConfirmedCasesByMunicipalitiesCard.legends[0]"),value:"label"},{text:this.$t("ConfirmedCasesByMunicipalitiesCard.legends[1]"),value:"count",align:"end"},{text:this.$t("ConfirmedCasesByMunicipalitiesCard.legends[2]"),value:"count_per_population",align:"end"},{text:this.$t("ConfirmedCasesByMunicipalitiesCard.legends[3]"),value:"last7days",align:"end"},{text:this.$t("ConfirmedCasesByMunicipalitiesCard.legends[4]"),value:"last7_per_100k",align:"end"}];var n=function(t){return null===t?"":"".concat(t,"%")},o=function(t){var e=l.patients.data.filter((function(a){return a.居住地===t})).filter((function(a){return r()(a.確定日).isAfter(r()(l.patients_summary.data[l.patients_summary.data.length-1].日付).add(-8,"days"))}));return"県外"===t?"":e.length},d=function(t){return"県外"===t?"":(1e5*o(t)/f[t]).toFixed(1)};return e.datasets=c.datasets.data.filter((function(t){return"小計"!==t.label})).map((function(e){return{code:e.code,ruby:t.$t(e.ruby),label:t.$t(e.label),count:e.count,count_per_population:n(e.count_per_population),last7days:o(e.label),last7_per_100k:d(e.label)}})),{date:r()(c.date).format("YYYY/MM/DD HH:mm"),municipalitiesTable:e,info:{sText:this.$t("Common.{date}の累計",{date:this.$d(new Date(c.datasets.date),"dateWithoutYear")})}}}},m=n(10),_=n(44),v=n.n(_),x=n(383),component=Object(m.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-col",{staticClass:"DataCard",attrs:{id:"ConfirmedCasesByMunicipalitiesCard",cols:"12",md:t.md}},[n("client-only",[n("confirmed-cases-by-municipalities-table",{attrs:{title:t.$t("ConfirmedCasesByMunicipalitiesCard.title"),"title-id":"number-of-confirmed-cases-by-municipalities","chart-data":t.municipalitiesTable,date:t.date,info:t.info},scopedSlots:t._u([{key:"notes",fn:function(){return[n("ul",t._l(t.$t("ConfirmedCasesByMunicipalitiesCard.notes"),(function(e){return n("li",{key:e},[t._v("\n            "+t._s(e)+"\n          ")])})),0)]},proxy:!0}])}),t._v(" "),t._t("breadCrumb")],2)],1)}),[],!1,null,null,null);e.default=component.exports;v()(component,{ConfirmedCasesByMunicipalitiesTable:n(441).default}),v()(component,{VCol:x.a})}}]);