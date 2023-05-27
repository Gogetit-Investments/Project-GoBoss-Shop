(() => {
var exports = {};
exports.id = 7393;
exports.ids = [7393];
exports.modules = {

/***/ 3546:
/***/ ((module) => {

// Exports
module.exports = {
	"progress_container": "progress-box_progress_container___zzev",
	"bar": "progress-box_bar__t1PIC",
	"progress_wrapper": "progress-box_progress_wrapper___Kwhc",
	"checked": "progress-box_checked__SaJdX",
	"status_wrapper": "progress-box_status_wrapper__6S4IY"
};


/***/ }),

/***/ 8273:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Y": () => (/* binding */ CheckMark)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const CheckMark = ({ ...props })=>{
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "20.894",
        height: "16",
        viewBox: "0 0 20.894 16",
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            "data-name": "_ionicons_svg_ios-checkmark (3)",
            d: "M169.184,175.473l-1.708-1.756a.367.367,0,0,0-.272-.116.352.352,0,0,0-.272.116l-11.837,11.925-4.308-4.308a.375.375,0,0,0-.543,0l-1.727,1.727a.387.387,0,0,0,0,.553l5.434,5.434a1.718,1.718,0,0,0,1.135.553,1.8,1.8,0,0,0,1.126-.534h.01l12.973-13.041A.415.415,0,0,0,169.184,175.473Z",
            transform: "translate(-148.4 -173.6)",
            fill: "currentColor"
        })
    }));
};


/***/ }),

