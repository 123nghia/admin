(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[73],{1305:function(e,t,a){"use strict";a.r(t);var n=a(165),r=a(166),c=a(168),i=a(167),o=a(2),s=a(647),u=(a(659),a(654)),l=a.n(u),p=a(648),d=(a(24),a(696)),h=a(742),g=a(17),j=(Object(h.getStyle)("success"),Object(h.getStyle)("info"),Object(h.getStyle)("danger"),a(113)),m=a.n(j),f=a(651),b=(a(174),a(684)),y=new Headers,O=localStorage.getItem("auth");y.append("Authorization","Bearer "+O),y.append("Content-Type","application/json");o.Component;var v=new Headers,x=localStorage.getItem("auth");v.append("Authorization","Bearer "+x),v.append("Content-Type","application/json");o.Component;var _,k=a(169),S=a(667),w=a(1168),I=a(664),A=a(668),C=a.n(A),L=new Headers,D=localStorage.getItem("auth");L.append("Authorization","Bearer "+D),L.append("Content-Type","application/json");var T=function(e){Object(c.a)(a,e);var t=Object(i.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).state={company_name:"",company_slug:"",package_name:"",package_time:"",package_unit:"",array_feature:[],company_id:localStorage.getItem("user"),token:{Authorization:"Bearer ".concat(localStorage.getItem("token"))},isLoading:!1},r}return Object(r.a)(a,[{key:"componentWillMount",value:function(){var e=Object(f.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getCompanyData();case 2:return e.next=4,this.getPackageData();case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getCompanyData",value:function(){var e=Object(f.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l()({baseURL:p.a.BASE_URL,url:p.a.PLUGIN_DATA_COMPANY,method:"POST",data:{company_id:JSON.parse(this.state.company_id).company_id}});case 2:t=e.sent,this.setState({company_name:t.data.data.Name,company_slug:t.data.data.Slug});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getPackageData",value:function(){var e=Object(f.a)(m.a.mark((function e(){var t,a,n,r,c,i,o;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({isLoading:!0}),e.next=3,l()({baseURL:p.a.BASE_URL,url:p.a.LIST_PLUGIN_ORDER_BY_ID,method:"POST",headers:this.state.token});case 3:for(t=e.sent,a=t.data.data.result,n=[],r=[],c=0;c<a.length;c++)for(i=a[c].Array_Feature,o=0;o<i.length;o++)0==r.includes(i[o]._id)&&n.push(i[o]),r.push(i[o]._id);this.setState({array_feature:a.length>0?n:[],isLoading:!1});case 9:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.array_feature,a=e.company_slug;return this.state.isLoading?Object(g.jsx)("div",{className:"sweet-loading",children:Object(g.jsx)(C.a,{css:B,size:50,color:"#123abc",loading:this.state.isLoading,speedMultiplier:1.5})}):Object(g.jsxs)("div",{className:"container",children:[Object(g.jsx)("div",{class:"title",className:"h3",style:{alignSelf:"center"},children:"Danh s\xe1ch qu\u1ea3n l\xfd c\xe1c t\xednh n\u0103ng Admin"}),Object(g.jsx)(s.X,{children:void 0!=t?t.map((function(e,t){if("0"==e.Type)return Object(g.jsxs)(s.p,{lg:"3",sm:"12",xm:"12",children:[Object(g.jsx)("a",{"data-tip":"".concat(e.Value+a),style:{cursor:"pointer",margin:5},href:e.Value+"#/"+a,target:"_blank",children:Object(g.jsxs)("div",{style:N.feature,children:[Object(g.jsx)("div",{style:{height:"200px",width:"100%",marginTop:"24px"},children:Object(g.jsx)("img",{width:"80",height:"80",src:e.Image})}),Object(g.jsx)("div",{className:"feature__body",children:Object(g.jsxs)("center",{children:[Object(g.jsx)("div",{style:{width:"80%",height:50,alignItems:"center",fontSize:17,fontWeight:"bold"},children:e.Key}),Object(g.jsxs)("div",{style:{width:"80",height:70,fontSize:12},children:["Nh\u1ea5p v\xe0o \u0111\xe2y \u0111\u1ec3 chuy\u1ec3n h\u01b0\u1edbng \u0111\u1ebfn ",e.Value+a]})]})})]})}),Object(g.jsx)(w.a,{})]})})):""}),void 0==t||0==t.length?Object(g.jsx)("div",{children:"B\u1ea1n ch\u01b0a c\xf3 b\u1ea5t k\xec t\xednh n\u0103ng n\xe0o !!! Vui l\xf2ng li\xean h\u1ec7 admin !!!"}):""]})}}]),a}(o.Component),B=Object(I.css)(_||(_=Object(S.a)(["\n  display: block;\n  margin: 0 auto;\n  border-color: red;\n"]))),N={feature:Object(k.a)({display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",textAlign:"center",width:"85%",height:280,color:"#fff",padding:"10px",border:"1px",background:"#FF4F23",borderRadius:"10px"},"borderRadius","10px")},R=T,z=(a(700),new Headers),P=localStorage.getItem("auth");localStorage.getItem("user");z.append("Authorization","Bearer "+P),z.append("Content-Type","application/json");var U=function(e){Object(c.a)(a,e);var t=Object(i.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).state={company_name:"",company_slug:"",package_name:"",package_time:"",package_unit:"",array_feature:[]},r}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=Object(f.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:window.location.href="#/list_order";case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state;e.array_feature,e.company_slug;return Object(g.jsx)("div",{})}}]),a}(o.Component),H=(Object(k.a)({display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",textAlign:"center",width:"100%",height:280,color:"#fff",padding:"10px",background:"#123254",borderRadius:"10px"},"borderRadius","10px"),U),F=new Headers,M=localStorage.getItem("auth");F.append("Authorization","Bearer "+M),F.append("Content-Type","application/json");var V=function(e){Object(c.a)(a,e);var t=Object(i.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).state={type:localStorage.getItem("type")},r}return Object(r.a)(a,[{key:"render",value:function(){return Object(g.jsx)("div",{children:"0"==this.state.type||"1"==this.state.type?Object(g.jsx)(H,{}):Object(g.jsx)(R,{})})}}]),a}(o.Component);t.default=V}}]);
//# sourceMappingURL=73.fa70a640.chunk.js.map