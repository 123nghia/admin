(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[39],{1190:function(e,n,t){"use strict";var a=t(12),r=t(28),o=t(653),i=t(35),l=t(2),c=t.n(l),s=t(64),d=t.n(s),u=t(638),m=t.n(u),h=t(642),p={tag:h.n,innerRef:d.a.oneOfType([d.a.object,d.a.func,d.a.string]),disabled:d.a.bool,active:d.a.bool,className:d.a.string,cssModule:d.a.object,onClick:d.a.func,href:d.a.any},b=function(e){function n(n){var t;return(t=e.call(this,n)||this).onClick=t.onClick.bind(Object(o.a)(t)),t}Object(i.a)(n,e);var t=n.prototype;return t.onClick=function(e){this.props.disabled?e.preventDefault():("#"===this.props.href&&e.preventDefault(),this.props.onClick&&this.props.onClick(e))},t.render=function(){var e=this.props,n=e.className,t=e.cssModule,o=e.active,i=e.tag,l=e.innerRef,s=Object(r.a)(e,["className","cssModule","active","tag","innerRef"]),d=Object(h.j)(m()(n,"nav-link",{disabled:s.disabled,active:o}),t);return c.a.createElement(i,Object(a.a)({},s,{ref:l,onClick:this.onClick,className:d}))},n}(c.a.Component);b.propTypes=p,b.defaultProps={tag:"a"},n.a=b},1231:function(e,n,t){"use strict";t.r(n);var a=t(2),r=t.n(a),o=t(31),i=t(23),l=t(647),c=r.a.lazy((function(){return Promise.all([t.e(0),t.e(1),t.e(32),t.e(42)]).then(t.bind(null,1232))})),s=r.a.lazy((function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(3),t.e(19)]).then(t.bind(null,1200))})),d=r.a.lazy((function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(3),t.e(24)]).then(t.bind(null,1204))})),u=r.a.lazy((function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(3),t.e(33)]).then(t.bind(null,1205))})),m=r.a.lazy((function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(3),t.e(29)]).then(t.bind(null,1206))})),h=r.a.lazy((function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(3),t.e(11)]).then(t.bind(null,1207))})),p=r.a.lazy((function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(3),t.e(12)]).then(t.bind(null,1208))})),b=r.a.lazy((function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(3),t.e(36)]).then(t.bind(null,1209))})),f=r.a.lazy((function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(3),t.e(31)]).then(t.bind(null,1210))})),j=r.a.lazy((function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(3),t.e(34)]).then(t.bind(null,1211))})),g=r.a.lazy((function(){return Promise.all([t.e(1),t.e(2),t.e(40)]).then(t.bind(null,1212))})),y=r.a.lazy((function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(3),t.e(18)]).then(t.bind(null,1213))})),v=[{path:"/",exact:!0,name:"Home"},{path:"/dashboard",name:"Dashboard",component:c},{path:"/users",name:"Users",component:s},{path:"/company",name:"Company",component:d},{path:"/key",name:"Key",component:u},{path:"/key_order",name:"Key",component:m},{path:"/pakage_sale",name:"Sale",component:h},{path:"/pakage_sale_log",name:"SaleLog",component:p},{path:"/type_key",name:"TypeKey",component:f},{path:"/role",name:"Role",component:b},{path:"/link",name:"Key",component:j},{path:"/history",name:"HistorySkin",component:g},{path:"/sales",name:"ShopManager",component:r.a.lazy((function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(3),t.e(17)]).then(t.bind(null,1214))}))},{path:"/shopmanager",name:"ShopManager",component:y},{path:"/customers",name:"Customers",component:r.a.lazy((function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(3),t.e(16)]).then(t.bind(null,1215))}))},{path:"/hardware",name:"HardWares",component:r.a.lazy((function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(3),t.e(13)]).then(t.bind(null,1216))}))},{path:"/orders",name:"Orders",component:r.a.lazy((function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(3),t.e(28)]).then(t.bind(null,1217))}))},{path:"/order_table",name:"Order Table",component:r.a.lazy((function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(3),t.e(21)]).then(t.bind(null,1218))}))},{path:"/transaction",name:"Transaction",component:r.a.lazy((function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(3),t.e(23)]).then(t.bind(null,1219))}))},{path:"/hardwaremanager",name:"HardWare",component:r.a.lazy((function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(3),t.e(37)]).then(t.bind(null,1220))}))},{path:"/profile",name:"Profile",component:r.a.lazy((function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(35),t.e(41)]).then(t.bind(null,1221))}))},{path:"/spending_order",name:"SPENDING",component:r.a.lazy((function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(3),t.e(22)]).then(t.bind(null,1222))}))},{path:"/role_manager",name:"Role Manager",component:r.a.lazy((function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(3),t.e(38)]).then(t.bind(null,1223))}))},{path:"/plugin_manager",name:"Plugin Manager",component:r.a.lazy((function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(3),t.e(20)]).then(t.bind(null,1224))}))},{path:"/customer_manager",name:"Customer Manager",component:r.a.lazy((function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(3),t.e(27)]).then(t.bind(null,1225))}))},{path:"/plugin_create_order",name:"Create Order",component:r.a.lazy((function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(3),t.e(26)]).then(t.bind(null,1226))}))},{path:"/feature",name:"Feature",component:r.a.lazy((function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(3),t.e(25)]).then(t.bind(null,1227))}))},{path:"/list_order",name:"Order Plugin",component:r.a.lazy((function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(3),t.e(30)]).then(t.bind(null,1228))}))}],O=t(20),x=Object(O.jsx)("div",{className:"pt-3 text-center",children:Object(O.jsx)("div",{className:"sk-spinner sk-spinner-pulse"})}),N=function(){var e=localStorage.getItem("auth"),n=localStorage.getItem("role");return e?Object(O.jsx)("main",{className:"c-main",children:Object(O.jsx)(l.k,{fluid:!0,children:Object(O.jsx)(a.Suspense,{fallback:x,children:Object(O.jsxs)(i.d,{children:[v.map((function(e,n){return e.component&&Object(O.jsx)(i.b,{path:e.path,exact:e.exact,name:e.name,render:function(n){return Object(O.jsx)(l.q,{children:Object(O.jsx)(e.component,Object(o.a)({},n))})}},n)})),"ADMIN"==n?Object(O.jsx)(i.a,{from:"/",to:"/list_order"}):Object(O.jsx)(i.a,{from:"/",to:"/dashboard"})]})})})}):Object(O.jsx)(i.a,{from:"/",to:"/login"})},S=r.a.memo(N),w=function(){return Object(O.jsx)(l.r,{fixed:!1})},C=r.a.memo(w),_=t(171),P=t(660),k=function(){var e=Object(_.c)(),n=Object(_.d)((function(e){return e.sidebarShow}));return Object(O.jsxs)(l.u,{withSubheader:!0,children:[Object(O.jsx)(l.S,{inHeader:!0,className:"ml-md-3 d-lg-none",onClick:function(){var t=!![!1,"responsive"].includes(n)||"responsive";e({type:"set",sidebarShow:t})}}),Object(O.jsx)(l.S,{inHeader:!0,className:"ml-3 d-md-down-none",onClick:function(){var t=![!0,"responsive"].includes(n)&&"responsive";e({type:"set",sidebarShow:t})}}),Object(O.jsx)(l.v,{className:"mx-auto d-lg-none",to:"/",children:Object(O.jsx)(P.a,{name:"logo",height:"48",alt:"Logo"})}),Object(O.jsx)(l.w,{className:"d-md-down-none mr-auto",children:Object(O.jsx)(l.x,{className:"px-3",children:Object(O.jsx)(l.y,{to:"/dashboard",children:"Dashboard"})})}),Object(O.jsx)(l.w,{className:"px-3",children:Object(O.jsx)(I,{})})]})},z=t(1190),I=function(){return Object(O.jsxs)(l.m,{inNav:!0,className:"c-header-nav-items mx-5",direction:"down",children:[Object(O.jsx)(l.p,{className:"c-header-nav-link",caret:!1,children:Object(O.jsxs)("div",{className:"c-avatar",children:[Object(O.jsx)("div",{className:"mr-2",style:{fontSize:20,color:"red"},children:Object(O.jsx)("strong",{children:null==JSON.parse(localStorage.getItem("user"))||void 0==JSON.parse(localStorage.getItem("user"))?"":JSON.parse(localStorage.getItem("user")).username})}),Object(O.jsx)(l.z,{src:"avatars/6.jpg",className:"c-avatar-img",alt:"admin@bootstrapmaster.com"})]})}),Object(O.jsx)(l.o,{className:"pt-0",placement:"bottom-end",children:Object(O.jsxs)(l.n,{children:[Object(O.jsx)(P.a,{name:"cil-lock-locked",className:"mfe-2"}),Object(O.jsx)(z.a,{onClick:function(){window.location.href="#/login"},children:"Logout"})]})})]})},D=t.p+"static/media/logo-test.065d65d0.png",M=[{_tag:"CSidebarNavTitle",_children:["Danh m\u1ee5c"],role:["ADMIN","COMPANY"]},{_tag:"CSidebarNavItem",name:"Danh s\xe1ch t\xednh n\u0103ng",to:"/dashboard",icon:Object(O.jsx)(P.a,{name:"cil-speedometer",customClasses:"c-sidebar-nav-icon"}),role:["COMPANY"]},{_tag:"CSidebarNavItem",name:"H\u1ed3 s\u01a1",to:"/profile",icon:Object(O.jsx)(P.a,{name:"cil-user",customClasses:"c-sidebar-nav-icon"}),role:["ADMIN","COMPANY"]},{_tag:"CSidebarNavTitle",_children:["Ph\xe2n quy\u1ec1n"],role:["ADMIN"]},{_tag:"CSidebarNavDropdown",name:"Danh s\xe1ch quy\u1ec1n",icon:"cil-star",_children:[{_tag:"CSidebarNavItem",name:"Qu\u1ea3n l\xfd quy\u1ec1n",to:"/role_manager"}],role:["ADMIN"]},{_tag:"CSidebarNavTitle",_children:["Kh\xe1ch h\xe0ng"],role:["ADMIN"]},{_tag:"CSidebarNavDropdown",name:"Kh\xe1ch h\xe0ng",icon:"cil-star",_children:[{_tag:"CSidebarNavItem",name:"Qu\u1ea3n l\xfd kh\xe1ch h\xe0ng",to:"/customer_manager"}],role:["ADMIN"]},{_tag:"CSidebarNavTitle",_children:["G\xf3i s\u1ea3n ph\u1ea9m"],role:["ADMIN"]},{_tag:"CSidebarNavDropdown",name:"G\xf3i s\u1ea3n ph\u1ea9m",icon:"cil-star",_children:[{_tag:"CSidebarNavItem",name:"Qu\u1ea3n l\xfd g\xf3i s\u1ea3n ph\u1ea9m",to:"/plugin_manager"},{_tag:"CSidebarNavItem",name:"Qu\u1ea3n l\xfd t\xednh n\u0103ng",to:"/feature"}],role:["ADMIN"]},{_tag:"CSidebarNavTitle",_children:["\u0110\u01a1n h\xe0ng"],role:["ADMIN"]},{_tag:"CSidebarNavDropdown",name:"T\u1ea1o m\u1edbi \u0111\u01a1n h\xe0ng",icon:"cil-star",_children:[{_tag:"CSidebarNavItem",name:"Danh s\xe1ch \u0111\u01a1n h\xe0ng",to:"/list_order"},{_tag:"CSidebarNavItem",name:"T\u1ea1o \u0111\u01a1n h\xe0ng",to:"/plugin_create_order"}],role:["ADMIN"]}],A=function(){for(var e=localStorage.getItem("role"),n=0;n<M.length;n++)M[n].role.includes(e)?M[n].hidden=!1:M[n].hidden=!0;localStorage.setItem("url",JSON.stringify([]));var t=Object(_.c)(),a=Object(_.d)((function(e){return e.sidebarShow}));return Object(O.jsxs)(l.K,{show:a,onShowChange:function(e){return t({type:"set",sidebarShow:e})},children:[Object(O.jsxs)(l.L,{className:"d-md-down-none",to:"/",children:[Object(O.jsxs)(z.a,{style:{fontSize:20},href:"/",className:"nav-link",activeStyle:{textDecoration:"underline"},children:[Object(O.jsx)("img",{src:D,width:"40",height:"auto",alt:"HB Analytics Logo",className:"navbar-brand-full"})," Beas"]}),Object(O.jsx)(P.a,{className:"c-sidebar-brand-minimized",name:"sygnet",height:35})]}),Object(O.jsx)(l.N,{children:Object(O.jsx)(l.l,{items:M,components:{CSidebarNavDivider:l.O,CSidebarNavDropdown:l.P,CSidebarNavItem:l.Q,CSidebarNavTitle:l.R}})}),Object(O.jsx)(l.M,{className:"c-d-md-down-none"})]})},E=r.a.memo(A);n.default=function(){return Object(O.jsxs)("div",{className:"c-app c-default-layout",children:[Object(O.jsx)(E,{}),Object(O.jsxs)("div",{className:"c-wrapper",children:[Object(O.jsx)(k,{}),Object(O.jsx)("div",{className:"c-body",children:Object(O.jsx)(S,{})}),Object(O.jsx)(C,{})]})]})}},642:function(e,n,t){"use strict";t.d(n,"m",(function(){return i})),t.d(n,"f",(function(){return l})),t.d(n,"d",(function(){return c})),t.d(n,"j",(function(){return s})),t.d(n,"k",(function(){return d})),t.d(n,"l",(function(){return u})),t.d(n,"p",(function(){return h})),t.d(n,"o",(function(){return b})),t.d(n,"n",(function(){return f})),t.d(n,"b",(function(){return j})),t.d(n,"a",(function(){return g})),t.d(n,"i",(function(){return y})),t.d(n,"c",(function(){return v})),t.d(n,"h",(function(){return x})),t.d(n,"g",(function(){return w})),t.d(n,"e",(function(){return C}));var a,r=t(64),o=t.n(r);function i(e){document.body.style.paddingRight=e>0?e+"px":null}function l(){var e=window.getComputedStyle(document.body,null);return parseInt(e&&e.getPropertyValue("padding-right")||0,10)}function c(){var e=function(){var e=document.createElement("div");e.style.position="absolute",e.style.top="-9999px",e.style.width="50px",e.style.height="50px",e.style.overflow="scroll",document.body.appendChild(e);var n=e.offsetWidth-e.clientWidth;return document.body.removeChild(e),n}(),n=document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top")[0],t=n?parseInt(n.style.paddingRight||0,10):0;document.body.clientWidth<window.innerWidth&&i(t+e)}function s(e,n){return void 0===e&&(e=""),void 0===n&&(n=a),n?e.split(" ").map((function(e){return n[e]||e})).join(" "):e}function d(e,n){var t={};return Object.keys(e).forEach((function(a){-1===n.indexOf(a)&&(t[a]=e[a])})),t}function u(e,n){for(var t,a=Array.isArray(n)?n:[n],r=a.length,o={};r>0;)o[t=a[r-=1]]=e[t];return o}var m={};function h(e){m[e]||("undefined"!==typeof console&&console.error(e),m[e]=!0)}var p="object"===typeof window&&window.Element||function(){};var b=o.a.oneOfType([o.a.string,o.a.func,function(e,n,t){if(!(e[n]instanceof p))return new Error("Invalid prop `"+n+"` supplied to `"+t+"`. Expected prop to be an instance of Element. Validation failed.")},o.a.shape({current:o.a.any})]),f=o.a.oneOfType([o.a.func,o.a.string,o.a.shape({$$typeof:o.a.symbol,render:o.a.func}),o.a.arrayOf(o.a.oneOfType([o.a.func,o.a.string,o.a.shape({$$typeof:o.a.symbol,render:o.a.func})]))]),j={Fade:150,Collapse:350,Modal:300,Carousel:600},g=["in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","onEnter","onEntering","onEntered","onExit","onExiting","onExited"],y={esc:27,space:32,enter:13,tab:9,up:38,down:40,home:36,end:35,n:78,p:80},v=!("undefined"===typeof window||!window.document||!window.document.createElement);function O(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Object.prototype.toString.call(e)}function x(e){var n=typeof e;return null!=e&&("object"===n||"function"===n)}function N(e){if(function(e){return!(!e||"object"!==typeof e)&&"current"in e}(e))return e.current;if(function(e){if(!x(e))return!1;var n=O(e);return"[object Function]"===n||"[object AsyncFunction]"===n||"[object GeneratorFunction]"===n||"[object Proxy]"===n}(e))return e();if("string"===typeof e&&v){var n=document.querySelectorAll(e);if(n.length||(n=document.querySelectorAll("#"+e)),!n.length)throw new Error("The target '"+e+"' could not be identified in the dom, tip: check spelling");return n}return e}function S(e){return null!==e&&(Array.isArray(e)||v&&"number"===typeof e.length)}function w(e,n){var t=N(e);return n?S(t)?t:null===t?[]:[t]:S(t)?t[0]:t}var C=["a[href]","area[href]","input:not([disabled]):not([type=hidden])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","object","embed","[tabindex]:not(.modal)","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])']},653:function(e,n,t){"use strict";function a(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}t.d(n,"a",(function(){return a}))}}]);
//# sourceMappingURL=39.821f59b5.chunk.js.map