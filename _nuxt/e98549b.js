(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{356:function(t,e,n){var content=n(361);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(27).default)("223a2072",content,!0,{sourceMap:!1})},360:function(t,e,n){"use strict";n(356)},361:function(t,e,n){var r=n(26)(!1);r.push([t.i,".PageHeader[data-v-7e103b10]{display:flex;flex-wrap:wrap;align-items:center}.PageHeader>span.v-icon>svg[data-v-7e103b10]{width:30px;height:30px;fill:#404040}.PageHeader>.PageTitle[data-v-7e103b10]{font-size:3rem;color:#404040;display:flex;align-items:center;line-height:1.35;font-weight:400;margin:0 .5em 0 0}@media screen and (max-width:600px){.PageHeader>.PageTitle[data-v-7e103b10]{font-size:2rem}}.PageHeader>.UpdatedAt[data-v-7e103b10]{font-size:1.4rem;color:#707070;margin-bottom:.2rem}.PageHeader>.Annotation[data-v-7e103b10]{font-size:1.2rem;color:#707070}@media screen and (min-width:601px){.PageHeader>.Annotation[data-v-7e103b10]{margin:0 0 0 auto}}",""]),t.exports=r},363:function(t,e,n){"use strict";var r=n(0),o=n(133),d=r.a.extend({props:{iconPath:{type:String,required:!1,default:""},title:{type:String,required:!0,default:""},updatedAt:{type:String,required:!1,default:""}},computed:{updatedAtAsDate:function(){return new Date(this.updatedAt)}},methods:{formatDate:function(t){return"".concat(this.$d(t,"dateTime")," JST")},convertDate:function(t){return Object(o.c)(t)}}}),c=(n(360),n(11)),l=n(60),_=n.n(l),v=n(346),component=Object(c.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"PageHeader mb-3"},[t._t("SvgIcon"),t._v(" "),n("h2",{staticClass:"PageTitle"},[t.iconPath?n("v-icon",{staticClass:"mr-2",attrs:{size:"40"}},[t._v("\n      "+t._s(t.iconPath)+"\n    ")]):t._e(),t._v("\n    "+t._s(t.title)+"\n  ")],1),t._v(" "),t._t("PrinterButton"),t._v(" "),t.updatedAt?n("div",{staticClass:"UpdatedAt"},[n("span",[t._v(t._s(t.$t("SiteTopUpper.最終更新")))]),t._v(" "),n("time",{attrs:{datetime:t.convertDate(t.updatedAt)}},[t._v(t._s(t.formatDate(t.updatedAtAsDate)))])]):t._e(),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:!["ja"].includes(t.$i18n.locale),expression:"!['ja'].includes($i18n.locale)"}],staticClass:"Annotation"},[n("span",[t._v(t._s(t.$t("SiteTopUpper.注釈")))])])],2)}),[],!1,null,"7e103b10",null);e.a=component.exports;_()(component,{VIcon:v.a})},364:function(t,e,n){var content=n(378);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(27).default)("51bb5182",content,!0,{sourceMap:!1})},377:function(t,e,n){"use strict";n(364)},378:function(t,e,n){var r=n(26)(!1);r.push([t.i,".StaticCard{background-color:#fff;box-shadow:0 0 2px rgba(0,0,0,.15);border:.5px solid #d9d9d9!important;border-radius:4px;font-size:1.6rem;padding:20px;margin-bottom:20px;word-wrap:break-word}.StaticCard>:not(:first-child){margin-top:1.2em}.StaticCard h3{font-size:2.4rem;color:#404040;font-weight:700}.StaticCard h4{font-size:1.9rem;color:#404040;font-weight:700}.StaticCard h5{font-size:1.6rem;color:#404040;font-weight:700}.StaticCard p{margin-bottom:0}.StaticCard sup{vertical-align:top}.StaticCard ol,.StaticCard ul{padding-left:24px}.StaticCard dd,.StaticCard dt:not(:first-child){margin-top:.6em}.StaticCard dd{margin-left:2em}@media screen and (max-width:768px){.StaticCard dd{margin-left:4.1666666667vw}}.StaticCard dd>:not(:first-child){margin-top:.6em}.StaticCard img{max-width:100%}.StaticCard figcaption{margin-top:.6em;color:#404040}.StaticCard em,.StaticCard strong{border-bottom:2px solid #03832d}.StaticCard em{font-style:normal}.StaticCard a{font-size:1.4rem;color:#2083b9!important;text-decoration:none;font-size:inherit}.StaticCard a:hover{text-decoration:underline}.StaticCard a .ExternalLinkIcon{display:inline-block;color:#2083b9;text-decoration:none;vertical-align:inherit}.StaticCard-Note{display:flex}.StaticCard-Note>span{display:block}.StaticCard-Note>span:first-child{margin-right:.5em}",""]),t.exports=r},382:function(t,e,n){"use strict";var r=n(0).a.extend(),o=(n(377),n(11)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"StaticCard"},[t._t("default")],2)}),[],!1,null,null,null);e.a=component.exports},701:function(t,e,n){"use strict";n.r(e);var r=n(0),o=n(112),d=n(363),c=n(382),l=r.a.extend({name:"About",components:{PageHeader:d.a,StaticCard:c.a,AppLink:o.a},data:function(){return{headerItem:{title:this.$t("Common.当サイトについて")}}},head:function(){return{title:this.$t("Common.当サイトについて")}}}),_=n(11),component=Object(_.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"About"},[n("page-header",{attrs:{title:t.headerItem.title}}),t._v(" "),n("static-card",t._l(t.$t("About.a"),(function(e,r){return n("p",{key:r},[t._v("\n      "+t._s(e)+"\n    ")])})),0),t._v(" "),n("static-card",[n("h3",[t._v(t._s(t.$t("About.b[0]")))]),t._v(" "),n("p",[t._v(t._s(t.$t("About.b[1]")))]),t._v(" "),n("ul",t._l(t.$t("About.b[2]"),(function(e,r){return n("li",{key:r},[t._v(t._s(e))])})),0),t._v(" "),n("p",{staticClass:"StaticCard-Note"},[n("span",[t._v("*")]),t._v(" "),n("span",[t._v(t._s(t.$t("About.b[3]")))])])]),t._v(" "),n("static-card",[n("h3",[t._v(t._s(t.$t("About.c[0]")))]),t._v(" "),n("p",[t._v(t._s(t.$t("About.c[1]")))])]),t._v(" "),n("static-card",[n("h3",[t._v(t._s(t.$t("About.d[0]")))]),t._v(" "),t._l(t.$t("About.d[1]"),(function(e,r){return n("p",{key:r},[t._v("\n      "+t._s(e)+"\n    ")])}))],2),t._v(" "),n("static-card",[n("h3",[t._v(t._s(t.$t("About.e[0]")))]),t._v(" "),t._l(t.$t("About.e[1]"),(function(e,r){return n("p",{key:r},[t._v("\n      "+t._s(e)+"\n    ")])}))],2),t._v(" "),n("static-card",[n("h3",[t._v(t._s(t.$t("About.f[0]")))]),t._v(" "),t._l(t.$t("About.f[1]"),(function(e,r){return n("p",{key:r},[t._v("\n      "+t._s(e)+"\n    ")])})),t._v(" "),n("ul",t._l(t.$t("About.f[2]"),(function(e,r){return n("li",{key:r},[n("app-link",{attrs:{to:e[1],"icon-size":16}},[t._v("\n          "+t._s(e[0])+"\n        ")])],1)})),0),t._v(" "),n("i18n",{attrs:{tag:"p",path:"GA{addon}"},scopedSlots:t._u([{key:"addon",fn:function(){return[n("app-link",{attrs:{to:t.$t("About.f[3][0]"),"icon-size":16}},[t._v("\n          "+t._s(t.$t("About.f[3][1]"))+"\n        ")])]},proxy:!0}])})],2),t._v(" "),n("static-card",[n("h3",[t._v(t._s(t.$t("About.g[0]")))]),t._v(" "),t._l(t.$t("About.g[1]"),(function(e,r){return n("p",{key:r},[t._v("\n      "+t._s(e)+"\n    ")])}))],2),t._v(" "),n("static-card",[n("h3",[t._v(t._s(t.$t("About.h[0]")))]),t._v(" "),n("p",[t._v("\n      "+t._s(t.$t("About.h[1]"))+"\n      "),n("i18n",{attrs:{path:"GH{githubRepo}"},scopedSlots:t._u([{key:"githubRepo",fn:function(){return[n("app-link",{attrs:{to:"https://github.com/MeditationDuck/covid19","icon-size":16}},[t._v("\n            "+t._s(t.$t("About.h[2]"))+"\n          ")])]},proxy:!0}])})],1)])],1)}),[],!1,null,null,null);e.default=component.exports}}]);