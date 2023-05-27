"use strict";
exports.id = 7771;
exports.ids = [7771];
exports.modules = {

/***/ 7771:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CartDrawerView)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _config_routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(551);
/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4685);
/* harmony import */ var _components_ui_scrollbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7024);
/* harmony import */ var _components_cart_cart_item_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5262);
/* harmony import */ var _components_cart_cart_empty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7076);
/* harmony import */ var _lib_hooks_use_price__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3949);
/* harmony import */ var _components_cart_lib_cart_context__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4021);
/* harmony import */ var _components_drawer_views_context__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5054);
/* harmony import */ var _components_icons_close_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(3031);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_12__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_cart_cart_item_list__WEBPACK_IMPORTED_MODULE_6__, _lib_hooks_use_price__WEBPACK_IMPORTED_MODULE_8__, _components_drawer_views_context__WEBPACK_IMPORTED_MODULE_10__]);
([_components_cart_cart_item_list__WEBPACK_IMPORTED_MODULE_6__, _lib_hooks_use_price__WEBPACK_IMPORTED_MODULE_8__, _components_drawer_views_context__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);













function CartDrawerView() {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const { 0: loading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { closeDrawer  } = (0,_components_drawer_views_context__WEBPACK_IMPORTED_MODULE_10__/* .useDrawer */ .y)();
    const { total , isEmpty , language  } = (0,_components_cart_lib_cart_context__WEBPACK_IMPORTED_MODULE_9__/* .useCart */ .jD)();
    const { price: totalPrice  } = (0,_lib_hooks_use_price__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .ZP)({
        amount: total
    });
    function handleCheckout() {
        setLoading(true);
        setTimeout(()=>{
            setLoading(false);
            router.push(_config_routes__WEBPACK_IMPORTED_MODULE_3__/* ["default"].checkout */ .Z.checkout, undefined, {
                locale: language
            });
            closeDrawer();
        }, 600);
    }
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_12__.useTranslation)('common');
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex h-[70px] items-center justify-between py-2 px-5 sm:px-7",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                        className: "text-sm font-medium capitalize text-dark dark:text-light",
                        children: t('text-shopping-cart')
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "ml-3 flex h-7 items-center",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                            type: "button",
                            className: "-m-2 p-2 text-dark-800 outline-none transition-all hover:text-dark hover:dark:text-light-200",
                            onClick: closeDrawer,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "sr-only",
                                    children: t('text-close-panel')
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons_close_icon__WEBPACK_IMPORTED_MODULE_11__/* .CloseIcon */ .T, {
                                    className: "h-4 w-4"
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_scrollbar__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                className: "cart-scrollbar w-full flex-1 py-6 px-6 sm:px-7",
                children: !isEmpty ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_cart_cart_item_list__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {}) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_cart_cart_empty__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {})
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "border-t border-light-300 px-5 py-6 dark:border-dark-500 sm:px-7 sm:pb-8 sm:pt-7",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex justify-between text-sm font-medium text-dark dark:text-light",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                children: [
                                    t('text-subtotal'),
                                    ":"
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                children: totalPrice
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "mt-5 md:mt-8",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_button__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                            disabled: isEmpty,
                            isLoading: loading,
                            onClick: ()=>handleCheckout()
                            ,
                            className: "w-full text-sm md:h-[52px]",
                            children: t('text-proceed-to-checkout')
                        })
                    })
                ]
            })
        ]
    }));
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7024:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Scrollbar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var overlayscrollbars_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(153);
/* harmony import */ var overlayscrollbars_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(overlayscrollbars_react__WEBPACK_IMPORTED_MODULE_2__);




function Scrollbar({ options , style , className , ...props }) {
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(overlayscrollbars_react__WEBPACK_IMPORTED_MODULE_2__.OverlayScrollbarsComponent, {
        options: {
            className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('os-theme-thin', className),
            scrollbars: {
                autoHide: 'scroll'
            },
            ...options
        },
        style: style,
        ...props
    }));
};


/***/ })

};
;