(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[50],{1286:function(e,t,a){"use strict";a.r(t);var n,s=a(668),i=a(165),c=a(113),r=a.n(c),o=a(651),l=a(166),d=a(167),u=a(169),h=a(168),p=a(2),f=(a(661),a(662)),g=a(663),b=a(690),j=a(691),m=a(666),x=a(664),v=a(685),O=a(648),y=a(700),S=(a(659),a(649)),w=a(657),k=a.n(w),N=a(665),C=a(669),T=a.n(C),R=a(17),z=new Headers,L=localStorage.getItem("auth");z.append("Authorization","Bearer "+L),z.append("Content-Type","application/json");Object(y.a)((function(e){return{root:{"& > *":{marginTop:e.spacing(2)}}}}));var A=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).getData=Object(o.a)(r.a.mark((function e(){var t,a,s;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.setState({isLoading:!0}),e.next=3,k()({baseURL:S.a.BASE_URL,url:S.a.LIST_CONTACT_CUSTOMER,method:"POST"});case 3:t=e.sent,a=t.data.data,n.pagination(a),console.log(a),n.setState({dataApi:a}),s=0,a.map((function(e){"Actived"==e.Status&&(s+=1)})),n.setState({isLoading:!1,totalActive:s});case 11:case"end":return e.stop()}}),e)}))),n.openUpdateStatus=function(){var e=Object(o.a)(r.a.mark((function e(t){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.setState({isLoading:!0}),e.next=3,k()({baseURL:S.a.BASE_URL,url:S.a.UPDATE_CONTACT_STATUS,method:"DELETE",data:{id:t._id,Status:"1"}});case 3:1==(a=e.sent).data.is_success?n.getData():(alert(a.data.message),n.setState({isLoading:!1}));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.state={data:[],key:"",activePage:1,page:1,itemsCount:0,limit:20,totalActive:0,modalCom:!1,viewingUser:{},communities:[],updated:"",dataApi:[],hidden:!1,action:"new",Value:"",Description:"",Status:"",modalDelete:!1,delete:null,arrPagination:[],indexPage:0,token:{Authorization:"Bearer ".concat(localStorage.getItem("token"))},isLoading:!1,type:localStorage.getItem("type"),isError:!1},n}return Object(d.a)(a,[{key:"componentWillMount",value:function(){"0"==this.state.type||"1"==this.state.type?this.setState({isError:!1}):this.setState({isError:!0})}},{key:"componentDidMount",value:function(){var e=Object(o.a)(r.a.mark((function e(){var t,a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(this.getData(),t=JSON.parse(localStorage.getItem("url")),a=0;a<t.length;a++)t[a].url==window.location.hash&&1==t[a].isHidden&&(window.location.href="#/");case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"pagination",value:function(e){var t,a,n,s=[];for(t=0,a=e.length;t<a;t+=5)n=e.slice(t,t+5),s.push(n);0==s.length?this.setState({hidden:!1}):this.setState({hidden:!0}),this.setState({arrPagination:s,data:s[this.state.indexPage]})}},{key:"searchKey",value:function(){var e=this.state,t=e.indexPage,a=e.key;if(""!=a){var n=[];this.state.dataApi.map((function(e){(e.Name.toLocaleUpperCase().includes(a.toLocaleUpperCase())||e.Phone.toLocaleUpperCase().includes(a.toLocaleUpperCase()))&&n.push(e)}));var s=0;n.map((function(e){"Actived"==e.Status&&(s+=1)})),this.setState({data:n,totalActive:s})}else{var i=0;this.state.dataApi.map((function(e){"Actived"==e.Status&&(i+=1)})),this.setState({data:this.state.arrPagination[t],totalActive:i})}}},{key:"actionSearch",value:function(e,t){var a=this;this.setState(Object(i.a)({},t,e.target.value),(function(){a.searchKey()}))}},{key:"resetSearch",value:function(){var e=this;this.setState({key:""},(function(){e.searchKey()}))}},{key:"onChange",value:function(e,t){this.setState(Object(i.a)({},e,t))}},{key:"inputChange",value:function(e){this.setState(Object(i.a)({},e.target.name,e.target.value))}},{key:"getBadge",value:function(e){switch(e){case"0":return"danger";case"1":return"success";default:return"primary"}}},{key:"getBadge_String",value:function(e){switch(e){case"0":return"\u0110ang ch\u1edd sale g\u1ecdi";case"1":return"\u0110\xe3 g\u1ecdi";default:return"primary"}}},{key:"render",value:function(){var e=this,t=this.state,a=t.data,n=t.arrPagination,s=t.indexPage,i=t.key;return this.state.isError?Object(R.jsx)("div",{className:"sweet-loading",children:"B\u1ea1n kh\xf4ng c\xf3 \u0111\u1ee7 quy\u1ec1n \u0111\u1ec3 s\u1eed d\u1ee5ng ch\u1ee9c n\u0103ng n\xe0y !!! Vui l\xf2ng li\xean h\u1ec7 Admin \u0111\u1ec3 bi\u1ebft th\xeam chi ti\u1ebft"}):this.state.isLoading?Object(R.jsx)("div",{className:"sweet-loading",children:Object(R.jsx)(T.a,{css:P,size:50,color:"#123abc",loading:this.state.isLoading,speedMultiplier:1.5})}):Object(R.jsx)("div",{className:"animated fadeIn",children:Object(R.jsx)(f.a,{children:Object(R.jsxs)(g.a,{children:[Object(R.jsx)("p",{style:E.success,children:this.state.updated}),Object(R.jsx)("p",{style:E.danger,children:this.state.deleted}),Object(R.jsxs)(b.a,{children:[Object(R.jsxs)(j.a,{children:[Object(R.jsx)("i",{className:"fa fa-align-justify",children:" Danh s\xe1ch li\xean h\u1ec7"}),Object(R.jsx)("div",{style:E.tags,children:Object(R.jsx)(O.W,{children:Object(R.jsx)(O.o,{sm:"12",lg:"12",children:Object(R.jsxs)(O.W,{children:[Object(R.jsx)(O.o,{sm:"12",lg:"6",children:Object(R.jsx)("div",{children:Object(R.jsx)(m.a,{style:E.searchInput,onChange:function(t){e.actionSearch(t,"key")},name:"key",value:i,placeholder:"T\u1eeb kh\xf3a"})})}),Object(R.jsx)(O.o,{sm:"12",lg:"6",children:Object(R.jsx)(O.d,{color:"primary",style:{width:"100%",marginTop:5},size:"sm",onClick:function(t){e.resetSearch()},children:"L\xe0m m\u1edbi t\xecm ki\u1ebfm"})})]})})})})]}),Object(R.jsx)(x.a,{children:Object(R.jsxs)("table",{ble:!0,className:"table table-hover table-outline mb-0 d-none d-sm-table",children:[Object(R.jsx)("thead",{className:"thead-light",children:Object(R.jsxs)("tr",{children:[Object(R.jsx)("th",{className:"text-center",children:"STT."}),Object(R.jsx)("th",{className:"text-center",children:"H\u1ecd v\xe0 t\xean"}),Object(R.jsx)("th",{className:"text-center",children:"S\u1ed1 \u0111i\u1ec7n tho\u1ea1i"}),Object(R.jsx)("th",{className:"text-center",children:"Tr\u1ea1ng th\xe1i"}),Object(R.jsx)("th",{className:"text-center",children:"Lo\u1ea1i y\xeau c\u1ea7u"}),Object(R.jsx)("th",{className:"text-center",children:"Ng\xe0y t\u1ea1o"}),Object(R.jsx)("th",{className:"text-center",children:"#"})]})}),Object(R.jsxs)("tbody",{children:[Object(R.jsx)("td",{colSpan:"10",hidden:this.state.hidden,className:"text-center",children:"Kh\xf4ng t\xecm th\u1ea5y d\u1eef li\u1ec7u"}),void 0!=a?a.map((function(t,a){return Object(R.jsxs)("tr",{children:[Object(R.jsx)("td",{className:"text-center",children:a+1}),Object(R.jsx)("td",{className:"text-center",children:t.Name}),Object(R.jsx)("td",{className:"text-center",children:t.Phone}),Object(R.jsx)("td",{className:"text-center",children:Object(R.jsx)(O.a,{color:e.getBadge(t.Status),children:e.getBadge_String(t.Status)})}),Object(R.jsx)("td",{className:"text-center",children:t.Type_Request}),Object(R.jsx)("td",{className:"text-center",children:new Date(t.Create_Date).toLocaleDateString()+" "+new Date(t.Create_Date).toLocaleTimeString()}),Object(R.jsx)("td",{className:"text-center",children:"0"==t.Status?Object(R.jsx)(v.a,{outline:!0,color:"danger",size:"sm",onClick:function(a){e.openUpdateStatus(t)},children:"Ch\u01b0a g\u1ecdi"}):Object(R.jsx)(v.a,{outline:!0,color:"success",size:"sm",onClick:function(e){},children:"\u0110\xe3 g\u1ecdi"})})]},a)})):""]})]})})]}),1==n.length?"":Object(R.jsx)("div",{style:{float:"right",marginRight:"10px",padding:"10px"},children:Object(R.jsx)("tr",{style:E.row,children:n.map((function(t,a){return Object(R.jsx)("td",{children:Object(R.jsx)(O.d,{style:E.pagination,color:a==s?"primary":"danger",onClick:function(t){e.setState({data:n[a],indexPage:a})},children:a+1})})}))})})]})})})}}]),a}(p.Component),P=Object(N.css)(n||(n=Object(s.a)(["\n  display: block;\n  margin: 0 auto;\n  border-color: red;\n"]))),E={pagination:{marginRight:"5px"},flexLabel:{width:100},flexOption:{width:300},a:{textDecoration:"none"},floatRight:{float:"right",marginTop:"3px"},spinner:{width:"30px"},center:{textAlign:"center"},tbody:{height:"380px",overflowY:"auto"},wh25:{width:"25%",float:"left",height:"80px"},w5:{width:"15%",float:"left",height:"80px"},wa10:{width:"5%",float:"left",height:"80px"},row:{float:"left",width:"100%"},success:{color:"green"},danger:{color:"red"},mgl5:{marginLeft:"5px"},tags:{float:"right",marginRight:"5px",width:"500px"},searchInput:{width:"190px",display:"inline-block"},userActive:{color:"green"},userPending:{color:"red"},nagemonNameCol:{width:"328px"},image:{width:"100px",height:"100px",borderRadius:"99999px"}};t.default=A},662:function(e,t,a){"use strict";var n=a(12),s=a(29),i=a(2),c=a.n(i),r=a(64),o=a.n(r),l=a(638),d=a.n(l),u=a(639),h=o.a.oneOfType([o.a.number,o.a.string]),p={tag:u.n,noGutters:o.a.bool,className:o.a.string,cssModule:o.a.object,form:o.a.bool,xs:h,sm:h,md:h,lg:h,xl:h},f={tag:"div",widths:["xs","sm","md","lg","xl"]},g=function(e){var t=e.className,a=e.cssModule,i=e.noGutters,r=e.tag,o=e.form,l=e.widths,h=Object(s.a)(e,["className","cssModule","noGutters","tag","form","widths"]),p=[];l.forEach((function(t,a){var n=e[t];if(delete h[t],n){var s=!a;p.push(s?"row-cols-"+n:"row-cols-"+t+"-"+n)}}));var f=Object(u.j)(d()(t,i?"no-gutters":null,o?"form-row":"row",p),a);return c.a.createElement(r,Object(n.a)({},h,{className:f}))};g.propTypes=p,g.defaultProps=f,t.a=g},663:function(e,t,a){"use strict";var n=a(12),s=a(29),i=a(2),c=a.n(i),r=a(64),o=a.n(r),l=a(638),d=a.n(l),u=a(639),h=o.a.oneOfType([o.a.number,o.a.string]),p=o.a.oneOfType([o.a.bool,o.a.number,o.a.string,o.a.shape({size:o.a.oneOfType([o.a.bool,o.a.number,o.a.string]),order:h,offset:h})]),f={tag:u.n,xs:p,sm:p,md:p,lg:p,xl:p,className:o.a.string,cssModule:o.a.object,widths:o.a.array},g={tag:"div",widths:["xs","sm","md","lg","xl"]},b=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},j=function(e){var t=e.className,a=e.cssModule,i=e.widths,r=e.tag,o=Object(s.a)(e,["className","cssModule","widths","tag"]),l=[];i.forEach((function(t,n){var s=e[t];if(delete o[t],s||""===s){var i=!n;if(Object(u.h)(s)){var c,r=i?"-":"-"+t+"-",h=b(i,t,s.size);l.push(Object(u.j)(d()(((c={})[h]=s.size||""===s.size,c["order"+r+s.order]=s.order||0===s.order,c["offset"+r+s.offset]=s.offset||0===s.offset,c)),a))}else{var p=b(i,t,s);l.push(p)}}})),l.length||l.push("col");var h=Object(u.j)(d()(t,l),a);return c.a.createElement(r,Object(n.a)({},o,{className:h}))};j.propTypes=f,j.defaultProps=g,t.a=j},664:function(e,t,a){"use strict";var n=a(12),s=a(29),i=a(2),c=a.n(i),r=a(64),o=a.n(r),l=a(638),d=a.n(l),u=a(639),h={tag:u.n,className:o.a.string,cssModule:o.a.object,innerRef:o.a.oneOfType([o.a.object,o.a.string,o.a.func])},p=function(e){var t=e.className,a=e.cssModule,i=e.innerRef,r=e.tag,o=Object(s.a)(e,["className","cssModule","innerRef","tag"]),l=Object(u.j)(d()(t,"card-body"),a);return c.a.createElement(r,Object(n.a)({},o,{className:l,ref:i}))};p.propTypes=h,p.defaultProps={tag:"div"},t.a=p},666:function(e,t,a){"use strict";var n=a(12),s=a(29),i=a(645),c=a(35),r=a(2),o=a.n(r),l=a(64),d=a.n(l),u=a(638),h=a.n(u),p=a(639),f={children:d.a.node,type:d.a.string,size:d.a.oneOfType([d.a.number,d.a.string]),bsSize:d.a.string,valid:d.a.bool,invalid:d.a.bool,tag:p.n,innerRef:d.a.oneOfType([d.a.object,d.a.func,d.a.string]),plaintext:d.a.bool,addon:d.a.bool,className:d.a.string,cssModule:d.a.object},g=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(i.a)(a)),a.focus=a.focus.bind(Object(i.a)(a)),a}Object(c.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.focus=function(){this.ref&&this.ref.focus()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,i=e.type,c=e.bsSize,r=e.valid,l=e.invalid,d=e.tag,u=e.addon,f=e.plaintext,g=e.innerRef,b=Object(s.a)(e,["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"]),j=["radio","checkbox"].indexOf(i)>-1,m=new RegExp("\\D","g"),x=d||("select"===i||"textarea"===i?i:"input"),v="form-control";f?(v+="-plaintext",x=d||"input"):"file"===i?v+="-file":"range"===i?v+="-range":j&&(v=u?null:"form-check-input"),b.size&&m.test(b.size)&&(Object(p.p)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),c=b.size,delete b.size);var O=Object(p.j)(h()(t,l&&"is-invalid",r&&"is-valid",!!c&&"form-control-"+c,v),a);return("input"===x||d&&"function"===typeof d)&&(b.type=i),b.children&&!f&&"select"!==i&&"string"===typeof x&&"select"!==x&&(Object(p.p)('Input with a type of "'+i+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete b.children),o.a.createElement(x,Object(n.a)({},b,{ref:g,className:O,"aria-invalid":l}))},t}(o.a.Component);g.propTypes=f,g.defaultProps={type:"text"},t.a=g},685:function(e,t,a){"use strict";var n=a(12),s=a(29),i=a(645),c=a(35),r=a(2),o=a.n(r),l=a(64),d=a.n(l),u=a(638),h=a.n(u),p=a(639),f={active:d.a.bool,"aria-label":d.a.string,block:d.a.bool,color:d.a.string,disabled:d.a.bool,outline:d.a.bool,tag:p.n,innerRef:d.a.oneOfType([d.a.object,d.a.func,d.a.string]),onClick:d.a.func,size:d.a.string,children:d.a.node,className:d.a.string,cssModule:d.a.object,close:d.a.bool},g=function(e){function t(t){var a;return(a=e.call(this,t)||this).onClick=a.onClick.bind(Object(i.a)(a)),a}Object(c.a)(t,e);var a=t.prototype;return a.onClick=function(e){if(!this.props.disabled)return this.props.onClick?this.props.onClick(e):void 0;e.preventDefault()},a.render=function(){var e=this.props,t=e.active,a=e["aria-label"],i=e.block,c=e.className,r=e.close,l=e.cssModule,d=e.color,u=e.outline,f=e.size,g=e.tag,b=e.innerRef,j=Object(s.a)(e,["active","aria-label","block","className","close","cssModule","color","outline","size","tag","innerRef"]);r&&"undefined"===typeof j.children&&(j.children=o.a.createElement("span",{"aria-hidden":!0},"\xd7"));var m="btn"+(u?"-outline":"")+"-"+d,x=Object(p.j)(h()(c,{close:r},r||"btn",r||m,!!f&&"btn-"+f,!!i&&"btn-block",{active:t,disabled:this.props.disabled}),l);j.href&&"button"===g&&(g="a");var v=r?"Close":null;return o.a.createElement(g,Object(n.a)({type:"button"===g&&j.onClick?"button":void 0},j,{className:x,ref:b,onClick:this.onClick,"aria-label":a||v}))},t}(o.a.Component);g.propTypes=f,g.defaultProps={color:"secondary",tag:"button"},t.a=g},700:function(e,t,a){"use strict";var n=a(12),s=a(1302),i=a(653);t.a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(s.a)(e,Object(n.a)({defaultTheme:i.a},t))}}}]);
//# sourceMappingURL=50.6e834fdd.chunk.js.map