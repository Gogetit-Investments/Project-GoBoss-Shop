"use strict";
exports.id = 8427;
exports.ids = [8427];
exports.modules = {

/***/ 8427:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ FollowButton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4685);
/* harmony import */ var _components_icons_user_following_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7168);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _data_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6639);
/* harmony import */ var _data_client_endpoints__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1880);
/* harmony import */ var _data_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7607);
/* harmony import */ var _icons_close_circle_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9782);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_8__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_data_user__WEBPACK_IMPORTED_MODULE_4__, _data_client__WEBPACK_IMPORTED_MODULE_6__]);
([_data_user__WEBPACK_IMPORTED_MODULE_4__, _data_client__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









function FollowButton({ shop_id  }) {
    const queryClient = (0,react_query__WEBPACK_IMPORTED_MODULE_3__.useQueryClient)();
    const { isAuthorized , isLoading , me  } = (0,_data_user__WEBPACK_IMPORTED_MODULE_4__/* .useMe */ .P)();
    const { data: isShopFollowed , isLoading: isFollowLoading  } = (0,react_query__WEBPACK_IMPORTED_MODULE_3__.useQuery)([
        _data_client_endpoints__WEBPACK_IMPORTED_MODULE_5__/* .API_ENDPOINTS.FOLLOW_SHOP */ .P.FOLLOW_SHOP,
        shop_id
    ], ()=>_data_client__WEBPACK_IMPORTED_MODULE_6__/* ["default"].follow.isShopFollowed */ .Z.follow.isShopFollowed({
            shop_id
        })
    , {
        enabled: isAuthorized
    });
    const { mutate: toggleFollow  } = (0,react_query__WEBPACK_IMPORTED_MODULE_3__.useMutation)(_data_client__WEBPACK_IMPORTED_MODULE_6__/* ["default"].follow.toggle */ .Z.follow.toggle, {
        onSettled: ()=>{
            queryClient.invalidateQueries([
                _data_client_endpoints__WEBPACK_IMPORTED_MODULE_5__/* .API_ENDPOINTS.FOLLOW_SHOP */ .P.FOLLOW_SHOP,
                shop_id
            ]);
            queryClient.invalidateQueries([
                _data_client_endpoints__WEBPACK_IMPORTED_MODULE_5__/* .API_ENDPOINTS.FOLLOWED_SHOPS */ .P.FOLLOWED_SHOPS
            ]);
        }
    });
    function handleToggleFollow() {
        toggleFollow({
            shop_id
        });
    }
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_8__.useTranslation)('common');
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: isAuthorized && me && !isLoading && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_button__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
            onClick: handleToggleFollow,
            variant: isShopFollowed ? 'solidDanger' : 'outline',
            className: `followButton h-9 min-h-[36px] rounded-md p-2 px-3 text-xs sm:h-11 sm:min-h-[44px] md:px-4 ${!isShopFollowed && 'text-brand dark:text-brand'}`,
            isLoading: isFollowLoading,
            children: !isFollowLoading && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: isShopFollowed ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_close_circle_icon__WEBPACK_IMPORTED_MODULE_7__/* .CloseCircleIcon */ .u, {
                            className: "h-[15px] w-[15px] text-current"
                        }),
                        t('text-unfollow')
                    ]
                }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons_user_following_icon__WEBPACK_IMPORTED_MODULE_2__/* .UserFollowingIcon */ .U, {
                            className: "h-4 w-4 text-current"
                        }),
                        ' ',
                        t('text-follow')
                    ]
                })
            })
        })
    }));
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9782:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "u": () => (/* binding */ CloseCircleIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function CloseCircleIcon(props) {
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        viewBox: "0 0 15 15",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M12.8032 2.1968C9.87413 -0.732275 5.12522 -0.732276 2.19677 2.19686C-0.732275 5.1259 -0.732276 9.87478 2.19688 12.8032C5.12522 15.7323 9.87413 15.7323 12.8032 12.8032C15.7323 9.87478 15.7323 5.1259 12.8032 2.1968ZM11.9194 11.9193C9.47842 14.3602 5.52105 14.3602 3.08077 11.9194C0.639814 9.47897 0.639814 5.52161 3.08071 3.08071C5.52105 0.639785 9.47842 0.639785 11.9193 3.08071C14.3602 5.52164 14.3602 9.47898 11.9194 11.9193Z",
                fill: "currentColor"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M10.5935 4.40647C10.3495 4.1624 9.95371 4.1624 9.70964 4.40647L7.49992 6.61619L5.29021 4.40647C5.04614 4.1624 4.65039 4.1624 4.40632 4.40647C4.16225 4.65055 4.16225 5.04629 4.40632 5.29036L6.61604 7.50008L4.40714 9.70897C4.16307 9.95304 4.16307 10.3488 4.40714 10.5929C4.65121 10.8369 5.04696 10.8369 5.29103 10.5929L7.49992 8.38396L9.70946 10.5935C9.95354 10.8376 10.3493 10.8376 10.5934 10.5935C10.8374 10.3494 10.8374 9.95369 10.5934 9.70962L8.38381 7.50008L10.5935 5.29036C10.8376 5.04629 10.8376 4.65057 10.5935 4.40647Z",
                fill: "currentColor"
            })
        ]
    }));
}


/***/ })

};
;