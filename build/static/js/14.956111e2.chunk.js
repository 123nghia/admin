(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[14],{1022:function(e,t,n){"use strict";n.r(t);var a=n(165),i=n(166),r=n(168),o=n(167),d=n(2),c=n(1015),_=n(1016),u=n(689),l=(n(647),n(639),n(644)),p=(n(643),n(17)),s=function(e){Object(r.a)(n,e);var t=Object(o.a)(n);function n(e){var i;return Object(a.a)(this,n),(i=t.call(this,e)).state={email:""},i}return Object(i.a)(n,[{key:"render",value:function(){var e=this.state;e.errors,e.isLoading;return Object(p.jsx)("div",{className:"c-app c-default-layout flex-row align-items-center",children:Object(p.jsx)(l.r,{children:Object(p.jsx)(l.T,{className:"justify-content-center",children:Object(p.jsx)(l.p,{md:"8",children:Object(p.jsx)(l.h,{children:Object(p.jsx)(l.e,{className:"p-4",children:Object(p.jsxs)(l.f,{children:["\u0110\u01b0\u1eddng d\u1eabn \u0111\u1ec3 \u0111\u1eb7t l\u1ea1i m\u1eadt kh\u1ea9u c\u1ee7a b\u1ea1n \u0111\xe3 \u0111\u01b0\u1ee3c g\u1eedi qua mail !!!",Object(p.jsx)(c.a,{style:{marginTop:20},children:Object(p.jsx)(_.a,{xs:"12",lg:"12",sm:"12",children:Object(p.jsx)(u.a,{color:"primary",className:"px-4",onClick:function(){window.location.href="#/login"},children:"Tr\u1edf v\u1ec1 \u0111\u0103ng nh\u1eadp"})})})]})})})})})})})}}]),n}(d.Component);t.default=s},639:function(e,t,n){"use strict";var a,i=n(164);t.a=(a={BASE_URL:"https://api.thulamua.com",GHTK_URL:"https://services.ghtklab.com",LOGIN:"/api/login",LIST_USER:"/api/list_user",ADD_USER:"/api/add_user",UPDATE_USER:"/api/update_user",DELETE_USER:"/api/delete_user",UPLOAD_AVATAR:"/api/upload_avatar",LIST_CATEGORY:"/api/list_category",ADD_CATEGORY:"/api/add_category",UPDATE_CATEGORY:"/api/update_category",DELETE_CATEGORY:"/api/delete_category",UPLOAD_CATEGORY:"/api/upload_category",LIST_BRAND:"/api/list_brand",ADD_BRAND:"/api/add_brand",UPDATE_BRAND:"/api/update_brand",DELETE_BRAND:"/api/delete_brand",UPLOAD_BRAND:"/api/upload_brand",LIST_PRODUCT:"/api/list_product",LIST_PRODUCT_CATEGORY:"/api/list_product_category",ADD_PRODUCT:"/api/add_product",UPDATE_PRODUCT:"/api/update_product",DELETE_PRODUCT:"/api/delete_product",UPLOAD_PRODUCT:"/api/upload_product",UPLOAD_PRODUCT_MULTIPLE:"/api/upload_product_multiple",LIST_ORDER:"/api/list_order",GET_DETAIL_TRANSPORT:"/api/get_detail_transport",GET_LIST_TRANSPORT:"/api/get_list_transport",LIST_ORDER_DETAIL:"/api/list_order_detail",LIST_ORDER_BY_USER:"/api/list_order_by_user",ADD_ORDER:"/api/add_order",PRINT_ORDER:"/api/print_order",LIST_DEAL:"/api/list_deal",ADD_DEAL:"/api/add_deal",UPDATE_DEAL:"/api/update_deal",DELETE_DEAL:"/api/delete_deal",UPLOAD_DEAL:"/api/upload_deal",LIST_COUNT_ORDER:"/api/list_count_order",LIST_BANNER:"/api/get_banner",GET_BANNER_BY_ID:"/api/get_banner_by_id",ADD_BANNER:"/api/add_banners",UPADTE_BANNER:"/api/update_banner",DELETE_BANNER:"/api/delete_banner",UPLOAD_BANNER:"/api/upload_banner",LIST_SEO_INFO:"/api/get_seo_info",GET_SEO_INFO_BY_PRODUCT:"/api/get_seo_info_by_product",ADD_SEO_INFO:"/api/add_seo_info",UPDATE_SEO_INFO:"/api/update_seo_info",DELETE_SEO_INFOR:"/api/delete_seo_info",UPLOAD_SEO_INFO:"/api/upload_seo_info",LIST_MULTI_IMAGE:"/api/get_multi_image",LIST_IMAGE_BY_PRODUCT:"/api/get_multi_image_by_product",ADD_MULTI_IMAGE:"/api/add_multi_image",UPDATE_MULTI_IMAGE:"/api/update_multi_image",UPLOAD_MULTI_IMAGE:"/api/upload_multi_image",LIST_SUGGEST_ITEM:"/itemSdk",LIST_SUGGEST_ITEM_COMPANY:"/itemSdk/",LIST_SUGGEST_ITEM_ADMIN:"/itemSdk/admin/",SEARCH_SUGGEST_ITEM_ADMIN:"/itemSdk/admin/search/",SEARCH_SUGGEST_ITEM_COMPANY:"/itemSdk/search/",ADD_SUGGEST_ITEM:"/itemSdk",UPDATE_SUGGEST_ITEM:"/itemSdk/",UPLOAD_IMAGE:"/itemSdk/upload_image",UPLOAD_IMAGE_MAKEUP:"/itemSdk/upload_image_makeup",UPLOAD_IMAGE_BRAND:"/itemSdk/upload_image_brand",DELETE_SUGGEST_ITEM:"/itemSdk/deleteItem",LIST_SDK:"/sdk"},Object(i.a)(a,"LIST_BRAND","/brands"),Object(i.a)(a,"LIST_BRAND_COMPANY","/brands/"),Object(i.a)(a,"ADD_BRAND","/add-brand"),Object(i.a)(a,"UPDATE_BRAND","/update-brand"),Object(i.a)(a,"DELETE_BRAND","/delete-brand"),Object(i.a)(a,"LIST_BRAND_PLUGIN","/brand-plugin"),Object(i.a)(a,"LIST_BRAND_PLUGIN_COMPANY","/brand-plugin/"),Object(i.a)(a,"ADD_BRAND_PLUGIN","/add-brand-plugin"),Object(i.a)(a,"UPDATE_BRAND_PLUGIN","/update-brand-plugin"),Object(i.a)(a,"DELETE_BRAND_PLUGIN","/delete-brand-plugin"),Object(i.a)(a,"LIST_PRODUCT","/product"),Object(i.a)(a,"LIST_PRODUCT_HAIR","/product_hair"),Object(i.a)(a,"LIST_PRODUCT_COMPANY","/product/"),Object(i.a)(a,"LIST_PRODUCT_COMPANY_HAIR","/product_hair/"),Object(i.a)(a,"ADD_PRODUCT","/add-product"),Object(i.a)(a,"ADD_PRODUCT_HAIR","/add-product-hair"),Object(i.a)(a,"UPDATE_PRODUCT","/update-product"),Object(i.a)(a,"DELETE_PRODUCT","/delete-product"),Object(i.a)(a,"LIST_TYPE","/types"),Object(i.a)(a,"LIST_TYPE_COMPANY","/types/"),Object(i.a)(a,"ADD_TYPE","/add-type"),Object(i.a)(a,"UPDATE_TYPE","/update-type"),Object(i.a)(a,"DELETE_TYPE","/delete-type"),Object(i.a)(a,"LIST_COLOR","/colors"),Object(i.a)(a,"LIST_COLOR_COMPANY","/colors/"),Object(i.a)(a,"LIST_COLOR_SELECT","/color-select"),Object(i.a)(a,"ADD_COLOR","/add-color"),Object(i.a)(a,"UPDATE_COLOR","/update-color"),Object(i.a)(a,"DELETE_COLOR","/delete-color"),Object(i.a)(a,"LIST_HISTORY_SKIN","/api/get-history-skin"),Object(i.a)(a,"LIST_HISTORY_SKIN_BY_CONDITION","/api/get-history-skin-by-condition"),Object(i.a)(a,"ADD_HISTORY_SKIN","/api/add-history-skin"),Object(i.a)(a,"LIST_TYPE_PRODUCT","/api/list-type-product"),Object(i.a)(a,"ADD_TYPE_PRODUCT","/api/add-type-product"),Object(i.a)(a,"UPDATE_TYPE_PRODUCT","/api/update-type-product"),Object(i.a)(a,"DELETE_TYPE_PRODUCT","/api/delete-type-product"),Object(i.a)(a,"LIST_TYPE_SDK","/api/list-type-sdk"),Object(i.a)(a,"ADD_TYPE_SDK","/api/add-type-sdk"),Object(i.a)(a,"UPDATE_TYPE_SDK","/api/update-type-sdk"),Object(i.a)(a,"DELETE_TYPE_SDK","/api/delete-type-sdk"),a)},646:function(e,t,n){"use strict";n.d(t,"m",(function(){return o})),n.d(t,"f",(function(){return d})),n.d(t,"d",(function(){return c})),n.d(t,"j",(function(){return _})),n.d(t,"k",(function(){return u})),n.d(t,"l",(function(){return l})),n.d(t,"p",(function(){return s})),n.d(t,"o",(function(){return T})),n.d(t,"n",(function(){return b})),n.d(t,"b",(function(){return O})),n.d(t,"a",(function(){return D})),n.d(t,"i",(function(){return f})),n.d(t,"c",(function(){return A})),n.d(t,"h",(function(){return R})),n.d(t,"g",(function(){return j})),n.d(t,"e",(function(){return m}));var a,i=n(64),r=n.n(i);function o(e){document.body.style.paddingRight=e>0?e+"px":null}function d(){var e=window.getComputedStyle(document.body,null);return parseInt(e&&e.getPropertyValue("padding-right")||0,10)}function c(){var e=function(){var e=document.createElement("div");e.style.position="absolute",e.style.top="-9999px",e.style.width="50px",e.style.height="50px",e.style.overflow="scroll",document.body.appendChild(e);var t=e.offsetWidth-e.clientWidth;return document.body.removeChild(e),t}(),t=document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top")[0],n=t?parseInt(t.style.paddingRight||0,10):0;document.body.clientWidth<window.innerWidth&&o(n+e)}function _(e,t){return void 0===e&&(e=""),void 0===t&&(t=a),t?e.split(" ").map((function(e){return t[e]||e})).join(" "):e}function u(e,t){var n={};return Object.keys(e).forEach((function(a){-1===t.indexOf(a)&&(n[a]=e[a])})),n}function l(e,t){for(var n,a=Array.isArray(t)?t:[t],i=a.length,r={};i>0;)r[n=a[i-=1]]=e[n];return r}var p={};function s(e){p[e]||("undefined"!==typeof console&&console.error(e),p[e]=!0)}var E="object"===typeof window&&window.Element||function(){};var T=r.a.oneOfType([r.a.string,r.a.func,function(e,t,n){if(!(e[t]instanceof E))return new Error("Invalid prop `"+t+"` supplied to `"+n+"`. Expected prop to be an instance of Element. Validation failed.")},r.a.shape({current:r.a.any})]),b=r.a.oneOfType([r.a.func,r.a.string,r.a.shape({$$typeof:r.a.symbol,render:r.a.func}),r.a.arrayOf(r.a.oneOfType([r.a.func,r.a.string,r.a.shape({$$typeof:r.a.symbol,render:r.a.func})]))]),O={Fade:150,Collapse:350,Modal:300,Carousel:600},D=["in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","onEnter","onEntering","onEntered","onExit","onExiting","onExited"],f={esc:27,space:32,enter:13,tab:9,up:38,down:40,home:36,end:35,n:78,p:80},A=!("undefined"===typeof window||!window.document||!window.document.createElement);function S(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Object.prototype.toString.call(e)}function R(e){var t=typeof e;return null!=e&&("object"===t||"function"===t)}function L(e){if(function(e){return!(!e||"object"!==typeof e)&&"current"in e}(e))return e.current;if(function(e){if(!R(e))return!1;var t=S(e);return"[object Function]"===t||"[object AsyncFunction]"===t||"[object GeneratorFunction]"===t||"[object Proxy]"===t}(e))return e();if("string"===typeof e&&A){var t=document.querySelectorAll(e);if(t.length||(t=document.querySelectorAll("#"+e)),!t.length)throw new Error("The target '"+e+"' could not be identified in the dom, tip: check spelling");return t}return e}function I(e){return null!==e&&(Array.isArray(e)||A&&"number"===typeof e.length)}function j(e,t){var n=L(e);return t?I(n)?n:null===n?[]:[n]:I(n)?n[0]:n}var m=["a[href]","area[href]","input:not([disabled]):not([type=hidden])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","object","embed","[tabindex]:not(.modal)","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])']},651:function(e,t,n){"use strict";function a(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,"a",(function(){return a}))},689:function(e,t,n){"use strict";var a=n(12),i=n(29),r=n(651),o=n(35),d=n(2),c=n.n(d),_=n(64),u=n.n(_),l=n(641),p=n.n(l),s=n(646),E={active:u.a.bool,"aria-label":u.a.string,block:u.a.bool,color:u.a.string,disabled:u.a.bool,outline:u.a.bool,tag:s.n,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),onClick:u.a.func,size:u.a.string,children:u.a.node,className:u.a.string,cssModule:u.a.object,close:u.a.bool},T=function(e){function t(t){var n;return(n=e.call(this,t)||this).onClick=n.onClick.bind(Object(r.a)(n)),n}Object(o.a)(t,e);var n=t.prototype;return n.onClick=function(e){if(!this.props.disabled)return this.props.onClick?this.props.onClick(e):void 0;e.preventDefault()},n.render=function(){var e=this.props,t=e.active,n=e["aria-label"],r=e.block,o=e.className,d=e.close,_=e.cssModule,u=e.color,l=e.outline,E=e.size,T=e.tag,b=e.innerRef,O=Object(i.a)(e,["active","aria-label","block","className","close","cssModule","color","outline","size","tag","innerRef"]);d&&"undefined"===typeof O.children&&(O.children=c.a.createElement("span",{"aria-hidden":!0},"\xd7"));var D="btn"+(l?"-outline":"")+"-"+u,f=Object(s.j)(p()(o,{close:d},d||"btn",d||D,!!E&&"btn-"+E,!!r&&"btn-block",{active:t,disabled:this.props.disabled}),_);O.href&&"button"===T&&(T="a");var A=d?"Close":null;return c.a.createElement(T,Object(a.a)({type:"button"===T&&O.onClick?"button":void 0},O,{className:f,ref:b,onClick:this.onClick,"aria-label":n||A}))},t}(c.a.Component);T.propTypes=E,T.defaultProps={color:"secondary",tag:"button"},t.a=T}}]);
//# sourceMappingURL=14.956111e2.chunk.js.map