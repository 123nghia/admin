(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[10],{1182:function(e,t,a){"use strict";a.r(t),function(e){var s=a(159),n=a(651),i=a.n(n),r=a(652),l=a(160),c=a(161),o=a(163),d=a(162),h=a(1),u=a(1163),p=a(1164),m=a(1166),j=a(1174),b=a(1175),g=a(1169),x=a(1167),f=a(1176),O=a(1190),y=a(1177),E=a(1178),v=a(1179),_=(a(657),a(662),a(638)),S=a(640),D=a(653),L=a.n(D),A=a(20),C=new Headers,w=localStorage.getItem("auth");C.append("Authorization","Bearer "+w),C.append("Content-Type","application/json");var k=function(t){Object(o.a)(n,t);var a=Object(d.a)(n);function n(e){var t;return Object(l.a)(this,n),(t=a.call(this,e)).getData=Object(r.a)(i.a.mark((function e(){var a,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.setState({isLoading:!0}),e.next=3,L()({baseURL:_.a.BASE_URL,url:_.a.LIST_KEYORDER,method:"GET"});case 3:a=e.sent,t.pagination(a.data.data),t.setState({dataApi:a.data.data}),s=0,a.data.data.map((function(e){"Actived"==e.Status&&(s+=1)})),t.setState({isLoading:!1,totalActive:s});case 9:case"end":return e.stop()}}),e)}))),t.openDelete=function(e){t.setState({modalDelete:!t.state.modalDelete,delete:e})},t.state={data:[],key:"",activePage:1,page:1,itemsCount:0,limit:20,totalActive:0,modalCom:!1,viewingUser:{},communities:[],updated:"",dataApi:[],action:"new",UserName:"",Email:"",Company_Id:"",Address:"",Phone:"",Status:"",modalDelete:!1,delete:null,dataCompany:[],currentCompany:"",arrPagination:[],indexPage:0},t}return Object(c.a)(n,[{key:"componentDidMount",value:function(){var e=Object(r.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.getData();case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"pagination",value:function(e){var t,a,s,n=[];for(t=0,a=e.length;t<a;t+=5)s=e.slice(t,t+5),n.push(s);this.setState({arrPagination:n,data:n[this.state.indexPage]})}},{key:"searchKey",value:function(e){var t=this.state.indexPage;if(this.setState({key:e}),""!=e){var a=[];this.state.dataApi.map((function(t){(t.UserName.toLocaleUpperCase().includes(e.toLocaleUpperCase())||t.Email.toLocaleUpperCase().includes(e.toLocaleUpperCase()))&&a.push(t)}));var s=0;a.map((function(e){"Actived"==e.Status&&(s+=1)})),this.setState({data:a,totalActive:s})}else{var n=0;this.state.dataApi.map((function(e){"Actived"==e.Status&&(n+=1)})),this.setState({data:this.state.arrPagination[t],totalActive:n})}}},{key:"toggleModal",value:function(){var e=Object(r.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getCompanyData();case 2:"new"==t&&this.setState({modalCom:!this.state.modalCom,action:t,UserName:"",Email:"",Company_Id:"",Address:"",Phone:"",Status:""});case 3:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"onChange",value:function(e,t){this.setState(Object(s.a)({},e,t))}},{key:"addUser",value:function(){var e=Object(r.a)(i.a.mark((function e(){var t,a,s,n,r,l,c,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.state,a=t.UserName,s=t.Company_Id,n=t.Email,r=t.Address,l=t.Phone,t.Status,null!=a&&""!=a&&null!=n&&""!=n&&null!=r&&""!=r&&null!=l&&""!=l){e.next=4;break}return alert("Please fill in all the requirements"),e.abrupt("return");case 4:return c={UserName:a,Company_Id:s,Email:n,Address:r,Phone:l},this.setState({isLoading:!0}),e.next=8,L()({baseURL:_.a.BASE_URL,url:_.a.ADD_KEYORDER,method:"PUT",data:c});case 8:1==(o=e.sent).data.is_success?(this.getData(),this.setState({modalCom:!this.state.modalCom})):(alert(o.data.message),this.setState({isLoading:!1}));case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"openUpdate",value:function(){var e=Object(r.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getCompanyData(t.Company_Id);case 2:this.setState({modalCom:!this.state.modalCom,action:"update",UserName:t.UserName,Company_Id:t.Company_Id,Email:t.Email,Address:t.Address,Phone:t.Phone,id:t._id,Status:t.Status});case 3:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"updateUser",value:function(){var e=Object(r.a)(i.a.mark((function e(){var t,a,s,n,r,l,c,o,d;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.state,a=t.UserName,s=t.Company_Id,n=t.Email,r=t.Address,l=t.Phone,c=t.Status,null!=a&&""!=a&&null!=n&&""!=n&&null!=r&&""!=r&&null!=l&&""!=l){e.next=4;break}return alert("Please fill in all the requirements"),e.abrupt("return");case 4:return o={UserName:a,Company_Id:s,Email:n,Address:r,Phone:l,id:this.state.id,Status:c},this.setState({isLoading:!0}),e.next=8,L()({baseURL:_.a.BASE_URL,url:_.a.UPDATE_KEYORDER,method:"POST",data:o});case 8:1==(d=e.sent).data.is_success?(this.getData(),this.setState({modalCom:!this.state.modalCom})):(alert(d.data.message),this.setState({isLoading:!1}));case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"delete",value:function(){var e=Object(r.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({isLoading:!0}),e.next=3,L()({baseURL:_.a.BASE_URL,url:_.a.DELETE_KEYORDER,method:"DELETE",data:{id:this.state.delete._id}});case 3:1==(t=e.sent).data.is_success?(this.getData(),this.setState({modalDelete:!this.state.modalDelete,delete:null})):(alert(t.data.message),this.setState({isLoading:!1}));case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getUsers",value:function(){var t=this,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,s=this.state.limit,n=this.state.key||"",i={method:"GET",headers:C};fetch(e.BASE_URL+"/admin/users?key="+n+"&page="+a+"&limit="+s,i).then((function(e){e.json().then((function(e){t.setState({data:e.data,itemsCount:e.total,activePage:a,totalActive:e.totalActive,updated:""})}))})).catch(console.log)}},{key:"getCompanyData",value:function(){var e=Object(r.a)(i.a.mark((function e(t){var a,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L()({baseURL:_.a.BASE_URL,url:_.a.LIST_COMPANY,method:"GET"});case 2:if(a=e.sent,""==t&&void 0==t){e.next=8;break}return e.next=6,L()({baseURL:_.a.BASE_URL,url:_.a.LIST_COMPANY_WITH_ID+t,method:"GET"});case 6:null==(s=e.sent).data.data&&void 0==s.data.data||this.setState({currentCompany:s.data.data.Name});case 8:this.setState({dataCompany:a.data.data});case 9:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"inputChange",value:function(e){this.setState(Object(s.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){var e=this,t=this.state,a=t.data,s=t.key,n=(t.viewingUser,t.communities,t.dataCompany),l=t.currentCompany,c=t.action,o=t.arrPagination,d=t.indexPage;return this.state.isLoading?Object(A.jsx)("div",{id:"page-loading",children:Object(A.jsxs)("div",{className:"three-balls",children:[Object(A.jsx)("div",{className:"ball ball1"}),Object(A.jsx)("div",{className:"ball ball2"}),Object(A.jsx)("div",{className:"ball ball3"})]})}):Object(A.jsxs)("div",{className:"animated fadeIn",children:[Object(A.jsx)(u.a,{children:Object(A.jsxs)(p.a,{children:[Object(A.jsx)("p",{style:T.success,children:this.state.updated}),Object(A.jsx)("p",{style:T.danger,children:this.state.deleted}),Object(A.jsxs)(m.a,{children:[Object(A.jsxs)(j.a,{children:[Object(A.jsx)("i",{className:"fa fa-align-justify"})," KEY ORDER (Total: ",void 0!=this.state.data||null!=this.state.data?this.state.data.length:0,", Active: ",this.state.totalActive,", Page: ",this.state.indexPage+1,")",Object(A.jsx)("div",{style:T.tags,children:Object(A.jsxs)("div",{children:[Object(A.jsx)(b.a,{style:T.searchInput,onChange:function(t){return e.searchKey(t.target.value)},name:"key",value:s,placeholder:"Search"}),Object(A.jsx)(g.a,{outline:!0,color:"primary",style:T.floatRight,size:"sm",onClick:function(){var t=Object(r.a)(i.a.mark((function t(a){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.toggleModal("new");case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),children:"Add"})]})})]}),Object(A.jsx)(x.a,{children:Object(A.jsxs)(f.a,{responsive:!0,children:[Object(A.jsx)("thead",{children:Object(A.jsxs)("tr",{children:[Object(A.jsx)("th",{style:T.wa10,children:"No."}),Object(A.jsx)("th",{style:T.wh12,children:"UserName"}),Object(A.jsx)("th",{style:T.wh15,children:"Company ID"}),Object(A.jsx)("th",{style:T.wh15,children:"Email"}),Object(A.jsx)("th",{style:T.wh15,children:"Address"}),Object(A.jsx)("th",{style:T.wh12,children:"Phone"}),Object(A.jsx)("th",{style:T.wh12,children:"Status"}),Object(A.jsx)("th",{style:T.w5,children:"Action"})]})}),Object(A.jsx)("tbody",{children:void 0!=a?a.map((function(t,a){return Object(A.jsxs)("tr",{style:T.row,children:[Object(A.jsx)("td",{style:T.wa10,children:a+1}),Object(A.jsx)("td",{style:T.wh12,children:t.UserName}),Object(A.jsx)("td",{style:T.wh15,children:t.Company_Id}),Object(A.jsx)("td",{style:T.wh15,children:t.Email}),Object(A.jsx)("td",{style:T.wh15,children:t.Address}),Object(A.jsx)("td",{style:T.wh12,children:t.Phone}),Object(A.jsx)("td",{style:T.wh12,children:t.Status}),Object(A.jsxs)("td",{style:T.w5,children:[Object(A.jsx)(g.a,{style:T.mgl5,outline:!0,color:"primary",size:"sm",onClick:function(){var a=Object(r.a)(i.a.mark((function a(s){return i.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.openUpdate(t);case 2:return a.abrupt("return",a.sent);case 3:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}(),children:"Update"})," ",Object(A.jsx)(g.a,{outline:!0,color:"danger",size:"sm",onClick:function(a){e.openDelete(t)},children:"Delete"})]})]},a)})):""})]})})]}),1==o.length?"":Object(A.jsx)("div",{style:{float:"right",marginRight:"10px",padding:"10px"},children:Object(A.jsx)("tr",{style:T.row,children:o.map((function(t,a){return Object(A.jsx)("td",{children:Object(A.jsx)(g.a,{style:T.pagination,color:a==d?"primary":"danger",onClick:function(t){e.setState({data:o[a],indexPage:a})},children:a+1})})}))})})]})}),Object(A.jsxs)(O.a,{isOpen:this.state.modalCom,className:this.props.className,children:[Object(A.jsx)(y.a,{children:"new"==this.state.action?"Create":"Update"}),Object(A.jsxs)(E.a,{children:[Object(A.jsx)(S.a,{field:"UserName",label:"UserName",value:this.state.UserName,placeholder:"UserName",onChange:function(t){return e.onChange("UserName",t.target.value)}}),Object(A.jsxs)("div",{children:[Object(A.jsx)("label",{style:T.flexLabel,htmlFor:"tag",children:"Company:    "}),Object(A.jsxs)("select",{style:T.flexOption,name:"Company_Id",onChange:function(t){return e.onChange("Company_Id",t.target.value)},children:[Object(A.jsx)("option",{value:this.state.Company_Id,children:"-----"}),n.map((function(e,t){return e.Name==l?Object(A.jsx)("option",{selected:!0,value:e._id,children:e.Name}):Object(A.jsx)("option",{value:e._id,children:e.Name})}))]})]}),Object(A.jsx)(S.a,{field:"Email",label:"Email",value:this.state.Email,placeholder:"Email",onChange:function(t){return e.onChange("Email",t.target.value)}}),Object(A.jsx)(S.a,{field:"Address",label:"Address",value:this.state.Address,placeholder:"Address",onChange:function(t){return e.onChange("Address",t.target.value)}}),Object(A.jsx)(S.a,{field:"Phone",label:"Phone",value:this.state.Phone,placeholder:"Phone",onChange:function(t){return e.onChange("Phone",t.target.value)}}),"new"==c?"":Object(A.jsxs)("div",{children:[Object(A.jsx)("label",{style:T.flexLabel,htmlFor:"tag",children:"Status:"}),Object(A.jsxs)("select",{style:T.flexOption,name:"Status",onChange:function(t){return e.onChange("Status",t.target.value)},children:[Object(A.jsx)("option",{value:this.state.Status,children:""==this.state.Status?" - - - - - - - - - - ":this.state.Status}),Object(A.jsx)("option",{value:"Actived",children:"Actived"}),Object(A.jsx)("option",{value:"Locked",children:"Locked"}),Object(A.jsx)("option",{value:"Deactived",children:"Deactived"})]})]})]}),Object(A.jsxs)(v.a,{children:[Object(A.jsx)(g.a,{color:"primary",onClick:function(t){"new"===e.state.action?e.addUser():e.updateUser()},disabled:this.state.isLoading,children:"Save"})," ",Object(A.jsx)(g.a,{color:"secondary",onClick:function(t){return e.toggleModal("new")},children:"Cancel"})]})]}),Object(A.jsxs)(O.a,{isOpen:this.state.modalDelete,toggle:function(t){return e.setState({modalDelete:!e.state.modalDelete,delete:null})},className:this.props.className,children:[Object(A.jsx)(y.a,{toggle:function(t){return e.setState({modalDelete:!e.state.modalDelete,delete:null})},children:"Delete"}),Object(A.jsx)(E.a,{children:Object(A.jsx)("label",{htmlFor:"tag",children:'Do you want to delete user "'.concat(this.state.delete?this.state.delete.Email:"",'" ?')})}),Object(A.jsxs)(v.a,{children:[Object(A.jsx)(g.a,{color:"primary",onClick:function(t){return e.delete()},disabled:this.state.isLoading,children:"Delete"})," ",Object(A.jsx)(g.a,{color:"secondary",onClick:function(t){return e.setState({modalDelete:!e.state.modalDelete,delete:null})},children:"Cancel"})]})]})]})}}]),n}(h.Component),T=Object(s.a)({datePicker:{marginBottom:20},wa10:{width:"5%",float:"left",height:"80px"},pagination:{marginRight:"5px"},flexLabel:{width:100},flexOption:{width:300},a:{textDecoration:"none"},floatRight:{float:"right",marginTop:"3px"},spinner:{width:"30px"},center:{textAlign:"center"},tbody:{height:"380px",overflowY:"auto"},wh12:{width:"10%",float:"left",height:"80px"},wh15:{width:"16%",float:"left",height:"80px"},w5:{width:"12%",float:"left",height:"80px"},row:{float:"left",width:"100%"},success:{color:"green"},danger:{color:"red"},mgl5:{marginLeft:"5px"},tags:{float:"right",marginRight:"5px",width:"250px"},searchInput:{width:"190px",display:"inline-block"},userActive:{color:"green"},userPending:{color:"red"},nagemonNameCol:{width:"328px"},image:{width:"100px",height:"100px",borderRadius:"99999px"}},"mgl5",{marginBottom:"0px"});t.default=k}.call(this,a(108))},638:function(e,t,a){"use strict";t.a={BASE_URL:"http://thanhvien.applamdep.com",LIST_USER:"/api/list-user",LIST_CUSTOMER:"/api/list-customer",LIST_USER_WITH_ID:"/api/list-user?id=",ADD_USER:"/api/add-user",UPDATE_USER:"/api/update-user",DELETE_USER:"/api/delete-user",LOGIN_ADMIN:"/api/login_admin",LIST_TYPEKEY:"/api/list-typekey",LIST_TYPEKEY_WITH_ID:"/api/list-typekey?id=",ADD_TYPEKEY:"/api/add-typekey",UPDATE_TYPEKEY:"/api/update-typekey",DELETE_TYPEKEY:"/api/delete-typekey",LIST_ROLE:"/api/list-role",LIST_ROLE_WITH_ID:"/api/list-role?id=",ADD_ROLE:"/api/add-role",UPDATE_ROLE:"/api/update-role",DELETE_ROLE:"/api/delete-role",LIST_SALELOG:"/api/list-salelog",LIST_SALELOG_WITH_ID:"/api/list-salelog?id=",ADD_SALELOG:"/api/add-salelog",UPDATE_SALELOG:"/api/update-salelog",DELETE_SALELOG:"/api/delete-salelog",LIST_SALE:"/api/list-sale",LIST_SALE_WITH_ID:"/api/list-sale?id=",ADD_SALE:"/api/add-sale",UPDATE_SALE:"/api/update-sale",DELETE_SALE:"/api/delete-sale",LIST_KEYORDER:"/api/list-keyorder",LIST_KEYORDER_WITH_ID:"/api/list-keyorder?id=",ADD_KEYORDER:"/api/add-keyorder",UPDATE_KEYORDER:"/api/update-keyorder",DELETE_KEYORDER:"/api/delete-keyorder",LIST_KEY:"/api/list-key",LIST_KEY_WITH_ID:"/api/list-key?id=",ADD_KEY:"/api/add-key",UPDATE_KEY:"/api/update-key",DELETE_KEY:"/api/delete-key",LIST_COMPANY:"/api/list-company",LIST_COMPANY_WITH_ID:"/api/list-company?id=",ADD_COMPANY:"/api/add-company",UPDATE_COMPANY:"/api/update-company",DELETE_COMPANY:"/api/delete-company"}},640:function(e,t,a){"use strict";a(1);var s=a(634),n=a.n(s),i=a(20),r=function(e){var t=e.field,a=e.value,s=e.label,r=e.error,l=e.type,c=e.onChange,o=e.checkUserExists,d=e.readOnly,h=e.placeholder;return Object(i.jsxs)("div",{className:n()("form-group",{"has-error":r}),children:[Object(i.jsx)("label",{className:"control-label",children:s}),Object(i.jsx)("input",{onChange:c,onBlur:o,value:a,type:l,name:t,placeholder:h,readOnly:d,className:"form-control"}),r&&Object(i.jsx)("span",{className:"help-block",children:r})]})};r.defaultProps={type:"text"},t.a=r},662:function(e,t,a){}}]);
//# sourceMappingURL=10.8153e1d6.chunk.js.map