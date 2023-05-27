"use strict";
(() => {
var exports = {};
exports.id = 9123;
exports.ids = [9123];
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

/***/ 6155:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "r": () => (/* binding */ StarIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const StarIcon = (props)=>{
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 25.056 24",
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("g", {
            "data-name": "Group 36413",
            fill: "currentColor",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                id: "Path_22667",
                "data-name": "Path 22667",
                d: "M19.474,34.679l-6.946-4.346L5.583,34.679a.734.734,0,0,1-1.1-.8L6.469,25.93.263,20.668a.735.735,0,0,1,.421-1.3l8.1-.566,3.064-7.6a.765.765,0,0,1,1.362,0l3.064,7.6,8.1.566a.735.735,0,0,1,.421,1.3L18.588,25.93l1.987,7.949a.734.734,0,0,1-1.1.8Z",
                transform: "translate(0 -10.792)"
            })
        })
    }));
};


/***/ }),

/***/ 4516:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ProductDetailsPaper)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config_routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(551);
/* harmony import */ var _components_ui_links_anchor_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3813);
/* harmony import */ var _components_icons_shopping_cart_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(944);
/* harmony import */ var _components_ui_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3879);
/* harmony import */ var _components_cart_add_to_cart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7130);
/* harmony import */ var _assets_images_placeholders_product_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8818);
/* harmony import */ var _lib_is_free__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(2879);
/* harmony import */ var _components_icons_download_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1789);
/* harmony import */ var pluralize__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(420);
/* harmony import */ var pluralize__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(pluralize__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _free_download_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3239);
/* harmony import */ var _components_favorite_favorite_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(7649);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_12__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_cart_add_to_cart__WEBPACK_IMPORTED_MODULE_6__, _free_download_button__WEBPACK_IMPORTED_MODULE_10__, _components_favorite_favorite_button__WEBPACK_IMPORTED_MODULE_11__]);
([_components_cart_add_to_cart__WEBPACK_IMPORTED_MODULE_6__, _free_download_button__WEBPACK_IMPORTED_MODULE_10__, _components_favorite_favorite_button__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);














function ProductDetailsPaper({ product , className  }) {
    var ref;
    const { id , name , slug , shop , orders_count , total_downloads , preview_url , price , sale_price ,  } = product;
    const isFreeItem = (0,_lib_is_free__WEBPACK_IMPORTED_MODULE_13__/* .isFree */ .N)(sale_price !== null && sale_price !== void 0 ? sale_price : price);
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_12__.useTranslation)('common');
    var ref1;
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('items-center justify-between lg:flex lg:w-full', className),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "lg:block ltr:lg:pr-5 rtl:lg:pl-5",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex items-center justify-center ",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                className: "text-base font-medium text-dark dark:text-light 3xl:text-lg",
                                children: name
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_favorite_favorite_button__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                productId: product === null || product === void 0 ? void 0 : product.id
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "items-center pt-1.5 rtl:space-x-reverse lg:flex lg:space-x-6 lg:pt-2.5 3xl:pt-4",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex items-center pb-4 lg:pb-0",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "relative flex h-7 w-7 flex-shrink-0",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_image__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                            alt: shop === null || shop === void 0 ? void 0 : shop.name,
                                            layout: "fill",
                                            quality: 100,
                                            objectFit: "cover",
                                            src: (ref1 = shop === null || shop === void 0 ? void 0 : (ref = shop.logo) === null || ref === void 0 ? void 0 : ref.thumbnail) !== null && ref1 !== void 0 ? ref1 : _assets_images_placeholders_product_svg__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z,
                                            className: "rounded-full"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                        className: "font-medium ltr:pl-2.5 rtl:pr-2.5 dark:text-dark-base lg:text-dark lg:dark:text-light-400",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_links_anchor_link__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                            href: _config_routes__WEBPACK_IMPORTED_MODULE_2__/* ["default"].shopUrl */ .Z.shopUrl(shop === null || shop === void 0 ? void 0 : shop.slug),
                                            className: "hover:text-brand",
                                            children: shop === null || shop === void 0 ? void 0 : shop.name
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex space-x-6 border-y border-light-500 py-3 rtl:space-x-reverse dark:border-dark-400 sm:py-4 lg:border-0 lg:py-0",
                                children: [
                                    !isFreeItem && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex items-center tracking-[.1px] text-dark dark:text-light",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons_shopping_cart_icon__WEBPACK_IMPORTED_MODULE_4__/* .ShoppingCartIcon */ .Q, {
                                                className: "h-[18px] w-[18px] text-dark-900 ltr:mr-2.5 rtl:ml-2.5 dark:text-light-900"
                                            }),
                                            pluralize__WEBPACK_IMPORTED_MODULE_9___default()(t('text-sale'), orders_count, true)
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex items-center tracking-[.1px] text-dark dark:text-light",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons_download_icon__WEBPACK_IMPORTED_MODULE_8__/* .DownloadIcon */ ._, {
                                                className: "h-[18px] w-[18px] text-dark-900 ltr:mr-2.5 rtl:ml-2.5 dark:text-light-900"
                                            }),
                                            pluralize__WEBPACK_IMPORTED_MODULE_9___default()(t('text-download'), total_downloads, true)
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex flex-col-reverse items-center py-3.5 xs:flex-row xs:gap-2.5 sm:py-4 md:gap-3.5 lg:w-[480px] lg:gap-4 lg:py-2 2xl:w-2/5 3xl:w-[480px]",
                children: [
                    !isFreeItem ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_cart_add_to_cart__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                        className: "mt-2.5 w-full flex-1 xs:mt-0 xs:w-auto",
                        item: product
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_free_download_button__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                        productId: id,
                        productSlug: slug,
                        productName: name,
                        className: "mt-2.5 w-full flex-1 xs:mt-0 xs:w-auto"
                    }),
                    Boolean(preview_url) && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        href: preview_url,
                        rel: "noreferrer",
                        target: "_blank",
                        className: "transition-fill-colors flex min-h-[46px] w-full flex-1 items-center justify-center gap-2 rounded border border-light-600 bg-transparent py-3 px-4 font-semibold text-dark duration-200 hover:bg-light-400 focus:bg-light-500 dark:border-dark-600 dark:text-light dark:hover:bg-dark-600 dark:focus:bg-dark-600 xs:w-auto sm:h-12 md:px-5",
                        children: t('text-live-preview')
                    })
                ]
            })
        ]
    }));
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3253:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_questions_question_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7103);
/* harmony import */ var _components_ui_pagination__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(671);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_modal_views_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5335);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _data_user__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6639);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9699);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _question_search__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8784);
/* harmony import */ var _data_question__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3155);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_10__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_questions_question_card__WEBPACK_IMPORTED_MODULE_1__, _data_user__WEBPACK_IMPORTED_MODULE_6__, _data_question__WEBPACK_IMPORTED_MODULE_9__]);
([_components_questions_question_card__WEBPACK_IMPORTED_MODULE_1__, _data_user__WEBPACK_IMPORTED_MODULE_6__, _data_question__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











const ProductQuestions = ({ productId , shopId ,  })=>{
    var ref;
    const { 0: page , 1: setPage  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(1);
    const { openModal  } = (0,_components_modal_views_context__WEBPACK_IMPORTED_MODULE_4__/* .useModalAction */ .SO)();
    const { query  } = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
    const { isAuthorized  } = (0,_data_user__WEBPACK_IMPORTED_MODULE_6__/* .useMe */ .P)();
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_10__.useTranslation)('common');
    const { questions , paginatorInfo  } = (0,_data_question__WEBPACK_IMPORTED_MODULE_9__/* .useQuestions */ .k)({
        product_id: productId,
        limit: 5,
        page,
        ...!lodash_isEmpty__WEBPACK_IMPORTED_MODULE_7___default()(query === null || query === void 0 ? void 0 : query.text) && {
            question: (ref = query.text) === null || ref === void 0 ? void 0 : ref.toString()
        }
    });
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        setPage(1);
    }, [
        query.text
    ]);
    function onPagination(current) {
        setPage(current);
    }
    const openQuestionModal = ()=>{
        if (!isAuthorized) {
            openModal('LOGIN_VIEW');
            return;
        }
        openModal('QUESTION_FORM', {
            product_id: productId,
            shop_id: shopId
        });
    };
    var ref1;
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "block",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex w-[calc(100%+32px)] flex-col justify-between border-b border-t border-light-500 px-4 py-5 ltr:-ml-4 rtl:-mr-4 dark:border-dark-400 sm:flex-row sm:items-center md:mb-1 md:w-full md:border-t-0 md:border-b-0 md:py-0 md:px-0 ltr:md:ml-0 rtl:md:mr-0",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                        className: "text-sm tracking-tight text-dark dark:text-light",
                        children: [
                            t('text-question-and-answers'),
                            " (",
                            (ref1 = paginatorInfo === null || paginatorInfo === void 0 ? void 0 : paginatorInfo.total) !== null && ref1 !== void 0 ? ref1 : 0,
                            ")"
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "mt-4 inline-flex flex-col-reverse items-start gap-2.5 sm:mt-0 sm:flex-col sm:items-end ltr:sm:pl-2 rtl:sm:pr-2 md:flex-row",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "min-w-full sm:min-w-[280px]",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_question_search__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                    label: "Search"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                className: "grow-0 rounded-md bg-brand px-5 py-3 text-13px font-semibold leading-5 text-light transition-colors hover:bg-brand-dark",
                                onClick: openQuestionModal,
                                children: t('text-ask-question')
                            })
                        ]
                    })
                ]
            }),
            (questions === null || questions === void 0 ? void 0 : questions.length) !== 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "",
                    children: [
                        questions === null || questions === void 0 ? void 0 : questions.map((question)=>{
                            /*#__PURE__*/ return react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_questions_question_card__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                question: question
                            }, `question-no-${question === null || question === void 0 ? void 0 : question.id}`);
                        }),
                        paginatorInfo && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex flex-col items-center justify-between space-y-1 border-t border-light-500 py-5 dark:border-dark-400 md:flex-row md:space-y-0 md:py-3 md:pb-5 lg:pb-3",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "text-13px text-dark-700 dark:text-light-900 md:mt-2",
                                    children: [
                                        t('text-page'),
                                        " ",
                                        paginatorInfo.currentPage,
                                        " ",
                                        t('text-of'),
                                        ' ',
                                        Math.ceil(paginatorInfo.total / paginatorInfo.perPage)
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "mb-2 flex items-center",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_pagination__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                        total: paginatorInfo.total,
                                        current: paginatorInfo.currentPage,
                                        pageSize: paginatorInfo.perPage,
                                        onChange: onPagination
                                    })
                                })
                            ]
                        })
                    ]
                })
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "flex flex-col items-center justify-center border-b border-light-500 px-5 py-16 dark:border-dark-400",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                    className: "text-lg font-semibold text-dark-600 dark:text-light-600",
                    children: t('text-no-question-found')
                })
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductQuestions);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7103:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ QuestionCard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1635);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_modal_views_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5335);
/* harmony import */ var _data_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6639);
/* harmony import */ var _components_icons_like_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(487);
/* harmony import */ var _components_icons_dislike_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3963);
/* harmony import */ var _data_product__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3163);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_8__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_data_user__WEBPACK_IMPORTED_MODULE_4__, _data_product__WEBPACK_IMPORTED_MODULE_7__]);
([_data_user__WEBPACK_IMPORTED_MODULE_4__, _data_product__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









function QuestionCard({ question  }) {
    const { openModal  } = (0,_components_modal_views_context__WEBPACK_IMPORTED_MODULE_3__/* .useModalAction */ .SO)();
    const { isAuthorized  } = (0,_data_user__WEBPACK_IMPORTED_MODULE_4__/* .useMe */ .P)();
    const { createFeedback  } = (0,_data_product__WEBPACK_IMPORTED_MODULE_7__/* .useCreateFeedback */ .AM)();
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_8__.useTranslation)('common');
    const { id , answer , created_at , my_feedback , negative_feedbacks_count , positive_feedbacks_count , question: userQuestion ,  } = question;
    function feedback(value) {
        if (!isAuthorized) {
            openModal('LOGIN_VIEW');
            return;
        }
        createFeedback({
            model_id: id,
            model_type: 'Question',
            ...value
        });
    }
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "border-t border-light-500 py-5 first:border-t-0 dark:border-dark-400",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                className: "mb-1.5 text-13px font-medium text-dark dark:text-light",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "inline-block uppercase ltr:mr-1 rtl:ml-1",
                        children: "Q:"
                    }),
                    userQuestion
                ]
            }),
            answer && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                className: "text-13px leading-[1.85em] text-dark-600 dark:text-light-600",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                        className: "inline-block font-medium uppercase ltr:mr-1 rtl:ml-1",
                        children: [
                            t('text-a'),
                            ":"
                        ]
                    }),
                    answer
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "mt-5 flex list-disc items-center space-x-3 text-13px marker:text-sky-400 rtl:space-x-reverse sm:space-x-4",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex items-center text-dark-800 after:inline-block after:h-1 after:w-1 after:rounded-full after:bg-dark-900 ltr:after:ml-3 rtl:after:mr-3 dark:text-light-900 after:dark:bg-light-900 ltr:sm:after:ml-4 rtl:sm:after:mr-4",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "hidden sm:block",
                                children: dayjs__WEBPACK_IMPORTED_MODULE_1___default()(created_at).format('MMMM D, YYYY')
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "sm:hidden",
                                children: dayjs__WEBPACK_IMPORTED_MODULE_1___default()(created_at).format('MMM D, YYYY')
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex items-center space-x-3 rtl:space-x-reverse sm:space-x-4",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('flex items-center tracking-wider text-dark-800 transition dark:text-dark-900', {
                                    'dark:!text-light': my_feedback === null || my_feedback === void 0 ? void 0 : my_feedback.positive
                                }),
                                disabled: my_feedback === null || my_feedback === void 0 ? void 0 : my_feedback.positive,
                                onClick: ()=>feedback({
                                        positive: true
                                    })
                                ,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons_like_icon__WEBPACK_IMPORTED_MODULE_5__/* .LikeIcon */ .l, {
                                        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('h-3.5 w-3.5 ltr:mr-2 rtl:ml-2', {
                                            'text-brand': my_feedback === null || my_feedback === void 0 ? void 0 : my_feedback.positive
                                        })
                                    }),
                                    positive_feedbacks_count
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('flex items-center tracking-wider text-dark-800 transition dark:text-dark-900', {
                                    'dark:!text-light': my_feedback === null || my_feedback === void 0 ? void 0 : my_feedback.negative
                                }),
                                onClick: ()=>feedback({
                                        negative: true
                                    })
                                ,
                                disabled: my_feedback === null || my_feedback === void 0 ? void 0 : my_feedback.negative,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons_dislike_icon__WEBPACK_IMPORTED_MODULE_6__/* .DislikeIcon */ .R, {
                                        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('mt-0.5 h-3.5 w-3.5 ltr:mr-2 rtl:ml-2', {
                                            'text-brand': my_feedback === null || my_feedback === void 0 ? void 0 : my_feedback.negative
                                        })
                                    }),
                                    negative_feedbacks_count
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