/***/ 7110:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "t": () => (/* binding */ OrderItems)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ui_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9662);
/* harmony import */ var _lib_hooks_use_price__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3949);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_locals__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1757);
/* harmony import */ var _components_ui_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3879);
/* harmony import */ var _lib_placeholders__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3991);
/* harmony import */ var _components_modal_views_context__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5335);
/* harmony import */ var _components_ui_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6872);
/* harmony import */ var _config_routes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(551);
/* harmony import */ var _lib_get_reviews__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(1731);
/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4685);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(3620);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _data_client__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(7607);
/* harmony import */ var _components_icons_download_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(1789);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_hooks_use_price__WEBPACK_IMPORTED_MODULE_2__, _data_client__WEBPACK_IMPORTED_MODULE_13__]);
([_lib_hooks_use_price__WEBPACK_IMPORTED_MODULE_2__, _data_client__WEBPACK_IMPORTED_MODULE_13__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







// import { useModalAction } from '@/components/ui/modal/modal.context';


// import { Routes } from '@/config/routes';







//FIXME: need to fix this usePrice hooks issue within the table render we may check with nested property
const OrderItemList = (_, record)=>{
    var ref5, ref1, ref2;
    const { price  } = (0,_lib_hooks_use_price__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP)({
        amount: (ref5 = record.pivot) === null || ref5 === void 0 ? void 0 : ref5.unit_price
    });
    let name = record.name;
    if (record === null || record === void 0 ? void 0 : (ref1 = record.pivot) === null || ref1 === void 0 ? void 0 : ref1.variation_option_id) {
        var ref3;
        const variationTitle = record === null || record === void 0 ? void 0 : (ref3 = record.variation_options) === null || ref3 === void 0 ? void 0 : ref3.find((vo)=>{
            var ref;
            return (vo === null || vo === void 0 ? void 0 : vo.id) === (record === null || record === void 0 ? void 0 : (ref = record.pivot) === null || ref === void 0 ? void 0 : ref.variation_option_id);
        })['title'];
        name = `${name} - ${variationTitle}`;
    }
    var ref4;
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex items-center",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "relative flex h-16 w-16 shrink-0 overflow-hidden rounded",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_image__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    src: (ref4 = (ref2 = record.image) === null || ref2 === void 0 ? void 0 : ref2.thumbnail) !== null && ref4 !== void 0 ? ref4 : _lib_placeholders__WEBPACK_IMPORTED_MODULE_6__/* .productPlaceholder */ .Hb,
                    alt: name,
                    className: "h-full w-full object-cover",
                    layout: "fill"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex flex-col overflow-hidden ltr:ml-4 rtl:mr-4",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "mb-1 flex space-x-1 rtl:space-x-reverse",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_link__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                href: _config_routes__WEBPACK_IMPORTED_MODULE_9__/* ["default"].product */ .Z.product(record === null || record === void 0 ? void 0 : record.slug),
                                className: "text-body hover:text-accent inline-block overflow-hidden truncate text-sm transition-colors hover:underline",
                                locale: record === null || record === void 0 ? void 0 : record.language,
                                children: name
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "text-body inline-block overflow-hidden truncate text-sm",
                                children: "x"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "text-heading inline-block overflow-hidden truncate text-sm font-semibold",
                                children: record.unit
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "text-accent mb-1 inline-block overflow-hidden truncate text-sm font-semibold",
                        children: price
                    })
                ]
            })
        ]
    }));
};
const OrderItems = ({ products , orderId , status  })=>{
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_3__.useTranslation)('common');
    const { alignLeft , alignRight  } = (0,_lib_locals__WEBPACK_IMPORTED_MODULE_4__/* .useIsRTL */ .S)();
    const { openModal  } = (0,_components_modal_views_context__WEBPACK_IMPORTED_MODULE_7__/* .useModalAction */ .SO)();
    const getStatus = status === _types__WEBPACK_IMPORTED_MODULE_11__/* .PaymentStatus.SUCCESS */ .bG.SUCCESS;
    const { mutate  } = (0,react_query__WEBPACK_IMPORTED_MODULE_12__.useMutation)(_data_client__WEBPACK_IMPORTED_MODULE_13__/* ["default"].orders.generateDownloadLink */ .Z.orders.generateDownloadLink, {
        onSuccess: (data, name)=>{
            function download(fileUrl, fileName) {
                var a = document.createElement('a');
                a.href = fileUrl;
                a.setAttribute('download', fileName);
                a.click();
            }
            download(data, name);
        }
    });
    const openReviewModal = (record)=>{
        var ref, ref6;
        openModal('REVIEW_RATING', {
            product_id: record.id,
            shop_id: record.shop_id,
            order_id: orderId,
            name: record.name,
            image: record.image,
            my_review: (0,_lib_get_reviews__WEBPACK_IMPORTED_MODULE_15__/* .getReview */ .T)(record === null || record === void 0 ? void 0 : record.my_review, record === null || record === void 0 ? void 0 : record.order_id),
            ...((ref = record.pivot) === null || ref === void 0 ? void 0 : ref.variation_option_id) && {
                variation_option_id: (ref6 = record.pivot) === null || ref6 === void 0 ? void 0 : ref6.variation_option_id
            }
        });
    };
    const orderTableColumns = [
        {
            title: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: "ltr:pl-20 rtl:pr-20",
                children: t('text-item')
            }),
            dataIndex: '',
            key: 'items',
            align: alignLeft,
            width: 250,
            ellipsis: true,
            render: OrderItemList
        },
        {
            title: t('text-quantity'),
            dataIndex: 'pivot',
            key: 'pivot',
            align: 'center',
            width: 100,
            render: function renderQuantity(pivot) {
                return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: "text-base",
                    children: pivot.order_quantity
                }));
            }
        },
        // {
        //   title: t('text-price'),
        //   dataIndex: 'pivot',
        //   key: 'price',
        //   align: alignRight,
        //   width: 100,
        //   render: function RenderPrice(pivot: any) {
        //     const { price } = usePrice({
        //       amount: pivot.subtotal,
        //     });
        //     return <p>{price}</p>;
        //   },
        // },
        {
            title: '',
            dataIndex: '',
            align: alignLeft,
            width: 250,
            render: function RenderReview(_, record) {
                return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex items-center justify-end gap-4",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            className: `flex shrink-0 items-center font-semibold text-brand transition-all duration-200 hover:bg-brand hover:text-white sm:h-12 sm:rounded sm:border sm:border-light-500 sm:bg-transparent sm:py-3 sm:px-5 sm:dark:border-dark-600 ${getStatus ? '' : 'pointer-events-none cursor-not-allowed opacity-70'}`,
                            onClick: ()=>getStatus ? openReviewModal(record) : null
                            ,
                            disabled: getStatus ? false : true,
                            children: (0,_lib_get_reviews__WEBPACK_IMPORTED_MODULE_15__/* .getReview */ .T)(record === null || record === void 0 ? void 0 : record.my_review, record === null || record === void 0 ? void 0 : record.order_id) ? t('text-update-review') : t('text-write-review')
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_button__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                            onClick: ()=>{
                                var ref;
                                return getStatus ? mutate(record === null || record === void 0 ? void 0 : (ref = record.digital_file) === null || ref === void 0 ? void 0 : ref.fileable_id, record === null || record === void 0 ? void 0 : record.name) : null;
                            },
                            disabled: getStatus ? false : true,
                            className: "shrink-0",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons_download_icon__WEBPACK_IMPORTED_MODULE_14__/* .DownloadIcon */ ._, {
                                    className: "h-auto w-4"
                                }),
                                t('text-download')
                            ]
                        })
                    ]
                }));
            }
        }, 
    ];
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_table__WEBPACK_IMPORTED_MODULE_1__/* .Table */ .i, {
        //@ts-ignore
        columns: orderTableColumns,
        data: products,
        rowKey: (record)=>{
            var ref;
            return ((ref = record.pivot) === null || ref === void 0 ? void 0 : ref.variation_option_id) ? record.pivot.variation_option_id : record.created_at;
        },
        className: "orderDetailsTable w-full",
        rowClassName: "!cursor-auto",
        scroll: {
            x: 750
        }
    }));
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6139:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ order_status_progress_box)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./src/components/icons/checkmark.tsx
var checkmark = __webpack_require__(8273);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: ./src/components/ui/progress-box/progress-box.module.css
var progress_box_module = __webpack_require__(3546);
var progress_box_module_default = /*#__PURE__*/__webpack_require__.n(progress_box_module);
;// CONCATENATED MODULE: ./src/components/ui/progress-box/progress-box.tsx




