"use strict";
(() => {
var exports = {};
exports.id = 3706;
exports.ids = [3706];
exports.modules = {

/***/ 2440:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5460);
/* harmony import */ var next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_payment_pay_now_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4661);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1635);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6197);
/* harmony import */ var _layouts_dashboard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9292);
/* harmony import */ var _components_ui_image__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3879);
/* harmony import */ var _components_ui_dropdown__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2353);
/* harmony import */ var _components_ui_transition__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6604);
/* harmony import */ var _data_order__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1932);
/* harmony import */ var _components_icons_download_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(1789);
/* harmony import */ var _data_client__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(7607);
/* harmony import */ var _components_cart_cart_empty__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(7076);
/* harmony import */ var _lib_framer_motion_fade_in_bottom__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(2554);
/* harmony import */ var _lib_range_map__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(994);
/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(4685);
/* harmony import */ var _assets_images_placeholders_product_svg__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(8818);
/* harmony import */ var _components_modal_views_context__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(5335);
/* harmony import */ var _lib_get_reviews__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(1731);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(3620);
/* harmony import */ var _components_ui_link__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(6872);
/* harmony import */ var _config_routes__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(551);
/* harmony import */ var _components_ui_links_anchor_link__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(3813);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_payment_pay_now_button__WEBPACK_IMPORTED_MODULE_4__, framer_motion__WEBPACK_IMPORTED_MODULE_7__, _layouts_dashboard__WEBPACK_IMPORTED_MODULE_8__, _components_ui_dropdown__WEBPACK_IMPORTED_MODULE_10__, _components_ui_transition__WEBPACK_IMPORTED_MODULE_11__, _data_order__WEBPACK_IMPORTED_MODULE_12__, _data_client__WEBPACK_IMPORTED_MODULE_14__]);
([_components_payment_pay_now_button__WEBPACK_IMPORTED_MODULE_4__, framer_motion__WEBPACK_IMPORTED_MODULE_7__, _layouts_dashboard__WEBPACK_IMPORTED_MODULE_8__, _components_ui_dropdown__WEBPACK_IMPORTED_MODULE_10__, _components_ui_transition__WEBPACK_IMPORTED_MODULE_11__, _data_order__WEBPACK_IMPORTED_MODULE_12__, _data_client__WEBPACK_IMPORTED_MODULE_14__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


























function OrderedItem({ item  }) {
    var ref, ref1;
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_3__.useTranslation)('common');
    const { openModal  } = (0,_components_modal_views_context__WEBPACK_IMPORTED_MODULE_18__/* .useModalAction */ .SO)();
    const { order_id , tracking_number  } = item;
    var _fileable;
    const { id: product_id , shop_id , name , slug , image , preview_url , my_review ,  } = (_fileable = item.file.fileable) !== null && _fileable !== void 0 ? _fileable : {};
    const { mutate  } = (0,react_query__WEBPACK_IMPORTED_MODULE_6__.useMutation)(_data_client__WEBPACK_IMPORTED_MODULE_14__/* ["default"].orders.generateDownloadLink */ .Z.orders.generateDownloadLink, {
        onSuccess: (data)=>{
            function download(fileUrl, fileName) {
                let a = document.createElement('a');
                a.href = fileUrl;
                a.setAttribute('download', fileName);
                a.click();
            }
            download(data, name);
        }
    });
    function openReviewModal() {
        openModal('REVIEW_RATING', {
            product_id,
            shop_id,
            name,
            image,
            my_review: (0,_lib_get_reviews__WEBPACK_IMPORTED_MODULE_23__/* .getReview */ .T)(my_review, order_id),
            order_id
        });
    }
    const getStatus = (item === null || item === void 0 ? void 0 : (ref = item.order) === null || ref === void 0 ? void 0 : ref.payment_status) === _types__WEBPACK_IMPORTED_MODULE_19__/* .PaymentStatus.SUCCESS */ .bG.SUCCESS || (item === null || item === void 0 ? void 0 : (ref1 = item.order) === null || ref1 === void 0 ? void 0 : ref1.payment_status) === _types__WEBPACK_IMPORTED_MODULE_19__/* .PaymentStatus.WALLET */ .bG.WALLET;
    var ref2;
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex items-start gap-4 border-b border-light-400 py-4 last:border-b-0 dark:border-dark-400 sm:gap-5",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_links_anchor_link__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, {
                href: _config_routes__WEBPACK_IMPORTED_MODULE_21__/* ["default"].productUrl */ .Z.productUrl(slug),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "relative aspect-[5/3.4] w-28 flex-shrink-0 border border-light-300 dark:border-0 sm:w-32 md:w-36",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_image__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                        alt: name,
                        layout: "fill",
                        quality: 100,
                        objectFit: "cover",
                        src: (ref2 = image === null || image === void 0 ? void 0 : image.thumbnail) !== null && ref2 !== void 0 ? ref2 : _assets_images_placeholders_product_svg__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z,
                        className: "bg-light-400 dark:bg-dark-400"
                    })
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex flex-1 flex-col gap-4 sm:flex-row sm:items-center sm:justify-between md:gap-0",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "border-b border-light-400 pb-3 dark:border-dark-600 sm:border-b-0 sm:pb-0",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                className: "text-gray-500 dark:text-gray-400",
                                children: [
                                    t('text-purchased-on'),
                                    ' ',
                                    dayjs__WEBPACK_IMPORTED_MODULE_5___default()(item.updated_at).format('MMM D, YYYY')
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                className: "my-1.5 font-medium text-dark dark:text-light sm:mb-3",
                                title: name,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_links_anchor_link__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, {
                                    href: _config_routes__WEBPACK_IMPORTED_MODULE_21__/* ["default"].productUrl */ .Z.productUrl(slug),
                                    className: "transition-colors hover:text-brand",
                                    children: name
                                })
                            }),
                            preview_url && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                href: preview_url,
                                target: "_blank",
                                rel: "noreferrer",
                                className: "font-medium text-brand-dark dark:text-brand",
                                children: t('text-preview')
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex items-center gap-3",
                        children: [
                            getStatus ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        className: "flex items-center font-semibold text-brand hover:text-brand-dark sm:h-12 sm:rounded sm:border sm:border-light-500 sm:bg-transparent sm:py-3 sm:px-5 sm:dark:border-dark-600",
                                        onClick: openReviewModal,
                                        children: (0,_lib_get_reviews__WEBPACK_IMPORTED_MODULE_23__/* .getReview */ .T)(my_review, order_id) ? t('text-update-review') : t('text-write-review')
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_button__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                                        onClick: ()=>mutate(item.digital_file_id)
                                        ,
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons_download_icon__WEBPACK_IMPORTED_MODULE_13__/* .DownloadIcon */ ._, {
                                                className: "h-auto w-4"
                                            }),
                                            t('text-download')
                                        ]
                                    })
                                ]
                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_payment_pay_now_button__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                tracking_number: tracking_number,
                                variant: "card"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "relative shrink-0",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_dropdown__WEBPACK_IMPORTED_MODULE_10__/* .Menu */ .v, {
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_dropdown__WEBPACK_IMPORTED_MODULE_10__/* .Menu.Button */ .v.Button, {
                                            className: "flex items-center space-x-[3px] font-semibold text-brand hover:text-brand-dark sm:h-12 sm:rounded sm:border sm:border-light-500 sm:py-3 sm:px-4 sm:dark:border-dark-600",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "inline-flex h-1 w-1 shrink-0 rounded-full bg-dark-700 dark:bg-light-800"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "inline-flex h-1 w-1 shrink-0 rounded-full bg-dark-700 dark:bg-light-800"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "inline-flex h-1 w-1 shrink-0 rounded-full bg-dark-700 dark:bg-light-800"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_transition__WEBPACK_IMPORTED_MODULE_11__/* .Transition */ .u, {
                                            as: react__WEBPACK_IMPORTED_MODULE_1__.Fragment,
                                            enter: "transition ease-out duration-100",
                                            enterFrom: "transform opacity-0 scale-95",
                                            enterTo: "transform opacity-100 scale-100",
                                            leave: "transition ease-in duration-75",
                                            leaveFrom: "transform opacity-100 scale-100",
                                            leaveTo: "transform opacity-0 scale-95",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_dropdown__WEBPACK_IMPORTED_MODULE_10__/* .Menu.Items */ .v.Items, {
                                                className: "absolute top-[110%] z-30 mt-4 w-48 rounded-md bg-light py-1.5 text-dark shadow-dropdown ltr:right-0 ltr:origin-top-right rtl:left-0 rtl:origin-top-left dark:bg-dark-400 dark:text-light md:top-[78%]",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_dropdown__WEBPACK_IMPORTED_MODULE_10__/* .Menu.Item */ .v.Item, {
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_link__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
                                                        href: `${_config_routes__WEBPACK_IMPORTED_MODULE_21__/* ["default"].orderUrl */ .Z.orderUrl(item === null || item === void 0 ? void 0 : item.tracking_number)}/payment`,
                                                        className: "transition-fill-colors block w-full px-5 py-2.5 font-medium hover:bg-light-400 ltr:text-left rtl:text-right dark:hover:bg-dark-600",
                                                        children: t('text-order-details')
                                                    })
                                                })
                                            })
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    }));
}
function OrderItemLoader() {
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex animate-pulse items-start gap-4 border-b border-light-400 py-4 last:border-b-0 dark:border-dark-400 sm:items-stretch sm:gap-5",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "relative aspect-[5/3.4] w-28 flex-shrink-0 bg-light-400 dark:bg-dark-400 sm:w-32 md:w-36"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex flex-1 flex-col gap-4 sm:flex-row sm:items-center sm:justify-between md:gap-0",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "h-full flex-grow border-b border-light-400 pb-3 dark:border-dark-600 sm:border-b-0 sm:pb-0",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "mb-3 h-2.5 w-1/4 bg-light-400 dark:bg-dark-400"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "mb-6 h-2.5 w-2/4 bg-light-400 dark:bg-dark-400"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "h-2.5 w-1/5 bg-light-400 dark:bg-dark-400"
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "h-2.5 w-1/3 bg-light-400 dark:bg-dark-400 sm:h-12 sm:w-1/4 sm:rounded md:w-1/6"
                    })
                ]
            })
        ]
    }));
}
const LIMIT = 10;
const Purchases = ()=>{
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_3__.useTranslation)('common');
    const { downloadableFiles , isLoading , isLoadingMore , hasNextPage , loadMore  } = (0,_data_order__WEBPACK_IMPORTED_MODULE_12__/* .useDownloadableProductOrders */ .j_)({
        limit: LIMIT,
        orderBy: 'updated_at',
        sortedBy: 'desc'
    });
    // const {
    //   downloadableFiles,
    //   error,
    //   loadMore,
    //   isLoading,
    //   isFetching,
    //   isLoadingMore,
    //   hasNextPage,
    // } = useDownloadableProductOrders({
    //   limit: LIMIT,
    //   orderBy: 'updated_at',
    //   sortedBy: 'desc',
    // });
    // console.log(downloadableFiles, 'downloadableFiles');
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.div, {
        variants: (0,_lib_framer_motion_fade_in_bottom__WEBPACK_IMPORTED_MODULE_24__/* .fadeInBottom */ .op)(),
        className: "flex min-h-full flex-grow flex-col",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                className: "mb-3 text-15px font-medium text-dark dark:text-light",
                children: [
                    t('text-my-purchase-list'),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                        className: "ml-1 text-light-900",
                        children: [
                            "(",
                            downloadableFiles.length,
                            ")"
                        ]
                    })
                ]
            }),
            isLoading && !downloadableFiles.length && (0,_lib_range_map__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .Z)(LIMIT, (i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(OrderItemLoader, {}, `order-loader-${i}`)
            ),
            !isLoading && !downloadableFiles.length ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_cart_cart_empty__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                className: "my-auto",
                description: t('text-product-purchase-message')
            }) : downloadableFiles.map((file)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(OrderedItem, {
                    item: file
                }, file.id)
            ),
            hasNextPage && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "mt-10 grid place-content-center",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_button__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                    onClick: loadMore,
                    disabled: isLoadingMore,
                    isLoading: isLoadingMore,
                    children: t('text-loadmore')
                })
            })
        ]
    }));
};
Purchases.authorization = true;
Purchases.getLayout = function getLayout(page) {
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layouts_dashboard__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
        children: page
    }));
};
const getStaticProps = async ({ locale  })=>{
    return {
        props: {
            ...await (0,next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_2__.serverSideTranslations)(locale, [
                'common'
            ])
        },
        revalidate: 60
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Purchases);

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

/***/ 1635:
/***/ ((module) => {

module.exports = require("dayjs");

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
var __webpack_exports__ = __webpack_require__.X(0, [7730,3157,6639,714,518,5517,9573,7168,9363,9292,7076,1789,3620,1932,5349], () => (__webpack_exec__(2440)));
module.exports = __webpack_exports__;

})();