/***/ }),

/***/ 8784:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ question_search)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./src/components/icons/search-icon.tsx
var search_icon = __webpack_require__(2453);
// EXTERNAL MODULE: ./src/components/icons/close-icon.tsx
var close_icon = __webpack_require__(3031);
;// CONCATENATED MODULE: ./src/components/search/search.tsx



const QuestionSearch = ({ label , onSubmit , onClearSearch , onChangeSearch , value , ...rest })=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("form", {
        onSubmit: onSubmit,
        className: "w-full",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "relative flex h-11 rounded md:rounded-lg",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("label", {
                    htmlFor: label,
                    className: "sr-only",
                    children: label
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                    id: label,
                    onChange: onChangeSearch,
                    type: "text",
                    value: value,
                    autoComplete: "off",
                    className: "search item-center text-heading flex h-full w-full appearance-none overflow-hidden truncate rounded-xl border-light bg-light text-13px placeholder-light-900 transition duration-300 ease-in-out focus:border-brand-dark focus:outline-none focus:ring-0 ltr:pl-11 rtl:pr-11 dark:border-dark-300 dark:bg-dark-300",
                    ...rest
                }),
                value && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                    type: "button",
                    onClick: onClearSearch,
                    className: "absolute flex h-full w-10 cursor-pointer items-center justify-center text-13px transition-colors duration-200 hover:text-brand focus:text-brand focus:outline-none ltr:right-0 rtl:left-0 md:w-14 ltr:md:-right-1 rtl:md:-left-1",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "sr-only",
                            children: "Close"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(close_icon/* CloseIcon */.T, {
                            className: "h-3.5 w-3.5 md:h-3 md:w-3"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                    className: "absolute flex h-full w-12 items-center justify-center text-13px transition-colors duration-200 hover:text-brand focus:text-brand focus:outline-none ltr:left-0 rtl:right-0",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "sr-only",
                            children: "Search"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(search_icon/* SearchIcon */.W, {
                            className: "h-4 w-4"
                        })
                    ]
                })
            ]
        })
    }));
};
/* harmony default export */ const search = (QuestionSearch);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./src/components/search/search.context.tsx
var search_context = __webpack_require__(6657);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(1377);
;// CONCATENATED MODULE: ./src/components/questions/question-search.tsx





