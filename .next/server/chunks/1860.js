"use strict";
exports.id = 1860;
exports.ids = [1860];
exports.modules = {

/***/ 1860:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ReviewForm)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5609);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4685);
/* harmony import */ var _components_modal_views_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5335);
/* harmony import */ var _components_ui_forms_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4142);
/* harmony import */ var _components_ui_forms_uploader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9725);
/* harmony import */ var _components_ui_forms_rate_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8387);
/* harmony import */ var _components_ui_forms_textarea__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3439);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9137);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _data_client__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7607);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(8922);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_hot_toast__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(9699);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _data_client_endpoints__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(1880);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_15__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_ui_forms_form__WEBPACK_IMPORTED_MODULE_4__, _components_ui_forms_uploader__WEBPACK_IMPORTED_MODULE_5__, _components_ui_forms_rate_input__WEBPACK_IMPORTED_MODULE_6__, react_hook_form__WEBPACK_IMPORTED_MODULE_8__, _data_client__WEBPACK_IMPORTED_MODULE_10__]);
([_components_ui_forms_form__WEBPACK_IMPORTED_MODULE_4__, _components_ui_forms_uploader__WEBPACK_IMPORTED_MODULE_5__, _components_ui_forms_rate_input__WEBPACK_IMPORTED_MODULE_6__, react_hook_form__WEBPACK_IMPORTED_MODULE_8__, _data_client__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
















const reviewFormSchema = yup__WEBPACK_IMPORTED_MODULE_1__.object().shape({
    rating: yup__WEBPACK_IMPORTED_MODULE_1__.number().min(1, 'You must need to provide a rating').required('You must need to provide a rating'),
    comment: yup__WEBPACK_IMPORTED_MODULE_1__.string().required('You must need to provide a comment'),
    photos: yup__WEBPACK_IMPORTED_MODULE_1__.array()
});
function ReviewForm() {
    var ref6, ref1, ref2;
    const { data  } = (0,_components_modal_views_context__WEBPACK_IMPORTED_MODULE_3__/* .useModalState */ .X9)();
    const { closeModal  } = (0,_components_modal_views_context__WEBPACK_IMPORTED_MODULE_3__/* .useModalAction */ .SO)();
    const queryClient = (0,react_query__WEBPACK_IMPORTED_MODULE_9__.useQueryClient)();
    const { 0: serverError , 1: setServerError  } = (0,react__WEBPACK_IMPORTED_MODULE_11__.useState)(null);
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_15__.useTranslation)('common');
    const { mutate: createReview , isLoading: creating  } = (0,react_query__WEBPACK_IMPORTED_MODULE_9__.useMutation)(_data_client__WEBPACK_IMPORTED_MODULE_10__/* ["default"].reviews.create */ .Z.reviews.create, {
        onSuccess: ()=>{
            react_hot_toast__WEBPACK_IMPORTED_MODULE_12___default().success(t('text-review-submitted'));
            closeModal();
        },
        onError: (error)=>{
            var ref;
            setServerError(error === null || error === void 0 ? void 0 : (ref = error.response) === null || ref === void 0 ? void 0 : ref.data);
        },
        onSettled: ()=>{
            queryClient.invalidateQueries(_data_client_endpoints__WEBPACK_IMPORTED_MODULE_14__/* .API_ENDPOINTS.ORDERS_DOWNLOADS */ .P.ORDERS_DOWNLOADS);
        }
    });
    const { mutate: updateReview , isLoading: updating  } = (0,react_query__WEBPACK_IMPORTED_MODULE_9__.useMutation)(_data_client__WEBPACK_IMPORTED_MODULE_10__/* ["default"].reviews.update */ .Z.reviews.update, {
        onSuccess: ()=>{
            react_hot_toast__WEBPACK_IMPORTED_MODULE_12___default().success(t('text-review-updated'));
            closeModal();
        },
        onError: (error)=>{
            var ref;
            setServerError(error === null || error === void 0 ? void 0 : (ref = error.response) === null || ref === void 0 ? void 0 : ref.data);
        },
        onSettled: ()=>{
            queryClient.invalidateQueries(_data_client_endpoints__WEBPACK_IMPORTED_MODULE_14__/* .API_ENDPOINTS.ORDERS_DOWNLOADS */ .P.ORDERS_DOWNLOADS);
        }
    });
    const onSubmit = (values)=>{
        if (data === null || data === void 0 ? void 0 : data.my_review) {
            var ref;
            // @ts-ignore
            updateReview({
                ...values,
                photos: values === null || values === void 0 ? void 0 : (ref = values.photos) === null || ref === void 0 ? void 0 : ref.map(({ __typename , ...rest })=>rest
                ),
                id: data.my_review.id,
                order_id: data.order_id
            });
            return;
        }
        // @ts-ignore
        createReview({
            ...values,
            product_id: data.product_id,
            shop_id: data.shop_id,
            order_id: data.order_id
        });
    };
    var ref3, ref4, ref5;
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex h-full min-h-screen w-screen flex-col justify-center bg-light text-left dark:bg-dark-250 xs:h-auto xs:min-h-0 xs:max-w-[400px] md:max-w-[590px] md:rounded-md lg:max-w-[650px]",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                className: "mb-2 pl-6 pr-6 text-center text-base font-medium tracking-[-0.3px] text-dark dark:text-light xs:mb-0 xs:border-b xs:border-dark/10 xs:py-4 xs:pr-10 xs:text-left xs:dark:border-light/10 md:py-5 md:pl-7 lg:py-6 lg:pr-16",
                children: t('text-make-review')
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "p-7",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_forms_form__WEBPACK_IMPORTED_MODULE_4__/* .Form */ .l, {
                    onSubmit: onSubmit,
                    validationSchema: reviewFormSchema,
                    serverError: serverError,
                    useFormProps: {
                        defaultValues: {
                            rating: (ref3 = data === null || data === void 0 ? void 0 : (ref6 = data.my_review) === null || ref6 === void 0 ? void 0 : ref6.rating) !== null && ref3 !== void 0 ? ref3 : 0,
                            comment: (ref4 = data === null || data === void 0 ? void 0 : (ref1 = data.my_review) === null || ref1 === void 0 ? void 0 : ref1.comment) !== null && ref4 !== void 0 ? ref4 : '',
                            photos: (ref5 = data === null || data === void 0 ? void 0 : (ref2 = data.my_review) === null || ref2 === void 0 ? void 0 : ref2.photos) !== null && ref5 !== void 0 ? ref5 : []
                        }
                    },
                    children: ({ register , control , formState: { errors  } , getValues  })=>{
                        var ref, ref7;
                        /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "mb-5",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                            className: "block cursor-pointer pb-1 text-13px font-normal text-dark/70 dark:text-light/70",
                                            children: t('text-rating-title')
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "w-auto",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_forms_rate_input__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                                    control: control,
                                                    name: "rating",
                                                    defaultValue: 0,
                                                    style: {
                                                        fontSize: 30
                                                    },
                                                    allowClear: false
                                                }),
                                                (errors === null || errors === void 0 ? void 0 : errors.rating) && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "my-2 text-xs text-red-500",
                                                    children: errors === null || errors === void 0 ? void 0 : (ref = errors.rating) === null || ref === void 0 ? void 0 : ref.message
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_forms_textarea__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                    label: t('text-comment-label'),
                                    ...register('comment'),
                                    className: "mb-5",
                                    error: errors === null || errors === void 0 ? void 0 : (ref7 = errors.comment) === null || ref7 === void 0 ? void 0 : ref7.message
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "mb-8",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_8__.Controller, {
                                        name: "photos",
                                        control: control,
                                        render: ({ field: { ref , ...rest }  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "sm:col-span-2",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "block cursor-pointer pb-2.5 text-13px font-normal text-dark/70 dark:text-light/70",
                                                        children: t('text-input-attachment')
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "text-xs",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_forms_uploader__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                                            multiple: true,
                                                            ...rest
                                                        })
                                                    })
                                                ]
                                            })
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "mt-8",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_button__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                        className: "text-sm",
                                        isLoading: creating || updating,
                                        disabled: creating || updating,
                                        children: lodash_isEmpty__WEBPACK_IMPORTED_MODULE_13___default()(data === null || data === void 0 ? void 0 : data.my_review) ? t('text-write-review') : t('text-update-review')
                                    })
                                })
                            ]
                        });
                    }
                })
            })
        ]
    }));
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8387:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rc_rate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3116);
/* harmony import */ var rc_rate__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rc_rate__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9137);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hook_form__WEBPACK_IMPORTED_MODULE_2__]);
react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const RateInput = ({ control , name , ...rateProps })=>{
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_2__.Controller, {
        control: control,
        name: name,
        render: ({ field: { ref , ...rest }  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((rc_rate__WEBPACK_IMPORTED_MODULE_1___default()), {
                ...rest,
                ...rateProps
            })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RateInput);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;