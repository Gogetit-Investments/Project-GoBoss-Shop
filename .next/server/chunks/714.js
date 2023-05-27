"use strict";
exports.id = 714;
exports.ids = [714];
exports.modules = {

/***/ 8818:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/product.fd882ac3.svg","height":532,"width":798});

/***/ }),

/***/ 4021:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Zl": () => (/* binding */ CartProvider),
  "jD": () => (/* binding */ useCart)
});

// UNUSED EXPORTS: cartContext

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./src/components/cart/lib/cart.utils.ts
var cart_utils = __webpack_require__(14);
;// CONCATENATED MODULE: ./src/components/cart/lib/cart.reducer.tsx

const initialState = {
    items: [],
    isEmpty: true,
    totalItems: 0,
    totalUniqueItems: 0,
    total: 0,
    verifiedResponse: null,
    meta: null,
    language: 'en'
};
function cartReducer(state, action) {
    switch(action.type){
        case 'ADD_ITEM_WITH_QUANTITY':
            {
                const items = (0,cart_utils/* addItemWithQuantity */.Kv)(state.items, action.item, action.quantity);
                return generateFinalState(state, items);
            }
        case 'REMOVE_ITEM_OR_QUANTITY':
            {
                var _quantity;
                const items = (0,cart_utils/* removeItemOrQuantity */.um)(state.items, action.id, (_quantity = action.quantity) !== null && _quantity !== void 0 ? _quantity : 1);
                return generateFinalState(state, items);
            }
        case 'ADD_ITEM':
            {
                const items = (0,cart_utils/* addItem */.jX)(state.items, action.item);
                return generateFinalState(state, items);
            }
        case 'REMOVE_ITEM':
            {
                const items = (0,cart_utils/* removeItem */.cl)(state.items, action.id);
                return generateFinalState(state, items);
            }
        case 'UPDATE_ITEM':
            {
                const items = (0,cart_utils/* updateItem */.$G)(state.items, action.id, action.item);
                return generateFinalState(state, items);
            }
        case 'SET_VERIFIED_RESPONSE':
            {
                return {
                    ...state,
                    verifiedResponse: action.response
                };
            }
        case 'UPDATE_CART_LANGUAGE':
            {
                return {
                    ...initialState,
                    language: action.language
                };
            }
        case 'RESET_CART':
            return {
                ...initialState,
                language: state.language
            };
        default:
            return state;
    }
}
const generateFinalState = (state, items)=>{
    const totalUniqueItems = (0,cart_utils/* calculateUniqueItems */.tm)(items);
    return {
        ...state,
        items: (0,cart_utils/* calculateItemTotals */.pQ)(items),
        totalItems: (0,cart_utils/* calculateTotalItems */.yL)(items),
        totalUniqueItems,
        total: (0,cart_utils/* calculateTotal */.tf)(items),
        isEmpty: totalUniqueItems === 0
    };
};

// EXTERNAL MODULE: external "react-use/lib/useLocalStorage"
var useLocalStorage_ = __webpack_require__(7139);
var useLocalStorage_default = /*#__PURE__*/__webpack_require__.n(useLocalStorage_);
;// CONCATENATED MODULE: ./src/lib/hooks/use-local-storage.ts


// EXTERNAL MODULE: ./src/lib/constants/index.ts
var constants = __webpack_require__(6482);
;// CONCATENATED MODULE: ./src/components/cart/lib/cart.context.tsx






const cartContext = /*#__PURE__*/ external_react_default().createContext(undefined);
cartContext.displayName = 'CartContext';
const useCart = ()=>{
    const context = external_react_default().useContext(cartContext);
    if (context === undefined) {
        throw new Error(`useCart must be used within a CartProvider`);
    }
    return context;
};
const CartProvider = (props)=>{
    const [savedCart, saveCart] = useLocalStorage_default()(constants/* CART_KEY */.qW, JSON.stringify(initialState));
    const [state, dispatch] = external_react_default().useReducer(cartReducer, JSON.parse(savedCart));
    external_react_default().useEffect(()=>{
        if (state.isEmpty) {
            resetCart();
        }
    }, [
        state.isEmpty
    ]);
    external_react_default().useEffect(()=>{
        saveCart(JSON.stringify(state));
    }, [
        state,
        saveCart
    ]);
    const addItemToCart = (item, quantity)=>dispatch({
            type: 'ADD_ITEM_WITH_QUANTITY',
            item,
            quantity
        })
    ;
    const removeItemFromCart = (id)=>dispatch({
            type: 'REMOVE_ITEM_OR_QUANTITY',
            id
        })
    ;
    const clearItemFromCart = (id)=>dispatch({
            type: 'REMOVE_ITEM',
            id
        })
    ;
    const setVerifiedResponse = (response)=>dispatch({
            type: 'SET_VERIFIED_RESPONSE',
            response
        })
    ;
    const isInCart = (0,external_react_.useCallback)((id)=>!!(0,cart_utils/* getItem */.rV)(state.items, id)
    , [
        state.items
    ]);
    const getItemFromCart = (0,external_react_.useCallback)((id)=>(0,cart_utils/* getItem */.rV)(state.items, id)
    , [
        state.items
    ]);
    const isInStock = (0,external_react_.useCallback)((id)=>(0,cart_utils/* inStock */.pz)(state.items, id)
    , [
        state.items
    ]);
    const resetCart = ()=>dispatch({
            type: 'RESET_CART'
        })
    ;
    const updateCartLanguage = (language)=>dispatch({
            type: 'UPDATE_CART_LANGUAGE',
            language
        })
    ;
    const value = external_react_default().useMemo(()=>({
            ...state,
            addItemToCart,
            removeItemFromCart,
            clearItemFromCart,
            getItemFromCart,
            setVerifiedResponse,
            isInCart,
            isInStock,
            resetCart,
            updateCartLanguage
        })
    , [
        getItemFromCart,
        isInCart,
        isInStock,
        state
    ]);
    return(/*#__PURE__*/ jsx_runtime_.jsx(cartContext.Provider, {
        value: value,
        ...props
    }));
};


/***/ }),

/***/ 14:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Kv": () => (/* binding */ addItemWithQuantity),
/* harmony export */   "um": () => (/* binding */ removeItemOrQuantity),
/* harmony export */   "jX": () => (/* binding */ addItem),
/* harmony export */   "rV": () => (/* binding */ getItem),
/* harmony export */   "$G": () => (/* binding */ updateItem),
/* harmony export */   "cl": () => (/* binding */ removeItem),
/* harmony export */   "pz": () => (/* binding */ inStock),
/* harmony export */   "pQ": () => (/* binding */ calculateItemTotals),
/* harmony export */   "tf": () => (/* binding */ calculateTotal),
/* harmony export */   "yL": () => (/* binding */ calculateTotalItems),
/* harmony export */   "tm": () => (/* binding */ calculateUniqueItems),
/* harmony export */   "eA": () => (/* binding */ calculatePaidTotal)
/* harmony export */ });
function addItemWithQuantity(items, item, quantity) {
    if (quantity <= 0) {
        throw new Error("cartQuantity can't be zero or less than zero");
    }
    const existingItemIndex = items.findIndex((existingItem)=>existingItem.id === item.id
    );
    if (existingItemIndex > -1) {
        const newItems = [
            ...items
        ];
        newItems[existingItemIndex].quantity += quantity;
        return newItems;
    }
    return [
        ...items,
        {
            ...item,
            quantity
        }
    ];
}
function removeItemOrQuantity(items, id, quantity) {
    return items.reduce((acc, item)=>{
        if (item.id === id) {
            const newQuantity = item.quantity - quantity;
            return newQuantity > 0 ? [
                ...acc,
                {
                    ...item,
                    quantity: newQuantity
                }
            ] : [
                ...acc
            ];
        }
        return [
            ...acc,
            item
        ];
    }, []);
}
// Simple CRUD for Item
function addItem(items, item) {
    return [
        ...items,
        item
    ];
}
function getItem(items, id) {
    return items.find((item)=>item.id === id
    );
}
function updateItem(items, id, item) {
    return items.map((existingItem)=>existingItem.id === id ? {
            ...existingItem,
            ...item
        } : existingItem
    );
}
function removeItem(items, id) {
    return items.filter((existingItem)=>existingItem.id !== id
    );
}
function inStock(items, id) {
    const item = getItem(items, id);
    if (item) return item['quantity'] < item['stock'];
    return false;
}
const calculateItemTotals = (items)=>items.map((item)=>({
            ...item,
            itemTotal: item.price * item.quantity
        })
    )
;
const calculateTotal = (items)=>items.reduce((total, item)=>total + item.quantity * item.price
    , 0)
;
const calculateTotalItems = (items)=>items.reduce((sum, item)=>sum + item.quantity
    , 0)
;
const calculateUniqueItems = (items)=>items.length
;
const calculatePaidTotal = ({ totalAmount , tax , shipping_charge  }, discount)=>{
    let paidTotal = totalAmount + tax + shipping_charge;
    if (discount) {
        paidTotal = paidTotal - discount;
    }
    return paidTotal;
};


/***/ }),

/***/ 5054:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "y": () => (/* binding */ useDrawer)
/* harmony export */ });
/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2451);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([jotai__WEBPACK_IMPORTED_MODULE_0__]);
jotai__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const drawerAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_0__.atom)({
    isOpen: false,
    view: 'CART_VIEW'
});
function useDrawer() {
    const [state, setState] = (0,jotai__WEBPACK_IMPORTED_MODULE_0__.useAtom)(drawerAtom);
    const openDrawer = (view)=>setState({
            ...state,
            isOpen: true,
            view
        })
    ;
    const closeDrawer = ()=>setState({
            ...state,
            isOpen: false
        })
    ;
    return {
        ...state,
        openDrawer,
        closeDrawer
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3031:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "T": () => (/* binding */ CloseIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function CloseIcon(props) {
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        viewBox: "0 0 20 20",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            d: "M17.0707 15.6566L11.414 9.99981L17.0708 4.34292C17.4611 3.95268 17.4611 3.31903 17.0707 2.92866C16.6805 2.53842 16.0468 2.53842 15.6566 2.92866L9.99969 8.58556L4.3428 2.92866C3.95256 2.53842 3.31891 2.53842 2.92867 2.92866C2.5383 3.31903 2.5383 3.95268 2.92854 4.34292L8.58544 9.99981L2.92867 15.6566C2.5383 16.0469 2.5383 16.6806 2.92854 17.0708C3.31891 17.4612 3.95256 17.4612 4.34293 17.0708L9.99969 11.4141L15.6565 17.0708C16.0468 17.4612 16.6805 17.4612 17.0708 17.0708C17.4611 16.6806 17.4611 16.0469 17.0707 15.6566Z",
            fill: "currentColor",
            stroke: "currentColor",
            strokeWidth: "0.1"
        })
    }));
}


/***/ }),

