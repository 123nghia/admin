(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[32],{1259:function(e,a,t){"use strict";t.r(a);var i=t(170),s=t(114),r=t.n(s),n=t(651),c=t(165),d=t(166),l=t(168),o=t(167),p=t(2),u=t(663),h=t(664),E=t(809),_=t(855),D=t(810),A=(t(650),t(655),t(644)),T=(t(647),t(652)),O=t.n(T),m=t(862),g=t(20),b=new Headers,L=localStorage.getItem("auth");b.append("Authorization","Bearer "+L),b.append("Content-Type","application/json");var R=function(e){Object(l.a)(t,e);var a=Object(o.a)(t);function t(e){var i;return Object(c.a)(this,t),(i=a.call(this,e)).getData=Object(n.a)(r.a.mark((function e(){var a,t,s;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i.setState({isLoading:!0}),e.next=3,O()({baseURL:A.a.BASE_URL,url:A.a.LIST_CHECKED_ORDER,method:"POST",headers:i.state.token});case 3:a=e.sent,t=a.data.data,i.pagination(t),i.setState({dataApi:t}),s=0,console.log(t),t.map((function(e){"Actived"==e.Status&&(s+=1)})),i.setState({isLoading:!1,totalActive:s});case 11:case"end":return e.stop()}}),e)}))),i.state={data:[],key:"",keyEmail:"",keyPhone:"",keyFax:"",keyAddress:"",keyWebsite:"",keyCode:"",keyCompany:"",UserName:"",Password:"",keyDateCreate:new Date,keyStatus:"",activePage:1,page:1,itemsCount:0,limit:20,totalActive:0,modalCom:!1,viewingUser:{},communities:[],updated:"",dataApi:[],action:"new",Name:"",Email:"",Phone:"",Fax:"Nam",Address:"",Website:"",Code:"",Status:"",modalDelete:!1,delete:null,arrPagination:[],indexPage:0,dataCompany:[],currentCompany:"",hidden:!1,token:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}},i}return Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=Object(n.a)(r.a.mark((function e(){var a,t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(this.getData(),a=JSON.parse(localStorage.getItem("url")),t=0;t<a.length;t++)"#"+a[t].to==window.location.hash&&1==a[t].hidden&&(window.location.href="#/");case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getCompanyData",value:function(){var e=Object(n.a)(r.a.mark((function e(){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O()({baseURL:A.a.BASE_URL,url:A.a.LIST_COMPANY,method:"POST"});case 2:a=e.sent,this.setState({dataCompany:a.data.data});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"pagination",value:function(e){var a,t,i,s=[];for(a=0,t=e.length;a<t;a+=5)i=e.slice(a,a+5),s.push(i);0==s.length?this.setState({hidden:!1}):this.setState({hidden:!0}),this.setState({arrPagination:s,data:s[this.state.indexPage]})}},{key:"searchKey",value:function(){var e=this.state,a=e.indexPage,t=e.key,i=(e.keyEmail,e.keyCompany,e.keyPhone,e.keyFax,e.keyAddress,e.keyWebsite,e.keyCode,e.keyDateCreate,e.keyStatus);if(""!=t||""!=i){var s=[];this.state.dataApi.map((function(e){e.code_order.toLocaleUpperCase().includes(t.toLocaleUpperCase())&&s.push(e)}));var r=0;s.map((function(e){"Actived"==e.Status&&(r+=1)})),this.setState({data:s,totalActive:r})}else{var n=0;this.state.dataApi.map((function(e){"Actived"==e.Status&&(n+=1)})),this.setState({data:this.state.arrPagination[a],totalActive:n})}}},{key:"getBadge",value:function(e){switch(e){case"Actived":return"success";case"Inactive":return"secondary";case"Locked":return"warning";case"Deactived":return"danger";default:return"primary"}}},{key:"render",value:function(){var e=this,a=this.state,t=a.data,i=a.arrPagination,s=a.hidden;return this.state.isLoading?Object(g.jsx)("div",{id:"page-loading",children:Object(g.jsxs)("div",{className:"three-balls",children:[Object(g.jsx)("div",{className:"ball ball1"}),Object(g.jsx)("div",{className:"ball ball2"}),Object(g.jsx)("div",{className:"ball ball3"})]})}):Object(g.jsx)("div",{className:"animated fadeIn",children:Object(g.jsx)(u.a,{children:Object(g.jsxs)(h.a,{children:[Object(g.jsx)("p",{style:j.success,children:this.state.updated}),Object(g.jsx)("p",{style:j.danger,children:this.state.deleted}),Object(g.jsxs)(E.a,{children:[Object(g.jsxs)(_.a,{children:[Object(g.jsx)("i",{className:"fa fa-align-justify"})," Danh s\xe1ch \u0111\u01a1n h\xe0ng"]}),Object(g.jsx)(D.a,{children:Object(g.jsxs)("table",{ble:!0,className:"table table-hover table-outline mb-0 d-none d-sm-table",children:[Object(g.jsx)("thead",{className:"thead-light",children:Object(g.jsxs)("tr",{children:[Object(g.jsx)("th",{className:"text-center",children:"STT."}),Object(g.jsx)("th",{className:"text-center",children:"M\xe3 sale"}),Object(g.jsx)("th",{className:"text-center",children:"M\xe3 shop"}),Object(g.jsx)("th",{className:"text-center",children:"M\xe3 \u0111\u01a1n h\xe0ng"}),Object(g.jsx)("th",{className:"text-center",children:"Th\u1eddi gian"}),Object(g.jsx)("th",{className:"text-center",children:"T\u1ed5ng gi\xe1 tr\u1ecb"})]})}),Object(g.jsxs)("tbody",{children:[Object(g.jsx)("td",{colSpan:"9",hidden:s,className:"text-center",children:"Kh\xf4ng c\xf3 d\u1eef li\u1ec7u"}),void 0!=t?t.map((function(e,a){return Object(g.jsxs)("tr",{children:[Object(g.jsx)("td",{className:"text-center",children:a+1}),Object(g.jsx)("td",{className:"text-center",children:e.sale_id.Name}),Object(g.jsx)("td",{className:"text-center",children:e.shop_id.Name}),Object(g.jsx)("td",{className:"text-center",children:e.code_order}),Object(g.jsx)("td",{className:"text-center",children:e.time}),Object(g.jsx)("td",{className:"text-center",children:e.total})]},a)})):""]})]})})]}),Object(g.jsx)("div",{style:{float:"right"},children:Object(g.jsx)(m.a,{count:i.length,color:"primary",onChange:function(a,t){e.setState({data:i[t-1],indexPage:t-1})}})})]})})})}}]),t}(p.Component),j=Object(i.a)({pagination:{marginRight:"5px"},flexLabel:{width:100},flexOption:{width:160,margin:"1px"},a:{textDecoration:"none"},floatRight:{float:"right",marginTop:"3px"},spinner:{width:"30px"},center:{textAlign:"center"},tbody:{height:"380px",overflowY:"auto"},wh12:{width:"8%",float:"left",height:"80px"},wh15:{width:"15%",float:"left",height:"80px"},w5:{width:"12%",float:"left",height:"80px"},wa10:{width:"5%",float:"left",height:"80px"},row:{float:"left",width:"100%"},success:{color:"green"},danger:{color:"red"},mgl5:{marginLeft:"5px"},tags:{float:"right",marginRight:"5px"},searchInput:{width:"160px",display:"inline-block",margin:"1px"},userActive:{color:"green"},userPending:{color:"red"},nagemonNameCol:{width:"328px"},image:{width:"100px",height:"100px",borderRadius:"99999px"}},"mgl5",{marginBottom:"5px"});a.default=R},644:function(e,a,t){"use strict";a.a={BASE_URL:"https://admin-api.tikitech.vn",LIST_USER:"/api/list-user",LIST_USER_WITH_ID:"/api/list-user?id=",ADD_USER:"/api/add-user",UPDATE_USER:"/api/update-user",DELETE_USER:"/api/delete-user",LOGIN_ADMIN:"/api/login_admin",GET_SHOP:"/api/get-shop",GET_SALE:"/api/get-sale",GET_COEFFICIENT:"/api/calculator-coefficient-user",GET_COEFFICIENT_PER_SALE:"/api/calculator-coefficient-user-per-sale",GET_USER_SALE_BY_MONTH:"/api/get-user-of-sale-by-month",CALCULATOR_ALL_USER_OF_COMPANY:"/api/calculator-all-user-company",CALCULATOR_ALL_USER_OF_SALE:"/api/calculator-all-user-of-sale",GET_SEEDER:"/api/get-seed",GET_SALE_NAME:"/api/get-name-sale",GET_USER_BY_ID:"/api/get-user-byID",LIST_CUSTOMER:"/api/list-customer",LIST_CUSTOMER_BY_MONTH:"/api/get-user-sale-by-month",LIST_CUSTOMER_BY_MONTH_ADMIN:"/api/get-user-by-month-admin",LIST_TYPEKEY:"/api/list-typekey",LIST_TYPEKEY_WITH_ID:"/api/list-typekey?id=",ADD_TYPEKEY:"/api/add-typekey",UPDATE_TYPEKEY:"/api/update-typekey",DELETE_TYPEKEY:"/api/delete-typekey",LIST_HARDWARE:"/api/list-hardware",LIST_HARDWARE_WITH_ID:"/api/list-hardware?id=",ADD_HARDWARE:"/api/add-hardware",UPDATE_HARDWARE:"/api/update-hardware",DELETE_HARDWARE:"/api/delete-hardware",LIST_ORDER:"/api/list-order",ADD_ORDER:"/api/add-order",UPDATE_STATUS_ORDER:"/api/update-status-order",LIST_TRANSACTION:"/api/list-transaction",ADD_TRANSACTION:"/api/add-transaction",LIST_CHECK_OUT:"/api/list-checkout",LIST_HARDWARE_CHECKOUT:"/api/get-list-hardward-by-check-out",UPDATE_STATUS_CHECKOUT:"/api/update-status-hardware",LIST_ORDER_DETAIL:"/api/list-orderdetail",ADD_ORDER_DETAIL:"/api/add-orderdetail",LIST_ROLE:"/api/list-role",LIST_ROLE_WITH_ID:"/api/list-role?id=",ADD_ROLE:"/api/add-role",UPDATE_ROLE:"/api/update-role",DELETE_ROLE:"/api/delete-role",LIST_SALELOG:"/api/list-salelog",LIST_SALELOG_WITH_ID:"/api/list-salelog?id=",ADD_SALELOG:"/api/add-salelog",UPDATE_SALELOG:"/api/update-salelog",DELETE_SALELOG:"/api/delete-salelog",DATA_SALE:"/api/get-data-sale",LIST_SALE:"/api/list-sale",LIST_SALE_WITH_ID:"/api/list-sale?id=",ADD_SALE:"/api/add-sale",UPDATE_SALE:"/api/update-sale",DELETE_SALE:"/api/delete-sale",LIST_KEYORDER:"/api/list-keyorder",LIST_KEYORDER_WITH_ID:"/api/list-keyorder?id=",ADD_KEYORDER:"/api/add-keyorder",UPDATE_KEYORDER:"/api/update-keyorder",DELETE_KEYORDER:"/api/delete-keyorder",LIST_KEY:"/api/list-key",LIST_KEY_WITH_ID:"/api/list-key?id=",ADD_KEY:"/api/add-key",UPDATE_KEY:"/api/update-key",DELETE_KEY:"/api/delete-key",LIST_COMPANY:"/api/list-company",LIST_COMPANY_WITH_ID:"/api/list-company?id=",ADD_COMPANY:"/api/add-company",UPDATE_COMPANY:"/api/update-company",DELETE_COMPANY:"/api/delete-company",DATA_COMPANY:"/api/get-data-company",LIST_LINK:"/api/list-link",LIST_LINK_WITH_ID:"/api/list-link?id=",ADD_LINK:"/api/add-link",UPDATE_LINK:"/api/update-link",DELETE_LINK:"/api/delete-link","GET-LINK-BY-ID":"/api/link-by-id",LIST_CHECKED_ORDER:"/api/list-order-checked",ADD_CHECKED_ORDER:"/api/add-order-checked",LIST_CHECKED_PRODUCT:"/api/list-product-checked",ADD_CHECKED_PRODUCT:"/api/add-product-checked",LIST_BRAND_HARDWARE:"/api/list-brand-hardward",ADD_BRAND_HARDWARE:"/api/add-brand-hardward",UPDATE_BRAND_HARDWARE:"/api/update-brand-hardward",DELETE_BRAND_HARDWARE:"/api/delete-brand-hardward",UPLOAD_BRAND:"/api/upload-image-brand",LIST_PRODUCT_HARDWARE:"/api/list-product-hardward",ADD_PRODUCT_HARDWARE:"/api/add-product-hardward",UPDATE_PRODUCT_HARDWARE:"/api/update-product-hardward",DELETE_PRODUCT_HARDWARE:"/api/delete-product-hardward",UPLOAD_PRODUCT:"/api/upload-image-product"}},647:function(e,a,t){"use strict";t(2);var i=t(638),s=t.n(i),r=t(20),n=function(e){var a=e.field,t=e.value,i=e.label,n=e.error,c=e.type,d=e.onChange,l=e.checkUserExists,o=e.readOnly,p=e.placeholder;return Object(r.jsxs)("div",{className:s()("form-group",{"has-error":n}),children:[Object(r.jsx)("label",{className:"control-label",children:i}),Object(r.jsx)("input",{onChange:d,onBlur:l,value:t,type:c,name:a,placeholder:p,readOnly:o,className:"form-control"}),n&&Object(r.jsx)("span",{className:"help-block",children:n})]})};n.defaultProps={type:"text"},a.a=n},809:function(e,a,t){"use strict";var i=t(12),s=t(28),r=t(2),n=t.n(r),c=t(64),d=t.n(c),l=t(638),o=t.n(l),p=t(641),u={tag:p.n,inverse:d.a.bool,color:d.a.string,body:d.a.bool,outline:d.a.bool,className:d.a.string,cssModule:d.a.object,innerRef:d.a.oneOfType([d.a.object,d.a.string,d.a.func])},h=function(e){var a=e.className,t=e.cssModule,r=e.color,c=e.body,d=e.inverse,l=e.outline,u=e.tag,h=e.innerRef,E=Object(s.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),_=Object(p.j)(o()(a,"card",!!d&&"text-white",!!c&&"card-body",!!r&&(l?"border":"bg")+"-"+r),t);return n.a.createElement(u,Object(i.a)({},E,{className:_,ref:h}))};h.propTypes=u,h.defaultProps={tag:"div"},a.a=h},810:function(e,a,t){"use strict";var i=t(12),s=t(28),r=t(2),n=t.n(r),c=t(64),d=t.n(c),l=t(638),o=t.n(l),p=t(641),u={tag:p.n,className:d.a.string,cssModule:d.a.object,innerRef:d.a.oneOfType([d.a.object,d.a.string,d.a.func])},h=function(e){var a=e.className,t=e.cssModule,r=e.innerRef,c=e.tag,d=Object(s.a)(e,["className","cssModule","innerRef","tag"]),l=Object(p.j)(o()(a,"card-body"),t);return n.a.createElement(c,Object(i.a)({},d,{className:l,ref:r}))};h.propTypes=u,h.defaultProps={tag:"div"},a.a=h},855:function(e,a,t){"use strict";var i=t(12),s=t(28),r=t(2),n=t.n(r),c=t(64),d=t.n(c),l=t(638),o=t.n(l),p=t(641),u={tag:p.n,className:d.a.string,cssModule:d.a.object},h=function(e){var a=e.className,t=e.cssModule,r=e.tag,c=Object(s.a)(e,["className","cssModule","tag"]),d=Object(p.j)(o()(a,"card-header"),t);return n.a.createElement(r,Object(i.a)({},c,{className:d}))};h.propTypes=u,h.defaultProps={tag:"div"},a.a=h}}]);
//# sourceMappingURL=32.bc7121d4.chunk.js.map