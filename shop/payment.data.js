"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a};function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}var __decorate=function(a,b,e,f){var j,g=arguments.length,h=3>g?b:null===f?f=Object.getOwnPropertyDescriptor(b,e):f;if("object"===("undefined"==typeof Reflect?"undefined":_typeof(Reflect))&&"function"==typeof Reflect.decorate)h=Reflect.decorate(a,b,e,f);else for(var l=a.length-1;0<=l;l--)(j=a[l])&&(h=(3>g?j(h):3<g?j(b,e,h):j(b,e))||h);return 3<g&&h&&Object.defineProperty(b,e,h),h},__metadata=function(a,b){if("object"===("undefined"==typeof Reflect?"undefined":_typeof(Reflect))&&"function"==typeof Reflect.metadata)return Reflect.metadata(a,b)},rpc=require("errisy-rpc"),ServiceOrderItem=function a(){_classCallCheck(this,a)};ServiceOrderItem=__decorate([rpc.struct,__metadata("design:paramtypes",[])],ServiceOrderItem),exports.ServiceOrderItem=ServiceOrderItem;var ServiceOrder=function a(){_classCallCheck(this,a)};ServiceOrder=__decorate([rpc.entity,__metadata("design:paramtypes",[])],ServiceOrder),exports.ServiceOrder=ServiceOrder;var ShoppingCart=function a(){_classCallCheck(this,a)};ShoppingCart=__decorate([rpc.entity,__metadata("design:paramtypes",[])],ShoppingCart),exports.ShoppingCart=ShoppingCart;var PaymentMethods=function a(){_classCallCheck(this,a)};PaymentMethods=__decorate([rpc.struct,__metadata("design:paramtypes",[])],PaymentMethods),exports.PaymentMethods=PaymentMethods;