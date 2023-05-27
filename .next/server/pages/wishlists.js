"use strict";
(() => {
var exports = {};
exports.id = 515;
exports.ids = [515];
exports.modules = {

/***/ 6872:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);



const Link = ({ href , children , variant , title , target , className , locale , ...props })=>{
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
        href: href,
        locale: locale,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
            className: classnames__WEBPACK_IMPORTED_MODULE_1___default()({
                "bg-accent hover:bg-accent-hover focus:ring-accent-700' inline-flex h-9 flex-shrink-0 items-center justify-center rounded border border-transparent px-3 py-0 text-sm font-semibold leading-none text-light outline-none transition duration-300 ease-in-out focus:shadow focus:outline-none focus:ring-1": variant === 'button'
            }, className),
            title: title,
            ...props,
            children: children
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Link);


/***/ }),

/***/ 8977:
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
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6197);
/* harmony import */ var _layouts_dashboard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9292);
/* harmony import */ var _components_ui_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3879);
/* harmony import */ var _components_cart_cart_empty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7076);
/* harmony import */ var _lib_framer_motion_fade_in_bottom__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(2554);
/* harmony import */ var _lib_range_map__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(994);
/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4685);
/* harmony import */ var _assets_images_placeholders_product_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8818);
/* harmony import */ var _data_wishlist__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1748);
/* harmony import */ var _lib_hooks_use_price__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3949);
/* harmony import */ var _lib_is_free__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(2879);
/* harmony import */ var _components_cart_add_to_cart__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(7130);
/* harmony import */ var _components_product_free_download_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(3239);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _components_icons_heart_fill__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(7016);
/* harmony import */ var _components_ui_link__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(6872);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_3__, _layouts_dashboard__WEBPACK_IMPORTED_MODULE_4__, _data_wishlist__WEBPACK_IMPORTED_MODULE_9__, _lib_hooks_use_price__WEBPACK_IMPORTED_MODULE_10__, _components_cart_add_to_cart__WEBPACK_IMPORTED_MODULE_11__, _components_product_free_download_button__WEBPACK_IMPORTED_MODULE_12__]);
([framer_motion__WEBPACK_IMPORTED_MODULE_3__, _layouts_dashboard__WEBPACK_IMPORTED_MODULE_4__, _data_wishlist__WEBPACK_IMPORTED_MODULE_9__, _lib_hooks_use_price__WEBPACK_IMPORTED_MODULE_10__, _components_cart_add_to_cart__WEBPACK_IMPORTED_MODULE_11__, _components_product_free_download_button__WEBPACK_IMPORTED_MODULE_12__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



















function WishlistItem({ product  }) {
    const { removeFromWishlist , isLoading  } = (0,_data_wishlist__WEBPACK_IMPORTED_MODULE_9__/* .useRemoveFromWishlist */ .oQ)();
    const { id , slug , name , image , price: main_price , sale_price , shop ,  } = product !== null && product !== void 0 ? product : {};
    const { price , basePrice  } = (0,_lib_hooks_use_price__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .ZP)({
        amount: sale_price ? sale_price : main_price,
        baseAmount: main_price
    });
    const productSingleUrl = (product === null || product === void 0 ? void 0 : product.language) !== "en" ? `${product === null || product === void 0 ? void 0 : product.language}/products/${product === null || product === void 0 ? void 0 : product.slug}` : `/products/${product === null || product === void 0 ? void 0 : product.slug}`;
    var ref;
    const isFreeItem = (0,_lib_is_free__WEBPACK_IMPORTED_MODULE_16__/* .isFree */ .N)((ref = product === null || product === void 0 ? void 0 : product.sale_price) !== null && ref !== void 0 ? ref : product === null || product === void 0 ? void 0 : product.price);
    var ref1;
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex items-start gap-4 border-b border-light-400 py-4 last:border-b-0 dark:border-dark-400 sm:gap-5",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "relative aspect-[5/3.4] w-28 flex-shrink-0 border border-light-300 dark:border-0 sm:w-32 md:w-36",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_image__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    alt: name,
                    layout: "fill",
                    quality: 100,
                    objectFit: "cover",
                    src: (ref1 = image === null || image === void 0 ? void 0 : image.thumbnail) !== null && ref1 !== void 0 ? ref1 : _assets_images_placeholders_product_svg__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z,
                    className: "bg-light-400 dark:bg-dark-400"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "sm:flex-start flex flex-1 flex-col gap-4 sm:flex-row sm:justify-between md:gap-0",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "border-b border-light-400 pb-3 dark:border-dark-600 sm:border-b-0 sm:pb-0",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_link__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                                href: `${productSingleUrl}`,
                                className: "font-medium text-dark dark:text-light sm:mb-1.5",
                                locale: product === null || product === void 0 ? void 0 : product.language,
                                children: name
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "font-medium text-gray-500 dark:text-gray-400 ",
                                children: shop === null || shop === void 0 ? void 0 : shop.name
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "sm:mt-3",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "rounded-full bg-light-500 px-1.5 py-1 text-13px font-semibold uppercase text-brand dark:bg-dark-500 dark:text-brand-dark",
                                        children: isFreeItem ? 'Free' : price
                                    }),
                                    !isFreeItem && basePrice && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("del", {
                                        className: "ml-2 px-1 text-13px font-medium text-dark-900 dark:text-dark-700",
                                        children: basePrice
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex flex-col-reverse items-center xs:flex-row xs:gap-2.5 xs:pb-4 xs:pt-8 md:flex-nowrap md:gap-3.5 lg:gap-4",
                        children: [
                            !isFreeItem ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_cart_add_to_cart__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                item: product,
                                withPrice: false,
                                toastClassName: "-mt-10 xs:mt-0",
                                className: "mt-2.5 w-full flex-1 rounded border border-light-200 bg-brand text-brand hover:bg-transparent hover:text-light-200 dark:border-light-600 dark:bg-dark-250 dark:text-brand dark:hover:text-brand-dark xs:mt-0 sm:dark:border-dark-600"
                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_product_free_download_button__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                productId: id,
                                productSlug: slug,
                                productName: name,
                                className: "mt-2.5 w-full flex-1 text-brand xs:mt-0 "
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                type: "button",
                                className: classnames__WEBPACK_IMPORTED_MODULE_13___default()('flex min-h-[46px] w-12 shrink-0 items-center justify-center rounded border border-brand  transition-colors hover:bg-transparent hover:text-light-200 dark:border-light-600 sm:h-12 sm:dark:border-dark-600', {
                                    '!border-accent': true
                                }),
                                disabled: isLoading,
                                onClick: ()=>{
                                    removeFromWishlist(product === null || product === void 0 ? void 0 : product.id);
                                },
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons_heart_fill__WEBPACK_IMPORTED_MODULE_14__/* .HeartFillIcon */ .q, {
                                    className: "text-accent h-5 w-5 text-brand dark:text-brand dark:hover:text-brand-dark "
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    }));
}
function WishlistItemLoader(props) {
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
                        className: "h-2.5 bg-light-400 dark:bg-dark-400 sm:h-12 sm:w-28 sm:rounded "
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "ml-3 h-2.5 w-4 bg-light-400 dark:bg-dark-400 sm:h-12 sm:w-12 sm:rounded"
                    })
                ]
            })
        ]
    }));
}
const LIMIT = 10;
const MyWishlistPage = ()=>{
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation)('common');
    const { wishlists , isLoading , isLoadingMore , loadMore , hasNextPage  } = (0,_data_wishlist__WEBPACK_IMPORTED_MODULE_9__/* .useWishlist */ .Ei)();
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {
        variants: (0,_lib_framer_motion_fade_in_bottom__WEBPACK_IMPORTED_MODULE_17__/* .fadeInBottom */ .op)(),
        className: "flex min-h-full flex-grow flex-col",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                className: "mb-3 text-15px font-medium text-dark dark:text-light",
                children: [
                    t('text-wishlist-title'),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                        className: "ml-1 text-light-900",
                        children: [
                            "(",
                            wishlists.length,
                            ")"
                        ]
                    })
                ]
            }),
            isLoading && !wishlists.length && (0,_lib_range_map__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z)(LIMIT, (i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(WishlistItemLoader, {}, `order-loader-${i}`)
            ),
            !isLoading && !wishlists.length ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_cart_cart_empty__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                className: "my-auto",
                description: t('text-product-purchase-message')
            }) : wishlists.map((product)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(WishlistItem, {
                    product: product
                }, product.id)
            ),
            hasNextPage && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "mt-10 grid place-content-center",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_button__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                    onClick: loadMore,
                    disabled: isLoadingMore,
                    isLoading: isLoadingMore,
                    children: t('text-loadmore')
                })
            })
        ]
    }));
};
MyWishlistPage.authorization = true;
MyWishlistPage.getLayout = function getLayout(page) {
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layouts_dashboard__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyWishlistPage);

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
var __webpack_exports__ = __webpack_require__.X(0, [7730,3157,6639,714,518,5517,9573,7168,9363,9292,7076,3998], () => (__webpack_exec__(8977)));
module.exports = __webpack_exports__;

})();