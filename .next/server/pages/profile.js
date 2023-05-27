"use strict";
(() => {
var exports = {};
exports.id = 277;
exports.ids = [277];
exports.modules = {

/***/ 3316:
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
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9137);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6197);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8922);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_hot_toast__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _layouts_dashboard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9292);
/* harmony import */ var _components_ui_forms_form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4142);
/* harmony import */ var _components_ui_forms_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5897);
/* harmony import */ var _components_ui_forms_textarea__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3439);
/* harmony import */ var _components_ui_forms_phone_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1761);
/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(4685);
/* harmony import */ var _data_client__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(7607);
/* harmony import */ var _lib_framer_motion_fade_in_bottom__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(2554);
/* harmony import */ var _data_user__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(6639);
/* harmony import */ var lodash_pick__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(4159);
/* harmony import */ var lodash_pick__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(lodash_pick__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _data_client_endpoints__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(1880);
/* harmony import */ var _components_ui_forms_uploader__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(9725);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(5609);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_18__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hook_form__WEBPACK_IMPORTED_MODULE_3__, framer_motion__WEBPACK_IMPORTED_MODULE_5__, _layouts_dashboard__WEBPACK_IMPORTED_MODULE_7__, _components_ui_forms_form__WEBPACK_IMPORTED_MODULE_8__, _components_ui_forms_phone_input__WEBPACK_IMPORTED_MODULE_11__, _data_client__WEBPACK_IMPORTED_MODULE_13__, _data_user__WEBPACK_IMPORTED_MODULE_14__, _components_ui_forms_uploader__WEBPACK_IMPORTED_MODULE_17__]);
([react_hook_form__WEBPACK_IMPORTED_MODULE_3__, framer_motion__WEBPACK_IMPORTED_MODULE_5__, _layouts_dashboard__WEBPACK_IMPORTED_MODULE_7__, _components_ui_forms_form__WEBPACK_IMPORTED_MODULE_8__, _components_ui_forms_phone_input__WEBPACK_IMPORTED_MODULE_11__, _data_client__WEBPACK_IMPORTED_MODULE_13__, _data_user__WEBPACK_IMPORTED_MODULE_14__, _components_ui_forms_uploader__WEBPACK_IMPORTED_MODULE_17__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




















const profileValidationSchema = yup__WEBPACK_IMPORTED_MODULE_18__.object().shape({
    id: yup__WEBPACK_IMPORTED_MODULE_18__.string().required(),
    name: yup__WEBPACK_IMPORTED_MODULE_18__.string().required(),
    profile: yup__WEBPACK_IMPORTED_MODULE_18__.object().shape({
        id: yup__WEBPACK_IMPORTED_MODULE_18__.string(),
        bio: yup__WEBPACK_IMPORTED_MODULE_18__.string(),
        contact: yup__WEBPACK_IMPORTED_MODULE_18__.string(),
        avatar: yup__WEBPACK_IMPORTED_MODULE_18__.object().shape({
            id: yup__WEBPACK_IMPORTED_MODULE_18__.string(),
            thumbnail: yup__WEBPACK_IMPORTED_MODULE_18__.string(),
            original: yup__WEBPACK_IMPORTED_MODULE_18__.string()
        }).optional().nullable()
    })
});
const ProfilePage = ()=>{
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation)('common');
    const queryClient = (0,react_query__WEBPACK_IMPORTED_MODULE_4__.useQueryClient)();
    const { me  } = (0,_data_user__WEBPACK_IMPORTED_MODULE_14__/* .useMe */ .P)();
    const { mutate , isLoading  } = (0,react_query__WEBPACK_IMPORTED_MODULE_4__.useMutation)(_data_client__WEBPACK_IMPORTED_MODULE_13__/* ["default"].users.update */ .Z.users.update, {
        onSuccess: ()=>{
            react_hot_toast__WEBPACK_IMPORTED_MODULE_6___default().success(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                children: t('text-profile-page-success-toast')
            }), {
                className: '-mt-10 xs:mt-0'
            });
        },
        onError: (error)=>{
            react_hot_toast__WEBPACK_IMPORTED_MODULE_6___default().error(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                children: t('text-profile-page-error-toast')
            }), {
                className: '-mt-10 xs:mt-0'
            });
            console.log(error);
        },
        onSettled: ()=>{
            queryClient.invalidateQueries(_data_client_endpoints__WEBPACK_IMPORTED_MODULE_16__/* .API_ENDPOINTS.USERS_ME */ .P.USERS_ME);
        }
    });
    const onSubmit = (data)=>mutate(data)
    ;
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {
        variants: (0,_lib_framer_motion_fade_in_bottom__WEBPACK_IMPORTED_MODULE_19__/* .fadeInBottom */ .op)(),
        className: "flex min-h-full flex-grow flex-col",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                className: "mb-5 text-15px font-medium text-dark dark:text-light sm:mb-6",
                children: t('text-profile-page-title')
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_forms_form__WEBPACK_IMPORTED_MODULE_8__/* .Form */ .l, {
                onSubmit: onSubmit,
                useFormProps: {
                    defaultValues: lodash_pick__WEBPACK_IMPORTED_MODULE_15___default()(me, [
                        'id',
                        'name',
                        'profile.id',
                        'profile.contact',
                        'profile.bio',
                        'profile.avatar', 
                    ])
                },
                validationSchema: profileValidationSchema,
                className: "flex flex-grow flex-col",
                children: ({ register , reset , control , formState: { errors  }  })=>{
                    var ref5, ref1, ref2, ref3, ref4;
                    /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("fieldset", {
                                className: "mb-6 grid gap-5 pb-5 sm:grid-cols-2 md:pb-9 lg:mb-8",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_3__.Controller, {
                                        name: "profile.avatar",
                                        control: control,
                                        render: ({ field: { ref , ...rest }  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "sm:col-span-2",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "block cursor-pointer pb-2.5 font-normal text-dark/70 dark:text-light/70",
                                                        children: t('text-profile-avatar')
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "text-xs",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_forms_uploader__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                                                            ...rest,
                                                            multiple: false
                                                        })
                                                    })
                                                ]
                                            })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_forms_input__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                        label: t('text-profile-name'),
                                        ...register('name'),
                                        error: (ref5 = errors.name) === null || ref5 === void 0 ? void 0 : ref5.message
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "block cursor-pointer pb-2.5 font-normal text-dark/70 dark:text-light/70",
                                                children: t('text-profile-contact')
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_3__.Controller, {
                                                name: "profile.contact",
                                                control: control,
                                                render: ({ field  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_forms_phone_input__WEBPACK_IMPORTED_MODULE_11__/* .ReactPhone */ .Tv, {
                                                        country: "us",
                                                        ...field
                                                    })
                                            }),
                                            ((ref1 = errors.profile) === null || ref1 === void 0 ? void 0 : (ref2 = ref1.contact) === null || ref2 === void 0 ? void 0 : ref2.message) && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                role: "alert",
                                                className: "block pt-2 text-xs text-warning",
                                                children: 'contact field is required'
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_forms_textarea__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                        label: t('text-profile-bio'),
                                        ...register('profile.bio'),
                                        error: ((ref3 = errors.profile) === null || ref3 === void 0 ? void 0 : (ref4 = ref3.bio) === null || ref4 === void 0 ? void 0 : ref4.message) && 'bio field is required',
                                        className: "sm:col-span-2"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "mt-auto flex items-center gap-4 pb-3 lg:justify-end",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_button__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                        type: "reset",
                                        onClick: ()=>{
                                            var ref;
                                            return reset({
                                                id: me === null || me === void 0 ? void 0 : me.id,
                                                name: '',
                                                profile: {
                                                    id: me === null || me === void 0 ? void 0 : (ref = me.profile) === null || ref === void 0 ? void 0 : ref.id,
                                                    avatar: null,
                                                    bio: '',
                                                    contact: ''
                                                }
                                            });
                                        },
                                        disabled: isLoading,
                                        variant: "outline",
                                        className: "flex-1 lg:flex-none",
                                        children: t('text-cancel')
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_button__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                        className: "flex-1 lg:flex-none",
                                        isLoading: isLoading,
                                        disabled: isLoading,
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
ProfilePage.authorization = true;
ProfilePage.getLayout = function getLayout(page) {
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layouts_dashboard__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
        children: page
    }));
};
const getStaticProps = async ({ locale  })=>{
    return {
        props: {
            ...await (0,next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_1__.serverSideTranslations)(locale, [
                'common'
            ])
        },
        revalidate: 60
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProfilePage);

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

/***/ 4159:
/***/ ((module) => {

module.exports = require("lodash/pick");

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

/***/ 6358:
/***/ ((module) => {

module.exports = require("react-dropzone");

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
var __webpack_exports__ = __webpack_require__.X(0, [7730,3157,6639,714,518,5517,9573,7168,9363,606,9292,5897,3439,9725,1761], () => (__webpack_exec__(3316)));
module.exports = __webpack_exports__;

})();