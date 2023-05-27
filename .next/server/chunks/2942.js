"use strict";
exports.id = 2942;
exports.ids = [2942];
exports.modules = {

/***/ 2942:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ QuestionForm)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5609);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4685);
/* harmony import */ var _components_ui_forms_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4142);
/* harmony import */ var _components_ui_forms_textarea__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3439);
/* harmony import */ var _components_modal_views_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5335);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _data_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7607);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8922);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_hot_toast__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _data_client_endpoints__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1880);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_10__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_ui_forms_form__WEBPACK_IMPORTED_MODULE_3__, _data_client__WEBPACK_IMPORTED_MODULE_7__]);
([_components_ui_forms_form__WEBPACK_IMPORTED_MODULE_3__, _data_client__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











const questionFormSchema = yup__WEBPACK_IMPORTED_MODULE_1__.object().shape({
    question: yup__WEBPACK_IMPORTED_MODULE_1__.string().required('Tell us more about it')
});
function QuestionForm() {
    const { data: data1  } = (0,_components_modal_views_context__WEBPACK_IMPORTED_MODULE_5__/* .useModalState */ .X9)();
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_10__.useTranslation)('common');
    const { closeModal  } = (0,_components_modal_views_context__WEBPACK_IMPORTED_MODULE_5__/* .useModalAction */ .SO)();
    const queryClient = (0,react_query__WEBPACK_IMPORTED_MODULE_6__.useQueryClient)();
    const { mutate: createQuestion , isLoading  } = (0,react_query__WEBPACK_IMPORTED_MODULE_6__.useMutation)(_data_client__WEBPACK_IMPORTED_MODULE_7__/* ["default"].questions.create */ .Z.questions.create, {
        onSuccess: ()=>{
            react_hot_toast__WEBPACK_IMPORTED_MODULE_8___default().success(t('text-ask-question-success'));
        },
        onError: (error)=>{
            var ref;
            // TODO: replace it after implement translation
            const { response: { data  } ,  } = error !== null && error !== void 0 ? error : {};
            if (data === null || data === void 0 ? void 0 : (ref = data.message) === null || ref === void 0 ? void 0 : ref.includes('MAXIMUM_QUESTION_LIMIT_EXCEEDED')) {
                react_hot_toast__WEBPACK_IMPORTED_MODULE_8___default().error(t('text-ask-question-error'));
            } else {
                react_hot_toast__WEBPACK_IMPORTED_MODULE_8___default().error(data === null || data === void 0 ? void 0 : data.message);
            }
        },
        onSettled: ()=>{
            queryClient.refetchQueries([
                _data_client_endpoints__WEBPACK_IMPORTED_MODULE_9__/* .API_ENDPOINTS.PRODUCTS_QUESTIONS */ .P.PRODUCTS_QUESTIONS
            ]);
            closeModal();
        }
    });
    const onSubmit = (values)=>{
        createQuestion({
            product_id: data1.product_id,
            shop_id: data1.shop_id,
            question: values.question
        });
    };
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex h-full min-h-screen w-screen flex-col justify-center bg-light text-left dark:bg-dark-250 xs:h-auto xs:min-h-0 xs:max-w-[400px] md:max-w-[590px] md:rounded-xl lg:max-w-[650px]",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                className: "mb-2 pl-6 pr-6 text-center text-base font-medium tracking-[-0.3px] text-dark dark:text-light xs:mb-0 xs:border-b xs:border-dark/10 xs:py-4 xs:pr-10 xs:text-left xs:dark:border-light/10 md:py-5 md:pl-7 lg:py-6 lg:pr-16",
                children: t('text-ask-seller-question')
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "p-6 md:p-7",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_forms_form__WEBPACK_IMPORTED_MODULE_3__/* .Form */ .l, {
                    onSubmit: onSubmit,
                    validationSchema: questionFormSchema,
                    children: ({ register , formState: { errors  }  })=>{
                        var ref;
                        /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_forms_textarea__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                    ...register('question'),
                                    className: "mb-5",
                                    error: errors === null || errors === void 0 ? void 0 : (ref = errors.question) === null || ref === void 0 ? void 0 : ref.message
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "text-xs leading-5 text-dark/60 ltr:pr-8 rtl:pl-8 dark:text-light/60",
                                            children: t('text-ask-question-desc')
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_button__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                            className: "text-sm",
                                            isLoading: isLoading,
                                            disabled: isLoading,
                                            children: t('text-submit')
                                        })
                                    ]
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

/***/ })

};
;