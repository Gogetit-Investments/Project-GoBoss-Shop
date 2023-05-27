"use strict";
exports.id = 9621;
exports.ids = [9621];
exports.modules = {

/***/ 7649:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ FavoriteButton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_modal_views_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5335);
/* harmony import */ var _data_wishlist__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1748);
/* harmony import */ var _data_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6639);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_icons_heart_fill__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7016);
/* harmony import */ var _components_icons_heart_outline__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6816);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8922);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_hot_toast__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_data_wishlist__WEBPACK_IMPORTED_MODULE_2__, _data_user__WEBPACK_IMPORTED_MODULE_3__]);
([_data_wishlist__WEBPACK_IMPORTED_MODULE_2__, _data_user__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








function FavoriteButton({ productId , className  }) {
    const { isAuthorized  } = (0,_data_user__WEBPACK_IMPORTED_MODULE_3__/* .useMe */ .P)();
    const { toggleWishlist , isLoading: adding  } = (0,_data_wishlist__WEBPACK_IMPORTED_MODULE_2__/* .useToggleWishlist */ .n$)(productId);
    const { inWishlist , isLoading: checking  } = (0,_data_wishlist__WEBPACK_IMPORTED_MODULE_2__/* .useInWishlist */ .tc)({
        enabled: isAuthorized,
        product_id: productId
    });
    const { openModal  } = (0,_components_modal_views_context__WEBPACK_IMPORTED_MODULE_1__/* .useModalAction */ .SO)();
    function toggle() {
        if (!isAuthorized) {
            openModal('LOGIN_VIEW');
            return;
        }
        toggleWishlist({
            product_id: productId
        });
    }
    const isLoading = adding || checking;
    if (isLoading) {
        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: classnames__WEBPACK_IMPORTED_MODULE_4___default()('mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center ', className),
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_hot_toast__WEBPACK_IMPORTED_MODULE_7__.LoaderIcon, {
                className: "flex h-5 w-5"
            })
        }));
    }
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        type: "button",
        className: classnames__WEBPACK_IMPORTED_MODULE_4___default()('mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center transition-colors ltr:ml-1  rtl:mr-1', {
            '!border-accent': inWishlist
        }, className),
        onClick: toggle,
        children: inWishlist ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons_heart_fill__WEBPACK_IMPORTED_MODULE_5__/* .HeartFillIcon */ .q, {
            className: "text-accent h-5 w-5"
        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons_heart_outline__WEBPACK_IMPORTED_MODULE_6__/* .HeartOutlineIcon */ .P, {
            className: "text-accent h-5 w-5"
        })
    }));
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7016:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": () => (/* binding */ HeartFillIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const HeartFillIcon = (props)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        viewBox: "0 -28 512 512",
        xmlns: "http://www.w3.org/2000/svg",
        width: "21",
        height: "21",
        fill: "currentColor",
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            d: "M471.383 44.578C444.879 15.832 408.512 0 368.973 0c-29.555 0-56.621 9.344-80.45 27.77C276.5 37.07 265.605 48.45 256 61.73c-9.602-13.277-20.5-24.66-32.527-33.96C199.648 9.344 172.582 0 143.027 0c-39.539 0-75.91 15.832-102.414 44.578C14.426 72.988 0 111.801 0 153.871c0 43.3 16.137 82.938 50.781 124.742 30.992 37.395 75.535 75.356 127.117 119.313 17.614 15.012 37.579 32.027 58.309 50.152A30.023 30.023 0 0 0 256 455.516c7.285 0 14.316-2.641 19.785-7.43 20.73-18.129 40.707-35.152 58.328-50.172 51.575-43.95 96.117-81.906 127.11-119.305C495.867 236.81 512 197.172 512 153.867c0-42.066-14.426-80.879-40.617-109.289zm0 0"
        })
    })
;


/***/ }),

