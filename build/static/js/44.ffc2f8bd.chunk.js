(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[44],{1264:function(e,t,a){"use strict";a.r(t);var s=a(165),i=a(114),n=a.n(i),r=a(652),c=a(167),l=a(168),o=a(170),d=a(169),p=a(2),u=a(666),h=a(667),_=a(668),O=a(669),E=a(672),b=a(700),m=a(670),j=a(905),T=a(1294),S=a(1234),g=a(1235),D=a(1236),f=a(655),A=(a(663),a(644)),L=a(659),x=a.n(L),N=a(17),R=new Headers,y=localStorage.getItem("auth");R.append("Authorization","Bearer "+y),R.append("Content-Type","application/json");var I=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(e){var s;return Object(c.a)(this,a),(s=t.call(this,e)).getData=Object(r.a)(n.a.mark((function e(){var t,a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s.setState({isLoading:!0}),e.next=3,x()({baseURL:A.a.BASE_URL,url:A.a.LIST_ORDER,method:"POST"});case 3:t=e.sent,s.pagination(t.data.data),s.setState({dataApi:t.data.data}),a=0,t.data.data.map((function(e){"Actived"==e.Status&&(a+=1)})),s.setState({isLoading:!1,totalActive:a});case 9:case"end":return e.stop()}}),e)}))),s.getOrderDetail=function(){var e=Object(r.a)(n.a.mark((function e(t,a,i){var r,c,l;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x()({baseURL:A.a.BASE_URL,url:A.a.LIST_ORDER_DETAIL,method:"POST",data:{company_id:t}});case 2:return r=e.sent,e.next=5,x()({baseURL:A.a.BASE_URL,url:A.a.LIST_COMPANY,method:"POST",data:{condition:{_id:t}}});case 5:return c=e.sent,e.next=8,x()({baseURL:A.a.BASE_URL,url:A.a.GET_SALE_NAME,method:"POST",data:{sale_id:a}});case 8:l=e.sent,s.setState({dataApi:r.data.data,dataOrderDetail:r.data.data,hiddenDetail:!1,currentID:t,currentCom_ID:c.data.data[0].Name,currentSale_ID:l.data.data[0].Name,curentStatus:i});case 10:case"end":return e.stop()}}),e)})));return function(t,a,s){return e.apply(this,arguments)}}(),s.state={data:[],key:"",keyStatus:"",activePage:1,page:1,itemsCount:0,limit:20,totalActive:0,modalCom:!1,viewingUser:{},communities:[],updated:"",Status:"",dataApi:[],action:"new",modalDelete:!1,delete:null,arrPagination:[],indexPage:0,dataCompany:[],currentCompany:"",currentID:"",currentCom_ID:"",currentSale_ID:"",curentStatus:"",dataOrderDetail:[],DATA_COMPANY:"",hiddenDetail:!0},s}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=Object(r.a)(n.a.mark((function e(){var t,a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(this.getData(),t=JSON.parse(localStorage.getItem("url")),a=0;a<t.length;a++)"#"+t[a].to==window.location.hash&&1==t[a].hidden&&(window.location.href="#/");case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getCompanyData",value:function(){var e=Object(r.a)(n.a.mark((function e(){var t;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x()({baseURL:A.a.BASE_URL,url:A.a.LIST_COMPANY,method:"POST"});case 2:t=e.sent,this.setState({dataCompany:t.data.data});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"pagination",value:function(e){var t,a,s,i=[];for(t=0,a=e.length;t<a;t+=5)s=e.slice(t,t+5),i.push(s);this.setState({arrPagination:i,data:i[this.state.indexPage]})}},{key:"searchKey",value:function(){var e=this.state,t=e.indexPage,a=e.key,s=e.keyStatus;if(""!=a||""!=s){var i=[];this.state.dataApi.map((function(e){e.Company_Id.toLocaleUpperCase().includes(a.toLocaleUpperCase())&&e.Status.toLocaleUpperCase().includes(s.toLocaleUpperCase())&&i.push(e)}));var n=0;i.map((function(e){"Actived"==e.Status&&(n+=1)})),this.setState({data:i,totalActive:n})}else{var r=0;this.state.dataApi.map((function(e){"Actived"==e.Status&&(r+=1)})),this.setState({data:this.state.arrPagination[t],totalActive:r})}}},{key:"toggleModal",value:function(e){"new"==e&&this.setState({modalCom:!this.state.modalCom,action:e,Name:"",Email:"",Phone:"",Fax:"",Address:"",Website:"",Code:"",Status:"",username:"",password:""})}},{key:"onChange",value:function(e,t){this.setState(Object(s.a)({},e,t))}},{key:"addCompany",value:function(){var e=Object(r.a)(n.a.mark((function e(){var t,a,s,i,r,c,l,o,d,p,u,h,_;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.state,a=t.Email,s=t.Name,i=t.Phone,r=t.Fax,c=t.Address,l=t.Website,o=t.Code,d=t.UserName,p=t.Password,null!=a&&""!=a&&null!=s&&""!=s&&null!=i&&""!=i&&null!=c&&""!=c&&null!=d&&""!=d&&null!=p&&""!=p){e.next=4;break}return alert("Please fill in all the requirements"),e.abrupt("return");case 4:return u={Name:s,Email:a,Phone:i,Fax:r,Address:c,Website:l,Code:o},this.setState({isLoading:!0}),e.next=8,x()({baseURL:A.a.BASE_URL,url:A.a.ADD_COMPANY,method:"PUT",data:u});case 8:if(1!=(h=e.sent).data.is_success){e.next=18;break}return this.getData(),_={Name:s,Email:a,Phone:i,Address:c,Company_Id:h.data.data._id,Role_Id:"60e6a98b39d7243f689a123c",UserName:d,Password:p,Code:h.data.data._id,Status:"Actived"},e.next=14,x()({baseURL:A.a.BASE_URL,url:A.a.ADD_USER,method:"POST",data:_});case 14:console.log(h.data.data),this.setState({modalCom:!this.state.modalCom}),e.next=20;break;case 18:alert(h.data.message),this.setState({isLoading:!1});case 20:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"openUpdate",value:function(e){this.setState({modalCom:!this.state.modalCom,action:"update",id:e._id,Status:e.Status,DATA_COMPANY:e})}},{key:"addTransaction",value:function(){var e=Object(r.a)(n.a.mark((function e(){var t,a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={company_id:this.state.DATA_COMPANY.Company_Id},e.next=3,x()({baseURL:A.a.BASE_URL,url:A.a.ADD_TRANSACTION,method:"POST",data:t});case 3:return 1!=(a=e.sent).data.is_success&&alert("C\xf3 l\u1ed7i x\u1ea3y ra khi th\xeam d\u1eef li\u1ec7u v\xe0o Transaction"),e.abrupt("return",a);case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"updateOrder",value:function(){var e=Object(r.a)(n.a.mark((function e(){var t,a,s,i,r;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.state,a=t.Status,s=t.DATA_COMPANY,i={Status:a,id:this.state.id},e.next=4,x()({baseURL:A.a.BASE_URL,url:A.a.UPDATE_STATUS_ORDER,method:"POST",data:i});case 4:if(1!=(r=e.sent).data.is_success){e.next=21;break}if("SPENDING"!=s.Status){e.next=19;break}return e.next=9,this.addTransaction();case 9:if(!e.sent.data.is_success){e.next=16;break}this.getData(),this.setState({modalCom:!this.state.modalCom}),this.setState({isLoading:!0}),e.next=19;break;case 16:return e.next=18,x()({baseURL:A.a.BASE_URL,url:A.a.UPDATE_STATUS_ORDER,method:"POST",data:{Status:"SPENDING",id:this.state.id}});case 18:this.setState({isLoading:!1});case 19:e.next=23;break;case 21:alert(r.data.message),this.setState({isLoading:!1});case 23:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getBadge",value:function(e){switch(e){case"SPENDING":return"success";default:return"primary"}}},{key:"toggle",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";this.setState({modal:!this.state.modal,image:"",url:"",isActive:!1,isLoading:!1,errors:{},action:e,position:1,data:[],updated:""})}},{key:"inputChange",value:function(e){this.setState(Object(s.a)({},e.target.name,e.target.value))}},{key:"goSearch",value:function(){this.getUsers()}},{key:"actionSearch",value:function(e,t){var a=this;this.setState(Object(s.a)({},t,e.target.value),(function(){a.searchKey()}))}},{key:"resetSearch",value:function(){var e=this;this.setState({key:"",keyEmail:"",keyPhone:"",keyFax:"",keyAddress:"",keyWebsite:"",keyCode:"",keyCompany:"",keyDateCreate:new Date,keyStatus:""},(function(){e.searchKey()}))}},{key:"render",value:function(){var e=this,t=this.state,a=t.data,s=t.key,i=t.action,c=t.arrPagination,l=t.indexPage,o=t.dataOrderDetail;return this.state.isLoading?Object(N.jsx)("div",{id:"page-loading",children:Object(N.jsxs)("div",{className:"three-balls",children:[Object(N.jsx)("div",{className:"ball ball1"}),Object(N.jsx)("div",{className:"ball ball2"}),Object(N.jsx)("div",{className:"ball ball3"})]})}):Object(N.jsxs)("div",{className:"animated fadeIn",children:[Object(N.jsx)(u.a,{children:Object(N.jsxs)(h.a,{children:[Object(N.jsx)("p",{style:P.success,children:this.state.updated}),Object(N.jsx)("p",{style:P.danger,children:this.state.deleted}),Object(N.jsxs)(_.a,{children:[Object(N.jsxs)(O.a,{children:[Object(N.jsx)("i",{className:"fa fa-align-justify"})," Danh s\xe1ch \u0111\u01a1n h\xe0ng (Page: ",this.state.indexPage+1,")",Object(N.jsx)("div",{style:P.tags,children:Object(N.jsx)(f.S,{children:Object(N.jsx)(f.p,{sm:"12",lg:"12",children:Object(N.jsxs)(f.S,{children:[Object(N.jsx)(f.p,{sm:"12",lg:"4",children:Object(N.jsx)("div",{children:Object(N.jsx)(E.a,{style:P.searchInput,onChange:function(t){e.actionSearch(t,"key")},name:"key",value:s,placeholder:"T\u1eeb kh\xf3a"})})}),Object(N.jsx)(f.p,{sm:"12",lg:"4",children:Object(N.jsx)(f.T,{style:P.flexOption,onChange:function(t){e.actionSearch(t,"keyStatus")},custom:!0,children:["AVAILABLE","SPENDING"].map((function(e,t){return Object(N.jsx)("option",{value:e,children:e})}))})}),Object(N.jsx)(f.p,{sm:"12",lg:"4",children:Object(N.jsx)(b.a,{color:"primary",style:{width:"100%",marginTop:5},size:"sm",onClick:function(t){e.resetSearch()},children:"L\xe0m m\u1edbi t\xecm ki\u1ebfm"})})]})})})})]}),Object(N.jsx)(m.a,{children:Object(N.jsxs)("table",{ble:!0,className:"table table-hover table-outline mb-0 d-none d-sm-table",children:[Object(N.jsx)("thead",{className:"thead-light",children:Object(N.jsxs)("tr",{children:[Object(N.jsx)("th",{className:"text-center",children:"STT."}),Object(N.jsx)("th",{className:"text-center",children:"M\xe3 c\xf4ng ty"}),Object(N.jsx)("th",{className:"text-center",children:"Ng\xe0y mua"}),Object(N.jsx)("th",{className:"text-center",children:"Ng\xe0y k\xedch ho\u1ea1t"}),Object(N.jsx)("th",{className:"text-center",children:"S\u1ed1 l\u01b0\u1ee3ng mua"}),Object(N.jsx)("th",{className:"text-center",children:"Tr\u1ea1ng th\xe1i"}),Object(N.jsx)("th",{className:"text-center",children:"#"})]})}),Object(N.jsx)("tbody",{children:void 0!=a?a.map((function(t,a){return Object(N.jsxs)("tr",{children:[Object(N.jsx)("td",{className:"text-center",children:a+1}),Object(N.jsx)("td",{className:"text-center",children:t.Company_Id}),Object(N.jsx)("td",{className:"text-center",children:new Date(t.Purcharse_Date).toLocaleDateString()+" "+new Date(t.Purcharse_Date).toLocaleTimeString()}),Object(N.jsx)("td",{className:"text-center",children:new Date(t.Active_Date).toLocaleDateString()+" "+new Date(t.Active_Date).toLocaleTimeString()}),Object(N.jsx)("td",{className:"text-center",children:t.Count}),Object(N.jsx)("td",{className:"text-center",children:Object(N.jsx)(f.a,{color:e.getBadge(t.Status),children:t.Status})}),Object(N.jsxs)("td",{className:"text-center",children:[Object(N.jsx)(b.a,{outline:!0,color:"primary",size:"sm",onClick:function(a){return e.openUpdate(t)},children:"Update"})," ",Object(N.jsx)(b.a,{outline:!0,color:"success",size:"sm",onClick:function(){var a=Object(r.a)(n.a.mark((function a(s){return n.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.getOrderDetail(t.Company_Id,t.Sale_Id,t.Status);case 2:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}(),children:"Chi ti\u1ebft"})]})]},a)})):""})]})}),Object(N.jsx)(j.a,{children:1==c.length?"":Object(N.jsx)("div",{style:{float:"right",marginRight:"10px",padding:"10px"},children:Object(N.jsx)("tr",{style:P.row,children:c.map((function(t,a){return Object(N.jsx)("td",{children:Object(N.jsx)(b.a,{style:P.pagination,color:a==l?"primary":"danger",onClick:function(t){e.setState({data:c[a],indexPage:a})},children:a+1})})}))})})})]}),Object(N.jsxs)(_.a,{hidden:this.state.hiddenDetail,children:[Object(N.jsxs)(O.a,{children:[Object(N.jsx)("i",{className:"fa fa-align-justify"})," Chi ti\u1ebft \u0111\u01a1n h\xe0ng c\u1ee7a ",this.state.currentCom_ID," (Page: ",this.state.indexPage+1,")",Object(N.jsxs)(f.S,{style:{marginTop:20},children:[Object(N.jsxs)(f.p,{sm:"6",lg:"6",children:[Object(N.jsx)(f.p,{sm:"12",lg:"12",children:Object(N.jsxs)(f.K,{htmlFor:"selectSm",children:["T\xean c\xf4ng ty \u0111\u0103ng k\xfd ph\u1ea7n c\u1ee9ng: ",this.state.currentCom_ID]})}),Object(N.jsx)(f.p,{sm:"12",lg:"12",children:Object(N.jsxs)(f.K,{htmlFor:"selectSm",children:["T\xean sale: ",this.state.currentSale_ID]})}),Object(N.jsx)(f.p,{sm:"12",lg:"12",children:Object(N.jsxs)(f.K,{htmlFor:"selectSm",children:["Tr\u1ea1ng th\xe1i \u0111\u01a1n h\xe0ng: ",Object(N.jsx)(f.a,{color:this.getBadge(this.state.curentStatus),children:this.state.curentStatus})]})})]}),Object(N.jsx)(f.p,{sm:"6",lg:"6",children:Object(N.jsx)(b.a,{color:"primary",style:{float:"right",marginTop:5},size:"sm",onClick:function(t){e.setState({hiddenDetail:!0})},children:"\u0110\xf3ng"})})]})]}),Object(N.jsx)(m.a,{children:Object(N.jsxs)("table",{ble:!0,className:"table table-hover table-outline mb-0 d-none d-sm-table",children:[Object(N.jsx)("thead",{className:"thead-light",children:Object(N.jsxs)("tr",{children:[Object(N.jsx)("th",{className:"text-center",children:"STT."}),Object(N.jsx)("th",{className:"text-center",children:"M\xe3 \u0111\u01a1n h\xe0ng"}),Object(N.jsx)("th",{className:"text-center",children:"M\xe3 ph\u1ea7n c\u1ee9ng"}),Object(N.jsx)("th",{className:"text-center",children:"Ng\xe0y mua"}),Object(N.jsx)("th",{className:"text-center",children:"Ng\xe0y k\xedch ho\u1ea1t"}),Object(N.jsx)("th",{className:"text-center",children:"Tr\u1ea1ng th\xe1i"})]})}),Object(N.jsx)("tbody",{children:void 0!=o?o.map((function(t,a){return Object(N.jsxs)("tr",{children:[Object(N.jsx)("td",{className:"text-center",children:a+1}),Object(N.jsx)("td",{className:"text-center",children:t.OrderID}),Object(N.jsx)("td",{className:"text-center",children:t.HardWareID}),Object(N.jsx)("td",{className:"text-center",children:new Date(t.Purcharse_Date).toLocaleDateString()+" "+new Date(t.Purcharse_Date).toLocaleTimeString()}),Object(N.jsx)("td",{className:"text-center",children:new Date(t.Active_Date).toLocaleDateString()+" "+new Date(t.Active_Date).toLocaleTimeString()}),Object(N.jsx)("td",{className:"text-center",children:Object(N.jsx)(f.a,{color:e.getBadge(t.Status),children:t.Status})})]},a)})):""})]})})]})]})}),Object(N.jsxs)(T.a,{isOpen:this.state.modalCom,className:this.props.className,children:[Object(N.jsx)(S.a,{children:"new"==this.state.action?"Create":"Update"}),Object(N.jsx)(g.a,{children:"new"==i?"":Object(N.jsxs)("div",{children:[Object(N.jsx)("label",{style:P.flexLabel,htmlFor:"tag",children:"Status    "}),Object(N.jsxs)("select",{style:P.flexOption,name:"Status",onChange:function(t){return e.onChange("Status",t.target.value)},children:[Object(N.jsx)("option",{value:this.state.Status,children:""==this.state.Status?" - - - - - - - - - - ":this.state.Status}),["SPENDING","COMPLETE"].map((function(e,t){return Object(N.jsx)("option",{value:e,children:e})}))]})]})}),Object(N.jsxs)(D.a,{children:[Object(N.jsx)(b.a,{color:"primary",onClick:function(t){"new"===e.state.action?e.addCompany():e.updateOrder()},disabled:this.state.isLoading,children:"Save"})," ",Object(N.jsx)(b.a,{color:"secondary",onClick:function(t){return e.toggleModal("new")},children:"Cancel"})]})]}),Object(N.jsxs)(T.a,{isOpen:this.state.modalDelete,toggle:function(t){return e.setState({modalDelete:!e.state.modalDelete,delete:null})},className:this.props.className,children:[Object(N.jsx)(S.a,{toggle:function(t){return e.setState({modalDelete:!e.state.modalDelete,delete:null})},children:"Delete"}),Object(N.jsx)(g.a,{children:Object(N.jsx)("label",{htmlFor:"tag",children:'Do you want to delete user "'.concat(this.state.delete?this.state.delete.Email:"",'" ?')})}),Object(N.jsxs)(D.a,{children:[Object(N.jsx)(b.a,{color:"primary",onClick:function(t){return e.delete()},disabled:this.state.isLoading,children:"Delete"})," ",Object(N.jsx)(b.a,{color:"secondary",onClick:function(t){return e.setState({modalDelete:!e.state.modalDelete,delete:null})},children:"Cancel"})]})]})]})}}]),a}(p.Component),P={pagination:{marginRight:"5px"},flexLabel:{width:100},flexOption:{width:160,margin:"1px"},a:{textDecoration:"none"},floatRight:{float:"right",marginTop:"3px"},spinner:{width:"30px"},center:{textAlign:"center"},tbody:{height:"380px",overflowY:"auto"},wh12:{width:"8%",float:"left",height:"80px"},wh15:{width:"15%",float:"left",height:"80px"},w5:{width:"12%",float:"left",height:"80px"},wa10:{width:"5%",float:"left",height:"80px"},row:{float:"left",width:"100%"},success:{color:"green"},danger:{color:"red"},mgl5:{marginLeft:"5px"},tags:{float:"right",marginRight:"5px"},searchInput:{width:"160px",display:"inline-block",margin:"1px"},userActive:{color:"green"},userPending:{color:"red"},nagemonNameCol:{width:"328px"},image:{width:"100px",height:"100px",borderRadius:"99999px"}};t.default=I},644:function(e,t,a){"use strict";var s,i=a(165);t.a=(s={BASE_URL:"https://api-soida.applamdep.com",BASE_URL_CURRENT:"https://id.applamdep.com/",LIST_USER:"/api/list-user",LIST_USER_WITH_ID:"/api/list-user?id=",ADD_USER:"/api/add-user",UPDATE_USER:"/api/update-user",DELETE_USER:"/api/delete-user",LOGIN_ADMIN:"/api/login_admin",GET_SHOP:"/api/get-shop",GET_SALE:"/api/get-sale",GET_COEFFICIENT:"/api/calculator-coefficient-user",GET_COEFFICIENT_PER_SALE:"/api/calculator-coefficient-user-per-sale",GET_USER_SALE_BY_MONTH:"/api/get-user-of-sale-by-month",CALCULATOR_ALL_USER_OF_COMPANY:"/api/calculator-all-user-company",CALCULATOR_ALL_USER_OF_SALE:"/api/calculator-all-user-of-sale",GET_SEEDER:"/api/get-seed",GET_SALE_NAME:"/api/get-name-sale",GET_USER_BY_ID:"/api/get-user-byID",LIST_CUSTOMER:"/api/list-customer",LIST_CUSTOMER_BY_MONTH:"/api/get-user-sale-by-month",LIST_TYPEKEY:"/api/list-typekey",LIST_TYPEKEY_WITH_ID:"/api/list-typekey?id=",ADD_TYPEKEY:"/api/add-typekey",UPDATE_TYPEKEY:"/api/update-typekey",DELETE_TYPEKEY:"/api/delete-typekey",LIST_HARDWARE:"/api/list-hardware",LIST_HARDWARE_WITH_ID:"/api/list-hardware?id=",ADD_HARDWARE:"/api/add-hardware",UPDATE_HARDWARE:"/api/update-hardware",DELETE_HARDWARE:"/api/delete-hardware",LIST_ORDER:"/api/list-order",ADD_ORDER:"/api/add-order",UPDATE_STATUS_ORDER:"/api/update-status-order",CHECK_OUT:"/api/checkout-order",LIST_TRANSACTION:"/api/list-transaction",ADD_TRANSACTION:"/api/add-transaction",LIST_CHECK_OUT:"/api/list-checkout",LIST_HARDWARE_CHECKOUT:"/api/get-list-hardward-by-check-out",UPDATE_STATUS_CHECKOUT:"/api/update-status-hardware",LIST_ORDER_DETAIL:"/api/list-orderdetail",ADD_ORDER_DETAIL:"/api/add-orderdetail",LIST_ROLE:"/api/list-role",LIST_ROLE_WITH_ID:"/api/list-role?id=",ADD_ROLE:"/api/add-role",UPDATE_ROLE:"/api/update-role",DELETE_ROLE:"/api/delete-role",LIST_PACKAGE:"/api/list-package",ADD_PACKAGE:"/api/add-package",UPDATE_PACKAGE:"/api/update-package",DELETE_PACKAGE:"/api/delete-package",PLUGIN_DATA_PACKAGE:"/api/get-name-package",LIST_SALELOG:"/api/list-salelog",LIST_SALELOG_WITH_ID:"/api/list-salelog?id=",ADD_SALELOG:"/api/add-salelog",UPDATE_SALELOG:"/api/update-salelog",DELETE_SALELOG:"/api/delete-salelog",DATA_SALE:"/api/get-data-sale",LIST_SALE:"/api/list-sale",LIST_SALE_WITH_ID:"/api/list-sale?id=",ADD_SALE:"/api/add-sale",UPDATE_SALE:"/api/update-sale",DELETE_SALE:"/api/delete-sale",LIST_KEYORDER:"/api/list-keyorder",LIST_KEYORDER_WITH_ID:"/api/list-keyorder?id=",ADD_KEYORDER:"/api/add-keyorder",UPDATE_KEYORDER:"/api/update-keyorder",DELETE_KEYORDER:"/api/delete-keyorder",LIST_KEY:"/api/list-key",LIST_KEY_WITH_ID:"/api/list-key?id=",ADD_KEY:"/api/add-key",UPDATE_KEY:"/api/update-key",DELETE_KEY:"/api/delete-key",PLUGIN_LIST_COMPANY:"/api/plugin-list-company",PLUGIN_LIST_COMPANY_BY_ID:"/api/plugin-list-company-by-id",PLUGIN_LIST_COMPANY_WITH_ID:"/api/plugin-list-company?id=",PLUGIN_ADD_COMPANY:"/api/plugin-add-company",PLUGIN_UPDATE_COMPANY:"/api/plugin-update-company",PLUGIN_DELETE_COMPANY:"/api/plugin-delete-company",PLUGIN_DATA_COMPANY:"/api/plugin-get-data-company",LIST_COMPANY:"/api/list-company",LIST_COMPANY_WITH_ID:"/api/list-company?id=",ADD_COMPANY:"/api/add-company",UPDATE_COMPANY:"/api/update-company",DELETE_COMPANY:"/api/delete-company",DATA_COMPANY:"/api/get-data-company",LIST_LINK:"/api/list-link",LIST_LINK_WITH_ID:"/api/list-link?id=",ADD_LINK:"/api/add-link",UPDATE_LINK:"/api/update-link",DELETE_LINK:"/api/delete-link","GET-LINK-BY-ID":"/api/link-by-id",LIST_FEATURE:"/api/list-feature",ADD_FEATURE:"/api/add-feature",UPDATE_FEATURE:"/api/update-feature",DELETE_FEATURE:"/api/delete-feature",DATA_CHOOSE_FEATURE:"/api/get-feature-choose",LIST_PLUGIN_ORDER:"/api/plugin-list-order",LIST_PLUGIN_ORDER_BY_ID:"/api/plugin-list-order-by-id",LIST_PLUGIN_ORDER_FOR_ADMIN:"/api/plugin-list-order-for-admin",LIST_ORDER_BY_SALE:"/api/plugin-list-order-by-saleid",ADD_PLUGIN_ORDER:"/api/plugin-add-order",UPDATE_PLUGIN_ORDER:"/api/plugin-update-order",DELETE_PLUGIN_ORDER:"/api/plugin-delete-order",UPDATE_SLUG:"/api/plugin-update-slug",PLUGIN_LIST_USER:"/api/plugin-list-user",PLUGIN_ALL_USER:"/api/plugin-all-user",PLUGIN_ADD_USER:"/api/plugin-add-user",PLUGIN_ADD_SALE:"/api/plugin-add-sale",PLUGIN_UPDATE_USER:"/api/plugin-update-user",PLUGIN_DELETE_USER:"/api/plugin-delete-user",PLUGIN_RESET_PASSWORD:"/api/plugin-reset-password",PLUGIN_CHANGE_PASSWORD:"/api/plugin-change",PLUGIN_CHECK_LINK:"/api/plugin-check-link",PLUGIN_UPDATE_PASSWORD:"/api/plugin-update-password",PLUGIN_UPDATE_STATUS:"/api/plugin-update-status",PLUGIN_LOGIN_ADMIN:"/api/plugin-login_admin",PLUGIN_FORGOT_PASS:"/api/plugin-forgot-password",PLUGIN_GET_USER_BYID:"/api/plugin-get-user-byID",PLUGIN_GET_USER_BY_BODY:"/api/plugin-get-user-byID-with-body",PLUGIN_LIST_ROLE:"/api/plugin-list-role",PLUGIN_ADD_ROLE:"/api/plugin-add-role",PLUGIN_UPDATE_ROLE:"/api/plugin-update-role",PLUGIN_DELETE_ROLE:"/api/plugin-delete-role",CUS_RES_LIST:"/api/list-customer-request",CUS_RES_LIST_COMPANY:"/api/list-customer-request-for-company",CUS_RES_ADD:"/api/add-customer-request",CUS_RES_UPDATE:"/api/update-customer-request",CUS_RES_DELETE:"/api/delete-customer-request",REWARD_INFO_LIST:"/api/list-reward-info",REWARD_INFO_LIST_COMPANY:"/api/list-reward-info-for-company",REWARD_INFO_ADD:"/api/add-reward-info",REWARD_INFO_UPDATE:"/api/update-reward-info",REWARD_INFO_DELETE:"/api/delete-reward-info",REWARD_TRANS_LIST:"/api/list-reward-trans",REWARD_TRANS_ADD:"/api/list-reward-trans",REWARD_TRANS_UPDATE:"/api/update-reward-trans",REWARD_TRANS_DELETE:"/api/delete-reward-trans",TYPE_REQUEST_LIST:"/api/list-type-request",TYPE_REQUEST_ADD:"/api/add-type-request",TYPE_REQUEST_UPDATE:"/api/update-type-request",TYPE_REQUEST_DELETE:"/api/delete-type-request"},Object(i.a)(s,"LIST_CUSTOMER","/api/list-customer"),Object(i.a)(s,"LIST_CUSTOMER_FOR_COMPANY","/api/list-customer-for-company"),Object(i.a)(s,"LIST_CUSTOMER_FOR_COMPANY_BY_MONTH","/api/list-customer-for-company-by-month"),Object(i.a)(s,"LIST_SUGGEST_ITEM","/itemSdk"),Object(i.a)(s,"LIST_SUGGEST_ITEM_COMPANY","/itemSdk/"),Object(i.a)(s,"LIST_SUGGEST_ITEM_ADMIN","/itemSdk/admin/"),Object(i.a)(s,"ADD_SUGGEST_ITEM","/itemSdk"),Object(i.a)(s,"UPDATE_SUGGEST_ITEM","/itemSdk/"),Object(i.a)(s,"DELETE_SUGGEST_ITEM","/itemSdk/deleteItem"),Object(i.a)(s,"LIST_SDK","/sdk"),Object(i.a)(s,"LIST_BRAND","/brands"),Object(i.a)(s,"LIST_BRAND_COMPANY","/brands/"),Object(i.a)(s,"ADD_BRAND","/add-brand"),Object(i.a)(s,"UPDATE_BRAND","/update-brand"),Object(i.a)(s,"DELETE_BRAND","/delete-brand"),Object(i.a)(s,"LIST_PRODUCT","/product"),Object(i.a)(s,"LIST_PRODUCT_COMPANY","/product/"),Object(i.a)(s,"ADD_PRODUCT","/add-product"),Object(i.a)(s,"UPDATE_PRODUCT","/update-product"),Object(i.a)(s,"DELETE_PRODUCT","/delete-product"),Object(i.a)(s,"LIST_TYPE","/types"),Object(i.a)(s,"LIST_TYPE_COMPANY","/types/"),Object(i.a)(s,"ADD_TYPE","/add-type"),Object(i.a)(s,"UPDATE_TYPE","/update-type"),Object(i.a)(s,"DELETE_TYPE","/delete-type"),Object(i.a)(s,"LIST_COLOR","/colors"),Object(i.a)(s,"LIST_COLOR_COMPANY","/colors/"),Object(i.a)(s,"ADD_COLOR","/add-color"),Object(i.a)(s,"UPDATE_COLOR","/update-color"),Object(i.a)(s,"DELETE_COLOR","/delete-color"),Object(i.a)(s,"LIST_HISTORY_SKIN","/api/get-history-skin"),Object(i.a)(s,"LIST_HISTORY_SKIN_BY_CONDITION","/api/get-history-skin-by-condition"),Object(i.a)(s,"ADD_HISTORY_SKIN","/api/add-history-skin"),Object(i.a)(s,"LIST_TYPE_PRODUCT","/api/list-type-product"),Object(i.a)(s,"ADD_TYPE_PRODUCT","/api/add-type-product"),Object(i.a)(s,"UPDATE_TYPE_PRODUCT","/api/update-type-product"),Object(i.a)(s,"DELETE_TYPE_PRODUCT","/api/delete-type-product"),Object(i.a)(s,"LIST_TYPE_SDK","/api/list-type-sdk"),Object(i.a)(s,"ADD_TYPE_SDK","/api/add-type-sdk"),Object(i.a)(s,"UPDATE_TYPE_SDK","/api/update-type-sdk"),Object(i.a)(s,"DELETE_TYPE_SDK","/api/delete-type-sdk"),s)},652:function(e,t,a){"use strict";function s(e,t,a,s,i,n,r){try{var c=e[n](r),l=c.value}catch(o){return void a(o)}c.done?t(l):Promise.resolve(l).then(s,i)}function i(e){return function(){var t=this,a=arguments;return new Promise((function(i,n){var r=e.apply(t,a);function c(e){s(r,i,n,c,l,"next",e)}function l(e){s(r,i,n,c,l,"throw",e)}c(void 0)}))}}a.d(t,"a",(function(){return i}))},666:function(e,t,a){"use strict";var s=a(12),i=a(29),n=a(2),r=a.n(n),c=a(64),l=a.n(c),o=a(638),d=a.n(o),p=a(639),u=l.a.oneOfType([l.a.number,l.a.string]),h={tag:p.n,noGutters:l.a.bool,className:l.a.string,cssModule:l.a.object,form:l.a.bool,xs:u,sm:u,md:u,lg:u,xl:u},_={tag:"div",widths:["xs","sm","md","lg","xl"]},O=function(e){var t=e.className,a=e.cssModule,n=e.noGutters,c=e.tag,l=e.form,o=e.widths,u=Object(i.a)(e,["className","cssModule","noGutters","tag","form","widths"]),h=[];o.forEach((function(t,a){var s=e[t];if(delete u[t],s){var i=!a;h.push(i?"row-cols-"+s:"row-cols-"+t+"-"+s)}}));var _=Object(p.j)(d()(t,n?"no-gutters":null,l?"form-row":"row",h),a);return r.a.createElement(c,Object(s.a)({},u,{className:_}))};O.propTypes=h,O.defaultProps=_,t.a=O},667:function(e,t,a){"use strict";var s=a(12),i=a(29),n=a(2),r=a.n(n),c=a(64),l=a.n(c),o=a(638),d=a.n(o),p=a(639),u=l.a.oneOfType([l.a.number,l.a.string]),h=l.a.oneOfType([l.a.bool,l.a.number,l.a.string,l.a.shape({size:l.a.oneOfType([l.a.bool,l.a.number,l.a.string]),order:u,offset:u})]),_={tag:p.n,xs:h,sm:h,md:h,lg:h,xl:h,className:l.a.string,cssModule:l.a.object,widths:l.a.array},O={tag:"div",widths:["xs","sm","md","lg","xl"]},E=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},b=function(e){var t=e.className,a=e.cssModule,n=e.widths,c=e.tag,l=Object(i.a)(e,["className","cssModule","widths","tag"]),o=[];n.forEach((function(t,s){var i=e[t];if(delete l[t],i||""===i){var n=!s;if(Object(p.h)(i)){var r,c=n?"-":"-"+t+"-",u=E(n,t,i.size);o.push(Object(p.j)(d()(((r={})[u]=i.size||""===i.size,r["order"+c+i.order]=i.order||0===i.order,r["offset"+c+i.offset]=i.offset||0===i.offset,r)),a))}else{var h=E(n,t,i);o.push(h)}}})),o.length||o.push("col");var u=Object(p.j)(d()(t,o),a);return r.a.createElement(c,Object(s.a)({},l,{className:u}))};b.propTypes=_,b.defaultProps=O,t.a=b},668:function(e,t,a){"use strict";var s=a(12),i=a(29),n=a(2),r=a.n(n),c=a(64),l=a.n(c),o=a(638),d=a.n(o),p=a(639),u={tag:p.n,inverse:l.a.bool,color:l.a.string,body:l.a.bool,outline:l.a.bool,className:l.a.string,cssModule:l.a.object,innerRef:l.a.oneOfType([l.a.object,l.a.string,l.a.func])},h=function(e){var t=e.className,a=e.cssModule,n=e.color,c=e.body,l=e.inverse,o=e.outline,u=e.tag,h=e.innerRef,_=Object(i.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),O=Object(p.j)(d()(t,"card",!!l&&"text-white",!!c&&"card-body",!!n&&(o?"border":"bg")+"-"+n),a);return r.a.createElement(u,Object(s.a)({},_,{className:O,ref:h}))};h.propTypes=u,h.defaultProps={tag:"div"},t.a=h},669:function(e,t,a){"use strict";var s=a(12),i=a(29),n=a(2),r=a.n(n),c=a(64),l=a.n(c),o=a(638),d=a.n(o),p=a(639),u={tag:p.n,className:l.a.string,cssModule:l.a.object},h=function(e){var t=e.className,a=e.cssModule,n=e.tag,c=Object(i.a)(e,["className","cssModule","tag"]),l=Object(p.j)(d()(t,"card-header"),a);return r.a.createElement(n,Object(s.a)({},c,{className:l}))};h.propTypes=u,h.defaultProps={tag:"div"},t.a=h},670:function(e,t,a){"use strict";var s=a(12),i=a(29),n=a(2),r=a.n(n),c=a(64),l=a.n(c),o=a(638),d=a.n(o),p=a(639),u={tag:p.n,className:l.a.string,cssModule:l.a.object,innerRef:l.a.oneOfType([l.a.object,l.a.string,l.a.func])},h=function(e){var t=e.className,a=e.cssModule,n=e.innerRef,c=e.tag,l=Object(i.a)(e,["className","cssModule","innerRef","tag"]),o=Object(p.j)(d()(t,"card-body"),a);return r.a.createElement(c,Object(s.a)({},l,{className:o,ref:n}))};h.propTypes=u,h.defaultProps={tag:"div"},t.a=h},672:function(e,t,a){"use strict";var s=a(12),i=a(29),n=a(642),r=a(35),c=a(2),l=a.n(c),o=a(64),d=a.n(o),p=a(638),u=a.n(p),h=a(639),_={children:d.a.node,type:d.a.string,size:d.a.oneOfType([d.a.number,d.a.string]),bsSize:d.a.string,valid:d.a.bool,invalid:d.a.bool,tag:h.n,innerRef:d.a.oneOfType([d.a.object,d.a.func,d.a.string]),plaintext:d.a.bool,addon:d.a.bool,className:d.a.string,cssModule:d.a.object},O=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(n.a)(a)),a.focus=a.focus.bind(Object(n.a)(a)),a}Object(r.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.focus=function(){this.ref&&this.ref.focus()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,n=e.type,r=e.bsSize,c=e.valid,o=e.invalid,d=e.tag,p=e.addon,_=e.plaintext,O=e.innerRef,E=Object(i.a)(e,["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"]),b=["radio","checkbox"].indexOf(n)>-1,m=new RegExp("\\D","g"),j=d||("select"===n||"textarea"===n?n:"input"),T="form-control";_?(T+="-plaintext",j=d||"input"):"file"===n?T+="-file":"range"===n?T+="-range":b&&(T=p?null:"form-check-input"),E.size&&m.test(E.size)&&(Object(h.p)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),r=E.size,delete E.size);var S=Object(h.j)(u()(t,o&&"is-invalid",c&&"is-valid",!!r&&"form-control-"+r,T),a);return("input"===j||d&&"function"===typeof d)&&(E.type=n),E.children&&!_&&"select"!==n&&"string"===typeof j&&"select"!==j&&(Object(h.p)('Input with a type of "'+n+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete E.children),l.a.createElement(j,Object(s.a)({},E,{ref:O,className:S,"aria-invalid":o}))},t}(l.a.Component);O.propTypes=_,O.defaultProps={type:"text"},t.a=O},700:function(e,t,a){"use strict";var s=a(12),i=a(29),n=a(642),r=a(35),c=a(2),l=a.n(c),o=a(64),d=a.n(o),p=a(638),u=a.n(p),h=a(639),_={active:d.a.bool,"aria-label":d.a.string,block:d.a.bool,color:d.a.string,disabled:d.a.bool,outline:d.a.bool,tag:h.n,innerRef:d.a.oneOfType([d.a.object,d.a.func,d.a.string]),onClick:d.a.func,size:d.a.string,children:d.a.node,className:d.a.string,cssModule:d.a.object,close:d.a.bool},O=function(e){function t(t){var a;return(a=e.call(this,t)||this).onClick=a.onClick.bind(Object(n.a)(a)),a}Object(r.a)(t,e);var a=t.prototype;return a.onClick=function(e){if(!this.props.disabled)return this.props.onClick?this.props.onClick(e):void 0;e.preventDefault()},a.render=function(){var e=this.props,t=e.active,a=e["aria-label"],n=e.block,r=e.className,c=e.close,o=e.cssModule,d=e.color,p=e.outline,_=e.size,O=e.tag,E=e.innerRef,b=Object(i.a)(e,["active","aria-label","block","className","close","cssModule","color","outline","size","tag","innerRef"]);c&&"undefined"===typeof b.children&&(b.children=l.a.createElement("span",{"aria-hidden":!0},"\xd7"));var m="btn"+(p?"-outline":"")+"-"+d,j=Object(h.j)(u()(r,{close:c},c||"btn",c||m,!!_&&"btn-"+_,!!n&&"btn-block",{active:t,disabled:this.props.disabled}),o);b.href&&"button"===O&&(O="a");var T=c?"Close":null;return l.a.createElement(O,Object(s.a)({type:"button"===O&&b.onClick?"button":void 0},b,{className:j,ref:E,onClick:this.onClick,"aria-label":a||T}))},t}(l.a.Component);O.propTypes=_,O.defaultProps={color:"secondary",tag:"button"},t.a=O},905:function(e,t,a){"use strict";var s=a(12),i=a(29),n=a(2),r=a.n(n),c=a(64),l=a.n(c),o=a(638),d=a.n(o),p=a(639),u={tag:p.n,className:l.a.string,cssModule:l.a.object},h=function(e){var t=e.className,a=e.cssModule,n=e.tag,c=Object(i.a)(e,["className","cssModule","tag"]),l=Object(p.j)(d()(t,"card-footer"),a);return r.a.createElement(n,Object(s.a)({},c,{className:l}))};h.propTypes=u,h.defaultProps={tag:"div"},t.a=h}}]);
//# sourceMappingURL=44.ffc2f8bd.chunk.js.map