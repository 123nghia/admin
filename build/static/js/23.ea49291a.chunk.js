(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[23],{1198:function(e,t,a){"use strict";a.r(t),function(e){var n=a(170),i=a(115),s=a.n(i),l=a(657),r=a(166),c=a(167),d=a(169),o=a(168),u=a(2),h=a(684),p=a(685),j=a(1109),E=a(1188),S=a(1189),m=a(1183),_=a(1110),g=a(1190),O=a(1204),x=a(1191),b=a(1192),f=a(1193),L=(a(664),a(697)),D=a.n(L),y=(a(669),a(646)),v=a(655),A=a.n(v),T=a(21),w=new Headers,I=localStorage.getItem("auth");w.append("Authorization","Bearer "+I),w.append("Content-Type","application/json");var k=function(t){Object(d.a)(i,t);var a=Object(o.a)(i);function i(e){var t;return Object(r.a)(this,i),(t=a.call(this,e)).getData=Object(l.a)(s.a.mark((function e(){var a,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.setState({isLoading:!0}),e.next=3,A()({baseURL:y.a.BASE_URL,url:y.a.LIST_SALELOG,method:"GET"});case 3:a=e.sent,t.pagination(a.data.data),t.setState({dataApi:a.data.data}),n=0,a.data.data.map((function(e){"Actived"==e.Status&&(n+=1)})),t.setState({isLoading:!1,totalActive:n});case 9:case"end":return e.stop()}}),e)}))),t.openDelete=function(e){t.setState({modalDelete:!t.state.modalDelete,delete:e})},t.state={data:[],key:"",activePage:1,page:1,itemsCount:0,limit:20,totalActive:0,modalCom:!1,viewingUser:{},communities:[],updated:"",dataApi:[],action:"new",Sale_Id:"",End_Date:new Date,Status:"",modalDelete:!1,delete:null,dataSale:[],currentSale:"",arrPagination:[],indexPage:0},t}return Object(c.a)(i,[{key:"componentDidMount",value:function(){var e=Object(l.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.getData();case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"pagination",value:function(e){var t,a,n,i=[];for(t=0,a=e.length;t<a;t+=5)n=e.slice(t,t+5),i.push(n);0!=i.length?this.setState({arrPagination:i,data:i[this.state.indexPage]}):this.setState({arrPagination:i,data:[]})}},{key:"searchKey",value:function(e){}},{key:"toggleModal",value:function(){var e=Object(l.a)(s.a.mark((function e(t){var a,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=this.state,a.Sale_Id,n=a.End_Date,e.next=3,this.getSaleData();case 3:"new"==t&&this.setState({modalCom:!this.state.modalCom,action:t,End_Date:n,Sale_Id:""});case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"onChange",value:function(e,t){this.setState(Object(n.a)({},e,t))}},{key:"addUser",value:function(){var e=Object(l.a)(s.a.mark((function e(){var t,a,n,i,l;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.state,a=t.Sale_Id,n=t.End_Date,i={End_Date:n,Sale_Id:a},this.setState({isLoading:!0}),e.next=5,A()({baseURL:y.a.BASE_URL,url:y.a.ADD_SALELOG,method:"PUT",data:i});case 5:1==(l=e.sent).data.is_success?(this.getData(),this.setState({modalCom:!this.state.modalCom})):(alert(l.data.message),this.setState({isLoading:!1}));case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"openUpdate",value:function(){var e=Object(l.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getSaleData(t.Sale_Id);case 2:this.setState({modalCom:!this.state.modalCom,action:"update",Sale_Id:t.Sale_Id,End_Date:t.End_Date,id:t._id,Status:t.Status});case 3:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"updateUser",value:function(){var e=Object(l.a)(s.a.mark((function e(){var t,a,n,i,l,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.state,a=t.End_Date,n=t.Sale_Id,i=t.Status,l={End_Date:a,Sale_Id:n,id:this.state.id,Status:i},this.setState({isLoading:!0}),e.next=5,A()({baseURL:y.a.BASE_URL,url:y.a.UPDATE_SALELOG,method:"POST",data:l});case 5:1==(r=e.sent).data.is_success?(this.getData(),this.setState({modalCom:!this.state.modalCom})):(alert(r.data.message),this.setState({isLoading:!1}));case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"delete",value:function(){var e=Object(l.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({isLoading:!0}),e.next=3,A()({baseURL:y.a.BASE_URL,url:y.a.DELETE_SALELOG,method:"DELETE",data:{id:this.state.delete._id}});case 3:1==(t=e.sent).data.is_success?(this.getData(),this.setState({modalDelete:!this.state.modalDelete,delete:null})):(alert(t.data.message),this.setState({isLoading:!1}));case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getUsers",value:function(){var t=this,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,n=this.state.limit,i=this.state.key||"",s={method:"GET",headers:w};fetch(e.BASE_URL+"/admin/users?key="+i+"&page="+a+"&limit="+n,s).then((function(e){e.json().then((function(e){t.setState({data:e.data,itemsCount:e.total,activePage:a,totalActive:e.totalActive,updated:""})}))})).catch(console.log)}},{key:"getSaleData",value:function(){var e=Object(l.a)(s.a.mark((function e(t){var a,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A()({baseURL:y.a.BASE_URL,url:y.a.LIST_SALE,method:"GET"});case 2:if(a=e.sent,""==t&&void 0==t){e.next=8;break}return e.next=6,A()({baseURL:y.a.BASE_URL,url:y.a.LIST_SALE_WITH_ID+t,method:"GET"});case 6:null==(n=e.sent).data.data&&void 0==n.data.data||this.setState({currentSale:n.data.data.Name});case 8:this.setState({dataSale:a.data.data});case 9:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"inputChange",value:function(e){this.setState(Object(n.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){var e=this,t=this.state,a=t.data,n=t.key,i=(t.viewingUser,t.communities,t.dataSale),r=t.currentSale,c=t.action,d=t.arrPagination,o=t.indexPage,u=t.End_Date;return this.state.isLoading?Object(T.jsx)("div",{id:"page-loading",children:Object(T.jsxs)("div",{className:"three-balls",children:[Object(T.jsx)("div",{className:"ball ball1"}),Object(T.jsx)("div",{className:"ball ball2"}),Object(T.jsx)("div",{className:"ball ball3"})]})}):Object(T.jsxs)("div",{className:"animated fadeIn",children:[Object(T.jsx)(h.a,{children:Object(T.jsxs)(p.a,{children:[Object(T.jsx)("p",{style:C.success,children:this.state.updated}),Object(T.jsx)("p",{style:C.danger,children:this.state.deleted}),Object(T.jsxs)(j.a,{children:[Object(T.jsxs)(E.a,{children:[Object(T.jsx)("i",{className:"fa fa-align-justify"})," PAKAGE SALE LOG (Total: ",void 0!=this.state.data||null!=this.state.data?this.state.data.length:0,", Active: ",this.state.totalActive,", Page: ",this.state.indexPage+1,")",Object(T.jsx)("div",{style:C.tags,children:Object(T.jsxs)("div",{children:[Object(T.jsx)(S.a,{style:C.searchInput,onChange:function(t){return e.searchKey(t.target.value)},name:"key",value:n,placeholder:"Search"}),Object(T.jsx)(m.a,{outline:!0,color:"primary",style:C.floatRight,size:"sm",onClick:function(){var t=Object(l.a)(s.a.mark((function t(a){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.toggleModal("new");case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),children:"Add"})]})})]}),Object(T.jsx)(_.a,{children:Object(T.jsxs)(g.a,{responsive:!0,children:[Object(T.jsx)("thead",{children:Object(T.jsxs)("tr",{children:[Object(T.jsx)("th",{style:C.wa10,children:"No."}),Object(T.jsx)("th",{style:C.wh25,children:"Sale ID"}),Object(T.jsx)("th",{style:C.wh25,children:"End Date"}),Object(T.jsx)("th",{style:C.wh25,children:"Status"}),Object(T.jsx)("th",{style:C.w5,children:"Action"})]})}),Object(T.jsx)("tbody",{children:void 0!=a?a.map((function(t,a){return Object(T.jsxs)("tr",{style:C.row,children:[Object(T.jsx)("td",{style:C.wa10,children:a+1}),Object(T.jsx)("td",{style:C.wh25,children:t.Sale_Id}),Object(T.jsx)("td",{style:C.wh25,children:new Date(t.End_Date).toLocaleDateString()+" "+new Date(t.End_Date).toLocaleTimeString()}),Object(T.jsx)("td",{style:C.wh25,children:t.Status}),Object(T.jsxs)("td",{style:C.w5,children:[Object(T.jsx)(m.a,{style:C.mgl5,outline:!0,color:"primary",size:"sm",onClick:function(){var a=Object(l.a)(s.a.mark((function a(n){return s.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.openUpdate(t);case 2:return a.abrupt("return",a.sent);case 3:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}(),children:"Update"})," ",Object(T.jsx)(m.a,{outline:!0,color:"danger",size:"sm",onClick:function(a){e.openDelete(t)},children:"Delete"})]})]},a)})):""})]})})]}),1==d.length?"":Object(T.jsx)("div",{style:{float:"right",marginRight:"10px",padding:"10px"},children:Object(T.jsx)("tr",{style:C.row,children:d.map((function(t,a){return Object(T.jsx)("td",{children:Object(T.jsx)(m.a,{style:C.pagination,color:a==o?"primary":"danger",onClick:function(t){e.setState({data:d[a],indexPage:a})},children:a+1})})}))})})]})}),Object(T.jsxs)(O.a,{isOpen:this.state.modalCom,className:this.props.className,children:[Object(T.jsx)(x.a,{children:"new"==this.state.action?"Create":"Update"}),Object(T.jsxs)(b.a,{children:[Object(T.jsxs)("div",{style:C.datePicker,children:[Object(T.jsx)("label",{children:"End Date:  "}),Object(T.jsx)(D.a,{selected:new Date(u),onChange:function(t){return e.setState({End_Date:t})}})]}),"new"==c?"":Object(T.jsxs)("div",{children:[Object(T.jsx)("label",{style:C.flexLabel,htmlFor:"tag",children:"Status    "}),Object(T.jsxs)("select",{style:C.flexOption,name:"Status",onChange:function(t){return e.onChange("Status",t.target.value)},children:[Object(T.jsx)("option",{value:this.state.Status,children:""==this.state.Status?" - - - - - - - - - - ":this.state.Status}),Object(T.jsx)("option",{value:"Actived",children:"Actived"}),Object(T.jsx)("option",{value:"Locked",children:"Locked"}),Object(T.jsx)("option",{value:"Deactived",children:"Deactived"})]})]}),Object(T.jsxs)("div",{children:[Object(T.jsx)("label",{style:C.flexLabel,htmlFor:"tag",children:"Sale:    "}),Object(T.jsxs)("select",{style:C.flexOption,name:"Sale_Id",onChange:function(t){return e.onChange("Sale_Id",t.target.value)},children:[Object(T.jsx)("option",{value:this.state.Sale_Id,children:"-----"}),i.map((function(e,t){return e.Name==r?Object(T.jsx)("option",{selected:!0,value:e._id,children:e.Name}):Object(T.jsx)("option",{value:e._id,children:e.Name})}))]})]})]}),Object(T.jsxs)(f.a,{children:[Object(T.jsx)(m.a,{color:"primary",onClick:function(t){"new"===e.state.action?e.addUser():e.updateUser()},disabled:this.state.isLoading,children:"Save"})," ",Object(T.jsx)(m.a,{color:"secondary",onClick:function(t){return e.toggleModal("new")},children:"Cancel"})]})]}),Object(T.jsxs)(O.a,{isOpen:this.state.modalDelete,toggle:function(t){return e.setState({modalDelete:!e.state.modalDelete,delete:null})},className:this.props.className,children:[Object(T.jsx)(x.a,{toggle:function(t){return e.setState({modalDelete:!e.state.modalDelete,delete:null})},children:"Delete"}),Object(T.jsx)(b.a,{children:Object(T.jsx)("label",{htmlFor:"tag",children:'Do you want to delete user "'.concat(this.state.delete?this.state.delete.Email:"",'" ?')})}),Object(T.jsxs)(f.a,{children:[Object(T.jsx)(m.a,{color:"primary",onClick:function(t){return e.delete()},disabled:this.state.isLoading,children:"Delete"})," ",Object(T.jsx)(m.a,{color:"secondary",onClick:function(t){return e.setState({modalDelete:!e.state.modalDelete,delete:null})},children:"Cancel"})]})]})]})}}]),i}(u.Component),C=Object(n.a)({datePicker:{marginBottom:20},wa10:{width:"5%",float:"left",height:"80px"},pagination:{marginRight:"5px"},flexLabel:{width:100},flexOption:{width:300},a:{textDecoration:"none"},floatRight:{float:"right",marginTop:"3px"},spinner:{width:"30px"},center:{textAlign:"center"},tbody:{height:"380px",overflowY:"auto"},wh25:{width:"25%",float:"left",height:"80px"},wh15:{width:"15%",float:"left",height:"80px"},w5:{width:"15%",float:"left",height:"80px"},row:{float:"left",width:"100%"},success:{color:"green"},danger:{color:"red"},mgl5:{marginLeft:"5px"},tags:{float:"right",marginRight:"5px",width:"250px"},searchInput:{width:"190px",display:"inline-block"},userActive:{color:"green"},userPending:{color:"red"},nagemonNameCol:{width:"328px"},image:{width:"100px",height:"100px",borderRadius:"99999px"}},"mgl5",{marginBottom:"0px"});t.default=k}.call(this,a(114))},646:function(e,t,a){"use strict";t.a={BASE_URL:"http://thanhvien.applamdep.com",LIST_USER:"/api/list-user",LIST_USER_WITH_ID:"/api/list-user?id=",ADD_USER:"/api/add-user",UPDATE_USER:"/api/update-user",DELETE_USER:"/api/delete-user",LOGIN_ADMIN:"/api/login_admin",GET_SHOP:"/api/get-shop",GET_SALE:"/api/get-sale",GET_COEFFICIENT:"/api/calculator-coefficient-user",GET_COEFFICIENT_PER_SALE:"/api/calculator-coefficient-user-per-sale",GET_USER_SALE_BY_MONTH:"/api/get-user-of-sale-by-month",CALCULATOR_ALL_USER_OF_COMPANY:"/api/calculator-all-user-company",CALCULATOR_ALL_USER_OF_SALE:"/api/calculator-all-user-of-sale",LIST_CUSTOMER:"/api/list-customer",LIST_CUSTOMER_BY_MONTH:"/api/get-user-sale-by-month",LIST_TYPEKEY:"/api/list-typekey",LIST_TYPEKEY_WITH_ID:"/api/list-typekey?id=",ADD_TYPEKEY:"/api/add-typekey",UPDATE_TYPEKEY:"/api/update-typekey",DELETE_TYPEKEY:"/api/delete-typekey",LIST_ROLE:"/api/list-role",LIST_ROLE_WITH_ID:"/api/list-role?id=",ADD_ROLE:"/api/add-role",UPDATE_ROLE:"/api/update-role",DELETE_ROLE:"/api/delete-role",LIST_SALELOG:"/api/list-salelog",LIST_SALELOG_WITH_ID:"/api/list-salelog?id=",ADD_SALELOG:"/api/add-salelog",UPDATE_SALELOG:"/api/update-salelog",DELETE_SALELOG:"/api/delete-salelog",LIST_SALE:"/api/list-sale",LIST_SALE_WITH_ID:"/api/list-sale?id=",ADD_SALE:"/api/add-sale",UPDATE_SALE:"/api/update-sale",DELETE_SALE:"/api/delete-sale",LIST_KEYORDER:"/api/list-keyorder",LIST_KEYORDER_WITH_ID:"/api/list-keyorder?id=",ADD_KEYORDER:"/api/add-keyorder",UPDATE_KEYORDER:"/api/update-keyorder",DELETE_KEYORDER:"/api/delete-keyorder",LIST_KEY:"/api/list-key",LIST_KEY_WITH_ID:"/api/list-key?id=",ADD_KEY:"/api/add-key",UPDATE_KEY:"/api/update-key",DELETE_KEY:"/api/delete-key",LIST_COMPANY:"/api/list-company",LIST_COMPANY_WITH_ID:"/api/list-company?id=",ADD_COMPANY:"/api/add-company",UPDATE_COMPANY:"/api/update-company",DELETE_COMPANY:"/api/delete-company"}}}]);
//# sourceMappingURL=23.ea49291a.chunk.js.map