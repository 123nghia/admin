(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[30],{1213:function(e,t,a){"use strict";a.r(t);var n=a(165),r=a(166),s=a(168),c=a(167),i=a(2),l=a(647),d=(a(655),a(651)),o=a.n(d),h=a(645),j=(a(31),a(667)),p=a(786),u=a(20),x=(Object(p.getStyle)("success"),Object(p.getStyle)("info"),Object(p.getStyle)("danger"),a(114)),m=a.n(x),O=a(657),b=(a(173),a(1187)),_=new Headers,S=localStorage.getItem("auth");_.append("Authorization","Bearer "+S),_.append("Content-Type","application/json");var f=function(e){Object(s.a)(a,e);var t=Object(c.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).state={month:0,dataUserSale:[],arrPagination:[],indexPage:0,dataStatistical:[],arrPaginationStatistical:[],indexPageStatistical:0,company_id:localStorage.getItem("user"),dataApi:[],arrTemp:[],hidden:!0,hidden_all:!0,arrAllUser:[]},r}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=Object(O.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getCustomer();case 2:return e.next=4,this.getCustomerByMonth("01");case 4:return e.next=6,this.getDataForCharts();case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"countType",value:function(e,t){return e.filter((function(e){return e.Phone==t})).length}},{key:"pagination",value:function(e){var t,a,n,r=[];for(t=0,a=e.length;t<a;t+=5)n=e.slice(t,t+5),r.push(n);this.setState({arrPagination:r,dataUserSale:r[this.state.indexPage]})}},{key:"pagination_statistical",value:function(e){var t,a,n,r=[];for(t=0,a=e.length;t<a;t+=5)n=e.slice(t,t+5),r.push(n);this.setState({arrPaginationStatistical:r,dataStatistical:r[this.state.indexPageStatistical]})}},{key:"getCustomer",value:function(){var e=Object(O.a)(m.a.mark((function e(){var t,a,n,r,s,c,i=this;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.state.company_id,a=JSON.parse(t),e.next=4,o()({baseURL:h.a.BASE_URL,url:h.a.LIST_CUSTOMER,method:"POST",data:{condition:{Company_Id:a.company_id}},headers:this.state.token});case 4:n=e.sent,this.setState({dataApi:n.data.data}),r=[],s=m.a.mark((function e(t){var s;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.some((function(e){return n.data.data[t].Phone==e.Phone}))){e.next=7;break}return n.data.data[t].count=i.countType(n.data.data,n.data.data[t].Phone),e.next=4,o()({baseURL:h.a.BASE_URL,url:h.a.CALCULATOR_ALL_USER_OF_COMPANY,method:"POST",data:{company_id:a.company_id,phone:n.data.data[t].Phone}});case 4:s=e.sent,n.data.data[t].coefficient=s.data.data.calculator,r.push(n.data.data[t]);case 7:case"end":return e.stop()}}),e)})),c=0;case 9:if(!(c<n.data.data.length)){e.next=14;break}return e.delegateYield(s(c),"t0",11);case 11:c++,e.next=9;break;case 14:0==r.length?this.setState({hidden:!1}):this.setState({hidden:!0}),this.pagination(r);case 16:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getDataForCharts",value:function(){var e=Object(O.a)(m.a.mark((function e(){var t,a,n,r,s,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=this.state.company_id,a=JSON.parse(t),n=["01","02","03","04","05","06","07","08","09","10","11","12"],r=[],s=0;case 5:if(!(s<n.length)){e.next=13;break}return e.next=8,o()({baseURL:h.a.BASE_URL,url:h.a.LIST_CUSTOMER_BY_MONTH,method:"POST",data:{company_id:a.company_id,month:n[s]}});case 8:c=e.sent,r.push(c.data.data.length);case 10:s++,e.next=5;break;case 13:this.setState({arrAllUser:r});case 14:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getCustomerByMonth",value:function(){var e=Object(O.a)(m.a.mark((function e(t){var a,n,r,s,c,i,l,d=this;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=this.state.company_id,n=JSON.parse(a),r={company_id:n.company_id,month:t},0!=t){e.next=8;break}return e.next=6,this.getCustomer();case 6:e.next=22;break;case 8:return e.next=10,o()({baseURL:h.a.BASE_URL,url:h.a.LIST_CUSTOMER_BY_MONTH,method:"POST",data:r});case 10:0==(s=e.sent).data.data.length?this.setState({hidden:!1}):this.setState({hidden:!0}),this.setState({dataApi:s.data.data,arrTemp:s.data.data}),c=[],i=m.a.mark((function e(a){var r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c.some((function(e){return d.state.arrTemp[a].Phone==e.Phone}))){e.next=7;break}return d.state.arrTemp[a].count=d.countType(d.state.arrTemp,d.state.arrTemp[a].Phone),e.next=4,o()({baseURL:h.a.BASE_URL,url:h.a.GET_COEFFICIENT,method:"POST",data:{month:t,company_id:n.company_id,phone:d.state.arrTemp[a].Phone}});case 4:r=e.sent,d.state.arrTemp[a].coefficient=r.data.data.calculator,c.push(d.state.arrTemp[a]);case 7:case"end":return e.stop()}}),e)})),l=0;case 16:if(!(l<this.state.arrTemp.length)){e.next=21;break}return e.delegateYield(i(l),"t0",18);case 18:l++,e.next=16;break;case 21:this.pagination_statistical(c);case 22:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,a=t.dataUserSale,n=t.hidden,r=t.arrPagination,s=t.indexPage,c=t.hidden_all,i=t.dataStatistical,d=t.arrPaginationStatistical,o=t.indexPageStatistical;return Object(u.jsx)(l.J,{children:Object(u.jsx)(l.k,{children:Object(u.jsxs)(l.f,{children:[Object(u.jsx)(l.j,{children:Object(u.jsxs)(l.u,{row:!0,children:[Object(u.jsx)(l.k,{md:"3",children:Object(u.jsx)(l.G,{htmlFor:"selectSm",children:"ALL USER SALE OF COMPANY"})}),Object(u.jsx)(l.k,{xs:"12",md:"9"})]})}),Object(u.jsxs)(l.g,{children:[Object(u.jsxs)("table",{className:"table table-hover table-outline mb-0 d-none d-sm-table",children:[Object(u.jsx)("thead",{className:"thead-light",children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{className:"text-center",children:"No."}),Object(u.jsx)("th",{className:"text-center",children:"Name"}),Object(u.jsx)("th",{className:"text-center",children:"Email"}),Object(u.jsx)("th",{className:"text-center",children:"Phone"}),Object(u.jsx)("th",{className:"text-center",children:"Gender"}),Object(u.jsx)("th",{className:"text-center",children:"Time Visits"}),Object(u.jsx)("th",{className:"text-center",children:"Coefficient"}),Object(u.jsx)("th",{className:"text-center",children:"Last Times Visit"})]})}),Object(u.jsxs)("tbody",{children:[Object(u.jsx)("td",{colSpan:"9",hidden:c,className:"text-center",children:"No users in this month"}),void 0!=a?a.map((function(e,t){return Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{className:"text-center",children:t+1}),Object(u.jsx)("td",{className:"text-center",children:e.Name}),Object(u.jsx)("td",{className:"text-center",children:e.Email}),Object(u.jsx)("td",{className:"text-center",children:e.Phone}),Object(u.jsx)("td",{className:"text-center",children:e.Gender}),Object(u.jsx)("td",{className:"text-center",children:e.count}),Object(u.jsx)("td",{className:"text-center",children:e.coefficient}),Object(u.jsx)("td",{className:"text-center",children:new Date(e.Create_Date).toLocaleDateString()+" "+new Date(e.Create_Date).toLocaleTimeString()})]},t)})):""]})]}),1==r.length?"":Object(u.jsx)("div",{style:{float:"right",marginRight:"10px",padding:"10px"},children:Object(u.jsx)("tr",{style:{float:"left",width:"100%"},children:r.map((function(t,a){return Object(u.jsx)("td",{children:Object(u.jsx)(b.a,{style:{marginRight:"5px"},color:a==s?"primary":"danger",onClick:function(t){e.setState({dataUserSale:r[a],indexPage:a})},children:a+1})})}))})}),Object(u.jsx)("br",{}),Object(u.jsxs)(l.i,{rows:!0,className:"cols-2",children:[Object(u.jsxs)(l.f,{backgroundColor:"red",children:[Object(u.jsx)(l.j,{children:"Bar Chart"}),Object(u.jsx)(l.g,{children:Object(u.jsx)(j.a,{datasets:[{label:"Total user of month ",backgroundColor:"#f87979",data:this.state.arrAllUser}],labels:"months",options:{tooltips:{enabled:!0}}})})]}),Object(u.jsxs)(l.f,{children:[Object(u.jsx)(l.j,{children:Object(u.jsxs)(l.u,{row:!0,children:[Object(u.jsx)(l.k,{md:"3",children:Object(u.jsx)(l.G,{htmlFor:"selectSm",children:"USER ON MONTH"})}),Object(u.jsx)(l.k,{xs:"12",md:"9",children:Object(u.jsx)("div",{style:{float:"right",width:"250px"},children:Object(u.jsxs)(l.K,{onChange:function(){var t=Object(O.a)(m.a.mark((function t(a){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.getCustomerByMonth(a.target.value);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),custom:!0,size:"sm",name:"selectSm",id:"SelectLm",children:[Object(u.jsx)("option",{value:"01",children:"01"}),Object(u.jsx)("option",{value:"02",children:"02"}),Object(u.jsx)("option",{value:"03",children:"03"}),Object(u.jsx)("option",{value:"04",children:"04"}),Object(u.jsx)("option",{value:"05",children:"05"}),Object(u.jsx)("option",{value:"06",children:"06"}),Object(u.jsx)("option",{value:"07",children:"07"}),Object(u.jsx)("option",{value:"08",children:"08"}),Object(u.jsx)("option",{value:"09",children:"09"}),Object(u.jsx)("option",{value:"10",children:"10"}),Object(u.jsx)("option",{value:"11",children:"11"}),Object(u.jsx)("option",{value:"12",children:"12"})]})})})]})}),Object(u.jsxs)(l.g,{children:[Object(u.jsxs)("table",{className:"table table-hover table-outline mb-0 d-none d-sm-table",children:[Object(u.jsx)("thead",{className:"thead-light",children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{className:"text-center",children:"Name"}),Object(u.jsx)("th",{className:"text-center",children:"Email"}),Object(u.jsx)("th",{className:"text-center",children:"Phone"}),Object(u.jsx)("th",{className:"text-center",children:"Gender"}),Object(u.jsx)("th",{className:"text-center",children:"Times Count"}),Object(u.jsx)("th",{className:"text-center",children:"Coefficient"})]})}),Object(u.jsxs)("tbody",{children:[Object(u.jsx)("td",{colSpan:"7",hidden:n,className:"text-center",children:"No users in this month"}),void 0!=i?i.map((function(e,t){return Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{className:"text-center",children:e.Name}),Object(u.jsx)("td",{className:"text-center",children:e.Email}),Object(u.jsx)("td",{className:"text-center",children:e.Phone}),Object(u.jsx)("td",{className:"text-center",children:e.Gender}),Object(u.jsx)("td",{className:"text-center",children:e.count}),Object(u.jsx)("td",{className:"text-center",children:e.coefficient})]},t)})):""]})]}),1==d.length?"":Object(u.jsx)("div",{style:{float:"right",marginRight:"10px",padding:"10px"},children:Object(u.jsx)("tr",{style:{float:"left",width:"100%"},children:d.map((function(t,a){return Object(u.jsx)("td",{children:Object(u.jsx)(b.a,{style:{marginRight:"5px"},color:a==o?"primary":"danger",onClick:function(t){e.setState({dataStatistical:d[a],indexPageStatistical:a})},children:a+1})})}))})})]})]})]})]})]})})})}}]),a}(i.Component),E=new Headers,g=localStorage.getItem("auth");E.append("Authorization","Bearer "+g),E.append("Content-Type","application/json");var T=function(e){Object(s.a)(a,e);var t=Object(c.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).state={month:0,dataUserSale:[],arrPagination:[],indexPage:0,dataStatistical:[],arrPaginationStatistical:[],indexPageStatistical:0,company_id:localStorage.getItem("user"),dataApi:[],arrTemp:[],hidden:!0,hidden_all:!0,arrAllUser:[]},r}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=Object(O.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getCustomer();case 2:return e.next=4,this.getCustomerByMonth("01");case 4:return e.next=6,this.getDataForCharts();case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"countType",value:function(e,t){return e.filter((function(e){return e.Phone==t})).length}},{key:"pagination",value:function(e){var t,a,n,r=[];for(t=0,a=e.length;t<a;t+=5)n=e.slice(t,t+5),r.push(n);this.setState({arrPagination:r,dataUserSale:r[this.state.indexPage]})}},{key:"pagination_statistical",value:function(e){var t,a,n,r=[];for(t=0,a=e.length;t<a;t+=5)n=e.slice(t,t+5),r.push(n);this.setState({arrPaginationStatistical:r,dataStatistical:r[this.state.indexPageStatistical]})}},{key:"getCustomer",value:function(){var e=Object(O.a)(m.a.mark((function e(){var t,a,n,r,s,c,i=this;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.state.company_id,a=JSON.parse(t),e.next=4,o()({baseURL:h.a.BASE_URL,url:h.a.LIST_CUSTOMER,method:"POST",data:{condition:{Company_Id:a.company_id,Sale_Id:a.sale_id}},headers:this.state.token});case 4:n=e.sent,this.setState({dataApi:n.data.data}),r=[],s=m.a.mark((function e(t){var s;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.some((function(e){return n.data.data[t].Phone==e.Phone}))){e.next=7;break}return n.data.data[t].count=i.countType(n.data.data,n.data.data[t].Phone),e.next=4,o()({baseURL:h.a.BASE_URL,url:h.a.CALCULATOR_ALL_USER_OF_SALE,method:"POST",data:{company_id:a.company_id,phone:n.data.data[t].Phone,sale_id:a.sale_id}});case 4:s=e.sent,n.data.data[t].coefficient=s.data.data.calculator,r.push(n.data.data[t]);case 7:case"end":return e.stop()}}),e)})),c=0;case 9:if(!(c<n.data.data.length)){e.next=14;break}return e.delegateYield(s(c),"t0",11);case 11:c++,e.next=9;break;case 14:0==r.length?this.setState({hidden:!1}):this.setState({hidden:!0}),this.pagination(r);case 16:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getDataForCharts",value:function(){var e=Object(O.a)(m.a.mark((function e(){var t,a,n,r,s,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=this.state.company_id,a=JSON.parse(t),n=["01","02","03","04","05","06","07","08","09","10","11","12"],r=[],s=0;case 5:if(!(s<n.length)){e.next=13;break}return e.next=8,o()({baseURL:h.a.BASE_URL,url:h.a.GET_USER_SALE_BY_MONTH,method:"POST",data:{company_id:a.company_id,month:n[s],sale_id:a.sale_id}});case 8:c=e.sent,r.push(c.data.data.length);case 10:s++,e.next=5;break;case 13:this.setState({arrAllUser:r});case 14:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getCustomerByMonth",value:function(){var e=Object(O.a)(m.a.mark((function e(t){var a,n,r,s,c,i,l,d=this;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=this.state.company_id,n=JSON.parse(a),r={company_id:n.company_id,month:t,sale_id:n.sale_id},0!=t){e.next=8;break}return e.next=6,this.getCustomer();case 6:e.next=22;break;case 8:return e.next=10,o()({baseURL:h.a.BASE_URL,url:h.a.GET_USER_SALE_BY_MONTH,method:"POST",data:r});case 10:0==(s=e.sent).data.data.length?this.setState({hidden:!1}):this.setState({hidden:!0}),this.setState({dataApi:s.data.data,arrTemp:s.data.data}),c=[],i=m.a.mark((function e(a){var r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c.some((function(e){return d.state.arrTemp[a].Phone==e.Phone}))){e.next=7;break}return d.state.arrTemp[a].count=d.countType(d.state.arrTemp,d.state.arrTemp[a].Phone),e.next=4,o()({baseURL:h.a.BASE_URL,url:h.a.GET_COEFFICIENT_PER_SALE,method:"POST",data:{month:t,company_id:n.company_id,phone:d.state.arrTemp[a].Phone,sale_id:n.sale_id}});case 4:r=e.sent,d.state.arrTemp[a].coefficient=r.data.data.calculator,c.push(d.state.arrTemp[a]);case 7:case"end":return e.stop()}}),e)})),l=0;case 16:if(!(l<this.state.arrTemp.length)){e.next=21;break}return e.delegateYield(i(l),"t0",18);case 18:l++,e.next=16;break;case 21:this.pagination_statistical(c);case 22:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,a=t.dataUserSale,n=t.hidden,r=t.arrPagination,s=t.indexPage,c=t.hidden_all,i=t.dataStatistical,d=t.arrPaginationStatistical,o=t.indexPageStatistical;return Object(u.jsx)(l.J,{children:Object(u.jsx)(l.k,{children:Object(u.jsxs)(l.f,{children:[Object(u.jsx)(l.j,{children:Object(u.jsxs)(l.u,{row:!0,children:[Object(u.jsx)(l.k,{md:"3",children:Object(u.jsx)(l.G,{htmlFor:"selectSm",children:"ALL USER SALE OF COMPANY"})}),Object(u.jsx)(l.k,{xs:"12",md:"9"})]})}),Object(u.jsxs)(l.g,{children:[Object(u.jsxs)("table",{className:"table table-hover table-outline mb-0 d-none d-sm-table",children:[Object(u.jsx)("thead",{className:"thead-light",children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{className:"text-center",children:"No."}),Object(u.jsx)("th",{className:"text-center",children:"Name"}),Object(u.jsx)("th",{className:"text-center",children:"Email"}),Object(u.jsx)("th",{className:"text-center",children:"Phone"}),Object(u.jsx)("th",{className:"text-center",children:"Gender"}),Object(u.jsx)("th",{className:"text-center",children:"Time Visits"}),Object(u.jsx)("th",{className:"text-center",children:"Coefficient"}),Object(u.jsx)("th",{className:"text-center",children:"Last Times Visit"})]})}),Object(u.jsxs)("tbody",{children:[Object(u.jsx)("td",{colSpan:"9",hidden:c,className:"text-center",children:"No users in this month"}),void 0!=a?a.map((function(e,t){return Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{className:"text-center",children:t+1}),Object(u.jsx)("td",{className:"text-center",children:e.Name}),Object(u.jsx)("td",{className:"text-center",children:e.Email}),Object(u.jsx)("td",{className:"text-center",children:e.Phone}),Object(u.jsx)("td",{className:"text-center",children:e.Gender}),Object(u.jsx)("td",{className:"text-center",children:e.count}),Object(u.jsx)("td",{className:"text-center",children:e.coefficient}),Object(u.jsx)("td",{className:"text-center",children:new Date(e.Create_Date).toLocaleDateString()+" "+new Date(e.Create_Date).toLocaleTimeString()})]},t)})):""]})]}),1==r.length?"":Object(u.jsx)("div",{style:{float:"right",marginRight:"10px",padding:"10px"},children:Object(u.jsx)("tr",{style:{float:"left",width:"100%"},children:r.map((function(t,a){return Object(u.jsx)("td",{children:Object(u.jsx)(b.a,{style:{marginRight:"5px"},color:a==s?"primary":"danger",onClick:function(t){e.setState({dataUserSale:r[a],indexPage:a})},children:a+1})})}))})}),Object(u.jsx)("br",{}),Object(u.jsxs)(l.i,{rows:!0,className:"cols-2",children:[Object(u.jsxs)(l.f,{backgroundColor:"red",children:[Object(u.jsx)(l.j,{children:"Bar Chart"}),Object(u.jsx)(l.g,{children:Object(u.jsx)(j.a,{datasets:[{label:"Total user of month ",backgroundColor:"#f87979",data:this.state.arrAllUser}],labels:"months",options:{tooltips:{enabled:!0}}})})]}),Object(u.jsxs)(l.f,{children:[Object(u.jsx)(l.j,{children:Object(u.jsxs)(l.u,{row:!0,children:[Object(u.jsx)(l.k,{md:"3",children:Object(u.jsx)(l.G,{htmlFor:"selectSm",children:"USER ON MONTH"})}),Object(u.jsx)(l.k,{xs:"12",md:"9",children:Object(u.jsx)("div",{style:{float:"right",width:"250px"},children:Object(u.jsxs)(l.K,{onChange:function(){var t=Object(O.a)(m.a.mark((function t(a){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.getCustomerByMonth(a.target.value);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),custom:!0,size:"sm",name:"selectSm",id:"SelectLm",children:[Object(u.jsx)("option",{value:"01",children:"01"}),Object(u.jsx)("option",{value:"02",children:"02"}),Object(u.jsx)("option",{value:"03",children:"03"}),Object(u.jsx)("option",{value:"04",children:"04"}),Object(u.jsx)("option",{value:"05",children:"05"}),Object(u.jsx)("option",{value:"06",children:"06"}),Object(u.jsx)("option",{value:"07",children:"07"}),Object(u.jsx)("option",{value:"08",children:"08"}),Object(u.jsx)("option",{value:"09",children:"09"}),Object(u.jsx)("option",{value:"10",children:"10"}),Object(u.jsx)("option",{value:"11",children:"11"}),Object(u.jsx)("option",{value:"12",children:"12"})]})})})]})}),Object(u.jsxs)(l.g,{children:[Object(u.jsxs)("table",{className:"table table-hover table-outline mb-0 d-none d-sm-table",children:[Object(u.jsx)("thead",{className:"thead-light",children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{className:"text-center",children:"Name"}),Object(u.jsx)("th",{className:"text-center",children:"Email"}),Object(u.jsx)("th",{className:"text-center",children:"Phone"}),Object(u.jsx)("th",{className:"text-center",children:"Gender"}),Object(u.jsx)("th",{className:"text-center",children:"Times Count"}),Object(u.jsx)("th",{className:"text-center",children:"Coefficient"})]})}),Object(u.jsxs)("tbody",{children:[Object(u.jsx)("td",{colSpan:"7",hidden:n,className:"text-center",children:"No users in this month"}),void 0!=i?i.map((function(e,t){return Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{className:"text-center",children:e.Name}),Object(u.jsx)("td",{className:"text-center",children:e.Email}),Object(u.jsx)("td",{className:"text-center",children:e.Phone}),Object(u.jsx)("td",{className:"text-center",children:e.Gender}),Object(u.jsx)("td",{className:"text-center",children:e.count}),Object(u.jsx)("td",{className:"text-center",children:e.coefficient})]},t)})):""]})]}),1==d.length?"":Object(u.jsx)("div",{style:{float:"right",marginRight:"10px",padding:"10px"},children:Object(u.jsx)("tr",{style:{float:"left",width:"100%"},children:d.map((function(t,a){return Object(u.jsx)("td",{children:Object(u.jsx)(b.a,{style:{marginRight:"5px"},color:a==o?"primary":"danger",onClick:function(t){e.setState({dataStatistical:d[a],indexPageStatistical:a})},children:a+1})})}))})})]})]})]})]})]})})})}}]),a}(i.Component),L=new Headers,y=localStorage.getItem("auth");L.append("Authorization","Bearer "+y),L.append("Content-Type","application/json");var N=function(e){Object(s.a)(a,e);var t=Object(c.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return Object(u.jsx)("div",{children:"SHOPMANAGER"==localStorage.getItem("role")?Object(u.jsx)(f,{}):Object(u.jsx)(T,{})})}}]),a}(i.Component);t.default=N},645:function(e,t,a){"use strict";t.a={BASE_URL:"https://thanhvien.applamdep.com",LIST_USER:"/api/list-user",LIST_USER_WITH_ID:"/api/list-user?id=",ADD_USER:"/api/add-user",UPDATE_USER:"/api/update-user",DELETE_USER:"/api/delete-user",LOGIN_ADMIN:"/api/login_admin",GET_SHOP:"/api/get-shop",GET_SALE:"/api/get-sale",GET_COEFFICIENT:"/api/calculator-coefficient-user",GET_COEFFICIENT_PER_SALE:"/api/calculator-coefficient-user-per-sale",GET_USER_SALE_BY_MONTH:"/api/get-user-of-sale-by-month",CALCULATOR_ALL_USER_OF_COMPANY:"/api/calculator-all-user-company",CALCULATOR_ALL_USER_OF_SALE:"/api/calculator-all-user-of-sale",GET_SEEDER:"/api/get-seed",GET_SALE_NAME:"/api/get-name-sale",LIST_CUSTOMER:"/api/list-customer",LIST_CUSTOMER_BY_MONTH:"/api/get-user-sale-by-month",LIST_TYPEKEY:"/api/list-typekey",LIST_TYPEKEY_WITH_ID:"/api/list-typekey?id=",ADD_TYPEKEY:"/api/add-typekey",UPDATE_TYPEKEY:"/api/update-typekey",DELETE_TYPEKEY:"/api/delete-typekey",LIST_HARDWARE:"/api/list-hardware",LIST_HARDWARE_WITH_ID:"/api/list-hardware?id=",ADD_HARDWARE:"/api/add-hardware",UPDATE_HARDWARE:"/api/update-hardware",DELETE_HARDWARE:"/api/delete-hardware",LIST_ORDER:"/api/list-order",ADD_ORDER:"/api/add-order",LIST_ORDER_DETAIL:"/api/list-orderdetail",ADD_ORDER_DETAIL:"/api/add-orderdetail",LIST_ROLE:"/api/list-role",LIST_ROLE_WITH_ID:"/api/list-role?id=",ADD_ROLE:"/api/add-role",UPDATE_ROLE:"/api/update-role",DELETE_ROLE:"/api/delete-role",LIST_SALELOG:"/api/list-salelog",LIST_SALELOG_WITH_ID:"/api/list-salelog?id=",ADD_SALELOG:"/api/add-salelog",UPDATE_SALELOG:"/api/update-salelog",DELETE_SALELOG:"/api/delete-salelog",LIST_SALE:"/api/list-sale",LIST_SALE_WITH_ID:"/api/list-sale?id=",ADD_SALE:"/api/add-sale",UPDATE_SALE:"/api/update-sale",DELETE_SALE:"/api/delete-sale",LIST_KEYORDER:"/api/list-keyorder",LIST_KEYORDER_WITH_ID:"/api/list-keyorder?id=",ADD_KEYORDER:"/api/add-keyorder",UPDATE_KEYORDER:"/api/update-keyorder",DELETE_KEYORDER:"/api/delete-keyorder",LIST_KEY:"/api/list-key",LIST_KEY_WITH_ID:"/api/list-key?id=",ADD_KEY:"/api/add-key",UPDATE_KEY:"/api/update-key",DELETE_KEY:"/api/delete-key",LIST_COMPANY:"/api/list-company",LIST_COMPANY_WITH_ID:"/api/list-company?id=",ADD_COMPANY:"/api/add-company",UPDATE_COMPANY:"/api/update-company",DELETE_COMPANY:"/api/delete-company",LIST_LINK:"/api/list-link",LIST_LINK_WITH_ID:"/api/list-link?id=",ADD_LINK:"/api/add-link",UPDATE_LINK:"/api/update-link",DELETE_LINK:"/api/delete-link"}}}]);
//# sourceMappingURL=30.cafeb0e3.chunk.js.map