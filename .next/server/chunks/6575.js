"use strict";
exports.id = 6575;
exports.ids = [6575];
exports.modules = {

/***/ 6575:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NT": () => (/* binding */ useTopShops),
/* harmony export */   "LV": () => (/* binding */ useFollowedShops),
/* harmony export */   "Uu": () => (/* binding */ useFollowedShopsProducts)
/* harmony export */ });
/* unused harmony export useShop */
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _data_client_endpoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1880);
/* harmony import */ var _data_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7607);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_data_client__WEBPACK_IMPORTED_MODULE_2__]);
_data_client__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




function useTopShops(options, config) {
    const { locale  } = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const formattedOptions = {
        ...options,
        language: locale
    };
    const { data , isLoading , error , fetchNextPage , hasNextPage , isFetching , isFetchingNextPage ,  } = (0,react_query__WEBPACK_IMPORTED_MODULE_0__.useInfiniteQuery)([
        _data_client_endpoints__WEBPACK_IMPORTED_MODULE_1__/* .API_ENDPOINTS.TOP_SHOPS */ .P.TOP_SHOPS,
        formattedOptions
    ], ({ queryKey , pageParam  })=>_data_client__WEBPACK_IMPORTED_MODULE_2__/* ["default"].shops.top */ .Z.shops.top(Object.assign({}, queryKey[1], pageParam))
    , {
        ...config,
        getNextPageParam: ({ current_page , last_page  })=>last_page > current_page && {
                page: current_page + 1
            }
    });
    function handleLoadMore() {
        fetchNextPage();
    }
    var ref;
    return {
        shops: (ref = data === null || data === void 0 ? void 0 : data.pages.flatMap((page)=>page.data
        )) !== null && ref !== void 0 ? ref : [],
        isLoading,
        error,
        hasNextPage,
        isFetching,
        isLoadingMore: isFetchingNextPage,
        loadMore: handleLoadMore
    };
}
function useShop(slug) {
    const { data , isLoading , error  } = useQuery([
        API_ENDPOINTS.SHOPS,
        slug
    ], ()=>client.shops.get(slug)
    );
    return {
        product: data,
        isLoading,
        error
    };
}
function useFollowedShops(options, config) {
    const { data , isLoading , error , fetchNextPage , hasNextPage , isFetching , isFetchingNextPage ,  } = (0,react_query__WEBPACK_IMPORTED_MODULE_0__.useInfiniteQuery)([
        _data_client_endpoints__WEBPACK_IMPORTED_MODULE_1__/* .API_ENDPOINTS.FOLLOWED_SHOPS */ .P.FOLLOWED_SHOPS,
        options
    ], ({ queryKey , pageParam  })=>_data_client__WEBPACK_IMPORTED_MODULE_2__/* ["default"].follow.shops */ .Z.follow.shops(Object.assign({}, queryKey[1], pageParam))
    , {
        ...config,
        getNextPageParam: ({ current_page , last_page  })=>last_page > current_page && {
                page: current_page + 1
            }
    });
    function handleLoadMore() {
        fetchNextPage();
    }
    var ref;
    return {
        shops: (ref = data === null || data === void 0 ? void 0 : data.pages.flatMap((page)=>page.data
        )) !== null && ref !== void 0 ? ref : [],
        paginatorInfo: Array.isArray(data === null || data === void 0 ? void 0 : data.pages) ? data === null || data === void 0 ? void 0 : data.pages[data.pages.length - 1] : null,
        isLoading,
        error,
        hasNextPage,
        isFetching,
        isLoadingMore: isFetchingNextPage,
        loadMore: handleLoadMore
    };
}
function useFollowedShopsProducts(options) {
    const { locale  } = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const formattedOptions = {
        ...options,
        language: locale
    };
    const { data , isLoading , error  } = (0,react_query__WEBPACK_IMPORTED_MODULE_0__.useQuery)([
        _data_client_endpoints__WEBPACK_IMPORTED_MODULE_1__/* .API_ENDPOINTS.FOLLOWED_SHOPS_PRODUCTS */ .P.FOLLOWED_SHOPS_PRODUCTS,
        formattedOptions
    ], ({ queryKey  })=>_data_client__WEBPACK_IMPORTED_MODULE_2__/* ["default"].follow.followedShopProducts */ .Z.follow.followedShopProducts(Object.assign({}, queryKey[1]))
    );
    return {
        products: data !== null && data !== void 0 ? data : [],
        isLoading,
        error
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;