"use strict";
exports.id = 5517;
exports.ids = [5517];
exports.modules = {

/***/ 2545:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ CartButton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4685);
/* harmony import */ var _components_icons_cart_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4904);
/* harmony import */ var _components_cart_lib_cart_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4021);
/* harmony import */ var _components_drawer_views_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5054);
/* harmony import */ var _lib_hooks_use_is_mounted__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3741);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_drawer_views_context__WEBPACK_IMPORTED_MODULE_4__]);
_components_drawer_views_context__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






function CartButton({ className  }) {
    const isMounted = (0,_lib_hooks_use_is_mounted__WEBPACK_IMPORTED_MODULE_5__/* .useIsMounted */ .t)();
    const { openDrawer  } = (0,_components_drawer_views_context__WEBPACK_IMPORTED_MODULE_4__/* .useDrawer */ .y)();
    const { totalItems  } = (0,_components_cart_lib_cart_context__WEBPACK_IMPORTED_MODULE_3__/* .useCart */ .jD)();
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_button__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        variant: "icon",
        "aria-label": "Cart",
        onClick: ()=>openDrawer('CART_VIEW')
        ,
        className: className,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
            className: "relative flex items-center",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons_cart_icon__WEBPACK_IMPORTED_MODULE_2__/* .CartIcon */ .w, {
                    className: "h-5 w-5"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: "absolute -top-3 -right-2.5 flex min-h-[20px] min-w-[20px] shrink-0 items-center justify-center rounded-full border-2 border-light-100 bg-brand px-0.5 text-10px font-bold leading-none text-light dark:border-dark-250",
                    children: isMounted && totalItems
                })
            ]
        })
    }));
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4904:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "w": () => (/* binding */ CartIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const CartIcon = (props)=>{
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        viewBox: "0 0 20 20",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            d: "M17.8315 7.00171C17.7049 6.86414 17.5235 6.78571 17.3329 6.78571H13.9998V4.85714C13.9998 2.72993 12.2059 1 10 1C7.79414 1 6.00025 2.72993 6.00025 4.85714V6.78571H2.66712C2.47647 6.78571 2.29515 6.86414 2.16849 7.00171C2.04183 7.13929 1.9825 7.3225 2.0045 7.50443L3.13976 16.7121C3.29042 18.0164 4.42968 19 5.79026 19H14.2097C15.571 19 16.7096 18.0164 16.8596 16.7172L17.9955 7.50443C18.0175 7.32186 17.9582 7.13929 17.8315 7.00171ZM7.3335 4.85714C7.3335 3.439 8.52943 2.28571 10 2.28571C11.4706 2.28571 12.6665 3.439 12.6665 4.85714V6.78571H7.3335V4.85714ZM6.66687 9.35714C6.2989 9.35714 6.00025 9.06914 6.00025 8.71429C6.00025 8.35943 6.2989 8.07143 6.66687 8.07143C7.03485 8.07143 7.3335 8.35943 7.3335 8.71429C7.3335 9.06914 7.03485 9.35714 6.66687 9.35714ZM13.3331 9.35714C12.9651 9.35714 12.6665 9.06914 12.6665 8.71429C12.6665 8.35943 12.9651 8.07143 13.3331 8.07143C13.7011 8.07143 13.9998 8.35943 13.9998 8.71429C13.9998 9.06914 13.7011 9.35714 13.3331 9.35714Z",
            fill: "currentColor"
        })
    }));
};


/***/ }),

/***/ 7755:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "i": () => (/* binding */ LangSwitcherIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const LangSwitcherIcon = ({ color ='currentColor' , width ='14px' , height ='10px' , ...props })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        width: width,
        height: height,
        fill: "none",
        ...props,
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            d: "M.6 1.845a.91.91 0 0 1 1.613-.6l4.772 5.571 4.771-5.57a.91.91 0 1 1 1.378 1.182L7.677 8.806a.91.91 0 0 1-1.385 0L.83 2.428a.91.91 0 0 1-.23-.583Z",
            fill: color
        })
    })
;


/***/ }),

/***/ 2453:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W": () => (/* binding */ SearchIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const SearchIcon = (props)=>{
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        viewBox: "0 0 20 20",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            d: "M18.1951 17.2053L13.4176 12.4277C14.343 11.2846 14.9002 9.83207 14.9002 8.25006C14.9002 4.58342 11.9167 1.59998 8.25009 1.59998C4.58345 1.59998 1.60004 4.58339 1.60004 8.25003C1.60004 11.9167 4.58348 14.9001 8.25012 14.9001C9.83213 14.9001 11.2847 14.3429 12.4278 13.4175L17.2053 18.1951C17.3418 18.3316 17.521 18.4002 17.7002 18.4002C17.8795 18.4002 18.0586 18.3316 18.1952 18.1951C18.4688 17.9214 18.4688 17.479 18.1951 17.2053ZM8.25012 13.5001C5.35488 13.5001 3.00006 11.1453 3.00006 8.25003C3.00006 5.35479 5.35488 2.99997 8.25012 2.99997C11.1454 2.99997 13.5002 5.35479 13.5002 8.25003C13.5002 11.1453 11.1453 13.5001 8.25012 13.5001Z",
            stroke: "currentColor",
            fill: "currentColor",
            strokeWidth: "0.4"
        })
    }));
};


/***/ }),

/***/ 3865:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "t": () => (/* binding */ UserIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const UserIcon = (props)=>{
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        fill: "none",
        viewBox: "0 0 20 20",
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M10 10.625C9.25832 10.625 8.5333 10.4051 7.91661 9.99301C7.29993 9.58096 6.81928 8.99529 6.53545 8.31006C6.25162 7.62484 6.17736 6.87084 6.32206 6.14341C6.46675 5.41598 6.8239 4.7478 7.34835 4.22335C7.8728 3.6989 8.54098 3.34175 9.26841 3.19706C9.99584 3.05236 10.7498 3.12662 11.4351 3.41045C12.1203 3.69428 12.706 4.17493 13.118 4.79161C13.5301 5.4083 13.75 6.13332 13.75 6.875C13.75 7.86956 13.3549 8.82339 12.6517 9.52665C11.9484 10.2299 10.9946 10.625 10 10.625ZM10 4.375C9.50555 4.375 9.0222 4.52162 8.61108 4.79633C8.19995 5.07103 7.87952 5.46148 7.6903 5.91829C7.50108 6.37511 7.45158 6.87777 7.54804 7.36273C7.6445 7.84768 7.8826 8.29314 8.23223 8.64277C8.58187 8.9924 9.02732 9.2305 9.51228 9.32697C9.99723 9.42343 10.4999 9.37392 10.9567 9.1847C11.4135 8.99548 11.804 8.67505 12.0787 8.26393C12.3534 7.8528 12.5 7.36945 12.5 6.875C12.5 6.21196 12.2366 5.57608 11.7678 5.10723C11.2989 4.63839 10.663 4.375 10 4.375Z",
                fill: "currentColor"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M9.99991 19.375C8.61393 19.374 7.2454 19.0658 5.99284 18.4725C4.74029 17.8792 3.63486 17.0155 2.75615 15.9437L2.43115 15.5437L2.75615 15.15C3.6356 14.0795 4.74135 13.2173 5.99387 12.6253C7.24639 12.0334 8.61454 11.7263 9.99991 11.7263C11.3853 11.7263 12.7534 12.0334 14.0059 12.6253C15.2585 13.2173 16.3642 14.0795 17.2437 15.15L17.5687 15.5437L17.2437 15.9437C16.365 17.0155 15.2595 17.8792 14.007 18.4725C12.7544 19.0658 11.3859 19.374 9.99991 19.375ZM4.06865 15.55C4.8288 16.3637 5.74811 17.0125 6.76951 17.4561C7.79091 17.8997 8.89259 18.1286 10.0062 18.1286C11.1197 18.1286 12.2214 17.8997 13.2428 17.4561C14.2642 17.0125 15.1835 16.3637 15.9437 15.55C15.1835 14.7362 14.2642 14.0874 13.2428 13.6438C12.2214 13.2002 11.1197 12.9713 10.0062 12.9713C8.89259 12.9713 7.79091 13.2002 6.76951 13.6438C5.74811 14.0874 4.8288 14.7362 4.06865 15.55Z",
                fill: "currentColor"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M9.9999 19.375C7.87037 19.3764 5.8038 18.6528 4.14034 17.3232C2.47687 15.9936 1.31563 14.1373 0.847745 12.0598C0.379858 9.98231 0.633207 7.80742 1.56609 5.8931C2.49898 3.97877 4.05581 2.43909 5.98035 1.52747C7.90489 0.615841 10.0825 0.386598 12.1546 0.877467C14.2268 1.36834 16.0702 2.55007 17.3812 4.22816C18.6923 5.90625 19.393 7.9807 19.368 10.1101C19.343 12.2395 18.5938 14.2969 17.2436 15.9437C16.3649 17.0156 15.2595 17.8792 14.007 18.4725C12.7544 19.0659 11.3859 19.3741 9.9999 19.375ZM9.9999 1.87501C8.39293 1.87501 6.82205 2.35153 5.4859 3.24431C4.14975 4.1371 3.10835 5.40605 2.49339 6.8907C1.87843 8.37535 1.71753 10.009 2.03103 11.5851C2.34453 13.1612 3.11837 14.6089 4.25467 15.7452C5.39097 16.8815 6.8387 17.6554 8.4148 17.9689C9.99089 18.2824 11.6246 18.1215 13.1092 17.5065C14.5939 16.8916 15.8628 15.8502 16.7556 14.514C17.6484 13.1779 18.1249 11.607 18.1249 10C18.1249 7.84512 17.2689 5.77849 15.7451 4.25476C14.2214 2.73103 12.1548 1.87501 9.9999 1.87501Z",
                fill: "currentColor"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M3.2373 15.5499C3.2373 15.5499 9.53105 22.5812 15.9373 16.2499L16.7623 15.5499C16.7623 15.5499 11.4123 9.99993 5.98105 13.3312L3.2373 15.5499Z",
                fill: "currentColor"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M10 10C11.7259 10 13.125 8.60089 13.125 6.875C13.125 5.14911 11.7259 3.75 10 3.75C8.27411 3.75 6.875 5.14911 6.875 6.875C6.875 8.60089 8.27411 10 10 10Z",
                fill: "currentColor"
            })
        ]
    }));
};


/***/ }),

/***/ 3063:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ SearchButton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4685);
/* harmony import */ var _components_icons_search_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2453);
/* harmony import */ var _components_search_search_view__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8222);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_search_search_view__WEBPACK_IMPORTED_MODULE_3__]);
_components_search_search_view__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




function SearchButton({ className ='flex'  }) {
    const { openSearch  } = (0,_components_search_search_view__WEBPACK_IMPORTED_MODULE_3__/* .useSearch */ .R)();
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_button__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        variant: "icon",
        "aria-label": "Search",
        className: className,
        onClick: openSearch,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons_search_icon__WEBPACK_IMPORTED_MODULE_2__/* .SearchIcon */ .W, {
            className: "h-5 w-5"
        })
    }));
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2353:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "v": () => (/* reexport safe */ _headlessui_react__WEBPACK_IMPORTED_MODULE_0__.Menu)
/* harmony export */ });
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1185);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_headlessui_react__WEBPACK_IMPORTED_MODULE_0__]);
_headlessui_react__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6238:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Hamburger)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4685);


function Hamburger({ isToggle , ...props }) {
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_button__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        variant: "icon",
        "aria-label": "Hamburger",
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "currentColor",
            className: "h-6 w-6",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                className: "transition-all duration-200",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 1.8,
                d: isToggle ? 'M4 6h16M4 12h8m-8 6h16' : 'M4 6h16M4 12h16M4 18h16'
            })
        })
    }));
};


/***/ }),

/***/ 1777:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ LanguageSwitcher)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1185);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_icons_lang_switcher_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7755);
/* harmony import */ var _lib_locals__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1757);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9915);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_headlessui_react__WEBPACK_IMPORTED_MODULE_2__, js_cookie__WEBPACK_IMPORTED_MODULE_7__]);
([_headlessui_react__WEBPACK_IMPORTED_MODULE_2__, js_cookie__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








function LanguageSwitcher() {
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_3__.useTranslation)('common');
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    const { asPath , locale , locales  } = router;
    let filterItem = _lib_locals__WEBPACK_IMPORTED_MODULE_6__/* .languageMenu */ .X === null || _lib_locals__WEBPACK_IMPORTED_MODULE_6__/* .languageMenu */ .X === void 0 ? void 0 : _lib_locals__WEBPACK_IMPORTED_MODULE_6__/* .languageMenu.filter */ .X.filter((element)=>{
        return locales === null || locales === void 0 ? void 0 : locales.includes(element === null || element === void 0 ? void 0 : element.id);
    });
    const currentSelectedItem = locale ? filterItem === null || filterItem === void 0 ? void 0 : filterItem.find((o)=>{
        return (o === null || o === void 0 ? void 0 : o.value) === locale;
    }) : filterItem[2];
    const { 0: selectedItem , 1: setSelectedItem  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(currentSelectedItem);
    function handleItemClick(values) {
        js_cookie__WEBPACK_IMPORTED_MODULE_7__["default"].set('NEXT_LOCALE', values === null || values === void 0 ? void 0 : values.value, {
            expires: 365
        });
        setSelectedItem(values);
        router.push(asPath, undefined, {
            locale: values === null || values === void 0 ? void 0 : values.value
        });
    }
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Listbox, {
        value: selectedItem,
        onChange: handleItemClick,
        children: ({ open  })=>{
            /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "ms-2 lg:ms-0 relative z-10 xl:w-[130px]",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Listbox.Button, {
                        className: "xl:text-heading relative flex h-full w-full cursor-pointer items-center rounded text-[13px] font-semibold focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 xl:h-auto xl:w-full xl:border xl:border-solid xl:border-[#CFD3DA] xl:bg-white xl:py-2 xl:text-sm xl:ltr:pl-3 xl:ltr:pr-7 xl:rtl:pl-7 xl:rtl:pr-3 xl:dark:border-dark-500 xl:dark:bg-transparent",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "relative block h-[38px] w-[38px] overflow-hidden rounded-full xl:hidden",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "relative top-[3px] block",
                                    children: selectedItem.iconMobile
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                className: "hidden items-center truncate xl:flex",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "text-xl ltr:mr-3 rtl:ml-3",
                                        children: selectedItem.icon
                                    }),
                                    ' ',
                                    t(selectedItem.name)
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "pointer-events-none absolute inset-y-0 hidden items-center ltr:right-0 ltr:pr-2 rtl:left-0 rtl:pl-2 xl:flex",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons_lang_switcher_icon__WEBPACK_IMPORTED_MODULE_5__/* .LangSwitcherIcon */ .i, {
                                    className: "text-gray-400",
                                    "aria-hidden": "true"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Transition, {
                        show: open,
                        as: react__WEBPACK_IMPORTED_MODULE_1__.Fragment,
                        leave: "transition ease-in duration-100",
                        leaveFrom: "opacity-100",
                        leaveTo: "opacity-0",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Listbox.Options, {
                            static: true,
                            className: `absolute mt-1 max-h-60 w-[130px] overflow-auto rounded-md bg-white py-1 text-sm shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ltr:right-0 rtl:left-0 dark:bg-dark-250 xl:w-full`,
                            children: filterItem === null || filterItem === void 0 ? void 0 : filterItem.map((option, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Listbox.Option, {
                                    className: ({ active  })=>`${active ? 'bg-gray-100 text-amber-900 dark:bg-dark-600 dark:text-white' : 'text-gray-900 dark:text-white'}
												relative cursor-pointer select-none py-2 px-3`
                                    ,
                                    value: option,
                                    children: ({ selected , active  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                            className: "flex items-center",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "text-xl",
                                                    children: option.icon
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: `${selected ? 'font-medium' : 'font-normal'} block truncate ltr:ml-1.5 rtl:mr-1.5`,
                                                    children: t(option.name)
                                                }),
                                                selected ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: `${active && 'text-amber-600 dark:text-dark-900'}
                                 absolute inset-y-0 flex items-center ltr:left-0 ltr:pl-3 rtl:right-0 rtl:pr-3`
                                                }) : null
                                            ]
                                        })
                                }, index)
                            )
                        })
                    })
                ]
            });
        }
    }));
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7155:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ ThemeSwitcher)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next-themes"
var external_next_themes_ = __webpack_require__(1162);
;// CONCATENATED MODULE: ./src/components/icons/theme-light-icon.tsx

const ThemeLightIcon = (props)=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        viewBox: "0 0 20 20",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M13.545 6.45505C12.6455 5.55558 11.3757 4.97357 10 4.97357C8.62437 4.97357 7.35452 5.52913 6.45505 6.45505C5.55558 7.35452 4.97357 8.62437 4.97357 10C4.97357 11.3757 5.55558 12.6455 6.45505 13.545C7.35452 14.4445 8.62437 15.0265 10 15.0265C11.3757 15.0265 12.6455 14.4709 13.545 13.545C14.4445 12.6455 15.0265 11.3757 15.0265 10C15.0265 8.62437 14.4709 7.35452 13.545 6.45505Z",
                fill: "currentColor"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M10 3.41269C10.3704 3.41269 10.6879 3.09523 10.6879 2.72486V0.68783C10.6879 0.31746 10.3704 0 10 0C9.62965 0 9.31219 0.31746 9.31219 0.68783V2.72486C9.31219 3.09523 9.62965 3.41269 10 3.41269Z",
                fill: "currentColor"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M15.6349 5.34392L17.0899 3.88889C17.3545 3.62434 17.3545 3.20106 17.0899 2.93651C16.8254 2.67196 16.4021 2.67196 16.1376 2.93651L14.6825 4.39154C14.418 4.65609 14.418 5.07937 14.6825 5.34392C14.9206 5.60847 15.3439 5.60847 15.6349 5.34392Z",
                fill: "currentColor"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M19.3122 9.31219H17.2751C16.9047 9.31219 16.5873 9.62965 16.5873 10C16.5873 10.3704 16.9047 10.6879 17.2751 10.6879H19.3122C19.6825 10.6879 20 10.3704 20 10C20 9.62965 19.6825 9.31219 19.3122 9.31219Z",
                fill: "currentColor"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M15.6085 14.6561C15.3439 14.3916 14.9207 14.3916 14.6561 14.6561C14.3916 14.9207 14.3916 15.3439 14.6561 15.6085L16.1111 17.0635C16.3757 17.3281 16.799 17.3281 17.0635 17.0635C17.3281 16.799 17.3281 16.3757 17.0635 16.1111L15.6085 14.6561Z",
                fill: "currentColor"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M10 16.5873C9.62965 16.5873 9.31219 16.9047 9.31219 17.2751V19.3122C9.31219 19.6825 9.62965 20 10 20C10.3704 20 10.6879 19.6825 10.6879 19.3122V17.2751C10.6879 16.9047 10.3704 16.5873 10 16.5873Z",
                fill: "currentColor"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M4.36511 14.6561L2.91008 16.1111C2.64553 16.3757 2.64553 16.799 2.91008 17.0635C3.17463 17.3281 3.59791 17.3281 3.86246 17.0635L5.31749 15.6085C5.58204 15.3439 5.58204 14.9207 5.31749 14.6561C5.07939 14.3916 4.65611 14.3916 4.36511 14.6561Z",
                fill: "currentColor"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M3.41269 10C3.41269 9.62965 3.09523 9.31219 2.72486 9.31219H0.68783C0.31746 9.31219 0 9.62965 0 10C0 10.3704 0.31746 10.6879 0.68783 10.6879H2.72486C3.09523 10.6879 3.41269 10.3704 3.41269 10Z",
                fill: "currentColor"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M4.36511 5.34392C4.62966 5.60847 5.05294 5.60847 5.31749 5.34392C5.58204 5.07937 5.58204 4.65609 5.31749 4.39154L3.86246 2.93651C3.59791 2.67196 3.17463 2.67196 2.91008 2.93651C2.64553 3.20106 2.64553 3.62434 2.91008 3.88889L4.36511 5.34392Z",
                fill: "currentColor"
            })
        ]
    }));
};

;// CONCATENATED MODULE: ./src/components/icons/theme-dark-icon.tsx

const ThemeDarkIcon = (props)=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("svg", {
        viewBox: "0 0 20 20",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M18.0246 11.1731C17.8521 11.13 17.6795 11.1731 17.5285 11.281C16.9676 11.7556 16.3204 12.1439 15.6085 12.4028C14.9398 12.6616 14.2063 12.7911 13.4297 12.7911C11.6823 12.7911 10.086 12.0792 8.94261 10.9358C7.79927 9.79248 7.08738 8.19612 7.08738 6.44875C7.08738 5.71528 7.21681 5.00339 7.43254 4.35622C7.66984 3.6659 8.015 3.04029 8.46802 2.50098C8.66217 2.26368 8.61903 1.91852 8.38173 1.72437C8.23072 1.61651 8.05814 1.57336 7.88556 1.61651C6.0519 2.11268 4.45553 3.21287 3.31219 4.6798C2.21199 6.12516 1.56482 7.91568 1.56482 9.8572C1.56482 12.2086 2.51401 14.3443 4.06723 15.8975C5.62045 17.4507 7.73455 18.3999 10.1075 18.3999C12.0922 18.3999 13.9259 17.7096 15.3928 16.5662C16.8813 15.4013 17.9599 13.7403 18.4129 11.8419C18.4992 11.5399 18.3267 11.2378 18.0246 11.1731Z",
            fill: "currentColor"
        })
    }));
};

// EXTERNAL MODULE: ./src/components/ui/button.tsx
var ui_button = __webpack_require__(4685);
// EXTERNAL MODULE: ./src/lib/hooks/use-is-mounted.ts
var use_is_mounted = __webpack_require__(3741);
;// CONCATENATED MODULE: ./src/components/ui/theme-switcher.tsx






function ThemeSwitcher() {
    const isMounted = (0,use_is_mounted/* useIsMounted */.t)();
    const { resolvedTheme , setTheme  } = (0,external_next_themes_.useTheme)();
    const isDarkMode = resolvedTheme === 'dark';
    return(/*#__PURE__*/ jsx_runtime_.jsx(ui_button/* default */.Z, {
        variant: "icon",
        "aria-label": "Theme Switcher",
        onClick: ()=>setTheme(isDarkMode ? 'light' : 'dark')
        ,
        className: "h-7 w-7",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
            className: "absolute",
            children: [
                isMounted && isDarkMode && /*#__PURE__*/ jsx_runtime_.jsx(ThemeDarkIcon, {
                    className: "h-[19px] w-[19px]"
                }),
                isMounted && !isDarkMode && /*#__PURE__*/ jsx_runtime_.jsx(ThemeLightIcon, {
                    className: "h-5 w-5"
                })
            ]
        })
    }));
};


/***/ }),

/***/ 9225:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Header)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_avatar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9983);
/* harmony import */ var react_avatar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_avatar__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _config_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(551);
/* harmony import */ var _components_ui_logo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7310);
/* harmony import */ var _components_ui_theme_switcher__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7155);
/* harmony import */ var _components_ui_links_active_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2565);
/* harmony import */ var _data_user__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6639);
/* harmony import */ var _components_ui_dropdown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2353);
/* harmony import */ var _components_ui_transition__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6604);
/* harmony import */ var _components_icons_user_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(3865);
/* harmony import */ var _components_search_search_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(3063);
/* harmony import */ var _components_cart_cart_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(2545);
/* harmony import */ var _components_ui_hamburger__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(6238);
/* harmony import */ var _components_product_grid_switcher__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(1575);
/* harmony import */ var _lib_hooks_use_is_mounted__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(3741);
/* harmony import */ var _lib_hooks_use_swap_body_class__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(7926);
/* harmony import */ var _components_modal_views_context__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(5335);
/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(4685);
/* harmony import */ var _components_ui_language_switcher__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(1777);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_21__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_ui_logo__WEBPACK_IMPORTED_MODULE_5__, _data_user__WEBPACK_IMPORTED_MODULE_8__, _components_ui_dropdown__WEBPACK_IMPORTED_MODULE_9__, _components_ui_transition__WEBPACK_IMPORTED_MODULE_10__, _components_search_search_button__WEBPACK_IMPORTED_MODULE_12__, _components_cart_cart_button__WEBPACK_IMPORTED_MODULE_13__, _components_product_grid_switcher__WEBPACK_IMPORTED_MODULE_15__, _components_ui_language_switcher__WEBPACK_IMPORTED_MODULE_20__]);
([_components_ui_logo__WEBPACK_IMPORTED_MODULE_5__, _data_user__WEBPACK_IMPORTED_MODULE_8__, _components_ui_dropdown__WEBPACK_IMPORTED_MODULE_9__, _components_ui_transition__WEBPACK_IMPORTED_MODULE_10__, _components_search_search_button__WEBPACK_IMPORTED_MODULE_12__, _components_cart_cart_button__WEBPACK_IMPORTED_MODULE_13__, _components_product_grid_switcher__WEBPACK_IMPORTED_MODULE_15__, _components_ui_language_switcher__WEBPACK_IMPORTED_MODULE_20__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






















const AuthorizedMenuItems = [
    {
        label: 'text-auth-profile',
        path: _config_routes__WEBPACK_IMPORTED_MODULE_4__/* ["default"].profile */ .Z.profile
    },
    {
        label: 'text-auth-purchase',
        path: _config_routes__WEBPACK_IMPORTED_MODULE_4__/* ["default"].purchases */ .Z.purchases
    },
    {
        label: 'text-auth-wishlist',
        path: _config_routes__WEBPACK_IMPORTED_MODULE_4__/* ["default"].wishlists */ .Z.wishlists
    },
    {
        label: 'text-followed-authors',
        path: _config_routes__WEBPACK_IMPORTED_MODULE_4__/* ["default"].followedShop */ .Z.followedShop
    },
    {
        label: 'text-auth-password',
        path: _config_routes__WEBPACK_IMPORTED_MODULE_4__/* ["default"].password */ .Z.password
    }, 
];
function AuthorizedMenu({ user  }) {
    var ref, ref1;
    const { mutate: logout  } = (0,_data_user__WEBPACK_IMPORTED_MODULE_8__/* .useLogout */ .a)();
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_21__.useTranslation)('common');
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_dropdown__WEBPACK_IMPORTED_MODULE_9__/* .Menu */ .v, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_dropdown__WEBPACK_IMPORTED_MODULE_9__/* .Menu.Button */ .v.Button, {
                className: "relative inline-flex h-8 w-8 justify-center rounded-full border border-light-400 bg-light-300 dark:border-dark-500 dark:bg-dark-500",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_avatar__WEBPACK_IMPORTED_MODULE_3___default()), {
                    size: "32",
                    round: true,
                    name: user.name,
                    textSizeRatio: 2,
                    src: user === null || user === void 0 ? void 0 : (ref = user.profile) === null || ref === void 0 ? void 0 : (ref1 = ref.avatar) === null || ref1 === void 0 ? void 0 : ref1.thumbnail
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_transition__WEBPACK_IMPORTED_MODULE_10__/* .Transition */ .u, {
                as: react__WEBPACK_IMPORTED_MODULE_1__.Fragment,
                enter: "transition ease-out duration-100",
                enterFrom: "transform opacity-0 scale-95",
                enterTo: "transform opacity-100 scale-100",
                leave: "transition ease-in duration-75",
                leaveFrom: "transform opacity-100 scale-100",
                leaveTo: "transform opacity-0 scale-95",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_dropdown__WEBPACK_IMPORTED_MODULE_9__/* .Menu.Items */ .v.Items, {
                    className: "absolute top-[84%] z-30 mt-4 w-56 rounded-md bg-light py-1.5 text-dark shadow-dropdown ltr:right-0 ltr:origin-top-right rtl:left-0 rtl:origin-top-left dark:bg-dark-250 dark:text-light",
                    children: [
                        AuthorizedMenuItems.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_dropdown__WEBPACK_IMPORTED_MODULE_9__/* .Menu.Item */ .v.Item, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_links_active_link__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                    href: item.path,
                                    className: "transition-fill-colors flex w-full items-center px-5 py-2.5 hover:bg-light-400 dark:hover:bg-dark-600",
                                    children: t(item.label)
                                })
                            }, item.label)
                        ),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_dropdown__WEBPACK_IMPORTED_MODULE_9__/* .Menu.Item */ .v.Item, {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                type: "button",
                                className: "transition-fill-colors w-full px-5 py-2.5 hover:bg-light-400 ltr:text-left rtl:text-right dark:hover:bg-dark-600",
                                onClick: ()=>logout()
                                ,
                                children: t('text-logout')
                            })
                        })
                    ]
                })
            })
        ]
    }));
}
function LoginMenu() {
    const { openModal  } = (0,_components_modal_views_context__WEBPACK_IMPORTED_MODULE_18__/* .useModalAction */ .SO)();
    const { me , isAuthorized , isLoading  } = (0,_data_user__WEBPACK_IMPORTED_MODULE_8__/* .useMe */ .P)();
    const isMounted = (0,_lib_hooks_use_is_mounted__WEBPACK_IMPORTED_MODULE_16__/* .useIsMounted */ .t)();
    if (!isMounted) {
        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "h-8 w-8 animate-pulse rounded-full bg-light-300 dark:bg-dark-500"
        }));
    }
    if (isAuthorized && me && !isLoading) {
        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AuthorizedMenu, {
            user: me
        }));
    }
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_button__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
        variant: "icon",
        "aria-label": "User",
        className: "flex",
        onClick: ()=>openModal('LOGIN_VIEW')
        ,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons_user_icon__WEBPACK_IMPORTED_MODULE_11__/* .UserIcon */ .t, {
            className: "h-5 w-5"
        })
    }));
}
function Header({ isCollapse , showHamburger =false , onClickHamburger  }) {
    const { asPath  } = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_21__.useTranslation)('common');
    (0,_lib_hooks_use_swap_body_class__WEBPACK_IMPORTED_MODULE_17__/* .useSwapBodyClassOnScrollDirection */ .K)();
    const isMultiLangEnable =  false && 0;
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("header", {
        className: "app-header sticky top-0 z-30 flex h-16 w-full items-center justify-between border-b border-light-300 bg-light py-1 px-4 ltr:left-0 rtl:right-0 dark:border-dark-300 dark:bg-dark-250 sm:h-[70px] sm:px-6",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex items-center gap-4",
                children: [
                    showHamburger && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_hamburger__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                        isToggle: isCollapse,
                        onClick: onClickHamburger,
                        className: "hidden sm:flex"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_logo__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {})
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "relative flex items-center gap-5 pr-0.5 xs:gap-6 sm:gap-7",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_search_search_button__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                        className: "hidden sm:flex"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_theme_switcher__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_product_grid_switcher__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {}),
                    asPath !== _config_routes__WEBPACK_IMPORTED_MODULE_4__/* ["default"].checkout */ .Z.checkout && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_cart_cart_button__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                        className: "hidden sm:flex"
                    }),
                    isMultiLangEnable ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "ltr:ml-auto rtl:mr-auto",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_language_switcher__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {})
                    }) : '',
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        href: `${"http://localhost:3002"}/register`,
                        target: "_blank",
                        rel: "noreferrer",
                        className: "focus:ring-accent-700 hidden h-9 shrink-0 items-center justify-center rounded border border-transparent bg-brand px-3 py-0 text-sm font-semibold leading-none text-light outline-none transition duration-300 ease-in-out hover:bg-brand-dark focus:shadow focus:outline-none focus:ring-1 sm:inline-flex",
                        children: t('text-become-seller')
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(LoginMenu, {})
                ]
            })
        ]
    }));
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8768:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "G": () => (/* binding */ useBreakpoint)
/* harmony export */ });
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9755);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_use__WEBPACK_IMPORTED_MODULE_0__);

const breakPoints = {
    xs: 480,
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    '2xl': 1440,
    '3xl': 1780,
    '4xl': 2160
};
const useBreakpoint = (0,react_use__WEBPACK_IMPORTED_MODULE_0__.createBreakpoint)(breakPoints);


/***/ }),

/***/ 7926:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "K": () => (/* binding */ useSwapBodyClassOnScrollDirection)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1381);
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_throttle__WEBPACK_IMPORTED_MODULE_1__);


function useSwapBodyClassOnScrollDirection(offset = 80) {
    const scrollUp = 'scroll-up';
    const scrollDown = 'scroll-down';
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        const body = document.body;
        let lastScroll = offset;
        const handleScroll = ()=>{
            const currentScroll = window.pageYOffset;
            if (currentScroll <= offset) {
                body.classList.remove(scrollUp);
                return;
            }
            if (currentScroll > lastScroll && !body.classList.contains(scrollDown)) {
                // down
                body.classList.remove(scrollUp);
                body.classList.add(scrollDown);
            } else if (currentScroll < lastScroll && body.classList.contains(scrollDown)) {
                // up
                body.classList.remove(scrollDown);
                body.classList.add(scrollUp);
            }
            lastScroll = currentScroll;
        };
        document.addEventListener('scroll', lodash_throttle__WEBPACK_IMPORTED_MODULE_1___default()(handleScroll, 100));
        return ()=>{
            document.removeEventListener('scroll', handleScroll);
        };
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        function initFunction() {
            const body = document.body;
            if (body.classList.contains(scrollDown)) {
                body.classList.remove(scrollDown);
            }
        }
        initFunction();
    }, []);
}


/***/ }),

/***/ 1757:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "X": () => (/* binding */ languageMenu),
  "S": () => (/* binding */ useIsRTL)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./src/components/icons/flags/SAFlag.tsx

