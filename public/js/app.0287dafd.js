(function(e){function t(t){for(var o,a,c=t[0],i=t[1],l=t[2],s=0,p=[];s<c.length;s++)a=c[s],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&p.push(r[a][0]),r[a]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o]);f&&f(t);while(p.length)p.shift()();return u.push.apply(u,l||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],o=!0,a=1;a<n.length;a++){var i=n[a];0!==r[i]&&(o=!1)}o&&(u.splice(t--,1),e=c(c.s=n[0]))}return e}var o={},r={app:0},u=[];function a(e){return c.p+"js/"+({about:"about"}[e]||e)+"."+{about:"dfbdc582"}[e]+".js"}function c(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise((function(t,o){n=r[e]=[t,o]}));t.push(n[2]=o);var u,i=document.createElement("script");i.charset="utf-8",i.timeout=120,c.nc&&i.setAttribute("nonce",c.nc),i.src=a(e);var l=new Error;u=function(t){i.onerror=i.onload=null,clearTimeout(s);var n=r[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),u=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+o+": "+u+")",l.name="ChunkLoadError",l.type=o,l.request=u,n[1](l)}r[e]=void 0}};var s=setTimeout((function(){u({type:"timeout",target:i})}),12e4);i.onerror=i.onload=u,document.head.appendChild(i)}return Promise.all(t)},c.m=e,c.c=o,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)c.d(n,o,function(t){return e[t]}.bind(null,o));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var s=0;s<i.length;s++)t(i[s]);var f=l;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("7a23"),r={id:"nav"},u=Object(o["e"])("Home"),a=Object(o["e"])(" | "),c=Object(o["e"])("About");function i(e,t,n,i,l,s){var f=Object(o["s"])("router-link"),p=Object(o["s"])("router-view");return Object(o["o"])(),Object(o["d"])(o["a"],null,[Object(o["f"])("div",r,[Object(o["f"])(f,{to:"/"},{default:Object(o["z"])((function(){return[u]})),_:1}),a,Object(o["f"])(f,{to:"/about"},{default:Object(o["z"])((function(){return[c]})),_:1}),Object(o["f"])("button",{onClick:t[1]||(t[1]=function(){return e.logOut.apply(e,arguments)})},"Log Out")]),Object(o["f"])(p)],64)}var l=n("5530"),s=n("5502"),f={methods:Object(l["a"])({},Object(s["b"])(["getToken","logOut"])),created:function(){this.getToken()}};n("64be");f.render=i;var p=f,b=(n("45fc"),n("d3b7"),n("6c02")),d=n("cf05"),m=n.n(d),O={class:"home"},j=Object(o["f"])("img",{alt:"Vue logo",src:m.a},null,-1),g=Object(o["f"])("h1",null,"Login",-1),h=Object(o["f"])("button",{type:"submit"},"Log In",-1);function v(e,t,n,r,u,a){return Object(o["o"])(),Object(o["d"])("div",O,[j,g,Object(o["f"])("form",{onSubmit:t[3]||(t[3]=Object(o["B"])((function(t){return e.login(u.user)}),["prevent"]))},[Object(o["A"])(Object(o["f"])("input",{type:"email",name:"email",placeholder:"Email",required:"","onUpdate:modelValue":t[1]||(t[1]=function(e){return u.user.email=e})},null,512),[[o["w"],u.user.email]]),Object(o["A"])(Object(o["f"])("input",{type:"password",name:"password",placeholder:"Password",required:"","onUpdate:modelValue":t[2]||(t[2]=function(e){return u.user.password=e})},null,512),[[o["w"],u.user.password]]),h,Object(o["e"])(" "+Object(o["u"])(u.user),1)],32)])}var y={data:function(){return{user:{email:"",password:""}}},methods:Object(l["a"])({},Object(s["b"])(["login"]))};y.render=v;var k=y,w=(n("96cf"),n("1da1")),T=Object(s["a"])({state:{token:null},mutations:{setToken:function(e,t){e.token=t}},actions:{login:function(e,t){return Object(w["a"])(regeneratorRuntime.mark((function n(){var o,r,u;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return o=e.commit,console.log(t),n.prev=2,n.next=5,fetch("https://api-jwt-node.herokuapp.com/api/user/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});case 5:return r=n.sent,n.next=8,r.json();case 8:u=n.sent,o("setToken",u.data.token),console.log(u.data.token),localStorage.setItem("token",u.data.token),n.next=17;break;case 14:n.prev=14,n.t0=n["catch"](2),console.log(n.t0);case 17:case"end":return n.stop()}}),n,null,[[2,14]])})))()},getToken:function(e){var t=e.commit;localStorage.getItem("token")?t("setToken",localStorage.getItem("token")):t("setToken",null)},logOut:function(e){var t=e.commit;localStorage.removeItem("token"),t("setToken",null)}},modules:{}}),S=[{path:"/",name:"Home",component:k},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))},meta:{protectedRoute:!0}}],x=Object(b["a"])({history:Object(b["b"])("/"),routes:S});x.beforeEach((function(e,t,n){var o=e.matched.some((function(e){return e.meta.protectedRoute}));o&&null===T.state.token?n("/"):n()}));var P=x;Object(o["c"])(p).use(T).use(P).mount("#app")},"64be":function(e,t,n){"use strict";n("c894")},c894:function(e,t,n){},cf05:function(e,t,n){e.exports=n.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.0287dafd.js.map