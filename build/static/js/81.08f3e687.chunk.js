(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[81],{1320:function(e,t,a){"use strict";a.r(t);var n,s=a(654),i=a(165),r=a(113),c=a.n(r),l=a(641),o=a(166),d=a(167),h=a(169),u=a(168),p=a(2),m=a(645),j=a(1259),x=a(1260),b=a(1261),g=a(1262),f=a(1263),O=a(1264),v=a(1340),y=a(1267),S=a(1268),k=a(1269),C=a(640),w=a(1336),_=(a(646),a(644)),L=a(652),D=a(643),N=a.n(D),A=a(653),U=a(655),R=a.n(U),T=a(17),P=new Headers,E=localStorage.getItem("auth");P.append("Authorization","Bearer "+E),P.append("Content-Type","application/json");var I=function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).getData=Object(l.a)(c.a.mark((function e(){var t,a,s,i,r,l;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.setState({isLoading:!0}),e.next=3,N()({baseURL:_.a.BASE_URL,url:_.a.LIST_COLOR,method:"GET"});case 3:return t=e.sent,e.next=6,N()({baseURL:_.a.BASE_URL,url:_.a.LIST_PRODUCT,method:"GET"});case 6:for(a=e.sent,s=t.data.data,i=t.data.sub,r=0;r<s.length;r++)void 0!=i[r]?s[r].subName=i[r].name:s[r].subName="";l=a.data.data,n.pagination(s),n.setState({dataApi:s,products:l,isLoading:!1});case 13:case"end":return e.stop()}}),e)}))),n.getData_Company=Object(l.a)(c.a.mark((function e(){var t,a,s,i,r,l;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.state.user,n.setState({isLoading:!0}),e.next=4,N()({baseURL:_.a.BASE_URL,url:_.a.LIST_COLOR_COMPANY+JSON.parse(n.state.user).company_id,method:"GET"});case 4:return t=e.sent,e.next=7,N()({baseURL:_.a.BASE_URL,url:_.a.LIST_PRODUCT_COMPANY+JSON.parse(n.state.user).company_id,method:"GET"});case 7:for(a=e.sent,s=t.data.data,i=t.data.sub,r=0;r<s.length;r++)void 0!=i[r]?s[r].subName=i[r].name:s[r].subName="";l=a.data.data,n.pagination(s),n.setState({dataApi:s,products:l,isLoading:!1});case 14:case"end":return e.stop()}}),e)}))),n.openDelete=function(e){n.setState({modalDelete:!n.state.modalDelete,id:e._id})},n.state={data:[],key:"",activePage:1,page:1,itemsCount:0,limit:20,totalActive:0,modalCom:!1,viewingUser:{},communities:[],updated:"",dataApi:[],hidden:!1,action:"new",products:[],product_id:"",hex:"",makeup_id:"",alpha:"",version:"v4",modalDelete:!1,delete:null,arrPagination:[],indexPage:0,token:{Authorization:"Bearer ".concat(localStorage.getItem("token"))},type:localStorage.getItem("type"),user:localStorage.getItem("user"),isLoading:!1},n}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(l.a)(c.a.mark((function e(){var t,a,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for("0"==(t=this.state.type)||"1"==t?this.getData():this.getData_Company(),a=JSON.parse(localStorage.getItem("url")),n=0;n<a.length;n++)a[n].url==window.location.hash&&1==a[n].isHidden&&(window.location.href="#/");case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"pagination",value:function(e){var t,a,n,s=[];for(t=0,a=e.length;t<a;t+=5)n=e.slice(t,t+5),s.push(n);0==s.length?this.setState({hidden:!1}):this.setState({hidden:!0}),this.setState({arrPagination:s,data:s[0]})}},{key:"searchKey",value:function(){var e=this.state,t=e.indexPage,a=e.key;if(""!=a){var n=[];this.state.dataApi.map((function(e){(e.hex.toLocaleUpperCase().includes(a.toLocaleUpperCase())||e.makeup_id.toLocaleUpperCase().includes(a.toLocaleUpperCase())||e.product_id.name.toLocaleUpperCase().includes(a.toLocaleUpperCase()))&&n.push(e)}));var s=0;n.map((function(e){"Actived"==e.Status&&(s+=1)})),this.setState({data:n,totalActive:s})}else{var i=0;this.state.dataApi.map((function(e){"Actived"==e.Status&&(i+=1)})),this.setState({data:this.state.arrPagination[t],totalActive:i})}}},{key:"toggleModal",value:function(){var e=Object(l.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:"new"==t&&this.setState({modalCom:!this.state.modalCom,action:t,product_id:0==this.state.products.length?"":this.state.products[0]._id,hex:"",makeup_id:"",alpha:"",version:"v4"});case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"onChange",value:function(e,t){this.setState(Object(i.a)({},e,t))}},{key:"addRoles",value:function(){var e=Object(l.a)(c.a.mark((function e(){var t,a,n,s,i,r,l;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.state,a=t.hex,n=t.makeup_id,s=t.alpha,i=t.product_id,r=t.version,null!=a&&""!=a&&null!=n&&""!=n&&null!=s&&""!=s&&null!=i&&""!=i){e.next=4;break}return alert("Vui lòng nhập đầy đủ trường dữ liệu !!!"),e.abrupt("return");case 4:return l={product_id:i,hex:a,makeup_id:n,alpha:s,ver:r,company_id:"0"==this.state.type||"1"==this.state.type?"":JSON.parse(this.state.user).company_id},this.setState({isLoading:!0}),e.next=8,N()({baseURL:_.a.BASE_URL,url:_.a.ADD_COLOR,method:"POST",data:l});case 8:200==e.sent.status?("0"==this.state.type||"1"==this.state.type?this.getData():this.getData_Company(),this.setState({modalCom:!this.state.modalCom})):(alert("Th\xeam m\xe0u th\u1ea5t b\u1ea1i"),this.setState({isLoading:!1}));case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"openUpdate",value:function(){var e=Object(l.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.setState({modalCom:!this.state.modalCom,action:"update",product_id:t.product_id._id,hex:t.hex,makeup_id:t.makeup_id,alpha:t.alpha,id:t._id,ver:t.version});case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"updateUser",value:function(){var e=Object(l.a)(c.a.mark((function e(){var t,a,n,s,i,r,l;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.state,a=t.hex,n=t.makeup_id,s=t.alpha,i=t.product_id,r=t.version,console.log(i),null!=a&&""!=a&&null!=n&&""!=n&&null!=s&&""!=s&&null!=i&&""!=i){e.next=5;break}return alert("Vui lòng nhập đầy đủ trường dữ liệu !!!"),e.abrupt("return");case 5:return l={product_id:i,hex:a,makeup_id:n,alpha:s,ver:r,id:this.state.id},this.setState({isLoading:!0}),e.next=9,N()({baseURL:_.a.BASE_URL,url:_.a.UPDATE_COLOR,method:"POST",data:l});case 9:200==e.sent.status?("0"==this.state.type||"1"==this.state.type?this.getData():this.getData_Company(),this.setState({modalCom:!this.state.modalCom})):(alert("C\u1eadp nh\u1eadt th\u1ea5t b\u1ea1i"),this.setState({isLoading:!1}));case 11:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"delete",value:function(){var e=Object(l.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({isLoading:!0}),e.next=3,N()({baseURL:_.a.BASE_URL,url:_.a.DELETE_COLOR,method:"POST",data:{id:this.state.id}});case 3:200==e.sent.status?("0"==this.state.type||"1"==this.state.type?this.getData():this.getData_Company(),this.setState({modalDelete:!this.state.modalDelete,delete:null})):(alert("X\xf3a s\u1ea3n ph\u1ea9m th\u1ea5t b\u1ea1i"),this.setState({isLoading:!1}));case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"inputChange",value:function(e){this.setState(Object(i.a)({},e.target.name,e.target.value))}},{key:"getBadge",value:function(e){switch(e){case"Actived":return"success";case"Inactive":return"secondary";case"Locked":return"warning";case"Deactived":return"danger";default:return"primary"}}},{key:"actionSearch",value:function(e,t){var a=this;this.setState(Object(i.a)({},t,e.target.value),(function(){a.searchKey()}))}},{key:"resetSearch",value:function(){var e=this;this.setState({key:""},(function(){e.searchKey()}))}},{key:"render",value:function(){var e=this,t=this.state,a=t.data,n=t.arrPagination,s=t.products,i=(t.type,t.key);return this.state.isLoading?Object(T.jsx)("div",{className:"sweet-loading",children:Object(T.jsx)(R.a,{css:M,size:50,color:"#123abc",loading:this.state.isLoading,speedMultiplier:1.5})}):Object(T.jsxs)("div",{className:"animated fadeIn",children:[Object(T.jsx)(j.a,{children:Object(T.jsxs)(x.a,{children:[Object(T.jsxs)(b.a,{children:[Object(T.jsxs)(g.a,{children:[Object(T.jsx)("i",{className:"fa fa-align-justify"})," Danh s\xe1ch m\xe3 m\xe0u",Object(T.jsx)("div",{style:B.tags,children:Object(T.jsxs)(C.W,{children:[Object(T.jsx)(C.p,{sm:"12",lg:"12",children:Object(T.jsxs)(C.W,{children:[Object(T.jsx)(C.p,{sm:"12",lg:"6",children:Object(T.jsx)("div",{children:Object(T.jsx)(f.a,{style:B.searchInput,onChange:function(t){e.actionSearch(t,"key")},name:"key",value:i,placeholder:"T\u1eeb kh\xf3a"})})}),Object(T.jsx)(C.p,{sm:"12",lg:"6",children:Object(T.jsx)(C.d,{color:"primary",style:{width:"100%",marginTop:5},size:"sm",onClick:function(t){e.resetSearch()},children:"L\xe0m m\u1edbi t\xecm ki\u1ebfm"})})]})}),Object(T.jsx)(C.p,{sm:"12",lg:"12"})]})})]}),Object(T.jsx)(O.a,{children:Object(T.jsxs)("table",{ble:!0,className:"table table-hover table-outline mb-0 d-none d-sm-table",children:[Object(T.jsx)("thead",{className:"thead-light",children:Object(T.jsxs)("tr",{children:[Object(T.jsx)("th",{className:"text-center",children:"STT."}),Object(T.jsx)("th",{className:"text-center",children:"Hex"}),Object(T.jsx)("th",{className:"text-center",children:"MakeUp ID"}),Object(T.jsx)("th",{className:"text-center",children:"Alpha"}),Object(T.jsx)("th",{className:"text-center",children:"#"})]})}),Object(T.jsxs)("tbody",{children:[Object(T.jsx)("td",{colSpan:"10",hidden:this.state.hidden,className:"text-center",children:"Kh\xf4ng t\xecm th\u1ea5y d\u1eef li\u1ec7u"}),void 0!=a?a.map((function(t,a){return Object(T.jsxs)("tr",{children:[Object(T.jsx)("td",{className:"text-center",children:a+1}),Object(T.jsxs)("td",{className:"text-center",children:[t.hex,Object(T.jsx)("div",{style:{backgroundColor:t.hex,width:"100%",height:"30px"},children:" "})]}),Object(T.jsx)("td",{className:"text-center",children:t.makeup_id}),Object(T.jsx)("td",{className:"text-center",children:t.alpha}),Object(T.jsxs)("td",{className:"text-center",children:[Object(T.jsx)(C.d,{style:B.mgl5,outline:!0,color:"primary",size:"sm",onClick:function(){var a=Object(l.a)(c.a.mark((function a(n){return c.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.openUpdate(t);case 2:return a.abrupt("return",a.sent);case 3:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}(),children:Object(T.jsx)(m.a,{name:"cilPencil"})}),Object(T.jsx)(C.d,{outline:!0,color:"danger",size:"sm",onClick:function(a){e.openDelete(t)},children:Object(T.jsx)(m.a,{name:"cilTrash"})})]})]},a)})):""]})]})})]}),Object(T.jsx)("div",{style:{float:"right"},children:Object(T.jsx)(w.a,{count:n.length,color:"primary",onChange:function(t,a){e.setState({data:n[a-1],indexPage:a-1})}})})]})}),Object(T.jsxs)(v.a,{isOpen:this.state.modalCom,className:this.props.className,children:[Object(T.jsx)(y.a,{children:"new"==this.state.action?"T\u1ea1o m\u1edbi":"C\u1eadp nh\u1eadt"}),Object(T.jsxs)(S.a,{children:[Object(T.jsx)(C.M,{children:"Ch\u1ecdn s\u1ea3n ph\u1ea9m:"}),Object(T.jsx)("div",{style:{width:"100%"},children:Object(T.jsx)(C.X,{onChange:function(){var t=Object(l.a)(c.a.mark((function t(a){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.setState({product_id:a.target.value});case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),custom:!0,size:"sm",name:"selectSm",id:"SelectLm",children:s.map((function(t,a){return t._id==e.state.product_id?Object(T.jsx)("option",{selected:!0,value:t._id,children:t.name},a):Object(T.jsx)("option",{value:t._id,children:t.name},a)}))})}),Object(T.jsx)(L.a,{field:"hex",label:"Hex",value:this.state.hex,placeholder:"Hex",onChange:function(t){return e.onChange("hex",t.target.value)}}),Object(T.jsx)(L.a,{field:"makeup_id",label:"M\xe3 Makeup",value:this.state.makeup_id,placeholder:"M\xe3 Makeup",onChange:function(t){return e.onChange("makeup_id",t.target.value)}}),Object(T.jsx)(L.a,{field:"alpha",label:"Alpha",value:this.state.alpha,placeholder:"Alpha",onChange:function(t){return e.onChange("alpha",t.target.value)}}),Object(T.jsx)(C.M,{children:"Phi\xean b\u1ea3n:"}),Object(T.jsx)("div",{style:{width:"100%"},children:Object(T.jsx)(C.X,{onChange:function(){var t=Object(l.a)(c.a.mark((function t(a){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.setState({version:a.target.value});case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),custom:!0,size:"sm",name:"selectSm",id:"SelectLm",children:["v3","v4"].map((function(t,a){return t==e.state.version?Object(T.jsx)("option",{selected:!0,value:t,children:t},a):Object(T.jsx)("option",{value:t,children:t},a)}))})})]}),Object(T.jsxs)(k.a,{children:[Object(T.jsx)(C.d,{color:"primary",onClick:function(t){"new"===e.state.action?e.addRoles():e.updateUser()},disabled:this.state.isLoading,children:"Save"})," ",Object(T.jsx)(C.d,{color:"secondary",onClick:function(t){return e.toggleModal("new")},children:"Cancel"})]})]}),Object(T.jsxs)(v.a,{isOpen:this.state.modalDelete,toggle:function(t){return e.setState({modalDelete:!e.state.modalDelete,delete:null})},className:this.props.className,children:[Object(T.jsx)(y.a,{toggle:function(t){return e.setState({modalDelete:!e.state.modalDelete,delete:null})},children:"Delete"}),Object(T.jsx)(S.a,{children:Object(T.jsx)("label",{htmlFor:"tag",children:"X\xe1c nh\u1eadn x\xf3a !!!"})}),Object(T.jsxs)(k.a,{children:[Object(T.jsx)(C.d,{color:"primary",onClick:function(t){return e.delete()},disabled:this.state.isLoading,children:"Delete"})," ",Object(T.jsx)(C.d,{color:"secondary",onClick:function(t){return e.setState({modalDelete:!e.state.modalDelete,delete:null})},children:"Cancel"})]})]})]})}}]),a}(p.Component),M=Object(A.css)(n||(n=Object(s.a)(["\n  display: block;\n  margin: 0 auto;\n  border-color: red;\n"]))),B={pagination:{marginRight:"5px"},flexLabel:{width:100},flexOption:{width:300},a:{textDecoration:"none"},floatRight:{float:"right",marginTop:"3px"},spinner:{width:"30px"},center:{textAlign:"center"},tbody:{height:"380px",overflowY:"auto"},wh25:{width:"25%",float:"left",height:"80px"},w5:{width:"15%",float:"left",height:"80px"},wa10:{width:"5%",float:"left",height:"80px"},row:{float:"left",width:"100%"},success:{color:"green"},danger:{color:"red"},mgl5:{margin:"5px"},tags:{float:"right",marginRight:"5px"},searchInput:{width:"190px",display:"inline-block"},userActive:{color:"green"},userPending:{color:"red"},nagemonNameCol:{width:"328px"},image:{width:"100px",height:"100px",borderRadius:"99999px"}};t.default=I}}]);
//# sourceMappingURL=81.08f3e687.chunk.js.map
