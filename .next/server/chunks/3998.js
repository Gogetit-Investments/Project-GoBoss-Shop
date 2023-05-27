"use strict";
exports.id = 3998;
exports.ids = [3998];
exports.modules = {

/***/ 7130:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ AddToCart)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8922);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_hot_toast__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4685);
/* harmony import */ var _components_cart_lib_cart_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4021);
/* harmony import */ var _lib_hooks_use_price__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3949);
/* harmony import */ var _lib_generate_cart_item__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7599);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_hooks_use_price__WEBPACK_IMPORTED_MODULE_6__]);
_lib_hooks_use_price__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];









function AddToCart({ item , className , toastClassName , withPrice =true , variant ='fill'  }) {
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_7__.useTranslation)('common');
    const { addItemToCart , updateCartLanguage , language , isInStock  } = (0,_components_cart_lib_cart_context__WEBPACK_IMPORTED_MODULE_5__/* .useCart */ .jD)();
    const { 0: addToCartLoader , 1: setAddToCartLoader  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: cartingSuccess , 1: setCartingSuccess  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { price  } = (0,_lib_hooks_use_price__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .ZP)({
        amount: (item === null || item === void 0 ? void 0 : item.sale_price) ? item === null || item === void 0 ? void 0 : item.sale_price : item === null || item === void 0 ? void 0 : item.price,
        baseAmount: item === null || item === void 0 ? void 0 : item.price
    });
    function handleAddToCart() {
        setAddToCartLoader(true);
        setTimeout(()=>{
            setAddToCartLoader(false);
            addSuccessfully();
        }, 650);
    }
    function addSuccessfully() {
        if ((item === null || item === void 0 ? void 0 : item.language) !== language) {
            updateCartLanguage(item === null || item === void 0 ? void 0 : item.language);
        }
        setCartingSuccess(true);
        addItemToCart((0,_lib_generate_cart_item__WEBPACK_IMPORTED_MODULE_8__/* .generateCartItem */ .z)(item), 1);
        react_hot_toast__WEBPACK_IMPORTED_MODULE_3___default().success(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
            children: t('text-add-to-cart-message')
        }), {
            className: toastClassName
        });
        setTimeout(()=>{
            setCartingSuccess(false);
        }, 800);
    }
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_button__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        onClick: ()=>handleAddToCart()
        ,
        isLoading: addToCartLoader,
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('relative', cartingSuccess ? 'is-carting pointer-events-none cursor-not-allowed' : 'pointer-events-auto cursor-pointer', className),
        disabled: isInStock(item === null || item === void 0 ? void 0 : item.id),
        children: [
            t('text-add-to-cart'),
            " ",
            withPrice && price,
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                viewBox: "0 0 37 37",
                xmlns: "http://www.w3.org/2000/svg",
                className: "absolute top-auto bottom-auto right-3 h-auto w-5 xs:right-4 xs:w-6",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        fill: "none",
                        stroke: "currentColor",
                        strokeLinejoin: "round",
                        strokeMiterlimit: "10",
                        strokeWidth: "2.3",
                        d: "M30.5 6.5h0c6.6 6.6 6.6 17.4 0 24h0c-6.6 6.6-17.4 6.6-24 0h0c-6.6-6.6-6.6-17.4 0-24h0c6.6-6.7 17.4-6.7 24 0z",
                        className: "circle path"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        fill: "none",
                        stroke: "currentColor",
                        strokeLinejoin: "round",
                        strokeMiterlimit: "10",
                        strokeWidth: "2.3",
                        d: "M11.6 20L15.9 24.2 26.4 13.8",
                        className: "tick path"
                    })
                ]
            })
        ]
    }));
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7599:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "z": () => (/* binding */ generateCartItem)
/* harmony export */ });
function generateCartItem(item) {
    var ref;
    return {
        id: item.id,
        name: item.name,
        slug: item.slug,
        unit: item.unit,
        image: (ref = item.image) === null || ref === void 0 ? void 0 : ref.thumbnail,
        stock: item.quantity,
        price: Number(item.sale_price ? item.sale_price : item.price),
        shop: {
            slug: item.shop.slug,
            name: item.shop.name
        },
        language: item.language
    };
}


/***/ }),

