(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{341:function(t,e,n){var content=n(369);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(19).default)("4778035a",content,!0,{sourceMap:!1})},349:function(t,e,n){"use strict";n.r(e);var r=n(0).a.extend({props:{iconPath:{type:String,required:!1,default:""}}}),l=(n(368),n(8)),o=n(31),c=n.n(o),d=n(314),component=Object(l.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header"},[e("h2",{staticClass:"pageTitle"},[this.iconPath?e("v-icon",{staticClass:"mr-2",attrs:{size:"40"}},[this._v("\n      "+this._s(this.iconPath)+"\n    ")]):this._e(),this._v(" "),this._t("pageHeader")],2)])}),[],!1,null,"c07f27fc",null);e.default=component.exports;c()(component,{VIcon:d.a})},368:function(t,e,n){"use strict";n(341)},369:function(t,e,n){(e=n(18)(!1)).push([t.i,".header[data-v-c07f27fc]{display:flex;align-items:flex-end;flex-wrap:wrap}.pageTitle[data-v-c07f27fc]{font-size:3rem;color:#4d4d4d;display:flex;align-items:center;line-height:1.35;font-weight:400;margin:0 .5em 0 0}@media screen and (max-width:600px){.pageTitle[data-v-c07f27fc]{font-size:2rem}}",""]),t.exports=e},459:function(t,e,n){var content=n(493);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(19).default)("00e7d62b",content,!0,{sourceMap:!1})},491:function(t){t.exports=JSON.parse('{"alertItems":[{"date":"2021-03-01T00:00:00+09:00","icon":"📄","url":{"ja":"https://www.pref.iwate.jp/kurashikankyou/iryou/covid19/1035392.html","en":null},"text":{"ja":"岩手県が不要不急の往来自粛をお願いしている地域","en":null}},{"date":"2021-03-08T00:00:00+09:00","icon":"📄","url":{"ja":"https://www.pref.iwate.jp/_res/projects/default_project/_page_/001/035/134/20210308_07_1.pdf","en":null},"text":{"ja":"医療従事者・高齢者向けワクチンの配給スケジュール等","en":null}}]}')},492:function(t,e,n){"use strict";n(459)},493:function(t,e,n){(e=n(18)(!1)).push([t.i,".MainPage .Header[data-v-376c5cca]{display:flex;flex-wrap:wrap;align-items:flex-end}@media screen and (max-width:600px){.MainPage .Header[data-v-376c5cca]{flex-direction:column;align-items:baseline}}.MainPage .UpdatedAt[data-v-376c5cca]{font-size:1.4rem;color:#707070;margin-bottom:.2rem}.MainPage .Annotation[data-v-376c5cca]{font-size:1.2rem;color:#707070}@media screen and (min-width:601px){.MainPage .Annotation[data-v-376c5cca]{margin:0 0 0 auto}}",""]),t.exports=e},576:function(t,e,n){"use strict";n.r(e);n(34);var r=n(35),l=n(11),o=n.n(l),c=n(0),d=n(349),f=n(491),h=n(160),m=n(121),v=c.a.extend({components:{PageHeader:d.default},data:function(){var t=this,e=h.lastUpdate,n=f.alertItems.sort((function(a,b){return o()(a.date).isBefore(o()(b.date))?1:-1})).map((function(e){var n,r,l=t.$i18n.locale;return{text:null!==(n=e.text[l])&&void 0!==n?n:e.text.ja,url:null!==(r=e.url[l])&&void 0!==r?r:e.url.ja}}));return{headerItem:{iconPath:r.b,title:this.$t("Common.岩手の最新感染動向")},lastUpdate:e,alertItems:n}},head:function(){return{title:this.$t("Common.岩手の最新感染動向")}},computed:{updatedAt:function(){return Object(m.c)(this.$data.lastUpdate)},formattedDateForDisplay:function(){return"".concat(this.$d(new Date(this.$data.lastUpdate),"dateTime")," JST")}}}),x=(n(492),n(8)),component=Object(x.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"MainPage"},[n("div",{staticClass:"Header mb-3"},[n("page-header",{attrs:{"icon-path":t.headerItem.iconPath},scopedSlots:t._u([{key:"pageHeader",fn:function(){return[t._v("\n        "+t._s(t.headerItem.title)+"\n      ")]},proxy:!0}])}),t._v(" "),n("div",{staticClass:"UpdatedAt"},[n("span",[t._v(t._s(t.$t("SiteTopUpper.最終更新")))]),t._v(" "),n("time",{attrs:{datetime:t.updatedAt}},[t._v(t._s(t.formattedDateForDisplay))])]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:!["ja"].includes(t.$i18n.locale),expression:"!['ja'].includes($i18n.locale)"}],staticClass:"Annotation"},[n("span",[t._v(t._s(t.$t("SiteTopUpper.注釈")))])])],1),t._v(" "),n("lazy-static-info",{staticClass:"mb-4",attrs:{url:t.localePath("/flow"),text:t.$t("SiteTopUpper.電話相談をどうぞ"),"btn-text":t.$t("SiteTopUpper.相談の手順を見る")}}),t._v(" "),t._l(t.alertItems,(function(t,i){return n("lazy-static-info",{key:i,staticClass:"mb-4",attrs:{url:t.url,text:t.text}})}))],2)}),[],!1,null,"376c5cca",null);e.default=component.exports;installComponents(component,{PageHeader:n(349).default,LazyStaticInfo:function(){return n.e(11).then(n.bind(null,598)).then((function(t){return t.default||t}))}})},602:function(t,e,n){"use strict";n.r(e);var r=n(8),component=Object(r.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("site-top-upper"),this._v(" "),e("lazy-cards-tab")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{SiteTopUpper:n(576).default,LazyCardsTab:function(){return Promise.all([n.e(3),n.e(21),n.e(10)]).then(n.bind(null,597)).then((function(t){return t.default||t}))}})}}]);