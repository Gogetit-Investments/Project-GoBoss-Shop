"use strict";
exports.id = 1932;
exports.ids = [1932];
exports.modules = {

/***/ 1932:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "j_": () => (/* binding */ useDownloadableProductOrders),
/* harmony export */   "Aj": () => (/* binding */ useOrder),
/* harmony export */   "xp": () => (/* binding */ useGetPaymentIntent),
/* harmony export */   "fY": () => (/* binding */ useOrderPayment)
/* harmony export */ });
/* unused harmony exports useOrders, useSavePaymentMethod */
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _data_client_endpoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1880);
/* harmony import */ var _data_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7607);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_modal_views_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5335);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8922);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_hot_toast__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_data_client__WEBPACK_IMPORTED_MODULE_2__]);
_data_client__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






function useOrders(options) {
    const { data , isLoading , error , fetchNextPage , hasNextPage , isFetching , isFetchingNextPage ,  } = useInfiniteQuery([
        API_ENDPOINTS.ORDERS,
        options
    ], ({ queryKey , pageParam  })=>client.orders.all(Object.assign({}, queryKey[1], pageParam))
    , {
        getNextPageParam: ({ current_page , last_page  })=>last_page > current_page && {
                page: current_page + 1
            }
    });
    function handleLoadMore() {
        fetchNextPage();
    }
    var ref;
    return {
        orders: (ref = data === null || data === void 0 ? void 0 : data.pages.flatMap((page)=>page.data
        )) !== null && ref !== void 0 ? ref : [],
        isLoading,
        error,
        hasNextPage,
        isFetching,
        isLoadingMore: isFetchingNextPage,
        loadMore: handleLoadMore
    };
}
function useDownloadableProductOrders(options) {
    const formattedOptions = {
        ...options
    };
    const { data , isLoading , error , fetchNextPage , hasNextPage , isFetching , isFetchingNextPage ,  } = (0,react_query__WEBPACK_IMPORTED_MODULE_0__.useInfiniteQuery)([
        _data_client_endpoints__WEBPACK_IMPORTED_MODULE_1__/* .API_ENDPOINTS.ORDERS_DOWNLOADS */ .P.ORDERS_DOWNLOADS,
        formattedOptions
    ], ({ queryKey , pageParam  })=>_data_client__WEBPACK_IMPORTED_MODULE_2__/* ["default"].orders.downloadable */ .Z.orders.downloadable(Object.assign({}, queryKey[1], pageParam))
    , {
        getNextPageParam: ({ current_page , last_page  })=>last_page > current_page && {
                page: current_page + 1
            }
    });
    function handleLoadMore() {
        fetchNextPage();
    }
    var ref;
    return {
        downloadableFiles: (ref = data === null || data === void 0 ? void 0 : data.pages.flatMap((page)=>page.data
        )) !== null && ref !== void 0 ? ref : [],
        isLoading,
        error,
        hasNextPage,
        isFetching,
        isLoadingMore: isFetchingNextPage,
        loadMore: handleLoadMore
    };
}
function useOrder({ tracking_number  }) {
    const { data , isLoading , error , isFetching , refetch  } = (0,react_query__WEBPACK_IMPORTED_MODULE_0__.useQuery)([
        _data_client_endpoints__WEBPACK_IMPORTED_MODULE_1__/* .API_ENDPOINTS.ORDERS */ .P.ORDERS,
        tracking_number
    ], ()=>_data_client__WEBPACK_IMPORTED_MODULE_2__/* ["default"].orders.get */ .Z.orders.get(tracking_number)
    , {
        refetchOnWindowFocus: false
    });
    return {
        order: data,
        isFetching,
        isLoading,
        refetch,
        error
    };
}
function useGetPaymentIntent({ tracking_number  }) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const { openModal  } = (0,_components_modal_views_context__WEBPACK_IMPORTED_MODULE_4__/* .useModalAction */ .SO)();
    const { data: data1 , isLoading , error , refetch  } = (0,react_query__WEBPACK_IMPORTED_MODULE_0__.useQuery)([
        _data_client_endpoints__WEBPACK_IMPORTED_MODULE_1__/* .API_ENDPOINTS.PAYMENT_INTENT */ .P.PAYMENT_INTENT,
        {
            tracking_number
        }
    ], ()=>_data_client__WEBPACK_IMPORTED_MODULE_2__/* ["default"].orders.getPaymentIntent */ .Z.orders.getPaymentIntent({
            tracking_number
        })
    , // Make it dynamic for both gql and rest
    {
        enabled: false,
        onSuccess: (data)=>{
            var ref;
            if (data === null || data === void 0 ? void 0 : (ref = data.payment_intent_info) === null || ref === void 0 ? void 0 : ref.is_redirect) {
                var ref1;
                return router.push(data === null || data === void 0 ? void 0 : (ref1 = data.payment_intent_info) === null || ref1 === void 0 ? void 0 : ref1.redirect_url);
            } else {
                openModal('PAYMENT_MODAL', {
                    paymentGateway: data === null || data === void 0 ? void 0 : data.payment_gateway,
                    paymentIntentInfo: data === null || data === void 0 ? void 0 : data.payment_intent_info,
                    trackingNumber: data === null || data === void 0 ? void 0 : data.tracking_number
                });
            }
        }
    });
    return {
        data: data1,
        getPaymentIntentQuery: refetch,
        isLoading,
        error
    };
}
function useOrderPayment() {
    const queryClient = (0,react_query__WEBPACK_IMPORTED_MODULE_0__.useQueryClient)();
    const { mutate: createOrderPayment , isLoading  } = (0,react_query__WEBPACK_IMPORTED_MODULE_0__.useMutation)(_data_client__WEBPACK_IMPORTED_MODULE_2__/* ["default"].orders.payment */ .Z.orders.payment, {
        onSettled: (data)=>{
            queryClient.refetchQueries(_data_client_endpoints__WEBPACK_IMPORTED_MODULE_1__/* .API_ENDPOINTS.ORDERS */ .P.ORDERS);
            queryClient.refetchQueries(_data_client_endpoints__WEBPACK_IMPORTED_MODULE_1__/* .API_ENDPOINTS.ORDERS_DOWNLOADS */ .P.ORDERS_DOWNLOADS);
        },
        onError: (error)=>{
            const { response: { data  } ,  } = error !== null && error !== void 0 ? error : {};
            react_hot_toast__WEBPACK_IMPORTED_MODULE_5___default().error(data === null || data === void 0 ? void 0 : data.message);
        }
    });
    function formatOrderInput(input) {
        const formattedInputs = {
            ...input
        };
        createOrderPayment(formattedInputs);
    }
    return {
        createOrderPayment: formatOrderInput,
        isLoading
    };
}
function useSavePaymentMethod() {
    const { mutate: savePaymentMethod , isLoading , error , data ,  } = useMutation(client.orders.savePaymentMethod);
    return {
        savePaymentMethod,
        data,
        isLoading,
        error
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;