"use strict";
(() => {
var exports = {};
exports.id = 2415;
exports.ids = [2415];
exports.modules = {

/***/ 4656:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Card)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6197);
/* harmony import */ var _components_ui_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3879);
/* harmony import */ var _config_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(551);
/* harmony import */ var _assets_images_placeholders_product_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8818);
/* harmony import */ var _lib_framer_motion_fade_in_bottom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2554);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_2__]);
framer_motion__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








function Card({ shop  }) {
    const { name , slug , logo , products_count  } = shop !== null && shop !== void 0 ? shop : {};
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_6__.useTranslation)('common');
    var ref;
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
        whileTap: {
            scale: 0.98
        },
        whileHover: {
            scale: 1.05
        },
        variants: (0,_lib_framer_motion_fade_in_bottom__WEBPACK_IMPORTED_MODULE_7__/* .fadeInBottomWithScaleX */ .sh)(),
        onClick: ()=>router.push(_config_routes__WEBPACK_IMPORTED_MODULE_4__/* ["default"].shopUrl */ .Z.shopUrl(slug))
        ,
        className: "group cursor-pointer rounded-md bg-light px-4 py-7 text-center dark:bg-dark-250",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "relative mx-auto mb-2.5 h-[75px] w-[75px] md:h-20 md:w-20 lg:h-[90px] lg:w-[90px]",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_image__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                    alt: name,
                    layout: "fill",
                    quality: 100,
                    objectFit: "cover",
                    src: (ref = logo === null || logo === void 0 ? void 0 : logo.original) !== null && ref !== void 0 ? ref : _assets_images_placeholders_product_svg__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z,
                    className: "rounded-3xl"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                className: "mb-1 text-13px font-medium text-dark transition-colors group-hover:text-brand dark:text-light",
                children: name
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "font-medium text-dark-800 dark:text-dark-base",
                children: [
                    products_count,
                    " ",
                    t('text-products')
                ]
            })
        ]
    }));
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9694:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Grid)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6197);
/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4685);
/* harmony import */ var _components_shop_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4656);
/* harmony import */ var _components_shop_shop_loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5248);
/* harmony import */ var _components_ui_item_not_found__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5259);
/* harmony import */ var _lib_range_map__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(994);
/* harmony import */ var _lib_framer_motion_stagger_transition__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3531);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_1__, _components_shop_card__WEBPACK_IMPORTED_MODULE_3__]);
([framer_motion__WEBPACK_IMPORTED_MODULE_1__, _components_shop_card__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








function Grid({ shops , onLoadMore , hasNextPage , isLoadingMore , isLoading , limit =15  }) {
    if (!isLoading && !shops.length) {
        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_item_not_found__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
            title: 'No Author found!',
            message: 'Sorry, we don’t found any author',
            className: "pt-5 pb-0 md:px-6 md:pt-6 lg:px-7 3xl:px-8"
        }));
    }
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "w-full",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {
                variants: (0,_lib_framer_motion_stagger_transition__WEBPACK_IMPORTED_MODULE_6__/* .staggerTransition */ .s)(0.025),
                className: "grid grid-cols-2 gap-4 xs:grid-cols-[repeat(auto-fill,minmax(185px,1fr))] md:gap-5",
                children: isLoading && !shops.length ? (0,_lib_range_map__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(limit, (i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "rounded-md bg-light dark:bg-dark-250",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_shop_shop_loader__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                            uniqueKey: `author-${i}`
                        })
                    }, i)
                ) : shops.map((shop)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_shop_card__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        shop: shop
                    }, shop.id)
                )
            }),
            hasNextPage && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "mt-10 grid place-content-center",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_button__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                    onClick: onLoadMore,
                    disabled: isLoadingMore,
                    isLoading: isLoadingMore,
                    children: "Load more"
                })
            })
        ]
    }));
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5248:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ShopCardLoader)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_content_loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8782);
/* harmony import */ var react_content_loader__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_content_loader__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_hooks_use_is_dark_mode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(269);
/* harmony import */ var _lib_hooks_use_is_mounted__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3741);




function ShopCardLoader(props) {
    const isMounted = (0,_lib_hooks_use_is_mounted__WEBPACK_IMPORTED_MODULE_3__/* .useIsMounted */ .t)();
    const { isDarkMode  } = (0,_lib_hooks_use_is_dark_mode__WEBPACK_IMPORTED_MODULE_2__/* .useIsDarkMode */ .G)();
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_content_loader__WEBPACK_IMPORTED_MODULE_1___default()), {
        speed: 2,
        width: '100%',
        height: '100%',
        viewBox: "0 0 214 204",
        backgroundColor: isMounted && isDarkMode ? '#505050' : '#d0d0d0',
        foregroundColor: isMounted && isDarkMode ? '#606060' : '#c0c0c0',
        ...props,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                x: "61",
                y: "28",
                rx: "20",
                ry: "20",
                width: "90",
                height: "90"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                x: "47",
                y: "140",
                rx: "0",
                ry: "0",
                width: "120",
                height: "10"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                x: "67",
                y: "162",
                rx: "0",
                ry: "0",
                width: "80",
                height: "8"
            })
        ]
    }));
};


/***/ }),