const SAFlag = ({ width ='640px' , height ='480px'  })=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        id: "flag-icon-css-sa",
        viewBox: "0 0 640 480",
        width: width,
        height: height,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("defs", {
                children: /*#__PURE__*/ jsx_runtime_.jsx("clipPath", {
                    id: "sa-a",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        fillOpacity: ".7",
                        d: "M-85.3 0h682.6v512H-85.3z"
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("g", {
                fillRule: "evenodd",
                clipPath: "url(#sa-a)",
                transform: "translate(80) scale(.9375)",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        fill: "#199d00",
                        d: "M-128 0h768v512h-768z"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        fill: "#fff",
                        d: "M65.5 145.1c-.8 12-2 33 8.3 35.2 12.3 1.2 5.5-20.8 10-24.8.8-2 2.3-2 2.4.5v18.7c0 6 4 7.8 7 9 3.2-.2 5.4 0 6.6 3l1.6 32.3s7.4 2.2 7.8-18.1c.3-12-2.4-21.9-.8-24.2 0-2.3 3-2.4 5-1.3 3.2 2.2 4.6 5 9.6 4 7.6-2.2 12.2-5.9 12.3-11.7a47 47 0 00-3.5-16.6c.4-1-1.4-3.7-1-4.7 1.3 2.2 3.4 2 3.8 0-1.3-4.2-3.3-8.3-6.5-10-2.7-2.4-6.7-2-8 3-.8 5.7 2 12.4 6.1 18 .9 2.1 2.1 5.7 1.6 8.9-2.2 1.3-4.4.7-6.3-1.2 0 0-6-4.5-6-5.6 1.6-10.2.3-11.4-.6-14.3-.6-3.9-2.5-5.2-4-7.8-1.5-1.6-3.5-1.6-4.5 0-2.7 4.6-1.4 14.5.5 19 1.4 4.1 3.5 6.7 2.5 6.7-.8 2.3-2.5 1.7-3.8-1a66.6 66.6 0 01-2.1-17.4c-.5-4.6-1.1-14.4-4.2-17-1.8-2.4-4.5-1.2-5.5 1a82.4 82.4 0 00.3 13.4c2 7.4 2.7 14 3.7 21.5.3 10.1-5.8 4.4-5.5-.7a45 45 0 00-.3-19.4c-1-2.6-2.1-3.2-4.6-2.8-1.9 0-6.8 5.3-8.2 14.3 0 0-1.2 4.6-1.7 8.7-.7 4.6-3.7 8-5.9-.6-1.8-6.3-3-21.6-6-18z"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        fill: "#fff",
                        d: "M99 194.2l-32 15.4c.3-7.3 15.1-20.4 25.3-20.5 6.5.1 4.9 2.5 6.6 5.1z"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        fill: "#fff",
                        d: "M93.3 204.2c-16.8 43.5 39.5 49.6 45.8 1.8.6-2 3-3.9 3.4-.7-1.3 43.3-43.6 46.2-50.8 32.6a41.9 41.9 0 01-2.5-14.6c-1-8.5-5.5-5.2-6.2 3.2-.7 4.7-.5 6-.5 10.5 2.2 34.2 56.7 19.5 65.6-8.7 4.7-15.6-.8-27.1 1.7-27.1 5.4 5.8 13 .8 14.7-1.2.7-1 2.5-1.7 3.7-.4 4.2 3 11.6 1.6 13.2-3.7.9-5.3 1.6-10.7 1.8-16.2-3.5 1-6 1.7-6.3 3.2l-.7 4.6c-.3 1.5-3.2 1.5-3.4-.4-1.3-6-6.7-6.7-10 2.5-2.1 1.8-6.1 2.2-6.5-.5.5-6.2-2-7-7-4.1l-4.8-36.2c2 0 4 1.5 5.9-.9-2-6.5-6.5-19.7-9-20.7-1.1-1.4-2.1-.5-3.7-.1-2.6.8-5 3-4.2 7.4 3 18.8 5 33.1 8.1 52 .5 2.1-1.3 5-3.7 4.7-4-2.7-5-8.2-12-8-5 0-10.6 5.5-11.3 10.7-.9 4.2-1.2 8.7 0 12.3 3.5 4.2 7.7 3.8 11.4 2.9 3-1.3 5.5-4.3 6.6-3.6.7.9.1 10.9-14.3 18.5-8.7 4-15.7 4.8-19.4-2.3-2.3-4.5.2-21.4-5.6-17.5z"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        fill: "#fff",
                        d: "M165 160c3.3-1.2 19.3-19.6 19.3-19.6l-2.4-2c-.9-.7-.8-1.5 0-2.2 4-2.4 2.7-7.4.7-9.8a9.7 9.7 0 00-8.7.1c-2.8 2.7-3.4 7-1.2 9.6 2.1 1 4.2 3.2 2.8 4.4-6.6 7-24.5 19.1-22.4 19.5.4.6 11.5.6 11.8 0zm-97 65c-6 9.6-6.5 23.9-3.2 28.2 1.8 2 4.7 2.9 6.8 2.2 3.8-1.6 5.5-9.3 4.6-12-1.3-2-2.3-2.3-3.6-.7-2.6 5.4-3.7 1.7-4-1.3a70 70 0 01.8-15.2c.7-4.2 0-3-1.4-1.2zm257.1-15.3c-5.8-12.6-13.9-25-16.4-29.7a557.6 557.6 0 00-24.8-36c-6.2-7.4 10.2 3.1-2-11.7l-8.9-7.5c-2-1.4-6.8-4-7.6.2-.4 3.8-.2 5.8.4 8.9.5 2 3.5 5.5 5 7.5a565 565 0 0153.8 86.5c2.6-1.3 2-16.1.5-18.2z"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        fill: "#fff",
                        d: "M299.6 251.5c-1.2 1.3 2.8 6.8 8 6.8 8.6-1 16.2-5.8 23.2-18.6a33 33 0 005.3-14.2 317 317 0 00-5.8-72.4c-.3-2 0-4.4.2-5 .6-.7 2.5 0 3.5-1.7 1.5-1.5-4-14-7-18.7-1-2.2-1.5-3.6-3.3.2a27 27 0 00-3 13.6c4.1 28.5 5.4 53.4 8 81.9.3 2.8-.1 6.8-2 8.4a80.2 80.2 0 01-27.1 19.7zm116.5-.1c-6.2 3.6-6.2 7.7-1.2 7.8 8.6-1 18.8-1.7 25.8-12.3a41 41 0 004.2-16 303 303 0 00-4.7-71.4c-.2-2-1.1-6.7-.8-7.3.6-1.4 3.4.1 4.4-1.5 1.4-1.5-7.3-12.7-10.4-17.5-1-2.2-1.4-3.6-3.3.2a22.3 22.3 0 00-1.8 13.6c4.6 31 8 54.2 8.7 81.6-.4 2.6-.5 4-1.7 7.3-2.7 3.4-5.7 7.8-8.5 9.9-2.8 2-8.8 4-10.7 5.6z"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        fill: "#fff",
                        d: "M420.7 223.7c0-7.3.1-13.5-.1-19a34 34 0 00-3-13.5c-1.8-4.1-.7-7.4-1.6-11.8-.8-4.4-.6-11-1.8-16.1-.4-2-1.4-8.5-1.1-9.2.5-1.4 2.4 0 3.4-1.6 1.4-1.5-5-18-8.2-22.7-1.1-2.1-3.3-1.4-5.8 2-2.5 2.3-1.6 7.4-.6 12.3 6.1 32.3 10.8 61.6 9.8 92.3-.4 2.6 9-7.8 9-12.7zm-45.7-40c-3.9-.2-12-7.7-14.4-12a8 8 0 01.4-6.5c1.5-1 3.7-2 5.4-1 0 0 1.7 2.4 1.4 2.7 2 1 3 .5 3.2-.4.1-1.5-.6-2.4-.6-4 .9-4.6 6-5.3 8-2.4 1.4 1.8 2 5.5 2.1 8 0 1.3-2-.2-3.3 0-1.1.4-1.4 1.8-1.5 3-.2 3.3-.6 8.6-.7 12.5zm-71.8 48c1-9.8-.4-27.3-.5-33.1A477 477 0 00299 154c-1.2-8.4 3.4.9 2.8-4-1.5-8.3-6.1-14-11.6-21.5-1.7-2.5-1.7-3-4.4.6-3 6.7-.4 11.4.4 16.7 3.9 17.2 6.2 33 7.3 48.7a393.4 393.4 0 01.4 49c3 .1 7.6-4.7 9.3-11.8z"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        fill: "#fff",
                        d: "M434 216c-6.9-11.6-17.2-24-20-28.7a658 658 0 00-29.2-37.8c-8.5-9 4-1.5-1.6-8.5-4.7-5.1-6-6.8-10.1-9.9-2-1.3-3.2-3.8-4 .5a83 83 0 00-.2 11.2c0 1.7 1.8 5 3.4 7 20.7 25.5 43.4 51.5 61.6 84.2 2.6-1.3 1.7-16 0-18z"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        fill: "#1ba400",
                        d: "M122.6 194.7c-.5.9-1.6 2-1.2 3.1.7 1 1.4 1.3 2.6 1.3 1.1 0 2.7.3 3-.3.6-.7 1-2 .6-3.3-1.2-3-4.4-1.8-5-.8z"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        fill: "#fff",
                        d: "M354.2 362.5c9.2.4 15.2.5 23.3 1.4l9.6-1c10.6-1 11 15.1 11 15.1 0 9.5-3.7 10-8.4 11-2.7.4-4-1.6-5.5-3.6a14 14 0 01-7 .4c-3.9-.2-7.7-.2-11.5-.5-4-.3-6.2.5-10.3.1-.8 1.3-2 3.1-4.4 2.6-2-.3-4.5-6-3.8-10.5 1.5-3.2 1-2.1 1-3.5-37.6-1-75.5-2.7-112.3-2.2-28.8.1-57.2 1.3-85.7 2.5-15.2-.2-26.8-2.6-34.8-14.3.8 0 38.8 2.1 49.9 1.4 20.5-.2 39.3-1.9 60.2-2.5 41.2.7 82.1.7 123.3 3.6-4-2.7-4-9 2-10.6.5-.4.8 3.1 1.7 3 4.9-.3 2.7 6.3 1.7 7.6zM188.6 135.3c-6.2 17.8 3.6 37.4 10.4 35.5 5 2 8-7.4 10-17.6 1.5-2.9 2.5-3.2 3.2-1.7-.2 13.6 1 16.7 4.5 20.8 7.8 6 14.3.8 14.8.3l6-6.1c1.4-1.5 3.2-1.5 5.1-.3 1.9 1.7 1.6 4.6 5.6 6.6 3.4 1.4 10.5.4 12.2-2.5 2.2-3.9 2.8-5.2 3.8-6.6 1.6-2.1 4.3-1.2 4.3-.5-.3 1.2-1.9 2.3-.8 4.5 2 1.4 2.4.5 3.5.2 4-2 7-10.6 7-10.6.1-3.2-1.7-3-2.9-2.2l-3.1 2.1c-2 .3-5.7 1.6-7.6-1.3-1.9-3.4-1.9-8.3-3.3-11.8 0-.2-2.6-5.5-.2-5.8 1.2.2 3.7.9 4.1-1.2 1.2-2.1-2.6-8-5.3-11-2.3-2.5-5.5-2.8-8.6-.2-2.2 2-1.9 4.2-2.3 6.3a9.8 9.8 0 002 8.7c2.2 4.2 6.1 9.7 4.8 17.5 0 0-2.3 3.6-6.3 3.1-1.7-.3-4.4-1-5.8-11.8-1.1-8 .2-19.4-3.2-24.7-1.3-3.3-2.2-6.4-5.2-.9-.8 2.2-4.3 5.5-1.8 12.2a36 36 0 012 19c-1.5 2.2-1.8 2.9-3.7 5-2.6 3-5.5 2.2-7.7 1.1-2-1.3-3.6-2-4.6-6.5.2-7 .6-18.5-.7-20.9-1.9-3.8-5-2.4-6.3-1.2a47.7 47.7 0 00-11.5 23.5c-1.8 5.8-3.7 4.1-5 1.8-3.2-3-3.5-26.7-7.4-22.8z"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        fill: "#fff",
                        d: "M207.4 174.1c2.9-2 1.6-3.4 5.8.8a72 72 0 019.2 31.3c-.2 2.6 1.6 4.2 2.5 3.6.4-6 15.1-14.4 28.6-15.6 2-.5 1-4.4 1.3-6.4-.8-7.5 4.2-14.3 11.2-14.8 9.6 1.4 12.8 6.5 13 14.2-1.1 15-16.7 17.5-25.4 18.7-1.3.5-1.9 1.1 0 1.8l36.6.2 1.9 1c.2 1-.6.2-2 2.6a29.5 29.5 0 00-3.7 11.5c-10.9 3.6-22.2 5-33.6 6.5-4 2-6 4.7-5.2 7.7 1.4 3.3 10.2 6.7 10.2 6.8 1.7 1 3.6 3.5-.5 8.6-17.8-.8-31.7-8.4-36.5-19.1-1.4-1.1-3 0-4 1.4-7 9-13.8 17-25.7 21.4-7 1.8-14.3-1.1-17.7-5.7-2.3-2.7-2.2-5.6-3-6.2-3.9 1.7-36.9 15.7-32.7 9.1 8-8.5 22-14.9 34.2-23.3.9-2.9 2.5-12.5 7.3-15.6.3 0-.7 5.6-.6 8 0 2-.2 2.7.2 2.2.9-.5 15.7-12.2 17-15.8 1.4-2 .3-7.2.3-7.4-2.8-7.2-6.7-7.8-8.1-11.4-1.3-4.7-.7-10.1 2-11.7 2.4-2.1 5.2-1.9 7.9.5 3 2.7 5.6 8 6.4 11.9-.5 1.5-4-1-5-.3a16 16 0 013.7 7.8c2 8.2 1.4 11.4-.6 16.7-6.6 13.9-15 18-22.4 23.2-.2 0-.3 3.5 2.4 5.4 1 1 4.9 1.5 9.4 0a54.5 54.5 0 0022.3-23.3 51 51 0 00-2.4-22.2c-2.9-6.7-6.3-16.2-6.3-16.4-.1-4.2.2-5.6 2-7.7zm-95.8-38.6c4.2 2 12.2 1.1 11.8-5.7l-.2-3.1c-.8-2-3.2-1.5-3.7.5-.2.7.3 1.8-.3 2.1-.4.4-1.7.2-1.7-1.7 0-.6-.4-1.2-.7-1.6-.2-.2-.4-.2-.9-.2-.6 0-.6.1-.9.6-.1.5-.3 1-.3 1.6 0 .7-.4.9-.8 1-.6 0-.5 0-1-.2-.2-.3-.5-.4-.5-1l-.3-1.6c-.2-.3-.6-.5-1-.6-2.3 0-2.5 2.7-2.3 3.7-.2.2-.3 4.9 2.8 6.2z"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        fill: "#fff",
                        d: "M235.1 187.7c4.2 2 14.3.9 11.8-5.6l-.2-3.2c-.9-2-3.2-1.5-3.7.6-.2.6.3 1.7-.4 2-.3.4-1.7.2-1.6-1.6 0-.6-.4-1.3-.7-1.7-.3-.1-.4-.2-1-.2-.5 0-.5.2-.8.7-.2.5-.3 1-.3 1.6-.1.6-.4.8-.9 1-.5 0-.4 0-.8-.3-.3-.3-.6-.4-.6-.9l-.3-1.6c-.2-.3-.6-.5-1-.6-2.3 0-2.5 2.6-2.4 3.6-.1.2-.2 5 3 6.2zm72-21.6c4.2 2 12.1 1.1 11.8-5.6l-.2-3.2c-.9-2-3.2-1.5-3.7.5-.2.7.3 1.8-.4 2.2-.3.3-1.7.1-1.6-1.8 0-.6-.4-1.2-.7-1.6-.3-.2-.4-.2-1-.2-.5 0-.5.2-.8.7l-.3 1.5c-.1.7-.4 1-.9 1s-.4 0-.8-.2c-.3-.3-.6-.4-.6-.9s-.1-1.3-.3-1.7c-.2-.3-.6-.4-1-.5-2.3 0-2.5 2.6-2.4 3.6-.1.2-.2 4.9 3 6.2zm37.3 54.3c-7.3 8.3-4.1 22-2.4 25 2.4 4.8 4.3 7.9 9 10.3 4.3 3.1 7.7 1.2 9.5-1 4.3-4.5 4.4-16 6.4-18.2 1.4-4.2 5-3.5 6.7-1.6a16.5 16.5 0 006.2 5.3c4 3.5 8.8 4.2 13.6 1 3.2-1.9 5.3-4.2 7.2-8.9 2-5.6 1-31.6.5-47l-4.2-21.5c0-.2-.5-10.2-1-12.5 0-1-.3-1.3.7-1.2 1.1 1 1.2 1 2 1.3 1 .2 2-1.7 1.3-3.3l-10-18.6c-.8-.8-1.9-1.6-3.2.2a7.3 7.3 0 00-2.4 5.5c.3 4.4 1 8.9 1.3 13.3l4 22.6c1.3 16 1.6 29.2 2.9 45.3-.2 6.8-2.3 12.7-4.3 13.6 0 0-3 1.7-5-.2-1.5-.6-7.4-9.9-7.4-9.9-3-2.7-5-2-7.1 0-6 5.8-8.6 16.4-12.7 23.8-1 1.7-4 3-7.2-.1-8.2-11.3-3.4-27.3-4.4-23.2zM309 126.7c3.8 1.5 6.4 9.2 5.6 13-.8 4.5-2.8 9.5-4.2 8.9-1.6-.6 1-4.6-.5-8.8-.8-2.8-6-7.8-5.4-9.2-1-3.1 2.2-4.5 4.5-4z"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        fill: "#fff",
                        d: "M356.6 225c.7-9.2-.6-14.8-.8-20.2s-6.1-46.6-7.3-50.6c-1.5-7.8 5.7-1 4.9-5.6-2.5-5.6-8.6-13.9-10.5-18.8-1.2-2-.7-4-3.3-.5a42.3 42.3 0 00-2.3 19.2c6.2 32.3 12.5 59.1 11.5 89.8 3 0 6.3-6.7 7.8-13.3zm64.4-85.3c3.5 1.7 5.5 11.3 5.1 14-.7 5-2.5 10.4-3.8 9.7-1.5-.6.3-7.4-.4-9.5-.8-3-5.5-8.4-5-10-1-3.4 2-4.8 4.1-4.2zm-255.7 67.9c3.3 1.3 5.3 8.3 5 10.3-.8 3.7-2.5 7.7-3.8 7.1-1.3-.4.3-5.4-.3-7-.3-3.7-4.9-5.7-4.8-7.3-.8-3 2-3.5 4-3.1z"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        fill: "#1b9d00",
                        d: "M244.9 218.2c4.2.2 6.3 3.6 2.4 5-4 1.3-7.7 2.4-7.8 8 1.5 8-2 5.2-4 4.2-2.4-1.8-9.2-6-10.2-15-.1-2.1 1.6-4 4.3-4 4 1.1 10 1.2 15.3 1.8z"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        fill: "#fff",
                        d: "M77.4 124.4c4.8 1.4 5.1 8.6 4.8 10.7-.7 3.8-2.4 7.9-3.6 7.4-1.4-.5 0-5.7-.7-7.3-.7-2.2-4.8-6.4-4.4-7.6-.9-2.5 2-3.7 3.9-3.2zm95.9 33.6c-3.8 2-5.2 8-2.9 11.6 2.2 3 5.6 1.9 6 1.9 3.7.4 5.9-6.9 5.9-6.9s.1-2-4.2 1.9c-1.9.3-2-.4-2.5-1.4a9 9 0 01.5-5.7c.7-1.8-.7-2.6-2.8-1.4zm28-36.4c-2 1.3-5.7 5.2-5.8 9.6-.1 2.5-.6 2.5 1 4 1.3 1.8 2.4 1.7 4.8.4a5.1 5.1 0 002.3-3.4c.6-2.8-3 1.4-3.4-1.8-.8-3 1.5-4.2 3.7-7 0-2 0-3.3-2.7-1.8zm22.4 4a59.5 59.5 0 00-1.6 11.1c-.6 2.8 3 4 4.5.4 2.4-6.5 2.4-9.3 2.6-12-.7-4.3-3.6-4.2-5.5.5zm142 72.3c.4-.5 20-14.4 20-14.4 2-.7 1.5 7.2.6 7.1a77.8 77.8 0 01-20.7 14.3c-1 .7-1.9-5.3 0-7zm17.7-.2c3.5 1.7 4.9 11.8 4.5 14.5 0 5.4-3.3 9.6-4.7 9-1.4-.7.2-6.7-.5-8.8-.8-3-3.7-8.5-3.2-10.1-1-3.4 1.8-5.2 4-4.6zm-116 43.4a26 26 0 015.6-4.9c2-1 3.8.8 3.7.7.3 2-1.2 3.7-.7 6.3.4 1 .7 2.2 2.6 1.8 3.1-2.5 6-2.7 9-2.8 2.5.1 2.6 4.2 1 4.2-5.7 1.2-8.2 2.8-12.3 4.3-2 1.2-3.6-.3-3.6-.4s-1.1-1.1-.4-3.7c.2-2-.6-3.2-2.4-3-1.2.8-2.4 1.2-3-.3-.3-1-.4-1.6.5-2.2zm136.6 5.4c.8 1 1.4 2-.1 3.8l-3.7 3.2c-.6 1-1 2.8 1 3.3 3.6 1 12-4.5 12-4.6 1.4-1 1-3 .8-3-.8-.9-2.6-.3-3.8-.5-.6 0-2.5-.2-1.6-2a11.4 11.4 0 001.6-2.9c.5-1.2 0-2-2-2.7-2.1-.4-3-.2-5.3 0-1.2.2-1.6.8-1.9 2.3.1 2.3 1.5 2.2 3 3z"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        fill: "#259f00",
                        d: "M268.1 189.7c-.5 1-2.3 1-4 0s-2.7-2.6-2.1-3.5 2.3-.9 4 0 2.6 2.6 2.1 3.5zm-89-53.6c-1 .3-2.4-.6-3-2s-.3-2.6.7-2.9 2.3.7 3 2 .3 2.7-.8 3z"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        fill: "#209000",
                        d: "M355.2 375c9.4.4 18.2 0 27.5.5 1.7 1.5.5 5-.6 4.8l-7.8-.3c-.1-3-7.7-2.5-7.5.1-4.1.5-7.8-.1-12-.3-1.2-1.5-1-4.2.4-4.8z"
                    })
                ]
            })
        ]
    }));
};

;// CONCATENATED MODULE: ./src/components/icons/flags/CNFlag.tsx

const CNFlag = ({ width ='640px' , height ='480px'  })=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 640 480",
        width: width,
        height: height,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("defs", {
                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    id: "a",
                    fill: "#ffde00",
                    d: "M-.6.8L0-1 .6.8-1-.3h2z"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#de2910",
                d: "M0 0h640v480H0z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("use", {
                width: "30",
                height: "20",
                transform: "matrix(71.9991 0 0 72 120 120)",
                xlinkHref: "#a"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("use", {
                width: "30",
                height: "20",
                transform: "matrix(-12.33562 -20.5871 20.58684 -12.33577 240.3 48)",
                xlinkHref: "#a"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("use", {
                width: "30",
                height: "20",
                transform: "matrix(-3.38573 -23.75998 23.75968 -3.38578 288 95.8)",
                xlinkHref: "#a"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("use", {
                width: "30",
                height: "20",
                transform: "matrix(6.5991 -23.0749 23.0746 6.59919 288 168)",
                xlinkHref: "#a"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("use", {
                width: "30",
                height: "20",
                transform: "matrix(14.9991 -18.73557 18.73533 14.99929 240 216)",
                xlinkHref: "#a"
            })
        ]
    }));
};

;// CONCATENATED MODULE: ./src/components/icons/flags/USFlag.tsx

const USFlag = ({ width ='640px' , height ='480px'  })=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        id: "flag-icon-css-us",
        viewBox: "0 0 640 480",
        width: width,
        height: height,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("g", {
            fillRule: "evenodd",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("g", {
                    strokeWidth: "1pt",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            fill: "#bd3d44",
                            d: "M0 0h972.8v39.4H0zm0 78.8h972.8v39.4H0zm0 78.7h972.8V197H0zm0 78.8h972.8v39.4H0zm0 78.8h972.8v39.4H0zm0 78.7h972.8v39.4H0zm0 78.8h972.8V512H0z",
                            transform: "scale(.9375)"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            fill: "#fff",
                            d: "M0 39.4h972.8v39.4H0zm0 78.8h972.8v39.3H0zm0 78.7h972.8v39.4H0zm0 78.8h972.8v39.4H0zm0 78.8h972.8v39.4H0zm0 78.7h972.8v39.4H0z",
                            transform: "scale(.9375)"
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    fill: "#192f5d",
                    d: "M0 0h389.1v275.7H0z",
                    transform: "scale(.9375)"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    fill: "#fff",
                    d: "M32.4 11.8L36 22.7h11.4l-9.2 6.7 3.5 11-9.3-6.8-9.2 6.7 3.5-10.9-9.3-6.7H29zm64.9 0l3.5 10.9h11.5l-9.3 6.7 3.5 11-9.2-6.8-9.3 6.7 3.5-10.9-9.2-6.7h11.4zm64.8 0l3.6 10.9H177l-9.2 6.7 3.5 11-9.3-6.8-9.2 6.7 3.5-10.9-9.3-6.7h11.5zm64.9 0l3.5 10.9H242l-9.3 6.7 3.6 11-9.3-6.8-9.3 6.7 3.6-10.9-9.3-6.7h11.4zm64.8 0l3.6 10.9h11.4l-9.2 6.7 3.5 11-9.3-6.8-9.2 6.7 3.5-10.9-9.2-6.7h11.4zm64.9 0l3.5 10.9h11.5l-9.3 6.7 3.6 11-9.3-6.8-9.3 6.7 3.6-10.9-9.3-6.7h11.5zM64.9 39.4l3.5 10.9h11.5L70.6 57 74 67.9l-9-6.7-9.3 6.7L59 57l-9-6.7h11.4zm64.8 0l3.6 10.9h11.4l-9.3 6.7 3.6 10.9-9.3-6.7-9.3 6.7L124 57l-9.3-6.7h11.5zm64.9 0l3.5 10.9h11.5l-9.3 6.7 3.5 10.9-9.2-6.7-9.3 6.7 3.5-10.9-9.2-6.7H191zm64.8 0l3.6 10.9h11.4l-9.3 6.7 3.6 10.9-9.3-6.7-9.2 6.7 3.5-10.9-9.3-6.7H256zm64.9 0l3.5 10.9h11.5L330 57l3.5 10.9-9.2-6.7-9.3 6.7 3.5-10.9-9.2-6.7h11.4zM32.4 66.9L36 78h11.4l-9.2 6.7 3.5 10.9-9.3-6.8-9.2 6.8 3.5-11-9.3-6.7H29zm64.9 0l3.5 11h11.5l-9.3 6.7 3.5 10.9-9.2-6.8-9.3 6.8 3.5-11-9.2-6.7h11.4zm64.8 0l3.6 11H177l-9.2 6.7 3.5 10.9-9.3-6.8-9.2 6.8 3.5-11-9.3-6.7h11.5zm64.9 0l3.5 11H242l-9.3 6.7 3.6 10.9-9.3-6.8-9.3 6.8 3.6-11-9.3-6.7h11.4zm64.8 0l3.6 11h11.4l-9.2 6.7 3.5 10.9-9.3-6.8-9.2 6.8 3.5-11-9.2-6.7h11.4zm64.9 0l3.5 11h11.5l-9.3 6.7 3.6 10.9-9.3-6.8-9.3 6.8 3.6-11-9.3-6.7h11.5zM64.9 94.5l3.5 10.9h11.5l-9.3 6.7 3.5 11-9.2-6.8-9.3 6.7 3.5-10.9-9.2-6.7h11.4zm64.8 0l3.6 10.9h11.4l-9.3 6.7 3.6 11-9.3-6.8-9.3 6.7 3.6-10.9-9.3-6.7h11.5zm64.9 0l3.5 10.9h11.5l-9.3 6.7 3.5 11-9.2-6.8-9.3 6.7 3.5-10.9-9.2-6.7H191zm64.8 0l3.6 10.9h11.4l-9.2 6.7 3.5 11-9.3-6.8-9.2 6.7 3.5-10.9-9.3-6.7H256zm64.9 0l3.5 10.9h11.5l-9.3 6.7 3.5 11-9.2-6.8-9.3 6.7 3.5-10.9-9.2-6.7h11.4zM32.4 122.1L36 133h11.4l-9.2 6.7 3.5 11-9.3-6.8-9.2 6.7 3.5-10.9-9.3-6.7H29zm64.9 0l3.5 10.9h11.5l-9.3 6.7 3.5 10.9-9.2-6.7-9.3 6.7 3.5-10.9-9.2-6.7h11.4zm64.8 0l3.6 10.9H177l-9.2 6.7 3.5 11-9.3-6.8-9.2 6.7 3.5-10.9-9.3-6.7h11.5zm64.9 0l3.5 10.9H242l-9.3 6.7 3.6 11-9.3-6.8-9.3 6.7 3.6-10.9-9.3-6.7h11.4zm64.8 0l3.6 10.9h11.4l-9.2 6.7 3.5 11-9.3-6.8-9.2 6.7 3.5-10.9-9.2-6.7h11.4zm64.9 0l3.5 10.9h11.5l-9.3 6.7 3.6 11-9.3-6.8-9.3 6.7 3.6-10.9-9.3-6.7h11.5zM64.9 149.7l3.5 10.9h11.5l-9.3 6.7 3.5 10.9-9.2-6.8-9.3 6.8 3.5-11-9.2-6.7h11.4zm64.8 0l3.6 10.9h11.4l-9.3 6.7 3.6 10.9-9.3-6.8-9.3 6.8 3.6-11-9.3-6.7h11.5zm64.9 0l3.5 10.9h11.5l-9.3 6.7 3.5 10.9-9.2-6.8-9.3 6.8 3.5-11-9.2-6.7H191zm64.8 0l3.6 10.9h11.4l-9.2 6.7 3.5 10.9-9.3-6.8-9.2 6.8 3.5-11-9.3-6.7H256zm64.9 0l3.5 10.9h11.5l-9.3 6.7 3.5 10.9-9.2-6.8-9.3 6.8 3.5-11-9.2-6.7h11.4zM32.4 177.2l3.6 11h11.4l-9.2 6.7 3.5 10.8-9.3-6.7-9.2 6.7 3.5-10.9-9.3-6.7H29zm64.9 0l3.5 11h11.5l-9.3 6.7 3.6 10.8-9.3-6.7-9.3 6.7 3.6-10.9-9.3-6.7h11.4zm64.8 0l3.6 11H177l-9.2 6.7 3.5 10.8-9.3-6.7-9.2 6.7 3.5-10.9-9.3-6.7h11.5zm64.9 0l3.5 11H242l-9.3 6.7 3.6 10.8-9.3-6.7-9.3 6.7 3.6-10.9-9.3-6.7h11.4zm64.8 0l3.6 11h11.4l-9.2 6.7 3.5 10.8-9.3-6.7-9.2 6.7 3.5-10.9-9.2-6.7h11.4zm64.9 0l3.5 11h11.5l-9.3 6.7 3.6 10.8-9.3-6.7-9.3 6.7 3.6-10.9-9.3-6.7h11.5zM64.9 204.8l3.5 10.9h11.5l-9.3 6.7 3.5 11-9.2-6.8-9.3 6.7 3.5-10.9-9.2-6.7h11.4zm64.8 0l3.6 10.9h11.4l-9.3 6.7 3.6 11-9.3-6.8-9.3 6.7 3.6-10.9-9.3-6.7h11.5zm64.9 0l3.5 10.9h11.5l-9.3 6.7 3.5 11-9.2-6.8-9.3 6.7 3.5-10.9-9.2-6.7H191zm64.8 0l3.6 10.9h11.4l-9.2 6.7 3.5 11-9.3-6.8-9.2 6.7 3.5-10.9-9.3-6.7H256zm64.9 0l3.5 10.9h11.5l-9.3 6.7 3.5 11-9.2-6.8-9.3 6.7 3.5-10.9-9.2-6.7h11.4zM32.4 232.4l3.6 10.9h11.4l-9.2 6.7 3.5 10.9-9.3-6.7-9.2 6.7 3.5-11-9.3-6.7H29zm64.9 0l3.5 10.9h11.5L103 250l3.6 10.9-9.3-6.7-9.3 6.7 3.6-11-9.3-6.7h11.4zm64.8 0l3.6 10.9H177l-9 6.7 3.5 10.9-9.3-6.7-9.2 6.7 3.5-11-9.3-6.7h11.5zm64.9 0l3.5 10.9H242l-9.3 6.7 3.6 10.9-9.3-6.7-9.3 6.7 3.6-11-9.3-6.7h11.4zm64.8 0l3.6 10.9h11.4l-9.2 6.7 3.5 10.9-9.3-6.7-9.2 6.7 3.5-11-9.2-6.7h11.4zm64.9 0l3.5 10.9h11.5l-9.3 6.7 3.6 10.9-9.3-6.7-9.3 6.7 3.6-11-9.3-6.7h11.5z",
                    transform: "scale(.9375)"
                })
            ]
        })
    }));
};

;// CONCATENATED MODULE: ./src/components/icons/flags/DEFlag.tsx

const DEFlag = ({ width ='640px' , height ='480px'  })=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 640 480",
        width: width,
        height: height,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#ffce00",
                d: "M0 320h640v160H0z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M0 0h640v160H0z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#d00",
                d: "M0 160h640v160H0z"
            })
        ]
    }));
};

;// CONCATENATED MODULE: ./src/components/icons/flags/ILFlag.tsx

const ILFlag = ({ width ='640px' , height ='480px'  })=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 640 480",
        width: width,
        height: height,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("defs", {
                children: /*#__PURE__*/ jsx_runtime_.jsx("clipPath", {
                    id: "il-a",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        fillOpacity: ".7",
                        d: "M-87.6 0H595v512H-87.6z"
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("g", {
                fillRule: "evenodd",
                clipPath: "url(#il-a)",
                transform: "translate(82.1) scale(.94)",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        fill: "#fff",
                        d: "M619.4 512H-112V0h731.4z"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        fill: "#00c",
                        d: "M619.4 115.2H-112V48h731.4zm0 350.5H-112v-67.2h731.4zm-483-275l110.1 191.6L359 191.6l-222.6-.8z"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        fill: "#fff",
                        d: "M225.8 317.8l20.9 35.5 21.4-35.3-42.4-.2z"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        fill: "#00c",
                        d: "M136 320.6L246.2 129l112.4 190.8-222.6.8z"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        fill: "#fff",
                        d: "M225.8 191.6l20.9-35.5 21.4 35.4-42.4.1zM182 271.1l-21.7 36 41-.1-19.3-36zm-21.3-66.5l41.2.3-19.8 36.3-21.4-36.6zm151.2 67l20.9 35.5-41.7-.5 20.8-35zm20.5-67l-41.2.3 19.8 36.3 21.4-36.6zm-114.3 0L189.7 256l28.8 50.3 52.8 1.2 32-51.5-29.6-52-55.6.5z"
                    })
                ]
            })
        ]
    }));
};

