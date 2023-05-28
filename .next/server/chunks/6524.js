"use strict";
exports.id = 6524;
exports.ids = [6524];
exports.modules = {

/***/ 1795:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Copyright)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_2__);



function Copyright({ className  }) {
    const currentYear = new Date().getFullYear();
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation)('common');
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('tracking-[0.2px]', className),
        children: [
            "\xa9 ",
            t('text-copy-right'),
            " ",
            currentYear,
            ". ",
            ' ',
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                href: "https://goboss.com.ng",
                target: "_blank",
                rel: "noopener noreferrer",
                className: "hover:text-brand-dark",
                children: "GoBoss e-Commerce Platform. Key partner for CBN eNaira"
            }),
            "."
        ]
    }));
};


/***/ }),

/***/ 6524:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ GeneralLayout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5152);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6197);
/* harmony import */ var _layouts_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9225);
/* harmony import */ var _lib_framer_motion_fade_in_bottom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2554);
/* harmony import */ var _lib_hooks_use_breakpoint__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8768);
/* harmony import */ var _layouts_copyright__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1795);
/* harmony import */ var _lib_hooks_use_is_mounted__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3741);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_2__, _layouts_header__WEBPACK_IMPORTED_MODULE_3__]);
([framer_motion__WEBPACK_IMPORTED_MODULE_2__, _layouts_header__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const BottomNavigation = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_1__["default"])(()=>Promise.all(/* import() */[__webpack_require__.e(3171), __webpack_require__.e(3378)]).then(__webpack_require__.bind(__webpack_require__, 3378))
, {
    loadableGenerated: {
        modules: [
            "../layouts/_general-layout.tsx -> " + "@/layouts/_bottom-navigation"
        ]
    }
});
function GeneralLayout({ children  }) {
    const breakpoint = (0,_lib_hooks_use_breakpoint__WEBPACK_IMPORTED_MODULE_4__/* .useBreakpoint */ .G)();
    const isMounted = (0,_lib_hooks_use_is_mounted__WEBPACK_IMPORTED_MODULE_6__/* .useIsMounted */ .t)();
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
        initial: "exit",
        animate: "enter",
        exit: "exit",
        className: "flex min-h-screen w-full flex-col bg-light-300 dark:bg-dark-100",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layouts_header__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                showHamburger: false
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                variants: (0,_lib_framer_motion_fade_in_bottom__WEBPACK_IMPORTED_MODULE_7__/* .fadeInBottom */ .op)(),
                className: "flex flex-1 flex-col justify-between",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("main", {
                        className: "flex w-full flex-grow flex-col",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.AnimatePresence, {
                            exitBeforeEnter: true,
                            initial: false,
                            onExitComplete: ()=>window.scrollTo(0, 0)
                            ,
                            children: children
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layouts_copyright__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        className: "px-4 py-7 text-center font-medium text-dark-700 md:py-10 lg:px-8"
                    })
                ]
            }),
            isMounted && breakpoint === 'xs' && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(BottomNavigation, {})
        ]
    }));
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;