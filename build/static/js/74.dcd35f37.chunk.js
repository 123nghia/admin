(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[74],{1328:function(e,t,l){"use strict";var r=l(12),a=l(29),n=l(2),o=l.n(n),s=l(64),c=l.n(s),i=l(644),u=l.n(i),d=l(645),f={children:c.a.node,row:c.a.bool,check:c.a.bool,inline:c.a.bool,disabled:c.a.bool,tag:d.n,className:c.a.string,cssModule:c.a.object},h=function(e){var t=e.className,l=e.cssModule,n=e.row,s=e.disabled,c=e.check,i=e.inline,f=e.tag,h=Object(a.a)(e,["className","cssModule","row","disabled","check","inline","tag"]),m=Object(d.j)(u()(t,!!n&&"row",c?"form-check":"form-group",!(!c||!i)&&"form-check-inline",!(!c||!s)&&"disabled"),l);return"fieldset"===f&&(h.disabled=s),o.a.createElement(f,Object(r.a)({},h,{className:m}))};h.propTypes=f,h.defaultProps={tag:"div"},t.a=h},741:function(e,t,l){"use strict";var r=l(2),a=l.n(r),n=l(91),o=l.n(n),s=function(){return(s=Object.assign||function(e){for(var t,l=1,r=arguments.length;l<r;l++)for(var a in t=arguments[l])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)};t.a=function(e){for(var t=e.url,l=e.allowFullScreen,r=e.position,n=e.display,c=e.height,i=e.width,u=e.overflow,d=e.styles,f=e.onLoad,h=e.onMouseOver,m=e.onMouseOut,p=e.scrolling,b=e.id,v=e.frameBorder,y=e.ariaHidden,g=e.sandbox,w=e.allow,O=e.className,j=e.title,k=e.ariaLabel,N=e.ariaLabelledby,z=e.name,x=e.target,M=e.loading,E=e.importance,P=e.referrerpolicy,C=e.allowpaymentrequest,H=e.src,L=o()({src:H||t,target:x||null,style:{position:r||null,display:n||"block",overflow:u||null},scrolling:p||null,allowpaymentrequest:C||null,importance:E||null,sandbox:g||null,loading:M||null,styles:d||null,name:z||null,className:O||null,referrerpolicy:P||null,title:j||null,allow:w||null,id:b||null,"aria-labelledby":N||null,"aria-hidden":y||null,"aria-label":k||null,width:i||null,height:c||null,onLoad:f||null,onMouseOver:h||null,onMouseOut:m||null}),T=Object.create(null),S=0,q=Object.keys(L);S<q.length;S++){var B=q[S];null!=L[B]&&(T[B]=L[B])}for(var F=0,J=Object.keys(T.style);F<J.length;F++){var V=J[F];null==T.style[V]&&delete T.style[V]}if(l)if("allow"in T){var I=T.allow.replace("fullscreen","");T.allow=("fullscreen "+I.trim()).trim()}else T.allow="fullscreen";return v>=0&&(T.style.hasOwnProperty("border")||(T.style.border=v)),a.a.createElement("iframe",s({},T))}},777:function(e,t,l){"use strict";l.d(t,"a",(function(){return u}));var r=l(2),a=l.n(r),n={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},o=a.a.createContext&&a.a.createContext(n),s=function(){return(s=Object.assign||function(e){for(var t,l=1,r=arguments.length;l<r;l++)for(var a in t=arguments[l])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},c=function(e,t){var l={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(l[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(l[r[a]]=e[r[a]])}return l};function i(e){return e&&e.map((function(e,t){return a.a.createElement(e.tag,s({key:t},e.attr),i(e.child))}))}function u(e){return function(t){return a.a.createElement(d,s({attr:s({},e.attr)},t),i(e.child))}}function d(e){var t=function(t){var l,r=e.attr,n=e.size,o=e.title,i=c(e,["attr","size","title"]),u=n||t.size||"1em";return t.className&&(l=t.className),e.className&&(l=(l?l+" ":"")+e.className),a.a.createElement("svg",s({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,r,i,{className:l,style:s(s({color:e.color||t.color},t.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),o&&a.a.createElement("title",null,o),e.children)};return void 0!==o?a.a.createElement(o.Consumer,null,(function(e){return t(e)})):t(n)}},824:function(e,t,l){"use strict";l.d(t,"a",(function(){return a}));var r=l(777);function a(e){return Object(r.a)({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M20 3H4c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2h7v3H8v2h8v-2h-3v-3h7c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zM4 15V5h16l.001 10H4z"}},{tag:"path",attr:{d:"m10 13 5-3-5-3z"}}]})(e)}},869:function(e,t,l){"use strict";var r=l(12),a=l(29),n=l(2),o=l.n(n),s=l(64),c=l.n(s),i=l(644),u=l.n(i),d=l(645),f=c.a.oneOfType([c.a.number,c.a.string]),h=c.a.oneOfType([c.a.bool,c.a.string,c.a.number,c.a.shape({size:f,order:f,offset:f})]),m={children:c.a.node,hidden:c.a.bool,check:c.a.bool,size:c.a.string,for:c.a.string,tag:d.n,className:c.a.string,cssModule:c.a.object,xs:h,sm:h,md:h,lg:h,xl:h,widths:c.a.array},p={tag:"label",widths:["xs","sm","md","lg","xl"]},b=function(e,t,l){return!0===l||""===l?e?"col":"col-"+t:"auto"===l?e?"col-auto":"col-"+t+"-auto":e?"col-"+l:"col-"+t+"-"+l},v=function(e){var t=e.className,l=e.cssModule,n=e.hidden,s=e.widths,c=e.tag,i=e.check,f=e.size,h=e.for,m=Object(a.a)(e,["className","cssModule","hidden","widths","tag","check","size","for"]),p=[];s.forEach((function(t,r){var a=e[t];if(delete m[t],a||""===a){var n,o=!r;if(Object(d.h)(a)){var s,c=o?"-":"-"+t+"-";n=b(o,t,a.size),p.push(Object(d.j)(u()(((s={})[n]=a.size||""===a.size,s["order"+c+a.order]=a.order||0===a.order,s["offset"+c+a.offset]=a.offset||0===a.offset,s))),l)}else n=b(o,t,a),p.push(n)}}));var v=Object(d.j)(u()(t,!!n&&"sr-only",!!i&&"form-check-label",!!f&&"col-form-label-"+f,p,!!p.length&&"col-form-label"),l);return o.a.createElement(c,Object(r.a)({htmlFor:h},m,{className:v}))};v.propTypes=m,v.defaultProps=p,t.a=v}}]);
//# sourceMappingURL=74.dcd35f37.chunk.js.map