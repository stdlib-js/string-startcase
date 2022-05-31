// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/regexp-whitespace@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@esm/index.mjs";var e=t.isPrimitive,i=r,o=s;var m=function(t){var r,s,m,n;if(!e(t))throw new TypeError(o("0hc3N",t));for(r=!0,s="",n=0;n<t.length;n++)m=t.charAt(n),i.REGEXP.test(m)?(s+=m,r=!0):r?(s+=m.toUpperCase(),r=!1):s+=m;return s};export{m as default};
//# sourceMappingURL=index.mjs.map
