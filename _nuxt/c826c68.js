(window.webpackJsonp=window.webpackJsonp||[]).push([[50,44],{388:function(e,t,n){var content=n(408);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(24).default)("4778035a",content,!0,{sourceMap:!1})},397:function(e,t,n){"use strict";n.r(t);var r=n(0).a.extend({props:{iconPath:{type:String,required:!1,default:""}}}),l=(n(407),n(10)),c=n(44),o=n.n(c),d=n(331),component=Object(l.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"header"},[n("h2",{staticClass:"pageTitle"},[e.iconPath?n("v-icon",{staticClass:"mr-2",attrs:{size:"40"}},[e._v("\n      "+e._s(e.iconPath)+"\n    ")]):e._e(),e._v(" "),e._t("pageHeader")],2)])}),[],!1,null,"c07f27fc",null);t.default=component.exports;o()(component,{VIcon:d.a})},407:function(e,t,n){"use strict";n(388)},408:function(e,t,n){var r=n(23)(!1);r.push([e.i,".header[data-v-c07f27fc]{display:flex;align-items:flex-end;flex-wrap:wrap}.pageTitle[data-v-c07f27fc]{font-size:3rem;color:#404040;display:flex;align-items:center;line-height:1.35;font-weight:400;margin:0 .5em 0 0}@media screen and (max-width:600px){.pageTitle[data-v-c07f27fc]{font-size:2rem}}",""]),e.exports=r},509:function(e,t,n){var content=n(580);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(24).default)("e26a494c",content,!0,{sourceMap:!1})},578:function(e){e.exports=JSON.parse('{"alertItems":[{"date":"2021-03-01T00:00:00+09:00","icon":"📄","url":{"ja":"https://www.pref.iwate.jp/kurashikankyou/iryou/covid19/1035392.html","en":null},"text":{"ja":"岩手県が不要不急の往来自粛をお願いしている地域","en":"Areas where Iwate Prefecture asks people to refrain from unnecessary traffic."}},{"date":"2021-05-07T00:00:00+09:00","icon":"📄","url":{"ja":"/cards/untracked-rate/","en":"/en/cards/untracked-rate/"},"text":{"ja":"接触歴不明者数が平均でおよそ5人/日 (過去最高値を更新)","en":null}},{"date":"2021-05-11T00:00:00+09:00","icon":"📺","url":{"ja":"/cards/number-of-confirmed-cases-by-municipalities","en":"/en/cards/number-of-confirmed-cases-by-municipalities"},"text":{"ja":"盛岡市の「直近1週間の対人口10万人あたりの感染者数」(ステージ3指標の一つ)が閾値の15を超えて19.2の最高値を維持。（直近1週間に突発的な大規模な施設クラスターが無いのでベース値として上昇中）","en":null}},{"date":"2021-05-11T00:00:00+09:00","icon":"📺","url":{"ja":"https://youtu.be/RVb8mPY0ixM?t=1328","en":null},"text":{"ja":"盛岡市内の場合、陽性者の行動歴をたどると、高頻度に盛岡市中心部の繁華街における飲食の機会が見られる。来店者リスト等があり個々の店名の公表はされていないが、4月以降の陽性約160例のうち53例について接触歴を遡ると11店舗につながる。積極的疫学調査に協力いただけない場合もあり、接触歴を追えない・見えていないクラスター・探知されていない患者が数倍、存在すると思われる状態。盛岡地域の入院病床・宿泊療養施設・医療スタッフや保健所のリソースも負荷が蓄積してきている。 (矢野所長：注意喚起と状況の説明)","en":null}}]}')},579:function(e,t,n){"use strict";n(509)},580:function(e,t,n){var r=n(23)(!1);r.push([e.i,".MainPage .Header[data-v-bd2ec29c]{display:flex;flex-wrap:wrap;align-items:flex-end}@media screen and (max-width:600px){.MainPage .Header[data-v-bd2ec29c]{flex-direction:column;align-items:baseline}}.MainPage .UpdatedAt[data-v-bd2ec29c]{font-size:1.4rem;color:#707070;margin-bottom:.2rem}.MainPage .Annotation[data-v-bd2ec29c]{font-size:1.2rem;color:#707070}@media screen and (min-width:601px){.MainPage .Annotation[data-v-bd2ec29c]{margin:0 0 0 auto}}",""]),e.exports=r},620:function(e,t,n){"use strict";n.r(t);n(45);var r=n(39),l=n(0),c=n(397),o=n(578),d=n(166),f=n(127),m=l.a.extend({components:{PageHeader:c.default},data:function(){var e=this,t=d.lastUpdate,n=o.alertItems.map((function(t){var n,r,l=e.$i18n.locale;return{text:null!==(n=t.text[l])&&void 0!==n?n:t.text.ja,url:null!==(r=t.url[l])&&void 0!==r?r:t.url.ja}}));return{headerItem:{iconPath:r.b,title:this.$t("Common.岩手の最新感染動向")},lastUpdate:t,alertItems:n}},computed:{updatedAt:function(){return Object(f.c)(this.$data.lastUpdate)},formattedDateForDisplay:function(){return"".concat(this.$d(new Date(this.$data.lastUpdate),"dateTime")," JST")}}}),v=(n(579),n(10)),component=Object(v.a)(m,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"MainPage"},[n("div",{staticClass:"Header mb-3"},[n("page-header",{attrs:{"icon-path":e.headerItem.iconPath},scopedSlots:e._u([{key:"pageHeader",fn:function(){return[e._v("\n        "+e._s(e.headerItem.title)+"\n      ")]},proxy:!0}])}),e._v(" "),n("div",{staticClass:"UpdatedAt"},[n("span",[e._v(e._s(e.$t("SiteTopUpper.最終更新")))]),e._v(" "),n("time",{attrs:{datetime:e.updatedAt}},[e._v(e._s(e.formattedDateForDisplay))])]),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:!["ja"].includes(e.$i18n.locale),expression:"!['ja'].includes($i18n.locale)"}],staticClass:"Annotation"},[n("span",[e._v(e._s(e.$t("SiteTopUpper.注釈")))])])],1),e._v(" "),n("lazy-static-info",{staticClass:"mb-4",attrs:{url:e.localePath("/flow"),text:e.$t("SiteTopUpper.電話相談をどうぞ"),"btn-text":e.$t("SiteTopUpper.相談の手順を見る")}}),e._v(" "),e._l(e.alertItems,(function(e,i){return n("lazy-static-info",{key:i,staticClass:"mb-4 alertItem",attrs:{url:e.url,text:e.text}})}))],2)}),[],!1,null,"bd2ec29c",null);t.default=component.exports;installComponents(component,{PageHeader:n(397).default})}}]);