"use strict";
(() => {
var exports = {};
exports.id = 2222;
exports.ids = [2222];
exports.modules = {

/***/ 8431:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ CartCheckout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2451);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8922);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_hot_toast__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _data_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7607);
/* harmony import */ var _lib_hooks_use_price__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3949);
/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4685);
/* harmony import */ var _components_cart_lib_cart_context__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4021);
/* harmony import */ var _components_cart_lib_cart_utils__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(14);
/* harmony import */ var _components_cart_cart_wallet__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3276);
/* harmony import */ var _components_ui_forms_phone_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1761);
/* harmony import */ var _components_cart_lib_checkout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(4592);
/* harmony import */ var _components_cart_payment_payment_grid__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(9121);
/* harmony import */ var _config_routes__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(551);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(3620);
/* harmony import */ var _data_settings__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(6698);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([jotai__WEBPACK_IMPORTED_MODULE_3__, _data_client__WEBPACK_IMPORTED_MODULE_5__, _lib_hooks_use_price__WEBPACK_IMPORTED_MODULE_6__, _components_cart_cart_wallet__WEBPACK_IMPORTED_MODULE_9__, _components_ui_forms_phone_input__WEBPACK_IMPORTED_MODULE_10__, _components_cart_lib_checkout__WEBPACK_IMPORTED_MODULE_11__, _components_cart_payment_payment_grid__WEBPACK_IMPORTED_MODULE_12__, _data_settings__WEBPACK_IMPORTED_MODULE_16__]);
([jotai__WEBPACK_IMPORTED_MODULE_3__, _data_client__WEBPACK_IMPORTED_MODULE_5__, _lib_hooks_use_price__WEBPACK_IMPORTED_MODULE_6__, _components_cart_cart_wallet__WEBPACK_IMPORTED_MODULE_9__, _components_ui_forms_phone_input__WEBPACK_IMPORTED_MODULE_10__, _components_cart_lib_checkout__WEBPACK_IMPORTED_MODULE_11__, _components_cart_payment_payment_grid__WEBPACK_IMPORTED_MODULE_12__, _data_settings__WEBPACK_IMPORTED_MODULE_16__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


















function CartCheckout() {
    const { settings  } = (0,_data_settings__WEBPACK_IMPORTED_MODULE_16__/* .useSettings */ .r)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    const { locale  } = router;
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_14__.useTranslation)('common');
    const { mutate , isLoading  } = (0,react_query__WEBPACK_IMPORTED_MODULE_2__.useMutation)(_data_client__WEBPACK_IMPORTED_MODULE_5__/* ["default"].orders.create */ .Z.orders.create, {
        // onSuccess: (res) => {
        //   console.log(res, 'response');
        //   router.push(routes.orderUrl(res.tracking_number));
        // },
        onSuccess: (res)=>{
            console.log(res, 'response');
            const { tracking_number , payment_gateway , payment_intent  } = res;
            if (tracking_number) {
                var ref;
                if ([
                    _types__WEBPACK_IMPORTED_MODULE_15__/* .PaymentGateway.FULL_WALLET_PAYMENT */ .HY.FULL_WALLET_PAYMENT
                ].includes(payment_gateway)) {
                    return router.push(`${_config_routes__WEBPACK_IMPORTED_MODULE_13__/* ["default"].orderUrl */ .Z.orderUrl(tracking_number)}/payment`);
                }
                if (payment_intent === null || payment_intent === void 0 ? void 0 : (ref = payment_intent.payment_intent_info) === null || ref === void 0 ? void 0 : ref.is_redirect) {
                    var ref1;
                    return router.push(payment_intent === null || payment_intent === void 0 ? void 0 : (ref1 = payment_intent.payment_intent_info) === null || ref1 === void 0 ? void 0 : ref1.redirect_url);
                } else {
                    return router.push(`${_config_routes__WEBPACK_IMPORTED_MODULE_13__/* ["default"].orderUrl */ .Z.orderUrl(tracking_number)}/payment`);
                }
            }
        },
        onError: (err)=>{
            react_hot_toast__WEBPACK_IMPORTED_MODULE_4___default().error(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                children: t('text-profile-page-error-toast')
            }));
            console.log(err.response.data.message);
        }
    });
    const [{ payment_gateway: payment_gateway1  }] = (0,jotai__WEBPACK_IMPORTED_MODULE_3__.useAtom)(_components_cart_lib_checkout__WEBPACK_IMPORTED_MODULE_11__/* .checkoutAtom */ .hq);
    const [use_wallet_points] = (0,jotai__WEBPACK_IMPORTED_MODULE_3__.useAtom)(_components_cart_lib_checkout__WEBPACK_IMPORTED_MODULE_11__/* .useWalletPointsAtom */ .lI);
    const [payableAmount] = (0,jotai__WEBPACK_IMPORTED_MODULE_3__.useAtom)(_components_cart_lib_checkout__WEBPACK_IMPORTED_MODULE_11__/* .payableAmountAtom */ .y2);
    const [token] = (0,jotai__WEBPACK_IMPORTED_MODULE_3__.useAtom)(_components_cart_lib_checkout__WEBPACK_IMPORTED_MODULE_11__/* .verifiedTokenAtom */ ._p);
    const { items , verifiedResponse  } = (0,_components_cart_lib_cart_context__WEBPACK_IMPORTED_MODULE_8__/* .useCart */ .jD)();
    const available_items = items.filter((item)=>{
        var ref;
        return !(verifiedResponse === null || verifiedResponse === void 0 ? void 0 : (ref = verifiedResponse.unavailable_products) === null || ref === void 0 ? void 0 : ref.includes(item.id.toString()));
    });
    var _total_tax;
    // Calculate price
    const { price: tax  } = (0,_lib_hooks_use_price__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .ZP)(verifiedResponse && {
        amount: (_total_tax = verifiedResponse.total_tax) !== null && _total_tax !== void 0 ? _total_tax : 0
    });
    const base_amount = (0,_components_cart_lib_cart_utils__WEBPACK_IMPORTED_MODULE_17__/* .calculateTotal */ .tf)(available_items);
    const { price: sub_total  } = (0,_lib_hooks_use_price__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .ZP)(verifiedResponse && {
        amount: base_amount
    });
    const totalPrice = verifiedResponse ? (0,_components_cart_lib_cart_utils__WEBPACK_IMPORTED_MODULE_17__/* .calculatePaidTotal */ .eA)({
        totalAmount: base_amount,
        tax: verifiedResponse.total_tax,
        shipping_charge: verifiedResponse.shipping_charge
    }, 0) : 0;
    const { price: total  } = (0,_lib_hooks_use_price__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .ZP)(verifiedResponse && {
        amount: totalPrice
    });
    // phone number field
    const { phoneNumber  } = (0,_components_ui_forms_phone_input__WEBPACK_IMPORTED_MODULE_10__/* .usePhoneInput */ .m5)();
    function createOrder() {
        // if (
        //   (use_wallet && Boolean(payableAmount) && !token) ||
        //   (!use_wallet && !token)
        // ) {
        //   toast.error(<b>Please verify payment card</b>, {
        //     className: '-mt-10 xs:mt-0',
        //   });
        //   return;
        // }
        // if (!phoneNumber && settings?.useOtp) {
        //   toast.error(<b>{t('text-enter-phone-number')}</b>);
        //   window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        //   return;
        // }
        if (settings === null || settings === void 0 ? void 0 : settings.useOtp) {
            if (!phoneNumber) {
                react_hot_toast__WEBPACK_IMPORTED_MODULE_4___default().error(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                    children: t('text-enter-phone-number')
                }));
                window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: 'smooth'
                });
                return;
            }
        }
        var ref;
        mutate({
            amount: base_amount,
            total: totalPrice,
            paid_total: totalPrice,
            products: available_items.map((item)=>({
                    product_id: item.id,
                    order_quantity: item.quantity,
                    unit_price: item.price,
                    subtotal: item.price * item.quantity
                })
            ),
            payment_gateway: use_wallet_points ? _types__WEBPACK_IMPORTED_MODULE_15__/* .PaymentGateway.FULL_WALLET_PAYMENT */ .HY.FULL_WALLET_PAYMENT : payment_gateway1,
            use_wallet_points,
            ...token && {
                token
            },
            sales_tax: (ref = verifiedResponse === null || verifiedResponse === void 0 ? void 0 : verifiedResponse.total_tax) !== null && ref !== void 0 ? ref : 0,
            customer_contact: phoneNumber ? phoneNumber : '1'
        });
    }
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "mt-10 border-t border-light-400 bg-light pt-6 pb-7 dark:border-dark-400 dark:bg-dark-250 sm:bottom-0 sm:mt-12 sm:pt-8 sm:pb-9",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "mb-6 flex flex-col gap-3 text-dark dark:text-light sm:mb-7",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex justify-between",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: t('text-subtotal')
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                className: "font-semibold",
                                children: sub_total
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex justify-between",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: t('text-tax')
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                className: "font-semibold",
                                children: tax
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "mt-4 flex justify-between border-t border-light-400 pt-5 dark:border-dark-400",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: t('text-total')
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                className: "font-semibold",
                                children: total
                            })
                        ]
                    })
                ]
            }),
            verifiedResponse && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_cart_cart_wallet__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                totalPrice: totalPrice,
                walletAmount: verifiedResponse.wallet_amount,
                walletCurrency: verifiedResponse.wallet_currency
            }),
            use_wallet_points && !Boolean(payableAmount) ? null : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_cart_payment_payment_grid__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_button__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                disabled: isLoading,
                isLoading: isLoading,
                onClick: createOrder,
                className: "w-full md:h-[50px] md:text-sm",
                children: t('text-submit-order')
            })
        ]
    }));
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3276:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ CartWallet)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2451);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_hooks_use_price__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3949);
/* harmony import */ var _components_ui_forms_checkbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9668);
/* harmony import */ var _lib_is_negative__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1758);
/* harmony import */ var _components_cart_lib_checkout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4592);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([jotai__WEBPACK_IMPORTED_MODULE_1__, _lib_hooks_use_price__WEBPACK_IMPORTED_MODULE_4__, _components_cart_lib_checkout__WEBPACK_IMPORTED_MODULE_6__]);
([jotai__WEBPACK_IMPORTED_MODULE_1__, _lib_hooks_use_price__WEBPACK_IMPORTED_MODULE_4__, _components_cart_lib_checkout__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









function CartWallet({ totalPrice , walletAmount , walletCurrency  }) {
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_7__.useTranslation)('common');
    const [use_wallet, setUseWallet] = (0,jotai__WEBPACK_IMPORTED_MODULE_1__.useAtom)(_components_cart_lib_checkout__WEBPACK_IMPORTED_MODULE_6__/* .useWalletPointsAtom */ .lI);
    const [calculatePayableAmount, setCalculatePayableAmount] = (0,jotai__WEBPACK_IMPORTED_MODULE_1__.useAtom)(_components_cart_lib_checkout__WEBPACK_IMPORTED_MODULE_6__/* .payableAmountAtom */ .y2);
    const { 0: calculateCurrentWalletCurrency , 1: setCalculateCurrentWalletCurrency  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(walletCurrency);
    const { price: currentWalletCurrency  } = (0,_lib_hooks_use_price__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .ZP)({
        amount: Number(calculateCurrentWalletCurrency)
    });
    const { price: payableAmount  } = (0,_lib_hooks_use_price__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .ZP)({
        amount: calculatePayableAmount
    });
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (use_wallet) {
            const calculatedCurrentWalletCurrencyAfterPayment = walletCurrency - totalPrice;
            if ((0,_lib_is_negative__WEBPACK_IMPORTED_MODULE_8__/* .isNegative */ .n)(calculatedCurrentWalletCurrencyAfterPayment)) {
                setCalculateCurrentWalletCurrency(0);
                setCalculatePayableAmount(Math.abs(calculatedCurrentWalletCurrencyAfterPayment));
            } else {
                setCalculateCurrentWalletCurrency(calculatedCurrentWalletCurrencyAfterPayment);
                setCalculatePayableAmount(0);
            }
        } else {
            setCalculateCurrentWalletCurrency(walletCurrency);
            setCalculatePayableAmount(0);
        }
    }, [
        setCalculatePayableAmount,
        totalPrice,
        use_wallet,
        walletCurrency
    ]);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "mt-2 space-y-3",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "text-body flex justify-between",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                children: t('text-wallet-points-title')
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                children: walletAmount
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "text-body flex justify-between",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                children: t('text-wallet-currency')
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                children: currentWalletCurrency
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_forms_checkbox__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                name: "use_wallet",
                label: "text-wallet-input-label",
                onChange: ()=>setUseWallet(!use_wallet)
                ,
                checked: use_wallet,
                className: classnames__WEBPACK_IMPORTED_MODULE_3___default()('mt-4 mb-7 flex-row-reverse rounded border border-light-400 bg-light-100 py-2.5 hover:bg-transparent ltr:pr-2.5 rtl:pl-2.5 dark:border-dark-500/80 dark:bg-dark-400/80 dark:hover:bg-transparent', !walletAmount ? 'cursor-not-allowed' : 'cursor-pointer'),
                disabled: !walletAmount
            }),
            use_wallet && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "mt-1 mb-7 flex justify-between border-t-4 border-double border-light-400 pt-4 dark:border-dark-400",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "text-heading text-15px font-semibold",
                        children: "Payable Amount"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "text-heading text-15px font-semibold",
                        children: payableAmount
                    })
                ]
            })
        ]
    }));
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4592:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hq": () => (/* binding */ checkoutAtom),
/* harmony export */   "HA": () => (/* binding */ paymentGatewayAtom),
/* harmony export */   "lI": () => (/* binding */ useWalletPointsAtom),
/* harmony export */   "y2": () => (/* binding */ payableAmountAtom),
/* harmony export */   "_p": () => (/* binding */ verifiedTokenAtom)
/* harmony export */ });
/* unused harmony exports defaultCheckout, clearCheckoutAtom, customerContactAtom, verifiedResponseAtom, walletAtom */
/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2451);
/* harmony import */ var jotai_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2752);
/* harmony import */ var _lib_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6482);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3620);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([jotai__WEBPACK_IMPORTED_MODULE_0__, jotai_utils__WEBPACK_IMPORTED_MODULE_1__]);
([jotai__WEBPACK_IMPORTED_MODULE_0__, jotai_utils__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const defaultCheckout = {
    payment_gateway: _types__WEBPACK_IMPORTED_MODULE_2__/* .PaymentGateway.STRIPE */ .HY.STRIPE,
    verified_response: null
};
const checkoutAtom = (0,jotai_utils__WEBPACK_IMPORTED_MODULE_1__.atomWithStorage)(_lib_constants__WEBPACK_IMPORTED_MODULE_3__/* .CHECKOUT */ .iK, defaultCheckout);
const clearCheckoutAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_0__.atom)(null, (_get, set, _data)=>{
    return set(checkoutAtom, defaultCheckout);
});
const paymentGatewayAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_0__.atom)((get)=>get(checkoutAtom).payment_gateway
, (get, set, data)=>{
    const prev = get(checkoutAtom);
    return set(checkoutAtom, {
        ...prev,
        payment_gateway: data
    });
});
const customerContactAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_0__.atom)((get)=>get(checkoutAtom).customer_contact
, (get, set, data)=>{
    const prev = get(checkoutAtom);
    return set(checkoutAtom, {
        ...prev,
        customer_contact: data
    });
});
const verifiedResponseAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_0__.atom)((get)=>get(checkoutAtom).verified_response
, (get, set, data)=>{
    const prev = get(checkoutAtom);
    return set(checkoutAtom, {
        ...prev,
        verified_response: data
    });
});
const walletAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_0__.atom)((get)=>get(checkoutAtom).use_wallet
, (get, set)=>{
    const prev = get(checkoutAtom);
    return set(checkoutAtom, {
        ...prev,
        use_wallet: !prev.use_wallet
    });
});
// export const payableAmountAtom = atom(
//   (get) => get(checkoutAtom).payable_amount,
//   (get, set, data: number) => {
//     const prev = get(checkoutAtom);
//     return set(checkoutAtom, { ...prev, payable_amount: data });
//   }
// );
const useWalletPointsAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_0__.atom)(false);
const payableAmountAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_0__.atom)(0);
const verifiedTokenAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_0__.atom)(null);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9121:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3620);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5675);
/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2451);
/* harmony import */ var _components_ui_radio_group__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1236);
/* harmony import */ var _components_cart_lib_checkout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4592);
/* harmony import */ var _components_cart_payment_payment_online__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5437);
/* harmony import */ var _data_settings__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6698);
/* harmony import */ var _components_ui_alert__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5239);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([jotai__WEBPACK_IMPORTED_MODULE_6__, _components_ui_radio_group__WEBPACK_IMPORTED_MODULE_7__, _components_cart_lib_checkout__WEBPACK_IMPORTED_MODULE_8__, _data_settings__WEBPACK_IMPORTED_MODULE_10__]);
([jotai__WEBPACK_IMPORTED_MODULE_6__, _components_ui_radio_group__WEBPACK_IMPORTED_MODULE_7__, _components_cart_lib_checkout__WEBPACK_IMPORTED_MODULE_8__, _data_settings__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












const PaymentGroupOption = ({ payment: { name , value , icon , width , height  } , theme ,  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_radio_group__WEBPACK_IMPORTED_MODULE_7__/* .RadioGroup.Option */ .E.Option, {
        value: value,
        children: ({ checked  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: classnames__WEBPACK_IMPORTED_MODULE_3___default()('relative flex h-[5.625rem] w-full cursor-pointer items-center justify-center rounded border bg-light-300 py-3 text-center dark:border-[#3A3A3A] dark:bg-[#303030]', checked && 'border-brand dark:border-brand-dark'),
                children: [
                    console.log(checked),
                    icon ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_5__["default"], {
                            src: icon,
                            alt: name,
                            className: "h-[30px]",
                            width: width,
                            height: height
                        })
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "text-heading text-xs font-semibold",
                        children: name
                    })
                ]
            })
    }, value)
