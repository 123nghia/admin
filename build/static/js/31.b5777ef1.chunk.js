(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[31],{1247:function(e,t,a){"use strict";a.r(t),function(e){var i=a(170),n=a(114),s=a.n(n),l=a(652),r=a(165),o=a(166),c=a(169),d=a(168),p=a(2),u=a(664),h=a(665),_=a(822),m=a(856),f=a(660),g=a(855),E=a(823),b=a(1266),j=a(1237),O=a(1238),D=a(1239),A=(a(657),a(661),a(645)),k=a(648),L=a(653),x=a.n(L),S=a(20),T=new Headers,y=localStorage.getItem("auth");T.append("Authorization","Bearer "+y),T.append("Content-Type","application/json");var v=function(t){Object(c.a)(n,t);var a=Object(d.a)(n);function n(e){var t;return Object(r.a)(this,n),(t=a.call(this,e)).getData=Object(l.a)(s.a.mark((function e(){var a,i,n,l,r,o;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=t.state,i=a.company_id,n=a.role,l=JSON.parse(i),t.setState({isLoading:!0}),"ADMIN"!=n&&"ADMINSALE"!=n){e.next=9;break}return e.next=6,x()({baseURL:A.a.BASE_URL,url:A.a.LIST_LINK,method:"POST"});case 6:r=e.sent,e.next=12;break;case 9:return e.next=11,x()({baseURL:A.a.BASE_URL,url:A.a.LIST_LINK,method:"POST",data:{condition:{Company_Id:l.company_id}}});case 11:r=e.sent;case 12:t.pagination(r.data.data),t.setState({dataApi:r.data.data}),o=0,r.data.data.map((function(e){"Actived"==e.Status&&(o+=1)})),t.setState({isLoading:!1,totalActive:o});case 17:case"end":return e.stop()}}),e)}))),t.openDelete=function(e){t.setState({modalDelete:!t.state.modalDelete,delete:e})},t.state={data:[],key:"",activePage:1,page:1,itemsCount:0,limit:20,totalActive:0,modalCom:!1,viewingUser:{},communities:[],updated:"",dataApi:[],action:"new",Company_Id:"",link_shop:"",link_shopee:"",link_lazada:"",link_tiki:"",Status:"Actived",modalDelete:!1,delete:null,dataCompany:[],currentCompany:"",arrPagination:[],indexPage:0,company_id:localStorage.getItem("user"),role:localStorage.getItem("role")},t}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=Object(l.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.getData();case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"pagination",value:function(e){var t,a,i,n=[];for(t=0,a=e.length;t<a;t+=5)i=e.slice(t,t+5),n.push(i);this.setState({arrPagination:n,data:n[this.state.indexPage]})}},{key:"searchKey",value:function(e){if(this.setState({key:e}),""!=e){var t=[];this.state.dataApi.map((function(a){a.link_shop.toLocaleUpperCase().includes(e.toLocaleUpperCase())&&t.push(a)}));var a=0;t.map((function(e){"Actived"==e.Status&&(a+=1)})),this.setState({data:t,totalActive:a})}else{var i=0;this.state.dataApi.map((function(e){"Actived"==e.Status&&(i+=1)})),this.setState({data:this.state.dataApi,totalActive:i})}}},{key:"toggleModal",value:function(){var e=Object(l.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getCompanyData();case 2:"new"==t&&this.setState({modalCom:!this.state.modalCom,action:t,Company_Id:"",link_shop:"",link_shopee:"",link_lazada:"",link_tiki:""});case 3:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"onChange",value:function(e,t){this.setState(Object(i.a)({},e,t))}},{key:"addPackageSale",value:function(){var e=Object(l.a)(s.a.mark((function e(){var t,a,i,n,l,r,o,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.state,a=t.Company_Id,i=t.link_shop,n=t.link_shopee,l=t.link_lazada,r=t.link_tiki,null!=i&&""!=i){e.next=4;break}return alert("Please fill in all the requirements"),e.abrupt("return");case 4:return o={Company_Id:a,link_shop:i,link_shopee:n,link_lazada:l,link_tiki:r},this.setState({isLoading:!0}),e.next=8,x()({baseURL:A.a.BASE_URL,url:A.a.ADD_LINK,method:"PUT",data:o});case 8:1==(c=e.sent).data.is_success?(this.getData(),this.setState({modalCom:!this.state.modalCom})):(alert(c.data.message),this.setState({isLoading:!1}));case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"openUpdate",value:function(){var e=Object(l.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getCompanyData(t.Company_Id);case 2:this.setState({modalCom:!this.state.modalCom,action:"update",Company_Id:t.Company_Id,link_shop:t.link_shop,link_lazada:t.link_lazada,link_shopee:t.link_shopee,link_tiki:t.link_tiki,id:t._id,Status:t.Status});case 3:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"updatePackageSale",value:function(){var e=Object(l.a)(s.a.mark((function e(){var t,a,i,n,l,r,o,c,d,p,u,h;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.state,a=t.Company_Id,i=t.link_shop,n=t.link_shopee,l=t.link_lazada,r=t.link_tiki,o=t.Status,c=t.company_id,d=t.role,p=JSON.parse(c),null!=i&&""!=i){e.next=5;break}return alert("Please fill in all the requirements"),e.abrupt("return");case 5:return u={Company_Id:"ADMIN"==d||"ADMINSALE"==d?a:p.company_id,link_shop:i,link_shopee:n,link_lazada:l,link_tiki:r,id:this.state.id,Status:o},this.setState({isLoading:!0}),e.next=9,x()({baseURL:A.a.BASE_URL,url:A.a.UPDATE_LINK,method:"POST",data:u});case 9:1==(h=e.sent).data.is_success?(this.getData(),this.setState({modalCom:!this.state.modalCom})):(alert(h.data.message),this.setState({isLoading:!1}));case 11:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"delete",value:function(){var e=Object(l.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({isLoading:!0}),e.next=3,x()({baseURL:A.a.BASE_URL,url:A.a.DELETE_LINK,method:"DELETE",data:{id:this.state.delete._id}});case 3:1==(t=e.sent).data.is_success?(this.getData(),this.setState({modalDelete:!this.state.modalDelete,delete:null})):(alert(t.data.message),this.setState({isLoading:!1}));case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getUsers",value:function(){var t=this,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,i=this.state.limit,n=this.state.key||"",s={method:"GET",headers:T};fetch(e.BASE_URL+"/admin/users?key="+n+"&page="+a+"&limit="+i,s).then((function(e){e.json().then((function(e){t.setState({data:e.data,itemsCount:e.total,activePage:a,totalActive:e.totalActive,updated:""})}))})).catch(console.log)}},{key:"handlePageChange",value:function(){var e=Object(l.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.getUsers(t);case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"toggle",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";this.setState({modal:!this.state.modal,image:"",url:"",isActive:!1,isLoading:!1,errors:{},action:e,position:1,data:[],updated:""})}},{key:"inputChange",value:function(e){this.setState(Object(i.a)({},e.target.name,e.target.value))}},{key:"getCompanyData",value:function(){var e=Object(l.a)(s.a.mark((function e(t){var a,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x()({baseURL:A.a.BASE_URL,url:A.a.LIST_COMPANY,method:"POST"});case 2:if(a=e.sent,""==t&&void 0==t){e.next=8;break}return e.next=6,x()({baseURL:A.a.BASE_URL,url:A.a.LIST_COMPANY_WITH_ID+t,method:"POST"});case 6:null==(i=e.sent).data.data&&void 0==i.data.data||this.setState({currentCompany:i.data.data.Name});case 8:this.setState({dataCompany:a.data.data});case 9:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,a=t.data,i=t.key,n=t.dataCompany,s=t.currentCompany,l=t.arrPagination,r=t.indexPage,o=t.role;return this.state.isLoading?Object(S.jsx)("div",{id:"page-loading",children:Object(S.jsxs)("div",{className:"three-balls",children:[Object(S.jsx)("div",{className:"ball ball1"}),Object(S.jsx)("div",{className:"ball ball2"}),Object(S.jsx)("div",{className:"ball ball3"})]})}):Object(S.jsxs)("div",{className:"animated fadeIn",children:[Object(S.jsx)(u.a,{children:Object(S.jsxs)(h.a,{children:[Object(S.jsx)("p",{style:R.success,children:this.state.updated}),Object(S.jsx)("p",{style:R.danger,children:this.state.deleted}),Object(S.jsxs)(_.a,{children:[Object(S.jsxs)(m.a,{children:[Object(S.jsx)("i",{className:"fa fa-align-justify"})," LINK MANAGER (Total: ",void 0!=this.state.data||null!=this.state.data?this.state.data.length:0,", Active: ",this.state.totalActive,", Page: ",this.state.indexPage+1,")",Object(S.jsx)("div",{style:R.tags,children:Object(S.jsxs)("div",{children:[Object(S.jsx)(f.a,{style:R.searchInput,onChange:function(t){return e.searchKey(t.target.value)},name:"key",value:i,placeholder:"Search"}),"ADMIN"==o||"ADMINSALE"==o?Object(S.jsx)(g.a,{outline:!0,color:"primary",style:R.floatRight,size:"sm",onClick:function(t){return e.toggleModal("new")},children:"Add"}):""]})})]}),Object(S.jsx)(E.a,{children:Object(S.jsxs)("table",{className:"table table-hover table-outline mb-0 d-none d-sm-table",children:[Object(S.jsx)("thead",{className:"thead-light",children:Object(S.jsxs)("tr",{children:[Object(S.jsx)("th",{className:"text-center",children:"Company ID"}),Object(S.jsx)("th",{className:"text-center",children:"Link Shop"}),Object(S.jsx)("th",{className:"text-center",children:"Link Shopee"}),Object(S.jsx)("th",{className:"text-center",children:"Link Lazada"}),Object(S.jsx)("th",{className:"text-center",children:"Link Tiki"}),Object(S.jsx)("th",{className:"text-center",children:"Action"})]})}),Object(S.jsx)("tbody",{children:void 0!=a?a.map((function(t,a){return Object(S.jsxs)("tr",{children:[Object(S.jsx)("td",{className:"text-center",children:t.Company_Id}),Object(S.jsx)("td",{className:"text-center",children:t.link_shop}),Object(S.jsx)("td",{className:"text-center",children:t.link_shopee}),Object(S.jsx)("td",{className:"text-center",children:t.link_lazada}),Object(S.jsx)("td",{className:"text-center",children:t.link_tiki}),Object(S.jsxs)("td",{className:"text-center",children:[Object(S.jsx)(g.a,{outline:!0,color:"primary",size:"sm",onClick:function(a){return e.openUpdate(t)},children:"C\u1eadp nh\u1eadt"})," ","ADMIN"==o||"ADMINSALE"==o?Object(S.jsx)(g.a,{outline:!0,color:"danger",size:"sm",onClick:function(a){e.openDelete(t)},children:"Delete"}):""]})]},a)})):""})]})})]}),1==l.length?"":Object(S.jsx)("div",{style:{float:"right",marginRight:"10px",padding:"10px"},children:Object(S.jsx)("tr",{style:R.row,children:l.map((function(t,a){return Object(S.jsx)("td",{children:Object(S.jsx)(g.a,{style:R.pagination,color:a==r?"primary":"danger",onClick:function(t){e.setState({data:l[a],indexPage:a})},children:a+1})})}))})})]})}),Object(S.jsxs)(b.a,{isOpen:this.state.modalCom,className:this.props.className,children:[Object(S.jsx)(j.a,{children:"new"==this.state.action?"T\u1ea1o m\u1edbi":"C\u1eadp nh\u1eadt"}),Object(S.jsxs)(O.a,{children:[Object(S.jsx)(k.a,{field:"link_shop",label:"Link shop",value:this.state.link_shop,placeholder:"Link Shop",onChange:function(t){return e.onChange("link_shop",t.target.value)}}),Object(S.jsx)(k.a,{field:"link_shopee",label:"Link Shopee",value:this.state.link_shopee,placeholder:"Link Shopee",onChange:function(t){return e.onChange("link_shopee",t.target.value)}}),Object(S.jsx)(k.a,{field:"link_lazada",label:"Link Lazada",value:this.state.link_lazada,placeholder:"Link Lazada",onChange:function(t){return e.onChange("link_lazada",t.target.value)}}),Object(S.jsx)(k.a,{field:"link_tiki",label:"Link Tiki",value:this.state.link_tiki,placeholder:"Link Tiki",onChange:function(t){return e.onChange("link_tiki",t.target.value)}}),"ADMIN"==o||"ADMINSALE"==o?Object(S.jsxs)("div",{children:[Object(S.jsx)("label",{style:R.flexLabel,htmlFor:"tag",children:"Company:    "}),Object(S.jsxs)("select",{style:R.flexOption,name:"Company_Id",onChange:function(t){return e.onChange("Company_Id",t.target.value)},children:[Object(S.jsx)("option",{value:this.state.Company_Id,children:"-----"}),n.map((function(e,t){return e.Name==s?Object(S.jsx)("option",{selected:!0,value:e._id,children:e.Name}):Object(S.jsx)("option",{value:e._id,children:e.Name})}))]})]}):""]}),Object(S.jsxs)(D.a,{children:[Object(S.jsx)(g.a,{color:"primary",onClick:function(t){"new"===e.state.action?e.addPackageSale():e.updatePackageSale()},disabled:this.state.isLoading,children:"Save"})," ",Object(S.jsx)(g.a,{color:"secondary",onClick:function(t){return e.toggleModal("new")},children:"\u0110\xf3ng"})]})]}),Object(S.jsxs)(b.a,{isOpen:this.state.modalDelete,toggle:function(t){return e.setState({modalDelete:!e.state.modalDelete,delete:null})},className:this.props.className,children:[Object(S.jsx)(j.a,{toggle:function(t){return e.setState({modalDelete:!e.state.modalDelete,delete:null})},children:"Delete"}),Object(S.jsx)(O.a,{children:Object(S.jsx)("label",{htmlFor:"tag",children:'Do you want to delete user "'.concat(this.state.delete?this.state.delete.Email:"",'" ?')})}),Object(S.jsxs)(D.a,{children:[Object(S.jsx)(g.a,{color:"primary",onClick:function(t){return e.delete()},disabled:this.state.isLoading,children:"Xo\xe1"})," ",Object(S.jsx)(g.a,{color:"secondary",onClick:function(t){return e.setState({modalDelete:!e.state.modalDelete,delete:null})},children:"\u0110\xf3ng"})]})]})]})}}]),n}(p.Component),R=Object(i.a)({datePicker:{marginBottom:20},flexLabel:{width:100},flexOption:{width:300},a:{textDecoration:"none"},floatRight:{float:"right",marginTop:"3px"},spinner:{width:"30px"},center:{textAlign:"center"},tbody:{height:"380px",overflowY:"auto"},wa10:{width:"5%",float:"left",height:"80px"},wh16:{width:"17%",float:"left",height:"80px"},wh15:{width:"20%",float:"left",height:"80px"},w5:{width:"20%",float:"left",height:"80px"},row:{float:"left",width:"100%"},success:{color:"green"},danger:{color:"red"},mgl5:{marginLeft:"5px"},tags:{float:"right",marginRight:"5px",width:"250px"},searchInput:{width:"190px",display:"inline-block"},userActive:{color:"green"},userPending:{color:"red"},nagemonNameCol:{width:"328px"},image:{width:"100px",height:"100px",borderRadius:"99999px"}},"mgl5",{marginBottom:"5px"});t.default=v}.call(this,a(113))},645:function(e,t,a){"use strict";t.a={BASE_URL:"https://admin-api.tikitech.vn",LIST_USER:"/api/list-user",LIST_USER_WITH_ID:"/api/list-user?id=",ADD_USER:"/api/add-user",UPDATE_USER:"/api/update-user",DELETE_USER:"/api/delete-user",LOGIN_ADMIN:"/api/login_admin",GET_SHOP:"/api/get-shop",GET_SALE:"/api/get-sale",GET_COEFFICIENT:"/api/calculator-coefficient-user",GET_COEFFICIENT_PER_SALE:"/api/calculator-coefficient-user-per-sale",GET_USER_SALE_BY_MONTH:"/api/get-user-of-sale-by-month",CALCULATOR_ALL_USER_OF_COMPANY:"/api/calculator-all-user-company",CALCULATOR_ALL_USER_OF_SALE:"/api/calculator-all-user-of-sale",GET_SEEDER:"/api/get-seed",GET_SALE_NAME:"/api/get-name-sale",GET_USER_BY_ID:"/api/get-user-byID",LIST_CUSTOMER:"/api/list-customer",LIST_CUSTOMER_BY_MONTH:"/api/get-user-sale-by-month",LIST_CUSTOMER_BY_MONTH_ADMIN:"/api/get-user-by-month-admin",LIST_TYPEKEY:"/api/list-typekey",LIST_TYPEKEY_WITH_ID:"/api/list-typekey?id=",ADD_TYPEKEY:"/api/add-typekey",UPDATE_TYPEKEY:"/api/update-typekey",DELETE_TYPEKEY:"/api/delete-typekey",LIST_HARDWARE:"/api/list-hardware",LIST_HARDWARE_WITH_ID:"/api/list-hardware?id=",ADD_HARDWARE:"/api/add-hardware",UPDATE_HARDWARE:"/api/update-hardware",DELETE_HARDWARE:"/api/delete-hardware",LIST_ORDER:"/api/list-order",ADD_ORDER:"/api/add-order",UPDATE_STATUS_ORDER:"/api/update-status-order",LIST_TRANSACTION:"/api/list-transaction",ADD_TRANSACTION:"/api/add-transaction",LIST_CHECK_OUT:"/api/list-checkout",LIST_HARDWARE_CHECKOUT:"/api/get-list-hardward-by-check-out",UPDATE_STATUS_CHECKOUT:"/api/update-status-hardware",LIST_ORDER_DETAIL:"/api/list-orderdetail",ADD_ORDER_DETAIL:"/api/add-orderdetail",LIST_ROLE:"/api/list-role",LIST_ROLE_WITH_ID:"/api/list-role?id=",ADD_ROLE:"/api/add-role",UPDATE_ROLE:"/api/update-role",DELETE_ROLE:"/api/delete-role",LIST_SALELOG:"/api/list-salelog",LIST_SALELOG_WITH_ID:"/api/list-salelog?id=",ADD_SALELOG:"/api/add-salelog",UPDATE_SALELOG:"/api/update-salelog",DELETE_SALELOG:"/api/delete-salelog",DATA_SALE:"/api/get-data-sale",LIST_SALE:"/api/list-sale",LIST_SALE_WITH_ID:"/api/list-sale?id=",ADD_SALE:"/api/add-sale",UPDATE_SALE:"/api/update-sale",DELETE_SALE:"/api/delete-sale",LIST_KEYORDER:"/api/list-keyorder",LIST_KEYORDER_WITH_ID:"/api/list-keyorder?id=",ADD_KEYORDER:"/api/add-keyorder",UPDATE_KEYORDER:"/api/update-keyorder",DELETE_KEYORDER:"/api/delete-keyorder",LIST_KEY:"/api/list-key",LIST_KEY_WITH_ID:"/api/list-key?id=",ADD_KEY:"/api/add-key",UPDATE_KEY:"/api/update-key",DELETE_KEY:"/api/delete-key",LIST_COMPANY:"/api/list-company",LIST_COMPANY_WITH_ID:"/api/list-company?id=",ADD_COMPANY:"/api/add-company",UPDATE_COMPANY:"/api/update-company",DELETE_COMPANY:"/api/delete-company",DATA_COMPANY:"/api/get-data-company",LIST_LINK:"/api/list-link",LIST_LINK_WITH_ID:"/api/list-link?id=",ADD_LINK:"/api/add-link",UPDATE_LINK:"/api/update-link",DELETE_LINK:"/api/delete-link","GET-LINK-BY-ID":"/api/link-by-id",LIST_CHECKED_ORDER:"/api/list-order-checked",ADD_CHECKED_ORDER:"/api/add-order-checked",LIST_CHECKED_PRODUCT:"/api/list-product-checked",ADD_CHECKED_PRODUCT:"/api/add-product-checked",LIST_BRAND_HARDWARE:"/api/list-brand-hardward",ADD_BRAND_HARDWARE:"/api/add-brand-hardward",UPDATE_BRAND_HARDWARE:"/api/update-brand-hardward",DELETE_BRAND_HARDWARE:"/api/delete-brand-hardward",UPLOAD_BRAND:"/api/upload-image-brand",LIST_PRODUCT_HARDWARE:"/api/list-product-hardward",ADD_PRODUCT_HARDWARE:"/api/add-product-hardward",UPDATE_PRODUCT_HARDWARE:"/api/update-product-hardward",DELETE_PRODUCT_HARDWARE:"/api/delete-product-hardward",UPLOAD_PRODUCT:"/api/upload-image-product"}},648:function(e,t,a){"use strict";a(2);var i=a(638),n=a.n(i),s=a(20),l=function(e){var t=e.field,a=e.value,i=e.label,l=e.error,r=e.type,o=e.onChange,c=e.checkUserExists,d=e.readOnly,p=e.placeholder;return Object(s.jsxs)("div",{className:n()("form-group",{"has-error":l}),children:[Object(s.jsx)("label",{className:"control-label",children:i}),Object(s.jsx)("input",{onChange:o,onBlur:c,value:a,type:r,name:t,placeholder:p,readOnly:d,className:"form-control"}),l&&Object(s.jsx)("span",{className:"help-block",children:l})]})};l.defaultProps={type:"text"},t.a=l},660:function(e,t,a){"use strict";var i=a(12),n=a(28),s=a(649),l=a(35),r=a(2),o=a.n(r),c=a(64),d=a.n(c),p=a(638),u=a.n(p),h=a(641),_={children:d.a.node,type:d.a.string,size:d.a.oneOfType([d.a.number,d.a.string]),bsSize:d.a.string,valid:d.a.bool,invalid:d.a.bool,tag:h.n,innerRef:d.a.oneOfType([d.a.object,d.a.func,d.a.string]),plaintext:d.a.bool,addon:d.a.bool,className:d.a.string,cssModule:d.a.object},m=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(s.a)(a)),a.focus=a.focus.bind(Object(s.a)(a)),a}Object(l.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.focus=function(){this.ref&&this.ref.focus()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,s=e.type,l=e.bsSize,r=e.valid,c=e.invalid,d=e.tag,p=e.addon,_=e.plaintext,m=e.innerRef,f=Object(n.a)(e,["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"]),g=["radio","checkbox"].indexOf(s)>-1,E=new RegExp("\\D","g"),b=d||("select"===s||"textarea"===s?s:"input"),j="form-control";_?(j+="-plaintext",b=d||"input"):"file"===s?j+="-file":"range"===s?j+="-range":g&&(j=p?null:"form-check-input"),f.size&&E.test(f.size)&&(Object(h.p)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),l=f.size,delete f.size);var O=Object(h.j)(u()(t,c&&"is-invalid",r&&"is-valid",!!l&&"form-control-"+l,j),a);return("input"===b||d&&"function"===typeof d)&&(f.type=s),f.children&&!_&&"select"!==s&&"string"===typeof b&&"select"!==b&&(Object(h.p)('Input with a type of "'+s+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete f.children),o.a.createElement(b,Object(i.a)({},f,{ref:m,className:O,"aria-invalid":c}))},t}(o.a.Component);m.propTypes=_,m.defaultProps={type:"text"},t.a=m},661:function(e,t,a){},664:function(e,t,a){"use strict";var i=a(12),n=a(28),s=a(2),l=a.n(s),r=a(64),o=a.n(r),c=a(638),d=a.n(c),p=a(641),u=o.a.oneOfType([o.a.number,o.a.string]),h={tag:p.n,noGutters:o.a.bool,className:o.a.string,cssModule:o.a.object,form:o.a.bool,xs:u,sm:u,md:u,lg:u,xl:u},_={tag:"div",widths:["xs","sm","md","lg","xl"]},m=function(e){var t=e.className,a=e.cssModule,s=e.noGutters,r=e.tag,o=e.form,c=e.widths,u=Object(n.a)(e,["className","cssModule","noGutters","tag","form","widths"]),h=[];c.forEach((function(t,a){var i=e[t];if(delete u[t],i){var n=!a;h.push(n?"row-cols-"+i:"row-cols-"+t+"-"+i)}}));var _=Object(p.j)(d()(t,s?"no-gutters":null,o?"form-row":"row",h),a);return l.a.createElement(r,Object(i.a)({},u,{className:_}))};m.propTypes=h,m.defaultProps=_,t.a=m},665:function(e,t,a){"use strict";var i=a(12),n=a(28),s=a(2),l=a.n(s),r=a(64),o=a.n(r),c=a(638),d=a.n(c),p=a(641),u=o.a.oneOfType([o.a.number,o.a.string]),h=o.a.oneOfType([o.a.bool,o.a.number,o.a.string,o.a.shape({size:o.a.oneOfType([o.a.bool,o.a.number,o.a.string]),order:u,offset:u})]),_={tag:p.n,xs:h,sm:h,md:h,lg:h,xl:h,className:o.a.string,cssModule:o.a.object,widths:o.a.array},m={tag:"div",widths:["xs","sm","md","lg","xl"]},f=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},g=function(e){var t=e.className,a=e.cssModule,s=e.widths,r=e.tag,o=Object(n.a)(e,["className","cssModule","widths","tag"]),c=[];s.forEach((function(t,i){var n=e[t];if(delete o[t],n||""===n){var s=!i;if(Object(p.h)(n)){var l,r=s?"-":"-"+t+"-",u=f(s,t,n.size);c.push(Object(p.j)(d()(((l={})[u]=n.size||""===n.size,l["order"+r+n.order]=n.order||0===n.order,l["offset"+r+n.offset]=n.offset||0===n.offset,l)),a))}else{var h=f(s,t,n);c.push(h)}}})),c.length||c.push("col");var u=Object(p.j)(d()(t,c),a);return l.a.createElement(r,Object(i.a)({},o,{className:u}))};g.propTypes=_,g.defaultProps=m,t.a=g}}]);
//# sourceMappingURL=31.b5777ef1.chunk.js.map