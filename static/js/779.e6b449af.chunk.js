"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[779],{779:function(n,t,e){e.r(t),e.d(t,{default:function(){return b}});var c,o,r,i,a,u=e(885),s=e(791),f=e(871),h=e(666),l=e(168),d=e(31),g=d.ZP.li(c||(c=(0,l.Z)(["\n  border-bottom: 1px solid black;\n  padding: 5px;\n  background: #fff;\n\n  &:not(:last-child) {\n    margin-bottom: 10px;\n  }\n"]))),p=d.ZP.ul(o||(o=(0,l.Z)(["\n  margin-bottom: 20px;\n"]))),m=d.ZP.li(r||(r=(0,l.Z)(["\n  &:not(:last-child) {\n    margin-bottom: 5px;\n  }\n"]))),v=d.ZP.span(i||(i=(0,l.Z)(["\n  font-weight: 700;\n"]))),x=d.ZP.span(a||(a=(0,l.Z)(["\n  font-weight: 500;\n"]))),j=e(184);function b(){var n=(0,s.useState)([]),t=(0,u.Z)(n,2),e=t[0],c=t[1],o=(0,f.UO)();return(0,s.useEffect)((function(){(0,h.tx)(o.movieId).then((function(n){var t=n.results;c(t)}))}),[o.movieId]),0===e.length?(0,j.jsx)("div",{children:"No reviews for this movie found"}):(0,j.jsx)("ul",{children:e.map((function(n){var t=n.author,e=n.content,c=n.created_at,o=n.id,r=c.substr(0,10),i=c.substr(11,5);return(0,j.jsxs)(g,{children:[(0,j.jsxs)(p,{children:[(0,j.jsx)(m,{children:(0,j.jsx)(v,{children:t})}),(0,j.jsxs)(m,{children:["Date: ",(0,j.jsx)(x,{children:r})]}),(0,j.jsxs)(m,{children:["Time: ",(0,j.jsx)(x,{children:i})]})]}),(0,j.jsx)("div",{children:(0,j.jsx)("p",{children:e})})]},o)}))})}},666:function(n,t,e){e.d(t,{M1:function(){return a},Pg:function(){return i},_L:function(){return r},bm:function(){return s},tx:function(){return u}});var c="4372ebc6ffafe48c40762bc303bcc44d",o="https://api.themoviedb.org/3/";function r(){return fetch("".concat(o,"movie/popular?api_key=").concat(c,"&language=en-US&page=1")).then((function(n){return n.json()}))}function i(n){return fetch("".concat(o,"movie/").concat(n,"?api_key=").concat(c,"&language=en-US")).then((function(n){return n.json()}))}function a(n){return fetch("".concat(o,"movie/").concat(n,"/credits?api_key=").concat(c,"&language=en-US")).then((function(n){return n.json()}))}function u(n){return fetch("".concat(o,"movie/").concat(n,"/reviews?api_key=").concat(c,"&language=en-US&page=1")).then((function(n){return n.json()}))}function s(n){return fetch("".concat(o,"search/movie?api_key=").concat(c,"&language=en-US&page=1&query=").concat(n)).then((function(n){return n.json()}))}}}]);
//# sourceMappingURL=779.e6b449af.chunk.js.map