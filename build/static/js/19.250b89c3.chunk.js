(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[19],{1029:function(e,t,a){"use strict";a.r(t);var r,n=a(659),c=a(169),i=a(113),s=a.n(i),l=a(645),o=a(165),d=a(166),h=a(168),u=a(167),p=a(2),m=a(643),j=a(1021),g=a(1022),b=a(1023),x=a(1012),O=a(1013),_=a(687),f=a(1036),y=a(1007),C=a(1008),v=a(1009),D=a(646),A=a(680),S=a(647),T=a(1033),k=(a(660),a(941)),w=a.n(k),E=(a(939),a(640)),L=a(651),P=a(655),R=a(661),N=a.n(R),U=(a(940),a(17)),I=new Headers,B=localStorage.getItem("auth");I.append("Authorization","Bearer "+B),I.append("Content-Type","application/json");var G=function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(e){var r;return Object(o.a)(this,a),(r=t.call(this,e)).getData=Object(l.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.setState({isLoading:!0}),e.next=3,Object(S.a)(E.a.LIST_DEAL,{},"","POST");case 3:t=e.sent,a=t.data.dataAdmin,r.pagination(a),r.setState({dataApi:a,isLoading:!1});case 7:case"end":return e.stop()}}),e)}))),r.openDelete=function(e){r.setState({modalDelete:!r.state.modalDelete,id:e._id})},r.handleChangeCategory=function(){var e=Object(l.a)(s.a.mark((function e(t,a){var n,c,i,l,o,d,h,u,p;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.state,c=n.arrCategory,i=n.arrAllProductOfAllCategory,l=n.arrAllProductChoosed,o=n.arrOptionCategory,d=n.arrChooseCategory,e.next=3,Object(S.a)(E.a.LIST_PRODUCT_CATEGORY,{category_id:t.value},"","POST");case 3:h=e.sent,u=h.data,console.log(u),console.log(t.value),c[a].category_id=t.value,i[a]=u,l[a]=new Array,p=o.find((function(e){return e.value==t.value})),d[a]=new Array,d[a].push(p),r.setState({arrCategory:c,arrAllProductOfAllCategory:i,arrAllProductChoosed:l,arrChooseCategory:d});case 14:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),r.handleUpdateCategory=function(){var e=Object(l.a)(s.a.mark((function e(t,a){var n,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=r.state,c=n.arrUpdate,n.arrOptionCategory,console.log(c[a]);case 2:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),r.pushCategory=function(){var e=r.state,t=e.arrCategory,a=e.arrAllProductOfAllCategory,n=e.arrAllProductChoosed,c=e.arrChooseCategory;t.push({category_id:"",product:[]}),a.push([]),n.push([]),c.push([]),r.setState({arrCategory:t,arrAllProductOfAllCategory:a,arrAllProductChoosed:n})},r.onRemoveCard=function(e){var t=r.state,a=t.arrCategory,n=t.arrAllProductOfAllCategory,c=t.arrAllProductChoosed,i=t.arrChooseCategory;a.splice(e,1),n.splice(e,1),c.splice(e,1),i.splice(e,1),r.setState({arrCategory:a,arrAllProductOfAllCategory:n,arrAllProductChoosed:c,arrChooseCategory:i})},r.onCancelModal=function(){var e=r.state,t=e.arrCategory,a=e.arrAllProductOfAllCategory,n=e.arrAllProductChoosed,c=e.arrChooseCategory,i=e.modalCom;t=new Array,a=new Array,n=new Array,c=new Array,r.setState({modalCom:!i,arrCategory:t,arrAllProductOfAllCategory:a,arrAllProductChoosed:n,arrChooseCategory:c})},r.state={data:[],key:"",modalCom:!1,modalDetail:!1,dataApi:[],hidden:!1,action:"new",name:"",image:"",image_show:"",type:"0",status:"0",voucher:0,time_start:new Date,time_finish:new Date,arrDetailBanner:[],modalDelete:!1,delete:null,arrPagination:[],arrOptionCategory:[],objectValueCategory:{},indexPage:0,token:{Authorization:"Bearer ".concat(localStorage.getItem("token"))},isLoading:!1,accordion:0,arrCategory:[],arrAllProductOfAllCategory:[],arrAllProductChoosed:[],arrChooseCategory:[],arrUpdate:[],arrRemoveOnUpdate:[]},r}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(l.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.getData();case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"pagination",value:function(e){var t,a,r,n=[];for(t=0,a=e.length;t<a;t+=5)r=e.slice(t,t+5),n.push(r);0==n.length?this.setState({hidden:!1}):this.setState({hidden:!0}),this.setState({arrPagination:n,data:n[0]})}},{key:"searchKey",value:function(){var e=this.state,t=e.indexPage,a=e.key;if(""!=a){var r=[];this.state.dataApi.map((function(e){e.name.toLocaleUpperCase().includes(a.toLocaleUpperCase())&&r.push(e)})),this.setState({data:r})}else this.setState({data:this.state.arrPagination[t]})}},{key:"actionSearch",value:function(e,t){var a=this;this.setState(Object(c.a)({},t,e.target.value),(function(){a.searchKey()}))}},{key:"resetSearch",value:function(){var e=this;this.setState({key:""},(function(){e.searchKey()}))}},{key:"onChangeImage",value:function(e){var t=this,a=e.target.files,r=new FileReader;this.setState({image:a[0]}),r.readAsDataURL(a[0]),r.onload=function(e){t.setState({image_show:e.target.result})}}},{key:"toggleModal",value:function(){var e=Object(l.a)(s.a.mark((function e(t){var a,r,n,c,i=this;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=this.state,r=a.modalCom,n=a.token,c=a.arrOptionCategory,"new"==t&&this.setState({modalCom:!r,action:t,name:"",category:[],arrCategory:[],image:"",image_show:"",type:"0",status:"0",voucher:0,time_finish:new Date,time_start:new Date,objectValueCategory:{}},Object(l.a)(s.a.mark((function e(){var t,a,r,l;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!=c.length){e.next=8;break}return e.next=3,Object(S.a)(E.a.LIST_CATEGORY,{},n,"POST");case 3:for(t=e.sent,a=[],r=t.data,l=0;l<r.length;l++)a.push({value:r[l]._id,label:r[l].name});i.setState({arrOptionCategory:a});case 8:case"end":return e.stop()}}),e)}))));case 2:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"onChange",value:function(e,t){this.setState(Object(c.a)({},e,t))}},{key:"addDeal",value:function(){var e=Object(l.a)(s.a.mark((function e(){var t,a,r,n,c,i,l,o,d,h,u,p,m;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.state,a=t.name,r=t.image,n=t.type,c=t.status,i=t.voucher,l=t.arrCategory,o=t.arrAllProductChoosed,d=t.time_start,h=t.time_finish,0!=l.length){e.next=4;break}return alert("Ch\u01b0a thi\u1ebft l\u1eadp banner !!!"),e.abrupt("return");case 4:u=0;case 5:if(!(u<l.length)){e.next=15;break}if(""!=l[u].category_id&&0!=o[u].length){e.next=11;break}return alert("Trong ph\u1ea7n thi\u1ebft l\u1eadp banner, banner th\u1ee9 ".concat(u+1," ch\u01b0a ch\u1ecdn b\u1ea5t k\xec danh m\u1ee5c ho\u1eb7c s\u1ea3n ph\u1ea9m n\xe0o !!!")),e.abrupt("return");case 11:l[u].product=o[u];case 12:u++,e.next=5;break;case 15:if(null!=a&&""!=a&&null!=r&&""!=r){e.next=18;break}return alert("H\xe3y nh\u1eadp \u0111\u1ea7y \u0111\u1ee7 d\u1eef li\u1ec7u !!!"),e.abrupt("return");case 18:return(p=new FormData).append("image",r),e.next=22,Object(S.a)(E.a.UPLOAD_DEAL,p,"","POST");case 22:return m={name:a,image:r.name,category:l,type:n,status:c,voucher:i,time_start:d,time_finish:h},this.setState({isLoading:!0}),e.next=26,Object(S.a)(E.a.ADD_DEAL,m,"","POST");case 26:200==e.sent.status?(this.getData(),this.setState({modalCom:!this.state.modalCom})):(alert("Th\xeam th\u1ea5t b\u1ea1i"),this.setState({isLoading:!1}));case 28:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"changeDealType",value:function(e){this.setState({type:e.target.value})}},{key:"openUpdate",value:function(){var e=Object(l.a)(s.a.mark((function e(t){var a,r,n,c,i,o,d,h,u,p,m,j=this;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(a=this.state,r=a.token,n=a.arrOptionCategory,c=a.arrRemoveOnUpdate,i=[],o=[],d=0;d<c.length;d++)t.category.push(c[d]);for(h=t.category,u=0;u<h.length;u++){for(p=h[u].product,m=0;m<p.length;m++)o.push({product_id:p[m].product_id._id,total_deal:p[m].total_deal});i.push({category_id:h[u].category_id._id,product:o})}this.setState({arrRemoveOnUpdate:[],modalCom:!this.state.modalCom,action:"update",name:t.name,category:i,arrUpdate:t.category,image:t.image,image_show:"",type:t.type,time_start:t.time_start,time_finish:t.time_finish,status:t.status,voucher:t.voucher,id:t._id},Object(l.a)(s.a.mark((function e(){var t,a,c,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!=n.length){e.next=8;break}return e.next=3,Object(S.a)(E.a.LIST_CATEGORY,{},r,"POST");case 3:for(t=e.sent,a=[],c=t.data,i=0;i<c.length;i++)a.push({value:c[i]._id,label:c[i].name});j.setState({arrOptionCategory:a});case 8:case"end":return e.stop()}}),e)}))));case 7:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"updateDeal",value:function(){var e=Object(l.a)(s.a.mark((function e(){var t,a,r,n,c,i,l,o,d,h,u,p,m,j,g,b;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.state,a=t.name,r=t.image,n=t.type,c=t.status,i=t.voucher,l=t.time_start,o=t.time_finish,d=t.arrUpdate,null!=a&&""!=a&&null!=r&&""!=r){e.next=4;break}return alert("H\xe3y nh\u1eadp \u0111\u1ea7y \u0111\u1ee7 d\u1eef li\u1ec7u !!!"),e.abrupt("return");case 4:for(h=[],u=[],p=0;p<d.length;p++){for(m=d[p].product,j=0;j<m.length;j++)u.push({product_id:m[j].product_id._id,total_deal:m[j].total_deal});h.push({category_id:d[p].category_id._id,product:u})}return(g=new FormData).append("image",r),e.next=11,Object(S.a)(E.a.UPLOAD_DEAL,g,"","POST");case 11:return b={name:a,image:r.name,category:h,type:n,status:c,voucher:i,time_start:l,time_finish:o,id:this.state.id},this.setState({isLoading:!0}),e.next=15,Object(S.a)(E.a.UPDATE_DEAL,b,"","POST");case 15:200==e.sent.status?(this.getData(),this.setState({modalCom:!this.state.modalCom})):(alert("C\u1eadp nh\u1eadt th\u1ea5t b\u1ea1i"),this.setState({isLoading:!1}));case 17:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"delete",value:function(){var e=Object(l.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({isLoading:!0}),e.next=3,Object(S.a)(E.a.DELETE_DEAL,{id:this.state.id},"","POST");case 3:200==e.sent.status?(this.getData(),this.setState({modalDelete:!this.state.modalDelete,delete:null})):(alert("Xo\xe1 th\u1ea5t b\u1ea1i"),this.setState({isLoading:!1}));case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"inputChange",value:function(e){this.setState(Object(c.a)({},e.target.name,e.target.value))}},{key:"getBadge_Type",value:function(e){switch(e){case"0":return{title:"\u01afu \u0111\xe3i m\u1edbi nh\u1ea5t",color:"primary"};case"1":return{title:"\u01afu \u0111\xe3i \u0111ang di\u1ec5n ra",color:"success"};case"2":return{title:"\u01afu \u0111\xe3i \u0111\xe3 k\u1ebft th\xfac",color:"danger"};default:return"L\u1ed7i"}}},{key:"renderAddForm",value:function(){var e=this,t=this.state,a=t.arrCategory,r=t.arrChooseCategory,n=t.arrOptionCategory,c=t.arrAllProductOfAllCategory,i=t.arrAllProductChoosed;return Object(U.jsxs)("div",{children:[Object(U.jsxs)(D.Q,{children:[Object(U.jsx)(D.p,{md:"5",lg:"5",sm:"12",xm:"12",lx:"5",children:Object(U.jsx)("h3",{children:Object(U.jsx)("strong",{children:"T\u1ea1o d\u1eef li\u1ec7u cho banner"})})}),Object(U.jsx)(D.p,{md:"7",lg:"7",sm:"12",xm:"12",lx:"7",children:Object(U.jsx)(D.d,{block:!0,active:!0,variant:"ghost",color:"success","aria-pressed":"true",onClick:function(){e.pushCategory()},children:"Th\xeam s\u1ea3n ph\u1ea9m"})})]}),Object(U.jsx)("div",{style:{marginTop:15},children:a.map((function(t,a){var s=a;return Object(U.jsxs)(j.a,{style:{margin:20},children:[Object(U.jsx)(g.a,{style:{backgroundColor:"#339966",height:50},children:Object(U.jsx)(D.d,{size:"sm",color:"danger",style:{float:"right"},onClick:function(){e.onRemoveCard(s)},children:"X"})}),Object(U.jsxs)(b.a,{children:[Object(U.jsxs)(D.Q,{style:{margin:20},children:[Object(U.jsx)(D.p,{md:"3",lg:"3",sm:"12",xm:"12",lx:"3",children:Object(U.jsx)(D.N,{children:"Ch\u1ecdn danh m\u1ee5c:"})}),Object(U.jsx)(D.p,{md:"9",lg:"9",sm:"12",xm:"12",lx:"9",children:Object(U.jsx)(A.a,{isClearable:!0,value:r[s][0],onChange:function(t){e.handleChangeCategory(t,s)},options:n})})]}),c[s].length>0?Object(U.jsxs)(j.a,{children:[Object(U.jsx)(g.a,{style:{backgroundColor:"#a9c2af"},children:"Danh s\xe1ch s\u1ea3n ph\u1ea9m"}),Object(U.jsx)(b.a,{style:{height:350,overflowY:"scroll",backgroundColor:"#dfebe2"},children:Object(U.jsx)(D.Q,{children:c[s].map((function(t,a){return Object(U.jsx)(D.p,{md:"6",lg:"6",sm:"12",xm:"12",lx:"6",children:Object(U.jsxs)(D.B,{variant:"custom-checkbox",inline:!0,children:[Object(U.jsx)(D.I,{custom:!0,id:"".concat(t._id),onClick:function(t){if(t.target.checked){var r=c[s][a];i[s].push({product_id:r._id}),e.setState({arrAllProductChoosed:i})}else{var n=c[s][a],l=i[s].findIndex((function(e){return e.name==n.name}));i[s].splice(l,1),e.setState({arrAllProductChoosed:i})}}}),Object(U.jsxs)(D.N,{variant:"custom-checkbox",htmlFor:t._id,style:{margin:10},children:[Object(U.jsxs)("div",{children:[Object(U.jsx)("strong",{children:"T\xean sp: "}),t.name]}),Object(U.jsx)(D.H,{placeholder:"S\u1ed1 l\u01b0\u1ee3ng deal",disabled:!(i[s].findIndex((function(e){return e.product_id==t._id}))>-1),type:"number",style:{marginBottom:3},onChange:function(a){var r=i[s].findIndex((function(e){return e.product_id==t._id}));i[s][r].total_deal=Number(a.target.value),e.setState({arrAllProductChoosed:i})}}),Object(U.jsx)("img",{src:"".concat(E.a.BASE_URL,"/public/image_product/").concat(t.image),width:"90px",height:"110px",style:{border:"1px solid black",borderRadius:5}})]})]})})}))})})]}):""]})]})}))})]})}},{key:"render",value:function(){var e=this,t=this.state,a=t.data,r=t.arrPagination,n=t.key,c=t.image,i=t.action,o=t.time_start,d=t.time_finish,h=t.image_show,u=t.modalDetail,p=t.arrDetailBanner,A=t.accordion,S=t.arrUpdate,k=t.arrRemoveOnUpdate;t.arrOptionCategory;return this.state.isLoading?Object(U.jsx)("div",{className:"sweet-loading",children:Object(U.jsx)(N.a,{css:Y,size:50,color:"#123abc",loading:this.state.isLoading,speedMultiplier:1.5})}):Object(U.jsxs)("div",{className:"animated fadeIn",children:[Object(U.jsx)(x.a,{children:Object(U.jsxs)(O.a,{children:[Object(U.jsxs)(j.a,{children:[Object(U.jsxs)(g.a,{children:[Object(U.jsx)("i",{className:"fa fa-align-justify"})," Danh s\xe1ch danh m\u1ee5c",Object(U.jsx)("div",{style:M.tags,children:Object(U.jsxs)(D.Q,{children:[Object(U.jsx)(D.p,{sm:"12",lg:"12",children:Object(U.jsxs)(D.Q,{children:[Object(U.jsx)(D.p,{sm:"12",lg:"6",children:Object(U.jsx)("div",{children:Object(U.jsx)(_.a,{style:M.searchInput,onChange:function(t){e.actionSearch(t,"key")},name:"key",value:n,placeholder:"T\u1eeb kh\xf3a"})})}),Object(U.jsx)(D.p,{sm:"12",lg:"6",children:Object(U.jsx)(D.d,{color:"primary",style:{width:"100%",marginTop:5},size:"sm",onClick:function(t){e.resetSearch()},children:"L\xe0m m\u1edbi t\xecm ki\u1ebfm"})})]})}),Object(U.jsx)(D.p,{sm:"12",lg:"12",children:Object(U.jsx)(D.d,{outline:!0,color:"primary",style:M.floatRight,size:"sm",onClick:function(t){return e.toggleModal("new")},children:"Th\xeam m\u1edbi"})})]})})]}),Object(U.jsx)(b.a,{children:Object(U.jsxs)("table",{ble:!0,className:"table table-hover table-outline mb-0 d-none d-sm-table",children:[Object(U.jsx)("thead",{className:"thead-light",children:Object(U.jsxs)("tr",{children:[Object(U.jsx)("th",{className:"text-center",children:"STT."}),Object(U.jsx)("th",{className:"text-center",children:"T\xean banner"}),Object(U.jsx)("th",{className:"text-center",children:"H\xecnh \u1ea3nh"}),Object(U.jsx)("th",{className:"text-center",children:"Lo\u1ea1i deal"}),Object(U.jsx)("th",{className:"text-center",children:"Voucher"}),Object(U.jsx)("th",{className:"text-center",children:"Th\u1eddi gian b\u1eaft \u0111\u1ea7u"}),Object(U.jsx)("th",{className:"text-center",children:"Th\u1eddi gian k\u1ebft th\xfac"}),Object(U.jsx)("th",{className:"text-center",children:"#"})]})}),Object(U.jsxs)("tbody",{children:[Object(U.jsx)("td",{colSpan:"10",hidden:this.state.hidden,className:"text-center",children:"Kh\xf4ng t\xecm th\u1ea5y d\u1eef li\u1ec7u"}),void 0!=a?a.map((function(t,a){return Object(U.jsxs)("tr",{children:[Object(U.jsx)("td",{className:"text-center",children:a+1}),Object(U.jsx)("td",{className:"text-center",children:t.name}),Object(U.jsx)("td",{className:"text-center",children:""==t.image||null==t.image?Object(U.jsx)("img",{src:"https://www.chanchao.com.tw/VietnamPrintPack/images/default.jpg",width:"60px",height:"60px"}):Object(U.jsx)("img",{src:"".concat(E.a.BASE_URL,"/public/image_deal/").concat(t.image),width:"80px",height:"60px"})}),Object(U.jsx)("td",{className:"text-center",children:Object(U.jsx)(D.a,{color:e.getBadge_Type(t.type).color,children:e.getBadge_Type(t.type).title})}),Object(U.jsxs)("td",{className:"text-center",children:[t.voucher," %"]}),Object(U.jsx)("td",{className:"text-center",children:new Date(t.time_start).toLocaleDateString()}),Object(U.jsx)("td",{className:"text-center",children:new Date(t.time_finish).toLocaleDateString()}),Object(U.jsxs)("td",{className:"text-center",children:[Object(U.jsx)(D.d,{style:M.mgl5,outline:!0,color:"info",size:"sm",onClick:function(){var a=Object(l.a)(s.a.mark((function a(r){return s.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:e.setState({arrDetailBanner:t.category,modalDetail:!u});case 1:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}(),children:Object(U.jsx)(m.a,{name:"cil-magnifying-glass"})}),Object(U.jsx)(D.d,{style:M.mgl5,outline:!0,color:"primary",size:"sm",onClick:function(){var a=Object(l.a)(s.a.mark((function a(r){return s.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.openUpdate(t);case 2:return a.abrupt("return",a.sent);case 3:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}(),children:Object(U.jsx)(m.a,{name:"cilPencil"})}),Object(U.jsx)(D.d,{outline:!0,color:"danger",size:"sm",onClick:function(a){e.openDelete(t)},children:Object(U.jsx)(m.a,{name:"cilTrash"})})]})]},a)})):""]})]})})]}),Object(U.jsx)("div",{style:{float:"right"},children:Object(U.jsx)(T.a,{count:r.length,color:"primary",onChange:function(t,a){e.setState({data:r[a-1],indexPage:a-1})}})})]})}),Object(U.jsxs)(f.a,{size:"xl",isOpen:this.state.modalCom,className:this.props.className,children:[Object(U.jsx)(y.a,{children:"new"==this.state.action?"T\u1ea1o m\u1edbi":"C\u1eadp nh\u1eadt"}),Object(U.jsx)(C.a,{children:Object(U.jsxs)(D.Q,{children:[Object(U.jsxs)(D.p,{md:"2",lg:"2",sm:"12",xm:"12",lx:"2",children:[Object(U.jsx)(L.a,{field:"name",label:"T\xean banner",value:this.state.name,placeholder:"T\xean deal",onChange:function(t){return e.onChange("name",t.target.value)}}),Object(U.jsx)(L.a,{field:"image",label:"\u1ea2nh banner",type:"file",onChange:function(t){e.onChangeImage(t)},onClick:function(t){t.target.value=null,e.setState({image_show:""})}}),""==c||null==c?"":Object(U.jsx)("img",{width:"150",height:"100",src:""==h?"".concat(E.a.BASE_URL,"/public/image_deal/").concat(c):h,style:{marginBottom:20}}),Object(U.jsxs)("div",{style:{width:"100%"},className:"mt-3",children:[Object(U.jsx)(D.N,{children:"Lo\u1ea1i deal:"}),Object(U.jsx)(D.R,{onChange:function(){var t=Object(l.a)(s.a.mark((function t(a){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.changeDealType(a);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),custom:!0,size:"sm",name:"selectSm",id:"SelectLm",children:["0","1","2"].map((function(t,a){return t==e.state.type?Object(U.jsx)("option",{selected:!0,value:t,children:"0"==t?"\u01afu \u0111\xe3i m\u1edbi nh\u1ea5t":"1"==t?"\u0110ang di\u1ec5n ra":"\u0110\xe3 k\u1ebft th\xfac"},a):Object(U.jsx)("option",{value:t,children:"0"==t?"\u01afu \u0111\xe3i m\u1edbi nh\u1ea5t":"1"==t?"\u0110ang di\u1ec5n ra":"\u0110\xe3 k\u1ebft th\xfac"},a)}))})]}),Object(U.jsx)(L.a,{field:"voucher",label:"Voucher",value:this.state.voucher,placeholder:"Voucher",onChange:function(t){return e.onChange("voucher",t.target.value)}}),Object(U.jsxs)("div",{style:M.datePicker,children:[Object(U.jsx)("label",{style:M.flexLabel,children:"Ng\xe0y b\u1eaft \u0111\u1ea7u:"}),Object(U.jsx)(w.a,{style:M.flexOption,selected:new Date(o),onChange:function(t){return e.setState({time_start:t})}})]}),Object(U.jsxs)("div",{style:M.datePicker,children:[Object(U.jsx)("label",{style:M.flexLabel,children:"Ng\xe0y k\u1ebft th\xfac:"}),Object(U.jsx)(w.a,{style:M.flexOption,selected:new Date(d),onChange:function(t){return e.setState({time_finish:t})}})]})]}),Object(U.jsxs)(D.p,{md:"10",lg:"10",sm:"12",xm:"12",lx:"10",children:["new"==i?this.renderAddForm():Object(U.jsxs)("div",{children:[Object(U.jsxs)(D.Q,{children:[Object(U.jsx)(D.p,{md:"5",lg:"5",sm:"12",xm:"12",lx:"5",children:Object(U.jsx)("h3",{children:Object(U.jsx)("strong",{children:"Thi\u1ebft l\u1eadp d\u1eef li\u1ec7u cho banner"})})}),Object(U.jsx)(D.p,{md:"7",lg:"7",sm:"12",xm:"12",lx:"7"})]}),Object(U.jsx)("div",{style:{marginTop:15},children:S.map((function(t,a){var r=a;return Object(U.jsxs)(j.a,{style:{margin:20},children:[Object(U.jsx)(g.a,{style:{backgroundColor:"#339966"},children:Object(U.jsx)(D.d,{color:"danger",style:{float:"right"},onClick:function(){k.push(S[r]),S.splice(r,1),e.setState({arrUpdate:S,arrRemoveOnUpdate:k})},children:"X"})}),Object(U.jsxs)(b.a,{children:[Object(U.jsxs)(D.Q,{style:{margin:20},children:[Object(U.jsx)(D.p,{md:"3",lg:"3",sm:"12",xm:"12",lx:"3",children:Object(U.jsx)(D.N,{style:{fontWeight:900},children:"T\xean danh m\u1ee5c: "})}),Object(U.jsx)(D.p,{md:"9",lg:"9",sm:"12",xm:"12",lx:"9",children:t.category_id.name})]}),t.product.length>0?Object(U.jsxs)(j.a,{children:[Object(U.jsx)(g.a,{children:"Danh s\xe1ch s\u1ea3n ph\u1ea9m"}),Object(U.jsx)(b.a,{style:{height:250,overflowY:"scroll"},children:Object(U.jsx)(D.Q,{children:t.product.map((function(t,a){return Object(U.jsx)(D.p,{md:"4",lg:"4",sm:"12",xm:"12",lx:"4",children:Object(U.jsxs)(D.B,{variant:"custom-checkbox",inline:!0,children:[Object(U.jsx)(D.I,{custom:!0,id:"".concat(t._id),defaultChecked:!0}),Object(U.jsxs)(D.N,{variant:"custom-checkbox",htmlFor:t._id,style:{margin:10},children:[Object(U.jsxs)("div",{children:[Object(U.jsx)("strong",{children:"T\xean sp: "}),t.name]}),Object(U.jsxs)(D.Q,{children:[Object(U.jsx)(D.p,{md:"5",lg:"5",sm:"12",xm:"12",lx:"5",children:Object(U.jsx)("strong",{children:"SL deal:"})}),Object(U.jsx)(D.p,{md:"7",lg:"7",sm:"12",xm:"12",lx:"7",children:Object(U.jsx)(D.H,{placeholder:"S\u1ed1 l\u01b0\u1ee3ng deal",value:t.total_deal,type:"number",style:{marginBottom:3,maxWidth:150},onChange:function(t){S[r].product[a].total_deal=Number(t.target.value),e.setState({arrUpdate:S})}})})]}),Object(U.jsx)("img",{src:"".concat(E.a.BASE_URL,"/public/image_product/").concat(t.image),width:"70px",height:"90px"})]})]})})}))})})]}):""]})]})}))})]}),Object(U.jsx)("br",{})]})]})}),Object(U.jsxs)(v.a,{children:[Object(U.jsx)(D.d,{color:"primary",onClick:function(t){"new"===e.state.action?e.addDeal():e.updateDeal()},disabled:this.state.isLoading,children:"L\u01b0u"})," ",Object(U.jsx)(D.d,{color:"secondary",onClick:function(t){e.onCancelModal()},children:"\u0110\xf3ng"})]})]}),Object(U.jsxs)(f.a,{isOpen:this.state.modalDelete,toggle:function(t){return e.setState({modalDelete:!e.state.modalDelete,delete:null})},className:this.props.className,children:[Object(U.jsx)(y.a,{toggle:function(t){return e.setState({modalDelete:!e.state.modalDelete,delete:null})},children:"Delete"}),Object(U.jsx)(C.a,{children:Object(U.jsx)("label",{htmlFor:"tag",children:"X\xe1c nh\u1eadn x\xf3a !!!"})}),Object(U.jsxs)(v.a,{children:[Object(U.jsx)(D.d,{color:"primary",onClick:function(t){return e.delete()},disabled:this.state.isLoading,children:"Xo\xe1"})," ",Object(U.jsx)(D.d,{color:"secondary",onClick:function(t){return e.setState({modalDelete:!e.state.modalDelete,delete:null})},children:"\u0110\xf3ng"})]})]}),Object(U.jsxs)(f.a,{isOpen:this.state.modalDetail,size:"xl",className:this.props.className,children:[Object(U.jsx)(y.a,{children:"Chi ti\u1ebft banner"}),Object(U.jsx)(C.a,{style:{height:500,overflowY:"scroll"},children:p.map((function(t,a){return Object(U.jsxs)(D.e,{className:"mb-0",style:{margin:5},children:[Object(U.jsx)(D.i,{id:"headingOne",children:Object(U.jsxs)(D.Q,{children:[Object(U.jsx)(D.p,{sm:"12",lg:"4",children:Object(U.jsx)(D.d,{block:!0,color:"link",className:"text-left m-0 p-0",onClick:function(){e.setState({accordion:A==a?null:a})},children:Object(U.jsxs)("h5",{className:"m-0 p-0",children:["Danh m\u1ee5c ",t.category_id.name]})})}),Object(U.jsx)(D.p,{sm:"12",lg:"8",children:Object(U.jsx)("img",{src:"".concat(E.a.BASE_URL,"/public/image_category/").concat(t.category_id.image),width:"300px",height:"150px"})})]})}),Object(U.jsx)(D.q,{show:A==a,children:Object(U.jsx)(D.f,{children:Object(U.jsx)(D.t,{items:t.product,fields:["T\xean s\u1ea3n ph\u1ea9m","H\xecnh \u1ea3nh","Th\u01b0\u01a1ng hi\u1ec7u","S\u1ed1 l\u01b0\u1ee3ng Sale","Gi\xe1"],itemsPerPage:3,pagination:!0,size:"sm",scopedSlots:{"T\xean s\u1ea3n ph\u1ea9m":function(e){return Object(U.jsx)("td",{children:e.name})},"H\xecnh \u1ea3nh":function(e){return Object(U.jsx)("td",{children:Object(U.jsx)("img",{src:""==e.image||null==e.image?"https://www.chanchao.com.tw/VietnamPrintPack/images/default.jpg":"".concat(E.a.BASE_URL,"/public/image_product/").concat(e.image),width:"60px",height:"40px"})})},"Th\u01b0\u01a1ng hi\u1ec7u":function(e){return Object(U.jsx)("td",{children:e.brand_id.name})},"S\u1ed1 l\u01b0\u1ee3ng Sale":function(e){return Object(U.jsx)("td",{children:e.total_deal})},"Gi\xe1":function(e){return Object(U.jsx)("td",{children:e.price})}}})})})]})}))}),Object(U.jsx)(v.a,{children:Object(U.jsx)(D.d,{color:"secondary",onClick:function(t){return e.setState({modalDetail:!e.state.modalDetail})},children:"\u0110\xf3ng"})})]})]})}}]),a}(p.Component),Y=Object(P.css)(r||(r=Object(n.a)(["\n  display: block;\n  margin: 0 auto;\n  border-color: red;\n"]))),M={datePicker:{marginBottom:20,width:"100%"},pagination:{marginRight:"5px"},flexLabel:{width:100},flexOption:{width:"100%"},a:{textDecoration:"none"},floatRight:{float:"right",marginTop:"3px"},spinner:{width:"30px"},center:{textAlign:"center"},tbody:{height:"380px",overflowY:"auto"},wh25:{width:"25%",float:"left",height:"80px"},w5:{width:"15%",float:"left",height:"80px"},wa10:{width:"5%",float:"left",height:"80px"},row:{float:"left",width:"100%"},success:{color:"green"},danger:{color:"red"},mgl5:{margin:"2px"},tags:{float:"right",marginRight:"5px"},searchInput:{width:"190px",display:"inline-block"},userActive:{color:"green"},userPending:{color:"red"},nagemonNameCol:{width:"328px"},image:{width:"100px",height:"100px",borderRadius:"99999px"}};t.default=G},640:function(e,t,a){"use strict";t.a={BASE_URL:"https://api.thulamua.com",GHTK_URL:"https://services.ghtklab.com",LOGIN:"/api/login",LIST_USER:"/api/list_user",ADD_USER:"/api/add_user",UPDATE_USER:"/api/update_user",DELETE_USER:"/api/delete_user",UPLOAD_AVATAR:"/api/upload_avatar",LIST_CATEGORY:"/api/list_category",ADD_CATEGORY:"/api/add_category",UPDATE_CATEGORY:"/api/update_category",DELETE_CATEGORY:"/api/delete_category",UPLOAD_CATEGORY:"/api/upload_category",LIST_BRAND:"/api/list_brand",ADD_BRAND:"/api/add_brand",UPDATE_BRAND:"/api/update_brand",DELETE_BRAND:"/api/delete_brand",UPLOAD_BRAND:"/api/upload_brand",LIST_PRODUCT:"/api/list_product",LIST_PRODUCT_CATEGORY:"/api/list_product_category",ADD_PRODUCT:"/api/add_product",UPDATE_PRODUCT:"/api/update_product",DELETE_PRODUCT:"/api/delete_product",UPLOAD_PRODUCT:"/api/upload_product",UPLOAD_PRODUCT_MULTIPLE:"/api/upload_product_multiple",LIST_ORDER:"/api/list_order",LIST_ORDER_DETAIL:"/api/list_order_detail",LIST_ORDER_BY_USER:"/api/list_order_by_user",ADD_ORDER:"/api/add_order",PRINT_ORDER:"/api/print_order",LIST_DEAL:"/api/list_deal",ADD_DEAL:"/api/add_deal",UPDATE_DEAL:"/api/update_deal",DELETE_DEAL:"/api/delete_deal",UPLOAD_DEAL:"/api/upload_deal",LIST_COUNT_ORDER:"/api/list_count_order",LIST_BANNER:"/api/get_banner",GET_BANNER_BY_ID:"/api/get_banner_by_id",ADD_BANNER:"/api/add_banners",UPADTE_BANNER:"/api/update_banner",DELETE_BANNER:"/api/delete_banner",UPLOAD_BANNER:"/api/upload_banner",LIST_SEO_INFO:"/api/get_seo_info",GET_SEO_INFO_BY_PRODUCT:"/api/get_seo_info_by_product",ADD_SEO_INFO:"/api/add_seo_info",UPDATE_SEO_INFO:"/api/update_seo_info",DELETE_SEO_INFOR:"/api/delete_seo_info",UPLOAD_SEO_INFO:"/api/upload_seo_info",LIST_MULTI_IMAGE:"/api/get_multi_image",LIST_IMAGE_BY_PRODUCT:"/api/get_multi_image_by_product",ADD_MULTI_IMAGE:"/api/add_multi_image",UPDATE_MULTI_IMAGE:"/api/update_multi_image",UPLOAD_MULTI_IMAGE:"/api/upload_multi_image"}},647:function(e,t,a){"use strict";var r=a(113),n=a.n(r),c=a(645),i=a(640),s=a(652).default;s.defaults.baseURL=i.a.BASE_URL;var l=function(){var e=Object(c.a)(n.a.mark((function e(){var t,a,r,c,i,l,o,d,h,u=arguments;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=u.length>0&&void 0!==u[0]?u[0]:"",a=u.length>1&&void 0!==u[1]?u[1]:{},r=u.length>2&&void 0!==u[2]?u[2]:"",c=u.length>3?u[3]:void 0,i={},r&&(i={headers:r}),e.prev=6,e.t0=c,e.next="GET"===e.t0?10:"POST"===e.t0?16:"PUT"===e.t0?22:"DELETE"===e.t0?28:34;break;case 10:return e.next=12,s.get(t,a,i);case 12:if(0!=(l=e.sent).is_success){e.next=15;break}return e.abrupt("return",null);case 15:return e.abrupt("return",l.data);case 16:return e.next=18,s.post(t,a,i);case 18:if(0!=(o=e.sent).is_success){e.next=21;break}return e.abrupt("return",null);case 21:return e.abrupt("return",o.data);case 22:return e.next=24,s.put(t,a,i);case 24:if(0!=(d=e.sent).is_success){e.next=27;break}return e.abrupt("return",null);case 27:return e.abrupt("return",d.data);case 28:return e.next=30,s.delete(t,a,i);case 30:if(0!=(h=e.sent).is_success){e.next=33;break}return e.abrupt("return",null);case 33:return e.abrupt("return",h.data);case 34:e.next=39;break;case 36:return e.prev=36,e.t1=e.catch(6),e.abrupt("return",e.t1);case 39:case"end":return e.stop()}}),e,null,[[6,36]])})));return function(){return e.apply(this,arguments)}}();t.a=l},651:function(e,t,a){"use strict";a(2);var r=a(642),n=a.n(r),c=a(17),i=function(e){var t=e.field,a=e.value,r=e.label,i=e.error,s=e.type,l=e.onChange,o=e.checkUserExists,d=e.readOnly,h=e.placeholder,u=e.onClick;return Object(c.jsxs)("div",{className:n()("form-group",{"has-error":i}),children:[Object(c.jsx)("label",{className:"control-label",children:r}),Object(c.jsx)("input",{onChange:l,onClick:u,onBlur:o,value:a,type:s,name:t,placeholder:h,readOnly:d,className:"form-control"}),i&&Object(c.jsx)("span",{className:"help-block",children:i})]})};i.defaultProps={type:"text"},t.a=i}}]);
//# sourceMappingURL=19.250b89c3.chunk.js.map