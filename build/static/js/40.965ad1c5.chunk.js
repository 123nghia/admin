<<<<<<< HEAD:build/static/js/40.c90bc8a8.chunk.js
(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[40],{1294:function(e,t,a){"use strict";a.r(t);var n=a(165),s=a(113),c=a.n(s),i=a(641),r=a(166),l=a(167),o=a(169),d=a(168),h=a(2),u=a(1259),j=a(1260),m=a(1261),b=a(1262),p=a(1263),x=a(661),g=a(1264),O=a(894),f=a(1340),S=a(1267),v=a(1268),y=a(1269),C=a(640),N=(a(646),a(644)),k=a(643),D=a.n(k),A=a(17),w=new Headers,_=localStorage.getItem("auth");w.append("Authorization","Bearer "+_),w.append("Content-Type","application/json");var L=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).getData=Object(i.a)(c.a.mark((function e(){var t,a,s,i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.setState({isLoading:!0}),e.next=3,D()({baseURL:N.a.BASE_URL,url:N.a.LIST_TRANSACTION,method:"POST"});case 3:t=e.sent,a=0;case 5:if(!(a<t.data.data.length)){e.next=13;break}return e.next=8,D()({baseURL:N.a.BASE_URL,url:N.a.LIST_COMPANY,method:"POST",data:{condition:{_id:t.data.data[a].Company_Id}}});case 8:s=e.sent,t.data.data[a].Com_Name=s.data.data[0].Name;case 10:a++,e.next=5;break;case 13:n.pagination(t.data.data),n.setState({dataApi:t.data.data}),i=0,t.data.data.map((function(e){"Actived"==e.Status&&(i+=1)})),n.setState({isLoading:!1,totalActive:i});case 18:case"end":return e.stop()}}),e)}))),n.getOrderDetail=function(){var e=Object(i.a)(c.a.mark((function e(t,a){var s,i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D()({baseURL:N.a.BASE_URL,url:N.a.LIST_CHECK_OUT,method:"POST",data:{condition:{isDelete:!1,Transaction_ID:t}}});case 2:return s=e.sent,e.next=5,D()({baseURL:N.a.BASE_URL,url:N.a.LIST_COMPANY,method:"POST",data:{condition:{_id:a}}});case 5:i=e.sent,n.setState({dataOrderDetail:s.data.data,currenCom:i.data.data[0].Name,currenCom_ID:a});case 7:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),n.state={data:[],key:"",keyStatus:"",activePage:1,page:1,itemsCount:0,limit:20,totalActive:0,modalCom:!1,viewingUser:{},communities:[],updated:"",Status:"",dataApi:[],action:"new",modalDelete:!1,delete:null,arrPagination:[],indexPage:0,dataCompany:[],currentCompany:"",currentID:"",currenCom:"",currenCom_ID:"",currentSale_ID:"",curentStatus:"",dataOrderDetail:[],DATA_COMPANY:"",hiddenDetail:!0},n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=Object(i.a)(c.a.mark((function e(){var t,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(this.getData(),t=JSON.parse(localStorage.getItem("url")),a=0;a<t.length;a++)"#"+t[a].to==window.location.hash&&1==t[a].hidden&&(window.location.href="#/");case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getCompanyData",value:function(){var e=Object(i.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D()({baseURL:N.a.BASE_URL,url:N.a.LIST_COMPANY,method:"POST"});case 2:t=e.sent,this.setState({dataCompany:t.data.data});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"pagination",value:function(e){var t,a,n,s=[];for(t=0,a=e.length;t<a;t+=5)n=e.slice(t,t+5),s.push(n);this.setState({arrPagination:s,data:s[this.state.indexPage]})}},{key:"searchKey",value:function(){var e=this.state,t=e.indexPage,a=e.key,n=e.keyStatus;if(""!=a||""!=n){var s=[];this.state.dataApi.map((function(e){e.Company_Id.toLocaleUpperCase().includes(a.toLocaleUpperCase())&&e.Status.toLocaleUpperCase().includes(n.toLocaleUpperCase())&&s.push(e)}));var c=0;s.map((function(e){"Actived"==e.Status&&(c+=1)})),this.setState({data:s,totalActive:c})}else{var i=0;this.state.dataApi.map((function(e){"Actived"==e.Status&&(i+=1)})),this.setState({data:this.state.arrPagination[t],totalActive:i})}}},{key:"toggleModal",value:function(e){"new"==e&&this.setState({modalCom:!this.state.modalCom,action:e,Name:"",Email:"",Phone:"",Fax:"",Address:"",Website:"",Code:"",Status:"",username:"",password:""})}},{key:"onChange",value:function(e,t){this.setState(Object(n.a)({},e,t))}},{key:"addCompany",value:function(){var e=Object(i.a)(c.a.mark((function e(){var t,a,n,s,i,r,l,o,d,h,u,j,m;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.state,a=t.Email,n=t.Name,s=t.Phone,i=t.Fax,r=t.Address,l=t.Website,o=t.Code,d=t.UserName,h=t.Password,null!=a&&""!=a&&null!=n&&""!=n&&null!=s&&""!=s&&null!=r&&""!=r&&null!=d&&""!=d&&null!=h&&""!=h){e.next=4;break}return alert("Vui lòng nhập đầy đủ trường dữ liệu !!!"),e.abrupt("return");case 4:return u={Name:n,Email:a,Phone:s,Fax:i,Address:r,Website:l,Code:o},this.setState({isLoading:!0}),e.next=8,D()({baseURL:N.a.BASE_URL,url:N.a.ADD_COMPANY,method:"PUT",data:u});case 8:if(1!=(j=e.sent).data.is_success){e.next=18;break}return this.getData(),m={Name:n,Email:a,Phone:s,Address:r,Company_Id:j.data.data._id,Role_Id:"60e6a98b39d7243f689a123c",UserName:d,Password:h,Code:j.data.data._id,Status:"Actived"},e.next=14,D()({baseURL:N.a.BASE_URL,url:N.a.ADD_USER,method:"POST",data:m});case 14:console.log(j.data.data),this.setState({modalCom:!this.state.modalCom}),e.next=20;break;case 18:alert(j.data.message),this.setState({isLoading:!1});case 20:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"openUpdate",value:function(e){this.setState({modalCom:!this.state.modalCom,action:"update",id:e._id,Status:e.Status,DATA_COMPANY:e})}},{key:"addTransaction",value:function(){var e=Object(i.a)(c.a.mark((function e(){var t,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={company_id:this.state.DATA_COMPANY.Company_Id},e.next=3,D()({baseURL:N.a.BASE_URL,url:N.a.ADD_TRANSACTION,method:"POST",data:t});case 3:return 1!=(a=e.sent).data.is_success&&alert("C\xf3 l\u1ed7i x\u1ea3y ra khi th\xeam d\u1eef li\u1ec7u v\xe0o Transaction"),e.abrupt("return",a);case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"updateOrder",value:function(){var e=Object(i.a)(c.a.mark((function e(){var t,a,n,s,i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.state,a=t.Status,n=t.DATA_COMPANY,s={Status:a,id:this.state.id},e.next=4,D()({baseURL:N.a.BASE_URL,url:N.a.UPDATE_STATUS_ORDER,method:"POST",data:s});case 4:if(1!=(i=e.sent).data.is_success){e.next=21;break}if("SPENDING"!=n.Status){e.next=19;break}return e.next=9,this.addTransaction();case 9:if(!e.sent.data.is_success){e.next=16;break}this.getData(),this.setState({modalCom:!this.state.modalCom}),this.setState({isLoading:!0}),e.next=19;break;case 16:return e.next=18,D()({baseURL:N.a.BASE_URL,url:N.a.UPDATE_STATUS_ORDER,method:"POST",data:{Status:"SPENDING",id:this.state.id}});case 18:this.setState({isLoading:!1});case 19:e.next=23;break;case 21:alert(i.data.message),this.setState({isLoading:!1});case 23:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getBadge",value:function(e){switch(e){case"ENABLE":return"primary";default:return"success"}}},{key:"toggle",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";this.setState({modal:!this.state.modal,image:"",url:"",isActive:!1,isLoading:!1,errors:{},action:e,position:1,data:[],updated:""})}},{key:"inputChange",value:function(e){this.setState(Object(n.a)({},e.target.name,e.target.value))}},{key:"goSearch",value:function(){this.getUsers()}},{key:"actionSearch",value:function(e,t){var a=this;this.setState(Object(n.a)({},t,e.target.value),(function(){a.searchKey()}))}},{key:"resetSearch",value:function(){var e=this;this.setState({key:"",keyEmail:"",keyPhone:"",keyFax:"",keyAddress:"",keyWebsite:"",keyCode:"",keyCompany:"",keyDateCreate:new Date,keyStatus:""},(function(){e.searchKey()}))}},{key:"render",value:function(){var e=this,t=this.state,a=t.data,n=t.key,s=t.action,r=t.arrPagination,l=t.indexPage,o=t.dataOrderDetail;return this.state.isLoading?Object(A.jsx)("div",{id:"page-loading",children:Object(A.jsxs)("div",{className:"three-balls",children:[Object(A.jsx)("div",{className:"ball ball1"}),Object(A.jsx)("div",{className:"ball ball2"}),Object(A.jsx)("div",{className:"ball ball3"})]})}):Object(A.jsxs)("div",{className:"animated fadeIn",children:[Object(A.jsx)(u.a,{children:Object(A.jsxs)(j.a,{children:[Object(A.jsx)("p",{style:T.success,children:this.state.updated}),Object(A.jsx)("p",{style:T.danger,children:this.state.deleted}),Object(A.jsxs)(m.a,{children:[Object(A.jsxs)(b.a,{children:[Object(A.jsx)("i",{className:"fa fa-align-justify"})," Danh s\xe1ch giao dich (Page: ",this.state.indexPage+1,")",Object(A.jsx)("div",{style:T.tags,children:Object(A.jsx)(C.W,{children:Object(A.jsx)(C.p,{sm:"12",lg:"12",children:Object(A.jsxs)(C.W,{children:[Object(A.jsx)(C.p,{sm:"12",lg:"4",children:Object(A.jsx)("div",{children:Object(A.jsx)(p.a,{style:T.searchInput,onChange:function(t){e.actionSearch(t,"key")},name:"key",value:n,placeholder:"T\u1eeb kh\xf3a"})})}),Object(A.jsx)(C.p,{sm:"12",lg:"4",children:Object(A.jsx)(C.X,{style:T.flexOption,onChange:function(t){e.actionSearch(t,"keyStatus")},custom:!0,children:["ACTIVE","DISABLE"].map((function(e,t){return Object(A.jsx)("option",{value:e,children:e})}))})}),Object(A.jsx)(C.p,{sm:"12",lg:"4",children:Object(A.jsx)(x.a,{color:"primary",style:{width:"100%",marginTop:5},size:"sm",onClick:function(t){e.resetSearch()},children:"L\xe0m m\u1edbi t\xecm ki\u1ebfm"})})]})})})})]}),Object(A.jsx)(g.a,{children:Object(A.jsxs)("table",{ble:!0,className:"table table-hover table-outline mb-0 d-none d-sm-table",children:[Object(A.jsx)("thead",{className:"thead-light",children:Object(A.jsxs)("tr",{children:[Object(A.jsx)("th",{className:"text-center",children:"STT."}),Object(A.jsx)("th",{className:"text-center",children:"M\xe3 c\xf4ng ty"}),Object(A.jsx)("th",{className:"text-center",children:"Ng\xe0y mua"}),Object(A.jsx)("th",{className:"text-center",children:"Ng\xe0y k\xedch ho\u1ea1t"}),Object(A.jsx)("th",{className:"text-center",children:"Ng\xe0y h\u1ebft h\u1ea1n"}),Object(A.jsx)("th",{className:"text-center",children:"Tr\u1ea1ng th\xe1i"}),Object(A.jsx)("th",{className:"text-center",children:"#"})]})}),Object(A.jsx)("tbody",{children:void 0!=a?a.map((function(t,a){return Object(A.jsxs)("tr",{children:[Object(A.jsx)("td",{className:"text-center",children:a+1}),Object(A.jsx)("td",{className:"text-center",children:t.Com_Name}),Object(A.jsx)("td",{className:"text-center",children:new Date(t.Create_At).toLocaleDateString()+" "+new Date(t.Create_At).toLocaleTimeString()}),Object(A.jsx)("td",{className:"text-center",children:new Date(t.Active_Date).toLocaleDateString()+" "+new Date(t.Active_Date).toLocaleTimeString()}),Object(A.jsx)("td",{className:"text-center",children:new Date(t.End_Date).toLocaleDateString()+" "+new Date(t.End_Date).toLocaleTimeString()}),Object(A.jsx)("td",{className:"text-center",children:Object(A.jsx)(C.a,{color:e.getBadge(t.Status),children:t.Status})}),Object(A.jsx)("td",{className:"text-center",children:Object(A.jsx)(x.a,{outline:!0,color:"primary",size:"sm",onClick:function(){var a=Object(i.a)(c.a.mark((function a(n){return c.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.getOrderDetail(t._id,t.Company_Id);case 2:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}(),children:"Chi ti\u1ebft"})})]},a)})):""})]})}),Object(A.jsx)(O.a,{children:1==r.length?"":Object(A.jsx)("div",{style:{float:"right",marginRight:"10px",padding:"10px"},children:Object(A.jsx)("tr",{style:T.row,children:r.map((function(t,a){return Object(A.jsx)("td",{children:Object(A.jsx)(x.a,{style:T.pagination,color:a==l?"primary":"danger",onClick:function(t){e.setState({data:r[a],indexPage:a})},children:a+1})})}))})})})]}),Object(A.jsxs)(m.a,{children:[Object(A.jsxs)(b.a,{children:[Object(A.jsx)("i",{className:"fa fa-align-justify"})," Chi ti\u1ebft giao d\u1ecbch c\u1ee7a ",this.state.currenCom," (M\xe3 c\xf4ng ty: ",this.state.currenCom_ID,") (Page: ",this.state.indexPage+1,")"]}),Object(A.jsx)(g.a,{children:Object(A.jsxs)("table",{ble:!0,className:"table table-hover table-outline mb-0 d-none d-sm-table",children:[Object(A.jsx)("thead",{className:"thead-light",children:Object(A.jsxs)("tr",{children:[Object(A.jsx)("th",{className:"text-center",children:"STT."}),Object(A.jsx)("th",{className:"text-center",children:"M\xe3 giao d\u1ecbch"}),Object(A.jsx)("th",{className:"text-center",children:"M\xe3 ph\u1ea7n c\u1ee9ng"}),Object(A.jsx)("th",{className:"text-center",children:"Ng\xe0y k\xedch ho\u1ea1t"}),Object(A.jsx)("th",{className:"text-center",children:"Ng\xe0y h\u1ebft h\u1ea1n"}),Object(A.jsx)("th",{className:"text-center",children:"Tr\u1ea1ng th\xe1i"})]})}),Object(A.jsx)("tbody",{children:void 0!=o?o.map((function(t,a){return Object(A.jsxs)("tr",{children:[Object(A.jsx)("td",{className:"text-center",children:a+1}),Object(A.jsx)("td",{className:"text-center",children:t.Transaction_ID}),Object(A.jsx)("td",{className:"text-center",children:t.HardWard_ID}),Object(A.jsx)("td",{className:"text-center",children:new Date(t.Active_Date).toLocaleDateString()+" "+new Date(t.Active_Date).toLocaleTimeString()}),Object(A.jsx)("td",{className:"text-center",children:new Date(t.End_Date).toLocaleDateString()+" "+new Date(t.End_Date).toLocaleTimeString()}),Object(A.jsx)("td",{className:"text-center",children:Object(A.jsx)(C.a,{color:e.getBadge(t.Status),children:t.Status})})]},a)})):""})]})})]})]})}),Object(A.jsxs)(f.a,{isOpen:this.state.modalCom,className:this.props.className,children:[Object(A.jsx)(S.a,{children:"new"==this.state.action?"T\u1ea1o m\u1edbi":"C\u1eadp nh\u1eadt"}),Object(A.jsx)(v.a,{children:"new"==s?"":Object(A.jsxs)("div",{children:[Object(A.jsx)("label",{style:T.flexLabel,htmlFor:"tag",children:"Status    "}),Object(A.jsxs)("select",{style:T.flexOption,name:"Status",onChange:function(t){return e.onChange("Status",t.target.value)},children:[Object(A.jsx)("option",{value:this.state.Status,children:""==this.state.Status?" - - - - - - - - - - ":this.state.Status}),["SPENDING","COMPLETE"].map((function(e,t){return Object(A.jsx)("option",{value:e,children:e})}))]})]})}),Object(A.jsxs)(y.a,{children:[Object(A.jsx)(x.a,{color:"primary",onClick:function(t){"new"===e.state.action?e.addCompany():e.updateOrder()},disabled:this.state.isLoading,children:"Save"})," ",Object(A.jsx)(x.a,{color:"secondary",onClick:function(t){return e.toggleModal("new")},children:"Cancel"})]})]}),Object(A.jsxs)(f.a,{isOpen:this.state.modalDelete,toggle:function(t){return e.setState({modalDelete:!e.state.modalDelete,delete:null})},className:this.props.className,children:[Object(A.jsx)(S.a,{toggle:function(t){return e.setState({modalDelete:!e.state.modalDelete,delete:null})},children:"Delete"}),Object(A.jsx)(v.a,{children:Object(A.jsx)("label",{htmlFor:"tag",children:'Do you want to delete user "'.concat(this.state.delete?this.state.delete.Email:"",'" ?')})}),Object(A.jsxs)(y.a,{children:[Object(A.jsx)(x.a,{color:"primary",onClick:function(t){return e.delete()},disabled:this.state.isLoading,children:"Delete"})," ",Object(A.jsx)(x.a,{color:"secondary",onClick:function(t){return e.setState({modalDelete:!e.state.modalDelete,delete:null})},children:"Cancel"})]})]})]})}}]),a}(h.Component),T={pagination:{marginRight:"5px"},flexLabel:{width:100},flexOption:{width:160,margin:"1px"},a:{textDecoration:"none"},floatRight:{float:"right",marginTop:"3px"},spinner:{width:"30px"},center:{textAlign:"center"},tbody:{height:"380px",overflowY:"auto"},wh12:{width:"8%",float:"left",height:"80px"},wh15:{width:"15%",float:"left",height:"80px"},w5:{width:"12%",float:"left",height:"80px"},wa10:{width:"5%",float:"left",height:"80px"},row:{float:"left",width:"100%"},success:{color:"green"},danger:{color:"red"},mgl5:{marginLeft:"5px"},tags:{float:"right",marginRight:"5px"},searchInput:{width:"160px",display:"inline-block",margin:"1px"},userActive:{color:"green"},userPending:{color:"red"},nagemonNameCol:{width:"328px"},image:{width:"100px",height:"100px",borderRadius:"99999px"}};t.default=L},661:function(e,t,a){"use strict";var n=a(12),s=a(29),c=a(658),i=a(35),r=a(2),l=a.n(r),o=a(64),d=a.n(o),h=a(648),u=a.n(h),j=a(650),m={active:d.a.bool,"aria-label":d.a.string,block:d.a.bool,color:d.a.string,disabled:d.a.bool,outline:d.a.bool,tag:j.n,innerRef:d.a.oneOfType([d.a.object,d.a.func,d.a.string]),onClick:d.a.func,size:d.a.string,children:d.a.node,className:d.a.string,cssModule:d.a.object,close:d.a.bool},b=function(e){function t(t){var a;return(a=e.call(this,t)||this).onClick=a.onClick.bind(Object(c.a)(a)),a}Object(i.a)(t,e);var a=t.prototype;return a.onClick=function(e){if(!this.props.disabled)return this.props.onClick?this.props.onClick(e):void 0;e.preventDefault()},a.render=function(){var e=this.props,t=e.active,a=e["aria-label"],c=e.block,i=e.className,r=e.close,o=e.cssModule,d=e.color,h=e.outline,m=e.size,b=e.tag,p=e.innerRef,x=Object(s.a)(e,["active","aria-label","block","className","close","cssModule","color","outline","size","tag","innerRef"]);r&&"undefined"===typeof x.children&&(x.children=l.a.createElement("span",{"aria-hidden":!0},"\xd7"));var g="btn"+(h?"-outline":"")+"-"+d,O=Object(j.j)(u()(i,{close:r},r||"btn",r||g,!!m&&"btn-"+m,!!c&&"btn-block",{active:t,disabled:this.props.disabled}),o);x.href&&"button"===b&&(b="a");var f=r?"Close":null;return l.a.createElement(b,Object(n.a)({type:"button"===b&&x.onClick?"button":void 0},x,{className:O,ref:p,onClick:this.onClick,"aria-label":a||f}))},t}(l.a.Component);b.propTypes=m,b.defaultProps={color:"secondary",tag:"button"},t.a=b},894:function(e,t,a){"use strict";var n=a(12),s=a(29),c=a(2),i=a.n(c),r=a(64),l=a.n(r),o=a(648),d=a.n(o),h=a(650),u={tag:h.n,className:l.a.string,cssModule:l.a.object},j=function(e){var t=e.className,a=e.cssModule,c=e.tag,r=Object(s.a)(e,["className","cssModule","tag"]),l=Object(h.j)(d()(t,"card-footer"),a);return i.a.createElement(c,Object(n.a)({},r,{className:l}))};j.propTypes=u,j.defaultProps={tag:"div"},t.a=j}}]);
//# sourceMappingURL=40.c90bc8a8.chunk.js.map
=======
(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[40],{1294:function(e,t,a){"use strict";a.r(t);var n=a(165),s=a(113),c=a.n(s),i=a(641),r=a(166),l=a(167),o=a(169),d=a(168),h=a(2),u=a(1259),j=a(1260),m=a(1261),b=a(1262),p=a(1263),x=a(661),g=a(1264),O=a(894),f=a(1340),S=a(1267),v=a(1268),y=a(1269),C=a(640),N=(a(645),a(644)),k=a(643),D=a.n(k),A=a(17),w=new Headers,_=localStorage.getItem("auth");w.append("Authorization","Bearer "+_),w.append("Content-Type","application/json");var L=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).getData=Object(i.a)(c.a.mark((function e(){var t,a,s,i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.setState({isLoading:!0}),e.next=3,D()({baseURL:N.a.BASE_URL,url:N.a.LIST_TRANSACTION,method:"POST"});case 3:t=e.sent,a=0;case 5:if(!(a<t.data.data.length)){e.next=13;break}return e.next=8,D()({baseURL:N.a.BASE_URL,url:N.a.LIST_COMPANY,method:"POST",data:{condition:{_id:t.data.data[a].Company_Id}}});case 8:s=e.sent,t.data.data[a].Com_Name=s.data.data[0].Name;case 10:a++,e.next=5;break;case 13:n.pagination(t.data.data),n.setState({dataApi:t.data.data}),i=0,t.data.data.map((function(e){"Actived"==e.Status&&(i+=1)})),n.setState({isLoading:!1,totalActive:i});case 18:case"end":return e.stop()}}),e)}))),n.getOrderDetail=function(){var e=Object(i.a)(c.a.mark((function e(t,a){var s,i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D()({baseURL:N.a.BASE_URL,url:N.a.LIST_CHECK_OUT,method:"POST",data:{condition:{isDelete:!1,Transaction_ID:t}}});case 2:return s=e.sent,e.next=5,D()({baseURL:N.a.BASE_URL,url:N.a.LIST_COMPANY,method:"POST",data:{condition:{_id:a}}});case 5:i=e.sent,n.setState({dataOrderDetail:s.data.data,currenCom:i.data.data[0].Name,currenCom_ID:a});case 7:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),n.state={data:[],key:"",keyStatus:"",activePage:1,page:1,itemsCount:0,limit:20,totalActive:0,modalCom:!1,viewingUser:{},communities:[],updated:"",Status:"",dataApi:[],action:"new",modalDelete:!1,delete:null,arrPagination:[],indexPage:0,dataCompany:[],currentCompany:"",currentID:"",currenCom:"",currenCom_ID:"",currentSale_ID:"",curentStatus:"",dataOrderDetail:[],DATA_COMPANY:"",hiddenDetail:!0},n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=Object(i.a)(c.a.mark((function e(){var t,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(this.getData(),t=JSON.parse(localStorage.getItem("url")),a=0;a<t.length;a++)"#"+t[a].to==window.location.hash&&1==t[a].hidden&&(window.location.href="#/");case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getCompanyData",value:function(){var e=Object(i.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D()({baseURL:N.a.BASE_URL,url:N.a.LIST_COMPANY,method:"POST"});case 2:t=e.sent,this.setState({dataCompany:t.data.data});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"pagination",value:function(e){var t,a,n,s=[];for(t=0,a=e.length;t<a;t+=5)n=e.slice(t,t+5),s.push(n);this.setState({arrPagination:s,data:s[this.state.indexPage]})}},{key:"searchKey",value:function(){var e=this.state,t=e.indexPage,a=e.key,n=e.keyStatus;if(""!=a||""!=n){var s=[];this.state.dataApi.map((function(e){e.Company_Id.toLocaleUpperCase().includes(a.toLocaleUpperCase())&&e.Status.toLocaleUpperCase().includes(n.toLocaleUpperCase())&&s.push(e)}));var c=0;s.map((function(e){"Actived"==e.Status&&(c+=1)})),this.setState({data:s,totalActive:c})}else{var i=0;this.state.dataApi.map((function(e){"Actived"==e.Status&&(i+=1)})),this.setState({data:this.state.arrPagination[t],totalActive:i})}}},{key:"toggleModal",value:function(e){"new"==e&&this.setState({modalCom:!this.state.modalCom,action:e,Name:"",Email:"",Phone:"",Fax:"",Address:"",Website:"",Code:"",Status:"",username:"",password:""})}},{key:"onChange",value:function(e,t){this.setState(Object(n.a)({},e,t))}},{key:"addCompany",value:function(){var e=Object(i.a)(c.a.mark((function e(){var t,a,n,s,i,r,l,o,d,h,u,j,m;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.state,a=t.Email,n=t.Name,s=t.Phone,i=t.Fax,r=t.Address,l=t.Website,o=t.Code,d=t.UserName,h=t.Password,null!=a&&""!=a&&null!=n&&""!=n&&null!=s&&""!=s&&null!=r&&""!=r&&null!=d&&""!=d&&null!=h&&""!=h){e.next=4;break}return alert("Please fill in all the requirements"),e.abrupt("return");case 4:return u={Name:n,Email:a,Phone:s,Fax:i,Address:r,Website:l,Code:o},this.setState({isLoading:!0}),e.next=8,D()({baseURL:N.a.BASE_URL,url:N.a.ADD_COMPANY,method:"PUT",data:u});case 8:if(1!=(j=e.sent).data.is_success){e.next=18;break}return this.getData(),m={Name:n,Email:a,Phone:s,Address:r,Company_Id:j.data.data._id,Role_Id:"60e6a98b39d7243f689a123c",UserName:d,Password:h,Code:j.data.data._id,Status:"Actived"},e.next=14,D()({baseURL:N.a.BASE_URL,url:N.a.ADD_USER,method:"POST",data:m});case 14:console.log(j.data.data),this.setState({modalCom:!this.state.modalCom}),e.next=20;break;case 18:alert(j.data.message),this.setState({isLoading:!1});case 20:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"openUpdate",value:function(e){this.setState({modalCom:!this.state.modalCom,action:"update",id:e._id,Status:e.Status,DATA_COMPANY:e})}},{key:"addTransaction",value:function(){var e=Object(i.a)(c.a.mark((function e(){var t,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={company_id:this.state.DATA_COMPANY.Company_Id},e.next=3,D()({baseURL:N.a.BASE_URL,url:N.a.ADD_TRANSACTION,method:"POST",data:t});case 3:return 1!=(a=e.sent).data.is_success&&alert("C\xf3 l\u1ed7i x\u1ea3y ra khi th\xeam d\u1eef li\u1ec7u v\xe0o Transaction"),e.abrupt("return",a);case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"updateOrder",value:function(){var e=Object(i.a)(c.a.mark((function e(){var t,a,n,s,i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.state,a=t.Status,n=t.DATA_COMPANY,s={Status:a,id:this.state.id},e.next=4,D()({baseURL:N.a.BASE_URL,url:N.a.UPDATE_STATUS_ORDER,method:"POST",data:s});case 4:if(1!=(i=e.sent).data.is_success){e.next=21;break}if("SPENDING"!=n.Status){e.next=19;break}return e.next=9,this.addTransaction();case 9:if(!e.sent.data.is_success){e.next=16;break}this.getData(),this.setState({modalCom:!this.state.modalCom}),this.setState({isLoading:!0}),e.next=19;break;case 16:return e.next=18,D()({baseURL:N.a.BASE_URL,url:N.a.UPDATE_STATUS_ORDER,method:"POST",data:{Status:"SPENDING",id:this.state.id}});case 18:this.setState({isLoading:!1});case 19:e.next=23;break;case 21:alert(i.data.message),this.setState({isLoading:!1});case 23:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getBadge",value:function(e){switch(e){case"ENABLE":return"primary";default:return"success"}}},{key:"toggle",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";this.setState({modal:!this.state.modal,image:"",url:"",isActive:!1,isLoading:!1,errors:{},action:e,position:1,data:[],updated:""})}},{key:"inputChange",value:function(e){this.setState(Object(n.a)({},e.target.name,e.target.value))}},{key:"goSearch",value:function(){this.getUsers()}},{key:"actionSearch",value:function(e,t){var a=this;this.setState(Object(n.a)({},t,e.target.value),(function(){a.searchKey()}))}},{key:"resetSearch",value:function(){var e=this;this.setState({key:"",keyEmail:"",keyPhone:"",keyFax:"",keyAddress:"",keyWebsite:"",keyCode:"",keyCompany:"",keyDateCreate:new Date,keyStatus:""},(function(){e.searchKey()}))}},{key:"render",value:function(){var e=this,t=this.state,a=t.data,n=t.key,s=t.action,r=t.arrPagination,l=t.indexPage,o=t.dataOrderDetail;return this.state.isLoading?Object(A.jsx)("div",{id:"page-loading",children:Object(A.jsxs)("div",{className:"three-balls",children:[Object(A.jsx)("div",{className:"ball ball1"}),Object(A.jsx)("div",{className:"ball ball2"}),Object(A.jsx)("div",{className:"ball ball3"})]})}):Object(A.jsxs)("div",{className:"animated fadeIn",children:[Object(A.jsx)(u.a,{children:Object(A.jsxs)(j.a,{children:[Object(A.jsx)("p",{style:T.success,children:this.state.updated}),Object(A.jsx)("p",{style:T.danger,children:this.state.deleted}),Object(A.jsxs)(m.a,{children:[Object(A.jsxs)(b.a,{children:[Object(A.jsx)("i",{className:"fa fa-align-justify"})," Danh s\xe1ch giao dich (Page: ",this.state.indexPage+1,")",Object(A.jsx)("div",{style:T.tags,children:Object(A.jsx)(C.W,{children:Object(A.jsx)(C.p,{sm:"12",lg:"12",children:Object(A.jsxs)(C.W,{children:[Object(A.jsx)(C.p,{sm:"12",lg:"4",children:Object(A.jsx)("div",{children:Object(A.jsx)(p.a,{style:T.searchInput,onChange:function(t){e.actionSearch(t,"key")},name:"key",value:n,placeholder:"T\u1eeb kh\xf3a"})})}),Object(A.jsx)(C.p,{sm:"12",lg:"4",children:Object(A.jsx)(C.X,{style:T.flexOption,onChange:function(t){e.actionSearch(t,"keyStatus")},custom:!0,children:["ACTIVE","DISABLE"].map((function(e,t){return Object(A.jsx)("option",{value:e,children:e})}))})}),Object(A.jsx)(C.p,{sm:"12",lg:"4",children:Object(A.jsx)(x.a,{color:"primary",style:{width:"100%",marginTop:5},size:"sm",onClick:function(t){e.resetSearch()},children:"L\xe0m m\u1edbi t\xecm ki\u1ebfm"})})]})})})})]}),Object(A.jsx)(g.a,{children:Object(A.jsxs)("table",{ble:!0,className:"table table-hover table-outline mb-0 d-none d-sm-table",children:[Object(A.jsx)("thead",{className:"thead-light",children:Object(A.jsxs)("tr",{children:[Object(A.jsx)("th",{className:"text-center",children:"STT."}),Object(A.jsx)("th",{className:"text-center",children:"M\xe3 c\xf4ng ty"}),Object(A.jsx)("th",{className:"text-center",children:"Ng\xe0y mua"}),Object(A.jsx)("th",{className:"text-center",children:"Ng\xe0y k\xedch ho\u1ea1t"}),Object(A.jsx)("th",{className:"text-center",children:"Ng\xe0y h\u1ebft h\u1ea1n"}),Object(A.jsx)("th",{className:"text-center",children:"Tr\u1ea1ng th\xe1i"}),Object(A.jsx)("th",{className:"text-center",children:"#"})]})}),Object(A.jsx)("tbody",{children:void 0!=a?a.map((function(t,a){return Object(A.jsxs)("tr",{children:[Object(A.jsx)("td",{className:"text-center",children:a+1}),Object(A.jsx)("td",{className:"text-center",children:t.Com_Name}),Object(A.jsx)("td",{className:"text-center",children:new Date(t.Create_At).toLocaleDateString()+" "+new Date(t.Create_At).toLocaleTimeString()}),Object(A.jsx)("td",{className:"text-center",children:new Date(t.Active_Date).toLocaleDateString()+" "+new Date(t.Active_Date).toLocaleTimeString()}),Object(A.jsx)("td",{className:"text-center",children:new Date(t.End_Date).toLocaleDateString()+" "+new Date(t.End_Date).toLocaleTimeString()}),Object(A.jsx)("td",{className:"text-center",children:Object(A.jsx)(C.a,{color:e.getBadge(t.Status),children:t.Status})}),Object(A.jsx)("td",{className:"text-center",children:Object(A.jsx)(x.a,{outline:!0,color:"primary",size:"sm",onClick:function(){var a=Object(i.a)(c.a.mark((function a(n){return c.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.getOrderDetail(t._id,t.Company_Id);case 2:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}(),children:"Chi ti\u1ebft"})})]},a)})):""})]})}),Object(A.jsx)(O.a,{children:1==r.length?"":Object(A.jsx)("div",{style:{float:"right",marginRight:"10px",padding:"10px"},children:Object(A.jsx)("tr",{style:T.row,children:r.map((function(t,a){return Object(A.jsx)("td",{children:Object(A.jsx)(x.a,{style:T.pagination,color:a==l?"primary":"danger",onClick:function(t){e.setState({data:r[a],indexPage:a})},children:a+1})})}))})})})]}),Object(A.jsxs)(m.a,{children:[Object(A.jsxs)(b.a,{children:[Object(A.jsx)("i",{className:"fa fa-align-justify"})," Chi ti\u1ebft giao d\u1ecbch c\u1ee7a ",this.state.currenCom," (M\xe3 c\xf4ng ty: ",this.state.currenCom_ID,") (Page: ",this.state.indexPage+1,")"]}),Object(A.jsx)(g.a,{children:Object(A.jsxs)("table",{ble:!0,className:"table table-hover table-outline mb-0 d-none d-sm-table",children:[Object(A.jsx)("thead",{className:"thead-light",children:Object(A.jsxs)("tr",{children:[Object(A.jsx)("th",{className:"text-center",children:"STT."}),Object(A.jsx)("th",{className:"text-center",children:"M\xe3 giao d\u1ecbch"}),Object(A.jsx)("th",{className:"text-center",children:"M\xe3 ph\u1ea7n c\u1ee9ng"}),Object(A.jsx)("th",{className:"text-center",children:"Ng\xe0y k\xedch ho\u1ea1t"}),Object(A.jsx)("th",{className:"text-center",children:"Ng\xe0y h\u1ebft h\u1ea1n"}),Object(A.jsx)("th",{className:"text-center",children:"Tr\u1ea1ng th\xe1i"})]})}),Object(A.jsx)("tbody",{children:void 0!=o?o.map((function(t,a){return Object(A.jsxs)("tr",{children:[Object(A.jsx)("td",{className:"text-center",children:a+1}),Object(A.jsx)("td",{className:"text-center",children:t.Transaction_ID}),Object(A.jsx)("td",{className:"text-center",children:t.HardWard_ID}),Object(A.jsx)("td",{className:"text-center",children:new Date(t.Active_Date).toLocaleDateString()+" "+new Date(t.Active_Date).toLocaleTimeString()}),Object(A.jsx)("td",{className:"text-center",children:new Date(t.End_Date).toLocaleDateString()+" "+new Date(t.End_Date).toLocaleTimeString()}),Object(A.jsx)("td",{className:"text-center",children:Object(A.jsx)(C.a,{color:e.getBadge(t.Status),children:t.Status})})]},a)})):""})]})})]})]})}),Object(A.jsxs)(f.a,{isOpen:this.state.modalCom,className:this.props.className,children:[Object(A.jsx)(S.a,{children:"new"==this.state.action?"T\u1ea1o m\u1edbi":"C\u1eadp nh\u1eadt"}),Object(A.jsx)(v.a,{children:"new"==s?"":Object(A.jsxs)("div",{children:[Object(A.jsx)("label",{style:T.flexLabel,htmlFor:"tag",children:"Status    "}),Object(A.jsxs)("select",{style:T.flexOption,name:"Status",onChange:function(t){return e.onChange("Status",t.target.value)},children:[Object(A.jsx)("option",{value:this.state.Status,children:""==this.state.Status?" - - - - - - - - - - ":this.state.Status}),["SPENDING","COMPLETE"].map((function(e,t){return Object(A.jsx)("option",{value:e,children:e})}))]})]})}),Object(A.jsxs)(y.a,{children:[Object(A.jsx)(x.a,{color:"primary",onClick:function(t){"new"===e.state.action?e.addCompany():e.updateOrder()},disabled:this.state.isLoading,children:"Save"})," ",Object(A.jsx)(x.a,{color:"secondary",onClick:function(t){return e.toggleModal("new")},children:"Cancel"})]})]}),Object(A.jsxs)(f.a,{isOpen:this.state.modalDelete,toggle:function(t){return e.setState({modalDelete:!e.state.modalDelete,delete:null})},className:this.props.className,children:[Object(A.jsx)(S.a,{toggle:function(t){return e.setState({modalDelete:!e.state.modalDelete,delete:null})},children:"Delete"}),Object(A.jsx)(v.a,{children:Object(A.jsx)("label",{htmlFor:"tag",children:'Do you want to delete user "'.concat(this.state.delete?this.state.delete.Email:"",'" ?')})}),Object(A.jsxs)(y.a,{children:[Object(A.jsx)(x.a,{color:"primary",onClick:function(t){return e.delete()},disabled:this.state.isLoading,children:"Delete"})," ",Object(A.jsx)(x.a,{color:"secondary",onClick:function(t){return e.setState({modalDelete:!e.state.modalDelete,delete:null})},children:"Cancel"})]})]})]})}}]),a}(h.Component),T={pagination:{marginRight:"5px"},flexLabel:{width:100},flexOption:{width:160,margin:"1px"},a:{textDecoration:"none"},floatRight:{float:"right",marginTop:"3px"},spinner:{width:"30px"},center:{textAlign:"center"},tbody:{height:"380px",overflowY:"auto"},wh12:{width:"8%",float:"left",height:"80px"},wh15:{width:"15%",float:"left",height:"80px"},w5:{width:"12%",float:"left",height:"80px"},wa10:{width:"5%",float:"left",height:"80px"},row:{float:"left",width:"100%"},success:{color:"green"},danger:{color:"red"},mgl5:{marginLeft:"5px"},tags:{float:"right",marginRight:"5px"},searchInput:{width:"160px",display:"inline-block",margin:"1px"},userActive:{color:"green"},userPending:{color:"red"},nagemonNameCol:{width:"328px"},image:{width:"100px",height:"100px",borderRadius:"99999px"}};t.default=L},661:function(e,t,a){"use strict";var n=a(12),s=a(29),c=a(658),i=a(35),r=a(2),l=a.n(r),o=a(64),d=a.n(o),h=a(648),u=a.n(h),j=a(650),m={active:d.a.bool,"aria-label":d.a.string,block:d.a.bool,color:d.a.string,disabled:d.a.bool,outline:d.a.bool,tag:j.n,innerRef:d.a.oneOfType([d.a.object,d.a.func,d.a.string]),onClick:d.a.func,size:d.a.string,children:d.a.node,className:d.a.string,cssModule:d.a.object,close:d.a.bool},b=function(e){function t(t){var a;return(a=e.call(this,t)||this).onClick=a.onClick.bind(Object(c.a)(a)),a}Object(i.a)(t,e);var a=t.prototype;return a.onClick=function(e){if(!this.props.disabled)return this.props.onClick?this.props.onClick(e):void 0;e.preventDefault()},a.render=function(){var e=this.props,t=e.active,a=e["aria-label"],c=e.block,i=e.className,r=e.close,o=e.cssModule,d=e.color,h=e.outline,m=e.size,b=e.tag,p=e.innerRef,x=Object(s.a)(e,["active","aria-label","block","className","close","cssModule","color","outline","size","tag","innerRef"]);r&&"undefined"===typeof x.children&&(x.children=l.a.createElement("span",{"aria-hidden":!0},"\xd7"));var g="btn"+(h?"-outline":"")+"-"+d,O=Object(j.j)(u()(i,{close:r},r||"btn",r||g,!!m&&"btn-"+m,!!c&&"btn-block",{active:t,disabled:this.props.disabled}),o);x.href&&"button"===b&&(b="a");var f=r?"Close":null;return l.a.createElement(b,Object(n.a)({type:"button"===b&&x.onClick?"button":void 0},x,{className:O,ref:p,onClick:this.onClick,"aria-label":a||f}))},t}(l.a.Component);b.propTypes=m,b.defaultProps={color:"secondary",tag:"button"},t.a=b},894:function(e,t,a){"use strict";var n=a(12),s=a(29),c=a(2),i=a.n(c),r=a(64),l=a.n(r),o=a(648),d=a.n(o),h=a(650),u={tag:h.n,className:l.a.string,cssModule:l.a.object},j=function(e){var t=e.className,a=e.cssModule,c=e.tag,r=Object(s.a)(e,["className","cssModule","tag"]),l=Object(h.j)(d()(t,"card-footer"),a);return i.a.createElement(c,Object(n.a)({},r,{className:l}))};j.propTypes=u,j.defaultProps={tag:"div"},t.a=j}}]);
//# sourceMappingURL=40.965ad1c5.chunk.js.map
>>>>>>> 572f03dd0d699b5cbe95000e46f393057d9e71d9:build/static/js/40.965ad1c5.chunk.js