const question_search_QuestionSearch = ({ ...props })=>{
    const router = (0,router_.useRouter)();
    const { searchTerm , updateSearchTerm  } = (0,search_context/* useSearch */.Rx)();
    const { t  } = (0,external_next_i18next_.useTranslation)('common');
    const handleOnChange = (e)=>{
        const { value  } = e.target;
        updateSearchTerm(value);
    };
    const onSearch = (e)=>{
        e.preventDefault();
        if (!searchTerm) return;
        const { pathname , query  } = router;
        router.push({
            pathname,
            query: {
                ...query,
                text: searchTerm
            }
        }, undefined, {
            scroll: false
        });
    };
    function clearSearch() {
        updateSearchTerm('');
        const { pathname , query  } = router;
        const { text , ...rest } = query;
        if (text) {
            router.push({
                pathname,
                query: {
                    ...rest
                }
            }, undefined, {
                scroll: false
            });
        }
    }
    return(/*#__PURE__*/ jsx_runtime_.jsx(search, {
        label: "search",
        onSubmit: onSearch,
        onClearSearch: clearSearch,
        onChangeSearch: handleOnChange,
        value: searchTerm,
        name: "search",
        placeholder: t('text-search-question'),
        ...props
    }));
};
/* harmony default export */ const question_search = (question_search_QuestionSearch);


