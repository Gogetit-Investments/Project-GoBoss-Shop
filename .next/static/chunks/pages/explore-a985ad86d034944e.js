(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6544],{41609:function(e,r,t){var n=t(280),o=t(64160),l=t(35694),i=t(1469),a=t(98612),u=t(44144),s=t(25726),c=t(36719),d=Object.prototype.hasOwnProperty;e.exports=function(e){if(null==e)return!0;if(a(e)&&(i(e)||"string"==typeof e||"function"==typeof e.splice||u(e)||c(e)||l(e)))return!e.length;var r=o(e);if("[object Map]"==r||"[object Set]"==r)return!e.size;if(s(e))return!n(e).length;for(var t in e)if(d.call(e,t))return!1;return!0}},82956:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/explore",function(){return t(95499)}])},87219:function(e,r,t){"use strict";t.d(r,{W_:function(){return n.W_},o3:function(){return n.o3},tq:function(){return o.tq},o5:function(){return o.o5}});t(30933);var n=t(965),o=t(98352)},95499:function(e,r,t){"use strict";t.r(r),t.d(r,{__N_SSG:function(){return S},default:function(){return E}});var n=t(85893),o=t(75309),l=t(93813),i=t(1552),a=t(11163),u=t(96357),s=t(90551),c=t(54112),d=t(87219),f=t(63879),p=t(35019),b=t(45133),g={1024:{slidesPerView:2.2,spaceBetween:24}};function h(e){var r=e.types;return(0,n.jsxs)("div",{className:"relative border-b border-light-300 bg-light-100 pl-4 pt-5 dark:border-dark-300 dark:bg-dark-100 md:pt-6 ltr:md:pl-6 rtl:md:pr-6 ltr:lg:pl-7 rtl:lg:pr-7 ltr:3xl:pl-8 rtl:3xl:pr-8",children:[(0,n.jsx)(d.tq,{id:"promoCarousel",speed:400,spaceBetween:20,slidesPerView:1.2,allowTouchMove:!0,modules:[d.W_],breakpoints:g,navigation:{nextEl:".next",prevEl:".prev"},children:null===r||void 0===r?void 0:r.map((function(e,r){var t,o;return(null===e||void 0===e||null===(t=e.promotional_sliders)||void 0===t?void 0:t.original)&&(0,n.jsx)(d.o5,{className:"relative mb-5 aspect-[37/16] w-full bg-light-200 dark:bg-dark-250 2xl:mb-6",children:(0,n.jsx)(f.Z,{layout:"fill",objectFit:"cover",alt:"promo-carousel-".concat(r),src:null===e||void 0===e||null===(o=e.promotional_sliders)||void 0===o?void 0:o.original})},"promo-carousel-key-".concat(r))}))}),(0,n.jsxs)("div",{className:"absolute top-2/4 left-0 z-10 flex w-full items-center justify-between pl-1 pr-4 sm:pr-6 md:pl-2.5",children:[(0,n.jsx)("button",{className:"prev flex h-8 w-8 -translate-y-1/2 transform cursor-pointer items-center justify-center rounded-full border border-light-400 bg-light text-dark-100 shadow-xl hover:bg-light-200 focus:outline-none rtl:rotate-180 dark:border-dark-400 dark:bg-dark-400 dark:text-white hover:dark:bg-dark-300 xl:h-9 xl:w-9",children:(0,n.jsx)(p.s,{className:"h-4 w-4 xl:h-[18px] xl:w-[18px]"})}),(0,n.jsx)("button",{className:"next flex h-8 w-8 -translate-y-1/2 transform cursor-pointer items-center justify-center rounded-full border border-light-400 bg-light text-dark-100 shadow-xl hover:bg-light-200 focus:outline-none rtl:rotate-180 dark:border-dark-400 dark:bg-dark-400 dark:text-white hover:dark:bg-dark-300 xl:h-9 xl:w-9",children:(0,n.jsx)(b._,{className:"h-4 w-4 xl:h-[18px] xl:w-[18px]"})})]})]})}var x=t(88767),v=t(21880),y=t(28763);function m(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function w(e){var r,t=function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(r){m(e,r,t[r])}))}return e}({},e,{language:(0,a.useRouter)().locale}),n=(0,x.useInfiniteQuery)([v.P.TYPES,t],(function(e){var r=e.queryKey,t=e.pageParam;return y.Z.types.all(Object.assign({},r[1],t))})),o=n.data,l=n.isLoading,i=n.error;return{types:null!==(r=null===o||void 0===o?void 0:o.pages.flatMap((function(e){return e})))&&void 0!==r?r:[],isLoading:l,error:i}}var j=t(41609),k=t.n(j);function O(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function _(){var e=(0,a.useRouter)().query,r=(0,l.rn)(function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(r){O(e,r,t[r])}))}return e}({},e.category&&{categories:e.category},e.price&&{price:e.price})),t=r.products,o=r.loadMore,u=r.hasNextPage,s=r.isLoadingMore,c=r.isLoading;return(0,n.jsx)(i.Z,{products:t,onLoadMore:o,hasNextPage:u,isLoadingMore:s,isLoading:c})}function P(){var e=w({limit:100}).types;return k()(e)?null:(0,n.jsx)(h,{types:e})}var N=function(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(u.Z,{title:"UI Design Resources, UI Kits, Wireframes, Icons and More",description:"Fastest digital download template built with React, NextJS, TypeScript, React-Query and Tailwind CSS.",url:s.Z.home}),(0,n.jsx)(P,{}),(0,n.jsx)(c.Z,{defaultActivePath:s.Z.explore}),(0,n.jsx)(_,{})]})};N.getLayout=function(e){return(0,n.jsx)(o.Z,{children:e})};var S=!0,E=N}},function(e){e.O(0,[6351,4698,3506,8666,6489,178,413,6582,9774,2888,179],(function(){return r=82956,e(e.s=r);var r}));var r=e.O();_N_E=r}]);