const ProgressBox = ({ status , data , filledIndex ,  })=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "flex w-full flex-col items-start",
        children: data === null || data === void 0 ? void 0 : data.map((item, index)=>{
            /*#__PURE__*/ return (0,jsx_runtime_.jsxs)("div", {
                className: (progress_box_module_default()).progress_container,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: external_classnames_default()((progress_box_module_default()).progress_wrapper, index <= filledIndex ? `${(progress_box_module_default()).checked} dark:text-dark-base` : ''),
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: `${(progress_box_module_default()).status_wrapper} border-gray-200 bg-gray-100 dark:border-dark-600 dark:bg-dark-450`,
                                children: index <= filledIndex ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "h-4 w-3",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(checkmark/* CheckMark */.Y, {
                                        className: "w-full"
                                    })
                                }) : item.serial
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: `${(progress_box_module_default()).bar} bg-gray-100 dark:bg-dark-450`
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: external_classnames_default()('flex flex-col items-start ltr:ml-4 rtl:mr-4', index <= filledIndex ? `${(progress_box_module_default()).checked} text-black dark:text-light` : ''),
                        children: item && /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "text-13px font-normal",
                            children: item === null || item === void 0 ? void 0 : item.name
                        })
                    })
                ]
            }, `order-status-${index}`);
        })
    }));
};
/* harmony default export */ const progress_box = (ProgressBox);

// EXTERNAL MODULE: ./src/types/index.ts
var types = __webpack_require__(3620);
;// CONCATENATED MODULE: ./src/lib/constants/order-status.ts

// export const ORDER_STATUS = [
//   { name: 'Order Pending', status: 'order-pending', serial: 1 },
//   { name: 'Order Processing', status: 'order-processing', serial: 2 },
//   {
//     name: 'Order At Local Facility',
//     status: 'order-at-local-facility',
//     serial: 3,
//   },
//   {
//     name: 'Order Out For Delivery',
//     status: 'order-out-for-delivery',
//     serial: 4,
//   },
//   { name: 'Order Completed', status: 'order-completed', serial: 5 },
//   { name: 'Order Cancelled', status: 'order-cancelled', serial: 5 },
//   { name: 'Order Refunded', status: 'order-refunded', serial: 5 },
//   { name: 'Order Failed', status: 'order-failed', serial: 5 },
// ];
const ORDER_STATUS = [
    {
        name: 'Order Pending',
        status: 'order-pending',
        serial: 1
    },
    {
        name: 'Order Completed',
        status: 'order-completed',
        serial: 2
    },
    {
        name: 'Order Cancelled',
        status: 'order-cancelled',
        serial: 2
    },
    {
        name: 'Order Refunded',
        status: 'order-refunded',
        serial: 2
    },
    {
        name: 'Order Failed',
        status: 'order-failed',
        serial: 2
    }, 
];
const filterOrderStatus = (orderStatus, paymentStatus, currentStatusIndex)=>{
    if ([
        types/* PaymentStatus.SUCCESS */.bG.SUCCESS
    ].includes(paymentStatus)) {
        return currentStatusIndex > 1 ? [
            ...orderStatus.slice(0, 1),
            orderStatus[currentStatusIndex]
        ] : orderStatus.slice(0, 2);
    }
    return currentStatusIndex > 1 ? [
        ...orderStatus.slice(0, 2),
        orderStatus[currentStatusIndex]
    ] : orderStatus.slice(0, 2);
};

;// CONCATENATED MODULE: ./src/components/orders/order-status-progress-box.tsx



const OrderStatusProgressBox = ({ paymentStatus , orderStatus  })=>{
    console.log(orderStatus, 'litan order');
    var ref;
    const currentStatusIndex = (ref = ORDER_STATUS.findIndex((o)=>o.status === orderStatus
    )) !== null && ref !== void 0 ? ref : 0;
    const filterStatus = filterOrderStatus(ORDER_STATUS, paymentStatus, currentStatusIndex);
    return(/*#__PURE__*/ jsx_runtime_.jsx(progress_box, {
        data: filterStatus,
        status: orderStatus,
        filledIndex: currentStatusIndex
    }));
};
/* harmony default export */ const order_status_progress_box = (OrderStatusProgressBox);


/***/ }),

/***/ 3671:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ OrderViewHeader)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_orders_status_color__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7072);
/* harmony import */ var _components_ui_badge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1312);
/* harmony import */ var _components_payment_pay_now_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4661);
/* harmony import */ var _lib_is_payment_pending__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7977);
/* harmony import */ var _components_ui_loader_spinner_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3902);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_payment_pay_now_button__WEBPACK_IMPORTED_MODULE_4__]);
_components_payment_pay_now_button__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








