(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[8],{1180:function(e,t,o){"use strict";var n=o(12),r=o(28),a=o(2),c=o.n(a),i=o(64),l=o.n(i),u=o(638),s=o.n(u),p=o(639),f={tag:p.n,className:l.a.string,cssModule:l.a.object},d=function(e){var t=e.className,o=e.cssModule,a=e.tag,i=Object(r.a)(e,["className","cssModule","tag"]),l=Object(p.j)(s()(t,"card-header"),o);return c.a.createElement(a,Object(n.a)({},i,{className:l}))};d.propTypes=f,d.defaultProps={tag:"div"},t.a=d},1189:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CopyToClipboard=void 0;var n=a(o(2)),r=a(o(1190));function a(e){return e&&e.__esModule?e:{default:e}}function c(e){return(c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function l(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function p(e,t){return!t||"object"!==c(t)&&"function"!==typeof t?d(e):t}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}var m=function(e){function t(){var e,o;u(this,t);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return b(d(o=p(this,(e=f(t)).call.apply(e,[this].concat(c)))),"onClick",(function(e){var t=o.props,a=t.text,c=t.onCopy,i=t.children,l=t.options,u=n.default.Children.only(i),s=(0,r.default)(a,l);c&&c(a,s),u&&u.props&&"function"===typeof u.props.onClick&&u.props.onClick(e)})),o}var o,a,c;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(t,e),o=t,(a=[{key:"render",value:function(){var e=this.props,t=(e.text,e.onCopy,e.options,e.children),o=l(e,["text","onCopy","options","children"]),r=n.default.Children.only(t);return n.default.cloneElement(r,function(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(o,!0).forEach((function(t){b(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(o).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}({},o,{onClick:this.onClick}))}}])&&s(o.prototype,a),c&&s(o,c),t}(n.default.PureComponent);t.CopyToClipboard=m,b(m,"defaultProps",{onCopy:void 0,options:void 0})},1190:function(e,t,o){"use strict";var n=o(1191),r={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,t){var o,a,c,i,l,u,s=!1;t||(t={}),o=t.debug||!1;try{if(c=n(),i=document.createRange(),l=document.getSelection(),(u=document.createElement("span")).textContent=e,u.style.all="unset",u.style.position="fixed",u.style.top=0,u.style.clip="rect(0, 0, 0, 0)",u.style.whiteSpace="pre",u.style.webkitUserSelect="text",u.style.MozUserSelect="text",u.style.msUserSelect="text",u.style.userSelect="text",u.addEventListener("copy",(function(n){if(n.stopPropagation(),t.format)if(n.preventDefault(),"undefined"===typeof n.clipboardData){o&&console.warn("unable to use e.clipboardData"),o&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var a=r[t.format]||r.default;window.clipboardData.setData(a,e)}else n.clipboardData.clearData(),n.clipboardData.setData(t.format,e);t.onCopy&&(n.preventDefault(),t.onCopy(n.clipboardData))})),document.body.appendChild(u),i.selectNodeContents(u),l.addRange(i),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");s=!0}catch(p){o&&console.error("unable to copy using execCommand: ",p),o&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),s=!0}catch(p){o&&console.error("unable to copy using clipboardData: ",p),o&&console.error("falling back to prompt"),a=function(e){var t=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}("message"in t?t.message:"Copy to clipboard: #{key}, Enter"),window.prompt(a,e)}}finally{l&&("function"==typeof l.removeRange?l.removeRange(i):l.removeAllRanges()),u&&document.body.removeChild(u),c()}return s}},1191:function(e,t){e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,o=[],n=0;n<e.rangeCount;n++)o.push(e.getRangeAt(n));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||o.forEach((function(t){e.addRange(t)})),t&&t.focus()}}},662:function(e,t,o){},932:function(e,t,o){"use strict";var n=o(12),r=o(28),a=o(2),c=o.n(a),i=o(64),l=o.n(i),u=o(638),s=o.n(u),p=o(639),f={tag:p.n,inverse:l.a.bool,color:l.a.string,body:l.a.bool,outline:l.a.bool,className:l.a.string,cssModule:l.a.object,innerRef:l.a.oneOfType([l.a.object,l.a.string,l.a.func])},d=function(e){var t=e.className,o=e.cssModule,a=e.color,i=e.body,l=e.inverse,u=e.outline,f=e.tag,d=e.innerRef,y=Object(r.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),b=Object(p.j)(s()(t,"card",!!l&&"text-white",!!i&&"card-body",!!a&&(u?"border":"bg")+"-"+a),o);return c.a.createElement(f,Object(n.a)({},y,{className:b,ref:d}))};d.propTypes=f,d.defaultProps={tag:"div"},t.a=d},938:function(e,t,o){"use strict";var n=o(1189).CopyToClipboard;n.CopyToClipboard=n,e.exports=n}}]);
//# sourceMappingURL=8.3034f07e.chunk.js.map