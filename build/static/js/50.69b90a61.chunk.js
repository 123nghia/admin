(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[50],{1258:function(e,t,a){"use strict";a.r(t),function(e){var i=a(165),s=a(114),n=a.n(s),r=a(662),l=a(167),o=a(168),c=a(170),d=a(169),p=a(2),u=a(676),E=a(677),_=a(832),h=a(866),O=a(679),b=a(685),T=a(865),D=a(834),f=a(1294),g=a(1250),m=a(1251),S=a(1252),j=(a(664),a(647)),A=a(649),L=a(661),R=a.n(L),y=a(20),I=new Headers,v=localStorage.getItem("auth");I.append("Authorization","Bearer "+v),I.append("Content-Type","application/json");var P=function(t){Object(c.a)(s,t);var a=Object(d.a)(s);function s(e){var t;return Object(l.a)(this,s),(t=a.call(this,e)).getData=Object(r.a)(n.a.mark((function e(){var a,i;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.setState({isLoading:!0}),e.next=3,R()({baseURL:j.a.BASE_URL,url:j.a.LIST_ROLE,method:"GET",headers:t.state.token});case 3:a=e.sent,t.pagination(a.data.data),t.setState({dataApi:a.data.data}),i=0,a.data.data.map((function(e){"Actived"==e.Status&&(i+=1)})),t.setState({isLoading:!1,totalActive:i});case 9:case"end":return e.stop()}}),e)}))),t.openDelete=function(e){t.setState({modalDelete:!t.state.modalDelete,delete:e})},t.state={data:[],key:"",activePage:1,page:1,itemsCount:0,limit:20,totalActive:0,modalCom:!1,viewingUser:{},communities:[],updated:"",dataApi:[],action:"new",Name:"",Status:"",modalDelete:!1,delete:null,arrPagination:[],indexPage:0,token:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}},t}return Object(o.a)(s,[{key:"componentDidMount",value:function(){var e=Object(r.a)(n.a.mark((function e(){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.getData();case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"pagination",value:function(e){var t,a,i,s=[];for(t=0,a=e.length;t<a;t+=5)i=e.slice(t,t+5),s.push(i);this.setState({arrPagination:s,data:s[this.state.indexPage]})}},{key:"searchKey",value:function(e){if(this.setState({key:e}),""!=e){var t=[];this.state.dataApi.map((function(a){a.Name.toLocaleUpperCase().includes(e.toLocaleUpperCase())&&t.push(a)}));var a=0;t.map((function(e){"Actived"==e.Status&&(a+=1)})),this.setState({data:t,totalActive:a})}else{var i=0;this.state.dataApi.map((function(e){"Actived"==e.Status&&(i+=1)})),this.setState({data:this.state.dataApi,totalActive:i})}}},{key:"toggleModal",value:function(){var e=Object(r.a)(n.a.mark((function e(t){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:"new"==t&&this.setState({modalCom:!this.state.modalCom,action:t,Name:""});case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"onChange",value:function(e,t){this.setState(Object(i.a)({},e,t))}},{key:"addRoles",value:function(){var e=Object(r.a)(n.a.mark((function e(){var t,a,i;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!=(t=this.state.Name)&&""!=t){e.next=4;break}return alert("Please fill in all the requirements"),e.abrupt("return");case 4:return a={Name:t},this.setState({isLoading:!0}),e.next=8,R()({baseURL:j.a.BASE_URL,url:j.a.ADD_ROLE,method:"PUT",data:a});case 8:1==(i=e.sent).data.is_success?(this.getData(),this.setState({modalCom:!this.state.modalCom})):(alert(i.data.message),this.setState({isLoading:!1}));case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"openUpdate",value:function(){var e=Object(r.a)(n.a.mark((function e(t){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.setState({modalCom:!this.state.modalCom,action:"update",Name:t.Name,id:t._id,Status:t.Status});case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"updateUser",value:function(){var e=Object(r.a)(n.a.mark((function e(){var t,a,i,s,r;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.state,a=t.Name,i=t.Status,null!=a&&""!=a){e.next=4;break}return alert("Please fill in all the requirements"),e.abrupt("return");case 4:return s={Name:a,id:this.state.id,Status:i},this.setState({isLoading:!0}),e.next=8,R()({baseURL:j.a.BASE_URL,url:j.a.UPDATE_ROLE,method:"POST",data:s});case 8:1==(r=e.sent).data.is_success?(this.getData(),this.setState({modalCom:!this.state.modalCom})):(alert(r.data.message),this.setState({isLoading:!1}));case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"delete",value:function(){var e=Object(r.a)(n.a.mark((function e(){var t;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({isLoading:!0}),e.next=3,R()({baseURL:j.a.BASE_URL,url:j.a.DELETE_ROLE,method:"DELETE",data:{id:this.state.delete._id}});case 3:1==(t=e.sent).data.is_success?(this.getData(),this.setState({modalDelete:!this.state.modalDelete,delete:null})):(alert(t.data.message),this.setState({isLoading:!1}));case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getUsers",value:function(){var t=this,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,i=this.state.limit,s=this.state.key||"",n={method:"GET",headers:I};fetch(e.BASE_URL+"/admin/users?key="+s+"&page="+a+"&limit="+i,n).then((function(e){e.json().then((function(e){t.setState({data:e.data,itemsCount:e.total,activePage:a,totalActive:e.totalActive,updated:""})}))})).catch(console.log)}},{key:"inputChange",value:function(e){this.setState(Object(i.a)({},e.target.name,e.target.value))}},{key:"goSearch",value:function(){this.getUsers()}},{key:"render",value:function(){var e=this,t=this.state,a=t.data,i=t.key,s=(t.viewingUser,t.communities,t.dataCompany,t.currentCompany,t.dataSale,t.currentSale,t.action),l=t.arrPagination,o=t.indexPage;return Object(y.jsxs)("div",{className:"animated fadeIn",children:[Object(y.jsx)(u.a,{children:Object(y.jsxs)(E.a,{children:[Object(y.jsx)("p",{style:U.success,children:this.state.updated}),Object(y.jsx)("p",{style:U.danger,children:this.state.deleted}),Object(y.jsxs)(_.a,{children:[Object(y.jsxs)(h.a,{children:[Object(y.jsx)("i",{className:"fa fa-align-justify"})," ROLE (Total: ",void 0!=this.state.data||null!=this.state.data?this.state.data.length:0,", Active: ",this.state.totalActive,", Page: ",this.state.indexPage+1,"))",Object(y.jsx)("div",{style:U.tags,children:Object(y.jsxs)("div",{children:[Object(y.jsx)(O.a,{style:U.searchInput,onChange:function(t){return e.searchKey(t.target.value)},name:"key",value:i,placeholder:"Search"}),Object(y.jsx)(b.a,{outline:!0,color:"primary",style:U.floatRight,size:"sm",onClick:function(){var t=Object(r.a)(n.a.mark((function t(a){return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.toggleModal("new");case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),children:"Add"})]})})]}),Object(y.jsx)(T.a,{children:Object(y.jsxs)(D.a,{responsive:!0,children:[Object(y.jsx)("thead",{children:Object(y.jsxs)("tr",{children:[Object(y.jsx)("th",{style:U.wa10,children:"No."}),Object(y.jsx)("th",{style:U.wh25,children:"Name"}),Object(y.jsx)("th",{style:U.wh25,children:"Status"}),Object(y.jsx)("th",{style:U.wh25,children:"Create Date"}),Object(y.jsx)("th",{style:U.w5,children:"Action"})]})}),Object(y.jsx)("tbody",{children:void 0!=a?a.map((function(t,a){return Object(y.jsxs)("tr",{style:U.row,children:[Object(y.jsx)("td",{style:U.wa10,children:a+1}),Object(y.jsx)("td",{style:U.wh25,children:t.Name}),Object(y.jsx)("td",{style:U.wh25,children:t.Status}),Object(y.jsx)("td",{style:U.wh25,children:t.Create_Date}),Object(y.jsxs)("td",{style:U.w5,children:[Object(y.jsx)(b.a,{style:U.mgl5,outline:!0,color:"primary",size:"sm",onClick:function(){var a=Object(r.a)(n.a.mark((function a(i){return n.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.openUpdate(t);case 2:return a.abrupt("return",a.sent);case 3:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}(),children:"Update"})," ",Object(y.jsx)(b.a,{outline:!0,color:"danger",size:"sm",onClick:function(a){e.openDelete(t)},children:"Delete"})]})]},a)})):""})]})})]}),1==l.length?"":Object(y.jsx)("div",{style:{float:"right",marginRight:"10px",padding:"10px"},children:Object(y.jsx)("tr",{style:U.row,children:l.map((function(t,a){return Object(y.jsx)("td",{children:Object(y.jsx)(b.a,{style:U.pagination,color:a==o?"primary":"danger",onClick:function(t){e.setState({data:l[a],indexPage:a})},children:a+1})})}))})})]})}),Object(y.jsxs)(f.a,{isOpen:this.state.modalCom,className:this.props.className,children:[Object(y.jsx)(g.a,{children:"new"==this.state.action?"Create":"Update"}),Object(y.jsxs)(m.a,{children:[Object(y.jsx)(A.a,{field:"Name",label:"Name",value:this.state.Name,placeholder:"Name",onChange:function(t){return e.onChange("Name",t.target.value)}}),"new"==s?"":Object(y.jsxs)("div",{children:[Object(y.jsx)("label",{style:U.flexLabel,htmlFor:"tag",children:"Status:"}),Object(y.jsxs)("select",{style:U.flexOption,name:"Status",onChange:function(t){return e.onChange("Status",t.target.value)},children:[Object(y.jsx)("option",{value:this.state.Status,children:""==this.state.Status?" - - - - - - - - - - ":this.state.Status}),Object(y.jsx)("option",{value:"Actived",children:"Actived"}),Object(y.jsx)("option",{value:"Locked",children:"Locked"}),Object(y.jsx)("option",{value:"Deactived",children:"Deactived"})]})]})]}),Object(y.jsxs)(S.a,{children:[Object(y.jsx)(b.a,{color:"primary",onClick:function(t){"new"===e.state.action?e.addRoles():e.updateUser()},disabled:this.state.isLoading,children:"Save"})," ",Object(y.jsx)(b.a,{color:"secondary",onClick:function(t){return e.toggleModal("new")},children:"Cancel"})]})]}),Object(y.jsxs)(f.a,{isOpen:this.state.modalDelete,toggle:function(t){return e.setState({modalDelete:!e.state.modalDelete,delete:null})},className:this.props.className,children:[Object(y.jsx)(g.a,{toggle:function(t){return e.setState({modalDelete:!e.state.modalDelete,delete:null})},children:"Delete"}),Object(y.jsx)(m.a,{children:Object(y.jsx)("label",{htmlFor:"tag",children:'Do you want to delete user "'.concat(this.state.delete?this.state.delete.Email:"",'" ?')})}),Object(y.jsxs)(S.a,{children:[Object(y.jsx)(b.a,{color:"primary",onClick:function(t){return e.delete()},disabled:this.state.isLoading,children:"Delete"})," ",Object(y.jsx)(b.a,{color:"secondary",onClick:function(t){return e.setState({modalDelete:!e.state.modalDelete,delete:null})},children:"Cancel"})]})]})]})}}]),s}(p.Component),U=Object(i.a)({pagination:{marginRight:"5px"},flexLabel:{width:100},flexOption:{width:300},a:{textDecoration:"none"},floatRight:{float:"right",marginTop:"3px"},spinner:{width:"30px"},center:{textAlign:"center"},tbody:{height:"380px",overflowY:"auto"},wh25:{width:"25%",float:"left",height:"80px"},w5:{width:"15%",float:"left",height:"80px"},wa10:{width:"5%",float:"left",height:"80px"},row:{float:"left",width:"100%"},success:{color:"green"},danger:{color:"red"},mgl5:{marginLeft:"5px"},tags:{float:"right",marginRight:"5px",width:"250px"},searchInput:{width:"190px",display:"inline-block"},userActive:{color:"green"},userPending:{color:"red"},nagemonNameCol:{width:"328px"},image:{width:"100px",height:"100px",borderRadius:"99999px"}},"mgl5",{marginBottom:"0px"});t.default=P}.call(this,a(115))},647:function(e,t,a){"use strict";var i,s=a(165);t.a=(i={BASE_URL:"https://api-soida.applamdep.com",BASE_URL_CURRENT:"http://localhost:3003",LIST_USER:"/api/list-user",LIST_USER_WITH_ID:"/api/list-user?id=",ADD_USER:"/api/add-user",UPDATE_USER:"/api/update-user",DELETE_USER:"/api/delete-user",LOGIN_ADMIN:"/api/login_admin",GET_SHOP:"/api/get-shop",GET_SALE:"/api/get-sale",GET_COEFFICIENT:"/api/calculator-coefficient-user",GET_COEFFICIENT_PER_SALE:"/api/calculator-coefficient-user-per-sale",GET_USER_SALE_BY_MONTH:"/api/get-user-of-sale-by-month",CALCULATOR_ALL_USER_OF_COMPANY:"/api/calculator-all-user-company",CALCULATOR_ALL_USER_OF_SALE:"/api/calculator-all-user-of-sale",GET_SEEDER:"/api/get-seed",GET_SALE_NAME:"/api/get-name-sale",GET_USER_BY_ID:"/api/get-user-byID",LIST_CUSTOMER:"/api/list-customer",LIST_CUSTOMER_BY_MONTH:"/api/get-user-sale-by-month",LIST_TYPEKEY:"/api/list-typekey",LIST_TYPEKEY_WITH_ID:"/api/list-typekey?id=",ADD_TYPEKEY:"/api/add-typekey",UPDATE_TYPEKEY:"/api/update-typekey",DELETE_TYPEKEY:"/api/delete-typekey",LIST_HARDWARE:"/api/list-hardware",LIST_HARDWARE_WITH_ID:"/api/list-hardware?id=",ADD_HARDWARE:"/api/add-hardware",UPDATE_HARDWARE:"/api/update-hardware",DELETE_HARDWARE:"/api/delete-hardware",LIST_ORDER:"/api/list-order",LIST_ORDER_BY_SALE:"/api/plugin-list-order-by-saleid",ADD_ORDER:"/api/add-order",UPDATE_STATUS_ORDER:"/api/update-status-order",CHECK_OUT:"/api/checkout-order",LIST_TRANSACTION:"/api/list-transaction",ADD_TRANSACTION:"/api/add-transaction",LIST_CHECK_OUT:"/api/list-checkout",LIST_HARDWARE_CHECKOUT:"/api/get-list-hardward-by-check-out",UPDATE_STATUS_CHECKOUT:"/api/update-status-hardware",LIST_ORDER_DETAIL:"/api/list-orderdetail",ADD_ORDER_DETAIL:"/api/add-orderdetail",LIST_ROLE:"/api/list-role",LIST_ROLE_WITH_ID:"/api/list-role?id=",ADD_ROLE:"/api/add-role",UPDATE_ROLE:"/api/update-role",DELETE_ROLE:"/api/delete-role",LIST_PACKAGE:"/api/list-package",ADD_PACKAGE:"/api/add-package",UPDATE_PACKAGE:"/api/update-package",DELETE_PACKAGE:"/api/delete-package",PLUGIN_DATA_PACKAGE:"/api/get-name-package",LIST_SALELOG:"/api/list-salelog",LIST_SALELOG_WITH_ID:"/api/list-salelog?id=",ADD_SALELOG:"/api/add-salelog",UPDATE_SALELOG:"/api/update-salelog",DELETE_SALELOG:"/api/delete-salelog",DATA_SALE:"/api/get-data-sale",LIST_SALE:"/api/list-sale",LIST_SALE_WITH_ID:"/api/list-sale?id=",ADD_SALE:"/api/add-sale",UPDATE_SALE:"/api/update-sale",DELETE_SALE:"/api/delete-sale",LIST_KEYORDER:"/api/list-keyorder",LIST_KEYORDER_WITH_ID:"/api/list-keyorder?id=",ADD_KEYORDER:"/api/add-keyorder",UPDATE_KEYORDER:"/api/update-keyorder",DELETE_KEYORDER:"/api/delete-keyorder",LIST_KEY:"/api/list-key",LIST_KEY_WITH_ID:"/api/list-key?id=",ADD_KEY:"/api/add-key",UPDATE_KEY:"/api/update-key",DELETE_KEY:"/api/delete-key",PLUGIN_LIST_COMPANY:"/api/plugin-list-company",PLUGIN_LIST_COMPANY_BY_ID:"/api/plugin-list-company-by-id",PLUGIN_LIST_COMPANY_WITH_ID:"/api/plugin-list-company?id=",PLUGIN_ADD_COMPANY:"/api/plugin-add-company",PLUGIN_UPDATE_COMPANY:"/api/plugin-update-company",PLUGIN_DELETE_COMPANY:"/api/plugin-delete-company",PLUGIN_DATA_COMPANY:"/api/plugin-get-data-company",LIST_COMPANY:"/api/list-company",LIST_COMPANY_WITH_ID:"/api/list-company?id=",ADD_COMPANY:"/api/add-company",UPDATE_COMPANY:"/api/update-company",DELETE_COMPANY:"/api/delete-company",DATA_COMPANY:"/api/get-data-company",LIST_LINK:"/api/list-link",LIST_LINK_WITH_ID:"/api/list-link?id=",ADD_LINK:"/api/add-link",UPDATE_LINK:"/api/update-link",DELETE_LINK:"/api/delete-link","GET-LINK-BY-ID":"/api/link-by-id",LIST_FEATURE:"/api/list-feature",ADD_FEATURE:"/api/add-feature",UPDATE_FEATURE:"/api/update-feature",DELETE_FEATURE:"/api/delete-feature",DATA_CHOOSE_FEATURE:"/api/get-feature-choose",LIST_PLUGIN_ORDER:"/api/plugin-list-order",LIST_PLUGIN_ORDER_BY_ID:"/api/plugin-list-order-by-id",LIST_PLUGIN_ORDER_FOR_ADMIN:"/api/plugin-list-order-for-admin",ADD_PLUGIN_ORDER:"/api/plugin-add-order",UPDATE_PLUGIN_ORDER:"/api/plugin-update-order",DELETE_PLUGIN_ORDER:"/api/plugin-delete-order",UPDATE_SLUG:"/api/plugin-update-slug",PLUGIN_LIST_USER:"/api/plugin-list-user",PLUGIN_ALL_USER:"/api/plugin-all-user",PLUGIN_ADD_USER:"/api/plugin-add-user",PLUGIN_ADD_SALE:"/api/plugin-add-sale",PLUGIN_UPDATE_USER:"/api/plugin-update-user",PLUGIN_DELETE_USER:"/api/plugin-delete-user",PLUGIN_RESET_PASSWORD:"/api/plugin-reset-password",PLUGIN_UPDATE_PASSWORD:"/api/plugin-update-password",PLUGIN_UPDATE_STATUS:"/api/plugin-update-status",PLUGIN_LOGIN_ADMIN:"/api/plugin-login_admin",PLUGIN_GET_USER_BYID:"/api/plugin-get-user-byID",PLUGIN_GET_USER_BY_BODY:"/api/plugin-get-user-byID-with-body",PLUGIN_LIST_ROLE:"/api/plugin-list-role",PLUGIN_ADD_ROLE:"/api/plugin-add-role",PLUGIN_UPDATE_ROLE:"/api/plugin-update-role",PLUGIN_DELETE_ROLE:"/api/plugin-delete-role",CUS_RES_LIST:"/api/list-customer-request",CUS_RES_LIST_COMPANY:"/api/list-customer-request-for-company",CUS_RES_ADD:"/api/add-customer-request",CUS_RES_UPDATE:"/api/update-customer-request",CUS_RES_DELETE:"/api/delete-customer-request",REWARD_INFO_LIST:"/api/list-reward-info",REWARD_INFO_LIST_COMPANY:"/api/list-reward-info-for-company",REWARD_INFO_ADD:"/api/add-reward-info",REWARD_INFO_UPDATE:"/api/update-reward-info",REWARD_INFO_DELETE:"/api/delete-reward-info",REWARD_TRANS_LIST:"/api/list-reward-trans",REWARD_TRANS_ADD:"/api/list-reward-trans",REWARD_TRANS_UPDATE:"/api/update-reward-trans",REWARD_TRANS_DELETE:"/api/delete-reward-trans",TYPE_REQUEST_LIST:"/api/list-type-request",TYPE_REQUEST_ADD:"/api/add-type-request",TYPE_REQUEST_UPDATE:"/api/update-type-request",TYPE_REQUEST_DELETE:"/api/delete-type-request"},Object(s.a)(i,"LIST_CUSTOMER","/api/list-customer"),Object(s.a)(i,"LIST_CUSTOMER_FOR_COMPANY","/api/list-customer-for-company"),Object(s.a)(i,"LIST_SUGGEST_ITEM","/itemSdk"),Object(s.a)(i,"LIST_SUGGEST_ITEM_COMPANY","/itemSdk/"),Object(s.a)(i,"ADD_SUGGEST_ITEM","/itemSdk"),Object(s.a)(i,"UPDATE_SUGGEST_ITEM","/itemSdk/"),Object(s.a)(i,"DELETE_SUGGEST_ITEM","/itemSdk/deleteItem"),Object(s.a)(i,"LIST_SDK","/sdk"),Object(s.a)(i,"LIST_BRAND","/brands"),Object(s.a)(i,"LIST_BRAND_COMPANY","/brands/"),Object(s.a)(i,"ADD_BRAND","/add-brand"),Object(s.a)(i,"UPDATE_BRAND","/update-brand"),Object(s.a)(i,"DELETE_BRAND","/delete-brand"),Object(s.a)(i,"LIST_PRODUCT","/product"),Object(s.a)(i,"LIST_PRODUCT_COMPANY","/product/"),Object(s.a)(i,"ADD_PRODUCT","/add-product"),Object(s.a)(i,"UPDATE_PRODUCT","/update-product"),Object(s.a)(i,"DELETE_PRODUCT","/delete-product"),Object(s.a)(i,"LIST_TYPE","/types"),Object(s.a)(i,"LIST_TYPE_COMPANY","/types/"),Object(s.a)(i,"ADD_TYPE","/add-type"),Object(s.a)(i,"UPDATE_TYPE","/update-type"),Object(s.a)(i,"DELETE_TYPE","/delete-type"),Object(s.a)(i,"LIST_COLOR","/colors"),Object(s.a)(i,"LIST_COLOR_COMPANY","/colors/"),Object(s.a)(i,"ADD_COLOR","/add-color"),Object(s.a)(i,"UPDATE_COLOR","/update-color"),Object(s.a)(i,"DELETE_COLOR","/delete-color"),Object(s.a)(i,"LIST_HISTORY_SKIN","/api/get-history-skin"),Object(s.a)(i,"LIST_HISTORY_SKIN_BY_CONDITION","/api/get-history-skin-by-condition"),Object(s.a)(i,"ADD_HISTORY_SKIN","/api/add-history-skin"),Object(s.a)(i,"LIST_TYPE_PRODUCT","/api/list-type-product"),Object(s.a)(i,"ADD_TYPE_PRODUCT","/api/add-type-product"),Object(s.a)(i,"UPDATE_TYPE_PRODUCT","/api/update-type-product"),Object(s.a)(i,"DELETE_TYPE_PRODUCT","/api/delete-type-product"),Object(s.a)(i,"LIST_TYPE_SDK","/api/list-type-sdk"),Object(s.a)(i,"ADD_TYPE_SDK","/api/add-type-sdk"),Object(s.a)(i,"UPDATE_TYPE_SDK","/api/update-type-sdk"),Object(s.a)(i,"DELETE_TYPE_SDK","/api/delete-type-sdk"),i)},649:function(e,t,a){"use strict";a(2);var i=a(639),s=a.n(i),n=a(20),r=function(e){var t=e.field,a=e.value,i=e.label,r=e.error,l=e.type,o=e.onChange,c=e.checkUserExists,d=e.readOnly,p=e.placeholder,u=e.onClick;return Object(n.jsxs)("div",{className:s()("form-group",{"has-error":r}),children:[Object(n.jsx)("label",{className:"control-label",children:i}),Object(n.jsx)("input",{onChange:o,onClick:u,onBlur:c,value:a,type:l,name:t,placeholder:p,readOnly:d,className:"form-control"}),r&&Object(n.jsx)("span",{className:"help-block",children:r})]})};r.defaultProps={type:"text"},t.a=r},676:function(e,t,a){"use strict";var i=a(12),s=a(28),n=a(2),r=a.n(n),l=a(64),o=a.n(l),c=a(639),d=a.n(c),p=a(641),u=o.a.oneOfType([o.a.number,o.a.string]),E={tag:p.n,noGutters:o.a.bool,className:o.a.string,cssModule:o.a.object,form:o.a.bool,xs:u,sm:u,md:u,lg:u,xl:u},_={tag:"div",widths:["xs","sm","md","lg","xl"]},h=function(e){var t=e.className,a=e.cssModule,n=e.noGutters,l=e.tag,o=e.form,c=e.widths,u=Object(s.a)(e,["className","cssModule","noGutters","tag","form","widths"]),E=[];c.forEach((function(t,a){var i=e[t];if(delete u[t],i){var s=!a;E.push(s?"row-cols-"+i:"row-cols-"+t+"-"+i)}}));var _=Object(p.j)(d()(t,n?"no-gutters":null,o?"form-row":"row",E),a);return r.a.createElement(l,Object(i.a)({},u,{className:_}))};h.propTypes=E,h.defaultProps=_,t.a=h},677:function(e,t,a){"use strict";var i=a(12),s=a(28),n=a(2),r=a.n(n),l=a(64),o=a.n(l),c=a(639),d=a.n(c),p=a(641),u=o.a.oneOfType([o.a.number,o.a.string]),E=o.a.oneOfType([o.a.bool,o.a.number,o.a.string,o.a.shape({size:o.a.oneOfType([o.a.bool,o.a.number,o.a.string]),order:u,offset:u})]),_={tag:p.n,xs:E,sm:E,md:E,lg:E,xl:E,className:o.a.string,cssModule:o.a.object,widths:o.a.array},h={tag:"div",widths:["xs","sm","md","lg","xl"]},O=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},b=function(e){var t=e.className,a=e.cssModule,n=e.widths,l=e.tag,o=Object(s.a)(e,["className","cssModule","widths","tag"]),c=[];n.forEach((function(t,i){var s=e[t];if(delete o[t],s||""===s){var n=!i;if(Object(p.h)(s)){var r,l=n?"-":"-"+t+"-",u=O(n,t,s.size);c.push(Object(p.j)(d()(((r={})[u]=s.size||""===s.size,r["order"+l+s.order]=s.order||0===s.order,r["offset"+l+s.offset]=s.offset||0===s.offset,r)),a))}else{var E=O(n,t,s);c.push(E)}}})),c.length||c.push("col");var u=Object(p.j)(d()(t,c),a);return r.a.createElement(l,Object(i.a)({},o,{className:u}))};b.propTypes=_,b.defaultProps=h,t.a=b},679:function(e,t,a){"use strict";var i=a(12),s=a(28),n=a(646),r=a(35),l=a(2),o=a.n(l),c=a(64),d=a.n(c),p=a(639),u=a.n(p),E=a(641),_={children:d.a.node,type:d.a.string,size:d.a.oneOfType([d.a.number,d.a.string]),bsSize:d.a.string,valid:d.a.bool,invalid:d.a.bool,tag:E.n,innerRef:d.a.oneOfType([d.a.object,d.a.func,d.a.string]),plaintext:d.a.bool,addon:d.a.bool,className:d.a.string,cssModule:d.a.object},h=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(n.a)(a)),a.focus=a.focus.bind(Object(n.a)(a)),a}Object(r.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.focus=function(){this.ref&&this.ref.focus()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,n=e.type,r=e.bsSize,l=e.valid,c=e.invalid,d=e.tag,p=e.addon,_=e.plaintext,h=e.innerRef,O=Object(s.a)(e,["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"]),b=["radio","checkbox"].indexOf(n)>-1,T=new RegExp("\\D","g"),D=d||("select"===n||"textarea"===n?n:"input"),f="form-control";_?(f+="-plaintext",D=d||"input"):"file"===n?f+="-file":"range"===n?f+="-range":b&&(f=p?null:"form-check-input"),O.size&&T.test(O.size)&&(Object(E.p)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),r=O.size,delete O.size);var g=Object(E.j)(u()(t,c&&"is-invalid",l&&"is-valid",!!r&&"form-control-"+r,f),a);return("input"===D||d&&"function"===typeof d)&&(O.type=n),O.children&&!_&&"select"!==n&&"string"===typeof D&&"select"!==D&&(Object(E.p)('Input with a type of "'+n+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete O.children),o.a.createElement(D,Object(i.a)({},O,{ref:h,className:g,"aria-invalid":c}))},t}(o.a.Component);h.propTypes=_,h.defaultProps={type:"text"},t.a=h},685:function(e,t,a){"use strict";var i=a(12),s=a(28),n=a(646),r=a(35),l=a(2),o=a.n(l),c=a(64),d=a.n(c),p=a(639),u=a.n(p),E=a(641),_={active:d.a.bool,"aria-label":d.a.string,block:d.a.bool,color:d.a.string,disabled:d.a.bool,outline:d.a.bool,tag:E.n,innerRef:d.a.oneOfType([d.a.object,d.a.func,d.a.string]),onClick:d.a.func,size:d.a.string,children:d.a.node,className:d.a.string,cssModule:d.a.object,close:d.a.bool},h=function(e){function t(t){var a;return(a=e.call(this,t)||this).onClick=a.onClick.bind(Object(n.a)(a)),a}Object(r.a)(t,e);var a=t.prototype;return a.onClick=function(e){if(!this.props.disabled)return this.props.onClick?this.props.onClick(e):void 0;e.preventDefault()},a.render=function(){var e=this.props,t=e.active,a=e["aria-label"],n=e.block,r=e.className,l=e.close,c=e.cssModule,d=e.color,p=e.outline,_=e.size,h=e.tag,O=e.innerRef,b=Object(s.a)(e,["active","aria-label","block","className","close","cssModule","color","outline","size","tag","innerRef"]);l&&"undefined"===typeof b.children&&(b.children=o.a.createElement("span",{"aria-hidden":!0},"\xd7"));var T="btn"+(p?"-outline":"")+"-"+d,D=Object(E.j)(u()(r,{close:l},l||"btn",l||T,!!_&&"btn-"+_,!!n&&"btn-block",{active:t,disabled:this.props.disabled}),c);b.href&&"button"===h&&(h="a");var f=l?"Close":null;return o.a.createElement(h,Object(i.a)({type:"button"===h&&b.onClick?"button":void 0},b,{className:D,ref:O,onClick:this.onClick,"aria-label":a||f}))},t}(o.a.Component);h.propTypes=_,h.defaultProps={color:"secondary",tag:"button"},t.a=h},834:function(e,t,a){"use strict";var i=a(12),s=a(28),n=a(2),r=a.n(n),l=a(64),o=a.n(l),c=a(639),d=a.n(c),p=a(641),u={className:o.a.string,cssModule:o.a.object,size:o.a.string,bordered:o.a.bool,borderless:o.a.bool,striped:o.a.bool,dark:o.a.bool,hover:o.a.bool,responsive:o.a.oneOfType([o.a.bool,o.a.string]),tag:p.n,responsiveTag:p.n,innerRef:o.a.oneOfType([o.a.func,o.a.string,o.a.object])},E=function(e){var t=e.className,a=e.cssModule,n=e.size,l=e.bordered,o=e.borderless,c=e.striped,u=e.dark,E=e.hover,_=e.responsive,h=e.tag,O=e.responsiveTag,b=e.innerRef,T=Object(s.a)(e,["className","cssModule","size","bordered","borderless","striped","dark","hover","responsive","tag","responsiveTag","innerRef"]),D=Object(p.j)(d()(t,"table",!!n&&"table-"+n,!!l&&"table-bordered",!!o&&"table-borderless",!!c&&"table-striped",!!u&&"table-dark",!!E&&"table-hover"),a),f=r.a.createElement(h,Object(i.a)({},T,{ref:b,className:D}));if(_){var g=Object(p.j)(!0===_?"table-responsive":"table-responsive-"+_,a);return r.a.createElement(O,{className:g},f)}return f};E.propTypes=u,E.defaultProps={tag:"table",responsiveTag:"div"},t.a=E}}]);
//# sourceMappingURL=50.69b90a61.chunk.js.map