/***/ 6816:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "P": () => (/* binding */ HeartOutlineIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const HeartOutlineIcon = (props)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        viewBox: "0 -28 512.001 512",
        xmlns: "http://www.w3.org/2000/svg",
        width: "21",
        height: "21",
        fill: "currentColor",
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            d: "M256 455.516c-7.29 0-14.316-2.641-19.793-7.438-20.684-18.086-40.625-35.082-58.219-50.074l-.09-.078c-51.582-43.957-96.125-81.918-127.117-119.313C16.137 236.81 0 197.172 0 153.871c0-42.07 14.426-80.883 40.617-109.293C67.121 15.832 103.488 0 143.031 0c29.555 0 56.621 9.344 80.446 27.77C235.5 37.07 246.398 48.453 256 61.73c9.605-13.277 20.5-24.66 32.527-33.96C312.352 9.344 339.418 0 368.973 0c39.539 0 75.91 15.832 102.414 44.578C497.578 72.988 512 111.801 512 153.871c0 43.3-16.133 82.938-50.777 124.738-30.993 37.399-75.532 75.356-127.106 119.309-17.625 15.016-37.597 32.039-58.328 50.168a30.046 30.046 0 0 1-19.789 7.43zM143.031 29.992c-31.066 0-59.605 12.399-80.367 34.914-21.07 22.856-32.676 54.45-32.676 88.965 0 36.418 13.535 68.988 43.883 105.606 29.332 35.394 72.961 72.574 123.477 115.625l.093.078c17.66 15.05 37.68 32.113 58.516 50.332 20.961-18.254 41.012-35.344 58.707-50.418 50.512-43.051 94.137-80.223 123.469-115.617 30.344-36.618 43.879-69.188 43.879-105.606 0-34.516-11.606-66.11-32.676-88.965-20.758-22.515-49.3-34.914-80.363-34.914-22.758 0-43.653 7.235-62.102 21.5-16.441 12.719-27.894 28.797-34.61 40.047-3.452 5.785-9.53 9.238-16.261 9.238s-12.809-3.453-16.262-9.238c-6.71-11.25-18.164-27.328-34.61-40.047-18.448-14.265-39.343-21.5-62.097-21.5zm0 0"
        })
    })
;


/***/ }),

/***/ 944:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Q": () => (/* binding */ ShoppingCartIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const ShoppingCartIcon = (props)=>{
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        viewBox: "0 0 18 18",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M14.2521 12.7481C13.0145 12.7481 12.0077 13.755 12.0077 14.9925C12.0077 16.2301 13.0145 17.2369 14.2521 17.2369C15.4896 17.2369 16.4965 16.2301 16.4965 14.9925C16.4965 13.755 15.4896 12.7481 14.2521 12.7481ZM14.2521 15.8903C13.757 15.8903 13.3543 15.4876 13.3543 14.9925C13.3543 14.4974 13.757 14.0948 14.2521 14.0948C14.7472 14.0948 15.1498 14.4974 15.1498 14.9925C15.1498 15.4876 14.7472 15.8903 14.2521 15.8903Z",
                fill: "currentColor"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M17.8569 4.07381C17.7294 3.91064 17.5339 3.81548 17.3268 3.81548H4.1562L3.5502 1.27999C3.47771 0.977014 3.2068 0.763123 2.89527 0.763123H0.673316C0.301431 0.763087 0 1.06452 0 1.4364C0 1.80829 0.301431 2.10972 0.673316 2.10972H2.36381L4.55209 11.266C4.62459 11.5692 4.8955 11.7828 5.20702 11.7828H15.6884C15.9979 11.7828 16.2677 11.5719 16.3419 11.2716L17.9804 4.65058C18.03 4.44952 17.9844 4.23697 17.8569 4.07381ZM15.1616 10.4362H5.73848L4.47802 5.16211H16.4665L15.1616 10.4362Z",
                fill: "currentColor"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M6.10511 12.7481C4.86753 12.7481 3.86072 13.755 3.86072 14.9925C3.86072 16.2301 4.86756 17.2369 6.10511 17.2369C7.34265 17.2369 8.34949 16.2301 8.34949 14.9925C8.34949 13.755 7.34265 12.7481 6.10511 12.7481ZM6.10511 15.8903C5.61 15.8903 5.20735 15.4876 5.20735 14.9925C5.20735 14.4974 5.61 14.0948 6.10511 14.0948C6.60021 14.0948 7.00286 14.4974 7.00286 14.9925C7.00286 15.4876 6.60021 15.8903 6.10511 15.8903Z",
                fill: "currentColor"
            })
        ]
    }));
};


