(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[51],{1269:function(e,t,a){"use strict";a.r(t),function(e){var i=a(165),n=a(114),s=a.n(n),r=a(662),c=a(167),l=a(168),o=a(170),d=a(169),p=a(2),u=a(832),_=a(866),E=a(679),h=a(685),O=a(865),D=a(1294),T=a(1250),S=a(1251),b=a(1252),g=a(655),A=(a(664),a(684),a(647)),j=(a(649),a(661)),m=a.n(j),L=a(20),f=new Headers,I=localStorage.getItem("auth");f.append("Authorization","Bearer "+I),f.append("Content-Type","application/json");var y=function(t){Object(o.a)(n,t);var a=Object(d.a)(n);function n(e){var t;return Object(c.a)(this,n),(t=a.call(this,e)).getData=Object(r.a)(s.a.mark((function e(){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.setState({isLoading:!0}),e.next=3,m()({baseURL:A.a.BASE_URL,url:A.a.LIST_HARDWARE_CHECKOUT,method:"POST",headers:t.state.token});case 3:a=e.sent,t.pagination(a.data.data),t.setState({dataApi:a.data.data}),0,t.setState({isLoading:!1,totalActive:0});case 8:case"end":return e.stop()}}),e)}))),t.openDelete=function(e){t.setState({modalDelete:!t.state.modalDelete,delete:e})},t.state={data:[],key:"",keyName:"",keyActive:"",keyEnd:"",keyStatus:"",keyCode:"",activePage:1,page:1,itemsCount:0,limit:20,totalActive:0,modalCom:!1,viewingUser:{},communities:[],updated:"",dataApi:[],action:"new",Name:"",Active_Date:new Date,End_Date:new Date,Status:"",modalDelete:!1,delete:null,dataCompany:[],currentCompany:"",arrPagination:[],indexPage:0,role:localStorage.getItem("role"),company_id:localStorage.getItem("user"),token:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}},t}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=Object(r.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(this.getData(),t=JSON.parse(localStorage.getItem("url")),a=0;a<t.length;a++)"#"+t[a].to==window.location.hash&&1==t[a].hidden&&(window.location.href="#/");case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getBadge",value:function(e){switch(e){case"ENABLE":return"success";case"DISABLE":return"secondary";default:return"primary"}}},{key:"pagination",value:function(e){var t,a,i,n=[];for(t=0,a=e.length;t<a;t+=5)i=e.slice(t,t+5),n.push(i);this.setState({arrPagination:n,data:n[this.state.indexPage]})}},{key:"searchKey",value:function(){var e=this.state,t=(e.indexPage,e.key),a=(e.keyName,e.keyActive,e.keyEnd,e.keyCode,e.keyStatus);if(""!=t||""!=a){var i=[];this.state.dataApi.map((function(e){(e.Transaction_ID.toLocaleUpperCase().includes(t.toLocaleUpperCase())||e.HardWard_ID.toLocaleUpperCase().includes(t.toLocaleUpperCase()))&&e.Status.toLocaleUpperCase().includes(a.toLocaleUpperCase())&&i.push(e)}));var n=0;i.map((function(e){"Actived"==e.Status&&(n+=1)})),this.setState({data:i,totalActive:n})}else{var s=0;this.state.dataApi.map((function(e){"Actived"==e.Status&&(s+=1)})),this.setState({data:this.state.dataApi,totalActive:s})}}},{key:"actionSearch",value:function(e,t){var a=this;this.setState(Object(i.a)({},t,e.target.value),(function(){a.searchKey()}))}},{key:"resetSearch",value:function(){var e=this;this.setState({keyName:"",keyActive:new Date,keyEnd:new Date,keyStatus:"",keyCode:""},(function(){e.searchKey()}))}},{key:"toggleModal",value:function(){var e=Object(r.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:"new"==t&&this.setState({modalCom:!this.state.modalCom,action:t,Name:"",Active_Date:new Date,End_Date:new Date});case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"onChange",value:function(e,t){this.setState(Object(i.a)({},e,t))}},{key:"addPackageSale",value:function(){var e=Object(r.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"openUpdate",value:function(){var e=Object(r.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.setState({modalCom:!this.state.modalCom,action:"update",id:t._id,Status:t.Status});case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"updateStatus",value:function(){var e=Object(r.a)(s.a.mark((function e(){var t,a,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.state.Status,a={id:this.state.id,Status:t},this.setState({isLoading:!0}),e.next=5,m()({baseURL:A.a.BASE_URL,url:A.a.UPDATE_STATUS_CHECKOUT,method:"POST",data:a});case 5:1==(i=e.sent).data.is_success?(this.getData(),this.setState({modalCom:!this.state.modalCom})):(alert(i.data.message),this.setState({isLoading:!1}));case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"delete",value:function(){var e=Object(r.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"getUsers",value:function(){var t=this,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,i=this.state.limit,n=this.state.key||"",s={method:"GET",headers:f};fetch(e.BASE_URL+"/admin/users?key="+n+"&page="+a+"&limit="+i,s).then((function(e){e.json().then((function(e){t.setState({data:e.data,itemsCount:e.total,activePage:a,totalActive:e.totalActive,updated:""})}))})).catch(console.log)}},{key:"handlePageChange",value:function(){var e=Object(r.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.getUsers(t);case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"toggle",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";this.setState({modal:!this.state.modal,image:"",url:"",isActive:!1,isLoading:!1,errors:{},action:e,position:1,data:[],updated:""})}},{key:"inputChange",value:function(e){this.setState(Object(i.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){var e=this,t=this.state,a=t.data,i=t.key,n=(t.viewingUser,t.communities,t.action),s=(t.End_Date,t.Active_Date,t.dataCompany,t.currentCompany,t.arrPagination),r=t.indexPage;return this.state.isLoading?Object(L.jsx)("div",{id:"page-loading",children:Object(L.jsxs)("div",{className:"three-balls",children:[Object(L.jsx)("div",{className:"ball ball1"}),Object(L.jsx)("div",{className:"ball ball2"}),Object(L.jsx)("div",{className:"ball ball3"})]})}):Object(L.jsxs)("div",{children:[Object(L.jsxs)(u.a,{children:[Object(L.jsxs)(_.a,{children:["Danh s\xe1ch ph\u1ea7n c\u1ee9ng ch\u1ee7 qu\u1ea3n (Page: ",this.state.indexPage+1,")",Object(L.jsx)("div",{style:R.tags,children:Object(L.jsx)(g.N,{children:Object(L.jsx)(g.j,{sm:"6",lg:"12",children:Object(L.jsxs)(g.N,{children:[Object(L.jsx)(g.j,{sm:"6",lg:"4",children:Object(L.jsx)("div",{children:Object(L.jsx)(E.a,{style:R.searchInput,onChange:function(t){e.actionSearch(t,"key")},name:"key",value:i,placeholder:"T\u1eeb kh\xf3a"})})}),Object(L.jsx)(g.j,{sm:"6",lg:"4",children:Object(L.jsx)(g.O,{style:R.flexOption,onChange:function(t){e.actionSearch(t,"keyStatus")},custom:!0,children:["ENABLE","DISABLE"].map((function(e,t){return Object(L.jsx)("option",{value:e,children:e})}))})}),Object(L.jsx)(g.j,{sm:"6",lg:"4",children:Object(L.jsx)(h.a,{color:"primary",style:{width:"100%",marginTop:5},size:"sm",onClick:function(t){e.resetSearch()},children:"L\xe0m m\u1edbi t\xecm ki\u1ebfm"})})]})})})})]}),Object(L.jsx)(O.a,{children:Object(L.jsxs)("table",{className:"table table-hover table-outline mb-0 d-none d-sm-table",children:[Object(L.jsx)("thead",{className:"thead-light",children:Object(L.jsxs)("tr",{children:[Object(L.jsx)("th",{className:"text-center",children:"STT."}),Object(L.jsx)("th",{className:"text-center",children:"M\xe3 giao d\u1ecbch"}),Object(L.jsx)("th",{className:"text-center",children:"M\xe3 ph\u1ea7n c\u1ee9ng"}),Object(L.jsx)("th",{className:"text-center",children:"Ng\xe0y k\xedch ho\u1ea1t"}),Object(L.jsx)("th",{className:"text-center",children:"Ng\xe0y h\u1ebft h\u1ea1n"}),Object(L.jsx)("th",{className:"text-center",children:"Tr\u1ea1ng th\xe1i"}),Object(L.jsx)("th",{className:"text-center",children:"#"})]})}),Object(L.jsx)("tbody",{children:void 0!=a?a.map((function(t,a){return Object(L.jsxs)("tr",{children:[Object(L.jsx)("td",{className:"text-center",children:a+1}),Object(L.jsx)("td",{className:"text-center",children:t.Transaction_ID}),Object(L.jsx)("td",{className:"text-center",children:t.HardWard_ID}),Object(L.jsx)("td",{className:"text-center",children:new Date(t.Active_Date).toLocaleDateString()+" "+new Date(t.Active_Date).toLocaleTimeString()}),Object(L.jsx)("td",{className:"text-center",children:new Date(t.End_Date).toLocaleDateString()+" "+new Date(t.End_Date).toLocaleTimeString()}),Object(L.jsx)("td",{className:"text-center",children:Object(L.jsx)(g.a,{color:e.getBadge(t.Status),children:t.Status})}),Object(L.jsx)("td",{className:"text-center",children:Object(L.jsx)(h.a,{outline:!0,color:"primary",size:"sm",onClick:function(a){return e.openUpdate(t)},children:"Update"})})]},a)})):""})]})})]}),1==s.length?"":Object(L.jsx)("div",{style:{float:"right",marginRight:"10px",padding:"10px"},children:Object(L.jsx)("tr",{style:R.row,children:s.map((function(t,a){return Object(L.jsxs)("td",{children:[Object(L.jsx)(h.a,{style:{marginRight:"5px"},color:a==r?"primary":"danger",onClick:function(t){e.setState({data:s[a],indexPage:a})},children:a+1})," "]})}))})}),Object(L.jsxs)(D.a,{isOpen:this.state.modalCom,className:this.props.className,children:[Object(L.jsx)(T.a,{children:"new"==this.state.action?"Create":"Update"}),Object(L.jsx)(S.a,{children:"new"==n?"":Object(L.jsxs)("div",{children:[Object(L.jsx)("label",{style:R.flexLabel,htmlFor:"tag",children:"Tr\u1ea1ng th\xe1i:"}),Object(L.jsxs)("select",{style:R.flexOption,name:"Status",onChange:function(t){return e.onChange("Status",t.target.value)},children:[Object(L.jsx)("option",{value:this.state.Status,children:""==this.state.Status?" - - - - - - - - - - ":this.state.Status}),["ENABLE","DISABLE"].map((function(t,a){return t==e.state.Status?Object(L.jsx)("option",{selected:!0,value:t,children:t}):Object(L.jsx)("option",{value:t,children:t})}))]})]})}),Object(L.jsxs)(b.a,{children:[Object(L.jsx)(h.a,{color:"primary",onClick:function(t){"new"===e.state.action?e.addPackageSale():e.updateStatus()},disabled:this.state.isLoading,children:"Save"})," ",Object(L.jsx)(h.a,{color:"secondary",onClick:function(t){return e.toggleModal("new")},children:"Cancel"})]})]}),Object(L.jsxs)(D.a,{isOpen:this.state.modalDelete,toggle:function(t){return e.setState({modalDelete:!e.state.modalDelete,delete:null})},className:this.props.className,children:[Object(L.jsx)(T.a,{toggle:function(t){return e.setState({modalDelete:!e.state.modalDelete,delete:null})},children:"Delete"}),Object(L.jsx)(S.a,{children:Object(L.jsx)("label",{htmlFor:"tag",children:'Do you want to delete user "'.concat(this.state.delete?this.state.delete.Email:"",'" ?')})}),Object(L.jsxs)(b.a,{children:[Object(L.jsx)(h.a,{color:"primary",onClick:function(t){return e.delete()},disabled:this.state.isLoading,children:"Delete"})," ",Object(L.jsx)(h.a,{color:"secondary",onClick:function(t){return e.setState({modalDelete:!e.state.modalDelete,delete:null})},children:"Cancel"})]})]})]})}}]),n}(p.Component),R=Object(i.a)({datePicker:{marginBottom:20},flexLabel:{width:100},flexOption:{width:200,margin:"1px"},a:{textDecoration:"none"},floatRight:{float:"right",marginTop:"3px"},spinner:{width:"30px"},center:{textAlign:"center"},tbody:{height:"380px",overflowY:"auto"},wa10:{width:"5%",float:"left",height:"80px"},wh16:{width:"17%",float:"left",height:"80px"},wh15:{width:"20%",float:"left",height:"80px"},w5:{width:"20%",float:"left",height:"80px"},row:{float:"left",width:"100%"},success:{color:"green"},danger:{color:"red"},mgl5:{marginLeft:"5px"},tags:{float:"right",marginRight:"5px"},searchInput:{width:"200px",display:"inline-block",margin:"1px"},userActive:{color:"green"},userPending:{color:"red"},nagemonNameCol:{width:"328px"},image:{width:"100px",height:"100px",borderRadius:"99999px"}},"mgl5",{marginBottom:"5px"});t.default=y}.call(this,a(115))},647:function(e,t,a){"use strict";var i,n=a(165);t.a=(i={BASE_URL:"https://api-soida.applamdep.com",BASE_URL_CURRENT:"https://id.applamdep.com/",LIST_USER:"/api/list-user",LIST_USER_WITH_ID:"/api/list-user?id=",ADD_USER:"/api/add-user",UPDATE_USER:"/api/update-user",DELETE_USER:"/api/delete-user",LOGIN_ADMIN:"/api/login_admin",GET_SHOP:"/api/get-shop",GET_SALE:"/api/get-sale",GET_COEFFICIENT:"/api/calculator-coefficient-user",GET_COEFFICIENT_PER_SALE:"/api/calculator-coefficient-user-per-sale",GET_USER_SALE_BY_MONTH:"/api/get-user-of-sale-by-month",CALCULATOR_ALL_USER_OF_COMPANY:"/api/calculator-all-user-company",CALCULATOR_ALL_USER_OF_SALE:"/api/calculator-all-user-of-sale",GET_SEEDER:"/api/get-seed",GET_SALE_NAME:"/api/get-name-sale",GET_USER_BY_ID:"/api/get-user-byID",LIST_CUSTOMER:"/api/list-customer",LIST_CUSTOMER_BY_MONTH:"/api/get-user-sale-by-month",LIST_TYPEKEY:"/api/list-typekey",LIST_TYPEKEY_WITH_ID:"/api/list-typekey?id=",ADD_TYPEKEY:"/api/add-typekey",UPDATE_TYPEKEY:"/api/update-typekey",DELETE_TYPEKEY:"/api/delete-typekey",LIST_HARDWARE:"/api/list-hardware",LIST_HARDWARE_WITH_ID:"/api/list-hardware?id=",ADD_HARDWARE:"/api/add-hardware",UPDATE_HARDWARE:"/api/update-hardware",DELETE_HARDWARE:"/api/delete-hardware",LIST_ORDER:"/api/list-order",LIST_ORDER_BY_SALE:"/api/plugin-list-order-by-saleid",ADD_ORDER:"/api/add-order",UPDATE_STATUS_ORDER:"/api/update-status-order",CHECK_OUT:"/api/checkout-order",LIST_TRANSACTION:"/api/list-transaction",ADD_TRANSACTION:"/api/add-transaction",LIST_CHECK_OUT:"/api/list-checkout",LIST_HARDWARE_CHECKOUT:"/api/get-list-hardward-by-check-out",UPDATE_STATUS_CHECKOUT:"/api/update-status-hardware",LIST_ORDER_DETAIL:"/api/list-orderdetail",ADD_ORDER_DETAIL:"/api/add-orderdetail",LIST_ROLE:"/api/list-role",LIST_ROLE_WITH_ID:"/api/list-role?id=",ADD_ROLE:"/api/add-role",UPDATE_ROLE:"/api/update-role",DELETE_ROLE:"/api/delete-role",LIST_PACKAGE:"/api/list-package",ADD_PACKAGE:"/api/add-package",UPDATE_PACKAGE:"/api/update-package",DELETE_PACKAGE:"/api/delete-package",PLUGIN_DATA_PACKAGE:"/api/get-name-package",LIST_SALELOG:"/api/list-salelog",LIST_SALELOG_WITH_ID:"/api/list-salelog?id=",ADD_SALELOG:"/api/add-salelog",UPDATE_SALELOG:"/api/update-salelog",DELETE_SALELOG:"/api/delete-salelog",DATA_SALE:"/api/get-data-sale",LIST_SALE:"/api/list-sale",LIST_SALE_WITH_ID:"/api/list-sale?id=",ADD_SALE:"/api/add-sale",UPDATE_SALE:"/api/update-sale",DELETE_SALE:"/api/delete-sale",LIST_KEYORDER:"/api/list-keyorder",LIST_KEYORDER_WITH_ID:"/api/list-keyorder?id=",ADD_KEYORDER:"/api/add-keyorder",UPDATE_KEYORDER:"/api/update-keyorder",DELETE_KEYORDER:"/api/delete-keyorder",LIST_KEY:"/api/list-key",LIST_KEY_WITH_ID:"/api/list-key?id=",ADD_KEY:"/api/add-key",UPDATE_KEY:"/api/update-key",DELETE_KEY:"/api/delete-key",PLUGIN_LIST_COMPANY:"/api/plugin-list-company",PLUGIN_LIST_COMPANY_BY_ID:"/api/plugin-list-company-by-id",PLUGIN_LIST_COMPANY_WITH_ID:"/api/plugin-list-company?id=",PLUGIN_ADD_COMPANY:"/api/plugin-add-company",PLUGIN_UPDATE_COMPANY:"/api/plugin-update-company",PLUGIN_DELETE_COMPANY:"/api/plugin-delete-company",PLUGIN_DATA_COMPANY:"/api/plugin-get-data-company",LIST_COMPANY:"/api/list-company",LIST_COMPANY_WITH_ID:"/api/list-company?id=",ADD_COMPANY:"/api/add-company",UPDATE_COMPANY:"/api/update-company",DELETE_COMPANY:"/api/delete-company",DATA_COMPANY:"/api/get-data-company",LIST_LINK:"/api/list-link",LIST_LINK_WITH_ID:"/api/list-link?id=",ADD_LINK:"/api/add-link",UPDATE_LINK:"/api/update-link",DELETE_LINK:"/api/delete-link","GET-LINK-BY-ID":"/api/link-by-id",LIST_FEATURE:"/api/list-feature",ADD_FEATURE:"/api/add-feature",UPDATE_FEATURE:"/api/update-feature",DELETE_FEATURE:"/api/delete-feature",DATA_CHOOSE_FEATURE:"/api/get-feature-choose",LIST_PLUGIN_ORDER:"/api/plugin-list-order",LIST_PLUGIN_ORDER_BY_ID:"/api/plugin-list-order-by-id",LIST_PLUGIN_ORDER_FOR_ADMIN:"/api/plugin-list-order-for-admin",ADD_PLUGIN_ORDER:"/api/plugin-add-order",UPDATE_PLUGIN_ORDER:"/api/plugin-update-order",DELETE_PLUGIN_ORDER:"/api/plugin-delete-order",UPDATE_SLUG:"/api/plugin-update-slug",PLUGIN_LIST_USER:"/api/plugin-list-user",PLUGIN_ALL_USER:"/api/plugin-all-user",PLUGIN_ADD_USER:"/api/plugin-add-user",PLUGIN_ADD_SALE:"/api/plugin-add-sale",PLUGIN_UPDATE_USER:"/api/plugin-update-user",PLUGIN_DELETE_USER:"/api/plugin-delete-user",PLUGIN_RESET_PASSWORD:"/api/plugin-reset-password",PLUGIN_UPDATE_PASSWORD:"/api/plugin-update-password",PLUGIN_UPDATE_STATUS:"/api/plugin-update-status",PLUGIN_LOGIN_ADMIN:"/api/plugin-login_admin",PLUGIN_GET_USER_BYID:"/api/plugin-get-user-byID",PLUGIN_GET_USER_BY_BODY:"/api/plugin-get-user-byID-with-body",PLUGIN_LIST_ROLE:"/api/plugin-list-role",PLUGIN_ADD_ROLE:"/api/plugin-add-role",PLUGIN_UPDATE_ROLE:"/api/plugin-update-role",PLUGIN_DELETE_ROLE:"/api/plugin-delete-role",CUS_RES_LIST:"/api/list-customer-request",CUS_RES_LIST_COMPANY:"/api/list-customer-request-for-company",CUS_RES_ADD:"/api/add-customer-request",CUS_RES_UPDATE:"/api/update-customer-request",CUS_RES_DELETE:"/api/delete-customer-request",REWARD_INFO_LIST:"/api/list-reward-info",REWARD_INFO_LIST_COMPANY:"/api/list-reward-info-for-company",REWARD_INFO_ADD:"/api/add-reward-info",REWARD_INFO_UPDATE:"/api/update-reward-info",REWARD_INFO_DELETE:"/api/delete-reward-info",REWARD_TRANS_LIST:"/api/list-reward-trans",REWARD_TRANS_ADD:"/api/list-reward-trans",REWARD_TRANS_UPDATE:"/api/update-reward-trans",REWARD_TRANS_DELETE:"/api/delete-reward-trans",TYPE_REQUEST_LIST:"/api/list-type-request",TYPE_REQUEST_ADD:"/api/add-type-request",TYPE_REQUEST_UPDATE:"/api/update-type-request",TYPE_REQUEST_DELETE:"/api/delete-type-request"},Object(n.a)(i,"LIST_CUSTOMER","/api/list-customer"),Object(n.a)(i,"LIST_CUSTOMER_FOR_COMPANY","/api/list-customer-for-company"),Object(n.a)(i,"LIST_SUGGEST_ITEM","/itemSdk"),Object(n.a)(i,"LIST_SUGGEST_ITEM_COMPANY","/itemSdk/"),Object(n.a)(i,"ADD_SUGGEST_ITEM","/itemSdk"),Object(n.a)(i,"UPDATE_SUGGEST_ITEM","/itemSdk/"),Object(n.a)(i,"DELETE_SUGGEST_ITEM","/itemSdk/deleteItem"),Object(n.a)(i,"LIST_SDK","/sdk"),Object(n.a)(i,"LIST_BRAND","/brands"),Object(n.a)(i,"LIST_BRAND_COMPANY","/brands/"),Object(n.a)(i,"ADD_BRAND","/add-brand"),Object(n.a)(i,"UPDATE_BRAND","/update-brand"),Object(n.a)(i,"DELETE_BRAND","/delete-brand"),Object(n.a)(i,"LIST_PRODUCT","/product"),Object(n.a)(i,"LIST_PRODUCT_COMPANY","/product/"),Object(n.a)(i,"ADD_PRODUCT","/add-product"),Object(n.a)(i,"UPDATE_PRODUCT","/update-product"),Object(n.a)(i,"DELETE_PRODUCT","/delete-product"),Object(n.a)(i,"LIST_TYPE","/types"),Object(n.a)(i,"LIST_TYPE_COMPANY","/types/"),Object(n.a)(i,"ADD_TYPE","/add-type"),Object(n.a)(i,"UPDATE_TYPE","/update-type"),Object(n.a)(i,"DELETE_TYPE","/delete-type"),Object(n.a)(i,"LIST_COLOR","/colors"),Object(n.a)(i,"LIST_COLOR_COMPANY","/colors/"),Object(n.a)(i,"ADD_COLOR","/add-color"),Object(n.a)(i,"UPDATE_COLOR","/update-color"),Object(n.a)(i,"DELETE_COLOR","/delete-color"),Object(n.a)(i,"LIST_HISTORY_SKIN","/api/get-history-skin"),Object(n.a)(i,"LIST_HISTORY_SKIN_BY_CONDITION","/api/get-history-skin-by-condition"),Object(n.a)(i,"ADD_HISTORY_SKIN","/api/add-history-skin"),Object(n.a)(i,"LIST_TYPE_PRODUCT","/api/list-type-product"),Object(n.a)(i,"ADD_TYPE_PRODUCT","/api/add-type-product"),Object(n.a)(i,"UPDATE_TYPE_PRODUCT","/api/update-type-product"),Object(n.a)(i,"DELETE_TYPE_PRODUCT","/api/delete-type-product"),Object(n.a)(i,"LIST_TYPE_SDK","/api/list-type-sdk"),Object(n.a)(i,"ADD_TYPE_SDK","/api/add-type-sdk"),Object(n.a)(i,"UPDATE_TYPE_SDK","/api/update-type-sdk"),Object(n.a)(i,"DELETE_TYPE_SDK","/api/delete-type-sdk"),i)},649:function(e,t,a){"use strict";a(2);var i=a(639),n=a.n(i),s=a(20),r=function(e){var t=e.field,a=e.value,i=e.label,r=e.error,c=e.type,l=e.onChange,o=e.checkUserExists,d=e.readOnly,p=e.placeholder,u=e.onClick;return Object(s.jsxs)("div",{className:n()("form-group",{"has-error":r}),children:[Object(s.jsx)("label",{className:"control-label",children:i}),Object(s.jsx)("input",{onChange:l,onClick:u,onBlur:o,value:a,type:c,name:t,placeholder:p,readOnly:d,className:"form-control"}),r&&Object(s.jsx)("span",{className:"help-block",children:r})]})};r.defaultProps={type:"text"},t.a=r},679:function(e,t,a){"use strict";var i=a(12),n=a(28),s=a(646),r=a(35),c=a(2),l=a.n(c),o=a(64),d=a.n(o),p=a(639),u=a.n(p),_=a(641),E={children:d.a.node,type:d.a.string,size:d.a.oneOfType([d.a.number,d.a.string]),bsSize:d.a.string,valid:d.a.bool,invalid:d.a.bool,tag:_.n,innerRef:d.a.oneOfType([d.a.object,d.a.func,d.a.string]),plaintext:d.a.bool,addon:d.a.bool,className:d.a.string,cssModule:d.a.object},h=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(s.a)(a)),a.focus=a.focus.bind(Object(s.a)(a)),a}Object(r.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.focus=function(){this.ref&&this.ref.focus()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,s=e.type,r=e.bsSize,c=e.valid,o=e.invalid,d=e.tag,p=e.addon,E=e.plaintext,h=e.innerRef,O=Object(n.a)(e,["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"]),D=["radio","checkbox"].indexOf(s)>-1,T=new RegExp("\\D","g"),S=d||("select"===s||"textarea"===s?s:"input"),b="form-control";E?(b+="-plaintext",S=d||"input"):"file"===s?b+="-file":"range"===s?b+="-range":D&&(b=p?null:"form-check-input"),O.size&&T.test(O.size)&&(Object(_.p)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),r=O.size,delete O.size);var g=Object(_.j)(u()(t,o&&"is-invalid",c&&"is-valid",!!r&&"form-control-"+r,b),a);return("input"===S||d&&"function"===typeof d)&&(O.type=s),O.children&&!E&&"select"!==s&&"string"===typeof S&&"select"!==S&&(Object(_.p)('Input with a type of "'+s+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete O.children),l.a.createElement(S,Object(i.a)({},O,{ref:h,className:g,"aria-invalid":o}))},t}(l.a.Component);h.propTypes=E,h.defaultProps={type:"text"},t.a=h},684:function(e,t,a){},685:function(e,t,a){"use strict";var i=a(12),n=a(28),s=a(646),r=a(35),c=a(2),l=a.n(c),o=a(64),d=a.n(o),p=a(639),u=a.n(p),_=a(641),E={active:d.a.bool,"aria-label":d.a.string,block:d.a.bool,color:d.a.string,disabled:d.a.bool,outline:d.a.bool,tag:_.n,innerRef:d.a.oneOfType([d.a.object,d.a.func,d.a.string]),onClick:d.a.func,size:d.a.string,children:d.a.node,className:d.a.string,cssModule:d.a.object,close:d.a.bool},h=function(e){function t(t){var a;return(a=e.call(this,t)||this).onClick=a.onClick.bind(Object(s.a)(a)),a}Object(r.a)(t,e);var a=t.prototype;return a.onClick=function(e){if(!this.props.disabled)return this.props.onClick?this.props.onClick(e):void 0;e.preventDefault()},a.render=function(){var e=this.props,t=e.active,a=e["aria-label"],s=e.block,r=e.className,c=e.close,o=e.cssModule,d=e.color,p=e.outline,E=e.size,h=e.tag,O=e.innerRef,D=Object(n.a)(e,["active","aria-label","block","className","close","cssModule","color","outline","size","tag","innerRef"]);c&&"undefined"===typeof D.children&&(D.children=l.a.createElement("span",{"aria-hidden":!0},"\xd7"));var T="btn"+(p?"-outline":"")+"-"+d,S=Object(_.j)(u()(r,{close:c},c||"btn",c||T,!!E&&"btn-"+E,!!s&&"btn-block",{active:t,disabled:this.props.disabled}),o);D.href&&"button"===h&&(h="a");var b=c?"Close":null;return l.a.createElement(h,Object(i.a)({type:"button"===h&&D.onClick?"button":void 0},D,{className:S,ref:O,onClick:this.onClick,"aria-label":a||b}))},t}(l.a.Component);h.propTypes=E,h.defaultProps={color:"secondary",tag:"button"},t.a=h}}]);
//# sourceMappingURL=51.aa71c026.chunk.js.map