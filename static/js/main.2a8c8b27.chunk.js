(this["webpackJsonpc-gen"]=this["webpackJsonpc-gen"]||[]).push([[0],[,,,,,function(e,t,a){e.exports=a(15)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),r=a(4),l=a.n(r),i=(a(10),a(11),a(0)),s=a(2),o=(a(12),function(e){var t=e.store.dispatch,a=e.label,r=void 0===a?"":a,l=Object(c.useRef)(null),i=Object(c.useRef)(null),s=Object(c.useRef)(null);Object(c.useEffect)((function(){return t([r[0].toUpperCase()+"_REFS",{l:i,r:s,m:l}])}),[]);var o=function(e){return function(a){t([r[0].toUpperCase()+"_"+e])}};return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"label"},r),n.a.createElement("div",{className:"input"},n.a.createElement("div",{id:"col_track",className:"track"}),n.a.createElement("div",{ref:l,className:"middle",style:{width:"128px",left:"72px"}}),n.a.createElement("button",{ref:i,className:"control",style:{left:"64px"},onMouseDown:o("LEFT"),onMouseUp:o("LEFT")}),n.a.createElement("button",{ref:s,className:"control",style:{left:"192px"},onMouseDown:o("RIGHT"),onMouseUp:o("RIGHT")}))))});a(13);var u=function(e,t){return Array(e).fill(n.a.createElement(n.a.Fragment,null)).map((function(a,c){var r=t.map((function(t){var a=t.left,n=t.right;return Math.round(function(e,t,a,c){var n=t-e;return e+Math.round((a+1)/c*n)}(a,n,c,e))})),l=Object(s.a)(r,3),i=function(e,t,a){var c,n,r;if(e/=255,a/=255,0===(t/=255))c=n=r=a;else{var l=function(e,t,a){return a<0&&(a+=1),a>1&&(a-=1),a<1/6?e+6*(t-e)*a:a<.5?t:a<2/3?e+(t-e)*(2/3-a)*6:e},i=a<.5?a*(1+t):a+t-a*t,s=2*a-i;c=l(s,i,e+1/3),n=l(s,i,e),r=l(s,i,e-1/3)}var o=function(e){var t=Math.round(255*e).toString(16);return 1===t.length?"0"+t:t};return"#".concat(o(c)).concat(o(n)).concat(o(r))}(l[0],l[1],l[2]);return n.a.createElement("div",{key:c,"data-color":i,className:"color-swatch",style:{backgroundColor:i,width:100/e+"%"}})}))},v=function(e){var t=e.state,a=t.number,c=[t.h,t.s,t.l];return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"dispenser-container"},u(a,c)))},b=(a(14),{number:5,h:{left:64,right:192,activeL:!1,activeR:!1,refs:{l:null,r:null,m:null}},s:{left:64,right:192,activeL:!1,activeR:!1,refs:{l:null,r:null,m:null}},l:{left:64,right:192,activeL:!1,activeR:!1,refs:{l:null,r:null,m:null}}}),f=function(e,t){var a=Object(s.a)(t,2),c=a[0],n=a[1];return"H_LEFT"===c?Object(i.a)({},e,{h:Object(i.a)({},e.h,{activeL:!e.h.activeL,activeR:!1}),s:Object(i.a)({},e.s,{activeL:!1,activeR:!1}),l:Object(i.a)({},e.l,{activeL:!1,activeR:!1})}):"H_RIGHT"===c?Object(i.a)({},e,{h:Object(i.a)({},e.h,{activeL:!1,activeR:!e.h.activeR}),s:Object(i.a)({},e.s,{activeL:!1,activeR:!1}),l:Object(i.a)({},e.l,{activeL:!1,activeR:!1})}):"H_REFS"===c?Object(i.a)({},e,{h:Object(i.a)({},e.h,{refs:Object(i.a)({},n)}),s:Object(i.a)({},e.s),l:Object(i.a)({},e.l)}):"S_LEFT"===c?Object(i.a)({},e,{h:Object(i.a)({},e.h,{activeL:!1,activeR:!1}),s:Object(i.a)({},e.s,{activeL:!e.h.activeL,activeR:!1}),l:Object(i.a)({},e.l,{activeL:!1,activeR:!1})}):"S_RIGHT"===c?Object(i.a)({},e,{h:Object(i.a)({},e.h,{activeL:!1,activeR:!1}),s:Object(i.a)({},e.s,{activeL:!1,activeR:!e.h.activeR}),l:Object(i.a)({},e.l,{activeL:!1,activeR:!1})}):"S_REFS"===c?Object(i.a)({},e,{h:Object(i.a)({},e.h),s:Object(i.a)({},e.s,{refs:Object(i.a)({},n)}),l:Object(i.a)({},e.l)}):"L_LEFT"===c?Object(i.a)({},e,{h:Object(i.a)({},e.h,{activeL:!1,activeR:!1}),s:Object(i.a)({},e.s,{activeL:!1,activeR:!1}),l:Object(i.a)({},e.l,{activeL:!e.h.activeL,activeR:!1})}):"L_RIGHT"===c?Object(i.a)({},e,{h:Object(i.a)({},e.h,{activeL:!1,activeR:!1}),s:Object(i.a)({},e.s,{activeL:!1,activeR:!1}),l:Object(i.a)({},e.l,{activeL:!1,activeR:!e.h.activeR})}):"L_REFS"===c?Object(i.a)({},e,{h:Object(i.a)({},e.h),s:Object(i.a)({},e.s),l:Object(i.a)({},e.l,{refs:Object(i.a)({},n)})}):"SET_H"===c?Object(i.a)({},e,{h:Object(i.a)({},e.h,{right:n.right,left:n.left}),s:Object(i.a)({},e.s),l:Object(i.a)({},e.l)}):"SET_S"===c?Object(i.a)({},e,{h:Object(i.a)({},e.h),s:Object(i.a)({},e.s,{right:n.right,left:n.left}),l:Object(i.a)({},e.l)}):"SET_L"===c?Object(i.a)({},e,{h:Object(i.a)({},e.h),s:Object(i.a)({},e.s),l:Object(i.a)({},e.l,{right:n.right,left:n.left})}):"DEACTIVATE"===c?Object(i.a)({},e,{h:Object(i.a)({},e.h,{activeL:!1,activeR:!1}),s:Object(i.a)({},e.s,{activeL:!1,activeR:!1}),l:Object(i.a)({},e.l,{activeL:!1,activeR:!1})}):"CHANGE_CT"===c?{number:n,h:Object(i.a)({},e.h,{activeL:!1,activeR:!1}),s:Object(i.a)({},e.s,{activeL:!1,activeR:!1}),l:Object(i.a)({},e.l,{activeL:!1,activeR:!1})}:e},h=function(){var e=Object(c.useRef)(null),t=Object(c.useReducer)(f,b),a=Object(s.a)(t,2),r=a[0],l=a[1],i=function(e){l(["DEACTIVATE"])};return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{ref:e,className:"group-container",onMouseMove:function(t){e.current&&Object.entries(r).forEach((function(a){var c=Object(s.a)(a,2),n=c[0],r=c[1];if("number"!==n){var i=r.activeL,o=r.activeR,u=r.right,v=r.left,b=r.refs,f=b.l,h=b.r,m=b.m;if(o){var j=Math.max(f.current.offsetLeft,Math.min(t.clientX-e.current.offsetLeft,255));l(["SET_"+n.toUpperCase(),{right:j,left:v}]),h.current.style.left=j+"px",m.current.style.width=j-v+"px"}if(i){var O=Math.max(0,Math.min(t.clientX-e.current.offsetLeft,h.current.offsetLeft));l(["SET_"+n.toUpperCase(),{right:u,left:O}]),f.current.style.left=O+"px",m.current.style.left=O+8+"px",m.current.style.width=u-O+"px"}}}))},onMouseUp:i,onMouseLeave:i},n.a.createElement(v,{state:r}),n.a.createElement("div",{className:"button-container"},n.a.createElement("button",{className:"number-button",onClick:function(e){return l(["CHANGE_CT",r.number-1<3?3:r.number-1])}},"-"),n.a.createElement("div",{style:{margin:"1em"}},r.number),n.a.createElement("button",{className:"number-button",onClick:function(e){return l(["CHANGE_CT",r.number+1>12?12:r.number+1])}},"+")),n.a.createElement(o,{store:{state:r,dispatch:l},label:"Hue"}),n.a.createElement(o,{store:{state:r,dispatch:l},label:"Sat"}),n.a.createElement(o,{store:{state:r,dispatch:l},label:"Light"})))},m=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(h,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(m,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[5,1,2]]]);
//# sourceMappingURL=main.2a8c8b27.chunk.js.map