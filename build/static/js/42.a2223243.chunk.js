(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[42],{1223:function(e,t,a){"use strict";a.r(t);var n=a(169),i=a(114),r=a.n(i),c=a(652),s=a(165),l=a(166),d=a(168),o=a(167),u=a(2),p=a(663),h=a(664),_=a(931),j=a(1179),g=a(932),E=a(659),O=a(661),m=a(648),x=a(654),b=(a(653),a(662),a(643)),D=(a(644),a(651)),T=a.n(D),L=a(20),A=new Headers,I=localStorage.getItem("auth");A.append("Authorization","Bearer "+I),A.append("Content-Type","application/json");var S=function(e){Object(d.a)(a,e);var t=Object(o.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).getCompanyName=function(){var e=Object(c.a)(r.a.mark((function e(t){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T()({baseURL:b.a.BASE_URL,url:b.a.PLUGIN_DATA_COMPANY,method:"POST",data:{company_id:t}});case 2:return a=e.sent,e.abrupt("return",null==a.data.data?"":a.data.data.Name);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.getData=Object(c.a)(r.a.mark((function e(){var t,a,i;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.state,t.data_link_shop,t.data_link_recommand,t.data_link_sku,n.setState({isLoading:!0}),e.next=4,T()({baseURL:b.a.BASE_URL,url:b.a.PLUGIN_GET_USER_BYID,method:"POST",headers:n.state.token});case 4:return a=e.sent,i=a.data.data,e.next=8,n.getCompanyName(i.Company_Id);case 8:i.com_name=e.sent,n.setState({dataApi:a.data.data,data:i});case 10:case"end":return e.stop()}}),e)}))),n.getPackageName=function(){var e=Object(c.a)(r.a.mark((function e(t){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T()({baseURL:b.a.BASE_URL,url:b.a.PLUGIN_DATA_PACKAGE,method:"POST",data:{package_id:t}});case 2:return a=e.sent,e.abrupt("return",a.data.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.state={data:[],activePage:1,page:1,itemsCount:0,limit:20,totalActive:0,modalCom:!1,viewingUser:{},communities:[],updated:"",dataApi:[],action:"new",modalDelete:!1,delete:null,dataCompany:[],currentCompany:"",dataTypeKey:[],currentTypeKey:"",dataHardWare:[],currentHardWare:"",arrPagination:[],indexPage:0,hidden:!0,token:{Authorization:"Bearer ".concat(localStorage.getItem("token"))},role:localStorage.getItem("role"),company_id:localStorage.getItem("user"),link_shop:!0,data_link_shop:"",link_recommand:!0,data_link_recommand:"",link_sku:!0,data_link_sku:"",toggleView:!1,company_name:"",arrDetailPackage:[],phone_number:"",current_slug:"",arrTotalPackage:[]},n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=Object(c.a)(r.a.mark((function e(){var t,a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(this.getData(),t=JSON.parse(localStorage.getItem("url")),a=0;a<t.length;a++)"#"+t[a].to==window.location.hash&&1==t[a].hidden&&(window.location.href="#/");case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getBadge",value:function(e){switch(e){case"Actived":return"success";case"Deactived":return"danger";default:return"primary"}}},{key:"onChange",value:function(e,t){this.setState(Object(n.a)({},e,t))}},{key:"openUpdate",value:function(e){this.setState(Object(n.a)({},e,!this.state[e]))}},{key:"getPackageData",value:function(){var e=Object(c.a)(r.a.mark((function e(t){var a,n,i,c,s;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=[],e.next=3,T()({baseURL:b.a.BASE_URL,url:b.a.LIST_PLUGIN_ORDER_BY_ID,method:"POST",data:{company_id:t}});case 3:n=e.sent,i=n.data.data.result,c=0;case 6:if(!(c<i.length)){e.next=17;break}return e.next=9,this.getPackageName(i[c].Package_Id);case 9:s=e.sent,i[c].Name=s.Name,i[c].Unit=s.Unit,i[c].Value=s.Value,a.push(i[c]);case 14:c++,e.next=6;break;case 17:return this.setState({arrTotalPackage:a}),e.abrupt("return",a);case 19:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"onView",value:function(){var e=Object(c.a)(r.a.mark((function e(t,a,n,i){var c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getPackageData(a);case 2:c=e.sent,this.setState({toggleView:!this.state.toggleView,company_name:t,arrDetailPackage:0==c.length?[]:c[0].Array_Feature,phone_number:n,current_slug:i});case 4:case"end":return e.stop()}}),e,this)})));return function(t,a,n,i){return e.apply(this,arguments)}}()},{key:"renderDetailPackage",value:function(){var e=this;return Object(L.jsxs)("table",{ble:!0,className:"table table-hover table-outline mb-0 d-none d-sm-table",children:[Object(L.jsx)("thead",{className:"thead-light",children:Object(L.jsxs)("tr",{children:[Object(L.jsx)("th",{className:"text-center",children:"STT."}),Object(L.jsx)("th",{className:"text-center",children:"T\xean d\u1ecbch v\u1ee5"}),Object(L.jsx)("th",{className:"text-center",children:"\u0110\u01b0\u1eddng d\u1eabn"})]})}),Object(L.jsxs)("tbody",{children:[0==this.state.arrDetailPackage.length?Object(L.jsx)("td",{colSpan:"10",hidden:!1,className:"text-center",children:"Kh\xf4ng t\xecm th\u1ea5y d\u1eef li\u1ec7u"}):Object(L.jsx)("td",{colSpan:"10",hidden:!0,className:"text-center",children:"Kh\xf4ng t\xecm th\u1ea5y d\u1eef li\u1ec7u"}),void 0!=this.state.arrDetailPackage||0!=this.state.arrDetailPackage.length||null!=this.state.arrDetailPackage?this.state.arrDetailPackage.map((function(t,a){return Object(L.jsxs)("tr",{children:[Object(L.jsx)("td",{className:"text-center",children:a+1}),Object(L.jsx)("td",{className:"text-center",children:t.Key}),Object(L.jsx)("td",{className:"text-center",children:t.Value+e.state.current_slug})]},a)})):""]})]})}},{key:"updateLink",value:function(){var e=Object(c.a)(r.a.mark((function e(){var t,a,n,i;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.state,a=t.data_link_shop,n=t.data_link_recommand,i=t.data_link_sku,e.next=3,T()({baseURL:b.a.BASE_URL,url:b.a.UPDATE_LINK,method:"POST",data:{link_shop:a,link_recommand:n,link_sku_hair:i},headers:this.state.token});case 3:e.sent;case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"convertUnitToDate",value:function(e){switch(e){case"0":return"Ng\xe0y";case"1":return"Th\xe1ng";case"2":return"N\u0103m"}}},{key:"CalculatorDateLeft",value:function(e,t){return Math.ceil(Math.abs(new Date(t)-new Date(e))/864e5)}},{key:"inputChange",value:function(e){this.setState(Object(n.a)({},e.target.name,e.target.value))}},{key:"calDateLeft",value:function(e,t){return this.CalculatorDateLeft(new Date(e),new Date(t))}},{key:"getBadgeStatus",value:function(e){switch(e){case"0":return"danger";case"1":return"success";default:return"primary"}}},{key:"getStatus",value:function(e){switch(e){case"0":return"Ch\u1edd duy\u1ec7t";case"1":return"\u0110\xe3 duy\u1ec7t";default:return"primary"}}},{key:"render",value:function(){var e=this,t=this.state,a=t.data,n=(t.link_shop,t.link_recommand,t.link_sku,t.role),i=(t.viewingUser,t.communities,t.action,t.arrPagination,t.indexPage,t.arrTotalPackage),s=t.company_name,l=t.current_package,d=t.phone_number;return Object(L.jsxs)("div",{className:"animated fadeIn",children:[Object(L.jsx)(p.a,{children:Object(L.jsxs)(h.a,{children:[Object(L.jsx)("p",{style:y.success,children:this.state.updated}),Object(L.jsx)("p",{style:y.danger,children:this.state.deleted}),Object(L.jsxs)(_.a,{children:[Object(L.jsx)(j.a,{children:"TH\xd4NG TIN T\xc0I KHO\u1ea2N"}),Object(L.jsx)(g.a,{children:Object(L.jsx)(m.N,{children:Object(L.jsxs)(m.j,{sm:"12",lg:"12",children:[Object(L.jsxs)(m.N,{children:[Object(L.jsx)(m.j,{sm:"12",lg:"6",children:Object(L.jsx)(m.F,{children:Object(L.jsx)("strong",{children:"Qu\u1ea3n l\xfd t\xe0i kho\u1ea3n"})})}),"ADMIN"==n||"SALE"==n?"":Object(L.jsx)(m.j,{sm:"12",lg:"6",children:Object(L.jsx)(m.Y,{content:"Xem chi ti\u1ebft \u0111\u01a1n h\xe0ng",children:Object(L.jsxs)(m.d,{outline:!0,color:"info",size:"sm",onClick:function(){var t=Object(c.a)(r.a.mark((function t(n){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.onView(a.Name,a.Company_Id,a.Phone,a.Slug);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),children:[Object(L.jsx)(x.a,{name:"cil-magnifying-glass"})," Chi ti\u1ebft c\xe1c \u0111\u01a1n h\xe0ng \u0111\xe3 mua"]})})})]}),Object(L.jsxs)(m.N,{children:[Object(L.jsx)(m.j,{sm:"12",lg:"12",children:Object(L.jsxs)("div",{children:[Object(L.jsx)(m.F,{children:"T\xean"}),Object(L.jsx)(E.a,{style:y.searchInput,value:a.Name})]})}),Object(L.jsxs)(m.j,{sm:"12",lg:"12",children:[Object(L.jsx)(m.F,{children:"Email"}),Object(L.jsx)(E.a,{style:y.searchInput,value:a.Email})]}),Object(L.jsxs)(m.j,{sm:"12",lg:"12",children:[Object(L.jsx)(m.F,{children:"S\u1ed1 \u0111i\u1ec7n tho\u1ea1i"}),Object(L.jsx)(E.a,{style:y.searchInput,value:a.Phone})]}),Object(L.jsx)(m.j,{sm:"12",lg:"12",children:Object(L.jsxs)("div",{children:[Object(L.jsx)(m.F,{children:"Gi\u1edbi t\xednh"}),Object(L.jsx)(E.a,{style:y.searchInput,value:a.Gender})]})}),Object(L.jsx)(m.j,{sm:"12",lg:"12",children:Object(L.jsxs)("div",{children:[Object(L.jsx)(m.F,{children:"\u0110\u1ecba ch\u1ec9"}),Object(L.jsx)(E.a,{style:y.searchInput,value:a.Address})]})}),Object(L.jsx)(m.j,{sm:"12",lg:"12",children:Object(L.jsxs)("div",{children:[Object(L.jsx)(m.F,{children:"T\xean c\xf4ng ty"}),Object(L.jsx)(E.a,{style:y.searchInput,value:a.com_name})]})}),Object(L.jsx)(m.j,{sm:"12",lg:"12",children:Object(L.jsxs)("div",{children:[Object(L.jsx)(m.F,{children:"Quy\u1ec1n h\u1ea1n"}),Object(L.jsx)(E.a,{style:y.searchInput,value:n})]})}),Object(L.jsx)(m.j,{sm:"12",lg:"12",children:Object(L.jsxs)("div",{children:[Object(L.jsx)(m.F,{children:"T\xean \u0111\u0103ng nh\u1eadp"}),Object(L.jsx)(E.a,{style:y.searchInput,value:a.UserName})]})}),Object(L.jsxs)(m.j,{sm:"12",lg:"12",children:[Object(L.jsx)(m.F,{children:"M\u1eadt kh\u1ea9u"}),Object(L.jsxs)(m.N,{children:[Object(L.jsx)(m.j,{sm:"9",lg:"9",children:Object(L.jsx)(E.a,{type:"password",style:y.searchInput,readOnly:!0,onChange:function(e){},value:a.Password})}),Object(L.jsx)(m.j,{sm:"3",lg:"3",children:Object(L.jsx)(O.a,{color:"primary",onClick:function(e){},children:"Thay \u0111\u1ed5i"})})]})]}),Object(L.jsx)(m.j,{sm:"12",lg:"12",children:Object(L.jsxs)("div",{children:[Object(L.jsx)(m.F,{children:"Tr\u1ea1ng th\xe1i"}),Object(L.jsx)(E.a,{style:y.searchInput,onChange:function(e){},value:a.Status})]})})]})]})})})]})]})}),Object(L.jsxs)(m.H,{show:this.state.toggleView,onClose:function(){e.setState({toggleView:!e.state.toggleView})},size:"xl",children:[Object(L.jsxs)(m.K,{closeButton:!0,children:[Object(L.jsxs)(m.L,{children:["Danh s\xe1ch \u0111\u01a1n h\xe0ng c\u1ee7a ",s]}),Object(L.jsxs)(m.L,{style:{marginLeft:50},children:["S\u1ed1 \u0111i\u1ec7n tho\u1ea1i: ",d]})]}),Object(L.jsxs)(m.I,{children:[Object(L.jsxs)("table",{ble:!0,className:"table table-hover table-outline mb-0 d-none d-sm-table",children:[Object(L.jsx)("thead",{className:"thead-light",children:Object(L.jsxs)("tr",{children:[Object(L.jsx)("th",{className:"text-center",children:"STT."}),Object(L.jsx)("th",{className:"text-center",children:"T\xean G\xf3i"}),Object(L.jsx)("th",{className:"text-center",children:"S\u1ed1 l\u01b0\u1ee3ng t\xednh n\u0103ng"}),Object(L.jsx)("th",{className:"text-center",children:"G\xf3i"}),Object(L.jsx)("th",{className:"text-center",children:"Ng\xe0y k\xedch ho\u1ea1t"}),Object(L.jsx)("th",{className:"text-center",children:"Ng\xe0y h\u1ebft h\u1ea1n"}),Object(L.jsx)("th",{className:"text-center",children:"Th\u1eddi gian h\u1ebft h\u1ea1n"}),Object(L.jsx)("th",{className:"text-center",children:"Tr\u1ea1ng th\xe1i"}),Object(L.jsx)("th",{className:"text-center",children:"#"})]})}),Object(L.jsxs)("tbody",{children:[0==i?Object(L.jsx)("td",{colSpan:"10",hidden:!1,className:"text-center",children:"Kh\xf4ng t\xecm th\u1ea5y d\u1eef li\u1ec7u"}):Object(L.jsx)("td",{colSpan:"10",hidden:!0,className:"text-center",children:"Kh\xf4ng t\xecm th\u1ea5y d\u1eef li\u1ec7u"}),void 0!=i?i.map((function(t,a){return Object(L.jsxs)("tr",{children:[Object(L.jsx)("th",{className:"text-center",children:a+1}),Object(L.jsx)("th",{className:"text-center",children:t.Name}),Object(L.jsx)("th",{className:"text-center",children:t.Array_Feature.length}),Object(L.jsx)("th",{className:"text-center",children:"".concat(t.Value," ").concat(e.convertUnitToDate(t.Unit))}),Object(L.jsx)("th",{className:"text-center",children:"1"==t.Status?new Date(t.Active_Date).toLocaleDateString():"-----"}),Object(L.jsx)("th",{className:"text-center",children:"1"==t.Status?new Date(t.End_Date).toLocaleDateString():"-----"}),"1"==t.Status?Object(L.jsxs)("th",{className:"text-center",style:e.calDateLeft(t.End_Date,t.Active_Date)>30?{color:"green"}:e.calDateLeft(t.End_Date,t.Active_Date)<15?{color:"yellow"}:{color:"red"},children:[e.calDateLeft(t.End_Date,t.Active_Date)," ng\xe0y n\u1eefa"]}):Object(L.jsx)("th",{className:"text-center",children:"-----"}),Object(L.jsx)("th",{className:"text-center",children:Object(L.jsx)(m.a,{color:e.getBadgeStatus(t.Status),children:e.getStatus(t.Status)})}),Object(L.jsx)("td",{className:"text-center",children:Object(L.jsx)(m.d,{outline:!0,color:"info",size:"sm",onClick:function(){var a=Object(c.a)(r.a.mark((function a(n){return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:e.setState({arrDetailPackage:t.Array_Feature,current_package:t.Name});case 1:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}(),children:Object(L.jsx)(x.a,{name:"cil-magnifying-glass"})})})]},a)})):""]})]}),Object(L.jsx)("br",{}),Object(L.jsx)(m.K,{children:Object(L.jsxs)(m.L,{children:["Chi ti\u1ebft t\xednh n\u0103ng (",l,")"]})}),this.renderDetailPackage()]}),Object(L.jsx)(m.J,{children:Object(L.jsx)(m.d,{color:"secondary",onClick:function(){e.setState({toggleView:!e.state.toggleView})},children:"\u0110\xf3ng"})})]})]})}}]),a}(u.Component),y=Object(n.a)({datePicker:{marginBottom:20},wa10:{width:"5%",float:"left",height:"80px"},pagination:{marginRight:"5px"},flexLabel:{width:100},flexOption:{width:200,margin:"1px"},a:{textDecoration:"none"},floatRight:{float:"right",marginTop:"3px"},spinner:{width:"30px"},center:{textAlign:"center"},tbody:{height:"380px",overflowY:"auto"},wh12:{width:"10%",float:"left",height:"80px"},wh15:{width:"15%",float:"left",height:"80px"},w5:{width:"12%",float:"left",height:"80px"},row:{float:"left",width:"100%"},success:{color:"green"},danger:{color:"red"},mgl5:{marginLeft:"5px"},tags:{float:"right",marginRight:"5px"},searchInput:{width:"100%",display:"inline-block",margin:"1px"},userActive:{color:"green"},userPending:{color:"red"},nagemonNameCol:{width:"328px"},image:{width:"100px",height:"100px",borderRadius:"99999px"}},"mgl5",{marginBottom:"0px"});t.default=S},643:function(e,t,a){"use strict";t.a={BASE_URL:"https://api-soida.applamdep.com",LIST_USER:"/api/list-user",LIST_USER_WITH_ID:"/api/list-user?id=",ADD_USER:"/api/add-user",UPDATE_USER:"/api/update-user",DELETE_USER:"/api/delete-user",LOGIN_ADMIN:"/api/login_admin",GET_SHOP:"/api/get-shop",GET_SALE:"/api/get-sale",GET_COEFFICIENT:"/api/calculator-coefficient-user",GET_COEFFICIENT_PER_SALE:"/api/calculator-coefficient-user-per-sale",GET_USER_SALE_BY_MONTH:"/api/get-user-of-sale-by-month",CALCULATOR_ALL_USER_OF_COMPANY:"/api/calculator-all-user-company",CALCULATOR_ALL_USER_OF_SALE:"/api/calculator-all-user-of-sale",GET_SEEDER:"/api/get-seed",GET_SALE_NAME:"/api/get-name-sale",GET_USER_BY_ID:"/api/get-user-byID",LIST_CUSTOMER:"/api/list-customer",LIST_CUSTOMER_BY_MONTH:"/api/get-user-sale-by-month",LIST_TYPEKEY:"/api/list-typekey",LIST_TYPEKEY_WITH_ID:"/api/list-typekey?id=",ADD_TYPEKEY:"/api/add-typekey",UPDATE_TYPEKEY:"/api/update-typekey",DELETE_TYPEKEY:"/api/delete-typekey",LIST_HARDWARE:"/api/list-hardware",LIST_HARDWARE_WITH_ID:"/api/list-hardware?id=",ADD_HARDWARE:"/api/add-hardware",UPDATE_HARDWARE:"/api/update-hardware",DELETE_HARDWARE:"/api/delete-hardware",LIST_ORDER:"/api/list-order",LIST_ORDER_BY_SALE:"/api/plugin-list-order-by-saleid",ADD_ORDER:"/api/add-order",UPDATE_STATUS_ORDER:"/api/update-status-order",CHECK_OUT:"/api/checkout-order",LIST_TRANSACTION:"/api/list-transaction",ADD_TRANSACTION:"/api/add-transaction",LIST_CHECK_OUT:"/api/list-checkout",LIST_HARDWARE_CHECKOUT:"/api/get-list-hardward-by-check-out",UPDATE_STATUS_CHECKOUT:"/api/update-status-hardware",LIST_ORDER_DETAIL:"/api/list-orderdetail",ADD_ORDER_DETAIL:"/api/add-orderdetail",LIST_ROLE:"/api/list-role",LIST_ROLE_WITH_ID:"/api/list-role?id=",ADD_ROLE:"/api/add-role",UPDATE_ROLE:"/api/update-role",DELETE_ROLE:"/api/delete-role",LIST_PACKAGE:"/api/list-package",ADD_PACKAGE:"/api/add-package",UPDATE_PACKAGE:"/api/update-package",DELETE_PACKAGE:"/api/delete-package",PLUGIN_DATA_PACKAGE:"/api/get-name-package",LIST_SALELOG:"/api/list-salelog",LIST_SALELOG_WITH_ID:"/api/list-salelog?id=",ADD_SALELOG:"/api/add-salelog",UPDATE_SALELOG:"/api/update-salelog",DELETE_SALELOG:"/api/delete-salelog",DATA_SALE:"/api/get-data-sale",LIST_SALE:"/api/list-sale",LIST_SALE_WITH_ID:"/api/list-sale?id=",ADD_SALE:"/api/add-sale",UPDATE_SALE:"/api/update-sale",DELETE_SALE:"/api/delete-sale",LIST_KEYORDER:"/api/list-keyorder",LIST_KEYORDER_WITH_ID:"/api/list-keyorder?id=",ADD_KEYORDER:"/api/add-keyorder",UPDATE_KEYORDER:"/api/update-keyorder",DELETE_KEYORDER:"/api/delete-keyorder",LIST_KEY:"/api/list-key",LIST_KEY_WITH_ID:"/api/list-key?id=",ADD_KEY:"/api/add-key",UPDATE_KEY:"/api/update-key",DELETE_KEY:"/api/delete-key",PLUGIN_LIST_COMPANY:"/api/plugin-list-company",PLUGIN_LIST_COMPANY_BY_ID:"/api/plugin-list-company-by-id",PLUGIN_LIST_COMPANY_WITH_ID:"/api/plugin-list-company?id=",PLUGIN_ADD_COMPANY:"/api/plugin-add-company",PLUGIN_UPDATE_COMPANY:"/api/plugin-update-company",PLUGIN_DELETE_COMPANY:"/api/plugin-delete-company",PLUGIN_DATA_COMPANY:"/api/plugin-get-data-company",LIST_COMPANY:"/api/list-company",LIST_COMPANY_WITH_ID:"/api/list-company?id=",ADD_COMPANY:"/api/add-company",UPDATE_COMPANY:"/api/update-company",DELETE_COMPANY:"/api/delete-company",DATA_COMPANY:"/api/get-data-company",LIST_LINK:"/api/list-link",LIST_LINK_WITH_ID:"/api/list-link?id=",ADD_LINK:"/api/add-link",UPDATE_LINK:"/api/update-link",DELETE_LINK:"/api/delete-link","GET-LINK-BY-ID":"/api/link-by-id",LIST_FEATURE:"/api/list-feature",ADD_FEATURE:"/api/add-feature",UPDATE_FEATURE:"/api/update-feature",DELETE_FEATURE:"/api/delete-feature",DATA_CHOOSE_FEATURE:"/api/get-feature-choose",LIST_PLUGIN_ORDER:"/api/plugin-list-order",LIST_PLUGIN_ORDER_BY_ID:"/api/plugin-list-order-by-id",ADD_PLUGIN_ORDER:"/api/plugin-add-order",UPDATE_PLUGIN_ORDER:"/api/plugin-update-order",DELETE_PLUGIN_ORDER:"/api/plugin-delete-order",UPDATE_SLUG:"/api/plugin-update-slug",PLUGIN_LIST_USER:"/api/plugin-list-user",PLUGIN_ADD_USER:"/api/plugin-add-user",PLUGIN_ADD_SALE:"/api/plugin-add-sale",PLUGIN_UPDATE_USER:"/api/plugin-update-user",PLUGIN_DELETE_USER:"/api/plugin-delete-user",PLUGIN_RESET_PASSWORD:"/api/plugin-reset-password",PLUGIN_UPDATE_STATUS:"/api/plugin-update-status",PLUGIN_LOGIN_ADMIN:"/api/plugin-login_admin",PLUGIN_GET_USER_BYID:"/api/plugin-get-user-byID",PLUGIN_GET_USER_BY_BODY:"/api/plugin-get-user-byID-with-body",PLUGIN_LIST_ROLE:"/api/plugin-list-role",PLUGIN_ADD_ROLE:"/api/plugin-add-role",PLUGIN_UPDATE_ROLE:"/api/plugin-update-role",PLUGIN_DELETE_ROLE:"/api/plugin-delete-role"}},644:function(e,t,a){"use strict";a(2);var n=a(638),i=a.n(n),r=a(20),c=function(e){var t=e.field,a=e.value,n=e.label,c=e.error,s=e.type,l=e.onChange,d=e.checkUserExists,o=e.readOnly,u=e.placeholder;return Object(r.jsxs)("div",{className:i()("form-group",{"has-error":c}),children:[Object(r.jsx)("label",{className:"control-label",children:n}),Object(r.jsx)("input",{onChange:l,onBlur:d,value:a,type:s,name:t,placeholder:u,readOnly:o,className:"form-control"}),c&&Object(r.jsx)("span",{className:"help-block",children:c})]})};c.defaultProps={type:"text"},t.a=c}}]);
//# sourceMappingURL=42.a2223243.chunk.js.map