(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[413],{23171:function(e,t,r){"use strict";r.d(t,{t:function(){return l}});var n=r(85893);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var l=function(e){return(0,n.jsx)("svg",function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){s(e,t,r[t])}))}return e}({viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e,{children:(0,n.jsx)("path",{d:"M16.5702 7.95923C16.5698 7.95886 16.5695 7.9585 16.5691 7.95813L10.0417 1.43164C9.76348 1.15332 9.39357 1 9.0001 1C8.60663 1 8.23672 1.1532 7.95837 1.43152L1.43439 7.95471C1.43219 7.95691 1.42999 7.95923 1.42779 7.96143C0.856447 8.53601 0.857424 9.46826 1.4306 10.0414C1.69247 10.3033 2.03833 10.4551 2.40812 10.4709C2.42314 10.4724 2.43827 10.4731 2.45353 10.4731H2.71369V15.2762C2.71369 16.2267 3.48709 17 4.43787 17H6.99159C7.25041 17 7.46039 16.7902 7.46039 16.5312V12.7656C7.46039 12.3319 7.81321 11.9791 8.24697 11.9791H9.75323C10.187 11.9791 10.5398 12.3319 10.5398 12.7656V16.5312C10.5398 16.7902 10.7497 17 11.0086 17H13.5623C14.5131 17 15.2865 16.2267 15.2865 15.2762V10.4731H15.5277C15.9211 10.4731 16.291 10.3199 16.5695 10.0416C17.1433 9.46753 17.1435 8.53369 16.5702 7.95923Z",fill:"currentColor"})}))}},13123:function(e,t,r){"use strict";r.d(t,{Z:function(){return h}});var n=r(85893),s=r(94184),l=r.n(s),o=r(67294),c=r(45432),a=r.n(c);class i extends o.Component{constructor(e){super(e),this._osInstance=null,this._osTargetRef=o.createRef()}osInstance(){return this._osInstance}osTarget(){return this._osTargetRef.current||null}componentDidMount(){this._osInstance=a()(this.osTarget(),this.props.options||{},this.props.extensions),u(this._osInstance,this.props.className)}componentWillUnmount(){a().valid(this._osInstance)&&(this._osInstance.destroy(),this._osInstance=null)}componentDidUpdate(e){a().valid(this._osInstance)&&(this._osInstance.options(this.props.options),e.className!==this.props.className&&u(this._osInstance,this.props.className))}render(){const e=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var s=0;for(n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]])}return r}(this.props,["options","extensions","children","className"]);return o.createElement("div",Object.assign({className:"os-host"},e,{ref:this._osTargetRef}),o.createElement("div",{className:"os-resize-observer-host"}),o.createElement("div",{className:"os-padding"},o.createElement("div",{className:"os-viewport"},o.createElement("div",{className:"os-content"},this.props.children))),o.createElement("div",{className:"os-scrollbar os-scrollbar-horizontal "},o.createElement("div",{className:"os-scrollbar-track"},o.createElement("div",{className:"os-scrollbar-handle"}))),o.createElement("div",{className:"os-scrollbar os-scrollbar-vertical"},o.createElement("div",{className:"os-scrollbar-track"},o.createElement("div",{className:"os-scrollbar-handle"}))),o.createElement("div",{className:"os-scrollbar-corner"}))}}function u(e,t){if(a().valid(e)){const{host:r}=e.getElements(),n=new RegExp(`(^os-host([-_].+|)$)|${e.options().className.replace(/\s/g,"$|")}$`,"g"),s=r.className.split(" ").filter((e=>e.match(n))).join(" ");r.className=`${s} ${t||""}`}}r(80153);function f(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){f(e,t,r[t])}))}return e}function x(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}function h(e){var t=e.options,r=e.style,s=e.className,o=x(e,["options","style","className"]);return(0,n.jsx)(i,p({options:p({className:l()("os-theme-thin",s),scrollbars:{autoHide:"scroll"}},t),style:r},o))}},81795:function(e,t,r){"use strict";r.d(t,{Z:function(){return c}});var n=r(85893),s=r(94184),l=r.n(s),o=r(10268);function c(e){var t=e.className,r=(new Date).getFullYear(),s=(0,o.$G)("common").t;return(0,n.jsxs)("div",{className:l()("tracking-[0.2px]",t),children:["\xa9 ",s("text-copy-right")," ",r,". "," ",(0,n.jsx)("a",{href:"https://goboss.com.ng",target:"_blank",rel:"noopener noreferrer",className:"hover:text-brand-dark",children:"GoBoss e-Commerce Platform. Key partner for CBN eNaira"}),"."]})}},90413:function(e,t,r){"use strict";r.r(t),r.d(t,{Sidebar:function(){return E},default:function(){return S}});var n=r(85893),s=r(94184),l=r.n(s),o=r(90551),c=r(65728),a=r(52565);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var u=function(e){return(0,n.jsx)("svg",function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){i(e,t,r[t])}))}return e}({viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e,{children:(0,n.jsx)("path",{d:"M9 1C7.41775 1 5.87103 1.46919 4.55544 2.34824C3.23985 3.22729 2.21447 4.47672 1.60897 5.93853C1.00347 7.40034 0.84504 9.00887 1.15372 10.5607C1.4624 12.1126 2.22433 13.538 3.34315 14.6568C4.46197 15.7757 5.88743 16.5376 7.43928 16.8463C8.99113 17.155 10.5997 16.9965 12.0615 16.391C13.5233 15.7855 14.7727 14.7601 15.6518 13.4446C16.5308 12.129 17 10.5822 17 9C16.9976 6.87901 16.1539 4.84559 14.6542 3.34582C13.1544 1.84606 11.121 1.00242 9 1ZM12.7713 12.7713C12.7023 12.8402 12.6127 12.8846 12.516 12.8975C12.4194 12.9104 12.3212 12.8912 12.2366 12.8429L7.83685 10.3286C7.7679 10.2893 7.71078 10.2321 7.67147 10.1632L5.15716 5.76346C5.10881 5.67882 5.08964 5.58062 5.10259 5.484C5.11554 5.38738 5.15989 5.2977 5.22882 5.22877C5.29775 5.15984 5.38743 5.11549 5.48405 5.10254C5.58067 5.08959 5.67886 5.10876 5.76351 5.15711L10.1632 7.67142C10.2322 7.71074 10.2893 7.76785 10.3286 7.8368L12.8429 12.2365C12.8913 12.3212 12.9105 12.4194 12.8975 12.516C12.8846 12.6127 12.8402 12.7023 12.7713 12.7713Z",fill:"currentColor"})}))};function f(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var p=function(e){return(0,n.jsx)("svg",function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){f(e,t,r[t])}))}return e}({viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e,{children:(0,n.jsx)("path",{d:"M9 1C4.58853 1 1 4.58853 1 9C1 13.4115 4.58853 17 9 17C13.4115 17 17 13.4115 17 9C17 4.58853 13.4115 1 9 1ZM8.66666 14.3333C8.11522 14.3333 7.66666 13.8848 7.66666 13.3333C7.66666 12.7819 8.11522 12.3333 8.66666 12.3333C9.21809 12.3333 9.66666 12.7819 9.66666 13.3333C9.66666 13.8848 9.21809 14.3333 8.66666 14.3333ZM9.66666 10.2669V11.3333C9.66666 11.5176 9.51756 11.6667 9.33331 11.6667H8C7.81575 11.6667 7.66666 11.5176 7.66666 11.3333V9.66669C7.66666 8.93166 8.26497 8.33334 9 8.33334C9.73503 8.33334 10.3333 7.73503 10.3333 7C10.3333 6.26497 9.73503 5.66666 9 5.66666C8.26497 5.66666 7.66666 6.26497 7.66666 7V7.33334C7.66666 7.51759 7.51756 7.66669 7.33331 7.66669H6C5.81575 7.66669 5.66666 7.51759 5.66666 7.33334V7C5.66666 5.16209 7.16209 3.66666 9 3.66666C10.8379 3.66666 12.3333 5.16213 12.3333 7C12.3333 8.59963 11.2064 9.95509 9.66666 10.2669Z",fill:"currentColor"})}))},x=r(23171);function h(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var C=function(e){return(0,n.jsx)("svg",function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){h(e,t,r[t])}))}return e}({viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e,{children:(0,n.jsx)("path",{d:"M16.6298 11.104L14.9418 9.77998C14.9738 9.52397 14.9978 9.26398 14.9978 8.99998C14.9978 8.73598 14.9738 8.47599 14.9418 8.21998L16.6338 6.89597C16.7858 6.77597 16.8298 6.55997 16.7298 6.38398L15.1298 3.61198C15.0298 3.43997 14.8218 3.36797 14.6418 3.43997L12.6498 4.24397C12.2378 3.92796 11.7858 3.65998 11.2978 3.45598L10.9978 1.336C10.9618 1.14801 10.7978 1 10.5978 1H7.39784C7.19786 1 7.03383 1.14801 7.00184 1.336L6.70185 3.45598C6.21386 3.65998 5.76183 3.92398 5.34986 4.24397L3.35786 3.43997C3.17786 3.37198 2.96985 3.43997 2.86987 3.61198L1.26983 6.38398C1.16981 6.55599 1.21384 6.77199 1.36583 6.89597L3.05381 8.21998C3.02182 8.47599 2.99782 8.73598 2.99782 8.99998C2.99782 9.26398 3.02182 9.52397 3.05381 9.77998L1.36583 11.104C1.21384 11.224 1.16981 11.44 1.26983 11.616L2.86984 14.388C2.96985 14.56 3.17782 14.632 3.35782 14.56L5.34982 13.756C5.76183 14.072 6.21382 14.34 6.70181 14.544L7.00181 16.664C7.03379 16.8519 7.19782 17 7.39781 17H10.5978C10.7978 17 10.9618 16.8519 10.9938 16.664L11.2938 14.544C11.7818 14.34 12.2338 14.076 12.6458 13.756L14.6378 14.56C14.8178 14.628 15.0258 14.56 15.1258 14.388L16.7258 11.616C16.8258 11.444 16.7818 11.228 16.6298 11.104ZM8.99782 11.8C7.44982 11.8 6.19781 10.548 6.19781 8.99998C6.19781 7.45198 7.44982 6.20001 8.99782 6.20001C10.5458 6.20001 11.7978 7.45202 11.7978 9.00002C11.7978 10.548 10.5458 11.8 8.99782 11.8Z",fill:"currentColor"})}))},m=r(43031),b=r(15054);function d(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var g=function(e){return(0,n.jsxs)("svg",function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){d(e,t,r[t])}))}return e}({viewBox:"0 0 17 17",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e,{children:[(0,n.jsx)("path",{d:"M7.86715 7.74751L0.23043 4.53205C0.121025 4.48596 0 4.56632 0 4.68505V13.2813C0 13.4985 0.132248 13.6939 0.333957 13.7745L7.74108 16.7374C7.85012 16.781 7.96875 16.7007 7.96875 16.5833V7.90051C7.96875 7.8337 7.92871 7.77344 7.86715 7.74751Z",fill:"currentColor"}),(0,n.jsx)("path",{d:"M8.56511 6.83393L15.9467 3.72592C16.0793 3.67007 16.0829 3.48333 15.9524 3.42247L8.72534 0.0498296C8.58293 -0.0166099 8.41845 -0.0166099 8.27604 0.0498296L1.04894 3.42247C0.918488 3.48333 0.922041 3.67007 1.05472 3.72592L8.43628 6.83393C8.47745 6.85129 8.52393 6.85129 8.56511 6.83393Z",fill:"currentColor"}),(0,n.jsx)("path",{d:"M9.03125 7.90051V16.5833C9.03125 16.7007 9.14988 16.781 9.25892 16.7374L16.666 13.7745C16.8677 13.6939 17 13.4985 17 13.2813V4.68505C17 4.56632 16.879 4.48596 16.7696 4.53205L9.13285 7.74751C9.07129 7.77344 9.03125 7.8337 9.03125 7.90051Z",fill:"currentColor"})]}))};function j(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var v=function(e){return(0,n.jsx)("svg",function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){j(e,t,r[t])}))}return e}({viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e,{children:(0,n.jsx)("path",{d:"M17.5 14.9318C17.5 15.1428 17.4162 15.3451 17.267 15.4943C17.1178 15.6435 16.9155 15.7273 16.7045 15.7273H7.15909C6.94812 15.7273 6.7458 15.6435 6.59662 15.4943C6.44744 15.3451 6.36364 15.1428 6.36364 14.9318C6.36364 13.666 6.86648 12.452 7.76154 11.557C8.6566 10.6619 9.87056 10.1591 11.1364 10.1591H12.7273C13.9931 10.1591 15.207 10.6619 16.1021 11.557C16.9972 12.452 17.5 13.666 17.5 14.9318ZM11.9318 3C11.3025 3 10.6873 3.18661 10.1641 3.53623C9.64085 3.88585 9.23303 4.38279 8.9922 4.96419C8.75138 5.54559 8.68837 6.18535 8.81114 6.80256C8.93391 7.41977 9.23695 7.98671 9.68193 8.4317C10.1269 8.87668 10.6939 9.17972 11.3111 9.30249C11.9283 9.42527 12.568 9.36225 13.1494 9.12143C13.7308 8.88061 14.2278 8.47278 14.5774 7.94954C14.927 7.42629 15.1136 6.81112 15.1136 6.18182C15.1136 5.33795 14.7784 4.52864 14.1817 3.93193C13.585 3.33523 12.7757 3 11.9318 3ZM4.77273 3C4.14342 3 3.52825 3.18661 3.005 3.53623C2.48176 3.88585 2.07393 4.38279 1.83311 4.96419C1.59229 5.54559 1.52928 6.18535 1.65205 6.80256C1.77482 7.41977 2.07786 7.98671 2.52284 8.4317C2.96783 8.87668 3.53477 9.17972 4.15199 9.30249C4.7692 9.42527 5.40896 9.36225 5.99036 9.12143C6.57176 8.88061 7.06869 8.47278 7.41831 7.94954C7.76793 7.42629 7.95455 6.81112 7.95455 6.18182C7.95455 5.33795 7.61932 4.52864 7.02261 3.93193C6.42591 3.33523 5.6166 3 4.77273 3V3ZM4.77273 14.9318C4.77154 14.0963 4.93616 13.2688 5.25703 12.4973C5.57791 11.7259 6.04867 11.0257 6.64205 10.4375C6.15645 10.2542 5.64178 10.1598 5.12273 10.1591H4.42273C3.25039 10.1612 2.12668 10.6278 1.29771 11.4568C0.468743 12.2858 0.00210285 13.4095 0 14.5818V14.9318C0 15.1428 0.0838065 15.3451 0.232983 15.4943C0.38216 15.6435 0.584487 15.7273 0.795455 15.7273H4.91591C4.8233 15.4722 4.77488 15.2032 4.77273 14.9318V14.9318Z",fill:"currentColor"})}))};function y(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var w=function(e){return(0,n.jsxs)("svg",function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){y(e,t,r[t])}))}return e}({viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e,{children:[(0,n.jsx)("path",{d:"M6.5625 13.209V16.6875C6.5625 16.9305 6.7185 17.1457 6.9495 17.2222C7.00725 17.241 7.0665 17.25 7.125 17.25C7.3005 17.25 7.47 17.1675 7.578 17.0205L9.61275 14.2515L6.5625 13.209Z",fill:"currentColor"}),(0,n.jsx)("path",{d:"M17.7637 0.104255C17.5912 -0.0179946 17.3647 -0.0344946 17.1772 0.0637554L0.302223 8.87625C0.102722 8.9805 -0.0150277 9.1935 0.00147233 9.41775C0.0187223 9.64275 0.167973 9.83475 0.380223 9.9075L5.07148 11.511L15.0622 2.9685L7.33123 12.2828L15.1935 14.97C15.252 14.9895 15.3135 15 15.375 15C15.477 15 15.5782 14.9723 15.6675 14.9183C15.81 14.8313 15.9067 14.685 15.9315 14.5208L17.994 0.645755C18.0247 0.435755 17.9362 0.227255 17.7637 0.104255Z",fill:"currentColor"})]}))},O=r(13123),k=r(81795);function N(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function P(e){return(0,n.jsx)("svg",function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){N(e,t,r[t])}))}return e}({viewBox:"0 0 1550 1550",xmlns:"http://www.w3.org/2000/svg"},e,{children:(0,n.jsxs)("g",{children:[(0,n.jsx)("path",{d:"m1423.8 936.7c-76.4-180.7-185.7-342.9-324.9-482.2s-301.5-248.6-482.2-324.9c-187.1-79.1-385.9-119.2-590.8-119.2-6.7 0-12.2 5.5-12.2 12.2v225.9c0 6.7 5.5 12.2 12.2 12.2 698.5 0 1266.8 568.3 1266.8 1266.8 0 6.7 5.5 12.2 12.2 12.2h225.9c6.7 0 12.2-5.5 12.2-12.2 0-205-40.1-403.7-119.2-590.8z",fill:"currentColor"}),(0,n.jsx)("path",{d:"m698.9 847.7c-88.2-88.2-191-157.5-305.5-205.8-118.6-50.1-244.5-75.5-374.3-75.5-6.7 0-12.2 5.5-12.2 12.2v225.9c0 6.7 5.5 12.2 12.2 12.2 391.9 0 710.8 318.9 710.8 710.8 0 6.7 5.5 12.2 12.2 12.2h225.9c6.7 0 12.2-5.5 12.2-12.2 0-129.8-25.4-255.7-75.5-374.3-48.3-114.5-117.6-217.3-205.8-305.5z",fill:"currentColor"}),(0,n.jsx)("circle",{cx:"160.8",cy:"1385.9",r:"153.8",fill:"currentColor"})]})}))}var L=r(10268);function Z(e){var t=e.href,r=e.icon,s=e.title,o=e.isCollapse;return(0,n.jsxs)(a.Z,{href:t,className:"my-0.5 flex items-center gap-1 px-4 py-3 hover:bg-light-300 hover:dark:bg-dark-300 xs:px-6 sm:my-1 sm:gap-1.5 sm:px-7 lg:gap-2 xl:my-0.5",activeClassName:"text-dark-100 active-text-dark dark:active-text-light dark:text-light-400 font-medium bg-light-400 dark:bg-dark-400 hover:bg-light-600 hover:dark:bg-dark-500",children:[(0,n.jsx)("span",{className:l()("flex flex-shrink-0 items-center justify-start",o?"w-8 xl:w-auto":"w-auto xl:w-8"),children:r}),(0,n.jsx)("span",{className:l()("text-dark-100 dark:text-light-400",o?"inline-flex xl:hidden":"hidden xl:inline-flex"),children:s})]})}function E(e){var t=e.isCollapse,r=e.className,s=void 0===r?"hidden sm:flex fixed bottom-0 z-20 pt-[82px]":r,c=(0,L.$G)("common").t;return(0,n.jsxs)("aside",{className:l()("h-full flex-col justify-between overflow-y-auto border-r border-light-400 bg-light-100 text-dark-900 dark:border-0 dark:bg-dark-200",t?"sm:w-60 xl:w-[75px]":"sm:w-[75px] xl:w-60",s),children:[(0,n.jsx)(O.Z,{className:"relative h-full w-full",children:(0,n.jsxs)("div",{className:"flex h-full w-full flex-col",children:[(0,n.jsxs)("nav",{className:"flex flex-col",children:[(0,n.jsx)(Z,{title:c("text-home"),href:o.Z.home,isCollapse:t,icon:(0,n.jsx)(x.t,{className:"h-[18px] w-[18px] text-current"})}),(0,n.jsx)(Z,{title:c("text-explore"),href:o.Z.explore,isCollapse:t,icon:(0,n.jsx)(u,{className:"h-[18px] w-[18px] text-current"})}),(0,n.jsx)(Z,{title:c("text-popular-products"),href:o.Z.popularProducts,isCollapse:t,icon:(0,n.jsx)(g,{className:"h-4 w-4 text-current"})}),(0,n.jsx)(Z,{title:c("text-top-authors"),href:o.Z.authors,isCollapse:t,icon:(0,n.jsx)(v,{className:"h-[18px] w-[18px] text-current"})}),(0,n.jsx)(Z,{title:c("text-feed"),href:o.Z.feed,isCollapse:t,icon:(0,n.jsx)(P,{className:"h-[17px] w-[17px] text-current"})}),(0,n.jsx)(Z,{title:c("text-contact"),href:o.Z.contact,isCollapse:t,icon:(0,n.jsx)(w,{className:"h-[18px] w-[18px] text-current"})})]}),(0,n.jsxs)("nav",{className:"mt-auto flex flex-col pb-4",children:[(0,n.jsx)(Z,{title:c("text-settings"),href:o.Z.profile,isCollapse:t,icon:(0,n.jsx)(C,{className:"h-[18px] w-[18px] text-current"})}),(0,n.jsx)(Z,{title:c("text-help-page-title"),href:o.Z.help,isCollapse:t,icon:(0,n.jsx)(p,{className:"h-[18px] w-[18px] text-current"})})]})]})}),(0,n.jsxs)("footer",{className:l()("flex-col border-t border-light-400 pt-3 pb-4 text-center dark:border-dark-400",t?"flex xl:hidden":"hidden xl:flex"),children:[(0,n.jsxs)("nav",{className:"flex items-center justify-center gap-5 pb-1.5 text-13px font-medium capitalize tracking-[0.2px]",children:[(0,n.jsx)(a.Z,{href:o.Z.terms,className:"block py-2 text-dark-700 hover:text-dark-100 dark:hover:text-brand",children:c("text-terms")}),(0,n.jsx)(a.Z,{href:o.Z.privacy,className:"block py-2 text-dark-700 hover:text-dark-100 dark:hover:text-brand",children:c("text-privacy")}),(0,n.jsx)(a.Z,{href:o.Z.help,className:"block py-2 text-dark-700 hover:text-dark-100 dark:hover:text-brand",children:c("text-help-page-title")})]}),(0,n.jsx)(k.Z,{className:"text-xs font-medium text-dark-800/80 dark:text-dark-700"})]})]})}function S(){var e=(0,b.y)().closeDrawer,t=(0,L.$G)().t;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:"flex h-[70px] items-center justify-between py-2 px-5 xs:px-7",children:[(0,n.jsx)(c.Z,{}),(0,n.jsx)("div",{className:"ml-3 flex h-7 items-center",children:(0,n.jsxs)("button",{type:"button",className:"-m-2 p-2 text-dark-900 outline-none transition-all hover:text-dark dark:text-dark-800 hover:dark:text-light-200",onClick:e,children:[(0,n.jsx)("span",{className:"sr-only",children:t("text-close-panel")}),(0,n.jsx)(m.T,{className:"h-4 w-4"})]})})]}),(0,n.jsx)(E,{isCollapse:!0,className:"flex text-13px"})]})}},80153:function(){}}]);