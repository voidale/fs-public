"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[50560],{44507:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){(0,r.default)(2,arguments);var a=(0,u.default)(e,n),o=(0,u.default)(t,n);return a.getTime()===o.getTime()};var r=a(n(68734)),u=a(n(69209));function a(e){return e&&e.__esModule?e:{default:e}}e.exports=t.default},68734:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")},e.exports=t.default},69209:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){(0,u.default)(1,arguments);var n=t||{},o=n.locale,l=o&&o.options&&o.options.weekStartsOn,f=null==l?0:(0,a.default)(l),s=null==n.weekStartsOn?f:(0,a.default)(n.weekStartsOn);if(!(s>=0&&s<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var d=(0,r.default)(e),i=d.getUTCDay(),c=(i<s?7:0)+i-s;return d.setUTCDate(d.getUTCDate()-c),d.setUTCHours(0,0,0,0),d};var r=o(n(71171)),u=o(n(68734)),a=o(n(82084));function o(e){return e&&e.__esModule?e:{default:e}}e.exports=t.default},82084:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);if(isNaN(t))return t;return t<0?Math.ceil(t):Math.floor(t)},e.exports=t.default},50560:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,u=(r=n(44507))&&r.__esModule?r:{default:r};var a=["nede\u013eu","pondelok","utorok","stredu","\u0161tvrtok","piatok","sobotu"];function o(e){return 4===e?"'vo' eeee 'o' p":"'v "+a[e]+" o' p"}var l={lastWeek:function(e,t,n){var r=e.getUTCDay();return(0,u.default)(e,t,n)?o(r):function(e){var t=a[e];switch(e){case 0:case 3:case 6:return"'minul\xfa "+t+" o' p";default:return"'minul\xfd' eeee 'o' p"}}(r)},yesterday:"'v\u010dera o' p",today:"'dnes o' p",tomorrow:"'zajtra o' p",nextWeek:function(e,t,n){var r=e.getUTCDay();return(0,u.default)(e,t,n)?o(r):function(e){var t=a[e];switch(e){case 0:case 4:case 6:return"'bud\xfacu "+t+" o' p";default:return"'bud\xfaci' eeee 'o' p"}}(r)},other:"P"},f=function(e,t,n,r){var u=l[e];return"function"===typeof u?u(t,n,r):u};t.default=f,e.exports=t.default},71171:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){(0,u.default)(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"===typeof e&&"[object Date]"===t?new Date(e.getTime()):"number"===typeof e||"[object Number]"===t?new Date(e):("string"!==typeof e&&"[object String]"!==t||"undefined"===typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))};var r,u=(r=n(68734))&&r.__esModule?r:{default:r};e.exports=t.default}}]);
//# sourceMappingURL=50560.5dbd4bd307bb65d3.js.map