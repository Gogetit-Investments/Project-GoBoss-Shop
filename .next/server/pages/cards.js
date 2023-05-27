"use strict";
(() => {
var exports = {};
exports.id = 8728;
exports.ids = [8728];
exports.modules = {

/***/ 3398:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/amex.8fb0a70c.svg","height":48,"width":72});

/***/ }),

/***/ 2447:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/diners.d8b09aff.svg","height":48,"width":72});

/***/ }),

/***/ 7354:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/discover.5052bdb7.svg","height":48,"width":72});

/***/ }),

/***/ 5208:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/fallback-image.29ac491d.png","height":76,"width":100,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAMAAADJ2y/JAAAAHlBMVEXo6OjX19fIyMjQ0NDr6+vq6urX19fr6+vb29vHx8fjNmQjAAAACHRSTlP8/Om0xtrm/unobdoAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAsSURBVAiZJcbBDQAgDAOxSwsk3X9hhPDLbB4vGAw2Dk4w1igJaOavq6qO+gIUTADQX8GMzAAAAABJRU5ErkJggg=="});

/***/ }),

/***/ 4589:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/jcb.90f209c6.svg","height":48,"width":72});

/***/ }),

/***/ 459:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/mastercard.1e9b74a9.svg","height":48,"width":72});

/***/ }),

/***/ 1031:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/unionpay.865063eb.svg","height":48,"width":72});

/***/ }),

/***/ 7707:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/visa.cfd1b700.svg","height":48,"width":72});

/***/ }),