/***/ 5029:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I": () => (/* binding */ CompactGridIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const CompactGridIcon = (props)=>{
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        viewBox: "0 0 20 20",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M17.7003 10.7H11.4003C11.0139 10.7 10.7003 11.0136 10.7003 11.3999V17.6999C10.7003 18.0863 11.0139 18.3999 11.4003 18.3999H17.7003C18.0867 18.3999 18.4003 18.0863 18.4003 17.6999V11.3999C18.4003 11.0136 18.0867 10.7 17.7003 10.7Z",
                fill: "currentColor"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M2.30004 18.3999H8.60003C8.98643 18.3999 9.30003 18.0863 9.30003 17.6999V11.3999C9.30003 11.0136 8.98643 10.7 8.60003 10.7H2.30004C1.91364 10.7 1.60004 11.0136 1.60004 11.3999V17.6999C1.60004 18.0863 1.91364 18.3999 2.30004 18.3999Z",
                fill: "currentColor"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M17.7 1.59998H2.30004C1.91364 1.59998 1.60004 1.91358 1.60004 2.29998V8.59997C1.60004 8.98637 1.91364 9.29997 2.30004 9.29997H17.7C18.0864 9.29997 18.4 8.98637 18.4 8.59997V2.29998C18.4 1.91358 18.0864 1.59998 17.7 1.59998Z",
                fill: "currentColor"
            })
        ]
    }));
};


/***/ }),

/***/ 6647:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "r": () => (/* binding */ DetailsIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const DetailsIcon = (props)=>{
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        viewBox: "0 0 22 22",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M20.0911 1H12.8184C12.3163 1 11.9093 1.40703 11.9093 1.9091C11.9093 2.41117 12.3163 2.8182 12.8184 2.8182H17.8964L8.53923 12.1754C8.18419 12.5304 8.18419 13.106 8.53923 13.461C8.71669 13.6385 8.94935 13.7273 9.182 13.7273C9.41466 13.7273 9.64735 13.6386 9.82485 13.461L19.182 4.10383V9.18184C19.182 9.68391 19.5891 10.0909 20.0911 10.0909C20.5932 10.0909 21.0002 9.68391 21.0002 9.18184V1.9091C21.0002 1.40703 20.5932 1 20.0911 1Z",
                fill: "currentColor"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M16.4545 10.0909C15.9525 10.0909 15.5454 10.4979 15.5454 11V19.1818H2.81816V6.45452H11C11.5021 6.45452 11.9091 6.04749 11.9091 5.54541C11.9091 5.04334 11.5021 4.63635 11 4.63635H1.9091C1.40703 4.63635 1 5.04338 1 5.54545V20.0909C1 20.593 1.40703 21 1.9091 21H16.4546C16.9566 21 17.3637 20.593 17.3637 20.0909V11C17.3636 10.4979 16.9566 10.0909 16.4545 10.0909Z",
                fill: "currentColor"
            })
        ]
    }));
};


/***/ }),

/***/ 3723:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => (/* binding */ NormalGridIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const NormalGridIcon = (props)=>{
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        fill: "none",
        viewBox: "0 0 18 18",
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M16.6996 0.599976H1.29961C0.913209 0.599976 0.599609 0.913575 0.599609 1.29998V7.59997C0.599609 7.98637 0.913209 8.29997 1.29961 8.29997H16.6996C17.086 8.29997 17.3996 7.98637 17.3996 7.59997V1.29998C17.3996 0.913575 17.086 0.599976 16.6996 0.599976Z",
                fill: "currentColor"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M16.6996 9.59998H1.29961C0.913209 9.59998 0.599609 9.91358 0.599609 10.3V16.6C0.599609 16.9864 0.913209 17.3 1.29961 17.3H16.6996C17.086 17.3 17.3996 16.9864 17.3996 16.6V10.3C17.3996 9.91358 17.086 9.59998 16.6996 9.59998Z",
                fill: "currentColor"
            })
        ]
    }));
};


/***/ }),

/***/ 606:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "P": () => (/* binding */ PreviewIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const PreviewIcon = (props)=>{
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        viewBox: "0 0 22 22",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            d: "M15.9309 16.649L15.6144 16.3326L15.265 16.6123C13.7999 17.7851 11.9486 18.49 9.93592 18.49C5.22202 18.49 1.38 14.6412 1.38 9.92617C1.38 5.21168 5.22146 1.37024 9.93592 1.37024C14.6505 1.37024 18.4938 5.21182 18.4938 9.92617C18.4938 11.9413 17.788 13.7958 16.6141 15.2633L16.3345 15.6127L16.651 15.9292L20.4185 19.6967C20.5083 19.7924 20.5577 19.9192 20.5562 20.0506C20.5546 20.1836 20.5011 20.3106 20.407 20.4046C20.3129 20.4986 20.1858 20.5519 20.0528 20.5533C19.9213 20.5546 19.7944 20.505 19.6987 20.4148L15.9309 16.649ZM17.479 9.92617C17.479 5.74725 14.1148 2.38313 9.93592 2.38313C5.757 2.38313 2.39287 5.74725 2.39287 9.92617C2.39287 14.1044 5.75627 17.4771 9.93592 17.4771C14.1156 17.4771 17.479 14.1044 17.479 9.92617Z",
            fill: "currentColor",
            stroke: "currentColor"
        })
    }));
};


/***/ }),

/***/ 321:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": () => (/* binding */ SpinnerIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const SpinnerIcon = (props)=>{
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        fill: "none",
        viewBox: "0 0 20 20",
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M9.99991 0.454544C9.49785 0.454544 9.09082 0.861575 9.09082 1.36364V5C9.09082 5.50207 9.49785 5.9091 9.99991 5.9091C10.502 5.9091 10.909 5.50207 10.909 5V1.36364C10.909 0.861575 10.502 0.454544 9.99991 0.454544Z",
                fill: "currentColor"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M9.99991 15.9091C9.49785 15.9091 9.09082 16.3161 9.09082 16.8182V18.6364C9.09082 19.1384 9.49785 19.5455 9.99991 19.5455C10.502 19.5455 10.909 19.1384 10.909 18.6364V16.8182C10.909 16.3161 10.502 15.9091 9.99991 15.9091Z",
                fill: "currentColor"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M19.0914 9.54546H15.455C14.9529 9.54546 14.5459 9.95249 14.5459 10.4545C14.5459 10.9566 14.9529 11.3636 15.455 11.3636H19.0914C19.5934 11.3636 20.0004 10.9566 20.0004 10.4545C20.0004 9.95249 19.5934 9.54546 19.0914 9.54546Z",
                fill: "currentColor"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M5.45455 10.4545C5.45455 9.95249 5.04752 9.54546 4.54545 9.54546H0.909091C0.40703 9.54546 0 9.95249 0 10.4545C0 10.9566 0.40703 11.3636 0.909091 11.3636H4.54545C5.04752 11.3636 5.45455 10.9566 5.45455 10.4545Z",
                fill: "currentColor"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M17.0705 3.38345C16.7155 3.02841 16.1399 3.02841 15.7849 3.38345L13.2135 5.95478C12.8585 6.30981 12.8585 6.88539 13.2135 7.24042C13.3911 7.41794 13.6237 7.50673 13.8563 7.50673C14.089 7.50673 14.3217 7.418 14.4992 7.24042L17.0705 4.66908C17.4255 4.31405 17.4255 3.73848 17.0705 3.38345Z",
                fill: "currentColor"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M5.50052 13.6687L2.92931 16.24C2.57434 16.595 2.57434 17.1706 2.92931 17.5256C3.10683 17.7031 3.33949 17.7919 3.57216 17.7919C3.80483 17.7919 4.03749 17.7031 4.21501 17.5256L6.78628 14.9543C7.14125 14.5993 7.14125 14.0237 6.78628 13.6687C6.43119 13.3136 5.85561 13.3136 5.50052 13.6687Z",
                fill: "currentColor"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M4.21499 3.38345C3.85996 3.02842 3.28439 3.02848 2.92936 3.38345C2.57433 3.73848 2.57433 4.31406 2.92936 4.66909L5.50063 7.24043C5.67821 7.41794 5.91081 7.50673 6.14348 7.50673C6.37609 7.50673 6.60881 7.41794 6.78627 7.24049C7.1413 6.88546 7.1413 6.30988 6.78627 5.95485L4.21499 3.38345Z",
                fill: "currentColor"
            })
        ]
    }));
};


/***/ }),

/***/ 5335:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DY": () => (/* binding */ ModalProvider),
/* harmony export */   "X9": () => (/* binding */ useModalState),
/* harmony export */   "SO": () => (/* binding */ useModalAction)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const initialState = {
    view: undefined,
    isOpen: false,
    data: null
};
function modalReducer(state, action) {
    switch(action.type){
        case 'open':
            return {
                ...state,
                view: action.view,
                data: action.payload,
                isOpen: true
            };
        case 'close':
            return {
                ...state,
                view: undefined,
                data: null,
                isOpen: false
            };
        default:
            throw new Error('Unknown Modal Action!');
    }
}
const ModalStateContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createContext(initialState);
ModalStateContext.displayName = 'ModalStateContext';
const ModalActionContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createContext(undefined);
ModalActionContext.displayName = 'ModalActionContext';
const ModalProvider = ({ children  })=>{
    const [state, dispatch] = react__WEBPACK_IMPORTED_MODULE_1___default().useReducer(modalReducer, initialState);
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ModalStateContext.Provider, {
        value: state,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ModalActionContext.Provider, {
            value: dispatch,
            children: children
        })
    }));
};
function useModalState() {
    const context = react__WEBPACK_IMPORTED_MODULE_1___default().useContext(ModalStateContext);
    if (context === undefined) {
        throw new Error(`useModalState must be used within a ModalProvider`);
    }
    return context;
}
function useModalAction() {
    const dispatch = react__WEBPACK_IMPORTED_MODULE_1___default().useContext(ModalActionContext);
    if (dispatch === undefined) {
        throw new Error(`useModalAction must be used within a ModalProvider`);
    }
    return {
        openModal (view, payload) {
            dispatch({
                type: 'open',
                view,
                payload
            });
        },
        closeModal () {
            dispatch({
                type: 'close'
            });
        }
    };
}


/***/ }),

