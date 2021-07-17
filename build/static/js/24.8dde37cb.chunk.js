/*! For license information please see 24.8dde37cb.chunk.js.LICENSE.txt */
(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[24],{1204:function(e,t,a){"use strict";a.r(t),function(e){var n=a(169),i=a(114),s=a.n(i),r=a(651),l=a(165),o=a(166),c=a(168),d=a(167),u=a(2),p=a(662),h=a(663),g=a(930),m=a(1177),f=a(659),b=a(1195),E=a(931),j=a(1233),_=a(1201),y=a(1202),O=a(1203),x=a(647),A=(a(652),a(643)),T=a(644),v=a(650),S=a.n(v),D=(a(655),a(20)),L=new Headers,C=localStorage.getItem("auth");L.append("Authorization","Bearer "+C),L.append("Content-Type","application/json");var N=function(t){Object(c.a)(i,t);var a=Object(d.a)(i);function i(e){var t;return Object(l.a)(this,i),(t=a.call(this,e)).getData=Object(r.a)(s.a.mark((function e(){var a,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.setState({isLoading:!0}),e.next=3,S()({baseURL:A.a.BASE_URL,url:A.a.LIST_COMPANY,method:"POST"});case 3:a=e.sent,t.pagination(a.data.data),t.setState({dataApi:a.data.data}),n=0,a.data.data.map((function(e){"Actived"==e.Status&&(n+=1)})),t.setState({isLoading:!1,totalActive:n});case 9:case"end":return e.stop()}}),e)}))),t.openDelete=function(e){t.setState({modalDelete:!t.state.modalDelete,delete:e})},t.state={data:[],key:"",keyEmail:"",keyPhone:"",keyFax:"",keyAddress:"",keyWebsite:"",keyCode:"",keyCompany:"",UserName:"",Password:"",keyDateCreate:new Date,keyStatus:"",activePage:1,page:1,itemsCount:0,limit:20,totalActive:0,modalCom:!1,viewingUser:{},communities:[],updated:"",dataApi:[],action:"new",Name:"",Email:"",Phone:"",Fax:"Nam",Address:"",Website:"",Code:"",Status:"",modalDelete:!1,delete:null,arrPagination:[],indexPage:0,dataCompany:[],currentCompany:""},t}return Object(o.a)(i,[{key:"componentDidMount",value:function(){var e=Object(r.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(this.getData(),this.getCompanyData(),t=JSON.parse(localStorage.getItem("url")),a=0;a<t.length;a++)"#"+t[a].to==window.location.hash&&1==t[a].hidden&&(window.location.href="#/");case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getCompanyData",value:function(){var e=Object(r.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S()({baseURL:A.a.BASE_URL,url:A.a.LIST_COMPANY,method:"POST"});case 2:t=e.sent,this.setState({dataCompany:t.data.data});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"pagination",value:function(e){var t,a,n,i=[];for(t=0,a=e.length;t<a;t+=5)n=e.slice(t,t+5),i.push(n);this.setState({arrPagination:i,data:i[this.state.indexPage]})}},{key:"searchKey",value:function(){var e=this.state,t=e.indexPage,a=e.key,n=(e.keyEmail,e.keyCompany,e.keyPhone,e.keyFax,e.keyAddress,e.keyWebsite,e.keyCode,e.keyDateCreate,e.keyStatus);if(""!=a||""!=n){var i=[];this.state.dataApi.map((function(e){(e.Email.toLocaleUpperCase().includes(a.toLocaleUpperCase())||e.Name.toLocaleUpperCase().includes(a.toLocaleUpperCase())||e.Phone.toLocaleUpperCase().includes(a.toLocaleUpperCase()))&&e.Status.toLocaleUpperCase().includes(n.toLocaleUpperCase())&&i.push(e)}));var s=0;i.map((function(e){"Actived"==e.Status&&(s+=1)})),this.setState({data:i,totalActive:s})}else{var r=0;this.state.dataApi.map((function(e){"Actived"==e.Status&&(r+=1)})),this.setState({data:this.state.arrPagination[t],totalActive:r})}}},{key:"toggleModal",value:function(e){"new"==e&&this.setState({modalCom:!this.state.modalCom,action:e,Name:"",Email:"",Phone:"",Fax:"",Address:"",Website:"",Code:"",Status:"",username:"",password:""})}},{key:"onChange",value:function(e,t){this.setState(Object(n.a)({},e,t))}},{key:"addCompany",value:function(){var e=Object(r.a)(s.a.mark((function e(){var t,a,n,i,r,l,o,c,d,u,p,h,g,m;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.state,a=t.Email,n=t.Name,i=t.Phone,r=t.Fax,l=t.Address,o=t.Website,c=t.Code,d=t.UserName,u=t.Password,null!=a&&""!=a&&null!=n&&""!=n&&null!=i&&""!=i&&null!=l&&""!=l&&null!=d&&""!=d&&null!=u&&""!=u){e.next=4;break}return alert("Please fill in all the requirements"),e.abrupt("return");case 4:return p={Name:n,Email:a,Phone:i,Fax:r,Address:l,Website:o,Code:c},this.setState({isLoading:!0}),e.next=8,S()({baseURL:A.a.BASE_URL,url:A.a.ADD_COMPANY,method:"PUT",data:p});case 8:if(1!=(h=e.sent).data.is_success){e.next=19;break}return this.getData(),g={Name:n,Email:a,Phone:i,Address:l,Company_Id:h.data.data._id,Role_Id:"60e6a98b39d7243f689a123c",UserName:d,Password:u,Code:h.data.data._id,Status:"Actived"},e.next=14,S()({baseURL:A.a.BASE_URL,url:A.a.ADD_USER,method:"POST",data:g});case 14:m=e.sent,console.log(m),this.setState({modalCom:!this.state.modalCom}),e.next=21;break;case 19:alert(h.data.message),this.setState({isLoading:!1});case 21:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"openUpdate",value:function(e){this.setState({modalCom:!this.state.modalCom,action:"update",Name:e.Name,Email:e.Email,Phone:e.Phone,Fax:e.Fax,Address:e.Address,Website:e.Website,Code:e._id,id:e._id,Status:e.Status})}},{key:"updateCompany",value:function(){var e=Object(r.a)(s.a.mark((function e(){var t,a,n,i,r,l,o,c,d,u;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.state,a=t.Email,n=t.Name,i=t.Phone,r=t.Fax,l=t.Address,o=t.Website,t.Code,c=t.Status,null!=a&&""!=a&&null!=n&&""!=n&&null!=i&&""!=i&&null!=l&&""!=l){e.next=4;break}return alert("Please fill in all the requirements"),e.abrupt("return");case 4:return d={Name:n,Email:a,Phone:i,Fax:r,Address:l,Website:o,Code:this.state.id,Status:c,id:this.state.id},this.setState({isLoading:!0}),e.next=8,S()({baseURL:A.a.BASE_URL,url:A.a.UPDATE_COMPANY,method:"POST",data:d});case 8:1==(u=e.sent).data.is_success?(this.getData(),this.setState({modalCom:!this.state.modalCom})):(alert(u.data.message),this.setState({isLoading:!1}));case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"delete",value:function(){var e=Object(r.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({isLoading:!0}),e.next=3,S()({baseURL:A.a.BASE_URL,url:A.a.DELETE_COMPANY,method:"DELETE",data:{id:this.state.delete._id}});case 3:1==(t=e.sent).data.is_success?(this.getData(),this.setState({modalDelete:!this.state.modalDelete,delete:null})):(alert(t.data.message),this.setState({isLoading:!1}));case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getUsers",value:function(){var t=this,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,n=this.state.limit,i=this.state.key||"",s={method:"GET",headers:L};fetch(e.BASE_URL+"/admin/users?key="+i+"&page="+a+"&limit="+n,s).then((function(e){e.json().then((function(e){t.setState({data:e.data,itemsCount:e.total,activePage:a,totalActive:e.totalActive,updated:""})}))})).catch(console.log)}},{key:"handlePageChange",value:function(){var e=Object(r.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.getUsers(t);case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getBadge",value:function(e){switch(e){case"Actived":return"success";case"Inactive":return"secondary";case"Locked":return"warning";case"Deactived":return"danger";default:return"primary"}}},{key:"toggle",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";this.setState({modal:!this.state.modal,image:"",url:"",isActive:!1,isLoading:!1,errors:{},action:e,position:1,data:[],updated:""})}},{key:"inputChange",value:function(e){this.setState(Object(n.a)({},e.target.name,e.target.value))}},{key:"goSearch",value:function(){this.getUsers()}},{key:"actionSearch",value:function(e,t){var a=this;this.setState(Object(n.a)({},t,e.target.value),(function(){a.searchKey()}))}},{key:"resetSearch",value:function(){var e=this;this.setState({key:"",keyEmail:"",keyPhone:"",keyFax:"",keyAddress:"",keyWebsite:"",keyCode:"",keyCompany:"",keyDateCreate:new Date,keyStatus:""},(function(){e.searchKey()}))}},{key:"render",value:function(){var e=this,t=this.state,a=t.data,n=t.key,i=(t.viewingUser,t.communities,t.action),s=t.arrPagination,r=t.indexPage;t.dataCompany,t.keyAddress,t.keyCode,t.keyCompany,t.keyEmail,t.keyFax,t.keyPhone,t.keyWebsite,t.keyDateCreate,t.keyStatus;return this.state.isLoading?Object(D.jsx)("div",{id:"page-loading",children:Object(D.jsxs)("div",{className:"three-balls",children:[Object(D.jsx)("div",{className:"ball ball1"}),Object(D.jsx)("div",{className:"ball ball2"}),Object(D.jsx)("div",{className:"ball ball3"})]})}):Object(D.jsxs)("div",{className:"animated fadeIn",children:[Object(D.jsx)(p.a,{children:Object(D.jsxs)(h.a,{children:[Object(D.jsx)("p",{style:k.success,children:this.state.updated}),Object(D.jsx)("p",{style:k.danger,children:this.state.deleted}),Object(D.jsxs)(g.a,{children:[Object(D.jsxs)(m.a,{children:[Object(D.jsx)("i",{className:"fa fa-align-justify"})," Danh s\xe1ch c\xf4ng ty (Total: ",void 0!=this.state.data||null!=this.state.data?this.state.data.length:0,", Active: ",this.state.totalActive,", Page: ",this.state.indexPage+1,")",Object(D.jsx)("div",{style:k.tags,children:Object(D.jsxs)(x.I,{children:[Object(D.jsx)(x.j,{sm:"12",lg:"12",children:Object(D.jsxs)(x.I,{children:[Object(D.jsx)(x.j,{sm:"12",lg:"4",children:Object(D.jsx)("div",{children:Object(D.jsx)(f.a,{style:k.searchInput,onChange:function(t){e.actionSearch(t,"key")},name:"key",value:n,placeholder:"T\u1eeb kh\xf3a"})})}),Object(D.jsx)(x.j,{sm:"12",lg:"4",children:Object(D.jsx)(x.J,{style:k.flexOption,onChange:function(t){e.actionSearch(t,"keyStatus")},custom:!0,children:["Actived","Deactived","Locked"].map((function(e,t){return Object(D.jsx)("option",{value:e,children:e})}))})}),Object(D.jsx)(x.j,{sm:"12",lg:"4",children:Object(D.jsx)(b.a,{color:"primary",style:{width:"100%",marginTop:5},size:"sm",onClick:function(t){e.resetSearch()},children:"L\xe0m m\u1edbi t\xecm ki\u1ebfm"})})]})}),Object(D.jsx)(x.j,{sm:"12",lg:"12",children:Object(D.jsx)(b.a,{outline:!0,color:"primary",style:k.floatRight,size:"sm",onClick:function(t){return e.toggleModal("new")},children:"Th\xeam m\u1edbi"})})]})})]}),Object(D.jsx)(E.a,{children:Object(D.jsxs)("table",{ble:!0,className:"table table-hover table-outline mb-0 d-none d-sm-table",children:[Object(D.jsx)("thead",{className:"thead-light",children:Object(D.jsxs)("tr",{children:[Object(D.jsx)("th",{className:"text-center",children:"STT."}),Object(D.jsx)("th",{className:"text-center",children:"T\xean C\xf4ng Ty"}),Object(D.jsx)("th",{className:"text-center",children:"Email"}),Object(D.jsx)("th",{className:"text-center",children:"S\u1ed1 \u0111i\u1ec7n tho\u1ea1i"}),Object(D.jsx)("th",{className:"text-center",children:"Fax"}),Object(D.jsx)("th",{className:"text-center",children:"\u0110\u1ecba ch\u1ec9"}),Object(D.jsx)("th",{className:"text-center",children:"Ng\xe0y t\u1ea1o"}),Object(D.jsx)("th",{className:"text-center",children:"Tr\u1ea1ng th\xe1i"}),Object(D.jsx)("th",{className:"text-center",children:"#"})]})}),Object(D.jsx)("tbody",{children:void 0!=a?a.map((function(t,a){return Object(D.jsxs)("tr",{children:[Object(D.jsx)("td",{className:"text-center",children:a+1}),Object(D.jsx)("td",{className:"text-center",children:t.Name}),Object(D.jsx)("td",{className:"text-center",children:t.Email}),Object(D.jsx)("td",{className:"text-center",children:t.Phone}),Object(D.jsx)("td",{className:"text-center",children:t.Fax}),Object(D.jsx)("td",{className:"text-center",children:t.Address}),Object(D.jsx)("td",{className:"text-center",children:new Date(t.Create_Date).toLocaleDateString()+" "+new Date(t.Create_Date).toLocaleTimeString()}),Object(D.jsx)("td",{className:"text-center",children:Object(D.jsx)(x.a,{color:e.getBadge(t.Status),children:t.Status})}),Object(D.jsxs)("td",{className:"text-center",children:[Object(D.jsx)(b.a,{outline:!0,color:"primary",size:"sm",onClick:function(a){return e.openUpdate(t)},children:"Update"})," ",Object(D.jsx)(b.a,{outline:!0,color:"danger",size:"sm",onClick:function(a){e.openDelete(t)},children:"Delete"})]})]},a)})):""})]})})]}),1==s.length?"":Object(D.jsx)("div",{style:{float:"right",marginRight:"10px",padding:"10px"},children:Object(D.jsx)("tr",{style:k.row,children:s.map((function(t,a){return Object(D.jsx)("td",{children:Object(D.jsx)(b.a,{style:k.pagination,color:a==r?"primary":"danger",onClick:function(t){e.setState({data:s[a],indexPage:a})},children:a+1})})}))})})]})}),Object(D.jsxs)(j.a,{isOpen:this.state.modalCom,className:this.props.className,children:[Object(D.jsx)(_.a,{children:"new"==this.state.action?"Create":"Update"}),Object(D.jsxs)(y.a,{children:[Object(D.jsx)(T.a,{field:"Email",label:"Email",value:this.state.Email,type:"email",placeholder:"Emal",onChange:function(t){return e.onChange("Email",t.target.value)}}),Object(D.jsx)(T.a,{field:"Name",label:"T\xean c\xf4ng ty",value:this.state.Name,placeholder:"T\xean c\xf4ng ty",onChange:function(t){return e.onChange("Name",t.target.value)}}),Object(D.jsx)(T.a,{field:"UserName",label:"T\xean \u0111\u0103ng nh\u1eadp",value:this.state.UserName,placeholder:"T\xean \u0111\u0103ng nh\u1eadp",onChange:function(t){return e.onChange("UserName",t.target.value)}}),Object(D.jsx)(T.a,{field:"Password",label:"M\u1eadt kh\u1ea9u",type:"password",value:this.state.Password,placeholder:"M\u1eadt kh\u1ea9u",onChange:function(t){return e.onChange("Password",t.target.value)}}),Object(D.jsx)(T.a,{field:"Phone",label:"S\u1ed1 \u0111i\u1ec7n tho\u1ea1i",value:this.state.Phone,placeholder:"S\u1ed1 \u0111i\u1ec7n tho\u1ea1i",onChange:function(t){return e.onChange("Phone",t.target.value)}}),Object(D.jsx)(T.a,{field:"Fax",label:"Fax",value:this.state.Fax,placeholder:"Fax",onChange:function(t){return e.onChange("Fax",t.target.value)}}),Object(D.jsx)(T.a,{field:"Address",label:"\u0110\u1ecba ch\u1ec9",value:this.state.Address,placeholder:"\u0110\u1ecba ch\u1ec9",onChange:function(t){return e.onChange("Address",t.target.value)}}),Object(D.jsx)(T.a,{field:"Website",label:"Website",value:this.state.Website,placeholder:"Website",onChange:function(t){return e.onChange("Website",t.target.value)}}),"new"==i?"":Object(D.jsxs)("div",{children:[Object(D.jsx)("label",{style:k.flexLabel,htmlFor:"tag",children:"Status    "}),Object(D.jsxs)("select",{style:k.flexOption,name:"Status",onChange:function(t){return e.onChange("Status",t.target.value)},children:[Object(D.jsx)("option",{value:this.state.Status,children:""==this.state.Status?" - - - - - - - - - - ":this.state.Status}),Object(D.jsx)("option",{value:"Actived",children:"Actived"}),Object(D.jsx)("option",{value:"Locked",children:"Locked"}),Object(D.jsx)("option",{value:"Deactived",children:"Deactived"})]})]})]}),Object(D.jsxs)(O.a,{children:[Object(D.jsx)(b.a,{color:"primary",onClick:function(t){"new"===e.state.action?e.addCompany():e.updateCompany()},disabled:this.state.isLoading,children:"Save"})," ",Object(D.jsx)(b.a,{color:"secondary",onClick:function(t){return e.toggleModal("new")},children:"Cancel"})]})]}),Object(D.jsxs)(j.a,{isOpen:this.state.modalDelete,toggle:function(t){return e.setState({modalDelete:!e.state.modalDelete,delete:null})},className:this.props.className,children:[Object(D.jsx)(_.a,{toggle:function(t){return e.setState({modalDelete:!e.state.modalDelete,delete:null})},children:"Delete"}),Object(D.jsx)(y.a,{children:Object(D.jsx)("label",{htmlFor:"tag",children:'Do you want to delete user "'.concat(this.state.delete?this.state.delete.Email:"",'" ?')})}),Object(D.jsxs)(O.a,{children:[Object(D.jsx)(b.a,{color:"primary",onClick:function(t){return e.delete()},disabled:this.state.isLoading,children:"Delete"})," ",Object(D.jsx)(b.a,{color:"secondary",onClick:function(t){return e.setState({modalDelete:!e.state.modalDelete,delete:null})},children:"Cancel"})]})]})]})}}]),i}(u.Component),k=Object(n.a)({pagination:{marginRight:"5px"},flexLabel:{width:100},flexOption:{width:160,margin:"1px"},a:{textDecoration:"none"},floatRight:{float:"right",marginTop:"3px"},spinner:{width:"30px"},center:{textAlign:"center"},tbody:{height:"380px",overflowY:"auto"},wh12:{width:"8%",float:"left",height:"80px"},wh15:{width:"15%",float:"left",height:"80px"},w5:{width:"12%",float:"left",height:"80px"},wa10:{width:"5%",float:"left",height:"80px"},row:{float:"left",width:"100%"},success:{color:"green"},danger:{color:"red"},mgl5:{marginLeft:"5px"},tags:{float:"right",marginRight:"5px"},searchInput:{width:"160px",display:"inline-block",margin:"1px"},userActive:{color:"green"},userPending:{color:"red"},nagemonNameCol:{width:"328px"},image:{width:"100px",height:"100px",borderRadius:"99999px"}},"mgl5",{marginBottom:"5px"});t.default=N}.call(this,a(113))},643:function(e,t,a){"use strict";t.a={BASE_URL:"https://api-soida.applamdep.com",LIST_USER:"/api/list-user",LIST_USER_WITH_ID:"/api/list-user?id=",ADD_USER:"/api/add-user",UPDATE_USER:"/api/update-user",DELETE_USER:"/api/delete-user",LOGIN_ADMIN:"/api/login_admin",GET_SHOP:"/api/get-shop",GET_SALE:"/api/get-sale",GET_COEFFICIENT:"/api/calculator-coefficient-user",GET_COEFFICIENT_PER_SALE:"/api/calculator-coefficient-user-per-sale",GET_USER_SALE_BY_MONTH:"/api/get-user-of-sale-by-month",CALCULATOR_ALL_USER_OF_COMPANY:"/api/calculator-all-user-company",CALCULATOR_ALL_USER_OF_SALE:"/api/calculator-all-user-of-sale",GET_SEEDER:"/api/get-seed",GET_SALE_NAME:"/api/get-name-sale",GET_USER_BY_ID:"/api/get-user-byID",LIST_CUSTOMER:"/api/list-customer",LIST_CUSTOMER_BY_MONTH:"/api/get-user-sale-by-month",LIST_TYPEKEY:"/api/list-typekey",LIST_TYPEKEY_WITH_ID:"/api/list-typekey?id=",ADD_TYPEKEY:"/api/add-typekey",UPDATE_TYPEKEY:"/api/update-typekey",DELETE_TYPEKEY:"/api/delete-typekey",LIST_HARDWARE:"/api/list-hardware",LIST_HARDWARE_WITH_ID:"/api/list-hardware?id=",ADD_HARDWARE:"/api/add-hardware",UPDATE_HARDWARE:"/api/update-hardware",DELETE_HARDWARE:"/api/delete-hardware",LIST_ORDER:"/api/list-order",ADD_ORDER:"/api/add-order",UPDATE_STATUS_ORDER:"/api/update-status-order",LIST_TRANSACTION:"/api/list-transaction",ADD_TRANSACTION:"/api/add-transaction",LIST_CHECK_OUT:"/api/list-checkout",LIST_HARDWARE_CHECKOUT:"/api/get-list-hardward-by-check-out",UPDATE_STATUS_CHECKOUT:"/api/update-status-hardware",LIST_ORDER_DETAIL:"/api/list-orderdetail",ADD_ORDER_DETAIL:"/api/add-orderdetail",LIST_ROLE:"/api/list-role",LIST_ROLE_WITH_ID:"/api/list-role?id=",ADD_ROLE:"/api/add-role",UPDATE_ROLE:"/api/update-role",DELETE_ROLE:"/api/delete-role",LIST_PACKAGE:"/api/list-package",ADD_PACKAGE:"/api/add-package",UPDATE_PACKAGE:"/api/update-package",DELETE_PACKAGE:"/api/delete-package",PLUGIN_DATA_PACKAGE:"/api/get-name-package",LIST_SALELOG:"/api/list-salelog",LIST_SALELOG_WITH_ID:"/api/list-salelog?id=",ADD_SALELOG:"/api/add-salelog",UPDATE_SALELOG:"/api/update-salelog",DELETE_SALELOG:"/api/delete-salelog",DATA_SALE:"/api/get-data-sale",LIST_SALE:"/api/list-sale",LIST_SALE_WITH_ID:"/api/list-sale?id=",ADD_SALE:"/api/add-sale",UPDATE_SALE:"/api/update-sale",DELETE_SALE:"/api/delete-sale",LIST_KEYORDER:"/api/list-keyorder",LIST_KEYORDER_WITH_ID:"/api/list-keyorder?id=",ADD_KEYORDER:"/api/add-keyorder",UPDATE_KEYORDER:"/api/update-keyorder",DELETE_KEYORDER:"/api/delete-keyorder",LIST_KEY:"/api/list-key",LIST_KEY_WITH_ID:"/api/list-key?id=",ADD_KEY:"/api/add-key",UPDATE_KEY:"/api/update-key",DELETE_KEY:"/api/delete-key",PLUGIN_LIST_COMPANY:"/api/plugin-list-company",PLUGIN_LIST_COMPANY_WITH_ID:"/api/plugin-list-company?id=",PLUGIN_ADD_COMPANY:"/api/plugin-add-company",PLUGIN_UPDATE_COMPANY:"/api/plugin-update-company",PLUGIN_DELETE_COMPANY:"/api/plugin-delete-company",PLUGIN_DATA_COMPANY:"/api/plugin-get-data-company",LIST_COMPANY:"/api/list-company",LIST_COMPANY_WITH_ID:"/api/list-company?id=",ADD_COMPANY:"/api/add-company",UPDATE_COMPANY:"/api/update-company",DELETE_COMPANY:"/api/delete-company",DATA_COMPANY:"/api/get-data-company",LIST_LINK:"/api/list-link",LIST_LINK_WITH_ID:"/api/list-link?id=",ADD_LINK:"/api/add-link",UPDATE_LINK:"/api/update-link",DELETE_LINK:"/api/delete-link","GET-LINK-BY-ID":"/api/link-by-id",LIST_FEATURE:"/api/list-feature",ADD_FEATURE:"/api/add-feature",UPDATE_FEATURE:"/api/update-feature",DELETE_FEATURE:"/api/delete-feature",DATA_CHOOSE_FEATURE:"/api/get-feature-choose",LIST_PLUGIN_ORDER:"/api/plugin-list-order",LIST_PLUGIN_ORDER_BY_ID:"/api/plugin-list-order-by-id",ADD_PLUGIN_ORDER:"/api/plugin-add-order",UPDATE_PLUGIN_ORDER:"/api/plugin-update-order",DELETE_PLUGIN_ORDER:"/api/plugin-delete-order",PLUGIN_LIST_USER:"/api/plugin-list-user",PLUGIN_ADD_USER:"/api/plugin-add-user",PLUGIN_UPDATE_USER:"/api/plugin-update-user",PLUGIN_DELETE_USER:"/api/plugin-delete-user",PLUGIN_RESET_PASSWORD:"/api/plugin-reset-password",PLUGIN_UPDATE_STATUS:"/api/plugin-update-status",PLUGIN_LOGIN_ADMIN:"/api/plugin-login_admin",PLUGIN_GET_USER_BYID:"/api/plugin-get-user-byID",PLUGIN_LIST_ROLE:"/api/plugin-list-role",PLUGIN_ADD_ROLE:"/api/plugin-add-role",PLUGIN_UPDATE_ROLE:"/api/plugin-update-role",PLUGIN_DELETE_ROLE:"/api/plugin-delete-role"}},644:function(e,t,a){"use strict";a(2);var n=a(638),i=a.n(n),s=a(20),r=function(e){var t=e.field,a=e.value,n=e.label,r=e.error,l=e.type,o=e.onChange,c=e.checkUserExists,d=e.readOnly,u=e.placeholder;return Object(s.jsxs)("div",{className:i()("form-group",{"has-error":r}),children:[Object(s.jsx)("label",{className:"control-label",children:n}),Object(s.jsx)("input",{onChange:o,onBlur:c,value:a,type:l,name:t,placeholder:u,readOnly:d,className:"form-control"}),r&&Object(s.jsx)("span",{className:"help-block",children:r})]})};r.defaultProps={type:"text"},t.a=r},648:function(e,t){var a={utf8:{stringToBytes:function(e){return a.bin.stringToBytes(unescape(encodeURIComponent(e)))},bytesToString:function(e){return decodeURIComponent(escape(a.bin.bytesToString(e)))}},bin:{stringToBytes:function(e){for(var t=[],a=0;a<e.length;a++)t.push(255&e.charCodeAt(a));return t},bytesToString:function(e){for(var t=[],a=0;a<e.length;a++)t.push(String.fromCharCode(e[a]));return t.join("")}}};e.exports=a},655:function(e,t,a){!function(){var t=a(656),n=a(648).utf8,i=a(657),s=a(648).bin,r=function e(a,r){a.constructor==String?a=r&&"binary"===r.encoding?s.stringToBytes(a):n.stringToBytes(a):i(a)?a=Array.prototype.slice.call(a,0):Array.isArray(a)||a.constructor===Uint8Array||(a=a.toString());for(var l=t.bytesToWords(a),o=8*a.length,c=1732584193,d=-271733879,u=-1732584194,p=271733878,h=0;h<l.length;h++)l[h]=16711935&(l[h]<<8|l[h]>>>24)|4278255360&(l[h]<<24|l[h]>>>8);l[o>>>5]|=128<<o%32,l[14+(o+64>>>9<<4)]=o;var g=e._ff,m=e._gg,f=e._hh,b=e._ii;for(h=0;h<l.length;h+=16){var E=c,j=d,_=u,y=p;c=g(c,d,u,p,l[h+0],7,-680876936),p=g(p,c,d,u,l[h+1],12,-389564586),u=g(u,p,c,d,l[h+2],17,606105819),d=g(d,u,p,c,l[h+3],22,-1044525330),c=g(c,d,u,p,l[h+4],7,-176418897),p=g(p,c,d,u,l[h+5],12,1200080426),u=g(u,p,c,d,l[h+6],17,-1473231341),d=g(d,u,p,c,l[h+7],22,-45705983),c=g(c,d,u,p,l[h+8],7,1770035416),p=g(p,c,d,u,l[h+9],12,-1958414417),u=g(u,p,c,d,l[h+10],17,-42063),d=g(d,u,p,c,l[h+11],22,-1990404162),c=g(c,d,u,p,l[h+12],7,1804603682),p=g(p,c,d,u,l[h+13],12,-40341101),u=g(u,p,c,d,l[h+14],17,-1502002290),c=m(c,d=g(d,u,p,c,l[h+15],22,1236535329),u,p,l[h+1],5,-165796510),p=m(p,c,d,u,l[h+6],9,-1069501632),u=m(u,p,c,d,l[h+11],14,643717713),d=m(d,u,p,c,l[h+0],20,-373897302),c=m(c,d,u,p,l[h+5],5,-701558691),p=m(p,c,d,u,l[h+10],9,38016083),u=m(u,p,c,d,l[h+15],14,-660478335),d=m(d,u,p,c,l[h+4],20,-405537848),c=m(c,d,u,p,l[h+9],5,568446438),p=m(p,c,d,u,l[h+14],9,-1019803690),u=m(u,p,c,d,l[h+3],14,-187363961),d=m(d,u,p,c,l[h+8],20,1163531501),c=m(c,d,u,p,l[h+13],5,-1444681467),p=m(p,c,d,u,l[h+2],9,-51403784),u=m(u,p,c,d,l[h+7],14,1735328473),c=f(c,d=m(d,u,p,c,l[h+12],20,-1926607734),u,p,l[h+5],4,-378558),p=f(p,c,d,u,l[h+8],11,-2022574463),u=f(u,p,c,d,l[h+11],16,1839030562),d=f(d,u,p,c,l[h+14],23,-35309556),c=f(c,d,u,p,l[h+1],4,-1530992060),p=f(p,c,d,u,l[h+4],11,1272893353),u=f(u,p,c,d,l[h+7],16,-155497632),d=f(d,u,p,c,l[h+10],23,-1094730640),c=f(c,d,u,p,l[h+13],4,681279174),p=f(p,c,d,u,l[h+0],11,-358537222),u=f(u,p,c,d,l[h+3],16,-722521979),d=f(d,u,p,c,l[h+6],23,76029189),c=f(c,d,u,p,l[h+9],4,-640364487),p=f(p,c,d,u,l[h+12],11,-421815835),u=f(u,p,c,d,l[h+15],16,530742520),c=b(c,d=f(d,u,p,c,l[h+2],23,-995338651),u,p,l[h+0],6,-198630844),p=b(p,c,d,u,l[h+7],10,1126891415),u=b(u,p,c,d,l[h+14],15,-1416354905),d=b(d,u,p,c,l[h+5],21,-57434055),c=b(c,d,u,p,l[h+12],6,1700485571),p=b(p,c,d,u,l[h+3],10,-1894986606),u=b(u,p,c,d,l[h+10],15,-1051523),d=b(d,u,p,c,l[h+1],21,-2054922799),c=b(c,d,u,p,l[h+8],6,1873313359),p=b(p,c,d,u,l[h+15],10,-30611744),u=b(u,p,c,d,l[h+6],15,-1560198380),d=b(d,u,p,c,l[h+13],21,1309151649),c=b(c,d,u,p,l[h+4],6,-145523070),p=b(p,c,d,u,l[h+11],10,-1120210379),u=b(u,p,c,d,l[h+2],15,718787259),d=b(d,u,p,c,l[h+9],21,-343485551),c=c+E>>>0,d=d+j>>>0,u=u+_>>>0,p=p+y>>>0}return t.endian([c,d,u,p])};r._ff=function(e,t,a,n,i,s,r){var l=e+(t&a|~t&n)+(i>>>0)+r;return(l<<s|l>>>32-s)+t},r._gg=function(e,t,a,n,i,s,r){var l=e+(t&n|a&~n)+(i>>>0)+r;return(l<<s|l>>>32-s)+t},r._hh=function(e,t,a,n,i,s,r){var l=e+(t^a^n)+(i>>>0)+r;return(l<<s|l>>>32-s)+t},r._ii=function(e,t,a,n,i,s,r){var l=e+(a^(t|~n))+(i>>>0)+r;return(l<<s|l>>>32-s)+t},r._blocksize=16,r._digestsize=16,e.exports=function(e,a){if(void 0===e||null===e)throw new Error("Illegal argument "+e);var n=t.wordsToBytes(r(e,a));return a&&a.asBytes?n:a&&a.asString?s.bytesToString(n):t.bytesToHex(n)}}()},656:function(e,t){!function(){var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",a={rotl:function(e,t){return e<<t|e>>>32-t},rotr:function(e,t){return e<<32-t|e>>>t},endian:function(e){if(e.constructor==Number)return 16711935&a.rotl(e,8)|4278255360&a.rotl(e,24);for(var t=0;t<e.length;t++)e[t]=a.endian(e[t]);return e},randomBytes:function(e){for(var t=[];e>0;e--)t.push(Math.floor(256*Math.random()));return t},bytesToWords:function(e){for(var t=[],a=0,n=0;a<e.length;a++,n+=8)t[n>>>5]|=e[a]<<24-n%32;return t},wordsToBytes:function(e){for(var t=[],a=0;a<32*e.length;a+=8)t.push(e[a>>>5]>>>24-a%32&255);return t},bytesToHex:function(e){for(var t=[],a=0;a<e.length;a++)t.push((e[a]>>>4).toString(16)),t.push((15&e[a]).toString(16));return t.join("")},hexToBytes:function(e){for(var t=[],a=0;a<e.length;a+=2)t.push(parseInt(e.substr(a,2),16));return t},bytesToBase64:function(e){for(var a=[],n=0;n<e.length;n+=3)for(var i=e[n]<<16|e[n+1]<<8|e[n+2],s=0;s<4;s++)8*n+6*s<=8*e.length?a.push(t.charAt(i>>>6*(3-s)&63)):a.push("=");return a.join("")},base64ToBytes:function(e){e=e.replace(/[^A-Z0-9+\/]/gi,"");for(var a=[],n=0,i=0;n<e.length;i=++n%4)0!=i&&a.push((t.indexOf(e.charAt(n-1))&Math.pow(2,-2*i+8)-1)<<2*i|t.indexOf(e.charAt(n))>>>6-2*i);return a}};e.exports=a}()},657:function(e,t){function a(e){return!!e.constructor&&"function"===typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}e.exports=function(e){return null!=e&&(a(e)||function(e){return"function"===typeof e.readFloatLE&&"function"===typeof e.slice&&a(e.slice(0,0))}(e)||!!e._isBuffer)}},659:function(e,t,a){"use strict";var n=a(12),i=a(28),s=a(653),r=a(35),l=a(2),o=a.n(l),c=a(64),d=a.n(c),u=a(638),p=a.n(u),h=a(642),g={children:d.a.node,type:d.a.string,size:d.a.oneOfType([d.a.number,d.a.string]),bsSize:d.a.string,valid:d.a.bool,invalid:d.a.bool,tag:h.n,innerRef:d.a.oneOfType([d.a.object,d.a.func,d.a.string]),plaintext:d.a.bool,addon:d.a.bool,className:d.a.string,cssModule:d.a.object},m=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(s.a)(a)),a.focus=a.focus.bind(Object(s.a)(a)),a}Object(r.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.focus=function(){this.ref&&this.ref.focus()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,s=e.type,r=e.bsSize,l=e.valid,c=e.invalid,d=e.tag,u=e.addon,g=e.plaintext,m=e.innerRef,f=Object(i.a)(e,["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"]),b=["radio","checkbox"].indexOf(s)>-1,E=new RegExp("\\D","g"),j=d||("select"===s||"textarea"===s?s:"input"),_="form-control";g?(_+="-plaintext",j=d||"input"):"file"===s?_+="-file":"range"===s?_+="-range":b&&(_=u?null:"form-check-input"),f.size&&E.test(f.size)&&(Object(h.p)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),r=f.size,delete f.size);var y=Object(h.j)(p()(t,c&&"is-invalid",l&&"is-valid",!!r&&"form-control-"+r,_),a);return("input"===j||d&&"function"===typeof d)&&(f.type=s),f.children&&!g&&"select"!==s&&"string"===typeof j&&"select"!==j&&(Object(h.p)('Input with a type of "'+s+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete f.children),o.a.createElement(j,Object(n.a)({},f,{ref:m,className:y,"aria-invalid":c}))},t}(o.a.Component);m.propTypes=g,m.defaultProps={type:"text"},t.a=m},662:function(e,t,a){"use strict";var n=a(12),i=a(28),s=a(2),r=a.n(s),l=a(64),o=a.n(l),c=a(638),d=a.n(c),u=a(642),p=o.a.oneOfType([o.a.number,o.a.string]),h={tag:u.n,noGutters:o.a.bool,className:o.a.string,cssModule:o.a.object,form:o.a.bool,xs:p,sm:p,md:p,lg:p,xl:p},g={tag:"div",widths:["xs","sm","md","lg","xl"]},m=function(e){var t=e.className,a=e.cssModule,s=e.noGutters,l=e.tag,o=e.form,c=e.widths,p=Object(i.a)(e,["className","cssModule","noGutters","tag","form","widths"]),h=[];c.forEach((function(t,a){var n=e[t];if(delete p[t],n){var i=!a;h.push(i?"row-cols-"+n:"row-cols-"+t+"-"+n)}}));var g=Object(u.j)(d()(t,s?"no-gutters":null,o?"form-row":"row",h),a);return r.a.createElement(l,Object(n.a)({},p,{className:g}))};m.propTypes=h,m.defaultProps=g,t.a=m},663:function(e,t,a){"use strict";var n=a(12),i=a(28),s=a(2),r=a.n(s),l=a(64),o=a.n(l),c=a(638),d=a.n(c),u=a(642),p=o.a.oneOfType([o.a.number,o.a.string]),h=o.a.oneOfType([o.a.bool,o.a.number,o.a.string,o.a.shape({size:o.a.oneOfType([o.a.bool,o.a.number,o.a.string]),order:p,offset:p})]),g={tag:u.n,xs:h,sm:h,md:h,lg:h,xl:h,className:o.a.string,cssModule:o.a.object,widths:o.a.array},m={tag:"div",widths:["xs","sm","md","lg","xl"]},f=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},b=function(e){var t=e.className,a=e.cssModule,s=e.widths,l=e.tag,o=Object(i.a)(e,["className","cssModule","widths","tag"]),c=[];s.forEach((function(t,n){var i=e[t];if(delete o[t],i||""===i){var s=!n;if(Object(u.h)(i)){var r,l=s?"-":"-"+t+"-",p=f(s,t,i.size);c.push(Object(u.j)(d()(((r={})[p]=i.size||""===i.size,r["order"+l+i.order]=i.order||0===i.order,r["offset"+l+i.offset]=i.offset||0===i.offset,r)),a))}else{var h=f(s,t,i);c.push(h)}}})),c.length||c.push("col");var p=Object(u.j)(d()(t,c),a);return r.a.createElement(l,Object(n.a)({},o,{className:p}))};b.propTypes=g,b.defaultProps=m,t.a=b}}]);
//# sourceMappingURL=24.8dde37cb.chunk.js.map