function OrderViewHeader({ order , wrapperClassName ='lg:px-8 lg:py-3 p-6' , buttonSize ='medium' , loading =false  }) {
    var ref, ref1;
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_1__.useTranslation)('common');
    const isPaymentActionPending = (0,_lib_is_payment_pending__WEBPACK_IMPORTED_MODULE_5__/* .isPaymentPending */ .p)(order === null || order === void 0 ? void 0 : order.payment_gateway, order === null || order === void 0 ? void 0 : order.order_status, order === null || order === void 0 ? void 0 : order.payment_status);
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(`bg-[#F7F8FA] dark:bg-[#333333] ${wrapperClassName}`),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "text-heading mb-0 flex flex-col flex-wrap items-center gap-x-8 text-base font-bold sm:flex-row md:flex-nowrap",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: `order-2 flex w-full max-w-full basis-full gap-6 xs:flex-nowrap sm:order-1 sm:gap-8 ${(order === null || order === void 0 ? void 0 : (ref = order.children) === null || ref === void 0 ? void 0 : ref.length) > 0 ? '' : 'justify-between'} ${isPaymentActionPending ? '' : 'justify-between'}`,
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex flex-wrap items-center",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                    className: "mb-2 block text-xs font-normal dark:text-white xs:text-sm lg:mb-0 lg:inline-block lg:ltr:mr-4 lg:rtl:ml-4",
                                    children: [
                                        t('text-order-status'),
                                        " :"
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "w-full lg:w-auto",
                                    children: loading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_loader_spinner_spinner__WEBPACK_IMPORTED_MODULE_6__/* .SpinnerLoader */ .ii, {}) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_badge__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                        text: t(order === null || order === void 0 ? void 0 : order.order_status),
                                        color: (0,_components_orders_status_color__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(order === null || order === void 0 ? void 0 : order.order_status),
                                        className: "flex min-h-[1.4375rem] items-center justify-center text-[9px] font-bold uppercase !leading-[1.3em] xs:text-xs lg:px-2"
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex flex-wrap items-center",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                    className: "mb-2 block text-xs font-normal dark:text-white xs:text-sm lg:mb-0 lg:inline-block lg:ltr:mr-4 lg:rtl:ml-4",
                                    children: [
                                        t('text-payment-status'),
                                        " :"
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "w-full lg:w-auto",
                                    children: loading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_loader_spinner_spinner__WEBPACK_IMPORTED_MODULE_6__/* .SpinnerLoader */ .ii, {}) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_badge__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                        text: t(order === null || order === void 0 ? void 0 : order.payment_status),
                                        color: (0,_components_orders_status_color__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(order === null || order === void 0 ? void 0 : order.payment_status),
                                        className: "flex min-h-[1.4375rem] items-center justify-center text-[9px] font-bold uppercase !leading-[1.3em] xs:text-xs lg:px-2"
                                    })
                                })
                            ]
                        })
                    ]
                }),
                isPaymentActionPending && (order === null || order === void 0 ? void 0 : (ref1 = order.children) === null || ref1 === void 0 ? void 0 : ref1.length) > 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: "order-2 mt-5 w-full max-w-full shrink-0 basis-full sm:order-1 md:mt-0 md:w-auto md:max-w-none md:basis-auto md:ltr:ml-auto md:rtl:mr-auto",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_payment_pay_now_button__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        tracking_number: order === null || order === void 0 ? void 0 : order.tracking_number
                    })
                }) : null
            ]
        })
    }));
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7072:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const StatusColor = (status)=>{
    let bg_class = '';
    if ((status === null || status === void 0 ? void 0 : status.toLowerCase()) === 'order-pending' || (status === null || status === void 0 ? void 0 : status.toLowerCase()) === 'payment-pending') {
        bg_class = 'bg-[#e6a31d]';
    } else if ((status === null || status === void 0 ? void 0 : status.toLowerCase()) === 'order-processing' || (status === null || status === void 0 ? void 0 : status.toLowerCase()) === 'payment-processing') {
        bg_class = 'bg-[#F59E0B]';
    } else if ((status === null || status === void 0 ? void 0 : status.toLowerCase()) === 'order-completed' || (status === null || status === void 0 ? void 0 : status.toLowerCase()) === 'payment-success') {
        bg_class = 'bg-[#24b47e]';
    } else if ((status === null || status === void 0 ? void 0 : status.toLowerCase()) === 'order-cancelled' || (status === null || status === void 0 ? void 0 : status.toLowerCase()) === 'payment-reversal') {
        bg_class = 'bg-[#9CA3AF]';
    } else if ((status === null || status === void 0 ? void 0 : status.toLowerCase()) === 'order-failed' || (status === null || status === void 0 ? void 0 : status.toLowerCase()) === 'payment-failed') {
        bg_class = 'bg-[#EF4444]';
    } else if ((status === null || status === void 0 ? void 0 : status.toLowerCase()) === 'order-at-local-facility') {
        bg_class = 'bg-[#10B981]';
    } else if ((status === null || status === void 0 ? void 0 : status.toLowerCase()) === 'order-out-for-delivery') {
        bg_class = 'bg-[#D9D9D9]';
    } else {
        bg_class = 'bg-[#F59E0B]';
    }
    return bg_class;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StatusColor);


/***/ }),

/***/ 8297:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_locals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1757);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1635);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_ui_badge__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1312);
/* harmony import */ var _lib_format_string__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7427);
/* harmony import */ var _lib_hooks_use_price__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3949);
/* harmony import */ var _components_ui_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6872);
/* harmony import */ var _config_routes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(551);
/* harmony import */ var _components_ui_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9662);
/* harmony import */ var _components_orders_status_color__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7072);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_hooks_use_price__WEBPACK_IMPORTED_MODULE_5__]);
_lib_hooks_use_price__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






// import usePrice from '@/lib/use-price';


// import { Routes } from '@/config/routes';



