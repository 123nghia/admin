(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[57],{1259:function(e,t,a){"use strict";a.r(t);var i=a(165),n=a(114),r=a.n(n),s=a(649),l=a(167),c=a(168),d=a(170),o=a(169),p=a(2),u=a(668),_=a(669),h=a(672),E=a(692),O=a(670),S=a(1295),T=a(1236),A=a(1237),D=a(1238),m=a(653),L=a(171),g=a(724),j=(a(662),a(642)),b=a(654),I=a(655),R=a.n(I),N=a(755),U=a.n(N),P=a(17),x=new Headers,f=localStorage.getItem("auth");x.append("Authorization","Bearer "+f),x.append("Content-Type","application/json");var y=function(e){Object(d.a)(a,e);var t=Object(o.a)(a);function a(e){var i;return Object(l.a)(this,a),(i=t.call(this,e)).getUserSale=function(){var e=Object(s.a)(r.a.mark((function e(t){var a,n,s,l,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=i.state.company_id,i.setState({isLoading:!0}),n=JSON.parse(a),s={condition:{Company_Id:n.company_id,Sale_Id:t}},e.next=6,R()({baseURL:j.a.BASE_URL,url:j.a.LIST_CUSTOMER,method:"POST",data:s,headers:i.state.token});case 6:l=e.sent,i.pagination(l.data.data),i.setState({dataApi:l.data.data}),c=0,l.data.data.map((function(e){"Actived"==e.Status&&(c+=1)})),i.setState({isLoading:!1,totalActive:c});case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),i.getAllData=Object(s.a)(r.a.mark((function e(){var t,a,n,s;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i.state.company_id,i.setState({isLoading:!0}),e.next=4,R()({baseURL:j.a.BASE_URL,url:j.a.LIST_CUSTOMER,method:"POST",headers:i.state.token});case 4:t=e.sent,a=[],n=0;case 7:if(!(n<t.data.data.length)){e.next=17;break}return e.next=10,i.getSaleDataOfUser(t.data.data[n].Sale_Id);case 10:s=e.sent,t.data.data[n].Address=s.Address,t.data.data[n].NameSale=s.Name,a.push(t.data.data[n]);case 14:n++,e.next=7;break;case 17:0==a.length?i.setState({hidden_all:!1}):i.setState({hidden_all:!0}),i.setState({dataApi:a}),i.pagination_all(a),i.setState({isLoading:!1});case 21:case"end":return e.stop()}}),e)}))),i.getData=Object(s.a)(r.a.mark((function e(){var t,a,n,s,l,c,d,o;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=i.state,a=t.company_id,n=t.role,i.setState({isLoading:!0}),s=JSON.parse(a),l={company_id:s.company_id},c={condition:{Company_Id:s.company_id,Sale_Id:s.sale_id}},"ADMIN"!=n&&"ADMINSALE"!=n){e.next=11;break}return e.next=8,R()({baseURL:j.a.BASE_URL,url:j.a.GET_SHOP,method:"POST",headers:i.state.token});case 8:d=e.sent,e.next=21;break;case 11:if("SHOPMANAGER"!=n){e.next=17;break}return e.next=14,R()({baseURL:j.a.BASE_URL,url:j.a.GET_SALE,method:"POST",data:l,headers:i.state.token});case 14:d=e.sent,e.next=21;break;case 17:if("SALES"!=n){e.next=21;break}return e.next=20,R()({baseURL:j.a.BASE_URL,url:j.a.LIST_CUSTOMER,method:"POST",data:c,headers:i.state.token});case 20:d=e.sent;case 21:i.pagination(d.data.data),i.setState({dataApi:d.data.data}),o=0,d.data.data.map((function(e){"Actived"==e.Status&&(o+=1)})),i.setState({isLoading:!1,totalActive:o});case 26:case"end":return e.stop()}}),e)}))),i.state={data:[],key:"",keyName:"",keyEmail:"",keyPhone:"",keyGender:"",keyStatus:"",activePage:1,page:1,itemsCount:0,limit:20,totalActive:0,modalCom:!1,viewingUser:{},communities:[],updated:"",dataApi:[],action:"new",Email:"",Address:"",Name:"",Phone:"",Gender:"Nam",Company_Id:"",Role_Id:"",UserName:"",Password:"",Sale_Id:"",Code:"",Status:"",modalDelete:!1,delete:null,dataCompany:[],currentCompany:"",dataSale:[],currentSale:"",dataRole:[],currentRole:"",arrPagination:[],indexPage:0,arrPagination_All:[],indexPage_All:0,role:localStorage.getItem("role"),company_id:localStorage.getItem("user"),see_detail:!0,month:0,arrTemp:[],arrMonth:["01","02","03","04","05","06","07","08","09","10","11","12"],arrMonthWithDefault:["00","01","02","03","04","05","06","07","08","09","10","11","12"],isLoading:!0,hidden:!1,nameSale:"",dataAll:[],hidden_all:!1,isSale:!1,token:{Authorization:"Bearer ".concat(localStorage.getItem("token"))},arrAllUser:[]},i}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=Object(s.a)(r.a.mark((function e(){var t,a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(this.getAllData(),t=JSON.parse(localStorage.getItem("url")),a=0;a<t.length;a++)"#"+t[a].to==window.location.hash&&1==t[a].hidden&&(window.location.href="#/");case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getSeeder",value:function(){var e=Object(s.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R()({baseURL:j.a.BASE_URL,url:j.a.GET_SEEDER,method:"POST",data:{email:"ktpm489@gmail.com"}});case 2:t=e.sent,this.props.onSaveSeed(t.data.data),this.props.history.push("/history");case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"pagination",value:function(e){var t,a,i,n=[];for(t=0,a=e.length;t<a;t+=5)i=e.slice(t,t+5),n.push(i);0==n.length?this.setState({hidden:!1}):this.setState({hidden:!0}),this.setState({arrPagination:n,data:n[this.state.indexPage]})}},{key:"pagination_all",value:function(e){var t,a,i,n=[];for(t=0,a=e.length;t<a;t+=5)i=e.slice(t,t+5),n.push(i);0==n.length?this.setState({hidden_all:!1}):this.setState({hidden_all:!0}),this.setState({arrPagination_All:n,dataAll:n[this.state.indexPage_All]})}},{key:"countType",value:function(e,t){return e.filter((function(e){return e.Phone==t})).length}},{key:"getSaleDataOfUser",value:function(){var e=Object(s.a)(r.a.mark((function e(t){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R()({baseURL:j.a.BASE_URL,url:j.a.DATA_SALE,method:"POST",data:{sale_id:t}});case 2:return a=e.sent,console.log(a.data.data[0]),e.abrupt("return",{Address:a.data.data[0].Address,Name:a.data.data[0].Name});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"getRoleData",value:function(){var e=Object(s.a)(r.a.mark((function e(t){var a,i;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R()({baseURL:j.a.BASE_URL,url:j.a.LIST_ROLE,method:"GET",headers:this.state.token});case 2:if(a=e.sent,""==t&&void 0==t){e.next=8;break}return e.next=6,R()({baseURL:j.a.BASE_URL,url:j.a.LIST_ROLE_WITH_ID+t,method:"GET",headers:this.state.token});case 6:null==(i=e.sent).data.data&&void 0==i.data.data||this.setState({currentRole:i.data.data.Name});case 8:this.setState({dataRole:a.data.data});case 9:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"inputChange",value:function(e){this.setState(Object(i.a)({},e.target.name,e.target.value))}},{key:"getDataUser_ForSale",value:function(){var e=Object(s.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("SALES"!=this.state.role){e.next=5;break}return this.setState({isSale:!0,month:t}),e.next=5,this.tableUserSale_forSale(t);case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"check",value:function(){var e=Object(s.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("00"!=t.target.value){e.next=5;break}this.getData(),this.setState({isSale:!1}),e.next=8;break;case 5:return e.next=7,this.getDataUser_ForSale(t.target.value);case 7:this.setState({month:t.target.value});case 8:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getBadge",value:function(e){switch(e){case"Actived":return"success";case"Inactive":return"secondary";case"Locked":return"warning";case"Deactived":return"danger";default:return"primary"}}},{key:"searchKey",value:function(){var e=this.state,t=e.indexPage_All,a=e.key,i=e.keyStatus;if(""!=a||""!=i){var n=[];this.state.dataApi.map((function(e){(e.Name.toLocaleUpperCase().includes(a.toLocaleUpperCase())||e.Email.toLocaleUpperCase().includes(a.toLocaleUpperCase())||e.Phone.toLocaleUpperCase().includes(a.toLocaleUpperCase()))&&e.Status.toLocaleUpperCase().includes(i.toLocaleUpperCase())&&n.push(e)}));var r=0;n.map((function(e){"Actived"==e.Status&&(r+=1)})),this.setState({dataAll:n,totalActive:r})}else{var s=0;this.state.dataApi.map((function(e){"Actived"==e.Status&&(s+=1)})),this.setState({dataAll:this.state.arrPagination_All[t],totalActive:s})}}},{key:"actionSearch",value:function(e,t){var a=this;this.setState(Object(i.a)({},t,e.target.value),(function(){a.searchKey()}))}},{key:"resetSearch",value:function(){var e=this;this.setState({keyName:"",keyEmail:"",keyPhone:"",keyGender:"",keyStatus:""},(function(){e.searchKey()}))}},{key:"render",value:function(){var e=this,t=this.state,a=t.key,i=t.dataCompany,n=t.dataAll,r=t.arrPagination_All,s=t.indexPage_All,l=t.currentCompany,c=t.action,d=t.dataRole,o=t.currentRole,p=t.hidden_all;return this.state.isLoading?Object(P.jsx)("div",{className:"d-flex justify-content-center",children:Object(P.jsx)(U.a,{type:"balls",color:"orange",height:"5%",width:"5%"})}):Object(P.jsxs)("div",{children:[Object(P.jsxs)(u.a,{children:[Object(P.jsxs)(_.a,{children:["Danh s\xe1ch kh\xe1ch h\xe0ng ( Page: ",this.state.indexPage+1," )",Object(P.jsx)("div",{style:C.tags,children:Object(P.jsxs)(m.W,{children:[Object(P.jsx)(m.p,{sm:"6",lg:"12",children:Object(P.jsxs)(m.W,{children:[Object(P.jsx)(m.p,{sm:"6",lg:"4",children:Object(P.jsx)("div",{children:Object(P.jsx)(h.a,{style:C.searchInput,onChange:function(t){e.actionSearch(t,"key")},name:"key",value:a,placeholder:"T\u1eeb kh\xf3a"})})}),Object(P.jsx)(m.p,{sm:"6",lg:"4",children:Object(P.jsx)(m.X,{style:C.flexOption,onChange:function(t){e.actionSearch(t,"keyStatus")},custom:!0,children:["Actived","Deactived","Locked"].map((function(e,t){return Object(P.jsx)("option",{value:e,children:e})}))})}),Object(P.jsx)(m.p,{sm:"6",lg:"4",children:Object(P.jsx)(E.a,{color:"primary",style:{width:"100%",marginTop:5},size:"sm",onClick:function(t){e.resetSearch()},children:"L\xe0m m\u1edbi t\xecm ki\u1ebfm"})})]})}),Object(P.jsx)(m.p,{sm:"6",lg:"12"})]})})]}),Object(P.jsx)(O.a,{children:Object(P.jsxs)("table",{className:"table table-hover table-outline mb-0 d-none d-sm-table",children:[Object(P.jsx)("thead",{className:"thead-light",children:Object(P.jsxs)("tr",{children:[Object(P.jsx)("th",{className:"text-center",children:"STT."}),Object(P.jsx)("th",{className:"text-center",children:"T\xean"}),Object(P.jsx)("th",{className:"text-center",children:"T\xean Sale"}),Object(P.jsx)("th",{className:"text-center",children:"\u0110\u1ecba ch\u1ec9 shop"}),Object(P.jsx)("th",{className:"text-center",children:"Email"}),Object(P.jsx)("th",{className:"text-center",children:"S\u1ed1 \u0111i\u1ec7n tho\u1ea1i"}),Object(P.jsx)("th",{className:"text-center",children:"Gi\u1edbi t\xednh"}),Object(P.jsx)("th",{className:"text-center",children:"Tr\u1ea1ng th\xe1i"}),Object(P.jsx)("th",{className:"text-center",children:"Ng\xe0y t\u1ea1o"})]})}),Object(P.jsxs)("tbody",{children:[Object(P.jsx)("td",{colSpan:"8",hidden:p,className:"text-center",children:"No users in this month"}),void 0!=n?n.map((function(t,a){return Object(P.jsxs)("tr",{children:[Object(P.jsx)("td",{className:"text-center",children:a+1}),Object(P.jsx)("td",{className:"text-center",children:t.Name}),Object(P.jsx)("td",{className:"text-center",children:t.NameSale}),Object(P.jsx)("td",{className:"text-center",children:t.Address}),Object(P.jsx)("td",{className:"text-center",children:t.Email}),Object(P.jsx)("td",{className:"text-center",children:t.Phone}),Object(P.jsx)("td",{className:"text-center",children:t.Gender}),Object(P.jsx)("td",{className:"text-center",children:Object(P.jsx)(m.a,{color:e.getBadge(t.Status),children:t.Status})}),Object(P.jsx)("td",{className:"text-center",children:new Date(t.Create_Date).toLocaleDateString()+" "+new Date(t.Create_Date).toLocaleTimeString()})]},a)})):""]})]})})]}),1==r.length?"":Object(P.jsx)("div",{style:{float:"right",marginRight:"10px",padding:"10px"},children:Object(P.jsx)("tr",{style:C.row,children:r.map((function(t,a){return Object(P.jsx)("td",{children:Object(P.jsx)(E.a,{style:C.pagination,color:a==s?"primary":"danger",onClick:function(t){e.setState({dataAll:r[a],indexPage_All:a})},children:a+1})})}))})}),Object(P.jsxs)(S.a,{isOpen:this.state.modalCom,className:this.props.className,children:[Object(P.jsx)(T.a,{children:"new"==this.state.action?"T\u1ea1o m\u1edbi":"C\u1eadp nh\u1eadt"}),Object(P.jsxs)(A.a,{children:[Object(P.jsx)(b.a,{field:"Email",label:"Email",value:this.state.Email,placeholder:"Email",type:"email",onChange:function(t){return e.onChange("Email",t.target.value)}}),Object(P.jsx)(b.a,{field:"Address",label:"Address",value:this.state.Address,placeholder:"Email",type:"email",onChange:function(t){return e.onChange("Address",t.target.value)}}),Object(P.jsx)(b.a,{field:"Name",label:"Name",value:this.state.Name,placeholder:"Name",onChange:function(t){return e.onChange("Name",t.target.value)}}),Object(P.jsx)(b.a,{field:"Password",label:"Password",value:this.state.Password,type:"password",placeholder:"Password",readOnly:"new"!=c,onChange:function(t){return e.onChange("Password",t.target.value)}}),Object(P.jsx)(b.a,{field:"Code",label:"Code",placeholder:"Code",value:this.state.Code,onChange:function(t){return e.onChange("Code",t.target.value)}}),Object(P.jsx)(b.a,{field:"UserName",label:"UserName",placeholder:"Username",value:this.state.UserName,onChange:function(t){return e.onChange("UserName",t.target.value)}}),Object(P.jsx)(b.a,{field:"Phone",label:"Phone",value:this.state.Phone,placeholder:"Phone",onChange:function(t){return e.onChange("Phone",t.target.value)}}),Object(P.jsxs)("div",{children:[Object(P.jsx)("label",{style:C.flexLabel,htmlFor:"tag",children:"Gender:    "}),Object(P.jsxs)("select",{style:C.flexOption,name:"Gender",onChange:function(t){return e.onChange("Gender",t.target.value)},children:[Object(P.jsx)("option",{value:this.state.Gender,children:""==this.state.Gender?" - - - - - - - - - - ":this.state.Gender}),Object(P.jsx)("option",{value:"Nam",children:"Nam"}),Object(P.jsx)("option",{value:"N\u1eef",children:"N\u1eef"})]})]}),Object(P.jsxs)("div",{children:[Object(P.jsx)("label",{style:C.flexLabel,htmlFor:"tag",children:"Company:    "}),Object(P.jsxs)("select",{style:C.flexOption,name:"Company_Id",onChange:function(t){return e.onChange("Company_Id",t.target.value)},children:[Object(P.jsx)("option",{value:this.state.Company_Id,children:"-----"}),i.map((function(e,t){return e.Name==l?Object(P.jsx)("option",{selected:!0,value:e._id,children:e.Name}):Object(P.jsx)("option",{value:e._id,children:e.Name})}))]})]}),Object(P.jsxs)("div",{children:[Object(P.jsx)("label",{style:C.flexLabel,htmlFor:"tag",children:"Role:    "}),Object(P.jsxs)("select",{style:C.flexOption,name:"Role_Id",onChange:function(t){return e.onChange("Role_Id",t.target.value)},children:[Object(P.jsx)("option",{value:this.state.Role_Id,children:"-----"}),d.map((function(e,t){return e.Name==o?Object(P.jsx)("option",{selected:!0,value:e._id,children:e.Name}):Object(P.jsx)("option",{value:e._id,children:e.Name})}))]})]})]}),Object(P.jsx)(D.a,{})]}),Object(P.jsxs)(S.a,{isOpen:this.state.modalDelete,toggle:function(t){return e.setState({modalDelete:!e.state.modalDelete,delete:null})},className:this.props.className,children:[Object(P.jsx)(T.a,{toggle:function(t){return e.setState({modalDelete:!e.state.modalDelete,delete:null})},children:"Delete"}),Object(P.jsx)(A.a,{children:Object(P.jsx)("label",{htmlFor:"tag",children:'Do you want to delete user "'.concat(this.state.delete?this.state.delete.Email:"",'" ?')})}),Object(P.jsxs)(D.a,{children:[Object(P.jsx)(E.a,{color:"primary",onClick:function(t){return e.delete()},disabled:this.state.isLoading,children:"Delete"})," ",Object(P.jsx)(E.a,{color:"secondary",onClick:function(t){return e.setState({modalDelete:!e.state.modalDelete,delete:null})},children:"Cancel"})]})]})]})}}]),a}(p.Component),C={wa10:{width:"5%",float:"left",height:"60px"},sale_times:{width:"8%",float:"left",height:"60px",textAlign:"center"},pagination:{marginRight:"5px"},flexLabel:{width:100},flexOption:{width:160,margin:"1px"},a:{textDecoration:"none"},floatRight:{float:"right",marginTop:"3px"},spinner:{width:"30px"},center:{textAlign:"center"},tbody:{height:"380px",overflowY:"auto"},wh12:{width:"11%",float:"left",height:"60px",textAlign:"center"},ws12:{width:"13%",float:"left",height:"60px",textAlign:"center"},wh15:{width:"15%",float:"left",height:"60px",textAlign:"center"},w5:{width:"22%",float:"left",height:"60px"},w5_10:{width:"5%",float:"left",height:"60px"},row:{float:"left",width:"100%"},success:{color:"green"},danger:{color:"red"},mgl5:{marginLeft:"5px"},tags:{float:"right",marginRight:"5px"},searchInput:{width:"160px",display:"inline-block",margin:"1px"},userActive:{color:"green"},userPending:{color:"red"},nagemonNameCol:{width:"328px"},image:{width:"100px",height:"100px",borderRadius:"99999px"}};t.default=Object(L.b)((function(e){return{data:e.getData_AllAPI}}),{onSaveID:g.a,onSaveSeed:g.b})(y)},642:function(e,t,a){"use strict";var i,n=a(165);t.a=(i={BASE_URL:"https://api-soida.applamdep.com",BASE_URL_CURRENT:"https://id.applamdep.com/",LIST_USER:"/api/list-user",LIST_USER_WITH_ID:"/api/list-user?id=",ADD_USER:"/api/add-user",UPDATE_USER:"/api/update-user",DELETE_USER:"/api/delete-user",LOGIN_ADMIN:"/api/login_admin",GET_SHOP:"/api/get-shop",GET_SALE:"/api/get-sale",GET_COEFFICIENT:"/api/calculator-coefficient-user",GET_COEFFICIENT_PER_SALE:"/api/calculator-coefficient-user-per-sale",GET_USER_SALE_BY_MONTH:"/api/get-user-of-sale-by-month",CALCULATOR_ALL_USER_OF_COMPANY:"/api/calculator-all-user-company",CALCULATOR_ALL_USER_OF_SALE:"/api/calculator-all-user-of-sale",GET_SEEDER:"/api/get-seed",GET_SALE_NAME:"/api/get-name-sale",GET_USER_BY_ID:"/api/get-user-byID",LIST_CUSTOMER:"/api/list-customer",LIST_CUSTOMER_BY_MONTH:"/api/get-user-sale-by-month",LIST_TYPEKEY:"/api/list-typekey",LIST_TYPEKEY_WITH_ID:"/api/list-typekey?id=",ADD_TYPEKEY:"/api/add-typekey",UPDATE_TYPEKEY:"/api/update-typekey",DELETE_TYPEKEY:"/api/delete-typekey",LIST_HARDWARE:"/api/list-hardware",LIST_HARDWARE_WITH_ID:"/api/list-hardware?id=",ADD_HARDWARE:"/api/add-hardware",UPDATE_HARDWARE:"/api/update-hardware",DELETE_HARDWARE:"/api/delete-hardware",LIST_ORDER:"/api/list-order",ADD_ORDER:"/api/add-order",UPDATE_STATUS_ORDER:"/api/update-status-order",CHECK_OUT:"/api/checkout-order",LIST_TRANSACTION:"/api/list-transaction",ADD_TRANSACTION:"/api/add-transaction",LIST_CHECK_OUT:"/api/list-checkout",LIST_HARDWARE_CHECKOUT:"/api/get-list-hardward-by-check-out",UPDATE_STATUS_CHECKOUT:"/api/update-status-hardware",LIST_ORDER_DETAIL:"/api/list-orderdetail",ADD_ORDER_DETAIL:"/api/add-orderdetail",LIST_ROLE:"/api/list-role",LIST_ROLE_WITH_ID:"/api/list-role?id=",ADD_ROLE:"/api/add-role",UPDATE_ROLE:"/api/update-role",DELETE_ROLE:"/api/delete-role",LIST_PACKAGE:"/api/list-package",ADD_PACKAGE:"/api/add-package",UPDATE_PACKAGE:"/api/update-package",DELETE_PACKAGE:"/api/delete-package",PLUGIN_DATA_PACKAGE:"/api/get-name-package",LIST_SALELOG:"/api/list-salelog",LIST_SALELOG_WITH_ID:"/api/list-salelog?id=",ADD_SALELOG:"/api/add-salelog",UPDATE_SALELOG:"/api/update-salelog",DELETE_SALELOG:"/api/delete-salelog",DATA_SALE:"/api/get-data-sale",LIST_SALE:"/api/list-sale",LIST_SALE_WITH_ID:"/api/list-sale?id=",ADD_SALE:"/api/add-sale",UPDATE_SALE:"/api/update-sale",DELETE_SALE:"/api/delete-sale",LIST_KEYORDER:"/api/list-keyorder",LIST_KEYORDER_WITH_ID:"/api/list-keyorder?id=",ADD_KEYORDER:"/api/add-keyorder",UPDATE_KEYORDER:"/api/update-keyorder",DELETE_KEYORDER:"/api/delete-keyorder",LIST_KEY:"/api/list-key",LIST_KEY_WITH_ID:"/api/list-key?id=",ADD_KEY:"/api/add-key",UPDATE_KEY:"/api/update-key",DELETE_KEY:"/api/delete-key",PLUGIN_LIST_COMPANY:"/api/plugin-list-company",PLUGIN_LIST_COMPANY_BY_ID:"/api/plugin-list-company-by-id",PLUGIN_LIST_COMPANY_WITH_ID:"/api/plugin-list-company?id=",PLUGIN_ADD_COMPANY:"/api/plugin-add-company",PLUGIN_UPDATE_COMPANY:"/api/plugin-update-company",PLUGIN_DELETE_COMPANY:"/api/plugin-delete-company",PLUGIN_DATA_COMPANY:"/api/plugin-get-data-company",LIST_COMPANY:"/api/list-company",LIST_COMPANY_WITH_ID:"/api/list-company?id=",ADD_COMPANY:"/api/add-company",UPDATE_COMPANY:"/api/update-company",DELETE_COMPANY:"/api/delete-company",DATA_COMPANY:"/api/get-data-company",LIST_LINK:"/api/list-link",LIST_LINK_WITH_ID:"/api/list-link?id=",ADD_LINK:"/api/add-link",UPDATE_LINK:"/api/update-link",DELETE_LINK:"/api/delete-link","GET-LINK-BY-ID":"/api/link-by-id",LIST_FEATURE:"/api/list-feature",ADD_FEATURE:"/api/add-feature",UPDATE_FEATURE:"/api/update-feature",DELETE_FEATURE:"/api/delete-feature",DATA_CHOOSE_FEATURE:"/api/get-feature-choose",LIST_PLUGIN_ORDER:"/api/plugin-list-order",COUNT_PLUGIN_ORDER:"/api/plugin-count-order",LIST_PLUGIN_ORDER_BY_ID:"/api/plugin-list-order-by-id",LIST_PLUGIN_ORDER_FOR_ADMIN:"/api/plugin-list-order-for-admin",LIST_ORDER_BY_SALE:"/api/plugin-list-order-by-saleid",ADD_PLUGIN_ORDER:"/api/plugin-add-order",UPDATE_PLUGIN_ORDER:"/api/plugin-update-order",DELETE_PLUGIN_ORDER:"/api/plugin-delete-order",UPDATE_SLUG:"/api/plugin-update-slug",PLUGIN_LIST_USER:"/api/plugin-list-user",PLUGIN_ALL_USER:"/api/plugin-all-user",PLUGIN_ADD_USER:"/api/plugin-add-user",PLUGIN_ADD_SALE:"/api/plugin-add-sale",PLUGIN_UPDATE_USER:"/api/plugin-update-user",PLUGIN_UPDATE_USER_COMPANY:"/api/plugin-update-user-company",PLUGIN_DELETE_USER:"/api/plugin-delete-user",PLUGIN_RESET_PASSWORD:"/api/plugin-reset-password",PLUGIN_CHANGE_PASSWORD:"/api/plugin-change",PLUGIN_CHECK_LINK:"/api/plugin-check-link",PLUGIN_UPDATE_PASSWORD:"/api/plugin-update-password",PLUGIN_UPDATE_STATUS:"/api/plugin-update-status",PLUGIN_LOGIN_ADMIN:"/api/plugin-login_admin",PLUGIN_FORGOT_PASS:"/api/plugin-forgot-password",PLUGIN_GET_USER_BYID:"/api/plugin-get-user-byID",PLUGIN_GET_USER_BY_BODY:"/api/plugin-get-user-byID-with-body",PLUGIN_LIST_ROLE:"/api/plugin-list-role",PLUGIN_ADD_ROLE:"/api/plugin-add-role",PLUGIN_UPDATE_ROLE:"/api/plugin-update-role",PLUGIN_DELETE_ROLE:"/api/plugin-delete-role",CUS_RES_LIST:"/api/list-customer-request",CUS_RES_LIST_COMPANY:"/api/list-customer-request-for-company",CUS_RES_ADD:"/api/add-customer-request",CUS_RES_UPDATE:"/api/update-customer-request",CUS_RES_DELETE:"/api/delete-customer-request",REWARD_INFO_LIST:"/api/list-reward-info",REWARD_INFO_LIST_COMPANY:"/api/list-reward-info-for-company",REWARD_INFO_ADD:"/api/add-reward-info",REWARD_INFO_UPDATE:"/api/update-reward-info",REWARD_INFO_DELETE:"/api/delete-reward-info",REWARD_TRANS_LIST:"/api/list-reward-trans",REWARD_TRANS_ADD:"/api/list-reward-trans",REWARD_TRANS_UPDATE:"/api/update-reward-trans",REWARD_TRANS_DELETE:"/api/delete-reward-trans",TYPE_REQUEST_LIST:"/api/list-type-request",TYPE_REQUEST_ADD:"/api/add-type-request",TYPE_REQUEST_UPDATE:"/api/update-type-request",TYPE_REQUEST_DELETE:"/api/delete-type-request"},Object(n.a)(i,"LIST_CUSTOMER","/api/list-customer"),Object(n.a)(i,"LIST_CUSTOMER_FOR_COMPANY","/api/list-customer-for-company"),Object(n.a)(i,"LIST_CUSTOMER_FOR_COMPANY_BY_MONTH","/api/list-customer-for-company-by-month"),Object(n.a)(i,"LIST_SUGGEST_ITEM","/itemSdk"),Object(n.a)(i,"LIST_SUGGEST_ITEM_COMPANY","/itemSdk/"),Object(n.a)(i,"LIST_SUGGEST_ITEM_ADMIN","/itemSdk/admin/"),Object(n.a)(i,"SEARCH_SUGGEST_ITEM_ADMIN","/itemSdk/admin/search/"),Object(n.a)(i,"SEARCH_SUGGEST_ITEM_COMPANY","/itemSdk/search/"),Object(n.a)(i,"ADD_SUGGEST_ITEM","/itemSdk"),Object(n.a)(i,"UPDATE_SUGGEST_ITEM","/itemSdk/"),Object(n.a)(i,"DELETE_SUGGEST_ITEM","/itemSdk/deleteItem"),Object(n.a)(i,"LIST_SDK","/sdk"),Object(n.a)(i,"LIST_BRAND","/brands"),Object(n.a)(i,"LIST_BRAND_COMPANY","/brands/"),Object(n.a)(i,"ADD_BRAND","/add-brand"),Object(n.a)(i,"UPDATE_BRAND","/update-brand"),Object(n.a)(i,"DELETE_BRAND","/delete-brand"),Object(n.a)(i,"LIST_BRAND_PLUGIN","/brand-plugin"),Object(n.a)(i,"LIST_BRAND_PLUGIN_COMPANY","/brand-plugin/"),Object(n.a)(i,"ADD_BRAND_PLUGIN","/add-brand-plugin"),Object(n.a)(i,"UPDATE_BRAND_PLUGIN","/update-brand-plugin"),Object(n.a)(i,"DELETE_BRAND_PLUGIN","/delete-brand-plugin"),Object(n.a)(i,"LIST_PRODUCT","/product"),Object(n.a)(i,"LIST_PRODUCT_COMPANY","/product/"),Object(n.a)(i,"ADD_PRODUCT","/add-product"),Object(n.a)(i,"UPDATE_PRODUCT","/update-product"),Object(n.a)(i,"DELETE_PRODUCT","/delete-product"),Object(n.a)(i,"LIST_TYPE","/types"),Object(n.a)(i,"LIST_TYPE_COMPANY","/types/"),Object(n.a)(i,"ADD_TYPE","/add-type"),Object(n.a)(i,"UPDATE_TYPE","/update-type"),Object(n.a)(i,"DELETE_TYPE","/delete-type"),Object(n.a)(i,"LIST_COLOR","/colors"),Object(n.a)(i,"LIST_COLOR_COMPANY","/colors/"),Object(n.a)(i,"LIST_COLOR_SELECT","/color-select"),Object(n.a)(i,"ADD_COLOR","/add-color"),Object(n.a)(i,"UPDATE_COLOR","/update-color"),Object(n.a)(i,"DELETE_COLOR","/delete-color"),Object(n.a)(i,"LIST_HISTORY_SKIN","/api/get-history-skin"),Object(n.a)(i,"LIST_HISTORY_SKIN_BY_CONDITION","/api/get-history-skin-by-condition"),Object(n.a)(i,"ADD_HISTORY_SKIN","/api/add-history-skin"),Object(n.a)(i,"LIST_TYPE_PRODUCT","/api/list-type-product"),Object(n.a)(i,"ADD_TYPE_PRODUCT","/api/add-type-product"),Object(n.a)(i,"UPDATE_TYPE_PRODUCT","/api/update-type-product"),Object(n.a)(i,"DELETE_TYPE_PRODUCT","/api/delete-type-product"),Object(n.a)(i,"LIST_TYPE_SDK","/api/list-type-sdk"),Object(n.a)(i,"ADD_TYPE_SDK","/api/add-type-sdk"),Object(n.a)(i,"UPDATE_TYPE_SDK","/api/update-type-sdk"),Object(n.a)(i,"DELETE_TYPE_SDK","/api/delete-type-sdk"),Object(n.a)(i,"LIST_CONTACT_CUSTOMER","/api/list-contact-customers"),Object(n.a)(i,"ADD_CONTACT_CUSTOMER","/api/add-contact-customers"),Object(n.a)(i,"UPDATE_CONTACT_CUSTOMER","/api/update-contact-customers"),Object(n.a)(i,"DELETE_CONTACT_CUSTOMER","/api/delete-contact-customers"),Object(n.a)(i,"UPDATE_CONTACT_STATUS","/api/update-contact-status"),i)},654:function(e,t,a){"use strict";a(2);var i=a(638),n=a.n(i),r=a(17),s=function(e){var t=e.field,a=e.value,i=e.label,s=e.error,l=e.type,c=e.onChange,d=e.checkUserExists,o=e.readOnly,p=e.placeholder,u=e.onClick;return Object(r.jsxs)("div",{className:n()("form-group",{"has-error":s}),children:[Object(r.jsx)("label",{className:"control-label",children:i}),Object(r.jsx)("input",{onChange:c,onClick:u,onBlur:d,value:a,type:l,name:t,placeholder:p,readOnly:o,className:"form-control"}),s&&Object(r.jsx)("span",{className:"help-block",children:s})]})};s.defaultProps={type:"text"},t.a=s},724:function(e,t,a){"use strict";a.d(t,"a",(function(){return n})),a.d(t,"b",(function(){return r}));var i=a(116);function n(e){return{type:i.a,payload:{id:e}}}function r(e){return{type:i.b,payload:{seed:e}}}}}]);
//# sourceMappingURL=57.f220de00.chunk.js.map