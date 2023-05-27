"use strict";
(() => {
var exports = {};
exports.id = 8322;
exports.ids = [8322];
exports.modules = {

/***/ 9714:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5460);
/* harmony import */ var next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6197);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8922);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_hot_toast__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _layouts_dashboard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9292);
/* harmony import */ var _components_ui_forms_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4142);
/* harmony import */ var _components_ui_forms_password__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2250);
/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4685);
/* harmony import */ var _data_client__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7607);
/* harmony import */ var _lib_framer_motion_fade_in_bottom__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(2554);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5609);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _data_client_endpoints__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(1880);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_4__, _layouts_dashboard__WEBPACK_IMPORTED_MODULE_6__, _components_ui_forms_form__WEBPACK_IMPORTED_MODULE_7__, _data_client__WEBPACK_IMPORTED_MODULE_10__]);
([framer_motion__WEBPACK_IMPORTED_MODULE_4__, _layouts_dashboard__WEBPACK_IMPORTED_MODULE_6__, _components_ui_forms_form__WEBPACK_IMPORTED_MODULE_7__, _data_client__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);















// export const getStaticProps = async () => {
//   const queryClient = new QueryClient();
//   await queryClient.prefetchQuery(
//     [API_ENDPOINTS.SETTINGS],
//     client.settings.all
//   );
//   return {
//     props: {
//       dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
//     },
//   };
// };
const changePasswordSchema = yup__WEBPACK_IMPORTED_MODULE_11__.object().shape({
    oldPassword: yup__WEBPACK_IMPORTED_MODULE_11__.string().required(),
    newPassword: yup__WEBPACK_IMPORTED_MODULE_11__.string().min(6).required(),
    confirmPassword: yup__WEBPACK_IMPORTED_MODULE_11__.string().oneOf([
        yup__WEBPACK_IMPORTED_MODULE_11__.ref('newPassword')
    ], 'Passwords must match').required()
});
const ChangePasswordPage = ()=>{
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation)('common');
    let { 0: error , 1: setError  } = (0,react__WEBPACK_IMPORTED_MODULE_12__.useState)(null);
    const { mutate , isLoading  } = (0,react_query__WEBPACK_IMPORTED_MODULE_3__.useMutation)(_data_client__WEBPACK_IMPORTED_MODULE_10__/* ["default"].users.changePassword */ .Z.users.changePassword, {
        onSuccess: (data)=>{
            if (!data.success) {
                setError({
                    oldPassword: data.message
                });
                react_hot_toast__WEBPACK_IMPORTED_MODULE_5___default().error(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                    children: "Current password is incorrect"
                }), {
                    className: '-mt-10 xs:mt-0'
                });
                return;
            }
            react_hot_toast__WEBPACK_IMPORTED_MODULE_5___default().success(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                children: "Password successfully updated!"
            }), {
                className: '-mt-10 xs:mt-0'
            });
        }
    });
    const onSubmit = (data)=>mutate(data)
    ;
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {
        variants: (0,_lib_framer_motion_fade_in_bottom__WEBPACK_IMPORTED_MODULE_14__/* .fadeInBottom */ .op)(),
        className: "flex min-h-full flex-grow flex-col",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                className: "mb-5 text-15px font-medium text-dark dark:text-light sm:mb-6",
                children: t('text-password-page-title')
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_forms_form__WEBPACK_IMPORTED_MODULE_7__/* .Form */ .l, {
                onSubmit: onSubmit,
                validationSchema: changePasswordSchema,
                serverError: error,
                className: "flex flex-grow flex-col",
                children: ({ register , reset , formState: { errors  }  })=>{
                    var ref, ref1, ref2;
                    /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("fieldset", {
                                className: "mb-6 grid gap-5 pb-5 sm:grid-cols-2 md:pb-9 lg:mb-8",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_forms_password__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                        label: t('text-current-password'),
                                        ...register('oldPassword'),
                                        error: ((ref = errors.oldPassword) === null || ref === void 0 ? void 0 : ref.message) && 'Current password is incorrect'
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_forms_password__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                        label: t('text-new-password'),
                                        ...register('newPassword'),
                                        error: (ref1 = errors.newPassword) === null || ref1 === void 0 ? void 0 : ref1.message
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_forms_password__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                        label: t('text-confirm-password'),
                                        ...register('confirmPassword'),
                                        error: (ref2 = errors.confirmPassword) === null || ref2 === void 0 ? void 0 : ref2.message
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "mt-auto flex items-center gap-4 pb-3 lg:justify-end",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_button__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                        type: "reset",
                                        variant: "outline",
                                        disabled: isLoading,
                                        onClick: ()=>reset()
                                        ,
                                        className: "flex-1 lg:flex-none",
                                        children: t('text-cancel')
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_button__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                        type: "submit",
                                        isLoading: isLoading,
                                        disabled: isLoading,
                                        className: "flex-1 lg:flex-none",
                                        children: t('text-save-changes')
                                    })
                                ]
                            })
                        ]
                    });
                }
            })
        ]
    }));
};
ChangePasswordPage.authorization = true;
ChangePasswordPage.getLayout = function getLayout(page) {
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layouts_dashboard__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
        children: page
    }));
};
const getStaticProps = async ({ locale  })=>{
    const queryClient = new react_query__WEBPACK_IMPORTED_MODULE_3__.QueryClient();
    await queryClient.prefetchQuery([
        _data_client_endpoints__WEBPACK_IMPORTED_MODULE_13__/* .API_ENDPOINTS.SETTINGS */ .P.SETTINGS,
        {
            language: locale
        }
    ], ({ queryKey  })=>_data_client__WEBPACK_IMPORTED_MODULE_10__/* ["default"].settings.all */ .Z.settings.all(queryKey[1])
    );
    return {
        props: {
            dehydratedState: JSON.parse(JSON.stringify((0,react_query__WEBPACK_IMPORTED_MODULE_3__.dehydrate)(queryClient))),
            ...await (0,next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_1__.serverSideTranslations)(locale, [
                'common'
            ])
        },
        revalidate: 60
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChangePasswordPage);

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

/***/ 5609:
/***/ ((module) => {

module.exports = require("yup");

/***/ }),

/***/ 1185:
/***/ ((module) => {

module.exports = import("@headlessui/react");;

/***/ }),

/***/ 1908:
/***/ ((module) => {

module.exports = import("@hookform/resolvers/yup");;

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

/***/ }),

/***/ 9137:
/***/ ((module) => {

module.exports = import("react-hook-form");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [7730,3157,6639,714,518,5517,9573,7168,9363,606,9292,2250], () => (__webpack_exec__(9714)));
module.exports = __webpack_exports__;

})();