const SuborderItems = ({ items  })=>{
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation)('common');
    const { alignLeft , alignRight  } = (0,_lib_locals__WEBPACK_IMPORTED_MODULE_1__/* .useIsRTL */ .S)();
    const orderTableColumns = [
        {
            title: t('text-tracking-number'),
            dataIndex: 'tracking_number',
            key: 'tracking_number',
            align: alignLeft
        },
        {
            title: t('text-date'),
            dataIndex: 'date',
            key: 'date',
            align: alignLeft,
            render: (created_at)=>dayjs__WEBPACK_IMPORTED_MODULE_3___default()(created_at).format('MMMM D, YYYY')
        },
        {
            title: t('text-status'),
            dataIndex: 'order_status',
            key: 'order_status',
            align: alignLeft,
            render: function renderStatus(order_status) {
                return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_badge__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                    text: t(order_status),
                    color: (0,_components_orders_status_color__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(order_status)
                }));
            }
        },
        {
            title: t('text-item'),
            dataIndex: 'products',
            key: 'products',
            align: alignLeft,
            render: (products)=>{
                return (0,_lib_format_string__WEBPACK_IMPORTED_MODULE_10__/* .formatString */ .U)(products === null || products === void 0 ? void 0 : products.length, t('text-item'));
            }
        },
        {
            title: t('text-total-price'),
            dataIndex: 'paid_total',
            key: 'paid_total',
            align: alignLeft,
            // width: 100,
            render: function TotalPrice(paid_total) {
                const { price  } = (0,_lib_hooks_use_price__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .ZP)({
                    amount: paid_total
                });
                return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    children: price
                }));
            }
        },
        {
            title: '',
            dataIndex: 'tracking_number',
            key: 'tracking_number',
            align: alignRight,
            // width: 100,
            render: function renderTrackingNumber(tracking_number) {
                return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_link__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                    href: `${_config_routes__WEBPACK_IMPORTED_MODULE_7__/* ["default"].orderUrl */ .Z.orderUrl(tracking_number)}/payment`,
                    className: "inline-flex h-10 flex-shrink-0 items-center justify-center rounded border border-transparent bg-gray-700 px-4 py-0 text-sm font-semibold leading-none text-light outline-none transition duration-300 ease-in-out hover:bg-gray-900 focus:shadow focus:outline-none",
                    children: t('text-view')
                }));
            }
        }, 
    ];
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_table__WEBPACK_IMPORTED_MODULE_8__/* .Table */ .i, {
        //@ts-ignore
        columns: orderTableColumns,
        emptyText: t('table:empty-table-data'),
        //@ts-ignore
        data: items,
        rowKey: "id",
        scroll: {
            x: 800
        }
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SuborderItems);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1312:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_2__);



const Badge = ({ className , color: colorOverride , textColor: textColorOverride , text , style ,  })=>{
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation)();
    const classes = {
        root: 'px-3 py-1 rounded-full text-sm',
        default: 'bg-accent',
        text: 'text-light'
    };
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(classes.root, {
            [classes.default]: !colorOverride,
            [classes.text]: !textColorOverride
        }, colorOverride, textColorOverride, className, 'inline-flex'),
        style: style,
        children: t(text)
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Badge);


/***/ }),

/***/ 7018:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export Error */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const Error = ({ message  })=>{
    return(/*#__PURE__*/ _jsx("p", {
        className: "mt-2 text-xs text-red-500 ltr:text-left rtl:text-right",
        children: message
    }));
};
const ErrorMessage = ({ message  })=>{
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
        className: "mx-auto mt-16 min-w-min max-w-sm rounded bg-red-400 p-5 text-center text-lg font-semibold text-light",
        children: message
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ErrorMessage);


/***/ }),

/***/ 3902:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ii": () => (/* binding */ SpinnerLoader),
/* harmony export */   "wY": () => (/* binding */ PageLoader)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_icons_spinner_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(321);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_3__);





const Spinner = (props)=>{
    const { className , showText =true , text ='Loading' , simple  } = props;
    return(/*#__PURE__*/ _jsx(_Fragment, {
        children: simple ? /*#__PURE__*/ _jsx("span", {
            className: cn(className, styles.simple_loading)
        }) : /*#__PURE__*/ _jsxs("span", {
            className: cn('flex h-screen w-full flex-col items-center justify-center', className),
            children: [
                /*#__PURE__*/ _jsx("span", {
                    className: styles.loading
                }),
                showText && /*#__PURE__*/ _jsx("h3", {
                    className: "text-body text-lg font-semibold italic",
                    children: text
                })
            ]
        })
    }));
};
const SpinnerLoader = (props)=>{
    const { className  } = props;
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('border-t-accent inline-flex h-5 w-5 animate-spin rounded-full border-2 border-t-2 border-transparent', className)
    }));
};
const PageLoader = (props)=>{
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_3__.useTranslation)('common');
    const { className , showText =true , text =t('text-loader-title')  } = props;
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('flex w-full flex-grow text-lg', className),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons_spinner_icon__WEBPACK_IMPORTED_MODULE_2__/* .SpinnerIcon */ .L, {
                className: "m-auto h-auto w-6 animate-spin"
            }),
            ' ',
            showText && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: "ml-1",
                children: text
            })
        ]
    }));
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (Spinner)));


/***/ }),

/***/ 9662:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "i": () => (/* reexport default from dynamic */ rc_table__WEBPACK_IMPORTED_MODULE_0___default.a)
/* harmony export */ });
/* harmony import */ var rc_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3345);
/* harmony import */ var rc_table__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rc_table__WEBPACK_IMPORTED_MODULE_0__);




/***/ }),

/***/ 7427:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "U": () => (/* binding */ formatString)
/* harmony export */ });
function formatString(count, string) {
    if (!count) return `${count} ${string}`;
    return count > 1 ? `${count} ${string}s` : `${count} ${string}`;
}


/***/ }),

/***/ 2387:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "i": () => (/* reexport */ (useWindowSize_default()))
});

;// CONCATENATED MODULE: external "react-use/lib/useWindowSize"
const useWindowSize_namespaceObject = require("react-use/lib/useWindowSize");
var useWindowSize_default = /*#__PURE__*/__webpack_require__.n(useWindowSize_namespaceObject);
;// CONCATENATED MODULE: ./src/lib/hooks/use-window-size.ts



