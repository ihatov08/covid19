(window.webpackJsonp=window.webpackJsonp||[]).push([[49,36,38,41,51],{339:function(t,e,n){"use strict";n.r(e);var r=n(0),o=n(81),l=r.a.extend({components:{AppLink:o.default},props:{title:{type:String,required:!0,default:""},lTextBefore:{type:String,required:!1,default:""},lText:{type:String,required:!1,default:""},sText:{type:String,required:!1,default:""},unit:{type:String,required:!1,default:""},cardPath:{type:String,required:!0},selfDisclosureForm:{type:Boolean,required:!1,default:!1}}}),d=(n(354),n(10)),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"DataView-DataSet"},[n("h3",{staticClass:"DataView-DataSet-title"},[n("app-link",{staticClass:"DataView-DataSet-title-HeaderLink",attrs:{to:t.localePath(t.cardPath)}},[t._v("\n      "+t._s(t.title)+"\n    ")])],1),t._v(" "),n("div",{staticClass:"DataView-DataSet-DataInfo"},[""!==t.lText?n("span",{staticClass:"DataView-DataSet-DataInfo-summary"},[n("span",{staticClass:"lTextBefore"},[t._v("\n        "+t._s(t.lTextBefore)+"\n      ")]),t._v(" "),n("strong",[t._v("\n        "+t._s(t.lText)+"\n      ")]),t._v(" "),n("small",{staticClass:"DataView-DataSet-DataInfo-summary-unit"},[t._v("\n        "+t._s(t.unit)+"\n      ")])]):t._e(),t._v(" "),""!==t.lText?n("br"):t._e(),t._v(" "),""!==t.sText?n("small",{staticClass:"DataView-DataSet-DataInfo-date"},[t._v("\n      "+t._s(t.sText)+"\n    ")]):t._e(),t._v(" "),t.selfDisclosureForm?n("div",{staticClass:"DataView-DataSet-DataInfo-SelfDisclosureForm"},[n("app-link",{attrs:{to:"https://forms.gle/JHB4HJ2c4NnPcmy69"}},[t._v("\n        情報提供フォーム\n      ")])],1):t._e()])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{AppLink:n(81).default})},340:function(t,e,n){"use strict";n.r(e);var r=n(0),o=n(342),l=n(347),d=n(128),c=r.a.extend({components:{DataViewExpansionPanel:o.default,DataViewShare:l.default},props:{title:{type:String,default:""},titleId:{type:String,default:""},date:{type:String,default:""},headTitle:{type:String,default:""}},head:function(){return this.$route.params.card?{title:this.headTitle?this.headTitle:this.title,meta:[{hid:"og:title",property:"og:title",content:this.headTitle?this.headTitle:this.title},{hid:"description",name:"description",content:this.date},{hid:"og:description",property:"og:description",content:this.date}]}:{}},computed:{formattedDate:function(){return Object(d.c)(this.date)},formattedDateForDisplay:function(){return this.$d(new Date(this.date),"dateTime")},permalink:function(){var t="/cards/".concat(this.titleId);return this.localePath(t)}}}),h=(n(356),n(10)),f=n(44),x=n.n(f),m=n(702),component=Object(h.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{staticClass:"DataView"},[n("div",{staticClass:"DataView-Inner"},[n("div",{staticClass:"DataView-Header"},[t.$slots.dataSetPanel?n("div",{staticClass:"DataView-DataSetPanel"},[t._t("dataSetPanel")],2):t._e()]),t._v(" "),t.$slots.attentionNote?n("div",{staticClass:"DataView-AttentionNote"},[t._t("attentionNote")],2):t._e(),t._v(" "),n("div",{staticClass:"DataView-Description"},[t._t("description")],2),t._v(" "),n("div",[t._t("button")],2),t._v(" "),n("div",{staticClass:"DataView-Content"},[t._t("default")],2),t._v(" "),n("div",{staticClass:"DataView-Description DataView-Description--Additional"},[t.$slots.dataTable?n("data-view-expansion-panel",{staticClass:"DataView-ExpansionPanel"},[t._t("dataTable")],2):t._e()],1),t._v(" "),n("div",{staticClass:"DataView-Description DataView-Description--Additional"},[t._t("notes")],2),t._v(" "),n("div",{staticClass:"DataView-Description DataView-Description--Additional"},[t._t("additionalDescription")],2),t._v(" "),n("div",{staticClass:"DataView-Space"}),t._v(" "),n("div",{staticClass:"DataView-Footer"},[n("div",[t._t("footer"),t._v(" "),n("div",[n("a",{staticClass:"Permalink",attrs:{href:t.permalink}},[n("time",{attrs:{datetime:t.formattedDate}},[t._v("\n              "+t._s(t.$t("{date} 更新",{date:t.formattedDateForDisplay}))+"\n            ")])])])],2),t._v(" "),"true"!=t.$route.query.embed?n("data-view-share",{staticClass:"Footer-Right",attrs:{title:t.title,"title-id":t.titleId}}):t._e()],1)])])}),[],!1,null,null,null);e.default=component.exports;x()(component,{DataViewExpansionPanel:n(342).default,DataViewShare:n(347).default}),x()(component,{VCard:m.a})},341:function(t,e,n){"use strict";n.r(e);var r=n(39),o=n(0),l=n(343),d=o.a.extend({props:{expansionPanelText:{type:String,required:!0}},data:function(){return{showDetails:!1,mdiChevronRight:r.d}},mounted:function(){this.showDetails=!0},methods:{toggleDetails:function(){l.a.$emit(l.b,{dataView:this.$parent})}}}),c=(n(358),n(10)),h=n(44),f=n.n(h),x=n(622),m=n(623),v=n(624),y=n(625),D=n(331),component=Object(c.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.$slots.notes?n("div",{staticClass:"NotesExpansionPanel"},[t.showDetails?n("v-expansion-panels",{attrs:{flat:""}},[n("v-expansion-panel",[n("v-expansion-panel-header",{style:{transition:"none"},attrs:{"hide-actions":!0},on:{click:t.toggleDetails}},[n("div",{staticClass:"v-expansion-panel-header__icon grey--text text--darken-2"},[n("v-icon",{attrs:{left:"",size:"24"}},[t._v(t._s(t.mdiChevronRight))])],1),t._v(" "),n("span",{staticClass:"expansion-panel-text grey--text text--darken-2"},[t._v("\n          "+t._s(t.expansionPanelText)+"\n        ")])]),t._v(" "),n("v-expansion-panel-content",{staticClass:"grey--text text--darken-2"},[t._t("notes")],2)],1)],1):[t._t("notes")]],2):t._e()}),[],!1,null,null,null);e.default=component.exports;f()(component,{VExpansionPanel:x.a,VExpansionPanelContent:m.a,VExpansionPanelHeader:v.a,VExpansionPanels:y.a,VIcon:D.a})},342:function(t,e,n){"use strict";n.r(e);var r=n(39),o=n(0),l=n(343),d=o.a.extend({data:function(){return{showDetails:!1,mdiChevronRight:r.d}},mounted:function(){this.showDetails=!0},methods:{toggleDetails:function(){l.a.$emit(l.b,{dataView:this.$parent})}}}),c=(n(350),n(10)),h=n(44),f=n.n(h),x=n(622),m=n(623),v=n(624),y=n(625),D=n(331),component=Object(c.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"DataViewExpansionPanel"},[t.showDetails?n("v-expansion-panels",{attrs:{flat:""}},[n("v-expansion-panel",[n("v-expansion-panel-header",{style:{transition:"none"},attrs:{"hide-actions":!0},on:{click:t.toggleDetails}},[n("div",{staticClass:"v-expansion-panel-header__icon grey--text text--darken-2"},[n("v-icon",{attrs:{left:"",size:"24"}},[t._v(t._s(t.mdiChevronRight))])],1),t._v(" "),n("span",{staticClass:"expansion-panel-text grey--text text--darken-2"},[t._v("\n          "+t._s(t.$t("Common.データを表示"))+"\n        ")])]),t._v(" "),n("v-expansion-panel-content",{staticClass:"grey--text text--darken-2"},[t._t("default")],2)],1)],1):[t._t("default")]],2)}),[],!1,null,null,null);e.default=component.exports;f()(component,{VExpansionPanel:x.a,VExpansionPanelContent:m.a,VExpansionPanelHeader:v.a,VExpansionPanels:y.a,VIcon:D.a})},343:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return o}));var r=new(n(0).a),o="TOGGLE_DETAILS"},344:function(t,e,n){var content=n(351);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(24).default)("114c0959",content,!0,{sourceMap:!1})},345:function(t,e,n){var content=n(353);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(24).default)("487710d1",content,!0,{sourceMap:!1})},346:function(t,e,n){var content=n(355);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(24).default)("0e424632",content,!0,{sourceMap:!1})},347:function(t,e,n){"use strict";n.r(e);n(64),n(25);var r=n(39),o=n(0).a.extend({props:{title:{type:String,default:""},titleId:{type:String,default:""}},data:function(){return{openGraphEmbed:!1,displayShare:!1,showOverlay:!1,mdiClipboardOutline:r.e,mdiClose:r.f}},computed:{graphEmbedValue:function(){var t='<iframe width="560" height="315" src="'.concat(this.permalink(!0,!0),'" frameborder="0"></iframe>');return t}},watch:{displayShare:function(t){t?document.documentElement.addEventListener("click",this.toggleShareMenu):document.documentElement.removeEventListener("click",this.toggleShareMenu)}},methods:{toggleShareMenu:function(t){t.stopPropagation(),this.displayShare=!this.displayShare},closeShareMenu:function(){this.displayShare=!1},isCopyAvailable:function(){return!!navigator.clipboard},copyEmbedCode:function(){var t=this;navigator.clipboard.writeText(this.graphEmbedValue).then((function(){t.closeShareMenu(),t.showOverlay=!0,setTimeout((function(){t.showOverlay=!1}),2e3)}))},stopClosingShareMenu:function(t){t.stopPropagation()},permalink:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],embed=arguments.length>1&&void 0!==arguments[1]&&arguments[1],e="/cards/".concat(this.titleId,"/");return embed&&(e="".concat(e,"?embed=true")),e=this.localePath(e),t&&(e="".concat(location.protocol,"//").concat(location.host).concat(e)),e},twitter:function(){var t="https://twitter.com/intent/tweet?text=".concat(this.title," / ").concat(this.$t("Common.岩手県"),"\n      ").concat(this.$t("Common.新型コロナウイルス感染症"),"\n      ").concat(this.$t("Common.対策サイト"),"&url=").concat(this.permalink(!0),"&hashtags=StopCovid19JP");window.open(t)},facebook:function(){var t="https://www.facebook.com/sharer.php?u=".concat(this.permalink(!0));window.open(t)},line:function(){var t="https://social-plugins.line.me/lineit/share?url=".concat(this.permalink(!0));window.open(t)}}}),l=(n(352),n(10)),d=n(44),c=n.n(d),h=n(331),f=n(636),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-tooltip",{attrs:{left:"","nudge-right":"20","nudge-bottom":"4"},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on;return[n("button",t._g({staticClass:"DataView-Share-Opener",on:{click:t.toggleShareMenu}},r),[n("svg",{attrs:{width:"14",height:"16",viewBox:"0 0 14 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",role:"img","aria-label":t.$t("{title}のグラフをシェア",{title:t.title})}},[n("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M7.59999 3.5H9.5L7 0.5L4.5 3.5H6.39999V11H7.59999V3.5ZM8.5 5.75H11.5C11.9142 5.75 12.25 6.08579 12.25 6.5V13.5C12.25 13.9142 11.9142 14.25 11.5 14.25H2.5C2.08579 14.25 1.75 13.9142 1.75 13.5V6.5C1.75 6.08579 2.08579 5.75 2.5 5.75H5.5V4.5H2.5C1.39543 4.5 0.5 5.39543 0.5 6.5V13.5C0.5 14.6046 1.39543 15.5 2.5 15.5H11.5C12.6046 15.5 13.5 14.6046 13.5 13.5V6.5C13.5 5.39543 12.6046 4.5 11.5 4.5H8.5V5.75Z",fill:"#808080"}})])])]}}])},[t._v(" "),n("span",[t._v(t._s(t.$t("情報をシェアする")))])]),t._v(" "),t.displayShare?n("div",{staticClass:"DataView-Share-Buttons py-2",on:{click:t.stopClosingShareMenu}},[n("div",{staticClass:"Close-Button"},[n("v-icon",{attrs:{"aria-label":t.$t("閉じる")},on:{click:t.closeShareMenu}},[t._v("\n        "+t._s(t.mdiClose)+"\n      ")])],1),t._v(" "),n("h4",[t._v(t._s(t.$t("埋め込み用コード")))]),t._v(" "),n("div",{staticClass:"EmbedCode"},[t.isCopyAvailable()?n("v-icon",{staticClass:"EmbedCode-Copy",attrs:{"aria-label":t.$t("クリップボードにコピー")},on:{click:t.copyEmbedCode}},[t._v(t._s(t.mdiClipboardOutline))]):t._e(),t._v("\n      "+t._s(t.graphEmbedValue)+"\n    ")],1),t._v(" "),n("div",{staticClass:"Buttons"},[n("button",{attrs:{"aria-label":t.$t("LINEで{title}のグラフをシェア",{title:t.title})},on:{click:t.line}},[t._m(0)]),t._v(" "),n("button",{attrs:{"aria-label":t.$t("Twitterで{title}のグラフをシェア",{title:t.title})},on:{click:t.twitter}},[t._m(1)]),t._v(" "),n("button",{attrs:{"aria-label":t.$t("facebookで{title}のグラフをシェア",{title:t.title})},on:{click:t.facebook}},[t._m(2)])])]):t._e(),t._v(" "),t.showOverlay?n("div",{staticClass:"overlay"},[n("div",{staticClass:"overlay-text"},[t._v("\n      "+t._s(t.$t("埋め込み用コードをコピーしました"))+"\n    ")])]):t._e()],1)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("picture",[n("source",{staticClass:"icon-resize line",attrs:{srcset:"/line.webp",type:"image/webp"}}),t._v(" "),n("img",{staticClass:"icon-resize line",attrs:{src:"/line.png",alt:"LINE"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("picture",[n("source",{staticClass:"icon-resize twitter",attrs:{srcset:"/twitter.webp",type:"image/webp"}}),t._v(" "),n("img",{staticClass:"icon-resize twitter",attrs:{src:"/twitter.png",alt:"Twitter"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("picture",[n("source",{staticClass:"icon-resize facebook",attrs:{srcset:"/facebook.webp",type:"image/webp"}}),t._v(" "),n("img",{staticClass:"icon-resize facebook",attrs:{src:"/facebook.png",alt:"facebook"}})])}],!1,null,null,null);e.default=component.exports;c()(component,{VIcon:h.a,VTooltip:f.a})},348:function(t,e,n){var content=n(357);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(24).default)("55e0e80f",content,!0,{sourceMap:!1})},349:function(t,e,n){var content=n(359);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(24).default)("56069591",content,!0,{sourceMap:!1})},350:function(t,e,n){"use strict";n(344)},351:function(t,e,n){var r=n(23)(!1);r.push([t.i,".v-expansion-panels{color:#404040}.v-expansion-panel-header{padding:5px 0}.v-expansion-panel-header__icon{margin-left:-5px!important}.v-expansion-panel-header__icon .v-icon--left{margin-right:5px}.v-expansion-panel--active .v-expansion-panel-header__icon .v-icon{transform:rotate(90deg)!important}.expansion-panel-text{font-size:1.2rem}",""]),t.exports=r},352:function(t,e,n){"use strict";n(345)},353:function(t,e,n){var r=n(23)(!1);r.push([t.i,".DataView-Share-Opener{cursor:pointer;margin:-14px;padding:14px}.DataView-Share-Opener:focus{outline:1px dotted #707070}.DataView-Share-Buttons{position:absolute;padding:8px;right:2rem;bottom:3em;width:240px;border:1px solid #d9d9d9;background:#fff!important;border-radius:8px;text-align:left;z-index:2;font-size:1.6rem}.DataView-Share-Buttons>*{padding:4px 0}.DataView-Share-Buttons>.Close-Button{display:flex;justify-content:flex-end;color:#707070}.DataView-Share-Buttons>.Close-Button button{border-radius:50%;border:1px solid #fff}.DataView-Share-Buttons>.Close-Button button:focus{border:1px dotted #707070;outline:none}.DataView-Share-Buttons>.EmbedCode{position:relative;padding:4px 30px 4px 4px;color:#030303;border:1px solid #eee;border-radius:8px;font-size:1.2rem}.DataView-Share-Buttons>.EmbedCode .EmbedCode-Copy{position:absolute;top:.3em;right:.3em;color:#707070}.DataView-Share-Buttons>.EmbedCode button{border-radius:50%;border:1px solid #eee}.DataView-Share-Buttons>.EmbedCode button:focus{border:1px dotted #707070;outline:none}.DataView-Share-Buttons>.Buttons{display:flex;justify-content:center;margin-top:4px}.DataView-Share-Buttons>.Buttons .icon-resize{border-radius:50%}.DataView-Share-Buttons>.Buttons .icon-resize.twitter{color:#fff;background:#2a96eb}.DataView-Share-Buttons>.Buttons .icon-resize.facebook{color:#364e8a}.DataView-Share-Buttons>.Buttons .icon-resize.line{color:#1cb127}.DataView-Share-Buttons>.Buttons button{width:30px;height:30px;margin-left:4px;margin-right:4px}.DataView-Share-Buttons>.Buttons button:focus{border-radius:50%;border:1px dotted #707070;outline:none}.overlay{position:absolute;display:flex;align-items:center;justify-content:center;z-index:1;top:0;left:0;width:100%;height:100%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;opacity:.8}.overlay>.overlay-text{text-align:center;padding:2em;width:60%;background:#404040;border-radius:8px;color:#fff!important;font-size:1.6rem}",""]),t.exports=r},354:function(t,e,n){"use strict";n(346)},355:function(t,e,n){var r=n(23)(!1);r.push([t.i,".DataView-DataSet{display:flex;width:100%;margin-bottom:10px}.DataView-DataSet-title{font-size:2rem;font-weight:400;flex:1 1 auto}.DataView-DataSet-title-HeaderLink{text-decoration:none;color:#404040!important}.DataView-DataSet-title-HeaderLink:hover{color:#03832d!important}.DataView-DataSet-DataInfo{text-align:right}.DataView-DataSet-DataInfo-summary{flex:0 1 auto;display:inline-block;color:#404040;white-space:nowrap;font-style:normal;line-height:30px;font-size:3rem}.DataView-DataSet-DataInfo-summary .lTextBefore{margin-right:.5rem;font-size:1.5rem}.DataView-DataSet-DataInfo-summary strong{font-weight:600}.DataView-DataSet-DataInfo-summary-unit{width:100%;font-size:1.8rem}.DataView-DataSet-DataInfo-date{display:inline-block;width:100%;color:#707070;line-height:normal;font-size:1.2rem}.DataView-DataSet-DataInfo-SelfDisclosureForm>a{height:3rem;line-height:3rem;display:inline-block;font-size:1.1rem}",""]),t.exports=r},356:function(t,e,n){"use strict";n(348)},357:function(t,e,n){var r=n(23)(!1);r.push([t.i,".DataView{height:100%;background-color:#fff;box-shadow:0 0 2px rgba(0,0,0,.15);border:.5px solid #d9d9d9!important;border-radius:4px}.DataView-Header{display:flex;align-items:flex-start;flex-flow:column;padding:0 10px}@media screen and (min-width:769px){.DataView-Header{padding:0 5px}}@media screen and (min-width:1171px){.DataView-Header{justify-content:space-between;flex-flow:row;padding:0}.DataView-Header.with-dataSetPanel{flex-flow:column}}.DataView-Inner{display:flex;flex-flow:column;padding:22px;height:100%}@media screen and (max-width:600px){.DataView-Inner{padding:15px 12px}}.DataView-DataSetPanel{flex:1 0 auto;width:100%}.DataView-Content{margin:10px 0}.DataView-Content a:link{color:#2083b9}.DataView-Content a:visited{color:#337}.DataView-Content a:hover{text-decoration:underline}.DataView-Content a:active{text-decoration:none}.DataView-Space{margin-top:10px}.DataView-Description{margin-bottom:10px;color:#707070;font-size:1.2rem}.DataView-Description ol,.DataView-Description ul{list-style:disc inside;padding-left:1em}.DataView-Description ol li,.DataView-Description ul li{margin-left:1.5em;text-indent:-1.5em}.DataView-Footer{display:flex;justify-content:space-between;margin-top:auto;color:#707070;font-size:1.2rem}.DataView-Footer ol,.DataView-Footer ul{list-style-type:none;padding:0}.DataView-Footer .Permalink{color:#707070!important}.DataView-Footer .Footer-Right{display:flex;align-items:flex-end}.DataView-AttentionNote{margin:10px 0;padding:12px;background-color:#ffe200;border-radius:4px;color:#404040;font-size:1.2rem}.DataView-AttentionNote p{margin:0}",""]),t.exports=r},358:function(t,e,n){"use strict";n(349)},359:function(t,e,n){var r=n(23)(!1);r.push([t.i,".v-expansion-panels{color:#404040!important}.v-expansion-panel-header{padding:5px 0}.v-expansion-panel-header__icon{margin-left:-5px!important}.v-expansion-panel-header__icon .v-icon--left{margin-right:5px}.v-expansion-panel--active .v-expansion-panel-header__icon .v-icon{transform:rotate(90deg)!important}.expansion-panel-text{font-size:1.2rem}",""]),t.exports=r},360:function(t,e,n){"use strict";n.r(e);n(19),n(45);var r=n(0),o=n(128),l={props:{headers:{type:Array,default:function(){return[]}},items:{type:Array,default:function(){return[]}},headerKey:{type:String,default:"text"}},computed:{dataKeys:function(){var t=this;return this.headers.map((function(t){return t.value})).filter((function(e){return e!==t.headerKey}))}},methods:{formatDate:function(t){var e=Object(o.e)(t);return e.isValid()?this.$d(e.toDate(),"dateWithoutYear"):t}}},d=r.a.extend(l),c=(n(369),n(10)),h=n(44),f=n.n(h),x=n(706),component=Object(c.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-data-table",{staticClass:"cardTable",attrs:{headers:t.headers,items:t.items,"items-per-page":-1,"hide-default-footer":!0,height:240,"fixed-header":!0,"disable-sort":!0,"mobile-breakpoint":0,"item-key":"name"},scopedSlots:t._u([{key:"body",fn:function(e){var r=e.items;return[n("tbody",t._l(r,(function(e,i){return n("tr",{key:i},[n("th",{staticClass:"cardTable-header",attrs:{scope:"row"}},[t._v("\n          "+t._s(t.formatDate(e[t.headerKey]))+"\n        ")]),t._v(" "),t._l(t.dataKeys,(function(r,o){return n("td",{key:o,staticClass:"text-end"},[t._v("\n          "+t._s(e[r])+"\n        ")])}))],2)})),0)]}}])})}),[],!1,null,null,null);e.default=component.exports;f()(component,{VDataTable:x.a})},361:function(t,e,n){"use strict";n.r(e);n(64);var r=n(368),o={props:{displayData:{type:Object,required:!0}},data:function(){return{chartWidth:300,timerId:0}},watch:{displayData:function(){this.scrollRightSide()}},computed:{labelCount:function(){var t;return(null===(t=this.displayData.labels)||void 0===t?void 0:t.length)||0}},methods:{adjustChartWidth:function(){var t=this.$refs.chartContainer;if(t&&0!==t.clientWidth){var e=t.clientWidth;this.chartWidth=this.calcChartWidth(e,this.labelCount)}},calcChartWidth:function(t,e){var n=(this.$nuxt.$vuetify.breakpoint.smAndDown?4:6)*e+38;return Math.max(n,t)},scrollRightSide:function(){var t=this.$refs.scrollable;t&&(t.scrollLeft=this.chartWidth)},handleResize:function(){clearTimeout(this.timerId),this.timerId=window.setTimeout(this.adjustChartWidth,500)}},mounted:function(){var t=this;this.adjustChartWidth(),this.$on("update-width",this.scrollRightSide),window.addEventListener("resize",this.handleResize),r.a.$on(r.b,(function(){return setTimeout((function(){return t.adjustChartWidth()}))})),window.matchMedia("print").addEventListener("change",(function(){t.scrollRightSide()}))},beforeDestroy:function(){var t=this;window.removeEventListener("resize",this.handleResize),r.a.$off(r.b),window.matchMedia("print").removeEventListener("change",(function(){t.scrollRightSide()}))}},l=(n(371),n(10)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"chartContainer",staticClass:"LegendStickyChart"},[n("div",{ref:"scrollable",staticClass:"scrollable"},[n("div",{style:{width:t.chartWidth+"px"}},[t._t("chart",null,{chartWidth:t.chartWidth})],2)]),t._v(" "),t._t("sticky-chart")],2)}),[],!1,null,"46e997fb",null);e.default=component.exports},362:function(t,e,n){var content=n(370);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(24).default)("4f9a7631",content,!0,{sourceMap:!1})},363:function(t,e,n){var content=n(372);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(24).default)("42775a72",content,!0,{sourceMap:!1})},364:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return l}));n(249),n(90);function r(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return t<0?function(t){return null==t?void 0:t.toFixed(0)}:t>20?function(t){return null==t?void 0:t.toFixed(20)}:function(e){return null==e?void 0:e.toFixed(t)}}function o(){return function(t){return null==t?void 0:t.toLocaleString()}}function l(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return function(e){return Number(r(t)(e)).toLocaleString("en",{minimumFractionDigits:t})}}},365:function(t,e,n){"use strict";var r=n(27);n(72);function o(t){t._observe&&(t._observe.observer.unobserve(t),delete t._observe)}var l={inserted:function(t,e){var n=e.modifiers||{},l=e.value,d="object"===Object(r.a)(l)?l:{handler:l,options:{}},c=d.handler,h=d.options,f=new IntersectionObserver((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],r=arguments.length>1?arguments[1]:void 0;if(t._observe){if(c&&(!n.quiet||t._observe.init)){var l=Boolean(e.find((function(t){return t.isIntersecting})));c(e,r,l)}t._observe.init&&n.once?o(t):t._observe.init=!0}}),h);t._observe={init:!1,observer:f},f.observe(t)},unbind:o};e.a=l},366:function(t,e,n){"use strict";n.d(e,"b",(function(){return m})),n.d(e,"a",(function(){return v}));var r={strokeColor:"#5a8055",fillColor:"#1b4d30"},o={strokeColor:"#5a8055",fillColor:"#00a040"},l={strokeColor:"#5a8055",fillColor:"#c5e2c6"},d={strokeColor:"#1b4d30",fillColor:"#cbe1c8"},c={strokeColor:"#cc7004",fillColor:"#cc7004"},h={strokeColor:"#1b4d30",fillColor:"#1b4d30"},f={strokeColor:"#5a8055",fillColor:"#e2eee2"},x={strokeColor:"#aaaaaa",fillColor:"#f0f0f0"};function m(t){switch(t){case 1:return[o];case 2:return[r,l];case 3:return[r,l,x];case 4:return[r,o,l,f];default:return[r,o,l]}}function v(t){return{A:r,B:o,C:l,D:d,E:c,F:h,G:f,H:x}[t]}},367:function(t,e,n){"use strict";n(90);var r=n(8),o=n(0);e.a=o.a.extend({name:"measurable",props:{height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},computed:{measurableStyles:function(){var t={},e=Object(r.e)(this.height),n=Object(r.e)(this.minHeight),o=Object(r.e)(this.minWidth),l=Object(r.e)(this.maxHeight),d=Object(r.e)(this.maxWidth),c=Object(r.e)(this.width);return e&&(t.height=e),n&&(t.minHeight=n),o&&(t.minWidth=o),l&&(t.maxHeight=l),d&&(t.maxWidth=d),c&&(t.width=c),t}}})},368:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return o}));var r=new(n(0).a),o="TOGGLE_TAB"},369:function(t,e,n){"use strict";n(362)},370:function(t,e,n){var r=n(23)(!1);r.push([t.i,".v-data-table-header .text-end{text-align:right!important}.cardTable-header{white-space:nowrap!important}.v-data-table .text-end{text-align:right}",""]),t.exports=r},371:function(t,e,n){"use strict";n(363)},372:function(t,e,n){var r=n(23)(!1);r.push([t.i,".LegendStickyChart[data-v-46e997fb]{margin:16px 0;position:relative;overflow:hidden}.LegendStickyChart .scrollable[data-v-46e997fb]{overflow-x:scroll}.LegendStickyChart .sticky-legend[data-v-46e997fb]{position:absolute;top:0;pointer-events:none;width:100%}",""]),t.exports=r},376:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));n(31),n(378);var r=n(128),o=n(364),l=function(t){var e=t.displayData,n=t.dataIndex,l=void 0===n?0:n,c=t.digit,h=void 0===c?0:c,f=e.labels.slice(-1)[0],data=e.datasets[l].data,x=data.slice(-1)[0],m=x-data.slice(-2)[0],v=Object(o.a)(h);return{lastDay:Object(r.e)(f).toDate(),lastDayData:v(x),dayBeforeRatio:d(m,v)}};function d(t,e){var n=e(t);switch(Math.sign(t)){case 1:return"+".concat(n);case-1:default:return"".concat(n)}}},378:function(t,e,n){n(2)({target:"Math",stat:!0},{sign:n(250)})},393:function(t,e,n){var content=n(486);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(24).default)("284e8273",content,!0,{sourceMap:!1})},447:function(t,e,n){"use strict";n.r(e);var r=n(3),o=n(106),l=(n(25),n(45),n(9),n(73),n(47),n(32),n(34),n(31),n(14)),d=n.n(l),c=n(0),h=n(340),f=n(339),x=n(360),m=n(341),v=n(361),y=n(129),D=n(366),w=n(376),C=n(364),_={created:function(){this.canvas=!0},components:{DataView:h.default,DataViewTable:x.default,DataViewDataSetPanel:f.default,NotesExpansionPanel:m.default,ScrollableChart:v.default},props:{title:{type:String,default:""},titleId:{type:String,required:!1,default:""},infoTitles:{type:Array,required:!1,default:function(){return[]}},chartId:{type:String,default:"PositiveRateMixedChart"},chartData:{type:Array,required:!1,default:function(){return[]}},getFormatter:{type:Function,required:!1,default:function(t){return Object(C.b)()}},date:{type:String,required:!0,default:""},labels:{type:Array,default:function(){return[]}},dataLabels:{type:Array,default:function(){return[]}},tableLabels:{type:Array,default:function(){return[]}},unit:{type:String,default:""},optionUnit:{type:String,required:!1,default:""},yAxesBgPlugin:{type:Array,default:function(){return y.b}},yAxesBgRightPlugin:{type:Array,default:function(){return y.c}}},data:function(){return{displayLegends:[!0,!0,!0,!0,!0,!0],colors:[].concat(Object(o.a)(Object(D.b)(4)),[Object(D.a)("E")]),canvas:!0}},computed:{displayInfo:function(){var t=Object(w.a)({displayData:this.displayData,dataIndex:5,digit:1}),e=t.lastDay,n=t.lastDayData,r=t.dayBeforeRatio,o=Object(w.a)({displayData:this.displayData,dataIndex:4,digit:1}),l=o.lastDay,d=o.lastDayData,c=o.dayBeforeRatio;return[{lText:n,sText:"".concat(this.$t("{date} の数値",{date:this.$d(e,"dateWithoutYear")}),"（").concat(this.$t("前日比"),": ").concat(r," ").concat(this.unit,"）"),unit:this.unit},{lText:d,sText:"".concat(this.$t("{date} の数値",{date:this.$d(l,"dateWithoutYear")}),"（").concat(this.$t("前日比"),": ").concat(c," ").concat(this.optionUnit,"）"),unit:this.optionUnit}]},displayData:function(){var t=[].concat(Object(o.a)(Object(D.b)(4)),[Object(D.a)("E")]);return{labels:this.labels,datasets:[{type:"bar",yAxisID:"y-axis-1",label:this.dataLabels[0],data:this.chartData[0],backgroundColor:t[0].fillColor,borderColor:t[0].strokeColor,borderWidth:1,order:1},{type:"bar",yAxisID:"y-axis-1",label:this.dataLabels[1],data:this.chartData[1],backgroundColor:t[1].fillColor,borderColor:t[1].strokeColor,borderWidth:1,order:2},{type:"bar",yAxisID:"y-axis-1",label:this.dataLabels[2],data:this.chartData[2],backgroundColor:t[2].fillColor,borderColor:t[2].strokeColor,borderWidth:1,order:3},{type:"bar",yAxisID:"y-axis-1",label:this.dataLabels[3],data:this.chartData[3],backgroundColor:t[3].fillColor,borderColor:t[3].strokeColor,borderWidth:1,order:4},{type:"line",yAxisID:"y-axis-1",label:this.dataLabels[4],data:this.chartData[4],pointBackgroundColor:"rgba(0,0,0,0)",pointBorderColor:"rgba(0,0,0,0)",borderColor:t[4].strokeColor,borderWidth:3,fill:!1,order:0,borderDash:[4,4]},{type:"line",yAxisID:"y-axis-2",label:this.dataLabels[5],data:this.chartData[5],pointBackgroundColor:"rgba(0,0,0,0)",pointBorderColor:"rgba(0,0,0,0)",borderColor:t[4].strokeColor,borderWidth:3,fill:!1,order:0,lineTension:0}]}},tableHeaders:function(){return[{text:this.$t("日付"),value:"text"}].concat(Object(o.a)(this.tableLabels.map((function(text,i){return{text:text,value:String(i),align:"end"}}))))},tableData:function(){var t=this;return this.labels.map((function(label,i){return Object.assign.apply(Object,[{text:label}].concat(Object(o.a)(t.dataLabels.map((function(e,n){return null===t.chartData[n][i]?Object(r.a)({},n,""):Object(r.a)({},n,t.getFormatter(n)(t.chartData[n][i]))})))))})).sort((function(a,b){return d()(a.text).unix()-d()(b.text).unix()})).reverse()},displayOption:function(){var t=this,e=this.unit,n={tooltips:{displayColors:!1,callbacks:{label:function(n){var r=t.getFormatter(n.datasetIndex)(parseFloat(n.value)),label="".concat(t.dataLabels[n.datasetIndex]," : ").concat(r," ").concat(t.$t("Common.人"));return n.datasetIndex>=5&&(label="".concat(t.dataLabels[n.datasetIndex]," : ").concat(r," ").concat(e)),label},title:function(e,data){var label=data.labels[e[0].index].toString();return t.$d(new Date(label),"dateWithoutYear")}}},maintainAspectRatio:!1,legend:{display:!1},scales:{xAxes:[{id:"day",stacked:!0,gridLines:{display:!1},ticks:{fontSize:9,maxTicksLimit:20,fontColor:"#808080",maxRotation:0,callback:function(label){return d()(label).format("D")}}},{id:"month",stacked:!0,gridLines:{drawOnChartArea:!1,drawTicks:!0,drawBorder:!1,tickMarkLength:10},ticks:{fontSize:11,fontColor:"#808080",padding:3,fontStyle:"bold"},type:"time",time:{unit:"month",displayFormats:{month:"MMM"}}}],yAxes:[{id:"y-axis-1",position:"left",stacked:!0,gridLines:{display:!0,drawOnChartArea:!0,color:"#E5E5E5"},ticks:{suggestedMin:0,maxTicksLimit:8,fontColor:"#808080",suggestedMax:this.scaledTicksYAxisMax}},{id:"y-axis-2",position:"right",gridLines:{display:!0,drawOnChartArea:!1,color:"#E5E5E5"},ticks:{suggestedMin:0,maxTicksLimit:8,fontColor:"#808080",suggestedMax:this.scaledTicksYAxisMaxRight,callback:function(t){return"".concat(t,"%")}}}]}};return"true"===this.$route.query.ogp&&Object.assign(n,{animation:{duration:0}}),n},displayDataHeader:function(){var t=this,e=Array.from(this.displayData.datasets[0].data.keys()).map((function(i){return t.displayData.datasets[0].data[i]+t.displayData.datasets[1].data[i]+t.displayData.datasets[2].data[i]+t.displayData.datasets[3].data[i]})),n=e.reduce((function(a,b){return Math.max(a,b)}),0),r=e.indexOf(n);return{labels:["2020-01-01"],datasets:[{data:[this.displayData.datasets[0].data[r]],backgroundColor:"transparent",yAxisID:"y-axis-1",borderWidth:0},{data:[this.displayData.datasets[1].data[r]],backgroundColor:"transparent",yAxisID:"y-axis-1",borderWidth:0},{data:[this.displayData.datasets[2].data[r]],backgroundColor:"transparent",yAxisID:"y-axis-1",borderWidth:0},{data:[this.displayData.datasets[3].data[r]],backgroundColor:"transparent",yAxisID:"y-axis-1",borderWidth:0},{data:[0],backgroundColor:"transparent",yAxisID:"y-axis-1",borderWidth:0},{data:[this.displayData.datasets[5].data[r]],backgroundColor:"transparent",yAxisID:"y-axis-2",borderWidth:0}]}},displayOptionHeader:function(){return{maintainAspectRatio:!1,legend:{display:!1},tooltips:{enabled:!1},scales:{xAxes:[{id:"day",stacked:!0,gridLines:{display:!1},ticks:{fontSize:9,maxTicksLimit:20,fontColor:"transparent",maxRotation:0,minRotation:0,callback:function(label){return d()(label).format("D")}}},{id:"month",stacked:!0,gridLines:{drawOnChartArea:!1,drawTicks:!1,drawBorder:!1,tickMarkLength:10},ticks:{fontSize:11,fontColor:"transparent",padding:13,fontStyle:"bold"},type:"time",time:{unit:"month"}}],yAxes:[{id:"y-axis-1",type:"linear",position:"left",stacked:!0,gridLines:{display:!0,drawOnChartArea:!1,color:"#E5E5E5"},ticks:{suggestedMin:0,maxTicksLimit:8,fontColor:"#808080",suggestedMax:this.scaledTicksYAxisMax}},{id:"y-axis-2",type:"linear",position:"right",stacked:!0,gridLines:{display:!0,drawOnChartArea:!1,color:"#E5E5E5"},ticks:{suggestedMin:0,maxTicksLimit:8,fontColor:"#808080",suggestedMax:this.scaledTicksYAxisMaxRight,callback:function(t){return"".concat(t,"%")}}}]},animation:{duration:0}}},scaledTicksYAxisMax:function(){var t=this;return Array.from(this.chartData[0].keys()).map((function(i){return t.chartData[0][i]+t.chartData[1][i]+t.chartData[2][i]+t.chartData[3][i]})).reduce((function(a,b){return Math.max(a,b)}),0)},scaledTicksYAxisMaxRight:function(){return this.chartData[5].reduce((function(a,b){return Math.max(a,b)}),0)}},methods:{onClickLegend:function(i){this.displayLegends[i]=!this.displayLegends[i],this.displayLegends=this.displayLegends.slice()}},mounted:function(){var canvas=this.$refs.barChart.$el.querySelector("canvas"),t="".concat(this.titleId,"-graph");canvas&&(canvas.setAttribute("role","img"),canvas.setAttribute("aria-labelledby",t))}},k=c.a.extend(_),S=n(485),V=n(10);var component=Object(V.a)(k,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("data-view",{attrs:{title:t.title,"title-id":t.titleId,date:t.date,"head-title":t.title+t.infoTitles.join(",")},scopedSlots:t._u([{key:"notes",fn:function(){return[n("notes-expansion-panel",{staticClass:"DataView-ExpansionPanel",attrs:{"expansion-panel-text":t.$t("Common.注")},scopedSlots:t._u([{key:"notes",fn:function(){return[t._t("notes")]},proxy:!0}],null,!0)})]},proxy:!0},{key:"additionalDescription",fn:function(){return[t._t("additionalDescription")]},proxy:!0},{key:"dataTable",fn:function(){return[n("client-only",[n("data-view-table",{attrs:{headers:t.tableHeaders,items:t.tableData}})],1)]},proxy:!0},{key:"dataSetPanel",fn:function(){return[n("data-view-data-set-panel",{attrs:{title:t.infoTitles[0],"l-text":t.displayInfo[0].lText,"s-text":t.displayInfo[0].sText,unit:t.displayInfo[0].unit,"card-path":"/cards/"+t.titleId}}),t._v(" "),n("data-view-data-set-panel",{attrs:{title:t.infoTitles[1],"l-text":t.displayInfo[1].lText,"s-text":t.displayInfo[1].sText,unit:t.displayInfo[1].unit,"card-path":"/cards/"+t.titleId}})]},proxy:!0}],null,!0)},[n("ul",{class:t.$style.GraphLegend,style:{display:t.canvas?"block":"none"}},t._l(t.dataLabels,(function(e,i){return n("li",{key:i,on:{click:function(e){return t.onClickLegend(i)}}},[n("button",[n("div",4===i?{style:{background:"repeating-linear-gradient(90deg, "+t.colors[i].fillColor+", "+t.colors[i].fillColor+" 2px, #fff 2px, #fff 4px)",border:0,height:"3px"}}:5===i?{style:{backgroundColor:t.colors[4].fillColor,border:0,height:"3px"}}:{style:{backgroundColor:t.colors[i].fillColor,borderColor:t.colors[i].strokeColor}}),t._v(" "),n("span",{style:{textDecoration:t.displayLegends[i]?"none":"line-through"}},[t._v(t._s(e))])])])})),0),t._v(" "),n("h4",{staticClass:"visually-hidden",attrs:{id:t.titleId+"-graph"}},[t._v("\n    "+t._s(t.$t("{title}のグラフ",{title:t.title}))+"\n  ")]),t._v(" "),n("scrollable-chart",{directives:[{name:"show",rawName:"v-show",value:t.canvas,expression:"canvas"}],attrs:{"display-data":t.displayData},scopedSlots:t._u([{key:"chart",fn:function(e){var r=e.chartWidth;return[n("bar",{ref:"barChart",attrs:{"chart-id":t.chartId,"chart-data":t.displayData,options:t.displayOption,"display-legends":t.displayLegends,height:240,width:r}})]}},{key:"sticky-chart",fn:function(){return[n("bar",{staticClass:"sticky-legend",attrs:{"chart-id":t.chartId+"-header-right","chart-data":t.displayDataHeader,options:t.displayOptionHeader,plugins:t.yAxesBgRightPlugin,"display-legends":t.displayLegends,height:240}})]},proxy:!0}])})],1)}),[],!1,(function(t){this.$style=S.default.locals||S.default}),null,null);e.default=component.exports;installComponents(component,{ScrollableChart:n(361).default,NotesExpansionPanel:n(341).default,DataViewTable:n(360).default,DataViewDataSetPanel:n(339).default,DataView:n(340).default})},485:function(t,e,n){"use strict";var r=n(393),o=n.n(r);n.d(e,"default",(function(){return o.a}))},486:function(t,e,n){var r=n(23)(!1);r.push([t.i,".GraphLegend_CxumT{text-align:center;list-style:none;padding:0!important}.GraphLegend_CxumT li{display:inline-block;margin:0 3px}.GraphLegend_CxumT li div{height:12px;margin:2px 4px;width:40px;display:inline-block;vertical-align:middle;border-width:1px;border-style:solid}.GraphLegend_CxumT li button{color:#707070;font-size:1.2rem}",""]),r.locals={GraphLegend:"GraphLegend_CxumT"},t.exports=r}}]);