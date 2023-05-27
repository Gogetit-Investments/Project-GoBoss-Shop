"use strict";
exports.id = 4113;
exports.ids = [4113];
exports.modules = {

/***/ 4113:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Kj": () => (/* binding */ useCards),
/* harmony export */   "Li": () => (/* binding */ useDeleteCard),
/* harmony export */   "VR": () => (/* binding */ useDefaultPaymentMethod)
/* harmony export */ });
/* unused harmony export useAddCards */
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _data_client_endpoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1880);
/* harmony import */ var _data_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7607);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8922);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_hot_toast__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_modal_views_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5335);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _data_user__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6639);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_data_client__WEBPACK_IMPORTED_MODULE_2__, _data_user__WEBPACK_IMPORTED_MODULE_6__]);
([_data_client__WEBPACK_IMPORTED_MODULE_2__, _data_user__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







function useCards(params, options) {
    const { isAuthorized  } = (0,_data_user__WEBPACK_IMPORTED_MODULE_6__/* .useMe */ .P)();
    const { data , isLoading , error  } = (0,react_query__WEBPACK_IMPORTED_MODULE_0__.useQuery)([
        _data_client_endpoints__WEBPACK_IMPORTED_MODULE_1__/* .API_ENDPOINTS.CARDS */ .P.CARDS,
        params
    ], ()=>_data_client__WEBPACK_IMPORTED_MODULE_2__/* ["default"].cards.all */ .Z.cards.all(params)
    , {
        enabled: isAuthorized,
        ...options
    });
    return {
        cards: data !== null && data !== void 0 ? data : [],
        isLoading,
        error
    };
}
const useDeleteCard = ()=>{
    const queryClient = (0,react_query__WEBPACK_IMPORTED_MODULE_0__.useQueryClient)();
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_5__.useTranslation)();
    const { closeModal  } = (0,_components_modal_views_context__WEBPACK_IMPORTED_MODULE_4__/* .useModalAction */ .SO)();
    const { mutate , isLoading , error  } = (0,react_query__WEBPACK_IMPORTED_MODULE_0__.useMutation)(_data_client__WEBPACK_IMPORTED_MODULE_2__/* ["default"].cards.remove */ .Z.cards.remove, {
        onSuccess: ()=>{
            closeModal();
            react_hot_toast__WEBPACK_IMPORTED_MODULE_3___default().success(t('common:text-card-successfully-deleted'));
        },
        // Always refetch after error or success:
        onSettled: ()=>{
            queryClient.invalidateQueries(_data_client_endpoints__WEBPACK_IMPORTED_MODULE_1__/* .API_ENDPOINTS.CARDS */ .P.CARDS);
        }
    });
    return {
        deleteCard: mutate,
        isLoading,
        error
    };
};
function useAddCards(method_key) {
    const { t  } = useTranslation();
    const { closeModal  } = useModalAction();
    const queryClient = useQueryClient();
    const { mutate , isLoading , error: error1  } = useMutation(client.cards.addPaymentMethod, {
        onSuccess: ()=>{
            closeModal();
            toast.success(t('common:text-card-successfully-add'), {
                id: 'success'
            });
        },
        onError: (error)=>{
            const { response: { data  } ,  } = error !== null && error !== void 0 ? error : {};
            toast.error(t(data === null || data === void 0 ? void 0 : data.message), {
                id: 'error'
            });
        },
        // Always refetch after error or success:
        onSettled: ()=>{
            queryClient.invalidateQueries(API_ENDPOINTS.CARDS);
        }
    });
    return {
        addNewCard: mutate,
        isLoading,
        error: error1
    };
}
function useDefaultPaymentMethod() {
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_5__.useTranslation)();
    const queryClient = (0,react_query__WEBPACK_IMPORTED_MODULE_0__.useQueryClient)();
    const { mutate , isLoading , error  } = (0,react_query__WEBPACK_IMPORTED_MODULE_0__.useMutation)(_data_client__WEBPACK_IMPORTED_MODULE_2__/* ["default"].cards.makeDefaultPaymentMethod */ .Z.cards.makeDefaultPaymentMethod, {
        onSuccess: ()=>{
            react_hot_toast__WEBPACK_IMPORTED_MODULE_3___default().success(t('common:text-set-default-card-message'));
        },
        // Always refetch after error or success:
        onSettled: ()=>{
            queryClient.invalidateQueries(_data_client_endpoints__WEBPACK_IMPORTED_MODULE_1__/* .API_ENDPOINTS.CARDS */ .P.CARDS);
        }
    });
    return {
        createDefaultPaymentMethod: mutate,
        isLoading,
        error
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;