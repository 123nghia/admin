(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[36],{1323:function(e,t,a){"use strict";a.r(t),function(e){var n=a(165),s=a(113),i=a.n(s),r=a(640),c=a(166),l=a(167),o=a(169),d=a(168),u=a(2),h=a(1299),p=a(1300),b=a(1301),j=a(1302),g=a(1303),f=a(662),m=a(1304),x=a(736),v=a(1389),O=a(1307),S=a(1308),y=a(1309),k=(a(644),a(696)),w=a.n(k),_=(a(663),a(646)),D=a(643),C=a.n(D),L=a(17),E=new Headers,A=localStorage.getItem("auth");E.append("Authorization","Bearer "+A),E.append("Content-Type","application/json");var I=function(t){Object(o.a)(s,t);var a=Object(d.a)(s);function s(e){var t;return Object(c.a)(this,s),(t=a.call(this,e)).getData=Object(r.a)(i.a.mark((function e(){var a,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.setState({isLoading:!0}),e.next=3,C()({baseURL:_.a.BASE_URL,url:_.a.LIST_SALELOG,method:"GET"});case 3:a=e.sent,t.pagination(a.data.data),t.setState({dataApi:a.data.data}),n=0,a.data.data.map((function(e){"Actived"==e.Status&&(n+=1)})),t.setState({isLoading:!1,totalActive:n});case 9:case"end":return e.stop()}}),e)}))),t.openDelete=function(e){t.setState({modalDelete:!t.state.modalDelete,delete:e})},t.state={data:[],key:"",activePage:1,page:1,itemsCount:0,limit:20,totalActive:0,modalCom:!1,viewingUser:{},communities:[],updated:"",dataApi:[],action:"new",Sale_Id:"",Package_Id:"",End_Date:new Date,Status:"",modalDelete:!1,delete:null,dataSale:[],dataSaleOfCompany:[],currentSale:"",currentSaleOfCompany:"",arrPagination:[],indexPage:0,company_id:localStorage.getItem("user"),token:{Authorization:"Bearer ".concat(localStorage.getItem("token"))},isUpdate:!1},t}return Object(l.a)(s,[{key:"componentDidMount",value:function(){var e=Object(r.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.getData(),this.getAllSaleOfCompany();case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"pagination",value:function(e){var t,a,n,s=[];for(t=0,a=e.length;t<a;t+=5)n=e.slice(t,t+5),s.push(n);0!=s.length?this.setState({arrPagination:s,data:s[this.state.indexPage]}):this.setState({arrPagination:s,data:[]})}},{key:"searchKey",value:function(e){}},{key:"toggleModal",value:function(){var e=Object(r.a)(i.a.mark((function e(t){var a,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=this.state,a.Sale_Id,n=a.End_Date,this.setState({isUpdate:!0}),e.next=4,this.getSaleData();case 4:return e.next=6,this.getAllSaleOfCompany();case 6:"new"==t&&this.setState({modalCom:!this.state.modalCom,action:t,End_Date:n,Sale_Id:""});case 7:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"onChange",value:function(e,t){this.setState(Object(n.a)({},e,t))}},{key:"addUser",value:function(){var e=Object(r.a)(i.a.mark((function e(){var t,a,n,s,r,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.state,a=t.Sale_Id,n=t.End_Date,s=t.Package_Id,r={End_Date:n,Sale_Id:a,Package_Id:s},this.setState({isLoading:!0}),e.next=5,C()({baseURL:_.a.BASE_URL,url:_.a.ADD_SALELOG,method:"PUT",data:r});case 5:1==(c=e.sent).data.is_success?(this.getData(),this.setState({modalCom:!this.state.modalCom})):(alert(c.data.message),this.setState({isLoading:!1}));case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"openUpdate",value:function(){var e=Object(r.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({isUpdate:!1,currentSaleOfCompany:t._id}),e.next=3,this.getSaleData(t.Package_Id);case 3:this.setState({modalCom:!this.state.modalCom,action:"update",Sale_Id:t.Sale_Id,End_Date:t.End_Date,Package_Id:t.Package_Id,id:t._id,Status:t.Status});case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"updateUser",value:function(){var e=Object(r.a)(i.a.mark((function e(){var t,a,n,s,r,c,l;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({isUpdate:!0}),t=this.state,a=t.End_Date,t.Sale_Id,n=t.Status,s=t.Package_Id,r=t.currentSaleOfCompany,c={End_Date:a,Sale_Id:r,id:this.state.id,Status:n,Package_Id:s},this.setState({isLoading:!0}),e.next=6,C()({baseURL:_.a.BASE_URL,url:_.a.UPDATE_SALELOG,method:"POST",data:c});case 6:1==(l=e.sent).data.is_success?(this.getData(),this.setState({modalCom:!this.state.modalCom})):(alert(l.data.message),this.setState({isLoading:!1}));case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"delete",value:function(){var e=Object(r.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({isLoading:!0}),e.next=3,C()({baseURL:_.a.BASE_URL,url:_.a.DELETE_SALELOG,method:"DELETE",data:{id:this.state.delete._id}});case 3:1==(t=e.sent).data.is_success?(this.getData(),this.setState({modalDelete:!this.state.modalDelete,delete:null})):(alert(t.data.message),this.setState({isLoading:!1}));case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getUsers",value:function(){var t=this,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,n=this.state.limit,s=this.state.key||"",i={method:"GET",headers:E};fetch(e.BASE_URL+"/admin/users?key="+s+"&page="+a+"&limit="+n,i).then((function(e){e.json().then((function(e){t.setState({data:e.data,itemsCount:e.total,activePage:a,totalActive:e.totalActive,updated:""})}))})).catch(console.log)}},{key:"getSaleData",value:function(){var e=Object(r.a)(i.a.mark((function e(t){var a,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C()({baseURL:_.a.BASE_URL,url:_.a.LIST_SALE,method:"GET"});case 2:if(a=e.sent,""==t&&void 0==t){e.next=8;break}return e.next=6,C()({baseURL:_.a.BASE_URL,url:_.a.LIST_SALE_WITH_ID+t,method:"GET"});case 6:null==(n=e.sent).data.data&&void 0==n.data.data||this.setState({currentSale:n.data.data.Name});case 8:this.setState({dataSale:a.data.data});case 9:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getAllSaleOfCompany",value:function(){var e=Object(r.a)(i.a.mark((function e(){var t,a,n,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.state.company_id,a=JSON.parse(t),n={company_id:a.company_id},e.next=5,C()({baseURL:_.a.BASE_URL,url:_.a.GET_SALE,method:"POST",data:n,headers:this.state.token});case 5:s=e.sent,this.setState({dataSaleOfCompany:s.data.data});case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"inputChange",value:function(e){this.setState(Object(n.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){var e=this,t=this.state,a=t.data,n=t.key,s=t.dataSaleOfCompany,c=t.dataSale,l=t.currentSale,o=t.action,d=t.arrPagination,u=t.indexPage,k=t.End_Date,_=t.isUpdate;return this.state.isLoading?Object(L.jsx)("div",{id:"page-loading",children:Object(L.jsxs)("div",{className:"three-balls",children:[Object(L.jsx)("div",{className:"ball ball1"}),Object(L.jsx)("div",{className:"ball ball2"}),Object(L.jsx)("div",{className:"ball ball3"})]})}):Object(L.jsxs)("div",{className:"animated fadeIn",children:[Object(L.jsx)(h.a,{children:Object(L.jsxs)(p.a,{children:[Object(L.jsx)("p",{style:P.success,children:this.state.updated}),Object(L.jsx)("p",{style:P.danger,children:this.state.deleted}),Object(L.jsxs)(b.a,{children:[Object(L.jsxs)(j.a,{children:[Object(L.jsx)("i",{className:"fa fa-align-justify"})," PAKAGE SALE LOG (Total: ",void 0!=this.state.data||null!=this.state.data?this.state.data.length:0,", Active: ",this.state.totalActive,", Page: ",this.state.indexPage+1,")",Object(L.jsx)("div",{style:P.tags,children:Object(L.jsxs)("div",{children:[Object(L.jsx)(g.a,{style:P.searchInput,onChange:function(t){return e.searchKey(t.target.value)},name:"key",value:n,placeholder:"Search"}),Object(L.jsx)(f.a,{outline:!0,color:"primary",style:P.floatRight,size:"sm",onClick:function(){var t=Object(r.a)(i.a.mark((function t(a){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.toggleModal("new");case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),children:"Add"})]})})]}),Object(L.jsx)(m.a,{children:Object(L.jsxs)(x.a,{responsive:!0,children:[Object(L.jsx)("thead",{children:Object(L.jsxs)("tr",{children:[Object(L.jsx)("th",{style:P.wa10,children:"No."}),Object(L.jsx)("th",{style:P.wh25,children:"Sale ID"}),Object(L.jsx)("th",{style:P.wh25,children:"Package ID"}),Object(L.jsx)("th",{style:P.wh25,children:"End Date"}),Object(L.jsx)("th",{style:P.wh25,children:"Status"}),Object(L.jsx)("th",{style:P.w5,children:"Action"})]})}),Object(L.jsx)("tbody",{children:void 0!=a?a.map((function(t,a){return Object(L.jsxs)("tr",{style:P.row,children:[Object(L.jsx)("td",{style:P.wa10,children:a+1}),Object(L.jsx)("td",{style:P.wh25,children:t.Sale_Id}),Object(L.jsx)("td",{style:P.wh25,children:t.Package_Id}),Object(L.jsx)("td",{style:P.wh25,children:new Date(t.End_Date).toLocaleDateString()+" "+new Date(t.End_Date).toLocaleTimeString()}),Object(L.jsx)("td",{style:P.wh25,children:t.Status}),Object(L.jsxs)("td",{style:P.w5,children:[Object(L.jsx)(f.a,{style:P.mgl5,outline:!0,color:"primary",size:"sm",onClick:function(){var a=Object(r.a)(i.a.mark((function a(n){return i.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.openUpdate(t);case 2:return a.abrupt("return",a.sent);case 3:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}(),children:"Update"})," ",Object(L.jsx)(f.a,{outline:!0,color:"danger",size:"sm",onClick:function(a){e.openDelete(t)},children:"Delete"})]})]},a)})):""})]})})]}),1==d.length?"":Object(L.jsx)("div",{style:{float:"right",marginRight:"10px",padding:"10px"},children:Object(L.jsx)("tr",{style:P.row,children:d.map((function(t,a){return Object(L.jsx)("td",{children:Object(L.jsx)(f.a,{style:P.pagination,color:a==u?"primary":"danger",onClick:function(t){e.setState({data:d[a],indexPage:a})},children:a+1})})}))})})]})}),Object(L.jsxs)(v.a,{isOpen:this.state.modalCom,className:this.props.className,children:[Object(L.jsx)(O.a,{children:"new"==this.state.action?"T\u1ea1o m\u1edbi":"C\u1eadp nh\u1eadt"}),Object(L.jsxs)(S.a,{children:[Object(L.jsxs)("div",{style:P.datePicker,children:[Object(L.jsx)("label",{children:"End Date:  "})," "," ",Object(L.jsx)(w.a,{selected:new Date(k),onChange:function(t){return e.setState({End_Date:t})}})]}),"new"==o?"":Object(L.jsxs)("div",{children:[Object(L.jsx)("label",{style:P.flexLabel,htmlFor:"tag",children:"Status    "}),Object(L.jsxs)("select",{style:P.flexOption,name:"Status",onChange:function(t){return e.onChange("Status",t.target.value)},children:[Object(L.jsx)("option",{value:this.state.Status,children:""==this.state.Status?" - - - - - - - - - - ":this.state.Status}),Object(L.jsx)("option",{value:"Actived",children:"Actived"}),Object(L.jsx)("option",{value:"Locked",children:"Locked"}),Object(L.jsx)("option",{value:"Deactived",children:"Deactived"})]})]}),Object(L.jsxs)("div",{children:[Object(L.jsx)("label",{style:P.flexLabel,htmlFor:"tag",children:"Package:    "}),Object(L.jsxs)("select",{style:P.flexOption,name:"Package_Id",onChange:function(t){return e.onChange("Package_Id",t.target.value)},children:[Object(L.jsx)("option",{value:this.state.Package_Id,children:"-----"}),c.map((function(e,t){return e.Name==l?Object(L.jsx)("option",{selected:!0,value:e._id,children:e.Name}):Object(L.jsx)("option",{value:e._id,children:e.Name})}))]})]}),_?Object(L.jsxs)("div",{children:[Object(L.jsx)("label",{style:P.flexLabel,htmlFor:"tag",children:"Sale:    "}),Object(L.jsxs)("select",{style:P.flexOption,name:"Sale_Id",onChange:function(t){return e.onChange("Sale_Id",t.target.value)},children:[Object(L.jsx)("option",{value:this.state.Sale_Id,children:"-----"}),s.map((function(e,t){return Object(L.jsx)("option",{value:e._id,children:e.Name})}))]})]}):""]}),Object(L.jsxs)(y.a,{children:[Object(L.jsx)(f.a,{color:"primary",onClick:function(t){"new"===e.state.action?e.addUser():e.updateUser()},disabled:this.state.isLoading,children:"L\u01b0u"})," ",Object(L.jsx)(f.a,{color:"secondary",onClick:function(t){return e.toggleModal("new")},children:"\u0110\xf3ng"})]})]}),Object(L.jsxs)(v.a,{isOpen:this.state.modalDelete,toggle:function(t){return e.setState({modalDelete:!e.state.modalDelete,delete:null})},className:this.props.className,children:[Object(L.jsx)(O.a,{toggle:function(t){return e.setState({modalDelete:!e.state.modalDelete,delete:null})},children:"Delete"}),Object(L.jsx)(S.a,{children:Object(L.jsx)("label",{htmlFor:"tag",children:'Do you want to delete user "'.concat(this.state.delete?this.state.delete.Email:"",'" ?')})}),Object(L.jsxs)(y.a,{children:[Object(L.jsx)(f.a,{color:"primary",onClick:function(t){return e.delete()},disabled:this.state.isLoading,children:"Delete"})," ",Object(L.jsx)(f.a,{color:"secondary",onClick:function(t){return e.setState({modalDelete:!e.state.modalDelete,delete:null})},children:"\u0110\xf3ng"})]})]})]})}}]),s}(u.Component),P={datePicker:{marginBottom:20},wa10:{width:"5%",float:"left",height:"80px"},pagination:{marginRight:"5px"},flexLabel:{width:100},flexOption:{width:300},a:{textDecoration:"none"},floatRight:{float:"right",marginTop:"3px"},spinner:{width:"30px"},center:{textAlign:"center"},tbody:{height:"380px",overflowY:"auto"},wh25:{width:"19%",float:"left",height:"80px"},wh15:{width:"15%",float:"left",height:"80px"},w5:{width:"15%",float:"left",height:"80px"},row:{float:"left",width:"100%"},success:{color:"green"},danger:{color:"red"},mgl5:{marginLeft:"5px"},tags:{float:"right",marginRight:"5px",width:"250px"},searchInput:{width:"190px",display:"inline-block"},userActive:{color:"green"},userPending:{color:"red"},nagemonNameCol:{width:"328px"},image:{width:"100px",height:"100px",borderRadius:"99999px"}};t.default=I}.call(this,a(114))},662:function(e,t,a){"use strict";var n=a(12),s=a(29),i=a(658),r=a(35),c=a(2),l=a.n(c),o=a(64),d=a.n(o),u=a(648),h=a.n(u),p=a(651),b={active:d.a.bool,"aria-label":d.a.string,block:d.a.bool,color:d.a.string,disabled:d.a.bool,outline:d.a.bool,tag:p.n,innerRef:d.a.oneOfType([d.a.object,d.a.func,d.a.string]),onClick:d.a.func,size:d.a.string,children:d.a.node,className:d.a.string,cssModule:d.a.object,close:d.a.bool},j=function(e){function t(t){var a;return(a=e.call(this,t)||this).onClick=a.onClick.bind(Object(i.a)(a)),a}Object(r.a)(t,e);var a=t.prototype;return a.onClick=function(e){if(!this.props.disabled)return this.props.onClick?this.props.onClick(e):void 0;e.preventDefault()},a.render=function(){var e=this.props,t=e.active,a=e["aria-label"],i=e.block,r=e.className,c=e.close,o=e.cssModule,d=e.color,u=e.outline,b=e.size,j=e.tag,g=e.innerRef,f=Object(s.a)(e,["active","aria-label","block","className","close","cssModule","color","outline","size","tag","innerRef"]);c&&"undefined"===typeof f.children&&(f.children=l.a.createElement("span",{"aria-hidden":!0},"\xd7"));var m="btn"+(u?"-outline":"")+"-"+d,x=Object(p.j)(h()(r,{close:c},c||"btn",c||m,!!b&&"btn-"+b,!!i&&"btn-block",{active:t,disabled:this.props.disabled}),o);f.href&&"button"===j&&(j="a");var v=c?"Close":null;return l.a.createElement(j,Object(n.a)({type:"button"===j&&f.onClick?"button":void 0},f,{className:x,ref:g,onClick:this.onClick,"aria-label":a||v}))},t}(l.a.Component);j.propTypes=b,j.defaultProps={color:"secondary",tag:"button"},t.a=j},736:function(e,t,a){"use strict";var n=a(12),s=a(29),i=a(2),r=a.n(i),c=a(64),l=a.n(c),o=a(648),d=a.n(o),u=a(651),h={className:l.a.string,cssModule:l.a.object,size:l.a.string,bordered:l.a.bool,borderless:l.a.bool,striped:l.a.bool,dark:l.a.bool,hover:l.a.bool,responsive:l.a.oneOfType([l.a.bool,l.a.string]),tag:u.n,responsiveTag:u.n,innerRef:l.a.oneOfType([l.a.func,l.a.string,l.a.object])},p=function(e){var t=e.className,a=e.cssModule,i=e.size,c=e.bordered,l=e.borderless,o=e.striped,h=e.dark,p=e.hover,b=e.responsive,j=e.tag,g=e.responsiveTag,f=e.innerRef,m=Object(s.a)(e,["className","cssModule","size","bordered","borderless","striped","dark","hover","responsive","tag","responsiveTag","innerRef"]),x=Object(u.j)(d()(t,"table",!!i&&"table-"+i,!!c&&"table-bordered",!!l&&"table-borderless",!!o&&"table-striped",!!h&&"table-dark",!!p&&"table-hover"),a),v=r.a.createElement(j,Object(n.a)({},m,{ref:f,className:x}));if(b){var O=Object(u.j)(!0===b?"table-responsive":"table-responsive-"+b,a);return r.a.createElement(g,{className:O},v)}return v};p.propTypes=h,p.defaultProps={tag:"table",responsiveTag:"div"},t.a=p}}]);
//# sourceMappingURL=36.477e2540.chunk.js.map