/***/ 5854:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_modal_views_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5335);
/* harmony import */ var _components_icons_plus_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3713);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _data_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6698);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_data_settings__WEBPACK_IMPORTED_MODULE_4__]);
_data_settings__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const CardViewHeader = ()=>{
    const { openModal  } = (0,_components_modal_views_context__WEBPACK_IMPORTED_MODULE_1__/* .useModalAction */ .SO)();
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_3__.useTranslation)('common');
    const { settings  } = (0,_data_settings__WEBPACK_IMPORTED_MODULE_4__/* .useSettings */ .r)();
    const handleAddNewCard = ()=>{
        openModal('ADD_NEW_CARD', {
            paymentGateway: settings === null || settings === void 0 ? void 0 : settings.paymentGateway
        });
    };
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "mb-8 flex items-center justify-between",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                    className: "text-15px font-medium text-dark dark:text-light",
                    children: t('profile-sidebar-my-cards')
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                    onClick: handleAddNewCard,
                    className: "transition-fill-colors flex items-center justify-center gap-2 text-sm font-semibold text-brand duration-200 hover:text-brand-dark",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons_plus_icon__WEBPACK_IMPORTED_MODULE_2__/* .PlusIcon */ .p, {
                            width: 13,
                            height: 13
                        }),
                        t('profile-add-cards')
                    ]
                })
            ]
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CardViewHeader);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1277:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_modal_views_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5335);
/* harmony import */ var _components_ui_transition__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6604);
/* harmony import */ var _data_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4113);
/* harmony import */ var _components_ui_dropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2353);
/* harmony import */ var _assets_cards_amex_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3398);
/* harmony import */ var _assets_cards_diners_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2447);
/* harmony import */ var _assets_cards_discover_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7354);
/* harmony import */ var _assets_cards_jcb_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4589);
/* harmony import */ var _assets_cards_mastercard_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(459);
/* harmony import */ var _assets_cards_unionpay_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1031);
/* harmony import */ var _assets_cards_visa_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(7707);
/* harmony import */ var _components_ui_image__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(3879);
/* harmony import */ var _components_ui_table__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(9662);
/* harmony import */ var _lib_locals__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(1757);
/* harmony import */ var _components_icons_check_icon_with_bg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(5930);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _assets_cards_fallback_image_png__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(5208);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_ui_transition__WEBPACK_IMPORTED_MODULE_3__, _data_card__WEBPACK_IMPORTED_MODULE_4__, _components_ui_dropdown__WEBPACK_IMPORTED_MODULE_5__]);
([_components_ui_transition__WEBPACK_IMPORTED_MODULE_3__, _data_card__WEBPACK_IMPORTED_MODULE_4__, _components_ui_dropdown__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



















let images = {
    amex: _assets_cards_amex_svg__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z,
    visa: _assets_cards_visa_svg__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z,
    diners: _assets_cards_diners_svg__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z,
    jcb: _assets_cards_jcb_svg__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z,
    mastercard: _assets_cards_mastercard_svg__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z,
    unionpay: _assets_cards_unionpay_svg__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z,
    discover: _assets_cards_discover_svg__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z
};
const CardsView = ({ view ='normal' , payments =[] , showContinuePayment =false  })=>{
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_17__.useTranslation)('common');
    const { openModal  } = (0,_components_modal_views_context__WEBPACK_IMPORTED_MODULE_2__/* .useModalAction */ .SO)();
    const { createDefaultPaymentMethod , isLoading: cardLoading  } = (0,_data_card__WEBPACK_IMPORTED_MODULE_4__/* .useDefaultPaymentMethod */ .VR)();
    function deleteCard(id) {
        openModal('DELETE_CARD_MODAL', {
            card_id: id
        });
    }
    const makeDefaultCard = async (id)=>{
        await createDefaultPaymentMethod({
            method_id: id
        });
    };
    const { alignLeft , alignRight  } = (0,_lib_locals__WEBPACK_IMPORTED_MODULE_15__/* .useIsRTL */ .S)();
    const columns = [
        {
            title: '',
            dataIndex: '',
            key: '',
            width: 50,
            align: alignLeft,
            render: (record)=>{
                return (record === null || record === void 0 ? void 0 : record.default_card) ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "w-9 text-brand",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons_check_icon_with_bg__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                        className: "h-5 w-5"
                    })
                }) : '';
            }
        },
        {
            title: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                children: t('text-company')
            }),
            dataIndex: 'network',
            key: 'network',
            width: 120,
            align: alignLeft,
            render: (network)=>{
                return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "w-11",
                    children: network ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_image__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                        src: images[network],
                        width: 44,
                        height: 30,
                        layout: "responsive",
                        alt: t('text-company')
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_image__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                        src: _assets_cards_fallback_image_png__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z,
                        width: 40,
                        height: 28,
                        layout: "responsive",
                        alt: t('text-company')
                    })
                }));
            }
        },
        {
            title: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                children: t('text-card-number')
            }),
            dataIndex: 'last4',
            key: 'last4',
            align: alignLeft,
            width: 170,
            render: (last4)=>{
                return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: "truncate",
                    children: `**** **** **** ${last4}`
                }));
            }
        },
        {
            title: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                children: t('text-card-owner-name')
            }),
            dataIndex: 'owner_name',
            key: 'owner_name',
            align: alignLeft,
            width: 150,
            render: (owner_name)=>{
                return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: "truncate",
                    children: owner_name
                }));
            }
        },
        {
            title: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                children: t('text-expire-date')
            }),
            dataIndex: 'expires',
            key: 'expires',
            align: alignLeft,
            width: 180,
            render: (expires)=>{
                return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: "truncate",
                    children: expires
                }));
            }
        },
        {
            title: '',
            dataIndex: '',
            align: alignRight,
            width: 50,
            render: (card)=>{
                return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "relative flex items-center justify-end",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_dropdown__WEBPACK_IMPORTED_MODULE_5__/* .Menu */ .v, {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_dropdown__WEBPACK_IMPORTED_MODULE_5__/* .Menu.Button */ .v.Button, {
                                className: "relative inline-flex h-8 items-center justify-center space-x-1",
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
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_transition__WEBPACK_IMPORTED_MODULE_3__/* .Transition */ .u, {
                                as: react__WEBPACK_IMPORTED_MODULE_1__.Fragment,
                                enter: "transition ease-out duration-100",
                                enterFrom: "transform opacity-0 scale-95",
                                enterTo: "transform opacity-100 scale-100",
                                leave: "transition ease-in duration-75",
                                leaveFrom: "transform opacity-100 scale-100",
                                leaveTo: "transform opacity-0 scale-95",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_dropdown__WEBPACK_IMPORTED_MODULE_5__/* .Menu.Items */ .v.Items, {
                                    className: "absolute top-[84%] z-30 mt-4 w-56 rounded-md bg-light py-1.5 text-dark shadow-dropdown ltr:right-0 ltr:origin-top-right rtl:left-0 rtl:origin-top-left dark:bg-dark-400 dark:text-light",
                                    children: [
                                        !card.default_card && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_dropdown__WEBPACK_IMPORTED_MODULE_5__/* .Menu.Item */ .v.Item, {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                type: "button",
                                                className: "transition-fill-colors w-full px-5 py-2.5 font-medium hover:bg-light-400 ltr:text-left rtl:text-right dark:hover:bg-dark-600",
                                                onClick: ()=>{
                                                    return makeDefaultCard(card === null || card === void 0 ? void 0 : card.id);
                                                },
                                                children: t('text-default-text')
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_dropdown__WEBPACK_IMPORTED_MODULE_5__/* .Menu.Item */ .v.Item, {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                type: "button",
                                                className: "transition-fill-colors w-full px-5 py-2.5 font-medium text-[#DF4B4B] hover:bg-light-400 ltr:text-left rtl:text-right dark:hover:bg-dark-600",
                                                onClick: ()=>{
                                                    return deleteCard(card === null || card === void 0 ? void 0 : card.id);
                                                },
                                                children: t('text-delete-card')
                                            })
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                }));
            }
        }, 
    ];
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_table__WEBPACK_IMPORTED_MODULE_14__/* .Table */ .i, {
        //@ts-ignore
        columns: columns,
        data: payments,
        className: "card-view-table w-full shadow-none",
        scroll: {
            x: 800
        },
        rowClassName: (record, i)=>{
            return (record === null || record === void 0 ? void 0 : record.default_card) ? 'row-highlight' : '';
        },
        emptyText: t('text-no-card-found'),
        rowKey: "card-view"
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CardsView);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5346:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_card_card_view_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5854);
/* harmony import */ var _components_card_card_view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1277);
/* harmony import */ var _data_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4113);
/* harmony import */ var _components_ui_error_message__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7018);
/* harmony import */ var _components_ui_loader_table_loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2078);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_card_card_view_header__WEBPACK_IMPORTED_MODULE_1__, _components_card_card_view__WEBPACK_IMPORTED_MODULE_2__, _data_card__WEBPACK_IMPORTED_MODULE_3__]);
([_components_card_card_view_header__WEBPACK_IMPORTED_MODULE_1__, _components_card_card_view__WEBPACK_IMPORTED_MODULE_2__, _data_card__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const MyCards = ()=>{
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_6__.useTranslation)();
    const { cards , isLoading , error  } = (0,_data_card__WEBPACK_IMPORTED_MODULE_3__/* .useCards */ .Kj)();
    if (isLoading) {
        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "flex w-full flex-col",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "mb-8 flex items-center justify-center",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        className: "text-heading text-center text-base font-semibold",
                        children: t('profile-sidebar-my-cards')
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_loader_table_loader__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    uniqueKey: `table-loader`
                })
            ]
        }));
    }
    if (error) return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_error_message__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        message: error === null || error === void 0 ? void 0 : error.message
    }));
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_card_card_view_header__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_card_card_view__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                payments: cards
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyCards);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5930:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const CheckIconWithBg = ({ width =20 , height =20 , ...props })=>{
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        viewBox: "0 0 20 20",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                cx: "10.5",
                cy: "9.5",
                r: "6.5",
                fill: "white"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M10 0C4.48622 0 0 4.48622 0 10C0 15.5138 4.48622 20 10 20C15.5138 20 20 15.5138 20 10C20 4.48622 15.5138 0 10 0ZM15.589 7.36842L9.198 13.7093C8.82206 14.0852 8.22055 14.1103 7.81955 13.7343L4.43609 10.6516C4.03509 10.2757 4.01003 9.64912 4.3609 9.24812C4.73684 8.84712 5.36341 8.82206 5.76441 9.198L8.44612 11.6541L14.1604 5.93985C14.5614 5.53885 15.188 5.53885 15.589 5.93985C15.99 6.34085 15.99 6.96742 15.589 7.36842Z",
                fill: "currentColor"
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CheckIconWithBg);


