(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[57],{1298:function(e,t,a){"use strict";a.r(t);var n,s=a(654),i=a(165),r=a(113),c=a.n(r),l=a(641),o=a(166),d=a(167),u=a(169),h=a(168),p=a(2),j=a(645),m=a(1259),g=a(1260),b=a(1261),f=a(1262),x=a(1264),O=a(1340),v=a(1267),y=a(1268),S=a(1269),w=a(640),k=a(667),L=a(1336),N=(a(646),a(644)),C=a(652),D=a(643),T=a.n(D),A=a(653),U=a(655),R=a.n(U),_=a(17),P=new Headers,E=localStorage.getItem("auth");P.append("Authorization","Bearer "+E),P.append("Content-Type","application/json");Object(k.a)((function(e){return{root:{"& > *":{marginTop:e.spacing(2)}}}}));var I=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).getData=Object(l.a)(c.a.mark((function e(){var t,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.setState({isLoading:!0}),e.next=3,T()({baseURL:N.a.BASE_URL,url:N.a.PLUGIN_LIST_ROLE,method:"POST",headers:n.state.token});case 3:t=e.sent,n.pagination(t.data.data),n.setState({dataApi:t.data.data}),a=0,t.data.data.map((function(e){"Actived"==e.Status&&(a+=1)})),n.setState({isLoading:!1,totalActive:a});case 9:case"end":return e.stop()}}),e)}))),n.openDelete=function(e){n.setState({modalDelete:!n.state.modalDelete,delete:e})},n.state={data:[],key:"",activePage:1,page:1,itemsCount:0,limit:20,totalActive:0,modalCom:!1,viewingUser:{},communities:[],updated:"",dataApi:[],hidden:!1,action:"new",Name:"",Type:"",Status:"",modalDelete:!1,delete:null,arrPagination:[],indexPage:0,token:{Authorization:"Bearer ".concat(localStorage.getItem("token"))},isLoading:!1},n}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(l.a)(c.a.mark((function e(){var t,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(this.getData(),console.log(""),t=JSON.parse(localStorage.getItem("url")),a=0;a<t.length;a++)t[a].url==window.location.hash&&1==t[a].isHidden&&(window.location.href="#/");case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"pagination",value:function(e){var t,a,n,s=[];for(t=0,a=e.length;t<a;t+=5)n=e.slice(t,t+5),s.push(n);0==s.length?this.setState({hidden:!1}):this.setState({hidden:!0}),this.setState({arrPagination:s,data:s[0]})}},{key:"searchKey",value:function(e){if(this.setState({key:e}),""!=e){var t=[];this.state.dataApi.map((function(a){a.Name.toLocaleUpperCase().includes(e.toLocaleUpperCase())&&t.push(a)}));var a=0;t.map((function(e){"Actived"==e.Status&&(a+=1)})),this.setState({data:t,totalActive:a})}else{var n=0;this.state.dataApi.map((function(e){"Actived"==e.Status&&(n+=1)})),this.setState({data:this.state.dataApi,totalActive:n})}}},{key:"toggleModal",value:function(){var e=Object(l.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:"new"==t&&this.setState({modalCom:!this.state.modalCom,action:t,Type:"",Name:""});case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"onChange",value:function(e,t){this.setState(Object(i.a)({},e,t))}},{key:"addRoles",value:function(){var e=Object(l.a)(c.a.mark((function e(){var t,a,n,s,i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.state,a=t.Name,n=t.Type,null!=a&&""!=a){e.next=4;break}return alert("Vui lòng nhập đầy đủ trường dữ liệu !!!"),e.abrupt("return");case 4:return s={Name:a,Type:n},this.setState({isLoading:!0}),e.next=8,T()({baseURL:N.a.BASE_URL,url:N.a.PLUGIN_ADD_ROLE,method:"PUT",data:s});case 8:1==(i=e.sent).data.is_success?(this.getData(),this.setState({modalCom:!this.state.modalCom})):(alert(i.data.message),this.setState({isLoading:!1}));case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"openUpdate",value:function(){var e=Object(l.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.setState({modalCom:!this.state.modalCom,action:"update",Name:t.Name,id:t._id,Status:t.Status});case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"updateUser",value:function(){var e=Object(l.a)(c.a.mark((function e(){var t,a,n,s,i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.state,a=t.Name,n=t.Status,null!=a&&""!=a){e.next=4;break}return alert("Vui lòng nhập đầy đủ trường dữ liệu !!!"),e.abrupt("return");case 4:return s={Name:a,id:this.state.id,Status:n},this.setState({isLoading:!0}),e.next=8,T()({baseURL:N.a.BASE_URL,url:N.a.PLUGIN_UPDATE_ROLE,method:"POST",data:s});case 8:1==(i=e.sent).data.is_success?(this.getData(),this.setState({modalCom:!this.state.modalCom})):(alert(i.data.message),this.setState({isLoading:!1}));case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"delete",value:function(){var e=Object(l.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({isLoading:!0}),e.next=3,T()({baseURL:N.a.BASE_URL,url:N.a.PLUGIN_DELETE_ROLE,method:"DELETE",data:{id:this.state.delete._id}});case 3:1==(t=e.sent).data.is_success?(this.getData(),this.setState({modalDelete:!this.state.modalDelete,delete:null})):(alert(t.data.message),this.setState({isLoading:!1}));case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"inputChange",value:function(e){this.setState(Object(i.a)({},e.target.name,e.target.value))}},{key:"goSearch",value:function(){this.getUsers()}},{key:"getBadge",value:function(e){switch(e){case"Actived":return"success";case"Inactive":return"secondary";case"Locked":return"warning";case"Deactived":return"danger";default:return"primary"}}},{key:"render",value:function(){var e=this,t=this.state,a=t.data,n=t.action,s=t.arrPagination;return this.state.isLoading?Object(_.jsx)("div",{className:"sweet-loading",children:Object(_.jsx)(R.a,{css:B,size:50,color:"#123abc",loading:this.state.isLoading,speedMultiplier:1.5})}):Object(_.jsxs)("div",{className:"animated fadeIn",children:[Object(_.jsx)(m.a,{children:Object(_.jsxs)(g.a,{children:[Object(_.jsx)("p",{style:z.success,children:this.state.updated}),Object(_.jsx)("p",{style:z.danger,children:this.state.deleted}),Object(_.jsxs)(b.a,{children:[Object(_.jsxs)(f.a,{children:[Object(_.jsx)("i",{className:"fa fa-align-justify"})," Danh s\xe1ch quy\u1ec1n",Object(_.jsx)("div",{style:z.tags,children:Object(_.jsx)(w.d,{outline:!0,color:"primary",style:z.floatRight,size:"sm",onClick:function(){var t=Object(l.a)(c.a.mark((function t(a){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.toggleModal("new");case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),children:"Th\xeam quy\u1ec1n"})})]}),Object(_.jsx)(x.a,{children:Object(_.jsxs)("table",{ble:!0,className:"table table-hover table-outline mb-0 d-none d-sm-table",children:[Object(_.jsx)("thead",{className:"thead-light",children:Object(_.jsxs)("tr",{children:[Object(_.jsx)("th",{className:"text-center",children:"STT."}),Object(_.jsx)("th",{className:"text-center",children:"T\xean quy\u1ec1n"}),Object(_.jsx)("th",{className:"text-center",children:"Tr\u1ea1ng th\xe1i"}),Object(_.jsx)("th",{className:"text-center",children:"Ng\xe0y t\u1ea1o"}),Object(_.jsx)("th",{className:"text-center",children:"#"})]})}),Object(_.jsxs)("tbody",{children:[Object(_.jsx)("td",{colSpan:"10",hidden:this.state.hidden,className:"text-center",children:"Kh\xf4ng t\xecm th\u1ea5y d\u1eef li\u1ec7u"}),void 0!=a?a.map((function(t,a){return Object(_.jsxs)("tr",{children:[Object(_.jsx)("td",{className:"text-center",children:a+1}),Object(_.jsx)("td",{className:"text-center",children:t.Name}),Object(_.jsx)("td",{className:"text-center",children:Object(_.jsx)(w.a,{color:e.getBadge(t.Status),children:t.Status})}),Object(_.jsx)("td",{className:"text-center",children:new Date(t.Create_Date).toLocaleDateString()+" "+new Date(t.Create_Date).toLocaleTimeString()}),Object(_.jsxs)("td",{className:"text-center",children:[Object(_.jsx)(w.d,{style:z.mgl5,outline:!0,color:"primary",size:"sm",onClick:function(){var a=Object(l.a)(c.a.mark((function a(n){return c.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.openUpdate(t);case 2:return a.abrupt("return",a.sent);case 3:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}(),children:Object(_.jsx)(j.a,{name:"cilPencil"})})," ",Object(_.jsx)(w.d,{outline:!0,color:"danger",size:"sm",onClick:function(a){e.openDelete(t)},children:Object(_.jsx)(j.a,{name:"cilTrash"})})]})]},a)})):""]})]})})]}),Object(_.jsx)("div",{style:{float:"right"},children:Object(_.jsx)(L.a,{count:s.length,color:"primary",onChange:function(t,a){e.setState({data:s[a-1],indexPage:a-1})}})})]})}),Object(_.jsxs)(O.a,{isOpen:this.state.modalCom,className:this.props.className,children:[Object(_.jsx)(v.a,{children:"new"==this.state.action?"T\u1ea1o m\u1edbi":"C\u1eadp nh\u1eadt"}),Object(_.jsxs)(y.a,{children:[Object(_.jsx)(C.a,{field:"Name",label:"Name",value:this.state.Name,placeholder:"Name",onChange:function(t){return e.onChange("Name",t.target.value)}}),Object(_.jsx)(C.a,{field:"Type",label:"Lo\u1ea1i",value:this.state.Type,placeholder:"Type",onChange:function(t){return e.onChange("Type",t.target.value)}}),"new"==n?"":Object(_.jsxs)("div",{children:[Object(_.jsx)("label",{style:z.flexLabel,htmlFor:"tag",children:"Status:"}),Object(_.jsxs)("select",{style:z.flexOption,name:"Status",onChange:function(t){return e.onChange("Status",t.target.value)},children:[Object(_.jsx)("option",{value:this.state.Status,children:""==this.state.Status?" - - - - - - - - - - ":this.state.Status}),Object(_.jsx)("option",{value:"Actived",children:"Actived"}),Object(_.jsx)("option",{value:"Locked",children:"Locked"}),Object(_.jsx)("option",{value:"Deactived",children:"Deactived"})]})]})]}),Object(_.jsxs)(S.a,{children:[Object(_.jsx)(w.d,{color:"primary",onClick:function(t){"new"===e.state.action?e.addRoles():e.updateUser()},disabled:this.state.isLoading,children:"Save"})," ",Object(_.jsx)(w.d,{color:"secondary",onClick:function(t){return e.toggleModal("new")},children:"Cancel"})]})]}),Object(_.jsxs)(O.a,{isOpen:this.state.modalDelete,toggle:function(t){return e.setState({modalDelete:!e.state.modalDelete,delete:null})},className:this.props.className,children:[Object(_.jsx)(v.a,{toggle:function(t){return e.setState({modalDelete:!e.state.modalDelete,delete:null})},children:"Delete"}),Object(_.jsx)(y.a,{children:Object(_.jsx)("label",{htmlFor:"tag",children:"X\xe1c nh\u1eadn x\xf3a !!!"})}),Object(_.jsxs)(S.a,{children:[Object(_.jsx)(w.d,{color:"primary",onClick:function(t){return e.delete()},disabled:this.state.isLoading,children:"Delete"})," ",Object(_.jsx)(w.d,{color:"secondary",onClick:function(t){return e.setState({modalDelete:!e.state.modalDelete,delete:null})},children:"Cancel"})]})]})]})}}]),a}(p.Component),B=Object(A.css)(n||(n=Object(s.a)(["\n  display: block;\n  margin: 0 auto;\n  border-color: red;\n"]))),z={pagination:{marginRight:"5px"},flexLabel:{width:100},flexOption:{width:300},a:{textDecoration:"none"},floatRight:{float:"right",marginTop:"3px"},spinner:{width:"30px"},center:{textAlign:"center"},tbody:{height:"380px",overflowY:"auto"},wh25:{width:"25%",float:"left",height:"80px"},w5:{width:"15%",float:"left",height:"80px"},wa10:{width:"5%",float:"left",height:"80px"},row:{float:"left",width:"100%"},success:{color:"green"},danger:{color:"red"},mgl5:{marginLeft:"5px"},tags:{float:"right",marginRight:"5px",width:"250px"},searchInput:{width:"190px",display:"inline-block"},userActive:{color:"green"},userPending:{color:"red"},nagemonNameCol:{width:"328px"},image:{width:"100px",height:"100px",borderRadius:"99999px"}};t.default=I},667:function(e,t,a){"use strict";var n=a(12),s=a(1337),i=a(663);t.a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(s.a)(e,Object(n.a)({defaultTheme:i.a},t))}}}]);
//# sourceMappingURL=57.014e96d2.chunk.js.map