/***/ 3239:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ FreeDownloadButton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _data_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7607);
/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4685);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _data_client_endpoints__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1880);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_cart_lib_cart_context__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4021);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_data_client__WEBPACK_IMPORTED_MODULE_3__]);
_data_client__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];









function FreeDownloadButton({ productId , productSlug , productName , className  }) {
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_7__.useTranslation)('common');
    let { 0: success , 1: setSuccess  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);
    const queryClient = (0,react_query__WEBPACK_IMPORTED_MODULE_1__.useQueryClient)();
    const { isInStock  } = (0,_components_cart_lib_cart_context__WEBPACK_IMPORTED_MODULE_8__/* .useCart */ .jD)();
    const { mutate , isLoading  } = (0,react_query__WEBPACK_IMPORTED_MODULE_1__.useMutation)(_data_client__WEBPACK_IMPORTED_MODULE_3__/* ["default"].products.download */ .Z.products.download, {
        onSuccess: (data)=>{
            function download(fileUrl, fileName) {
                var a = document.createElement('a');
                a.href = fileUrl;
                a.setAttribute('download', fileName);
                a.click();
            }
            download(data, productName);
            setSuccess(true);
            setTimeout(()=>{
                setSuccess(false);
            }, 800);
        },
        onSettled: ()=>{
            queryClient.invalidateQueries([
                _data_client_endpoints__WEBPACK_IMPORTED_MODULE_6__/* .API_ENDPOINTS.PRODUCTS */ .P.PRODUCTS,
                productSlug
            ]);
        }
    });
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_button__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        onClick: ()=>mutate({
                product_id: productId
            })
        ,
        isLoading: isLoading,
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('relative', success ? 'is-carting pointer-events-none cursor-not-allowed' : 'pointer-events-auto cursor-pointer', className),
        disabled: isInStock(productId),
        children: [
            t('text-download'),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                viewBox: "0 0 37 37",
                xmlns: "http://www.w3.org/2000/svg",
                className: "absolute top-auto bottom-auto right-3 h-auto w-5 xs:right-4 xs:w-6",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        fill: "none",
                        stroke: "currentColor",
                        strokeLinejoin: "round",
                        strokeMiterlimit: "10",
                        strokeWidth: "2.3",
                        d: "M30.5 6.5h0c6.6 6.6 6.6 17.4 0 24h0c-6.6 6.6-17.4 6.6-24 0h0c-6.6-6.6-6.6-17.4 0-24h0c6.6-6.7 17.4-6.7 24 0z",
                        className: "circle path"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        fill: "none",
                        stroke: "currentColor",
                        strokeLinejoin: "round",
                        strokeMiterlimit: "10",
                        strokeWidth: "2.3",
                        d: "M11.6 20L15.9 24.2 26.4 13.8",
                        className: "tick path"
                    })
                ]
            })
        ]
    }));
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6848:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Q": () => (/* binding */ mapPaginatorData)
/* harmony export */ });
/* harmony import */ var camelcase_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3104);
/* harmony import */ var camelcase_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(camelcase_keys__WEBPACK_IMPORTED_MODULE_0__);

const mapPaginatorData = (obj)=>{
    if (!obj) return null;
    const { data , ...formattedValues } = camelcase_keys__WEBPACK_IMPORTED_MODULE_0___default()(obj);
    return {
        ...formattedValues,
        hasMorePages: formattedValues.lastPage !== formattedValues.currentPage,
        firstItem: formattedValues.from,
        lastItem: formattedValues.to
    };
};


/***/ }),

/***/ 1748:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "n$": () => (/* binding */ useToggleWishlist),
/* harmony export */   "oQ": () => (/* binding */ useRemoveFromWishlist),
/* harmony export */   "Ei": () => (/* binding */ useWishlist),
/* harmony export */   "tc": () => (/* binding */ useInWishlist)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7607);
/* harmony import */ var _data_client_endpoints__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1880);
/* harmony import */ var _data_utils_data_mapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6848);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8922);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_hot_toast__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_client__WEBPACK_IMPORTED_MODULE_2__]);
_client__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