;// CONCATENATED MODULE: ./src/components/icons/flags/ESFlag.tsx

const ESFlag = ({ width ='640px' , height ='480px'  })=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        id: "flag-icon-css-es",
        viewBox: "0 0 640 480",
        width: width,
        height: height,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#AA151B",
                d: "M0 0h640v480H0z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#F1BF00",
                d: "M0 120h640v240H0z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#ad1519",
                d: "M127.3 213.3l-.8-.1-1-1-.7-.4-.6-.8s-.7-1.1-.4-2c.3-.9.9-1.2 1.4-1.5a12 12 0 011.5-.5l1-.4 1.3-.3.5-.3c.2 0 .7 0 1-.2l1-.2 1.6.1h4.8c.4 0 1.2.3 1.4.4a35 35 0 002 .7c.5.1 1.6.3 2.2.6.5.3.9.7 1.1 1l.5 1v1.1l-.5.8-.6 1-.8.6s-.5.5-1 .4c-.4 0-4.8-.8-7.6-.8s-7.3.9-7.3.9"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeLinejoin: "round",
                strokeWidth: ".3",
                d: "M127.3 213.3l-.8-.1-1-1-.7-.4-.6-.8s-.7-1.1-.4-2c.3-.9.9-1.2 1.4-1.5a12 12 0 011.5-.5l1-.4 1.3-.3.5-.3c.2 0 .7 0 1-.2l1-.2 1.6.1h4.8c.4 0 1.2.3 1.4.4a35 35 0 002 .7c.5.1 1.6.3 2.2.6.5.3.9.7 1.1 1l.5 1v1.1l-.5.8-.6 1-.8.6s-.5.5-1 .4c-.4 0-4.8-.8-7.6-.8s-7.3.9-7.3.9z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#c8b100",
                d: "M133.3 207c0-1.3.6-2.3 1.3-2.3.8 0 1.4 1 1.4 2.4 0 1.3-.6 2.4-1.4 2.4s-1.3-1.1-1.3-2.5"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".3",
                d: "M133.3 207c0-1.3.6-2.3 1.3-2.3.8 0 1.4 1 1.4 2.4 0 1.3-.6 2.4-1.4 2.4s-1.3-1.1-1.3-2.5z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#c8b100",
                d: "M134 207c0-1.2.3-2.1.7-2.1.3 0 .6 1 .6 2.1 0 1.3-.3 2.2-.6 2.2-.4 0-.6-1-.6-2.2"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".3",
                d: "M134 207c0-1.2.3-2.1.7-2.1.3 0 .6 1 .6 2.1 0 1.3-.3 2.2-.6 2.2-.4 0-.6-1-.6-2.2z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#c8b100",
                d: "M133.8 204.5c0-.4.4-.8.8-.8s1 .4 1 .8c0 .5-.5.9-1 .9s-.8-.4-.8-.9"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#c8b100",
                d: "M135.3 204.2v.6h-1.4v-.6h.5V203h-.7v-.6h.7v-.5h.5v.5h.6v.6h-.6v1.2h.4"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".3",
                d: "M135.3 204.2v.6h-1.4v-.6h.5V203h-.7v-.6h.7v-.5h.5v.5h.6v.6h-.6v1.2h.4"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#c8b100",
                d: "M135.9 204.2v.6h-2.5v-.6h1V203h-.7v-.6h.7v-.5h.5v.5h.6v.6h-.6v1.2h1"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".3",
                d: "M135.9 204.2v.6h-2.5v-.6h1V203h-.7v-.6h.7v-.5h.5v.5h.6v.6h-.6v1.2h1"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".3",
                d: "M134.9 203.7c.4.1.6.4.6.8 0 .5-.4.9-.8.9s-1-.4-1-.9c0-.4.3-.7.7-.8"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#c8b100",
                d: "M134.7 213.2H130v-1.1l-.3-1.2-.2-1.5c-1.3-1.7-2.5-2.8-2.9-2.5.1-.3.2-.6.5-.7 1.1-.7 3.5 1 5.2 3.6l.5.7h3.8l.4-.7c1.8-2.7 4.1-4.3 5.2-3.6.3.1.4.4.5.7-.4-.3-1.6.8-2.9 2.5l-.2 1.5-.2 1.2-.1 1.1h-4.7"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".3",
                d: "M134.7 213.2H130v-1.1l-.3-1.2-.2-1.5c-1.3-1.7-2.5-2.8-2.9-2.5.1-.3.2-.6.5-.7 1.1-.7 3.5 1 5.2 3.6l.5.7h3.8l.4-.7c1.8-2.7 4.1-4.3 5.2-3.6.3.1.4.4.5.7-.4-.3-1.6.8-2.9 2.5l-.2 1.5-.2 1.2-.1 1.1h-4.7z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".3",
                d: "M126.8 206.8c1-.5 3 1.1 4.6 3.6m11-3.6c-.8-.5-2.8 1.1-4.5 3.6"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#c8b100",
                d: "M127.8 215.3l-.5-1a27.3 27.3 0 0114.7 0l-.5.8a5.7 5.7 0 00-.3.8 22.9 22.9 0 00-6.6-.8c-2.6 0-5.2.3-6.5.8l-.3-.6"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".3",
                d: "M127.8 215.3l-.5-1a27.3 27.3 0 0114.7 0l-.5.8a5.7 5.7 0 00-.3.8 22.9 22.9 0 00-6.6-.8c-2.6 0-5.2.3-6.5.8l-.3-.6"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#c8b100",
                d: "M134.6 217.7c2.4 0 5-.4 5.9-.6.6-.2 1-.5 1-.8 0-.2-.2-.3-.4-.4-1.4-.5-4-.8-6.5-.8s-5 .3-6.4.8c-.2 0-.3.2-.4.3 0 .4.3.7 1 .9 1 .2 3.5.6 5.8.6"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".3",
                d: "M134.6 217.7c2.4 0 5-.4 5.9-.6.6-.2 1-.5 1-.8 0-.2-.2-.3-.4-.4-1.4-.5-4-.8-6.5-.8s-5 .3-6.4.8c-.2 0-.3.2-.4.3 0 .4.3.7 1 .9 1 .2 3.5.6 5.8.6z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#c8b100",
                d: "M142.1 213.2l-.5-.5s-.6.3-1.3.2c-.6 0-.9-1-.9-1s-.7.7-1.3.7c-.7 0-1-.6-1-.6s-.7.5-1.3.4c-.6 0-1.2-.8-1.2-.8s-.6.8-1.2.8c-.6.1-1-.5-1-.5s-.4.6-1.1.7-1.4-.6-1.4-.6-.5.7-1 1c-.5 0-1.2-.4-1.2-.4l-.2.5-.3.1.2.5a27 27 0 017.2-.9c3 0 5.5.4 7.4 1l.2-.6"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".3",
                d: "M142.1 213.2l-.5-.5s-.6.3-1.3.2c-.6 0-.9-1-.9-1s-.7.7-1.3.7c-.7 0-1-.6-1-.6s-.7.5-1.3.4c-.6 0-1.2-.8-1.2-.8s-.6.8-1.2.8c-.6.1-1-.5-1-.5s-.4.6-1.1.7-1.4-.6-1.4-.6-.5.7-1 1c-.5 0-1.2-.4-1.2-.4l-.2.5-.3.1.2.5a27 27 0 017.2-.9c3 0 5.5.4 7.4 1l.2-.6z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#c8b100",
                d: "M134.7 210.7h.2a1 1 0 000 .4c0 .6.4 1 1 1a1 1 0 001-.7l.2-.3v.4c.1.5.6.8 1.1.8.6 0 1-.4 1-1v-.1l.4-.4.2.5a.9.9 0 00-.1.4 1 1 0 001 1c.4 0 .7-.2.9-.5l.2-.2v.3c0 .3.1.6.4.7 0 0 .4 0 1-.4l.7-.7v.4s-.5.8-1 1c-.2.2-.5.4-.8.3-.3 0-.6-.3-.7-.6-.2.2-.4.2-.7.2-.6 0-1.2-.3-1.4-.8-.3.3-.7.5-1.1.5a1.6 1.6 0 01-1.2-.6 1.6 1.6 0 01-1 .4 1.6 1.6 0 01-1.3-.6 1.6 1.6 0 01-2.4.2 1.6 1.6 0 01-1.2.6 1.5 1.5 0 01-1.1-.5c-.2.5-.8.8-1.4.8-.2 0-.5 0-.7-.2-.1.3-.4.6-.7.6-.3 0-.6 0-.9-.2l-1-1 .1-.5.8.7c.5.4.9.4.9.4.3 0 .4-.4.4-.7v-.3l.2.2c.2.3.5.5.9.5a1 1 0 001-1 .9.9 0 000-.4v-.5l.4.4a.7.7 0 000 .1c0 .6.5 1 1 1 .6 0 1-.3 1.1-.9v-.3l.2.3c.2.4.6.7 1 .7.7 0 1.1-.4 1.1-1a1 1 0 000-.3h.3"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".3",
                d: "M134.7 210.7h.2a1 1 0 000 .4c0 .6.4 1 1 1a1 1 0 001-.7l.2-.3v.4c.1.5.6.8 1.1.8.6 0 1-.4 1-1v-.1l.4-.4.2.5a.9.9 0 00-.1.4 1 1 0 001 1c.4 0 .7-.2.9-.5l.2-.2v.3c0 .3.1.6.4.7 0 0 .4 0 1-.4l.7-.7v.4s-.5.8-1 1c-.2.2-.5.4-.8.3-.3 0-.6-.3-.7-.6-.2.2-.4.2-.7.2-.6 0-1.2-.3-1.4-.8-.3.3-.7.5-1.1.5a1.6 1.6 0 01-1.2-.6 1.6 1.6 0 01-1 .4 1.6 1.6 0 01-1.3-.6 1.6 1.6 0 01-2.4.2 1.6 1.6 0 01-1.2.6 1.5 1.5 0 01-1.1-.5c-.2.5-.8.8-1.4.8-.2 0-.5 0-.7-.2-.1.3-.4.6-.7.6-.3 0-.6 0-.9-.2l-1-1 .1-.5.8.7c.5.4.9.4.9.4.3 0 .4-.4.4-.7v-.3l.2.2c.2.3.5.5.9.5a1 1 0 001-1 .9.9 0 000-.4v-.5l.4.4a.7.7 0 000 .1c0 .6.5 1 1 1 .6 0 1-.3 1.1-.9v-.3l.2.3c.2.4.6.7 1 .7.7 0 1.1-.4 1.1-1a1 1 0 000-.3h.3z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#c8b100",
                d: "M134.6 213.3c-2.9 0-5.5.4-7.3 1l-.3-.2.1-.3a27 27 0 017.5-1c3 0 5.7.4 7.6 1 0 0 .2.2.1.3l-.3.2a27.3 27.3 0 00-7.4-1"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeLinejoin: "round",
                strokeWidth: ".3",
                d: "M134.6 213.3c-2.9 0-5.5.4-7.3 1l-.3-.2.1-.3a27 27 0 017.5-1c3 0 5.7.4 7.6 1 0 0 .2.2.1.3l-.3.2a27.3 27.3 0 00-7.4-1z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#fff",
                d: "M131.8 214.4c0-.3.2-.4.5-.4a.4.4 0 01.4.4c0 .2-.2.4-.4.4a.4.4 0 01-.5-.4"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".3",
                d: "M131.8 214.4c0-.3.2-.4.5-.4a.4.4 0 01.4.4c0 .2-.2.4-.4.4a.4.4 0 01-.5-.4z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#ad1519",
                d: "M134.7 214.5h-1c-.1 0-.3 0-.3-.3l.3-.3h2a.3.3 0 01.2.3.3.3 0 01-.3.3h-1"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".3",
                d: "M134.7 214.5h-1c-.1 0-.3 0-.3-.3l.3-.3h2a.3.3 0 01.2.3.3.3 0 01-.3.3h-1"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#058e6e",
                d: "M130 214.9h-.7c-.1 0-.3 0-.3-.2a.3.3 0 01.2-.3l.7-.1.7-.1c.2 0 .3 0 .4.2a.3.3 0 01-.3.4h-.7"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".3",
                d: "M130 214.9h-.7c-.1 0-.3 0-.3-.2a.3.3 0 01.2-.3l.7-.1.7-.1c.2 0 .3 0 .4.2a.3.3 0 01-.3.4h-.7"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#ad1519",
                d: "M127.3 215.3l.3-.4h.7l-.4.6-.6-.2"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".3",
                d: "M127.3 215.3l.3-.4h.7l-.4.6-.6-.2"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#fff",
                d: "M136.6 214.4c0-.3.2-.4.4-.4a.4.4 0 01.5.4.4.4 0 01-.5.4.4.4 0 01-.4-.4"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".3",
                d: "M136.6 214.4c0-.3.2-.4.4-.4a.4.4 0 01.5.4.4.4 0 01-.5.4.4.4 0 01-.4-.4z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#058e6e",
                d: "M139.3 214.9h.6a.3.3 0 00.4-.2.3.3 0 00-.3-.3l-.6-.1-.7-.1c-.2 0-.3 0-.4.2 0 .2.1.3.3.4h.7"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".3",
                d: "M139.3 214.9h.6a.3.3 0 00.4-.2.3.3 0 00-.3-.3l-.6-.1-.7-.1c-.2 0-.3 0-.4.2 0 .2.1.3.3.4h.7"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#ad1519",
                d: "M142 215.4l-.3-.5h-.7l.3.6.6-.1"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".3",
                d: "M142 215.4l-.3-.5h-.7l.3.6.6-.1"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#ad1519",
                d: "M134.6 217.1a25 25 0 01-6-.6 25.5 25.5 0 0112.1 0c-1.6.4-3.7.6-6 .6"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeLinejoin: "round",
                strokeWidth: ".3",
                d: "M134.6 217.1a25 25 0 01-6-.6 25.5 25.5 0 0112.1 0c-1.6.4-3.7.6-6 .6z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#c8b100",
                d: "M142 212l-.1-.3c-.2 0-.3 0-.4.2 0 .2 0 .4.2.4 0 0 .2 0 .3-.3"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".3",
                d: "M142 212l-.1-.3c-.2 0-.3 0-.4.2 0 .2 0 .4.2.4 0 0 .2 0 .3-.3z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#c8b100",
                d: "M137.3 211.2c0-.2 0-.4-.2-.4 0 0-.2.1-.2.3 0 .2 0 .4.2.4l.3-.3"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".3",
                d: "M137.3 211.2c0-.2 0-.4-.2-.4 0 0-.2.1-.2.3 0 .2 0 .4.2.4l.3-.3z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#c8b100",
                d: "M132 211.2l.1-.4c.2 0 .3.1.3.3 0 .2 0 .4-.2.4l-.2-.3"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".3",
                d: "M132 211.2l.1-.4c.2 0 .3.1.3.3 0 .2 0 .4-.2.4l-.2-.3z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#c8b100",
                d: "M127.3 212l.1-.3c.2 0 .3 0 .4.2 0 .2 0 .4-.2.4 0 0-.2 0-.3-.3"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".3",
                d: "M127.3 212l.1-.3c.2 0 .3 0 .4.2 0 .2 0 .4-.2.4 0 0-.2 0-.3-.3z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#c8b100",
                d: "M134.6 208.5l-.8.5.6 1.3.2.1.2-.1.7-1.3-.9-.5"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".3",
                d: "M134.6 208.5l-.8.5.6 1.3.2.1.2-.1.7-1.3-.9-.5"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#c8b100",
                d: "M132.8 210.5l.4.5 1.3-.4.1-.2-.1-.2-1.3-.3-.4.6"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".3",
                d: "M132.8 210.5l.4.5 1.3-.4.1-.2-.1-.2-1.3-.3-.4.6"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#c8b100",
                d: "M136.4 210.5l-.3.5-1.3-.4-.2-.2.2-.2 1.3-.3.3.6"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".3",
                d: "M136.4 210.5l-.3.5-1.3-.4-.2-.2.2-.2 1.3-.3.3.6"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#c8b100",
                d: "M129.3 209l-.7.7.9 1 .2.1.1-.1.3-1.3-.8-.3"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".3",
                d: "M129.3 209l-.7.7.9 1 .2.1.1-.1.3-1.3-.8-.3"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#c8b100",
                d: "M128 211.2l.4.5 1.2-.6v-.2l-.1-.2-1.3-.1-.3.6"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".3",
                d: "M128 211.2l.4.5 1.2-.6v-.2l-.1-.2-1.3-.1-.3.6"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#c8b100",
                d: "M131.5 210.5l-.3.6H130l-.2-.2.1-.3 1.2-.6.5.5"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".3",
                d: "M131.5 210.5l-.3.6H130l-.2-.2.1-.3 1.2-.6.5.5"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#c8b100",
                d: "M126.6 211.4v.6l-1.4.2-.2-.1v-.2l1-.9.6.4"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".3",
                d: "M126.6 211.4v.6l-1.4.2-.2-.1v-.2l1-.9.6.4"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#c8b100",
                d: "M129.2 210.9c0-.3.2-.5.5-.5s.5.2.5.5a.5.5 0 01-.5.4.5.5 0 01-.5-.4"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".3",
                d: "M129.2 210.9c0-.3.2-.5.5-.5s.5.2.5.5a.5.5 0 01-.5.4.5.5 0 01-.5-.4z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#c8b100",
                d: "M140 209l.7.7-.9 1-.2.1-.1-.1-.3-1.3.8-.3"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".3",
                d: "M140 209l.7.7-.9 1-.2.1-.1-.1-.3-1.3.8-.3"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#c8b100",
                d: "M141.4 211.2l-.5.5-1.2-.6v-.2l.1-.2 1.3-.1.3.6"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".3",
                d: "M141.4 211.2l-.5.5-1.2-.6v-.2l.1-.2 1.3-.1.3.6"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#c8b100",
                d: "M137.8 210.5l.3.6h1.3l.2-.2-.1-.3-1.2-.6-.5.5"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".3",
                d: "M137.8 210.5l.3.6h1.3l.2-.2-.1-.3-1.2-.6-.5.5"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#c8b100",
                d: "M142.5 211.4l.1.6 1.3.2.2-.1v-.2l-1-.9-.6.4"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".3",
                d: "M142.5 211.4l.1.6 1.3.2.2-.1v-.2l-1-.9-.6.4"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#c8b100",
                d: "M134.2 210.4a.5.5 0 01.4-.4c.3 0 .5.2.5.4a.5.5 0 01-.5.5.5.5 0 01-.4-.5"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".3",
                d: "M134.2 210.4a.5.5 0 01.4-.4c.3 0 .5.2.5.4a.5.5 0 01-.5.5.5.5 0 01-.4-.5z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#c8b100",
                d: "M139.1 210.9c0-.3.3-.5.5-.5a.5.5 0 01.5.5.5.5 0 01-.5.4.5.5 0 01-.5-.4"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".3",
                d: "M139.1 210.9c0-.3.3-.5.5-.5a.5.5 0 01.5.5.5.5 0 01-.5.4.5.5 0 01-.5-.4z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#c8b100",
                d: "M124.8 212.2l-.6-.7c-.2-.2-.7-.3-.7-.3 0-.1.3-.3.6-.3a.5.5 0 01.4.2v-.2s.3 0 .4.3v1"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".3",
                d: "M124.8 212.2l-.6-.7c-.2-.2-.7-.3-.7-.3 0-.1.3-.3.6-.3a.5.5 0 01.4.2v-.2s.3 0 .4.3v1z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#c8b100",
                d: "M124.8 212c.1-.2.4-.2.5 0 .2.1.3.3.2.5l-.5-.1c-.2-.1-.3-.4-.2-.5"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".3",
                d: "M124.8 212c.1-.2.4-.2.5 0 .2.1.3.3.2.5l-.5-.1c-.2-.1-.3-.4-.2-.5z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#c8b100",
                d: "M144.3 212.2l.6-.7c.2-.2.7-.3.7-.3 0-.1-.3-.3-.6-.3a.6.6 0 00-.4.2v-.2s-.3 0-.4.3v.7l.1.3"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".3",
                d: "M144.3 212.2l.6-.7c.2-.2.7-.3.7-.3 0-.1-.3-.3-.6-.3a.6.6 0 00-.4.2v-.2s-.3 0-.4.3v.7l.1.3z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#c8b100",
                d: "M144.3 212c0-.2-.3-.2-.5 0-.2.1-.2.3-.1.5l.5-.1c.2-.1.2-.4.1-.5"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".3",
                d: "M144.3 212c0-.2-.3-.2-.5 0-.2.1-.2.3-.1.5l.5-.1c.2-.1.2-.4.1-.5z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#c8b100",
                d: "M124 223h21.4v-5.5H124v5.6z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".4",
                d: "M124 223h21.4v-5.5H124v5.6z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#c8b100",
                d: "M126.2 226.8a1 1 0 01.4 0h16.5a1.4 1.4 0 01-1-1.2c0-.6.5-1.1 1-1.3a1.7 1.7 0 01-.4 0h-16a1.4 1.4 0 01-.5 0c.6.2 1 .7 1 1.3a1.3 1.3 0 01-1 1.2"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeLinejoin: "round",
                strokeWidth: ".4",
                d: "M126.2 226.8a1 1 0 01.4 0h16.5a1.4 1.4 0 01-1-1.2c0-.6.5-1.1 1-1.3a1.7 1.7 0 01-.4 0h-16a1.4 1.4 0 01-.5 0c.6.2 1 .7 1 1.3a1.3 1.3 0 01-1 1.2z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#c8b100",
                d: "M126.6 226.8h16c.6 0 1 .3 1 .7 0 .4-.4.8-1 .8h-16c-.5 0-1-.4-1-.8s.5-.8 1-.8"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".4",
                d: "M126.6 226.8h16c.6 0 1 .3 1 .7 0 .4-.4.8-1 .8h-16c-.5 0-1-.4-1-.8s.5-.8 1-.8z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#c8b100",
                d: "M126.6 223h16c.6 0 1 .4 1 .7 0 .4-.4.6-1 .6h-16c-.5 0-1-.2-1-.6 0-.3.5-.6 1-.6"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".4",
                d: "M126.6 223h16c.6 0 1 .4 1 .7 0 .4-.4.6-1 .6h-16c-.5 0-1-.2-1-.6 0-.3.5-.6 1-.6z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#005bbf",
                d: "M149.6 317.4c-1.4 0-2.8-.3-3.7-.8a8.4 8.4 0 00-3.8-.8c-1.4 0-2.7.3-3.7.8a8.3 8.3 0 01-3.8.8c-1.5 0-2.8-.3-3.7-.8a8.4 8.4 0 00-3.7-.8 8 8 0 00-3.7.8 8.3 8.3 0 01-3.8.8v2.4c1.5 0 2.8-.4 3.8-.9a8.2 8.2 0 013.7-.8c1.4 0 2.7.3 3.7.8s2.2.9 3.7.9a8.4 8.4 0 003.8-.9c1-.5 2.3-.8 3.7-.8 1.5 0 2.8.3 3.8.8s2.2.9 3.7.9v-2.4"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".4",
                d: "M149.6 317.4c-1.4 0-2.8-.3-3.7-.8a8.4 8.4 0 00-3.8-.8c-1.4 0-2.7.3-3.7.8a8.3 8.3 0 01-3.8.8c-1.5 0-2.8-.3-3.7-.8a8.4 8.4 0 00-3.7-.8 8 8 0 00-3.7.8 8.3 8.3 0 01-3.8.8v2.4c1.5 0 2.8-.4 3.8-.9a8.2 8.2 0 013.7-.8c1.4 0 2.7.3 3.7.8s2.2.9 3.7.9a8.4 8.4 0 003.8-.9c1-.5 2.3-.8 3.7-.8 1.5 0 2.8.3 3.8.8s2.2.9 3.7.9v-2.4z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#ccc",
                d: "M149.6 319.8a8 8 0 01-3.7-.9 8.3 8.3 0 00-3.8-.8c-1.4 0-2.7.3-3.7.8s-2.3.9-3.8.9-2.8-.4-3.7-.9a8.4 8.4 0 00-3.7-.8 8.2 8.2 0 00-3.7.8c-1 .5-2.3.9-3.8.9v2.3c1.5 0 2.8-.4 3.8-.9a8.1 8.1 0 013.7-.7c1.4 0 2.7.2 3.7.7a8.3 8.3 0 007.5 0 8.5 8.5 0 017.5.1 8.1 8.1 0 003.7.8v-2.3"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".4",
                d: "M149.6 319.8a8 8 0 01-3.7-.9 8.3 8.3 0 00-3.8-.8c-1.4 0-2.7.3-3.7.8s-2.3.9-3.8.9-2.8-.4-3.7-.9a8.4 8.4 0 00-3.7-.8 8.2 8.2 0 00-3.7.8c-1 .5-2.3.9-3.8.9v2.3c1.5 0 2.8-.4 3.8-.9a8.1 8.1 0 013.7-.7c1.4 0 2.7.2 3.7.7a8.3 8.3 0 007.5 0 8.5 8.5 0 017.5.1 8.1 8.1 0 003.7.8v-2.3"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#005bbf",
                d: "M149.6 322a7 7 0 01-3.7-.8 8.3 8.3 0 00-3.8-.7c-1.4 0-2.7.2-3.7.7-1 .6-2.3.9-3.8.9s-2.8-.4-3.7-.9a8.4 8.4 0 00-3.7-.8 8 8 0 00-3.7.8c-1 .5-2.3.9-3.8.9v2.3c1.5 0 2.8-.3 3.8-.9a10.2 10.2 0 017.4 0 7 7 0 003.7.9 8.4 8.4 0 003.8-.8c1-.5 2.3-.8 3.7-.8 1.5 0 2.8.3 3.8.8s2.2.8 3.7.8V322"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".4",
                d: "M149.6 322a7 7 0 01-3.7-.8 8.3 8.3 0 00-3.8-.7c-1.4 0-2.7.2-3.7.7-1 .6-2.3.9-3.8.9s-2.8-.4-3.7-.9a8.4 8.4 0 00-3.7-.8 8 8 0 00-3.7.8c-1 .5-2.3.9-3.8.9v2.3c1.5 0 2.8-.3 3.8-.9a10.2 10.2 0 017.4 0 7 7 0 003.7.9 8.4 8.4 0 003.8-.8c1-.5 2.3-.8 3.7-.8 1.5 0 2.8.3 3.8.8s2.2.8 3.7.8V322"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#ccc",
                d: "M149.6 326.7a8 8 0 01-3.7-.8c-1-.5-2.3-.8-3.7-.8a8.4 8.4 0 00-3.8.8c-1 .5-2.3.8-3.8.8a7 7 0 01-3.7-.9 8.4 8.4 0 00-3.7-.7c-1.4 0-2.7.3-3.7.8s-2.3.8-3.8.8v-2.3a8.3 8.3 0 003.8-.9 10.2 10.2 0 017.4 0 8 8 0 003.7.9 8.4 8.4 0 003.8-.8c1-.5 2.3-.8 3.8-.8 1.4 0 2.7.3 3.7.8s2.3.8 3.7.8v2.3"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".4",
                d: "M149.6 326.7a8 8 0 01-3.7-.8c-1-.5-2.3-.8-3.7-.8a8.4 8.4 0 00-3.8.8c-1 .5-2.3.8-3.8.8a7 7 0 01-3.7-.9 8.4 8.4 0 00-3.7-.7c-1.4 0-2.7.3-3.7.8s-2.3.8-3.8.8v-2.3a8.3 8.3 0 003.8-.9 10.2 10.2 0 017.4 0 8 8 0 003.7.9 8.4 8.4 0 003.8-.8c1-.5 2.3-.8 3.8-.8 1.4 0 2.7.3 3.7.8s2.3.8 3.7.8v2.3"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#005bbf",
                d: "M149.6 329a8.1 8.1 0 01-3.7-.8c-1-.5-2.3-.8-3.7-.8a8.4 8.4 0 00-3.8.8c-1 .5-2.3.8-3.8.8a7 7 0 01-3.7-.9 8.4 8.4 0 00-3.7-.7c-1.4 0-2.7.3-3.7.8s-2.3.8-3.8.8v-2.3a8.3 8.3 0 003.8-.8c1-.5 2.3-.8 3.7-.8 1.4 0 2.7.3 3.7.7a8.4 8.4 0 007.5 0c1-.4 2.3-.7 3.8-.7 1.4 0 2.7.3 3.7.8s2.2.8 3.7.8v2.3"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".4",
                d: "M149.6 329a8.1 8.1 0 01-3.7-.8c-1-.5-2.3-.8-3.7-.8a8.4 8.4 0 00-3.8.8c-1 .5-2.3.8-3.8.8a7 7 0 01-3.7-.9 8.4 8.4 0 00-3.7-.7c-1.4 0-2.7.3-3.7.8s-2.3.8-3.8.8v-2.3a8.3 8.3 0 003.8-.8c1-.5 2.3-.8 3.7-.8 1.4 0 2.7.3 3.7.7a8.4 8.4 0 007.5 0c1-.4 2.3-.7 3.8-.7 1.4 0 2.7.3 3.7.8s2.2.8 3.7.8v2.3z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#c8b100",
                d: "M126.2 308l.2.5c0 1.5-1.3 2.6-2.7 2.6h22a2.7 2.7 0 01-2.7-2.6v-.5a1.3 1.3 0 01-.3 0h-16a1.4 1.4 0 01-.5 0"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeLinejoin: "round",
                strokeWidth: ".4",
                d: "M126.2 308l.2.5c0 1.5-1.3 2.6-2.7 2.6h22a2.7 2.7 0 01-2.7-2.6v-.5a1.3 1.3 0 01-.3 0h-16a1.4 1.4 0 01-.5 0z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#c8b100",
                d: "M126.6 306.5h16c.6 0 1 .3 1 .8 0 .4-.4.7-1 .7h-16c-.5 0-1-.3-1-.8 0-.4.5-.7 1-.7"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".4",
                d: "M126.6 306.5h16c.6 0 1 .3 1 .8 0 .4-.4.7-1 .7h-16c-.5 0-1-.3-1-.8 0-.4.5-.7 1-.7z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#c8b100",
                d: "M123.7 316.7h22V311h-22v5.6z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".4",
                d: "M123.7 316.7h22V311h-22v5.6z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#ad1519",
                d: "M122 286.7c-2.2 1.2-3.7 2.5-3.4 3.2 0 .6.8 1 1.8 1.6 1.5 1.1 2.5 3 1.7 4a5.5 5.5 0 00-.1-8.8"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".4",
                d: "M122 286.7c-2.2 1.2-3.7 2.5-3.4 3.2 0 .6.8 1 1.8 1.6 1.5 1.1 2.5 3 1.7 4a5.5 5.5 0 00-.1-8.8z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#ccc",
                d: "M126.8 305.6h15.6V229h-15.6v76.5z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".4",
                d: "M138 229.2v76.3m1.7-76.3v76.3m-12.9 0h15.6v-76.4h-15.6v76.5z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#ad1519",
                d: "M158.4 257.7a49.6 49.6 0 00-23.3-2c-9.4 1.6-16.5 5.3-15.9 8.4v.2l-3.5-8.2c-.6-3.3 7.2-7.5 17.6-9.2a43 43 0 019.2-.7c6.6 0 12.4.8 15.8 2.1v9.4"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeLinejoin: "round",
                strokeWidth: ".4",
                d: "M158.4 257.7a49.6 49.6 0 00-23.3-2c-9.4 1.6-16.5 5.3-15.9 8.4v.2l-3.5-8.2c-.6-3.3 7.2-7.5 17.6-9.2a43 43 0 019.2-.7c6.6 0 12.4.8 15.8 2.1v9.4"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#ad1519",
                d: "M126.8 267.3c-4.3-.3-7.3-1.4-7.6-3.2-.3-1.5 1.2-3 3.8-4.5 1.2.1 2.5.3 3.8.3v7.4"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".4",
                d: "M126.8 267.3c-4.3-.3-7.3-1.4-7.6-3.2-.3-1.5 1.2-3 3.8-4.5 1.2.1 2.5.3 3.8.3v7.4"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#ad1519",
                d: "M142.5 261.5c2.7.4 4.7 1 5.7 1.9l.1.2c.5 1-1.9 3-5.9 5.4v-7.5"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".4",
                d: "M142.5 261.5c2.7.4 4.7 1 5.7 1.9l.1.2c.5 1-1.9 3-5.9 5.4v-7.5"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#ad1519",
                d: "M117.1 282c-.4-1.2 3.8-3.6 9.8-5.8l7.8-3.2c8.3-3.7 14.4-7.9 13.6-9.4v-.2c.4.4 1 8 1 8 .8 1.3-4.8 5.5-12.4 9.1-2.5 1.2-7.6 3-10 4-4.4 1.4-8.7 4.3-8.3 5.3l-1.5-7.7"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeLinejoin: "round",
                strokeWidth: ".4",
                d: "M117.1 282c-.4-1.2 3.8-3.6 9.8-5.8l7.8-3.2c8.3-3.7 14.4-7.9 13.6-9.4v-.2c.4.4 1 8 1 8 .8 1.3-4.8 5.5-12.4 9.1-2.5 1.2-7.6 3-10 4-4.4 1.4-8.7 4.3-8.3 5.3l-1.5-7.7z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#c8b100",
                d: "M125.8 254c1.9-.6 3.1-1.5 2.5-3-.4-1-1.4-1-2.8-.6l-2.6 1 2.3 5.8.8-.3.8-.3-1-2.5zm-1.2-2.7l.7-.3c.5-.2 1.2.1 1.4.8.2.5.2 1-.5 1.5a4.4 4.4 0 01-.6.3l-1-2.3m7.3-2.5l-.9.3h-.8l1.3 6.1 4.3-.8-.2-.4v-.4l-2.5.6-1.2-5.3m8.4 5.2c.8-2.2 1.7-4.3 2.7-6.4a5.3 5.3 0 01-1 0 54.8 54.8 0 01-1.8 4.6l-2.4-4.3-1 .1h-1a131.4 131.4 0 013.5 6h1m8.8-4.7l.4-.9a3.4 3.4 0 00-1.7-.6c-1.7-.1-2.7.6-2.8 1.7-.2 2.1 3.2 2 3 3.4 0 .6-.7.9-1.4.8-.8 0-1.4-.5-1.4-1.2h-.3a7.3 7.3 0 01-.4 1.1 4 4 0 001.8.6c1.7.2 3-.5 3.2-1.7.2-2-3.3-2.1-3.1-3.4 0-.5.4-.8 1.3-.7.7 0 1 .4 1.2.9h.2"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#ad1519",
                d: "M277.9 211.6s-.7.8-1.3.9c-.5 0-1.1-.5-1.1-.5s-.5.5-1 .6c-.6.1-1.4-.6-1.4-.6l-1 1c-.6 0-1.1-.3-1.1-.3s-.3.4-.7.6h-.4l-.6-.4-.7-.7-.5-.3-.4-1v-.5c-.1-.6.8-1.4 2.2-1.7a3.9 3.9 0 012 0c.5-.5 1.7-.8 3-.8s2.4.3 3 .7a5.5 5.5 0 012.9-.7c1.3 0 2.5.3 3 .8.5-.2 1.2-.2 2 0 1.4.3 2.3 1 2.2 1.7v.5l-.4 1-.6.3-.6.7-.6.3s-.3.2-.4 0c-.4-.1-.7-.5-.7-.5s-.6.4-1 .2c-.5-.2-1-1-1-1s-.9.8-1.4.7c-.6-.1-1-.6-1-.6s-.7.6-1.2.5c-.5-.1-1.2-.9-1.2-.9"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".3",
                d: "M277.9 211.6s-.7.8-1.3.9c-.5 0-1.1-.5-1.1-.5s-.5.5-1 .6c-.6.1-1.4-.6-1.4-.6l-1 1c-.6 0-1.1-.3-1.1-.3s-.3.4-.7.6h-.4l-.6-.4-.7-.7-.5-.3-.4-1v-.5c-.1-.6.8-1.4 2.2-1.7a3.9 3.9 0 012 0c.5-.5 1.7-.8 3-.8s2.4.3 3 .7a5.5 5.5 0 012.9-.7c1.3 0 2.5.3 3 .8.5-.2 1.2-.2 2 0 1.4.3 2.3 1 2.2 1.7v.5l-.4 1-.6.3-.6.7-.6.3s-.3.2-.4 0c-.4-.1-.7-.5-.7-.5s-.6.4-1 .2c-.5-.2-1-1-1-1s-.9.8-1.4.7c-.6-.1-1-.6-1-.6s-.7.6-1.2.5c-.5-.1-1.2-.9-1.2-.9z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#c8b100",
                d: "M276.5 207.6c0-1 .6-2 1.3-2 .8 0 1.3 1 1.3 2s-.5 1.8-1.3 1.8c-.7 0-1.3-.8-1.3-1.9"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".3",
                d: "M276.5 207.6c0-1 .6-2 1.3-2 .8 0 1.3 1 1.3 2s-.5 1.8-1.3 1.8c-.7 0-1.3-.8-1.3-1.9z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#c8b100",
                d: "M277.3 207.6c0-1 .2-1.8.5-1.8.4 0 .7.8.7 1.8s-.3 1.7-.6 1.7c-.4 0-.6-.8-.6-1.8"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".3",
                d: "M277.3 207.6c0-1 .2-1.8.5-1.8.4 0 .7.8.7 1.8s-.3 1.7-.6 1.7c-.4 0-.6-.8-.6-1.8z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#c8b100",
                d: "M271 215.3a4.5 4.5 0 00-.5-1 27.4 27.4 0 0114.8 0l-.6.8a5.2 5.2 0 00-.3.8 22.9 22.9 0 00-6.6-.8c-2.6 0-5.2.3-6.6.8l-.2-.6"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".3",
                d: "M271 215.3a4.5 4.5 0 00-.5-1 27.4 27.4 0 0114.8 0l-.6.8a5.2 5.2 0 00-.3.8 22.9 22.9 0 00-6.6-.8c-2.6 0-5.2.3-6.6.8l-.2-.6"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#c8b100",
                d: "M277.8 217.7c2.4 0 5-.4 5.9-.6.6-.2 1-.5 1-.8 0-.2-.2-.3-.4-.4a24.1 24.1 0 00-6.5-.8c-2.5 0-5 .3-6.4.8-.2 0-.3.2-.4.3 0 .4.3.7 1 .9 1 .2 3.5.6 5.8.6"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".3",
                d: "M277.8 217.7c2.4 0 5-.4 5.9-.6.6-.2 1-.5 1-.8 0-.2-.2-.3-.4-.4a24.1 24.1 0 00-6.5-.8c-2.5 0-5 .3-6.4.8-.2 0-.3.2-.4.3 0 .4.3.7 1 .9 1 .2 3.5.6 5.8.6z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#fff",
                d: "M283.5 208.4c0-.2.2-.4.4-.4s.5.2.5.4-.2.4-.5.4a.4.4 0 01-.4-.4"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".2",
                d: "M283.5 208.4c0-.2.2-.4.4-.4s.5.2.5.4-.2.4-.5.4a.4.4 0 01-.4-.4zm-.2-1.4a.4.4 0 01.4-.4c.2 0 .4.1.4.4s-.2.4-.4.4a.4.4 0 01-.4-.4zm-1.1-1c0-.2.2-.3.4-.3s.4.1.4.4c0 .2-.2.4-.4.4a.4.4 0 01-.4-.5zm-1.4-.4c0-.2.2-.4.4-.4.3 0 .5.2.5.4s-.2.4-.4.4-.5-.2-.5-.4zm-1.4 0c0-.2.2-.3.5-.3s.4.1.4.4c0 .2-.2.4-.4.4a.4.4 0 01-.5-.4z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeLinecap: "round",
                strokeWidth: ".3",
                d: "M287.8 211.2l.2-1a2.7 2.7 0 00-2.7-2.8c-.5 0-1 .1-1.3.3"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".3",
                d: "M283 209.2l.2-.8c0-1.1-1.1-2-2.5-2-.6 0-1.2.2-1.6.4"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".2",
                d: "M288.2 210c0-.3.2-.5.4-.5s.4.2.4.4c0 .3-.2.4-.4.4s-.4-.1-.4-.4zm-.2-1.6c0-.2.2-.4.4-.4a.4.4 0 01.5.4c0 .2-.2.4-.4.4-.3 0-.5-.2-.5-.4zm-1-1.1a.4.4 0 01.5-.4c.2 0 .4.1.4.4a.4.4 0 01-.4.4.4.4 0 01-.5-.4zm-1.3-.7c0-.2.2-.4.5-.4s.4.2.4.4c0 .3-.2.5-.4.5a.4.4 0 01-.5-.5zm-1.4.1c0-.2.2-.4.5-.4s.4.2.4.4-.2.4-.4.4-.5-.2-.5-.4z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#c8b100",
                d: "M285.3 213.2l-.5-.5s-.6.3-1.3.2c-.6 0-.9-1-.9-1s-.7.7-1.3.7c-.7 0-1-.6-1-.6s-.7.5-1.3.4c-.6 0-1.2-.8-1.2-.8s-.6.8-1.2.8c-.6.1-1-.5-1-.5s-.3.6-1.1.7-1.4-.6-1.4-.6-.4.7-1 1c-.5 0-1.2-.4-1.2-.4l-.1.5-.3.1.1.5a27 27 0 017.3-.9c2.8 0 5.4.4 7.3 1l.2-.6"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".3",
                d: "M285.3 213.2l-.5-.5s-.6.3-1.3.2c-.6 0-.9-1-.9-1s-.7.7-1.3.7c-.7 0-1-.6-1-.6s-.7.5-1.3.4c-.6 0-1.2-.8-1.2-.8s-.6.8-1.2.8c-.6.1-1-.5-1-.5s-.3.6-1.1.7-1.4-.6-1.4-.6-.4.7-1 1c-.5 0-1.2-.4-1.2-.4l-.1.5-.3.1.1.5a27 27 0 017.3-.9c2.8 0 5.4.4 7.3 1l.2-.6z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#fff",
                d: "M271.3 208.4c0-.2.2-.4.4-.4s.4.2.4.4a.4.4 0 01-.4.4.4.4 0 01-.4-.4"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".2",
                d: "M271.3 208.4c0-.2.2-.4.4-.4s.4.2.4.4a.4.4 0 01-.4.4.4.4 0 01-.4-.4zm.2-1.4c0-.3.2-.4.4-.4s.5.1.5.4-.2.4-.5.4a.4.4 0 01-.4-.4zm1-1c0-.2.3-.3.5-.3s.5.1.5.4c0 .2-.2.4-.5.4a.4.4 0 01-.4-.5zm1.4-.4c0-.2.2-.4.5-.4s.4.2.4.4-.2.4-.4.4-.5-.2-.5-.4zm1.4 0c0-.2.2-.3.5-.3.2 0 .4.1.4.4 0 .2-.2.4-.4.4a.4.4 0 01-.5-.4z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeLinecap: "round",
                strokeWidth: ".3",
                d: "M267.8 211.2a2.8 2.8 0 01-.2-1 2.7 2.7 0 012.7-2.8c.5 0 1 .1 1.4.3"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".3",
                d: "M272.7 209.2a1.7 1.7 0 01-.3-.8c0-1 1.2-2 2.6-2a3 3 0 011.5.4"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".2",
                d: "M266.6 210c0-.3.2-.5.4-.5.3 0 .4.2.4.4a.4.4 0 01-.4.4c-.2 0-.4-.1-.4-.4zm.1-1.6c0-.2.3-.4.5-.4s.4.2.4.4-.2.4-.4.4-.4-.2-.4-.4zm1-1.1c0-.3.2-.4.5-.4a.4.4 0 01.4.4.4.4 0 01-.4.4.4.4 0 01-.5-.4zm1.3-.7c0-.2.2-.4.5-.4.2 0 .4.2.4.4 0 .3-.2.5-.4.5a.4.4 0 01-.5-.5zm1.4.1c0-.2.2-.4.5-.4a.4.4 0 01.4.4.4.4 0 01-.4.4c-.3 0-.5-.2-.5-.4z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#c8b100",
                d: "M277.9 210.7h.2a1 1 0 000 .4c0 .6.5 1 1 1a1 1 0 001-.7l.2-.3v.4c.1.5.6.8 1.1.8.6 0 1-.4 1-1a.7.7 0 000-.1l.4-.4.2.5a1 1 0 00-.1.4 1 1 0 001 1c.4 0 .7-.2.9-.5l.2-.2v.3c0 .3.1.6.4.7 0 0 .4 0 1-.4s.7-.7.7-.7v.4s-.5.8-1 1c-.2.2-.5.4-.8.3-.3 0-.6-.3-.7-.6a1.5 1.5 0 01-.7.2c-.6 0-1.2-.3-1.4-.8a1.5 1.5 0 01-1.1.5c-.5 0-1-.2-1.2-.6a1.5 1.5 0 01-1 .4c-.6 0-1-.2-1.4-.6-.2.4-.7.6-1.2.6-.4 0-.8-.1-1-.4a1.6 1.6 0 01-1.3.6c-.4 0-.8-.2-1.1-.5-.2.5-.8.8-1.4.8-.2 0-.5 0-.7-.2-.1.3-.4.6-.7.6-.3 0-.6 0-.9-.2a4.2 4.2 0 01-1-1l.1-.5.8.7c.5.4.9.4.9.4.3 0 .4-.4.4-.7v-.3l.2.2c.2.3.5.5.9.5a1 1 0 001-1 1 1 0 000-.4v-.5l.4.4v.1c0 .6.5 1 1 1 .6 0 1-.3 1.1-.9v-.3l.2.3c.2.4.6.7 1 .7.6 0 1.1-.4 1.1-1a1 1 0 000-.3h.2"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".3",
                d: "M277.9 210.7h.2a1 1 0 000 .4c0 .6.5 1 1 1a1 1 0 001-.7l.2-.3v.4c.1.5.6.8 1.1.8.6 0 1-.4 1-1a.7.7 0 000-.1l.4-.4.2.5a1 1 0 00-.1.4 1 1 0 001 1c.4 0 .7-.2.9-.5l.2-.2v.3c0 .3.1.6.4.7 0 0 .4 0 1-.4s.7-.7.7-.7v.4s-.5.8-1 1c-.2.2-.5.4-.8.3-.3 0-.6-.3-.7-.6a1.5 1.5 0 01-.7.2c-.6 0-1.2-.3-1.4-.8a1.5 1.5 0 01-1.1.5c-.5 0-1-.2-1.2-.6a1.5 1.5 0 01-1 .4c-.6 0-1-.2-1.4-.6-.2.4-.7.6-1.2.6-.4 0-.8-.1-1-.4a1.6 1.6 0 01-1.3.6c-.4 0-.8-.2-1.1-.5-.2.5-.8.8-1.4.8-.2 0-.5 0-.7-.2-.1.3-.4.6-.7.6-.3 0-.6 0-.9-.2a4.2 4.2 0 01-1-1l.1-.5.8.7c.5.4.9.4.9.4.3 0 .4-.4.4-.7v-.3l.2.2c.2.3.5.5.9.5a1 1 0 001-1 1 1 0 000-.4v-.5l.4.4v.1c0 .6.5 1 1 1 .6 0 1-.3 1.1-.9v-.3l.2.3c.2.4.6.7 1 .7.6 0 1.1-.4 1.1-1a1 1 0 000-.3h.2z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#c8b100",
                d: "M277.8 213.3c-2.9 0-5.5.4-7.3 1l-.3-.2.1-.3c2-.6 4.6-1 7.5-1 3 0 5.7.4 7.6 1 0 0 .2.2.1.3l-.3.2a27 27 0 00-7.4-1"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".3",
                d: "M277.8 213.3c-2.9 0-5.5.4-7.3 1l-.3-.2.1-.3c2-.6 4.6-1 7.5-1 3 0 5.7.4 7.6 1 0 0 .2.2.1.3l-.3.2a27 27 0 00-7.4-1z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#fff",
                d: "M275 214.4c0-.3.2-.4.5-.4a.4.4 0 01.4.4.4.4 0 01-.4.4c-.3 0-.5-.2-.5-.4"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".3",
                d: "M275 214.4c0-.3.2-.4.5-.4a.4.4 0 01.4.4.4.4 0 01-.4.4c-.3 0-.5-.2-.5-.4z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#ad1519",
                d: "M277.9 214.5h-1c-.1 0-.3 0-.3-.3l.3-.3h2a.3.3 0 01.2.3.3.3 0 01-.3.3h-1"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".3",
                d: "M277.9 214.5h-1c-.1 0-.3 0-.3-.3l.3-.3h2a.3.3 0 01.2.3.3.3 0 01-.3.3h-1"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#058e6e",
                d: "M273.2 214.9h-.6a.3.3 0 01-.4-.2.3.3 0 01.3-.3l.6-.1.7-.1c.2 0 .3 0 .4.2a.3.3 0 01-.3.4h-.7"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".3",
                d: "M273.2 214.9h-.6a.3.3 0 01-.4-.2.3.3 0 01.3-.3l.6-.1.7-.1c.2 0 .3 0 .4.2a.3.3 0 01-.3.4h-.7"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#ad1519",
                d: "M270.5 215.3l.3-.4h.7l-.4.6-.6-.2"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".3",
                d: "M270.5 215.3l.3-.4h.7l-.4.6-.6-.2"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#fff",
                d: "M279.8 214.4c0-.3.2-.4.4-.4.3 0 .5.1.5.4 0 .2-.2.4-.5.4a.4.4 0 01-.4-.4"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".3",
                d: "M279.8 214.4c0-.3.2-.4.4-.4.3 0 .5.1.5.4 0 .2-.2.4-.5.4a.4.4 0 01-.4-.4z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#058e6e",
                d: "M282.5 214.9h.7a.3.3 0 00.3-.2.3.3 0 00-.2-.3l-.7-.1-.7-.1c-.2 0-.3 0-.4.2 0 .2.1.3.3.4h.7"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".3",
                d: "M282.5 214.9h.7a.3.3 0 00.3-.2.3.3 0 00-.2-.3l-.7-.1-.7-.1c-.2 0-.3 0-.4.2 0 .2.1.3.3.4h.7"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#ad1519",
                d: "M285.1 215.4l-.2-.5h-.7l.3.6.6-.1"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".3",
                d: "M285.1 215.4l-.2-.5h-.7l.3.6.6-.1"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#ad1519",
                d: "M277.8 217.1a25 25 0 01-6-.6 25.4 25.4 0 016-.7c2.4 0 4.5.3 6.1.7-1.6.4-3.7.6-6 .6"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeLinejoin: "round",
                strokeWidth: ".3",
                d: "M277.8 217.1a25 25 0 01-6-.6 25.4 25.4 0 016-.7c2.4 0 4.5.3 6.1.7-1.6.4-3.7.6-6 .6z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#c8b100",
                d: "M285.2 212l-.1-.3c-.2 0-.3 0-.4.2l.1.4c.2 0 .3 0 .4-.3"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".3",
                d: "M285.2 212l-.1-.3c-.2 0-.3 0-.4.2l.1.4c.2 0 .3 0 .4-.3z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#c8b100",
                d: "M280.6 211.2c0-.2-.1-.4-.3-.4 0 0-.2.1-.2.3 0 .2 0 .4.2.4l.3-.3"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".3",
                d: "M280.6 211.2c0-.2-.1-.4-.3-.4 0 0-.2.1-.2.3 0 .2 0 .4.2.4l.3-.3z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#c8b100",
                d: "M275.2 211.2c0-.2 0-.4.2-.4l.3.3-.2.4c-.2 0-.3-.2-.3-.3"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".3",
                d: "M275.2 211.2c0-.2 0-.4.2-.4l.3.3-.2.4c-.2 0-.3-.2-.3-.3z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#c8b100",
                d: "M270.5 212l.1-.3c.2 0 .3 0 .4.2l-.1.4c-.2 0-.3 0-.4-.3"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".3",
                d: "M270.5 212l.1-.3c.2 0 .3 0 .4.2l-.1.4c-.2 0-.3 0-.4-.3z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#c8b100",
                d: "M277.8 208.5l-.8.5.6 1.3.2.1.3-.1.6-1.3-.9-.5"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".3",
                d: "M277.8 208.5l-.8.5.6 1.3.2.1.3-.1.6-1.3-.9-.5"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#c8b100",
                d: "M276 210.5l.4.5 1.3-.4.1-.2-.1-.2-1.3-.3-.4.6"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".3",
                d: "M276 210.5l.4.5 1.3-.4.1-.2-.1-.2-1.3-.3-.4.6"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#c8b100",
                d: "M279.6 210.5l-.3.5-1.3-.4-.1-.2v-.2l1.4-.3.4.6"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".3",
                d: "M279.6 210.5l-.3.5-1.3-.4-.1-.2v-.2l1.4-.3.4.6"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#c8b100",
                d: "M272.5 209l-.7.7.9 1 .2.1.2-.1.2-1.3-.8-.3"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".3",
                d: "M272.5 209l-.7.7.9 1 .2.1.2-.1.2-1.3-.8-.3"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#c8b100",
                d: "M271.1 211.2l.5.5 1.2-.6v-.2l-.1-.2-1.3-.1-.3.6"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".3",
                d: "M271.1 211.2l.5.5 1.2-.6v-.2l-.1-.2-1.3-.1-.3.6"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#c8b100",
                d: "M274.7 210.5l-.3.6h-1.3l-.2-.2.1-.3 1.2-.6.5.5"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".3",
                d: "M274.7 210.5l-.3.6h-1.3l-.2-.2.1-.3 1.2-.6.5.5"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#c8b100",
                d: "M269.8 211.4v.6l-1.4.2-.2-.1v-.2l1-.9.6.4"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".3",
                d: "M269.8 211.4v.6l-1.4.2-.2-.1v-.2l1-.9.6.4"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#c8b100",
                d: "M272.4 210.9c0-.3.2-.5.5-.5a.5.5 0 01.5.5.5.5 0 01-.5.4.5.5 0 01-.5-.4"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".3",
                d: "M272.4 210.9c0-.3.2-.5.5-.5a.5.5 0 01.5.5.5.5 0 01-.5.4.5.5 0 01-.5-.4z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#c8b100",
                d: "M283.2 209l.7.7-.9 1-.2.1-.1-.1-.3-1.3.8-.3"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".3",
                d: "M283.2 209l.7.7-.9 1-.2.1-.1-.1-.3-1.3.8-.3"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#c8b100",
                d: "M284.6 211.2l-.5.5-1.2-.6v-.2l.1-.2 1.3-.1.3.6"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".3",
                d: "M284.6 211.2l-.5.5-1.2-.6v-.2l.1-.2 1.3-.1.3.6"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#c8b100",
                d: "M281 210.5l.3.6h1.3l.2-.2-.1-.3-1.2-.6-.5.5"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".3",
                d: "M281 210.5l.3.6h1.3l.2-.2-.1-.3-1.2-.6-.5.5"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#c8b100",
                d: "M285.7 211.4v.6l1.4.2.2-.1v-.2l-1-.9-.6.4"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".3",
                d: "M285.7 211.4v.6l1.4.2.2-.1v-.2l-1-.9-.6.4"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#c8b100",
                d: "M277.4 210.4c0-.2.2-.4.5-.4.2 0 .4.2.4.4 0 .3-.2.5-.4.5a.5.5 0 01-.5-.5"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".3",
                d: "M277.4 210.4c0-.2.2-.4.5-.4.2 0 .4.2.4.4 0 .3-.2.5-.4.5a.5.5 0 01-.5-.5z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#c8b100",
                d: "M282.3 210.9c0-.3.3-.5.5-.5.3 0 .5.2.5.5s-.2.4-.5.4a.5.5 0 01-.5-.4"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".3",
                d: "M282.3 210.9c0-.3.3-.5.5-.5.3 0 .5.2.5.5s-.2.4-.5.4a.5.5 0 01-.5-.4z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#c8b100",
                d: "M277 205.4c0-.5.4-.8.8-.8s1 .3 1 .8-.5.8-1 .8a.9.9 0 01-.8-.8"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#c8b100",
                d: "M278.5 205.1v.6H277v-.6h.4v-1.3h-.5v-.5h.5v-.6h.6v.6h.6v.6h-.6v1.2h.4"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".3",
                d: "M278.5 205.1v.6H277v-.6h.4v-1.3h-.5v-.5h.5v-.6h.6v.6h.6v.6h-.6v1.2h.4z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#c8b100",
                d: "M279 205.1v.6h-2.4v-.6h1v-1.3h-.7v-.5h.6v-.6h.6v.6h.6v.6h-.6v1.2h1"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".3",
                d: "M278.1 204.6c.4 0 .6.4.6.8 0 .5-.4.8-.9.8a.9.9 0 01-.8-.8c0-.4.2-.7.6-.8"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#c8b100",
                d: "M268 212.2l-.6-.7a2.3 2.3 0 00-.7-.3c0-.1.3-.3.6-.3.2 0 .3 0 .4.2v-.2s.3 0 .4.3v1"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".3",
                d: "M268 212.2l-.6-.7a2.3 2.3 0 00-.7-.3c0-.1.3-.3.6-.3.2 0 .3 0 .4.2v-.2s.3 0 .4.3v1z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#c8b100",
                d: "M268 212c.1-.2.4-.2.5 0 .2.1.3.3.1.5l-.5-.1c-.1-.1-.2-.4 0-.5"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".3",
                d: "M268 212c.1-.2.4-.2.5 0 .2.1.3.3.1.5l-.5-.1c-.1-.1-.2-.4 0-.5z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#c8b100",
                d: "M287.5 212.2l.6-.7c.2-.2.7-.3.7-.3 0-.1-.3-.3-.6-.3a.6.6 0 00-.4.2v-.2s-.3 0-.4.3v.7l.1.3"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".3",
                d: "M287.5 212.2l.6-.7c.2-.2.7-.3.7-.3 0-.1-.3-.3-.6-.3a.6.6 0 00-.4.2v-.2s-.3 0-.4.3v.7l.1.3z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#c8b100",
                d: "M287.5 212c-.1-.2-.3-.2-.5 0-.2.1-.2.3-.1.5l.5-.1c.2-.1.2-.4.1-.5"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".3",
                d: "M287.5 212c-.1-.2-.3-.2-.5 0-.2.1-.2.3-.1.5l.5-.1c.2-.1.2-.4.1-.5z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#c8b100",
                d: "M267.2 223h21.4v-5.5h-21.4v5.6z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".4",
                d: "M267.2 223h21.4v-5.5h-21.4v5.6z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#c8b100",
                d: "M286.3 226.8a1 1 0 00-.4 0h-16.5c.6-.2 1-.7 1-1.2 0-.6-.4-1.1-1-1.3h17-.1c-.6.2-1 .7-1 1.3 0 .5.4 1 1 1.2"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeLinejoin: "round",
                strokeWidth: ".4",
                d: "M286.3 226.8a1 1 0 00-.4 0h-16.5c.6-.2 1-.7 1-1.2 0-.6-.4-1.1-1-1.3h17-.1c-.6.2-1 .7-1 1.3 0 .5.4 1 1 1.2z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#c8b100",
                d: "M269.9 226.8h16c.6 0 1 .3 1 .7 0 .4-.4.8-1 .8h-16c-.6 0-1-.4-1-.8s.5-.8 1-.8"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".4",
                d: "M269.9 226.8h16c.6 0 1 .3 1 .7 0 .4-.4.8-1 .8h-16c-.6 0-1-.4-1-.8s.5-.8 1-.8z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#c8b100",
                d: "M269.9 223h16c.6 0 1 .4 1 .7 0 .4-.4.6-1 .6h-16c-.6 0-1-.2-1-.6 0-.3.4-.6 1-.6"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".4",
                d: "M269.9 223h16c.6 0 1 .4 1 .7 0 .4-.4.6-1 .6h-16c-.6 0-1-.2-1-.6 0-.3.4-.6 1-.6z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#005bbf",
                d: "M263 317.4c1.4 0 2.7-.3 3.7-.8a8.4 8.4 0 013.7-.8c1.4 0 2.8.3 3.8.8s2.3.8 3.7.8c1.5 0 2.8-.3 3.8-.8a8.4 8.4 0 013.6-.8 8 8 0 013.7.8c1 .5 2.4.8 3.8.8v2.4a8.3 8.3 0 01-3.8-.9 8.2 8.2 0 00-3.7-.8c-1.4 0-2.7.3-3.6.8-1 .5-2.3.9-3.8.9a8 8 0 01-3.7-.9 8.4 8.4 0 00-3.8-.8 8.3 8.3 0 00-3.7.8c-1 .5-2.3.9-3.8.9v-2.4"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".4",
                d: "M263 317.4c1.4 0 2.7-.3 3.7-.8a8.4 8.4 0 013.7-.8c1.4 0 2.8.3 3.8.8s2.3.8 3.7.8c1.5 0 2.8-.3 3.8-.8a8.4 8.4 0 013.6-.8 8 8 0 013.7.8c1 .5 2.4.8 3.8.8v2.4a8.3 8.3 0 01-3.8-.9 8.2 8.2 0 00-3.7-.8c-1.4 0-2.7.3-3.6.8-1 .5-2.3.9-3.8.9a8 8 0 01-3.7-.9 8.4 8.4 0 00-3.8-.8 8.3 8.3 0 00-3.7.8c-1 .5-2.3.9-3.8.9v-2.4z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#ccc",
                d: "M263 319.8c1.4 0 2.7-.4 3.7-.9s2.3-.8 3.7-.8c1.4 0 2.8.3 3.8.8s2.3.9 3.7.9a8.2 8.2 0 003.8-.9 8.4 8.4 0 013.6-.8c1.5 0 2.8.3 3.7.8 1 .5 2.4.9 3.8.9v2.3a8.3 8.3 0 01-3.8-.9 8.1 8.1 0 00-3.7-.7c-1.4 0-2.7.2-3.6.7-1 .5-2.3.9-3.8.9a7 7 0 01-3.7-.9c-1-.4-2.3-.7-3.8-.7a8.3 8.3 0 00-3.7.7 8.1 8.1 0 01-3.8.9v-2.3"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".4",
                d: "M263 319.8c1.4 0 2.7-.4 3.7-.9s2.3-.8 3.7-.8c1.4 0 2.8.3 3.8.8s2.3.9 3.7.9a8.2 8.2 0 003.8-.9 8.4 8.4 0 013.6-.8c1.5 0 2.8.3 3.7.8 1 .5 2.4.9 3.8.9v2.3a8.3 8.3 0 01-3.8-.9 8.1 8.1 0 00-3.7-.7c-1.4 0-2.7.2-3.6.7-1 .5-2.3.9-3.8.9a7 7 0 01-3.7-.9c-1-.4-2.3-.7-3.8-.7a8.3 8.3 0 00-3.7.7 8.1 8.1 0 01-3.8.9v-2.3"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#005bbf",
                d: "M263 322c1.4 0 2.7-.2 3.7-.8 1-.4 2.3-.7 3.7-.7 1.4 0 2.8.2 3.8.7s2.3.9 3.7.9a8.2 8.2 0 003.8-.9 8.4 8.4 0 013.6-.8 8 8 0 013.7.8c1 .5 2.4.9 3.8.9v2.3a8.3 8.3 0 01-3.8-.9 8.2 8.2 0 00-3.7-.7c-1.4 0-2.7.3-3.6.7-1 .6-2.3.9-3.8.9-1.4 0-2.8-.3-3.7-.8a8.4 8.4 0 00-3.8-.8 8.3 8.3 0 00-3.7.8c-1 .5-2.3.8-3.8.8V322"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".4",
                d: "M263 322c1.4 0 2.7-.2 3.7-.8 1-.4 2.3-.7 3.7-.7 1.4 0 2.8.2 3.8.7s2.3.9 3.7.9a8.2 8.2 0 003.8-.9 8.4 8.4 0 013.6-.8 8 8 0 013.7.8c1 .5 2.4.9 3.8.9v2.3a8.3 8.3 0 01-3.8-.9 8.2 8.2 0 00-3.7-.7c-1.4 0-2.7.3-3.6.7-1 .6-2.3.9-3.8.9-1.4 0-2.8-.3-3.7-.8a8.4 8.4 0 00-3.8-.8 8.3 8.3 0 00-3.7.8c-1 .5-2.3.8-3.8.8V322"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#ccc",
                d: "M263 326.7a8 8 0 003.7-.8c1-.5 2.3-.8 3.7-.8 1.4 0 2.8.3 3.8.8s2.3.8 3.7.8c1.5 0 2.8-.3 3.8-.9a8.4 8.4 0 013.6-.7c1.5 0 2.8.3 3.7.8a8.3 8.3 0 003.8.8v-2.3a8.3 8.3 0 01-3.8-.9 8.2 8.2 0 00-3.7-.7c-1.4 0-2.7.3-3.6.7-1 .5-2.3.9-3.8.9-1.4 0-2.8-.3-3.7-.8a8.4 8.4 0 00-3.8-.8 8.3 8.3 0 00-3.7.8c-1 .5-2.3.8-3.8.8v2.3"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".4",
                d: "M263 326.7a8 8 0 003.7-.8c1-.5 2.3-.8 3.7-.8 1.4 0 2.8.3 3.8.8s2.3.8 3.7.8c1.5 0 2.8-.3 3.8-.9a8.4 8.4 0 013.6-.7c1.5 0 2.8.3 3.7.8a8.3 8.3 0 003.8.8v-2.3a8.3 8.3 0 01-3.8-.9 8.2 8.2 0 00-3.7-.7c-1.4 0-2.7.3-3.6.7-1 .5-2.3.9-3.8.9-1.4 0-2.8-.3-3.7-.8a8.4 8.4 0 00-3.8-.8 8.3 8.3 0 00-3.7.8c-1 .5-2.3.8-3.8.8v2.3"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#005bbf",
                d: "M263 329a8.1 8.1 0 003.7-.8c1-.5 2.3-.8 3.7-.8 1.4 0 2.8.3 3.8.8s2.3.8 3.7.8a8.2 8.2 0 003.8-.9 8.4 8.4 0 013.6-.7c1.5 0 2.8.3 3.7.8 1 .5 2.4.8 3.8.8v-2.3a8.3 8.3 0 01-3.8-.8 8.2 8.2 0 00-3.7-.8 8.4 8.4 0 00-3.6.7 8.2 8.2 0 01-3.8.9c-1.4 0-2.8-.3-3.7-.8-1-.5-2.3-.8-3.8-.8-1.4 0-2.7.3-3.7.8s-2.3.8-3.8.8v2.3"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".4",
                d: "M263 329a8.1 8.1 0 003.7-.8c1-.5 2.3-.8 3.7-.8 1.4 0 2.8.3 3.8.8s2.3.8 3.7.8a8.2 8.2 0 003.8-.9 8.4 8.4 0 013.6-.7c1.5 0 2.8.3 3.7.8 1 .5 2.4.8 3.8.8v-2.3a8.3 8.3 0 01-3.8-.8 8.2 8.2 0 00-3.7-.8 8.4 8.4 0 00-3.6.7 8.2 8.2 0 01-3.8.9c-1.4 0-2.8-.3-3.7-.8-1-.5-2.3-.8-3.8-.8-1.4 0-2.7.3-3.7.8s-2.3.8-3.8.8v2.3z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#c8b100",
                d: "M286.3 308l-.1.5c0 1.5 1.2 2.6 2.7 2.6h-22c1.5 0 2.7-1.2 2.7-2.6l-.1-.5h16.8"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeLinejoin: "round",
                strokeWidth: ".4",
                d: "M286.3 308l-.1.5c0 1.5 1.2 2.6 2.7 2.6h-22c1.5 0 2.7-1.2 2.7-2.6l-.1-.5h16.8z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#c8b100",
                d: "M269.9 306.5h16c.6 0 1 .3 1 .8 0 .4-.4.7-1 .7h-16c-.6 0-1-.3-1-.8 0-.4.5-.7 1-.7"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".4",
                d: "M269.9 306.5h16c.6 0 1 .3 1 .8 0 .4-.4.7-1 .7h-16c-.6 0-1-.3-1-.8 0-.4.5-.7 1-.7z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#c8b100",
                d: "M266.9 316.7h22V311h-22v5.6z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".4",
                d: "M266.9 316.7h22V311h-22v5.6z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#ad1519",
                d: "M290.6 286.7c2.1 1.2 3.6 2.5 3.4 3.2-.1.6-.8 1-1.8 1.6-1.6 1.1-2.5 3-1.8 4a5.5 5.5 0 01.2-8.8"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".4",
                d: "M290.6 286.7c2.1 1.2 3.6 2.5 3.4 3.2-.1.6-.8 1-1.8 1.6-1.6 1.1-2.5 3-1.8 4a5.5 5.5 0 01.2-8.8z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#ccc",
                d: "M270.1 305.6h15.6V229h-15.6v76.5z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".4",
                d: "M281.4 229.1v76.3m1.8-76.3v76.3m-13 .2h15.5V229h-15.6v76.5z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#ad1519",
                d: "M254.2 257.7a49.6 49.6 0 0123.3-2c9.3 1.6 16.4 5.3 15.9 8.4v.2l3.5-8.2c.6-3.3-7.3-7.5-17.6-9.2a53.5 53.5 0 00-9.2-.7c-6.7 0-12.4.8-15.9 2.1v9.4"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeLinejoin: "round",
                strokeWidth: ".4",
                d: "M254.2 257.7a49.6 49.6 0 0123.3-2c9.3 1.6 16.4 5.3 15.9 8.4v.2l3.5-8.2c.6-3.3-7.3-7.5-17.6-9.2a53.5 53.5 0 00-9.2-.7c-6.7 0-12.4.8-15.9 2.1v9.4"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#ad1519",
                d: "M285.7 267.3c4.4-.3 7.3-1.4 7.7-3.2.2-1.5-1.2-3-3.8-4.5-1.2.1-2.5.3-3.9.3v7.4"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".4",
                d: "M285.7 267.3c4.4-.3 7.3-1.4 7.7-3.2.2-1.5-1.2-3-3.8-4.5-1.2.1-2.5.3-3.9.3v7.4"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#ad1519",
                d: "M270 261.5a13 13 0 00-5.7 1.9v.2c-.5 1 1.8 3 5.8 5.4v-7.5"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".4",
                d: "M270 261.5a13 13 0 00-5.7 1.9v.2c-.5 1 1.8 3 5.8 5.4v-7.5"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#ad1519",
                d: "M295.4 282c.4-1.2-3.8-3.6-9.7-5.8-2.8-1-5-2-7.8-3.2-8.3-3.7-14.4-7.9-13.6-9.4v-.2c-.4.4-1 8-1 8-.8 1.3 4.8 5.5 12.4 9.1 2.4 1.2 7.6 3 10 4 4.3 1.4 8.7 4.3 8.3 5.3l1.4-7.7"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeLinejoin: "round",
                strokeWidth: ".4",
                d: "M295.4 282c.4-1.2-3.8-3.6-9.7-5.8-2.8-1-5-2-7.8-3.2-8.3-3.7-14.4-7.9-13.6-9.4v-.2c-.4.4-1 8-1 8-.8 1.3 4.8 5.5 12.4 9.1 2.4 1.2 7.6 3 10 4 4.3 1.4 8.7 4.3 8.3 5.3l1.4-7.7z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#c8b100",
                d: "M263.9 254.4c.6-2.3 1.4-4.4 2.1-6.6h-.5a5.2 5.2 0 01-.5.1 52.8 52.8 0 01-1.4 4.8c-1-1.4-2-2.7-2.7-4.1l-1 .2h-1a131.3 131.3 0 014 5.7h.5l.5-.1m6-6.6h-1a8 8 0 01-.8 0v6.2h4.2v-.7h-2.6l.1-5.5m6.8 1l2 .3v-.7l-5.8-.5v.8a19.3 19.3 0 012 0l-.4 5.6h1.6l.5-5.4m2.4 6c.3 0 .5 0 .8.2l.8.2.7-2.9.6 1.2.8 2.1 1 .2c.4 0 .7.2 1 .3l-.3-.7c-.4-1-1-1.9-1.3-2.9 1 0 1.9-.3 2.1-1.2.1-.6 0-1-.7-1.5-.4-.3-1.2-.4-1.7-.5l-2.4-.5-1.4 6m3-5.2c.7.2 1.5.3 1.5 1v.5c-.3.9-1 1.2-2 .9l.5-2.4m8 7l-.2 2 .8.5.9.5.5-7a3.4 3.4 0 01-.7-.3l-6.1 3.8.5.3.4.2 1.7-1.2 2.3 1.3zm-1.7-1.5l2-1.4-.2 2.3-1.8-1"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".1",
                d: "M182.2 192.4c0-1 1-2 2-2s2.2 1 2.2 2c0 1.1-1 2-2.1 2a2 2 0 01-2.1-2z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#ad1519",
                stroke: "#000",
                strokeWidth: ".3",
                d: "M205.7 175.4c6.3 0 12 1 15.7 2.4a31.7 31.7 0 0014.6 2.3c2.7 0 6.5.8 10.3 2.4a27.3 27.3 0 017.4 4.7l-1.5 1.4-.4 3.8-4.1 4.7-2 1.8-5 3.9-2.5.2-.7 2.1-31.6-3.7-31.7 3.7-.8-2.1-2.5-.2-4.9-4-2-1.7-4.1-4.7-.5-3.8-1.5-1.4a27.6 27.6 0 017.5-4.7 26 26 0 0110.2-2.4c2 .2 4.2.1 6.6-.2a30 30 0 008-2c3.7-1.5 9-2.5 15.5-2.5z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#c8b100",
                stroke: "#000",
                strokeWidth: ".4",
                d: "M206.2 217.1c-11.8 0-22.4-1.4-29.9-3.6a1.1 1.1 0 01-.8-1.2c0-.5.3-1 .8-1.2a109 109 0 0129.9-3.6c11.7 0 22.3 1.4 29.8 3.6a1.3 1.3 0 010 2.4c-7.5 2.2-18 3.6-29.8 3.6"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#ad1519",
                d: "M206.1 215.6c-10.6 0-20.2-1.2-27.5-3.1 7.3-2 16.9-3 27.5-3.1a115 115 0 0127.6 3c-7.3 2-17 3.2-27.6 3.2"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".1",
                d: "M206.9 215.7v-6.3m-1.7 6.3v-6.3"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".2",
                d: "M203.6 215.7v-6.3m-1.6 6.3v-6.3"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".3",
                d: "M200.6 215.7v-6.3m-2.8 5.9v-5.7m1.3 5.8v-6m-3.8 5.6v-5.2m1.3 5.4v-5.6"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".4",
                d: "M192 214.8V210m1 4.7V210m1.2 5v-5m-3.4 4.7v-4.5"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".5",
                d: "M189.7 214.5v-4.2m-1.2 4.1v-4"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".6",
                d: "M186 214v-3m1.3 3.2v-3.5m-2.5 3.1V211"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".7",
                d: "M183.7 213.6v-2.3m-1.3 2v-1.8m-1.2 1.6v-1.3"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".9",
                d: "M179.8 212.8v-.7"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".1",
                d: "M213.7 215.3v-5.8m-2.9 6v-6.1m-2.1 6.2v-6.3"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#c8b100",
                stroke: "#000",
                strokeWidth: ".4",
                d: "M206 207.4a108 108 0 00-30 3.9c.6-.3.5-1-.3-3-1-2.5-2.4-2.4-2.4-2.4 8.3-2.5 20-4 32.8-4a123 123 0 0133 4s-1.5-.1-2.5 2.3c-.8 2-.8 2.8-.2 3-7.5-2.2-18.4-3.7-30.3-3.7"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#c8b100",
                stroke: "#000",
                strokeWidth: ".4",
                d: "M206.1 201.9c-12.9 0-24.5 1.5-32.8 4a1 1 0 01-1.3-.6 1 1 0 01.7-1.3 121 121 0 0133.4-4.2c13.2 0 25.2 1.7 33.5 4.2.6.2.9.8.7 1.3-.2.5-.8.8-1.3.6-8.4-2.5-20-4-32.9-4"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeLinejoin: "round",
                strokeWidth: ".4",
                d: "M206.1 215.6c-10.6 0-20.2-1.2-27.5-3.1 7.3-2 16.9-3 27.5-3.1a115 115 0 0127.6 3c-7.3 2-17 3.2-27.6 3.2z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#fff",
                stroke: "#000",
                strokeWidth: ".4",
                d: "M197 204.8c0-.5.4-1 1-1 .5 0 1 .5 1 1s-.4 1-1 1a1 1 0 01-1-1"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#ad1519",
                stroke: "#000",
                strokeWidth: ".4",
                d: "M206.1 205.6H203a1 1 0 010-2h6.4c.5 0 1 .5 1 1s-.5 1-1 1h-3.2"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#058e6e",
                stroke: "#000",
                strokeWidth: ".4",
                d: "M190.3 206.5l-2.3.2c-.6.1-1-.3-1.2-.8a1 1 0 011-1.1l2.2-.3 2.4-.3c.5 0 1 .3 1.1.9.1.5-.3 1-.9 1l-2.3.4"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#fff",
                stroke: "#000",
                strokeWidth: ".4",
                d: "M181 206.7c0-.6.5-1 1.1-1 .6 0 1 .4 1 1 0 .5-.4 1-1 1a1 1 0 01-1-1"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#ad1519",
                stroke: "#000",
                strokeWidth: ".4",
                d: "M174 208.5l1.2-1.6 3.3.4-2.6 2-1.8-.8"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#058e6e",
                stroke: "#000",
                strokeWidth: ".4",
                d: "M222 206.5l2.3.2c.5.1 1-.3 1.1-.8a1 1 0 00-.9-1.1l-2.2-.3-2.4-.3a1 1 0 00-1.1.9c-.1.5.3 1 .9 1l2.3.4"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#fff",
                stroke: "#000",
                strokeWidth: ".4",
                d: "M213.3 204.8c0-.5.4-1 1-1s1 .5 1 1-.4 1-1 1a1 1 0 01-1-1m15.8 1.9c0-.6.5-1 1-1 .6 0 1.1.4 1.1 1 0 .5-.4 1-1 1a1 1 0 01-1-1"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#ad1519",
                stroke: "#000",
                strokeWidth: ".4",
                d: "M238.2 208.5l-1.1-1.6-3.3.4 2.6 2 1.8-.8"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".4",
                d: "M177.3 212.8c7.4-2.1 17.6-3.4 28.8-3.4 11.3 0 21.4 1.3 28.9 3.4"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#c8b100",
                d: "M182.3 183.8l1.4 1 2-3.2a7.4 7.4 0 01-3.6-7.2c.2-4.1 5.2-7.6 11.7-7.6 3.3 0 6.3 1 8.5 2.4 0-.6 0-1.2.2-1.8a17.4 17.4 0 00-8.7-2.1c-7.4 0-13.2 4.1-13.5 9.1a8.9 8.9 0 003 7.6l-1 1.8"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".4",
                d: "M182.3 183.8l1.4 1 2-3.2a7.4 7.4 0 01-3.6-7.2c.2-4.1 5.2-7.6 11.7-7.6 3.3 0 6.3 1 8.5 2.4 0-.6 0-1.2.2-1.8a17.4 17.4 0 00-8.7-2.1c-7.4 0-13.2 4.1-13.5 9.1a8.9 8.9 0 003 7.6l-1 1.8"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#c8b100",
                d: "M182.4 183.8a9.3 9.3 0 01-4-7.3c0-3.2 2-6.1 5.3-8a8.5 8.5 0 00-3.4 6.8 8.9 8.9 0 003 6.7l-.9 1.8"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".4",
                d: "M182.4 183.8a9.3 9.3 0 01-4-7.3c0-3.2 2-6.1 5.3-8a8.5 8.5 0 00-3.4 6.8 8.9 8.9 0 003 6.7l-.9 1.8"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#c8b100",
                d: "M160.1 187.1a8.8 8.8 0 01-2.3-5.9c0-1.3.3-2.6 1-3.8 2-4.2 8.4-7.2 16-7.2 2 0 4 .2 5.9.6l-1 1.4a25.5 25.5 0 00-4.9-.4c-7 0-12.8 2.7-14.5 6.3a7 7 0 00-.7 3.1 7.3 7.3 0 002.7 5.6l-2.6 4.1-1.3-1 1.7-2.8"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".4",
                d: "M160.1 187.1a8.8 8.8 0 01-2.3-5.9c0-1.3.3-2.6 1-3.8 2-4.2 8.4-7.2 16-7.2 2 0 4 .2 5.9.6l-1 1.4a25.5 25.5 0 00-4.9-.4c-7 0-12.8 2.7-14.5 6.3a7 7 0 00-.7 3.1 7.3 7.3 0 002.7 5.6l-2.6 4.1-1.3-1 1.7-2.8z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#c8b100",
                d: "M162.7 173.3a10.5 10.5 0 00-4 4.1 8.6 8.6 0 00-.9 3.8c0 2.3.9 4.3 2.3 5.9l-1.5 2.5a10.4 10.4 0 01-2.3-6.5c0-4 2.5-7.5 6.4-9.8"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".4",
                d: "M162.7 173.3a10.5 10.5 0 00-4 4.1 8.6 8.6 0 00-.9 3.8c0 2.3.9 4.3 2.3 5.9l-1.5 2.5a10.4 10.4 0 01-2.3-6.5c0-4 2.5-7.5 6.4-9.8z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#c8b100",
                d: "M206 164.4c1.7 0 3.2 1.1 3.5 2.6.3 1.4.4 2.9.4 4.5v1.1c.1 3.3.6 6.3 1.3 8.1l-5.2 5-5.2-5c.7-1.8 1.2-4.8 1.3-8.1v-1.1c0-1.6.2-3.1.4-4.5.3-1.5 1.8-2.6 3.5-2.6"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".4",
                d: "M206 164.4c1.7 0 3.2 1.1 3.5 2.6.3 1.4.4 2.9.4 4.5v1.1c.1 3.3.6 6.3 1.3 8.1l-5.2 5-5.2-5c.7-1.8 1.2-4.8 1.3-8.1v-1.1c0-1.6.2-3.1.4-4.5.3-1.5 1.8-2.6 3.5-2.6z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#c8b100",
                d: "M206 166c1 0 1.7.6 1.8 1.4.2 1.2.4 2.6.4 4.2v1c.1 3.2.6 6 1.2 7.7l-3.4 3.2-3.4-3.2c.7-1.7 1.1-4.5 1.2-7.7v-1a28.1 28.1 0 01.4-4.2 2 2 0 011.8-1.4"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".4",
                d: "M206 166c1 0 1.7.6 1.8 1.4.2 1.2.4 2.6.4 4.2v1c.1 3.2.6 6 1.2 7.7l-3.4 3.2-3.4-3.2c.7-1.7 1.1-4.5 1.2-7.7v-1a28.1 28.1 0 01.4-4.2 2 2 0 011.8-1.4z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#c8b100",
                d: "M229.7 183.8l-1.3 1-2-3.2a7.4 7.4 0 003.6-6.3 7 7 0 000-.9c-.2-4.1-5.3-7.6-11.7-7.6a15 15 0 00-8.5 2.4 23 23 0 00-.2-1.8 17.4 17.4 0 018.7-2.1c7.4 0 13.2 4.1 13.4 9.1a8.9 8.9 0 01-3 7.6l1 1.8"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".4",
                d: "M229.7 183.8l-1.3 1-2-3.2a7.4 7.4 0 003.6-6.3 7 7 0 000-.9c-.2-4.1-5.3-7.6-11.7-7.6a15 15 0 00-8.5 2.4 23 23 0 00-.2-1.8 17.4 17.4 0 018.7-2.1c7.4 0 13.2 4.1 13.4 9.1a8.9 8.9 0 01-3 7.6l1 1.8"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#c8b100",
                d: "M229.6 183.8a9.1 9.1 0 004.1-7.3c0-3.2-2.1-6.1-5.3-8a8.5 8.5 0 013.4 6.8 8.9 8.9 0 01-3.2 6.7l1 1.8"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".4",
                d: "M229.6 183.8a9.1 9.1 0 004.1-7.3c0-3.2-2.1-6.1-5.3-8a8.5 8.5 0 013.4 6.8 8.9 8.9 0 01-3.2 6.7l1 1.8"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#c8b100",
                d: "M252 187.1a8.8 8.8 0 002.2-5.9 8.7 8.7 0 00-.9-3.8c-2-4.2-8.4-7.2-16-7.2a29 29 0 00-6 .6l1 1.4a25.4 25.4 0 015-.4c7 0 12.8 2.7 14.4 6.3.5 1 .7 2 .7 3.1a7.3 7.3 0 01-2.6 5.6l2.5 4.1 1.3-1-1.7-2.8"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".4",
                d: "M252 187.1a8.8 8.8 0 002.2-5.9 8.7 8.7 0 00-.9-3.8c-2-4.2-8.4-7.2-16-7.2a29 29 0 00-6 .6l1 1.4a25.4 25.4 0 015-.4c7 0 12.8 2.7 14.4 6.3.5 1 .7 2 .7 3.1a7.3 7.3 0 01-2.6 5.6l2.5 4.1 1.3-1-1.7-2.8z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#c8b100",
                d: "M249.3 173.3a10.6 10.6 0 014 4.1 8.7 8.7 0 01.9 3.8 8.8 8.8 0 01-2.3 5.9l1.6 2.5a10.4 10.4 0 002.3-6.5c0-4-2.6-7.5-6.5-9.8"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".4",
                d: "M249.3 173.3a10.6 10.6 0 014 4.1 8.7 8.7 0 01.9 3.8 8.8 8.8 0 01-2.3 5.9l1.6 2.5a10.4 10.4 0 002.3-6.5c0-4-2.6-7.5-6.5-9.8z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#fff",
                d: "M204.2 181.4c0-1 .8-1.8 1.8-1.8s1.9.8 1.9 1.8-.9 1.7-1.9 1.7a1.8 1.8 0 01-1.8-1.7"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".4",
                d: "M204.2 181.4c0-1 .8-1.8 1.8-1.8s1.9.8 1.9 1.8-.9 1.7-1.9 1.7a1.8 1.8 0 01-1.8-1.7z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#fff",
                stroke: "#000",
                strokeWidth: ".4",
                d: "M204.2 178c0-1 .8-1.8 1.8-1.8s1.9.8 1.9 1.8-.9 1.7-1.9 1.7a1.8 1.8 0 01-1.8-1.7m.4-3.7c0-.7.6-1.3 1.4-1.3.8 0 1.5.6 1.5 1.3 0 .8-.7 1.4-1.5 1.4s-1.4-.6-1.4-1.4m.4-3.3c0-.5.4-1 1-1s1 .5 1 1-.4 1-1 1a1 1 0 01-1-1m.2-2.8c0-.5.4-.8.8-.8.5 0 .9.3.9.8 0 .4-.4.8-.9.8a.8.8 0 01-.8-.8"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#c8b100",
                stroke: "#000",
                strokeWidth: ".4",
                d: "M206.2 191.8l1.2.2a4.6 4.6 0 004.5 6 4.7 4.7 0 004.4-3c.1 0 .5-1.7.7-1.7.2 0 .1 1.8.2 1.7.3 2.3 2.4 3.8 4.7 3.8a4.6 4.6 0 004.7-5l1.5-1.5.7 2a4 4 0 00-.4 1.9 4.4 4.4 0 004.5 4.2c1.6 0 3-.7 3.8-1.9l.9-1.2v1.5c0 1.5.6 2.8 2 3 0 0 1.7.1 4-1.6 2.1-1.7 3.3-3.1 3.3-3.1l.2 1.7s-1.8 2.8-3.8 4c-1 .6-2.7 1.3-4 1-1.4-.2-2.4-1.3-3-2.6a6.7 6.7 0 01-3.3 1 6.5 6.5 0 01-6.1-3.7 7 7 0 01-10.4-.3 7 7 0 01-4.6 1.8 6.9 6.9 0 01-5.7-3 6.9 6.9 0 01-5.7 3 7 7 0 01-4.7-1.8 7 7 0 01-10.4.3 6.5 6.5 0 01-6 3.7 6.7 6.7 0 01-3.4-1c-.6 1.3-1.5 2.4-3 2.7-1.2.2-2.9-.5-4-1.1-2-1.2-3.8-4-3.8-4l.2-1.7s1.2 1.4 3.4 3.1c2.2 1.8 3.9 1.6 3.9 1.6 1.4-.2 2-1.5 2-3v-1.5l1 1.2a4.6 4.6 0 003.7 2c2.5 0 4.5-2 4.5-4.3a4 4 0 00-.4-2l.8-1.9 1.5 1.5a4.4 4.4 0 000 .6c0 2.4 2 4.4 4.6 4.4 2.4 0 4.4-1.5 4.7-3.8 0 0 0-1.6.2-1.7.2 0 .6 1.7.7 1.6a4.7 4.7 0 004.5 3.1 4.6 4.6 0 004.5-6l1.2-.2"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#fff",
                stroke: "#000",
                strokeWidth: ".4",
                d: "M238.6 197.7c.3-.8 0-1.6-.6-1.8-.5-.2-1.2.3-1.5 1.1-.3.8 0 1.6.6 1.8.5.2 1.2-.3 1.5-1.1m-20.5-4c0-.8-.3-1.6-1-1.6-.5-.1-1 .5-1.2 1.4-.1.8.3 1.5.9 1.6.6 0 1.2-.6 1.3-1.4m-23.9 0c0-.8.4-1.6 1-1.6.6-.1 1.1.5 1.2 1.4.1.8-.3 1.5-.9 1.6-.6 0-1.1-.6-1.2-1.4m-20.6 4c-.2-.8 0-1.6.6-1.8.6-.2 1.2.3 1.5 1.1.3.8 0 1.6-.5 1.8-.6.2-1.3-.3-1.6-1.1"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#c8b100",
                stroke: "#000",
                strokeWidth: ".4",
                d: "M182.7 184a5.1 5.1 0 012.2 2.9s0-.3.6-.6 1-.3 1-.3l-.1 1.3-.3 2.2a7.4 7.4 0 01-.7 1.6 1.9 1.9 0 00-1.5-.4 1.8 1.8 0 00-1.2.9s-.7-.6-1.2-1.3l-1.1-2-.7-1.1s.5-.2 1.1 0c.6 0 .8.2.8.2a4.9 4.9 0 011-3.4m.4 9.8a1.8 1.8 0 01-.6-1c0-.5 0-.9.3-1.2 0 0-.9-.5-1.8-.7-.7-.2-2-.2-2.3-.2h-1l.2.5c.2.5.5.7.5.7a5 5 0 00-3 2 5.3 5.3 0 003.5 1l-.2.8v.6l1-.4c.3-.1 1.5-.5 2-1 .8-.4 1.5-1.1 1.5-1.1m2.7-.5a1.6 1.6 0 00.2-1.1 1.7 1.7 0 00-.6-1l1.4-1.3a10 10 0 012-.9l1.1-.4v.6a5.7 5.7 0 01-.2.8 5 5 0 013.4 1 5 5 0 01-2.9 2 6.4 6.4 0 00.7 1.2h-1c-.4 0-1.6 0-2.3-.2a11 11 0 01-1.8-.7"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#ad1519",
                stroke: "#000",
                strokeWidth: ".4",
                d: "M182.2 192.4c0-1 1-2 2-2s2.2 1 2.2 2c0 1.1-1 2-2.1 2a2 2 0 01-2.1-2"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#c8b100",
                stroke: "#000",
                strokeWidth: ".4",
                d: "M206.1 180.8a5.7 5.7 0 011.9 3.7s.2-.3.9-.5c.7-.3 1.2-.2 1.2-.2l-.5 1.4-.8 2.4a8.2 8.2 0 01-1 1.7 2.1 2.1 0 00-1.7-.7c-.6 0-1.2.3-1.6.7 0 0-.6-.7-1-1.7l-.8-2.4-.5-1.4 1.2.2c.7.2.9.5.9.5 0-1.4.8-2.8 1.8-3.7"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#c8b100",
                stroke: "#000",
                strokeWidth: ".4",
                d: "M204.6 191.8a2 2 0 01-.5-1.2c0-.5.1-1 .4-1.3 0 0-.8-.7-1.8-1-.7-.4-2-.7-2.5-.7l-1.2-.2.2.6.4.9a5.9 5.9 0 00-3.7 1.7c1 .9 2.3 1.6 3.7 1.6l-.4 1-.2.6 1.2-.2c.4-.1 1.8-.4 2.5-.7 1-.4 1.9-1 1.9-1m3 0a1.9 1.9 0 00.1-2.6s.9-.7 1.8-1a8 8 0 012.5-.7l1.2-.3-.1.7-.4.9c1.4 0 2.7.8 3.6 1.7a5.9 5.9 0 01-3.6 1.6 6.9 6.9 0 00.5 1.6l-1.2-.2-2.5-.7c-1-.4-1.8-1-1.8-1m22-8a5.2 5.2 0 00-2.2 3l-.7-.6c-.6-.3-1-.3-1-.3l.2 1.3c0 .3 0 1.3.3 2.2.2 1 .6 1.6.6 1.6a2 2 0 011.5-.4c.6.1 1 .5 1.3.9l1.1-1.3c.6-.8 1-1.7 1.1-2l.7-1.1s-.4-.2-1 0c-.7 0-1 .2-1 .2a4.9 4.9 0 00-1-3.4m-.3 9.8c.3-.3.5-.6.6-1a1.6 1.6 0 00-.2-1.2s.8-.5 1.7-.7c.7-.2 2-.2 2.3-.2h1.1l-.3.5a6.2 6.2 0 01-.4.7 5 5 0 012.9 2 5.3 5.3 0 01-3.5 1l.2.8v.6l-1-.4c-.3-.1-1.4-.5-2-1-.8-.4-1.4-1.1-1.4-1.1m-2.8-.5a1.7 1.7 0 01-.2-1.1c0-.5.3-.8.6-1 0 0-.6-.8-1.4-1.3-.6-.4-1.7-.8-2-.9a171.4 171.4 0 01-1-.4v.6c0 .5.2.8.2.8a5.2 5.2 0 00-3.5 1c.7.9 1.7 1.7 3 2 0 0-.3.2-.5.7l-.3.5h1c.4 0 1.7 0 2.3-.2a11.1 11.1 0 001.8-.7"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#ad1519",
                stroke: "#000",
                strokeWidth: ".4",
                d: "M226 192.4c0-1 1-2 2-2s2.1 1 2.1 2a2 2 0 01-2 2 2 2 0 01-2.1-2m23.2 4.4c-.4-.5-1.4-.4-2.2.2-.8.7-1 1.6-.5 2.2.5.5 1.5.4 2.3-.3.7-.6 1-1.6.5-2"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#c8b100",
                stroke: "#000",
                strokeWidth: ".4",
                d: "M246.3 198l.7-1c.7-.6 1.8-.7 2.3-.2l.1.2s1-2 2.3-2.6c1.3-.7 3.4-.5 3.4-.5a2.8 2.8 0 00-2.9-2.8 3 3 0 00-2.4 1l-.2-1s-1.3.3-1.9 1.8c-.6 1.5 0 3.6 0 3.6s-.3-.9-.7-1.5a8 8 0 00-2.4-1.6l-1.3-.7-.1.5a5 5 0 000 .8 7.9 7.9 0 00-3.7.5 4.7 4.7 0 002.5 2.2l-.8.7a4 4 0 00-.4.5l1.3.2 2.5.2a14.5 14.5 0 001.7-.2m-80.3 0c0-.4-.3-.7-.7-1-.7-.7-1.7-.8-2.2-.3l-.2.3s-1-2-2.3-2.7c-1.2-.7-3.3-.5-3.3-.5a2.8 2.8 0 012.8-2.8c1 0 1.9.4 2.4 1l.2-1s1.3.3 2 1.8c.5 1.5-.1 3.6-.1 3.6s.3-.9.8-1.5a8 8 0 012.4-1.6l1.3-.7v1.3a7.9 7.9 0 013.7.5 4.7 4.7 0 01-2.5 2.2l.8.7.4.5-1.2.2-2.6.2a14.7 14.7 0 01-1.7-.2"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#ad1519",
                stroke: "#000",
                strokeWidth: ".4",
                d: "M163 196.8c.6-.5 1.6-.4 2.4.3.7.6 1 1.5.4 2-.5.6-1.5.5-2.2-.2-.8-.6-1-1.6-.5-2m41-6.3c0-1.1.9-2 2-2s2.1.9 2.1 2c0 1-1 2-2 2a2 2 0 01-2.1-2"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#005bbf",
                stroke: "#000",
                strokeWidth: ".3",
                d: "M201.8 160.6c0-2.2 1.9-4 4.3-4s4.2 1.8 4.2 4-1.9 4-4.3 4a4.1 4.1 0 01-4.2-4"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#c8b100",
                stroke: "#000",
                strokeWidth: ".3",
                d: "M205 149.3v2.2h-2.4v2.2h2.3v6.3H202l-.2.6c0 .6.1 1.1.3 1.6h7.9c.2-.5.3-1 .3-1.6l-.2-.6h-2.8v-6.3h2.3v-2.2h-2.3v-2.2h-2.4z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#ccc",
                d: "M206.5 330.6a82 82 0 01-35.5-8.2 22.7 22.7 0 01-12.8-20.4v-32h96.4v32a22.7 22.7 0 01-12.8 20.4 81 81 0 01-35.3 8.2"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".5",
                d: "M206.5 330.6a82 82 0 01-35.5-8.2 22.7 22.7 0 01-12.8-20.4v-32h96.4v32a22.7 22.7 0 01-12.8 20.4 81 81 0 01-35.3 8.2z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#ccc",
                d: "M206.3 270h48.3v-53.5h-48.3V270z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".5",
                d: "M206.3 270h48.3v-53.5h-48.3V270z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#ad1519",
                d: "M206.3 302c0 12.6-10.7 22.9-24 22.9s-24.2-10.3-24.2-23v-32h48.2v32"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#c8b100",
                stroke: "#000",
                strokeWidth: ".5",
                d: "M168.6 320.9c1.5.8 3.6 2 5.8 2.6l-.1-54.7h-5.7v52z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#c8b100",
                stroke: "#000",
                strokeLinejoin: "round",
                strokeWidth: ".5",
                d: "M158 301.6a24.4 24.4 0 005.5 15v-47.5h-5.4v32.5z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#c7b500",
                stroke: "#000",
                strokeWidth: ".5",
                d: "M179.4 324.7a26.6 26.6 0 005.6 0v-55.9h-5.6v56z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#c8b100",
                stroke: "#000",
                strokeWidth: ".5",
                d: "M190 323.5a19 19 0 005.8-2.5v-52.2H190l-.1 54.7z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#ad1519",
                d: "M158.1 270h48.2v-53.5H158V270z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".5",
                d: "M158.1 270h48.2v-53.5H158V270z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#c8b100",
                stroke: "#000",
                strokeWidth: ".5",
                d: "M201 316c2.4-2 4.6-6.8 5.4-12.2l.1-35H201l.1 47.3z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".5",
                d: "M206.3 302c0 12.6-10.7 22.9-24 22.9s-24.2-10.3-24.2-23v-32h48.2v32"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#ad1519",
                d: "M254.6 270v32c0 12.6-10.8 22.9-24.1 22.9s-24.2-10.3-24.2-23v-32h48.3"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".5",
                d: "M254.6 270v32c0 12.6-10.8 22.9-24.1 22.9s-24.2-10.3-24.2-23v-32h48.3"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#c8b100",
                d: "M215.1 294.1l.1.5c0 .6-.5 1-1.1 1a1 1 0 01-1.1-1v-.5h-1.5a2.5 2.5 0 001.8 2.9v3.9h1.6V297a2.6 2.6 0 001.7-1.6h4.4v-1.2h-6m21.8 0v1.2h-4a2.5 2.5 0 01-.3.6l4.6 5.2-1.2 1-4.6-5.3-.2.1v8.7h-1.6V297h-.2l-4.8 5.2-1.2-1 4.7-5.3a2.1 2.1 0 01-.2-.4h-4V294h13zm2.6 0v1.2h4.4c.3.8.9 1.4 1.7 1.6v3.9h1.6V297a2.5 2.5 0 001.8-2.4 2 2 0 000-.5h-1.6l.1.5c0 .6-.5 1-1 1-.7 0-1.2-.4-1.2-1a1 1 0 01.1-.5h-5.9m-6.7 22.1a15.6 15.6 0 003.7-1l.8 1.4a17.6 17.6 0 01-4.3 1.2 2.6 2.6 0 01-2.6 2 2.6 2.6 0 01-2.5-2 17.5 17.5 0 01-4.6-1.2l.8-1.4c1.3.5 2.6.9 4 1a2.5 2.5 0 011.5-1.3v-6.7h1.6v6.7c.7.2 1.3.7 1.6 1.4zm-11-2.2l-.8 1.4a16.6 16.6 0 01-3.6-3.1c-.9.2-1.8 0-2.5-.5a2.4 2.4 0 01-.3-3.5l.1-.1a15.3 15.3 0 01-1.3-4.8h1.7a13.1 13.1 0 001 4c.5 0 1 0 1.4.2l4.1-4.5 1.3 1-4.1 4.5c.5.9.5 2-.1 2.8a15.2 15.2 0 003.1 2.6zm-6-4.8c.3-.4 1-.5 1.5 0s.5 1 .1 1.4a1.2 1.2 0 01-1.6.1 1 1 0 010-1.5zm-2.2-4.5l-1.6-.3-.3-4.3 1.7-.6v2.5c0 1 0 1.8.2 2.7zm1.4-5.3l1.7.4v2.2c0-.8.3 2.1.3 2.1l-1.7.6a14 14 0 01-.3-2.7v-2.6zm5.6 13.7a15.7 15.7 0 004.8 2.6l.4-1.6a13.7 13.7 0 01-4-2l-1.2 1m-.8 1.4a17.4 17.4 0 004.8 2.6l-1.2 1.1a18.7 18.7 0 01-4-2l.4-1.7m2.2-9.4l1.6.7 3-3.3-1-1.4-3.6 4m-1.3-1l-1-1.4 3-3.3 1.6.7-3.6 4m18.1 9.9l.8 1.4a16.7 16.7 0 003.6-3.1c.9.2 1.8 0 2.5-.5a2.4 2.4 0 00.3-3.5l-.1-.1a15 15 0 001.3-4.8h-1.7a13.3 13.3 0 01-1 4 3 3 0 00-1.4.2l-4.1-4.5-1.3 1 4.1 4.5a2.4 2.4 0 00.1 2.8 15 15 0 01-3.1 2.6zm6-4.8a1.2 1.2 0 00-1.5 0 1 1 0 00-.1 1.4 1.2 1.2 0 001.6.1 1 1 0 000-1.5zm2.2-4.5l1.6-.3.3-4.3-1.7-.6v2.5c0 1 0 1.9-.2 2.8zm-1.4-5.3l-1.7.4v2.2c0-.8-.3 2.1-.3 2.1l1.7.6.3-2.7v-2.6m-5.6 13.7a15.7 15.7 0 01-4.8 2.6l-.4-1.6a13.7 13.7 0 004-2l1.2 1m.8 1.4a17.4 17.4 0 01-4.8 2.6l1.2 1.1a18.6 18.6 0 004-2l-.4-1.7m-2.2-9.4l-1.6.7-2.9-3.3 1-1.4 3.5 4m1.3-1l1-1.4-3-3.3-1.6.7 3.6 4m-20.1-8.7l.5 1.6h4.5l.5-1.6h-5.5m21.1 0l-.5 1.6h-4.5l-.5-1.6h5.5m-11.6 21.9c0-.6.5-1 1.1-1a1 1 0 011.1 1c0 .6-.5 1-1 1a1.1 1.1 0 01-1.2-1zm1.9-7.8l1.7-.4v-4.3l-1.7-.5v5.2m-1.6 0l-1.7-.4v-4.3l1.7-.5v5.2"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#c8b100",
                d: "M211.5 294.2c.2-1 1-1.6 1.8-2V287h1.6v5.3c.8.3 1.5.9 1.7 1.6h4.4v.3h-6a1.2 1.2 0 00-1-.6c-.4 0-.7.3-1 .6h-1.5m12.2 0v-.3h4.1a2.4 2.4 0 01.2-.3l-5-5.7 1.2-1 5 5.6.2-.1V285h1.6v7.3h.3l4.9-5.5 1.2 1-4.9 5.5.3.6h4v.3h-13zm21.6 0a1.1 1.1 0 011-.6c.5 0 .8.3 1 .6h1.6c-.2-1-.9-1.6-1.8-2V287h-1.6v5.3c-.8.3-1.4.8-1.7 1.6h-4.4v.3h6m-30.2-15l6 6.8 1.3-1-6.1-6.7.3-.6h4.4V276h-4.4a2.6 2.6 0 00-2.5-1.7 2.6 2.6 0 00-2.7 2.5 2.5 2.5 0 001.8 2.4v5.2h1.6v-5.2h.3zm32 0v5.3h-1.7v-5.2a2.5 2.5 0 01-.4-.2l-6 6.8-1.3-1 6.2-6.9-.1-.3h-4.5V276h4.5a2.6 2.6 0 012.4-1.7 2.6 2.6 0 012.7 2.5 2.5 2.5 0 01-1.9 2.4zm-16.1 0v3.3h-1.7v-3.2a2.6 2.6 0 01-1.7-1.6h-4V276h4a2.6 2.6 0 012.5-1.7c1.2 0 2.2.7 2.5 1.7h4v1.6h-4a2.5 2.5 0 01-1.6 1.6zm-17.8 4l-1.7.4v4.3l1.7.5v-5.2m1.6 0l1.7.4v4.3l-1.7.5v-5.2m30.6 0l-1.7.4v4.3l1.7.5v-5.2m1.6 0l1.7.4v4.3l-1.7.5v-5.2m-25.5.8l1.6-.7 2.9 3.3-1 1.4-3.5-4m-1.3 1l-1 1.4 3 3.3 1.6-.7-3.6-4m18.5-1.1l-1.6-.7-3 3.3 1 1.4 3.6-4m1.2 1l1 1.4-3 3.3-1.5-.7 3.5-4m-20.3 9l.5-1.6h4.5l.5 1.6h-5.5m-6.7-17c0-.6.5-1 1.2-1a1 1 0 011 1c0 .6-.4 1-1 1a1.1 1.1 0 01-1.2-1zm12.1.8l-.5 1.6h-4.5l-.5-1.6h5.5m0-1.6l-.5-1.6h-4.5l-.5 1.6h5.5m15.7 17.8l-.5-1.6h-4.5l-.5 1.6h5.5m4.4-17c0-.6.5-1 1.1-1a1 1 0 011.1 1c0 .6-.5 1-1 1a1.1 1.1 0 01-1.2-1zm-16.1 0c0-.6.5-1 1.1-1a1 1 0 011.1 1c0 .6-.5 1-1.1 1a1.1 1.1 0 01-1.1-1zm6.2.8l.5 1.6h4.6l.5-1.6h-5.6m0-1.6l.5-1.6h4.6l.5 1.6h-5.6m-5.9 5l-1.7.5v4.3l1.7.5V281m1.7 0l1.6.5v4.3l-1.6.5V281"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#c8b100",
                strokeWidth: ".3",
                d: "M232.7 316.3a15.6 15.6 0 003.7-1.1l.8 1.4a17.6 17.6 0 01-4.3 1.2 2.6 2.6 0 01-2.6 2 2.6 2.6 0 01-2.5-2 17.5 17.5 0 01-4.6-1.2l.8-1.4c1.3.5 2.6.9 4 1a2.5 2.5 0 011.5-1.3v-6.7h1.6v6.7c.7.2 1.3.7 1.6 1.4zm-4.7-20.4a2.3 2.3 0 01-.2-.5h-4V294h4a2.6 2.6 0 01.2-.4l-5-5.6 1.2-1 5 5.5a2.2 2.2 0 01.2 0V285h1.7v7.3h.2l4.9-5.5 1.2 1-4.9 5.5.3.6h4v1.5h-4c0 .2-.2.4-.3.5l4.7 5.3-1.3 1-4.6-5.3-.2.1v8.7h-1.6V297l-.2-.1-4.8 5.3-1.2-1 4.7-5.3m-12.8-16.7l6 6.8 1.3-1-6.1-6.7.3-.6h4.4V276h-4.4a2.6 2.6 0 00-2.5-1.7 2.6 2.6 0 00-2.6 2.5 2.5 2.5 0 001.7 2.4v5.2h1.6v-5.2h.3zm6.5 34.8l-.8 1.4a16.6 16.6 0 01-3.6-3.1c-.9.2-1.8 0-2.5-.5a2.4 2.4 0 01-.3-3.5l.1-.1a15.3 15.3 0 01-1.2-4.8h1.6a13.1 13.1 0 001 4c.5 0 1 0 1.4.2l4.1-4.5 1.3 1-4.1 4.5c.6.9.5 2-.1 2.8a15.2 15.2 0 003.1 2.6zm-8.4-13.1V297a2.5 2.5 0 01-1.8-2.4c0-1 .8-2 1.8-2.4V287h1.6v5.3c.8.2 1.5.8 1.7 1.6h4.4v1.5h-4.4a2.6 2.6 0 01-1.6 1.6v3.9h-1.7m2.3 8.3c.4-.4 1.1-.5 1.6 0s.5 1 .1 1.4a1.2 1.2 0 01-1.6.1 1 1 0 010-1.5zm-2-4.5l-1.7-.3-.3-4.3 1.7-.6v2.5c0 1 0 1.8.3 2.7zm1.4-5.3l1.6.4v2.2c0-.8.3 2.1.3 2.1l-1.7.6-.3-2.7v-2.6zm5.5 13.7a15.7 15.7 0 004.8 2.6l.4-1.6a13.7 13.7 0 01-4-2l-1.2 1m-.8 1.4a17.4 17.4 0 004.8 2.6l-1.2 1.1a18.7 18.7 0 01-4-2l.4-1.7"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#c8b100",
                strokeWidth: ".3",
                d: "M221.9 305.1l1.6.7 3-3.3-1-1.4-3.6 4m-1.3-1l-1-1.4 3-3.3 1.6.7-3.6 4m-7.6-9.5c0-.6.5-1 1-1 .7 0 1.2.5 1.2 1 0 .6-.5 1.1-1.1 1.1a1 1 0 01-1.1-1zm25.7 19.4l.8 1.4a16.7 16.7 0 003.6-3.1c.9.2 1.8 0 2.6-.5a2.4 2.4 0 00.2-3.5l-.1-.1a15 15 0 001.3-4.8h-1.7a13.3 13.3 0 01-1 4 3 3 0 00-1.4.2l-4.1-4.5-1.3 1 4.1 4.5a2.4 2.4 0 00.1 2.8 15 15 0 01-3 2.6zm8.4-13.1V297a2.5 2.5 0 001.8-2.4c0-1-.7-2-1.8-2.4V287h-1.6v5.3c-.8.2-1.4.8-1.7 1.6h-4.4v1.5h4.4c.3.8.9 1.3 1.7 1.6v3.9h1.6zm-2.3 8.3a1.2 1.2 0 00-1.6 0 1 1 0 00-.1 1.4 1.2 1.2 0 001.6.1 1 1 0 000-1.5zm2-4.5l1.7-.3.3-4.3-1.7-.6v2.5c0 1 0 1.8-.2 2.7zm-1.3-5.3l-1.7.4v2.2c0-.8-.3 2.1-.3 2.1l1.7.6.3-2.7v-2.6m1.6-20.1v5.2h-1.6v-5.2a2.3 2.3 0 01-.4-.2l-6 6.8-1.2-1 6-7v-.2h-4.5V276h4.4a2.6 2.6 0 012.5-1.7 2.6 2.6 0 012.6 2.5 2.5 2.5 0 01-1.8 2.4zm-16 0v3.2h-1.7v-3.2a2.6 2.6 0 01-1.7-1.6h-4V276h4c.4-1 1.3-1.7 2.5-1.7s2.2.7 2.5 1.7h4v1.6h-4a2.5 2.5 0 01-1.6 1.6zm8.8 33.8a15.7 15.7 0 01-4.8 2.6l-.4-1.6a13.7 13.7 0 004-2l1.2 1m.8 1.4a17.4 17.4 0 01-4.8 2.6l1.2 1.1a18.7 18.7 0 004-2l-.4-1.7m-27.4-31.4l-1.7.5v4.3l1.7.5v-5.2m1.7 0l1.6.4v4.3l-1.6.5V283m30.5 0l-1.7.5v4.3l1.7.5V283"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#c8b100",
                strokeWidth: ".3",
                d: "M247.1 283.1l1.7.5v4.3l-1.7.5V283m-8.6 22l-1.6.7-2.9-3.3 1-1.4 3.5 4m1.3-1l1-1.4-3-3.3-1.6.7 3.6 4m-18.2-20l1.6-.7 3 3.3-1 1.4-3.6-4m-1.3 1l-1 1.4 3 3.3 1.6-.7-3.6-4m18.5-1.1l-1.6-.7-3 3.3 1 1.4 3.6-4m1.2 1l1 1.4-3 3.2-1.5-.6 3.5-4m-20.3 9l.5-1.6h4.5l.5 1.6h-5.5m0 1.5l.5 1.6h4.5l.5-1.6h-5.5M213 277c0-.6.5-1 1.2-1 .6 0 1 .4 1 1s-.4 1-1 1a1 1 0 01-1.2-1zm12.1.8l-.5 1.6h-4.5l-.5-1.6h5.5m0-1.6l-.5-1.6h-4.5l-.5 1.6h5.5m20.1 18.5c0-.5.5-1 1.1-1 .6 0 1.1.5 1.1 1 0 .6-.5 1.1-1 1.1a1 1 0 01-1.2-1zm-4.4-.7l-.5-1.6h-4.5l-.5 1.6h5.5m0 1.5l-.5 1.6h-4.5l-.5-1.6h5.5m-11.6 21.9c0-.6.5-1 1.1-1 .6 0 1.1.4 1.1 1s-.5 1-1 1a1.1 1.1 0 01-1.2-1zm1.9-7.8l1.7-.4v-4.3l-1.7-.5v5.2m-1.6 0l-1.7-.4v-4.3l1.7-.5v5.2m15.7-32.6c0-.6.5-1 1.1-1a1 1 0 011.1 1c0 .6-.5 1-1 1a1.1 1.1 0 01-1.2-1zm-16.1 0c0-.6.5-1 1.1-1a1 1 0 011.1 1c0 .6-.5 1-1 1a1.1 1.1 0 01-1.2-1zm6.2.8l.5 1.6h4.6l.5-1.6h-5.5m0-1.6l.4-1.6h4.6l.5 1.6h-5.5m-6 5l-1.6.5v4.3l1.6.5V281m1.7 0l1.6.5v4.3l-1.6.5V281"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#058e6e",
                d: "M227.7 294.7a2.6 2.6 0 012.6-2.5 2.6 2.6 0 012.6 2.5 2.6 2.6 0 01-2.6 2.4c-1.4 0-2.6-1-2.6-2.4"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#db4446",
                d: "M230.9 229.7v-.6l.1-.3-2.3-.1a5.9 5.9 0 01-2.3-1.2c-.8-.7-1.1-1-1.6-1.2-1.3-.2-2.3.4-2.3.4s1 .4 1.7 1.3 1.5 1.3 1.8 1.4c.6.2 2.6 0 3.1.1l1.8.2"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".4",
                d: "M230.9 229.7v-.6l.1-.3-2.3-.1a5.9 5.9 0 01-2.3-1.2c-.8-.7-1.1-1-1.6-1.2-1.3-.2-2.3.4-2.3.4s1 .4 1.7 1.3 1.5 1.3 1.8 1.4c.6.2 2.6 0 3.1.1l1.8.2z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#ed72aa",
                stroke: "#000",
                strokeWidth: ".4",
                d: "M238.1 227.5v1.4c.2.6-.1 1.2 0 1.5 0 .4.1.6.3.9l.2.9-.7-.5-.6-.4v1c.1.2.3.8.6 1.1l1 1.3c.2.5.1 1.4.1 1.4s-.4-.7-.8-.8l-1.2-.7s.7.8.7 1.5c0 .8-.3 1.6-.3 1.6s-.3-.7-.8-1.1l-1-.9s.4 1.2.4 2v2.3l-.9-1-1-.7c0-.2.5.6.6 1.1 0 .5.3 2.3 1.8 4.5 1 1.3 2.3 3.6 5.3 2.9 3-.8 1.9-4.8 1.3-6.7a16.8 16.8 0 01-1-4.6c0-.8.6-2.9.5-3.3a8 8 0 01.2-3.1c.4-1.3.7-1.8.9-2.3.2-.6.4-.9.4-1.3l.1-1.3.7 1.3.1 1.5s.1-1 1-1.6c.8-.6 1.8-1.1 2-1.4.3-.3.3-.5.3-.5s0 1.8-.6 2.6l-1.7 2s.7-.3 1.2-.3h.9s-.6.4-1.4 1.6c-.8 1-.5 1.2-1 2.1-.6 1-1 1-1.7 1.5-1 .8-.5 4.2-.4 4.7.2.5 2 4.5 2 5.5s.2 3.2-1.5 4.6c-1.1 1-3 1-3.4 1.2-.4.3-1.2 1.1-1.2 2.8 0 1.7.6 2 1 2.4.6.5 1.2.2 1.3.6.2.3.2.5.5.7.2.2.3.4.2.8 0 .3-.8 1.1-1.1 1.7l-.8 2.4c0 .2-.1 1 .1 1.3 0 0 .9 1 .3 1.2-.4.2-.8-.2-1-.2l-.9.5c-.3-.1-.3-.3-.4-.8l-.1-.7c-.2 0-.3.2-.4.5 0 .2 0 .8-.3.8-.2 0-.5-.4-.8-.5-.2 0-.8-.2-.8-.4 0-.3.4-.9.7-1 .4 0 .8-.3.5-.5s-.5-.2-.7 0-.8 0-.7-.2v-.8c0-.2-.4-.5.1-.8.6-.3.8.2 1.4.1.6 0 .8-.3 1-.6.2-.3.2-1-.2-1.4-.4-.5-.7-.5-.9-.8l-.3-.9v2.2l-.7-.8c-.3-.3-.6-1.3-.6-1.3v1.3c0 .4.3.7.2.8-.1.1-.8-.7-1-.8a3.7 3.7 0 01-1-1l-.4-1.4a4.2 4.2 0 010-1.5l.4-1h-1.4c-.7 0-1.2-.3-1.5.2-.3.5-.2 1.5.2 2.8.3 1.2.5 1.9.4 2.1a3 3 0 01-.7.8h-.9a2.5 2.5 0 00-1.2-.3h-1.3l-1.1-.3c-.3.1-.8.3-.6.7.2.6-.2.7-.5.7l-.9-.2c-.4-.1-.9 0-.8-.4 0-.4.2-.4.4-.7.2-.3.2-.5 0-.5h-.6c-.2.2-.5.5-.8.4-.2-.1-.4-.4-.4-1s-.7-1.2 0-1.1c.5 0 1.3.4 1.4 0 .2-.3 0-.4-.2-.7s-.8-.4-.3-.7l.7-.5c.1-.2.4-.8.7-.6.6.2 0 .7.6 1.3.6.7 1 1 2 .8 1 0 1.3-.2 1.3-.5l-.1-1v-1s-.4.3-.5.6l-.4.8v-2a8 8 0 00-.2-.8l-.3.9-.1 1s-.7-.5-.5-1.5c.1-.7-.1-1.6.1-2 .2-.3.7-1.5 2-1.6h2.6l2-.3s-2.8-1.4-3.5-1.9a9.5 9.5 0 01-2-2l-.6-1.6s-.5 0-1 .3a5 5 0 00-1.2 1l-.7 1 .1-1.2v-.8s-.4 1.2-1 1.7l-1.4 1v-.8l.2-1s-.4.8-1.1 1c-.7 0-1.8 0-1.9.4 0 .5.2 1 0 1.4 0 .3-.4.5-.4.5l-.8-.4c-.4 0-.7.2-.7.2s-.3-.4-.2-.7c.1-.2.7-.6.5-.8l-.8.2c-.3.1-.8.3-.8-.2 0-.4.2-.7 0-1 0-.3 0-.5.2-.6l1.2-.1c0-.2-.2-.5-.8-.6-.6-.1-.8-.5-.5-.8.3-.2.3-.3.5-.6.1-.2.2-.7.7-.5.5.3.4.8 1 1a4 4 0 002-.2l1.5-1 1.5-1-1-.8c-.3-.3-.7-.9-1-1a8.3 8.3 0 00-1.8-.6 9 9 0 01-1.7-.5l.8-.3c.2-.2.6-.6.8-.6h.3-1.4c-.3-.1-1-.6-1.3-.6l-.8.1s.8-.4 1.4-.5l1-.1s-.9-.3-1.1-.6l-.6-1c-.2-.1-.3-.5-.6-.5l-1 .3c-.4 0-.6-.2-.6-.6l-.1-.5c-.2-.3-.6-.8-.2-1h1.4c0-.2-.5-.6-.8-.8-.4-.2-1-.5-.7-.8l.8-.5c.2-.3.3-1 .7-.7.4.2.8 1.2 1.1 1.1.3 0 .3-.8.3-1 0-.4 0-1 .2-.9.3 0 .5.4 1 .5.4 0 1-.1 1 .2 0 .3-.3.7-.6 1-.3.3-.4 1-.3 1.4.2.5.7 1.2 1.2 1.4.4.3 1.2.5 1.7.9.5.3 1.7 1.2 2.1 1.3l.8.4s.5-.2 1.1-.2c.7 0 2.1 0 2.6-.2.6-.2 1.3-.6 1-1-.1-.6-1.3-1-1.2-1.4 0-.4.5-.4 1.2-.4.8 0 1.8.1 2-1 .2-1 .2-1.5-.8-1.8-1-.2-1.8-.2-2-1-.2-.7-.4-.9-.2-1.1.3-.2.6-.3 1.4-.4.8 0 1.6 0 1.9-.2.2-.2.3-.7.6-.9.3-.2 1.4-.4 1.4-.4s1.4.7 2.7 1.7a15 15 0 012.2 2.1"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M228.1 226.8l-.2-.6v-.3s.8 0 .7.3c0 .2-.2.2-.3.3l-.2.3"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".3",
                d: "M228.1 226.8l-.2-.6v-.3s.8 0 .7.3c0 .2-.2.2-.3.3l-.2.3z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M232 225.4v-.4s.7 0 1 .3c.5.4.9 1 .9 1l-.8-.4h-.5l-.3-.1v-.3h-.3"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".1",
                d: "M232 225.4v-.4s.7 0 1 .3c.5.4.9 1 .9 1l-.8-.4h-.5l-.3-.1v-.3h-.3z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".3",
                d: "M237.3 231.3l-.4-.7a8 8 0 01-.3-.4"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#db4446",
                d: "M217.4 226.6s.5.4.8.4h.8s.2-.5.1-.8c-.2-1.2-1.2-1.4-1.2-1.4s.3.7.1 1a2 2 0 01-.6.8"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".4",
                d: "M217.4 226.6s.5.4.8.4h.8s.2-.5.1-.8c-.2-1.2-1.2-1.4-1.2-1.4s.3.7.1 1a2 2 0 01-.6.8z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#db4446",
                d: "M215.2 227.6s-.4-.7-1.3-.6c-.8 0-1.4.8-1.4.8h1.2c.3.3.4 1 .4 1l.7-.6a7.2 7.2 0 00.4-.6"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".4",
                d: "M215.2 227.6s-.4-.7-1.3-.6c-.8 0-1.4.8-1.4.8h1.2c.3.3.4 1 .4 1l.7-.6a7.2 7.2 0 00.4-.6z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#db4446",
                d: "M214.2 230.6s-.8.1-1.2.6c-.4.5-.3 1.3-.3 1.3s.4-.5.9-.5l1 .2-.1-.8-.3-.8"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".4",
                d: "M214.2 230.6s-.8.1-1.2.6c-.4.5-.3 1.3-.3 1.3s.4-.5.9-.5l1 .2-.1-.8-.3-.8z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M228.2 230.5l.3-.5.3.5h-.7"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".3",
                d: "M228.2 230.5l.3-.5.3.5h-.7"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M229 230.5l.3-.5.4.5h-.8"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".3",
                d: "M229 230.5l.3-.5.4.5h-.8"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M228.6 227.3l.8.3-.7.4-.1-.6"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".3",
                d: "M228.6 227.3l.8.3-.7.4-.1-.6"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M229.5 227.6l.7.2-.5.4-.2-.6"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".3",
                d: "M229.5 227.6l.7.2-.5.4-.2-.6"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".4",
                d: "M224.2 233.7s-.7.2-1 .6c-.4.5-.3 1-.3 1s.6-.5 1.5-.3l1.2.3 1.3-.3s-.7.8-.7 1.3l.2 1.1c0 .7-.6 1.6-.6 1.6l1-.3a4.6 4.6 0 001.7-.8l.9-1s-.2 1 0 1.4l.2 1.6.8-.6c.2-.1.7-.4.9-.7l.3-1s0 .8.4 1.3l.6 1.6s.3-.8.6-1.1c.3-.4.7-.8.7-1a4.3 4.3 0 00-.1-.9l.4.8m-11 .6s.5-.8 1-1l1.1-.8.9-.4m1 5l1.3-.8a4 4 0 001-1"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#db4446",
                d: "M216.6 240.4s-.4-.5-1.1-.3c-.7 0-1.2.9-1.2.9s.6-.2 1-.1.6.4.6.4l.4-.4.3-.6"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".4",
                d: "M216.6 240.4s-.4-.5-1.1-.3c-.7 0-1.2.9-1.2.9s.6-.2 1-.1.6.4.6.4l.4-.4.3-.6z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#db4446",
                d: "M215.8 243.2s-.6 0-1.1.3c-.5.4-.5 1.2-.5 1.2s.4-.4.8-.3l.9.2v-.6c.2-.4-.1-.8-.1-.8"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".4",
                d: "M215.8 243.2s-.6 0-1.1.3c-.5.4-.5 1.2-.5 1.2s.4-.4.8-.3l.9.2v-.6c.2-.4-.1-.8-.1-.8z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#db4446",
                d: "M217.2 245.8s0 .8.3 1.3c.4.5 1.1.5 1.1.5l-.3-.7c0-.4.3-.8.3-.8s-.3-.3-.7-.3h-.7"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".4",
                d: "M217.2 245.8s0 .8.3 1.3c.4.5 1.1.5 1.1.5l-.3-.7c0-.4.3-.8.3-.8s-.3-.3-.7-.3h-.7zm16 1.3s2 1.2 1.9 2.2c0 1-1 2.3-1 2.3"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#db4446",
                d: "M224.2 252.6s-.4-.6-1.1-.6c-.7 0-1.4.7-1.4.7s.8-.1 1 .2l.5.6.5-.3.5-.6"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".4",
                d: "M224.2 252.6s-.4-.6-1.1-.6c-.7 0-1.4.7-1.4.7s.8-.1 1 .2l.5.6.5-.3.5-.6z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#db4446",
                d: "M222.2 255.3s-1-.1-1.4.3c-.4.5-.4 1.3-.4 1.3s.6-.6 1-.5c.5 0 1 .3 1 .3v-.7l-.3-.7"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".4",
                d: "M222.2 255.3s-1-.1-1.4.3c-.4.5-.4 1.3-.4 1.3s.6-.6 1-.5c.5 0 1 .3 1 .3v-.7l-.3-.7z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#db4446",
                d: "M224 258.1s-.3.7 0 1.1c.3.5 1 .8 1 .8s-.3-.4-.2-.8c.1-.3.7-.8.7-.8l-1.4-.2"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".4",
                d: "M224 258.1s-.3.7 0 1.1c.3.5 1 .8 1 .8s-.3-.4-.2-.8c.1-.3.7-.8.7-.8l-1.4-.2z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#db4446",
                d: "M236 259.3s-.8-.2-1.2 0c-.5.3-.8 1.4-.8 1.4s.7-.6 1.2-.5c.5 0 1 .3 1 .3v-.8l-.2-.4"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".4",
                d: "M236 259.3s-.8-.2-1.2 0c-.5.3-.8 1.4-.8 1.4s.7-.6 1.2-.5c.5 0 1 .3 1 .3v-.8l-.2-.4z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#db4446",
                d: "M236.4 262.2s-.6.6-.4 1.1l.6 1s0-.7.2-1l1-.3-.7-.5a15.8 15.8 0 01-.7-.3"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".4",
                d: "M236.4 262.2s-.6.6-.4 1.1l.6 1s0-.7.2-1l1-.3-.7-.5a15.8 15.8 0 01-.7-.3z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#db4446",
                d: "M239.4 263s-.3.8.2 1.3c.6.5 1 .5 1 .5s-.3-.7-.2-1.1c.1-.5.5-.7.5-.7l-.8-.2-.7.3"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".4",
                d: "M239.4 263s-.3.8.2 1.3c.6.5 1 .5 1 .5s-.3-.7-.2-1.1c.1-.5.5-.7.5-.7l-.8-.2-.7.3z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#ffd691",
                stroke: "#000",
                strokeWidth: ".5",
                d: "M208.8 316.4c2 .6 3 2 3 3.8 0 2.3-2.2 4-5 4-3 0-5.3-1.7-5.3-4 0-1.7 1-3.6 3-3.8l-.2-.4-.7-.7h1.2l.8.5.5-.7c.3-.4.6-.5.6-.5l.6.6.3.5.7-.4.8-.3s0 .4-.2.7l-.1.7"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#058e6e",
                stroke: "#000",
                strokeWidth: ".5",
                d: "M206.3 326.7s-3.8-2.6-5.5-3c-2-.4-4.5 0-5.5 0 0 0 1.2.8 1.8 1.4.5.5 2.3 1.5 3.3 1.8 3 .8 6-.2 6-.2m1 .2s2.4-2.5 5-2.9c3-.4 5 .3 6.2.6l-1.5.8c-.5.3-2 1.5-4 1.6-2 0-4.4-.3-4.8-.2l-.9.1"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#ad1519",
                stroke: "#000",
                strokeWidth: ".5",
                d: "M206.7 323.8a4.8 4.8 0 010-7.1 4.8 4.8 0 011.5 3.5 4.9 4.9 0 01-1.5 3.6"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#058e6e",
                stroke: "#000",
                strokeWidth: ".5",
                d: "M205.7 329s.6-1.5.6-2.7l-.1-2.1h.8s.3 1.1.3 2l-.1 2.4-.7.1-.8.3"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#fff",
                d: "M254 190.7c0-.5.5-1 1-1 .6 0 1.1.5 1.1 1 0 .6-.5 1-1 1a1 1 0 01-1-1"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".4",
                d: "M254 190.7c0-.5.5-1 1-1 .6 0 1.1.5 1.1 1 0 .6-.5 1-1 1a1 1 0 01-1-1z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#fff",
                d: "M255.4 188.2c0-.6.5-1 1.1-1 .6 0 1 .4 1 1s-.4 1-1 1a1 1 0 01-1-1"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".4",
                d: "M255.4 188.2c0-.6.5-1 1.1-1 .6 0 1 .4 1 1s-.4 1-1 1a1 1 0 01-1-1z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#fff",
                d: "M256.4 185.2c0-.5.5-1 1-1 .6 0 1.1.5 1.1 1s-.5 1-1 1a1 1 0 01-1.1-1"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".4",
                d: "M256.4 185.2c0-.5.5-1 1-1 .6 0 1.1.5 1.1 1s-.5 1-1 1a1 1 0 01-1.1-1z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#fff",
                d: "M256.5 182c0-.5.5-1 1-1 .6 0 1.1.5 1.1 1 0 .6-.5 1-1 1a1 1 0 01-1-1"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".4",
                d: "M256.5 182c0-.5.5-1 1-1 .6 0 1.1.5 1.1 1 0 .6-.5 1-1 1a1 1 0 01-1-1z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#fff",
                d: "M255.7 179c0-.6.5-1 1-1 .7 0 1.2.4 1.2 1s-.5 1-1.1 1a1 1 0 01-1-1"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".4",
                d: "M255.7 179c0-.6.5-1 1-1 .7 0 1.2.4 1.2 1s-.5 1-1.1 1a1 1 0 01-1-1z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#fff",
                d: "M254.1 176.1c0-.5.5-1 1-1 .7 0 1.1.5 1.1 1s-.4 1-1 1a1 1 0 01-1-1"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".4",
                d: "M254.1 176.1c0-.5.5-1 1-1 .7 0 1.1.5 1.1 1s-.4 1-1 1a1 1 0 01-1-1z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#fff",
                d: "M252 173.8c0-.6.4-1 1-1s1 .4 1 1-.4 1-1 1a1 1 0 01-1-1"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".4",
                d: "M252 173.8c0-.6.4-1 1-1s1 .4 1 1-.4 1-1 1a1 1 0 01-1-1z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#fff",
                d: "M249.4 171.8c0-.5.5-1 1.1-1a1 1 0 010 2c-.6 0-1-.4-1-1"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".4",
                d: "M249.4 171.8c0-.5.5-1 1.1-1a1 1 0 010 2c-.6 0-1-.4-1-1z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#fff",
                d: "M246.5 170.3c0-.6.4-1 1-1s1 .4 1 1-.4 1-1 1a1 1 0 01-1-1"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".4",
                d: "M246.5 170.3c0-.6.4-1 1-1s1 .4 1 1-.4 1-1 1a1 1 0 01-1-1z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#fff",
                d: "M243.3 169.1c0-.5.5-1 1.1-1a1 1 0 010 2 1 1 0 01-1-1"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".4",
                d: "M243.3 169.1c0-.5.5-1 1.1-1a1 1 0 010 2 1 1 0 01-1-1z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#fff",
                d: "M239.9 168.5c0-.5.4-1 1-1s1 .5 1 1-.4 1-1 1a1 1 0 01-1-1"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".4",
                d: "M239.9 168.5c0-.5.4-1 1-1s1 .5 1 1-.4 1-1 1a1 1 0 01-1-1z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#fff",
                d: "M236.6 168.3c0-.5.4-1 1-1s1 .5 1 1-.4 1-1 1a1 1 0 01-1-1"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".4",
                d: "M236.6 168.3c0-.5.4-1 1-1s1 .5 1 1-.4 1-1 1a1 1 0 01-1-1z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#fff",
                d: "M233.3 168.5c0-.6.5-1 1-1 .7 0 1.1.4 1.1 1s-.4 1-1 1a1 1 0 01-1-1"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".4",
                d: "M233.3 168.5c0-.6.5-1 1-1 .7 0 1.1.4 1.1 1s-.4 1-1 1a1 1 0 01-1-1z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#fff",
                d: "M230.1 168.5c0-.6.5-1 1-1 .6 0 1.1.4 1.1 1s-.5 1-1 1a1 1 0 01-1.1-1"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".4",
                d: "M230.1 168.5c0-.6.5-1 1-1 .6 0 1.1.4 1.1 1s-.5 1-1 1a1 1 0 01-1.1-1z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#fff",
                stroke: "#000",
                strokeWidth: ".4",
                d: "M231.7 171.2c0-.5.5-1 1-1 .7 0 1.1.5 1.1 1s-.4 1-1 1a1 1 0 01-1-1m.6 3.1c0-.6.4-1 1-1s1 .4 1 1c0 .5-.4 1-1 1a1 1 0 01-1-1m0 3c0-.5.6-1 1.1-1a1 1 0 010 2 1 1 0 01-1-1m-1 2.8c0-.5.5-1 1-1 .7 0 1.1.5 1.1 1 0 .6-.4 1-1 1a1 1 0 01-1-1m-1.9 2.6c0-.5.5-1 1-1 .7 0 1.2.5 1.2 1s-.5 1-1.1 1c-.6 0-1-.4-1-1"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#fff",
                d: "M227.6 166.5c0-.5.5-1 1.1-1a1 1 0 010 2 1 1 0 01-1-1"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".4",
                d: "M227.6 166.5c0-.5.5-1 1.1-1a1 1 0 010 2 1 1 0 01-1-1z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#fff",
                d: "M224.8 165c0-.6.4-1 1-1s1 .4 1 1-.4 1-1 1a1 1 0 01-1-1"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".4",
                d: "M224.8 165c0-.6.4-1 1-1s1 .4 1 1-.4 1-1 1a1 1 0 01-1-1z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#fff",
                d: "M221.6 164c0-.6.5-1 1-1 .6 0 1.1.4 1.1 1 0 .5-.5 1-1 1-.6 0-1.1-.5-1.1-1"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".4",
                d: "M221.6 164c0-.6.5-1 1-1 .6 0 1.1.4 1.1 1 0 .5-.5 1-1 1-.6 0-1.1-.5-1.1-1z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#fff",
                d: "M218.3 163.4c0-.5.5-1 1-1 .6 0 1.1.5 1.1 1s-.5 1-1 1a1 1 0 01-1.1-1"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".4",
                d: "M218.3 163.4c0-.5.5-1 1-1 .6 0 1.1.5 1.1 1s-.5 1-1 1a1 1 0 01-1.1-1z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#fff",
                d: "M215 163.5c0-.6.5-1 1.1-1 .6 0 1 .4 1 1 0 .5-.4 1-1 1a1 1 0 01-1-1"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".4",
                d: "M215 163.5c0-.6.5-1 1.1-1 .6 0 1 .4 1 1 0 .5-.4 1-1 1a1 1 0 01-1-1z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#fff",
                d: "M211.7 164c0-.5.5-1 1-1 .7 0 1.1.5 1.1 1s-.4 1-1 1a1 1 0 01-1-1"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".4",
                d: "M211.7 164c0-.5.5-1 1-1 .7 0 1.1.5 1.1 1s-.4 1-1 1a1 1 0 01-1-1z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#fff",
                d: "M208.6 165.1c0-.5.5-1 1-1 .6 0 1.1.5 1.1 1s-.5 1-1 1a1 1 0 01-1.1-1"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".4",
                d: "M208.6 165.1c0-.5.5-1 1-1 .6 0 1.1.5 1.1 1s-.5 1-1 1a1 1 0 01-1.1-1z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#fff",
                d: "M156 190.7c0-.5.4-1 1-1s1 .5 1 1c0 .6-.4 1-1 1a1 1 0 01-1-1"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".4",
                d: "M156 190.7c0-.5.4-1 1-1s1 .5 1 1c0 .6-.4 1-1 1a1 1 0 01-1-1z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#fff",
                d: "M154.5 188.2c0-.6.5-1 1-1 .6 0 1 .4 1 1s-.4 1-1 1a1 1 0 01-1-1"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".4",
                d: "M154.5 188.2c0-.6.5-1 1-1 .6 0 1 .4 1 1s-.4 1-1 1a1 1 0 01-1-1z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#fff",
                d: "M153.5 185.2c0-.5.5-1 1-1 .7 0 1.1.5 1.1 1s-.4 1-1 1a1 1 0 01-1-1"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".4",
                d: "M153.5 185.2c0-.5.5-1 1-1 .7 0 1.1.5 1.1 1s-.4 1-1 1a1 1 0 01-1-1z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#fff",
                d: "M153.4 182c0-.5.5-1 1-1 .6 0 1.1.5 1.1 1 0 .6-.5 1-1 1a1 1 0 01-1-1"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".4",
                d: "M153.4 182c0-.5.5-1 1-1 .6 0 1.1.5 1.1 1 0 .6-.5 1-1 1a1 1 0 01-1-1z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#fff",
                d: "M154.2 179c0-.6.5-1 1-1 .6 0 1 .4 1 1s-.4 1-1 1a1 1 0 01-1-1"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".4",
                d: "M154.2 179c0-.6.5-1 1-1 .6 0 1 .4 1 1s-.4 1-1 1a1 1 0 01-1-1z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#fff",
                d: "M155.8 176.1c0-.5.5-1 1-1 .6 0 1.1.5 1.1 1s-.5 1-1 1a1 1 0 01-1-1"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".4",
                d: "M155.8 176.1c0-.5.5-1 1-1 .6 0 1.1.5 1.1 1s-.5 1-1 1a1 1 0 01-1-1z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#fff",
                d: "M158 173.8c0-.6.4-1 1-1s1 .4 1 1-.4 1-1 1a1 1 0 01-1-1"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".4",
                d: "M158 173.8c0-.6.4-1 1-1s1 .4 1 1-.4 1-1 1a1 1 0 01-1-1z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#fff",
                d: "M160.5 171.8c0-.5.4-1 1-1s1 .5 1 1-.4 1-1 1a1 1 0 01-1-1"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".4",
                d: "M160.5 171.8c0-.5.4-1 1-1s1 .5 1 1-.4 1-1 1a1 1 0 01-1-1z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#fff",
                d: "M163.5 170.3c0-.6.4-1 1-1s1 .4 1 1-.4 1-1 1a1 1 0 01-1-1"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".4",
                d: "M163.5 170.3c0-.6.4-1 1-1s1 .4 1 1-.4 1-1 1a1 1 0 01-1-1z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#fff",
                d: "M166.6 169.1c0-.5.5-1 1-1a1 1 0 010 2 1 1 0 01-1-1"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".4",
                d: "M166.6 169.1c0-.5.5-1 1-1a1 1 0 010 2 1 1 0 01-1-1z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#fff",
                d: "M170 168.5c0-.5.5-1 1.1-1a1 1 0 010 2c-.6 0-1-.4-1-1"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".4",
                d: "M170 168.5c0-.5.5-1 1.1-1a1 1 0 010 2c-.6 0-1-.4-1-1z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#fff",
                d: "M173.4 168.3c0-.5.4-1 1-1s1 .5 1 1-.4 1-1 1a1 1 0 01-1-1"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".4",
                d: "M173.4 168.3c0-.5.4-1 1-1s1 .5 1 1-.4 1-1 1a1 1 0 01-1-1z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#fff",
                d: "M176.6 168.5c0-.6.5-1 1-1 .6 0 1.1.4 1.1 1s-.5 1-1 1a1 1 0 01-1.1-1"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".4",
                d: "M176.6 168.5c0-.6.5-1 1-1 .6 0 1.1.4 1.1 1s-.5 1-1 1a1 1 0 01-1.1-1z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#fff",
                d: "M179.8 168.5c0-.6.5-1 1-1 .7 0 1.2.4 1.2 1s-.5 1-1.1 1a1 1 0 01-1-1"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".4",
                d: "M179.8 168.5c0-.6.5-1 1-1 .7 0 1.2.4 1.2 1s-.5 1-1.1 1a1 1 0 01-1-1z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#fff",
                stroke: "#000",
                strokeWidth: ".4",
                d: "M178.2 171.2c0-.5.5-1 1-1 .7 0 1.1.5 1.1 1s-.4 1-1 1a1 1 0 01-1-1m-.7 3.1c0-.6.4-1 1-1s1 .4 1 1c0 .5-.4 1-1 1a1 1 0 01-1-1m-.2 3c0-.5.5-1 1-1 .7 0 1.1.5 1.1 1s-.4 1-1 1a1 1 0 01-1-1m.9 2.8c0-.5.5-1 1-1 .6 0 1.1.5 1.1 1 0 .6-.5 1-1 1a1 1 0 01-1.1-1m1.8 2.6c0-.5.5-1 1-1a1 1 0 010 2 1 1 0 01-1-1"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#fff",
                d: "M182.3 166.5c0-.5.5-1 1-1a1 1 0 010 2 1 1 0 01-1-1"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".4",
                d: "M182.3 166.5c0-.5.5-1 1-1a1 1 0 010 2 1 1 0 01-1-1z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#fff",
                d: "M185.2 165c0-.6.4-1 1-1s1 .4 1 1-.4 1-1 1a1 1 0 01-1-1"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".4",
                d: "M185.2 165c0-.6.4-1 1-1s1 .4 1 1-.4 1-1 1a1 1 0 01-1-1z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#fff",
                d: "M188.3 164c0-.6.5-1 1-1 .7 0 1.1.4 1.1 1 0 .5-.4 1-1 1s-1-.5-1-1"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".4",
                d: "M188.3 164c0-.6.5-1 1-1 .7 0 1.1.4 1.1 1 0 .5-.4 1-1 1s-1-.5-1-1z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#fff",
                d: "M191.6 163.4c0-.5.5-1 1-1 .7 0 1.1.5 1.1 1s-.4 1-1 1a1 1 0 01-1-1"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".4",
                d: "M191.6 163.4c0-.5.5-1 1-1 .7 0 1.1.5 1.1 1s-.4 1-1 1a1 1 0 01-1-1z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#fff",
                d: "M194.9 163.5c0-.6.4-1 1-1s1 .4 1 1c0 .5-.4 1-1 1a1 1 0 01-1-1"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".4",
                d: "M194.9 163.5c0-.6.4-1 1-1s1 .4 1 1c0 .5-.4 1-1 1a1 1 0 01-1-1z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#fff",
                d: "M198.2 164c0-.5.5-1 1-1 .7 0 1.1.5 1.1 1s-.4 1-1 1a1 1 0 01-1-1"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".4",
                d: "M198.2 164c0-.5.5-1 1-1 .7 0 1.1.5 1.1 1s-.4 1-1 1a1 1 0 01-1-1z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#fff",
                d: "M201.3 165.1c0-.5.5-1 1-1 .7 0 1.1.5 1.1 1s-.4 1-1 1a1 1 0 01-1-1"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".4",
                d: "M201.3 165.1c0-.5.5-1 1-1 .7 0 1.1.5 1.1 1s-.4 1-1 1a1 1 0 01-1-1z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#c8b100",
                stroke: "#000",
                strokeWidth: ".4",
                d: "M174.7 228.9h-1v-1h-1.5v3.6h1.6v2.5h-3.4v7h1.8v14.3h-3.5v7.3h27.2v-7.3h-3.5V241h1.8v-7h-3.4v-2.5h1.6V228h-1.6v.9h-.8v-1h-1.6v1h-1.1v-1h-1.6v3.6h1.6v2.5H184v-7.8h1.7v-3.5H184v.9h-1v-1h-1.5v1h-.9v-1H179v3.6h1.7v7.8h-3.3v-2.5h1.6V228h-1.6v.9h-.9v-1h-1.8v1zm-6 33.7H196m-27.3-1.8H196m-27.3-1.8H196m-27.3-1.7H196m-27.3-2H196m-23.8-1.6h20.2m-20.2-1.8h20.2m-20.2-2h20.2m-20.2-1.7h20.2m-20.2-1.8h20.2m-20.2-1.8h20.2m-20.2-1.7h20.2m-22-1.8h23.8m-23.8-1.8h23.8m-23.8-1.8h23.8m-23.8-1.8h23.8m-20.4-1.7h17m-10.2-1.8h3.4m-3.4-1.8h3.4m-3.4-1.8h3.4m-3.4-1.7h3.4m-5.1-2.2h6.8m-12 7.5h3.6m-5-2.2h6.6m-6.7 32.6v-1.8m0-1.8v-1.7m-1.8 1.7v1.8m3.4 0V259m1.7 3.6v-1.8m0-1.8v-1.7m0-2v-1.6m0-1.8v-2m-1.7 7.4v-2m-3.4 2v-2m7 0v2m1.5-2v-1.6m-5.1-1.8v1.8m3.5-1.8v1.8m3.3-1.8v1.8M179 252v-2m1.7-1.7v1.7m0-5.3v1.8m-1.7-3.6v1.8m1.7-3.5v1.7m-3.3-1.7v1.7m-3.5-1.7v1.7m-1.6-3.5v1.8m3.3-1.8v1.8m3.4-1.8v1.8m1.7-3.6v1.8m-3.3-1.8v1.8m-3.5-1.8v1.8m-1.6-3.6v1.8m6.7-1.8v1.8m-3.4-5.3v1.8m15.3-1.8h-3.5m5-2.2h-6.6m6.7 32.6v-1.8m0-1.8v-1.7m1.8 1.7v1.8m-3.4 0V259m-1.7 3.6v-1.8m0-1.8v-1.7m0-2v-1.6m0-1.8v-2m1.7 7.4v-2m3.4 2v-2m-7 0v2m-1.5-2v-1.6m5.1-1.8v1.8m-3.5-1.8v1.8m-3.3-1.8v1.8m1.7-1.8v-2m-1.7-1.7v1.7m0-5.3v1.8m1.7-3.6v1.8m-1.7-3.5v1.7m3.3-1.7v1.7m3.5-1.7v1.7m1.6-3.5v1.8m-3.3-1.8v1.8m-3.4-1.8v1.8m-1.7-3.6v1.8m3.3-1.8v1.8m3.5-1.8v1.8m1.6-3.6v1.8m-6.7-1.8v1.8m3.4-5.3v1.8m-7 18v-2m0-5.4v-1.8m0 5.4v-1.8m0-5.3v-1.8m0-1.8v-1.7m0-3.6v-1.8m0-1.7v-1.8m-8.3 4.6h3.5m3.3-5.3h3.4m3.3 5.3h3.5"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#c8b100",
                stroke: "#000",
                strokeWidth: ".4",
                d: "M186.8 262.6v-4.7c0-.8-.4-3.5-4.6-3.5-4 0-4.4 2.7-4.4 3.5v4.7h9z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#c8b100",
                stroke: "#000",
                strokeWidth: ".4",
                d: "M179.3 258.2l-2.2-.3c0-.9.2-2.2.9-2.6l2 1.5c-.3.2-.7 1-.7 1.4zm6 0l2.2-.3c0-.9-.2-2.2-.9-2.6l-2 1.5c.3.2.7 1 .7 1.4zm-2.2-2.3l1-2a5.3 5.3 0 00-2-.4l-1.7.4 1.1 2h1.6zm-4.2-5.5v-4.9c0-1.3-1-2.4-2.5-2.4s-2.4 1-2.4 2.4v4.9h4.9zm6.8 0v-4.9c0-1.3 1-2.4 2.5-2.4s2.4 1 2.4 2.4v4.9h-4.9zm-1.7-12l.4-4.4h-4.2l.2 4.4h3.6zm3.3 0l-.4-4.4h4.4l-.5 4.4h-3.5zm-10 0l.2-4.4h-4.2l.5 4.4h3.5z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#0039f0",
                d: "M185.3 262.6v-4c0-.7-.5-2.7-3.1-2.7-2.4 0-2.9 2-2.9 2.7v4h6zm-6.9-12.7v-4.2c0-1-.6-2.2-2-2.2s-2 1.1-2 2.2v4.3h4zm7.8 0v-4.2c0-1 .7-2.2 2-2.2s2 1.1 2 2.2v4.3h-4z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#ad1519",
                d: "M190.8 269.8c0-9.7 7-17.6 15.6-17.6s15.6 7.9 15.6 17.6-7 17.5-15.6 17.5-15.6-7.8-15.6-17.5"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".6",
                d: "M190.8 269.8c0-9.7 7-17.6 15.6-17.6s15.6 7.9 15.6 17.6-7 17.5-15.6 17.5-15.6-7.8-15.6-17.5z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#005bbf",
                d: "M195.4 269.7c0-7 5-12.8 11-12.8s11 5.7 11 12.8c0 7.2-5 13-11 13s-11-5.8-11-13"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".6",
                d: "M195.4 269.7c0-7 5-12.8 11-12.8s11 5.7 11 12.8c0 7.2-5 13-11 13s-11-5.8-11-13z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#c8b100",
                d: "M201.2 260.9s-1.3 1.4-1.3 2.7a6 6 0 00.6 2.4c-.2-.5-.8-.8-1.4-.8-.8 0-1.4.6-1.4 1.3l.2.8.5.9c.1-.3.5-.5 1-.5s1 .4 1 1a.9.9 0 010 .2h-1.2v1h1l-.8 1.5 1-.4.8.9.8-.9 1 .4-.7-1.5h1v-1h-1.1a.9.9 0 010-.3 1 1 0 011-1c.4 0 .7.3 1 .6l.4-1 .2-.7a1.4 1.4 0 00-1.4-1.3c-.7 0-1.2.3-1.4.9 0 0 .6-1.2.6-2.5s-1.4-2.7-1.4-2.7"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeLinejoin: "round",
                strokeWidth: ".3",
                d: "M201.2 260.9s-1.3 1.4-1.3 2.7a6 6 0 00.6 2.4c-.2-.5-.8-.8-1.4-.8-.8 0-1.4.6-1.4 1.3l.2.8.5.9c.1-.3.5-.5 1-.5s1 .4 1 1a.9.9 0 010 .2h-1.2v1h1l-.8 1.5 1-.4.8.9.8-.9 1 .4-.7-1.5h1v-1h-1.1a.9.9 0 010-.3 1 1 0 011-1c.4 0 .7.3 1 .6l.4-1 .2-.7a1.4 1.4 0 00-1.4-1.3c-.7 0-1.2.3-1.4.9 0 0 .6-1.2.6-2.5s-1.4-2.7-1.4-2.7z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#c8b100",
                d: "M199.2 269.9h4.1v-1h-4.1v1z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".3",
                d: "M199.2 269.9h4.1v-1h-4.1v1z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#c8b100",
                d: "M211.4 260.9s-1.3 1.4-1.3 2.7c0 1.3.6 2.4.6 2.4-.2-.5-.7-.8-1.4-.8-.8 0-1.4.6-1.4 1.3l.2.8.5.9c.2-.3.5-.5 1-.5a1 1 0 011 1 .9.9 0 010 .2h-1.2v1h1l-.8 1.5 1-.4.8.9.8-.9 1 .4-.7-1.5h1v-1h-1.1a.8.8 0 010-.3 1 1 0 011-1c.4 0 .8.3 1 .6l.4-1 .2-.7a1.4 1.4 0 00-1.4-1.3c-.6 0-1.2.3-1.4.9 0 0 .6-1.2.6-2.5s-1.4-2.7-1.4-2.7"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeLinejoin: "round",
                strokeWidth: ".3",
                d: "M211.4 260.9s-1.3 1.4-1.3 2.7c0 1.3.6 2.4.6 2.4-.2-.5-.7-.8-1.4-.8-.8 0-1.4.6-1.4 1.3l.2.8.5.9c.2-.3.5-.5 1-.5a1 1 0 011 1 .9.9 0 010 .2h-1.2v1h1l-.8 1.5 1-.4.8.9.8-.9 1 .4-.7-1.5h1v-1h-1.1a.8.8 0 010-.3 1 1 0 011-1c.4 0 .8.3 1 .6l.4-1 .2-.7a1.4 1.4 0 00-1.4-1.3c-.6 0-1.2.3-1.4.9 0 0 .6-1.2.6-2.5s-1.4-2.7-1.4-2.7z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#c8b100",
                d: "M209.4 269.9h4.1v-1h-4.1v1z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".3",
                d: "M209.4 269.9h4.1v-1h-4.1v1z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#c8b100",
                d: "M206.3 269.6s-1.3 1.5-1.3 2.8.6 2.4.6 2.4c-.2-.5-.7-.9-1.4-.9-.8 0-1.4.6-1.4 1.4l.2.7.5 1c.1-.4.5-.6 1-.6a1 1 0 011 1 .9.9 0 010 .3h-1.2v1h1l-.8 1.5 1-.4.8.9.8-1 1 .5-.7-1.5h1v-1h-1.1a.9.9 0 010-.3 1 1 0 011-1c.4 0 .7.2.9.6l.5-1 .2-.7a1.4 1.4 0 00-1.4-1.4c-.7 0-1.2.4-1.4 1 0 0 .6-1.2.6-2.5s-1.4-2.7-1.4-2.7"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeLinejoin: "round",
                strokeWidth: ".3",
                d: "M206.3 269.6s-1.3 1.5-1.3 2.8.6 2.4.6 2.4c-.2-.5-.7-.9-1.4-.9-.8 0-1.4.6-1.4 1.4l.2.7.5 1c.1-.4.5-.6 1-.6a1 1 0 011 1 .9.9 0 010 .3h-1.2v1h1l-.8 1.5 1-.4.8.9.8-1 1 .5-.7-1.5h1v-1h-1.1a.9.9 0 010-.3 1 1 0 011-1c.4 0 .7.2.9.6l.5-1 .2-.7a1.4 1.4 0 00-1.4-1.4c-.7 0-1.2.4-1.4 1 0 0 .6-1.2.6-2.5s-1.4-2.7-1.4-2.7z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#c8b100",
                d: "M204.3 278.6h4.1v-1h-4.1v1z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".3",
                d: "M204.3 278.6h4.1v-1h-4.1v1z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#c8b100",
                d: "M237.6 223.4h-.3a1.5 1.5 0 01-.3.4c-.2.2-.6.2-.8 0a.5.5 0 01-.1-.4.5.5 0 01-.5 0c-.3-.1-.3-.5-.1-.7v-.5h-.3l-.1.2c-.2.3-.5.3-.7.2a.6.6 0 010-.2h-.3c-.5.2-.7-1-.7-1.2l-.2.2s.2.7.1 1.2c0 .6-.3 1.2-.3 1.2a9 9 0 012.9 1.6 9 9 0 012.2 2.3l1.2-.5c.6-.2 1.3-.2 1.3-.2l.2-.2c-.3 0-1.5.1-1.5-.4v-.2a.7.7 0 01-.2 0c-.2-.2-.2-.4 0-.7l.2-.1v-.3h-.3l-.2.1c-.2.3-.6.3-.8 0a.4.4 0 01-.1-.4.6.6 0 01-.5 0c-.2-.2-.3-.5 0-.8l.2-.3v-.3"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".3",
                d: "M237.6 223.4h-.3a1.5 1.5 0 01-.3.4c-.2.2-.6.2-.8 0a.5.5 0 01-.1-.4.5.5 0 01-.5 0c-.3-.1-.3-.5-.1-.7v-.5h-.3l-.1.2c-.2.3-.5.3-.7.2a.6.6 0 010-.2h-.3c-.5.2-.7-1-.7-1.2l-.2.2s.2.7.1 1.2c0 .6-.3 1.2-.3 1.2a9 9 0 012.9 1.6 9 9 0 012.2 2.3l1.2-.5c.6-.2 1.3-.2 1.3-.2l.2-.2c-.3 0-1.5.1-1.5-.4v-.2a.7.7 0 01-.2 0c-.2-.2-.2-.4 0-.7l.2-.1v-.3h-.3l-.2.1c-.2.3-.6.3-.8 0a.4.4 0 01-.1-.4.6.6 0 01-.5 0c-.2-.2-.3-.5 0-.8l.2-.3v-.3z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M235.4 224h.2v.3h-.1c-.1 0-.1-.2 0-.2"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".1",
                d: "M235.4 224h.2v.3h-.1c-.1 0-.1-.2 0-.2z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M236.3 224.8l-.3-.2v-.2h.1l.4.3.3.2v.2h-.2l-.3-.3"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".1",
                d: "M236.3 224.8l-.3-.2v-.2h.1l.4.3.3.2v.2h-.2l-.3-.3"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M234.6 223.7l-.2-.2s-.1 0 0-.1l.3.1.3.1v.2h-.1l-.3-.1"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".1",
                d: "M234.6 223.7l-.2-.2s-.1 0 0-.1l.3.1.3.1v.2h-.1l-.3-.1"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M233.7 223h.2v.2h-.2s-.1-.1 0-.2"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".1",
                d: "M233.7 223h.2v.2h-.2s-.1-.1 0-.2z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M237.3 225.5v-.2h-.3l.1.2h.2"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".1",
                d: "M237.3 225.5v-.2h-.3l.1.2h.2z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M237.9 226.2l.2.2h.1c.1 0 0-.1 0-.2l-.2-.2-.2-.2h-.1v.2l.2.2"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".1",
                d: "M237.9 226.2l.2.2h.1c.1 0 0-.1 0-.2l-.2-.2-.2-.2h-.1v.2l.2.2"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M238.8 227v-.3h-.3v.2h.3"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".1",
                d: "M238.8 227v-.3h-.3v.2h.3z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#c8b100",
                d: "M236.2 221.1h-.6l-.1.9v.1h.2l.7-.5-.3-.5"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".3",
                d: "M236.2 221.1h-.6l-.1.9v.1h.2l.7-.5-.3-.5"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#c8b100",
                d: "M234.6 221.6v.5l.9.1h.1v-.2l-.5-.7-.5.3"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".3",
                d: "M234.6 221.6v.5l.9.1h.1v-.2l-.5-.7-.5.3"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#c8b100",
                d: "M236.4 222.6l-.4.3-.6-.7v-.1h1.1v.5"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".3",
                d: "M236.4 222.6l-.4.3-.6-.7v-.1h1.1v.5"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#c8b100",
                d: "M235.3 222a.3.3 0 01.4 0 .3.3 0 010 .3.3.3 0 01-.3 0 .3.3 0 01-.1-.3"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".3",
                d: "M235.3 222a.3.3 0 01.4 0 .3.3 0 010 .3.3.3 0 01-.3 0 .3.3 0 01-.1-.3z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#c8b100",
                d: "M233.2 221.1l-.2-.7-.4-.4s.4-.2.8.1c.4.3 0 .9 0 .9l-.2.1"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".3",
                d: "M233.2 221.1l-.2-.7-.4-.4s.4-.2.8.1c.4.3 0 .9 0 .9l-.2.1z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#c8b100",
                d: "M234.2 221.4l-.4.4-.6-.6v-.2h1v.4"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".3",
                d: "M234.2 221.4l-.4.4-.6-.6v-.2h1v.4"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#c8b100",
                d: "M233.1 221l.3-.1v.3c0 .2-.1.2-.2.2l-.1-.3"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".3",
                d: "M233.1 221l.3-.1v.3c0 .2-.1.2-.2.2l-.1-.3z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#c8b100",
                d: "M238.3 222.5h-.5l-.3.7v.2h.2l.8-.4-.2-.5"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".3",
                d: "M238.3 222.5h-.5l-.3.7v.2h.2l.8-.4-.2-.5"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#c8b100",
                d: "M236.7 222.8v.5l.8.2h.1v-.2l-.4-.7-.5.2"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".3",
                d: "M236.7 222.8v.5l.8.2h.1v-.2l-.4-.7-.5.2"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#c8b100",
                d: "M238.4 224l-.5.2-.4-.7v-.2h.1l.9.2-.1.5"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".3",
                d: "M238.4 224l-.5.2-.4-.7v-.2h.1l.9.2-.1.5"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#c8b100",
                d: "M237.3 223.2h.4a.3.3 0 010 .4.3.3 0 01-.3 0 .3.3 0 010-.4"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".3",
                d: "M237.3 223.2h.4a.3.3 0 010 .4.3.3 0 01-.3 0 .3.3 0 010-.4z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#c8b100",
                d: "M240.2 224.3l.1.5-.8.3h-.2v-.2l.4-.8.5.2"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".3",
                d: "M240.2 224.3l.1.5-.8.3h-.2v-.2l.4-.8.5.2"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#c8b100",
                d: "M240 225.8l-.5.1-.3-.8v-.1h.2l.8.3-.1.5"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".3",
                d: "M240 225.8l-.5.1-.3-.8v-.1h.2l.8.3-.1.5"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#c8b100",
                d: "M238.6 224.3l-.2.5.9.3h.1v-.1l-.3-.8-.5.1"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".3",
                d: "M238.6 224.3l-.2.5.9.3h.1v-.1l-.3-.8-.5.1"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#c8b100",
                d: "M239.5 225.2a.3.3 0 000-.3.3.3 0 00-.4 0 .3.3 0 000 .3.3.3 0 00.4 0"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".3",
                d: "M239.5 225.2a.3.3 0 000-.3.3.3 0 00-.4 0 .3.3 0 000 .3.3.3 0 00.4 0z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#c8b100",
                d: "M240.8 227h.8l.5.3s.1-.4-.3-.7c-.3-.3-.8.2-.8.2l-.2.2"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".3",
                d: "M240.8 227h.8l.5.3s.1-.4-.3-.7c-.3-.3-.8.2-.8.2l-.2.2z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#c8b100",
                d: "M240.3 226.1l-.3.5.8.5v-.1h.2l-.1-1-.6.1"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".3",
                d: "M240.3 226.1l-.3.5.8.5v-.1h.2l-.1-1-.6.1"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#c8b100",
                d: "M241 227s.1-.1 0-.2h-.3c-.2 0-.2.1-.1.2h.3"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".3",
                d: "M241 227s.1-.1 0-.2h-.3c-.2 0-.2.1-.1.2h.3zm38-21.9v.6h-2.4v-.6h1v-1.3h-.7v-.5h.6v-.6h.6v.6h.6v.6h-.6v1.2h1"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: "0",
                d: "M134.4 217.1v-1.2m-.4 1.2v-1.2m-.2 1.2v-1.2m-.3 1.2v-1.2"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".1",
                d: "M133.2 217.1v-1.2m-.5 1.1v-1m.2 1v-1m-.7 1v-1m.2 1v-1m-.9 1v-1m.2 1v-1m.3 1v-1m-.7 1v-1m-.3.9v-.8m-.1.8v-.8m-.5.7v-.6m.2.6v-.6m-.4.5v-.5m-.2.5v-.4m-.3.3v-.3m-.3.3v-.2"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".2",
                d: "M129.2 216.6v-.2"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: "0",
                d: "M135.7 217v-1m-.5 1v-1m-.4 1.2V216m143 1.1V216m-.4 1.1V216m-.3 1.1V216m-.3 1.2V216"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".1",
                d: "M276.6 217.1V216m-.6 1v-1m.3 1v-1m-.8 1v-1m.3 1v-1m-.9 1v-1m.2 1v-1m.2 1v-1m-.6 1v-1m-.3.9v-.8m-.2.8v-.8m-.4.7v-.6m.2.6v-.6m-.5.6v-.6m-.2.5v-.4m-.3.4v-.4m-.2.3v-.2"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: ".2",
                d: "M272.6 216.6v-.2"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                stroke: "#000",
                strokeWidth: "0",
                d: "M279.1 217v-1m-.6 1v-1m-.4 1.1V216"
            })
        ]
    }));
};

