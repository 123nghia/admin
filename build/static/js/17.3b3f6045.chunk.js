(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[17],{1185:function(e,t,a){"use strict";a.r(t),function(e){var s=a(159),i=a(651),n=a.n(i),r=a(652),l=a(160),c=a(161),o=a(163),d=a(162),u=a(1),h=a(1163),p=a(1164),j=a(1166),m=a(1174),g=a(1175),f=a(1169),b=a(1167),O=a(1176),x=a(1190),E=a(1177),v=a(1178),y=a(1179),S=(a(657),a(638)),L=a(640),D=a(653),_=a.n(D),A=a(20),k=new Headers,w=localStorage.getItem("auth");k.append("Authorization","Bearer "+w),k.append("Content-Type","application/json");var T=function(t){Object(o.a)(i,t);var a=Object(d.a)(i);function i(e){var t;return Object(l.a)(this,i),(t=a.call(this,e)).getData=Object(r.a)(n.a.mark((function e(){var a,s;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.setState({isLoading:!0}),e.next=3,_()({baseURL:S.a.BASE_URL,url:S.a.LIST_ROLE,method:"GET"});case 3:a=e.sent,t.pagination(a.data.data),t.setState({dataApi:a.data.data}),s=0,a.data.data.map((function(e){"Actived"==e.Status&&(s+=1)})),t.setState({isLoading:!1,totalActive:s});case 9:case"end":return e.stop()}}),e)}))),t.openDelete=function(e){t.setState({modalDelete:!t.state.modalDelete,delete:e})},t.state={data:[],key:"",activePage:1,page:1,itemsCount:0,limit:20,totalActive:0,modalCom:!1,viewingUser:{},communities:[],updated:"",dataApi:[],action:"new",Name:"",Status:"",modalDelete:!1,delete:null,arrPagination:[],indexPage:0},t}return Object(c.a)(i,[{key:"componentDidMount",value:function(){var e=Object(r.a)(n.a.mark((function e(){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.getData();case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"pagination",value:function(e){var t,a,s,i=[];for(t=0,a=e.length;t<a;t+=5)s=e.slice(t,t+5),i.push(s);this.setState({arrPagination:i,data:i[this.state.indexPage]})}},{key:"searchKey",value:function(e){if(this.setState({key:e}),""!=e){var t=[];this.state.dataApi.map((function(a){a.Name.toLocaleUpperCase().includes(e.toLocaleUpperCase())&&t.push(a)}));var a=0;t.map((function(e){"Actived"==e.Status&&(a+=1)})),this.setState({data:t,totalActive:a})}else{var s=0;this.state.dataApi.map((function(e){"Actived"==e.Status&&(s+=1)})),this.setState({data:this.state.dataApi,totalActive:s})}}},{key:"toggleModal",value:function(){var e=Object(r.a)(n.a.mark((function e(t){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:"new"==t&&this.setState({modalCom:!this.state.modalCom,action:t,Name:""});case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"onChange",value:function(e,t){this.setState(Object(s.a)({},e,t))}},{key:"addRoles",value:function(){var e=Object(r.a)(n.a.mark((function e(){var t,a,s;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!=(t=this.state.Name)&&""!=t){e.next=4;break}return alert("Please fill in all the requirements"),e.abrupt("return");case 4:return a={Name:t},this.setState({isLoading:!0}),e.next=8,_()({baseURL:S.a.BASE_URL,url:S.a.ADD_ROLE,method:"PUT",data:a});case 8:1==(s=e.sent).data.is_success?(this.getData(),this.setState({modalCom:!this.state.modalCom})):(alert(s.data.message),this.setState({isLoading:!1}));case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"openUpdate",value:function(){var e=Object(r.a)(n.a.mark((function e(t){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.setState({modalCom:!this.state.modalCom,action:"update",Name:t.Name,id:t._id,Status:t.Status});case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"updateUser",value:function(){var e=Object(r.a)(n.a.mark((function e(){var t,a,s,i,r;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.state,a=t.Name,s=t.Status,null!=a&&""!=a){e.next=4;break}return alert("Please fill in all the requirements"),e.abrupt("return");case 4:return i={Name:a,id:this.state.id,Status:s},this.setState({isLoading:!0}),e.next=8,_()({baseURL:S.a.BASE_URL,url:S.a.UPDATE_ROLE,method:"POST",data:i});case 8:1==(r=e.sent).data.is_success?(this.getData(),this.setState({modalCom:!this.state.modalCom})):(alert(r.data.message),this.setState({isLoading:!1}));case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"delete",value:function(){var e=Object(r.a)(n.a.mark((function e(){var t;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({isLoading:!0}),e.next=3,_()({baseURL:S.a.BASE_URL,url:S.a.DELETE_ROLE,method:"DELETE",data:{id:this.state.delete._id}});case 3:1==(t=e.sent).data.is_success?(this.getData(),this.setState({modalDelete:!this.state.modalDelete,delete:null})):(alert(t.data.message),this.setState({isLoading:!1}));case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getUsers",value:function(){var t=this,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,s=this.state.limit,i=this.state.key||"",n={method:"GET",headers:k};fetch(e.BASE_URL+"/admin/users?key="+i+"&page="+a+"&limit="+s,n).then((function(e){e.json().then((function(e){t.setState({data:e.data,itemsCount:e.total,activePage:a,totalActive:e.totalActive,updated:""})}))})).catch(console.log)}},{key:"inputChange",value:function(e){this.setState(Object(s.a)({},e.target.name,e.target.value))}},{key:"goSearch",value:function(){this.getUsers()}},{key:"render",value:function(){var e=this,t=this.state,a=t.data,s=t.key,i=(t.viewingUser,t.communities,t.dataCompany,t.currentCompany,t.dataSale,t.currentSale,t.action),l=t.arrPagination,c=t.indexPage;return this.state.isLoading?Object(A.jsx)("div",{id:"page-loading",children:Object(A.jsxs)("div",{className:"three-balls",children:[Object(A.jsx)("div",{className:"ball ball1"}),Object(A.jsx)("div",{className:"ball ball2"}),Object(A.jsx)("div",{className:"ball ball3"})]})}):Object(A.jsxs)("div",{className:"animated fadeIn",children:[Object(A.jsx)(h.a,{children:Object(A.jsxs)(p.a,{children:[Object(A.jsx)("p",{style:C.success,children:this.state.updated}),Object(A.jsx)("p",{style:C.danger,children:this.state.deleted}),Object(A.jsxs)(j.a,{children:[Object(A.jsxs)(m.a,{children:[Object(A.jsx)("i",{className:"fa fa-align-justify"})," ROLE (Total: ",void 0!=this.state.data||null!=this.state.data?this.state.data.length:0,", Active: ",this.state.totalActive,", Page: ",this.state.indexPage+1,"))",Object(A.jsx)("div",{style:C.tags,children:Object(A.jsxs)("div",{children:[Object(A.jsx)(g.a,{style:C.searchInput,onChange:function(t){return e.searchKey(t.target.value)},name:"key",value:s,placeholder:"Search"}),Object(A.jsx)(f.a,{outline:!0,color:"primary",style:C.floatRight,size:"sm",onClick:function(){var t=Object(r.a)(n.a.mark((function t(a){return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.toggleModal("new");case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),children:"Add"})]})})]}),Object(A.jsx)(b.a,{children:Object(A.jsxs)(O.a,{responsive:!0,children:[Object(A.jsx)("thead",{children:Object(A.jsxs)("tr",{children:[Object(A.jsx)("th",{style:C.wa10,children:"No."}),Object(A.jsx)("th",{style:C.wh25,children:"Name"}),Object(A.jsx)("th",{style:C.wh25,children:"Status"}),Object(A.jsx)("th",{style:C.wh25,children:"Create Date"}),Object(A.jsx)("th",{style:C.w5,children:"Action"})]})}),Object(A.jsx)("tbody",{children:void 0!=a?a.map((function(t,a){return Object(A.jsxs)("tr",{style:C.row,children:[Object(A.jsx)("td",{style:C.wa10,children:a+1}),Object(A.jsx)("td",{style:C.wh25,children:t.Name}),Object(A.jsx)("td",{style:C.wh25,children:t.Status}),Object(A.jsx)("td",{style:C.wh25,children:t.Create_Date}),Object(A.jsxs)("td",{style:C.w5,children:[Object(A.jsx)(f.a,{style:C.mgl5,outline:!0,color:"primary",size:"sm",onClick:function(){var a=Object(r.a)(n.a.mark((function a(s){return n.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.openUpdate(t);case 2:return a.abrupt("return",a.sent);case 3:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}(),children:"Update"})," ",Object(A.jsx)(f.a,{outline:!0,color:"danger",size:"sm",onClick:function(a){e.openDelete(t)},children:"Delete"})]})]},a)})):""})]})})]}),1==l.length?"":Object(A.jsx)("div",{style:{float:"right",marginRight:"10px",padding:"10px"},children:Object(A.jsx)("tr",{style:C.row,children:l.map((function(t,a){return Object(A.jsx)("td",{children:Object(A.jsx)(f.a,{style:C.pagination,color:a==c?"primary":"danger",onClick:function(t){e.setState({data:l[a],indexPage:a})},children:a+1})})}))})})]})}),Object(A.jsxs)(x.a,{isOpen:this.state.modalCom,className:this.props.className,children:[Object(A.jsx)(E.a,{children:"new"==this.state.action?"Create":"Update"}),Object(A.jsxs)(v.a,{children:[Object(A.jsx)(L.a,{field:"Name",label:"Name",value:this.state.Name,placeholder:"Name",onChange:function(t){return e.onChange("Name",t.target.value)}}),"new"==i?"":Object(A.jsxs)("div",{children:[Object(A.jsx)("label",{style:C.flexLabel,htmlFor:"tag",children:"Status:"}),Object(A.jsxs)("select",{style:C.flexOption,name:"Status",onChange:function(t){return e.onChange("Status",t.target.value)},children:[Object(A.jsx)("option",{value:this.state.Status,children:""==this.state.Status?" - - - - - - - - - - ":this.state.Status}),Object(A.jsx)("option",{value:"Actived",children:"Actived"}),Object(A.jsx)("option",{value:"Locked",children:"Locked"}),Object(A.jsx)("option",{value:"Deactived",children:"Deactived"})]})]})]}),Object(A.jsxs)(y.a,{children:[Object(A.jsx)(f.a,{color:"primary",onClick:function(t){"new"===e.state.action?e.addRoles():e.updateUser()},disabled:this.state.isLoading,children:"Save"})," ",Object(A.jsx)(f.a,{color:"secondary",onClick:function(t){return e.toggleModal("new")},children:"Cancel"})]})]}),Object(A.jsxs)(x.a,{isOpen:this.state.modalDelete,toggle:function(t){return e.setState({modalDelete:!e.state.modalDelete,delete:null})},className:this.props.className,children:[Object(A.jsx)(E.a,{toggle:function(t){return e.setState({modalDelete:!e.state.modalDelete,delete:null})},children:"Delete"}),Object(A.jsx)(v.a,{children:Object(A.jsx)("label",{htmlFor:"tag",children:'Do you want to delete user "'.concat(this.state.delete?this.state.delete.Email:"",'" ?')})}),Object(A.jsxs)(y.a,{children:[Object(A.jsx)(f.a,{color:"primary",onClick:function(t){return e.delete()},disabled:this.state.isLoading,children:"Delete"})," ",Object(A.jsx)(f.a,{color:"secondary",onClick:function(t){return e.setState({modalDelete:!e.state.modalDelete,delete:null})},children:"Cancel"})]})]})]})}}]),i}(u.Component),C=Object(s.a)({pagination:{marginRight:"5px"},flexLabel:{width:100},flexOption:{width:300},a:{textDecoration:"none"},floatRight:{float:"right",marginTop:"3px"},spinner:{width:"30px"},center:{textAlign:"center"},tbody:{height:"380px",overflowY:"auto"},wh25:{width:"25%",float:"left",height:"80px"},w5:{width:"15%",float:"left",height:"80px"},wa10:{width:"5%",float:"left",height:"80px"},row:{float:"left",width:"100%"},success:{color:"green"},danger:{color:"red"},mgl5:{marginLeft:"5px"},tags:{float:"right",marginRight:"5px",width:"250px"},searchInput:{width:"190px",display:"inline-block"},userActive:{color:"green"},userPending:{color:"red"},nagemonNameCol:{width:"328px"},image:{width:"100px",height:"100px",borderRadius:"99999px"}},"mgl5",{marginBottom:"0px"});t.default=T}.call(this,a(108))},638:function(e,t,a){"use strict";t.a={BASE_URL:"http://thanhvien.applamdep.com",LIST_USER:"/api/list-user",LIST_CUSTOMER:"/api/list-customer",LIST_USER_WITH_ID:"/api/list-user?id=",ADD_USER:"/api/add-user",UPDATE_USER:"/api/update-user",DELETE_USER:"/api/delete-user",LOGIN_ADMIN:"/api/login_admin",LIST_TYPEKEY:"/api/list-typekey",LIST_TYPEKEY_WITH_ID:"/api/list-typekey?id=",ADD_TYPEKEY:"/api/add-typekey",UPDATE_TYPEKEY:"/api/update-typekey",DELETE_TYPEKEY:"/api/delete-typekey",LIST_ROLE:"/api/list-role",LIST_ROLE_WITH_ID:"/api/list-role?id=",ADD_ROLE:"/api/add-role",UPDATE_ROLE:"/api/update-role",DELETE_ROLE:"/api/delete-role",LIST_SALELOG:"/api/list-salelog",LIST_SALELOG_WITH_ID:"/api/list-salelog?id=",ADD_SALELOG:"/api/add-salelog",UPDATE_SALELOG:"/api/update-salelog",DELETE_SALELOG:"/api/delete-salelog",LIST_SALE:"/api/list-sale",LIST_SALE_WITH_ID:"/api/list-sale?id=",ADD_SALE:"/api/add-sale",UPDATE_SALE:"/api/update-sale",DELETE_SALE:"/api/delete-sale",LIST_KEYORDER:"/api/list-keyorder",LIST_KEYORDER_WITH_ID:"/api/list-keyorder?id=",ADD_KEYORDER:"/api/add-keyorder",UPDATE_KEYORDER:"/api/update-keyorder",DELETE_KEYORDER:"/api/delete-keyorder",LIST_KEY:"/api/list-key",LIST_KEY_WITH_ID:"/api/list-key?id=",ADD_KEY:"/api/add-key",UPDATE_KEY:"/api/update-key",DELETE_KEY:"/api/delete-key",LIST_COMPANY:"/api/list-company",LIST_COMPANY_WITH_ID:"/api/list-company?id=",ADD_COMPANY:"/api/add-company",UPDATE_COMPANY:"/api/update-company",DELETE_COMPANY:"/api/delete-company"}},640:function(e,t,a){"use strict";a(1);var s=a(634),i=a.n(s),n=a(20),r=function(e){var t=e.field,a=e.value,s=e.label,r=e.error,l=e.type,c=e.onChange,o=e.checkUserExists,d=e.readOnly,u=e.placeholder;return Object(n.jsxs)("div",{className:i()("form-group",{"has-error":r}),children:[Object(n.jsx)("label",{className:"control-label",children:s}),Object(n.jsx)("input",{onChange:c,onBlur:o,value:a,type:l,name:t,placeholder:u,readOnly:d,className:"form-control"}),r&&Object(n.jsx)("span",{className:"help-block",children:r})]})};r.defaultProps={type:"text"},t.a=r}}]);
//# sourceMappingURL=17.3b3f6045.chunk.js.map