;
const PaymentGrid = ({ className , theme ,  })=>{
    var ref2;
    const [gateway, setGateway] = (0,jotai__WEBPACK_IMPORTED_MODULE_6__.useAtom)(_components_cart_lib_checkout__WEBPACK_IMPORTED_MODULE_8__/* .paymentGatewayAtom */ .HA);
    const { 0: errorMessage , 1: setErrorMessage  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation)('common');
    const { settings , isLoading  } = (0,_data_settings__WEBPACK_IMPORTED_MODULE_10__/* .useSettings */ .r)();
    // FixME
    // @ts-ignore
    const AVAILABLE_PAYMENT_METHODS_MAP = {
        STRIPE: {
            name: 'Stripe',
            value: _types__WEBPACK_IMPORTED_MODULE_4__/* .PaymentGateway.STRIPE */ .HY.STRIPE,
            icon: '/payment-gateways/stripe.png',
            component: _components_cart_payment_payment_online__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z,
            width: 40,
            height: 28
        },
        PAYPAL: {
            name: 'Paypal',
            value: _types__WEBPACK_IMPORTED_MODULE_4__/* .PaymentGateway.PAYPAL */ .HY.PAYPAL,
            icon: '/payment-gateways/paypal.png',
            component: _components_cart_payment_payment_online__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z,
            width: 82,
            height: 21
        },
        RAZORPAY: {
            name: 'RazorPay',
            value: _types__WEBPACK_IMPORTED_MODULE_4__/* .PaymentGateway.RAZORPAY */ .HY.RAZORPAY,
            icon: '/payment-gateways/razorpay.png',
            component: _components_cart_payment_payment_online__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z,
            width: 82,
            height: 40
        },
        MOLLIE: {
            name: 'Mollie',
            value: _types__WEBPACK_IMPORTED_MODULE_4__/* .PaymentGateway.MOLLIE */ .HY.MOLLIE,
            icon: '/payment-gateways/mollie.png',
            component: _components_cart_payment_payment_online__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z,
            width: 100,
            height: 52
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (settings === null || settings === void 0 ? void 0 : settings.paymentGateway) {
            var ref;
            setGateway(settings === null || settings === void 0 ? void 0 : (ref = settings.paymentGateway) === null || ref === void 0 ? void 0 : ref.toUpperCase());
        }
    }, [
        isLoading,
        settings === null || settings === void 0 ? void 0 : settings.paymentGateway
    ]);
    const PaymentMethod = AVAILABLE_PAYMENT_METHODS_MAP[gateway];
    var ref1;
    const Component = (ref1 = PaymentMethod === null || PaymentMethod === void 0 ? void 0 : PaymentMethod.component) !== null && ref1 !== void 0 ? ref1 : _components_cart_payment_payment_online__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z;
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: className,
        children: [
            errorMessage ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_alert__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                message: t(`common:${errorMessage}`),
                variant: "error",
                closeable: true,
                className: "mt-5",
                onClose: ()=>setErrorMessage(null)
            }) : null,
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_radio_group__WEBPACK_IMPORTED_MODULE_7__/* .RadioGroup */ .E, {
                value: gateway,
                onChange: setGateway,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_radio_group__WEBPACK_IMPORTED_MODULE_7__/* .RadioGroup.Label */ .E.Label, {
                        className: "mb-5 block text-13px font-medium dark:text-white",
                        children: t('text-choose-payment')
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "mb-8 grid grid-cols-2 gap-4 md:grid-cols-3",
                        children: (settings === null || settings === void 0 ? void 0 : settings.paymentGateway) && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(PaymentGroupOption, {
                            theme: theme,
                            payment: AVAILABLE_PAYMENT_METHODS_MAP[settings === null || settings === void 0 ? void 0 : (ref2 = settings.paymentGateway) === null || ref2 === void 0 ? void 0 : ref2.toUpperCase()]
                        })
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PaymentGrid);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5437:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_1__);