/***/ }),

/***/ 6006:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ average_ratings)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./src/components/review/rating-badge.tsx
var rating_badge = __webpack_require__(8889);
// EXTERNAL MODULE: ./src/components/icons/star-icon.tsx
var star_icon = __webpack_require__(6155);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
;// CONCATENATED MODULE: ./src/components/review/rating-progress-bar.tsx



function RatingProgressBar({ ratingId =0 , ratingProgressItem , totalReviews , colorClassName ='bg-brand'  }) {
    var ref;
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex items-center text-sm text-dark-500 dark:text-light-600",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex w-9 shrink-0 items-center space-x-1 font-semibold rtl:space-x-reverse md:w-11",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "min-w-[10px] text-sm font-semibold",
                        children: ratingId
                    }),
                    ' ',
                    /*#__PURE__*/ jsx_runtime_.jsx(star_icon/* StarIcon */.r, {
                        className: "ml-1.5 h-2.5 w-2.5"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "relative h-[5px] w-52 overflow-hidden rounded-md bg-dark bg-opacity-20 dark:bg-light dark:bg-opacity-20 sm:w-40 md:w-52",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: external_classnames_default()('absolute h-full rounded-md', colorClassName),
                    style: {
                        width: `${(ratingProgressItem === null || ratingProgressItem === void 0 ? void 0 : ratingProgressItem.total) / totalReviews * 100}%`
                    }
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "shrink-0 ltr:pl-5 rtl:pr-5",
                children: (ref = ratingProgressItem === null || ratingProgressItem === void 0 ? void 0 : ratingProgressItem.total) !== null && ref !== void 0 ? ref : 0
            })
        ]
    }));
};

// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(1377);
;// CONCATENATED MODULE: ./src/components/review/average-ratings.tsx




const AverageRatings = ({ totalReviews , ratings , ratingCount ,  })=>{
    const { t  } = (0,external_next_i18next_.useTranslation)('common');
    if (!ratingCount) return null;
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex w-[calc(100%+32px)] flex-col divide-y divide-light-500 border-t border-b border-light-500 px-4 py-6 ltr:-ml-4 rtl:-mr-4 dark:divide-dark-400 dark:border-dark-400 sm:flex-row sm:items-center sm:space-x-7 sm:divide-y-0 sm:divide-x sm:py-7 md:w-full md:space-x-12 md:border-t-0 md:border-b-0 md:py-0 md:px-0 ltr:md:ml-0 rtl:md:mr-0",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "w-full pb-4 sm:w-auto sm:pb-0",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(rating_badge/* default */.Z, {
                        rating: ratings,
                        className: "mb-5",
                        variant: "large"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "text-13px dark:text-light-600",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                            children: [
                                totalReviews,
                                " ",
                                t('text-reviews')
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "w-full space-y-3 py-0.5 pt-4 sm:w-auto sm:px-6 sm:pt-0 md:px-8",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(RatingProgressBar, {
                        ratingProgressItem: ratingCount.find((rating)=>Number(rating.rating) === 5
                        ),
                        ratingId: 5,
                        totalReviews: totalReviews
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(RatingProgressBar, {
                        ratingProgressItem: ratingCount.find((rating)=>Number(rating.rating) === 4
                        ),
                        ratingId: 4,
                        totalReviews: totalReviews
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(RatingProgressBar, {
                        ratingProgressItem: ratingCount.find((rating)=>Number(rating.rating) === 3
                        ),
                        ratingId: 3,
                        totalReviews: totalReviews
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(RatingProgressBar, {
                        ratingProgressItem: ratingCount.find((rating)=>Number(rating.rating) === 2
                        ),
                        ratingId: 2,
                        totalReviews: totalReviews
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(RatingProgressBar, {
                        ratingProgressItem: ratingCount.find((rating)=>Number(rating.rating) === 1
                        ),
                        ratingId: 1,
                        totalReviews: totalReviews
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const average_ratings = (AverageRatings);


/***/ }),

/***/ 1281:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_review_review_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1666);
/* harmony import */ var _components_ui_pagination__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(671);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _sorting__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1882);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _data_review__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2110);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_review_review_card__WEBPACK_IMPORTED_MODULE_1__, _sorting__WEBPACK_IMPORTED_MODULE_4__, _data_review__WEBPACK_IMPORTED_MODULE_6__]);
([_components_review_review_card__WEBPACK_IMPORTED_MODULE_1__, _sorting__WEBPACK_IMPORTED_MODULE_4__, _data_review__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const ProductReviews = ({ productId  })=>{
    const { query  } = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
    const { text , ...restQuery } = query;
    const { 0: page , 1: setPage  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(1);
    const { reviews , paginatorInfo  } = (0,_data_review__WEBPACK_IMPORTED_MODULE_6__/* .useReviews */ .D)({
        product_id: productId,
        limit: 5,
        page,
        ...restQuery
    });
    function onPagination(current) {
        setPage(current);
    }
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_7__.useTranslation)('common');
    var ref;
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "block",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex w-[calc(100%+32px)] flex-col justify-between border-b border-light-500 px-4 py-5 ltr:-ml-4 rtl:-mr-4 dark:border-dark-400 sm:flex-row sm:items-center sm:py-4 md:w-full md:px-0 ltr:md:ml-0 rtl:md:mr-0",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                        className: "text-sm tracking-tight text-dark dark:text-light",
                        children: [
                            t('text-product-reviews'),
                            " (",
                            (ref = paginatorInfo === null || paginatorInfo === void 0 ? void 0 : paginatorInfo.total) !== null && ref !== void 0 ? ref : 0,
                            ")"
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex items-center pt-2.5 sm:pt-0",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "mr-2 sm:hidden",
                                children: "Sort By :"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_sorting__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {})
                        ]
                    })
                ]
            }),
            (reviews === null || reviews === void 0 ? void 0 : reviews.length) !== 0 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "block",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "block",
                        children: reviews === null || reviews === void 0 ? void 0 : reviews.map((review)=>{
                            /*#__PURE__*/ return react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_review_review_card__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                review: review
                            }, `review-no-${review === null || review === void 0 ? void 0 : review.id}`);
                        })
                    }),
                    paginatorInfo && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex flex-col items-center justify-between space-y-1 border-t border-light-500 py-5 dark:border-dark-400 md:flex-row md:space-y-0 md:py-3",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "text-13px text-dark-700 dark:text-light-900 md:mt-2",
                                children: [
                                    t('text-page'),
                                    " ",
                                    paginatorInfo.currentPage,
                                    " ",
                                    t('text-of'),
                                    ' ',
                                    Math.ceil(paginatorInfo.total / paginatorInfo.perPage)
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_pagination__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                total: paginatorInfo.total,
                                current: paginatorInfo.currentPage,
                                pageSize: paginatorInfo.perPage,
                                onChange: onPagination,
                                showTitle: false
                            })
                        ]
                    })
                ]
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "flex flex-col items-center justify-center border-b border-light-500 px-5 py-16 dark:border-dark-400",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                    className: "text-lg font-semibold text-dark-600 dark:text-light-600",
                    children: t('text-no-reviews-found')
                })
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductReviews);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8889:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_icons_star_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6155);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);



