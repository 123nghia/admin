(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[22],{1205:function(e,t,a){"use strict";a.r(t);var n=a(166),r=a(167),c=a(169),s=a(168),i=a(2),l=a(648),o=(a(647),a(651)),d=a.n(o),h=a(645),u=(a(38),a(670)),j=a(698),p=a(21),x=(Object(j.getStyle)("success"),Object(j.getStyle)("info"),Object(j.getStyle)("danger"),a(115)),b=a.n(x),m=a(655),O=(a(172),a(1184)),f=new Headers,g=localStorage.getItem("auth");f.append("Authorization","Bearer "+g),f.append("Content-Type","application/json");var S=function(e){Object(c.a)(a,e);var t=Object(s.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).state={month:0,dataUserSale:[],arrPagination:[],indexPage:0,dataStatistical:[],arrPaginationStatistical:[],indexPageStatistical:0,company_id:localStorage.getItem("user"),dataApi:[],arrTemp:[],hidden:!0,hidden_all:!0,arrAllUser:[]},r}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=Object(m.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getCustomer();case 2:return e.next=4,this.getCustomerByMonth("01");case 4:return e.next=6,this.getDataForCharts();case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"countType",value:function(e,t){return e.filter((function(e){return e.Phone==t})).length}},{key:"pagination",value:function(e){var t,a,n,r=[];for(t=0,a=e.length;t<a;t+=5)n=e.slice(t,t+5),r.push(n);this.setState({arrPagination:r,dataUserSale:r[this.state.indexPage]})}},{key:"pagination_statistical",value:function(e){var t,a,n,r=[];for(t=0,a=e.length;t<a;t+=5)n=e.slice(t,t+5),r.push(n);this.setState({arrPaginationStatistical:r,dataStatistical:r[this.state.indexPageStatistical]})}},{key:"getCustomer",value:function(){var e=Object(m.a)(b.a.mark((function e(){var t,a,n,r,c,s,i=this;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.state.company_id,a=JSON.parse(t),e.next=4,d()({baseURL:h.a.BASE_URL,url:h.a.LIST_CUSTOMER,method:"POST",data:{condition:{Company_Id:a.company_id}}});case 4:n=e.sent,this.setState({dataApi:n.data.data}),r=[],c=b.a.mark((function e(t){var c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.some((function(e){return n.data.data[t].Phone==e.Phone}))){e.next=7;break}return n.data.data[t].count=i.countType(n.data.data,n.data.data[t].Phone),e.next=4,d()({baseURL:h.a.BASE_URL,url:h.a.CALCULATOR_ALL_USER_OF_COMPANY,method:"POST",data:{company_id:a.company_id,phone:n.data.data[t].Phone}});case 4:c=e.sent,n.data.data[t].coefficient=c.data.data.calculator,r.push(n.data.data[t]);case 7:case"end":return e.stop()}}),e)})),s=0;case 9:if(!(s<n.data.data.length)){e.next=14;break}return e.delegateYield(c(s),"t0",11);case 11:s++,e.next=9;break;case 14:0==r.length?this.setState({hidden:!1}):this.setState({hidden:!0}),this.pagination(r);case 16:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getDataForCharts",value:function(){var e=Object(m.a)(b.a.mark((function e(){var t,a,n,r,c,s;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=this.state.company_id,a=JSON.parse(t),n=["01","02","03","04","05","06","07","08","09","10","11","12"],r=[],c=0;case 5:if(!(c<n.length)){e.next=13;break}return e.next=8,d()({baseURL:h.a.BASE_URL,url:h.a.LIST_CUSTOMER_BY_MONTH,method:"POST",data:{company_id:a.company_id,month:n[c]}});case 8:s=e.sent,r.push(s.data.data.length);case 10:c++,e.next=5;break;case 13:this.setState({arrAllUser:r});case 14:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getCustomerByMonth",value:function(){var e=Object(m.a)(b.a.mark((function e(t){var a,n,r,c,s,i,l,o=this;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=this.state.company_id,n=JSON.parse(a),r={company_id:n.company_id,month:t},0!=t){e.next=8;break}return e.next=6,this.getCustomer();case 6:e.next=22;break;case 8:return e.next=10,d()({baseURL:h.a.BASE_URL,url:h.a.LIST_CUSTOMER_BY_MONTH,method:"POST",data:r});case 10:0==(c=e.sent).data.data.length?this.setState({hidden:!1}):this.setState({hidden:!0}),this.setState({dataApi:c.data.data,arrTemp:c.data.data}),s=[],i=b.a.mark((function e(a){var r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s.some((function(e){return o.state.arrTemp[a].Phone==e.Phone}))){e.next=7;break}return o.state.arrTemp[a].count=o.countType(o.state.arrTemp,o.state.arrTemp[a].Phone),e.next=4,d()({baseURL:h.a.BASE_URL,url:h.a.GET_COEFFICIENT,method:"POST",data:{month:t,company_id:n.company_id,phone:o.state.arrTemp[a].Phone}});case 4:r=e.sent,o.state.arrTemp[a].coefficient=r.data.data.calculator,s.push(o.state.arrTemp[a]);case 7:case"end":return e.stop()}}),e)})),l=0;case 16:if(!(l<this.state.arrTemp.length)){e.next=21;break}return e.delegateYield(i(l),"t0",18);case 18:l++,e.next=16;break;case 21:this.pagination_statistical(s);case 22:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,a=t.dataUserSale,n=t.hidden,r=t.arrPagination,c=t.indexPage,s=t.hidden_all,i=t.dataStatistical,o=t.arrPaginationStatistical,d=t.indexPageStatistical;return Object(p.jsx)(l.J,{children:Object(p.jsx)(l.k,{children:Object(p.jsxs)(l.f,{children:[Object(p.jsx)(l.j,{children:Object(p.jsxs)(l.u,{row:!0,children:[Object(p.jsx)(l.k,{md:"3",children:Object(p.jsx)(l.G,{htmlFor:"selectSm",children:"ALL USER SALE OF COMPANY"})}),Object(p.jsx)(l.k,{xs:"12",md:"9"})]})}),Object(p.jsxs)(l.g,{children:[Object(p.jsxs)("table",{className:"table table-hover table-outline mb-0 d-none d-sm-table",children:[Object(p.jsx)("thead",{className:"thead-light",children:Object(p.jsxs)("tr",{children:[Object(p.jsx)("th",{className:"text-center",children:"No."}),Object(p.jsx)("th",{className:"text-center",children:"Name"}),Object(p.jsx)("th",{className:"text-center",children:"Email"}),Object(p.jsx)("th",{className:"text-center",children:"Phone"}),Object(p.jsx)("th",{className:"text-center",children:"Gender"}),Object(p.jsx)("th",{className:"text-center",children:"Time Visits"}),Object(p.jsx)("th",{className:"text-center",children:"Coefficient"}),Object(p.jsx)("th",{className:"text-center",children:"Last Times Visit"})]})}),Object(p.jsxs)("tbody",{children:[Object(p.jsx)("td",{colSpan:"9",hidden:s,className:"text-center",children:"No users in this month"}),void 0!=a?a.map((function(e,t){return Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{className:"text-center",children:t+1}),Object(p.jsx)("td",{className:"text-center",children:e.Name}),Object(p.jsx)("td",{className:"text-center",children:e.Email}),Object(p.jsx)("td",{className:"text-center",children:e.Phone}),Object(p.jsx)("td",{className:"text-center",children:e.Gender}),Object(p.jsx)("td",{className:"text-center",children:e.count}),Object(p.jsx)("td",{className:"text-center",children:e.coefficient}),Object(p.jsx)("td",{className:"text-center",children:new Date(e.Create_Date).toLocaleDateString()+" "+new Date(e.Create_Date).toLocaleTimeString()})]},t)})):""]})]}),1==r.length?"":Object(p.jsx)("div",{style:{float:"right",marginRight:"10px",padding:"10px"},children:Object(p.jsx)("tr",{style:{float:"left",width:"100%"},children:r.map((function(t,a){return Object(p.jsx)("td",{children:Object(p.jsx)(O.a,{style:{marginRight:"5px"},color:a==c?"primary":"danger",onClick:function(t){e.setState({dataUserSale:r[a],indexPage:a})},children:a+1})})}))})}),Object(p.jsx)("br",{}),Object(p.jsxs)(l.i,{rows:!0,className:"cols-2",children:[Object(p.jsxs)(l.f,{backgroundColor:"red",children:[Object(p.jsx)(l.j,{children:"Bar Chart"}),Object(p.jsx)(l.g,{children:Object(p.jsx)(u.a,{datasets:[{label:"Total user of month ",backgroundColor:"#f87979",data:this.state.arrAllUser}],labels:"months",options:{tooltips:{enabled:!0}}})})]}),Object(p.jsxs)(l.f,{children:[Object(p.jsx)(l.j,{children:Object(p.jsxs)(l.u,{row:!0,children:[Object(p.jsx)(l.k,{md:"3",children:Object(p.jsx)(l.G,{htmlFor:"selectSm",children:"USER ON MONTH"})}),Object(p.jsx)(l.k,{xs:"12",md:"9",children:Object(p.jsx)("div",{style:{float:"right",width:"250px"},children:Object(p.jsxs)(l.K,{onChange:function(){var t=Object(m.a)(b.a.mark((function t(a){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.getCustomerByMonth(a.target.value);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),custom:!0,size:"sm",name:"selectSm",id:"SelectLm",children:[Object(p.jsx)("option",{value:"01",children:"01"}),Object(p.jsx)("option",{value:"02",children:"02"}),Object(p.jsx)("option",{value:"03",children:"03"}),Object(p.jsx)("option",{value:"04",children:"04"}),Object(p.jsx)("option",{value:"05",children:"05"}),Object(p.jsx)("option",{value:"06",children:"06"}),Object(p.jsx)("option",{value:"07",children:"07"}),Object(p.jsx)("option",{value:"08",children:"08"}),Object(p.jsx)("option",{value:"09",children:"09"}),Object(p.jsx)("option",{value:"10",children:"10"}),Object(p.jsx)("option",{value:"11",children:"11"}),Object(p.jsx)("option",{value:"12",children:"12"})]})})})]})}),Object(p.jsxs)(l.g,{children:[Object(p.jsxs)("table",{className:"table table-hover table-outline mb-0 d-none d-sm-table",children:[Object(p.jsx)("thead",{className:"thead-light",children:Object(p.jsxs)("tr",{children:[Object(p.jsx)("th",{className:"text-center",children:"Name"}),Object(p.jsx)("th",{className:"text-center",children:"Email"}),Object(p.jsx)("th",{className:"text-center",children:"Phone"}),Object(p.jsx)("th",{className:"text-center",children:"Gender"}),Object(p.jsx)("th",{className:"text-center",children:"Times Count"}),Object(p.jsx)("th",{className:"text-center",children:"Coefficient"})]})}),Object(p.jsxs)("tbody",{children:[Object(p.jsx)("td",{colSpan:"7",hidden:n,className:"text-center",children:"No users in this month"}),void 0!=i?i.map((function(e,t){return Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{className:"text-center",children:e.Name}),Object(p.jsx)("td",{className:"text-center",children:e.Email}),Object(p.jsx)("td",{className:"text-center",children:e.Phone}),Object(p.jsx)("td",{className:"text-center",children:e.Gender}),Object(p.jsx)("td",{className:"text-center",children:e.count}),Object(p.jsx)("td",{className:"text-center",children:e.coefficient})]},t)})):""]})]}),1==o.length?"":Object(p.jsx)("div",{style:{float:"right",marginRight:"10px",padding:"10px"},children:Object(p.jsx)("tr",{style:{float:"left",width:"100%"},children:o.map((function(t,a){return Object(p.jsx)("td",{children:Object(p.jsx)(O.a,{style:{marginRight:"5px"},color:a==d?"primary":"danger",onClick:function(t){e.setState({dataStatistical:o[a],indexPageStatistical:a})},children:a+1})})}))})})]})]})]})]})]})})})}}]),a}(i.Component),_=new Headers,y=localStorage.getItem("auth");_.append("Authorization","Bearer "+y),_.append("Content-Type","application/json");var E=function(e){Object(c.a)(a,e);var t=Object(s.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).state={month:0,dataUserSale:[],arrPagination:[],indexPage:0,dataStatistical:[],arrPaginationStatistical:[],indexPageStatistical:0,company_id:localStorage.getItem("user"),dataApi:[],arrTemp:[],hidden:!0,hidden_all:!0,arrAllUser:[]},r}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=Object(m.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getCustomer();case 2:return e.next=4,this.getCustomerByMonth("01");case 4:return e.next=6,this.getDataForCharts();case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"countType",value:function(e,t){return e.filter((function(e){return e.Phone==t})).length}},{key:"pagination",value:function(e){var t,a,n,r=[];for(t=0,a=e.length;t<a;t+=5)n=e.slice(t,t+5),r.push(n);this.setState({arrPagination:r,dataUserSale:r[this.state.indexPage]})}},{key:"pagination_statistical",value:function(e){var t,a,n,r=[];for(t=0,a=e.length;t<a;t+=5)n=e.slice(t,t+5),r.push(n);this.setState({arrPaginationStatistical:r,dataStatistical:r[this.state.indexPageStatistical]})}},{key:"getCustomer",value:function(){var e=Object(m.a)(b.a.mark((function e(){var t,a,n,r,c,s,i=this;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.state.company_id,a=JSON.parse(t),e.next=4,d()({baseURL:h.a.BASE_URL,url:h.a.LIST_CUSTOMER,method:"POST",data:{condition:{Company_Id:a.company_id,Sale_Id:a.sale_id}}});case 4:n=e.sent,this.setState({dataApi:n.data.data}),r=[],c=b.a.mark((function e(t){var c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.some((function(e){return n.data.data[t].Phone==e.Phone}))){e.next=7;break}return n.data.data[t].count=i.countType(n.data.data,n.data.data[t].Phone),e.next=4,d()({baseURL:h.a.BASE_URL,url:h.a.CALCULATOR_ALL_USER_OF_SALE,method:"POST",data:{company_id:a.company_id,phone:n.data.data[t].Phone,sale_id:a.sale_id}});case 4:c=e.sent,n.data.data[t].coefficient=c.data.data.calculator,r.push(n.data.data[t]);case 7:case"end":return e.stop()}}),e)})),s=0;case 9:if(!(s<n.data.data.length)){e.next=14;break}return e.delegateYield(c(s),"t0",11);case 11:s++,e.next=9;break;case 14:0==r.length?this.setState({hidden:!1}):this.setState({hidden:!0}),this.pagination(r);case 16:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getDataForCharts",value:function(){var e=Object(m.a)(b.a.mark((function e(){var t,a,n,r,c,s;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=this.state.company_id,a=JSON.parse(t),n=["01","02","03","04","05","06","07","08","09","10","11","12"],r=[],c=0;case 5:if(!(c<n.length)){e.next=13;break}return e.next=8,d()({baseURL:h.a.BASE_URL,url:h.a.GET_USER_SALE_BY_MONTH,method:"POST",data:{company_id:a.company_id,month:n[c],sale_id:a.sale_id}});case 8:s=e.sent,r.push(s.data.data.length);case 10:c++,e.next=5;break;case 13:this.setState({arrAllUser:r});case 14:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getCustomerByMonth",value:function(){var e=Object(m.a)(b.a.mark((function e(t){var a,n,r,c,s,i,l,o=this;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=this.state.company_id,n=JSON.parse(a),r={company_id:n.company_id,month:t,sale_id:n.sale_id},0!=t){e.next=8;break}return e.next=6,this.getCustomer();case 6:e.next=22;break;case 8:return e.next=10,d()({baseURL:h.a.BASE_URL,url:h.a.GET_USER_SALE_BY_MONTH,method:"POST",data:r});case 10:0==(c=e.sent).data.data.length?this.setState({hidden:!1}):this.setState({hidden:!0}),this.setState({dataApi:c.data.data,arrTemp:c.data.data}),s=[],i=b.a.mark((function e(a){var r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s.some((function(e){return o.state.arrTemp[a].Phone==e.Phone}))){e.next=7;break}return o.state.arrTemp[a].count=o.countType(o.state.arrTemp,o.state.arrTemp[a].Phone),e.next=4,d()({baseURL:h.a.BASE_URL,url:h.a.GET_COEFFICIENT_PER_SALE,method:"POST",data:{month:t,company_id:n.company_id,phone:o.state.arrTemp[a].Phone,sale_id:n.sale_id}});case 4:r=e.sent,o.state.arrTemp[a].coefficient=r.data.data.calculator,s.push(o.state.arrTemp[a]);case 7:case"end":return e.stop()}}),e)})),l=0;case 16:if(!(l<this.state.arrTemp.length)){e.next=21;break}return e.delegateYield(i(l),"t0",18);case 18:l++,e.next=16;break;case 21:this.pagination_statistical(s);case 22:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,a=t.dataUserSale,n=t.hidden,r=t.arrPagination,c=t.indexPage,s=t.hidden_all,i=t.dataStatistical,o=t.arrPaginationStatistical,d=t.indexPageStatistical;return Object(p.jsx)(l.J,{children:Object(p.jsx)(l.k,{children:Object(p.jsxs)(l.f,{children:[Object(p.jsx)(l.j,{children:Object(p.jsxs)(l.u,{row:!0,children:[Object(p.jsx)(l.k,{md:"3",children:Object(p.jsx)(l.G,{htmlFor:"selectSm",children:"ALL USER SALE OF COMPANY"})}),Object(p.jsx)(l.k,{xs:"12",md:"9"})]})}),Object(p.jsxs)(l.g,{children:[Object(p.jsxs)("table",{className:"table table-hover table-outline mb-0 d-none d-sm-table",children:[Object(p.jsx)("thead",{className:"thead-light",children:Object(p.jsxs)("tr",{children:[Object(p.jsx)("th",{className:"text-center",children:"No."}),Object(p.jsx)("th",{className:"text-center",children:"Name"}),Object(p.jsx)("th",{className:"text-center",children:"Email"}),Object(p.jsx)("th",{className:"text-center",children:"Phone"}),Object(p.jsx)("th",{className:"text-center",children:"Gender"}),Object(p.jsx)("th",{className:"text-center",children:"Time Visits"}),Object(p.jsx)("th",{className:"text-center",children:"Coefficient"}),Object(p.jsx)("th",{className:"text-center",children:"Last Times Visit"})]})}),Object(p.jsxs)("tbody",{children:[Object(p.jsx)("td",{colSpan:"9",hidden:s,className:"text-center",children:"No users in this month"}),void 0!=a?a.map((function(e,t){return Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{className:"text-center",children:t+1}),Object(p.jsx)("td",{className:"text-center",children:e.Name}),Object(p.jsx)("td",{className:"text-center",children:e.Email}),Object(p.jsx)("td",{className:"text-center",children:e.Phone}),Object(p.jsx)("td",{className:"text-center",children:e.Gender}),Object(p.jsx)("td",{className:"text-center",children:e.count}),Object(p.jsx)("td",{className:"text-center",children:e.coefficient}),Object(p.jsx)("td",{className:"text-center",children:new Date(e.Create_Date).toLocaleDateString()+" "+new Date(e.Create_Date).toLocaleTimeString()})]},t)})):""]})]}),1==r.length?"":Object(p.jsx)("div",{style:{float:"right",marginRight:"10px",padding:"10px"},children:Object(p.jsx)("tr",{style:{float:"left",width:"100%"},children:r.map((function(t,a){return Object(p.jsx)("td",{children:Object(p.jsx)(O.a,{style:{marginRight:"5px"},color:a==c?"primary":"danger",onClick:function(t){e.setState({dataUserSale:r[a],indexPage:a})},children:a+1})})}))})}),Object(p.jsx)("br",{}),Object(p.jsxs)(l.i,{rows:!0,className:"cols-2",children:[Object(p.jsxs)(l.f,{backgroundColor:"red",children:[Object(p.jsx)(l.j,{children:"Bar Chart"}),Object(p.jsx)(l.g,{children:Object(p.jsx)(u.a,{datasets:[{label:"Total user of month ",backgroundColor:"#f87979",data:this.state.arrAllUser}],labels:"months",options:{tooltips:{enabled:!0}}})})]}),Object(p.jsxs)(l.f,{children:[Object(p.jsx)(l.j,{children:Object(p.jsxs)(l.u,{row:!0,children:[Object(p.jsx)(l.k,{md:"3",children:Object(p.jsx)(l.G,{htmlFor:"selectSm",children:"USER ON MONTH"})}),Object(p.jsx)(l.k,{xs:"12",md:"9",children:Object(p.jsx)("div",{style:{float:"right",width:"250px"},children:Object(p.jsxs)(l.K,{onChange:function(){var t=Object(m.a)(b.a.mark((function t(a){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.getCustomerByMonth(a.target.value);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),custom:!0,size:"sm",name:"selectSm",id:"SelectLm",children:[Object(p.jsx)("option",{value:"01",children:"01"}),Object(p.jsx)("option",{value:"02",children:"02"}),Object(p.jsx)("option",{value:"03",children:"03"}),Object(p.jsx)("option",{value:"04",children:"04"}),Object(p.jsx)("option",{value:"05",children:"05"}),Object(p.jsx)("option",{value:"06",children:"06"}),Object(p.jsx)("option",{value:"07",children:"07"}),Object(p.jsx)("option",{value:"08",children:"08"}),Object(p.jsx)("option",{value:"09",children:"09"}),Object(p.jsx)("option",{value:"10",children:"10"}),Object(p.jsx)("option",{value:"11",children:"11"}),Object(p.jsx)("option",{value:"12",children:"12"})]})})})]})}),Object(p.jsxs)(l.g,{children:[Object(p.jsxs)("table",{className:"table table-hover table-outline mb-0 d-none d-sm-table",children:[Object(p.jsx)("thead",{className:"thead-light",children:Object(p.jsxs)("tr",{children:[Object(p.jsx)("th",{className:"text-center",children:"Name"}),Object(p.jsx)("th",{className:"text-center",children:"Email"}),Object(p.jsx)("th",{className:"text-center",children:"Phone"}),Object(p.jsx)("th",{className:"text-center",children:"Gender"}),Object(p.jsx)("th",{className:"text-center",children:"Times Count"}),Object(p.jsx)("th",{className:"text-center",children:"Coefficient"})]})}),Object(p.jsxs)("tbody",{children:[Object(p.jsx)("td",{colSpan:"7",hidden:n,className:"text-center",children:"No users in this month"}),void 0!=i?i.map((function(e,t){return Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{className:"text-center",children:e.Name}),Object(p.jsx)("td",{className:"text-center",children:e.Email}),Object(p.jsx)("td",{className:"text-center",children:e.Phone}),Object(p.jsx)("td",{className:"text-center",children:e.Gender}),Object(p.jsx)("td",{className:"text-center",children:e.count}),Object(p.jsx)("td",{className:"text-center",children:e.coefficient})]},t)})):""]})]}),1==o.length?"":Object(p.jsx)("div",{style:{float:"right",marginRight:"10px",padding:"10px"},children:Object(p.jsx)("tr",{style:{float:"left",width:"100%"},children:o.map((function(t,a){return Object(p.jsx)("td",{children:Object(p.jsx)(O.a,{style:{marginRight:"5px"},color:a==d?"primary":"danger",onClick:function(t){e.setState({dataStatistical:o[a],indexPageStatistical:a})},children:a+1})})}))})})]})]})]})]})]})})})}}]),a}(i.Component),T=new Headers,v=localStorage.getItem("auth");T.append("Authorization","Bearer "+v),T.append("Content-Type","application/json");var N=function(e){Object(c.a)(a,e);var t=Object(s.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return Object(p.jsx)("div",{children:"SHOPMANAGER"==localStorage.getItem("role")?Object(p.jsx)(S,{}):Object(p.jsx)(E,{})})}}]),a}(i.Component);t.default=N},645:function(e,t,a){"use strict";t.a={BASE_URL:"http://thanhvien.applamdep.com",LIST_USER:"/api/list-user",LIST_USER_WITH_ID:"/api/list-user?id=",ADD_USER:"/api/add-user",UPDATE_USER:"/api/update-user",DELETE_USER:"/api/delete-user",LOGIN_ADMIN:"/api/login_admin",GET_SHOP:"/api/get-shop",GET_SALE:"/api/get-sale",GET_COEFFICIENT:"/api/calculator-coefficient-user",GET_COEFFICIENT_PER_SALE:"/api/calculator-coefficient-user-per-sale",GET_USER_SALE_BY_MONTH:"/api/get-user-of-sale-by-month",CALCULATOR_ALL_USER_OF_COMPANY:"/api/calculator-all-user-company",CALCULATOR_ALL_USER_OF_SALE:"/api/calculator-all-user-of-sale",LIST_CUSTOMER:"/api/list-customer",LIST_CUSTOMER_BY_MONTH:"/api/get-user-sale-by-month",LIST_TYPEKEY:"/api/list-typekey",LIST_TYPEKEY_WITH_ID:"/api/list-typekey?id=",ADD_TYPEKEY:"/api/add-typekey",UPDATE_TYPEKEY:"/api/update-typekey",DELETE_TYPEKEY:"/api/delete-typekey",LIST_ROLE:"/api/list-role",LIST_ROLE_WITH_ID:"/api/list-role?id=",ADD_ROLE:"/api/add-role",UPDATE_ROLE:"/api/update-role",DELETE_ROLE:"/api/delete-role",LIST_SALELOG:"/api/list-salelog",LIST_SALELOG_WITH_ID:"/api/list-salelog?id=",ADD_SALELOG:"/api/add-salelog",UPDATE_SALELOG:"/api/update-salelog",DELETE_SALELOG:"/api/delete-salelog",LIST_SALE:"/api/list-sale",LIST_SALE_WITH_ID:"/api/list-sale?id=",ADD_SALE:"/api/add-sale",UPDATE_SALE:"/api/update-sale",DELETE_SALE:"/api/delete-sale",LIST_KEYORDER:"/api/list-keyorder",LIST_KEYORDER_WITH_ID:"/api/list-keyorder?id=",ADD_KEYORDER:"/api/add-keyorder",UPDATE_KEYORDER:"/api/update-keyorder",DELETE_KEYORDER:"/api/delete-keyorder",LIST_KEY:"/api/list-key",LIST_KEY_WITH_ID:"/api/list-key?id=",ADD_KEY:"/api/add-key",UPDATE_KEY:"/api/update-key",DELETE_KEY:"/api/delete-key",LIST_COMPANY:"/api/list-company",LIST_COMPANY_WITH_ID:"/api/list-company?id=",ADD_COMPANY:"/api/add-company",UPDATE_COMPANY:"/api/update-company",DELETE_COMPANY:"/api/delete-company",LIST_LINK:"/api/list-link",LIST_LINK_WITH_ID:"/api/list-link?id=",ADD_LINK:"/api/add-link",UPDATE_LINK:"/api/update-link",DELETE_LINK:"/api/delete-link"}},698:function(e,t){!function(e,t){for(var a in t)e[a]=t[a]}(t,function(e){var t={};function a(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,a),r.l=!0,r.exports}return a.m=e,a.c=t,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=0)}([function(e,t,a){"use strict";a.r(t),a.d(t,"deepObjectsMerge",(function(){return n})),a.d(t,"getColor",(function(){return l})),a.d(t,"getStyle",(function(){return i})),a.d(t,"hexToRgb",(function(){return o})),a.d(t,"hexToRgba",(function(){return d})),a.d(t,"makeUid",(function(){return h})),a.d(t,"omitByKeys",(function(){return u})),a.d(t,"pickByKeys",(function(){return j})),a.d(t,"rgbToHex",(function(){return p}));var n=function e(t,a){for(var n=0,r=Object.keys(a);n<r.length;n++){var c=r[n];a[c]instanceof Object&&Object.assign(a[c],e(t[c],a[c]))}return Object.assign(t||{},a),t},r=function(){for(var e={},t=document.styleSheets,a="",n=t.length-1;n>-1;n--){for(var r=t[n].cssRules,c=r.length-1;c>-1;c--)if(".ie-custom-properties"===r[c].selectorText){a=r[c].cssText;break}if(a)break}return(a=a.substring(a.lastIndexOf("{")+1,a.lastIndexOf("}"))).split(";").forEach((function(t){if(t){var a=t.split(": ")[0],n=t.split(": ")[1];a&&n&&(e["--".concat(a.trim())]=n.trim())}})),e},c=function(){return Boolean(document.documentMode)&&document.documentMode>=10},s=function(e){return e.match(/^--.*/i)},i=function(e){var t,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document.body;if(s(e)&&c()){var n=r();t=n[e]}else t=window.getComputedStyle(a,null).getPropertyValue(e).replace(/^\s/,"");return t},l=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document.body,a="--".concat(e),n=i(a,t);return n||e},o=function(e){if(void 0===e)throw new TypeError("Hex color is not defined");var t,a,n;if(!e.match(/^#(?:[0-9a-f]{3}){1,2}$/i))throw new Error("".concat(e," is not a valid hex color"));return 7===e.length?(t=parseInt(e.slice(1,3),16),a=parseInt(e.slice(3,5),16),n=parseInt(e.slice(5,7),16)):(t=parseInt(e.slice(1,2),16),a=parseInt(e.slice(2,3),16),n=parseInt(e.slice(3,5),16)),"rgba(".concat(t,", ").concat(a,", ").concat(n,")")},d=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100;if(void 0===e)throw new TypeError("Hex color is not defined");var a,n,r,c=e.match(/^#(?:[0-9a-f]{3}){1,2}$/i);if(!c)throw new Error("".concat(e," is not a valid hex color"));return 7===e.length?(a=parseInt(e.slice(1,3),16),n=parseInt(e.slice(3,5),16),r=parseInt(e.slice(5,7),16)):(a=parseInt(e.slice(1,2),16),n=parseInt(e.slice(2,3),16),r=parseInt(e.slice(3,5),16)),"rgba(".concat(a,", ").concat(n,", ").concat(r,", ").concat(t/100,")")},h=function(){return"uid-"+Math.random().toString(36).substr(2)},u=function(e,t){for(var a={},n=Object.keys(e),r=0;r<n.length;r++)!t.includes(n[r])&&(a[n[r]]=e[n[r]]);return a},j=function(e,t){for(var a={},n=0;n<t.length;n++)a[t[n]]=e[t[n]];return a},p=function(e){if(void 0===e)throw new TypeError("Hex color is not defined");if("transparent"===e)return"#00000000";var t=e.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);if(!t)throw new Error("".concat(e," is not a valid rgb color"));var a="0".concat(parseInt(t[1],10).toString(16)),n="0".concat(parseInt(t[2],10).toString(16)),r="0".concat(parseInt(t[3],10).toString(16));return"#".concat(a.slice(-2)).concat(n.slice(-2)).concat(r.slice(-2))},x={deepObjectsMerge:n,getColor:l,getStyle:i,hexToRgb:o,hexToRgba:d,makeUid:h,omitByKeys:u,pickByKeys:j,rgbToHex:p};t.default=x}]))}}]);
//# sourceMappingURL=22.8aa3989a.chunk.js.map