/***/ }),

/***/ 7977:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "p": () => (/* binding */ isPaymentPending)
/* harmony export */ });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3620);

/**
 * Utility method to find out is payment action pending or not
 *
 * @param paymentGateway
 * @param orderStatus
 * @param paymentStatus
 */ function isPaymentPending(paymentGateway, orderStatus, paymentStatus) {
    const isPaymentWallet = ![
        _types__WEBPACK_IMPORTED_MODULE_0__/* .PaymentGateway.FULL_WALLET_PAYMENT */ .HY.FULL_WALLET_PAYMENT
    ].includes(paymentGateway);
    const isOrderPending = ![
        _types__WEBPACK_IMPORTED_MODULE_0__/* .OrderStatus.CANCELLED */ .iF.CANCELLED
    ].includes(orderStatus);
    return isPaymentWallet && isOrderPending && paymentStatus !== _types__WEBPACK_IMPORTED_MODULE_0__/* .PaymentStatus.SUCCESS */ .bG.SUCCESS;
}


/***/ }),

/***/ 3991:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Hb": () => (/* reexport */ product/* default */.Z)
});

// UNUSED EXPORTS: avatarPlaceholder, couponPlaceholder, logoPlaceholder

// EXTERNAL MODULE: ./src/assets/images/placeholders/product.svg
var product = __webpack_require__(8818);
;// CONCATENATED MODULE: ./src/assets/images/placeholders/coupon.svg
/* harmony default export */ const coupon = ({"src":"/_next/static/media/coupon.5015b440.svg","height":240,"width":320});
;// CONCATENATED MODULE: ./src/assets/images/placeholders/avatar.svg
/* harmony default export */ const avatar = ({"src":"/_next/static/media/avatar.c9441dc8.svg","height":120,"width":120});
;// CONCATENATED MODULE: ./src/assets/images/placeholders/logo.svg
/* harmony default export */ const logo = ({"src":"/_next/static/media/logo.0679544b.svg","height":18,"width":109});
;// CONCATENATED MODULE: ./src/lib/placeholders.tsx






/***/ }),

