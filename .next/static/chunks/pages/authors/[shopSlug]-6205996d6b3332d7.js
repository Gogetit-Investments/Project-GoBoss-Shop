(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2606],{95967:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/authors/[shopSlug]",function(){return r(24138)}])},95070:function(e,t,r){"use strict";r.d(t,{Z:function(){return x}});var n=r(85893),l=r(14685),o=r(97168),i=r(88767),a=r(66639),c=r(21880),s=r(28763);function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function f(e){return(0,n.jsxs)("svg",function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){u(e,t,r[t])}))}return e}({viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e,{children:[(0,n.jsx)("path",{d:"M12.8032 2.1968C9.87413 -0.732275 5.12522 -0.732276 2.19677 2.19686C-0.732275 5.1259 -0.732276 9.87478 2.19688 12.8032C5.12522 15.7323 9.87413 15.7323 12.8032 12.8032C15.7323 9.87478 15.7323 5.1259 12.8032 2.1968ZM11.9194 11.9193C9.47842 14.3602 5.52105 14.3602 3.08077 11.9194C0.639814 9.47897 0.639814 5.52161 3.08071 3.08071C5.52105 0.639785 9.47842 0.639785 11.9193 3.08071C14.3602 5.52164 14.3602 9.47898 11.9194 11.9193Z",fill:"currentColor"}),(0,n.jsx)("path",{d:"M10.5935 4.40647C10.3495 4.1624 9.95371 4.1624 9.70964 4.40647L7.49992 6.61619L5.29021 4.40647C5.04614 4.1624 4.65039 4.1624 4.40632 4.40647C4.16225 4.65055 4.16225 5.04629 4.40632 5.29036L6.61604 7.50008L4.40714 9.70897C4.16307 9.95304 4.16307 10.3488 4.40714 10.5929C4.65121 10.8369 5.04696 10.8369 5.29103 10.5929L7.49992 8.38396L9.70946 10.5935C9.95354 10.8376 10.3493 10.8376 10.5934 10.5935C10.8374 10.3494 10.8374 9.95369 10.5934 9.70962L8.38381 7.50008L10.5935 5.29036C10.8376 5.04629 10.8376 4.65057 10.5935 4.40647Z",fill:"currentColor"})]}))}var d=r(10268);function x(e){var t=e.shop_id,r=(0,i.useQueryClient)(),u=(0,a.P)(),x=u.isAuthorized,p=u.isLoading,b=u.me,h=(0,i.useQuery)([c.P.FOLLOW_SHOP,t],(function(){return s.Z.follow.isShopFollowed({shop_id:t})}),{enabled:x}),m=h.data,g=h.isLoading,C=(0,i.useMutation)(s.Z.follow.toggle,{onSettled:function(){r.invalidateQueries([c.P.FOLLOW_SHOP,t]),r.invalidateQueries([c.P.FOLLOWED_SHOPS])}}).mutate,v=(0,d.$G)("common").t;return(0,n.jsx)(n.Fragment,{children:x&&b&&!p&&(0,n.jsx)(l.Z,{onClick:function(){C({shop_id:t})},variant:m?"solidDanger":"outline",className:"followButton h-9 min-h-[36px] rounded-md p-2 px-3 text-xs sm:h-11 sm:min-h-[44px] md:px-4 ".concat(!m&&"text-brand dark:text-brand"),isLoading:g,children:!g&&(0,n.jsx)(n.Fragment,{children:m?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(f,{className:"h-[15px] w-[15px] text-current"}),v("text-unfollow")]}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.U,{className:"h-4 w-4 text-current"})," ",v("text-follow")]})})})})}},97168:function(e,t,r){"use strict";r.d(t,{U:function(){return o}});var n=r(85893);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var o=function(e){return(0,n.jsxs)("svg",function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){l(e,t,r[t])}))}return e}({viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e,{children:[(0,n.jsx)("path",{d:"M8 8.5C9.933 8.5 11.5 6.933 11.5 5C11.5 3.067 9.933 1.5 8 1.5C6.067 1.5 4.5 3.067 4.5 5C4.5 6.933 6.067 8.5 8 8.5Z",fill:"currentColor"}),(0,n.jsx)("path",{d:"M8.00012 9.50006C6.27682 9.50205 4.62468 10.1875 3.40612 11.4061C2.18756 12.6246 1.50211 14.2768 1.50012 16.0001C1.50012 16.1327 1.5528 16.2598 1.64657 16.3536C1.74034 16.4474 1.86751 16.5001 2.00012 16.5001H14.0001C14.1327 16.5001 14.2599 16.4474 14.3537 16.3536C14.4474 16.2598 14.5001 16.1327 14.5001 16.0001C14.4981 14.2768 13.8127 12.6246 12.5941 11.4061C11.3756 10.1875 9.72342 9.50205 8.00012 9.50006Z",fill:"currentColor"}),(0,n.jsx)("path",{d:"M15.9998 8.00006H14.4998V6.50006C14.4998 6.36745 14.4471 6.24028 14.3534 6.14651C14.2596 6.05274 14.1324 6.00006 13.9998 6.00006C13.8672 6.00006 13.74 6.05274 13.6463 6.14651C13.5525 6.24028 13.4998 6.36745 13.4998 6.50006V8.00006H11.9998C11.8672 8.00006 11.74 8.05274 11.6463 8.14651C11.5525 8.24028 11.4998 8.36745 11.4998 8.50006C11.4998 8.63267 11.5525 8.75985 11.6463 8.85362C11.74 8.94738 11.8672 9.00006 11.9998 9.00006H13.4998V10.5001C13.4998 10.6327 13.5525 10.7598 13.6463 10.8536C13.74 10.9474 13.8672 11.0001 13.9998 11.0001C14.1324 11.0001 14.2596 10.9474 14.3534 10.8536C14.4471 10.7598 14.4998 10.6327 14.4998 10.5001V9.00006H15.9998C16.1324 9.00006 16.2596 8.94738 16.3534 8.85362C16.4471 8.75985 16.4998 8.63267 16.4998 8.50006C16.4998 8.36745 16.4471 8.24028 16.3534 8.14651C16.2596 8.05274 16.1324 8.00006 15.9998 8.00006Z",fill:"currentColor"})]}))}},75309:function(e,t,r){"use strict";r.d(t,{Z:function(){return p}});var n=r(85893),l=r(67294),o=r(5152),i=r(94184),a=r.n(i),c=r(42485),s=r(43529),u=r(90413),f=r(98768),d=r(33741),x=(0,o.default)((function(){return r.e(5464).then(r.bind(r,73378))}),{loadableGenerated:{webpack:function(){return[73378]}},ssr:!1});function p(e){var t=e.children,r=(0,f.G)(),o=(0,d.t)(),i=(0,l.useState)(!1),p=i[0],b=i[1];return(0,n.jsxs)(c.E.div,{initial:"exit",animate:"enter",exit:"exit",className:"flex min-h-screen w-full flex-col bg-light-300 dark:bg-dark-100",children:[(0,n.jsx)(s.Z,{isCollapse:p,showHamburger:!0,onClickHamburger:function(){b((function(e){return!e}))}}),(0,n.jsxs)("div",{className:"flex flex-1",children:[(0,n.jsx)(u.Sidebar,{isCollapse:p}),(0,n.jsx)("main",{className:a()("flex w-full flex-col",p?"ltr:sm:pl-60 rtl:sm:pr-60 ltr:xl:pl-[75px] rtl:xl:pr-[75px]":"ltr:sm:pl-[75px] rtl:sm:pr-[75px] ltr:xl:pl-60 rtl:xl:pr-60"),children:t})]}),o&&"xs"===r&&(0,n.jsx)(x,{})]})}},96457:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,l,o=[],i=!0,a=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);i=!0);}catch(c){a=!0,l=c}finally{try{i||null==r.return||r.return()}finally{if(a)throw l}}return o}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e){if(e){var t,r=["street_address","state","city","zip","country"].reduce((function(t,r){return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){l(e,t,r[t])}))}return e}({},t,l({},r,e[r]))}),{}),n=(t=r,Object.fromEntries(Object.entries(t).filter((function(e){var t=o(e,2),r=(t[0],t[1]);return Boolean(r)}))));return Object.values(n).join(", ")}}r.d(t,{T:function(){return i}})},48602:function(e,t,r){"use strict";r.d(t,{q:function(){return i}});var n=r(85893);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var i=function(e){var t=e.iconList,r=e.iconName,i=o(e,["iconList","iconName"]),a=t[r];return a?(0,n.jsx)(a,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){l(e,t,r[t])}))}return e}({},i)):null}},24138:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return E},default:function(){return H}});var n={};r.r(n),r.d(n,{FacebookIcon:function(){return g},InstagramIcon:function(){return v},TwitterIcon:function(){return w},YouTubeIcon:function(){return O}});var l=r(85893),o=r(42485),i=r(94184),a=r.n(i),c=r(75309),s=r(63879),u=r(56727),f=r(1552);function d(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var x=function(e){return(0,l.jsx)("svg",function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){d(e,t,r[t])}))}return e}({viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e,{children:(0,l.jsx)("path",{d:"M8 0C6.40935 0.00211004 4.88445 0.634929 3.75969 1.75969C2.63493 2.88445 2.00211 4.40935 2 6C2 10.3075 7.59 15.7025 7.8275 15.93C7.8737 15.9749 7.93558 16 8 16C8.06442 16 8.1263 15.9749 8.1725 15.93C8.41 15.7025 14 10.3075 14 6C13.9979 4.40935 13.3651 2.88445 12.2403 1.75969C11.1155 0.634929 9.59065 0.00211004 8 0V0ZM8 8.75C7.4561 8.75 6.92442 8.58871 6.47218 8.28654C6.01995 7.98437 5.66747 7.55488 5.45933 7.05238C5.25119 6.54988 5.19673 5.99695 5.30284 5.4635C5.40895 4.93005 5.67086 4.44005 6.05546 4.05546C6.44005 3.67086 6.93005 3.40895 7.4635 3.30284C7.99695 3.19673 8.54988 3.25119 9.05238 3.45933C9.55488 3.66747 9.98437 4.01995 10.2865 4.47218C10.5887 4.92442 10.75 5.4561 10.75 6C10.7496 6.72921 10.4597 7.42843 9.94406 7.94406C9.42843 8.45969 8.72921 8.74956 8 8.75Z",fill:"currentColor"})}))};function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var b=function(e){return(0,l.jsx)("svg",function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){p(e,t,r[t])}))}return e}({viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e,{children:(0,l.jsx)("path",{d:"M15.6741 6.90001C15.3946 4.86308 14.3174 3.0206 12.6795 1.77789C11.0415 0.535183 8.97699 -0.00595881 6.94006 0.273513C4.90313 0.552985 3.06065 1.63018 1.81794 3.26812C0.575229 4.90606 0.0340879 6.97058 0.31356 9.00751C0.543808 10.6934 1.31855 12.258 2.51989 13.463C3.72122 14.668 5.28336 15.4476 6.96856 15.683C7.31339 15.7282 7.66079 15.7509 8.00856 15.751C9.41364 15.7533 10.7924 15.3699 11.9946 14.6425C12.0789 14.5917 12.1525 14.5248 12.211 14.4455C12.2695 14.3663 12.3118 14.2763 12.3355 14.1807C12.3593 14.0851 12.3639 13.9857 12.3493 13.8883C12.3346 13.7909 12.3009 13.6974 12.2501 13.613C12.1992 13.5286 12.1323 13.4551 12.0531 13.3966C11.9738 13.3381 11.8838 13.2958 11.7882 13.272C11.5952 13.2241 11.391 13.2549 11.2206 13.3575C10.3649 13.8711 9.39866 14.1723 8.40271 14.236C7.40676 14.2997 6.41005 14.1239 5.49595 13.7234C4.58185 13.3229 3.77695 12.7093 3.14857 11.934C2.52019 11.1587 2.08661 10.2442 1.88409 9.267C1.68158 8.28978 1.71602 7.27827 1.98454 6.31709C2.25306 5.35592 2.74784 4.47301 3.4275 3.74224C4.10717 3.01147 4.95194 2.45408 5.89116 2.1167C6.83039 1.77932 7.83675 1.67176 8.82606 1.80301C9.74497 1.92519 10.6252 2.25025 11.403 2.75463C12.1807 3.25901 12.8366 3.93009 13.3229 4.71925C13.8093 5.5084 14.1141 6.39586 14.2151 7.31734C14.3161 8.23881 14.2109 9.17122 13.9071 10.047C13.8282 10.2576 13.6858 10.4384 13.4995 10.5644C13.3132 10.6904 13.0924 10.7553 12.8676 10.75C12.5713 10.7496 12.2873 10.6318 12.0778 10.4223C11.8683 10.2128 11.7505 9.92877 11.7501 9.63251V5.00001C11.7501 4.8011 11.671 4.61034 11.5304 4.46968C11.3897 4.32903 11.199 4.25001 11.0001 4.25001C10.8011 4.25001 10.6104 4.32903 10.4697 4.46968C10.3291 4.61034 10.2501 4.8011 10.2501 5.00001V5.00701C9.68149 4.57788 9.00245 4.31957 8.29242 4.26231C7.58239 4.20505 6.87073 4.35121 6.24074 4.68368C5.61075 5.01614 5.08848 5.52117 4.73506 6.13966C4.38164 6.75814 4.21169 7.46449 4.2451 8.17604C4.27851 8.8876 4.51389 9.57492 4.9237 10.1576C5.33351 10.7402 5.9008 11.1941 6.55917 11.4661C7.21754 11.7381 7.93976 11.8169 8.6413 11.6934C9.34285 11.5698 9.9947 11.249 10.5206 10.7685C10.733 11.2111 11.0659 11.5848 11.481 11.8468C11.8961 12.1088 12.3767 12.2486 12.8676 12.25C13.4042 12.2552 13.9291 12.0931 14.3694 11.7863C14.8097 11.4795 15.1436 11.0432 15.3246 10.538C15.7288 9.37041 15.8486 8.12322 15.6741 6.90001V6.90001ZM8.00006 10.25C7.55505 10.25 7.12004 10.1181 6.75003 9.87082C6.38002 9.62359 6.09163 9.27219 5.92133 8.86105C5.75103 8.44992 5.70648 7.99752 5.79329 7.56106C5.88011 7.1246 6.0944 6.72369 6.40907 6.40902C6.72374 6.09436 7.12465 5.88006 7.56111 5.79325C7.99756 5.70643 8.44996 5.75099 8.8611 5.92128C9.27223 6.09158 9.62363 6.37997 9.87087 6.74998C10.1181 7.11999 10.2501 7.55501 10.2501 8.00001C10.2494 8.59655 10.0121 9.16846 9.59032 9.59027C9.16851 10.0121 8.59659 10.2494 8.00006 10.25V10.25Z",fill:"currentColor"})}))},h=r(48602);function m(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var g=function(e){return(0,l.jsx)("svg",function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){m(e,t,r[t])}))}return e}({viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e,{children:(0,l.jsx)("path",{d:"M13.8439 0H2.15615C0.965434 0 0.00012207 0.965273 0.00012207 2.15603V13.8439C0.00012207 15.0346 0.965395 15.9999 2.15615 15.9999H7.92051L7.93034 10.2824H6.44493C6.25189 10.2824 6.09521 10.1263 6.09447 9.93329L6.08735 8.0903C6.0866 7.8962 6.24375 7.73847 6.43785 7.73847H7.92055V5.95767C7.92055 3.89107 9.1827 2.7658 11.0262 2.7658H12.539C12.7326 2.7658 12.8895 2.92271 12.8895 3.1163V4.67031C12.8895 4.86382 12.7327 5.0207 12.5392 5.02081L11.6108 5.02124C10.6083 5.02124 10.4141 5.49766 10.4141 6.19682V7.73851H12.6171C12.827 7.73851 12.9899 7.9218 12.9652 8.13026L12.7467 9.97325C12.7258 10.1496 12.5763 10.2825 12.3987 10.2825H10.424L10.4141 16H13.844C15.0347 16 16 15.0347 16 13.844V2.15603C16 0.965273 15.0347 0 13.8439 0Z",fill:"currentColor"})}))};function C(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var v=function(e){return(0,l.jsxs)("svg",function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){C(e,t,r[t])}))}return e}({"data-name":"Group 96",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 12 12"},e,{children:[(0,l.jsx)("path",{"data-name":"Path 1",d:"M8.5 1A2.507 2.507 0 0111 3.5v5A2.507 2.507 0 018.5 11h-5A2.507 2.507 0 011 8.5v-5A2.507 2.507 0 013.5 1h5m0-1h-5A3.51 3.51 0 000 3.5v5A3.51 3.51 0 003.5 12h5A3.51 3.51 0 0012 8.5v-5A3.51 3.51 0 008.5 0z",fill:"currentColor"}),(0,l.jsx)("path",{"data-name":"Path 2",d:"M9.25 3.5a.75.75 0 11.75-.75.748.748 0 01-.75.75zM6 4a2 2 0 11-2 2 2 2 0 012-2m0-1a3 3 0 103 3 3 3 0 00-3-3z",fill:"currentColor"})]}))};function j(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var w=function(e){return(0,l.jsx)("svg",function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){j(e,t,r[t])}))}return e}({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 14.747 12"},e,{children:(0,l.jsx)("path",{"data-name":"_ionicons_svg_logo-twitter (5)",d:"M14.747 1.422a6.117 6.117 0 01-1.737.478A3.036 3.036 0 0014.341.225a6.012 6.012 0 01-1.922.734 3.025 3.025 0 00-5.234 2.069 2.962 2.962 0 00.078.691A8.574 8.574 0 011.026.553a3.032 3.032 0 00.941 4.044 2.955 2.955 0 01-1.375-.378v.037A3.028 3.028 0 003.02 7.225a3.046 3.046 0 01-.8.106 2.854 2.854 0 01-.569-.056 3.03 3.03 0 002.828 2.1 6.066 6.066 0 01-3.759 1.3 6.135 6.135 0 01-.722-.044A8.457 8.457 0 004.631 12a8.557 8.557 0 008.616-8.619c0-.131 0-.262-.009-.391a6.159 6.159 0 001.509-1.568z",fill:"currentColor"})}))};function y(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var O=function(e){return(0,l.jsx)("svg",function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){y(e,t,r[t])}))}return e}({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 15.997 12"},e,{children:(0,l.jsx)("path",{d:"M15.893 2.65A2.429 2.429 0 0013.581.113c-1.731-.081-3.5-.112-5.3-.112h-.563c-1.8 0-3.569.031-5.3.112A2.434 2.434 0 00.106 2.656C.028 3.768-.006 4.881-.003 5.993s.031 2.225.106 3.34a2.437 2.437 0 002.309 2.547c1.822.085 3.688.12 5.584.12s3.759-.031 5.581-.119a2.438 2.438 0 002.312-2.547c.075-1.116.109-2.228.106-3.344s-.027-2.225-.102-3.34zM6.468 9.059v-6.14l4.531 3.069z",fill:"currentColor"})}))},k=r(62554),P=r(93813),N=r(18818),S=r(96457),L=r(95070),_=r(10268);function Z(e){var t=e.shop,r=t.description,i=t.name,a=t.address,c=t.owner,s=t.orders_count,u=t.products_count,f=t.settings.socials,d=(0,_.$G)("common").t;return(0,l.jsxs)(o.E.div,{variants:(0,k.op)(),className:"mx-auto flex max-w-[480px] flex-col justify-between md:max-w-[1000px] md:flex-row 2xl:max-w-[1280px]",children:[(0,l.jsxs)("div",{className:"flex-shrink-0 md:w-6/12 lg:w-7/12 xl:w-5/12",children:[(0,l.jsx)("h2",{className:"mb-3 text-sm font-medium text-dark dark:text-light lg:text-15px",children:i}),(0,l.jsx)("p",{className:"leading-6",children:r}),(0,l.jsxs)("div",{className:"space-y-3.5 pt-4 text-dark/80 dark:text-light/80 md:pt-6 xl:pt-7",children:[(0,l.jsxs)("address",{className:"flex max-w-sm items-start not-italic leading-[1.8]",children:[(0,l.jsx)("span",{className:"mt-[3px] w-7 shrink-0 text-dark-800 dark:text-light-900",children:(0,l.jsx)(x,{className:"h-4 w-4"})}),(0,S.T)(a)]}),(0,l.jsxs)("div",{className:"flex items-center",children:[(0,l.jsx)("span",{className:"w-7 shrink-0 text-dark-800 dark:text-light-900",children:(0,l.jsx)(b,{className:"h-4 w-4"})}),(0,l.jsx)("a",{href:"mailto:".concat(null===c||void 0===c?void 0:c.email),className:"hover:text-brand",children:null===c||void 0===c?void 0:c.email})]})]})]}),(0,l.jsxs)("div",{className:"mt-7 flex-shrink-0 rounded-md bg-light p-6 shadow-card dark:bg-dark-250 md:mt-0 md:w-72 lg:p-8",children:[(0,l.jsxs)("div",{className:"-mx-2 flex pb-6 lg:pb-7",children:[(0,l.jsxs)("div",{className:"flex flex-shrink-0 flex-col px-2 pr-10 text-13px capitalize text-dark-500 dark:text-light-900 lg:w-1/2 lg:pr-0",children:[(0,l.jsx)("span",{className:"mb-0.5 text-2xl text-dark dark:text-light",children:s}),d("text-total-sales")]}),(0,l.jsxs)("div",{className:"flex flex-shrink-0 flex-col px-2 pr-10 text-13px capitalize text-dark-500 dark:text-light-900 xl:w-1/2 xl:pr-0",children:[(0,l.jsx)("span",{className:"mb-0.5 text-2xl text-dark dark:text-light",children:u}),d("text-products")]})]}),(0,l.jsx)("div",{className:"space-y-3 border-t border-light-300 pt-5 dark:border-dark-500",children:f.map((function(e,t){var r=e.icon,o=e.url;return(0,l.jsxs)("a",{href:o,target:"_blank",rel:"noreferrer",className:"group flex items-center",children:[(0,h.q)({iconList:n,iconName:r,className:"w-3.5 h-3.5 text-dark-800 dark:text-light-900 shrink-0"}),(0,l.jsx)("span",{className:"transition-colors group-hover:text-dark ltr:pl-2 rtl:pr-2 dark:group-hover:text-light",children:o.slice(12,-1).split("/").slice(0,1)})]},t)}))})]})]})}function M(e){var t=e.shopId,r=(0,P.rn)({shop_id:t}),n=r.products,o=r.isLoading,i=r.loadMore,a=r.isLoadingMore,c=r.hasNextPage;return(0,l.jsx)(f.Z,{products:n,isLoading:o,onLoadMore:i,isLoadingMore:a,hasNextPage:c})}var A=function(e){var t,r,n=e.shop,o=n.name,i=n.logo,c=n.cover_image,f=(0,_.$G)("common").t;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("div",{className:"shopBanner relative w-full",children:[(0,l.jsx)("div",{className:"absolute top-0 left-0 h-full w-full",children:(0,l.jsx)(s.Z,{alt:o,layout:"fill",objectFit:"cover",src:null!==(t=null===c||void 0===c?void 0:c.original)&&void 0!==t?t:N.Z})}),(0,l.jsxs)("div",{className:"relative z-10 h-full w-full bg-white/[0.85] px-4 pt-10 pb-16 text-center backdrop-blur-sm dark:bg-dark/[0.85] lg:px-8 lg:pt-14 lg:pb-20",children:[(0,l.jsx)("div",{className:"relative mx-auto h-[75px] w-[75px] md:h-20 md:w-20 2xl:h-[90px] 2xl:w-[90px] 3xl:h-[100px] 3xl:w-[100px]",children:(0,l.jsx)(s.Z,{alt:o,layout:"fill",objectFit:"cover",quality:100,src:null!==(r=null===i||void 0===i?void 0:i.original)&&void 0!==r?r:N.Z})}),(0,l.jsx)("h1",{className:"mt-3 text-sm font-medium text-dark-100 dark:text-light lg:text-15px 2xl:mt-4",children:o}),(0,l.jsx)("div",{className:"mt-3.5 flex justify-center md:mt-4 lg:mt-5",children:(0,l.jsx)(L.Z,{shop_id:n.id})})]})]}),(0,l.jsxs)(u.OK.Group,{children:[(0,l.jsxs)(u.OK.List,{className:"relative z-10 -mt-[34px] space-x-6 px-4 text-center text-13px rtl:space-x-reverse lg:space-x-8",children:[(0,l.jsx)(u.OK,{className:function(e){var t=e.selected;return a()("relative pb-3.5 before:absolute before:left-0 before:bottom-0 before:h-0.5 before:bg-dark-400 before:transition-all before:duration-300 before:ease-in-out hover:text-dark-100 dark:before:bg-light-400 dark:hover:text-light",{"font-semibold text-dark-100 before:w-full dark:text-light":t,"text-dark-400 before:w-0 dark:text-light-800":!t})},children:f("text-products")}),(0,l.jsx)(u.OK,{className:function(e){var t=e.selected;return a()("relative pb-3.5 before:absolute  before:left-0 before:bottom-0 before:h-0.5 before:bg-dark-400 before:transition-all before:duration-300 before:ease-in-out hover:text-dark-100 dark:before:bg-light-400 dark:hover:text-light",{"font-semibold text-dark-100 before:w-full dark:text-light":t,"text-dark-400 before:w-0 dark:text-light-800":!t})},children:f("text-about")})]}),(0,l.jsxs)(u.OK.Panels,{children:[(0,l.jsx)(u.OK.Panel,{className:"focus:outline-none lg:pt-3 xl:pt-4",children:(0,l.jsx)(M,{shopId:n.id})}),(0,l.jsx)(u.OK.Panel,{className:"px-4 py-6 focus:outline-none md:px-6 md:py-8 lg:py-10 lg:px-8",children:(0,l.jsx)(Z,{shop:n})})]})]})]})};A.getLayout=function(e){return(0,l.jsx)(c.Z,{children:e})};var E=!0,H=A}},function(e){e.O(0,[6351,4698,3506,6489,178,413,9774,2888,179],(function(){return t=95967,e(e.s=t);var t}));var t=e.O();_N_E=t}]);