(window.webpackJsonp=window.webpackJsonp||[]).push([[61,44,50],{388:function(t,e,n){var content=n(408);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(24).default)("4778035a",content,!0,{sourceMap:!1})},397:function(t,e,n){"use strict";n.r(e);var r=n(0).a.extend({props:{iconPath:{type:String,required:!1,default:""}}}),l=(n(407),n(10)),o=n(44),c=n.n(o),d=n(331),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header"},[n("h2",{staticClass:"pageTitle"},[t.iconPath?n("v-icon",{staticClass:"mr-2",attrs:{size:"40"}},[t._v("\n      "+t._s(t.iconPath)+"\n    ")]):t._e(),t._v(" "),t._t("pageHeader")],2)])}),[],!1,null,"c07f27fc",null);e.default=component.exports;c()(component,{VIcon:d.a})},407:function(t,e,n){"use strict";n(388)},408:function(t,e,n){var r=n(23)(!1);r.push([t.i,".header[data-v-c07f27fc]{display:flex;align-items:flex-end;flex-wrap:wrap}.pageTitle[data-v-c07f27fc]{font-size:3rem;color:#404040;display:flex;align-items:center;line-height:1.35;font-weight:400;margin:0 .5em 0 0}@media screen and (max-width:600px){.pageTitle[data-v-c07f27fc]{font-size:2rem}}",""]),t.exports=r},509:function(t,e,n){var content=n(580);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(24).default)("e26a494c",content,!0,{sourceMap:!1})},578:function(t){t.exports=JSON.parse('{"alertItems":[{"date":"2021-03-01T00:00:00+09:00","icon":"📄","url":{"ja":"https://www.pref.iwate.jp/kurashikankyou/iryou/covid19/1035392.html","en":null},"text":{"ja":"岩手県が不要不急の往来自粛をお願いしている地域","en":"Areas where Iwate Prefecture asks people to refrain from unnecessary traffic."}},{"date":"2021-05-11T00:00:00+09:00","icon":"📄","url":{"ja":"/cards/number-of-confirmed-cases-by-municipalities/","en":"/en/cards/number-of-confirmed-cases-by-municipalities/"},"text":{"ja":"盛岡市の「直近1週間の対人口10万人あたりの感染者数」(ステージ3指標の一つ)が閾値の 15 を超えて 22","en":null}},{"date":"2021-05-17T00:00:00+09:00","icon":"📄","url":{"ja":"https://aomoriovation.jp/howto/","en":null},"text":{"ja":"教えて！大西先生！！ (青森県コンテンツ)","en":null}},{"date":"2021-05-20T00:00:00+09:00","icon":"📄","url":{"ja":"https://youtu.be/KIMhbmpLunE?t=50","en":null},"text":{"ja":"やきとりかつ (盛岡市青山) 5/11〜5/14に利用した方は盛岡市保健所へ連絡を","en":null}},{"date":"2021-05-20T00:00:00+09:00","icon":"📺","url":{"ja":"https://youtu.be/KIMhbmpLunE?t=3532","en":null},"text":{"ja":"変異株のスクリーニング検査結果(岩手県で実施分の速報)(5/12〜5/14の検体分) N501Y を 4件 検出","en":null}}]}')},579:function(t,e,n){"use strict";n(509)},580:function(t,e,n){var r=n(23)(!1);r.push([t.i,".MainPage .Header[data-v-bd2ec29c]{display:flex;flex-wrap:wrap;align-items:flex-end}@media screen and (max-width:600px){.MainPage .Header[data-v-bd2ec29c]{flex-direction:column;align-items:baseline}}.MainPage .UpdatedAt[data-v-bd2ec29c]{font-size:1.4rem;color:#707070;margin-bottom:.2rem}.MainPage .Annotation[data-v-bd2ec29c]{font-size:1.2rem;color:#707070}@media screen and (min-width:601px){.MainPage .Annotation[data-v-bd2ec29c]{margin:0 0 0 auto}}",""]),t.exports=r},620:function(t,e,n){"use strict";n.r(e);n(45);var r=n(39),l=n(0),o=n(397),c=n(578),d=n(166),f=n(127),m=l.a.extend({components:{PageHeader:o.default},data:function(){var t=this,e=d.lastUpdate,n=c.alertItems.map((function(e){var n,r,l=t.$i18n.locale;return{text:null!==(n=e.text[l])&&void 0!==n?n:e.text.ja,url:null!==(r=e.url[l])&&void 0!==r?r:e.url.ja}}));return{headerItem:{iconPath:r.b,title:this.$t("Common.岩手の最新感染動向")},lastUpdate:e,alertItems:n}},computed:{updatedAt:function(){return Object(f.c)(this.$data.lastUpdate)},formattedDateForDisplay:function(){return"".concat(this.$d(new Date(this.$data.lastUpdate),"dateTime")," JST")}}}),v=(n(579),n(10)),component=Object(v.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"MainPage"},[n("div",{staticClass:"Header mb-3"},[n("page-header",{attrs:{"icon-path":t.headerItem.iconPath},scopedSlots:t._u([{key:"pageHeader",fn:function(){return[t._v("\n        "+t._s(t.headerItem.title)+"\n      ")]},proxy:!0}])}),t._v(" "),n("div",{staticClass:"UpdatedAt"},[n("span",[t._v(t._s(t.$t("SiteTopUpper.最終更新")))]),t._v(" "),n("time",{attrs:{datetime:t.updatedAt}},[t._v(t._s(t.formattedDateForDisplay))])]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:!["ja"].includes(t.$i18n.locale),expression:"!['ja'].includes($i18n.locale)"}],staticClass:"Annotation"},[n("span",[t._v(t._s(t.$t("SiteTopUpper.注釈")))])])],1),t._v(" "),n("lazy-static-info",{staticClass:"mb-4",attrs:{url:t.localePath("/flow"),text:t.$t("SiteTopUpper.電話相談をどうぞ"),"btn-text":t.$t("SiteTopUpper.相談の手順を見る")}}),t._v(" "),t._l(t.alertItems,(function(t,i){return n("lazy-static-info",{key:i,staticClass:"mb-4 alertItem",attrs:{url:t.url,text:t.text}})}))],2)}),[],!1,null,"bd2ec29c",null);e.default=component.exports;installComponents(component,{PageHeader:n(397).default})},698:function(t,e,n){"use strict";n.r(e);var r={head:function(){return{title:this.$t("Common.岩手の最新感染動向")}}},l=n(10),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("site-top-upper"),t._v(" "),n("lazy-cards-tab")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{SiteTopUpper:n(620).default})}}]);