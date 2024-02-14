// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function t(r){return"number"==typeof r}function i(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function n(r,e,t){var n=!1,a=e-r.length;return a<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+i(a):i(a)+r,n&&(r="-"+r)),r}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function c(r){var e,i,c;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(i=r.arg,c=parseInt(i,10),!isFinite(c)){if(!t(i))throw new Error("invalid integer. Value: "+i);c=0}return c<0&&("u"===r.specifier||10!==e)&&(c=4294967295+c+1),c<0?(i=(-c).toString(e),r.precision&&(i=n(i,r.precision,r.padRight)),i="-"+i):(i=c.toString(e),c||r.precision?r.precision&&(i=n(i,r.precision,r.padRight)):i="",r.sign&&(i=r.sign+i)),16===e&&(r.alternate&&(i="0x"+i),i=r.specifier===o.call(r.specifier)?o.call(i):a.call(i)),8===e&&r.alternate&&"0"!==i.charAt(0)&&(i="0"+i),i}function s(r){return"string"==typeof r}var p=Math.abs,u=String.prototype.toLowerCase,l=String.prototype.toUpperCase,f=String.prototype.replace,g=/e\+(\d)$/,d=/e-(\d)$/,h=/^(\d+)$/,w=/^(\d+)e/,v=/\.0$/,b=/\.0*e/,y=/(\..*[^0])0*e/;function m(r){var e,i,n=parseFloat(r.arg);if(!isFinite(n)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+i);n=r.arg}switch(r.specifier){case"e":case"E":i=n.toExponential(r.precision);break;case"f":case"F":i=n.toFixed(r.precision);break;case"g":case"G":p(n)<1e-4?((e=r.precision)>0&&(e-=1),i=n.toExponential(e)):i=n.toPrecision(r.precision),r.alternate||(i=f.call(i,y,"$1e"),i=f.call(i,b,"e"),i=f.call(i,v,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return i=f.call(i,g,"e+0$1"),i=f.call(i,d,"e-0$1"),r.alternate&&(i=f.call(i,h,"$1."),i=f.call(i,w,"$1.e")),n>=0&&r.sign&&(i=r.sign+i),i=r.specifier===l.call(r.specifier)?l.call(i):u.call(i)}function E(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function x(r,e,t){var i=e-r.length;return i<0?r:r=t?r+E(i):E(i)+r}var k=String.fromCharCode,S=isNaN,j=Array.isArray;function V(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function F(r){var e,t,i,a,o,p,u,l,f;if(!j(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(p="",u=1,l=0;l<r.length;l++)if(s(i=r[l]))p+=i;else{if(e=void 0!==i.precision,!(i=V(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+i+"`.");for(i.mapping&&(u=i.mapping),t=i.flags,f=0;f<t.length;f++)switch(a=t.charAt(f)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===i.width){if(i.width=parseInt(arguments[u],10),u+=1,S(i.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(e&&"*"===i.precision){if(i.precision=parseInt(arguments[u],10),u+=1,S(i.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,e=!1)}switch(i.arg=arguments[u],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(i.padZeros=!1),i.arg=c(i);break;case"s":i.maxWidth=e?i.precision:-1;break;case"c":if(!S(i.arg)){if((o=parseInt(i.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=S(o)?String(i.arg):k(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(i.precision=6),i.arg=m(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=n(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=x(i.arg,i.width,i.padRight)),p+=i.arg||"",u+=1}return p}var A=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function $(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function T(r){var e,t,i,n;for(t=[],n=0,i=A.exec(r);i;)(e=r.slice(n,A.lastIndex-i[0].length)).length&&t.push(e),t.push($(i)),n=A.lastIndex,i=A.exec(r);return(e=r.slice(n)).length&&t.push(e),t}function _(r){return"string"==typeof r}function I(r){var e,t;if(!_(r))throw new TypeError(I("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[T(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return F.apply(null,e)}var O,C=Object.prototype,R=C.toString,Z=C.__defineGetter__,P=C.__defineSetter__,W=C.__lookupGetter__,L=C.__lookupSetter__;O=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var i,n,a,o;if("object"!=typeof r||null===r||"[object Array]"===R.call(r))throw new TypeError(I("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===R.call(t))throw new TypeError(I("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((n="value"in t)&&(W.call(r,e)||L.call(r,e)?(i=r.__proto__,r.__proto__=C,delete r[e],r[e]=t.value,r.__proto__=i):r[e]=t.value),a="get"in t,o="set"in t,n&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&Z&&Z.call(r,e,t.get),o&&P&&P.call(r,e,t.set),r};var G=O;function U(r,e,t){G(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function X(r){return"string"==typeof r}var N="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function B(){return N&&"symbol"==typeof Symbol.toStringTag}var M=Object.prototype.toString;var z=Object.prototype.hasOwnProperty;function D(r,e){return null!=r&&z.call(r,e)}var q="function"==typeof Symbol?Symbol:void 0,H="function"==typeof q?q.toStringTag:"";var J=B()?function(r){var e,t,i;if(null==r)return M.call(r);t=r[H],e=D(r,H);try{r[H]=void 0}catch(e){return M.call(r)}return i=M.call(r),e?r[H]=t:delete r[H],i}:function(r){return M.call(r)},K=String.prototype.valueOf;var Q=B();function Y(r){return"object"==typeof r&&(r instanceof String||(Q?function(r){try{return K.call(r),!0}catch(r){return!1}}(r):"[object String]"===J(r)))}function rr(r){return X(r)||Y(r)}function er(r){return"number"==typeof r}function tr(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function ir(r,e,t){var i=!1,n=e-r.length;return n<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+tr(n):tr(n)+r,i&&(r="-"+r)),r}U(rr,"isPrimitive",X),U(rr,"isObject",Y);var nr=String.prototype.toLowerCase,ar=String.prototype.toUpperCase;function or(r){var e,t,i;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,i=parseInt(t,10),!isFinite(i)){if(!er(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&("u"===r.specifier||10!==e)&&(i=4294967295+i+1),i<0?(t=(-i).toString(e),r.precision&&(t=ir(t,r.precision,r.padRight)),t="-"+t):(t=i.toString(e),i||r.precision?r.precision&&(t=ir(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===ar.call(r.specifier)?ar.call(t):nr.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function cr(r){return"string"==typeof r}var sr=Math.abs,pr=String.prototype.toLowerCase,ur=String.prototype.toUpperCase,lr=String.prototype.replace,fr=/e\+(\d)$/,gr=/e-(\d)$/,dr=/^(\d+)$/,hr=/^(\d+)e/,wr=/\.0$/,vr=/\.0*e/,br=/(\..*[^0])0*e/;function yr(r){var e,t,i=parseFloat(r.arg);if(!isFinite(i)){if(!er(r.arg))throw new Error("invalid floating-point number. Value: "+t);i=r.arg}switch(r.specifier){case"e":case"E":t=i.toExponential(r.precision);break;case"f":case"F":t=i.toFixed(r.precision);break;case"g":case"G":sr(i)<1e-4?((e=r.precision)>0&&(e-=1),t=i.toExponential(e)):t=i.toPrecision(r.precision),r.alternate||(t=lr.call(t,br,"$1e"),t=lr.call(t,vr,"e"),t=lr.call(t,wr,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=lr.call(t,fr,"e+0$1"),t=lr.call(t,gr,"e-0$1"),r.alternate&&(t=lr.call(t,dr,"$1."),t=lr.call(t,hr,"$1.e")),i>=0&&r.sign&&(t=r.sign+t),t=r.specifier===ur.call(r.specifier)?ur.call(t):pr.call(t)}function mr(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function Er(r,e,t){var i=e-r.length;return i<0?r:r=t?r+mr(i):mr(i)+r}var xr=String.fromCharCode,kr=isNaN,Sr=Array.isArray;function jr(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function Vr(r){var e,t,i,n,a,o,c,s,p;if(!Sr(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(o="",c=1,s=0;s<r.length;s++)if(cr(i=r[s]))o+=i;else{if(e=void 0!==i.precision,!(i=jr(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+i+"`.");for(i.mapping&&(c=i.mapping),t=i.flags,p=0;p<t.length;p++)switch(n=t.charAt(p)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===i.width){if(i.width=parseInt(arguments[c],10),c+=1,kr(i.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(e&&"*"===i.precision){if(i.precision=parseInt(arguments[c],10),c+=1,kr(i.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,e=!1)}switch(i.arg=arguments[c],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(i.padZeros=!1),i.arg=or(i);break;case"s":i.maxWidth=e?i.precision:-1;break;case"c":if(!kr(i.arg)){if((a=parseInt(i.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=kr(a)?String(i.arg):xr(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(i.precision=6),i.arg=yr(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=ir(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=Er(i.arg,i.width,i.padRight)),o+=i.arg||"",c+=1}return o}var Fr=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Ar(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function $r(r){var e,t,i,n;for(t=[],n=0,i=Fr.exec(r);i;)(e=r.slice(n,Fr.lastIndex-i[0].length)).length&&t.push(e),t.push(Ar(i)),n=Fr.lastIndex,i=Fr.exec(r);return(e=r.slice(n)).length&&t.push(e),t}function Tr(r){return"string"==typeof r}function _r(r){var e,t,i;if(!Tr(r))throw new TypeError(_r("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=$r(r),(t=new Array(arguments.length))[0]=e,i=1;i<t.length;i++)t[i]=arguments[i];return Vr.apply(null,t)}var Ir=Object.prototype.toString;var Or="function"==typeof Symbol?Symbol:void 0,Cr="function"==typeof Or?Or.toStringTag:"";var Rr=B()?function(r){var e,t,i;if(null==r)return Ir.call(r);t=r[Cr],e=D(r,Cr);try{r[Cr]=void 0}catch(e){return Ir.call(r)}return i=Ir.call(r),e?r[Cr]=t:delete r[Cr],i}:function(r){return Ir.call(r)};var Zr=Array.isArray?Array.isArray:function(r){return"[object Array]"===Rr(r)};var Pr=/./;function Wr(r){return"boolean"==typeof r}var Lr=Boolean,Gr=Boolean.prototype.toString;var Ur=B();function Xr(r){return"object"==typeof r&&(r instanceof Lr||(Ur?function(r){try{return Gr.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===Rr(r)))}function Nr(r){return Wr(r)||Xr(r)}function Br(r){return"number"==typeof r}function Mr(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function zr(r,e,t){var i=!1,n=e-r.length;return n<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+Mr(n):Mr(n)+r,i&&(r="-"+r)),r}U(Nr,"isPrimitive",Wr),U(Nr,"isObject",Xr);var Dr=String.prototype.toLowerCase,qr=String.prototype.toUpperCase;function Hr(r){var e,t,i;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,i=parseInt(t,10),!isFinite(i)){if(!Br(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&("u"===r.specifier||10!==e)&&(i=4294967295+i+1),i<0?(t=(-i).toString(e),r.precision&&(t=zr(t,r.precision,r.padRight)),t="-"+t):(t=i.toString(e),i||r.precision?r.precision&&(t=zr(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===qr.call(r.specifier)?qr.call(t):Dr.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function Jr(r){return"string"==typeof r}var Kr=Math.abs,Qr=String.prototype.toLowerCase,Yr=String.prototype.toUpperCase,re=String.prototype.replace,ee=/e\+(\d)$/,te=/e-(\d)$/,ie=/^(\d+)$/,ne=/^(\d+)e/,ae=/\.0$/,oe=/\.0*e/,ce=/(\..*[^0])0*e/;function se(r){var e,t,i=parseFloat(r.arg);if(!isFinite(i)){if(!Br(r.arg))throw new Error("invalid floating-point number. Value: "+t);i=r.arg}switch(r.specifier){case"e":case"E":t=i.toExponential(r.precision);break;case"f":case"F":t=i.toFixed(r.precision);break;case"g":case"G":Kr(i)<1e-4?((e=r.precision)>0&&(e-=1),t=i.toExponential(e)):t=i.toPrecision(r.precision),r.alternate||(t=re.call(t,ce,"$1e"),t=re.call(t,oe,"e"),t=re.call(t,ae,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=re.call(t,ee,"e+0$1"),t=re.call(t,te,"e-0$1"),r.alternate&&(t=re.call(t,ie,"$1."),t=re.call(t,ne,"$1.e")),i>=0&&r.sign&&(t=r.sign+t),t=r.specifier===Yr.call(r.specifier)?Yr.call(t):Qr.call(t)}function pe(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function ue(r,e,t){var i=e-r.length;return i<0?r:r=t?r+pe(i):pe(i)+r}var le=String.fromCharCode,fe=isNaN,ge=Array.isArray;function de(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function he(r){var e,t,i,n,a,o,c,s,p;if(!ge(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(o="",c=1,s=0;s<r.length;s++)if(Jr(i=r[s]))o+=i;else{if(e=void 0!==i.precision,!(i=de(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+i+"`.");for(i.mapping&&(c=i.mapping),t=i.flags,p=0;p<t.length;p++)switch(n=t.charAt(p)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===i.width){if(i.width=parseInt(arguments[c],10),c+=1,fe(i.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(e&&"*"===i.precision){if(i.precision=parseInt(arguments[c],10),c+=1,fe(i.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,e=!1)}switch(i.arg=arguments[c],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(i.padZeros=!1),i.arg=Hr(i);break;case"s":i.maxWidth=e?i.precision:-1;break;case"c":if(!fe(i.arg)){if((a=parseInt(i.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=fe(a)?String(i.arg):le(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(i.precision=6),i.arg=se(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=zr(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=ue(i.arg,i.width,i.padRight)),o+=i.arg||"",c+=1}return o}var we=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function ve(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function be(r){var e,t,i,n;for(t=[],n=0,i=we.exec(r);i;)(e=r.slice(n,we.lastIndex-i[0].length)).length&&t.push(e),t.push(ve(i)),n=we.lastIndex,i=we.exec(r);return(e=r.slice(n)).length&&t.push(e),t}function ye(r){return"string"==typeof r}function me(r){var e,t;if(!ye(r))throw new TypeError(me("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[be(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return he.apply(null,e)}function Ee(){return new Function("return this;")()}var xe="object"==typeof self?self:null,ke="object"==typeof window?window:null,Se="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},je="object"==typeof Se?Se:null,Ve="object"==typeof globalThis?globalThis:null;var Fe=function(r){if(arguments.length){if(!Wr(r))throw new TypeError(me("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return Ee()}if(Ve)return Ve;if(xe)return xe;if(ke)return ke;if(je)return je;throw new Error("unexpected error. Unable to resolve global object.")}(),Ae=Fe.document&&Fe.document.childNodes,$e=Int8Array;function Te(){return/^\s*function\s*([^(]*)/i}var _e=/^\s*function\s*([^(]*)/i;U(Te,"REGEXP",_e);var Ie=Object.prototype.toString;var Oe="function"==typeof Symbol?Symbol:void 0,Ce="function"==typeof Oe?Oe.toStringTag:"";var Re=B()?function(r){var e,t,i;if(null==r)return Ie.call(r);t=r[Ce],e=D(r,Ce);try{r[Ce]=void 0}catch(e){return Ie.call(r)}return i=Ie.call(r),e?r[Ce]=t:delete r[Ce],i}:function(r){return Ie.call(r)};var Ze=Array.isArray?Array.isArray:function(r){return"[object Array]"===Re(r)};function Pe(r){return"number"==typeof r}function We(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function Le(r,e,t){var i=!1,n=e-r.length;return n<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+We(n):We(n)+r,i&&(r="-"+r)),r}var Ge=String.prototype.toLowerCase,Ue=String.prototype.toUpperCase;function Xe(r){var e,t,i;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,i=parseInt(t,10),!isFinite(i)){if(!Pe(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&("u"===r.specifier||10!==e)&&(i=4294967295+i+1),i<0?(t=(-i).toString(e),r.precision&&(t=Le(t,r.precision,r.padRight)),t="-"+t):(t=i.toString(e),i||r.precision?r.precision&&(t=Le(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===Ue.call(r.specifier)?Ue.call(t):Ge.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function Ne(r){return"string"==typeof r}var Be=Math.abs,Me=String.prototype.toLowerCase,ze=String.prototype.toUpperCase,De=String.prototype.replace,qe=/e\+(\d)$/,He=/e-(\d)$/,Je=/^(\d+)$/,Ke=/^(\d+)e/,Qe=/\.0$/,Ye=/\.0*e/,rt=/(\..*[^0])0*e/;function et(r){var e,t,i=parseFloat(r.arg);if(!isFinite(i)){if(!Pe(r.arg))throw new Error("invalid floating-point number. Value: "+t);i=r.arg}switch(r.specifier){case"e":case"E":t=i.toExponential(r.precision);break;case"f":case"F":t=i.toFixed(r.precision);break;case"g":case"G":Be(i)<1e-4?((e=r.precision)>0&&(e-=1),t=i.toExponential(e)):t=i.toPrecision(r.precision),r.alternate||(t=De.call(t,rt,"$1e"),t=De.call(t,Ye,"e"),t=De.call(t,Qe,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=De.call(t,qe,"e+0$1"),t=De.call(t,He,"e-0$1"),r.alternate&&(t=De.call(t,Je,"$1."),t=De.call(t,Ke,"$1.e")),i>=0&&r.sign&&(t=r.sign+t),t=r.specifier===ze.call(r.specifier)?ze.call(t):Me.call(t)}function tt(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function it(r,e,t){var i=e-r.length;return i<0?r:r=t?r+tt(i):tt(i)+r}var nt=String.fromCharCode,at=isNaN,ot=Array.isArray;function ct(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function st(r){var e,t,i,n,a,o,c,s,p;if(!ot(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(o="",c=1,s=0;s<r.length;s++)if(Ne(i=r[s]))o+=i;else{if(e=void 0!==i.precision,!(i=ct(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+i+"`.");for(i.mapping&&(c=i.mapping),t=i.flags,p=0;p<t.length;p++)switch(n=t.charAt(p)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===i.width){if(i.width=parseInt(arguments[c],10),c+=1,at(i.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(e&&"*"===i.precision){if(i.precision=parseInt(arguments[c],10),c+=1,at(i.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,e=!1)}switch(i.arg=arguments[c],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(i.padZeros=!1),i.arg=Xe(i);break;case"s":i.maxWidth=e?i.precision:-1;break;case"c":if(!at(i.arg)){if((a=parseInt(i.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=at(a)?String(i.arg):nt(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(i.precision=6),i.arg=et(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=Le(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=it(i.arg,i.width,i.padRight)),o+=i.arg||"",c+=1}return o}var pt=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function ut(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function lt(r){var e,t,i,n;for(t=[],n=0,i=pt.exec(r);i;)(e=r.slice(n,pt.lastIndex-i[0].length)).length&&t.push(e),t.push(ut(i)),n=pt.lastIndex,i=pt.exec(r);return(e=r.slice(n)).length&&t.push(e),t}function ft(r){return"string"==typeof r}function gt(r){var e,t;if(!ft(r))throw new TypeError(gt("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[lt(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return st.apply(null,e)}function dt(r){return null!==r&&"object"==typeof r}function ht(r){var e,t,i,n;if(("Object"===(t=Rr(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(i=r.constructor).name)return i.name;if(e=_e.exec(i.toString()))return e[1]}return dt(n=r)&&(n._isBuffer||n.constructor&&"function"==typeof n.constructor.isBuffer&&n.constructor.isBuffer(n))?"Buffer":t}U(dt,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(gt("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,i;if(!Ze(e))return!1;if(0===(t=e.length))return!1;for(i=0;i<t;i++)if(!1===r(e[i]))return!1;return!0}}(dt));var wt="function"==typeof Pr||"object"==typeof $e||"function"==typeof Ae?function(r){return ht(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?ht(r).toLowerCase():e};function vt(r){return"function"===wt(r)}var bt,yt=Object,mt=Object.getPrototypeOf;bt=vt(Object.getPrototypeOf)?mt:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===Rr(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var Et=bt;var xt=Object.prototype;function kt(r){var e;return!!function(r){return"object"==typeof r&&null!==r&&!Zr(r)}(r)&&(e=function(r){return null==r?null:(r=yt(r),Et(r))}(r),!e||!D(r,"constructor")&&D(e,"constructor")&&vt(e.constructor)&&"[object Function]"===Rr(e.constructor)&&D(e,"isPrototypeOf")&&vt(e.isPrototypeOf)&&(e===xt||function(r){var e;for(e in r)if(!D(r,e))return!1;return!0}(r)))}function St(r,e){return kt(e)?D(e,"flags")&&(r.flags=e.flags,!X(r.flags))?new TypeError(me("invalid option. `%s` option must be a string. Option: `%s`.","flags",r.flags)):D(e,"capture")&&(r.capture=e.capture,!Wr(r.capture))?new TypeError(me("invalid option. `%s` option must be a boolean. Option: `%s`.","capture",r.capture)):null:new TypeError(me("invalid argument. Options argument must be an object. Value: `%s`.",e))}var jt="[\t\n\v\f\r              \u2028\u2029  　\ufeff]";function Vt(r){var e,t;if(arguments.length>0){if(t=St(e={},r))throw t;return e.capture?new RegExp("("+jt+")",e.flags):new RegExp(jt,e.flags)}return/[\u0009\u000A\u000B\u000C\u000D\u0020\u0085\u00A0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]/}var Ft=Vt({capture:!0}),At=Vt();function $t(r){if(!X(r))throw new TypeError(_r("invalid argument. Must provide a string. Value: `%s`.",r));return function(r){var e,t,i,n;for(e=!0,t="",n=0;n<r.length;n++)i=r.charAt(n),At.test(i)?e=!0:e&&(i=i.toUpperCase(),e=!1),t+=i;return t}(r)}U(Vt,"REGEXP",At),U(Vt,"REGEXP_CAPTURE",Ft);export{$t as default};
//# sourceMappingURL=mod.js.map
