"use strict";var __decorate=this&&this.__decorate||function(a,b,f,g){var l,h=arguments.length,j=3>h?b:null===g?g=Object.getOwnPropertyDescriptor(b,f):g;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)j=Reflect.decorate(a,b,f,g);else for(var m=a.length-1;0<=m;m--)(l=a[m])&&(j=(3>h?l(j):3<h?l(b,f,j):l(b,f))||j);return 3<h&&j&&Object.defineProperty(b,f,j),j},__metadata=this&&this.__metadata||function(a,b){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(a,b)},__awaiter=this&&this.__awaiter||function(a,b,f,g){return new(f||(f=Promise))(function(h,j){function l(o){try{n(g.next(o))}catch(p){j(p)}}function m(o){try{n(g["throw"](o))}catch(p){j(p)}}function n(o){o.done?h(o.value):new f(function(p){p(o.value)}).then(l,m)}n((g=g.apply(a,b)).next())})};const core_1=require("@angular/core"),content_1=require("../ui/content"),shop_data_1=require("../shop/shop.data"),management_client_1=require("./management.client"),util=require("errisy-util"),units_1=require("../shop/units"),errisy_ui_1=require("errisy-ui"),packedfood_client_1=require("./packedfood.client"),payment_data_1=require("../shop/payment.data");let ShopType=shop_data_1.PackedFoodShop,ProductType=shop_data_1.PackedFoodProduct,CategoryType=shop_data_1.PackedFoodCategory,EntryType=shop_data_1.PackedFoodEntry,PackedFoodComponent=class{constructor(b,f,g,h,j,l){this.manage=b,this.parent=f,this.changeDetectorRef=g,this.core=h,this.entries=j,this.products=l,this.style_flex="1 1 auto",this.style_display="flex",this._isAccountActive={},this._isShopValid={},this.Tabs=[{Title:"Please Verify Mobile First",Tab:[{Title:"Please Verify Mobile First",View:[errisy_ui_1.rows.text(errisy_ui_1.fields.info("Please verify your mobile first")),errisy_ui_1.rows.buttons(errisy_ui_1.fields.submit("Go to Verify").event("click",this,()=>__awaiter(this,void 0,void 0,function*(){this.parent.select(1);let m=this.parent.ChildView;yield m.SelectTab(m.Tabs[1])})))]}],Condition:()=>__awaiter(this,void 0,void 0,function*(){return!(yield this.isAccountActive())})},{Title:"Create Shop",Tab:[{Title:"Create",View:[errisy_ui_1.rows.buttons(errisy_ui_1.fields.submit("Create Packed Food Shop").event("click",this,()=>__awaiter(this,void 0,void 0,function*(){yield this.core.createShop(),yield this.tab.UpdateTabs()})))]}],Condition:()=>__awaiter(this,void 0,void 0,function*(){return!(yield this.isShopValid())})},{Title:"Manual",Tab:[{Title:"User Manual",View:[errisy_ui_1.rows.auto(errisy_ui_1.fields.content({},{Value:"<div style=\"width: 550px; display: block; height: 400px; user-select: text; font-weight: normal; text-shadow: none; overflow-y: auto\"> <div style=\"font-size:20px; font-weight: bold; color: blue\"> 1. Set up your shop. </div> <div style=\"font-size:16px; color: black\"> &nbsp;&nbsp;&nbsp;&nbsp;In the \"Shop\" tab, set up your shop <span style=\"color: red\">Name</span>. </div> <div style=\"font-size:16px; color: black\"> &nbsp;&nbsp;&nbsp;&nbsp;In the \"Shop\" - \"Shop\" tab, set up your shop <span style=\"color: red\">Name</span>. </div> <div style=\"font-size:16px; color: black\"> &nbsp;&nbsp;&nbsp;&nbsp;In the \"Shop\" - \"Address\" tab, set up your shop <span style=\"color: red\">Location</span>. The location is where your shop is displayed in the map. Please click \"<span style=\"color: red\">Select Location in Map</span>\" button and drag the marker in the map. Map can be zoomed by mouse scrolling. </div> <div style=\"font-size:16px; color: black\"> &nbsp;&nbsp;&nbsp;&nbsp;In the \"Shop\" - \"Hours\" tab, set up your shop <span style=\"color: red\">Regular Hours</span> and <span style=\"color: red\">Scheduled Hours</span>. <span style=\"color: red\">Regular Hours</span> is the regular Monday to Sunday hours that is used by default. Click \"+\" button to add hours for each weekday. <span style=\"color: red\">Scheduled Hours</span> should be used for days that when you have different opening hours from the regular Monday to Sunday hours or when you are closed. Click \"+\" to add a date first. You need to input a valid date and then click the \"+\" on the right of date to add hours. In both <span style=\"color: red\">Regular Hours</span> and <span style=\"color: red\">Scheduled Hours</span>, You can add multiple hours for a days in case you have multiple opening time ranges (which is very common for restaurants). </div> <div style=\"font-size:20px; font-weight: bold; color: blue\"> 2. Create your products. </div> <div style=\"font-size:16px; color: black\"> &nbsp;&nbsp;&nbsp;&nbsp;In the \"Product Entries\" tab, create a new product by clicking the \"+\" button under the \"Product Entries\" list. To edit the entry, select the entry and edit the product information in the general tab or other tabs. Remeber to click <span style=\"color: red\">Save</span> button after each edit. </div> <div style=\"font-size:16px; color: black\"> &nbsp;&nbsp;&nbsp;&nbsp;For Rental and Real Estate shops, you must select a valid category. </div> <div style=\"font-size:16px; color: black\"> &nbsp;&nbsp;&nbsp;&nbsp;Rental: For room rental, you must provide information for the \"Location\" (Click \"Select Location in Map\" to drag your location in map and save, see \"Shop\" above.) \"Room Rental\", \"Energy &amp; Water\", \"Internet &amp; Phone\", \"Car Parking\" and \"Terms\" tabs. For entire property rental (no need for room rental), you must provide information for the \"Building\", \"Energy &amp; Water\", \"Internet &amp; Phone\", \"Car Parking\", and \"Terms\" tabs as well the \"Granny Flat\" tab is the property contains a granny flat. If your property contains land, please also provide information for the \"Land\" tab. </div> <div style=\"font-size:16px; color: black\"> &nbsp;&nbsp;&nbsp;&nbsp;Real Estate: For any property except land, you must provide information for the \"Main Building\", \"Car Parking\" and \"Inspections\" tabs. For entire property rental (no need for room rental), you must provide information for the \"Building\", \"Energy &amp; Water\", \"Internet &amp; Phone\", \"Car Parking\", and \"Terms\" tabs as well the \"Granny Flat\" tab is the property contains a granny flat. </div> <div style=\"font-size:20px; font-weight: bold; color: blue\"> 3. Publish your products. </div> <div style=\"font-size:16px; color: black\"> &nbsp;&nbsp;&nbsp;&nbsp;For any product except for \"Real Estate\" and \"Vehicle\", use the \"Published Entries\" tab to manage published items. You have \"Free Entries\" number, which is the number of products you can publish without purchasing a listing service. The \"Service Entries\" number is the extra number of products you can publish when you purchased a listing service. You need to purchase the extra listing service in the \"Buy Service\" tab. Fill a valid number in the <span style=\"color: red\">Number of Peroids</span> box. <span style=\"color: red\">Subtotal</span> box shows the total amount. You can then click <span style=\"color: red\">Add to Cart</span> and checkout in the \"Checkout &amp; History\" menu in navigation bar (on the left bottom). </div> <div style=\"font-size:16px; color: black\"> &nbsp;&nbsp;&nbsp;&nbsp;For \"Real Estate\" and \"Vehicle\", use the \"Published Entries\" tab to manage published items. You have \"Free Entries\" number, which is the number of products you can publish without purchasing a listing service. The \"Service Entries\" number is the extra number of products you can publish when you purchased a listing service. </div> <div style=\"font-size:20px; font-weight: bold; color: blue\"> 4. Activate Your Shop. </div> <div style=\"font-size:16px; color: black\"> &nbsp;&nbsp;&nbsp;&nbsp;In the \"Activation\" tab, you can get the information required for verify your ownship/relationship to the shop. Generally, you can click the email link to send us the proof as your shop owner. Please provide phone number in case we need to contact you. </div> <div style=\"font-size:16px; color: black\"> &nbsp;&nbsp;&nbsp;&nbsp;You don't need to activate \"Rental\", \"Real Estate\", \"Vehicle Service\" or \"House Service\" shop. They are activate by default. </div> </div>"},"How to Use"))]}],Condition:()=>__awaiter(this,void 0,void 0,function*(){return(yield this.isAccountActive())&&(yield this.isShopValid())})},{Title:"Product Entries",Tab:[{Title:"General",View:[[errisy_ui_1.fields.text("_id","ID")],[errisy_ui_1.fields.autocomplete(()=>EntryType.prototype.Product,this.entries["searchProductsByName url"],"Name","Name","Primary Product",{minSearchLength:1,dataMode:"id",objectFetcher:this.products}).event("selected",this,m=>__awaiter(this,void 0,void 0,function*(){if(m&&m.originalObject){let n=m.originalObject,o=this.tab.tabview.InfoTable.Entity;o.Images&&Array.isArray(o.Images)?o.Images.splice(0,0,n.Image):o.Images=[n.Image]}}))],[errisy_ui_1.fields.text("Description","Description")],[errisy_ui_1.fields.number("Price","Price in AUD").event("keydown",errisy_ui_1.filters,errisy_ui_1.filters.decimals).attr({min:0}).verify(errisy_ui_1.verifictions.min(0))],[errisy_ui_1.fields.autocomplete("Unit",units_1.Units,"Name","Name","Unit",{autoMatch:!0,minSearchLength:1})],[errisy_ui_1.fields.datetime("StartTime","Start Time").attr({min:"2016-01-01T00:00",max:"2116-01-01T00:00"}).verify(errisy_ui_1.verifictions.min(+new Date(2016,0))).verify(errisy_ui_1.verifictions.max(+new Date(2116,0)))],[errisy_ui_1.fields.datetime("EndTime","End Time").attr({min:"2016-01-01T00:00",max:"2116-01-01T00:00"}).verify(errisy_ui_1.verifictions.min(+new Date(2016,0))).verify(errisy_ui_1.verifictions.max(+new Date(2116,0)))],errisy_ui_1.rows.auto(errisy_ui_1.fields.imagelist("Images",this.entries,this.entries.upload,"Images",!0,160,160,"image/*",307200)),[errisy_ui_1.fields.text("PerUnitPrice","Estimated Per Kg Price in AUD (if Unit is not KG)").event("keydown",errisy_ui_1.filters,errisy_ui_1.filters.decimals)],[errisy_ui_1.fields.text("Limitation","Limitation of Purchase (e.g. 2KG per Customer, leave empty if none)")],errisy_ui_1.rows.buttons(errisy_ui_1.fields.submit("Save").event("click",this,()=>__awaiter(this,void 0,void 0,function*(){(yield this.tab.tabview.InfoTable.Verify())&&(console.log(this.tab.data.SelectedItem),yield this.tab.data.update(this.tab.data.SelectedItem))})))]}],Fields:"_id",Source:()=>this.entries,DataTemplateUrl:{Value:"<div class=\"flex-row-stretch flex-stretch list-item\" [class.checked]=\"Parent.SelectedItem==Item\" [class.selected-items]=\"MultipleSelected\" (click)=\"Parent.SelectItem(Item, $event);\"> {{Item.Description?Item.Description:('('+Item._id+')')}} </div>"},CanCreate:!0,CanDelete:!0,Condition:()=>__awaiter(this,void 0,void 0,function*(){return(yield this.isAccountActive())&&(yield this.isShopValid())})},{Title:"Published Entries",Tab:[{Title:"Publish",View:[[errisy_ui_1.fields.text(()=>ShopType.prototype._id,"ID").readonly()],[errisy_ui_1.fields.text(()=>ShopType.prototype.FreeAllowedNumberOfEntry,"Free Entries").readonly()],[errisy_ui_1.fields.text(()=>ShopType.prototype.ServiceAllowedNumberOfEntry,"Service Entries").readonly()],[errisy_ui_1.fields.text(()=>ShopType.prototype.NumberOfEntry,"Number of Entries").readonly()],[errisy_ui_1.fields.text(()=>ShopType.prototype.ExpiryDate,"ExpiryDate").readonly()],errisy_ui_1.rows.auto(errisy_ui_1.fields.relation(()=>ShopType.prototype.DisplayedEntries,this.entries,{Value:"<div class=\"flex-row-stretch flex-stretch list-item\" [class.checked]=\"Parent.SelectedItem==Item\" [class.selected-items]=\"MultipleSelected\" (click)=\"Parent.SelectItem(Item, $event);\"> {{Item.Description?Item.Description:('('+Item._id+')')}} </div>"},"Description","Published Entries","Entries","Published",320)),errisy_ui_1.rows.buttons(errisy_ui_1.fields.submit("Save").event("click",this,()=>__awaiter(this,void 0,void 0,function*(){(yield this.tab.tabview.InfoTable.Verify())&&(this.tab.Entity=yield this.core.updateShop(this.tab.Entity),this.tab.changeDetectorRef.detectChanges())})))]}],Entity:()=>__awaiter(this,void 0,void 0,function*(){return yield this.core.getShop()}),Condition:()=>__awaiter(this,void 0,void 0,function*(){return(yield this.isAccountActive())&&(yield this.isShopValid())})},{Title:"Shop",Tab:[{Title:"Shop",View:[[errisy_ui_1.fields.text(()=>ShopType.prototype._id,"ID").readonly()],[errisy_ui_1.fields.text(()=>ShopType.prototype.Name,"Name").attr({maxlength:100}).verify(errisy_ui_1.verifictions.maxLength(100))],[errisy_ui_1.fields.datetime(()=>ShopType.prototype.ExpiryDate,"ExpiryDate").readonly()],[errisy_ui_1.fields.checkbox(()=>ShopType.prototype.IsValid,"Valid (Readonly)").readonly()],[errisy_ui_1.fields.checkbox(()=>ShopType.prototype.IsValidService,"Valid Service (Readonly)").readonly()],errisy_ui_1.rows.buttons(errisy_ui_1.fields.submit("Save").event("click",this,()=>__awaiter(this,void 0,void 0,function*(){(yield this.tab.tabview.InfoTable.Verify())&&(yield this.core.updateShop(this.tab.Entity))})))]},{Title:"Address",View:[errisy_ui_1.rows.buttons(errisy_ui_1.fields.submit("Select Location in Map").event("click",this,(m,n)=>__awaiter(this,void 0,void 0,function*(){let o=this.tab.Entity;if(o){if(0==this.tab.MapWidth){this.tab.MapWidth=500,this.tab.changeDetectorRef.detectChanges(),n.Title="Hide Map";let p=o.Location?{x:o.Location.coordinates[0],y:o.Location.coordinates[1]}:{x:this.tab.location.x,y:this.tab.location.y};if((yield this.tab.addUserMarker(p)).DragEnd={host:this,method:q=>__awaiter(this,void 0,void 0,function*(){let s=yield util.ResolveAddress(q.lat()+"",q.lng()+"");if(s){let t=this.tab.Entity;t.Country=s.CountryTerritory,t.State=s.StateProvince,t.Postcode=s.Postcode,t.Region=s.CityRegion,t.Suburb=s.SuburbTown,t.Street=s.Street,t.StreetNumber=s.Number,t.Location={type:"Point",coordinates:[q.lng(),q.lat()]},this.tab.tabview.changeDetectorRef.detectChanges()}})},!o.Location){let q=yield util.ResolveAddress(this.tab.location.y+"",this.tab.location.x+"");if(q){let s=this.tab.Entity;s.Country=q.CountryTerritory,s.State=q.StateProvince,s.Postcode=q.Postcode,s.Region=q.CityRegion,s.Suburb=q.SuburbTown,s.Street=q.Street,s.StreetNumber=q.Number,this.tab.tabview.changeDetectorRef.detectChanges()}}}else this.tab.CurrentLocationMarker.setMap(void 0),this.tab.CurrentLocationMarker=void 0,this.tab.MapWidth=0,n.Title="Select Location in Map";this.tab.changeDetectorRef.detectChanges()}}))),[errisy_ui_1.fields.text(()=>ShopType.prototype.StreetNumber,"StreetNumber").attr({maxlength:100}).verify(errisy_ui_1.verifictions.maxLength(100))],[errisy_ui_1.fields.text(()=>ShopType.prototype.Street,"Street").attr({maxlength:100}).verify(errisy_ui_1.verifictions.maxLength(100))],[errisy_ui_1.fields.text(()=>ShopType.prototype.Suburb,"Suburb").attr({maxlength:100}).verify(errisy_ui_1.verifictions.maxLength(100))],[errisy_ui_1.fields.text(()=>ShopType.prototype.Postcode,"Postcode").attr({maxlength:100}).verify(errisy_ui_1.verifictions.maxLength(100))],[errisy_ui_1.fields.text(()=>ShopType.prototype.Region,"Region").attr({maxlength:100}).verify(errisy_ui_1.verifictions.maxLength(100))],[errisy_ui_1.fields.text(()=>ShopType.prototype.State,"State").attr({maxlength:100}).verify(errisy_ui_1.verifictions.maxLength(100))],[errisy_ui_1.fields.text(()=>ShopType.prototype.Country,"Country").attr({maxlength:100}).verify(errisy_ui_1.verifictions.maxLength(100))],errisy_ui_1.rows.buttons(errisy_ui_1.fields.submit("Save").event("click",this,()=>__awaiter(this,void 0,void 0,function*(){(yield this.tab.tabview.InfoTable.Verify())&&(yield this.core.updateShop(this.tab.Entity))})))]},{Title:"Hours",View:[errisy_ui_1.rows.auto(errisy_ui_1.fields.weekhours(()=>ShopType.prototype.OpeningHours,"Opening Hours")),errisy_ui_1.rows.auto(errisy_ui_1.fields.scheduledhours(()=>ShopType.prototype.ScheduledHours,"Opening Hours")),errisy_ui_1.rows.buttons(errisy_ui_1.fields.submit("Save").event("click",this,()=>__awaiter(this,void 0,void 0,function*(){(yield this.tab.tabview.InfoTable.Verify())&&(yield this.core.updateShop(this.tab.Entity))})))]}],Entity:()=>__awaiter(this,void 0,void 0,function*(){return yield this.core.getShop()}),Condition:()=>__awaiter(this,void 0,void 0,function*(){return(yield this.isAccountActive())&&(yield this.isShopValid())})},{Title:"Buy Service",Tab:[{Title:"Order",View:[[errisy_ui_1.fields.text(()=>payment_data_1.ServiceOrderItem.prototype.ServiceType,"Service Type").readonly()],[errisy_ui_1.fields.text(()=>payment_data_1.ServiceOrderItem.prototype.Price,"Price/Service Peroid (in Australian Dollar)").readonly()],[errisy_ui_1.fields.text(()=>payment_data_1.ServiceOrderItem.prototype.Unit,"Number of Days Per Service Peroid").readonly()],[errisy_ui_1.fields.number(()=>payment_data_1.ServiceOrderItem.prototype.Quantity,"Number of Peroids").event("keydown",errisy_ui_1.filters,errisy_ui_1.filters.numbers).event("ngModelChange",this,()=>__awaiter(this,void 0,void 0,function*(){let n=this.tab.Entity;n.Subtotal=n.Price*n.Quantity}))],[errisy_ui_1.fields.text(()=>payment_data_1.ServiceOrderItem.prototype.Subtotal,"Subtotal (in Australian Dollar)").readonly()],errisy_ui_1.rows.buttons(errisy_ui_1.fields.submit("Add to Cart").event("click",this,()=>__awaiter(this,void 0,void 0,function*(){let m=this.tab.Entity;if(!m)return void(this.parent.Status="Invalid order item!");this.parent.Status="Adding order item to shopping cart...";try{(yield this.manage.addItemToShoppingCart(m))&&(this.parent.Status="Order item added. Please check out at the checkout menu.")}catch(n){this.parent.Status=n}})))]}],Entity:()=>__awaiter(this,void 0,void 0,function*(){return yield this.manage.getOrderItem("PackedFoodShop")}),Condition:()=>__awaiter(this,void 0,void 0,function*(){return(yield this.isAccountActive())&&(yield this.isShopValid())})},{Title:"Activation",Tab:[{Title:"How to Activate Your Shop",View:[errisy_ui_1.rows.auto(errisy_ui_1.fields.presenter("Verification",$packer.Angular2RemoteTemplate("/management/template.html#customer service"),"Activation"))]}],Entity:()=>__awaiter(this,void 0,void 0,function*(){let m=yield this.core.getShop();return{Verification:{Id:m._id,Code:m.VerifyCode,Type:"RentalShop"}}}),Condition:()=>__awaiter(this,void 0,void 0,function*(){return(yield this.isAccountActive())&&(yield this.isShopValid())})}]}isAccountActive(){return __awaiter(this,void 0,void 0,function*(){return this._isAccountActive.Checked?this._isAccountActive.Value:(this._isAccountActive.Value=yield this.manage.isAccountActive(),this._isAccountActive.Checked=!0,this._isAccountActive.Value)})}isShopValid(){return __awaiter(this,void 0,void 0,function*(){return this._isShopValid.Checked?this._isShopValid.Value:(this._isShopValid.Value=!!(yield this.core.getShop()),this._isShopValid.Checked=!0,this._isShopValid.Value)})}ngAfterContentInit(){return __awaiter(this,void 0,void 0,function*(){return(yield this.parent.checkLogin())?void(this.parent.Title="Packed Food Shop",this.changeDetectorRef.detectChanges()):void this.parent.select(0)})}};__decorate([core_1.ViewChild("view"),__metadata("design:type",errisy_ui_1.InfoTableControl)],PackedFoodComponent.prototype,"View",void 0),__decorate([core_1.HostBinding("style.flex"),__metadata("design:type",String)],PackedFoodComponent.prototype,"style_flex",void 0),__decorate([core_1.HostBinding("style.display"),__metadata("design:type",String)],PackedFoodComponent.prototype,"style_display",void 0),__decorate([core_1.ViewChild("tab"),__metadata("design:type",errisy_ui_1.TabManager)],PackedFoodComponent.prototype,"tab",void 0),PackedFoodComponent=__decorate([core_1.Component({selector:"manage-packedfood",template:" <div class=\"flex-column-stretch flex-stretch\"> <div class=\"flex-row-stretch view-title\"> <div class=\"flex-row-center flex-stretch flex-center\"> <span style=\"cursor: default; user-select: none\">{{parent.Title}}</span> </div> </div> <div [TabManager]=\"Tabs\" #tab class=\"flex-column-stretch flex-stretch warm-gradient\"> </div> <div class=\"flex-row-center view-status\"> {{parent.Status}} </div> </div>",providers:[management_client_1.ManageCore,packedfood_client_1.ShopCore,packedfood_client_1.EntrySuffixCore,packedfood_client_1.ProductCore]}),__metadata("design:paramtypes",[management_client_1.ManageCore,content_1.ContentControl,core_1.ChangeDetectorRef,packedfood_client_1.ShopCore,packedfood_client_1.EntrySuffixCore,packedfood_client_1.ProductCore])],PackedFoodComponent),exports.PackedFoodComponent=PackedFoodComponent;