(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[43],{1263:function(e,t,a){"use strict";a.r(t);var i=a(165),s=a(114),n=a.n(s),r=a(649),c=a(167),l=a(168),o=a(170),d=a(169),p=a(2),u=a(666),_=a(667),h=a(668),E=a(669),O=a(672),b=a(692),T=a(670),m=a(903),j=a(1295),S=a(1236),D=a(1237),g=a(1238),A=a(653),f=(a(662),a(642)),L=a(655),N=a.n(L),R=a(17),I=new Headers,P=localStorage.getItem("auth");I.append("Authorization","Bearer "+P),I.append("Content-Type","application/json");var x=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(e){var i;return Object(c.a)(this,a),(i=t.call(this,e)).getData=Object(r.a)(n.a.mark((function e(){var t,a,s,r;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i.setState({isLoading:!0}),e.next=3,N()({baseURL:f.a.BASE_URL,url:f.a.LIST_TRANSACTION,method:"POST"});case 3:t=e.sent,a=0;case 5:if(!(a<t.data.data.length)){e.next=13;break}return e.next=8,N()({baseURL:f.a.BASE_URL,url:f.a.LIST_COMPANY,method:"POST",data:{condition:{_id:t.data.data[a].Company_Id}}});case 8:s=e.sent,t.data.data[a].Com_Name=s.data.data[0].Name;case 10:a++,e.next=5;break;case 13:i.pagination(t.data.data),i.setState({dataApi:t.data.data}),r=0,t.data.data.map((function(e){"Actived"==e.Status&&(r+=1)})),i.setState({isLoading:!1,totalActive:r});case 18:case"end":return e.stop()}}),e)}))),i.getOrderDetail=function(){var e=Object(r.a)(n.a.mark((function e(t,a){var s,r;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N()({baseURL:f.a.BASE_URL,url:f.a.LIST_CHECK_OUT,method:"POST",data:{condition:{isDelete:!1,Transaction_ID:t}}});case 2:return s=e.sent,e.next=5,N()({baseURL:f.a.BASE_URL,url:f.a.LIST_COMPANY,method:"POST",data:{condition:{_id:a}}});case 5:r=e.sent,i.setState({dataOrderDetail:s.data.data,currenCom:r.data.data[0].Name,currenCom_ID:a});case 7:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),i.state={data:[],key:"",keyStatus:"",activePage:1,page:1,itemsCount:0,limit:20,totalActive:0,modalCom:!1,viewingUser:{},communities:[],updated:"",Status:"",dataApi:[],action:"new",modalDelete:!1,delete:null,arrPagination:[],indexPage:0,dataCompany:[],currentCompany:"",currentID:"",currenCom:"",currenCom_ID:"",currentSale_ID:"",curentStatus:"",dataOrderDetail:[],DATA_COMPANY:"",hiddenDetail:!0},i}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=Object(r.a)(n.a.mark((function e(){var t,a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(this.getData(),t=JSON.parse(localStorage.getItem("url")),a=0;a<t.length;a++)"#"+t[a].to==window.location.hash&&1==t[a].hidden&&(window.location.href="#/");case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getCompanyData",value:function(){var e=Object(r.a)(n.a.mark((function e(){var t;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N()({baseURL:f.a.BASE_URL,url:f.a.LIST_COMPANY,method:"POST"});case 2:t=e.sent,this.setState({dataCompany:t.data.data});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"pagination",value:function(e){var t,a,i,s=[];for(t=0,a=e.length;t<a;t+=5)i=e.slice(t,t+5),s.push(i);this.setState({arrPagination:s,data:s[this.state.indexPage]})}},{key:"searchKey",value:function(){var e=this.state,t=e.indexPage,a=e.key,i=e.keyStatus;if(""!=a||""!=i){var s=[];this.state.dataApi.map((function(e){e.Company_Id.toLocaleUpperCase().includes(a.toLocaleUpperCase())&&e.Status.toLocaleUpperCase().includes(i.toLocaleUpperCase())&&s.push(e)}));var n=0;s.map((function(e){"Actived"==e.Status&&(n+=1)})),this.setState({data:s,totalActive:n})}else{var r=0;this.state.dataApi.map((function(e){"Actived"==e.Status&&(r+=1)})),this.setState({data:this.state.arrPagination[t],totalActive:r})}}},{key:"toggleModal",value:function(e){"new"==e&&this.setState({modalCom:!this.state.modalCom,action:e,Name:"",Email:"",Phone:"",Fax:"",Address:"",Website:"",Code:"",Status:"",username:"",password:""})}},{key:"onChange",value:function(e,t){this.setState(Object(i.a)({},e,t))}},{key:"addCompany",value:function(){var e=Object(r.a)(n.a.mark((function e(){var t,a,i,s,r,c,l,o,d,p,u,_,h;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.state,a=t.Email,i=t.Name,s=t.Phone,r=t.Fax,c=t.Address,l=t.Website,o=t.Code,d=t.UserName,p=t.Password,null!=a&&""!=a&&null!=i&&""!=i&&null!=s&&""!=s&&null!=c&&""!=c&&null!=d&&""!=d&&null!=p&&""!=p){e.next=4;break}return alert("Please fill in all the requirements"),e.abrupt("return");case 4:return u={Name:i,Email:a,Phone:s,Fax:r,Address:c,Website:l,Code:o},this.setState({isLoading:!0}),e.next=8,N()({baseURL:f.a.BASE_URL,url:f.a.ADD_COMPANY,method:"PUT",data:u});case 8:if(1!=(_=e.sent).data.is_success){e.next=18;break}return this.getData(),h={Name:i,Email:a,Phone:s,Address:c,Company_Id:_.data.data._id,Role_Id:"60e6a98b39d7243f689a123c",UserName:d,Password:p,Code:_.data.data._id,Status:"Actived"},e.next=14,N()({baseURL:f.a.BASE_URL,url:f.a.ADD_USER,method:"POST",data:h});case 14:console.log(_.data.data),this.setState({modalCom:!this.state.modalCom}),e.next=20;break;case 18:alert(_.data.message),this.setState({isLoading:!1});case 20:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"openUpdate",value:function(e){this.setState({modalCom:!this.state.modalCom,action:"update",id:e._id,Status:e.Status,DATA_COMPANY:e})}},{key:"addTransaction",value:function(){var e=Object(r.a)(n.a.mark((function e(){var t,a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={company_id:this.state.DATA_COMPANY.Company_Id},e.next=3,N()({baseURL:f.a.BASE_URL,url:f.a.ADD_TRANSACTION,method:"POST",data:t});case 3:return 1!=(a=e.sent).data.is_success&&alert("C\xf3 l\u1ed7i x\u1ea3y ra khi th\xeam d\u1eef li\u1ec7u v\xe0o Transaction"),e.abrupt("return",a);case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"updateOrder",value:function(){var e=Object(r.a)(n.a.mark((function e(){var t,a,i,s,r;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.state,a=t.Status,i=t.DATA_COMPANY,s={Status:a,id:this.state.id},e.next=4,N()({baseURL:f.a.BASE_URL,url:f.a.UPDATE_STATUS_ORDER,method:"POST",data:s});case 4:if(1!=(r=e.sent).data.is_success){e.next=21;break}if("SPENDING"!=i.Status){e.next=19;break}return e.next=9,this.addTransaction();case 9:if(!e.sent.data.is_success){e.next=16;break}this.getData(),this.setState({modalCom:!this.state.modalCom}),this.setState({isLoading:!0}),e.next=19;break;case 16:return e.next=18,N()({baseURL:f.a.BASE_URL,url:f.a.UPDATE_STATUS_ORDER,method:"POST",data:{Status:"SPENDING",id:this.state.id}});case 18:this.setState({isLoading:!1});case 19:e.next=23;break;case 21:alert(r.data.message),this.setState({isLoading:!1});case 23:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getBadge",value:function(e){switch(e){case"ENABLE":return"primary";default:return"success"}}},{key:"toggle",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";this.setState({modal:!this.state.modal,image:"",url:"",isActive:!1,isLoading:!1,errors:{},action:e,position:1,data:[],updated:""})}},{key:"inputChange",value:function(e){this.setState(Object(i.a)({},e.target.name,e.target.value))}},{key:"goSearch",value:function(){this.getUsers()}},{key:"actionSearch",value:function(e,t){var a=this;this.setState(Object(i.a)({},t,e.target.value),(function(){a.searchKey()}))}},{key:"resetSearch",value:function(){var e=this;this.setState({key:"",keyEmail:"",keyPhone:"",keyFax:"",keyAddress:"",keyWebsite:"",keyCode:"",keyCompany:"",keyDateCreate:new Date,keyStatus:""},(function(){e.searchKey()}))}},{key:"render",value:function(){var e=this,t=this.state,a=t.data,i=t.key,s=t.action,c=t.arrPagination,l=t.indexPage,o=t.dataOrderDetail;return this.state.isLoading?Object(R.jsx)("div",{id:"page-loading",children:Object(R.jsxs)("div",{className:"three-balls",children:[Object(R.jsx)("div",{className:"ball ball1"}),Object(R.jsx)("div",{className:"ball ball2"}),Object(R.jsx)("div",{className:"ball ball3"})]})}):Object(R.jsxs)("div",{className:"animated fadeIn",children:[Object(R.jsx)(u.a,{children:Object(R.jsxs)(_.a,{children:[Object(R.jsx)("p",{style:y.success,children:this.state.updated}),Object(R.jsx)("p",{style:y.danger,children:this.state.deleted}),Object(R.jsxs)(h.a,{children:[Object(R.jsxs)(E.a,{children:[Object(R.jsx)("i",{className:"fa fa-align-justify"})," Danh s\xe1ch giao dich (Page: ",this.state.indexPage+1,")",Object(R.jsx)("div",{style:y.tags,children:Object(R.jsx)(A.W,{children:Object(R.jsx)(A.p,{sm:"12",lg:"12",children:Object(R.jsxs)(A.W,{children:[Object(R.jsx)(A.p,{sm:"12",lg:"4",children:Object(R.jsx)("div",{children:Object(R.jsx)(O.a,{style:y.searchInput,onChange:function(t){e.actionSearch(t,"key")},name:"key",value:i,placeholder:"T\u1eeb kh\xf3a"})})}),Object(R.jsx)(A.p,{sm:"12",lg:"4",children:Object(R.jsx)(A.X,{style:y.flexOption,onChange:function(t){e.actionSearch(t,"keyStatus")},custom:!0,children:["ACTIVE","DISABLE"].map((function(e,t){return Object(R.jsx)("option",{value:e,children:e})}))})}),Object(R.jsx)(A.p,{sm:"12",lg:"4",children:Object(R.jsx)(b.a,{color:"primary",style:{width:"100%",marginTop:5},size:"sm",onClick:function(t){e.resetSearch()},children:"L\xe0m m\u1edbi t\xecm ki\u1ebfm"})})]})})})})]}),Object(R.jsx)(T.a,{children:Object(R.jsxs)("table",{ble:!0,className:"table table-hover table-outline mb-0 d-none d-sm-table",children:[Object(R.jsx)("thead",{className:"thead-light",children:Object(R.jsxs)("tr",{children:[Object(R.jsx)("th",{className:"text-center",children:"STT."}),Object(R.jsx)("th",{className:"text-center",children:"M\xe3 c\xf4ng ty"}),Object(R.jsx)("th",{className:"text-center",children:"Ng\xe0y mua"}),Object(R.jsx)("th",{className:"text-center",children:"Ng\xe0y k\xedch ho\u1ea1t"}),Object(R.jsx)("th",{className:"text-center",children:"Ng\xe0y h\u1ebft h\u1ea1n"}),Object(R.jsx)("th",{className:"text-center",children:"Tr\u1ea1ng th\xe1i"}),Object(R.jsx)("th",{className:"text-center",children:"#"})]})}),Object(R.jsx)("tbody",{children:void 0!=a?a.map((function(t,a){return Object(R.jsxs)("tr",{children:[Object(R.jsx)("td",{className:"text-center",children:a+1}),Object(R.jsx)("td",{className:"text-center",children:t.Com_Name}),Object(R.jsx)("td",{className:"text-center",children:new Date(t.Create_At).toLocaleDateString()+" "+new Date(t.Create_At).toLocaleTimeString()}),Object(R.jsx)("td",{className:"text-center",children:new Date(t.Active_Date).toLocaleDateString()+" "+new Date(t.Active_Date).toLocaleTimeString()}),Object(R.jsx)("td",{className:"text-center",children:new Date(t.End_Date).toLocaleDateString()+" "+new Date(t.End_Date).toLocaleTimeString()}),Object(R.jsx)("td",{className:"text-center",children:Object(R.jsx)(A.a,{color:e.getBadge(t.Status),children:t.Status})}),Object(R.jsx)("td",{className:"text-center",children:Object(R.jsx)(b.a,{outline:!0,color:"primary",size:"sm",onClick:function(){var a=Object(r.a)(n.a.mark((function a(i){return n.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.getOrderDetail(t._id,t.Company_Id);case 2:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}(),children:"Chi ti\u1ebft"})})]},a)})):""})]})}),Object(R.jsx)(m.a,{children:1==c.length?"":Object(R.jsx)("div",{style:{float:"right",marginRight:"10px",padding:"10px"},children:Object(R.jsx)("tr",{style:y.row,children:c.map((function(t,a){return Object(R.jsx)("td",{children:Object(R.jsx)(b.a,{style:y.pagination,color:a==l?"primary":"danger",onClick:function(t){e.setState({data:c[a],indexPage:a})},children:a+1})})}))})})})]}),Object(R.jsxs)(h.a,{children:[Object(R.jsxs)(E.a,{children:[Object(R.jsx)("i",{className:"fa fa-align-justify"})," Chi ti\u1ebft giao d\u1ecbch c\u1ee7a ",this.state.currenCom," (M\xe3 c\xf4ng ty: ",this.state.currenCom_ID,") (Page: ",this.state.indexPage+1,")"]}),Object(R.jsx)(T.a,{children:Object(R.jsxs)("table",{ble:!0,className:"table table-hover table-outline mb-0 d-none d-sm-table",children:[Object(R.jsx)("thead",{className:"thead-light",children:Object(R.jsxs)("tr",{children:[Object(R.jsx)("th",{className:"text-center",children:"STT."}),Object(R.jsx)("th",{className:"text-center",children:"M\xe3 giao d\u1ecbch"}),Object(R.jsx)("th",{className:"text-center",children:"M\xe3 ph\u1ea7n c\u1ee9ng"}),Object(R.jsx)("th",{className:"text-center",children:"Ng\xe0y k\xedch ho\u1ea1t"}),Object(R.jsx)("th",{className:"text-center",children:"Ng\xe0y h\u1ebft h\u1ea1n"}),Object(R.jsx)("th",{className:"text-center",children:"Tr\u1ea1ng th\xe1i"})]})}),Object(R.jsx)("tbody",{children:void 0!=o?o.map((function(t,a){return Object(R.jsxs)("tr",{children:[Object(R.jsx)("td",{className:"text-center",children:a+1}),Object(R.jsx)("td",{className:"text-center",children:t.Transaction_ID}),Object(R.jsx)("td",{className:"text-center",children:t.HardWard_ID}),Object(R.jsx)("td",{className:"text-center",children:new Date(t.Active_Date).toLocaleDateString()+" "+new Date(t.Active_Date).toLocaleTimeString()}),Object(R.jsx)("td",{className:"text-center",children:new Date(t.End_Date).toLocaleDateString()+" "+new Date(t.End_Date).toLocaleTimeString()}),Object(R.jsx)("td",{className:"text-center",children:Object(R.jsx)(A.a,{color:e.getBadge(t.Status),children:t.Status})})]},a)})):""})]})})]})]})}),Object(R.jsxs)(j.a,{isOpen:this.state.modalCom,className:this.props.className,children:[Object(R.jsx)(S.a,{children:"new"==this.state.action?"T\u1ea1o m\u1edbi":"C\u1eadp nh\u1eadt"}),Object(R.jsx)(D.a,{children:"new"==s?"":Object(R.jsxs)("div",{children:[Object(R.jsx)("label",{style:y.flexLabel,htmlFor:"tag",children:"Status    "}),Object(R.jsxs)("select",{style:y.flexOption,name:"Status",onChange:function(t){return e.onChange("Status",t.target.value)},children:[Object(R.jsx)("option",{value:this.state.Status,children:""==this.state.Status?" - - - - - - - - - - ":this.state.Status}),["SPENDING","COMPLETE"].map((function(e,t){return Object(R.jsx)("option",{value:e,children:e})}))]})]})}),Object(R.jsxs)(g.a,{children:[Object(R.jsx)(b.a,{color:"primary",onClick:function(t){"new"===e.state.action?e.addCompany():e.updateOrder()},disabled:this.state.isLoading,children:"Save"})," ",Object(R.jsx)(b.a,{color:"secondary",onClick:function(t){return e.toggleModal("new")},children:"Cancel"})]})]}),Object(R.jsxs)(j.a,{isOpen:this.state.modalDelete,toggle:function(t){return e.setState({modalDelete:!e.state.modalDelete,delete:null})},className:this.props.className,children:[Object(R.jsx)(S.a,{toggle:function(t){return e.setState({modalDelete:!e.state.modalDelete,delete:null})},children:"Delete"}),Object(R.jsx)(D.a,{children:Object(R.jsx)("label",{htmlFor:"tag",children:'Do you want to delete user "'.concat(this.state.delete?this.state.delete.Email:"",'" ?')})}),Object(R.jsxs)(g.a,{children:[Object(R.jsx)(b.a,{color:"primary",onClick:function(t){return e.delete()},disabled:this.state.isLoading,children:"Delete"})," ",Object(R.jsx)(b.a,{color:"secondary",onClick:function(t){return e.setState({modalDelete:!e.state.modalDelete,delete:null})},children:"Cancel"})]})]})]})}}]),a}(p.Component),y={pagination:{marginRight:"5px"},flexLabel:{width:100},flexOption:{width:160,margin:"1px"},a:{textDecoration:"none"},floatRight:{float:"right",marginTop:"3px"},spinner:{width:"30px"},center:{textAlign:"center"},tbody:{height:"380px",overflowY:"auto"},wh12:{width:"8%",float:"left",height:"80px"},wh15:{width:"15%",float:"left",height:"80px"},w5:{width:"12%",float:"left",height:"80px"},wa10:{width:"5%",float:"left",height:"80px"},row:{float:"left",width:"100%"},success:{color:"green"},danger:{color:"red"},mgl5:{marginLeft:"5px"},tags:{float:"right",marginRight:"5px"},searchInput:{width:"160px",display:"inline-block",margin:"1px"},userActive:{color:"green"},userPending:{color:"red"},nagemonNameCol:{width:"328px"},image:{width:"100px",height:"100px",borderRadius:"99999px"}};t.default=x},642:function(e,t,a){"use strict";var i,s=a(165);t.a=(i={BASE_URL:"https://api-soida.applamdep.com",BASE_URL_CURRENT:"https://id.applamdep.com/",LIST_USER:"/api/list-user",LIST_USER_WITH_ID:"/api/list-user?id=",ADD_USER:"/api/add-user",UPDATE_USER:"/api/update-user",DELETE_USER:"/api/delete-user",LOGIN_ADMIN:"/api/login_admin",GET_SHOP:"/api/get-shop",GET_SALE:"/api/get-sale",GET_COEFFICIENT:"/api/calculator-coefficient-user",GET_COEFFICIENT_PER_SALE:"/api/calculator-coefficient-user-per-sale",GET_USER_SALE_BY_MONTH:"/api/get-user-of-sale-by-month",CALCULATOR_ALL_USER_OF_COMPANY:"/api/calculator-all-user-company",CALCULATOR_ALL_USER_OF_SALE:"/api/calculator-all-user-of-sale",GET_SEEDER:"/api/get-seed",GET_SALE_NAME:"/api/get-name-sale",GET_USER_BY_ID:"/api/get-user-byID",LIST_CUSTOMER:"/api/list-customer",LIST_CUSTOMER_BY_MONTH:"/api/get-user-sale-by-month",LIST_TYPEKEY:"/api/list-typekey",LIST_TYPEKEY_WITH_ID:"/api/list-typekey?id=",ADD_TYPEKEY:"/api/add-typekey",UPDATE_TYPEKEY:"/api/update-typekey",DELETE_TYPEKEY:"/api/delete-typekey",LIST_HARDWARE:"/api/list-hardware",LIST_HARDWARE_WITH_ID:"/api/list-hardware?id=",ADD_HARDWARE:"/api/add-hardware",UPDATE_HARDWARE:"/api/update-hardware",DELETE_HARDWARE:"/api/delete-hardware",LIST_ORDER:"/api/list-order",ADD_ORDER:"/api/add-order",UPDATE_STATUS_ORDER:"/api/update-status-order",CHECK_OUT:"/api/checkout-order",LIST_TRANSACTION:"/api/list-transaction",ADD_TRANSACTION:"/api/add-transaction",LIST_CHECK_OUT:"/api/list-checkout",LIST_HARDWARE_CHECKOUT:"/api/get-list-hardward-by-check-out",UPDATE_STATUS_CHECKOUT:"/api/update-status-hardware",LIST_ORDER_DETAIL:"/api/list-orderdetail",ADD_ORDER_DETAIL:"/api/add-orderdetail",LIST_ROLE:"/api/list-role",LIST_ROLE_WITH_ID:"/api/list-role?id=",ADD_ROLE:"/api/add-role",UPDATE_ROLE:"/api/update-role",DELETE_ROLE:"/api/delete-role",LIST_PACKAGE:"/api/list-package",ADD_PACKAGE:"/api/add-package",UPDATE_PACKAGE:"/api/update-package",DELETE_PACKAGE:"/api/delete-package",PLUGIN_DATA_PACKAGE:"/api/get-name-package",LIST_SALELOG:"/api/list-salelog",LIST_SALELOG_WITH_ID:"/api/list-salelog?id=",ADD_SALELOG:"/api/add-salelog",UPDATE_SALELOG:"/api/update-salelog",DELETE_SALELOG:"/api/delete-salelog",DATA_SALE:"/api/get-data-sale",LIST_SALE:"/api/list-sale",LIST_SALE_WITH_ID:"/api/list-sale?id=",ADD_SALE:"/api/add-sale",UPDATE_SALE:"/api/update-sale",DELETE_SALE:"/api/delete-sale",LIST_KEYORDER:"/api/list-keyorder",LIST_KEYORDER_WITH_ID:"/api/list-keyorder?id=",ADD_KEYORDER:"/api/add-keyorder",UPDATE_KEYORDER:"/api/update-keyorder",DELETE_KEYORDER:"/api/delete-keyorder",LIST_KEY:"/api/list-key",LIST_KEY_WITH_ID:"/api/list-key?id=",ADD_KEY:"/api/add-key",UPDATE_KEY:"/api/update-key",DELETE_KEY:"/api/delete-key",PLUGIN_LIST_COMPANY:"/api/plugin-list-company",PLUGIN_LIST_COMPANY_BY_ID:"/api/plugin-list-company-by-id",PLUGIN_LIST_COMPANY_WITH_ID:"/api/plugin-list-company?id=",PLUGIN_ADD_COMPANY:"/api/plugin-add-company",PLUGIN_UPDATE_COMPANY:"/api/plugin-update-company",PLUGIN_DELETE_COMPANY:"/api/plugin-delete-company",PLUGIN_DATA_COMPANY:"/api/plugin-get-data-company",LIST_COMPANY:"/api/list-company",LIST_COMPANY_WITH_ID:"/api/list-company?id=",ADD_COMPANY:"/api/add-company",UPDATE_COMPANY:"/api/update-company",DELETE_COMPANY:"/api/delete-company",DATA_COMPANY:"/api/get-data-company",LIST_LINK:"/api/list-link",LIST_LINK_WITH_ID:"/api/list-link?id=",ADD_LINK:"/api/add-link",UPDATE_LINK:"/api/update-link",DELETE_LINK:"/api/delete-link","GET-LINK-BY-ID":"/api/link-by-id",LIST_FEATURE:"/api/list-feature",ADD_FEATURE:"/api/add-feature",UPDATE_FEATURE:"/api/update-feature",DELETE_FEATURE:"/api/delete-feature",DATA_CHOOSE_FEATURE:"/api/get-feature-choose",LIST_PLUGIN_ORDER:"/api/plugin-list-order",COUNT_PLUGIN_ORDER:"/api/plugin-count-order",LIST_PLUGIN_ORDER_BY_ID:"/api/plugin-list-order-by-id",LIST_PLUGIN_ORDER_FOR_ADMIN:"/api/plugin-list-order-for-admin",LIST_ORDER_BY_SALE:"/api/plugin-list-order-by-saleid",ADD_PLUGIN_ORDER:"/api/plugin-add-order",UPDATE_PLUGIN_ORDER:"/api/plugin-update-order",DELETE_PLUGIN_ORDER:"/api/plugin-delete-order",UPDATE_SLUG:"/api/plugin-update-slug",PLUGIN_LIST_USER:"/api/plugin-list-user",PLUGIN_ALL_USER:"/api/plugin-all-user",PLUGIN_ADD_USER:"/api/plugin-add-user",PLUGIN_ADD_SALE:"/api/plugin-add-sale",PLUGIN_UPDATE_USER:"/api/plugin-update-user",PLUGIN_UPDATE_USER_COMPANY:"/api/plugin-update-user-company",PLUGIN_DELETE_USER:"/api/plugin-delete-user",PLUGIN_RESET_PASSWORD:"/api/plugin-reset-password",PLUGIN_CHANGE_PASSWORD:"/api/plugin-change",PLUGIN_CHECK_LINK:"/api/plugin-check-link",PLUGIN_UPDATE_PASSWORD:"/api/plugin-update-password",PLUGIN_UPDATE_STATUS:"/api/plugin-update-status",PLUGIN_LOGIN_ADMIN:"/api/plugin-login_admin",PLUGIN_FORGOT_PASS:"/api/plugin-forgot-password",PLUGIN_GET_USER_BYID:"/api/plugin-get-user-byID",PLUGIN_GET_USER_BY_BODY:"/api/plugin-get-user-byID-with-body",PLUGIN_LIST_ROLE:"/api/plugin-list-role",PLUGIN_ADD_ROLE:"/api/plugin-add-role",PLUGIN_UPDATE_ROLE:"/api/plugin-update-role",PLUGIN_DELETE_ROLE:"/api/plugin-delete-role",CUS_RES_LIST:"/api/list-customer-request",CUS_RES_LIST_COMPANY:"/api/list-customer-request-for-company",CUS_RES_ADD:"/api/add-customer-request",CUS_RES_UPDATE:"/api/update-customer-request",CUS_RES_DELETE:"/api/delete-customer-request",REWARD_INFO_LIST:"/api/list-reward-info",REWARD_INFO_LIST_COMPANY:"/api/list-reward-info-for-company",REWARD_INFO_ADD:"/api/add-reward-info",REWARD_INFO_UPDATE:"/api/update-reward-info",REWARD_INFO_DELETE:"/api/delete-reward-info",REWARD_TRANS_LIST:"/api/list-reward-trans",REWARD_TRANS_ADD:"/api/list-reward-trans",REWARD_TRANS_UPDATE:"/api/update-reward-trans",REWARD_TRANS_DELETE:"/api/delete-reward-trans",TYPE_REQUEST_LIST:"/api/list-type-request",TYPE_REQUEST_ADD:"/api/add-type-request",TYPE_REQUEST_UPDATE:"/api/update-type-request",TYPE_REQUEST_DELETE:"/api/delete-type-request"},Object(s.a)(i,"LIST_CUSTOMER","/api/list-customer"),Object(s.a)(i,"LIST_CUSTOMER_FOR_COMPANY","/api/list-customer-for-company"),Object(s.a)(i,"LIST_CUSTOMER_FOR_COMPANY_BY_MONTH","/api/list-customer-for-company-by-month"),Object(s.a)(i,"LIST_SUGGEST_ITEM","/itemSdk"),Object(s.a)(i,"LIST_SUGGEST_ITEM_COMPANY","/itemSdk/"),Object(s.a)(i,"LIST_SUGGEST_ITEM_ADMIN","/itemSdk/admin/"),Object(s.a)(i,"SEARCH_SUGGEST_ITEM_ADMIN","/itemSdk/admin/search/"),Object(s.a)(i,"SEARCH_SUGGEST_ITEM_COMPANY","/itemSdk/search/"),Object(s.a)(i,"ADD_SUGGEST_ITEM","/itemSdk"),Object(s.a)(i,"UPDATE_SUGGEST_ITEM","/itemSdk/"),Object(s.a)(i,"UPLOAD_IMAGE","/itemSdk/upload_image"),Object(s.a)(i,"UPLOAD_IMAGE_MAKEUP","/itemSdk/upload_image_makeup"),Object(s.a)(i,"DELETE_SUGGEST_ITEM","/itemSdk/deleteItem"),Object(s.a)(i,"LIST_SDK","/sdk"),Object(s.a)(i,"LIST_BRAND","/brands"),Object(s.a)(i,"LIST_BRAND_COMPANY","/brands/"),Object(s.a)(i,"ADD_BRAND","/add-brand"),Object(s.a)(i,"UPDATE_BRAND","/update-brand"),Object(s.a)(i,"DELETE_BRAND","/delete-brand"),Object(s.a)(i,"LIST_BRAND_PLUGIN","/brand-plugin"),Object(s.a)(i,"LIST_BRAND_PLUGIN_COMPANY","/brand-plugin/"),Object(s.a)(i,"ADD_BRAND_PLUGIN","/add-brand-plugin"),Object(s.a)(i,"UPDATE_BRAND_PLUGIN","/update-brand-plugin"),Object(s.a)(i,"DELETE_BRAND_PLUGIN","/delete-brand-plugin"),Object(s.a)(i,"LIST_PRODUCT","/product"),Object(s.a)(i,"LIST_PRODUCT_COMPANY","/product/"),Object(s.a)(i,"ADD_PRODUCT","/add-product"),Object(s.a)(i,"UPDATE_PRODUCT","/update-product"),Object(s.a)(i,"DELETE_PRODUCT","/delete-product"),Object(s.a)(i,"LIST_TYPE","/types"),Object(s.a)(i,"LIST_TYPE_COMPANY","/types/"),Object(s.a)(i,"ADD_TYPE","/add-type"),Object(s.a)(i,"UPDATE_TYPE","/update-type"),Object(s.a)(i,"DELETE_TYPE","/delete-type"),Object(s.a)(i,"LIST_COLOR","/colors"),Object(s.a)(i,"LIST_COLOR_COMPANY","/colors/"),Object(s.a)(i,"LIST_COLOR_SELECT","/color-select"),Object(s.a)(i,"ADD_COLOR","/add-color"),Object(s.a)(i,"UPDATE_COLOR","/update-color"),Object(s.a)(i,"DELETE_COLOR","/delete-color"),Object(s.a)(i,"LIST_HISTORY_SKIN","/api/get-history-skin"),Object(s.a)(i,"LIST_HISTORY_SKIN_BY_CONDITION","/api/get-history-skin-by-condition"),Object(s.a)(i,"ADD_HISTORY_SKIN","/api/add-history-skin"),Object(s.a)(i,"LIST_TYPE_PRODUCT","/api/list-type-product"),Object(s.a)(i,"ADD_TYPE_PRODUCT","/api/add-type-product"),Object(s.a)(i,"UPDATE_TYPE_PRODUCT","/api/update-type-product"),Object(s.a)(i,"DELETE_TYPE_PRODUCT","/api/delete-type-product"),Object(s.a)(i,"LIST_TYPE_SDK","/api/list-type-sdk"),Object(s.a)(i,"ADD_TYPE_SDK","/api/add-type-sdk"),Object(s.a)(i,"UPDATE_TYPE_SDK","/api/update-type-sdk"),Object(s.a)(i,"DELETE_TYPE_SDK","/api/delete-type-sdk"),Object(s.a)(i,"LIST_CONTACT_CUSTOMER","/api/list-contact-customers"),Object(s.a)(i,"ADD_CONTACT_CUSTOMER","/api/add-contact-customers"),Object(s.a)(i,"UPDATE_CONTACT_CUSTOMER","/api/update-contact-customers"),Object(s.a)(i,"DELETE_CONTACT_CUSTOMER","/api/delete-contact-customers"),Object(s.a)(i,"UPDATE_CONTACT_STATUS","/api/update-contact-status"),i)},649:function(e,t,a){"use strict";function i(e,t,a,i,s,n,r){try{var c=e[n](r),l=c.value}catch(o){return void a(o)}c.done?t(l):Promise.resolve(l).then(i,s)}function s(e){return function(){var t=this,a=arguments;return new Promise((function(s,n){var r=e.apply(t,a);function c(e){i(r,s,n,c,l,"next",e)}function l(e){i(r,s,n,c,l,"throw",e)}c(void 0)}))}}a.d(t,"a",(function(){return s}))},666:function(e,t,a){"use strict";var i=a(12),s=a(29),n=a(2),r=a.n(n),c=a(64),l=a.n(c),o=a(638),d=a.n(o),p=a(639),u=l.a.oneOfType([l.a.number,l.a.string]),_={tag:p.n,noGutters:l.a.bool,className:l.a.string,cssModule:l.a.object,form:l.a.bool,xs:u,sm:u,md:u,lg:u,xl:u},h={tag:"div",widths:["xs","sm","md","lg","xl"]},E=function(e){var t=e.className,a=e.cssModule,n=e.noGutters,c=e.tag,l=e.form,o=e.widths,u=Object(s.a)(e,["className","cssModule","noGutters","tag","form","widths"]),_=[];o.forEach((function(t,a){var i=e[t];if(delete u[t],i){var s=!a;_.push(s?"row-cols-"+i:"row-cols-"+t+"-"+i)}}));var h=Object(p.j)(d()(t,n?"no-gutters":null,l?"form-row":"row",_),a);return r.a.createElement(c,Object(i.a)({},u,{className:h}))};E.propTypes=_,E.defaultProps=h,t.a=E},667:function(e,t,a){"use strict";var i=a(12),s=a(29),n=a(2),r=a.n(n),c=a(64),l=a.n(c),o=a(638),d=a.n(o),p=a(639),u=l.a.oneOfType([l.a.number,l.a.string]),_=l.a.oneOfType([l.a.bool,l.a.number,l.a.string,l.a.shape({size:l.a.oneOfType([l.a.bool,l.a.number,l.a.string]),order:u,offset:u})]),h={tag:p.n,xs:_,sm:_,md:_,lg:_,xl:_,className:l.a.string,cssModule:l.a.object,widths:l.a.array},E={tag:"div",widths:["xs","sm","md","lg","xl"]},O=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},b=function(e){var t=e.className,a=e.cssModule,n=e.widths,c=e.tag,l=Object(s.a)(e,["className","cssModule","widths","tag"]),o=[];n.forEach((function(t,i){var s=e[t];if(delete l[t],s||""===s){var n=!i;if(Object(p.h)(s)){var r,c=n?"-":"-"+t+"-",u=O(n,t,s.size);o.push(Object(p.j)(d()(((r={})[u]=s.size||""===s.size,r["order"+c+s.order]=s.order||0===s.order,r["offset"+c+s.offset]=s.offset||0===s.offset,r)),a))}else{var _=O(n,t,s);o.push(_)}}})),o.length||o.push("col");var u=Object(p.j)(d()(t,o),a);return r.a.createElement(c,Object(i.a)({},l,{className:u}))};b.propTypes=h,b.defaultProps=E,t.a=b},668:function(e,t,a){"use strict";var i=a(12),s=a(29),n=a(2),r=a.n(n),c=a(64),l=a.n(c),o=a(638),d=a.n(o),p=a(639),u={tag:p.n,inverse:l.a.bool,color:l.a.string,body:l.a.bool,outline:l.a.bool,className:l.a.string,cssModule:l.a.object,innerRef:l.a.oneOfType([l.a.object,l.a.string,l.a.func])},_=function(e){var t=e.className,a=e.cssModule,n=e.color,c=e.body,l=e.inverse,o=e.outline,u=e.tag,_=e.innerRef,h=Object(s.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),E=Object(p.j)(d()(t,"card",!!l&&"text-white",!!c&&"card-body",!!n&&(o?"border":"bg")+"-"+n),a);return r.a.createElement(u,Object(i.a)({},h,{className:E,ref:_}))};_.propTypes=u,_.defaultProps={tag:"div"},t.a=_},669:function(e,t,a){"use strict";var i=a(12),s=a(29),n=a(2),r=a.n(n),c=a(64),l=a.n(c),o=a(638),d=a.n(o),p=a(639),u={tag:p.n,className:l.a.string,cssModule:l.a.object},_=function(e){var t=e.className,a=e.cssModule,n=e.tag,c=Object(s.a)(e,["className","cssModule","tag"]),l=Object(p.j)(d()(t,"card-header"),a);return r.a.createElement(n,Object(i.a)({},c,{className:l}))};_.propTypes=u,_.defaultProps={tag:"div"},t.a=_},670:function(e,t,a){"use strict";var i=a(12),s=a(29),n=a(2),r=a.n(n),c=a(64),l=a.n(c),o=a(638),d=a.n(o),p=a(639),u={tag:p.n,className:l.a.string,cssModule:l.a.object,innerRef:l.a.oneOfType([l.a.object,l.a.string,l.a.func])},_=function(e){var t=e.className,a=e.cssModule,n=e.innerRef,c=e.tag,l=Object(s.a)(e,["className","cssModule","innerRef","tag"]),o=Object(p.j)(d()(t,"card-body"),a);return r.a.createElement(c,Object(i.a)({},l,{className:o,ref:n}))};_.propTypes=u,_.defaultProps={tag:"div"},t.a=_},672:function(e,t,a){"use strict";var i=a(12),s=a(29),n=a(644),r=a(35),c=a(2),l=a.n(c),o=a(64),d=a.n(o),p=a(638),u=a.n(p),_=a(639),h={children:d.a.node,type:d.a.string,size:d.a.oneOfType([d.a.number,d.a.string]),bsSize:d.a.string,valid:d.a.bool,invalid:d.a.bool,tag:_.n,innerRef:d.a.oneOfType([d.a.object,d.a.func,d.a.string]),plaintext:d.a.bool,addon:d.a.bool,className:d.a.string,cssModule:d.a.object},E=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(n.a)(a)),a.focus=a.focus.bind(Object(n.a)(a)),a}Object(r.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.focus=function(){this.ref&&this.ref.focus()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,n=e.type,r=e.bsSize,c=e.valid,o=e.invalid,d=e.tag,p=e.addon,h=e.plaintext,E=e.innerRef,O=Object(s.a)(e,["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"]),b=["radio","checkbox"].indexOf(n)>-1,T=new RegExp("\\D","g"),m=d||("select"===n||"textarea"===n?n:"input"),j="form-control";h?(j+="-plaintext",m=d||"input"):"file"===n?j+="-file":"range"===n?j+="-range":b&&(j=p?null:"form-check-input"),O.size&&T.test(O.size)&&(Object(_.p)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),r=O.size,delete O.size);var S=Object(_.j)(u()(t,o&&"is-invalid",c&&"is-valid",!!r&&"form-control-"+r,j),a);return("input"===m||d&&"function"===typeof d)&&(O.type=n),O.children&&!h&&"select"!==n&&"string"===typeof m&&"select"!==m&&(Object(_.p)('Input with a type of "'+n+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete O.children),l.a.createElement(m,Object(i.a)({},O,{ref:E,className:S,"aria-invalid":o}))},t}(l.a.Component);E.propTypes=h,E.defaultProps={type:"text"},t.a=E},692:function(e,t,a){"use strict";var i=a(12),s=a(29),n=a(644),r=a(35),c=a(2),l=a.n(c),o=a(64),d=a.n(o),p=a(638),u=a.n(p),_=a(639),h={active:d.a.bool,"aria-label":d.a.string,block:d.a.bool,color:d.a.string,disabled:d.a.bool,outline:d.a.bool,tag:_.n,innerRef:d.a.oneOfType([d.a.object,d.a.func,d.a.string]),onClick:d.a.func,size:d.a.string,children:d.a.node,className:d.a.string,cssModule:d.a.object,close:d.a.bool},E=function(e){function t(t){var a;return(a=e.call(this,t)||this).onClick=a.onClick.bind(Object(n.a)(a)),a}Object(r.a)(t,e);var a=t.prototype;return a.onClick=function(e){if(!this.props.disabled)return this.props.onClick?this.props.onClick(e):void 0;e.preventDefault()},a.render=function(){var e=this.props,t=e.active,a=e["aria-label"],n=e.block,r=e.className,c=e.close,o=e.cssModule,d=e.color,p=e.outline,h=e.size,E=e.tag,O=e.innerRef,b=Object(s.a)(e,["active","aria-label","block","className","close","cssModule","color","outline","size","tag","innerRef"]);c&&"undefined"===typeof b.children&&(b.children=l.a.createElement("span",{"aria-hidden":!0},"\xd7"));var T="btn"+(p?"-outline":"")+"-"+d,m=Object(_.j)(u()(r,{close:c},c||"btn",c||T,!!h&&"btn-"+h,!!n&&"btn-block",{active:t,disabled:this.props.disabled}),o);b.href&&"button"===E&&(E="a");var j=c?"Close":null;return l.a.createElement(E,Object(i.a)({type:"button"===E&&b.onClick?"button":void 0},b,{className:m,ref:O,onClick:this.onClick,"aria-label":a||j}))},t}(l.a.Component);E.propTypes=h,E.defaultProps={color:"secondary",tag:"button"},t.a=E},903:function(e,t,a){"use strict";var i=a(12),s=a(29),n=a(2),r=a.n(n),c=a(64),l=a.n(c),o=a(638),d=a.n(o),p=a(639),u={tag:p.n,className:l.a.string,cssModule:l.a.object},_=function(e){var t=e.className,a=e.cssModule,n=e.tag,c=Object(s.a)(e,["className","cssModule","tag"]),l=Object(p.j)(d()(t,"card-footer"),a);return r.a.createElement(n,Object(i.a)({},c,{className:l}))};_.propTypes=u,_.defaultProps={tag:"div"},t.a=_}}]);
//# sourceMappingURL=43.1e57fec6.chunk.js.map