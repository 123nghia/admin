(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[42],{1316:function(e,t,a){"use strict";a.r(t);var n,r=a(654),s=a(165),c=a(113),i=a.n(c),o=a(641),l=a(166),d=a(167),h=a(169),u=a(168),p=a(2),m=a(645),j=a(1267),b=a(1268),x=a(1263),g=a(1269),f=a(1259),O=a(1260),v=a(1261),y=a(1262),C=a(1264),_=a(1340),k=a(640),S=a(1336),w=(a(646),a(644)),L=a(652),T=a(643),D=a.n(T),N=a(653),P=a(655),U=a.n(P),A=a(686),I=a(734),R=a.n(I),E=a(17),M=new Headers,B=localStorage.getItem("auth");M.append("Authorization","Bearer "+B),M.append("Content-Type","application/json");var z=function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).getData=Object(o.a)(i.a.mark((function e(){var t,a,r,s,c,o,l,d;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.setState({isLoading:!0}),e.next=3,Object(A.a)(w.a.LIST_PRODUCT,{},"","GET");case 3:return t=e.sent,e.next=6,Object(A.a)(w.a.LIST_BRAND,{},"","GET");case 6:return a=e.sent,e.next=9,Object(A.a)(w.a.LIST_TYPE+"/null",{},"","GET");case 9:return r=e.sent,e.next=12,Object(A.a)(w.a.LIST_COLOR,{},"","GET");case 12:s=e.sent,c=t.data,o=a.data,l=r.data,d=s.data,n.pagination(c),n.setState({dataApi:c,brands:o,types:l,colors:d,colorItem:l[0].color_id}),0,n.setState({isLoading:!1,totalActive:0});case 21:case"end":return e.stop()}}),e)}))),n.getData_Company=Object(o.a)(i.a.mark((function e(){var t,a,r,s,c,o,l,d;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.setState({isLoading:!0}),e.next=3,Object(A.a)(w.a.LIST_PRODUCT_COMPANY+JSON.parse(n.state.user).company_id,{},n.state.token,"GET");case 3:return t=e.sent,e.next=6,Object(A.a)(w.a.LIST_BRAND_COMPANY+JSON.parse(n.state.user).company_id,{},"","GET");case 6:return a=e.sent,e.next=9,Object(A.a)(w.a.LIST_TYPE_COMPANY+JSON.parse(n.state.user).company_id+"/null",{},"","GET");case 9:return r=e.sent,e.next=12,Object(A.a)(w.a.LIST_COLOR_COMPANY+JSON.parse(n.state.user).company_id,{},"","GET");case 12:s=e.sent,c=t.data,o=a.data,l=r.data,d=s.data,n.pagination(c),n.setState({dataApi:c,brands:o,types:l,colors:d,colorItem:l[0].color_id}),n.setState({isLoading:!1});case 20:case"end":return e.stop()}}),e)}))),n.openDelete=function(e){n.setState({modalDelete:!n.state.modalDelete,id:e._id})},n.state={data:[],key:"",keyColor:"",activePage:1,page:1,itemsCount:0,limit:20,totalActive:0,modalCom:!1,viewingUser:{},communities:[],updated:"",dataApi:[],hidden:!1,action:"new",type_id:"",brand_id:"",color_id:"",brand_name:"",name:"",href:"",image:"",brands:[],types:[],colors:[],modalDelete:!1,delete:null,arrPagination:[],indexPage:0,token:{Authorization:"Bearer ".concat(localStorage.getItem("token"))},type:localStorage.getItem("type"),user:localStorage.getItem("user"),isLoading:!1,BASE_URL:w.a.BASE_URL_CURRENT,arrProductColor:[],colorItem:[],colorItemUpdate:[],colorItemBase:[],colorChooseUpdate:"",collapse:!1},n}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(o.a)(i.a.mark((function e(){var t,a,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for("0"==(t=this.state.type)||"1"==t?this.getData():this.getData_Company(),a=JSON.parse(localStorage.getItem("url")),n=0;n<a.length;n++)a[n].url==window.location.hash&&1==a[n].isHidden&&(window.location.href="#/");case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"pagination",value:function(e){var t,a,n,r=[];for(t=0,a=e.length;t<a;t+=5)n=e.slice(t,t+5),r.push(n);0==r.length?this.setState({hidden:!1}):this.setState({hidden:!0}),this.setState({arrPagination:r,data:r[0]})}},{key:"searchKey",value:function(){var e=this.state,t=e.indexPage,a=e.key;if(console.log(this.state.dataApi),""!=a){var n=[];this.state.dataApi.map((function(e){(e.name.toLocaleUpperCase().includes(a.toLocaleUpperCase())||e.brand_id.name.toLocaleUpperCase().includes(a.toLocaleUpperCase())||e.type_id.name.toLocaleUpperCase().includes(a.toLocaleUpperCase()))&&n.push(e)}));var r=0;n.map((function(e){"Actived"==e.Status&&(r+=1)})),this.setState({data:n,totalActive:r})}else{var s=0;this.state.dataApi.map((function(e){"Actived"==e.Status&&(s+=1)})),this.setState({data:this.state.arrPagination[t],totalActive:s})}}},{key:"onChange",value:function(e,t){this.setState(Object(s.a)({},e,t))}},{key:"onChangeImage",value:function(e){var t=this,a=e.target.files,n=new FileReader;n.readAsDataURL(a[0]),n.onload=function(e){t.setState({image:e.target.result})}}},{key:"toggleModal",value:function(){var e=Object(o.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:"new"==t&&this.setState({modalCom:!this.state.modalCom,action:t,name:"",image:"",href:"",type_id:0==this.state.types.length?"":this.state.types[0].type_id,brand_id:0==this.state.brands.length?"":this.state.brands[0]._id,arrProductColor:[],collapse:!1});case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"onChangeImage_ADD",value:function(e,t){var a=this,n=this.state.arrProductColor,r=e.target.files,s=new FileReader;s.readAsDataURL(r[0]),s.onload=function(e){n[Number(t)].image=e.target.result,a.setState({arrProductColor:n})}}},{key:"addProduct",value:function(){var e=Object(o.a)(i.a.mark((function e(){var t,a,n,r,s,c,o,l;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.state,a=t.name,n=t.href,r=t.type_id,s=t.brand_id,c=t.arrProductColor,null!=a&&""!=a&&null!=n&&""!=n&&null!=r&&""!=r&&null!=s&&""!=s){e.next=4;break}return alert("Vui lòng nhập đầy đủ trường dữ liệu !!!"),e.abrupt("return");case 4:if(0!=c.length){e.next=9;break}alert("Ch\u01b0a th\xeam b\u1ea5t k\xec s\u1ea3n ph\u1ea9m n\xe0o, th\xeam s\u1ea3n ph\u1ea9m th\u1ea5t b\u1ea1i !!!"),this.setState({modalCom:!this.state.modalCom}),e.next=24;break;case 9:o=0;case 10:if(!(o<c.length)){e.next=18;break}if(""!=c[o].color_id){e.next=15;break}return alert("S\u1ea3n ph\u1ea9m th\u1ee9 "+(o+1)+" ch\u01b0a \u0111\u01b0\u1ee3c ch\u1ecdn m\xe0u"),this.setState({modalCom:!this.state.modalCom}),e.abrupt("return");case 15:o++,e.next=10;break;case 18:return l={type_id:r,brand_id:s,name:a,href:n,dataProductColor:c,company_id:"0"==this.state.type||"1"==this.state.type?null:JSON.parse(this.state.user).company_id},this.setState({isLoading:!0}),e.next=22,D()({baseURL:w.a.BASE_URL,url:w.a.ADD_PRODUCT,method:"POST",data:l});case 22:200==e.sent.status?("0"==this.state.type||"1"==this.state.type?this.getData():this.getData_Company(),this.setState({modalCom:!this.state.modalCom})):(alert("Th\xeam s\u1ea3n ph\u1ea9m th\u1ea5t b\u1ea1i"),this.setState({isLoading:!1}));case 24:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"openUpdate",value:function(){var e=Object(o.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.setState({modalCom:!this.state.modalCom,action:"update",name:t.name,image:t.image,href:t.href,type_id:t.type_id.type_id,brand_id:t.brand_id._id,color_id:null==t.color_id?"":t.color_id,brand_name:t.brand_id.name,id:t._id,arrProductColor:[],colorItemUpdate:t.type_id.color_id,colorItemBase:t.type_id.color_id,collapse:!1});case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"updateProducts",value:function(){var e=Object(o.a)(i.a.mark((function e(){var t,a,n,r,s,c,o,l;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.state,a=t.name,n=t.image,r=t.href,s=t.type_id,c=t.brand_id,o=t.color_id,null!=a&&""!=a&&null!=r&&""!=r&&null!=s&&""!=s&&null!=c&&""!=c){e.next=4;break}return alert("Vui lòng nhập đầy đủ trường dữ liệu !!!"),e.abrupt("return");case 4:return l={type_id:s,brand_id:c,name:a,href:r,image:n,color_id:o,id:this.state.id},this.setState({isLoading:!0}),e.next=8,D()({baseURL:w.a.BASE_URL,url:w.a.UPDATE_PRODUCT,method:"POST",data:l});case 8:200==e.sent.status?("0"==this.state.type||"1"==this.state.type?this.getData():this.getData_Company(),console.log(this.state.id),this.setState({modalCom:!this.state.modalCom})):(alert("C\u1eadp nh\u1eadt th\u1ea5t b\u1ea1i"),this.setState({isLoading:!1}));case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"delete",value:function(){var e=Object(o.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({isLoading:!0}),e.next=3,D()({baseURL:w.a.BASE_URL,url:w.a.DELETE_PRODUCT,method:"POST",data:{id:this.state.id}});case 3:200==e.sent.status?("0"==this.state.type||"1"==this.state.type?this.getData():this.getData_Company(),this.setState({modalDelete:!this.state.modalDelete,delete:null})):(alert("X\xf3a s\u1ea3n ph\u1ea9m th\u1ea5t b\u1ea1i"),this.setState({isLoading:!1}));case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"inputChange",value:function(e){this.setState(Object(s.a)({},e.target.name,e.target.value))}},{key:"getBadge",value:function(e){switch(e){case"Actived":return"success";case"Inactive":return"secondary";case"Locked":return"warning";case"Deactived":return"danger";default:return"primary"}}},{key:"actionSearch",value:function(e,t){var a=this;this.setState(Object(s.a)({},t,e.target.value),(function(){a.searchKey()}))}},{key:"onChooseColor",value:function(e,t,a){var n=this.state.arrProductColor;n[Number(t)].color_id=e,n[Number(t)].collapse=!1,n[Number(t)].hex=a,this.setState({arrProductColor:n,keyColor:""})}},{key:"resetSearch",value:function(){var e=this;this.setState({key:""},(function(){e.searchKey()}))}},{key:"searchColor",value:function(){var e=this.state,t=e.keyColor,a=e.colorItem,n=e.colors;if(""!=t){var r=[];a.map((function(e){e.hex.toLocaleUpperCase().includes(t.toLocaleUpperCase())&&r.push(e)})),this.setState({colorItem:r})}else this.setState({colorItem:n})}},{key:"actionSearchColor",value:function(e,t){var a=this;this.setState(Object(s.a)({},t,e),(function(){a.searchColor()}))}},{key:"searchColorUpdate",value:function(){var e=this.state,t=e.keyColor,a=e.colorItemBase,n=e.colorItemUpdate;if(""!=t){var r=[];n.map((function(e){e.hex.toLocaleUpperCase().includes(t.toLocaleUpperCase())&&r.push(e)})),this.setState({colorItemUpdate:r})}else this.setState({colorItemUpdate:a})}},{key:"actionSearchColorUpdate",value:function(e,t){var a=this;this.setState(Object(s.a)({},t,e),(function(){a.searchColorUpdate()}))}},{key:"renderFormAdd",value:function(){var e=this,t=this.state,a=t.brands,n=t.types,r=t.brand_name,c=t.arrProductColor,l=t.colorItem,d=t.keyColor,h=t.type_id;return Object(E.jsxs)("div",{children:[Object(E.jsx)(j.a,{children:"Th\xeam m\u1edbi"}),Object(E.jsxs)(b.a,{children:[Object(E.jsx)(L.a,{field:"name",label:"T\xean s\u1ea3n ph\u1ea9m",value:this.state.name,placeholder:"T\xean s\u1ea3n ph\u1ea9m",onChange:function(t){return e.onChange("name",t.target.value)}}),Object(E.jsx)(L.a,{field:"href",label:"\u0110\u01b0\u1eddng d\u1eabn",value:this.state.href,placeholder:"\u0110\u01b0\u1eddng d\u1eabn",onChange:function(t){return e.onChange("href",t.target.value)}}),Object(E.jsxs)("div",{style:{width:"100%"},children:[Object(E.jsx)(k.M,{children:"Th\u01b0\u01a1ng hi\u1ec7u:"}),Object(E.jsx)(k.X,{onChange:function(){var t=Object(o.a)(i.a.mark((function t(a){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.setState({brand_id:a.target.value});case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),custom:!0,size:"sm",name:"selectSm",id:"SelectLm",children:a.map((function(e,t){return e.name==r?Object(E.jsx)("option",{selected:!0,value:e._id,children:e.name},t):Object(E.jsx)("option",{value:e._id,children:e.name},t)}))})]}),Object(E.jsx)(k.M,{children:"Danh m\u1ee5c:"}),Object(E.jsx)("div",{style:{width:"100%"},children:Object(E.jsx)(k.X,{onChange:function(){var t=Object(o.a)(i.a.mark((function t(a){var r;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=R.a.find(n,{_id:a.target.value}),e.setState({type_id:a.target.value,colorItem:r.color_id});case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),custom:!0,size:"sm",name:"selectSm",id:"SelectLm",children:n.map((function(e,t){return e.type_id==h?Object(E.jsx)("option",{selected:!0,value:e._id,children:e.name},t):Object(E.jsx)("option",{value:e._id,children:e.name},t)}))})}),Object(E.jsxs)("div",{className:"mt-2",children:[Object(E.jsx)(k.M,{children:"M\xe0u v\xe0 h\xecnh \u1ea3nh cho s\u1ea3n ph\u1ea9m"}),Object(E.jsxs)(k.e,{children:[Object(E.jsx)(k.W,{children:c.map((function(t,a){var n=a;return Object(E.jsx)(k.p,{xs:"6",sm:"6",lg:"6",children:Object(E.jsxs)(k.f,{style:{border:"1px solid black",borderRadius:20,margin:2},children:[Object(E.jsx)(k.d,{className:"mb-2",style:{float:"right"},color:"danger",onClick:function(t){c.splice(a,1),e.setState({arrProductColor:c})},children:"X"}),Object(E.jsxs)(k.W,{children:[Object(E.jsxs)(k.p,{xs:"8",sm:"8",lg:"8",children:[Object(E.jsx)(k.q,{show:t.collapse,children:Object(E.jsxs)(k.O,{children:[Object(E.jsx)(k.P,{style:{backgroundColor:"#000000"},children:Object(E.jsx)(x.a,{style:{width:"100%"},onChange:function(t){e.actionSearchColor(t.target.value,"keyColor")},name:"keyColor",value:d,placeholder:"T\xecm ki\u1ebfm"})}),Object(E.jsx)("div",{style:{height:"200px",overflowY:"scroll"},children:l.map((function(t,a){return Object(E.jsx)(k.P,{style:{cursor:"pointer"},onClick:function(){e.onChooseColor(t._id,n,t.hex)},children:Object(E.jsxs)(k.W,{children:[Object(E.jsx)(k.p,{lg:"5",children:t.hex}),Object(E.jsx)(k.p,{lg:"7",children:Object(E.jsx)("div",{style:{backgroundColor:t.hex,width:"100%",height:20}})})]})},a)}))})]})}),Object(E.jsx)(k.d,{color:"primary",style:{width:"100%"},onClick:function(){c[a].collapse=!t.collapse,e.setState({arrProductColor:c})},className:"mb-1",children:t.collapse?"\u0110\xf3ng":"Ch\u1ecdn m\xe0u"})]}),Object(E.jsxs)(k.p,{xs:"4",sm:"4",lg:"4",children:[c[a].hex,Object(E.jsx)("div",{style:{backgroundColor:c[a].hex,width:"100%",height:14,borderRadius:20}})]})]}),Object(E.jsxs)("div",{className:"m-2",children:[Object(E.jsx)(k.M,{children:"\u1ea2nh s\u1ea3n ph\u1ea9m"}),Object(E.jsx)(k.H,Object(s.a)({name:"image",onChange:function(t){e.onChangeImage_ADD(t,a)},onClick:function(e){e.target.value=null},id:"file-input"},"name","file-input"))]}),Object(E.jsx)("center",{children:Object(E.jsx)("img",{width:"150",height:"180",src:c[a].image,style:{marginBottom:20}})})]})})}))}),Object(E.jsx)(k.g,{children:Object(E.jsx)(k.d,{color:"primary",style:{float:"right",width:"100%"},onClick:function(t){c.push({color_id:"",image:"",collapse:!1,hex:""}),e.setState({arrProductColor:c})},children:"Th\xeam m\u1ed9t m\xe0u v\xe0 h\xecnh \u1ea3nh n\u1eefa"})})]})]})]}),Object(E.jsxs)(g.a,{children:[Object(E.jsx)(k.d,{color:"primary",onClick:function(t){e.addProduct()},disabled:this.state.isLoading,children:"L\u01b0u"})," ",Object(E.jsx)(k.d,{color:"secondary",onClick:function(t){return e.toggleModal("new")},children:"Cancel"})]})]})}},{key:"render",value:function(){var e=this,t=this.state,a=t.data,n=t.arrPagination,r=t.brands,s=t.types,c=t.brand_name,l=t.key,d=t.collapse,h=t.keyColor,u=t.colorItemUpdate,p=t.colorChooseUpdate;return this.state.isLoading?Object(E.jsx)("div",{className:"sweet-loading",children:Object(E.jsx)(U.a,{css:G,size:50,color:"#123abc",loading:this.state.isLoading,speedMultiplier:1.5})}):Object(E.jsxs)("div",{className:"animated fadeIn",children:[Object(E.jsx)(f.a,{children:Object(E.jsxs)(O.a,{children:[Object(E.jsxs)(v.a,{children:[Object(E.jsxs)(y.a,{children:[Object(E.jsx)("i",{className:"fa fa-align-justify"})," Danh s\xe1ch s\u1ea3n ph\u1ea9m",Object(E.jsx)("div",{style:Y.tags,children:Object(E.jsxs)(k.W,{children:[Object(E.jsx)(k.p,{sm:"12",lg:"12",children:Object(E.jsxs)(k.W,{children:[Object(E.jsx)(k.p,{sm:"12",lg:"6",children:Object(E.jsx)("div",{children:Object(E.jsx)(x.a,{style:Y.searchInput,onChange:function(t){e.actionSearch(t,"key")},name:"key",value:l,placeholder:"T\u1eeb kh\xf3a"})})}),Object(E.jsx)(k.p,{sm:"12",lg:"6",children:Object(E.jsx)(k.d,{color:"primary",style:{width:"100%",marginTop:5},size:"sm",onClick:function(t){e.resetSearch()},children:"L\xe0m m\u1edbi t\xecm ki\u1ebfm"})})]})}),Object(E.jsx)(k.p,{sm:"12",lg:"12",children:Object(E.jsx)(k.d,{outline:!0,color:"primary",style:Y.floatRight,size:"sm",onClick:function(){var t=Object(o.a)(i.a.mark((function t(a){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.toggleModal("new");case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),children:"Th\xeam"})})]})})]}),Object(E.jsx)(C.a,{children:Object(E.jsxs)("table",{ble:!0,className:"table table-hover table-outline mb-0 d-none d-sm-table",children:[Object(E.jsx)("thead",{className:"thead-light",children:Object(E.jsxs)("tr",{children:[Object(E.jsx)("th",{className:"text-center",children:"STT."}),Object(E.jsx)("th",{className:"text-center",children:"Danh m\u1ee5c c\u1ea5p 2"}),Object(E.jsx)("th",{className:"text-center",children:"Th\u01b0\u01a1ng hi\u1ec7u"}),Object(E.jsx)("th",{className:"text-center",children:"T\xean s\u1ea3n ph\u1ea9m"}),Object(E.jsx)("th",{className:"text-center",children:"M\xe0u"}),Object(E.jsx)("th",{className:"text-center",children:"\u0110\u01b0\u1eddng d\u1eabn"}),Object(E.jsx)("th",{className:"text-center",children:"\u1ea2nh"}),Object(E.jsx)("th",{className:"text-center",children:"#"})]})}),Object(E.jsxs)("tbody",{children:[Object(E.jsx)("td",{colSpan:"10",hidden:this.state.hidden,className:"text-center",children:"Kh\xf4ng t\xecm th\u1ea5y d\u1eef li\u1ec7u"}),void 0!=a?a.map((function(t,a){return Object(E.jsxs)("tr",{children:[Object(E.jsx)("td",{className:"text-center",children:a+1}),Object(E.jsx)("td",{className:"text-center",children:null==t.type_id?"":t.type_id.name}),Object(E.jsx)("td",{className:"text-center",children:null==t.brand_id?"":t.brand_id.name}),Object(E.jsx)("td",{className:"text-center",children:t.name}),Object(E.jsxs)("td",{className:"text-center",children:[null==t.color_id?"":t.color_id.hex,Object(E.jsx)("div",{style:{backgroundColor:null==t.color_id?"":t.color_id.hex,width:"100%",height:"30px"},children:" "})]}),Object(E.jsx)("td",{className:"text-center",children:Object(E.jsx)("a",{href:t.href,target:"_blank",children:"Open web"})}),Object(E.jsx)("td",{className:"text-center",style:{width:"10%"},children:Object(E.jsx)("img",{src:t.image||e.state.BASE_URL+"/images/calendar.png",width:"60px",height:"60px"})}),Object(E.jsxs)("td",{className:"text-center",children:[Object(E.jsx)(k.d,{style:Y.mgl5,outline:!0,color:"primary",size:"sm",onClick:function(){var a=Object(o.a)(i.a.mark((function a(n){return i.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.openUpdate(t);case 2:return a.abrupt("return",a.sent);case 3:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}(),children:Object(E.jsx)(m.a,{name:"cilPencil"})}),Object(E.jsx)(k.d,{outline:!0,color:"danger",size:"sm",onClick:function(a){e.openDelete(t)},children:Object(E.jsx)(m.a,{name:"cilTrash"})})]})]},a)})):""]})]})})]}),Object(E.jsx)("div",{style:{float:"right"},children:Object(E.jsx)(S.a,{count:n.length,color:"primary",onChange:function(t,a){e.setState({data:n[a-1],indexPage:a-1})}})})]})}),Object(E.jsx)(_.a,{size:"xl",isOpen:this.state.modalCom,className:this.props.className,children:"new"==this.state.action?this.renderFormAdd():Object(E.jsxs)("div",{children:[Object(E.jsx)(j.a,{children:"C\u1eadp nh\u1eadt"}),Object(E.jsxs)(b.a,{children:[Object(E.jsx)(L.a,{field:"name",label:"T\xean s\u1ea3n ph\u1ea9m",value:this.state.name,placeholder:"T\xean s\u1ea3n ph\u1ea9m",onChange:function(t){return e.onChange("name",t.target.value)}}),Object(E.jsx)(L.a,{field:"href",label:"\u0110\u01b0\u1eddng d\u1eabn",value:this.state.href,placeholder:"\u0110\u01b0\u1eddng d\u1eabn",onChange:function(t){return e.onChange("href",t.target.value)}}),Object(E.jsx)(L.a,{field:"image",label:"\u1ea2nh th\u01b0\u01a1ng hi\u1ec7u",type:"file",onChange:function(t){e.onChangeImage(t)},onClick:function(e){e.target.value=null}}),""==this.state.image?"":Object(E.jsx)("img",{width:"250",height:"300",src:this.state.image,style:{marginBottom:20}}),Object(E.jsxs)("div",{style:{width:"100%"},children:[Object(E.jsx)(k.M,{children:"Th\u01b0\u01a1ng hi\u1ec7u:"}),Object(E.jsx)(k.X,{onChange:function(){var t=Object(o.a)(i.a.mark((function t(a){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.setState({brand_id:a.target.value});case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),custom:!0,size:"sm",name:"selectSm",id:"SelectLm",children:r.map((function(e,t){return e.name==c?Object(E.jsx)("option",{selected:!0,value:e._id,children:e.name},t):Object(E.jsx)("option",{value:e._id,children:e.name},t)}))})]}),Object(E.jsx)(k.M,{children:"Danh m\u1ee5c:"}),Object(E.jsx)("div",{style:{width:"100%"},children:Object(E.jsx)(k.X,{onChange:function(){var t=Object(o.a)(i.a.mark((function t(a){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.setState({type_id:a.target.value});case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),custom:!0,size:"sm",name:"selectSm",id:"SelectLm",children:s.map((function(t,a){return t.type_id==e.state.type_id?Object(E.jsx)("option",{selected:!0,value:t._id,children:t.name},a):Object(E.jsx)("option",{value:t._id,children:t.name},a)}))})}),Object(E.jsxs)("div",{className:"mt-2",children:[Object(E.jsxs)("div",{className:"text-center m-5",children:[Object(E.jsx)(k.M,{children:Object(E.jsx)("strong",{children:"M\xe0u \u0111\xe3 ch\u1ecdn: "})})," "," ",p,Object(E.jsx)("div",{style:{backgroundColor:p,width:"100%",height:"30px"},children:" "})]}),Object(E.jsx)(k.q,{show:d,children:Object(E.jsxs)(k.O,{children:[Object(E.jsx)(k.P,{style:{backgroundColor:"#000000"},children:Object(E.jsx)(x.a,{style:{width:"100%"},onChange:function(t){e.actionSearchColorUpdate(t.target.value,"keyColor")},name:"keyColor",value:h,placeholder:"T\xecm ki\u1ebfm"})}),Object(E.jsx)("div",{style:{height:"200px",overflowY:"scroll"},children:u.map((function(t,a){return Object(E.jsx)(k.P,{style:{cursor:"pointer"},onClick:function(){e.setState({color_id:t._id,colorChooseUpdate:t.hex})},children:Object(E.jsxs)(k.W,{children:[Object(E.jsx)(k.p,{lg:"2",children:t.hex}),Object(E.jsx)(k.p,{lg:"10",children:Object(E.jsx)("div",{style:{backgroundColor:t.hex,width:"100%",height:20}})})]})},a)}))})]})})]}),Object(E.jsx)(k.d,{color:"primary",style:{width:"100%"},onClick:function(){e.setState({collapse:!d})},className:"mb-1",children:d?"\u0110\xf3ng":"Ch\u1ecdn m\xe0u"})]}),Object(E.jsxs)(g.a,{children:[Object(E.jsx)(k.d,{color:"primary",onClick:function(t){return e.updateProducts()},disabled:this.state.isLoading,children:"Save"})," ",Object(E.jsx)(k.d,{color:"secondary",onClick:function(t){return e.toggleModal("new")},children:"Cancel"})]})]})}),Object(E.jsxs)(_.a,{isOpen:this.state.modalDelete,toggle:function(t){return e.setState({modalDelete:!e.state.modalDelete,delete:null})},className:this.props.className,children:[Object(E.jsx)(j.a,{toggle:function(t){return e.setState({modalDelete:!e.state.modalDelete,delete:null})},children:"Delete"}),Object(E.jsx)(b.a,{children:Object(E.jsx)("label",{htmlFor:"tag",children:"X\xe1c nh\u1eadn x\xf3a !!!"})}),Object(E.jsxs)(g.a,{children:[Object(E.jsx)(k.d,{color:"primary",onClick:function(t){return e.delete()},disabled:this.state.isLoading,children:"Delete"})," ",Object(E.jsx)(k.d,{color:"secondary",onClick:function(t){return e.setState({modalDelete:!e.state.modalDelete,delete:null})},children:"Cancel"})]})]})]})}}]),a}(p.Component),G=Object(N.css)(n||(n=Object(r.a)(["\n  display: block;\n  margin: 0 auto;\n  border-color: red;\n"]))),Y={pagination:{marginRight:"5px"},flexLabel:{width:100},flexOption:{width:300},a:{textDecoration:"none"},floatRight:{float:"right",marginTop:"3px"},spinner:{width:"30px"},center:{textAlign:"center"},tbody:{height:"380px",overflowY:"auto"},wh25:{width:"25%",float:"left",height:"80px"},w5:{width:"15%",float:"left",height:"80px"},wa10:{width:"5%",float:"left",height:"80px"},row:{float:"left",width:"100%"},success:{color:"green"},danger:{color:"red"},mgl5:{margin:"5px"},tags:{float:"right",marginRight:"5px"},searchInput:{width:"190px",display:"inline-block"},userActive:{color:"green"},userPending:{color:"red"},nagemonNameCol:{width:"328px"},image:{width:"100px",height:"100px",borderRadius:"99999px"}};t.default=z},686:function(e,t,a){"use strict";var n=a(113),r=a.n(n),s=a(641),c=a(644),i=a(643).default;i.defaults.baseURL=c.a.BASE_URL;var o=function(){var e=Object(s.a)(r.a.mark((function e(){var t,a,n,s,c,o,l,d,h,u=arguments;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=u.length>0&&void 0!==u[0]?u[0]:"",a=u.length>1&&void 0!==u[1]?u[1]:{},n=u.length>2&&void 0!==u[2]?u[2]:"",s=u.length>3?u[3]:void 0,c={},n&&(c={headers:n}),e.prev=6,e.t0=s,e.next="GET"===e.t0?10:"POST"===e.t0?16:"PUT"===e.t0?22:"DELETE"===e.t0?28:34;break;case 10:return e.next=12,i.get(t,a,c);case 12:if(0!=(o=e.sent).is_success){e.next=15;break}return e.abrupt("return",null);case 15:return e.abrupt("return",o.data);case 16:return e.next=18,i.post(t,a,c);case 18:if(0!=(l=e.sent).is_success){e.next=21;break}return e.abrupt("return",null);case 21:return e.abrupt("return",l.data);case 22:return e.next=24,i.put(t,a,c);case 24:if(0!=(d=e.sent).is_success){e.next=27;break}return e.abrupt("return",null);case 27:return e.abrupt("return",d.data);case 28:return e.next=30,i.delete(t,a,c);case 30:if(0!=(h=e.sent).is_success){e.next=33;break}return e.abrupt("return",null);case 33:return e.abrupt("return",h.data);case 34:e.next=39;break;case 36:return e.prev=36,e.t1=e.catch(6),e.abrupt("return",e.t1);case 39:case"end":return e.stop()}}),e,null,[[6,36]])})));return function(){return e.apply(this,arguments)}}();t.a=o}}]);
//# sourceMappingURL=42.b745a950.chunk.js.map
