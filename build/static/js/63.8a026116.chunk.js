(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[63],{1340:function(e,t,a){"use strict";a.r(t);var n,s=a(653),c=a(165),r=a(113),i=a.n(r),l=a(640),o=a(166),d=a(167),h=a(169),u=a(168),j=a(2),m=a(1299),g=a(1300),p=a(1301),x=a(1302),b=a(1303),O=a(1304),f=a(1389),v=a(1307),y=a(1308),S=a(1309),N=a(645),k=a(639),w=a(670),C=a(1385),D=(a(644),a(646)),_=a(652),P=a(643),L=a.n(P),A=a(649),T=a(654),U=a.n(T),E=a(17),I=new Headers,F=localStorage.getItem("auth");I.append("Authorization","Bearer "+F),I.append("Content-Type","application/json");Object(w.a)((function(e){return{root:{"& > *":{marginTop:e.spacing(2)}}}}));var R=function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).getData=Object(l.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.setState({isLoading:!0}),e.next=3,L()({baseURL:D.a.BASE_URL,url:D.a.PLUGIN_LIST_COMPANY,method:"POST"});case 3:t=e.sent,a=t.data.data,n.pagination(a),n.setState({dataApi:a}),0,n.setState({isLoading:!1,totalActive:0});case 9:case"end":return e.stop()}}),e)}))),n.getData_ByID=Object(l.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.setState({isLoading:!0}),e.next=3,L()({baseURL:D.a.BASE_URL,url:D.a.PLUGIN_LIST_COMPANY_BY_ID,method:"POST",headers:n.state.token});case 3:t=e.sent,a=t.data.data,n.pagination(a),n.setState({dataApi:a}),0,n.setState({isLoading:!1,totalActive:0});case 9:case"end":return e.stop()}}),e)}))),n.openDelete=function(e){n.setState({modalDelete:!n.state.modalDelete,delete:e})},n.getPackageName=function(){var e=Object(l.a)(i.a.mark((function e(t){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L()({baseURL:D.a.BASE_URL,url:D.a.PLUGIN_DATA_PACKAGE,method:"POST",data:{package_id:t}});case 2:return a=e.sent,e.abrupt("return",a.data.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.state={data:[],key:"",UserName:"",Password:"",keyStatus:"",activePage:1,page:1,itemsCount:0,limit:20,totalActive:0,modalCom:!1,viewingUser:{},communities:[],updated:"",dataApi:[],action:"new",Name:"",Email:"",Phone:"",Fax:"",Address:"",Website:"",Code:"",Slug:"",Status:"",modalDelete:!1,delete:null,arrPagination:[],indexPage:0,toggleView:!1,company_name:"",current_package:"",arrTotalPackage:[],arrDetailPackage:[],phone_number:"",current_slug:"",type:localStorage.getItem("type"),province:[],current_province:"",token:{Authorization:"Bearer ".concat(localStorage.getItem("token"))},isLoading:!1,hidden:!1},n}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(l.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for("0"==this.state.type?this.getData():this.getData_ByID(),this.getProvince(),t=JSON.parse(localStorage.getItem("url")),a=0;a<t.length;a++)t[a].url==window.location.hash&&1==t[a].isHidden&&(window.location.href="#/");case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"pagination",value:function(e){var t,a,n,s=[];for(t=0,a=e.length;t<a;t+=5)n=e.slice(t,t+5),s.push(n);0==s.length?this.setState({hidden:!1}):this.setState({hidden:!0}),this.setState({arrPagination:s,data:s[this.state.indexPage]})}},{key:"onView",value:function(){var e=Object(l.a)(i.a.mark((function e(t,a,n,s){var c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getPackageData(a);case 2:c=e.sent,e.prev=3,this.setState({toggleView:!this.state.toggleView,company_name:t,current_package:0==c.length?"":c[0].Name,arrDetailPackage:0==c.length?[]:c[0].Array_Feature,phone_number:n,current_slug:s}),e.next=10;break;case 7:throw e.prev=7,e.t0=e.catch(3),e.t0;case 10:case"end":return e.stop()}}),e,this,[[3,7]])})));return function(t,a,n,s){return e.apply(this,arguments)}}()},{key:"searchKey",value:function(){var e=this.state,t=e.indexPage,a=e.key,n=e.keyStatus;if(""!=a||""!=n){var s=[];this.state.dataApi.map((function(e){(e.Email.toLocaleUpperCase().includes(a.toLocaleUpperCase())||e.Name.toLocaleUpperCase().includes(a.toLocaleUpperCase())||e.Phone.toLocaleUpperCase().includes(a.toLocaleUpperCase()))&&e.Status.toLocaleUpperCase().includes(n.toLocaleUpperCase())&&s.push(e)}));var c=0;s.map((function(e){"Actived"==e.Status&&(c+=1)})),this.setState({data:s,totalActive:c})}else{var r=0;this.state.dataApi.map((function(e){"Actived"==e.Status&&(r+=1)})),this.setState({data:this.state.arrPagination[t],totalActive:r})}}},{key:"toggleModal",value:function(e){"new"==e&&this.setState({modalCom:!this.state.modalCom,action:e,Name:"",Email:"",Phone:"",Fax:"",Address:"",Website:"",Slug:"",Code:"",Status:"",username:"",password:"",current_province:this.state.province[0]})}},{key:"onChange",value:function(e,t){this.setState(Object(c.a)({},e,t))}},{key:"addCompany",value:function(){var e=Object(l.a)(i.a.mark((function e(){var t,a,n,s,c,r,l,o,d,h,u,j,m,g;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.state,a=t.Email,n=t.Name,s=t.Phone,c=t.Fax,r=t.Address,l=t.Website,o=t.Code,d=t.UserName,h=t.Password,u=t.Slug,j=t.current_province,null!=a&&""!=a&&null!=n&&""!=n&&null!=s&&""!=s&&null!=r&&""!=r&&null!=u&&""!=u&&null!=d&&""!=d&&null!=h&&""!=h){e.next=4;break}return alert("Vui l\xf2ng nh\u1eadp \u0111\u1ea7y \u0111\u1ee7 tr\u01b0\u1eddng d\u1eef li\u1ec7u !!!"),e.abrupt("return");case 4:return m={Name:n,Email:a,Phone:s,Fax:c,Address:r+","+j,Slug:u,Website:l,Code:o,UserName:d,Password:h},this.setState({isLoading:!0}),e.next=8,L()({baseURL:D.a.BASE_URL,url:D.a.PLUGIN_ADD_COMPANY,method:"PUT",data:m,headers:this.state.token});case 8:1==(g=e.sent).data.is_success?(this.getData(),this.setState({modalCom:!this.state.modalCom})):(alert(g.data.message),this.setState({isLoading:!1}));case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"openUpdate",value:function(e){this.setState({modalCom:!this.state.modalCom,action:"update",Name:e.Name,Email:e.Email,Phone:e.Phone,Fax:e.Fax,Address:null==e.Address||void 0==e.Address?"":e.Address.length<1?e.Address+", "+this.state.province[0].province_name:e.Address,Slug:e.Slug,Website:e.Website,Code:e._id,id:e._id,Status:e.Status,current_province:null==e.Address||void 0==e.Address?"":e.Address.length<1?this.state.province[0].province_name:e.Address.split(",")[e.Address.split(",").length-1]})}},{key:"updateCompany",value:function(){var e=Object(l.a)(i.a.mark((function e(){var t,a,n,s,c,r,l,o,d,h,u,j,m;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.state,a=t.Email,n=t.Name,s=t.Phone,c=t.Fax,r=t.Address,l=t.Website,o=t.Slug,d=t.Status,h=t.current_province,null!=a&&""!=a&&null!=n&&""!=n&&null!=s&&""!=s&&null!=o&&""!=o&&null!=r&&""!=r){e.next=4;break}return alert("Vui l\xf2ng nh\u1eadp \u0111\u1ea7y \u0111\u1ee7 tr\u01b0\u1eddng d\u1eef li\u1ec7u !!!"),e.abrupt("return");case 4:return(u=r.split(",")).splice(r.split(",").length-1,1),j={Name:n,Email:a,Phone:s,Fax:c,Address:u+","+h,Website:l,Slug:o,Code:this.state.id,Status:d,id:this.state.id},this.setState({isLoading:!0}),e.next=10,L()({baseURL:D.a.BASE_URL,url:D.a.PLUGIN_UPDATE_COMPANY,method:"POST",data:j});case 10:1==(m=e.sent).data.is_success?(this.getData(),this.setState({modalCom:!this.state.modalCom})):(alert(m.data.message),this.setState({isLoading:!1}));case 12:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"delete",value:function(){var e=Object(l.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({isLoading:!0}),e.next=3,L()({baseURL:D.a.BASE_URL,url:D.a.PLUGIN_DELETE_COMPANY,method:"DELETE",data:{id:this.state.delete._id}});case 3:1==(t=e.sent).data.is_success?(this.getData(),this.setState({modalDelete:!this.state.modalDelete,delete:null})):(alert(t.data.message),this.setState({isLoading:!1}));case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getPackageData",value:function(){var e=Object(l.a)(i.a.mark((function e(t){var a,n,s,c,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=[],e.next=3,L()({baseURL:D.a.BASE_URL,url:D.a.LIST_PLUGIN_ORDER_FOR_ADMIN,method:"POST",data:{company_id:t}});case 3:n=e.sent,s=n.data.data.result,c=0;case 6:if(!(c<s.length)){e.next=17;break}return e.next=9,this.getPackageName(s[c].Package_Id);case 9:r=e.sent,s[c].Name=r.Name,s[c].Unit=r.Unit,s[c].Value=r.Value,a.push(s[c]);case 14:c++,e.next=6;break;case 17:return this.setState({arrTotalPackage:a}),e.abrupt("return",a);case 19:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getBadge",value:function(e){switch(e){case"Actived":return"success";case"Inactive":return"secondary";case"Locked":return"warning";case"Deactived":return"danger";default:return"primary"}}},{key:"getBadgeStatus",value:function(e){switch(e){case"0":return"danger";case"1":return"success";default:return"primary"}}},{key:"getStatus",value:function(e){switch(e){case"0":return"Ch\u1edd duy\u1ec7t";case"1":return"\u0110\xe3 duy\u1ec7t";default:return"primary"}}},{key:"inputChange",value:function(e){this.setState(Object(c.a)({},e.target.name,e.target.value))}},{key:"actionSearch",value:function(e,t){var a=this;this.setState(Object(c.a)({},t,e.target.value),(function(){a.searchKey()}))}},{key:"resetSearch",value:function(){var e=this;this.setState({key:"",keyEmail:"",keyPhone:"",keyFax:"",keyAddress:"",keyWebsite:"",keyCode:"",keyCompany:"",keyDateCreate:new Date,keyStatus:""},(function(){e.searchKey()}))}},{key:"convertUnitToDate",value:function(e){switch(e){case"0":return"Ng\xe0y";case"1":return"Th\xe1ng";case"2":return"N\u0103m"}}},{key:"CalculatorDateLeft",value:function(e,t){return Math.ceil(Math.abs(new Date(t)-new Date(e))/864e5)}},{key:"renderDetailPackage",value:function(){var e=this;return Object(E.jsxs)("table",{ble:!0,className:"table table-hover table-outline mb-0 d-none d-sm-table",children:[Object(E.jsx)("thead",{className:"thead-light",children:Object(E.jsxs)("tr",{children:[Object(E.jsx)("th",{className:"text-center",children:"STT."}),Object(E.jsx)("th",{className:"text-center",children:"T\xean d\u1ecbch v\u1ee5"}),Object(E.jsx)("th",{className:"text-center",children:"\u0110\u01b0\u1eddng d\u1eabn"})]})}),Object(E.jsxs)("tbody",{children:[0==this.state.arrDetailPackage.length?Object(E.jsx)("td",{colSpan:"10",hidden:!1,className:"text-center",children:"Kh\xf4ng t\xecm th\u1ea5y d\u1eef li\u1ec7u"}):Object(E.jsx)("td",{colSpan:"10",hidden:!0,className:"text-center",children:"Kh\xf4ng t\xecm th\u1ea5y d\u1eef li\u1ec7u"}),void 0!=this.state.arrDetailPackage||0!=this.state.arrDetailPackage.length||null!=this.state.arrDetailPackage?this.state.arrDetailPackage.map((function(t,a){return Object(E.jsxs)("tr",{children:[Object(E.jsx)("td",{className:"text-center",children:a+1}),Object(E.jsx)("td",{className:"text-center",children:t.Key}),Object(E.jsx)("td",{className:"text-center",children:t.Value+e.state.current_slug})]},a)})):""]})]})}},{key:"calDateLeft",value:function(e,t){return this.CalculatorDateLeft(new Date(e),new Date(t))}},{key:"getProvince",value:function(){var e=Object(l.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L()({baseURL:"https://vapi.vnappmob.com",url:"/api/province",method:"GET"});case 2:t=e.sent,this.setState({province:t.data.results});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,a=t.data,n=t.key,s=t.action,c=t.arrPagination,r=t.type,o=t.current_province,d=t.arrTotalPackage,h=t.company_name,u=t.current_package,j=t.phone_number,w=t.province;return this.state.isLoading?Object(E.jsx)("div",{className:"sweet-loading",children:Object(E.jsx)(U.a,{css:B,size:50,color:"#123abc",loading:this.state.isLoading,speedMultiplier:1.5})}):Object(E.jsxs)("div",{className:"animated fadeIn",children:[Object(E.jsx)(m.a,{children:Object(E.jsxs)(g.a,{children:[Object(E.jsx)("p",{style:V.success,children:this.state.updated}),Object(E.jsx)("p",{style:V.danger,children:this.state.deleted}),Object(E.jsxs)(p.a,{children:[Object(E.jsxs)(x.a,{children:[Object(E.jsx)("i",{className:"fa fa-align-justify"})," Danh s\xe1ch c\xf4ng ty",Object(E.jsx)("div",{style:V.tags,children:Object(E.jsx)(k.W,{children:Object(E.jsx)(k.p,{sm:"12",lg:"12",children:Object(E.jsxs)(k.W,{children:[Object(E.jsx)(k.p,{sm:"12",lg:"4",children:Object(E.jsx)("div",{children:Object(E.jsx)(b.a,{style:V.searchInput,onChange:function(t){e.actionSearch(t,"key")},name:"key",value:n,placeholder:"T\u1eeb kh\xf3a"})})}),Object(E.jsx)(k.p,{sm:"12",lg:"4",children:Object(E.jsx)(k.X,{style:V.flexOption,onChange:function(t){e.actionSearch(t,"keyStatus")},custom:!0,children:["Actived","Deactived","Locked"].map((function(e,t){return Object(E.jsx)("option",{value:e,children:e})}))})}),Object(E.jsx)(k.p,{sm:"12",lg:"4",children:Object(E.jsx)(k.d,{color:"primary",style:{width:"100%",marginTop:5},size:"sm",onClick:function(t){e.resetSearch()},children:"L\xe0m m\u1edbi t\xecm ki\u1ebfm"})})]})})})})]}),Object(E.jsx)(O.a,{children:Object(E.jsxs)("table",{ble:!0,className:"table table-hover table-outline mb-0 d-none d-sm-table",children:[Object(E.jsx)("thead",{className:"thead-light",children:Object(E.jsxs)("tr",{children:[Object(E.jsx)("th",{className:"text-center",children:"STT."}),Object(E.jsx)("th",{className:"text-center",children:"T\xean C\xf4ng Ty"}),Object(E.jsx)("th",{className:"text-center",children:"Email - S\u0110T"}),Object(E.jsx)("th",{className:"text-center",children:"\u0110\u1ecba ch\u1ec9"}),Object(E.jsx)("th",{className:"text-center",children:"Ng\u01b0\u1eddi t\u1ea1o"}),Object(E.jsx)("th",{className:"text-center",children:"Ng\xe0y t\u1ea1o"}),Object(E.jsx)("th",{className:"text-center",children:"Tr\u1ea1ng th\xe1i"}),Object(E.jsx)("th",{className:"text-center",children:"#"})]})}),Object(E.jsxs)("tbody",{children:[Object(E.jsx)("td",{colSpan:"10",hidden:this.state.hidden,className:"text-center",children:"Kh\xf4ng t\xecm th\u1ea5y d\u1eef li\u1ec7u"}),void 0!=a?a.map((function(t,a){return Object(E.jsxs)("tr",{children:[Object(E.jsx)("td",{className:"text-center",children:a+1}),Object(E.jsx)("td",{className:"text-center",children:t.Name}),Object(E.jsxs)("td",{className:"text-center",children:[Object(E.jsx)("div",{children:t.Email}),Object(E.jsx)("div",{children:"------------"}),Object(E.jsx)("div",{children:t.Phone})]}),Object(E.jsx)("td",{className:"text-center",children:t.Address}),Object(E.jsx)("td",{className:"text-center",children:null==t.Create_By?"ADMIN":t.Create_By.Name}),Object(E.jsx)("td",{className:"text-center",children:new Date(t.Create_Date).toLocaleDateString()}),Object(E.jsx)("td",{className:"text-center",children:Object(E.jsx)(k.a,{color:e.getBadge(t.Status),children:t.Status})}),Object(E.jsxs)("td",{className:"text-center",children:[Object(E.jsx)(k.d,{style:{margin:1},outline:!0,color:"primary",size:"sm",onClick:function(a){return e.openUpdate(t)},children:Object(E.jsx)(N.a,{name:"cilPencil"})})," ","0"==r?Object(E.jsx)(k.d,{style:{margin:1},outline:!0,color:"danger",size:"sm",onClick:function(a){e.openDelete(t)},children:Object(E.jsx)(N.a,{name:"cilTrash"})}):""," ",Object(E.jsx)(k.ib,{content:"Xem chi ti\u1ebft \u0111\u01a1n h\xe0ng",children:Object(E.jsx)(k.d,{style:{margin:1},outline:!0,color:"info",size:"sm",onClick:function(){var a=Object(l.a)(i.a.mark((function a(n){return i.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.onView(t.Name,t._id,t.Phone,t.Slug);case 2:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}(),children:Object(E.jsx)(N.a,{name:"cil-magnifying-glass"})})})]})]},a)})):""]})]})})]}),Object(E.jsx)("div",{style:{float:"right"},children:Object(E.jsx)(C.a,{count:c.length,color:"primary",onChange:function(t,a){e.setState({data:c[a-1],indexPage:a-1})}})})]})}),Object(E.jsxs)(k.Q,{show:this.state.toggleView,onClose:function(){e.setState({toggleView:!e.state.toggleView})},size:"xl",children:[Object(E.jsxs)(k.T,{closeButton:!0,children:[Object(E.jsxs)(k.U,{children:["Danh s\xe1ch \u0111\u01a1n h\xe0ng c\u1ee7a ",h]}),Object(E.jsxs)(k.U,{style:{marginLeft:50},children:["S\u1ed1 \u0111i\u1ec7n tho\u1ea1i: ",j]})]}),Object(E.jsxs)(k.R,{children:[Object(E.jsxs)("table",{ble:!0,className:"table table-hover table-outline mb-0 d-none d-sm-table",children:[Object(E.jsx)("thead",{className:"thead-light",children:Object(E.jsxs)("tr",{children:[Object(E.jsx)("th",{className:"text-center",children:"STT."}),Object(E.jsx)("th",{className:"text-center",children:"T\xean G\xf3i"}),Object(E.jsx)("th",{className:"text-center",children:"T\xednh n\u0103ng"}),Object(E.jsx)("th",{className:"text-center",children:"G\xf3i"}),Object(E.jsx)("th",{className:"text-center",children:"Ng\xe0y k\xedch ho\u1ea1t"}),Object(E.jsx)("th",{className:"text-center",children:"Ng\xe0y h\u1ebft h\u1ea1n"}),Object(E.jsx)("th",{className:"text-center",children:"Th\u1eddi gian h\u1ebft h\u1ea1n"}),Object(E.jsx)("th",{className:"text-center",children:"Tr\u1ea1ng th\xe1i"}),Object(E.jsx)("th",{className:"text-center",children:"#"})]})}),Object(E.jsxs)("tbody",{children:[0==d?Object(E.jsx)("td",{colSpan:"10",hidden:!1,className:"text-center",children:"Kh\xf4ng t\xecm th\u1ea5y d\u1eef li\u1ec7u"}):Object(E.jsx)("td",{colSpan:"10",hidden:!0,className:"text-center",children:"Kh\xf4ng t\xecm th\u1ea5y d\u1eef li\u1ec7u"}),void 0!=d?d.map((function(t,a){return Object(E.jsxs)("tr",{children:[Object(E.jsx)("th",{className:"text-center",children:a+1}),Object(E.jsx)("th",{className:"text-center",children:t.Name}),Object(E.jsxs)("th",{className:"text-center",children:[t.Array_Feature.map((function(e,t){if(t<2)return Object(E.jsx)("div",{children:Object(E.jsx)("a",{href:e.Value,target:"_blank",children:e.Value},t)})})),t.Array_Feature.length-2<=0?"":t.Array_Feature.length-2+" mores..."]}),Object(E.jsx)("th",{className:"text-center",children:"".concat(t.Value," ").concat(e.convertUnitToDate(t.Unit))}),Object(E.jsx)("th",{className:"text-center",children:"1"==t.Status?new Date(t.Active_Date).toLocaleDateString():"-----"}),Object(E.jsx)("th",{className:"text-center",children:"1"==t.Status?new Date(t.End_Date).toLocaleDateString():"-----"}),"1"==t.Status?Object(E.jsxs)("th",{className:"text-center",style:e.calDateLeft(t.End_Date,Date.now())>30?{color:"green"}:e.calDateLeft(t.End_Date,Date.now())<15?{color:"yellow"}:{color:"red"},children:[e.calDateLeft(t.End_Date,Date.now())," ng\xe0y n\u1eefa"]}):Object(E.jsx)("th",{className:"text-center",children:"-----"}),Object(E.jsx)("th",{className:"text-center",children:Object(E.jsx)(k.a,{color:e.getBadgeStatus(t.Status),children:e.getStatus(t.Status)})}),Object(E.jsx)("td",{className:"text-center",children:Object(E.jsx)(k.d,{outline:!0,color:"info",size:"sm",onClick:function(){var a=Object(l.a)(i.a.mark((function a(n){return i.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:e.setState({arrDetailPackage:t.Array_Feature,current_package:t.Name});case 1:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}(),children:Object(E.jsx)(N.a,{name:"cil-magnifying-glass"})})})]},a)})):""]})]}),Object(E.jsx)("br",{}),Object(E.jsx)(k.T,{children:Object(E.jsxs)(k.U,{children:["Chi ti\u1ebft t\xednh n\u0103ng (",u,")"]})}),this.renderDetailPackage()]}),Object(E.jsx)(k.S,{children:Object(E.jsx)(k.d,{color:"secondary",onClick:function(){e.setState({toggleView:!e.state.toggleView})},children:"\u0110\xf3ng"})})]}),Object(E.jsxs)(f.a,{isOpen:this.state.modalCom,className:this.props.className,children:[Object(E.jsx)(v.a,{children:"new"==this.state.action?"T\u1ea1o m\u1edbi":"C\u1eadp nh\u1eadt"}),Object(E.jsxs)(y.a,{children:[Object(E.jsx)(_.a,{field:"Email",label:"Email",value:this.state.Email,type:"email",placeholder:"Emal",onChange:function(t){return e.onChange("Email",t.target.value)}}),Object(E.jsx)(_.a,{field:"Name",label:"T\xean c\xf4ng ty",value:this.state.Name,placeholder:"T\xean c\xf4ng ty",onChange:function(t){return e.onChange("Name",t.target.value)}}),Object(E.jsx)(_.a,{field:"UserName",label:"T\xean \u0111\u0103ng nh\u1eadp",value:this.state.UserName,placeholder:"T\xean \u0111\u0103ng nh\u1eadp",onChange:function(t){return e.onChange("UserName",t.target.value)}}),Object(E.jsx)(_.a,{field:"Password",label:"M\u1eadt kh\u1ea9u",type:"password",value:this.state.Password,placeholder:"M\u1eadt kh\u1ea9u",onChange:function(t){return e.onChange("Password",t.target.value)}}),Object(E.jsx)(_.a,{field:"Phone",label:"S\u1ed1 \u0111i\u1ec7n tho\u1ea1i",value:this.state.Phone,placeholder:"S\u1ed1 \u0111i\u1ec7n tho\u1ea1i",onChange:function(t){return e.onChange("Phone",t.target.value)}}),Object(E.jsx)(_.a,{field:"Fax",label:"Fax",value:this.state.Fax,placeholder:"Fax",onChange:function(t){return e.onChange("Fax",t.target.value)}}),Object(E.jsx)(_.a,{field:"Address",label:"\u0110\u1ecba ch\u1ec9",value:this.state.Address,placeholder:"\u0110\u1ecba ch\u1ec9",onChange:function(t){return e.onChange("Address",t.target.value)}}),Object(E.jsx)("label",{style:V.flexLabel,htmlFor:"tag",children:"T\u1ec9nh  "}),Object(E.jsx)(k.X,{onChange:function(){var t=Object(l.a)(i.a.mark((function t(a){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.setState({current_province:a.target.value});case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),custom:!0,size:"sm",name:"selectSm",id:"SelectLm",children:w.map((function(e,t){return e.province_name==o?Object(E.jsx)("option",{selected:!0,value:e.province_name,children:e.province_name}):Object(E.jsx)("option",{value:e.province_name,children:e.province_name})}))}),Object(E.jsx)(_.a,{field:"Slug",label:"Slug",value:this.state.Slug,placeholder:"Slug",onChange:function(t){return e.onChange("Slug",t.target.value)}}),Object(E.jsx)(_.a,{field:"Website",label:"Website",value:this.state.Website,placeholder:"Website",onChange:function(t){return e.onChange("Website",t.target.value)}}),"new"==s?"":Object(E.jsxs)("div",{children:[Object(E.jsx)("label",{style:V.flexLabel,htmlFor:"tag",children:"Status    "}),Object(E.jsxs)("select",{style:V.flexOption,name:"Status",onChange:function(t){return e.onChange("Status",t.target.value)},children:[Object(E.jsx)("option",{value:this.state.Status,children:""==this.state.Status?" - - - - - - - - - - ":this.state.Status}),Object(E.jsx)("option",{value:"Actived",children:"Actived"}),Object(E.jsx)("option",{value:"Deactived",children:"Deactived"})]})]})]}),Object(E.jsxs)(S.a,{children:[Object(E.jsx)(k.d,{color:"primary",onClick:function(t){"new"===e.state.action?e.addCompany():e.updateCompany()},disabled:this.state.isLoading,children:"L\u01b0u"})," ",Object(E.jsx)(k.d,{color:"secondary",onClick:function(t){return e.toggleModal("new")},children:"\u0110\xf3ng"})]})]}),Object(E.jsxs)(f.a,{isOpen:this.state.modalDelete,toggle:function(t){return e.setState({modalDelete:!e.state.modalDelete,delete:null})},className:this.props.className,children:[Object(E.jsx)(v.a,{toggle:function(t){return e.setState({modalDelete:!e.state.modalDelete,delete:null})},children:"Xo\xe1"}),Object(E.jsx)(y.a,{children:Object(E.jsx)("label",{htmlFor:"tag",children:"X\xe1c nh\u1eadn x\xf3a !!!"})}),Object(E.jsxs)(S.a,{children:[Object(E.jsx)(k.d,{color:"primary",onClick:function(t){return e.delete()},disabled:this.state.isLoading,children:"Delete"})," ",Object(E.jsx)(k.d,{color:"secondary",onClick:function(t){return e.setState({modalDelete:!e.state.modalDelete,delete:null})},children:"\u0110\xf3ng"})]})]})]})}}]),a}(j.Component),B=Object(A.css)(n||(n=Object(s.a)(["\n  display: block;\n  margin: 0 auto;\n  border-color: red;\n"]))),V=Object(c.a)({pagination:{marginRight:"5px"},flexLabel:{width:100},flexOption:{width:160,margin:"1px"},a:{textDecoration:"none"},floatRight:{float:"right",marginTop:"3px"},spinner:{width:"30px"},center:{textAlign:"center"},tbody:{height:"380px",overflowY:"auto"},wh12:{width:"8%",float:"left",height:"80px"},wh15:{width:"15%",float:"left",height:"80px"},w5:{width:"12%",float:"left",height:"80px"},wa10:{width:"5%",float:"left",height:"80px"},row:{float:"left",width:"100%"},success:{color:"green"},danger:{color:"red"},mgl5:{marginLeft:"5px"},tags:{float:"right",marginRight:"5px"},searchInput:{width:"160px",display:"inline-block",margin:"1px"},userActive:{color:"green"},userPending:{color:"red"},nagemonNameCol:{width:"328px"},image:{width:"100px",height:"100px",borderRadius:"99999px"}},"mgl5",{marginBottom:"5px"});t.default=R},670:function(e,t,a){"use strict";var n=a(12),s=a(1386),c=a(666);t.a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(s.a)(e,Object(n.a)({defaultTheme:c.a},t))}}}]);
//# sourceMappingURL=63.8a026116.chunk.js.map