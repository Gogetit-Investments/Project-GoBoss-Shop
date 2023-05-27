(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5152],{65888:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/popular-products",function(){return r(42120)}])},59562:function(e,t,r){"use strict";r.d(t,{Z:function(){return c}});var n=r(85893),l=r(94184),i=r.n(l),a=r(42485),s=r(56727),o=r(10268);function c(e){var t=e.items,r=e.selectedValue,l=e.onChange,c=(0,o.$G)("common").t;return(0,n.jsxs)(s.Ee,{value:r,onChange:l,children:[(0,n.jsx)(s.Ee.Label,{className:"sr-only",children:"Button Group"}),(0,n.jsx)("div",{className:"inline-flex shrink-0 rounded-3xl bg-light p-[5px] dark:bg-dark-300 xs:flex",children:t.map((function(e){return(0,n.jsx)(s.Ee.Option,{value:e,className:"outline-none",children:function(t){var r=t.checked;return(0,n.jsxs)("div",{className:"relative z-[1] cursor-pointer rounded-3xl px-3 py-2 text-xs font-medium capitalize",children:[(0,n.jsx)(s.Ee.Label,{className:i()("cursor-pointer",r?"text-dark":"text-dark-700 hover:text-dark dark:text-light-800 dark:hover:text-light"),children:c(e.label)}),r&&(0,n.jsx)(a.E.div,{className:"absolute left-0 right-0 bottom-0 -z-[1] h-full rounded-3xl bg-light-400 dark:bg-light-100",layoutId:"activeIndicator"})]})}},c(e.label))}))})]})}},75309:function(e,t,r){"use strict";r.d(t,{Z:function(){return f}});var n=r(85893),l=r(67294),i=r(5152),a=r(94184),s=r.n(a),o=r(42485),c=r(43529),u=r(90413),d=r(98768),x=r(33741),p=(0,i.default)((function(){return r.e(5464).then(r.bind(r,73378))}),{loadableGenerated:{webpack:function(){return[73378]}},ssr:!1});function f(e){var t=e.children,r=(0,d.G)(),i=(0,x.t)(),a=(0,l.useState)(!1),f=a[0],h=a[1];return(0,n.jsxs)(o.E.div,{initial:"exit",animate:"enter",exit:"exit",className:"flex min-h-screen w-full flex-col bg-light-300 dark:bg-dark-100",children:[(0,n.jsx)(c.Z,{isCollapse:f,showHamburger:!0,onClickHamburger:function(){h((function(e){return!e}))}}),(0,n.jsxs)("div",{className:"flex flex-1",children:[(0,n.jsx)(u.Sidebar,{isCollapse:f}),(0,n.jsx)("main",{className:s()("flex w-full flex-col",f?"ltr:sm:pl-60 rtl:sm:pr-60 ltr:xl:pl-[75px] rtl:xl:pr-[75px]":"ltr:sm:pl-[75px] rtl:sm:pr-[75px] ltr:xl:pl-60 rtl:xl:pr-60"),children:t})]}),i&&"xs"===r&&(0,n.jsx)(p,{})]})}},96357:function(e,t,r){"use strict";var n=r(85893),l=r(2962);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}t.Z=function(e){var t=e.title,r=e.description,s=e.url,o=a(e,["title","description","url"]);return(0,n.jsx)(l.PB,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){i(e,t,r[t])}))}return e}({title:t,description:r,openGraph:{url:"".concat("http://localhost:3000","/").concat(s),title:t,description:r}},o))}},42120:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return h}});var n=r(85893),l=r(67294),i=r(75309),a=r(93813),s=r(1552),o=r(96357),c=r(90551),u=r(59562),d=r(10268),x=[{label:"text-weekly",range:7},{label:"text-monthly",range:30},{label:"text-yearly",range:365}];function p(){var e=(0,l.useState)(x[2]),t=e[0],r=e[1],i=(0,a.os)({range:t.range}),o=i.popularProducts,c=i.isLoading,p=(0,d.$G)("common").t;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:"flex flex-col-reverse flex-wrap items-center justify-between px-4 pt-5 pb-4 xs:flex-row xs:space-x-4 md:px-6 md:pt-6 lg:px-7 3xl:px-8",children:[(0,n.jsxs)("div",{className:"pt-3 xs:pt-0",children:[p("text-total")," ",o.length," ",p("text-product-found")]}),(0,n.jsx)(u.Z,{items:x,selectedValue:t,onChange:r})]}),(0,n.jsx)(s.Z,{products:o,hasNextPage:!1,isLoadingMore:!1,isLoading:c})]})}var f=function(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.Z,{title:"Top Products",description:"Fastest digital download template built with React, NextJS, TypeScript, React-Query and Tailwind CSS.",url:c.Z.popularProducts}),(0,n.jsx)(p,{})]})};f.getLayout=function(e){return(0,n.jsx)(i.Z,{children:e})};var h=!0;t.default=f}},function(e){e.O(0,[6351,4698,3506,6489,178,413,9774,2888,179],(function(){return t=65888,e(e.s=t);var t}));var t=e.O();_N_E=t}]);