"use strict";
exports.id = 5601;
exports.ids = [5601];
exports.modules = {

/***/ 5601:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LoginUserForm)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5609);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8922);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_hot_toast__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_ui_forms_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4142);
/* harmony import */ var _components_ui_forms_password__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2250);
/* harmony import */ var _components_ui_forms_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5897);
/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4685);
/* harmony import */ var _components_modal_views_context__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5335);
/* harmony import */ var _components_auth_use_auth__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9406);
/* harmony import */ var _components_ui_forms_checkbox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9668);
/* harmony import */ var _components_auth_register_bg_pattern__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(7038);
/* harmony import */ var _data_client__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(7607);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_13__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_ui_forms_form__WEBPACK_IMPORTED_MODULE_4__, _components_auth_use_auth__WEBPACK_IMPORTED_MODULE_9__, _data_client__WEBPACK_IMPORTED_MODULE_12__]);
([_components_ui_forms_form__WEBPACK_IMPORTED_MODULE_4__, _components_auth_use_auth__WEBPACK_IMPORTED_MODULE_9__, _data_client__WEBPACK_IMPORTED_MODULE_12__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);














const loginValidationSchema = yup__WEBPACK_IMPORTED_MODULE_1__.object().shape({
    email: yup__WEBPACK_IMPORTED_MODULE_1__.string().email().required(),
    password: yup__WEBPACK_IMPORTED_MODULE_1__.string().required()
});
function LoginUserForm() {
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_13__.useTranslation)('common');
    const { openModal , closeModal  } = (0,_components_modal_views_context__WEBPACK_IMPORTED_MODULE_8__/* .useModalAction */ .SO)();
    const { authorize  } = (0,_components_auth_use_auth__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)();
    const { mutate: login  } = (0,react_query__WEBPACK_IMPORTED_MODULE_2__.useMutation)(_data_client__WEBPACK_IMPORTED_MODULE_12__/* ["default"].users.login */ .Z.users.login, {
        onSuccess: (data)=>{
            if (!data.token) {
                react_hot_toast__WEBPACK_IMPORTED_MODULE_3___default().error(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                    children: t('text-wrong-user-name-and-pass')
                }), {
                    className: '-mt-10 xs:mt-0'
                });
                return;
            }
            authorize(data.token);
            closeModal();
        }
    });
    const onSubmit = (data)=>{
        login(data);
    };
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "bg-light px-6 pt-10 pb-8 dark:bg-dark-300 sm:px-8 lg:p-12",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_auth_register_bg_pattern__WEBPACK_IMPORTED_MODULE_11__/* .RegisterBgPattern */ .i, {
                className: "absolute bottom-0 left-0 text-light dark:text-dark-300 dark:opacity-60"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "relative z-10 flex items-center",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "w-full shrink-0 text-left md:w-[380px]",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex flex-col pb-5 text-center xl:pb-6 xl:pt-2",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                    className: "text-lg font-medium tracking-[-0.3px] text-dark dark:text-light lg:text-xl",
                                    children: t('text-welcome-back')
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "mt-1.5 text-13px leading-6 tracking-[0.2px] dark:text-light-900 lg:mt-2.5 xl:mt-3",
                                    children: [
                                        t('text-join-now'),
                                        ' ',
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            onClick: ()=>openModal('REGISTER')
                                            ,
                                            className: "inline-flex font-semibold text-brand hover:text-dark-400 hover:dark:text-light-500",
                                            children: t('text-create-account')
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_forms_form__WEBPACK_IMPORTED_MODULE_4__/* .Form */ .l, {
                            onSubmit: onSubmit,
                            validationSchema: loginValidationSchema,
                            className: "space-y-4 pt-4 lg:space-y-5",
                            children: ({ register , formState: { errors  }  })=>{
                                var ref, ref1;
                                /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_forms_input__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                            label: "contact-us-email-field",
                                            inputClassName: "bg-light dark:bg-dark-300",
                                            type: "email",
                                            ...register('email'),
                                            error: (ref = errors.email) === null || ref === void 0 ? void 0 : ref.message
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_forms_password__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                            label: "text-auth-password",
                                            inputClassName: "bg-light dark:bg-dark-300",
                                            ...register('password'),
                                            error: (ref1 = errors.password) === null || ref1 === void 0 ? void 0 : ref1.message
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "flex items-center justify-between space-x-5 rtl:space-x-reverse",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_forms_checkbox__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                                    label: "text-remember-me"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                    type: "button",
                                                    className: "text-13px font-semibold text-brand hover:text-dark-400 hover:dark:text-light-500",
                                                    onClick: ()=>openModal('FORGOT_PASSWORD_VIEW')
                                                    ,
                                                    children: t('text-forgot-password')
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_button__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                            type: "submit",
                                            className: "!mt-5 w-full text-sm tracking-[0.2px] lg:!mt-7",
                                            children: t('text-get-login')
                                        })
                                    ]
                                });
                            }
                        })
                    ]
                })
            })
        ]
    }));
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9406:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ useAuth)
/* harmony export */ });
/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2451);
/* harmony import */ var _data_client_token_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(575);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([jotai__WEBPACK_IMPORTED_MODULE_0__, _data_client_token_utils__WEBPACK_IMPORTED_MODULE_1__]);
([jotai__WEBPACK_IMPORTED_MODULE_0__, _data_client_token_utils__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


const authorizationAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_0__.atom)((0,_data_client_token_utils__WEBPACK_IMPORTED_MODULE_1__/* .checkHasAuthToken */ .qz)());
function useAuth() {
    const [isAuthorized, setAuthorized] = (0,jotai__WEBPACK_IMPORTED_MODULE_0__.useAtom)(authorizationAtom);
    return {
        setToken: _data_client_token_utils__WEBPACK_IMPORTED_MODULE_1__/* .setAuthToken */ .uB,
        getToken: _data_client_token_utils__WEBPACK_IMPORTED_MODULE_1__/* .getAuthToken */ .bW,
        isAuthorized,
        authorize (token) {
            (0,_data_client_token_utils__WEBPACK_IMPORTED_MODULE_1__/* .setAuthToken */ .uB)(token);
            setAuthorized(true);
        },
        unauthorize () {
            setAuthorized(false);
            (0,_data_client_token_utils__WEBPACK_IMPORTED_MODULE_1__/* .removeAuthToken */ .H6)();
        }
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;