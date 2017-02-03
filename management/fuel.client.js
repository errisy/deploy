"use strict";var __decorate=this&&this.__decorate||function(a,b,e,f){var j,g=arguments.length,h=3>g?b:null===f?f=Object.getOwnPropertyDescriptor(b,e):f;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)h=Reflect.decorate(a,b,e,f);else for(var l=a.length-1;0<=l;l--)(j=a[l])&&(h=(3>g?j(h):3<g?j(b,e,h):j(b,e))||h);return 3<g&&h&&Object.defineProperty(b,e,h),h},__metadata=this&&this.__metadata||function(a,b){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(a,b)};const core_1=require("@angular/core"),http_1=require("@angular/http");require("rxjs/add/operator/toPromise"),require("rxjs/add/operator/map"),require("rxjs/add/operator/catch");const rpc=require("errisy-rpc");let ShopCore=class{constructor(b){this.$_Angular2HttpClient=b,this.$baseURL=""}getShop(){return this.$_Angular2HttpClient.post(this.$baseURL+"/management/fuel.rpc.js?ShopCore-getShop",rpc.buildClientData()).map(rpc.Converter.convertJsonResponse).toPromise()}get"getShop url"(){return this.$baseURL+"/management/fuel.rpc.js?ShopCore-getShop&"}createShop(){return this.$_Angular2HttpClient.post(this.$baseURL+"/management/fuel.rpc.js?ShopCore-createShop",rpc.buildClientData()).map(rpc.Converter.convertJsonResponse).toPromise()}get"createShop url"(){return this.$baseURL+"/management/fuel.rpc.js?ShopCore-createShop&"}updateShop(b){return this.$_Angular2HttpClient.post(this.$baseURL+"/management/fuel.rpc.js?ShopCore-updateShop",rpc.buildClientData(b)).map(rpc.Converter.convertJsonResponse).toPromise()}get"updateShop url"(){return this.$baseURL+"/management/fuel.rpc.js?ShopCore-updateShop&"}};ShopCore=__decorate([core_1.Injectable(),__metadata("design:paramtypes",[http_1.Http])],ShopCore),exports.ShopCore=ShopCore;let EntrySuffixCore=class{constructor(b){this.$_Angular2HttpClient=b,this.$baseURL=""}search(b,e,f){return this.$_Angular2HttpClient.post(this.$baseURL+"/management/fuel.rpc.js?EntrySuffixCore-search",rpc.buildClientData(b,e,f)).map(rpc.Converter.convertJsonResponse).toPromise()}get"search url"(){return this.$baseURL+"/management/fuel.rpc.js?EntrySuffixCore-search&"}update(b){return this.$_Angular2HttpClient.post(this.$baseURL+"/management/fuel.rpc.js?EntrySuffixCore-update",rpc.buildClientData(b)).map(rpc.Converter.convertBooleanResponse).toPromise()}get"update url"(){return this.$baseURL+"/management/fuel.rpc.js?EntrySuffixCore-update&"}count(b){return this.$_Angular2HttpClient.post(this.$baseURL+"/management/fuel.rpc.js?EntrySuffixCore-count",rpc.buildClientData(b)).map(rpc.Converter.convertNumberResponse).toPromise()}get"count url"(){return this.$baseURL+"/management/fuel.rpc.js?EntrySuffixCore-count&"}insert(b){return this.$_Angular2HttpClient.post(this.$baseURL+"/management/fuel.rpc.js?EntrySuffixCore-insert",rpc.buildClientData(b)).map(rpc.Converter.convertJsonResponse).toPromise()}get"insert url"(){return this.$baseURL+"/management/fuel.rpc.js?EntrySuffixCore-insert&"}delete(b){return this.$_Angular2HttpClient.post(this.$baseURL+"/management/fuel.rpc.js?EntrySuffixCore-delete",rpc.buildClientData(b)).map(rpc.Converter.convertBooleanResponse).toPromise()}get"delete url"(){return this.$baseURL+"/management/fuel.rpc.js?EntrySuffixCore-delete&"}create(){return this.$_Angular2HttpClient.post(this.$baseURL+"/management/fuel.rpc.js?EntrySuffixCore-create",rpc.buildClientData()).map(rpc.Converter.convertJsonResponse).toPromise()}get"create url"(){return this.$baseURL+"/management/fuel.rpc.js?EntrySuffixCore-create&"}searchProductsByName(b){return this.$_Angular2HttpClient.post(this.$baseURL+"/management/fuel.rpc.js?EntrySuffixCore-searchProductsByName",rpc.buildClientData(b)).map(rpc.Converter.convertJsonResponse).toPromise()}get"searchProductsByName url"(){return this.$baseURL+"/management/fuel.rpc.js?EntrySuffixCore-searchProductsByName&"}upload(...b){return this.$_Angular2HttpClient.post(this.$baseURL+"/management/fuel.rpc.js?EntrySuffixCore-upload",rpc.buildClientData(...b)).map(rpc.Converter.convertJsonResponse).toPromise()}get"upload url"(){return this.$baseURL+"/management/fuel.rpc.js?EntrySuffixCore-upload&"}all(){return this.$_Angular2HttpClient.post(this.$baseURL+"/management/fuel.rpc.js?EntrySuffixCore-all",rpc.buildClientData()).map(rpc.Converter.convertJsonResponse).toPromise()}get"all url"(){return this.$baseURL+"/management/fuel.rpc.js?EntrySuffixCore-all&"}fetch(b){return this.$_Angular2HttpClient.post(this.$baseURL+"/management/fuel.rpc.js?EntrySuffixCore-fetch",rpc.buildClientData(b)).map(rpc.Converter.convertJsonResponse).toPromise()}get"fetch url"(){return this.$baseURL+"/management/fuel.rpc.js?EntrySuffixCore-fetch&"}searchByName(b){return this.$_Angular2HttpClient.post(this.$baseURL+"/management/fuel.rpc.js?EntrySuffixCore-searchByName",rpc.buildClientData(b)).map(rpc.Converter.convertJsonResponse).toPromise()}get"searchByName url"(){return this.$baseURL+"/management/fuel.rpc.js?EntrySuffixCore-searchByName&"}};EntrySuffixCore=__decorate([core_1.Injectable(),__metadata("design:paramtypes",[http_1.Http])],EntrySuffixCore),exports.EntrySuffixCore=EntrySuffixCore;let ProductCore=class{constructor(b){this.$_Angular2HttpClient=b,this.$baseURL=""}fetch(b){return this.$_Angular2HttpClient.post(this.$baseURL+"/management/fuel.rpc.js?ProductCore-fetch",rpc.buildClientData(b)).map(rpc.Converter.convertJsonResponse).toPromise()}get"fetch url"(){return this.$baseURL+"/management/fuel.rpc.js?ProductCore-fetch&"}};ProductCore=__decorate([core_1.Injectable(),__metadata("design:paramtypes",[http_1.Http])],ProductCore),exports.ProductCore=ProductCore;