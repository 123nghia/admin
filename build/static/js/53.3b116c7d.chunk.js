(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[53],{1307:function(e,t,a){"use strict";a.r(t);var n,s=a(654),i=a(165),r=a(113),c=a.n(r),l=a(641),o=a(166),h=a(167),d=a(169),u=a(168),p=a(2),m=(a(645),a(1259)),j=a(1260),g=a(1261),x=a(1262),b=a(1263),f=a(1264),O=a(1340),y=a(1267),S=a(1268),v=a(1269),C=a(640),N=a(667),w=a(1336),k=(a(646),a(644)),T=a(652),L=a(643),_=a.n(L),U=a(653),D=a(655),P=a.n(D),R=a(17),A=new Headers,E=localStorage.getItem("auth");A.append("Authorization","Bearer "+E),A.append("Content-Type","application/json");Object(N.a)((function(e){return{root:{"& > *":{marginTop:e.spacing(2)}}}}));var F=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).getData=Object(l.a)(c.a.mark((function e(){var t,a,s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.setState({isLoading:!0}),e.next=3,_()({baseURL:k.a.BASE_URL,url:k.a.CUS_RES_LIST,method:"POST"});case 3:t=e.sent,a=t.data.data,t.data.is_success&&(n.pagination(a),n.setState({dataApi:a}),s=0,a.map((function(e){"Actived"==e.Status&&(s+=1)})),n.setState({isLoading:!1,totalActive:s}));case 6:case"end":return e.stop()}}),e)}))),n.getDataForCompany=Object(l.a)(c.a.mark((function e(){var t,a,s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.setState({isLoading:!0}),e.next=3,_()({baseURL:k.a.BASE_URL,url:k.a.CUS_RES_LIST_COMPANY,method:"POST",data:{Company_Id:JSON.parse(n.state.company_id).company_id}});case 3:t=e.sent,a=t.data.data,t.data.is_success&&(n.pagination(a),n.setState({dataApi:a}),s=0,a.map((function(e){"Actived"==e.Status&&(s+=1)})),n.setState({isLoading:!1,totalActive:s}));case 6:case"end":return e.stop()}}),e)}))),n.openDelete=function(e){n.setState({modalDelete:!n.state.modalDelete,delete:e})},n.state={data:[],key:"",keyStatus:"",activePage:1,page:1,itemsCount:0,limit:20,totalActive:0,modalCom:!1,viewingUser:{},communities:[],updated:"",dataApi:[],hidden:!1,action:"new",UserName:"",FullName:"",Phone:"",Company_Id:"",Type:"0",Status:"",modalDelete:!1,delete:null,arrPagination:[],indexPage:0,token:{Authorization:"Bearer ".concat(localStorage.getItem("token"))},company_id:localStorage.getItem("user"),isLoading:!1,arrTypeRequest:[],type:localStorage.getItem("type")},n}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var e=Object(l.a)(c.a.mark((function e(){var t,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for("0"==this.state.type||"1"==this.state.type?this.getData():this.getDataForCompany(),this.getTypeRequestData(),t=JSON.parse(localStorage.getItem("url")),a=0;a<t.length;a++)t[a].url==window.location.hash&&1==t[a].isHidden&&(window.location.href="#/");case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getTypeRequestData",value:function(){var e=Object(l.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_()({baseURL:k.a.BASE_URL,url:k.a.TYPE_REQUEST_LIST,method:"POST"});case 2:(t=e.sent).data.is_success&&this.setState({arrTypeRequest:t.data.data});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"pagination",value:function(e){var t,a,n,s=[];for(t=0,a=e.length;t<a;t+=5)n=e.slice(t,t+5),s.push(n);0==s.length?this.setState({hidden:!1}):this.setState({hidden:!0}),this.setState({arrPagination:s,data:s[this.state.indexPage]})}},{key:"searchKey",value:function(){var e=this.state,t=e.indexPage,a=e.key,n=e.keyStatus;if(""!=a||""!=n){var s=[];this.state.dataApi.map((function(e){(e.UserName.toLocaleUpperCase().includes(a.toLocaleUpperCase())||e.Phone.toLocaleUpperCase().includes(a.toLocaleUpperCase()))&&e.Status.includes(n)&&s.push(e)}));var i=0;s.map((function(e){"Actived"==e.Status&&(i+=1)})),this.setState({data:s,totalActive:i})}else{var r=0;this.state.dataApi.map((function(e){"Actived"==e.Status&&(r+=1)})),this.setState({data:this.state.arrPagination[t],totalActive:r})}}},{key:"actionSearch",value:function(e,t){var a=this;this.setState(Object(i.a)({},t,e.target.value),(function(){a.searchKey()}))}},{key:"resetSearch",value:function(){var e=this;this.setState({key:"",keyStatus:""},(function(){e.searchKey()}))}},{key:"toggleModal",value:function(){var e=Object(l.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:"new"==t&&this.setState({modalCom:!this.state.modalCom,action:t,UserName:"",FullName:"",Phone:"",Type:"0"});case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"onChange",value:function(e,t){this.setState(Object(i.a)({},e,t))}},{key:"addRoles",value:function(){var e=Object(l.a)(c.a.mark((function e(){var t,a,n,s,i,r,l;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.state,a=t.UserName,n=t.Phone,s=t.Type,i=t.FullName,null!=a&&""!=a&&null!=n&&""!=n&&""!=i){e.next=4;break}return alert("Vui lòng nhập đầy đủ trường dữ liệu !!!"),e.abrupt("return");case 4:return r={UserName:a,FullName:i,Phone:n,Company_Id:"0"==this.state.type||"1"==this.state.type?null:JSON.parse(this.state.company_id).company_id,Type:s},this.setState({isLoading:!0}),e.next=8,_()({baseURL:k.a.BASE_URL,url:k.a.CUS_RES_ADD,method:"PUT",data:r});case 8:1==(l=e.sent).data.is_success?("0"==this.state.type||"1"==this.state.type?this.getData():this.getDataForCompany(),this.setState({modalCom:!this.state.modalCom})):(alert(l.data.message),this.setState({isLoading:!1}));case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"openUpdate",value:function(){var e=Object(l.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.setState({modalCom:!this.state.modalCom,action:"update",UserName:t.UserName,FullName:t.FullName,Phone:t.Phone,Type:t.Type,id:t._id,Status:t.Status});case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"updateUser",value:function(){var e=Object(l.a)(c.a.mark((function e(){var t,a,n,s,i,r,l,o;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.state,a=t.UserName,n=t.Phone,s=t.Type,i=t.FullName,r=t.Status,null!=a&&""!=a&&null!=n&&""!=n&&null!=i&&""!=i){e.next=4;break}return alert("Vui lòng nhập đầy đủ trường dữ liệu !!!"),e.abrupt("return");case 4:return l={UserName:a,FullName:i,Phone:n,Type:s,id:this.state.id,Status:r},this.setState({isLoading:!0}),e.next=8,_()({baseURL:k.a.BASE_URL,url:k.a.CUS_RES_UPDATE,method:"POST",data:l});case 8:1==(o=e.sent).data.is_success?("0"==this.state.type||"1"==this.state.type?this.getData():this.getDataForCompany(),this.setState({modalCom:!this.state.modalCom})):(alert(o.data.message),this.setState({isLoading:!1}));case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"delete",value:function(){var e=Object(l.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({isLoading:!0}),e.next=3,_()({baseURL:k.a.BASE_URL,url:k.a.CUS_RES_DELETE,method:"DELETE",data:{id:this.state.delete._id}});case 3:1==(t=e.sent).data.is_success?("0"==this.state.type||"1"==this.state.type?this.getData():this.getDataForCompany(),this.setState({modalDelete:!this.state.modalDelete,delete:null})):(alert(t.data.message),this.setState({isLoading:!1}));case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"inputChange",value:function(e){this.setState(Object(i.a)({},e.target.name,e.target.value))}},{key:"getBadge",value:function(e){switch(e){case"0":return"danger";case"1":return"success";default:return"primary"}}},{key:"getBadge_String",value:function(e){switch(e){case"0":return"Ch\u01b0a nh\u1eadn qu\xe0";case"1":return"\u0110\xe3 nh\u1eadn qu\xe0";default:return"primary"}}},{key:"render",value:function(){var e=this,t=this.state,a=t.data,n=t.action,s=t.arrPagination,i=t.arrTypeRequest,r=t.type,o=t.key;return this.state.isLoading?Object(R.jsx)("div",{className:"sweet-loading",children:Object(R.jsx)(P.a,{css:I,size:50,color:"#123abc",loading:this.state.isLoading,speedMultiplier:1.5})}):Object(R.jsxs)("div",{className:"animated fadeIn",children:[Object(R.jsx)(m.a,{children:Object(R.jsxs)(j.a,{children:[Object(R.jsx)("p",{style:q.success,children:this.state.updated}),Object(R.jsx)("p",{style:q.danger,children:this.state.deleted}),Object(R.jsxs)(g.a,{children:[Object(R.jsxs)(x.a,{children:[Object(R.jsx)("i",{className:"fa fa-align-justify"})," Danh s\xe1ch nh\u1eadn qu\xe0",Object(R.jsx)("div",{style:q.tags,children:Object(R.jsx)(C.W,{children:Object(R.jsx)(C.p,{sm:"12",lg:"12",children:Object(R.jsxs)(C.W,{children:[Object(R.jsx)(C.p,{sm:"12",lg:"4",children:Object(R.jsx)("div",{children:Object(R.jsx)(b.a,{style:q.searchInput,onChange:function(t){e.actionSearch(t,"key")},name:"key",value:o,placeholder:"T\u1eeb kh\xf3a"})})}),Object(R.jsx)(C.p,{sm:"12",lg:"4",children:Object(R.jsx)(C.X,{style:q.flexOption,onChange:function(t){e.actionSearch(t,"keyStatus")},custom:!0,children:["0","1"].map((function(e,t){return Object(R.jsx)("option",{value:e,children:"0"==e?"Ch\u01b0a nh\u1eadn qu\xe0":"\u0110\xe3 nh\u1eadn qu\xe0"})}))})}),Object(R.jsx)(C.p,{sm:"12",lg:"4",children:Object(R.jsx)(C.d,{color:"primary",style:{width:"100%",marginTop:5},size:"sm",onClick:function(t){e.resetSearch()},children:"L\xe0m m\u1edbi t\xecm ki\u1ebfm"})})]})})})})]}),Object(R.jsx)(f.a,{children:Object(R.jsxs)("table",{ble:!0,className:"table table-hover table-outline mb-0 d-none d-sm-table",children:[Object(R.jsx)("thead",{className:"thead-light",children:Object(R.jsxs)("tr",{children:[Object(R.jsx)("th",{className:"text-center",children:"STT."}),Object(R.jsx)("th",{className:"text-center",children:"T\xean"}),Object(R.jsx)("th",{className:"text-center",children:"T\xean \u0111\u1ea7y \u0111\u1ee7"}),Object(R.jsx)("th",{className:"text-center",children:"S\u1ed1 \u0111i\u1ec7n tho\u1ea1i"}),"0"==r||"1"==r?Object(R.jsx)("th",{className:"text-center",children:"T\u1ea1o b\u1edfi"}):"","0"==r||"1"==r?Object(R.jsx)("th",{className:"text-center",children:"Lo\u1ea1i"}):"",Object(R.jsx)("th",{className:"text-center",children:"Ng\xe0y t\u1ea1o"}),Object(R.jsx)("th",{className:"text-center",children:"Tr\u1ea1ng th\xe1i"}),Object(R.jsx)("th",{className:"text-center",children:"#"})]})}),Object(R.jsxs)("tbody",{children:[Object(R.jsx)("td",{colSpan:"10",hidden:this.state.hidden,className:"text-center",children:"Kh\xf4ng t\xecm th\u1ea5y d\u1eef li\u1ec7u"}),void 0!=a?a.map((function(t,a){return Object(R.jsxs)("tr",{children:[Object(R.jsx)("td",{className:"text-center",children:a+1}),Object(R.jsx)("td",{className:"text-center",children:t.UserName}),Object(R.jsx)("td",{className:"text-center",children:t.FullName}),Object(R.jsx)("td",{className:"text-center",children:t.Phone}),"0"==r||"1"==r?Object(R.jsx)("td",{className:"text-center",children:null==t.Company_Id||void 0==t.Company_Id?"admin":t.Company_Id.Name}):"","0"==r||"1"==r?Object(R.jsx)("td",{className:"text-center",children:t.Type}):"",Object(R.jsx)("td",{className:"text-center",children:new Date(t.Create_Date).toLocaleDateString()+" "+new Date(t.Create_Date).toLocaleTimeString()}),Object(R.jsx)("td",{className:"text-center",children:Object(R.jsx)(C.a,{color:e.getBadge(t.Status),children:e.getBadge_String(t.Status)})}),Object(R.jsx)("td",{className:"text-center"})]},a)})):""]})]})})]}),Object(R.jsx)("div",{style:{float:"right"},children:Object(R.jsx)(w.a,{count:s.length,color:"primary",onChange:function(t,a){e.setState({data:s[a-1],indexPage:a-1})}})})]})}),Object(R.jsxs)(O.a,{isOpen:this.state.modalCom,className:this.props.className,children:[Object(R.jsx)(y.a,{children:"new"==this.state.action?"T\u1ea1o m\u1edbi":"C\u1eadp nh\u1eadt"}),Object(R.jsxs)(S.a,{children:[Object(R.jsx)(T.a,{field:"UserName",label:"T\xean \u0111\u0103ng nh\u1eadp",value:this.state.UserName,placeholder:"T\xean \u0111\u0103ng nh\u1eadp",onChange:function(t){return e.onChange("UserName",t.target.value)}}),Object(R.jsx)(T.a,{field:"FullName",label:"T\xean \u0111\u1ea7y \u0111\u1ee7",value:this.state.FullName,placeholder:"T\xean \u0111\u1ea7y \u0111\u1ee7",onChange:function(t){return e.onChange("FullName",t.target.value)}}),Object(R.jsx)(T.a,{field:"Phone",label:"S\u1ed1 \u0111i\u1ec7n tho\u1ea1i",value:this.state.Phone,placeholder:"S\u1ed1 \u0111i\u1ec7n tho\u1ea1i",onChange:function(t){return e.onChange("Phone",t.target.value)}}),Object(R.jsx)("label",{htmlFor:"tag",children:"Ch\u1ecdn lo\u1ea1i khuy\u1ebfn m\xe3i "}),Object(R.jsx)(C.X,{onChange:function(){var t=Object(l.a)(c.a.mark((function t(a){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.setState({Type:a.target.value});case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),children:i.map((function(t,a){return t.Value==e.state.Type?Object(R.jsx)("option",{selected:!0,value:t.Value,children:t.Value}):Object(R.jsx)("option",{value:t.Value,children:t.Value})}))}),"new"==n?"":Object(R.jsxs)("div",{children:[Object(R.jsx)("label",{style:q.flexLabel,htmlFor:"tag",children:"Status:"}),Object(R.jsxs)("select",{style:q.flexOption,name:"Status",onChange:function(t){return e.onChange("Status",t.target.value)},children:[Object(R.jsx)("option",{value:this.state.Status,children:""==this.state.Status?" - - - - - - - - - - ":this.state.Status}),Object(R.jsx)("option",{value:"0",children:"Ch\u01b0a nh\u1eadn qu\xe0"}),Object(R.jsx)("option",{value:"1",children:"\u0110\xe3 nh\u1eadn qu\xe0"})]})]})]}),Object(R.jsxs)(v.a,{children:[Object(R.jsx)(C.d,{color:"primary",onClick:function(t){"new"===e.state.action?e.addRoles():e.updateUser()},disabled:this.state.isLoading,children:"Save"})," ",Object(R.jsx)(C.d,{color:"secondary",onClick:function(t){return e.toggleModal("new")},children:"Cancel"})]})]}),Object(R.jsxs)(O.a,{isOpen:this.state.modalDelete,toggle:function(t){return e.setState({modalDelete:!e.state.modalDelete,delete:null})},className:this.props.className,children:[Object(R.jsx)(y.a,{toggle:function(t){return e.setState({modalDelete:!e.state.modalDelete,delete:null})},children:"Delete"}),Object(R.jsx)(S.a,{children:Object(R.jsx)("label",{htmlFor:"tag",children:"X\xe1c nh\u1eadn x\xf3a !!!"})}),Object(R.jsxs)(v.a,{children:[Object(R.jsx)(C.d,{color:"primary",onClick:function(t){return e.delete()},disabled:this.state.isLoading,children:"Delete"})," ",Object(R.jsx)(C.d,{color:"secondary",onClick:function(t){return e.setState({modalDelete:!e.state.modalDelete,delete:null})},children:"Cancel"})]})]})]})}}]),a}(p.Component),I=Object(U.css)(n||(n=Object(s.a)(["\n  display: block;\n  margin: 0 auto;\n  border-color: red;\n"]))),q=Object(i.a)({pagination:{marginRight:"5px"},flexLabel:{width:100},flexOption:{width:160,margin:"1px"},a:{textDecoration:"none"},floatRight:{float:"right",marginTop:"3px"},spinner:{width:"30px"},center:{textAlign:"center"},tbody:{height:"380px",overflowY:"auto"},wh12:{width:"8%",float:"left",height:"80px"},wh15:{width:"15%",float:"left",height:"80px"},w5:{width:"12%",float:"left",height:"80px"},wa10:{width:"5%",float:"left",height:"80px"},row:{float:"left",width:"100%"},success:{color:"green"},danger:{color:"red"},mgl5:{marginLeft:"5px"},tags:{float:"right",marginRight:"5px"},searchInput:{width:"160px",display:"inline-block",margin:"1px"},userActive:{color:"green"},userPending:{color:"red"},nagemonNameCol:{width:"328px"},image:{width:"100px",height:"100px",borderRadius:"99999px"}},"mgl5",{marginBottom:"5px"});t.default=F},667:function(e,t,a){"use strict";var n=a(12),s=a(1337),i=a(663);t.a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(s.a)(e,Object(n.a)({defaultTheme:i.a},t))}}}]);
//# sourceMappingURL=53.3b116c7d.chunk.js.map