/***/ 2100:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Card)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6197);
/* harmony import */ var _components_ui_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3879);
/* harmony import */ var _components_ui_links_anchor_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3813);
/* harmony import */ var _components_modal_views_context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5335);
/* harmony import */ var _config_routes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(551);
/* harmony import */ var _lib_hooks_use_price__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3949);
/* harmony import */ var _components_icons_preview_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(606);
/* harmony import */ var _components_icons_details_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6647);
/* harmony import */ var _assets_images_placeholders_product_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(8818);
/* harmony import */ var _components_product_grid_switcher__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1575);
/* harmony import */ var _lib_framer_motion_fade_in_bottom__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(2554);
/* harmony import */ var _lib_is_free__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(2879);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_13__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_3__, _lib_hooks_use_price__WEBPACK_IMPORTED_MODULE_8__, _components_product_grid_switcher__WEBPACK_IMPORTED_MODULE_12__]);
([framer_motion__WEBPACK_IMPORTED_MODULE_3__, _lib_hooks_use_price__WEBPACK_IMPORTED_MODULE_8__, _components_product_grid_switcher__WEBPACK_IMPORTED_MODULE_12__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
















function Card({ product  }) {
    var ref;
    const { name , slug , image , shop  } = product !== null && product !== void 0 ? product : {};
    const { openModal  } = (0,_components_modal_views_context__WEBPACK_IMPORTED_MODULE_6__/* .useModalAction */ .SO)();
    const { isGridCompact  } = (0,_components_product_grid_switcher__WEBPACK_IMPORTED_MODULE_12__/* .useGridSwitcher */ .W)();
    const { price , basePrice  } = (0,_lib_hooks_use_price__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .ZP)({
        amount: product.sale_price ? product.sale_price : product.price,
        baseAmount: product.price
    });
    const goToDetailsPage = (e)=>{
        e.stopPropagation();
        next_router__WEBPACK_IMPORTED_MODULE_1___default().push(_config_routes__WEBPACK_IMPORTED_MODULE_7__/* ["default"].productUrl */ .Z.productUrl(slug));
    };
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_13__.useTranslation)('common');
    var ref1;
    const isFreeItem = (0,_lib_is_free__WEBPACK_IMPORTED_MODULE_14__/* .isFree */ .N)((ref1 = product === null || product === void 0 ? void 0 : product.sale_price) !== null && ref1 !== void 0 ? ref1 : product === null || product === void 0 ? void 0 : product.price);
    var ref2, ref3;
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {
        variants: (0,_lib_framer_motion_fade_in_bottom__WEBPACK_IMPORTED_MODULE_15__/* .fadeInBottomWithScaleX */ .sh)(),
        title: name,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "group relative flex aspect-[3/2] w-full justify-center overflow-hidden",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_image__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        alt: name,
                        layout: "fill",
                        quality: 100,
                        objectFit: "cover",
                        src: (ref2 = image === null || image === void 0 ? void 0 : image.thumbnail) !== null && ref2 !== void 0 ? ref2 : _assets_images_placeholders_product_svg__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z,
                        className: "bg-light-500 dark:bg-dark-400"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        onClick: ()=>openModal('PRODUCT_DETAILS', {
                                slug
                            })
                        ,
                        className: "absolute top-0 left-0 z-10 flex h-full w-full cursor-pointer items-center justify-center gap-9 bg-dark/60 p-4 opacity-0 backdrop-blur-sm transition-all group-hover:gap-5 group-hover:opacity-100 dark:bg-dark/70",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('text-center font-medium text-light', isGridCompact ? 'text-xs' : 'text-13px'),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('mb-2 flex items-center justify-center rounded-full bg-dark-800 text-light backdrop-blur-sm transition-all hover:bg-brand', isGridCompact ? 'h-11 w-11' : 'h-[50px] w-[50px]'),
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons_preview_icon__WEBPACK_IMPORTED_MODULE_9__/* .PreviewIcon */ .P, {
                                            className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(isGridCompact ? 'h-4 w-4' : 'h-5 w-5')
                                        })
                                    }),
                                    t('text-preview')
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                onClick: goToDetailsPage,
                                className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('relative z-[11] text-center font-medium text-light', isGridCompact ? 'text-xs' : 'text-13px'),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('mb-2 flex items-center justify-center rounded-full bg-dark-800 text-light backdrop-blur-sm transition-all hover:bg-brand', isGridCompact ? 'h-11 w-11' : 'h-[50px] w-[50px]'),
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons_details_icon__WEBPACK_IMPORTED_MODULE_10__/* .DetailsIcon */ .r, {
                                            className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(isGridCompact ? 'h-4 w-4' : 'h-5 w-5')
                                        })
                                    }),
                                    t('text-details')
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex items-start justify-between pt-3.5",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "relative flex h-8 w-8 flex-shrink-0 4xl:h-9 4xl:w-9",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_image__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                            alt: shop === null || shop === void 0 ? void 0 : shop.name,
                            layout: "fill",
                            quality: 100,
                            objectFit: "cover",
                            src: (ref3 = shop === null || shop === void 0 ? void 0 : (ref = shop.logo) === null || ref === void 0 ? void 0 : ref.thumbnail) !== null && ref3 !== void 0 ? ref3 : _assets_images_placeholders_product_svg__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z,
                            className: "rounded-full bg-light-500 dark:bg-dark-400"
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "-mt-[1px] flex flex-col truncate ltr:mr-auto ltr:pl-2.5 rtl:ml-auto rtl:pr-2.5 rtl:text-right",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                title: name,
                                className: "mb-0.5 truncate font-medium text-dark-100 dark:text-light",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_links_anchor_link__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                    href: _config_routes__WEBPACK_IMPORTED_MODULE_7__/* ["default"].productUrl */ .Z.productUrl(slug),
                                    children: name
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_links_anchor_link__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                href: _config_routes__WEBPACK_IMPORTED_MODULE_7__/* ["default"].shopUrl */ .Z.shopUrl(shop === null || shop === void 0 ? void 0 : shop.slug),
                                className: "font-medium text-light-base hover:text-brand dark:text-dark-800 dark:hover:text-brand",
                                children: shop === null || shop === void 0 ? void 0 : shop.name
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex flex-shrink-0 flex-col items-end pl-2.5",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "rounded-2xl bg-light-500 px-1.5 py-0.5 text-13px font-semibold uppercase text-brand dark:bg-dark-300 dark:text-brand-dark",
                                children: isFreeItem ? t('text-free') : price
                            }),
                            !isFreeItem && basePrice && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("del", {
                                className: "px-1 text-13px font-medium text-dark-900 dark:text-dark-700",
                                children: basePrice
                            })
                        ]
                    })
                ]
            })
        ]
    }));
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1575:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W": () => (/* binding */ useGridSwitcher),
/* harmony export */   "Z": () => (/* binding */ GridSwitcher)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2451);
/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4685);
/* harmony import */ var _components_icons_compact_grid_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5029);
/* harmony import */ var _components_icons_normal_grid_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3723);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([jotai__WEBPACK_IMPORTED_MODULE_1__]);
jotai__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const gridCompactViewAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_1__.atom)(true);
function useGridSwitcher() {
    const [isGridCompact, setIsGridCompact] = (0,jotai__WEBPACK_IMPORTED_MODULE_1__.useAtom)(gridCompactViewAtom);
    return {
        isGridCompact,
        setIsGridCompact
    };
}
function GridSwitcher() {
    const { isGridCompact , setIsGridCompact  } = useGridSwitcher();
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_button__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        onClick: ()=>setIsGridCompact(!isGridCompact)
        ,
        variant: "icon",
        "aria-label": "Layout",
        className: "hidden 2xl:flex 2xl:w-5",
        children: isGridCompact ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons_compact_grid_icon__WEBPACK_IMPORTED_MODULE_3__/* .CompactGridIcon */ .I, {
            className: "h-[18px] w-[18px]"
        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons_normal_grid_icon__WEBPACK_IMPORTED_MODULE_4__/* .NormalGridIcon */ .h, {
            className: "h-[16px] w-[16px]"
        })
    }));
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6162:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Grid)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6197);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4685);
/* harmony import */ var _components_product_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2100);
/* harmony import */ var _components_product_product_loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2285);
/* harmony import */ var _components_product_grid_switcher__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1575);
/* harmony import */ var _components_ui_item_not_found__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5259);
/* harmony import */ var _lib_range_map__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(994);
/* harmony import */ var _lib_framer_motion_stagger_transition__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3531);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_8__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_1__, _components_product_card__WEBPACK_IMPORTED_MODULE_4__, _components_product_grid_switcher__WEBPACK_IMPORTED_MODULE_6__]);
([framer_motion__WEBPACK_IMPORTED_MODULE_1__, _components_product_card__WEBPACK_IMPORTED_MODULE_4__, _components_product_grid_switcher__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











function Grid({ products , onLoadMore , hasNextPage , isLoadingMore , isLoading , limit =15  }) {
    const { isGridCompact  } = (0,_components_product_grid_switcher__WEBPACK_IMPORTED_MODULE_6__/* .useGridSwitcher */ .W)();
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_8__.useTranslation)('common');
    if (!isLoading && !products.length) {
        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_item_not_found__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
            title: t('text-no-products-found'),
            message: t('text-no-products-found-message'),
            className: "px-4 pt-5 pb-10 md:px-6 md:pt-6 lg:px-7 lg:pb-12 3xl:px-8"
        }));
    }
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "px-4 pt-5 pb-9 md:px-6 md:pb-10 md:pt-6 lg:px-7 lg:pb-12 3xl:px-8",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {
                variants: (0,_lib_framer_motion_stagger_transition__WEBPACK_IMPORTED_MODULE_9__/* .staggerTransition */ .s)(0.025),
                className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('grid grid-cols-1 gap-5 xs:grid-cols-2 md:grid-cols-[repeat(auto-fill,minmax(300px,1fr))] lg:gap-6 3xl:gap-7', {
                    '2xl:grid-cols-4 3xl:grid-cols-5 4xl:grid-cols-[repeat(auto-fill,minmax(300px,1fr))]': isGridCompact,
                    '2xl:grid-cols-3 3xl:grid-cols-[repeat(auto-fill,minmax(340px,1fr))] 4xl:grid-cols-[repeat(auto-fill,minmax(380px,1fr))]': !isGridCompact
                }),
                children: isLoading && !products.length ? (0,_lib_range_map__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)(limit, (i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_product_product_loader__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        uniqueKey: `product-${i}`
                    }, i)
                ) : products.map((product)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_product_card__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        product: product
                    }, product.id)
                )
            }),
            hasNextPage && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "mt-8 grid place-content-center md:mt-10",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_button__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                    onClick: onLoadMore,
                    disabled: isLoadingMore,
                    isLoading: isLoadingMore,
                    children: t('text-loadmore')
                })
            })
        ]
    }));
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2285:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ProductCardLoader)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_content_loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8782);
/* harmony import */ var react_content_loader__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_content_loader__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_hooks_use_is_dark_mode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(269);
/* harmony import */ var _lib_hooks_use_is_mounted__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3741);




function ProductCardLoader(props) {
    const isMounted = (0,_lib_hooks_use_is_mounted__WEBPACK_IMPORTED_MODULE_3__/* .useIsMounted */ .t)();
    const { isDarkMode  } = (0,_lib_hooks_use_is_dark_mode__WEBPACK_IMPORTED_MODULE_2__/* .useIsDarkMode */ .G)();
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_content_loader__WEBPACK_IMPORTED_MODULE_1___default()), {
        speed: 2,
        width: '100%',
        height: '100%',
        viewBox: "0 0 480 360",
        backgroundColor: isMounted && isDarkMode ? '#505050' : '#d0d0d0',
        foregroundColor: isMounted && isDarkMode ? '#606060' : '#c0c0c0',
        ...props,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                cx: "30",
                cy: "330",
                r: "30"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                x: "75",
                y: "310",
                rx: "3",
                ry: "3",
                width: "40%",
                height: "12"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                x: "75",
                y: "340",
                rx: "3",
                ry: "3",
                width: "20%",
                height: "10"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                x: "400",
                y: "310",
                rx: "18",
                ry: "18",
                width: "80",
                height: "36"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                x: "0",
                y: "0",
                rx: "0",
                ry: "0",
                width: "100%",
                height: "280"
            })
        ]
    }));
};


/***/ }),

