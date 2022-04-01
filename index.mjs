// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/regexp-whitespace@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@esm/index.mjs";var e=t.isPrimitive,i=r,n=s;var d=function(t){var r,s,d,m;if(!e(t))throw new TypeError(n("invalid argument. Must provide a string. Value: `%s`.",t));for(r=!0,s="",m=0;m<t.length;m++)d=t.charAt(m),i.REGEXP.test(d)?(s+=d,r=!0):r?(s+=d.toUpperCase(),r=!1):s+=d;return s};export{d as default};
//# sourceMappingURL=index.mjs.map
