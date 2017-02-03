"use strict";var _createClass=function(){function a(b,f){for(var h,g=0;g<f.length;g++)h=f[g],h.enumerable=h.enumerable||!1,h.configurable=!0,"value"in h&&(h.writable=!0),Object.defineProperty(b,h.key,h)}return function(b,f,g){return f&&a(b.prototype,f),g&&a(b,g),b}}(),_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a};function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}var __decorate=function(a,b,f,g){var l,h=arguments.length,j=3>h?b:null===g?g=Object.getOwnPropertyDescriptor(b,f):g;if("object"===("undefined"==typeof Reflect?"undefined":_typeof(Reflect))&&"function"==typeof Reflect.decorate)j=Reflect.decorate(a,b,f,g);else for(var m=a.length-1;0<=m;m--)(l=a[m])&&(j=(3>h?l(j):3<h?l(b,f,j):l(b,f))||j);return 3<h&&j&&Object.defineProperty(b,f,j),j},__metadata=function(a,b){if("object"===("undefined"==typeof Reflect?"undefined":_typeof(Reflect))&&"function"==typeof Reflect.metadata)return Reflect.metadata(a,b)},__awaiter=function(a,b,f,g){return new(f||(f=Promise))(function(h,j){function l(o){try{n(g.next(o))}catch(p){j(p)}}function m(o){try{n(g["throw"](o))}catch(p){j(p)}}function n(o){o.done?h(o.value):new f(function(p){p(o.value)}).then(l,m)}n((g=g.apply(a,b)).next())})},core_1=require("@angular/core"),content_1=require("ui/content"),admin_client_1=require("admin/admin.client"),SponsorAdminComponent=function(){function a(b,f,g){_classCallCheck(this,a),this.changeDetectorRef=b,this.parent=f,this.admin=g}return _createClass(a,[{key:"ngAfterViewInit",value:function(){return __awaiter(this,void 0,void 0,regeneratorRuntime.mark(function f(){return regeneratorRuntime.wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,this.parent.checkLogin();case 2:if(!h.sent){h.next=9;break}return this.changeDetectorRef.detectChanges(),h.next=6,this.loadSponsors();case 6:this.changeDetectorRef.detectChanges(),h.next=10;break;case 9:this.parent.select(0);case 10:case"end":return h.stop();}},f,this)}))}},{key:"loadSponsors",value:function(){return __awaiter(this,void 0,void 0,regeneratorRuntime.mark(function f(){return regeneratorRuntime.wrap(function(h){for(;;)switch(h.prev=h.next){case 0:case"end":return h.stop();}},f,this)}))}}]),a}();SponsorAdminComponent=__decorate([core_1.Component({selector:"admin-sponsor",templateUrl:"/admin/sponsor.component.html",entryComponents:[],providers:[admin_client_1.AdminCore,Location],changeDetection:core_1.ChangeDetectionStrategy.Default}),__metadata("design:paramtypes",[core_1.ChangeDetectorRef,content_1.ContentControl,admin_client_1.AdminCore])],SponsorAdminComponent),exports.SponsorAdminComponent=SponsorAdminComponent;