(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[28],{1276:function(a,e,t){"use strict";t.r(e);var i=t(165),_=t(166),p=t(168),E=t(167),l=t(2),d=t(1258),T=t(1259),r=t(661),c=(t(643),t(644),t(640)),s=(t(645),t(17)),n=function(a){Object(p.a)(t,a);var e=Object(E.a)(t);function t(a){var _;return Object(i.a)(this,t),(_=e.call(this,a)).state={email:""},_}return Object(_.a)(t,[{key:"render",value:function(){var a=this.state;a.errors,a.isLoading;return Object(s.jsx)("div",{className:"c-app c-default-layout flex-row align-items-center",children:Object(s.jsx)(c.r,{children:Object(s.jsx)(c.W,{className:"justify-content-center",children:Object(s.jsx)(c.p,{md:"8",children:Object(s.jsx)(c.h,{children:Object(s.jsx)(c.e,{className:"p-4",children:Object(s.jsxs)(c.f,{children:["\u0110\u01b0\u1eddng d\u1eabn \u0111\u1ec3 \u0111\u1eb7t l\u1ea1i m\u1eadt kh\u1ea9u c\u1ee7a b\u1ea1n \u0111\xe3 \u0111\u01b0\u1ee3c g\u1eedi qua mail !!!",Object(s.jsx)(d.a,{style:{marginTop:20},children:Object(s.jsx)(T.a,{xs:"12",lg:"12",sm:"12",children:Object(s.jsx)(r.a,{color:"primary",className:"px-4",onClick:function(){window.location.href="#/login"},children:"Tr\u1edf v\u1ec1 \u0111\u0103ng nh\u1eadp"})})})]})})})})})})})}}]),t}(l.Component);e.default=n},644:function(a,e,t){"use strict";var i,_=t(169);e.a=(i={BASE_URL:"https://api-soida.applamdep.com",BASE_URL_CURRENT:"https://id.applamdep.com/",LIST_USER:"/api/list-user",LIST_USER_WITH_ID:"/api/list-user?id=",ADD_USER:"/api/add-user",UPDATE_USER:"/api/update-user",DELETE_USER:"/api/delete-user",LOGIN_ADMIN:"/api/login_admin",GET_SHOP:"/api/get-shop",GET_SALE:"/api/get-sale",GET_COEFFICIENT:"/api/calculator-coefficient-user",GET_COEFFICIENT_PER_SALE:"/api/calculator-coefficient-user-per-sale",GET_USER_SALE_BY_MONTH:"/api/get-user-of-sale-by-month",CALCULATOR_ALL_USER_OF_COMPANY:"/api/calculator-all-user-company",CALCULATOR_ALL_USER_OF_SALE:"/api/calculator-all-user-of-sale",GET_SEEDER:"/api/get-seed",GET_SALE_NAME:"/api/get-name-sale",GET_USER_BY_ID:"/api/get-user-byID",LIST_CUSTOMER:"/api/list-customer",LIST_CUSTOMER_BY_MONTH:"/api/get-user-sale-by-month",LIST_TYPEKEY:"/api/list-typekey",LIST_TYPEKEY_WITH_ID:"/api/list-typekey?id=",ADD_TYPEKEY:"/api/add-typekey",UPDATE_TYPEKEY:"/api/update-typekey",DELETE_TYPEKEY:"/api/delete-typekey",LIST_HARDWARE:"/api/list-hardware",LIST_HARDWARE_WITH_ID:"/api/list-hardware?id=",ADD_HARDWARE:"/api/add-hardware",UPDATE_HARDWARE:"/api/update-hardware",DELETE_HARDWARE:"/api/delete-hardware",LIST_ORDER:"/api/list-order",ADD_ORDER:"/api/add-order",UPDATE_STATUS_ORDER:"/api/update-status-order",CHECK_OUT:"/api/checkout-order",LIST_TRANSACTION:"/api/list-transaction",ADD_TRANSACTION:"/api/add-transaction",LIST_CHECK_OUT:"/api/list-checkout",LIST_HARDWARE_CHECKOUT:"/api/get-list-hardward-by-check-out",UPDATE_STATUS_CHECKOUT:"/api/update-status-hardware",LIST_ORDER_DETAIL:"/api/list-orderdetail",ADD_ORDER_DETAIL:"/api/add-orderdetail",LIST_ROLE:"/api/list-role",LIST_ROLE_WITH_ID:"/api/list-role?id=",ADD_ROLE:"/api/add-role",UPDATE_ROLE:"/api/update-role",DELETE_ROLE:"/api/delete-role",LIST_PACKAGE:"/api/list-package",ADD_PACKAGE:"/api/add-package",UPDATE_PACKAGE:"/api/update-package",DELETE_PACKAGE:"/api/delete-package",PLUGIN_DATA_PACKAGE:"/api/get-name-package",LIST_SALELOG:"/api/list-salelog",LIST_SALELOG_WITH_ID:"/api/list-salelog?id=",ADD_SALELOG:"/api/add-salelog",UPDATE_SALELOG:"/api/update-salelog",DELETE_SALELOG:"/api/delete-salelog",DATA_SALE:"/api/get-data-sale",LIST_SALE:"/api/list-sale",LIST_SALE_WITH_ID:"/api/list-sale?id=",ADD_SALE:"/api/add-sale",UPDATE_SALE:"/api/update-sale",DELETE_SALE:"/api/delete-sale",LIST_KEYORDER:"/api/list-keyorder",LIST_KEYORDER_WITH_ID:"/api/list-keyorder?id=",ADD_KEYORDER:"/api/add-keyorder",UPDATE_KEYORDER:"/api/update-keyorder",DELETE_KEYORDER:"/api/delete-keyorder",LIST_KEY:"/api/list-key",LIST_KEY_WITH_ID:"/api/list-key?id=",ADD_KEY:"/api/add-key",UPDATE_KEY:"/api/update-key",DELETE_KEY:"/api/delete-key",PLUGIN_LIST_COMPANY:"/api/plugin-list-company",PLUGIN_LIST_COMPANY_BY_ID:"/api/plugin-list-company-by-id",PLUGIN_LIST_COMPANY_WITH_ID:"/api/plugin-list-company?id=",PLUGIN_ADD_COMPANY:"/api/plugin-add-company",PLUGIN_UPDATE_COMPANY:"/api/plugin-update-company",PLUGIN_DELETE_COMPANY:"/api/plugin-delete-company",PLUGIN_DATA_COMPANY:"/api/plugin-get-data-company",LIST_COMPANY:"/api/list-company",LIST_COMPANY_WITH_ID:"/api/list-company?id=",ADD_COMPANY:"/api/add-company",UPDATE_COMPANY:"/api/update-company",DELETE_COMPANY:"/api/delete-company",DATA_COMPANY:"/api/get-data-company",LIST_LINK:"/api/list-link",LIST_LINK_WITH_ID:"/api/list-link?id=",ADD_LINK:"/api/add-link",UPDATE_LINK:"/api/update-link",DELETE_LINK:"/api/delete-link","GET-LINK-BY-ID":"/api/link-by-id",LIST_FEATURE:"/api/list-feature",ADD_FEATURE:"/api/add-feature",UPDATE_FEATURE:"/api/update-feature",DELETE_FEATURE:"/api/delete-feature",DATA_CHOOSE_FEATURE:"/api/get-feature-choose",LIST_PLUGIN_ORDER:"/api/plugin-list-order",COUNT_PLUGIN_ORDER:"/api/plugin-count-order",LIST_PLUGIN_ORDER_BY_ID:"/api/plugin-list-order-by-id",LIST_PLUGIN_ORDER_FOR_ADMIN:"/api/plugin-list-order-for-admin",LIST_ORDER_BY_SALE:"/api/plugin-list-order-by-saleid",ADD_PLUGIN_ORDER:"/api/plugin-add-order",UPDATE_PLUGIN_ORDER:"/api/plugin-update-order",DELETE_PLUGIN_ORDER:"/api/plugin-delete-order",UPDATE_SLUG:"/api/plugin-update-slug",PLUGIN_LIST_USER:"/api/plugin-list-user",PLUGIN_ALL_USER:"/api/plugin-all-user",PLUGIN_ADD_USER:"/api/plugin-add-user",PLUGIN_ADD_SALE:"/api/plugin-add-sale",PLUGIN_UPDATE_USER:"/api/plugin-update-user",PLUGIN_UPDATE_USER_COMPANY:"/api/plugin-update-user-company",PLUGIN_DELETE_USER:"/api/plugin-delete-user",PLUGIN_RESET_PASSWORD:"/api/plugin-reset-password",PLUGIN_CHANGE_PASSWORD:"/api/plugin-change",PLUGIN_CHECK_LINK:"/api/plugin-check-link",PLUGIN_UPDATE_PASSWORD:"/api/plugin-update-password",PLUGIN_UPDATE_STATUS:"/api/plugin-update-status",PLUGIN_LOGIN_ADMIN:"/api/plugin-login_admin",PLUGIN_FORGOT_PASS:"/api/plugin-forgot-password",PLUGIN_GET_USER_BYID:"/api/plugin-get-user-byID",PLUGIN_GET_USER_BY_BODY:"/api/plugin-get-user-byID-with-body",PLUGIN_LIST_ROLE:"/api/plugin-list-role",PLUGIN_ADD_ROLE:"/api/plugin-add-role",PLUGIN_UPDATE_ROLE:"/api/plugin-update-role",PLUGIN_DELETE_ROLE:"/api/plugin-delete-role",CUS_RES_LIST:"/api/list-customer-request",CUS_RES_LIST_COMPANY:"/api/list-customer-request-for-company",CUS_RES_ADD:"/api/add-customer-request",CUS_RES_UPDATE:"/api/update-customer-request",CUS_RES_DELETE:"/api/delete-customer-request",REWARD_INFO_LIST:"/api/list-reward-info",REWARD_INFO_LIST_COMPANY:"/api/list-reward-info-for-company",REWARD_INFO_ADD:"/api/add-reward-info",REWARD_INFO_UPDATE:"/api/update-reward-info",REWARD_INFO_DELETE:"/api/delete-reward-info",REWARD_TRANS_LIST:"/api/list-reward-trans",REWARD_TRANS_ADD:"/api/list-reward-trans",REWARD_TRANS_UPDATE:"/api/update-reward-trans",REWARD_TRANS_DELETE:"/api/delete-reward-trans",TYPE_REQUEST_LIST:"/api/list-type-request",TYPE_REQUEST_ADD:"/api/add-type-request",TYPE_REQUEST_UPDATE:"/api/update-type-request",TYPE_REQUEST_DELETE:"/api/delete-type-request"},Object(_.a)(i,"LIST_CUSTOMER","/api/list-customer"),Object(_.a)(i,"LIST_CUSTOMER_FOR_COMPANY","/api/list-customer-for-company"),Object(_.a)(i,"LIST_CUSTOMER_FOR_COMPANY_BY_MONTH","/api/list-customer-for-company-by-month"),Object(_.a)(i,"LIST_SUGGEST_ITEM","/itemSdk"),Object(_.a)(i,"LIST_SUGGEST_ITEM_COMPANY","/itemSdk/"),Object(_.a)(i,"LIST_SUGGEST_ITEM_ADMIN","/itemSdk/admin/"),Object(_.a)(i,"SEARCH_SUGGEST_ITEM_ADMIN","/itemSdk/admin/search/"),Object(_.a)(i,"SEARCH_SUGGEST_ITEM_COMPANY","/itemSdk/search/"),Object(_.a)(i,"ADD_SUGGEST_ITEM","/itemSdk"),Object(_.a)(i,"UPDATE_SUGGEST_ITEM","/itemSdk/"),Object(_.a)(i,"DELETE_SUGGEST_ITEM","/itemSdk/deleteItem"),Object(_.a)(i,"LIST_SDK","/sdk"),Object(_.a)(i,"LIST_BRAND","/brands"),Object(_.a)(i,"LIST_BRAND_COMPANY","/brands/"),Object(_.a)(i,"ADD_BRAND","/add-brand"),Object(_.a)(i,"UPDATE_BRAND","/update-brand"),Object(_.a)(i,"DELETE_BRAND","/delete-brand"),Object(_.a)(i,"LIST_BRAND_PLUGIN","/brand-plugin"),Object(_.a)(i,"LIST_BRAND_PLUGIN_COMPANY","/brand-plugin/"),Object(_.a)(i,"ADD_BRAND_PLUGIN","/add-brand-plugin"),Object(_.a)(i,"UPDATE_BRAND_PLUGIN","/update-brand-plugin"),Object(_.a)(i,"DELETE_BRAND_PLUGIN","/delete-brand-plugin"),Object(_.a)(i,"LIST_PRODUCT","/product"),Object(_.a)(i,"LIST_PRODUCT_COMPANY","/product/"),Object(_.a)(i,"ADD_PRODUCT","/add-product"),Object(_.a)(i,"UPDATE_PRODUCT","/update-product"),Object(_.a)(i,"DELETE_PRODUCT","/delete-product"),Object(_.a)(i,"LIST_TYPE","/types"),Object(_.a)(i,"LIST_TYPE_COMPANY","/types/"),Object(_.a)(i,"ADD_TYPE","/add-type"),Object(_.a)(i,"UPDATE_TYPE","/update-type"),Object(_.a)(i,"DELETE_TYPE","/delete-type"),Object(_.a)(i,"LIST_COLOR","/colors"),Object(_.a)(i,"LIST_COLOR_COMPANY","/colors/"),Object(_.a)(i,"LIST_COLOR_SELECT","/color-select"),Object(_.a)(i,"ADD_COLOR","/add-color"),Object(_.a)(i,"UPDATE_COLOR","/update-color"),Object(_.a)(i,"DELETE_COLOR","/delete-color"),Object(_.a)(i,"LIST_HISTORY_SKIN","/api/get-history-skin"),Object(_.a)(i,"LIST_HISTORY_SKIN_BY_CONDITION","/api/get-history-skin-by-condition"),Object(_.a)(i,"ADD_HISTORY_SKIN","/api/add-history-skin"),Object(_.a)(i,"LIST_TYPE_PRODUCT","/api/list-type-product"),Object(_.a)(i,"ADD_TYPE_PRODUCT","/api/add-type-product"),Object(_.a)(i,"UPDATE_TYPE_PRODUCT","/api/update-type-product"),Object(_.a)(i,"DELETE_TYPE_PRODUCT","/api/delete-type-product"),Object(_.a)(i,"LIST_TYPE_SDK","/api/list-type-sdk"),Object(_.a)(i,"ADD_TYPE_SDK","/api/add-type-sdk"),Object(_.a)(i,"UPDATE_TYPE_SDK","/api/update-type-sdk"),Object(_.a)(i,"DELETE_TYPE_SDK","/api/delete-type-sdk"),Object(_.a)(i,"LIST_CONTACT_CUSTOMER","/api/list-contact-customers"),Object(_.a)(i,"ADD_CONTACT_CUSTOMER","/api/add-contact-customers"),Object(_.a)(i,"UPDATE_CONTACT_CUSTOMER","/api/update-contact-customers"),Object(_.a)(i,"DELETE_CONTACT_CUSTOMER","/api/delete-contact-customers"),Object(_.a)(i,"UPDATE_CONTACT_STATUS","/api/update-contact-status"),Object(_.a)(i,"LOGIN_ADMIN_APP","/api/login-admin"),i)},661:function(a,e,t){"use strict";var i=t(12),_=t(29),p=t(657),E=t(35),l=t(2),d=t.n(l),T=t(64),r=t.n(T),c=t(648),s=t.n(c),n=t(650),o={active:r.a.bool,"aria-label":r.a.string,block:r.a.bool,color:r.a.string,disabled:r.a.bool,outline:r.a.bool,tag:n.n,innerRef:r.a.oneOfType([r.a.object,r.a.func,r.a.string]),onClick:r.a.func,size:r.a.string,children:r.a.node,className:r.a.string,cssModule:r.a.object,close:r.a.bool},D=function(a){function e(e){var t;return(t=a.call(this,e)||this).onClick=t.onClick.bind(Object(p.a)(t)),t}Object(E.a)(e,a);var t=e.prototype;return t.onClick=function(a){if(!this.props.disabled)return this.props.onClick?this.props.onClick(a):void 0;a.preventDefault()},t.render=function(){var a=this.props,e=a.active,t=a["aria-label"],p=a.block,E=a.className,l=a.close,T=a.cssModule,r=a.color,c=a.outline,o=a.size,D=a.tag,A=a.innerRef,O=Object(_.a)(a,["active","aria-label","block","className","close","cssModule","color","outline","size","tag","innerRef"]);l&&"undefined"===typeof O.children&&(O.children=d.a.createElement("span",{"aria-hidden":!0},"\xd7"));var L="btn"+(c?"-outline":"")+"-"+r,u=Object(n.j)(s()(E,{close:l},l||"btn",l||L,!!o&&"btn-"+o,!!p&&"btn-block",{active:e,disabled:this.props.disabled}),T);O.href&&"button"===D&&(D="a");var S=l?"Close":null;return d.a.createElement(D,Object(i.a)({type:"button"===D&&O.onClick?"button":void 0},O,{className:u,ref:A,onClick:this.onClick,"aria-label":t||S}))},e}(d.a.Component);D.propTypes=o,D.defaultProps={color:"secondary",tag:"button"},e.a=D}}]);
//# sourceMappingURL=28.c8625d80.chunk.js.map