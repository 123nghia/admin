(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[15],{1200:function(e,t,a){"use strict";a.r(t),function(e){var s=a(170),i=a(115),n=a.n(i),r=a(657),l=a(166),o=a(167),c=a(169),d=a(168),u=a(2),p=a(685),h=a(686),m=a(1110),f=a(1189),j=a(1190),b=a(1184),g=a(1111),O=a(698),E=a(1205),v=a(1191),x=a(1192),y=a(1193),S=(a(664),a(669),a(646)),_=a(649),L=a(655),T=a.n(L),D=a(21),A=new Headers,w=localStorage.getItem("auth");A.append("Authorization","Bearer "+w),A.append("Content-Type","application/json");var k=function(t){Object(c.a)(i,t);var a=Object(d.a)(i);function i(e){var t;return Object(l.a)(this,i),(t=a.call(this,e)).getData=Object(r.a)(n.a.mark((function e(){var a,s;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.setState({isLoading:!0}),e.next=3,T()({baseURL:S.a.BASE_URL,url:S.a.LIST_TYPEKEY,method:"GET"});case 3:a=e.sent,t.pagination(a.data.data),t.setState({dataApi:a.data.data}),s=0,a.data.data.map((function(e){"Actived"==e.Status&&(s+=1)})),t.setState({isLoading:!1,totalActive:s});case 9:case"end":return e.stop()}}),e)}))),t.openDelete=function(e){t.setState({modalDelete:!t.state.modalDelete,delete:e})},t.state={data:[],key:"",activePage:1,page:1,itemsCount:0,limit:20,totalActive:0,modalCom:!1,viewingUser:{},communities:[],updated:"",dataApi:[],action:"new",Name:"",Status:"",modalDelete:!1,delete:null,arrPagination:[],indexPage:0},t}return Object(o.a)(i,[{key:"componentDidMount",value:function(){var e=Object(r.a)(n.a.mark((function e(){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.getData();case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"pagination",value:function(e){var t,a,s,i=[];for(t=0,a=e.length;t<a;t+=5)s=e.slice(t,t+5),i.push(s);this.setState({arrPagination:i,data:i[this.state.indexPage]})}},{key:"searchKey",value:function(e){var t=this.state.indexPage;if(this.setState({key:e}),""!=e){var a=[];this.state.dataApi.map((function(t){t.Name.toLocaleUpperCase().includes(e.toLocaleUpperCase())&&a.push(t)}));var s=0;a.map((function(e){"Actived"==e.Status&&(s+=1)})),this.setState({data:a,totalActive:s})}else{var i=0;this.state.dataApi.map((function(e){"Actived"==e.Status&&(i+=1)})),this.setState({data:this.state.arrPagination[t],totalActive:i})}}},{key:"toggleModal",value:function(){var e=Object(r.a)(n.a.mark((function e(t){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:"new"==t&&this.setState({modalCom:!this.state.modalCom,action:t,Name:""});case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"onChange",value:function(e,t){this.setState(Object(s.a)({},e,t))}},{key:"addUser",value:function(){var e=Object(r.a)(n.a.mark((function e(){var t,a,s;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!=(t=this.state.Name)&&""!=t){e.next=4;break}return alert("Please fill in all the requirements"),e.abrupt("return");case 4:return a={Name:t},this.setState({isLoading:!0}),e.next=8,T()({baseURL:S.a.BASE_URL,url:S.a.ADD_TYPEKEY,method:"PUT",data:a});case 8:1==(s=e.sent).data.is_success?(this.getData(),this.setState({modalCom:!this.state.modalCom})):(alert(s.data.message),this.setState({isLoading:!1}));case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"openUpdate",value:function(){var e=Object(r.a)(n.a.mark((function e(t){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.setState({modalCom:!this.state.modalCom,action:"update",Name:t.Name,id:t._id,Status:t.Status});case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"updateUser",value:function(){var e=Object(r.a)(n.a.mark((function e(){var t,a,s,i,r;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.state,a=t.Name,s=t.Status,null!=a&&""!=a){e.next=4;break}return alert("Please fill in all the requirements"),e.abrupt("return");case 4:return i={Name:a,id:this.state.id,Status:s},this.setState({isLoading:!0}),e.next=8,T()({baseURL:S.a.BASE_URL,url:S.a.UPDATE_TYPEKEY,method:"POST",data:i});case 8:1==(r=e.sent).data.is_success?(this.getData(),this.setState({modalCom:!this.state.modalCom})):(alert(r.data.message),this.setState({isLoading:!1}));case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"delete",value:function(){var e=Object(r.a)(n.a.mark((function e(){var t;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({isLoading:!0}),e.next=3,T()({baseURL:S.a.BASE_URL,url:S.a.DELETE_TYPEKEY,method:"DELETE",data:{id:this.state.delete._id}});case 3:1==(t=e.sent).data.is_success?(this.getData(),this.setState({modalDelete:!this.state.modalDelete,delete:null})):(alert(t.data.message),this.setState({isLoading:!1}));case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getUsers",value:function(){var t=this,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,s=this.state.limit,i=this.state.key||"",n={method:"GET",headers:A};fetch(e.BASE_URL+"/admin/users?key="+i+"&page="+a+"&limit="+s,n).then((function(e){e.json().then((function(e){t.setState({data:e.data,itemsCount:e.total,activePage:a,totalActive:e.totalActive,updated:""})}))})).catch(console.log)}},{key:"inputChange",value:function(e){this.setState(Object(s.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){var e=this,t=this.state,a=t.data,s=t.key,i=(t.viewingUser,t.communities,t.action),l=t.arrPagination,o=t.indexPage;return this.state.isLoading?Object(D.jsx)("div",{id:"page-loading",children:Object(D.jsxs)("div",{className:"three-balls",children:[Object(D.jsx)("div",{className:"ball ball1"}),Object(D.jsx)("div",{className:"ball ball2"}),Object(D.jsx)("div",{className:"ball ball3"})]})}):Object(D.jsxs)("div",{className:"animated fadeIn",children:[Object(D.jsx)(p.a,{children:Object(D.jsxs)(h.a,{children:[Object(D.jsx)("p",{style:N.success,children:this.state.updated}),Object(D.jsx)("p",{style:N.danger,children:this.state.deleted}),Object(D.jsxs)(m.a,{children:[Object(D.jsxs)(f.a,{children:[Object(D.jsx)("i",{className:"fa fa-align-justify"})," TYPE KEY (Total: ",void 0!=this.state.data||null!=this.state.data?this.state.data.length:0,", Active: ",this.state.totalActive,", Page: ",this.state.indexPage+1,")",Object(D.jsx)("div",{style:N.tags,children:Object(D.jsxs)("div",{children:[Object(D.jsx)(j.a,{style:N.searchInput,onChange:function(t){return e.searchKey(t.target.value)},name:"key",value:s,placeholder:"Search"}),Object(D.jsx)(b.a,{outline:!0,color:"primary",style:N.floatRight,size:"sm",onClick:function(){var t=Object(r.a)(n.a.mark((function t(a){return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.toggleModal("new");case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),children:"Add"})]})})]}),Object(D.jsx)(g.a,{children:Object(D.jsxs)(O.a,{responsive:!0,children:[Object(D.jsx)("thead",{children:Object(D.jsxs)("tr",{children:[Object(D.jsx)("th",{style:N.wa10,children:"No."}),Object(D.jsx)("th",{style:N.wh12,children:"Name"}),Object(D.jsx)("th",{style:N.wh12,children:"Status"}),Object(D.jsx)("th",{style:N.w5,children:"Action"})]})}),Object(D.jsx)("tbody",{children:void 0!=a?a.map((function(t,a){return Object(D.jsxs)("tr",{style:N.row,children:[Object(D.jsx)("td",{style:N.wa10,children:a+1}),Object(D.jsx)("td",{style:N.wh12,children:t.Name}),Object(D.jsx)("td",{style:N.wh12,children:t.Status}),Object(D.jsxs)("td",{style:N.w5,children:[Object(D.jsx)(b.a,{style:N.mgl5,outline:!0,color:"primary",size:"sm",onClick:function(){var a=Object(r.a)(n.a.mark((function a(s){return n.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.openUpdate(t);case 2:return a.abrupt("return",a.sent);case 3:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}(),children:"Update"})," ",Object(D.jsx)(b.a,{outline:!0,color:"danger",size:"sm",onClick:function(a){e.openDelete(t)},children:"Delete"})]})]},a)})):""})]})})]}),1==l.length?"":Object(D.jsx)("div",{style:{float:"right",marginRight:"10px",padding:"10px"},children:Object(D.jsx)("tr",{style:N.row,children:l.map((function(t,a){return Object(D.jsx)("td",{children:Object(D.jsx)(b.a,{style:N.pagination,color:a==o?"primary":"danger",onClick:function(t){e.setState({data:l[a],indexPage:a})},children:a+1})})}))})})]})}),Object(D.jsxs)(E.a,{isOpen:this.state.modalCom,className:this.props.className,children:[Object(D.jsx)(v.a,{children:"new"==this.state.action?"Create":"Update"}),Object(D.jsxs)(x.a,{children:[Object(D.jsx)(_.a,{field:"Name",label:"Name",value:this.state.Name,placeholder:"Name",onChange:function(t){return e.onChange("Name",t.target.value)}}),"new"==i?"":Object(D.jsxs)("div",{children:[Object(D.jsx)("label",{style:N.flexLabel,htmlFor:"tag",children:"Status:"}),Object(D.jsxs)("select",{style:N.flexOption,name:"Status",onChange:function(t){return e.onChange("Status",t.target.value)},children:[Object(D.jsx)("option",{value:this.state.Status,children:""==this.state.Status?" - - - - - - - - - - ":this.state.Status}),Object(D.jsx)("option",{value:"Actived",children:"Actived"}),Object(D.jsx)("option",{value:"Locked",children:"Locked"}),Object(D.jsx)("option",{value:"Deactived",children:"Deactived"})]})]})]}),Object(D.jsxs)(y.a,{children:[Object(D.jsx)(b.a,{color:"primary",onClick:function(t){"new"===e.state.action?e.addUser():e.updateUser()},disabled:this.state.isLoading,children:"Save"})," ",Object(D.jsx)(b.a,{color:"secondary",onClick:function(t){return e.toggleModal("new")},children:"Cancel"})]})]}),Object(D.jsxs)(E.a,{isOpen:this.state.modalDelete,toggle:function(t){return e.setState({modalDelete:!e.state.modalDelete,delete:null})},className:this.props.className,children:[Object(D.jsx)(v.a,{toggle:function(t){return e.setState({modalDelete:!e.state.modalDelete,delete:null})},children:"Delete"}),Object(D.jsx)(x.a,{children:Object(D.jsx)("label",{htmlFor:"tag",children:'Do you want to delete user "'.concat(this.state.delete?this.state.delete.Email:"",'" ?')})}),Object(D.jsxs)(y.a,{children:[Object(D.jsx)(b.a,{color:"primary",onClick:function(t){return e.delete()},disabled:this.state.isLoading,children:"Delete"})," ",Object(D.jsx)(b.a,{color:"secondary",onClick:function(t){return e.setState({modalDelete:!e.state.modalDelete,delete:null})},children:"Cancel"})]})]})]})}}]),i}(u.Component),N=Object(s.a)({datePicker:{marginBottom:20},wa10:{width:"5%",float:"left",height:"80px"},pagination:{marginRight:"5px"},flexLabel:{width:100},flexOption:{width:300},a:{textDecoration:"none"},floatRight:{float:"right",marginTop:"3px"},spinner:{width:"30px"},center:{textAlign:"center"},tbody:{height:"380px",overflowY:"auto"},wh12:{width:"35%",float:"left",height:"80px"},wh15:{width:"15%",float:"left",height:"80px"},w5:{width:"20%",float:"left",height:"80px"},row:{float:"left",width:"100%"},success:{color:"green"},danger:{color:"red"},mgl5:{marginLeft:"5px"},tags:{float:"right",marginRight:"5px",width:"250px"},searchInput:{width:"190px",display:"inline-block"},userActive:{color:"green"},userPending:{color:"red"},nagemonNameCol:{width:"328px"},image:{width:"100px",height:"100px",borderRadius:"99999px"}},"mgl5",{marginBottom:"0px"});t.default=k}.call(this,a(114))},646:function(e,t,a){"use strict";t.a={BASE_URL:"http://thanhvien.applamdep.com",LIST_USER:"/api/list-user",LIST_USER_WITH_ID:"/api/list-user?id=",ADD_USER:"/api/add-user",UPDATE_USER:"/api/update-user",DELETE_USER:"/api/delete-user",LOGIN_ADMIN:"/api/login_admin",GET_SHOP:"/api/get-shop",GET_SALE:"/api/get-sale",GET_COEFFICIENT:"/api/calculator-coefficient-user",GET_COEFFICIENT_PER_SALE:"/api/calculator-coefficient-user-per-sale",GET_USER_SALE_BY_MONTH:"/api/get-user-of-sale-by-month",CALCULATOR_ALL_USER_OF_COMPANY:"/api/calculator-all-user-company",CALCULATOR_ALL_USER_OF_SALE:"/api/calculator-all-user-of-sale",LIST_CUSTOMER:"/api/list-customer",LIST_CUSTOMER_BY_MONTH:"/api/get-user-sale-by-month",LIST_TYPEKEY:"/api/list-typekey",LIST_TYPEKEY_WITH_ID:"/api/list-typekey?id=",ADD_TYPEKEY:"/api/add-typekey",UPDATE_TYPEKEY:"/api/update-typekey",DELETE_TYPEKEY:"/api/delete-typekey",LIST_ROLE:"/api/list-role",LIST_ROLE_WITH_ID:"/api/list-role?id=",ADD_ROLE:"/api/add-role",UPDATE_ROLE:"/api/update-role",DELETE_ROLE:"/api/delete-role",LIST_SALELOG:"/api/list-salelog",LIST_SALELOG_WITH_ID:"/api/list-salelog?id=",ADD_SALELOG:"/api/add-salelog",UPDATE_SALELOG:"/api/update-salelog",DELETE_SALELOG:"/api/delete-salelog",LIST_SALE:"/api/list-sale",LIST_SALE_WITH_ID:"/api/list-sale?id=",ADD_SALE:"/api/add-sale",UPDATE_SALE:"/api/update-sale",DELETE_SALE:"/api/delete-sale",LIST_KEYORDER:"/api/list-keyorder",LIST_KEYORDER_WITH_ID:"/api/list-keyorder?id=",ADD_KEYORDER:"/api/add-keyorder",UPDATE_KEYORDER:"/api/update-keyorder",DELETE_KEYORDER:"/api/delete-keyorder",LIST_KEY:"/api/list-key",LIST_KEY_WITH_ID:"/api/list-key?id=",ADD_KEY:"/api/add-key",UPDATE_KEY:"/api/update-key",DELETE_KEY:"/api/delete-key",LIST_COMPANY:"/api/list-company",LIST_COMPANY_WITH_ID:"/api/list-company?id=",ADD_COMPANY:"/api/add-company",UPDATE_COMPANY:"/api/update-company",DELETE_COMPANY:"/api/delete-company"}},649:function(e,t,a){"use strict";a(2);var s=a(640),i=a.n(s),n=a(21),r=function(e){var t=e.field,a=e.value,s=e.label,r=e.error,l=e.type,o=e.onChange,c=e.checkUserExists,d=e.readOnly,u=e.placeholder;return Object(n.jsxs)("div",{className:i()("form-group",{"has-error":r}),children:[Object(n.jsx)("label",{className:"control-label",children:s}),Object(n.jsx)("input",{onChange:o,onBlur:c,value:a,type:l,name:t,placeholder:u,readOnly:d,className:"form-control"}),r&&Object(n.jsx)("span",{className:"help-block",children:r})]})};r.defaultProps={type:"text"},t.a=r},669:function(e,t,a){},685:function(e,t,a){"use strict";var s=a(12),i=a(28),n=a(2),r=a.n(n),l=a(64),o=a.n(l),c=a(640),d=a.n(c),u=a(642),p=o.a.oneOfType([o.a.number,o.a.string]),h={tag:u.n,noGutters:o.a.bool,className:o.a.string,cssModule:o.a.object,form:o.a.bool,xs:p,sm:p,md:p,lg:p,xl:p},m={tag:"div",widths:["xs","sm","md","lg","xl"]},f=function(e){var t=e.className,a=e.cssModule,n=e.noGutters,l=e.tag,o=e.form,c=e.widths,p=Object(i.a)(e,["className","cssModule","noGutters","tag","form","widths"]),h=[];c.forEach((function(t,a){var s=e[t];if(delete p[t],s){var i=!a;h.push(i?"row-cols-"+s:"row-cols-"+t+"-"+s)}}));var m=Object(u.j)(d()(t,n?"no-gutters":null,o?"form-row":"row",h),a);return r.a.createElement(l,Object(s.a)({},p,{className:m}))};f.propTypes=h,f.defaultProps=m,t.a=f},686:function(e,t,a){"use strict";var s=a(12),i=a(28),n=a(2),r=a.n(n),l=a(64),o=a.n(l),c=a(640),d=a.n(c),u=a(642),p=o.a.oneOfType([o.a.number,o.a.string]),h=o.a.oneOfType([o.a.bool,o.a.number,o.a.string,o.a.shape({size:o.a.oneOfType([o.a.bool,o.a.number,o.a.string]),order:p,offset:p})]),m={tag:u.n,xs:h,sm:h,md:h,lg:h,xl:h,className:o.a.string,cssModule:o.a.object,widths:o.a.array},f={tag:"div",widths:["xs","sm","md","lg","xl"]},j=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},b=function(e){var t=e.className,a=e.cssModule,n=e.widths,l=e.tag,o=Object(i.a)(e,["className","cssModule","widths","tag"]),c=[];n.forEach((function(t,s){var i=e[t];if(delete o[t],i||""===i){var n=!s;if(Object(u.h)(i)){var r,l=n?"-":"-"+t+"-",p=j(n,t,i.size);c.push(Object(u.j)(d()(((r={})[p]=i.size||""===i.size,r["order"+l+i.order]=i.order||0===i.order,r["offset"+l+i.offset]=i.offset||0===i.offset,r)),a))}else{var h=j(n,t,i);c.push(h)}}})),c.length||c.push("col");var p=Object(u.j)(d()(t,c),a);return r.a.createElement(l,Object(s.a)({},o,{className:p}))};b.propTypes=m,b.defaultProps=f,t.a=b},698:function(e,t,a){"use strict";var s=a(12),i=a(28),n=a(2),r=a.n(n),l=a(64),o=a.n(l),c=a(640),d=a.n(c),u=a(642),p={className:o.a.string,cssModule:o.a.object,size:o.a.string,bordered:o.a.bool,borderless:o.a.bool,striped:o.a.bool,dark:o.a.bool,hover:o.a.bool,responsive:o.a.oneOfType([o.a.bool,o.a.string]),tag:u.n,responsiveTag:u.n,innerRef:o.a.oneOfType([o.a.func,o.a.string,o.a.object])},h=function(e){var t=e.className,a=e.cssModule,n=e.size,l=e.bordered,o=e.borderless,c=e.striped,p=e.dark,h=e.hover,m=e.responsive,f=e.tag,j=e.responsiveTag,b=e.innerRef,g=Object(i.a)(e,["className","cssModule","size","bordered","borderless","striped","dark","hover","responsive","tag","responsiveTag","innerRef"]),O=Object(u.j)(d()(t,"table",!!n&&"table-"+n,!!l&&"table-bordered",!!o&&"table-borderless",!!c&&"table-striped",!!p&&"table-dark",!!h&&"table-hover"),a),E=r.a.createElement(f,Object(s.a)({},g,{ref:b,className:O}));if(m){var v=Object(u.j)(!0===m?"table-responsive":"table-responsive-"+m,a);return r.a.createElement(j,{className:v},E)}return E};h.propTypes=p,h.defaultProps={tag:"table",responsiveTag:"div"},t.a=h}}]);
//# sourceMappingURL=15.19713b2b.chunk.js.map