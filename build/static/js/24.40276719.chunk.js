/*! For license information please see 24.40276719.chunk.js.LICENSE.txt */
(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[24],{1221:function(e,t,a){"use strict";a.r(t);var n=a(169),i=a(114),s=a.n(i),r=a(652),c=a(165),o=a(166),l=a(168),d=a(167),u=a(2),p=a(663),h=a(664),g=a(931),f=a(1179),m=a(659),b=a(661),_=a(932),j=a(937),O=a(1236),E=a(1203),x=a(1204),T=a(1205),S=a(648),D=(a(653),a(643)),y=(a(644),a(651)),A=a.n(y),L=(a(656),a(20)),v=new Headers,N=localStorage.getItem("auth");v.append("Authorization","Bearer "+N),v.append("Content-Type","application/json");var I=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).getData=Object(r.a)(s.a.mark((function e(){var t,a,i,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.setState({isLoading:!0}),e.next=3,A()({baseURL:D.a.BASE_URL,url:D.a.LIST_TRANSACTION,method:"POST"});case 3:t=e.sent,a=0;case 5:if(!(a<t.data.data.length)){e.next=13;break}return e.next=8,A()({baseURL:D.a.BASE_URL,url:D.a.LIST_COMPANY,method:"POST",data:{condition:{_id:t.data.data[a].Company_Id}}});case 8:i=e.sent,t.data.data[a].Com_Name=i.data.data[0].Name;case 10:a++,e.next=5;break;case 13:n.pagination(t.data.data),n.setState({dataApi:t.data.data}),r=0,t.data.data.map((function(e){"Actived"==e.Status&&(r+=1)})),n.setState({isLoading:!1,totalActive:r});case 18:case"end":return e.stop()}}),e)}))),n.getOrderDetail=function(){var e=Object(r.a)(s.a.mark((function e(t,a){var i,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A()({baseURL:D.a.BASE_URL,url:D.a.LIST_CHECK_OUT,method:"POST",data:{condition:{isDelete:!1,Transaction_ID:t}}});case 2:return i=e.sent,e.next=5,A()({baseURL:D.a.BASE_URL,url:D.a.LIST_COMPANY,method:"POST",data:{condition:{_id:a}}});case 5:r=e.sent,n.setState({dataOrderDetail:i.data.data,currenCom:r.data.data[0].Name,currenCom_ID:a});case 7:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),n.state={data:[],key:"",keyStatus:"",activePage:1,page:1,itemsCount:0,limit:20,totalActive:0,modalCom:!1,viewingUser:{},communities:[],updated:"",Status:"",dataApi:[],action:"new",modalDelete:!1,delete:null,arrPagination:[],indexPage:0,dataCompany:[],currentCompany:"",currentID:"",currenCom:"",currenCom_ID:"",currentSale_ID:"",curentStatus:"",dataOrderDetail:[],DATA_COMPANY:"",hiddenDetail:!0},n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=Object(r.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(this.getData(),t=JSON.parse(localStorage.getItem("url")),a=0;a<t.length;a++)"#"+t[a].to==window.location.hash&&1==t[a].hidden&&(window.location.href="#/");case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getCompanyData",value:function(){var e=Object(r.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A()({baseURL:D.a.BASE_URL,url:D.a.LIST_COMPANY,method:"POST"});case 2:t=e.sent,this.setState({dataCompany:t.data.data});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"pagination",value:function(e){var t,a,n,i=[];for(t=0,a=e.length;t<a;t+=5)n=e.slice(t,t+5),i.push(n);this.setState({arrPagination:i,data:i[this.state.indexPage]})}},{key:"searchKey",value:function(){var e=this.state,t=e.indexPage,a=e.key,n=e.keyStatus;if(""!=a||""!=n){var i=[];this.state.dataApi.map((function(e){e.Company_Id.toLocaleUpperCase().includes(a.toLocaleUpperCase())&&e.Status.toLocaleUpperCase().includes(n.toLocaleUpperCase())&&i.push(e)}));var s=0;i.map((function(e){"Actived"==e.Status&&(s+=1)})),this.setState({data:i,totalActive:s})}else{var r=0;this.state.dataApi.map((function(e){"Actived"==e.Status&&(r+=1)})),this.setState({data:this.state.arrPagination[t],totalActive:r})}}},{key:"toggleModal",value:function(e){"new"==e&&this.setState({modalCom:!this.state.modalCom,action:e,Name:"",Email:"",Phone:"",Fax:"",Address:"",Website:"",Code:"",Status:"",username:"",password:""})}},{key:"onChange",value:function(e,t){this.setState(Object(n.a)({},e,t))}},{key:"addCompany",value:function(){var e=Object(r.a)(s.a.mark((function e(){var t,a,n,i,r,c,o,l,d,u,p,h,g;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.state,a=t.Email,n=t.Name,i=t.Phone,r=t.Fax,c=t.Address,o=t.Website,l=t.Code,d=t.UserName,u=t.Password,null!=a&&""!=a&&null!=n&&""!=n&&null!=i&&""!=i&&null!=c&&""!=c&&null!=d&&""!=d&&null!=u&&""!=u){e.next=4;break}return alert("Please fill in all the requirements"),e.abrupt("return");case 4:return p={Name:n,Email:a,Phone:i,Fax:r,Address:c,Website:o,Code:l},this.setState({isLoading:!0}),e.next=8,A()({baseURL:D.a.BASE_URL,url:D.a.ADD_COMPANY,method:"PUT",data:p});case 8:if(1!=(h=e.sent).data.is_success){e.next=18;break}return this.getData(),g={Name:n,Email:a,Phone:i,Address:c,Company_Id:h.data.data._id,Role_Id:"60e6a98b39d7243f689a123c",UserName:d,Password:u,Code:h.data.data._id,Status:"Actived"},e.next=14,A()({baseURL:D.a.BASE_URL,url:D.a.ADD_USER,method:"POST",data:g});case 14:console.log(h.data.data),this.setState({modalCom:!this.state.modalCom}),e.next=20;break;case 18:alert(h.data.message),this.setState({isLoading:!1});case 20:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"openUpdate",value:function(e){this.setState({modalCom:!this.state.modalCom,action:"update",id:e._id,Status:e.Status,DATA_COMPANY:e})}},{key:"addTransaction",value:function(){var e=Object(r.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={company_id:this.state.DATA_COMPANY.Company_Id},e.next=3,A()({baseURL:D.a.BASE_URL,url:D.a.ADD_TRANSACTION,method:"POST",data:t});case 3:return 1!=(a=e.sent).data.is_success&&alert("C\xf3 l\u1ed7i x\u1ea3y ra khi th\xeam d\u1eef li\u1ec7u v\xe0o Transaction"),e.abrupt("return",a);case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"updateOrder",value:function(){var e=Object(r.a)(s.a.mark((function e(){var t,a,n,i,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.state,a=t.Status,n=t.DATA_COMPANY,i={Status:a,id:this.state.id},e.next=4,A()({baseURL:D.a.BASE_URL,url:D.a.UPDATE_STATUS_ORDER,method:"POST",data:i});case 4:if(1!=(r=e.sent).data.is_success){e.next=21;break}if("SPENDING"!=n.Status){e.next=19;break}return e.next=9,this.addTransaction();case 9:if(!e.sent.data.is_success){e.next=16;break}this.getData(),this.setState({modalCom:!this.state.modalCom}),this.setState({isLoading:!0}),e.next=19;break;case 16:return e.next=18,A()({baseURL:D.a.BASE_URL,url:D.a.UPDATE_STATUS_ORDER,method:"POST",data:{Status:"SPENDING",id:this.state.id}});case 18:this.setState({isLoading:!1});case 19:e.next=23;break;case 21:alert(r.data.message),this.setState({isLoading:!1});case 23:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getBadge",value:function(e){switch(e){case"ENABLE":return"primary";default:return"success"}}},{key:"toggle",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";this.setState({modal:!this.state.modal,image:"",url:"",isActive:!1,isLoading:!1,errors:{},action:e,position:1,data:[],updated:""})}},{key:"inputChange",value:function(e){this.setState(Object(n.a)({},e.target.name,e.target.value))}},{key:"goSearch",value:function(){this.getUsers()}},{key:"actionSearch",value:function(e,t){var a=this;this.setState(Object(n.a)({},t,e.target.value),(function(){a.searchKey()}))}},{key:"resetSearch",value:function(){var e=this;this.setState({key:"",keyEmail:"",keyPhone:"",keyFax:"",keyAddress:"",keyWebsite:"",keyCode:"",keyCompany:"",keyDateCreate:new Date,keyStatus:""},(function(){e.searchKey()}))}},{key:"render",value:function(){var e=this,t=this.state,a=t.data,n=t.key,i=(t.viewingUser,t.communities,t.action),c=t.arrPagination,o=t.indexPage,l=(t.dataCompany,t.keyAddress,t.keyCode,t.keyCompany,t.keyEmail,t.keyFax,t.keyPhone,t.keyWebsite,t.keyDateCreate,t.keyStatus,t.dataOrderDetail);return this.state.isLoading?Object(L.jsx)("div",{id:"page-loading",children:Object(L.jsxs)("div",{className:"three-balls",children:[Object(L.jsx)("div",{className:"ball ball1"}),Object(L.jsx)("div",{className:"ball ball2"}),Object(L.jsx)("div",{className:"ball ball3"})]})}):Object(L.jsxs)("div",{className:"animated fadeIn",children:[Object(L.jsx)(p.a,{children:Object(L.jsxs)(h.a,{children:[Object(L.jsx)("p",{style:C.success,children:this.state.updated}),Object(L.jsx)("p",{style:C.danger,children:this.state.deleted}),Object(L.jsxs)(g.a,{children:[Object(L.jsxs)(f.a,{children:[Object(L.jsx)("i",{className:"fa fa-align-justify"})," Danh s\xe1ch giao dich (Page: ",this.state.indexPage+1,")",Object(L.jsx)("div",{style:C.tags,children:Object(L.jsx)(S.N,{children:Object(L.jsx)(S.j,{sm:"12",lg:"12",children:Object(L.jsxs)(S.N,{children:[Object(L.jsx)(S.j,{sm:"12",lg:"4",children:Object(L.jsx)("div",{children:Object(L.jsx)(m.a,{style:C.searchInput,onChange:function(t){e.actionSearch(t,"key")},name:"key",value:n,placeholder:"T\u1eeb kh\xf3a"})})}),Object(L.jsx)(S.j,{sm:"12",lg:"4",children:Object(L.jsx)(S.O,{style:C.flexOption,onChange:function(t){e.actionSearch(t,"keyStatus")},custom:!0,children:["ACTIVE","DISABLE"].map((function(e,t){return Object(L.jsx)("option",{value:e,children:e})}))})}),Object(L.jsx)(S.j,{sm:"12",lg:"4",children:Object(L.jsx)(b.a,{color:"primary",style:{width:"100%",marginTop:5},size:"sm",onClick:function(t){e.resetSearch()},children:"L\xe0m m\u1edbi t\xecm ki\u1ebfm"})})]})})})})]}),Object(L.jsx)(_.a,{children:Object(L.jsxs)("table",{ble:!0,className:"table table-hover table-outline mb-0 d-none d-sm-table",children:[Object(L.jsx)("thead",{className:"thead-light",children:Object(L.jsxs)("tr",{children:[Object(L.jsx)("th",{className:"text-center",children:"STT."}),Object(L.jsx)("th",{className:"text-center",children:"M\xe3 c\xf4ng ty"}),Object(L.jsx)("th",{className:"text-center",children:"Ng\xe0y mua"}),Object(L.jsx)("th",{className:"text-center",children:"Ng\xe0y k\xedch ho\u1ea1t"}),Object(L.jsx)("th",{className:"text-center",children:"Ng\xe0y h\u1ebft h\u1ea1n"}),Object(L.jsx)("th",{className:"text-center",children:"Tr\u1ea1ng th\xe1i"}),Object(L.jsx)("th",{className:"text-center",children:"#"})]})}),Object(L.jsx)("tbody",{children:void 0!=a?a.map((function(t,a){return Object(L.jsxs)("tr",{children:[Object(L.jsx)("td",{className:"text-center",children:a+1}),Object(L.jsx)("td",{className:"text-center",children:t.Com_Name}),Object(L.jsx)("td",{className:"text-center",children:new Date(t.Create_At).toLocaleDateString()+" "+new Date(t.Create_At).toLocaleTimeString()}),Object(L.jsx)("td",{className:"text-center",children:new Date(t.Active_Date).toLocaleDateString()+" "+new Date(t.Active_Date).toLocaleTimeString()}),Object(L.jsx)("td",{className:"text-center",children:new Date(t.End_Date).toLocaleDateString()+" "+new Date(t.End_Date).toLocaleTimeString()}),Object(L.jsx)("td",{className:"text-center",children:Object(L.jsx)(S.a,{color:e.getBadge(t.Status),children:t.Status})}),Object(L.jsx)("td",{className:"text-center",children:Object(L.jsx)(b.a,{outline:!0,color:"primary",size:"sm",onClick:function(){var a=Object(r.a)(s.a.mark((function a(n){return s.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.getOrderDetail(t._id,t.Company_Id);case 2:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}(),children:"Chi ti\u1ebft"})})]},a)})):""})]})}),Object(L.jsx)(j.a,{children:1==c.length?"":Object(L.jsx)("div",{style:{float:"right",marginRight:"10px",padding:"10px"},children:Object(L.jsx)("tr",{style:C.row,children:c.map((function(t,a){return Object(L.jsx)("td",{children:Object(L.jsx)(b.a,{style:C.pagination,color:a==o?"primary":"danger",onClick:function(t){e.setState({data:c[a],indexPage:a})},children:a+1})})}))})})})]}),Object(L.jsxs)(g.a,{children:[Object(L.jsxs)(f.a,{children:[Object(L.jsx)("i",{className:"fa fa-align-justify"})," Chi ti\u1ebft giao d\u1ecbch c\u1ee7a ",this.state.currenCom," (M\xe3 c\xf4ng ty: ",this.state.currenCom_ID,") (Page: ",this.state.indexPage+1,")"]}),Object(L.jsx)(_.a,{children:Object(L.jsxs)("table",{ble:!0,className:"table table-hover table-outline mb-0 d-none d-sm-table",children:[Object(L.jsx)("thead",{className:"thead-light",children:Object(L.jsxs)("tr",{children:[Object(L.jsx)("th",{className:"text-center",children:"STT."}),Object(L.jsx)("th",{className:"text-center",children:"M\xe3 giao d\u1ecbch"}),Object(L.jsx)("th",{className:"text-center",children:"M\xe3 ph\u1ea7n c\u1ee9ng"}),Object(L.jsx)("th",{className:"text-center",children:"Ng\xe0y k\xedch ho\u1ea1t"}),Object(L.jsx)("th",{className:"text-center",children:"Ng\xe0y h\u1ebft h\u1ea1n"}),Object(L.jsx)("th",{className:"text-center",children:"Tr\u1ea1ng th\xe1i"})]})}),Object(L.jsx)("tbody",{children:void 0!=l?l.map((function(t,a){return Object(L.jsxs)("tr",{children:[Object(L.jsx)("td",{className:"text-center",children:a+1}),Object(L.jsx)("td",{className:"text-center",children:t.Transaction_ID}),Object(L.jsx)("td",{className:"text-center",children:t.HardWard_ID}),Object(L.jsx)("td",{className:"text-center",children:new Date(t.Active_Date).toLocaleDateString()+" "+new Date(t.Active_Date).toLocaleTimeString()}),Object(L.jsx)("td",{className:"text-center",children:new Date(t.End_Date).toLocaleDateString()+" "+new Date(t.End_Date).toLocaleTimeString()}),Object(L.jsx)("td",{className:"text-center",children:Object(L.jsx)(S.a,{color:e.getBadge(t.Status),children:t.Status})})]},a)})):""})]})})]})]})}),Object(L.jsxs)(O.a,{isOpen:this.state.modalCom,className:this.props.className,children:[Object(L.jsx)(E.a,{children:"new"==this.state.action?"Create":"Update"}),Object(L.jsx)(x.a,{children:"new"==i?"":Object(L.jsxs)("div",{children:[Object(L.jsx)("label",{style:C.flexLabel,htmlFor:"tag",children:"Status    "}),Object(L.jsxs)("select",{style:C.flexOption,name:"Status",onChange:function(t){return e.onChange("Status",t.target.value)},children:[Object(L.jsx)("option",{value:this.state.Status,children:""==this.state.Status?" - - - - - - - - - - ":this.state.Status}),["SPENDING","COMPLETE"].map((function(e,t){return Object(L.jsx)("option",{value:e,children:e})}))]})]})}),Object(L.jsxs)(T.a,{children:[Object(L.jsx)(b.a,{color:"primary",onClick:function(t){"new"===e.state.action?e.addCompany():e.updateOrder()},disabled:this.state.isLoading,children:"Save"})," ",Object(L.jsx)(b.a,{color:"secondary",onClick:function(t){return e.toggleModal("new")},children:"Cancel"})]})]}),Object(L.jsxs)(O.a,{isOpen:this.state.modalDelete,toggle:function(t){return e.setState({modalDelete:!e.state.modalDelete,delete:null})},className:this.props.className,children:[Object(L.jsx)(E.a,{toggle:function(t){return e.setState({modalDelete:!e.state.modalDelete,delete:null})},children:"Delete"}),Object(L.jsx)(x.a,{children:Object(L.jsx)("label",{htmlFor:"tag",children:'Do you want to delete user "'.concat(this.state.delete?this.state.delete.Email:"",'" ?')})}),Object(L.jsxs)(T.a,{children:[Object(L.jsx)(b.a,{color:"primary",onClick:function(t){return e.delete()},disabled:this.state.isLoading,children:"Delete"})," ",Object(L.jsx)(b.a,{color:"secondary",onClick:function(t){return e.setState({modalDelete:!e.state.modalDelete,delete:null})},children:"Cancel"})]})]})]})}}]),a}(u.Component),C=Object(n.a)({pagination:{marginRight:"5px"},flexLabel:{width:100},flexOption:{width:160,margin:"1px"},a:{textDecoration:"none"},floatRight:{float:"right",marginTop:"3px"},spinner:{width:"30px"},center:{textAlign:"center"},tbody:{height:"380px",overflowY:"auto"},wh12:{width:"8%",float:"left",height:"80px"},wh15:{width:"15%",float:"left",height:"80px"},w5:{width:"12%",float:"left",height:"80px"},wa10:{width:"5%",float:"left",height:"80px"},row:{float:"left",width:"100%"},success:{color:"green"},danger:{color:"red"},mgl5:{marginLeft:"5px"},tags:{float:"right",marginRight:"5px"},searchInput:{width:"160px",display:"inline-block",margin:"1px"},userActive:{color:"green"},userPending:{color:"red"},nagemonNameCol:{width:"328px"},image:{width:"100px",height:"100px",borderRadius:"99999px"}},"mgl5",{marginBottom:"5px"});t.default=I},643:function(e,t,a){"use strict";t.a={BASE_URL:"https://api-soida.applamdep.com",LIST_USER:"/api/list-user",LIST_USER_WITH_ID:"/api/list-user?id=",ADD_USER:"/api/add-user",UPDATE_USER:"/api/update-user",DELETE_USER:"/api/delete-user",LOGIN_ADMIN:"/api/login_admin",GET_SHOP:"/api/get-shop",GET_SALE:"/api/get-sale",GET_COEFFICIENT:"/api/calculator-coefficient-user",GET_COEFFICIENT_PER_SALE:"/api/calculator-coefficient-user-per-sale",GET_USER_SALE_BY_MONTH:"/api/get-user-of-sale-by-month",CALCULATOR_ALL_USER_OF_COMPANY:"/api/calculator-all-user-company",CALCULATOR_ALL_USER_OF_SALE:"/api/calculator-all-user-of-sale",GET_SEEDER:"/api/get-seed",GET_SALE_NAME:"/api/get-name-sale",GET_USER_BY_ID:"/api/get-user-byID",LIST_CUSTOMER:"/api/list-customer",LIST_CUSTOMER_BY_MONTH:"/api/get-user-sale-by-month",LIST_TYPEKEY:"/api/list-typekey",LIST_TYPEKEY_WITH_ID:"/api/list-typekey?id=",ADD_TYPEKEY:"/api/add-typekey",UPDATE_TYPEKEY:"/api/update-typekey",DELETE_TYPEKEY:"/api/delete-typekey",LIST_HARDWARE:"/api/list-hardware",LIST_HARDWARE_WITH_ID:"/api/list-hardware?id=",ADD_HARDWARE:"/api/add-hardware",UPDATE_HARDWARE:"/api/update-hardware",DELETE_HARDWARE:"/api/delete-hardware",LIST_ORDER:"/api/list-order",LIST_ORDER_BY_SALE:"/api/plugin-list-order-by-saleid",ADD_ORDER:"/api/add-order",UPDATE_STATUS_ORDER:"/api/update-status-order",CHECK_OUT:"/api/checkout-order",LIST_TRANSACTION:"/api/list-transaction",ADD_TRANSACTION:"/api/add-transaction",LIST_CHECK_OUT:"/api/list-checkout",LIST_HARDWARE_CHECKOUT:"/api/get-list-hardward-by-check-out",UPDATE_STATUS_CHECKOUT:"/api/update-status-hardware",LIST_ORDER_DETAIL:"/api/list-orderdetail",ADD_ORDER_DETAIL:"/api/add-orderdetail",LIST_ROLE:"/api/list-role",LIST_ROLE_WITH_ID:"/api/list-role?id=",ADD_ROLE:"/api/add-role",UPDATE_ROLE:"/api/update-role",DELETE_ROLE:"/api/delete-role",LIST_PACKAGE:"/api/list-package",ADD_PACKAGE:"/api/add-package",UPDATE_PACKAGE:"/api/update-package",DELETE_PACKAGE:"/api/delete-package",PLUGIN_DATA_PACKAGE:"/api/get-name-package",LIST_SALELOG:"/api/list-salelog",LIST_SALELOG_WITH_ID:"/api/list-salelog?id=",ADD_SALELOG:"/api/add-salelog",UPDATE_SALELOG:"/api/update-salelog",DELETE_SALELOG:"/api/delete-salelog",DATA_SALE:"/api/get-data-sale",LIST_SALE:"/api/list-sale",LIST_SALE_WITH_ID:"/api/list-sale?id=",ADD_SALE:"/api/add-sale",UPDATE_SALE:"/api/update-sale",DELETE_SALE:"/api/delete-sale",LIST_KEYORDER:"/api/list-keyorder",LIST_KEYORDER_WITH_ID:"/api/list-keyorder?id=",ADD_KEYORDER:"/api/add-keyorder",UPDATE_KEYORDER:"/api/update-keyorder",DELETE_KEYORDER:"/api/delete-keyorder",LIST_KEY:"/api/list-key",LIST_KEY_WITH_ID:"/api/list-key?id=",ADD_KEY:"/api/add-key",UPDATE_KEY:"/api/update-key",DELETE_KEY:"/api/delete-key",PLUGIN_LIST_COMPANY:"/api/plugin-list-company",PLUGIN_LIST_COMPANY_BY_ID:"/api/plugin-list-company-by-id",PLUGIN_LIST_COMPANY_WITH_ID:"/api/plugin-list-company?id=",PLUGIN_ADD_COMPANY:"/api/plugin-add-company",PLUGIN_UPDATE_COMPANY:"/api/plugin-update-company",PLUGIN_DELETE_COMPANY:"/api/plugin-delete-company",PLUGIN_DATA_COMPANY:"/api/plugin-get-data-company",LIST_COMPANY:"/api/list-company",LIST_COMPANY_WITH_ID:"/api/list-company?id=",ADD_COMPANY:"/api/add-company",UPDATE_COMPANY:"/api/update-company",DELETE_COMPANY:"/api/delete-company",DATA_COMPANY:"/api/get-data-company",LIST_LINK:"/api/list-link",LIST_LINK_WITH_ID:"/api/list-link?id=",ADD_LINK:"/api/add-link",UPDATE_LINK:"/api/update-link",DELETE_LINK:"/api/delete-link","GET-LINK-BY-ID":"/api/link-by-id",LIST_FEATURE:"/api/list-feature",ADD_FEATURE:"/api/add-feature",UPDATE_FEATURE:"/api/update-feature",DELETE_FEATURE:"/api/delete-feature",DATA_CHOOSE_FEATURE:"/api/get-feature-choose",LIST_PLUGIN_ORDER:"/api/plugin-list-order",LIST_PLUGIN_ORDER_BY_ID:"/api/plugin-list-order-by-id",ADD_PLUGIN_ORDER:"/api/plugin-add-order",UPDATE_PLUGIN_ORDER:"/api/plugin-update-order",DELETE_PLUGIN_ORDER:"/api/plugin-delete-order",UPDATE_SLUG:"/api/plugin-update-slug",PLUGIN_LIST_USER:"/api/plugin-list-user",PLUGIN_ADD_USER:"/api/plugin-add-user",PLUGIN_ADD_SALE:"/api/plugin-add-sale",PLUGIN_UPDATE_USER:"/api/plugin-update-user",PLUGIN_DELETE_USER:"/api/plugin-delete-user",PLUGIN_RESET_PASSWORD:"/api/plugin-reset-password",PLUGIN_UPDATE_PASSWORD:"/api/plugin-update-password",PLUGIN_UPDATE_STATUS:"/api/plugin-update-status",PLUGIN_LOGIN_ADMIN:"/api/plugin-login_admin",PLUGIN_GET_USER_BYID:"/api/plugin-get-user-byID",PLUGIN_GET_USER_BY_BODY:"/api/plugin-get-user-byID-with-body",PLUGIN_LIST_ROLE:"/api/plugin-list-role",PLUGIN_ADD_ROLE:"/api/plugin-add-role",PLUGIN_UPDATE_ROLE:"/api/plugin-update-role",PLUGIN_DELETE_ROLE:"/api/plugin-delete-role"}},644:function(e,t,a){"use strict";a(2);var n=a(638),i=a.n(n),s=a(20),r=function(e){var t=e.field,a=e.value,n=e.label,r=e.error,c=e.type,o=e.onChange,l=e.checkUserExists,d=e.readOnly,u=e.placeholder;return Object(s.jsxs)("div",{className:i()("form-group",{"has-error":r}),children:[Object(s.jsx)("label",{className:"control-label",children:n}),Object(s.jsx)("input",{onChange:o,onBlur:l,value:a,type:c,name:t,placeholder:u,readOnly:d,className:"form-control"}),r&&Object(s.jsx)("span",{className:"help-block",children:r})]})};r.defaultProps={type:"text"},t.a=r},650:function(e,t){var a={utf8:{stringToBytes:function(e){return a.bin.stringToBytes(unescape(encodeURIComponent(e)))},bytesToString:function(e){return decodeURIComponent(escape(a.bin.bytesToString(e)))}},bin:{stringToBytes:function(e){for(var t=[],a=0;a<e.length;a++)t.push(255&e.charCodeAt(a));return t},bytesToString:function(e){for(var t=[],a=0;a<e.length;a++)t.push(String.fromCharCode(e[a]));return t.join("")}}};e.exports=a},656:function(e,t,a){!function(){var t=a(657),n=a(650).utf8,i=a(658),s=a(650).bin,r=function e(a,r){a.constructor==String?a=r&&"binary"===r.encoding?s.stringToBytes(a):n.stringToBytes(a):i(a)?a=Array.prototype.slice.call(a,0):Array.isArray(a)||a.constructor===Uint8Array||(a=a.toString());for(var c=t.bytesToWords(a),o=8*a.length,l=1732584193,d=-271733879,u=-1732584194,p=271733878,h=0;h<c.length;h++)c[h]=16711935&(c[h]<<8|c[h]>>>24)|4278255360&(c[h]<<24|c[h]>>>8);c[o>>>5]|=128<<o%32,c[14+(o+64>>>9<<4)]=o;var g=e._ff,f=e._gg,m=e._hh,b=e._ii;for(h=0;h<c.length;h+=16){var _=l,j=d,O=u,E=p;l=g(l,d,u,p,c[h+0],7,-680876936),p=g(p,l,d,u,c[h+1],12,-389564586),u=g(u,p,l,d,c[h+2],17,606105819),d=g(d,u,p,l,c[h+3],22,-1044525330),l=g(l,d,u,p,c[h+4],7,-176418897),p=g(p,l,d,u,c[h+5],12,1200080426),u=g(u,p,l,d,c[h+6],17,-1473231341),d=g(d,u,p,l,c[h+7],22,-45705983),l=g(l,d,u,p,c[h+8],7,1770035416),p=g(p,l,d,u,c[h+9],12,-1958414417),u=g(u,p,l,d,c[h+10],17,-42063),d=g(d,u,p,l,c[h+11],22,-1990404162),l=g(l,d,u,p,c[h+12],7,1804603682),p=g(p,l,d,u,c[h+13],12,-40341101),u=g(u,p,l,d,c[h+14],17,-1502002290),l=f(l,d=g(d,u,p,l,c[h+15],22,1236535329),u,p,c[h+1],5,-165796510),p=f(p,l,d,u,c[h+6],9,-1069501632),u=f(u,p,l,d,c[h+11],14,643717713),d=f(d,u,p,l,c[h+0],20,-373897302),l=f(l,d,u,p,c[h+5],5,-701558691),p=f(p,l,d,u,c[h+10],9,38016083),u=f(u,p,l,d,c[h+15],14,-660478335),d=f(d,u,p,l,c[h+4],20,-405537848),l=f(l,d,u,p,c[h+9],5,568446438),p=f(p,l,d,u,c[h+14],9,-1019803690),u=f(u,p,l,d,c[h+3],14,-187363961),d=f(d,u,p,l,c[h+8],20,1163531501),l=f(l,d,u,p,c[h+13],5,-1444681467),p=f(p,l,d,u,c[h+2],9,-51403784),u=f(u,p,l,d,c[h+7],14,1735328473),l=m(l,d=f(d,u,p,l,c[h+12],20,-1926607734),u,p,c[h+5],4,-378558),p=m(p,l,d,u,c[h+8],11,-2022574463),u=m(u,p,l,d,c[h+11],16,1839030562),d=m(d,u,p,l,c[h+14],23,-35309556),l=m(l,d,u,p,c[h+1],4,-1530992060),p=m(p,l,d,u,c[h+4],11,1272893353),u=m(u,p,l,d,c[h+7],16,-155497632),d=m(d,u,p,l,c[h+10],23,-1094730640),l=m(l,d,u,p,c[h+13],4,681279174),p=m(p,l,d,u,c[h+0],11,-358537222),u=m(u,p,l,d,c[h+3],16,-722521979),d=m(d,u,p,l,c[h+6],23,76029189),l=m(l,d,u,p,c[h+9],4,-640364487),p=m(p,l,d,u,c[h+12],11,-421815835),u=m(u,p,l,d,c[h+15],16,530742520),l=b(l,d=m(d,u,p,l,c[h+2],23,-995338651),u,p,c[h+0],6,-198630844),p=b(p,l,d,u,c[h+7],10,1126891415),u=b(u,p,l,d,c[h+14],15,-1416354905),d=b(d,u,p,l,c[h+5],21,-57434055),l=b(l,d,u,p,c[h+12],6,1700485571),p=b(p,l,d,u,c[h+3],10,-1894986606),u=b(u,p,l,d,c[h+10],15,-1051523),d=b(d,u,p,l,c[h+1],21,-2054922799),l=b(l,d,u,p,c[h+8],6,1873313359),p=b(p,l,d,u,c[h+15],10,-30611744),u=b(u,p,l,d,c[h+6],15,-1560198380),d=b(d,u,p,l,c[h+13],21,1309151649),l=b(l,d,u,p,c[h+4],6,-145523070),p=b(p,l,d,u,c[h+11],10,-1120210379),u=b(u,p,l,d,c[h+2],15,718787259),d=b(d,u,p,l,c[h+9],21,-343485551),l=l+_>>>0,d=d+j>>>0,u=u+O>>>0,p=p+E>>>0}return t.endian([l,d,u,p])};r._ff=function(e,t,a,n,i,s,r){var c=e+(t&a|~t&n)+(i>>>0)+r;return(c<<s|c>>>32-s)+t},r._gg=function(e,t,a,n,i,s,r){var c=e+(t&n|a&~n)+(i>>>0)+r;return(c<<s|c>>>32-s)+t},r._hh=function(e,t,a,n,i,s,r){var c=e+(t^a^n)+(i>>>0)+r;return(c<<s|c>>>32-s)+t},r._ii=function(e,t,a,n,i,s,r){var c=e+(a^(t|~n))+(i>>>0)+r;return(c<<s|c>>>32-s)+t},r._blocksize=16,r._digestsize=16,e.exports=function(e,a){if(void 0===e||null===e)throw new Error("Illegal argument "+e);var n=t.wordsToBytes(r(e,a));return a&&a.asBytes?n:a&&a.asString?s.bytesToString(n):t.bytesToHex(n)}}()},657:function(e,t){!function(){var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",a={rotl:function(e,t){return e<<t|e>>>32-t},rotr:function(e,t){return e<<32-t|e>>>t},endian:function(e){if(e.constructor==Number)return 16711935&a.rotl(e,8)|4278255360&a.rotl(e,24);for(var t=0;t<e.length;t++)e[t]=a.endian(e[t]);return e},randomBytes:function(e){for(var t=[];e>0;e--)t.push(Math.floor(256*Math.random()));return t},bytesToWords:function(e){for(var t=[],a=0,n=0;a<e.length;a++,n+=8)t[n>>>5]|=e[a]<<24-n%32;return t},wordsToBytes:function(e){for(var t=[],a=0;a<32*e.length;a+=8)t.push(e[a>>>5]>>>24-a%32&255);return t},bytesToHex:function(e){for(var t=[],a=0;a<e.length;a++)t.push((e[a]>>>4).toString(16)),t.push((15&e[a]).toString(16));return t.join("")},hexToBytes:function(e){for(var t=[],a=0;a<e.length;a+=2)t.push(parseInt(e.substr(a,2),16));return t},bytesToBase64:function(e){for(var a=[],n=0;n<e.length;n+=3)for(var i=e[n]<<16|e[n+1]<<8|e[n+2],s=0;s<4;s++)8*n+6*s<=8*e.length?a.push(t.charAt(i>>>6*(3-s)&63)):a.push("=");return a.join("")},base64ToBytes:function(e){e=e.replace(/[^A-Z0-9+\/]/gi,"");for(var a=[],n=0,i=0;n<e.length;i=++n%4)0!=i&&a.push((t.indexOf(e.charAt(n-1))&Math.pow(2,-2*i+8)-1)<<2*i|t.indexOf(e.charAt(n))>>>6-2*i);return a}};e.exports=a}()},658:function(e,t){function a(e){return!!e.constructor&&"function"===typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}e.exports=function(e){return null!=e&&(a(e)||function(e){return"function"===typeof e.readFloatLE&&"function"===typeof e.slice&&a(e.slice(0,0))}(e)||!!e._isBuffer)}},659:function(e,t,a){"use strict";var n=a(12),i=a(28),s=a(646),r=a(35),c=a(2),o=a.n(c),l=a(64),d=a.n(l),u=a(638),p=a.n(u),h=a(639),g={children:d.a.node,type:d.a.string,size:d.a.oneOfType([d.a.number,d.a.string]),bsSize:d.a.string,valid:d.a.bool,invalid:d.a.bool,tag:h.n,innerRef:d.a.oneOfType([d.a.object,d.a.func,d.a.string]),plaintext:d.a.bool,addon:d.a.bool,className:d.a.string,cssModule:d.a.object},f=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(s.a)(a)),a.focus=a.focus.bind(Object(s.a)(a)),a}Object(r.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.focus=function(){this.ref&&this.ref.focus()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,s=e.type,r=e.bsSize,c=e.valid,l=e.invalid,d=e.tag,u=e.addon,g=e.plaintext,f=e.innerRef,m=Object(i.a)(e,["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"]),b=["radio","checkbox"].indexOf(s)>-1,_=new RegExp("\\D","g"),j=d||("select"===s||"textarea"===s?s:"input"),O="form-control";g?(O+="-plaintext",j=d||"input"):"file"===s?O+="-file":"range"===s?O+="-range":b&&(O=u?null:"form-check-input"),m.size&&_.test(m.size)&&(Object(h.p)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),r=m.size,delete m.size);var E=Object(h.j)(p()(t,l&&"is-invalid",c&&"is-valid",!!r&&"form-control-"+r,O),a);return("input"===j||d&&"function"===typeof d)&&(m.type=s),m.children&&!g&&"select"!==s&&"string"===typeof j&&"select"!==j&&(Object(h.p)('Input with a type of "'+s+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete m.children),o.a.createElement(j,Object(n.a)({},m,{ref:f,className:E,"aria-invalid":l}))},t}(o.a.Component);f.propTypes=g,f.defaultProps={type:"text"},t.a=f},661:function(e,t,a){"use strict";var n=a(12),i=a(28),s=a(646),r=a(35),c=a(2),o=a.n(c),l=a(64),d=a.n(l),u=a(638),p=a.n(u),h=a(639),g={active:d.a.bool,"aria-label":d.a.string,block:d.a.bool,color:d.a.string,disabled:d.a.bool,outline:d.a.bool,tag:h.n,innerRef:d.a.oneOfType([d.a.object,d.a.func,d.a.string]),onClick:d.a.func,size:d.a.string,children:d.a.node,className:d.a.string,cssModule:d.a.object,close:d.a.bool},f=function(e){function t(t){var a;return(a=e.call(this,t)||this).onClick=a.onClick.bind(Object(s.a)(a)),a}Object(r.a)(t,e);var a=t.prototype;return a.onClick=function(e){if(!this.props.disabled)return this.props.onClick?this.props.onClick(e):void 0;e.preventDefault()},a.render=function(){var e=this.props,t=e.active,a=e["aria-label"],s=e.block,r=e.className,c=e.close,l=e.cssModule,d=e.color,u=e.outline,g=e.size,f=e.tag,m=e.innerRef,b=Object(i.a)(e,["active","aria-label","block","className","close","cssModule","color","outline","size","tag","innerRef"]);c&&"undefined"===typeof b.children&&(b.children=o.a.createElement("span",{"aria-hidden":!0},"\xd7"));var _="btn"+(u?"-outline":"")+"-"+d,j=Object(h.j)(p()(r,{close:c},c||"btn",c||_,!!g&&"btn-"+g,!!s&&"btn-block",{active:t,disabled:this.props.disabled}),l);b.href&&"button"===f&&(f="a");var O=c?"Close":null;return o.a.createElement(f,Object(n.a)({type:"button"===f&&b.onClick?"button":void 0},b,{className:j,ref:m,onClick:this.onClick,"aria-label":a||O}))},t}(o.a.Component);f.propTypes=g,f.defaultProps={color:"secondary",tag:"button"},t.a=f},663:function(e,t,a){"use strict";var n=a(12),i=a(28),s=a(2),r=a.n(s),c=a(64),o=a.n(c),l=a(638),d=a.n(l),u=a(639),p=o.a.oneOfType([o.a.number,o.a.string]),h={tag:u.n,noGutters:o.a.bool,className:o.a.string,cssModule:o.a.object,form:o.a.bool,xs:p,sm:p,md:p,lg:p,xl:p},g={tag:"div",widths:["xs","sm","md","lg","xl"]},f=function(e){var t=e.className,a=e.cssModule,s=e.noGutters,c=e.tag,o=e.form,l=e.widths,p=Object(i.a)(e,["className","cssModule","noGutters","tag","form","widths"]),h=[];l.forEach((function(t,a){var n=e[t];if(delete p[t],n){var i=!a;h.push(i?"row-cols-"+n:"row-cols-"+t+"-"+n)}}));var g=Object(u.j)(d()(t,s?"no-gutters":null,o?"form-row":"row",h),a);return r.a.createElement(c,Object(n.a)({},p,{className:g}))};f.propTypes=h,f.defaultProps=g,t.a=f},664:function(e,t,a){"use strict";var n=a(12),i=a(28),s=a(2),r=a.n(s),c=a(64),o=a.n(c),l=a(638),d=a.n(l),u=a(639),p=o.a.oneOfType([o.a.number,o.a.string]),h=o.a.oneOfType([o.a.bool,o.a.number,o.a.string,o.a.shape({size:o.a.oneOfType([o.a.bool,o.a.number,o.a.string]),order:p,offset:p})]),g={tag:u.n,xs:h,sm:h,md:h,lg:h,xl:h,className:o.a.string,cssModule:o.a.object,widths:o.a.array},f={tag:"div",widths:["xs","sm","md","lg","xl"]},m=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},b=function(e){var t=e.className,a=e.cssModule,s=e.widths,c=e.tag,o=Object(i.a)(e,["className","cssModule","widths","tag"]),l=[];s.forEach((function(t,n){var i=e[t];if(delete o[t],i||""===i){var s=!n;if(Object(u.h)(i)){var r,c=s?"-":"-"+t+"-",p=m(s,t,i.size);l.push(Object(u.j)(d()(((r={})[p]=i.size||""===i.size,r["order"+c+i.order]=i.order||0===i.order,r["offset"+c+i.offset]=i.offset||0===i.offset,r)),a))}else{var h=m(s,t,i);l.push(h)}}})),l.length||l.push("col");var p=Object(u.j)(d()(t,l),a);return r.a.createElement(c,Object(n.a)({},o,{className:p}))};b.propTypes=g,b.defaultProps=f,t.a=b},937:function(e,t,a){"use strict";var n=a(12),i=a(28),s=a(2),r=a.n(s),c=a(64),o=a.n(c),l=a(638),d=a.n(l),u=a(639),p={tag:u.n,className:o.a.string,cssModule:o.a.object},h=function(e){var t=e.className,a=e.cssModule,s=e.tag,c=Object(i.a)(e,["className","cssModule","tag"]),o=Object(u.j)(d()(t,"card-footer"),a);return r.a.createElement(s,Object(n.a)({},c,{className:o}))};h.propTypes=p,h.defaultProps={tag:"div"},t.a=h}}]);
//# sourceMappingURL=24.40276719.chunk.js.map