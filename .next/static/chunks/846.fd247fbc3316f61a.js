(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[846],{86664:function(e,t,n){!function(e,t){"use strict";function n(e,t){return e(t={exports:{}},t.exports),t.exports}t=t&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t;var r="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";function o(){}function i(){}i.resetWarningCache=o;var u=function(){function e(e,t,n,o,i,u){if(u!==r){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:o};return n.PropTypes=n,n},c=n((function(e){e.exports=u()}));function a(e){return a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function f(e,t){return m(e)||d(e,t)||y(e,t)||b()}function m(e){if(Array.isArray(e))return e}function d(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,i=void 0;try{for(var u,c=e[Symbol.iterator]();!(r=(u=c.next()).done)&&(n.push(u.value),!t||n.length!==t);r=!0);}catch(a){o=!0,i=a}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return n}}function y(e,t){if(e){if("string"===typeof e)return v(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?v(e,t):void 0}}function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function b(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var h=function(e){var n=t.useRef(e);return t.useEffect((function(){n.current=e}),[e]),n.current},g=function(e){return null!==e&&"object"===a(e)},E=function(e){return g(e)&&"function"===typeof e.then},w=function(e){return g(e)&&"function"===typeof e.elements&&"function"===typeof e.createToken&&"function"===typeof e.createPaymentMethod&&"function"===typeof e.confirmCardPayment},j="[object Object]",O=function e(t,n){if(!g(t)||!g(n))return t===n;var r=Array.isArray(t);if(r!==Array.isArray(n))return!1;var o=Object.prototype.toString.call(t)===j;if(o!==(Object.prototype.toString.call(n)===j))return!1;if(!o&&!r)return t===n;var i=Object.keys(t),u=Object.keys(n);if(i.length!==u.length)return!1;for(var c={},a=0;a<i.length;a+=1)c[i[a]]=!0;for(var s=0;s<u.length;s+=1)c[u[s]]=!0;var l=Object.keys(c);if(l.length!==i.length)return!1;var p=t,f=n,m=function(t){return e(p[t],f[t])};return l.every(m)},S=function(e,t,n){return g(e)?Object.keys(e).reduce((function(r,o){var i=!g(t)||!O(e[o],t[o]);return n.includes(o)?(i&&console.warn("Unsupported prop change: options.".concat(o," is not a mutable property.")),r):i?p(p({},r||{}),{},s({},o,e[o])):r}),null):null},P="Invalid prop `stripe` supplied to `Elements`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.",k=function(e){if(null===e||w(e))return e;throw new Error(P)},C=function(e){if(E(e))return{tag:"async",stripePromise:Promise.resolve(e).then(k)};var t=k(e);return null===t?{tag:"empty"}:{tag:"sync",stripe:t}},A=t.createContext(null);A.displayName="ElementsContext";var _=function(e,t){if(!e)throw new Error("Could not find Elements context; You need to wrap the part of your app that ".concat(t," in an <Elements> provider."));return e},x=function(e){var n=e.stripe,r=e.options,o=e.children,i=t.useRef(!1),u=t.useRef(!0),c=t.useMemo((function(){return C(n)}),[n]),a=f(t.useState((function(){return{stripe:null,elements:null}})),2),s=a[0],l=a[1],p=h(n);null!==p&&p!==n&&console.warn("Unsupported prop change on Elements: You cannot change the `stripe` prop after setting it."),i.current||("sync"===c.tag&&(i.current=!0,l({stripe:c.stripe,elements:c.stripe.elements(r)})),"async"===c.tag&&(i.current=!0,c.stripePromise.then((function(e){e&&u.current&&l({stripe:e,elements:e.elements(r)})}))));var m=h(r);return t.useEffect((function(){if(s.elements){var e=S(r,m,["clientSecret","fonts"]);e&&s.elements.update(e)}}),[r,m,s.elements]),t.useEffect((function(){return function(){u.current=!1}}),[]),t.useEffect((function(){var e=s.stripe;e&&e._registerWrapper&&e.registerAppInfo&&(e._registerWrapper({name:"react-stripe-js",version:"1.7.0"}),e.registerAppInfo({name:"react-stripe-js",version:"1.7.0",url:"https://stripe.com/docs/stripe-js/react"}))}),[s.stripe]),t.createElement(A.Provider,{value:s},o)};x.propTypes={stripe:c.any,options:c.object};var R=function(e){var n=t.useContext(A);return _(n,e)},T=function(){return R("calls useElements()").elements},B=function(){return R("calls useStripe()").stripe},I=function(e){return(0,e.children)(R("mounts <ElementsConsumer>"))};I.propTypes={children:c.func.isRequired};var N=function(e){var n=t.useRef(e);return t.useEffect((function(){n.current=e}),[e]),function(){n.current&&n.current.apply(n,arguments)}},M=function(){},L=function(e){return e.charAt(0).toUpperCase()+e.slice(1)},W=function(e,n){var r="".concat(L(e),"Element"),o=n?function(e){R("mounts <".concat(r,">"));var n=e.id,o=e.className;return t.createElement("div",{id:n,className:o})}:function(n){var o=n.id,i=n.className,u=n.options,c=void 0===u?{}:u,a=n.onBlur,s=void 0===a?M:a,l=n.onFocus,p=void 0===l?M:l,f=n.onReady,m=void 0===f?M:f,d=n.onChange,y=void 0===d?M:d,v=n.onEscape,b=void 0===v?M:v,g=n.onClick,E=void 0===g?M:g,w=R("mounts <".concat(r,">")).elements,j=t.useRef(null),O=t.useRef(null),P=N(m),k=N(s),C=N(p),A=N(E),_=N(y),x=N(b);t.useLayoutEffect((function(){if(null==j.current&&w&&null!=O.current){var t=w.create(e,c);j.current=t,t.mount(O.current),t.on("ready",(function(){return P(t)})),t.on("change",_),t.on("blur",k),t.on("focus",C),t.on("escape",x),t.on("click",A)}}));var T=h(c);return t.useEffect((function(){if(j.current){var e=S(c,T,["paymentRequest"]);e&&j.current.update(e)}}),[c,T]),t.useLayoutEffect((function(){return function(){j.current&&j.current.destroy()}}),[]),t.createElement("div",{id:o,className:i,ref:O})};return o.propTypes={id:c.string,className:c.string,onChange:c.func,onBlur:c.func,onFocus:c.func,onReady:c.func,onClick:c.func,options:c.object},o.displayName=r,o.__elementType=e,o},q="undefined"===typeof window,D=W("auBankAccount",q),F=W("card",q),U=W("cardNumber",q),Y=W("cardExpiry",q),$=W("cardCvc",q),z=W("fpxBank",q),H=W("iban",q),J=W("idealBank",q),V=W("p24Bank",q),G=W("epsBank",q),K=W("payment",q),Q=W("paymentRequestButton",q),X=W("linkAuthentication",q),Z=W("shippingAddress",q),ee=W("affirmMessage",q),te=W("afterpayClearpayMessage",q);e.AffirmMessageElement=ee,e.AfterpayClearpayMessageElement=te,e.AuBankAccountElement=D,e.CardCvcElement=$,e.CardElement=F,e.CardExpiryElement=Y,e.CardNumberElement=U,e.Elements=x,e.ElementsConsumer=I,e.EpsBankElement=G,e.FpxBankElement=z,e.IbanElement=H,e.IdealBankElement=J,e.LinkAuthenticationElement=X,e.P24BankElement=V,e.PaymentElement=K,e.PaymentRequestButtonElement=Q,e.ShippingAddressElement=Z,e.useElements=T,e.useStripe=B,Object.defineProperty(e,"__esModule",{value:!0})}(t,n(67294))},54465:function(e,t,n){"use strict";n.d(t,{J:function(){return p}});var r="https://js.stripe.com/v3",o=/^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,i="loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used",u=null,c=function(e){return null!==u||(u=new Promise((function(t,n){if("undefined"!==typeof window)if(window.Stripe&&e&&console.warn(i),window.Stripe)t(window.Stripe);else try{var u=function(){for(var e=document.querySelectorAll('script[src^="'.concat(r,'"]')),t=0;t<e.length;t++){var n=e[t];if(o.test(n.src))return n}return null}();u&&e?console.warn(i):u||(u=function(e){var t=e&&!e.advancedFraudSignals?"?advancedFraudSignals=false":"",n=document.createElement("script");n.src="".concat(r).concat(t);var o=document.head||document.body;if(!o)throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");return o.appendChild(n),n}(e)),u.addEventListener("load",(function(){window.Stripe?t(window.Stripe):n(new Error("Stripe.js not available"))})),u.addEventListener("error",(function(){n(new Error("Failed to load Stripe.js"))}))}catch(c){return void n(c)}else t(null)}))),u},a=function(e,t,n){if(null===e)return null;var r=e.apply(void 0,t);return function(e,t){e&&e._registerWrapper&&e._registerWrapper({name:"stripe-js",version:"1.23.0",startTime:t})}(r,n),r},s=Promise.resolve().then((function(){return c(null)})),l=!1;s.catch((function(e){l||console.warn(e)}));var p=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];l=!0;var r=Date.now();return s.then((function(e){return a(e,t,r)}))}},41609:function(e,t,n){var r=n(280),o=n(64160),i=n(35694),u=n(1469),c=n(98612),a=n(44144),s=n(25726),l=n(36719),p=Object.prototype.hasOwnProperty;e.exports=function(e){if(null==e)return!0;if(c(e)&&(u(e)||"string"==typeof e||"function"==typeof e.splice||a(e)||l(e)||i(e)))return!e.length;var t=o(e);if("[object Map]"==t||"[object Set]"==t)return!e.size;if(s(e))return!r(e).length;for(var n in e)if(p.call(e,n))return!1;return!0}}}]);