function useToggleWishlist(product_id) {
    const queryClient = (0,react_query__WEBPACK_IMPORTED_MODULE_1__.useQueryClient)();
    const { mutate: toggleWishlist , isLoading , isSuccess ,  } = (0,react_query__WEBPACK_IMPORTED_MODULE_1__.useMutation)(_client__WEBPACK_IMPORTED_MODULE_2__/* ["default"].wishlist.toggle */ .Z.wishlist.toggle, {
        onSuccess: (data)=>{
            queryClient.setQueryData([
                `${_data_client_endpoints__WEBPACK_IMPORTED_MODULE_3__/* .API_ENDPOINTS.WISHLIST */ .P.WISHLIST}/in_wishlist`,
                product_id
            ], (old)=>!old
            );
        },
        onError: (error)=>{
            if (axios__WEBPACK_IMPORTED_MODULE_0___default().isAxiosError(error)) {
                var ref;
                react_hot_toast__WEBPACK_IMPORTED_MODULE_5___default().error((ref = error.response) === null || ref === void 0 ? void 0 : ref.data.message);
            }
        }
    });
    return {
        toggleWishlist,
        isLoading,
        isSuccess
    };
}
function useRemoveFromWishlist() {
    const queryClient = (0,react_query__WEBPACK_IMPORTED_MODULE_1__.useQueryClient)();
    const { mutate: removeFromWishlist , isLoading , isSuccess ,  } = (0,react_query__WEBPACK_IMPORTED_MODULE_1__.useMutation)(_client__WEBPACK_IMPORTED_MODULE_2__/* ["default"].wishlist.remove */ .Z.wishlist.remove, {
        onSuccess: ()=>{
            react_hot_toast__WEBPACK_IMPORTED_MODULE_5___default().success('Successfully Removed from Wishlist!');
            queryClient.refetchQueries([
                _data_client_endpoints__WEBPACK_IMPORTED_MODULE_3__/* .API_ENDPOINTS.USERS_WISHLIST */ .P.USERS_WISHLIST
            ]);
        },
        onError: (error)=>{
            if (axios__WEBPACK_IMPORTED_MODULE_0___default().isAxiosError(error)) {
                var ref;
                react_hot_toast__WEBPACK_IMPORTED_MODULE_5___default().error((ref = error.response) === null || ref === void 0 ? void 0 : ref.data.message);
            }
        }
    });
    return {
        removeFromWishlist,
        isLoading,
        isSuccess
    };
}
function useWishlist(options) {
    const { data , isLoading , error , fetchNextPage , hasNextPage , isFetching , isFetchingNextPage ,  } = (0,react_query__WEBPACK_IMPORTED_MODULE_1__.useInfiniteQuery)([
        _data_client_endpoints__WEBPACK_IMPORTED_MODULE_3__/* .API_ENDPOINTS.USERS_WISHLIST */ .P.USERS_WISHLIST,
        options
    ], ({ queryKey , pageParam  })=>_client__WEBPACK_IMPORTED_MODULE_2__/* ["default"].wishlist.all */ .Z.wishlist.all(Object.assign({}, queryKey[1], pageParam))
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
        wishlists: (ref = data === null || data === void 0 ? void 0 : data.pages.flatMap((page)=>page.data
        )) !== null && ref !== void 0 ? ref : [],
        paginatorInfo: Array.isArray(data === null || data === void 0 ? void 0 : data.pages) ? (0,_data_utils_data_mapper__WEBPACK_IMPORTED_MODULE_4__/* .mapPaginatorData */ .Q)(data === null || data === void 0 ? void 0 : data.pages[data.pages.length - 1]) : null,
        isLoading,
        error,
        isFetching,
        isLoadingMore: isFetchingNextPage,
        loadMore: handleLoadMore,
        hasNextPage: Boolean(hasNextPage)
    };
}
function useInWishlist({ enabled , product_id  }) {
    const { data , isLoading , error , refetch  } = (0,react_query__WEBPACK_IMPORTED_MODULE_1__.useQuery)([
        `${_data_client_endpoints__WEBPACK_IMPORTED_MODULE_3__/* .API_ENDPOINTS.WISHLIST */ .P.WISHLIST}/in_wishlist`,
        product_id
    ], ()=>_client__WEBPACK_IMPORTED_MODULE_2__/* ["default"].wishlist.checkIsInWishlist */ .Z.wishlist.checkIsInWishlist({
            product_id
        })
    , {
        enabled
    });
    var ref;
    return {
        inWishlist: (ref = Boolean(data)) !== null && ref !== void 0 ? ref : false,
        isLoading,
        error,
        refetch
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;