/***/ 942:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ SearchResults)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _data_product__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3163);
/* harmony import */ var _components_product_grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6162);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_data_product__WEBPACK_IMPORTED_MODULE_1__, _components_product_grid__WEBPACK_IMPORTED_MODULE_2__]);
([_data_product__WEBPACK_IMPORTED_MODULE_1__, _components_product_grid__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



function SearchResults({ searchText  }) {
    const { products , loadMore , hasNextPage , isLoadingMore , isLoading  } = (0,_data_product__WEBPACK_IMPORTED_MODULE_1__/* .useProducts */ .rn)({
        name: searchText
    });
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_product_grid__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        products: products,
        onLoadMore: loadMore,
        hasNextPage: hasNextPage,
        isLoadingMore: isLoadingMore,
        isLoading: isLoading
    }));
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8222:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "R": () => (/* binding */ useSearch),
/* harmony export */   "Z": () => (/* binding */ SearchView)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2451);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6197);
/* harmony import */ var _lib_hooks_use_lock_body_scroll__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8378);
/* harmony import */ var _components_icons_close_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3031);
/* harmony import */ var _components_search_search_results__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(942);
/* harmony import */ var _lib_framer_motion_fade_in_out__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2341);
/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4685);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([jotai__WEBPACK_IMPORTED_MODULE_3__, framer_motion__WEBPACK_IMPORTED_MODULE_4__, _components_search_search_results__WEBPACK_IMPORTED_MODULE_7__]);
([jotai__WEBPACK_IMPORTED_MODULE_3__, framer_motion__WEBPACK_IMPORTED_MODULE_4__, _components_search_search_results__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










const searchAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_3__.atom)(false);
function useSearch() {
    const [isOpen, setIsOpen] = (0,jotai__WEBPACK_IMPORTED_MODULE_3__.useAtom)(searchAtom);
    function openSearch() {
        setIsOpen(true);
    }
    function closeSearch() {
        setIsOpen(false);
    }
    return {
        isOpen,
        openSearch,
        closeSearch
    };
}
function SearchView() {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    let { 0: searchText , 1: setSearchText  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
    const { isOpen , closeSearch  } = useSearch();
    (0,_lib_hooks_use_lock_body_scroll__WEBPACK_IMPORTED_MODULE_5__/* .useLockBodyScroll */ .N)(isOpen);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        // close search modal when route change
        router.events.on('routeChangeStart', closeSearch);
        return ()=>{
            router.events.off('routeChangeStart', closeSearch);
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__.AnimatePresence, {
        children: isOpen && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {
            initial: "exit",
            animate: "enter",
            exit: "exit",
            variants: (0,_lib_framer_motion_fade_in_out__WEBPACK_IMPORTED_MODULE_9__/* .fadeInOut */ .I)(),
            className: "search-container fixed inset-0 z-50 h-full w-full overflow-auto bg-light-200 p-5 py-0 dark:bg-dark-250 sm:px-6 md:px-8 lg:px-10 xl:px-12 3xl:px-14",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "search-header sticky top-0 z-20 -mx-0.5 mb-3 border-b border-light-500/80 bg-light-200 pb-1.5 pt-10 dark:border-dark-500 dark:bg-dark-250 sm:pt-12 sm:pb-2 md:pb-3 xl:pt-14 3xl:pb-5",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "relative",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    type: "text",
                                    autoFocus: true,
                                    value: searchText,
                                    onChange: (e)=>setSearchText(e.target.value)
                                    ,
                                    placeholder: "Type anything to search...",
                                    className: "w-full border-0 bg-transparent px-1 text-base text-dark outline-none focus:ring-0 dark:text-light md:text-lg lg:text-xl 3xl:text-[22px] 4xl:text-2xl"
                                }),
                                searchText && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_button__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                    variant: "text",
                                    onClick: ()=>setSearchText('')
                                    ,
                                    className: "absolute top-1/2 -mt-2 px-1 font-normal opacity-70 hover:opacity-100 ltr:right-0 rtl:left-0",
                                    children: "Clear"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                            type: "button",
                            className: "absolute top-5 -m-2 p-2 text-dark-900 outline-none transition-all hover:text-dark ltr:right-0 rtl:left-0 dark:text-dark-800 hover:dark:text-light-200 xl:top-6",
                            onClick: closeSearch,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "sr-only",
                                    children: "Close Search"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons_close_icon__WEBPACK_IMPORTED_MODULE_6__/* .CloseIcon */ .T, {
                                    className: "h-4 w-4 sm:h-5 sm:w-5 3xl:h-6 3xl:w-6"
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "search-results -mx-4 flex min-h-[84%] flex-col md:-mx-6 lg:-mx-7 lg:py-2 3xl:-mx-8",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_search_search_results__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                        searchText: searchText
                    })
                })
            ]
        })
    }));
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4685:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_icons_spinner_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(321);




const variantClasses = {
    text: 'text-dark dark:text-light',
    outline: 'min-h-[46px] sm:h-12 rounded py-3 px-4 md:px-5 bg-transparent border border-light-500 dark:border-dark-600 text-dark dark:text-light hover:bg-light-400 focus:bg-light-500 dark:hover:bg-dark-600 dark:focus:bg-dark-600',
    solid: 'min-h-[46px] sm:h-12 rounded py-3 px-4 md:px-5 bg-brand text-white hover:bg-brand-dark focus:bg-brand-dark',
    icon: 'transition-colors duration-200 text-dark-800 hover:text-dark-900 dark:hover:text-light-600',
    solidDanger: 'min-h-[46px] sm:h-12 rounded py-3 px-4 md:px-5 bg-red-500 text-white hover:bg-red-600 focus:bg-red-600'
};
const Button = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(({ className , isLoading , disabled , children , variant ='solid' , ...props }, ref)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
        ref: ref,
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('transition-fill-colors flex items-center justify-center gap-2 font-semibold duration-200', isLoading || disabled ? 'pointer-events-none cursor-not-allowed' : 'pointer-events-auto cursor-pointer', disabled ? 'opacity-70' : 'opacity-100', variantClasses[variant], className),
        ...props,
        children: [
            isLoading && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons_spinner_icon__WEBPACK_IMPORTED_MODULE_3__/* .SpinnerIcon */ .L, {
                className: "h-auto w-5 animate-spin"
            }),
            children
        ]
    })
);
Button.displayName = 'Button';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);


/***/ }),

/***/ 3879:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* reexport safe */ next_image__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5675);



/***/ }),

/***/ 5259:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ ItemNotFound)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: ./src/lib/hooks/use-is-dark-mode.ts
var use_is_dark_mode = __webpack_require__(269);
// EXTERNAL MODULE: ./src/lib/hooks/use-is-mounted.ts
var use_is_mounted = __webpack_require__(3741);
;// CONCATENATED MODULE: ./src/components/icons/error-file-icon.tsx