/***/ 7100:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5460);
/* harmony import */ var next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _layouts_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5309);
/* harmony import */ var _components_shop_grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9694);
/* harmony import */ var _layouts_seo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6357);
/* harmony import */ var _config_routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(551);
/* harmony import */ var _data_shop__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6575);
/* harmony import */ var _components_ui_button_group__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9562);
/* harmony import */ var _components_icons_search_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2453);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_10__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_layouts_layout__WEBPACK_IMPORTED_MODULE_3__, _components_shop_grid__WEBPACK_IMPORTED_MODULE_4__, _data_shop__WEBPACK_IMPORTED_MODULE_7__, _components_ui_button_group__WEBPACK_IMPORTED_MODULE_8__]);
([_layouts_layout__WEBPACK_IMPORTED_MODULE_3__, _components_shop_grid__WEBPACK_IMPORTED_MODULE_4__, _data_shop__WEBPACK_IMPORTED_MODULE_7__, _components_ui_button_group__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











const MAP_RANGE_FILTER = [
    {
        label: 'text-weekly',
        range: 7
    },
    {
        label: 'text-monthly',
        range: 30
    },
    {
        label: 'text-yearly',
        range: 365
    }, 
];
// Every shop owner in an author here
function Shops() {
    let { 0: selected , 1: setRange  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(MAP_RANGE_FILTER[2]);
    let { 0: searchText , 1: setSearchText  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('');
    const { shops , loadMore , hasNextPage , isLoadingMore , isLoading  } = (0,_data_shop__WEBPACK_IMPORTED_MODULE_7__/* .useTopShops */ .NT)({
        range: selected.range,
        name: searchText
    });
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_10__.useTranslation)('common');
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex flex-grow flex-col px-4 pt-6 pb-10 md:px-6 lg:px-7 lg:pb-12 3xl:px-8",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "mb-2 -mt-4 flex flex-col-reverse flex-wrap items-center justify-between bg-light-200 py-4 dark:bg-dark-100 md:mt-0 md:mb-5 md:flex-row md:space-x-4 md:bg-transparent md:py-0 md:dark:bg-transparent lg:mb-7",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "relative mt-3 w-full max-w-xs sm:mt-0",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons_search_icon__WEBPACK_IMPORTED_MODULE_9__/* .SearchIcon */ .W, {
                                className: "absolute left-1 top-1/2 -mt-2 h-4 w-4"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                type: "search",
                                onChange: (e)=>setSearchText(e.target.value)
                                ,
                                autoFocus: true,
                                placeholder: t('text-placeholder-search'),
                                className: "border-dark-30 h-11 w-full border-0 border-b border-b-light-600 bg-transparent pl-8 text-13px outline-none focus:border-b-light-800 focus:ring-0 dark:border-b-dark-400 dark:focus:border-b-dark-500"
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_button_group__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                        items: MAP_RANGE_FILTER,
                        selectedValue: selected,
                        onChange: setRange
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_shop_grid__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                shops: shops,
                onLoadMore: loadMore,
                hasNextPage: hasNextPage,
                isLoadingMore: isLoadingMore,
                isLoading: isLoading
            })
        ]
    }));
}
const AuthorsPage = ()=>{
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layouts_seo__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                title: "Shops",
                description: "Fastest digital download template built with React, NextJS, TypeScript, React-Query and Tailwind CSS.",
                url: _config_routes__WEBPACK_IMPORTED_MODULE_6__/* ["default"].authors */ .Z.authors
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Shops, {})
        ]
    }));
};
AuthorsPage.getLayout = function getLayout(page) {
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layouts_layout__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        children: page
    }));
};
const getStaticProps = async ({ locale  })=>{
    return {
        props: {
            ...await (0,next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_1__.serverSideTranslations)(locale, [
                'common'
            ])
        },
        revalidate: 60
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AuthorsPage);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 9003:
/***/ ((module) => {

module.exports = require("classnames");

/***/ }),

/***/ 1381:
/***/ ((module) => {

module.exports = require("lodash/throttle");

/***/ }),

/***/ 1377:
/***/ ((module) => {

module.exports = require("next-i18next");

/***/ }),

/***/ 5460:
/***/ ((module) => {

module.exports = require("next-i18next/serverSideTranslations");

/***/ }),

/***/ 6641:
/***/ ((module) => {

module.exports = require("next-seo");

/***/ }),

/***/ 1162:
/***/ ((module) => {

module.exports = require("next-themes");

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 8028:
/***/ ((module) => {

module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 3539:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/detect-domain-locale.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 5832:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 153:
/***/ ((module) => {

module.exports = require("overlayscrollbars-react");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 9983:
/***/ ((module) => {

module.exports = require("react-avatar");

/***/ }),

/***/ 8782:
/***/ ((module) => {

module.exports = require("react-content-loader");

/***/ }),

/***/ 8922:
/***/ ((module) => {

module.exports = require("react-hot-toast");

/***/ }),

/***/ 1175:
/***/ ((module) => {

module.exports = require("react-query");

/***/ }),

/***/ 9755:
/***/ ((module) => {

module.exports = require("react-use");

/***/ }),

/***/ 7139:
/***/ ((module) => {

module.exports = require("react-use/lib/useLocalStorage");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 1185:
/***/ ((module) => {

module.exports = import("@headlessui/react");;

/***/ }),

/***/ 6197:
/***/ ((module) => {

module.exports = import("framer-motion");;

/***/ }),

/***/ 2451:
/***/ ((module) => {

module.exports = import("jotai");;

/***/ }),

/***/ 9915:
/***/ ((module) => {

module.exports = import("js-cookie");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [7730,3157,6639,714,518,5517,3171,7360,5309,6575,8355], () => (__webpack_exec__(7100)));
module.exports = __webpack_exports__;

})();