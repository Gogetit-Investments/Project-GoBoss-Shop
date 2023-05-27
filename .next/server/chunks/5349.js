"use strict";
exports.id = 5349;
exports.ids = [5349];
exports.modules = {

/***/ 4661:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4685);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _data_order__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1932);
/* harmony import */ var _icons_credit_card_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9363);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_data_order__WEBPACK_IMPORTED_MODULE_3__]);
_data_order__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const PayNowButton = ({ tracking_number , variant ='medium' ,  })=>{
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation)();
    const { isLoading , getPaymentIntentQuery  } = (0,_data_order__WEBPACK_IMPORTED_MODULE_3__/* .useGetPaymentIntent */ .xp)({
        tracking_number: tracking_number
    });
    async function handlePayNow() {
        await getPaymentIntentQuery();
    }
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_button__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        className: classnames__WEBPACK_IMPORTED_MODULE_5___default()('w-full text-13px md:px-3', {
            'min-h-[36px] sm:h-9 ': variant === 'medium'
        }),
        onClick: handlePayNow,
        disabled: isLoading,
        isLoading: isLoading,
        children: [
            variant === 'card' && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_credit_card_icon__WEBPACK_IMPORTED_MODULE_4__/* .CreditCardIcon */ .c, {
                className: "h-4 w-4"
            }),
            t('text-pay-now')
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PayNowButton);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

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

/***/ 1731:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "T": () => (/* binding */ getReview)
/* harmony export */ });
/**
 * Helper method for find out reviews
 *
 * @param reviews
 * @param orderId
 */ function getReview(reviews, orderId) {
    return reviews === null || reviews === void 0 ? void 0 : reviews.find((review)=>{
        return (review === null || review === void 0 ? void 0 : review.order_id) === orderId;
    });
}


/***/ })

};
;