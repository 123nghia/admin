(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[56],{1256:function(e,t,a){"use strict";a.r(t),function(e){var n=a(165),s=a(113),r=a.n(s),i=a(651),o=a(166),c=a(167),l=a(169),d=a(168),u=a(2),h=a(662),p=a(663),m=a(690),j=a(691),b=a(666),g=a(685),f=a(664),v=a(755),x=a(1305),O=a(1240),y=a(1241),w=a(1242),S=(a(659),a(756)),C=a.n(S),k=(a(673),a(649)),D=a(647),N=a(657),_=a.n(N),L=a(17),E=new Headers,A=localStorage.getItem("auth");E.append("Authorization","Bearer "+A),E.append("Content-Type","application/json");var P=function(t){Object(l.a)(s,t);var a=Object(d.a)(s);function s(e){var t;return Object(o.a)(this,s),(t=a.call(this,e)).getData=Object(i.a)(r.a.mark((function e(){var a,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.setState({isLoading:!0}),e.next=3,_()({baseURL:k.a.BASE_URL,url:k.a.LIST_SALE,method:"GET"});case 3:a=e.sent,t.pagination(a.data.data),t.setState({dataApi:a.data.data}),n=0,a.data.data.map((function(e){"Actived"==e.Status&&(n+=1)})),t.setState({isLoading:!1,totalActive:n});case 9:case"end":return e.stop()}}),e)}))),t.openDelete=function(e){t.setState({modalDelete:!t.state.modalDelete,delete:e})},t.state={data:[],key:"",activePage:1,page:1,itemsCount:0,limit:20,totalActive:0,modalCom:!1,viewingUser:{},communities:[],updated:"",dataApi:[],action:"new",Name:"",Company_Id:"",End_Date:new Date,Status:"",modalDelete:!1,delete:null,dataCompany:[],currentCompany:"",arrPagination:[],indexPage:0},t}return Object(c.a)(s,[{key:"componentDidMount",value:function(){var e=Object(i.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.getData();case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"pagination",value:function(e){var t,a,n,s=[];for(t=0,a=e.length;t<a;t+=5)n=e.slice(t,t+5),s.push(n);this.setState({arrPagination:s,data:s[this.state.indexPage]})}},{key:"searchKey",value:function(e){if(this.setState({key:e}),""!=e){var t=[];this.state.dataApi.map((function(a){a.Name.toLocaleUpperCase().includes(e.toLocaleUpperCase())&&t.push(a)}));var a=0;t.map((function(e){"Actived"==e.Status&&(a+=1)})),this.setState({data:t,totalActive:a})}else{var n=0;this.state.dataApi.map((function(e){"Actived"==e.Status&&(n+=1)})),this.setState({data:this.state.dataApi,totalActive:n})}}},{key:"toggleModal",value:function(){var e=Object(i.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getCompanyData();case 2:"new"==t&&this.setState({modalCom:!this.state.modalCom,action:t,Name:"",Company_Id:"",End_Date:new Date});case 3:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"onChange",value:function(e,t){this.setState(Object(n.a)({},e,t))}},{key:"addPackageSale",value:function(){var e=Object(i.a)(r.a.mark((function e(){var t,a,n,s,i,o;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.state,a=t.Name,n=t.Company_Id,null!=(s=t.End_Date)&&""!=s&&null!=a&&""!=a){e.next=4;break}return alert("Vui l\xf2ng nh\u1eadp \u0111\u1ea7y \u0111\u1ee7 tr\u01b0\u1eddng !!!"),e.abrupt("return");case 4:return i={Name:a,Company_Id:n,End_Date:s},this.setState({isLoading:!0}),e.next=8,_()({baseURL:k.a.BASE_URL,url:k.a.ADD_SALE,method:"PUT",data:i});case 8:1==(o=e.sent).data.is_success?(this.getData(),this.setState({modalCom:!this.state.modalCom})):(alert(o.data.message),this.setState({isLoading:!1}));case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"openUpdate",value:function(){var e=Object(i.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getCompanyData(t.Company_Id);case 2:this.setState({modalCom:!this.state.modalCom,action:"update",Name:t.Name,Company_Id:t.Company_Id,End_Date:t.End_Date,id:t._id,Status:t.Status});case 3:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"updatePackageSale",value:function(){var e=Object(i.a)(r.a.mark((function e(){var t,a,n,s,i,o,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.state,a=t.Name,n=t.Company_Id,s=t.End_Date,i=t.Status,null!=s&&""!=s&&null!=a&&""!=a){e.next=4;break}return alert("Vui l\xf2ng nh\u1eadp \u0111\u1ea7y \u0111\u1ee7 tr\u01b0\u1eddng !!!"),e.abrupt("return");case 4:return o={Name:a,Company_Id:n,End_Date:s,id:this.state.id,Status:i},this.setState({isLoading:!0}),e.next=8,_()({baseURL:k.a.BASE_URL,url:k.a.UPDATE_SALE,method:"POST",data:o});case 8:1==(c=e.sent).data.is_success?(this.getData(),this.setState({modalCom:!this.state.modalCom})):(alert(c.data.message),this.setState({isLoading:!1}));case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"delete",value:function(){var e=Object(i.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({isLoading:!0}),e.next=3,_()({baseURL:k.a.BASE_URL,url:k.a.DELETE_SALE,method:"DELETE",data:{id:this.state.delete._id}});case 3:1==(t=e.sent).data.is_success?(this.getData(),this.setState({modalDelete:!this.state.modalDelete,delete:null})):(alert(t.data.message),this.setState({isLoading:!1}));case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getUsers",value:function(){var t=this,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,n=this.state.limit,s=this.state.key||"",r={method:"GET",headers:E};fetch(e.BASE_URL+"/admin/users?key="+s+"&page="+a+"&limit="+n,r).then((function(e){e.json().then((function(e){t.setState({data:e.data,itemsCount:e.total,activePage:a,totalActive:e.totalActive,updated:""})}))})).catch(console.log)}},{key:"handlePageChange",value:function(){var e=Object(i.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.getUsers(t);case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"toggle",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";this.setState({modal:!this.state.modal,image:"",url:"",isActive:!1,isLoading:!1,errors:{},action:e,position:1,data:[],updated:""})}},{key:"inputChange",value:function(e){this.setState(Object(n.a)({},e.target.name,e.target.value))}},{key:"getCompanyData",value:function(){var e=Object(i.a)(r.a.mark((function e(t){var a,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_()({baseURL:k.a.BASE_URL,url:k.a.LIST_COMPANY,method:"POST"});case 2:if(a=e.sent,""==t&&void 0==t){e.next=8;break}return e.next=6,_()({baseURL:k.a.BASE_URL,url:k.a.LIST_COMPANY_WITH_ID+t,method:"POST"});case 6:null==(n=e.sent).data.data&&void 0==n.data.data||this.setState({currentCompany:n.data.data.Name});case 8:this.setState({dataCompany:a.data.data});case 9:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,a=t.data,n=t.key,s=t.action,r=t.End_Date,i=t.dataCompany,o=t.currentCompany,c=t.arrPagination,l=t.indexPage;return this.state.isLoading?Object(L.jsx)("div",{id:"page-loading",children:Object(L.jsxs)("div",{className:"three-balls",children:[Object(L.jsx)("div",{className:"ball ball1"}),Object(L.jsx)("div",{className:"ball ball2"}),Object(L.jsx)("div",{className:"ball ball3"})]})}):Object(L.jsxs)("div",{className:"animated fadeIn",children:[Object(L.jsx)(h.a,{children:Object(L.jsxs)(p.a,{children:[Object(L.jsx)("p",{style:T.success,children:this.state.updated}),Object(L.jsx)("p",{style:T.danger,children:this.state.deleted}),Object(L.jsxs)(m.a,{children:[Object(L.jsxs)(j.a,{children:[Object(L.jsxs)("i",{className:"fa fa-align-justify",children:[" PAKAGE SALE (Total: ",void 0!=this.state.data||null!=this.state.data?this.state.data.length:0,", Active: ",this.state.totalActive,", Page: ",this.state.indexPage+1,")"]}),Object(L.jsx)("div",{style:T.tags,children:Object(L.jsxs)("div",{children:[Object(L.jsx)(b.a,{style:T.searchInput,onChange:function(t){return e.searchKey(t.target.value)},name:"key",value:n,placeholder:"Search"}),Object(L.jsx)(g.a,{outline:!0,color:"primary",style:T.floatRight,size:"sm",onClick:function(t){return e.toggleModal("new")},children:"Add"})]})})]}),Object(L.jsx)(f.a,{children:Object(L.jsxs)(v.a,{responsive:!0,children:[Object(L.jsx)("thead",{children:Object(L.jsxs)("tr",{children:[Object(L.jsx)("th",{style:T.wa10,children:"No."}),Object(L.jsx)("th",{style:T.wh16,children:"Name"}),Object(L.jsx)("th",{style:T.wh16,children:"Company ID"}),Object(L.jsx)("th",{style:T.wh16,children:"End Date"}),Object(L.jsx)("th",{style:T.wh16,children:"Status"}),Object(L.jsx)("th",{style:T.w5,children:"Action"})]})}),Object(L.jsx)("tbody",{children:void 0!=a?a.map((function(t,a){return Object(L.jsxs)("tr",{style:T.row,children:[Object(L.jsx)("td",{style:T.wa10,children:a+1}),Object(L.jsx)("td",{style:T.wh16,children:t.Name}),Object(L.jsx)("td",{style:T.wh16,children:t.Company_Id}),Object(L.jsx)("td",{style:T.wh16,children:new Date(t.End_Date).toLocaleDateString()+" "+new Date(t.End_Date).toLocaleTimeString()}),Object(L.jsx)("td",{style:T.wh16,children:t.Status}),Object(L.jsxs)("td",{style:T.w5,children:[Object(L.jsx)(g.a,{outline:!0,color:"primary",size:"sm",onClick:function(a){return e.openUpdate(t)},children:"C\u1eadp nh\u1eadt"})," ",Object(L.jsx)(g.a,{outline:!0,color:"danger",size:"sm",onClick:function(a){e.openDelete(t)},children:"Xo\xe1"})]})]},a)})):""})]})})]}),1==c.length?"":Object(L.jsx)("div",{style:{float:"right",marginRight:"10px",padding:"10px"},children:Object(L.jsx)("tr",{style:T.row,children:c.map((function(t,a){return Object(L.jsx)("td",{children:Object(L.jsx)(g.a,{style:T.pagination,color:a==l?"primary":"danger",onClick:function(t){e.setState({data:c[a],indexPage:a})},children:a+1})})}))})})]})}),Object(L.jsxs)(x.a,{isOpen:this.state.modalCom,className:this.props.className,children:[Object(L.jsx)(O.a,{children:"new"==this.state.action?"T\u1ea1o m\u1edbi":"C\u1eadp nh\u1eadt"}),Object(L.jsxs)(y.a,{children:[Object(L.jsx)(D.a,{field:"Name",label:"Name",value:this.state.Name,placeholder:"Name Package",onChange:function(t){return e.onChange("Name",t.target.value)}}),Object(L.jsxs)("div",{style:T.datePicker,children:[Object(L.jsx)("label",{children:"End Date:  "}),Object(L.jsx)(C.a,{selected:new Date(r),onChange:function(t){return e.setState({End_Date:t})}})]}),"new"==s?"":Object(L.jsxs)("div",{children:[Object(L.jsx)("label",{style:T.flexLabel,htmlFor:"tag",children:"Status:"}),Object(L.jsxs)("select",{style:T.flexOption,name:"Status",onChange:function(t){return e.onChange("Status",t.target.value)},children:[Object(L.jsx)("option",{value:this.state.Status,children:""==this.state.Status?" - - - - - - - - - - ":this.state.Status}),Object(L.jsx)("option",{value:"Actived",children:"Actived"}),Object(L.jsx)("option",{value:"Locked",children:"Locked"}),Object(L.jsx)("option",{value:"Deactived",children:"Deactived"})]})]}),Object(L.jsxs)("div",{children:[Object(L.jsx)("label",{style:T.flexLabel,htmlFor:"tag",children:"Company:    "}),Object(L.jsxs)("select",{style:T.flexOption,name:"Company_Id",onChange:function(t){return e.onChange("Company_Id",t.target.value)},children:[Object(L.jsx)("option",{value:this.state.Company_Id,children:"-----"}),i.map((function(e,t){return e.Name==o?Object(L.jsx)("option",{selected:!0,value:e._id,children:e.Name}):Object(L.jsx)("option",{value:e._id,children:e.Name})}))]})]})]}),Object(L.jsxs)(w.a,{children:[Object(L.jsx)(g.a,{color:"primary",onClick:function(t){"new"===e.state.action?e.addPackageSale():e.updatePackageSale()},disabled:this.state.isLoading,children:"L\u01b0u"})," ",Object(L.jsx)(g.a,{color:"secondary",onClick:function(t){return e.toggleModal("new")},children:"\u0110\xf3ng"})]})]}),Object(L.jsxs)(x.a,{isOpen:this.state.modalDelete,toggle:function(t){return e.setState({modalDelete:!e.state.modalDelete,delete:null})},className:this.props.className,children:[Object(L.jsx)(O.a,{toggle:function(t){return e.setState({modalDelete:!e.state.modalDelete,delete:null})},children:"Xo\xe1"}),Object(L.jsx)(y.a,{children:Object(L.jsx)("label",{htmlFor:"tag",children:'Do you want to delete user "'.concat(this.state.delete?this.state.delete.Email:"",'" ?')})}),Object(L.jsxs)(w.a,{children:[Object(L.jsx)(g.a,{color:"primary",onClick:function(t){return e.delete()},disabled:this.state.isLoading,children:"Xo\xe1"})," ",Object(L.jsx)(g.a,{color:"secondary",onClick:function(t){return e.setState({modalDelete:!e.state.modalDelete,delete:null})},children:"\u0110\xf3ng"})]})]})]})}}]),s}(u.Component),T={datePicker:{marginBottom:20},flexLabel:{width:100},flexOption:{width:300},a:{textDecoration:"none"},floatRight:{float:"right",marginTop:"3px"},spinner:{width:"30px"},center:{textAlign:"center"},tbody:{height:"380px",overflowY:"auto"},wa10:{width:"5%",float:"left",height:"80px"},wh16:{width:"17%",float:"left",height:"80px"},wh15:{width:"20%",float:"left",height:"80px"},w5:{width:"20%",float:"left",height:"80px"},row:{float:"left",width:"100%"},success:{color:"green"},danger:{color:"red"},mgl5:{marginLeft:"5px"},tags:{float:"right",marginRight:"5px",width:"250px"},searchInput:{width:"190px",display:"inline-block"},userActive:{color:"green"},userPending:{color:"red"},nagemonNameCol:{width:"328px"},image:{width:"100px",height:"100px",borderRadius:"99999px"}};t.default=P}.call(this,a(114))},647:function(e,t,a){"use strict";a(2);var n=a(638),s=a.n(n),r=a(17),i=function(e){var t=e.field,a=e.value,n=e.label,i=e.error,o=e.type,c=e.onChange,l=e.checkUserExists,d=e.readOnly,u=e.placeholder,h=e.onClick;return Object(r.jsxs)("div",{className:s()("form-group",{"has-error":i}),children:[Object(r.jsx)("label",{className:"control-label",children:n}),Object(r.jsx)("input",{onChange:c,onClick:h,onBlur:l,value:a,type:o,name:t,placeholder:u,readOnly:d,className:"form-control"}),i&&Object(r.jsx)("span",{className:"help-block",children:i})]})};i.defaultProps={type:"text"},t.a=i},662:function(e,t,a){"use strict";var n=a(12),s=a(29),r=a(2),i=a.n(r),o=a(64),c=a.n(o),l=a(638),d=a.n(l),u=a(639),h=c.a.oneOfType([c.a.number,c.a.string]),p={tag:u.n,noGutters:c.a.bool,className:c.a.string,cssModule:c.a.object,form:c.a.bool,xs:h,sm:h,md:h,lg:h,xl:h},m={tag:"div",widths:["xs","sm","md","lg","xl"]},j=function(e){var t=e.className,a=e.cssModule,r=e.noGutters,o=e.tag,c=e.form,l=e.widths,h=Object(s.a)(e,["className","cssModule","noGutters","tag","form","widths"]),p=[];l.forEach((function(t,a){var n=e[t];if(delete h[t],n){var s=!a;p.push(s?"row-cols-"+n:"row-cols-"+t+"-"+n)}}));var m=Object(u.j)(d()(t,r?"no-gutters":null,c?"form-row":"row",p),a);return i.a.createElement(o,Object(n.a)({},h,{className:m}))};j.propTypes=p,j.defaultProps=m,t.a=j},663:function(e,t,a){"use strict";var n=a(12),s=a(29),r=a(2),i=a.n(r),o=a(64),c=a.n(o),l=a(638),d=a.n(l),u=a(639),h=c.a.oneOfType([c.a.number,c.a.string]),p=c.a.oneOfType([c.a.bool,c.a.number,c.a.string,c.a.shape({size:c.a.oneOfType([c.a.bool,c.a.number,c.a.string]),order:h,offset:h})]),m={tag:u.n,xs:p,sm:p,md:p,lg:p,xl:p,className:c.a.string,cssModule:c.a.object,widths:c.a.array},j={tag:"div",widths:["xs","sm","md","lg","xl"]},b=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},g=function(e){var t=e.className,a=e.cssModule,r=e.widths,o=e.tag,c=Object(s.a)(e,["className","cssModule","widths","tag"]),l=[];r.forEach((function(t,n){var s=e[t];if(delete c[t],s||""===s){var r=!n;if(Object(u.h)(s)){var i,o=r?"-":"-"+t+"-",h=b(r,t,s.size);l.push(Object(u.j)(d()(((i={})[h]=s.size||""===s.size,i["order"+o+s.order]=s.order||0===s.order,i["offset"+o+s.offset]=s.offset||0===s.offset,i)),a))}else{var p=b(r,t,s);l.push(p)}}})),l.length||l.push("col");var h=Object(u.j)(d()(t,l),a);return i.a.createElement(o,Object(n.a)({},c,{className:h}))};g.propTypes=m,g.defaultProps=j,t.a=g},755:function(e,t,a){"use strict";var n=a(12),s=a(29),r=a(2),i=a.n(r),o=a(64),c=a.n(o),l=a(638),d=a.n(l),u=a(639),h={className:c.a.string,cssModule:c.a.object,size:c.a.string,bordered:c.a.bool,borderless:c.a.bool,striped:c.a.bool,dark:c.a.bool,hover:c.a.bool,responsive:c.a.oneOfType([c.a.bool,c.a.string]),tag:u.n,responsiveTag:u.n,innerRef:c.a.oneOfType([c.a.func,c.a.string,c.a.object])},p=function(e){var t=e.className,a=e.cssModule,r=e.size,o=e.bordered,c=e.borderless,l=e.striped,h=e.dark,p=e.hover,m=e.responsive,j=e.tag,b=e.responsiveTag,g=e.innerRef,f=Object(s.a)(e,["className","cssModule","size","bordered","borderless","striped","dark","hover","responsive","tag","responsiveTag","innerRef"]),v=Object(u.j)(d()(t,"table",!!r&&"table-"+r,!!o&&"table-bordered",!!c&&"table-borderless",!!l&&"table-striped",!!h&&"table-dark",!!p&&"table-hover"),a),x=i.a.createElement(j,Object(n.a)({},f,{ref:g,className:v}));if(m){var O=Object(u.j)(!0===m?"table-responsive":"table-responsive-"+m,a);return i.a.createElement(b,{className:O},x)}return x};p.propTypes=h,p.defaultProps={tag:"table",responsiveTag:"div"},t.a=p}}]);
//# sourceMappingURL=56.e3222938.chunk.js.map