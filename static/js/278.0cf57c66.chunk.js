"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[278],{368:function(n,t,e){var r=e(689),c=e(731),u=e(184);t.Z=function(n){var t=n.item,e=(0,r.TH)();return(0,u.jsx)("ul",{children:t&&t.map((function(n){var t=n.id,r=n.original_title;return(0,u.jsx)("li",{children:(0,u.jsx)(c.OL,{to:"/movies/".concat(t),state:{from:e},children:r})},t)}))})}},278:function(n,t,e){e.r(t);var r=e(861),c=e(885),u=e(757),a=e.n(u),o=e(791),i=e(731),s=e(775),f=e(368),p=e(184);t.default=function(){var n,t=(0,o.useState)([]),e=(0,c.Z)(t,2),u=e[0],v=e[1],h=(0,o.useState)(""),l=(0,c.Z)(h,2),d=l[0],m=l[1],x=(0,i.lr)(),w=(0,c.Z)(x,2),y=w[0],k=w[1],b=null!==(n=y.get("query"))&&void 0!==n?n:"";(0,o.useEffect)((function(){if(b){var n=function(){var n=(0,r.Z)(a().mark((function n(){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,s.oi)(b);case 2:t=n.sent,v(t);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();n()}}),[b]);return(0,p.jsxs)("div",{children:[(0,p.jsxs)("form",{onSubmit:function(n){n.preventDefault(),k({query:d})},children:[(0,p.jsx)("input",{type:"text",value:d,name:"search",onChange:function(n){m(n.target.value)}}),(0,p.jsx)("button",{type:"submit",children:"Submit"})]}),(0,p.jsx)(f.Z,{item:u})]})}},775:function(n,t,e){e.d(t,{Cm:function(){return v},TW:function(){return p},dB:function(){return i},hG:function(){return s},oi:function(){return f}});var r=e(861),c=e(757),u=e.n(c),a="https://api.themoviedb.org/3/",o="88dd01fe4db3764066bc9e293cf17684",i=function(){var n=(0,r.Z)(u().mark((function n(){var t,e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(a).concat("trending/movie/day","?api_key=").concat(o));case 2:return t=n.sent,n.next=5,t.json();case 5:return e=n.sent,n.abrupt("return",e.results);case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(u().mark((function n(t){var e,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(a,"movie/").concat(t,"?api_key=").concat(o));case 2:return e=n.sent,n.next=5,e.json();case 5:return r=n.sent,n.abrupt("return",r);case 7:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(u().mark((function n(t){var e,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(a,"search/movie?api_key=").concat(o,"&query=").concat(t));case 2:return e=n.sent,n.next=5,e.json();case 5:return r=n.sent,n.abrupt("return",r.results);case 7:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(u().mark((function n(t){var e,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(a,"movie/").concat(t,"/credits?api_key=").concat(o));case 2:return e=n.sent,n.next=5,e.json();case 5:return r=n.sent,n.abrupt("return",r.cast);case 7:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),v=function(){var n=(0,r.Z)(u().mark((function n(t){var e,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(a,"movie/").concat(t,"/reviews?api_key=").concat(o));case 2:return e=n.sent,n.next=5,e.json();case 5:return r=n.sent,n.abrupt("return",r.results);case 7:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},861:function(n,t,e){function r(n,t,e,r,c,u,a){try{var o=n[u](a),i=o.value}catch(s){return void e(s)}o.done?t(i):Promise.resolve(i).then(r,c)}function c(n){return function(){var t=this,e=arguments;return new Promise((function(c,u){var a=n.apply(t,e);function o(n){r(a,c,u,o,i,"next",n)}function i(n){r(a,c,u,o,i,"throw",n)}o(void 0)}))}}e.d(t,{Z:function(){return c}})}}]);
//# sourceMappingURL=278.0cf57c66.chunk.js.map