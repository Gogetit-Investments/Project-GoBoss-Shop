"use strict";
exports.id = 6639;
exports.ids = [6639];
exports.modules = {

/***/ 9406:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ useAuth)
/* harmony export */ });
/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2451);
/* harmony import */ var _data_client_token_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(575);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([jotai__WEBPACK_IMPORTED_MODULE_0__, _data_client_token_utils__WEBPACK_IMPORTED_MODULE_1__]);
([jotai__WEBPACK_IMPORTED_MODULE_0__, _data_client_token_utils__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


const authorizationAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_0__.atom)((0,_data_client_token_utils__WEBPACK_IMPORTED_MODULE_1__/* .checkHasAuthToken */ .qz)());
function useAuth() {
    const [isAuthorized, setAuthorized] = (0,jotai__WEBPACK_IMPORTED_MODULE_0__.useAtom)(authorizationAtom);
    return {
        setToken: _data_client_token_utils__WEBPACK_IMPORTED_MODULE_1__/* .setAuthToken */ .uB,
        getToken: _data_client_token_utils__WEBPACK_IMPORTED_MODULE_1__/* .getAuthToken */ .bW,
        isAuthorized,
        authorize (token) {
            (0,_data_client_token_utils__WEBPACK_IMPORTED_MODULE_1__/* .setAuthToken */ .uB)(token);
            setAuthorized(true);
        },
        unauthorize () {
            setAuthorized(false);
            (0,_data_client_token_utils__WEBPACK_IMPORTED_MODULE_1__/* .removeAuthToken */ .H6)();
        }
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6639:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "P": () => (/* binding */ useMe),
/* harmony export */   "a": () => (/* binding */ useLogout)
/* harmony export */ });
/* harmony import */ var _components_auth_use_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9406);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7607);
/* harmony import */ var _client_endpoints__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1880);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_auth_use_auth__WEBPACK_IMPORTED_MODULE_0__, _client__WEBPACK_IMPORTED_MODULE_2__]);
([_components_auth_use_auth__WEBPACK_IMPORTED_MODULE_0__, _client__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




function useMe() {
    const { isAuthorized  } = (0,_components_auth_use_auth__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)();
    const { data , isLoading , error  } = (0,react_query__WEBPACK_IMPORTED_MODULE_1__.useQuery)([
        _client_endpoints__WEBPACK_IMPORTED_MODULE_3__/* .API_ENDPOINTS.USERS_ME */ .P.USERS_ME
    ], _client__WEBPACK_IMPORTED_MODULE_2__/* ["default"].users.me */ .Z.users.me, {
        enabled: isAuthorized
    });
    return {
        me: data,
        isLoading,
        error,
        isAuthorized
    };
}
function useLogout() {
    const { unauthorize  } = (0,_components_auth_use_auth__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)();
    const queryClient = (0,react_query__WEBPACK_IMPORTED_MODULE_1__.useQueryClient)();
    return (0,react_query__WEBPACK_IMPORTED_MODULE_1__.useMutation)(_client__WEBPACK_IMPORTED_MODULE_2__/* ["default"].users.logout */ .Z.users.logout, {
        onSuccess: ()=>{
            unauthorize();
            queryClient.resetQueries(_client_endpoints__WEBPACK_IMPORTED_MODULE_3__/* .API_ENDPOINTS.USERS_ME */ .P.USERS_ME);
        }
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;