/***/ }),

/***/ 2855:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ ProductInformation)
});

// NAMESPACE OBJECT: ./src/components/icons/type/index.tsx
var type_namespaceObject = {};
__webpack_require__.r(type_namespaceObject);
__webpack_require__.d(type_namespaceObject, {
  "FixedIcon": () => (FixedIcon),
  "LiquidIcon": () => (LiquidIcon),
  "NoTypeIcon": () => (NoTypeIcon),
  "ResponsiveIcon": () => (ResponsiveIcon)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "dayjs"
var external_dayjs_ = __webpack_require__(1635);
var external_dayjs_default = /*#__PURE__*/__webpack_require__.n(external_dayjs_);
;// CONCATENATED MODULE: ./src/components/icons/update-icon.tsx

const UpdateIcon = (props)=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        viewBox: "0 0 18 18",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M9 2.24999C10.1624 2.24828 11.3052 2.54942 12.3158 3.12374L11.4698 3.96974C11.3649 4.07463 11.2935 4.20826 11.2646 4.35372C11.2356 4.49918 11.2505 4.64996 11.3072 4.78698C11.364 4.92401 11.4601 5.04113 11.5834 5.12355C11.7067 5.20596 11.8517 5.24996 12 5.24999H15C15.1989 5.24999 15.3897 5.17098 15.5303 5.03032C15.671 4.88967 15.75 4.69891 15.75 4.49999V1.49999C15.75 1.35168 15.706 1.20671 15.6236 1.0834C15.5411 0.960093 15.424 0.863988 15.287 0.807236C15.15 0.750483 14.9992 0.735631 14.8537 0.764556C14.7083 0.793482 14.5746 0.864887 14.4698 0.969744L13.4123 2.02499C12.1642 1.23507 10.7271 0.794676 9.25075 0.749784C7.77444 0.704893 6.31315 1.05715 5.01946 1.76979C3.72576 2.48242 2.6471 3.52929 1.89609 4.8011C1.14509 6.0729 0.749281 7.523 0.750001 8.99999C0.750001 9.19891 0.829019 9.38967 0.969671 9.53032C1.11032 9.67098 1.30109 9.74999 1.5 9.74999C1.69891 9.74999 1.88968 9.67098 2.03033 9.53032C2.17098 9.38967 2.25 9.19891 2.25 8.99999C2.25199 7.21039 2.96378 5.49466 4.22922 4.22922C5.49466 2.96378 7.2104 2.25198 9 2.24999Z",
                fill: "currentColor"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M16.5 8.25C16.3011 8.25 16.1103 8.32902 15.9697 8.46967C15.829 8.61032 15.75 8.80109 15.75 9C15.748 10.7896 15.0362 12.5053 13.7708 13.7708C12.5053 15.0362 10.7896 15.748 9 15.75C7.83771 15.7521 6.69502 15.4506 5.685 14.8755L6.53025 14.0303C6.63511 13.9254 6.70651 13.7917 6.73544 13.6463C6.76436 13.5008 6.74951 13.35 6.69276 13.213C6.63601 13.076 6.5399 12.9589 6.41659 12.8764C6.29329 12.794 6.14831 12.75 6 12.75H3C2.80109 12.75 2.61032 12.829 2.46967 12.9697C2.32902 13.1103 2.25 13.3011 2.25 13.5V16.5C2.24996 16.6483 2.29391 16.7933 2.37627 16.9167C2.45864 17.04 2.57574 17.1362 2.71275 17.193C2.80375 17.2309 2.90141 17.2503 3 17.25C3.1989 17.25 3.38963 17.1709 3.53025 17.0303L4.5885 15.975C5.90698 16.8128 7.43789 17.2552 9 17.25C11.1872 17.2474 13.2842 16.3774 14.8308 14.8308C16.3774 13.2842 17.2474 11.1872 17.25 9C17.25 8.80109 17.171 8.61032 17.0303 8.46967C16.8897 8.32902 16.6989 8.25 16.5 8.25Z",
                fill: "currentColor"
            })
        ]
    }));
};

