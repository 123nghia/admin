(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[71],{1325:function(e,t,a){"use strict";a.r(t),function(e){var n,c=a(654),i=a(169),s=a(113),l=a.n(s),r=a(641),o=a(165),d=a(166),h=a(168),u=a(167),j=a(24),b=a(2),g=a(1258),p=a(1259),f=a(1260),x=a(1261),m=a(660),O=a(1263),w=a(1336),v=a(1266),y=a(1267),S=a(1221),_=a(1268),C=(a(646),a(652)),k=a(669),D=a(681),T=a(1332),N=(a(643),a(892)),L=a.n(N),P=a(897),E=a(645),I=a(640),A=a(655),R=a.n(A),U=a(653),G=a(17),H=new Headers,z=localStorage.getItem("auth");H.append("Authorization","Bearer "+z);var B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"#ccc";return{alignItems:"center",display:"flex",":before":{backgroundColor:e,borderRadius:10,content:'" "',display:"block",marginRight:8,height:10,width:10}}},F={control:function(e){return Object(j.a)(Object(j.a)({},e),{},{backgroundColor:"white"})},option:function(e,t){var a=t.data,n=t.isDisabled,c=t.isFocused,i=t.isSelected,s=L()(a.hex);return Object(j.a)(Object(j.a)({},e),{},{backgroundColor:n?null:i?a.hex:c?s.alpha(.1).css():null,color:n?"#ccc":i?L.a.contrast(s,"white")>2?"white":"black":a.hex,cursor:n?"not-allowed":"default",":active":Object(j.a)(Object(j.a)({},e[":active"]),{},{backgroundColor:!n&&(i?a.hex:s.alpha(.3).css())})})},input:function(e){return Object(j.a)(Object(j.a)({},e),B())},placeholder:function(e){return Object(j.a)(Object(j.a)({},e),B())},singleValue:function(e,t){var a=t.data;return Object(j.a)(Object(j.a)({},e),B(a.hex))}},J=function(t){Object(h.a)(n,t);var a=Object(u.a)(n);function n(t){var c;return Object(o.a)(this,n),(c=a.call(this,t)).getData=Object(r.a)(l.a.mark((function e(){var t,a,n,i,s,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c.setState({isLoading:!0}),e.next=3,Object(D.a)(k.a.GET_LIST_PRODUCT,{},"","GET");case 3:if(t=e.sent,a=t.data,c.pagination(a),0!=c.state.colors.length){e.next=13;break}return e.next=9,Object(D.a)(k.a.GET_LIST_COLOR,{},"","GET");case 9:n=e.sent,i=[],n.data.map((function(e){i.push({value:e._id,label:e.hex,hex:e.hex})})),c.setState({colors:i});case 13:if(0!=c.state.brands.length){e.next=18;break}return e.next=16,Object(D.a)(k.a.GET_LIST_BRAND,{},"","GET");case 16:s=e.sent,c.setState({brands:s.data});case 18:if(0!=c.state.types.length){e.next=23;break}return e.next=21,Object(D.a)(k.a.GET_LIST_TYPE,{},"","GET");case 21:r=e.sent,c.setState({types:r.data});case 23:c.setState({isLoading:!1});case 24:case"end":return e.stop()}}),e)}))),c.select=function(e,t){var a=null;c.state["".concat(e,"s")].map((function(e){e._id==t.target.value&&(a=e)})),console.log(a),c.setState(Object(i.a)({},e,a))},c.createProduct=Object(r.a)(l.a.mark((function e(){var t,a,n,i,s,r,o,d,h;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=c.state,a=t.title,n=t.image,i=t.url,s=t.type,r=t.brand,null!=(o=t.color)){e.next=4;break}return alert("Please fill in all the requirements"),e.abrupt("return");case 4:return d={type_id:s._id,brand_id:r._id,name:a,href:i,image:n,color_id:o.value},c.setState({isLoading:!0}),e.next=8,Object(D.a)(k.a.ADD_PRODUCT,d,"","POST");case 8:200==(h=e.sent).status?c.getData():(alert(h.message),c.setState({isLoading:!1})),c.toggle("new");case 11:case"end":return e.stop()}}),e)}))),c.onChange=function(e,t){c.setState(Object(i.a)({},e,t))},c.changeColor=function(e){console.log(e),c.setState({color:e})},c.openUpdate=function(e){var t=null;c.state.types.map((function(a){a._id==e.type_id&&(t=a)}));var a=null;c.state.brands.map((function(t){t._id==e.brand_id&&(a=t)})),c.setState({modal:!c.state.modal,action:"update",title:e.name,image:e.image,url:e.href,type:t,brand:a,productID:e._id,color:e.color?{value:e.color._id,label:e.color.hex,hex:e.color.hex}:null})},c.updateProduct=Object(r.a)(l.a.mark((function e(){var t,a,n,i,s,r,o,d,h;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=c.state,a=t.title,n=t.image,i=t.url,s=t.type,r=t.brand,o=t.color,""!=a&&""!=n&&""!=i&&null!=s&&null!=r){e.next=4;break}return alert("Please fill in all the requirements"),e.abrupt("return");case 4:return d={type_id:s._id,brand_id:r._id,name:a,href:i,image:n,id:c.state.productID,color_id:o.value},c.setState({isLoading:!0}),e.next=8,Object(D.a)(k.a.UPDATE_PRODUCT,d,"","POST");case 8:200==(h=e.sent).status?c.getData():(alert(h.message),c.setState({isLoading:!1})),c.toggle("new");case 11:case"end":return e.stop()}}),e)}))),c.openDelete=function(e){c.setState({modalDelete:!c.state.modalDelete,delete:e})},c.delete=Object(r.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c.setState({isLoading:!0}),e.next=3,Object(D.a)(k.a.DELETE_PRODUCT,{id:c.state.delete._id},"","POST");case 3:200==(t=e.sent).status?c.getData():(alert(t.message.replaceAll("{name}",'"'.concat(c.state.delete.name,'"'))),c.setState({isLoading:!1})),c.setState({modalDelete:!c.state.modalDelete,delete:null});case 6:case"end":return e.stop()}}),e)}))),c.execUpdate=function(e){c.setState({action:"update",updateId:e._id,title:e.title?JSON.stringify(e.title,null,"\t"):"",image:e.image,addresses:e.addresses?e.addresses.join("\n"):"",description:e.description?JSON.stringify(e.description,null,"\t"):"",isActive100:e.isActive100,category:e.category._id,url:e.url,modal:!c.state.modal})},c.deleteCard=function(t){if(window.confirm("Are you sure to delete this item?")){var a={method:"DELETE",headers:H};fetch(e.BASE_URL+"/browser-link/"+t,a).then((function(){c.setState({deleted:"Item deleted",created:""}),c.componentDidMount()})).catch(console.log)}},c.state={data:[],categories:[],addresses:[],title:"",image:"",description:"",category:"",url:"",isActive100:!1,isLoading:!1,errors:{},action:"",brands:[],types:[],brand:null,type:null,productID:"",modalDelete:!1,delete:null,auth:localStorage.getItem("auth"),colors:[],color:null,arrPagination:[],indexPage:0},c}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=Object(r.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.getData();case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"pagination",value:function(e){var t,a,n,c=[];for(t=0,a=e.length;t<a;t+=5)n=e.slice(t,t+5),c.push(n);0==c.length?this.setState({hidden:!1}):this.setState({hidden:!0}),this.setState({arrPagination:c,data:c[0]})}},{key:"toggle",value:function(e){this.setState({modal:!this.state.modal,action:e,isLoading:!1,updateId:"",title:"",image:"",category:"",url:"",isHide:!1,isActive100:!1,errors:{},type:null,brand:null,productID:"",color:null})}},{key:"cancelCreate",value:function(){this.setState({modal:!1})}},{key:"onChangeAct",value:function(e){var t=e.target.checked;this.setState(Object(i.a)({},e.target.name,t))}},{key:"inputChange",value:function(e){this.setState(Object(i.a)({},e.target.name,e.target.value))}},{key:"onChangeCat",value:function(e){this.setState({category:e.target.value})}},{key:"render",value:function(){var e=this,t=this.state,a=(t.isActive100,t.errors),n=(t.addresses,t.title),c=(t.description,t.image),i=t.url,s=(t.categories,t.category,t.data),o=t.arrPagination;return this.state.isLoading?Object(G.jsx)("div",{className:"sweet-loading",children:Object(G.jsx)(R.a,{css:M,size:50,color:"#123abc",loading:this.state.isLoading,speedMultiplier:1.5})}):Object(G.jsxs)("div",{className:"animated fadeIn",children:[Object(G.jsx)(g.a,{children:Object(G.jsxs)(p.a,{children:[Object(G.jsx)("p",{style:q.success,children:this.state.created}),Object(G.jsx)("p",{style:q.danger,children:this.state.deleted}),Object(G.jsxs)(f.a,{children:[Object(G.jsxs)(x.a,{children:[Object(G.jsx)("i",{className:"fa fa-align-justify"})," Chi ti\u1ebft s\u1ea3n ph\u1ea9m","update"!=this.state.auth&&Object(G.jsx)(m.a,{outline:!0,color:"primary",style:q.floatRight,size:"sm",onClick:function(t){return e.toggle("new")},children:"Th\xeam m\u1edbi"})]}),Object(G.jsx)(O.a,{children:Object(G.jsxs)("table",{ble:!0,className:"table table-hover table-outline mb-0 d-none d-sm-table",children:[Object(G.jsx)("thead",{className:"thead-light",children:Object(G.jsxs)("tr",{children:[Object(G.jsx)("th",{className:"text-center",children:"STT."}),Object(G.jsx)("th",{className:"text-center",children:"Lo\u1ea1i"}),Object(G.jsx)("th",{className:"text-center",children:"Th\u01b0\u01a1ng hi\u1ec7u"}),Object(G.jsx)("th",{className:"text-center",children:"T\xean"}),Object(G.jsx)("th",{className:"text-center",children:"\u0110\u01b0\u1eddng d\u1eabn"}),Object(G.jsx)("th",{className:"text-center",children:"M\xe0u"}),Object(G.jsx)("th",{className:"text-center",children:"H\xecnh \u1ea3nh"}),Object(G.jsx)("th",{className:"text-center",children:"#"})]})}),Object(G.jsxs)("tbody",{children:[Object(G.jsx)("td",{colSpan:"10",hidden:this.state.hidden,className:"text-center",children:"Kh\xf4ng t\xecm th\u1ea5y d\u1eef li\u1ec7u"}),void 0!=s?s.map((function(t,a){return Object(G.jsxs)("tr",{children:[Object(G.jsx)("td",{className:"text-center",children:a+1}),Object(G.jsx)("td",{className:"text-center",children:t.type}),Object(G.jsx)("td",{className:"text-center",children:t.brand}),Object(G.jsx)("td",{className:"text-center",children:t.name}),Object(G.jsx)("th",{className:"text-center",children:Object(G.jsx)("a",{href:t.href,target:"_blank",children:"Open web"})}),Object(G.jsxs)("td",{className:"text-center",children:[t.color.hex,Object(G.jsx)("div",{style:{backgroundColor:t.color.hex,width:"100%",height:"30px"},children:" "})]}),Object(G.jsx)("th",{style:q.w15,children:Object(G.jsx)("img",{src:t.image,style:q.image})}),Object(G.jsxs)("td",{className:"text-center",children:[Object(G.jsx)(I.d,{style:q.mgl5,outline:!0,color:"primary",size:"sm",onClick:function(){var a=Object(r.a)(l.a.mark((function a(n){return l.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.openUpdate(t);case 2:return a.abrupt("return",a.sent);case 3:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}(),children:Object(G.jsx)(E.a,{name:"cilPencil"})}),Object(G.jsx)(I.d,{outline:!0,color:"danger",size:"sm",onClick:function(a){e.openDelete(t)},children:Object(G.jsx)(E.a,{name:"cilTrash"})})]})]},a)})):""]})]})})]}),Object(G.jsx)("div",{style:{float:"right"},children:Object(G.jsx)(T.a,{count:o.length,color:"primary",onChange:function(t,a){e.setState({data:o[a-1],indexPage:a-1})}})})]})}),Object(G.jsxs)(w.a,{isOpen:this.state.modal,toggle:function(t){return e.cancelCreate()},className:this.props.className,children:[Object(G.jsx)(v.a,{toggle:function(){return e.toggle()},children:"update"===this.state.action?"Edit":"Create "}),Object(G.jsx)(y.a,{children:Object(G.jsxs)(S.a,{children:[Object(G.jsx)(C.a,{field:"name",label:"Name",value:n,error:a.title,onChange:function(t){return e.onChange("title",t.target.value)},rows:"5"}),Object(G.jsxs)("div",{children:[Object(G.jsx)("label",{htmlFor:"tag",children:"Type:  "}),Object(G.jsxs)("select",{name:"type",onChange:function(t){return e.select("type",t)},children:[Object(G.jsx)("option",{value:"update"===this.state.action?"".concat(null==this.state.type?null:"".concat(this.state.type._id)):null,children:"update"===this.state.action?"".concat(null==this.state.type?" - - - - - - - - - - ":"".concat(this.state.type.vi||this.state.type.name)):" - - - - - - - - - - "}),this.state.types.map((function(t,a){if("update"!=e.state.action||t._id!=e.state.type._id)return Object(G.jsx)("option",{value:t._id,children:t.vi||t.name},String(a));console.log("remove === ",t)}))]})]}),Object(G.jsxs)("div",{children:[Object(G.jsx)("label",{htmlFor:"tag",children:"Brand:   "}),Object(G.jsxs)("select",{name:"category",onChange:function(t){return e.select("brand",t)},children:[Object(G.jsx)("option",{value:"update"===this.state.action?"".concat(null==this.state.brand?null:"".concat(this.state.brand._id)):null,children:"update"===this.state.action?"".concat(null==this.state.brand?" - - - - - - - - - - ":"".concat(this.state.brand.name)):" - - - - - - - - - - "}),this.state.brands.map((function(t,a){if("update"!=e.state.action||t._id!=e.state.brand._id)return Object(G.jsx)("option",{value:t._id,children:t.name},String(a));console.log("remove === ",t)}))]})]}),Object(G.jsx)(C.a,{field:"image",label:"Image",value:c,error:a.image,onChange:function(t){return e.onChange("image",t.target.value)}}),Object(G.jsx)(C.a,{field:"href",label:"Href",value:i,error:a.url,onChange:function(t){return e.onChange("url",t.target.value)}}),Object(G.jsx)(P.a,{defaultValue:this.state.color,label:"Single select",options:this.state.colors,styles:F,isSearchable:!0,onChange:this.changeColor})]})}),Object(G.jsxs)(_.a,{children:[Object(G.jsx)(m.a,{color:"primary",onClick:function(t){"update"===e.state.action?e.updateProduct():e.createProduct()},disabled:this.state.isLoading,children:"L\u01b0u"})," ",Object(G.jsx)(m.a,{color:"secondary",onClick:function(t){return e.cancelCreate()},children:"H\u1ee7y"})]})]}),Object(G.jsxs)(w.a,{isOpen:this.state.modalDelete,toggle:function(t){return e.setState({modalDelete:!e.state.modalDelete,delete:null})},className:this.props.className,children:[Object(G.jsx)(v.a,{toggle:function(t){return e.setState({modalDelete:!e.state.modalDelete,delete:null})},children:"Delete"}),Object(G.jsx)(y.a,{children:Object(G.jsx)("label",{htmlFor:"tag",children:'Do you want to delete product "'.concat(this.state.delete?this.state.delete.vi||this.state.delete.name:"",'" ?')})}),Object(G.jsxs)(_.a,{children:[Object(G.jsx)(m.a,{color:"primary",onClick:function(t){return e.delete()},disabled:this.state.isLoading,children:"X\xf3a"})," ",Object(G.jsx)(m.a,{color:"secondary",onClick:function(t){return e.setState({modalDelete:!e.state.modalDelete,delete:null})},children:"H\u1ee7y"})]})]})]})}}]),n}(b.Component),M=Object(U.css)(n||(n=Object(c.a)(["\n  display: block;\n  margin: 0 auto;\n  border-color: red;\n"]))),q={a:{textDecoration:"none"},floatRight:{float:"right"},spinner:{width:"30px"},center:{textAlign:"center"},tbody:{height:"380px",overflowY:"auto"},wh5:{width:"5%",float:"left",height:"100px"},wh10:{width:"9.8%",float:"left",height:"100px"},wh15:{width:"15%",float:"left",height:"100px"},wh20:{width:"20%",float:"left",height:"100px"},wh25:{width:"25%",float:"left",height:"100px"},wh30:{width:"30%",float:"left",height:"100px"},wh40:{width:"40%",float:"left",height:"100px"},wh5t:{width:"5%",float:"left",height:"70px"},wh10t:{width:"9.8%",float:"left",height:"70px"},wh15t:{width:"15%",float:"left",height:"70px"},wh20t:{width:"20%",float:"left",height:"70px"},wh25t:{width:"25%",float:"left",height:"70px"},wh30t:{width:"30%",float:"left",height:"70px"},wh40t:{width:"40%",float:"left",height:"70px"},w5:{width:"5%",float:"left"},w10:{width:"10%",float:"left"},w15:{width:"15%",float:"left"},w20:{width:"20%",float:"left"},w25:{width:"25%",float:"left"},w30:{width:"30%",float:"left"},w40:{width:"40%",float:"left"},row:{float:"left",width:"100%"},success:{color:"green"},danger:{color:"red"},mgl5:{margin:"5px"},mgb5:{marginBottom:"5px"},image:{width:"50px",height:"50px",borderRadius:"9999999px"}};t.default=J}.call(this,a(114))}}]);
//# sourceMappingURL=71.67a8cbcb.chunk.js.map