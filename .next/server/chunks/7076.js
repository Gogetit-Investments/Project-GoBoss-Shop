"use strict";
exports.id = 7076;
exports.ids = [7076];
exports.modules = {

/***/ 7076:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ CartEmpty)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
;// CONCATENATED MODULE: ./src/components/icons/empty-cart-icon.tsx

const EmptyCartIcon = (props)=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        viewBox: "0 0 100 100",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M26.04 41.8L38.04 14.8",
                stroke: "currentColor",
                strokeWidth: "4",
                strokeMiterlimit: "10"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M74.04 41.8L62.04 14.8",
                stroke: "currentColor",
                strokeWidth: "4",
                strokeMiterlimit: "10"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M80 35.8H93C95.76 35.8 98 38.04 98 40.8V42.8C98 45.56 95.76 47.8 93 47.8H7C4.24 47.8 2 45.56 2 42.8V40.8C2 38.04 4.24 35.8 7 35.8H20",
                stroke: "currentColor",
                strokeWidth: "4",
                strokeMiterlimit: "10"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M72.1202 35.8H28.1202",
                stroke: "currentColor",
                strokeWidth: "4",
                strokeMiterlimit: "10"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M92 47.8H8L14.56 85.52C15.4 90.32 19.56 93.8 24.4 93.8H75.6C80.48 93.8 84.6 90.32 85.44 85.52L92 47.8Z",
                stroke: "currentColor",
                strokeWidth: "4",
                strokeMiterlimit: "10"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M29.52 60.4L31.52 81.2",
                stroke: "currentColor",
                strokeWidth: "4",
                strokeMiterlimit: "10",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M71 60.4L69 81.2",
                stroke: "currentColor",
                strokeWidth: "4",
                strokeMiterlimit: "10",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M50.2001 60.4V81.2",
                stroke: "currentColor",
                strokeWidth: "4",
                strokeMiterlimit: "10",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M39 16.8C41.7614 16.8 44 14.5614 44 11.8C44 9.03859 41.7614 6.80002 39 6.80002C36.2386 6.80002 34 9.03859 34 11.8C34 14.5614 36.2386 16.8 39 16.8Z",
                stroke: "currentColor",
                strokeWidth: "4",
                strokeMiterlimit: "10"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M61 16.8C63.7614 16.8 66 14.5614 66 11.8C66 9.03859 63.7614 6.80002 61 6.80002C58.2386 6.80002 56 9.03859 56 11.8C56 14.5614 58.2386 16.8 61 16.8Z",
                stroke: "currentColor",
                strokeWidth: "4",
                strokeMiterlimit: "10"
            })
        ]
    }));
};

// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(1377);
;// CONCATENATED MODULE: ./src/components/cart/cart-empty.tsx




function CartEmpty({ title ='text-empty-cart-message' , description ='text-empty-cart-list' , className  }) {
    const { t  } = (0,external_next_i18next_.useTranslation)('common');
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: external_classnames_default()('flex h-full flex-col items-center justify-center', className),
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(EmptyCartIcon, {
                className: "h-[100px] w-[100px] flex-shrink-0 text-light-800 dark:text-dark-600"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                className: "mt-8 text-sm font-medium text-dark dark:text-light 3xl:mt-9",
                children: t(title)
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: "mt-2 text-13px text-light-base dark:text-dark-800 md:mt-3",
                children: t(description)
            })
        ]
    }));
};


/***/ })

};
;