<<<<<<< HEAD:build/static/js/82.100b9ac6.chunk.js
(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[82],{1314:function(e,t,a){"use strict";a.r(t);var n,i=a(654),s=a(165),r=a(113),c=a.n(r),l=a(641),o=a(166),d=a(167),h=a(169),u=a(168),p=a(2),m=a(645),j=a(1259),b=a(1260),g=a(1261),O=a(1262),x=a(1263),y=a(1264),f=a(1340),v=a(1267),S=a(1268),k=a(1269),_=a(640),w=a(1336),L=(a(646),a(644)),C=a(652),T=a(643),D=a.n(T),N=a(653),U=a(655),A=a.n(U),E=a(17),P=new Headers,R=localStorage.getItem("auth");P.append("Authorization","Bearer "+R),P.append("Content-Type","application/json");var I=function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(e){var n,i;return Object(o.a)(this,a),(i=t.call(this,e)).getData=Object(l.a)(c.a.mark((function e(){var t,a,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i.setState({isLoading:!0}),e.next=3,D()({baseURL:L.a.BASE_URL,url:L.a.LIST_SUGGEST_ITEM,method:"GET"});case 3:return t=e.sent,e.next=6,D()({baseURL:L.a.BASE_URL,url:L.a.LIST_SDK,method:"GET"});case 6:a=e.sent,n=t.data.data,i.pagination(n),i.setState({dataApi:n,sdkItem:a.data,currentSdkSelect:a.data[0]}),0,i.setState({isLoading:!1,totalActive:0});case 12:case"end":return e.stop()}}),e)}))),i.getDataForCompany=Object(l.a)(c.a.mark((function e(){var t,a,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i.setState({isLoading:!0}),e.next=3,D()({baseURL:L.a.BASE_URL,url:L.a.LIST_SUGGEST_ITEM_COMPANY+JSON.parse(i.state.userData).company_id,method:"GET"});case 3:return t=e.sent,e.next=6,D()({baseURL:L.a.BASE_URL,url:L.a.LIST_SDK,method:"GET"});case 6:a=e.sent,n=t.data.data,console.log(n),i.pagination(n),i.setState({dataApi:n,sdkItem:a.data,currentSdkSelect:a.data[0]}),0,i.setState({isLoading:!1,totalActive:0});case 13:case"end":return e.stop()}}),e)}))),i.getListTypeProduct=Object(l.a)(c.a.mark((function e(){var t,a,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D()({baseURL:L.a.BASE_URL,url:L.a.LIST_TYPE_PRODUCT,method:"POST"});case 2:return t=e.sent,e.next=5,D()({baseURL:L.a.BASE_URL,url:L.a.LIST_TYPE_SDK,method:"POST"});case 5:a=e.sent,n=a.data.data,i.setState({arrOptionProductType:t.data.data,arrOptionSdkType:n});case 8:case"end":return e.stop()}}),e)}))),i.changeSdkType=function(e){e.preventDefault();var t=i.state.sdkItem.find((function(t){return t.name===e.target.value}));t&&i.setState({currentSdkSelect:t,level:t.name,sdktype:"1"})},i.changeLevel=function(e){e.preventDefault(),i.setState({sdktype:e.target.value})},i.openDelete=function(e){i.setState({modalDelete:!i.state.modalDelete,id:e._id})},i.state=(n={data:[],key:"",activePage:1,page:1,itemsCount:0,limit:20,totalActive:0,modalCom:!1,viewingUser:{},communities:[],updated:"",dataApi:[],hidden:!1,action:"new",name:"",image:""},Object(s.a)(n,"key",""),Object(s.a)(n,"title",""),Object(s.a)(n,"description",""),Object(s.a)(n,"linkdetail",""),Object(s.a)(n,"level","K1"),Object(s.a)(n,"sdktype","1"),Object(s.a)(n,"companyid",""),Object(s.a)(n,"type_sdk_id",""),Object(s.a)(n,"type_product_id",""),Object(s.a)(n,"sdkItem",[]),Object(s.a)(n,"currentSdkSelect",[]),Object(s.a)(n,"currentItemSelect",null),Object(s.a)(n,"modalDelete",!1),Object(s.a)(n,"delete",null),Object(s.a)(n,"arrPagination",[]),Object(s.a)(n,"indexPage",0),Object(s.a)(n,"token",{Authorization:"Bearer ".concat(localStorage.getItem("token"))}),Object(s.a)(n,"type",localStorage.getItem("type")),Object(s.a)(n,"userData",localStorage.getItem("user")),Object(s.a)(n,"isLoading",!1),Object(s.a)(n,"arrOptionSdkType",[]),Object(s.a)(n,"arrOptionProductType",[]),n),i}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(l.a)(c.a.mark((function e(){var t,a,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for("0"==(t=this.state.type)||"1"==t?this.getData():this.getDataForCompany(),this.getListTypeProduct(),a=JSON.parse(localStorage.getItem("url")),n=0;n<a.length;n++)a[n].url==window.location.hash&&1==a[n].isHidden&&(window.location.href="#/");case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"pagination",value:function(e){var t,a,n,i=[];for(t=0,a=e.length;t<a;t+=5)n=e.slice(t,t+5),i.push(n);0==i.length?this.setState({hidden:!1}):this.setState({hidden:!0}),this.setState({arrPagination:i,data:i[0]})}},{key:"searchKey",value:function(){var e=this.state,t=e.indexPage,a=e.key;if(""!=a){var n=[];this.state.dataApi.map((function(e){(e.name.toLocaleUpperCase().includes(a.toLocaleUpperCase())||e.type_product_id.Name.toLocaleUpperCase().includes(a.toLocaleUpperCase())||e.type_product_id.Name.toLocaleUpperCase().includes(a.toLocaleUpperCase()))&&n.push(e)}));var i=0;n.map((function(e){"Actived"==e.Status&&(i+=1)})),this.setState({data:n,totalActive:i})}else{var s=0;this.state.dataApi.map((function(e){"Actived"==e.Status&&(s+=1)})),this.setState({data:this.state.arrPagination[t],totalActive:s})}}},{key:"actionSearch",value:function(e,t){var a=this;this.setState(Object(s.a)({},t,e.target.value),(function(){a.searchKey()}))}},{key:"resetSearch",value:function(){var e=this;this.setState({key:""},(function(){e.searchKey()}))}},{key:"toggleModal",value:function(){var e=Object(l.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:"new"==t&&this.setState({modalCom:!this.state.modalCom,action:t,name:"",image:"",title:"",description:"",linkdetail:"",level:"K1",sdktype:"1",type_sdk_id:0==this.state.arrOptionSdkType.length?"":this.state.arrOptionSdkType[0]._id,type_product_id:0==this.state.arrOptionProductType.length?"":this.state.arrOptionProductType[0]._id,companyid:"0"==this.state.type||"1"==this.state.type?"":JSON.parse(this.state.userData).company_id});case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"onChange",value:function(e,t){this.setState(Object(s.a)({},e,t))}},{key:"addRoles",value:function(){var e=Object(l.a)(c.a.mark((function e(){var t,a,n,i,s,r,l,o,d,h,u;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.state,a=t.name,n=t.image,i=t.title,s=t.description,r=t.linkdetail,l=t.level,o=t.sdktype,d=t.type_sdk_id,h=t.type_product_id,null!=a&&""!=a&&null!=n&&""!=n&&null!=i&&""!=i&&null!=r&&""!=r){e.next=4;break}return alert("Vui lòng nhập đầy đủ trường dữ liệu !!!"),e.abrupt("return");case 4:return u={name:a,image:n,title:i,description:s,linkdetail:r,level:l,sdktype:o,companyid:"0"==this.state.type||"1"==this.state.type?"":JSON.parse(this.state.userData).company_id,type_sdk_id:d,type_product_id:h},this.setState({isLoading:!0}),e.next=8,D()({baseURL:L.a.BASE_URL,url:L.a.ADD_SUGGEST_ITEM,method:"POST",data:u});case 8:200==e.sent.status?("0"==this.state.type||"1"==this.state.type?this.getData():this.getDataForCompany(),this.setState({modalCom:!this.state.modalCom})):(alert("Th\xeam s\u1ea3n ph\u1ea9m g\u1ee3i \xfd th\u1ea5t b\u1ea1i"),this.setState({isLoading:!1}));case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"openUpdate",value:function(){var e=Object(l.a)(c.a.mark((function e(t){var a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.setState((a={modalCom:!this.state.modalCom,action:"update",name:t.name,image:t.image,title:t.title,description:t.description,linkdetail:t.linkdetail,level:t.level,sdktype:t.sdktype,type_product_id:t.type_product_id._id,type_sdk_id:t.type_sdk_id._id},Object(s.a)(a,"sdktype",t.sdktype),Object(s.a)(a,"companyid",t.companyid),Object(s.a)(a,"id",t._id),Object(s.a)(a,"Status",t.Status),a));case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"updateUser",value:function(){var e=Object(l.a)(c.a.mark((function e(){var t,a,n,i,s,r,l,o,d,h,u;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.state,a=t.name,n=t.image,i=t.title,s=t.description,r=t.linkdetail,l=t.level,o=t.sdktype,d=t.type_sdk_id,h=t.type_product_id,null!=a&&""!=a&&null!=n&&""!=n&&null!=i&&""!=i&&null!=r&&""!=r){e.next=4;break}return alert("Vui lòng nhập đầy đủ trường dữ liệu !!!"),e.abrupt("return");case 4:return u={name:a,image:n,title:i,description:s,linkdetail:r,level:l,sdktype:o,type_sdk_id:d,type_product_id:h,companyid:"0"==this.state.type||"1"==this.state.type?"":JSON.parse(this.state.userData).company_id},this.setState({isLoading:!0}),e.next=8,D()({baseURL:L.a.BASE_URL,url:L.a.UPDATE_SUGGEST_ITEM+this.state.id,method:"PUT",data:u});case 8:200==e.sent.status?("0"==this.state.type||"1"==this.state.type?this.getData():this.getDataForCompany(),this.setState({modalCom:!this.state.modalCom})):(alert("C\u1eadp nh\u1eadt th\u1ea5t b\u1ea1i"),this.setState({isLoading:!1}));case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"delete",value:function(){var e=Object(l.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({isLoading:!0}),e.next=3,D()({baseURL:L.a.BASE_URL,url:L.a.DELETE_SUGGEST_ITEM,method:"POST",data:{id:this.state.id}});case 3:200==e.sent.status?("0"==this.state.type||"1"==this.state.type?this.getData():this.getDataForCompany(),this.setState({modalDelete:!this.state.modalDelete,delete:null})):(alert("X\xf3a s\u1ea3n ph\u1ea9m th\u1ea5t b\u1ea1i"),this.setState({isLoading:!1}));case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"inputChange",value:function(e){this.setState(Object(s.a)({},e.target.name,e.target.value))}},{key:"getBadge",value:function(e){switch(e){case"Actived":return"success";case"Inactive":return"secondary";case"Locked":return"warning";case"Deactived":return"danger";default:return"primary"}}},{key:"onChangeImage",value:function(e){var t=this,a=e.target.files,n=new FileReader;n.readAsDataURL(a[0]),n.onload=function(e){t.setState({image:e.target.result})}}},{key:"render",value:function(){var e=this,t=this.state,a=t.data,n=t.arrPagination,i=t.arrOptionProductType,s=t.arrOptionSdkType,r=t.key;return this.state.isLoading?Object(E.jsx)("div",{className:"sweet-loading",children:Object(E.jsx)(A.a,{css:M,size:50,color:"#123abc",loading:this.state.isLoading,speedMultiplier:1.5})}):Object(E.jsxs)("div",{className:"animated fadeIn",children:[Object(E.jsx)(j.a,{children:Object(E.jsxs)(b.a,{children:[Object(E.jsxs)(g.a,{children:[Object(E.jsxs)(O.a,{children:[Object(E.jsx)("i",{className:"fa fa-align-justify"})," Danh s\xe1ch s\u1ea3n ph\u1ea9m da m\u1eb7t",Object(E.jsx)("div",{style:B.tags,children:Object(E.jsxs)(_.W,{children:[Object(E.jsx)(_.p,{sm:"12",lg:"12",children:Object(E.jsxs)(_.W,{children:[Object(E.jsx)(_.p,{sm:"12",lg:"6",children:Object(E.jsx)("div",{children:Object(E.jsx)(x.a,{style:B.searchInput,onChange:function(t){e.actionSearch(t,"key")},name:"key",value:r,placeholder:"T\u1eeb kh\xf3a"})})}),Object(E.jsx)(_.p,{sm:"12",lg:"6",children:Object(E.jsx)(_.d,{color:"primary",style:{width:"100%",marginTop:5},size:"sm",onClick:function(t){e.resetSearch()},children:"L\xe0m m\u1edbi t\xecm ki\u1ebfm"})})]})}),Object(E.jsx)(_.p,{sm:"12",lg:"12",children:Object(E.jsx)(_.d,{outline:!0,color:"primary",style:B.floatRight,size:"sm",onClick:function(t){return e.toggleModal("new")},children:"Th\xeam m\u1edbi"})})]})})]}),Object(E.jsx)(y.a,{children:Object(E.jsxs)("table",{ble:!0,className:"table table-hover table-outline mb-0 d-none d-sm-table",children:[Object(E.jsx)("thead",{className:"thead-light",children:Object(E.jsxs)("tr",{children:[Object(E.jsx)("th",{className:"text-center",children:"STT."}),Object(E.jsx)("th",{className:"text-center",children:"T\xean s\u1ea3n ph\u1ea9m"}),Object(E.jsx)("th",{className:"text-center",children:"\u1ea2nh minh h\u1ecda"}),Object(E.jsx)("th",{className:"text-center",children:"Ti\u1ec1u \u0111\u1ec1"}),Object(E.jsx)("th",{className:"text-center",children:"M\xf4 t\u1ea3"}),Object(E.jsx)("th",{className:"text-center",children:"Chi ti\u1ebft"}),Object(E.jsx)("th",{className:"text-center",children:"Lo\u1ea1i s\u1ea3n ph\u1ea9m"}),Object(E.jsx)("th",{className:"text-center",children:"Lo\u1ea1i SDK"}),Object(E.jsx)("th",{className:"text-center",children:"#"})]})}),Object(E.jsxs)("tbody",{children:[Object(E.jsx)("td",{colSpan:"10",hidden:this.state.hidden,className:"text-center",children:"Kh\xf4ng t\xecm th\u1ea5y d\u1eef li\u1ec7u"}),void 0!=a?a.map((function(t,a){return Object(E.jsxs)("tr",{children:[Object(E.jsx)("td",{className:"text-center",children:a+1}),Object(E.jsx)("td",{className:"text-center",children:t.name}),Object(E.jsx)("td",{className:"text-center",children:Object(E.jsx)("img",{src:t.image||e.state.BASE_URL+"/images/calendar.png",width:"60px",height:"60px"})}),Object(E.jsx)("td",{className:"text-center",children:t.title.substr(0,100)+(t.title.length>100?"...":"")}),Object(E.jsx)("td",{className:"text-center",children:t.description}),Object(E.jsx)("td",{className:"text-center",children:t.linkdetail}),Object(E.jsx)("td",{className:"text-center",children:t.type_product_id.Name}),Object(E.jsx)("td",{className:"text-center",children:t.type_sdk_id.Name}),Object(E.jsxs)("td",{className:"text-center",children:[Object(E.jsx)(_.d,{style:B.mgl5,outline:!0,color:"primary",size:"sm",onClick:function(){var a=Object(l.a)(c.a.mark((function a(n){return c.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.openUpdate(t);case 2:return a.abrupt("return",a.sent);case 3:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}(),children:Object(E.jsx)(m.a,{name:"cilPencil"})})," ",Object(E.jsx)(_.d,{outline:!0,color:"danger",size:"sm",onClick:function(a){e.openDelete(t)},children:Object(E.jsx)(m.a,{name:"cilTrash"})})]})]},a)})):""]})]})})]}),Object(E.jsx)("div",{style:{float:"right"},children:Object(E.jsx)(w.a,{count:n.length,color:"primary",onChange:function(t,a){e.setState({data:n[a-1],indexPage:a-1})}})})]})}),Object(E.jsxs)(f.a,{isOpen:this.state.modalCom,className:this.props.className,children:[Object(E.jsx)(v.a,{children:"new"==this.state.action?"T\u1ea1o m\u1edbi":"C\u1eadp nh\u1eadt"}),Object(E.jsxs)(S.a,{children:[Object(E.jsx)(C.a,{field:"name",label:"T\xean s\u1ea3n ph\u1ea9m",value:this.state.name,placeholder:"T\xean s\u1ea3n ph\u1ea9m",onChange:function(t){return e.onChange("name",t.target.value)}}),Object(E.jsx)(C.a,{field:"image",label:"\u1ea2nh th\u01b0\u01a1ng hi\u1ec7u",type:"file",onChange:function(t){e.onChangeImage(t)},onClick:function(e){e.target.value=null}}),""==this.state.image?"":Object(E.jsx)("img",{width:"250",height:"300",src:this.state.image,style:{marginBottom:20}}),Object(E.jsx)(C.a,{field:"title",label:"Ti\xeau \u0111\u1ec1",value:this.state.title,placeholder:"Ti\xeau \u0111\u1ec1",onChange:function(t){return e.onChange("title",t.target.value)}}),Object(E.jsx)("label",{className:"control-label",children:"M\xf4 t\u1ea3"}),Object(E.jsx)(_.gb,{name:"description",rows:"7",value:this.state.description,onChange:function(t){e.setState({description:t.target.value})},placeholder:"M\xf4 t\u1ea3"}),Object(E.jsx)(C.a,{field:"linkdetail",label:"Chi ti\u1ebft",value:this.state.linkdetail,placeholder:"Chi ti\u1ebft",onChange:function(t){return e.onChange("linkdetail",t.target.value)}}),Object(E.jsx)(_.M,{children:"Lo\u1ea1i SDK:"}),Object(E.jsx)("div",{style:{width:"100%"},children:Object(E.jsx)(_.X,{onChange:function(){var t=Object(l.a)(c.a.mark((function t(a){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.setState({type_sdk_id:a.target.value});case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),custom:!0,size:"sm",name:"selectSm",id:"SelectLm",children:s.map((function(t,a){return t._id==e.state.type_sdk_id?Object(E.jsx)("option",{selected:!0,value:t._id,children:t.Name},a):Object(E.jsx)("option",{value:t._id,children:t.Name},a)}))})}),Object(E.jsx)(_.M,{children:"Lo\u1ea1i s\u1ea3n ph\u1ea9m:"}),Object(E.jsx)("div",{style:{width:"100%"},children:Object(E.jsx)(_.X,{onChange:function(){var t=Object(l.a)(c.a.mark((function t(a){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.setState({type_product_id:a.target.value});case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),custom:!0,size:"sm",name:"selectSm",id:"SelectLm",children:i.map((function(t,a){return t._id==e.state.type_product_id?Object(E.jsx)("option",{selected:!0,value:t._id,children:t.Name},a):Object(E.jsx)("option",{value:t._id,children:t.Name},a)}))})})]}),Object(E.jsxs)(k.a,{children:[Object(E.jsx)(_.d,{color:"primary",onClick:function(t){"new"===e.state.action?e.addRoles():e.updateUser()},disabled:this.state.isLoading,children:"Save"})," ",Object(E.jsx)(_.d,{color:"secondary",onClick:function(t){return e.toggleModal("new")},children:"Cancel"})]})]}),Object(E.jsxs)(f.a,{isOpen:this.state.modalDelete,toggle:function(t){return e.setState({modalDelete:!e.state.modalDelete,delete:null})},className:this.props.className,children:[Object(E.jsx)(v.a,{toggle:function(t){return e.setState({modalDelete:!e.state.modalDelete,delete:null})},children:"Delete"}),Object(E.jsx)(S.a,{children:Object(E.jsx)("label",{htmlFor:"tag",children:"X\xe1c nh\u1eadn x\xf3a !!!"})}),Object(E.jsxs)(k.a,{children:[Object(E.jsx)(_.d,{color:"primary",onClick:function(t){return e.delete()},disabled:this.state.isLoading,children:"Delete"})," ",Object(E.jsx)(_.d,{color:"secondary",onClick:function(t){return e.setState({modalDelete:!e.state.modalDelete,delete:null})},children:"Cancel"})]})]})]})}}]),a}(p.Component),M=Object(N.css)(n||(n=Object(i.a)(["\n  display: block;\n  margin: 0 auto;\n  border-color: red;\n"]))),B={pagination:{marginRight:"5px"},flexLabel:{width:100},flexOption:{width:300},a:{textDecoration:"none"},floatRight:{float:"right",marginTop:"3px"},spinner:{width:"30px"},center:{textAlign:"center"},tbody:{height:"380px",overflowY:"auto"},wh25:{width:"25%",float:"left",height:"80px"},w5:{width:"15%",float:"left",height:"80px"},wa10:{width:"5%",float:"left",height:"80px"},row:{float:"left",width:"100%"},success:{color:"green"},danger:{color:"red"},mgl5:{margin:"2px"},tags:{float:"right",marginRight:"5px"},searchInput:{width:"190px",display:"inline-block"},userActive:{color:"green"},userPending:{color:"red"},nagemonNameCol:{width:"328px"},image:{width:"100px",height:"100px",borderRadius:"99999px"}};t.default=I}}]);
//# sourceMappingURL=82.100b9ac6.chunk.js.map
=======
(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[82],{1314:function(e,t,a){"use strict";a.r(t);var n,i=a(654),s=a(165),r=a(113),c=a.n(r),l=a(641),o=a(166),d=a(167),h=a(169),u=a(168),p=a(2),m=a(646),j=a(1259),b=a(1260),g=a(1261),O=a(1262),x=a(1263),y=a(1264),f=a(1340),v=a(1267),S=a(1268),k=a(1269),_=a(640),w=a(1336),L=(a(645),a(644)),C=a(652),T=a(643),D=a.n(T),N=a(653),U=a(655),A=a.n(U),E=a(17),P=new Headers,R=localStorage.getItem("auth");P.append("Authorization","Bearer "+R),P.append("Content-Type","application/json");var I=function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(e){var n,i;return Object(o.a)(this,a),(i=t.call(this,e)).getData=Object(l.a)(c.a.mark((function e(){var t,a,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i.setState({isLoading:!0}),e.next=3,D()({baseURL:L.a.BASE_URL,url:L.a.LIST_SUGGEST_ITEM,method:"GET"});case 3:return t=e.sent,e.next=6,D()({baseURL:L.a.BASE_URL,url:L.a.LIST_SDK,method:"GET"});case 6:a=e.sent,n=t.data.data,i.pagination(n),i.setState({dataApi:n,sdkItem:a.data,currentSdkSelect:a.data[0]}),0,i.setState({isLoading:!1,totalActive:0});case 12:case"end":return e.stop()}}),e)}))),i.getDataForCompany=Object(l.a)(c.a.mark((function e(){var t,a,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i.setState({isLoading:!0}),e.next=3,D()({baseURL:L.a.BASE_URL,url:L.a.LIST_SUGGEST_ITEM_COMPANY+JSON.parse(i.state.userData).company_id,method:"GET"});case 3:return t=e.sent,e.next=6,D()({baseURL:L.a.BASE_URL,url:L.a.LIST_SDK,method:"GET"});case 6:a=e.sent,n=t.data.data,console.log(n),i.pagination(n),i.setState({dataApi:n,sdkItem:a.data,currentSdkSelect:a.data[0]}),0,i.setState({isLoading:!1,totalActive:0});case 13:case"end":return e.stop()}}),e)}))),i.getListTypeProduct=Object(l.a)(c.a.mark((function e(){var t,a,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D()({baseURL:L.a.BASE_URL,url:L.a.LIST_TYPE_PRODUCT,method:"POST"});case 2:return t=e.sent,e.next=5,D()({baseURL:L.a.BASE_URL,url:L.a.LIST_TYPE_SDK,method:"POST"});case 5:a=e.sent,n=a.data.data,i.setState({arrOptionProductType:t.data.data,arrOptionSdkType:n});case 8:case"end":return e.stop()}}),e)}))),i.changeSdkType=function(e){e.preventDefault();var t=i.state.sdkItem.find((function(t){return t.name===e.target.value}));t&&i.setState({currentSdkSelect:t,level:t.name,sdktype:"1"})},i.changeLevel=function(e){e.preventDefault(),i.setState({sdktype:e.target.value})},i.openDelete=function(e){i.setState({modalDelete:!i.state.modalDelete,id:e._id})},i.state=(n={data:[],key:"",activePage:1,page:1,itemsCount:0,limit:20,totalActive:0,modalCom:!1,viewingUser:{},communities:[],updated:"",dataApi:[],hidden:!1,action:"new",name:"",image:""},Object(s.a)(n,"key",""),Object(s.a)(n,"title",""),Object(s.a)(n,"description",""),Object(s.a)(n,"linkdetail",""),Object(s.a)(n,"level","K1"),Object(s.a)(n,"sdktype","1"),Object(s.a)(n,"companyid",""),Object(s.a)(n,"type_sdk_id",""),Object(s.a)(n,"type_product_id",""),Object(s.a)(n,"sdkItem",[]),Object(s.a)(n,"currentSdkSelect",[]),Object(s.a)(n,"currentItemSelect",null),Object(s.a)(n,"modalDelete",!1),Object(s.a)(n,"delete",null),Object(s.a)(n,"arrPagination",[]),Object(s.a)(n,"indexPage",0),Object(s.a)(n,"token",{Authorization:"Bearer ".concat(localStorage.getItem("token"))}),Object(s.a)(n,"type",localStorage.getItem("type")),Object(s.a)(n,"userData",localStorage.getItem("user")),Object(s.a)(n,"isLoading",!1),Object(s.a)(n,"arrOptionSdkType",[]),Object(s.a)(n,"arrOptionProductType",[]),n),i}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(l.a)(c.a.mark((function e(){var t,a,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for("0"==(t=this.state.type)||"1"==t?this.getData():this.getDataForCompany(),this.getListTypeProduct(),a=JSON.parse(localStorage.getItem("url")),n=0;n<a.length;n++)a[n].url==window.location.hash&&1==a[n].isHidden&&(window.location.href="#/");case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"pagination",value:function(e){var t,a,n,i=[];for(t=0,a=e.length;t<a;t+=5)n=e.slice(t,t+5),i.push(n);0==i.length?this.setState({hidden:!1}):this.setState({hidden:!0}),this.setState({arrPagination:i,data:i[0]})}},{key:"searchKey",value:function(){var e=this.state,t=e.indexPage,a=e.key;if(""!=a){var n=[];this.state.dataApi.map((function(e){(e.name.toLocaleUpperCase().includes(a.toLocaleUpperCase())||e.type_product_id.Name.toLocaleUpperCase().includes(a.toLocaleUpperCase())||e.type_product_id.Name.toLocaleUpperCase().includes(a.toLocaleUpperCase()))&&n.push(e)}));var i=0;n.map((function(e){"Actived"==e.Status&&(i+=1)})),this.setState({data:n,totalActive:i})}else{var s=0;this.state.dataApi.map((function(e){"Actived"==e.Status&&(s+=1)})),this.setState({data:this.state.arrPagination[t],totalActive:s})}}},{key:"actionSearch",value:function(e,t){var a=this;this.setState(Object(s.a)({},t,e.target.value),(function(){a.searchKey()}))}},{key:"resetSearch",value:function(){var e=this;this.setState({key:""},(function(){e.searchKey()}))}},{key:"toggleModal",value:function(){var e=Object(l.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:"new"==t&&this.setState({modalCom:!this.state.modalCom,action:t,name:"",image:"",title:"",description:"",linkdetail:"",level:"K1",sdktype:"1",type_sdk_id:0==this.state.arrOptionSdkType.length?"":this.state.arrOptionSdkType[0]._id,type_product_id:0==this.state.arrOptionProductType.length?"":this.state.arrOptionProductType[0]._id,companyid:"0"==this.state.type||"1"==this.state.type?"":JSON.parse(this.state.userData).company_id});case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"onChange",value:function(e,t){this.setState(Object(s.a)({},e,t))}},{key:"addRoles",value:function(){var e=Object(l.a)(c.a.mark((function e(){var t,a,n,i,s,r,l,o,d,h,u;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.state,a=t.name,n=t.image,i=t.title,s=t.description,r=t.linkdetail,l=t.level,o=t.sdktype,d=t.type_sdk_id,h=t.type_product_id,null!=a&&""!=a&&null!=n&&""!=n&&null!=i&&""!=i&&null!=r&&""!=r){e.next=4;break}return alert("Please fill in all the requirements"),e.abrupt("return");case 4:return u={name:a,image:n,title:i,description:s,linkdetail:r,level:l,sdktype:o,companyid:"0"==this.state.type||"1"==this.state.type?"":JSON.parse(this.state.userData).company_id,type_sdk_id:d,type_product_id:h},this.setState({isLoading:!0}),e.next=8,D()({baseURL:L.a.BASE_URL,url:L.a.ADD_SUGGEST_ITEM,method:"POST",data:u});case 8:200==e.sent.status?("0"==this.state.type||"1"==this.state.type?this.getData():this.getDataForCompany(),this.setState({modalCom:!this.state.modalCom})):(alert("Th\xeam s\u1ea3n ph\u1ea9m g\u1ee3i \xfd th\u1ea5t b\u1ea1i"),this.setState({isLoading:!1}));case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"openUpdate",value:function(){var e=Object(l.a)(c.a.mark((function e(t){var a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.setState((a={modalCom:!this.state.modalCom,action:"update",name:t.name,image:t.image,title:t.title,description:t.description,linkdetail:t.linkdetail,level:t.level,sdktype:t.sdktype,type_product_id:t.type_product_id._id,type_sdk_id:t.type_sdk_id._id},Object(s.a)(a,"sdktype",t.sdktype),Object(s.a)(a,"companyid",t.companyid),Object(s.a)(a,"id",t._id),Object(s.a)(a,"Status",t.Status),a));case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"updateUser",value:function(){var e=Object(l.a)(c.a.mark((function e(){var t,a,n,i,s,r,l,o,d,h,u;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.state,a=t.name,n=t.image,i=t.title,s=t.description,r=t.linkdetail,l=t.level,o=t.sdktype,d=t.type_sdk_id,h=t.type_product_id,null!=a&&""!=a&&null!=n&&""!=n&&null!=i&&""!=i&&null!=r&&""!=r){e.next=4;break}return alert("Please fill in all the requirements"),e.abrupt("return");case 4:return u={name:a,image:n,title:i,description:s,linkdetail:r,level:l,sdktype:o,type_sdk_id:d,type_product_id:h,companyid:"0"==this.state.type||"1"==this.state.type?"":JSON.parse(this.state.userData).company_id},this.setState({isLoading:!0}),e.next=8,D()({baseURL:L.a.BASE_URL,url:L.a.UPDATE_SUGGEST_ITEM+this.state.id,method:"PUT",data:u});case 8:200==e.sent.status?("0"==this.state.type||"1"==this.state.type?this.getData():this.getDataForCompany(),this.setState({modalCom:!this.state.modalCom})):(alert("C\u1eadp nh\u1eadt th\u1ea5t b\u1ea1i"),this.setState({isLoading:!1}));case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"delete",value:function(){var e=Object(l.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({isLoading:!0}),e.next=3,D()({baseURL:L.a.BASE_URL,url:L.a.DELETE_SUGGEST_ITEM,method:"POST",data:{id:this.state.id}});case 3:200==e.sent.status?("0"==this.state.type||"1"==this.state.type?this.getData():this.getDataForCompany(),this.setState({modalDelete:!this.state.modalDelete,delete:null})):(alert("X\xf3a s\u1ea3n ph\u1ea9m th\u1ea5t b\u1ea1i"),this.setState({isLoading:!1}));case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"inputChange",value:function(e){this.setState(Object(s.a)({},e.target.name,e.target.value))}},{key:"getBadge",value:function(e){switch(e){case"Actived":return"success";case"Inactive":return"secondary";case"Locked":return"warning";case"Deactived":return"danger";default:return"primary"}}},{key:"onChangeImage",value:function(e){var t=this,a=e.target.files,n=new FileReader;n.readAsDataURL(a[0]),n.onload=function(e){t.setState({image:e.target.result})}}},{key:"render",value:function(){var e=this,t=this.state,a=t.data,n=t.arrPagination,i=t.arrOptionProductType,s=t.arrOptionSdkType,r=t.key;return this.state.isLoading?Object(E.jsx)("div",{className:"sweet-loading",children:Object(E.jsx)(A.a,{css:M,size:50,color:"#123abc",loading:this.state.isLoading,speedMultiplier:1.5})}):Object(E.jsxs)("div",{className:"animated fadeIn",children:[Object(E.jsx)(j.a,{children:Object(E.jsxs)(b.a,{children:[Object(E.jsxs)(g.a,{children:[Object(E.jsxs)(O.a,{children:[Object(E.jsx)("i",{className:"fa fa-align-justify"})," Danh s\xe1ch s\u1ea3n ph\u1ea9m da m\u1eb7t",Object(E.jsx)("div",{style:B.tags,children:Object(E.jsxs)(_.W,{children:[Object(E.jsx)(_.p,{sm:"12",lg:"12",children:Object(E.jsxs)(_.W,{children:[Object(E.jsx)(_.p,{sm:"12",lg:"6",children:Object(E.jsx)("div",{children:Object(E.jsx)(x.a,{style:B.searchInput,onChange:function(t){e.actionSearch(t,"key")},name:"key",value:r,placeholder:"T\u1eeb kh\xf3a"})})}),Object(E.jsx)(_.p,{sm:"12",lg:"6",children:Object(E.jsx)(_.d,{color:"primary",style:{width:"100%",marginTop:5},size:"sm",onClick:function(t){e.resetSearch()},children:"L\xe0m m\u1edbi t\xecm ki\u1ebfm"})})]})}),Object(E.jsx)(_.p,{sm:"12",lg:"12",children:Object(E.jsx)(_.d,{outline:!0,color:"primary",style:B.floatRight,size:"sm",onClick:function(t){return e.toggleModal("new")},children:"Th\xeam m\u1edbi"})})]})})]}),Object(E.jsx)(y.a,{children:Object(E.jsxs)("table",{ble:!0,className:"table table-hover table-outline mb-0 d-none d-sm-table",children:[Object(E.jsx)("thead",{className:"thead-light",children:Object(E.jsxs)("tr",{children:[Object(E.jsx)("th",{className:"text-center",children:"STT."}),Object(E.jsx)("th",{className:"text-center",children:"T\xean s\u1ea3n ph\u1ea9m"}),Object(E.jsx)("th",{className:"text-center",children:"\u1ea2nh minh h\u1ecda"}),Object(E.jsx)("th",{className:"text-center",children:"Ti\u1ec1u \u0111\u1ec1"}),Object(E.jsx)("th",{className:"text-center",children:"M\xf4 t\u1ea3"}),Object(E.jsx)("th",{className:"text-center",children:"Chi ti\u1ebft"}),Object(E.jsx)("th",{className:"text-center",children:"Lo\u1ea1i s\u1ea3n ph\u1ea9m"}),Object(E.jsx)("th",{className:"text-center",children:"Lo\u1ea1i SDK"}),Object(E.jsx)("th",{className:"text-center",children:"#"})]})}),Object(E.jsxs)("tbody",{children:[Object(E.jsx)("td",{colSpan:"10",hidden:this.state.hidden,className:"text-center",children:"Kh\xf4ng t\xecm th\u1ea5y d\u1eef li\u1ec7u"}),void 0!=a?a.map((function(t,a){return Object(E.jsxs)("tr",{children:[Object(E.jsx)("td",{className:"text-center",children:a+1}),Object(E.jsx)("td",{className:"text-center",children:t.name}),Object(E.jsx)("td",{className:"text-center",children:Object(E.jsx)("img",{src:t.image||e.state.BASE_URL+"/images/calendar.png",width:"60px",height:"60px"})}),Object(E.jsx)("td",{className:"text-center",children:t.title.substr(0,100)+(t.title.length>100?"...":"")}),Object(E.jsx)("td",{className:"text-center",children:t.description}),Object(E.jsx)("td",{className:"text-center",children:t.linkdetail}),Object(E.jsx)("td",{className:"text-center",children:t.type_product_id.Name}),Object(E.jsx)("td",{className:"text-center",children:t.type_sdk_id.Name}),Object(E.jsxs)("td",{className:"text-center",children:[Object(E.jsx)(_.d,{style:B.mgl5,outline:!0,color:"primary",size:"sm",onClick:function(){var a=Object(l.a)(c.a.mark((function a(n){return c.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.openUpdate(t);case 2:return a.abrupt("return",a.sent);case 3:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}(),children:Object(E.jsx)(m.a,{name:"cilPencil"})})," ",Object(E.jsx)(_.d,{outline:!0,color:"danger",size:"sm",onClick:function(a){e.openDelete(t)},children:Object(E.jsx)(m.a,{name:"cilTrash"})})]})]},a)})):""]})]})})]}),Object(E.jsx)("div",{style:{float:"right"},children:Object(E.jsx)(w.a,{count:n.length,color:"primary",onChange:function(t,a){e.setState({data:n[a-1],indexPage:a-1})}})})]})}),Object(E.jsxs)(f.a,{isOpen:this.state.modalCom,className:this.props.className,children:[Object(E.jsx)(v.a,{children:"new"==this.state.action?"T\u1ea1o m\u1edbi":"C\u1eadp nh\u1eadt"}),Object(E.jsxs)(S.a,{children:[Object(E.jsx)(C.a,{field:"name",label:"T\xean s\u1ea3n ph\u1ea9m",value:this.state.name,placeholder:"T\xean s\u1ea3n ph\u1ea9m",onChange:function(t){return e.onChange("name",t.target.value)}}),Object(E.jsx)(C.a,{field:"image",label:"\u1ea2nh th\u01b0\u01a1ng hi\u1ec7u",type:"file",onChange:function(t){e.onChangeImage(t)},onClick:function(e){e.target.value=null}}),""==this.state.image?"":Object(E.jsx)("img",{width:"250",height:"300",src:this.state.image,style:{marginBottom:20}}),Object(E.jsx)(C.a,{field:"title",label:"Ti\xeau \u0111\u1ec1",value:this.state.title,placeholder:"Ti\xeau \u0111\u1ec1",onChange:function(t){return e.onChange("title",t.target.value)}}),Object(E.jsx)("label",{className:"control-label",children:"M\xf4 t\u1ea3"}),Object(E.jsx)(_.gb,{name:"description",rows:"7",value:this.state.description,onChange:function(t){e.setState({description:t.target.value})},placeholder:"M\xf4 t\u1ea3"}),Object(E.jsx)(C.a,{field:"linkdetail",label:"Chi ti\u1ebft",value:this.state.linkdetail,placeholder:"Chi ti\u1ebft",onChange:function(t){return e.onChange("linkdetail",t.target.value)}}),Object(E.jsx)(_.M,{children:"Lo\u1ea1i SDK:"}),Object(E.jsx)("div",{style:{width:"100%"},children:Object(E.jsx)(_.X,{onChange:function(){var t=Object(l.a)(c.a.mark((function t(a){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.setState({type_sdk_id:a.target.value});case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),custom:!0,size:"sm",name:"selectSm",id:"SelectLm",children:s.map((function(t,a){return t._id==e.state.type_sdk_id?Object(E.jsx)("option",{selected:!0,value:t._id,children:t.Name},a):Object(E.jsx)("option",{value:t._id,children:t.Name},a)}))})}),Object(E.jsx)(_.M,{children:"Lo\u1ea1i s\u1ea3n ph\u1ea9m:"}),Object(E.jsx)("div",{style:{width:"100%"},children:Object(E.jsx)(_.X,{onChange:function(){var t=Object(l.a)(c.a.mark((function t(a){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.setState({type_product_id:a.target.value});case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),custom:!0,size:"sm",name:"selectSm",id:"SelectLm",children:i.map((function(t,a){return t._id==e.state.type_product_id?Object(E.jsx)("option",{selected:!0,value:t._id,children:t.Name},a):Object(E.jsx)("option",{value:t._id,children:t.Name},a)}))})})]}),Object(E.jsxs)(k.a,{children:[Object(E.jsx)(_.d,{color:"primary",onClick:function(t){"new"===e.state.action?e.addRoles():e.updateUser()},disabled:this.state.isLoading,children:"Save"})," ",Object(E.jsx)(_.d,{color:"secondary",onClick:function(t){return e.toggleModal("new")},children:"Cancel"})]})]}),Object(E.jsxs)(f.a,{isOpen:this.state.modalDelete,toggle:function(t){return e.setState({modalDelete:!e.state.modalDelete,delete:null})},className:this.props.className,children:[Object(E.jsx)(v.a,{toggle:function(t){return e.setState({modalDelete:!e.state.modalDelete,delete:null})},children:"Delete"}),Object(E.jsx)(S.a,{children:Object(E.jsx)("label",{htmlFor:"tag",children:"X\xe1c nh\u1eadn x\xf3a !!!"})}),Object(E.jsxs)(k.a,{children:[Object(E.jsx)(_.d,{color:"primary",onClick:function(t){return e.delete()},disabled:this.state.isLoading,children:"Delete"})," ",Object(E.jsx)(_.d,{color:"secondary",onClick:function(t){return e.setState({modalDelete:!e.state.modalDelete,delete:null})},children:"Cancel"})]})]})]})}}]),a}(p.Component),M=Object(N.css)(n||(n=Object(i.a)(["\n  display: block;\n  margin: 0 auto;\n  border-color: red;\n"]))),B={pagination:{marginRight:"5px"},flexLabel:{width:100},flexOption:{width:300},a:{textDecoration:"none"},floatRight:{float:"right",marginTop:"3px"},spinner:{width:"30px"},center:{textAlign:"center"},tbody:{height:"380px",overflowY:"auto"},wh25:{width:"25%",float:"left",height:"80px"},w5:{width:"15%",float:"left",height:"80px"},wa10:{width:"5%",float:"left",height:"80px"},row:{float:"left",width:"100%"},success:{color:"green"},danger:{color:"red"},mgl5:{margin:"2px"},tags:{float:"right",marginRight:"5px"},searchInput:{width:"190px",display:"inline-block"},userActive:{color:"green"},userPending:{color:"red"},nagemonNameCol:{width:"328px"},image:{width:"100px",height:"100px",borderRadius:"99999px"}};t.default=I}}]);
//# sourceMappingURL=82.4c9ad539.chunk.js.map
>>>>>>> 572f03dd0d699b5cbe95000e46f393057d9e71d9:build/static/js/82.4c9ad539.chunk.js
