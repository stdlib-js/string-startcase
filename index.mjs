// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import{isPrimitive as t}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/regexp-whitespace@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.0.2-esm/index.mjs";function r(r){var i,o,n,d;if(!t(r))throw new TypeError(e("0hc3N",r));for(i=!0,o="",d=0;d<r.length;d++)n=r.charAt(d),s.REGEXP.test(n)?(o+=n,i=!0):i?(o+=n.toUpperCase(),i=!1):o+=n;return o}export{r as default};
//# sourceMappingURL=index.mjs.map
