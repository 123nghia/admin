(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[57],{1260:function(e,t,a){"use strict";a.r(t),function(e){var i=a(165),s=a(114),n=a.n(s),r=a(649),l=a(167),c=a(168),d=a(170),o=a(169),p=a(2),u=a(668),_=a(669),E=a(670),O=a(671),h=a(674),T=a(702),D=a(672),S=a(759),A=a(1306),b=a(1245),m=a(1246),j=a(1247),L=(a(665),a(760)),g=a.n(L),I=(a(693),a(643)),R=a(656),f=a(654),P=a.n(f),U=a(17),y=new Headers,N=localStorage.getItem("auth");y.append("Authorization","Bearer "+N),y.append("Content-Type","application/json");var C=function(t){Object(d.a)(s,t);var a=Object(o.a)(s);function s(e){var t;return Object(l.a)(this,s),(t=a.call(this,e)).getData=Object(r.a)(n.a.mark((function e(){var a,i;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.setState({isLoading:!0}),e.next=3,P()({baseURL:I.a.BASE_URL,url:I.a.LIST_SALE,method:"GET"});case 3:a=e.sent,t.pagination(a.data.data),t.setState({dataApi:a.data.data}),i=0,a.data.data.map((function(e){"Actived"==e.Status&&(i+=1)})),t.setState({isLoading:!1,totalActive:i});case 9:case"end":return e.stop()}}),e)}))),t.openDelete=function(e){t.setState({modalDelete:!t.state.modalDelete,delete:e})},t.state={data:[],key:"",activePage:1,page:1,itemsCount:0,limit:20,totalActive:0,modalCom:!1,viewingUser:{},communities:[],updated:"",dataApi:[],action:"new",Name:"",Company_Id:"",End_Date:new Date,Status:"",modalDelete:!1,delete:null,dataCompany:[],currentCompany:"",arrPagination:[],indexPage:0},t}return Object(c.a)(s,[{key:"componentDidMount",value:function(){var e=Object(r.a)(n.a.mark((function e(){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.getData();case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"pagination",value:function(e){var t,a,i,s=[];for(t=0,a=e.length;t<a;t+=5)i=e.slice(t,t+5),s.push(i);this.setState({arrPagination:s,data:s[this.state.indexPage]})}},{key:"searchKey",value:function(e){if(this.setState({key:e}),""!=e){var t=[];this.state.dataApi.map((function(a){a.Name.toLocaleUpperCase().includes(e.toLocaleUpperCase())&&t.push(a)}));var a=0;t.map((function(e){"Actived"==e.Status&&(a+=1)})),this.setState({data:t,totalActive:a})}else{var i=0;this.state.dataApi.map((function(e){"Actived"==e.Status&&(i+=1)})),this.setState({data:this.state.dataApi,totalActive:i})}}},{key:"toggleModal",value:function(){var e=Object(r.a)(n.a.mark((function e(t){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getCompanyData();case 2:"new"==t&&this.setState({modalCom:!this.state.modalCom,action:t,Name:"",Company_Id:"",End_Date:new Date});case 3:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"onChange",value:function(e,t){this.setState(Object(i.a)({},e,t))}},{key:"addPackageSale",value:function(){var e=Object(r.a)(n.a.mark((function e(){var t,a,i,s,r,l;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.state,a=t.Name,i=t.Company_Id,null!=(s=t.End_Date)&&""!=s&&null!=a&&""!=a){e.next=4;break}return alert("Please fill in all the requirements"),e.abrupt("return");case 4:return r={Name:a,Company_Id:i,End_Date:s},this.setState({isLoading:!0}),e.next=8,P()({baseURL:I.a.BASE_URL,url:I.a.ADD_SALE,method:"PUT",data:r});case 8:1==(l=e.sent).data.is_success?(this.getData(),this.setState({modalCom:!this.state.modalCom})):(alert(l.data.message),this.setState({isLoading:!1}));case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"openUpdate",value:function(){var e=Object(r.a)(n.a.mark((function e(t){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getCompanyData(t.Company_Id);case 2:this.setState({modalCom:!this.state.modalCom,action:"update",Name:t.Name,Company_Id:t.Company_Id,End_Date:t.End_Date,id:t._id,Status:t.Status});case 3:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"updatePackageSale",value:function(){var e=Object(r.a)(n.a.mark((function e(){var t,a,i,s,r,l,c;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.state,a=t.Name,i=t.Company_Id,s=t.End_Date,r=t.Status,null!=s&&""!=s&&null!=a&&""!=a){e.next=4;break}return alert("Please fill in all the requirements"),e.abrupt("return");case 4:return l={Name:a,Company_Id:i,End_Date:s,id:this.state.id,Status:r},this.setState({isLoading:!0}),e.next=8,P()({baseURL:I.a.BASE_URL,url:I.a.UPDATE_SALE,method:"POST",data:l});case 8:1==(c=e.sent).data.is_success?(this.getData(),this.setState({modalCom:!this.state.modalCom})):(alert(c.data.message),this.setState({isLoading:!1}));case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"delete",value:function(){var e=Object(r.a)(n.a.mark((function e(){var t;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({isLoading:!0}),e.next=3,P()({baseURL:I.a.BASE_URL,url:I.a.DELETE_SALE,method:"DELETE",data:{id:this.state.delete._id}});case 3:1==(t=e.sent).data.is_success?(this.getData(),this.setState({modalDelete:!this.state.modalDelete,delete:null})):(alert(t.data.message),this.setState({isLoading:!1}));case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getUsers",value:function(){var t=this,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,i=this.state.limit,s=this.state.key||"",n={method:"GET",headers:y};fetch(e.BASE_URL+"/admin/users?key="+s+"&page="+a+"&limit="+i,n).then((function(e){e.json().then((function(e){t.setState({data:e.data,itemsCount:e.total,activePage:a,totalActive:e.totalActive,updated:""})}))})).catch(console.log)}},{key:"handlePageChange",value:function(){var e=Object(r.a)(n.a.mark((function e(t){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.getUsers(t);case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"toggle",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";this.setState({modal:!this.state.modal,image:"",url:"",isActive:!1,isLoading:!1,errors:{},action:e,position:1,data:[],updated:""})}},{key:"inputChange",value:function(e){this.setState(Object(i.a)({},e.target.name,e.target.value))}},{key:"getCompanyData",value:function(){var e=Object(r.a)(n.a.mark((function e(t){var a,i;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P()({baseURL:I.a.BASE_URL,url:I.a.LIST_COMPANY,method:"POST"});case 2:if(a=e.sent,""==t&&void 0==t){e.next=8;break}return e.next=6,P()({baseURL:I.a.BASE_URL,url:I.a.LIST_COMPANY_WITH_ID+t,method:"POST"});case 6:null==(i=e.sent).data.data&&void 0==i.data.data||this.setState({currentCompany:i.data.data.Name});case 8:this.setState({dataCompany:a.data.data});case 9:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,a=t.data,i=t.key,s=t.action,n=t.End_Date,r=t.dataCompany,l=t.currentCompany,c=t.arrPagination,d=t.indexPage;return this.state.isLoading?Object(U.jsx)("div",{id:"page-loading",children:Object(U.jsxs)("div",{className:"three-balls",children:[Object(U.jsx)("div",{className:"ball ball1"}),Object(U.jsx)("div",{className:"ball ball2"}),Object(U.jsx)("div",{className:"ball ball3"})]})}):Object(U.jsxs)("div",{className:"animated fadeIn",children:[Object(U.jsx)(u.a,{children:Object(U.jsxs)(_.a,{children:[Object(U.jsx)("p",{style:v.success,children:this.state.updated}),Object(U.jsx)("p",{style:v.danger,children:this.state.deleted}),Object(U.jsxs)(E.a,{children:[Object(U.jsxs)(O.a,{children:[Object(U.jsx)("i",{className:"fa fa-align-justify"})," PAKAGE SALE (Total: ",void 0!=this.state.data||null!=this.state.data?this.state.data.length:0,", Active: ",this.state.totalActive,", Page: ",this.state.indexPage+1,")",Object(U.jsx)("div",{style:v.tags,children:Object(U.jsxs)("div",{children:[Object(U.jsx)(h.a,{style:v.searchInput,onChange:function(t){return e.searchKey(t.target.value)},name:"key",value:i,placeholder:"Search"}),Object(U.jsx)(T.a,{outline:!0,color:"primary",style:v.floatRight,size:"sm",onClick:function(t){return e.toggleModal("new")},children:"Add"})]})})]}),Object(U.jsx)(D.a,{children:Object(U.jsxs)(S.a,{responsive:!0,children:[Object(U.jsx)("thead",{children:Object(U.jsxs)("tr",{children:[Object(U.jsx)("th",{style:v.wa10,children:"No."}),Object(U.jsx)("th",{style:v.wh16,children:"Name"}),Object(U.jsx)("th",{style:v.wh16,children:"Company ID"}),Object(U.jsx)("th",{style:v.wh16,children:"End Date"}),Object(U.jsx)("th",{style:v.wh16,children:"Status"}),Object(U.jsx)("th",{style:v.w5,children:"Action"})]})}),Object(U.jsx)("tbody",{children:void 0!=a?a.map((function(t,a){return Object(U.jsxs)("tr",{style:v.row,children:[Object(U.jsx)("td",{style:v.wa10,children:a+1}),Object(U.jsx)("td",{style:v.wh16,children:t.Name}),Object(U.jsx)("td",{style:v.wh16,children:t.Company_Id}),Object(U.jsx)("td",{style:v.wh16,children:new Date(t.End_Date).toLocaleDateString()+" "+new Date(t.End_Date).toLocaleTimeString()}),Object(U.jsx)("td",{style:v.wh16,children:t.Status}),Object(U.jsxs)("td",{style:v.w5,children:[Object(U.jsx)(T.a,{outline:!0,color:"primary",size:"sm",onClick:function(a){return e.openUpdate(t)},children:"Update"})," ",Object(U.jsx)(T.a,{outline:!0,color:"danger",size:"sm",onClick:function(a){e.openDelete(t)},children:"Delete"})]})]},a)})):""})]})})]}),1==c.length?"":Object(U.jsx)("div",{style:{float:"right",marginRight:"10px",padding:"10px"},children:Object(U.jsx)("tr",{style:v.row,children:c.map((function(t,a){return Object(U.jsx)("td",{children:Object(U.jsx)(T.a,{style:v.pagination,color:a==d?"primary":"danger",onClick:function(t){e.setState({data:c[a],indexPage:a})},children:a+1})})}))})})]})}),Object(U.jsxs)(A.a,{isOpen:this.state.modalCom,className:this.props.className,children:[Object(U.jsx)(b.a,{children:"new"==this.state.action?"T\u1ea1o m\u1edbi":"C\u1eadp nh\u1eadt"}),Object(U.jsxs)(m.a,{children:[Object(U.jsx)(R.a,{field:"Name",label:"Name",value:this.state.Name,placeholder:"Name Package",onChange:function(t){return e.onChange("Name",t.target.value)}}),Object(U.jsxs)("div",{style:v.datePicker,children:[Object(U.jsx)("label",{children:"End Date:  "}),Object(U.jsx)(g.a,{selected:new Date(n),onChange:function(t){return e.setState({End_Date:t})}})]}),"new"==s?"":Object(U.jsxs)("div",{children:[Object(U.jsx)("label",{style:v.flexLabel,htmlFor:"tag",children:"Status:"}),Object(U.jsxs)("select",{style:v.flexOption,name:"Status",onChange:function(t){return e.onChange("Status",t.target.value)},children:[Object(U.jsx)("option",{value:this.state.Status,children:""==this.state.Status?" - - - - - - - - - - ":this.state.Status}),Object(U.jsx)("option",{value:"Actived",children:"Actived"}),Object(U.jsx)("option",{value:"Locked",children:"Locked"}),Object(U.jsx)("option",{value:"Deactived",children:"Deactived"})]})]}),Object(U.jsxs)("div",{children:[Object(U.jsx)("label",{style:v.flexLabel,htmlFor:"tag",children:"Company:    "}),Object(U.jsxs)("select",{style:v.flexOption,name:"Company_Id",onChange:function(t){return e.onChange("Company_Id",t.target.value)},children:[Object(U.jsx)("option",{value:this.state.Company_Id,children:"-----"}),r.map((function(e,t){return e.Name==l?Object(U.jsx)("option",{selected:!0,value:e._id,children:e.Name}):Object(U.jsx)("option",{value:e._id,children:e.Name})}))]})]})]}),Object(U.jsxs)(j.a,{children:[Object(U.jsx)(T.a,{color:"primary",onClick:function(t){"new"===e.state.action?e.addPackageSale():e.updatePackageSale()},disabled:this.state.isLoading,children:"Save"})," ",Object(U.jsx)(T.a,{color:"secondary",onClick:function(t){return e.toggleModal("new")},children:"Cancel"})]})]}),Object(U.jsxs)(A.a,{isOpen:this.state.modalDelete,toggle:function(t){return e.setState({modalDelete:!e.state.modalDelete,delete:null})},className:this.props.className,children:[Object(U.jsx)(b.a,{toggle:function(t){return e.setState({modalDelete:!e.state.modalDelete,delete:null})},children:"Delete"}),Object(U.jsx)(m.a,{children:Object(U.jsx)("label",{htmlFor:"tag",children:'Do you want to delete user "'.concat(this.state.delete?this.state.delete.Email:"",'" ?')})}),Object(U.jsxs)(j.a,{children:[Object(U.jsx)(T.a,{color:"primary",onClick:function(t){return e.delete()},disabled:this.state.isLoading,children:"Delete"})," ",Object(U.jsx)(T.a,{color:"secondary",onClick:function(t){return e.setState({modalDelete:!e.state.modalDelete,delete:null})},children:"Cancel"})]})]})]})}}]),s}(p.Component),v={datePicker:{marginBottom:20},flexLabel:{width:100},flexOption:{width:300},a:{textDecoration:"none"},floatRight:{float:"right",marginTop:"3px"},spinner:{width:"30px"},center:{textAlign:"center"},tbody:{height:"380px",overflowY:"auto"},wa10:{width:"5%",float:"left",height:"80px"},wh16:{width:"17%",float:"left",height:"80px"},wh15:{width:"20%",float:"left",height:"80px"},w5:{width:"20%",float:"left",height:"80px"},row:{float:"left",width:"100%"},success:{color:"green"},danger:{color:"red"},mgl5:{marginLeft:"5px"},tags:{float:"right",marginRight:"5px",width:"250px"},searchInput:{width:"190px",display:"inline-block"},userActive:{color:"green"},userPending:{color:"red"},nagemonNameCol:{width:"328px"},image:{width:"100px",height:"100px",borderRadius:"99999px"}};t.default=C}.call(this,a(115))},643:function(e,t,a){"use strict";var i,s=a(165);t.a=(i={BASE_URL:"https://api-soida.applamdep.com",BASE_URL_CURRENT:"https://id.applamdep.com/",LIST_USER:"/api/list-user",LIST_USER_WITH_ID:"/api/list-user?id=",ADD_USER:"/api/add-user",UPDATE_USER:"/api/update-user",DELETE_USER:"/api/delete-user",LOGIN_ADMIN:"/api/login_admin",GET_SHOP:"/api/get-shop",GET_SALE:"/api/get-sale",GET_COEFFICIENT:"/api/calculator-coefficient-user",GET_COEFFICIENT_PER_SALE:"/api/calculator-coefficient-user-per-sale",GET_USER_SALE_BY_MONTH:"/api/get-user-of-sale-by-month",CALCULATOR_ALL_USER_OF_COMPANY:"/api/calculator-all-user-company",CALCULATOR_ALL_USER_OF_SALE:"/api/calculator-all-user-of-sale",GET_SEEDER:"/api/get-seed",GET_SALE_NAME:"/api/get-name-sale",GET_USER_BY_ID:"/api/get-user-byID",LIST_CUSTOMER:"/api/list-customer",LIST_CUSTOMER_BY_MONTH:"/api/get-user-sale-by-month",LIST_TYPEKEY:"/api/list-typekey",LIST_TYPEKEY_WITH_ID:"/api/list-typekey?id=",ADD_TYPEKEY:"/api/add-typekey",UPDATE_TYPEKEY:"/api/update-typekey",DELETE_TYPEKEY:"/api/delete-typekey",LIST_HARDWARE:"/api/list-hardware",LIST_HARDWARE_WITH_ID:"/api/list-hardware?id=",ADD_HARDWARE:"/api/add-hardware",UPDATE_HARDWARE:"/api/update-hardware",DELETE_HARDWARE:"/api/delete-hardware",LIST_ORDER:"/api/list-order",ADD_ORDER:"/api/add-order",UPDATE_STATUS_ORDER:"/api/update-status-order",CHECK_OUT:"/api/checkout-order",LIST_TRANSACTION:"/api/list-transaction",ADD_TRANSACTION:"/api/add-transaction",LIST_CHECK_OUT:"/api/list-checkout",LIST_HARDWARE_CHECKOUT:"/api/get-list-hardward-by-check-out",UPDATE_STATUS_CHECKOUT:"/api/update-status-hardware",LIST_ORDER_DETAIL:"/api/list-orderdetail",ADD_ORDER_DETAIL:"/api/add-orderdetail",LIST_ROLE:"/api/list-role",LIST_ROLE_WITH_ID:"/api/list-role?id=",ADD_ROLE:"/api/add-role",UPDATE_ROLE:"/api/update-role",DELETE_ROLE:"/api/delete-role",LIST_PACKAGE:"/api/list-package",ADD_PACKAGE:"/api/add-package",UPDATE_PACKAGE:"/api/update-package",DELETE_PACKAGE:"/api/delete-package",PLUGIN_DATA_PACKAGE:"/api/get-name-package",LIST_SALELOG:"/api/list-salelog",LIST_SALELOG_WITH_ID:"/api/list-salelog?id=",ADD_SALELOG:"/api/add-salelog",UPDATE_SALELOG:"/api/update-salelog",DELETE_SALELOG:"/api/delete-salelog",DATA_SALE:"/api/get-data-sale",LIST_SALE:"/api/list-sale",LIST_SALE_WITH_ID:"/api/list-sale?id=",ADD_SALE:"/api/add-sale",UPDATE_SALE:"/api/update-sale",DELETE_SALE:"/api/delete-sale",LIST_KEYORDER:"/api/list-keyorder",LIST_KEYORDER_WITH_ID:"/api/list-keyorder?id=",ADD_KEYORDER:"/api/add-keyorder",UPDATE_KEYORDER:"/api/update-keyorder",DELETE_KEYORDER:"/api/delete-keyorder",LIST_KEY:"/api/list-key",LIST_KEY_WITH_ID:"/api/list-key?id=",ADD_KEY:"/api/add-key",UPDATE_KEY:"/api/update-key",DELETE_KEY:"/api/delete-key",PLUGIN_LIST_COMPANY:"/api/plugin-list-company",PLUGIN_LIST_COMPANY_BY_ID:"/api/plugin-list-company-by-id",PLUGIN_LIST_COMPANY_WITH_ID:"/api/plugin-list-company?id=",PLUGIN_ADD_COMPANY:"/api/plugin-add-company",PLUGIN_UPDATE_COMPANY:"/api/plugin-update-company",PLUGIN_DELETE_COMPANY:"/api/plugin-delete-company",PLUGIN_DATA_COMPANY:"/api/plugin-get-data-company",LIST_COMPANY:"/api/list-company",LIST_COMPANY_WITH_ID:"/api/list-company?id=",ADD_COMPANY:"/api/add-company",UPDATE_COMPANY:"/api/update-company",DELETE_COMPANY:"/api/delete-company",DATA_COMPANY:"/api/get-data-company",LIST_LINK:"/api/list-link",LIST_LINK_WITH_ID:"/api/list-link?id=",ADD_LINK:"/api/add-link",UPDATE_LINK:"/api/update-link",DELETE_LINK:"/api/delete-link","GET-LINK-BY-ID":"/api/link-by-id",LIST_FEATURE:"/api/list-feature",ADD_FEATURE:"/api/add-feature",UPDATE_FEATURE:"/api/update-feature",DELETE_FEATURE:"/api/delete-feature",DATA_CHOOSE_FEATURE:"/api/get-feature-choose",LIST_PLUGIN_ORDER:"/api/plugin-list-order",COUNT_PLUGIN_ORDER:"/api/plugin-count-order",LIST_PLUGIN_ORDER_BY_ID:"/api/plugin-list-order-by-id",LIST_PLUGIN_ORDER_FOR_ADMIN:"/api/plugin-list-order-for-admin",LIST_ORDER_BY_SALE:"/api/plugin-list-order-by-saleid",ADD_PLUGIN_ORDER:"/api/plugin-add-order",UPDATE_PLUGIN_ORDER:"/api/plugin-update-order",DELETE_PLUGIN_ORDER:"/api/plugin-delete-order",UPDATE_SLUG:"/api/plugin-update-slug",PLUGIN_LIST_USER:"/api/plugin-list-user",PLUGIN_ALL_USER:"/api/plugin-all-user",PLUGIN_ADD_USER:"/api/plugin-add-user",PLUGIN_ADD_SALE:"/api/plugin-add-sale",PLUGIN_UPDATE_USER:"/api/plugin-update-user",PLUGIN_UPDATE_USER_COMPANY:"/api/plugin-update-user-company",PLUGIN_DELETE_USER:"/api/plugin-delete-user",PLUGIN_RESET_PASSWORD:"/api/plugin-reset-password",PLUGIN_CHANGE_PASSWORD:"/api/plugin-change",PLUGIN_CHECK_LINK:"/api/plugin-check-link",PLUGIN_UPDATE_PASSWORD:"/api/plugin-update-password",PLUGIN_UPDATE_STATUS:"/api/plugin-update-status",PLUGIN_LOGIN_ADMIN:"/api/plugin-login_admin",PLUGIN_FORGOT_PASS:"/api/plugin-forgot-password",PLUGIN_GET_USER_BYID:"/api/plugin-get-user-byID",PLUGIN_GET_USER_BY_BODY:"/api/plugin-get-user-byID-with-body",PLUGIN_LIST_ROLE:"/api/plugin-list-role",PLUGIN_ADD_ROLE:"/api/plugin-add-role",PLUGIN_UPDATE_ROLE:"/api/plugin-update-role",PLUGIN_DELETE_ROLE:"/api/plugin-delete-role",CUS_RES_LIST:"/api/list-customer-request",CUS_RES_LIST_COMPANY:"/api/list-customer-request-for-company",CUS_RES_ADD:"/api/add-customer-request",CUS_RES_UPDATE:"/api/update-customer-request",CUS_RES_DELETE:"/api/delete-customer-request",REWARD_INFO_LIST:"/api/list-reward-info",REWARD_INFO_LIST_COMPANY:"/api/list-reward-info-for-company",REWARD_INFO_ADD:"/api/add-reward-info",REWARD_INFO_UPDATE:"/api/update-reward-info",REWARD_INFO_DELETE:"/api/delete-reward-info",REWARD_TRANS_LIST:"/api/list-reward-trans",REWARD_TRANS_ADD:"/api/list-reward-trans",REWARD_TRANS_UPDATE:"/api/update-reward-trans",REWARD_TRANS_DELETE:"/api/delete-reward-trans",TYPE_REQUEST_LIST:"/api/list-type-request",TYPE_REQUEST_ADD:"/api/add-type-request",TYPE_REQUEST_UPDATE:"/api/update-type-request",TYPE_REQUEST_DELETE:"/api/delete-type-request"},Object(s.a)(i,"LIST_CUSTOMER","/api/list-customer"),Object(s.a)(i,"LIST_CUSTOMER_FOR_COMPANY","/api/list-customer-for-company"),Object(s.a)(i,"LIST_CUSTOMER_FOR_COMPANY_BY_MONTH","/api/list-customer-for-company-by-month"),Object(s.a)(i,"LIST_SUGGEST_ITEM","/itemSdk"),Object(s.a)(i,"LIST_SUGGEST_ITEM_COMPANY","/itemSdk/"),Object(s.a)(i,"LIST_SUGGEST_ITEM_ADMIN","/itemSdk/admin/"),Object(s.a)(i,"SEARCH_SUGGEST_ITEM_ADMIN","/itemSdk/admin/search/"),Object(s.a)(i,"SEARCH_SUGGEST_ITEM_COMPANY","/itemSdk/search/"),Object(s.a)(i,"ADD_SUGGEST_ITEM","/itemSdk"),Object(s.a)(i,"UPDATE_SUGGEST_ITEM","/itemSdk/"),Object(s.a)(i,"UPLOAD_IMAGE","/itemSdk/upload_image"),Object(s.a)(i,"UPLOAD_IMAGE_MAKEUP","/itemSdk/upload_image_makeup"),Object(s.a)(i,"UPLOAD_IMAGE_BRAND","/itemSdk/upload_image_brand"),Object(s.a)(i,"DELETE_SUGGEST_ITEM","/itemSdk/deleteItem"),Object(s.a)(i,"LIST_SDK","/sdk"),Object(s.a)(i,"LIST_BRAND","/brands"),Object(s.a)(i,"LIST_BRAND_COMPANY","/brands/"),Object(s.a)(i,"ADD_BRAND","/add-brand"),Object(s.a)(i,"UPDATE_BRAND","/update-brand"),Object(s.a)(i,"DELETE_BRAND","/delete-brand"),Object(s.a)(i,"LIST_BRAND_PLUGIN","/brand-plugin"),Object(s.a)(i,"LIST_BRAND_PLUGIN_COMPANY","/brand-plugin/"),Object(s.a)(i,"ADD_BRAND_PLUGIN","/add-brand-plugin"),Object(s.a)(i,"UPDATE_BRAND_PLUGIN","/update-brand-plugin"),Object(s.a)(i,"DELETE_BRAND_PLUGIN","/delete-brand-plugin"),Object(s.a)(i,"LIST_PRODUCT","/product"),Object(s.a)(i,"LIST_PRODUCT_HAIR","/product_hair"),Object(s.a)(i,"LIST_PRODUCT_COMPANY","/product/"),Object(s.a)(i,"LIST_PRODUCT_COMPANY_HAIR","/product_hair/"),Object(s.a)(i,"ADD_PRODUCT","/add-product"),Object(s.a)(i,"ADD_PRODUCT_HAIR","/add-product-hair"),Object(s.a)(i,"UPDATE_PRODUCT","/update-product"),Object(s.a)(i,"DELETE_PRODUCT","/delete-product"),Object(s.a)(i,"LIST_TYPE","/types"),Object(s.a)(i,"LIST_TYPE_COMPANY","/types/"),Object(s.a)(i,"ADD_TYPE","/add-type"),Object(s.a)(i,"UPDATE_TYPE","/update-type"),Object(s.a)(i,"DELETE_TYPE","/delete-type"),Object(s.a)(i,"LIST_COLOR","/colors"),Object(s.a)(i,"LIST_COLOR_COMPANY","/colors/"),Object(s.a)(i,"LIST_COLOR_SELECT","/color-select"),Object(s.a)(i,"ADD_COLOR","/add-color"),Object(s.a)(i,"UPDATE_COLOR","/update-color"),Object(s.a)(i,"DELETE_COLOR","/delete-color"),Object(s.a)(i,"LIST_HISTORY_SKIN","/api/get-history-skin"),Object(s.a)(i,"LIST_HISTORY_SKIN_BY_CONDITION","/api/get-history-skin-by-condition"),Object(s.a)(i,"ADD_HISTORY_SKIN","/api/add-history-skin"),Object(s.a)(i,"LIST_TYPE_PRODUCT","/api/list-type-product"),Object(s.a)(i,"ADD_TYPE_PRODUCT","/api/add-type-product"),Object(s.a)(i,"UPDATE_TYPE_PRODUCT","/api/update-type-product"),Object(s.a)(i,"DELETE_TYPE_PRODUCT","/api/delete-type-product"),Object(s.a)(i,"LIST_TYPE_SDK","/api/list-type-sdk"),Object(s.a)(i,"ADD_TYPE_SDK","/api/add-type-sdk"),Object(s.a)(i,"UPDATE_TYPE_SDK","/api/update-type-sdk"),Object(s.a)(i,"DELETE_TYPE_SDK","/api/delete-type-sdk"),Object(s.a)(i,"LIST_END_USER","/api/list-end-user"),Object(s.a)(i,"LOGIN_END_USER","/api/login-end-user"),Object(s.a)(i,"ADD_END_USER","/api/add-end-user"),Object(s.a)(i,"UPDATE_END_USER","/api/update-end-user"),Object(s.a)(i,"DELETE_END_USER","/api/delete-end-user"),Object(s.a)(i,"LIST_CONTACT_CUSTOMER","/api/list-contact-customers"),Object(s.a)(i,"ADD_CONTACT_CUSTOMER","/api/add-contact-customers"),Object(s.a)(i,"UPDATE_CONTACT_CUSTOMER","/api/update-contact-customers"),Object(s.a)(i,"DELETE_CONTACT_CUSTOMER","/api/delete-contact-customers"),Object(s.a)(i,"UPDATE_CONTACT_STATUS","/api/update-contact-status"),i)},656:function(e,t,a){"use strict";a(2);var i=a(639),s=a.n(i),n=a(17),r=function(e){var t=e.field,a=e.value,i=e.label,r=e.error,l=e.type,c=e.onChange,d=e.checkUserExists,o=e.readOnly,p=e.placeholder,u=e.onClick;return Object(n.jsxs)("div",{className:s()("form-group",{"has-error":r}),children:[Object(n.jsx)("label",{className:"control-label",children:i}),Object(n.jsx)("input",{onChange:c,onClick:u,onBlur:d,value:a,type:l,name:t,placeholder:p,readOnly:o,className:"form-control"}),r&&Object(n.jsx)("span",{className:"help-block",children:r})]})};r.defaultProps={type:"text"},t.a=r},668:function(e,t,a){"use strict";var i=a(12),s=a(29),n=a(2),r=a.n(n),l=a(64),c=a.n(l),d=a(639),o=a.n(d),p=a(640),u=c.a.oneOfType([c.a.number,c.a.string]),_={tag:p.n,noGutters:c.a.bool,className:c.a.string,cssModule:c.a.object,form:c.a.bool,xs:u,sm:u,md:u,lg:u,xl:u},E={tag:"div",widths:["xs","sm","md","lg","xl"]},O=function(e){var t=e.className,a=e.cssModule,n=e.noGutters,l=e.tag,c=e.form,d=e.widths,u=Object(s.a)(e,["className","cssModule","noGutters","tag","form","widths"]),_=[];d.forEach((function(t,a){var i=e[t];if(delete u[t],i){var s=!a;_.push(s?"row-cols-"+i:"row-cols-"+t+"-"+i)}}));var E=Object(p.j)(o()(t,n?"no-gutters":null,c?"form-row":"row",_),a);return r.a.createElement(l,Object(i.a)({},u,{className:E}))};O.propTypes=_,O.defaultProps=E,t.a=O},669:function(e,t,a){"use strict";var i=a(12),s=a(29),n=a(2),r=a.n(n),l=a(64),c=a.n(l),d=a(639),o=a.n(d),p=a(640),u=c.a.oneOfType([c.a.number,c.a.string]),_=c.a.oneOfType([c.a.bool,c.a.number,c.a.string,c.a.shape({size:c.a.oneOfType([c.a.bool,c.a.number,c.a.string]),order:u,offset:u})]),E={tag:p.n,xs:_,sm:_,md:_,lg:_,xl:_,className:c.a.string,cssModule:c.a.object,widths:c.a.array},O={tag:"div",widths:["xs","sm","md","lg","xl"]},h=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},T=function(e){var t=e.className,a=e.cssModule,n=e.widths,l=e.tag,c=Object(s.a)(e,["className","cssModule","widths","tag"]),d=[];n.forEach((function(t,i){var s=e[t];if(delete c[t],s||""===s){var n=!i;if(Object(p.h)(s)){var r,l=n?"-":"-"+t+"-",u=h(n,t,s.size);d.push(Object(p.j)(o()(((r={})[u]=s.size||""===s.size,r["order"+l+s.order]=s.order||0===s.order,r["offset"+l+s.offset]=s.offset||0===s.offset,r)),a))}else{var _=h(n,t,s);d.push(_)}}})),d.length||d.push("col");var u=Object(p.j)(o()(t,d),a);return r.a.createElement(l,Object(i.a)({},c,{className:u}))};T.propTypes=E,T.defaultProps=O,t.a=T},759:function(e,t,a){"use strict";var i=a(12),s=a(29),n=a(2),r=a.n(n),l=a(64),c=a.n(l),d=a(639),o=a.n(d),p=a(640),u={className:c.a.string,cssModule:c.a.object,size:c.a.string,bordered:c.a.bool,borderless:c.a.bool,striped:c.a.bool,dark:c.a.bool,hover:c.a.bool,responsive:c.a.oneOfType([c.a.bool,c.a.string]),tag:p.n,responsiveTag:p.n,innerRef:c.a.oneOfType([c.a.func,c.a.string,c.a.object])},_=function(e){var t=e.className,a=e.cssModule,n=e.size,l=e.bordered,c=e.borderless,d=e.striped,u=e.dark,_=e.hover,E=e.responsive,O=e.tag,h=e.responsiveTag,T=e.innerRef,D=Object(s.a)(e,["className","cssModule","size","bordered","borderless","striped","dark","hover","responsive","tag","responsiveTag","innerRef"]),S=Object(p.j)(o()(t,"table",!!n&&"table-"+n,!!l&&"table-bordered",!!c&&"table-borderless",!!d&&"table-striped",!!u&&"table-dark",!!_&&"table-hover"),a),A=r.a.createElement(O,Object(i.a)({},D,{ref:T,className:S}));if(E){var b=Object(p.j)(!0===E?"table-responsive":"table-responsive-"+E,a);return r.a.createElement(h,{className:b},A)}return A};_.propTypes=u,_.defaultProps={tag:"table",responsiveTag:"div"},t.a=_}}]);
//# sourceMappingURL=57.dfc13c5a.chunk.js.map