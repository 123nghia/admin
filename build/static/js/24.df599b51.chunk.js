(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[24],{1033:function(e,t,a){"use strict";a.r(t);var r,i=a(653),n=a(113),c=a.n(n),_=a(642),d=a(165),s=a(166),l=a(168),p=a(167),o=a(2),u=(a(643),a(1015)),O=a(1016),T=a(1024),E=a(1025),D=a(1026),b=(a(644),a(648)),A=a(1045),j=(a(654),a(639)),S=(a(649),a(652)),L=a(655),h=a.n(L),R=a(17),I=function(e){Object(l.a)(a,e);var t=Object(p.a)(a);function a(e){var r;return Object(d.a)(this,a),(r=t.call(this,e)).getData=Object(_.a)(c.a.mark((function e(){var t,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.setState({isLoading:!0}),e.next=3,Object(b.a)(j.a.LIST_COUNT_ORDER,{},"","POST");case 3:t=e.sent,a=t.data,r.pagination(a),r.setState({dataApi:a,isLoading:!1});case 7:case"end":return e.stop()}}),e)}))),r.state={data:[],key:"",modalCom:!1,dataApi:[],hidden:!1,action:"new",modalDelete:!1,delete:null,arrPagination:[],indexPage:0,token:{Authorization:"Bearer ".concat(localStorage.getItem("token"))},isLoading:!1},r}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=Object(_.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.getData();case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"pagination",value:function(e){var t,a,r,i=[];for(t=0,a=e.length;t<a;t+=5)r=e.slice(t,t+5),i.push(r);0==i.length?this.setState({hidden:!1}):this.setState({hidden:!0}),this.setState({arrPagination:i,data:i[0]})}},{key:"render",value:function(){var e=this,t=this.state,a=t.data,r=t.arrPagination;t.key;return this.state.isLoading?Object(R.jsx)("div",{className:"sweet-loading",children:Object(R.jsx)(h.a,{css:P,size:50,color:"#123abc",loading:this.state.isLoading,speedMultiplier:1.5})}):Object(R.jsx)("div",{className:"animated fadeIn",children:Object(R.jsx)(u.a,{children:Object(R.jsxs)(O.a,{children:[Object(R.jsxs)(T.a,{children:[Object(R.jsxs)(E.a,{children:[Object(R.jsx)("i",{className:"fa fa-align-justify"})," Danh s\xe1ch danh m\u1ee5c"]}),Object(R.jsx)(D.a,{children:Object(R.jsxs)("table",{ble:!0,className:"table table-hover table-outline mb-0 d-none d-sm-table",children:[Object(R.jsx)("thead",{className:"thead-light",children:Object(R.jsxs)("tr",{children:[Object(R.jsx)("th",{className:"text-center",children:"STT."}),Object(R.jsx)("th",{className:"text-center",children:"S\u1ea3n ph\u1ea9m"}),Object(R.jsx)("th",{className:"text-center",children:"M\xe3 \u0111\u01a1n h\xe0ng"}),Object(R.jsx)("th",{className:"text-center",children:"L\u01b0\u1ee3t mua"})]})}),Object(R.jsxs)("tbody",{children:[Object(R.jsx)("td",{colSpan:"10",hidden:this.state.hidden,className:"text-center",children:"Kh\xf4ng t\xecm th\u1ea5y d\u1eef li\u1ec7u"}),void 0!=a?a.map((function(e,t){return Object(R.jsxs)("tr",{children:[Object(R.jsx)("td",{className:"text-center",children:t+1}),Object(R.jsx)("td",{className:"text-center",children:e.product_data.name}),Object(R.jsx)("td",{className:"text-center",children:e.order_id}),Object(R.jsx)("td",{className:"text-center",children:e.count})]},t)})):""]})]})})]}),Object(R.jsx)("div",{style:{float:"right"},children:Object(R.jsx)(A.a,{count:r.length,color:"primary",onChange:function(t,a){e.setState({data:r[a-1],indexPage:a-1})}})})]})})})}}]),a}(o.Component),P=Object(S.css)(r||(r=Object(i.a)(["\n  display: block;\n  margin: 0 auto;\n  border-color: red;\n"])));t.default=I},639:function(e,t,a){"use strict";var r,i=a(164);t.a=(r={BASE_URL:"https://api.thulamua.com",GHTK_URL:"https://services.ghtklab.com",LOGIN:"/api/login",LIST_USER:"/api/list_user",ADD_USER:"/api/add_user",UPDATE_USER:"/api/update_user",DELETE_USER:"/api/delete_user",UPLOAD_AVATAR:"/api/upload_avatar",LIST_CATEGORY:"/api/list_category",ADD_CATEGORY:"/api/add_category",UPDATE_CATEGORY:"/api/update_category",DELETE_CATEGORY:"/api/delete_category",UPLOAD_CATEGORY:"/api/upload_category",LIST_BRAND:"/api/list_brand",ADD_BRAND:"/api/add_brand",UPDATE_BRAND:"/api/update_brand",DELETE_BRAND:"/api/delete_brand",UPLOAD_BRAND:"/api/upload_brand",LIST_PRODUCT:"/api/list_product",LIST_PRODUCT_CATEGORY:"/api/list_product_category",ADD_PRODUCT:"/api/add_product",UPDATE_PRODUCT:"/api/update_product",DELETE_PRODUCT:"/api/delete_product",UPLOAD_PRODUCT:"/api/upload_product",UPLOAD_PRODUCT_MULTIPLE:"/api/upload_product_multiple",LIST_ORDER:"/api/list_order",GET_DETAIL_TRANSPORT:"/api/get_detail_transport",GET_LIST_TRANSPORT:"/api/get_list_transport",LIST_ORDER_DETAIL:"/api/list_order_detail",LIST_ORDER_BY_USER:"/api/list_order_by_user",ADD_ORDER:"/api/add_order",PRINT_ORDER:"/api/print_order",LIST_DEAL:"/api/list_deal",ADD_DEAL:"/api/add_deal",UPDATE_DEAL:"/api/update_deal",DELETE_DEAL:"/api/delete_deal",UPLOAD_DEAL:"/api/upload_deal",LIST_COUNT_ORDER:"/api/list_count_order",LIST_BANNER:"/api/get_banner",GET_BANNER_BY_ID:"/api/get_banner_by_id",ADD_BANNER:"/api/add_banners",UPADTE_BANNER:"/api/update_banner",DELETE_BANNER:"/api/delete_banner",UPLOAD_BANNER:"/api/upload_banner",LIST_SEO_INFO:"/api/get_seo_info",GET_SEO_INFO_BY_PRODUCT:"/api/get_seo_info_by_product",ADD_SEO_INFO:"/api/add_seo_info",UPDATE_SEO_INFO:"/api/update_seo_info",DELETE_SEO_INFOR:"/api/delete_seo_info",UPLOAD_SEO_INFO:"/api/upload_seo_info",LIST_MULTI_IMAGE:"/api/get_multi_image",LIST_IMAGE_BY_PRODUCT:"/api/get_multi_image_by_product",ADD_MULTI_IMAGE:"/api/add_multi_image",UPDATE_MULTI_IMAGE:"/api/update_multi_image",UPLOAD_MULTI_IMAGE:"/api/upload_multi_image",LIST_SUGGEST_ITEM:"/itemSdk",LIST_SUGGEST_ITEM_COMPANY:"/itemSdk/",LIST_SUGGEST_ITEM_ADMIN:"/itemSdk/admin/",SEARCH_SUGGEST_ITEM_ADMIN:"/itemSdk/admin/search/",SEARCH_SUGGEST_ITEM_COMPANY:"/itemSdk/search/",ADD_SUGGEST_ITEM:"/itemSdk",UPDATE_SUGGEST_ITEM:"/itemSdk/",UPLOAD_IMAGE:"/itemSdk/upload_image",UPLOAD_IMAGE_MAKEUP:"/itemSdk/upload_image_makeup",UPLOAD_IMAGE_BRAND:"/itemSdk/upload_image_brand",DELETE_SUGGEST_ITEM:"/itemSdk/deleteItem",LIST_SDK:"/sdk"},Object(i.a)(r,"LIST_BRAND","/brands"),Object(i.a)(r,"LIST_BRAND_COMPANY","/brands/"),Object(i.a)(r,"ADD_BRAND","/add-brand"),Object(i.a)(r,"UPDATE_BRAND","/update-brand"),Object(i.a)(r,"DELETE_BRAND","/delete-brand"),Object(i.a)(r,"LIST_BRAND_PLUGIN","/brand-plugin"),Object(i.a)(r,"LIST_BRAND_PLUGIN_COMPANY","/brand-plugin/"),Object(i.a)(r,"ADD_BRAND_PLUGIN","/add-brand-plugin"),Object(i.a)(r,"UPDATE_BRAND_PLUGIN","/update-brand-plugin"),Object(i.a)(r,"DELETE_BRAND_PLUGIN","/delete-brand-plugin"),Object(i.a)(r,"LIST_PRODUCT","/product"),Object(i.a)(r,"LIST_PRODUCT_HAIR","/product_hair"),Object(i.a)(r,"LIST_PRODUCT_COMPANY","/product/"),Object(i.a)(r,"LIST_PRODUCT_COMPANY_HAIR","/product_hair/"),Object(i.a)(r,"ADD_PRODUCT","/add-product"),Object(i.a)(r,"ADD_PRODUCT_HAIR","/add-product-hair"),Object(i.a)(r,"UPDATE_PRODUCT","/update-product"),Object(i.a)(r,"DELETE_PRODUCT","/delete-product"),Object(i.a)(r,"LIST_TYPE","/types"),Object(i.a)(r,"LIST_TYPE_COMPANY","/types/"),Object(i.a)(r,"ADD_TYPE","/add-type"),Object(i.a)(r,"UPDATE_TYPE","/update-type"),Object(i.a)(r,"DELETE_TYPE","/delete-type"),Object(i.a)(r,"LIST_COLOR","/colors"),Object(i.a)(r,"LIST_COLOR_COMPANY","/colors/"),Object(i.a)(r,"LIST_COLOR_SELECT","/color-select"),Object(i.a)(r,"ADD_COLOR","/add-color"),Object(i.a)(r,"UPDATE_COLOR","/update-color"),Object(i.a)(r,"DELETE_COLOR","/delete-color"),Object(i.a)(r,"LIST_HISTORY_SKIN","/api/get-history-skin"),Object(i.a)(r,"LIST_HISTORY_SKIN_BY_CONDITION","/api/get-history-skin-by-condition"),Object(i.a)(r,"ADD_HISTORY_SKIN","/api/add-history-skin"),Object(i.a)(r,"LIST_TYPE_PRODUCT","/api/list-type-product"),Object(i.a)(r,"ADD_TYPE_PRODUCT","/api/add-type-product"),Object(i.a)(r,"UPDATE_TYPE_PRODUCT","/api/update-type-product"),Object(i.a)(r,"DELETE_TYPE_PRODUCT","/api/delete-type-product"),Object(i.a)(r,"LIST_TYPE_SDK","/api/list-type-sdk"),Object(i.a)(r,"ADD_TYPE_SDK","/api/add-type-sdk"),Object(i.a)(r,"UPDATE_TYPE_SDK","/api/update-type-sdk"),Object(i.a)(r,"DELETE_TYPE_SDK","/api/delete-type-sdk"),r)},648:function(e,t,a){"use strict";var r=a(113),i=a.n(r),n=a(642),c=a(639),_=a(647).default;_.defaults.baseURL=c.a.BASE_URL;var d=function(){var e=Object(n.a)(i.a.mark((function e(){var t,a,r,n,c,d,s,l,p,o=arguments;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=o.length>0&&void 0!==o[0]?o[0]:"",a=o.length>1&&void 0!==o[1]?o[1]:{},r=o.length>2&&void 0!==o[2]?o[2]:"",n=o.length>3?o[3]:void 0,c={},r&&(c={headers:r}),e.prev=6,e.t0=n,e.next="GET"===e.t0?10:"POST"===e.t0?16:"PUT"===e.t0?22:"DELETE"===e.t0?28:34;break;case 10:return e.next=12,_.get(t,a,c);case 12:if(0!=(d=e.sent).is_success){e.next=15;break}return e.abrupt("return",null);case 15:return e.abrupt("return",d.data);case 16:return e.next=18,_.post(t,a,c);case 18:if(0!=(s=e.sent).is_success){e.next=21;break}return e.abrupt("return",null);case 21:return e.abrupt("return",s.data);case 22:return e.next=24,_.put(t,a,c);case 24:if(0!=(l=e.sent).is_success){e.next=27;break}return e.abrupt("return",null);case 27:return e.abrupt("return",l.data);case 28:return e.next=30,_.delete(t,a,c);case 30:if(0!=(p=e.sent).is_success){e.next=33;break}return e.abrupt("return",null);case 33:return e.abrupt("return",p.data);case 34:e.next=39;break;case 36:return e.prev=36,e.t1=e.catch(6),e.abrupt("return",e.t1);case 39:case"end":return e.stop()}}),e,null,[[6,36]])})));return function(){return e.apply(this,arguments)}}();t.a=d},649:function(e,t,a){"use strict";a(2);var r=a(641),i=a.n(r),n=a(17),c=function(e){var t=e.field,a=e.value,r=e.label,c=e.error,_=e.type,d=e.onChange,s=e.checkUserExists,l=e.readOnly,p=e.placeholder,o=e.onClick;return Object(n.jsxs)("div",{className:i()("form-group",{"has-error":c}),children:[Object(n.jsx)("label",{className:"control-label",children:r}),Object(n.jsx)("input",{onChange:d,onClick:o,onBlur:s,value:a,type:_,name:t,placeholder:p,readOnly:l,className:"form-control"}),c&&Object(n.jsx)("span",{className:"help-block",children:c})]})};c.defaultProps={type:"text"},t.a=c}}]);
//# sourceMappingURL=24.df599b51.chunk.js.map