const ErrorFileIcon = (props)=>{
    const isMounted = (0,use_is_mounted/* useIsMounted */.t)();
    const { isDarkMode  } = (0,use_is_dark_mode/* useIsDarkMode */.G)();
    return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: isMounted && isDarkMode ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
            fill: "none",
            viewBox: "0 0 130 126",
            xmlns: "http://www.w3.org/2000/svg",
            ...props,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M61.9847 125.251C96.2179 125.251 123.969 97.3824 123.969 63.0044C123.969 28.6264 96.2179 0.757568 61.9847 0.757568C27.7515 0.757568 0 28.6264 0 63.0044C0 97.3824 27.7515 125.251 61.9847 125.251Z",
                    fill: "currentColor"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M112.876 36.0507V46.7358V105.156C112.876 105.156 43.9637 105.156 39.2298 105.156C36.8673 105.156 34.7269 104.193 33.1726 102.641C31.6272 101.08 30.668 98.9397 30.668 96.5583V30.7527H60.2171L64.6312 36.0418H112.876V36.0507Z",
                    fill: "#F7931E"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M33.1193 70.0775C45.294 70.0775 55.1635 60.1663 55.1635 47.9401C55.1635 35.714 45.294 25.8027 33.1193 25.8027C20.9447 25.8027 11.0752 35.714 11.0752 47.9401C11.0752 60.1663 20.9447 70.0775 33.1193 70.0775Z",
                    fill: "white"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M16.7686 62.7816C16.7686 62.7816 25.6679 74.8849 39.9406 76.1693C39.9406 76.1693 37.285 75.3665 36.0061 69.8902C34.7183 64.4049 18.7314 60.3021 16.7686 62.7816Z",
                    fill: "white"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M35.509 47.9401L42.3034 41.1169C42.9607 40.4569 42.9607 39.3777 42.3034 38.7177C41.6462 38.0577 40.5715 38.0577 39.9143 38.7177L33.1199 45.5408L26.3254 38.7177C25.6682 38.0577 24.5935 38.0577 23.9363 38.7177C23.279 39.3777 23.279 40.4569 23.9363 41.1169L30.7307 47.9401L23.9363 54.7632C23.279 55.4233 23.279 56.5025 23.9363 57.1625C24.2649 57.4925 24.7001 57.662 25.1264 57.662C25.5527 57.662 25.9879 57.4925 26.3166 57.1625L33.111 50.3393L39.9054 57.1625C40.234 57.4925 40.6692 57.662 41.0955 57.662C41.5307 57.662 41.9571 57.4925 42.2857 57.1625C42.9429 56.5025 42.9429 55.4233 42.2857 54.7632L35.509 47.9401Z",
                    fill: "#ED1C24"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M129.999 46.5308V96.5495C129.999 101.294 126.163 105.148 121.438 105.148H39.2383C43.9633 105.148 47.8001 101.294 47.8001 96.5495V46.5308H129.999Z",
                    fill: "#FFBD39"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M78.4077 79.9345C80.0726 78.2626 80.0726 75.5519 78.4077 73.88C76.7429 72.2081 74.0436 72.2081 72.3787 73.88C70.7139 75.5519 70.7139 78.2626 72.3787 79.9345C74.0436 81.6064 76.7429 81.6064 78.4077 79.9345Z",
                    fill: "#F7931E"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M68.6371 69.5779C68.193 69.5779 67.7756 69.3103 67.6157 68.8643C67.4025 68.2935 67.6867 67.6692 68.2552 67.4551L79.0019 63.4058C79.5615 63.1917 80.1921 63.4771 80.4052 64.048C80.6184 64.6188 80.3342 65.2431 79.7657 65.4572L69.019 69.5065C68.8946 69.5511 68.7614 69.5779 68.6371 69.5779Z",
                    fill: "#F7931E"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M102.895 81.1348C105.219 80.756 106.798 78.5569 106.421 76.2229C106.043 73.889 103.854 72.304 101.529 72.6828C99.2054 73.0616 97.6271 75.2607 98.0042 77.5946C98.3814 79.9286 100.571 81.5135 102.895 81.1348Z",
                    fill: "#F7931E"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M108.968 69.5778C108.843 69.5778 108.71 69.551 108.586 69.5064L97.8392 65.4571C97.2707 65.2431 96.9865 64.6098 97.1997 64.0479C97.4128 63.486 98.0434 63.1917 98.603 63.4057L109.35 67.455C109.918 67.6691 110.202 68.3023 109.989 68.8642C109.829 69.3102 109.412 69.5778 108.968 69.5778Z",
                    fill: "#F7931E"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M91.4364 93.0174H86.1696C85.5656 93.0174 85.0771 92.5268 85.0771 91.9203C85.0771 91.3138 85.5656 90.8232 86.1696 90.8232H91.4364C92.0403 90.8232 92.5288 91.3138 92.5288 91.9203C92.5288 92.5268 92.0403 93.0174 91.4364 93.0174Z",
                    fill: "#F7931E"
                })
            ]
        }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
            width: "130",
            height: "130",
            viewBox: "0 0 130 130",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M61.9847 127.252C96.2179 127.252 123.969 99.3827 123.969 65.0047C123.969 30.6267 96.2179 2.75781 61.9847 2.75781C27.7515 2.75781 0 30.6267 0 65.0047C0 99.3827 27.7515 127.252 61.9847 127.252Z",
                    fill: "#EDEEF0"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M112.876 38.0509V48.7361V107.157C112.876 107.157 43.9637 107.157 39.2298 107.157C36.8673 107.157 34.7269 106.193 33.1726 104.641C31.6272 103.081 30.668 100.94 30.668 98.5586V32.7529H60.2171L64.6312 38.042H112.876V38.0509Z",
                    fill: "#F7931E"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M33.1203 72.0775C45.2949 72.0775 55.1644 62.1663 55.1644 49.9401C55.1644 37.714 45.2949 27.8027 33.1203 27.8027C20.9457 27.8027 11.0762 37.714 11.0762 49.9401C11.0762 62.1663 20.9457 72.0775 33.1203 72.0775Z",
                    fill: "white"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M16.7695 64.7818C16.7695 64.7818 25.6689 76.8851 39.9416 78.1695C39.9416 78.1695 37.286 77.3668 36.0071 71.8904C34.7192 66.4051 18.7324 62.3023 16.7695 64.7818Z",
                    fill: "white"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M35.509 49.9401L42.3034 43.1169C42.9607 42.4569 42.9607 41.3777 42.3034 40.7177C41.6462 40.0577 40.5715 40.0577 39.9143 40.7177L33.1199 47.5408L26.3254 40.7177C25.6682 40.0577 24.5935 40.0577 23.9363 40.7177C23.279 41.3777 23.279 42.4569 23.9363 43.1169L30.7307 49.9401L23.9363 56.7632C23.279 57.4233 23.279 58.5025 23.9363 59.1625C24.2649 59.4925 24.7001 59.662 25.1264 59.662C25.5527 59.662 25.9879 59.4925 26.3166 59.1625L33.111 52.3393L39.9054 59.1625C40.234 59.4925 40.6692 59.662 41.0955 59.662C41.5307 59.662 41.9571 59.4925 42.2857 59.1625C42.9429 58.5025 42.9429 57.4233 42.2857 56.7632L35.509 49.9401Z",
                    fill: "#ED1C24"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M129.999 48.5308V98.5495C129.999 103.294 126.163 107.148 121.437 107.148H39.2383C43.9633 107.148 47.8001 103.294 47.8001 98.5495V48.5308H129.999Z",
                    fill: "#FFBD39"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M78.4087 81.935C80.0735 80.2631 80.0735 77.5524 78.4087 75.8805C76.7438 74.2086 74.0446 74.2086 72.3797 75.8805C70.7149 77.5524 70.7149 80.2631 72.3797 81.935C74.0446 83.6069 76.7438 83.6069 78.4087 81.935Z",
                    fill: "#F7931E"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M68.6371 71.5781C68.193 71.5781 67.7756 71.3105 67.6157 70.8646C67.4025 70.2937 67.6867 69.6694 68.2552 69.4553L79.0019 65.406C79.5615 65.192 80.192 65.4774 80.4052 66.0482C80.6184 66.619 80.3341 67.2434 79.7657 67.4574L69.019 71.5068C68.8946 71.5514 68.7614 71.5781 68.6371 71.5781Z",
                    fill: "#F7931E"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M102.894 83.1352C105.219 82.7565 106.797 80.5574 106.42 78.2234C106.042 75.8895 103.853 74.3045 101.528 74.6833C99.2044 75.0621 97.6261 77.2612 98.0033 79.5951C98.3805 81.9291 100.57 83.514 102.894 83.1352Z",
                    fill: "#F7931E"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M108.968 71.578C108.843 71.578 108.71 71.5513 108.586 71.5067L97.8392 67.4574C97.2707 67.2433 96.9865 66.6101 97.1997 66.0481C97.4128 65.4862 98.0434 65.1919 98.603 65.406L109.35 69.4553C109.918 69.6693 110.202 70.3026 109.989 70.8645C109.829 71.3105 109.412 71.578 108.968 71.578Z",
                    fill: "#F7931E"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M91.4354 95.0179H86.1686C85.5647 95.0179 85.0762 94.5273 85.0762 93.9208C85.0762 93.3143 85.5647 92.8237 86.1686 92.8237H91.4354C92.0393 92.8237 92.5278 93.3143 92.5278 93.9208C92.5278 94.5273 92.0393 95.0179 91.4354 95.0179Z",
                    fill: "#F7931E"
                })
            ]
        })
    }));
};

;// CONCATENATED MODULE: ./src/components/ui/item-not-found.tsx



function ItemNotFound({ title , message , className  }) {
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: external_classnames_default()('flex flex-grow flex-col items-center justify-center', className),
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "text-center",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(ErrorFileIcon, {
                    className: "mx-auto mb-6 h-auto w-20 text-light dark:text-light/10 2xl:w-24 3xl:w-32"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                    className: "mb-1.5 text-15px font-semibold text-dark-300 dark:text-light",
                    children: title
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    className: "text-dark-base dark:text-dark-800",
                    children: message
                })
            ]
        })
    }));
};


/***/ }),

/***/ 3813:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);


const AnchorLink = ({ href , ...props })=>{
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
        href: href,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
            ...props
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AnchorLink);


/***/ }),

/***/ 6604:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "u": () => (/* reexport safe */ _headlessui_react__WEBPACK_IMPORTED_MODULE_0__.Transition)
/* harmony export */ });
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1185);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_headlessui_react__WEBPACK_IMPORTED_MODULE_0__]);
_headlessui_react__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3206:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "i": () => (/* binding */ ConfigValue)
/* harmony export */ });
const ConfigValue = {
    PORT: process.env.PORT || 3000,
    NODE_ENV: "production",
    NEXT_PUBLIC_REST_API_ENDPOINT: "https://backend.goboss.com.ng",
    NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY: "pk_12345",
    NEXT_PUBLIC_WEBSITE_URL: "http://localhost:3000",
    AUTH_TOKEN_KEY: 'pixer-auth-token'
};


/***/ }),

/***/ 551:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const routes = {
    home: '/',
    authors: '/authors',
    explore: '/explore',
    popularProducts: '/popular-products',
    about: '/about-us',
    contact: '/contact-us',
    purchases: '/purchases',
    wishlists: '/wishlists',
    reports: '/reports',
    questions: '/questions',
    profile: '/profile',
    checkout: '/checkout',
    help: '/help',
    licensing: '/licensing',
    refund: '/refund',
    terms: '/terms',
    privacy: '/privacy',
    password: '/password',
    feed: '/feed',
    followedShop: '/followed-authors',
    orderUrl: (tracking_number)=>`/orders/${encodeURIComponent(tracking_number)}`
    ,
    productUrl: (slug)=>`/products/${slug}`
    ,
    tagUrl: (slug)=>`/products/tags/${slug}`
    ,
    shopUrl: (slug)=>`/authors/${slug}`
    ,
    product: (slug)=>{
        return `/products/${encodeURIComponent(slug)}`;
    },
    cards: '/cards'
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (routes);


/***/ }),

/***/ 1880:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "P": () => (/* binding */ API_ENDPOINTS)
/* harmony export */ });
const API_ENDPOINTS = {
    PRODUCTS: '/products',
    PRODUCTS_POPULAR: '/popular-products',
    PRODUCTS_FREE_DOWNLOAD: '/free-downloads/digital-file',
    PRODUCTS_REVIEWS: '/reviews',
    PRODUCTS_REVIEWS_ABUSE_REPORT: '/abusive_reports',
    PRODUCTS_QUESTIONS: '/questions',
    PRODUCTS_FEEDBACK: '/feedbacks',
    CATEGORIES: '/categories',
    TAGS: '/tags',
    TYPES: '/types',
    SHOPS: '/shops',
    TOP_SHOPS: '/top-shops',
    ORDERS: '/orders',
    ORDERS_CHECKOUT_VERIFY: 'orders/checkout/verify',
    ORDERS_DOWNLOADS: '/downloads',
    GENERATE_DOWNLOADABLE_PRODUCT_LINK: '/downloads/digital-file',
    USERS: '/users',
    USERS_ME: '/me',
    USERS_LOGIN: '/token',
    USERS_REGISTER: '/register',
    USERS_FORGOT_PASSWORD: '/forget-password',
    USERS_VERIFY_FORGOT_PASSWORD_TOKEN: '/verify-forget-password-token',
    USERS_RESET_PASSWORD: '/reset-password',
    USERS_CHANGE_PASSWORD: '/change-password',
    USERS_LOGOUT: '/logout',
    USERS_WISHLIST: '/my-wishlists',
    WISHLIST: '/wishlists',
    USERS_WISHLIST_TOGGLE: '/wishlists/toggle',
    MY_REPORTS: '/my-reports',
    MY_QUESTIONS: '/my-questions',
    SETTINGS: '/settings',
    SETTINGS_CONTACT_US: '/contact-us',
    UPLOADS: '/attachments',
    FOLLOW_SHOP: 'follow-shop',
    FOLLOWED_SHOPS: 'followed-shops',
    FOLLOWED_SHOPS_PRODUCTS: 'followed-shops-popular-products',
    ORDERS_PAYMENT: '/orders/payment',
    CARDS: '/cards',
    SET_DEFAULT_CARD: '/set-default-card',
    SAVE_PAYMENT_METHOD: '/save-payment-method',
    PAYMENT_INTENT: '/payment-intent'
};


/***/ }),

/***/ 4141:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "e": () => (/* binding */ HttpClient)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _token_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(575);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_token_utils__WEBPACK_IMPORTED_MODULE_2__]);
_token_utils__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



// TODO: Due to windows timeout was set to 15000
const Axios = axios__WEBPACK_IMPORTED_MODULE_0___default().create({
    baseURL: "https://backend.goboss.com.ng",
    timeout: 150000000,
    headers: {
        'Content-Type': 'application/json'
    }
});
// Change request data/error here
Axios.interceptors.request.use((config)=>{
    const token = (0,_token_utils__WEBPACK_IMPORTED_MODULE_2__/* .getAuthToken */ .bW)();
    config.headers = {
        ...config.headers,
        Authorization: `Bearer ${token ? token : ''}`
    };
    return config;
}, (error)=>{
    return Promise.reject(error);
});
Axios.interceptors.response.use((response)=>response
, (error)=>{
    if (error.response && error.response.status === 401 || error.response && error.response.status === 403 || error.response && error.response.data.message === 'PIXER_ERROR.NOT_AUTHORIZED') {
        (0,_token_utils__WEBPACK_IMPORTED_MODULE_2__/* .removeAuthToken */ .H6)();
        next_router__WEBPACK_IMPORTED_MODULE_1___default().reload();
    }
    return Promise.reject(error);
});
class HttpClient {
    static async get(url, params) {
        const response = await Axios.get(url, {
            params
        });
        return response.data;
    }
    static async post(url, data, options) {
        const response = await Axios.post(url, data, options);
        return response.data;
    }
    static async put(url, data) {
        const response = await Axios.put(url, data);
        return response.data;
    }
    static async delete(url) {
        const response = await Axios.delete(url);
        return response.data;
    }
    static formatSearchParams(params) {
        return Object.entries(params).filter(([, value])=>Boolean(value)
        ).map(([k, v])=>[
                'type',
                'categories',
                'tags',
                'author',
                'manufacturer'
            ].includes(k) ? `${k}.slug:${v}` : `${k}:${v}`
        ).join(';');
    }
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7607:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _endpoints__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1880);
/* harmony import */ var _http_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4141);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_http_client__WEBPACK_IMPORTED_MODULE_1__]);
_http_client__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


