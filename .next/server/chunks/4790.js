"use strict";
exports.id = 4790;
exports.ids = [4790];
exports.modules = {

/***/ 4790:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AbuseReportForm)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_icons_report_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9573);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _data_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7607);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5609);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_ui_forms_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4142);
/* harmony import */ var _components_ui_forms_textarea__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3439);
/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4685);
/* harmony import */ var _components_modal_views_context__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5335);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8922);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_hot_toast__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_10__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_data_client__WEBPACK_IMPORTED_MODULE_3__, _components_ui_forms_form__WEBPACK_IMPORTED_MODULE_5__]);
([_data_client__WEBPACK_IMPORTED_MODULE_3__, _components_ui_forms_form__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











const abuseValidationSchema = yup__WEBPACK_IMPORTED_MODULE_4__.object().shape({
    message: yup__WEBPACK_IMPORTED_MODULE_4__.string().required('You must need to provide a message')
});
function AbuseReportForm() {
    const { data: data1  } = (0,_components_modal_views_context__WEBPACK_IMPORTED_MODULE_8__/* .useModalState */ .X9)();
    const { closeModal  } = (0,_components_modal_views_context__WEBPACK_IMPORTED_MODULE_8__/* .useModalAction */ .SO)();
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_10__.useTranslation)('common');
    const { mutate: createAbuseReport , isLoading  } = (0,react_query__WEBPACK_IMPORTED_MODULE_2__.useMutation)(_data_client__WEBPACK_IMPORTED_MODULE_3__/* ["default"].abuse.create */ .Z.abuse.create, {
        onSuccess: ()=>{
            react_hot_toast__WEBPACK_IMPORTED_MODULE_9___default().success(t('text-abuse-report'));
        },
        onError: (error)=>{
            var ref;
            // TODO: replace it after implement translation
            const { response: { data  } ,  } = error !== null && error !== void 0 ? error : {};
            if (data === null || data === void 0 ? void 0 : (ref = data.message) === null || ref === void 0 ? void 0 : ref.includes('YOU_HAVE_ALREADY_GIVEN_ABUSIVE_REPORT_FOR_THIS')) {
                react_hot_toast__WEBPACK_IMPORTED_MODULE_9___default().error(t('text-report-error-message'));
            } else {
                react_hot_toast__WEBPACK_IMPORTED_MODULE_9___default().error(data === null || data === void 0 ? void 0 : data.message);
            }
        },
        onSettled: ()=>{
            closeModal();
        }
    });
    function onSubmit(values) {
        createAbuseReport({
            model_id: data1.reviewId,
            model_type: 'Review',
            ...values
        });
    }
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex h-full min-h-screen w-screen flex-col justify-center bg-light p-6 text-left dark:bg-dark-250 xs:h-auto xs:min-h-0 xs:max-w-[400px] md:max-w-[590px] md:rounded-md md:p-7 lg:max-w-[650px]",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex flex-col items-center justify-center pt-3 pb-7 md:pt-5 md:pb-9",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons_report_icon__WEBPACK_IMPORTED_MODULE_1__/* .ReportIcon */ .c, {
                        className: "h-14 w-14 md:h-[60px] md:w-[60px]"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                        className: "mt-4 text-15px font-medium tracking-[-0.3px] text-dark dark:text-light",
                        children: t('text-about-report-title')
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_forms_form__WEBPACK_IMPORTED_MODULE_5__/* .Form */ .l, {
                onSubmit: onSubmit,
                validationSchema: abuseValidationSchema,
                useFormProps: {
                    defaultValues: {
                        message: ''
                    }
                },
                children: ({ register , formState: { errors  }  })=>{
                    var ref;
                    /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "space-y-5",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_forms_textarea__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                label: 'text-report-input-placeholder',
                                ...register('message'),
                                error: errors === null || errors === void 0 ? void 0 : (ref = errors.message) === null || ref === void 0 ? void 0 : ref.message
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_button__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                className: "text-sm",
                                disabled: isLoading,
                                isLoading: isLoading,
                                children: t('text-report-button')
                            })
                        ]
                    });
                }
            })
        ]
    }));
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;