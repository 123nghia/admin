<<<<<<< HEAD:build/static/js/64.22715e4b.chunk.js
(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[64],{1315:function(e,t,a){"use strict";a.r(t);var n,i=a(654),s=a(165),r=a(113),c=a.n(r),l=a(641),o=a(166),h=a(167),d=a(169),u=a(168),m=a(2),p=a(645),g=a(1259),j=a(1260),b=a(1261),f=a(1262),x=a(1263),O=a(1264),v=a(1340),y=a(1267),k=a(1268),S=a(1269),w=a(640),C=a(667),D=a(1336),L=(a(646),a(644)),A=a(652),N=a(643),R=a.n(N),T=a(653),_=a(655),U=a.n(_),P=a(17),B=new Headers,I=localStorage.getItem("auth");B.append("Authorization","Bearer "+I),B.append("Content-Type","application/json");Object(C.a)((function(e){return{root:{"& > *":{marginTop:e.spacing(2)}}}}));var E=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).getData=Object(l.a)(c.a.mark((function e(){var t,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.setState({isLoading:!0}),e.next=3,R()({baseURL:L.a.BASE_URL,url:L.a.LIST_BRAND,method:"GET"});case 3:t=e.sent,a=t.data.data,n.pagination(a),n.setState({dataApi:a}),0,n.setState({isLoading:!1,totalActive:0});case 9:case"end":return e.stop()}}),e)}))),n.getData_Company=Object(l.a)(c.a.mark((function e(){var t,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.setState({isLoading:!0}),e.next=3,R()({baseURL:L.a.BASE_URL,url:L.a.LIST_BRAND_COMPANY+JSON.parse(n.state.user).company_id,method:"GET"});case 3:t=e.sent,a=t.data.data,n.pagination(a),n.setState({dataApi:a}),0,n.setState({isLoading:!1,totalActive:0});case 9:case"end":return e.stop()}}),e)}))),n.openDelete=function(e){n.setState({modalDelete:!n.state.modalDelete,id:e._id})},n.state={data:[],key:"",activePage:1,page:1,itemsCount:0,limit:20,totalActive:0,modalCom:!1,viewingUser:{},communities:[],updated:"",dataApi:[],hidden:!1,action:"new",name:"",image:"",link:"",modalDelete:!1,delete:null,arrPagination:[],indexPage:0,token:{Authorization:"Bearer ".concat(localStorage.getItem("token"))},type:localStorage.getItem("type"),user:localStorage.getItem("user"),isLoading:!1},n}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var e=Object(l.a)(c.a.mark((function e(){var t,a,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for("0"==(t=this.state.type)||"1"==t?this.getData():this.getData_Company(),a=JSON.parse(localStorage.getItem("url")),n=0;n<a.length;n++)a[n].url==window.location.hash&&1==a[n].isHidden&&(window.location.href="#/");case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"pagination",value:function(e){var t,a,n,i=[];for(t=0,a=e.length;t<a;t+=5)n=e.slice(t,t+5),i.push(n);0==i.length?this.setState({hidden:!1}):this.setState({hidden:!0}),this.setState({arrPagination:i,data:i[0]})}},{key:"searchKey",value:function(){var e=this.state,t=e.indexPage,a=e.key;if(""!=a){var n=[];this.state.dataApi.map((function(e){e.name.toLocaleUpperCase().includes(a.toLocaleUpperCase())&&n.push(e)}));var i=0;n.map((function(e){"Actived"==e.Status&&(i+=1)})),this.setState({data:n,totalActive:i})}else{var s=0;this.state.dataApi.map((function(e){"Actived"==e.Status&&(s+=1)})),this.setState({data:this.state.arrPagination[t],totalActive:s})}}},{key:"actionSearch",value:function(e,t){var a=this;this.setState(Object(s.a)({},t,e.target.value),(function(){a.searchKey()}))}},{key:"resetSearch",value:function(){var e=this;this.setState({key:""},(function(){e.searchKey()}))}},{key:"toggleModal",value:function(){var e=Object(l.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:"new"==t&&this.setState({modalCom:!this.state.modalCom,action:t,name:"",image:"",link:""});case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"onChange",value:function(e,t){this.setState(Object(s.a)({},e,t))}},{key:"addRoles",value:function(){var e=Object(l.a)(c.a.mark((function e(){var t,a,n,i,s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.state,a=t.name,n=t.image,i=t.link,null!=a&&""!=a&&null!=n&&""!=n){e.next=4;break}return alert("Vui lòng nhập đầy đủ trường dữ liệu !!!"),e.abrupt("return");case 4:return s={name:a,image:n,company_id:"0"==this.state.type||"1"==this.state.type?"":JSON.parse(this.state.user).company_id,link:i},this.setState({isLoading:!0}),e.next=8,R()({baseURL:L.a.BASE_URL,url:L.a.ADD_BRAND,method:"POST",data:s});case 8:200==e.sent.status?("0"==this.state.type||"1"==this.state.type?this.getData():this.getData_Company(),this.setState({modalCom:!this.state.modalCom})):(alert("Th\xeam th\u01b0\u01a1ng hi\u1ec7u th\u1ea5t b\u1ea1i"),this.setState({isLoading:!1}));case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"openUpdate",value:function(){var e=Object(l.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.setState({modalCom:!this.state.modalCom,action:"update",name:t.name,image:t.image,id:t._id,link:t.link});case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"updateUser",value:function(){var e=Object(l.a)(c.a.mark((function e(){var t,a,n,i,s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.state,a=t.name,n=t.image,i=t.link,null!=a&&""!=a&&null!=n&&""!=n){e.next=4;break}return alert("Vui lòng nhập đầy đủ trường dữ liệu !!!"),e.abrupt("return");case 4:return s={name:a,image:n,id:this.state.id,link:i},this.setState({isLoading:!0}),e.next=8,R()({baseURL:L.a.BASE_URL,url:L.a.UPDATE_BRAND,method:"POST",data:s});case 8:200==e.sent.status?("0"==this.state.type||"1"==this.state.type?this.getData():this.getData_Company(),this.setState({modalCom:!this.state.modalCom})):(alert("C\u1eadp nh\u1eadt th\u1ea5t b\u1ea1i"),this.setState({isLoading:!1}));case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"delete",value:function(){var e=Object(l.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({isLoading:!0}),e.next=3,R()({baseURL:L.a.BASE_URL,url:L.a.DELETE_BRAND,method:"POST",data:{id:this.state.id}});case 3:200==e.sent.status?("0"==this.state.type||"1"==this.state.type?this.getData():this.getData_Company(),this.setState({modalDelete:!this.state.modalDelete,delete:null})):(alert("X\xf3a s\u1ea3n ph\u1ea9m th\u1ea5t b\u1ea1i"),this.setState({isLoading:!1}));case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"inputChange",value:function(e){this.setState(Object(s.a)({},e.target.name,e.target.value))}},{key:"getBadge",value:function(e){switch(e){case"Actived":return"success";case"Inactive":return"secondary";case"Locked":return"warning";case"Deactived":return"danger";default:return"primary"}}},{key:"onChangeImage",value:function(e){var t=this,a=e.target.files,n=new FileReader;n.readAsDataURL(a[0]),n.onload=function(e){t.setState({image:e.target.result})}}},{key:"render",value:function(){var e=this,t=this.state,a=t.data,n=t.arrPagination,i=t.key;return this.state.isLoading?Object(P.jsx)("div",{className:"sweet-loading",children:Object(P.jsx)(U.a,{css:z,size:50,color:"#123abc",loading:this.state.isLoading,speedMultiplier:1.5})}):Object(P.jsxs)("div",{className:"animated fadeIn",children:[Object(P.jsx)(g.a,{children:Object(P.jsxs)(j.a,{children:[Object(P.jsxs)(b.a,{children:[Object(P.jsxs)(f.a,{children:[Object(P.jsx)("i",{className:"fa fa-align-justify"})," Danh s\xe1ch th\u01b0\u01a1ng hi\u1ec7u",Object(P.jsx)("div",{style:M.tags,children:Object(P.jsxs)(w.W,{children:[Object(P.jsx)(w.p,{sm:"12",lg:"12",children:Object(P.jsxs)(w.W,{children:[Object(P.jsx)(w.p,{sm:"12",lg:"6",children:Object(P.jsx)("div",{children:Object(P.jsx)(x.a,{style:M.searchInput,onChange:function(t){e.actionSearch(t,"key")},name:"key",value:i,placeholder:"T\u1eeb kh\xf3a"})})}),Object(P.jsx)(w.p,{sm:"12",lg:"6",children:Object(P.jsx)(w.d,{color:"primary",style:{width:"100%",marginTop:5},size:"sm",onClick:function(t){e.resetSearch()},children:"L\xe0m m\u1edbi t\xecm ki\u1ebfm"})})]})}),Object(P.jsx)(w.p,{sm:"12",lg:"12",children:Object(P.jsx)(w.d,{outline:!0,color:"primary",style:M.floatRight,size:"sm",onClick:function(t){return e.toggleModal("new")},children:"Th\xeam m\u1edbi"})})]})})]}),Object(P.jsx)(O.a,{children:Object(P.jsxs)("table",{ble:!0,className:"table table-hover table-outline mb-0 d-none d-sm-table",children:[Object(P.jsx)("thead",{className:"thead-light",children:Object(P.jsxs)("tr",{children:[Object(P.jsx)("th",{className:"text-center",children:"STT."}),Object(P.jsx)("th",{className:"text-center",children:"T\xean th\u01b0\u01a1ng hi\u1ec7u"}),Object(P.jsx)("th",{className:"text-center",children:"\u1ea2nh th\u01b0\u01a1ng hi\u1ec7u"}),Object(P.jsx)("th",{className:"text-center",children:"Link th\u01b0\u01a1ng hi\u1ec7u"}),Object(P.jsx)("th",{className:"text-center",children:"#"})]})}),Object(P.jsxs)("tbody",{children:[Object(P.jsx)("td",{colSpan:"10",hidden:this.state.hidden,className:"text-center",children:"Kh\xf4ng t\xecm th\u1ea5y d\u1eef li\u1ec7u"}),void 0!=a?a.map((function(t,a){return Object(P.jsxs)("tr",{children:[Object(P.jsx)("td",{className:"text-center",children:a+1}),Object(P.jsx)("td",{className:"text-center",children:t.name}),Object(P.jsx)("td",{className:"text-center",children:Object(P.jsx)("img",{src:t.image,width:"90px",height:"70px"})}),Object(P.jsx)("td",{className:"text-center",children:Object(P.jsx)("a",{href:t.link,target:"_blank",children:t.link})}),Object(P.jsxs)("td",{className:"text-center",children:[Object(P.jsx)(w.d,{style:M.mgl5,outline:!0,color:"primary",size:"sm",onClick:function(){var a=Object(l.a)(c.a.mark((function a(n){return c.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.openUpdate(t);case 2:return a.abrupt("return",a.sent);case 3:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}(),children:Object(P.jsx)(p.a,{name:"cilPencil"})})," ",Object(P.jsx)(w.d,{outline:!0,color:"danger",size:"sm",onClick:function(a){e.openDelete(t)},children:Object(P.jsx)(p.a,{name:"cilTrash"})})]})]},a)})):""]})]})})]}),Object(P.jsx)("div",{style:{float:"right"},children:Object(P.jsx)(D.a,{count:n.length,color:"primary",onChange:function(t,a){e.setState({data:n[a-1],indexPage:a-1})}})})]})}),Object(P.jsxs)(v.a,{isOpen:this.state.modalCom,className:this.props.className,children:[Object(P.jsx)(y.a,{children:"new"==this.state.action?"T\u1ea1o m\u1edbi":"C\u1eadp nh\u1eadt"}),Object(P.jsxs)(k.a,{children:[Object(P.jsx)(A.a,{field:"name",label:"T\xean th\u01b0\u01a1ng hi\u1ec7u",value:this.state.name,placeholder:"T\xean th\u01b0\u01a1ng hi\u1ec7u",onChange:function(t){return e.onChange("name",t.target.value)}}),Object(P.jsx)(A.a,{field:"image",label:"\u1ea2nh th\u01b0\u01a1ng hi\u1ec7u",type:"file",onChange:function(t){e.onChangeImage(t)},onClick:function(e){e.target.value=null}}),""==this.state.image?"":Object(P.jsx)("img",{width:"250",height:"300",src:this.state.image,style:{marginBottom:20}}),Object(P.jsx)(A.a,{field:"link",label:"Link th\u01b0\u01a1ng hi\u1ec7u",value:this.state.link,placeholder:"Link th\u01b0\u01a1ng hi\u1ec7u",onChange:function(t){return e.onChange("link",t.target.value)}})]}),Object(P.jsxs)(S.a,{children:[Object(P.jsx)(w.d,{color:"primary",onClick:function(t){"new"===e.state.action?e.addRoles():e.updateUser()},disabled:this.state.isLoading,children:"Save"})," ",Object(P.jsx)(w.d,{color:"secondary",onClick:function(t){return e.toggleModal("new")},children:"Cancel"})]})]}),Object(P.jsxs)(v.a,{isOpen:this.state.modalDelete,toggle:function(t){return e.setState({modalDelete:!e.state.modalDelete,delete:null})},className:this.props.className,children:[Object(P.jsx)(y.a,{toggle:function(t){return e.setState({modalDelete:!e.state.modalDelete,delete:null})},children:"Delete"}),Object(P.jsx)(k.a,{children:Object(P.jsx)("label",{htmlFor:"tag",children:"X\xe1c nh\u1eadn x\xf3a !!!"})}),Object(P.jsxs)(S.a,{children:[Object(P.jsx)(w.d,{color:"primary",onClick:function(t){return e.delete()},disabled:this.state.isLoading,children:"Delete"})," ",Object(P.jsx)(w.d,{color:"secondary",onClick:function(t){return e.setState({modalDelete:!e.state.modalDelete,delete:null})},children:"Cancel"})]})]})]})}}]),a}(m.Component),z=Object(T.css)(n||(n=Object(i.a)(["\n  display: block;\n  margin: 0 auto;\n  border-color: red;\n"]))),M={pagination:{marginRight:"5px"},flexLabel:{width:100},flexOption:{width:300},a:{textDecoration:"none"},floatRight:{float:"right",marginTop:"3px"},spinner:{width:"30px"},center:{textAlign:"center"},tbody:{height:"380px",overflowY:"auto"},wh25:{width:"25%",float:"left",height:"80px"},w5:{width:"15%",float:"left",height:"80px"},wa10:{width:"5%",float:"left",height:"80px"},row:{float:"left",width:"100%"},success:{color:"green"},danger:{color:"red"},mgl5:{marginLeft:"5px"},tags:{float:"right",marginRight:"5px"},searchInput:{width:"190px",display:"inline-block"},userActive:{color:"green"},userPending:{color:"red"},nagemonNameCol:{width:"328px"},image:{width:"100px",height:"100px",borderRadius:"99999px"}};t.default=E},667:function(e,t,a){"use strict";var n=a(12),i=a(1337),s=a(663);t.a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(i.a)(e,Object(n.a)({defaultTheme:s.a},t))}}}]);
//# sourceMappingURL=64.22715e4b.chunk.js.map
=======
(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[64],{1315:function(e,t,a){"use strict";a.r(t);var n,i=a(654),s=a(165),r=a(113),c=a.n(r),l=a(641),o=a(166),h=a(167),d=a(169),u=a(168),m=a(2),p=a(646),g=a(1259),j=a(1260),b=a(1261),f=a(1262),x=a(1263),O=a(1264),v=a(1340),y=a(1267),k=a(1268),S=a(1269),w=a(640),C=a(667),D=a(1336),L=(a(645),a(644)),A=a(652),N=a(643),R=a.n(N),T=a(653),_=a(655),U=a.n(_),P=a(17),B=new Headers,I=localStorage.getItem("auth");B.append("Authorization","Bearer "+I),B.append("Content-Type","application/json");Object(C.a)((function(e){return{root:{"& > *":{marginTop:e.spacing(2)}}}}));var E=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).getData=Object(l.a)(c.a.mark((function e(){var t,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.setState({isLoading:!0}),e.next=3,R()({baseURL:L.a.BASE_URL,url:L.a.LIST_BRAND,method:"GET"});case 3:t=e.sent,a=t.data.data,n.pagination(a),n.setState({dataApi:a}),0,n.setState({isLoading:!1,totalActive:0});case 9:case"end":return e.stop()}}),e)}))),n.getData_Company=Object(l.a)(c.a.mark((function e(){var t,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.setState({isLoading:!0}),e.next=3,R()({baseURL:L.a.BASE_URL,url:L.a.LIST_BRAND_COMPANY+JSON.parse(n.state.user).company_id,method:"GET"});case 3:t=e.sent,a=t.data.data,n.pagination(a),n.setState({dataApi:a}),0,n.setState({isLoading:!1,totalActive:0});case 9:case"end":return e.stop()}}),e)}))),n.openDelete=function(e){n.setState({modalDelete:!n.state.modalDelete,id:e._id})},n.state={data:[],key:"",activePage:1,page:1,itemsCount:0,limit:20,totalActive:0,modalCom:!1,viewingUser:{},communities:[],updated:"",dataApi:[],hidden:!1,action:"new",name:"",image:"",link:"",modalDelete:!1,delete:null,arrPagination:[],indexPage:0,token:{Authorization:"Bearer ".concat(localStorage.getItem("token"))},type:localStorage.getItem("type"),user:localStorage.getItem("user"),isLoading:!1},n}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var e=Object(l.a)(c.a.mark((function e(){var t,a,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for("0"==(t=this.state.type)||"1"==t?this.getData():this.getData_Company(),a=JSON.parse(localStorage.getItem("url")),n=0;n<a.length;n++)a[n].url==window.location.hash&&1==a[n].isHidden&&(window.location.href="#/");case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"pagination",value:function(e){var t,a,n,i=[];for(t=0,a=e.length;t<a;t+=5)n=e.slice(t,t+5),i.push(n);0==i.length?this.setState({hidden:!1}):this.setState({hidden:!0}),this.setState({arrPagination:i,data:i[0]})}},{key:"searchKey",value:function(){var e=this.state,t=e.indexPage,a=e.key;if(""!=a){var n=[];this.state.dataApi.map((function(e){e.name.toLocaleUpperCase().includes(a.toLocaleUpperCase())&&n.push(e)}));var i=0;n.map((function(e){"Actived"==e.Status&&(i+=1)})),this.setState({data:n,totalActive:i})}else{var s=0;this.state.dataApi.map((function(e){"Actived"==e.Status&&(s+=1)})),this.setState({data:this.state.arrPagination[t],totalActive:s})}}},{key:"actionSearch",value:function(e,t){var a=this;this.setState(Object(s.a)({},t,e.target.value),(function(){a.searchKey()}))}},{key:"resetSearch",value:function(){var e=this;this.setState({key:""},(function(){e.searchKey()}))}},{key:"toggleModal",value:function(){var e=Object(l.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:"new"==t&&this.setState({modalCom:!this.state.modalCom,action:t,name:"",image:"",link:""});case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"onChange",value:function(e,t){this.setState(Object(s.a)({},e,t))}},{key:"addRoles",value:function(){var e=Object(l.a)(c.a.mark((function e(){var t,a,n,i,s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.state,a=t.name,n=t.image,i=t.link,null!=a&&""!=a&&null!=n&&""!=n){e.next=4;break}return alert("Please fill in all the requirements"),e.abrupt("return");case 4:return s={name:a,image:n,company_id:"0"==this.state.type||"1"==this.state.type?"":JSON.parse(this.state.user).company_id,link:i},this.setState({isLoading:!0}),e.next=8,R()({baseURL:L.a.BASE_URL,url:L.a.ADD_BRAND,method:"POST",data:s});case 8:200==e.sent.status?("0"==this.state.type||"1"==this.state.type?this.getData():this.getData_Company(),this.setState({modalCom:!this.state.modalCom})):(alert("Th\xeam th\u01b0\u01a1ng hi\u1ec7u th\u1ea5t b\u1ea1i"),this.setState({isLoading:!1}));case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"openUpdate",value:function(){var e=Object(l.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.setState({modalCom:!this.state.modalCom,action:"update",name:t.name,image:t.image,id:t._id,link:t.link});case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"updateUser",value:function(){var e=Object(l.a)(c.a.mark((function e(){var t,a,n,i,s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.state,a=t.name,n=t.image,i=t.link,null!=a&&""!=a&&null!=n&&""!=n){e.next=4;break}return alert("Please fill in all the requirements"),e.abrupt("return");case 4:return s={name:a,image:n,id:this.state.id,link:i},this.setState({isLoading:!0}),e.next=8,R()({baseURL:L.a.BASE_URL,url:L.a.UPDATE_BRAND,method:"POST",data:s});case 8:200==e.sent.status?("0"==this.state.type||"1"==this.state.type?this.getData():this.getData_Company(),this.setState({modalCom:!this.state.modalCom})):(alert("C\u1eadp nh\u1eadt th\u1ea5t b\u1ea1i"),this.setState({isLoading:!1}));case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"delete",value:function(){var e=Object(l.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({isLoading:!0}),e.next=3,R()({baseURL:L.a.BASE_URL,url:L.a.DELETE_BRAND,method:"POST",data:{id:this.state.id}});case 3:200==e.sent.status?("0"==this.state.type||"1"==this.state.type?this.getData():this.getData_Company(),this.setState({modalDelete:!this.state.modalDelete,delete:null})):(alert("X\xf3a s\u1ea3n ph\u1ea9m th\u1ea5t b\u1ea1i"),this.setState({isLoading:!1}));case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"inputChange",value:function(e){this.setState(Object(s.a)({},e.target.name,e.target.value))}},{key:"getBadge",value:function(e){switch(e){case"Actived":return"success";case"Inactive":return"secondary";case"Locked":return"warning";case"Deactived":return"danger";default:return"primary"}}},{key:"onChangeImage",value:function(e){var t=this,a=e.target.files,n=new FileReader;n.readAsDataURL(a[0]),n.onload=function(e){t.setState({image:e.target.result})}}},{key:"render",value:function(){var e=this,t=this.state,a=t.data,n=t.arrPagination,i=t.key;return this.state.isLoading?Object(P.jsx)("div",{className:"sweet-loading",children:Object(P.jsx)(U.a,{css:z,size:50,color:"#123abc",loading:this.state.isLoading,speedMultiplier:1.5})}):Object(P.jsxs)("div",{className:"animated fadeIn",children:[Object(P.jsx)(g.a,{children:Object(P.jsxs)(j.a,{children:[Object(P.jsxs)(b.a,{children:[Object(P.jsxs)(f.a,{children:[Object(P.jsx)("i",{className:"fa fa-align-justify"})," Danh s\xe1ch th\u01b0\u01a1ng hi\u1ec7u",Object(P.jsx)("div",{style:M.tags,children:Object(P.jsxs)(w.W,{children:[Object(P.jsx)(w.p,{sm:"12",lg:"12",children:Object(P.jsxs)(w.W,{children:[Object(P.jsx)(w.p,{sm:"12",lg:"6",children:Object(P.jsx)("div",{children:Object(P.jsx)(x.a,{style:M.searchInput,onChange:function(t){e.actionSearch(t,"key")},name:"key",value:i,placeholder:"T\u1eeb kh\xf3a"})})}),Object(P.jsx)(w.p,{sm:"12",lg:"6",children:Object(P.jsx)(w.d,{color:"primary",style:{width:"100%",marginTop:5},size:"sm",onClick:function(t){e.resetSearch()},children:"L\xe0m m\u1edbi t\xecm ki\u1ebfm"})})]})}),Object(P.jsx)(w.p,{sm:"12",lg:"12",children:Object(P.jsx)(w.d,{outline:!0,color:"primary",style:M.floatRight,size:"sm",onClick:function(t){return e.toggleModal("new")},children:"Th\xeam m\u1edbi"})})]})})]}),Object(P.jsx)(O.a,{children:Object(P.jsxs)("table",{ble:!0,className:"table table-hover table-outline mb-0 d-none d-sm-table",children:[Object(P.jsx)("thead",{className:"thead-light",children:Object(P.jsxs)("tr",{children:[Object(P.jsx)("th",{className:"text-center",children:"STT."}),Object(P.jsx)("th",{className:"text-center",children:"T\xean th\u01b0\u01a1ng hi\u1ec7u"}),Object(P.jsx)("th",{className:"text-center",children:"\u1ea2nh th\u01b0\u01a1ng hi\u1ec7u"}),Object(P.jsx)("th",{className:"text-center",children:"Link th\u01b0\u01a1ng hi\u1ec7u"}),Object(P.jsx)("th",{className:"text-center",children:"#"})]})}),Object(P.jsxs)("tbody",{children:[Object(P.jsx)("td",{colSpan:"10",hidden:this.state.hidden,className:"text-center",children:"Kh\xf4ng t\xecm th\u1ea5y d\u1eef li\u1ec7u"}),void 0!=a?a.map((function(t,a){return Object(P.jsxs)("tr",{children:[Object(P.jsx)("td",{className:"text-center",children:a+1}),Object(P.jsx)("td",{className:"text-center",children:t.name}),Object(P.jsx)("td",{className:"text-center",children:Object(P.jsx)("img",{src:t.image,width:"90px",height:"70px"})}),Object(P.jsx)("td",{className:"text-center",children:Object(P.jsx)("a",{href:t.link,target:"_blank",children:t.link})}),Object(P.jsxs)("td",{className:"text-center",children:[Object(P.jsx)(w.d,{style:M.mgl5,outline:!0,color:"primary",size:"sm",onClick:function(){var a=Object(l.a)(c.a.mark((function a(n){return c.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.openUpdate(t);case 2:return a.abrupt("return",a.sent);case 3:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}(),children:Object(P.jsx)(p.a,{name:"cilPencil"})})," ",Object(P.jsx)(w.d,{outline:!0,color:"danger",size:"sm",onClick:function(a){e.openDelete(t)},children:Object(P.jsx)(p.a,{name:"cilTrash"})})]})]},a)})):""]})]})})]}),Object(P.jsx)("div",{style:{float:"right"},children:Object(P.jsx)(D.a,{count:n.length,color:"primary",onChange:function(t,a){e.setState({data:n[a-1],indexPage:a-1})}})})]})}),Object(P.jsxs)(v.a,{isOpen:this.state.modalCom,className:this.props.className,children:[Object(P.jsx)(y.a,{children:"new"==this.state.action?"T\u1ea1o m\u1edbi":"C\u1eadp nh\u1eadt"}),Object(P.jsxs)(k.a,{children:[Object(P.jsx)(A.a,{field:"name",label:"T\xean th\u01b0\u01a1ng hi\u1ec7u",value:this.state.name,placeholder:"T\xean th\u01b0\u01a1ng hi\u1ec7u",onChange:function(t){return e.onChange("name",t.target.value)}}),Object(P.jsx)(A.a,{field:"image",label:"\u1ea2nh th\u01b0\u01a1ng hi\u1ec7u",type:"file",onChange:function(t){e.onChangeImage(t)},onClick:function(e){e.target.value=null}}),""==this.state.image?"":Object(P.jsx)("img",{width:"250",height:"300",src:this.state.image,style:{marginBottom:20}}),Object(P.jsx)(A.a,{field:"link",label:"Link th\u01b0\u01a1ng hi\u1ec7u",value:this.state.link,placeholder:"Link th\u01b0\u01a1ng hi\u1ec7u",onChange:function(t){return e.onChange("link",t.target.value)}})]}),Object(P.jsxs)(S.a,{children:[Object(P.jsx)(w.d,{color:"primary",onClick:function(t){"new"===e.state.action?e.addRoles():e.updateUser()},disabled:this.state.isLoading,children:"Save"})," ",Object(P.jsx)(w.d,{color:"secondary",onClick:function(t){return e.toggleModal("new")},children:"Cancel"})]})]}),Object(P.jsxs)(v.a,{isOpen:this.state.modalDelete,toggle:function(t){return e.setState({modalDelete:!e.state.modalDelete,delete:null})},className:this.props.className,children:[Object(P.jsx)(y.a,{toggle:function(t){return e.setState({modalDelete:!e.state.modalDelete,delete:null})},children:"Delete"}),Object(P.jsx)(k.a,{children:Object(P.jsx)("label",{htmlFor:"tag",children:"X\xe1c nh\u1eadn x\xf3a !!!"})}),Object(P.jsxs)(S.a,{children:[Object(P.jsx)(w.d,{color:"primary",onClick:function(t){return e.delete()},disabled:this.state.isLoading,children:"Delete"})," ",Object(P.jsx)(w.d,{color:"secondary",onClick:function(t){return e.setState({modalDelete:!e.state.modalDelete,delete:null})},children:"Cancel"})]})]})]})}}]),a}(m.Component),z=Object(T.css)(n||(n=Object(i.a)(["\n  display: block;\n  margin: 0 auto;\n  border-color: red;\n"]))),M={pagination:{marginRight:"5px"},flexLabel:{width:100},flexOption:{width:300},a:{textDecoration:"none"},floatRight:{float:"right",marginTop:"3px"},spinner:{width:"30px"},center:{textAlign:"center"},tbody:{height:"380px",overflowY:"auto"},wh25:{width:"25%",float:"left",height:"80px"},w5:{width:"15%",float:"left",height:"80px"},wa10:{width:"5%",float:"left",height:"80px"},row:{float:"left",width:"100%"},success:{color:"green"},danger:{color:"red"},mgl5:{marginLeft:"5px"},tags:{float:"right",marginRight:"5px"},searchInput:{width:"190px",display:"inline-block"},userActive:{color:"green"},userPending:{color:"red"},nagemonNameCol:{width:"328px"},image:{width:"100px",height:"100px",borderRadius:"99999px"}};t.default=E},667:function(e,t,a){"use strict";var n=a(12),i=a(1337),s=a(663);t.a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(i.a)(e,Object(n.a)({defaultTheme:s.a},t))}}}]);
//# sourceMappingURL=64.c68d5469.chunk.js.map
>>>>>>> 572f03dd0d699b5cbe95000e46f393057d9e71d9:build/static/js/64.c68d5469.chunk.js
