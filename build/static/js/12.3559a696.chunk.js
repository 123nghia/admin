(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[12],{1196:function(e,t,a){"use strict";a.r(t),function(e){var s=a(170),n=a(115),i=a.n(n),r=a(657),l=a(166),o=a(167),c=a(169),d=a(168),u=a(2),h=a(684),p=a(685),m=a(1109),j=a(1188),f=a(1189),g=a(1183),b=a(1110),O=a(1190),E=a(1204),x=a(1191),y=a(1192),v=a(1193),_=(a(664),a(669),a(646)),S=a(649),L=a(655),A=a.n(L),C=a(21),D=new Headers,T=localStorage.getItem("auth");D.append("Authorization","Bearer "+T),D.append("Content-Type","application/json");var w=function(t){Object(c.a)(n,t);var a=Object(d.a)(n);function n(e){var t;return Object(l.a)(this,n),(t=a.call(this,e)).getData=Object(r.a)(i.a.mark((function e(){var a,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.setState({isLoading:!0}),e.next=3,A()({baseURL:_.a.BASE_URL,url:_.a.LIST_KEYORDER,method:"GET"});case 3:a=e.sent,t.pagination(a.data.data),t.setState({dataApi:a.data.data}),s=0,a.data.data.map((function(e){"Actived"==e.Status&&(s+=1)})),t.setState({isLoading:!1,totalActive:s});case 9:case"end":return e.stop()}}),e)}))),t.openDelete=function(e){t.setState({modalDelete:!t.state.modalDelete,delete:e})},t.state={data:[],key:"",activePage:1,page:1,itemsCount:0,limit:20,totalActive:0,modalCom:!1,viewingUser:{},communities:[],updated:"",dataApi:[],action:"new",UserName:"",Email:"",Company_Id:"",Address:"",Phone:"",Status:"",modalDelete:!1,delete:null,dataCompany:[],currentCompany:"",arrPagination:[],indexPage:0},t}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=Object(r.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.getData();case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"pagination",value:function(e){var t,a,s,n=[];for(t=0,a=e.length;t<a;t+=5)s=e.slice(t,t+5),n.push(s);this.setState({arrPagination:n,data:n[this.state.indexPage]})}},{key:"searchKey",value:function(e){var t=this.state.indexPage;if(this.setState({key:e}),""!=e){var a=[];this.state.dataApi.map((function(t){(t.UserName.toLocaleUpperCase().includes(e.toLocaleUpperCase())||t.Email.toLocaleUpperCase().includes(e.toLocaleUpperCase()))&&a.push(t)}));var s=0;a.map((function(e){"Actived"==e.Status&&(s+=1)})),this.setState({data:a,totalActive:s})}else{var n=0;this.state.dataApi.map((function(e){"Actived"==e.Status&&(n+=1)})),this.setState({data:this.state.arrPagination[t],totalActive:n})}}},{key:"toggleModal",value:function(){var e=Object(r.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getCompanyData();case 2:"new"==t&&this.setState({modalCom:!this.state.modalCom,action:t,UserName:"",Email:"",Company_Id:"",Address:"",Phone:"",Status:""});case 3:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"onChange",value:function(e,t){this.setState(Object(s.a)({},e,t))}},{key:"addUser",value:function(){var e=Object(r.a)(i.a.mark((function e(){var t,a,s,n,r,l,o,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.state,a=t.UserName,s=t.Company_Id,n=t.Email,r=t.Address,l=t.Phone,t.Status,null!=a&&""!=a&&null!=n&&""!=n&&null!=r&&""!=r&&null!=l&&""!=l){e.next=4;break}return alert("Please fill in all the requirements"),e.abrupt("return");case 4:return o={UserName:a,Company_Id:s,Email:n,Address:r,Phone:l},this.setState({isLoading:!0}),e.next=8,A()({baseURL:_.a.BASE_URL,url:_.a.ADD_KEYORDER,method:"PUT",data:o});case 8:1==(c=e.sent).data.is_success?(this.getData(),this.setState({modalCom:!this.state.modalCom})):(alert(c.data.message),this.setState({isLoading:!1}));case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"openUpdate",value:function(){var e=Object(r.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getCompanyData(t.Company_Id);case 2:this.setState({modalCom:!this.state.modalCom,action:"update",UserName:t.UserName,Company_Id:t.Company_Id,Email:t.Email,Address:t.Address,Phone:t.Phone,id:t._id,Status:t.Status});case 3:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"updateUser",value:function(){var e=Object(r.a)(i.a.mark((function e(){var t,a,s,n,r,l,o,c,d;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.state,a=t.UserName,s=t.Company_Id,n=t.Email,r=t.Address,l=t.Phone,o=t.Status,null!=a&&""!=a&&null!=n&&""!=n&&null!=r&&""!=r&&null!=l&&""!=l){e.next=4;break}return alert("Please fill in all the requirements"),e.abrupt("return");case 4:return c={UserName:a,Company_Id:s,Email:n,Address:r,Phone:l,id:this.state.id,Status:o},this.setState({isLoading:!0}),e.next=8,A()({baseURL:_.a.BASE_URL,url:_.a.UPDATE_KEYORDER,method:"POST",data:c});case 8:1==(d=e.sent).data.is_success?(this.getData(),this.setState({modalCom:!this.state.modalCom})):(alert(d.data.message),this.setState({isLoading:!1}));case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"delete",value:function(){var e=Object(r.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({isLoading:!0}),e.next=3,A()({baseURL:_.a.BASE_URL,url:_.a.DELETE_KEYORDER,method:"DELETE",data:{id:this.state.delete._id}});case 3:1==(t=e.sent).data.is_success?(this.getData(),this.setState({modalDelete:!this.state.modalDelete,delete:null})):(alert(t.data.message),this.setState({isLoading:!1}));case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getUsers",value:function(){var t=this,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,s=this.state.limit,n=this.state.key||"",i={method:"GET",headers:D};fetch(e.BASE_URL+"/admin/users?key="+n+"&page="+a+"&limit="+s,i).then((function(e){e.json().then((function(e){t.setState({data:e.data,itemsCount:e.total,activePage:a,totalActive:e.totalActive,updated:""})}))})).catch(console.log)}},{key:"getCompanyData",value:function(){var e=Object(r.a)(i.a.mark((function e(t){var a,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A()({baseURL:_.a.BASE_URL,url:_.a.LIST_COMPANY,method:"GET"});case 2:if(a=e.sent,""==t&&void 0==t){e.next=8;break}return e.next=6,A()({baseURL:_.a.BASE_URL,url:_.a.LIST_COMPANY_WITH_ID+t,method:"GET"});case 6:null==(s=e.sent).data.data&&void 0==s.data.data||this.setState({currentCompany:s.data.data.Name});case 8:this.setState({dataCompany:a.data.data});case 9:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"inputChange",value:function(e){this.setState(Object(s.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){var e=this,t=this.state,a=t.data,s=t.key,n=(t.viewingUser,t.communities,t.dataCompany),l=t.currentCompany,o=t.action,c=t.arrPagination,d=t.indexPage;return this.state.isLoading?Object(C.jsx)("div",{id:"page-loading",children:Object(C.jsxs)("div",{className:"three-balls",children:[Object(C.jsx)("div",{className:"ball ball1"}),Object(C.jsx)("div",{className:"ball ball2"}),Object(C.jsx)("div",{className:"ball ball3"})]})}):Object(C.jsxs)("div",{className:"animated fadeIn",children:[Object(C.jsx)(h.a,{children:Object(C.jsxs)(p.a,{children:[Object(C.jsx)("p",{style:U.success,children:this.state.updated}),Object(C.jsx)("p",{style:U.danger,children:this.state.deleted}),Object(C.jsxs)(m.a,{children:[Object(C.jsxs)(j.a,{children:[Object(C.jsx)("i",{className:"fa fa-align-justify"})," KEY ORDER (Total: ",void 0!=this.state.data||null!=this.state.data?this.state.data.length:0,", Active: ",this.state.totalActive,", Page: ",this.state.indexPage+1,")",Object(C.jsx)("div",{style:U.tags,children:Object(C.jsxs)("div",{children:[Object(C.jsx)(f.a,{style:U.searchInput,onChange:function(t){return e.searchKey(t.target.value)},name:"key",value:s,placeholder:"Search"}),Object(C.jsx)(g.a,{outline:!0,color:"primary",style:U.floatRight,size:"sm",onClick:function(){var t=Object(r.a)(i.a.mark((function t(a){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.toggleModal("new");case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),children:"Add"})]})})]}),Object(C.jsx)(b.a,{children:Object(C.jsxs)(O.a,{responsive:!0,children:[Object(C.jsx)("thead",{children:Object(C.jsxs)("tr",{children:[Object(C.jsx)("th",{style:U.wa10,children:"No."}),Object(C.jsx)("th",{style:U.wh12,children:"UserName"}),Object(C.jsx)("th",{style:U.wh15,children:"Company ID"}),Object(C.jsx)("th",{style:U.wh15,children:"Email"}),Object(C.jsx)("th",{style:U.wh15,children:"Address"}),Object(C.jsx)("th",{style:U.wh12,children:"Phone"}),Object(C.jsx)("th",{style:U.wh12,children:"Status"}),Object(C.jsx)("th",{style:U.w5,children:"Action"})]})}),Object(C.jsx)("tbody",{children:void 0!=a?a.map((function(t,a){return Object(C.jsxs)("tr",{style:U.row,children:[Object(C.jsx)("td",{style:U.wa10,children:a+1}),Object(C.jsx)("td",{style:U.wh12,children:t.UserName}),Object(C.jsx)("td",{style:U.wh15,children:t.Company_Id}),Object(C.jsx)("td",{style:U.wh15,children:t.Email}),Object(C.jsx)("td",{style:U.wh15,children:t.Address}),Object(C.jsx)("td",{style:U.wh12,children:t.Phone}),Object(C.jsx)("td",{style:U.wh12,children:t.Status}),Object(C.jsxs)("td",{style:U.w5,children:[Object(C.jsx)(g.a,{style:U.mgl5,outline:!0,color:"primary",size:"sm",onClick:function(){var a=Object(r.a)(i.a.mark((function a(s){return i.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.openUpdate(t);case 2:return a.abrupt("return",a.sent);case 3:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}(),children:"Update"})," ",Object(C.jsx)(g.a,{outline:!0,color:"danger",size:"sm",onClick:function(a){e.openDelete(t)},children:"Delete"})]})]},a)})):""})]})})]}),1==c.length?"":Object(C.jsx)("div",{style:{float:"right",marginRight:"10px",padding:"10px"},children:Object(C.jsx)("tr",{style:U.row,children:c.map((function(t,a){return Object(C.jsx)("td",{children:Object(C.jsx)(g.a,{style:U.pagination,color:a==d?"primary":"danger",onClick:function(t){e.setState({data:c[a],indexPage:a})},children:a+1})})}))})})]})}),Object(C.jsxs)(E.a,{isOpen:this.state.modalCom,className:this.props.className,children:[Object(C.jsx)(x.a,{children:"new"==this.state.action?"Create":"Update"}),Object(C.jsxs)(y.a,{children:[Object(C.jsx)(S.a,{field:"UserName",label:"UserName",value:this.state.UserName,placeholder:"UserName",onChange:function(t){return e.onChange("UserName",t.target.value)}}),Object(C.jsxs)("div",{children:[Object(C.jsx)("label",{style:U.flexLabel,htmlFor:"tag",children:"Company:    "}),Object(C.jsxs)("select",{style:U.flexOption,name:"Company_Id",onChange:function(t){return e.onChange("Company_Id",t.target.value)},children:[Object(C.jsx)("option",{value:this.state.Company_Id,children:"-----"}),n.map((function(e,t){return e.Name==l?Object(C.jsx)("option",{selected:!0,value:e._id,children:e.Name}):Object(C.jsx)("option",{value:e._id,children:e.Name})}))]})]}),Object(C.jsx)(S.a,{field:"Email",label:"Email",value:this.state.Email,placeholder:"Email",onChange:function(t){return e.onChange("Email",t.target.value)}}),Object(C.jsx)(S.a,{field:"Address",label:"Address",value:this.state.Address,placeholder:"Address",onChange:function(t){return e.onChange("Address",t.target.value)}}),Object(C.jsx)(S.a,{field:"Phone",label:"Phone",value:this.state.Phone,placeholder:"Phone",onChange:function(t){return e.onChange("Phone",t.target.value)}}),"new"==o?"":Object(C.jsxs)("div",{children:[Object(C.jsx)("label",{style:U.flexLabel,htmlFor:"tag",children:"Status:"}),Object(C.jsxs)("select",{style:U.flexOption,name:"Status",onChange:function(t){return e.onChange("Status",t.target.value)},children:[Object(C.jsx)("option",{value:this.state.Status,children:""==this.state.Status?" - - - - - - - - - - ":this.state.Status}),Object(C.jsx)("option",{value:"Actived",children:"Actived"}),Object(C.jsx)("option",{value:"Locked",children:"Locked"}),Object(C.jsx)("option",{value:"Deactived",children:"Deactived"})]})]})]}),Object(C.jsxs)(v.a,{children:[Object(C.jsx)(g.a,{color:"primary",onClick:function(t){"new"===e.state.action?e.addUser():e.updateUser()},disabled:this.state.isLoading,children:"Save"})," ",Object(C.jsx)(g.a,{color:"secondary",onClick:function(t){return e.toggleModal("new")},children:"Cancel"})]})]}),Object(C.jsxs)(E.a,{isOpen:this.state.modalDelete,toggle:function(t){return e.setState({modalDelete:!e.state.modalDelete,delete:null})},className:this.props.className,children:[Object(C.jsx)(x.a,{toggle:function(t){return e.setState({modalDelete:!e.state.modalDelete,delete:null})},children:"Delete"}),Object(C.jsx)(y.a,{children:Object(C.jsx)("label",{htmlFor:"tag",children:'Do you want to delete user "'.concat(this.state.delete?this.state.delete.Email:"",'" ?')})}),Object(C.jsxs)(v.a,{children:[Object(C.jsx)(g.a,{color:"primary",onClick:function(t){return e.delete()},disabled:this.state.isLoading,children:"Delete"})," ",Object(C.jsx)(g.a,{color:"secondary",onClick:function(t){return e.setState({modalDelete:!e.state.modalDelete,delete:null})},children:"Cancel"})]})]})]})}}]),n}(u.Component),U=Object(s.a)({datePicker:{marginBottom:20},wa10:{width:"5%",float:"left",height:"80px"},pagination:{marginRight:"5px"},flexLabel:{width:100},flexOption:{width:300},a:{textDecoration:"none"},floatRight:{float:"right",marginTop:"3px"},spinner:{width:"30px"},center:{textAlign:"center"},tbody:{height:"380px",overflowY:"auto"},wh12:{width:"10%",float:"left",height:"80px"},wh15:{width:"16%",float:"left",height:"80px"},w5:{width:"12%",float:"left",height:"80px"},row:{float:"left",width:"100%"},success:{color:"green"},danger:{color:"red"},mgl5:{marginLeft:"5px"},tags:{float:"right",marginRight:"5px",width:"250px"},searchInput:{width:"190px",display:"inline-block"},userActive:{color:"green"},userPending:{color:"red"},nagemonNameCol:{width:"328px"},image:{width:"100px",height:"100px",borderRadius:"99999px"}},"mgl5",{marginBottom:"0px"});t.default=w}.call(this,a(114))},646:function(e,t,a){"use strict";t.a={BASE_URL:"http://thanhvien.applamdep.com",LIST_USER:"/api/list-user",LIST_USER_WITH_ID:"/api/list-user?id=",ADD_USER:"/api/add-user",UPDATE_USER:"/api/update-user",DELETE_USER:"/api/delete-user",LOGIN_ADMIN:"/api/login_admin",GET_SHOP:"/api/get-shop",GET_SALE:"/api/get-sale",GET_COEFFICIENT:"/api/calculator-coefficient-user",GET_COEFFICIENT_PER_SALE:"/api/calculator-coefficient-user-per-sale",GET_USER_SALE_BY_MONTH:"/api/get-user-of-sale-by-month",CALCULATOR_ALL_USER_OF_COMPANY:"/api/calculator-all-user-company",CALCULATOR_ALL_USER_OF_SALE:"/api/calculator-all-user-of-sale",LIST_CUSTOMER:"/api/list-customer",LIST_CUSTOMER_BY_MONTH:"/api/get-user-sale-by-month",LIST_TYPEKEY:"/api/list-typekey",LIST_TYPEKEY_WITH_ID:"/api/list-typekey?id=",ADD_TYPEKEY:"/api/add-typekey",UPDATE_TYPEKEY:"/api/update-typekey",DELETE_TYPEKEY:"/api/delete-typekey",LIST_ROLE:"/api/list-role",LIST_ROLE_WITH_ID:"/api/list-role?id=",ADD_ROLE:"/api/add-role",UPDATE_ROLE:"/api/update-role",DELETE_ROLE:"/api/delete-role",LIST_SALELOG:"/api/list-salelog",LIST_SALELOG_WITH_ID:"/api/list-salelog?id=",ADD_SALELOG:"/api/add-salelog",UPDATE_SALELOG:"/api/update-salelog",DELETE_SALELOG:"/api/delete-salelog",LIST_SALE:"/api/list-sale",LIST_SALE_WITH_ID:"/api/list-sale?id=",ADD_SALE:"/api/add-sale",UPDATE_SALE:"/api/update-sale",DELETE_SALE:"/api/delete-sale",LIST_KEYORDER:"/api/list-keyorder",LIST_KEYORDER_WITH_ID:"/api/list-keyorder?id=",ADD_KEYORDER:"/api/add-keyorder",UPDATE_KEYORDER:"/api/update-keyorder",DELETE_KEYORDER:"/api/delete-keyorder",LIST_KEY:"/api/list-key",LIST_KEY_WITH_ID:"/api/list-key?id=",ADD_KEY:"/api/add-key",UPDATE_KEY:"/api/update-key",DELETE_KEY:"/api/delete-key",LIST_COMPANY:"/api/list-company",LIST_COMPANY_WITH_ID:"/api/list-company?id=",ADD_COMPANY:"/api/add-company",UPDATE_COMPANY:"/api/update-company",DELETE_COMPANY:"/api/delete-company"}},649:function(e,t,a){"use strict";a(2);var s=a(641),n=a.n(s),i=a(21),r=function(e){var t=e.field,a=e.value,s=e.label,r=e.error,l=e.type,o=e.onChange,c=e.checkUserExists,d=e.readOnly,u=e.placeholder;return Object(i.jsxs)("div",{className:n()("form-group",{"has-error":r}),children:[Object(i.jsx)("label",{className:"control-label",children:s}),Object(i.jsx)("input",{onChange:o,onBlur:c,value:a,type:l,name:t,placeholder:u,readOnly:d,className:"form-control"}),r&&Object(i.jsx)("span",{className:"help-block",children:r})]})};r.defaultProps={type:"text"},t.a=r},669:function(e,t,a){},684:function(e,t,a){"use strict";var s=a(12),n=a(28),i=a(2),r=a.n(i),l=a(64),o=a.n(l),c=a(641),d=a.n(c),u=a(643),h=o.a.oneOfType([o.a.number,o.a.string]),p={tag:u.n,noGutters:o.a.bool,className:o.a.string,cssModule:o.a.object,form:o.a.bool,xs:h,sm:h,md:h,lg:h,xl:h},m={tag:"div",widths:["xs","sm","md","lg","xl"]},j=function(e){var t=e.className,a=e.cssModule,i=e.noGutters,l=e.tag,o=e.form,c=e.widths,h=Object(n.a)(e,["className","cssModule","noGutters","tag","form","widths"]),p=[];c.forEach((function(t,a){var s=e[t];if(delete h[t],s){var n=!a;p.push(n?"row-cols-"+s:"row-cols-"+t+"-"+s)}}));var m=Object(u.j)(d()(t,i?"no-gutters":null,o?"form-row":"row",p),a);return r.a.createElement(l,Object(s.a)({},h,{className:m}))};j.propTypes=p,j.defaultProps=m,t.a=j},685:function(e,t,a){"use strict";var s=a(12),n=a(28),i=a(2),r=a.n(i),l=a(64),o=a.n(l),c=a(641),d=a.n(c),u=a(643),h=o.a.oneOfType([o.a.number,o.a.string]),p=o.a.oneOfType([o.a.bool,o.a.number,o.a.string,o.a.shape({size:o.a.oneOfType([o.a.bool,o.a.number,o.a.string]),order:h,offset:h})]),m={tag:u.n,xs:p,sm:p,md:p,lg:p,xl:p,className:o.a.string,cssModule:o.a.object,widths:o.a.array},j={tag:"div",widths:["xs","sm","md","lg","xl"]},f=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},g=function(e){var t=e.className,a=e.cssModule,i=e.widths,l=e.tag,o=Object(n.a)(e,["className","cssModule","widths","tag"]),c=[];i.forEach((function(t,s){var n=e[t];if(delete o[t],n||""===n){var i=!s;if(Object(u.h)(n)){var r,l=i?"-":"-"+t+"-",h=f(i,t,n.size);c.push(Object(u.j)(d()(((r={})[h]=n.size||""===n.size,r["order"+l+n.order]=n.order||0===n.order,r["offset"+l+n.offset]=n.offset||0===n.offset,r)),a))}else{var p=f(i,t,n);c.push(p)}}})),c.length||c.push("col");var h=Object(u.j)(d()(t,c),a);return r.a.createElement(l,Object(s.a)({},o,{className:h}))};g.propTypes=m,g.defaultProps=j,t.a=g}}]);
//# sourceMappingURL=12.3559a696.chunk.js.map