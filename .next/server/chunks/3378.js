"use strict";
exports.id = 3378;
exports.ids = [3378];
exports.modules = {

/***/ 3378:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BottomNavigation)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config_routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(551);
/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4685);
/* harmony import */ var _components_search_search_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3063);
/* harmony import */ var _components_cart_cart_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2545);
/* harmony import */ var _components_ui_hamburger__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6238);
/* harmony import */ var _components_icons_home_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3171);
/* harmony import */ var _components_drawer_views_context__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5054);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_search_search_button__WEBPACK_IMPORTED_MODULE_4__, _components_cart_cart_button__WEBPACK_IMPORTED_MODULE_5__, _components_drawer_views_context__WEBPACK_IMPORTED_MODULE_8__]);
([_components_search_search_button__WEBPACK_IMPORTED_MODULE_4__, _components_cart_cart_button__WEBPACK_IMPORTED_MODULE_5__, _components_drawer_views_context__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









function BottomNavigation() {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    const { openDrawer  } = (0,_components_drawer_views_context__WEBPACK_IMPORTED_MODULE_8__/* .useDrawer */ .y)();
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("nav", {
        className: "sticky bottom-0 z-30 grid h-14 w-full auto-cols-fr grid-flow-col items-center bg-light py-2 text-center shadow-bottom-nav dark:bg-dark-250 sm:hidden",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_button__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                variant: "icon",
                "aria-label": "Home",
                onClick: ()=>router.push(_config_routes__WEBPACK_IMPORTED_MODULE_2__/* ["default"].home */ .Z.home)
                ,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons_home_icon__WEBPACK_IMPORTED_MODULE_7__/* .HomeIcon */ .t, {
                    className: "h-5 w-5"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_search_search_button__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {}),
            router.asPath !== _config_routes__WEBPACK_IMPORTED_MODULE_2__/* ["default"].checkout */ .Z.checkout && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_cart_cart_button__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                className: "mt-1.5"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_hamburger__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                onClick: ()=>openDrawer('MOBILE_MENU')
            })
        ]
    }));
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;