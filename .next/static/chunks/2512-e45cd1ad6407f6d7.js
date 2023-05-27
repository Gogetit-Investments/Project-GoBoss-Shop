"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2512],{58363:function(e,n){n.Z=function(e,n){if(e&&n){var t=Array.isArray(n)?n:n.split(","),r=e.name||"",o=(e.type||"").toLowerCase(),i=o.replace(/\/.*$/,"");return t.some((function(e){var n=e.trim().toLowerCase();return"."===n.charAt(0)?r.toLowerCase().endsWith(n):n.endsWith("/*")?i===n.replace(/\/.*$/,""):o===n}))}return!0}},32512:function(e,n,t){t.d(n,{uI:function(){return pe}});var r=t(67294),o=t(45697),i=t.n(o),a=t(70655),c=new Map([["aac","audio/aac"],["abw","application/x-abiword"],["arc","application/x-freearc"],["avif","image/avif"],["avi","video/x-msvideo"],["azw","application/vnd.amazon.ebook"],["bin","application/octet-stream"],["bmp","image/bmp"],["bz","application/x-bzip"],["bz2","application/x-bzip2"],["cda","application/x-cdf"],["csh","application/x-csh"],["css","text/css"],["csv","text/csv"],["doc","application/msword"],["docx","application/vnd.openxmlformats-officedocument.wordprocessingml.document"],["eot","application/vnd.ms-fontobject"],["epub","application/epub+zip"],["gz","application/gzip"],["gif","image/gif"],["htm","text/html"],["html","text/html"],["ico","image/vnd.microsoft.icon"],["ics","text/calendar"],["jar","application/java-archive"],["jpeg","image/jpeg"],["jpg","image/jpeg"],["js","text/javascript"],["json","application/json"],["jsonld","application/ld+json"],["mid","audio/midi"],["midi","audio/midi"],["mjs","text/javascript"],["mp3","audio/mpeg"],["mp4","video/mp4"],["mpeg","video/mpeg"],["mpkg","application/vnd.apple.installer+xml"],["odp","application/vnd.oasis.opendocument.presentation"],["ods","application/vnd.oasis.opendocument.spreadsheet"],["odt","application/vnd.oasis.opendocument.text"],["oga","audio/ogg"],["ogv","video/ogg"],["ogx","application/ogg"],["opus","audio/opus"],["otf","font/otf"],["png","image/png"],["pdf","application/pdf"],["php","application/x-httpd-php"],["ppt","application/vnd.ms-powerpoint"],["pptx","application/vnd.openxmlformats-officedocument.presentationml.presentation"],["rar","application/vnd.rar"],["rtf","application/rtf"],["sh","application/x-sh"],["svg","image/svg+xml"],["swf","application/x-shockwave-flash"],["tar","application/x-tar"],["tif","image/tiff"],["tiff","image/tiff"],["ts","video/mp2t"],["ttf","font/ttf"],["txt","text/plain"],["vsd","application/vnd.visio"],["wav","audio/wav"],["weba","audio/webm"],["webm","video/webm"],["webp","image/webp"],["woff","font/woff"],["woff2","font/woff2"],["xhtml","application/xhtml+xml"],["xls","application/vnd.ms-excel"],["xlsx","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],["xml","application/xml"],["xul","application/vnd.mozilla.xul+xml"],["zip","application/zip"],["7z","application/x-7z-compressed"],["mkv","video/x-matroska"],["mov","video/quicktime"],["msg","application/vnd.ms-outlook"]]);function u(e,n){var t=function(e){var n=e.name;if(n&&-1!==n.lastIndexOf(".")&&!e.type){var t=n.split(".").pop().toLowerCase(),r=c.get(t);r&&Object.defineProperty(e,"type",{value:r,writable:!1,configurable:!1,enumerable:!0})}return e}(e);if("string"!==typeof t.path){var r=e.webkitRelativePath;Object.defineProperty(t,"path",{value:"string"===typeof n?n:"string"===typeof r&&r.length>0?r:e.name,writable:!1,configurable:!1,enumerable:!0})}return t}var l=[".DS_Store","Thumbs.db"];function s(e){return"object"===typeof e&&null!==e}function f(e){return m(e.target.files).map((function(e){return u(e)}))}function p(e){return(0,a.__awaiter)(this,void 0,void 0,(function(){return(0,a.__generator)(this,(function(n){switch(n.label){case 0:return[4,Promise.all(e.map((function(e){return e.getFile()})))];case 1:return[2,n.sent().map((function(e){return u(e)}))]}}))}))}function d(e,n){return(0,a.__awaiter)(this,void 0,void 0,(function(){var t;return(0,a.__generator)(this,(function(r){switch(r.label){case 0:return null===e?[2,[]]:e.items?(t=m(e.items).filter((function(e){return"file"===e.kind})),"drop"!==n?[2,t]:[4,Promise.all(t.map(v))]):[3,2];case 1:return[2,g(y(r.sent()))];case 2:return[2,g(m(e.files).map((function(e){return u(e)})))]}}))}))}function g(e){return e.filter((function(e){return-1===l.indexOf(e.name)}))}function m(e){if(null===e)return[];for(var n=[],t=0;t<e.length;t++){var r=e[t];n.push(r)}return n}function v(e){if("function"!==typeof e.webkitGetAsEntry)return b(e);var n=e.webkitGetAsEntry();return n&&n.isDirectory?w(n):b(e)}function y(e){return e.reduce((function(e,n){return(0,a.__spread)(e,Array.isArray(n)?y(n):[n])}),[])}function b(e){var n=e.getAsFile();if(!n)return Promise.reject(e+" is not a File");var t=u(n);return Promise.resolve(t)}function h(e){return(0,a.__awaiter)(this,void 0,void 0,(function(){return(0,a.__generator)(this,(function(n){return[2,e.isDirectory?w(e):D(e)]}))}))}function w(e){var n=e.createReader();return new Promise((function(e,t){var r=[];!function o(){var i=this;n.readEntries((function(n){return(0,a.__awaiter)(i,void 0,void 0,(function(){var i,c,u;return(0,a.__generator)(this,(function(a){switch(a.label){case 0:if(n.length)return[3,5];a.label=1;case 1:return a.trys.push([1,3,,4]),[4,Promise.all(r)];case 2:return i=a.sent(),e(i),[3,4];case 3:return c=a.sent(),t(c),[3,4];case 4:return[3,6];case 5:u=Promise.all(n.map(h)),r.push(u),o(),a.label=6;case 6:return[2]}}))}))}),(function(e){t(e)}))}()}))}function D(e){return(0,a.__awaiter)(this,void 0,void 0,(function(){return(0,a.__generator)(this,(function(n){return[2,new Promise((function(n,t){e.file((function(t){var r=u(t,e.fullPath);n(r)}),(function(e){t(e)}))}))]}))}))}var O=t(58363);function x(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function j(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?x(Object(t),!0).forEach((function(n){F(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):x(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function F(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function A(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==t)return;var r,o,i=[],a=!0,c=!1;try{for(t=t.call(e);!(a=(r=t.next()).done)&&(i.push(r.value),!n||i.length!==n);a=!0);}catch(u){c=!0,o=u}finally{try{a||null==t.return||t.return()}finally{if(c)throw o}}return i}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return E(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return E(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function E(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}var k="file-invalid-type",P="file-too-large",C="file-too-small",S="too-many-files",_=function(e){e=Array.isArray(e)&&1===e.length?e[0]:e;var n=Array.isArray(e)?"one of ".concat(e.join(", ")):e;return{code:k,message:"File type must be ".concat(n)}},z=function(e){return{code:P,message:"File is larger than ".concat(e," ").concat(1===e?"byte":"bytes")}},R=function(e){return{code:C,message:"File is smaller than ".concat(e," ").concat(1===e?"byte":"bytes")}},T={code:S,message:"Too many files"};function I(e,n){var t="application/x-moz-file"===e.type||(0,O.Z)(e,n);return[t,t?null:_(n)]}function L(e,n,t){if(K(e.size))if(K(n)&&K(t)){if(e.size>t)return[!1,z(t)];if(e.size<n)return[!1,R(n)]}else{if(K(n)&&e.size<n)return[!1,R(n)];if(K(t)&&e.size>t)return[!1,z(t)]}return[!0,null]}function K(e){return void 0!==e&&null!==e}function M(e){var n=e.files,t=e.accept,r=e.minSize,o=e.maxSize,i=e.multiple,a=e.maxFiles;return!(!i&&n.length>1||i&&a>=1&&n.length>a)&&n.every((function(e){var n=A(I(e,t),1)[0],i=A(L(e,r,o),1)[0];return n&&i}))}function B(e){return"function"===typeof e.isPropagationStopped?e.isPropagationStopped():"undefined"!==typeof e.cancelBubble&&e.cancelBubble}function N(e){return e.dataTransfer?Array.prototype.some.call(e.dataTransfer.types,(function(e){return"Files"===e||"application/x-moz-file"===e})):!!e.target&&!!e.target.files}function $(e){e.preventDefault()}function U(e){return-1!==e.indexOf("MSIE")||-1!==e.indexOf("Trident/")}function q(e){return-1!==e.indexOf("Edge/")}function G(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window.navigator.userAgent;return U(e)||q(e)}function W(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),o=1;o<t;o++)r[o-1]=arguments[o];return n.some((function(n){return!B(e)&&n&&n.apply(void 0,[e].concat(r)),B(e)}))}}function Z(){return"showOpenFilePicker"in window}function H(e){return e="string"===typeof e?e.split(","):e,[{description:"everything",accept:Array.isArray(e)?e.filter((function(e){return"audio/*"===e||"video/*"===e||"image/*"===e||"text/*"===e||/\w+\/[-+.\w]+/g.test(e)})).reduce((function(e,n){return j(j({},e),{},F({},n,[]))}),{}):{}}]}function Y(e){return e instanceof DOMException&&("AbortError"===e.name||e.code===e.ABORT_ERR)}function J(e){return e instanceof DOMException&&("SecurityError"===e.name||e.code===e.SECURITY_ERR)}var Q=["children"],V=["open"],X=["refKey","role","onKeyDown","onFocus","onBlur","onClick","onDragEnter","onDragOver","onDragLeave","onDrop"],ee=["refKey","onChange","onClick"];function ne(e){return function(e){if(Array.isArray(e))return oe(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||re(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function te(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==t)return;var r,o,i=[],a=!0,c=!1;try{for(t=t.call(e);!(a=(r=t.next()).done)&&(i.push(r.value),!n||i.length!==n);a=!0);}catch(u){c=!0,o=u}finally{try{a||null==t.return||t.return()}finally{if(c)throw o}}return i}(e,n)||re(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function re(e,n){if(e){if("string"===typeof e)return oe(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?oe(e,n):void 0}}function oe(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function ie(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function ae(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?ie(Object(t),!0).forEach((function(n){ce(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ie(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function ce(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function ue(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var le=(0,r.forwardRef)((function(e,n){var t=e.children,o=pe(ue(e,Q)),i=o.open,a=ue(o,V);return(0,r.useImperativeHandle)(n,(function(){return{open:i}}),[i]),r.createElement(r.Fragment,null,t(ae(ae({},a),{},{open:i})))}));le.displayName="Dropzone";var se={disabled:!1,getFilesFromEvent:function(e){return(0,a.__awaiter)(this,void 0,void 0,(function(){return(0,a.__generator)(this,(function(n){return s(e)&&s(e.dataTransfer)?[2,d(e.dataTransfer,e.type)]:function(e){return s(e)&&s(e.target)}(e)?[2,f(e)]:Array.isArray(e)&&e.every((function(e){return"getFile"in e&&"function"===typeof e.getFile}))?[2,p(e)]:[2,[]]}))}))},maxSize:1/0,minSize:0,multiple:!0,maxFiles:0,preventDropOnDocument:!0,noClick:!1,noKeyboard:!1,noDrag:!1,noDragEventsBubbling:!1,validator:null,useFsAccessApi:!0};le.defaultProps=se,le.propTypes={children:i().func,accept:i().oneOfType([i().string,i().arrayOf(i().string)]),multiple:i().bool,preventDropOnDocument:i().bool,noClick:i().bool,noKeyboard:i().bool,noDrag:i().bool,noDragEventsBubbling:i().bool,minSize:i().number,maxSize:i().number,maxFiles:i().number,disabled:i().bool,getFilesFromEvent:i().func,onFileDialogCancel:i().func,onFileDialogOpen:i().func,useFsAccessApi:i().bool,onDragEnter:i().func,onDragLeave:i().func,onDragOver:i().func,onDrop:i().func,onDropAccepted:i().func,onDropRejected:i().func,validator:i().func};var fe={isFocused:!1,isFileDialogActive:!1,isDragActive:!1,isDragAccept:!1,isDragReject:!1,draggedFiles:[],acceptedFiles:[],fileRejections:[]};function pe(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=ae(ae({},se),e),t=n.accept,o=n.disabled,i=n.getFilesFromEvent,a=n.maxSize,c=n.minSize,u=n.multiple,l=n.maxFiles,s=n.onDragEnter,f=n.onDragLeave,p=n.onDragOver,d=n.onDrop,g=n.onDropAccepted,m=n.onDropRejected,v=n.onFileDialogCancel,y=n.onFileDialogOpen,b=n.useFsAccessApi,h=n.preventDropOnDocument,w=n.noClick,D=n.noKeyboard,O=n.noDrag,x=n.noDragEventsBubbling,j=n.validator,F=(0,r.useMemo)((function(){return"function"===typeof y?y:ge}),[y]),A=(0,r.useMemo)((function(){return"function"===typeof v?v:ge}),[v]),E=(0,r.useRef)(null),k=(0,r.useRef)(null),P=(0,r.useReducer)(de,fe),C=te(P,2),S=C[0],_=C[1],z=S.isFocused,R=S.isFileDialogActive,K=S.draggedFiles,U=(0,r.useRef)("undefined"!==typeof window&&window.isSecureContext&&b&&Z()),q=function(){!U.current&&R&&setTimeout((function(){k.current&&(k.current.files.length||(_({type:"closeDialog"}),A()))}),300)};(0,r.useEffect)((function(){return window.addEventListener("focus",q,!1),function(){window.removeEventListener("focus",q,!1)}}),[k,R,A,U]);var Q=(0,r.useRef)([]),V=function(e){E.current&&E.current.contains(e.target)||(e.preventDefault(),Q.current=[])};(0,r.useEffect)((function(){return h&&(document.addEventListener("dragover",$,!1),document.addEventListener("drop",V,!1)),function(){h&&(document.removeEventListener("dragover",$),document.removeEventListener("drop",V))}}),[E,h]);var re=(0,r.useCallback)((function(e){e.preventDefault(),e.persist(),xe(e),Q.current=[].concat(ne(Q.current),[e.target]),N(e)&&Promise.resolve(i(e)).then((function(n){B(e)&&!x||(_({draggedFiles:n,isDragActive:!0,type:"setDraggedFiles"}),s&&s(e))}))}),[i,s,x]),oe=(0,r.useCallback)((function(e){e.preventDefault(),e.persist(),xe(e);var n=N(e);if(n&&e.dataTransfer)try{e.dataTransfer.dropEffect="copy"}catch(t){}return n&&p&&p(e),!1}),[p,x]),ie=(0,r.useCallback)((function(e){e.preventDefault(),e.persist(),xe(e);var n=Q.current.filter((function(e){return E.current&&E.current.contains(e)})),t=n.indexOf(e.target);-1!==t&&n.splice(t,1),Q.current=n,n.length>0||(_({isDragActive:!1,type:"setDraggedFiles",draggedFiles:[]}),N(e)&&f&&f(e))}),[E,f,x]),le=(0,r.useCallback)((function(e,n){var r=[],o=[];e.forEach((function(e){var n=te(I(e,t),2),i=n[0],u=n[1],l=te(L(e,c,a),2),s=l[0],f=l[1],p=j?j(e):null;if(i&&s&&!p)r.push(e);else{var d=[u,f];p&&(d=d.concat(p)),o.push({file:e,errors:d.filter((function(e){return e}))})}})),(!u&&r.length>1||u&&l>=1&&r.length>l)&&(r.forEach((function(e){o.push({file:e,errors:[T]})})),r.splice(0)),_({acceptedFiles:r,fileRejections:o,type:"setFiles"}),d&&d(r,o,n),o.length>0&&m&&m(o,n),r.length>0&&g&&g(r,n)}),[_,u,t,c,a,l,d,g,m,j]),pe=(0,r.useCallback)((function(e){e.preventDefault(),e.persist(),xe(e),Q.current=[],N(e)&&Promise.resolve(i(e)).then((function(n){B(e)&&!x||le(n,e)})),_({type:"reset"})}),[i,le,x]),me=(0,r.useCallback)((function(){if(U.current){_({type:"openDialog"}),F();var e={multiple:u,types:H(t)};window.showOpenFilePicker(e).then((function(e){return i(e)})).then((function(e){le(e,null),_({type:"closeDialog"})})).catch((function(e){Y(e)?(A(e),_({type:"closeDialog"})):J(e)&&(U.current=!1,k.current&&(k.current.value=null,k.current.click()))}))}else k.current&&(_({type:"openDialog"}),F(),k.current.value=null,k.current.click())}),[_,F,A,b,le,t,u]),ve=(0,r.useCallback)((function(e){E.current&&E.current.isEqualNode(e.target)&&(32!==e.keyCode&&13!==e.keyCode||(e.preventDefault(),me()))}),[E,me]),ye=(0,r.useCallback)((function(){_({type:"focus"})}),[]),be=(0,r.useCallback)((function(){_({type:"blur"})}),[]),he=(0,r.useCallback)((function(){w||(G()?setTimeout(me,0):me())}),[w,me]),we=function(e){return o?null:e},De=function(e){return D?null:we(e)},Oe=function(e){return O?null:we(e)},xe=function(e){x&&e.stopPropagation()},je=(0,r.useMemo)((function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.refKey,t=void 0===n?"ref":n,r=e.role,i=e.onKeyDown,a=e.onFocus,c=e.onBlur,u=e.onClick,l=e.onDragEnter,s=e.onDragOver,f=e.onDragLeave,p=e.onDrop,d=ue(e,X);return ae(ae(ce({onKeyDown:De(W(i,ve)),onFocus:De(W(a,ye)),onBlur:De(W(c,be)),onClick:we(W(u,he)),onDragEnter:Oe(W(l,re)),onDragOver:Oe(W(s,oe)),onDragLeave:Oe(W(f,ie)),onDrop:Oe(W(p,pe)),role:"string"===typeof r&&""!==r?r:"button"},t,E),o||D?{}:{tabIndex:0}),d)}}),[E,ve,ye,be,he,re,oe,ie,pe,D,O,o]),Fe=(0,r.useCallback)((function(e){e.stopPropagation()}),[]),Ae=(0,r.useMemo)((function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.refKey,r=void 0===n?"ref":n,o=e.onChange,i=e.onClick,a=ue(e,ee),c=ce({accept:t,multiple:u,type:"file",style:{display:"none"},onChange:we(W(o,pe)),onClick:we(W(i,Fe)),autoComplete:"off",tabIndex:-1},r,k);return ae(ae({},c),a)}}),[k,t,u,pe,o]),Ee=K.length,ke=Ee>0&&M({files:K,accept:t,minSize:c,maxSize:a,multiple:u,maxFiles:l}),Pe=Ee>0&&!ke;return ae(ae({},S),{},{isDragAccept:ke,isDragReject:Pe,isFocused:z&&!o,getRootProps:je,getInputProps:Ae,rootRef:E,inputRef:k,open:we(me)})}function de(e,n){switch(n.type){case"focus":return ae(ae({},e),{},{isFocused:!0});case"blur":return ae(ae({},e),{},{isFocused:!1});case"openDialog":return ae(ae({},fe),{},{isFileDialogActive:!0});case"closeDialog":return ae(ae({},e),{},{isFileDialogActive:!1});case"setDraggedFiles":var t=n.isDragActive,r=n.draggedFiles;return ae(ae({},e),{},{draggedFiles:r,isDragActive:t});case"setFiles":return ae(ae({},e),{},{acceptedFiles:n.acceptedFiles,fileRejections:n.fileRejections});case"reset":return ae({},fe);default:return e}}function ge(){}}}]);