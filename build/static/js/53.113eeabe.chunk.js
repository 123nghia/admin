(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[53],{1284:function(e,t,a){"use strict";a.r(t);var n,s=a(668),r=a(165),i=a(113),c=a.n(i),o=a(651),l=a(166),d=a(167),u=a(169),h=a(168),p=a(2),m=a(661),g=a(662),j=a(663),f=a(690),b=a(691),x=a(664),O=a(1305),v=a(1240),y=a(1241),w=a(1242),S=a(648),k=a(700),D=(a(659),a(649)),N=a(647),C=a(657),E=a.n(C),L=a(665),T=a(669),U=a.n(T),A=a(17),R=new Headers,P=localStorage.getItem("auth");R.append("Authorization","Bearer "+P),R.append("Content-Type","application/json");Object(k.a)((function(e){return{root:{"& > *":{marginTop:e.spacing(2)}}}}));var _=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).getData=Object(o.a)(c.a.mark((function e(){var t,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.setState({isLoading:!0}),e.next=3,E()({baseURL:D.a.BASE_URL,url:D.a.TYPE_REQUEST_LIST,method:"POST"});case 3:t=e.sent,n.pagination(t.data.data),n.setState({dataApi:t.data.data}),a=0,t.data.data.map((function(e){"Actived"==e.Status&&(a+=1)})),n.setState({isLoading:!1,totalActive:a});case 9:case"end":return e.stop()}}),e)}))),n.openDelete=function(e){n.setState({modalDelete:!n.state.modalDelete,delete:e})},n.state={data:[],key:"",activePage:1,page:1,itemsCount:0,limit:20,totalActive:0,modalCom:!1,viewingUser:{},communities:[],updated:"",dataApi:[],hidden:!1,action:"new",Value:"",Description:"",Status:"",modalDelete:!1,delete:null,arrPagination:[],indexPage:0,token:{Authorization:"Bearer ".concat(localStorage.getItem("token"))},isLoading:!1,type:localStorage.getItem("type"),isError:!1},n}return Object(d.a)(a,[{key:"componentWillMount",value:function(){"0"==this.state.type||"1"==this.state.type?this.setState({isError:!1}):this.setState({isError:!0})}},{key:"componentDidMount",value:function(){var e=Object(o.a)(c.a.mark((function e(){var t,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for("0"==this.state.type||"1"==this.state.type?this.getData():console.log(this.state.isError),t=JSON.parse(localStorage.getItem("url")),a=0;a<t.length;a++)t[a].url==window.location.hash&&1==t[a].isHidden&&(window.location.href="#/");case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"pagination",value:function(e){var t,a,n,s=[];for(t=0,a=e.length;t<a;t+=5)n=e.slice(t,t+5),s.push(n);0==s.length?this.setState({hidden:!1}):this.setState({hidden:!0}),this.setState({arrPagination:s,data:s[this.state.indexPage]})}},{key:"searchKey",value:function(e){if(this.setState({key:e}),""!=e){var t=[];this.state.dataApi.map((function(a){(a.Vale.toLocaleUpperCase().includes(e.toLocaleUpperCase())||a.Description.toLocaleUpperCase().includes(e.toLocaleUpperCase()))&&t.push(a)}));var a=0;t.map((function(e){"Actived"==e.Status&&(a+=1)})),this.setState({data:t,totalActive:a})}else{var n=0;this.state.dataApi.map((function(e){"Actived"==e.Status&&(n+=1)})),this.setState({data:this.state.dataApi,totalActive:n})}}},{key:"toggleModal",value:function(){var e=Object(o.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:"new"==t&&this.setState({modalCom:!this.state.modalCom,action:t,Value:"",Description:""});case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"onChange",value:function(e,t){this.setState(Object(r.a)({},e,t))}},{key:"addRoles",value:function(){var e=Object(o.a)(c.a.mark((function e(){var t,a,n,s,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.state,a=t.Value,n=t.Description,null!=a&&""!=a&&null!=n&&""!=n){e.next=4;break}return alert("Vui l\xf2ng nh\u1eadp \u0111\u1ea7y \u0111\u1ee7 tr\u01b0\u1eddng !!!"),e.abrupt("return");case 4:return s={Value:a,Description:n},this.setState({isLoading:!0}),e.next=8,E()({baseURL:D.a.BASE_URL,url:D.a.TYPE_REQUEST_ADD,method:"PUT",data:s});case 8:1==(r=e.sent).data.is_success?(this.getData(),this.setState({modalCom:!this.state.modalCom})):(alert(r.data.message),this.setState({isLoading:!1}));case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"openUpdate",value:function(){var e=Object(o.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.setState({modalCom:!this.state.modalCom,action:"update",Value:t.Value,Description:t.Description,id:t._id,Status:t.Status});case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"updateUser",value:function(){var e=Object(o.a)(c.a.mark((function e(){var t,a,n,s,r,i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.state,a=t.Value,n=t.Description,s=t.Status,null!=a&&""!=a&&null!=n&&""!=n){e.next=4;break}return alert("Vui l\xf2ng nh\u1eadp \u0111\u1ea7y \u0111\u1ee7 tr\u01b0\u1eddng !!!"),e.abrupt("return");case 4:return r={Value:a,Description:n,id:this.state.id,Status:s},this.setState({isLoading:!0}),e.next=8,E()({baseURL:D.a.BASE_URL,url:D.a.TYPE_REQUEST_UPDATE,method:"POST",data:r});case 8:1==(i=e.sent).data.is_success?(this.getData(),this.setState({modalCom:!this.state.modalCom})):(alert(i.data.message),this.setState({isLoading:!1}));case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"delete",value:function(){var e=Object(o.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({isLoading:!0}),e.next=3,E()({baseURL:D.a.BASE_URL,url:D.a.TYPE_REQUEST_DELETE,method:"DELETE",data:{id:this.state.delete._id}});case 3:1==(t=e.sent).data.is_success?(this.getData(),this.setState({modalDelete:!this.state.modalDelete,delete:null})):(alert(t.data.message),this.setState({isLoading:!1}));case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"inputChange",value:function(e){this.setState(Object(r.a)({},e.target.name,e.target.value))}},{key:"getBadge",value:function(e){switch(e){case"0":return"danger";case"1":return"success";default:return"primary"}}},{key:"getBadge_String",value:function(e){switch(e){case"0":return"danger";case"1":return"success";default:return"primary"}}},{key:"render",value:function(){var e=this,t=this.state,a=t.data,n=t.arrPagination,s=t.indexPage;return this.state.isError?Object(A.jsx)("div",{className:"sweet-loading",children:"B\u1ea1n kh\xf4ng c\xf3 \u0111\u1ee7 quy\u1ec1n \u0111\u1ec3 s\u1eed d\u1ee5ng ch\u1ee9c n\u0103ng n\xe0y !!! Vui l\xf2ng li\xean h\u1ec7 Admin \u0111\u1ec3 bi\u1ebft th\xeam chi ti\u1ebft"}):this.state.isLoading?Object(A.jsx)("div",{className:"sweet-loading",children:Object(A.jsx)(U.a,{css:M,size:50,color:"#123abc",loading:this.state.isLoading,speedMultiplier:1.5})}):Object(A.jsxs)("div",{className:"animated fadeIn",children:[Object(A.jsx)(g.a,{children:Object(A.jsxs)(j.a,{children:[Object(A.jsx)("p",{style:V.success,children:this.state.updated}),Object(A.jsx)("p",{style:V.danger,children:this.state.deleted}),Object(A.jsxs)(f.a,{children:[Object(A.jsxs)(b.a,{children:[Object(A.jsx)("i",{className:"fa fa-align-justify",children:"Qu\u1ea3n l\xfd lo\u1ea1i y\xeau c\u1ea7u"}),Object(A.jsx)("div",{style:V.tags,children:Object(A.jsx)(S.d,{outline:!0,color:"primary",style:V.floatRight,size:"sm",onClick:function(){var t=Object(o.a)(c.a.mark((function t(a){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.toggleModal("new");case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),children:"Th\xeam m\u1edbi"})})]}),Object(A.jsx)(x.a,{children:Object(A.jsxs)("table",{ble:!0,className:"table table-hover table-outline mb-0 d-none d-sm-table",children:[Object(A.jsx)("thead",{className:"thead-light",children:Object(A.jsxs)("tr",{children:[Object(A.jsx)("th",{className:"text-center",children:"STT."}),Object(A.jsx)("th",{className:"text-center",children:"Gi\xe1 tr\u1ecb"}),Object(A.jsx)("th",{className:"text-center",children:"M\xf4 t\u1ea3"}),Object(A.jsx)("th",{className:"text-center",children:"Ng\xe0y t\u1ea1o"}),Object(A.jsx)("th",{className:"text-center",children:"#"})]})}),Object(A.jsxs)("tbody",{children:[Object(A.jsx)("td",{colSpan:"10",hidden:this.state.hidden,className:"text-center",children:"Kh\xf4ng t\xecm th\u1ea5y d\u1eef li\u1ec7u"}),void 0!=a?a.map((function(t,a){return Object(A.jsxs)("tr",{children:[Object(A.jsx)("td",{className:"text-center",children:a+1}),Object(A.jsx)("td",{className:"text-center",children:t.Value}),Object(A.jsx)("td",{className:"text-center",children:t.Description}),Object(A.jsx)("td",{className:"text-center",children:new Date(t.Create_Date).toLocaleDateString()+" "+new Date(t.Create_Date).toLocaleTimeString()}),Object(A.jsxs)("td",{className:"text-center",children:[Object(A.jsx)(S.d,{style:V.mgl5,outline:!0,color:"primary",size:"sm",onClick:function(){var a=Object(o.a)(c.a.mark((function a(n){return c.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.openUpdate(t);case 2:return a.abrupt("return",a.sent);case 3:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}(),children:Object(A.jsx)(m.a,{name:"cilPencil"})})," ",Object(A.jsx)(S.d,{outline:!0,color:"danger",size:"sm",onClick:function(a){e.openDelete(t)},children:Object(A.jsx)(m.a,{name:"cilTrash"})})]})]},a)})):""]})]})})]}),1==n.length?"":Object(A.jsx)("div",{style:{float:"right",marginRight:"10px",padding:"10px"},children:Object(A.jsx)("tr",{style:V.row,children:n.map((function(t,a){return Object(A.jsx)("td",{children:Object(A.jsx)(S.d,{style:V.pagination,color:a==s?"primary":"danger",onClick:function(t){e.setState({data:n[a],indexPage:a})},children:a+1})})}))})})]})}),Object(A.jsxs)(O.a,{isOpen:this.state.modalCom,className:this.props.className,children:[Object(A.jsx)(v.a,{children:"new"==this.state.action?"T\u1ea1o m\u1edbi":"C\u1eadp nh\u1eadt"}),Object(A.jsxs)(y.a,{children:[Object(A.jsx)(N.a,{field:"Value",label:"Nh\u1eadp gi\xe1 tr\u1ecb",value:this.state.Value,placeholder:"Nh\u1eadp gi\xe1 tr\u1ecb",onChange:function(t){return e.onChange("Value",t.target.value)}}),Object(A.jsx)("label",{className:"control-label",children:"M\xf4 t\u1ea3"}),Object(A.jsx)(S.gb,{name:"Description",rows:"9",onChange:function(t){e.setState({Description:t.target.value})},placeholder:"M\xf4 t\u1ea3"})]}),Object(A.jsxs)(w.a,{children:[Object(A.jsx)(S.d,{color:"primary",onClick:function(t){"new"===e.state.action?e.addRoles():e.updateUser()},disabled:this.state.isLoading,children:"L\u01b0u"})," ",Object(A.jsx)(S.d,{color:"secondary",onClick:function(t){return e.toggleModal("new")},children:"\u0110\xf3ng"})]})]}),Object(A.jsxs)(O.a,{isOpen:this.state.modalDelete,toggle:function(t){return e.setState({modalDelete:!e.state.modalDelete,delete:null})},className:this.props.className,children:[Object(A.jsx)(v.a,{toggle:function(t){return e.setState({modalDelete:!e.state.modalDelete,delete:null})},children:"Xo\xe1"}),Object(A.jsx)(y.a,{children:Object(A.jsx)("label",{htmlFor:"tag",children:"X\xe1c nh\u1eadn x\xf3a !!!"})}),Object(A.jsxs)(w.a,{children:[Object(A.jsx)(S.d,{color:"primary",onClick:function(t){return e.delete()},disabled:this.state.isLoading,children:"Xo\xe1"})," ",Object(A.jsx)(S.d,{color:"secondary",onClick:function(t){return e.setState({modalDelete:!e.state.modalDelete,delete:null})},children:"\u0110\xf3ng"})]})]})]})}}]),a}(p.Component),M=Object(L.css)(n||(n=Object(s.a)(["\n  display: block;\n  margin: 0 auto;\n  border-color: red;\n"]))),V={pagination:{marginRight:"5px"},flexLabel:{width:100},flexOption:{width:300},a:{textDecoration:"none"},floatRight:{float:"right",marginTop:"3px"},spinner:{width:"30px"},center:{textAlign:"center"},tbody:{height:"380px",overflowY:"auto"},wh25:{width:"25%",float:"left",height:"80px"},w5:{width:"15%",float:"left",height:"80px"},wa10:{width:"5%",float:"left",height:"80px"},row:{float:"left",width:"100%"},success:{color:"green"},danger:{color:"red"},mgl5:{marginLeft:"5px"},tags:{float:"right",marginRight:"5px",width:"250px"},searchInput:{width:"190px",display:"inline-block"},userActive:{color:"green"},userPending:{color:"red"},nagemonNameCol:{width:"328px"},image:{width:"100px",height:"100px",borderRadius:"99999px"}};t.default=_},647:function(e,t,a){"use strict";a(2);var n=a(638),s=a.n(n),r=a(17),i=function(e){var t=e.field,a=e.value,n=e.label,i=e.error,c=e.type,o=e.onChange,l=e.checkUserExists,d=e.readOnly,u=e.placeholder,h=e.onClick;return Object(r.jsxs)("div",{className:s()("form-group",{"has-error":i}),children:[Object(r.jsx)("label",{className:"control-label",children:n}),Object(r.jsx)("input",{onChange:o,onClick:h,onBlur:l,value:a,type:c,name:t,placeholder:u,readOnly:d,className:"form-control"}),i&&Object(r.jsx)("span",{className:"help-block",children:i})]})};i.defaultProps={type:"text"},t.a=i},662:function(e,t,a){"use strict";var n=a(12),s=a(29),r=a(2),i=a.n(r),c=a(64),o=a.n(c),l=a(638),d=a.n(l),u=a(639),h=o.a.oneOfType([o.a.number,o.a.string]),p={tag:u.n,noGutters:o.a.bool,className:o.a.string,cssModule:o.a.object,form:o.a.bool,xs:h,sm:h,md:h,lg:h,xl:h},m={tag:"div",widths:["xs","sm","md","lg","xl"]},g=function(e){var t=e.className,a=e.cssModule,r=e.noGutters,c=e.tag,o=e.form,l=e.widths,h=Object(s.a)(e,["className","cssModule","noGutters","tag","form","widths"]),p=[];l.forEach((function(t,a){var n=e[t];if(delete h[t],n){var s=!a;p.push(s?"row-cols-"+n:"row-cols-"+t+"-"+n)}}));var m=Object(u.j)(d()(t,r?"no-gutters":null,o?"form-row":"row",p),a);return i.a.createElement(c,Object(n.a)({},h,{className:m}))};g.propTypes=p,g.defaultProps=m,t.a=g},663:function(e,t,a){"use strict";var n=a(12),s=a(29),r=a(2),i=a.n(r),c=a(64),o=a.n(c),l=a(638),d=a.n(l),u=a(639),h=o.a.oneOfType([o.a.number,o.a.string]),p=o.a.oneOfType([o.a.bool,o.a.number,o.a.string,o.a.shape({size:o.a.oneOfType([o.a.bool,o.a.number,o.a.string]),order:h,offset:h})]),m={tag:u.n,xs:p,sm:p,md:p,lg:p,xl:p,className:o.a.string,cssModule:o.a.object,widths:o.a.array},g={tag:"div",widths:["xs","sm","md","lg","xl"]},j=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},f=function(e){var t=e.className,a=e.cssModule,r=e.widths,c=e.tag,o=Object(s.a)(e,["className","cssModule","widths","tag"]),l=[];r.forEach((function(t,n){var s=e[t];if(delete o[t],s||""===s){var r=!n;if(Object(u.h)(s)){var i,c=r?"-":"-"+t+"-",h=j(r,t,s.size);l.push(Object(u.j)(d()(((i={})[h]=s.size||""===s.size,i["order"+c+s.order]=s.order||0===s.order,i["offset"+c+s.offset]=s.offset||0===s.offset,i)),a))}else{var p=j(r,t,s);l.push(p)}}})),l.length||l.push("col");var h=Object(u.j)(d()(t,l),a);return i.a.createElement(c,Object(n.a)({},o,{className:h}))};f.propTypes=m,f.defaultProps=g,t.a=f},664:function(e,t,a){"use strict";var n=a(12),s=a(29),r=a(2),i=a.n(r),c=a(64),o=a.n(c),l=a(638),d=a.n(l),u=a(639),h={tag:u.n,className:o.a.string,cssModule:o.a.object,innerRef:o.a.oneOfType([o.a.object,o.a.string,o.a.func])},p=function(e){var t=e.className,a=e.cssModule,r=e.innerRef,c=e.tag,o=Object(s.a)(e,["className","cssModule","innerRef","tag"]),l=Object(u.j)(d()(t,"card-body"),a);return i.a.createElement(c,Object(n.a)({},o,{className:l,ref:r}))};p.propTypes=h,p.defaultProps={tag:"div"},t.a=p},700:function(e,t,a){"use strict";var n=a(12),s=a(1302),r=a(653);t.a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(s.a)(e,Object(n.a)({defaultTheme:r.a},t))}}}]);
//# sourceMappingURL=53.113eeabe.chunk.js.map