;// CONCATENATED MODULE: ./src/components/icons/calendar-icon.tsx

const CalenderIcon = (props)=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        viewBox: "0 0 18 18",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M2.90225 4.31247C2.50604 4.31247 2.18486 4.63427 2.18486 5.03122V15.0937C2.18486 15.4907 2.50604 15.8124 2.90225 15.8124H15.0979C15.4941 15.8124 15.8153 15.4907 15.8153 15.0937V5.03122C15.8153 4.63427 15.4941 4.31247 15.0979 4.31247H2.90225ZM1.46747 2.87497C1.07126 2.87497 0.750076 3.19676 0.750076 3.59372V16.5312C0.750076 16.9281 1.07126 17.25 1.46747 17.25H16.5327C16.9289 17.25 17.2501 16.9281 17.2501 16.5312V3.59372C17.2501 3.19676 16.9289 2.87497 16.5327 2.87497H1.46747Z",
                fill: "currentColor"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M1.4671 3.59375H17.2497V6.46875H1.4671V3.59375ZM3.61928 0.71875C3.61928 0.321795 3.94047 0 4.33667 0C4.73287 0 5.05406 0.321795 5.05406 0.71875V2.875C5.05406 3.27196 4.73287 3.59375 4.33667 3.59375C3.94047 3.59375 3.61928 3.27196 3.61928 2.875V0.71875ZM12.9454 0.71875C12.9454 0.321795 13.2665 0 13.6628 0C14.059 0 14.3801 0.321795 14.3801 0.71875V2.875C14.3801 3.27196 14.059 3.59375 13.6628 3.59375C13.2665 3.59375 12.9454 3.27196 12.9454 2.875V0.71875ZM4.33667 7.90628H6.48884V10.0625H4.33667V7.90628ZM4.33667 12.2188H6.48884V14.375H4.33667V12.2188ZM7.92363 7.90628H10.0758V10.0625H7.92363V7.90628ZM7.92363 12.2188H10.0758V14.375H7.92363V12.2188ZM11.5106 7.90628H13.6628V10.0625H11.5106V7.90628Z",
                fill: "currentColor"
            })
        ]
    }));
};

;// CONCATENATED MODULE: ./src/components/icons/label-icon.tsx

const LabelIcon = (props)=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        viewBox: "0 0 20 20",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M17.125 1H12.3677C11.4662 1 10.6188 1.351 9.98123 1.98849L1.63974 10.33C1.22725 10.7425 1 11.2908 1 11.8765C1 12.4593 1.22725 13.0075 1.63974 13.42L6.58 18.3603C6.99249 18.7728 7.54075 19 8.12649 19C8.70924 19 9.2575 18.7728 9.66999 18.3603L18.0115 10.0188C18.649 9.38125 19 8.53374 19 7.63226V2.87499C19 1.8415 18.1585 1 17.125 1ZM18.25 7.63226C18.25 8.33352 17.977 8.99277 17.482 9.48777L9.13976 17.83C8.6005 18.3693 7.65476 18.373 7.111 17.83L2.17 12.889C1.89926 12.619 1.74999 12.259 1.74999 11.8735C1.74999 11.491 1.89923 11.131 2.17 10.8603L10.5115 2.51875C11.008 2.02301 11.6665 1.74999 12.3677 1.74999H17.125C17.7452 1.74999 18.25 2.25473 18.25 2.87499V7.63226H18.25Z",
                fill: "currentColor",
                stroke: "currentColor",
                strokeWidth: "0.5"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M14.8749 3.25C13.8414 3.25 12.9999 4.0915 12.9999 5.12499C12.9999 6.15848 13.8414 6.99998 14.8749 6.99998C15.9084 6.99998 16.7499 6.15851 16.7499 5.12499C16.7499 4.0915 15.9084 3.25 14.8749 3.25ZM14.8749 6.24999C14.2546 6.24999 13.7499 5.74525 13.7499 5.12499C13.7499 4.50473 14.2546 3.99999 14.8749 3.99999C15.4952 3.99999 15.9999 4.50473 15.9999 5.12499C15.9999 5.74525 15.4951 6.24999 14.8749 6.24999Z",
                fill: "currentColor",
                stroke: "currentColor",
                strokeWidth: "0.5"
            })
        ]
    }));
};