class Client {
    constructor(){
        this.products = {
            all: ({ categories , tags , name , shop_id , price , ...query } = {})=>_http_client__WEBPACK_IMPORTED_MODULE_1__/* .HttpClient.get */ .e.get(_endpoints__WEBPACK_IMPORTED_MODULE_0__/* .API_ENDPOINTS.PRODUCTS */ .P.PRODUCTS, {
                    searchJoin: 'and',
                    with: 'shop',
                    orderBy: 'updated_at',
                    sortedBy: 'ASC',
                    ...query,
                    search: _http_client__WEBPACK_IMPORTED_MODULE_1__/* .HttpClient.formatSearchParams */ .e.formatSearchParams({
                        categories,
                        tags,
                        name,
                        shop_id,
                        price,
                        status: 'publish'
                    })
                })
            ,
            popular: (params)=>_http_client__WEBPACK_IMPORTED_MODULE_1__/* .HttpClient.get */ .e.get(_endpoints__WEBPACK_IMPORTED_MODULE_0__/* .API_ENDPOINTS.PRODUCTS_POPULAR */ .P.PRODUCTS_POPULAR, {
                    with: 'shop',
                    withCount: 'orders',
                    ...params
                })
            ,
            get: ({ slug , language  })=>_http_client__WEBPACK_IMPORTED_MODULE_1__/* .HttpClient.get */ .e.get(`${_endpoints__WEBPACK_IMPORTED_MODULE_0__/* .API_ENDPOINTS.PRODUCTS */ .P.PRODUCTS}/${slug}`, {
                    language,
                    with: 'shop;tags;type',
                    withCount: 'orders'
                })
            ,
            download: (input)=>_http_client__WEBPACK_IMPORTED_MODULE_1__/* .HttpClient.post */ .e.post(_endpoints__WEBPACK_IMPORTED_MODULE_0__/* .API_ENDPOINTS.PRODUCTS_FREE_DOWNLOAD */ .P.PRODUCTS_FREE_DOWNLOAD, input)
        };
        this.categories = {
            all: (query)=>_http_client__WEBPACK_IMPORTED_MODULE_1__/* .HttpClient.get */ .e.get(_endpoints__WEBPACK_IMPORTED_MODULE_0__/* .API_ENDPOINTS.CATEGORIES */ .P.CATEGORIES, {
                    ...query
                })
        };
        this.tags = {
            all: (query)=>_http_client__WEBPACK_IMPORTED_MODULE_1__/* .HttpClient.get */ .e.get(_endpoints__WEBPACK_IMPORTED_MODULE_0__/* .API_ENDPOINTS.TAGS */ .P.TAGS, query)
            ,
            get: ({ slug , language  })=>_http_client__WEBPACK_IMPORTED_MODULE_1__/* .HttpClient.get */ .e.get(`${_endpoints__WEBPACK_IMPORTED_MODULE_0__/* .API_ENDPOINTS.TAGS */ .P.TAGS}/${slug}`, {
                    language
                })
        };
        this.types = {
            all: (query)=>_http_client__WEBPACK_IMPORTED_MODULE_1__/* .HttpClient.get */ .e.get(_endpoints__WEBPACK_IMPORTED_MODULE_0__/* .API_ENDPOINTS.TYPES */ .P.TYPES, {
                    ...query
                })
        };
        this.shops = {
            all: (query)=>_http_client__WEBPACK_IMPORTED_MODULE_1__/* .HttpClient.get */ .e.get(_endpoints__WEBPACK_IMPORTED_MODULE_0__/* .API_ENDPOINTS.SHOPS */ .P.SHOPS, query)
            ,
            top: ({ name , ...query } = {})=>_http_client__WEBPACK_IMPORTED_MODULE_1__/* .HttpClient.get */ .e.get(_endpoints__WEBPACK_IMPORTED_MODULE_0__/* .API_ENDPOINTS.TOP_SHOPS */ .P.TOP_SHOPS, {
                    searchJoin: 'and',
                    // withCount: 'products',
                    ...query,
                    search: _http_client__WEBPACK_IMPORTED_MODULE_1__/* .HttpClient.formatSearchParams */ .e.formatSearchParams({
                        name,
                        is_active: 1
                    })
                })
            ,
            get: (slug)=>_http_client__WEBPACK_IMPORTED_MODULE_1__/* .HttpClient.get */ .e.get(`${_endpoints__WEBPACK_IMPORTED_MODULE_0__/* .API_ENDPOINTS.SHOPS */ .P.SHOPS}/${slug}`)
        };
        this.orders = {
            all: (query)=>_http_client__WEBPACK_IMPORTED_MODULE_1__/* .HttpClient.get */ .e.get(_endpoints__WEBPACK_IMPORTED_MODULE_0__/* .API_ENDPOINTS.ORDERS */ .P.ORDERS, query)
            ,
            get: (tracking_number)=>_http_client__WEBPACK_IMPORTED_MODULE_1__/* .HttpClient.get */ .e.get(`${_endpoints__WEBPACK_IMPORTED_MODULE_0__/* .API_ENDPOINTS.ORDERS */ .P.ORDERS}/${tracking_number}`)
            ,
            downloadable: (query)=>_http_client__WEBPACK_IMPORTED_MODULE_1__/* .HttpClient.get */ .e.get(_endpoints__WEBPACK_IMPORTED_MODULE_0__/* .API_ENDPOINTS.ORDERS_DOWNLOADS */ .P.ORDERS_DOWNLOADS, query)
            ,
            generateDownloadLink: (digital_file_id, name)=>_http_client__WEBPACK_IMPORTED_MODULE_1__/* .HttpClient.post */ .e.post(_endpoints__WEBPACK_IMPORTED_MODULE_0__/* .API_ENDPOINTS.GENERATE_DOWNLOADABLE_PRODUCT_LINK */ .P.GENERATE_DOWNLOADABLE_PRODUCT_LINK, {
                    digital_file_id
                })
            ,
            verify: (data)=>_http_client__WEBPACK_IMPORTED_MODULE_1__/* .HttpClient.post */ .e.post(_endpoints__WEBPACK_IMPORTED_MODULE_0__/* .API_ENDPOINTS.ORDERS_CHECKOUT_VERIFY */ .P.ORDERS_CHECKOUT_VERIFY, data)
            ,
            create: (data)=>_http_client__WEBPACK_IMPORTED_MODULE_1__/* .HttpClient.post */ .e.post(_endpoints__WEBPACK_IMPORTED_MODULE_0__/* .API_ENDPOINTS.ORDERS */ .P.ORDERS, data)
            ,
            getPaymentIntent: ({ tracking_number  })=>_http_client__WEBPACK_IMPORTED_MODULE_1__/* .HttpClient.get */ .e.get(_endpoints__WEBPACK_IMPORTED_MODULE_0__/* .API_ENDPOINTS.PAYMENT_INTENT */ .P.PAYMENT_INTENT, {
                    tracking_number
                })
            ,
            payment: (input)=>_http_client__WEBPACK_IMPORTED_MODULE_1__/* .HttpClient.post */ .e.post(_endpoints__WEBPACK_IMPORTED_MODULE_0__/* .API_ENDPOINTS.ORDERS_PAYMENT */ .P.ORDERS_PAYMENT, input)
            ,
            savePaymentMethod: (input)=>_http_client__WEBPACK_IMPORTED_MODULE_1__/* .HttpClient.post */ .e.post(_endpoints__WEBPACK_IMPORTED_MODULE_0__/* .API_ENDPOINTS.SAVE_PAYMENT_METHOD */ .P.SAVE_PAYMENT_METHOD, input)
        };
        this.users = {
            me: ()=>_http_client__WEBPACK_IMPORTED_MODULE_1__/* .HttpClient.get */ .e.get(_endpoints__WEBPACK_IMPORTED_MODULE_0__/* .API_ENDPOINTS.USERS_ME */ .P.USERS_ME)
            ,
            update: (user)=>_http_client__WEBPACK_IMPORTED_MODULE_1__/* .HttpClient.put */ .e.put(`${_endpoints__WEBPACK_IMPORTED_MODULE_0__/* .API_ENDPOINTS.USERS */ .P.USERS}/${user.id}`, user)
            ,
            login: (input)=>_http_client__WEBPACK_IMPORTED_MODULE_1__/* .HttpClient.post */ .e.post(_endpoints__WEBPACK_IMPORTED_MODULE_0__/* .API_ENDPOINTS.USERS_LOGIN */ .P.USERS_LOGIN, input)
            ,
            register: (input)=>_http_client__WEBPACK_IMPORTED_MODULE_1__/* .HttpClient.post */ .e.post(_endpoints__WEBPACK_IMPORTED_MODULE_0__/* .API_ENDPOINTS.USERS_REGISTER */ .P.USERS_REGISTER, input)
            ,
            forgotPassword: (input)=>_http_client__WEBPACK_IMPORTED_MODULE_1__/* .HttpClient.post */ .e.post(_endpoints__WEBPACK_IMPORTED_MODULE_0__/* .API_ENDPOINTS.USERS_FORGOT_PASSWORD */ .P.USERS_FORGOT_PASSWORD, input)
            ,
            verifyForgotPasswordToken: (input)=>_http_client__WEBPACK_IMPORTED_MODULE_1__/* .HttpClient.post */ .e.post(_endpoints__WEBPACK_IMPORTED_MODULE_0__/* .API_ENDPOINTS.USERS_VERIFY_FORGOT_PASSWORD_TOKEN */ .P.USERS_VERIFY_FORGOT_PASSWORD_TOKEN, input)
            ,
            resetPassword: (input)=>_http_client__WEBPACK_IMPORTED_MODULE_1__/* .HttpClient.post */ .e.post(_endpoints__WEBPACK_IMPORTED_MODULE_0__/* .API_ENDPOINTS.USERS_RESET_PASSWORD */ .P.USERS_RESET_PASSWORD, input)
            ,
            changePassword: (input)=>_http_client__WEBPACK_IMPORTED_MODULE_1__/* .HttpClient.post */ .e.post(_endpoints__WEBPACK_IMPORTED_MODULE_0__/* .API_ENDPOINTS.USERS_CHANGE_PASSWORD */ .P.USERS_CHANGE_PASSWORD, input)
            ,
            logout: ()=>_http_client__WEBPACK_IMPORTED_MODULE_1__/* .HttpClient.post */ .e.post(_endpoints__WEBPACK_IMPORTED_MODULE_0__/* .API_ENDPOINTS.USERS_LOGOUT */ .P.USERS_LOGOUT, {})
        };
        this.questions = {
            all: ({ question , ...params })=>_http_client__WEBPACK_IMPORTED_MODULE_1__/* .HttpClient.get */ .e.get(_endpoints__WEBPACK_IMPORTED_MODULE_0__/* .API_ENDPOINTS.PRODUCTS_QUESTIONS */ .P.PRODUCTS_QUESTIONS, {
                    searchJoin: 'and',
                    ...params,
                    search: _http_client__WEBPACK_IMPORTED_MODULE_1__/* .HttpClient.formatSearchParams */ .e.formatSearchParams({
                        question
                    })
                })
            ,
            create: (input)=>_http_client__WEBPACK_IMPORTED_MODULE_1__/* .HttpClient.post */ .e.post(_endpoints__WEBPACK_IMPORTED_MODULE_0__/* .API_ENDPOINTS.PRODUCTS_QUESTIONS */ .P.PRODUCTS_QUESTIONS, input)
        };
        this.feedback = {
            create: (input)=>_http_client__WEBPACK_IMPORTED_MODULE_1__/* .HttpClient.post */ .e.post(_endpoints__WEBPACK_IMPORTED_MODULE_0__/* .API_ENDPOINTS.PRODUCTS_FEEDBACK */ .P.PRODUCTS_FEEDBACK, input)
        };
        this.abuse = {
            create: (input)=>_http_client__WEBPACK_IMPORTED_MODULE_1__/* .HttpClient.post */ .e.post(_endpoints__WEBPACK_IMPORTED_MODULE_0__/* .API_ENDPOINTS.PRODUCTS_REVIEWS_ABUSE_REPORT */ .P.PRODUCTS_REVIEWS_ABUSE_REPORT, input)
        };
        this.reviews = {
            all: ({ rating , ...params })=>_http_client__WEBPACK_IMPORTED_MODULE_1__/* .HttpClient.get */ .e.get(_endpoints__WEBPACK_IMPORTED_MODULE_0__/* .API_ENDPOINTS.PRODUCTS_REVIEWS */ .P.PRODUCTS_REVIEWS, {
                    searchJoin: 'and',
                    with: 'user',
                    ...params,
                    search: _http_client__WEBPACK_IMPORTED_MODULE_1__/* .HttpClient.formatSearchParams */ .e.formatSearchParams({
                        rating
                    })
                })
            ,
            get: ({ id  })=>_http_client__WEBPACK_IMPORTED_MODULE_1__/* .HttpClient.get */ .e.get(`${_endpoints__WEBPACK_IMPORTED_MODULE_0__/* .API_ENDPOINTS.PRODUCTS_REVIEWS */ .P.PRODUCTS_REVIEWS}/${id}`)
            ,
            create: (input)=>_http_client__WEBPACK_IMPORTED_MODULE_1__/* .HttpClient.post */ .e.post(_endpoints__WEBPACK_IMPORTED_MODULE_0__/* .API_ENDPOINTS.PRODUCTS_REVIEWS */ .P.PRODUCTS_REVIEWS, input)
            ,
            update: (input)=>_http_client__WEBPACK_IMPORTED_MODULE_1__/* .HttpClient.put */ .e.put(`${_endpoints__WEBPACK_IMPORTED_MODULE_0__/* .API_ENDPOINTS.PRODUCTS_REVIEWS */ .P.PRODUCTS_REVIEWS}/${input.id}`, input)
        };
        this.wishlist = {
            all: (params)=>_http_client__WEBPACK_IMPORTED_MODULE_1__/* .HttpClient.get */ .e.get(_endpoints__WEBPACK_IMPORTED_MODULE_0__/* .API_ENDPOINTS.USERS_WISHLIST */ .P.USERS_WISHLIST, {
                    with: 'shop',
                    orderBy: 'created_at',
                    sortedBy: 'desc',
                    ...params
                })
            ,
            toggle: (input)=>_http_client__WEBPACK_IMPORTED_MODULE_1__/* .HttpClient.post */ .e.post(_endpoints__WEBPACK_IMPORTED_MODULE_0__/* .API_ENDPOINTS.USERS_WISHLIST_TOGGLE */ .P.USERS_WISHLIST_TOGGLE, input)
            ,
            remove: (id)=>_http_client__WEBPACK_IMPORTED_MODULE_1__/* .HttpClient["delete"] */ .e["delete"](`${_endpoints__WEBPACK_IMPORTED_MODULE_0__/* .API_ENDPOINTS.WISHLIST */ .P.WISHLIST}/${id}`)
            ,
            checkIsInWishlist: ({ product_id  })=>_http_client__WEBPACK_IMPORTED_MODULE_1__/* .HttpClient.get */ .e.get(`${_endpoints__WEBPACK_IMPORTED_MODULE_0__/* .API_ENDPOINTS.WISHLIST */ .P.WISHLIST}/in_wishlist/${product_id}`)
        };
        this.myQuestions = {
            all: (params)=>_http_client__WEBPACK_IMPORTED_MODULE_1__/* .HttpClient.get */ .e.get(_endpoints__WEBPACK_IMPORTED_MODULE_0__/* .API_ENDPOINTS.MY_QUESTIONS */ .P.MY_QUESTIONS, {
                    with: 'user',
                    orderBy: 'created_at',
                    sortedBy: 'desc',
                    ...params
                })
        };
        this.myReports = {
            all: (params)=>_http_client__WEBPACK_IMPORTED_MODULE_1__/* .HttpClient.get */ .e.get(_endpoints__WEBPACK_IMPORTED_MODULE_0__/* .API_ENDPOINTS.MY_REPORTS */ .P.MY_REPORTS, {
                    with: 'user',
                    orderBy: 'created_at',
                    sortedBy: 'desc',
                    ...params
                })
        };
        this.follow = {
            shops: (query)=>_http_client__WEBPACK_IMPORTED_MODULE_1__/* .HttpClient.get */ .e.get(_endpoints__WEBPACK_IMPORTED_MODULE_0__/* .API_ENDPOINTS.FOLLOWED_SHOPS */ .P.FOLLOWED_SHOPS, query)
            ,
            isShopFollowed: (input)=>_http_client__WEBPACK_IMPORTED_MODULE_1__/* .HttpClient.get */ .e.get(_endpoints__WEBPACK_IMPORTED_MODULE_0__/* .API_ENDPOINTS.FOLLOW_SHOP */ .P.FOLLOW_SHOP, input)
            ,
            toggle: (input)=>_http_client__WEBPACK_IMPORTED_MODULE_1__/* .HttpClient.post */ .e.post(_endpoints__WEBPACK_IMPORTED_MODULE_0__/* .API_ENDPOINTS.FOLLOW_SHOP */ .P.FOLLOW_SHOP, input)
            ,
            followedShopProducts: (params)=>{
                console.log(params);
                return _http_client__WEBPACK_IMPORTED_MODULE_1__/* .HttpClient.get */ .e.get(_endpoints__WEBPACK_IMPORTED_MODULE_0__/* .API_ENDPOINTS.FOLLOWED_SHOPS_PRODUCTS */ .P.FOLLOWED_SHOPS_PRODUCTS, {
                    ...params
                });
            }
        };
        this.settings = {
            all: (params)=>_http_client__WEBPACK_IMPORTED_MODULE_1__/* .HttpClient.get */ .e.get(_endpoints__WEBPACK_IMPORTED_MODULE_0__/* .API_ENDPOINTS.SETTINGS */ .P.SETTINGS, {
                    ...params
                })
            ,
            contactUs: (input)=>_http_client__WEBPACK_IMPORTED_MODULE_1__/* .HttpClient.post */ .e.post(_endpoints__WEBPACK_IMPORTED_MODULE_0__/* .API_ENDPOINTS.SETTINGS_CONTACT_US */ .P.SETTINGS_CONTACT_US, input)
            ,
            upload: (input)=>{
                let formData = new FormData();
                input.forEach((attachment)=>{
                    formData.append('attachment[]', attachment);
                });
                return _http_client__WEBPACK_IMPORTED_MODULE_1__/* .HttpClient.post */ .e.post(_endpoints__WEBPACK_IMPORTED_MODULE_0__/* .API_ENDPOINTS.UPLOADS */ .P.UPLOADS, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                });
            }
        };
        this.cards = {
            all: (params)=>_http_client__WEBPACK_IMPORTED_MODULE_1__/* .HttpClient.get */ .e.get(_endpoints__WEBPACK_IMPORTED_MODULE_0__/* .API_ENDPOINTS.CARDS */ .P.CARDS, {
                    ...params
                })
            ,
            remove: ({ id  })=>_http_client__WEBPACK_IMPORTED_MODULE_1__/* .HttpClient["delete"] */ .e["delete"](`${_endpoints__WEBPACK_IMPORTED_MODULE_0__/* .API_ENDPOINTS.CARDS */ .P.CARDS}/${id}`)
            ,
            addPaymentMethod: (method_key)=>_http_client__WEBPACK_IMPORTED_MODULE_1__/* .HttpClient.post */ .e.post(_endpoints__WEBPACK_IMPORTED_MODULE_0__/* .API_ENDPOINTS.CARDS */ .P.CARDS, method_key)
            ,
            makeDefaultPaymentMethod: (input)=>_http_client__WEBPACK_IMPORTED_MODULE_1__/* .HttpClient.post */ .e.post(_endpoints__WEBPACK_IMPORTED_MODULE_0__/* .API_ENDPOINTS.SET_DEFAULT_CARD */ .P.SET_DEFAULT_CARD, input)
        };
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new Client());

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 575:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "bW": () => (/* binding */ getAuthToken),
/* harmony export */   "uB": () => (/* binding */ setAuthToken),
/* harmony export */   "H6": () => (/* binding */ removeAuthToken),
/* harmony export */   "qz": () => (/* binding */ checkHasAuthToken)
/* harmony export */ });
/* unused harmony export AUTH_TOKEN_KEY */
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3206);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9915);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([js_cookie__WEBPACK_IMPORTED_MODULE_1__]);
js_cookie__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const AUTH_TOKEN_KEY = _config__WEBPACK_IMPORTED_MODULE_0__/* .ConfigValue.AUTH_TOKEN_KEY */ .i.AUTH_TOKEN_KEY;
const getAuthToken = ()=>{
    if (false) {}
    return js_cookie__WEBPACK_IMPORTED_MODULE_1__["default"].get(AUTH_TOKEN_KEY);
};
function setAuthToken(token) {
    js_cookie__WEBPACK_IMPORTED_MODULE_1__["default"].set(AUTH_TOKEN_KEY, token, {
        expires: 1
    });
}
function removeAuthToken() {
    js_cookie__WEBPACK_IMPORTED_MODULE_1__["default"].remove(AUTH_TOKEN_KEY);
}
function checkHasAuthToken() {
    const token = js_cookie__WEBPACK_IMPORTED_MODULE_1__["default"].get(AUTH_TOKEN_KEY);
    if (!token) return false;
    return true;
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3163:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "rn": () => (/* binding */ useProducts),
/* harmony export */   "iB": () => (/* binding */ useProduct),
/* harmony export */   "os": () => (/* binding */ usePopularProducts),
/* harmony export */   "AM": () => (/* binding */ useCreateFeedback)
/* harmony export */ });
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _data_client_endpoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1880);
/* harmony import */ var _data_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7607);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8922);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_hot_toast__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_data_client__WEBPACK_IMPORTED_MODULE_2__]);
_data_client__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





