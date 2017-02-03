"use strict";var __decorate=this&&this.__decorate||function(a,b,f,g){var l,h=arguments.length,j=3>h?b:null===g?g=Object.getOwnPropertyDescriptor(b,f):g;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)j=Reflect.decorate(a,b,f,g);else for(var m=a.length-1;0<=m;m--)(l=a[m])&&(j=(3>h?l(j):3<h?l(b,f,j):l(b,f))||j);return 3<h&&j&&Object.defineProperty(b,f,j),j},__metadata=this&&this.__metadata||function(a,b){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(a,b)},__awaiter=this&&this.__awaiter||function(a,b,f,g){return new(f||(f=Promise))(function(h,j){function l(o){try{n(g.next(o))}catch(p){j(p)}}function m(o){try{n(g["throw"](o))}catch(p){j(p)}}function n(o){o.done?h(o.value):new f(function(p){p(o.value)}).then(l,m)}n((g=g.apply(a,b)).next())})};const core_1=require("@angular/core"),content_1=require("../ui/content"),admin_client_1=require("./admin.client"),util=require("errisy-util"),units_1=require("../shop/units"),fruit_client_1=require("./fruit.client"),shop_data_1=require("../shop/shop.data"),errisy_ui_1=require("errisy-ui");let ShopType=shop_data_1.FruitVegetableShop,ProductType=shop_data_1.FruitVegetableProduct,CategoryType=shop_data_1.FruitVegetableCategory,EntryType=shop_data_1.FruitVegetableEntry,FruitAdminComponent=class{constructor(b,f,g,h,j,l,m){this.changeDetectorRef=b,this.parent=f,this.admin=g,this.products=h,this.categories=j,this.entries=l,this.shops=m,this.style_flex="1 1 auto",this.style_display="flex",this.Tabs=[{Title:"Entries",Tab:[{Title:"Entry",View:[[errisy_ui_1.fields.text(()=>EntryType.prototype._id,"ID")],[errisy_ui_1.fields.autocomplete(()=>EntryType.prototype.Product,this.entries["searchProductsByName url"],"Name","Name","Primary Product",{minSearchLength:2,dataMode:"id",objectFetcher:this.products}).event("selected",this,n=>__awaiter(this,void 0,void 0,function*(){if(n&&n.originalObject){let o=n.originalObject,p=this.tab.tabview.InfoTable.Entity;p.Images&&Array.isArray(p.Images)?p.Images.splice(0,0,o.Image):p.Images=[o.Image]}}))],[errisy_ui_1.fields.text(()=>EntryType.prototype.Description,"Description")],[errisy_ui_1.fields.number(()=>EntryType.prototype.Price,"Price in AUD").event("keydown",errisy_ui_1.filters,errisy_ui_1.filters.decimals).attr({min:0}).verify(errisy_ui_1.verifictions.min(0))],[errisy_ui_1.fields.autocomplete(()=>EntryType.prototype.Unit,units_1.Units,"Name","Name","Unit",{autoMatch:!0,minSearchLength:1})],[errisy_ui_1.fields.datetime(()=>EntryType.prototype.StartTime,"Start Time").attr({min:"2016-01-01T00:00",max:"2116-01-01T00:00"}).verify(errisy_ui_1.verifictions.min(+new Date(2016,0))).verify(errisy_ui_1.verifictions.max(+new Date(2116,0)))],[errisy_ui_1.fields.datetime(()=>EntryType.prototype.EndTime,"End Time").attr({min:"2016-01-01T00:00",max:"2116-01-01T00:00"}).verify(errisy_ui_1.verifictions.min(+new Date(2016,0))).verify(errisy_ui_1.verifictions.max(+new Date(2116,0)))],errisy_ui_1.rows.auto(errisy_ui_1.fields.imagelist(()=>EntryType.prototype.Images,this.entries,this.entries.upload,"Images",!0,160,160,"image/*",307200)),[errisy_ui_1.fields.text(()=>EntryType.prototype.PerUnitPrice,"Estimated Per Kg Price in AUD (if Unit is not KG)").event("keydown",errisy_ui_1.filters,errisy_ui_1.filters.decimals)],[errisy_ui_1.fields.text(()=>EntryType.prototype.Limitation,"Limitation of Purchase (e.g. 2KG per Customer, leave empty if none)")],errisy_ui_1.rows.buttons(errisy_ui_1.fields.submit("Save").event("click",this,()=>__awaiter(this,void 0,void 0,function*(){(yield this.tab.tabview.InfoTable.Verify())&&(console.log(this.tab.data.SelectedItem),yield this.tab.data.update(this.tab.data.SelectedItem))})))]}],Fields:"_id",Source:()=>this.entries,DataTemplateUrl:{Value:"<div class=\"flex-row-stretch flex-stretch list-item\" [class.checked]=\"Selected\" [class.selected-items]=\"MultipleSelected\" (click)=\"Parent.SelectItem(Item, $event);\"> {{Item._id}} ({{Item.Name}}) </div>"},CanCreate:!1,CanDelete:!0},{Title:"Categories",Tab:[{Title:"General",View:[[errisy_ui_1.fields.text(()=>CategoryType.prototype._id,"ID")],[errisy_ui_1.fields.text(()=>CategoryType.prototype.Name,"Name")],[errisy_ui_1.fields.number(()=>CategoryType.prototype.Index,"Index")],errisy_ui_1.rows.auto(errisy_ui_1.fields.image(()=>CategoryType.prototype.Image,this.categories,this.categories.upload,"Image",160,160,".svg,image/*",102400)),errisy_ui_1.rows.buttons(errisy_ui_1.fields.submit("Save").event("click",this,()=>__awaiter(this,void 0,void 0,function*(){yield this.tab.data.update(this.tab.data.SelectedItem)})))]},{Title:"Relation",View:[errisy_ui_1.rows.auto(errisy_ui_1.fields.relation("Products",this.products,{Value:"<div class=\"flex-row-stretch flex-stretch list-item\" [class.checked]=\"Selected\" [class.selected-items]=\"MultipleSelected\" (click)=\"Parent.SelectItem(Item, $event);\"> {{Item._id}} ({{Item.Name}}) </div>"},"_id,Name","Included Products","Products","Included",320)),errisy_ui_1.rows.buttons(errisy_ui_1.fields.submit("Save").event("click",this,()=>__awaiter(this,void 0,void 0,function*(){yield this.tab.data.update(this.tab.data.SelectedItem)})))]}],Fields:"_id",Source:()=>this.categories,DataTemplateUrl:{Value:"<div class=\"flex-row-stretch flex-stretch list-item\" [class.checked]=\"Selected\" [class.selected-items]=\"MultipleSelected\" (click)=\"Parent.SelectItem(Item, $event);\"> {{Item._id}} ({{Item.Name}}) </div>"},CanCreate:!0,CanDelete:!0},{Title:"Products",Tab:[{Title:"General",View:[[errisy_ui_1.fields.text(()=>ProductType.prototype._id,"ID")],[errisy_ui_1.fields.text(()=>ProductType.prototype.Name,"Name")],[errisy_ui_1.fields.number(()=>ProductType.prototype.Index,"Index")],[errisy_ui_1.fields.autocomplete(()=>ProductType.prototype.Unit,units_1.Units,"Name","Name","Unit",{autoMatch:!0,minSearchLength:1})],[errisy_ui_1.fields.autocomplete(()=>ProductType.prototype.Primary,this.products["searchByName url"],"Name","Name","Primary Product",{minSearchLength:2,dataMode:"id",objectFetcher:this.products})],errisy_ui_1.rows.auto(errisy_ui_1.fields.image(()=>ProductType.prototype.Image,this.products,this.products.upload,"Product Image",160,160,".svg,image/*",102400)),errisy_ui_1.rows.auto(errisy_ui_1.fields.relation(()=>ProductType.prototype.Secondaries,this.products,{Value:"<div class=\"flex-row-stretch flex-stretch list-item\" [class.checked]=\"Selected\" [class.selected-items]=\"MultipleSelected\" (click)=\"Parent.SelectItem(Item, $event);\"> {{Item._id}} ({{Item.Name}}) </div>"},"Name","Secondary Products","Products","Included",320)),errisy_ui_1.rows.buttons(errisy_ui_1.fields.submit("Save").event("click",this,()=>__awaiter(this,void 0,void 0,function*(){yield this.tab.data.update(this.tab.data.SelectedItem)})))]}],Fields:"_id",Source:()=>this.products,DataTemplateUrl:{Value:"<div class=\"flex-row-stretch flex-stretch list-item\" [class.checked]=\"Selected\" [class.selected-items]=\"MultipleSelected\" (click)=\"Parent.SelectItem(Item, $event);\"> {{Item._id}} ({{Item.Name}}) </div>"},CanCreate:!0,CanDelete:!0},{Title:"Shops",Tab:[{Title:"Shop",View:[[errisy_ui_1.fields.text(()=>ShopType.prototype._id,"ID").readonly()],[errisy_ui_1.fields.text(()=>ShopType.prototype.Name,"Name").attr({maxlength:100}).verify(errisy_ui_1.verifictions.maxLength(100))],[errisy_ui_1.fields.datetime(()=>ShopType.prototype.ExpiryDate,"ExpiryDate").readonly()],[errisy_ui_1.fields.checkbox(()=>ShopType.prototype.IsValid,"Valid")],[errisy_ui_1.fields.checkbox(()=>ShopType.prototype.IsValidService,"Valid Service")],errisy_ui_1.rows.buttons(errisy_ui_1.fields.submit("Save").event("click",this,()=>__awaiter(this,void 0,void 0,function*(){(yield this.tab.tabview.InfoTable.Verify())&&(yield this.shops.update(this.tab.tabview.InfoTable.Entity))})))]},{Title:"Address",View:[errisy_ui_1.rows.buttons(errisy_ui_1.fields.submit("Select Location in Map").event("click",this,(n,o)=>__awaiter(this,void 0,void 0,function*(){let p=this.tab.tabview.InfoTable.Entity;if(p){if(0==this.tab.MapWidth){this.tab.MapWidth=500,this.tab.changeDetectorRef.detectChanges(),o.Title="Hide Map";let q=p.Location?{x:p.Location.coordinates[0],y:p.Location.coordinates[1]}:{x:this.tab.location.x,y:this.tab.location.y};if((yield this.tab.addUserMarker(q)).DragEnd={host:this,method:s=>__awaiter(this,void 0,void 0,function*(){let t=yield util.ResolveAddress(s.lat()+"",s.lng()+"");if(t){let u=this.tab.Entity;u.Country=t.CountryTerritory,u.State=t.StateProvince,u.Postcode=t.Postcode,u.Region=t.CityRegion,u.Suburb=t.SuburbTown,u.Street=t.Street,u.StreetNumber=t.Number,u.Location={type:"Point",coordinates:[s.lng(),s.lat()]},this.tab.tabview.changeDetectorRef.detectChanges()}})},!p.Location){let s=yield util.ResolveAddress(this.tab.location.y+"",this.tab.location.x+"");if(s){let t=this.tab.Entity;t.Country=s.CountryTerritory,t.State=s.StateProvince,t.Postcode=s.Postcode,t.Region=s.CityRegion,t.Suburb=s.SuburbTown,t.Street=s.Street,t.StreetNumber=s.Number,this.tab.tabview.changeDetectorRef.detectChanges()}}}else this.tab.CurrentLocationMarker.setMap(void 0),this.tab.CurrentLocationMarker=void 0,this.tab.MapWidth=0,o.Title="Select Location in Map";this.tab.changeDetectorRef.detectChanges()}}))),[errisy_ui_1.fields.text(()=>ShopType.prototype.StreetNumber,"StreetNumber").attr({maxlength:100}).verify(errisy_ui_1.verifictions.maxLength(100))],[errisy_ui_1.fields.text(()=>ShopType.prototype.Street,"Street").attr({maxlength:100}).verify(errisy_ui_1.verifictions.maxLength(100))],[errisy_ui_1.fields.text(()=>ShopType.prototype.Suburb,"Suburb").attr({maxlength:100}).verify(errisy_ui_1.verifictions.maxLength(100))],[errisy_ui_1.fields.text(()=>ShopType.prototype.Postcode,"Postcode").attr({maxlength:100}).verify(errisy_ui_1.verifictions.maxLength(100))],[errisy_ui_1.fields.text(()=>ShopType.prototype.Region,"Region").attr({maxlength:100}).verify(errisy_ui_1.verifictions.maxLength(100))],[errisy_ui_1.fields.text(()=>ShopType.prototype.State,"State").attr({maxlength:100}).verify(errisy_ui_1.verifictions.maxLength(100))],[errisy_ui_1.fields.text(()=>ShopType.prototype.Country,"Country").attr({maxlength:100}).verify(errisy_ui_1.verifictions.maxLength(100))],errisy_ui_1.rows.buttons(errisy_ui_1.fields.submit("Save").event("click",this,()=>__awaiter(this,void 0,void 0,function*(){(yield this.tab.tabview.InfoTable.Verify())&&(yield this.shops.update(this.tab.tabview.InfoTable.Entity))})))]},{Title:"Hours",View:[errisy_ui_1.rows.auto(errisy_ui_1.fields.weekhours(()=>ShopType.prototype.OpeningHours,"Opening Hours")),errisy_ui_1.rows.auto(errisy_ui_1.fields.scheduledhours(()=>ShopType.prototype.ScheduledHours,"Opening Hours")),errisy_ui_1.rows.buttons(errisy_ui_1.fields.submit("Save").event("click",this,()=>__awaiter(this,void 0,void 0,function*(){(yield this.tab.tabview.InfoTable.Verify())&&(yield this.shops.update(this.tab.tabview.InfoTable.Entity))})))]}],Fields:"_id",Source:()=>this.shops,DataTemplateUrl:{Value:"<div class=\"flex-row-stretch flex-stretch list-item\" [class.checked]=\"Selected\" [class.selected-items]=\"MultipleSelected\" (click)=\"Parent.SelectItem(Item, $event);\"> {{Item._id}} ({{Item.Name}}) </div>"},CanCreate:!1,CanDelete:!1}]}ngAfterContentInit(){return __awaiter(this,void 0,void 0,function*(){return(yield this.parent.checkLogin())?void(this.parent.Title="Fruits",this.changeDetectorRef.detectChanges()):void this.parent.select(0)})}};__decorate([core_1.HostBinding("style.flex"),__metadata("design:type",String)],FruitAdminComponent.prototype,"style_flex",void 0),__decorate([core_1.HostBinding("style.display"),__metadata("design:type",String)],FruitAdminComponent.prototype,"style_display",void 0),__decorate([core_1.ViewChild("tab"),__metadata("design:type",errisy_ui_1.TabManager)],FruitAdminComponent.prototype,"tab",void 0),FruitAdminComponent=__decorate([core_1.Component({selector:"admin-fruit",template:" <div class=\"flex-column-stretch flex-stretch\"> <div class=\"flex-row-stretch view-title\"> <div class=\"flex-row-center flex-stretch flex-center\"> <span style=\"cursor: default; user-select: none\">{{parent.Title}}</span> </div> </div> <div [TabManager]=\"Tabs\" #tab class=\"flex-column-stretch flex-stretch warm-gradient\"> </div> <div class=\"flex-row-center view-status\"> {{parent.Status}} </div> </div>",entryComponents:[],providers:[admin_client_1.AdminCore,fruit_client_1.ProductCore,fruit_client_1.CategoryCore,fruit_client_1.EntryCore,fruit_client_1.ShopCore],changeDetection:core_1.ChangeDetectionStrategy.Default}),__metadata("design:paramtypes",[core_1.ChangeDetectorRef,content_1.ContentControl,admin_client_1.AdminCore,fruit_client_1.ProductCore,fruit_client_1.CategoryCore,fruit_client_1.EntryCore,fruit_client_1.ShopCore])],FruitAdminComponent),exports.FruitAdminComponent=FruitAdminComponent;