// EXTERNAL MODULE: ./src/components/ui/links/anchor-link.tsx
var anchor_link = __webpack_require__(3813);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: ./src/config/routes.ts
var routes = __webpack_require__(551);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(1377);
// EXTERNAL MODULE: ./src/lib/get-icon.tsx
var get_icon = __webpack_require__(8602);
;// CONCATENATED MODULE: ./src/components/icons/type/no-type-icon.tsx

const NoTypeIcon = (props)=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("svg", {
        viewBox: "0 0 100 100",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M49.9999 0C22.3857 0 0 22.3857 0 49.9999C0 77.6141 22.3857 99.9998 49.9999 99.9998C77.6141 99.9998 99.9998 77.6141 99.9998 49.9999C99.9705 22.3981 77.6019 0.0295061 49.9999 0ZM22.2288 17.314C29.9839 10.7325 39.8287 7.12688 49.9999 7.14299C60.1295 7.13985 69.9295 10.7417 77.6463 17.3038L17.2893 77.6607C1.98905 59.6323 4.20054 32.6143 22.2288 17.314ZM77.7712 82.686C70.0161 89.2675 60.1713 92.8731 50.0001 92.857C39.8705 92.8601 30.0705 89.2583 22.3537 82.6962L82.7109 22.3391C98.011 40.3675 95.7995 67.3857 77.7712 82.686Z",
            fill: "currentColor"
        })
    }));
};

;// CONCATENATED MODULE: ./src/components/icons/type/fixed-icon.tsx

const FixedIcon = (props)=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("svg", {
        viewBox: "0 0 100 100",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M54.2015 4.12793C58.2465 0.0829839 64.9636 -0.166405 69.3547 4.12793L95.8727 30.6459C100.057 34.8303 100.057 41.6146 95.8727 45.7991C91.8277 49.844 85.1109 50.141 80.7195 45.7991L78.8256 43.904L63.0131 59.7165C67.7834 72.6269 64.5896 88.5594 54.2015 98.835C53.0802 99.9443 51.3543 99.7998 50.4133 98.835L27.6825 76.1036L10.6363 93.1526C9.59016 94.1987 7.89408 94.1987 6.84798 93.1526C5.88234 92.187 5.71266 90.509 6.84798 89.3643L23.8948 72.3159L1.16555 49.5873C0.199916 48.6217 0.014091 46.9505 1.16555 45.7991C11.3009 35.6637 26.6956 32.0361 40.2815 36.9848L56.094 21.1723L54.2015 19.2811C49.8838 14.9411 50.1566 8.17287 54.2015 4.12793V4.12793ZM65.5664 7.91621C63.4742 5.824 60.082 5.824 57.9898 7.91621C56.0077 9.89831 55.8195 13.2582 57.9898 15.4928L61.7781 19.2811C62.7437 20.2467 62.88 21.9645 61.7781 23.0693L42.8445 42.0041C42.08 42.7686 40.9309 42.9986 39.9311 42.5872C29.3937 38.2517 16.6601 39.5018 6.92602 47.772L52.2259 93.0719C60.0995 83.9622 61.7781 70.251 57.4141 60.0714C56.908 58.8907 57.4141 57.7371 57.9898 57.1583L76.9312 38.2226C77.8968 37.2569 79.5573 37.0953 80.7195 38.2226L84.5078 42.0108C86.6 44.103 89.9922 44.103 92.0844 42.0108C94.0665 40.0287 94.2789 36.6831 92.0844 34.4342L65.5664 7.91621Z",
            fill: "currentColor",
            stroke: "currentColor",
            strokeWidth: "1.5"
        })
    }));
};

