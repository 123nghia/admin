(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[16],{1183:function(e,t,a){"use strict";a.r(t),function(e){var n=a(159),i=a(651),s=a.n(i),l=a(652),r=a(160),c=a(161),o=a(163),d=a(162),u=a(1),h=a(1163),p=a(1164),m=a(1166),j=a(1174),g=a(1175),b=a(1169),x=a(1167),f=a(1176),y=a(1190),O=a(1177),E=a(1178),v=a(1179),_=(a(657),a(688)),S=a.n(_),D=(a(662),a(638)),L=a(640),A=a(653),C=a.n(A),k=a(20),w=new Headers,T=localStorage.getItem("auth");w.append("Authorization","Bearer "+T),w.append("Content-Type","application/json");var I=function(t){Object(o.a)(i,t);var a=Object(d.a)(i);function i(e){var t;return Object(r.a)(this,i),(t=a.call(this,e)).getData=Object(l.a)(s.a.mark((function e(){var a,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.setState({isLoading:!0}),e.next=3,C()({baseURL:D.a.BASE_URL,url:D.a.LIST_SALE,method:"GET"});case 3:a=e.sent,t.pagination(a.data.data),t.setState({dataApi:a.data.data}),n=0,a.data.data.map((function(e){"Actived"==e.Status&&(n+=1)})),t.setState({isLoading:!1,totalActive:n});case 9:case"end":return e.stop()}}),e)}))),t.openDelete=function(e){t.setState({modalDelete:!t.state.modalDelete,delete:e})},t.state={data:[],key:"",activePage:1,page:1,itemsCount:0,limit:20,totalActive:0,modalCom:!1,viewingUser:{},communities:[],updated:"",dataApi:[],action:"new",Name:"",Company_Id:"",End_Date:new Date,Status:"",modalDelete:!1,delete:null,dataCompany:[],currentCompany:"",arrPagination:[],indexPage:0},t}return Object(c.a)(i,[{key:"componentDidMount",value:function(){var e=Object(l.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.getData();case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"pagination",value:function(e){var t,a,n,i=[];for(t=0,a=e.length;t<a;t+=5)n=e.slice(t,t+5),i.push(n);this.setState({arrPagination:i,data:i[this.state.indexPage]})}},{key:"searchKey",value:function(e){if(this.setState({key:e}),""!=e){var t=[];this.state.dataApi.map((function(a){a.Name.toLocaleUpperCase().includes(e.toLocaleUpperCase())&&t.push(a)}));var a=0;t.map((function(e){"Actived"==e.Status&&(a+=1)})),this.setState({data:t,totalActive:a})}else{var n=0;this.state.dataApi.map((function(e){"Actived"==e.Status&&(n+=1)})),this.setState({data:this.state.dataApi,totalActive:n})}}},{key:"toggleModal",value:function(){var e=Object(l.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getCompanyData();case 2:"new"==t&&this.setState({modalCom:!this.state.modalCom,action:t,Name:"",Company_Id:"",End_Date:new Date});case 3:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"onChange",value:function(e,t){this.setState(Object(n.a)({},e,t))}},{key:"addPackageSale",value:function(){var e=Object(l.a)(s.a.mark((function e(){var t,a,n,i,l,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.state,a=t.Name,n=t.Company_Id,i=t.End_Date,t.Status,null!=i&&""!=i&&null!=a&&""!=a){e.next=4;break}return alert("Please fill in all the requirements"),e.abrupt("return");case 4:return l={Name:a,Company_Id:n,End_Date:i},this.setState({isLoading:!0}),e.next=8,C()({baseURL:D.a.BASE_URL,url:D.a.ADD_SALE,method:"PUT",data:l});case 8:1==(r=e.sent).data.is_success?(this.getData(),this.setState({modalCom:!this.state.modalCom})):(alert(r.data.message),this.setState({isLoading:!1}));case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"openUpdate",value:function(){var e=Object(l.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getCompanyData(t.Company_Id);case 2:this.setState({modalCom:!this.state.modalCom,action:"update",Name:t.Name,Company_Id:t.Company_Id,End_Date:t.End_Date,id:t._id,Status:t.Status});case 3:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"updatePackageSale",value:function(){var e=Object(l.a)(s.a.mark((function e(){var t,a,n,i,l,r,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.state,a=t.Name,n=t.Company_Id,i=t.End_Date,l=t.Status,null!=i&&""!=i&&null!=a&&""!=a){e.next=4;break}return alert("Please fill in all the requirements"),e.abrupt("return");case 4:return r={Name:a,Company_Id:n,End_Date:i,id:this.state.id,Status:l},this.setState({isLoading:!0}),e.next=8,C()({baseURL:D.a.BASE_URL,url:D.a.UPDATE_SALE,method:"POST",data:r});case 8:1==(c=e.sent).data.is_success?(this.getData(),this.setState({modalCom:!this.state.modalCom})):(alert(c.data.message),this.setState({isLoading:!1}));case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"delete",value:function(){var e=Object(l.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({isLoading:!0}),e.next=3,C()({baseURL:D.a.BASE_URL,url:D.a.DELETE_SALE,method:"DELETE",data:{id:this.state.delete._id}});case 3:1==(t=e.sent).data.is_success?(this.getData(),this.setState({modalDelete:!this.state.modalDelete,delete:null})):(alert(t.data.message),this.setState({isLoading:!1}));case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getUsers",value:function(){var t=this,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,n=this.state.limit,i=this.state.key||"",s={method:"GET",headers:w};fetch(e.BASE_URL+"/admin/users?key="+i+"&page="+a+"&limit="+n,s).then((function(e){e.json().then((function(e){t.setState({data:e.data,itemsCount:e.total,activePage:a,totalActive:e.totalActive,updated:""})}))})).catch(console.log)}},{key:"handlePageChange",value:function(){var e=Object(l.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.getUsers(t);case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"toggle",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";this.setState({modal:!this.state.modal,image:"",url:"",isActive:!1,isLoading:!1,errors:{},action:e,position:1,data:[],updated:""})}},{key:"inputChange",value:function(e){this.setState(Object(n.a)({},e.target.name,e.target.value))}},{key:"getCompanyData",value:function(){var e=Object(l.a)(s.a.mark((function e(t){var a,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C()({baseURL:D.a.BASE_URL,url:D.a.LIST_COMPANY,method:"GET"});case 2:if(a=e.sent,""==t&&void 0==t){e.next=8;break}return e.next=6,C()({baseURL:D.a.BASE_URL,url:D.a.LIST_COMPANY_WITH_ID+t,method:"GET"});case 6:null==(n=e.sent).data.data&&void 0==n.data.data||this.setState({currentCompany:n.data.data.Name});case 8:this.setState({dataCompany:a.data.data});case 9:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,a=t.data,n=t.key,i=(t.viewingUser,t.communities,t.action),s=t.End_Date,l=t.dataCompany,r=t.currentCompany,c=t.arrPagination,o=t.indexPage;return this.state.isLoading?Object(k.jsx)("div",{id:"page-loading",children:Object(k.jsxs)("div",{className:"three-balls",children:[Object(k.jsx)("div",{className:"ball ball1"}),Object(k.jsx)("div",{className:"ball ball2"}),Object(k.jsx)("div",{className:"ball ball3"})]})}):Object(k.jsxs)("div",{className:"animated fadeIn",children:[Object(k.jsx)(h.a,{children:Object(k.jsxs)(p.a,{children:[Object(k.jsx)("p",{style:P.success,children:this.state.updated}),Object(k.jsx)("p",{style:P.danger,children:this.state.deleted}),Object(k.jsxs)(m.a,{children:[Object(k.jsxs)(j.a,{children:[Object(k.jsx)("i",{className:"fa fa-align-justify"})," PAKAGE SALE (Total: ",void 0!=this.state.data||null!=this.state.data?this.state.data.length:0,", Active: ",this.state.totalActive,", Page: ",this.state.indexPage+1,")",Object(k.jsx)("div",{style:P.tags,children:Object(k.jsxs)("div",{children:[Object(k.jsx)(g.a,{style:P.searchInput,onChange:function(t){return e.searchKey(t.target.value)},name:"key",value:n,placeholder:"Search"}),Object(k.jsx)(b.a,{outline:!0,color:"primary",style:P.floatRight,size:"sm",onClick:function(t){return e.toggleModal("new")},children:"Add"})]})})]}),Object(k.jsx)(x.a,{children:Object(k.jsxs)(f.a,{responsive:!0,children:[Object(k.jsx)("thead",{children:Object(k.jsxs)("tr",{children:[Object(k.jsx)("th",{style:P.wa10,children:"No."}),Object(k.jsx)("th",{style:P.wh16,children:"Name"}),Object(k.jsx)("th",{style:P.wh16,children:"Company ID"}),Object(k.jsx)("th",{style:P.wh16,children:"End Date"}),Object(k.jsx)("th",{style:P.wh16,children:"Status"}),Object(k.jsx)("th",{style:P.w5,children:"Action"})]})}),Object(k.jsx)("tbody",{children:void 0!=a?a.map((function(t,a){return Object(k.jsxs)("tr",{style:P.row,children:[Object(k.jsx)("td",{style:P.wa10,children:a+1}),Object(k.jsx)("td",{style:P.wh16,children:t.Name}),Object(k.jsx)("td",{style:P.wh16,children:t.Company_Id}),Object(k.jsx)("td",{style:P.wh16,children:new Date(t.End_Date).toLocaleDateString()+" "+new Date(t.End_Date).toLocaleTimeString()}),Object(k.jsx)("td",{style:P.wh16,children:t.Status}),Object(k.jsxs)("td",{style:P.w5,children:[Object(k.jsx)(b.a,{outline:!0,color:"primary",size:"sm",onClick:function(a){return e.openUpdate(t)},children:"Update"})," ",Object(k.jsx)(b.a,{outline:!0,color:"danger",size:"sm",onClick:function(a){e.openDelete(t)},children:"Delete"})]})]},a)})):""})]})})]}),1==c.length?"":Object(k.jsx)("div",{style:{float:"right",marginRight:"10px",padding:"10px"},children:Object(k.jsx)("tr",{style:P.row,children:c.map((function(t,a){return Object(k.jsx)("td",{children:Object(k.jsx)(b.a,{style:P.pagination,color:a==o?"primary":"danger",onClick:function(t){e.setState({data:c[a],indexPage:a})},children:a+1})})}))})})]})}),Object(k.jsxs)(y.a,{isOpen:this.state.modalCom,className:this.props.className,children:[Object(k.jsx)(O.a,{children:"new"==this.state.action?"Create":"Update"}),Object(k.jsxs)(E.a,{children:[Object(k.jsx)(L.a,{field:"Name",label:"Name",value:this.state.Name,placeholder:"Name Package",onChange:function(t){return e.onChange("Name",t.target.value)}}),Object(k.jsxs)("div",{style:P.datePicker,children:[Object(k.jsx)("label",{children:"End Date:  "}),Object(k.jsx)(S.a,{selected:new Date(s),onChange:function(t){return e.setState({End_Date:t})}})]}),"new"==i?"":Object(k.jsxs)("div",{children:[Object(k.jsx)("label",{style:P.flexLabel,htmlFor:"tag",children:"Status:"}),Object(k.jsxs)("select",{style:P.flexOption,name:"Status",onChange:function(t){return e.onChange("Status",t.target.value)},children:[Object(k.jsx)("option",{value:this.state.Status,children:""==this.state.Status?" - - - - - - - - - - ":this.state.Status}),Object(k.jsx)("option",{value:"Actived",children:"Actived"}),Object(k.jsx)("option",{value:"Locked",children:"Locked"}),Object(k.jsx)("option",{value:"Deactived",children:"Deactived"})]})]}),Object(k.jsxs)("div",{children:[Object(k.jsx)("label",{style:P.flexLabel,htmlFor:"tag",children:"Company:    "}),Object(k.jsxs)("select",{style:P.flexOption,name:"Company_Id",onChange:function(t){return e.onChange("Company_Id",t.target.value)},children:[Object(k.jsx)("option",{value:this.state.Company_Id,children:"-----"}),l.map((function(e,t){return e.Name==r?Object(k.jsx)("option",{selected:!0,value:e._id,children:e.Name}):Object(k.jsx)("option",{value:e._id,children:e.Name})}))]})]})]}),Object(k.jsxs)(v.a,{children:[Object(k.jsx)(b.a,{color:"primary",onClick:function(t){"new"===e.state.action?e.addPackageSale():e.updatePackageSale()},disabled:this.state.isLoading,children:"Save"})," ",Object(k.jsx)(b.a,{color:"secondary",onClick:function(t){return e.toggleModal("new")},children:"Cancel"})]})]}),Object(k.jsxs)(y.a,{isOpen:this.state.modalDelete,toggle:function(t){return e.setState({modalDelete:!e.state.modalDelete,delete:null})},className:this.props.className,children:[Object(k.jsx)(O.a,{toggle:function(t){return e.setState({modalDelete:!e.state.modalDelete,delete:null})},children:"Delete"}),Object(k.jsx)(E.a,{children:Object(k.jsx)("label",{htmlFor:"tag",children:'Do you want to delete user "'.concat(this.state.delete?this.state.delete.Email:"",'" ?')})}),Object(k.jsxs)(v.a,{children:[Object(k.jsx)(b.a,{color:"primary",onClick:function(t){return e.delete()},disabled:this.state.isLoading,children:"Delete"})," ",Object(k.jsx)(b.a,{color:"secondary",onClick:function(t){return e.setState({modalDelete:!e.state.modalDelete,delete:null})},children:"Cancel"})]})]})]})}}]),i}(u.Component),P=Object(n.a)({datePicker:{marginBottom:20},flexLabel:{width:100},flexOption:{width:300},a:{textDecoration:"none"},floatRight:{float:"right",marginTop:"3px"},spinner:{width:"30px"},center:{textAlign:"center"},tbody:{height:"380px",overflowY:"auto"},wa10:{width:"5%",float:"left",height:"80px"},wh16:{width:"17%",float:"left",height:"80px"},wh15:{width:"20%",float:"left",height:"80px"},w5:{width:"20%",float:"left",height:"80px"},row:{float:"left",width:"100%"},success:{color:"green"},danger:{color:"red"},mgl5:{marginLeft:"5px"},tags:{float:"right",marginRight:"5px",width:"250px"},searchInput:{width:"190px",display:"inline-block"},userActive:{color:"green"},userPending:{color:"red"},nagemonNameCol:{width:"328px"},image:{width:"100px",height:"100px",borderRadius:"99999px"}},"mgl5",{marginBottom:"5px"});t.default=I}.call(this,a(108))},638:function(e,t,a){"use strict";t.a={BASE_URL:"http://thanhvien.applamdep.com",LIST_USER:"/api/list-user",LIST_CUSTOMER:"/api/list-customer",LIST_USER_WITH_ID:"/api/list-user?id=",ADD_USER:"/api/add-user",UPDATE_USER:"/api/update-user",DELETE_USER:"/api/delete-user",LOGIN_ADMIN:"/api/login_admin",LIST_TYPEKEY:"/api/list-typekey",LIST_TYPEKEY_WITH_ID:"/api/list-typekey?id=",ADD_TYPEKEY:"/api/add-typekey",UPDATE_TYPEKEY:"/api/update-typekey",DELETE_TYPEKEY:"/api/delete-typekey",LIST_ROLE:"/api/list-role",LIST_ROLE_WITH_ID:"/api/list-role?id=",ADD_ROLE:"/api/add-role",UPDATE_ROLE:"/api/update-role",DELETE_ROLE:"/api/delete-role",LIST_SALELOG:"/api/list-salelog",LIST_SALELOG_WITH_ID:"/api/list-salelog?id=",ADD_SALELOG:"/api/add-salelog",UPDATE_SALELOG:"/api/update-salelog",DELETE_SALELOG:"/api/delete-salelog",LIST_SALE:"/api/list-sale",LIST_SALE_WITH_ID:"/api/list-sale?id=",ADD_SALE:"/api/add-sale",UPDATE_SALE:"/api/update-sale",DELETE_SALE:"/api/delete-sale",LIST_KEYORDER:"/api/list-keyorder",LIST_KEYORDER_WITH_ID:"/api/list-keyorder?id=",ADD_KEYORDER:"/api/add-keyorder",UPDATE_KEYORDER:"/api/update-keyorder",DELETE_KEYORDER:"/api/delete-keyorder",LIST_KEY:"/api/list-key",LIST_KEY_WITH_ID:"/api/list-key?id=",ADD_KEY:"/api/add-key",UPDATE_KEY:"/api/update-key",DELETE_KEY:"/api/delete-key",LIST_COMPANY:"/api/list-company",LIST_COMPANY_WITH_ID:"/api/list-company?id=",ADD_COMPANY:"/api/add-company",UPDATE_COMPANY:"/api/update-company",DELETE_COMPANY:"/api/delete-company"}},640:function(e,t,a){"use strict";a(1);var n=a(634),i=a.n(n),s=a(20),l=function(e){var t=e.field,a=e.value,n=e.label,l=e.error,r=e.type,c=e.onChange,o=e.checkUserExists,d=e.readOnly,u=e.placeholder;return Object(s.jsxs)("div",{className:i()("form-group",{"has-error":l}),children:[Object(s.jsx)("label",{className:"control-label",children:n}),Object(s.jsx)("input",{onChange:c,onBlur:o,value:a,type:r,name:t,placeholder:u,readOnly:d,className:"form-control"}),l&&Object(s.jsx)("span",{className:"help-block",children:l})]})};l.defaultProps={type:"text"},t.a=l}}]);
//# sourceMappingURL=16.ecac24fb.chunk.js.map