const RatingsBadge = ({ className ='' , rating , variant ='small' , ...props })=>{
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('inline-flex shrink-0 items-center rounded-full bg-brand text-white', {
            'px-2 py-[2px] text-sm font-semibold': variant === 'xs',
            'px-3 py-0.5 text-base': variant === 'small',
            'px-6 py-2 text-2xl font-semibold': variant === 'large'
        }, className),
        ...props,
        children: [
            rating,
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons_star_icon__WEBPACK_IMPORTED_MODULE_1__/* .StarIcon */ .r, {
                className: classnames__WEBPACK_IMPORTED_MODULE_2___default()({
                    'ml-1 h-2.5 w-2.5 ': variant === 'xs',
                    'ml-1.5 h-3 w-3': variant === 'small',
                    'ml-2 h-5 w-5': variant === 'large'
                })
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RatingsBadge);


/***/ }),

/***/ 1666:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ReviewCard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_review_rating_badge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8889);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1635);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_ui_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3879);
/* harmony import */ var _components_icons_like_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(487);
/* harmony import */ var _components_icons_dislike_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3963);
/* harmony import */ var _assets_images_placeholders_product_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8818);
/* harmony import */ var react_avatar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9983);
/* harmony import */ var react_avatar__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_avatar__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9699);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_modal_views_context__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5335);
/* harmony import */ var _data_user__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6639);
/* harmony import */ var _data_product__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(3163);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_13__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_data_user__WEBPACK_IMPORTED_MODULE_11__, _data_product__WEBPACK_IMPORTED_MODULE_12__]);
([_data_user__WEBPACK_IMPORTED_MODULE_11__, _data_product__WEBPACK_IMPORTED_MODULE_12__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);














function ReviewCard({ review  }) {
    var ref, ref1;
    const { openModal  } = (0,_components_modal_views_context__WEBPACK_IMPORTED_MODULE_10__/* .useModalAction */ .SO)();
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_13__.useTranslation)('common');
    const { createFeedback  } = (0,_data_product__WEBPACK_IMPORTED_MODULE_12__/* .useCreateFeedback */ .AM)();
    const { isAuthorized  } = (0,_data_user__WEBPACK_IMPORTED_MODULE_11__/* .useMe */ .P)();
    const { id , comment , rating , photos , created_at , user , negative_feedbacks_count , positive_feedbacks_count , my_feedback ,  } = review;
    function feedback(value) {
        if (!isAuthorized) {
            openModal('LOGIN_VIEW');
            return;
        }
        createFeedback({
            model_id: id,
            model_type: 'Review',
            ...value
        });
    }
    function openAbuseReportModal() {
        if (!isAuthorized) {
            openModal('LOGIN_VIEW');
            return;
        }
        openModal('ABUSE_REPORT', {
            reviewId: id
        });
    }
    const handleImageClick = (idx)=>{
        openModal('REVIEW_IMAGE_POPOVER', {
            images: photos,
            initSlide: idx
        });
    };
    var _thumbnail, _name;
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex w-full items-start space-x-3 border-b border-light-500 py-5 last:border-b-0 dark:border-dark-400 sm:space-x-4 md:py-6",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "relative inline-flex h-8 w-8 shrink-0 justify-center rounded-full border border-light-400 bg-light-300 dark:border-dark-500 dark:bg-dark-500",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_avatar__WEBPACK_IMPORTED_MODULE_8___default()), {
                    size: "32",
                    round: true,
                    name: user.name,
                    textSizeRatio: 2,
                    src: user === null || user === void 0 ? void 0 : (ref = user.profile) === null || ref === void 0 ? void 0 : (ref1 = ref.avatar) === null || ref1 === void 0 ? void 0 : ref1.thumbnail
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex w-full flex-col",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex items-center space-x-3 sm:space-x-4",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "text-13px font-semibold capitalize text-dark dark:text-light",
                                children: user === null || user === void 0 ? void 0 : user.name
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_review_rating_badge__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                rating: rating,
                                variant: "xs"
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "mt-3.5 text-13px leading-[1.85em] text-dark-500 dark:text-light-600",
                        children: comment
                    }),
                    photos && !lodash_isEmpty__WEBPACK_IMPORTED_MODULE_9___default()(photos) && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "flex flex-wrap items-start gap-2.5 pt-3 pb-0.5 md:gap-3.5",
                        children: photos === null || photos === void 0 ? void 0 : photos.map((photo, idx)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "relative aspect-square h-20 w-20 cursor-pointer overflow-hidden rounded-md bg-dark bg-opacity-10 dark:bg-light dark:bg-opacity-5",
                                onClick: ()=>handleImageClick(idx)
                                ,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_image__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                    src: (_thumbnail = photo.thumbnail) !== null && _thumbnail !== void 0 ? _thumbnail : _assets_images_placeholders_product_svg__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z,
                                    alt: (_name = user.name) !== null && _name !== void 0 ? _name : '',
                                    className: "inline-flex",
                                    objectFit: "cover",
                                    layout: "fill"
                                })
                            }, photo.id)
                        )
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "mt-5 flex list-disc items-center space-x-3 text-13px marker:text-sky-400 sm:space-x-4",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex items-center text-dark-800 after:ml-3 after:inline-block after:h-1 after:w-1 after:rounded-full after:bg-dark-900 dark:text-light-900 after:dark:bg-light-900 sm:after:ml-4",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "hidden sm:block",
                                        children: dayjs__WEBPACK_IMPORTED_MODULE_3___default()(created_at).format('MMMM D, YYYY')
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "sm:hidden",
                                        children: dayjs__WEBPACK_IMPORTED_MODULE_3___default()(created_at).format('MMM D, YYYY')
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                onClick: openAbuseReportModal,
                                className: "flex items-center capitalize text-dark-800 transition duration-200 after:ml-3 after:inline-block after:h-1 after:w-1 after:rounded-full after:bg-dark-900 hover:text-brand focus:outline-none dark:text-light-900 after:dark:bg-light-900 dark:hover:text-brand sm:ml-4",
                                children: t('text-report')
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex items-center space-x-3 sm:space-x-4",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('flex items-center tracking-wider text-dark-800 transition dark:text-dark-900', {
                                            'dark:!text-light': my_feedback === null || my_feedback === void 0 ? void 0 : my_feedback.positive
                                        }),
                                        disabled: my_feedback === null || my_feedback === void 0 ? void 0 : my_feedback.positive,
                                        onClick: ()=>feedback({
                                                positive: true
                                            })
                                        ,
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons_like_icon__WEBPACK_IMPORTED_MODULE_5__/* .LikeIcon */ .l, {
                                                className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('mr-2 h-3.5 w-3.5', {
                                                    'text-brand': my_feedback === null || my_feedback === void 0 ? void 0 : my_feedback.positive
                                                })
                                            }),
                                            positive_feedbacks_count
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('flex items-center tracking-wider text-dark-800 transition dark:text-dark-900', {
                                            'dark:!text-light': my_feedback === null || my_feedback === void 0 ? void 0 : my_feedback.negative
                                        }),
                                        onClick: ()=>feedback({
                                                negative: true
                                            })
                                        ,
                                        disabled: my_feedback === null || my_feedback === void 0 ? void 0 : my_feedback.negative,
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons_dislike_icon__WEBPACK_IMPORTED_MODULE_6__/* .DislikeIcon */ .R, {
                                                className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('mr-2 mt-0.5 h-3.5 w-3.5', {
                                                    'text-brand': my_feedback === null || my_feedback === void 0 ? void 0 : my_feedback.negative
                                                })
                                            }),
                                            negative_feedbacks_count
                                        ]
                                    })
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

