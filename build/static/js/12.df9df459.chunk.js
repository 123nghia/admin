(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[12],{1020:function(e,t,n){"use strict";n.r(t);var a=n(169),r=n(113),i=n.n(r),o=n(645),c=n(165),u=n(166),l=n(168),d=n(167),s=n(2),p=n(1015),_=n(1016),f=n(687),b=n(652),E=n.n(b),h=n(640),m=n(646),O=n(643),D=n(17),y=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).state={email:""},a}return Object(u.a)(n,[{key:"onSubmit",value:function(){var e=Object(o.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,E()({baseURL:h.a.BASE_URL,url:h.a.PLUGIN_FORGOT_PASS,method:"POST",data:{email:this.state.email}});case 3:200==e.sent.status&&(window.location.href="#/message");case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"onChange",value:function(e,t){this.setState(Object(a.a)({},t,e.target.value))}},{key:"render",value:function(){var e=this,t=this.state,n=(t.errors,t.isLoading);return Object(D.jsx)("div",{className:"c-app c-default-layout flex-row align-items-center",children:Object(D.jsx)(m.r,{children:Object(D.jsx)(m.Q,{className:"justify-content-center",children:Object(D.jsx)(m.p,{md:"8",children:Object(D.jsx)(m.h,{children:Object(D.jsx)(m.e,{className:"p-4",children:Object(D.jsx)(m.f,{children:Object(D.jsxs)("form",{onSubmit:function(){var t=Object(o.a)(i.a.mark((function t(n){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.onSubmit(n);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),children:[Object(D.jsx)("h1",{children:"Qu\xean m\u1eadt kh\u1ea9u"}),Object(D.jsxs)(m.J,{className:"mb-3",children:[Object(D.jsx)(m.L,{children:Object(D.jsx)(m.M,{children:Object(D.jsx)(O.a,{name:"cil-user"})})}),Object(D.jsx)(m.H,{type:"email",placeholder:"Email",name:"email",onChange:function(t){return e.onChange(t,"email")},autoComplete:"name"})]}),Object(D.jsx)(p.a,{children:Object(D.jsx)(_.a,{xs:"12",lg:"12",sm:"12",children:Object(D.jsx)(f.a,{color:"primary",className:"px-4",disabled:n,children:"\u0110\u1eb7t l\u1ea1i m\u1eadt kh\u1ea9u"})})})]})})})})})})})})}}]),n}(s.Component);t.default=y},640:function(e,t,n){"use strict";t.a={BASE_URL:"https://api.thulamua.com",GHTK_URL:"https://services.ghtklab.com",LOGIN:"/api/login",LIST_USER:"/api/list_user",ADD_USER:"/api/add_user",UPDATE_USER:"/api/update_user",DELETE_USER:"/api/delete_user",UPLOAD_AVATAR:"/api/upload_avatar",LIST_CATEGORY:"/api/list_category",ADD_CATEGORY:"/api/add_category",UPDATE_CATEGORY:"/api/update_category",DELETE_CATEGORY:"/api/delete_category",UPLOAD_CATEGORY:"/api/upload_category",LIST_BRAND:"/api/list_brand",ADD_BRAND:"/api/add_brand",UPDATE_BRAND:"/api/update_brand",DELETE_BRAND:"/api/delete_brand",UPLOAD_BRAND:"/api/upload_brand",LIST_PRODUCT:"/api/list_product",LIST_PRODUCT_CATEGORY:"/api/list_product_category",ADD_PRODUCT:"/api/add_product",UPDATE_PRODUCT:"/api/update_product",DELETE_PRODUCT:"/api/delete_product",UPLOAD_PRODUCT:"/api/upload_product",UPLOAD_PRODUCT_MULTIPLE:"/api/upload_product_multiple",LIST_ORDER:"/api/list_order",GET_DETAIL_TRANSPORT:"/api/get_detail_transport",LIST_ORDER_DETAIL:"/api/list_order_detail",LIST_ORDER_BY_USER:"/api/list_order_by_user",ADD_ORDER:"/api/add_order",PRINT_ORDER:"/api/print_order",LIST_DEAL:"/api/list_deal",ADD_DEAL:"/api/add_deal",UPDATE_DEAL:"/api/update_deal",DELETE_DEAL:"/api/delete_deal",UPLOAD_DEAL:"/api/upload_deal",LIST_COUNT_ORDER:"/api/list_count_order",LIST_BANNER:"/api/get_banner",GET_BANNER_BY_ID:"/api/get_banner_by_id",ADD_BANNER:"/api/add_banners",UPADTE_BANNER:"/api/update_banner",DELETE_BANNER:"/api/delete_banner",UPLOAD_BANNER:"/api/upload_banner",LIST_SEO_INFO:"/api/get_seo_info",GET_SEO_INFO_BY_PRODUCT:"/api/get_seo_info_by_product",ADD_SEO_INFO:"/api/add_seo_info",UPDATE_SEO_INFO:"/api/update_seo_info",DELETE_SEO_INFOR:"/api/delete_seo_info",UPLOAD_SEO_INFO:"/api/upload_seo_info",LIST_MULTI_IMAGE:"/api/get_multi_image",LIST_IMAGE_BY_PRODUCT:"/api/get_multi_image_by_product",ADD_MULTI_IMAGE:"/api/add_multi_image",UPDATE_MULTI_IMAGE:"/api/update_multi_image",UPLOAD_MULTI_IMAGE:"/api/upload_multi_image"}},644:function(e,t,n){"use strict";n.d(t,"m",(function(){return o})),n.d(t,"f",(function(){return c})),n.d(t,"d",(function(){return u})),n.d(t,"j",(function(){return l})),n.d(t,"k",(function(){return d})),n.d(t,"l",(function(){return s})),n.d(t,"p",(function(){return _})),n.d(t,"o",(function(){return b})),n.d(t,"n",(function(){return E})),n.d(t,"b",(function(){return h})),n.d(t,"a",(function(){return m})),n.d(t,"i",(function(){return O})),n.d(t,"c",(function(){return D})),n.d(t,"h",(function(){return A})),n.d(t,"g",(function(){return g})),n.d(t,"e",(function(){return v}));var a,r=n(64),i=n.n(r);function o(e){document.body.style.paddingRight=e>0?e+"px":null}function c(){var e=window.getComputedStyle(document.body,null);return parseInt(e&&e.getPropertyValue("padding-right")||0,10)}function u(){var e=function(){var e=document.createElement("div");e.style.position="absolute",e.style.top="-9999px",e.style.width="50px",e.style.height="50px",e.style.overflow="scroll",document.body.appendChild(e);var t=e.offsetWidth-e.clientWidth;return document.body.removeChild(e),t}(),t=document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top")[0],n=t?parseInt(t.style.paddingRight||0,10):0;document.body.clientWidth<window.innerWidth&&o(n+e)}function l(e,t){return void 0===e&&(e=""),void 0===t&&(t=a),t?e.split(" ").map((function(e){return t[e]||e})).join(" "):e}function d(e,t){var n={};return Object.keys(e).forEach((function(a){-1===t.indexOf(a)&&(n[a]=e[a])})),n}function s(e,t){for(var n,a=Array.isArray(t)?t:[t],r=a.length,i={};r>0;)i[n=a[r-=1]]=e[n];return i}var p={};function _(e){p[e]||("undefined"!==typeof console&&console.error(e),p[e]=!0)}var f="object"===typeof window&&window.Element||function(){};var b=i.a.oneOfType([i.a.string,i.a.func,function(e,t,n){if(!(e[t]instanceof f))return new Error("Invalid prop `"+t+"` supplied to `"+n+"`. Expected prop to be an instance of Element. Validation failed.")},i.a.shape({current:i.a.any})]),E=i.a.oneOfType([i.a.func,i.a.string,i.a.shape({$$typeof:i.a.symbol,render:i.a.func}),i.a.arrayOf(i.a.oneOfType([i.a.func,i.a.string,i.a.shape({$$typeof:i.a.symbol,render:i.a.func})]))]),h={Fade:150,Collapse:350,Modal:300,Carousel:600},m=["in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","onEnter","onEntering","onEntered","onExit","onExiting","onExited"],O={esc:27,space:32,enter:13,tab:9,up:38,down:40,home:36,end:35,n:78,p:80},D=!("undefined"===typeof window||!window.document||!window.document.createElement);function y(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Object.prototype.toString.call(e)}function A(e){var t=typeof e;return null!=e&&("object"===t||"function"===t)}function T(e){if(function(e){return!(!e||"object"!==typeof e)&&"current"in e}(e))return e.current;if(function(e){if(!A(e))return!1;var t=y(e);return"[object Function]"===t||"[object AsyncFunction]"===t||"[object GeneratorFunction]"===t||"[object Proxy]"===t}(e))return e();if("string"===typeof e&&D){var t=document.querySelectorAll(e);if(t.length||(t=document.querySelectorAll("#"+e)),!t.length)throw new Error("The target '"+e+"' could not be identified in the dom, tip: check spelling");return t}return e}function j(e){return null!==e&&(Array.isArray(e)||D&&"number"===typeof e.length)}function g(e,t){var n=T(e);return t?j(n)?n:null===n?[]:[n]:j(n)?n[0]:n}var v=["a[href]","area[href]","input:not([disabled]):not([type=hidden])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","object","embed","[tabindex]:not(.modal)","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])']},645:function(e,t,n){"use strict";function a(e,t,n,a,r,i,o){try{var c=e[i](o),u=c.value}catch(l){return void n(l)}c.done?t(u):Promise.resolve(u).then(a,r)}function r(e){return function(){var t=this,n=arguments;return new Promise((function(r,i){var o=e.apply(t,n);function c(e){a(o,r,i,c,u,"next",e)}function u(e){a(o,r,i,c,u,"throw",e)}c(void 0)}))}}n.d(t,"a",(function(){return r}))},649:function(e,t,n){"use strict";function a(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,"a",(function(){return a}))},687:function(e,t,n){"use strict";var a=n(12),r=n(29),i=n(649),o=n(35),c=n(2),u=n.n(c),l=n(64),d=n.n(l),s=n(642),p=n.n(s),_=n(644),f={active:d.a.bool,"aria-label":d.a.string,block:d.a.bool,color:d.a.string,disabled:d.a.bool,outline:d.a.bool,tag:_.n,innerRef:d.a.oneOfType([d.a.object,d.a.func,d.a.string]),onClick:d.a.func,size:d.a.string,children:d.a.node,className:d.a.string,cssModule:d.a.object,close:d.a.bool},b=function(e){function t(t){var n;return(n=e.call(this,t)||this).onClick=n.onClick.bind(Object(i.a)(n)),n}Object(o.a)(t,e);var n=t.prototype;return n.onClick=function(e){if(!this.props.disabled)return this.props.onClick?this.props.onClick(e):void 0;e.preventDefault()},n.render=function(){var e=this.props,t=e.active,n=e["aria-label"],i=e.block,o=e.className,c=e.close,l=e.cssModule,d=e.color,s=e.outline,f=e.size,b=e.tag,E=e.innerRef,h=Object(r.a)(e,["active","aria-label","block","className","close","cssModule","color","outline","size","tag","innerRef"]);c&&"undefined"===typeof h.children&&(h.children=u.a.createElement("span",{"aria-hidden":!0},"\xd7"));var m="btn"+(s?"-outline":"")+"-"+d,O=Object(_.j)(p()(o,{close:c},c||"btn",c||m,!!f&&"btn-"+f,!!i&&"btn-block",{active:t,disabled:this.props.disabled}),l);h.href&&"button"===b&&(b="a");var D=c?"Close":null;return u.a.createElement(b,Object(a.a)({type:"button"===b&&h.onClick?"button":void 0},h,{className:O,ref:E,onClick:this.onClick,"aria-label":n||D}))},t}(u.a.Component);b.propTypes=f,b.defaultProps={color:"secondary",tag:"button"},t.a=b}}]);
//# sourceMappingURL=12.df9df459.chunk.js.map