;// CONCATENATED MODULE: ./src/components/icons/flags/SAFlagRound.tsx

const SAFlagRound = ({ width ='32px' , height ='32px'  })=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
            width: width,
            height: height,
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M16 32c8.837 0 16-7.163 16-16S24.837 0 16 0 0 7.163 0 16s7.163 16 16 16Z",
                    fill: "#3D9635"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M4.705 9.316c-.053.826-.12 2.29.5 2.438.755.078.34-1.441.611-1.717.052-.134.148-.134.155.034v1.295a.6.6 0 0 0 .431.622c.2-.015.33-.008.407.212.033.742.064 1.484.093 2.226 0 0 .461.155.483-1.252a14.733 14.733 0 0 1-.043-1.673c0-.156.18-.17.308-.085.2.155.286.345.592.268.468-.148.746-.4.754-.805a3.893 3.893 0 0 0-.21-1.152c.02-.071-.093-.247-.069-.318.083.149.21.134.237 0a1.161 1.161 0 0 0-.4-.7c-.166-.163-.41-.128-.5.219-.01.442.126.876.384 1.236.08.197.112.41.095.622a.28.28 0 0 1-.382-.085s-.376-.319-.376-.382c.091-.328.08-.677-.03-1a1.36 1.36 0 0 0-.245-.533c-.092-.12-.218-.12-.278 0-.132.43-.122.891.03 1.315.083.281.217.458.156.458-.052.164-.158.12-.234-.063a5.058 5.058 0 0 1-.129-1.208c-.035-.318-.073-1-.258-1.173-.113-.17-.283-.085-.343.078-.014.306-.008.612.02.918.11.488.187.984.23 1.483.016.7-.358.3-.342-.048.08-.443.076-.896-.013-1.336-.06-.183-.133-.226-.284-.19-.12-.015-.423.36-.508.982-.044.2-.078.403-.1.607-.044.319-.23.544-.362-.05-.116-.43-.184-1.49-.374-1.243",
                    fill: "#fff"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M6.76 12.709c-.667.375-1.315.713-1.97 1.066a2.09 2.09 0 0 1 1.56-1.42c.4.014.3.178.41.354Z",
                    fill: "#fff"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M9.273 8.03a.563.563 0 0 0-.126.042.419.419 0 0 0-.264.516c.19 1.3.311 2.29.5 3.584.033.155-.083.353-.228.34-.249-.192-.31-.58-.735-.56a.884.884 0 0 0-.7.742c-.057.28-.057.569 0 .848a.573.573 0 0 0 .7.2c.186-.085.341-.3.407-.247.041.086-.006.764-.878 1.28-.539.268-.965.338-1.2-.157-.14-.31.011-1.484-.338-1.215-1.038 3.01 2.43 3.434 2.818.127.025-.091.1-.183.157-.162.026.014.044.05.05.12-.08 2.99-2.68 3.188-3.122 2.255a3.141 3.141 0 0 1-.156-1.011.579.579 0 0 0-.106-.332c-.106-.085-.247.149-.279.551-.032.239-.042.48-.03.72.137 2.376 3.487 1.358 4.034-.6a7.514 7.514 0 0 0 .09-1.87h.011l.008-.007c.34.4.8.05.905-.085a.144.144 0 0 1 .232-.027.51.51 0 0 0 .808-.255c.059-.372.097-.747.113-1.123a.899.899 0 0 0-.36.168.117.117 0 0 0-.028.058c-.013.1-.027.212-.043.318a.255.255 0 0 1-.007.027.077.077 0 0 1-.033.03.11.11 0 0 1-.152-.031.108.108 0 0 1-.018-.054c-.079-.4-.409-.468-.61.168-.138.129-.38.15-.407-.027.035-.431-.12-.489-.427-.29-.1-.848-.2-1.653-.3-2.5.13 0 .244.105.363-.058A5.1 5.1 0 0 0 9.38 8.08a.336.336 0 0 0-.024-.029.012.012 0 0 1-.01-.007h-.012c-.006-.007-.016-.007-.017-.014-.016 0-.03-.007-.044 0Zm-.932 4.644a.174.174 0 0 1 .184.127.249.249 0 0 1-.038.226c-.027.05-.115.029-.18.029a.165.165 0 0 1-.164-.092c-.024-.079.042-.157.074-.22.032-.063.006-.014.011-.02a.235.235 0 0 1 .113-.05",
                    fill: "#fff"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M11.608 7.959a.624.624 0 0 0-.234.071.556.556 0 0 0-.074.671c.132.064.264.22.174.3-.37.446-1.341 1.2-1.39 1.336v.014h.008c.24.04.484.043.724.007v-.007c.437-.418.839-.872 1.2-1.357-.049-.049-.1-.085-.149-.134a.1.1 0 0 1 0-.156.485.485 0 0 0 .041-.678.54.54 0 0 0-.3-.064v-.003Zm-.046.392c.061-.007.132.064.168.148.036.084.019.184-.041.205-.06.021-.143-.049-.183-.141-.04-.092-.018-.191.045-.205 0 0 0-.007.011-.007M4.858 14.843a2.436 2.436 0 0 0-.2 1.95.388.388 0 0 0 .419.155c.231-.113.335-.643.278-.833-.077-.142-.138-.163-.217-.043-.161.368-.23.113-.245-.1-.019-.35-.004-.7.044-1.046.041-.289 0-.205-.081-.084M20.674 13.782c-.356-.87-.852-1.725-1.009-2.05-.157-.325-1.348-2.268-1.524-2.494-.388-.516.628.22-.129-.813-.286-.276-.3-.29-.547-.516-.116-.1-.415-.268-.463.014-.027.205-.019.413.025.615.075.188.176.364.3.523a39.601 39.601 0 0 1 3.31 5.978c.164-.084.129-1.109.032-1.257",
                    fill: "#fff"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M19.106 16.68c-.073.084.171.472.49.465.53-.063 1-.4 1.428-1.286.178-.302.29-.64.327-.989a24.344 24.344 0 0 0-.357-5 .882.882 0 0 1 .013-.346c.034-.049.151 0 .212-.113.093-.106-.239-.968-.428-1.3-.067-.149-.09-.247-.2.014a2.085 2.085 0 0 0-.186.947c.253 1.965.33 3.7.5 5.66a.865.865 0 0 1-.124.58 4.96 4.96 0 0 1-1.67 1.371M25.182 19.552c-.383.248-.383.537-.072.544a1.825 1.825 0 0 0 1.59-.855c.152-.348.24-.72.257-1.1a29.166 29.166 0 0 0-.288-5.406 2.687 2.687 0 0 1-.053-.509c.036-.092.207.014.265-.1.094-.1-.443-.883-.635-1.215-.064-.149-.088-.248-.2.021a1.674 1.674 0 0 0-.11.94c.285 2.025.462 4.063.532 6.106-.013.17-.049.339-.106.5-.145.248-.32.479-.519.686-.176.141-.544.282-.663.388",
                    fill: "#fff"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M26.553 14.75c-.006-.5.013-.933-.006-1.308a40.067 40.067 0 0 0-.215-2.07c-.047-.296-.106-.756-.178-1.117a3.404 3.404 0 0 1-.066-.636c.028-.1.15.007.206-.113a4.256 4.256 0 0 0-.5-1.569c-.07-.148-.2-.1-.36.142-.151.155-.1.508-.038.848.416 2.211.618 4.457.604 6.706-.022.177.559-.544.553-.883M23.744 11.98c-.24-.008-.743-.524-.889-.827a.647.647 0 0 1 .028-.446c.09-.063.226-.14.327-.063 0 0 .106.162.086.184.13.07.187.028.2-.036.008-.1-.04-.162-.04-.275.054-.318.373-.36.5-.163.085.171.131.36.133.551 0 .092-.13-.014-.2.007-.069.021-.09.114-.1.2a16.84 16.84 0 0 0-.04.87M19.322 15.308c.068-.686-.022-2.071-.028-2.473-.022-.947-.163-2.778-.226-3.082-.076-.58.209.064.168-.275a3.845 3.845 0 0 0-.709-1.491c-.106-.17-.1-.205-.27.042-.108.38-.1.783.022 1.159.229 1.11.378 2.233.446 3.364.072 1.19.081 2.384.027 3.576.181 0 .47-.332.57-.82",
                    fill: "#fff"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M27.37 14.214c-.42-.8-1.06-1.732-1.228-2.05-.17-.318-1.613-2.692-1.793-2.9-.528-.615.242-.1-.1-.587a4.449 4.449 0 0 0-.624-.678c-.123-.085-.2-.262-.24.028a6.5 6.5 0 0 0-.02.777c.029.176.101.341.21.48a45.22 45.22 0 0 1 3.788 6.184c.16-.084.105-1.11.006-1.25M22.257 21.783a.415.415 0 0 0-.12.735c-3.944 0-10-.07-11.292-.07-.73 0-3.024-.1-3.067-.1a2.227 2.227 0 0 0 2.137.988c1.754 0 9.869-.02 12.176-.02a.985.985 0 0 0 .146.946l.009.007a.013.013 0 0 0 .014.007h.007c.154.043.22-.085.275-.169.59.033 1.18.03 1.77-.007.087.141.175.275.338.254.288-.07.514-.106.524-.763 0 0-.03-1.117-.684-1.046-.155.021-.588.071-.588.071-.5-.064-.873-.07-1.437-.1.053-.07.143-.375.03-.48a.183.183 0 0 0-.134-.043h-.011s-.01-.007-.012-.014v-.007a1.33 1.33 0 0 1-.063-.19h-.013l-.005.001Zm.273 1.598c.572.028 1.112.007 1.69.035a.258.258 0 0 1-.015.325c0 .007-.007.007-.008.007h-.016c-.187-.007-.294-.007-.481-.014 0-.014-.006-.02-.006-.035-.046-.149-.364-.134-.442-.014v.035a.04.04 0 0 0 0 .021 3.621 3.621 0 0 1-.735-.028c-.071-.1-.063-.283.024-.332M12.277 8.639c-.383 1.229.222 2.586.64 2.459.3.134.493-.516.62-1.223.085-.2.148-.22.192-.12-.013.947.06 1.159.275 1.442a.632.632 0 0 0 .91.014c.031-.028.375-.417.375-.417a.204.204 0 0 1 .313-.014c.111.113.1.318.342.452a.676.676 0 0 0 .748-.176c.138-.262.168-.354.231-.453.1-.148.266-.084.266-.035-.015.085-.109.163-.048.31.12.1.147.036.217.015.244-.134.428-.728.428-.728.008-.226-.1-.205-.176-.155-.09.063-.1.085-.192.148-.118.014-.35.106-.462-.092-.119-.24-.119-.58-.21-.82 0-.013-.154-.374-.01-.4.071.015.225.064.251-.084.078-.141-.163-.551-.326-.75a.33.33 0 0 0-.53-.02.71.71 0 0 0-.143.438.755.755 0 0 0 .127.594c.228.36.333.783.3 1.208a.44.44 0 0 1-.39.226c-.1-.028-.27-.078-.36-.813a5.809 5.809 0 0 0-.194-1.717c-.077-.226-.13-.445-.318-.056a.962.962 0 0 0-.11.84c.144.42.185.869.12 1.308a2.35 2.35 0 0 1-.224.36.343.343 0 0 1-.472.07.567.567 0 0 1-.287-.448 7.17 7.17 0 0 0-.047-1.45c-.114-.268-.307-.17-.387-.091a3.445 3.445 0 0 0-.709 1.633c-.11.395-.227.282-.308.12-.2-.205-.212-1.845-.452-1.576",
                    fill: "#fff"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M13.573 11.19c0 .007-.005.007-.01.007v.007c-.026.013-.059.063-.125.12a.684.684 0 0 0-.124.53c.005.036.21.679.388 1.138.15.496.2 1.017.148 1.533a3.59 3.59 0 0 1-1.375 1.612.636.636 0 0 1-.574 0v-.008a.41.41 0 0 1-.155-.368 3.509 3.509 0 0 0 1.383-1.6c.135-.372.148-.779.037-1.16a1.22 1.22 0 0 0-.235-.53v-.007c.077-.042.276.127.31.021a1.735 1.735 0 0 0-.4-.82.312.312 0 0 0-.489-.034c-.165.105-.2.48-.123.813.09.24.333.282.506.776v.007c.033.172.023.35-.03.516a5.484 5.484 0 0 1-1.035 1.088l-.007.008v.008h-.01v-.008a1.152 1.152 0 0 0 0-.162c0-.141.05-.482.046-.544v-.007c-.295.219-.4.883-.45 1.08a13.386 13.386 0 0 0-2.1 1.619c-.259.445 1.77-.523 2-.636 0 0 .005 0 .008.006.043.146.104.287.181.418a1.006 1.006 0 0 0 1.094.4 3.642 3.642 0 0 0 1.583-1.485c.06-.1.157-.177.244-.1a2.43 2.43 0 0 0 2.241 1.323c.253-.347.134-.523.03-.587-.033-.027-.547-.254-.625-.48-.049-.204.07-.388.317-.53a9.771 9.771 0 0 0 2.07-.445 2.2 2.2 0 0 1 .226-.8.36.36 0 0 1 .117-.143v-.028l-.117-.077-2.248-.014a.274.274 0 0 1-.063-.036v-.042a.137.137 0 0 1 .071-.05c.54-.078 1.492-.254 1.554-1.293a.862.862 0 0 0-.79-.982.889.889 0 0 0-.69 1.024c-.019.135.044.41-.082.438-.828.093-1.73.673-1.763 1.09h-.01l-.007.007h-.01l-.01-.008a.242.242 0 0 1-.11-.255 5.438 5.438 0 0 0-.57-2.161c-.114-.134-.166-.184-.2-.191h-.014l-.003.002Zm3.29.924a.25.25 0 0 1 .176.048.251.251 0 0 1 .138.212v.027l-.014.014c-.044.05-.14.043-.236-.021a.27.27 0 0 1-.138-.2v-.009c0-.014.006-.02.01-.02l.006-.014c0-.008 0-.008.011-.014a.072.072 0 0 1 .053-.021l-.006-.002Zm-2.085 2.135h.022c.31.066.625.106.941.12.261.021.39.248.146.347-.244.099-.473.163-.473.559a.591.591 0 0 1 0 .338c0 .008-.006.014-.01.014v.015h-.007l-.01.007a.01.01 0 0 1-.01.007c-.06.006-.143-.064-.207-.093a1.462 1.462 0 0 1-.624-1.038.254.254 0 0 1 .234-.276M7.54 8.651c.261.134.746.078.726-.389a4.86 4.86 0 0 0-.01-.219c-.052-.14-.2-.113-.23.036-.012.042.015.12-.02.148-.037.028-.106.007-.1-.12a.208.208 0 0 0-.043-.113.067.067 0 0 0-.063-.02c-.035.006-.035.013-.05.048a.33.33 0 0 0-.02.106c-.007.05-.025.064-.055.071-.03.007-.023.007-.053-.014-.014-.022-.038-.029-.038-.064a.643.643 0 0 0-.012-.113.116.116 0 0 0-.065-.042c-.143 0-.152.183-.143.254-.012.014-.017.34.175.431",
                    fill: "#fff"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M15.137 12.27c.259.134.875.056.727-.4a2.198 2.198 0 0 0-.016-.22c-.051-.14-.194-.106-.229.036-.008.05.02.127-.017.155-.037.028-.106 0-.1-.127a.188.188 0 0 0-.042-.106.07.07 0 0 0-.059-.02c-.034.006-.034.013-.054.048a.407.407 0 0 0-.019.106c0 .05-.021.064-.052.071-.031.007-.022.007-.052-.014-.03-.02-.038-.028-.038-.064a.314.314 0 0 0-.017-.113.1.1 0 0 0-.063-.042c-.14 0-.148.183-.143.254-.008.007-.014.332.178.431M19.567 10.772c.258.134.745.07.725-.4 0-.035-.008-.176-.01-.22-.056-.133-.2-.105-.23.044-.013.042.014.12-.024.14-.019.029-.1.015-.1-.12a.263.263 0 0 0-.042-.112.115.115 0 0 0-.057-.007c-.034 0-.034.007-.055.042a.434.434 0 0 0-.02.113c0 .043-.019.057-.052.064-.033.007-.027.007-.05-.014a.078.078 0 0 1-.038-.064.558.558 0 0 0-.017-.12.16.16 0 0 0-.063-.028c-.14 0-.153.183-.143.247-.01.014-.016.339.177.43M21.86 14.525a1.967 1.967 0 0 0-.151 1.724c.097.296.294.55.558.714a.364.364 0 0 0 .584-.07c.264-.312.271-1.096.393-1.252.09-.29.307-.24.413-.113.096.15.226.277.379.368a.588.588 0 0 0 .834.063c.22-.139.379-.356.445-.608a24.86 24.86 0 0 0 .033-3.575c-.013-.085-.256-1.47-.256-1.485 0-.015-.035-.706-.06-.869-.006-.07-.02-.092.043-.084.066.07.072.077.114.091.066.015.126-.113.087-.233-.2-.424-.413-.855-.619-1.272-.047-.063-.113-.12-.194.007a.534.534 0 0 0-.15.382c.019.3.066.615.083.92.083.514.165 1.037.248 1.56.077 1.11.1 2.127.176 3.237a2.2 2.2 0 0 1-.267 1.152s-.181.127-.306-.007a4.152 4.152 0 0 1-.454-.679c-.186-.19-.31-.14-.442 0a7.143 7.143 0 0 0-.773 1.64c-.066.113-.245.212-.443-.007a2.58 2.58 0 0 1-.275-1.6M19.684 8.044a1 1 0 0 1 .341.89c-.047.319-.168.672-.258.623-.09-.05.064-.318-.025-.608-.055-.191-.369-.53-.336-.636a.213.213 0 0 1 .278-.27Z",
                    fill: "#fff"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M22.608 14.843a8.719 8.719 0 0 0-.049-1.4c-.014-.367-.372-3.4-.448-3.682-.088-.529.351-.07.3-.38-.15-.39-.527-.962-.644-1.3-.075-.15-.044-.277-.2-.037-.137.429-.185.881-.143 1.33.448 2.1.687 4.24.712 6.387.18 0 .386-.459.476-.918M25.482 11.679c.217.127.34.784.316.975-.04.346-.153.72-.234.67-.08-.05.017-.514-.025-.656-.05-.205-.336-.58-.307-.692-.058-.234.126-.332.25-.3M10.846 13.64c.2.085.32.573.3.714-.04.254-.148.523-.224.5-.076-.023.018-.382-.025-.488-.015-.26-.3-.4-.29-.509-.054-.205.114-.24.242-.212M5.434 7.881c.3.1.316.593.3.742-.04.261-.148.544-.226.51-.078-.036 0-.39-.042-.5-.043-.164-.3-.439-.266-.524-.058-.177.113-.262.237-.226M11.333 10.213a.644.644 0 0 0-.175.8.325.325 0 0 0 .37.128c.226.035.359-.474.359-.474s.007-.14-.257.127c-.114.03-.128-.02-.157-.092a.706.706 0 0 1 .034-.395c.04-.128-.045-.184-.174-.092M13.05 7.69a.954.954 0 0 0-.349.665c-.009.17-.038.17.063.283.075.12.15.106.295.014a.343.343 0 0 0 .142-.226c.036-.2-.184.092-.214-.127-.047-.205.093-.283.228-.488 0-.134 0-.226-.165-.12M14.437 7.967a4.59 4.59 0 0 0-.1.77c-.041.19.181.275.278.028.1-.27.153-.554.157-.841-.044-.29-.22-.275-.335.043M23.167 12.962c.032-.03 1.23-.99 1.23-.99.123-.05.1.5.04.488a4.741 4.741 0 0 1-1.27 1c-.058.043-.118-.374 0-.494M24.262 12.956c.214.12.3.812.274 1 .008.368-.2.664-.286.622-.086-.042.01-.46-.032-.608a3.246 3.246 0 0 1-.2-.7c-.06-.234.114-.361.243-.318M17.123 15.952c.098-.125.213-.237.34-.332a.19.19 0 0 1 .233.049c.02.128-.074.255-.044.43.024.072.044.157.16.122a.745.745 0 0 1 .558-.184c.15 0 .15.282.062.282-.264.073-.52.173-.762.3a.159.159 0 0 1-.221-.035.268.268 0 0 1-.021-.247c.01-.142-.041-.22-.148-.212-.08.056-.15.084-.19-.014-.013-.078-.02-.12.033-.163M25.526 16.327a.187.187 0 0 1 0 .26c-.086.093-.143.135-.229.227-.038.078-.063.19.057.226.223.07.743-.3.743-.318a.187.187 0 0 0 .049-.205c-.049-.063-.158-.028-.231-.028-.038 0-.153-.028-.1-.134.038-.064.07-.13.094-.2.033-.092.007-.148-.124-.2a.976.976 0 0 0-.32 0c-.077.02-.1.064-.118.163.005.155.091.148.181.212",
                    fill: "#fff"
                })
            ]
        })
    }));
};

