(this.webpackJsonpindex=this.webpackJsonpindex||[]).push([[7],{23:function(e,a,c){"use strict";c.r(a);var s=c(4),t=c(0),n=c(1),d=c.n(n),i=(c(32),[c.p+"static/media/boom.d89f41a5.wav",c.p+"static/media/clap.eb738e52.wav",c.p+"static/media/hihat.0273528c.wav",c.p+"static/media/kick.1d842c55.wav",c.p+"static/media/openhat.482e5231.wav",c.p+"static/media/ride.44e63854.wav",c.p+"static/media/snare.3aa3f943.wav",c.p+"static/media/tink.5b878d5d.wav",c.p+"static/media/tom.52db9c23.wav"]);a.default=function(){var e=d.a.useRef();d.a.useLayoutEffect((function(){e.current.focus()}),[]);var a=d.a.useState(""),c=Object(s.a)(a,2),n=c[0],r=c[1],l=d.a.useCallback((function(e){"transform"===e.propertyName&&r("")}),[]),j=d.a.useCallback((function(a){var c=Array.from(e.current.firstChild.childNodes).find((function(e){return e.dataset.key===String(a.keyCode)}));if(c){var s=new Audio(i.find((function(e){return String(e).includes(c.lastChild.innerHTML)})));s&&(s.play(),r(c.dataset.key))}}),[]),b=d.a.useCallback((function(e){return n===e&&"playing"}),[n]);return Object(t.jsx)("div",{className:"drum",onKeyDown:function(e){return j(e)},tabIndex:"0",ref:e,children:Object(t.jsxs)("div",{className:"keys",onTransitionEnd:l,children:[Object(t.jsxs)("div",{"data-key":"65",className:"key ".concat(b("65")),children:[Object(t.jsx)("kbd",{children:"A"}),Object(t.jsx)("span",{className:"sound",children:"clap"})]}),Object(t.jsxs)("div",{"data-key":"83",className:"key ".concat(b("83")),children:[Object(t.jsx)("kbd",{children:"S"}),Object(t.jsx)("span",{className:"sound",children:"hihat"})]}),Object(t.jsxs)("div",{"data-key":"68",className:"key ".concat(b("68")),children:[Object(t.jsx)("kbd",{children:"D"}),Object(t.jsx)("span",{className:"sound",children:"kick"})]}),Object(t.jsxs)("div",{"data-key":"70",className:"key ".concat(b("70")),children:[Object(t.jsx)("kbd",{children:"F"}),Object(t.jsx)("span",{className:"sound",children:"openhat"})]}),Object(t.jsxs)("div",{"data-key":"71",className:"key ".concat(b("71")),children:[Object(t.jsx)("kbd",{children:"G"}),Object(t.jsx)("span",{className:"sound",children:"boom"})]}),Object(t.jsxs)("div",{"data-key":"72",className:"key ".concat(b("72")),children:[Object(t.jsx)("kbd",{children:"H"}),Object(t.jsx)("span",{className:"sound",children:"ride"})]}),Object(t.jsxs)("div",{"data-key":"74",className:"key ".concat(b("74")),children:[Object(t.jsx)("kbd",{children:"J"}),Object(t.jsx)("span",{className:"sound",children:"snare"})]}),Object(t.jsxs)("div",{"data-key":"75",className:"key ".concat(b("75")),children:[Object(t.jsx)("kbd",{children:"K"}),Object(t.jsx)("span",{className:"sound",children:"tom"})]}),Object(t.jsxs)("div",{"data-key":"76",className:"key ".concat(b("76")),children:[Object(t.jsx)("kbd",{children:"L"}),Object(t.jsx)("span",{className:"sound",children:"tink"})]})]})})}},32:function(e,a,c){}}]);
//# sourceMappingURL=7.dc5da454.chunk.js.map