const PaymentOnline = ()=>{
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_1__.useTranslation)('common');
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
        className: "text-body block text-sm",
        children: t('text-payment-order')
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PaymentOnline);


/***/ }),

/***/ 5239:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_icons_close_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3031);



const variantClasses = {
    info: 'bg-blue-100 text-blue-600',
    warning: 'bg-yellow-100 text-yellow-600',
    error: 'bg-red-100 text-red-500',
    success: 'bg-green-100 text-accent',
    infoOutline: 'border border-blue-200 text-blue-600',
    warningOutline: 'border border-yellow-200 text-yellow-600',
    errorOutline: 'border border-red-200 text-red-600',
    successOutline: 'border border-green-200 text-green-600'
};
const Alert = ({ message , closeable =false , variant ='info' , className , onClose ,  })=>{
    if (!message) return null;
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('relative flex items-center justify-between rounded py-4 px-5 shadow-sm', variantClasses[variant], className),
        role: "alert",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: "text-sm",
                children: message
            }),
            closeable && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                "data-dismiss": "alert",
                "aria-label": "Close",
                onClick: onClose,
                title: "Close alert",
                className: "absolute top-1/2 -mt-3 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-red-500 transition-colors duration-200 hover:bg-gray-300 hover:bg-opacity-25 focus:bg-gray-300 focus:bg-opacity-25 focus:outline-none ltr:right-2 ltr:-mr-0.5 rtl:left-2 rtl:-ml-0.5",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    "aria-hidden": "true",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons_close_icon__WEBPACK_IMPORTED_MODULE_2__/* .CloseIcon */ .T, {
                        className: "h-3 w-3"
                    })
                })
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Alert);


