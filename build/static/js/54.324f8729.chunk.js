(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[54,55,60,61,63],{674:function(e,a,t){"use strict";var s=t(12),n=t(29),o=t(2),r=t.n(o),i=t(64),c=t.n(i),l=t(644),u=t.n(l),d=t(645),b=c.a.oneOfType([c.a.number,c.a.string]),f={tag:d.n,noGutters:c.a.bool,className:c.a.string,cssModule:c.a.object,form:c.a.bool,xs:b,sm:b,md:b,lg:b,xl:b},p={tag:"div",widths:["xs","sm","md","lg","xl"]},g=function(e){var a=e.className,t=e.cssModule,o=e.noGutters,i=e.tag,c=e.form,l=e.widths,b=Object(n.a)(e,["className","cssModule","noGutters","tag","form","widths"]),f=[];l.forEach((function(a,t){var s=e[a];if(delete b[a],s){var n=!t;f.push(n?"row-cols-"+s:"row-cols-"+a+"-"+s)}}));var p=Object(d.j)(u()(a,o?"no-gutters":null,c?"form-row":"row",f),t);return r.a.createElement(i,Object(s.a)({},b,{className:p}))};g.propTypes=f,g.defaultProps=p,a.a=g},675:function(e,a,t){"use strict";var s=t(12),n=t(29),o=t(2),r=t.n(o),i=t(64),c=t.n(i),l=t(644),u=t.n(l),d=t(645),b=c.a.oneOfType([c.a.number,c.a.string]),f=c.a.oneOfType([c.a.bool,c.a.number,c.a.string,c.a.shape({size:c.a.oneOfType([c.a.bool,c.a.number,c.a.string]),order:b,offset:b})]),p={tag:d.n,xs:f,sm:f,md:f,lg:f,xl:f,className:c.a.string,cssModule:c.a.object,widths:c.a.array},g={tag:"div",widths:["xs","sm","md","lg","xl"]},v=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},m=function(e){var a=e.className,t=e.cssModule,o=e.widths,i=e.tag,c=Object(n.a)(e,["className","cssModule","widths","tag"]),l=[];o.forEach((function(a,s){var n=e[a];if(delete c[a],n||""===n){var o=!s;if(Object(d.h)(n)){var r,i=o?"-":"-"+a+"-",b=v(o,a,n.size);l.push(Object(d.j)(u()(((r={})[b]=n.size||""===n.size,r["order"+i+n.order]=n.order||0===n.order,r["offset"+i+n.offset]=n.offset||0===n.offset,r)),t))}else{var f=v(o,a,n);l.push(f)}}})),l.length||l.push("col");var b=Object(d.j)(u()(a,l),t);return r.a.createElement(i,Object(s.a)({},c,{className:b}))};m.propTypes=p,m.defaultProps=g,a.a=m},676:function(e,a,t){"use strict";var s=t(12),n=t(29),o=t(2),r=t.n(o),i=t(64),c=t.n(i),l=t(644),u=t.n(l),d=t(645),b={tag:d.n,className:c.a.string,cssModule:c.a.object,innerRef:c.a.oneOfType([c.a.object,c.a.string,c.a.func])},f=function(e){var a=e.className,t=e.cssModule,o=e.innerRef,i=e.tag,c=Object(n.a)(e,["className","cssModule","innerRef","tag"]),l=Object(d.j)(u()(a,"card-body"),t);return r.a.createElement(i,Object(s.a)({},c,{className:l,ref:o}))};f.propTypes=b,f.defaultProps={tag:"div"},a.a=f},678:function(e,a,t){"use strict";var s=t(12),n=t(29),o=t(651),r=t(35),i=t(2),c=t.n(i),l=t(64),u=t.n(l),d=t(644),b=t.n(d),f=t(645),p={children:u.a.node,type:u.a.string,size:u.a.oneOfType([u.a.number,u.a.string]),bsSize:u.a.string,valid:u.a.bool,invalid:u.a.bool,tag:f.n,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),plaintext:u.a.bool,addon:u.a.bool,className:u.a.string,cssModule:u.a.object},g=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(o.a)(t)),t.focus=t.focus.bind(Object(o.a)(t)),t}Object(r.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.focus=function(){this.ref&&this.ref.focus()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,o=e.type,r=e.bsSize,i=e.valid,l=e.invalid,u=e.tag,d=e.addon,p=e.plaintext,g=e.innerRef,v=Object(n.a)(e,["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"]),m=["radio","checkbox"].indexOf(o)>-1,j=new RegExp("\\D","g"),h=u||("select"===o||"textarea"===o?o:"input"),O="form-control";p?(O+="-plaintext",h=u||"input"):"file"===o?O+="-file":"range"===o?O+="-range":m&&(O=d?null:"form-check-input"),v.size&&j.test(v.size)&&(Object(f.p)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),r=v.size,delete v.size);var y=Object(f.j)(b()(a,l&&"is-invalid",i&&"is-valid",!!r&&"form-control-"+r,O),t);return("input"===h||u&&"function"===typeof u)&&(v.type=o),v.children&&!p&&"select"!==o&&"string"===typeof h&&"select"!==h&&(Object(f.p)('Input with a type of "'+o+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete v.children),c.a.createElement(h,Object(s.a)({},v,{ref:g,className:y,"aria-invalid":l}))},a}(c.a.Component);g.propTypes=p,g.defaultProps={type:"text"},a.a=g},694:function(e,a,t){},700:function(e,a,t){"use strict";var s=t(12),n=t(29),o=t(651),r=t(35),i=t(2),c=t.n(i),l=t(64),u=t.n(l),d=t(644),b=t.n(d),f=t(645),p={active:u.a.bool,"aria-label":u.a.string,block:u.a.bool,color:u.a.string,disabled:u.a.bool,outline:u.a.bool,tag:f.n,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),onClick:u.a.func,size:u.a.string,children:u.a.node,className:u.a.string,cssModule:u.a.object,close:u.a.bool},g=function(e){function a(a){var t;return(t=e.call(this,a)||this).onClick=t.onClick.bind(Object(o.a)(t)),t}Object(r.a)(a,e);var t=a.prototype;return t.onClick=function(e){if(!this.props.disabled)return this.props.onClick?this.props.onClick(e):void 0;e.preventDefault()},t.render=function(){var e=this.props,a=e.active,t=e["aria-label"],o=e.block,r=e.className,i=e.close,l=e.cssModule,u=e.color,d=e.outline,p=e.size,g=e.tag,v=e.innerRef,m=Object(n.a)(e,["active","aria-label","block","className","close","cssModule","color","outline","size","tag","innerRef"]);i&&"undefined"===typeof m.children&&(m.children=c.a.createElement("span",{"aria-hidden":!0},"\xd7"));var j="btn"+(d?"-outline":"")+"-"+u,h=Object(f.j)(b()(r,{close:i},i||"btn",i||j,!!p&&"btn-"+p,!!o&&"btn-block",{active:a,disabled:this.props.disabled}),l);m.href&&"button"===g&&(g="a");var O=i?"Close":null;return c.a.createElement(g,Object(s.a)({type:"button"===g&&m.onClick?"button":void 0},m,{className:h,ref:v,onClick:this.onClick,"aria-label":t||O}))},a}(c.a.Component);g.propTypes=p,g.defaultProps={color:"secondary",tag:"button"},a.a=g},703:function(e,a,t){"use strict";var s=t(12),n=t(29),o=t(2),r=t.n(o),i=t(64),c=t.n(i),l=t(644),u=t.n(l),d=t(645),b={tag:d.n,inverse:c.a.bool,color:c.a.string,body:c.a.bool,outline:c.a.bool,className:c.a.string,cssModule:c.a.object,innerRef:c.a.oneOfType([c.a.object,c.a.string,c.a.func])},f=function(e){var a=e.className,t=e.cssModule,o=e.color,i=e.body,c=e.inverse,l=e.outline,b=e.tag,f=e.innerRef,p=Object(n.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),g=Object(d.j)(u()(a,"card",!!c&&"text-white",!!i&&"card-body",!!o&&(l?"border":"bg")+"-"+o),t);return r.a.createElement(b,Object(s.a)({},p,{className:g,ref:f}))};f.propTypes=b,f.defaultProps={tag:"div"},a.a=f},704:function(e,a,t){"use strict";var s=t(12),n=t(29),o=t(2),r=t.n(o),i=t(64),c=t.n(i),l=t(644),u=t.n(l),d=t(645),b={tag:d.n,className:c.a.string,cssModule:c.a.object},f=function(e){var a=e.className,t=e.cssModule,o=e.tag,i=Object(n.a)(e,["className","cssModule","tag"]),c=Object(d.j)(u()(a,"card-header"),t);return r.a.createElement(o,Object(s.a)({},i,{className:c}))};f.propTypes=b,f.defaultProps={tag:"div"},a.a=f},791:function(e,a,t){"use strict";var s=t(12),n=t(29),o=t(2),r=t.n(o),i=t(64),c=t.n(i),l=t(644),u=t.n(l),d=t(645),b={className:c.a.string,cssModule:c.a.object,size:c.a.string,bordered:c.a.bool,borderless:c.a.bool,striped:c.a.bool,dark:c.a.bool,hover:c.a.bool,responsive:c.a.oneOfType([c.a.bool,c.a.string]),tag:d.n,responsiveTag:d.n,innerRef:c.a.oneOfType([c.a.func,c.a.string,c.a.object])},f=function(e){var a=e.className,t=e.cssModule,o=e.size,i=e.bordered,c=e.borderless,l=e.striped,b=e.dark,f=e.hover,p=e.responsive,g=e.tag,v=e.responsiveTag,m=e.innerRef,j=Object(n.a)(e,["className","cssModule","size","bordered","borderless","striped","dark","hover","responsive","tag","responsiveTag","innerRef"]),h=Object(d.j)(u()(a,"table",!!o&&"table-"+o,!!i&&"table-bordered",!!c&&"table-borderless",!!l&&"table-striped",!!b&&"table-dark",!!f&&"table-hover"),t),O=r.a.createElement(g,Object(s.a)({},j,{ref:m,className:h}));if(p){var y=Object(d.j)(!0===p?"table-responsive":"table-responsive-"+p,t);return r.a.createElement(v,{className:y},O)}return O};f.propTypes=b,f.defaultProps={tag:"table",responsiveTag:"div"},a.a=f}}]);
//# sourceMappingURL=54.324f8729.chunk.js.map