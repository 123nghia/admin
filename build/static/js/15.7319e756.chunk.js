(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[15],{1181:function(e,t,a){"use strict";a.r(t),function(e){var n=a(159),s=a(651),i=a.n(s),r=a(652),l=a(160),c=a(161),o=a(163),d=a(162),u=a(1),h=a(1163),p=a(1164),j=a(1166),m=a(1174),y=a(1175),x=a(1169),b=a(1167),g=a(1176),O=a(1190),f=a(1177),_=a(1178),D=a(1179),E=(a(657),a(688)),v=a.n(E),S=(a(662),a(638)),T=a(640),L=a(653),w=a.n(L),C=a(20),k=new Headers,A=localStorage.getItem("auth");k.append("Authorization","Bearer "+A),k.append("Content-Type","application/json");var I=function(t){Object(o.a)(s,t);var a=Object(d.a)(s);function s(e){var t;return Object(l.a)(this,s),(t=a.call(this,e)).getData=Object(r.a)(i.a.mark((function e(){var a,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.setState({isLoading:!0}),e.next=3,w()({baseURL:S.a.BASE_URL,url:S.a.LIST_KEY,method:"GET"});case 3:a=e.sent,t.pagination(a.data.data),t.setState({dataApi:a.data.data}),n=0,a.data.data.map((function(e){"Actived"==e.Status&&(n+=1)})),t.setState({isLoading:!1,totalActive:n});case 9:case"end":return e.stop()}}),e)}))),t.openDelete=function(e){t.setState({modalDelete:!t.state.modalDelete,delete:e})},t.state={data:[],key:"",activePage:1,page:1,itemsCount:0,limit:20,totalActive:0,modalCom:!1,viewingUser:{},communities:[],updated:"",dataApi:[],action:"new",Name:"",Company_Id:"",Type_Key:"",Start_Date:new Date,End_Date:new Date,Status:"",Value:"",modalDelete:!1,delete:null,dataCompany:[],currentCompany:"",dataTypeKey:[],currentTypeKey:"",arrPagination:[],indexPage:0},t}return Object(c.a)(s,[{key:"componentDidMount",value:function(){var e=Object(r.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.getData();case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"pagination",value:function(e){var t,a,n,s=[];for(t=0,a=e.length;t<a;t+=5)n=e.slice(t,t+5),s.push(n);this.setState({arrPagination:s,data:s[this.state.indexPage]})}},{key:"searchKey",value:function(e){var t=this.state.indexPage;if(this.setState({key:e}),""!=e){var a=[];this.state.dataApi.map((function(t){t.Name.toLocaleUpperCase().includes(e.toLocaleUpperCase())&&a.push(t)}));var n=0;a.map((function(e){"Actived"==e.Status&&(n+=1)})),this.setState({data:a,totalActive:n})}else{var s=0;this.state.dataApi.map((function(e){"Actived"==e.Status&&(s+=1)})),this.setState({data:this.state.arrPagination[t],totalActive:s})}}},{key:"toggleModal",value:function(){var e=Object(r.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getCompanyData();case 2:return e.next=4,this.getTypeKeyData();case 4:"new"==t&&this.setState({modalCom:!this.state.modalCom,action:t,Name:"",Company_Id:"",Type_Key:"",Start_Date:new Date,End_Date:new Date,Value:""});case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"onChange",value:function(e,t){this.setState(Object(n.a)({},e,t))}},{key:"addUser",value:function(){var e=Object(r.a)(i.a.mark((function e(){var t,a,n,s,r,l,c,o,d;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.state,a=t.Name,n=t.Company_Id,s=t.Type_Key,r=t.Start_Date,l=t.End_Date,c=t.Value,null!=a&&""!=a){e.next=4;break}return alert("Please fill in all the requirements"),e.abrupt("return");case 4:return o={Name:a,Company_Id:n,Type_Key:s,Start_Date:r,End_Date:l,Value:c},this.setState({isLoading:!0}),e.next=8,w()({baseURL:S.a.BASE_URL,url:S.a.ADD_KEY,method:"PUT",data:o});case 8:1==(d=e.sent).data.is_success?(this.getData(),this.setState({modalCom:!this.state.modalCom})):(alert(d.data.message),this.setState({isLoading:!1}));case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"openUpdate",value:function(){var e=Object(r.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getCompanyData(t.Company_Id);case 2:return e.next=4,this.getTypeKeyData(t.Type_Key);case 4:this.setState({modalCom:!this.state.modalCom,action:"update",Name:t.Name,Company_Id:t.Company_Id,Type_Key:t.Type_Key,Start_Date:t.Start_Date,End_Date:t.End_Date,Value:t.Value,id:t._id,Status:t.Status});case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"updateUser",value:function(){var e=Object(r.a)(i.a.mark((function e(){var t,a,n,s,r,l,c,o,d,u;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.state,a=t.Name,n=t.Company_Id,s=t.Type_Key,r=t.Start_Date,l=t.End_Date,c=t.Value,o=t.Status,null!=a&&""!=a){e.next=4;break}return alert("Please fill in all the requirements"),e.abrupt("return");case 4:return d={Name:a,Company_Id:n,Type_Key:s,Start_Date:r,End_Date:l,Value:c,id:this.state.id,Status:o},this.setState({isLoading:!0}),e.next=8,w()({baseURL:S.a.BASE_URL,url:S.a.UPDATE_KEY,method:"POST",data:d});case 8:1==(u=e.sent).data.is_success?(this.getData(),this.setState({modalCom:!this.state.modalCom})):(alert(u.data.message),this.setState({isLoading:!1}));case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"delete",value:function(){var e=Object(r.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({isLoading:!0}),e.next=3,w()({baseURL:S.a.BASE_URL,url:S.a.DELETE_KEY,method:"DELETE",data:{id:this.state.delete._id}});case 3:1==(t=e.sent).data.is_success?(this.getData(),this.setState({modalDelete:!this.state.modalDelete,delete:null})):(alert(t.data.message),this.setState({isLoading:!1}));case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getUsers",value:function(){var t=this,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,n=this.state.limit,s=this.state.key||"",i={method:"GET",headers:k};fetch(e.BASE_URL+"/admin/users?key="+s+"&page="+a+"&limit="+n,i).then((function(e){e.json().then((function(e){t.setState({data:e.data,itemsCount:e.total,activePage:a,totalActive:e.totalActive,updated:""})}))})).catch(console.log)}},{key:"getCompanyData",value:function(){var e=Object(r.a)(i.a.mark((function e(t){var a,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w()({baseURL:S.a.BASE_URL,url:S.a.LIST_COMPANY,method:"GET"});case 2:if(a=e.sent,""==t&&void 0==t){e.next=8;break}return e.next=6,w()({baseURL:S.a.BASE_URL,url:S.a.LIST_COMPANY_WITH_ID+t,method:"GET"});case 6:null==(n=e.sent).data.data&&void 0==n.data.data||this.setState({currentCompany:n.data.data.Name});case 8:this.setState({dataCompany:a.data.data});case 9:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getTypeKeyData",value:function(){var e=Object(r.a)(i.a.mark((function e(t){var a,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w()({baseURL:S.a.BASE_URL,url:S.a.LIST_TYPEKEY,method:"GET"});case 2:if(a=e.sent,""==t&&void 0==t){e.next=8;break}return e.next=6,w()({baseURL:S.a.BASE_URL,url:S.a.LIST_TYPEKEY_WITH_ID+t,method:"GET"});case 6:null==(n=e.sent).data.data&&void 0==n.data.data||this.setState({currentTypeKey:n.data.data.Name});case 8:this.setState({dataTypeKey:a.data.data});case 9:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"inputChange",value:function(e){this.setState(Object(n.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){var e=this,t=this.state,a=t.data,n=t.key,s=(t.viewingUser,t.communities,t.dataCompany),l=t.currentCompany,c=t.dataTypeKey,o=t.currentTypeKey,d=t.action,u=t.arrPagination,E=t.indexPage;return this.state.isLoading?Object(C.jsx)("div",{id:"page-loading",children:Object(C.jsxs)("div",{className:"three-balls",children:[Object(C.jsx)("div",{className:"ball ball1"}),Object(C.jsx)("div",{className:"ball ball2"}),Object(C.jsx)("div",{className:"ball ball3"})]})}):Object(C.jsxs)("div",{className:"animated fadeIn",children:[Object(C.jsx)(h.a,{children:Object(C.jsxs)(p.a,{children:[Object(C.jsx)("p",{style:N.success,children:this.state.updated}),Object(C.jsx)("p",{style:N.danger,children:this.state.deleted}),Object(C.jsxs)(j.a,{children:[Object(C.jsxs)(m.a,{children:[Object(C.jsx)("i",{className:"fa fa-align-justify"})," KEY (Total: ",void 0!=this.state.data||null!=this.state.data?this.state.data.length:0,", Active: ",this.state.totalActive,", Page: ",this.state.indexPage+1,")",Object(C.jsx)("div",{style:N.tags,children:Object(C.jsxs)("div",{children:[Object(C.jsx)(y.a,{style:N.searchInput,onChange:function(t){return e.searchKey(t.target.value)},name:"key",value:n,placeholder:"Search"}),Object(C.jsx)(x.a,{outline:!0,color:"primary",style:N.floatRight,size:"sm",onClick:function(){var t=Object(r.a)(i.a.mark((function t(a){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.toggleModal("new");case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),children:"Add"})]})})]}),Object(C.jsx)(b.a,{children:Object(C.jsxs)(g.a,{responsive:!0,children:[Object(C.jsx)("thead",{children:Object(C.jsxs)("tr",{children:[Object(C.jsx)("th",{style:N.wa10,children:"No."}),Object(C.jsx)("th",{style:N.wh12,children:"Name"}),Object(C.jsx)("th",{style:N.wh15,children:"Company ID"}),Object(C.jsx)("th",{style:N.wh15,children:"Type Key"}),Object(C.jsx)("th",{style:N.wh12,children:"Start Date"}),Object(C.jsx)("th",{style:N.wh12,children:"End Date"}),Object(C.jsx)("th",{style:N.wh12,children:"Value"}),Object(C.jsx)("th",{style:N.wh12,children:"Status"}),Object(C.jsx)("th",{style:N.w5,children:"Action"})]})}),Object(C.jsx)("tbody",{children:void 0!=a?a.map((function(t,a){return Object(C.jsxs)("tr",{style:N.row,children:[Object(C.jsx)("td",{style:N.wa10,children:a+1}),Object(C.jsx)("td",{style:N.wh12,children:t.Name}),Object(C.jsx)("td",{style:N.wh15,children:t.Company_Id}),Object(C.jsx)("td",{style:N.wh15,children:t.Type_Key}),Object(C.jsx)("td",{style:N.wh12,children:new Date(t.Start_Date).toLocaleDateString()+" "+new Date(t.Start_Date).toLocaleTimeString()}),Object(C.jsx)("td",{style:N.wh12,children:new Date(t.End_Date).toLocaleDateString()+" "+new Date(t.End_Date).toLocaleTimeString()}),Object(C.jsx)("td",{style:N.wh12,children:t.Value}),Object(C.jsx)("td",{style:N.wh12,children:t.Status}),Object(C.jsxs)("td",{style:N.w5,children:[Object(C.jsx)(x.a,{style:N.mgl5,outline:!0,color:"primary",size:"sm",onClick:function(){var a=Object(r.a)(i.a.mark((function a(n){return i.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.openUpdate(t);case 2:return a.abrupt("return",a.sent);case 3:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}(),children:"Update"})," ",Object(C.jsx)(x.a,{outline:!0,color:"danger",size:"sm",onClick:function(a){e.openDelete(t)},children:"Delete"})]})]},a)})):""})]})})]}),1==u.length?"":Object(C.jsx)("div",{style:{float:"right",marginRight:"10px",padding:"10px"},children:Object(C.jsx)("tr",{style:N.row,children:u.map((function(t,a){return Object(C.jsx)("td",{children:Object(C.jsx)(x.a,{style:N.pagination,color:a==E?"primary":"danger",onClick:function(t){e.setState({data:u[a],indexPage:a})},children:a+1})})}))})})]})}),Object(C.jsxs)(O.a,{isOpen:this.state.modalCom,className:this.props.className,children:[Object(C.jsx)(f.a,{children:"new"==this.state.action?"Create":"Update"}),Object(C.jsxs)(_.a,{children:[Object(C.jsx)(T.a,{field:"Name",label:"Name",value:this.state.Name,placeholder:"Name",onChange:function(t){return e.onChange("Name",t.target.value)}}),Object(C.jsxs)("div",{children:[Object(C.jsx)("label",{style:N.flexLabel,htmlFor:"tag",children:"Company:    "}),Object(C.jsxs)("select",{style:N.flexOption,name:"Company_Id",onChange:function(t){return e.onChange("Company_Id",t.target.value)},children:[Object(C.jsx)("option",{value:this.state.Company_Id,children:"-----"}),s.map((function(e,t){return e.Name==l?Object(C.jsx)("option",{selected:!0,value:e._id,children:e.Name}):Object(C.jsx)("option",{value:e._id,children:e.Name})}))]})]}),Object(C.jsxs)("div",{children:[Object(C.jsx)("label",{style:N.flexLabel,htmlFor:"tag",children:"Type Key:    "}),Object(C.jsxs)("select",{style:N.flexOption,name:"Type_Key",onChange:function(t){return e.onChange("Type_Key",t.target.value)},children:[Object(C.jsx)("option",{value:this.state.Type_Key,children:"-----"}),c.map((function(e,t){return e.Name==o?Object(C.jsx)("option",{selected:!0,value:e._id,children:e.Name}):Object(C.jsx)("option",{value:e._id,children:e.Name})}))]})]}),Object(C.jsxs)("div",{style:N.datePicker,children:[Object(C.jsx)("label",{children:"Start Date:  "}),Object(C.jsx)(v.a,{selected:new Date(this.state.Start_Date),onChange:function(t){return e.setState({Start_Date:t})}})]}),Object(C.jsxs)("div",{style:N.datePicker,children:[Object(C.jsx)("label",{children:"End Date:  "}),Object(C.jsx)(v.a,{selected:new Date(this.state.End_Date),onChange:function(t){return e.setState({End_Date:t})}})]}),Object(C.jsx)(T.a,{field:"Value",label:"Value",value:this.state.Value,placeholder:"Value",onChange:function(t){return e.onChange("Value",t.target.value)}}),"new"==d?"":Object(C.jsxs)("div",{children:[Object(C.jsx)("label",{style:N.flexLabel,htmlFor:"tag",children:"Status:"}),Object(C.jsxs)("select",{style:N.flexOption,name:"Status",onChange:function(t){return e.onChange("Status",t.target.value)},children:[Object(C.jsx)("option",{value:this.state.Status,children:""==this.state.Status?" - - - - - - - - - - ":this.state.Status}),Object(C.jsx)("option",{value:"Actived",children:"Actived"}),Object(C.jsx)("option",{value:"Locked",children:"Locked"}),Object(C.jsx)("option",{value:"Deactived",children:"Deactived"})]})]})]}),Object(C.jsxs)(D.a,{children:[Object(C.jsx)(x.a,{color:"primary",onClick:function(t){"new"===e.state.action?e.addUser():e.updateUser()},disabled:this.state.isLoading,children:"Save"})," ",Object(C.jsx)(x.a,{color:"secondary",onClick:function(t){return e.toggleModal("new")},children:"Cancel"})]})]}),Object(C.jsxs)(O.a,{isOpen:this.state.modalDelete,toggle:function(t){return e.setState({modalDelete:!e.state.modalDelete,delete:null})},className:this.props.className,children:[Object(C.jsx)(f.a,{toggle:function(t){return e.setState({modalDelete:!e.state.modalDelete,delete:null})},children:"Delete"}),Object(C.jsx)(_.a,{children:Object(C.jsx)("label",{htmlFor:"tag",children:'Do you want to delete user "'.concat(this.state.delete?this.state.delete.Email:"",'" ?')})}),Object(C.jsxs)(D.a,{children:[Object(C.jsx)(x.a,{color:"primary",onClick:function(t){return e.delete()},disabled:this.state.isLoading,children:"Delete"})," ",Object(C.jsx)(x.a,{color:"secondary",onClick:function(t){return e.setState({modalDelete:!e.state.modalDelete,delete:null})},children:"Cancel"})]})]})]})}}]),s}(u.Component),N=Object(n.a)({datePicker:{marginBottom:20},wa10:{width:"5%",float:"left",height:"80px"},pagination:{marginRight:"5px"},flexLabel:{width:100},flexOption:{width:300},a:{textDecoration:"none"},floatRight:{float:"right",marginTop:"3px"},spinner:{width:"30px"},center:{textAlign:"center"},tbody:{height:"380px",overflowY:"auto"},wh12:{width:"10%",float:"left",height:"80px"},wh15:{width:"15%",float:"left",height:"80px"},w5:{width:"12%",float:"left",height:"80px"},row:{float:"left",width:"100%"},success:{color:"green"},danger:{color:"red"},mgl5:{marginLeft:"5px"},tags:{float:"right",marginRight:"5px",width:"250px"},searchInput:{width:"190px",display:"inline-block"},userActive:{color:"green"},userPending:{color:"red"},nagemonNameCol:{width:"328px"},image:{width:"100px",height:"100px",borderRadius:"99999px"}},"mgl5",{marginBottom:"0px"});t.default=I}.call(this,a(108))},638:function(e,t,a){"use strict";t.a={BASE_URL:"http://thanhvien.applamdep.com",LIST_USER:"/api/list-user",LIST_CUSTOMER:"/api/list-customer",LIST_USER_WITH_ID:"/api/list-user?id=",ADD_USER:"/api/add-user",UPDATE_USER:"/api/update-user",DELETE_USER:"/api/delete-user",LOGIN_ADMIN:"/api/login_admin",LIST_TYPEKEY:"/api/list-typekey",LIST_TYPEKEY_WITH_ID:"/api/list-typekey?id=",ADD_TYPEKEY:"/api/add-typekey",UPDATE_TYPEKEY:"/api/update-typekey",DELETE_TYPEKEY:"/api/delete-typekey",LIST_ROLE:"/api/list-role",LIST_ROLE_WITH_ID:"/api/list-role?id=",ADD_ROLE:"/api/add-role",UPDATE_ROLE:"/api/update-role",DELETE_ROLE:"/api/delete-role",LIST_SALELOG:"/api/list-salelog",LIST_SALELOG_WITH_ID:"/api/list-salelog?id=",ADD_SALELOG:"/api/add-salelog",UPDATE_SALELOG:"/api/update-salelog",DELETE_SALELOG:"/api/delete-salelog",LIST_SALE:"/api/list-sale",LIST_SALE_WITH_ID:"/api/list-sale?id=",ADD_SALE:"/api/add-sale",UPDATE_SALE:"/api/update-sale",DELETE_SALE:"/api/delete-sale",LIST_KEYORDER:"/api/list-keyorder",LIST_KEYORDER_WITH_ID:"/api/list-keyorder?id=",ADD_KEYORDER:"/api/add-keyorder",UPDATE_KEYORDER:"/api/update-keyorder",DELETE_KEYORDER:"/api/delete-keyorder",LIST_KEY:"/api/list-key",LIST_KEY_WITH_ID:"/api/list-key?id=",ADD_KEY:"/api/add-key",UPDATE_KEY:"/api/update-key",DELETE_KEY:"/api/delete-key",LIST_COMPANY:"/api/list-company",LIST_COMPANY_WITH_ID:"/api/list-company?id=",ADD_COMPANY:"/api/add-company",UPDATE_COMPANY:"/api/update-company",DELETE_COMPANY:"/api/delete-company"}},640:function(e,t,a){"use strict";a(1);var n=a(634),s=a.n(n),i=a(20),r=function(e){var t=e.field,a=e.value,n=e.label,r=e.error,l=e.type,c=e.onChange,o=e.checkUserExists,d=e.readOnly,u=e.placeholder;return Object(i.jsxs)("div",{className:s()("form-group",{"has-error":r}),children:[Object(i.jsx)("label",{className:"control-label",children:n}),Object(i.jsx)("input",{onChange:c,onBlur:o,value:a,type:l,name:t,placeholder:u,readOnly:d,className:"form-control"}),r&&Object(i.jsx)("span",{className:"help-block",children:r})]})};r.defaultProps={type:"text"},t.a=r}}]);
//# sourceMappingURL=15.7319e756.chunk.js.map