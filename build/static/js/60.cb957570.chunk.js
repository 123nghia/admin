(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[60],{1291:function(e,t,a){"use strict";a.r(t),function(e){var n=a(165),s=a(113),i=a.n(s),c=a(641),r=a(166),l=a(167),o=a(169),d=a(168),h=a(2),u=a(1261),p=a(1262),j=a(1263),m=a(661),b=a(1264),g=a(1340),x=a(1267),f=a(1268),v=a(1269),O=a(640),y=(a(646),a(677)),k=a.n(y),S=(a(665),a(644)),D=a(652),w=a(643),C=a.n(w),A=a(17),N=new Headers,L=localStorage.getItem("auth");N.append("Authorization","Bearer "+L),N.append("Content-Type","application/json");var _=function(t){Object(o.a)(s,t);var a=Object(d.a)(s);function s(e){var t;return Object(r.a)(this,s),(t=a.call(this,e)).getData=Object(c.a)(i.a.mark((function e(){var a,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.setState({isLoading:!0}),e.next=3,C()({baseURL:S.a.BASE_URL,url:S.a.LIST_HARDWARE,method:"POST",headers:t.state.token});case 3:a=e.sent,t.pagination(a.data.data),t.setState({dataApi:a.data.data}),n=0,a.data.data.map((function(e){"Actived"==e.Status&&(n+=1)})),t.setState({isLoading:!1,totalActive:n});case 9:case"end":return e.stop()}}),e)}))),t.openDelete=function(e){t.setState({modalDelete:!t.state.modalDelete,delete:e})},t.state={data:[],key:"",keyName:"",keyActive:"",keyEnd:"",keyStatus:"",keyCode:"",activePage:1,page:1,itemsCount:0,limit:20,totalActive:0,modalCom:!1,viewingUser:{},communities:[],updated:"",dataApi:[],action:"new",Name:"",Active_Date:new Date,End_Date:new Date,Status:"",modalDelete:!1,delete:null,dataCompany:[],currentCompany:"",arrPagination:[],indexPage:0,token:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}},t}return Object(l.a)(s,[{key:"componentDidMount",value:function(){var e=Object(c.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(this.getData(),t=JSON.parse(localStorage.getItem("url")),a=0;a<t.length;a++)"#"+t[a].to==window.location.hash&&1==t[a].hidden&&(window.location.href="#/");case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getBadge",value:function(e){switch(e){case"INSTOCK":return"success";case"AVAILABLE":return"secondary";case"Locked":return"warning";case"Deactived":return"danger";default:return"primary"}}},{key:"pagination",value:function(e){var t,a,n,s=[];for(t=0,a=e.length;t<a;t+=5)n=e.slice(t,t+5),s.push(n);this.setState({arrPagination:s,data:s[this.state.indexPage]})}},{key:"searchKey",value:function(){var e=this.state,t=e.key,a=e.keyStatus;if(""!=t||""!=a){var n=[];this.state.dataApi.map((function(e){e.Name.toLocaleUpperCase().includes(t.toLocaleUpperCase())&&e.Status.toLocaleUpperCase().includes(a.toLocaleUpperCase())&&n.push(e)}));var s=0;n.map((function(e){"Actived"==e.Status&&(s+=1)})),this.setState({data:n,totalActive:s})}else{var i=0;this.state.dataApi.map((function(e){"Actived"==e.Status&&(i+=1)})),this.setState({data:this.state.dataApi,totalActive:i})}}},{key:"actionSearch",value:function(e,t){var a=this;this.setState(Object(n.a)({},t,e.target.value),(function(){a.searchKey()}))}},{key:"resetSearch",value:function(){var e=this;this.setState({keyName:"",keyActive:new Date,keyEnd:new Date,keyStatus:"",keyCode:""},(function(){e.searchKey()}))}},{key:"toggleModal",value:function(){var e=Object(c.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:"new"==t&&this.setState({modalCom:!this.state.modalCom,action:t,Name:"",Active_Date:new Date,End_Date:new Date});case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"onChange",value:function(e,t){this.setState(Object(n.a)({},e,t))}},{key:"addPackageSale",value:function(){var e=Object(c.a)(i.a.mark((function e(){var t,a,n,s,c,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.state,a=t.Name,n=t.Active_Date,s=t.End_Date,null!=a&&""!=a){e.next=4;break}return alert("Vui lòng nhập đầy đủ trường dữ liệu !!!"),e.abrupt("return");case 4:return c={Name:a,Active_Date:n,End_Date:s},this.setState({isLoading:!0}),e.next=8,C()({baseURL:S.a.BASE_URL,url:S.a.ADD_HARDWARE,method:"PUT",data:c});case 8:1==(r=e.sent).data.is_success?(this.getData(),this.setState({modalCom:!this.state.modalCom})):(alert(r.data.message),this.setState({isLoading:!1}));case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"openUpdate",value:function(){var e=Object(c.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.setState(Object(n.a)({modalCom:!this.state.modalCom,action:"update",Name:t.Name,Active_Date:t.Active_Date,End_Date:t.End_Date,Status:t.Status,id:t._id},"Status",t.Status));case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"updatePackageSale",value:function(){var e=Object(c.a)(i.a.mark((function e(){var t,a,n,s,c,r,l;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.state,a=t.Name,n=t.Active_Date,s=t.End_Date,c=t.Status,null!=a&&""!=a){e.next=4;break}return alert("Vui lòng nhập đầy đủ trường dữ liệu !!!"),e.abrupt("return");case 4:return r={Name:a,Active_Date:n,End_Date:s,id:this.state.id,Status:c},this.setState({isLoading:!0}),e.next=8,C()({baseURL:S.a.BASE_URL,url:S.a.UPDATE_HARDWARE,method:"POST",data:r});case 8:1==(l=e.sent).data.is_success?(this.getData(),this.setState({modalCom:!this.state.modalCom})):(alert(l.data.message),this.setState({isLoading:!1}));case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"delete",value:function(){var e=Object(c.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({isLoading:!0}),e.next=3,C()({baseURL:S.a.BASE_URL,url:S.a.DELETE_HARDWARE,method:"DELETE",data:{id:this.state.delete._id}});case 3:1==(t=e.sent).data.is_success?(this.getData(),this.setState({modalDelete:!this.state.modalDelete,delete:null})):(alert(t.data.message),this.setState({isLoading:!1}));case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getUsers",value:function(){var t=this,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,n=this.state.limit,s=this.state.key||"",i={method:"GET",headers:N};fetch(e.BASE_URL+"/admin/users?key="+s+"&page="+a+"&limit="+n,i).then((function(e){e.json().then((function(e){t.setState({data:e.data,itemsCount:e.total,activePage:a,totalActive:e.totalActive,updated:""})}))})).catch(console.log)}},{key:"handlePageChange",value:function(){var e=Object(c.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.getUsers(t);case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"toggle",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";this.setState({modal:!this.state.modal,image:"",url:"",isActive:!1,isLoading:!1,errors:{},action:e,position:1,data:[],updated:""})}},{key:"inputChange",value:function(e){this.setState(Object(n.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){var e=this,t=this.state,a=t.data,n=t.key,s=t.action,i=t.End_Date,c=t.Active_Date,r=t.arrPagination,l=t.indexPage;return this.state.isLoading?Object(A.jsx)("div",{id:"page-loading",children:Object(A.jsxs)("div",{className:"three-balls",children:[Object(A.jsx)("div",{className:"ball ball1"}),Object(A.jsx)("div",{className:"ball ball2"}),Object(A.jsx)("div",{className:"ball ball3"})]})}):Object(A.jsxs)("div",{children:[Object(A.jsxs)(u.a,{children:[Object(A.jsxs)(p.a,{children:["Qu\u1ea3n l\xed ph\u1ea7n c\u1ee9ng (Page: ",this.state.indexPage+1,")",Object(A.jsx)("div",{style:E.tags,children:Object(A.jsxs)(O.W,{children:[Object(A.jsx)(O.p,{sm:"6",lg:"12",children:Object(A.jsxs)(O.W,{children:[Object(A.jsx)(O.p,{sm:"6",lg:"4",children:Object(A.jsx)("div",{children:Object(A.jsx)(j.a,{style:E.searchInput,onChange:function(t){e.actionSearch(t,"key")},name:"key",value:n,placeholder:"T\u1eeb kh\xf3a"})})}),Object(A.jsx)(O.p,{sm:"6",lg:"4",children:Object(A.jsx)(O.X,{style:E.flexOption,onChange:function(t){e.actionSearch(t,"keyStatus")},custom:!0,children:["INSTOCK","AVAILABLE"].map((function(e,t){return Object(A.jsx)("option",{value:e,children:e})}))})}),Object(A.jsx)(O.p,{sm:"6",lg:"4",children:Object(A.jsx)(m.a,{color:"primary",style:{width:"100%",marginTop:5},size:"sm",onClick:function(t){e.resetSearch()},children:"L\xe0m m\u1edbi t\xecm ki\u1ebfm"})})]})}),Object(A.jsx)(O.p,{sm:"6",lg:"12",children:Object(A.jsx)(m.a,{outline:!0,color:"primary",style:E.floatRight,size:"sm",onClick:function(t){return e.toggleModal("new")},children:"Th\xeam m\u1edbi"})})]})})]}),Object(A.jsx)(b.a,{children:Object(A.jsxs)("table",{className:"table table-hover table-outline mb-0 d-none d-sm-table",children:[Object(A.jsx)("thead",{className:"thead-light",children:Object(A.jsxs)("tr",{children:[Object(A.jsx)("th",{className:"text-center",children:"STT."}),Object(A.jsx)("th",{className:"text-center",children:"T\xean"}),Object(A.jsx)("th",{className:"text-center",children:"Ng\xe0y k\xedch ho\u1ea1t"}),Object(A.jsx)("th",{className:"text-center",children:"Ng\xe0y h\u1ebft h\u1ea1n"}),Object(A.jsx)("th",{className:"text-center",children:"M\xe3"}),Object(A.jsx)("th",{className:"text-center",children:"Ng\xe0y t\u1ea1o"}),Object(A.jsx)("th",{className:"text-center",children:"Tr\u1ea1ng th\xe1i"}),Object(A.jsx)("th",{className:"text-center",children:"#"})]})}),Object(A.jsx)("tbody",{children:void 0!=a?a.map((function(t,a){return Object(A.jsxs)("tr",{children:[Object(A.jsx)("td",{className:"text-center",children:a+1}),Object(A.jsx)("td",{className:"text-center",children:t.Name}),Object(A.jsx)("td",{className:"text-center",children:new Date(t.Active_Date).toLocaleDateString()+" "+new Date(t.Active_Date).toLocaleTimeString()}),Object(A.jsx)("td",{className:"text-center",children:new Date(t.End_Date).toLocaleDateString()+" "+new Date(t.End_Date).toLocaleTimeString()}),Object(A.jsx)("td",{className:"text-center",children:t.Key}),Object(A.jsx)("td",{className:"text-center",children:new Date(t.Create_Date).toLocaleDateString()+" "+new Date(t.Create_Date).toLocaleTimeString()}),Object(A.jsx)("td",{className:"text-center",children:Object(A.jsx)(O.a,{color:e.getBadge(t.Status),children:t.Status})}),Object(A.jsxs)("td",{className:"text-center",children:[Object(A.jsx)(m.a,{outline:!0,color:"primary",size:"sm",onClick:function(a){return e.openUpdate(t)},children:"Update"})," ",Object(A.jsx)(m.a,{outline:!0,color:"danger",size:"sm",onClick:function(a){e.openDelete(t)},children:"Delete"})]})]},a)})):""})]})})]}),1==r.length?"":Object(A.jsx)("div",{style:{float:"right",marginRight:"10px",padding:"10px"},children:Object(A.jsx)("tr",{style:E.row,children:r.map((function(t,a){return Object(A.jsx)("td",{children:Object(A.jsx)(m.a,{style:{marginRight:"5px"},color:a==l?"primary":"danger",onClick:function(t){e.setState({data:r[a],indexPage:a})},children:a+1})})}))})}),Object(A.jsxs)(g.a,{isOpen:this.state.modalCom,className:this.props.className,children:[Object(A.jsx)(x.a,{children:"new"==this.state.action?"T\u1ea1o m\u1edbi":"C\u1eadp nh\u1eadt"}),Object(A.jsxs)(f.a,{children:[Object(A.jsx)(D.a,{field:"Name",label:"T\xean ph\u1ea7n c\u1ee9ng",value:this.state.Name,placeholder:"T\xean ph\u1ea7n c\u1ee9ng",onChange:function(t){return e.onChange("Name",t.target.value)}}),Object(A.jsxs)("div",{style:E.datePicker,children:[Object(A.jsx)("label",{style:E.flexLabel,children:"Ng\xe0y k\xedch ho\u1ea1t:"}),Object(A.jsx)(k.a,{style:E.flexOption,selected:new Date(c),onChange:function(t){return e.setState({Active_Date:t})}})]}),Object(A.jsxs)("div",{style:E.datePicker,children:[Object(A.jsx)("label",{style:E.flexLabel,children:"Ng\xe0y h\u1ebft h\u1ea1n:"}),Object(A.jsx)(k.a,{style:E.flexOption,selected:new Date(i),onChange:function(t){return e.setState({End_Date:t})}})]}),"new"==s?"":Object(A.jsxs)("div",{children:[Object(A.jsx)("label",{style:E.flexLabel,htmlFor:"tag",children:"Tr\u1ea1ng th\xe1i:"}),Object(A.jsxs)("select",{style:E.flexOption,name:"Status",onChange:function(t){return e.onChange("Status",t.target.value)},children:[Object(A.jsx)("option",{value:this.state.Status,children:""==this.state.Status?" - - - - - - - - - - ":this.state.Status}),Object(A.jsx)("option",{value:"INSTOCK",children:"INSTOCK"}),Object(A.jsx)("option",{value:"AVAILABLE",children:"AVAILABLE"})]})]})]}),Object(A.jsxs)(v.a,{children:[Object(A.jsx)(m.a,{color:"primary",onClick:function(t){"new"===e.state.action?e.addPackageSale():e.updatePackageSale()},disabled:this.state.isLoading,children:"Save"})," ",Object(A.jsx)(m.a,{color:"secondary",onClick:function(t){return e.toggleModal("new")},children:"Cancel"})]})]}),Object(A.jsxs)(g.a,{isOpen:this.state.modalDelete,toggle:function(t){return e.setState({modalDelete:!e.state.modalDelete,delete:null})},className:this.props.className,children:[Object(A.jsx)(x.a,{toggle:function(t){return e.setState({modalDelete:!e.state.modalDelete,delete:null})},children:"Delete"}),Object(A.jsx)(f.a,{children:Object(A.jsx)("label",{htmlFor:"tag",children:'Do you want to delete user "'.concat(this.state.delete?this.state.delete.Email:"",'" ?')})}),Object(A.jsxs)(v.a,{children:[Object(A.jsx)(m.a,{color:"primary",onClick:function(t){return e.delete()},disabled:this.state.isLoading,children:"Delete"})," ",Object(A.jsx)(m.a,{color:"secondary",onClick:function(t){return e.setState({modalDelete:!e.state.modalDelete,delete:null})},children:"Cancel"})]})]})]})}}]),s}(h.Component),E={datePicker:{marginBottom:20},flexLabel:{width:100},flexOption:{width:200,margin:"1px"},a:{textDecoration:"none"},floatRight:{float:"right",marginTop:"3px"},spinner:{width:"30px"},center:{textAlign:"center"},tbody:{height:"380px",overflowY:"auto"},wa10:{width:"5%",float:"left",height:"80px"},wh16:{width:"17%",float:"left",height:"80px"},wh15:{width:"20%",float:"left",height:"80px"},w5:{width:"20%",float:"left",height:"80px"},row:{float:"left",width:"100%"},success:{color:"green"},danger:{color:"red"},mgl5:{marginLeft:"5px"},tags:{float:"right",marginRight:"5px"},searchInput:{width:"200px",display:"inline-block",margin:"1px"},userActive:{color:"green"},userPending:{color:"red"},nagemonNameCol:{width:"328px"},image:{width:"100px",height:"100px",borderRadius:"99999px"}};t.default=_}.call(this,a(114))},661:function(e,t,a){"use strict";var n=a(12),s=a(29),i=a(658),c=a(35),r=a(2),l=a.n(r),o=a(64),d=a.n(o),h=a(648),u=a.n(h),p=a(650),j={active:d.a.bool,"aria-label":d.a.string,block:d.a.bool,color:d.a.string,disabled:d.a.bool,outline:d.a.bool,tag:p.n,innerRef:d.a.oneOfType([d.a.object,d.a.func,d.a.string]),onClick:d.a.func,size:d.a.string,children:d.a.node,className:d.a.string,cssModule:d.a.object,close:d.a.bool},m=function(e){function t(t){var a;return(a=e.call(this,t)||this).onClick=a.onClick.bind(Object(i.a)(a)),a}Object(c.a)(t,e);var a=t.prototype;return a.onClick=function(e){if(!this.props.disabled)return this.props.onClick?this.props.onClick(e):void 0;e.preventDefault()},a.render=function(){var e=this.props,t=e.active,a=e["aria-label"],i=e.block,c=e.className,r=e.close,o=e.cssModule,d=e.color,h=e.outline,j=e.size,m=e.tag,b=e.innerRef,g=Object(s.a)(e,["active","aria-label","block","className","close","cssModule","color","outline","size","tag","innerRef"]);r&&"undefined"===typeof g.children&&(g.children=l.a.createElement("span",{"aria-hidden":!0},"\xd7"));var x="btn"+(h?"-outline":"")+"-"+d,f=Object(p.j)(u()(c,{close:r},r||"btn",r||x,!!j&&"btn-"+j,!!i&&"btn-block",{active:t,disabled:this.props.disabled}),o);g.href&&"button"===m&&(m="a");var v=r?"Close":null;return l.a.createElement(m,Object(n.a)({type:"button"===m&&g.onClick?"button":void 0},g,{className:f,ref:b,onClick:this.onClick,"aria-label":a||v}))},t}(l.a.Component);m.propTypes=j,m.defaultProps={color:"secondary",tag:"button"},t.a=m}}]);
//# sourceMappingURL=60.cb957570.chunk.js.map
