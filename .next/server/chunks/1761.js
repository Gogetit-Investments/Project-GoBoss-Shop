"use strict";
exports.id = 1761;
exports.ids = [1761];
exports.modules = {

/***/ 1761:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "m5": () => (/* binding */ usePhoneInput),
/* harmony export */   "ZP": () => (/* binding */ PhoneInput),
/* harmony export */   "Tv": () => (/* reexport default from dynamic */ react_phone_input_2__WEBPACK_IMPORTED_MODULE_1___default.a)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_phone_input_2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5452);
/* harmony import */ var react_phone_input_2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_phone_input_2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2451);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([jotai__WEBPACK_IMPORTED_MODULE_2__]);
jotai__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const phoneNumberAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_2__.atom)('');
function usePhoneInput() {
    let [phoneNumber, setPhoneNumber] = (0,jotai__WEBPACK_IMPORTED_MODULE_2__.useAtom)(phoneNumberAtom);
    return {
        phoneNumber,
        setPhoneNumber
    };
}
function PhoneInput({ className , defaultValue  }) {
    let { phoneNumber , setPhoneNumber  } = usePhoneInput();
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        if (defaultValue) {
            setPhoneNumber(defaultValue);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: className,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_phone_input_2__WEBPACK_IMPORTED_MODULE_1___default()), {
            country: "us",
            value: phoneNumber,
            onChange: (value)=>setPhoneNumber(value)
        })
    }));
};


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;