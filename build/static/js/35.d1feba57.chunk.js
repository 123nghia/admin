(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[35],{1322:function(e,t,a){"use strict";a.r(t),function(e){var n=a(165),s=a(113),i=a.n(s),r=a(640),o=a(166),l=a(167),c=a(169),d=a(168),u=a(2),h=a(1299),p=a(1300),b=a(1301),j=a(1302),m=a(1303),g=a(662),f=a(1304),v=a(736),x=a(1389),O=a(1307),y=a(1308),C=a(1309),S=(a(644),a(696)),k=a.n(S),w=(a(663),a(646)),D=a(652),_=a(643),L=a.n(_),N=a(17),A=new Headers,E=localStorage.getItem("auth");A.append("Authorization","Bearer "+E),A.append("Content-Type","application/json");var P=function(t){Object(c.a)(s,t);var a=Object(d.a)(s);function s(e){var t;return Object(o.a)(this,s),(t=a.call(this,e)).getData=Object(r.a)(i.a.mark((function e(){var a,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.setState({isLoading:!0}),e.next=3,L()({baseURL:w.a.BASE_URL,url:w.a.LIST_SALE,method:"GET"});case 3:a=e.sent,t.pagination(a.data.data),t.setState({dataApi:a.data.data}),n=0,a.data.data.map((function(e){"Actived"==e.Status&&(n+=1)})),t.setState({isLoading:!1,totalActive:n});case 9:case"end":return e.stop()}}),e)}))),t.openDelete=function(e){t.setState({modalDelete:!t.state.modalDelete,delete:e})},t.state={data:[],key:"",activePage:1,page:1,itemsCount:0,limit:20,totalActive:0,modalCom:!1,viewingUser:{},communities:[],updated:"",dataApi:[],action:"new",Name:"",Company_Id:"",End_Date:new Date,Status:"",modalDelete:!1,delete:null,dataCompany:[],currentCompany:"",arrPagination:[],indexPage:0},t}return Object(l.a)(s,[{key:"componentDidMount",value:function(){var e=Object(r.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.getData();case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"pagination",value:function(e){var t,a,n,s=[];for(t=0,a=e.length;t<a;t+=5)n=e.slice(t,t+5),s.push(n);this.setState({arrPagination:s,data:s[this.state.indexPage]})}},{key:"searchKey",value:function(e){if(this.setState({key:e}),""!=e){var t=[];this.state.dataApi.map((function(a){a.Name.toLocaleUpperCase().includes(e.toLocaleUpperCase())&&t.push(a)}));var a=0;t.map((function(e){"Actived"==e.Status&&(a+=1)})),this.setState({data:t,totalActive:a})}else{var n=0;this.state.dataApi.map((function(e){"Actived"==e.Status&&(n+=1)})),this.setState({data:this.state.dataApi,totalActive:n})}}},{key:"toggleModal",value:function(){var e=Object(r.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getCompanyData();case 2:"new"==t&&this.setState({modalCom:!this.state.modalCom,action:t,Name:"",Company_Id:"",End_Date:new Date});case 3:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"onChange",value:function(e,t){this.setState(Object(n.a)({},e,t))}},{key:"addPackageSale",value:function(){var e=Object(r.a)(i.a.mark((function e(){var t,a,n,s,r,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.state,a=t.Name,n=t.Company_Id,null!=(s=t.End_Date)&&""!=s&&null!=a&&""!=a){e.next=4;break}return alert("Vui l\xf2ng nh\u1eadp \u0111\u1ea7y \u0111\u1ee7 tr\u01b0\u1eddng d\u1eef li\u1ec7u !!!"),e.abrupt("return");case 4:return r={Name:a,Company_Id:n,End_Date:s},this.setState({isLoading:!0}),e.next=8,L()({baseURL:w.a.BASE_URL,url:w.a.ADD_SALE,method:"PUT",data:r});case 8:1==(o=e.sent).data.is_success?(this.getData(),this.setState({modalCom:!this.state.modalCom})):(alert(o.data.message),this.setState({isLoading:!1}));case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"openUpdate",value:function(){var e=Object(r.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getCompanyData(t.Company_Id);case 2:this.setState({modalCom:!this.state.modalCom,action:"update",Name:t.Name,Company_Id:t.Company_Id,End_Date:t.End_Date,id:t._id,Status:t.Status});case 3:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"updatePackageSale",value:function(){var e=Object(r.a)(i.a.mark((function e(){var t,a,n,s,r,o,l;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.state,a=t.Name,n=t.Company_Id,s=t.End_Date,r=t.Status,null!=s&&""!=s&&null!=a&&""!=a){e.next=4;break}return alert("Vui l\xf2ng nh\u1eadp \u0111\u1ea7y \u0111\u1ee7 tr\u01b0\u1eddng d\u1eef li\u1ec7u !!!"),e.abrupt("return");case 4:return o={Name:a,Company_Id:n,End_Date:s,id:this.state.id,Status:r},this.setState({isLoading:!0}),e.next=8,L()({baseURL:w.a.BASE_URL,url:w.a.UPDATE_SALE,method:"POST",data:o});case 8:1==(l=e.sent).data.is_success?(this.getData(),this.setState({modalCom:!this.state.modalCom})):(alert(l.data.message),this.setState({isLoading:!1}));case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"delete",value:function(){var e=Object(r.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({isLoading:!0}),e.next=3,L()({baseURL:w.a.BASE_URL,url:w.a.DELETE_SALE,method:"DELETE",data:{id:this.state.delete._id}});case 3:1==(t=e.sent).data.is_success?(this.getData(),this.setState({modalDelete:!this.state.modalDelete,delete:null})):(alert(t.data.message),this.setState({isLoading:!1}));case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getUsers",value:function(){var t=this,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,n=this.state.limit,s=this.state.key||"",i={method:"GET",headers:A};fetch(e.BASE_URL+"/admin/users?key="+s+"&page="+a+"&limit="+n,i).then((function(e){e.json().then((function(e){t.setState({data:e.data,itemsCount:e.total,activePage:a,totalActive:e.totalActive,updated:""})}))})).catch(console.log)}},{key:"handlePageChange",value:function(){var e=Object(r.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.getUsers(t);case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"toggle",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";this.setState({modal:!this.state.modal,image:"",url:"",isActive:!1,isLoading:!1,errors:{},action:e,position:1,data:[],updated:""})}},{key:"inputChange",value:function(e){this.setState(Object(n.a)({},e.target.name,e.target.value))}},{key:"getCompanyData",value:function(){var e=Object(r.a)(i.a.mark((function e(t){var a,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L()({baseURL:w.a.BASE_URL,url:w.a.LIST_COMPANY,method:"POST"});case 2:if(a=e.sent,""==t&&void 0==t){e.next=8;break}return e.next=6,L()({baseURL:w.a.BASE_URL,url:w.a.LIST_COMPANY_WITH_ID+t,method:"POST"});case 6:null==(n=e.sent).data.data&&void 0==n.data.data||this.setState({currentCompany:n.data.data.Name});case 8:this.setState({dataCompany:a.data.data});case 9:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,a=t.data,n=t.key,s=t.action,i=t.End_Date,r=t.dataCompany,o=t.currentCompany,l=t.arrPagination,c=t.indexPage;return this.state.isLoading?Object(N.jsx)("div",{id:"page-loading",children:Object(N.jsxs)("div",{className:"three-balls",children:[Object(N.jsx)("div",{className:"ball ball1"}),Object(N.jsx)("div",{className:"ball ball2"}),Object(N.jsx)("div",{className:"ball ball3"})]})}):Object(N.jsxs)("div",{className:"animated fadeIn",children:[Object(N.jsx)(h.a,{children:Object(N.jsxs)(p.a,{children:[Object(N.jsx)("p",{style:T.success,children:this.state.updated}),Object(N.jsx)("p",{style:T.danger,children:this.state.deleted}),Object(N.jsxs)(b.a,{children:[Object(N.jsxs)(j.a,{children:[Object(N.jsx)("i",{className:"fa fa-align-justify"})," PAKAGE SALE (Total: ",void 0!=this.state.data||null!=this.state.data?this.state.data.length:0,", Active: ",this.state.totalActive,", Page: ",this.state.indexPage+1,")",Object(N.jsx)("div",{style:T.tags,children:Object(N.jsxs)("div",{children:[Object(N.jsx)(m.a,{style:T.searchInput,onChange:function(t){return e.searchKey(t.target.value)},name:"key",value:n,placeholder:"Search"}),Object(N.jsx)(g.a,{outline:!0,color:"primary",style:T.floatRight,size:"sm",onClick:function(t){return e.toggleModal("new")},children:"Add"})]})})]}),Object(N.jsx)(f.a,{children:Object(N.jsxs)(v.a,{responsive:!0,children:[Object(N.jsx)("thead",{children:Object(N.jsxs)("tr",{children:[Object(N.jsx)("th",{style:T.wa10,children:"No."}),Object(N.jsx)("th",{style:T.wh16,children:"Name"}),Object(N.jsx)("th",{style:T.wh16,children:"Company ID"}),Object(N.jsx)("th",{style:T.wh16,children:"End Date"}),Object(N.jsx)("th",{style:T.wh16,children:"Status"}),Object(N.jsx)("th",{style:T.w5,children:"Action"})]})}),Object(N.jsx)("tbody",{children:void 0!=a?a.map((function(t,a){return Object(N.jsxs)("tr",{style:T.row,children:[Object(N.jsx)("td",{style:T.wa10,children:a+1}),Object(N.jsx)("td",{style:T.wh16,children:t.Name}),Object(N.jsx)("td",{style:T.wh16,children:t.Company_Id}),Object(N.jsx)("td",{style:T.wh16,children:new Date(t.End_Date).toLocaleDateString()+" "+new Date(t.End_Date).toLocaleTimeString()}),Object(N.jsx)("td",{style:T.wh16,children:t.Status}),Object(N.jsxs)("td",{style:T.w5,children:[Object(N.jsx)(g.a,{outline:!0,color:"primary",size:"sm",onClick:function(a){return e.openUpdate(t)},children:"Update"})," ",Object(N.jsx)(g.a,{outline:!0,color:"danger",size:"sm",onClick:function(a){e.openDelete(t)},children:"Delete"})]})]},a)})):""})]})})]}),1==l.length?"":Object(N.jsx)("div",{style:{float:"right",marginRight:"10px",padding:"10px"},children:Object(N.jsx)("tr",{style:T.row,children:l.map((function(t,a){return Object(N.jsx)("td",{children:Object(N.jsx)(g.a,{style:T.pagination,color:a==c?"primary":"danger",onClick:function(t){e.setState({data:l[a],indexPage:a})},children:a+1})})}))})})]})}),Object(N.jsxs)(x.a,{isOpen:this.state.modalCom,className:this.props.className,children:[Object(N.jsx)(O.a,{children:"new"==this.state.action?"T\u1ea1o m\u1edbi":"C\u1eadp nh\u1eadt"}),Object(N.jsxs)(y.a,{children:[Object(N.jsx)(D.a,{field:"Name",label:"Name",value:this.state.Name,placeholder:"Name Package",onChange:function(t){return e.onChange("Name",t.target.value)}}),Object(N.jsxs)("div",{style:T.datePicker,children:[Object(N.jsx)("label",{children:"End Date:  "}),Object(N.jsx)(k.a,{selected:new Date(i),onChange:function(t){return e.setState({End_Date:t})}})]}),"new"==s?"":Object(N.jsxs)("div",{children:[Object(N.jsx)("label",{style:T.flexLabel,htmlFor:"tag",children:"Status:"}),Object(N.jsxs)("select",{style:T.flexOption,name:"Status",onChange:function(t){return e.onChange("Status",t.target.value)},children:[Object(N.jsx)("option",{value:this.state.Status,children:""==this.state.Status?" - - - - - - - - - - ":this.state.Status}),Object(N.jsx)("option",{value:"Actived",children:"Actived"}),Object(N.jsx)("option",{value:"Locked",children:"Locked"}),Object(N.jsx)("option",{value:"Deactived",children:"Deactived"})]})]}),Object(N.jsxs)("div",{children:[Object(N.jsx)("label",{style:T.flexLabel,htmlFor:"tag",children:"Company:    "}),Object(N.jsxs)("select",{style:T.flexOption,name:"Company_Id",onChange:function(t){return e.onChange("Company_Id",t.target.value)},children:[Object(N.jsx)("option",{value:this.state.Company_Id,children:"-----"}),r.map((function(e,t){return e.Name==o?Object(N.jsx)("option",{selected:!0,value:e._id,children:e.Name}):Object(N.jsx)("option",{value:e._id,children:e.Name})}))]})]})]}),Object(N.jsxs)(C.a,{children:[Object(N.jsx)(g.a,{color:"primary",onClick:function(t){"new"===e.state.action?e.addPackageSale():e.updatePackageSale()},disabled:this.state.isLoading,children:"L\u01b0u"})," ",Object(N.jsx)(g.a,{color:"secondary",onClick:function(t){return e.toggleModal("new")},children:"\u0110\xf3ng"})]})]}),Object(N.jsxs)(x.a,{isOpen:this.state.modalDelete,toggle:function(t){return e.setState({modalDelete:!e.state.modalDelete,delete:null})},className:this.props.className,children:[Object(N.jsx)(O.a,{toggle:function(t){return e.setState({modalDelete:!e.state.modalDelete,delete:null})},children:"Delete"}),Object(N.jsx)(y.a,{children:Object(N.jsx)("label",{htmlFor:"tag",children:'Do you want to delete user "'.concat(this.state.delete?this.state.delete.Email:"",'" ?')})}),Object(N.jsxs)(C.a,{children:[Object(N.jsx)(g.a,{color:"primary",onClick:function(t){return e.delete()},disabled:this.state.isLoading,children:"Delete"})," ",Object(N.jsx)(g.a,{color:"secondary",onClick:function(t){return e.setState({modalDelete:!e.state.modalDelete,delete:null})},children:"\u0110\xf3ng"})]})]})]})}}]),s}(u.Component),T={datePicker:{marginBottom:20},flexLabel:{width:100},flexOption:{width:300},a:{textDecoration:"none"},floatRight:{float:"right",marginTop:"3px"},spinner:{width:"30px"},center:{textAlign:"center"},tbody:{height:"380px",overflowY:"auto"},wa10:{width:"5%",float:"left",height:"80px"},wh16:{width:"17%",float:"left",height:"80px"},wh15:{width:"20%",float:"left",height:"80px"},w5:{width:"20%",float:"left",height:"80px"},row:{float:"left",width:"100%"},success:{color:"green"},danger:{color:"red"},mgl5:{marginLeft:"5px"},tags:{float:"right",marginRight:"5px",width:"250px"},searchInput:{width:"190px",display:"inline-block"},userActive:{color:"green"},userPending:{color:"red"},nagemonNameCol:{width:"328px"},image:{width:"100px",height:"100px",borderRadius:"99999px"}};t.default=P}.call(this,a(114))},662:function(e,t,a){"use strict";var n=a(12),s=a(29),i=a(658),r=a(35),o=a(2),l=a.n(o),c=a(64),d=a.n(c),u=a(648),h=a.n(u),p=a(651),b={active:d.a.bool,"aria-label":d.a.string,block:d.a.bool,color:d.a.string,disabled:d.a.bool,outline:d.a.bool,tag:p.n,innerRef:d.a.oneOfType([d.a.object,d.a.func,d.a.string]),onClick:d.a.func,size:d.a.string,children:d.a.node,className:d.a.string,cssModule:d.a.object,close:d.a.bool},j=function(e){function t(t){var a;return(a=e.call(this,t)||this).onClick=a.onClick.bind(Object(i.a)(a)),a}Object(r.a)(t,e);var a=t.prototype;return a.onClick=function(e){if(!this.props.disabled)return this.props.onClick?this.props.onClick(e):void 0;e.preventDefault()},a.render=function(){var e=this.props,t=e.active,a=e["aria-label"],i=e.block,r=e.className,o=e.close,c=e.cssModule,d=e.color,u=e.outline,b=e.size,j=e.tag,m=e.innerRef,g=Object(s.a)(e,["active","aria-label","block","className","close","cssModule","color","outline","size","tag","innerRef"]);o&&"undefined"===typeof g.children&&(g.children=l.a.createElement("span",{"aria-hidden":!0},"\xd7"));var f="btn"+(u?"-outline":"")+"-"+d,v=Object(p.j)(h()(r,{close:o},o||"btn",o||f,!!b&&"btn-"+b,!!i&&"btn-block",{active:t,disabled:this.props.disabled}),c);g.href&&"button"===j&&(j="a");var x=o?"Close":null;return l.a.createElement(j,Object(n.a)({type:"button"===j&&g.onClick?"button":void 0},g,{className:v,ref:m,onClick:this.onClick,"aria-label":a||x}))},t}(l.a.Component);j.propTypes=b,j.defaultProps={color:"secondary",tag:"button"},t.a=j},736:function(e,t,a){"use strict";var n=a(12),s=a(29),i=a(2),r=a.n(i),o=a(64),l=a.n(o),c=a(648),d=a.n(c),u=a(651),h={className:l.a.string,cssModule:l.a.object,size:l.a.string,bordered:l.a.bool,borderless:l.a.bool,striped:l.a.bool,dark:l.a.bool,hover:l.a.bool,responsive:l.a.oneOfType([l.a.bool,l.a.string]),tag:u.n,responsiveTag:u.n,innerRef:l.a.oneOfType([l.a.func,l.a.string,l.a.object])},p=function(e){var t=e.className,a=e.cssModule,i=e.size,o=e.bordered,l=e.borderless,c=e.striped,h=e.dark,p=e.hover,b=e.responsive,j=e.tag,m=e.responsiveTag,g=e.innerRef,f=Object(s.a)(e,["className","cssModule","size","bordered","borderless","striped","dark","hover","responsive","tag","responsiveTag","innerRef"]),v=Object(u.j)(d()(t,"table",!!i&&"table-"+i,!!o&&"table-bordered",!!l&&"table-borderless",!!c&&"table-striped",!!h&&"table-dark",!!p&&"table-hover"),a),x=r.a.createElement(j,Object(n.a)({},f,{ref:g,className:v}));if(b){var O=Object(u.j)(!0===b?"table-responsive":"table-responsive-"+b,a);return r.a.createElement(m,{className:O},x)}return x};p.propTypes=h,p.defaultProps={tag:"table",responsiveTag:"div"},t.a=p}}]);
//# sourceMappingURL=35.d1feba57.chunk.js.map