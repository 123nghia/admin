(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[30],{1136:function(a,e){},1138:function(a,e){},1152:function(a,e){},1154:function(a,e){},1182:function(a,e){},1184:function(a,e){},1185:function(a,e){},1190:function(a,e){},1192:function(a,e){},1198:function(a,e){},1200:function(a,e){},1219:function(a,e){},1231:function(a,e){},1234:function(a,e){},1344:function(a,e,t){"use strict";t.r(e);var i=t(170),r=t(114),s=t.n(r),d=t(663),n=t(166),o=t(167),p=t(169),l=t(168),E=t(2),_=t(1297),c=t(684),T=t(685),u=t(1298),D=t(773),A=t(774),L=t(1299),O=t(681),R=t(1037),S=t.n(R),h=t(1011),I=t.n(h);var m=t(665),C=t(667),y=t.n(C),b=t(1133),U=t.n(b),f=t(650),P=t(873),N=t.n(P),g=t(20),Y=function(a){Object(p.a)(t,a);var e=Object(l.a)(t);function t(a){var i;return Object(n.a)(this,t),(i=e.call(this,a)).state={username:"",password:"",errors:{},isLoading:!1},localStorage.removeItem("auth"),"/logout"===i.props.location.pathname&&(window.location.href="#/login"),i}return Object(o.a)(t,[{key:"isValid",value:function(){var a=function(a){var e={};return S.a.isEmpty(a.username)&&(e.username="Please enter username"),S.a.isEmpty(a.password)&&(e.password="Please enter password"),{errors:e,isValid:I()(e)}}(this.state),e=a.errors,t=a.isValid;return t||this.setState({errors:e}),t}},{key:"onSubmit",value:function(){var a=Object(d.a)(s.a.mark((function a(e){var t,i;return s.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(e.preventDefault(),!this.isValid()){a.next=7;break}return this.setState({errors:{},isLoading:!0}),a.next=5,y()({baseURL:f.a.BASE_URL,url:f.a.LOGIN_ADMIN,method:"POST",data:{username:this.state.username,password:N()(this.state.password)}});case 5:(t=a.sent).data.is_success?(i=U.a.decode(t.data.data.token),localStorage.setItem("user",JSON.stringify({username:this.state.username,password:this.state.password,company_id:t.data.data.data.Company_Id,sale_id:t.data.data.data._id})),localStorage.setItem("auth","abv"),localStorage.setItem("role",i.role),localStorage.setItem("token",t.data.data.token),this.props.history.push("/dashboard")):(console.log(this.state.username),console.log(this.state.password),this.setState({isLoading:!1,errors:{common:"Username or password is incorrect"}}));case 7:case"end":return a.stop()}}),a,this)})));return function(e){return a.apply(this,arguments)}}()},{key:"onChange",value:function(a){this.setState(Object(i.a)({},a.target.name,a.target.value))}},{key:"render",value:function(){var a=this,e=this.state,t=e.errors,i=e.username,r=e.password,n=e.isLoading;return Object(g.jsx)("div",{className:"app flex-row align-items-center mt-5",children:Object(g.jsx)(_.a,{children:Object(g.jsx)(c.a,{className:"justify-content-center",children:Object(g.jsx)(T.a,{md:"4",children:Object(g.jsx)("form",{onSubmit:function(){var e=Object(d.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.onSubmit(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),children:Object(g.jsx)(u.a,{children:Object(g.jsx)(D.a,{className:"p-4",children:Object(g.jsxs)(A.a,{children:[Object(g.jsx)("h1",{children:"\u0110\u0103ng nh\u1eadp"}),Object(g.jsx)("span",{className:"error",children:t.common}),Object(g.jsx)(L.a,{className:"mb-3",children:Object(g.jsx)(m.a,{field:"username",label:"T\xean \u0111\u0103ng nh\u1eadp",value:i,error:t.username,placeholder:"T\xean \u0111\u0103ng nh\u1eadp",onChange:function(e){return a.onChange(e)}})}),Object(g.jsx)(L.a,{className:"mb-4",children:Object(g.jsx)(m.a,{type:"password",field:"password",label:"M\u1eadt kh\u1ea9u",value:r,placeholder:"M\u1eadt kh\u1ea9u",error:t.password,onChange:function(e){return a.onChange(e)}})}),Object(g.jsx)(c.a,{children:Object(g.jsx)(T.a,{xs:"6",children:Object(g.jsx)(O.a,{color:"primary",className:"px-4",disabled:n,children:"\u0110\u0103ng nh\u1eadp"})})})]})})})})})})})})}}]),t}(E.Component);e.default=Y},650:function(a,e,t){"use strict";e.a={BASE_URL:"https://admin-api.tikitech.vn",LIST_USER:"/api/list-user",LIST_USER_WITH_ID:"/api/list-user?id=",ADD_USER:"/api/add-user",UPDATE_USER:"/api/update-user",DELETE_USER:"/api/delete-user",LOGIN_ADMIN:"/api/login_admin",GET_SHOP:"/api/get-shop",GET_SALE:"/api/get-sale",GET_COEFFICIENT:"/api/calculator-coefficient-user",GET_COEFFICIENT_PER_SALE:"/api/calculator-coefficient-user-per-sale",GET_USER_SALE_BY_MONTH:"/api/get-user-of-sale-by-month",CALCULATOR_ALL_USER_OF_COMPANY:"/api/calculator-all-user-company",CALCULATOR_ALL_USER_OF_SALE:"/api/calculator-all-user-of-sale",GET_SEEDER:"/api/get-seed",GET_SALE_NAME:"/api/get-name-sale",GET_USER_BY_ID:"/api/get-user-byID",LIST_CUSTOMER:"/api/list-customer",LIST_CUSTOMER_V2:"/api/list-customer-v2",LIST_CUSTOMER_BY_MONTH:"/api/get-user-sale-by-month",LIST_CUSTOMER_BY_MONTH_ADMIN:"/api/get-user-by-month-admin",LIST_TYPEKEY:"/api/list-typekey",LIST_TYPEKEY_WITH_ID:"/api/list-typekey?id=",ADD_TYPEKEY:"/api/add-typekey",UPDATE_TYPEKEY:"/api/update-typekey",DELETE_TYPEKEY:"/api/delete-typekey",LIST_HARDWARE:"/api/list-hardware",LIST_HARDWARE_WITH_ID:"/api/list-hardware?id=",ADD_HARDWARE:"/api/add-hardware",UPDATE_HARDWARE:"/api/update-hardware",DELETE_HARDWARE:"/api/delete-hardware",LIST_ORDER:"/api/list-order-hardward",ADD_ORDER:"/api/add-order",UPDATE_STATUS_ORDER:"/api/update-status-order",LIST_TRANSACTION:"/api/list-transaction",ADD_TRANSACTION:"/api/add-transaction",LIST_CHECK_OUT:"/api/list-checkout",LIST_HARDWARE_CHECKOUT:"/api/get-list-hardward-by-check-out",UPDATE_STATUS_CHECKOUT:"/api/update-status-hardware",LIST_ORDER_DETAIL:"/api/list-orderdetail",LIST_ORDER_DETAIL_COMPANY:"/api/list-order-detail",UPDATE_STATUS_HARDWARE_COMPANY:"/api/update-status-hardware",LIST_ROLE:"/api/list-role",LIST_ROLE_WITH_ID:"/api/list-role?id=",ADD_ROLE:"/api/add-role",UPDATE_ROLE:"/api/update-role",DELETE_ROLE:"/api/delete-role",LIST_SALELOG:"/api/list-salelog",LIST_SALELOG_WITH_ID:"/api/list-salelog?id=",ADD_SALELOG:"/api/add-salelog",UPDATE_SALELOG:"/api/update-salelog",DELETE_SALELOG:"/api/delete-salelog",DATA_SALE:"/api/get-data-sale",LIST_SALE:"/api/list-sale",LIST_SALE_WITH_ID:"/api/list-sale?id=",ADD_SALE:"/api/add-sale",UPDATE_SALE:"/api/update-sale",DELETE_SALE:"/api/delete-sale",LIST_KEYORDER:"/api/list-keyorder",LIST_KEYORDER_WITH_ID:"/api/list-keyorder?id=",ADD_KEYORDER:"/api/add-keyorder",UPDATE_KEYORDER:"/api/update-keyorder",DELETE_KEYORDER:"/api/delete-keyorder",LIST_KEY:"/api/list-key",LIST_KEY_WITH_ID:"/api/list-key?id=",ADD_KEY:"/api/add-key",UPDATE_KEY:"/api/update-key",DELETE_KEY:"/api/delete-key",LIST_COMPANY:"/api/list-company",LIST_COMPANY_WITH_ID:"/api/list-company?id=",ADD_COMPANY:"/api/add-company",UPDATE_COMPANY:"/api/update-company",DELETE_COMPANY:"/api/delete-company",DATA_COMPANY:"/api/get-data-company",LIST_LINK:"/api/list-link",LIST_LINK_WITH_ID:"/api/list-link?id=",ADD_LINK:"/api/add-link",UPDATE_LINK:"/api/update-link",DELETE_LINK:"/api/delete-link","GET-LINK-BY-ID":"/api/link-by-id",LIST_CHECKED_ORDER:"/api/list-order-checked",ADD_CHECKED_ORDER:"/api/add-order-checked",LIST_CHECKED_PRODUCT:"/api/list-product-checked",ADD_CHECKED_PRODUCT:"/api/add-product-checked",LIST_BRAND_HARDWARE:"/api/list-brand-hardward",ADD_BRAND_HARDWARE:"/api/add-brand-hardward",UPDATE_BRAND_HARDWARE:"/api/update-brand-hardward",DELETE_BRAND_HARDWARE:"/api/delete-brand-hardward",UPLOAD_BRAND:"/api/upload-image-brand",LIST_PRODUCT_HARDWARE:"/api/list-product-hardward",ADD_PRODUCT_HARDWARE:"/api/add-product-hardward",UPDATE_PRODUCT_HARDWARE:"/api/update-product-hardward",DELETE_PRODUCT_HARDWARE:"/api/delete-product-hardward",UPLOAD_PRODUCT:"/api/upload-image-product",LIST_CATEGORY:"/api/list-category",ADD_CATEGORY:"/api/add-category",UPDATE_CATEGORY:"/api/update-category",DELETE_CATEGORY:"/api/delete-category",UPLOAD_CATEGORY:"/api/upload-category",ADMIN_CHART:"/api/admin-chart",COMPANY_CHART:"/api/company-chart",SALE_CHART:"/api/sale-chart",LIST_CONFIG:"/api/list-config",CONFIG_BY_ID:"/api/config-by-id",UPDATE_CONFIG:"/api/update-config",LIST_HISTORY:"/api/list-history",LIST_DETAIL_CUSTOMER:"/api/list-detail-customer",LIST_HISTORY_BY_SALE:"/api/list-history-by-sale",LIST_HISTORY_BY_PHONE:"/api/list-history-by-phone",ADD_HISTORY:"/api/add-history",GET_LIST_BRAND:"/brands",ADD_BRAND:"/add-brand",UPDATE_BRAND:"/update-brand",DELETE_BRAND:"/delete-brand",GET_LIST_TYPE:"/types",ADD_TYPE:"/add-type",UPDATE_TYPE:"/update-type",DELETE_TYPE:"/delete-type",GET_LIST_COLOR:"/v2/color",ADD_COLOR:"/v2/add-color",UPDATE_COLOR:"/v2/update-color",DELETE_COLOR:"/delete-color",GET_LIST_HAIR_COLOR:"/v2/color-hair",GET_LIST_PRODUCT:"/v2/product",ADD_PRODUCT:"/v2/add-product",UPDATE_PRODUCT:"/v2/update-product",DELETE_PRODUCT:"/delete-product",GET_LIST_HAIR:"/v2/hair",GET_LIST_SUGGEST:"/itemSdk"}},665:function(a,e,t){"use strict";t(2);var i=t(640),r=t.n(i),s=t(20),d=function(a){var e=a.field,t=a.value,i=a.label,d=a.error,n=a.type,o=a.onChange,p=a.checkUserExists,l=a.readOnly,E=a.placeholder,_=a.disabled;return Object(s.jsxs)("div",{className:r()("form-group",{"has-error":d}),children:[Object(s.jsx)("label",{className:"control-label",children:i}),Object(s.jsx)("input",{onChange:o,onBlur:p,value:t,disabled:_,type:n,name:e,placeholder:E,readOnly:l,className:"form-control"}),d&&Object(s.jsx)("span",{className:"help-block",children:d})]})};d.defaultProps={type:"text"},e.a=d}}]);
//# sourceMappingURL=30.4df5240b.chunk.js.map