(this.webpackJsonplearn=this.webpackJsonplearn||[]).push([[0],{11:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var c=n(1),r=n.n(c),s=n(5),a=n.n(s),o=(n(11),n(6)),u=n(4),i=n(2),l=n.n(i),b=function(){var t=Object(u.a)(l.a.mark((function t(e){var n,c,r;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="https://composite-watch-335623.an.r.appspot.com/".concat(e),t.next=3,fetch(n,{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"}});case 3:if(200!==(c=t.sent).status){t.next=11;break}return t.next=7,c.json();case 7:return r=t.sent,t.abrupt("return",r);case 11:return t.abrupt("return",!1);case 12:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),j=n(0),d="INCREMENT",p="DECREMENT",m=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{count:0},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(console.log(t),e.type){case d:return{count:t.count+1};case p:return t.count>=1?{count:t.count-1}:void 0;default:return t}},h=function(){var t=Object(c.useReducer)(m,{count:0}),e=Object(o.a)(t,2),n=e[0],r=e[1];return Object(j.jsx)("body",{children:Object(j.jsxs)("div",{className:"g-container one-column",children:[Object(j.jsx)("small",{className:"txt-title",children:n?n.count:0}),Object(j.jsxs)("div",{className:"two-columns",children:[Object(j.jsx)("button",{className:"button-increment green-c",onClick:function(){r({type:d})},children:Object(j.jsx)("small",{className:"txt-btn",children:"Incrementar"})}),Object(j.jsx)("button",{className:"button-increment red-c",onClick:function(){r({type:p})},children:Object(j.jsx)("small",{className:"txt-btn",children:"Decrementar"})}),Object(j.jsx)("button",{className:"button-increment red-c",onClick:function(){b("prueba").then((function(t){console.log(t)}))},children:Object(j.jsx)("small",{className:"txt-btn",children:"test"})})]})]})})};a.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(h,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.2ff9c964.chunk.js.map