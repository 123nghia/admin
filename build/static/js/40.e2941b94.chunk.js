(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[40],{1325:function(e,t,a){"use strict";a.r(t),function(e){var n=a(165),s=a(113),i=a.n(s),r=a(640),c=a(166),l=a(167),o=a(169),d=a(168),u=a(2),h=a(1299),p=a(1300),b=a(1301),j=a(1302),m=a(1303),f=a(662),g=a(1304),v=a(736),x=a(1389),O=a(1307),y=a(1308),k=a(1309),w=(a(644),a(663),a(646)),S=a(652),C=a(643),N=a.n(C),D=a(17),L=new Headers,A=localStorage.getItem("auth");L.append("Authorization","Bearer "+A),L.append("Content-Type","application/json");var E=function(t){Object(o.a)(s,t);var a=Object(d.a)(s);function s(e){var t;return Object(c.a)(this,s),(t=a.call(this,e)).getData=Object(r.a)(i.a.mark((function e(){var a,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.setState({isLoading:!0}),e.next=3,N()({baseURL:w.a.BASE_URL,url:w.a.LIST_TYPEKEY,method:"GET"});case 3:a=e.sent,t.pagination(a.data.data),t.setState({dataApi:a.data.data}),n=0,a.data.data.map((function(e){"Actived"==e.Status&&(n+=1)})),t.setState({isLoading:!1,totalActive:n});case 9:case"end":return e.stop()}}),e)}))),t.openDelete=function(e){t.setState({modalDelete:!t.state.modalDelete,delete:e})},t.state={data:[],key:"",activePage:1,page:1,itemsCount:0,limit:20,totalActive:0,modalCom:!1,viewingUser:{},communities:[],updated:"",dataApi:[],action:"new",Name:"",Status:"",modalDelete:!1,delete:null,arrPagination:[],indexPage:0},t}return Object(l.a)(s,[{key:"componentDidMount",value:function(){var e=Object(r.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.getData();case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"pagination",value:function(e){var t,a,n,s=[];for(t=0,a=e.length;t<a;t+=5)n=e.slice(t,t+5),s.push(n);this.setState({arrPagination:s,data:s[this.state.indexPage]})}},{key:"searchKey",value:function(e){var t=this.state.indexPage;if(this.setState({key:e}),""!=e){var a=[];this.state.dataApi.map((function(t){t.Name.toLocaleUpperCase().includes(e.toLocaleUpperCase())&&a.push(t)}));var n=0;a.map((function(e){"Actived"==e.Status&&(n+=1)})),this.setState({data:a,totalActive:n})}else{var s=0;this.state.dataApi.map((function(e){"Actived"==e.Status&&(s+=1)})),this.setState({data:this.state.arrPagination[t],totalActive:s})}}},{key:"toggleModal",value:function(){var e=Object(r.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:"new"==t&&this.setState({modalCom:!this.state.modalCom,action:t,Name:""});case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"onChange",value:function(e,t){this.setState(Object(n.a)({},e,t))}},{key:"addUser",value:function(){var e=Object(r.a)(i.a.mark((function e(){var t,a,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!=(t=this.state.Name)&&""!=t){e.next=4;break}return alert("Vui l\xf2ng nh\u1eadp \u0111\u1ea7y \u0111\u1ee7 tr\u01b0\u1eddng d\u1eef li\u1ec7u !!!"),e.abrupt("return");case 4:return a={Name:t},this.setState({isLoading:!0}),e.next=8,N()({baseURL:w.a.BASE_URL,url:w.a.ADD_TYPEKEY,method:"PUT",data:a});case 8:1==(n=e.sent).data.is_success?(this.getData(),this.setState({modalCom:!this.state.modalCom})):(alert(n.data.message),this.setState({isLoading:!1}));case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"openUpdate",value:function(){var e=Object(r.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.setState({modalCom:!this.state.modalCom,action:"update",Name:t.Name,id:t._id,Status:t.Status});case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"updateUser",value:function(){var e=Object(r.a)(i.a.mark((function e(){var t,a,n,s,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.state,a=t.Name,n=t.Status,null!=a&&""!=a){e.next=4;break}return alert("Vui l\xf2ng nh\u1eadp \u0111\u1ea7y \u0111\u1ee7 tr\u01b0\u1eddng d\u1eef li\u1ec7u !!!"),e.abrupt("return");case 4:return s={Name:a,id:this.state.id,Status:n},this.setState({isLoading:!0}),e.next=8,N()({baseURL:w.a.BASE_URL,url:w.a.UPDATE_TYPEKEY,method:"POST",data:s});case 8:1==(r=e.sent).data.is_success?(this.getData(),this.setState({modalCom:!this.state.modalCom})):(alert(r.data.message),this.setState({isLoading:!1}));case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"delete",value:function(){var e=Object(r.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({isLoading:!0}),e.next=3,N()({baseURL:w.a.BASE_URL,url:w.a.DELETE_TYPEKEY,method:"DELETE",data:{id:this.state.delete._id}});case 3:1==(t=e.sent).data.is_success?(this.getData(),this.setState({modalDelete:!this.state.modalDelete,delete:null})):(alert(t.data.message),this.setState({isLoading:!1}));case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getUsers",value:function(){var t=this,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,n=this.state.limit,s=this.state.key||"",i={method:"GET",headers:L};fetch(e.BASE_URL+"/admin/users?key="+s+"&page="+a+"&limit="+n,i).then((function(e){e.json().then((function(e){t.setState({data:e.data,itemsCount:e.total,activePage:a,totalActive:e.totalActive,updated:""})}))})).catch(console.log)}},{key:"inputChange",value:function(e){this.setState(Object(n.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){var e=this,t=this.state,a=t.data,n=t.key,s=t.action,c=t.arrPagination,l=t.indexPage;return this.state.isLoading?Object(D.jsx)("div",{id:"page-loading",children:Object(D.jsxs)("div",{className:"three-balls",children:[Object(D.jsx)("div",{className:"ball ball1"}),Object(D.jsx)("div",{className:"ball ball2"}),Object(D.jsx)("div",{className:"ball ball3"})]})}):Object(D.jsxs)("div",{className:"animated fadeIn",children:[Object(D.jsx)(h.a,{children:Object(D.jsxs)(p.a,{children:[Object(D.jsx)("p",{style:T.success,children:this.state.updated}),Object(D.jsx)("p",{style:T.danger,children:this.state.deleted}),Object(D.jsxs)(b.a,{children:[Object(D.jsxs)(j.a,{children:[Object(D.jsx)("i",{className:"fa fa-align-justify"})," TYPE KEY (Total: ",void 0!=this.state.data||null!=this.state.data?this.state.data.length:0,", Active: ",this.state.totalActive,", Page: ",this.state.indexPage+1,")",Object(D.jsx)("div",{style:T.tags,children:Object(D.jsxs)("div",{children:[Object(D.jsx)(m.a,{style:T.searchInput,onChange:function(t){return e.searchKey(t.target.value)},name:"key",value:n,placeholder:"Search"}),Object(D.jsx)(f.a,{outline:!0,color:"primary",style:T.floatRight,size:"sm",onClick:function(){var t=Object(r.a)(i.a.mark((function t(a){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.toggleModal("new");case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),children:"Add"})]})})]}),Object(D.jsx)(g.a,{children:Object(D.jsxs)(v.a,{responsive:!0,children:[Object(D.jsx)("thead",{children:Object(D.jsxs)("tr",{children:[Object(D.jsx)("th",{style:T.wa10,children:"No."}),Object(D.jsx)("th",{style:T.wh12,children:"Name"}),Object(D.jsx)("th",{style:T.wh12,children:"Status"}),Object(D.jsx)("th",{style:T.w5,children:"Action"})]})}),Object(D.jsx)("tbody",{children:void 0!=a?a.map((function(t,a){return Object(D.jsxs)("tr",{style:T.row,children:[Object(D.jsx)("td",{style:T.wa10,children:a+1}),Object(D.jsx)("td",{style:T.wh12,children:t.Name}),Object(D.jsx)("td",{style:T.wh12,children:t.Status}),Object(D.jsxs)("td",{style:T.w5,children:[Object(D.jsx)(f.a,{style:T.mgl5,outline:!0,color:"primary",size:"sm",onClick:function(){var a=Object(r.a)(i.a.mark((function a(n){return i.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.openUpdate(t);case 2:return a.abrupt("return",a.sent);case 3:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}(),children:"Update"})," ",Object(D.jsx)(f.a,{outline:!0,color:"danger",size:"sm",onClick:function(a){e.openDelete(t)},children:"Delete"})]})]},a)})):""})]})})]}),1==c.length?"":Object(D.jsx)("div",{style:{float:"right",marginRight:"10px",padding:"10px"},children:Object(D.jsx)("tr",{style:T.row,children:c.map((function(t,a){return Object(D.jsx)("td",{children:Object(D.jsx)(f.a,{style:T.pagination,color:a==l?"primary":"danger",onClick:function(t){e.setState({data:c[a],indexPage:a})},children:a+1})})}))})})]})}),Object(D.jsxs)(x.a,{isOpen:this.state.modalCom,className:this.props.className,children:[Object(D.jsx)(O.a,{children:"new"==this.state.action?"T\u1ea1o m\u1edbi":"C\u1eadp nh\u1eadt"}),Object(D.jsxs)(y.a,{children:[Object(D.jsx)(S.a,{field:"Name",label:"Name",value:this.state.Name,placeholder:"Name",onChange:function(t){return e.onChange("Name",t.target.value)}}),"new"==s?"":Object(D.jsxs)("div",{children:[Object(D.jsx)("label",{style:T.flexLabel,htmlFor:"tag",children:"Status:"}),Object(D.jsxs)("select",{style:T.flexOption,name:"Status",onChange:function(t){return e.onChange("Status",t.target.value)},children:[Object(D.jsx)("option",{value:this.state.Status,children:""==this.state.Status?" - - - - - - - - - - ":this.state.Status}),Object(D.jsx)("option",{value:"Actived",children:"Actived"}),Object(D.jsx)("option",{value:"Locked",children:"Locked"}),Object(D.jsx)("option",{value:"Deactived",children:"Deactived"})]})]})]}),Object(D.jsxs)(k.a,{children:[Object(D.jsx)(f.a,{color:"primary",onClick:function(t){"new"===e.state.action?e.addUser():e.updateUser()},disabled:this.state.isLoading,children:"L\u01b0u"})," ",Object(D.jsx)(f.a,{color:"secondary",onClick:function(t){return e.toggleModal("new")},children:"\u0110\xf3ng"})]})]}),Object(D.jsxs)(x.a,{isOpen:this.state.modalDelete,toggle:function(t){return e.setState({modalDelete:!e.state.modalDelete,delete:null})},className:this.props.className,children:[Object(D.jsx)(O.a,{toggle:function(t){return e.setState({modalDelete:!e.state.modalDelete,delete:null})},children:"Delete"}),Object(D.jsx)(y.a,{children:Object(D.jsx)("label",{htmlFor:"tag",children:'Do you want to delete user "'.concat(this.state.delete?this.state.delete.Email:"",'" ?')})}),Object(D.jsxs)(k.a,{children:[Object(D.jsx)(f.a,{color:"primary",onClick:function(t){return e.delete()},disabled:this.state.isLoading,children:"Delete"})," ",Object(D.jsx)(f.a,{color:"secondary",onClick:function(t){return e.setState({modalDelete:!e.state.modalDelete,delete:null})},children:"\u0110\xf3ng"})]})]})]})}}]),s}(u.Component),T={datePicker:{marginBottom:20},wa10:{width:"5%",float:"left",height:"80px"},pagination:{marginRight:"5px"},flexLabel:{width:100},flexOption:{width:300},a:{textDecoration:"none"},floatRight:{float:"right",marginTop:"3px"},spinner:{width:"30px"},center:{textAlign:"center"},tbody:{height:"380px",overflowY:"auto"},wh12:{width:"35%",float:"left",height:"80px"},wh15:{width:"15%",float:"left",height:"80px"},w5:{width:"20%",float:"left",height:"80px"},row:{float:"left",width:"100%"},success:{color:"green"},danger:{color:"red"},mgl5:{marginLeft:"5px"},tags:{float:"right",marginRight:"5px",width:"250px"},searchInput:{width:"190px",display:"inline-block"},userActive:{color:"green"},userPending:{color:"red"},nagemonNameCol:{width:"328px"},image:{width:"100px",height:"100px",borderRadius:"99999px"}};t.default=E}.call(this,a(114))},662:function(e,t,a){"use strict";var n=a(12),s=a(29),i=a(658),r=a(35),c=a(2),l=a.n(c),o=a(64),d=a.n(o),u=a(648),h=a.n(u),p=a(651),b={active:d.a.bool,"aria-label":d.a.string,block:d.a.bool,color:d.a.string,disabled:d.a.bool,outline:d.a.bool,tag:p.n,innerRef:d.a.oneOfType([d.a.object,d.a.func,d.a.string]),onClick:d.a.func,size:d.a.string,children:d.a.node,className:d.a.string,cssModule:d.a.object,close:d.a.bool},j=function(e){function t(t){var a;return(a=e.call(this,t)||this).onClick=a.onClick.bind(Object(i.a)(a)),a}Object(r.a)(t,e);var a=t.prototype;return a.onClick=function(e){if(!this.props.disabled)return this.props.onClick?this.props.onClick(e):void 0;e.preventDefault()},a.render=function(){var e=this.props,t=e.active,a=e["aria-label"],i=e.block,r=e.className,c=e.close,o=e.cssModule,d=e.color,u=e.outline,b=e.size,j=e.tag,m=e.innerRef,f=Object(s.a)(e,["active","aria-label","block","className","close","cssModule","color","outline","size","tag","innerRef"]);c&&"undefined"===typeof f.children&&(f.children=l.a.createElement("span",{"aria-hidden":!0},"\xd7"));var g="btn"+(u?"-outline":"")+"-"+d,v=Object(p.j)(h()(r,{close:c},c||"btn",c||g,!!b&&"btn-"+b,!!i&&"btn-block",{active:t,disabled:this.props.disabled}),o);f.href&&"button"===j&&(j="a");var x=c?"Close":null;return l.a.createElement(j,Object(n.a)({type:"button"===j&&f.onClick?"button":void 0},f,{className:v,ref:m,onClick:this.onClick,"aria-label":a||x}))},t}(l.a.Component);j.propTypes=b,j.defaultProps={color:"secondary",tag:"button"},t.a=j},736:function(e,t,a){"use strict";var n=a(12),s=a(29),i=a(2),r=a.n(i),c=a(64),l=a.n(c),o=a(648),d=a.n(o),u=a(651),h={className:l.a.string,cssModule:l.a.object,size:l.a.string,bordered:l.a.bool,borderless:l.a.bool,striped:l.a.bool,dark:l.a.bool,hover:l.a.bool,responsive:l.a.oneOfType([l.a.bool,l.a.string]),tag:u.n,responsiveTag:u.n,innerRef:l.a.oneOfType([l.a.func,l.a.string,l.a.object])},p=function(e){var t=e.className,a=e.cssModule,i=e.size,c=e.bordered,l=e.borderless,o=e.striped,h=e.dark,p=e.hover,b=e.responsive,j=e.tag,m=e.responsiveTag,f=e.innerRef,g=Object(s.a)(e,["className","cssModule","size","bordered","borderless","striped","dark","hover","responsive","tag","responsiveTag","innerRef"]),v=Object(u.j)(d()(t,"table",!!i&&"table-"+i,!!c&&"table-bordered",!!l&&"table-borderless",!!o&&"table-striped",!!h&&"table-dark",!!p&&"table-hover"),a),x=r.a.createElement(j,Object(n.a)({},g,{ref:f,className:v}));if(b){var O=Object(u.j)(!0===b?"table-responsive":"table-responsive-"+b,a);return r.a.createElement(m,{className:O},x)}return x};p.propTypes=h,p.defaultProps={tag:"table",responsiveTag:"div"},t.a=p}}]);
//# sourceMappingURL=40.e2941b94.chunk.js.map