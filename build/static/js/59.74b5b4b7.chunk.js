(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[59],{1353:function(t,e,a){"use strict";a.r(e);var n,i=a(653),s=a(165),r=a(113),c=a.n(r),l=a(640),o=a(166),h=a(167),d=a(169),u=a(168),m=a(2),p=a(645),g=a(1299),j=a(1300),b=a(1301),f=a(1302),x=a(1303),O=a(1304),v=a(1389),y=a(1307),k=a(1308),S=a(1309),w=a(639),C=a(670),L=a(1385),D=(a(644),a(646)),N=a(652),A=a(643),_=a.n(A),T=a(649),R=a(654),U=a.n(R),P=a(17),B=new Headers,I=localStorage.getItem("auth");B.append("Authorization","Bearer "+I),B.append("Content-Type","application/json");Object(C.a)((function(t){return{root:{"& > *":{marginTop:t.spacing(2)}}}}));var E=function(t){Object(d.a)(a,t);var e=Object(u.a)(a);function a(t){var n;return Object(o.a)(this,a),(n=e.call(this,t)).getData=Object(l.a)(c.a.mark((function t(){var e,a;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.setState({isLoading:!0}),t.next=3,_()({baseURL:D.a.BASE_URL,url:D.a.LIST_BRAND_PLUGIN,method:"GET"});case 3:e=t.sent,a=e.data.data,n.pagination(a),n.setState({dataApi:a}),0,n.setState({isLoading:!1,totalActive:0});case 9:case"end":return t.stop()}}),t)}))),n.getData_Company=Object(l.a)(c.a.mark((function t(){var e,a;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.setState({isLoading:!0}),t.next=3,_()({baseURL:D.a.BASE_URL,url:D.a.LIST_BRAND_PLUGIN_COMPANY+JSON.parse(n.state.user).company_id,method:"GET"});case 3:e=t.sent,a=e.data.data,n.pagination(a),n.setState({dataApi:a}),0,n.setState({isLoading:!1,totalActive:0});case 9:case"end":return t.stop()}}),t)}))),n.openDelete=function(t){n.setState({modalDelete:!n.state.modalDelete,id:t._id})},n.state={data:[],key:"",activePage:1,page:1,itemsCount:0,limit:20,totalActive:0,modalCom:!1,viewingUser:{},communities:[],updated:"",dataApi:[],hidden:!1,action:"new",name:"",image:"",link:"",modalDelete:!1,delete:null,arrPagination:[],indexPage:0,token:{Authorization:"Bearer ".concat(localStorage.getItem("token"))},type:localStorage.getItem("type"),user:localStorage.getItem("user"),isLoading:!1},n}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var t=Object(l.a)(c.a.mark((function t(){var e,a,n;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for("0"==(e=this.state.type)||"1"==e?this.getData():this.getData_Company(),a=JSON.parse(localStorage.getItem("url")),n=0;n<a.length;n++)a[n].url==window.location.hash&&1==a[n].isHidden&&(window.location.href="#/");case 4:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"pagination",value:function(t){var e,a,n,i=[];for(e=0,a=t.length;e<a;e+=5)n=t.slice(e,e+5),i.push(n);0==i.length?this.setState({hidden:!1}):this.setState({hidden:!0}),this.setState({arrPagination:i,data:i[0]})}},{key:"searchKey",value:function(){var t=this.state,e=t.indexPage,a=t.key;if(""!=a){var n=[];this.state.dataApi.map((function(t){t.name.toLocaleUpperCase().includes(a.toLocaleUpperCase())&&n.push(t)}));var i=0;n.map((function(t){"Actived"==t.Status&&(i+=1)})),this.setState({data:n,totalActive:i})}else{var s=0;this.state.dataApi.map((function(t){"Actived"==t.Status&&(s+=1)})),this.setState({data:this.state.arrPagination[e],totalActive:s})}}},{key:"actionSearch",value:function(t,e){var a=this;this.setState(Object(s.a)({},e,t.target.value),(function(){a.searchKey()}))}},{key:"resetSearch",value:function(){var t=this;this.setState({key:""},(function(){t.searchKey()}))}},{key:"toggleModal",value:function(){var t=Object(l.a)(c.a.mark((function t(e){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:"new"==e&&this.setState({modalCom:!this.state.modalCom,action:e,name:"",image:"",link:""});case 1:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"onChange",value:function(t,e){this.setState(Object(s.a)({},t,e))}},{key:"addBrand",value:function(){var t=Object(l.a)(c.a.mark((function t(){var e,a,n,i,s;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e=this.state,a=e.name,n=e.image,i=e.link,null!=a&&""!=a&&null!=n&&""!=n){t.next=4;break}return alert("Vui l\xf2ng nh\u1eadp \u0111\u1ea7y \u0111\u1ee7 tr\u01b0\u1eddng d\u1eef li\u1ec7u !!!"),t.abrupt("return");case 4:return s={name:a,image:n,company_id:"0"==this.state.type||"1"==this.state.type?"":JSON.parse(this.state.user).company_id,link:i},this.setState({isLoading:!0}),t.next=8,_()({baseURL:D.a.BASE_URL,url:D.a.ADD_BRAND_PLUGIN,method:"POST",data:s});case 8:200==t.sent.status?("0"==this.state.type||"1"==this.state.type?this.getData():this.getData_Company(),this.setState({modalCom:!this.state.modalCom})):(alert("Th\xeam th\u01b0\u01a1ng hi\u1ec7u th\u1ea5t b\u1ea1i"),this.setState({isLoading:!1}));case 10:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"openUpdate",value:function(){var t=Object(l.a)(c.a.mark((function t(e){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.setState({modalCom:!this.state.modalCom,action:"update",name:e.name,image:e.image,id:e._id,link:e.link});case 1:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"updateBrand",value:function(){var t=Object(l.a)(c.a.mark((function t(){var e,a,n,i,s;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e=this.state,a=e.name,n=e.image,i=e.link,null!=a&&""!=a&&null!=n&&""!=n){t.next=4;break}return alert("Vui l\xf2ng nh\u1eadp \u0111\u1ea7y \u0111\u1ee7 tr\u01b0\u1eddng d\u1eef li\u1ec7u !!!"),t.abrupt("return");case 4:return s={name:a,image:n,id:this.state.id,link:i},this.setState({isLoading:!0}),t.next=8,_()({baseURL:D.a.BASE_URL,url:D.a.UPDATE_BRAND_PLUGIN,method:"POST",data:s});case 8:200==t.sent.status?("0"==this.state.type||"1"==this.state.type?this.getData():this.getData_Company(),this.setState({modalCom:!this.state.modalCom})):(alert("C\u1eadp nh\u1eadt th\u1ea5t b\u1ea1i"),this.setState({isLoading:!1}));case 10:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"delete",value:function(){var t=Object(l.a)(c.a.mark((function t(){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.setState({isLoading:!0}),t.next=3,_()({baseURL:D.a.BASE_URL,url:D.a.DELETE_BRAND_PLUGIN,method:"POST",data:{id:this.state.id}});case 3:200==t.sent.status?("0"==this.state.type||"1"==this.state.type?this.getData():this.getData_Company(),this.setState({modalDelete:!this.state.modalDelete,delete:null})):(alert("X\xf3a s\u1ea3n ph\u1ea9m th\u1ea5t b\u1ea1i"),this.setState({isLoading:!1}));case 5:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"inputChange",value:function(t){this.setState(Object(s.a)({},t.target.name,t.target.value))}},{key:"getBadge",value:function(t){switch(t){case"Actived":return"success";case"Inactive":return"secondary";case"Locked":return"warning";case"Deactived":return"danger";default:return"primary"}}},{key:"onChangeImage",value:function(t){var e=this,a=t.target.files,n=new FileReader;n.readAsDataURL(a[0]),n.onload=function(t){e.setState({image:t.target.result})}}},{key:"render",value:function(){var t=this,e=this.state,a=e.data,n=e.arrPagination,i=e.key;return this.state.isLoading?Object(P.jsx)("div",{className:"sweet-loading",children:Object(P.jsx)(U.a,{css:z,size:50,color:"#123abc",loading:this.state.isLoading,speedMultiplier:1.5})}):Object(P.jsxs)("div",{className:"animated fadeIn",children:[Object(P.jsx)(g.a,{children:Object(P.jsxs)(j.a,{children:[Object(P.jsxs)(b.a,{children:[Object(P.jsxs)(f.a,{children:[Object(P.jsx)("i",{className:"fa fa-align-justify"})," Danh s\xe1ch th\u01b0\u01a1ng hi\u1ec7u",Object(P.jsx)("div",{style:G.tags,children:Object(P.jsxs)(w.W,{children:[Object(P.jsx)(w.p,{sm:"12",lg:"12",children:Object(P.jsxs)(w.W,{children:[Object(P.jsx)(w.p,{sm:"12",lg:"6",children:Object(P.jsx)("div",{children:Object(P.jsx)(x.a,{style:G.searchInput,onChange:function(e){t.actionSearch(e,"key")},name:"key",value:i,placeholder:"T\u1eeb kh\xf3a"})})}),Object(P.jsx)(w.p,{sm:"12",lg:"6",children:Object(P.jsx)(w.d,{color:"primary",style:{width:"100%",marginTop:5},size:"sm",onClick:function(e){t.resetSearch()},children:"L\xe0m m\u1edbi t\xecm ki\u1ebfm"})})]})}),Object(P.jsx)(w.p,{sm:"12",lg:"12",children:Object(P.jsx)(w.d,{outline:!0,color:"primary",style:G.floatRight,size:"sm",onClick:function(e){return t.toggleModal("new")},children:"Th\xeam m\u1edbi"})})]})})]}),Object(P.jsx)(O.a,{children:Object(P.jsxs)("table",{ble:!0,className:"table table-hover table-outline mb-0 d-none d-sm-table",children:[Object(P.jsx)("thead",{className:"thead-light",children:Object(P.jsxs)("tr",{children:[Object(P.jsx)("th",{className:"text-center",children:"STT."}),Object(P.jsx)("th",{className:"text-center",children:"T\xean th\u01b0\u01a1ng hi\u1ec7u"}),Object(P.jsx)("th",{className:"text-center",children:"\u1ea2nh th\u01b0\u01a1ng hi\u1ec7u"}),Object(P.jsx)("th",{className:"text-center",children:"Link th\u01b0\u01a1ng hi\u1ec7u"}),Object(P.jsx)("th",{className:"text-center",children:"#"})]})}),Object(P.jsxs)("tbody",{children:[Object(P.jsx)("td",{colSpan:"10",hidden:this.state.hidden,className:"text-center",children:"Kh\xf4ng t\xecm th\u1ea5y d\u1eef li\u1ec7u"}),void 0!=a?a.map((function(e,a){return Object(P.jsxs)("tr",{children:[Object(P.jsx)("td",{className:"text-center",children:a+1}),Object(P.jsx)("td",{className:"text-center",children:e.name}),Object(P.jsx)("td",{className:"text-center",children:Object(P.jsx)("img",{src:e.image,width:"90px",height:"70px"})}),Object(P.jsx)("td",{className:"text-center",children:Object(P.jsx)("a",{href:e.link,target:"_blank",children:e.link})}),Object(P.jsxs)("td",{className:"text-center",children:[Object(P.jsx)(w.d,{style:G.mgl5,outline:!0,color:"primary",size:"sm",onClick:function(){var a=Object(l.a)(c.a.mark((function a(n){return c.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,t.openUpdate(e);case 2:return a.abrupt("return",a.sent);case 3:case"end":return a.stop()}}),a)})));return function(t){return a.apply(this,arguments)}}(),children:Object(P.jsx)(p.a,{name:"cilPencil"})})," ",Object(P.jsx)(w.d,{outline:!0,color:"danger",size:"sm",onClick:function(a){t.openDelete(e)},children:Object(P.jsx)(p.a,{name:"cilTrash"})})]})]},a)})):""]})]})})]}),Object(P.jsx)("div",{style:{float:"right"},children:Object(P.jsx)(L.a,{count:n.length,color:"primary",onChange:function(e,a){t.setState({data:n[a-1],indexPage:a-1})}})})]})}),Object(P.jsxs)(v.a,{isOpen:this.state.modalCom,className:this.props.className,children:[Object(P.jsx)(y.a,{children:"new"==this.state.action?"T\u1ea1o m\u1edbi":"C\u1eadp nh\u1eadt"}),Object(P.jsxs)(k.a,{children:[Object(P.jsx)(N.a,{field:"name",label:"T\xean th\u01b0\u01a1ng hi\u1ec7u",value:this.state.name,placeholder:"T\xean th\u01b0\u01a1ng hi\u1ec7u",onChange:function(e){return t.onChange("name",e.target.value)}}),Object(P.jsx)(N.a,{field:"image",label:"\u1ea2nh th\u01b0\u01a1ng hi\u1ec7u",type:"file",onChange:function(e){t.onChangeImage(e)},onClick:function(t){t.target.value=null}}),""==this.state.image?"":Object(P.jsx)("img",{width:"250",height:"300",src:this.state.image,style:{marginBottom:20}}),Object(P.jsx)(N.a,{field:"link",label:"Link th\u01b0\u01a1ng hi\u1ec7u",value:this.state.link,placeholder:"Link th\u01b0\u01a1ng hi\u1ec7u",onChange:function(e){return t.onChange("link",e.target.value)}})]}),Object(P.jsxs)(S.a,{children:[Object(P.jsx)(w.d,{color:"primary",onClick:function(e){"new"===t.state.action?t.addBrand():t.updateBrand()},disabled:this.state.isLoading,children:"L\u01b0u"})," ",Object(P.jsx)(w.d,{color:"secondary",onClick:function(e){return t.toggleModal("new")},children:"\u0110\xf3ng"})]})]}),Object(P.jsxs)(v.a,{isOpen:this.state.modalDelete,toggle:function(e){return t.setState({modalDelete:!t.state.modalDelete,delete:null})},className:this.props.className,children:[Object(P.jsx)(y.a,{toggle:function(e){return t.setState({modalDelete:!t.state.modalDelete,delete:null})},children:"Delete"}),Object(P.jsx)(k.a,{children:Object(P.jsx)("label",{htmlFor:"tag",children:"X\xe1c nh\u1eadn x\xf3a !!!"})}),Object(P.jsxs)(S.a,{children:[Object(P.jsx)(w.d,{color:"primary",onClick:function(e){return t.delete()},disabled:this.state.isLoading,children:"Delete"})," ",Object(P.jsx)(w.d,{color:"secondary",onClick:function(e){return t.setState({modalDelete:!t.state.modalDelete,delete:null})},children:"\u0110\xf3ng"})]})]})]})}}]),a}(m.Component),z=Object(T.css)(n||(n=Object(i.a)(["\n  display: block;\n  margin: 0 auto;\n  border-color: red;\n"]))),G={pagination:{marginRight:"5px"},flexLabel:{width:100},flexOption:{width:300},a:{textDecoration:"none"},floatRight:{float:"right",marginTop:"3px"},spinner:{width:"30px"},center:{textAlign:"center"},tbody:{height:"380px",overflowY:"auto"},wh25:{width:"25%",float:"left",height:"80px"},w5:{width:"15%",float:"left",height:"80px"},wa10:{width:"5%",float:"left",height:"80px"},row:{float:"left",width:"100%"},success:{color:"green"},danger:{color:"red"},mgl5:{marginLeft:"5px"},tags:{float:"right",marginRight:"5px"},searchInput:{width:"190px",display:"inline-block"},userActive:{color:"green"},userPending:{color:"red"},nagemonNameCol:{width:"328px"},image:{width:"100px",height:"100px",borderRadius:"99999px"}};e.default=E},670:function(t,e,a){"use strict";var n=a(12),i=a(1386),s=a(666);e.a=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(i.a)(t,Object(n.a)({defaultTheme:s.a},e))}}}]);
//# sourceMappingURL=59.74b5b4b7.chunk.js.map