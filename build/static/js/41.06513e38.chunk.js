(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[41],{1221:function(e,a,t){"use strict";t.r(a);var i=t(169),n=t(114),r=t.n(n),s=t(651),l=t(165),d=t(166),p=t(168),c=t(167),o=t(2),_=t(662),u=t(663),E=t(930),h=t(1177),T=t(931),O=t(659),j=t(1195),A=t(647),I=(t(652),t(661),t(643)),L=(t(644),t(650)),D=t.n(L),g=t(20),m=new Headers,S=localStorage.getItem("auth");m.append("Authorization","Bearer "+S),m.append("Content-Type","application/json");var R=function(e){Object(p.a)(t,e);var a=Object(c.a)(t);function t(e){var i;return Object(l.a)(this,t),(i=a.call(this,e)).getCompanyName=function(){var e=Object(s.a)(r.a.mark((function e(a){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D()({baseURL:I.a.BASE_URL,url:I.a.DATA_COMPANY,method:"POST",data:{company_id:a}});case 2:return t=e.sent,e.abrupt("return",t.data.data.Name);case 4:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),i.getData=Object(s.a)(r.a.mark((function e(){var a,t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=i.state,a.data_link_shop,a.data_link_recommand,a.data_link_sku,i.setState({isLoading:!0}),e.next=4,D()({baseURL:I.a.BASE_URL,url:I.a.PLUGIN_GET_USER_BYID,method:"POST",headers:i.state.token});case 4:t=e.sent,console.log(t),i.setState({dataApi:t.data.data,data:t.data.data});case 7:case"end":return e.stop()}}),e)}))),i.state={data:[],activePage:1,page:1,itemsCount:0,limit:20,totalActive:0,modalCom:!1,viewingUser:{},communities:[],updated:"",dataApi:[],action:"new",modalDelete:!1,delete:null,dataCompany:[],currentCompany:"",dataTypeKey:[],currentTypeKey:"",dataHardWare:[],currentHardWare:"",arrPagination:[],indexPage:0,hidden:!0,token:{Authorization:"Bearer ".concat(localStorage.getItem("token"))},role:localStorage.getItem("role"),company_id:localStorage.getItem("user"),Name:"",Email:"",Phone:"",Gender:"",Address:"",Company_Id:"",Role_Id:"",UserName:"",Password:"",Status:"",link_shop:!0,data_link_shop:"",link_recommand:!0,data_link_recommand:"",link_sku:!0,data_link_sku:""},i}return Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=Object(s.a)(r.a.mark((function e(){var a,t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(this.getData(),a=JSON.parse(localStorage.getItem("url")),t=0;t<a.length;t++)"#"+a[t].to==window.location.hash&&1==a[t].hidden&&(window.location.href="#/");case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getBadge",value:function(e){switch(e){case"Actived":return"success";case"Deactived":return"danger";default:return"primary"}}},{key:"onChange",value:function(e,a){this.setState(Object(i.a)({},e,a))}},{key:"openUpdate",value:function(e){this.setState(Object(i.a)({},e,!this.state[e]))}},{key:"updateLink",value:function(){var e=Object(s.a)(r.a.mark((function e(){var a,t,i,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=this.state,t=a.data_link_shop,i=a.data_link_recommand,n=a.data_link_sku,e.next=3,D()({baseURL:I.a.BASE_URL,url:I.a.UPDATE_LINK,method:"POST",data:{link_shop:t,link_recommand:i,link_sku_hair:n},headers:this.state.token});case 3:e.sent;case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"inputChange",value:function(e){this.setState(Object(i.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){var e=this,a=this.state,t=a.data;a.link_shop,a.link_recommand,a.link_sku;return Object(g.jsx)("div",{className:"animated fadeIn",children:Object(g.jsx)(_.a,{children:Object(g.jsxs)(u.a,{children:[Object(g.jsx)("p",{style:b.success,children:this.state.updated}),Object(g.jsx)("p",{style:b.danger,children:this.state.deleted}),Object(g.jsxs)(E.a,{children:[Object(g.jsx)(h.a,{children:"TH\xd4NG TIN T\xc0I KHO\u1ea2N"}),Object(g.jsx)(T.a,{children:Object(g.jsx)(A.I,{children:Object(g.jsxs)(A.j,{sm:"12",lg:"6",children:[Object(g.jsx)(A.F,{children:Object(g.jsx)("strong",{children:"Qu\u1ea3n l\xfd t\xe0i kho\u1ea3n"})}),Object(g.jsxs)(A.I,{children:[Object(g.jsx)(A.j,{sm:"12",lg:"12",children:Object(g.jsxs)("div",{children:[Object(g.jsx)(A.F,{children:"T\xean"}),Object(g.jsx)(O.a,{style:b.searchInput,value:t.Name})]})}),Object(g.jsxs)(A.j,{sm:"12",lg:"12",children:[Object(g.jsx)(A.F,{children:"Email"}),Object(g.jsx)(O.a,{style:b.searchInput,value:t.Email})]}),Object(g.jsxs)(A.j,{sm:"12",lg:"12",children:[Object(g.jsx)(A.F,{children:"Phone"}),Object(g.jsx)(O.a,{style:b.searchInput,value:t.Phone})]}),Object(g.jsx)(A.j,{sm:"12",lg:"12",children:Object(g.jsxs)("div",{children:[Object(g.jsx)(A.F,{children:"Gender"}),Object(g.jsx)(O.a,{style:b.searchInput,value:t.Gender})]})}),Object(g.jsx)(A.j,{sm:"12",lg:"12",children:Object(g.jsxs)("div",{children:[Object(g.jsx)(A.F,{children:"Address"}),Object(g.jsx)(O.a,{style:b.searchInput,value:t.Address})]})}),Object(g.jsx)(A.j,{sm:"12",lg:"12",children:Object(g.jsxs)("div",{children:[Object(g.jsx)(A.F,{children:"Company Id"}),Object(g.jsx)(O.a,{style:b.searchInput,value:Object(s.a)(r.a.mark((function a(){return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.getCompanyName(t.Company_Id);case 2:case"end":return a.stop()}}),a)})))})]})}),Object(g.jsx)(A.j,{sm:"12",lg:"12",children:Object(g.jsxs)("div",{children:[Object(g.jsx)(A.F,{children:"Role Id"}),Object(g.jsx)(O.a,{style:b.searchInput,value:t.Role_Id})]})}),Object(g.jsx)(A.j,{sm:"12",lg:"12",children:Object(g.jsxs)("div",{children:[Object(g.jsx)(A.F,{children:"UserName"}),Object(g.jsx)(O.a,{style:b.searchInput,value:t.UserName})]})}),Object(g.jsxs)(A.j,{sm:"12",lg:"12",children:[Object(g.jsx)(A.F,{children:"Password"}),Object(g.jsxs)(A.I,{children:[Object(g.jsx)(A.j,{sm:"9",lg:"9",children:Object(g.jsx)(O.a,{type:"password",style:b.searchInput,readOnly:!0,onChange:function(e){},value:t.Password})}),Object(g.jsx)(A.j,{sm:"3",lg:"3",children:Object(g.jsx)(j.a,{color:"primary",onClick:function(e){},children:"Thay \u0111\u1ed5i"})})]})]}),Object(g.jsx)(A.j,{sm:"12",lg:"12",children:Object(g.jsxs)("div",{children:[Object(g.jsx)(A.F,{children:"Status"}),Object(g.jsx)(O.a,{style:b.searchInput,onChange:function(e){},value:t.Status})]})})]})]})})})]})]})})})}}]),t}(o.Component),b=Object(i.a)({datePicker:{marginBottom:20},wa10:{width:"5%",float:"left",height:"80px"},pagination:{marginRight:"5px"},flexLabel:{width:100},flexOption:{width:200,margin:"1px"},a:{textDecoration:"none"},floatRight:{float:"right",marginTop:"3px"},spinner:{width:"30px"},center:{textAlign:"center"},tbody:{height:"380px",overflowY:"auto"},wh12:{width:"10%",float:"left",height:"80px"},wh15:{width:"15%",float:"left",height:"80px"},w5:{width:"12%",float:"left",height:"80px"},row:{float:"left",width:"100%"},success:{color:"green"},danger:{color:"red"},mgl5:{marginLeft:"5px"},tags:{float:"right",marginRight:"5px"},searchInput:{width:"100%",display:"inline-block",margin:"1px"},userActive:{color:"green"},userPending:{color:"red"},nagemonNameCol:{width:"328px"},image:{width:"100px",height:"100px",borderRadius:"99999px"}},"mgl5",{marginBottom:"0px"});a.default=R},643:function(e,a,t){"use strict";a.a={BASE_URL:"https://api-soida.applamdep.com",LIST_USER:"/api/list-user",LIST_USER_WITH_ID:"/api/list-user?id=",ADD_USER:"/api/add-user",UPDATE_USER:"/api/update-user",DELETE_USER:"/api/delete-user",LOGIN_ADMIN:"/api/login_admin",GET_SHOP:"/api/get-shop",GET_SALE:"/api/get-sale",GET_COEFFICIENT:"/api/calculator-coefficient-user",GET_COEFFICIENT_PER_SALE:"/api/calculator-coefficient-user-per-sale",GET_USER_SALE_BY_MONTH:"/api/get-user-of-sale-by-month",CALCULATOR_ALL_USER_OF_COMPANY:"/api/calculator-all-user-company",CALCULATOR_ALL_USER_OF_SALE:"/api/calculator-all-user-of-sale",GET_SEEDER:"/api/get-seed",GET_SALE_NAME:"/api/get-name-sale",GET_USER_BY_ID:"/api/get-user-byID",LIST_CUSTOMER:"/api/list-customer",LIST_CUSTOMER_BY_MONTH:"/api/get-user-sale-by-month",LIST_TYPEKEY:"/api/list-typekey",LIST_TYPEKEY_WITH_ID:"/api/list-typekey?id=",ADD_TYPEKEY:"/api/add-typekey",UPDATE_TYPEKEY:"/api/update-typekey",DELETE_TYPEKEY:"/api/delete-typekey",LIST_HARDWARE:"/api/list-hardware",LIST_HARDWARE_WITH_ID:"/api/list-hardware?id=",ADD_HARDWARE:"/api/add-hardware",UPDATE_HARDWARE:"/api/update-hardware",DELETE_HARDWARE:"/api/delete-hardware",LIST_ORDER:"/api/list-order",ADD_ORDER:"/api/add-order",UPDATE_STATUS_ORDER:"/api/update-status-order",LIST_TRANSACTION:"/api/list-transaction",ADD_TRANSACTION:"/api/add-transaction",LIST_CHECK_OUT:"/api/list-checkout",LIST_HARDWARE_CHECKOUT:"/api/get-list-hardward-by-check-out",UPDATE_STATUS_CHECKOUT:"/api/update-status-hardware",LIST_ORDER_DETAIL:"/api/list-orderdetail",ADD_ORDER_DETAIL:"/api/add-orderdetail",LIST_ROLE:"/api/list-role",LIST_ROLE_WITH_ID:"/api/list-role?id=",ADD_ROLE:"/api/add-role",UPDATE_ROLE:"/api/update-role",DELETE_ROLE:"/api/delete-role",LIST_PACKAGE:"/api/list-package",ADD_PACKAGE:"/api/add-package",UPDATE_PACKAGE:"/api/update-package",DELETE_PACKAGE:"/api/delete-package",PLUGIN_DATA_PACKAGE:"/api/get-name-package",LIST_SALELOG:"/api/list-salelog",LIST_SALELOG_WITH_ID:"/api/list-salelog?id=",ADD_SALELOG:"/api/add-salelog",UPDATE_SALELOG:"/api/update-salelog",DELETE_SALELOG:"/api/delete-salelog",DATA_SALE:"/api/get-data-sale",LIST_SALE:"/api/list-sale",LIST_SALE_WITH_ID:"/api/list-sale?id=",ADD_SALE:"/api/add-sale",UPDATE_SALE:"/api/update-sale",DELETE_SALE:"/api/delete-sale",LIST_KEYORDER:"/api/list-keyorder",LIST_KEYORDER_WITH_ID:"/api/list-keyorder?id=",ADD_KEYORDER:"/api/add-keyorder",UPDATE_KEYORDER:"/api/update-keyorder",DELETE_KEYORDER:"/api/delete-keyorder",LIST_KEY:"/api/list-key",LIST_KEY_WITH_ID:"/api/list-key?id=",ADD_KEY:"/api/add-key",UPDATE_KEY:"/api/update-key",DELETE_KEY:"/api/delete-key",PLUGIN_LIST_COMPANY:"/api/plugin-list-company",PLUGIN_LIST_COMPANY_WITH_ID:"/api/plugin-list-company?id=",PLUGIN_ADD_COMPANY:"/api/plugin-add-company",PLUGIN_UPDATE_COMPANY:"/api/plugin-update-company",PLUGIN_DELETE_COMPANY:"/api/plugin-delete-company",PLUGIN_DATA_COMPANY:"/api/plugin-get-data-company",LIST_COMPANY:"/api/list-company",LIST_COMPANY_WITH_ID:"/api/list-company?id=",ADD_COMPANY:"/api/add-company",UPDATE_COMPANY:"/api/update-company",DELETE_COMPANY:"/api/delete-company",DATA_COMPANY:"/api/get-data-company",LIST_LINK:"/api/list-link",LIST_LINK_WITH_ID:"/api/list-link?id=",ADD_LINK:"/api/add-link",UPDATE_LINK:"/api/update-link",DELETE_LINK:"/api/delete-link","GET-LINK-BY-ID":"/api/link-by-id",LIST_FEATURE:"/api/list-feature",ADD_FEATURE:"/api/add-feature",UPDATE_FEATURE:"/api/update-feature",DELETE_FEATURE:"/api/delete-feature",DATA_CHOOSE_FEATURE:"/api/get-feature-choose",LIST_PLUGIN_ORDER:"/api/plugin-list-order",LIST_PLUGIN_ORDER_BY_ID:"/api/plugin-list-order-by-id",ADD_PLUGIN_ORDER:"/api/plugin-add-order",UPDATE_PLUGIN_ORDER:"/api/plugin-update-order",DELETE_PLUGIN_ORDER:"/api/plugin-delete-order",PLUGIN_LIST_USER:"/api/plugin-list-user",PLUGIN_ADD_USER:"/api/plugin-add-user",PLUGIN_UPDATE_USER:"/api/plugin-update-user",PLUGIN_DELETE_USER:"/api/plugin-delete-user",PLUGIN_RESET_PASSWORD:"/api/plugin-reset-password",PLUGIN_UPDATE_STATUS:"/api/plugin-update-status",PLUGIN_LOGIN_ADMIN:"/api/plugin-login_admin",PLUGIN_GET_USER_BYID:"/api/plugin-get-user-byID",PLUGIN_LIST_ROLE:"/api/plugin-list-role",PLUGIN_ADD_ROLE:"/api/plugin-add-role",PLUGIN_UPDATE_ROLE:"/api/plugin-update-role",PLUGIN_DELETE_ROLE:"/api/plugin-delete-role"}},644:function(e,a,t){"use strict";t(2);var i=t(638),n=t.n(i),r=t(20),s=function(e){var a=e.field,t=e.value,i=e.label,s=e.error,l=e.type,d=e.onChange,p=e.checkUserExists,c=e.readOnly,o=e.placeholder;return Object(r.jsxs)("div",{className:n()("form-group",{"has-error":s}),children:[Object(r.jsx)("label",{className:"control-label",children:i}),Object(r.jsx)("input",{onChange:d,onBlur:p,value:t,type:l,name:a,placeholder:o,readOnly:c,className:"form-control"}),s&&Object(r.jsx)("span",{className:"help-block",children:s})]})};s.defaultProps={type:"text"},a.a=s}}]);
//# sourceMappingURL=41.06513e38.chunk.js.map