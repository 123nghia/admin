(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[87],{1367:function(e,t,a){"use strict";a.r(t),function(e){var n=a(171),s=a(114),i=a.n(s),r=a(668),l=a(167),c=a(168),o=a(170),d=a(169),h=a(2),u=a(673),p=a(674),m=a(704),j=a(705),b=a(679),x=a(701),g=a(677),f=a(818),O=a(1439),v=a(1352),y=a(1353),C=a(1354),w=(a(670),a(681),a(667)),S=a(650),k=a(669),A=a.n(k),E=a(17),U=new Headers,L=localStorage.getItem("auth");U.append("Authorization","Bearer "+L),U.append("Content-Type","application/json");var D=function(t){Object(o.a)(s,t);var a=Object(d.a)(s);function s(e){var t;return Object(l.a)(this,s),(t=a.call(this,e)).getData=Object(r.a)(i.a.mark((function e(){var a,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.setState({isLoading:!0}),e.next=3,A()({baseURL:w.a.BASE_URL,url:w.a.LIST_KEYORDER,method:"GET"});case 3:a=e.sent,t.pagination(a.data.data),t.setState({dataApi:a.data.data}),n=0,a.data.data.map((function(e){"Actived"==e.Status&&(n+=1)})),t.setState({isLoading:!1,totalActive:n});case 9:case"end":return e.stop()}}),e)}))),t.openDelete=function(e){t.setState({modalDelete:!t.state.modalDelete,delete:e})},t.state={data:[],key:"",activePage:1,page:1,itemsCount:0,limit:20,totalActive:0,modalCom:!1,viewingUser:{},communities:[],updated:"",dataApi:[],action:"new",UserName:"",Email:"",Company_Id:"",Address:"",Phone:"",Status:"",modalDelete:!1,delete:null,dataCompany:[],currentCompany:"",arrPagination:[],indexPage:0},t}return Object(c.a)(s,[{key:"componentDidMount",value:function(){var e=Object(r.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.getData();case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"pagination",value:function(e){var t,a,n,s=[];for(t=0,a=e.length;t<a;t+=5)n=e.slice(t,t+5),s.push(n);this.setState({arrPagination:s,data:s[this.state.indexPage]})}},{key:"searchKey",value:function(e){var t=this.state.indexPage;if(this.setState({key:e}),""!=e){var a=[];this.state.dataApi.map((function(t){(t.UserName.toLocaleUpperCase().includes(e.toLocaleUpperCase())||t.Email.toLocaleUpperCase().includes(e.toLocaleUpperCase()))&&a.push(t)}));var n=0;a.map((function(e){"Actived"==e.Status&&(n+=1)})),this.setState({data:a,totalActive:n})}else{var s=0;this.state.dataApi.map((function(e){"Actived"==e.Status&&(s+=1)})),this.setState({data:this.state.arrPagination[t],totalActive:s})}}},{key:"toggleModal",value:function(){var e=Object(r.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getCompanyData();case 2:"new"==t&&this.setState({modalCom:!this.state.modalCom,action:t,UserName:"",Email:"",Company_Id:"",Address:"",Phone:"",Status:""});case 3:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"onChange",value:function(e,t){this.setState(Object(n.a)({},e,t))}},{key:"addUser",value:function(){var e=Object(r.a)(i.a.mark((function e(){var t,a,n,s,r,l,c,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.state,a=t.UserName,n=t.Company_Id,s=t.Email,r=t.Address,l=t.Phone,null!=a&&""!=a&&null!=s&&""!=s&&null!=r&&""!=r&&null!=l&&""!=l){e.next=4;break}return alert("Vui l\xf2ng nh\u1eadp \u0111\u1ea7y \u0111\u1ee7 tr\u01b0\u1eddng !!!"),e.abrupt("return");case 4:return c={UserName:a,Company_Id:n,Email:s,Address:r,Phone:l},this.setState({isLoading:!0}),e.next=8,A()({baseURL:w.a.BASE_URL,url:w.a.ADD_KEYORDER,method:"PUT",data:c});case 8:1==(o=e.sent).data.is_success?(this.getData(),this.setState({modalCom:!this.state.modalCom})):(alert(o.data.message),this.setState({isLoading:!1}));case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"openUpdate",value:function(){var e=Object(r.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getCompanyData(t.Company_Id);case 2:this.setState({modalCom:!this.state.modalCom,action:"update",UserName:t.UserName,Company_Id:t.Company_Id,Email:t.Email,Address:t.Address,Phone:t.Phone,id:t._id,Status:t.Status});case 3:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"updateUser",value:function(){var e=Object(r.a)(i.a.mark((function e(){var t,a,n,s,r,l,c,o,d;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.state,a=t.UserName,n=t.Company_Id,s=t.Email,r=t.Address,l=t.Phone,c=t.Status,null!=a&&""!=a&&null!=s&&""!=s&&null!=r&&""!=r&&null!=l&&""!=l){e.next=4;break}return alert("Vui l\xf2ng nh\u1eadp \u0111\u1ea7y \u0111\u1ee7 tr\u01b0\u1eddng !!!"),e.abrupt("return");case 4:return o={UserName:a,Company_Id:n,Email:s,Address:r,Phone:l,id:this.state.id,Status:c},this.setState({isLoading:!0}),e.next=8,A()({baseURL:w.a.BASE_URL,url:w.a.UPDATE_KEYORDER,method:"POST",data:o});case 8:1==(d=e.sent).data.is_success?(this.getData(),this.setState({modalCom:!this.state.modalCom})):(alert(d.data.message),this.setState({isLoading:!1}));case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"delete",value:function(){var e=Object(r.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({isLoading:!0}),e.next=3,A()({baseURL:w.a.BASE_URL,url:w.a.DELETE_KEYORDER,method:"DELETE",data:{id:this.state.delete._id}});case 3:1==(t=e.sent).data.is_success?(this.getData(),this.setState({modalDelete:!this.state.modalDelete,delete:null})):(alert(t.data.message),this.setState({isLoading:!1}));case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getUsers",value:function(){var t=this,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,n=this.state.limit,s=this.state.key||"",i={method:"GET",headers:U};fetch(e.BASE_URL+"/admin/users?key="+s+"&page="+a+"&limit="+n,i).then((function(e){e.json().then((function(e){t.setState({data:e.data,itemsCount:e.total,activePage:a,totalActive:e.totalActive,updated:""})}))})).catch(console.log)}},{key:"getCompanyData",value:function(){var e=Object(r.a)(i.a.mark((function e(t){var a,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A()({baseURL:w.a.BASE_URL,url:w.a.LIST_COMPANY,method:"POST"});case 2:if(a=e.sent,""==t&&void 0==t){e.next=8;break}return e.next=6,A()({baseURL:w.a.BASE_URL,url:w.a.LIST_COMPANY_WITH_ID+t,method:"POST"});case 6:null==(n=e.sent).data.data&&void 0==n.data.data||this.setState({currentCompany:n.data.data.Name});case 8:this.setState({dataCompany:a.data.data});case 9:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"inputChange",value:function(e){this.setState(Object(n.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){var e=this,t=this.state,a=t.data,n=t.key,s=t.dataCompany,l=t.currentCompany,c=t.action,o=t.arrPagination,d=t.indexPage;return this.state.isLoading?Object(E.jsx)("div",{id:"page-loading",children:Object(E.jsxs)("div",{className:"three-balls",children:[Object(E.jsx)("div",{className:"ball ball1"}),Object(E.jsx)("div",{className:"ball ball2"}),Object(E.jsx)("div",{className:"ball ball3"})]})}):Object(E.jsxs)("div",{className:"animated fadeIn",children:[Object(E.jsx)(u.a,{children:Object(E.jsxs)(p.a,{children:[Object(E.jsx)("p",{style:N.success,children:this.state.updated}),Object(E.jsx)("p",{style:N.danger,children:this.state.deleted}),Object(E.jsxs)(m.a,{children:[Object(E.jsxs)(j.a,{children:[Object(E.jsxs)("i",{className:"fa fa-align-justify",children:[" KEY ORDER (Total: ",void 0!=this.state.data||null!=this.state.data?this.state.data.length:0,", Active: ",this.state.totalActive,", Page: ",this.state.indexPage+1,")"]}),Object(E.jsx)("div",{style:N.tags,children:Object(E.jsxs)("div",{children:[Object(E.jsx)(b.a,{style:N.searchInput,onChange:function(t){return e.searchKey(t.target.value)},name:"key",value:n,placeholder:"Search"}),Object(E.jsx)(x.a,{outline:!0,color:"primary",style:N.floatRight,size:"sm",onClick:function(){var t=Object(r.a)(i.a.mark((function t(a){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.toggleModal("new");case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),children:"Add"})]})})]}),Object(E.jsx)(g.a,{children:Object(E.jsxs)(f.a,{responsive:!0,children:[Object(E.jsx)("thead",{children:Object(E.jsxs)("tr",{children:[Object(E.jsx)("th",{style:N.wa10,children:"No."}),Object(E.jsx)("th",{style:N.wh12,children:"UserName"}),Object(E.jsx)("th",{style:N.wh15,children:"Company ID"}),Object(E.jsx)("th",{style:N.wh15,children:"Email"}),Object(E.jsx)("th",{style:N.wh15,children:"Address"}),Object(E.jsx)("th",{style:N.wh12,children:"Phone"}),Object(E.jsx)("th",{style:N.wh12,children:"Status"}),Object(E.jsx)("th",{style:N.w5,children:"Action"})]})}),Object(E.jsx)("tbody",{children:void 0!=a?a.map((function(t,a){return Object(E.jsxs)("tr",{style:N.row,children:[Object(E.jsx)("td",{style:N.wa10,children:a+1}),Object(E.jsx)("td",{style:N.wh12,children:t.UserName}),Object(E.jsx)("td",{style:N.wh15,children:t.Company_Id}),Object(E.jsx)("td",{style:N.wh15,children:t.Email}),Object(E.jsx)("td",{style:N.wh15,children:t.Address}),Object(E.jsx)("td",{style:N.wh12,children:t.Phone}),Object(E.jsx)("td",{style:N.wh12,children:t.Status}),Object(E.jsxs)("td",{style:N.w5,children:[Object(E.jsx)(x.a,{style:N.mgl5,outline:!0,color:"primary",size:"sm",onClick:function(){var a=Object(r.a)(i.a.mark((function a(n){return i.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.openUpdate(t);case 2:return a.abrupt("return",a.sent);case 3:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}(),children:"C\u1eadp nh\u1eadt"})," ",Object(E.jsx)(x.a,{outline:!0,color:"danger",size:"sm",onClick:function(a){e.openDelete(t)},children:"Xo\xe1"})]})]},a)})):""})]})})]}),1==o.length?"":Object(E.jsx)("div",{style:{float:"right",marginRight:"10px",padding:"10px"},children:Object(E.jsx)("tr",{style:N.row,children:o.map((function(t,a){return Object(E.jsx)("td",{children:Object(E.jsx)(x.a,{style:N.pagination,color:a==d?"primary":"danger",onClick:function(t){e.setState({data:o[a],indexPage:a})},children:a+1})})}))})})]})}),Object(E.jsxs)(O.a,{isOpen:this.state.modalCom,className:this.props.className,children:[Object(E.jsx)(v.a,{children:"new"==this.state.action?"T\u1ea1o m\u1edbi":"C\u1eadp nh\u1eadt"}),Object(E.jsxs)(y.a,{children:[Object(E.jsx)(S.a,{field:"UserName",label:"UserName",value:this.state.UserName,placeholder:"UserName",onChange:function(t){return e.onChange("UserName",t.target.value)}}),Object(E.jsxs)("div",{children:[Object(E.jsx)("label",{style:N.flexLabel,htmlFor:"tag",children:"Company:    "}),Object(E.jsxs)("select",{style:N.flexOption,name:"Company_Id",onChange:function(t){return e.onChange("Company_Id",t.target.value)},children:[Object(E.jsx)("option",{value:this.state.Company_Id,children:"-----"}),s.map((function(e,t){return e.Name==l?Object(E.jsx)("option",{selected:!0,value:e._id,children:e.Name}):Object(E.jsx)("option",{value:e._id,children:e.Name})}))]})]}),Object(E.jsx)(S.a,{field:"Email",label:"Email",value:this.state.Email,placeholder:"Email",onChange:function(t){return e.onChange("Email",t.target.value)}}),Object(E.jsx)(S.a,{field:"Address",label:"Address",value:this.state.Address,placeholder:"Address",onChange:function(t){return e.onChange("Address",t.target.value)}}),Object(E.jsx)(S.a,{field:"Phone",label:"Phone",value:this.state.Phone,placeholder:"Phone",onChange:function(t){return e.onChange("Phone",t.target.value)}}),"new"==c?"":Object(E.jsxs)("div",{children:[Object(E.jsx)("label",{style:N.flexLabel,htmlFor:"tag",children:"Tr\u1ea1ng th\xe1i:"}),Object(E.jsxs)("select",{style:N.flexOption,name:"Status",onChange:function(t){return e.onChange("Status",t.target.value)},children:[Object(E.jsx)("option",{value:this.state.Status,children:""==this.state.Status?" - - - - - - - - - - ":this.state.Status}),Object(E.jsx)("option",{value:"Actived",children:"Actived"}),Object(E.jsx)("option",{value:"Locked",children:"Locked"}),Object(E.jsx)("option",{value:"Deactived",children:"Deactived"})]})]})]}),Object(E.jsxs)(C.a,{children:[Object(E.jsx)(x.a,{color:"primary",onClick:function(t){"new"===e.state.action?e.addUser():e.updateUser()},disabled:this.state.isLoading,children:"L\u01b0u"})," ",Object(E.jsx)(x.a,{color:"secondary",onClick:function(t){return e.toggleModal("new")},children:"\u0110\xf3ng"})]})]}),Object(E.jsxs)(O.a,{isOpen:this.state.modalDelete,toggle:function(t){return e.setState({modalDelete:!e.state.modalDelete,delete:null})},className:this.props.className,children:[Object(E.jsx)(v.a,{toggle:function(t){return e.setState({modalDelete:!e.state.modalDelete,delete:null})},children:"Xo\xe1"}),Object(E.jsx)(y.a,{children:Object(E.jsx)("label",{htmlFor:"tag",children:'Do you want to delete user "'.concat(this.state.delete?this.state.delete.Email:"",'" ?')})}),Object(E.jsxs)(C.a,{children:[Object(E.jsx)(x.a,{color:"primary",onClick:function(t){return e.delete()},disabled:this.state.isLoading,children:"Xo\xe1"})," ",Object(E.jsx)(x.a,{color:"secondary",onClick:function(t){return e.setState({modalDelete:!e.state.modalDelete,delete:null})},children:"\u0110\xf3ng"})]})]})]})}}]),s}(h.Component),N={datePicker:{marginBottom:20},wa10:{width:"5%",float:"left",height:"80px"},pagination:{marginRight:"5px"},flexLabel:{width:100},flexOption:{width:300},a:{textDecoration:"none"},floatRight:{float:"right",marginTop:"3px"},spinner:{width:"30px"},center:{textAlign:"center"},tbody:{height:"380px",overflowY:"auto"},wh12:{width:"10%",float:"left",height:"80px"},wh15:{width:"16%",float:"left",height:"80px"},w5:{width:"12%",float:"left",height:"80px"},row:{float:"left",width:"100%"},success:{color:"green"},danger:{color:"red"},mgl5:{marginLeft:"5px"},tags:{float:"right",marginRight:"5px",width:"250px"},searchInput:{width:"190px",display:"inline-block"},userActive:{color:"green"},userPending:{color:"red"},nagemonNameCol:{width:"328px"},image:{width:"100px",height:"100px",borderRadius:"99999px"}};t.default=D}.call(this,a(115))},650:function(e,t,a){"use strict";a(2);var n=a(644),s=a.n(n),i=a(17),r=function(e){var t=e.field,a=e.value,n=e.label,r=e.error,l=e.type,c=e.onChange,o=e.checkUserExists,d=e.readOnly,h=e.placeholder,u=e.onClick;return Object(i.jsxs)("div",{className:s()("form-group",{"has-error":r}),children:[Object(i.jsx)("label",{className:"control-label",children:n}),Object(i.jsx)("input",{onChange:c,onClick:u,onBlur:o,value:a,type:l,name:t,placeholder:h,readOnly:d,className:"form-control"}),r&&Object(i.jsx)("span",{className:"help-block",children:r})]})};r.defaultProps={type:"text"},t.a=r}}]);
//# sourceMappingURL=87.026217f5.chunk.js.map