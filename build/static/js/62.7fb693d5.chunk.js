(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[62],{1264:function(e,t,a){"use strict";a.r(t);var n=a(169),r=a(113),s=a.n(r),l=a(651),i=a(165),c=a(166),o=a(168),d=a(167),h=a(2),u=a(687),p=a(688),m=a(665),j=a(684),x=a(663),g=a(1306),b=a(1241),f=a(1242),O=a(1243),v=a(647),S=a(171),y=a(711),k=(a(658),a(648)),A=a(646),_=a(654),N=a.n(_),C=a(743),w=a.n(C),L=a(17),P=new Headers,U=localStorage.getItem("auth");P.append("Authorization","Bearer "+U),P.append("Content-Type","application/json");var E=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).getUserSale=function(){var e=Object(l.a)(s.a.mark((function e(t){var a,r,l,i,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.state.company_id,n.setState({isLoading:!0}),r=JSON.parse(a),l={condition:{Company_Id:r.company_id,Sale_Id:t}},e.next=6,N()({baseURL:k.a.BASE_URL,url:k.a.LIST_CUSTOMER,method:"POST",data:l,headers:n.state.token});case 6:i=e.sent,n.pagination(i.data.data),n.setState({dataApi:i.data.data}),c=0,i.data.data.map((function(e){"Actived"==e.Status&&(c+=1)})),n.setState({isLoading:!1,totalActive:c});case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.getAllData=Object(l.a)(s.a.mark((function e(){var t,a,r,l;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.state.company_id,n.setState({isLoading:!0}),e.next=4,N()({baseURL:k.a.BASE_URL,url:k.a.LIST_CUSTOMER,method:"POST",headers:n.state.token});case 4:t=e.sent,a=[],r=0;case 7:if(!(r<t.data.data.length)){e.next=17;break}return e.next=10,n.getSaleDataOfUser(t.data.data[r].Sale_Id);case 10:l=e.sent,t.data.data[r].Address=l.Address,t.data.data[r].NameSale=l.Name,a.push(t.data.data[r]);case 14:r++,e.next=7;break;case 17:0==a.length?n.setState({hidden_all:!1}):n.setState({hidden_all:!0}),n.setState({dataApi:a}),n.pagination_all(a),n.setState({isLoading:!1});case 21:case"end":return e.stop()}}),e)}))),n.getData=Object(l.a)(s.a.mark((function e(){var t,a,r,l,i,c,o,d;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=n.state,a=t.company_id,r=t.role,n.setState({isLoading:!0}),l=JSON.parse(a),i={company_id:l.company_id},c={condition:{Company_Id:l.company_id,Sale_Id:l.sale_id}},"ADMIN"!=r&&"ADMINSALE"!=r){e.next=11;break}return e.next=8,N()({baseURL:k.a.BASE_URL,url:k.a.GET_SHOP,method:"POST",headers:n.state.token});case 8:o=e.sent,e.next=21;break;case 11:if("SHOPMANAGER"!=r){e.next=17;break}return e.next=14,N()({baseURL:k.a.BASE_URL,url:k.a.GET_SALE,method:"POST",data:i,headers:n.state.token});case 14:o=e.sent,e.next=21;break;case 17:if("SALES"!=r){e.next=21;break}return e.next=20,N()({baseURL:k.a.BASE_URL,url:k.a.LIST_CUSTOMER,method:"POST",data:c,headers:n.state.token});case 20:o=e.sent;case 21:n.pagination(o.data.data),n.setState({dataApi:o.data.data}),d=0,o.data.data.map((function(e){"Actived"==e.Status&&(d+=1)})),n.setState({isLoading:!1,totalActive:d});case 26:case"end":return e.stop()}}),e)}))),n.state={data:[],key:"",keyName:"",keyEmail:"",keyPhone:"",keyGender:"",keyStatus:"",activePage:1,page:1,itemsCount:0,limit:20,totalActive:0,modalCom:!1,viewingUser:{},communities:[],updated:"",dataApi:[],action:"new",Email:"",Address:"",Name:"",Phone:"",Gender:"Nam",Company_Id:"",Role_Id:"",UserName:"",Password:"",Sale_Id:"",Code:"",Status:"",modalDelete:!1,delete:null,dataCompany:[],currentCompany:"",dataSale:[],currentSale:"",dataRole:[],currentRole:"",arrPagination:[],indexPage:0,arrPagination_All:[],indexPage_All:0,role:localStorage.getItem("role"),company_id:localStorage.getItem("user"),see_detail:!0,month:0,arrTemp:[],arrMonth:["01","02","03","04","05","06","07","08","09","10","11","12"],arrMonthWithDefault:["00","01","02","03","04","05","06","07","08","09","10","11","12"],isLoading:!0,hidden:!1,nameSale:"",dataAll:[],hidden_all:!1,isSale:!1,token:{Authorization:"Bearer ".concat(localStorage.getItem("token"))},arrAllUser:[]},n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=Object(l.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(this.getAllData(),t=JSON.parse(localStorage.getItem("url")),a=0;a<t.length;a++)"#"+t[a].to==window.location.hash&&1==t[a].hidden&&(window.location.href="#/");case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getSeeder",value:function(){var e=Object(l.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N()({baseURL:k.a.BASE_URL,url:k.a.GET_SEEDER,method:"POST",data:{email:"ktpm489@gmail.com"}});case 2:t=e.sent,this.props.onSaveSeed(t.data.data),this.props.history.push("/history");case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"pagination",value:function(e){var t,a,n,r=[];for(t=0,a=e.length;t<a;t+=5)n=e.slice(t,t+5),r.push(n);0==r.length?this.setState({hidden:!1}):this.setState({hidden:!0}),this.setState({arrPagination:r,data:r[this.state.indexPage]})}},{key:"pagination_all",value:function(e){var t,a,n,r=[];for(t=0,a=e.length;t<a;t+=5)n=e.slice(t,t+5),r.push(n);0==r.length?this.setState({hidden_all:!1}):this.setState({hidden_all:!0}),this.setState({arrPagination_All:r,dataAll:r[this.state.indexPage_All]})}},{key:"countType",value:function(e,t){return e.filter((function(e){return e.Phone==t})).length}},{key:"getSaleDataOfUser",value:function(){var e=Object(l.a)(s.a.mark((function e(t){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N()({baseURL:k.a.BASE_URL,url:k.a.DATA_SALE,method:"POST",data:{sale_id:t}});case 2:return a=e.sent,console.log(a.data.data[0]),e.abrupt("return",{Address:a.data.data[0].Address,Name:a.data.data[0].Name});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"getRoleData",value:function(){var e=Object(l.a)(s.a.mark((function e(t){var a,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N()({baseURL:k.a.BASE_URL,url:k.a.LIST_ROLE,method:"GET",headers:this.state.token});case 2:if(a=e.sent,""==t&&void 0==t){e.next=8;break}return e.next=6,N()({baseURL:k.a.BASE_URL,url:k.a.LIST_ROLE_WITH_ID+t,method:"GET",headers:this.state.token});case 6:null==(n=e.sent).data.data&&void 0==n.data.data||this.setState({currentRole:n.data.data.Name});case 8:this.setState({dataRole:a.data.data});case 9:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"inputChange",value:function(e){this.setState(Object(n.a)({},e.target.name,e.target.value))}},{key:"getDataUser_ForSale",value:function(){var e=Object(l.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("SALES"!=this.state.role){e.next=5;break}return this.setState({isSale:!0,month:t}),e.next=5,this.tableUserSale_forSale(t);case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"check",value:function(){var e=Object(l.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("00"!=t.target.value){e.next=5;break}this.getData(),this.setState({isSale:!1}),e.next=8;break;case 5:return e.next=7,this.getDataUser_ForSale(t.target.value);case 7:this.setState({month:t.target.value});case 8:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getBadge",value:function(e){switch(e){case"Actived":return"success";case"Inactive":return"secondary";case"Locked":return"warning";case"Deactived":return"danger";default:return"primary"}}},{key:"searchKey",value:function(){var e=this.state,t=e.indexPage_All,a=e.key,n=e.keyStatus;if(""!=a||""!=n){var r=[];this.state.dataApi.map((function(e){(e.Name.toLocaleUpperCase().includes(a.toLocaleUpperCase())||e.Email.toLocaleUpperCase().includes(a.toLocaleUpperCase())||e.Phone.toLocaleUpperCase().includes(a.toLocaleUpperCase()))&&e.Status.toLocaleUpperCase().includes(n.toLocaleUpperCase())&&r.push(e)}));var s=0;r.map((function(e){"Actived"==e.Status&&(s+=1)})),this.setState({dataAll:r,totalActive:s})}else{var l=0;this.state.dataApi.map((function(e){"Actived"==e.Status&&(l+=1)})),this.setState({dataAll:this.state.arrPagination_All[t],totalActive:l})}}},{key:"actionSearch",value:function(e,t){var a=this;this.setState(Object(n.a)({},t,e.target.value),(function(){a.searchKey()}))}},{key:"resetSearch",value:function(){var e=this;this.setState({keyName:"",keyEmail:"",keyPhone:"",keyGender:"",keyStatus:""},(function(){e.searchKey()}))}},{key:"render",value:function(){var e=this,t=this.state,a=t.key,n=t.dataCompany,r=t.dataAll,s=t.arrPagination_All,l=t.indexPage_All,i=t.currentCompany,c=t.action,o=t.dataRole,d=t.currentRole,h=t.hidden_all;return this.state.isLoading?Object(L.jsx)("div",{className:"d-flex justify-content-center",children:Object(L.jsx)(w.a,{type:"balls",color:"orange",height:"5%",width:"5%"})}):Object(L.jsxs)("div",{children:[Object(L.jsxs)(u.a,{children:[Object(L.jsxs)(p.a,{children:["Danh s\xe1ch kh\xe1ch h\xe0ng ( Page: ",this.state.indexPage+1," )",Object(L.jsx)("div",{style:R.tags,children:Object(L.jsxs)(v.X,{children:[Object(L.jsx)(v.p,{sm:"6",lg:"12",children:Object(L.jsxs)(v.X,{children:[Object(L.jsx)(v.p,{sm:"6",lg:"4",children:Object(L.jsx)("div",{children:Object(L.jsx)(m.a,{style:R.searchInput,onChange:function(t){e.actionSearch(t,"key")},name:"key",value:a,placeholder:"T\u1eeb kh\xf3a"})})}),Object(L.jsx)(v.p,{sm:"6",lg:"4",children:Object(L.jsx)(v.Y,{style:R.flexOption,onChange:function(t){e.actionSearch(t,"keyStatus")},custom:!0,children:["Actived","Deactived","Locked"].map((function(e,t){return Object(L.jsx)("option",{value:e,children:e})}))})}),Object(L.jsx)(v.p,{sm:"6",lg:"4",children:Object(L.jsx)(j.a,{color:"primary",style:{width:"100%",marginTop:5},size:"sm",onClick:function(t){e.resetSearch()},children:"L\xe0m m\u1edbi t\xecm ki\u1ebfm"})})]})}),Object(L.jsx)(v.p,{sm:"6",lg:"12"})]})})]}),Object(L.jsx)(x.a,{children:Object(L.jsxs)("table",{className:"table table-hover table-outline mb-0 d-none d-sm-table",children:[Object(L.jsx)("thead",{className:"thead-light",children:Object(L.jsxs)("tr",{children:[Object(L.jsx)("th",{className:"text-center",children:"STT."}),Object(L.jsx)("th",{className:"text-center",children:"T\xean"}),Object(L.jsx)("th",{className:"text-center",children:"T\xean Sale"}),Object(L.jsx)("th",{className:"text-center",children:"\u0110\u1ecba ch\u1ec9 shop"}),Object(L.jsx)("th",{className:"text-center",children:"Email"}),Object(L.jsx)("th",{className:"text-center",children:"S\u1ed1 \u0111i\u1ec7n tho\u1ea1i"}),Object(L.jsx)("th",{className:"text-center",children:"Gi\u1edbi t\xednh"}),Object(L.jsx)("th",{className:"text-center",children:"Tr\u1ea1ng th\xe1i"}),Object(L.jsx)("th",{className:"text-center",children:"Ng\xe0y t\u1ea1o"})]})}),Object(L.jsxs)("tbody",{children:[Object(L.jsx)("td",{colSpan:"8",hidden:h,className:"text-center",children:"Kh\xf4ng t\xecm th\u1ea5y d\u1eef li\u1ec7u"}),void 0!=r?r.map((function(t,a){return Object(L.jsxs)("tr",{children:[Object(L.jsx)("td",{className:"text-center",children:a+1}),Object(L.jsx)("td",{className:"text-center",children:t.Name}),Object(L.jsx)("td",{className:"text-center",children:t.NameSale}),Object(L.jsx)("td",{className:"text-center",children:t.Address}),Object(L.jsx)("td",{className:"text-center",children:t.Email}),Object(L.jsx)("td",{className:"text-center",children:t.Phone}),Object(L.jsx)("td",{className:"text-center",children:t.Gender}),Object(L.jsx)("td",{className:"text-center",children:Object(L.jsx)(v.a,{color:e.getBadge(t.Status),children:t.Status})}),Object(L.jsx)("td",{className:"text-center",children:new Date(t.Create_Date).toLocaleDateString()+" "+new Date(t.Create_Date).toLocaleTimeString()})]},a)})):""]})]})})]}),1==s.length?"":Object(L.jsx)("div",{style:{float:"right",marginRight:"10px",padding:"10px"},children:Object(L.jsx)("tr",{style:R.row,children:s.map((function(t,a){return Object(L.jsx)("td",{children:Object(L.jsx)(j.a,{style:R.pagination,color:a==l?"primary":"danger",onClick:function(t){e.setState({dataAll:s[a],indexPage_All:a})},children:a+1})})}))})}),Object(L.jsxs)(g.a,{isOpen:this.state.modalCom,className:this.props.className,children:[Object(L.jsx)(b.a,{children:"new"==this.state.action?"T\u1ea1o m\u1edbi":"C\u1eadp nh\u1eadt"}),Object(L.jsxs)(f.a,{children:[Object(L.jsx)(A.a,{field:"Email",label:"Email",value:this.state.Email,placeholder:"Email",type:"email",onChange:function(t){return e.onChange("Email",t.target.value)}}),Object(L.jsx)(A.a,{field:"Address",label:"Address",value:this.state.Address,placeholder:"Email",type:"email",onChange:function(t){return e.onChange("Address",t.target.value)}}),Object(L.jsx)(A.a,{field:"Name",label:"Name",value:this.state.Name,placeholder:"Name",onChange:function(t){return e.onChange("Name",t.target.value)}}),Object(L.jsx)(A.a,{field:"Password",label:"Password",value:this.state.Password,type:"password",placeholder:"Password",readOnly:"new"!=c,onChange:function(t){return e.onChange("Password",t.target.value)}}),Object(L.jsx)(A.a,{field:"Code",label:"Code",placeholder:"Code",value:this.state.Code,onChange:function(t){return e.onChange("Code",t.target.value)}}),Object(L.jsx)(A.a,{field:"UserName",label:"UserName",placeholder:"Username",value:this.state.UserName,onChange:function(t){return e.onChange("UserName",t.target.value)}}),Object(L.jsx)(A.a,{field:"Phone",label:"Phone",value:this.state.Phone,placeholder:"Phone",onChange:function(t){return e.onChange("Phone",t.target.value)}}),Object(L.jsxs)("div",{children:[Object(L.jsx)("label",{style:R.flexLabel,htmlFor:"tag",children:"Gender:    "}),Object(L.jsxs)("select",{style:R.flexOption,name:"Gender",onChange:function(t){return e.onChange("Gender",t.target.value)},children:[Object(L.jsx)("option",{value:this.state.Gender,children:""==this.state.Gender?" - - - - - - - - - - ":this.state.Gender}),Object(L.jsx)("option",{value:"Nam",children:"Nam"}),Object(L.jsx)("option",{value:"N\u1eef",children:"N\u1eef"})]})]}),Object(L.jsxs)("div",{children:[Object(L.jsx)("label",{style:R.flexLabel,htmlFor:"tag",children:"Company:    "}),Object(L.jsxs)("select",{style:R.flexOption,name:"Company_Id",onChange:function(t){return e.onChange("Company_Id",t.target.value)},children:[Object(L.jsx)("option",{value:this.state.Company_Id,children:"-----"}),n.map((function(e,t){return e.Name==i?Object(L.jsx)("option",{selected:!0,value:e._id,children:e.Name}):Object(L.jsx)("option",{value:e._id,children:e.Name})}))]})]}),Object(L.jsxs)("div",{children:[Object(L.jsx)("label",{style:R.flexLabel,htmlFor:"tag",children:"Role:    "}),Object(L.jsxs)("select",{style:R.flexOption,name:"Role_Id",onChange:function(t){return e.onChange("Role_Id",t.target.value)},children:[Object(L.jsx)("option",{value:this.state.Role_Id,children:"-----"}),o.map((function(e,t){return e.Name==d?Object(L.jsx)("option",{selected:!0,value:e._id,children:e.Name}):Object(L.jsx)("option",{value:e._id,children:e.Name})}))]})]})]}),Object(L.jsx)(O.a,{})]}),Object(L.jsxs)(g.a,{isOpen:this.state.modalDelete,toggle:function(t){return e.setState({modalDelete:!e.state.modalDelete,delete:null})},className:this.props.className,children:[Object(L.jsx)(b.a,{toggle:function(t){return e.setState({modalDelete:!e.state.modalDelete,delete:null})},children:"Xo\xe1"}),Object(L.jsx)(f.a,{children:Object(L.jsx)("label",{htmlFor:"tag",children:'Do you want to delete user "'.concat(this.state.delete?this.state.delete.Email:"",'" ?')})}),Object(L.jsxs)(O.a,{children:[Object(L.jsx)(j.a,{color:"primary",onClick:function(t){return e.delete()},disabled:this.state.isLoading,children:"Xo\xe1"})," ",Object(L.jsx)(j.a,{color:"secondary",onClick:function(t){return e.setState({modalDelete:!e.state.modalDelete,delete:null})},children:"\u0110\xf3ng"})]})]})]})}}]),a}(h.Component),R={wa10:{width:"5%",float:"left",height:"60px"},sale_times:{width:"8%",float:"left",height:"60px",textAlign:"center"},pagination:{marginRight:"5px"},flexLabel:{width:100},flexOption:{width:160,margin:"1px"},a:{textDecoration:"none"},floatRight:{float:"right",marginTop:"3px"},spinner:{width:"30px"},center:{textAlign:"center"},tbody:{height:"380px",overflowY:"auto"},wh12:{width:"11%",float:"left",height:"60px",textAlign:"center"},ws12:{width:"13%",float:"left",height:"60px",textAlign:"center"},wh15:{width:"15%",float:"left",height:"60px",textAlign:"center"},w5:{width:"22%",float:"left",height:"60px"},w5_10:{width:"5%",float:"left",height:"60px"},row:{float:"left",width:"100%"},success:{color:"green"},danger:{color:"red"},mgl5:{marginLeft:"5px"},tags:{float:"right",marginRight:"5px"},searchInput:{width:"160px",display:"inline-block",margin:"1px"},userActive:{color:"green"},userPending:{color:"red"},nagemonNameCol:{width:"328px"},image:{width:"100px",height:"100px",borderRadius:"99999px"}};t.default=Object(S.b)((function(e){return{data:e.getData_AllAPI}}),{onSaveID:y.a,onSaveSeed:y.b})(E)},646:function(e,t,a){"use strict";a(2);var n=a(637),r=a.n(n),s=a(17),l=function(e){var t=e.field,a=e.value,n=e.label,l=e.error,i=e.type,c=e.onChange,o=e.checkUserExists,d=e.readOnly,h=e.placeholder,u=e.onClick;return Object(s.jsxs)("div",{className:r()("form-group",{"has-error":l}),children:[Object(s.jsx)("label",{className:"control-label",children:n}),Object(s.jsx)("input",{onChange:c,onClick:u,onBlur:o,value:a,type:i,name:t,placeholder:h,readOnly:d,className:"form-control"}),l&&Object(s.jsx)("span",{className:"help-block",children:l})]})};l.defaultProps={type:"text"},t.a=l},711:function(e,t,a){"use strict";a.d(t,"a",(function(){return r})),a.d(t,"b",(function(){return s}));var n=a(116);function r(e){return{type:n.a,payload:{id:e}}}function s(e){return{type:n.b,payload:{seed:e}}}}}]);
//# sourceMappingURL=62.7fb693d5.chunk.js.map