/***/ 2683:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5460);
/* harmony import */ var next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1635);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9699);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_confetti__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6281);
/* harmony import */ var react_confetti__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_confetti__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _layouts_general_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6524);
/* harmony import */ var _lib_hooks_use_window_size__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2387);
/* harmony import */ var _components_cart_lib_cart_context__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4021);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _data_client_endpoints__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1880);
/* harmony import */ var _data_client__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(7607);
/* harmony import */ var _lib_hooks_use_price__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(3949);
/* harmony import */ var _components_orders_order_view_header__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(3671);
/* harmony import */ var _components_orders_order_status_progress_box__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(6139);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(3620);
/* harmony import */ var _lib_format_string__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(7427);
/* harmony import */ var _components_orders_order_items__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(7110);
/* harmony import */ var _components_icons_checkmark__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(8273);
/* harmony import */ var _components_orders_suborder_items__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(8297);
/* harmony import */ var _data_order__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(1932);
/* harmony import */ var _components_modal_views_context__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(5335);
/* harmony import */ var _components_ui_loader_spinner_spinner__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(3902);
/* harmony import */ var _components_ui_error_message__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(7018);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_layouts_general_layout__WEBPACK_IMPORTED_MODULE_7__, _data_client__WEBPACK_IMPORTED_MODULE_13__, _lib_hooks_use_price__WEBPACK_IMPORTED_MODULE_14__, _components_orders_order_view_header__WEBPACK_IMPORTED_MODULE_15__, _components_orders_order_items__WEBPACK_IMPORTED_MODULE_18__, _components_orders_suborder_items__WEBPACK_IMPORTED_MODULE_20__, _data_order__WEBPACK_IMPORTED_MODULE_21__]);
([_layouts_general_layout__WEBPACK_IMPORTED_MODULE_7__, _data_client__WEBPACK_IMPORTED_MODULE_13__, _lib_hooks_use_price__WEBPACK_IMPORTED_MODULE_14__, _components_orders_order_view_header__WEBPACK_IMPORTED_MODULE_15__, _components_orders_order_items__WEBPACK_IMPORTED_MODULE_18__, _components_orders_suborder_items__WEBPACK_IMPORTED_MODULE_20__, _data_order__WEBPACK_IMPORTED_MODULE_21__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


























const Card = ({ title , details  })=>{
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "flex min-h-[6.5rem] items-center rounded border border-gray-200 py-4 px-6 dark:border-[#434343] dark:bg-dark-200",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h3", {
                    className: "mb-2 text-xs font-normal dark:text-white/60",
                    children: [
                        title,
                        " :",
                        ' '
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: "text-dark-200 dark:text-white",
                    children: details
                })
            ]
        })
    }));
};
const Listitem = ({ title , details  })=>{
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
        className: "text-body-dark mt-5 flex items-center text-xs",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                className: "w-5/12 sm:w-4/12",
                children: title
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                children: ":"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: "w-7/12 ltr:pl-4 rtl:pr-4 dark:text-white sm:w-8/12 ",
                children: details
            })
        ]
    }));
};
const OrderView = ({ order , loadingStatus  })=>{
    var ref, ref1;
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_10__.useTranslation)('common');
    const { width , height  } = (0,_lib_hooks_use_window_size__WEBPACK_IMPORTED_MODULE_8__/* .useWindowSize */ .i)();
    const { resetCart  } = (0,_components_cart_lib_cart_context__WEBPACK_IMPORTED_MODULE_9__/* .useCart */ .jD)();
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        resetCart();
    }, []);
    const { price: total  } = (0,_lib_hooks_use_price__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .ZP)({
        amount: order === null || order === void 0 ? void 0 : order.paid_total
    });
    const { price: wallet_total  } = (0,_lib_hooks_use_price__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .ZP)({
        amount: order === null || order === void 0 ? void 0 : (ref = order.wallet_point) === null || ref === void 0 ? void 0 : ref.amount
    });
    const { price: sub_total  } = (0,_lib_hooks_use_price__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .ZP)({
        amount: order === null || order === void 0 ? void 0 : order.amount
    });
    var ref2;
    const { price: tax  } = (0,_lib_hooks_use_price__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .ZP)({
        amount: (ref2 = order === null || order === void 0 ? void 0 : order.sales_tax) !== null && ref2 !== void 0 ? ref2 : 0
    });
    var ref3;
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "p-4 sm:p-8",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "mx-auto w-full max-w-screen-lg",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "relative overflow-hidden rounded",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_orders_order_view_header__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                            order: order,
                            buttonSize: "small",
                            loading: loadingStatus
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "bg-light px-6 pb-12 pt-9 dark:bg-dark-200 lg:px-8",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "mb-6 grid gap-4 sm:grid-cols-2 md:mb-12 lg:grid-cols-4",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Card, {
                                            title: t('text-order-number'),
                                            details: order === null || order === void 0 ? void 0 : order.tracking_number
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Card, {
                                            title: t('text-date'),
                                            details: dayjs__WEBPACK_IMPORTED_MODULE_2___default()(order === null || order === void 0 ? void 0 : order.created_at).format('MMMM D, YYYY')
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Card, {
                                            title: t('text-total'),
                                            details: total
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Card, {
                                            title: t('text-payment-method'),
                                            details: (ref3 = order === null || order === void 0 ? void 0 : order.payment_gateway) !== null && ref3 !== void 0 ? ref3 : 'N/A'
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "mt-12 flex flex-col md:flex-row",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "mb-10 w-full md:mb-0 md:w-1/2 ltr:md:pr-3 rtl:md:pl-3",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                    className: "mb-6 text-base font-medium dark:text-white",
                                                    children: t('text-order-details')
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Listitem, {
                                                            title: t('text-total-item'),
                                                            details: (0,_lib_format_string__WEBPACK_IMPORTED_MODULE_25__/* .formatString */ .U)(order === null || order === void 0 ? void 0 : (ref1 = order.products) === null || ref1 === void 0 ? void 0 : ref1.length, t('text-item'))
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Listitem, {
                                                            title: t('text-sub-total'),
                                                            details: sub_total
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Listitem, {
                                                            title: t('text-tax'),
                                                            details: tax
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Listitem, {
                                                            title: t('text-total'),
                                                            details: total
                                                        }),
                                                        wallet_total && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Listitem, {
                                                            title: t('text-paid-from-wallet'),
                                                            details: wallet_total
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "w-full md:w-1/2 ltr:md:pl-3 rtl:md:pr-3",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                    className: "mb-6 text-base font-medium dark:text-white",
                                                    children: t('text-order-status')
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_orders_order_status_progress_box__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                                                        orderStatus: order === null || order === void 0 ? void 0 : order.order_status,
                                                        paymentStatus: order === null || order === void 0 ? void 0 : order.payment_status
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "mt-12",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_orders_order_items__WEBPACK_IMPORTED_MODULE_18__/* .OrderItems */ .t, {
                                        products: order === null || order === void 0 ? void 0 : order.products,
                                        orderId: order === null || order === void 0 ? void 0 : order.id,
                                        status: order === null || order === void 0 ? void 0 : order.payment_status
                                    })
                                }),
                                !lodash_isEmpty__WEBPACK_IMPORTED_MODULE_3___default()(order === null || order === void 0 ? void 0 : order.children) ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "mt-10",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                            className: "mb-6 text-base font-medium dark:text-white",
                                            children: t('text-sub-orders')
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "mb-12 flex items-start rounded border border-gray-200 p-4 dark:border-dark-600",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "mt-0.5 flex h-4 w-4 items-center justify-center rounded-sm bg-dark px-2 ltr:mr-3 rtl:ml-3 dark:bg-light",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons_checkmark__WEBPACK_IMPORTED_MODULE_19__/* .CheckMark */ .Y, {
                                                                className: "h-2 w-2 shrink-0 text-light dark:text-dark"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                            className: "text-heading text-sm",
                                                            children: [
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                    className: "font-bold",
                                                                    children: [
                                                                        t('text-note'),
                                                                        ":"
                                                                    ]
                                                                }),
                                                                ' ',
                                                                t('message-sub-order')
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                Array.isArray(order === null || order === void 0 ? void 0 : order.children) && (order === null || order === void 0 ? void 0 : order.children.length) && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_orders_suborder_items__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
                                                    items: order === null || order === void 0 ? void 0 : order.children
                                                })
                                            ]
                                        })
                                    ]
                                }) : null
                            ]
                        })
                    ]
                })
            }),
            order && order.payment_status === _types__WEBPACK_IMPORTED_MODULE_17__/* .PaymentStatus.SUCCESS */ .bG.SUCCESS ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_confetti__WEBPACK_IMPORTED_MODULE_6___default()), {
                width: width - 10,
                height: height,
                recycle: false,
                tweenDuration: 8000,
                numberOfPieces: 300
            }) : ''
        ]
    }));
};
const OrderPage = ()=>{
    const { query  } = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
    const { openModal  } = (0,_components_modal_views_context__WEBPACK_IMPORTED_MODULE_22__/* .useModalAction */ .SO)();
    const { order , isLoading , error , isFetching  } = (0,_data_order__WEBPACK_IMPORTED_MODULE_21__/* .useOrder */ .Aj)({
        tracking_number: query.tracking_number.toString()
    });
    const { payment_status , payment_intent , tracking_number  } = order !== null && order !== void 0 ? order : {};
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        var ref;
        if (payment_status === _types__WEBPACK_IMPORTED_MODULE_17__/* .PaymentStatus.PENDING */ .bG.PENDING && (payment_intent === null || payment_intent === void 0 ? void 0 : payment_intent.payment_intent_info) && !(payment_intent === null || payment_intent === void 0 ? void 0 : (ref = payment_intent.payment_intent_info) === null || ref === void 0 ? void 0 : ref.is_redirect)) {
            openModal('PAYMENT_MODAL', {
                paymentGateway: payment_intent === null || payment_intent === void 0 ? void 0 : payment_intent.payment_gateway,
                paymentIntentInfo: payment_intent === null || payment_intent === void 0 ? void 0 : payment_intent.payment_intent_info,
                trackingNumber: tracking_number
            });
        }
    }, [
        payment_status,
        payment_intent === null || payment_intent === void 0 ? void 0 : payment_intent.payment_intent_info
    ]);
    if (isLoading) {
        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_loader_spinner_spinner__WEBPACK_IMPORTED_MODULE_23__/* .PageLoader */ .wY, {
            showText: false
        }));
    }
    if (error) return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_error_message__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z, {
        message: error === null || error === void 0 ? void 0 : error.message
    }));
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(OrderView, {
        order: order,
        loadingStatus: !isLoading && isFetching
    }));
};
OrderPage.authorization = true;
OrderPage.getLayout = function getLayout(page) {
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layouts_general_layout__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
        children: page
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OrderPage);
const getServerSideProps = async ({ locale  })=>{
    const queryClient = new react_query__WEBPACK_IMPORTED_MODULE_11__.QueryClient();
    await queryClient.prefetchQuery([
        _data_client_endpoints__WEBPACK_IMPORTED_MODULE_12__/* .API_ENDPOINTS.SETTINGS */ .P.SETTINGS,
        {
            language: locale
        }
    ], ({ queryKey  })=>_data_client__WEBPACK_IMPORTED_MODULE_13__/* ["default"].settings.all */ .Z.settings.all(queryKey[1])
    );
    return {
        props: {
            ...await (0,next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_1__.serverSideTranslations)(locale, [
                'common'
            ]),
            dehydratedState: JSON.parse(JSON.stringify((0,react_query__WEBPACK_IMPORTED_MODULE_11__.dehydrate)(queryClient)))
        }
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2167:
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ 9003:
/***/ ((module) => {

"use strict";
module.exports = require("classnames");

/***/ }),

/***/ 1635:
/***/ ((module) => {

"use strict";
module.exports = require("dayjs");

/***/ }),

/***/ 9699:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/isEmpty");

/***/ }),

