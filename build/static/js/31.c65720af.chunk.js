(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[31],{1351:function(e,t,a){"use strict";a.r(t);var n,i=a(653),s=a(165),c=a(113),r=a.n(c),o=a(640),l=a(166),d=a(167),h=a(169),u=a(168),p=a(2),g=(a(645),a(1299)),j=a(1300),b=a(1301),m=a(1302),x=a(1303),f=a(1304),O=a(662),v=a(639),y=a(670),S=(a(644),a(646)),k=a(643),w=a.n(k),C=a(649),N=a(654),T=a.n(N),L=a(17),A=new Headers,D=localStorage.getItem("auth");A.append("Authorization","Bearer "+D),A.append("Content-Type","application/json");Object(y.a)((function(e){return{root:{"& > *":{marginTop:e.spacing(2)}}}}));var P=function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).getData=Object(o.a)(r.a.mark((function e(){var t,a,i;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.setState({isLoading:!0}),e.next=3,w()({baseURL:S.a.BASE_URL,url:S.a.LIST_CONTACT_CUSTOMER,method:"POST"});case 3:t=e.sent,a=t.data.data,n.pagination(a),console.log(a),n.setState({dataApi:a}),i=0,a.map((function(e){"Actived"==e.Status&&(i+=1)})),n.setState({isLoading:!1,totalActive:i});case 11:case"end":return e.stop()}}),e)}))),n.openUpdateStatus=function(){var e=Object(o.a)(r.a.mark((function e(t){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.setState({isLoading:!0}),e.next=3,w()({baseURL:S.a.BASE_URL,url:S.a.UPDATE_CONTACT_STATUS,method:"DELETE",data:{id:t._id,Status:"1"}});case 3:1==(a=e.sent).data.is_success?n.getData():(alert(a.data.message),n.setState({isLoading:!1}));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.state={data:[],key:"",activePage:1,page:1,itemsCount:0,limit:20,totalActive:0,modalCom:!1,viewingUser:{},communities:[],updated:"",dataApi:[],hidden:!1,action:"new",Value:"",Description:"",Status:"",modalDelete:!1,delete:null,arrPagination:[],indexPage:0,token:{Authorization:"Bearer ".concat(localStorage.getItem("token"))},isLoading:!1,type:localStorage.getItem("type"),isError:!1},n}return Object(d.a)(a,[{key:"componentWillMount",value:function(){"0"==this.state.type||"1"==this.state.type?this.setState({isError:!1}):this.setState({isError:!0})}},{key:"componentDidMount",value:function(){var e=Object(o.a)(r.a.mark((function e(){var t,a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(this.getData(),t=JSON.parse(localStorage.getItem("url")),a=0;a<t.length;a++)t[a].url==window.location.hash&&1==t[a].isHidden&&(window.location.href="#/");case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"pagination",value:function(e){var t,a,n,i=[];for(t=0,a=e.length;t<a;t+=5)n=e.slice(t,t+5),i.push(n);0==i.length?this.setState({hidden:!1}):this.setState({hidden:!0}),this.setState({arrPagination:i,data:i[this.state.indexPage]})}},{key:"searchKey",value:function(){var e=this.state,t=e.indexPage,a=e.key;if(""!=a){var n=[];this.state.dataApi.map((function(e){(e.Name.toLocaleUpperCase().includes(a.toLocaleUpperCase())||e.Phone.toLocaleUpperCase().includes(a.toLocaleUpperCase()))&&n.push(e)}));var i=0;n.map((function(e){"Actived"==e.Status&&(i+=1)})),this.setState({data:n,totalActive:i})}else{var s=0;this.state.dataApi.map((function(e){"Actived"==e.Status&&(s+=1)})),this.setState({data:this.state.arrPagination[t],totalActive:s})}}},{key:"actionSearch",value:function(e,t){var a=this;this.setState(Object(s.a)({},t,e.target.value),(function(){a.searchKey()}))}},{key:"resetSearch",value:function(){var e=this;this.setState({key:""},(function(){e.searchKey()}))}},{key:"onChange",value:function(e,t){this.setState(Object(s.a)({},e,t))}},{key:"inputChange",value:function(e){this.setState(Object(s.a)({},e.target.name,e.target.value))}},{key:"getBadge",value:function(e){switch(e){case"0":return"danger";case"1":return"success";default:return"primary"}}},{key:"getBadge_String",value:function(e){switch(e){case"0":return"\u0110ang ch\u1edd sale g\u1ecdi";case"1":return"\u0110\xe3 g\u1ecdi";default:return"primary"}}},{key:"render",value:function(){var e=this,t=this.state,a=t.data,n=t.arrPagination,i=t.indexPage,s=t.key;return this.state.isError?Object(L.jsx)("div",{className:"sweet-loading",children:"B\u1ea1n kh\xf4ng c\xf3 \u0111\u1ee7 quy\u1ec1n \u0111\u1ec3 s\u1eed d\u1ee5ng ch\u1ee9c n\u0103ng n\xe0y !!! Vui l\xf2ng li\xean h\u1ec7 Admin \u0111\u1ec3 bi\u1ebft th\xeam chi ti\u1ebft"}):this.state.isLoading?Object(L.jsx)("div",{className:"sweet-loading",children:Object(L.jsx)(T.a,{css:R,size:50,color:"#123abc",loading:this.state.isLoading,speedMultiplier:1.5})}):Object(L.jsx)("div",{className:"animated fadeIn",children:Object(L.jsx)(g.a,{children:Object(L.jsxs)(j.a,{children:[Object(L.jsx)("p",{style:U.success,children:this.state.updated}),Object(L.jsx)("p",{style:U.danger,children:this.state.deleted}),Object(L.jsxs)(b.a,{children:[Object(L.jsxs)(m.a,{children:[Object(L.jsx)("i",{className:"fa fa-align-justify"})," Danh s\xe1ch li\xean h\u1ec7",Object(L.jsx)("div",{style:U.tags,children:Object(L.jsx)(v.W,{children:Object(L.jsx)(v.p,{sm:"12",lg:"12",children:Object(L.jsxs)(v.W,{children:[Object(L.jsx)(v.p,{sm:"12",lg:"6",children:Object(L.jsx)("div",{children:Object(L.jsx)(x.a,{style:U.searchInput,onChange:function(t){e.actionSearch(t,"key")},name:"key",value:s,placeholder:"T\u1eeb kh\xf3a"})})}),Object(L.jsx)(v.p,{sm:"12",lg:"6",children:Object(L.jsx)(v.d,{color:"primary",style:{width:"100%",marginTop:5},size:"sm",onClick:function(t){e.resetSearch()},children:"L\xe0m m\u1edbi t\xecm ki\u1ebfm"})})]})})})})]}),Object(L.jsx)(f.a,{children:Object(L.jsxs)("table",{ble:!0,className:"table table-hover table-outline mb-0 d-none d-sm-table",children:[Object(L.jsx)("thead",{className:"thead-light",children:Object(L.jsxs)("tr",{children:[Object(L.jsx)("th",{className:"text-center",children:"STT."}),Object(L.jsx)("th",{className:"text-center",children:"H\u1ecd v\xe0 t\xean"}),Object(L.jsx)("th",{className:"text-center",children:"S\u1ed1 \u0111i\u1ec7n tho\u1ea1i"}),Object(L.jsx)("th",{className:"text-center",children:"Tr\u1ea1ng th\xe1i"}),Object(L.jsx)("th",{className:"text-center",children:"Lo\u1ea1i y\xeau c\u1ea7u"}),Object(L.jsx)("th",{className:"text-center",children:"Ng\xe0y t\u1ea1o"}),Object(L.jsx)("th",{className:"text-center",children:"#"})]})}),Object(L.jsxs)("tbody",{children:[Object(L.jsx)("td",{colSpan:"10",hidden:this.state.hidden,className:"text-center",children:"Kh\xf4ng t\xecm th\u1ea5y d\u1eef li\u1ec7u"}),void 0!=a?a.map((function(t,a){return Object(L.jsxs)("tr",{children:[Object(L.jsx)("td",{className:"text-center",children:a+1}),Object(L.jsx)("td",{className:"text-center",children:t.Name}),Object(L.jsx)("td",{className:"text-center",children:t.Phone}),Object(L.jsx)("td",{className:"text-center",children:Object(L.jsx)(v.a,{color:e.getBadge(t.Status),children:e.getBadge_String(t.Status)})}),Object(L.jsx)("td",{className:"text-center",children:t.Type_Request}),Object(L.jsx)("td",{className:"text-center",children:new Date(t.Create_Date).toLocaleDateString()+" "+new Date(t.Create_Date).toLocaleTimeString()}),Object(L.jsx)("td",{className:"text-center",children:"0"==t.Status?Object(L.jsx)(O.a,{outline:!0,color:"danger",size:"sm",onClick:function(a){e.openUpdateStatus(t)},children:"Ch\u01b0a g\u1ecdi"}):Object(L.jsx)(O.a,{outline:!0,color:"success",size:"sm",onClick:function(e){},children:"\u0110\xe3 g\u1ecdi"})})]},a)})):""]})]})})]}),1==n.length?"":Object(L.jsx)("div",{style:{float:"right",marginRight:"10px",padding:"10px"},children:Object(L.jsx)("tr",{style:U.row,children:n.map((function(t,a){return Object(L.jsx)("td",{children:Object(L.jsx)(v.d,{style:U.pagination,color:a==i?"primary":"danger",onClick:function(t){e.setState({data:n[a],indexPage:a})},children:a+1})})}))})})]})})})}}]),a}(p.Component),R=Object(C.css)(n||(n=Object(i.a)(["\n  display: block;\n  margin: 0 auto;\n  border-color: red;\n"]))),U={pagination:{marginRight:"5px"},flexLabel:{width:100},flexOption:{width:300},a:{textDecoration:"none"},floatRight:{float:"right",marginTop:"3px"},spinner:{width:"30px"},center:{textAlign:"center"},tbody:{height:"380px",overflowY:"auto"},wh25:{width:"25%",float:"left",height:"80px"},w5:{width:"15%",float:"left",height:"80px"},wa10:{width:"5%",float:"left",height:"80px"},row:{float:"left",width:"100%"},success:{color:"green"},danger:{color:"red"},mgl5:{marginLeft:"5px"},tags:{float:"right",marginRight:"5px",width:"500px"},searchInput:{width:"190px",display:"inline-block"},userActive:{color:"green"},userPending:{color:"red"},nagemonNameCol:{width:"328px"},image:{width:"100px",height:"100px",borderRadius:"99999px"}};t.default=P},662:function(e,t,a){"use strict";var n=a(12),i=a(29),s=a(658),c=a(35),r=a(2),o=a.n(r),l=a(64),d=a.n(l),h=a(648),u=a.n(h),p=a(651),g={active:d.a.bool,"aria-label":d.a.string,block:d.a.bool,color:d.a.string,disabled:d.a.bool,outline:d.a.bool,tag:p.n,innerRef:d.a.oneOfType([d.a.object,d.a.func,d.a.string]),onClick:d.a.func,size:d.a.string,children:d.a.node,className:d.a.string,cssModule:d.a.object,close:d.a.bool},j=function(e){function t(t){var a;return(a=e.call(this,t)||this).onClick=a.onClick.bind(Object(s.a)(a)),a}Object(c.a)(t,e);var a=t.prototype;return a.onClick=function(e){if(!this.props.disabled)return this.props.onClick?this.props.onClick(e):void 0;e.preventDefault()},a.render=function(){var e=this.props,t=e.active,a=e["aria-label"],s=e.block,c=e.className,r=e.close,l=e.cssModule,d=e.color,h=e.outline,g=e.size,j=e.tag,b=e.innerRef,m=Object(i.a)(e,["active","aria-label","block","className","close","cssModule","color","outline","size","tag","innerRef"]);r&&"undefined"===typeof m.children&&(m.children=o.a.createElement("span",{"aria-hidden":!0},"\xd7"));var x="btn"+(h?"-outline":"")+"-"+d,f=Object(p.j)(u()(c,{close:r},r||"btn",r||x,!!g&&"btn-"+g,!!s&&"btn-block",{active:t,disabled:this.props.disabled}),l);m.href&&"button"===j&&(j="a");var O=r?"Close":null;return o.a.createElement(j,Object(n.a)({type:"button"===j&&m.onClick?"button":void 0},m,{className:f,ref:b,onClick:this.onClick,"aria-label":a||O}))},t}(o.a.Component);j.propTypes=g,j.defaultProps={color:"secondary",tag:"button"},t.a=j},670:function(e,t,a){"use strict";var n=a(12),i=a(1386),s=a(666);t.a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(i.a)(e,Object(n.a)({defaultTheme:s.a},t))}}}]);
//# sourceMappingURL=31.c65720af.chunk.js.map