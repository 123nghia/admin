(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[68],{1259:function(e,t,a){"use strict";a.r(t),function(e){var n=a(165),i=a(113),s=a.n(i),l=a(653),r=a(166),c=a(167),o=a(169),d=a(168),h=a(2),u=a(661),p=a(662),m=a(686),j=a(687),g=a(664),x=a(684),k=a(663),b=a(1303),f=a(1239),v=a(1240),O=a(1241),_=(a(658),a(682),a(651)),y=a(646),S=a(655),C=a.n(S),L=a(17),N=new Headers,A=localStorage.getItem("auth");N.append("Authorization","Bearer "+A),N.append("Content-Type","application/json");var w=function(t){Object(o.a)(i,t);var a=Object(d.a)(i);function i(e){var t;return Object(r.a)(this,i),(t=a.call(this,e)).getData=Object(l.a)(s.a.mark((function e(){var a,n,i,l,r,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=t.state,n=a.company_id,i=a.role,l=JSON.parse(n),t.setState({isLoading:!0}),"ADMIN"!=i&&"ADMINSALE"!=i){e.next=9;break}return e.next=6,C()({baseURL:_.a.BASE_URL,url:_.a.LIST_LINK,method:"POST"});case 6:r=e.sent,e.next=12;break;case 9:return e.next=11,C()({baseURL:_.a.BASE_URL,url:_.a.LIST_LINK,method:"POST",data:{condition:{Company_Id:l.company_id}}});case 11:r=e.sent;case 12:t.pagination(r.data.data),t.setState({dataApi:r.data.data}),c=0,r.data.data.map((function(e){"Actived"==e.Status&&(c+=1)})),t.setState({isLoading:!1,totalActive:c});case 17:case"end":return e.stop()}}),e)}))),t.openDelete=function(e){t.setState({modalDelete:!t.state.modalDelete,delete:e})},t.state={data:[],key:"",activePage:1,page:1,itemsCount:0,limit:20,totalActive:0,modalCom:!1,viewingUser:{},communities:[],updated:"",dataApi:[],action:"new",Company_Id:"",link_shop:"",link_shopee:"",link_lazada:"",link_tiki:"",Status:"Actived",modalDelete:!1,delete:null,dataCompany:[],currentCompany:"",arrPagination:[],indexPage:0,company_id:localStorage.getItem("user"),role:localStorage.getItem("role")},t}return Object(c.a)(i,[{key:"componentDidMount",value:function(){var e=Object(l.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.getData();case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"pagination",value:function(e){var t,a,n,i=[];for(t=0,a=e.length;t<a;t+=5)n=e.slice(t,t+5),i.push(n);this.setState({arrPagination:i,data:i[this.state.indexPage]})}},{key:"searchKey",value:function(e){if(this.setState({key:e}),""!=e){var t=[];this.state.dataApi.map((function(a){a.link_shop.toLocaleUpperCase().includes(e.toLocaleUpperCase())&&t.push(a)}));var a=0;t.map((function(e){"Actived"==e.Status&&(a+=1)})),this.setState({data:t,totalActive:a})}else{var n=0;this.state.dataApi.map((function(e){"Actived"==e.Status&&(n+=1)})),this.setState({data:this.state.dataApi,totalActive:n})}}},{key:"toggleModal",value:function(){var e=Object(l.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getCompanyData();case 2:"new"==t&&this.setState({modalCom:!this.state.modalCom,action:t,Company_Id:"",link_shop:"",link_shopee:"",link_lazada:"",link_tiki:""});case 3:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"onChange",value:function(e,t){this.setState(Object(n.a)({},e,t))}},{key:"addPackageSale",value:function(){var e=Object(l.a)(s.a.mark((function e(){var t,a,n,i,l,r,c,o;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.state,a=t.Company_Id,n=t.link_shop,i=t.link_shopee,l=t.link_lazada,r=t.link_tiki,null!=n&&""!=n){e.next=4;break}return alert("Vui l\xf2ng nh\u1eadp \u0111\u1ea7y \u0111\u1ee7 tr\u01b0\u1eddng !!!"),e.abrupt("return");case 4:return c={Company_Id:a,link_shop:n,link_shopee:i,link_lazada:l,link_tiki:r},this.setState({isLoading:!0}),e.next=8,C()({baseURL:_.a.BASE_URL,url:_.a.ADD_LINK,method:"PUT",data:c});case 8:1==(o=e.sent).data.is_success?(this.getData(),this.setState({modalCom:!this.state.modalCom})):(alert(o.data.message),this.setState({isLoading:!1}));case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"openUpdate",value:function(){var e=Object(l.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getCompanyData(t.Company_Id);case 2:this.setState({modalCom:!this.state.modalCom,action:"update",Company_Id:t.Company_Id,link_shop:t.link_shop,link_lazada:t.link_lazada,link_shopee:t.link_shopee,link_tiki:t.link_tiki,id:t._id,Status:t.Status});case 3:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"updatePackageSale",value:function(){var e=Object(l.a)(s.a.mark((function e(){var t,a,n,i,l,r,c,o,d,h,u,p;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.state,a=t.Company_Id,n=t.link_shop,i=t.link_shopee,l=t.link_lazada,r=t.link_tiki,c=t.Status,o=t.company_id,d=t.role,h=JSON.parse(o),null!=n&&""!=n){e.next=5;break}return alert("Vui l\xf2ng nh\u1eadp \u0111\u1ea7y \u0111\u1ee7 tr\u01b0\u1eddng !!!"),e.abrupt("return");case 5:return u={Company_Id:"ADMIN"==d||"ADMINSALE"==d?a:h.company_id,link_shop:n,link_shopee:i,link_lazada:l,link_tiki:r,id:this.state.id,Status:c},this.setState({isLoading:!0}),e.next=9,C()({baseURL:_.a.BASE_URL,url:_.a.UPDATE_LINK,method:"POST",data:u});case 9:1==(p=e.sent).data.is_success?(this.getData(),this.setState({modalCom:!this.state.modalCom})):(alert(p.data.message),this.setState({isLoading:!1}));case 11:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"delete",value:function(){var e=Object(l.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({isLoading:!0}),e.next=3,C()({baseURL:_.a.BASE_URL,url:_.a.DELETE_LINK,method:"DELETE",data:{id:this.state.delete._id}});case 3:1==(t=e.sent).data.is_success?(this.getData(),this.setState({modalDelete:!this.state.modalDelete,delete:null})):(alert(t.data.message),this.setState({isLoading:!1}));case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getUsers",value:function(){var t=this,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,n=this.state.limit,i=this.state.key||"",s={method:"GET",headers:N};fetch(e.BASE_URL+"/admin/users?key="+i+"&page="+a+"&limit="+n,s).then((function(e){e.json().then((function(e){t.setState({data:e.data,itemsCount:e.total,activePage:a,totalActive:e.totalActive,updated:""})}))})).catch(console.log)}},{key:"handlePageChange",value:function(){var e=Object(l.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.getUsers(t);case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"toggle",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";this.setState({modal:!this.state.modal,image:"",url:"",isActive:!1,isLoading:!1,errors:{},action:e,position:1,data:[],updated:""})}},{key:"inputChange",value:function(e){this.setState(Object(n.a)({},e.target.name,e.target.value))}},{key:"getCompanyData",value:function(){var e=Object(l.a)(s.a.mark((function e(t){var a,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C()({baseURL:_.a.BASE_URL,url:_.a.LIST_COMPANY,method:"POST"});case 2:if(a=e.sent,""==t&&void 0==t){e.next=8;break}return e.next=6,C()({baseURL:_.a.BASE_URL,url:_.a.LIST_COMPANY_WITH_ID+t,method:"POST"});case 6:null==(n=e.sent).data.data&&void 0==n.data.data||this.setState({currentCompany:n.data.data.Name});case 8:this.setState({dataCompany:a.data.data});case 9:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,a=t.data,n=t.key,i=t.dataCompany,s=t.currentCompany,l=t.arrPagination,r=t.indexPage,c=t.role;return this.state.isLoading?Object(L.jsx)("div",{id:"page-loading",children:Object(L.jsxs)("div",{className:"three-balls",children:[Object(L.jsx)("div",{className:"ball ball1"}),Object(L.jsx)("div",{className:"ball ball2"}),Object(L.jsx)("div",{className:"ball ball3"})]})}):Object(L.jsxs)("div",{className:"animated fadeIn",children:[Object(L.jsx)(u.a,{children:Object(L.jsxs)(p.a,{children:[Object(L.jsx)("p",{style:D.success,children:this.state.updated}),Object(L.jsx)("p",{style:D.danger,children:this.state.deleted}),Object(L.jsxs)(m.a,{children:[Object(L.jsxs)(j.a,{children:[Object(L.jsx)("i",{className:"fa fa-align-justify"})," LINK MANAGER (Total: ",void 0!=this.state.data||null!=this.state.data?this.state.data.length:0,", Active: ",this.state.totalActive,", Page: ",this.state.indexPage+1,")",Object(L.jsx)("div",{style:D.tags,children:Object(L.jsxs)("div",{children:[Object(L.jsx)(g.a,{style:D.searchInput,onChange:function(t){return e.searchKey(t.target.value)},name:"key",value:n,placeholder:"Search"}),"ADMIN"==c||"ADMINSALE"==c?Object(L.jsx)(x.a,{outline:!0,color:"primary",style:D.floatRight,size:"sm",onClick:function(t){return e.toggleModal("new")},children:"Add"}):""]})})]}),Object(L.jsx)(k.a,{children:Object(L.jsxs)("table",{className:"table table-hover table-outline mb-0 d-none d-sm-table",children:[Object(L.jsx)("thead",{className:"thead-light",children:Object(L.jsxs)("tr",{children:[Object(L.jsx)("th",{className:"text-center",children:"Company ID"}),Object(L.jsx)("th",{className:"text-center",children:"Link Shop"}),Object(L.jsx)("th",{className:"text-center",children:"Link Shopee"}),Object(L.jsx)("th",{className:"text-center",children:"Link Lazada"}),Object(L.jsx)("th",{className:"text-center",children:"Link Tiki"}),Object(L.jsx)("th",{className:"text-center",children:"Action"})]})}),Object(L.jsx)("tbody",{children:void 0!=a?a.map((function(t,a){return Object(L.jsxs)("tr",{children:[Object(L.jsx)("td",{className:"text-center",children:t.Company_Id}),Object(L.jsx)("td",{className:"text-center",children:t.link_shop}),Object(L.jsx)("td",{className:"text-center",children:t.link_shopee}),Object(L.jsx)("td",{className:"text-center",children:t.link_lazada}),Object(L.jsx)("td",{className:"text-center",children:t.link_tiki}),Object(L.jsxs)("td",{className:"text-center",children:[Object(L.jsx)(x.a,{outline:!0,color:"primary",size:"sm",onClick:function(a){return e.openUpdate(t)},children:"C\u1eadp nh\u1eadt"})," ","ADMIN"==c||"ADMINSALE"==c?Object(L.jsx)(x.a,{outline:!0,color:"danger",size:"sm",onClick:function(a){e.openDelete(t)},children:"Delete"}):""]})]},a)})):""})]})})]}),1==l.length?"":Object(L.jsx)("div",{style:{float:"right",marginRight:"10px",padding:"10px"},children:Object(L.jsx)("tr",{style:D.row,children:l.map((function(t,a){return Object(L.jsx)("td",{children:Object(L.jsx)(x.a,{style:D.pagination,color:a==r?"primary":"danger",onClick:function(t){e.setState({data:l[a],indexPage:a})},children:a+1})})}))})})]})}),Object(L.jsxs)(b.a,{isOpen:this.state.modalCom,className:this.props.className,children:[Object(L.jsx)(f.a,{children:"new"==this.state.action?"T\u1ea1o m\u1edbi":"C\u1eadp nh\u1eadt"}),Object(L.jsxs)(v.a,{children:[Object(L.jsx)(y.a,{field:"link_shop",label:"Link shop",value:this.state.link_shop,placeholder:"Link Shop",onChange:function(t){return e.onChange("link_shop",t.target.value)}}),Object(L.jsx)(y.a,{field:"link_shopee",label:"Link Shopee",value:this.state.link_shopee,placeholder:"Link Shopee",onChange:function(t){return e.onChange("link_shopee",t.target.value)}}),Object(L.jsx)(y.a,{field:"link_lazada",label:"Link Lazada",value:this.state.link_lazada,placeholder:"Link Lazada",onChange:function(t){return e.onChange("link_lazada",t.target.value)}}),Object(L.jsx)(y.a,{field:"link_tiki",label:"Link Tiki",value:this.state.link_tiki,placeholder:"Link Tiki",onChange:function(t){return e.onChange("link_tiki",t.target.value)}}),"ADMIN"==c||"ADMINSALE"==c?Object(L.jsxs)("div",{children:[Object(L.jsx)("label",{style:D.flexLabel,htmlFor:"tag",children:"Company:    "}),Object(L.jsxs)("select",{style:D.flexOption,name:"Company_Id",onChange:function(t){return e.onChange("Company_Id",t.target.value)},children:[Object(L.jsx)("option",{value:this.state.Company_Id,children:"-----"}),i.map((function(e,t){return e.Name==s?Object(L.jsx)("option",{selected:!0,value:e._id,children:e.Name}):Object(L.jsx)("option",{value:e._id,children:e.Name})}))]})]}):""]}),Object(L.jsxs)(O.a,{children:[Object(L.jsx)(x.a,{color:"primary",onClick:function(t){"new"===e.state.action?e.addPackageSale():e.updatePackageSale()},disabled:this.state.isLoading,children:"Save"})," ",Object(L.jsx)(x.a,{color:"secondary",onClick:function(t){return e.toggleModal("new")},children:"\u0110\xf3ng"})]})]}),Object(L.jsxs)(b.a,{isOpen:this.state.modalDelete,toggle:function(t){return e.setState({modalDelete:!e.state.modalDelete,delete:null})},className:this.props.className,children:[Object(L.jsx)(f.a,{toggle:function(t){return e.setState({modalDelete:!e.state.modalDelete,delete:null})},children:"Xo\xe1"}),Object(L.jsx)(v.a,{children:Object(L.jsx)("label",{htmlFor:"tag",children:'Do you want to delete user "'.concat(this.state.delete?this.state.delete.Email:"",'" ?')})}),Object(L.jsxs)(O.a,{children:[Object(L.jsx)(x.a,{color:"primary",onClick:function(t){return e.delete()},disabled:this.state.isLoading,children:"Xo\xe1"})," ",Object(L.jsx)(x.a,{color:"secondary",onClick:function(t){return e.setState({modalDelete:!e.state.modalDelete,delete:null})},children:"\u0110\xf3ng"})]})]})]})}}]),i}(h.Component),D={datePicker:{marginBottom:20},flexLabel:{width:100},flexOption:{width:300},a:{textDecoration:"none"},floatRight:{float:"right",marginTop:"3px"},spinner:{width:"30px"},center:{textAlign:"center"},tbody:{height:"380px",overflowY:"auto"},wa10:{width:"5%",float:"left",height:"80px"},wh16:{width:"17%",float:"left",height:"80px"},wh15:{width:"20%",float:"left",height:"80px"},w5:{width:"20%",float:"left",height:"80px"},row:{float:"left",width:"100%"},success:{color:"green"},danger:{color:"red"},mgl5:{marginLeft:"5px"},tags:{float:"right",marginRight:"5px",width:"250px"},searchInput:{width:"190px",display:"inline-block"},userActive:{color:"green"},userPending:{color:"red"},nagemonNameCol:{width:"328px"},image:{width:"100px",height:"100px",borderRadius:"99999px"}};t.default=w}.call(this,a(114))},646:function(e,t,a){"use strict";a(2);var n=a(637),i=a.n(n),s=a(17),l=function(e){var t=e.field,a=e.value,n=e.label,l=e.error,r=e.type,c=e.onChange,o=e.checkUserExists,d=e.readOnly,h=e.placeholder,u=e.onClick;return Object(s.jsxs)("div",{className:i()("form-group",{"has-error":l}),children:[Object(s.jsx)("label",{className:"control-label",children:n}),Object(s.jsx)("input",{onChange:c,onClick:u,onBlur:o,value:a,type:r,name:t,placeholder:h,readOnly:d,className:"form-control"}),l&&Object(s.jsx)("span",{className:"help-block",children:l})]})};l.defaultProps={type:"text"},t.a=l}}]);
//# sourceMappingURL=68.30233eed.chunk.js.map