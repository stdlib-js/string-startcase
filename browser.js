// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(t="undefined"!=typeof globalThis?globalThis:t||self).startcase=r()}(this,(function(){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var r,e=Object.defineProperty,n=Object.prototype,o=n.toString,u=n.__defineGetter__,i=n.__defineSetter__,c=n.__lookupGetter__,f=n.__lookupSetter__;r=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?e:function(t,r,e){var a,l,p,s;if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((l="value"in e)&&(c.call(t,r)||f.call(t,r)?(a=t.__proto__,t.__proto__=n,delete t[r],t[r]=e.value,t.__proto__=a):t[r]=e.value),p="get"in e,s="set"in e,l&&(p||s))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&u&&u.call(t,r,e.get),s&&i&&i.call(t,r,e.set),t};var a=r;function l(t,r,e){a(t,r,{configurable:!1,enumerable:!1,writable:!1,value:e})}function p(t){return"string"==typeof t}var s="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function y(){return s&&"symbol"==typeof Symbol.toStringTag}var b=Object.prototype.toString;var v=Object.prototype.hasOwnProperty;function d(t,r){return null!=t&&v.call(t,r)}var g="function"==typeof Symbol?Symbol.toStringTag:"";var j=y()?function(t){var r,e,n;if(null==t)return b.call(t);e=t[g],r=d(t,g);try{t[g]=void 0}catch(r){return b.call(t)}return n=b.call(t),r?t[g]=e:delete t[g],n}:function(t){return b.call(t)},m=String.prototype.valueOf;var w=y();function _(t){return"object"==typeof t&&(t instanceof String||(w?function(t){try{return m.call(t),!0}catch(t){return!1}}(t):"[object String]"===j(t)))}function h(t){return p(t)||_(t)}l(h,"isPrimitive",p),l(h,"isObject",_);var O=Array.isArray?Array.isArray:function(t){return"[object Array]"===j(t)};var E=/./;function S(t){return"boolean"==typeof t}var P=Boolean.prototype.toString;var A=y();function T(t){return"object"==typeof t&&(t instanceof Boolean||(A?function(t){try{return P.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===j(t)))}function F(t){return S(t)||T(t)}function B(){return new Function("return this;")()}l(F,"isPrimitive",S),l(F,"isObject",T);var x="object"==typeof self?self:null,C="object"==typeof window?window:null,R="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},G="object"==typeof R?R:null;var V=function(t){if(arguments.length){if(!S(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return B()}if(x)return x;if(C)return C;if(G)return G;throw new Error("unexpected error. Unable to resolve global object.")}(),U=V.document&&V.document.childNodes,k=Int8Array;function L(){return/^\s*function\s*([^(]*)/i}var X=/^\s*function\s*([^(]*)/i;function I(t){return null!==t&&"object"==typeof t}function M(t){var r,e,n,o;if(("Object"===(e=j(t).slice(8,-1))||"Error"===e)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(r=X.exec(n.toString()))return r[1]}return I(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}l(L,"REGEXP",X),l(I,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(r){var e,n;if(!O(r))return!1;if(0===(e=r.length))return!1;for(n=0;n<e;n++)if(!1===t(r[n]))return!1;return!0}}(I));var N="function"==typeof E||"object"==typeof k||"function"==typeof U?function(t){return M(t).toLowerCase()}:function(t){var r;return null===t?"null":"object"===(r=typeof t)?M(t).toLowerCase():r};function D(t){return"function"===N(t)}var q,z=Object.getPrototypeOf;q=D(Object.getPrototypeOf)?z:function(t){var r=function(t){return t.__proto__}(t);return r||null===r?r:"[object Function]"===j(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null};var H=q;var J=Object.prototype;function K(t){var r;return!!function(t){return"object"==typeof t&&null!==t&&!O(t)}(t)&&(r=function(t){return null==t?null:(t=Object(t),H(t))}(t),!r||!d(t,"constructor")&&d(r,"constructor")&&D(r.constructor)&&"[object Function]"===j(r.constructor)&&d(r,"isPrototypeOf")&&D(r.isPrototypeOf)&&(r===J||function(t){var r;for(r in t)if(!d(t,r))return!1;return!0}(t)))}function Q(t,r){return K(r)?d(r,"flags")&&(t.flags=r.flags,!p(t.flags))?new TypeError("invalid option. `flags` option must be a string primitive. Option: `"+t.flags+"`."):d(r,"capture")&&(t.capture=r.capture,!S(t.capture))?new TypeError("invalid option. `capture` option must be a boolean primitive. Option: `"+t.capture+"`."):null:new TypeError("invalid argument. Options must be an object. Value: `"+r+"`.")}var W="[\t\n\v\f\r              \u2028\u2029  　\ufeff]";function Y(t){var r,e;if(arguments.length>0){if(e=Q(r={},t))throw e;return r.capture?new RegExp("("+W+")",r.flags):new RegExp(W,r.flags)}return/[\u0009\u000A\u000B\u000C\u000D\u0020\u0085\u00A0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]/}var Z=Y({capture:!0}),$=Y();return l(Y,"REGEXP",$),l(Y,"REGEXP_CAPTURE",Z),function(t){if(!p(t))throw new TypeError(function(){var t,r=arguments,e="https://stdlib.io/e/"+r[0]+"?";for(t=1;t<r.length;t++)e+="&arg[]="+encodeURIComponent(r[t]);return e}("0hc3N",t));return function(t){var r,e,n,o;for(r=!0,e="",o=0;o<t.length;o++)n=t.charAt(o),$.test(n)?r=!0:r&&(n=n.toUpperCase(),r=!1),e+=n;return e}(t)}}));
//# sourceMappingURL=browser.js.map