/***/ }),

/***/ 1882:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ui_list_box__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1138);
/* harmony import */ var _components_ui_transition__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6604);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _icons_chevron_left__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5019);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9709);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_ui_list_box__WEBPACK_IMPORTED_MODULE_1__, _components_ui_transition__WEBPACK_IMPORTED_MODULE_2__]);
([_components_ui_list_box__WEBPACK_IMPORTED_MODULE_1__, _components_ui_transition__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);

// import Select from '@/components/ui/select/select';






const plans = [
    {
        id: '1',
        key: 'sorting',
        label: 'text-recent',
        value: 'created_at',
        orderBy: 'created_at',
        sortedBy: 'DESC'
    },
    {
        id: '2',
        key: 'sorting',
        label: 'text-ratings-low-to-high',
        value: 'l2h',
        orderBy: 'rating',
        sortedBy: 'ASC'
    },
    {
        id: '3',
        key: 'sorting',
        label: 'text-ratings-high-to-low',
        value: 'h2l',
        orderBy: 'rating',
        sortedBy: 'DESC'
    }, 
];
const Sorting = ()=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const { t  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_6__.useTranslation)('common');
    var ref;
    // const { isRTL } = useIsRTL();
    const { 0: selected , 1: setSelected  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(()=>(ref = plans.find((plan)=>plan.orderBy === router.query.orderBy
        )) !== null && ref !== void 0 ? ref : plans[0]
    );
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        if (!router.query.orderBy) {
            setSelected(plans[0]);
        }
    }, [
        router.query.orderBy
    ]);
    function handleChange(values) {
        const { orderBy , sortedBy  } = values;
        router.push({
            pathname: router.pathname,
            query: {
                ...router.query,
                orderBy,
                sortedBy
            }
        }, undefined, {
            scroll: false
        });
        setSelected(values);
    }
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "flex items-center",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "w-44",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_list_box__WEBPACK_IMPORTED_MODULE_1__/* .Listbox */ .R, {
                value: selected,
                onChange: handleChange,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "relative",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_list_box__WEBPACK_IMPORTED_MODULE_1__/* .Listbox.Button */ .R.Button, {
                            className: "group flex w-full items-center justify-between text-13px text-dark dark:text-light sm:text-sm",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "block truncate",
                                    children: t(selected === null || selected === void 0 ? void 0 : selected.label)
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "pointer-events-none absolute inset-y-0 flex items-center ltr:right-0 rtl:left-0",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_chevron_left__WEBPACK_IMPORTED_MODULE_5__/* .ChevronLeft */ .s, {
                                        className: "h-4 w-4 -rotate-90"
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_transition__WEBPACK_IMPORTED_MODULE_2__/* .Transition */ .u, {
                            as: react__WEBPACK_IMPORTED_MODULE_4__.Fragment,
                            leave: "transition ease-in duration-100",
                            leaveFrom: "opacity-100",
                            leaveTo: "opacity-0",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_list_box__WEBPACK_IMPORTED_MODULE_1__/* .Listbox.Options */ .R.Options, {
                                className: "absolute z-10 mt-4 max-h-60 w-full cursor-pointer overflow-auto rounded-md bg-light pt-1 pb-2 text-base dark:bg-dark-200",
                                children: plans.map((plan)=>{
                                    /*#__PURE__*/ return react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_list_box__WEBPACK_IMPORTED_MODULE_1__/* .Listbox.Option */ .R.Option, {
                                        value: plan,
                                        className: ({ active  })=>`flex items-center border-b border-light-400 px-4 py-2.5 text-13px last:border-0 hover:bg-light-300 hover:text-dark focus:text-dark dark:border-dark-400 hover:dark:bg-dark-300 dark:hover:text-light dark:focus:text-light sm:px-5 ${active ? 'bg-light-400 text-dark dark:bg-dark-400 dark:text-light' : 'text-dark-500 dark:text-light-600'}`
                                        ,
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                            className: "block truncate",
                                            children: [
                                                " ",
                                                t(plan === null || plan === void 0 ? void 0 : plan.label)
                                            ]
                                        })
                                    }, plan === null || plan === void 0 ? void 0 : plan.id);
                                })
                            })
                        })
                    ]
                })
            })
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sorting);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1138:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "R": () => (/* reexport safe */ _headlessui_react__WEBPACK_IMPORTED_MODULE_0__.Listbox)
/* harmony export */ });
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1185);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_headlessui_react__WEBPACK_IMPORTED_MODULE_0__]);
_headlessui_react__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 671:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ pagination)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "rc-pagination"
const external_rc_pagination_namespaceObject = require("rc-pagination");
var external_rc_pagination_default = /*#__PURE__*/__webpack_require__.n(external_rc_pagination_namespaceObject);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(1377);
;// CONCATENATED MODULE: ./src/components/ui/pagination.tsx