function useProducts(options, config) {
    const { locale  } = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    const formattedOptions = {
        ...options,
        language: locale
    };
    const { data , isLoading , error , fetchNextPage , hasNextPage , isFetching , isFetchingNextPage ,  } = (0,react_query__WEBPACK_IMPORTED_MODULE_0__.useInfiniteQuery)([
        _data_client_endpoints__WEBPACK_IMPORTED_MODULE_1__/* .API_ENDPOINTS.PRODUCTS */ .P.PRODUCTS,
        formattedOptions
    ], ({ queryKey , pageParam  })=>_data_client__WEBPACK_IMPORTED_MODULE_2__/* ["default"].products.all */ .Z.products.all(Object.assign({}, queryKey[1], pageParam))
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
        products: (ref = data === null || data === void 0 ? void 0 : data.pages.flatMap((page)=>page.data
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
function useProduct(slug) {
    const { locale: language  } = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    // console.log({ slug, language });
    const { data , isLoading , error  } = (0,react_query__WEBPACK_IMPORTED_MODULE_0__.useQuery)([
        _data_client_endpoints__WEBPACK_IMPORTED_MODULE_1__/* .API_ENDPOINTS.PRODUCTS */ .P.PRODUCTS,
        {
            slug,
            language
        }
    ], ()=>_data_client__WEBPACK_IMPORTED_MODULE_2__/* ["default"].products.get */ .Z.products.get({
            slug,
            language
        })
    );
    return {
        product: data,
        isLoading,
        error
    };
}
function usePopularProducts(options) {
    const { locale  } = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    const formattedOptions = {
        ...options,
        language: locale
    };
    const { data , isLoading , error  } = (0,react_query__WEBPACK_IMPORTED_MODULE_0__.useQuery)([
        _data_client_endpoints__WEBPACK_IMPORTED_MODULE_1__/* .API_ENDPOINTS.PRODUCTS_POPULAR */ .P.PRODUCTS_POPULAR,
        formattedOptions
    ], ({ queryKey  })=>_data_client__WEBPACK_IMPORTED_MODULE_2__/* ["default"].products.popular */ .Z.products.popular(Object.assign({}, queryKey[1]))
    );
    return {
        popularProducts: data !== null && data !== void 0 ? data : [],
        isLoading,
        error
    };
}
function useCreateFeedback() {
    const queryClient = (0,react_query__WEBPACK_IMPORTED_MODULE_0__.useQueryClient)();
    const { mutate , isLoading , error  } = (0,react_query__WEBPACK_IMPORTED_MODULE_0__.useMutation)(_data_client__WEBPACK_IMPORTED_MODULE_2__/* ["default"].feedback.create */ .Z.feedback.create, {
        onSuccess: ()=>{
            react_hot_toast__WEBPACK_IMPORTED_MODULE_3___default().success('Feedback Submitted');
            queryClient.refetchQueries(_data_client_endpoints__WEBPACK_IMPORTED_MODULE_1__/* .API_ENDPOINTS.PRODUCTS_QUESTIONS */ .P.PRODUCTS_QUESTIONS);
            queryClient.refetchQueries(_data_client_endpoints__WEBPACK_IMPORTED_MODULE_1__/* .API_ENDPOINTS.PRODUCTS_REVIEWS */ .P.PRODUCTS_REVIEWS);
        }
    });
    return {
        createFeedback: mutate,
        isLoading,
        error
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6698:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "r": () => (/* binding */ useSettings)
/* harmony export */ });
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7607);
/* harmony import */ var _client_endpoints__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1880);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_client__WEBPACK_IMPORTED_MODULE_1__]);
_client__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const useSettings = ()=>{
    const { locale  } = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const formattedOptions = {
        language: locale
    };
    const { data , isLoading , error  } = (0,react_query__WEBPACK_IMPORTED_MODULE_0__.useQuery)([
        _client_endpoints__WEBPACK_IMPORTED_MODULE_2__/* .API_ENDPOINTS.SETTINGS */ .P.SETTINGS,
        formattedOptions
    ], ({ queryKey , pageParam  })=>_client__WEBPACK_IMPORTED_MODULE_1__/* ["default"].settings.all */ .Z.settings.all(Object.assign({}, queryKey[1], pageParam))
    );
    return {
        settings: data === null || data === void 0 ? void 0 : data.options,
        isLoading,
        error
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6482:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "qW": () => (/* binding */ CART_KEY),
/* harmony export */   "iK": () => (/* binding */ CHECKOUT),
/* harmony export */   "Mg": () => (/* binding */ getDirection)
/* harmony export */ });
/* unused harmony exports PRODUCTS_PER_PAGE, RTL_LANGUAGES */
const CART_KEY = 'pixer-cart';
const CHECKOUT = 'pixer-checkout';
const PRODUCTS_PER_PAGE = 30;
const RTL_LANGUAGES = [
    'ar',
    'he'
];
function getDirection(language) {
    if (!language) return 'ltr';
    return RTL_LANGUAGES.includes(language) ? 'rtl' : 'ltr';
}


