"use strict";var _createClass=function(){function a(b,f){for(var h,g=0;g<f.length;g++)h=f[g],h.enumerable=h.enumerable||!1,h.configurable=!0,"value"in h&&(h.writable=!0),Object.defineProperty(b,h.key,h)}return function(b,f,g){return f&&a(b.prototype,f),g&&a(b,g),b}}(),_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a};function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}var __decorate=function(a,b,f,g){var l,h=arguments.length,j=3>h?b:null===g?g=Object.getOwnPropertyDescriptor(b,f):g;if("object"===("undefined"==typeof Reflect?"undefined":_typeof(Reflect))&&"function"==typeof Reflect.decorate)j=Reflect.decorate(a,b,f,g);else for(var m=a.length-1;0<=m;m--)(l=a[m])&&(j=(3>h?l(j):3<h?l(b,f,j):l(b,f))||j);return 3<h&&j&&Object.defineProperty(b,f,j),j},__metadata=function(a,b){if("object"===("undefined"==typeof Reflect?"undefined":_typeof(Reflect))&&"function"==typeof Reflect.metadata)return Reflect.metadata(a,b)},__awaiter=function(a,b,f,g){return new(f||(f=Promise))(function(h,j){function l(o){try{n(g.next(o))}catch(p){j(p)}}function m(o){try{n(g["throw"](o))}catch(p){j(p)}}function n(o){o.done?h(o.value):new f(function(p){p(o.value)}).then(l,m)}n((g=g.apply(a,b)).next())})},core_1=require("@angular/core"),content_1=require("ui/content"),shop_data_1=require("shop/shop.data"),management_client_1=require("management/management.client"),util=require("errisy-util"),units_1=require("shop/units"),errisy_ui_1=require("errisy-ui"),fuel_client_1=require("management/fuel.client"),payment_data_1=require("shop/payment.data"),ShopType=shop_data_1.FruitVegetableShop,ProductType=shop_data_1.FruitVegetableProduct,CategoryType=shop_data_1.FruitVegetableCategory,EntryType=shop_data_1.FruitVegetableEntry,FuelComponent=function(){function a(b,f,g,h,j,l){var m=this;_classCallCheck(this,a),this.manage=b,this.parent=f,this.changeDetectorRef=g,this.core=h,this.entries=j,this.products=l,this.style_flex="1 1 auto",this.style_display="flex",this._isAccountActive={},this._isShopValid={},this.Tabs=[{Title:"Please Verify Mobile First",Tab:[{Title:"Please Verify Mobile First",View:[errisy_ui_1.rows.text(errisy_ui_1.fields.info("Please verify your mobile first")),errisy_ui_1.rows.buttons(errisy_ui_1.fields.submit("Go to Verify").event("click",this,function(){return __awaiter(m,void 0,void 0,regeneratorRuntime.mark(function n(){var o;return regeneratorRuntime.wrap(function(q){for(;;)switch(q.prev=q.next){case 0:return this.parent.select(1),o=this.parent.ChildView,q.next=4,o.SelectTab(o.Tabs[1]);case 4:case"end":return q.stop();}},n,this)}))}))]}],Condition:function(){return __awaiter(m,void 0,void 0,regeneratorRuntime.mark(function o(){return regeneratorRuntime.wrap(function(q){for(;;)switch(q.prev=q.next){case 0:return q.next=2,this.isAccountActive();case 2:return q.abrupt("return",!q.sent);case 3:case"end":return q.stop();}},o,this)}))}},{Title:"Create Shop",Tab:[{Title:"Create",View:[errisy_ui_1.rows.buttons(errisy_ui_1.fields.submit("Create Fuel Shop").event("click",this,function(){return __awaiter(m,void 0,void 0,regeneratorRuntime.mark(function n(){return regeneratorRuntime.wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.next=2,this.core.createShop();case 2:return this._isShopValid={},p.next=5,this.tab.UpdateTabs();case 5:case"end":return p.stop();}},n,this)}))}))]}],Condition:function(){return __awaiter(m,void 0,void 0,regeneratorRuntime.mark(function o(){return regeneratorRuntime.wrap(function(q){for(;;)switch(q.prev=q.next){case 0:return q.next=2,this.isShopValid();case 2:return q.abrupt("return",!q.sent);case 3:case"end":return q.stop();}},o,this)}))}},{Title:"Manual",Tab:[{Title:"User Manual",View:[errisy_ui_1.rows.auto(errisy_ui_1.fields.content({},{Value:"<div style=\"width: 550px; display: block; height: 400px; user-select: text; font-weight: normal; text-shadow: none; overflow-y: auto\"> <div style=\"font-size:20px; font-weight: bold; color: blue\"> 1. Set up your shop. </div> <div style=\"font-size:16px; color: black\"> &nbsp;&nbsp;&nbsp;&nbsp;In the \"Shop\" tab, set up your shop <span style=\"color: red\">Name</span>. </div> <div style=\"font-size:16px; color: black\"> &nbsp;&nbsp;&nbsp;&nbsp;In the \"Shop\" - \"Shop\" tab, set up your shop <span style=\"color: red\">Name</span>. </div> <div style=\"font-size:16px; color: black\"> &nbsp;&nbsp;&nbsp;&nbsp;In the \"Shop\" - \"Address\" tab, set up your shop <span style=\"color: red\">Location</span>. The location is where your shop is displayed in the map. Please click \"<span style=\"color: red\">Select Location in Map</span>\" button and drag the marker in the map. Map can be zoomed by mouse scrolling. </div> <div style=\"font-size:16px; color: black\"> &nbsp;&nbsp;&nbsp;&nbsp;In the \"Shop\" - \"Hours\" tab, set up your shop <span style=\"color: red\">Regular Hours</span> and <span style=\"color: red\">Scheduled Hours</span>. <span style=\"color: red\">Regular Hours</span> is the regular Monday to Sunday hours that is used by default. Click \"+\" button to add hours for each weekday. <span style=\"color: red\">Scheduled Hours</span> should be used for days that when you have different opening hours from the regular Monday to Sunday hours or when you are closed. Click \"+\" to add a date first. You need to input a valid date and then click the \"+\" on the right of date to add hours. In both <span style=\"color: red\">Regular Hours</span> and <span style=\"color: red\">Scheduled Hours</span>, You can add multiple hours for a days in case you have multiple opening time ranges (which is very common for restaurants). </div> <div style=\"font-size:20px; font-weight: bold; color: blue\"> 2. Create your products. </div> <div style=\"font-size:16px; color: black\"> &nbsp;&nbsp;&nbsp;&nbsp;In the \"Product Entries\" tab, create a new product by clicking the \"+\" button under the \"Product Entries\" list. To edit the entry, select the entry and edit the product information in the general tab or other tabs. Remeber to click <span style=\"color: red\">Save</span> button after each edit. </div> <div style=\"font-size:16px; color: black\"> &nbsp;&nbsp;&nbsp;&nbsp;For Rental and Real Estate shops, you must select a valid category. </div> <div style=\"font-size:16px; color: black\"> &nbsp;&nbsp;&nbsp;&nbsp;Rental: For room rental, you must provide information for the \"Location\" (Click \"Select Location in Map\" to drag your location in map and save, see \"Shop\" above.) \"Room Rental\", \"Energy &amp; Water\", \"Internet &amp; Phone\", \"Car Parking\" and \"Terms\" tabs. For entire property rental (no need for room rental), you must provide information for the \"Building\", \"Energy &amp; Water\", \"Internet &amp; Phone\", \"Car Parking\", and \"Terms\" tabs as well the \"Granny Flat\" tab is the property contains a granny flat. If your property contains land, please also provide information for the \"Land\" tab. </div> <div style=\"font-size:16px; color: black\"> &nbsp;&nbsp;&nbsp;&nbsp;Real Estate: For any property except land, you must provide information for the \"Main Building\", \"Car Parking\" and \"Inspections\" tabs. For entire property rental (no need for room rental), you must provide information for the \"Building\", \"Energy &amp; Water\", \"Internet &amp; Phone\", \"Car Parking\", and \"Terms\" tabs as well the \"Granny Flat\" tab is the property contains a granny flat. </div> <div style=\"font-size:20px; font-weight: bold; color: blue\"> 3. Publish your products. </div> <div style=\"font-size:16px; color: black\"> &nbsp;&nbsp;&nbsp;&nbsp;For any product except for \"Real Estate\" and \"Vehicle\", use the \"Published Entries\" tab to manage published items. You have \"Free Entries\" number, which is the number of products you can publish without purchasing a listing service. The \"Service Entries\" number is the extra number of products you can publish when you purchased a listing service. You need to purchase the extra listing service in the \"Buy Service\" tab. Fill a valid number in the <span style=\"color: red\">Number of Peroids</span> box. <span style=\"color: red\">Subtotal</span> box shows the total amount. You can then click <span style=\"color: red\">Add to Cart</span> and checkout in the \"Checkout &amp; History\" menu in navigation bar (on the left bottom). </div> <div style=\"font-size:16px; color: black\"> &nbsp;&nbsp;&nbsp;&nbsp;For \"Real Estate\" and \"Vehicle\", use the \"Published Entries\" tab to manage published items. You have \"Free Entries\" number, which is the number of products you can publish without purchasing a listing service. The \"Service Entries\" number is the extra number of products you can publish when you purchased a listing service. </div> <div style=\"font-size:20px; font-weight: bold; color: blue\"> 4. Activate Your Shop. </div> <div style=\"font-size:16px; color: black\"> &nbsp;&nbsp;&nbsp;&nbsp;In the \"Activation\" tab, you can get the information required for verify your ownship/relationship to the shop. Generally, you can click the email link to send us the proof as your shop owner. Please provide phone number in case we need to contact you. </div> <div style=\"font-size:16px; color: black\"> &nbsp;&nbsp;&nbsp;&nbsp;You don't need to activate \"Rental\", \"Real Estate\", \"Vehicle Service\" or \"House Service\" shop. They are activate by default. </div> </div>"},"How to Use"))]}],Condition:function(){return __awaiter(m,void 0,void 0,regeneratorRuntime.mark(function o(){return regeneratorRuntime.wrap(function(q){for(;;)switch(q.prev=q.next){case 0:return q.next=2,this.isAccountActive();case 2:if(q.t0=q.sent,!q.t0){q.next=7;break}return q.next=6,this.isShopValid();case 6:q.t0=q.sent;case 7:return q.abrupt("return",q.t0);case 8:case"end":return q.stop();}},o,this)}))}},{Title:"Product Entries",Tab:[{Title:"General",View:[[errisy_ui_1.fields.text("_id","ID").readonly()],[errisy_ui_1.fields.autocomplete(function(){return EntryType.prototype.Product},this.entries["searchProductsByName url"],"Name","Name","Primary Product",{minSearchLength:1,dataMode:"id",objectFetcher:this.products}).event("selected",this,function(n){return __awaiter(m,void 0,void 0,regeneratorRuntime.mark(function o(){var p,q;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(n&&n.originalObject){t.next=2;break}return t.abrupt("return");case 2:p=n.originalObject,q=this.tab.tabview.InfoTable.Entity,q.Images&&Array.isArray(q.Images)?q.Images.splice(0,0,p.Image):q.Images=[p.Image];case 5:case"end":return t.stop();}},o,this)}))})],[errisy_ui_1.fields.text("Description","Description")],[errisy_ui_1.fields.number("Price","Price in AUD").event("keydown",errisy_ui_1.filters,errisy_ui_1.filters.decimals).attr({min:0}).verify(errisy_ui_1.verifictions.min(0))],[errisy_ui_1.fields.autocomplete("Unit",units_1.FuelUnits,"Name","Name","Unit",{autoMatch:!0,minSearchLength:1})],[errisy_ui_1.fields.datetime("StartTime","Start Time").attr({min:"2016-01-01T00:00",max:"2116-01-01T00:00"}).verify(errisy_ui_1.verifictions.min(+new Date(2016,0))).verify(errisy_ui_1.verifictions.max(+new Date(2116,0)))],[errisy_ui_1.fields.datetime("EndTime","End Time").attr({min:"2016-01-01T00:00",max:"2116-01-01T00:00"}).verify(errisy_ui_1.verifictions.min(+new Date(2016,0))).verify(errisy_ui_1.verifictions.max(+new Date(2116,0)))],errisy_ui_1.rows.auto(errisy_ui_1.fields.imagelist("Images",this.entries,this.entries.upload,"Images",!0,160,160,"image/*",307200)),[errisy_ui_1.fields.text("PerUnitPrice","Estimated Per Kg Price in AUD (if Unit is not KG)").event("keydown",errisy_ui_1.filters,errisy_ui_1.filters.decimals)],[errisy_ui_1.fields.text("Limitation","Limitation of Purchase (e.g. 2KG per Customer, leave empty if none)")],errisy_ui_1.rows.buttons(errisy_ui_1.fields.submit("Save").event("click",this,function(){return __awaiter(m,void 0,void 0,regeneratorRuntime.mark(function n(){return regeneratorRuntime.wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.next=2,this.tab.tabview.InfoTable.Verify();case 2:if(p.sent){p.next=4;break}return p.abrupt("return");case 4:return p.next=6,this.tab.data.update(this.tab.data.SelectedItem);case 6:case"end":return p.stop();}},n,this)}))}))]}],Fields:"_id",Source:function(){return m.entries},DataTemplateUrl:{Value:"<div class=\"flex-row-stretch flex-stretch list-item\" [class.checked]=\"Parent.SelectedItem==Item\" [class.selected-items]=\"MultipleSelected\" (click)=\"Parent.SelectItem(Item, $event);\"> {{Item.Description?Item.Description:('('+Item._id+')')}} </div>"},CanCreate:!0,CanDelete:!0,Condition:function(){return __awaiter(m,void 0,void 0,regeneratorRuntime.mark(function o(){return regeneratorRuntime.wrap(function(q){for(;;)switch(q.prev=q.next){case 0:return q.next=2,this.isAccountActive();case 2:if(q.t0=q.sent,!q.t0){q.next=7;break}return q.next=6,this.isShopValid();case 6:q.t0=q.sent;case 7:return q.abrupt("return",q.t0);case 8:case"end":return q.stop();}},o,this)}))}},{Title:"Published Entries",Tab:[{Title:"Publish",View:[[errisy_ui_1.fields.text(function(){return ShopType.prototype._id},"ID").readonly()],[errisy_ui_1.fields.text(function(){return ShopType.prototype.FreeAllowedNumberOfEntry},"Free Entries").readonly()],[errisy_ui_1.fields.text(function(){return ShopType.prototype.ServiceAllowedNumberOfEntry},"Service Entries").readonly()],[errisy_ui_1.fields.text(function(){return ShopType.prototype.NumberOfEntry},"Number of Entries").readonly()],[errisy_ui_1.fields.text(function(){return ShopType.prototype.ExpiryDate},"ExpiryDate").readonly()],errisy_ui_1.rows.auto(errisy_ui_1.fields.relation(function(){return ShopType.prototype.DisplayedEntries},this.entries,{Value:"<div class=\"flex-row-stretch flex-stretch list-item\" [class.checked]=\"Parent.SelectedItem==Item\" [class.selected-items]=\"MultipleSelected\" (click)=\"Parent.SelectItem(Item, $event);\"> {{Item.Description?Item.Description:('('+Item._id+')')}} </div>"},"Description","Published Entries","Entries","Published",320)),errisy_ui_1.rows.buttons(errisy_ui_1.fields.submit("Save").event("click",this,function(){return __awaiter(m,void 0,void 0,regeneratorRuntime.mark(function n(){return regeneratorRuntime.wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.next=2,this.tab.tabview.InfoTable.Verify();case 2:if(p.sent){p.next=4;break}return p.abrupt("return");case 4:return p.next=6,this.core.updateShop(this.tab.Entity);case 6:this.tab.Entity=p.sent,this.tab.changeDetectorRef.detectChanges();case 8:case"end":return p.stop();}},n,this)}))}))]}],Entity:function(){return __awaiter(m,void 0,void 0,regeneratorRuntime.mark(function o(){return regeneratorRuntime.wrap(function(q){for(;;)switch(q.prev=q.next){case 0:return q.next=2,this.core.getShop();case 2:return q.abrupt("return",q.sent);case 3:case"end":return q.stop();}},o,this)}))},Condition:function(){return __awaiter(m,void 0,void 0,regeneratorRuntime.mark(function o(){return regeneratorRuntime.wrap(function(q){for(;;)switch(q.prev=q.next){case 0:return q.next=2,this.isAccountActive();case 2:if(q.t0=q.sent,!q.t0){q.next=7;break}return q.next=6,this.isShopValid();case 6:q.t0=q.sent;case 7:return q.abrupt("return",q.t0);case 8:case"end":return q.stop();}},o,this)}))}},{Title:"Shop",Tab:[{Title:"Shop",View:[[errisy_ui_1.fields.text(function(){return ShopType.prototype._id},"ID").readonly()],[errisy_ui_1.fields.text(function(){return ShopType.prototype.Name},"Name").attr({maxlength:100}).verify(errisy_ui_1.verifictions.maxLength(100))],[errisy_ui_1.fields.datetime(function(){return ShopType.prototype.ExpiryDate},"ExpiryDate").readonly()],[errisy_ui_1.fields.checkbox(function(){return ShopType.prototype.IsValid},"Valid (Readonly)").readonly()],[errisy_ui_1.fields.checkbox(function(){return ShopType.prototype.IsValidService},"Valid Service (Readonly)").readonly()],errisy_ui_1.rows.buttons(errisy_ui_1.fields.submit("Save").event("click",this,function(){return __awaiter(m,void 0,void 0,regeneratorRuntime.mark(function n(){return regeneratorRuntime.wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.next=2,this.tab.tabview.InfoTable.Verify();case 2:if(p.sent){p.next=4;break}return p.abrupt("return");case 4:return p.next=6,this.core.updateShop(this.tab.Entity);case 6:case"end":return p.stop();}},n,this)}))}))]},{Title:"Address",View:[errisy_ui_1.rows.buttons(errisy_ui_1.fields.submit("Select Location in Map").event("click",this,function(n,o){return __awaiter(m,void 0,void 0,regeneratorRuntime.mark(function p(){var s,t,u,w,q=this;return regeneratorRuntime.wrap(function(y){for(;;)switch(y.prev=y.next){case 0:if(0!=this.tab.MapWidth){y.next=16;break}return this.tab.MapWidth=500,this.tab.changeDetectorRef.detectChanges(),o.Title="Hide Map",s=this.tab.Entity,t=s.Location?{x:s.Location.coordinates[0],y:s.Location.coordinates[1]}:{x:this.tab.location.x,y:this.tab.location.y},y.next=8,this.tab.addUserMarker(t);case 8:if(y.sent.DragEnd={host:this,method:function(A){return __awaiter(q,void 0,void 0,regeneratorRuntime.mark(function B(){var C,D;return regeneratorRuntime.wrap(function(F){for(;;)switch(F.prev=F.next){case 0:return F.next=2,util.ResolveAddress(A.lat()+"",A.lng()+"");case 2:C=F.sent,C&&(D=this.tab.Entity,D.Country=C.CountryTerritory,D.State=C.StateProvince,D.Postcode=C.Postcode,D.Region=C.CityRegion,D.Suburb=C.SuburbTown,D.Street=C.Street,D.StreetNumber=C.Number,D.Location={type:"Point",coordinates:[A.lng(),A.lat()]},this.tab.tabview.changeDetectorRef.detectChanges());case 4:case"end":return F.stop();}},B,this)}))}},s.Location){y.next=14;break}return y.next=12,util.ResolveAddress(this.tab.location.y+"",this.tab.location.x+"");case 12:u=y.sent,u&&(w=this.tab.Entity,w.Country=u.CountryTerritory,w.State=u.StateProvince,w.Postcode=u.Postcode,w.Region=u.CityRegion,w.Suburb=u.SuburbTown,w.Street=u.Street,w.StreetNumber=u.Number,this.tab.tabview.changeDetectorRef.detectChanges());case 14:y.next=20;break;case 16:this.tab.CurrentLocationMarker.setMap(void 0),this.tab.CurrentLocationMarker=void 0,this.tab.MapWidth=0,o.Title="Select Location in Map";case 20:this.tab.changeDetectorRef.detectChanges();case 21:case"end":return y.stop();}},p,this)}))})),[errisy_ui_1.fields.text(function(){return ShopType.prototype.StreetNumber},"StreetNumber").attr({maxlength:100}).verify(errisy_ui_1.verifictions.maxLength(100))],[errisy_ui_1.fields.text(function(){return ShopType.prototype.Street},"Street").attr({maxlength:100}).verify(errisy_ui_1.verifictions.maxLength(100))],[errisy_ui_1.fields.text(function(){return ShopType.prototype.Suburb},"Suburb").attr({maxlength:100}).verify(errisy_ui_1.verifictions.maxLength(100))],[errisy_ui_1.fields.text(function(){return ShopType.prototype.Postcode},"Postcode").attr({maxlength:100}).verify(errisy_ui_1.verifictions.maxLength(100))],[errisy_ui_1.fields.text(function(){return ShopType.prototype.Region},"Region").attr({maxlength:100}).verify(errisy_ui_1.verifictions.maxLength(100))],[errisy_ui_1.fields.text(function(){return ShopType.prototype.State},"State").attr({maxlength:100}).verify(errisy_ui_1.verifictions.maxLength(100))],[errisy_ui_1.fields.text(function(){return ShopType.prototype.Country},"Country").attr({maxlength:100}).verify(errisy_ui_1.verifictions.maxLength(100))],errisy_ui_1.rows.buttons(errisy_ui_1.fields.submit("Save").event("click",this,function(){return __awaiter(m,void 0,void 0,regeneratorRuntime.mark(function n(){return regeneratorRuntime.wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.next=2,this.tab.tabview.InfoTable.Verify();case 2:if(p.sent){p.next=4;break}return p.abrupt("return");case 4:return p.next=6,this.core.updateShop(this.tab.Entity);case 6:case"end":return p.stop();}},n,this)}))}))]},{Title:"Hours",View:[errisy_ui_1.rows.auto(errisy_ui_1.fields.weekhours(function(){return ShopType.prototype.OpeningHours},"Opening Hours")),errisy_ui_1.rows.auto(errisy_ui_1.fields.scheduledhours(function(){return ShopType.prototype.ScheduledHours},"Opening Hours")),errisy_ui_1.rows.buttons(errisy_ui_1.fields.submit("Save").event("click",this,function(){return __awaiter(m,void 0,void 0,regeneratorRuntime.mark(function n(){return regeneratorRuntime.wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.next=2,this.tab.tabview.InfoTable.Verify();case 2:if(p.sent){p.next=4;break}return p.abrupt("return");case 4:return p.next=6,this.core.updateShop(this.tab.Entity);case 6:case"end":return p.stop();}},n,this)}))}))]}],Entity:function(){return __awaiter(m,void 0,void 0,regeneratorRuntime.mark(function o(){return regeneratorRuntime.wrap(function(q){for(;;)switch(q.prev=q.next){case 0:return q.next=2,this.core.getShop();case 2:return q.abrupt("return",q.sent);case 3:case"end":return q.stop();}},o,this)}))},Condition:function(){return __awaiter(m,void 0,void 0,regeneratorRuntime.mark(function o(){return regeneratorRuntime.wrap(function(q){for(;;)switch(q.prev=q.next){case 0:return q.next=2,this.isAccountActive();case 2:if(q.t0=q.sent,!q.t0){q.next=7;break}return q.next=6,this.isShopValid();case 6:q.t0=q.sent;case 7:return q.abrupt("return",q.t0);case 8:case"end":return q.stop();}},o,this)}))}},{Title:"Buy Service",Tab:[{Title:"Order",View:[[errisy_ui_1.fields.text(function(){return payment_data_1.ServiceOrderItem.prototype.ServiceType},"Service Type").readonly()],[errisy_ui_1.fields.text(function(){return payment_data_1.ServiceOrderItem.prototype.Price},"Price/Service Peroid (in Australian Dollar)").readonly()],[errisy_ui_1.fields.text(function(){return payment_data_1.ServiceOrderItem.prototype.Unit},"Number of Days Per Service Peroid").readonly()],[errisy_ui_1.fields.number(function(){return payment_data_1.ServiceOrderItem.prototype.Quantity},"Number of Peroids").event("keydown",errisy_ui_1.filters,errisy_ui_1.filters.numbers).event("ngModelChange",this,function(){return __awaiter(m,void 0,void 0,regeneratorRuntime.mark(function o(){var p;return regeneratorRuntime.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:p=this.tab.Entity,p.Subtotal=p.Price*p.Quantity;case 2:case"end":return s.stop();}},o,this)}))})],[errisy_ui_1.fields.text(function(){return payment_data_1.ServiceOrderItem.prototype.Subtotal},"Subtotal (in Australian Dollar)").readonly()],errisy_ui_1.rows.buttons(errisy_ui_1.fields.submit("Add to Cart").event("click",this,function(){return __awaiter(m,void 0,void 0,regeneratorRuntime.mark(function n(){var o;return regeneratorRuntime.wrap(function(q){for(;;)switch(q.prev=q.next){case 0:if(o=this.tab.Entity,o){q.next=4;break}return this.parent.Status="Invalid order item!",q.abrupt("return");case 4:return this.parent.Status="Adding order item to shopping cart...",q.prev=5,q.next=8,this.manage.addItemToShoppingCart(o);case 8:if(!q.sent){q.next=10;break}this.parent.Status="Order item added. Please check out at the checkout menu.";case 10:q.next=15;break;case 12:q.prev=12,q.t0=q["catch"](5),this.parent.Status=q.t0;case 15:case"end":return q.stop();}},n,this,[[5,12]])}))}))]}],Entity:function(){return __awaiter(m,void 0,void 0,regeneratorRuntime.mark(function o(){return regeneratorRuntime.wrap(function(q){for(;;)switch(q.prev=q.next){case 0:return q.next=2,this.manage.getOrderItem("FruitVegetableShop");case 2:return q.abrupt("return",q.sent);case 3:case"end":return q.stop();}},o,this)}))},Condition:function(){return __awaiter(m,void 0,void 0,regeneratorRuntime.mark(function o(){return regeneratorRuntime.wrap(function(q){for(;;)switch(q.prev=q.next){case 0:return q.next=2,this.isAccountActive();case 2:if(q.t0=q.sent,!q.t0){q.next=7;break}return q.next=6,this.isShopValid();case 6:q.t0=q.sent;case 7:return q.abrupt("return",q.t0);case 8:case"end":return q.stop();}},o,this)}))}},{Title:"Activation",Tab:[{Title:"How to Activate Your Shop",View:[errisy_ui_1.rows.auto(errisy_ui_1.fields.presenter("Verification",{Value:"<div style=\"width: 400px\" *ngIf=\"Item\"> <div style=\"text-wrap: normal; font-weight:normal; user-select: text\"> Please send your proof to us to demonstrate you are the owner of the shop. We will review and activate your shop account. </div> <div style=\"text-wrap: normal; font-weight:normal; user-select: text\"> Please include the following information and phone/mobile numbers in your email for our reference and contact. </div> <div style=\"text-wrap: normal; font-weight:normal; user-select: text\"> <span style=\"color: #48f\">Shop Type: </span><span style=\"color: red\">{{Item.Type}}</span> </div> <div style=\"text-wrap: normal; font-weight:normal; user-select: text\"> <span style=\"color: #48f\">Shop ID: </span><span style=\"color: red\">{{Item.Id}}</span> </div> <div style=\"text-wrap: normal; font-weight:normal; user-select: text\"> <span style=\"color: #48f\">Verification Code: </span> <span style=\"color: red\">{{Item.Code}}</span> </div> <div style=\"text-wrap: normal; font-weight:normal; user-select: text\"> Our email is: (Click the link to send email) </div> <div style=\"text-wrap: normal; font-weight:normal; user-select: text; color: blue; text-decoration: underline\"> <a href=\"mailto:cs.smartkoala@gmail.com?subject=Proof for Shop Owner&body=Hi,%0A%0DShop Type: {{Item.Type}}.%0A%0DShop ID: {{Item.Id}}.%0A%0DVerification Code: {{Item.Code}}.%0A%0DHere is my proof as shop owner:\" target=\"cs.smartkoala.mail\">cs.smartkoala@gmail.com</a> </div> </div>"},"Activation"))]}],Entity:function(){return __awaiter(m,void 0,void 0,regeneratorRuntime.mark(function o(){var p;return regeneratorRuntime.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,this.core.getShop();case 2:return p=s.sent,s.abrupt("return",{Verification:{Id:p._id,Code:p.VerifyCode,Type:"FuelShop"}});case 4:case"end":return s.stop();}},o,this)}))},Condition:function(){return __awaiter(m,void 0,void 0,regeneratorRuntime.mark(function o(){return regeneratorRuntime.wrap(function(q){for(;;)switch(q.prev=q.next){case 0:return q.next=2,this.isAccountActive();case 2:if(q.t0=q.sent,!q.t0){q.next=7;break}return q.next=6,this.isShopValid();case 6:q.t0=q.sent;case 7:return q.abrupt("return",q.t0);case 8:case"end":return q.stop();}},o,this)}))}}]}return _createClass(a,[{key:"isAccountActive",value:function(){return __awaiter(this,void 0,void 0,regeneratorRuntime.mark(function f(){return regeneratorRuntime.wrap(function(h){for(;;)switch(h.prev=h.next){case 0:if(!this._isAccountActive.Checked){h.next=2;break}return h.abrupt("return",this._isAccountActive.Value);case 2:return h.next=4,this.manage.isAccountActive();case 4:return this._isAccountActive.Value=h.sent,this._isAccountActive.Checked=!0,h.abrupt("return",this._isAccountActive.Value);case 7:case"end":return h.stop();}},f,this)}))}},{key:"isShopValid",value:function(){return __awaiter(this,void 0,void 0,regeneratorRuntime.mark(function f(){return regeneratorRuntime.wrap(function(h){for(;;)switch(h.prev=h.next){case 0:if(!this._isShopValid.Checked){h.next=2;break}return h.abrupt("return",this._isShopValid.Value);case 2:return h.next=4,this.core.getShop();case 4:if(!h.sent){h.next=8;break}h.t0=!0,h.next=9;break;case 8:h.t0=!1;case 9:return this._isShopValid.Value=h.t0,this._isShopValid.Checked=!0,h.abrupt("return",this._isShopValid.Value);case 12:case"end":return h.stop();}},f,this)}))}},{key:"ngAfterContentInit",value:function(){return __awaiter(this,void 0,void 0,regeneratorRuntime.mark(function f(){return regeneratorRuntime.wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,this.parent.checkLogin();case 2:if(h.sent){h.next=5;break}return this.parent.select(0),h.abrupt("return");case 5:this.parent.Title="Fuel Shop",this.changeDetectorRef.detectChanges();case 7:case"end":return h.stop();}},f,this)}))}}]),a}();__decorate([core_1.ViewChild("view"),__metadata("design:type",errisy_ui_1.InfoTableControl)],FuelComponent.prototype,"View",void 0),__decorate([core_1.HostBinding("style.flex"),__metadata("design:type",String)],FuelComponent.prototype,"style_flex",void 0),__decorate([core_1.HostBinding("style.display"),__metadata("design:type",String)],FuelComponent.prototype,"style_display",void 0),__decorate([core_1.ViewChild("tab"),__metadata("design:type",errisy_ui_1.TabManager)],FuelComponent.prototype,"tab",void 0),FuelComponent=__decorate([core_1.Component({selector:"manage-fuel",template:" <div class=\"flex-column-stretch flex-stretch\"> <div class=\"flex-row-stretch view-title\"> <div class=\"flex-row-center flex-stretch flex-center\"> <span style=\"cursor: default; user-select: none\">{{parent.Title}}</span> </div> </div> <div [TabManager]=\"Tabs\" #tab class=\"flex-column-stretch flex-stretch warm-gradient\"> </div> <div class=\"flex-row-center view-status\"> {{parent.Status}} </div> </div>",providers:[management_client_1.ManageCore,fuel_client_1.ShopCore,fuel_client_1.EntrySuffixCore,fuel_client_1.ProductCore]}),__metadata("design:paramtypes",[management_client_1.ManageCore,content_1.ContentControl,core_1.ChangeDetectorRef,fuel_client_1.ShopCore,fuel_client_1.EntrySuffixCore,fuel_client_1.ProductCore])],FuelComponent),exports.FuelComponent=FuelComponent;