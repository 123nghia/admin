(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[26],{1029:function(e,t,a){"use strict";a.r(t);var n,r=a(653),i=a(164),c=a(113),s=a.n(c),l=a(642),o=a(165),d=a(166),u=a(168),h=a(167),p=a(2),_=a(643),b=a(1015),O=a(1016),j=a(1024),g=a(1025),m=a(664),x=a(1026),T=a(1048),f=a(1010),D=a(1011),S=a(1012),E=a(644),C=a(667),y=a(646),A=a(1045),P=(a(654),a(1014)),L=a(639),v=a(647),I=a(927),U=a(930),k=a.n(U),w=a(652),R=a(655),N=a.n(R),M=a(17),B=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).getData=Object(l.a)(s.a.mark((function e(){var t,a,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.setState({isLoading:!0}),e.next=3,Object(y.a)(L.a.LIST_PRODUCT,{},"","POST");case 3:for(t=e.sent,a=t.data,r=0;r<a.length;r++)a[r].id=r+1;n.pagination(a),n.setState({dataApi:a,isLoading:!1});case 8:case"end":return e.stop()}}),e)}))),n.onUpdateImage_Multiple=function(){var e=Object(l.a)(s.a.mark((function e(t,a){var r,i,c,l;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.target.files,i=r[0],(c=new FormData).append("image",i),e.next=6,Object(y.a)(L.a.UPLOAD_MULTI_IMAGE,c,"","POST");case 6:return e.next=8,Object(y.a)(L.a.UPDATE_MULTI_IMAGE,{id:a,image:i.name},"","POST");case 8:return e.next=10,Object(y.a)(L.a.LIST_IMAGE_BY_PRODUCT,{product_id:n.state.id},"","POST");case 10:l=e.sent,n.setState({dataMultiImage:l.data});case 12:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),n.openDelete=function(e){n.setState({modalDelete:!n.state.modalDelete,id:e._id})},n.handleChangeBrand=function(e,t){n.setState({objectValueBrand:e,brand_id:e.value}),console.log(e.value)},n.handleChangeCategory=function(e,t){n.setState({objectValueCategory:e,category_id:e.value}),console.log(e.value)},n.state={data:[],dataPage:[],key:"",modalCom:!1,dataApi:[],hidden:!1,action:"new",category_id:"",brand_id:"",weight:"",description_brand:"",name:"",href:"",info_product:"",how_to_use:"",image_show:"",image:"",image_multiple:"",description:"",price:"",title:"",author:"",keyword:"",description_SEO:"",modalDelete:!1,delete:null,arrPagination:[],arrOptionBrand:[],objectValueBrand:{},arrOptionCategory:[],objectValueCategory:{},indexPage:0,token:{authororization:"Bearer ".concat(localStorage.getItem("token"))},isLoading:!1,isLoadingUpdate:!1,modalMultiple:!1,dataMultiImage:[],currentIDUpdate:"",arrCapacity:[{capacity:"",price:""}]},n}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(l.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.getData();case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"pagination",value:function(e){var t,a,n,r=[];for(t=0,a=e.length;t<a;t+=5)n=e.slice(t,t+5),r.push(n);0==r.length?this.setState({hidden:!1}):this.setState({hidden:!0}),this.setState({arrPagination:r,data:r[0]})}},{key:"searchKey",value:function(){var e=this.state,t=e.indexPage,a=e.key;if(""!=a){var n=[];this.state.dataApi.map((function(e){e.name.toLocaleUpperCase().includes(a.toLocaleUpperCase())&&n.push(e)})),this.setState({data:n})}else this.setState({data:this.state.arrPagination[t]})}},{key:"actionSearch",value:function(e,t){var a=this;this.setState(Object(i.a)({},t,e.target.value),(function(){a.searchKey()}))}},{key:"resetSearch",value:function(){var e=this;this.setState({key:""},(function(){e.searchKey()}))}},{key:"onChangeImage",value:function(e){var t=this,a=e.target.files,n=new FileReader;this.setState({image:a[0]}),n.readAsDataURL(a[0]),n.onload=function(e){t.setState({image_show:e.target.result})}}},{key:"onChangeImage_Multiple",value:function(){var e=Object(l.a)(s.a.mark((function e(t){var a,n,r,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.target.files,n=a[0],(r=new FormData).append("image",n),e.next=6,Object(y.a)(L.a.UPLOAD_MULTI_IMAGE,r,"","POST");case 6:return e.next=8,Object(y.a)(L.a.ADD_MULTI_IMAGE,{product_id:this.state.id,image:n.name},"","POST");case 8:return e.next=10,Object(y.a)(L.a.LIST_IMAGE_BY_PRODUCT,{product_id:this.state.id},"","POST");case 10:i=e.sent,console.log(i),this.setState({dataMultiImage:i.data});case 13:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"toggleModal",value:function(){var e=Object(l.a)(s.a.mark((function e(t){var a,n,r,i,c,o=this;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=this.state,n=a.modalCom,r=a.token,i=a.arrOptionBrand,c=a.arrOptionCategory,"new"==t&&this.setState({modalCom:!n,action:t,category_id:"",brand_id:"",name:"",href:"",weight:"",info_product:"",how_to_use:"",description:"",description_brand:"",image_show:"",image:"",objectValueBrand:{},objectValueCategory:{},price:"",title:"",author:"",keyword:"",description_SEO:""},Object(l.a)(s.a.mark((function e(){var t,a,n,l,d,u,h,p;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!=i.length&&0!=c.length){e.next=14;break}return e.next=3,Object(y.a)(L.a.LIST_BRAND,{},r,"POST");case 3:return t=e.sent,e.next=6,Object(y.a)(L.a.LIST_CATEGORY,{},r,"POST");case 6:for(a=e.sent,n=[],l=[],d=t.data,u=a.data,h=0;h<d.length;h++)n.push({value:d[h]._id,label:d[h].name});for(p=0;p<u.length;p++)l.push({value:u[p]._id,label:u[p].name});o.setState({arrOptionBrand:n,arrOptionCategory:l});case 14:case"end":return e.stop()}}),e)}))));case 2:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"onChange",value:function(e,t){this.setState(Object(i.a)({},e,t))}},{key:"addProduct",value:function(){var e=Object(l.a)(s.a.mark((function e(){var t,a,n,r,i,c,l,o,d,u,h,p,_,b,O,j,g,m,x;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.state,a=t.category_id,n=t.brand_id,r=t.name,i=t.href,c=t.image,l=t.price,o=t.description,d=t.info_product,u=t.how_to_use,h=t.description_brand,p=t.weight,_=t.title,b=t.author,O=t.keyword,j=t.description_SEO,null!=r&&""!=r&&null!=c&&""!=c&&null!=a&&""!=a&&null!=n&&""!=n){e.next=4;break}return alert("H\xe3y nh\u1eadp \u0111\u1ea7y \u0111\u1ee7 d\u1eef li\u1ec7u !!!"),e.abrupt("return");case 4:return(g=new FormData).append("image",c),e.next=8,Object(y.a)(L.a.UPLOAD_PRODUCT,g,"","POST");case 8:return m={category_id:a,brand_id:n,info_product:d,description_brand:h,how_to_use:u,name:r,weight:p,href:i,image:c.name,description:o,price:l},this.setState({isLoading:!0,dataPage:[]}),e.next=12,Object(y.a)(L.a.ADD_PRODUCT,m,"","POST");case 12:if(200!=(x=e.sent).status){e.next=20;break}return e.next=16,Object(y.a)(L.a.ADD_SEO_INFO,{product_id:x.data._id,title:_,author:b,keyword:O,description:j},"","POST");case 16:200==e.sent.status&&(this.getData(),this.setState({modalCom:!this.state.modalCom})),e.next=22;break;case 20:alert("Th\xeam s\u1ea3n ph\u1ea9m th\u1ea5t b\u1ea1i"),this.setState({isLoading:!1});case 22:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"openUpdate",value:function(){var e=Object(l.a)(s.a.mark((function e(t){var a,n,r,i,c,o=this;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=this.state,n=a.token,r=a.arrOptionBrand,i=a.arrOptionCategory,e.next=3,Object(y.a)(L.a.GET_SEO_INFO_BY_PRODUCT,{product_id:t._id},"","POST");case 3:c=e.sent,this.setState({modalCom:!this.state.modalCom,action:"update",category_id:t.category_id,brand_id:t.brand_id,name:t.name,href:t.href,weight:t.weight,info_product:t.info_product,how_to_use:t.how_to_use,description:t.description,description_brand:t.description_brand,image_show:"",image:t.image,price:t.price,objectValueBrand:{value:t.brand_id._id,label:t.brand_id.name},objectValueCategory:{value:t.category_id._id,label:t.category_id.name},id:t._id,title:c.data.title,author:c.data.author,keyword:c.data.keyword,description_SEO:c.data.description},Object(l.a)(s.a.mark((function e(){var t,a,c,l,d,u,h,p;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!=r.length&&0!=i.length){e.next=14;break}return e.next=3,Object(y.a)(L.a.LIST_BRAND,{},n,"POST");case 3:return t=e.sent,e.next=6,Object(y.a)(L.a.LIST_CATEGORY,{},n,"POST");case 6:for(a=e.sent,c=[],l=[],d=t.data,u=a.data,h=0;h<d.length;h++)c.push({value:d[h]._id,label:d[h].name});for(p=0;p<u.length;p++)l.push({value:u[p]._id,label:u[p].name});o.setState({arrOptionBrand:c,arrOptionCategory:l});case 14:case"end":return e.stop()}}),e)}))));case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"updateProduct",value:function(){var e=Object(l.a)(s.a.mark((function e(){var t,a,n,r,i,c,l,o,d,u,h,p,_,b,O,j,g,m;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.state,a=t.category_id,n=t.brand_id,r=t.name,i=t.href,c=t.weight,l=t.image,o=t.price,d=t.description,u=t.info_product,h=t.how_to_use,p=t.description_brand,_=t.title,b=t.author,O=t.keyword,j=t.description_SEO,null!=r&&""!=r&&null!=l&&""!=l&&null!=a&&""!=a&&null!=n&&""!=n){e.next=4;break}return alert("H\xe3y nh\u1eadp \u0111\u1ea7y \u0111\u1ee7 d\u1eef li\u1ec7u !!!"),e.abrupt("return");case 4:return(g=new FormData).append("image",l),e.next=8,Object(y.a)(L.a.UPLOAD_PRODUCT,g,"","POST");case 8:return m={category_id:a,brand_id:n,name:r,href:i,weight:c,info_product:u,how_to_use:h,image:l.name,description:d,price:o,description_brand:p,id:this.state.id},this.setState({isLoading:!0}),e.next=12,Object(y.a)(L.a.UPDATE_PRODUCT,m,"","POST");case 12:if(200!=e.sent.status){e.next=21;break}return e.next=16,Object(y.a)(L.a.UPDATE_SEO_INFO,{product_id:this.state.id,title:_,keyword:O,author:b,description:j},"","POST");case 16:e.sent,this.getData(),this.setState({modalCom:!this.state.modalCom}),e.next=23;break;case 21:alert("C\u1eadp nh\u1eadt th\u1ea5t b\u1ea1i"),this.setState({isLoading:!1});case 23:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"delete",value:function(){var e=Object(l.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({isLoading:!0}),e.next=3,Object(y.a)(L.a.DELETE_PRODUCT,{id:this.state.id},"","POST");case 3:200==e.sent.status?(this.getData(),this.setState({modalDelete:!this.state.modalDelete,delete:null})):(alert("Xo\xe1 th\u1ea5t b\u1ea1i"),this.setState({isLoading:!1}));case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"openMultipleImage",value:function(){var e=Object(l.a)(s.a.mark((function e(t){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(y.a)(L.a.LIST_IMAGE_BY_PRODUCT,{product_id:t._id},"","POST");case 2:a=e.sent,this.setState({modalMultiple:!this.state.modalMultiple,id:t._id,dataMultiImage:a.data});case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"inputChange",value:function(e){this.setState(Object(i.a)({},e.target.name,e.target.value))}},{key:"getBadge",value:function(e){switch(e){case"Actived":return"success";case"Inactive":return"secondary";case"Locked":return"warning";case"Deactived":return"danger";default:return"primary"}}},{key:"render",value:function(){var e=this,t=this.state,a=t.data,n=t.arrPagination,r=t.key,i=t.image,c=t.image_show,o=t.objectValueBrand,d=t.arrOptionBrand,u=t.objectValueCategory,h=t.arrOptionCategory,p=t.dataMultiImage;return this.state.isLoading?Object(M.jsx)("div",{className:"sweet-loading",children:Object(M.jsx)(N.a,{css:G,size:50,color:"#123abc",loading:this.state.isLoading,speedMultiplier:1.5})}):Object(M.jsxs)("div",{className:"animated fadeIn",children:[Object(M.jsx)(b.a,{children:Object(M.jsxs)(O.a,{children:[Object(M.jsxs)(j.a,{children:[Object(M.jsxs)(g.a,{children:[Object(M.jsx)("i",{className:"fa fa-align-justify"})," Danh s\xe1ch danh m\u1ee5c",Object(M.jsx)("div",{style:Y.tags,children:Object(M.jsxs)(E.T,{children:[Object(M.jsx)(E.p,{sm:"12",lg:"12",children:Object(M.jsxs)(E.T,{children:[Object(M.jsx)(E.p,{sm:"12",lg:"6",children:Object(M.jsx)("div",{children:Object(M.jsx)(m.a,{style:Y.searchInput,onChange:function(t){e.actionSearch(t,"key")},name:"key",value:r,placeholder:"T\u1eeb kh\xf3a"})})}),Object(M.jsx)(E.p,{sm:"12",lg:"6",children:Object(M.jsx)(E.d,{color:"primary",style:{width:"100%",marginTop:5},size:"sm",onClick:function(t){e.resetSearch()},children:"L\xe0m m\u1edbi t\xecm ki\u1ebfm"})})]})}),Object(M.jsx)(E.p,{sm:"12",lg:"12",children:Object(M.jsx)(E.d,{outline:!0,color:"primary",style:Y.floatRight,size:"sm",onClick:function(t){return e.toggleModal("new")},children:"Th\xeam m\u1edbi"})})]})})]}),Object(M.jsx)(x.a,{children:Object(M.jsxs)("table",{ble:!0,className:"table table-hover table-outline mb-0 d-none d-sm-table",children:[Object(M.jsx)("thead",{className:"thead-light",children:Object(M.jsxs)("tr",{children:[Object(M.jsx)("th",{className:"text-center",children:"STT."}),Object(M.jsx)("th",{className:"text-center",children:"T\xean s\u1ea3n ph\u1ea9m"}),Object(M.jsx)("th",{className:"text-center",children:"H\xecnh \u1ea3nh"}),Object(M.jsx)("th",{className:"text-center",children:"\u0110\u01b0\u1eddng d\u1eabn"}),Object(M.jsx)("th",{className:"text-center",children:"Th\u01b0\u01a1ng hi\u1ec7u"}),Object(M.jsx)("th",{className:"text-center",children:"Danh m\u1ee5c"}),Object(M.jsx)("th",{className:"text-center",children:"Gi\xe1"}),Object(M.jsx)("th",{className:"text-center",children:"#"})]})}),Object(M.jsxs)("tbody",{children:[Object(M.jsx)("td",{colSpan:"10",hidden:this.state.hidden,className:"text-center",children:"Kh\xf4ng t\xecm th\u1ea5y d\u1eef li\u1ec7u"}),void 0!=a?a.map((function(t,a){return Object(M.jsxs)("tr",{children:[Object(M.jsx)("td",{className:"text-center",children:t.id}),Object(M.jsx)("td",{className:"text-center",children:t.name}),Object(M.jsx)("td",{className:"text-center",children:""==t.image||null==t.image?Object(M.jsx)("img",{src:"https://www.chanchao.com.tw/VietnamPrintPack/images/default.jpg",width:"60px",height:"60px"}):Object(M.jsx)("img",{src:"".concat(L.a.BASE_URL,"/public/image_product/").concat(t.image),width:"80px",height:"60px"})}),Object(M.jsx)("td",{className:"text-center",children:Object(M.jsx)("a",{href:t.href,target:"_blank",children:"\u0110\u01b0\u1eddng d\u1eabn chi ti\u1ebft"})}),Object(M.jsx)("td",{className:"text-center",children:t.brand_id.name}),Object(M.jsx)("td",{className:"text-center",children:t.category_id.name}),Object(M.jsx)("td",{className:"text-center",children:t.price}),Object(M.jsxs)("td",{className:"text-center",children:[Object(M.jsx)(E.d,{style:Y.mgl5,outline:!0,color:"primary",size:"sm",onClick:function(){var a=Object(l.a)(s.a.mark((function a(n){return s.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.openUpdate(t);case 2:return a.abrupt("return",a.sent);case 3:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}(),children:Object(M.jsx)(_.a,{name:"cilPencil"})})," ",Object(M.jsx)(E.d,{outline:!0,color:"danger",size:"sm",onClick:function(a){e.openDelete(t)},children:Object(M.jsx)(_.a,{name:"cilTrash"})})," ",Object(M.jsx)(E.d,{outline:!0,color:"success",size:"sm",onClick:function(a){e.openMultipleImage(t)},children:Object(M.jsx)(_.a,{content:P.a.cilList})})]})]},a)})):""]})]})})]}),Object(M.jsx)("div",{style:{float:"right"},children:Object(M.jsx)(A.a,{count:n.length,color:"primary",onChange:function(t,a){e.setState({data:n[a-1],dataPage:n[a-1],indexPage:a-1})}})})]})}),Object(M.jsxs)(T.a,{size:"xl",isOpen:this.state.modalCom,className:this.props.className,children:[Object(M.jsx)(f.a,{children:"new"==this.state.action?"T\u1ea1o m\u1edbi":"C\u1eadp nh\u1eadt"}),Object(M.jsx)(D.a,{children:Object(M.jsxs)(E.T,{children:[Object(M.jsxs)(E.p,{md:"6",lg:"6",sm:"12",xm:"12",lx:"6",children:[Object(M.jsx)(v.a,{field:"name",label:"T\xean s\u1ea3n ph\u1ea9m",value:this.state.name,placeholder:"T\xean s\u1ea3n ph\u1ea9m",onChange:function(t){return e.onChange("name",t.target.value)}}),Object(M.jsx)(v.a,{field:"href",label:"\u0110\u01b0\u1eddng d\u1eabn",value:this.state.href,placeholder:"\u0110\u01b0\u1eddng d\u1eabn",onChange:function(t){return e.onChange("href",t.target.value)}}),Object(M.jsxs)(E.T,{children:[Object(M.jsx)(E.p,{md:"3",lg:"3",sm:"12",xm:"12",lx:"3",children:Object(M.jsx)(E.O,{children:"Th\u01b0\u01a1ng hi\u1ec7u:"})}),Object(M.jsx)(E.p,{md:"9",lg:"9",sm:"12",xm:"12",lx:"9",children:Object(M.jsx)(C.a,{isClearable:!0,onChange:this.handleChangeBrand,value:o,options:d})})]}),Object(M.jsx)("br",{}),Object(M.jsxs)(E.T,{children:[Object(M.jsx)(E.p,{md:"3",lg:"3",sm:"12",xm:"12",lx:"3",children:Object(M.jsx)(E.O,{children:"Danh m\u1ee5c:"})}),Object(M.jsx)(E.p,{md:"9",lg:"9",sm:"12",xm:"12",lx:"9",children:Object(M.jsx)(C.a,{isClearable:!0,onChange:this.handleChangeCategory,value:u,options:h})})]}),Object(M.jsx)("br",{}),Object(M.jsx)(v.a,{field:"image",label:"\u1ea2nh s\u1ea3n ph\u1ea9m",type:"file",onChange:function(t){e.onChangeImage(t)},onClick:function(t){t.target.value=null,e.setState({image_show:""})}}),""==i?"":Object(M.jsx)("img",{width:"250",height:"200",src:""==c?"".concat(L.a.BASE_URL,"/public/image_product/").concat(i):c,style:{marginBottom:20}}),Object(M.jsx)("br",{}),Object(M.jsxs)(E.T,{children:[Object(M.jsx)(E.p,{md:"6",lg:"6",sm:"12",xm:"12",lx:"6",children:Object(M.jsx)(v.a,{field:"weight",label:"Dung t\xedch",value:this.state.weight,placeholder:"Dung t\xedch",type:"number",onChange:function(t){return e.onChange("weight",t.target.value)}})}),Object(M.jsx)(E.p,{md:"6",lg:"6",sm:"12",xm:"12",lx:"6",children:Object(M.jsx)(v.a,{field:"price",label:"Gi\xe1",value:this.state.price,placeholder:"Gi\xe1",type:"number",onChange:function(t){return e.onChange("price",t.target.value)}})})]}),Object(M.jsx)(E.O,{children:Object(M.jsx)("strong",{children:"Th\xf4ng tin SEO"})}),Object(M.jsx)(v.a,{field:"title",label:"Ti\xeau \u0111\u1ec1",value:this.state.title,placeholder:"Ti\xeau \u0111\u1ec1",onChange:function(t){return e.onChange("title",t.target.value)}}),Object(M.jsx)(v.a,{field:"author",label:"Author",value:this.state.author,placeholder:"Author",onChange:function(t){return e.onChange("author",t.target.value)}}),Object(M.jsx)(v.a,{field:"keyword",label:"T\u1eeb kho\xe1",value:this.state.keyword,placeholder:"T\u1eeb kho\xe1",onChange:function(t){return e.onChange("keyword",t.target.value)}}),Object(M.jsx)(E.O,{children:"M\xf4 t\u1ea3"}),Object(M.jsx)(E.db,{placeholder:"M\xf4 t\u1ea3 SEO",rows:9,value:this.state.description_SEO,onChange:function(t){e.setState({description_SEO:t.target.value})}})]}),Object(M.jsxs)(E.p,{md:"6",lg:"6",sm:"12",xm:"12",lx:"6",children:[Object(M.jsx)("label",{className:"control-label",children:"M\xf4 t\u1ea3"}),Object(M.jsx)(I.CKEditor,{editor:k.a,data:this.state.description,onChange:function(t,a){var n=a.getData();e.setState({description:n})}}),Object(M.jsx)("br",{}),Object(M.jsx)("label",{className:"control-label",children:"M\xf4 t\u1ea3 th\u01b0\u01a1ng hi\u1ec7u"}),Object(M.jsx)(I.CKEditor,{editor:k.a,data:this.state.description_brand,onChange:function(t,a){var n=a.getData();e.setState({description_brand:n})}}),Object(M.jsx)("br",{}),Object(M.jsx)("label",{className:"control-label",children:"Th\xf4ng tin s\u1ea3n ph\u1ea9m"}),Object(M.jsx)(I.CKEditor,{editor:k.a,data:this.state.info_product,onChange:function(t,a){var n=a.getData();e.setState({info_product:n})}}),Object(M.jsx)("br",{}),Object(M.jsx)("label",{className:"control-label",children:"Ch\u1ea5t li\u1ec7u v\xe0 c\xe1ch s\u1eed d\u1ee5ng"}),Object(M.jsx)(I.CKEditor,{editor:k.a,row:"5",data:this.state.how_to_use,onChange:function(t,a){var n=a.getData();e.setState({how_to_use:n})}})]})]})}),Object(M.jsxs)(S.a,{children:[Object(M.jsx)(E.d,{color:"primary",onClick:function(t){"new"===e.state.action?e.addProduct():e.updateProduct()},disabled:this.state.isLoading,children:"L\u01b0u"})," ",Object(M.jsx)(E.d,{color:"secondary",onClick:function(t){return e.toggleModal("new")},children:"\u0110\xf3ng"})]})]}),Object(M.jsxs)(T.a,{isOpen:this.state.modalDelete,toggle:function(t){return e.setState({modalDelete:!e.state.modalDelete,delete:null})},className:this.props.className,children:[Object(M.jsx)(f.a,{toggle:function(t){return e.setState({modalDelete:!e.state.modalDelete,delete:null})},children:"Delete"}),Object(M.jsx)(D.a,{children:Object(M.jsx)("label",{htmlFor:"tag",children:"X\xe1c nh\u1eadn x\xf3a !!!"})}),Object(M.jsxs)(S.a,{children:[Object(M.jsx)(E.d,{color:"primary",onClick:function(t){return e.delete()},disabled:this.state.isLoading,children:"Xo\xe1"})," ",Object(M.jsx)(E.d,{color:"secondary",onClick:function(t){return e.setState({modalDelete:!e.state.modalDelete,delete:null})},children:"\u0110\xf3ng"})]})]}),Object(M.jsxs)(T.a,{size:"xl",isOpen:this.state.modalMultiple,className:this.props.className,children:[Object(M.jsx)(f.a,{children:"H\xecnh \u1ea3nh n\u1ed5i b\u1eadt c\u1ee7a s\u1ea3n ph\u1ea9m"}),Object(M.jsxs)(D.a,{children:[Object(M.jsx)("input",{type:"file",id:"file",ref:"fileUploader",onChange:function(t){e.onChangeImage_Multiple(t)},style:{display:"none"}}),Object(M.jsx)(E.d,{outline:!0,color:"primary",className:"mb-1",size:"sm",onClick:function(t){e.refs.fileUploader.click()},children:"Th\xeam h\xecnh \u1ea3nh"}),Object(M.jsxs)("table",{ble:!0,className:"table table-hover table-outline mb-0 d-none d-sm-table",children:[Object(M.jsx)("thead",{className:"thead-light",children:Object(M.jsxs)("tr",{children:[Object(M.jsx)("th",{className:"text-center",children:"STT."}),Object(M.jsx)("th",{className:"text-center",children:"H\xecnh \u1ea3nh"}),Object(M.jsx)("th",{className:"text-center",children:"#"})]})}),Object(M.jsxs)("tbody",{children:[Object(M.jsx)("td",{colSpan:"10",hidden:this.state.dataMultiImage.length>0,className:"text-center",children:"Kh\xf4ng t\xecm th\u1ea5y d\u1eef li\u1ec7u"}),void 0!=p?p.map((function(t,a){return Object(M.jsxs)("tr",{children:[Object(M.jsx)("td",{className:"text-center",children:a+1}),Object(M.jsx)("td",{className:"text-center",children:""==t.image||null==t.image?Object(M.jsx)("img",{src:"https://www.chanchao.com.tw/VietnamPrintPack/images/default.jpg",width:"60px",height:"60px"}):Object(M.jsx)("img",{src:"".concat(L.a.BASE_URL,"/public/image_product/").concat(t.image),width:"80px",height:"60px"})}),Object(M.jsxs)("td",{className:"text-center",children:[Object(M.jsx)("input",{type:"file",id:"file",ref:"fileUpdate",onChange:function(t){e.onUpdateImage_Multiple(t,e.state.currentIDUpdate)},style:{display:"none"}}),Object(M.jsx)(E.d,{outline:!0,color:"success",size:"sm",onClick:function(a){e.refs.fileUpdate.click(),e.setState({currentIDUpdate:t._id})},children:Object(M.jsx)(_.a,{content:P.a.cilPen})})]})]},a)})):""]})]})]}),Object(M.jsx)(S.a,{children:Object(M.jsx)(E.d,{color:"secondary",onClick:function(t){return e.setState({modalMultiple:!e.state.modalMultiple})},children:"\u0110\xf3ng"})})]})]})}}]),a}(p.Component),G=Object(w.css)(n||(n=Object(r.a)(["\n  display: block;\n  margin: 0 auto;\n  border-color: red;\n"]))),Y={pagination:{marginRight:"5px"},flexLabel:{width:100},flexOption:{width:300},a:{textDecoration:"none"},floatRight:{float:"right",marginTop:"3px"},spinner:{width:"30px"},center:{textAlign:"center"},tbody:{height:"380px",overflowY:"auto"},wh25:{width:"25%",float:"left",height:"80px"},w5:{width:"15%",float:"left",height:"80px"},wa10:{width:"5%",float:"left",height:"80px"},row:{float:"left",width:"100%"},success:{color:"green"},danger:{color:"red"},mgl5:{margin:"5px"},tags:{float:"right",marginRight:"5px"},searchInput:{width:"190px",display:"inline-block"},userActive:{color:"green"},userPending:{color:"red"},nagemonNameCol:{width:"328px"},image:{width:"100px",height:"100px",borderRadius:"99999px"}};t.default=B},639:function(e,t,a){"use strict";var n,r=a(164);t.a=(n={BASE_URL:"https://api.thulamua.com",GHTK_URL:"https://services.ghtklab.com",LOGIN:"/api/login",LIST_USER:"/api/list_user",ADD_USER:"/api/add_user",UPDATE_USER:"/api/update_user",DELETE_USER:"/api/delete_user",UPLOAD_AVATAR:"/api/upload_avatar",LIST_CATEGORY:"/api/list_category",ADD_CATEGORY:"/api/add_category",UPDATE_CATEGORY:"/api/update_category",DELETE_CATEGORY:"/api/delete_category",UPLOAD_CATEGORY:"/api/upload_category",LIST_BRAND:"/api/list_brand",ADD_BRAND:"/api/add_brand",UPDATE_BRAND:"/api/update_brand",DELETE_BRAND:"/api/delete_brand",UPLOAD_BRAND:"/api/upload_brand",LIST_PRODUCT:"/api/list_product",LIST_PRODUCT_CATEGORY:"/api/list_product_category",ADD_PRODUCT:"/api/add_product",UPDATE_PRODUCT:"/api/update_product",DELETE_PRODUCT:"/api/delete_product",UPLOAD_PRODUCT:"/api/upload_product",UPLOAD_PRODUCT_MULTIPLE:"/api/upload_product_multiple",LIST_ORDER:"/api/list_order",GET_DETAIL_TRANSPORT:"/api/get_detail_transport",LIST_ORDER_DETAIL:"/api/list_order_detail",LIST_ORDER_BY_USER:"/api/list_order_by_user",ADD_ORDER:"/api/add_order",PRINT_ORDER:"/api/print_order",LIST_DEAL:"/api/list_deal",ADD_DEAL:"/api/add_deal",UPDATE_DEAL:"/api/update_deal",DELETE_DEAL:"/api/delete_deal",UPLOAD_DEAL:"/api/upload_deal",LIST_COUNT_ORDER:"/api/list_count_order",LIST_BANNER:"/api/get_banner",GET_BANNER_BY_ID:"/api/get_banner_by_id",ADD_BANNER:"/api/add_banners",UPADTE_BANNER:"/api/update_banner",DELETE_BANNER:"/api/delete_banner",UPLOAD_BANNER:"/api/upload_banner",LIST_SEO_INFO:"/api/get_seo_info",GET_SEO_INFO_BY_PRODUCT:"/api/get_seo_info_by_product",ADD_SEO_INFO:"/api/add_seo_info",UPDATE_SEO_INFO:"/api/update_seo_info",DELETE_SEO_INFOR:"/api/delete_seo_info",UPLOAD_SEO_INFO:"/api/upload_seo_info",LIST_MULTI_IMAGE:"/api/get_multi_image",LIST_IMAGE_BY_PRODUCT:"/api/get_multi_image_by_product",ADD_MULTI_IMAGE:"/api/add_multi_image",UPDATE_MULTI_IMAGE:"/api/update_multi_image",UPLOAD_MULTI_IMAGE:"/api/upload_multi_image",LIST_SUGGEST_ITEM:"/itemSdk",LIST_SUGGEST_ITEM_COMPANY:"/itemSdk/",LIST_SUGGEST_ITEM_ADMIN:"/itemSdk/admin/",SEARCH_SUGGEST_ITEM_ADMIN:"/itemSdk/admin/search/",SEARCH_SUGGEST_ITEM_COMPANY:"/itemSdk/search/",ADD_SUGGEST_ITEM:"/itemSdk",UPDATE_SUGGEST_ITEM:"/itemSdk/",UPLOAD_IMAGE:"/itemSdk/upload_image",UPLOAD_IMAGE_MAKEUP:"/itemSdk/upload_image_makeup",UPLOAD_IMAGE_BRAND:"/itemSdk/upload_image_brand",DELETE_SUGGEST_ITEM:"/itemSdk/deleteItem",LIST_SDK:"/sdk"},Object(r.a)(n,"LIST_BRAND","/brands"),Object(r.a)(n,"LIST_BRAND_COMPANY","/brands/"),Object(r.a)(n,"ADD_BRAND","/add-brand"),Object(r.a)(n,"UPDATE_BRAND","/update-brand"),Object(r.a)(n,"DELETE_BRAND","/delete-brand"),Object(r.a)(n,"LIST_BRAND_PLUGIN","/brand-plugin"),Object(r.a)(n,"LIST_BRAND_PLUGIN_COMPANY","/brand-plugin/"),Object(r.a)(n,"ADD_BRAND_PLUGIN","/add-brand-plugin"),Object(r.a)(n,"UPDATE_BRAND_PLUGIN","/update-brand-plugin"),Object(r.a)(n,"DELETE_BRAND_PLUGIN","/delete-brand-plugin"),Object(r.a)(n,"LIST_PRODUCT","/product"),Object(r.a)(n,"LIST_PRODUCT_HAIR","/product_hair"),Object(r.a)(n,"LIST_PRODUCT_COMPANY","/product/"),Object(r.a)(n,"LIST_PRODUCT_COMPANY_HAIR","/product_hair/"),Object(r.a)(n,"ADD_PRODUCT","/add-product"),Object(r.a)(n,"ADD_PRODUCT_HAIR","/add-product-hair"),Object(r.a)(n,"UPDATE_PRODUCT","/update-product"),Object(r.a)(n,"DELETE_PRODUCT","/delete-product"),Object(r.a)(n,"LIST_TYPE","/types"),Object(r.a)(n,"LIST_TYPE_COMPANY","/types/"),Object(r.a)(n,"ADD_TYPE","/add-type"),Object(r.a)(n,"UPDATE_TYPE","/update-type"),Object(r.a)(n,"DELETE_TYPE","/delete-type"),Object(r.a)(n,"LIST_COLOR","/colors"),Object(r.a)(n,"LIST_COLOR_COMPANY","/colors/"),Object(r.a)(n,"LIST_COLOR_SELECT","/color-select"),Object(r.a)(n,"ADD_COLOR","/add-color"),Object(r.a)(n,"UPDATE_COLOR","/update-color"),Object(r.a)(n,"DELETE_COLOR","/delete-color"),Object(r.a)(n,"LIST_HISTORY_SKIN","/api/get-history-skin"),Object(r.a)(n,"LIST_HISTORY_SKIN_BY_CONDITION","/api/get-history-skin-by-condition"),Object(r.a)(n,"ADD_HISTORY_SKIN","/api/add-history-skin"),Object(r.a)(n,"LIST_TYPE_PRODUCT","/api/list-type-product"),Object(r.a)(n,"ADD_TYPE_PRODUCT","/api/add-type-product"),Object(r.a)(n,"UPDATE_TYPE_PRODUCT","/api/update-type-product"),Object(r.a)(n,"DELETE_TYPE_PRODUCT","/api/delete-type-product"),Object(r.a)(n,"LIST_TYPE_SDK","/api/list-type-sdk"),Object(r.a)(n,"ADD_TYPE_SDK","/api/add-type-sdk"),Object(r.a)(n,"UPDATE_TYPE_SDK","/api/update-type-sdk"),Object(r.a)(n,"DELETE_TYPE_SDK","/api/delete-type-sdk"),n)},646:function(e,t,a){"use strict";var n=a(113),r=a.n(n),i=a(642),c=a(639),s=a(649).default;s.defaults.baseURL=c.a.BASE_URL;var l=function(){var e=Object(i.a)(r.a.mark((function e(){var t,a,n,i,c,l,o,d,u,h=arguments;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=h.length>0&&void 0!==h[0]?h[0]:"",a=h.length>1&&void 0!==h[1]?h[1]:{},n=h.length>2&&void 0!==h[2]?h[2]:"",i=h.length>3?h[3]:void 0,c={},n&&(c={headers:n}),e.prev=6,e.t0=i,e.next="GET"===e.t0?10:"POST"===e.t0?16:"PUT"===e.t0?22:"DELETE"===e.t0?28:34;break;case 10:return e.next=12,s.get(t,a,c);case 12:if(0!=(l=e.sent).is_success){e.next=15;break}return e.abrupt("return",null);case 15:return e.abrupt("return",l.data);case 16:return e.next=18,s.post(t,a,c);case 18:if(0!=(o=e.sent).is_success){e.next=21;break}return e.abrupt("return",null);case 21:return e.abrupt("return",o.data);case 22:return e.next=24,s.put(t,a,c);case 24:if(0!=(d=e.sent).is_success){e.next=27;break}return e.abrupt("return",null);case 27:return e.abrupt("return",d.data);case 28:return e.next=30,s.delete(t,a,c);case 30:if(0!=(u=e.sent).is_success){e.next=33;break}return e.abrupt("return",null);case 33:return e.abrupt("return",u.data);case 34:e.next=39;break;case 36:return e.prev=36,e.t1=e.catch(6),e.abrupt("return",e.t1);case 39:case"end":return e.stop()}}),e,null,[[6,36]])})));return function(){return e.apply(this,arguments)}}();t.a=l},647:function(e,t,a){"use strict";a(2);var n=a(641),r=a.n(n),i=a(17),c=function(e){var t=e.field,a=e.value,n=e.label,c=e.error,s=e.type,l=e.onChange,o=e.checkUserExists,d=e.readOnly,u=e.placeholder,h=e.onClick;return Object(i.jsxs)("div",{className:r()("form-group",{"has-error":c}),children:[Object(i.jsx)("label",{className:"control-label",children:n}),Object(i.jsx)("input",{onChange:l,onClick:h,onBlur:o,value:a,type:s,name:t,placeholder:u,readOnly:d,className:"form-control"}),c&&Object(i.jsx)("span",{className:"help-block",children:c})]})};c.defaultProps={type:"text"},t.a=c}}]);
//# sourceMappingURL=26.4f77bbcc.chunk.js.map