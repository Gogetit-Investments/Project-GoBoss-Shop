(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6890],{94305:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/terms",function(){return r(63701)}])},24184:function(e,t,r){"use strict";r.d(t,{Z:function(){return l}});var n=r(85893);function l(e){var t=e.title,r=e.subtitle;return(0,n.jsx)("div",{className:"page-header-banner flex w-full justify-center bg-cover bg-center bg-no-repeat pt-6 pb-10 md:pt-8 lg:pt-10 lg:pb-14 xl:pt-16 xl:pb-20",children:(0,n.jsxs)("div",{className:"relative flex w-full flex-col items-center justify-center text-center",children:[(0,n.jsx)("h2",{className:"mb-3 text-center text-xl font-medium text-dark dark:text-light md:mb-4 md:text-[22px] xl:mb-3 3xl:mb-4",children:t}),r&&(0,n.jsx)("p",{className:"font-medium",children:r})]})})}},81795:function(e,t,r){"use strict";r.d(t,{Z:function(){return a}});var n=r(85893),l=r(94184),i=r.n(l),s=r(10268);function a(e){var t=e.className,r=(new Date).getFullYear(),l=(0,s.$G)("common").t;return(0,n.jsxs)("div",{className:i()("tracking-[0.2px]",t),children:["\xa9 ",l("text-copy-right")," ",r,". "," ",(0,n.jsx)("a",{href:"https://goboss.com.ng",target:"_blank",rel:"noopener noreferrer",className:"hover:text-brand-dark",children:"GoBoss e-Commerce Platform. Key partner for CBN eNaira"}),"."]})}},31770:function(e,t,r){"use strict";r.d(t,{Z:function(){return b}});var n=r(85893),l=r(67294),i=r(11163),s=r(42485),a=r(56727),o=r(90551),d=r(52565),c=r(62554),x=r(98768),u=r(33741),m=r(10268),f=[{label:"text-help-page-title",path:o.Z.help},{label:"text-license-agreement",path:o.Z.licensing},{label:"text-terms-and-conditions",path:o.Z.terms},{label:"text-privacy-page-title",path:o.Z.privacy}];function p(){var e=(0,m.$G)("common").t;return(0,n.jsx)("nav",{className:"hidden pt-4 text-13px md:flex lg:flex-col",children:f.map((function(t){return(0,n.jsx)(d.Z,{href:t.path,className:"relative flex items-center gap-3 px-4 py-5 before:absolute before:left-0 before:-bottom-[1px] before:block before:h-[1px] before:w-full before:rounded-full before:bg-brand before:opacity-0 before:transition-opacity hover:text-dark focus:text-dark dark:hover:text-light dark:focus:text-light lg:bottom-auto lg:py-3.5 lg:pl-12 lg:pr-8 lg:before:left-7 lg:before:top-1/2 lg:before:h-1.5 lg:before:w-1.5 lg:before:-translate-y-0.5",activeClassName:"text-dark dark:text-light font-medium before:opacity-100",children:e(t.label)},t.label)}))})}function h(){var e=(0,m.$G)("common").t,t=(0,i.useRouter)().pathname,r=f.findIndex((function(e){return e.path===t})),s=(0,l.useState)(f[r]),o=s[0],c=s[1];return(0,l.useEffect)((function(){c(f[r])}),[r]),(0,n.jsx)("nav",{className:"mb-6 flex flex-col sm:mb-8 md:hidden",children:(0,n.jsx)(a.Ri,{value:o,onChange:c,children:(0,n.jsxs)("div",{className:"relative",children:[(0,n.jsxs)(a.Ri.Button,{className:"group flex w-full items-center justify-between rounded-md border border-light-500 py-[11px] px-4 text-13px font-medium text-dark ring-[0.5px] ring-light-500 dark:border-dark-600 dark:text-light dark:ring-dark-600 sm:py-3 sm:px-5 sm:text-sm md:py-3.5",children:[(0,n.jsx)("span",{className:"flex items-center gap-2.5 truncate sm:gap-3",children:e(null===o||void 0===o?void 0:o.label)}),(0,n.jsx)("span",{className:"pointer-events-none text-light-base group-hover:text-dark dark:text-dark-base dark:group-hover:text-light",children:(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-[17px] w-[17px]",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,n.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 9l-7 7-7-7"})})})]}),(0,n.jsx)(a.uT,{as:l.Fragment,leave:"transition ease-in duration-100",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:(0,n.jsx)(a.Ri.Options,{className:"absolute z-30 mt-1 max-h-60 w-full overflow-auto rounded-md bg-light pt-1 pb-2 text-base shadow-dropdown dark:bg-dark-100",children:f.map((function(t,r){return(0,n.jsx)(a.Ri.Option,{value:t,children:(0,n.jsx)(d.Z,{href:t.path,className:"flex items-center gap-2.5 px-4 py-2 text-13px hover:text-dark focus:text-dark dark:hover:text-light dark:focus:text-light sm:px-5 sm:py-3 sm:text-sm md:py-3.5",activeClassName:"text-dark dark:text-light font-medium bg-light-400 dark:bg-dark-300",children:e(t.label)})},r)}))})})]})})})}function b(e){var t=e.children,r=(0,x.G)(),l=(0,u.t)();return(0,n.jsxs)("div",{className:"relative flex w-full flex-col overflow-hidden rounded-md bg-light p-4 shadow-card dark:bg-dark-200 dark:shadow-none xs:p-5 md:p-8 lg:flex-row lg:p-0",children:[(0,n.jsx)("aside",{className:"shrink-0 justify-center border-light-300 dark:border-dark-400 md:flex md:border-b lg:block lg:w-72 lg:border-b-0 ltr:lg:border-r rtl:lg:border-l lg:dark:border-dark-300 lg:dark:bg-dark-250 xl:w-80",children:l&&-1!==["xs","sm"].indexOf(r)?(0,n.jsx)(h,{}):(0,n.jsx)(p,{})}),(0,n.jsx)(s.E.div,{variants:(0,c.op)(),className:"w-full flex-grow pt-4 pb-4 sm:pb-2 md:pt-10 lg:p-10 xl:p-12",children:t})]})}},76524:function(e,t,r){"use strict";r.d(t,{Z:function(){return m}});var n=r(85893),l=r(5152),i=r(42485),s=r(14332),a=r(43529),o=r(62554),d=r(98768),c=r(81795),x=r(33741),u=(0,l.default)((function(){return r.e(3378).then(r.bind(r,73378))}),{loadableGenerated:{webpack:function(){return[73378]}}});function m(e){var t=e.children,r=(0,d.G)(),l=(0,x.t)();return(0,n.jsxs)(i.E.div,{initial:"exit",animate:"enter",exit:"exit",className:"flex min-h-screen w-full flex-col bg-light-300 dark:bg-dark-100",children:[(0,n.jsx)(a.Z,{showHamburger:!1}),(0,n.jsxs)(i.E.div,{variants:(0,o.op)(),className:"flex flex-1 flex-col justify-between",children:[(0,n.jsx)("main",{className:"flex w-full flex-grow flex-col",children:(0,n.jsx)(s.M,{exitBeforeEnter:!0,initial:!1,onExitComplete:function(){return window.scrollTo(0,0)},children:t})}),(0,n.jsx)(c.Z,{className:"px-4 py-7 text-center font-medium text-dark-700 md:py-10 lg:px-8"})]}),l&&"xs"===r&&(0,n.jsx)(u,{})]})}},96357:function(e,t,r){"use strict";var n=r(85893),l=r(2962);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}t.Z=function(e){var t=e.title,r=e.description,a=e.url,o=s(e,["title","description","url"]);return(0,n.jsx)(l.PB,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){i(e,t,r[t])}))}return e}({title:t,description:r,openGraph:{url:"".concat("http://localhost:3000","/").concat(a),title:t,description:r}},o))}},63701:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return u},default:function(){return m}});var n=r(85893),l=r(10268),i=r(76524),s=r(24184),a=r(31770),o=[{id:"1",title:"text-terms-one-title",description:"text-terms-one-desc"},{id:"2",title:"text-terms-two-title",description:"text-terms-two-desc"},{id:"3",title:"text-terms-three-title",description:"text-terms-three-desc"},{id:"4",title:"text-terms-four-title",description:"text-terms-four-desc"},{id:"5",title:"text-terms-five-title",description:"text-terms-five-desc"},{id:"6",title:"text-terms-six-title",description:"text-terms-six-desc"},{id:"7",title:"text-terms-seven-title",description:"text-terms-seven-desc"},{id:"8",title:"text-terms-eight-title",description:"text-terms-eight-desc"},{id:"9",title:"text-terms-nine-title",description:"text-terms-nine-desc"}],d=r(96357),c=r(90551),x=function(){var e=(0,l.$G)("common").t;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(d.Z,{title:"Terms & Conditions",description:"Fastest digital download template built with React, NextJS, TypeScript, React-Query and Tailwind CSS.",url:c.Z.terms}),(0,n.jsxs)("div",{className:"mx-auto flex h-full w-full max-w-screen-xl flex-col p-4 sm:p-5",children:[(0,n.jsx)(s.Z,{title:e("text-terms-page-title"),subtitle:e("text-terms-page-subtitle")}),(0,n.jsx)(a.Z,{children:null===o||void 0===o?void 0:o.map((function(t){return(0,n.jsxs)("div",{className:"order-list-enable mb-8 last:mb-0 lg:mb-10",children:[(0,n.jsx)("h3",{className:"mb-4 text-sm font-medium text-dark dark:text-light lg:mb-5",children:e(t.title)}),(0,n.jsx)("div",{className:"space-y-5 leading-6",dangerouslySetInnerHTML:{__html:e(t.description)}})]},t.id)}))})]})]})};x.getLayout=function(e){return(0,n.jsx)(i.Z,{children:e})};var u=!0,m=x}},function(e){e.O(0,[4698,6489,178,9774,2888,179],(function(){return t=94305,e(e.s=t);var t}));var t=e.O();_N_E=t}]);