(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[40],{1218:function(e,t,a){"use strict";a.r(t),function(e){var i=a(169),n=a(114),s=a.n(n),r=a(651),l=a(165),c=a(166),o=a(168),d=a(167),p=a(2),u=a(663),h=a(664),E=a(830),_=a(946),m=a(660),g=a(667),f=a(945),S=a(1251),T=a(1214),D=a(1215),b=a(1216),O=a(648),j=(a(653),a(666),a(643)),A=(a(644),a(650)),L=a.n(A),y=a(20),x=new Headers,I=localStorage.getItem("auth");x.append("Authorization","Bearer "+I),x.append("Content-Type","application/json");var R=function(t){Object(o.a)(n,t);var a=Object(d.a)(n);function n(e){var t;return Object(l.a)(this,n),(t=a.call(this,e)).getData=Object(r.a)(s.a.mark((function e(){var a,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.setState({isLoading:!0}),e.next=3,L()({baseURL:j.a.BASE_URL,url:j.a.LIST_KEY,method:"POST",headers:t.state.token});case 3:a=e.sent,t.pagination(a.data.data),t.setState({dataApi:a.data.data}),i=0,a.data.data.map((function(e){"Actived"==e.Status&&(i+=1)})),t.setState({isLoading:!1,totalActive:i});case 9:case"end":return e.stop()}}),e)}))),t.openDelete=function(e){t.setState({modalDelete:!t.state.modalDelete,delete:e})},t.state={data:[],key:"",keyName:"",keyCodeCompany:"",keyTypeKey:"",keyActive:"",keyEndDate:"",keyStatus:"",keyValue:"",activePage:1,page:1,itemsCount:0,limit:20,totalActive:0,modalCom:!1,viewingUser:{},communities:[],updated:"",dataApi:[],action:"new",Name:"",Company_Id:"",Type_Key:"",Start_Date:new Date,End_Date:new Date,Status:"",Value:"",modalDelete:!1,delete:null,dataCompany:[],currentCompany:"",dataTypeKey:[],currentTypeKey:"",dataHardWare:[],currentHardWare:"",arrPagination:[],indexPage:0,hidden:!0,token:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}},t}return Object(c.a)(n,[{key:"componentDidMount",value:function(){var e=Object(r.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.getData(),e.next=3,this.getHardWData_all();case 3:for(t=JSON.parse(localStorage.getItem("url")),a=0;a<t.length;a++)"#"+t[a].to==window.location.hash&&1==t[a].hidden&&(window.location.href="#/");case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"pagination",value:function(e){var t,a,i,n=[];for(t=0,a=e.length;t<a;t+=5)i=e.slice(t,t+5),n.push(i);0==n.length?this.setState({hidden:!1}):this.setState({hidden:!0}),this.setState({arrPagination:n,data:n[this.state.indexPage]})}},{key:"getBadge",value:function(e){switch(e){case"INSTOCK":return"success";case"DISABLE":return"danger";default:return"primary"}}},{key:"getHardWData_all",value:function(){var e=Object(r.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L()({baseURL:j.a.BASE_URL,url:j.a.LIST_HARDWARE,method:"POST",headers:this.state.token});case 2:t=e.sent,this.setState({dataHardWare:t.data.data});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getHardWData",value:function(){var e=Object(r.a)(s.a.mark((function e(t){var a,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L()({baseURL:j.a.BASE_URL,url:j.a.LIST_HARDWARE,method:"POST",data:{condition:{Status:"INSTOCK"}},headers:this.state.token});case 2:if(a=e.sent,""==t&&void 0==t){e.next=8;break}return e.next=6,L()({baseURL:j.a.BASE_URL,url:j.a.LIST_HARDWARE_WITH_ID+t,method:"POST",headers:this.state.token});case 6:null==(i=e.sent).data.data&&void 0==i.data.data||this.setState({currentHardWare:i.data.data.Name});case 8:this.setState({dataHardWare:a.data.data});case 9:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"searchKey",value:function(){var e=this.state,t=e.indexPage,a=e.key,i=e.keyStatus;if(""!=a||""!=i){var n=[];this.state.dataApi.map((function(e){(e.Name.toLocaleUpperCase().includes(a.toLocaleUpperCase())||e.Value.toLocaleUpperCase().includes(a.toLocaleUpperCase()))&&e.Status.toLocaleUpperCase().includes(i.toLocaleUpperCase())&&n.push(e)}));var s=0;n.map((function(e){"Actived"==e.Status&&(s+=1)})),this.setState({data:n,totalActive:s})}else{var r=0;this.state.dataApi.map((function(e){"Actived"==e.Status&&(r+=1)})),this.setState({data:this.state.arrPagination[t],totalActive:r})}}},{key:"actionSearch",value:function(e,t){var a=this;this.setState(Object(i.a)({},t,e.target.value),(function(){a.searchKey()}))}},{key:"resetSearch",value:function(){var e=this;this.setState({key:"",keyStatus:""},(function(){e.searchKey()}))}},{key:"onChange",value:function(e,t){this.setState(Object(i.a)({},e,t))}},{key:"openUpdate",value:function(){var e=Object(r.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getCompanyData(t.Company_Id);case 2:return e.next=4,this.getTypeKeyData(t.Type_Key);case 4:return e.next=6,this.getHardWData(t.Value);case 6:this.setState({modalCom:!this.state.modalCom,action:"update",id:t._id,Status:t.Status});case 7:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"updateUser",value:function(){var e=Object(r.a)(s.a.mark((function e(){var t,a,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.state.Status,a={id:this.state.id,Status:t},this.setState({isLoading:!0}),e.next=5,L()({baseURL:j.a.BASE_URL,url:j.a.UPDATE_KEY,method:"POST",data:a});case 5:1==(i=e.sent).data.is_success?(this.getData(),this.setState({modalCom:!this.state.modalCom})):(alert(i.data.message),this.setState({isLoading:!1}));case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"delete",value:function(){var e=Object(r.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({isLoading:!0}),e.next=3,L()({baseURL:j.a.BASE_URL,url:j.a.DELETE_KEY,method:"DELETE",data:{id:this.state.delete._id}});case 3:1==(t=e.sent).data.is_success?(this.getData(),this.setState({modalDelete:!this.state.modalDelete,delete:null})):(alert(t.data.message),this.setState({isLoading:!1}));case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getUsers",value:function(){var t=this,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,i=this.state.limit,n=this.state.key||"",s={method:"GET",headers:x};fetch(e.BASE_URL+"/admin/users?key="+n+"&page="+a+"&limit="+i,s).then((function(e){e.json().then((function(e){t.setState({data:e.data,itemsCount:e.total,activePage:a,totalActive:e.totalActive,updated:""})}))})).catch(console.log)}},{key:"getCompanyData",value:function(){var e=Object(r.a)(s.a.mark((function e(t){var a,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L()({baseURL:j.a.BASE_URL,url:j.a.LIST_COMPANY,method:"POST"});case 2:if(a=e.sent,""==t&&void 0==t){e.next=8;break}return e.next=6,L()({baseURL:j.a.BASE_URL,url:j.a.LIST_COMPANY_WITH_ID+t,method:"POST"});case 6:null==(i=e.sent).data.data&&void 0==i.data.data||this.setState({currentCompany:i.data.data.Name});case 8:this.setState({dataCompany:a.data.data});case 9:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getTypeKeyData",value:function(){var e=Object(r.a)(s.a.mark((function e(t){var a,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L()({baseURL:j.a.BASE_URL,url:j.a.LIST_TYPEKEY,method:"GET"});case 2:if(a=e.sent,""==t&&void 0==t){e.next=8;break}return e.next=6,L()({baseURL:j.a.BASE_URL,url:j.a.LIST_TYPEKEY_WITH_ID+t,method:"GET"});case 6:null==(i=e.sent).data.data&&void 0==i.data.data||this.setState({currentTypeKey:i.data.data.Name});case 8:this.setState({dataTypeKey:a.data.data});case 9:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"inputChange",value:function(e){this.setState(Object(i.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){var e=this,t=this.state,a=t.data,i=t.key,n=(t.viewingUser,t.communities,t.dataCompany,t.hidden),l=(t.currentCompany,t.dataTypeKey,t.currentTypeKey,t.action),c=t.arrPagination,o=t.indexPage;t.dataHardWare,t.currentHardWare,t.keyName,t.keyCodeCompany,t.keyTypeKey,t.keyActive,t.keyEndDate,t.keyStatus,t.keyValue;return this.state.isLoading?Object(y.jsx)("div",{id:"page-loading",children:Object(y.jsxs)("div",{className:"three-balls",children:[Object(y.jsx)("div",{className:"ball ball1"}),Object(y.jsx)("div",{className:"ball ball2"}),Object(y.jsx)("div",{className:"ball ball3"})]})}):Object(y.jsxs)("div",{className:"animated fadeIn",children:[Object(y.jsx)(u.a,{children:Object(y.jsxs)(h.a,{children:[Object(y.jsx)("p",{style:v.success,children:this.state.updated}),Object(y.jsx)("p",{style:v.danger,children:this.state.deleted}),Object(y.jsxs)(E.a,{children:[Object(y.jsxs)(_.a,{children:["Qu\u1ea3n l\xfd kh\xf3a (Page: ",this.state.indexPage+1,")",Object(y.jsx)("div",{style:v.tags,children:Object(y.jsxs)(O.N,{children:[Object(y.jsx)(O.j,{sm:"6",lg:"12",children:Object(y.jsxs)(O.N,{children:[Object(y.jsx)(O.j,{sm:"6",lg:"4",children:Object(y.jsx)("div",{children:Object(y.jsx)(m.a,{style:v.searchInput,onChange:function(t){e.actionSearch(t,"key")},name:"key",value:i,placeholder:"T\u1eeb kh\xf3a"})})}),Object(y.jsx)(O.j,{sm:"6",lg:"4",children:Object(y.jsxs)(O.O,{style:v.flexOption,onChange:function(t){e.actionSearch(t,"keyStatus")},custom:!0,children:[Object(y.jsx)("option",{value:"",children:"-----"}),["INSTOCK","AVAILABLE","ACTIVED","DISABLE"].map((function(e,t){return Object(y.jsx)("option",{value:e,children:e})}))]})}),Object(y.jsx)(O.j,{sm:"6",lg:"4",children:Object(y.jsx)(g.a,{color:"primary",style:{width:"100%",marginTop:5},size:"sm",onClick:function(t){e.resetSearch()},children:"L\xe0m m\u1edbi t\xecm ki\u1ebfm"})})]})}),Object(y.jsx)(O.j,{sm:"6",lg:"12",children:Object(y.jsx)(g.a,{outline:!0,color:"primary",style:v.floatRight,size:"sm",onClick:function(t){return e.toggleModal("new")},children:"Th\xeam m\u1edbi"})})]})})]}),Object(y.jsx)(f.a,{children:Object(y.jsxs)("table",{ble:!0,className:"table table-hover table-outline mb-0 d-none d-sm-table",children:[Object(y.jsx)("thead",{className:"thead-light",children:Object(y.jsxs)("tr",{children:[Object(y.jsx)("th",{className:"text-center",children:"STT."}),Object(y.jsx)("th",{className:"text-center",children:"T\xean key"}),Object(y.jsx)("th",{className:"text-center",children:"Ng\xe0y k\xedch ho\u1ea1t"}),Object(y.jsx)("th",{className:"text-center",children:"Ng\xe0y h\u1ebft h\u1ea1n"}),Object(y.jsx)("th",{className:"text-center",children:"Gi\xe1 tr\u1ecb"}),Object(y.jsx)("th",{className:"text-center",children:"Tr\u1ea1ng th\xe1i"}),Object(y.jsx)("th",{className:"text-center",children:"#"})]})}),Object(y.jsxs)("tbody",{children:[Object(y.jsx)("td",{colSpan:"10",hidden:n,className:"text-center",children:"Kh\xf4ng t\xecm th\u1ea5y d\u1eef li\u1ec7u"}),void 0!=a?a.map((function(t,a){return Object(y.jsxs)("tr",{children:[Object(y.jsx)("td",{className:"text-center",children:a+1}),Object(y.jsx)("td",{className:"text-center",children:t.Name}),Object(y.jsx)("td",{className:"text-center",children:null!=t.Start_Date||void 0!=t.Start_Date?new Date(t.Start_Date).toLocaleDateString()+" "+new Date(t.Start_Date).toLocaleTimeString():""}),Object(y.jsx)("td",{className:"text-center",children:null!=t.End_Date||void 0!=t.End_Date?new Date(t.End_Date).toLocaleDateString()+" "+new Date(t.End_Date).toLocaleTimeString():""}),Object(y.jsx)("td",{className:"text-center",children:t.Value}),Object(y.jsx)("td",{className:"text-center",children:Object(y.jsx)(O.a,{color:e.getBadge(t.Status),children:t.Status})}),Object(y.jsxs)("td",{className:"text-center",children:[Object(y.jsx)(g.a,{style:v.mgl5,outline:!0,color:"primary",size:"sm",onClick:function(){var a=Object(r.a)(s.a.mark((function a(i){return s.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.openUpdate(t);case 2:return a.abrupt("return",a.sent);case 3:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}(),children:"Update"})," ",Object(y.jsx)(g.a,{outline:!0,color:"danger",size:"sm",onClick:function(a){e.openDelete(t)},children:"Delete"})]})]},a)})):""]})]})})]}),1==c.length?"":Object(y.jsx)("div",{style:{float:"right",marginRight:"10px",padding:"10px"},children:Object(y.jsx)("tr",{style:v.row,children:c.map((function(t,a){return Object(y.jsx)("td",{children:Object(y.jsx)(g.a,{style:v.pagination,color:a==o?"primary":"danger",onClick:function(t){e.setState({data:c[a],indexPage:a})},children:a+1})})}))})})]})}),Object(y.jsxs)(S.a,{isOpen:this.state.modalCom,className:this.props.className,children:[Object(y.jsx)(T.a,{children:"new"==this.state.action?"Create":"Update"}),Object(y.jsx)(D.a,{children:"new"==l?"":Object(y.jsxs)("div",{children:[Object(y.jsx)("label",{style:v.flexLabel,htmlFor:"tag",children:"Status:"}),Object(y.jsxs)("select",{style:v.flexOption,name:"Status",onChange:function(t){return e.onChange("Status",t.target.value)},children:[Object(y.jsx)("option",{value:this.state.Status,children:""==this.state.Status?" - - - - - - - - - - ":this.state.Status}),Object(y.jsx)("option",{value:"INSTOCK",children:"INSTOCK"}),Object(y.jsx)("option",{value:"AVAILABLE",children:"AVAILABLE"}),Object(y.jsx)("option",{value:"ACTIVED",children:"ACTIVED"}),Object(y.jsx)("option",{value:"DISABLE",children:"DISABLE"})]})]})}),Object(y.jsxs)(b.a,{children:[Object(y.jsx)(g.a,{color:"primary",onClick:function(t){e.state.action,e.updateUser()},disabled:this.state.isLoading,children:"Save"})," ",Object(y.jsx)(g.a,{color:"secondary",onClick:function(t){return e.setState({modalCom:!e.state.modalCom})},children:"Cancel"})]})]}),Object(y.jsxs)(S.a,{isOpen:this.state.modalDelete,toggle:function(t){return e.setState({modalDelete:!e.state.modalDelete,delete:null})},className:this.props.className,children:[Object(y.jsx)(T.a,{toggle:function(t){return e.setState({modalDelete:!e.state.modalDelete,delete:null})},children:"Delete"}),Object(y.jsx)(D.a,{children:Object(y.jsx)("label",{htmlFor:"tag",children:'Do you want to delete user "'.concat(this.state.delete?this.state.delete.Email:"",'" ?')})}),Object(y.jsxs)(b.a,{children:[Object(y.jsx)(g.a,{color:"primary",onClick:function(t){return e.delete()},disabled:this.state.isLoading,children:"Delete"})," ",Object(y.jsx)(g.a,{color:"secondary",onClick:function(t){return e.setState({modalDelete:!e.state.modalDelete,delete:null})},children:"Cancel"})]})]})]})}}]),n}(p.Component),v=Object(i.a)({datePicker:{marginBottom:20},wa10:{width:"5%",float:"left",height:"80px"},pagination:{marginRight:"5px"},flexLabel:{width:100},flexOption:{width:200,margin:"1px"},a:{textDecoration:"none"},floatRight:{float:"right",marginTop:"3px"},spinner:{width:"30px"},center:{textAlign:"center"},tbody:{height:"380px",overflowY:"auto"},wh12:{width:"10%",float:"left",height:"80px"},wh15:{width:"15%",float:"left",height:"80px"},w5:{width:"12%",float:"left",height:"80px"},row:{float:"left",width:"100%"},success:{color:"green"},danger:{color:"red"},mgl5:{marginLeft:"5px"},tags:{float:"right",marginRight:"5px"},searchInput:{width:"200px",display:"inline-block",margin:"1px"},userActive:{color:"green"},userPending:{color:"red"},nagemonNameCol:{width:"328px"},image:{width:"100px",height:"100px",borderRadius:"99999px"}},"mgl5",{marginBottom:"0px"});t.default=R}.call(this,a(113))},643:function(e,t,a){"use strict";t.a={BASE_URL:"https://api-soida.applamdep.com",LIST_USER:"/api/list-user",LIST_USER_WITH_ID:"/api/list-user?id=",ADD_USER:"/api/add-user",UPDATE_USER:"/api/update-user",DELETE_USER:"/api/delete-user",LOGIN_ADMIN:"/api/login_admin",GET_SHOP:"/api/get-shop",GET_SALE:"/api/get-sale",GET_COEFFICIENT:"/api/calculator-coefficient-user",GET_COEFFICIENT_PER_SALE:"/api/calculator-coefficient-user-per-sale",GET_USER_SALE_BY_MONTH:"/api/get-user-of-sale-by-month",CALCULATOR_ALL_USER_OF_COMPANY:"/api/calculator-all-user-company",CALCULATOR_ALL_USER_OF_SALE:"/api/calculator-all-user-of-sale",GET_SEEDER:"/api/get-seed",GET_SALE_NAME:"/api/get-name-sale",GET_USER_BY_ID:"/api/get-user-byID",LIST_CUSTOMER:"/api/list-customer",LIST_CUSTOMER_BY_MONTH:"/api/get-user-sale-by-month",LIST_TYPEKEY:"/api/list-typekey",LIST_TYPEKEY_WITH_ID:"/api/list-typekey?id=",ADD_TYPEKEY:"/api/add-typekey",UPDATE_TYPEKEY:"/api/update-typekey",DELETE_TYPEKEY:"/api/delete-typekey",LIST_HARDWARE:"/api/list-hardware",LIST_HARDWARE_WITH_ID:"/api/list-hardware?id=",ADD_HARDWARE:"/api/add-hardware",UPDATE_HARDWARE:"/api/update-hardware",DELETE_HARDWARE:"/api/delete-hardware",LIST_ORDER:"/api/list-order",LIST_ORDER_BY_SALE:"/api/plugin-list-order-by-saleid",ADD_ORDER:"/api/add-order",UPDATE_STATUS_ORDER:"/api/update-status-order",CHECK_OUT:"/api/checkout-order",LIST_TRANSACTION:"/api/list-transaction",ADD_TRANSACTION:"/api/add-transaction",LIST_CHECK_OUT:"/api/list-checkout",LIST_HARDWARE_CHECKOUT:"/api/get-list-hardward-by-check-out",UPDATE_STATUS_CHECKOUT:"/api/update-status-hardware",LIST_ORDER_DETAIL:"/api/list-orderdetail",ADD_ORDER_DETAIL:"/api/add-orderdetail",LIST_ROLE:"/api/list-role",LIST_ROLE_WITH_ID:"/api/list-role?id=",ADD_ROLE:"/api/add-role",UPDATE_ROLE:"/api/update-role",DELETE_ROLE:"/api/delete-role",LIST_PACKAGE:"/api/list-package",ADD_PACKAGE:"/api/add-package",UPDATE_PACKAGE:"/api/update-package",DELETE_PACKAGE:"/api/delete-package",PLUGIN_DATA_PACKAGE:"/api/get-name-package",LIST_SALELOG:"/api/list-salelog",LIST_SALELOG_WITH_ID:"/api/list-salelog?id=",ADD_SALELOG:"/api/add-salelog",UPDATE_SALELOG:"/api/update-salelog",DELETE_SALELOG:"/api/delete-salelog",DATA_SALE:"/api/get-data-sale",LIST_SALE:"/api/list-sale",LIST_SALE_WITH_ID:"/api/list-sale?id=",ADD_SALE:"/api/add-sale",UPDATE_SALE:"/api/update-sale",DELETE_SALE:"/api/delete-sale",LIST_KEYORDER:"/api/list-keyorder",LIST_KEYORDER_WITH_ID:"/api/list-keyorder?id=",ADD_KEYORDER:"/api/add-keyorder",UPDATE_KEYORDER:"/api/update-keyorder",DELETE_KEYORDER:"/api/delete-keyorder",LIST_KEY:"/api/list-key",LIST_KEY_WITH_ID:"/api/list-key?id=",ADD_KEY:"/api/add-key",UPDATE_KEY:"/api/update-key",DELETE_KEY:"/api/delete-key",PLUGIN_LIST_COMPANY:"/api/plugin-list-company",PLUGIN_LIST_COMPANY_BY_ID:"/api/plugin-list-company-by-id",PLUGIN_LIST_COMPANY_WITH_ID:"/api/plugin-list-company?id=",PLUGIN_ADD_COMPANY:"/api/plugin-add-company",PLUGIN_UPDATE_COMPANY:"/api/plugin-update-company",PLUGIN_DELETE_COMPANY:"/api/plugin-delete-company",PLUGIN_DATA_COMPANY:"/api/plugin-get-data-company",LIST_COMPANY:"/api/list-company",LIST_COMPANY_WITH_ID:"/api/list-company?id=",ADD_COMPANY:"/api/add-company",UPDATE_COMPANY:"/api/update-company",DELETE_COMPANY:"/api/delete-company",DATA_COMPANY:"/api/get-data-company",LIST_LINK:"/api/list-link",LIST_LINK_WITH_ID:"/api/list-link?id=",ADD_LINK:"/api/add-link",UPDATE_LINK:"/api/update-link",DELETE_LINK:"/api/delete-link","GET-LINK-BY-ID":"/api/link-by-id",LIST_FEATURE:"/api/list-feature",ADD_FEATURE:"/api/add-feature",UPDATE_FEATURE:"/api/update-feature",DELETE_FEATURE:"/api/delete-feature",DATA_CHOOSE_FEATURE:"/api/get-feature-choose",LIST_PLUGIN_ORDER:"/api/plugin-list-order",LIST_PLUGIN_ORDER_BY_ID:"/api/plugin-list-order-by-id",LIST_PLUGIN_ORDER_FOR_ADMIN:"/api/plugin-list-order-for-admin",ADD_PLUGIN_ORDER:"/api/plugin-add-order",UPDATE_PLUGIN_ORDER:"/api/plugin-update-order",DELETE_PLUGIN_ORDER:"/api/plugin-delete-order",UPDATE_SLUG:"/api/plugin-update-slug",PLUGIN_LIST_USER:"/api/plugin-list-user",PLUGIN_ADD_USER:"/api/plugin-add-user",PLUGIN_ADD_SALE:"/api/plugin-add-sale",PLUGIN_UPDATE_USER:"/api/plugin-update-user",PLUGIN_DELETE_USER:"/api/plugin-delete-user",PLUGIN_RESET_PASSWORD:"/api/plugin-reset-password",PLUGIN_UPDATE_PASSWORD:"/api/plugin-update-password",PLUGIN_UPDATE_STATUS:"/api/plugin-update-status",PLUGIN_LOGIN_ADMIN:"/api/plugin-login_admin",PLUGIN_GET_USER_BYID:"/api/plugin-get-user-byID",PLUGIN_GET_USER_BY_BODY:"/api/plugin-get-user-byID-with-body",PLUGIN_LIST_ROLE:"/api/plugin-list-role",PLUGIN_ADD_ROLE:"/api/plugin-add-role",PLUGIN_UPDATE_ROLE:"/api/plugin-update-role",PLUGIN_DELETE_ROLE:"/api/plugin-delete-role",CUS_RES_LIST:"/api/list-customer-request",CUS_RES_LIST_COMPANY:"/api/list-customer-request-for-company",CUS_RES_ADD:"/api/add-customer-request",CUS_RES_UPDATE:"/api/update-customer-request",CUS_RES_DELETE:"/api/delete-customer-request",REWARD_INFO_LIST:"/api/list-reward-info",REWARD_INFO_LIST_COMPANY:"/api/list-reward-info-for-company",REWARD_INFO_ADD:"/api/add-reward-info",REWARD_INFO_UPDATE:"/api/update-reward-info",REWARD_INFO_DELETE:"/api/delete-reward-info",REWARD_TRANS_LIST:"/api/list-reward-trans",REWARD_TRANS_ADD:"/api/list-reward-trans",REWARD_TRANS_UPDATE:"/api/update-reward-trans",REWARD_TRANS_DELETE:"/api/delete-reward-trans",TYPE_REQUEST_LIST:"/api/list-type-request",TYPE_REQUEST_ADD:"/api/add-type-request",TYPE_REQUEST_UPDATE:"/api/update-type-request",TYPE_REQUEST_DELETE:"/api/delete-type-request"}},644:function(e,t,a){"use strict";a(2);var i=a(638),n=a.n(i),s=a(20),r=function(e){var t=e.field,a=e.value,i=e.label,r=e.error,l=e.type,c=e.onChange,o=e.checkUserExists,d=e.readOnly,p=e.placeholder;return Object(s.jsxs)("div",{className:n()("form-group",{"has-error":r}),children:[Object(s.jsx)("label",{className:"control-label",children:i}),Object(s.jsx)("input",{onChange:c,onBlur:o,value:a,type:l,name:t,placeholder:p,readOnly:d,className:"form-control"}),r&&Object(s.jsx)("span",{className:"help-block",children:r})]})};r.defaultProps={type:"text"},t.a=r},660:function(e,t,a){"use strict";var i=a(12),n=a(28),s=a(646),r=a(35),l=a(2),c=a.n(l),o=a(64),d=a.n(o),p=a(638),u=a.n(p),h=a(639),E={children:d.a.node,type:d.a.string,size:d.a.oneOfType([d.a.number,d.a.string]),bsSize:d.a.string,valid:d.a.bool,invalid:d.a.bool,tag:h.n,innerRef:d.a.oneOfType([d.a.object,d.a.func,d.a.string]),plaintext:d.a.bool,addon:d.a.bool,className:d.a.string,cssModule:d.a.object},_=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(s.a)(a)),a.focus=a.focus.bind(Object(s.a)(a)),a}Object(r.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.focus=function(){this.ref&&this.ref.focus()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,s=e.type,r=e.bsSize,l=e.valid,o=e.invalid,d=e.tag,p=e.addon,E=e.plaintext,_=e.innerRef,m=Object(n.a)(e,["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"]),g=["radio","checkbox"].indexOf(s)>-1,f=new RegExp("\\D","g"),S=d||("select"===s||"textarea"===s?s:"input"),T="form-control";E?(T+="-plaintext",S=d||"input"):"file"===s?T+="-file":"range"===s?T+="-range":g&&(T=p?null:"form-check-input"),m.size&&f.test(m.size)&&(Object(h.p)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),r=m.size,delete m.size);var D=Object(h.j)(u()(t,o&&"is-invalid",l&&"is-valid",!!r&&"form-control-"+r,T),a);return("input"===S||d&&"function"===typeof d)&&(m.type=s),m.children&&!E&&"select"!==s&&"string"===typeof S&&"select"!==S&&(Object(h.p)('Input with a type of "'+s+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete m.children),c.a.createElement(S,Object(i.a)({},m,{ref:_,className:D,"aria-invalid":o}))},t}(c.a.Component);_.propTypes=E,_.defaultProps={type:"text"},t.a=_},663:function(e,t,a){"use strict";var i=a(12),n=a(28),s=a(2),r=a.n(s),l=a(64),c=a.n(l),o=a(638),d=a.n(o),p=a(639),u=c.a.oneOfType([c.a.number,c.a.string]),h={tag:p.n,noGutters:c.a.bool,className:c.a.string,cssModule:c.a.object,form:c.a.bool,xs:u,sm:u,md:u,lg:u,xl:u},E={tag:"div",widths:["xs","sm","md","lg","xl"]},_=function(e){var t=e.className,a=e.cssModule,s=e.noGutters,l=e.tag,c=e.form,o=e.widths,u=Object(n.a)(e,["className","cssModule","noGutters","tag","form","widths"]),h=[];o.forEach((function(t,a){var i=e[t];if(delete u[t],i){var n=!a;h.push(n?"row-cols-"+i:"row-cols-"+t+"-"+i)}}));var E=Object(p.j)(d()(t,s?"no-gutters":null,c?"form-row":"row",h),a);return r.a.createElement(l,Object(i.a)({},u,{className:E}))};_.propTypes=h,_.defaultProps=E,t.a=_},664:function(e,t,a){"use strict";var i=a(12),n=a(28),s=a(2),r=a.n(s),l=a(64),c=a.n(l),o=a(638),d=a.n(o),p=a(639),u=c.a.oneOfType([c.a.number,c.a.string]),h=c.a.oneOfType([c.a.bool,c.a.number,c.a.string,c.a.shape({size:c.a.oneOfType([c.a.bool,c.a.number,c.a.string]),order:u,offset:u})]),E={tag:p.n,xs:h,sm:h,md:h,lg:h,xl:h,className:c.a.string,cssModule:c.a.object,widths:c.a.array},_={tag:"div",widths:["xs","sm","md","lg","xl"]},m=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},g=function(e){var t=e.className,a=e.cssModule,s=e.widths,l=e.tag,c=Object(n.a)(e,["className","cssModule","widths","tag"]),o=[];s.forEach((function(t,i){var n=e[t];if(delete c[t],n||""===n){var s=!i;if(Object(p.h)(n)){var r,l=s?"-":"-"+t+"-",u=m(s,t,n.size);o.push(Object(p.j)(d()(((r={})[u]=n.size||""===n.size,r["order"+l+n.order]=n.order||0===n.order,r["offset"+l+n.offset]=n.offset||0===n.offset,r)),a))}else{var h=m(s,t,n);o.push(h)}}})),o.length||o.push("col");var u=Object(p.j)(d()(t,o),a);return r.a.createElement(l,Object(i.a)({},c,{className:u}))};g.propTypes=E,g.defaultProps=_,t.a=g},666:function(e,t,a){},667:function(e,t,a){"use strict";var i=a(12),n=a(28),s=a(646),r=a(35),l=a(2),c=a.n(l),o=a(64),d=a.n(o),p=a(638),u=a.n(p),h=a(639),E={active:d.a.bool,"aria-label":d.a.string,block:d.a.bool,color:d.a.string,disabled:d.a.bool,outline:d.a.bool,tag:h.n,innerRef:d.a.oneOfType([d.a.object,d.a.func,d.a.string]),onClick:d.a.func,size:d.a.string,children:d.a.node,className:d.a.string,cssModule:d.a.object,close:d.a.bool},_=function(e){function t(t){var a;return(a=e.call(this,t)||this).onClick=a.onClick.bind(Object(s.a)(a)),a}Object(r.a)(t,e);var a=t.prototype;return a.onClick=function(e){if(!this.props.disabled)return this.props.onClick?this.props.onClick(e):void 0;e.preventDefault()},a.render=function(){var e=this.props,t=e.active,a=e["aria-label"],s=e.block,r=e.className,l=e.close,o=e.cssModule,d=e.color,p=e.outline,E=e.size,_=e.tag,m=e.innerRef,g=Object(n.a)(e,["active","aria-label","block","className","close","cssModule","color","outline","size","tag","innerRef"]);l&&"undefined"===typeof g.children&&(g.children=c.a.createElement("span",{"aria-hidden":!0},"\xd7"));var f="btn"+(p?"-outline":"")+"-"+d,S=Object(h.j)(u()(r,{close:l},l||"btn",l||f,!!E&&"btn-"+E,!!s&&"btn-block",{active:t,disabled:this.props.disabled}),o);g.href&&"button"===_&&(_="a");var T=l?"Close":null;return c.a.createElement(_,Object(i.a)({type:"button"===_&&g.onClick?"button":void 0},g,{className:S,ref:m,onClick:this.onClick,"aria-label":a||T}))},t}(c.a.Component);_.propTypes=E,_.defaultProps={color:"secondary",tag:"button"},t.a=_}}]);
//# sourceMappingURL=40.c2dca6da.chunk.js.map