"use strict";var _createClass=function(){function a(b,e){for(var g,f=0;f<e.length;f++)g=e[f],g.enumerable=g.enumerable||!1,g.configurable=!0,"value"in g&&(g.writable=!0),Object.defineProperty(b,g.key,g)}return function(b,e,f){return e&&a(b.prototype,e),f&&a(b,f),b}}(),_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a};function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}var __decorate=function(a,b,e,f){var j,g=arguments.length,h=3>g?b:null===f?f=Object.getOwnPropertyDescriptor(b,e):f;if("object"===("undefined"==typeof Reflect?"undefined":_typeof(Reflect))&&"function"==typeof Reflect.decorate)h=Reflect.decorate(a,b,e,f);else for(var l=a.length-1;0<=l;l--)(j=a[l])&&(h=(3>g?j(h):3<g?j(b,e,h):j(b,e))||h);return 3<g&&h&&Object.defineProperty(b,e,h),h},__metadata=function(a,b){if("object"===("undefined"==typeof Reflect?"undefined":_typeof(Reflect))&&"function"==typeof Reflect.metadata)return Reflect.metadata(a,b)},core_1=require("@angular/core"),http_1=require("@angular/http");require("rxjs/add/operator/toPromise"),require("rxjs/add/operator/map"),require("rxjs/add/operator/catch");var rpc=require("errisy-rpc"),ShopCore=function(){function a(b){_classCallCheck(this,a),this.$_Angular2HttpClient=b,this.$baseURL=""}return _createClass(a,[{key:"getShop",value:function(){return this.$_Angular2HttpClient.post(this.$baseURL+"/management/fuel.rpc.js?ShopCore-getShop",rpc.buildClientData()).map(rpc.Converter.convertJsonResponse).toPromise()}},{key:"createShop",value:function(){return this.$_Angular2HttpClient.post(this.$baseURL+"/management/fuel.rpc.js?ShopCore-createShop",rpc.buildClientData()).map(rpc.Converter.convertJsonResponse).toPromise()}},{key:"updateShop",value:function(e){return this.$_Angular2HttpClient.post(this.$baseURL+"/management/fuel.rpc.js?ShopCore-updateShop",rpc.buildClientData(e)).map(rpc.Converter.convertJsonResponse).toPromise()}},{key:"getShop url",get:function(){return this.$baseURL+"/management/fuel.rpc.js?ShopCore-getShop&"}},{key:"createShop url",get:function(){return this.$baseURL+"/management/fuel.rpc.js?ShopCore-createShop&"}},{key:"updateShop url",get:function(){return this.$baseURL+"/management/fuel.rpc.js?ShopCore-updateShop&"}}]),a}();ShopCore=__decorate([core_1.Injectable(),__metadata("design:paramtypes",[http_1.Http])],ShopCore),exports.ShopCore=ShopCore;var EntrySuffixCore=function(){function a(b){_classCallCheck(this,a),this.$_Angular2HttpClient=b,this.$baseURL=""}return _createClass(a,[{key:"search",value:function(e,f,g){return this.$_Angular2HttpClient.post(this.$baseURL+"/management/fuel.rpc.js?EntrySuffixCore-search",rpc.buildClientData(e,f,g)).map(rpc.Converter.convertJsonResponse).toPromise()}},{key:"update",value:function(e){return this.$_Angular2HttpClient.post(this.$baseURL+"/management/fuel.rpc.js?EntrySuffixCore-update",rpc.buildClientData(e)).map(rpc.Converter.convertBooleanResponse).toPromise()}},{key:"count",value:function(e){return this.$_Angular2HttpClient.post(this.$baseURL+"/management/fuel.rpc.js?EntrySuffixCore-count",rpc.buildClientData(e)).map(rpc.Converter.convertNumberResponse).toPromise()}},{key:"insert",value:function(e){return this.$_Angular2HttpClient.post(this.$baseURL+"/management/fuel.rpc.js?EntrySuffixCore-insert",rpc.buildClientData(e)).map(rpc.Converter.convertJsonResponse).toPromise()}},{key:"delete",value:function(e){return this.$_Angular2HttpClient.post(this.$baseURL+"/management/fuel.rpc.js?EntrySuffixCore-delete",rpc.buildClientData(e)).map(rpc.Converter.convertBooleanResponse).toPromise()}},{key:"create",value:function(){return this.$_Angular2HttpClient.post(this.$baseURL+"/management/fuel.rpc.js?EntrySuffixCore-create",rpc.buildClientData()).map(rpc.Converter.convertJsonResponse).toPromise()}},{key:"searchProductsByName",value:function(e){return this.$_Angular2HttpClient.post(this.$baseURL+"/management/fuel.rpc.js?EntrySuffixCore-searchProductsByName",rpc.buildClientData(e)).map(rpc.Converter.convertJsonResponse).toPromise()}},{key:"upload",value:function(){return this.$_Angular2HttpClient.post(this.$baseURL+"/management/fuel.rpc.js?EntrySuffixCore-upload",rpc.buildClientData.apply(rpc,arguments)).map(rpc.Converter.convertJsonResponse).toPromise()}},{key:"all",value:function(){return this.$_Angular2HttpClient.post(this.$baseURL+"/management/fuel.rpc.js?EntrySuffixCore-all",rpc.buildClientData()).map(rpc.Converter.convertJsonResponse).toPromise()}},{key:"fetch",value:function(e){return this.$_Angular2HttpClient.post(this.$baseURL+"/management/fuel.rpc.js?EntrySuffixCore-fetch",rpc.buildClientData(e)).map(rpc.Converter.convertJsonResponse).toPromise()}},{key:"searchByName",value:function(e){return this.$_Angular2HttpClient.post(this.$baseURL+"/management/fuel.rpc.js?EntrySuffixCore-searchByName",rpc.buildClientData(e)).map(rpc.Converter.convertJsonResponse).toPromise()}},{key:"search url",get:function(){return this.$baseURL+"/management/fuel.rpc.js?EntrySuffixCore-search&"}},{key:"update url",get:function(){return this.$baseURL+"/management/fuel.rpc.js?EntrySuffixCore-update&"}},{key:"count url",get:function(){return this.$baseURL+"/management/fuel.rpc.js?EntrySuffixCore-count&"}},{key:"insert url",get:function(){return this.$baseURL+"/management/fuel.rpc.js?EntrySuffixCore-insert&"}},{key:"delete url",get:function(){return this.$baseURL+"/management/fuel.rpc.js?EntrySuffixCore-delete&"}},{key:"create url",get:function(){return this.$baseURL+"/management/fuel.rpc.js?EntrySuffixCore-create&"}},{key:"searchProductsByName url",get:function(){return this.$baseURL+"/management/fuel.rpc.js?EntrySuffixCore-searchProductsByName&"}},{key:"upload url",get:function(){return this.$baseURL+"/management/fuel.rpc.js?EntrySuffixCore-upload&"}},{key:"all url",get:function(){return this.$baseURL+"/management/fuel.rpc.js?EntrySuffixCore-all&"}},{key:"fetch url",get:function(){return this.$baseURL+"/management/fuel.rpc.js?EntrySuffixCore-fetch&"}},{key:"searchByName url",get:function(){return this.$baseURL+"/management/fuel.rpc.js?EntrySuffixCore-searchByName&"}}]),a}();EntrySuffixCore=__decorate([core_1.Injectable(),__metadata("design:paramtypes",[http_1.Http])],EntrySuffixCore),exports.EntrySuffixCore=EntrySuffixCore;var ProductCore=function(){function a(b){_classCallCheck(this,a),this.$_Angular2HttpClient=b,this.$baseURL=""}return _createClass(a,[{key:"fetch",value:function(e){return this.$_Angular2HttpClient.post(this.$baseURL+"/management/fuel.rpc.js?ProductCore-fetch",rpc.buildClientData(e)).map(rpc.Converter.convertJsonResponse).toPromise()}},{key:"fetch url",get:function(){return this.$baseURL+"/management/fuel.rpc.js?ProductCore-fetch&"}}]),a}();ProductCore=__decorate([core_1.Injectable(),__metadata("design:paramtypes",[http_1.Http])],ProductCore),exports.ProductCore=ProductCore;