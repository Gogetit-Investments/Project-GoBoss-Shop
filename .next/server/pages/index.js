"use strict";
(() => {
var exports = {};
exports.id = 5405;
exports.ids = [5405];
exports.modules = {

/***/ 5019:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "s": () => (/* binding */ ChevronLeft)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const ChevronLeft = (props)=>{
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor",
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: 2,
            d: "M15 19l-7-7 7-7"
        })
    }));
};


/***/ }),

/***/ 5133:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_": () => (/* binding */ ChevronRight)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const ChevronRight = (props)=>{
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor",
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: 2,
            d: "M9 5l7 7-7 7"
        })
    }));
};


/***/ }),

/***/ 441:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _layouts_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5309);
/* harmony import */ var _data_product__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3163);
/* harmony import */ var _components_product_grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6162);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _layouts_seo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6357);
/* harmony import */ var _config_routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(551);
/* harmony import */ var _data_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7607);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _data_client_endpoints__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1880);
/* harmony import */ var _components_product_category_filter__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7674);
/* harmony import */ var next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5460);
/* harmony import */ var next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_11__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_layouts_layout__WEBPACK_IMPORTED_MODULE_1__, _data_product__WEBPACK_IMPORTED_MODULE_2__, _components_product_grid__WEBPACK_IMPORTED_MODULE_3__, _data_client__WEBPACK_IMPORTED_MODULE_7__, _components_product_category_filter__WEBPACK_IMPORTED_MODULE_10__]);
([_layouts_layout__WEBPACK_IMPORTED_MODULE_1__, _data_product__WEBPACK_IMPORTED_MODULE_2__, _components_product_grid__WEBPACK_IMPORTED_MODULE_3__, _data_client__WEBPACK_IMPORTED_MODULE_7__, _components_product_category_filter__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












const getStaticProps = async ({ locale  })=>{
    const queryClient = new react_query__WEBPACK_IMPORTED_MODULE_8__.QueryClient();
    try {
        await Promise.all([
            queryClient.prefetchQuery([
                _data_client_endpoints__WEBPACK_IMPORTED_MODULE_9__/* .API_ENDPOINTS.SETTINGS */ .P.SETTINGS,
                {
                    language: locale
                }
            ], ({ queryKey  })=>_data_client__WEBPACK_IMPORTED_MODULE_7__/* ["default"].settings.all */ .Z.settings.all(queryKey[1])
            ),
            queryClient.prefetchInfiniteQuery([
                _data_client_endpoints__WEBPACK_IMPORTED_MODULE_9__/* .API_ENDPOINTS.PRODUCTS */ .P.PRODUCTS,
                {
                    language: locale
                }
            ], ({ queryKey  })=>_data_client__WEBPACK_IMPORTED_MODULE_7__/* ["default"].products.all */ .Z.products.all(queryKey[1])
            ),
            queryClient.prefetchInfiniteQuery([
                _data_client_endpoints__WEBPACK_IMPORTED_MODULE_9__/* .API_ENDPOINTS.CATEGORIES */ .P.CATEGORIES,
                {
                    limit: 100,
                    language: locale
                }
            ], ({ queryKey  })=>_data_client__WEBPACK_IMPORTED_MODULE_7__/* ["default"].categories.all */ .Z.categories.all(queryKey[1])
            ), 
        ]);
        return {
            props: {
                ...await (0,next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_11__.serverSideTranslations)(locale, [
                    'common'
                ]),
                dehydratedState: JSON.parse(JSON.stringify((0,react_query__WEBPACK_IMPORTED_MODULE_8__.dehydrate)(queryClient)))
            },
            revalidate: 60
        };
    } catch (error) {
        //* if we get here, the product doesn't exist or something else went wrong
        return {
            notFound: true
        };
    }
};
function Products() {
    const { query  } = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    const { products , loadMore , hasNextPage , isLoadingMore , isLoading  } = (0,_data_product__WEBPACK_IMPORTED_MODULE_2__/* .useProducts */ .rn)({
        ...query.category && {
            categories: query.category
        },
        ...query.price && {
            price: query.price
        }
    });
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_product_grid__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        products: products,
        limit: 30,
        onLoadMore: loadMore,
        hasNextPage: hasNextPage,
        isLoadingMore: isLoadingMore,
        isLoading: isLoading
    }));
}
// TODO: SEO text gulo translation ready hobe kina? r seo text gulo static thakbe or dynamic?
const Home = ()=>{
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layouts_seo__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                title: "UI Design Resources, UI Kits, Wireframes, Icons and More",
                description: "Fastest digital download template built with React, NextJS, TypeScript, React-Query and Tailwind CSS.",
                url: _config_routes__WEBPACK_IMPORTED_MODULE_6__/* ["default"].home */ .Z.home
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_product_category_filter__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Products, {})
        ]
    }));
};
Home.getLayout = function getLayout(page) {
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layouts_layout__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        children: page
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);

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
var __webpack_exports__ = __webpack_require__.X(0, [7730,3157,6639,714,518,5517,3171,7360,5309,107], () => (__webpack_exec__(441)));
module.exports = __webpack_exports__;

})();