;// CONCATENATED MODULE: ./src/components/icons/type/liquid-icon.tsx

const LiquidIcon = (props)=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        viewBox: "0 0 100 100",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M83.4915 44.8005L83.4929 44.8025C83.552 44.8836 83.606 44.9697 83.6604 45.0615C89.945 55.901 89.8459 69.0628 83.3877 80.2729C76.4658 92.2874 63.671 99.75 49.9997 99.75C36.3283 99.75 23.5336 92.2885 16.6126 80.274L16.4282 80.3802L16.6126 80.274C10.1531 69.0627 10.0553 55.9015 16.3406 45.0607L16.341 45.06C16.3915 44.9722 16.448 44.886 16.5086 44.7995C16.5087 44.7992 16.5089 44.799 16.5091 44.7987L47.3315 1.62416L47.3316 1.62393C47.9458 0.761605 48.9392 0.25 49.9997 0.25C51.059 0.25 52.0536 0.761639 52.6679 1.62396L52.6681 1.62416L83.4915 44.8005ZM21.9444 48.4713L21.9372 48.4815L21.931 48.4924C16.8411 57.3827 16.976 67.767 22.2948 77.0002C28.0478 86.9866 38.6625 93.1912 49.9997 93.1912C61.338 93.1912 71.9527 86.9854 77.7046 76.999C83.0231 67.768 83.1571 57.3839 78.0684 48.4934L78.0622 48.4825L78.0549 48.4723L50.2031 9.45826L49.9997 9.17324L49.7962 9.45826L21.9444 48.4713Z",
                fill: "currentColor",
                stroke: "white",
                strokeWidth: "0.5"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M65.1907 61.6482C65.1907 59.8369 66.6588 58.3687 68.4702 58.3687C70.2815 58.3687 71.7496 59.8369 71.7495 61.6484C71.7495 73.7691 61.886 83.6326 49.7641 83.6326C47.9528 83.6326 46.4846 82.1645 46.4846 80.3531C46.4846 78.5418 47.9528 77.0736 49.7641 77.0736C58.2705 77.0736 65.1907 70.1533 65.1907 61.6482Z",
                fill: "currentColor",
                stroke: "white",
                strokeWidth: "0.5"
            })
        ]
    }));
};

;// CONCATENATED MODULE: ./src/components/icons/type/responsive-icon.tsx

const ResponsiveIcon = (props)=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("svg", {
        viewBox: "0 0 100 100",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M82.1427 0H17.8571C7.99972 0.0117187 0.0117187 7.99972 0 17.8571V82.1427C0.0117187 92.0001 7.99972 99.9881 17.8571 99.9998H82.1427C92.0001 99.9881 99.9881 92.0001 99.9998 82.1427V17.8571C99.9881 7.99972 92.0001 0.0117187 82.1427 0ZM46.4286 92.857H17.8571C11.9397 92.857 7.14278 88.0601 7.14278 82.1427V17.8571C7.14278 11.9397 11.9397 7.14278 17.8571 7.14278H46.4284V92.857H46.4286ZM92.857 82.1427C92.857 88.0601 88.0601 92.857 82.1427 92.857H53.5714V53.5714H92.857V82.1427ZM92.857 46.4286H53.5714V7.14278H82.1427C88.0601 7.14278 92.857 11.9397 92.857 17.8571V46.4286Z",
            fill: "currentColor"
        })
    }));
};

;// CONCATENATED MODULE: ./src/components/icons/type/index.tsx





;// CONCATENATED MODULE: ./src/components/product/product-information.tsx











