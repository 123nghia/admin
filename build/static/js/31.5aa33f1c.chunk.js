(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[31],{1031:function(e,t,a){"use strict";a.r(t);var n,r=a(653),c=a(164),s=a(113),i=a.n(s),d=a(642),l=a(165),o=a(166),h=a(168),_=a(167),u=a(2),p=a(1015),b=a(1016),j=a(1024),O=a(1025),g=a(1026),T=a(1048),x=a(1010),m=a(1011),D=a(1012),E=a(644),S=a(648),A=a(1045),N=(a(654),a(639)),L=a(652),R=(a(647),a(655)),f=a.n(R),P=a(988),I=(a(941),a(17)),y=function(e){Object(h.a)(a,e);var t=Object(_.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).getData=Object(d.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.setState({isLoading:!0}),e.next=3,Object(S.a)(N.a.LIST_ORDER,{},"","POST");case 3:t=e.sent,a=t.data,n.pagination(a),n.setState({dataApi:a,isLoading:!1});case 7:case"end":return e.stop()}}),e)}))),n.onDetail=function(){var e=Object(d.a)(i.a.mark((function e(t,a){var r,c,s,d;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.setState({modalCom:!n.state.modalCom}),e.next=3,Object(S.a)(N.a.LIST_ORDER_DETAIL,{id:t},"","POST");case 3:if(r=e.sent,c=r.data.list_product,s=r.data.order_id.transport_id,d={fee:0,insurance_fee:0,label:"",status_id:0},void 0==s){e.next=12;break}return e.next=10,Object(S.a)(N.a.GET_DETAIL_TRANSPORT+"?id="+s,{},"","GET");case 10:d=(d=e.sent).data.res_order;case 12:console.log({area:2,estimated_deliver_time:"S\xe1ng 2021-10-29",estimated_pick_time:"Chi\u1ec1u 2021-10-28",fee:24650,insurance_fee:6650,is_xfast:0,label:"S1788269.300062636",partner_id:"617a4326f563bf1da5911eb5",products:[],sorting_code:"",status_id:1,tracking_id:300062636}),n.setState({dataDetail:c,objOrder:r.data.order_id,objTransport:d,name_customer:a});case 14:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),n.onDetailOrder=function(){var e=Object(d.a)(i.a.mark((function e(t){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(S.a)(N.a.PRINT_ORDER+"?label="+t,{},"","GET");case 2:a=e.sent,console.log(a);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.state={data:[],key:"",modalCom:!1,dataApi:[],hidden:!1,action:"new",modalDelete:!1,delete:null,arrPagination:[],indexPage:0,token:{Authorization:"Bearer ".concat(localStorage.getItem("token"))},type:localStorage.getItem("type"),isLoading:!1,dataDetail:[],objOrder:{},objTransport:{},name_customer:""},n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=Object(d.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.getData();case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"pagination",value:function(e){var t,a,n,r=[];for(t=0,a=e.length;t<a;t+=5)n=e.slice(t,t+5),r.push(n);0==r.length?this.setState({hidden:!1}):this.setState({hidden:!0}),this.setState({arrPagination:r,data:r[0]})}},{key:"searchKey",value:function(){var e=this.state,t=e.indexPage,a=e.key;if(""!=a){var n=[];this.state.dataApi.map((function(e){e.name.toLocaleUpperCase().includes(a.toLocaleUpperCase())&&n.push(e)})),this.setState({data:n})}else this.setState({data:this.state.arrPagination[t]})}},{key:"actionSearch",value:function(e,t){var a=this;this.setState(Object(c.a)({},t,e.target.value),(function(){a.searchKey()}))}},{key:"resetSearch",value:function(){var e=this;this.setState({key:""},(function(){e.searchKey()}))}},{key:"setContent",value:function(e,t){switch(t){case"1":switch(e){case"0":return"Thanh to\xe1n VNPay";case"1":return"Thanh to\xe1n b\u1eb1ng ti\u1ec1n m\u1eb7t"}break;case"2":switch(e){case"0":return"Giao h\xe0ng ti\u1ebft ki\u1ec7m"}break;case"3":switch(e){case"0":return"Ch\u01b0a thanh to\xe1n";case"1":return"\u0110\xe3 thanh to\xe1n"}break;case"4":switch(e){case"00":return"Th\xe0nh c\xf4ng";default:return"Ch\u01b0a x\xe1c nh\u1eadn"}}}},{key:"setContentGHTK",value:function(e){switch(e){case"-1":return"H\u1ee7y \u0111\u01a1n h\xe0ng";case"1":return"Ch\u01b0a ti\u1ebfp nh\u1eadn";case"2":return"\u0110\xe3 ti\u1ebfp nh\u1eadn";case"3":return"\u0110\xe3 l\u1ea5y h\xe0ng/\u0110\xe3 nh\u1eadp kho";case"4":return"\u0110\xe3 \u0111i\u1ec1u ph\u1ed1i giao h\xe0ng/\u0110ang giao h\xe0ng";case"5":return"\u0110\xe3 giao h\xe0ng/Ch\u01b0a \u0111\u1ed1i so\xe1t";case"6":return"\u0110\xe3 \u0111\u1ed1i so\xe1t";case"7":return"Kh\xf4ng l\u1ea5y \u0111\u01b0\u1ee3c h\xe0ng";case"8":return"Ho\xe3n l\u1ea5y h\xe0ng";case"9":return"Kh\xf4ng giao \u0111\u01b0\u1ee3c h\xe0ng";case"10":return"Delay giao h\xe0ng";case"11":return"\u0110\xe3 \u0111\u1ed1i so\xe1t c\xf4ng n\u1ee3 tr\u1ea3 h\xe0ng";case"12":return"\u0110\xe3 \u0111i\u1ec1u ph\u1ed1i l\u1ea5y h\xe0ng/\u0110ang l\u1ea5y h\xe0ng";case"13":return"\u0110\u01a1n ha\u0300ng b\xf4\u0300i hoa\u0300n";case"14":return"\u0110ang tr\u1ea3 h\xe0ng (COD c\u1ea7m h\xe0ng \u0111i tr\u1ea3)";case"15":return"\u0110\xe3 tr\u1ea3 h\xe0ng (COD \u0111\xe3 tr\u1ea3 xong h\xe0ng)";case"16":return"Shipper b\xe1o \u0111\xe3 l\u1ea5y h\xe0ng";case"17":return"Shipper (nh\xe2n vi\xean l\u1ea5y/giao h\xe0ng) b\xe1o kh\xf4ng l\u1ea5y \u0111\u01b0\u1ee3c h\xe0ng";case"18":return"Shipper b\xe1o delay l\u1ea5y h\xe0ng";case"19":return"Shipper b\xe1o \u0111\xe3 giao h\xe0ng";case"20":return"Shipper b\xe1o kh\xf4ng giao \u0111\u01b0\u1ee3c giao h\xe0ng";case"21":return"Shipper b\xe1o delay giao h\xe0ng";default:return"Ch\u01b0a ti\u1ebfp nh\u1eadn"}}},{key:"render",value:function(){var e=this,t=this.state,a=t.data,n=t.arrPagination,r=t.dataDetail,c=t.isLoading,s=t.hidden,l=t.modalCom,o=t.objOrder,h=t.name_customer,_=t.objTransport;return c?Object(I.jsx)("div",{className:"sweet-loading",children:Object(I.jsx)(f.a,{css:U,size:50,color:"#123abc",loading:c,speedMultiplier:1.5})}):Object(I.jsxs)("div",{className:"animated fadeIn",children:[Object(I.jsx)(p.a,{children:Object(I.jsxs)(b.a,{children:[Object(I.jsxs)(j.a,{children:[Object(I.jsxs)(O.a,{children:[Object(I.jsx)("i",{className:"fa fa-align-justify"})," Danh s\xe1ch \u0111\u01a1n h\xe0ng"]}),Object(I.jsx)(g.a,{children:Object(I.jsxs)("table",{ble:!0,className:"table table-hover table-outline mb-0 d-none d-sm-table",children:[Object(I.jsx)("thead",{className:"thead-light",children:Object(I.jsxs)("tr",{children:[Object(I.jsx)("th",{className:"text-center",children:"STT."}),Object(I.jsx)("th",{className:"text-center",children:"T\xean ng\u01b0\u1eddi d\xf9ng"}),Object(I.jsx)("th",{className:"text-center",children:"M\xe3 \u0111\u01a1n h\xe0ng"}),Object(I.jsx)("th",{className:"text-center",children:"T\u1ed5ng"}),Object(I.jsx)("th",{className:"text-center",children:"T\u1ea1o ng\xe0y"}),Object(I.jsx)("th",{className:"text-center",children:"#"})]})}),Object(I.jsxs)("tbody",{children:[Object(I.jsx)("td",{colSpan:"10",hidden:s,className:"text-center",children:"Kh\xf4ng t\xecm th\u1ea5y d\u1eef li\u1ec7u"}),void 0!=a?a.map((function(t,a){return Object(I.jsxs)("tr",{children:[Object(I.jsx)("td",{className:"text-center",children:a+1}),Object(I.jsx)("td",{className:"text-center",children:t.user_id.username}),Object(I.jsx)("td",{className:"text-center",children:t._id}),Object(I.jsx)("td",{className:"text-center",children:t.total}),Object(I.jsx)("td",{className:"text-center",children:new Date(t.create_at).toLocaleDateString()+" "+new Date(t.create_at).toLocaleTimeString()}),Object(I.jsxs)("td",{className:"text-center",children:[Object(I.jsx)(E.d,{style:C.mgl5,outline:!0,color:"primary",size:"sm",onClick:function(){var a=Object(d.a)(i.a.mark((function a(n){return i.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.onDetail(t.detail_id,t.user_id.username);case 2:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}(),children:"Chi ti\u1ebft"}),Object(I.jsx)(E.d,{style:C.mgl5,outline:!0,color:"primary",size:"sm",disabled:void 0==t.transport_id,onClick:function(){var a=Object(d.a)(i.a.mark((function a(n){return i.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:e.onDetailOrder(t.transport_id.res_order.label);case 1:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}(),children:"In \u0111\u01a1n h\xe0ng"})]})]},a)})):""]})]})})]}),Object(I.jsx)("div",{style:{float:"right"},children:Object(I.jsx)(A.a,{count:n.length,color:"primary",onChange:function(t,a){e.setState({data:n[a-1],indexPage:a-1})}})})]})}),Object(I.jsxs)(T.a,{size:"xl",isOpen:l,children:[Object(I.jsx)(x.a,{children:Object(I.jsx)(E.T,{children:Object(I.jsx)(E.p,{lg:"12",sm:"12",children:Object(I.jsxs)(E.T,{children:[Object(I.jsxs)(E.p,{lg:"6",sm:"12",children:[Object(I.jsx)("strong",{children:"T\xean kh\xe1ch h\xe0ng: "}),Object(I.jsxs)("p",{style:{color:"red"},children:[" ",h," "]})]}),Object(I.jsxs)(E.p,{lg:"6",sm:"12",children:[Object(I.jsx)("strong",{children:"Ph\u01b0\u01a1ng th\u1ee9c thanh to\xe1n:"}),Object(I.jsxs)("p",{style:{color:"red"},children:[" ",this.setContent(o.payment_method,"1")," "]})]}),Object(I.jsxs)(E.p,{lg:"6",sm:"12",children:[Object(I.jsx)("strong",{children:"Ph\u01b0\u01a1ng th\u1ee9c v\u1eadn chuy\u1ec3n:"}),Object(I.jsxs)("p",{style:{color:"red"},children:[" ",this.setContent(o.transport_method,"2")," "]})]}),Object(I.jsxs)(E.p,{lg:"6",sm:"12",children:[Object(I.jsx)("strong",{children:"Tr\u1ea1ng th\xe1i \u0111\u01a1n h\xe0ng:"}),Object(I.jsxs)("p",{style:{color:"red"},children:[" ",this.setContent(o.status,"3")]})]}),Object(I.jsxs)(E.p,{lg:"6",sm:"12",children:[Object(I.jsx)("strong",{children:"Tr\u1ea1ng th\xe1i \u0111\u01a1n h\xe0ng ti\u1ebft ki\u1ec7m nhanh:"}),Object(I.jsxs)("p",{style:{color:"red"},children:[" ",this.setContent(o.status_tkn,"4")]})]})]})})})}),Object(I.jsx)(m.a,{children:Object(I.jsxs)(P.d,{children:[Object(I.jsxs)(P.b,{children:[Object(I.jsx)(P.a,{children:"Th\xf4ng tin \u0111\u01a1n h\xe0ng"}),Object(I.jsxs)(P.a,{disabled:void 0==o.transport_id,children:["Chi ti\u1ebft v\u1eadn chuy\u1ec3n ",void 0==o.transport_id?"(\u0110\xe3 \u1ea9n)":""]})]}),Object(I.jsx)(P.c,{children:Object(I.jsxs)("table",{ble:!0,className:"table table-hover table-outline mb-0 d-none d-sm-table",children:[Object(I.jsx)("thead",{className:"thead-light",children:Object(I.jsxs)("tr",{children:[Object(I.jsx)("th",{className:"text-center",children:"STT."}),Object(I.jsx)("th",{className:"text-center",children:"T\xean s\u1ea3n ph\u1ea9m"}),Object(I.jsx)("th",{className:"text-center",children:"H\xecnh \u1ea3nh"}),Object(I.jsx)("th",{className:"text-center",children:"Th\u01b0\u01a1ng hi\u1ec7u"}),Object(I.jsx)("th",{className:"text-center",children:"Danh m\u1ee5c"}),Object(I.jsx)("th",{className:"text-center",children:"S\u1ed1 l\u01b0\u1ee3ng"}),Object(I.jsx)("th",{className:"text-center",children:"Gi\xe1"})]})}),Object(I.jsxs)("tbody",{children:[Object(I.jsx)("td",{colSpan:"10",hidden:s,className:"text-center",children:"Kh\xf4ng t\xecm th\u1ea5y d\u1eef li\u1ec7u"}),void 0!=r?r.map((function(e,t){return Object(I.jsxs)("tr",{children:[Object(I.jsx)("td",{className:"text-center",children:t+1}),Object(I.jsx)("td",{className:"text-center",children:e.product_id.name}),Object(I.jsx)("td",{className:"text-center",children:""==e.image||null==e.image?Object(I.jsx)("img",{src:"https://www.chanchao.com.tw/VietnamPrintPack/images/default.jpg",width:"60px",height:"60px"}):Object(I.jsx)("img",{src:"".concat(N.a.BASE_URL,"/public/image_product/").concat(e.image),width:"80px",height:"60px"})}),Object(I.jsx)("td",{className:"text-center",children:e.product_id.brand_id.name}),Object(I.jsx)("td",{className:"text-center",children:e.product_id.category_id.name}),Object(I.jsx)("td",{className:"text-center",children:e.quantity}),Object(I.jsx)("td",{className:"text-center",children:e.price*e.quantity})]},t)})):""]})]})}),Object(I.jsx)(P.c,{children:Object(I.jsxs)("table",{ble:!0,className:"table table-hover table-outline mb-0 d-none d-sm-table",children:[Object(I.jsx)("thead",{className:"thead-light",children:Object(I.jsxs)("tr",{children:[Object(I.jsx)("th",{className:"text-center",children:"M\xe3 \u0111\u01a1n h\xe0ng TIKITECH"}),Object(I.jsx)("th",{className:"text-center",children:"M\xe3 \u0111\u01a1n h\xe0ng GHTK"}),Object(I.jsx)("th",{className:"text-center",children:"Tr\u1ea1ng th\xe1i \u0111\u01a1n h\xe0ng"}),Object(I.jsx)("th",{className:"text-center",children:"Ph\xed ship"}),Object(I.jsx)("th",{className:"text-center",children:"Ph\xed b\u1ea3o hi\u1ec3m"})]})}),Object(I.jsx)("tbody",{children:Object(I.jsxs)("tr",{children:[Object(I.jsx)("td",{className:"text-center",children:_.partner_id}),Object(I.jsx)("td",{className:"text-center",children:_.label}),Object(I.jsx)("td",{className:"text-center",children:this.setContentGHTK(_.status_id)}),Object(I.jsx)("td",{className:"text-center",children:_.fee}),Object(I.jsx)("td",{className:"text-center",children:_.insurance_fee})]})})]})})]})}),Object(I.jsx)(D.a,{children:Object(I.jsx)(E.d,{color:"secondary",onClick:function(t){e.setState({modalCom:!l})},children:"\u0110\xf3ng"})})]})]})}}]),a}(u.Component),U=Object(L.css)(n||(n=Object(r.a)(["\n  display: block;\n  margin: 0 auto;\n  border-color: red;\n"]))),C={pagination:{marginRight:"5px"},flexLabel:{width:100},flexOption:{width:300},a:{textDecoration:"none"},floatRight:{float:"right",marginTop:"3px"},spinner:{width:"30px"},center:{textAlign:"center"},tbody:{height:"380px",overflowY:"auto"},wh25:{width:"25%",float:"left",height:"80px"},w5:{width:"15%",float:"left",height:"80px"},wa10:{width:"5%",float:"left",height:"80px"},row:{float:"left",width:"100%"},success:{color:"green"},danger:{color:"red"},mgl5:{margin:"5px"},tags:{float:"right",marginRight:"5px"},searchInput:{width:"190px",display:"inline-block"},userActive:{color:"green"},userPending:{color:"red"},nagemonNameCol:{width:"328px"},image:{width:"100px",height:"100px",borderRadius:"99999px"}};t.default=y},639:function(e,t,a){"use strict";var n,r=a(164);t.a=(n={BASE_URL:"https://api.thulamua.com",GHTK_URL:"https://services.ghtklab.com",LOGIN:"/api/login",LIST_USER:"/api/list_user",ADD_USER:"/api/add_user",UPDATE_USER:"/api/update_user",DELETE_USER:"/api/delete_user",UPLOAD_AVATAR:"/api/upload_avatar",LIST_CATEGORY:"/api/list_category",ADD_CATEGORY:"/api/add_category",UPDATE_CATEGORY:"/api/update_category",DELETE_CATEGORY:"/api/delete_category",UPLOAD_CATEGORY:"/api/upload_category",LIST_BRAND:"/api/list_brand",ADD_BRAND:"/api/add_brand",UPDATE_BRAND:"/api/update_brand",DELETE_BRAND:"/api/delete_brand",UPLOAD_BRAND:"/api/upload_brand",LIST_PRODUCT:"/api/list_product",LIST_PRODUCT_CATEGORY:"/api/list_product_category",ADD_PRODUCT:"/api/add_product",UPDATE_PRODUCT:"/api/update_product",DELETE_PRODUCT:"/api/delete_product",UPLOAD_PRODUCT:"/api/upload_product",UPLOAD_PRODUCT_MULTIPLE:"/api/upload_product_multiple",LIST_ORDER:"/api/list_order",GET_DETAIL_TRANSPORT:"/api/get_detail_transport",GET_LIST_TRANSPORT:"/api/get_list_transport",LIST_ORDER_DETAIL:"/api/list_order_detail",LIST_ORDER_BY_USER:"/api/list_order_by_user",ADD_ORDER:"/api/add_order",PRINT_ORDER:"/api/print_order",LIST_DEAL:"/api/list_deal",ADD_DEAL:"/api/add_deal",UPDATE_DEAL:"/api/update_deal",DELETE_DEAL:"/api/delete_deal",UPLOAD_DEAL:"/api/upload_deal",LIST_COUNT_ORDER:"/api/list_count_order",LIST_BANNER:"/api/get_banner",GET_BANNER_BY_ID:"/api/get_banner_by_id",ADD_BANNER:"/api/add_banners",UPADTE_BANNER:"/api/update_banner",DELETE_BANNER:"/api/delete_banner",UPLOAD_BANNER:"/api/upload_banner",LIST_SEO_INFO:"/api/get_seo_info",GET_SEO_INFO_BY_PRODUCT:"/api/get_seo_info_by_product",ADD_SEO_INFO:"/api/add_seo_info",UPDATE_SEO_INFO:"/api/update_seo_info",DELETE_SEO_INFOR:"/api/delete_seo_info",UPLOAD_SEO_INFO:"/api/upload_seo_info",LIST_MULTI_IMAGE:"/api/get_multi_image",LIST_IMAGE_BY_PRODUCT:"/api/get_multi_image_by_product",ADD_MULTI_IMAGE:"/api/add_multi_image",UPDATE_MULTI_IMAGE:"/api/update_multi_image",UPLOAD_MULTI_IMAGE:"/api/upload_multi_image",LIST_SUGGEST_ITEM:"/itemSdk",LIST_SUGGEST_ITEM_COMPANY:"/itemSdk/",LIST_SUGGEST_ITEM_ADMIN:"/itemSdk/admin/",SEARCH_SUGGEST_ITEM_ADMIN:"/itemSdk/admin/search/",SEARCH_SUGGEST_ITEM_COMPANY:"/itemSdk/search/",ADD_SUGGEST_ITEM:"/itemSdk",UPDATE_SUGGEST_ITEM:"/itemSdk/",UPLOAD_IMAGE:"/itemSdk/upload_image",UPLOAD_IMAGE_MAKEUP:"/itemSdk/upload_image_makeup",UPLOAD_IMAGE_BRAND:"/itemSdk/upload_image_brand",DELETE_SUGGEST_ITEM:"/itemSdk/deleteItem",LIST_SDK:"/sdk"},Object(r.a)(n,"LIST_BRAND","/brands"),Object(r.a)(n,"LIST_BRAND_COMPANY","/brands/"),Object(r.a)(n,"ADD_BRAND","/add-brand"),Object(r.a)(n,"UPDATE_BRAND","/update-brand"),Object(r.a)(n,"DELETE_BRAND","/delete-brand"),Object(r.a)(n,"LIST_BRAND_PLUGIN","/brand-plugin"),Object(r.a)(n,"LIST_BRAND_PLUGIN_COMPANY","/brand-plugin/"),Object(r.a)(n,"ADD_BRAND_PLUGIN","/add-brand-plugin"),Object(r.a)(n,"UPDATE_BRAND_PLUGIN","/update-brand-plugin"),Object(r.a)(n,"DELETE_BRAND_PLUGIN","/delete-brand-plugin"),Object(r.a)(n,"LIST_PRODUCT","/product"),Object(r.a)(n,"LIST_PRODUCT_HAIR","/product_hair"),Object(r.a)(n,"LIST_PRODUCT_COMPANY","/product/"),Object(r.a)(n,"LIST_PRODUCT_COMPANY_HAIR","/product_hair/"),Object(r.a)(n,"ADD_PRODUCT","/add-product"),Object(r.a)(n,"ADD_PRODUCT_HAIR","/add-product-hair"),Object(r.a)(n,"UPDATE_PRODUCT","/update-product"),Object(r.a)(n,"DELETE_PRODUCT","/delete-product"),Object(r.a)(n,"LIST_TYPE","/types"),Object(r.a)(n,"LIST_TYPE_COMPANY","/types/"),Object(r.a)(n,"ADD_TYPE","/add-type"),Object(r.a)(n,"UPDATE_TYPE","/update-type"),Object(r.a)(n,"DELETE_TYPE","/delete-type"),Object(r.a)(n,"LIST_COLOR","/colors"),Object(r.a)(n,"LIST_COLOR_COMPANY","/colors/"),Object(r.a)(n,"LIST_COLOR_SELECT","/color-select"),Object(r.a)(n,"ADD_COLOR","/add-color"),Object(r.a)(n,"UPDATE_COLOR","/update-color"),Object(r.a)(n,"DELETE_COLOR","/delete-color"),Object(r.a)(n,"LIST_HISTORY_SKIN","/api/get-history-skin"),Object(r.a)(n,"LIST_HISTORY_SKIN_BY_CONDITION","/api/get-history-skin-by-condition"),Object(r.a)(n,"ADD_HISTORY_SKIN","/api/add-history-skin"),Object(r.a)(n,"LIST_TYPE_PRODUCT","/api/list-type-product"),Object(r.a)(n,"ADD_TYPE_PRODUCT","/api/add-type-product"),Object(r.a)(n,"UPDATE_TYPE_PRODUCT","/api/update-type-product"),Object(r.a)(n,"DELETE_TYPE_PRODUCT","/api/delete-type-product"),Object(r.a)(n,"LIST_TYPE_SDK","/api/list-type-sdk"),Object(r.a)(n,"ADD_TYPE_SDK","/api/add-type-sdk"),Object(r.a)(n,"UPDATE_TYPE_SDK","/api/update-type-sdk"),Object(r.a)(n,"DELETE_TYPE_SDK","/api/delete-type-sdk"),n)},648:function(e,t,a){"use strict";var n=a(113),r=a.n(n),c=a(642),s=a(639),i=a(647).default;i.defaults.baseURL=s.a.BASE_URL;var d=function(){var e=Object(c.a)(r.a.mark((function e(){var t,a,n,c,s,d,l,o,h,_=arguments;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=_.length>0&&void 0!==_[0]?_[0]:"",a=_.length>1&&void 0!==_[1]?_[1]:{},n=_.length>2&&void 0!==_[2]?_[2]:"",c=_.length>3?_[3]:void 0,s={},n&&(s={headers:n}),e.prev=6,e.t0=c,e.next="GET"===e.t0?10:"POST"===e.t0?16:"PUT"===e.t0?22:"DELETE"===e.t0?28:34;break;case 10:return e.next=12,i.get(t,a,s);case 12:if(0!=(d=e.sent).is_success){e.next=15;break}return e.abrupt("return",null);case 15:return e.abrupt("return",d.data);case 16:return e.next=18,i.post(t,a,s);case 18:if(0!=(l=e.sent).is_success){e.next=21;break}return e.abrupt("return",null);case 21:return e.abrupt("return",l.data);case 22:return e.next=24,i.put(t,a,s);case 24:if(0!=(o=e.sent).is_success){e.next=27;break}return e.abrupt("return",null);case 27:return e.abrupt("return",o.data);case 28:return e.next=30,i.delete(t,a,s);case 30:if(0!=(h=e.sent).is_success){e.next=33;break}return e.abrupt("return",null);case 33:return e.abrupt("return",h.data);case 34:e.next=39;break;case 36:return e.prev=36,e.t1=e.catch(6),e.abrupt("return",e.t1);case 39:case"end":return e.stop()}}),e,null,[[6,36]])})));return function(){return e.apply(this,arguments)}}();t.a=d}}]);
//# sourceMappingURL=31.5aa33f1c.chunk.js.map