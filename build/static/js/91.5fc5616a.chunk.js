(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[91],{1414:function(e,t,a){"use strict";a.r(t);var n,s=a(679),r=a(171),i=a(114),c=a.n(i),o=a(668),l=a(167),d=a(168),u=a(170),h=a(169),p=a(2),g=a(674),m=a(675),f=a(703),j=a(704),b=a(676),x=a(655),O=a(672),w=(a(670),a(694),a(667)),S=a(669),v=a.n(S),_=a(654),y=a(661),P=a.n(y),C=a(17),N=new Headers,k=localStorage.getItem("auth");N.append("Authorization","Bearer "+k),N.append("Content-Type","application/json");var A=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).getData=Object(o.a)(c.a.mark((function e(){var t,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.setState({isLoading:!0}),e.next=3,v()({baseURL:w.a.BASE_URL,url:w.a.PLUGIN_GET_USER_BYID,method:"POST",headers:n.state.token});case 3:t=e.sent,a=t.data.data,n.setState({dataApi:a,data:a,currentPassword:a.Password,isLoading:!1,current_slug:null==a.Company_Id||void 0==a.Company_Id?null:a.Company_Id.Slug,companyID:null==a.Company_Id||void 0==a.Company_Id?null:a.Company_Id._id,Email:a.Email,Name:a.Name,Phone:a.Phone,Address:a.Address,UserName:a.UserName,Message_Code:a.Message_Code,isDisable:!0});case 6:case"end":return e.stop()}}),e)}))),n.getPackageName=function(){var e=Object(o.a)(c.a.mark((function e(t){var a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v()({baseURL:w.a.BASE_URL,url:w.a.PLUGIN_DATA_PACKAGE,method:"POST",data:{package_id:t}});case 2:return a=e.sent,e.abrupt("return",a.data.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.state={data:[],updated:"",dataApi:[],delete:null,hidden:!0,token:{Authorization:"Bearer ".concat(localStorage.getItem("token"))},role:localStorage.getItem("role"),type:localStorage.getItem("type"),company_id:localStorage.getItem("user"),current_slug:"",companyID:"",arrTotalPackage:[],isChange:!0,isChangeSlug:!0,currentPassword:"",isLoading:!1,isDisable:!0,Email:"",Name:"",Phone:"",Address:"",UserName:"",Message_Code:""},n}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(o.a)(c.a.mark((function e(){var t,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(this.getData(),t=JSON.parse(localStorage.getItem("url")),a=0;a<t.length;a++)"#"+t[a].to==window.location.hash&&1==t[a].hidden&&(window.location.href="#/");case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"onChange",value:function(e,t){this.setState(Object(r.a)({},e,t))}},{key:"openUpdate",value:function(e){this.setState(Object(r.a)({},e,!this.state[e]))}},{key:"inputChange",value:function(e){this.setState(Object(r.a)({},e.target.name,e.target.value))}},{key:"updatePassword",value:function(){var e=Object(o.a)(c.a.mark((function e(t,a){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v()({baseURL:w.a.BASE_URL,url:w.a.PLUGIN_UPDATE_PASSWORD,method:"POST",data:{id:t,new_password:a}});case 2:1==(n=e.sent).data.is_success?(this.getData(),this.setState({isChange:!0})):(alert(n.data.message),this.setState({isLoading:!1}));case 4:case"end":return e.stop()}}),e,this)})));return function(t,a){return e.apply(this,arguments)}}()},{key:"updateSlug",value:function(){var e=Object(o.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v()({baseURL:w.a.BASE_URL,url:w.a.UPDATE_SLUG,method:"POST",data:{id:this.state.companyID,Slug:this.state.current_slug}});case 2:1==(t=e.sent).data.is_success?(this.getData(),this.setState({isChangeSlug:!0})):(alert(t.data.message),this.setState({isChangeSlug:!1}));case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"updateCompany",value:function(){var e=Object(o.a)(c.a.mark((function e(){var t,a,n,s,r,i,o,l,d,u;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.state,a=t.Email,n=t.Name,s=t.Phone,r=t.Address,i=t.UserName,o=t.data,l=t.Message_Code,null!=n&&""!=n&&null!=s&&""!=s&&null!=i&&""!=i){e.next=4;break}return alert("Vui l\xf2ng nh\u1eadp \u0111\u1ea7y \u0111\u1ee7 tr\u01b0\u1eddng !!!"),e.abrupt("return");case 4:return d={isHash:!1,Name:""==n?o.Name:n,Email:""==a?o.Email:a,Phone:""==s?o.Phone:s,Address:""==r?o.Address:r,UserName:""==i?o.UserName:i,Message_Code:""==l||null==l?o.Message_Code:l,Password:o.Password,Status:o.Status,id:o._id},this.setState({isLoading:!0}),e.next=8,v()({baseURL:w.a.BASE_URL,url:w.a.PLUGIN_UPDATE_USER_COMPANY,method:"POST",data:d});case 8:1==(u=e.sent).data.is_success?this.getData():(alert(u.data.message),this.setState({isLoading:!1}));case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,a=(t.data,t.current_slug,t.isChange,t.currentPassword,t.isChangeSlug,t.type),n=t.isDisable;t.Email,t.Name,t.Phone,t.Address,t.UserName,t.Message_Code;return this.state.isLoading?Object(C.jsx)("div",{className:"sweet-loading",children:Object(C.jsx)(P.a,{css:U,size:50,color:"#123abc",loading:this.state.isLoading,speedMultiplier:1.5})}):Object(C.jsx)("div",{className:"animated fadeIn",children:Object(C.jsx)(g.a,{children:Object(C.jsxs)(m.a,{children:[Object(C.jsx)("p",{style:L.success,children:this.state.updated}),Object(C.jsx)("p",{style:L.danger,children:this.state.deleted}),Object(C.jsxs)(f.a,{children:[Object(C.jsx)(j.a,{children:"L\u1ef0A CH\u1eccN K\u1ebeT Q\u1ee6A KHI RECOMEND S\u1ea2N PH\u1ea8M THEO NH\xd3M S\u1ea2N PH\u1ea8M"}),Object(C.jsx)(b.a,{children:Object(C.jsx)(x.W,{children:Object(C.jsxs)(x.o,{sm:"12",lg:"12",children:[Object(C.jsxs)(x.W,{children:[Object(C.jsx)(x.o,{sm:"12",lg:"10",children:Object(C.jsx)(x.M,{children:Object(C.jsx)("strong",{children:"DANH S\xc1CH NH\xd3M S\u1ea2N PH\u1ea8M THEO PH\xc2N LO\u1ea0I"})})}),"0"==a||"1"==a?"":Object(C.jsx)(x.o,{sm:"12",lg:"2",children:Object(C.jsx)(x.hb,{content:"Xem chi ti\u1ebft \u0111\u01a1n h\xe0ng",children:n?Object(C.jsxs)(x.d,{outline:!0,color:"info",size:"xm",onClick:function(){var t=Object(o.a)(c.a.mark((function t(a){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.setState({isDisable:!n});case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),children:[Object(C.jsx)(O.a,{name:"cil-pencil"})," C\u1eadp nh\u1eadt"]}):Object(C.jsxs)(x.d,{outline:!0,color:"info",size:"sm",onClick:function(){var t=Object(o.a)(c.a.mark((function t(a){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.updateCompany();case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),children:[Object(C.jsx)(O.a,{name:"cil-pencil"})," X\xe1c nh\u1eadn c\u1eadp nh\u1eadt"]})})})]}),Object(C.jsx)(x.W,{children:Object(C.jsx)(x.o,{sm:"12",lg:"12"})})]})})})]})]})})})}}]),a}(p.Component),U=Object(_.css)(n||(n=Object(s.a)(["\n  display: block;\n  margin: 0 auto;\n  border-color: red;\n"]))),L={datePicker:{marginBottom:20},wa10:{width:"5%",float:"left",height:"80px"},pagination:{marginRight:"5px"},flexLabel:{width:100},flexOption:{width:200,margin:"1px"},a:{textDecoration:"none"},floatRight:{float:"right",marginTop:"3px"},spinner:{width:"30px"},center:{textAlign:"center"},tbody:{height:"380px",overflowY:"auto"},wh12:{width:"10%",float:"left",height:"80px"},wh15:{width:"15%",float:"left",height:"80px"},w5:{width:"12%",float:"left",height:"80px"},row:{float:"left",width:"100%"},success:{color:"green"},danger:{color:"red"},mgl5:{marginLeft:"5px"},tags:{float:"right",marginRight:"5px"},searchInput:{width:"100%",display:"inline-block",margin:"1px"},userActive:{color:"green"},userPending:{color:"red"},nagemonNameCol:{width:"328px"},image:{width:"100px",height:"100px",borderRadius:"99999px"}};t.default=A}}]);
//# sourceMappingURL=91.5fc5616a.chunk.js.map