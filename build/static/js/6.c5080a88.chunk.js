(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[6],{1298:function(e,t,o){"use strict";o.r(t);o(2);var r=o(653),a=o(661),n=o(796),s=o(24),c=o(174),l=o(754),i=o(709),d=o(17),b=["backgroundColor","pointHoverBackgroundColor","dataPoints","label","pointed"],j=function(e){var t=e.backgroundColor,o=e.pointHoverBackgroundColor,r=e.dataPoints,a=e.label,n=(e.pointed,Object(c.a)(e,b)),j=[{data:r,backgroundColor:Object(l.getColor)(t),pointHoverBackgroundColor:Object(l.getColor)(o),label:a,barPercentage:.5,categoryPercentage:1}],h={maintainAspectRatio:!1,legend:{display:!1},scales:{xAxes:[{display:!1}],yAxes:[{display:!1}]}};return Object(d.jsx)(i.a,Object(s.a)(Object(s.a)({},n),{},{datasets:j,options:h,labels:a}))};j.defaultProps={backgroundColor:"rgba(0,0,0,.2)",dataPoints:[10,22,34,46,58,70,46,23,45,78,34,12],label:"Sales"};var h=j;t.default=function(){return Object(d.jsxs)(r.W,{children:[Object(d.jsx)(r.p,{sm:"6",lg:"3",children:Object(d.jsx)(r.kb,{color:"gradient-primary",header:"9.823",text:"Members online",footerSlot:Object(d.jsx)(n.a,{pointed:!0,className:"c-chart-wrapper mt-3 mx-3",style:{height:"70px"},dataPoints:[65,59,84,84,51,55,40],pointHoverBackgroundColor:"primary",label:"Members",labels:"months"}),children:Object(d.jsxs)(r.t,{children:[Object(d.jsx)(r.w,{color:"transparent",children:Object(d.jsx)(a.a,{name:"cil-settings"})}),Object(d.jsxs)(r.v,{className:"pt-0",placement:"bottom-end",children:[Object(d.jsx)(r.u,{children:"Action"}),Object(d.jsx)(r.u,{children:"Another action"}),Object(d.jsx)(r.u,{children:"Something else here..."}),Object(d.jsx)(r.u,{disabled:!0,children:"Disabled action"})]})]})})}),Object(d.jsx)(r.p,{sm:"6",lg:"3",children:Object(d.jsx)(r.kb,{color:"gradient-info",header:"9.823",text:"Members online",footerSlot:Object(d.jsx)(n.a,{pointed:!0,className:"mt-3 mx-3",style:{height:"70px"},dataPoints:[1,18,9,17,34,22,11],pointHoverBackgroundColor:"info",options:{elements:{line:{tension:1e-5}}},label:"Members",labels:"months"}),children:Object(d.jsxs)(r.t,{children:[Object(d.jsx)(r.w,{caret:!1,color:"transparent",children:Object(d.jsx)(a.a,{name:"cil-location-pin"})}),Object(d.jsxs)(r.v,{className:"pt-0",placement:"bottom-end",children:[Object(d.jsx)(r.u,{children:"Action"}),Object(d.jsx)(r.u,{children:"Another action"}),Object(d.jsx)(r.u,{children:"Something else here..."}),Object(d.jsx)(r.u,{disabled:!0,children:"Disabled action"})]})]})})}),Object(d.jsx)(r.p,{sm:"6",lg:"3",children:Object(d.jsx)(r.kb,{color:"gradient-warning",header:"9.823",text:"Members online",footerSlot:Object(d.jsx)(n.a,{className:"mt-3",style:{height:"70px"},backgroundColor:"rgba(255,255,255,.2)",dataPoints:[78,81,80,45,34,12,40],options:{elements:{line:{borderWidth:2.5}}},pointHoverBackgroundColor:"warning",label:"Members",labels:"months"}),children:Object(d.jsxs)(r.t,{children:[Object(d.jsx)(r.w,{color:"transparent",children:Object(d.jsx)(a.a,{name:"cil-settings"})}),Object(d.jsxs)(r.v,{className:"pt-0",placement:"bottom-end",children:[Object(d.jsx)(r.u,{children:"Action"}),Object(d.jsx)(r.u,{children:"Another action"}),Object(d.jsx)(r.u,{children:"Something else here..."}),Object(d.jsx)(r.u,{disabled:!0,children:"Disabled action"})]})]})})}),Object(d.jsx)(r.p,{sm:"6",lg:"3",children:Object(d.jsx)(r.kb,{color:"gradient-danger",header:"9.823",text:"Members online",footerSlot:Object(d.jsx)(h,{className:"mt-3 mx-3",style:{height:"70px"},backgroundColor:"rgb(250, 152, 152)",label:"Members",labels:"months"}),children:Object(d.jsxs)(r.t,{children:[Object(d.jsx)(r.w,{caret:!0,className:"text-white",color:"transparent",children:Object(d.jsx)(a.a,{name:"cil-settings"})}),Object(d.jsxs)(r.v,{className:"pt-0",placement:"bottom-end",children:[Object(d.jsx)(r.u,{children:"Action"}),Object(d.jsx)(r.u,{children:"Another action"}),Object(d.jsx)(r.u,{children:"Something else here..."}),Object(d.jsx)(r.u,{disabled:!0,children:"Disabled action"})]})]})})})]})}},796:function(e,t,o){"use strict";var r=o(24),a=o(174),n=(o(2),o(754)),s=o(709),c=o(17),l=["borderColor","backgroundColor","pointHoverBackgroundColor","dataPoints","label","pointed"],i=function(e){var t=e.borderColor,o=e.backgroundColor,i=e.pointHoverBackgroundColor,d=e.dataPoints,b=e.label,j=e.pointed,h=Object(a.a)(e,l),p=i||("transparent"!==o?o:t),x=[{data:d,borderColor:Object(n.getColor)(t),backgroundColor:Object(n.getColor)(o),pointBackgroundColor:Object(n.getColor)(p),pointHoverBackgroundColor:Object(n.getColor)(p),label:b}],m={scales:{xAxes:[{offset:!0,gridLines:{color:"transparent",zeroLineColor:"transparent"},ticks:{fontSize:2,fontColor:"transparent"}}],yAxes:[{display:!1,ticks:{display:!1,min:Math.min.apply(Math,d)-5,max:Math.max.apply(Math,d)+5}}]},elements:{line:{borderWidth:1},point:{radius:4,hitRadius:10,hoverRadius:4}}},O={scales:{xAxes:[{display:!1}],yAxes:[{display:!1}]},elements:{line:{borderWidth:2},point:{radius:0,hitRadius:10,hoverRadius:4}}},u=function(){var e=j?m:O;return Object.assign({},e,{maintainAspectRatio:!1,legend:{display:!1}})}(),g=Object(n.deepObjectsMerge)(x,h.datasets||{}),C=Object(n.deepObjectsMerge)(u,h.options||{});return Object(c.jsx)(s.b,Object(r.a)(Object(r.a)({},h),{},{datasets:g,options:C,labels:b}))};i.defaultProps={borderColor:"rgba(255,255,255,.55)",backgroundColor:"transparent",dataPoints:[10,22,34,46,58,70,46,23,45,78,34,12],label:"Sales"},t.a=i}}]);
//# sourceMappingURL=6.c5080a88.chunk.js.map