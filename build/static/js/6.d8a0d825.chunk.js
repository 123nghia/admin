(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[6],{1296:function(e,t,o){"use strict";o.r(t);o(2);var r=o(654),a=o(664),n=o(799),s=o(31),c=o(173),l=o(750),i=o(711),d=o(20),b=["backgroundColor","pointHoverBackgroundColor","dataPoints","label","pointed"],j=function(e){var t=e.backgroundColor,o=e.pointHoverBackgroundColor,r=e.dataPoints,a=e.label,n=(e.pointed,Object(c.a)(e,b)),j=[{data:r,backgroundColor:Object(l.getColor)(t),pointHoverBackgroundColor:Object(l.getColor)(o),label:a,barPercentage:.5,categoryPercentage:1}],h={maintainAspectRatio:!1,legend:{display:!1},scales:{xAxes:[{display:!1}],yAxes:[{display:!1}]}};return Object(d.jsx)(i.a,Object(s.a)(Object(s.a)({},n),{},{datasets:j,options:h,labels:a}))};j.defaultProps={backgroundColor:"rgba(0,0,0,.2)",dataPoints:[10,22,34,46,58,70,46,23,45,78,34,12],label:"Sales"};var h=j;t.default=function(){return Object(d.jsxs)(r.S,{children:[Object(d.jsx)(r.p,{sm:"6",lg:"3",children:Object(d.jsx)(r.gb,{color:"gradient-primary",header:"9.823",text:"Members online",footerSlot:Object(d.jsx)(n.a,{pointed:!0,className:"c-chart-wrapper mt-3 mx-3",style:{height:"70px"},dataPoints:[65,59,84,84,51,55,40],pointHoverBackgroundColor:"primary",label:"Members",labels:"months"}),children:Object(d.jsxs)(r.s,{children:[Object(d.jsx)(r.v,{color:"transparent",children:Object(d.jsx)(a.a,{name:"cil-settings"})}),Object(d.jsxs)(r.u,{className:"pt-0",placement:"bottom-end",children:[Object(d.jsx)(r.t,{children:"Action"}),Object(d.jsx)(r.t,{children:"Another action"}),Object(d.jsx)(r.t,{children:"Something else here..."}),Object(d.jsx)(r.t,{disabled:!0,children:"Disabled action"})]})]})})}),Object(d.jsx)(r.p,{sm:"6",lg:"3",children:Object(d.jsx)(r.gb,{color:"gradient-info",header:"9.823",text:"Members online",footerSlot:Object(d.jsx)(n.a,{pointed:!0,className:"mt-3 mx-3",style:{height:"70px"},dataPoints:[1,18,9,17,34,22,11],pointHoverBackgroundColor:"info",options:{elements:{line:{tension:1e-5}}},label:"Members",labels:"months"}),children:Object(d.jsxs)(r.s,{children:[Object(d.jsx)(r.v,{caret:!1,color:"transparent",children:Object(d.jsx)(a.a,{name:"cil-location-pin"})}),Object(d.jsxs)(r.u,{className:"pt-0",placement:"bottom-end",children:[Object(d.jsx)(r.t,{children:"Action"}),Object(d.jsx)(r.t,{children:"Another action"}),Object(d.jsx)(r.t,{children:"Something else here..."}),Object(d.jsx)(r.t,{disabled:!0,children:"Disabled action"})]})]})})}),Object(d.jsx)(r.p,{sm:"6",lg:"3",children:Object(d.jsx)(r.gb,{color:"gradient-warning",header:"9.823",text:"Members online",footerSlot:Object(d.jsx)(n.a,{className:"mt-3",style:{height:"70px"},backgroundColor:"rgba(255,255,255,.2)",dataPoints:[78,81,80,45,34,12,40],options:{elements:{line:{borderWidth:2.5}}},pointHoverBackgroundColor:"warning",label:"Members",labels:"months"}),children:Object(d.jsxs)(r.s,{children:[Object(d.jsx)(r.v,{color:"transparent",children:Object(d.jsx)(a.a,{name:"cil-settings"})}),Object(d.jsxs)(r.u,{className:"pt-0",placement:"bottom-end",children:[Object(d.jsx)(r.t,{children:"Action"}),Object(d.jsx)(r.t,{children:"Another action"}),Object(d.jsx)(r.t,{children:"Something else here..."}),Object(d.jsx)(r.t,{disabled:!0,children:"Disabled action"})]})]})})}),Object(d.jsx)(r.p,{sm:"6",lg:"3",children:Object(d.jsx)(r.gb,{color:"gradient-danger",header:"9.823",text:"Members online",footerSlot:Object(d.jsx)(h,{className:"mt-3 mx-3",style:{height:"70px"},backgroundColor:"rgb(250, 152, 152)",label:"Members",labels:"months"}),children:Object(d.jsxs)(r.s,{children:[Object(d.jsx)(r.v,{caret:!0,className:"text-white",color:"transparent",children:Object(d.jsx)(a.a,{name:"cil-settings"})}),Object(d.jsxs)(r.u,{className:"pt-0",placement:"bottom-end",children:[Object(d.jsx)(r.t,{children:"Action"}),Object(d.jsx)(r.t,{children:"Another action"}),Object(d.jsx)(r.t,{children:"Something else here..."}),Object(d.jsx)(r.t,{disabled:!0,children:"Disabled action"})]})]})})})]})}},799:function(e,t,o){"use strict";var r=o(31),a=o(173),n=(o(2),o(750)),s=o(711),c=o(20),l=["borderColor","backgroundColor","pointHoverBackgroundColor","dataPoints","label","pointed"],i=function(e){var t=e.borderColor,o=e.backgroundColor,i=e.pointHoverBackgroundColor,d=e.dataPoints,b=e.label,j=e.pointed,h=Object(a.a)(e,l),p=i||("transparent"!==o?o:t),x=[{data:d,borderColor:Object(n.getColor)(t),backgroundColor:Object(n.getColor)(o),pointBackgroundColor:Object(n.getColor)(p),pointHoverBackgroundColor:Object(n.getColor)(p),label:b}],g={scales:{xAxes:[{offset:!0,gridLines:{color:"transparent",zeroLineColor:"transparent"},ticks:{fontSize:2,fontColor:"transparent"}}],yAxes:[{display:!1,ticks:{display:!1,min:Math.min.apply(Math,d)-5,max:Math.max.apply(Math,d)+5}}]},elements:{line:{borderWidth:1},point:{radius:4,hitRadius:10,hoverRadius:4}}},m={scales:{xAxes:[{display:!1}],yAxes:[{display:!1}]},elements:{line:{borderWidth:2},point:{radius:0,hitRadius:10,hoverRadius:4}}},O=function(){var e=j?g:m;return Object.assign({},e,{maintainAspectRatio:!1,legend:{display:!1}})}(),u=Object(n.deepObjectsMerge)(x,h.datasets||{}),C=Object(n.deepObjectsMerge)(O,h.options||{});return Object(c.jsx)(s.b,Object(r.a)(Object(r.a)({},h),{},{datasets:u,options:C,labels:b}))};i.defaultProps={borderColor:"rgba(255,255,255,.55)",backgroundColor:"transparent",dataPoints:[10,22,34,46,58,70,46,23,45,78,34,12],label:"Sales"},t.a=i}}]);
//# sourceMappingURL=6.d8a0d825.chunk.js.map