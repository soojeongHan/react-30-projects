(this.webpackJsonpindex=this.webpackJsonpindex||[]).push([[6],{21:function(t,e,n){"use strict";n.r(e);var r=n(26),o=n(4),i=n(0),c=n(1),u=n.n(c);e.default=function(){var t=u.a.useRef(null),e=u.a.useState({ctx:null,isDrawing:!1,lastX:0,lastY:0,hue:0}),n=Object(o.a)(e,2),c=n[0],a=n[1],s=c.isDrawing,f=c.ctx,b=c.lastX,l=c.lastY,O=c.hue;u.a.useLayoutEffect((function(){var e=t.current.getContext("2d");e.lineJoin="round",e.lineCap="round",e.lineWidth=50,a((function(t){return Object(r.a)(Object(r.a)({},t),{},{ctx:e})}))}),[]);var v=function(){a((function(t){return Object(r.a)(Object(r.a)({},t),{},{isDrawing:!1})}))};return Object(i.jsx)("canvas",{style:{border:"1px solid"},id:"draw",width:"800",height:"800",ref:t,onMouseDown:function(t){return function(t){a((function(e){return Object(r.a)(Object(r.a)({},e),{},{isDrawing:!0,lastX:t.nativeEvent.offsetX,lastY:t.nativeEvent.offsetY})}))}(t)},onMouseMove:function(t){return function(t){s&&(f.strokeStyle="hsl(".concat(O,", 100%, 50%)"),f.beginPath(),f.moveTo(b,l),f.lineTo(t.nativeEvent.offsetX,t.nativeEvent.offsetY),f.stroke(),a((function(e){return Object(r.a)(Object(r.a)({},e),{},{lastX:t.nativeEvent.offsetX,lastY:t.nativeEvent.offsetY,hue:O+1===360?0:O+1})})))}(t)},onMouseUp:function(){return v()},onMouseOut:function(){return v()}})}},25:function(t,e,n){"use strict";function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.d(e,"a",(function(){return r}))},26:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n(25);function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){Object(r.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}}}]);
//# sourceMappingURL=6.55233283.chunk.js.map