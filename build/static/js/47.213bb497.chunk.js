(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[47],{1284:function(e,a,t){"use strict";t.r(a);var i=t(166),r=t(167),n=t(169),p=t(168),s=t(2),_=t(653),l=(t(663),t(655)),d=t.n(l),o=t(645),c=(t(31),t(686)),E=t(832),u=t(20),T=(Object(E.getStyle)("success"),Object(E.getStyle)("info"),Object(E.getStyle)("danger"),t(115)),A=t.n(T),D=t(657),L=(t(173),t(679)),I=new Headers,S=localStorage.getItem("auth");I.append("Authorization","Bearer "+S),I.append("Content-Type","application/json");s.Component;var g=new Headers,R=localStorage.getItem("auth");g.append("Authorization","Bearer "+R),g.append("Content-Type","application/json");s.Component;var O,h=t(170),y=t(676),U=t(1223),m=t(662),P=t(673),N=t.n(P),f=new Headers,b=localStorage.getItem("auth");f.append("Authorization","Bearer "+b),f.append("Content-Type","application/json");var j=function(e){Object(n.a)(t,e);var a=Object(p.a)(t);function t(e){var r;return Object(i.a)(this,t),(r=a.call(this,e)).state={company_name:"",company_slug:"",package_name:"",package_time:"",package_unit:"",array_feature:[],company_id:localStorage.getItem("user"),token:{Authorization:"Bearer ".concat(localStorage.getItem("token"))},isLoading:!1},r}return Object(r.a)(t,[{key:"componentWillMount",value:function(){var e=Object(D.a)(A.a.mark((function e(){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getCompanyData();case 2:return e.next=4,this.getPackageData();case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getCompanyData",value:function(){var e=Object(D.a)(A.a.mark((function e(){var a;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d()({baseURL:o.a.BASE_URL,url:o.a.PLUGIN_DATA_COMPANY,method:"POST",data:{company_id:JSON.parse(this.state.company_id).company_id}});case 2:a=e.sent,console.log(JSON.parse(this.state.company_id)),this.setState({company_name:a.data.data.Name,company_slug:a.data.data.Slug});case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getPackageData",value:function(){var e=Object(D.a)(A.a.mark((function e(){var a,t,i,r,n,p,s;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({isLoading:!0}),e.next=3,d()({baseURL:o.a.BASE_URL,url:o.a.LIST_PLUGIN_ORDER_BY_ID,method:"POST",headers:this.state.token});case 3:for(a=e.sent,t=a.data.data.result,i=[],r=[],n=0;n<t.length;n++)for(p=t[n].Array_Feature,s=0;s<p.length;s++)0==r.includes(p[s]._id)&&i.push(p[s]),r.push(p[s]._id);this.setState({array_feature:t.length>0?i:[],isLoading:!1});case 9:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,a=e.array_feature,t=e.company_slug;return this.state.isLoading?Object(u.jsx)("div",{className:"sweet-loading",children:Object(u.jsx)(N.a,{css:C,size:50,color:"#123abc",loading:this.state.isLoading,speedMultiplier:1.5})}):Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)("div",{class:"title",className:"h3",style:{alignSelf:"center"},children:"Danh s\xe1ch qu\u1ea3n l\xfd c\xe1c t\xednh n\u0103ng Admin"}),Object(u.jsx)(_.N,{children:void 0!=a?a.map((function(e,a){if("0"==e.Type)return Object(u.jsxs)(_.j,{lg:"3",sm:"12",xm:"12",children:[Object(u.jsx)("a",{"data-tip":"".concat(e.Value+t),style:{cursor:"pointer",margin:5},href:e.Value+"#/"+t,target:"_blank",children:Object(u.jsxs)("div",{style:k.feature,children:[Object(u.jsx)("div",{style:{height:"200px",width:"100%",marginTop:"24px"},children:Object(u.jsx)("img",{width:"80",height:"80",src:e.Image})}),Object(u.jsx)("div",{className:"feature__body",children:Object(u.jsxs)("center",{children:[Object(u.jsx)("div",{style:{width:"80%",height:50,alignItems:"center",fontSize:17,fontWeight:"bold"},children:e.Key}),Object(u.jsxs)("div",{style:{width:"80",height:70,fontSize:12},children:["Nh\u1ea5p v\xe0o \u0111\xe2y \u0111\u1ec3 chuy\u1ec3n h\u01b0\u1edbng \u0111\u1ebfn ",e.Value+t]})]})})]})}),Object(u.jsx)(U.a,{})]})})):""}),void 0==a||0==a.length?Object(u.jsx)("div",{children:"B\u1ea1n ch\u01b0a c\xf3 b\u1ea5t k\xec t\xednh n\u0103ng n\xe0o !!! Vui l\xf2ng li\xean h\u1ec7 admin !!!"}):""]})}}]),t}(s.Component),C=Object(m.css)(O||(O=Object(y.a)(["\n  display: block;\n  margin: 0 auto;\n  border-color: red;\n"]))),k={feature:Object(h.a)({display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",textAlign:"center",width:"85%",height:280,color:"#fff",padding:"10px",border:"1px",background:"#FF4F23",borderRadius:"10px"},"borderRadius","10px")},G=j,Y=(t(668),new Headers),v=localStorage.getItem("auth");localStorage.getItem("user");Y.append("Authorization","Bearer "+v),Y.append("Content-Type","application/json");var x=function(e){Object(n.a)(t,e);var a=Object(p.a)(t);function t(e){var r;return Object(i.a)(this,t),(r=a.call(this,e)).state={company_name:"",company_slug:"",package_name:"",package_time:"",package_unit:"",array_feature:[]},r}return Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=Object(D.a)(A.a.mark((function e(){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:window.location.href="#/list_order";case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state;e.array_feature,e.company_slug;return Object(u.jsx)("div",{})}}]),t}(s.Component),w=(Object(h.a)({display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",textAlign:"center",width:"100%",height:280,color:"#fff",padding:"10px",background:"#123254",borderRadius:"10px"},"borderRadius","10px"),x),K=new Headers,H=localStorage.getItem("auth");K.append("Authorization","Bearer "+H),K.append("Content-Type","application/json");var W=function(e){Object(n.a)(t,e);var a=Object(p.a)(t);function t(e){var r;return Object(i.a)(this,t),(r=a.call(this,e)).state={type:localStorage.getItem("type")},r}return Object(r.a)(t,[{key:"render",value:function(){return Object(u.jsx)("div",{children:"0"==this.state.type||"1"==this.state.type?Object(u.jsx)(w,{}):Object(u.jsx)(G,{})})}}]),t}(s.Component);a.default=W},645:function(e,a,t){"use strict";a.a={BASE_URL:"https://api-soida.applamdep.com",LIST_USER:"/api/list-user",LIST_USER_WITH_ID:"/api/list-user?id=",ADD_USER:"/api/add-user",UPDATE_USER:"/api/update-user",DELETE_USER:"/api/delete-user",LOGIN_ADMIN:"/api/login_admin",GET_SHOP:"/api/get-shop",GET_SALE:"/api/get-sale",GET_COEFFICIENT:"/api/calculator-coefficient-user",GET_COEFFICIENT_PER_SALE:"/api/calculator-coefficient-user-per-sale",GET_USER_SALE_BY_MONTH:"/api/get-user-of-sale-by-month",CALCULATOR_ALL_USER_OF_COMPANY:"/api/calculator-all-user-company",CALCULATOR_ALL_USER_OF_SALE:"/api/calculator-all-user-of-sale",GET_SEEDER:"/api/get-seed",GET_SALE_NAME:"/api/get-name-sale",GET_USER_BY_ID:"/api/get-user-byID",LIST_CUSTOMER:"/api/list-customer",LIST_CUSTOMER_BY_MONTH:"/api/get-user-sale-by-month",LIST_TYPEKEY:"/api/list-typekey",LIST_TYPEKEY_WITH_ID:"/api/list-typekey?id=",ADD_TYPEKEY:"/api/add-typekey",UPDATE_TYPEKEY:"/api/update-typekey",DELETE_TYPEKEY:"/api/delete-typekey",LIST_HARDWARE:"/api/list-hardware",LIST_HARDWARE_WITH_ID:"/api/list-hardware?id=",ADD_HARDWARE:"/api/add-hardware",UPDATE_HARDWARE:"/api/update-hardware",DELETE_HARDWARE:"/api/delete-hardware",LIST_ORDER:"/api/list-order",LIST_ORDER_BY_SALE:"/api/plugin-list-order-by-saleid",ADD_ORDER:"/api/add-order",UPDATE_STATUS_ORDER:"/api/update-status-order",CHECK_OUT:"/api/checkout-order",LIST_TRANSACTION:"/api/list-transaction",ADD_TRANSACTION:"/api/add-transaction",LIST_CHECK_OUT:"/api/list-checkout",LIST_HARDWARE_CHECKOUT:"/api/get-list-hardward-by-check-out",UPDATE_STATUS_CHECKOUT:"/api/update-status-hardware",LIST_ORDER_DETAIL:"/api/list-orderdetail",ADD_ORDER_DETAIL:"/api/add-orderdetail",LIST_ROLE:"/api/list-role",LIST_ROLE_WITH_ID:"/api/list-role?id=",ADD_ROLE:"/api/add-role",UPDATE_ROLE:"/api/update-role",DELETE_ROLE:"/api/delete-role",LIST_PACKAGE:"/api/list-package",ADD_PACKAGE:"/api/add-package",UPDATE_PACKAGE:"/api/update-package",DELETE_PACKAGE:"/api/delete-package",PLUGIN_DATA_PACKAGE:"/api/get-name-package",LIST_SALELOG:"/api/list-salelog",LIST_SALELOG_WITH_ID:"/api/list-salelog?id=",ADD_SALELOG:"/api/add-salelog",UPDATE_SALELOG:"/api/update-salelog",DELETE_SALELOG:"/api/delete-salelog",DATA_SALE:"/api/get-data-sale",LIST_SALE:"/api/list-sale",LIST_SALE_WITH_ID:"/api/list-sale?id=",ADD_SALE:"/api/add-sale",UPDATE_SALE:"/api/update-sale",DELETE_SALE:"/api/delete-sale",LIST_KEYORDER:"/api/list-keyorder",LIST_KEYORDER_WITH_ID:"/api/list-keyorder?id=",ADD_KEYORDER:"/api/add-keyorder",UPDATE_KEYORDER:"/api/update-keyorder",DELETE_KEYORDER:"/api/delete-keyorder",LIST_KEY:"/api/list-key",LIST_KEY_WITH_ID:"/api/list-key?id=",ADD_KEY:"/api/add-key",UPDATE_KEY:"/api/update-key",DELETE_KEY:"/api/delete-key",PLUGIN_LIST_COMPANY:"/api/plugin-list-company",PLUGIN_LIST_COMPANY_BY_ID:"/api/plugin-list-company-by-id",PLUGIN_LIST_COMPANY_WITH_ID:"/api/plugin-list-company?id=",PLUGIN_ADD_COMPANY:"/api/plugin-add-company",PLUGIN_UPDATE_COMPANY:"/api/plugin-update-company",PLUGIN_DELETE_COMPANY:"/api/plugin-delete-company",PLUGIN_DATA_COMPANY:"/api/plugin-get-data-company",LIST_COMPANY:"/api/list-company",LIST_COMPANY_WITH_ID:"/api/list-company?id=",ADD_COMPANY:"/api/add-company",UPDATE_COMPANY:"/api/update-company",DELETE_COMPANY:"/api/delete-company",DATA_COMPANY:"/api/get-data-company",LIST_LINK:"/api/list-link",LIST_LINK_WITH_ID:"/api/list-link?id=",ADD_LINK:"/api/add-link",UPDATE_LINK:"/api/update-link",DELETE_LINK:"/api/delete-link","GET-LINK-BY-ID":"/api/link-by-id",LIST_FEATURE:"/api/list-feature",ADD_FEATURE:"/api/add-feature",UPDATE_FEATURE:"/api/update-feature",DELETE_FEATURE:"/api/delete-feature",DATA_CHOOSE_FEATURE:"/api/get-feature-choose",LIST_PLUGIN_ORDER:"/api/plugin-list-order",LIST_PLUGIN_ORDER_BY_ID:"/api/plugin-list-order-by-id",LIST_PLUGIN_ORDER_FOR_ADMIN:"/api/plugin-list-order-for-admin",ADD_PLUGIN_ORDER:"/api/plugin-add-order",UPDATE_PLUGIN_ORDER:"/api/plugin-update-order",DELETE_PLUGIN_ORDER:"/api/plugin-delete-order",UPDATE_SLUG:"/api/plugin-update-slug",PLUGIN_LIST_USER:"/api/plugin-list-user",PLUGIN_ADD_USER:"/api/plugin-add-user",PLUGIN_ADD_SALE:"/api/plugin-add-sale",PLUGIN_UPDATE_USER:"/api/plugin-update-user",PLUGIN_DELETE_USER:"/api/plugin-delete-user",PLUGIN_RESET_PASSWORD:"/api/plugin-reset-password",PLUGIN_UPDATE_PASSWORD:"/api/plugin-update-password",PLUGIN_UPDATE_STATUS:"/api/plugin-update-status",PLUGIN_LOGIN_ADMIN:"/api/plugin-login_admin",PLUGIN_GET_USER_BYID:"/api/plugin-get-user-byID",PLUGIN_GET_USER_BY_BODY:"/api/plugin-get-user-byID-with-body",PLUGIN_LIST_ROLE:"/api/plugin-list-role",PLUGIN_ADD_ROLE:"/api/plugin-add-role",PLUGIN_UPDATE_ROLE:"/api/plugin-update-role",PLUGIN_DELETE_ROLE:"/api/plugin-delete-role",CUS_RES_LIST:"/api/list-customer-request",CUS_RES_LIST_COMPANY:"/api/list-customer-request-for-company",CUS_RES_ADD:"/api/add-customer-request",CUS_RES_UPDATE:"/api/update-customer-request",CUS_RES_DELETE:"/api/delete-customer-request",REWARD_INFO_LIST:"/api/list-reward-info",REWARD_INFO_LIST_COMPANY:"/api/list-reward-info-for-company",REWARD_INFO_ADD:"/api/add-reward-info",REWARD_INFO_UPDATE:"/api/update-reward-info",REWARD_INFO_DELETE:"/api/delete-reward-info",REWARD_TRANS_LIST:"/api/list-reward-trans",REWARD_TRANS_ADD:"/api/list-reward-trans",REWARD_TRANS_UPDATE:"/api/update-reward-trans",REWARD_TRANS_DELETE:"/api/delete-reward-trans",TYPE_REQUEST_LIST:"/api/list-type-request",TYPE_REQUEST_ADD:"/api/add-type-request",TYPE_REQUEST_UPDATE:"/api/update-type-request",TYPE_REQUEST_DELETE:"/api/delete-type-request"}}}]);
//# sourceMappingURL=47.213bb497.chunk.js.map