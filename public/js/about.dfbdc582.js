(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{f820:function(e,t,n){"use strict";n.r(t);var a=n("7a23"),o={class:"about"},r=Object(a["f"])("h1",null,"This is an about page",-1);function c(e,t,n,c,s,u){return Object(a["o"])(),Object(a["d"])("div",o,[r])}n("d3b7"),n("96cf");var s=n("1da1"),u=n("5530"),i=n("5502"),p={computed:Object(u["a"])({},Object(i["c"])(["token"])),methods:{dataProtected:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://api-jwt-node.herokuapp.com/api/admin",{headers:{"Content-Type":"application/json","auth-token":e.token}});case 3:return n=t.sent,t.next=6,n.json();case 6:a=t.sent,console.log(a),t.next=13;break;case 10:t.prev=10,t.t0=t["catch"](0),console.log(t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})))()}},created:function(){this.dataProtected()}};p.render=c;t["default"]=p}}]);
//# sourceMappingURL=about.dfbdc582.js.map