function ProductInformation({ className , updated_at , created_at , tags , layoutType , icon  }) {
    const { t  } = (0,external_next_i18next_.useTranslation)('common');
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: external_classnames_default()('space-y-4 text-13px', className),
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex items-start text-dark dark:text-light",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("strong", {
                        className: "flex w-36 flex-shrink-0 items-center font-normal text-dark-600 dark:text-light-600",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "w-8 flex-shrink-0 text-dark-900 dark:text-light-900",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(UpdateIcon, {
                                    className: "h-[18px] w-[18px]"
                                })
                            }),
                            t('text-last-update'),
                            ":"
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "font-medium",
                        children: external_dayjs_default()(updated_at).format('MMM D, YYYY')
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex items-start text-dark dark:text-light",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("strong", {
                        className: "flex w-36 flex-shrink-0 items-center font-normal text-dark-600 dark:text-light-600",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "w-8 flex-shrink-0 text-dark-900 dark:text-light-900",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(CalenderIcon, {
                                    className: "h-[18px] w-[18px]"
                                })
                            }),
                            t('text-published'),
                            ":"
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "font-medium",
                        children: external_dayjs_default()(created_at).format('MMM D, YYYY')
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex items-start text-dark dark:text-light",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("strong", {
                        className: "flex w-36 flex-shrink-0 items-center font-normal text-dark-600 dark:text-light-600",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "w-8 flex-shrink-0 text-dark-900 dark:text-light-900",
                                children: (0,get_icon/* getIcon */.q)({
                                    iconList: type_namespaceObject,
                                    iconName: icon,
                                    className: 'h-[18px] w-[18px]'
                                })
                            }),
                            t('text-layout'),
                            ":"
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "font-medium",
                        children: layoutType
                    })
                ]
            }),
            !!(tags === null || tags === void 0 ? void 0 : tags.length) && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex items-start text-dark dark:text-light",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("strong", {
                        className: "flex w-36 flex-shrink-0 items-center pt-0.5 font-normal text-dark-600 dark:text-light-600",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "w-8 flex-shrink-0 text-dark-900 dark:text-light-900",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(LabelIcon, {
                                    className: "h-5 w-5"
                                })
                            }),
                            t('text-tags'),
                            ":"
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "flex flex-wrap gap-2",
                        children: tags.map((tag)=>/*#__PURE__*/ jsx_runtime_.jsx(anchor_link/* default */.Z, {
                                href: routes/* default.tagUrl */.Z.tagUrl(tag.slug),
                                className: "inline-flex items-center justify-center rounded border border-light-600 px-2 py-0.5 font-medium text-light-base transition-all hover:bg-light-200 hover:text-dark-300 dark:border-dark-500 dark:text-light-600 dark:hover:bg-dark-400 hover:dark:text-light",
                                children: tag.name
                            }, tag.id)
                        )
                    })
                ]
            })
        ]
    }));
};


/***/ }),

/***/ 3638:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ ProductSocialShare)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-use"
var external_react_use_ = __webpack_require__(9755);
// EXTERNAL MODULE: ./src/config/routes.ts
var routes = __webpack_require__(551);
// EXTERNAL MODULE: external "react-share"
var external_react_share_ = __webpack_require__(6158);
;// CONCATENATED MODULE: ./src/components/icons/link-icon.tsx

