(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[43],{1235:function(e,a,t){"use strict";t.r(a);var i=t(165),n=t(166),r=t(168),p=t(167),s=t(2),l=t(648),c=(t(654),t(651)),o=t.n(c),d=t(643),_=(t(31),t(665)),u=t(789),E=t(20),T=(Object(u.getStyle)("success"),Object(u.getStyle)("info"),Object(u.getStyle)("danger"),t(114)),A=t.n(T),D=t(652),L=(t(173),t(661)),g=new Headers,h=localStorage.getItem("auth");g.append("Authorization","Bearer "+h),g.append("Content-Type","application/json");s.Component;var I=new Headers,O=localStorage.getItem("auth");I.append("Authorization","Bearer "+O),I.append("Content-Type","application/json");s.Component;var S=t(169),y=t(1176),m=new Headers,R=localStorage.getItem("auth");m.append("Authorization","Bearer "+R),m.append("Content-Type","application/json");var f=function(e){Object(r.a)(t,e);var a=Object(p.a)(t);function t(e){var n;return Object(i.a)(this,t),(n=a.call(this,e)).state={company_name:"",company_slug:"",package_name:"",package_time:"",package_unit:"",array_feature:[],company_id:localStorage.getItem("user")},n}return Object(n.a)(t,[{key:"componentWillMount",value:function(){var e=Object(D.a)(A.a.mark((function e(){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getCompanyData();case 2:return e.next=4,this.getPackageData();case 4:console.log(JSON.parse(this.state.company_id).company_id);case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getCompanyData",value:function(){var e=Object(D.a)(A.a.mark((function e(){var a;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o()({baseURL:d.a.BASE_URL,url:d.a.PLUGIN_DATA_COMPANY,method:"POST",data:{company_id:JSON.parse(this.state.company_id).company_id}});case 2:a=e.sent,this.setState({company_name:a.data.data.Name,company_slug:a.data.data.Slug});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getPackageData",value:function(){var e=Object(D.a)(A.a.mark((function e(){var a,t;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o()({baseURL:d.a.BASE_URL,url:d.a.LIST_PLUGIN_ORDER_BY_ID,method:"POST",data:{company_id:JSON.parse(this.state.company_id).company_id}});case 2:a=e.sent,t=a.data.data.result,this.setState({array_feature:t.length>0?t[0].Array_Feature:[]});case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,a=e.array_feature,t=e.company_slug;return Object(E.jsxs)("div",{className:"container",children:[Object(E.jsx)("div",{class:"title",className:"h3",style:{alignSelf:"center"},children:"DANH S\xc1CH C\xc1C D\u1ecaCH V\u1ee4"}),Object(E.jsx)(l.N,{children:void 0!=a?a.map((function(e,a){return Object(E.jsxs)(l.j,{lg:"3",sm:"12",xm:"12",children:[Object(E.jsx)("a",{"data-tip":"".concat(e.Value+t),style:{cursor:"pointer"},onClick:function(){window.location.href=e.Value+t},children:Object(E.jsxs)("div",{style:U.feature,children:[Object(E.jsx)("div",{style:{height:"200px",width:"100%",marginTop:"24px"},children:Object(E.jsx)("img",{width:"80",height:"80",src:"https://martialartsplusinc.com/wp-content/uploads/2017/04/default-image-620x600.jpg"})}),Object(E.jsx)("div",{className:"feature__body",children:Object(E.jsxs)("center",{children:[Object(E.jsx)("div",{style:{width:"80%",height:50,alignItems:"center",fontSize:15,fontWeight:"bold"},children:e.Key}),Object(E.jsxs)("div",{style:{width:"80",height:70,fontSize:10},children:["Nh\u1ea5p v\xe0o \u0111\xe2y \u0111\u1ec3 chuy\u1ec3n h\u01b0\u1edbng \u0111\u1ebfn ",e.Value+t]})]})})]})}),Object(E.jsx)(y.a,{})]})})):""}),void 0==a||0==a.length?Object(E.jsx)("div",{children:"B\u1ea1n ch\u01b0a c\xf3 b\u1ea5t k\xec t\xednh n\u0103ng n\xe0o !!! Vui l\xf2ng li\xean h\u1ec7 admin !!!"}):""]})}}]),t}(s.Component),U={feature:Object(S.a)({display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",textAlign:"center",width:"100%",height:280,color:"#fff",padding:"10px",background:"#123254",borderRadius:"10px"},"borderRadius","10px")},j=f,N=t(656),P=t.n(N),b=t(1193),C=new Headers,x=localStorage.getItem("auth"),k=localStorage.getItem("user");C.append("Authorization","Bearer "+x),C.append("Content-Type","application/json");var v=function(e){Object(r.a)(t,e);var a=Object(p.a)(t);function t(e){var n;return Object(i.a)(this,t),(n=a.call(this,e)).state={company_name:"",company_slug:"",package_name:"",package_time:"",package_unit:"",array_feature:[]},n}return Object(n.a)(t,[{key:"componentDidMount",value:function(){var e=Object(D.a)(A.a.mark((function e(){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getCompanyData();case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getCompanyData",value:function(){var e=Object(D.a)(A.a.mark((function e(){var a;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o()({baseURL:d.a.BASE_URL,url:d.a.LIST_FEATURE,method:"POST"});case 2:a=e.sent,this.setState({array_feature:a.data.data});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,a=e.array_feature,t=e.company_slug;return Object(E.jsxs)("div",{children:[Object(E.jsx)("div",{class:"title",className:"h3",style:{alignSelf:"center"},children:"DANH S\xc1CH QU\u1ea2N L\xdd T\xcdNH N\u0102NG"}),Object(E.jsx)(l.N,{children:void 0!=a?a.map((function(e,a){return Object(E.jsx)(l.j,{lg:"3",sm:"12",xm:"12",children:Object(E.jsx)(b.a,{target:"_blank",style:{pointer:"cursor"},onClick:function(){window.location.href=e.Value+t},children:Object(E.jsxs)("div",{style:G.feature,children:[Object(E.jsx)("div",{style:{height:"200px",width:"100%",marginTop:"24px"},children:Object(E.jsx)("img",{width:"80",height:"80",src:"https://martialartsplusinc.com/wp-content/uploads/2017/04/default-image-620x600.jpg"})}),Object(E.jsxs)("div",{className:"feature__body",children:[Object(E.jsx)("div",{className:"feature__title h4",style:{marginBottom:50},children:e.Key}),Object(E.jsxs)("p",{className:"feature__desc",children:["Nh\u1ea5p v\xe0o \u0111\xe2y \u0111\u1ec3 chuy\u1ec3n h\u01b0\u1edbng \u0111\u1ebfn",e.Value+JSON.parse(k).username+"/"+P()(JSON.parse(k).password)]})]})]})})})})):""})]})}}]),t}(s.Component),G={feature:Object(S.a)({display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",textAlign:"center",width:"100%",height:280,color:"#fff",padding:"10px",background:"#123254",borderRadius:"10px"},"borderRadius","10px")},Y=v,w=new Headers,H=localStorage.getItem("auth");w.append("Authorization","Bearer "+H),w.append("Content-Type","application/json");var K=function(e){Object(r.a)(t,e);var a=Object(p.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(n.a)(t,[{key:"render",value:function(){return Object(E.jsx)("div",{children:"ADMIN"==localStorage.getItem("role")||"SALE"==localStorage.getItem("role")?Object(E.jsx)(Y,{}):Object(E.jsx)(j,{})})}}]),t}(s.Component);a.default=K},643:function(e,a,t){"use strict";a.a={BASE_URL:"https://api-soida.applamdep.com",LIST_USER:"/api/list-user",LIST_USER_WITH_ID:"/api/list-user?id=",ADD_USER:"/api/add-user",UPDATE_USER:"/api/update-user",DELETE_USER:"/api/delete-user",LOGIN_ADMIN:"/api/login_admin",GET_SHOP:"/api/get-shop",GET_SALE:"/api/get-sale",GET_COEFFICIENT:"/api/calculator-coefficient-user",GET_COEFFICIENT_PER_SALE:"/api/calculator-coefficient-user-per-sale",GET_USER_SALE_BY_MONTH:"/api/get-user-of-sale-by-month",CALCULATOR_ALL_USER_OF_COMPANY:"/api/calculator-all-user-company",CALCULATOR_ALL_USER_OF_SALE:"/api/calculator-all-user-of-sale",GET_SEEDER:"/api/get-seed",GET_SALE_NAME:"/api/get-name-sale",GET_USER_BY_ID:"/api/get-user-byID",LIST_CUSTOMER:"/api/list-customer",LIST_CUSTOMER_BY_MONTH:"/api/get-user-sale-by-month",LIST_TYPEKEY:"/api/list-typekey",LIST_TYPEKEY_WITH_ID:"/api/list-typekey?id=",ADD_TYPEKEY:"/api/add-typekey",UPDATE_TYPEKEY:"/api/update-typekey",DELETE_TYPEKEY:"/api/delete-typekey",LIST_HARDWARE:"/api/list-hardware",LIST_HARDWARE_WITH_ID:"/api/list-hardware?id=",ADD_HARDWARE:"/api/add-hardware",UPDATE_HARDWARE:"/api/update-hardware",DELETE_HARDWARE:"/api/delete-hardware",LIST_ORDER:"/api/list-order",LIST_ORDER_BY_SALE:"/api/plugin-list-order-by-saleid",ADD_ORDER:"/api/add-order",UPDATE_STATUS_ORDER:"/api/update-status-order",CHECK_OUT:"/api/checkout-order",LIST_TRANSACTION:"/api/list-transaction",ADD_TRANSACTION:"/api/add-transaction",LIST_CHECK_OUT:"/api/list-checkout",LIST_HARDWARE_CHECKOUT:"/api/get-list-hardward-by-check-out",UPDATE_STATUS_CHECKOUT:"/api/update-status-hardware",LIST_ORDER_DETAIL:"/api/list-orderdetail",ADD_ORDER_DETAIL:"/api/add-orderdetail",LIST_ROLE:"/api/list-role",LIST_ROLE_WITH_ID:"/api/list-role?id=",ADD_ROLE:"/api/add-role",UPDATE_ROLE:"/api/update-role",DELETE_ROLE:"/api/delete-role",LIST_PACKAGE:"/api/list-package",ADD_PACKAGE:"/api/add-package",UPDATE_PACKAGE:"/api/update-package",DELETE_PACKAGE:"/api/delete-package",PLUGIN_DATA_PACKAGE:"/api/get-name-package",LIST_SALELOG:"/api/list-salelog",LIST_SALELOG_WITH_ID:"/api/list-salelog?id=",ADD_SALELOG:"/api/add-salelog",UPDATE_SALELOG:"/api/update-salelog",DELETE_SALELOG:"/api/delete-salelog",DATA_SALE:"/api/get-data-sale",LIST_SALE:"/api/list-sale",LIST_SALE_WITH_ID:"/api/list-sale?id=",ADD_SALE:"/api/add-sale",UPDATE_SALE:"/api/update-sale",DELETE_SALE:"/api/delete-sale",LIST_KEYORDER:"/api/list-keyorder",LIST_KEYORDER_WITH_ID:"/api/list-keyorder?id=",ADD_KEYORDER:"/api/add-keyorder",UPDATE_KEYORDER:"/api/update-keyorder",DELETE_KEYORDER:"/api/delete-keyorder",LIST_KEY:"/api/list-key",LIST_KEY_WITH_ID:"/api/list-key?id=",ADD_KEY:"/api/add-key",UPDATE_KEY:"/api/update-key",DELETE_KEY:"/api/delete-key",PLUGIN_LIST_COMPANY:"/api/plugin-list-company",PLUGIN_LIST_COMPANY_BY_ID:"/api/plugin-list-company-by-id",PLUGIN_LIST_COMPANY_WITH_ID:"/api/plugin-list-company?id=",PLUGIN_ADD_COMPANY:"/api/plugin-add-company",PLUGIN_UPDATE_COMPANY:"/api/plugin-update-company",PLUGIN_DELETE_COMPANY:"/api/plugin-delete-company",PLUGIN_DATA_COMPANY:"/api/plugin-get-data-company",LIST_COMPANY:"/api/list-company",LIST_COMPANY_WITH_ID:"/api/list-company?id=",ADD_COMPANY:"/api/add-company",UPDATE_COMPANY:"/api/update-company",DELETE_COMPANY:"/api/delete-company",DATA_COMPANY:"/api/get-data-company",LIST_LINK:"/api/list-link",LIST_LINK_WITH_ID:"/api/list-link?id=",ADD_LINK:"/api/add-link",UPDATE_LINK:"/api/update-link",DELETE_LINK:"/api/delete-link","GET-LINK-BY-ID":"/api/link-by-id",LIST_FEATURE:"/api/list-feature",ADD_FEATURE:"/api/add-feature",UPDATE_FEATURE:"/api/update-feature",DELETE_FEATURE:"/api/delete-feature",DATA_CHOOSE_FEATURE:"/api/get-feature-choose",LIST_PLUGIN_ORDER:"/api/plugin-list-order",LIST_PLUGIN_ORDER_BY_ID:"/api/plugin-list-order-by-id",ADD_PLUGIN_ORDER:"/api/plugin-add-order",UPDATE_PLUGIN_ORDER:"/api/plugin-update-order",DELETE_PLUGIN_ORDER:"/api/plugin-delete-order",UPDATE_SLUG:"/api/plugin-update-slug",PLUGIN_LIST_USER:"/api/plugin-list-user",PLUGIN_ADD_USER:"/api/plugin-add-user",PLUGIN_ADD_SALE:"/api/plugin-add-sale",PLUGIN_UPDATE_USER:"/api/plugin-update-user",PLUGIN_DELETE_USER:"/api/plugin-delete-user",PLUGIN_RESET_PASSWORD:"/api/plugin-reset-password",PLUGIN_UPDATE_STATUS:"/api/plugin-update-status",PLUGIN_LOGIN_ADMIN:"/api/plugin-login_admin",PLUGIN_GET_USER_BYID:"/api/plugin-get-user-byID",PLUGIN_GET_USER_BY_BODY:"/api/plugin-get-user-byID-with-body",PLUGIN_LIST_ROLE:"/api/plugin-list-role",PLUGIN_ADD_ROLE:"/api/plugin-add-role",PLUGIN_UPDATE_ROLE:"/api/plugin-update-role",PLUGIN_DELETE_ROLE:"/api/plugin-delete-role"}}}]);
//# sourceMappingURL=43.8fdf0fcb.chunk.js.map