/***/ }),

/***/ 1236:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E": () => (/* reexport safe */ _headlessui_react__WEBPACK_IMPORTED_MODULE_0__.RadioGroup)
/* harmony export */ });
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1185);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_headlessui_react__WEBPACK_IMPORTED_MODULE_0__]);
_headlessui_react__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6357:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6641);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_seo__WEBPACK_IMPORTED_MODULE_1__);


const Seo = ({ title , description , url , ...props })=>{
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_seo__WEBPACK_IMPORTED_MODULE_1__.NextSeo, {
        title: title,
        description: description,
        openGraph: {
            url: `${"http://localhost:3000"}/${url}`,
            title,
            description
        },
        ...props
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Seo);


/***/ }),

/***/ 1758:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "n": () => (/* binding */ isNegative)
/* harmony export */ });
function isNegative(value) {
    return value < 0;
}


/***/ }),

/***/ 4250:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config_routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(551);
/* harmony import */ var _layouts_general_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6524);
/* harmony import */ var _components_cart_cart_item_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5262);
/* harmony import */ var _components_cart_cart_empty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7076);
/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4685);
/* harmony import */ var _components_ui_forms_phone_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1761);
/* harmony import */ var _components_cart_lib_cart_context__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4021);
/* harmony import */ var _lib_hooks_use_price__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3949);
/* harmony import */ var _layouts_seo__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6357);
/* harmony import */ var _components_icons_long_arrow_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(842);
/* harmony import */ var _data_client__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(7607);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(1175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _components_cart_cart_checkout__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(8431);
/* harmony import */ var _data_user__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(6639);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(5460);
/* harmony import */ var next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_17__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_layouts_general_layout__WEBPACK_IMPORTED_MODULE_3__, _components_cart_cart_item_list__WEBPACK_IMPORTED_MODULE_4__, _components_ui_forms_phone_input__WEBPACK_IMPORTED_MODULE_7__, _lib_hooks_use_price__WEBPACK_IMPORTED_MODULE_9__, _data_client__WEBPACK_IMPORTED_MODULE_12__, _components_cart_cart_checkout__WEBPACK_IMPORTED_MODULE_14__, _data_user__WEBPACK_IMPORTED_MODULE_15__]);
([_layouts_general_layout__WEBPACK_IMPORTED_MODULE_3__, _components_cart_cart_item_list__WEBPACK_IMPORTED_MODULE_4__, _components_ui_forms_phone_input__WEBPACK_IMPORTED_MODULE_7__, _lib_hooks_use_price__WEBPACK_IMPORTED_MODULE_9__, _data_client__WEBPACK_IMPORTED_MODULE_12__, _components_cart_cart_checkout__WEBPACK_IMPORTED_MODULE_14__, _data_user__WEBPACK_IMPORTED_MODULE_15__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


















const CheckoutPage = ()=>{
    var ref;
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    const { me  } = (0,_data_user__WEBPACK_IMPORTED_MODULE_15__/* .useMe */ .P)();
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_16__.useTranslation)('common');
    const { items , total , totalItems , isEmpty , setVerifiedResponse , verifiedResponse ,  } = (0,_components_cart_lib_cart_context__WEBPACK_IMPORTED_MODULE_8__/* .useCart */ .jD)();
    const { price: totalPrice  } = (0,_lib_hooks_use_price__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .ZP)({
        amount: total
    });
    const { mutate , isLoading  } = (0,react_query__WEBPACK_IMPORTED_MODULE_13__.useMutation)(_data_client__WEBPACK_IMPORTED_MODULE_12__/* ["default"].orders.verify */ .Z.orders.verify, {
        onSuccess: (res)=>{
            setVerifiedResponse(res);
        }
    });
    function verify() {
        mutate({
            amount: total,
            products: items.map((item)=>({
                    product_id: item.id,
                    order_quantity: item.quantity,
                    unit_price: item.price,
                    subtotal: item.price * item.quantity
                })
            )
        });
    }
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layouts_seo__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                title: "Checkout",
                description: "Fastest digital download template built with React, NextJS, TypeScript, React-Query and Tailwind CSS.",
                url: _config_routes__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z === null || _config_routes__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z === void 0 ? void 0 : _config_routes__WEBPACK_IMPORTED_MODULE_2__/* ["default"].checkout */ .Z.checkout
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "mx-auto flex h-full w-full max-w-screen-sm flex-col p-4 pt-6 sm:p-5 sm:pt-8 md:pt-10 3xl:pt-12",
                children: [
                    !isEmpty && Boolean(verifiedResponse) ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "mb-4 bg-light shadow-card dark:bg-dark-250 dark:shadow-none md:mb-5 3xl:mb-6",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                className: "flex items-center justify-between border-b border-light-400 px-5 py-4 text-sm font-medium text-dark dark:border-dark-400 dark:text-light sm:py-5 sm:px-7 md:text-base",
                                children: t('text-checkout-title')
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "px-5 py-4 sm:py-6 sm:px-7",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_forms_phone_input__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .ZP, {
                                    defaultValue: me === null || me === void 0 ? void 0 : (ref = me.profile) === null || ref === void 0 ? void 0 : ref.contact
                                })
                            })
                        ]
                    }) : null,
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "bg-light shadow-card dark:bg-dark-250 dark:shadow-none",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                                className: "flex items-center justify-between border-b border-light-400 px-5 py-4 text-sm font-medium text-dark dark:border-dark-400 dark:text-light sm:py-5 sm:px-7 md:text-base",
                                children: [
                                    t('text-checkout-title-two'),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                        className: "font-normal text-dark-700",
                                        children: [
                                            "(",
                                            totalItems,
                                            ")"
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "px-5 pt-9 sm:px-7 sm:pt-11",
                                children: [
                                    !isEmpty ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_cart_cart_item_list__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                        className: "pl-3"
                                    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_cart_cart_empty__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {}),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "sticky bottom-11 z-[5] mt-10 border-t border-light-400 bg-light pt-6 pb-7 dark:border-dark-400 dark:bg-dark-250 sm:bottom-0 sm:mt-12 sm:pt-8 sm:pb-9",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_button__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                                    onClick: ()=>router.push(_config_routes__WEBPACK_IMPORTED_MODULE_2__/* ["default"].home */ .Z.home)
                                                    ,
                                                    className: "w-full md:h-[50px] md:text-sm",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons_long_arrow_icon__WEBPACK_IMPORTED_MODULE_11__/* .LongArrowIcon */ .f, {
                                                            className: "h-4 w-4"
                                                        }),
                                                        t('404-back-home')
                                                    ]
                                                })
                                            })
                                        ]
                                    }),
                                    !isEmpty && !Boolean(verifiedResponse) && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "sticky bottom-11 z-[5] mt-10 border-t border-light-400 bg-light pt-6 pb-7 dark:border-dark-400 dark:bg-dark-250 sm:bottom-0 sm:mt-12 sm:pt-8 sm:pb-9",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "mb-6 flex flex-col gap-3 text-dark dark:text-light sm:mb-7",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "flex justify-between",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                children: t('text-subtotal')
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                                                className: "font-semibold",
                                                                children: totalPrice
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "flex justify-between",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                children: t('text-tax')
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                                                className: "font-semibold",
                                                                children: t('text-calculated-checkout')
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_button__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                                className: "w-full md:h-[50px] md:text-sm",
                                                onClick: verify,
                                                isLoading: isLoading,
                                                children: t('text-check-availability')
                                            })
                                        ]
                                    }),
                                    !isEmpty && Boolean(verifiedResponse) && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_cart_cart_checkout__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {})
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    }));
};
CheckoutPage.authorization = true;
CheckoutPage.getLayout = function getLayout(page) {
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layouts_general_layout__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        children: page
    }));
};
const getStaticProps = async ({ locale  })=>{
    return {
        props: {
            ...await (0,next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_17__.serverSideTranslations)(locale, [
                'common'
            ])
        },
        revalidate: 60
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CheckoutPage);

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

/***/ 5452:
/***/ ((module) => {

module.exports = require("react-phone-input-2");

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

/***/ 2752:
/***/ ((module) => {

module.exports = import("jotai/utils");;

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
var __webpack_exports__ = __webpack_require__.X(0, [7730,3157,6639,714,518,5517,6524,7076,3620,5262,842,1761,9668], () => (__webpack_exec__(4250)));
module.exports = __webpack_exports__;

})();