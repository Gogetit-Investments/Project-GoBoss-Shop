"use strict";
exports.id = 5309;
exports.ids = [5309];
exports.modules = {

/***/ 5309:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Layout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5152);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6197);
/* harmony import */ var _layouts_header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9225);
/* harmony import */ var _layouts_layout_sidebar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7360);
/* harmony import */ var _lib_hooks_use_breakpoint__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8768);
/* harmony import */ var _lib_hooks_use_is_mounted__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3741);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_4__, _layouts_header__WEBPACK_IMPORTED_MODULE_5__, _layouts_layout_sidebar__WEBPACK_IMPORTED_MODULE_6__]);
([framer_motion__WEBPACK_IMPORTED_MODULE_4__, _layouts_header__WEBPACK_IMPORTED_MODULE_5__, _layouts_layout_sidebar__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const BottomNavigation = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_2__["default"])(null, {
    loadableGenerated: {
        modules: [
            "../layouts/_layout.tsx -> " + "@/layouts/_bottom-navigation"
        ]
    },
    ssr: false
});
function Layout({ children  }) {
    const breakpoint = (0,_lib_hooks_use_breakpoint__WEBPACK_IMPORTED_MODULE_7__/* .useBreakpoint */ .G)();
    const isMounted = (0,_lib_hooks_use_is_mounted__WEBPACK_IMPORTED_MODULE_8__/* .useIsMounted */ .t)();
    let { 0: collapse , 1: setCollapse  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    function toggleSidebar() {
        setCollapse((prev)=>!prev
        );
    }
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {
        initial: "exit",
        animate: "enter",
        exit: "exit",
        className: "flex min-h-screen w-full flex-col bg-light-300 dark:bg-dark-100",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layouts_header__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                isCollapse: collapse,
                showHamburger: true,
                onClickHamburger: toggleSidebar
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex flex-1",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layouts_layout_sidebar__WEBPACK_IMPORTED_MODULE_6__.Sidebar, {
                        isCollapse: collapse
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("main", {
                        className: classnames__WEBPACK_IMPORTED_MODULE_3___default()('flex w-full flex-col', collapse ? 'ltr:sm:pl-60 rtl:sm:pr-60 ltr:xl:pl-[75px] rtl:xl:pr-[75px]' : 'ltr:sm:pl-[75px] rtl:sm:pr-[75px] ltr:xl:pl-60 rtl:xl:pr-60'),
                        children: children
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