(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[34],{1245:function(e,a,t){"use strict";t.r(a);var i=t(165),r=t(114),s=t.n(r),p=t(662),_=t(167),E=t(168),n=t(170),d=t(169),l=t(2),o=t(1242),c=t(676),T=t(677),u=t(1243),D=t(832),L=t(865),A=t(1244),O=t(685),S=t(837),I=t(649),R=t(661),P=t.n(R),U=t(906),N=t.n(U),b=t(647),m=t(680),y=t.n(m),j=t(20),g=function(e){Object(n.a)(t,e);var a=Object(d.a)(t);function t(e){var i;return Object(_.a)(this,t),(i=a.call(this,e)).state={username:"",password:"",errors:{},isLoading:!1},localStorage.removeItem("auth"),"/logout"===i.props.location.pathname&&(window.location.href="#/login"),i}return Object(E.a)(t,[{key:"isValid",value:function(){var e=Object(S.a)(this.state),a=e.errors,t=e.isValid;return t||this.setState({errors:a}),t}},{key:"onSubmit",value:function(){var e=Object(p.a)(s.a.mark((function e(a){var t,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),!this.isValid()){e.next=7;break}return this.setState({errors:{},isLoading:!0}),e.next=5,P()({baseURL:b.a.BASE_URL,url:b.a.PLUGIN_LOGIN_ADMIN,method:"POST",data:{username:this.state.username,password:y()(this.state.password)}});case 5:(t=e.sent).data.is_success?(i=N.a.decode(t.data.data.token),localStorage.setItem("user",JSON.stringify({username:this.state.username,password:this.state.password,company_id:t.data.data.data.Company_Id,sale_id:t.data.data.data._id})),localStorage.setItem("auth","abv"),localStorage.setItem("role",i.role),localStorage.setItem("type",i.type),localStorage.setItem("token",t.data.data.token),"0"==i.type||"1"==i.type?this.props.history.push("/list_order"):this.props.history.push("/profile")):(console.log(this.state.username),console.log(this.state.password),this.setState({isLoading:!1,errors:{common:"Username or password is incorrect"}}));case 7:case"end":return e.stop()}}),e,this)})));return function(a){return e.apply(this,arguments)}}()},{key:"onChange",value:function(e){this.setState(Object(i.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){var e=this,a=this.state,t=a.errors,i=a.username,r=a.password,_=a.isLoading;return Object(j.jsx)("div",{className:"app flex-row align-items-center mt-5",children:Object(j.jsx)(o.a,{children:Object(j.jsx)(c.a,{className:"justify-content-center",children:Object(j.jsx)(T.a,{md:"4",children:Object(j.jsx)("form",{onSubmit:function(){var a=Object(p.a)(s.a.mark((function a(t){return s.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.onSubmit(t);case 2:return a.abrupt("return",a.sent);case 3:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}(),children:Object(j.jsx)(u.a,{children:Object(j.jsx)(D.a,{className:"p-4",children:Object(j.jsxs)(L.a,{children:[Object(j.jsx)("h1",{children:"Login"}),Object(j.jsx)("span",{className:"error",children:t.common}),Object(j.jsx)(A.a,{className:"mb-3",children:Object(j.jsx)(I.a,{field:"username",label:"Username",value:i,error:t.username,onChange:function(a){return e.onChange(a)}})}),Object(j.jsx)(A.a,{className:"mb-4",children:Object(j.jsx)(I.a,{type:"password",field:"password",label:"Password",value:r,error:t.password,onChange:function(a){return e.onChange(a)}})}),Object(j.jsx)(c.a,{children:Object(j.jsx)(T.a,{xs:"6",children:Object(j.jsx)(O.a,{color:"primary",className:"px-4",disabled:_,children:"Login"})})})]})})})})})})})})}}]),t}(l.Component);a.default=g},647:function(e,a,t){"use strict";var i,r=t(165);a.a=(i={BASE_URL:"https://api-soida.applamdep.com",BASE_URL_CURRENT:"http://localhost:3003",LIST_USER:"/api/list-user",LIST_USER_WITH_ID:"/api/list-user?id=",ADD_USER:"/api/add-user",UPDATE_USER:"/api/update-user",DELETE_USER:"/api/delete-user",LOGIN_ADMIN:"/api/login_admin",GET_SHOP:"/api/get-shop",GET_SALE:"/api/get-sale",GET_COEFFICIENT:"/api/calculator-coefficient-user",GET_COEFFICIENT_PER_SALE:"/api/calculator-coefficient-user-per-sale",GET_USER_SALE_BY_MONTH:"/api/get-user-of-sale-by-month",CALCULATOR_ALL_USER_OF_COMPANY:"/api/calculator-all-user-company",CALCULATOR_ALL_USER_OF_SALE:"/api/calculator-all-user-of-sale",GET_SEEDER:"/api/get-seed",GET_SALE_NAME:"/api/get-name-sale",GET_USER_BY_ID:"/api/get-user-byID",LIST_CUSTOMER:"/api/list-customer",LIST_CUSTOMER_BY_MONTH:"/api/get-user-sale-by-month",LIST_TYPEKEY:"/api/list-typekey",LIST_TYPEKEY_WITH_ID:"/api/list-typekey?id=",ADD_TYPEKEY:"/api/add-typekey",UPDATE_TYPEKEY:"/api/update-typekey",DELETE_TYPEKEY:"/api/delete-typekey",LIST_HARDWARE:"/api/list-hardware",LIST_HARDWARE_WITH_ID:"/api/list-hardware?id=",ADD_HARDWARE:"/api/add-hardware",UPDATE_HARDWARE:"/api/update-hardware",DELETE_HARDWARE:"/api/delete-hardware",LIST_ORDER:"/api/list-order",LIST_ORDER_BY_SALE:"/api/plugin-list-order-by-saleid",ADD_ORDER:"/api/add-order",UPDATE_STATUS_ORDER:"/api/update-status-order",CHECK_OUT:"/api/checkout-order",LIST_TRANSACTION:"/api/list-transaction",ADD_TRANSACTION:"/api/add-transaction",LIST_CHECK_OUT:"/api/list-checkout",LIST_HARDWARE_CHECKOUT:"/api/get-list-hardward-by-check-out",UPDATE_STATUS_CHECKOUT:"/api/update-status-hardware",LIST_ORDER_DETAIL:"/api/list-orderdetail",ADD_ORDER_DETAIL:"/api/add-orderdetail",LIST_ROLE:"/api/list-role",LIST_ROLE_WITH_ID:"/api/list-role?id=",ADD_ROLE:"/api/add-role",UPDATE_ROLE:"/api/update-role",DELETE_ROLE:"/api/delete-role",LIST_PACKAGE:"/api/list-package",ADD_PACKAGE:"/api/add-package",UPDATE_PACKAGE:"/api/update-package",DELETE_PACKAGE:"/api/delete-package",PLUGIN_DATA_PACKAGE:"/api/get-name-package",LIST_SALELOG:"/api/list-salelog",LIST_SALELOG_WITH_ID:"/api/list-salelog?id=",ADD_SALELOG:"/api/add-salelog",UPDATE_SALELOG:"/api/update-salelog",DELETE_SALELOG:"/api/delete-salelog",DATA_SALE:"/api/get-data-sale",LIST_SALE:"/api/list-sale",LIST_SALE_WITH_ID:"/api/list-sale?id=",ADD_SALE:"/api/add-sale",UPDATE_SALE:"/api/update-sale",DELETE_SALE:"/api/delete-sale",LIST_KEYORDER:"/api/list-keyorder",LIST_KEYORDER_WITH_ID:"/api/list-keyorder?id=",ADD_KEYORDER:"/api/add-keyorder",UPDATE_KEYORDER:"/api/update-keyorder",DELETE_KEYORDER:"/api/delete-keyorder",LIST_KEY:"/api/list-key",LIST_KEY_WITH_ID:"/api/list-key?id=",ADD_KEY:"/api/add-key",UPDATE_KEY:"/api/update-key",DELETE_KEY:"/api/delete-key",PLUGIN_LIST_COMPANY:"/api/plugin-list-company",PLUGIN_LIST_COMPANY_BY_ID:"/api/plugin-list-company-by-id",PLUGIN_LIST_COMPANY_WITH_ID:"/api/plugin-list-company?id=",PLUGIN_ADD_COMPANY:"/api/plugin-add-company",PLUGIN_UPDATE_COMPANY:"/api/plugin-update-company",PLUGIN_DELETE_COMPANY:"/api/plugin-delete-company",PLUGIN_DATA_COMPANY:"/api/plugin-get-data-company",LIST_COMPANY:"/api/list-company",LIST_COMPANY_WITH_ID:"/api/list-company?id=",ADD_COMPANY:"/api/add-company",UPDATE_COMPANY:"/api/update-company",DELETE_COMPANY:"/api/delete-company",DATA_COMPANY:"/api/get-data-company",LIST_LINK:"/api/list-link",LIST_LINK_WITH_ID:"/api/list-link?id=",ADD_LINK:"/api/add-link",UPDATE_LINK:"/api/update-link",DELETE_LINK:"/api/delete-link","GET-LINK-BY-ID":"/api/link-by-id",LIST_FEATURE:"/api/list-feature",ADD_FEATURE:"/api/add-feature",UPDATE_FEATURE:"/api/update-feature",DELETE_FEATURE:"/api/delete-feature",DATA_CHOOSE_FEATURE:"/api/get-feature-choose",LIST_PLUGIN_ORDER:"/api/plugin-list-order",LIST_PLUGIN_ORDER_BY_ID:"/api/plugin-list-order-by-id",LIST_PLUGIN_ORDER_FOR_ADMIN:"/api/plugin-list-order-for-admin",ADD_PLUGIN_ORDER:"/api/plugin-add-order",UPDATE_PLUGIN_ORDER:"/api/plugin-update-order",DELETE_PLUGIN_ORDER:"/api/plugin-delete-order",UPDATE_SLUG:"/api/plugin-update-slug",PLUGIN_LIST_USER:"/api/plugin-list-user",PLUGIN_ALL_USER:"/api/plugin-all-user",PLUGIN_ADD_USER:"/api/plugin-add-user",PLUGIN_ADD_SALE:"/api/plugin-add-sale",PLUGIN_UPDATE_USER:"/api/plugin-update-user",PLUGIN_DELETE_USER:"/api/plugin-delete-user",PLUGIN_RESET_PASSWORD:"/api/plugin-reset-password",PLUGIN_UPDATE_PASSWORD:"/api/plugin-update-password",PLUGIN_UPDATE_STATUS:"/api/plugin-update-status",PLUGIN_LOGIN_ADMIN:"/api/plugin-login_admin",PLUGIN_GET_USER_BYID:"/api/plugin-get-user-byID",PLUGIN_GET_USER_BY_BODY:"/api/plugin-get-user-byID-with-body",PLUGIN_LIST_ROLE:"/api/plugin-list-role",PLUGIN_ADD_ROLE:"/api/plugin-add-role",PLUGIN_UPDATE_ROLE:"/api/plugin-update-role",PLUGIN_DELETE_ROLE:"/api/plugin-delete-role",CUS_RES_LIST:"/api/list-customer-request",CUS_RES_LIST_COMPANY:"/api/list-customer-request-for-company",CUS_RES_ADD:"/api/add-customer-request",CUS_RES_UPDATE:"/api/update-customer-request",CUS_RES_DELETE:"/api/delete-customer-request",REWARD_INFO_LIST:"/api/list-reward-info",REWARD_INFO_LIST_COMPANY:"/api/list-reward-info-for-company",REWARD_INFO_ADD:"/api/add-reward-info",REWARD_INFO_UPDATE:"/api/update-reward-info",REWARD_INFO_DELETE:"/api/delete-reward-info",REWARD_TRANS_LIST:"/api/list-reward-trans",REWARD_TRANS_ADD:"/api/list-reward-trans",REWARD_TRANS_UPDATE:"/api/update-reward-trans",REWARD_TRANS_DELETE:"/api/delete-reward-trans",TYPE_REQUEST_LIST:"/api/list-type-request",TYPE_REQUEST_ADD:"/api/add-type-request",TYPE_REQUEST_UPDATE:"/api/update-type-request",TYPE_REQUEST_DELETE:"/api/delete-type-request"},Object(r.a)(i,"LIST_CUSTOMER","/api/list-customer"),Object(r.a)(i,"LIST_CUSTOMER_FOR_COMPANY","/api/list-customer-for-company"),Object(r.a)(i,"LIST_SUGGEST_ITEM","/itemSdk"),Object(r.a)(i,"LIST_SUGGEST_ITEM_COMPANY","/itemSdk/"),Object(r.a)(i,"ADD_SUGGEST_ITEM","/itemSdk"),Object(r.a)(i,"UPDATE_SUGGEST_ITEM","/itemSdk/"),Object(r.a)(i,"DELETE_SUGGEST_ITEM","/itemSdk/deleteItem"),Object(r.a)(i,"LIST_SDK","/sdk"),Object(r.a)(i,"LIST_BRAND","/brands"),Object(r.a)(i,"LIST_BRAND_COMPANY","/brands/"),Object(r.a)(i,"ADD_BRAND","/add-brand"),Object(r.a)(i,"UPDATE_BRAND","/update-brand"),Object(r.a)(i,"DELETE_BRAND","/delete-brand"),Object(r.a)(i,"LIST_PRODUCT","/product"),Object(r.a)(i,"LIST_PRODUCT_COMPANY","/product/"),Object(r.a)(i,"ADD_PRODUCT","/add-product"),Object(r.a)(i,"UPDATE_PRODUCT","/update-product"),Object(r.a)(i,"DELETE_PRODUCT","/delete-product"),Object(r.a)(i,"LIST_TYPE","/types"),Object(r.a)(i,"LIST_TYPE_COMPANY","/types/"),Object(r.a)(i,"ADD_TYPE","/add-type"),Object(r.a)(i,"UPDATE_TYPE","/update-type"),Object(r.a)(i,"DELETE_TYPE","/delete-type"),Object(r.a)(i,"LIST_COLOR","/colors"),Object(r.a)(i,"LIST_COLOR_COMPANY","/colors/"),Object(r.a)(i,"ADD_COLOR","/add-color"),Object(r.a)(i,"UPDATE_COLOR","/update-color"),Object(r.a)(i,"DELETE_COLOR","/delete-color"),Object(r.a)(i,"LIST_HISTORY_SKIN","/api/get-history-skin"),Object(r.a)(i,"LIST_HISTORY_SKIN_BY_CONDITION","/api/get-history-skin-by-condition"),Object(r.a)(i,"ADD_HISTORY_SKIN","/api/add-history-skin"),Object(r.a)(i,"LIST_TYPE_PRODUCT","/api/list-type-product"),Object(r.a)(i,"ADD_TYPE_PRODUCT","/api/add-type-product"),Object(r.a)(i,"UPDATE_TYPE_PRODUCT","/api/update-type-product"),Object(r.a)(i,"DELETE_TYPE_PRODUCT","/api/delete-type-product"),Object(r.a)(i,"LIST_TYPE_SDK","/api/list-type-sdk"),Object(r.a)(i,"ADD_TYPE_SDK","/api/add-type-sdk"),Object(r.a)(i,"UPDATE_TYPE_SDK","/api/update-type-sdk"),Object(r.a)(i,"DELETE_TYPE_SDK","/api/delete-type-sdk"),i)},649:function(e,a,t){"use strict";t(2);var i=t(639),r=t.n(i),s=t(20),p=function(e){var a=e.field,t=e.value,i=e.label,p=e.error,_=e.type,E=e.onChange,n=e.checkUserExists,d=e.readOnly,l=e.placeholder,o=e.onClick;return Object(s.jsxs)("div",{className:r()("form-group",{"has-error":p}),children:[Object(s.jsx)("label",{className:"control-label",children:i}),Object(s.jsx)("input",{onChange:E,onClick:o,onBlur:n,value:t,type:_,name:a,placeholder:l,readOnly:d,className:"form-control"}),p&&Object(s.jsx)("span",{className:"help-block",children:p})]})};p.defaultProps={type:"text"},a.a=p},837:function(e,a,t){"use strict";t.d(a,"a",(function(){return _}));var i=t(882),r=t.n(i),s=t(874),p=t.n(s);function _(e){var a={};return r.a.isEmpty(e.username)&&(a.username="Please enter username"),r.a.isEmpty(e.password)&&(a.password="Please enter password"),{errors:a,isValid:p()(a)}}},911:function(e,a){},912:function(e,a){},919:function(e,a){},920:function(e,a){},944:function(e,a){},946:function(e,a){},947:function(e,a){},950:function(e,a){},951:function(e,a){},956:function(e,a){},957:function(e,a){},965:function(e,a){},971:function(e,a){},974:function(e,a){}}]);
//# sourceMappingURL=34.c835a65d.chunk.js.map