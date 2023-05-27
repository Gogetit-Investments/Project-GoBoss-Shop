"use strict";
exports.id = 2627;
exports.ids = [2627];
exports.modules = {

/***/ 2627:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ReviewImageModal)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var _components_modal_views_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5335);
/* harmony import */ var _components_icons_chevron_left__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5019);
/* harmony import */ var _components_icons_chevron_right__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5133);
/* harmony import */ var _assets_images_placeholders_product_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8818);
/* harmony import */ var _components_ui_slider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7219);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_ui_slider__WEBPACK_IMPORTED_MODULE_6__]);
_components_ui_slider__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








const swiperParams = {
    slidesPerView: 1,
    spaceBetween: 0
};
function ReviewImageModal() {
    var ref, ref1;
    const { data  } = (0,_components_modal_views_context__WEBPACK_IMPORTED_MODULE_2__/* .useModalState */ .X9)();
    let { 0: thumbsSwiper , 1: setThumbsSwiper  } = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(null);
    const prevRef = (0,react__WEBPACK_IMPORTED_MODULE_7__.useRef)(null);
    const nextRef = (0,react__WEBPACK_IMPORTED_MODULE_7__.useRef)(null);
    var ref2, ref3;
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "m-auto block w-full rounded p-6 xs:w-[450px] xs:p-5 md:w-[590px] lg:w-[720px] lg:p-7",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "relative mb-3 w-full overflow-hidden xs:mt-8 md:mt-10 xl:mb-5",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_slider__WEBPACK_IMPORTED_MODULE_6__/* .Swiper */ .tq, {
                        id: "reviewGallery",
                        speed: 400,
                        allowTouchMove: false,
                        thumbs: {
                            swiper: thumbsSwiper
                        },
                        modules: [
                            _components_ui_slider__WEBPACK_IMPORTED_MODULE_6__/* .Navigation */ .W_,
                            _components_ui_slider__WEBPACK_IMPORTED_MODULE_6__/* .Thumbs */ .o3
                        ],
                        navigation: {
                            prevEl: prevRef.current,
                            nextEl: nextRef.current
                        },
                        ...swiperParams,
                        children: data === null || data === void 0 ? void 0 : (ref = data.images) === null || ref === void 0 ? void 0 : ref.map((item)=>{
                            /*#__PURE__*/ return react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_slider__WEBPACK_IMPORTED_MODULE_6__/* .SwiperSlide */ .o5, {
                                className: "flex aspect-[3/2] items-center justify-center bg-light-200 dark:bg-dark-200",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_1__["default"], {
                                    layout: "fill",
                                    objectFit: "contain",
                                    src: (ref2 = item === null || item === void 0 ? void 0 : item.original) !== null && ref2 !== void 0 ? ref2 : _assets_images_placeholders_product_svg__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z,
                                    alt: `Product gallery ${item.id}`
                                })
                            }, `review-gallery-${item.id}`);
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "absolute top-2/4 z-10 flex w-full items-center justify-between px-2.5 xl:px-4",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                ref: prevRef,
                                className: "flex h-8 w-8 -translate-y-1/2 transform cursor-pointer items-center justify-center rounded-full border border-light-400 bg-light text-dark/90 shadow-xl transition duration-300 hover:bg-light-200 hover:text-brand-dark focus:outline-none xl:h-9 xl:w-9",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons_chevron_left__WEBPACK_IMPORTED_MODULE_3__/* .ChevronLeft */ .s, {
                                    className: "h-4 w-4 xl:h-[18px] xl:w-[18px]"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                ref: nextRef,
                                className: "flex h-8 w-8 -translate-y-1/2 transform cursor-pointer items-center justify-center rounded-full border border-light-400 bg-light text-dark/90 shadow-xl transition duration-300 hover:bg-light-200 hover:text-brand-dark focus:outline-none xl:h-9 xl:w-9",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons_chevron_right__WEBPACK_IMPORTED_MODULE_4__/* .ChevronRight */ ._, {
                                    className: "h-4 w-4 xl:h-[18px] xl:w-[18px]"
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "flex-shrink-0",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_slider__WEBPACK_IMPORTED_MODULE_6__/* .Swiper */ .tq, {
                    id: "reviewGalleryThumbs",
                    freeMode: true,
                    observer: true,
                    slidesPerView: 4,
                    onSwiper: setThumbsSwiper,
                    observeParents: true,
                    watchSlidesProgress: true,
                    children: data === null || data === void 0 ? void 0 : (ref1 = data.images) === null || ref1 === void 0 ? void 0 : ref1.map((item)=>{
                        /*#__PURE__*/ return react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_slider__WEBPACK_IMPORTED_MODULE_6__/* .SwiperSlide */ .o5, {
                            className: "flex aspect-[3/2] cursor-pointer items-center justify-center border border-light-500 transition hover:opacity-75 dark:border-dark-500",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_1__["default"], {
                                layout: "fill",
                                objectFit: "cover",
                                src: (ref3 = item === null || item === void 0 ? void 0 : item.thumbnail) !== null && ref3 !== void 0 ? ref3 : _assets_images_placeholders_product_svg__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z,
                                alt: `Review thumb gallery ${item.id}`
                            })
                        }, `review-thumb-gallery-${item.id}`);
                    })
                })
            })
        ]
    }));
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;