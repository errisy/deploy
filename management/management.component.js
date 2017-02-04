"use strict";var _createClass=function(){function a(b,f){for(var h,g=0;g<f.length;g++)h=f[g],h.enumerable=h.enumerable||!1,h.configurable=!0,"value"in h&&(h.writable=!0),Object.defineProperty(b,h.key,h)}return function(b,f,g){return f&&a(b.prototype,f),g&&a(b,g),b}}(),_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a};function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}var __decorate=function(a,b,f,g){var l,h=arguments.length,j=3>h?b:null===g?g=Object.getOwnPropertyDescriptor(b,f):g;if("object"===("undefined"==typeof Reflect?"undefined":_typeof(Reflect))&&"function"==typeof Reflect.decorate)j=Reflect.decorate(a,b,f,g);else for(var m=a.length-1;0<=m;m--)(l=a[m])&&(j=(3>h?l(j):3<h?l(b,f,j):l(b,f))||j);return 3<h&&j&&Object.defineProperty(b,f,j),j},__metadata=function(a,b){if("object"===("undefined"==typeof Reflect?"undefined":_typeof(Reflect))&&"function"==typeof Reflect.metadata)return Reflect.metadata(a,b)},__awaiter=function(a,b,f,g){return new(f||(f=Promise))(function(h,j){function l(o){try{n(g.next(o))}catch(p){j(p)}}function m(o){try{n(g["throw"](o))}catch(p){j(p)}}function n(o){o.done?h(o.value):new f(function(p){p(o.value)}).then(l,m)}n((g=g.apply(a,b)).next())})},core_1=require("@angular/core"),management_client_1=require("management/management.client"),login_component_1=require("management/login.component"),general_component_1=require("management/general.component"),fruit_component_1=require("management/fruit.component"),meat_component_1=require("management/meat.component"),seafood_component_1=require("management/seafood.component"),fastfood_component_1=require("management/fastfood.component"),packedfood_component_1=require("management/packedfood.component"),grocery_component_1=require("management/grocery.component"),fuel_component_1=require("management/fuel.component"),rental_component_1=require("management/rental.component"),realestate_component_1=require("management/realestate.component"),houseservice_component_1=require("management/houseservice.component"),vehicle_component_1=require("management/vehicle.component"),carservice_component_1=require("management/carservice.component"),checkout_component_1=require("management/checkout.component"),content_1=require("ui/content"),util=require("errisy-util"),ManagementComponent=function(){function a(b,f){_classCallCheck(this,a),this.changeDetectorRef=b,this.manage=f,this.ShowAlert=!0}return _createClass(a,[{key:"ngAfterContentInit",value:function(){return __awaiter(this,void 0,void 0,regeneratorRuntime.mark(function f(){var g;return regeneratorRuntime.wrap(function(j){for(;;)switch(j.prev=j.next){case 0:return this.content.LoginClient=this.manage,j.next=3,this.content.tryLogin();case 3:this.content.addTemplate(login_component_1.LoginComponent,"Login","login"),this.content.addTemplate(general_component_1.GeneralComponent,"Account","general"),this.content.addTemplate(fruit_component_1.FruitComponent,"Fruit Shop","fruit"),this.content.addTemplate(meat_component_1.MeatComponent,"Meat Shop","meat"),this.content.addTemplate(seafood_component_1.SeaFoodComponent,"Seafood Shop","seafood"),this.content.addTemplate(fastfood_component_1.FastFoodComponent,"Fastfood Shop","fastfood"),this.content.addTemplate(packedfood_component_1.PackedFoodComponent,"Packed Food Shop","packedfood"),this.content.addTemplate(grocery_component_1.GroceryComponent,"Grocery Shop","grocery"),this.content.addTemplate(fuel_component_1.FuelComponent,"Fuel Shop","fuel"),this.content.addTemplate(rental_component_1.RentalComponent,"Rental","rental"),this.content.addTemplate(realestate_component_1.RealEstateComponent,"Real Estate","realestate"),this.content.addTemplate(houseservice_component_1.HouseServiceRepairComponent,"House Service Repair","houseservice"),this.content.addTemplate(vehicle_component_1.VehicleComponent,"Vehicle Shop","vehicle"),this.content.addTemplate(carservice_component_1.CarServiceComponent,"Vehicle Service","vehicleservice"),this.content.addTemplate(checkout_component_1.CheckoutComponent,"Checkout & History","checkout"),this.content.onSelected=this.setLink,g=util.getURLParameters(),this.content.navigate(g.item),this.changeDetectorRef.detectChanges();case 22:case"end":return j.stop();}},f,this)}))}},{key:"setLink",value:function(f){util.setURL(window.location.pathname+"?item="+f.Link)}}]),a}();__decorate([core_1.ViewChild("content"),__metadata("design:type",content_1.ContentControl)],ManagementComponent.prototype,"content",void 0),ManagementComponent=__decorate([core_1.Component({selector:"management",template:" <div class=\"main-view-row green-gradient\"> <div class=\"flex-column-stretch\" style=\"flex: 0 0 240px; border-right: 1px solid grey\"> <div style=\"flex: 0 0 8px\"></div> <div class=\"flex-column-center\"> <img style=\"max-width: 240px\" src=\"https://rawgit.com/errisy/deploy/master/img/logo/logo-s.png\"> <div style=\"font-family: Arial; font-size: 32px; color: #333333; text-shadow:0px 1px 0px #ffee66; user-select: none\"> Shops </div> </div> <div style=\"flex: 0 0 20px\"></div> <div *ngFor=\"let item of content.Components | withbutton;\" class=\"btn-admin\" [class.btn-selected]=\"content.isIndex(item.Index)\" (click)=\"content.select(item.Index);\">{{item.Label}}</div> </div> <div class=\"flex-column-stretch flex-stretch\" #content content></div> <div class=\"DevelopmentAlert\" (click)=\"ShowAlert=false;\" *ngIf=\"ShowAlert\"> </div> <div class=\"DevelopmentAlertFrame\" (click)=\"ShowAlert=false;\" *ngIf=\"ShowAlert\"> <div class=\"AlertMessage\" (click)=\"$event.stopPropagation();\"> <div class=\"AlertTitle\"> <div class=\"title\">Browser Compatibility</div> <div class=\"spaceholder\"></div> <svg btn-close width=\"36\" height=\"36\" (click)=\"ShowAlert=false;\"></svg> </div> <div class=\"AlterContent\"> <div class=\"content\"> <h4>Please Use Desktop Version of Chrome Broswer</h4> <p> This management console is tested against and optimized for the Desktop Version of <a href=\"https://www.google.com/chrome/browser/desktop/index.html\" target=\"chrome\">Google Chrome Broswer</a>. You may experience layout error in other browsers. </p> <p> Thank you for joining Smart Koala! </p> <p> - Jack, 2017-01-18 </p> </div> </div> </div> </div> </div> ",providers:[management_client_1.ManageCore],changeDetection:core_1.ChangeDetectionStrategy.Default}),__metadata("design:paramtypes",[core_1.ChangeDetectorRef,management_client_1.ManageCore])],ManagementComponent),exports.ManagementComponent=ManagementComponent;