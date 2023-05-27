"use strict";
(() => {
var exports = {};
exports.id = 6053;
exports.ids = [6053];
exports.modules = {

/***/ 5403:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_": () => (/* binding */ useMyReports)
/* harmony export */ });
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7607);
/* harmony import */ var _data_client_endpoints__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1880);
/* harmony import */ var _data_utils_data_mapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6848);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_client__WEBPACK_IMPORTED_MODULE_1__]);
_client__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




function useMyReports(options) {
    const { data , isLoading , error , fetchNextPage , hasNextPage , isFetching , isFetchingNextPage ,  } = (0,react_query__WEBPACK_IMPORTED_MODULE_0__.useInfiniteQuery)([
        _data_client_endpoints__WEBPACK_IMPORTED_MODULE_2__/* .API_ENDPOINTS.MY_REPORTS */ .P.MY_REPORTS,
        options
    ], ({ queryKey , pageParam  })=>_client__WEBPACK_IMPORTED_MODULE_1__/* ["default"].myReports.all */ .Z.myReports.all(Object.assign({}, queryKey[1], pageParam))
    , {
        getNextPageParam: ({ current_page , last_page  })=>last_page > current_page && {
                page: current_page + 1
            }
    });
    function handleLoadMore() {
        fetchNextPage();
    }
    var ref;
    return {
        reports: (ref = data === null || data === void 0 ? void 0 : data.pages.flatMap((page)=>page.data
        )) !== null && ref !== void 0 ? ref : [],
        paginatorInfo: Array.isArray(data === null || data === void 0 ? void 0 : data.pages) ? (0,_data_utils_data_mapper__WEBPACK_IMPORTED_MODULE_3__/* .mapPaginatorData */ .Q)(data === null || data === void 0 ? void 0 : data.pages[data.pages.length - 1]) : null,
        isLoading,
        error,
        isFetching,
        isLoadingMore: isFetchingNextPage,
        loadMore: handleLoadMore,
        hasMore: Boolean(hasNextPage)
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6848:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Q": () => (/* binding */ mapPaginatorData)
/* harmony export */ });
/* harmony import */ var camelcase_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3104);
/* harmony import */ var camelcase_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(camelcase_keys__WEBPACK_IMPORTED_MODULE_0__);

const mapPaginatorData = (obj)=>{
    if (!obj) return null;
    const { data , ...formattedValues } = camelcase_keys__WEBPACK_IMPORTED_MODULE_0___default()(obj);
    return {
        ...formattedValues,
        hasMorePages: formattedValues.lastPage !== formattedValues.currentPage,
        firstItem: formattedValues.from,
        lastItem: formattedValues.to
    };
};


/***/ }),

/***/ 7446:
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
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _layouts_dashboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9292);
/* harmony import */ var _data_report__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5403);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1635);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4195);
/* harmony import */ var dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var dayjs_plugin_utc__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6619);
/* harmony import */ var dayjs_plugin_utc__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(dayjs_plugin_utc__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var dayjs_plugin_timezone__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3291);
/* harmony import */ var dayjs_plugin_timezone__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(dayjs_plugin_timezone__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_ui_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9662);
/* harmony import */ var _components_ui_loader_table_loader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2078);
/* harmony import */ var _components_ui_item_not_found__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5259);
/* harmony import */ var _components_ui_error_message__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(7018);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_layouts_dashboard__WEBPACK_IMPORTED_MODULE_3__, _data_report__WEBPACK_IMPORTED_MODULE_4__]);
([_layouts_dashboard__WEBPACK_IMPORTED_MODULE_3__, _data_report__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);













const MyReportsPage = ()=>{
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation)('common');
    const { reports , isLoading , error  } = (0,_data_report__WEBPACK_IMPORTED_MODULE_4__/* .useMyReports */ ._)({
        limit: 50
    });
    if (error) return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_error_message__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
        message: error === null || error === void 0 ? void 0 : error.message
    }));
    const orderTableColumns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
            align: 'center',
            className: '!text-sm',
            width: 80
        },
        {
            title: 'Message',
            dataIndex: 'message',
            key: 'message',
            align: 'center',
            className: '!text-sm min-w-fit'
        },
        {
            title: 'Date',
            dataIndex: 'created_at',
            key: 'created_at',
            align: 'center',
            className: '!text-sm  ',
            width: 160,
            render: (date)=>{
                dayjs__WEBPACK_IMPORTED_MODULE_5___default().extend((dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_6___default()));
                dayjs__WEBPACK_IMPORTED_MODULE_5___default().extend((dayjs_plugin_utc__WEBPACK_IMPORTED_MODULE_7___default()));
                dayjs__WEBPACK_IMPORTED_MODULE_5___default().extend((dayjs_plugin_timezone__WEBPACK_IMPORTED_MODULE_8___default()));
                return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: " whitespace-nowrap",
                    children: dayjs__WEBPACK_IMPORTED_MODULE_5___default().utc(date).tz(dayjs__WEBPACK_IMPORTED_MODULE_5___default().tz.guess()).fromNow()
                }));
            }
        }, 
    ];
    // loader
    if (!reports.length && isLoading) {
        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "flex w-full flex-col",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "mb-8 flex items-center justify-center sm:mb-10",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        className: "text-heading text-center text-lg font-semibold sm:text-xl",
                        children: t('text-my-reports-title')
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_loader_table_loader__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                    uniqueKey: `table-loader`
                })
            ]
        }));
    }
    if (!reports.length && !isLoading) {
        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "flex w-full flex-col",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "mb-8 flex items-center justify-between sm:mb-10",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        className: "mb-3 text-15px font-medium text-dark dark:text-light",
                        children: t('text-my-reports-title')
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_item_not_found__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                    title: t('text-no-reports-found'),
                    message: ""
                })
            ]
        }));
    }
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex w-full flex-col",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                className: "mb-8 text-15px font-medium text-dark dark:text-light",
                children: t('text-my-reports-title')
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_table__WEBPACK_IMPORTED_MODULE_9__/* .Table */ .i, {
                //@ts-ignore
                columns: orderTableColumns,
                data: reports,
                rowKey: (record)=>record.created_at
                ,
                className: "shadow-none",
                rowClassName: "!cursor-auto"
            })
        ]
    }));
};
MyReportsPage.authorization = true;
MyReportsPage.getLayout = function getLayout(page) {
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layouts_dashboard__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyReportsPage);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 3104:
/***/ ((module) => {

module.exports = require("camelcase-keys");

/***/ }),

/***/ 9003:
/***/ ((module) => {

module.exports = require("classnames");

/***/ }),

/***/ 1635:
/***/ ((module) => {

module.exports = require("dayjs");

/***/ }),

/***/ 4195:
/***/ ((module) => {

module.exports = require("dayjs/plugin/relativeTime");

/***/ }),

/***/ 3291:
/***/ ((module) => {

module.exports = require("dayjs/plugin/timezone");

/***/ }),

/***/ 6619:
/***/ ((module) => {

module.exports = require("dayjs/plugin/utc");

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

/***/ 3345:
/***/ ((module) => {

module.exports = require("rc-table");

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
var __webpack_exports__ = __webpack_require__.X(0, [7730,3157,6639,714,518,5517,9573,7168,9363,9292,5957], () => (__webpack_exec__(7446)));
module.exports = __webpack_exports__;

})();