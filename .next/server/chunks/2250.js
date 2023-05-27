"use strict";
exports.id = 2250;
exports.ids = [2250];
exports.modules = {

/***/ 2250:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ forms_password)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
;// CONCATENATED MODULE: ./src/components/icons/eye-icon.tsx

const EyeIcon = (props)=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor",
        ...props,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 1.5,
                d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 1.5,
                d: "M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
            })
        ]
    }));
};

;// CONCATENATED MODULE: ./src/components/icons/eye-close-icon.tsx

const EyeCloseIcon = (props)=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("svg", {
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor",
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: 1.5,
            d: "M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
        })
    }));
};

// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(1377);
;// CONCATENATED MODULE: ./src/components/ui/forms/password.tsx






const Password = /*#__PURE__*/ (0,external_react_.forwardRef)(({ label , error , className , inputClassName ='bg-transparent' , ...props }, ref)=>{
    const { t  } = (0,external_next_i18next_.useTranslation)('common');
    let { 0: showPassword , 1: setShowPassword  } = (0,external_react_.useState)(false);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: className,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                className: "block text-13px",
                children: [
                    label && /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "block cursor-pointer pb-2.5 font-normal text-dark/70 rtl:text-right dark:text-light/70",
                        children: t(label)
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                        className: "relative block",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                type: showPassword ? 'text' : 'password',
                                ref: ref,
                                ...props,
                                className: external_classnames_default()('h-11 w-full appearance-none rounded border border-light-500 bg-transparent py-2 text-13px text-dark ring-[0.5px] ring-light-500 focus:border-brand focus:ring-[0.5px] focus:ring-brand ltr:pl-4 ltr:pr-12 rtl:pr-4 rtl:pl-12 dark:border-dark-600 dark:text-light dark:ring-dark-600 dark:focus:border-brand dark:focus:ring-brand md:h-12 lg:pr-12 lg:pl-5 xl:h-[50px]', inputClassName)
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                onClick: ()=>setShowPassword(!showPassword)
                                ,
                                className: " absolute top-0 flex h-full w-[34px] cursor-pointer items-center justify-start text-dark-900 hover:text-dark-700 ltr:right-0 rtl:left-0 dark:text-dark-800 hover:dark:text-light-900 lg:w-9",
                                children: showPassword ? /*#__PURE__*/ jsx_runtime_.jsx(EyeCloseIcon, {
                                    className: "h-auto w-5"
                                }) : /*#__PURE__*/ jsx_runtime_.jsx(EyeIcon, {
                                    className: "h-auto w-5"
                                })
                            })
                        ]
                    })
                ]
            }),
            error && /*#__PURE__*/ jsx_runtime_.jsx("span", {
                role: "alert",
                className: "block pt-2 text-xs text-warning",
                children: error
            })
        ]
    }));
});
Password.displayName = 'Password';
/* harmony default export */ const forms_password = (Password);


/***/ })

};
;