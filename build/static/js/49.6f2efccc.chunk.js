(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[49],{1382:function(e,t,a){"use strict";a.r(t);var n,i=a(653),c=a(165),s=a(113),r=a.n(s),l=a(640),o=a(166),d=a(167),h=a(169),u=a(168),j=a(2),g=(a(645),a(1299)),p=a(1300),m=a(1301),x=a(1302),b=a(1303),f=a(1304),O=a(639),v=a(1385),y=(a(644),a(659)),w=a(668),S=a(643),k=a.n(S),N=a(649),L=a(654),A=a.n(L),T=a(17),C=function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).getData=Object(l.a)(r.a.mark((function e(){var t,a,i;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.state.companyid,n.setState({isLoading:!0}),e.next=4,k()({baseURL:y.a.BASE_URL,url:y.a.LIST_POINT,data:{company_id:t},method:"POST"});case 4:a=e.sent,i=a.data.data,console.log(i),n.pagination(i),n.setState({dataApi:i,isLoading:!1});case 9:case"end":return e.stop()}}),e)}))),n.state={data:[],key:"",totalActive:0,modalCom:!1,updated:"",dataApi:[],hidden:!1,action:"new",modalDelete:!1,delete:null,arrPagination:[],indexPage:0,token:{Authorization:"Bearer ".concat(localStorage.getItem("token"))},user:localStorage.getItem("user"),companyid:localStorage.getItem("company_id"),isLoading:!1},n}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(l.a)(r.a.mark((function e(){var t,a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(this.state.type,this.getData(),t=JSON.parse(localStorage.getItem("url")),a=0;a<t.length;a++)t[a].url==window.location.hash&&1==t[a].isHidden&&(window.location.href="#/");case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"pagination",value:function(e){var t,a,n,i=[];for(t=0,a=e.length;t<a;t+=5)n=e.slice(t,t+5),i.push(n);0==i.length?this.setState({hidden:!1}):this.setState({hidden:!0}),this.setState({arrPagination:i,data:i[0]})}},{key:"searchKey",value:function(){var e=this.state,t=e.indexPage,a=e.key;if(""!=a){var n=[];this.state.dataApi.map((function(e){e.label.toLocaleUpperCase().includes(a.toLocaleUpperCase())&&n.push(e)}));var i=0;n.map((function(e){"Actived"==e.Status&&(i+=1)})),this.setState({data:n,totalActive:i})}else{var c=0;this.state.dataApi.map((function(e){"Actived"==e.Status&&(c+=1)})),this.setState({data:this.state.arrPagination[t],totalActive:c})}}},{key:"actionSearch",value:function(e,t){var a=this;this.setState(Object(c.a)({},t,e.target.value),(function(){a.searchKey()}))}},{key:"resetSearch",value:function(){var e=this;this.setState({key:""},(function(){e.searchKey()}))}},{key:"onChange",value:function(e,t){this.setState(Object(c.a)({},e,t))}},{key:"inputChange",value:function(e){this.setState(Object(c.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){var e=this,t=this.state,a=t.data,n=t.arrPagination,i=t.key;return this.state.isLoading?Object(T.jsx)("div",{className:"sweet-loading",children:Object(T.jsx)(A.a,{css:P,size:50,color:"#123abc",loading:this.state.isLoading,speedMultiplier:1.5})}):Object(T.jsx)("div",{className:"animated fadeIn",children:Object(T.jsx)(g.a,{children:Object(T.jsxs)(p.a,{children:[Object(T.jsxs)(m.a,{children:[Object(T.jsxs)(x.a,{children:[Object(T.jsx)("i",{className:"fa fa-align-justify"})," Danh s\xe1ch d\u1ecbch v\u1ee5",Object(T.jsx)("div",{style:w.a.tags,children:Object(T.jsxs)(O.W,{children:[Object(T.jsx)(O.p,{sm:"12",lg:"12",children:Object(T.jsxs)(O.W,{children:[Object(T.jsx)(O.p,{sm:"12",lg:"6",children:Object(T.jsx)("div",{children:Object(T.jsx)(b.a,{style:w.a.searchInput,onChange:function(t){e.actionSearch(t,"key")},name:"key",value:i,placeholder:"T\u1eeb kh\xf3a"})})}),Object(T.jsx)(O.p,{sm:"12",lg:"6",children:Object(T.jsx)(O.d,{color:"primary",style:{width:"100%",marginTop:5},size:"sm",onClick:function(t){e.resetSearch()},children:"L\xe0m m\u1edbi t\xecm ki\u1ebfm"})})]})}),Object(T.jsx)(O.p,{sm:"12",lg:"12"})]})})]}),Object(T.jsx)(f.a,{children:Object(T.jsxs)("table",{ble:!0,className:"table table-hover table-outline mb-0 d-none d-sm-table",children:[Object(T.jsx)("thead",{className:"thead-light",children:Object(T.jsxs)("tr",{children:[Object(T.jsx)("th",{className:"text-center",children:"STT."}),Object(T.jsx)("th",{className:"text-center",children:"T\xean user"}),Object(T.jsx)("th",{className:"text-center",children:"T\xean s\u1ea3n ph\u1ea9m"}),Object(T.jsx)("th",{className:"text-center",children:"T\u1ed5ng \u0111i\u1ec3m"}),Object(T.jsx)("th",{className:"text-center",children:"Ng\xe0y t\u1ea1o"})]})}),Object(T.jsxs)("tbody",{children:[Object(T.jsx)("td",{colSpan:"10",hidden:this.state.hidden,className:"text-center",children:"Kh\xf4ng t\xecm th\u1ea5y d\u1eef li\u1ec7u"}),void 0!=a?a.map((function(e,t){return Object(T.jsxs)("tr",{children:[Object(T.jsx)("td",{className:"text-center",children:t+1}),Object(T.jsx)("td",{className:"text-center",children:e.user_id.name}),Object(T.jsx)("td",{className:"text-center",children:e.product_id.name}),Object(T.jsx)("td",{className:"text-center",children:e.total_point}),Object(T.jsx)("td",{className:"text-center",children:new Date(e.create_date).toLocaleDateString()+" "+new Date(e.create_date).toLocaleTimeString()})]},t)})):""]})]})})]}),Object(T.jsx)("div",{style:{float:"right"},children:Object(T.jsx)(v.a,{count:n.length,color:"primary",onChange:function(t,a){e.setState({data:n[a-1],indexPage:a-1})}})})]})})})}}]),a}(j.Component),P=Object(N.css)(n||(n=Object(i.a)(["\n  display: block;\n  margin: 0 auto;\n  border-color: red;\n"])));t.default=C},668:function(e,t,a){"use strict";t.a={pagination:{marginRight:"5px"},flexLabel:{width:100},flexOption:{width:300},a:{textDecoration:"none"},floatRight:{float:"right",marginTop:"3px"},spinner:{width:"30px"},center:{textAlign:"center"},tbody:{height:"380px",overflowY:"auto"},wh25:{width:"25%",float:"left",height:"80px"},w5:{width:"15%",float:"left",height:"80px"},wa10:{width:"5%",float:"left",height:"80px"},row:{float:"left",width:"100%"},success:{color:"green"},danger:{color:"red"},mgl5:{marginLeft:"5px"},tags:{float:"right",marginRight:"5px"},searchInput:{width:"190px",display:"inline-block"},userActive:{color:"green"},userPending:{color:"red"},nagemonNameCol:{width:"328px"},image:{width:"100px",height:"100px",borderRadius:"99999px"}}}}]);
//# sourceMappingURL=49.6f2efccc.chunk.js.map