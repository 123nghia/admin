(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[34],{1283:function(e,t,a){"use strict";a.r(t),function(e){var n=a(169),s=a(113),i=a.n(s),r=a(641),o=a(165),c=a(166),l=a(168),d=a(167),u=a(2),h=a(1258),p=a(1259),b=a(1260),j=a(1261),f=a(1262),m=a(660),g=a(1263),v=a(729),x=a(1336),O=a(1266),y=a(1267),k=a(1268),w=(a(646),a(644)),S=a(652),C=a(643),D=a.n(C),L=a(17),N=new Headers,A=localStorage.getItem("auth");N.append("Authorization","Bearer "+A),N.append("Content-Type","application/json");var R=function(t){Object(l.a)(s,t);var a=Object(d.a)(s);function s(e){var t;return Object(o.a)(this,s),(t=a.call(this,e)).getData=Object(r.a)(i.a.mark((function e(){var a,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.setState({isLoading:!0}),e.next=3,D()({baseURL:w.a.BASE_URL,url:w.a.LIST_ROLE,method:"GET",headers:t.state.token});case 3:a=e.sent,t.pagination(a.data.data),t.setState({dataApi:a.data.data}),n=0,a.data.data.map((function(e){"Actived"==e.Status&&(n+=1)})),t.setState({isLoading:!1,totalActive:n});case 9:case"end":return e.stop()}}),e)}))),t.openDelete=function(e){t.setState({modalDelete:!t.state.modalDelete,delete:e})},t.state={data:[],key:"",activePage:1,page:1,itemsCount:0,limit:20,totalActive:0,modalCom:!1,viewingUser:{},communities:[],updated:"",dataApi:[],action:"new",Name:"",Status:"",modalDelete:!1,delete:null,arrPagination:[],indexPage:0,token:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}},t}return Object(c.a)(s,[{key:"componentDidMount",value:function(){var e=Object(r.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.getData();case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"pagination",value:function(e){var t,a,n,s=[];for(t=0,a=e.length;t<a;t+=5)n=e.slice(t,t+5),s.push(n);this.setState({arrPagination:s,data:s[this.state.indexPage]})}},{key:"searchKey",value:function(e){if(this.setState({key:e}),""!=e){var t=[];this.state.dataApi.map((function(a){a.Name.toLocaleUpperCase().includes(e.toLocaleUpperCase())&&t.push(a)}));var a=0;t.map((function(e){"Actived"==e.Status&&(a+=1)})),this.setState({data:t,totalActive:a})}else{var n=0;this.state.dataApi.map((function(e){"Actived"==e.Status&&(n+=1)})),this.setState({data:this.state.dataApi,totalActive:n})}}},{key:"toggleModal",value:function(){var e=Object(r.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:"new"==t&&this.setState({modalCom:!this.state.modalCom,action:t,Name:""});case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"onChange",value:function(e,t){this.setState(Object(n.a)({},e,t))}},{key:"addRoles",value:function(){var e=Object(r.a)(i.a.mark((function e(){var t,a,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!=(t=this.state.Name)&&""!=t){e.next=4;break}return alert("Please fill in all the requirements"),e.abrupt("return");case 4:return a={Name:t},this.setState({isLoading:!0}),e.next=8,D()({baseURL:w.a.BASE_URL,url:w.a.ADD_ROLE,method:"PUT",data:a});case 8:1==(n=e.sent).data.is_success?(this.getData(),this.setState({modalCom:!this.state.modalCom})):(alert(n.data.message),this.setState({isLoading:!1}));case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"openUpdate",value:function(){var e=Object(r.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.setState({modalCom:!this.state.modalCom,action:"update",Name:t.Name,id:t._id,Status:t.Status});case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"updateUser",value:function(){var e=Object(r.a)(i.a.mark((function e(){var t,a,n,s,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.state,a=t.Name,n=t.Status,null!=a&&""!=a){e.next=4;break}return alert("Please fill in all the requirements"),e.abrupt("return");case 4:return s={Name:a,id:this.state.id,Status:n},this.setState({isLoading:!0}),e.next=8,D()({baseURL:w.a.BASE_URL,url:w.a.UPDATE_ROLE,method:"POST",data:s});case 8:1==(r=e.sent).data.is_success?(this.getData(),this.setState({modalCom:!this.state.modalCom})):(alert(r.data.message),this.setState({isLoading:!1}));case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"delete",value:function(){var e=Object(r.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({isLoading:!0}),e.next=3,D()({baseURL:w.a.BASE_URL,url:w.a.DELETE_ROLE,method:"DELETE",data:{id:this.state.delete._id}});case 3:1==(t=e.sent).data.is_success?(this.getData(),this.setState({modalDelete:!this.state.modalDelete,delete:null})):(alert(t.data.message),this.setState({isLoading:!1}));case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getUsers",value:function(){var t=this,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,n=this.state.limit,s=this.state.key||"",i={method:"GET",headers:N};fetch(e.BASE_URL+"/admin/users?key="+s+"&page="+a+"&limit="+n,i).then((function(e){e.json().then((function(e){t.setState({data:e.data,itemsCount:e.total,activePage:a,totalActive:e.totalActive,updated:""})}))})).catch(console.log)}},{key:"inputChange",value:function(e){this.setState(Object(n.a)({},e.target.name,e.target.value))}},{key:"goSearch",value:function(){this.getUsers()}},{key:"render",value:function(){var e=this,t=this.state,a=t.data,n=t.key,s=t.action,o=t.arrPagination,c=t.indexPage;return Object(L.jsxs)("div",{className:"animated fadeIn",children:[Object(L.jsx)(h.a,{children:Object(L.jsxs)(p.a,{children:[Object(L.jsx)("p",{style:E.success,children:this.state.updated}),Object(L.jsx)("p",{style:E.danger,children:this.state.deleted}),Object(L.jsxs)(b.a,{children:[Object(L.jsxs)(j.a,{children:[Object(L.jsx)("i",{className:"fa fa-align-justify"})," ROLE (Total: ",void 0!=this.state.data||null!=this.state.data?this.state.data.length:0,", Active: ",this.state.totalActive,", Page: ",this.state.indexPage+1,"))",Object(L.jsx)("div",{style:E.tags,children:Object(L.jsxs)("div",{children:[Object(L.jsx)(f.a,{style:E.searchInput,onChange:function(t){return e.searchKey(t.target.value)},name:"key",value:n,placeholder:"Search"}),Object(L.jsx)(m.a,{outline:!0,color:"primary",style:E.floatRight,size:"sm",onClick:function(){var t=Object(r.a)(i.a.mark((function t(a){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.toggleModal("new");case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),children:"Add"})]})})]}),Object(L.jsx)(g.a,{children:Object(L.jsxs)(v.a,{responsive:!0,children:[Object(L.jsx)("thead",{children:Object(L.jsxs)("tr",{children:[Object(L.jsx)("th",{style:E.wa10,children:"No."}),Object(L.jsx)("th",{style:E.wh25,children:"Name"}),Object(L.jsx)("th",{style:E.wh25,children:"Status"}),Object(L.jsx)("th",{style:E.wh25,children:"Create Date"}),Object(L.jsx)("th",{style:E.w5,children:"Action"})]})}),Object(L.jsx)("tbody",{children:void 0!=a?a.map((function(t,a){return Object(L.jsxs)("tr",{style:E.row,children:[Object(L.jsx)("td",{style:E.wa10,children:a+1}),Object(L.jsx)("td",{style:E.wh25,children:t.Name}),Object(L.jsx)("td",{style:E.wh25,children:t.Status}),Object(L.jsx)("td",{style:E.wh25,children:t.Create_Date}),Object(L.jsxs)("td",{style:E.w5,children:[Object(L.jsx)(m.a,{style:E.mgl5,outline:!0,color:"primary",size:"sm",onClick:function(){var a=Object(r.a)(i.a.mark((function a(n){return i.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.openUpdate(t);case 2:return a.abrupt("return",a.sent);case 3:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}(),children:"Update"})," ",Object(L.jsx)(m.a,{outline:!0,color:"danger",size:"sm",onClick:function(a){e.openDelete(t)},children:"Delete"})]})]},a)})):""})]})})]}),1==o.length?"":Object(L.jsx)("div",{style:{float:"right",marginRight:"10px",padding:"10px"},children:Object(L.jsx)("tr",{style:E.row,children:o.map((function(t,a){return Object(L.jsx)("td",{children:Object(L.jsx)(m.a,{style:E.pagination,color:a==c?"primary":"danger",onClick:function(t){e.setState({data:o[a],indexPage:a})},children:a+1})})}))})})]})}),Object(L.jsxs)(x.a,{isOpen:this.state.modalCom,className:this.props.className,children:[Object(L.jsx)(O.a,{children:"new"==this.state.action?"T\u1ea1o m\u1edbi":"C\u1eadp nh\u1eadt"}),Object(L.jsxs)(y.a,{children:[Object(L.jsx)(S.a,{field:"Name",label:"Name",value:this.state.Name,placeholder:"Name",onChange:function(t){return e.onChange("Name",t.target.value)}}),"new"==s?"":Object(L.jsxs)("div",{children:[Object(L.jsx)("label",{style:E.flexLabel,htmlFor:"tag",children:"Status:"}),Object(L.jsxs)("select",{style:E.flexOption,name:"Status",onChange:function(t){return e.onChange("Status",t.target.value)},children:[Object(L.jsx)("option",{value:this.state.Status,children:""==this.state.Status?" - - - - - - - - - - ":this.state.Status}),Object(L.jsx)("option",{value:"Actived",children:"Actived"}),Object(L.jsx)("option",{value:"Locked",children:"Locked"}),Object(L.jsx)("option",{value:"Deactived",children:"Deactived"})]})]})]}),Object(L.jsxs)(k.a,{children:[Object(L.jsx)(m.a,{color:"primary",onClick:function(t){"new"===e.state.action?e.addRoles():e.updateUser()},disabled:this.state.isLoading,children:"Save"})," ",Object(L.jsx)(m.a,{color:"secondary",onClick:function(t){return e.toggleModal("new")},children:"Cancel"})]})]}),Object(L.jsxs)(x.a,{isOpen:this.state.modalDelete,toggle:function(t){return e.setState({modalDelete:!e.state.modalDelete,delete:null})},className:this.props.className,children:[Object(L.jsx)(O.a,{toggle:function(t){return e.setState({modalDelete:!e.state.modalDelete,delete:null})},children:"Delete"}),Object(L.jsx)(y.a,{children:Object(L.jsx)("label",{htmlFor:"tag",children:'Do you want to delete user "'.concat(this.state.delete?this.state.delete.Email:"",'" ?')})}),Object(L.jsxs)(k.a,{children:[Object(L.jsx)(m.a,{color:"primary",onClick:function(t){return e.delete()},disabled:this.state.isLoading,children:"Delete"})," ",Object(L.jsx)(m.a,{color:"secondary",onClick:function(t){return e.setState({modalDelete:!e.state.modalDelete,delete:null})},children:"Cancel"})]})]})]})}}]),s}(u.Component),E={pagination:{marginRight:"5px"},flexLabel:{width:100},flexOption:{width:300},a:{textDecoration:"none"},floatRight:{float:"right",marginTop:"3px"},spinner:{width:"30px"},center:{textAlign:"center"},tbody:{height:"380px",overflowY:"auto"},wh25:{width:"25%",float:"left",height:"80px"},w5:{width:"15%",float:"left",height:"80px"},wa10:{width:"5%",float:"left",height:"80px"},row:{float:"left",width:"100%"},success:{color:"green"},danger:{color:"red"},mgl5:{marginLeft:"5px"},tags:{float:"right",marginRight:"5px",width:"250px"},searchInput:{width:"190px",display:"inline-block"},userActive:{color:"green"},userPending:{color:"red"},nagemonNameCol:{width:"328px"},image:{width:"100px",height:"100px",borderRadius:"99999px"}};t.default=R}.call(this,a(114))},660:function(e,t,a){"use strict";var n=a(12),s=a(29),i=a(657),r=a(35),o=a(2),c=a.n(o),l=a(64),d=a.n(l),u=a(648),h=a.n(u),p=a(650),b={active:d.a.bool,"aria-label":d.a.string,block:d.a.bool,color:d.a.string,disabled:d.a.bool,outline:d.a.bool,tag:p.n,innerRef:d.a.oneOfType([d.a.object,d.a.func,d.a.string]),onClick:d.a.func,size:d.a.string,children:d.a.node,className:d.a.string,cssModule:d.a.object,close:d.a.bool},j=function(e){function t(t){var a;return(a=e.call(this,t)||this).onClick=a.onClick.bind(Object(i.a)(a)),a}Object(r.a)(t,e);var a=t.prototype;return a.onClick=function(e){if(!this.props.disabled)return this.props.onClick?this.props.onClick(e):void 0;e.preventDefault()},a.render=function(){var e=this.props,t=e.active,a=e["aria-label"],i=e.block,r=e.className,o=e.close,l=e.cssModule,d=e.color,u=e.outline,b=e.size,j=e.tag,f=e.innerRef,m=Object(s.a)(e,["active","aria-label","block","className","close","cssModule","color","outline","size","tag","innerRef"]);o&&"undefined"===typeof m.children&&(m.children=c.a.createElement("span",{"aria-hidden":!0},"\xd7"));var g="btn"+(u?"-outline":"")+"-"+d,v=Object(p.j)(h()(r,{close:o},o||"btn",o||g,!!b&&"btn-"+b,!!i&&"btn-block",{active:t,disabled:this.props.disabled}),l);m.href&&"button"===j&&(j="a");var x=o?"Close":null;return c.a.createElement(j,Object(n.a)({type:"button"===j&&m.onClick?"button":void 0},m,{className:v,ref:f,onClick:this.onClick,"aria-label":a||x}))},t}(c.a.Component);j.propTypes=b,j.defaultProps={color:"secondary",tag:"button"},t.a=j},729:function(e,t,a){"use strict";var n=a(12),s=a(29),i=a(2),r=a.n(i),o=a(64),c=a.n(o),l=a(648),d=a.n(l),u=a(650),h={className:c.a.string,cssModule:c.a.object,size:c.a.string,bordered:c.a.bool,borderless:c.a.bool,striped:c.a.bool,dark:c.a.bool,hover:c.a.bool,responsive:c.a.oneOfType([c.a.bool,c.a.string]),tag:u.n,responsiveTag:u.n,innerRef:c.a.oneOfType([c.a.func,c.a.string,c.a.object])},p=function(e){var t=e.className,a=e.cssModule,i=e.size,o=e.bordered,c=e.borderless,l=e.striped,h=e.dark,p=e.hover,b=e.responsive,j=e.tag,f=e.responsiveTag,m=e.innerRef,g=Object(s.a)(e,["className","cssModule","size","bordered","borderless","striped","dark","hover","responsive","tag","responsiveTag","innerRef"]),v=Object(u.j)(d()(t,"table",!!i&&"table-"+i,!!o&&"table-bordered",!!c&&"table-borderless",!!l&&"table-striped",!!h&&"table-dark",!!p&&"table-hover"),a),x=r.a.createElement(j,Object(n.a)({},g,{ref:m,className:v}));if(b){var O=Object(u.j)(!0===b?"table-responsive":"table-responsive-"+b,a);return r.a.createElement(f,{className:O},x)}return x};p.propTypes=h,p.defaultProps={tag:"table",responsiveTag:"div"},t.a=p}}]);
//# sourceMappingURL=34.66f0f630.chunk.js.map