"use strict";
exports.id = 5262;
exports.ids = [5262];
exports.modules = {

/***/ 5262:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ CartItemList)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8922);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_hot_toast__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_cart_lib_cart_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4021);
/* harmony import */ var _components_icons_close_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3031);
/* harmony import */ var _components_cart_cart_item__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7994);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_cart_cart_item__WEBPACK_IMPORTED_MODULE_5__]);
_components_cart_cart_item__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







function CartItemList({ className  }) {
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_6__.useTranslation)('common');
    const { items , clearItemFromCart , verifiedResponse  } = (0,_components_cart_lib_cart_context__WEBPACK_IMPORTED_MODULE_3__/* .useCart */ .jD)();
    function handleClearItemFromCart(id) {
        clearItemFromCart(id);
        react_hot_toast__WEBPACK_IMPORTED_MODULE_2___default().success(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
            children: t('text-remove-item-from-cart-message')
        }));
    }
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
        role: "list",
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('-my-6 w-full', className),
        children: items.map((item)=>{
            var ref;
            const notAvailable = verifiedResponse === null || verifiedResponse === void 0 ? void 0 : (ref = verifiedResponse.unavailable_products) === null || ref === void 0 ? void 0 : ref.find((id)=>id === item.id
            );
            return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                className: "relative ml-4 flex border-b border-light-300 last-of-type:border-b-0 dark:border-dark-500 xs:ml-6",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        type: "button",
                        className: "absolute -left-8 top-1/2 -mt-3.5 flex-shrink-0 p-2 font-medium text-dark-900 hover:text-dark dark:text-dark-800 dark:hover:text-light-900 xs:-left-10",
                        onClick: ()=>handleClearItemFromCart(item.id)
                        ,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons_close_icon__WEBPACK_IMPORTED_MODULE_4__/* .CloseIcon */ .T, {
                            className: "h-3.5 w-3.5"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_cart_cart_item__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        item: item,
                        notAvailable: !!notAvailable
                    })
                ]
            }, item.id));
        })
    }));
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7994:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ CartItem)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_hooks_use_price__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3949);
/* harmony import */ var _components_ui_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3879);
/* harmony import */ var _components_ui_links_anchor_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3813);
/* harmony import */ var _config_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(551);
/* harmony import */ var _assets_images_placeholders_product_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8818);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_hooks_use_price__WEBPACK_IMPORTED_MODULE_1__]);
_lib_hooks_use_price__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






function CartItem({ item , notAvailable  }) {
    const { name , image , slug , price , shop , quantity  } = item;
    const { price: itemPrice  } = (0,_lib_hooks_use_price__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP)({
        amount: price
    });
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex w-full items-start gap-4 py-3",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "relative aspect-[5/3.4] w-28 flex-shrink-0 border border-light-300 bg-light-300 dark:border-0 dark:bg-dark-500 xs:w-32",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_image__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                    alt: name,
                    layout: "fill",
                    src: image !== null && image !== void 0 ? image : _assets_images_placeholders_product_svg__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z,
                    objectFit: "cover"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "w-[calc(100%-125px)] text-13px font-medium xs:w-[calc(100%-145px)] sm:w-[calc(100%-150px)]",
                children: [
                    notAvailable && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "mb-1 inline-block rounded-2xl text-xs font-semibold text-red-500",
                        children: "Not Available"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                        className: "truncate text-dark dark:text-light",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_links_anchor_link__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                            href: _config_routes__WEBPACK_IMPORTED_MODULE_4__/* ["default"].productUrl */ .Z.productUrl(slug),
                            className: "transition-colors hover:text-brand-dark",
                            children: name
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "mt-1 mb-2.5",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_links_anchor_link__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                            href: _config_routes__WEBPACK_IMPORTED_MODULE_4__/* ["default"].shopUrl */ .Z.shopUrl(shop.slug),
                            className: "text-light-base transition-colors hover:text-brand-dark dark:text-dark-base",
                            children: shop.name
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                        className: "flex items-center gap-1",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "rounded-2xl bg-light-300 p-1.5 font-semibold uppercase leading-none text-brand-dark dark:bg-dark-500",
                                children: itemPrice
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                className: "text-light-base dark:text-dark-base",
                                children: [
                                    "X ",
                                    quantity
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    }));
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;