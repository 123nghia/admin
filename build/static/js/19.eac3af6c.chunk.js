(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[19],{1031:function(e,t,a){"use strict";a.r(t);var r,n=a(660),c=a(169),s=a(113),i=a.n(s),l=a(645),o=a(165),d=a(166),h=a(168),u=a(167),p=a(2),j=a(643),m=a(1023),g=a(1024),x=a(1025),b=a(688),O=a(1014),f=a(1015),_=a(1038),y=a(1009),C=a(1010),A=a(1011),v=a(646),D=a(681),T=a(647),k=a(1035),S=(a(661),a(942)),w=a.n(S),P=(a(941),a(640)),E=a(651),L=a(655),R=a(662),N=a.n(R),U=a(1013),I=a(17),B=new Headers,G=localStorage.getItem("auth");B.append("Authorization","Bearer "+G),B.append("Content-Type","application/json");var Q=function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(e){var r;return Object(o.a)(this,a),(r=t.call(this,e)).getData=Object(l.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.setState({isLoading:!0}),e.next=3,Object(T.a)(P.a.LIST_DEAL,{},"","POST");case 3:t=e.sent,a=t.data.dataAdmin,r.pagination(a),r.setState({dataApi:a,isLoading:!1});case 7:case"end":return e.stop()}}),e)}))),r.openDelete=function(e){r.setState({modalDelete:!r.state.modalDelete,id:e._id})},r.handleChangeCategory=function(){var e=Object(l.a)(i.a.mark((function e(t,a){var n,c,s,l,o,d,h,u,p,j;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.state,c=n.arrCategory,s=n.arrAllProductOfAllCategory,l=n.arrAllProductOfAllCategory_Temp,o=n.arrAllProductChoosed,d=n.arrOptionCategory,h=n.arrChooseCategory,e.next=3,Object(T.a)(P.a.LIST_PRODUCT_CATEGORY,{brand_id:t.value},"","POST");case 3:u=e.sent,p=u.data,c[a].category_id="",c[a].brand_id=t.value,s[a]=p,l[a]=new Array,o[a]=new Array,j=d.find((function(e){return e.value==t.value})),console.log(j),h[a]=new Array,h[a].push(j),r.setState({arrCategory:c,arrAllProductOfAllCategory:s,arrAllProductOfAllCategory_Temp:l,arrAllProductChoosed:o,arrChooseCategory:h});case 15:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),r.handleUpdateCategory=function(){var e=Object(l.a)(i.a.mark((function e(t,a){var n,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=r.state,c=n.arrUpdate,n.arrOptionCategory,console.log(c[a]);case 2:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),r.pushCategory=function(){var e=r.state,t=e.arrCategory,a=e.arrAllProductOfAllCategory,n=e.arrAllProductOfAllCategory_Temp,c=e.arrAllProductChoosed,s=e.arrChooseCategory;t.push({category_id:"",brand_id:"",product:[]}),a.push([]),n.push([]),c.push([]),s.push([]),r.setState({arrCategory:t,arrAllProductOfAllCategory:a,arrAllProductOfAllCategory_Temp:n,arrAllProductChoosed:c})},r.onRemoveCard=function(e){var t=r.state,a=t.arrCategory,n=t.arrAllProductOfAllCategory,c=t.arrAllProductOfAllCategory_Temp,s=t.arrAllProductChoosed,i=t.arrChooseCategory;a.splice(e,1),n.splice(e,1),c.splice(e,1),s.splice(e,1),i.splice(e,1),r.setState({arrCategory:a,arrAllProductOfAllCategory:n,arrAllProductOfAllCategory_Temp:c,arrAllProductChoosed:s,arrChooseCategory:i})},r.onCancelModal=function(){var e=r.state,t=e.arrCategory,a=e.arrAllProductOfAllCategory,n=e.arrAllProductOfAllCategory_Temp,c=e.arrAllProductChoosed,s=e.arrChooseCategory,i=e.modalCom;t=new Array,a=new Array,n=new Array,c=new Array,s=new Array,r.setState({modalCom:!i,arrCategory:t,arrAllProductOfAllCategory:a,arrAllProductOfAllCategory_Temp:n,arrAllProductChoosed:c,arrChooseCategory:s})},r.state={data:[],key:"",modalCom:!1,modalDetail:!1,dataApi:[],hidden:!1,action:"new",name:"",image:"",image_show:"",type:"0",status:"0",voucher:0,time_start:new Date,time_finish:new Date,arrDetailBanner:[],modalDelete:!1,delete:null,arrPagination:[],arrOptionCategory:[],objectValueCategory:{},indexPage:0,token:{Authorization:"Bearer ".concat(localStorage.getItem("token"))},isLoading:!1,accordion:0,arrCategory:[],arrAllProductOfAllCategory:[],arrAllProductOfAllCategory_Temp:[],arrAllProductChoosed:[],arrChooseCategory:[],arrUpdate:[],arrRemoveOnUpdate:[]},r}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(l.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.getData();case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"pagination",value:function(e){var t,a,r,n=[];for(t=0,a=e.length;t<a;t+=5)r=e.slice(t,t+5),n.push(r);0==n.length?this.setState({hidden:!1}):this.setState({hidden:!0}),this.setState({arrPagination:n,data:n[0]})}},{key:"searchKey",value:function(){var e=this.state,t=e.indexPage,a=e.key;if(""!=a){var r=[];this.state.dataApi.map((function(e){e.name.toLocaleUpperCase().includes(a.toLocaleUpperCase())&&r.push(e)})),this.setState({data:r})}else this.setState({data:this.state.arrPagination[t]})}},{key:"actionSearch",value:function(e,t){var a=this;this.setState(Object(c.a)({},t,e.target.value),(function(){a.searchKey()}))}},{key:"resetSearch",value:function(){var e=this;this.setState({key:""},(function(){e.searchKey()}))}},{key:"onChangeImage",value:function(e){var t=this,a=e.target.files,r=new FileReader;this.setState({image:a[0]}),r.readAsDataURL(a[0]),r.onload=function(e){t.setState({image_show:e.target.result})}}},{key:"toggleModal",value:function(){var e=Object(l.a)(i.a.mark((function e(t){var a,r,n,c,s=this;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=this.state,r=a.modalCom,n=a.token,c=a.arrOptionCategory,"new"==t&&this.setState({modalCom:!r,action:t,name:"",category:[],arrCategory:[],image:"",image_show:"",type:"0",status:"0",voucher:0,time_finish:new Date,time_start:new Date,objectValueCategory:{}},Object(l.a)(i.a.mark((function e(){var t,a,r,l;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!=c.length){e.next=8;break}return e.next=3,Object(T.a)(P.a.LIST_BRAND,{},n,"POST");case 3:for(t=e.sent,a=[],r=t.data,l=0;l<r.length;l++)a.push({value:r[l]._id,label:r[l].name});s.setState({arrOptionCategory:a});case 8:case"end":return e.stop()}}),e)}))));case 2:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"onChange",value:function(e,t){this.setState(Object(c.a)({},e,t))}},{key:"addDeal",value:function(){var e=Object(l.a)(i.a.mark((function e(){var t,a,r,n,c,s,l,o,d,h,u,p,j,m;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.state,a=t.name,r=t.image,n=t.type,c=t.status,s=t.voucher,l=t.arrCategory,o=t.arrAllProductChoosed,d=t.time_start,h=t.time_finish,0!=l.length){e.next=4;break}return alert("Ch\u01b0a thi\u1ebft l\u1eadp banner !!!"),e.abrupt("return");case 4:u=0;case 5:if(!(u<l.length)){e.next=25;break}if(""!=l[u].brand_id&&0!=o[u].length){e.next=11;break}return alert("Trong ph\u1ea7n thi\u1ebft l\u1eadp banner, banner th\u1ee9 ".concat(u+1," ch\u01b0a ch\u1ecdn b\u1ea5t k\xec th\u01b0\u01a1ng hi\u1ec7u ho\u1eb7c s\u1ea3n ph\u1ea9m n\xe0o !!!")),e.abrupt("return");case 11:p=0;case 12:if(!(p<o[u].length)){e.next=22;break}if(void 0!=o[u][p].total_deal&&0!=o[u][p].total_deal){e.next=18;break}return alert("S\u1ea3n ph\u1ea9m th\u1ee9 ".concat(p+1," trong banner th\u1ee9 ").concat(u+1," ch\u01b0a thi\u1ebft l\u1eadp s\u1ed1 l\u01b0\u1ee3ng deal !!!")),e.abrupt("return");case 18:l[u].product=o[u];case 19:p++,e.next=12;break;case 22:u++,e.next=5;break;case 25:if(null!=a&&""!=a&&null!=r&&""!=r){e.next=28;break}return alert("H\xe3y nh\u1eadp \u0111\u1ea7y \u0111\u1ee7 d\u1eef li\u1ec7u !!!"),e.abrupt("return");case 28:return(j=new FormData).append("image",r),e.next=32,Object(T.a)(P.a.UPLOAD_DEAL,j,"","POST");case 32:return m={name:a,image:r.name,category:l,type:n,status:c,voucher:s,time_start:d,time_finish:h},this.setState({isLoading:!0}),e.next=36,Object(T.a)(P.a.ADD_DEAL,m,"","POST");case 36:200==e.sent.status?(this.getData(),this.setState({modalCom:!this.state.modalCom})):(alert("Th\xeam th\u1ea5t b\u1ea1i"),this.setState({isLoading:!1}));case 38:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"changeDealType",value:function(e){this.setState({type:e.target.value})}},{key:"openUpdate",value:function(){var e=Object(l.a)(i.a.mark((function e(t){var a,r,n,c,s,o,d,h,u,p,j,m=this;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(a=this.state,r=a.token,n=a.arrOptionCategory,c=a.arrRemoveOnUpdate,s=[],o=[],d=0;d<c.length;d++)t.category.push(c[d]);for(h=t.category,u=0;u<h.length;u++){for(p=h[u].product,j=0;j<p.length;j++)o.push({product_id:p[j].product_id._id,total_deal:p[j].total_deal});s.push({brand_id:h[u].brand_id._id,product:o})}this.setState({arrRemoveOnUpdate:[],modalCom:!this.state.modalCom,action:"update",name:t.name,category:s,arrUpdate:t.category,image:t.image,image_show:"",type:t.type,time_start:t.time_start,time_finish:t.time_finish,status:t.status,voucher:t.voucher,id:t._id},Object(l.a)(i.a.mark((function e(){var t,a,c,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!=n.length){e.next=8;break}return e.next=3,Object(T.a)(P.a.LIST_BRAND,{},r,"POST");case 3:for(t=e.sent,a=[],c=t.data,s=0;s<c.length;s++)a.push({value:c[s]._id,label:c[s].name});m.setState({arrOptionCategory:a});case 8:case"end":return e.stop()}}),e)}))));case 7:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"updateDeal",value:function(){var e=Object(l.a)(i.a.mark((function e(){var t,a,r,n,c,s,l,o,d,h,u,p,j,m,g,x;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.state,a=t.name,r=t.image,n=t.type,c=t.status,s=t.voucher,l=t.time_start,o=t.time_finish,d=t.arrUpdate,null!=a&&""!=a&&null!=r&&""!=r){e.next=4;break}return alert("H\xe3y nh\u1eadp \u0111\u1ea7y \u0111\u1ee7 d\u1eef li\u1ec7u !!!"),e.abrupt("return");case 4:for(h=[],u=[],p=0;p<d.length;p++){for(j=d[p].product,m=0;m<j.length;m++)u.push({product_id:j[m].product_id._id,total_deal:j[m].total_deal});h.push({brand_id:d[p].brand_id._id,product:u})}return(g=new FormData).append("image",r),e.next=11,Object(T.a)(P.a.UPLOAD_DEAL,g,"","POST");case 11:return x={name:a,image:r.name,category:h,type:n,status:c,voucher:s,time_start:l,time_finish:o,id:this.state.id},this.setState({isLoading:!0}),e.next=15,Object(T.a)(P.a.UPDATE_DEAL,x,"","POST");case 15:200==e.sent.status?(this.getData(),this.setState({modalCom:!this.state.modalCom})):(alert("C\u1eadp nh\u1eadt th\u1ea5t b\u1ea1i"),this.setState({isLoading:!1}));case 17:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"delete",value:function(){var e=Object(l.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({isLoading:!0}),e.next=3,Object(T.a)(P.a.DELETE_DEAL,{id:this.state.id},"","POST");case 3:200==e.sent.status?(this.getData(),this.setState({modalDelete:!this.state.modalDelete,delete:null})):(alert("Xo\xe1 th\u1ea5t b\u1ea1i"),this.setState({isLoading:!1}));case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"inputChange",value:function(e){this.setState(Object(c.a)({},e.target.name,e.target.value))}},{key:"getBadge_Type",value:function(e){switch(e){case"0":return{title:"\u01afu \u0111\xe3i m\u1edbi nh\u1ea5t",color:"primary"};case"1":return{title:"\u01afu \u0111\xe3i \u0111ang di\u1ec5n ra",color:"success"};case"2":return{title:"\u01afu \u0111\xe3i \u0111\xe3 k\u1ebft th\xfac",color:"danger"};default:return"L\u1ed7i"}}},{key:"renderAddForm",value:function(){var e=this,t=this.state,a=t.arrCategory,r=t.arrChooseCategory,n=t.arrOptionCategory,c=t.arrAllProductOfAllCategory,s=t.arrAllProductChoosed,i=t.arrAllProductOfAllCategory_Temp;return Object(I.jsxs)("div",{children:[Object(I.jsxs)(v.Q,{children:[Object(I.jsx)(v.p,{md:"5",lg:"5",sm:"12",xm:"12",lx:"5",children:Object(I.jsx)("h3",{children:Object(I.jsx)("strong",{children:"T\u1ea1o d\u1eef li\u1ec7u cho banner"})})}),Object(I.jsx)(v.p,{md:"7",lg:"7",sm:"12",xm:"12",lx:"7"})]}),Object(I.jsxs)("div",{style:{marginTop:15},children:[a.map((function(t,a){var l=a;return Object(I.jsxs)(m.a,{style:{margin:20},children:[Object(I.jsx)(g.a,{style:{backgroundColor:"#339966",height:50},children:Object(I.jsx)(v.d,{size:"sm",color:"danger",style:{float:"right"},onClick:function(){e.onRemoveCard(l)},children:"X"})}),Object(I.jsxs)(x.a,{children:[Object(I.jsxs)(v.Q,{style:{margin:20},children:[Object(I.jsx)(v.p,{md:"3",lg:"3",sm:"12",xm:"12",lx:"3",children:Object(I.jsx)(v.N,{children:"Ch\u1ecdn th\u01b0\u01a1ng hi\u1ec7u:"})}),Object(I.jsx)(v.p,{md:"9",lg:"9",sm:"12",xm:"12",lx:"9",children:Object(I.jsx)(D.a,{isClearable:!0,value:r[l][0],onChange:function(t){e.handleChangeCategory(t,l)},options:n})})]}),Object(I.jsxs)(v.Q,{children:[Object(I.jsx)(v.p,{md:"6",lg:"6",sm:"12",xm:"12",lx:"6",children:Object(I.jsxs)(m.a,{children:[Object(I.jsx)(g.a,{style:{backgroundColor:"#a9c2af"},children:Object(I.jsxs)(v.Q,{children:[Object(I.jsx)(v.p,{md:"4",lg:"4",sm:"12",xm:"12",lx:"4",children:"Danh s\xe1ch s\u1ea3n ph\u1ea9m"}),Object(I.jsxs)(v.p,{md:"5",lg:"5",sm:"12",xm:"12",lx:"5",style:{display:"inline-block"},children:[Object(I.jsx)(b.a,{style:{width:"130px",display:"inline"},onChange:function(e){},name:"key",placeholder:"T\u1eeb kh\xf3a"}),Object(I.jsx)(v.d,{size:"sm",color:"info",className:"mb-1",style:{height:"35px",width:"35px"},onClick:function(e){},children:Object(I.jsx)(j.a,{content:U.a.cilMagnifyingGlass})})]}),Object(I.jsx)(v.p,{md:"3",lg:"3",sm:"12",xm:"12",lx:"3",children:Object(I.jsx)(v.d,{size:"sm",color:"info",style:{height:"35px"},onClick:function(t){var a=c[l],r=i[l];i[l]=new Array,s[l]=new Array,e.setState({arrAllProductOfAllCategory_Temp:i});for(var n=a.concat(r),o=0;o<n.length;o++)s[l].push({product_id:n[o]._id}),i[l].push(n[o]);c[l]=new Array,e.setState({arrAllProductChoosed:s,arrAllProductOfAllCategory_Temp:i,arrAllProductOfAllCategory:c})},children:"Th\xeam t\u1ea5t c\u1ea3"})})]})}),Object(I.jsx)(x.a,{style:{height:250,overflowY:"scroll",backgroundColor:"#dfebe2"},children:Object(I.jsx)(v.Q,{children:c[l].map((function(t,a){return Object(I.jsx)(v.p,{md:"12",lg:"12",sm:"12",xm:"12",lx:"12",children:Object(I.jsxs)(v.B,{variant:"custom-checkbox",inline:!0,children:[Object(I.jsx)(v.d,{size:"sm",color:"success",style:{height:"30px",width:"40px",transform:"translate(-50%, 50%)"},onClick:function(t){var r=c[l][a];s[l].push({product_id:r._id});var n=c[l].findIndex((function(e){return e.name==r.name}));i[l].unshift(c[l][n]),c[l].splice(n,1),e.setState({arrAllProductChoosed:s,arrAllProductOfAllCategory_Temp:i,arrAllProductOfAllCategory:c})},children:Object(I.jsx)(j.a,{content:U.a.cilPlus})}),Object(I.jsx)(v.N,{style:{margin:10},children:Object(I.jsxs)(v.Q,{children:[Object(I.jsx)(v.p,{md:"9",lg:"9",sm:"12",xm:"12",lx:"9",children:Object(I.jsxs)("div",{children:[Object(I.jsx)("strong",{children:"T\xean sp: "}),t.name]})}),Object(I.jsx)(v.p,{md:"2",lg:"2",sm:"12",xm:"12",lx:"2",children:Object(I.jsx)("img",{src:"".concat(P.a.BASE_URL,"/public/image_product/").concat(t.image),width:"90px",height:"110px",style:{border:"1px solid black",borderRadius:5}})}),Object(I.jsx)(v.p,{md:"1",lg:"1",sm:"12",xm:"12",lx:"1"})]})})]})})}))})})]})}),Object(I.jsx)(v.p,{md:"6",lg:"6",sm:"12",xm:"12",lx:"6",children:Object(I.jsxs)(m.a,{children:[Object(I.jsx)(g.a,{style:{backgroundColor:"#a9c2af",height:"65px"},children:Object(I.jsx)(v.Q,{children:"Danh s\xe1ch s\u1ea3n ph\u1ea9m \u0111\xe3 ch\u1ecdn"})}),Object(I.jsx)(x.a,{style:{height:250,overflowY:"scroll",backgroundColor:"#dfebe2"},children:Object(I.jsx)(v.Q,{children:i[l].map((function(t,a){return Object(I.jsx)(v.p,{md:"12",lg:"12",sm:"12",xm:"12",lx:"12",children:Object(I.jsxs)(v.B,{variant:"custom-checkbox",inline:!0,children:[Object(I.jsx)(v.d,{size:"sm",color:"danger",style:{height:"30px",width:"40px",transform:"translate(-50%, 50%)"},onClick:function(t){var r=i[l][a],n=i[l].findIndex((function(e){return e._id==r._id}));s[l].splice(n,1),c[l].unshift(i[l][n]),i[l].splice(n,1),e.setState({arrAllProductChoosed:s,arrAllProductOfAllCategory:c,arrAllProductOfAllCategory_Temp:i})},children:Object(I.jsx)(j.a,{content:U.a.cilMinus})}),Object(I.jsx)(v.N,{style:{margin:10},children:Object(I.jsxs)(v.Q,{children:[Object(I.jsxs)(v.p,{md:"9",lg:"9",sm:"12",xm:"12",lx:"9",children:[Object(I.jsxs)("div",{children:[Object(I.jsx)("strong",{children:"T\xean sp: "}),t.name]}),Object(I.jsx)(v.H,{placeholder:"S\u1ed1 l\u01b0\u1ee3ng deal",type:"number",style:{marginBottom:3},onChange:function(a){var r=s[l].findIndex((function(e){return e.product_id==t._id}));s[l][r].total_deal=Number(a.target.value),e.setState({arrAllProductChoosed:s})}})]}),Object(I.jsx)(v.p,{md:"2",lg:"2",sm:"12",xm:"12",lx:"2",children:Object(I.jsx)("img",{src:"".concat(P.a.BASE_URL,"/public/image_product/").concat(t.image),width:"90px",height:"110px",style:{border:"1px solid black",borderRadius:5}})}),Object(I.jsx)(v.p,{md:"1",lg:"1",sm:"12",xm:"12",lx:"1"})]})})]})})}))})})]})})]})]})]})})),Object(I.jsx)(v.d,{block:!0,active:!0,variant:"ghost",color:"success","aria-pressed":"true",onClick:function(){e.pushCategory()},children:"Th\xeam m\u1edbi"})]})]})}},{key:"render",value:function(){var e=this,t=this.state,a=t.data,r=t.arrPagination,n=t.key,c=t.image,s=t.action,o=t.time_start,d=t.time_finish,h=t.image_show,u=t.modalDetail,p=t.arrDetailBanner,D=t.accordion,T=t.arrUpdate;t.arrRemoveOnUpdate,t.arrOptionCategory;return this.state.isLoading?Object(I.jsx)("div",{className:"sweet-loading",children:Object(I.jsx)(N.a,{css:M,size:50,color:"#123abc",loading:this.state.isLoading,speedMultiplier:1.5})}):Object(I.jsxs)("div",{className:"animated fadeIn",children:[Object(I.jsx)(O.a,{children:Object(I.jsxs)(f.a,{children:[Object(I.jsxs)(m.a,{children:[Object(I.jsxs)(g.a,{children:[Object(I.jsx)("i",{className:"fa fa-align-justify"})," Danh s\xe1ch danh m\u1ee5c",Object(I.jsx)("div",{style:z.tags,children:Object(I.jsxs)(v.Q,{children:[Object(I.jsx)(v.p,{sm:"12",lg:"12",children:Object(I.jsxs)(v.Q,{children:[Object(I.jsx)(v.p,{sm:"12",lg:"6",children:Object(I.jsx)("div",{children:Object(I.jsx)(b.a,{style:z.searchInput,onChange:function(t){e.actionSearch(t,"key")},name:"key",value:n,placeholder:"T\u1eeb kh\xf3a"})})}),Object(I.jsx)(v.p,{sm:"12",lg:"6",children:Object(I.jsx)(v.d,{color:"primary",style:{width:"100%",marginTop:5},size:"sm",onClick:function(t){e.resetSearch()},children:"L\xe0m m\u1edbi t\xecm ki\u1ebfm"})})]})}),Object(I.jsx)(v.p,{sm:"12",lg:"12",children:Object(I.jsx)(v.d,{outline:!0,color:"primary",style:z.floatRight,size:"sm",onClick:function(t){return e.toggleModal("new")},children:"Th\xeam m\u1edbi"})})]})})]}),Object(I.jsx)(x.a,{children:Object(I.jsxs)("table",{ble:!0,className:"table table-hover table-outline mb-0 d-none d-sm-table",children:[Object(I.jsx)("thead",{className:"thead-light",children:Object(I.jsxs)("tr",{children:[Object(I.jsx)("th",{className:"text-center",children:"STT."}),Object(I.jsx)("th",{className:"text-center",children:"T\xean banner"}),Object(I.jsx)("th",{className:"text-center",children:"H\xecnh \u1ea3nh"}),Object(I.jsx)("th",{className:"text-center",children:"Lo\u1ea1i deal"}),Object(I.jsx)("th",{className:"text-center",children:"Voucher"}),Object(I.jsx)("th",{className:"text-center",children:"Th\u1eddi gian b\u1eaft \u0111\u1ea7u"}),Object(I.jsx)("th",{className:"text-center",children:"Th\u1eddi gian k\u1ebft th\xfac"}),Object(I.jsx)("th",{className:"text-center",children:"#"})]})}),Object(I.jsxs)("tbody",{children:[Object(I.jsx)("td",{colSpan:"10",hidden:this.state.hidden,className:"text-center",children:"Kh\xf4ng t\xecm th\u1ea5y d\u1eef li\u1ec7u"}),void 0!=a?a.map((function(t,a){return Object(I.jsxs)("tr",{children:[Object(I.jsx)("td",{className:"text-center",children:a+1}),Object(I.jsx)("td",{className:"text-center",children:t.name}),Object(I.jsx)("td",{className:"text-center",children:""==t.image||null==t.image?Object(I.jsx)("img",{src:"https://www.chanchao.com.tw/VietnamPrintPack/images/default.jpg",width:"60px",height:"60px"}):Object(I.jsx)("img",{src:"".concat(P.a.BASE_URL,"/public/image_deal/").concat(t.image),width:"80px",height:"60px"})}),Object(I.jsx)("td",{className:"text-center",children:Object(I.jsx)(v.a,{color:e.getBadge_Type(t.type).color,children:e.getBadge_Type(t.type).title})}),Object(I.jsxs)("td",{className:"text-center",children:[t.voucher," %"]}),Object(I.jsx)("td",{className:"text-center",children:new Date(t.time_start).toLocaleDateString()}),Object(I.jsx)("td",{className:"text-center",children:new Date(t.time_finish).toLocaleDateString()}),Object(I.jsxs)("td",{className:"text-center",children:[Object(I.jsx)(v.d,{style:z.mgl5,outline:!0,color:"info",size:"sm",onClick:function(){var a=Object(l.a)(i.a.mark((function a(r){return i.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:e.setState({arrDetailBanner:t.category,modalDetail:!u});case 1:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}(),children:Object(I.jsx)(j.a,{name:"cil-magnifying-glass"})}),Object(I.jsx)(v.d,{style:z.mgl5,outline:!0,color:"primary",size:"sm",onClick:function(){var a=Object(l.a)(i.a.mark((function a(r){return i.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.openUpdate(t);case 2:return a.abrupt("return",a.sent);case 3:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}(),children:Object(I.jsx)(j.a,{name:"cilPencil"})}),Object(I.jsx)(v.d,{outline:!0,color:"danger",size:"sm",onClick:function(a){e.openDelete(t)},children:Object(I.jsx)(j.a,{name:"cilTrash"})})]})]},a)})):""]})]})})]}),Object(I.jsx)("div",{style:{float:"right"},children:Object(I.jsx)(k.a,{count:r.length,color:"primary",onChange:function(t,a){e.setState({data:r[a-1],indexPage:a-1})}})})]})}),Object(I.jsxs)(_.a,{size:"xl",isOpen:this.state.modalCom,className:this.props.className,children:[Object(I.jsx)(y.a,{children:"new"==this.state.action?"T\u1ea1o m\u1edbi":"C\u1eadp nh\u1eadt"}),Object(I.jsx)(C.a,{style:{height:"500px",overflowY:"scroll"},children:Object(I.jsxs)(v.Q,{children:[Object(I.jsx)(v.p,{md:"12",lg:"12",sm:"12",xm:"12",lx:"12",children:Object(I.jsxs)(v.Q,{children:[Object(I.jsxs)(v.p,{md:"6",lg:"6",sm:"12",xm:"12",lx:"6",children:[Object(I.jsx)(E.a,{field:"name",label:"T\xean banner",value:this.state.name,placeholder:"T\xean deal",onChange:function(t){return e.onChange("name",t.target.value)}}),Object(I.jsx)(E.a,{field:"image",label:"\u1ea2nh banner",type:"file",onChange:function(t){e.onChangeImage(t)},onClick:function(t){t.target.value=null,e.setState({image_show:""})}}),""==c||null==c?"":Object(I.jsx)("img",{width:"150",height:"100",src:""==h?"".concat(P.a.BASE_URL,"/public/image_deal/").concat(c):h,style:{marginBottom:20}})]}),Object(I.jsxs)(v.p,{md:"6",lg:"6",sm:"12",xm:"12",lx:"6",children:[Object(I.jsxs)("div",{style:{width:"100%"},children:[Object(I.jsx)(v.N,{children:"Lo\u1ea1i deal:"}),Object(I.jsx)(v.R,{onChange:function(){var t=Object(l.a)(i.a.mark((function t(a){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.changeDealType(a);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),custom:!0,size:"sm",name:"selectSm",id:"SelectLm",children:["0","1","2"].map((function(t,a){return t==e.state.type?Object(I.jsx)("option",{selected:!0,value:t,children:"0"==t?"\u01afu \u0111\xe3i m\u1edbi nh\u1ea5t":"1"==t?"\u0110ang di\u1ec5n ra":"\u0110\xe3 k\u1ebft th\xfac"},a):Object(I.jsx)("option",{value:t,children:"0"==t?"\u01afu \u0111\xe3i m\u1edbi nh\u1ea5t":"1"==t?"\u0110ang di\u1ec5n ra":"\u0110\xe3 k\u1ebft th\xfac"},a)}))})]}),Object(I.jsx)("br",{}),Object(I.jsx)(E.a,{field:"voucher",label:"Voucher",value:this.state.voucher,placeholder:"Voucher",onChange:function(t){return e.onChange("voucher",t.target.value)}}),Object(I.jsxs)(v.Q,{children:[Object(I.jsx)(v.p,{md:"6",lg:"6",sm:"12",xm:"12",lx:"6",children:Object(I.jsxs)("div",{style:z.datePicker,children:[Object(I.jsx)("label",{style:z.flexLabel,children:"Ng\xe0y b\u1eaft \u0111\u1ea7u:"}),Object(I.jsx)(w.a,{style:z.flexOption,selected:new Date(o),onChange:function(t){return e.setState({time_start:t})}})]})}),Object(I.jsx)(v.p,{md:"6",lg:"6",sm:"12",xm:"12",lx:"6",children:Object(I.jsxs)("div",{style:z.datePicker,children:[Object(I.jsx)("label",{style:z.flexLabel,children:"Ng\xe0y k\u1ebft th\xfac:"}),Object(I.jsx)(w.a,{style:z.flexOption,selected:new Date(d),onChange:function(t){return e.setState({time_finish:t})}})]})})]})]})]})}),Object(I.jsxs)(v.p,{md:"12",lg:"12",sm:"12",xm:"12",lx:"12",children:["new"==s?this.renderAddForm():Object(I.jsxs)("div",{children:[Object(I.jsxs)(v.Q,{children:[Object(I.jsx)(v.p,{md:"5",lg:"5",sm:"12",xm:"12",lx:"5",children:Object(I.jsx)("h3",{children:Object(I.jsx)("strong",{children:"Thi\u1ebft l\u1eadp d\u1eef li\u1ec7u cho banner"})})}),Object(I.jsx)(v.p,{md:"7",lg:"7",sm:"12",xm:"12",lx:"7"})]}),Object(I.jsx)("div",{style:{marginTop:15},children:T.map((function(t,a){var r=a;return Object(I.jsxs)(m.a,{style:{margin:20},children:[Object(I.jsx)(g.a,{style:{backgroundColor:"#339966"}}),Object(I.jsxs)(x.a,{children:[Object(I.jsxs)(v.Q,{style:{margin:20},children:[Object(I.jsx)(v.p,{md:"3",lg:"3",sm:"12",xm:"12",lx:"3",children:Object(I.jsx)(v.N,{style:{fontWeight:900},children:"T\xean th\u01b0\u01a1ng hi\u1ec7u: "})}),Object(I.jsx)(v.p,{md:"9",lg:"9",sm:"12",xm:"12",lx:"9",children:t.brand_id.name})]}),t.product.length>0?Object(I.jsxs)(m.a,{children:[Object(I.jsx)(g.a,{style:{backgroundColor:"#a9c2af"},children:"Danh s\xe1ch s\u1ea3n ph\u1ea9m"}),Object(I.jsx)(x.a,{style:{height:350,overflowY:"scroll",backgroundColor:"#dfebe2"},children:Object(I.jsx)(v.Q,{children:t.product.map((function(t,a){return Object(I.jsx)(v.p,{md:"6",lg:"6",sm:"12",xm:"12",lx:"6",children:Object(I.jsxs)(v.B,{variant:"custom-checkbox",inline:!0,children:[Object(I.jsx)(v.I,{custom:!0,id:"".concat(t._id),defaultChecked:!0}),Object(I.jsxs)(v.N,{variant:"custom-checkbox",htmlFor:t._id,style:{margin:10},children:[Object(I.jsxs)("div",{children:[Object(I.jsx)("strong",{children:"T\xean sp: "}),t.product_id.name]}),Object(I.jsxs)(v.Q,{children:[Object(I.jsx)(v.p,{md:"5",lg:"5",sm:"12",xm:"12",lx:"5",children:Object(I.jsx)("strong",{children:"SL deal:"})}),Object(I.jsx)(v.p,{md:"7",lg:"7",sm:"12",xm:"12",lx:"7",children:Object(I.jsx)(v.H,{placeholder:"S\u1ed1 l\u01b0\u1ee3ng deal",value:t.total_deal,type:"number",style:{marginBottom:3,maxWidth:150},onChange:function(t){T[r].product[a].total_deal=Number(t.target.value),e.setState({arrUpdate:T})}})})]}),Object(I.jsx)("img",{src:"".concat(P.a.BASE_URL,"/public/image_product/").concat(t.product_id.image),width:"70px",height:"90px",style:{border:"1px solid black",borderRadius:5}})]})]})})}))})})]}):""]})]})}))})]}),Object(I.jsx)("br",{})]})]})}),Object(I.jsxs)(A.a,{children:[Object(I.jsx)(v.d,{color:"primary",onClick:function(t){"new"===e.state.action?e.addDeal():e.updateDeal()},disabled:this.state.isLoading,children:"L\u01b0u"})," ",Object(I.jsx)(v.d,{color:"secondary",onClick:function(t){e.onCancelModal()},children:"\u0110\xf3ng"})]})]}),Object(I.jsxs)(_.a,{isOpen:this.state.modalDelete,toggle:function(t){return e.setState({modalDelete:!e.state.modalDelete,delete:null})},className:this.props.className,children:[Object(I.jsx)(y.a,{toggle:function(t){return e.setState({modalDelete:!e.state.modalDelete,delete:null})},children:"Delete"}),Object(I.jsx)(C.a,{children:Object(I.jsx)("label",{htmlFor:"tag",children:"X\xe1c nh\u1eadn x\xf3a !!!"})}),Object(I.jsxs)(A.a,{children:[Object(I.jsx)(v.d,{color:"primary",onClick:function(t){return e.delete()},disabled:this.state.isLoading,children:"Xo\xe1"})," ",Object(I.jsx)(v.d,{color:"secondary",onClick:function(t){return e.setState({modalDelete:!e.state.modalDelete,delete:null})},children:"\u0110\xf3ng"})]})]}),Object(I.jsxs)(_.a,{isOpen:this.state.modalDetail,size:"xl",className:this.props.className,children:[Object(I.jsx)(y.a,{children:"Chi ti\u1ebft banner"}),Object(I.jsx)(C.a,{style:{height:500,overflowY:"scroll"},children:p.map((function(t,a){return Object(I.jsxs)(v.e,{className:"mb-0",style:{margin:5},children:[Object(I.jsx)(v.i,{id:"headingOne",children:Object(I.jsxs)(v.Q,{children:[Object(I.jsx)(v.p,{sm:"12",lg:"4",children:Object(I.jsx)(v.d,{block:!0,color:"link",className:"text-left m-0 p-0",onClick:function(){e.setState({accordion:D==a?null:a})},children:Object(I.jsxs)("h5",{className:"m-0 p-0",children:["Th\u01b0\u01a1ng hi\u1ec7u ",t.brand_id.name]})})}),Object(I.jsx)(v.p,{sm:"12",lg:"8",children:Object(I.jsx)("img",{src:"".concat(P.a.BASE_URL,"/public/image_brand/").concat(t.brand_id.image),width:"300px",height:"150px"})})]})}),Object(I.jsx)(v.q,{show:D==a,children:Object(I.jsx)(v.f,{children:Object(I.jsx)(v.t,{items:t.product,fields:["T\xean s\u1ea3n ph\u1ea9m","H\xecnh \u1ea3nh","S\u1ed1 l\u01b0\u1ee3ng deal","Gi\xe1"],itemsPerPage:3,pagination:!0,size:"sm",scopedSlots:{"T\xean s\u1ea3n ph\u1ea9m":function(e){return Object(I.jsx)("td",{children:e.product_id.name})},"H\xecnh \u1ea3nh":function(e){return Object(I.jsx)("td",{children:Object(I.jsx)("img",{src:""==e.product_id.image||null==e.product_id.image?"https://www.chanchao.com.tw/VietnamPrintPack/images/default.jpg":"".concat(P.a.BASE_URL,"/public/image_product/").concat(e.product_id.image),width:"60px",height:"40px"})})},"S\u1ed1 l\u01b0\u1ee3ng deal":function(e){return Object(I.jsx)("td",{children:e.total_deal})},"Gi\xe1":function(e){return Object(I.jsx)("td",{children:e.product_id.price})}}})})})]})}))}),Object(I.jsx)(A.a,{children:Object(I.jsx)(v.d,{color:"secondary",onClick:function(t){return e.setState({modalDetail:!e.state.modalDetail})},children:"\u0110\xf3ng"})})]})]})}}]),a}(p.Component),M=Object(L.css)(r||(r=Object(n.a)(["\n  display: block;\n  margin: 0 auto;\n  border-color: red;\n"]))),z={datePicker:{marginBottom:20,width:"100%"},pagination:{marginRight:"5px"},flexLabel:{width:100},flexOption:{width:"100%"},a:{textDecoration:"none"},floatRight:{float:"right",marginTop:"3px"},spinner:{width:"30px"},center:{textAlign:"center"},tbody:{height:"380px",overflowY:"auto"},wh25:{width:"25%",float:"left",height:"80px"},w5:{width:"15%",float:"left",height:"80px"},wa10:{width:"5%",float:"left",height:"80px"},row:{float:"left",width:"100%"},success:{color:"green"},danger:{color:"red"},mgl5:{margin:"2px"},tags:{float:"right",marginRight:"5px"},searchInput:{width:"190px",display:"inline-block"},userActive:{color:"green"},userPending:{color:"red"},nagemonNameCol:{width:"328px"},image:{width:"100px",height:"100px",borderRadius:"99999px"}};t.default=Q},640:function(e,t,a){"use strict";t.a={BASE_URL:"https://api.thulamua.com",GHTK_URL:"https://services.ghtklab.com",LOGIN:"/api/login",LIST_USER:"/api/list_user",ADD_USER:"/api/add_user",UPDATE_USER:"/api/update_user",DELETE_USER:"/api/delete_user",UPLOAD_AVATAR:"/api/upload_avatar",LIST_CATEGORY:"/api/list_category",ADD_CATEGORY:"/api/add_category",UPDATE_CATEGORY:"/api/update_category",DELETE_CATEGORY:"/api/delete_category",UPLOAD_CATEGORY:"/api/upload_category",LIST_BRAND:"/api/list_brand",ADD_BRAND:"/api/add_brand",UPDATE_BRAND:"/api/update_brand",DELETE_BRAND:"/api/delete_brand",UPLOAD_BRAND:"/api/upload_brand",LIST_PRODUCT:"/api/list_product",LIST_PRODUCT_CATEGORY:"/api/list_product_category",ADD_PRODUCT:"/api/add_product",UPDATE_PRODUCT:"/api/update_product",DELETE_PRODUCT:"/api/delete_product",UPLOAD_PRODUCT:"/api/upload_product",UPLOAD_PRODUCT_MULTIPLE:"/api/upload_product_multiple",LIST_ORDER:"/api/list_order",GET_DETAIL_TRANSPORT:"/api/get_detail_transport",LIST_ORDER_DETAIL:"/api/list_order_detail",LIST_ORDER_BY_USER:"/api/list_order_by_user",ADD_ORDER:"/api/add_order",PRINT_ORDER:"/api/print_order",LIST_DEAL:"/api/list_deal",ADD_DEAL:"/api/add_deal",UPDATE_DEAL:"/api/update_deal",DELETE_DEAL:"/api/delete_deal",UPLOAD_DEAL:"/api/upload_deal",LIST_COUNT_ORDER:"/api/list_count_order",LIST_BANNER:"/api/get_banner",GET_BANNER_BY_ID:"/api/get_banner_by_id",ADD_BANNER:"/api/add_banners",UPADTE_BANNER:"/api/update_banner",DELETE_BANNER:"/api/delete_banner",UPLOAD_BANNER:"/api/upload_banner",LIST_SEO_INFO:"/api/get_seo_info",GET_SEO_INFO_BY_PRODUCT:"/api/get_seo_info_by_product",ADD_SEO_INFO:"/api/add_seo_info",UPDATE_SEO_INFO:"/api/update_seo_info",DELETE_SEO_INFOR:"/api/delete_seo_info",UPLOAD_SEO_INFO:"/api/upload_seo_info",LIST_MULTI_IMAGE:"/api/get_multi_image",LIST_IMAGE_BY_PRODUCT:"/api/get_multi_image_by_product",ADD_MULTI_IMAGE:"/api/add_multi_image",UPDATE_MULTI_IMAGE:"/api/update_multi_image",UPLOAD_MULTI_IMAGE:"/api/upload_multi_image"}},647:function(e,t,a){"use strict";var r=a(113),n=a.n(r),c=a(645),s=a(640),i=a(652).default;i.defaults.baseURL=s.a.BASE_URL;var l=function(){var e=Object(c.a)(n.a.mark((function e(){var t,a,r,c,s,l,o,d,h,u=arguments;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=u.length>0&&void 0!==u[0]?u[0]:"",a=u.length>1&&void 0!==u[1]?u[1]:{},r=u.length>2&&void 0!==u[2]?u[2]:"",c=u.length>3?u[3]:void 0,s={},r&&(s={headers:r}),e.prev=6,e.t0=c,e.next="GET"===e.t0?10:"POST"===e.t0?16:"PUT"===e.t0?22:"DELETE"===e.t0?28:34;break;case 10:return e.next=12,i.get(t,a,s);case 12:if(0!=(l=e.sent).is_success){e.next=15;break}return e.abrupt("return",null);case 15:return e.abrupt("return",l.data);case 16:return e.next=18,i.post(t,a,s);case 18:if(0!=(o=e.sent).is_success){e.next=21;break}return e.abrupt("return",null);case 21:return e.abrupt("return",o.data);case 22:return e.next=24,i.put(t,a,s);case 24:if(0!=(d=e.sent).is_success){e.next=27;break}return e.abrupt("return",null);case 27:return e.abrupt("return",d.data);case 28:return e.next=30,i.delete(t,a,s);case 30:if(0!=(h=e.sent).is_success){e.next=33;break}return e.abrupt("return",null);case 33:return e.abrupt("return",h.data);case 34:e.next=39;break;case 36:return e.prev=36,e.t1=e.catch(6),e.abrupt("return",e.t1);case 39:case"end":return e.stop()}}),e,null,[[6,36]])})));return function(){return e.apply(this,arguments)}}();t.a=l},651:function(e,t,a){"use strict";a(2);var r=a(642),n=a.n(r),c=a(17),s=function(e){var t=e.field,a=e.value,r=e.label,s=e.error,i=e.type,l=e.onChange,o=e.checkUserExists,d=e.readOnly,h=e.placeholder,u=e.onClick;return Object(c.jsxs)("div",{className:n()("form-group",{"has-error":s}),children:[Object(c.jsx)("label",{className:"control-label",children:r}),Object(c.jsx)("input",{onChange:l,onClick:u,onBlur:o,value:a,type:i,name:t,placeholder:h,readOnly:d,className:"form-control"}),s&&Object(c.jsx)("span",{className:"help-block",children:s})]})};s.defaultProps={type:"text"},t.a=s}}]);
//# sourceMappingURL=19.eac3af6c.chunk.js.map