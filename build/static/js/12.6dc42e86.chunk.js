(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[12],{1022:function(e,t,n){"use strict";n.r(t);var a=n(168),r=n(113),i=n.n(r),o=n(643),d=n(164),c=n(165),u=n(167),s=n(166),p=n(2),l=n(1016),_=n(1017),A=n(690),E=n(649),T=n.n(E),f=n(640),b=(n(671),n(645)),D=n(644),O=n(17),h=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).state={password:"",password_cf:""},a}return Object(c.a)(n,[{key:"componentDidMount",value:function(){var e=Object(o.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T()({baseURL:f.a.BASE_URL,url:f.a.PLUGIN_CHECK_LINK,method:"POST",data:{code:window.location.hash.split("/")[2]}});case 2:200!=e.sent.data.status&&(window.location.href="#/login");case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"onSubmit",value:function(){var e=Object(o.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),this.state.password!=this.state.password_cf){e.next=8;break}return e.next=4,T()({baseURL:f.a.BASE_URL,url:f.a.PLUGIN_CHANGE_PASSWORD,method:"POST",data:{code:window.location.hash.split("/")[2],password:this.state.password}});case 4:200==e.sent.status&&(window.location.href="#/login"),e.next=9;break;case 8:alert("M\u1eadt kh\u1ea9u kh\xf4ng kh\u1edbp");case 9:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"onChange",value:function(e,t){this.setState(Object(a.a)({},t,e.target.value))}},{key:"render",value:function(){var e=this,t=this.state;t.errors,t.isLoading;return Object(O.jsx)("div",{className:"c-app c-default-layout flex-row align-items-center",children:Object(O.jsx)(b.r,{children:Object(O.jsx)(b.T,{className:"justify-content-center",children:Object(O.jsx)(b.p,{md:"8",children:Object(O.jsx)(b.h,{children:Object(O.jsx)(b.e,{className:"p-4",children:Object(O.jsx)(b.f,{children:Object(O.jsxs)("form",{onSubmit:function(){var t=Object(o.a)(i.a.mark((function t(n){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.onSubmit(n);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),children:[Object(O.jsx)("h1",{children:"Qu\xean m\u1eadt kh\u1ea9u"}),Object(O.jsxs)(b.K,{className:"mb-3",children:[Object(O.jsx)(b.M,{children:Object(O.jsx)(b.N,{children:Object(O.jsx)(D.a,{name:"cil-user"})})}),Object(O.jsx)(b.H,{type:"password",placeholder:"Nh\u1eadp m\u1eadt kh\u1ea9u",name:"password",onChange:function(t){return e.onChange(t,"password")}})]}),Object(O.jsxs)(b.K,{className:"mb-3",children:[Object(O.jsx)(b.M,{children:Object(O.jsx)(b.N,{children:Object(O.jsx)(D.a,{name:"cil-user"})})}),Object(O.jsx)(b.H,{type:"password",placeholder:"Nh\u1eadp l\u1ea1i m\u1eadt kh\u1ea9u",name:"password",onChange:function(t){return e.onChange(t,"password_cf")}})]}),Object(O.jsx)(l.a,{children:Object(O.jsx)(_.a,{xs:"12",lg:"12",sm:"12",children:Object(O.jsx)(A.a,{color:"primary",className:"px-4",children:"\u0110\u1eb7t l\u1ea1i m\u1eadt kh\u1ea9u"})})})]})})})})})})})})}}]),n}(p.Component);t.default=h},640:function(e,t,n){"use strict";t.a={BASE_URL:"https://api.thulamua.com",GHTK_URL:"https://services.ghtklab.com",LOGIN:"/api/login",LIST_USER:"/api/list_user",ADD_USER:"/api/add_user",UPDATE_USER:"/api/update_user",DELETE_USER:"/api/delete_user",UPLOAD_AVATAR:"/api/upload_avatar",LIST_CATEGORY:"/api/list_category",ADD_CATEGORY:"/api/add_category",UPDATE_CATEGORY:"/api/update_category",DELETE_CATEGORY:"/api/delete_category",UPLOAD_CATEGORY:"/api/upload_category",LIST_BRAND:"/api/list_brand",ADD_BRAND:"/api/add_brand",UPDATE_BRAND:"/api/update_brand",DELETE_BRAND:"/api/delete_brand",UPLOAD_BRAND:"/api/upload_brand",LIST_PRODUCT:"/api/list_product",LIST_PRODUCT_CATEGORY:"/api/list_product_category",LIST_PRODUCT_BY_BRAND:"/api/list_product_by_brand",ADD_PRODUCT:"/api/add_product",UPDATE_PRODUCT:"/api/update_product",DELETE_PRODUCT:"/api/delete_product",UPLOAD_PRODUCT:"/api/upload_product",UPLOAD_PRODUCT_MULTIPLE:"/api/upload_product_multiple",LIST_ORDER:"/api/list_order",GET_DETAIL_TRANSPORT:"/api/get_detail_transport",GET_LIST_TRANSPORT:"/api/get_list_transport",LIST_ORDER_DETAIL:"/api/list_order_detail",LIST_ORDER_BY_USER:"/api/list_order_by_user",ADD_ORDER:"/api/add_order",PRINT_ORDER:"/api/print_order",LIST_DEAL:"/api/list_deal",ADD_DEAL:"/api/add_deal",UPDATE_DEAL:"/api/update_deal",DELETE_DEAL:"/api/delete_deal",UPLOAD_DEAL:"/api/upload_deal",LIST_COUNT_ORDER:"/api/list_count_order",LIST_BANNER:"/api/get_banner",GET_BANNER_BY_ID:"/api/get_banner_by_id",ADD_BANNER:"/api/add_banners",UPADTE_BANNER:"/api/update_banner",DELETE_BANNER:"/api/delete_banner",UPLOAD_BANNER:"/api/upload_banner",LIST_SEO_INFO:"/api/get_seo_info",GET_SEO_INFO_BY_PRODUCT:"/api/get_seo_info_by_product",ADD_SEO_INFO:"/api/add_seo_info",UPDATE_SEO_INFO:"/api/update_seo_info",DELETE_SEO_INFOR:"/api/delete_seo_info",UPLOAD_SEO_INFO:"/api/upload_seo_info",LIST_MULTI_IMAGE:"/api/get_multi_image",LIST_IMAGE_BY_PRODUCT:"/api/get_multi_image_by_product",ADD_MULTI_IMAGE:"/api/add_multi_image",UPDATE_MULTI_IMAGE:"/api/update_multi_image",UPLOAD_MULTI_IMAGE:"/api/upload_multi_image",LIST_SUGGEST_ITEM:"/itemSdk",LIST_SUGGEST_ITEM_COMPANY:"/itemSdk/",LIST_SUGGEST_ITEM_ADMIN:"/itemSdk/admin/",SEARCH_SUGGEST_ITEM_ADMIN:"/itemSdk/admin/search/",SEARCH_SUGGEST_ITEM_COMPANY:"/itemSdk/search/",ADD_SUGGEST_ITEM:"/itemSdk",UPDATE_SUGGEST_ITEM:"/itemSdk/",UPLOAD_IMAGE:"/itemSdk/upload_image",UPLOAD_IMAGE_MAKEUP:"/itemSdk/upload_image_makeup",UPLOAD_IMAGE_BRAND:"/itemSdk/upload_image_brand",DELETE_SUGGEST_ITEM:"/itemSdk/deleteItem",LIST_SDK:"/sdk",LIST_BRAND_MAKEUP:"/brands",LIST_BRAND_COMPANY_MAKEUP:"/brands/",ADD_BRAND_MAKEUP:"/add-brand",UPDATE_BRAND_MAKEUP:"/update-brand",DELETE_BRAND_MAKEUP:"/delete-brand",LIST_BRAND_PLUGIN:"/brand-plugin",LIST_BRAND_PLUGIN_COMPANY:"/brand-plugin/",ADD_BRAND_PLUGIN:"/add-brand-plugin",UPDATE_BRAND_PLUGIN:"/update-brand-plugin",DELETE_BRAND_PLUGIN:"/delete-brand-plugin",LIST_PRODUCT_MAKEUP:"/product",LIST_PRODUCT_HAIR_MAKEUP:"/product_hair",LIST_PRODUCT_COMPANY_MAKEUP:"/product/",LIST_PRODUCT_COMPANY_HAIR_MAKEUP:"/product_hair/",ADD_PRODUCT_MAKEUP:"/add-product",ADD_PRODUCT_HAIR_MAKEUP:"/add-product-hair",UPDATE_PRODUCT_MAKEUP:"/update-product",DELETE_PRODUCT_MAKEUP:"/delete-product",LIST_TYPE:"/types",LIST_TYPE_COMPANY:"/types/",ADD_TYPE:"/add-type",UPDATE_TYPE:"/update-type",DELETE_TYPE:"/delete-type",LIST_COLOR:"/colors",LIST_COLOR_COMPANY:"/colors/",LIST_COLOR_SELECT:"/color-select",ADD_COLOR:"/add-color",UPDATE_COLOR:"/update-color",DELETE_COLOR:"/delete-color",LIST_HISTORY_SKIN:"/api/get-history-skin",LIST_HISTORY_SKIN_BY_CONDITION:"/api/get-history-skin-by-condition",ADD_HISTORY_SKIN:"/api/add-history-skin",LIST_TYPE_PRODUCT:"/api/list-type-product",ADD_TYPE_PRODUCT:"/api/add-type-product",UPDATE_TYPE_PRODUCT:"/api/update-type-product",DELETE_TYPE_PRODUCT:"/api/delete-type-product",LIST_TYPE_SDK:"/api/list-type-sdk",ADD_TYPE_SDK:"/api/add-type-sdk",UPDATE_TYPE_SDK:"/api/update-type-sdk",DELETE_TYPE_SDK:"/api/delete-type-sdk",LIST_PRIORITY:"/api/get-list-priority",ADD_PRIORITY:"/api/add-priority",UPDATE_PRIORITY:"/api/update-priority",DELETE_PRIORITY:"/api/delete-priority",UPLOAD_PRIORITY:"/api/upload-priority"}},643:function(e,t,n){"use strict";function a(e,t,n,a,r,i,o){try{var d=e[i](o),c=d.value}catch(u){return void n(u)}d.done?t(c):Promise.resolve(c).then(a,r)}function r(e){return function(){var t=this,n=arguments;return new Promise((function(r,i){var o=e.apply(t,n);function d(e){a(o,r,i,d,c,"next",e)}function c(e){a(o,r,i,d,c,"throw",e)}d(void 0)}))}}n.d(t,"a",(function(){return r}))},648:function(e,t,n){"use strict";n.d(t,"m",(function(){return o})),n.d(t,"f",(function(){return d})),n.d(t,"d",(function(){return c})),n.d(t,"j",(function(){return u})),n.d(t,"k",(function(){return s})),n.d(t,"l",(function(){return p})),n.d(t,"p",(function(){return _})),n.d(t,"o",(function(){return E})),n.d(t,"n",(function(){return T})),n.d(t,"b",(function(){return f})),n.d(t,"a",(function(){return b})),n.d(t,"i",(function(){return D})),n.d(t,"c",(function(){return O})),n.d(t,"h",(function(){return R})),n.d(t,"g",(function(){return y})),n.d(t,"e",(function(){return L}));var a,r=n(64),i=n.n(r);function o(e){document.body.style.paddingRight=e>0?e+"px":null}function d(){var e=window.getComputedStyle(document.body,null);return parseInt(e&&e.getPropertyValue("padding-right")||0,10)}function c(){var e=function(){var e=document.createElement("div");e.style.position="absolute",e.style.top="-9999px",e.style.width="50px",e.style.height="50px",e.style.overflow="scroll",document.body.appendChild(e);var t=e.offsetWidth-e.clientWidth;return document.body.removeChild(e),t}(),t=document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top")[0],n=t?parseInt(t.style.paddingRight||0,10):0;document.body.clientWidth<window.innerWidth&&o(n+e)}function u(e,t){return void 0===e&&(e=""),void 0===t&&(t=a),t?e.split(" ").map((function(e){return t[e]||e})).join(" "):e}function s(e,t){var n={};return Object.keys(e).forEach((function(a){-1===t.indexOf(a)&&(n[a]=e[a])})),n}function p(e,t){for(var n,a=Array.isArray(t)?t:[t],r=a.length,i={};r>0;)i[n=a[r-=1]]=e[n];return i}var l={};function _(e){l[e]||("undefined"!==typeof console&&console.error(e),l[e]=!0)}var A="object"===typeof window&&window.Element||function(){};var E=i.a.oneOfType([i.a.string,i.a.func,function(e,t,n){if(!(e[t]instanceof A))return new Error("Invalid prop `"+t+"` supplied to `"+n+"`. Expected prop to be an instance of Element. Validation failed.")},i.a.shape({current:i.a.any})]),T=i.a.oneOfType([i.a.func,i.a.string,i.a.shape({$$typeof:i.a.symbol,render:i.a.func}),i.a.arrayOf(i.a.oneOfType([i.a.func,i.a.string,i.a.shape({$$typeof:i.a.symbol,render:i.a.func})]))]),f={Fade:150,Collapse:350,Modal:300,Carousel:600},b=["in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","onEnter","onEntering","onEntered","onExit","onExiting","onExited"],D={esc:27,space:32,enter:13,tab:9,up:38,down:40,home:36,end:35,n:78,p:80},O=!("undefined"===typeof window||!window.document||!window.document.createElement);function h(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Object.prototype.toString.call(e)}function R(e){var t=typeof e;return null!=e&&("object"===t||"function"===t)}function S(e){if(function(e){return!(!e||"object"!==typeof e)&&"current"in e}(e))return e.current;if(function(e){if(!R(e))return!1;var t=h(e);return"[object Function]"===t||"[object AsyncFunction]"===t||"[object GeneratorFunction]"===t||"[object Proxy]"===t}(e))return e();if("string"===typeof e&&O){var t=document.querySelectorAll(e);if(t.length||(t=document.querySelectorAll("#"+e)),!t.length)throw new Error("The target '"+e+"' could not be identified in the dom, tip: check spelling");return t}return e}function m(e){return null!==e&&(Array.isArray(e)||O&&"number"===typeof e.length)}function y(e,t){var n=S(e);return t?m(n)?n:null===n?[]:[n]:m(n)?n[0]:n}var L=["a[href]","area[href]","input:not([disabled]):not([type=hidden])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","object","embed","[tabindex]:not(.modal)","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])']},652:function(e,t,n){"use strict";function a(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,"a",(function(){return a}))},671:function(e,t,n){"use strict";t.a="data:image/png;base64,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"},690:function(e,t,n){"use strict";var a=n(12),r=n(29),i=n(652),o=n(35),d=n(2),c=n.n(d),u=n(64),s=n.n(u),p=n(642),l=n.n(p),_=n(648),A={active:s.a.bool,"aria-label":s.a.string,block:s.a.bool,color:s.a.string,disabled:s.a.bool,outline:s.a.bool,tag:_.n,innerRef:s.a.oneOfType([s.a.object,s.a.func,s.a.string]),onClick:s.a.func,size:s.a.string,children:s.a.node,className:s.a.string,cssModule:s.a.object,close:s.a.bool},E=function(e){function t(t){var n;return(n=e.call(this,t)||this).onClick=n.onClick.bind(Object(i.a)(n)),n}Object(o.a)(t,e);var n=t.prototype;return n.onClick=function(e){if(!this.props.disabled)return this.props.onClick?this.props.onClick(e):void 0;e.preventDefault()},n.render=function(){var e=this.props,t=e.active,n=e["aria-label"],i=e.block,o=e.className,d=e.close,u=e.cssModule,s=e.color,p=e.outline,A=e.size,E=e.tag,T=e.innerRef,f=Object(r.a)(e,["active","aria-label","block","className","close","cssModule","color","outline","size","tag","innerRef"]);d&&"undefined"===typeof f.children&&(f.children=c.a.createElement("span",{"aria-hidden":!0},"\xd7"));var b="btn"+(p?"-outline":"")+"-"+s,D=Object(_.j)(l()(o,{close:d},d||"btn",d||b,!!A&&"btn-"+A,!!i&&"btn-block",{active:t,disabled:this.props.disabled}),u);f.href&&"button"===E&&(E="a");var O=d?"Close":null;return c.a.createElement(E,Object(a.a)({type:"button"===E&&f.onClick?"button":void 0},f,{className:D,ref:T,onClick:this.onClick,"aria-label":n||O}))},t}(c.a.Component);E.propTypes=A,E.defaultProps={color:"secondary",tag:"button"},t.a=E}}]);
//# sourceMappingURL=12.6dc42e86.chunk.js.map