/***/ }),

/***/ 2554:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "op": () => (/* binding */ fadeInBottom),
/* harmony export */   "sh": () => (/* binding */ fadeInBottomWithScaleX),
/* harmony export */   "hB": () => (/* binding */ fadeInBottomWithScaleY)
/* harmony export */ });
function fadeInBottom(type = 'spring', duration = 0.5) {
    return {
        enter: {
            y: 0,
            opacity: 1,
            transition: {
                type,
                duration
            }
        },
        exit: {
            y: 80,
            opacity: 0,
            transition: {
                type,
                duration
            }
        }
    };
}
function fadeInBottomWithScaleX(type = 'spring', duration = 0.5) {
    return {
        enter: {
            y: 0,
            scaleX: 1,
            opacity: 1,
            transition: {
                type,
                duration
            }
        },
        exit: {
            y: 80,
            scaleX: 0.7,
            opacity: 0,
            transition: {
                type,
                duration
            }
        }
    };
}
function fadeInBottomWithScaleY(type = 'easeInOut', duration = 0.4, delay = 0.05) {
    return {
        enter: {
            y: 0,
            scaleY: 1,
            opacity: 1,
            transition: {
                type,
                duration,
                delay
            }
        },
        exit: {
            y: '100%',
            scaleY: 0,
            opacity: 0,
            transition: {
                type,
                duration,
                delay
            }
        }
    };
}


/***/ }),

/***/ 2341:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I": () => (/* binding */ fadeInOut)
/* harmony export */ });
function fadeInOut(type = 'easeInOut', duration = 0.3) {
    return {
        enter: {
            opacity: 1,
            scale: 1,
            transition: {
                type,
                duration
            }
        },
        exit: {
            opacity: 0,
            scale: 1.02,
            transition: {
                type,
                duration
            }
        }
    };
}


/***/ }),

/***/ 3531:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "s": () => (/* binding */ staggerTransition)
/* harmony export */ });
function staggerTransition(staggerChildren = 0.05) {
    return {
        enter: {
            transition: {
                staggerChildren
            }
        },
        exit: {
            transition: {
                staggerChildren
            }
        }
    };
}


/***/ }),

/***/ 269:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "G": () => (/* binding */ useIsDarkMode)
/* harmony export */ });
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1162);
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_themes__WEBPACK_IMPORTED_MODULE_0__);

function useIsDarkMode() {
    const { resolvedTheme  } = (0,next_themes__WEBPACK_IMPORTED_MODULE_0__.useTheme)();
    return {
        isDarkMode: resolvedTheme === 'dark'
    };
}


/***/ }),

/***/ 3741:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "t": () => (/* binding */ useIsMounted)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useIsMounted() {
    const { 0: mounted , 1: setMounted  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>setMounted(true)
    , []);
    return mounted;
}


/***/ }),

/***/ 8378:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "N": () => (/* binding */ useLockBodyScroll)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useLockBodyScroll(freezeBodyScroll) {
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        let paddingRight = document.documentElement.style.paddingRight;
        let scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
        if (freezeBodyScroll) {
            document.documentElement.style.paddingRight = `${scrollbarWidth}px`;
            window.document.documentElement.style.overflow = 'hidden';
        } else {
            document.documentElement.style.removeProperty('overflow');
        }
        return ()=>{
            document.documentElement.style.paddingRight = paddingRight;
        };
    }, [
        freezeBodyScroll
    ]);
}


/***/ }),

/***/ 3949:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (/* binding */ usePrice)
/* harmony export */ });
/* unused harmony exports formatPrice, formatVariantPrice */
/* harmony import */ var _data_settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6698);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_data_settings__WEBPACK_IMPORTED_MODULE_0__]);
_data_settings__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



function formatPrice({ amount , currencyCode , locale  }) {
    const formatCurrency = new Intl.NumberFormat(locale, {
        style: 'currency',
        currency: currencyCode
    });
    return formatCurrency.format(amount);
}
function formatVariantPrice({ amount , baseAmount , currencyCode , locale  }) {
    const hasDiscount = baseAmount > amount;
    const formatDiscount = new Intl.NumberFormat(locale, {
        style: 'percent'
    });
    const discount = hasDiscount ? formatDiscount.format((baseAmount - amount) / baseAmount) : null;
    const price = formatPrice({
        amount,
        currencyCode,
        locale
    });
    const basePrice = hasDiscount ? formatPrice({
        amount: baseAmount,
        currencyCode,
        locale
    }) : null;
    return {
        price,
        basePrice,
        discount
    };
}
function usePrice(data) {
    const { settings  } = (0,_data_settings__WEBPACK_IMPORTED_MODULE_0__/* .useSettings */ .r)();
    const { locale: currentLocale  } = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    var ref;
    const { amount , baseAmount , currencyCode =(ref = settings === null || settings === void 0 ? void 0 : settings.currency) !== null && ref !== void 0 ? ref : 'USD' ,  } = data !== null && data !== void 0 ? data : {};
    const value = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>{
        if (typeof amount !== 'number' || !currencyCode) return '';
        const locale = currentLocale !== null && currentLocale !== void 0 ? currentLocale : 'en';
        return baseAmount ? formatVariantPrice({
            amount,
            baseAmount,
            currencyCode,
            locale
        }) : formatPrice({
            amount,
            currencyCode,
            locale
        });
    }, [
        amount,
        baseAmount,
        currencyCode,
        currentLocale
    ]);
    return typeof value === 'string' ? {
        price: value,
        basePrice: null,
        discount: null
    } : value;
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2879:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "N": () => (/* binding */ isFree)
/* harmony export */ });
function isFree(price) {
    return price === 0;
}


/***/ }),

/***/ 994:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ rangeMap)
/* harmony export */ });
function rangeMap(n, fn) {
    const arr = [];
    while(n > arr.length){
        arr.push(fn(arr.length));
    }
    return arr;
};


/***/ })

};
;