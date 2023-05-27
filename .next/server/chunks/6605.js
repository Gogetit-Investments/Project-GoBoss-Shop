"use strict";
exports.id = 6605;
exports.ids = [6605];
exports.modules = {

/***/ 6605:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CardDeleteView)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ui_cards_confirmation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5189);
/* harmony import */ var _components_modal_views_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5335);
/* harmony import */ var _data_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4113);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_data_card__WEBPACK_IMPORTED_MODULE_3__]);
_data_card__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




function CardDeleteView() {
    const { data: { card_id  } ,  } = (0,_components_modal_views_context__WEBPACK_IMPORTED_MODULE_2__/* .useModalState */ .X9)();
    const { closeModal  } = (0,_components_modal_views_context__WEBPACK_IMPORTED_MODULE_2__/* .useModalAction */ .SO)();
    const { deleteCard , isLoading  } = (0,_data_card__WEBPACK_IMPORTED_MODULE_3__/* .useDeleteCard */ .Li)();
    function handleDelete() {
        if (!card_id) {
            return;
        }
        deleteCard({
            id: card_id
        });
    }
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_cards_confirmation__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        onCancel: closeModal,
        onDelete: handleDelete,
        deleteBtnLoading: isLoading
    }));
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5189:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ confirmation)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/icons/trash-icon.tsx

const TrashIcon = (props)=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("svg", {
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor",
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: 1.4,
            d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
        })
    }));
};

// EXTERNAL MODULE: ./src/components/ui/button.tsx
var ui_button = __webpack_require__(4685);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(1377);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
;// CONCATENATED MODULE: ./src/components/ui/cards/confirmation.tsx





const Confirmation = ({ onCancel , onDelete , icon , title ='text-delete' , description ='text-card-delete-confirm' , cancelBtnText ='text-cancel' , deleteBtnText ='text-delete' , cancelBtnClassName , deleteBtnClassName , cancelBtnLoading , deleteBtnLoading ,  })=>{
    const { t  } = (0,external_next_i18next_.useTranslation)('common');
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "flex h-full min-h-screen w-screen flex-col justify-center bg-light p-7 text-left dark:bg-dark-250 xs:h-auto xs:min-h-0 sm:w-96 md:rounded-xl",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "h-full w-full text-center",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex h-full flex-col justify-between",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "m-auto mt-4 text-brand",
                        children: icon ? icon : /*#__PURE__*/ jsx_runtime_.jsx(TrashIcon, {
                            className: "h-14 w-14"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "mt-4 mb-1 text-xl font-bold text-black dark:text-light",
                        children: t(title)
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "mb-1 px-6 py-2 leading-relaxed",
                        children: t(description)
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "mt-7 flex w-full items-center justify-between space-x-4 rtl:space-x-reverse",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "w-1/2",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(ui_button/* default */.Z, {
                                    onClick: onCancel,
                                    isLoading: cancelBtnLoading,
                                    disabled: cancelBtnLoading,
                                    className: external_classnames_default()('w-full', cancelBtnClassName),
                                    children: t(cancelBtnText)
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "w-1/2",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(ui_button/* default */.Z, {
                                    onClick: onDelete,
                                    isLoading: deleteBtnLoading,
                                    disabled: deleteBtnLoading,
                                    className: external_classnames_default()('w-full rounded bg-red-600 py-2 px-4 text-center text-base font-semibold text-light shadow-md transition duration-200 ease-in hover:bg-red-700 focus:bg-red-700 focus:outline-none', deleteBtnClassName),
                                    children: t(deleteBtnText)
                                })
                            })
                        ]
                    })
                ]
            })
        })
    }));
};
/* harmony default export */ const confirmation = (Confirmation);


/***/ })

};
;