(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[50],{1278:function(e,t,a){"use strict";a.r(t),function(e){var n=a(165),s=a(113),r=a.n(s),c=a(641),i=a(166),l=a(167),o=a(169),d=a(168),h=a(2),u=a(1261),m=a(1262),j=a(1263),x=a(661),p=a(1264),b=a(1340),f=a(1267),O=a(1268),g=a(1269),S=a(640),v=a(679),_=a(171),y=a(694),N=(a(646),a(644)),C=a(652),w=a(643),k=a.n(w),A=a(729),L=a.n(A),E=a(17),P=new Headers,U=localStorage.getItem("auth");P.append("Authorization","Bearer "+U),P.append("Content-Type","application/json");var R=function(t){Object(o.a)(s,t);var a=Object(d.a)(s);function s(e){var t;return Object(i.a)(this,s),(t=a.call(this,e)).getUserSale=function(){var e=Object(c.a)(r.a.mark((function e(a){var n,s,c,i,l;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.state.company_id,t.setState({isLoading:!0}),s=JSON.parse(n),c={condition:{Company_Id:s.company_id,Sale_Id:a}},e.next=6,k()({baseURL:N.a.BASE_URL,url:N.a.LIST_CUSTOMER,method:"POST",data:c,headers:t.state.token});case 6:i=e.sent,t.pagination(i.data.data),t.setState({dataApi:i.data.data}),l=0,i.data.data.map((function(e){"Actived"==e.Status&&(l+=1)})),t.setState({isLoading:!1,totalActive:l});case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),t.getUserSale_ByMonth=function(){var e=Object(c.a)(r.a.mark((function e(a,n){var s,c,i,l,o,d,h,u;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=t.state.company_id,c=JSON.parse(s),i={month:n,company_id:c.company_id,sale_id:a},e.next=5,k()({baseURL:N.a.BASE_URL,url:N.a.GET_USER_SALE_BY_MONTH,method:"POST",data:i});case 5:l=e.sent,t.setState({dataApi:l.data.data,arrTemp:l.data.data}),o=[],d=t.state.arrTemp,h=r.a.mark((function e(a){var s;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o.some((function(e){return d[a].Phone==e.Phone}))){e.next=7;break}return d[a].count=t.countType(d,d[a].Phone),e.next=4,k()({baseURL:N.a.BASE_URL,url:N.a.GET_COEFFICIENT_PER_SALE,method:"POST",data:{month:n,company_id:c.company_id,phone:d[a].Phone,sale_id:t.props.data.idSale}});case 4:s=e.sent,d[a].coefficient=s.data.data.calculator,o.push(d[a]);case 7:case"end":return e.stop()}}),e)})),u=0;case 11:if(!(u<d.length)){e.next=16;break}return e.delegateYield(h(u),"t0",13);case 13:u++,e.next=11;break;case 16:t.pagination(o),t.setState({isLoading:!1});case 18:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),t.getUserSale_ByMonth_forSale=function(){var e=Object(c.a)(r.a.mark((function e(a,n){var s,c,i,l,o,d,h,u;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=t.state.company_id,t.setState({isLoading:!0}),c=JSON.parse(s),i={month:n,company_id:c.company_id,sale_id:a},e.next=6,k()({baseURL:N.a.BASE_URL,url:N.a.GET_USER_SALE_BY_MONTH,method:"POST",data:i});case 6:l=e.sent,t.setState({dataApi:l.data.data,arrTemp:l.data.data}),o=[],d=t.state.arrTemp,h=r.a.mark((function e(s){var i;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o.some((function(e){return d[s].Phone==e.Phone}))){e.next=7;break}return d[s].count=t.countType(d,d[s].Phone),e.next=4,k()({baseURL:N.a.BASE_URL,url:N.a.GET_COEFFICIENT_PER_SALE,method:"POST",data:{month:n,company_id:c.company_id,phone:d[s].Phone,sale_id:a}});case 4:i=e.sent,d[s].coefficient=i.data.data.calculator,o.push(d[s]);case 7:case"end":return e.stop()}}),e)})),u=0;case 12:if(!(u<d.length)){e.next=17;break}return e.delegateYield(h(u),"t0",14);case 14:u++,e.next=12;break;case 17:t.pagination(o),t.setState({isLoading:!1});case 19:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),t.getAllData=Object(c.a)(r.a.mark((function e(){var a,n,s,c,i,l,o;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.state.company_id,t.setState({isLoading:!0}),n=JSON.parse(a),e.next=5,k()({baseURL:N.a.BASE_URL,url:N.a.LIST_CUSTOMER,method:"POST",data:{condition:{Company_Id:n.company_id,Sale_Id:t.props.data.idSale}},headers:t.state.token});case 5:s=e.sent,t.setState({dataApi:s.data.data}),c=[],i=r.a.mark((function e(a){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c.some((function(e){return s.data.data[a].Phone==e.Phone}))){e.next=7;break}return s.data.data[a].count=t.countType(s.data.data,s.data.data[a].Phone),e.next=4,k()({baseURL:N.a.BASE_URL,url:N.a.CALCULATOR_ALL_USER_OF_SALE,method:"POST",data:{company_id:n.company_id,phone:s.data.data[a].Phone,sale_id:t.props.data.idSale}});case 4:o=e.sent,s.data.data[a].coefficient=o.data.data.calculator,c.push(s.data.data[a]);case 7:case"end":return e.stop()}}),e)})),l=0;case 10:if(!(l<s.data.data.length)){e.next=15;break}return e.delegateYield(i(l),"t0",12);case 12:l++,e.next=10;break;case 15:t.pagination_all(c),t.setState({isLoading:!1});case 17:case"end":return e.stop()}}),e)}))),t.getData=Object(c.a)(r.a.mark((function e(){var a,n,s,c,i,l,o,d;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=t.state,n=a.company_id,s=a.role,t.setState({isLoading:!0}),c=JSON.parse(n),i={company_id:c.company_id},l={condition:{Company_Id:c.company_id,Sale_Id:c.sale_id}},"ADMIN"!=s&&"ADMINSALE"!=s){e.next=11;break}return e.next=8,k()({baseURL:N.a.BASE_URL,url:N.a.GET_SHOP,method:"POST",headers:t.state.token});case 8:o=e.sent,e.next=21;break;case 11:if("SHOPMANAGER"!=s){e.next=17;break}return e.next=14,k()({baseURL:N.a.BASE_URL,url:N.a.GET_SALE,method:"POST",data:i,headers:t.state.token});case 14:o=e.sent,e.next=21;break;case 17:if("SALES"!=s){e.next=21;break}return e.next=20,k()({baseURL:N.a.BASE_URL,url:N.a.LIST_CUSTOMER,method:"POST",data:l,headers:t.state.token});case 20:o=e.sent;case 21:t.pagination(o.data.data),t.setState({dataApi:o.data.data}),d=0,o.data.data.map((function(e){"Actived"==e.Status&&(d+=1)})),t.setState({isLoading:!1,totalActive:d});case 26:case"end":return e.stop()}}),e)}))),t.openDelete=function(e){t.setState({modalDelete:!t.state.modalDelete,delete:e})},t.state={data:[],key:"",activePage:1,page:1,itemsCount:0,limit:20,totalActive:0,modalCom:!1,viewingUser:{},communities:[],updated:"",dataApi:[],action:"new",Email:"",Address:"",Name:"",Phone:"",Gender:"Nam",Company_Id:"",Role_Id:"",UserName:"",Password:"",Sale_Id:"",Code:"",Status:"",modalDelete:!1,delete:null,dataCompany:[],currentCompany:"",dataSale:[],currentSale:"",dataRole:[],currentRole:"",arrPagination:[],indexPage:0,arrPagination_All:[],indexPage_All:0,role:localStorage.getItem("role"),company_id:localStorage.getItem("user"),see_detail:!0,month:0,arrTemp:[],arrMonth:["01","02","03","04","05","06","07","08","09","10","11","12"],arrMonthWithDefault:["00","01","02","03","04","05","06","07","08","09","10","11","12"],isLoading:!0,hidden:!1,nameSale:"",dataAll:[],hidden_all:!1,isSale:!1,token:{Authorization:"Bearer ".concat(localStorage.getItem("token"))},arrAllUser:[]},t}return Object(l.a)(s,[{key:"componentDidMount",value:function(){var e=Object(c.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.getData();case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getSeeder",value:function(){var e=Object(c.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k()({baseURL:N.a.BASE_URL,url:N.a.GET_SEEDER,method:"POST",data:{email:"ktpm489@gmail.com"}});case 2:t=e.sent,console.log(t),this.props.onSaveSeed(t.data.data),this.props.history.push("/history");case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"pagination",value:function(e){var t,a,n,s=[];for(t=0,a=e.length;t<a;t+=5)n=e.slice(t,t+5),s.push(n);0==s.length?this.setState({hidden:!1}):this.setState({hidden:!0}),this.setState({arrPagination:s,data:s[this.state.indexPage]})}},{key:"pagination_all",value:function(e){var t,a,n,s=[];for(t=0,a=e.length;t<a;t+=5)n=e.slice(t,t+5),s.push(n);0==s.length?this.setState({hidden_all:!1}):this.setState({hidden_all:!0}),this.setState({arrPagination_All:s,dataAll:s[this.state.indexPage_All]})}},{key:"countType",value:function(e,t){return e.filter((function(e){return e.Phone==t})).length}},{key:"tableUserSale",value:function(){var e=Object(c.a)(r.a.mark((function e(t,a){var n,s,c,i,l,o,d;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=this.state,s=n.company_id,c=n.arrMonth,i=JSON.parse(s),e.next=4,this.getUserSale_ByMonth(t,"01");case 4:this.props.onSaveID(t),this.getAllData(),l=[],o=0;case 8:if(!(o<c.length)){e.next=16;break}return e.next=11,k()({baseURL:N.a.BASE_URL,url:N.a.GET_USER_SALE_BY_MONTH,method:"POST",data:{month:c[o],company_id:i.company_id,sale_id:this.props.data.idSale}});case 11:d=e.sent,l.push(d.data.data.length);case 13:o++,e.next=8;break;case 16:this.setState({see_detail:!1,nameSale:a,arrAllUser:l});case 17:case"end":return e.stop()}}),e,this)})));return function(t,a){return e.apply(this,arguments)}}()},{key:"tableUserSale_forSale",value:function(){var e=Object(c.a)(r.a.mark((function e(t){var a,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=this.state.company_id,n=JSON.parse(a),e.next=4,this.getUserSale_ByMonth_forSale(n.sale_id,t);case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"searchKey",value:function(e){var t=this.state.indexPage;if(this.setState({key:e}),""!=e){var a=[];this.state.dataApi.map((function(t){(t.Phone.toLocaleUpperCase().includes(e.toLocaleUpperCase())||t.Email.toLocaleUpperCase().includes(e.toLocaleUpperCase()))&&a.push(t)}));var n=0;a.map((function(e){"Actived"==e.Status&&(n+=1)})),this.setState({data:a,totalActive:n})}else{var s=0;this.state.dataApi.map((function(e){"Actived"==e.Status&&(s+=1)})),this.setState({data:this.state.arrPagination[t],totalActive:s})}}},{key:"toggleModal",value:function(){var e=Object(c.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getCompanyData();case 2:return e.next=4,this.getSaleData();case 4:return e.next=6,this.getRoleData();case 6:"new"==t&&this.setState({modalCom:!this.state.modalCom,action:t,Email:"",Name:"",Phone:"",Gender:"Nam",Company_Id:"",Role_Id:"",UserName:"",Password:"",Sale_Id:"",Code:""});case 7:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"onChange",value:function(e,t){this.setState(Object(n.a)({},e,t))}},{key:"addUser",value:function(){var e=Object(c.a)(r.a.mark((function e(){var t,a,n,s,c,i,l,o,d,h,u,m,j,x;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.state,a=t.Email,n=t.Name,s=t.Phone,c=t.UserName,i=t.Code,l=t.Password,o=t.Gender,d=t.Role_Id,h=t.Company_Id,u=t.Sale_Id,m=t.Address,null!=a&&""!=a&&null!=n&&""!=n&&null!=s&&""!=s&&null!=c&&""!=c&&null!=d&&""!=d&&null!=l&&""!=l){e.next=4;break}return alert("Vui lòng nhập đầy đủ trường dữ liệu !!!"),e.abrupt("return");case 4:return j={Email:a,Address:m,Name:n,Phone:s,Gender:o,Company_Id:h,Role_Id:d,UserName:c,Password:l,Sale_Id:u,Code:i},this.setState({isLoading:!0}),e.next=8,k()({baseURL:N.a.BASE_URL,url:N.a.ADD_USER,method:"POST",data:j});case 8:1==(x=e.sent).data.is_success?(this.getData(),this.setState({modalCom:!this.state.modalCom})):(alert(x.data.message),this.setState({isLoading:!1}));case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"openUpdate",value:function(){var e=Object(c.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getCompanyData(t.Company_Id);case 2:return e.next=4,this.getSaleData(t.Sale_Id);case 4:return e.next=6,this.getRoleData(t.Role_Id);case 6:this.setState({modalCom:!this.state.modalCom,action:"update",Email:t.Email,Address:t.Address,Name:t.Name,Phone:t.Phone,Gender:t.Gender,Company_Id:t.Company_Id,Role_Id:t.Role_Id,UserName:t.UserName,Password:t.Password,Sale_Id:t.Sale_Id,Code:t.Code,id:t._id,Status:t.Status});case 7:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"updateUser",value:function(){var e=Object(c.a)(r.a.mark((function e(){var t,a,n,s,c,i,l,o,d,h,u,m,j,x,p;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.state,a=t.Email,n=t.Name,s=t.Phone,c=t.UserName,i=t.Code,l=t.Password,o=t.Gender,d=t.Role_Id,h=t.Company_Id,u=t.Sale_Id,m=t.Status,j=t.Address,null!=a&&""!=a&&null!=n&&""!=n&&null!=s&&""!=s&&null!=c&&""!=c&&null!=l&&""!=l){e.next=4;break}return alert("Vui lòng nhập đầy đủ trường dữ liệu !!!"),e.abrupt("return");case 4:return x={Email:a,Address:j,Name:n,Phone:s,Gender:o,Company_Id:h,Role_Id:d,UserName:c,Password:l,Sale_Id:u,Code:i,id:this.state.id,Status:m},this.setState({isLoading:!0}),e.next=8,k()({baseURL:N.a.BASE_URL,url:N.a.UPDATE_USER,method:"POST",data:x});case 8:1==(p=e.sent).data.is_success?(this.getData(),this.setState({modalCom:!this.state.modalCom})):(alert(p.data.message),this.setState({isLoading:!1}));case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"delete",value:function(){var e=Object(c.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({isLoading:!0}),e.next=3,k()({baseURL:N.a.BASE_URL,url:N.a.DELETE_USER,method:"DELETE",data:{id:this.state.delete._id}});case 3:1==(t=e.sent).data.is_success?(this.getData(),this.setState({modalDelete:!this.state.modalDelete,delete:null})):(alert(t.data.message),this.setState({isLoading:!1}));case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getUsers",value:function(){var t=this,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,n=this.state.limit,s=this.state.key||"",r={method:"GET",headers:P};fetch(e.BASE_URL+"/admin/users?key="+s+"&page="+a+"&limit="+n,r).then((function(e){e.json().then((function(e){t.setState({data:e.data,itemsCount:e.total,activePage:a,totalActive:e.totalActive,updated:""})}))})).catch(console.log)}},{key:"getCompanyData",value:function(){var e=Object(c.a)(r.a.mark((function e(t){var a,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k()({baseURL:N.a.BASE_URL,url:N.a.LIST_COMPANY,method:"POST"});case 2:if(a=e.sent,""==t&&void 0==t){e.next=8;break}return e.next=6,k()({baseURL:N.a.BASE_URL,url:N.a.LIST_COMPANY_WITH_ID+t,method:"POST"});case 6:null==(n=e.sent).data.data&&void 0==n.data.data||this.setState({currentCompany:n.data.data.Name});case 8:this.setState({dataCompany:a.data.data});case 9:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getSaleData",value:function(){var e=Object(c.a)(r.a.mark((function e(t){var a,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k()({baseURL:N.a.BASE_URL,url:N.a.LIST_SALE,method:"GET"});case 2:if(a=e.sent,""==t&&void 0==t){e.next=8;break}return e.next=6,k()({baseURL:N.a.BASE_URL,url:N.a.LIST_SALE_WITH_ID+t,method:"GET"});case 6:null==(n=e.sent).data.data&&void 0==n.data.data||this.setState({currentSale:n.data.data.Name});case 8:this.setState({dataSale:a.data.data});case 9:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getRoleData",value:function(){var e=Object(c.a)(r.a.mark((function e(t){var a,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k()({baseURL:N.a.BASE_URL,url:N.a.LIST_ROLE,method:"GET",headers:this.state.token});case 2:if(a=e.sent,""==t&&void 0==t){e.next=8;break}return e.next=6,k()({baseURL:N.a.BASE_URL,url:N.a.LIST_ROLE_WITH_ID+t,method:"GET",headers:this.state.token});case 6:null==(n=e.sent).data.data&&void 0==n.data.data||this.setState({currentRole:n.data.data.Name});case 8:this.setState({dataRole:a.data.data});case 9:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"inputChange",value:function(e){this.setState(Object(n.a)({},e.target.name,e.target.value))}},{key:"getDataUser_ForSale",value:function(){var e=Object(c.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("SALES"!=this.state.role){e.next=5;break}return this.setState({isSale:!0,month:t}),e.next=5,this.tableUserSale_forSale(t);case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"check",value:function(){var e=Object(c.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("00"!=t.target.value){e.next=5;break}this.getData(),this.setState({isSale:!1}),e.next=8;break;case 5:return e.next=7,this.getDataUser_ForSale(t.target.value);case 7:this.setState({month:t.target.value});case 8:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,a=t.data,n=t.key,s=t.dataCompany,i=t.role,l=t.hidden,o=t.dataAll,d=t.arrPagination_All,h=t.indexPage_All,_=t.currentCompany,y=t.action,N=t.dataRole,w=t.currentRole,k=t.arrPagination,A=t.indexPage,P=t.hidden_all,U=t.isSale;return this.state.isLoading?Object(E.jsx)("div",{className:"d-flex justify-content-center",children:Object(E.jsx)(L.a,{type:"balls",color:"orange",height:"5%",width:"5%"})}):Object(E.jsxs)("div",{children:[Object(E.jsxs)(u.a,{hidden:!this.state.see_detail,children:[Object(E.jsx)(m.a,{children:Object(E.jsx)("div",{class:"container",children:Object(E.jsxs)("div",{class:"row",children:[Object(E.jsxs)("div",{class:"col",children:[Object(E.jsx)("i",{className:"fa fa-align-justify"})," ","ADMIN"==i?"SHOP LIST":"SHOPMANAGER"==i?"SALE LIST":"USER LIST"," ( Page: ",this.state.indexPage+1," )"]}),Object(E.jsx)("div",{class:"col",children:Object(E.jsx)("div",{style:I.tags,children:"SALES"==i?"":Object(E.jsxs)("div",{children:[Object(E.jsx)(j.a,{style:I.searchInput,onChange:function(t){return e.searchKey(t.target.value)},name:"key",value:n,placeholder:"Search"}),Object(E.jsx)(x.a,{outline:!0,color:"primary",style:I.floatRight,size:"sm",onClick:function(){var t=Object(c.a)(r.a.mark((function t(a){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.toggleModal("new");case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),children:"Add"})]})})}),Object(E.jsx)("div",{class:"col",children:"SALES"==i?Object(E.jsxs)("div",{children:[Object(E.jsx)("div",{children:"Choose Month"}),Object(E.jsx)(S.X,{style:{width:"100%",backgroundColor:"#ffff99"},onChange:function(){var t=Object(c.a)(r.a.mark((function t(a){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.check(a);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),custom:!0,size:"sm",name:"selectSm",id:"SelectLm",children:this.state.arrMonthWithDefault.map((function(t,a){return"00"==t?Object(E.jsx)("option",{selected:!0,value:t,children:"Get All"}):t==e.state.month?Object(E.jsx)("option",{selected:!0,value:t,children:t}):Object(E.jsx)("option",{value:t,children:t})}))})]}):""})]})})}),Object(E.jsx)(p.a,{children:"SALES"==i?Object(E.jsxs)("table",{className:"table table-hover table-outline mb-0 d-none d-sm-table",children:[Object(E.jsx)("thead",{className:"thead-light",children:Object(E.jsxs)("tr",{children:[Object(E.jsx)("th",{className:"text-center",children:"Name"}),Object(E.jsx)("th",{className:"text-center",children:"Email"}),Object(E.jsx)("th",{className:"text-center",children:"Phone"}),U?Object(E.jsx)("th",{className:"text-center",children:"Times"}):"",U?Object(E.jsx)("th",{className:"text-center",children:"Coeff"}):"",Object(E.jsx)("th",{className:"text-center",children:"Gender"}),Object(E.jsx)("th",{className:"text-center",children:"Date"}),Object(E.jsx)("th",{className:"text-center",children:"Action"})]})}),Object(E.jsxs)("tbody",{children:[Object(E.jsx)("td",{colSpan:"10",hidden:l,className:"text-center",children:"No users in this month"}),void 0!=a?a.map((function(t,a){return Object(E.jsxs)("tr",{children:[Object(E.jsx)("td",{className:"text-center",children:t.Name}),Object(E.jsx)("td",{className:"text-center",children:t.Email}),Object(E.jsx)("td",{className:"text-center",children:t.Phone}),U?Object(E.jsx)("th",{className:"text-center",children:t.count}):"",U?Object(E.jsx)("th",{className:"text-center",children:t.coefficient}):"",Object(E.jsx)("td",{className:"text-center",children:t.Gender}),Object(E.jsx)("td",{className:"text-center",children:new Date(t.Create_Date).toLocaleDateString()+" "+new Date(t.Create_Date).toLocaleTimeString()}),Object(E.jsx)("td",{className:"text-center",children:Object(E.jsx)(x.a,{outline:!0,color:"primary",size:"sm",onClick:function(){var t=Object(c.a)(r.a.mark((function t(a){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.getSeeder();case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),children:"Detail"})})]},a)})):""]})]}):"ADMIN"==i?Object(E.jsxs)("table",{className:"table table-hover table-outline mb-0 d-none d-sm-table",children:[Object(E.jsx)("thead",{className:"thead-light",children:Object(E.jsxs)("tr",{children:[Object(E.jsx)("th",{className:"text-center",children:"Username"}),Object(E.jsx)("th",{className:"text-center",children:"Name"}),Object(E.jsx)("th",{className:"text-center",children:"Email"}),Object(E.jsx)("th",{className:"text-center",children:"Phone"}),Object(E.jsx)("th",{className:"text-center",children:"Gender"}),Object(E.jsx)("th",{className:"text-center",children:"Code"}),Object(E.jsx)("th",{className:"text-center",children:"Action"})]})}),Object(E.jsx)("tbody",{children:void 0!=a?a.map((function(t,a){return Object(E.jsxs)("tr",{children:[Object(E.jsx)("td",{className:"text-center",children:t.UserName}),Object(E.jsx)("td",{className:"text-center",children:t.Name}),Object(E.jsx)("td",{className:"text-center",children:t.Email}),Object(E.jsx)("td",{className:"text-center",children:t.Phone}),Object(E.jsx)("td",{className:"text-center",children:t.Gender}),Object(E.jsx)("td",{className:"text-center",children:t.Code}),Object(E.jsxs)("td",{className:"text-center",children:[Object(E.jsx)(x.a,{style:I.mgl5,outline:!0,color:"primary",size:"sm",onClick:function(){var a=Object(c.a)(r.a.mark((function a(n){return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.openUpdate(t);case 2:return a.abrupt("return",a.sent);case 3:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}(),children:"Update"})," ",Object(E.jsx)(x.a,{outline:!0,color:"danger",size:"sm",onClick:function(a){e.openDelete(t)},children:"Delete"})," "]})]},a)})):""})]}):Object(E.jsxs)("table",{className:"table table-hover table-outline mb-0 d-none d-sm-table",children:[Object(E.jsx)("thead",{className:"thead-light",children:Object(E.jsxs)("tr",{children:[Object(E.jsx)("th",{className:"text-center",children:"Name"}),Object(E.jsx)("th",{className:"text-center",children:"Email"}),Object(E.jsx)("th",{className:"text-center",children:"Phone"}),Object(E.jsx)("th",{className:"text-center",children:"Gender"}),Object(E.jsx)("th",{className:"text-center",children:"Company Id"}),Object(E.jsx)("th",{className:"text-center",children:"Code"}),Object(E.jsx)("th",{className:"text-center",children:"Action"})]})}),Object(E.jsx)("tbody",{children:void 0!=a?a.map((function(t,a){return Object(E.jsxs)("tr",{children:[Object(E.jsx)("td",{className:"text-center",children:t.UserName}),Object(E.jsx)("td",{className:"text-center",children:t.Name}),Object(E.jsx)("td",{className:"text-center",children:t.Email}),Object(E.jsx)("td",{className:"text-center",children:t.Phone}),Object(E.jsx)("td",{className:"text-center",children:t.Gender}),Object(E.jsx)("td",{className:"text-center",children:t.Code}),Object(E.jsxs)("td",{className:"text-center",children:[Object(E.jsx)(x.a,{style:I.mgl5,outline:!0,color:"primary",size:"sm",onClick:function(){var a=Object(c.a)(r.a.mark((function a(n){return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.openUpdate(t);case 2:return a.abrupt("return",a.sent);case 3:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}(),children:"Update"})," ",Object(E.jsx)(x.a,{outline:!0,color:"danger",size:"sm",onClick:function(a){e.openDelete(t)},children:"Delete"})," ",Object(E.jsx)(x.a,{outline:!0,color:"primary",size:"sm",onClick:function(){var a=Object(c.a)(r.a.mark((function a(n){return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.tableUserSale(t._id,t.Name);case 2:e.setState({month:"01"});case 3:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}(),children:"Detail"})]})]},a)})):""})]})})]}),1==k.length?"":Object(E.jsx)("div",{style:{float:"right",marginRight:"10px",padding:"10px"},children:Object(E.jsx)("tr",{style:I.row,children:k.map((function(t,a){return Object(E.jsx)("td",{children:Object(E.jsx)(x.a,{style:I.pagination,color:a==A?"primary":"danger",onClick:function(t){e.setState({data:k[a],indexPage:a})},children:a+1})})}))})}),Object(E.jsxs)("div",{hidden:this.state.see_detail,children:[Object(E.jsx)(x.a,{color:"primary",style:{margin:"10px",width:"300px"},size:"sm",onClick:function(){var t=Object(c.a)(r.a.mark((function t(a){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.getData(),e.setState({see_detail:!e.state.see_detail});case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),children:"Go back"}),Object(E.jsxs)(u.a,{children:[Object(E.jsxs)(m.a,{children:[Object(E.jsx)("i",{className:"fa fa-align-justify"}),"LIST USER SALE OF SALER ( Sale Name: ",this.state.nameSale,", Page: ",this.state.indexPage+1,")"]}),Object(E.jsx)(p.a,{children:Object(E.jsxs)("table",{className:"table table-hover table-outline mb-0 d-none d-sm-table",children:[Object(E.jsx)("thead",{className:"thead-light",children:Object(E.jsxs)("tr",{children:[Object(E.jsx)("th",{className:"text-center",children:"Name"}),Object(E.jsx)("th",{className:"text-center",children:"Email"}),Object(E.jsx)("th",{className:"text-center",children:"Phone"}),Object(E.jsx)("th",{className:"text-center",children:"Gender"}),Object(E.jsx)("th",{className:"text-center",children:"Time Invite"}),Object(E.jsx)("th",{className:"text-center",children:"Coefficient"}),Object(E.jsx)("th",{className:"text-center",children:"Date"})]})}),Object(E.jsxs)("tbody",{children:[Object(E.jsx)("td",{colSpan:"8",hidden:P,className:"text-center",children:"No users in this month"}),void 0!=o?o.map((function(e,t){return Object(E.jsxs)("tr",{children:[Object(E.jsx)("td",{className:"text-center",children:e.Name}),Object(E.jsx)("td",{className:"text-center",children:e.Email}),Object(E.jsx)("td",{className:"text-center",children:e.Phone}),Object(E.jsx)("td",{className:"text-center",children:e.Gender}),Object(E.jsx)("td",{className:"text-center",children:e.count}),Object(E.jsx)("td",{className:"text-center",children:e.coefficient}),Object(E.jsx)("td",{className:"text-center",children:new Date(e.Create_Date).toLocaleDateString()+" "+new Date(e.Create_Date).toLocaleTimeString()})]},t)})):""]})]})})]}),1==d.length?"":Object(E.jsx)("div",{style:{float:"right",marginRight:"10px",padding:"10px"},children:Object(E.jsx)("tr",{style:I.row,children:d.map((function(t,a){return Object(E.jsx)("td",{children:Object(E.jsx)(x.a,{style:I.pagination,color:a==h?"primary":"danger",onClick:function(t){e.setState({dataAll:d[a],indexPage_All:a})},children:a+1})})}))})}),Object(E.jsxs)(S.h,{rows:!0,className:"cols-2",children:[Object(E.jsx)(S.e,{backgroundColor:"red",children:Object(E.jsx)(S.f,{children:Object(E.jsx)(v.a,{datasets:[{label:"Total user of month ",backgroundColor:"#f87979",data:this.state.arrAllUser}],labels:"months",options:{tooltips:{enabled:!0}}})})}),Object(E.jsxs)(S.e,{backgroundColor:"red",children:[Object(E.jsxs)(u.a,{children:[Object(E.jsx)(m.a,{children:Object(E.jsx)("div",{class:"container",children:Object(E.jsxs)("div",{class:"row",children:[Object(E.jsxs)("div",{class:"col",children:[Object(E.jsx)("i",{className:"justify-content-center"}),this.state.nameSale," ( Page: ",this.state.indexPage+1,", Month: ",this.state.month,")"]}),Object(E.jsx)("div",{class:"col",children:Object(E.jsx)(S.X,{style:{width:300,float:"right",backgroundColor:"#ffff99"},onChange:function(){var t=Object(c.a)(r.a.mark((function t(a){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.getUserSale_ByMonth(e.props.data.idSale,a.target.value);case 2:e.setState({month:a.target.value});case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),custom:!0,size:"sm",name:"selectSm",id:"SelectLm",children:this.state.arrMonth.map((function(t,a){return t==e.state.month?Object(E.jsx)("option",{selected:!0,value:t,children:t}):Object(E.jsx)("option",{value:t,children:t})}))})})]})})}),Object(E.jsx)(p.a,{children:Object(E.jsxs)("table",{className:"table table-hover table-outline mb-0 d-none d-sm-table",children:[Object(E.jsx)("thead",{className:"thead-light",children:Object(E.jsxs)("tr",{children:[Object(E.jsx)("th",{className:"text-center",children:"Name"}),Object(E.jsx)("th",{className:"text-center",children:"Email"}),Object(E.jsx)("th",{className:"text-center",children:"Phone"}),Object(E.jsx)("th",{className:"text-center",children:"Gender"}),Object(E.jsx)("th",{className:"text-center",children:"Time Invite"}),Object(E.jsx)("th",{className:"text-center",children:"Coefficient"})]})}),Object(E.jsxs)("tbody",{children:[Object(E.jsx)("td",{colSpan:"8",hidden:l,className:"text-center",children:"No users in this month"}),void 0!=a?a.map((function(e,t){return Object(E.jsxs)("tr",{children:[Object(E.jsx)("td",{className:"text-center",children:e.Name}),Object(E.jsx)("td",{className:"text-center",children:e.Email}),Object(E.jsx)("td",{className:"text-center",children:e.Phone}),Object(E.jsx)("td",{className:"text-center",children:e.Gender}),Object(E.jsx)("td",{className:"text-center",children:e.count}),Object(E.jsx)("td",{className:"text-center",children:e.coefficient})]},t)})):""]})]})})]}),1==k.length?"":Object(E.jsx)("div",{style:{float:"right",marginRight:"10px",padding:"10px"},children:Object(E.jsx)("tr",{style:I.row,children:k.map((function(t,a){return Object(E.jsx)("td",{children:Object(E.jsx)(x.a,{style:I.pagination,color:a==A?"primary":"danger",onClick:function(t){e.setState({data:k[a],indexPage:a})},children:a+1})})}))})})]})]})]}),Object(E.jsxs)(b.a,{isOpen:this.state.modalCom,className:this.props.className,children:[Object(E.jsx)(f.a,{children:"new"==this.state.action?"T\u1ea1o m\u1edbi":"C\u1eadp nh\u1eadt"}),Object(E.jsxs)(O.a,{children:[Object(E.jsx)(C.a,{field:"Email",label:"Email",value:this.state.Email,placeholder:"Email",type:"email",onChange:function(t){return e.onChange("Email",t.target.value)}}),Object(E.jsx)(C.a,{field:"Address",label:"Address",value:this.state.Address,placeholder:"Email",type:"email",onChange:function(t){return e.onChange("Address",t.target.value)}}),Object(E.jsx)(C.a,{field:"Name",label:"Name",value:this.state.Name,placeholder:"Name",onChange:function(t){return e.onChange("Name",t.target.value)}}),Object(E.jsx)(C.a,{field:"Password",label:"Password",value:this.state.Password,type:"password",placeholder:"Password",readOnly:"new"!=y,onChange:function(t){return e.onChange("Password",t.target.value)}}),Object(E.jsx)(C.a,{field:"Code",label:"Code",placeholder:"Code",value:this.state.Code,onChange:function(t){return e.onChange("Code",t.target.value)}}),Object(E.jsx)(C.a,{field:"UserName",label:"UserName",placeholder:"Username",value:this.state.UserName,onChange:function(t){return e.onChange("UserName",t.target.value)}}),Object(E.jsx)(C.a,{field:"Phone",label:"Phone",value:this.state.Phone,placeholder:"Phone",onChange:function(t){return e.onChange("Phone",t.target.value)}}),Object(E.jsxs)("div",{children:[Object(E.jsx)("label",{style:I.flexLabel,htmlFor:"tag",children:"Gender:    "}),Object(E.jsxs)("select",{style:I.flexOption,name:"Gender",onChange:function(t){return e.onChange("Gender",t.target.value)},children:[Object(E.jsx)("option",{value:this.state.Gender,children:""==this.state.Gender?" - - - - - - - - - - ":this.state.Gender}),Object(E.jsx)("option",{value:"Nam",children:"Nam"}),Object(E.jsx)("option",{value:"N\u1eef",children:"N\u1eef"})]})]}),Object(E.jsxs)("div",{children:[Object(E.jsx)("label",{style:I.flexLabel,htmlFor:"tag",children:"Company:    "}),Object(E.jsxs)("select",{style:I.flexOption,name:"Company_Id",onChange:function(t){return e.onChange("Company_Id",t.target.value)},children:[Object(E.jsx)("option",{value:this.state.Company_Id,children:"-----"}),s.map((function(e,t){return e.Name==_?Object(E.jsx)("option",{selected:!0,value:e._id,children:e.Name}):Object(E.jsx)("option",{value:e._id,children:e.Name})}))]})]}),Object(E.jsxs)("div",{children:[Object(E.jsx)("label",{style:I.flexLabel,htmlFor:"tag",children:"Role:    "}),Object(E.jsxs)("select",{style:I.flexOption,name:"Role_Id",onChange:function(t){return e.onChange("Role_Id",t.target.value)},children:[Object(E.jsx)("option",{value:this.state.Role_Id,children:"-----"}),N.map((function(e,t){return e.Name==w?Object(E.jsx)("option",{selected:!0,value:e._id,children:e.Name}):Object(E.jsx)("option",{value:e._id,children:e.Name})}))]})]})]}),Object(E.jsxs)(g.a,{children:[Object(E.jsx)(x.a,{color:"primary",onClick:function(t){"new"===e.state.action?e.addUser():e.updateUser()},disabled:this.state.isLoading,children:"Save"})," ",Object(E.jsx)(x.a,{color:"secondary",onClick:function(t){return e.toggleModal("new")},children:"Cancel"})]})]}),Object(E.jsxs)(b.a,{isOpen:this.state.modalDelete,toggle:function(t){return e.setState({modalDelete:!e.state.modalDelete,delete:null})},className:this.props.className,children:[Object(E.jsx)(f.a,{toggle:function(t){return e.setState({modalDelete:!e.state.modalDelete,delete:null})},children:"Delete"}),Object(E.jsx)(O.a,{children:Object(E.jsx)("label",{htmlFor:"tag",children:'Do you want to delete user "'.concat(this.state.delete?this.state.delete.Email:"",'" ?')})}),Object(E.jsxs)(g.a,{children:[Object(E.jsx)(x.a,{color:"primary",onClick:function(t){return e.delete()},disabled:this.state.isLoading,children:"Delete"})," ",Object(E.jsx)(x.a,{color:"secondary",onClick:function(t){return e.setState({modalDelete:!e.state.modalDelete,delete:null})},children:"Cancel"})]})]})]})}}]),s}(h.Component),I={wa10:{width:"5%",float:"left",height:"60px"},sale_times:{width:"8%",float:"left",height:"60px",textAlign:"center"},pagination:{marginRight:"5px"},flexLabel:{width:100},flexOption:{width:300},a:{textDecoration:"none"},floatRight:{float:"right",marginTop:"3px"},spinner:{width:"30px"},center:{textAlign:"center"},tbody:{height:"380px",overflowY:"auto"},wh12:{width:"11%",float:"left",height:"60px",textAlign:"center"},ws12:{width:"13%",float:"left",height:"60px",textAlign:"center"},wh15:{width:"15%",float:"left",height:"60px",textAlign:"center"},w5:{width:"22%",float:"left",height:"60px"},w5_10:{width:"5%",float:"left",height:"60px"},row:{float:"left",width:"100%"},success:{color:"green"},danger:{color:"red"},mgl5:{marginLeft:"5px"},tags:{float:"right",marginRight:"5px",width:"250px",marginTop:"10px"},searchInput:{width:"190px",display:"inline-block"},userActive:{color:"green"},userPending:{color:"red"},nagemonNameCol:{width:"328px"},image:{width:"100px",height:"100px",borderRadius:"99999px"}};t.default=Object(_.b)((function(e){return{data:e.getData_AllAPI}}),{onSaveID:y.a,onSaveSeed:y.b})(R)}.call(this,a(114))},694:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return r}));var n=a(116);function s(e){return{type:n.a,payload:{id:e}}}function r(e){return{type:n.b,payload:{seed:e}}}}}]);
//# sourceMappingURL=50.8c05f240.chunk.js.map
