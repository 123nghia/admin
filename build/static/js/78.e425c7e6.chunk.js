(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[78],{1339:function(e,t,a){"use strict";a.r(t),function(e){var n,s=a(653),r=a(165),i=a(113),c=a.n(i),l=a(640),o=a(166),u=a(167),d=a(169),h=a(168),p=a(2),g=a(645),m=a(1299),j=a(1300),f=a(1301),x=a(1302),b=a(1303),v=a(1304),y=a(1389),O=a(1307),S=a(1308),k=a(1309),w=a(697),C=a.n(w),A=a(639),N=a(649),L=a(670),U=a(1385),D=(a(644),a(646)),_=a(652),T=a(643),E=a.n(T),F=(a(684),a(654)),P=a.n(F),R=a(17),B=new Headers,V=localStorage.getItem("auth");B.append("Authorization","Bearer "+V),B.append("Content-Type","application/json");Object(L.a)((function(e){return{root:{"& > *":{marginTop:e.spacing(2)}}}}));var I=function(t){Object(d.a)(n,t);var a=Object(h.a)(n);function n(e){var t;return Object(o.a)(this,n),(t=a.call(this,e)).getData=Object(l.a)(c.a.mark((function e(){var a,n,s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.setState({isLoading:!0}),e.next=3,E()({baseURL:D.a.BASE_URL,url:D.a.LIST_PACKAGE,method:"POST"});case 3:a=e.sent,n=a.data.data,t.pagination(n),t.setState({dataApi:a.data.data}),s=0,a.data.data.map((function(e){"Actived"==e.Status&&(s+=1)})),t.setState({isLoading:!1,totalActive:s});case 10:case"end":return e.stop()}}),e)}))),t.openDelete=function(e){t.setState({modalDelete:!t.state.modalDelete,delete:e})},t.getFeatureChoose=function(){var e=Object(l.a)(c.a.mark((function e(a){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E()({baseURL:D.a.BASE_URL,url:D.a.DATA_CHOOSE_FEATURE,method:"POST",data:{feature:a}});case 2:n=e.sent,t.setState({arrFeature_Save:n.data.data});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),t.state={data:[],key:"",keyStatus:"",activePage:1,page:1,itemsCount:0,limit:20,totalActive:0,modalCom:!1,viewingUser:{},communities:[],updated:"",dataApi:[],action:"new",Name:"",Value:"",Unit:"",arrFeature:"",Status:"",modalDelete:!1,delete:null,arrPagination:[],indexPage:0,dataCompany:[],dataFeature:[],currentCompany:"",hidden:!1,arrFeature_Save:[],arrFeature_Update:[],type:localStorage.getItem("type"),isLoading:!1},t}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=Object(l.a)(c.a.mark((function e(){var t,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(this.getData(),this.getCompanyData(),t=JSON.parse(localStorage.getItem("url")),a=0;a<t.length;a++)t[a].url==window.location.hash&&1==t[a].isHidden&&(window.location.href="#/");case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getCompanyData",value:function(){var e=Object(l.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.getFeatureData();case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"pagination",value:function(e){var t,a,n,s=[];for(t=0,a=e.length;t<a;t+=5)n=e.slice(t,t+5),s.push(n);0==s.length?this.setState({hidden:!1}):this.setState({hidden:!0}),this.setState({arrPagination:s,data:s[this.state.indexPage]})}},{key:"searchKey",value:function(){var e=this.state,t=e.indexPage,a=e.key,n=(e.keyEmail,e.keyCompany,e.keyPhone,e.keyFax,e.keyAddress,e.keyWebsite,e.keyCode,e.keyDateCreate,e.keyStatus);if(""!=a||""!=n){var s=[];this.state.dataApi.map((function(e){e.Name.toLocaleUpperCase().includes(a.toLocaleUpperCase())&&e.Status.toLocaleUpperCase().includes(n.toLocaleUpperCase())&&s.push(e)}));var r=0;s.map((function(e){"Actived"==e.Status&&(r+=1)})),this.setState({data:s,totalActive:r})}else{var i=0;this.state.dataApi.map((function(e){"Actived"==e.Status&&(i+=1)})),this.setState({data:this.state.arrPagination[t],totalActive:i})}}},{key:"toggleModal",value:function(e){"new"==e&&this.setState({modalCom:!this.state.modalCom,action:e,Name:"",Value:"",Unit:"",Status:""})}},{key:"onChange",value:function(e,t){this.setState(Object(r.a)({},e,t))}},{key:"addCompany",value:function(){var e=Object(l.a)(c.a.mark((function e(){var t,a,n,s,r,i,l,o;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.state,a=t.Name,n=t.Value,s=t.Unit,r=t.Status,i=t.arrFeature_Save,null!=a&&""!=a&&null!=n&&""!=n&&null!=s&&""!=s){e.next=4;break}return alert("Vui l\xf2ng nh\u1eadp \u0111\u1ea7y \u0111\u1ee7 tr\u01b0\u1eddng d\u1eef li\u1ec7u !!!"),e.abrupt("return");case 4:return l={Name:a,Value:n,Unit:s,Status:r,Array_Feature:i},this.setState({isLoading:!0}),e.next=8,E()({baseURL:D.a.BASE_URL,url:D.a.ADD_PACKAGE,method:"PUT",data:l});case 8:1==(o=e.sent).data.is_success?(this.getData(),this.setState({modalCom:!this.state.modalCom})):(alert(o.data.message),this.setState({isLoading:!1}));case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"openUpdate",value:function(e){this.setState({modalCom:!this.state.modalCom,action:"update",Name:e.Name,Value:e.Value,Array_Feature:e.Array_Feature,Unit:e.Unit,id:e._id,Status:e.Status,arrFeature_Update:e.Array_Feature})}},{key:"updateCompany",value:function(){var e=Object(l.a)(c.a.mark((function e(){var t,a,n,s,r,i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=this.state,a=t.Name,n=t.Value,s=t.Unit,r=t.Status,i=t.arrFeature_Save,t.arrFeature_Update,setTimeout(Object(l.a)(c.a.mark((function e(){var t,l;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!=a&&""!=a&&null!=n&&""!=n&&null!=s&&""!=s){e.next=3;break}return alert("Vui l\xf2ng nh\u1eadp \u0111\u1ea7y \u0111\u1ee7 tr\u01b0\u1eddng d\u1eef li\u1ec7u !!!"),e.abrupt("return");case 3:return t={Name:a,Value:n,Unit:s,Array_Feature:i,Status:r,id:this.state.id},this.setState({isLoading:!0}),e.next=7,E()({baseURL:D.a.BASE_URL,url:D.a.UPDATE_PACKAGE,method:"POST",data:t});case 7:1==(l=e.sent).data.is_success?(this.getData(),this.setState({modalCom:!this.state.modalCom})):(alert(l.data.message),this.setState({isLoading:!1}));case 9:case"end":return e.stop()}}),e,this)}))).bind(this),3e3);case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getFeatureData",value:function(){var e=Object(l.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E()({baseURL:D.a.BASE_URL,url:D.a.LIST_FEATURE,method:"POST"});case 2:t=e.sent,this.setState({dataFeature:t.data.data});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getDescription",value:function(e){switch(e){case"0":return"ADMIN";case"1":return"CUSTOMER"}}},{key:"renderSelect",value:function(){for(var e=this,t=this.state,a=t.dataFeature,n=t.arrFeature_Update,s=new Array,r=[],i=[],o=0;o<a.length;o++)r.push({name:a[o].Key,id:a[o]._id});for(var u=0;u<n.length;u++)i.push({name:n[u].Key,id:n[u]._id});return Object(R.jsxs)("div",{style:{marginTop:5},children:[Object(R.jsx)("label",{style:{width:"100%"},htmlFor:"tag",children:"Ch\u1ecdn t\xednh n\u0103ng cho g\xf3i    "}),Object(R.jsx)(C.a,{options:r,selectedValues:i,onSelect:function(){var t=Object(l.a)(c.a.mark((function t(a){var n;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(s=new Array,n=0;n<a.length;n++)s.push(a[n].id),e.setState({arrFeature:s});e.getFeatureChoose(s);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),onRemove:function(){var t=Object(l.a)(c.a.mark((function t(a){var n;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(s=new Array,n=0;n<a.length;n++)s.push(a[n].id),e.setState({arrFeature:s});e.getFeatureChoose(s);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),displayValue:"name"})]})}},{key:"delete",value:function(){var e=Object(l.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({isLoading:!0}),e.next=3,E()({baseURL:D.a.BASE_URL,url:D.a.DELETE_PACKAGE,method:"DELETE",data:{id:this.state.delete._id}});case 3:1==(t=e.sent).data.is_success?(this.getData(),this.setState({modalDelete:!this.state.modalDelete,delete:null})):(alert(t.data.message),this.setState({isLoading:!1}));case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getUsers",value:function(){var t=this,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,n=this.state.limit,s=this.state.key||"",r={method:"GET",headers:B};fetch(e.BASE_URL+"/admin/users?key="+s+"&page="+a+"&limit="+n,r).then((function(e){e.json().then((function(e){t.setState({data:e.data,itemsCount:e.total,activePage:a,totalActive:e.totalActive,updated:""})}))})).catch(console.log)}},{key:"handlePageChange",value:function(){var e=Object(l.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.getUsers(t);case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getBadge",value:function(e){switch(e){case"0":return"danger";case"1":return"success";default:return"primary"}}},{key:"getBadge_string",value:function(e){switch(e){case"0":return"\u0110\xe3 v\xf4 hi\u1ec7u";case"1":return"\u0110ang k\xedch ho\u1ea1t";default:return"primary"}}},{key:"getBadge_isDelete",value:function(e){switch(e){case!0:return"danger";case!1:return"success";default:return"primary"}}},{key:"getBadge_isDelete_string",value:function(e){switch(e){case!0:return"\u0110\xe3 x\xf3a";case!1:return"C\xf2n h\u1ea1n d\xf9ng";default:return"primary"}}},{key:"toggle",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";this.setState({modal:!this.state.modal,image:"",url:"",isActive:!1,isLoading:!1,errors:{},action:e,position:1,data:[],updated:""})}},{key:"inputChange",value:function(e){this.setState(Object(r.a)({},e.target.name,e.target.value))}},{key:"goSearch",value:function(){this.getUsers()}},{key:"actionSearch",value:function(e,t){var a=this;this.setState(Object(r.a)({},t,e.target.value),(function(){a.searchKey()}))}},{key:"resetSearch",value:function(){var e=this;this.setState({key:"",keyDateCreate:new Date,keyStatus:""},(function(){e.searchKey()}))}},{key:"render",value:function(){var e=this,t=this.state,a=t.data,n=t.key,s=t.action,r=t.arrPagination;return this.state.isLoading?Object(R.jsx)("div",{className:"sweet-loading",children:Object(R.jsx)(P.a,{css:K,size:50,color:"#123abc",loading:this.state.isLoading,speedMultiplier:1.5})}):Object(R.jsxs)("div",{className:"animated fadeIn",children:[Object(R.jsx)(m.a,{children:Object(R.jsxs)(j.a,{children:[Object(R.jsx)("p",{style:M.success,children:this.state.updated}),Object(R.jsx)("p",{style:M.danger,children:this.state.deleted}),Object(R.jsxs)(f.a,{children:[Object(R.jsxs)(x.a,{children:[Object(R.jsx)("i",{className:"fa fa-align-justify"})," Danh s\xe1ch g\xf3i s\u1ea3n ph\u1ea9m",Object(R.jsx)("div",{style:M.tags,children:Object(R.jsxs)(A.W,{children:[Object(R.jsx)(A.p,{sm:"12",lg:"12",children:Object(R.jsxs)(A.W,{children:[Object(R.jsx)(A.p,{sm:"12",lg:"4",children:Object(R.jsx)("div",{children:Object(R.jsx)(b.a,{style:M.searchInput,onChange:function(t){e.actionSearch(t,"key")},name:"key",value:n,placeholder:"T\u1eeb kh\xf3a"})})}),Object(R.jsx)(A.p,{sm:"12",lg:"4",children:Object(R.jsx)(A.X,{style:M.flexOption,onChange:function(t){e.actionSearch(t,"keyStatus")},custom:!0,children:["0","1"].map((function(e,t){return Object(R.jsx)("option",{value:e,children:0==e?"DISABLE":"ENABLE"})}))})}),Object(R.jsx)(A.p,{sm:"12",lg:"4",children:Object(R.jsx)(A.d,{color:"primary",style:{width:"100%",marginTop:5},size:"sm",onClick:function(t){e.resetSearch()},children:"L\xe0m m\u1edbi t\xecm ki\u1ebfm"})})]})}),Object(R.jsx)(A.p,{sm:"12",lg:"12",children:Object(R.jsx)(A.d,{outline:!0,color:"primary",style:M.floatRight,size:"sm",onClick:function(t){return e.toggleModal("new")},children:"Th\xeam m\u1edbi"})})]})})]}),Object(R.jsx)(v.a,{children:Object(R.jsxs)("table",{ble:!0,className:"table table-hover table-outline mb-0 d-none d-sm-table",children:[Object(R.jsx)("thead",{className:"thead-light",children:Object(R.jsxs)("tr",{children:[Object(R.jsx)("th",{className:"text-center",children:"STT."}),Object(R.jsx)("th",{className:"text-center",children:"T\xean g\xf3i"}),Object(R.jsx)("th",{className:"text-center",children:"Th\u1eddi gian s\u1eed d\u1ee5ng"}),Object(R.jsx)("th",{className:"text-center",children:"\u0110\u01a1n v\u1ecb t\xednh"}),Object(R.jsx)("th",{className:"text-center",children:"T\xednh n\u0103ng"}),Object(R.jsx)("th",{className:"text-center",children:"Tr\u1ea1ng th\xe1i"}),Object(R.jsx)("th",{className:"text-center",children:"#"})]})}),Object(R.jsxs)("tbody",{children:[Object(R.jsx)("td",{colSpan:"10",hidden:this.state.hidden,className:"text-center",children:"Kh\xf4ng t\xecm th\u1ea5y d\u1eef li\u1ec7u"}),void 0!=a?a.map((function(t,a){return Object(R.jsxs)("tr",{children:[Object(R.jsx)("td",{className:"text-center",children:a+1}),Object(R.jsxs)("td",{className:"text-center",children:[t.Name," "]}),Object(R.jsx)("td",{className:"text-center",children:t.Value}),Object(R.jsx)("td",{className:"text-center",children:"0"==t.Unit?"Ng\xe0y":"1"==t.Unit?"Th\xe1ng":"N\u0103m"}),Object(R.jsxs)("td",{className:"text-center",children:[t.Array_Feature.map((function(e,t){if(t<2)return Object(R.jsx)("div",{children:Object(R.jsx)("a",{href:e.Value,target:"_blank",children:e.Value},t)})})),t.Array_Feature.length-2<=0?"":"..."]}),Object(R.jsx)("td",{className:"text-center",children:Object(R.jsx)(A.a,{color:e.getBadge(t.Status),children:e.getBadge_string(t.Status)})}),Object(R.jsxs)("td",{className:"text-center",children:[Object(R.jsx)(A.d,{outline:!0,color:"primary",size:"sm",onClick:function(a){return e.openUpdate(t)},children:Object(R.jsx)(g.a,{name:"cilPencil"})})," ",Object(R.jsx)(A.d,{outline:!0,color:"danger",size:"sm",onClick:function(a){e.openDelete(t)},children:Object(R.jsx)(g.a,{name:"cilTrash"})})]})]},a)})):""]})]})})]}),Object(R.jsx)("div",{style:{float:"right"},children:Object(R.jsx)(U.a,{count:r.length,color:"primary",onChange:function(t,a){e.setState({data:r[a-1],indexPage:a-1})}})})]})}),Object(R.jsxs)(y.a,{isOpen:this.state.modalCom,className:this.props.className,children:[Object(R.jsx)(O.a,{children:"new"==this.state.action?"T\u1ea1o m\u1edbi":"C\u1eadp nh\u1eadt"}),Object(R.jsxs)(S.a,{children:[Object(R.jsx)(_.a,{field:"Name",label:"T\xean g\xf3i",value:this.state.Name,placeholder:"Nh\u1eadp t\xean g\xf3i",onChange:function(t){return e.onChange("Name",t.target.value)}}),Object(R.jsx)(_.a,{field:"Vualue",label:"Gi\xe1 tr\u1ecb",value:this.state.Value,placeholder:"Nh\u1eadp gi\xe1 tr\u1ecb",onChange:function(t){return e.onChange("Value",t.target.value)}}),Object(R.jsxs)("div",{style:{marginTop:5},children:[Object(R.jsx)("label",{style:M.flexLabel,htmlFor:"tag",children:"\u0110\u01a1n v\u1ecb    "}),Object(R.jsxs)(A.X,{style:M.flexOption,onChange:function(t){return e.onChange("Unit",t.target.value)},custom:!0,children:[Object(R.jsx)("option",{value:this.state.Unit,children:""==this.state.Unit?" - - - - - - - - - - ":this.state.Status}),["0","1","2"].map((function(t,a){return t==e.state.Unit?Object(R.jsx)("option",{selected:!0,value:t,children:"0"==t?"Ng\xe0y":"1"==t?"Th\xe1ng":"N\u0103m"}):Object(R.jsx)("option",{value:t,children:"0"==t?"Ng\xe0y":"1"==t?"Th\xe1ng":"N\u0103m"})}))]}),"new"==s?"":Object(R.jsxs)("div",{children:[Object(R.jsx)("label",{style:M.flexLabel,htmlFor:"tag",children:"Status    "}),Object(R.jsxs)("select",{style:M.flexOption,name:"Status",onChange:function(t){return e.onChange("Status",t.target.value)},children:[Object(R.jsx)("option",{value:this.state.Status,children:""==this.state.Status?" - - - - - - - - - - ":this.state.Status}),["0","1"].map((function(t,a){return t==e.state.Status?Object(R.jsx)("option",{selected:!0,value:t,children:0==t?"DISABLE":"ENABLE"}):Object(R.jsx)("option",{value:t,children:0==t?"DISABLE":"ENABLE"})}))]})]})]}),this.renderSelect()]}),Object(R.jsxs)(k.a,{children:[Object(R.jsx)(A.d,{color:"primary",onClick:function(t){"new"===e.state.action?e.addCompany():e.updateCompany()},disabled:this.state.isLoading,children:"L\u01b0u"})," ",Object(R.jsx)(A.d,{color:"secondary",onClick:function(t){return e.toggleModal("new")},children:"\u0110\xf3ng"})]})]}),Object(R.jsxs)(y.a,{isOpen:this.state.modalDelete,toggle:function(t){return e.setState({modalDelete:!e.state.modalDelete,delete:null})},className:this.props.className,children:[Object(R.jsx)(O.a,{toggle:function(t){return e.setState({modalDelete:!e.state.modalDelete,delete:null})},children:"Xo\xe1"}),Object(R.jsx)(S.a,{children:Object(R.jsx)("label",{htmlFor:"tag",children:"X\xe1c nh\u1eadn x\xf3a !!!"})}),Object(R.jsxs)(k.a,{children:[Object(R.jsx)(A.d,{color:"primary",onClick:function(t){return e.delete()},disabled:this.state.isLoading,children:"Delete"})," ",Object(R.jsx)(A.d,{color:"secondary",onClick:function(t){return e.setState({modalDelete:!e.state.modalDelete,delete:null})},children:"\u0110\xf3ng"})]})]})]})}}]),n}(p.Component),K=Object(N.css)(n||(n=Object(s.a)(["\n  display: block;\n  margin: 0 auto;\n  border-color: red;\n"]))),M=Object(r.a)({pagination:{marginRight:"5px"},flexLabel:{width:100},flexOption:{width:160,margin:"1px"},a:{textDecoration:"none"},floatRight:{float:"right",marginTop:"3px"},spinner:{width:"30px"},center:{textAlign:"center"},tbody:{height:"380px",overflowY:"auto"},wh12:{width:"8%",float:"left",height:"80px"},wh15:{width:"15%",float:"left",height:"80px"},w5:{width:"12%",float:"left",height:"80px"},wa10:{width:"5%",float:"left",height:"80px"},row:{float:"left",width:"100%"},success:{color:"green"},danger:{color:"red"},mgl5:{marginLeft:"5px"},tags:{float:"right",marginRight:"5px"},searchInput:{width:"160px",display:"inline-block",margin:"1px"},userActive:{color:"green"},userPending:{color:"red"},nagemonNameCol:{width:"328px"},image:{width:"100px",height:"100px",borderRadius:"99999px"}},"mgl5",{marginBottom:"5px"});t.default=I}.call(this,a(114))}}]);
//# sourceMappingURL=78.e425c7e6.chunk.js.map