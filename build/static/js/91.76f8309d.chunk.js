(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[91],{1378:function(e,t,n){"use strict";n.r(t);var a,c=n(653),r=n(165),s=n(113),i=n.n(s),h=n(640),l=n(166),d=n(167),o=n(169),j=n(168),b=n(2),x=n(1298),u=n(1299),g=n(1300),p=n(1301),m=n(1303),O=n(1387),f=n(1306),y=n(1307),N=n(1308),v=n(639),w=n(672),_=n(1383),T=(n(644),n(659)),k=n(649),S=(n(643),n(654)),C=n.n(S),D=n(1275),P=(n(1274),n(17)),L=function(e){Object(o.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).getData=Object(h.a)(i.a.mark((function e(){var t,n,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.state.companyid,a.setState({isLoading:!0}),e.next=4,Object(w.a)(T.a.LIST_ORDER,{company_id:t},"","POST");case 4:n=e.sent,c=n.data,a.pagination(c),a.setState({dataApi:c,isLoading:!1});case 8:case"end":return e.stop()}}),e)}))),a.onDetail=function(){var e=Object(h.a)(i.a.mark((function e(t,n){var c,r,s,h;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.setState({modalCom:!a.state.modalCom}),e.next=3,Object(w.a)(T.a.LIST_ORDER_DETAIL,{id:t},"","POST");case 3:if(c=e.sent,r=c.data.list_product,s=c.data.order_id.transport_id,h={fee:0,insurance_fee:0,label:"",status_id:0},void 0==s){e.next=12;break}return e.next=10,Object(w.a)(T.a.GET_DETAIL_TRANSPORT+"?id="+s,{},"","GET");case 10:h=(h=e.sent).data.res_order;case 12:a.setState({dataDetail:r,objOrder:c.data.order_id,objTransport:h,name_customer:n});case 13:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),a.onDetailOrder=function(){var e=Object(h.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(w.a)(T.a.PRINT_ORDER+"?label="+t,{},"","GET");case 2:n=e.sent,console.log(n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.state={data:[],key:"",modalCom:!1,dataApi:[],hidden:!1,action:"new",modalDelete:!1,delete:null,arrPagination:[],indexPage:0,token:{Authorization:"Bearer ".concat(localStorage.getItem("token"))},type:localStorage.getItem("type"),isLoading:!1,dataDetail:[],objOrder:{},objTransport:{},companyid:localStorage.getItem("company_id"),name_customer:""},a}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=Object(h.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.getData();case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"pagination",value:function(e){var t,n,a,c=[];for(t=0,n=e.length;t<n;t+=5)a=e.slice(t,t+5),c.push(a);0==c.length?this.setState({hidden:!1}):this.setState({hidden:!0}),this.setState({arrPagination:c,data:c[0]})}},{key:"searchKey",value:function(){var e=this.state,t=e.indexPage,n=e.key;if(""!=n){var a=[];this.state.dataApi.map((function(e){e.name.toLocaleUpperCase().includes(n.toLocaleUpperCase())&&a.push(e)})),this.setState({data:a})}else this.setState({data:this.state.arrPagination[t]})}},{key:"actionSearch",value:function(e,t){var n=this;this.setState(Object(r.a)({},t,e.target.value),(function(){n.searchKey()}))}},{key:"resetSearch",value:function(){var e=this;this.setState({key:""},(function(){e.searchKey()}))}},{key:"setContent",value:function(e,t){switch(t){case"1":switch(e){case"0":return"Thanh to\xe1n VNPay";case"1":return"Thanh to\xe1n b\u1eb1ng ti\u1ec1n m\u1eb7t"}break;case"2":switch(e){case"0":return"Giao h\xe0ng ti\u1ebft ki\u1ec7m"}break;case"3":switch(e){case"0":return"Ch\u01b0a thanh to\xe1n";case"1":return"\u0110\xe3 thanh to\xe1n"}break;case"4":switch(e){case"00":return"Th\xe0nh c\xf4ng";default:return"Ch\u01b0a x\xe1c nh\u1eadn"}}}},{key:"setContentGHTK",value:function(e){switch(e){case"-1":return"H\u1ee7y \u0111\u01a1n h\xe0ng";case"1":return"Ch\u01b0a ti\u1ebfp nh\u1eadn";case"2":return"\u0110\xe3 ti\u1ebfp nh\u1eadn";case"3":return"\u0110\xe3 l\u1ea5y h\xe0ng/\u0110\xe3 nh\u1eadp kho";case"4":return"\u0110\xe3 \u0111i\u1ec1u ph\u1ed1i giao h\xe0ng/\u0110ang giao h\xe0ng";case"5":return"\u0110\xe3 giao h\xe0ng/Ch\u01b0a \u0111\u1ed1i so\xe1t";case"6":return"\u0110\xe3 \u0111\u1ed1i so\xe1t";case"7":return"Kh\xf4ng l\u1ea5y \u0111\u01b0\u1ee3c h\xe0ng";case"8":return"Ho\xe3n l\u1ea5y h\xe0ng";case"9":return"Kh\xf4ng giao \u0111\u01b0\u1ee3c h\xe0ng";case"10":return"Delay giao h\xe0ng";case"11":return"\u0110\xe3 \u0111\u1ed1i so\xe1t c\xf4ng n\u1ee3 tr\u1ea3 h\xe0ng";case"12":return"\u0110\xe3 \u0111i\u1ec1u ph\u1ed1i l\u1ea5y h\xe0ng/\u0110ang l\u1ea5y h\xe0ng";case"13":return"\u0110\u01a1n ha\u0300ng b\xf4\u0300i hoa\u0300n";case"14":return"\u0110ang tr\u1ea3 h\xe0ng (COD c\u1ea7m h\xe0ng \u0111i tr\u1ea3)";case"15":return"\u0110\xe3 tr\u1ea3 h\xe0ng (COD \u0111\xe3 tr\u1ea3 xong h\xe0ng)";case"16":return"Shipper b\xe1o \u0111\xe3 l\u1ea5y h\xe0ng";case"17":return"Shipper (nh\xe2n vi\xean l\u1ea5y/giao h\xe0ng) b\xe1o kh\xf4ng l\u1ea5y \u0111\u01b0\u1ee3c h\xe0ng";case"18":return"Shipper b\xe1o delay l\u1ea5y h\xe0ng";case"19":return"Shipper b\xe1o \u0111\xe3 giao h\xe0ng";case"20":return"Shipper b\xe1o kh\xf4ng giao \u0111\u01b0\u1ee3c giao h\xe0ng";case"21":return"Shipper b\xe1o delay giao h\xe0ng";default:return"Ch\u01b0a ti\u1ebfp nh\u1eadn"}}},{key:"render",value:function(){var e=this,t=this.state,n=t.data,a=t.arrPagination,c=t.dataDetail,r=t.isLoading,s=t.hidden,l=t.modalCom,d=t.objOrder,o=t.name_customer,j=t.objTransport;return r?Object(P.jsx)("div",{className:"sweet-loading",children:Object(P.jsx)(C.a,{css:R,size:50,color:"#123abc",loading:r,speedMultiplier:1.5})}):Object(P.jsxs)("div",{className:"animated fadeIn",children:[Object(P.jsx)(x.a,{children:Object(P.jsxs)(u.a,{children:[Object(P.jsxs)(g.a,{children:[Object(P.jsxs)(p.a,{children:[Object(P.jsx)("i",{className:"fa fa-align-justify"})," Danh s\xe1ch \u0111\u01a1n h\xe0ng"]}),Object(P.jsx)(m.a,{children:Object(P.jsxs)("table",{ble:!0,className:"table table-hover table-outline mb-0 d-none d-sm-table",children:[Object(P.jsx)("thead",{className:"thead-light",children:Object(P.jsxs)("tr",{children:[Object(P.jsx)("th",{className:"text-center",children:"STT."}),Object(P.jsx)("th",{className:"text-center",children:"T\xean ng\u01b0\u1eddi d\xf9ng"}),Object(P.jsx)("th",{className:"text-center",children:"M\xe3 \u0111\u01a1n h\xe0ng"}),Object(P.jsx)("th",{className:"text-center",children:"T\u1ed5ng"}),Object(P.jsx)("th",{className:"text-center",children:"T\u1ea1o ng\xe0y"}),Object(P.jsx)("th",{className:"text-center",children:"#"})]})}),Object(P.jsxs)("tbody",{children:[Object(P.jsx)("td",{colSpan:"10",hidden:s,className:"text-center",children:"Kh\xf4ng t\xecm th\u1ea5y d\u1eef li\u1ec7u"}),void 0!=n?n.map((function(t,n){return Object(P.jsxs)("tr",{children:[Object(P.jsx)("td",{className:"text-center",children:n+1}),Object(P.jsx)("td",{className:"text-center",children:t.user_id.name}),Object(P.jsx)("td",{className:"text-center",children:t._id}),Object(P.jsx)("td",{className:"text-center",children:t.total}),Object(P.jsx)("td",{className:"text-center",children:new Date(t.create_at).toLocaleDateString()+" "+new Date(t.create_at).toLocaleTimeString()}),Object(P.jsxs)("td",{className:"text-center",children:[Object(P.jsx)(v.d,{style:I.mgl5,outline:!0,color:"primary",size:"sm",onClick:function(){var n=Object(h.a)(i.a.mark((function n(a){return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.onDetail(t.detail_id,t.user_id.name);case 2:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),children:"Chi ti\u1ebft"}),Object(P.jsx)(v.d,{style:I.mgl5,outline:!0,color:"primary",disabled:void 0==t.transport_id,size:"sm",onClick:function(){var n=Object(h.a)(i.a.mark((function n(a){return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:e.onDetailOrder(t.transport_id.res_order.label);case 1:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),children:"In \u0111\u01a1n h\xe0ng"})]})]},n)})):""]})]})})]}),Object(P.jsx)("div",{style:{float:"right"},children:Object(P.jsx)(_.a,{count:a.length,color:"primary",onChange:function(t,n){e.setState({data:a[n-1],indexPage:n-1})}})})]})}),Object(P.jsxs)(O.a,{size:"xl",isOpen:l,children:[Object(P.jsx)(f.a,{children:Object(P.jsx)(v.W,{children:Object(P.jsx)(v.p,{lg:"12",sm:"12",children:Object(P.jsxs)(v.W,{children:[Object(P.jsxs)(v.p,{lg:"6",sm:"12",children:[Object(P.jsx)("strong",{children:"T\xean kh\xe1ch h\xe0ng: "}),Object(P.jsxs)("p",{style:{color:"red"},children:[" ",o," "]})]}),Object(P.jsxs)(v.p,{lg:"6",sm:"12",children:[Object(P.jsx)("strong",{children:"Ph\u01b0\u01a1ng th\u1ee9c thanh to\xe1n:"}),Object(P.jsxs)("p",{style:{color:"red"},children:[" ",this.setContent(d.payment_method,"1")," "]})]}),Object(P.jsxs)(v.p,{lg:"6",sm:"12",children:[Object(P.jsx)("strong",{children:"Ph\u01b0\u01a1ng th\u1ee9c v\u1eadn chuy\u1ec3n:"}),Object(P.jsxs)("p",{style:{color:"red"},children:[" ",this.setContent(d.transport_method,"2")," "]})]}),Object(P.jsxs)(v.p,{lg:"6",sm:"12",children:[Object(P.jsx)("strong",{children:"Tr\u1ea1ng th\xe1i \u0111\u01a1n h\xe0ng:"}),Object(P.jsxs)("p",{style:{color:"red"},children:[" ",this.setContent(d.status,"3")]})]}),Object(P.jsxs)(v.p,{lg:"6",sm:"12",children:[Object(P.jsx)("strong",{children:"Tr\u1ea1ng th\xe1i \u0111\u01a1n h\xe0ng ti\u1ebft ki\u1ec7m nhanh:"}),Object(P.jsxs)("p",{style:{color:"red"},children:[" ",this.setContent(d.status_tkn,"4")]})]})]})})})}),Object(P.jsx)(y.a,{children:Object(P.jsxs)(D.d,{children:[Object(P.jsxs)(D.b,{children:[Object(P.jsx)(D.a,{children:"Th\xf4ng tin \u0111\u01a1n h\xe0ng"}),Object(P.jsxs)(D.a,{disabled:void 0==d.transport_id,children:["Chi ti\u1ebft v\u1eadn chuy\u1ec3n ",void 0==d.transport_id?"(\u0110\xe3 \u1ea9n)":""]})]}),Object(P.jsx)(D.c,{children:Object(P.jsxs)("table",{ble:!0,className:"table table-hover table-outline mb-0 d-none d-sm-table",children:[Object(P.jsx)("thead",{className:"thead-light",children:Object(P.jsxs)("tr",{children:[Object(P.jsx)("th",{className:"text-center",children:"STT."}),Object(P.jsx)("th",{className:"text-center",children:"T\xean s\u1ea3n ph\u1ea9m"}),Object(P.jsx)("th",{className:"text-center",children:"H\xecnh \u1ea3nh"}),Object(P.jsx)("th",{className:"text-center",children:"Th\u01b0\u01a1ng hi\u1ec7u"}),Object(P.jsx)("th",{className:"text-center",children:"Danh m\u1ee5c"}),Object(P.jsx)("th",{className:"text-center",children:"S\u1ed1 l\u01b0\u1ee3ng"}),Object(P.jsx)("th",{className:"text-center",children:"Gi\xe1"})]})}),Object(P.jsxs)("tbody",{children:[Object(P.jsx)("td",{colSpan:"10",hidden:s,className:"text-center",children:"Kh\xf4ng t\xecm th\u1ea5y d\u1eef li\u1ec7u"}),void 0!=c?c.map((function(e,t){return Object(P.jsxs)("tr",{children:[Object(P.jsx)("td",{className:"text-center",children:t+1}),Object(P.jsx)("td",{className:"text-center",children:e.product_id.name}),Object(P.jsx)("td",{className:"text-center",children:(console.log(e),""==e.product_id.image||null==e.product_id.image?Object(P.jsx)("img",{src:"https://www.chanchao.com.tw/VietnamPrintPack/images/default.jpg",width:"60px",height:"60px"}):Object(P.jsx)("img",{src:"".concat(T.a.BASE_URL,"/public/image_product/").concat(e.product_id.image),width:"80px",height:"60px"}))}),Object(P.jsx)("td",{className:"text-center",children:e.product_id.brand_id.name}),Object(P.jsx)("td",{className:"text-center",children:e.product_id.category_id.name}),Object(P.jsx)("td",{className:"text-center",children:e.quantity}),Object(P.jsx)("td",{className:"text-center",children:e.price*e.quantity})]},t)})):""]})]})}),Object(P.jsx)(D.c,{children:Object(P.jsxs)("table",{ble:!0,className:"table table-hover table-outline mb-0 d-none d-sm-table",children:[Object(P.jsx)("thead",{className:"thead-light",children:Object(P.jsxs)("tr",{children:[Object(P.jsx)("th",{className:"text-center",children:"M\xe3 \u0111\u01a1n h\xe0ng TIKITECH"}),Object(P.jsx)("th",{className:"text-center",children:"M\xe3 \u0111\u01a1n h\xe0ng GHTK"}),Object(P.jsx)("th",{className:"text-center",children:"Tr\u1ea1ng th\xe1i \u0111\u01a1n h\xe0ng"}),Object(P.jsx)("th",{className:"text-center",children:"Ph\xed ship"}),Object(P.jsx)("th",{className:"text-center",children:"Ph\xed b\u1ea3o hi\u1ec3m"})]})}),Object(P.jsx)("tbody",{children:Object(P.jsxs)("tr",{children:[Object(P.jsx)("td",{className:"text-center",children:j.partner_id}),Object(P.jsx)("td",{className:"text-center",children:j.label}),Object(P.jsx)("td",{className:"text-center",children:this.setContentGHTK(j.status_id)}),Object(P.jsx)("td",{className:"text-center",children:j.fee}),Object(P.jsx)("td",{className:"text-center",children:j.insurance_fee})]})})]})})]})}),Object(P.jsx)(N.a,{children:Object(P.jsx)(v.d,{color:"secondary",onClick:function(t){e.setState({modalCom:!l})},children:"\u0110\xf3ng"})})]})]})}}]),n}(b.Component),R=Object(k.css)(a||(a=Object(c.a)(["\n  display: block;\n  margin: 0 auto;\n  border-color: red;\n"]))),I={pagination:{marginRight:"5px"},flexLabel:{width:100},flexOption:{width:300},a:{textDecoration:"none"},floatRight:{float:"right",marginTop:"3px"},spinner:{width:"30px"},center:{textAlign:"center"},tbody:{height:"380px",overflowY:"auto"},wh25:{width:"25%",float:"left",height:"80px"},w5:{width:"15%",float:"left",height:"80px"},wa10:{width:"5%",float:"left",height:"80px"},row:{float:"left",width:"100%"},success:{color:"green"},danger:{color:"red"},mgl5:{margin:"5px"},tags:{float:"right",marginRight:"5px"},searchInput:{width:"190px",display:"inline-block"},userActive:{color:"green"},userPending:{color:"red"},nagemonNameCol:{width:"328px"},image:{width:"100px",height:"100px",borderRadius:"99999px"}};t.default=L}}]);
//# sourceMappingURL=91.76f8309d.chunk.js.map