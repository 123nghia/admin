(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[73],{1530:function(e,t,a){"use strict";a.r(t),function(e){var n=a(167),s=a(114),r=a.n(s),i=a(671),c=a(168),l=a(169),o=a(171),d=a(170),u=a(2),h=a(679),p=a(680),j=a(736),g=a(737),b=a(688),f=a(753),m=a(682),x=a(966),O=a(1599),v=a(1513),S=a(1514),y=a(1515),w=(a(674),a(967)),_=a.n(w),k=(a(695),a(670)),D=a(673),L=a.n(D),E=a(17),C=new Headers,A=localStorage.getItem("auth");C.append("Authorization","Bearer "+A),C.append("Content-Type","application/json");var I=function(t){Object(o.a)(s,t);var a=Object(d.a)(s);function s(e){var t;return Object(c.a)(this,s),(t=a.call(this,e)).getData=Object(i.a)(r.a.mark((function e(){var a,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.setState({isLoading:!0}),e.next=3,L()({baseURL:k.a.BASE_URL,url:k.a.LIST_SALELOG,method:"GET"});case 3:a=e.sent,t.pagination(a.data.data),t.setState({dataApi:a.data.data}),n=0,a.data.data.map((function(e){"Actived"==e.Status&&(n+=1)})),t.setState({isLoading:!1,totalActive:n});case 9:case"end":return e.stop()}}),e)}))),t.openDelete=function(e){t.setState({modalDelete:!t.state.modalDelete,delete:e})},t.state={data:[],key:"",activePage:1,page:1,itemsCount:0,limit:20,totalActive:0,modalCom:!1,viewingUser:{},communities:[],updated:"",dataApi:[],action:"new",Sale_Id:"",Package_Id:"",End_Date:new Date,Status:"",modalDelete:!1,delete:null,dataSale:[],dataSaleOfCompany:[],currentSale:"",currentSaleOfCompany:"",arrPagination:[],indexPage:0,company_id:localStorage.getItem("user"),token:{Authorization:"Bearer ".concat(localStorage.getItem("token"))},isUpdate:!1},t}return Object(l.a)(s,[{key:"componentDidMount",value:function(){var e=Object(i.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.getData(),this.getAllSaleOfCompany();case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"pagination",value:function(e){var t,a,n,s=[];for(t=0,a=e.length;t<a;t+=5)n=e.slice(t,t+5),s.push(n);0!=s.length?this.setState({arrPagination:s,data:s[this.state.indexPage]}):this.setState({arrPagination:s,data:[]})}},{key:"searchKey",value:function(e){}},{key:"toggleModal",value:function(){var e=Object(i.a)(r.a.mark((function e(t){var a,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=this.state,a.Sale_Id,n=a.End_Date,this.setState({isUpdate:!0}),e.next=4,this.getSaleData();case 4:return e.next=6,this.getAllSaleOfCompany();case 6:"new"==t&&this.setState({modalCom:!this.state.modalCom,action:t,End_Date:n,Sale_Id:""});case 7:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"onChange",value:function(e,t){this.setState(Object(n.a)({},e,t))}},{key:"addUser",value:function(){var e=Object(i.a)(r.a.mark((function e(){var t,a,n,s,i,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.state,a=t.Sale_Id,n=t.End_Date,s=t.Package_Id,i={End_Date:n,Sale_Id:a,Package_Id:s},this.setState({isLoading:!0}),e.next=5,L()({baseURL:k.a.BASE_URL,url:k.a.ADD_SALELOG,method:"PUT",data:i});case 5:1==(c=e.sent).data.is_success?(this.getData(),this.setState({modalCom:!this.state.modalCom})):(alert(c.data.message),this.setState({isLoading:!1}));case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"openUpdate",value:function(){var e=Object(i.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({isUpdate:!1,currentSaleOfCompany:t._id}),e.next=3,this.getSaleData(t.Package_Id);case 3:this.setState({modalCom:!this.state.modalCom,action:"update",Sale_Id:t.Sale_Id,End_Date:t.End_Date,Package_Id:t.Package_Id,id:t._id,Status:t.Status});case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"updateUser",value:function(){var e=Object(i.a)(r.a.mark((function e(){var t,a,n,s,i,c,l;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({isUpdate:!0}),t=this.state,a=t.End_Date,t.Sale_Id,n=t.Status,s=t.Package_Id,i=t.currentSaleOfCompany,c={End_Date:a,Sale_Id:i,id:this.state.id,Status:n,Package_Id:s},this.setState({isLoading:!0}),e.next=6,L()({baseURL:k.a.BASE_URL,url:k.a.UPDATE_SALELOG,method:"POST",data:c});case 6:1==(l=e.sent).data.is_success?(this.getData(),this.setState({modalCom:!this.state.modalCom})):(alert(l.data.message),this.setState({isLoading:!1}));case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"delete",value:function(){var e=Object(i.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({isLoading:!0}),e.next=3,L()({baseURL:k.a.BASE_URL,url:k.a.DELETE_SALELOG,method:"DELETE",data:{id:this.state.delete._id}});case 3:1==(t=e.sent).data.is_success?(this.getData(),this.setState({modalDelete:!this.state.modalDelete,delete:null})):(alert(t.data.message),this.setState({isLoading:!1}));case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getUsers",value:function(){var t=this,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,n=this.state.limit,s=this.state.key||"",r={method:"GET",headers:C};fetch(e.BASE_URL+"/admin/users?key="+s+"&page="+a+"&limit="+n,r).then((function(e){e.json().then((function(e){t.setState({data:e.data,itemsCount:e.total,activePage:a,totalActive:e.totalActive,updated:""})}))})).catch(console.log)}},{key:"getSaleData",value:function(){var e=Object(i.a)(r.a.mark((function e(t){var a,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L()({baseURL:k.a.BASE_URL,url:k.a.LIST_SALE,method:"GET"});case 2:if(a=e.sent,""==t&&void 0==t){e.next=8;break}return e.next=6,L()({baseURL:k.a.BASE_URL,url:k.a.LIST_SALE_WITH_ID+t,method:"GET"});case 6:null==(n=e.sent).data.data&&void 0==n.data.data||this.setState({currentSale:n.data.data.Name});case 8:this.setState({dataSale:a.data.data});case 9:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getAllSaleOfCompany",value:function(){var e=Object(i.a)(r.a.mark((function e(){var t,a,n,s;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.state.company_id,a=JSON.parse(t),n={company_id:a.company_id},e.next=5,L()({baseURL:k.a.BASE_URL,url:k.a.GET_SALE,method:"POST",data:n,headers:this.state.token});case 5:s=e.sent,this.setState({dataSaleOfCompany:s.data.data});case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"inputChange",value:function(e){this.setState(Object(n.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){var e=this,t=this.state,a=t.data,n=t.key,s=t.dataSaleOfCompany,c=t.dataSale,l=t.currentSale,o=t.action,d=t.arrPagination,u=t.indexPage,w=t.End_Date,k=t.isUpdate;return this.state.isLoading?Object(E.jsx)("div",{id:"page-loading",children:Object(E.jsxs)("div",{className:"three-balls",children:[Object(E.jsx)("div",{className:"ball ball1"}),Object(E.jsx)("div",{className:"ball ball2"}),Object(E.jsx)("div",{className:"ball ball3"})]})}):Object(E.jsxs)("div",{className:"animated fadeIn",children:[Object(E.jsx)(h.a,{children:Object(E.jsxs)(p.a,{children:[Object(E.jsx)("p",{style:P.success,children:this.state.updated}),Object(E.jsx)("p",{style:P.danger,children:this.state.deleted}),Object(E.jsxs)(j.a,{children:[Object(E.jsxs)(g.a,{children:[Object(E.jsxs)("i",{className:"fa fa-align-justify",children:[" PAKAGE SALE LOG (Total: ",void 0!=this.state.data||null!=this.state.data?this.state.data.length:0,", Active: ",this.state.totalActive,", Page: ",this.state.indexPage+1,")"]}),Object(E.jsx)("div",{style:P.tags,children:Object(E.jsxs)("div",{children:[Object(E.jsx)(b.a,{style:P.searchInput,onChange:function(t){return e.searchKey(t.target.value)},name:"key",value:n,placeholder:"Search"}),Object(E.jsx)(f.a,{outline:!0,color:"primary",style:P.floatRight,size:"sm",onClick:function(){var t=Object(i.a)(r.a.mark((function t(a){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.toggleModal("new");case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),children:"Add"})]})})]}),Object(E.jsx)(m.a,{children:Object(E.jsxs)(x.a,{responsive:!0,children:[Object(E.jsx)("thead",{children:Object(E.jsxs)("tr",{children:[Object(E.jsx)("th",{style:P.wa10,children:"No."}),Object(E.jsx)("th",{style:P.wh25,children:"Sale ID"}),Object(E.jsx)("th",{style:P.wh25,children:"Package ID"}),Object(E.jsx)("th",{style:P.wh25,children:"End Date"}),Object(E.jsx)("th",{style:P.wh25,children:"Status"}),Object(E.jsx)("th",{style:P.w5,children:"Action"})]})}),Object(E.jsx)("tbody",{children:void 0!=a?a.map((function(t,a){return Object(E.jsxs)("tr",{style:P.row,children:[Object(E.jsx)("td",{style:P.wa10,children:a+1}),Object(E.jsx)("td",{style:P.wh25,children:t.Sale_Id}),Object(E.jsx)("td",{style:P.wh25,children:t.Package_Id}),Object(E.jsx)("td",{style:P.wh25,children:new Date(t.End_Date).toLocaleDateString()+" "+new Date(t.End_Date).toLocaleTimeString()}),Object(E.jsx)("td",{style:P.wh25,children:t.Status}),Object(E.jsxs)("td",{style:P.w5,children:[Object(E.jsx)(f.a,{style:P.mgl5,outline:!0,color:"primary",size:"sm",onClick:function(){var a=Object(i.a)(r.a.mark((function a(n){return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.openUpdate(t);case 2:return a.abrupt("return",a.sent);case 3:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}(),children:"C\u1eadp nh\u1eadt"})," ",Object(E.jsx)(f.a,{outline:!0,color:"danger",size:"sm",onClick:function(a){e.openDelete(t)},children:"Xo\xe1"})]})]},a)})):""})]})})]}),1==d.length?"":Object(E.jsx)("div",{style:{float:"right",marginRight:"10px",padding:"10px"},children:Object(E.jsx)("tr",{style:P.row,children:d.map((function(t,a){return Object(E.jsx)("td",{children:Object(E.jsx)(f.a,{style:P.pagination,color:a==u?"primary":"danger",onClick:function(t){e.setState({data:d[a],indexPage:a})},children:a+1})})}))})})]})}),Object(E.jsxs)(O.a,{isOpen:this.state.modalCom,className:this.props.className,children:[Object(E.jsx)(v.a,{children:"new"==this.state.action?"T\u1ea1o m\u1edbi":"C\u1eadp nh\u1eadt"}),Object(E.jsxs)(S.a,{children:[Object(E.jsxs)("div",{style:P.datePicker,children:[Object(E.jsx)("label",{children:"End Date:  "})," "," ",Object(E.jsx)(_.a,{selected:new Date(w),onChange:function(t){return e.setState({End_Date:t})}})]}),"new"==o?"":Object(E.jsxs)("div",{children:[Object(E.jsx)("label",{style:P.flexLabel,htmlFor:"tag",children:"Tr\u1ea1ng th\xe1i    "}),Object(E.jsxs)("select",{style:P.flexOption,name:"Status",onChange:function(t){return e.onChange("Status",t.target.value)},children:[Object(E.jsx)("option",{value:this.state.Status,children:""==this.state.Status?" - - - - - - - - - - ":this.state.Status}),Object(E.jsx)("option",{value:"Actived",children:"Actived"}),Object(E.jsx)("option",{value:"Locked",children:"Locked"}),Object(E.jsx)("option",{value:"Deactived",children:"Deactived"})]})]}),Object(E.jsxs)("div",{children:[Object(E.jsx)("label",{style:P.flexLabel,htmlFor:"tag",children:"Package:    "}),Object(E.jsxs)("select",{style:P.flexOption,name:"Package_Id",onChange:function(t){return e.onChange("Package_Id",t.target.value)},children:[Object(E.jsx)("option",{value:this.state.Package_Id,children:"-----"}),c.map((function(e,t){return e.Name==l?Object(E.jsx)("option",{selected:!0,value:e._id,children:e.Name}):Object(E.jsx)("option",{value:e._id,children:e.Name})}))]})]}),k?Object(E.jsxs)("div",{children:[Object(E.jsx)("label",{style:P.flexLabel,htmlFor:"tag",children:"Sale:    "}),Object(E.jsxs)("select",{style:P.flexOption,name:"Sale_Id",onChange:function(t){return e.onChange("Sale_Id",t.target.value)},children:[Object(E.jsx)("option",{value:this.state.Sale_Id,children:"-----"}),s.map((function(e,t){return Object(E.jsx)("option",{value:e._id,children:e.Name})}))]})]}):""]}),Object(E.jsxs)(y.a,{children:[Object(E.jsx)(f.a,{color:"primary",onClick:function(t){"new"===e.state.action?e.addUser():e.updateUser()},disabled:this.state.isLoading,children:"L\u01b0u"})," ",Object(E.jsx)(f.a,{color:"secondary",onClick:function(t){return e.toggleModal("new")},children:"\u0110\xf3ng"})]})]}),Object(E.jsxs)(O.a,{isOpen:this.state.modalDelete,toggle:function(t){return e.setState({modalDelete:!e.state.modalDelete,delete:null})},className:this.props.className,children:[Object(E.jsx)(v.a,{toggle:function(t){return e.setState({modalDelete:!e.state.modalDelete,delete:null})},children:"Xo\xe1"}),Object(E.jsx)(S.a,{children:Object(E.jsx)("label",{htmlFor:"tag",children:'Do you want to delete user "'.concat(this.state.delete?this.state.delete.Email:"",'" ?')})}),Object(E.jsxs)(y.a,{children:[Object(E.jsx)(f.a,{color:"primary",onClick:function(t){return e.delete()},disabled:this.state.isLoading,children:"Xo\xe1"})," ",Object(E.jsx)(f.a,{color:"secondary",onClick:function(t){return e.setState({modalDelete:!e.state.modalDelete,delete:null})},children:"\u0110\xf3ng"})]})]})]})}}]),s}(u.Component),P={datePicker:{marginBottom:20},wa10:{width:"5%",float:"left",height:"80px"},pagination:{marginRight:"5px"},flexLabel:{width:100},flexOption:{width:300},a:{textDecoration:"none"},floatRight:{float:"right",marginTop:"3px"},spinner:{width:"30px"},center:{textAlign:"center"},tbody:{height:"380px",overflowY:"auto"},wh25:{width:"19%",float:"left",height:"80px"},wh15:{width:"15%",float:"left",height:"80px"},w5:{width:"15%",float:"left",height:"80px"},row:{float:"left",width:"100%"},success:{color:"green"},danger:{color:"red"},mgl5:{marginLeft:"5px"},tags:{float:"right",marginRight:"5px",width:"250px"},searchInput:{width:"190px",display:"inline-block"},userActive:{color:"green"},userPending:{color:"red"},nagemonNameCol:{width:"328px"},image:{width:"100px",height:"100px",borderRadius:"99999px"}};t.default=I}.call(this,a(115))},679:function(e,t,a){"use strict";var n=a(12),s=a(29),r=a(2),i=a.n(r),c=a(64),l=a.n(c),o=a(641),d=a.n(o),u=a(643),h=l.a.oneOfType([l.a.number,l.a.string]),p={tag:u.n,noGutters:l.a.bool,className:l.a.string,cssModule:l.a.object,form:l.a.bool,xs:h,sm:h,md:h,lg:h,xl:h},j={tag:"div",widths:["xs","sm","md","lg","xl"]},g=function(e){var t=e.className,a=e.cssModule,r=e.noGutters,c=e.tag,l=e.form,o=e.widths,h=Object(s.a)(e,["className","cssModule","noGutters","tag","form","widths"]),p=[];o.forEach((function(t,a){var n=e[t];if(delete h[t],n){var s=!a;p.push(s?"row-cols-"+n:"row-cols-"+t+"-"+n)}}));var j=Object(u.j)(d()(t,r?"no-gutters":null,l?"form-row":"row",p),a);return i.a.createElement(c,Object(n.a)({},h,{className:j}))};g.propTypes=p,g.defaultProps=j,t.a=g},680:function(e,t,a){"use strict";var n=a(12),s=a(29),r=a(2),i=a.n(r),c=a(64),l=a.n(c),o=a(641),d=a.n(o),u=a(643),h=l.a.oneOfType([l.a.number,l.a.string]),p=l.a.oneOfType([l.a.bool,l.a.number,l.a.string,l.a.shape({size:l.a.oneOfType([l.a.bool,l.a.number,l.a.string]),order:h,offset:h})]),j={tag:u.n,xs:p,sm:p,md:p,lg:p,xl:p,className:l.a.string,cssModule:l.a.object,widths:l.a.array},g={tag:"div",widths:["xs","sm","md","lg","xl"]},b=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},f=function(e){var t=e.className,a=e.cssModule,r=e.widths,c=e.tag,l=Object(s.a)(e,["className","cssModule","widths","tag"]),o=[];r.forEach((function(t,n){var s=e[t];if(delete l[t],s||""===s){var r=!n;if(Object(u.h)(s)){var i,c=r?"-":"-"+t+"-",h=b(r,t,s.size);o.push(Object(u.j)(d()(((i={})[h]=s.size||""===s.size,i["order"+c+s.order]=s.order||0===s.order,i["offset"+c+s.offset]=s.offset||0===s.offset,i)),a))}else{var p=b(r,t,s);o.push(p)}}})),o.length||o.push("col");var h=Object(u.j)(d()(t,o),a);return i.a.createElement(c,Object(n.a)({},l,{className:h}))};f.propTypes=j,f.defaultProps=g,t.a=f},966:function(e,t,a){"use strict";var n=a(12),s=a(29),r=a(2),i=a.n(r),c=a(64),l=a.n(c),o=a(641),d=a.n(o),u=a(643),h={className:l.a.string,cssModule:l.a.object,size:l.a.string,bordered:l.a.bool,borderless:l.a.bool,striped:l.a.bool,dark:l.a.bool,hover:l.a.bool,responsive:l.a.oneOfType([l.a.bool,l.a.string]),tag:u.n,responsiveTag:u.n,innerRef:l.a.oneOfType([l.a.func,l.a.string,l.a.object])},p=function(e){var t=e.className,a=e.cssModule,r=e.size,c=e.bordered,l=e.borderless,o=e.striped,h=e.dark,p=e.hover,j=e.responsive,g=e.tag,b=e.responsiveTag,f=e.innerRef,m=Object(s.a)(e,["className","cssModule","size","bordered","borderless","striped","dark","hover","responsive","tag","responsiveTag","innerRef"]),x=Object(u.j)(d()(t,"table",!!r&&"table-"+r,!!c&&"table-bordered",!!l&&"table-borderless",!!o&&"table-striped",!!h&&"table-dark",!!p&&"table-hover"),a),O=i.a.createElement(g,Object(n.a)({},m,{ref:f,className:x}));if(j){var v=Object(u.j)(!0===j?"table-responsive":"table-responsive-"+j,a);return i.a.createElement(b,{className:v},O)}return O};p.propTypes=h,p.defaultProps={tag:"table",responsiveTag:"div"},t.a=p}}]);
//# sourceMappingURL=73.5c6d0388.chunk.js.map