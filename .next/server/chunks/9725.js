"use strict";
exports.id = 9725;
exports.ids = [9725];
exports.modules = {

/***/ 3713:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "p": () => (/* binding */ PlusIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function PlusIcon(props) {
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        viewBox: "0 0 20 20",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            d: "M17.3471 8.77565H11.2246V2.6532C11.2246 1.97728 10.6761 1.42871 10.0001 1.42871C9.32422 1.42871 8.77565 1.97728 8.77565 2.6532V8.77565H2.6532C1.97728 8.77565 1.42871 9.32422 1.42871 10.0001C1.42871 10.6761 1.97728 11.2246 2.6532 11.2246H8.77565V17.3471C8.77565 18.023 9.32422 18.5716 10.0001 18.5716C10.6761 18.5716 11.2246 18.023 11.2246 17.3471V11.2246H17.3471C18.023 11.2246 18.5716 10.6761 18.5716 10.0001C18.5716 9.32422 18.023 8.77565 17.3471 8.77565Z",
            fill: "currentColor",
            stroke: "currentColor",
            strokeWidth: "0.2"
        })
    }));
}


/***/ }),

/***/ 9725:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Uploader)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _data_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7607);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_dropzone__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6358);
/* harmony import */ var react_dropzone__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dropzone__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_ui_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3879);
/* harmony import */ var _components_icons_close_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3031);
/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4685);
/* harmony import */ var _components_icons_spinner_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(321);
/* harmony import */ var _components_icons_plus_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3713);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_data_client__WEBPACK_IMPORTED_MODULE_2__]);
_data_client__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];











function getDefaultValues(attachment) {
    if (!attachment) return null;
    return Array.isArray(attachment) ? attachment : [
        attachment
    ];
}
function Uploader({ onChange , value , name , onBlur , multiple =true  }) {
    let { 0: attachments , 1: setAttachments  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(getDefaultValues(value));
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        setAttachments(getDefaultValues(value));
    }, [
        value
    ]);
    const { mutate , isLoading  } = (0,react_query__WEBPACK_IMPORTED_MODULE_5__.useMutation)(_data_client__WEBPACK_IMPORTED_MODULE_2__/* ["default"].settings.upload */ .Z.settings.upload, {
        onSuccess: (response)=>{
            const data = multiple ? response : response[0];
            onChange(data);
            setAttachments(response);
        },
        onError: (error)=>{
            console.log(error);
        }
    });
    const onDrop = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)((acceptedFiles)=>{
        mutate(acceptedFiles);
    }, [
        mutate
    ]);
    const { getRootProps , getInputProps  } = (0,react_dropzone__WEBPACK_IMPORTED_MODULE_4__.useDropzone)({
        accept: 'image/*',
        multiple,
        onDrop
    });
    function remove(id) {
        if (!attachments) return;
        const newAttachments = attachments.filter((attachment)=>attachment.id !== id
        );
        if (!newAttachments.length) {
            setAttachments(null);
            onChange(null);
            return;
        }
        setAttachments(newAttachments);
        const data = multiple ? newAttachments : newAttachments[0];
        onChange(data);
    }
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex flex-wrap gap-2.5",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                ...getRootProps({
                    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('relative border-dashed border-2 border-light-500 dark:border-dark-600 text-center flex flex-col justify-center hover:text-black dark:hover:text-light items-center cursor-pointer focus:border-accent-400 focus:outline-none', {
                        'h-20 w-20 rounded-md shrink-0': multiple === true,
                        'h-36 w-full rounded': multiple === false
                    })
                }),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        ...getInputProps({
                            name,
                            onBlur
                        })
                    }),
                    multiple !== true ? Array.isArray(attachments) ? attachments.map(({ id , original  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "relative h-20 w-20 overflow-hidden rounded-full",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_image__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                        alt: "Avatar",
                                        src: original,
                                        layout: "fill",
                                        objectFit: "scale-down"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_button__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                    onClick: (e)=>{
                                        e.stopPropagation();
                                        remove(id);
                                    },
                                    variant: "icon",
                                    className: "absolute top-0 right-0 p-3",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons_close_icon__WEBPACK_IMPORTED_MODULE_7__/* .CloseIcon */ .T, {
                                        className: "h-4 w-4 3xl:h-5 3xl:w-5"
                                    })
                                })
                            ]
                        }, id)
                    ) : 'Upload Your Avatar Image (80 X 80)' : !isLoading && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons_plus_icon__WEBPACK_IMPORTED_MODULE_10__/* .PlusIcon */ .p, {
                        className: "h-5 w-5"
                    }),
                    isLoading && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                        className: "mt-2.5 flex items-center gap-1 font-medium text-light-500",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons_spinner_icon__WEBPACK_IMPORTED_MODULE_9__/* .SpinnerIcon */ .L, {
                                className: "h-auto w-5 animate-spin text-brand"
                            }),
                            ' ',
                            multiple !== true && 'Loading...'
                        ]
                    })
                ]
            }),
            Array.isArray(attachments) && multiple === true && attachments.map(({ id , original  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "group relative h-20 w-20 overflow-hidden rounded-md",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "relative h-full w-full overflow-hidden rounded-md",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_image__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                alt: "Attachment",
                                src: original,
                                layout: "fill",
                                objectFit: "cover"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "absolute top-0 right-0 flex h-full w-full items-center justify-center bg-dark/60 opacity-0 transition-all group-hover:opacity-100",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_button__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                onClick: (e)=>{
                                    e.stopPropagation();
                                    remove(id);
                                },
                                variant: "icon",
                                className: "h-9 w-9 rounded-full bg-dark/60",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons_close_icon__WEBPACK_IMPORTED_MODULE_7__/* .CloseIcon */ .T, {
                                    className: "h-4 w-4"
                                })
                            })
                        })
                    ]
                }, id)
            )
        ]
    }));
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;