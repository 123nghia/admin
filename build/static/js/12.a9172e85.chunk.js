(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[12],{1017:function(e,t,n){"use strict";n.r(t);var r=n(169),a=n(113),i=n.n(a),o=n(646),c=n(165),u=n(166),l=n(168),d=n(167),s=n(2),p=n(1012),f=n(1013),b=n(685),_=n(652),h=n.n(_),m=n(641),E=n(645),O=n(643),y=n(17),j=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var r;return Object(c.a)(this,n),(r=t.call(this,e)).state={email:""},r}return Object(u.a)(n,[{key:"onSubmit",value:function(){var e=Object(o.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,h()({baseURL:m.a.BASE_URL,url:m.a.PLUGIN_FORGOT_PASS,method:"POST",data:{email:this.state.email}});case 3:200==e.sent.status&&(window.location.href="#/message");case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"onChange",value:function(e,t){this.setState(Object(r.a)({},t,e.target.value))}},{key:"render",value:function(){var e=this,t=this.state,n=(t.errors,t.isLoading);return Object(y.jsx)("div",{className:"c-app c-default-layout flex-row align-items-center",children:Object(y.jsx)(E.r,{children:Object(y.jsx)(E.Q,{className:"justify-content-center",children:Object(y.jsx)(E.p,{md:"8",children:Object(y.jsx)(E.h,{children:Object(y.jsx)(E.e,{className:"p-4",children:Object(y.jsx)(E.f,{children:Object(y.jsxs)("form",{onSubmit:function(){var t=Object(o.a)(i.a.mark((function t(n){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.onSubmit(n);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),children:[Object(y.jsx)("h1",{children:"Qu\xean m\u1eadt kh\u1ea9u"}),Object(y.jsxs)(E.J,{className:"mb-3",children:[Object(y.jsx)(E.L,{children:Object(y.jsx)(E.M,{children:Object(y.jsx)(O.a,{name:"cil-user"})})}),Object(y.jsx)(E.H,{type:"email",placeholder:"Email",name:"email",onChange:function(t){return e.onChange(t,"email")},autoComplete:"name"})]}),Object(y.jsx)(p.a,{children:Object(y.jsx)(f.a,{xs:"12",lg:"12",sm:"12",children:Object(y.jsx)(b.a,{color:"primary",className:"px-4",disabled:n,children:"\u0110\u1eb7t l\u1ea1i m\u1eadt kh\u1ea9u"})})})]})})})})})})})})}}]),n}(s.Component);t.default=j},641:function(e,t,n){"use strict";t.a={BASE_URL:"https://api.thulamua.com",GHTK_URL:"https://services.ghtklab.com",LOGIN:"/api/login",LIST_USER:"/api/list_user",ADD_USER:"/api/add_user",UPDATE_USER:"/api/update_user",DELETE_USER:"/api/delete_user",UPLOAD_AVATAR:"/api/upload_avatar",LIST_CATEGORY:"/api/list_category",ADD_CATEGORY:"/api/add_category",UPDATE_CATEGORY:"/api/update_category",DELETE_CATEGORY:"/api/delete_category",UPLOAD_CATEGORY:"/api/upload_category",LIST_BRAND:"/api/list_brand",ADD_BRAND:"/api/add_brand",UPDATE_BRAND:"/api/update_brand",DELETE_BRAND:"/api/delete_brand",UPLOAD_BRAND:"/api/upload_brand",LIST_PRODUCT:"/api/list_product",LIST_PRODUCT_CATEGORY:"/api/list_product_category",ADD_PRODUCT:"/api/add_product",UPDATE_PRODUCT:"/api/update_product",DELETE_PRODUCT:"/api/delete_product",UPLOAD_PRODUCT:"/api/upload_product",UPLOAD_PRODUCT_MULTIPLE:"/api/upload_product_multiple",LIST_ORDER:"/api/list_order",LIST_ORDER_DETAIL:"/api/list_order_detail",LIST_ORDER_BY_USER:"/api/list_order_by_user",ADD_ORDER:"/api/add_order",PRINT_ORDER:"/api/print_order",LIST_DEAL:"/api/list_deal",ADD_DEAL:"/api/add_deal",UPDATE_DEAL:"/api/update_deal",DELETE_DEAL:"/api/delete_deal",UPLOAD_DEAL:"/api/upload_deal",LIST_COUNT_ORDER:"/api/list_count_order",LIST_BANNER:"/api/get_banner",GET_BANNER_BY_ID:"/api/get_banner_by_id",ADD_BANNER:"/api/add_banners",UPADTE_BANNER:"/api/update_banner",DELETE_BANNER:"/api/delete_banner",UPLOAD_BANNER:"/api/upload_banner"}},644:function(e,t,n){"use strict";n.d(t,"m",(function(){return o})),n.d(t,"f",(function(){return c})),n.d(t,"d",(function(){return u})),n.d(t,"j",(function(){return l})),n.d(t,"k",(function(){return d})),n.d(t,"l",(function(){return s})),n.d(t,"p",(function(){return f})),n.d(t,"o",(function(){return _})),n.d(t,"n",(function(){return h})),n.d(t,"b",(function(){return m})),n.d(t,"a",(function(){return E})),n.d(t,"i",(function(){return O})),n.d(t,"c",(function(){return y})),n.d(t,"h",(function(){return v})),n.d(t,"g",(function(){return R})),n.d(t,"e",(function(){return T}));var r,a=n(64),i=n.n(a);function o(e){document.body.style.paddingRight=e>0?e+"px":null}function c(){var e=window.getComputedStyle(document.body,null);return parseInt(e&&e.getPropertyValue("padding-right")||0,10)}function u(){var e=function(){var e=document.createElement("div");e.style.position="absolute",e.style.top="-9999px",e.style.width="50px",e.style.height="50px",e.style.overflow="scroll",document.body.appendChild(e);var t=e.offsetWidth-e.clientWidth;return document.body.removeChild(e),t}(),t=document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top")[0],n=t?parseInt(t.style.paddingRight||0,10):0;document.body.clientWidth<window.innerWidth&&o(n+e)}function l(e,t){return void 0===e&&(e=""),void 0===t&&(t=r),t?e.split(" ").map((function(e){return t[e]||e})).join(" "):e}function d(e,t){var n={};return Object.keys(e).forEach((function(r){-1===t.indexOf(r)&&(n[r]=e[r])})),n}function s(e,t){for(var n,r=Array.isArray(t)?t:[t],a=r.length,i={};a>0;)i[n=r[a-=1]]=e[n];return i}var p={};function f(e){p[e]||("undefined"!==typeof console&&console.error(e),p[e]=!0)}var b="object"===typeof window&&window.Element||function(){};var _=i.a.oneOfType([i.a.string,i.a.func,function(e,t,n){if(!(e[t]instanceof b))return new Error("Invalid prop `"+t+"` supplied to `"+n+"`. Expected prop to be an instance of Element. Validation failed.")},i.a.shape({current:i.a.any})]),h=i.a.oneOfType([i.a.func,i.a.string,i.a.shape({$$typeof:i.a.symbol,render:i.a.func}),i.a.arrayOf(i.a.oneOfType([i.a.func,i.a.string,i.a.shape({$$typeof:i.a.symbol,render:i.a.func})]))]),m={Fade:150,Collapse:350,Modal:300,Carousel:600},E=["in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","onEnter","onEntering","onEntered","onExit","onExiting","onExited"],O={esc:27,space:32,enter:13,tab:9,up:38,down:40,home:36,end:35,n:78,p:80},y=!("undefined"===typeof window||!window.document||!window.document.createElement);function j(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Object.prototype.toString.call(e)}function v(e){var t=typeof e;return null!=e&&("object"===t||"function"===t)}function D(e){if(function(e){return!(!e||"object"!==typeof e)&&"current"in e}(e))return e.current;if(function(e){if(!v(e))return!1;var t=j(e);return"[object Function]"===t||"[object AsyncFunction]"===t||"[object GeneratorFunction]"===t||"[object Proxy]"===t}(e))return e();if("string"===typeof e&&y){var t=document.querySelectorAll(e);if(t.length||(t=document.querySelectorAll("#"+e)),!t.length)throw new Error("The target '"+e+"' could not be identified in the dom, tip: check spelling");return t}return e}function A(e){return null!==e&&(Array.isArray(e)||y&&"number"===typeof e.length)}function R(e,t){var n=D(e);return t?A(n)?n:null===n?[]:[n]:A(n)?n[0]:n}var T=["a[href]","area[href]","input:not([disabled]):not([type=hidden])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","object","embed","[tabindex]:not(.modal)","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])']},646:function(e,t,n){"use strict";function r(e,t,n,r,a,i,o){try{var c=e[i](o),u=c.value}catch(l){return void n(l)}c.done?t(u):Promise.resolve(u).then(r,a)}function a(e){return function(){var t=this,n=arguments;return new Promise((function(a,i){var o=e.apply(t,n);function c(e){r(o,a,i,c,u,"next",e)}function u(e){r(o,a,i,c,u,"throw",e)}c(void 0)}))}}n.d(t,"a",(function(){return a}))},648:function(e,t,n){"use strict";function r(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,"a",(function(){return r}))},685:function(e,t,n){"use strict";var r=n(12),a=n(29),i=n(648),o=n(35),c=n(2),u=n.n(c),l=n(64),d=n.n(l),s=n(642),p=n.n(s),f=n(644),b={active:d.a.bool,"aria-label":d.a.string,block:d.a.bool,color:d.a.string,disabled:d.a.bool,outline:d.a.bool,tag:f.n,innerRef:d.a.oneOfType([d.a.object,d.a.func,d.a.string]),onClick:d.a.func,size:d.a.string,children:d.a.node,className:d.a.string,cssModule:d.a.object,close:d.a.bool},_=function(e){function t(t){var n;return(n=e.call(this,t)||this).onClick=n.onClick.bind(Object(i.a)(n)),n}Object(o.a)(t,e);var n=t.prototype;return n.onClick=function(e){if(!this.props.disabled)return this.props.onClick?this.props.onClick(e):void 0;e.preventDefault()},n.render=function(){var e=this.props,t=e.active,n=e["aria-label"],i=e.block,o=e.className,c=e.close,l=e.cssModule,d=e.color,s=e.outline,b=e.size,_=e.tag,h=e.innerRef,m=Object(a.a)(e,["active","aria-label","block","className","close","cssModule","color","outline","size","tag","innerRef"]);c&&"undefined"===typeof m.children&&(m.children=u.a.createElement("span",{"aria-hidden":!0},"\xd7"));var E="btn"+(s?"-outline":"")+"-"+d,O=Object(f.j)(p()(o,{close:c},c||"btn",c||E,!!b&&"btn-"+b,!!i&&"btn-block",{active:t,disabled:this.props.disabled}),l);m.href&&"button"===_&&(_="a");var y=c?"Close":null;return u.a.createElement(_,Object(r.a)({type:"button"===_&&m.onClick?"button":void 0},m,{className:O,ref:h,onClick:this.onClick,"aria-label":n||y}))},t}(u.a.Component);_.propTypes=b,_.defaultProps={color:"secondary",tag:"button"},t.a=_}}]);
//# sourceMappingURL=12.a9172e85.chunk.js.map