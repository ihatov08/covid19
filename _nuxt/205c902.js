(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{362:function(t,e,n){var content=n(365);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(28).default)("223a2072",content,!0,{sourceMap:!1})},364:function(t,e,n){"use strict";n(362)},365:function(t,e,n){var r=n(27)(!1);r.push([t.i,".PageHeader[data-v-7e103b10]{display:flex;flex-wrap:wrap;align-items:center}.PageHeader>span.v-icon>svg[data-v-7e103b10]{width:30px;height:30px;fill:#404040}.PageHeader>.PageTitle[data-v-7e103b10]{font-size:3rem;color:#404040;display:flex;align-items:center;line-height:1.35;font-weight:400;margin:0 .5em 0 0}@media screen and (max-width:600px){.PageHeader>.PageTitle[data-v-7e103b10]{font-size:2rem}}.PageHeader>.UpdatedAt[data-v-7e103b10]{font-size:1.4rem;color:#707070;margin-bottom:.2rem}.PageHeader>.Annotation[data-v-7e103b10]{font-size:1.2rem;color:#707070}@media screen and (min-width:601px){.PageHeader>.Annotation[data-v-7e103b10]{margin:0 0 0 auto}}",""]),t.exports=r},367:function(t,e,n){"use strict";var r=n(0),o=n(135),l=r.a.extend({props:{iconPath:{type:String,required:!1,default:""},title:{type:String,required:!0,default:""},updatedAt:{type:String,required:!1,default:""}},computed:{updatedAtAsDate:function(){return new Date(this.updatedAt)}},methods:{formatDate:function(t){return"".concat(this.$d(t,"dateTime")," JST")},convertDate:function(t){return Object(o.c)(t)}}}),c=(n(364),n(11)),d=n(60),f=n.n(d),h=n(351),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"PageHeader mb-3"},[t._t("SvgIcon"),t._v(" "),n("h2",{staticClass:"PageTitle"},[t.iconPath?n("v-icon",{staticClass:"mr-2",attrs:{size:"40"}},[t._v("\n      "+t._s(t.iconPath)+"\n    ")]):t._e(),t._v("\n    "+t._s(t.title)+"\n  ")],1),t._v(" "),t._t("PrinterButton"),t._v(" "),t.updatedAt?n("div",{staticClass:"UpdatedAt"},[n("span",[t._v(t._s(t.$t("SiteTopUpper.最終更新")))]),t._v(" "),n("time",{attrs:{datetime:t.convertDate(t.updatedAt)}},[t._v(t._s(t.formatDate(t.updatedAtAsDate)))])]):t._e(),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:!["ja"].includes(t.$i18n.locale),expression:"!['ja'].includes($i18n.locale)"}],staticClass:"Annotation"},[n("span",[t._v(t._s(t.$t("SiteTopUpper.注釈")))])])],2)}),[],!1,null,"7e103b10",null);e.a=component.exports;f()(component,{VIcon:h.a})},419:function(t,e,n){var content=n(476);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(28).default)("7838f18c",content,!0,{sourceMap:!1})},420:function(t,e,n){var content=n(478);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(28).default)("71adac4a",content,!0,{sourceMap:!1})},444:function(t,e,n){var content=n(607);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(28).default)("7c50a31c",content,!0,{sourceMap:!1})},445:function(t,e,n){var content=n(615);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(28).default)("0ff169ac",content,!0,{sourceMap:!1})},475:function(t,e,n){"use strict";n(419)},476:function(t,e,n){var r=n(27)(!1);r.push([t.i,".DataCard{transition:max-height .3s}",""]),t.exports=r},477:function(t,e,n){"use strict";n(420)},478:function(t,e,n){var r=n(27)(!1);r.push([t.i,".DataBlock[data-v-1ea0c742]{margin-top:20px}.DataBlock .DataCard[data-v-1ea0c742]{padding:12px}@media screen and (max-width:960px){.DataBlock .DataCard[data-v-1ea0c742]{padding:12px}.DataBlock .DataCard[data-v-1ea0c742]:nth-child(2n){padding:0 12px 12px}}",""]),t.exports=r},606:function(t,e,n){"use strict";n(444)},607:function(t,e,n){var r=n(27)(!1);r.push([t.i,".v-window{overflow:visible!important}.v-slide-group__content{border-bottom:1px solid #03832d;background:#fbfbfb}.v-tab{top:1px;margin:0 8px;border-style:solid;border-radius:4px 4px 0 0;font-weight:700!important;background:#fbfbfb;font-size:1.6rem!important}.v-tab:hover{background-color:#03832d;color:#fff!important}.v-tab:before{background-color:transparent!important}.v-tab--active{color:#03832d!important;border-width:1px 1px 0}.v-tab--active,.v-tab--active:hover{border-color:#03832d #03832d #fbfbfb}.v-tab--active:before{background-color:transparent}.v-tab:not(.v-tab--active){color:#707070!important;border-color:#707070 #707070 #03832d;border-width:1px}.v-tab:not(.v-tab--active):hover{color:#fff!important}.v-tabs-items{background-color:transparent!important}@media screen and (max-width:768px){.v-slide-group__content,.v-tab{width:100%}.v-tab{font-size:2.0833333333vw!important;font-weight:700!important;flex:1 1 auto;padding:0 8px!important}}@media screen and (max-width:600px){.v-tab{font-size:3.3333333333vw!important;padding:0 4px!important}}",""]),t.exports=r},614:function(t,e,n){"use strict";n(445)},615:function(t,e,n){var r=n(27)(!1);r.push([t.i,".StaticInfo{display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;background-color:#fff;border:1px solid #d9d9d9;box-shadow:0 0 2px rgba(0,0,0,.15);border-radius:4px;padding:.5em 1em;font-size:1.4rem;color:#2083b9!important;text-decoration:none}.StaticInfo:hover{text-decoration:underline}.StaticInfo-Button{flex:1 0 auto;text-align:right}.StaticInfo-Button>button{padding:4px 8px;font-size:1.4rem;display:inline-block;border-radius:4px;background-color:#fff;border:1px solid #03832d;color:#03832d;cursor:pointer}.StaticInfo-Button>button:hover{background-color:#03832d;color:#fff}.StaticInfo-Button>button:hover>i{color:#fff!important}@media screen and (max-width:600px){.StaticInfo-Button{margin-top:4px}}",""]),t.exports=r},616:function(t){t.exports=JSON.parse('{"alertItems":[{"date":"2021-08-12","icon":"📄","url":{"ja":"https://www.pref.iwate.jp/kurashikankyou/iryou/covid19/1045804.html","en":null},"text":{"ja":"岩手県独自の「岩手緊急事態宣言」を実施中。 【解除の目安：毎日の陽性者数 17人以下が1週間続く】","en":"The Iwate governor declared a Iwate own\'s state of emergency over COVID-19."}},{"date":"2021-08-19","icon":"📺","url":{"ja":"https://www.youtube.com/watch?v=CB4VlLlgTeE","en":null},"text":{"ja":"知事メッセージ [現状と今後の方針・まん延防止等重点措置の要請に着手] (2021/08/19)","en":null}},{"date":"2021-08-20","icon":"📄","url":{"ja":"https://www.pref.iwate.jp/kurashikankyou/iryou/covid19/1037252.html","en":null},"text":{"ja":"県による第2期ワクチンの集団接種【8月24日(火)正午頃から予約開始】(モデルナ) の案内と予約サイトURLが公表された。自治体による年齢別接種(ファイザー)の順番がまだ回ってこない方でも、接種券が届いていていれば年齢に関係なく予約に参加できる。特に接種が非常に遅れている盛岡市居住者などは県の集団接種の方が早い。","en":null}}]}')},649:function(t,e,n){"use strict";n.r(e);var r=n(46),o=n(367),l=n(0),c=(n(49),n(34),n(4)),d=n(405),f={data:function(){return{payload:{}}},methods:{handleCardHeight:function(){if(this.payload.dataView){var t=Object(c.a)(this.cardElements,2),e=t[0],n=t[1];e&&(e.style.maxHeight="",e.dataset.height="".concat(e.offsetHeight)),n&&(n.style.maxHeight="",n.dataset.height="".concat(n.offsetHeight))}},alignHeight:function(){var t=Object(c.a)(this.cardElements,2),e=t[0],n=t[1];e&&n&&(e.dataset.height=e.dataset.height||"".concat(e.offsetHeight),n.dataset.height=n.dataset.height||"".concat(n.offsetHeight))}},computed:{cardElements:function(){if(!this.payload.dataView)return[null,null];var t=this.$el.children,e=this.payload.dataView.$el.parentElement,n=Array.prototype.indexOf.call(t,e)+1;if(0===n)return[null,null];var r=n%2==0?n-1:n+1;return[e,this.$el.querySelector("".concat(".DataCard",":nth-child(").concat(r))]}},mounted:function(){var t=this;window.addEventListener("resize",this.handleCardHeight),d.a.$on(d.b,(function(e){t.payload=e,t.alignHeight()}))},beforeDestroy:function(){window.removeEventListener("resize",this.handleCardHeight),d.a.$off(d.b)}},h=l.a.extend(f),v=(n(475),n(11)),m=n(60),x=n.n(m),w=n(637),component=Object(v.a)(h,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("v-row",[t._t("default")],2)}),[],!1,null,null,null),_=component.exports;x()(component,{VRow:w.a});var y=l.a.extend({components:{CardRow:_},props:{rows:{type:Array,required:!0}},data:function(){return{actives:Array.from({length:this.rows.length},(function(){return!1})),scroll:!1}},methods:{handler:function(t,e,n){n&&this.$set(this.actives,this.actives.indexOf(!1),!0)},onScroll:function(){this.scroll||(this.scroll=!0,this.$set(this.actives,0,!0),this.$set(this.actives,1,!0))}}}),k=(n(477),n(638)),S=n(407),C=n.n(S),$=n(381),I=n(479),j=Object(v.a)(y,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"DataBlock"},t._l(t.rows,(function(e,i){return n("v-lazy",{directives:[{name:"intersect",rawName:"v-intersect",value:t.handler,expression:"handler"},{name:"scroll",rawName:"v-scroll",value:t.onScroll,expression:"onScroll"}],key:i,attrs:{value:t.actives[i],options:{threshold:0},"min-height":"550","min-width":"50%"}},[t.actives[i]?n("card-row",t._l(e,(function(component,t){return n(component,{key:t,tag:"component",attrs:{md:"6"}})})),1):t._e()],1)})),1)}),[],!1,null,"1ea0c742",null),T=j.exports;x()(j,{VLazy:k.a}),C()(j,{Intersect:$.a,Scroll:I.a});var z=n(451),H=n(453),P=n(454),A=n(452),D=n(455),E=n(456),O=n(457),U=n(458),B=n(459),V=n(460),M=n(461),L=n(462),R=n(463),N=n(464),J=n(465),F=l.a.extend({components:{CardsLazyRow:T},data:function(){return{rows:[[L.a],[P.a,J.a],[V.a,D.a],[A.a,B.a],[E.a,U.a],[O.a,N.a],[z.a,H.a],[M.a,R.a]]}}}),G=Object(v.a)(F,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("cards-lazy-row",{attrs:{rows:t.rows}})}),[],!1,null,null,null).exports,K=n(466),Q=n(467),W=n(468),X=l.a.extend({components:{CardsLazyRow:T},data:function(){return{rows:[[W.a,Q.a],[K.a]]}}}),Y=Object(v.a)(X,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("cards-lazy-row",{attrs:{rows:t.rows}})}),[],!1,null,null,null).exports,Z=n(435),tt=l.a.extend({components:{CardsMonitoring:G,CardsReference:Y},data:function(){return{tab:null,items:[{label:this.$t("Common.モニタリング項目"),component:G},{label:this.$t("Common.お知らせ・参考資料"),component:Y}]}},methods:{change:function(){Z.a.$emit(Z.b)}}}),et=(n(606),n(646)),at=n(657),nt=n(656),ot=n(630),it=n(363),st=Object(v.a)(tt,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("client-only",[n("v-tabs",{attrs:{"hide-slider":""},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[t._l(t.items,(function(e,i){return n("v-tab",{directives:[{name:"ripple",rawName:"v-ripple",value:!1,expression:"false"}],key:i,attrs:{href:"#tab-"+i},on:{click:t.change}},[t._v("\n      "+t._s(e.label)+"\n    ")])})),t._v(" "),n("v-tabs-items",{attrs:{touchless:""},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},t._l(t.items,(function(t,i){return n("v-tab-item",{key:i,attrs:{value:"tab-"+i}},[n(t.component,{tag:"lazy-component"})],1)})),1)],2)],1)}),[],!1,null,null,null),lt=st.exports;x()(st,{VTab:et.a,VTabItem:at.a,VTabs:nt.a,VTabsItems:ot.a}),C()(st,{Ripple:it.a});n(41);var ct=n(113),ut=l.a.extend({components:{AppLink:ct.a},props:{url:{type:String,default:"",required:!0},text:{type:String,default:"",required:!0},btnText:{type:String,default:""}}}),pt=(n(614),Object(v.a)(ut,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("app-link",{staticClass:"StaticInfo",attrs:{to:t.url,"show-icon":!1}},[t._v("\n  "+t._s(t.text)+"\n  "),t.btnText?n("div",{staticClass:"StaticInfo-Button"},[n("button",[t._v("\n      "+t._s(t.btnText)+"\n    ")])]):t._e()])}),[],!1,null,null,null).exports),ft=n(616),ht=l.a.extend({components:{StaticInfo:pt},data:function(){var t=this,e=ft.alertItems.map((function(e){var n,r,o=t.$i18n.locale;return{text:null!==(n=e.text[o])&&void 0!==n?n:e.text.ja,url:null!==(r=e.url[o])&&void 0!==r?r:e.url.ja}}));return{headerItem:{iconPath:r.b,title:this.$t("Common.岩手の最新感染動向")},alertItems:e}}}),vt=Object(v.a)(ht,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"SiteTopUpper"},[n("static-info",{key:t.$t("SiteTopUpper.電話相談をどうぞ"),staticClass:"mb-4",attrs:{url:t.localePath("/flow"),text:t.$t("SiteTopUpper.電話相談をどうぞ"),"btn-text":t.$t("SiteTopUpper.相談の手順を見る")}}),t._v(" "),t._l(t.alertItems,(function(t){return n("static-info",{key:t.text,staticClass:"mb-4 alertItem",attrs:{url:t.url,text:t.text}})}))],2)}),[],!1,null,null,null).exports,mt=n(175),bt={components:{CardsTab:lt,PageHeader:o.a,SiteTopUpper:vt},data:function(){return{lastUpdate:mt.lastUpdate,headerItem:{iconPath:r.b,title:this.$t("Common.岩手の最新感染動向")}}},computed:{lastUpdateAsString:function(){return this.lastUpdate}},head:function(){return{title:this.$t("Common.岩手の最新感染動向")}}},xt=Object(v.a)(bt,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("page-header",{attrs:{"icon-path":t.headerItem.iconPath,title:t.headerItem.title,"updated-at":t.lastUpdateAsString}}),t._v(" "),n("site-top-upper"),t._v(" "),n("v-lazy",[n("cards-tab")],1)],1)}),[],!1,null,null,null);e.default=xt.exports;x()(xt,{VLazy:k.a})}}]);