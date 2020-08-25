(function(t){function e(e){for(var a,s,i=e[0],l=e[1],u=e[2],c=0,d=[];c<i.length;c++)s=i[c],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&d.push(r[s][0]),r[s]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);p&&p(e);while(d.length)d.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,s=1;s<n.length;s++){var l=n[s];0!==r[l]&&(a=!1)}a&&(o.splice(e--,1),t=i(i.s=n[0]))}return t}var a={},r={app:0},o=[];function s(t){return i.p+"js/"+({about:"about"}[t]||t)+"."+{about:"e79dc3a9"}[t]+".js"}function i(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(t){var e=[],n=r[t];if(0!==n)if(n)e.push(n[2]);else{var a=new Promise((function(e,a){n=r[t]=[e,a]}));e.push(n[2]=a);var o,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=s(t);var u=new Error;o=function(e){l.onerror=l.onload=null,clearTimeout(c);var n=r[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;u.message="Loading chunk "+t+" failed.\n("+a+": "+o+")",u.name="ChunkLoadError",u.type=a,u.request=o,n[1](u)}r[t]=void 0}};var c=setTimeout((function(){o({type:"timeout",target:l})}),12e4);l.onerror=l.onload=o,document.head.appendChild(l)}return Promise.all(e)},i.m=t,i.c=a,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/liftlog/",i.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var p=u;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Navigation"),n("div",{staticClass:"container"},[n("router-view")],1)],1)},o=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-light"},[n("a",{staticClass:"navbar-brand",attrs:{href:"#"}},[t._v("Lift Log")]),n("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},on:{click:t.toggleMenu}},[n("span",{staticClass:"navbar-toggler-icon"})]),n("div",{staticClass:"collapse navbar-collapse",class:{show:t.show},attrs:{id:"navbarSupportedContent"}},[n("ul",{staticClass:"navbar-nav mr-auto"},[n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link",attrs:{to:"/"}},[t._v("Home")])],1),n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link",attrs:{to:"/settings"}},[t._v("Settings")])],1)])])])},i=[],l=n("5530"),u=n("2f62"),c={computed:Object(u["d"])({show:function(t){return t.menuOpen}}),methods:Object(l["a"])({},Object(u["c"])(["toggleMenu"]))},p=c,d=n("2877"),f=Object(d["a"])(p,s,i,!1,null,null,null),v=f.exports,m={components:{Navigation:v}},g=m,b=Object(d["a"])(g,r,o,!1,null,null,null),h=b.exports,y=(n("d3b7"),n("8c4f")),w="liftlog",O={namespaced:!0,state:{unit:"kg",roundingEnabled:!1,roundingDirection:"up",rest:60,maxes:{squat:200,bench:100,deadlift:220}},getters:{},mutations:{updateSetting:function(t,e){var n=e.key,r=e.value;a["a"].set(t,n,r)},updateMax:function(t,e){var n=e.key,r=e.value;a["a"].set(t.maxes,n,r)}},actions:{saveSettings:function(t){var e=t.state;localStorage.setItem(w,JSON.stringify(e))}}};a["a"].use(u["a"]);var _=new u["a"].Store({state:{menuOpen:!1},mutations:{toggleMenu:function(t){t.menuOpen=!t.menuOpen},closeMenu:function(t){t.menuOpen=!1}},actions:{},modules:{settings:O}}),C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("h1",[t._v("Smolov Jr")]),t._l(t.program,(function(e,a){return n("div",{key:a,staticClass:"card mb-3"},[n("div",{staticClass:"card-header"},[t._v(" Week "+t._s(e.week)+" Day "+t._s(e.day)+" ")]),n("div",{staticClass:"card-body"},t._l(e.sets,(function(r,o){return n("div",{key:o,staticClass:"d-flex"},[n("div",[t._v(" "+t._s(e.weight)+" x "+t._s(e.reps)+" ")]),n("div",{staticClass:"ml-auto custom-control custom-checkbox"},[n("input",{staticClass:"custom-control-input",attrs:{type:"checkbox",id:"lift-"+a+"-"+o}}),n("label",{staticClass:"custom-control-label",attrs:{for:"lift-"+a+"-"+o}},[t._v("complete")])])])})),0)])}))],2)},k=[],x={name:"Home",components:{},data:function(){return{program:[],smolovJr:[{week:1,day:1,percent:.7,reps:6,sets:6,weight:null}]}},created:function(){for(var t=this.maxes.squat,e=4,n=3,a=6,r=6,o=.7,s=5,i=0;i<n;i+=1)for(var l=s*i,u=0;u<e;u+=1){var c=t*(o+.05*u);this.program.push({week:i+1,day:u+1,percent:100*(o+.05*u)/100,reps:r-u,sets:u<3?a+u:a+u+1,weight:Math.floor(c+l),complete:!1})}},computed:Object(l["a"])({},Object(u["d"])("settings",["maxes"]))},j=x,S=Object(d["a"])(j,C,k,!1,null,null,null),M=S.exports;a["a"].use(y["a"]);var P=[{path:"/",name:"Home",component:M},{path:"/settings",name:"Settings",component:function(){return n.e("about").then(n.bind(null,"26d3"))}}],E=new y["a"]({mode:"history",base:"/liftlog/",routes:P});E.beforeEach((function(t,e,n){_.commit("closeMenu"),n()}));var T=E;n("6672");a["a"].config.productionTip=!1,new a["a"]({router:T,store:_,render:function(t){return t(h)}}).$mount("#app")},6672:function(t,e,n){}});
//# sourceMappingURL=app.fb349194.js.map