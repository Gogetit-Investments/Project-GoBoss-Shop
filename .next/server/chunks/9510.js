"use strict";
exports.id = 9510;
exports.ids = [9510];
exports.modules = {

/***/ 9510:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ForgotUserPassword)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5609);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8922);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_hot_toast__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_ui_forms_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4142);
/* harmony import */ var _components_ui_forms_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5897);
/* harmony import */ var _components_ui_forms_password__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2250);
/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4685);
/* harmony import */ var _components_modal_views_context__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5335);
/* harmony import */ var _components_auth_register_bg_pattern__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7038);
/* harmony import */ var little_state_machine__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6024);
/* harmony import */ var little_state_machine__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(little_state_machine__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _data_client__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7607);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_13__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_ui_forms_form__WEBPACK_IMPORTED_MODULE_3__, _data_client__WEBPACK_IMPORTED_MODULE_10__]);
([_components_ui_forms_form__WEBPACK_IMPORTED_MODULE_3__, _data_client__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);














const emailFormValidation = yup__WEBPACK_IMPORTED_MODULE_1__.object().shape({
    email: yup__WEBPACK_IMPORTED_MODULE_1__.string().email().required()
});
const tokenFormValidation = yup__WEBPACK_IMPORTED_MODULE_1__.object().shape({
    token: yup__WEBPACK_IMPORTED_MODULE_1__.string().required()
});
const passwordFormValidation = yup__WEBPACK_IMPORTED_MODULE_1__.object().shape({
    password: yup__WEBPACK_IMPORTED_MODULE_1__.string().required()
});
function EmailForm({ email , serverError , onSubmit , isLoading  }) {
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_13__.useTranslation)('common');
    const { openModal  } = (0,_components_modal_views_context__WEBPACK_IMPORTED_MODULE_7__/* .useModalAction */ .SO)();
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "bg-light px-6 pt-10 pb-8 dark:bg-dark-300 sm:px-8 lg:p-12",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_auth_register_bg_pattern__WEBPACK_IMPORTED_MODULE_8__/* .RegisterBgPattern */ .i, {
                className: "absolute bottom-0 left-0 text-light dark:text-dark-300 dark:opacity-60"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "relative z-10 flex items-center",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "w-full shrink-0 text-left md:w-[380px]",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex flex-col pb-5 text-center lg:pb-9 xl:pb-10 xl:pt-2",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                    className: "text-lg font-medium tracking-[-0.3px] text-dark dark:text-light lg:text-xl",
                                    children: t('text-reset-password')
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "mt-1.5 text-13px leading-6 tracking-[0.2px] dark:text-light-900 lg:mt-2.5 xl:mt-3",
                                    children: t('text-reset-password-title')
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_forms_form__WEBPACK_IMPORTED_MODULE_3__/* .Form */ .l, {
                            onSubmit: onSubmit,
                            useFormProps: {
                                defaultValues: {
                                    email
                                }
                            },
                            serverError: serverError,
                            validationSchema: emailFormValidation,
                            className: "text-left",
                            children: ({ register , formState: { errors  }  })=>{
                                var ref;
                                /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_forms_input__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                            label: "contact-us-email-field",
                                            type: "email",
                                            ...register('email'),
                                            error: ((ref = errors.email) === null || ref === void 0 ? void 0 : ref.message) && 'text-email-notice'
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_button__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                            type: "submit",
                                            className: "!mt-5 w-full text-sm tracking-[0.2px] lg:!mt-6",
                                            isLoading: isLoading,
                                            disabled: isLoading,
                                            children: t('text-reset-password-submit')
                                        })
                                    ]
                                });
                            }
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "relative mt-10 flex items-center justify-center border-t border-light-500 text-13px dark:border-dark-600",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "absolute inline-flex bg-light px-2 pb-0.5 dark:bg-dark-300",
                                children: t('text-or')
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "pt-7 text-center text-13px",
                            children: [
                                t('text-back-to'),
                                ' ',
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    type: "button",
                                    className: "font-semibold text-brand hover:text-dark-400 hover:dark:text-light-500",
                                    onClick: ()=>openModal('LOGIN_VIEW')
                                    ,
                                    children: t('text-login')
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    }));
}
function TokenForm({ token , message , serverError , onSubmit , isLoading , onBack  }) {
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "px-6 pt-10 pb-8 sm:px-8 lg:p-12",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_auth_register_bg_pattern__WEBPACK_IMPORTED_MODULE_8__/* .RegisterBgPattern */ .i, {
                className: "absolute bottom-0 left-0 text-light dark:text-dark-300 dark:opacity-60"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "relative z-10",
                children: [
                    message && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex flex-col pb-5 text-center lg:pb-9 xl:pb-10 xl:pt-2",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                className: "text-lg font-medium tracking-[-0.3px] text-dark dark:text-light lg:text-xl",
                                children: "Check Your Email"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "mt-1.5 text-13px leading-6 tracking-[0.2px] dark:text-light-900 lg:mt-2.5 xl:mt-3",
                                children: "We sent you a token to reset your password"
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_forms_form__WEBPACK_IMPORTED_MODULE_3__/* .Form */ .l, {
                        onSubmit: onSubmit,
                        useFormProps: {
                            defaultValues: {
                                token
                            }
                        },
                        validationSchema: tokenFormValidation,
                        serverError: serverError,
                        children: ({ register , formState: { errors  }  })=>{
                            var ref;
                            /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "w-full xs:w-[380px]",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_forms_input__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                        label: "Enter Token",
                                        ...register('token'),
                                        error: ((ref = errors.token) === null || ref === void 0 ? void 0 : ref.message) && 'Invalid token',
                                        className: "text-left"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "mt-7 grid grid-cols-2 gap-5 text-13px",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_button__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                                type: "reset",
                                                variant: "outline",
                                                onClick: onBack,
                                                children: "Back"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_button__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                                type: "submit",
                                                isLoading: isLoading,
                                                disabled: isLoading,
                                                children: "Verify Token"
                                            })
                                        ]
                                    })
                                ]
                            });
                        }
                    })
                ]
            })
        ]
    }));
}
function PasswordForm({ onSubmit , isLoading , onBack  }) {
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "px-6 pt-10 pb-8 sm:px-8 lg:p-12",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_auth_register_bg_pattern__WEBPACK_IMPORTED_MODULE_8__/* .RegisterBgPattern */ .i, {
                className: "absolute bottom-0 left-0 text-light dark:text-dark-300 dark:opacity-60"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "relative z-10",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex flex-col pb-5 text-center lg:pb-9 xl:pb-10 xl:pt-2",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                className: "text-lg font-medium tracking-[-0.3px] text-dark dark:text-light lg:text-xl",
                                children: "Reset Password"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "mt-1.5 text-13px leading-6 tracking-[0.2px] dark:text-light-900 lg:mt-2.5 xl:mt-3",
                                children: "Almost there to reset your password"
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_forms_form__WEBPACK_IMPORTED_MODULE_3__/* .Form */ .l, {
                        onSubmit: onSubmit,
                        useFormProps: {
                            defaultValues: {
                                password: ''
                            }
                        },
                        validationSchema: passwordFormValidation,
                        children: ({ register , formState: { errors  }  })=>{
                            var ref;
                            /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "w-full xs:w-[380px]",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_forms_password__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                        label: "New Password",
                                        ...register('password'),
                                        error: (ref = errors.password) === null || ref === void 0 ? void 0 : ref.message,
                                        className: "text-left"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "mt-7 grid grid-cols-2 gap-5 text-13px",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_button__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                                type: "reset",
                                                variant: "outline",
                                                onClick: onBack,
                                                children: "Back"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_button__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                                type: "submit",
                                                isLoading: isLoading,
                                                disabled: isLoading,
                                                children: "Send"
                                            })
                                        ]
                                    })
                                ]
                            });
                        }
                    })
                ]
            })
        ]
    }));
}
function RenderFormSteps() {
    const { openModal  } = (0,_components_modal_views_context__WEBPACK_IMPORTED_MODULE_7__/* .useModalAction */ .SO)();
    const { 0: message , 1: setMessage  } = (0,react__WEBPACK_IMPORTED_MODULE_12__.useState)(null);
    const { 0: error , 1: setError  } = (0,react__WEBPACK_IMPORTED_MODULE_12__.useState)(null);
    const { mutate: forgotPassword , isLoading  } = (0,react_query__WEBPACK_IMPORTED_MODULE_11__.useMutation)(_data_client__WEBPACK_IMPORTED_MODULE_10__/* ["default"].users.forgotPassword */ .Z.users.forgotPassword);
    const { mutate: verifyForgotPasswordToken , isLoading: verifying  } = (0,react_query__WEBPACK_IMPORTED_MODULE_11__.useMutation)(_data_client__WEBPACK_IMPORTED_MODULE_10__/* ["default"].users.verifyForgotPasswordToken */ .Z.users.verifyForgotPasswordToken);
    const { mutate: resetPassword , isLoading: resetting  } = (0,react_query__WEBPACK_IMPORTED_MODULE_11__.useMutation)(_data_client__WEBPACK_IMPORTED_MODULE_10__/* ["default"].users.resetPassword */ .Z.users.resetPassword);
    // use hook for getting form state and actions
    const { state , actions  } = (0,little_state_machine__WEBPACK_IMPORTED_MODULE_9__.useStateMachine)({
        updateFormState
    });
    const emailFormHandle = ({ email  })=>{
        forgotPassword({
            email
        }, {
            onSuccess: (data)=>{
                if (!data.success) {
                    setError({
                        email: data.message
                    });
                    return;
                }
                setMessage(data.message);
                actions.updateFormState({
                    email,
                    step: 'Token'
                });
            }
        });
    };
    const passwordFormHandle = ({ password  })=>{
        resetPassword({
            password,
            token: state.token,
            email: state.email
        }, {
            onSuccess: (res)=>{
                if (res.success) {
                    actions.updateFormState({
                        ...initialState
                    });
                    react_hot_toast__WEBPACK_IMPORTED_MODULE_2___default().success(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                        children: "Password successfully reset!"
                    }), {
                        className: '-mt-10 xs:mt-0'
                    });
                    openModal('LOGIN_VIEW');
                }
            }
        });
    };
    const tokenFormHandle = ({ token  })=>{
        verifyForgotPasswordToken({
            token,
            email: state.email
        }, {
            onSuccess: (res)=>{
                if (!res.success) {
                    setError({
                        token: res.message
                    });
                    return;
                }
                actions.updateFormState({
                    step: 'Password',
                    token
                });
            }
        });
    };
    function backToPreviousStep(step) {
        actions.updateFormState({
            step
        });
    }
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            state.step === 'Email' && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(EmailForm, {
                email: state.email,
                onSubmit: emailFormHandle,
                serverError: error,
                isLoading: isLoading
            }),
            state.step === 'Token' && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TokenForm, {
                token: state.token,
                onSubmit: tokenFormHandle,
                message: message,
                serverError: error,
                isLoading: verifying,
                onBack: ()=>backToPreviousStep('Email')
            }),
            state.step === 'Password' && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(PasswordForm, {
                onSubmit: passwordFormHandle,
                isLoading: resetting,
                onBack: ()=>backToPreviousStep('Token')
            })
        ]
    }));
}
const initialState = {
    step: 'Email',
    email: '',
    password: '',
    token: ''
};
//@ts-ignore
(0,little_state_machine__WEBPACK_IMPORTED_MODULE_9__.createStore)(initialState);
const updateFormState = (state, payload)=>{
    return {
        ...state,
        ...payload
    };
};
function ForgotUserPassword() {
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(little_state_machine__WEBPACK_IMPORTED_MODULE_9__.StateMachineProvider, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(RenderFormSteps, {})
    }));
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;