(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[18],{1038:function(e,t,a){"use strict";a.r(t);var n,i=a(653),r=a(168),s=a(113),c=a.n(s),l=a(642),o=a(164),d=a(165),u=a(167),p=a(166),h=a(2),_=a(643),m=a(1015),g=a(1016),b=a(1024),O=a(1025),E=a(662),D=a(1026),T=a(1048),f=a(1010),j=a(1011),A=a(1012),S=a(644),x=a(648),L=a(1045),R=(a(654),a(639)),P=a(649),U=a(647),k=a.n(U),v=a(652),y=a(655),I=a.n(y),N=a(17),C=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).getData=Object(l.a)(c.a.mark((function e(){var t,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.setState({isLoading:!0}),e.next=3,k()({baseURL:R.a.BASE_URL,url:R.a.LIST_BRAND_MAKEUP,method:"GET"});case 3:t=e.sent,a=t.data.data,n.pagination(a),n.setState({dataApi:a}),0,n.setState({isLoading:!1,totalActive:0});case 9:case"end":return e.stop()}}),e)}))),n.openDelete=function(e){n.setState({modalDelete:!n.state.modalDelete,id:e._id})},n.state={data:[],key:"",activePage:1,page:1,itemsCount:0,limit:20,totalActive:0,modalCom:!1,viewingUser:{},communities:[],updated:"",dataApi:[],hidden:!1,action:"new",name:"",image:"",image_show:"",image_link:"",link:"",modalDelete:!1,delete:null,arrPagination:[],indexPage:0,token:{Authorization:"Bearer ".concat(localStorage.getItem("token"))},user:localStorage.getItem("user"),isLoading:!1},n}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(l.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.getData();case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"pagination",value:function(e){var t,a,n,i=[];for(t=0,a=e.length;t<a;t+=5)n=e.slice(t,t+5),i.push(n);0==i.length?this.setState({hidden:!1}):this.setState({hidden:!0}),this.setState({arrPagination:i,data:i[0]})}},{key:"searchKey",value:function(){var e=this.state,t=e.indexPage,a=e.key;if(""!=a){var n=[];this.state.dataApi.map((function(e){e.name.toLocaleUpperCase().includes(a.toLocaleUpperCase())&&n.push(e)}));var i=0;n.map((function(e){"Actived"==e.Status&&(i+=1)})),this.setState({data:n,totalActive:i})}else{var r=0;this.state.dataApi.map((function(e){"Actived"==e.Status&&(r+=1)})),this.setState({data:this.state.arrPagination[t],totalActive:r})}}},{key:"actionSearch",value:function(e,t){var a=this;this.setState(Object(r.a)({},t,e.target.value),(function(){a.searchKey()}))}},{key:"resetSearch",value:function(){var e=this;this.setState({key:""},(function(){e.searchKey()}))}},{key:"toggleModal",value:function(){var e=Object(l.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:"new"==t&&this.setState({modalCom:!this.state.modalCom,action:t,name:"",image:"",image_show:"",link:""});case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"onChange",value:function(e,t){this.setState(Object(r.a)({},e,t))}},{key:"addBrand",value:function(){var e=Object(l.a)(c.a.mark((function e(){var t,a,n,i,r,s,l;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.state,a=t.name,n=t.image,i=t.link,r=t.image_link,null!=a&&""!=a&&null!=n&&""!=n){e.next=4;break}return alert("Vui l\xf2ng nh\u1eadp \u0111\u1ea7y \u0111\u1ee7 tr\u01b0\u1eddng !!!"),e.abrupt("return");case 4:return(s=new FormData).append("image",r),e.next=8,Object(x.a)(R.a.UPLOAD_IMAGE_BRAND,s,"","POST");case 8:return l={name:a,image:n,image_link:r.name,company_id:"0"==this.state.type||"1"==this.state.type?"":JSON.parse(this.state.user).company_id,link:i},this.setState({isLoading:!0}),e.next=12,k()({baseURL:R.a.BASE_URL,url:R.a.ADD_BRAND_MAKEUP,method:"POST",data:l});case 12:200==e.sent.status?(this.getData(),this.setState({modalCom:!this.state.modalCom})):(alert("Th\xeam th\u01b0\u01a1ng hi\u1ec7u th\u1ea5t b\u1ea1i"),this.setState({isLoading:!1}));case 14:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"openUpdate",value:function(){var e=Object(l.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.setState({modalCom:!this.state.modalCom,action:"update",name:t.name,image:t.image,image_show:"",image_link:t.image_link,id:t._id,link:t.link});case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"updateBrand",value:function(){var e=Object(l.a)(c.a.mark((function e(){var t,a,n,i,r,s,l;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.state,a=t.name,n=t.image,i=t.link,r=t.image_link,null!=a&&""!=a&&null!=n&&""!=n){e.next=4;break}return alert("Vui l\xf2ng nh\u1eadp \u0111\u1ea7y \u0111\u1ee7 tr\u01b0\u1eddng !!!"),e.abrupt("return");case 4:return(s=new FormData).append("image",r),e.next=8,Object(x.a)(R.a.UPLOAD_IMAGE_BRAND,s,"","POST");case 8:return l={name:a,image:n,image_link:void 0==r||null==r||""==r?"":r.name,id:this.state.id,link:i},this.setState({isLoading:!0}),e.next=12,k()({baseURL:R.a.BASE_URL,url:R.a.UPDATE_BRAND_MAKEUP,method:"POST",data:l});case 12:200==e.sent.status?(this.getData(),this.setState({modalCom:!this.state.modalCom})):(alert("C\u1eadp nh\u1eadt th\u1ea5t b\u1ea1i"),this.setState({isLoading:!1}));case 14:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"delete",value:function(){var e=Object(l.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({isLoading:!0}),e.next=3,k()({baseURL:R.a.BASE_URL,url:R.a.DELETE_BRAND_MAKEUP,method:"POST",data:{id:this.state.id}});case 3:200==e.sent.status?(this.getData(),this.setState({modalDelete:!this.state.modalDelete,delete:null})):(alert("X\xf3a s\u1ea3n ph\u1ea9m th\u1ea5t b\u1ea1i"),this.setState({isLoading:!1}));case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"inputChange",value:function(e){this.setState(Object(r.a)({},e.target.name,e.target.value))}},{key:"getBadge",value:function(e){switch(e){case"Actived":return"success";case"Inactive":return"secondary";case"Locked":return"warning";case"Deactived":return"danger";default:return"primary"}}},{key:"onChangeImage",value:function(e){var t=this,a=e.target.files,n=new FileReader;this.setState({image_link:a[0]}),n.readAsDataURL(a[0]),n.onload=function(e){t.setState({image:e.target.result,image_show:e.target.result})}}},{key:"render",value:function(){var e=this,t=this.state,a=t.data,n=t.arrPagination,i=t.key;return this.state.isLoading?Object(N.jsx)("div",{className:"sweet-loading",children:Object(N.jsx)(I.a,{css:w,size:50,color:"#123abc",loading:this.state.isLoading,speedMultiplier:1.5})}):Object(N.jsxs)("div",{className:"animated fadeIn",children:[Object(N.jsx)(m.a,{children:Object(N.jsxs)(g.a,{children:[Object(N.jsxs)(b.a,{children:[Object(N.jsxs)(O.a,{children:[Object(N.jsx)("i",{className:"fa fa-align-justify"})," Danh s\xe1ch th\u01b0\u01a1ng hi\u1ec7u",Object(N.jsx)("div",{style:M.tags,children:Object(N.jsxs)(S.T,{children:[Object(N.jsx)(S.p,{sm:"12",lg:"12",children:Object(N.jsxs)(S.T,{children:[Object(N.jsx)(S.p,{sm:"12",lg:"6",children:Object(N.jsx)("div",{children:Object(N.jsx)(E.a,{style:M.searchInput,onChange:function(t){e.actionSearch(t,"key")},name:"key",value:i,placeholder:"T\u1eeb kh\xf3a"})})}),Object(N.jsx)(S.p,{sm:"12",lg:"6",children:Object(N.jsx)(S.d,{color:"primary",style:{width:"100%",marginTop:5},size:"sm",onClick:function(t){e.resetSearch()},children:"L\xe0m m\u1edbi t\xecm ki\u1ebfm"})})]})}),Object(N.jsx)(S.p,{sm:"12",lg:"12",children:Object(N.jsx)(S.d,{outline:!0,color:"primary",style:M.floatRight,size:"sm",onClick:function(t){return e.toggleModal("new")},children:"Th\xeam m\u1edbi"})})]})})]}),Object(N.jsx)(D.a,{children:Object(N.jsxs)("table",{ble:!0,className:"table table-hover table-outline mb-0 d-none d-sm-table",children:[Object(N.jsx)("thead",{className:"thead-light",children:Object(N.jsxs)("tr",{children:[Object(N.jsx)("th",{className:"text-center",children:"STT."}),Object(N.jsx)("th",{className:"text-center",children:"T\xean th\u01b0\u01a1ng hi\u1ec7u"}),Object(N.jsx)("th",{className:"text-center",children:"\u1ea2nh th\u01b0\u01a1ng hi\u1ec7u"}),Object(N.jsx)("th",{className:"text-center",children:"Link th\u01b0\u01a1ng hi\u1ec7u"}),Object(N.jsx)("th",{className:"text-center",children:"#"})]})}),Object(N.jsxs)("tbody",{children:[Object(N.jsx)("td",{colSpan:"10",hidden:this.state.hidden,className:"text-center",children:"Kh\xf4ng t\xecm th\u1ea5y d\u1eef li\u1ec7u"}),void 0!=a?a.map((function(t,a){return Object(N.jsxs)("tr",{children:[Object(N.jsx)("td",{className:"text-center",children:a+1}),Object(N.jsx)("td",{className:"text-center",children:t.name}),Object(N.jsx)("td",{className:"text-center",children:null==t.image_link||""==t.image_link?Object(N.jsx)("img",{src:"".concat(t.image),width:"60px",height:"60px"}):Object(N.jsx)("img",{src:"".concat(R.a.BASE_URL,"/public/image_brand/").concat(t.image_link),width:"60px",height:"60px"})}),Object(N.jsx)("td",{className:"text-center",children:Object(N.jsx)("a",{href:t.link,target:"_blank",children:t.link})}),Object(N.jsxs)("td",{className:"text-center",children:[Object(N.jsx)(S.d,{style:M.mgl5,outline:!0,color:"primary",size:"sm",onClick:function(){var a=Object(l.a)(c.a.mark((function a(n){return c.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.openUpdate(t);case 2:return a.abrupt("return",a.sent);case 3:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}(),children:Object(N.jsx)(_.a,{name:"cilPencil"})})," ",Object(N.jsx)(S.d,{outline:!0,color:"danger",size:"sm",onClick:function(a){e.openDelete(t)},children:Object(N.jsx)(_.a,{name:"cilTrash"})})]})]},a)})):""]})]})})]}),Object(N.jsx)("div",{style:{float:"right"},children:Object(N.jsx)(L.a,{count:n.length,color:"primary",onChange:function(t,a){e.setState({data:n[a-1],indexPage:a-1})}})})]})}),Object(N.jsxs)(T.a,{isOpen:this.state.modalCom,className:this.props.className,children:[Object(N.jsx)(f.a,{children:"new"==this.state.action?"T\u1ea1o m\u1edbi":"C\u1eadp nh\u1eadt"}),Object(N.jsxs)(j.a,{children:[Object(N.jsx)(P.a,{field:"name",label:"T\xean th\u01b0\u01a1ng hi\u1ec7u",value:this.state.name,placeholder:"T\xean th\u01b0\u01a1ng hi\u1ec7u",onChange:function(t){return e.onChange("name",t.target.value)}}),Object(N.jsx)(P.a,{field:"image",label:"\u1ea2nh th\u01b0\u01a1ng hi\u1ec7u",type:"file",onChange:function(t){e.onChangeImage(t)},onClick:function(t){t.target.value=null,e.setState({image_show:""})}}),""==this.state.image||null==this.state.image||void 0==this.state.image?"":Object(N.jsx)("img",{width:"250",height:"300",src:""==this.state.image_show?"".concat(R.a.BASE_URL,"/public/image_brand/").concat(this.state.image_link):this.state.image,style:{marginBottom:20}}),Object(N.jsx)(P.a,{field:"link",label:"Link th\u01b0\u01a1ng hi\u1ec7u",value:this.state.link,placeholder:"Link th\u01b0\u01a1ng hi\u1ec7u",onChange:function(t){return e.onChange("link",t.target.value)}})]}),Object(N.jsxs)(A.a,{children:[Object(N.jsx)(S.d,{color:"primary",onClick:function(t){"new"===e.state.action?e.addBrand():e.updateBrand()},disabled:this.state.isLoading,children:"Save"})," ",Object(N.jsx)(S.d,{color:"secondary",onClick:function(t){return e.toggleModal("new")},children:"\u0110\xf3ng"})]})]}),Object(N.jsxs)(T.a,{isOpen:this.state.modalDelete,toggle:function(t){return e.setState({modalDelete:!e.state.modalDelete,delete:null})},className:this.props.className,children:[Object(N.jsx)(f.a,{toggle:function(t){return e.setState({modalDelete:!e.state.modalDelete,delete:null})},children:"Xo\xe1"}),Object(N.jsx)(j.a,{children:Object(N.jsx)("label",{htmlFor:"tag",children:"X\xe1c nh\u1eadn x\xf3a !!!"})}),Object(N.jsxs)(A.a,{children:[Object(N.jsx)(S.d,{color:"primary",onClick:function(t){return e.delete()},disabled:this.state.isLoading,children:"Xo\xe1"})," ",Object(N.jsx)(S.d,{color:"secondary",onClick:function(t){return e.setState({modalDelete:!e.state.modalDelete,delete:null})},children:"\u0110\xf3ng"})]})]})]})}}]),a}(h.Component),w=Object(v.css)(n||(n=Object(i.a)(["\n  display: block;\n  margin: 0 auto;\n  border-color: red;\n"]))),M={pagination:{marginRight:"5px"},flexLabel:{width:100},flexOption:{width:300},a:{textDecoration:"none"},floatRight:{float:"right",marginTop:"3px"},spinner:{width:"30px"},center:{textAlign:"center"},tbody:{height:"380px",overflowY:"auto"},wh25:{width:"25%",float:"left",height:"80px"},w5:{width:"15%",float:"left",height:"80px"},wa10:{width:"5%",float:"left",height:"80px"},row:{float:"left",width:"100%"},success:{color:"green"},danger:{color:"red"},mgl5:{marginLeft:"5px"},tags:{float:"right",marginRight:"5px"},searchInput:{width:"190px",display:"inline-block"},userActive:{color:"green"},userPending:{color:"red"},nagemonNameCol:{width:"328px"},image:{width:"100px",height:"100px",borderRadius:"99999px"}};t.default=C},639:function(e,t,a){"use strict";t.a={BASE_URL:"https://api.thulamua.com",GHTK_URL:"https://services.ghtklab.com",LOGIN:"/api/login",LIST_USER:"/api/list_user",ADD_USER:"/api/add_user",UPDATE_USER:"/api/update_user",DELETE_USER:"/api/delete_user",UPLOAD_AVATAR:"/api/upload_avatar",LIST_CATEGORY:"/api/list_category",ADD_CATEGORY:"/api/add_category",UPDATE_CATEGORY:"/api/update_category",DELETE_CATEGORY:"/api/delete_category",UPLOAD_CATEGORY:"/api/upload_category",LIST_BRAND:"/api/list_brand",ADD_BRAND:"/api/add_brand",UPDATE_BRAND:"/api/update_brand",DELETE_BRAND:"/api/delete_brand",UPLOAD_BRAND:"/api/upload_brand",LIST_PRODUCT:"/api/list_product",LIST_PRODUCT_CATEGORY:"/api/list_product_category",ADD_PRODUCT:"/api/add_product",UPDATE_PRODUCT:"/api/update_product",DELETE_PRODUCT:"/api/delete_product",UPLOAD_PRODUCT:"/api/upload_product",UPLOAD_PRODUCT_MULTIPLE:"/api/upload_product_multiple",LIST_ORDER:"/api/list_order",GET_DETAIL_TRANSPORT:"/api/get_detail_transport",GET_LIST_TRANSPORT:"/api/get_list_transport",LIST_ORDER_DETAIL:"/api/list_order_detail",LIST_ORDER_BY_USER:"/api/list_order_by_user",ADD_ORDER:"/api/add_order",PRINT_ORDER:"/api/print_order",LIST_DEAL:"/api/list_deal",ADD_DEAL:"/api/add_deal",UPDATE_DEAL:"/api/update_deal",DELETE_DEAL:"/api/delete_deal",UPLOAD_DEAL:"/api/upload_deal",LIST_COUNT_ORDER:"/api/list_count_order",LIST_BANNER:"/api/get_banner",GET_BANNER_BY_ID:"/api/get_banner_by_id",ADD_BANNER:"/api/add_banners",UPADTE_BANNER:"/api/update_banner",DELETE_BANNER:"/api/delete_banner",UPLOAD_BANNER:"/api/upload_banner",LIST_SEO_INFO:"/api/get_seo_info",GET_SEO_INFO_BY_PRODUCT:"/api/get_seo_info_by_product",ADD_SEO_INFO:"/api/add_seo_info",UPDATE_SEO_INFO:"/api/update_seo_info",DELETE_SEO_INFOR:"/api/delete_seo_info",UPLOAD_SEO_INFO:"/api/upload_seo_info",LIST_MULTI_IMAGE:"/api/get_multi_image",LIST_IMAGE_BY_PRODUCT:"/api/get_multi_image_by_product",ADD_MULTI_IMAGE:"/api/add_multi_image",UPDATE_MULTI_IMAGE:"/api/update_multi_image",UPLOAD_MULTI_IMAGE:"/api/upload_multi_image",LIST_SUGGEST_ITEM:"/itemSdk",LIST_SUGGEST_ITEM_COMPANY:"/itemSdk/",LIST_SUGGEST_ITEM_ADMIN:"/itemSdk/admin/",SEARCH_SUGGEST_ITEM_ADMIN:"/itemSdk/admin/search/",SEARCH_SUGGEST_ITEM_COMPANY:"/itemSdk/search/",ADD_SUGGEST_ITEM:"/itemSdk",UPDATE_SUGGEST_ITEM:"/itemSdk/",UPLOAD_IMAGE:"/itemSdk/upload_image",UPLOAD_IMAGE_MAKEUP:"/itemSdk/upload_image_makeup",UPLOAD_IMAGE_BRAND:"/itemSdk/upload_image_brand",DELETE_SUGGEST_ITEM:"/itemSdk/deleteItem",LIST_SDK:"/sdk",LIST_BRAND_MAKEUP:"/brands",LIST_BRAND_COMPANY_MAKEUP:"/brands/",ADD_BRAND_MAKEUP:"/add-brand",UPDATE_BRAND_MAKEUP:"/update-brand",DELETE_BRAND_MAKEUP:"/delete-brand",LIST_BRAND_PLUGIN:"/brand-plugin",LIST_BRAND_PLUGIN_COMPANY:"/brand-plugin/",ADD_BRAND_PLUGIN:"/add-brand-plugin",UPDATE_BRAND_PLUGIN:"/update-brand-plugin",DELETE_BRAND_PLUGIN:"/delete-brand-plugin",LIST_PRODUCT_MAKEUP:"/product",LIST_PRODUCT_HAIR_MAKEUP:"/product_hair",LIST_PRODUCT_COMPANY_MAKEUP:"/product/",LIST_PRODUCT_COMPANY_HAIR_MAKEUP:"/product_hair/",ADD_PRODUCT_MAKEUP:"/add-product",ADD_PRODUCT_HAIR_MAKEUP:"/add-product-hair",UPDATE_PRODUCT_MAKEUP:"/update-product",DELETE_PRODUCT_MAKEUP:"/delete-product",LIST_TYPE:"/types",LIST_TYPE_COMPANY:"/types/",ADD_TYPE:"/add-type",UPDATE_TYPE:"/update-type",DELETE_TYPE:"/delete-type",LIST_COLOR:"/colors",LIST_COLOR_COMPANY:"/colors/",LIST_COLOR_SELECT:"/color-select",ADD_COLOR:"/add-color",UPDATE_COLOR:"/update-color",DELETE_COLOR:"/delete-color",LIST_HISTORY_SKIN:"/api/get-history-skin",LIST_HISTORY_SKIN_BY_CONDITION:"/api/get-history-skin-by-condition",ADD_HISTORY_SKIN:"/api/add-history-skin",LIST_TYPE_PRODUCT:"/api/list-type-product",ADD_TYPE_PRODUCT:"/api/add-type-product",UPDATE_TYPE_PRODUCT:"/api/update-type-product",DELETE_TYPE_PRODUCT:"/api/delete-type-product",LIST_TYPE_SDK:"/api/list-type-sdk",ADD_TYPE_SDK:"/api/add-type-sdk",UPDATE_TYPE_SDK:"/api/update-type-sdk",DELETE_TYPE_SDK:"/api/delete-type-sdk"}},648:function(e,t,a){"use strict";var n=a(113),i=a.n(n),r=a(642),s=a(639),c=a(647).default;c.defaults.baseURL=s.a.BASE_URL;var l=function(){var e=Object(r.a)(i.a.mark((function e(){var t,a,n,r,s,l,o,d,u,p=arguments;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=p.length>0&&void 0!==p[0]?p[0]:"",a=p.length>1&&void 0!==p[1]?p[1]:{},n=p.length>2&&void 0!==p[2]?p[2]:"",r=p.length>3?p[3]:void 0,s={},n&&(s={headers:n}),e.prev=6,e.t0=r,e.next="GET"===e.t0?10:"POST"===e.t0?16:"PUT"===e.t0?22:"DELETE"===e.t0?28:34;break;case 10:return e.next=12,c.get(t,a,s);case 12:if(0!=(l=e.sent).is_success){e.next=15;break}return e.abrupt("return",null);case 15:return e.abrupt("return",l.data);case 16:return e.next=18,c.post(t,a,s);case 18:if(0!=(o=e.sent).is_success){e.next=21;break}return e.abrupt("return",null);case 21:return e.abrupt("return",o.data);case 22:return e.next=24,c.put(t,a,s);case 24:if(0!=(d=e.sent).is_success){e.next=27;break}return e.abrupt("return",null);case 27:return e.abrupt("return",d.data);case 28:return e.next=30,c.delete(t,a,s);case 30:if(0!=(u=e.sent).is_success){e.next=33;break}return e.abrupt("return",null);case 33:return e.abrupt("return",u.data);case 34:e.next=39;break;case 36:return e.prev=36,e.t1=e.catch(6),e.abrupt("return",e.t1);case 39:case"end":return e.stop()}}),e,null,[[6,36]])})));return function(){return e.apply(this,arguments)}}();t.a=l},649:function(e,t,a){"use strict";a(2);var n=a(641),i=a.n(n),r=a(17),s=function(e){var t=e.field,a=e.value,n=e.label,s=e.error,c=e.type,l=e.onChange,o=e.checkUserExists,d=e.readOnly,u=e.placeholder,p=e.onClick;return Object(r.jsxs)("div",{className:i()("form-group",{"has-error":s}),children:[Object(r.jsx)("label",{className:"control-label",children:n}),Object(r.jsx)("input",{onChange:l,onClick:p,onBlur:o,value:a,type:c,name:t,placeholder:u,readOnly:d,className:"form-control"}),s&&Object(r.jsx)("span",{className:"help-block",children:s})]})};s.defaultProps={type:"text"},t.a=s},662:function(e,t,a){"use strict";var n=a(12),i=a(29),r=a(651),s=a(35),c=a(2),l=a.n(c),o=a(64),d=a.n(o),u=a(641),p=a.n(u),h=a(646),_={children:d.a.node,type:d.a.string,size:d.a.oneOfType([d.a.number,d.a.string]),bsSize:d.a.string,valid:d.a.bool,invalid:d.a.bool,tag:h.n,innerRef:d.a.oneOfType([d.a.object,d.a.func,d.a.string]),plaintext:d.a.bool,addon:d.a.bool,className:d.a.string,cssModule:d.a.object},m=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(r.a)(a)),a.focus=a.focus.bind(Object(r.a)(a)),a}Object(s.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.focus=function(){this.ref&&this.ref.focus()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,r=e.type,s=e.bsSize,c=e.valid,o=e.invalid,d=e.tag,u=e.addon,_=e.plaintext,m=e.innerRef,g=Object(i.a)(e,["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"]),b=["radio","checkbox"].indexOf(r)>-1,O=new RegExp("\\D","g"),E=d||("select"===r||"textarea"===r?r:"input"),D="form-control";_?(D+="-plaintext",E=d||"input"):"file"===r?D+="-file":"range"===r?D+="-range":b&&(D=u?null:"form-check-input"),g.size&&O.test(g.size)&&(Object(h.p)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),s=g.size,delete g.size);var T=Object(h.j)(p()(t,o&&"is-invalid",c&&"is-valid",!!s&&"form-control-"+s,D),a);return("input"===E||d&&"function"===typeof d)&&(g.type=r),g.children&&!_&&"select"!==r&&"string"===typeof E&&"select"!==E&&(Object(h.p)('Input with a type of "'+r+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete g.children),l.a.createElement(E,Object(n.a)({},g,{ref:m,className:T,"aria-invalid":o}))},t}(l.a.Component);m.propTypes=_,m.defaultProps={type:"text"},t.a=m}}]);
//# sourceMappingURL=18.8c5bc48f.chunk.js.map