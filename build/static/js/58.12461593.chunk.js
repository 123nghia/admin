(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[58],{1279:function(e,t,a){"use strict";a.r(t),function(e){var n=a(169),s=a(113),i=a.n(s),r=a(641),c=a(165),l=a(166),o=a(168),d=a(167),u=a(2),h=a(1258),p=a(1259),m=a(1260),j=a(1261),b=a(1262),x=a(660),g=a(1263),f=a(1336),y=a(1266),v=a(1267),O=a(1268),S=a(640),k=(a(646),a(662),a(644)),C=(a(652),a(643)),D=a.n(C),L=a(17),w=new Headers,T=localStorage.getItem("auth");w.append("Authorization","Bearer "+T),w.append("Content-Type","application/json");var A=function(t){Object(o.a)(s,t);var a=Object(d.a)(s);function s(e){var t;return Object(c.a)(this,s),(t=a.call(this,e)).getData=Object(r.a)(i.a.mark((function e(){var a,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.setState({isLoading:!0}),e.next=3,D()({baseURL:k.a.BASE_URL,url:k.a.LIST_KEY,method:"POST",headers:t.state.token});case 3:a=e.sent,t.pagination(a.data.data),t.setState({dataApi:a.data.data}),n=0,a.data.data.map((function(e){"Actived"==e.Status&&(n+=1)})),t.setState({isLoading:!1,totalActive:n});case 9:case"end":return e.stop()}}),e)}))),t.openDelete=function(e){t.setState({modalDelete:!t.state.modalDelete,delete:e})},t.state={data:[],key:"",keyName:"",keyCodeCompany:"",keyTypeKey:"",keyActive:"",keyEndDate:"",keyStatus:"",keyValue:"",activePage:1,page:1,itemsCount:0,limit:20,totalActive:0,modalCom:!1,viewingUser:{},communities:[],updated:"",dataApi:[],action:"new",Name:"",Company_Id:"",Type_Key:"",Start_Date:new Date,End_Date:new Date,Status:"",Value:"",modalDelete:!1,delete:null,dataCompany:[],currentCompany:"",dataTypeKey:[],currentTypeKey:"",dataHardWare:[],currentHardWare:"",arrPagination:[],indexPage:0,hidden:!0,token:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}},t}return Object(l.a)(s,[{key:"componentDidMount",value:function(){var e=Object(r.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.getData(),e.next=3,this.getHardWData_all();case 3:for(t=JSON.parse(localStorage.getItem("url")),a=0;a<t.length;a++)"#"+t[a].to==window.location.hash&&1==t[a].hidden&&(window.location.href="#/");case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"pagination",value:function(e){var t,a,n,s=[];for(t=0,a=e.length;t<a;t+=5)n=e.slice(t,t+5),s.push(n);0==s.length?this.setState({hidden:!1}):this.setState({hidden:!0}),this.setState({arrPagination:s,data:s[this.state.indexPage]})}},{key:"getBadge",value:function(e){switch(e){case"INSTOCK":return"success";case"DISABLE":return"danger";default:return"primary"}}},{key:"getHardWData_all",value:function(){var e=Object(r.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D()({baseURL:k.a.BASE_URL,url:k.a.LIST_HARDWARE,method:"POST",headers:this.state.token});case 2:t=e.sent,this.setState({dataHardWare:t.data.data});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getHardWData",value:function(){var e=Object(r.a)(i.a.mark((function e(t){var a,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D()({baseURL:k.a.BASE_URL,url:k.a.LIST_HARDWARE,method:"POST",data:{condition:{Status:"INSTOCK"}},headers:this.state.token});case 2:if(a=e.sent,""==t&&void 0==t){e.next=8;break}return e.next=6,D()({baseURL:k.a.BASE_URL,url:k.a.LIST_HARDWARE_WITH_ID+t,method:"POST",headers:this.state.token});case 6:null==(n=e.sent).data.data&&void 0==n.data.data||this.setState({currentHardWare:n.data.data.Name});case 8:this.setState({dataHardWare:a.data.data});case 9:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"searchKey",value:function(){var e=this.state,t=e.indexPage,a=e.key,n=e.keyStatus;if(""!=a||""!=n){var s=[];this.state.dataApi.map((function(e){(e.Name.toLocaleUpperCase().includes(a.toLocaleUpperCase())||e.Value.toLocaleUpperCase().includes(a.toLocaleUpperCase()))&&e.Status.toLocaleUpperCase().includes(n.toLocaleUpperCase())&&s.push(e)}));var i=0;s.map((function(e){"Actived"==e.Status&&(i+=1)})),this.setState({data:s,totalActive:i})}else{var r=0;this.state.dataApi.map((function(e){"Actived"==e.Status&&(r+=1)})),this.setState({data:this.state.arrPagination[t],totalActive:r})}}},{key:"actionSearch",value:function(e,t){var a=this;this.setState(Object(n.a)({},t,e.target.value),(function(){a.searchKey()}))}},{key:"resetSearch",value:function(){var e=this;this.setState({key:"",keyStatus:""},(function(){e.searchKey()}))}},{key:"onChange",value:function(e,t){this.setState(Object(n.a)({},e,t))}},{key:"openUpdate",value:function(){var e=Object(r.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getCompanyData(t.Company_Id);case 2:return e.next=4,this.getTypeKeyData(t.Type_Key);case 4:return e.next=6,this.getHardWData(t.Value);case 6:this.setState({modalCom:!this.state.modalCom,action:"update",id:t._id,Status:t.Status});case 7:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"updateUser",value:function(){var e=Object(r.a)(i.a.mark((function e(){var t,a,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.state.Status,a={id:this.state.id,Status:t},this.setState({isLoading:!0}),e.next=5,D()({baseURL:k.a.BASE_URL,url:k.a.UPDATE_KEY,method:"POST",data:a});case 5:1==(n=e.sent).data.is_success?(this.getData(),this.setState({modalCom:!this.state.modalCom})):(alert(n.data.message),this.setState({isLoading:!1}));case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"delete",value:function(){var e=Object(r.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({isLoading:!0}),e.next=3,D()({baseURL:k.a.BASE_URL,url:k.a.DELETE_KEY,method:"DELETE",data:{id:this.state.delete._id}});case 3:1==(t=e.sent).data.is_success?(this.getData(),this.setState({modalDelete:!this.state.modalDelete,delete:null})):(alert(t.data.message),this.setState({isLoading:!1}));case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getUsers",value:function(){var t=this,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,n=this.state.limit,s=this.state.key||"",i={method:"GET",headers:w};fetch(e.BASE_URL+"/admin/users?key="+s+"&page="+a+"&limit="+n,i).then((function(e){e.json().then((function(e){t.setState({data:e.data,itemsCount:e.total,activePage:a,totalActive:e.totalActive,updated:""})}))})).catch(console.log)}},{key:"getCompanyData",value:function(){var e=Object(r.a)(i.a.mark((function e(t){var a,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D()({baseURL:k.a.BASE_URL,url:k.a.LIST_COMPANY,method:"POST"});case 2:if(a=e.sent,""==t&&void 0==t){e.next=8;break}return e.next=6,D()({baseURL:k.a.BASE_URL,url:k.a.LIST_COMPANY_WITH_ID+t,method:"POST"});case 6:null==(n=e.sent).data.data&&void 0==n.data.data||this.setState({currentCompany:n.data.data.Name});case 8:this.setState({dataCompany:a.data.data});case 9:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getTypeKeyData",value:function(){var e=Object(r.a)(i.a.mark((function e(t){var a,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D()({baseURL:k.a.BASE_URL,url:k.a.LIST_TYPEKEY,method:"GET"});case 2:if(a=e.sent,""==t&&void 0==t){e.next=8;break}return e.next=6,D()({baseURL:k.a.BASE_URL,url:k.a.LIST_TYPEKEY_WITH_ID+t,method:"GET"});case 6:null==(n=e.sent).data.data&&void 0==n.data.data||this.setState({currentTypeKey:n.data.data.Name});case 8:this.setState({dataTypeKey:a.data.data});case 9:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"inputChange",value:function(e){this.setState(Object(n.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){var e=this,t=this.state,a=t.data,n=t.key,s=(t.viewingUser,t.communities,t.dataCompany,t.hidden),c=(t.currentCompany,t.dataTypeKey,t.currentTypeKey,t.action),l=t.arrPagination,o=t.indexPage;t.dataHardWare,t.currentHardWare,t.keyName,t.keyCodeCompany,t.keyTypeKey,t.keyActive,t.keyEndDate,t.keyStatus,t.keyValue;return this.state.isLoading?Object(L.jsx)("div",{id:"page-loading",children:Object(L.jsxs)("div",{className:"three-balls",children:[Object(L.jsx)("div",{className:"ball ball1"}),Object(L.jsx)("div",{className:"ball ball2"}),Object(L.jsx)("div",{className:"ball ball3"})]})}):Object(L.jsxs)("div",{className:"animated fadeIn",children:[Object(L.jsx)(h.a,{children:Object(L.jsxs)(p.a,{children:[Object(L.jsx)("p",{style:E.success,children:this.state.updated}),Object(L.jsx)("p",{style:E.danger,children:this.state.deleted}),Object(L.jsxs)(m.a,{children:[Object(L.jsxs)(j.a,{children:["Qu\u1ea3n l\xfd kh\xf3a (Page: ",this.state.indexPage+1,")",Object(L.jsx)("div",{style:E.tags,children:Object(L.jsxs)(S.W,{children:[Object(L.jsx)(S.p,{sm:"6",lg:"12",children:Object(L.jsxs)(S.W,{children:[Object(L.jsx)(S.p,{sm:"6",lg:"4",children:Object(L.jsx)("div",{children:Object(L.jsx)(b.a,{style:E.searchInput,onChange:function(t){e.actionSearch(t,"key")},name:"key",value:n,placeholder:"T\u1eeb kh\xf3a"})})}),Object(L.jsx)(S.p,{sm:"6",lg:"4",children:Object(L.jsxs)(S.X,{style:E.flexOption,onChange:function(t){e.actionSearch(t,"keyStatus")},custom:!0,children:[Object(L.jsx)("option",{value:"",children:"-----"}),["INSTOCK","AVAILABLE","ACTIVED","DISABLE"].map((function(e,t){return Object(L.jsx)("option",{value:e,children:e})}))]})}),Object(L.jsx)(S.p,{sm:"6",lg:"4",children:Object(L.jsx)(x.a,{color:"primary",style:{width:"100%",marginTop:5},size:"sm",onClick:function(t){e.resetSearch()},children:"L\xe0m m\u1edbi t\xecm ki\u1ebfm"})})]})}),Object(L.jsx)(S.p,{sm:"6",lg:"12",children:Object(L.jsx)(x.a,{outline:!0,color:"primary",style:E.floatRight,size:"sm",onClick:function(t){return e.toggleModal("new")},children:"Th\xeam m\u1edbi"})})]})})]}),Object(L.jsx)(g.a,{children:Object(L.jsxs)("table",{ble:!0,className:"table table-hover table-outline mb-0 d-none d-sm-table",children:[Object(L.jsx)("thead",{className:"thead-light",children:Object(L.jsxs)("tr",{children:[Object(L.jsx)("th",{className:"text-center",children:"STT."}),Object(L.jsx)("th",{className:"text-center",children:"T\xean key"}),Object(L.jsx)("th",{className:"text-center",children:"Ng\xe0y k\xedch ho\u1ea1t"}),Object(L.jsx)("th",{className:"text-center",children:"Ng\xe0y h\u1ebft h\u1ea1n"}),Object(L.jsx)("th",{className:"text-center",children:"Gi\xe1 tr\u1ecb"}),Object(L.jsx)("th",{className:"text-center",children:"Tr\u1ea1ng th\xe1i"}),Object(L.jsx)("th",{className:"text-center",children:"#"})]})}),Object(L.jsxs)("tbody",{children:[Object(L.jsx)("td",{colSpan:"10",hidden:s,className:"text-center",children:"Kh\xf4ng t\xecm th\u1ea5y d\u1eef li\u1ec7u"}),void 0!=a?a.map((function(t,a){return Object(L.jsxs)("tr",{children:[Object(L.jsx)("td",{className:"text-center",children:a+1}),Object(L.jsx)("td",{className:"text-center",children:t.Name}),Object(L.jsx)("td",{className:"text-center",children:null!=t.Start_Date||void 0!=t.Start_Date?new Date(t.Start_Date).toLocaleDateString()+" "+new Date(t.Start_Date).toLocaleTimeString():""}),Object(L.jsx)("td",{className:"text-center",children:null!=t.End_Date||void 0!=t.End_Date?new Date(t.End_Date).toLocaleDateString()+" "+new Date(t.End_Date).toLocaleTimeString():""}),Object(L.jsx)("td",{className:"text-center",children:t.Value}),Object(L.jsx)("td",{className:"text-center",children:Object(L.jsx)(S.a,{color:e.getBadge(t.Status),children:t.Status})}),Object(L.jsxs)("td",{className:"text-center",children:[Object(L.jsx)(x.a,{style:E.mgl5,outline:!0,color:"primary",size:"sm",onClick:function(){var a=Object(r.a)(i.a.mark((function a(n){return i.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.openUpdate(t);case 2:return a.abrupt("return",a.sent);case 3:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}(),children:"Update"})," ",Object(L.jsx)(x.a,{outline:!0,color:"danger",size:"sm",onClick:function(a){e.openDelete(t)},children:"Delete"})]})]},a)})):""]})]})})]}),1==l.length?"":Object(L.jsx)("div",{style:{float:"right",marginRight:"10px",padding:"10px"},children:Object(L.jsx)("tr",{style:E.row,children:l.map((function(t,a){return Object(L.jsx)("td",{children:Object(L.jsx)(x.a,{style:E.pagination,color:a==o?"primary":"danger",onClick:function(t){e.setState({data:l[a],indexPage:a})},children:a+1})})}))})})]})}),Object(L.jsxs)(f.a,{isOpen:this.state.modalCom,className:this.props.className,children:[Object(L.jsx)(y.a,{children:"new"==this.state.action?"T\u1ea1o m\u1edbi":"C\u1eadp nh\u1eadt"}),Object(L.jsx)(v.a,{children:"new"==c?"":Object(L.jsxs)("div",{children:[Object(L.jsx)("label",{style:E.flexLabel,htmlFor:"tag",children:"Status:"}),Object(L.jsxs)("select",{style:E.flexOption,name:"Status",onChange:function(t){return e.onChange("Status",t.target.value)},children:[Object(L.jsx)("option",{value:this.state.Status,children:""==this.state.Status?" - - - - - - - - - - ":this.state.Status}),Object(L.jsx)("option",{value:"INSTOCK",children:"INSTOCK"}),Object(L.jsx)("option",{value:"AVAILABLE",children:"AVAILABLE"}),Object(L.jsx)("option",{value:"ACTIVED",children:"ACTIVED"}),Object(L.jsx)("option",{value:"DISABLE",children:"DISABLE"})]})]})}),Object(L.jsxs)(O.a,{children:[Object(L.jsx)(x.a,{color:"primary",onClick:function(t){e.state.action,e.updateUser()},disabled:this.state.isLoading,children:"Save"})," ",Object(L.jsx)(x.a,{color:"secondary",onClick:function(t){return e.setState({modalCom:!e.state.modalCom})},children:"Cancel"})]})]}),Object(L.jsxs)(f.a,{isOpen:this.state.modalDelete,toggle:function(t){return e.setState({modalDelete:!e.state.modalDelete,delete:null})},className:this.props.className,children:[Object(L.jsx)(y.a,{toggle:function(t){return e.setState({modalDelete:!e.state.modalDelete,delete:null})},children:"Delete"}),Object(L.jsx)(v.a,{children:Object(L.jsx)("label",{htmlFor:"tag",children:'Do you want to delete user "'.concat(this.state.delete?this.state.delete.Email:"",'" ?')})}),Object(L.jsxs)(O.a,{children:[Object(L.jsx)(x.a,{color:"primary",onClick:function(t){return e.delete()},disabled:this.state.isLoading,children:"Delete"})," ",Object(L.jsx)(x.a,{color:"secondary",onClick:function(t){return e.setState({modalDelete:!e.state.modalDelete,delete:null})},children:"Cancel"})]})]})]})}}]),s}(u.Component),E=Object(n.a)({datePicker:{marginBottom:20},wa10:{width:"5%",float:"left",height:"80px"},pagination:{marginRight:"5px"},flexLabel:{width:100},flexOption:{width:200,margin:"1px"},a:{textDecoration:"none"},floatRight:{float:"right",marginTop:"3px"},spinner:{width:"30px"},center:{textAlign:"center"},tbody:{height:"380px",overflowY:"auto"},wh12:{width:"10%",float:"left",height:"80px"},wh15:{width:"15%",float:"left",height:"80px"},w5:{width:"12%",float:"left",height:"80px"},row:{float:"left",width:"100%"},success:{color:"green"},danger:{color:"red"},mgl5:{marginLeft:"5px"},tags:{float:"right",marginRight:"5px"},searchInput:{width:"200px",display:"inline-block",margin:"1px"},userActive:{color:"green"},userPending:{color:"red"},nagemonNameCol:{width:"328px"},image:{width:"100px",height:"100px",borderRadius:"99999px"}},"mgl5",{marginBottom:"0px"});t.default=A}.call(this,a(114))},660:function(e,t,a){"use strict";var n=a(12),s=a(29),i=a(657),r=a(35),c=a(2),l=a.n(c),o=a(64),d=a.n(o),u=a(648),h=a.n(u),p=a(650),m={active:d.a.bool,"aria-label":d.a.string,block:d.a.bool,color:d.a.string,disabled:d.a.bool,outline:d.a.bool,tag:p.n,innerRef:d.a.oneOfType([d.a.object,d.a.func,d.a.string]),onClick:d.a.func,size:d.a.string,children:d.a.node,className:d.a.string,cssModule:d.a.object,close:d.a.bool},j=function(e){function t(t){var a;return(a=e.call(this,t)||this).onClick=a.onClick.bind(Object(i.a)(a)),a}Object(r.a)(t,e);var a=t.prototype;return a.onClick=function(e){if(!this.props.disabled)return this.props.onClick?this.props.onClick(e):void 0;e.preventDefault()},a.render=function(){var e=this.props,t=e.active,a=e["aria-label"],i=e.block,r=e.className,c=e.close,o=e.cssModule,d=e.color,u=e.outline,m=e.size,j=e.tag,b=e.innerRef,x=Object(s.a)(e,["active","aria-label","block","className","close","cssModule","color","outline","size","tag","innerRef"]);c&&"undefined"===typeof x.children&&(x.children=l.a.createElement("span",{"aria-hidden":!0},"\xd7"));var g="btn"+(u?"-outline":"")+"-"+d,f=Object(p.j)(h()(r,{close:c},c||"btn",c||g,!!m&&"btn-"+m,!!i&&"btn-block",{active:t,disabled:this.props.disabled}),o);x.href&&"button"===j&&(j="a");var y=c?"Close":null;return l.a.createElement(j,Object(n.a)({type:"button"===j&&x.onClick?"button":void 0},x,{className:f,ref:b,onClick:this.onClick,"aria-label":a||y}))},t}(l.a.Component);j.propTypes=m,j.defaultProps={color:"secondary",tag:"button"},t.a=j}}]);
//# sourceMappingURL=58.12461593.chunk.js.map