;// CONCATENATED MODULE: ./src/components/icons/flags/CNFlagRound.tsx

const CNFlagRound = ({ width ='32px' , height ='32px'  })=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
            width: width,
            height: height,
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M16 32c8.837 0 16-7.163 16-15.999S24.837.002 16 .002C7.166.002.002 7.165.002 16.002c0 8.835 7.164 15.999 16 15.999Z",
                    fill: "#D62427"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M0 16C0 7.163 7.163 0 16 0c8.836 0 8.836 32 0 32S0 24.836 0 16Z",
                    fill: "#DC3027"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "m9.23 4.404.746 2.3h2.417l-1.955 1.42.747 2.298-1.955-1.42-1.956 1.42.747-2.299-1.955-1.42h2.417l.747-2.299ZM14.868 3.098l-.235.806.694.473-.84.025-.235.807-.283-.791-.84.025.665-.514-.284-.79.694.473.664-.514ZM14.868 10.32l-.235.806.694.474-.84.024-.235.807-.283-.79-.84.025.665-.514-.284-.79.694.472.664-.514ZM16.915 5.299l-.235.806.694.473-.84.025-.235.807-.284-.791-.84.025.665-.514-.283-.79.694.473.664-.514ZM16.915 8.242l-.235.807.694.473-.84.024-.235.807-.284-.79-.84.025.665-.514-.283-.79.694.472.664-.514Z",
                    fill: "#F8D12E"
                })
            ]
        })
    }));
};

