(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[37],{1265:function(e,t,a){"use strict";a.r(t);var n,r=a(675),i=a(165),c=a(114),s=a.n(c),o=a(649),l=a(167),d=a(168),p=a(170),u=a(169),h=a(2),b=a(666),_=a(667),O=a(668),g=a(669),j=a(670),f=a(672),E=a(692),T=a(653),m=a(661),D=(a(662),a(686),a(643)),y=a(655),S=a.n(y),L=a(796),x=a(674),A=a(676),I=a.n(A),P=a(17),R=new Headers,N=localStorage.getItem("auth");R.append("Authorization","Bearer "+N),R.append("Content-Type","application/json");var C=function(e){Object(p.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).getData=Object(o.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.setState({isLoading:!0}),e.next=3,S()({baseURL:D.a.BASE_URL,url:D.a.PLUGIN_GET_USER_BYID,method:"POST",headers:n.state.token});case 3:t=e.sent,a=t.data.data,n.setState({dataApi:a,data:a,currentPassword:a.Password,isLoading:!1,current_slug:a.Company_Id.Slug,companyID:a.Company_Id._id});case 6:case"end":return e.stop()}}),e)}))),n.getPackageName=function(){var e=Object(o.a)(s.a.mark((function e(t){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S()({baseURL:D.a.BASE_URL,url:D.a.PLUGIN_DATA_PACKAGE,method:"POST",data:{package_id:t}});case 2:return a=e.sent,e.abrupt("return",a.data.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.state={data:[],updated:"",dataApi:[],action:"new",delete:null,arrPagination:[],indexPage:0,hidden:!0,token:{Authorization:"Bearer ".concat(localStorage.getItem("token"))},role:localStorage.getItem("role"),type:localStorage.getItem("type"),company_id:localStorage.getItem("user"),toggleView:!1,company_name:"",arrDetailPackage:[],phone_number:"",current_slug:"",companyID:"",arrTotalPackage:[],isChange:!0,isChangeSlug:!0,currentPassword:"",isLoading:!1},n}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(o.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(this.getData(),t=JSON.parse(localStorage.getItem("url")),a=0;a<t.length;a++)"#"+t[a].to==window.location.hash&&1==t[a].hidden&&(window.location.href="#/");case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getBadge",value:function(e){switch(e){case"Actived":return"success";case"Deactived":return"danger";default:return"primary"}}},{key:"onChange",value:function(e,t){this.setState(Object(i.a)({},e,t))}},{key:"openUpdate",value:function(e){this.setState(Object(i.a)({},e,!this.state[e]))}},{key:"getPackageData",value:function(){var e=Object(o.a)(s.a.mark((function e(t){var a,n,r,i,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=[],e.next=3,S()({baseURL:D.a.BASE_URL,url:D.a.LIST_PLUGIN_ORDER_BY_ID,method:"POST",headers:this.state.token});case 3:n=e.sent,r=n.data.data.result,i=0;case 6:if(!(i<r.length)){e.next=17;break}return e.next=9,this.getPackageName(r[i].Package_Id);case 9:c=e.sent,r[i].Name=c.Name,r[i].Unit=c.Unit,r[i].Value=c.Value,a.push(r[i]);case 14:i++,e.next=6;break;case 17:return this.setState({arrTotalPackage:a}),e.abrupt("return",a);case 19:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"onView",value:function(){var e=Object(o.a)(s.a.mark((function e(t,a,n){var r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getPackageData(a);case 2:r=e.sent,this.setState({toggleView:!this.state.toggleView,company_name:t,arrDetailPackage:0==r.length?[]:r[0].Array_Feature,phone_number:n});case 4:case"end":return e.stop()}}),e,this)})));return function(t,a,n){return e.apply(this,arguments)}}()},{key:"renderDetailPackage",value:function(){var e=this;return Object(P.jsxs)("table",{ble:!0,className:"table table-hover table-outline mb-0 d-none d-sm-table",children:[Object(P.jsx)("thead",{className:"thead-light",children:Object(P.jsxs)("tr",{children:[Object(P.jsx)("th",{className:"text-center",children:"STT."}),Object(P.jsx)("th",{className:"text-center",children:"T\xean d\u1ecbch v\u1ee5"}),Object(P.jsx)("th",{className:"text-center",children:"\u0110\u01b0\u1eddng d\u1eabn"}),Object(P.jsx)("th",{className:"text-center",children:"#"})]})}),Object(P.jsxs)("tbody",{children:[0==this.state.arrDetailPackage.length?Object(P.jsx)("td",{colSpan:"10",hidden:!1,className:"text-center",children:"Kh\xf4ng t\xecm th\u1ea5y d\u1eef li\u1ec7u"}):Object(P.jsx)("td",{colSpan:"10",hidden:!0,className:"text-center",children:"Kh\xf4ng t\xecm th\u1ea5y d\u1eef li\u1ec7u"}),void 0!=this.state.arrDetailPackage||0!=this.state.arrDetailPackage.length||null!=this.state.arrDetailPackage?this.state.arrDetailPackage.map((function(t,a){return Object(P.jsxs)("tr",{children:[Object(P.jsx)("td",{className:"text-center",children:a+1}),Object(P.jsx)("td",{className:"text-center",children:t.Key}),Object(P.jsx)("td",{className:"text-center",children:t.Value+e.state.current_slug}),Object(P.jsx)("td",{className:"text-center",children:Object(P.jsx)(T.hb,{content:"Copy",children:Object(P.jsx)(L.CopyToClipboard,{text:t.Value+e.state.current_slug,onCopy:function(){},children:Object(P.jsx)(m.a,{name:"cil-pencil"})})})})]},a)})):""]})]})}},{key:"convertUnitToDate",value:function(e){switch(e){case"0":return"Ng\xe0y";case"1":return"Th\xe1ng";case"2":return"N\u0103m"}}},{key:"CalculatorDateLeft",value:function(e,t){return Math.ceil(Math.abs(new Date(t)-new Date(e))/864e5)}},{key:"inputChange",value:function(e){this.setState(Object(i.a)({},e.target.name,e.target.value))}},{key:"calDateLeft",value:function(e,t){return this.CalculatorDateLeft(new Date(e),new Date(t))}},{key:"getBadgeStatus",value:function(e){switch(e){case"0":return"danger";case"1":return"success";default:return"primary"}}},{key:"getStatus",value:function(e){switch(e){case"0":return"Ch\u1edd duy\u1ec7t";case"1":return"\u0110\xe3 duy\u1ec7t";default:return"primary"}}},{key:"updatePassword",value:function(){var e=Object(o.a)(s.a.mark((function e(t,a){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S()({baseURL:D.a.BASE_URL,url:D.a.PLUGIN_UPDATE_PASSWORD,method:"POST",data:{id:t,new_password:a}});case 2:1==(n=e.sent).data.is_success?(this.getData(),this.setState({isChange:!0})):(alert(n.data.message),this.setState({isLoading:!1}));case 4:case"end":return e.stop()}}),e,this)})));return function(t,a){return e.apply(this,arguments)}}()},{key:"updateSlug",value:function(){var e=Object(o.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S()({baseURL:D.a.BASE_URL,url:D.a.UPDATE_SLUG,method:"POST",data:{id:this.state.companyID,Slug:this.state.current_slug}});case 2:1==(t=e.sent).data.is_success?(this.getData(),this.setState({isChangeSlug:!0})):(alert(t.data.message),this.setState({isChangeSlug:!1}));case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,a=t.data,n=t.current_slug,r=t.arrTotalPackage,i=t.company_name,c=t.current_package,l=t.phone_number,d=t.isChange,p=t.currentPassword,u=t.isChangeSlug;return this.state.isLoading?Object(P.jsx)("div",{className:"sweet-loading",children:Object(P.jsx)(I.a,{css:v,size:50,color:"#123abc",loading:this.state.isLoading,speedMultiplier:1.5})}):Object(P.jsxs)("div",{className:"animated fadeIn",children:[Object(P.jsx)(b.a,{children:Object(P.jsxs)(_.a,{children:[Object(P.jsx)("p",{style:U.success,children:this.state.updated}),Object(P.jsx)("p",{style:U.danger,children:this.state.deleted}),Object(P.jsxs)(O.a,{children:[Object(P.jsx)(g.a,{children:"TH\xd4NG TIN T\xc0I KHO\u1ea2N"}),Object(P.jsx)(j.a,{children:Object(P.jsx)(T.V,{children:Object(P.jsxs)(T.p,{sm:"12",lg:"12",children:[Object(P.jsx)(T.V,{children:Object(P.jsx)(T.p,{sm:"12",lg:"6",children:Object(P.jsx)(T.L,{children:Object(P.jsx)("strong",{children:"Qu\u1ea3n l\xfd t\xe0i kho\u1ea3n"})})})}),Object(P.jsxs)(T.V,{children:[Object(P.jsx)(T.p,{sm:"12",lg:"12",children:Object(P.jsxs)("div",{children:[Object(P.jsx)(T.L,{children:"T\xean"}),Object(P.jsx)(f.a,{style:U.searchInput,value:a.Name})]})}),Object(P.jsxs)(T.p,{sm:"12",lg:"12",children:[Object(P.jsx)(T.L,{children:"Email"}),Object(P.jsx)(f.a,{style:U.searchInput,value:a.Email})]}),Object(P.jsxs)(T.p,{sm:"12",lg:"12",children:[Object(P.jsx)(T.L,{children:"S\u1ed1 \u0111i\u1ec7n tho\u1ea1i"}),Object(P.jsx)(f.a,{style:U.searchInput,value:a.Phone})]}),Object(P.jsx)(T.p,{sm:"12",lg:"12",children:Object(P.jsxs)("div",{children:[Object(P.jsx)(T.L,{children:"\u0110\u1ecba ch\u1ec9"}),Object(P.jsx)(f.a,{style:U.searchInput,value:a.Address})]})}),Object(P.jsx)(T.p,{sm:"12",lg:"12",children:Object(P.jsxs)("div",{children:[Object(P.jsx)(T.L,{children:"T\xean c\xf4ng ty"}),Object(P.jsx)(f.a,{style:U.searchInput,value:void 0==a.Company_Id?"":a.Company_Id.Name})]})}),Object(P.jsxs)(T.p,{sm:"12",lg:"12",children:[Object(P.jsx)(T.L,{children:"T\xean th\u01b0\u01a1ng hi\u1ec7u"}),Object(P.jsxs)(T.V,{children:[Object(P.jsx)(T.p,{sm:"9",lg:"9",children:Object(P.jsx)("div",{children:Object(P.jsx)(f.a,{style:U.searchInput,readOnly:u,onChange:function(t){e.setState({current_slug:t.target.value})},value:n})})}),Object(P.jsx)(T.p,{sm:"3",lg:"3",children:u?Object(P.jsx)(E.a,{color:"primary",onClick:function(t){e.setState({isChangeSlug:!1})},children:"Thay \u0111\u1ed5i"}):Object(P.jsx)(E.a,{color:"primary",onClick:function(){var t=Object(o.a)(s.a.mark((function t(a){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.updateSlug();case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),children:"C\u1eadp nh\u1eadt"})})]})]}),Object(P.jsx)(T.p,{sm:"12",lg:"12",children:Object(P.jsxs)("div",{children:[Object(P.jsx)(T.L,{children:"T\xean \u0111\u0103ng nh\u1eadp"}),Object(P.jsx)(f.a,{style:U.searchInput,value:a.UserName})]})}),Object(P.jsxs)(T.p,{sm:"12",lg:"12",children:[Object(P.jsx)(T.L,{children:"M\u1eadt kh\u1ea9u"}),Object(P.jsxs)(T.V,{children:[Object(P.jsx)(T.p,{sm:"9",lg:"9",children:Object(P.jsx)(f.a,{type:"password",style:U.searchInput,readOnly:d,onChange:function(t){e.setState({currentPassword:t.target.value})},value:p})}),Object(P.jsx)(T.p,{sm:"3",lg:"3",children:d?Object(P.jsx)(E.a,{color:"primary",onClick:function(t){e.setState({isChange:!1})},children:"Thay \u0111\u1ed5i"}):Object(P.jsx)(E.a,{color:"primary",onClick:function(){var t=Object(o.a)(s.a.mark((function t(n){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.updatePassword(a._id,p);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),children:"C\u1eadp nh\u1eadt"})})]})]})]})]})})})]})]})}),Object(P.jsxs)(T.P,{show:this.state.toggleView,onClose:function(){e.setState({toggleView:!e.state.toggleView})},size:"xl",children:[Object(P.jsxs)(T.S,{closeButton:!0,children:[Object(P.jsxs)(T.T,{children:["Danh s\xe1ch \u0111\u01a1n h\xe0ng c\u1ee7a ",i]}),Object(P.jsxs)(T.T,{style:{marginLeft:50},children:["S\u1ed1 \u0111i\u1ec7n tho\u1ea1i: ",l]})]}),Object(P.jsxs)(T.Q,{children:[Object(P.jsxs)("table",{ble:!0,className:"table table-hover table-outline mb-0 d-none d-sm-table",children:[Object(P.jsx)("thead",{className:"thead-light",children:Object(P.jsxs)("tr",{children:[Object(P.jsx)("th",{className:"text-center",children:"STT."}),Object(P.jsx)("th",{className:"text-center",children:"T\xean G\xf3i"}),Object(P.jsx)("th",{className:"text-center",children:"T\xednh n\u0103ng"}),Object(P.jsx)("th",{className:"text-center",children:"G\xf3i"}),Object(P.jsx)("th",{className:"text-center",children:"Ng\xe0y k\xedch ho\u1ea1t"}),Object(P.jsx)("th",{className:"text-center",children:"Ng\xe0y h\u1ebft h\u1ea1n"}),Object(P.jsx)("th",{className:"text-center",children:"Th\u1eddi gian h\u1ebft h\u1ea1n"}),Object(P.jsx)("th",{className:"text-center",children:"Tr\u1ea1ng th\xe1i"}),Object(P.jsx)("th",{className:"text-center",children:"#"})]})}),Object(P.jsxs)("tbody",{children:[0==r?Object(P.jsx)("td",{colSpan:"10",hidden:!1,className:"text-center",children:"Kh\xf4ng t\xecm th\u1ea5y d\u1eef li\u1ec7u"}):Object(P.jsx)("td",{colSpan:"10",hidden:!0,className:"text-center",children:"Kh\xf4ng t\xecm th\u1ea5y d\u1eef li\u1ec7u"}),void 0!=r?r.map((function(t,a){return Object(P.jsxs)("tr",{children:[Object(P.jsx)("th",{className:"text-center",children:a+1}),Object(P.jsx)("th",{className:"text-center",children:t.Name}),Object(P.jsxs)("th",{className:"text-center",children:[t.Array_Feature.map((function(e,t){if(t<2)return Object(P.jsx)("div",{children:Object(P.jsx)("a",{href:e.Value,target:"_blank",children:e.Value},t)})})),t.Array_Feature.length-2<=0?"":"..."]}),Object(P.jsx)("th",{className:"text-center",children:"".concat(t.Value," ").concat(e.convertUnitToDate(t.Unit))}),Object(P.jsx)("th",{className:"text-center",children:"1"==t.Status?new Date(t.Active_Date).toLocaleDateString():"-----"}),Object(P.jsx)("th",{className:"text-center",children:"1"==t.Status?new Date(t.End_Date).toLocaleDateString():"-----"}),"1"==t.Status?Object(P.jsxs)("th",{className:"text-center",style:e.calDateLeft(t.End_Date,Date.now())>30?{color:"green"}:e.calDateLeft(t.End_Date,Date.now())<15?{color:"yellow"}:{color:"red"},children:[e.calDateLeft(t.End_Date,Date.now())," ng\xe0y n\u1eefa"]}):Object(P.jsx)("th",{className:"text-center",children:"-----"}),Object(P.jsx)("th",{className:"text-center",children:Object(P.jsx)(T.a,{color:e.getBadgeStatus(t.Status),children:e.getStatus(t.Status)})}),Object(P.jsx)("td",{className:"text-center",children:Object(P.jsx)(T.d,{outline:!0,color:"info",size:"sm",onClick:function(){var a=Object(o.a)(s.a.mark((function a(n){return s.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:e.setState({arrDetailPackage:t.Array_Feature,current_package:t.Name});case 1:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}(),children:Object(P.jsx)(m.a,{name:"cil-magnifying-glass"})})})]},a)})):""]})]}),Object(P.jsx)("br",{}),Object(P.jsx)(T.S,{children:Object(P.jsxs)(T.T,{children:["Chi ti\u1ebft t\xednh n\u0103ng (",c,")"]})}),this.renderDetailPackage()]}),Object(P.jsx)(T.R,{children:Object(P.jsx)(T.d,{color:"secondary",onClick:function(){e.setState({toggleView:!e.state.toggleView})},children:"\u0110\xf3ng"})})]})]})}}]),a}(h.Component),v=Object(x.css)(n||(n=Object(r.a)(["\n  display: block;\n  margin: 0 auto;\n  border-color: red;\n"]))),U={datePicker:{marginBottom:20},wa10:{width:"5%",float:"left",height:"80px"},pagination:{marginRight:"5px"},flexLabel:{width:100},flexOption:{width:200,margin:"1px"},a:{textDecoration:"none"},floatRight:{float:"right",marginTop:"3px"},spinner:{width:"30px"},center:{textAlign:"center"},tbody:{height:"380px",overflowY:"auto"},wh12:{width:"10%",float:"left",height:"80px"},wh15:{width:"15%",float:"left",height:"80px"},w5:{width:"12%",float:"left",height:"80px"},row:{float:"left",width:"100%"},success:{color:"green"},danger:{color:"red"},mgl5:{marginLeft:"5px"},tags:{float:"right",marginRight:"5px"},searchInput:{width:"100%",display:"inline-block",margin:"1px"},userActive:{color:"green"},userPending:{color:"red"},nagemonNameCol:{width:"328px"},image:{width:"100px",height:"100px",borderRadius:"99999px"}};t.default=C},643:function(e,t,a){"use strict";var n,r=a(165);t.a=(n={BASE_URL:"https://api-soida.applamdep.com",BASE_URL_CURRENT:"https://id.applamdep.com/",LIST_USER:"/api/list-user",LIST_USER_WITH_ID:"/api/list-user?id=",ADD_USER:"/api/add-user",UPDATE_USER:"/api/update-user",DELETE_USER:"/api/delete-user",LOGIN_ADMIN:"/api/login_admin",GET_SHOP:"/api/get-shop",GET_SALE:"/api/get-sale",GET_COEFFICIENT:"/api/calculator-coefficient-user",GET_COEFFICIENT_PER_SALE:"/api/calculator-coefficient-user-per-sale",GET_USER_SALE_BY_MONTH:"/api/get-user-of-sale-by-month",CALCULATOR_ALL_USER_OF_COMPANY:"/api/calculator-all-user-company",CALCULATOR_ALL_USER_OF_SALE:"/api/calculator-all-user-of-sale",GET_SEEDER:"/api/get-seed",GET_SALE_NAME:"/api/get-name-sale",GET_USER_BY_ID:"/api/get-user-byID",LIST_CUSTOMER:"/api/list-customer",LIST_CUSTOMER_BY_MONTH:"/api/get-user-sale-by-month",LIST_TYPEKEY:"/api/list-typekey",LIST_TYPEKEY_WITH_ID:"/api/list-typekey?id=",ADD_TYPEKEY:"/api/add-typekey",UPDATE_TYPEKEY:"/api/update-typekey",DELETE_TYPEKEY:"/api/delete-typekey",LIST_HARDWARE:"/api/list-hardware",LIST_HARDWARE_WITH_ID:"/api/list-hardware?id=",ADD_HARDWARE:"/api/add-hardware",UPDATE_HARDWARE:"/api/update-hardware",DELETE_HARDWARE:"/api/delete-hardware",LIST_ORDER:"/api/list-order",ADD_ORDER:"/api/add-order",UPDATE_STATUS_ORDER:"/api/update-status-order",CHECK_OUT:"/api/checkout-order",LIST_TRANSACTION:"/api/list-transaction",ADD_TRANSACTION:"/api/add-transaction",LIST_CHECK_OUT:"/api/list-checkout",LIST_HARDWARE_CHECKOUT:"/api/get-list-hardward-by-check-out",UPDATE_STATUS_CHECKOUT:"/api/update-status-hardware",LIST_ORDER_DETAIL:"/api/list-orderdetail",ADD_ORDER_DETAIL:"/api/add-orderdetail",LIST_ROLE:"/api/list-role",LIST_ROLE_WITH_ID:"/api/list-role?id=",ADD_ROLE:"/api/add-role",UPDATE_ROLE:"/api/update-role",DELETE_ROLE:"/api/delete-role",LIST_PACKAGE:"/api/list-package",ADD_PACKAGE:"/api/add-package",UPDATE_PACKAGE:"/api/update-package",DELETE_PACKAGE:"/api/delete-package",PLUGIN_DATA_PACKAGE:"/api/get-name-package",LIST_SALELOG:"/api/list-salelog",LIST_SALELOG_WITH_ID:"/api/list-salelog?id=",ADD_SALELOG:"/api/add-salelog",UPDATE_SALELOG:"/api/update-salelog",DELETE_SALELOG:"/api/delete-salelog",DATA_SALE:"/api/get-data-sale",LIST_SALE:"/api/list-sale",LIST_SALE_WITH_ID:"/api/list-sale?id=",ADD_SALE:"/api/add-sale",UPDATE_SALE:"/api/update-sale",DELETE_SALE:"/api/delete-sale",LIST_KEYORDER:"/api/list-keyorder",LIST_KEYORDER_WITH_ID:"/api/list-keyorder?id=",ADD_KEYORDER:"/api/add-keyorder",UPDATE_KEYORDER:"/api/update-keyorder",DELETE_KEYORDER:"/api/delete-keyorder",LIST_KEY:"/api/list-key",LIST_KEY_WITH_ID:"/api/list-key?id=",ADD_KEY:"/api/add-key",UPDATE_KEY:"/api/update-key",DELETE_KEY:"/api/delete-key",PLUGIN_LIST_COMPANY:"/api/plugin-list-company",PLUGIN_LIST_COMPANY_BY_ID:"/api/plugin-list-company-by-id",PLUGIN_LIST_COMPANY_WITH_ID:"/api/plugin-list-company?id=",PLUGIN_ADD_COMPANY:"/api/plugin-add-company",PLUGIN_UPDATE_COMPANY:"/api/plugin-update-company",PLUGIN_DELETE_COMPANY:"/api/plugin-delete-company",PLUGIN_DATA_COMPANY:"/api/plugin-get-data-company",LIST_COMPANY:"/api/list-company",LIST_COMPANY_WITH_ID:"/api/list-company?id=",ADD_COMPANY:"/api/add-company",UPDATE_COMPANY:"/api/update-company",DELETE_COMPANY:"/api/delete-company",DATA_COMPANY:"/api/get-data-company",LIST_LINK:"/api/list-link",LIST_LINK_WITH_ID:"/api/list-link?id=",ADD_LINK:"/api/add-link",UPDATE_LINK:"/api/update-link",DELETE_LINK:"/api/delete-link","GET-LINK-BY-ID":"/api/link-by-id",LIST_FEATURE:"/api/list-feature",ADD_FEATURE:"/api/add-feature",UPDATE_FEATURE:"/api/update-feature",DELETE_FEATURE:"/api/delete-feature",DATA_CHOOSE_FEATURE:"/api/get-feature-choose",LIST_PLUGIN_ORDER:"/api/plugin-list-order",COUNT_PLUGIN_ORDER:"/api/plugin-count-order",LIST_PLUGIN_ORDER_BY_ID:"/api/plugin-list-order-by-id",LIST_PLUGIN_ORDER_FOR_ADMIN:"/api/plugin-list-order-for-admin",LIST_ORDER_BY_SALE:"/api/plugin-list-order-by-saleid",ADD_PLUGIN_ORDER:"/api/plugin-add-order",UPDATE_PLUGIN_ORDER:"/api/plugin-update-order",DELETE_PLUGIN_ORDER:"/api/plugin-delete-order",UPDATE_SLUG:"/api/plugin-update-slug",PLUGIN_LIST_USER:"/api/plugin-list-user",PLUGIN_ALL_USER:"/api/plugin-all-user",PLUGIN_ADD_USER:"/api/plugin-add-user",PLUGIN_ADD_SALE:"/api/plugin-add-sale",PLUGIN_UPDATE_USER:"/api/plugin-update-user",PLUGIN_DELETE_USER:"/api/plugin-delete-user",PLUGIN_RESET_PASSWORD:"/api/plugin-reset-password",PLUGIN_CHANGE_PASSWORD:"/api/plugin-change",PLUGIN_CHECK_LINK:"/api/plugin-check-link",PLUGIN_UPDATE_PASSWORD:"/api/plugin-update-password",PLUGIN_UPDATE_STATUS:"/api/plugin-update-status",PLUGIN_LOGIN_ADMIN:"/api/plugin-login_admin",PLUGIN_FORGOT_PASS:"/api/plugin-forgot-password",PLUGIN_GET_USER_BYID:"/api/plugin-get-user-byID",PLUGIN_GET_USER_BY_BODY:"/api/plugin-get-user-byID-with-body",PLUGIN_LIST_ROLE:"/api/plugin-list-role",PLUGIN_ADD_ROLE:"/api/plugin-add-role",PLUGIN_UPDATE_ROLE:"/api/plugin-update-role",PLUGIN_DELETE_ROLE:"/api/plugin-delete-role",CUS_RES_LIST:"/api/list-customer-request",CUS_RES_LIST_COMPANY:"/api/list-customer-request-for-company",CUS_RES_ADD:"/api/add-customer-request",CUS_RES_UPDATE:"/api/update-customer-request",CUS_RES_DELETE:"/api/delete-customer-request",REWARD_INFO_LIST:"/api/list-reward-info",REWARD_INFO_LIST_COMPANY:"/api/list-reward-info-for-company",REWARD_INFO_ADD:"/api/add-reward-info",REWARD_INFO_UPDATE:"/api/update-reward-info",REWARD_INFO_DELETE:"/api/delete-reward-info",REWARD_TRANS_LIST:"/api/list-reward-trans",REWARD_TRANS_ADD:"/api/list-reward-trans",REWARD_TRANS_UPDATE:"/api/update-reward-trans",REWARD_TRANS_DELETE:"/api/delete-reward-trans",TYPE_REQUEST_LIST:"/api/list-type-request",TYPE_REQUEST_ADD:"/api/add-type-request",TYPE_REQUEST_UPDATE:"/api/update-type-request",TYPE_REQUEST_DELETE:"/api/delete-type-request"},Object(r.a)(n,"LIST_CUSTOMER","/api/list-customer"),Object(r.a)(n,"LIST_CUSTOMER_FOR_COMPANY","/api/list-customer-for-company"),Object(r.a)(n,"LIST_CUSTOMER_FOR_COMPANY_BY_MONTH","/api/list-customer-for-company-by-month"),Object(r.a)(n,"LIST_SUGGEST_ITEM","/itemSdk"),Object(r.a)(n,"LIST_SUGGEST_ITEM_COMPANY","/itemSdk/"),Object(r.a)(n,"LIST_SUGGEST_ITEM_ADMIN","/itemSdk/admin/"),Object(r.a)(n,"ADD_SUGGEST_ITEM","/itemSdk"),Object(r.a)(n,"UPDATE_SUGGEST_ITEM","/itemSdk/"),Object(r.a)(n,"DELETE_SUGGEST_ITEM","/itemSdk/deleteItem"),Object(r.a)(n,"LIST_SDK","/sdk"),Object(r.a)(n,"LIST_BRAND","/brands"),Object(r.a)(n,"LIST_BRAND_COMPANY","/brands/"),Object(r.a)(n,"ADD_BRAND","/add-brand"),Object(r.a)(n,"UPDATE_BRAND","/update-brand"),Object(r.a)(n,"DELETE_BRAND","/delete-brand"),Object(r.a)(n,"LIST_PRODUCT","/product"),Object(r.a)(n,"LIST_PRODUCT_COMPANY","/product/"),Object(r.a)(n,"ADD_PRODUCT","/add-product"),Object(r.a)(n,"UPDATE_PRODUCT","/update-product"),Object(r.a)(n,"DELETE_PRODUCT","/delete-product"),Object(r.a)(n,"LIST_TYPE","/types"),Object(r.a)(n,"LIST_TYPE_COMPANY","/types/"),Object(r.a)(n,"ADD_TYPE","/add-type"),Object(r.a)(n,"UPDATE_TYPE","/update-type"),Object(r.a)(n,"DELETE_TYPE","/delete-type"),Object(r.a)(n,"LIST_COLOR","/colors"),Object(r.a)(n,"LIST_COLOR_COMPANY","/colors/"),Object(r.a)(n,"LIST_COLOR_SELECT","/color-select"),Object(r.a)(n,"ADD_COLOR","/add-color"),Object(r.a)(n,"UPDATE_COLOR","/update-color"),Object(r.a)(n,"DELETE_COLOR","/delete-color"),Object(r.a)(n,"LIST_HISTORY_SKIN","/api/get-history-skin"),Object(r.a)(n,"LIST_HISTORY_SKIN_BY_CONDITION","/api/get-history-skin-by-condition"),Object(r.a)(n,"ADD_HISTORY_SKIN","/api/add-history-skin"),Object(r.a)(n,"LIST_TYPE_PRODUCT","/api/list-type-product"),Object(r.a)(n,"ADD_TYPE_PRODUCT","/api/add-type-product"),Object(r.a)(n,"UPDATE_TYPE_PRODUCT","/api/update-type-product"),Object(r.a)(n,"DELETE_TYPE_PRODUCT","/api/delete-type-product"),Object(r.a)(n,"LIST_TYPE_SDK","/api/list-type-sdk"),Object(r.a)(n,"ADD_TYPE_SDK","/api/add-type-sdk"),Object(r.a)(n,"UPDATE_TYPE_SDK","/api/update-type-sdk"),Object(r.a)(n,"DELETE_TYPE_SDK","/api/delete-type-sdk"),Object(r.a)(n,"LIST_CONTACT_CUSTOMER","/api/list-contact-customers"),Object(r.a)(n,"ADD_CONTACT_CUSTOMER","/api/add-contact-customers"),Object(r.a)(n,"UPDATE_CONTACT_CUSTOMER","/api/update-contact-customers"),Object(r.a)(n,"DELETE_CONTACT_CUSTOMER","/api/delete-contact-customers"),Object(r.a)(n,"UPDATE_CONTACT_STATUS","/api/update-contact-status"),n)},666:function(e,t,a){"use strict";var n=a(12),r=a(29),i=a(2),c=a.n(i),s=a(64),o=a.n(s),l=a(637),d=a.n(l),p=a(639),u=o.a.oneOfType([o.a.number,o.a.string]),h={tag:p.n,noGutters:o.a.bool,className:o.a.string,cssModule:o.a.object,form:o.a.bool,xs:u,sm:u,md:u,lg:u,xl:u},b={tag:"div",widths:["xs","sm","md","lg","xl"]},_=function(e){var t=e.className,a=e.cssModule,i=e.noGutters,s=e.tag,o=e.form,l=e.widths,u=Object(r.a)(e,["className","cssModule","noGutters","tag","form","widths"]),h=[];l.forEach((function(t,a){var n=e[t];if(delete u[t],n){var r=!a;h.push(r?"row-cols-"+n:"row-cols-"+t+"-"+n)}}));var b=Object(p.j)(d()(t,i?"no-gutters":null,o?"form-row":"row",h),a);return c.a.createElement(s,Object(n.a)({},u,{className:b}))};_.propTypes=h,_.defaultProps=b,t.a=_},667:function(e,t,a){"use strict";var n=a(12),r=a(29),i=a(2),c=a.n(i),s=a(64),o=a.n(s),l=a(637),d=a.n(l),p=a(639),u=o.a.oneOfType([o.a.number,o.a.string]),h=o.a.oneOfType([o.a.bool,o.a.number,o.a.string,o.a.shape({size:o.a.oneOfType([o.a.bool,o.a.number,o.a.string]),order:u,offset:u})]),b={tag:p.n,xs:h,sm:h,md:h,lg:h,xl:h,className:o.a.string,cssModule:o.a.object,widths:o.a.array},_={tag:"div",widths:["xs","sm","md","lg","xl"]},O=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},g=function(e){var t=e.className,a=e.cssModule,i=e.widths,s=e.tag,o=Object(r.a)(e,["className","cssModule","widths","tag"]),l=[];i.forEach((function(t,n){var r=e[t];if(delete o[t],r||""===r){var i=!n;if(Object(p.h)(r)){var c,s=i?"-":"-"+t+"-",u=O(i,t,r.size);l.push(Object(p.j)(d()(((c={})[u]=r.size||""===r.size,c["order"+s+r.order]=r.order||0===r.order,c["offset"+s+r.offset]=r.offset||0===r.offset,c)),a))}else{var h=O(i,t,r);l.push(h)}}})),l.length||l.push("col");var u=Object(p.j)(d()(t,l),a);return c.a.createElement(s,Object(n.a)({},o,{className:u}))};g.propTypes=b,g.defaultProps=_,t.a=g},668:function(e,t,a){"use strict";var n=a(12),r=a(29),i=a(2),c=a.n(i),s=a(64),o=a.n(s),l=a(637),d=a.n(l),p=a(639),u={tag:p.n,inverse:o.a.bool,color:o.a.string,body:o.a.bool,outline:o.a.bool,className:o.a.string,cssModule:o.a.object,innerRef:o.a.oneOfType([o.a.object,o.a.string,o.a.func])},h=function(e){var t=e.className,a=e.cssModule,i=e.color,s=e.body,o=e.inverse,l=e.outline,u=e.tag,h=e.innerRef,b=Object(r.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),_=Object(p.j)(d()(t,"card",!!o&&"text-white",!!s&&"card-body",!!i&&(l?"border":"bg")+"-"+i),a);return c.a.createElement(u,Object(n.a)({},b,{className:_,ref:h}))};h.propTypes=u,h.defaultProps={tag:"div"},t.a=h},669:function(e,t,a){"use strict";var n=a(12),r=a(29),i=a(2),c=a.n(i),s=a(64),o=a.n(s),l=a(637),d=a.n(l),p=a(639),u={tag:p.n,className:o.a.string,cssModule:o.a.object},h=function(e){var t=e.className,a=e.cssModule,i=e.tag,s=Object(r.a)(e,["className","cssModule","tag"]),o=Object(p.j)(d()(t,"card-header"),a);return c.a.createElement(i,Object(n.a)({},s,{className:o}))};h.propTypes=u,h.defaultProps={tag:"div"},t.a=h},670:function(e,t,a){"use strict";var n=a(12),r=a(29),i=a(2),c=a.n(i),s=a(64),o=a.n(s),l=a(637),d=a.n(l),p=a(639),u={tag:p.n,className:o.a.string,cssModule:o.a.object,innerRef:o.a.oneOfType([o.a.object,o.a.string,o.a.func])},h=function(e){var t=e.className,a=e.cssModule,i=e.innerRef,s=e.tag,o=Object(r.a)(e,["className","cssModule","innerRef","tag"]),l=Object(p.j)(d()(t,"card-body"),a);return c.a.createElement(s,Object(n.a)({},o,{className:l,ref:i}))};h.propTypes=u,h.defaultProps={tag:"div"},t.a=h},672:function(e,t,a){"use strict";var n=a(12),r=a(29),i=a(644),c=a(35),s=a(2),o=a.n(s),l=a(64),d=a.n(l),p=a(637),u=a.n(p),h=a(639),b={children:d.a.node,type:d.a.string,size:d.a.oneOfType([d.a.number,d.a.string]),bsSize:d.a.string,valid:d.a.bool,invalid:d.a.bool,tag:h.n,innerRef:d.a.oneOfType([d.a.object,d.a.func,d.a.string]),plaintext:d.a.bool,addon:d.a.bool,className:d.a.string,cssModule:d.a.object},_=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(i.a)(a)),a.focus=a.focus.bind(Object(i.a)(a)),a}Object(c.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.focus=function(){this.ref&&this.ref.focus()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,i=e.type,c=e.bsSize,s=e.valid,l=e.invalid,d=e.tag,p=e.addon,b=e.plaintext,_=e.innerRef,O=Object(r.a)(e,["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"]),g=["radio","checkbox"].indexOf(i)>-1,j=new RegExp("\\D","g"),f=d||("select"===i||"textarea"===i?i:"input"),E="form-control";b?(E+="-plaintext",f=d||"input"):"file"===i?E+="-file":"range"===i?E+="-range":g&&(E=p?null:"form-check-input"),O.size&&j.test(O.size)&&(Object(h.p)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),c=O.size,delete O.size);var T=Object(h.j)(u()(t,l&&"is-invalid",s&&"is-valid",!!c&&"form-control-"+c,E),a);return("input"===f||d&&"function"===typeof d)&&(O.type=i),O.children&&!b&&"select"!==i&&"string"===typeof f&&"select"!==f&&(Object(h.p)('Input with a type of "'+i+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete O.children),o.a.createElement(f,Object(n.a)({},O,{ref:_,className:T,"aria-invalid":l}))},t}(o.a.Component);_.propTypes=b,_.defaultProps={type:"text"},t.a=_},686:function(e,t,a){},692:function(e,t,a){"use strict";var n=a(12),r=a(29),i=a(644),c=a(35),s=a(2),o=a.n(s),l=a(64),d=a.n(l),p=a(637),u=a.n(p),h=a(639),b={active:d.a.bool,"aria-label":d.a.string,block:d.a.bool,color:d.a.string,disabled:d.a.bool,outline:d.a.bool,tag:h.n,innerRef:d.a.oneOfType([d.a.object,d.a.func,d.a.string]),onClick:d.a.func,size:d.a.string,children:d.a.node,className:d.a.string,cssModule:d.a.object,close:d.a.bool},_=function(e){function t(t){var a;return(a=e.call(this,t)||this).onClick=a.onClick.bind(Object(i.a)(a)),a}Object(c.a)(t,e);var a=t.prototype;return a.onClick=function(e){if(!this.props.disabled)return this.props.onClick?this.props.onClick(e):void 0;e.preventDefault()},a.render=function(){var e=this.props,t=e.active,a=e["aria-label"],i=e.block,c=e.className,s=e.close,l=e.cssModule,d=e.color,p=e.outline,b=e.size,_=e.tag,O=e.innerRef,g=Object(r.a)(e,["active","aria-label","block","className","close","cssModule","color","outline","size","tag","innerRef"]);s&&"undefined"===typeof g.children&&(g.children=o.a.createElement("span",{"aria-hidden":!0},"\xd7"));var j="btn"+(p?"-outline":"")+"-"+d,f=Object(h.j)(u()(c,{close:s},s||"btn",s||j,!!b&&"btn-"+b,!!i&&"btn-block",{active:t,disabled:this.props.disabled}),l);g.href&&"button"===_&&(_="a");var E=s?"Close":null;return o.a.createElement(_,Object(n.a)({type:"button"===_&&g.onClick?"button":void 0},g,{className:f,ref:O,onClick:this.onClick,"aria-label":a||E}))},t}(o.a.Component);_.propTypes=b,_.defaultProps={color:"secondary",tag:"button"},t.a=_},796:function(e,t,a){"use strict";var n=a(797).CopyToClipboard;n.CopyToClipboard=n,e.exports=n},797:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CopyToClipboard=void 0;var n=i(a(2)),r=i(a(798));function i(e){return e&&e.__esModule?e:{default:e}}function c(e){return(c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function p(e,t){return!t||"object"!==c(t)&&"function"!==typeof t?h(e):t}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var O=function(e){function t(){var e,a;l(this,t);for(var i=arguments.length,c=new Array(i),s=0;s<i;s++)c[s]=arguments[s];return _(h(a=p(this,(e=u(t)).call.apply(e,[this].concat(c)))),"onClick",(function(e){var t=a.props,i=t.text,c=t.onCopy,s=t.children,o=t.options,l=n.default.Children.only(s),d=(0,r.default)(i,o);c&&c(i,d),l&&l.props&&"function"===typeof l.props.onClick&&l.props.onClick(e)})),a}var a,i,c;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(t,e),a=t,(i=[{key:"render",value:function(){var e=this.props,t=(e.text,e.onCopy,e.options,e.children),a=o(e,["text","onCopy","options","children"]),r=n.default.Children.only(t);return n.default.cloneElement(r,function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(a,!0).forEach((function(t){_(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},a,{onClick:this.onClick}))}}])&&d(a.prototype,i),c&&d(a,c),t}(n.default.PureComponent);t.CopyToClipboard=O,_(O,"defaultProps",{onCopy:void 0,options:void 0})},798:function(e,t,a){"use strict";var n=a(799),r={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,t){var a,i,c,s,o,l,d=!1;t||(t={}),a=t.debug||!1;try{if(c=n(),s=document.createRange(),o=document.getSelection(),(l=document.createElement("span")).textContent=e,l.style.all="unset",l.style.position="fixed",l.style.top=0,l.style.clip="rect(0, 0, 0, 0)",l.style.whiteSpace="pre",l.style.webkitUserSelect="text",l.style.MozUserSelect="text",l.style.msUserSelect="text",l.style.userSelect="text",l.addEventListener("copy",(function(n){if(n.stopPropagation(),t.format)if(n.preventDefault(),"undefined"===typeof n.clipboardData){a&&console.warn("unable to use e.clipboardData"),a&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var i=r[t.format]||r.default;window.clipboardData.setData(i,e)}else n.clipboardData.clearData(),n.clipboardData.setData(t.format,e);t.onCopy&&(n.preventDefault(),t.onCopy(n.clipboardData))})),document.body.appendChild(l),s.selectNodeContents(l),o.addRange(s),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");d=!0}catch(p){a&&console.error("unable to copy using execCommand: ",p),a&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),d=!0}catch(p){a&&console.error("unable to copy using clipboardData: ",p),a&&console.error("falling back to prompt"),i=function(e){var t=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}("message"in t?t.message:"Copy to clipboard: #{key}, Enter"),window.prompt(i,e)}}finally{o&&("function"==typeof o.removeRange?o.removeRange(s):o.removeAllRanges()),l&&document.body.removeChild(l),c()}return d}},799:function(e,t){e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,a=[],n=0;n<e.rangeCount;n++)a.push(e.getRangeAt(n));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||a.forEach((function(t){e.addRange(t)})),t&&t.focus()}}}}]);
//# sourceMappingURL=37.a9cf485b.chunk.js.map