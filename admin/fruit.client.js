"use strict";var _createClass=function(){function a(b,e){for(var g,f=0;f<e.length;f++)g=e[f],g.enumerable=g.enumerable||!1,g.configurable=!0,"value"in g&&(g.writable=!0),Object.defineProperty(b,g.key,g)}return function(b,e,f){return e&&a(b.prototype,e),f&&a(b,f),b}}(),_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a};function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}var __decorate=function(a,b,e,f){var j,g=arguments.length,h=3>g?b:null===f?f=Object.getOwnPropertyDescriptor(b,e):f;if("object"===("undefined"==typeof Reflect?"undefined":_typeof(Reflect))&&"function"==typeof Reflect.decorate)h=Reflect.decorate(a,b,e,f);else for(var l=a.length-1;0<=l;l--)(j=a[l])&&(h=(3>g?j(h):3<g?j(b,e,h):j(b,e))||h);return 3<g&&h&&Object.defineProperty(b,e,h),h},__metadata=function(a,b){if("object"===("undefined"==typeof Reflect?"undefined":_typeof(Reflect))&&"function"==typeof Reflect.metadata)return Reflect.metadata(a,b)},core_1=require("@angular/core"),http_1=require("@angular/http"),rpc=require("errisy-rpc"),ProductCore=function(){function a(b){_classCallCheck(this,a),this.$_Angular2HttpClient=b,this.$baseURL=""}return _createClass(a,[{key:"search",value:function(e,f,g){return this.$_Angular2HttpClient.post(this.$baseURL+"/admin/fruit.rpc.js?ProductCore-search",rpc.buildClientData(e,f,g)).map(rpc.Converter.convertJsonResponse).toPromise()}},{key:"update",value:function(e){return this.$_Angular2HttpClient.post(this.$baseURL+"/admin/fruit.rpc.js?ProductCore-update",rpc.buildClientData(e)).map(rpc.Converter.convertBooleanResponse).toPromise()}},{key:"count",value:function(e){return this.$_Angular2HttpClient.post(this.$baseURL+"/admin/fruit.rpc.js?ProductCore-count",rpc.buildClientData(e)).map(rpc.Converter.convertNumberResponse).toPromise()}},{key:"insert",value:function(e){return this.$_Angular2HttpClient.post(this.$baseURL+"/admin/fruit.rpc.js?ProductCore-insert",rpc.buildClientData(e)).map(rpc.Converter.convertJsonResponse).toPromise()}},{key:"delete",value:function(e){return this.$_Angular2HttpClient.post(this.$baseURL+"/admin/fruit.rpc.js?ProductCore-delete",rpc.buildClientData(e)).map(rpc.Converter.convertBooleanResponse).toPromise()}},{key:"create",value:function(){return this.$_Angular2HttpClient.post(this.$baseURL+"/admin/fruit.rpc.js?ProductCore-create",rpc.buildClientData()).map(rpc.Converter.convertJsonResponse).toPromise()}},{key:"upload",value:function(){return this.$_Angular2HttpClient.post(this.$baseURL+"/admin/fruit.rpc.js?ProductCore-upload",rpc.buildClientData.apply(rpc,arguments)).map(rpc.Converter.convertJsonResponse).toPromise()}},{key:"all",value:function(){return this.$_Angular2HttpClient.post(this.$baseURL+"/admin/fruit.rpc.js?ProductCore-all",rpc.buildClientData()).map(rpc.Converter.convertJsonResponse).toPromise()}},{key:"fetch",value:function(e){return this.$_Angular2HttpClient.post(this.$baseURL+"/admin/fruit.rpc.js?ProductCore-fetch",rpc.buildClientData(e)).map(rpc.Converter.convertJsonResponse).toPromise()}},{key:"searchByName",value:function(e){return this.$_Angular2HttpClient.post(this.$baseURL+"/admin/fruit.rpc.js?ProductCore-searchByName",rpc.buildClientData(e)).map(rpc.Converter.convertJsonResponse).toPromise()}},{key:"search url",get:function(){return this.$baseURL+"/admin/fruit.rpc.js?ProductCore-search&"}},{key:"update url",get:function(){return this.$baseURL+"/admin/fruit.rpc.js?ProductCore-update&"}},{key:"count url",get:function(){return this.$baseURL+"/admin/fruit.rpc.js?ProductCore-count&"}},{key:"insert url",get:function(){return this.$baseURL+"/admin/fruit.rpc.js?ProductCore-insert&"}},{key:"delete url",get:function(){return this.$baseURL+"/admin/fruit.rpc.js?ProductCore-delete&"}},{key:"create url",get:function(){return this.$baseURL+"/admin/fruit.rpc.js?ProductCore-create&"}},{key:"upload url",get:function(){return this.$baseURL+"/admin/fruit.rpc.js?ProductCore-upload&"}},{key:"all url",get:function(){return this.$baseURL+"/admin/fruit.rpc.js?ProductCore-all&"}},{key:"fetch url",get:function(){return this.$baseURL+"/admin/fruit.rpc.js?ProductCore-fetch&"}},{key:"searchByName url",get:function(){return this.$baseURL+"/admin/fruit.rpc.js?ProductCore-searchByName&"}}]),a}();ProductCore=__decorate([core_1.Injectable(),__metadata("design:paramtypes",[http_1.Http])],ProductCore),exports.ProductCore=ProductCore;var CategoryCore=function(){function a(b){_classCallCheck(this,a),this.$_Angular2HttpClient=b,this.$baseURL=""}return _createClass(a,[{key:"search",value:function(e,f,g){return this.$_Angular2HttpClient.post(this.$baseURL+"/admin/fruit.rpc.js?CategoryCore-search",rpc.buildClientData(e,f,g)).map(rpc.Converter.convertJsonResponse).toPromise()}},{key:"update",value:function(e){return this.$_Angular2HttpClient.post(this.$baseURL+"/admin/fruit.rpc.js?CategoryCore-update",rpc.buildClientData(e)).map(rpc.Converter.convertBooleanResponse).toPromise()}},{key:"count",value:function(e){return this.$_Angular2HttpClient.post(this.$baseURL+"/admin/fruit.rpc.js?CategoryCore-count",rpc.buildClientData(e)).map(rpc.Converter.convertNumberResponse).toPromise()}},{key:"insert",value:function(e){return this.$_Angular2HttpClient.post(this.$baseURL+"/admin/fruit.rpc.js?CategoryCore-insert",rpc.buildClientData(e)).map(rpc.Converter.convertJsonResponse).toPromise()}},{key:"delete",value:function(e){return this.$_Angular2HttpClient.post(this.$baseURL+"/admin/fruit.rpc.js?CategoryCore-delete",rpc.buildClientData(e)).map(rpc.Converter.convertBooleanResponse).toPromise()}},{key:"create",value:function(){return this.$_Angular2HttpClient.post(this.$baseURL+"/admin/fruit.rpc.js?CategoryCore-create",rpc.buildClientData()).map(rpc.Converter.convertJsonResponse).toPromise()}},{key:"upload",value:function(){return this.$_Angular2HttpClient.post(this.$baseURL+"/admin/fruit.rpc.js?CategoryCore-upload",rpc.buildClientData.apply(rpc,arguments)).map(rpc.Converter.convertJsonResponse).toPromise()}},{key:"search url",get:function(){return this.$baseURL+"/admin/fruit.rpc.js?CategoryCore-search&"}},{key:"update url",get:function(){return this.$baseURL+"/admin/fruit.rpc.js?CategoryCore-update&"}},{key:"count url",get:function(){return this.$baseURL+"/admin/fruit.rpc.js?CategoryCore-count&"}},{key:"insert url",get:function(){return this.$baseURL+"/admin/fruit.rpc.js?CategoryCore-insert&"}},{key:"delete url",get:function(){return this.$baseURL+"/admin/fruit.rpc.js?CategoryCore-delete&"}},{key:"create url",get:function(){return this.$baseURL+"/admin/fruit.rpc.js?CategoryCore-create&"}},{key:"upload url",get:function(){return this.$baseURL+"/admin/fruit.rpc.js?CategoryCore-upload&"}}]),a}();CategoryCore=__decorate([core_1.Injectable(),__metadata("design:paramtypes",[http_1.Http])],CategoryCore),exports.CategoryCore=CategoryCore;var EntryCore=function(){function a(b){_classCallCheck(this,a),this.$_Angular2HttpClient=b,this.$baseURL=""}return _createClass(a,[{key:"search",value:function(e,f,g){return this.$_Angular2HttpClient.post(this.$baseURL+"/admin/fruit.rpc.js?EntryCore-search",rpc.buildClientData(e,f,g)).map(rpc.Converter.convertJsonResponse).toPromise()}},{key:"update",value:function(e){return this.$_Angular2HttpClient.post(this.$baseURL+"/admin/fruit.rpc.js?EntryCore-update",rpc.buildClientData(e)).map(rpc.Converter.convertBooleanResponse).toPromise()}},{key:"count",value:function(e){return this.$_Angular2HttpClient.post(this.$baseURL+"/admin/fruit.rpc.js?EntryCore-count",rpc.buildClientData(e)).map(rpc.Converter.convertNumberResponse).toPromise()}},{key:"insert",value:function(e){return this.$_Angular2HttpClient.post(this.$baseURL+"/admin/fruit.rpc.js?EntryCore-insert",rpc.buildClientData(e)).map(rpc.Converter.convertJsonResponse).toPromise()}},{key:"delete",value:function(e){return this.$_Angular2HttpClient.post(this.$baseURL+"/admin/fruit.rpc.js?EntryCore-delete",rpc.buildClientData(e)).map(rpc.Converter.convertBooleanResponse).toPromise()}},{key:"create",value:function(){return this.$_Angular2HttpClient.post(this.$baseURL+"/admin/fruit.rpc.js?EntryCore-create",rpc.buildClientData()).map(rpc.Converter.convertJsonResponse).toPromise()}},{key:"upload",value:function(){return this.$_Angular2HttpClient.post(this.$baseURL+"/admin/fruit.rpc.js?EntryCore-upload",rpc.buildClientData.apply(rpc,arguments)).map(rpc.Converter.convertJsonResponse).toPromise()}},{key:"search url",get:function(){return this.$baseURL+"/admin/fruit.rpc.js?EntryCore-search&"}},{key:"update url",get:function(){return this.$baseURL+"/admin/fruit.rpc.js?EntryCore-update&"}},{key:"count url",get:function(){return this.$baseURL+"/admin/fruit.rpc.js?EntryCore-count&"}},{key:"insert url",get:function(){return this.$baseURL+"/admin/fruit.rpc.js?EntryCore-insert&"}},{key:"delete url",get:function(){return this.$baseURL+"/admin/fruit.rpc.js?EntryCore-delete&"}},{key:"create url",get:function(){return this.$baseURL+"/admin/fruit.rpc.js?EntryCore-create&"}},{key:"upload url",get:function(){return this.$baseURL+"/admin/fruit.rpc.js?EntryCore-upload&"}}]),a}();EntryCore=__decorate([core_1.Injectable(),__metadata("design:paramtypes",[http_1.Http])],EntryCore),exports.EntryCore=EntryCore;var ShopCore=function(){function a(b){_classCallCheck(this,a),this.$_Angular2HttpClient=b,this.$baseURL=""}return _createClass(a,[{key:"search",value:function(e,f,g){return this.$_Angular2HttpClient.post(this.$baseURL+"/admin/fruit.rpc.js?ShopCore-search",rpc.buildClientData(e,f,g)).map(rpc.Converter.convertJsonResponse).toPromise()}},{key:"update",value:function(e){return this.$_Angular2HttpClient.post(this.$baseURL+"/admin/fruit.rpc.js?ShopCore-update",rpc.buildClientData(e)).map(rpc.Converter.convertBooleanResponse).toPromise()}},{key:"count",value:function(e){return this.$_Angular2HttpClient.post(this.$baseURL+"/admin/fruit.rpc.js?ShopCore-count",rpc.buildClientData(e)).map(rpc.Converter.convertNumberResponse).toPromise()}},{key:"insert",value:function(e){return this.$_Angular2HttpClient.post(this.$baseURL+"/admin/fruit.rpc.js?ShopCore-insert",rpc.buildClientData(e)).map(rpc.Converter.convertJsonResponse).toPromise()}},{key:"delete",value:function(e){return this.$_Angular2HttpClient.post(this.$baseURL+"/admin/fruit.rpc.js?ShopCore-delete",rpc.buildClientData(e)).map(rpc.Converter.convertBooleanResponse).toPromise()}},{key:"create",value:function(){return this.$_Angular2HttpClient.post(this.$baseURL+"/admin/fruit.rpc.js?ShopCore-create",rpc.buildClientData()).map(rpc.Converter.convertJsonResponse).toPromise()}},{key:"search url",get:function(){return this.$baseURL+"/admin/fruit.rpc.js?ShopCore-search&"}},{key:"update url",get:function(){return this.$baseURL+"/admin/fruit.rpc.js?ShopCore-update&"}},{key:"count url",get:function(){return this.$baseURL+"/admin/fruit.rpc.js?ShopCore-count&"}},{key:"insert url",get:function(){return this.$baseURL+"/admin/fruit.rpc.js?ShopCore-insert&"}},{key:"delete url",get:function(){return this.$baseURL+"/admin/fruit.rpc.js?ShopCore-delete&"}},{key:"create url",get:function(){return this.$baseURL+"/admin/fruit.rpc.js?ShopCore-create&"}}]),a}();ShopCore=__decorate([core_1.Injectable(),__metadata("design:paramtypes",[http_1.Http])],ShopCore),exports.ShopCore=ShopCore;