/***/ 1381:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/throttle");

/***/ }),

/***/ 1377:
/***/ ((module) => {

"use strict";
module.exports = require("next-i18next");

/***/ }),

/***/ 5460:
/***/ ((module) => {

"use strict";
module.exports = require("next-i18next/serverSideTranslations");

/***/ }),

/***/ 1162:
/***/ ((module) => {

"use strict";
module.exports = require("next-themes");

/***/ }),

/***/ 562:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 8028:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 3539:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/detect-domain-locale.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 5832:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 3345:
/***/ ((module) => {

"use strict";
module.exports = require("rc-table");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 9983:
/***/ ((module) => {

"use strict";
module.exports = require("react-avatar");

/***/ }),

/***/ 6281:
/***/ ((module) => {

"use strict";
module.exports = require("react-confetti");

/***/ }),

/***/ 8782:
/***/ ((module) => {

"use strict";
module.exports = require("react-content-loader");

/***/ }),

/***/ 8922:
/***/ ((module) => {

"use strict";
module.exports = require("react-hot-toast");

/***/ }),

/***/ 1175:
/***/ ((module) => {

"use strict";
module.exports = require("react-query");

/***/ }),

/***/ 9755:
/***/ ((module) => {

"use strict";
module.exports = require("react-use");

/***/ }),

/***/ 7139:
/***/ ((module) => {

"use strict";
module.exports = require("react-use/lib/useLocalStorage");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 1185:
/***/ ((module) => {

"use strict";
module.exports = import("@headlessui/react");;

/***/ }),

/***/ 6197:
/***/ ((module) => {

"use strict";
module.exports = import("framer-motion");;

/***/ }),

/***/ 2451:
/***/ ((module) => {

"use strict";
module.exports = import("jotai");;

/***/ }),

/***/ 9915:
/***/ ((module) => {

"use strict";
module.exports = import("js-cookie");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [7730,3157,6639,714,518,5517,6524,9363,1789,3620,1932,5349], () => (__webpack_exec__(2683)));
module.exports = __webpack_exports__;

})();