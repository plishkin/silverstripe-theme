(()=>{"use strict";var e={1128:(e,t,n)=>{n.r(t),n.d(t,{default:()=>c});var r,o=n(885),a=n(6611),i=n(9233),l=n(1133),s=n(9526),f=n(6865);const u={open:function(e,t,n){r=new WebSocket("ws://localhost:8082");var o=function(e,t){var n=e.split("/");return JSON.stringify({handler:n[0],action:n[1],data:{data:t}})}(e,t);r.onopen=function(e){return r.send(o)},r.onmessage=function(e){var t=JSON.parse(e.data);n(t)}}};var d=n(7557);function c(){var e=(0,s.useState)("time is here"),t=(0,o.default)(e,2),n=t[0],r=t[1];return(0,s.useEffect)((function(){u.open("timer/start",{message:"start"},(function(e){if(e.countdown>0){var t=Math.floor(e.countdown/60),n=e.countdown%60;r(t+" minutes "+n+" seconds left")}else r("Nothing left")}))}),[]),(0,d.jsxs)(l.default,{style:{width:"100%"},children:[(0,d.jsx)(f.AppBar,{title:"Countdown",style:{width:"100%"}}),(0,d.jsx)(l.default,{style:v.container,children:(0,d.jsx)(i.default,{style:{fontSize:32},children:n})})]})}var v=a.default.create({container:{flex:1,backgroundColor:"#fff",alignItems:"center",justifyContent:"center"}})}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,loaded:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.loaded=!0,a.exports}n.m=e,(()=>{var e=[];n.O=(t,r,o,a)=>{if(!r){var i=1/0;for(u=0;u<e.length;u++){for(var[r,o,a]=e[u],l=!0,s=0;s<r.length;s++)(!1&a||i>=a)&&Object.keys(n.O).every((e=>n.O[e](r[s])))?r.splice(s--,1):(l=!1,a<i&&(i=a));if(l){e.splice(u--,1);var f=o();void 0!==f&&(t=f)}}return t}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[r,o,a]}})(),n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{var e={179:0};n.O.j=t=>0===e[t];var t=(t,r)=>{var o,a,[i,l,s]=r,f=0;if(i.some((t=>0!==e[t]))){for(o in l)n.o(l,o)&&(n.m[o]=l[o]);if(s)var u=s(n)}for(t&&t(r);f<i.length;f++)a=i[f],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(u)},r=self.webpackChunkweb=self.webpackChunkweb||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var r=n.O(void 0,[758],(()=>n(9484)));r=n.O(r)})();
//# sourceMappingURL=main.4c52b6d0.js.map