const Pagination = (props)=>{
    const { t  } = (0,external_next_i18next_.useTranslation)('common');
    const textItemRender = (current, type, element)=>{
        if (type === 'prev') {
            return t('text-prev');
        }
        if (type === 'next') {
            return t('text-next');
        }
        return element;
    };
    return(/*#__PURE__*/ jsx_runtime_.jsx((external_rc_pagination_default()), {
        itemRender: textItemRender,
        ...props
    }));
};
/* harmony default export */ const pagination = (Pagination);


/***/ }),

/***/ 2110:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* binding */ useReviews)
/* harmony export */ });
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _data_client_endpoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1880);
/* harmony import */ var _data_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7607);
/* harmony import */ var _data_utils_data_mapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6848);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_data_client__WEBPACK_IMPORTED_MODULE_2__]);
_data_client__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




function useReviews(options) {
    const { data: response , isLoading , error , isFetching ,  } = (0,react_query__WEBPACK_IMPORTED_MODULE_0__.useQuery)([
        _data_client_endpoints__WEBPACK_IMPORTED_MODULE_1__/* .API_ENDPOINTS.PRODUCTS_REVIEWS */ .P.PRODUCTS_REVIEWS,
        options
    ], ({ queryKey  })=>_data_client__WEBPACK_IMPORTED_MODULE_2__/* ["default"].reviews.all */ .Z.reviews.all(Object.assign({}, queryKey[1]))
    , {
        keepPreviousData: true
    });
    var ref;
    return {
        reviews: (ref = response === null || response === void 0 ? void 0 : response.data) !== null && ref !== void 0 ? ref : [],
        paginatorInfo: (0,_data_utils_data_mapper__WEBPACK_IMPORTED_MODULE_3__/* .mapPaginatorData */ .Q)(response),
        isLoading,
        error,
        isFetching,
        hasMore: response && (response === null || response === void 0 ? void 0 : response.last_page) > (response === null || response === void 0 ? void 0 : response.current_page)
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 873:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5460);
/* harmony import */ var next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6197);
/* harmony import */ var _layouts_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5309);
/* harmony import */ var _data_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7607);
/* harmony import */ var _components_ui_image__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3879);
/* harmony import */ var _components_product_product_social_share__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3638);
/* harmony import */ var _components_product_product_information__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2855);
/* harmony import */ var _components_product_product_details_paper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4516);
/* harmony import */ var _components_icons_long_arrow_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(842);
/* harmony import */ var _lib_framer_motion_stagger_transition__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(3531);
/* harmony import */ var _lib_framer_motion_fade_in_bottom__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(2554);
/* harmony import */ var _assets_images_placeholders_product_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(8818);
/* harmony import */ var _components_review_product_reviews__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(1281);
/* harmony import */ var _components_review_average_ratings__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(6006);
/* harmony import */ var _components_questions_product_questions__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(3253);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(9699);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var tiny_invariant__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(8780);
/* harmony import */ var tiny_invariant__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(tiny_invariant__WEBPACK_IMPORTED_MODULE_17__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_4__, _layouts_layout__WEBPACK_IMPORTED_MODULE_5__, _data_client__WEBPACK_IMPORTED_MODULE_6__, _components_product_product_details_paper__WEBPACK_IMPORTED_MODULE_10__, _components_review_product_reviews__WEBPACK_IMPORTED_MODULE_13__, _components_questions_product_questions__WEBPACK_IMPORTED_MODULE_15__]);
([framer_motion__WEBPACK_IMPORTED_MODULE_4__, _layouts_layout__WEBPACK_IMPORTED_MODULE_5__, _data_client__WEBPACK_IMPORTED_MODULE_6__, _components_product_product_details_paper__WEBPACK_IMPORTED_MODULE_10__, _components_review_product_reviews__WEBPACK_IMPORTED_MODULE_13__, _components_questions_product_questions__WEBPACK_IMPORTED_MODULE_15__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




















const getStaticPaths = async ({ locales ,  })=>{
    tiny_invariant__WEBPACK_IMPORTED_MODULE_17___default()(locales, 'locales is not defined');
    const { data  } = await _data_client__WEBPACK_IMPORTED_MODULE_6__/* ["default"].products.all */ .Z.products.all({
        limit: 100
    });
    const paths = data === null || data === void 0 ? void 0 : data.flatMap((product)=>{
        return locales === null || locales === void 0 ? void 0 : locales.map((locale)=>({
                params: {
                    productSlug: product.slug
                },
                locale
            })
        );
    });
    return {
        paths,
        fallback: 'blocking'
    };
};
const getStaticProps = async ({ params , locale  })=>{
    const { productSlug  } = params; //* we know it's required because of getStaticPaths
    try {
        const product = await _data_client__WEBPACK_IMPORTED_MODULE_6__/* ["default"].products.get */ .Z.products.get({
            slug: productSlug,
            language: locale
        });
        return {
            props: {
                product,
                ...await (0,next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_1__.serverSideTranslations)(locale, [
                    'common'
                ])
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
function getPreviews(gallery, image) {
    if (!lodash_isEmpty__WEBPACK_IMPORTED_MODULE_16___default()(gallery) && Array.isArray(gallery)) return gallery;
    if (!lodash_isEmpty__WEBPACK_IMPORTED_MODULE_16___default()(image)) return [
        image,
        {}
    ];
    return [
        {},
        {}
    ];
}
const ProductPage = ({ product  })=>{
    var ref;
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation)('common');
    const { id , name , slug , image , gallery , description , created_at , updated_at , ratings , rating_count , total_reviews , tags , type ,  } = product;
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const previews = getPreviews(gallery, image);
    var ref1;
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "relative",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "h-full min-h-screen p-4 md:px-6 lg:px-8 lg:pt-6",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "sticky top-0 z-20 -mx-4 mb-1 -mt-2 flex items-center bg-light-300 p-4 dark:bg-dark-100 sm:static sm:top-auto sm:z-0 sm:m-0 sm:mb-4 sm:bg-transparent sm:p-0 sm:dark:bg-transparent",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                            onClick: ()=>router.back()
                            ,
                            className: "group inline-flex items-center gap-1.5 font-medium text-dark/70 hover:text-dark rtl:flex-row-reverse dark:text-light/70 hover:dark:text-light lg:mb-6",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons_long_arrow_icon__WEBPACK_IMPORTED_MODULE_11__/* .LongArrowIcon */ .f, {
                                    className: "h-4 w-4"
                                }),
                                t('text-back')
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {
                        variants: (0,_lib_framer_motion_stagger_transition__WEBPACK_IMPORTED_MODULE_18__/* .staggerTransition */ .s)(),
                        className: "grid gap-4 sm:grid-cols-2 lg:gap-6",
                        children: previews === null || previews === void 0 ? void 0 : previews.map((img)=>{
                            /*#__PURE__*/ return react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {
                                variants: (0,_lib_framer_motion_fade_in_bottom__WEBPACK_IMPORTED_MODULE_19__/* .fadeInBottomWithScaleX */ .sh)(),
                                className: "relative aspect-[3/2]",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_image__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                    alt: name,
                                    layout: "fill",
                                    quality: 100,
                                    objectFit: "cover",
                                    src: (ref1 = img === null || img === void 0 ? void 0 : img.original) !== null && ref1 !== void 0 ? ref1 : _assets_images_placeholders_product_svg__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z,
                                    className: "bg-light-500 dark:bg-dark-300"
                                })
                            }, img.id);
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {
                        variants: (0,_lib_framer_motion_fade_in_bottom__WEBPACK_IMPORTED_MODULE_19__/* .fadeInBottom */ .op)(),
                        className: "justify-center py-6 lg:flex lg:flex-col lg:py-10",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_product_product_details_paper__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                product: product,
                                className: "lg:hidden"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "lg:mx-auto 3xl:max-w-[1200px]",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "w-full rtl:space-x-reverse lg:flex lg:space-x-14 lg:pb-3 xl:space-x-20 3xl:space-x-28",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "hidden lg:block 3xl:max-w-[600px]",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "pb-5 leading-[1.9em] dark:text-light-600",
                                                        children: description
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_product_product_social_share__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                                        productSlug: slug,
                                                        className: "border-t border-light-500 pt-5 dark:border-dark-400 md:pt-7"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_product_product_information__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                                tags: tags,
                                                created_at: created_at,
                                                updated_at: updated_at,
                                                layoutType: type.name,
                                                //@ts-ignore
                                                icon: type === null || type === void 0 ? void 0 : type.icon,
                                                className: "flex-shrink-0 pb-6 pt-2.5 lg:min-w-[350px] lg:max-w-[470px] lg:pb-0"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "mt-4 w-full md:mt-8 md:space-y-10 lg:mt-12 lg:flex lg:flex-col lg:space-y-12",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_review_average_ratings__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                                                ratingCount: rating_count,
                                                totalReviews: total_reviews,
                                                ratings: ratings
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_review_product_reviews__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                                                productId: id
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_questions_product_questions__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                                                productId: product === null || product === void 0 ? void 0 : product.id,
                                                shopId: product === null || product === void 0 ? void 0 : (ref = product.shop) === null || ref === void 0 ? void 0 : ref.id
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_product_product_social_share__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                productSlug: slug,
                                className: "border-t border-light-500 pt-5 dark:border-dark-400 md:pt-7 lg:hidden"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {
                variants: (0,_lib_framer_motion_fade_in_bottom__WEBPACK_IMPORTED_MODULE_19__/* .fadeInBottomWithScaleY */ .hB)(),
                className: "sticky bottom-0 right-0 z-10 hidden h-[100px] w-full border-t border-light-500 bg-light-100 px-8 py-5 dark:border-dark-400 dark:bg-dark-200 lg:flex 3xl:h-[120px]",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_product_product_details_paper__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                    product: product
                })
            })
        ]
    }));
};
ProductPage.getLayout = function getLayout(page) {
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layouts_layout__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        children: page
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductPage);

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

/***/ 9699:
/***/ ((module) => {

module.exports = require("lodash/isEmpty");

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

/***/ 153:
/***/ ((module) => {

module.exports = require("overlayscrollbars-react");

/***/ }),

/***/ 420:
/***/ ((module) => {

module.exports = require("pluralize");

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

/***/ 9709:
/***/ ((module) => {

module.exports = require("react-i18next");

/***/ }),

/***/ 1175:
/***/ ((module) => {

module.exports = require("react-query");

/***/ }),

/***/ 6158:
/***/ ((module) => {

module.exports = require("react-share");

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

/***/ 8780:
/***/ ((module) => {

module.exports = require("tiny-invariant");

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [7730,3157,6639,714,518,5517,3171,7360,5309,1789,3998,9621,5748,6657,842], () => (__webpack_exec__(873)));
module.exports = __webpack_exports__;

})();