;// CONCATENATED MODULE: ./src/components/icons/flags/DEFlagRound.tsx

const DEFlagRound = ({ width ='32px' , height ='32px'  })=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
            width: width,
            height: height,
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("g", {
                    clipPath: "url(#a)",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            d: "M16 32c8.837 0 16-7.163 16-15.999S24.837.002 16 .002C7.166.002.002 7.165.002 16.002c0 8.835 7.164 15.999 16 15.999Z",
                            fill: "#fff"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            d: "M31.085 10.666h-9.858c.428 3.418.431 7.184.009 10.606h9.87A15.97 15.97 0 0 0 32 16.001a15.96 15.96 0 0 0-.915-5.335Z",
                            fill: "#D32027"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            d: "M21.227 10.666h9.858l-.005-.014C29.032 4.878 23.765.63 17.437.066c2.449 1.343 3.164 5.596 3.79 10.6Z",
                            fill: "#0B0B0B"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            d: "M17.437 31.934c6.34-.565 11.615-4.828 13.654-10.617l.016-.046h-9.871c-.622 5.031-1.34 9.315-3.799 10.663Z",
                            fill: "#F3C515"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            d: "M0 16c0 1.848.317 3.621.893 5.272h21.166c.423-3.422.42-7.188-.008-10.606H.914A15.967 15.967 0 0 0 0 16.001Z",
                            fill: "#DB2727"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            d: "M.92 10.651a.436.436 0 0 0-.006.014h21.137c-.626-5.004-2.165-9.257-4.614-10.6A16.28 16.28 0 0 0 16 0C9.04 0 3.12 4.445.92 10.651Z",
                            fill: "#151515"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            d: "M22.06 21.271H.892l.015.046C3.101 27.539 9.028 32 16 32c.484 0 .963-.024 1.437-.066 2.459-1.348 4.001-5.632 4.622-10.663Z",
                            fill: "#F8D12E"
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("defs", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx("clipPath", {
                        id: "a",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            fill: "#fff",
                            d: "M0 0h32v32H0z"
                        })
                    })
                })
            ]
        })
    }));
};

