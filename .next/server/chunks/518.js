"use strict";
exports.id = 518;
exports.ids = [518];
exports.modules = {

/***/ 2565:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_ui_links_anchor_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3813);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);




const ActiveLink = ({ href , className , activeClassName ='active' , ...props })=>{
    const { pathname  } = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_links_anchor_link__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        href: href,
        className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(className, {
            [activeClassName]: pathname === href
        }),
        ...props
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ActiveLink);


/***/ }),

/***/ 7310:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Logo)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_ui_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3879);
/* harmony import */ var _components_ui_links_anchor_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3813);
/* harmony import */ var _config_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(551);
/* harmony import */ var _lib_hooks_use_is_mounted__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3741);
/* harmony import */ var _lib_hooks_use_is_dark_mode__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(269);
/* harmony import */ var _data_static_site_settings__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1315);
/* harmony import */ var _data_settings__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6698);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_data_settings__WEBPACK_IMPORTED_MODULE_8__]);
_data_settings__WEBPACK_IMPORTED_MODULE_8__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];









function Logo({ className ='w-20' , ...props }) {
    var ref, ref1;
    const isMounted = (0,_lib_hooks_use_is_mounted__WEBPACK_IMPORTED_MODULE_5__/* .useIsMounted */ .t)();
    const { isDarkMode  } = (0,_lib_hooks_use_is_dark_mode__WEBPACK_IMPORTED_MODULE_6__/* .useIsDarkMode */ .G)();
    const { lightLogo , darkLogo  } = _data_static_site_settings__WEBPACK_IMPORTED_MODULE_7__/* .siteSettings */ .U;
    const { settings  } = (0,_data_settings__WEBPACK_IMPORTED_MODULE_8__/* .useSettings */ .r)();
    var ref2, ref3, ref4, ref5;
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_links_anchor_link__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        href: _config_routes__WEBPACK_IMPORTED_MODULE_4__/* ["default"].home */ .Z.home,
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('relative flex items-center text-dark focus:outline-none dark:text-light', className),
        ...props,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
            className: "relative overflow-hidden",
            style: {
                width: _data_static_site_settings__WEBPACK_IMPORTED_MODULE_7__/* .siteSettings */ .U === null || _data_static_site_settings__WEBPACK_IMPORTED_MODULE_7__/* .siteSettings */ .U === void 0 ? void 0 : _data_static_site_settings__WEBPACK_IMPORTED_MODULE_7__/* .siteSettings.width */ .U.width,
                height: _data_static_site_settings__WEBPACK_IMPORTED_MODULE_7__/* .siteSettings */ .U === null || _data_static_site_settings__WEBPACK_IMPORTED_MODULE_7__/* .siteSettings */ .U === void 0 ? void 0 : _data_static_site_settings__WEBPACK_IMPORTED_MODULE_7__/* .siteSettings.height */ .U.height
            },
            children: [
                isMounted && isDarkMode && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_image__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                    src: (ref2 = settings === null || settings === void 0 ? void 0 : (ref = settings.dark_logo) === null || ref === void 0 ? void 0 : ref.original) !== null && ref2 !== void 0 ? ref2 : darkLogo,
                    layout: "fill",
                    objectFit: "contain",
                    loading: "eager",
                    alt: (ref3 = settings === null || settings === void 0 ? void 0 : settings.siteTitle) !== null && ref3 !== void 0 ? ref3 : 'Dark Logo'
                }),
                isMounted && !isDarkMode && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_image__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                    src: (ref4 = settings === null || settings === void 0 ? void 0 : (ref1 = settings.logo) === null || ref1 === void 0 ? void 0 : ref1.original) !== null && ref4 !== void 0 ? ref4 : lightLogo,
                    layout: "fill",
                    objectFit: "contain",
                    loading: "eager",
                    alt: (ref5 = settings === null || settings === void 0 ? void 0 : settings.siteTitle) !== null && ref5 !== void 0 ? ref5 : 'Light Logo'
                })
            ]
        })
    }));
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1315:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "U": () => (/* binding */ siteSettings)
});

;// CONCATENATED MODULE: ./src/assets/images/logo-black.svg
/* harmony default export */ const logo_black = ({"src":"/_next/static/media/logo-black.384b79f0.svg","height":24,"width":74});
;// CONCATENATED MODULE: ./src/assets/images/logo-white.svg
/* harmony default export */ const logo_white = ({"src":"/_next/static/media/logo-white.69307160.svg","height":24,"width":74});
;// CONCATENATED MODULE: ./src/data/static/site-settings.ts


const siteSettings = {
    lightLogo: logo_black,
    darkLogo: logo_white,
    width: 128,
    height: 40
};


/***/ })

};
;