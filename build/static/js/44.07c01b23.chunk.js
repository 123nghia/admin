(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[44],{1372:function(e,t,a){"use strict";a.r(t);var n,s=a(653),i=a(165),r=a(113),c=a.n(r),l=a(640),o=a(166),d=a(167),h=a(169),u=a(168),m=a(2),j=a(645),g=a(1299),p=a(1300),x=a(1301),b=a(1302),f=a(1303),O=a(1304),v=a(1389),y=a(1307),w=a(1308),S=a(1309),C=a(639),k=a(1385),L=(a(644),a(659)),N=a(652),D=a(643),T=a.n(D),A=a(649),P=a(654),R=a.n(P),I=a(668),U=a(17),_=function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).getData=Object(l.a)(c.a.mark((function e(){var t,a,s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.state.companyid,n.setState({isLoading:!0}),e.next=4,T()({baseURL:L.a.BASE_URL,url:L.a.LIST_LOCATION,data:{company_id:t},method:"POST"});case 4:a=e.sent,s=a.data.data,n.pagination(s),n.setState({dataApi:s,isLoading:!1});case 8:case"end":return e.stop()}}),e)}))),n.openDelete=function(e){n.setState({modalDelete:!n.state.modalDelete,id:e._id})},n.state={data:[],key:"",totalActive:0,modalCom:!1,updated:"",dataApi:[],hidden:!1,action:"new",name:"",address:"",street:"",city:"",distrist:"",ward:"",image:"",modalDelete:!1,delete:null,arrPagination:[],indexPage:0,token:{Authorization:"Bearer ".concat(localStorage.getItem("token"))},user:localStorage.getItem("user"),companyid:localStorage.getItem("company_id"),isLoading:!1},n}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(l.a)(c.a.mark((function e(){var t,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(this.state.type,this.getData(),t=JSON.parse(localStorage.getItem("url")),a=0;a<t.length;a++)t[a].url==window.location.hash&&1==t[a].isHidden&&(window.location.href="#/");case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"pagination",value:function(e){var t,a,n,s=[];for(t=0,a=e.length;t<a;t+=5)n=e.slice(t,t+5),s.push(n);0==s.length?this.setState({hidden:!1}):this.setState({hidden:!0}),this.setState({arrPagination:s,data:s[0]})}},{key:"searchKey",value:function(){var e=this.state,t=e.indexPage,a=e.key;if(""!=a){var n=[];this.state.dataApi.map((function(e){e.name.toLocaleUpperCase().includes(a.toLocaleUpperCase())&&n.push(e)}));var s=0;n.map((function(e){"Actived"==e.Status&&(s+=1)})),this.setState({data:n,totalActive:s})}else{var i=0;this.state.dataApi.map((function(e){"Actived"==e.Status&&(i+=1)})),this.setState({data:this.state.arrPagination[t],totalActive:i})}}},{key:"actionSearch",value:function(e,t){var a=this;this.setState(Object(i.a)({},t,e.target.value),(function(){a.searchKey()}))}},{key:"resetSearch",value:function(){var e=this;this.setState({key:""},(function(){e.searchKey()}))}},{key:"toggleModal",value:function(){var e=Object(l.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:"new"==t&&this.setState({modalCom:!this.state.modalCom,action:t,name:"",address:"",street:"",city:"",distrist:"",ward:"",image:""});case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"onChange",value:function(e,t){this.setState(Object(i.a)({},e,t))}},{key:"addLocation",value:function(){var e=Object(l.a)(c.a.mark((function e(){var t,a,n,s,i,r,l,o,d,h;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.state,a=t.companyid,n=t.name,s=t.address,i=t.street,r=t.city,l=t.distrist,o=t.ward,d=t.image,null!=n&&""!=n&&null!=s&&""!=s&&null!=i&&""!=i&&null!=r&&""!=r&&null!=l&&""!=l&&null!=o&&""!=o){e.next=4;break}return alert("Vui l\xf2ng nh\u1eadp \u0111\u1ea7y \u0111\u1ee7 tr\u01b0\u1eddng d\u1eef li\u1ec7u !!!"),e.abrupt("return");case 4:return h={company_id:a,name:n,address:s,street:i,city:r,distrist:l,ward:o,image:d},this.setState({isLoading:!0}),e.next=8,T()({baseURL:L.a.BASE_URL,url:L.a.ADD_LOCATION,method:"POST",data:h});case 8:200==e.sent.status?(this.getData(),this.setState({modalCom:!this.state.modalCom})):(alert("Th\xeam th\u1ea5t b\u1ea1i"),this.setState({isLoading:!1}));case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"openUpdate",value:function(){var e=Object(l.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.setState({modalCom:!this.state.modalCom,action:"update",name:t.name,address:t.address,street:t.street,city:t.city,distrist:t.distrist,ward:t.ward,image:t.image,id:t._id});case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"updateLocation",value:function(){var e=Object(l.a)(c.a.mark((function e(){var t,a,n,s,i,r,l,o,d;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.state,a=t.name,n=t.address,s=t.street,i=t.city,r=t.distrist,l=t.ward,o=t.image,null!=a&&""!=a&&null!=n&&""!=n&&null!=s&&""!=s&&null!=i&&""!=i&&null!=r&&""!=r&&null!=l&&""!=l){e.next=4;break}return alert("Vui l\xf2ng nh\u1eadp \u0111\u1ea7y \u0111\u1ee7 tr\u01b0\u1eddng d\u1eef li\u1ec7u !!!"),e.abrupt("return");case 4:return d={name:a,address:n,street:s,city:i,distrist:r,ward:l,image:o,id:this.state.id},this.setState({isLoading:!0}),e.next=8,T()({baseURL:L.a.BASE_URL,url:L.a.UPDATE_LOCATION,method:"POST",data:d});case 8:200==e.sent.status?(this.getData(),this.setState({modalCom:!this.state.modalCom})):(alert("C\u1eadp nh\u1eadt th\u1ea5t b\u1ea1i"),this.setState({isLoading:!1}));case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"delete",value:function(){var e=Object(l.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({isLoading:!0}),e.next=3,T()({baseURL:L.a.BASE_URL,url:L.a.DELETE_LOCATION,method:"POST",data:{id:this.state.id}});case 3:200==e.sent.status?(this.getData(),this.setState({modalDelete:!this.state.modalDelete,delete:null})):(alert("X\xf3a s\u1ea3n ph\u1ea9m th\u1ea5t b\u1ea1i"),this.setState({isLoading:!1}));case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"inputChange",value:function(e){this.setState(Object(i.a)({},e.target.name,e.target.value))}},{key:"onChangeImage",value:function(e){var t=this,a=e.target.files,n=new FileReader;n.readAsDataURL(a[0]),n.onload=function(e){t.setState({image:e.target.result})}}},{key:"render",value:function(){var e=this,t=this.state,a=t.data,n=t.arrPagination,s=t.key;return this.state.isLoading?Object(U.jsx)("div",{className:"sweet-loading",children:Object(U.jsx)(R.a,{css:E,size:50,color:"#123abc",loading:this.state.isLoading,speedMultiplier:1.5})}):Object(U.jsxs)("div",{className:"animated fadeIn",children:[Object(U.jsx)(g.a,{children:Object(U.jsxs)(p.a,{children:[Object(U.jsxs)(x.a,{children:[Object(U.jsxs)(b.a,{children:[Object(U.jsx)("i",{className:"fa fa-align-justify"})," Danh s\xe1ch d\u1ecbch v\u1ee5",Object(U.jsx)("div",{style:I.a.tags,children:Object(U.jsxs)(C.W,{children:[Object(U.jsx)(C.p,{sm:"12",lg:"12",children:Object(U.jsxs)(C.W,{children:[Object(U.jsx)(C.p,{sm:"12",lg:"6",children:Object(U.jsx)("div",{children:Object(U.jsx)(f.a,{style:I.a.searchInput,onChange:function(t){e.actionSearch(t,"key")},name:"key",value:s,placeholder:"T\u1eeb kh\xf3a"})})}),Object(U.jsx)(C.p,{sm:"12",lg:"6",children:Object(U.jsx)(C.d,{color:"primary",style:{width:"100%",marginTop:5},size:"sm",onClick:function(t){e.resetSearch()},children:"L\xe0m m\u1edbi t\xecm ki\u1ebfm"})})]})}),Object(U.jsx)(C.p,{sm:"12",lg:"12",children:Object(U.jsx)(C.d,{outline:!0,color:"primary",style:I.a.floatRight,size:"sm",onClick:function(t){return e.toggleModal("new")},children:"Th\xeam m\u1edbi"})})]})})]}),Object(U.jsx)(O.a,{children:Object(U.jsxs)("table",{ble:!0,className:"table table-hover table-outline mb-0 d-none d-sm-table",children:[Object(U.jsx)("thead",{className:"thead-light",children:Object(U.jsxs)("tr",{children:[Object(U.jsx)("th",{className:"text-center",children:"STT."}),Object(U.jsx)("th",{className:"text-center",children:"T\xean v\u1ecb tr\xed"}),Object(U.jsx)("th",{className:"text-center",children:"H\xecnh \u1ea3nh"}),Object(U.jsx)("th",{className:"text-center",children:"\u0110\u1ecba ch\u1ec9"}),Object(U.jsx)("th",{className:"text-center",children:"T\xean \u0111\u01b0\u1eddng"}),Object(U.jsx)("th",{className:"text-center",children:"Ph\u01b0\u1eddng"}),Object(U.jsx)("th",{className:"text-center",children:"Qu\u1eadn"}),Object(U.jsx)("th",{className:"text-center",children:"Th\xe0nh ph\u1ed1"}),Object(U.jsx)("th",{className:"text-center"})]})}),Object(U.jsxs)("tbody",{children:[Object(U.jsx)("td",{colSpan:"10",hidden:this.state.hidden,className:"text-center",children:"Kh\xf4ng t\xecm th\u1ea5y d\u1eef li\u1ec7u"}),void 0!=a?a.map((function(t,a){return Object(U.jsxs)("tr",{children:[Object(U.jsx)("td",{className:"text-center",children:a+1}),Object(U.jsx)("td",{className:"text-center",children:t.name}),Object(U.jsx)("td",{className:"text-center",children:Object(U.jsx)("img",{src:t.image,width:"90px",height:"70px"})}),Object(U.jsx)("td",{className:"text-center",children:t.address}),Object(U.jsx)("td",{className:"text-center",children:t.street}),Object(U.jsx)("td",{className:"text-center",children:t.ward}),Object(U.jsx)("td",{className:"text-center",children:t.distrist}),Object(U.jsx)("td",{className:"text-center",children:t.ward}),Object(U.jsx)("td",{className:"text-center",children:t.city}),Object(U.jsxs)("td",{className:"text-center",children:[Object(U.jsx)(C.d,{style:I.a.mgl5,outline:!0,color:"primary",size:"sm",onClick:function(){var a=Object(l.a)(c.a.mark((function a(n){return c.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.openUpdate(t);case 2:return a.abrupt("return",a.sent);case 3:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}(),children:Object(U.jsx)(j.a,{name:"cilPencil"})})," ",Object(U.jsx)(C.d,{outline:!0,color:"danger",size:"sm",onClick:function(a){e.openDelete(t)},children:Object(U.jsx)(j.a,{name:"cilTrash"})})]})]},a)})):""]})]})})]}),Object(U.jsx)("div",{style:{float:"right"},children:Object(U.jsx)(k.a,{count:n.length,color:"primary",onChange:function(t,a){e.setState({data:n[a-1],indexPage:a-1})}})})]})}),Object(U.jsxs)(v.a,{isOpen:this.state.modalCom,className:this.props.className,children:[Object(U.jsx)(y.a,{children:"new"==this.state.action?"T\u1ea1o m\u1edbi":"C\u1eadp nh\u1eadt"}),Object(U.jsxs)(w.a,{children:[Object(U.jsx)(N.a,{field:"name",label:"T\xean v\u1ecb tr\xed",value:this.state.name,placeholder:"\u0110\u1ecba ch\u1ec9",onChange:function(t){return e.onChange("name",t.target.value)}}),Object(U.jsx)(N.a,{field:"image",label:"H\u1ec9nh \u0111\u1ea1i di\u1ec7n",type:"file",onChange:function(t){e.onChangeImage(t)},onClick:function(e){e.target.value=null}}),""==this.state.image?"":Object(U.jsx)("img",{width:"250",height:"300",src:this.state.image,style:{marginBottom:20}}),Object(U.jsx)(N.a,{field:"address",label:"S\u1ed1 \u0111\u1ecba ch\u1ec9",value:this.state.address,placeholder:"S\u1ed1 \u0111\u1ecba ch\u1ec9",type:"number",onChange:function(t){return e.onChange("address",t.target.value)}}),Object(U.jsx)(N.a,{field:"street",label:"T\xean \u0111\u01b0\u1eddng",value:this.state.street,placeholder:"T\xean \u0111\u01b0\u1eddng",onChange:function(t){return e.onChange("street",t.target.value)}}),Object(U.jsx)(N.a,{field:"ward",label:"Ph\u01b0\u1eddng",value:this.state.ward,placeholder:"Ph\u01b0\u1eddng",onChange:function(t){return e.onChange("ward",t.target.value)}}),Object(U.jsx)(N.a,{field:"distrist",label:"Qu\u1eadn",value:this.state.distrist,placeholder:"Qu\u1eadn",onChange:function(t){return e.onChange("distrist",t.target.value)}}),Object(U.jsx)(N.a,{field:"city",label:"Th\xe0nh Ph\u1ed1",value:this.state.city,placeholder:"Th\xe0nh Ph\u1ed1",onChange:function(t){return e.onChange("city",t.target.value)}})]}),Object(U.jsxs)(S.a,{children:[Object(U.jsx)(C.d,{color:"primary",onClick:function(t){"new"===e.state.action?e.addLocation():e.updateLocation()},disabled:this.state.isLoading,children:"L\u01b0u"})," ",Object(U.jsx)(C.d,{color:"secondary",onClick:function(t){return e.toggleModal("new")},children:"\u0110\xf3ng"})]})]}),Object(U.jsxs)(v.a,{isOpen:this.state.modalDelete,toggle:function(t){return e.setState({modalDelete:!e.state.modalDelete,delete:null})},className:this.props.className,children:[Object(U.jsx)(y.a,{toggle:function(t){return e.setState({modalDelete:!e.state.modalDelete,delete:null})},children:"Delete"}),Object(U.jsx)(w.a,{children:Object(U.jsx)("label",{htmlFor:"tag",children:"X\xe1c nh\u1eadn x\xf3a !!!"})}),Object(U.jsxs)(S.a,{children:[Object(U.jsx)(C.d,{color:"primary",onClick:function(t){return e.delete()},disabled:this.state.isLoading,children:"Delete"})," ",Object(U.jsx)(C.d,{color:"secondary",onClick:function(t){return e.setState({modalDelete:!e.state.modalDelete,delete:null})},children:"\u0110\xf3ng"})]})]})]})}}]),a}(m.Component),E=Object(A.css)(n||(n=Object(s.a)(["\n  display: block;\n  margin: 0 auto;\n  border-color: red;\n"])));t.default=_},668:function(e,t,a){"use strict";t.a={pagination:{marginRight:"5px"},flexLabel:{width:100},flexOption:{width:300},a:{textDecoration:"none"},floatRight:{float:"right",marginTop:"3px"},spinner:{width:"30px"},center:{textAlign:"center"},tbody:{height:"380px",overflowY:"auto"},wh25:{width:"25%",float:"left",height:"80px"},w5:{width:"15%",float:"left",height:"80px"},wa10:{width:"5%",float:"left",height:"80px"},row:{float:"left",width:"100%"},success:{color:"green"},danger:{color:"red"},mgl5:{marginLeft:"5px"},tags:{float:"right",marginRight:"5px"},searchInput:{width:"190px",display:"inline-block"},userActive:{color:"green"},userPending:{color:"red"},nagemonNameCol:{width:"328px"},image:{width:"100px",height:"100px",borderRadius:"99999px"}}}}]);
//# sourceMappingURL=44.07c01b23.chunk.js.map