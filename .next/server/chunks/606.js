"use strict";
exports.id = 606;
exports.ids = [606];
exports.modules = {

/***/ 4142:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "l": () => (/* binding */ Form)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9137);
/* harmony import */ var _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1908);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hook_form__WEBPACK_IMPORTED_MODULE_1__, _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_2__]);
([react_hook_form__WEBPACK_IMPORTED_MODULE_1__, _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const Form = ({ onSubmit , children , useFormProps , validationSchema , serverError , resetFields , ...formProps })=>{
    const methods = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_1__.useForm)({
        ...useFormProps,
        ...validationSchema && {
            resolver: (0,_hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_2__.yupResolver)(validationSchema)
        }
    });
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        if (serverError) {
            Object.entries(serverError).forEach(([key, value])=>{
                methods.setError(key, {
                    type: 'manual',
                    message: value
                });
            });
        }
    }, [
        serverError,
        methods
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        if (resetFields) {
            methods.reset(resetFields);
        }
    }, [
        resetFields,
        methods
    ]);
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("form", {
        noValidate: true,
        onSubmit: methods.handleSubmit(onSubmit),
        ...formProps,
        children: children(methods)
    }));
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;