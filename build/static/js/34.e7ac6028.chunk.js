(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[34],{1281:function(e,t,a){"use strict";a.r(t),function(e){var n=a(165),s=a(113),i=a.n(s),r=a(641),l=a(166),o=a(167),c=a(169),d=a(168),h=a(2),u=a(1259),p=a(1260),b=a(1261),m=a(1262),j=a(1263),f=a(661),g=a(1264),v=a(730),x=a(1340),O=a(1267),y=a(1268),C=a(1269),w=(a(646),a(665),a(644)),k=a(652),S=a(643),A=a.n(S),E=a(17),U=new Headers,D=localStorage.getItem("auth");U.append("Authorization","Bearer "+D),U.append("Content-Type","application/json");var N=function(t){Object(c.a)(s,t);var a=Object(d.a)(s);function s(e){var t;return Object(l.a)(this,s),(t=a.call(this,e)).getData=Object(r.a)(i.a.mark((function e(){var a,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.setState({isLoading:!0}),e.next=3,A()({baseURL:w.a.BASE_URL,url:w.a.LIST_KEYORDER,method:"GET"});case 3:a=e.sent,t.pagination(a.data.data),t.setState({dataApi:a.data.data}),n=0,a.data.data.map((function(e){"Actived"==e.Status&&(n+=1)})),t.setState({isLoading:!1,totalActive:n});case 9:case"end":return e.stop()}}),e)}))),t.openDelete=function(e){t.setState({modalDelete:!t.state.modalDelete,delete:e})},t.state={data:[],key:"",activePage:1,page:1,itemsCount:0,limit:20,totalActive:0,modalCom:!1,viewingUser:{},communities:[],updated:"",dataApi:[],action:"new",UserName:"",Email:"",Company_Id:"",Address:"",Phone:"",Status:"",modalDelete:!1,delete:null,dataCompany:[],currentCompany:"",arrPagination:[],indexPage:0},t}return Object(o.a)(s,[{key:"componentDidMount",value:function(){var e=Object(r.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.getData();case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"pagination",value:function(e){var t,a,n,s=[];for(t=0,a=e.length;t<a;t+=5)n=e.slice(t,t+5),s.push(n);this.setState({arrPagination:s,data:s[this.state.indexPage]})}},{key:"searchKey",value:function(e){var t=this.state.indexPage;if(this.setState({key:e}),""!=e){var a=[];this.state.dataApi.map((function(t){(t.UserName.toLocaleUpperCase().includes(e.toLocaleUpperCase())||t.Email.toLocaleUpperCase().includes(e.toLocaleUpperCase()))&&a.push(t)}));var n=0;a.map((function(e){"Actived"==e.Status&&(n+=1)})),this.setState({data:a,totalActive:n})}else{var s=0;this.state.dataApi.map((function(e){"Actived"==e.Status&&(s+=1)})),this.setState({data:this.state.arrPagination[t],totalActive:s})}}},{key:"toggleModal",value:function(){var e=Object(r.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getCompanyData();case 2:"new"==t&&this.setState({modalCom:!this.state.modalCom,action:t,UserName:"",Email:"",Company_Id:"",Address:"",Phone:"",Status:""});case 3:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"onChange",value:function(e,t){this.setState(Object(n.a)({},e,t))}},{key:"addUser",value:function(){var e=Object(r.a)(i.a.mark((function e(){var t,a,n,s,r,l,o,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.state,a=t.UserName,n=t.Company_Id,s=t.Email,r=t.Address,l=t.Phone,null!=a&&""!=a&&null!=s&&""!=s&&null!=r&&""!=r&&null!=l&&""!=l){e.next=4;break}return alert("Vui lòng nhập đầy đủ trường dữ liệu !!!"),e.abrupt("return");case 4:return o={UserName:a,Company_Id:n,Email:s,Address:r,Phone:l},this.setState({isLoading:!0}),e.next=8,A()({baseURL:w.a.BASE_URL,url:w.a.ADD_KEYORDER,method:"PUT",data:o});case 8:1==(c=e.sent).data.is_success?(this.getData(),this.setState({modalCom:!this.state.modalCom})):(alert(c.data.message),this.setState({isLoading:!1}));case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"openUpdate",value:function(){var e=Object(r.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getCompanyData(t.Company_Id);case 2:this.setState({modalCom:!this.state.modalCom,action:"update",UserName:t.UserName,Company_Id:t.Company_Id,Email:t.Email,Address:t.Address,Phone:t.Phone,id:t._id,Status:t.Status});case 3:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"updateUser",value:function(){var e=Object(r.a)(i.a.mark((function e(){var t,a,n,s,r,l,o,c,d;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.state,a=t.UserName,n=t.Company_Id,s=t.Email,r=t.Address,l=t.Phone,o=t.Status,null!=a&&""!=a&&null!=s&&""!=s&&null!=r&&""!=r&&null!=l&&""!=l){e.next=4;break}return alert("Vui lòng nhập đầy đủ trường dữ liệu !!!"),e.abrupt("return");case 4:return c={UserName:a,Company_Id:n,Email:s,Address:r,Phone:l,id:this.state.id,Status:o},this.setState({isLoading:!0}),e.next=8,A()({baseURL:w.a.BASE_URL,url:w.a.UPDATE_KEYORDER,method:"POST",data:c});case 8:1==(d=e.sent).data.is_success?(this.getData(),this.setState({modalCom:!this.state.modalCom})):(alert(d.data.message),this.setState({isLoading:!1}));case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"delete",value:function(){var e=Object(r.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({isLoading:!0}),e.next=3,A()({baseURL:w.a.BASE_URL,url:w.a.DELETE_KEYORDER,method:"DELETE",data:{id:this.state.delete._id}});case 3:1==(t=e.sent).data.is_success?(this.getData(),this.setState({modalDelete:!this.state.modalDelete,delete:null})):(alert(t.data.message),this.setState({isLoading:!1}));case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getUsers",value:function(){var t=this,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,n=this.state.limit,s=this.state.key||"",i={method:"GET",headers:U};fetch(e.BASE_URL+"/admin/users?key="+s+"&page="+a+"&limit="+n,i).then((function(e){e.json().then((function(e){t.setState({data:e.data,itemsCount:e.total,activePage:a,totalActive:e.totalActive,updated:""})}))})).catch(console.log)}},{key:"getCompanyData",value:function(){var e=Object(r.a)(i.a.mark((function e(t){var a,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A()({baseURL:w.a.BASE_URL,url:w.a.LIST_COMPANY,method:"POST"});case 2:if(a=e.sent,""==t&&void 0==t){e.next=8;break}return e.next=6,A()({baseURL:w.a.BASE_URL,url:w.a.LIST_COMPANY_WITH_ID+t,method:"POST"});case 6:null==(n=e.sent).data.data&&void 0==n.data.data||this.setState({currentCompany:n.data.data.Name});case 8:this.setState({dataCompany:a.data.data});case 9:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"inputChange",value:function(e){this.setState(Object(n.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){var e=this,t=this.state,a=t.data,n=t.key,s=t.dataCompany,l=t.currentCompany,o=t.action,c=t.arrPagination,d=t.indexPage;return this.state.isLoading?Object(E.jsx)("div",{id:"page-loading",children:Object(E.jsxs)("div",{className:"three-balls",children:[Object(E.jsx)("div",{className:"ball ball1"}),Object(E.jsx)("div",{className:"ball ball2"}),Object(E.jsx)("div",{className:"ball ball3"})]})}):Object(E.jsxs)("div",{className:"animated fadeIn",children:[Object(E.jsx)(u.a,{children:Object(E.jsxs)(p.a,{children:[Object(E.jsx)("p",{style:P.success,children:this.state.updated}),Object(E.jsx)("p",{style:P.danger,children:this.state.deleted}),Object(E.jsxs)(b.a,{children:[Object(E.jsxs)(m.a,{children:[Object(E.jsx)("i",{className:"fa fa-align-justify"})," KEY ORDER (Total: ",void 0!=this.state.data||null!=this.state.data?this.state.data.length:0,", Active: ",this.state.totalActive,", Page: ",this.state.indexPage+1,")",Object(E.jsx)("div",{style:P.tags,children:Object(E.jsxs)("div",{children:[Object(E.jsx)(j.a,{style:P.searchInput,onChange:function(t){return e.searchKey(t.target.value)},name:"key",value:n,placeholder:"Search"}),Object(E.jsx)(f.a,{outline:!0,color:"primary",style:P.floatRight,size:"sm",onClick:function(){var t=Object(r.a)(i.a.mark((function t(a){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.toggleModal("new");case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),children:"Add"})]})})]}),Object(E.jsx)(g.a,{children:Object(E.jsxs)(v.a,{responsive:!0,children:[Object(E.jsx)("thead",{children:Object(E.jsxs)("tr",{children:[Object(E.jsx)("th",{style:P.wa10,children:"No."}),Object(E.jsx)("th",{style:P.wh12,children:"UserName"}),Object(E.jsx)("th",{style:P.wh15,children:"Company ID"}),Object(E.jsx)("th",{style:P.wh15,children:"Email"}),Object(E.jsx)("th",{style:P.wh15,children:"Address"}),Object(E.jsx)("th",{style:P.wh12,children:"Phone"}),Object(E.jsx)("th",{style:P.wh12,children:"Status"}),Object(E.jsx)("th",{style:P.w5,children:"Action"})]})}),Object(E.jsx)("tbody",{children:void 0!=a?a.map((function(t,a){return Object(E.jsxs)("tr",{style:P.row,children:[Object(E.jsx)("td",{style:P.wa10,children:a+1}),Object(E.jsx)("td",{style:P.wh12,children:t.UserName}),Object(E.jsx)("td",{style:P.wh15,children:t.Company_Id}),Object(E.jsx)("td",{style:P.wh15,children:t.Email}),Object(E.jsx)("td",{style:P.wh15,children:t.Address}),Object(E.jsx)("td",{style:P.wh12,children:t.Phone}),Object(E.jsx)("td",{style:P.wh12,children:t.Status}),Object(E.jsxs)("td",{style:P.w5,children:[Object(E.jsx)(f.a,{style:P.mgl5,outline:!0,color:"primary",size:"sm",onClick:function(){var a=Object(r.a)(i.a.mark((function a(n){return i.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.openUpdate(t);case 2:return a.abrupt("return",a.sent);case 3:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}(),children:"Update"})," ",Object(E.jsx)(f.a,{outline:!0,color:"danger",size:"sm",onClick:function(a){e.openDelete(t)},children:"Delete"})]})]},a)})):""})]})})]}),1==c.length?"":Object(E.jsx)("div",{style:{float:"right",marginRight:"10px",padding:"10px"},children:Object(E.jsx)("tr",{style:P.row,children:c.map((function(t,a){return Object(E.jsx)("td",{children:Object(E.jsx)(f.a,{style:P.pagination,color:a==d?"primary":"danger",onClick:function(t){e.setState({data:c[a],indexPage:a})},children:a+1})})}))})})]})}),Object(E.jsxs)(x.a,{isOpen:this.state.modalCom,className:this.props.className,children:[Object(E.jsx)(O.a,{children:"new"==this.state.action?"T\u1ea1o m\u1edbi":"C\u1eadp nh\u1eadt"}),Object(E.jsxs)(y.a,{children:[Object(E.jsx)(k.a,{field:"UserName",label:"UserName",value:this.state.UserName,placeholder:"UserName",onChange:function(t){return e.onChange("UserName",t.target.value)}}),Object(E.jsxs)("div",{children:[Object(E.jsx)("label",{style:P.flexLabel,htmlFor:"tag",children:"Company:    "}),Object(E.jsxs)("select",{style:P.flexOption,name:"Company_Id",onChange:function(t){return e.onChange("Company_Id",t.target.value)},children:[Object(E.jsx)("option",{value:this.state.Company_Id,children:"-----"}),s.map((function(e,t){return e.Name==l?Object(E.jsx)("option",{selected:!0,value:e._id,children:e.Name}):Object(E.jsx)("option",{value:e._id,children:e.Name})}))]})]}),Object(E.jsx)(k.a,{field:"Email",label:"Email",value:this.state.Email,placeholder:"Email",onChange:function(t){return e.onChange("Email",t.target.value)}}),Object(E.jsx)(k.a,{field:"Address",label:"Address",value:this.state.Address,placeholder:"Address",onChange:function(t){return e.onChange("Address",t.target.value)}}),Object(E.jsx)(k.a,{field:"Phone",label:"Phone",value:this.state.Phone,placeholder:"Phone",onChange:function(t){return e.onChange("Phone",t.target.value)}}),"new"==o?"":Object(E.jsxs)("div",{children:[Object(E.jsx)("label",{style:P.flexLabel,htmlFor:"tag",children:"Status:"}),Object(E.jsxs)("select",{style:P.flexOption,name:"Status",onChange:function(t){return e.onChange("Status",t.target.value)},children:[Object(E.jsx)("option",{value:this.state.Status,children:""==this.state.Status?" - - - - - - - - - - ":this.state.Status}),Object(E.jsx)("option",{value:"Actived",children:"Actived"}),Object(E.jsx)("option",{value:"Locked",children:"Locked"}),Object(E.jsx)("option",{value:"Deactived",children:"Deactived"})]})]})]}),Object(E.jsxs)(C.a,{children:[Object(E.jsx)(f.a,{color:"primary",onClick:function(t){"new"===e.state.action?e.addUser():e.updateUser()},disabled:this.state.isLoading,children:"Save"})," ",Object(E.jsx)(f.a,{color:"secondary",onClick:function(t){return e.toggleModal("new")},children:"Cancel"})]})]}),Object(E.jsxs)(x.a,{isOpen:this.state.modalDelete,toggle:function(t){return e.setState({modalDelete:!e.state.modalDelete,delete:null})},className:this.props.className,children:[Object(E.jsx)(O.a,{toggle:function(t){return e.setState({modalDelete:!e.state.modalDelete,delete:null})},children:"Delete"}),Object(E.jsx)(y.a,{children:Object(E.jsx)("label",{htmlFor:"tag",children:'Do you want to delete user "'.concat(this.state.delete?this.state.delete.Email:"",'" ?')})}),Object(E.jsxs)(C.a,{children:[Object(E.jsx)(f.a,{color:"primary",onClick:function(t){return e.delete()},disabled:this.state.isLoading,children:"Delete"})," ",Object(E.jsx)(f.a,{color:"secondary",onClick:function(t){return e.setState({modalDelete:!e.state.modalDelete,delete:null})},children:"Cancel"})]})]})]})}}]),s}(h.Component),P={datePicker:{marginBottom:20},wa10:{width:"5%",float:"left",height:"80px"},pagination:{marginRight:"5px"},flexLabel:{width:100},flexOption:{width:300},a:{textDecoration:"none"},floatRight:{float:"right",marginTop:"3px"},spinner:{width:"30px"},center:{textAlign:"center"},tbody:{height:"380px",overflowY:"auto"},wh12:{width:"10%",float:"left",height:"80px"},wh15:{width:"16%",float:"left",height:"80px"},w5:{width:"12%",float:"left",height:"80px"},row:{float:"left",width:"100%"},success:{color:"green"},danger:{color:"red"},mgl5:{marginLeft:"5px"},tags:{float:"right",marginRight:"5px",width:"250px"},searchInput:{width:"190px",display:"inline-block"},userActive:{color:"green"},userPending:{color:"red"},nagemonNameCol:{width:"328px"},image:{width:"100px",height:"100px",borderRadius:"99999px"}};t.default=N}.call(this,a(114))},661:function(e,t,a){"use strict";var n=a(12),s=a(29),i=a(658),r=a(35),l=a(2),o=a.n(l),c=a(64),d=a.n(c),h=a(648),u=a.n(h),p=a(650),b={active:d.a.bool,"aria-label":d.a.string,block:d.a.bool,color:d.a.string,disabled:d.a.bool,outline:d.a.bool,tag:p.n,innerRef:d.a.oneOfType([d.a.object,d.a.func,d.a.string]),onClick:d.a.func,size:d.a.string,children:d.a.node,className:d.a.string,cssModule:d.a.object,close:d.a.bool},m=function(e){function t(t){var a;return(a=e.call(this,t)||this).onClick=a.onClick.bind(Object(i.a)(a)),a}Object(r.a)(t,e);var a=t.prototype;return a.onClick=function(e){if(!this.props.disabled)return this.props.onClick?this.props.onClick(e):void 0;e.preventDefault()},a.render=function(){var e=this.props,t=e.active,a=e["aria-label"],i=e.block,r=e.className,l=e.close,c=e.cssModule,d=e.color,h=e.outline,b=e.size,m=e.tag,j=e.innerRef,f=Object(s.a)(e,["active","aria-label","block","className","close","cssModule","color","outline","size","tag","innerRef"]);l&&"undefined"===typeof f.children&&(f.children=o.a.createElement("span",{"aria-hidden":!0},"\xd7"));var g="btn"+(h?"-outline":"")+"-"+d,v=Object(p.j)(u()(r,{close:l},l||"btn",l||g,!!b&&"btn-"+b,!!i&&"btn-block",{active:t,disabled:this.props.disabled}),c);f.href&&"button"===m&&(m="a");var x=l?"Close":null;return o.a.createElement(m,Object(n.a)({type:"button"===m&&f.onClick?"button":void 0},f,{className:v,ref:j,onClick:this.onClick,"aria-label":a||x}))},t}(o.a.Component);m.propTypes=b,m.defaultProps={color:"secondary",tag:"button"},t.a=m},730:function(e,t,a){"use strict";var n=a(12),s=a(29),i=a(2),r=a.n(i),l=a(64),o=a.n(l),c=a(648),d=a.n(c),h=a(650),u={className:o.a.string,cssModule:o.a.object,size:o.a.string,bordered:o.a.bool,borderless:o.a.bool,striped:o.a.bool,dark:o.a.bool,hover:o.a.bool,responsive:o.a.oneOfType([o.a.bool,o.a.string]),tag:h.n,responsiveTag:h.n,innerRef:o.a.oneOfType([o.a.func,o.a.string,o.a.object])},p=function(e){var t=e.className,a=e.cssModule,i=e.size,l=e.bordered,o=e.borderless,c=e.striped,u=e.dark,p=e.hover,b=e.responsive,m=e.tag,j=e.responsiveTag,f=e.innerRef,g=Object(s.a)(e,["className","cssModule","size","bordered","borderless","striped","dark","hover","responsive","tag","responsiveTag","innerRef"]),v=Object(h.j)(d()(t,"table",!!i&&"table-"+i,!!l&&"table-bordered",!!o&&"table-borderless",!!c&&"table-striped",!!u&&"table-dark",!!p&&"table-hover"),a),x=r.a.createElement(m,Object(n.a)({},g,{ref:f,className:v}));if(b){var O=Object(h.j)(!0===b?"table-responsive":"table-responsive-"+b,a);return r.a.createElement(j,{className:O},x)}return x};p.propTypes=u,p.defaultProps={tag:"table",responsiveTag:"div"},t.a=p}}]);
//# sourceMappingURL=34.e7ac6028.chunk.js.map
