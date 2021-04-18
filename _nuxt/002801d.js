(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{110:function(e,t,n){"use strict";var o=n(42);t.a=Object(o.a)({"en-us":{about:"About",sponsor:"Sponsor",speaking:"Speaking",cfp:"Call for Proposals",talk:"Propose a Talk",tutorial:"Propose a Tutorial",recording:"Recording Release",conference:"Conference",schedule:"Schedule",keynotes:"Keynotes",talks:"Talks",tutorials:"Tutorials",communityTracks:"Community Tracks",events:"Events",overview:"Overview",warmUpSessions:"Warm-Up Sessions",openSpaces:"Open Spaces",sprints:"Sprints",jobListings:"Job Listings",registration:"Registration",conferenceTickets:"Conference Tickets",financialAid:"Financial Aid",venue:"Venue",covid19Guidelines:"COVID-19 Guidelines",volunteer:"Volunteer",signIn:"Sign In"},"zh-hant":{about:"關於",sponsor:"贊助",speaking:"投稿",cfp:"投稿募集",talk:"如何投稿演講",tutorial:"如何投稿專業課程",recording:"錄影釋出",conference:"議程",schedule:"時間表",keynotes:"基調演講",talks:"一般演講",tutorials:"專業課程",communityTracks:"社群軌",events:"活動",overview:"活動總覽",warmUpSessions:"暖身活動",openSpaces:"開放空間",sprints:"衝刺開發",jobListings:"徵才資訊",registration:"註冊",conferenceTickets:"會議門票",financialAid:"財務補助",venue:"會場",covid19Guidelines:"COVID-19 防疫守則",volunteer:"志工招募",signIn:"登入"}})},144:function(e,t,n){"use strict";n.r(t);var o=n(149),r=n(150).default,c=n(151),l=n(147).default,f={name:"CoreHeader",components:{HomeIcon:o.default,LocaleSwitch:l,NavBar:r,NavBarHamburger:c.default},computed:{myPyConUrl:function(){return"https://tw.pycon.org/prs/".concat(this.$i18n.locale,"/dashboard/")}}},d=(n(283),n(4)),component=Object(d.a)(f,(function(){var e=this.$createElement,t=this._self._c||e;return t("header",{staticClass:"w-full h-full"},[t("div",{staticClass:"header-container --desktop hidden md:flex"},[t("home-icon"),this._v(" "),t("nav-bar"),this._v(" "),t("locale-switch")],1),this._v(" "),t("div",{staticClass:"header-container --mobile flex md:hidden"},[t("home-icon"),this._v(" "),t("div",{staticClass:"h-full flex items-center"},[t("locale-switch"),this._v(" "),t("nav-bar-hamburger")],1)],1)])}),[],!1,null,"e2eeabb2",null);t.default=component.exports;installComponents(component,{HomeIcon:n(149).default,NavBar:n(150).default,LocaleSwitch:n(147).default,NavBarHamburger:n(151).default,Header:n(144).default})},145:function(e,t,n){"use strict";n.r(t);var o=n(42),r={i18n:Object(o.a)({"en-us":{announceMsg:"The Call for Proposals is now open!"},"zh-hant":{announceMsg:"目前開放徵稿中，歡迎大家投稿演講與專業課程！"}}),name:"AnnounceBar",components:{LocaleLink:n(23).b},data:function(){return{completeFlag:!1}},methods:{completeRead:function(){this.completeFlag=!0}}},c=(n(285),n(4)),component=Object(c.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"h-12 px-8",class:{hidden:e.completeFlag}},[n("nav",{staticClass:"h-full",on:{click:e.completeRead}},[n("locale-link",{attrs:{to:"/speaking/cfp",customized:""}},[e._v("\n            "+e._s(e.$t("announceMsg"))+"\n        ")])],1),e._v(" "),n("div",{attrs:{id:"closeBarBtn"},on:{click:e.completeRead}},[e._v("X")])])}),[],!1,null,"72ef89ff",null);t.default=component.exports;installComponents(component,{LocaleLink:n(31).default})},146:function(e,t,n){"use strict";n.r(t);var o=n(42),r=Object(o.a)({"en-us":{codeOfConduct:"Code of Conduct",staff:"Staff",community:"Community",privacyPolicy:"Privacy Policy"},"zh-hant":{codeOfConduct:"行為準則",staff:"工作人員",community:"社群",privacyPolicy:"個人資料保護聲明"}}),c=n(148),l=n(23),f={i18n:r,name:"CoreFooter",components:{FooterIcon:c.default,LocaleLink:l.b}},d=n(4),component=Object(d.a)(f,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("footer",{staticClass:"w-full flex flex-col justify-between bg-dark-secondary text-golden"},[n("div",{staticClass:"w-full p-10"},[n("div",{staticClass:"h-32 flex justify-center"},[n("div",{staticClass:"flex flex-col items-center"},[n("locale-link",{staticClass:"my-2",attrs:{to:"/about/code-of-conduct"}},[e._v("\n                    "+e._s(e.$t("codeOfConduct"))+"\n                ")]),e._v(" "),n("locale-link",{staticClass:"my-2",attrs:{to:"/about/staff"}},[e._v(e._s(e.$t("staff")))]),e._v(" "),n("locale-link",{staticClass:"my-2",attrs:{to:"/about/privacy-policy"}},[e._v("\n                    "+e._s(e.$t("privacyPolicy"))+"\n                ")])],1)]),e._v(" "),n("div",{staticClass:"w-full flex justify-center items-center flex-wrap"},[n("footer-icon",{attrs:{href:"https://pycontw.blogspot.tw/",icon:["fab","blogger"]}}),e._v(" "),n("footer-icon",{attrs:{href:"https://www.facebook.com/pycontw",icon:["fab","facebook"]}}),e._v(" "),n("footer-icon",{attrs:{href:"https://t.me/pycontw_chat",icon:["fab","telegram"]}}),e._v(" "),n("footer-icon",{attrs:{href:"https://twitter.com/pycontw",icon:["fab","twitter-square"]}}),e._v(" "),n("footer-icon",{attrs:{href:"https://www.youtube.com/PyConTaiwan",icon:["fab","youtube-square"]}}),e._v(" "),n("footer-icon",{attrs:{href:"mailto:organizers@pycon.tw",icon:["fas","envelope-square"]}}),e._v(" "),n("footer-icon",{attrs:{href:"https://discord.com/invite/94hgCQv",icon:["fab","discord"]}})],1)]),e._v(" "),n("div",{staticClass:"w-full flex py-4 justify-center cursor-default bg-dark-primary"},[e._v("\n        © 2021 PyCon Taiwan\n    ")])])}),[],!1,null,"d295183a",null);t.default=component.exports;installComponents(component,{LocaleLink:n(31).default,FooterIcon:n(148).default,Footer:n(146).default})},147:function(e,t,n){"use strict";n.r(t);var o=n(66),r=n(42),c={i18n:Object(r.a)({"en-us":{"en-us":"EN","zh-hant":"ZH"},"zh-hant":{"en-us":"英文","zh-hant":"中文"}}),name:"CoreHeaderLocaleSwitch",components:{CoreMenuItem:n(91).b,NavBarItemDropdown:o.default},data:function(){return{languages:["en-us","zh-hant"]}},methods:{onClickLang:function(e,t){this.$i18n.locale=t,this.$router.push(this.switchLocalePath(t)),e()}}},l=(n(281),n(4)),component=Object(l.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"core-localeSwitch h-full"},[n("nav-bar-item-dropdown",{attrs:{sm:""},scopedSlots:e._u([{key:"label",fn:function(){return[e._v("\n            "+e._s(e.$t(e.$i18n.locale))+"\n        ")]},proxy:!0},{key:"items",fn:function(t){var o=t.hideMenu;return e._l(e.languages,(function(t,i){return n("core-menu-item",{key:"language_"+i,on:{click:function(n){return e.onClickLang(o,t)}}},[e._v("\n                "+e._s(e.$t(t))+"\n            ")])}))}}])})],1)}),[],!1,null,"03fcd3b2",null);t.default=component.exports;installComponents(component,{NavBarItemDropdown:n(66).default})},148:function(e,t,n){"use strict";n.r(t);var o=n(112),r={name:"CoreFooterIcon",components:{ExtLink:n(51).default},props:{href:{type:String,default:""}},data:function(){var e=this.$attrs;e.href;return{faProps:Object(o.a)(e,["href"])}}},c=(n(263),n(4)),component=Object(c.a)(r,(function(){var e=this.$createElement,t=this._self._c||e;return t("ext-link",{staticClass:"mx-4 my-4",attrs:{href:this.href}},[t("fa",this._b({staticClass:"core-footerIcon"},"fa",this.faProps,!1))],1)}),[],!1,null,"3d58f868",null);t.default=component.exports;installComponents(component,{ExtLink:n(51).default})},149:function(e,t,n){"use strict";n.r(t);var o={name:"HomeIcon",components:{LocaleLink:n(31).default}},r=n(4),component=Object(r.a)(o,(function(){var e=this.$createElement,t=this._self._c||e;return t("locale-link",{staticClass:"core-homeIcon md:px-12 py-2 flex justify-center items-center",attrs:{to:"/",customized:""}},[t("img",{staticClass:"w-8",attrs:{src:n(267)}}),this._v(" "),t("span",{staticClass:"font-bold"},[this._v(" PyConTW ")])])}),[],!1,null,"053ded6e",null);t.default=component.exports;installComponents(component,{LocaleLink:n(31).default})},150:function(e,t,n){"use strict";n.r(t);n(34),n(45),n(84);var o=n(61),r=n(66),c=n(110),l=n(23),f={i18n:c.a,name:"CoreHeaderNavBar",components:{NavBarItemDropdown:r.default,LocaleLink:l.b,ExtLink:l.a},computed:{conferenceItems:function(){return this.generateI18nItems(o.a.conferenceItems)},speakingItems:function(){return this.generateI18nItems(o.a.speakingItems)},eventsItems:function(){return this.generateI18nItems(o.a.eventsItems)},registrationItems:function(){return this.generateI18nItems(o.a.registrationItems)},signInUrl:function(){return"https://tw.pycon.org/prs/".concat(this.$i18n.locale,"/dashboard/")}},methods:{generateI18nItems:function(e){var t=this;return e.map((function(e){var n=e.i18nKey,o=e.value;return{label:t.$i18n.t(n),value:o}}))},getPageClassesByPath:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this.$route.name.startsWith(e);return{"core-navBarItem":!0,flex:t,"h-full":t,"justify-center":t,"items-center":t,"px-8":t,"py-2":t,"bg-transparent":!n,"bg-golden-primary":n,"--active":n}}}},d=(n(275),n(4)),component=Object(d.a)(f,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("nav",{staticClass:"h-full flex justify-evenly items-center"},[n("locale-link",{class:e.getPageClassesByPath("about",!0),attrs:{to:"/about",customized:""}},[e._v("\n        "+e._s(e.$t("about"))+"\n    ")]),e._v(" "),n("locale-link",{class:e.getPageClassesByPath("sponsor",!0),attrs:{to:"/sponsor",customized:""}},[e._v("\n        "+e._s(e.$t("sponsor"))+"\n    ")]),e._v(" "),n("nav-bar-item-dropdown",{class:e.getPageClassesByPath("speaking"),attrs:{label:e.$t("speaking"),items:e.speakingItems}}),e._v(" "),n("ext-link",{class:e.getPageClassesByPath("volunteer",!0),attrs:{href:"https://forms.gle/wuG2w42cbhamyGdv9"}},[e._v("\n        "+e._s(e.$t("volunteer"))+"\n    ")]),e._v(" "),n("ext-link",{class:e.getPageClassesByPath("signIn",!0),attrs:{href:e.signInUrl}},[e._v("\n        "+e._s(e.$t("signIn"))+"\n    ")])],1)}),[],!1,null,"e0c85e80",null);t.default=component.exports;installComponents(component,{LocaleLink:n(31).default,NavBarItemDropdown:n(66).default,ExtLink:n(51).default})},151:function(e,t,n){"use strict";n.r(t);n(34);var o=n(152),r=n(153),c=n(23),l=n(61),f={i18n:n(110).a,name:"CoreHeaderNavBarHamburger",components:{IconHamburgerMenuIcon:o.default,NavBarItemAccordion:r.default,ExtLink:c.a,LocaleLink:c.b},data:function(){return{isMenuSlidedIn:!1,expandingItem:void 0}},computed:{speakingItems:function(){return this.generateI18nItems(l.a.speakingItems)},signInUrl:function(){return"https://tw.pycon.org/prs/".concat(this.$i18n.locale,"/dashboard/")}},watch:{$route:function(){this.isMenuSlidedIn&&this.toggleMenu()}},methods:{generateI18nItems:function(e){var t=this;return e.map((function(e){var n=e.i18nKey,o=e.value;return{label:t.$i18n.t(n),value:o}}))},toggleMenu:function(){this.isMenuSlidedIn=!this.isMenuSlidedIn},toggleAccordion:function(e){this.expandingItem===e?this.expandingItem=void 0:this.expandingItem=e}}},d=(n(279),n(4)),component=Object(d.a)(f,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"relative"},[n("icon-hamburger-menu-icon",{directives:[{name:"show",rawName:"v-show",value:!e.isMenuSlidedIn,expression:"!isMenuSlidedIn"}],staticClass:"cursor-pointer",nativeOn:{click:function(t){return e.toggleMenu(t)}}}),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:e.isMenuSlidedIn,expression:"isMenuSlidedIn"}],staticClass:"close-icon-button",on:{click:e.toggleMenu}},[e._v("\n        +\n    ")]),e._v(" "),e.isMenuSlidedIn?n("div",{staticClass:"core-navBarHamburgerSlideInMenu"},[n("locale-link",{staticClass:"core-navBarHamburgerSlideInMenu__item",attrs:{to:"/about",customized:""}},[e._v(e._s(e.$t("about")))]),e._v(" "),n("locale-link",{staticClass:"core-navBarHamburgerSlideInMenu__item",attrs:{to:"/sponsor",customized:""}},[e._v(e._s(e.$t("sponsor")))]),e._v(" "),n("nav-bar-item-accordion",{attrs:{label:e.$t("speaking"),items:e.speakingItems,expanding:"speaking"===e.expandingItem},nativeOn:{click:function(t){return e.toggleAccordion("speaking")}}}),e._v(" "),n("ext-link",{staticClass:"core-navBarHamburgerSlideInMenu__item",attrs:{href:"https://forms.gle/wuG2w42cbhamyGdv9"}},[e._v(e._s(e.$t("volunteer")))]),e._v(" "),n("ext-link",{staticClass:"core-navBarHamburgerSlideInMenu__item",attrs:{href:e.signInUrl}},[e._v(e._s(e.$t("signIn")))])],1):e._e()],1)}),[],!1,null,"06196b3d",null);t.default=component.exports;installComponents(component,{IconHamburgerMenuIcon:n(152).default,LocaleLink:n(31).default,NavBarItemAccordion:n(153).default,ExtLink:n(51).default})},152:function(e,t,n){"use strict";n.r(t);var o={name:"HamburgerMenuIcon"},r=n(4),component=Object(r.a)(o,(function(){var e=this.$createElement,t=this._self._c||e;return t("svg",{attrs:{width:"20",height:"17",viewBox:"0 0 20 17",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[t("line",{attrs:{x1:"1.25",y1:"1.75",x2:"18.75",y2:"1.75",stroke:"#141414","stroke-width":"2.5","stroke-linecap":"round"}}),this._v(" "),t("line",{attrs:{x1:"1.25",y1:"8.75",x2:"18.75",y2:"8.75",stroke:"#141414","stroke-width":"2.5","stroke-linecap":"round"}}),this._v(" "),t("line",{attrs:{x1:"1.25",y1:"15.75",x2:"18.75",y2:"15.75",stroke:"#141414","stroke-width":"2.5","stroke-linecap":"round"}})])}),[],!1,null,"4b0255f6",null);t.default=component.exports},153:function(e,t,n){"use strict";n.r(t);var o={name:"NavBarItemAccordion",components:{LocaleLink:n(23).b},props:{label:{type:String,default:""},items:{type:Array,default:function(){return[]}},expanding:{type:Boolean,default:!1}},computed:{caretIcon:function(){return this.expanding?["fa","caret-up"]:["fa","caret-down"]}}},r=(n(277),n(4)),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"core-navBarItemAccordion"},[n("div",{staticClass:"core-navBarItemAccordion__label"},[e._v("\n        "+e._s(e.label)+"\n        "),n("fa",{staticClass:"ml-3",attrs:{icon:e.caretIcon,"aria-hidden":"true"}})],1),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:e.expanding,expression:"expanding"}],staticClass:"core-navBarItemAccordion__items"},e._l(e.items,(function(t){return n("locale-link",{key:t.value,attrs:{to:t.value,role:"menuitem",customized:""}},[e._v("\n            "+e._s(t.label)+"\n        ")])})),1)])}),[],!1,null,"4e3f5a70",null);t.default=component.exports;installComponents(component,{LocaleLink:n(31).default})},190:function(e,t,n){var content=n(262);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(18).default)("b595f214",content,!0,{sourceMap:!1})},191:function(e,t,n){var content=n(264);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(18).default)("fdac87c6",content,!0,{sourceMap:!1})},192:function(e,t,n){var content=n(266);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(18).default)("7a71e99f",content,!0,{sourceMap:!1})},194:function(e,t,n){var content=n(270);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(18).default)("01cce2b8",content,!0,{sourceMap:!1})},195:function(e,t,n){var content=n(272);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(18).default)("cabb0acc",content,!0,{sourceMap:!1})},196:function(e,t,n){var content=n(274);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(18).default)("29feb837",content,!0,{sourceMap:!1})},197:function(e,t,n){var content=n(276);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(18).default)("199edef2",content,!0,{sourceMap:!1})},198:function(e,t,n){var content=n(278);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(18).default)("567918cb",content,!0,{sourceMap:!1})},199:function(e,t,n){var content=n(280);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(18).default)("477eb79e",content,!0,{sourceMap:!1})},200:function(e,t,n){var content=n(282);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(18).default)("db2669ea",content,!0,{sourceMap:!1})},201:function(e,t,n){var content=n(284);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(18).default)("5c653f01",content,!0,{sourceMap:!1})},202:function(e,t,n){var content=n(286);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(18).default)("bd0f5970",content,!0,{sourceMap:!1})},203:function(e,t,n){var content=n(288);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(18).default)("56b15182",content,!0,{sourceMap:!1})},215:function(e,t,n){"use strict";var footer=n(146).default,o={components:{CoreHeader:n(144).default,CoreFooter:footer,AnnounceBar:n(145).default},head:function(){return{link:[{rel:"canonical",href:"https://tw.pycon.org"+this.$route.path}]}}},r=(n(287),n(4)),component=Object(r.a)(o,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"default-layout"},[t("core-header"),this._v(" "),t("announce-bar"),this._v(" "),t("Nuxt"),this._v(" "),t("core-footer")],1)}),[],!1,null,null,null);t.a=component.exports;installComponents(component,{AnnounceBar:n(145).default})},217:function(e,t,n){n(218),n(219),e.exports=n(220)},23:function(e,t,n){"use strict";var o=n(51);n.d(t,"a",(function(){return o.default}));var r=n(31);n.d(t,"b",(function(){return r.default}))},261:function(e,t,n){"use strict";n(190)},262:function(e,t,n){(t=n(17)(!1)).push([e.i,"a[data-v-0e08233b]{color:inherit}.highlight[data-v-0e08233b]{color:#9387ff}.highlight[data-v-0e08233b]:hover{color:#6656f8}",""]),e.exports=t},263:function(e,t,n){"use strict";n(191)},264:function(e,t,n){(t=n(17)(!1)).push([e.i,".core-footerIcon[data-v-3d58f868]{display:flex;justify-self:center;font-size:1.5rem}.core-footerIcon[data-v-3d58f868]:hover{color:#7568f6}",""]),e.exports=t},265:function(e,t,n){"use strict";n(192)},266:function(e,t,n){(t=n(17)(!1)).push([e.i,".highlight[data-v-28016d70]{color:#9387ff}.highlight[data-v-28016d70]:hover{color:#6656f8}.core-localeLink[data-v-28016d70]:not(.highlight):not(.--customized){color:#c2a53a}.core-localeLink[data-v-28016d70]:not(.highlight):not(.--customized):hover{color:#7568f6}",""]),e.exports=t},267:function(e,t,n){e.exports=n.p+"img/snake-icon.b7f0705.svg"},269:function(e,t,n){"use strict";n(194)},270:function(e,t,n){(t=n(17)(!1)).push([e.i,".core-menu[data-v-1a8253cb]{position:absolute;transform-origin:top right;border-radius:.25rem;top:48px;right:-32px;background-color:#1c1c1c;border:1px solid #c2a53a;opacity:.9}",""]),e.exports=t},271:function(e,t,n){"use strict";n(195)},272:function(e,t,n){(t=n(17)(!1)).push([e.i,".core-menuItem[data-v-fc3bca76]{color:#b5b5b5}.core-menuItem[data-v-fc3bca76]:hover{color:#7568f6}",""]),e.exports=t},273:function(e,t,n){"use strict";n(196)},274:function(e,t,n){(t=n(17)(!1)).push([e.i,".options-menu[data-v-a2b9c5c6]{display:inline-flex;height:100%;justify-content:center;align-items:center;width:100%;background-color:transparent;z-index:100}",""]),e.exports=t},275:function(e,t,n){"use strict";n(197)},276:function(e,t,n){(t=n(17)(!1)).push([e.i,".core-navBarItem[data-v-e0c85e80]{color:#c7c7c7;font-weight:700}.core-navBarItem[data-v-e0c85e80]:hover{color:#000;background-color:#c2a53a}.core-navBarItem.--active[data-v-e0c85e80],.core-navBarItem.--active .options-menu[data-v-e0c85e80]{color:#000}",""]),e.exports=t},277:function(e,t,n){"use strict";n(198)},278:function(e,t,n){(t=n(17)(!1)).push([e.i,".core-navBarItemAccordion[data-v-4e3f5a70]{display:flex;width:100%;margin-top:1rem;margin-bottom:1rem;flex-direction:column;justify-content:center;cursor:pointer}.core-navBarItemAccordion__label[data-v-4e3f5a70]{display:inline-flex;justify-content:center;align-items:center}.core-navBarItemAccordion__items[data-v-4e3f5a70]{display:flex;margin-top:1rem;flex-direction:column;justify-content:center;--bg-opacity:1;background-color:#000;background-color:rgba(0,0,0,var(--bg-opacity))}.core-navBarItemAccordion__items>.core-localeLink[data-v-4e3f5a70]{display:inline-flex;padding-top:1rem;padding-bottom:1rem;justify-content:center;color:#b2b2b2}.core-navBarItemAccordion__items>.core-localeLink[data-v-4e3f5a70]:hover{color:#7568f6}",""]),e.exports=t},279:function(e,t,n){"use strict";n(199)},280:function(e,t,n){(t=n(17)(!1)).push([e.i,".core-navBarHamburgerSlideInMenu[data-v-06196b3d]{position:fixed;top:0;right:0;display:flex;width:66.666667%;height:100%;padding-top:2.5rem;flex-direction:column;--text-opacity:1;color:#000;color:rgba(0,0,0,var(--text-opacity));font-weight:700;background-color:#c2a53a;z-index:1000}.core-navBarHamburgerSlideInMenu__item[data-v-06196b3d]{display:flex;width:100%;padding:1rem;justify-content:center;align-items:center}.core-navBarHamburgerSlideInMenu__item[data-v-06196b3d]:hover{color:#7568f6}.close-icon-button[data-v-06196b3d]{position:relative;--transform-translate-x:0;--transform-translate-y:0;--transform-rotate:0;--transform-skew-x:0;--transform-skew-y:0;--transform-scale-x:1;--transform-scale-y:1;transform:translateX(var(--transform-translate-x)) translateY(var(--transform-translate-y)) rotate(var(--transform-rotate)) skewX(var(--transform-skew-x)) skewY(var(--transform-skew-y)) scaleX(var(--transform-scale-x)) scaleY(var(--transform-scale-y));--transform-rotate:45deg;--text-opacity:1;color:#000;color:rgba(0,0,0,var(--text-opacity));font-size:2.25rem;cursor:pointer;z-index:1001}",""]),e.exports=t},281:function(e,t,n){"use strict";n(200)},282:function(e,t,n){(t=n(17)(!1)).push([e.i,".core-localeSwitch[data-v-03fcd3b2]{color:#c7c7c7;font-weight:700}.core-localeSwitch[data-v-03fcd3b2]:hover{background:#c2a53a;color:#000}",""]),e.exports=t},283:function(e,t,n){"use strict";n(201)},284:function(e,t,n){(t=n(17)(!1)).push([e.i,".header-container[data-v-e2eeabb2]{width:100%;height:100%;padding-left:1rem;padding-right:1rem;justify-content:space-between;align-items:center}.header-container.--desktop[data-v-e2eeabb2]{color:#c2a53a;background-color:#000}.header-container.--mobile[data-v-e2eeabb2]{background-color:#c2a53a}.header-container.--mobile .core-homeIcon[data-v-e2eeabb2]{filter:brightness(0) invert(0)}.header-container.--mobile .core-localeSwitch[data-v-e2eeabb2]{color:#000}",""]),e.exports=t},285:function(e,t,n){"use strict";n(202)},286:function(e,t,n){(t=n(17)(!1)).push([e.i,"div[data-v-72ef89ff]{flex-direction:row;color:#fff;background-color:#8278f5}div[data-v-72ef89ff],nav[data-v-72ef89ff]{display:flex;justify-content:center;align-items:center}nav[data-v-72ef89ff]{flex:1}.hidden[data-v-72ef89ff]{display:none;transition:height .25s ease-out}#closeBarBtn[data-v-72ef89ff]{height:100%;cursor:pointer}",""]),e.exports=t},287:function(e,t,n){"use strict";n(203)},288:function(e,t,n){(t=n(17)(!1)).push([e.i,'html{font-family:"Source Sans Pro",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;font-size:20px;color:#c7c7c7;word-spacing:1px;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;box-sizing:border-box;background:#212121}*,:after,:before{box-sizing:border-box;margin:0}.default-layout{display:grid;height:100vh;grid-template-rows:48px auto auto auto;grid-template-columns:100%}',""]),e.exports=t},31:function(e,t,n){"use strict";n.r(t);var o={name:"CoreLocaleLink",props:{to:{type:String,default:""},customized:{type:Boolean,default:!1},highlight:{type:Boolean,default:!1}},computed:{classObject:function(){return{"core-localeLink":!0,highlight:this.highlight,"--customized":this.customized}}}},r=(n(265),n(4)),component=Object(r.a)(o,(function(){var e=this.$createElement;return(this._self._c||e)("nuxt-link",{class:this.classObject,attrs:{to:this.localePath(this.to)}},[this._t("default")],2)}),[],!1,null,"28016d70",null);t.default=component.exports},336:function(e,t,n){"use strict";n.r(t),n.d(t,"state",(function(){return c})),n.d(t,"mutations",(function(){return l})),n.d(t,"actions",(function(){return f}));n(30);var o=n(3),r=function(e){return function(t,n){return t[e]=n}},c=function(){return{sponsorsData:[],jobsData:[]}},l={setSponsorsData:r("sponsorsData"),setJobsData:r("jobsData")},f={$getSponsorsData:function(e){var t=this;return Object(o.a)(regeneratorRuntime.mark((function n(){var o,r,data;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o=e.commit,n.next=3,t.$http.$get("/api/sponsors");case 3:r=n.sent,data=r.data,o("setSponsorsData",data);case 6:case"end":return n.stop()}}),n)})))()},$getJobsData:function(e){var t=this;return Object(o.a)(regeneratorRuntime.mark((function n(){var o,r,data;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o=e.commit,n.next=3,t.$http.$get("/api/jobs");case 3:r=n.sent,data=r.data,o("setJobsData",data);case 6:case"end":return n.stop()}}),n)})))()}}},42:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var o=function(e){return{messages:e}}},51:function(e,t,n){"use strict";n.r(t);var o={name:"CoreExtLink",props:{href:{type:String,default:""},highlight:{type:Boolean,default:!1}},computed:{classObject:function(){return{"core-extLink":!0,"outline-none":!0,"cursor-pointer":!0,highlight:this.highlight}}}},r=(n(261),n(4)),component=Object(r.a)(o,(function(){var e=this.$createElement;return(this._self._c||e)("a",{class:this.classObject,attrs:{href:this.href,rel:"noopener noreferrer",target:"_blank"}},[this._t("default")],2)}),[],!1,null,"0e08233b",null);t.default=component.exports},61:function(e,t,n){"use strict";n(268);t.a=Object.freeze({conferenceItems:[{i18nKey:"schedule",value:"/conference/schedule"},{i18nKey:"keynotes",value:"/conference/keynotes"},{i18nKey:"talks",value:"/conference/talks"},{i18nKey:"tutorials",value:"/conference/tutorials"},{i18nKey:"communityTracks",value:"/conference/community-tracks"}],speakingItems:[{i18nKey:"cfp",value:"/speaking/cfp"},{i18nKey:"talk",value:"/speaking/talk"},{i18nKey:"tutorial",value:"/speaking/tutorial"},{i18nKey:"recording",value:"/speaking/recording"}],eventsItems:[{i18nKey:"overview",value:"/events/overview"},{i18nKey:"warmUpSessions",value:"/events/warm-up-sessions"},{i18nKey:"openSpaces",value:"/events/open-spaces"},{i18nKey:"sprints",value:"/events/sprints"},{i18nKey:"jobListings",value:"/events/job-listings"}],registrationItems:[{i18nKey:"conferenceTickets",value:"/registration/tickets"},{i18nKey:"financialAid",value:"/registration/financial-aid"}]})},66:function(e,t,n){"use strict";n.r(t);var menu=n(91),o={name:"CoreHeaderNavBarItemDropdown",components:{CoreMenu:menu.a,CoreMenuItem:menu.b},props:{sm:Boolean,lg:Boolean,label:{type:String,default:""},items:{type:Array,default:function(){return[]}}},data:function(){return{delay:0,isHovering:!1}},methods:{hideMenu:function(){this.isHovering=!1},showMenu:function(){this.isHovering=!0}}},r=(n(273),n(4)),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"relative flex h-full px-8 justify-center items-center text-left"},[n("div",{staticClass:"relative flex h-full flex-col rounded-md items-start cursor-pointer",on:{mouseenter:e.showMenu,mouseleave:e.hideMenu}},[n("div",{staticClass:"options-menu focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500",attrs:{id:"options-menu","aria-haspopup":"true","aria-expanded":"true"}},[e.$slots.label?e._t("label"):e._e(),e._v("\n            "+e._s(e.label)+"\n            "),n("fa",{staticClass:"ml-3",attrs:{icon:["fa","caret-down"],"aria-hidden":"true"}})],2),e._v(" "),n("core-menu",{directives:[{name:"show",rawName:"v-show",value:e.isHovering,expression:"isHovering"}],attrs:{lg:e.lg,sm:e.sm}},[e._t("items",null,{hideMenu:e.hideMenu}),e._v(" "),e._l(e.items,(function(t){return n("core-menu-item",{key:t.value,attrs:{href:t.value},on:{click:e.hideMenu}},[e._v("\n                "+e._s(t.label)+"\n            ")])}))],2)],1)])}),[],!1,null,"a2b9c5c6",null);t.default=component.exports},91:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return m}));n(37);var o=n(60),r={name:"CoreMenu",props:{sm:Boolean,lg:Boolean},data:function(){return{originalClasses:["core-menu","bg-golden-primary"]}},computed:{menuClasses:function(){var e;return e=this.sm?"w-24":this.lg?"w-56":"w-48",[].concat(Object(o.a)(this.originalClasses),[e])}}},c=(n(269),n(4)),l=Object(c.a)(r,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{class:this.menuClasses,attrs:{"aria-labelledby":"options-menu","aria-orientation":"vertical",role:"menu"}},[t("div",{staticClass:"relative"},[this._t("default")],2)])}),[],!1,null,"1a8253cb",null).exports,f={name:"MenuItem",components:{LocaleLink:n(23).b},props:{href:{type:String,default:""}},computed:{itemClasses:function(){return["core-menuItem","block","px-4","py-2","text-sm"]},readonly:function(){return!this.href}},methods:{onClick:function(e){this.$emit("click",e)}}},d=(n(271),Object(c.a)(f,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"py-1",on:{click:this.onClick}},[this.readonly?t("div",{class:this.itemClasses},[this._t("default")],2):t("locale-link",{class:this.itemClasses,attrs:{to:this.href,role:"menuitem",customized:""}},[this._t("default")],2)],1)}),[],!1,null,"fc3bca76",null)),m=d.exports;installComponents(d,{LocaleLink:n(31).default})}},[[217,28,1,29]]]);