const LinkIcon = (props)=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        viewBox: "0 0 15 15",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M6.21858 11.4329L4.45106 13.2004C3.71829 13.9332 2.53161 13.9332 1.79945 13.2006C1.06714 12.4683 1.06714 11.2815 1.7993 10.5493L5.33496 7.01364C6.06712 6.28145 7.25391 6.28145 7.98607 7.01364C8.23015 7.25771 8.62589 7.25771 8.86997 7.01364C9.11404 6.76957 9.11404 6.37382 8.86997 6.12975C7.64963 4.90941 5.6714 4.90941 4.45106 6.12975L0.915437 9.66537C-0.304902 10.8857 -0.304902 12.8639 0.915437 14.0843C2.13563 15.3053 4.114 15.3053 5.33498 14.0843L7.1025 12.3168C7.34658 12.0727 7.34658 11.6769 7.1025 11.4329C6.85843 11.1888 6.46266 11.1888 6.21858 11.4329Z",
                fill: "currentColor"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M14.0846 0.915238C12.8642 -0.3051 10.8854 -0.3051 9.66502 0.915238L7.54439 3.03587C7.30031 3.27995 7.30031 3.67569 7.54439 3.91976C7.78846 4.16384 8.18421 4.16384 8.42828 3.91976L10.5489 1.79913C11.2811 1.06694 12.4685 1.06694 13.2007 1.79913C13.9328 2.53129 13.9328 3.71808 13.2007 4.45025L9.31191 8.33904C8.57972 9.07123 7.39295 9.07123 6.66079 8.33904C6.41671 8.09497 6.02097 8.09497 5.7769 8.33904C5.53282 8.58312 5.53282 8.97886 5.7769 9.22294C6.99724 10.4433 8.97546 10.4433 10.1958 9.22294L14.0846 5.33417C15.3049 4.11383 15.3049 2.13558 14.0846 0.915238Z",
                fill: "currentColor"
            })
        ]
    }));
};

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(1377);
;// CONCATENATED MODULE: ./src/components/product/product-social-share.tsx








function ProductSocialShare({ productSlug , className  }) {
    const { t  } = (0,external_next_i18next_.useTranslation)('common');
    const productUrl = `${"http://localhost:3000"}${routes/* default.productUrl */.Z.productUrl(productSlug)}`;
    let { 0: copyButtonStatus , 1: setCopyButtonStatus  } = (0,external_react_.useState)(t('text-copy-link'));
    let [_, copyToClipboard] = (0,external_react_use_.useCopyToClipboard)();
    const handleCopyToClipboard = ()=>{
        copyToClipboard(productUrl);
        setCopyButtonStatus(t('text-copied'));
        setTimeout(()=>{
            setCopyButtonStatus(copyButtonStatus);
        }, 1000);
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: external_classnames_default()('flex text-13px lg:items-center', className),
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex-shrink-0 pt-2 ltr:pr-4 rtl:pl-4 rtl:text-right dark:text-light-600 sm:w-36 lg:pt-0",
                children: [
                    t('text-share-this-item'),
                    ":"
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex flex-wrap gap-2 md:gap-3",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "product-share flex flex-shrink-0 flex-wrap items-center gap-1.5 md:gap-2.5 xl:gap-3",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(external_react_share_.FacebookShareButton, {
                                url: productUrl,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_share_.FacebookIcon, {
                                    round: true,
                                    className: "text-md h-9 w-9 transition-all xl:h-10 xl:w-10"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(external_react_share_.TwitterShareButton, {
                                url: productUrl,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_share_.TwitterIcon, {
                                    round: true,
                                    className: "text-md h-9 w-9 transition-all xl:h-10 xl:w-10"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(external_react_share_.LinkedinShareButton, {
                                url: productUrl,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_share_.LinkedinIcon, {
                                    round: true,
                                    className: "text-md h-9 w-9 transition-all xl:h-10 xl:w-10"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                        className: "flex h-9 flex-shrink-0 items-center rounded-full border border-light-600 px-3 text-dark-600 hover:bg-light-200 hover:text-dark dark:border-dark-500 dark:text-light-600 hover:dark:bg-dark-500 dark:hover:text-light md:px-4 xl:h-10",
                        onClick: handleCopyToClipboard,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(LinkIcon, {
                                className: "h-3.5 w-3.5 text-dark-700 ltr:mr-1.5 rtl:ml-1.5 dark:text-light lg:h-4 lg:w-4"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                children: copyButtonStatus
                            })
                        ]
                    })
                ]
            })
        ]
    }));
};


/***/ }),

/***/ 8602:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": () => (/* binding */ getIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const getIcon = ({ iconList , iconName , ...rest })=>{
    const TagName = iconList[iconName];
    return !!TagName ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TagName, {
        ...rest
    }) : null;
};


/***/ })

};
;