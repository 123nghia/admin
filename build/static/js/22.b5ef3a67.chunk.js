(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[22],{1036:function(e,a,t){"use strict";t.r(a);var r=t(169),s=t(113),n=t.n(s),i=t(646),c=t(165),o=t(166),d=t(168),l=t(167),p=t(2),u=t(1012),h=t(1013),A=t(685),b=t(814),m=t.n(b),O=t(788),j=t.n(O);var R=t(652),E=t.n(R),g=t(641),x=t(667),T=t(910),_=t.n(T),D=t(645),L=t(643),y=t(17),v=function(e){Object(d.a)(t,e);var a=Object(l.a)(t);function t(e){var r;return Object(c.a)(this,t),(r=a.call(this,e)).state={username:"",password:"",errors:{},isLoading:!1},localStorage.removeItem("auth"),"/logout"===r.props.location.pathname&&(window.location.href="#/login"),r}return Object(o.a)(t,[{key:"isValid",value:function(){var e=function(e){var a={};return m.a.isEmpty(e.username)&&(a.username="Please enter username"),m.a.isEmpty(e.password)&&(a.password="Please enter password"),{errors:a,isValid:j()(a)}}(this.state),a=e.errors,t=e.isValid;return t||this.setState({errors:a}),t}},{key:"onSubmit",value:function(){var e=Object(i.a)(n.a.mark((function e(a){var t,r;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),!this.isValid()){e.next=7;break}return this.setState({errors:{},isLoading:!0}),e.next=5,E()({baseURL:g.a.BASE_URL,url:g.a.LOGIN,method:"POST",data:{username:this.state.username,password:_()(this.state.password)}});case 5:(t=e.sent).data.is_success?(r=t.data.data.token,localStorage.setItem("user",JSON.stringify({username:this.state.username,password:this.state.password})),localStorage.setItem("auth","abv"),localStorage.setItem("token",r),this.props.history.push("/dashboard")):(console.log(this.state.username),console.log(this.state.password),this.setState({isLoading:!1,errors:{common:"T\xean \u0111\u0103ng nh\u1eadp ho\u1eb7c m\u1eadt kh\u1ea9u kh\xf4ng ch\xednh x\xe1c"}}));case 7:case"end":return e.stop()}}),e,this)})));return function(a){return e.apply(this,arguments)}}()},{key:"onChange",value:function(e,a){this.setState(Object(r.a)({},a,e.target.value))}},{key:"render",value:function(){var e=this,a=this.state,t=a.errors,r=a.isLoading;return Object(y.jsx)("div",{className:"c-app c-default-layout flex-row align-items-center",children:Object(y.jsx)(D.r,{children:Object(y.jsx)(D.Q,{className:"justify-content-center",children:Object(y.jsx)(D.p,{md:"8",children:Object(y.jsxs)(D.h,{children:[Object(y.jsx)(D.e,{className:"p-4",children:Object(y.jsx)(D.f,{children:Object(y.jsxs)("form",{onSubmit:function(){var a=Object(i.a)(n.a.mark((function a(t){return n.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.onSubmit(t);case 2:return a.abrupt("return",a.sent);case 3:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}(),children:[Object(y.jsx)("h1",{children:"\u0110\u0103ng nh\u1eadp"}),Object(y.jsx)("span",{style:{color:"red"},className:"error",children:t.common}),Object(y.jsxs)(D.J,{className:"mb-3",children:[Object(y.jsx)(D.L,{children:Object(y.jsx)(D.M,{children:Object(y.jsx)(L.a,{name:"cil-user"})})}),Object(y.jsx)(D.H,{type:"text",placeholder:"T\xean \u0111\u0103ng nh\u1eadp",name:"username",onChange:function(a){return e.onChange(a,"username")},autoComplete:"name"})]}),Object(y.jsxs)(D.J,{className:"mb-4",children:[Object(y.jsx)(D.L,{children:Object(y.jsx)(D.M,{children:Object(y.jsx)(L.a,{name:"cil-lock-locked"})})}),Object(y.jsx)(D.H,{type:"password",placeholder:"M\u1eadt kh\u1ea9u",onChange:function(a){return e.onChange(a,"password")}})]}),Object(y.jsxs)(u.a,{children:[Object(y.jsx)(h.a,{xs:"6",lg:"6",sm:"6",children:Object(y.jsx)(A.a,{color:"primary",className:"px-4",disabled:r,children:"\u0110\u0103ng nh\u1eadp"})}),Object(y.jsx)(D.p,{xs:"6",lg:"6",sm:"6",className:"text-right",children:Object(y.jsx)(D.d,{color:"link",className:"px-0",onClick:function(){window.location.href="#/change_password"},children:"Qu\xean m\u1eadt kh\u1ea9u?"})})]})]})})}),Object(y.jsxs)(D.e,{className:"bg-primary py-5 d-md-down-none",style:{width:"44%"},children:[Object(y.jsx)("img",{style:{alignSelf:"center"},height:"20px",width:"130px",src:x.a}),Object(y.jsx)(D.f,{className:"text-center",children:Object(y.jsxs)("div",{children:[Object(y.jsx)("h2",{children:"\u0110\u0103ng k\xfd"}),Object(y.jsx)("p",{children:"B\u1ea1n mu\u1ed1n t\u1ea1o t\xe0i kho\u1ea3n \u0111\u1ec3 s\u1eed d\u1ee5ng d\u1ecbch v\u1ee5 c\u1ee7a TiKiTech. H\xe3y tham gia c\xf9ng ch\xfang t\xf4i ngay b\xean d\u01b0\u1edbi."}),Object(y.jsx)("a",{href:"https://applamdep.com/",target:"_blank",children:Object(y.jsx)(D.d,{color:"primary",className:"mt-3",active:!0,tabIndex:-1,children:"\u0110\u0103ng k\xfd ngay"})})]})})]})]})})})})})}}]),t}(p.Component);a.default=v},641:function(e,a,t){"use strict";a.a={BASE_URL:"https://api.thulamua.com",GHTK_URL:"https://services.ghtklab.com",LOGIN:"/api/login",LIST_USER:"/api/list_user",ADD_USER:"/api/add_user",UPDATE_USER:"/api/update_user",DELETE_USER:"/api/delete_user",UPLOAD_AVATAR:"/api/upload_avatar",LIST_CATEGORY:"/api/list_category",ADD_CATEGORY:"/api/add_category",UPDATE_CATEGORY:"/api/update_category",DELETE_CATEGORY:"/api/delete_category",UPLOAD_CATEGORY:"/api/upload_category",LIST_BRAND:"/api/list_brand",ADD_BRAND:"/api/add_brand",UPDATE_BRAND:"/api/update_brand",DELETE_BRAND:"/api/delete_brand",UPLOAD_BRAND:"/api/upload_brand",LIST_PRODUCT:"/api/list_product",LIST_PRODUCT_CATEGORY:"/api/list_product_category",ADD_PRODUCT:"/api/add_product",UPDATE_PRODUCT:"/api/update_product",DELETE_PRODUCT:"/api/delete_product",UPLOAD_PRODUCT:"/api/upload_product",UPLOAD_PRODUCT_MULTIPLE:"/api/upload_product_multiple",LIST_ORDER:"/api/list_order",LIST_ORDER_DETAIL:"/api/list_order_detail",LIST_ORDER_BY_USER:"/api/list_order_by_user",ADD_ORDER:"/api/add_order",PRINT_ORDER:"/api/print_order",LIST_DEAL:"/api/list_deal",ADD_DEAL:"/api/add_deal",UPDATE_DEAL:"/api/update_deal",DELETE_DEAL:"/api/delete_deal",UPLOAD_DEAL:"/api/upload_deal",LIST_COUNT_ORDER:"/api/list_count_order",LIST_BANNER:"/api/get_banner",GET_BANNER_BY_ID:"/api/get_banner_by_id",ADD_BANNER:"/api/add_banners",UPADTE_BANNER:"/api/update_banner",DELETE_BANNER:"/api/delete_banner",UPLOAD_BANNER:"/api/upload_banner"}},667:function(e,a,t){"use strict";a.a="data:image/png;base64,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"}}]);
//# sourceMappingURL=22.b5ef3a67.chunk.js.map