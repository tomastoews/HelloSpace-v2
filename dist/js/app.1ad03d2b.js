(function(e){function t(t){for(var a,i,o=t[0],c=t[1],l=t[2],d=0,p=[];d<o.length;d++)i=o[d],r[i]&&p.push(r[i][0]),r[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);u&&u(t);while(p.length)p.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],a=!0,o=1;o<n.length;o++){var c=n[o];0!==r[c]&&(a=!1)}a&&(s.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},r={app:0},s=[];function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var u=c;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"1d1a":function(e,t,n){"use strict";var a=n("b723"),r=n.n(a);r.a},"2f97":function(e,t,n){},"346b":function(e,t,n){e.exports=n.p+"img/hellospace_logo.13b65185.png"},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var a=n("2b0e"),r=n("2f62"),s=n("bc3a"),i=n.n(s),o=n("5c96"),c=n.n(o);a["default"].use(r["a"]);var l=new r["a"].Store({state:{planets:["Mercury","Venus","Earth","Mars","Jupiter","Saturn","Uranus","Neptune"],searchResults:[],showLoadingAnimation:!1},mutations:{setSearchResults:function(e,t){var n=t.data.collection.items.map(function(e){return{id:e.data[0].nasa_id,title:e.data[0].title,description:e.data[0].description,keywords:e.data[0].keywords,preview_image:e.links[0].href,images_link:e.href,media_type:e.data[0].media_type,date_created:e.data[0].date_created}});e.searchResults=n},clearSearchResults:function(e){e.searchResults=[]},setLoadingAnimation:function(e,t){e.showLoadingAnimation=t}},actions:{search:function(e,t){var n=e.commit,a="image",r="https://images-api.nasa.gov";n("clearSearchResults"),n("setLoadingAnimation",!0),i.a.get("".concat(r,"/search?q=").concat(t,"&media_type=").concat(a)).then(function(e){0==e.data.collection.items.length?o["Notification"].error({title:"Nothing found",message:"No results were found.",duration:0}):n("setSearchResults",e)}).catch(function(e){o["Notification"].error({title:"Error",message:"An error has occurred. Please try again."})}).then(function(){return n("setLoadingAnimation",!1)})},searchItem:function(e,t){var n=this,a=e.commit;return new Promise(function(e,r){var s="https://images-api.nasa.gov";a("setLoadingAnimation",!0),i.a.get("".concat(s,"/search?nasa_id=").concat(t)).then(function(t){if(0==t.data.collection.items.length)o["Notification"].error({title:"Not found",message:"The requested item was not found.",duration:0});else{var n=t.data.collection.items[0].data[0],a=t.data.collection.items[0].links[0].href;e({id:n.nasa_id,title:n.title,description:n.description,keywords:n.keywords,preview_image:n.href,image:a,media_type:n.media_type,date_created:n.date_created})}}).catch(function(e){n.$notify.error({title:"Error",message:"An error has occurred. Please try again.",duration:0})}).then(function(){return a("setLoadingAnimation",!1)})})}}}),u=l,d=n("8c4f"),p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("el-row",[n("h1",[e._v("Hello!")]),n("h4",[e._v("\r\n            Find photos of the astronomy, the space, the space travel and all planets."),n("br"),e._v("\r\n            Explore and discover the astronomy.\r\n        ")])])],1)},m=[],f=(n("6a6d"),n("2877")),h={},v=Object(f["a"])(h,p,m,!1,null,"7539f200",null);v.options.__file="Home.vue";var g=v.exports,_=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"search"},[n("el-row",[n("div",{directives:[{name:"masonry",rawName:"v-masonry"}],attrs:{"transition-duration":"0.1s","item-selector":".item"}},e._l(e.searchResults,function(t,a){return n("el-col",{key:a,staticClass:"item",attrs:{xs:12,sm:12,md:8,lg:8,xl:8}},[n("el-card",{staticClass:"box-card",staticStyle:{margin:"20px 20px 0 20px"},attrs:{shadow:"never","body-style":{padding:"0px"}}},[n("img",{staticClass:"image",attrs:{draggable:"false",src:t.preview_image}}),n("div",{staticStyle:{padding:"14px"}},[n("span",[e._v(e._s(t.title))]),n("div",{staticClass:"bottom clearfix"},[n("el-button",{staticClass:"button",attrs:{type:"text"},on:{click:function(n){e.openItem(t.id)}}},[e._v("Anzeigen")])],1)])])],1)}))])],1)},b=[],y={data:function(){return{}},computed:Object(r["b"])({searchResults:"searchResults"}),methods:{openItem:function(e){this.$router.push("/item/".concat(e))}},mounted:function(){var e=this.$route.params.searchTerm;e&&u.dispatch("search",e)}},w=y,x=(n("1d1a"),Object(f["a"])(w,_,b,!1,null,"db057ef0",null));x.options.__file="SearchOutput.vue";var k=x.exports,S=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"item-details"},[e.item?n("el-row",[n("el-col",{staticClass:"details-container",attrs:{md:15,lg:15,xl:15}},[n("h1",{staticClass:"title"},[e._v(e._s(e.item.title))]),n("p",[e._v(e._s(e.item.description))]),e.item.keywords?n("h3",[e._v("Keywords")]):e._e(),e.item.keywords?n("p",e._l(e.item.keywords,function(t,a){return n("el-button",{key:a,staticClass:"keyword",on:{click:function(n){e.openKeyword(t)}}},[e._v("\n                    "+e._s(t)+"\n                ")])})):e._e()]),n("el-col",{attrs:{md:9,lg:9,xl:9}},[n("img",{staticClass:"image",attrs:{draggable:"false",src:e.item.image,alt:"Image"}})])],1):e._e()],1)},j=[],O={data:function(){return{item:""}},methods:{openKeyword:function(e){this.$router.push("/search/".concat(e))}},mounted:function(){var e=this,t=this.$route.params.id;u.dispatch("searchItem",t).then(function(t){return e.item=t})}},$=O,A=(n("f455"),Object(f["a"])($,S,j,!1,null,"67c9c93e",null));A.options.__file="ItemDetails.vue";var C=A.exports;a["default"].use(d["a"]);var E=new d["a"]({routes:[{path:"/",name:"home",component:g},{path:"/search/",redirect:"/"},{path:"/search/:searchTerm",name:"search",component:k},{path:"/item/",redirect:"/"},{path:"/item/:id",name:"details",component:C}],mode:"history"});E.beforeEach(function(e,t,n){o["Notification"].closeAll(),n()});var I=E,L=(n("0fae"),n("3f9b")),P=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Header"),n("el-row",{attrs:{type:"flex",justify:"center"}},[n("el-col",{attrs:{sm:24,md:24,lg:16,xl:16}},[n("div",{directives:[{name:"loading",rawName:"v-loading",value:e.showLoadingAnimation,expression:"showLoadingAnimation"}],attrs:{id:"content"}},[n("el-card",{staticClass:"box-card",attrs:{"body-style":{padding:"0"}}},[n("el-row",{staticStyle:{height:"100%"}},[n("el-col",{attrs:{xs:24,sm:5,md:5,lg:5,xl:5}},[n("sidebar")],1),n("el-col",{attrs:{xs:24,sm:19,md:19,lg:19,xl:19}},[n("router-view")],1)],1)],1)],1),n("Footer")],1)],1)],1)},N=[],R=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"header"}},[a("el-row",[a("header",[a("el-row",{staticStyle:{padding:"7rem 0 2rem 0"},attrs:{span:"24",type:"flex",justify:"center"}},[a("el-col",{attrs:{xs:10,sm:8,md:6,lg:5,xl:4}},[a("router-link",{attrs:{to:"/"}},[a("img",{attrs:{id:"logo",draggable:"false",src:n("346b")}})])],1)],1),a("el-row",{attrs:{type:"flex",justify:"center"}},[a("el-col",{staticStyle:{padding:"0 0 12rem 0"},attrs:{xs:18,sm:12,md:12,lg:10,xl:10}},[a("el-input",{staticClass:"inline-input",staticStyle:{width:"100%"},attrs:{placeholder:"Suchen...",size:"large",clearable:"","trigger-on-focus":!1},model:{value:e.searchInput,callback:function(t){e.searchInput=t},expression:"searchInput"}},[a("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:e.submitForm},slot:"append"})],1)],1)],1)],1)])],1)},F=[],T=(n("7f7f"),{data:function(){return{searchInput:null}},computed:Object(r["b"])({autoFillSugestions:"autoFillSugestions"}),methods:{submitForm:function(e){e.preventDefault();var t=this.searchInput;t?"search"==this.$route.name?(u.dispatch("search",t),this.$router.push("/search/".concat(t))):this.$router.push("/search/".concat(t)):this.$notify.warning({title:"Invalid input",message:"Please enter something."})},routerLink:function(e){this.$router.push(e)}}}),M=T,H=(n("e308"),Object(f["a"])(M,R,F,!1,null,"20e16094",null));H.options.__file="Header.vue";var J=H.exports,K=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-menu",{attrs:{"default-active":"0",open:"1","default-openeds":e.openSubmenus}},[n("el-submenu",{attrs:{index:"1"}},[n("template",{slot:"title"},[n("span",[e._v("Planets")])]),e._l(e.planets,function(t,a){return n("el-menu-item",{key:a,attrs:{index:"1-1"},on:{click:function(n){e.search(t)}}},[e._v("\n            "+e._s(t)+"\n        ")])})],2),n("el-menu-item",{attrs:{index:"2"},on:{click:function(t){e.search("stars")}}},[n("span",[e._v("Stars")])]),n("el-menu-item",{attrs:{index:"3"},on:{click:function(t){e.search("moons")}}},[n("span",[e._v("Moons")])]),n("el-menu-item",{attrs:{index:"4"},on:{click:function(t){e.search("galaxies")}}},[n("span",[e._v("Galaxies")])])],1)},q=[],z={data:function(){return{openSubmenus:["0"]}},computed:Object(r["b"])({planets:"planets"}),methods:{search:function(e){e&&("search"==this.$route.name?(u.dispatch("search",e),this.$router.push("/search/".concat(e))):this.$router.push("/search/".concat(e)))}}},D=z,G=Object(f["a"])(D,K,q,!1,null,null,null);G.options.__file="Sidebar.vue";var U=G.exports,V=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("footer",{staticStyle:{"margin-bottom":"2rem"}},[e._v("\n    © 2018 - Tomas Töws\n")])},B=[],Q={},W=Object(f["a"])(Q,V,B,!1,null,null,null);W.options.__file="Footer.vue";var X=W.exports,Y={name:"app",components:{Header:J,Sidebar:U,Footer:X},computed:Object(r["b"])({showLoadingAnimation:"showLoadingAnimation"})},Z=Y,ee=Object(f["a"])(Z,P,N,!1,null,null,null);ee.options.__file="App.vue";var te=ee.exports;n("90c2");a["default"].use(c.a),a["default"].use(L["a"]),a["default"].config.productionTip=!1,new a["default"]({router:I,store:u,render:function(e){return e(te)}}).$mount("#app")},"6a6d":function(e,t,n){"use strict";var a=n("2f97"),r=n.n(a);r.a},"90c2":function(e,t,n){},a7bc:function(e,t,n){},b723:function(e,t,n){},e099:function(e,t,n){},e308:function(e,t,n){"use strict";var a=n("a7bc"),r=n.n(a);r.a},f455:function(e,t,n){"use strict";var a=n("e099"),r=n.n(a);r.a}});
//# sourceMappingURL=app.1ad03d2b.js.map