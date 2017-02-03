"use strict";var _createClass=function(){function a(b,f){for(var h,g=0;g<f.length;g++)h=f[g],h.enumerable=h.enumerable||!1,h.configurable=!0,"value"in h&&(h.writable=!0),Object.defineProperty(b,h.key,h)}return function(b,f,g){return f&&a(b.prototype,f),g&&a(b,g),b}}(),_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a};function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}var __decorate=function(a,b,f,g){var l,h=arguments.length,j=3>h?b:null===g?g=Object.getOwnPropertyDescriptor(b,f):g;if("object"===("undefined"==typeof Reflect?"undefined":_typeof(Reflect))&&"function"==typeof Reflect.decorate)j=Reflect.decorate(a,b,f,g);else for(var m=a.length-1;0<=m;m--)(l=a[m])&&(j=(3>h?l(j):3<h?l(b,f,j):l(b,f))||j);return 3<h&&j&&Object.defineProperty(b,f,j),j},__metadata=function(a,b){if("object"===("undefined"==typeof Reflect?"undefined":_typeof(Reflect))&&"function"==typeof Reflect.metadata)return Reflect.metadata(a,b)},__awaiter=function(a,b,f,g){return new(f||(f=Promise))(function(h,j){function l(o){try{n(g.next(o))}catch(p){j(p)}}function m(o){try{n(g["throw"](o))}catch(p){j(p)}}function n(o){o.done?h(o.value):new f(function(p){p(o.value)}).then(l,m)}n((g=g.apply(a,b)).next())})},core_1=require("@angular/core"),content_1=require("ui/content"),admin_client_1=require("admin/admin.client"),util=require("errisy-util"),units_1=require("shop/units"),fruit_client_1=require("admin/fruit.client"),shop_data_1=require("shop/shop.data"),errisy_ui_1=require("errisy-ui"),ShopType=shop_data_1.FruitVegetableShop,ProductType=shop_data_1.FruitVegetableProduct,CategoryType=shop_data_1.FruitVegetableCategory,EntryType=shop_data_1.FruitVegetableEntry,FruitAdminComponent=function(){function a(b,f,g,h,j,l,m){var n=this;_classCallCheck(this,a),this.changeDetectorRef=b,this.parent=f,this.admin=g,this.products=h,this.categories=j,this.entries=l,this.shops=m,this.style_flex="1 1 auto",this.style_display="flex",this.Tabs=[{Title:"Entries",Tab:[{Title:"Entry",View:[[errisy_ui_1.fields.text(function(){return EntryType.prototype._id},"ID")],[errisy_ui_1.fields.autocomplete(function(){return EntryType.prototype.Product},this.entries["searchProductsByName url"],"Name","Name","Primary Product",{minSearchLength:2,dataMode:"id",objectFetcher:this.products}).event("selected",this,function(o){return __awaiter(n,void 0,void 0,regeneratorRuntime.mark(function p(){var q,s;return regeneratorRuntime.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:if(o&&o.originalObject){u.next=2;break}return u.abrupt("return");case 2:q=o.originalObject,s=this.tab.tabview.InfoTable.Entity,s.Images&&Array.isArray(s.Images)?s.Images.splice(0,0,q.Image):s.Images=[q.Image];case 5:case"end":return u.stop();}},p,this)}))})],[errisy_ui_1.fields.text(function(){return EntryType.prototype.Description},"Description")],[errisy_ui_1.fields.number(function(){return EntryType.prototype.Price},"Price in AUD").event("keydown",errisy_ui_1.filters,errisy_ui_1.filters.decimals).attr({min:0}).verify(errisy_ui_1.verifictions.min(0))],[errisy_ui_1.fields.autocomplete(function(){return EntryType.prototype.Unit},units_1.Units,"Name","Name","Unit",{autoMatch:!0,minSearchLength:1})],[errisy_ui_1.fields.datetime(function(){return EntryType.prototype.StartTime},"Start Time").attr({min:"2016-01-01T00:00",max:"2116-01-01T00:00"}).verify(errisy_ui_1.verifictions.min(+new Date(2016,0))).verify(errisy_ui_1.verifictions.max(+new Date(2116,0)))],[errisy_ui_1.fields.datetime(function(){return EntryType.prototype.EndTime},"End Time").attr({min:"2016-01-01T00:00",max:"2116-01-01T00:00"}).verify(errisy_ui_1.verifictions.min(+new Date(2016,0))).verify(errisy_ui_1.verifictions.max(+new Date(2116,0)))],errisy_ui_1.rows.auto(errisy_ui_1.fields.imagelist(function(){return EntryType.prototype.Images},this.entries,this.entries.upload,"Images",!0,160,160,"image/*",307200)),[errisy_ui_1.fields.text(function(){return EntryType.prototype.PerUnitPrice},"Estimated Per Kg Price in AUD (if Unit is not KG)").event("keydown",errisy_ui_1.filters,errisy_ui_1.filters.decimals)],[errisy_ui_1.fields.text(function(){return EntryType.prototype.Limitation},"Limitation of Purchase (e.g. 2KG per Customer, leave empty if none)")],errisy_ui_1.rows.buttons(errisy_ui_1.fields.submit("Save").event("click",this,function(){return __awaiter(n,void 0,void 0,regeneratorRuntime.mark(function o(){return regeneratorRuntime.wrap(function(q){for(;;)switch(q.prev=q.next){case 0:return q.next=2,this.tab.tabview.InfoTable.Verify();case 2:if(q.sent){q.next=4;break}return q.abrupt("return");case 4:return console.log(this.tab.data.SelectedItem),q.next=7,this.tab.data.update(this.tab.data.SelectedItem);case 7:case"end":return q.stop();}},o,this)}))}))]}],Fields:"_id",Source:function(){return n.entries},DataTemplateUrl:{Value:"<div class=\"flex-row-stretch flex-stretch list-item\" [class.checked]=\"Selected\" [class.selected-items]=\"MultipleSelected\" (click)=\"Parent.SelectItem(Item, $event);\"> {{Item._id}} ({{Item.Name}}) </div>"},CanCreate:!1,CanDelete:!0},{Title:"Categories",Tab:[{Title:"General",View:[[errisy_ui_1.fields.text(function(){return CategoryType.prototype._id},"ID")],[errisy_ui_1.fields.text(function(){return CategoryType.prototype.Name},"Name")],[errisy_ui_1.fields.number(function(){return CategoryType.prototype.Index},"Index")],errisy_ui_1.rows.auto(errisy_ui_1.fields.image(function(){return CategoryType.prototype.Image},this.categories,this.categories.upload,"Image",160,160,".svg,image/*",102400)),errisy_ui_1.rows.buttons(errisy_ui_1.fields.submit("Save").event("click",this,function(){return __awaiter(n,void 0,void 0,regeneratorRuntime.mark(function o(){return regeneratorRuntime.wrap(function(q){for(;;)switch(q.prev=q.next){case 0:return q.next=2,this.tab.data.update(this.tab.data.SelectedItem);case 2:case"end":return q.stop();}},o,this)}))}))]},{Title:"Relation",View:[errisy_ui_1.rows.auto(errisy_ui_1.fields.relation("Products",this.products,{Value:"<div class=\"flex-row-stretch flex-stretch list-item\" [class.checked]=\"Selected\" [class.selected-items]=\"MultipleSelected\" (click)=\"Parent.SelectItem(Item, $event);\"> {{Item._id}} ({{Item.Name}}) </div>"},"_id,Name","Included Products","Products","Included",320)),errisy_ui_1.rows.buttons(errisy_ui_1.fields.submit("Save").event("click",this,function(){return __awaiter(n,void 0,void 0,regeneratorRuntime.mark(function o(){return regeneratorRuntime.wrap(function(q){for(;;)switch(q.prev=q.next){case 0:return q.next=2,this.tab.data.update(this.tab.data.SelectedItem);case 2:case"end":return q.stop();}},o,this)}))}))]}],Fields:"_id",Source:function(){return n.categories},DataTemplateUrl:{Value:"<div class=\"flex-row-stretch flex-stretch list-item\" [class.checked]=\"Selected\" [class.selected-items]=\"MultipleSelected\" (click)=\"Parent.SelectItem(Item, $event);\"> {{Item._id}} ({{Item.Name}}) </div>"},CanCreate:!0,CanDelete:!0},{Title:"Products",Tab:[{Title:"General",View:[[errisy_ui_1.fields.text(function(){return ProductType.prototype._id},"ID")],[errisy_ui_1.fields.text(function(){return ProductType.prototype.Name},"Name")],[errisy_ui_1.fields.number(function(){return ProductType.prototype.Index},"Index")],[errisy_ui_1.fields.autocomplete(function(){return ProductType.prototype.Unit},units_1.Units,"Name","Name","Unit",{autoMatch:!0,minSearchLength:1})],[errisy_ui_1.fields.autocomplete(function(){return ProductType.prototype.Primary},this.products["searchByName url"],"Name","Name","Primary Product",{minSearchLength:2,dataMode:"id",objectFetcher:this.products})],errisy_ui_1.rows.auto(errisy_ui_1.fields.image(function(){return ProductType.prototype.Image},this.products,this.products.upload,"Product Image",160,160,".svg,image/*",102400)),errisy_ui_1.rows.auto(errisy_ui_1.fields.relation(function(){return ProductType.prototype.Secondaries},this.products,{Value:"<div class=\"flex-row-stretch flex-stretch list-item\" [class.checked]=\"Selected\" [class.selected-items]=\"MultipleSelected\" (click)=\"Parent.SelectItem(Item, $event);\"> {{Item._id}} ({{Item.Name}}) </div>"},"Name","Secondary Products","Products","Included",320)),errisy_ui_1.rows.buttons(errisy_ui_1.fields.submit("Save").event("click",this,function(){return __awaiter(n,void 0,void 0,regeneratorRuntime.mark(function o(){return regeneratorRuntime.wrap(function(q){for(;;)switch(q.prev=q.next){case 0:return q.next=2,this.tab.data.update(this.tab.data.SelectedItem);case 2:case"end":return q.stop();}},o,this)}))}))]}],Fields:"_id",Source:function(){return n.products},DataTemplateUrl:{Value:"<div class=\"flex-row-stretch flex-stretch list-item\" [class.checked]=\"Selected\" [class.selected-items]=\"MultipleSelected\" (click)=\"Parent.SelectItem(Item, $event);\"> {{Item._id}} ({{Item.Name}}) </div>"},CanCreate:!0,CanDelete:!0},{Title:"Shops",Tab:[{Title:"Shop",View:[[errisy_ui_1.fields.text(function(){return ShopType.prototype._id},"ID").readonly()],[errisy_ui_1.fields.text(function(){return ShopType.prototype.Name},"Name").attr({maxlength:100}).verify(errisy_ui_1.verifictions.maxLength(100))],[errisy_ui_1.fields.datetime(function(){return ShopType.prototype.ExpiryDate},"ExpiryDate").readonly()],[errisy_ui_1.fields.checkbox(function(){return ShopType.prototype.IsValid},"Valid")],[errisy_ui_1.fields.checkbox(function(){return ShopType.prototype.IsValidService},"Valid Service")],errisy_ui_1.rows.buttons(errisy_ui_1.fields.submit("Save").event("click",this,function(){return __awaiter(n,void 0,void 0,regeneratorRuntime.mark(function o(){return regeneratorRuntime.wrap(function(q){for(;;)switch(q.prev=q.next){case 0:return q.next=2,this.tab.tabview.InfoTable.Verify();case 2:if(q.sent){q.next=4;break}return q.abrupt("return");case 4:return q.next=6,this.shops.update(this.tab.tabview.InfoTable.Entity);case 6:case"end":return q.stop();}},o,this)}))}))]},{Title:"Address",View:[errisy_ui_1.rows.buttons(errisy_ui_1.fields.submit("Select Location in Map").event("click",this,function(o,p){return __awaiter(n,void 0,void 0,regeneratorRuntime.mark(function q(){var t,u,w,x,s=this;return regeneratorRuntime.wrap(function(z){for(;;)switch(z.prev=z.next){case 0:if(t=this.tab.tabview.InfoTable.Entity,t){z.next=3;break}return z.abrupt("return");case 3:if(0!=this.tab.MapWidth){z.next=18;break}return this.tab.MapWidth=500,this.tab.changeDetectorRef.detectChanges(),p.Title="Hide Map",u=t.Location?{x:t.Location.coordinates[0],y:t.Location.coordinates[1]}:{x:this.tab.location.x,y:this.tab.location.y},z.next=10,this.tab.addUserMarker(u);case 10:if(z.sent.DragEnd={host:this,method:function(B){return __awaiter(s,void 0,void 0,regeneratorRuntime.mark(function C(){var D,E;return regeneratorRuntime.wrap(function(G){for(;;)switch(G.prev=G.next){case 0:return G.next=2,util.ResolveAddress(B.lat()+"",B.lng()+"");case 2:D=G.sent,D&&(E=this.tab.Entity,E.Country=D.CountryTerritory,E.State=D.StateProvince,E.Postcode=D.Postcode,E.Region=D.CityRegion,E.Suburb=D.SuburbTown,E.Street=D.Street,E.StreetNumber=D.Number,E.Location={type:"Point",coordinates:[B.lng(),B.lat()]},this.tab.tabview.changeDetectorRef.detectChanges());case 4:case"end":return G.stop();}},C,this)}))}},t.Location){z.next=16;break}return z.next=14,util.ResolveAddress(this.tab.location.y+"",this.tab.location.x+"");case 14:w=z.sent,w&&(x=this.tab.Entity,x.Country=w.CountryTerritory,x.State=w.StateProvince,x.Postcode=w.Postcode,x.Region=w.CityRegion,x.Suburb=w.SuburbTown,x.Street=w.Street,x.StreetNumber=w.Number,this.tab.tabview.changeDetectorRef.detectChanges());case 16:z.next=22;break;case 18:this.tab.CurrentLocationMarker.setMap(void 0),this.tab.CurrentLocationMarker=void 0,this.tab.MapWidth=0,p.Title="Select Location in Map";case 22:this.tab.changeDetectorRef.detectChanges();case 23:case"end":return z.stop();}},q,this)}))})),[errisy_ui_1.fields.text(function(){return ShopType.prototype.StreetNumber},"StreetNumber").attr({maxlength:100}).verify(errisy_ui_1.verifictions.maxLength(100))],[errisy_ui_1.fields.text(function(){return ShopType.prototype.Street},"Street").attr({maxlength:100}).verify(errisy_ui_1.verifictions.maxLength(100))],[errisy_ui_1.fields.text(function(){return ShopType.prototype.Suburb},"Suburb").attr({maxlength:100}).verify(errisy_ui_1.verifictions.maxLength(100))],[errisy_ui_1.fields.text(function(){return ShopType.prototype.Postcode},"Postcode").attr({maxlength:100}).verify(errisy_ui_1.verifictions.maxLength(100))],[errisy_ui_1.fields.text(function(){return ShopType.prototype.Region},"Region").attr({maxlength:100}).verify(errisy_ui_1.verifictions.maxLength(100))],[errisy_ui_1.fields.text(function(){return ShopType.prototype.State},"State").attr({maxlength:100}).verify(errisy_ui_1.verifictions.maxLength(100))],[errisy_ui_1.fields.text(function(){return ShopType.prototype.Country},"Country").attr({maxlength:100}).verify(errisy_ui_1.verifictions.maxLength(100))],errisy_ui_1.rows.buttons(errisy_ui_1.fields.submit("Save").event("click",this,function(){return __awaiter(n,void 0,void 0,regeneratorRuntime.mark(function o(){return regeneratorRuntime.wrap(function(q){for(;;)switch(q.prev=q.next){case 0:return q.next=2,this.tab.tabview.InfoTable.Verify();case 2:if(q.sent){q.next=4;break}return q.abrupt("return");case 4:return q.next=6,this.shops.update(this.tab.tabview.InfoTable.Entity);case 6:case"end":return q.stop();}},o,this)}))}))]},{Title:"Hours",View:[errisy_ui_1.rows.auto(errisy_ui_1.fields.weekhours(function(){return ShopType.prototype.OpeningHours},"Opening Hours")),errisy_ui_1.rows.auto(errisy_ui_1.fields.scheduledhours(function(){return ShopType.prototype.ScheduledHours},"Opening Hours")),errisy_ui_1.rows.buttons(errisy_ui_1.fields.submit("Save").event("click",this,function(){return __awaiter(n,void 0,void 0,regeneratorRuntime.mark(function o(){return regeneratorRuntime.wrap(function(q){for(;;)switch(q.prev=q.next){case 0:return q.next=2,this.tab.tabview.InfoTable.Verify();case 2:if(q.sent){q.next=4;break}return q.abrupt("return");case 4:return q.next=6,this.shops.update(this.tab.tabview.InfoTable.Entity);case 6:case"end":return q.stop();}},o,this)}))}))]}],Fields:"_id",Source:function(){return n.shops},DataTemplateUrl:{Value:"<div class=\"flex-row-stretch flex-stretch list-item\" [class.checked]=\"Selected\" [class.selected-items]=\"MultipleSelected\" (click)=\"Parent.SelectItem(Item, $event);\"> {{Item._id}} ({{Item.Name}}) </div>"},CanCreate:!1,CanDelete:!1}]}return _createClass(a,[{key:"ngAfterContentInit",value:function(){return __awaiter(this,void 0,void 0,regeneratorRuntime.mark(function f(){return regeneratorRuntime.wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,this.parent.checkLogin();case 2:if(h.sent){h.next=5;break}return this.parent.select(0),h.abrupt("return");case 5:this.parent.Title="Fruits",this.changeDetectorRef.detectChanges();case 7:case"end":return h.stop();}},f,this)}))}}]),a}();__decorate([core_1.HostBinding("style.flex"),__metadata("design:type",String)],FruitAdminComponent.prototype,"style_flex",void 0),__decorate([core_1.HostBinding("style.display"),__metadata("design:type",String)],FruitAdminComponent.prototype,"style_display",void 0),__decorate([core_1.ViewChild("tab"),__metadata("design:type",errisy_ui_1.TabManager)],FruitAdminComponent.prototype,"tab",void 0),FruitAdminComponent=__decorate([core_1.Component({selector:"admin-fruit",template:" <div class=\"flex-column-stretch flex-stretch\"> <div class=\"flex-row-stretch view-title\"> <div class=\"flex-row-center flex-stretch flex-center\"> <span style=\"cursor: default; user-select: none\">{{parent.Title}}</span> </div> </div> <div [TabManager]=\"Tabs\" #tab class=\"flex-column-stretch flex-stretch warm-gradient\"> </div> <div class=\"flex-row-center view-status\"> {{parent.Status}} </div> </div>",entryComponents:[],providers:[admin_client_1.AdminCore,fruit_client_1.ProductCore,fruit_client_1.CategoryCore,fruit_client_1.EntryCore,fruit_client_1.ShopCore],changeDetection:core_1.ChangeDetectionStrategy.Default}),__metadata("design:paramtypes",[core_1.ChangeDetectorRef,content_1.ContentControl,admin_client_1.AdminCore,fruit_client_1.ProductCore,fruit_client_1.CategoryCore,fruit_client_1.EntryCore,fruit_client_1.ShopCore])],FruitAdminComponent),exports.FruitAdminComponent=FruitAdminComponent;