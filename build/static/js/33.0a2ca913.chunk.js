(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[33],{1051:function(e,t,a){"use strict";a.r(t);var r=a(168),i=a(113),s=a.n(i),n=a(643),d=a(164),_=a(165),p=a(167),c=a(166),o=a(2),l=a(1016),A=a(1017),T=a(690),E=a(820),u=a.n(E),D=a(794),O=a.n(D);var R=a(649),h=a.n(R),S=a(640),L=a(671),m=a(916),I=a.n(m),P=a(645),b=a(644),U=a(17),g=function(e){Object(p.a)(a,e);var t=Object(c.a)(a);function a(e){var r;return Object(d.a)(this,a),(r=t.call(this,e)).state={username:"",password:"",errors:{},isLoading:!1},localStorage.removeItem("auth"),"/logout"===r.props.location.pathname&&(window.location.href="#/login"),r}return Object(_.a)(a,[{key:"isValid",value:function(){var e=function(e){var t={};return u.a.isEmpty(e.username)&&(t.username="Please enter username"),u.a.isEmpty(e.password)&&(t.password="Please enter password"),{errors:t,isValid:O()(t)}}(this.state),t=e.errors,a=e.isValid;return a||this.setState({errors:t}),a}},{key:"onSubmit",value:function(){var e=Object(n.a)(s.a.mark((function e(t){var a,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!this.isValid()){e.next=7;break}return this.setState({errors:{},isLoading:!0}),e.next=5,h()({baseURL:S.a.BASE_URL,url:S.a.LOGIN,method:"POST",data:{username:this.state.username,password:I()(this.state.password)}});case 5:(a=e.sent).data.is_success?(r=a.data.data.token,localStorage.setItem("user",JSON.stringify({username:this.state.username,password:this.state.password})),localStorage.setItem("auth","abv"),localStorage.setItem("token",r),this.props.history.push("/dashboard")):(console.log(this.state.username),console.log(this.state.password),this.setState({isLoading:!1,errors:{common:"T\xean \u0111\u0103ng nh\u1eadp ho\u1eb7c m\u1eadt kh\u1ea9u kh\xf4ng ch\xednh x\xe1c"}}));case 7:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"onChange",value:function(e,t){this.setState(Object(r.a)({},t,e.target.value))}},{key:"render",value:function(){var e=this,t=this.state,a=t.errors,r=t.isLoading;return Object(U.jsx)("div",{className:"c-app c-default-layout flex-row align-items-center",children:Object(U.jsx)(P.r,{children:Object(U.jsx)(P.T,{className:"justify-content-center",children:Object(U.jsx)(P.p,{md:"8",children:Object(U.jsxs)(P.h,{children:[Object(U.jsx)(P.e,{className:"p-4",children:Object(U.jsx)(P.f,{children:Object(U.jsxs)("form",{onSubmit:function(){var t=Object(n.a)(s.a.mark((function t(a){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.onSubmit(a);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),children:[Object(U.jsx)("h1",{children:"\u0110\u0103ng nh\u1eadp"}),Object(U.jsx)("span",{style:{color:"red"},className:"error",children:a.common}),Object(U.jsxs)(P.K,{className:"mb-3",children:[Object(U.jsx)(P.M,{children:Object(U.jsx)(P.N,{children:Object(U.jsx)(b.a,{name:"cil-user"})})}),Object(U.jsx)(P.H,{type:"text",placeholder:"T\xean \u0111\u0103ng nh\u1eadp",name:"username",onChange:function(t){return e.onChange(t,"username")},autoComplete:"name"})]}),Object(U.jsxs)(P.K,{className:"mb-4",children:[Object(U.jsx)(P.M,{children:Object(U.jsx)(P.N,{children:Object(U.jsx)(b.a,{name:"cil-lock-locked"})})}),Object(U.jsx)(P.H,{type:"password",placeholder:"M\u1eadt kh\u1ea9u",onChange:function(t){return e.onChange(t,"password")}})]}),Object(U.jsxs)(l.a,{children:[Object(U.jsx)(A.a,{xs:"6",lg:"6",sm:"6",children:Object(U.jsx)(T.a,{color:"primary",className:"px-4",disabled:r,children:"\u0110\u0103ng nh\u1eadp"})}),Object(U.jsx)(P.p,{xs:"6",lg:"6",sm:"6",className:"text-right",children:Object(U.jsx)(P.d,{color:"link",className:"px-0",onClick:function(){window.location.href="#/change_password"},children:"Qu\xean m\u1eadt kh\u1ea9u?"})})]})]})})}),Object(U.jsxs)(P.e,{className:"bg-primary py-5 d-md-down-none",style:{width:"44%"},children:[Object(U.jsx)("img",{style:{alignSelf:"center"},height:"20px",width:"130px",src:L.a}),Object(U.jsx)(P.f,{className:"text-center",children:Object(U.jsxs)("div",{children:[Object(U.jsx)("h2",{children:"\u0110\u0103ng k\xfd"}),Object(U.jsx)("p",{children:"B\u1ea1n mu\u1ed1n t\u1ea1o t\xe0i kho\u1ea3n \u0111\u1ec3 s\u1eed d\u1ee5ng d\u1ecbch v\u1ee5 c\u1ee7a TiKiTech. H\xe3y tham gia c\xf9ng ch\xfang t\xf4i ngay b\xean d\u01b0\u1edbi."}),Object(U.jsx)("a",{href:"https://applamdep.com/",target:"_blank",children:Object(U.jsx)(P.d,{color:"primary",className:"mt-3",active:!0,tabIndex:-1,children:"\u0110\u0103ng k\xfd ngay"})})]})})]})]})})})})})}}]),a}(o.Component);t.default=g},640:function(e,t,a){"use strict";t.a={BASE_URL:"https://api.thulamua.com",GHTK_URL:"https://services.ghtklab.com",LOGIN:"/api/login",LIST_USER:"/api/list_user",ADD_USER:"/api/add_user",UPDATE_USER:"/api/update_user",DELETE_USER:"/api/delete_user",UPLOAD_AVATAR:"/api/upload_avatar",LIST_CATEGORY:"/api/list_category",ADD_CATEGORY:"/api/add_category",UPDATE_CATEGORY:"/api/update_category",DELETE_CATEGORY:"/api/delete_category",UPLOAD_CATEGORY:"/api/upload_category",LIST_BRAND:"/api/list_brand",ADD_BRAND:"/api/add_brand",UPDATE_BRAND:"/api/update_brand",DELETE_BRAND:"/api/delete_brand",UPLOAD_BRAND:"/api/upload_brand",LIST_PRODUCT:"/api/list_product",LIST_PRODUCT_CATEGORY:"/api/list_product_category",LIST_PRODUCT_BY_BRAND:"/api/list_product_by_brand",ADD_PRODUCT:"/api/add_product",UPDATE_PRODUCT:"/api/update_product",DELETE_PRODUCT:"/api/delete_product",UPLOAD_PRODUCT:"/api/upload_product",UPLOAD_PRODUCT_MULTIPLE:"/api/upload_product_multiple",LIST_ORDER:"/api/list_order",GET_DETAIL_TRANSPORT:"/api/get_detail_transport",GET_LIST_TRANSPORT:"/api/get_list_transport",LIST_ORDER_DETAIL:"/api/list_order_detail",LIST_ORDER_BY_USER:"/api/list_order_by_user",ADD_ORDER:"/api/add_order",PRINT_ORDER:"/api/print_order",LIST_DEAL:"/api/list_deal",ADD_DEAL:"/api/add_deal",UPDATE_DEAL:"/api/update_deal",DELETE_DEAL:"/api/delete_deal",UPLOAD_DEAL:"/api/upload_deal",LIST_COUNT_ORDER:"/api/list_count_order",LIST_BANNER:"/api/get_banner",GET_BANNER_BY_ID:"/api/get_banner_by_id",ADD_BANNER:"/api/add_banners",UPADTE_BANNER:"/api/update_banner",DELETE_BANNER:"/api/delete_banner",UPLOAD_BANNER:"/api/upload_banner",LIST_SEO_INFO:"/api/get_seo_info",GET_SEO_INFO_BY_PRODUCT:"/api/get_seo_info_by_product",ADD_SEO_INFO:"/api/add_seo_info",UPDATE_SEO_INFO:"/api/update_seo_info",DELETE_SEO_INFOR:"/api/delete_seo_info",UPLOAD_SEO_INFO:"/api/upload_seo_info",LIST_MULTI_IMAGE:"/api/get_multi_image",LIST_IMAGE_BY_PRODUCT:"/api/get_multi_image_by_product",ADD_MULTI_IMAGE:"/api/add_multi_image",UPDATE_MULTI_IMAGE:"/api/update_multi_image",UPLOAD_MULTI_IMAGE:"/api/upload_multi_image",LIST_SUGGEST_ITEM:"/itemSdk",LIST_SUGGEST_ITEM_COMPANY:"/itemSdk/",LIST_SUGGEST_ITEM_ADMIN:"/itemSdk/admin/",SEARCH_SUGGEST_ITEM_ADMIN:"/itemSdk/admin/search/",SEARCH_SUGGEST_ITEM_COMPANY:"/itemSdk/search/",ADD_SUGGEST_ITEM:"/itemSdk",UPDATE_SUGGEST_ITEM:"/itemSdk/",UPLOAD_IMAGE:"/itemSdk/upload_image",UPLOAD_IMAGE_MAKEUP:"/itemSdk/upload_image_makeup",UPLOAD_IMAGE_BRAND:"/itemSdk/upload_image_brand",DELETE_SUGGEST_ITEM:"/itemSdk/deleteItem",LIST_SDK:"/sdk",LIST_BRAND_MAKEUP:"/brands",LIST_BRAND_COMPANY_MAKEUP:"/brands/",ADD_BRAND_MAKEUP:"/add-brand",UPDATE_BRAND_MAKEUP:"/update-brand",DELETE_BRAND_MAKEUP:"/delete-brand",LIST_BRAND_PLUGIN:"/brand-plugin",LIST_BRAND_PLUGIN_COMPANY:"/brand-plugin/",ADD_BRAND_PLUGIN:"/add-brand-plugin",UPDATE_BRAND_PLUGIN:"/update-brand-plugin",DELETE_BRAND_PLUGIN:"/delete-brand-plugin",LIST_PRODUCT_MAKEUP:"/product",LIST_PRODUCT_HAIR_MAKEUP:"/product_hair",LIST_PRODUCT_COMPANY_MAKEUP:"/product/",LIST_PRODUCT_COMPANY_HAIR_MAKEUP:"/product_hair/",ADD_PRODUCT_MAKEUP:"/add-product",ADD_PRODUCT_HAIR_MAKEUP:"/add-product-hair",UPDATE_PRODUCT_MAKEUP:"/update-product",DELETE_PRODUCT_MAKEUP:"/delete-product",LIST_TYPE:"/types",LIST_TYPE_COMPANY:"/types/",ADD_TYPE:"/add-type",UPDATE_TYPE:"/update-type",DELETE_TYPE:"/delete-type",LIST_COLOR:"/colors",LIST_COLOR_COMPANY:"/colors/",LIST_COLOR_SELECT:"/color-select",ADD_COLOR:"/add-color",UPDATE_COLOR:"/update-color",DELETE_COLOR:"/delete-color",LIST_HISTORY_SKIN:"/api/get-history-skin",LIST_HISTORY_SKIN_BY_CONDITION:"/api/get-history-skin-by-condition",ADD_HISTORY_SKIN:"/api/add-history-skin",LIST_TYPE_PRODUCT:"/api/list-type-product",ADD_TYPE_PRODUCT:"/api/add-type-product",UPDATE_TYPE_PRODUCT:"/api/update-type-product",DELETE_TYPE_PRODUCT:"/api/delete-type-product",LIST_TYPE_SDK:"/api/list-type-sdk",ADD_TYPE_SDK:"/api/add-type-sdk",UPDATE_TYPE_SDK:"/api/update-type-sdk",DELETE_TYPE_SDK:"/api/delete-type-sdk",LIST_PRIORITY:"/api/get-list-priority",ADD_PRIORITY:"/api/add-priority",UPDATE_PRIORITY:"/api/update-priority",DELETE_PRIORITY:"/api/delete-priority",UPLOAD_PRIORITY:"/api/upload-priority"}},671:function(e,t,a){"use strict";t.a="data:image/png;base64,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"}}]);
//# sourceMappingURL=33.0a2ca913.chunk.js.map