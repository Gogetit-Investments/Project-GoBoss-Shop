"use strict";
exports.id = 3620;
exports.ids = [3620];
exports.modules = {

/***/ 3620:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HY": () => (/* binding */ PaymentGateway),
/* harmony export */   "iF": () => (/* binding */ OrderStatus),
/* harmony export */   "bG": () => (/* binding */ PaymentStatus)
/* harmony export */ });
var PaymentGateway;
(function(PaymentGateway) {
    PaymentGateway["FULL_WALLET_PAYMENT"] = "FULL_WALLET_PAYMENT";
    PaymentGateway["STRIPE"] = "STRIPE";
    PaymentGateway["PAYPAL"] = "PAYPAL";
    PaymentGateway["RAZORPAY"] = "RAZORPAY";
    PaymentGateway["MOLLIE"] = "MOLLIE";
})(PaymentGateway || (PaymentGateway = {}));
var OrderStatus;
(function(OrderStatus) {
    OrderStatus["PENDING"] = 'order-pending';
    OrderStatus[// PROCESSING = 'order-processing',
    "COMPLETED"] = 'order-completed';
    OrderStatus["CANCELLED"] = 'order-cancelled';
    OrderStatus["REFUNDED"] = 'order-refunded';
    OrderStatus["FAILED"] = 'order-failed';
})(OrderStatus || (OrderStatus = {}));
var PaymentStatus;
(function(PaymentStatus) {
    PaymentStatus["PENDING"] = 'payment-pending';
    PaymentStatus["PROCESSING"] = 'payment-processing';
    PaymentStatus["SUCCESS"] = 'payment-success';
    PaymentStatus["FAILED"] = 'payment-failed';
    PaymentStatus["REVERSAL"] = 'payment-reversal';
    PaymentStatus["WALLET"] = 'payment-wallet';
})(PaymentStatus || (PaymentStatus = {}));


/***/ })

};
;