"use strict";
exports.id = 1770;
exports.ids = [1770];
exports.modules = {

/***/ 1770:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ GeneralContainer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6197);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1185);
/* harmony import */ var _config_routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(551);
/* harmony import */ var _components_ui_links_active_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2565);
/* harmony import */ var _lib_framer_motion_fade_in_bottom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2554);
/* harmony import */ var _lib_hooks_use_breakpoint__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8768);
/* harmony import */ var _lib_hooks_use_is_mounted__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3741);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_9__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_3__, _headlessui_react__WEBPACK_IMPORTED_MODULE_4__]);
([framer_motion__WEBPACK_IMPORTED_MODULE_3__, _headlessui_react__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











const menuItems = [
    {
        label: 'text-help-page-title',
        path: _config_routes__WEBPACK_IMPORTED_MODULE_5__/* ["default"].help */ .Z.help
    },
    {
        label: 'text-license-agreement',
        path: _config_routes__WEBPACK_IMPORTED_MODULE_5__/* ["default"].licensing */ .Z.licensing
    },
    {
        label: 'text-terms-and-conditions',
        path: _config_routes__WEBPACK_IMPORTED_MODULE_5__/* ["default"].terms */ .Z.terms
    },
    {
        label: 'text-privacy-page-title',
        path: _config_routes__WEBPACK_IMPORTED_MODULE_5__/* ["default"].privacy */ .Z.privacy
    }, 
];
function SidebarNav() {
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_9__.useTranslation)('common');
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
        className: "hidden pt-4 text-13px md:flex lg:flex-col",
        children: menuItems.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_links_active_link__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                href: item.path,
                className: "relative flex items-center gap-3 px-4 py-5 before:absolute before:left-0 before:-bottom-[1px] before:block before:h-[1px] before:w-full before:rounded-full before:bg-brand before:opacity-0 before:transition-opacity hover:text-dark focus:text-dark dark:hover:text-light dark:focus:text-light lg:bottom-auto lg:py-3.5 lg:pl-12 lg:pr-8 lg:before:left-7 lg:before:top-1/2 lg:before:h-1.5 lg:before:w-1.5 lg:before:-translate-y-0.5",
                activeClassName: "text-dark dark:text-light font-medium before:opacity-100",
                children: t(item.label)
            }, item.label)
        )
    }));
}
function SidebarMobileNav() {
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_9__.useTranslation)('common');
    const { pathname  } = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const currentPath = menuItems.findIndex((item)=>item.path === pathname
    );
    let { 0: selected , 1: setSelected  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(menuItems[currentPath]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setSelected(menuItems[currentPath]);
    }, [
        currentPath
    ]);
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
        className: "mb-6 flex flex-col sm:mb-8 md:hidden",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_4__.Listbox, {
            value: selected,
            onChange: setSelected,
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "relative",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_4__.Listbox.Button, {
                        className: "group flex w-full items-center justify-between rounded-md border border-light-500 py-[11px] px-4 text-13px font-medium text-dark ring-[0.5px] ring-light-500 dark:border-dark-600 dark:text-light dark:ring-dark-600 sm:py-3 sm:px-5 sm:text-sm md:py-3.5",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "flex items-center gap-2.5 truncate sm:gap-3",
                                children: t(selected === null || selected === void 0 ? void 0 : selected.label)
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "pointer-events-none text-light-base group-hover:text-dark dark:text-dark-base dark:group-hover:text-light",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    className: "h-[17px] w-[17px]",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    stroke: "currentColor",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 2,
                                        d: "M19 9l-7 7-7-7"
                                    })
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_4__.Transition, {
                        as: react__WEBPACK_IMPORTED_MODULE_1__.Fragment,
                        leave: "transition ease-in duration-100",
                        leaveFrom: "opacity-100",
                        leaveTo: "opacity-0",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_4__.Listbox.Options, {
                            className: "absolute z-30 mt-1 max-h-60 w-full overflow-auto rounded-md bg-light pt-1 pb-2 text-base shadow-dropdown dark:bg-dark-100",
                            children: menuItems.map((item, itemIdx)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_4__.Listbox.Option, {
                                    value: item,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_links_active_link__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                        href: item.path,
                                        className: "flex items-center gap-2.5 px-4 py-2 text-13px hover:text-dark focus:text-dark dark:hover:text-light dark:focus:text-light sm:px-5 sm:py-3 sm:text-sm md:py-3.5",
                                        activeClassName: "text-dark dark:text-light font-medium bg-light-400 dark:bg-dark-300",
                                        children: t(item.label)
                                    })
                                }, itemIdx)
                            )
                        })
                    })
                ]
            })
        })
    }));
}
function GeneralContainer({ children  }) {
    const breakpoint = (0,_lib_hooks_use_breakpoint__WEBPACK_IMPORTED_MODULE_7__/* .useBreakpoint */ .G)();
    const isMounted = (0,_lib_hooks_use_is_mounted__WEBPACK_IMPORTED_MODULE_8__/* .useIsMounted */ .t)();
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "relative flex w-full flex-col overflow-hidden rounded-md bg-light p-4 shadow-card dark:bg-dark-200 dark:shadow-none xs:p-5 md:p-8 lg:flex-row lg:p-0",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("aside", {
                className: "shrink-0 justify-center border-light-300 dark:border-dark-400 md:flex md:border-b lg:block lg:w-72 lg:border-b-0 ltr:lg:border-r rtl:lg:border-l lg:dark:border-dark-300 lg:dark:bg-dark-250 xl:w-80",
                children: isMounted && [
                    'xs',
                    'sm'
                ].indexOf(breakpoint) !== -1 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SidebarMobileNav, {}) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SidebarNav, {})
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {
                variants: (0,_lib_framer_motion_fade_in_bottom__WEBPACK_IMPORTED_MODULE_10__/* .fadeInBottom */ .op)(),
                className: "w-full flex-grow pt-4 pb-4 sm:pb-2 md:pt-10 lg:p-10 xl:p-12",
                children: children
            })
        ]
    }));
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;