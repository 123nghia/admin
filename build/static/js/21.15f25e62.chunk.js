(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[21],{1032:function(e,t,a){"use strict";a.r(t);var n,r=a(659),i=a(169),s=a(113),c=a.n(s),l=a(645),o=a(165),d=a(166),u=a(168),h=a(167),p=a(2),j=a(643),b=a(1012),m=a(1013),O=a(1021),g=a(1022),_=a(687),x=a(1023),f=a(1036),D=a(1007),v=a(1008),y=a(1009),S=a(646),E=a(647),T=a(680),k=a(1033),w=(a(660),a(640)),L=a(651),A=a(655),C=a(661),N=a.n(C),R=a(17),P=new Headers,U=localStorage.getItem("auth");P.append("Authorization","Bearer "+U),P.append("Content-Type","application/json");var I=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).getData=Object(l.a)(c.a.mark((function e(){var t,a,r,i,s,l;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.setState({isLoading:!0}),e.next=3,Object(E.a)(w.a.LIST_SEO_INFO,{},"","POST");case 3:return t=e.sent,e.next=6,Object(E.a)(w.a.LIST_PRODUCT,{},"","POST");case 6:for(a=e.sent,r=t.data,i=a.data,s=[],l=0;l<i.length;l++)s.push({value:i[l]._id,label:i[l].name});n.pagination(r),n.setState({dataApi:r,isLoading:!1,arrOptionProduct:s});case 13:case"end":return e.stop()}}),e)}))),n.openDelete=function(e){n.setState({modalDelete:!n.state.modalDelete,id:e._id})},n.handleChangeProduct=function(e,t){n.setState({objectValueProduct:e,product_id:e.value})},n.state={data:[],key:"",modalCom:!1,dataApi:[],hidden:!1,action:"new",product_id:"",image:"",image_show:"",title:"",keyword:"",description:"",modalDelete:!1,delete:null,arrPagination:[],indexPage:0,token:{Authorization:"Bearer ".concat(localStorage.getItem("token"))},type:localStorage.getItem("type"),isLoading:!1,arrOptionProduct:[],objectValueProduct:{}},n}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(l.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.getData();case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"pagination",value:function(e){var t,a,n,r=[];for(t=0,a=e.length;t<a;t+=5)n=e.slice(t,t+5),r.push(n);0==r.length?this.setState({hidden:!1}):this.setState({hidden:!0}),this.setState({arrPagination:r,data:r[0]})}},{key:"searchKey",value:function(){var e=this.state,t=e.indexPage,a=e.key;if(""!=a){var n=[];this.state.dataApi.map((function(e){e.title.toLocaleUpperCase().includes(a.toLocaleUpperCase())&&n.push(e)})),this.setState({data:n})}else this.setState({data:this.state.arrPagination[t]})}},{key:"actionSearch",value:function(e,t){var a=this;this.setState(Object(i.a)({},t,e.target.value),(function(){a.searchKey()}))}},{key:"resetSearch",value:function(){var e=this;this.setState({key:""},(function(){e.searchKey()}))}},{key:"onChangeImage",value:function(e){var t=this,a=e.target.files,n=new FileReader;this.setState({image:a[0]}),n.readAsDataURL(a[0]),n.onload=function(e){t.setState({image_show:e.target.result})}}},{key:"toggleModal",value:function(){var e=Object(l.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:"new"==t&&this.setState({modalCom:!this.state.modalCom,action:t,product_id:"",image:"",image_show:"",title:"",keyword:"",description:"",objectValueCategory:{}});case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"onChange",value:function(e,t){this.setState(Object(i.a)({},e,t))}},{key:"addSEOInfo",value:function(){var e=Object(l.a)(c.a.mark((function e(){var t,a,n,r,i,s,l,o;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.state,a=t.product_id,n=t.title,r=t.image,i=t.keyword,s=t.description,null!=n&&""!=n&&null!=r&&""!=r){e.next=4;break}return alert("H\xe3y nh\u1eadp \u0111\u1ea7y \u0111\u1ee7 d\u1eef li\u1ec7u !!!"),e.abrupt("return");case 4:return(l=new FormData).append("image",r),e.next=8,Object(E.a)(w.a.UPLOAD_SEO_INFO,l,"","POST");case 8:return o={product_id:a,image:r.name,title:n,keyword:i,description:s},this.setState({isLoading:!0}),e.next=12,Object(E.a)(w.a.ADD_SEO_INFO,o,"","POST");case 12:200==e.sent.status?(this.getData(),this.setState({modalCom:!this.state.modalCom})):(alert("Th\xeam th\u1ea5t b\u1ea1i"),this.setState({isLoading:!1}));case 14:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"openUpdate",value:function(){var e=Object(l.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.setState({modalCom:!this.state.modalCom,action:"update",product_id:t.product_id,image:t.product_id,image_show:"",title:t.product_id,keyword:t.product_id,description:t.product_id,objectValueProduct:{value:t.product_id._id,label:t.product_id.name},id:t._id});case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"updateBrand",value:function(){var e=Object(l.a)(c.a.mark((function e(){var t,a,n,r,i,s,l,o;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.state,a=t.product_id,n=t.title,r=t.image,i=t.keyword,s=t.description,null!=n&&""!=n&&null!=r&&""!=r){e.next=4;break}return alert("H\xe3y nh\u1eadp \u0111\u1ea7y \u0111\u1ee7 d\u1eef li\u1ec7u !!!"),e.abrupt("return");case 4:return(l=new FormData).append("image",r),e.next=8,Object(E.a)(w.a.UPLOAD_SEO_INFO,l,"","POST");case 8:return o={product_id:a,image:r.name,title:n,keyword:i,description:s,id:this.state.id},this.setState({isLoading:!0}),e.next=12,Object(E.a)(w.a.UPDATE_SEO_INFO,o,"","POST");case 12:200==e.sent.status?(this.getData(),this.setState({modalCom:!this.state.modalCom})):(alert("C\u1eadp nh\u1eadt th\u1ea5t b\u1ea1i"),this.setState({isLoading:!1}));case 14:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"delete",value:function(){var e=Object(l.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({isLoading:!0}),e.next=3,Object(E.a)(w.a.DELETE_SEO_INFOR,{id:this.state.id},"","POST");case 3:200==e.sent.status?(this.getData(),this.setState({modalDelete:!this.state.modalDelete,delete:null})):(alert("Xo\xe1 th\u1ea5t b\u1ea1i"),this.setState({isLoading:!1}));case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"inputChange",value:function(e){this.setState(Object(i.a)({},e.target.name,e.target.value))}},{key:"getBadge",value:function(e){switch(e){case"Actived":return"success";case"Inactive":return"secondary";case"Locked":return"warning";case"Deactived":return"danger";default:return"primary"}}},{key:"render",value:function(){var e=this,t=this.state,a=t.data,n=t.arrPagination,r=t.key,i=t.image,s=t.image_show,o=t.objectValueProduct,d=t.arrOptionProduct;return this.state.isLoading?Object(R.jsx)("div",{className:"sweet-loading",children:Object(R.jsx)(N.a,{css:B,size:50,color:"#123abc",loading:this.state.isLoading,speedMultiplier:1.5})}):Object(R.jsxs)("div",{className:"animated fadeIn",children:[Object(R.jsx)(b.a,{children:Object(R.jsxs)(m.a,{children:[Object(R.jsxs)(O.a,{children:[Object(R.jsxs)(g.a,{children:[Object(R.jsx)("i",{className:"fa fa-align-justify"})," Danh s\xe1ch",Object(R.jsx)("div",{style:F.tags,children:Object(R.jsxs)(S.Q,{children:[Object(R.jsx)(S.p,{sm:"12",lg:"12",children:Object(R.jsxs)(S.Q,{children:[Object(R.jsx)(S.p,{sm:"12",lg:"6",children:Object(R.jsx)("div",{children:Object(R.jsx)(_.a,{style:F.searchInput,onChange:function(t){e.actionSearch(t,"key")},name:"key",value:r,placeholder:"T\u1eeb kh\xf3a"})})}),Object(R.jsx)(S.p,{sm:"12",lg:"6",children:Object(R.jsx)(S.d,{color:"primary",style:{width:"100%",marginTop:5},size:"sm",onClick:function(t){e.resetSearch()},children:"L\xe0m m\u1edbi t\xecm ki\u1ebfm"})})]})}),Object(R.jsx)(S.p,{sm:"12",lg:"12",children:Object(R.jsx)(S.d,{outline:!0,color:"primary",style:F.floatRight,size:"sm",onClick:function(t){return e.toggleModal("new")},children:"Th\xeam m\u1edbi"})})]})})]}),Object(R.jsx)(x.a,{children:Object(R.jsxs)("table",{ble:!0,className:"table table-hover table-outline mb-0 d-none d-sm-table",children:[Object(R.jsx)("thead",{className:"thead-light",children:Object(R.jsxs)("tr",{children:[Object(R.jsx)("th",{className:"text-center",children:"STT."}),Object(R.jsx)("th",{className:"text-center",children:"S\u1ea3n ph\u1ea9m"}),Object(R.jsx)("th",{className:"text-center",children:"Ti\xeau \u0111\u1ec1"}),Object(R.jsx)("th",{className:"text-center",children:"H\xecnh \u1ea3nh"}),Object(R.jsx)("th",{className:"text-center",children:"T\u1eeb kho\xe1"}),Object(R.jsx)("th",{className:"text-center",children:"M\xf4 t\u1ea3"}),Object(R.jsx)("th",{className:"text-center",children:"#"})]})}),Object(R.jsxs)("tbody",{children:[Object(R.jsx)("td",{colSpan:"10",hidden:this.state.hidden,className:"text-center",children:"Kh\xf4ng t\xecm th\u1ea5y d\u1eef li\u1ec7u"}),void 0!=a?a.map((function(t,a){return Object(R.jsxs)("tr",{children:[Object(R.jsx)("td",{className:"text-center",children:a+1}),Object(R.jsx)("td",{className:"text-center",children:t.product_id}),Object(R.jsx)("td",{className:"text-center",children:t.title}),Object(R.jsx)("td",{className:"text-center",children:""==t.image||null==t.image?Object(R.jsx)("img",{src:"https://www.chanchao.com.tw/VietnamPrintPack/images/default.jpg",width:"60px",height:"60px"}):Object(R.jsx)("img",{src:"".concat(w.a.BASE_URL,"/public/image_seo/").concat(t.image),width:"80px",height:"60px"})}),Object(R.jsx)("td",{className:"text-center",children:t.keyword}),Object(R.jsxs)("td",{className:"text-center",children:[Object(R.jsx)(S.d,{style:F.mgl5,outline:!0,color:"primary",size:"sm",onClick:function(){var a=Object(l.a)(c.a.mark((function a(n){return c.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.openUpdate(t);case 2:return a.abrupt("return",a.sent);case 3:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}(),children:Object(R.jsx)(j.a,{name:"cilPencil"})})," ",Object(R.jsx)(S.d,{outline:!0,color:"danger",size:"sm",onClick:function(a){e.openDelete(t)},children:Object(R.jsx)(j.a,{name:"cilTrash"})})]})]},a)})):""]})]})})]}),Object(R.jsx)("div",{style:{float:"right"},children:Object(R.jsx)(k.a,{count:n.length,color:"primary",onChange:function(t,a){e.setState({data:n[a-1],indexPage:a-1})}})})]})}),Object(R.jsxs)(f.a,{isOpen:this.state.modalCom,className:this.props.className,children:[Object(R.jsx)(D.a,{children:"new"==this.state.action?"T\u1ea1o m\u1edbi":"C\u1eadp nh\u1eadt"}),Object(R.jsxs)(v.a,{children:[Object(R.jsxs)(S.Q,{children:[Object(R.jsx)(S.p,{md:"2",lg:"2",sm:"12",xm:"12",lx:"2",children:Object(R.jsx)(S.N,{children:"S\u1ea3n ph\u1ea9m:"})}),Object(R.jsx)(S.p,{md:"10",lg:"10",sm:"12",xm:"12",lx:"10",children:Object(R.jsx)(T.a,{isClearable:!0,onChange:this.handleChangeProduct,value:o,options:d})})]}),Object(R.jsx)("br",{}),Object(R.jsx)(L.a,{field:"title",label:"Ti\xeau \u0111\u1ec1",value:this.state.title,placeholder:"Ti\xeau \u0111\u1ec1",onChange:function(t){return e.onChange("title",t.target.value)}}),Object(R.jsx)(L.a,{field:"image",label:"H\xecnh \u1ea3nh",type:"file",onChange:function(t){e.onChangeImage(t)},onClick:function(t){t.target.value=null,e.setState({image_show:""})}}),""==i?"":Object(R.jsx)("img",{width:"250",height:"300",src:""==s?"".concat(w.a.BASE_URL,"/public/image_seo/").concat(i):s,style:{marginBottom:20}}),Object(R.jsx)(L.a,{field:"keyword",label:"T\u1eeb kho\xe1",value:this.state.keyword,placeholder:"T\u1eeb kho\xe1",onChange:function(t){return e.onChange("keyword",t.target.value)}}),Object(R.jsx)(S.N,{children:"M\xf4 t\u1ea3"}),Object(R.jsx)(S.ab,{rows:9,value:this.state.description,onChange:function(t){e.setState({description:t.target.value})}})]}),Object(R.jsxs)(y.a,{children:[Object(R.jsx)(S.d,{color:"primary",onClick:function(t){"new"===e.state.action?e.addSEOInfo():e.updateBrand()},disabled:this.state.isLoading,children:"Save"})," ",Object(R.jsx)(S.d,{color:"secondary",onClick:function(t){return e.toggleModal("new")},children:"Cancel"})]})]}),Object(R.jsxs)(f.a,{isOpen:this.state.modalDelete,toggle:function(t){return e.setState({modalDelete:!e.state.modalDelete,delete:null})},className:this.props.className,children:[Object(R.jsx)(D.a,{toggle:function(t){return e.setState({modalDelete:!e.state.modalDelete,delete:null})},children:"Delete"}),Object(R.jsx)(v.a,{children:Object(R.jsx)("label",{htmlFor:"tag",children:"X\xe1c nh\u1eadn x\xf3a !!!"})}),Object(R.jsxs)(y.a,{children:[Object(R.jsx)(S.d,{color:"primary",onClick:function(t){return e.delete()},disabled:this.state.isLoading,children:"Delete"})," ",Object(R.jsx)(S.d,{color:"secondary",onClick:function(t){return e.setState({modalDelete:!e.state.modalDelete,delete:null})},children:"Cancel"})]})]})]})}}]),a}(p.Component),B=Object(A.css)(n||(n=Object(r.a)(["\n  display: block;\n  margin: 0 auto;\n  border-color: red;\n"]))),F={pagination:{marginRight:"5px"},flexLabel:{width:100},flexOption:{width:300},a:{textDecoration:"none"},floatRight:{float:"right",marginTop:"3px"},spinner:{width:"30px"},center:{textAlign:"center"},tbody:{height:"380px",overflowY:"auto"},wh25:{width:"25%",float:"left",height:"80px"},w5:{width:"15%",float:"left",height:"80px"},wa10:{width:"5%",float:"left",height:"80px"},row:{float:"left",width:"100%"},success:{color:"green"},danger:{color:"red"},mgl5:{margin:"5px"},tags:{float:"right",marginRight:"5px"},searchInput:{width:"190px",display:"inline-block"},userActive:{color:"green"},userPending:{color:"red"},nagemonNameCol:{width:"328px"},image:{width:"100px",height:"100px",borderRadius:"99999px"}};t.default=I},640:function(e,t,a){"use strict";t.a={BASE_URL:"https://api.thulamua.com",GHTK_URL:"https://services.ghtklab.com",LOGIN:"/api/login",LIST_USER:"/api/list_user",ADD_USER:"/api/add_user",UPDATE_USER:"/api/update_user",DELETE_USER:"/api/delete_user",UPLOAD_AVATAR:"/api/upload_avatar",LIST_CATEGORY:"/api/list_category",ADD_CATEGORY:"/api/add_category",UPDATE_CATEGORY:"/api/update_category",DELETE_CATEGORY:"/api/delete_category",UPLOAD_CATEGORY:"/api/upload_category",LIST_BRAND:"/api/list_brand",ADD_BRAND:"/api/add_brand",UPDATE_BRAND:"/api/update_brand",DELETE_BRAND:"/api/delete_brand",UPLOAD_BRAND:"/api/upload_brand",LIST_PRODUCT:"/api/list_product",LIST_PRODUCT_CATEGORY:"/api/list_product_category",ADD_PRODUCT:"/api/add_product",UPDATE_PRODUCT:"/api/update_product",DELETE_PRODUCT:"/api/delete_product",UPLOAD_PRODUCT:"/api/upload_product",UPLOAD_PRODUCT_MULTIPLE:"/api/upload_product_multiple",LIST_ORDER:"/api/list_order",LIST_ORDER_DETAIL:"/api/list_order_detail",LIST_ORDER_BY_USER:"/api/list_order_by_user",ADD_ORDER:"/api/add_order",PRINT_ORDER:"/api/print_order",LIST_DEAL:"/api/list_deal",ADD_DEAL:"/api/add_deal",UPDATE_DEAL:"/api/update_deal",DELETE_DEAL:"/api/delete_deal",UPLOAD_DEAL:"/api/upload_deal",LIST_COUNT_ORDER:"/api/list_count_order",LIST_BANNER:"/api/get_banner",GET_BANNER_BY_ID:"/api/get_banner_by_id",ADD_BANNER:"/api/add_banners",UPADTE_BANNER:"/api/update_banner",DELETE_BANNER:"/api/delete_banner",UPLOAD_BANNER:"/api/upload_banner",LIST_SEO_INFO:"/api/get_seo_info",ADD_SEO_INFO:"/api/add_seo_info",UPDATE_SEO_INFO:"/api/update_seo_info",DELETE_SEO_INFOR:"/api/delete_seo_info",UPLOAD_SEO_INFO:"/api/upload_seo_info"}},647:function(e,t,a){"use strict";var n=a(113),r=a.n(n),i=a(645),s=a(640),c=a(652).default;c.defaults.baseURL=s.a.BASE_URL;var l=function(){var e=Object(i.a)(r.a.mark((function e(){var t,a,n,i,s,l,o,d,u,h=arguments;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=h.length>0&&void 0!==h[0]?h[0]:"",a=h.length>1&&void 0!==h[1]?h[1]:{},n=h.length>2&&void 0!==h[2]?h[2]:"",i=h.length>3?h[3]:void 0,s={},n&&(s={headers:n}),e.prev=6,e.t0=i,e.next="GET"===e.t0?10:"POST"===e.t0?16:"PUT"===e.t0?22:"DELETE"===e.t0?28:34;break;case 10:return e.next=12,c.get(t,a,s);case 12:if(0!=(l=e.sent).is_success){e.next=15;break}return e.abrupt("return",null);case 15:return e.abrupt("return",l.data);case 16:return e.next=18,c.post(t,a,s);case 18:if(0!=(o=e.sent).is_success){e.next=21;break}return e.abrupt("return",null);case 21:return e.abrupt("return",o.data);case 22:return e.next=24,c.put(t,a,s);case 24:if(0!=(d=e.sent).is_success){e.next=27;break}return e.abrupt("return",null);case 27:return e.abrupt("return",d.data);case 28:return e.next=30,c.delete(t,a,s);case 30:if(0!=(u=e.sent).is_success){e.next=33;break}return e.abrupt("return",null);case 33:return e.abrupt("return",u.data);case 34:e.next=39;break;case 36:return e.prev=36,e.t1=e.catch(6),e.abrupt("return",e.t1);case 39:case"end":return e.stop()}}),e,null,[[6,36]])})));return function(){return e.apply(this,arguments)}}();t.a=l},651:function(e,t,a){"use strict";a(2);var n=a(642),r=a.n(n),i=a(17),s=function(e){var t=e.field,a=e.value,n=e.label,s=e.error,c=e.type,l=e.onChange,o=e.checkUserExists,d=e.readOnly,u=e.placeholder,h=e.onClick;return Object(i.jsxs)("div",{className:r()("form-group",{"has-error":s}),children:[Object(i.jsx)("label",{className:"control-label",children:n}),Object(i.jsx)("input",{onChange:l,onClick:h,onBlur:o,value:a,type:c,name:t,placeholder:u,readOnly:d,className:"form-control"}),s&&Object(i.jsx)("span",{className:"help-block",children:s})]})};s.defaultProps={type:"text"},t.a=s}}]);
//# sourceMappingURL=21.15f25e62.chunk.js.map