/***/ }),

/***/ 3713:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "p": () => (/* binding */ PlusIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function PlusIcon(props) {
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        viewBox: "0 0 20 20",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            d: "M17.3471 8.77565H11.2246V2.6532C11.2246 1.97728 10.6761 1.42871 10.0001 1.42871C9.32422 1.42871 8.77565 1.97728 8.77565 2.6532V8.77565H2.6532C1.97728 8.77565 1.42871 9.32422 1.42871 10.0001C1.42871 10.6761 1.97728 11.2246 2.6532 11.2246H8.77565V17.3471C8.77565 18.023 9.32422 18.5716 10.0001 18.5716C10.6761 18.5716 11.2246 18.023 11.2246 17.3471V11.2246H17.3471C18.023 11.2246 18.5716 10.6761 18.5716 10.0001C18.5716 9.32422 18.023 8.77565 17.3471 8.77565Z",
            fill: "currentColor",
            stroke: "currentColor",
            strokeWidth: "0.2"
        })
    }));
}


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

/***/ 3142:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _layouts_seo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6357);
/* harmony import */ var _components_card_my_cards__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5346);
/* harmony import */ var _data_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6698);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3620);
/* harmony import */ var _lib_framer_motion_fade_in_bottom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2554);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6197);
/* harmony import */ var _layouts_dashboard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9292);
/* harmony import */ var next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5460);
/* harmony import */ var next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_card_my_cards__WEBPACK_IMPORTED_MODULE_2__, _data_settings__WEBPACK_IMPORTED_MODULE_3__, framer_motion__WEBPACK_IMPORTED_MODULE_5__, _layouts_dashboard__WEBPACK_IMPORTED_MODULE_6__]);
([_components_card_my_cards__WEBPACK_IMPORTED_MODULE_2__, _data_settings__WEBPACK_IMPORTED_MODULE_3__, framer_motion__WEBPACK_IMPORTED_MODULE_5__, _layouts_dashboard__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const MyCardsPage = ()=>{
    var ref, ref1;
    const { settings  } = (0,_data_settings__WEBPACK_IMPORTED_MODULE_3__/* .useSettings */ .r)();
    // Make it dynamic
    if (!((ref = [
        _types__WEBPACK_IMPORTED_MODULE_4__/* .PaymentGateway.STRIPE */ .HY.STRIPE
    ]) === null || ref === void 0 ? void 0 : ref.includes(settings === null || settings === void 0 ? void 0 : (ref1 = settings.paymentGateway) === null || ref1 === void 0 ? void 0 : ref1.toUpperCase()))) {
        return null;
    }
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layouts_seo__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                title: "My cards",
                description: "All my card related information.",
                url: "/cards"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {
                variants: (0,_lib_framer_motion_fade_in_bottom__WEBPACK_IMPORTED_MODULE_8__/* .fadeInBottom */ .op)(),
                className: "flex min-h-full flex-grow flex-col",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_card_my_cards__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {})
            })
        ]
    }));
};
MyCardsPage.authorization = true;
MyCardsPage.getLayout = function getLayout(page) {
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layouts_dashboard__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
        children: page
    }));
};
const getStaticProps = async ({ locale  })=>{
    return {
        props: {
            ...await (0,next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_7__.serverSideTranslations)(locale, [
                'common'
            ])
        },
        revalidate: 60
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyCardsPage);

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
var __webpack_exports__ = __webpack_require__.X(0, [7730,3157,6639,714,518,5517,9573,7168,9363,9292,3620,5957,4113], () => (__webpack_exec__(3142)));
module.exports = __webpack_exports__;

})();