;// CONCATENATED MODULE: ./src/components/icons/flags/ESFlagRound.tsx

const ESFlagRound = ({ width ='32px' , height ='32px'  })=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
            width: width,
            height: height,
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M16 32c5.119 0 9.673-2.406 12.601-6.146h-8.427C19.086 29.48 18.48 32 16 32ZM20.174 6.147h8.427C25.673 2.407 21.12 0 16 0c2.48 0 3.086 2.52 4.174 6.147Z",
                    fill: "#C42126"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M28.602 6.146h-8.427c1.7 5.67 1.7 14.038 0 19.706H28.6a15.923 15.923 0 0 0 3.4-9.853c0-3.717-1.272-7.136-3.399-9.853Z",
                    fill: "#FFC40C"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M16 32ZM15.051.028Z",
                    fill: "#C42126"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M21.352 25.854H3.399c2.744 3.505 6.917 5.84 11.643 6.119h.01c.314.018.63.028.948.028 2.48 0 4.264-2.521 5.352-6.147ZM3.399 6.147h17.953C20.264 2.521 18.48 0 16 0c-.318 0-.634.01-.949.028h-.009C10.316.309 6.143 2.643 3.4 6.149Z",
                    fill: "#D32030"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M0 16c0 3.718 1.271 7.136 3.399 9.852h17.953c1.7-5.668 1.7-14.037 0-19.706H3.399A15.926 15.926 0 0 0 0 16Z",
                    fill: "#FFD034"
                })
            ]
        })
    }));
};

