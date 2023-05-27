"use strict";
exports.id = 5748;
exports.ids = [5748];
exports.modules = {

/***/ 3963:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "R": () => (/* binding */ DislikeIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const DislikeIcon = (props)=>{
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 17.067 16",
        ...props,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                id: "Path_22674",
                "data-name": "Path 22674",
                d: "M19.244,1h1.778a1.166,1.166,0,0,1,1.244,1.065v7a1.166,1.166,0,0,1-1.244,1.065H19.244A1.166,1.166,0,0,1,18,9.06v-7A1.166,1.166,0,0,1,19.244,1Z",
                transform: "translate(-18 0.188)",
                fill: "currentColor"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                id: "Path_22675",
                "data-name": "Path 22675",
                d: "M8.093.75a2.84,2.84,0,0,1,2.8,2.361l.8,4.622a2.843,2.843,0,0,1-2.8,3.328H5.533a6.867,6.867,0,0,1,.533,2.844A2.611,2.611,0,0,1,3.755,16.75c-.711,0-1.067-.356-1.067-2.133,0-1.69-1.636-3.049-2.689-3.75V2.058A16.575,16.575,0,0,1,6.955.75Z",
                transform: "translate(5.333 -0.75)",
                fill: "currentColor"
            })
        ]
    }));
};


/***/ }),

/***/ 487:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "l": () => (/* binding */ LikeIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const LikeIcon = (props)=>{
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 17.067 16",
        ...props,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
            id: "like_1_",
            "data-name": "like (1)",
            transform: "translate(0 -0.75)",
            fill: "currentColor",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    id: "Path_22672",
                    "data-name": "Path 22672",
                    d: "M1.244,17.063H3.022a1.164,1.164,0,0,0,1.244-1.057V9.057A1.164,1.164,0,0,0,3.022,8H1.244A1.164,1.164,0,0,0,0,9.057v6.948A1.164,1.164,0,0,0,1.244,17.063Z",
                    transform: "translate(0 -1.25)"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    id: "Path_22673",
                    "data-name": "Path 22673",
                    d: "M11.255.75c-.711,0-1.067.356-1.067,2.133,0,1.69-1.636,3.049-2.689,3.75v8.809a16.575,16.575,0,0,0,6.955,1.308h1.138a2.84,2.84,0,0,0,2.8-2.361l.8-4.622a2.843,2.843,0,0,0-2.8-3.328H13.033a6.867,6.867,0,0,0,.533-2.844A2.611,2.611,0,0,0,11.255.75Z",
                    transform: "translate(-2.167 0)"
                })
            ]
        })
    }));
};


/***/ }),

/***/ 3155:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "k": () => (/* binding */ useQuestions),
/* harmony export */   "U": () => (/* binding */ useMyQuestions)
/* harmony export */ });
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _data_client_endpoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1880);
/* harmony import */ var _data_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7607);
/* harmony import */ var _data_utils_data_mapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6848);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_data_client__WEBPACK_IMPORTED_MODULE_2__]);
_data_client__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




function useQuestions(options) {
    const { data: response , isLoading , error , isFetching ,  } = (0,react_query__WEBPACK_IMPORTED_MODULE_0__.useQuery)([
        _data_client_endpoints__WEBPACK_IMPORTED_MODULE_1__/* .API_ENDPOINTS.PRODUCTS_QUESTIONS */ .P.PRODUCTS_QUESTIONS,
        options
    ], ({ queryKey  })=>_data_client__WEBPACK_IMPORTED_MODULE_2__/* ["default"].questions.all */ .Z.questions.all(Object.assign({}, queryKey[1]))
    , {
        keepPreviousData: true
    });
    var ref;
    return {
        questions: (ref = response === null || response === void 0 ? void 0 : response.data) !== null && ref !== void 0 ? ref : [],
        paginatorInfo: (0,_data_utils_data_mapper__WEBPACK_IMPORTED_MODULE_3__/* .mapPaginatorData */ .Q)(response),
        isLoading,
        error,
        isFetching
    };
}
function useMyQuestions(options) {
    const { data , isLoading , error , fetchNextPage , hasNextPage , isFetching , isFetchingNextPage ,  } = (0,react_query__WEBPACK_IMPORTED_MODULE_0__.useInfiniteQuery)([
        _data_client_endpoints__WEBPACK_IMPORTED_MODULE_1__/* .API_ENDPOINTS.MY_QUESTIONS */ .P.MY_QUESTIONS,
        options
    ], ({ queryKey , pageParam  })=>_data_client__WEBPACK_IMPORTED_MODULE_2__/* ["default"].myQuestions.all */ .Z.myQuestions.all(Object.assign({}, queryKey[1], pageParam))
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
        questions: (ref = data === null || data === void 0 ? void 0 : data.pages.flatMap((page)=>page.data
        )) !== null && ref !== void 0 ? ref : [],
        paginatorInfo: Array.isArray(data === null || data === void 0 ? void 0 : data.pages) ? (0,_data_utils_data_mapper__WEBPACK_IMPORTED_MODULE_3__/* .mapPaginatorData */ .Q)(data === null || data === void 0 ? void 0 : data.pages[data.pages.length - 1]) : null,
        isLoading,
        error,
        isFetching,
        isLoadingMore: isFetchingNextPage,
        loadMore: handleLoadMore,
        hasMore: Boolean(hasNextPage)
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;