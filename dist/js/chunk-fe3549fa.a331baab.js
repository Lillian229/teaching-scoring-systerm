(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-fe3549fa"],{"0b23":function(e,t,n){},"13f4":function(e,t,n){},1742:function(e,t,n){},"21ce":function(e,t,n){},"32c1":function(e,t,n){},"5b4b":function(e,t,n){},"5eda":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:["wrapper",e.device,e.classObj]},[n("transition",{attrs:{name:"el-fade-in"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.isMobile&&e.sidebar.opened,expression:"isMobile && sidebar.opened"}],staticClass:"drawer-bg",on:{click:e.handleClickOutside}})]),n("div",{class:["sidebar"]},[n("v-aside")],1),n("div",{staticClass:"container"},[n("v-header"),n("div",{staticClass:"app-content"},[n("transition",{attrs:{name:"el-fade-in"}},[n("router-view",{directives:[{name:"show",rawName:"v-show",value:e.load,expression:"load"}],key:e.$route.fullPath})],1),n("v-footer")],1)],1)],1)},i=[],o=n("db72"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-header"},[n("div",{staticClass:"left-menu"},[n("hamburger",{attrs:{"is-active":e.sidebar.opened,device:e.device},on:{"toggle-click":e.toggleSidebar}}),n("breadcrumb",{staticClass:"breadcrumb-container"})],1),n("div",{staticClass:"right-menu"},["mobile"!==e.device?[n("header-search",{staticClass:"right-menu-item hover-effect"}),n("screenfull",{staticClass:"right-menu-item hover-effect"})]:e._e(),e.showAvatar?n("el-dropdown",{staticClass:"avatar-container right-menu-item",attrs:{trigger:"click"}},[n("p",{staticClass:"avatar-wrapper"},[e._v("\n        "+e._s(e.username)+"\n        "),n("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),n("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},e._l(e.innerDropdownMenu,(function(t,r){return n("el-dropdown-item",{key:r},[t.path?n("router-link",{attrs:{to:t.path}},[e._v("\n            "+e._s(t.label)+"\n          ")]):t.callback?n("span",{on:{click:t.callback}},[e._v("\n            "+e._s(t.label)+"\n          ")]):e._e()],1)})),1)],1):e._e()],2)])},s=[],c=(n("96cf"),n("3b8d")),l=n("75fc"),u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hamburger-container",on:{click:e.toggleClick}},[n("i",{class:["hamburger","el-icon-ali-weibiaoti12",e.isActive?"opened":"hidden",e.device]})])},h=[],f={props:{isActive:{type:Boolean,default:!1},device:{type:String,required:!0}},methods:{toggleClick:function(){this.$emit("toggle-click")}}},d=f,p=(n("a6fd"),n("2877")),v=Object(p["a"])(d,u,h,!1,null,"10bd48b2",null),m=v.exports,g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{on:{click:e.click}},[n("i",{class:e.isFullscreen?"el-icon-ali-tuichuquanping3":"el-icon-ali-quanping1"})])])},b=[],y=n("93bf"),w=n.n(y),x={name:"Screenfull",data:function(){return{isFullscreen:!1}},mounted:function(){this.init()},beforeDestroy:function(){this.destroy()},methods:{click:function(){if(!w.a.enabled)return this.$message({message:"you browser can not work",type:"warning"}),!1;w.a.toggle()},change:function(){this.isFullscreen=w.a.isFullscreen},init:function(){w.a.enabled&&w.a.on("change",this.change)},destroy:function(){w.a.enabled&&w.a.off("change",this.change)}}},k=x,_=(n("6b53"),Object(p["a"])(k,g,b,!1,null,"13dac118",null)),S=_.exports,C=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-breadcrumb",{staticClass:"app-breadcrumb",attrs:{"separator-class":"el-icon-arrow-right"}},e._l(e.levelList,(function(t,r){return n("el-breadcrumb-item",{key:t.path},["noredirect"===t.redirect||r===e.levelList.length-1?n("span",{staticClass:"no-redirect"},[e._v(e._s(t.meta.title))]):n("a",{staticClass:"link",on:{click:function(n){return n.preventDefault(),e.handleLink(t)}}},[e._v(e._s(t.meta.title))])])})),1)},E=[],M=(n("ac6a"),n("7f7f"),n("bd11")),O=n.n(M),L={name:"Breadcrumb",data:function(){return{levelList:null}},watch:{$route:function(){this.getBreadcrumb()}},created:function(){this.getBreadcrumb()},methods:{getBreadcrumb:function(){var e=this,t=this.$route.matched.filter((function(e){return e.name})),n=t[0];n&&!n.meta.isIndex&&(t=[{path:"/",meta:{title:"首页"}}].concat(t)),this.levelList=t.filter((function(e){return e.meta&&e.meta.title&&!1!==e.meta.breadcrumb})),this.levelList.forEach((function(t,n){t.meta.getTitle&&(t.meta.title=t.meta.getTitle(e.$store))}))},pathCompile:function(e){var t=this.$route.params,n=O.a.compile(e);return n(t)},handleLink:function(e){var t=e.redirect,n=e.path;t?this.$router.push(t):this.$router.push(this.pathCompile(n))}}},j=L,A=(n("6835"),Object(p["a"])(j,C,E,!1,null,"7d2bb2b9",null)),F=A.exports,$=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"header-search",class:{show:e.show}},[n("div",{attrs:{"class-name":"search-icon"},on:{click:function(t){return t.stopPropagation(),e.click.apply(null,arguments)}}},[n("i",{staticClass:"search-icon el-icon-ali-search1"})]),n("el-select",{ref:"headerSearchSelect",staticClass:"header-search-select",attrs:{"remote-method":e.querySearch,filterable:"","default-first-option":"",remote:"",placeholder:"搜索"},on:{change:e.change},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}},e._l(e.options,(function(e){return n("el-option",{key:e.path,attrs:{value:e,label:e.title.join(" > ")}})})),1)],1)},I=[],P=(n("386d"),n("ffe7")),T=n.n(P),R=n("2f62"),z={name:"HeaderSearch",data:function(){return{search:"",options:[],searchPool:[],show:!1,fuse:void 0}},computed:Object(o["a"])({},Object(R["c"])(["searchList"])),watch:{show:function(e){e?document.body.addEventListener("click",this.close):document.body.removeEventListener("click",this.close)}},created:function(){this.initFuse(this.searchList)},methods:{click:function(){this.show=!this.show,this.show&&this.$refs.headerSearchSelect&&this.$refs.headerSearchSelect.focus()},close:function(){this.$refs.headerSearchSelect&&this.$refs.headerSearchSelect.blur(),this.options=[],this.show=!1},change:function(e){var t=this;this.$router.push(e.path),this.search="",this.options=[],this.$nextTick((function(){t.show=!1}))},initFuse:function(e){this.fuse=new T.a(e,{shouldSort:!0,threshold:.4,location:0,distance:100,maxPatternLength:32,minMatchCharLength:1,keys:[{name:"title",weight:.7},{name:"path",weight:.3}]})},querySearch:function(e){this.options=""!==e?this.fuse.search(e):[]}}},q=z,B=(n("e192"),Object(p["a"])(q,$,I,!1,null,"c6baa6d4",null)),D=B.exports,N=n("6cb6"),U={components:{Hamburger:m,Screenfull:S,Breadcrumb:F,HeaderSearch:D},props:{dropdownMenu:{type:Array,default:Array}},data:function(){return{innerDropdownMenu:[]}},computed:Object(o["a"])({},Object(R["c"])(["username","device","sidebar","showAvatar"])),mounted:function(){this.innerDropdownMenu=[].concat(Object(l["a"])(this.dropdownMenu),[{path:"/me/profile",label:"用户信息"},{path:"/me/password",label:"修改密码"},{callback:this.handleLogout,label:"退出登陆"}])},methods:Object(o["a"])(Object(o["a"])({},Object(R["b"])("admin",["logout"])),{},{handleLogout:function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.logout();case 2:return e.next=4,Object(N["c"])("登出成功！");case 4:this.$router.push("/login");case 5:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),toggleSidebar:function(){this.$store.dispatch("app/toggleSidebar")}})},H=U,K=(n("7fc2"),Object(p["a"])(H,a,s,!1,null,"558a7cc3",null)),J=K.exports,V=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-aside"},[n("div",{staticClass:"title-container"},[n("h1",{staticClass:"title"},[n("router-link",{attrs:{to:"/index"}},[e._v(e._s(e.title))])],1)]),e._.isEmpty(e.navList)?e._e():n("el-menu",{staticClass:"el-menu-vertical",attrs:{"default-active":e.activeIndex,router:""}},[e._l(e.navList,(function(e,t){return[n("v-menu",{key:t,attrs:{item:e}})]}))],2)],1)},W=[],Y=(n("7514"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.item.children?n("el-submenu",{key:e.item.name,attrs:{index:e.item.path}},[n("template",{slot:"title"},[e.item.meta.icon?n("i",{class:e.item.meta.icon}):e._e(),n("span",[e._v(e._s(e.item.meta.title))])]),e._l(e.item.children,(function(e){return n("v-menu",{key:e.name,attrs:{item:e}})}))],2):n("el-menu-item",{key:e.item.name,attrs:{index:e.item.path}},[e.item.meta.icon?n("i",{class:e.item.meta.icon}):e._e(),n("span",[e._v(e._s(e.item.meta.title))])])}),G=[],Q={name:"VMenu",props:{item:{type:Object,required:!0}}},X=Q,Z=Object(p["a"])(X,Y,G,!1,null,null,null),ee=Z.exports,te={components:{vMenu:ee},data:function(){return{activeIndex:""}},computed:Object(o["a"])({},Object(R["c"])(["title","navList"])),watch:{$route:function(){this.updateActive()}},mounted:function(){this.updateActive()},beforeUpdate:function(){this.updateActive()},methods:{updateActive:function(){var e=this.$route.matched.find((function(e){return!e.redirect})).path;this.activeIndex!==e&&(this.activeIndex=e)}}},ne=te,re=(n("9fc6"),n("be7c"),Object(p["a"])(ne,V,W,!1,null,"afa124b0",null)),ie=re.exports,oe=n("a06f"),ae={components:{vHeader:J,vAside:ie,vFooter:oe["a"]},data:function(){return{load:!1}},computed:Object(o["a"])(Object(o["a"])({},Object(R["c"])(["device","sidebar","isMobile"])),{},{classObj:function(){return{hideSidebar:!this.sidebar.opened,openSidebar:this.sidebar.opened,mobile:this.isMobile}}}),mounted:function(){this.load=!0},methods:{handleClickOutside:function(){this.$store.dispatch("app/toggleSidebar")}}},se=ae,ce=(n("8bae"),Object(p["a"])(se,r,i,!1,null,"53e758ea",null));t["default"]=ce.exports},6835:function(e,t,n){"use strict";n("cbb1")},"6b53":function(e,t,n){"use strict";n("21ce")},"7fc2":function(e,t,n){"use strict";n("5b4b")},"8bae":function(e,t,n){"use strict";n("e460")},"93bf":function(e,t,n){
/*!
* screenfull
* v4.2.1 - 2019-07-27
* (c) Sindre Sorhus; MIT License
*/
(function(){"use strict";var t="undefined"!==typeof window&&"undefined"!==typeof window.document?window.document:{},n=e.exports,r="undefined"!==typeof Element&&"ALLOW_KEYBOARD_INPUT"in Element,i=function(){for(var e,n=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],r=0,i=n.length,o={};r<i;r++)if(e=n[r],e&&e[1]in t){for(r=0;r<e.length;r++)o[n[0][r]]=e[r];return o}return!1}(),o={change:i.fullscreenchange,error:i.fullscreenerror},a={request:function(e){return new Promise(function(n,o){var a,s=i.requestFullscreen,c=function(){this.off("change",c),n()}.bind(this);this.on("change",c),e=e||t.documentElement,a=/ Version\/5\.1(?:\.\d+)? Safari\//.test(navigator.userAgent)?e[s]():e[s](r?Element.ALLOW_KEYBOARD_INPUT:{}),Promise.resolve(a).catch(o)}.bind(this))},exit:function(){return new Promise(function(e){if(this.isFullscreen){var n=function(){this.off("change",n),e()}.bind(this);t[i.exitFullscreen](),this.on("change",n)}else e()}.bind(this))},toggle:function(e){return this.isFullscreen?this.exit():this.request(e)},onchange:function(e){this.on("change",e)},onerror:function(e){this.on("error",e)},on:function(e,n){var r=o[e];r&&t.addEventListener(r,n,!1)},off:function(e,n){var r=o[e];r&&t.removeEventListener(r,n,!1)},raw:i};i?(Object.defineProperties(a,{isFullscreen:{get:function(){return Boolean(t[i.fullscreenElement])}},element:{enumerable:!0,get:function(){return t[i.fullscreenElement]}},enabled:{enumerable:!0,get:function(){return Boolean(t[i.fullscreenEnabled])}}}),n?(e.exports=a,e.exports.default=a):window.screenfull=a):n?e.exports=!1:window.screenfull=!1})()},"9fc6":function(e,t,n){"use strict";n("1742")},a06f:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-footer"},[n("p",{staticClass:"app-footer__title"},[e._v(e._s(e.$config.app_title)+" V"+e._s(e.$config.app_version))]),n("p",{staticClass:"app-footer__copyright"},[e._v(e._s(e.$config.app_copyright))])])},i=[],o=(n("bf8d"),n("2877")),a={},s=Object(o["a"])(a,r,i,!1,null,"6594159e",null);t["a"]=s.exports},a6fd:function(e,t,n){"use strict";n("13f4")},bd11:function(e,t){e.exports=m,e.exports.match=a,e.exports.regexpToFunction=s,e.exports.parse=i,e.exports.compile=o,e.exports.tokensToFunction=c,e.exports.tokensToRegExp=v;var n="/",r=new RegExp(["(\\\\.)","(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"),"g");function i(e,t){var i,o=[],a=0,s=0,c="",h=t&&t.delimiter||n,f=t&&t.whitelist||void 0,d=!1;while(null!==(i=r.exec(e))){var p=i[0],v=i[1],m=i.index;if(c+=e.slice(s,m),s=m+p.length,v)c+=v[1],d=!0;else{var g="",b=i[2],y=i[3],w=i[4],x=i[5];if(!d&&c.length){var k=c.length-1,_=c[k],S=!f||f.indexOf(_)>-1;S&&(g=_,c=c.slice(0,k))}c&&(o.push(c),c="",d=!1);var C="+"===x||"*"===x,E="?"===x||"*"===x,M=y||w,O=g||h;o.push({name:b||a++,prefix:g,delimiter:O,optional:E,repeat:C,pattern:M?u(M):"[^"+l(O===h?O:O+h)+"]+?"})}}return(c||s<e.length)&&o.push(c+e.substr(s)),o}function o(e,t){return c(i(e,t),t)}function a(e,t){var n=[],r=m(e,n,t);return s(r,n)}function s(e,t){return function(n,r){var i=e.exec(n);if(!i)return!1;for(var o=i[0],a=i.index,s={},c=r&&r.decode||decodeURIComponent,l=1;l<i.length;l++)if(void 0!==i[l]){var u=t[l-1];u.repeat?s[u.name]=i[l].split(u.delimiter).map((function(e){return c(e,u)})):s[u.name]=c(i[l],u)}return{path:o,index:a,params:s}}}function c(e,t){for(var n=new Array(e.length),r=0;r<e.length;r++)"object"===typeof e[r]&&(n[r]=new RegExp("^(?:"+e[r].pattern+")$",h(t)));return function(t,r){for(var i="",o=r&&r.encode||encodeURIComponent,a=!r||!1!==r.validate,s=0;s<e.length;s++){var c=e[s];if("string"!==typeof c){var l,u=t?t[c.name]:void 0;if(Array.isArray(u)){if(!c.repeat)throw new TypeError('Expected "'+c.name+'" to not repeat, but got array');if(0===u.length){if(c.optional)continue;throw new TypeError('Expected "'+c.name+'" to not be empty')}for(var h=0;h<u.length;h++){if(l=o(u[h],c),a&&!n[s].test(l))throw new TypeError('Expected all "'+c.name+'" to match "'+c.pattern+'"');i+=(0===h?c.prefix:c.delimiter)+l}}else if("string"!==typeof u&&"number"!==typeof u&&"boolean"!==typeof u){if(!c.optional)throw new TypeError('Expected "'+c.name+'" to be '+(c.repeat?"an array":"a string"))}else{if(l=o(String(u),c),a&&!n[s].test(l))throw new TypeError('Expected "'+c.name+'" to match "'+c.pattern+'", but got "'+l+'"');i+=c.prefix+l}}else i+=c}return i}}function l(e){return e.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function u(e){return e.replace(/([=!:$/()])/g,"\\$1")}function h(e){return e&&e.sensitive?"":"i"}function f(e,t){if(!t)return e;var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,pattern:null});return e}function d(e,t,n){for(var r=[],i=0;i<e.length;i++)r.push(m(e[i],t,n).source);return new RegExp("(?:"+r.join("|")+")",h(n))}function p(e,t,n){return v(i(e,n),t,n)}function v(e,t,r){r=r||{};for(var i=r.strict,o=!1!==r.start,a=!1!==r.end,s=r.delimiter||n,c=[].concat(r.endsWith||[]).map(l).concat("$").join("|"),u=o?"^":"",f=0;f<e.length;f++){var d=e[f];if("string"===typeof d)u+=l(d);else{var p=d.repeat?"(?:"+d.pattern+")(?:"+l(d.delimiter)+"(?:"+d.pattern+"))*":d.pattern;t&&t.push(d),d.optional?d.prefix?u+="(?:"+l(d.prefix)+"("+p+"))?":u+="("+p+")?":u+=l(d.prefix)+"("+p+")"}}if(a)i||(u+="(?:"+l(s)+")?"),u+="$"===c?"$":"(?="+c+")";else{var v=e[e.length-1],m="string"===typeof v?v[v.length-1]===s:void 0===v;i||(u+="(?:"+l(s)+"(?="+c+"))?"),m||(u+="(?="+l(s)+"|"+c+")")}return new RegExp(u,h(r))}function m(e,t,n){return e instanceof RegExp?f(e,t):Array.isArray(e)?d(e,t,n):p(e,t,n)}},be7c:function(e,t,n){"use strict";n("32c1")},bf8d:function(e,t,n){"use strict";n("0b23")},cbb1:function(e,t,n){},d862:function(e,t,n){},e192:function(e,t,n){"use strict";n("d862")},e460:function(e,t,n){},ffe7:function(e,t,n){
/*!
 * Fuse.js v3.4.4 - Lightweight fuzzy-search (http://fusejs.io)
 * 
 * Copyright (c) 2012-2017 Kirollos Risk (http://kiro.me)
 * All Rights Reserved. Apache Software License 2.0
 * 
 * http://www.apache.org/licenses/LICENSE-2.0
 */
!function(t,n){e.exports=n()}(0,(function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t){e.exports=function(e){return Array.isArray?Array.isArray(e):"[object Array]"===Object.prototype.toString.call(e)}},function(e,t,n){function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var o=n(2),a=n(8),s=n(0),c=function(){function e(t,n){var r=n.location,i=void 0===r?0:r,o=n.distance,s=void 0===o?100:o,c=n.threshold,l=void 0===c?.6:c,u=n.maxPatternLength,h=void 0===u?32:u,f=n.caseSensitive,d=void 0!==f&&f,p=n.tokenSeparator,v=void 0===p?/ +/g:p,m=n.findAllMatches,g=void 0!==m&&m,b=n.minMatchCharLength,y=void 0===b?1:b,w=n.id,x=void 0===w?null:w,k=n.keys,_=void 0===k?[]:k,S=n.shouldSort,C=void 0===S||S,E=n.getFn,M=void 0===E?a:E,O=n.sortFn,L=void 0===O?function(e,t){return e.score-t.score}:O,j=n.tokenize,A=void 0!==j&&j,F=n.matchAllTokens,$=void 0!==F&&F,I=n.includeMatches,P=void 0!==I&&I,T=n.includeScore,R=void 0!==T&&T,z=n.verbose,q=void 0!==z&&z;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.options={location:i,distance:s,threshold:l,maxPatternLength:h,isCaseSensitive:d,tokenSeparator:v,findAllMatches:g,minMatchCharLength:y,id:x,keys:_,includeMatches:P,includeScore:R,shouldSort:C,getFn:M,sortFn:L,verbose:q,tokenize:A,matchAllTokens:$},this.setCollection(t)}var t,n,c;return t=e,(n=[{key:"setCollection",value:function(e){return this.list=e,e}},{key:"search",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{limit:!1};this._log('---------\nSearch pattern: "'.concat(e,'"'));var n=this._prepareSearchers(e),r=n.tokenSearchers,i=n.fullSearcher,o=this._search(r,i),a=o.weights,s=o.results;return this._computeScore(a,s),this.options.shouldSort&&this._sort(s),t.limit&&"number"==typeof t.limit&&(s=s.slice(0,t.limit)),this._format(s)}},{key:"_prepareSearchers",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=[];if(this.options.tokenize)for(var n=e.split(this.options.tokenSeparator),r=0,i=n.length;r<i;r+=1)t.push(new o(n[r],this.options));return{tokenSearchers:t,fullSearcher:new o(e,this.options)}}},{key:"_search",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,n=this.list,r={},i=[];if("string"==typeof n[0]){for(var o=0,a=n.length;o<a;o+=1)this._analyze({key:"",value:n[o],record:o,index:o},{resultMap:r,results:i,tokenSearchers:e,fullSearcher:t});return{weights:null,results:i}}for(var s={},c=0,l=n.length;c<l;c+=1)for(var u=n[c],h=0,f=this.options.keys.length;h<f;h+=1){var d=this.options.keys[h];if("string"!=typeof d){if(s[d.name]={weight:1-d.weight||1},d.weight<=0||d.weight>1)throw new Error("Key weight has to be > 0 and <= 1");d=d.name}else s[d]={weight:1};this._analyze({key:d,value:this.options.getFn(u,d),record:u,index:c},{resultMap:r,results:i,tokenSearchers:e,fullSearcher:t})}return{weights:s,results:i}}},{key:"_analyze",value:function(e,t){var n=e.key,r=e.arrayIndex,i=void 0===r?-1:r,o=e.value,a=e.record,c=e.index,l=t.tokenSearchers,u=void 0===l?[]:l,h=t.fullSearcher,f=void 0===h?[]:h,d=t.resultMap,p=void 0===d?{}:d,v=t.results,m=void 0===v?[]:v;if(null!=o){var g=!1,b=-1,y=0;if("string"==typeof o){this._log("\nKey: ".concat(""===n?"-":n));var w=f.search(o);if(this._log('Full text: "'.concat(o,'", score: ').concat(w.score)),this.options.tokenize){for(var x=o.split(this.options.tokenSeparator),k=[],_=0;_<u.length;_+=1){var S=u[_];this._log('\nPattern: "'.concat(S.pattern,'"'));for(var C=!1,E=0;E<x.length;E+=1){var M=x[E],O=S.search(M),L={};O.isMatch?(L[M]=O.score,g=!0,C=!0,k.push(O.score)):(L[M]=1,this.options.matchAllTokens||k.push(1)),this._log('Token: "'.concat(M,'", score: ').concat(L[M]))}C&&(y+=1)}b=k[0];for(var j=k.length,A=1;A<j;A+=1)b+=k[A];b/=j,this._log("Token score average:",b)}var F=w.score;b>-1&&(F=(F+b)/2),this._log("Score average:",F);var $=!this.options.tokenize||!this.options.matchAllTokens||y>=u.length;if(this._log("\nCheck Matches: ".concat($)),(g||w.isMatch)&&$){var I=p[c];I?I.output.push({key:n,arrayIndex:i,value:o,score:F,matchedIndices:w.matchedIndices}):(p[c]={item:a,output:[{key:n,arrayIndex:i,value:o,score:F,matchedIndices:w.matchedIndices}]},m.push(p[c]))}}else if(s(o))for(var P=0,T=o.length;P<T;P+=1)this._analyze({key:n,arrayIndex:P,value:o[P],record:a,index:c},{resultMap:p,results:m,tokenSearchers:u,fullSearcher:f})}}},{key:"_computeScore",value:function(e,t){this._log("\n\nComputing score:\n");for(var n=0,r=t.length;n<r;n+=1){for(var i=t[n].output,o=i.length,a=1,s=1,c=0;c<o;c+=1){var l=e?e[i[c].key].weight:1,u=(1===l?i[c].score:i[c].score||.001)*l;1!==l?s=Math.min(s,u):(i[c].nScore=u,a*=u)}t[n].score=1===s?a:s,this._log(t[n])}}},{key:"_sort",value:function(e){this._log("\n\nSorting...."),e.sort(this.options.sortFn)}},{key:"_format",value:function(e){var t=[];if(this.options.verbose){var n=[];this._log("\n\nOutput:\n\n",JSON.stringify(e,(function(e,t){if("object"===r(t)&&null!==t){if(-1!==n.indexOf(t))return;n.push(t)}return t}))),n=null}var i=[];this.options.includeMatches&&i.push((function(e,t){var n=e.output;t.matches=[];for(var r=0,i=n.length;r<i;r+=1){var o=n[r];if(0!==o.matchedIndices.length){var a={indices:o.matchedIndices,value:o.value};o.key&&(a.key=o.key),o.hasOwnProperty("arrayIndex")&&o.arrayIndex>-1&&(a.arrayIndex=o.arrayIndex),t.matches.push(a)}}})),this.options.includeScore&&i.push((function(e,t){t.score=e.score}));for(var o=0,a=e.length;o<a;o+=1){var s=e[o];if(this.options.id&&(s.item=this.options.getFn(s.item,this.options.id)[0]),i.length){for(var c={item:s.item},l=0,u=i.length;l<u;l+=1)i[l](s,c);t.push(c)}else t.push(s.item)}return t}},{key:"_log",value:function(){var e;this.options.verbose&&(e=console).log.apply(e,arguments)}}])&&i(t.prototype,n),c&&i(t,c),e}();e.exports=c},function(e,t,n){function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=n(3),o=n(4),a=n(7),s=function(){function e(t,n){var r=n.location,i=void 0===r?0:r,o=n.distance,s=void 0===o?100:o,c=n.threshold,l=void 0===c?.6:c,u=n.maxPatternLength,h=void 0===u?32:u,f=n.isCaseSensitive,d=void 0!==f&&f,p=n.tokenSeparator,v=void 0===p?/ +/g:p,m=n.findAllMatches,g=void 0!==m&&m,b=n.minMatchCharLength,y=void 0===b?1:b;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.options={location:i,distance:s,threshold:l,maxPatternLength:h,isCaseSensitive:d,tokenSeparator:v,findAllMatches:g,minMatchCharLength:y},this.pattern=this.options.isCaseSensitive?t:t.toLowerCase(),this.pattern.length<=h&&(this.patternAlphabet=a(this.pattern))}var t,n,s;return t=e,(n=[{key:"search",value:function(e){if(this.options.isCaseSensitive||(e=e.toLowerCase()),this.pattern===e)return{isMatch:!0,score:0,matchedIndices:[[0,e.length-1]]};var t=this.options,n=t.maxPatternLength,r=t.tokenSeparator;if(this.pattern.length>n)return i(e,this.pattern,r);var a=this.options,s=a.location,c=a.distance,l=a.threshold,u=a.findAllMatches,h=a.minMatchCharLength;return o(e,this.pattern,this.patternAlphabet,{location:s,distance:c,threshold:l,findAllMatches:u,minMatchCharLength:h})}}])&&r(t.prototype,n),s&&r(t,s),e}();e.exports=s},function(e,t){var n=/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g;e.exports=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:/ +/g,i=new RegExp(t.replace(n,"\\$&").replace(r,"|")),o=e.match(i),a=!!o,s=[];if(a)for(var c=0,l=o.length;c<l;c+=1){var u=o[c];s.push([e.indexOf(u),u.length-1])}return{score:a?.5:1,isMatch:a,matchedIndices:s}}},function(e,t,n){var r=n(5),i=n(6);e.exports=function(e,t,n,o){for(var a=o.location,s=void 0===a?0:a,c=o.distance,l=void 0===c?100:c,u=o.threshold,h=void 0===u?.6:u,f=o.findAllMatches,d=void 0!==f&&f,p=o.minMatchCharLength,v=void 0===p?1:p,m=s,g=e.length,b=h,y=e.indexOf(t,m),w=t.length,x=[],k=0;k<g;k+=1)x[k]=0;if(-1!==y){var _=r(t,{errors:0,currentLocation:y,expectedLocation:m,distance:l});if(b=Math.min(_,b),-1!==(y=e.lastIndexOf(t,m+w))){var S=r(t,{errors:0,currentLocation:y,expectedLocation:m,distance:l});b=Math.min(S,b)}}y=-1;for(var C=[],E=1,M=w+g,O=1<<w-1,L=0;L<w;L+=1){for(var j=0,A=M;j<A;)r(t,{errors:L,currentLocation:m+A,expectedLocation:m,distance:l})<=b?j=A:M=A,A=Math.floor((M-j)/2+j);M=A;var F=Math.max(1,m-A+1),$=d?g:Math.min(m+A,g)+w,I=Array($+2);I[$+1]=(1<<L)-1;for(var P=$;P>=F;P-=1){var T=P-1,R=n[e.charAt(T)];if(R&&(x[T]=1),I[P]=(I[P+1]<<1|1)&R,0!==L&&(I[P]|=(C[P+1]|C[P])<<1|1|C[P+1]),I[P]&O&&(E=r(t,{errors:L,currentLocation:T,expectedLocation:m,distance:l}))<=b){if(b=E,(y=T)<=m)break;F=Math.max(1,2*m-y)}}if(r(t,{errors:L+1,currentLocation:m,expectedLocation:m,distance:l})>b)break;C=I}return{isMatch:y>=0,score:0===E?.001:E,matchedIndices:i(x,v)}}},function(e,t){e.exports=function(e,t){var n=t.errors,r=void 0===n?0:n,i=t.currentLocation,o=void 0===i?0:i,a=t.expectedLocation,s=void 0===a?0:a,c=t.distance,l=void 0===c?100:c,u=r/e.length,h=Math.abs(s-o);return l?u+h/l:h?1:u}},function(e,t){e.exports=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=[],r=-1,i=-1,o=0,a=e.length;o<a;o+=1){var s=e[o];s&&-1===r?r=o:s||-1===r||((i=o-1)-r+1>=t&&n.push([r,i]),r=-1)}return e[o-1]&&o-r>=t&&n.push([r,o-1]),n}},function(e,t){e.exports=function(e){for(var t={},n=e.length,r=0;r<n;r+=1)t[e.charAt(r)]=0;for(var i=0;i<n;i+=1)t[e.charAt(i)]|=1<<n-i-1;return t}},function(e,t,n){var r=n(0);e.exports=function(e,t){return function e(t,n,i){if(n){var o=n.indexOf("."),a=n,s=null;-1!==o&&(a=n.slice(0,o),s=n.slice(o+1));var c=t[a];if(null!=c)if(s||"string"!=typeof c&&"number"!=typeof c)if(r(c))for(var l=0,u=c.length;l<u;l+=1)e(c[l],s,i);else s&&e(c,s,i);else i.push(c.toString())}else i.push(t);return i}(e,t,[])}}])}))}}]);