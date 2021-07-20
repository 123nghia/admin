/*! For license information please see 23.6f9396fa.chunk.js.LICENSE.txt */
(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[23],{1224:function(e,t,a){"use strict";a.r(t);var n=a(169),s=a(114),i=a.n(s),r=a(652),c=a(165),l=a(166),o=a(168),d=a(167),u=a(2),p=a(663),h=a(664),g=a(931),m=a(1179),f=a(659),b=a(661),_=a(932),j=a(937),E=a(1236),O=a(1203),S=a(1204),D=a(1205),x=a(648),T=(a(653),a(643)),A=(a(644),a(651)),y=a.n(A),L=(a(656),a(20)),N=new Headers,v=localStorage.getItem("auth");N.append("Authorization","Bearer "+v),N.append("Content-Type","application/json");var I=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).getData=Object(r.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.setState({isLoading:!0}),e.next=3,y()({baseURL:T.a.BASE_URL,url:T.a.LIST_ORDER,method:"POST"});case 3:t=e.sent,n.pagination(t.data.data),n.setState({dataApi:t.data.data}),a=0,t.data.data.map((function(e){"Actived"==e.Status&&(a+=1)})),n.setState({isLoading:!1,totalActive:a});case 9:case"end":return e.stop()}}),e)}))),n.getOrderDetail=function(){var e=Object(r.a)(i.a.mark((function e(t,a,s){var r,c,l;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y()({baseURL:T.a.BASE_URL,url:T.a.LIST_ORDER_DETAIL,method:"POST",data:{company_id:t}});case 2:return r=e.sent,e.next=5,y()({baseURL:T.a.BASE_URL,url:T.a.LIST_COMPANY,method:"POST",data:{condition:{_id:t}}});case 5:return c=e.sent,e.next=8,y()({baseURL:T.a.BASE_URL,url:T.a.GET_SALE_NAME,method:"POST",data:{sale_id:a}});case 8:l=e.sent,n.setState({dataApi:r.data.data,dataOrderDetail:r.data.data,hiddenDetail:!1,currentID:t,currentCom_ID:c.data.data[0].Name,currentSale_ID:l.data.data[0].Name,curentStatus:s});case 10:case"end":return e.stop()}}),e)})));return function(t,a,n){return e.apply(this,arguments)}}(),n.state={data:[],key:"",keyStatus:"",activePage:1,page:1,itemsCount:0,limit:20,totalActive:0,modalCom:!1,viewingUser:{},communities:[],updated:"",Status:"",dataApi:[],action:"new",modalDelete:!1,delete:null,arrPagination:[],indexPage:0,dataCompany:[],currentCompany:"",currentID:"",currentCom_ID:"",currentSale_ID:"",curentStatus:"",dataOrderDetail:[],DATA_COMPANY:"",hiddenDetail:!0},n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=Object(r.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(this.getData(),t=JSON.parse(localStorage.getItem("url")),a=0;a<t.length;a++)"#"+t[a].to==window.location.hash&&1==t[a].hidden&&(window.location.href="#/");case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getCompanyData",value:function(){var e=Object(r.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y()({baseURL:T.a.BASE_URL,url:T.a.LIST_COMPANY,method:"POST"});case 2:t=e.sent,this.setState({dataCompany:t.data.data});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"pagination",value:function(e){var t,a,n,s=[];for(t=0,a=e.length;t<a;t+=5)n=e.slice(t,t+5),s.push(n);this.setState({arrPagination:s,data:s[this.state.indexPage]})}},{key:"searchKey",value:function(){var e=this.state,t=e.indexPage,a=e.key,n=e.keyStatus;if(""!=a||""!=n){var s=[];this.state.dataApi.map((function(e){e.Company_Id.toLocaleUpperCase().includes(a.toLocaleUpperCase())&&e.Status.toLocaleUpperCase().includes(n.toLocaleUpperCase())&&s.push(e)}));var i=0;s.map((function(e){"Actived"==e.Status&&(i+=1)})),this.setState({data:s,totalActive:i})}else{var r=0;this.state.dataApi.map((function(e){"Actived"==e.Status&&(r+=1)})),this.setState({data:this.state.arrPagination[t],totalActive:r})}}},{key:"toggleModal",value:function(e){"new"==e&&this.setState({modalCom:!this.state.modalCom,action:e,Name:"",Email:"",Phone:"",Fax:"",Address:"",Website:"",Code:"",Status:"",username:"",password:""})}},{key:"onChange",value:function(e,t){this.setState(Object(n.a)({},e,t))}},{key:"addCompany",value:function(){var e=Object(r.a)(i.a.mark((function e(){var t,a,n,s,r,c,l,o,d,u,p,h,g;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.state,a=t.Email,n=t.Name,s=t.Phone,r=t.Fax,c=t.Address,l=t.Website,o=t.Code,d=t.UserName,u=t.Password,null!=a&&""!=a&&null!=n&&""!=n&&null!=s&&""!=s&&null!=c&&""!=c&&null!=d&&""!=d&&null!=u&&""!=u){e.next=4;break}return alert("Please fill in all the requirements"),e.abrupt("return");case 4:return p={Name:n,Email:a,Phone:s,Fax:r,Address:c,Website:l,Code:o},this.setState({isLoading:!0}),e.next=8,y()({baseURL:T.a.BASE_URL,url:T.a.ADD_COMPANY,method:"PUT",data:p});case 8:if(1!=(h=e.sent).data.is_success){e.next=18;break}return this.getData(),g={Name:n,Email:a,Phone:s,Address:c,Company_Id:h.data.data._id,Role_Id:"60e6a98b39d7243f689a123c",UserName:d,Password:u,Code:h.data.data._id,Status:"Actived"},e.next=14,y()({baseURL:T.a.BASE_URL,url:T.a.ADD_USER,method:"POST",data:g});case 14:console.log(h.data.data),this.setState({modalCom:!this.state.modalCom}),e.next=20;break;case 18:alert(h.data.message),this.setState({isLoading:!1});case 20:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"openUpdate",value:function(e){this.setState({modalCom:!this.state.modalCom,action:"update",id:e._id,Status:e.Status,DATA_COMPANY:e})}},{key:"addTransaction",value:function(){var e=Object(r.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={company_id:this.state.DATA_COMPANY.Company_Id},e.next=3,y()({baseURL:T.a.BASE_URL,url:T.a.ADD_TRANSACTION,method:"POST",data:t});case 3:return 1!=(a=e.sent).data.is_success&&alert("C\xf3 l\u1ed7i x\u1ea3y ra khi th\xeam d\u1eef li\u1ec7u v\xe0o Transaction"),e.abrupt("return",a);case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"updateOrder",value:function(){var e=Object(r.a)(i.a.mark((function e(){var t,a,n,s,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.state,a=t.Status,n=t.DATA_COMPANY,s={Status:a,id:this.state.id},e.next=4,y()({baseURL:T.a.BASE_URL,url:T.a.UPDATE_STATUS_ORDER,method:"POST",data:s});case 4:if(1!=(r=e.sent).data.is_success){e.next=21;break}if("SPENDING"!=n.Status){e.next=19;break}return e.next=9,this.addTransaction();case 9:if(!e.sent.data.is_success){e.next=16;break}this.getData(),this.setState({modalCom:!this.state.modalCom}),this.setState({isLoading:!0}),e.next=19;break;case 16:return e.next=18,y()({baseURL:T.a.BASE_URL,url:T.a.UPDATE_STATUS_ORDER,method:"POST",data:{Status:"SPENDING",id:this.state.id}});case 18:this.setState({isLoading:!1});case 19:e.next=23;break;case 21:alert(r.data.message),this.setState({isLoading:!1});case 23:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getBadge",value:function(e){switch(e){case"SPENDING":return"success";default:return"primary"}}},{key:"toggle",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";this.setState({modal:!this.state.modal,image:"",url:"",isActive:!1,isLoading:!1,errors:{},action:e,position:1,data:[],updated:""})}},{key:"inputChange",value:function(e){this.setState(Object(n.a)({},e.target.name,e.target.value))}},{key:"goSearch",value:function(){this.getUsers()}},{key:"actionSearch",value:function(e,t){var a=this;this.setState(Object(n.a)({},t,e.target.value),(function(){a.searchKey()}))}},{key:"resetSearch",value:function(){var e=this;this.setState({key:"",keyEmail:"",keyPhone:"",keyFax:"",keyAddress:"",keyWebsite:"",keyCode:"",keyCompany:"",keyDateCreate:new Date,keyStatus:""},(function(){e.searchKey()}))}},{key:"render",value:function(){var e=this,t=this.state,a=t.data,n=t.key,s=(t.viewingUser,t.communities,t.action),c=t.arrPagination,l=t.indexPage,o=(t.dataCompany,t.keyAddress,t.keyCode,t.keyCompany,t.keyEmail,t.keyFax,t.keyPhone,t.keyWebsite,t.keyDateCreate,t.keyStatus,t.dataOrderDetail);return this.state.isLoading?Object(L.jsx)("div",{id:"page-loading",children:Object(L.jsxs)("div",{className:"three-balls",children:[Object(L.jsx)("div",{className:"ball ball1"}),Object(L.jsx)("div",{className:"ball ball2"}),Object(L.jsx)("div",{className:"ball ball3"})]})}):Object(L.jsxs)("div",{className:"animated fadeIn",children:[Object(L.jsx)(p.a,{children:Object(L.jsxs)(h.a,{children:[Object(L.jsx)("p",{style:R.success,children:this.state.updated}),Object(L.jsx)("p",{style:R.danger,children:this.state.deleted}),Object(L.jsxs)(g.a,{children:[Object(L.jsxs)(m.a,{children:[Object(L.jsx)("i",{className:"fa fa-align-justify"})," Danh s\xe1ch \u0111\u01a1n h\xe0ng (Page: ",this.state.indexPage+1,")",Object(L.jsx)("div",{style:R.tags,children:Object(L.jsx)(x.N,{children:Object(L.jsx)(x.j,{sm:"12",lg:"12",children:Object(L.jsxs)(x.N,{children:[Object(L.jsx)(x.j,{sm:"12",lg:"4",children:Object(L.jsx)("div",{children:Object(L.jsx)(f.a,{style:R.searchInput,onChange:function(t){e.actionSearch(t,"key")},name:"key",value:n,placeholder:"T\u1eeb kh\xf3a"})})}),Object(L.jsx)(x.j,{sm:"12",lg:"4",children:Object(L.jsx)(x.O,{style:R.flexOption,onChange:function(t){e.actionSearch(t,"keyStatus")},custom:!0,children:["AVAILABLE","SPENDING"].map((function(e,t){return Object(L.jsx)("option",{value:e,children:e})}))})}),Object(L.jsx)(x.j,{sm:"12",lg:"4",children:Object(L.jsx)(b.a,{color:"primary",style:{width:"100%",marginTop:5},size:"sm",onClick:function(t){e.resetSearch()},children:"L\xe0m m\u1edbi t\xecm ki\u1ebfm"})})]})})})})]}),Object(L.jsx)(_.a,{children:Object(L.jsxs)("table",{ble:!0,className:"table table-hover table-outline mb-0 d-none d-sm-table",children:[Object(L.jsx)("thead",{className:"thead-light",children:Object(L.jsxs)("tr",{children:[Object(L.jsx)("th",{className:"text-center",children:"STT."}),Object(L.jsx)("th",{className:"text-center",children:"M\xe3 c\xf4ng ty"}),Object(L.jsx)("th",{className:"text-center",children:"Ng\xe0y mua"}),Object(L.jsx)("th",{className:"text-center",children:"Ng\xe0y k\xedch ho\u1ea1t"}),Object(L.jsx)("th",{className:"text-center",children:"S\u1ed1 l\u01b0\u1ee3ng mua"}),Object(L.jsx)("th",{className:"text-center",children:"Tr\u1ea1ng th\xe1i"}),Object(L.jsx)("th",{className:"text-center",children:"#"})]})}),Object(L.jsx)("tbody",{children:void 0!=a?a.map((function(t,a){return Object(L.jsxs)("tr",{children:[Object(L.jsx)("td",{className:"text-center",children:a+1}),Object(L.jsx)("td",{className:"text-center",children:t.Company_Id}),Object(L.jsx)("td",{className:"text-center",children:new Date(t.Purcharse_Date).toLocaleDateString()+" "+new Date(t.Purcharse_Date).toLocaleTimeString()}),Object(L.jsx)("td",{className:"text-center",children:new Date(t.Active_Date).toLocaleDateString()+" "+new Date(t.Active_Date).toLocaleTimeString()}),Object(L.jsx)("td",{className:"text-center",children:t.Count}),Object(L.jsx)("td",{className:"text-center",children:Object(L.jsx)(x.a,{color:e.getBadge(t.Status),children:t.Status})}),Object(L.jsxs)("td",{className:"text-center",children:[Object(L.jsx)(b.a,{outline:!0,color:"primary",size:"sm",onClick:function(a){return e.openUpdate(t)},children:"Update"})," ",Object(L.jsx)(b.a,{outline:!0,color:"success",size:"sm",onClick:function(){var a=Object(r.a)(i.a.mark((function a(n){return i.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.getOrderDetail(t.Company_Id,t.Sale_Id,t.Status);case 2:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}(),children:"Chi ti\u1ebft"})]})]},a)})):""})]})}),Object(L.jsx)(j.a,{children:1==c.length?"":Object(L.jsx)("div",{style:{float:"right",marginRight:"10px",padding:"10px"},children:Object(L.jsx)("tr",{style:R.row,children:c.map((function(t,a){return Object(L.jsx)("td",{children:Object(L.jsx)(b.a,{style:R.pagination,color:a==l?"primary":"danger",onClick:function(t){e.setState({data:c[a],indexPage:a})},children:a+1})})}))})})})]}),Object(L.jsxs)(g.a,{hidden:this.state.hiddenDetail,children:[Object(L.jsxs)(m.a,{children:[Object(L.jsx)("i",{className:"fa fa-align-justify"})," Chi ti\u1ebft \u0111\u01a1n h\xe0ng c\u1ee7a ",this.state.currentCom_ID," (Page: ",this.state.indexPage+1,")",Object(L.jsxs)(x.N,{style:{marginTop:20},children:[Object(L.jsxs)(x.j,{sm:"6",lg:"6",children:[Object(L.jsx)(x.j,{sm:"12",lg:"12",children:Object(L.jsxs)(x.F,{htmlFor:"selectSm",children:["T\xean c\xf4ng ty \u0111\u0103ng k\xfd ph\u1ea7n c\u1ee9ng: ",this.state.currentCom_ID]})}),Object(L.jsx)(x.j,{sm:"12",lg:"12",children:Object(L.jsxs)(x.F,{htmlFor:"selectSm",children:["T\xean sale: ",this.state.currentSale_ID]})}),Object(L.jsx)(x.j,{sm:"12",lg:"12",children:Object(L.jsxs)(x.F,{htmlFor:"selectSm",children:["Tr\u1ea1ng th\xe1i \u0111\u01a1n h\xe0ng: ",Object(L.jsx)(x.a,{color:this.getBadge(this.state.curentStatus),children:this.state.curentStatus})]})})]}),Object(L.jsx)(x.j,{sm:"6",lg:"6",children:Object(L.jsx)(b.a,{color:"primary",style:{float:"right",marginTop:5},size:"sm",onClick:function(t){e.setState({hiddenDetail:!0})},children:"\u0110\xf3ng"})})]})]}),Object(L.jsx)(_.a,{children:Object(L.jsxs)("table",{ble:!0,className:"table table-hover table-outline mb-0 d-none d-sm-table",children:[Object(L.jsx)("thead",{className:"thead-light",children:Object(L.jsxs)("tr",{children:[Object(L.jsx)("th",{className:"text-center",children:"STT."}),Object(L.jsx)("th",{className:"text-center",children:"M\xe3 \u0111\u01a1n h\xe0ng"}),Object(L.jsx)("th",{className:"text-center",children:"M\xe3 ph\u1ea7n c\u1ee9ng"}),Object(L.jsx)("th",{className:"text-center",children:"Ng\xe0y mua"}),Object(L.jsx)("th",{className:"text-center",children:"Ng\xe0y k\xedch ho\u1ea1t"}),Object(L.jsx)("th",{className:"text-center",children:"Tr\u1ea1ng th\xe1i"})]})}),Object(L.jsx)("tbody",{children:void 0!=o?o.map((function(t,a){return Object(L.jsxs)("tr",{children:[Object(L.jsx)("td",{className:"text-center",children:a+1}),Object(L.jsx)("td",{className:"text-center",children:t.OrderID}),Object(L.jsx)("td",{className:"text-center",children:t.HardWareID}),Object(L.jsx)("td",{className:"text-center",children:new Date(t.Purcharse_Date).toLocaleDateString()+" "+new Date(t.Purcharse_Date).toLocaleTimeString()}),Object(L.jsx)("td",{className:"text-center",children:new Date(t.Active_Date).toLocaleDateString()+" "+new Date(t.Active_Date).toLocaleTimeString()}),Object(L.jsx)("td",{className:"text-center",children:Object(L.jsx)(x.a,{color:e.getBadge(t.Status),children:t.Status})})]},a)})):""})]})})]})]})}),Object(L.jsxs)(E.a,{isOpen:this.state.modalCom,className:this.props.className,children:[Object(L.jsx)(O.a,{children:"new"==this.state.action?"Create":"Update"}),Object(L.jsx)(S.a,{children:"new"==s?"":Object(L.jsxs)("div",{children:[Object(L.jsx)("label",{style:R.flexLabel,htmlFor:"tag",children:"Status    "}),Object(L.jsxs)("select",{style:R.flexOption,name:"Status",onChange:function(t){return e.onChange("Status",t.target.value)},children:[Object(L.jsx)("option",{value:this.state.Status,children:""==this.state.Status?" - - - - - - - - - - ":this.state.Status}),["SPENDING","COMPLETE"].map((function(e,t){return Object(L.jsx)("option",{value:e,children:e})}))]})]})}),Object(L.jsxs)(D.a,{children:[Object(L.jsx)(b.a,{color:"primary",onClick:function(t){"new"===e.state.action?e.addCompany():e.updateOrder()},disabled:this.state.isLoading,children:"Save"})," ",Object(L.jsx)(b.a,{color:"secondary",onClick:function(t){return e.toggleModal("new")},children:"Cancel"})]})]}),Object(L.jsxs)(E.a,{isOpen:this.state.modalDelete,toggle:function(t){return e.setState({modalDelete:!e.state.modalDelete,delete:null})},className:this.props.className,children:[Object(L.jsx)(O.a,{toggle:function(t){return e.setState({modalDelete:!e.state.modalDelete,delete:null})},children:"Delete"}),Object(L.jsx)(S.a,{children:Object(L.jsx)("label",{htmlFor:"tag",children:'Do you want to delete user "'.concat(this.state.delete?this.state.delete.Email:"",'" ?')})}),Object(L.jsxs)(D.a,{children:[Object(L.jsx)(b.a,{color:"primary",onClick:function(t){return e.delete()},disabled:this.state.isLoading,children:"Delete"})," ",Object(L.jsx)(b.a,{color:"secondary",onClick:function(t){return e.setState({modalDelete:!e.state.modalDelete,delete:null})},children:"Cancel"})]})]})]})}}]),a}(u.Component),R=Object(n.a)({pagination:{marginRight:"5px"},flexLabel:{width:100},flexOption:{width:160,margin:"1px"},a:{textDecoration:"none"},floatRight:{float:"right",marginTop:"3px"},spinner:{width:"30px"},center:{textAlign:"center"},tbody:{height:"380px",overflowY:"auto"},wh12:{width:"8%",float:"left",height:"80px"},wh15:{width:"15%",float:"left",height:"80px"},w5:{width:"12%",float:"left",height:"80px"},wa10:{width:"5%",float:"left",height:"80px"},row:{float:"left",width:"100%"},success:{color:"green"},danger:{color:"red"},mgl5:{marginLeft:"5px"},tags:{float:"right",marginRight:"5px"},searchInput:{width:"160px",display:"inline-block",margin:"1px"},userActive:{color:"green"},userPending:{color:"red"},nagemonNameCol:{width:"328px"},image:{width:"100px",height:"100px",borderRadius:"99999px"}},"mgl5",{marginBottom:"5px"});t.default=I},643:function(e,t,a){"use strict";t.a={BASE_URL:"https://api-soida.applamdep.com",LIST_USER:"/api/list-user",LIST_USER_WITH_ID:"/api/list-user?id=",ADD_USER:"/api/add-user",UPDATE_USER:"/api/update-user",DELETE_USER:"/api/delete-user",LOGIN_ADMIN:"/api/login_admin",GET_SHOP:"/api/get-shop",GET_SALE:"/api/get-sale",GET_COEFFICIENT:"/api/calculator-coefficient-user",GET_COEFFICIENT_PER_SALE:"/api/calculator-coefficient-user-per-sale",GET_USER_SALE_BY_MONTH:"/api/get-user-of-sale-by-month",CALCULATOR_ALL_USER_OF_COMPANY:"/api/calculator-all-user-company",CALCULATOR_ALL_USER_OF_SALE:"/api/calculator-all-user-of-sale",GET_SEEDER:"/api/get-seed",GET_SALE_NAME:"/api/get-name-sale",GET_USER_BY_ID:"/api/get-user-byID",LIST_CUSTOMER:"/api/list-customer",LIST_CUSTOMER_BY_MONTH:"/api/get-user-sale-by-month",LIST_TYPEKEY:"/api/list-typekey",LIST_TYPEKEY_WITH_ID:"/api/list-typekey?id=",ADD_TYPEKEY:"/api/add-typekey",UPDATE_TYPEKEY:"/api/update-typekey",DELETE_TYPEKEY:"/api/delete-typekey",LIST_HARDWARE:"/api/list-hardware",LIST_HARDWARE_WITH_ID:"/api/list-hardware?id=",ADD_HARDWARE:"/api/add-hardware",UPDATE_HARDWARE:"/api/update-hardware",DELETE_HARDWARE:"/api/delete-hardware",LIST_ORDER:"/api/list-order",LIST_ORDER_BY_SALE:"/api/plugin-list-order-by-saleid",ADD_ORDER:"/api/add-order",UPDATE_STATUS_ORDER:"/api/update-status-order",CHECK_OUT:"/api/checkout-order",LIST_TRANSACTION:"/api/list-transaction",ADD_TRANSACTION:"/api/add-transaction",LIST_CHECK_OUT:"/api/list-checkout",LIST_HARDWARE_CHECKOUT:"/api/get-list-hardward-by-check-out",UPDATE_STATUS_CHECKOUT:"/api/update-status-hardware",LIST_ORDER_DETAIL:"/api/list-orderdetail",ADD_ORDER_DETAIL:"/api/add-orderdetail",LIST_ROLE:"/api/list-role",LIST_ROLE_WITH_ID:"/api/list-role?id=",ADD_ROLE:"/api/add-role",UPDATE_ROLE:"/api/update-role",DELETE_ROLE:"/api/delete-role",LIST_PACKAGE:"/api/list-package",ADD_PACKAGE:"/api/add-package",UPDATE_PACKAGE:"/api/update-package",DELETE_PACKAGE:"/api/delete-package",PLUGIN_DATA_PACKAGE:"/api/get-name-package",LIST_SALELOG:"/api/list-salelog",LIST_SALELOG_WITH_ID:"/api/list-salelog?id=",ADD_SALELOG:"/api/add-salelog",UPDATE_SALELOG:"/api/update-salelog",DELETE_SALELOG:"/api/delete-salelog",DATA_SALE:"/api/get-data-sale",LIST_SALE:"/api/list-sale",LIST_SALE_WITH_ID:"/api/list-sale?id=",ADD_SALE:"/api/add-sale",UPDATE_SALE:"/api/update-sale",DELETE_SALE:"/api/delete-sale",LIST_KEYORDER:"/api/list-keyorder",LIST_KEYORDER_WITH_ID:"/api/list-keyorder?id=",ADD_KEYORDER:"/api/add-keyorder",UPDATE_KEYORDER:"/api/update-keyorder",DELETE_KEYORDER:"/api/delete-keyorder",LIST_KEY:"/api/list-key",LIST_KEY_WITH_ID:"/api/list-key?id=",ADD_KEY:"/api/add-key",UPDATE_KEY:"/api/update-key",DELETE_KEY:"/api/delete-key",PLUGIN_LIST_COMPANY:"/api/plugin-list-company",PLUGIN_LIST_COMPANY_BY_ID:"/api/plugin-list-company-by-id",PLUGIN_LIST_COMPANY_WITH_ID:"/api/plugin-list-company?id=",PLUGIN_ADD_COMPANY:"/api/plugin-add-company",PLUGIN_UPDATE_COMPANY:"/api/plugin-update-company",PLUGIN_DELETE_COMPANY:"/api/plugin-delete-company",PLUGIN_DATA_COMPANY:"/api/plugin-get-data-company",LIST_COMPANY:"/api/list-company",LIST_COMPANY_WITH_ID:"/api/list-company?id=",ADD_COMPANY:"/api/add-company",UPDATE_COMPANY:"/api/update-company",DELETE_COMPANY:"/api/delete-company",DATA_COMPANY:"/api/get-data-company",LIST_LINK:"/api/list-link",LIST_LINK_WITH_ID:"/api/list-link?id=",ADD_LINK:"/api/add-link",UPDATE_LINK:"/api/update-link",DELETE_LINK:"/api/delete-link","GET-LINK-BY-ID":"/api/link-by-id",LIST_FEATURE:"/api/list-feature",ADD_FEATURE:"/api/add-feature",UPDATE_FEATURE:"/api/update-feature",DELETE_FEATURE:"/api/delete-feature",DATA_CHOOSE_FEATURE:"/api/get-feature-choose",LIST_PLUGIN_ORDER:"/api/plugin-list-order",LIST_PLUGIN_ORDER_BY_ID:"/api/plugin-list-order-by-id",ADD_PLUGIN_ORDER:"/api/plugin-add-order",UPDATE_PLUGIN_ORDER:"/api/plugin-update-order",DELETE_PLUGIN_ORDER:"/api/plugin-delete-order",UPDATE_SLUG:"/api/plugin-update-slug",PLUGIN_LIST_USER:"/api/plugin-list-user",PLUGIN_ADD_USER:"/api/plugin-add-user",PLUGIN_ADD_SALE:"/api/plugin-add-sale",PLUGIN_UPDATE_USER:"/api/plugin-update-user",PLUGIN_DELETE_USER:"/api/plugin-delete-user",PLUGIN_RESET_PASSWORD:"/api/plugin-reset-password",PLUGIN_UPDATE_PASSWORD:"/api/plugin-update-password",PLUGIN_UPDATE_STATUS:"/api/plugin-update-status",PLUGIN_LOGIN_ADMIN:"/api/plugin-login_admin",PLUGIN_GET_USER_BYID:"/api/plugin-get-user-byID",PLUGIN_GET_USER_BY_BODY:"/api/plugin-get-user-byID-with-body",PLUGIN_LIST_ROLE:"/api/plugin-list-role",PLUGIN_ADD_ROLE:"/api/plugin-add-role",PLUGIN_UPDATE_ROLE:"/api/plugin-update-role",PLUGIN_DELETE_ROLE:"/api/plugin-delete-role",CUS_RES_LIST:"/api/list-customer-request",CUS_RES_ADD:"/api/add-customer-request",CUS_RES_UPDATE:"/api/update-customer-request",CUS_RES_DELETE:"/api/delete-customer-request",REWARD_INFO_LIST:"/api/list-reward-info",REWARD_INFO_ADD:"/api/add-reward-info",REWARD_INFO_UPDATE:"/api/update-reward-info",REWARD_INFO_DELETE:"/api/delete-reward-info",REWARD_TRANS_LIST:"/api/list-reward-trans",REWARD_TRANSO_ADD:"/api/list-reward-trans",REWARD_TRANS_UPDATE:"/api/update-reward-trans",REWARD_TRANS_DELETE:"/api/delete-reward-trans"}},644:function(e,t,a){"use strict";a(2);var n=a(638),s=a.n(n),i=a(20),r=function(e){var t=e.field,a=e.value,n=e.label,r=e.error,c=e.type,l=e.onChange,o=e.checkUserExists,d=e.readOnly,u=e.placeholder;return Object(i.jsxs)("div",{className:s()("form-group",{"has-error":r}),children:[Object(i.jsx)("label",{className:"control-label",children:n}),Object(i.jsx)("input",{onChange:l,onBlur:o,value:a,type:c,name:t,placeholder:u,readOnly:d,className:"form-control"}),r&&Object(i.jsx)("span",{className:"help-block",children:r})]})};r.defaultProps={type:"text"},t.a=r},650:function(e,t){var a={utf8:{stringToBytes:function(e){return a.bin.stringToBytes(unescape(encodeURIComponent(e)))},bytesToString:function(e){return decodeURIComponent(escape(a.bin.bytesToString(e)))}},bin:{stringToBytes:function(e){for(var t=[],a=0;a<e.length;a++)t.push(255&e.charCodeAt(a));return t},bytesToString:function(e){for(var t=[],a=0;a<e.length;a++)t.push(String.fromCharCode(e[a]));return t.join("")}}};e.exports=a},656:function(e,t,a){!function(){var t=a(657),n=a(650).utf8,s=a(658),i=a(650).bin,r=function e(a,r){a.constructor==String?a=r&&"binary"===r.encoding?i.stringToBytes(a):n.stringToBytes(a):s(a)?a=Array.prototype.slice.call(a,0):Array.isArray(a)||a.constructor===Uint8Array||(a=a.toString());for(var c=t.bytesToWords(a),l=8*a.length,o=1732584193,d=-271733879,u=-1732584194,p=271733878,h=0;h<c.length;h++)c[h]=16711935&(c[h]<<8|c[h]>>>24)|4278255360&(c[h]<<24|c[h]>>>8);c[l>>>5]|=128<<l%32,c[14+(l+64>>>9<<4)]=l;var g=e._ff,m=e._gg,f=e._hh,b=e._ii;for(h=0;h<c.length;h+=16){var _=o,j=d,E=u,O=p;o=g(o,d,u,p,c[h+0],7,-680876936),p=g(p,o,d,u,c[h+1],12,-389564586),u=g(u,p,o,d,c[h+2],17,606105819),d=g(d,u,p,o,c[h+3],22,-1044525330),o=g(o,d,u,p,c[h+4],7,-176418897),p=g(p,o,d,u,c[h+5],12,1200080426),u=g(u,p,o,d,c[h+6],17,-1473231341),d=g(d,u,p,o,c[h+7],22,-45705983),o=g(o,d,u,p,c[h+8],7,1770035416),p=g(p,o,d,u,c[h+9],12,-1958414417),u=g(u,p,o,d,c[h+10],17,-42063),d=g(d,u,p,o,c[h+11],22,-1990404162),o=g(o,d,u,p,c[h+12],7,1804603682),p=g(p,o,d,u,c[h+13],12,-40341101),u=g(u,p,o,d,c[h+14],17,-1502002290),o=m(o,d=g(d,u,p,o,c[h+15],22,1236535329),u,p,c[h+1],5,-165796510),p=m(p,o,d,u,c[h+6],9,-1069501632),u=m(u,p,o,d,c[h+11],14,643717713),d=m(d,u,p,o,c[h+0],20,-373897302),o=m(o,d,u,p,c[h+5],5,-701558691),p=m(p,o,d,u,c[h+10],9,38016083),u=m(u,p,o,d,c[h+15],14,-660478335),d=m(d,u,p,o,c[h+4],20,-405537848),o=m(o,d,u,p,c[h+9],5,568446438),p=m(p,o,d,u,c[h+14],9,-1019803690),u=m(u,p,o,d,c[h+3],14,-187363961),d=m(d,u,p,o,c[h+8],20,1163531501),o=m(o,d,u,p,c[h+13],5,-1444681467),p=m(p,o,d,u,c[h+2],9,-51403784),u=m(u,p,o,d,c[h+7],14,1735328473),o=f(o,d=m(d,u,p,o,c[h+12],20,-1926607734),u,p,c[h+5],4,-378558),p=f(p,o,d,u,c[h+8],11,-2022574463),u=f(u,p,o,d,c[h+11],16,1839030562),d=f(d,u,p,o,c[h+14],23,-35309556),o=f(o,d,u,p,c[h+1],4,-1530992060),p=f(p,o,d,u,c[h+4],11,1272893353),u=f(u,p,o,d,c[h+7],16,-155497632),d=f(d,u,p,o,c[h+10],23,-1094730640),o=f(o,d,u,p,c[h+13],4,681279174),p=f(p,o,d,u,c[h+0],11,-358537222),u=f(u,p,o,d,c[h+3],16,-722521979),d=f(d,u,p,o,c[h+6],23,76029189),o=f(o,d,u,p,c[h+9],4,-640364487),p=f(p,o,d,u,c[h+12],11,-421815835),u=f(u,p,o,d,c[h+15],16,530742520),o=b(o,d=f(d,u,p,o,c[h+2],23,-995338651),u,p,c[h+0],6,-198630844),p=b(p,o,d,u,c[h+7],10,1126891415),u=b(u,p,o,d,c[h+14],15,-1416354905),d=b(d,u,p,o,c[h+5],21,-57434055),o=b(o,d,u,p,c[h+12],6,1700485571),p=b(p,o,d,u,c[h+3],10,-1894986606),u=b(u,p,o,d,c[h+10],15,-1051523),d=b(d,u,p,o,c[h+1],21,-2054922799),o=b(o,d,u,p,c[h+8],6,1873313359),p=b(p,o,d,u,c[h+15],10,-30611744),u=b(u,p,o,d,c[h+6],15,-1560198380),d=b(d,u,p,o,c[h+13],21,1309151649),o=b(o,d,u,p,c[h+4],6,-145523070),p=b(p,o,d,u,c[h+11],10,-1120210379),u=b(u,p,o,d,c[h+2],15,718787259),d=b(d,u,p,o,c[h+9],21,-343485551),o=o+_>>>0,d=d+j>>>0,u=u+E>>>0,p=p+O>>>0}return t.endian([o,d,u,p])};r._ff=function(e,t,a,n,s,i,r){var c=e+(t&a|~t&n)+(s>>>0)+r;return(c<<i|c>>>32-i)+t},r._gg=function(e,t,a,n,s,i,r){var c=e+(t&n|a&~n)+(s>>>0)+r;return(c<<i|c>>>32-i)+t},r._hh=function(e,t,a,n,s,i,r){var c=e+(t^a^n)+(s>>>0)+r;return(c<<i|c>>>32-i)+t},r._ii=function(e,t,a,n,s,i,r){var c=e+(a^(t|~n))+(s>>>0)+r;return(c<<i|c>>>32-i)+t},r._blocksize=16,r._digestsize=16,e.exports=function(e,a){if(void 0===e||null===e)throw new Error("Illegal argument "+e);var n=t.wordsToBytes(r(e,a));return a&&a.asBytes?n:a&&a.asString?i.bytesToString(n):t.bytesToHex(n)}}()},657:function(e,t){!function(){var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",a={rotl:function(e,t){return e<<t|e>>>32-t},rotr:function(e,t){return e<<32-t|e>>>t},endian:function(e){if(e.constructor==Number)return 16711935&a.rotl(e,8)|4278255360&a.rotl(e,24);for(var t=0;t<e.length;t++)e[t]=a.endian(e[t]);return e},randomBytes:function(e){for(var t=[];e>0;e--)t.push(Math.floor(256*Math.random()));return t},bytesToWords:function(e){for(var t=[],a=0,n=0;a<e.length;a++,n+=8)t[n>>>5]|=e[a]<<24-n%32;return t},wordsToBytes:function(e){for(var t=[],a=0;a<32*e.length;a+=8)t.push(e[a>>>5]>>>24-a%32&255);return t},bytesToHex:function(e){for(var t=[],a=0;a<e.length;a++)t.push((e[a]>>>4).toString(16)),t.push((15&e[a]).toString(16));return t.join("")},hexToBytes:function(e){for(var t=[],a=0;a<e.length;a+=2)t.push(parseInt(e.substr(a,2),16));return t},bytesToBase64:function(e){for(var a=[],n=0;n<e.length;n+=3)for(var s=e[n]<<16|e[n+1]<<8|e[n+2],i=0;i<4;i++)8*n+6*i<=8*e.length?a.push(t.charAt(s>>>6*(3-i)&63)):a.push("=");return a.join("")},base64ToBytes:function(e){e=e.replace(/[^A-Z0-9+\/]/gi,"");for(var a=[],n=0,s=0;n<e.length;s=++n%4)0!=s&&a.push((t.indexOf(e.charAt(n-1))&Math.pow(2,-2*s+8)-1)<<2*s|t.indexOf(e.charAt(n))>>>6-2*s);return a}};e.exports=a}()},658:function(e,t){function a(e){return!!e.constructor&&"function"===typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}e.exports=function(e){return null!=e&&(a(e)||function(e){return"function"===typeof e.readFloatLE&&"function"===typeof e.slice&&a(e.slice(0,0))}(e)||!!e._isBuffer)}},659:function(e,t,a){"use strict";var n=a(12),s=a(28),i=a(646),r=a(35),c=a(2),l=a.n(c),o=a(64),d=a.n(o),u=a(638),p=a.n(u),h=a(639),g={children:d.a.node,type:d.a.string,size:d.a.oneOfType([d.a.number,d.a.string]),bsSize:d.a.string,valid:d.a.bool,invalid:d.a.bool,tag:h.n,innerRef:d.a.oneOfType([d.a.object,d.a.func,d.a.string]),plaintext:d.a.bool,addon:d.a.bool,className:d.a.string,cssModule:d.a.object},m=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(i.a)(a)),a.focus=a.focus.bind(Object(i.a)(a)),a}Object(r.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.focus=function(){this.ref&&this.ref.focus()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,i=e.type,r=e.bsSize,c=e.valid,o=e.invalid,d=e.tag,u=e.addon,g=e.plaintext,m=e.innerRef,f=Object(s.a)(e,["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"]),b=["radio","checkbox"].indexOf(i)>-1,_=new RegExp("\\D","g"),j=d||("select"===i||"textarea"===i?i:"input"),E="form-control";g?(E+="-plaintext",j=d||"input"):"file"===i?E+="-file":"range"===i?E+="-range":b&&(E=u?null:"form-check-input"),f.size&&_.test(f.size)&&(Object(h.p)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),r=f.size,delete f.size);var O=Object(h.j)(p()(t,o&&"is-invalid",c&&"is-valid",!!r&&"form-control-"+r,E),a);return("input"===j||d&&"function"===typeof d)&&(f.type=i),f.children&&!g&&"select"!==i&&"string"===typeof j&&"select"!==j&&(Object(h.p)('Input with a type of "'+i+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete f.children),l.a.createElement(j,Object(n.a)({},f,{ref:m,className:O,"aria-invalid":o}))},t}(l.a.Component);m.propTypes=g,m.defaultProps={type:"text"},t.a=m},661:function(e,t,a){"use strict";var n=a(12),s=a(28),i=a(646),r=a(35),c=a(2),l=a.n(c),o=a(64),d=a.n(o),u=a(638),p=a.n(u),h=a(639),g={active:d.a.bool,"aria-label":d.a.string,block:d.a.bool,color:d.a.string,disabled:d.a.bool,outline:d.a.bool,tag:h.n,innerRef:d.a.oneOfType([d.a.object,d.a.func,d.a.string]),onClick:d.a.func,size:d.a.string,children:d.a.node,className:d.a.string,cssModule:d.a.object,close:d.a.bool},m=function(e){function t(t){var a;return(a=e.call(this,t)||this).onClick=a.onClick.bind(Object(i.a)(a)),a}Object(r.a)(t,e);var a=t.prototype;return a.onClick=function(e){if(!this.props.disabled)return this.props.onClick?this.props.onClick(e):void 0;e.preventDefault()},a.render=function(){var e=this.props,t=e.active,a=e["aria-label"],i=e.block,r=e.className,c=e.close,o=e.cssModule,d=e.color,u=e.outline,g=e.size,m=e.tag,f=e.innerRef,b=Object(s.a)(e,["active","aria-label","block","className","close","cssModule","color","outline","size","tag","innerRef"]);c&&"undefined"===typeof b.children&&(b.children=l.a.createElement("span",{"aria-hidden":!0},"\xd7"));var _="btn"+(u?"-outline":"")+"-"+d,j=Object(h.j)(p()(r,{close:c},c||"btn",c||_,!!g&&"btn-"+g,!!i&&"btn-block",{active:t,disabled:this.props.disabled}),o);b.href&&"button"===m&&(m="a");var E=c?"Close":null;return l.a.createElement(m,Object(n.a)({type:"button"===m&&b.onClick?"button":void 0},b,{className:j,ref:f,onClick:this.onClick,"aria-label":a||E}))},t}(l.a.Component);m.propTypes=g,m.defaultProps={color:"secondary",tag:"button"},t.a=m},663:function(e,t,a){"use strict";var n=a(12),s=a(28),i=a(2),r=a.n(i),c=a(64),l=a.n(c),o=a(638),d=a.n(o),u=a(639),p=l.a.oneOfType([l.a.number,l.a.string]),h={tag:u.n,noGutters:l.a.bool,className:l.a.string,cssModule:l.a.object,form:l.a.bool,xs:p,sm:p,md:p,lg:p,xl:p},g={tag:"div",widths:["xs","sm","md","lg","xl"]},m=function(e){var t=e.className,a=e.cssModule,i=e.noGutters,c=e.tag,l=e.form,o=e.widths,p=Object(s.a)(e,["className","cssModule","noGutters","tag","form","widths"]),h=[];o.forEach((function(t,a){var n=e[t];if(delete p[t],n){var s=!a;h.push(s?"row-cols-"+n:"row-cols-"+t+"-"+n)}}));var g=Object(u.j)(d()(t,i?"no-gutters":null,l?"form-row":"row",h),a);return r.a.createElement(c,Object(n.a)({},p,{className:g}))};m.propTypes=h,m.defaultProps=g,t.a=m},664:function(e,t,a){"use strict";var n=a(12),s=a(28),i=a(2),r=a.n(i),c=a(64),l=a.n(c),o=a(638),d=a.n(o),u=a(639),p=l.a.oneOfType([l.a.number,l.a.string]),h=l.a.oneOfType([l.a.bool,l.a.number,l.a.string,l.a.shape({size:l.a.oneOfType([l.a.bool,l.a.number,l.a.string]),order:p,offset:p})]),g={tag:u.n,xs:h,sm:h,md:h,lg:h,xl:h,className:l.a.string,cssModule:l.a.object,widths:l.a.array},m={tag:"div",widths:["xs","sm","md","lg","xl"]},f=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},b=function(e){var t=e.className,a=e.cssModule,i=e.widths,c=e.tag,l=Object(s.a)(e,["className","cssModule","widths","tag"]),o=[];i.forEach((function(t,n){var s=e[t];if(delete l[t],s||""===s){var i=!n;if(Object(u.h)(s)){var r,c=i?"-":"-"+t+"-",p=f(i,t,s.size);o.push(Object(u.j)(d()(((r={})[p]=s.size||""===s.size,r["order"+c+s.order]=s.order||0===s.order,r["offset"+c+s.offset]=s.offset||0===s.offset,r)),a))}else{var h=f(i,t,s);o.push(h)}}})),o.length||o.push("col");var p=Object(u.j)(d()(t,o),a);return r.a.createElement(c,Object(n.a)({},l,{className:p}))};b.propTypes=g,b.defaultProps=m,t.a=b},937:function(e,t,a){"use strict";var n=a(12),s=a(28),i=a(2),r=a.n(i),c=a(64),l=a.n(c),o=a(638),d=a.n(o),u=a(639),p={tag:u.n,className:l.a.string,cssModule:l.a.object},h=function(e){var t=e.className,a=e.cssModule,i=e.tag,c=Object(s.a)(e,["className","cssModule","tag"]),l=Object(u.j)(d()(t,"card-footer"),a);return r.a.createElement(i,Object(n.a)({},c,{className:l}))};h.propTypes=p,h.defaultProps={tag:"div"},t.a=h}}]);
//# sourceMappingURL=23.6f9396fa.chunk.js.map