;// CONCATENATED MODULE: ./src/components/icons/flags/USFlagRound.tsx

const USFlagRound = ({ width ='32px' , height ='32px'  })=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
            width: width,
            height: height,
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("g", {
                    clipPath: "url(#a)",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            d: "M6.877 29.142h18.247v-.001H6.877h.001ZM16 0c-.314 0-.626.011-.935.029h1.87C16.627.011 16.316 0 16 0Z",
                            fill: "#C42126"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            d: "M20.729 5.85h7.64a16.077 16.077 0 0 0-3.13-2.91H19.5c.475.835.883 1.82 1.228 2.91Z",
                            fill: "#E7E7E7"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            d: "M19.502 2.94h5.736A15.911 15.911 0 0 0 16.936.03h-.493c1.451.182 2.118 1.256 3.058 2.91Z",
                            fill: "#DC3027"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            d: "M31.404 11.674a15.898 15.898 0 0 0-1.135-2.91h-8.79c.178.934.319 1.91.423 2.91h9.502Z",
                            fill: "#E7E7E7"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            d: "M20.985 8.763h9.283a16.007 16.007 0 0 0-1.899-2.911h-8.11c.286.905.529 1.881.726 2.91Z",
                            fill: "#DC3027"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            d: "M22.238 17.497h9.69c.046-.493.072-.992.072-1.496 0-.477-.025-.948-.066-1.415H22.24c.032.968.031 1.943-.002 2.91Z",
                            fill: "#E7E7E7"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            d: "M31.934 14.584c-.088-1-.268-1.972-.53-2.91h-9.91c.099.953.165 1.928.197 2.91h10.243Z",
                            fill: "#DC3027"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            d: "M21.312 23.317h8.915c.475-.921.863-1.895 1.153-2.91h-9.637a34.487 34.487 0 0 1-.431 2.91Z",
                            fill: "#E7E7E7"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            d: "M31.38 20.407c.269-.938.456-1.91.548-2.91h-9.992a40.989 40.989 0 0 1-.203 2.91h9.648Z",
                            fill: "#DC3027"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            d: "M25.124 29.141a16.097 16.097 0 0 0 3.177-2.91h-7.507c-.35 1.094-.767 2.078-1.25 2.91h5.58Z",
                            fill: "#E7E7E7"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            d: "M20.512 26.23h7.79a16.023 16.023 0 0 0 1.924-2.912h-8.98c-.2 1.03-.444 2.008-.734 2.911ZM15.42 31.988l-.097-.004.097.004ZM16 32c3.392 0 6.535-1.06 9.123-2.86h-5.79C18.305 30.912 17.627 32 16 32Z",
                            fill: "#DC3027"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            d: "M16 32Z",
                            fill: "#C42126"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            d: "M20.031 2.94H6.761a16.082 16.082 0 0 0-3.13 2.91h17.627c-.344-1.09-.752-2.075-1.227-2.91Z",
                            fill: "#F3F4F5"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            d: "M6.762 2.94h13.27C19.09 1.287 17.894.213 16.442.03h-1.379a15.91 15.91 0 0 0-8.302 2.91Z",
                            fill: "#E73625"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            d: "M.597 11.674h21.81c-.105-1-.245-1.976-.423-2.91H1.732a15.89 15.89 0 0 0-1.135 2.91Z",
                            fill: "#F3F4F5"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            d: "M3.631 5.852a16.02 16.02 0 0 0-1.9 2.91h20.253a25.637 25.637 0 0 0-.726-2.91H3.631Z",
                            fill: "#E73625"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            d: "M0 16.001c0 .504.027 1.003.072 1.495h22.53a43.59 43.59 0 0 0 .002-2.91H.066C.026 15.053 0 15.524 0 16Z",
                            fill: "#F3F4F5"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            d: "M.066 14.584h22.538a41.057 41.057 0 0 0-.198-2.91H.596c-.262.938-.442 1.91-.53 2.91Z",
                            fill: "#E73625"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            d: "M22.398 20.406H.62c.29 1.016.678 1.99 1.153 2.911h20.194c.181-.933.325-1.91.431-2.91Z",
                            fill: "#F3F4F5"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            d: "M.62 20.407h21.778c.102-.953.17-1.928.204-2.91H.072c.093 1 .28 1.972.548 2.91Z",
                            fill: "#E73625"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            d: "M6.876 29.141h13.106c.484-.832.9-1.816 1.251-2.91H3.7a16.088 16.088 0 0 0 3.177 2.91Z",
                            fill: "#F3F4F5"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            d: "M1.774 23.318a16.029 16.029 0 0 0 1.925 2.911h17.534c.29-.903.535-1.88.734-2.91H1.774ZM15.323 31.985c.033 0 .065.002.097.003.193.007.386.011.58.011 1.627 0 2.954-1.088 3.982-2.858H6.877a15.916 15.916 0 0 0 8.446 2.844Z",
                            fill: "#E73625"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            d: "M15.67.008C7.47.175.786 6.505.067 14.558H15.67V.008Z",
                            fill: "#283991"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            d: "m3.202 9.066.243.751h.79l-.639.464.244.751-.638-.464-.639.464.244-.75-.639-.465h.79l.244-.75ZM3.202 11.717l.243.75h.79l-.639.465.244.751-.638-.464-.639.464.244-.751-.639-.464h.79l.244-.751ZM5.854 5.088l.243.75h.79l-.639.465.244.75-.638-.463-.639.464.244-.75-.64-.465h.79l.245-.751ZM5.854 7.74l.243.751h.79l-.639.464.244.751-.638-.464-.639.464.244-.751-.64-.464h.79l.245-.75ZM5.854 10.39l.243.752h.79l-.639.463.244.751-.638-.464-.639.464.244-.75-.64-.464h.79l.245-.751ZM1.188 12.358l-.244-.752.639-.463h-.79l-.017-.055c-.087.268-.165.54-.237.814l.01-.009.64.465ZM2.563 8.38l.639-.464.638.464-.244-.751.639-.464h-.79l-.244-.75-.244.75h-.29c-.055.081-.107.164-.16.247l.3.217-.244.751ZM5.854 3.937l.638.463-.244-.75.639-.464H6.43c-.387.29-.761.596-1.12.919l-.096.295.639-.463ZM7.867 3.076l.639-.465.638.465-.244-.751.639-.464h-.79l-.033-.101a15.82 15.82 0 0 0-.79.43l.185.135-.244.75ZM8.506 3.762l.244.75h.79l-.64.464.244.751-.638-.464-.639.464.244-.75-.639-.465h.79l.244-.75ZM8.506 6.414l.244.75h.79l-.64.465.244.75-.638-.464-.639.465.244-.751-.639-.465h.79l.244-.75ZM8.506 9.066l.244.751h.79l-.64.464.244.751-.638-.464-.639.464.244-.75-.639-.465h.79l.244-.75ZM8.506 11.717l.244.75h.79l-.64.465.244.751-.638-.464-.639.464.244-.751-.639-.464h.79l.244-.751ZM11.158 2.436l.244.75h.79l-.64.465.244.75-.638-.464-.639.464.244-.75-.639-.465h.79l.244-.75ZM11.158 5.088l.244.75h.79l-.64.465.244.75-.638-.463-.639.464.244-.75-.639-.465h.79l.244-.751ZM11.158 7.74l.244.751h.79l-.64.464.244.751-.638-.464-.639.464.244-.751-.639-.464h.79l.244-.75ZM11.158 10.39l.244.752h.79l-.64.463.244.751-.638-.464-.639.464.244-.75-.639-.464h.79l.244-.751ZM13.81 1.11l.244.75h.79l-.64.464.244.751-.638-.464-.639.464.244-.751-.639-.464h.79l.244-.75ZM13.81 3.762l.244.75h.79l-.64.464.244.751-.638-.464-.639.464.244-.75-.639-.465h.79l.244-.75ZM13.81 6.414l.244.75h.79l-.64.465.244.75-.638-.464-.639.465.244-.751-.639-.465h.79l.244-.75ZM13.81 9.066l.244.751h.79l-.64.464.244.751-.638-.464-.639.464.244-.75-.639-.465h.79l.244-.75ZM13.81 11.717l.244.75h.79l-.64.465.244.751-.638-.464-.639.464.244-.751-.639-.464h.79l.244-.751Z",
                            fill: "#EFEFEF"
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("defs", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx("clipPath", {
                        id: "a",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            fill: "#fff",
                            d: "M0 0h32v32H0z"
                        })
                    })
                })
            ]
        })
    }));
};

;// CONCATENATED MODULE: ./src/components/icons/flags/ILFlagRound.tsx

const ILFlagRound = ({ width ='32px' , height ='32px'  })=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
            width: width,
            height: height,
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M16 32c8.836 0 16-7.164 16-16S24.836 0 16 0 0 7.164 0 16s7.164 16 16 16Z",
                    fill: "#F0F0F0"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M25.96 3.477H6.049a15.99 15.99 0 0 0-3.691 4.177h27.295a16.013 16.013 0 0 0-3.69-4.177h-.003Zm-7.951 9.048h4.017L20.018 16l2.007 3.476h-4.016L16 22.96l-2.007-3.484H9.976L11.985 16l-2.011-3.475h4.018L16 9.041l2.009 3.484Zm-.775 5.61L18.468 16l-1.233-2.133h-2.468L13.533 16l1.234 2.133 2.467.001ZM16 11.724l.46.8h-.919l.46-.8Zm-2.782 2.142h-.919l.46.791.459-.79Zm-.918 4.267.459-.791.46.791h-.92Zm3.241 1.343.46.8.459-.8h-.919Zm4.16-1.343h-.919l.46-.791.458.791Zm0-4.267h-.92l.46.791.46-.79Zm6.25 14.658H6.04a16 16 0 0 1-3.691-4.178h27.294a16.003 16.003 0 0 1-3.692 4.178h-.002Z",
                    fill: "#0052B4"
                })
            ]
        })
    }));
};

;// CONCATENATED MODULE: ./src/lib/locals.tsx














const localeRTLList = [
    'ar',
    'he'
];
function useIsRTL() {
    const { locale  } = (0,router_.useRouter)();
    if (locale && localeRTLList.includes(locale)) {
        return {
            isRTL: true,
            alignLeft: 'right',
            alignRight: 'left'
        };
    }
    return {
        isRTL: false,
        alignLeft: 'left',
        alignRight: 'right'
    };
}
let languageMenu = [
    {
        id: 'ar',
        name: 'عربى',
        value: 'ar',
        icon: /*#__PURE__*/ jsx_runtime_.jsx(SAFlag, {
            width: "20px",
            height: "15px"
        }),
        iconMobile: /*#__PURE__*/ jsx_runtime_.jsx(SAFlagRound, {})
    },
    {
        id: 'zh',
        name: '中国人',
        value: 'zh',
        icon: /*#__PURE__*/ jsx_runtime_.jsx(CNFlag, {
            width: "20px",
            height: "15px"
        }),
        iconMobile: /*#__PURE__*/ jsx_runtime_.jsx(CNFlagRound, {})
    },
    {
        id: 'en',
        name: 'English',
        value: 'en',
        icon: /*#__PURE__*/ jsx_runtime_.jsx(USFlag, {
            width: "20px",
            height: "15px"
        }),
        iconMobile: /*#__PURE__*/ jsx_runtime_.jsx(USFlagRound, {})
    },
    {
        id: 'de',
        name: 'Deutsch',
        value: 'de',
        icon: /*#__PURE__*/ jsx_runtime_.jsx(DEFlag, {
            width: "20px",
            height: "15px"
        }),
        iconMobile: /*#__PURE__*/ jsx_runtime_.jsx(DEFlagRound, {})
    },
    {
        id: 'he',
        name: 'rעברית',
        value: 'he',
        icon: /*#__PURE__*/ jsx_runtime_.jsx(ILFlag, {
            width: "20px",
            height: "15px"
        }),
        iconMobile: /*#__PURE__*/ jsx_runtime_.jsx(ILFlagRound, {})
    },
    {
        id: 'es',
        name: 'Espa\xf1ol',
        value: 'es',
        icon: /*#__PURE__*/ jsx_runtime_.jsx(ESFlag, {
            width: "20px",
            height: "15px"
        }),
        iconMobile: /*#__PURE__*/ jsx_runtime_.jsx(ESFlagRound, {})
    }, 
];


/***/ })

};
;