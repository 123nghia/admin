(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[25],{1343:function(e,a,t){"use strict";t.r(a);var i=t(1),n=t.n(i),r=t(43),c=t(20),l=t(656),o=n.a.lazy((function(){return t.e(26).then(t.bind(null,1330))})),p=n.a.lazy((function(){return Promise.all([t.e(0),t.e(1),t.e(21),t.e(31)]).then(t.bind(null,1331))})),_=n.a.lazy((function(){return t.e(27).then(t.bind(null,1332))})),d=n.a.lazy((function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(4),t.e(17)]).then(t.bind(null,1342))})),E=n.a.lazy((function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(4),t.e(13)]).then(t.bind(null,1336))})),s=n.a.lazy((function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(4),t.e(10)]).then(t.bind(null,1347))})),u=n.a.lazy((function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(4),t.e(12)]).then(t.bind(null,1337))})),T=n.a.lazy((function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(4),t.e(11)]).then(t.bind(null,1338))})),O=n.a.lazy((function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(4),t.e(15)]).then(t.bind(null,1339))})),A=[{path:"/",exact:!0,name:"Home"},{path:"/feedback",name:"feedback",component:n.a.lazy((function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(4),t.e(14)]).then(t.bind(null,1340))}))},{path:"/register-promotion",name:"register-promotion",component:n.a.lazy((function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(4),t.e(16)]).then(t.bind(null,1341))}))},{path:"/profile",name:"Profile",component:p},{path:"/dashboard",name:"Dashboard",component:o},{path:"/admin-config-web",name:"AdminConfigWebsite",component:"0"===localStorage.getItem("type")?d:_},{path:"/list-categories",name:"ListCategories",component:E},{path:"/list-products",name:"produtcs",component:s},{path:"/list-brand",name:"branch",component:u},{path:"/list-partner",name:"partner",component:O},{path:"/list-news",name:"news",component:T}],D=t(14),b=Object(D.jsx)("div",{className:"pt-3 text-center",children:Object(D.jsx)("div",{className:"sk-spinner sk-spinner-pulse"})}),S=function(){var e=localStorage.getItem("auth"),a=(localStorage.getItem("role"),localStorage.getItem("type"));return e?Object(D.jsx)("main",{className:"c-main",children:Object(D.jsx)(l.j,{fluid:!0,children:Object(D.jsx)(i.Suspense,{fallback:b,children:Object(D.jsxs)(c.d,{children:[A.map((function(e,a){return e.component&&Object(D.jsx)(c.b,{path:e.path,exact:e.exact,name:e.name,render:function(a){return Object(D.jsx)(l.p,{children:Object(D.jsx)(e.component,Object(r.a)({},a))})}},a)})),"0"==a||"1"==a?Object(D.jsx)(c.a,{from:"/",to:"/list_order"}):Object(D.jsx)(c.a,{from:"/",to:"/profile"})]})})})}):Object(D.jsx)(c.a,{from:"/",to:"/login"})},L=n.a.memo(S),R=function(){return Object(D.jsxs)(l.q,{fixed:!1,style:{justifyContent:"center",gap:"0.3rem"},children:["\xa9 ",(new Date).getFullYear()," ",Object(D.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://deal24h.vn/",style:{color:"rgb(70, 128, 255)",fontWeight:"bold"},children:"TIKITECH"})," ","COPYRIGHT. ALL RIGHTS RESERVED."]})},g=n.a.memo(R),I=t(825),m=t(167),N=t(699),j=t(379),h=(t.p,t.p,t.p,t.p,function(){var e=Object(i.useState)(!0),a=Object(I.a)(e,2),t=(a[0],a[1]),n=Object(i.useState)(!0),r=Object(I.a)(n,2),c=(r[0],r[1],Object(m.c)()),o=Object(m.d)((function(e){return e.sidebarShow}));return Object(D.jsxs)(l.s,{withSubheader:!0,children:[Object(D.jsx)(l.P,{inHeader:!0,className:"ml-md-3 d-lg-none",onClick:function(){console.log("1",o),c("responsive"!==o?Object(j.a)("responsive"):Object(j.a)(!0))}}),Object(D.jsx)(l.P,{inHeader:!0,className:"ml-3 d-md-down-none",onClick:function(){c("responsive"===o?Object(j.a)(!0):Object(j.a)("responsive"))}}),Object(D.jsx)(l.t,{className:"mx-auto d-lg-none",to:"/",children:Object(D.jsx)(N.a,{name:"logo",height:"48",alt:"Logo"})}),Object(D.jsx)(l.u,{className:"d-md-down-none mr-auto",children:Object(D.jsx)(l.v,{className:"px-3",children:"0"==localStorage.getItem("type")||"1"==localStorage.getItem("type")?"":Object(D.jsx)(l.d,{color:"info",onClick:function(){t(!0)},style:{color:"#ffff"},children:"H\u01b0\u1edbng d\u1eabn ng\u01b0\u1eddi d\xf9ng"})})}),Object(D.jsx)(l.u,{className:"px-3",children:Object(D.jsx)(P,{})})]})}),U=t(1322),P=function(){return Object(D.jsxs)(l.l,{inNav:!0,className:"c-header-nav-items mx-5",direction:"down",children:[Object(D.jsx)(l.o,{className:"mr-10 c-header-nav-link",caret:!1,children:Object(D.jsx)("div",{className:"c-avatar",style:{width:"100%"},children:Object(D.jsx)("div",{className:"mr-2",style:{fontSize:20,color:"var(--main_web_admin)",fontFamily:"Myriad Pro Regular"},children:Object(D.jsx)("strong",{children:null==JSON.parse(localStorage.getItem("user"))||void 0==JSON.parse(localStorage.getItem("user"))?"":JSON.parse(localStorage.getItem("user")).username})})})}),Object(D.jsx)(l.n,{className:"pt-0",placement:"bottom-end",children:Object(D.jsxs)(l.m,{onClick:function(){window.location.href="#/login"},children:[Object(D.jsx)(N.a,{name:"cil-lock-locked",className:"mfe-2"}),Object(D.jsx)(U.a,{children:"Logout"})]})})]})},C=t(672),G=t.n(C),f=t(700),v=t(705),y=t.n(v),x=t(685),k=(t(808),t(1323)),Y=t(954),M=t(955),H=t(1076),w=t(1080),B=t(956),K=t(1078),W=t(1077),F=t(1079),V=(JSON.parse(localStorage.getItem("type")),{}),q={},z=[[{_tag:"CSidebarNavTitle",_children:["PH\u1ea6N QU\u1ea2N L\xdd & TH\u1ed0NG K\xca"],role:["0","1","2","5"]},{_tag:"CSidebarNavItem",name:"T\u1ed5ng quan - Th\u1ed1ng k\xea",to:"/dashboard",hidden:!0,icon:Object(D.jsx)(N.a,{style:V,content:k.a.cilSpeedometer,customClasses:"c-sidebar-nav-icon"}),role:["0","1"],badge:{color:"info",text:Object(D.jsx)(l.Q,{placement:"right",content:q.dashboard,children:Object(D.jsx)(N.a,{content:k.a.cilInfo})})}},{_tag:"CSidebarNavItem",name:"T\u1ed5ng quan - Th\u1ed1ng k\xea",to:"/general-statistics",icon:Object(D.jsx)(N.a,{name:"cil-speedometer",customClasses:"c-sidebar-nav-icon"}),badge:{color:"info",text:"D\xc0NH CHO NCC"},role:["1","2"]},{_tag:"CSidebarNavDropdown",name:"Th\xf4ng tin chung",role:["0","1","2","5"],icon:Object(D.jsx)(Y.a,{className:"c-sidebar-nav-icon"}),_children:[{_tag:"CSidebarNavItem",name:"Th\xf4ng tin t\xe0i kho\u1ea3n",to:"/profile",icon:Object(D.jsx)(Y.b,{className:"c-sidebar-nav-icon c-sidebar-nav-icon-child"}),role:["0","1","2","5"],badge:{color:"info",text:Object(D.jsx)(l.Q,{placement:"right",content:q.profile,children:Object(D.jsx)(N.a,{content:k.a.cilInfo})})}},{_tag:"CSidebarNavItem",name:"C\u1ea5u h\xecnh Web - Admin",to:"/admin-config-web",icon:Object(D.jsx)(M.c,{className:"c-sidebar-nav-icon  c-sidebar-nav-icon-child"}),role:["0"],badge:{color:"info",text:Object(D.jsx)(l.Q,{placement:"right",content:q.configweb_admin,children:Object(D.jsx)(N.a,{content:k.a.cilInfo})})}}]},{_tag:"CSidebarNavDropdown",name:"Danh s\xe1ch",role:["0","1"],icon:Object(D.jsx)(H.a,{className:"c-sidebar-nav-icon"}),_children:[{_tag:"CSidebarNavItem",name:"Danh m\u1ee5c",to:"/list-categories",hidden:!0,icon:Object(D.jsx)(M.a,{className:"c-sidebar-nav-icon c-sidebar-nav-icon-child"}),role:["0","1"]},{_tag:"CSidebarNavItem",name:"S\u1ea3n ph\u1ea9m",to:"/list-products",hidden:!0,icon:Object(D.jsx)(W.a,{className:"c-sidebar-nav-icon c-sidebar-nav-icon-child"}),role:["0","1"]},{_tag:"CSidebarNavItem",name:"Th\u01b0\u01a1ng hi\u1ec7u",to:"/list-brand",hidden:!0,icon:Object(D.jsx)(K.a,{className:"c-sidebar-nav-icon c-sidebar-nav-icon-child"}),role:["0","1"]},{_tag:"CSidebarNavItem",name:"\u0110\u1ed1i t\xe1c",to:"/list-partner",hidden:!0,icon:Object(D.jsx)(B.b,{className:"c-sidebar-nav-icon c-sidebar-nav-icon-child"}),role:["0","1"]},{_tag:"CSidebarNavItem",name:"Tin t\u1ee9c",to:"/list-news",hidden:!0,icon:Object(D.jsx)(F.a,{className:"c-sidebar-nav-icon c-sidebar-nav-icon-child"}),role:["0","1"]}]},{_tag:"CSidebarNavDropdown",name:"H\u1ec7 th\u1ed1ng",role:["0","1"],icon:Object(D.jsx)(K.b,{className:"c-sidebar-nav-icon"}),_children:[{_tag:"CSidebarNavItem",name:"Ph\u1ea3n h\u1ed3i",to:"/feedback",hidden:!0,icon:Object(D.jsx)(w.a,{className:"c-sidebar-nav-icon c-sidebar-nav-icon-child"}),role:["0","1"]},{_tag:"CSidebarNavItem",name:"\u0110\u0103ng k\xfd nh\u1eadn khuy\u1ebfn m\xe3i",to:"/register-promotion",hidden:!0,icon:Object(D.jsx)(B.a,{className:"c-sidebar-nav-icon c-sidebar-nav-icon-child"}),role:["0","1"]}]}],[],[],[],[{_tag:"CSidebarNavItem",name:"\u0110\u0103ng xu\u1ea5t",to:"/login",role:["0","1","2","5"],icon:Object(D.jsx)(N.a,{style:V,content:k.a.cilAccountLogout,customClasses:"c-sidebar-nav-icon"})}]],J=function(){var e=Object(i.useState)(""),a=Object(I.a)(e,2),t=a[0],n=a[1],r=Object(i.useState)([]),c=Object(I.a)(r,2),o=(c[0],c[1],localStorage.getItem("type"));function p(){return _.apply(this,arguments)}function _(){return(_=Object(f.a)(G.a.mark((function e(){var a,t;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=x.a.BASE_URL,t=a+"api/config/getAll",e.next=4,y.a.get(t,{params:{key:"webinfo_tikicare",company_id:"-1"}}).then((function(e){if(e.data.data.length>0){var a,t,i,r=e.data.data[0],c=JSON.parse(r.Value);n(null===c||void 0===c||null===(a=c.value)||void 0===a||null===(t=a.logos)||void 0===t||null===(i=t.webAdmin)||void 0===i?void 0:i.logo)}}));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(i.useEffect)((function(){localStorage.getItem("user");(function(){var e=Object(f.a)(G.a.mark((function e(){return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p();case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);for(var d=[],E=[],s=0;s<z.length;s++)E=E.concat(z[s]);for(var u=0;u<E.length;u++)if(E[u].role.includes(o)){if(E[u].hidden=!1,void 0!=E[u]._children)for(var T=E[u]._children,O=0;O<T.length;O++){var A=T[O].role;void 0!=A&&(A.includes(o)?T[O].hidden=!1:T[O].hidden=!0,A.includes("partner")&&(T[O].hidden=!1),A.includes("spa")&&(T[O].hidden=!1))}}else E[u].hidden=!0;for(var b=0;b<E.length;b++)if(E[b]._children)for(var S=0;S<E[b]._children.length;S++)E[b]._children[S].to&&d.push({url:"#"+E[b]._children[S].to,isHidden:E[b].hidden});localStorage.setItem("url",JSON.stringify(d));var L=Object(m.d)((function(e){return e.sidebarShow}));return Object(D.jsxs)(l.H,{show:"responsive"!==L,size:"lg",children:[Object(D.jsx)("div",{className:"header-logo",style:{backgroundColor:"#ffff"},children:Object(D.jsxs)(l.I,{className:"d-md-down",to:"/",children:[Object(D.jsx)("div",{class:"flex-center",children:Object(D.jsx)(U.a,{style:{fontSize:20},href:"/",className:"nav-link",activeStyle:{textDecoration:"underline"},children:Object(D.jsx)("img",{src:t,style:{maxHeight:"70px"},height:"auto",alt:"HB Analytics Logo",className:"navbar-brand-full"})})}),Object(D.jsx)(N.a,{className:"c-sidebar-brand-minimized",name:"sygnet",height:35})]})}),Object(D.jsx)(l.J,{children:z.map((function(e,a){return Object(D.jsx)("div",{style:{backgroundColor:"#ffff"},children:Object(D.jsx)(l.k,{items:e,components:{CSidebarNavDivider:l.K,CSidebarNavDropdown:l.L,CSidebarNavItem:l.M,CSidebarNavTitle:l.N}})},a)}))})]})},Q=n.a.memo(J);a.default=function(){return Object(D.jsxs)("div",{className:"c-app c-default-layout",children:[Object(D.jsx)(Q,{}),Object(D.jsxs)("div",{className:"c-wrapper",children:[Object(D.jsx)(h,{}),Object(D.jsx)("div",{className:"c-body",children:Object(D.jsx)(L,{})}),Object(D.jsx)(g,{})]})]})}},685:function(e,a,t){"use strict";var i,n=t(159);a.a=(i={BASE_URL:"https://api-tikicare.thulamua.com/",PORTAL_SERVER:"https://portal.applamdep.com/",BASE_URL_CURRENT:"https://id.deal24h.vn/",GET_BRAND:"api/brand_product/getAll",GET_BRAND_DETAIL:"api/brand_product/getDetail",ADD_BRAND:"api/brand_product/add",UPDATE_BRAND:"api/brand_product/update",DELETE_BRAND:"api/brand_product/delete",GET_PRODUCT:"api/product/getAll",GET_PRODUCT_DETAIL:"api/product/getDetail",ADD_PRODUCT:"api/product/add",UPDATE_PRODUCT:"api/product/update",DELETE_PRODUCT:"api/product/delete",GET_CATEGORY:"api/product_category/getAll",GET_CATEGORY_DETAIL:"api/product_category/getDetail",ADD_CATEGORY:"api/product_category/add",UPDATE_CATEGORY:"api/product_category/update",DELETE_CATEGORY:"api/product_category/delete",GET_NEWS:"api/news/getAll",GET_NEWS_DETAIL:"api/news/getDetail",ADD_NEWS:"api/news/add",UPDATE_NEWS:"api/news/update",DELETE_NEWS:"api/news/delete",EXPORT_HISTORY:"api/history/exportdata",DELETE_HISTORY:"api/history/delete",GET_OVERVIEW:"api/dashboard/overview",GET_NDLOG:"api/ngocdungLog/get-all",CHANGE_STATUS:"api/ngocdungLog/checkStatus",GET_DETAIL_NDLOG:"api/ngocdungLog/get-by-id",DELETE_NDLOG:"api/ngocdungLog/delete",GET_IPLOG:"api/iplog/get-all",GET_DETAIL_IPLOG:"api/iplog/get-by-id",DELETE_IPLOG:"api/iplog/delete",GET_SMSLOG:"api/smsLog/get-all",GET_DETAIL_SMSLOG:"api/smsLog/get-by-id",DELETE_SMSLOG:"api/smsLog/delete",GET_PARTNER:"api/partner-list-company",ADD_PARTNER:"api/plugin-add-partner",UPDATE_PARTNER:"api/plugin-update-partner",DELETE_PARTNER:"api/plugin-delete-partner",PARTNER_GET_STATISTIC_COLLABORATOR:"api/collaborator/getOverviewDashboard",PARTNER_GET_DETAI_COLLABORATOR:"api/collaborator/getDetail",COLLABORATOR_GET_LIST:"api/collaborator/getAllCustomer",COLLABORATOR_GET:"api/collaborator/getAll",COLLABORATOR_DELETE:"api/collaborator/delete",COLLABORATOR_DETAIL_GET_CUSTOMER:"api/collaborator/getAllCustomerByid",ADD_NEW_COLLABORATOR:"api/collaborator/create",GET_ALL_CAMPAIGN_VER2:"api/manager/campaign/getAll",GET_DETAIL_CAMPAIGN:"api/campaign/getDetail",GET_DETAIL_CAMPAIGN_EVOUCHER:"api/evoucher/getByCampangId",GET_ALL_COMPANY:"api/plugin-list-company",BASE_URL_HISTORY_SKIN:"https://shope.thulamua.com/lich-su-soi-da-with-iframe/",BASE_URL_HISTORY_EVOUCHER:"https://deal24h.vn/lich-su-soi-da-with-iframe/",PLUGIN_SUBSALE_USER2:"api/plugin-subsale-user_New",EXPORT_CUSTOMER_EVOUCHER:"api/get-file-export-customer-evoucher2",EXPORT_CUSTOMER_EVOUCHER_ADMIN:"api/evoucher/reportAdmin",EXPORT_CUSTOMER:"api/get-data-user",GET_FOOTER:"api/footerPage/getAll",ADD_FOOTER:"api/footerPage/add",UPDATE_FOOTER:"api/footerPage/update",DELETE_FOOTER:"api/footerPage/delete",GET_CAMPAIGN:"api/campaign/getAll",GET_CAMPAIGN_IN_EVOUCHER:"api/evoucher/getAllCapang",ADD_CAMPAIGN:"api/campaign/add",UPDATE_CAMPAIGN:"api/campaign/update",DELETE_CAMPAIGN:"api/campaign/delete",GET_BANNER_SALES:"api/banner_embedd/getAll",ADD_BANNER_SALES:"api/banner_embedd/add",UPDATE_BANNER_SALES:"api/banner_embedd/update",DELETE_BANNER_SALES:"api/banner_embedd/delete",GET_VOUCHER:"api/evoucher/getAll",ADD_VOUCHER:"api/evoucher/add",UPDATE_VOUCHER:"api/evoucher/update",DELETE_VOUCHER:"api/evoucher/delete",GET_USER_EVOUCHER_FOR_PARTNER:"api/partner/evoucher/list-customer-request",GET_USER_EVOUCHER:"api/evoucher/list-customer-request",ADD_USER_EVOUCHER:"api/evoucher/list-customer-request",UPDATE_USER_EVOUCHER:"api/evoucher/list-customer-request",DELETE_USER_EVOUCHER:"api/evoucher/list-customer-request",FETCH_DETAIL_USER_VOUCHER:"api/transactionEvoucher",DELETE_USER_EVOUCHER_REQUEST:"api/transactionEvoucher/deleteVoucher",FETCH_ALL_NOTE_USER_VOUCHER:"api/evoucher/noted",LIST_USER:"/api/list-user",LIST_USER_WITH_ID:"/api/list-user?id=",ADD_USER:"/api/add-user",UPDATE_USER:"/api/update-user",GET_BOOK_LICH:"api/booking/getAll",ADD_BOOK_LICH:"api/booking/add",UPDATE_BOOK_LICH:"api/booking/update",DELETE_BOOK_LICH:"api/booking/delete",DELETE_USER:"/api/delete-user",LOGIN_ADMIN:"/api/login_admin",GET_SHOP:"/api/get-shop",GET_SALE:"/api/get-sale",GET_COEFFICIENT:"/api/calculator-coefficient-user",GET_COEFFICIENT_PER_SALE:"/api/calculator-coefficient-user-per-sale",GET_USER_SALE_BY_MONTH:"/api/get-user-of-sale-by-month",CALCULATOR_ALL_USER_OF_COMPANY:"/api/calculator-all-user-company",CALCULATOR_ALL_USER_OF_SALE:"/api/calculator-all-user-of-sale",GET_SEEDER:"/api/get-seed",GET_SALE_NAME:"/api/get-name-sale",GET_USER_BY_ID:"/api/get-user-byID",LIST_CUSTOMER:"/api/list-customer",LIST_CUSTOMER_BY_MONTH:"/api/get-user-sale-by-month",LIST_TYPEKEY:"/api/list-typekey",LIST_TYPEKEY_WITH_ID:"/api/list-typekey?id=",ADD_TYPEKEY:"/api/add-typekey",UPDATE_TYPEKEY:"/api/update-typekey",DELETE_TYPEKEY:"/api/delete-typekey",INFO_FUNC_WEB:"/api/get-info-feature",LIST_HARDWARE:"/api/list-hardware",LIST_HARDWARE_WITH_ID:"/api/list-hardware?id=",ADD_HARDWARE:"/api/add-hardware",UPDATE_HARDWARE:"/api/update-hardware",DELETE_HARDWARE:"/api/delete-hardware",LIST_ORDER:"/api/list-order",ADD_ORDER:"/api/add-order",UPDATE_STATUS_ORDER:"/api/update-status-order",CHECK_OUT:"/api/checkout-order",LIST_TRANSACTION:"/api/list-transaction",ADD_TRANSACTION:"/api/add-transaction",LIST_CHECK_OUT:"/api/list-checkout",LIST_HARDWARE_CHECKOUT:"/api/get-list-hardward-by-check-out",UPDATE_STATUS_CHECKOUT:"/api/update-status-hardware",LIST_ORDER_DETAIL:"/api/list-orderdetail",ADD_ORDER_DETAIL:"/api/add-orderdetail",LIST_ROLE:"/api/list-role",LIST_ROLE_WITH_ID:"/api/list-role?id=",ADD_ROLE:"/api/add-role",UPDATE_ROLE:"/api/update-role",DELETE_ROLE:"/api/delete-role",LIST_PACKAGE:"/api/list-package",ADD_PACKAGE:"/api/add-package",UPDATE_PACKAGE:"/api/update-package",DELETE_PACKAGE:"/api/delete-package",PLUGIN_DATA_PACKAGE:"/api/get-name-package",LIST_SALELOG:"/api/list-salelog",LIST_SALELOG_WITH_ID:"/api/list-salelog?id=",ADD_SALELOG:"/api/add-salelog",UPDATE_SALELOG:"/api/update-salelog",DELETE_SALELOG:"/api/delete-salelog",DATA_SALE:"/api/get-data-sale",LIST_SALE:"/api/list-sale",LIST_SALE_WITH_ID:"/api/list-sale?id=",ADD_SALE:"/api/add-sale",UPDATE_SALE:"/api/update-sale",DELETE_SALE:"/api/delete-sale",LIST_KEYORDER:"/api/list-keyorder",LIST_KEYORDER_WITH_ID:"/api/list-keyorder?id=",ADD_KEYORDER:"/api/add-keyorder",UPDATE_KEYORDER:"/api/update-keyorder",DELETE_KEYORDER:"/api/delete-keyorder",LIST_KEY:"/api/list-key",LIST_KEY_WITH_ID:"/api/list-key?id=",ADD_KEY:"/api/add-key",UPDATE_KEY:"/api/update-key",DELETE_KEY:"/api/delete-key",PLUGIN_LIST_COMPANY:"/api/plugin-list-company",PLUGIN_LIST_COMPANY_BY_ID:"/api/plugin-list-company-by-id",PLUGIN_LIST_COMPANY_WITH_ID:"/api/plugin-list-company?id=",PLUGIN_ADD_COMPANY:"/api/plugin-add-company",PLUGIN_UPDATE_COMPANY:"/api/plugin-update-company",PLUGIN_DELETE_COMPANY:"/api/plugin-delete-company",PLUGIN_DATA_COMPANY:"/api/plugin-get-data-company",LIST_COMPANY:"/api/list-company",LIST_COMPANY_WITH_ID:"/api/list-company?id=",ADD_COMPANY:"/api/add-company",UPDATE_COMPANY:"/api/update-company",DELETE_COMPANY:"/api/delete-company",DATA_COMPANY:"/api/get-data-company",LIST_LINK:"/api/list-link",LIST_LINK_WITH_ID:"/api/list-link?id=",ADD_LINK:"/api/add-link",UPDATE_LINK:"/api/update-link",DELETE_LINK:"/api/delete-link","GET-LINK-BY-ID":"/api/link-by-id",LIST_FEATURE:"/api/list-feature",ADD_FEATURE:"/api/add-feature",UPDATE_FEATURE:"/api/update-feature",DELETE_FEATURE:"/api/delete-feature",DATA_CHOOSE_FEATURE:"/api/get-feature-choose",LIST_PLUGIN_ORDER:"/api/plugin-list-order",COUNT_PLUGIN_ORDER:"/api/plugin-count-order",LIST_PLUGIN_ORDER_BY_ID:"/api/plugin-list-order-by-id",LIST_PLUGIN_ORDER_FOR_ADMIN:"/api/plugin-list-order-for-admin",LIST_ORDER_BY_SALE:"/api/plugin-list-order-by-saleid",ADD_PLUGIN_ORDER:"/api/plugin-add-order",UPDATE_PLUGIN_ORDER:"/api/plugin-update-order",DELETE_PLUGIN_ORDER:"/api/plugin-delete-order",UPDATE_SLUG:"/api/plugin-update-slug",PLUGIN_LIST_USER:"/api/plugin-list-user",PLUGIN_ALL_USER:"/api/plugin-all-user",PLUGIN_SUBSALE_USER:"/api/plugin-subsale-user",PLUGIN_ADD_USER:"/api/plugin-add-user",PLUGIN_ADD_SALE:"/api/plugin-add-sale",PLUGIN_ADD_SUBSALE:"/api/plugin-add-subsale",PLUGIN_UPDATE_USER:"/api/plugin-update-user",PLUGIN_UPDATE_USER_COMPANY:"/api/plugin-update-user-company",PLUGIN_DELETE_USER:"/api/plugin-delete-user",PLUGIN_RESET_PASSWORD:"/api/plugin-reset-password",PLUGIN_CHANGE_PASSWORD:"/api/plugin-change",PLUGIN_CHECK_LINK:"/api/plugin-check-link",PLUGIN_UPDATE_PASSWORD:"/api/plugin-update-password",PLUGIN_UPDATE_STATUS:"/api/plugin-update-status",PLUGIN_LOGIN_ADMIN:"/api/plugin-login_admin",PLUGIN_FORGOT_PASS:"/api/plugin-forgot-password",PLUGIN_GET_USER_BYID:"/api/plugin-get-user-byID",PLUGIN_GET_USER_BY_BODY:"/api/plugin-get-user-byID-with-body",PLUGIN_LIST_ROLE:"/api/plugin-list-role",PLUGIN_ADD_ROLE:"/api/plugin-add-role",PLUGIN_UPDATE_ROLE:"/api/plugin-update-role",PLUGIN_DELETE_ROLE:"/api/plugin-delete-role",CUS_RES_LIST:"/api/list-customer-request",CUS_RES_LIST_COMPANY:"/api/list-customer-request-for-company",CUS_RES_ADD:"/api/add-customer-request",CUS_RES_UPDATE:"/api/update-customer-request",CUS_RES_DELETE:"/api/delete-customer-request",REWARD_INFO_LIST:"/api/list-reward-info",REWARD_INFO_LIST_COMPANY:"/api/list-reward-info-for-company",REWARD_INFO_ADD:"/api/add-reward-info",REWARD_INFO_UPDATE:"/api/update-reward-info",REWARD_INFO_DELETE:"/api/delete-reward-info",REWARD_TRANS_LIST:"/api/list-reward-trans",REWARD_TRANS_ADD:"/api/list-reward-trans",REWARD_TRANS_UPDATE:"/api/update-reward-trans",REWARD_TRANS_DELETE:"/api/delete-reward-trans",TYPE_REQUEST_LIST:"/api/list-type-request",TYPE_REQUEST_ADD:"/api/add-type-request",TYPE_REQUEST_UPDATE:"/api/update-type-request",TYPE_REQUEST_DELETE:"/api/delete-type-request"},Object(n.a)(i,"LIST_CUSTOMER","/api/list-customer"),Object(n.a)(i,"LIST_CUSTOMER_FOR_COMPANY","/api/list-customer-for-company"),Object(n.a)(i,"LIST_CUSTOMER_FOR_COMPANY_BY_MONTH","/api/list-customer-for-company-by-month"),Object(n.a)(i,"LIST_SUGGEST_ITEM","/itemSdk"),Object(n.a)(i,"LIST_SUGGEST_ITEM_COMPANY","/itemSdk/"),Object(n.a)(i,"LIST_SUGGEST_ITEM_ADMIN","/itemSdk/admin/"),Object(n.a)(i,"SEARCH_SUGGEST_ITEM_ADMIN","/itemSdk/admin/search/"),Object(n.a)(i,"SEARCH_SUGGEST_ITEM_COMPANY","/itemSdk/search/"),Object(n.a)(i,"ADD_SUGGEST_ITEM","/itemSdk"),Object(n.a)(i,"UPDATE_SUGGEST_ITEM","/itemSdk/"),Object(n.a)(i,"UPLOAD_IMAGE","/itemSdk/upload_image"),Object(n.a)(i,"UPLOAD_IMAGE_MAKEUP","/itemSdk/upload_image_makeup"),Object(n.a)(i,"UPLOAD_IMAGE_BRAND","/itemSdk/upload_image_brand"),Object(n.a)(i,"DELETE_SUGGEST_ITEM","/itemSdk/deleteItem"),Object(n.a)(i,"LIST_SDK","/sdk"),Object(n.a)(i,"DELETE_BRAND_PLUGIN","/delete-brand-plugin"),Object(n.a)(i,"LIST_PRODUCT","/product"),Object(n.a)(i,"LIST_PRODUCT_HAIR","/product_hair"),Object(n.a)(i,"LIST_PRODUCT_COMPANY","/product/"),Object(n.a)(i,"LIST_PRODUCT_COMPANY_HAIR","/product_hair/"),Object(n.a)(i,"LIST_TYPE","/types"),Object(n.a)(i,"LIST_TYPE_COMPANY","types/"),Object(n.a)(i,"ADD_TYPE","/add-type"),Object(n.a)(i,"UPDATE_TYPE","/update-type"),Object(n.a)(i,"DELETE_TYPE","/delete-type"),Object(n.a)(i,"LIST_COLOR","/colors"),Object(n.a)(i,"LIST_COLOR_COMPANY","/colors/"),Object(n.a)(i,"LIST_COLOR_SELECT","/color-select"),Object(n.a)(i,"ADD_COLOR","/add-color"),Object(n.a)(i,"UPDATE_COLOR","/update-color"),Object(n.a)(i,"DELETE_COLOR","/delete-color"),Object(n.a)(i,"LIST_HISTORY_SKIN","/api/get-history-skin"),Object(n.a)(i,"LIST_HISTORY_SKIN_BY_CONDITION","/api/get-history-skin-by-condition"),Object(n.a)(i,"ADD_HISTORY_SKIN","/api/add-history-skin"),Object(n.a)(i,"LIST_TYPE_PRODUCT","/api/list-type-product"),Object(n.a)(i,"ADD_TYPE_PRODUCT","/api/add-type-product"),Object(n.a)(i,"UPDATE_TYPE_PRODUCT","/api/update-type-product"),Object(n.a)(i,"DELETE_TYPE_PRODUCT","/api/delete-type-product"),Object(n.a)(i,"LIST_TYPE_SDK","/api/list-type-sdk"),Object(n.a)(i,"ADD_TYPE_SDK","/api/add-type-sdk"),Object(n.a)(i,"UPDATE_TYPE_SDK","/api/update-type-sdk"),Object(n.a)(i,"DELETE_TYPE_SDK","/api/delete-type-sdk"),Object(n.a)(i,"LIST_END_USER","/api/list-end-user"),Object(n.a)(i,"LOGIN_END_USER","/api/login-end-user"),Object(n.a)(i,"ADD_END_USER","/api/add-end-user"),Object(n.a)(i,"UPDATE_END_USER","/api/update-end-user"),Object(n.a)(i,"DELETE_END_USER","/api/delete-end-user"),Object(n.a)(i,"LIST_CONTACT_CUSTOMER","/api/list-contact-customers"),Object(n.a)(i,"ADD_CONTACT_CUSTOMER","/api/add-contact-customers"),Object(n.a)(i,"UPDATE_CONTACT_CUSTOMER","/api/update-contact-customers"),Object(n.a)(i,"DELETE_CONTACT_CUSTOMER","/api/delete-contact-customers"),Object(n.a)(i,"UPDATE_CONTACT_STATUS","/api/update-contact-status"),Object(n.a)(i,"LIST_SALE_GROUP","api/saleGroup/getAll"),Object(n.a)(i,"ADD_SALE_GROUP","api/saleGroup/add"),Object(n.a)(i,"UPDATE_SALE_GROUP","api/saleGroup/update"),Object(n.a)(i,"DELETE_SALE_GROUP","api/saleGroup/delete"),Object(n.a)(i,"DETAIL_LIST_ALL_MEMBER_GROUP","api/saleGroup/getAllMember"),Object(n.a)(i,"DETAIL_GET_INFO_MEMBER_GROUP","api/saleGroup/getInformation"),Object(n.a)(i,"GET_ALL_SALE","api/getAllSale"),Object(n.a)(i,"GET_SALE_GROUP_BY_ID","api/saleGroup/GetById"),Object(n.a)(i,"ADD_ROLE_SUBADMIN","/api/add-role-subadmin"),Object(n.a)(i,"GET_ROLE_SUBADMIN","/api/get-role-subadmin-by-id"),Object(n.a)(i,"ADD_BANNER","/api/add-banner"),Object(n.a)(i,"GET_BANNER","/api/get-banner"),Object(n.a)(i,"UPLOAD_BANNER","/api/upload-banner"),Object(n.a)(i,"LIST_Banner","/api/banner/all"),Object(n.a)(i,"LIST_Banner_COMPANY","/api/banner/all/"),Object(n.a)(i,"ADD_Banner","/api/banner/add"),Object(n.a)(i,"UPDATE_Banner","/api/banner/update"),Object(n.a)(i,"DELETE_Banner","/api/banner/delete"),Object(n.a)(i,"CONFIG_THEME_UPDATE","/api/get-config-color/update"),Object(n.a)(i,"CONFIG_THEME_GET","/api/get-config-color"),Object(n.a)(i,"ADD_PROVIDER","api/plugin-add-vendor"),Object(n.a)(i,"UPDATE_PROVIDER","api/plugin-update-vendor"),Object(n.a)(i,"DELETE_PROVIDER","api/plugin-delete-vendor"),Object(n.a)(i,"DETAIL_PROVIDER","api/get-detail-vendor"),Object(n.a)(i,"DETAIL_GET_OVERVIEW","api/campaign/getOverview"),Object(n.a)(i,"DETAIL_USER_GET_INFO","api/user/getInfo"),Object(n.a)(i,"DETAIL_USER_GET_VOUCHER","api/user/getAllVoucher"),Object(n.a)(i,"LIST_HISTORY_SKIN1","api/get-history-skin"),i)},808:function(e,a,t){"use strict";var i=t(672),n=t.n(i),r=t(700),c=t(685),l=t(705).default;l.defaults.baseURL=c.a.BASE_URL;var o=function(){var e=Object(r.a)(n.a.mark((function e(){var a,t,i,r,c,o,p,_,d,E=arguments;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=E.length>0&&void 0!==E[0]?E[0]:"",t=E.length>1&&void 0!==E[1]?E[1]:{},i=E.length>2&&void 0!==E[2]?E[2]:"",r=E.length>3?E[3]:void 0,c={},i&&(c={headers:i}),e.prev=6,e.t0=r,e.next="GET"===e.t0?10:"POST"===e.t0?16:"PUT"===e.t0?23:"DELETE"===e.t0?29:35;break;case 10:return e.next=12,l.get(a,t,c);case 12:if(0!=(o=e.sent).is_success){e.next=15;break}return e.abrupt("return",null);case 15:return e.abrupt("return",o.data);case 16:return e.next=18,l.post(a,t,c);case 18:if(0!=(p=e.sent).is_success){e.next=21;break}return e.abrupt("return",null);case 21:return console.log(p.data),e.abrupt("return",p.data);case 23:return e.next=25,l.put(a,t,c);case 25:if(0!=(_=e.sent).is_success){e.next=28;break}return e.abrupt("return",null);case 28:return e.abrupt("return",_.data);case 29:return e.next=31,l.delete(a,t,c);case 31:if(0!=(d=e.sent).is_success){e.next=34;break}return e.abrupt("return",null);case 34:return e.abrupt("return",d.data);case 35:e.next=40;break;case 37:return e.prev=37,e.t1=e.catch(6),e.abrupt("return",e.t1);case 40:case"end":return e.stop()}}),e,null,[[6,37]])})));return function(){return e.apply(this,arguments)}}();a.a=o}}]);
//# sourceMappingURL=25.57dbb17d.chunk.js.map