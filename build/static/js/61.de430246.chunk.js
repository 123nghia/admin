(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[61],{1261:function(e,t,a){"use strict";a.r(t),function(e){var n=a(165),s=a(113),r=a.n(s),i=a(653),o=a(166),c=a(167),l=a(169),d=a(168),u=a(2),h=a(686),p=a(687),m=a(664),f=a(684),g=a(663),x=a(1303),j=a(1239),S=a(1240),b=a(1241),v=a(648),y=a(171),O=a(710),_=(a(658),a(651)),k=a(646),C=a(655),L=a.n(C),w=a(742),A=a.n(w),N=a(17),E=new Headers,U=localStorage.getItem("auth");E.append("Authorization","Bearer "+U),E.append("Content-Type","application/json");var P=function(t){Object(l.a)(s,t);var a=Object(d.a)(s);function s(e){var t;return Object(o.a)(this,s),(t=a.call(this,e)).getUserSale=function(){var e=Object(i.a)(r.a.mark((function e(a){var n,s,i,o,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.state.company_id,t.setState({isLoading:!0}),s=JSON.parse(n),i={condition:{Company_Id:s.company_id,Sale_Id:a}},e.next=6,L()({baseURL:_.a.BASE_URL,url:_.a.LIST_CUSTOMER,method:"POST",data:i});case 6:o=e.sent,t.pagination(o.data.data),t.setState({dataApi:o.data.data}),c=0,o.data.data.map((function(e){"Actived"==e.Status&&(c+=1)})),t.setState({isLoading:!1,totalActive:c});case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),t.getUserSale_ByMonth=function(){var e=Object(i.a)(r.a.mark((function e(a,n){var s,i,o,c,l,d,u,h;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=t.state.company_id,i=JSON.parse(s),o={month:n,company_id:i.company_id,sale_id:a},e.next=5,L()({baseURL:_.a.BASE_URL,url:_.a.GET_USER_SALE_BY_MONTH,method:"POST",data:o});case 5:c=e.sent,t.setState({dataApi:c.data.data,arrTemp:c.data.data}),l=[],d=t.state.arrTemp,u=r.a.mark((function e(a){var s;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(l.some((function(e){return d[a].Phone==e.Phone}))){e.next=7;break}return d[a].count=t.countType(d,d[a].Phone),e.next=4,L()({baseURL:_.a.BASE_URL,url:_.a.GET_COEFFICIENT_PER_SALE,method:"POST",data:{month:n,company_id:i.company_id,phone:d[a].Phone,sale_id:t.props.data.idSale}});case 4:s=e.sent,d[a].coefficient=s.data.data.calculator,l.push(d[a]);case 7:case"end":return e.stop()}}),e)})),h=0;case 11:if(!(h<d.length)){e.next=16;break}return e.delegateYield(u(h),"t0",13);case 13:h++,e.next=11;break;case 16:t.pagination(l),t.setState({isLoading:!1});case 18:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),t.getUserSale_ByMonth_forSale=function(){var e=Object(i.a)(r.a.mark((function e(a,n){var s,i,o,c,l,d,u,h;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=t.state.company_id,t.setState({isLoading:!0}),i=JSON.parse(s),o={month:n,company_id:i.company_id,sale_id:a},e.next=6,L()({baseURL:_.a.BASE_URL,url:_.a.GET_USER_SALE_BY_MONTH,method:"POST",data:o});case 6:c=e.sent,t.setState({dataApi:c.data.data,arrTemp:c.data.data}),l=[],d=t.state.arrTemp,u=r.a.mark((function e(s){var o;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(l.some((function(e){return d[s].Phone==e.Phone}))){e.next=7;break}return d[s].count=t.countType(d,d[s].Phone),e.next=4,L()({baseURL:_.a.BASE_URL,url:_.a.GET_COEFFICIENT_PER_SALE,method:"POST",data:{month:n,company_id:i.company_id,phone:d[s].Phone,sale_id:a}});case 4:o=e.sent,d[s].coefficient=o.data.data.calculator,l.push(d[s]);case 7:case"end":return e.stop()}}),e)})),h=0;case 12:if(!(h<d.length)){e.next=17;break}return e.delegateYield(u(h),"t0",14);case 14:h++,e.next=12;break;case 17:t.pagination(l),t.setState({isLoading:!1});case 19:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),t.getAllData=Object(i.a)(r.a.mark((function e(){var a,n,s,i,o,c,l;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.state.company_id,t.setState({isLoading:!0}),n=JSON.parse(a),e.next=5,L()({baseURL:_.a.BASE_URL,url:_.a.LIST_CUSTOMER,method:"POST",data:{condition:{Company_Id:n.company_id,Sale_Id:t.props.data.idSale}}});case 5:s=e.sent,t.setState({dataApi:s.data.data}),i=[],o=r.a.mark((function e(a){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i.some((function(e){return s.data.data[a].Phone==e.Phone}))){e.next=7;break}return s.data.data[a].count=t.countType(s.data.data,s.data.data[a].Phone),e.next=4,L()({baseURL:_.a.BASE_URL,url:_.a.CALCULATOR_ALL_USER_OF_SALE,method:"POST",data:{company_id:n.company_id,phone:s.data.data[a].Phone,sale_id:t.props.data.idSale}});case 4:l=e.sent,s.data.data[a].coefficient=l.data.data.calculator,i.push(s.data.data[a]);case 7:case"end":return e.stop()}}),e)})),c=0;case 10:if(!(c<s.data.data.length)){e.next=15;break}return e.delegateYield(o(c),"t0",12);case 12:c++,e.next=10;break;case 15:t.pagination_all(i),t.setState({isLoading:!1});case 17:case"end":return e.stop()}}),e)}))),t.getData=Object(i.a)(r.a.mark((function e(){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.state.company_id,t.setState({isLoading:!0}),e.next=4,L()({baseURL:_.a.BASE_URL,url:_.a.GET_SHOP,method:"POST",headers:t.state.token});case 4:a=e.sent,t.pagination(a.data.data),t.setState({dataApi:a.data.data}),0,t.setState({isLoading:!1,totalActive:0});case 9:case"end":return e.stop()}}),e)}))),t.openDelete=function(e){t.setState({modalDelete:!t.state.modalDelete,delete:e})},t.state={data:[],key:"",keyUserName:"",keyName:"",keyEmail:"",keyCompanyCode:"",keyPhone:"",keyGender:"",keyCode:"",keyStatus:"",activePage:1,page:1,itemsCount:0,limit:20,totalActive:0,modalCom:!1,viewingUser:{},communities:[],updated:"",dataApi:[],action:"new",Email:"",Address:"",Name:"",Phone:"",Gender:"Nam",Company_Id:"",Role_Id:"",UserName:"",Password:"",Sale_Id:"",Code:"",Status:"",modalDelete:!1,delete:null,dataCompany:[],currentCompany:"",dataSale:[],currentSale:"",dataRole:[],currentRole:"",arrPagination:[],indexPage:0,arrPagination_All:[],indexPage_All:0,role:localStorage.getItem("role"),company_id:localStorage.getItem("user"),see_detail:!0,month:0,arrTemp:[],arrMonth:["01","02","03","04","05","06","07","08","09","10","11","12"],arrMonthWithDefault:["00","01","02","03","04","05","06","07","08","09","10","11","12"],isLoading:!0,hidden:!1,nameSale:"",dataAll:[],hidden_all:!1,isSale:!1,token:{Authorization:"Bearer ".concat(localStorage.getItem("token"))},arrAllUser:[]},t}return Object(c.a)(s,[{key:"componentDidMount",value:function(){var e=Object(i.a)(r.a.mark((function e(){var t,a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(this.getData(),t=JSON.parse(localStorage.getItem("url")),a=0;a<t.length;a++)"#"+t[a].to==window.location.hash&&1==t[a].hidden&&(window.location.href="#/");case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getSeeder",value:function(){var e=Object(i.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L()({baseURL:_.a.BASE_URL,url:_.a.GET_SEEDER,method:"POST",data:{email:"ktpm489@gmail.com"}});case 2:t=e.sent,console.log(t),this.props.onSaveSeed(t.data.data),this.props.history.push("/history");case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"pagination",value:function(e){var t,a,n,s=[];for(t=0,a=e.length;t<a;t+=5)n=e.slice(t,t+5),s.push(n);0==s.length?this.setState({hidden:!1}):this.setState({hidden:!0}),this.setState({arrPagination:s,data:s[this.state.indexPage]})}},{key:"pagination_all",value:function(e){var t,a,n,s=[];for(t=0,a=e.length;t<a;t+=5)n=e.slice(t,t+5),s.push(n);0==s.length?this.setState({hidden_all:!1}):this.setState({hidden_all:!0}),this.setState({arrPagination_All:s,dataAll:s[this.state.indexPage_All]})}},{key:"countType",value:function(e,t){return e.filter((function(e){return e.Phone==t})).length}},{key:"searchKey",value:function(){var e=this.state,t=e.indexPage,a=e.key,n=e.keyStatus;if(""!=a||""!=n){var s=[];this.state.dataApi.map((function(e){(e.Name.toLocaleUpperCase().includes(a.toLocaleUpperCase())||e.Email.toLocaleUpperCase().includes(a.toLocaleUpperCase())||e.Phone.toLocaleUpperCase().includes(a.toLocaleUpperCase()))&&e.Status.toLocaleUpperCase().includes(n.toLocaleUpperCase())&&s.push(e)}));var r=0;s.map((function(e){"Actived"==e.Status&&(r+=1)})),this.setState({data:s,totalActive:r})}else{var i=0;this.state.dataApi.map((function(e){"Actived"==e.Status&&(i+=1)})),this.setState({data:this.state.arrPagination[t],totalActive:i})}}},{key:"actionSearch",value:function(e,t){var a=this;this.setState(Object(n.a)({},t,e.target.value),(function(){a.searchKey()}))}},{key:"resetSearch",value:function(){var e=this;this.setState({keyUserName:"",keyName:"",keyEmail:"",keyCompanyCode:"",keyPhone:"",keyGender:"",keyCode:"",keyStatus:""},(function(){e.searchKey()}))}},{key:"toggleModal",value:function(){var e=Object(i.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getCompanyData();case 2:return e.next=4,this.getSaleData();case 4:return e.next=6,this.getRoleData();case 6:"new"==t&&this.setState({modalCom:!this.state.modalCom,action:t,Email:"",Name:"",Phone:"",Gender:"Nam",Company_Id:"",Role_Id:"",UserName:"",Password:"",Sale_Id:"",Code:""});case 7:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"onChange",value:function(e,t){this.setState(Object(n.a)({},e,t))}},{key:"addUser",value:function(){var e=Object(i.a)(r.a.mark((function e(){var t,a,n,s,i,o,c,l,d,u,h,p,m,f,g;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.state,a=t.Email,n=t.Name,s=t.Phone,i=t.UserName,t.Code,o=t.Password,c=t.Gender,l=t.Role_Id,d=t.Company_Id,u=t.Sale_Id,h=t.Address,null!=a&&""!=a&&null!=n&&""!=n&&null!=s&&""!=s&&null!=i&&""!=i&&null!=o&&""!=o){e.next=4;break}return alert("Vui l\xf2ng nh\u1eadp \u0111\u1ea7y \u0111\u1ee7 tr\u01b0\u1eddng !!!"),e.abrupt("return");case 4:return p=this.state.company_id,m=JSON.parse(p),console.log(m.company_id),f={Email:a,Address:h,Name:n,Phone:s,Gender:c,Company_Id:"ADMIN"==this.state.role||"ADMINSALE"==this.state.role?d:m.company_id,Role_Id:l,UserName:i,Password:o,Sale_Id:u,Code:m.company_id},this.setState({isLoading:!0}),e.next=11,L()({baseURL:_.a.BASE_URL,url:_.a.ADD_USER,method:"POST",data:f});case 11:1==(g=e.sent).data.is_success?(this.getData(),this.setState({modalCom:!this.state.modalCom})):(alert(g.data.message),this.setState({isLoading:!1}));case 13:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"openUpdate",value:function(){var e=Object(i.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getCompanyData(t.Company_Id);case 2:return e.next=4,this.getSaleData(t.Sale_Id);case 4:return e.next=6,this.getRoleData(t.Role_Id);case 6:this.setState({modalCom:!this.state.modalCom,action:"update",Email:t.Email,Address:t.Address,Name:t.Name,Phone:t.Phone,Gender:t.Gender,Company_Id:t.Company_Id,Role_Id:t.Role_Id,UserName:t.UserName,Password:t.Password,Sale_Id:t.Sale_Id,Code:t.Code,id:t._id,Status:t.Status});case 7:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"updateUser",value:function(){var e=Object(i.a)(r.a.mark((function e(){var t,a,n,s,i,o,c,l,d,u,h,p,m,f,g,x,j;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.state.company_id,a=JSON.parse(t),n=this.state,s=n.Email,i=n.Name,o=n.Phone,c=n.UserName,l=n.Code,d=n.Password,u=n.Gender,h=n.Role_Id,p=n.Company_Id,m=n.Sale_Id,f=n.Status,g=n.Address,null!=s&&""!=s&&null!=i&&""!=i&&null!=o&&""!=o&&null!=c&&""!=c&&null!=d&&""!=d){e.next=6;break}return alert("Vui l\xf2ng nh\u1eadp \u0111\u1ea7y \u0111\u1ee7 tr\u01b0\u1eddng !!!"),e.abrupt("return");case 6:return x={Email:s,Address:g,Name:i,Phone:o,Gender:u,Company_Id:"ADMIN"==this.state.role||"ADMINSALE"==this.state.role?p:a.company_id,Role_Id:h,UserName:c,Password:d,Sale_Id:m,Code:l,id:this.state.id,Status:f},this.setState({isLoading:!0}),e.next=10,L()({baseURL:_.a.BASE_URL,url:_.a.UPDATE_USER,method:"POST",data:x});case 10:1==(j=e.sent).data.is_success?(this.getData(),this.setState({modalCom:!this.state.modalCom})):(alert(j.data.message),this.setState({isLoading:!1}));case 12:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"delete",value:function(){var e=Object(i.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({isLoading:!0}),e.next=3,L()({baseURL:_.a.BASE_URL,url:_.a.DELETE_USER,method:"DELETE",data:{id:this.state.delete._id}});case 3:1==(t=e.sent).data.is_success?(this.getData(),this.setState({modalDelete:!this.state.modalDelete,delete:null})):(alert(t.data.message),this.setState({isLoading:!1}));case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getUsers",value:function(){var t=this,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,n=this.state.limit,s=this.state.key||"",r={method:"GET",headers:E};fetch(e.BASE_URL+"/admin/users?key="+s+"&page="+a+"&limit="+n,r).then((function(e){e.json().then((function(e){t.setState({data:e.data,itemsCount:e.total,activePage:a,totalActive:e.totalActive,updated:""})}))})).catch(console.log)}},{key:"getCompanyData",value:function(){var e=Object(i.a)(r.a.mark((function e(t){var a,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L()({baseURL:_.a.BASE_URL,url:_.a.LIST_COMPANY,method:"POST"});case 2:if(a=e.sent,""==t&&void 0==t){e.next=8;break}return e.next=6,L()({baseURL:_.a.BASE_URL,url:_.a.LIST_COMPANY_WITH_ID+t,method:"POST"});case 6:null==(n=e.sent).data.data&&void 0==n.data.data||this.setState({currentCompany:n.data.data.Name});case 8:this.setState({dataCompany:a.data.data});case 9:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getSaleData",value:function(){var e=Object(i.a)(r.a.mark((function e(t){var a,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L()({baseURL:_.a.BASE_URL,url:_.a.LIST_SALE,method:"GET"});case 2:if(a=e.sent,""==t&&void 0==t){e.next=8;break}return e.next=6,L()({baseURL:_.a.BASE_URL,url:_.a.LIST_SALE_WITH_ID+t,method:"GET"});case 6:null==(n=e.sent).data.data&&void 0==n.data.data||this.setState({currentSale:n.data.data.Name});case 8:this.setState({dataSale:a.data.data});case 9:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getRoleData",value:function(){var e=Object(i.a)(r.a.mark((function e(t){var a,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L()({baseURL:_.a.BASE_URL,url:_.a.LIST_ROLE,method:"GET",headers:this.state.token});case 2:if(a=e.sent,""==t&&void 0==t){e.next=8;break}return e.next=6,L()({baseURL:_.a.BASE_URL,url:_.a.LIST_ROLE_WITH_ID+t,method:"GET",headers:this.state.token});case 6:null==(n=e.sent).data.data&&void 0==n.data.data||this.setState({currentRole:n.data.data.Name});case 8:this.setState({dataRole:a.data.data});case 9:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getBadge",value:function(e){switch(e){case"Actived":return"success";case"Inactive":return"secondary";case"Locked":return"warning";case"Deactived":return"danger";default:return"primary"}}},{key:"inputChange",value:function(e){this.setState(Object(n.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){var e=this,t=this.state,a=t.data,n=t.key,s=t.action,o=t.dataRole,c=t.currentRole,l=t.arrPagination,d=t.indexPage;return this.state.isLoading?Object(N.jsx)("div",{className:"d-flex justify-content-center",children:Object(N.jsx)(A.a,{type:"balls",color:"orange",height:"5%",width:"5%"})}):Object(N.jsxs)("div",{children:[Object(N.jsxs)(h.a,{children:[Object(N.jsxs)(p.a,{children:["Danh s\xe1ch ch\u1ee7 shop ( Page: ",this.state.indexPage+1," )",Object(N.jsx)("div",{style:R.tags,children:Object(N.jsxs)(v.W,{children:[Object(N.jsx)(v.o,{sm:"12",lg:"12",children:Object(N.jsxs)(v.W,{children:[Object(N.jsx)(v.o,{sm:"12",lg:"4",children:Object(N.jsx)("div",{children:Object(N.jsx)(m.a,{style:R.searchInput,onChange:function(t){e.actionSearch(t,"key")},name:"key",value:n,placeholder:"T\u1eeb kh\xf3a"})})}),Object(N.jsx)(v.o,{sm:"12",lg:"4",children:Object(N.jsx)(v.X,{style:R.flexOption,onChange:function(t){e.actionSearch(t,"keyStatus")},custom:!0,children:["Actived","Deactived","Locked"].map((function(e,t){return Object(N.jsx)("option",{value:e,children:e})}))})}),Object(N.jsx)(v.o,{sm:"12",lg:"4",children:Object(N.jsx)(f.a,{color:"primary",style:{width:"100%",marginTop:5},size:"sm",onClick:function(t){e.resetSearch()},children:"L\xe0m m\u1edbi t\xecm ki\u1ebfm"})})]})}),Object(N.jsx)(v.o,{sm:"12",lg:"12",children:Object(N.jsx)(f.a,{outline:!0,color:"primary",style:R.floatRight,size:"sm",onClick:function(t){return e.toggleModal("new")},children:"Th\xeam m\u1edbi"})})]})})]}),Object(N.jsx)(g.a,{children:Object(N.jsxs)("table",{className:"table table-hover table-outline mb-0 d-none d-sm-table",children:[Object(N.jsx)("thead",{className:"thead-light",children:Object(N.jsxs)("tr",{children:[Object(N.jsx)("th",{className:"text-center",children:"STT."}),Object(N.jsx)("th",{className:"text-center",children:"T\xean"}),Object(N.jsx)("th",{className:"text-center",children:"Email"}),Object(N.jsx)("th",{className:"text-center",children:"S\u1ed1 \u0111i\u1ec7n tho\u1ea1i"}),Object(N.jsx)("th",{className:"text-center",children:"Ng\xe0y t\u1ea1o"}),Object(N.jsx)("th",{className:"text-center",children:"Tr\u1ea1ng th\xe1i"}),Object(N.jsx)("th",{className:"text-center",children:"#"})]})}),Object(N.jsx)("tbody",{children:void 0!=a?a.map((function(t,a){return Object(N.jsxs)("tr",{children:[Object(N.jsx)("td",{className:"text-center",children:a+1}),Object(N.jsx)("td",{className:"text-center",children:t.Name}),Object(N.jsx)("td",{className:"text-center",children:t.Email}),Object(N.jsx)("td",{className:"text-center",children:t.Phone}),Object(N.jsx)("td",{className:"text-center",children:new Date(t.Create_Date).toLocaleDateString()+" "+new Date(t.Create_Date).toLocaleTimeString()}),Object(N.jsx)("td",{className:"text-center",children:Object(N.jsx)(v.a,{color:e.getBadge(t.Status),children:t.Status})}),Object(N.jsxs)("td",{className:"text-center",children:[Object(N.jsx)(f.a,{style:R.mgl5,outline:!0,color:"primary",size:"sm",onClick:function(){var a=Object(i.a)(r.a.mark((function a(n){return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.openUpdate(t);case 2:return a.abrupt("return",a.sent);case 3:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}(),children:"C\u1eadp nh\u1eadt"})," ",Object(N.jsx)(f.a,{outline:!0,color:"danger",size:"sm",onClick:function(a){e.openDelete(t)},children:"Xo\xe1"})," "]})]},a)})):""})]})})]}),1==l.length?"":Object(N.jsx)("div",{style:{float:"right",marginRight:"10px",padding:"10px"},children:Object(N.jsx)("tr",{style:R.row,children:l.map((function(t,a){return Object(N.jsx)("td",{children:Object(N.jsx)(f.a,{style:R.pagination,color:a==d?"primary":"danger",onClick:function(t){e.setState({data:l[a],indexPage:a})},children:a+1})})}))})}),Object(N.jsxs)(x.a,{isOpen:this.state.modalCom,className:this.props.className,children:[Object(N.jsx)(j.a,{children:"new"==this.state.action?"T\u1ea1o m\u1edbi":"C\u1eadp nh\u1eadt"}),Object(N.jsxs)(S.a,{children:[Object(N.jsx)(k.a,{field:"Email",label:"Email",value:this.state.Email,placeholder:"Email",type:"email",onChange:function(t){return e.onChange("Email",t.target.value)}}),Object(N.jsx)(k.a,{field:"Address",label:"\u0110\u1ecba ch\u1ec9",value:this.state.Address,placeholder:"\u0110\u1ecba ch\u1ec9",type:"text",onChange:function(t){return e.onChange("Address",t.target.value)}}),Object(N.jsx)(k.a,{field:"Name",label:"T\xean",value:this.state.Name,placeholder:"T\xean",onChange:function(t){return e.onChange("Name",t.target.value)}}),Object(N.jsx)(k.a,{field:"Password",label:"M\u1eadt kh\u1ea9u",value:this.state.Password,type:"password",placeholder:"M\u1eadt kh\u1ea9u",readOnly:"new"!=s,onChange:function(t){return e.onChange("Password",t.target.value)}}),Object(N.jsx)(k.a,{field:"UserName",label:"T\xean \u0111\u0103ng nh\u1eadp",placeholder:"T\xean \u0111\u0103ng nh\u1eadp",value:this.state.UserName,onChange:function(t){return e.onChange("UserName",t.target.value)}}),Object(N.jsx)(k.a,{field:"Phone",label:"S\u1ed1 \u0111i\u1ec7n tho\u1ea1i",value:this.state.Phone,placeholder:"S\u1ed1 \u0111i\u1ec7n tho\u1ea1i",onChange:function(t){return e.onChange("Phone",t.target.value)}}),Object(N.jsxs)("div",{children:[Object(N.jsx)("label",{style:R.flexLabel,htmlFor:"tag",children:"Gi\u1edbi t\xednh:    "}),Object(N.jsxs)("select",{style:R.flexOption,name:"Gender",onChange:function(t){return e.onChange("Gender",t.target.value)},children:[Object(N.jsx)("option",{value:this.state.Gender,children:""==this.state.Gender?" - - - - - - - - - - ":this.state.Gender}),Object(N.jsx)("option",{value:"Nam",children:"Nam"}),Object(N.jsx)("option",{value:"N\u1eef",children:"N\u1eef"})]})]}),Object(N.jsxs)("div",{children:[Object(N.jsx)("label",{style:R.flexLabel,htmlFor:"tag",children:"Ph\xe2n quy\u1ec1n:    "}),Object(N.jsxs)("select",{style:R.flexOption,name:"Role_Id",onChange:function(t){return e.onChange("Role_Id",t.target.value)},children:[Object(N.jsx)("option",{value:this.state.Role_Id,children:"-----"}),"ADMIN"==this.state.role||"ADMINSALE"==this.state.role?o.map((function(e,t){return e.Name==c?Object(N.jsx)("option",{selected:!0,value:e._id,children:e.Name}):Object(N.jsx)("option",{value:e._id,children:e.Name})})):o.map((function(e,t){if("SHOPMANAGER"==e.Name)return Object(N.jsx)("option",{value:e._id,children:e.Name})}))]})]}),"new"==s?"":Object(N.jsxs)("div",{children:[Object(N.jsx)("label",{style:R.flexLabel,htmlFor:"tag",children:"Tr\u1ea1ng th\xe1i:"}),Object(N.jsxs)("select",{style:R.flexOption,name:"Status",onChange:function(t){return e.onChange("Status",t.target.value)},children:[Object(N.jsx)("option",{value:this.state.Status,children:""==this.state.Status?" - - - - - - - - - - ":this.state.Status}),Object(N.jsx)("option",{value:"Actived",children:"Actived"}),Object(N.jsx)("option",{value:"Locked",children:"Locked"}),Object(N.jsx)("option",{value:"Deactived",children:"Deactived"})]})]})]}),Object(N.jsxs)(b.a,{children:[Object(N.jsx)(f.a,{color:"primary",onClick:function(t){"new"===e.state.action?e.addUser():e.updateUser()},disabled:this.state.isLoading,children:"Save"})," ",Object(N.jsx)(f.a,{color:"secondary",onClick:function(t){return e.toggleModal("new")},children:"\u0110\xf3ng"})]})]}),Object(N.jsxs)(x.a,{isOpen:this.state.modalDelete,toggle:function(t){return e.setState({modalDelete:!e.state.modalDelete,delete:null})},className:this.props.className,children:[Object(N.jsx)(j.a,{toggle:function(t){return e.setState({modalDelete:!e.state.modalDelete,delete:null})},children:"Xo\xe1"}),Object(N.jsx)(S.a,{children:Object(N.jsx)("label",{htmlFor:"tag",children:'Do you want to delete user "'.concat(this.state.delete?this.state.delete.Email:"",'" ?')})}),Object(N.jsxs)(b.a,{children:[Object(N.jsx)(f.a,{color:"primary",onClick:function(t){return e.delete()},disabled:this.state.isLoading,children:"Xo\xe1"})," ",Object(N.jsx)(f.a,{color:"secondary",onClick:function(t){return e.setState({modalDelete:!e.state.modalDelete,delete:null})},children:"\u0110\xf3ng"})]})]})]})}}]),s}(u.Component),R={wa10:{width:"5%",float:"left",height:"60px"},sale_times:{width:"8%",float:"left",height:"60px",textAlign:"center"},pagination:{marginRight:"5px"},flexLabel:{width:100},flexOption:{width:160,margin:"1px"},a:{textDecoration:"none"},floatRight:{float:"right",marginTop:"3px"},spinner:{width:"30px"},center:{textAlign:"center"},tbody:{height:"380px",overflowY:"auto"},wh12:{width:"11%",float:"left",height:"60px",textAlign:"center"},ws12:{width:"13%",float:"left",height:"60px",textAlign:"center"},wh15:{width:"15%",float:"left",height:"60px",textAlign:"center"},w5:{width:"22%",float:"left",height:"60px"},w5_10:{width:"5%",float:"left",height:"60px"},row:{float:"left",width:"100%"},success:{color:"green"},danger:{color:"red"},mgl5:{marginLeft:"5px"},tags:{float:"right",marginRight:"5px"},searchInput:{width:"160px",display:"inline-block",margin:"1px"},userActive:{color:"green"},userPending:{color:"red"},nagemonNameCol:{width:"328px"},image:{width:"100px",height:"100px",borderRadius:"99999px"}};t.default=Object(y.b)((function(e){return{data:e.getData_AllAPI}}),{onSaveID:O.a,onSaveSeed:O.b})(P)}.call(this,a(114))},646:function(e,t,a){"use strict";a(2);var n=a(637),s=a.n(n),r=a(17),i=function(e){var t=e.field,a=e.value,n=e.label,i=e.error,o=e.type,c=e.onChange,l=e.checkUserExists,d=e.readOnly,u=e.placeholder,h=e.onClick;return Object(r.jsxs)("div",{className:s()("form-group",{"has-error":i}),children:[Object(r.jsx)("label",{className:"control-label",children:n}),Object(r.jsx)("input",{onChange:c,onClick:h,onBlur:l,value:a,type:o,name:t,placeholder:u,readOnly:d,className:"form-control"}),i&&Object(r.jsx)("span",{className:"help-block",children:i})]})};i.defaultProps={type:"text"},t.a=i},710:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return r}));var n=a(116);function s(e){return{type:n.a,payload:{id:e}}}function r(e){return{type:n.b,payload:{seed:e}}}}}]);
//# sourceMappingURL=61.de430246.chunk.js.map