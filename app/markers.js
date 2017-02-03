"use strict";var __awaiter=this&&this.__awaiter||function(c,d,f,g){return new(f||(f=Promise))(function(h,j){function k(n){try{m(g.next(n))}catch(o){j(o)}}function l(n){try{m(g["throw"](n))}catch(o){j(o)}}function m(n){n.done?h(n.value):new f(function(o){o(n.value)}).then(k,l)}m((g=g.apply(c,d)).next())})};const util=require("errisy-util"),util_pipe_1=require("./util.pipe");exports.ShopIcon={url:"/svg/shop2.svg",size:new google.maps.Size(48,48),scaledSize:new google.maps.Size(48,48),anchor:new google.maps.Point(24,24)},exports.HouseIcon={url:"/svg/house.svg",size:new google.maps.Size(48,48),scaledSize:new google.maps.Size(48,48),anchor:new google.maps.Point(24,24)};class ShopWindowMarker extends google.maps.Marker{static setupGoogleMapShopWindowClickHost(c){window.GoogleMapShopWindowClick=c}constructor(c){super(c),this.addListener("click",()=>__awaiter(this,void 0,void 0,function*(){yield this.showInfoWindow()}))}BuildShop(c,d,f,g){this.InfoWindow&&this.InfoWindow.close();let h=0<this.Shop.ServiceAllowedNumberOfEntry?5:3,j=f&&0<f.length?f.split(/\s+/g).filter(l=>0<l.length).map(l=>new RegExp(l,"ig")):void 0;this.Shop.DisplayedProducts=Array.isArray(this.Shop.Products)?this.Shop.Products.filter((l,m)=>{if(m>=h)return!1;if(c&&"All"!=c._id&&(!c.Products||c.Products.every(o=>o!=l.Product)))return!1;if(d&&"All"!=d._id&&d._id!=l.Product&&(!d.Secondaries||d.Secondaries.every(o=>o!=l.Product)))return!1;let n;if(g){let o=g.find(q=>q._id==l.Product);o&&(n=o.Name)}return j&&!j.some(o=>{return o.lastIndex=void 0,!!o.test(l.Description)||n&&(o.lastIndex=void 0,o.test(n))})?!1:!0}):[],this.hasEntries=0<this.Shop.DisplayedProducts.length;let k=this.Shop;this.infoWindowHTML=`<div class="infowindow-shop">
<span class="title app-title-btn" onclick="window.GoogleMapShopWindowClick.${ShopWindowMarker.titleClick}('${k._id}', true);">${k.Name}</span>
<span class="hours">${util_pipe_1.SKUtil.findHoursForToday(k.ScheduledHours,k.OpeningHours).OpeningHour.map(l=>{return`${l.From}-${l.To}`}).join(" ")}</span>
<div class="img-list">${k.DisplayedProducts.filter((l,m)=>3>m).map(l=>{return`<div class="list-item app-border-btn"  onclick="window.GoogleMapShopWindowClick.${ShopWindowMarker.itemClick}('${k._id}', '${l._id}', true);">
<div class="item-image" style="background-image: url(${l.Images[0]});"  title="$${l.Price}/${l.Unit} ${l.Description}"></div>
<span class="item-price">$${l.Price}/${l.Unit}</span><span class="item-des">${l.Description}</span>
</div>`}).join("")}</div>
</div>`,this.InfoWindow=new google.maps.InfoWindow({content:this.infoWindowHTML})}showInfoWindow(){return __awaiter(this,void 0,void 0,function*(){this.InfoWindow.getMap()?this.InfoWindow.close():this.InfoWindow.open(this.getMap(),this)})}destroy(){this.InfoWindow&&this.InfoWindow.close(),this.infoWindowHTML=void 0,this.onRequireInfoWindow=void 0,this.setMap(void 0)}}exports.ShopWindowMarker=ShopWindowMarker;class RentalWindowMarker extends google.maps.Marker{static setupGoogleMapRentalWindowClickHost(c){window.GoogleMapRentalWindowClick=c}constructor(c){super(c),this.MapReference=c.map,this.addListener("click",()=>__awaiter(this,void 0,void 0,function*(){yield this.showInfoWindow()}))}showInfoWindow(){return __awaiter(this,void 0,void 0,function*(){this.InfoWindow.getMap()?this.InfoWindow.close():this.InfoWindow.open(this.getMap(),this)})}BuildEntry(c,d,f){this.InfoWindow&&this.InfoWindow.close();f&&0<f.length?f.split(/\s+/g).filter(k=>0<k.length).map(k=>new RegExp(k,"ig")):void 0;c&&("All"==c._id||c._id==this.Entry.Category)&&d&&("All"==d._id||d._id==this.Entry.Product)?this.setMap(this.MapReference):this.setMap(void 0);let j=this.Entry;this.infoWindowHTML=`<div class="infowindow-rental">
<div>
<span class="title app-title-btn" onclick="window.GoogleMapRentalWindowClick.${RentalWindowMarker.titleClick}('${j._id}', true);">${j.Category}</span>
</div>
<div>
<span class="hours">${j.StreetNumber}, ${j.Street}</span>
</div>
<div class="img-list">${j.Images.filter((k,l)=>3>l).map(k=>{return`<div class="list-item app-border-btn"  onclick="window.GoogleMapRentalWindowClick.${RentalWindowMarker.titleClick}('${j._id}', true);">
<div class="item-image" style="background-image: url(${k});"></div>
</div>`}).join("")}</div>
<div class="field">
${RentalWindowMarker.buildContent(j)}
</div>
<div>
<span class="available">Available: ${util.toYYYYMMDD(j.StartTime)}</span>
</div>
<div>
<span class="price">$${j.Price}/Week</span>
</div>
</div>`,this.InfoWindow=new google.maps.InfoWindow({content:this.infoWindowHTML}),this.InfoWindow.open(this.MapReference,this)}static buildContent(c){switch(c.Category){case"Room":return`
${c.RentalRoom.CanLock?`<img class="unit" title="Key Lock" src="https://rawgit.com/errisy/deploy/master/svg/lock.svg" />`:""} 

<img class="unit" title="Toilet" src="https://rawgit.com/errisy/deploy/master/svg/toilet.svg" />
<span class="number${"Private"==c.RentalRoom.Toilet?" private":""}" title="${c.RentalRoom.Toilet}">${"Private"==c.RentalRoom.Toilet?"P":"S"}</span>

<img class="unit" title="Bathroom" src="https://rawgit.com/errisy/deploy/master/svg/bathroom.svg" />
<span class="number${"Private"==c.RentalRoom.Bathroom?" private":""}" title="${c.RentalRoom.Bathroom}">${"Private"==c.RentalRoom.Bathroom?"P":"S"}</span>

${["Private","Shared"].some(d=>d==c.RentalRoom.Laundry)?`
<img class="unit" title="Laundry" src="https://rawgit.com/errisy/deploy/master/svg/laundry.svg" />
<span class="number${"Private"==c.RentalRoom.Laundry?" private":""}" title="${c.RentalRoom.Laundry}">${"Private"==c.RentalRoom.Laundry?"P":"S"}</span>
`:""}
${["Private","Shared"].some(d=>d==c.RentalRoom.Kitchen)?`
<img class="unit" title="Kitchen" src="https://rawgit.com/errisy/deploy/master/svg/kitchen.svg" />
<span class="number${"Private"==c.RentalRoom.Kitchen?" private":""}" title="${c.RentalRoom.Kitchen}">${"Private"==c.RentalRoom.Kitchen?"P":"S"}</span>
`:""}
`;case"Unit":case"Apartment":case"Townhouse":case"House":return`
<img class="unit" title="Number of Stories" src="https://rawgit.com/errisy/deploy/master/svg/stairs.svg" />
<span class="number">${c.Building.NumberOfStories}</span>

<img class="unit" title="Number of Bedrooms" src="https://rawgit.com/errisy/deploy/master/svg/bedroom.svg" />
<span class="number">${c.Building.NumberOfBedrooms}</span>

<img class="unit" title="Number of Bathrooms" src="https://rawgit.com/errisy/deploy/master/svg/bathroom.svg" />
<span class="number">${c.Building.NumberOfBathrooms}</span>

<img class="unit" title="Number of Toilets" src="https://rawgit.com/errisy/deploy/master/svg/toilet.svg" />
<span class="number">${c.Building.NumberOfToilets}</span>
`;case"Bedroom Share":return"";}}destroy(){this.InfoWindow&&this.InfoWindow.close(),this.infoWindowHTML=void 0,this.onRequireInfoWindow=void 0,this.setMap(void 0)}}exports.RentalWindowMarker=RentalWindowMarker;class RealEstateWindowMarker extends google.maps.Marker{constructor(c){super(c),this.MapReference=c.map,this.addListener("click",()=>__awaiter(this,void 0,void 0,function*(){yield this.showInfoWindow()}))}static setupGoogleMapRealEstateWindowClickHost(c){window.GoogleMapRealEstateWindowClick=c}showInfoWindow(){return __awaiter(this,void 0,void 0,function*(){this.InfoWindow.getMap()?this.InfoWindow.close():this.InfoWindow.open(this.getMap(),this)})}BuildEntry(c,d,f){this.InfoWindow&&this.InfoWindow.close();f&&0<f.length?f.split(/\s+/g).filter(k=>0<k.length).map(k=>new RegExp(k,"ig")):void 0;c&&("All"==c._id||c._id==this.Entry.Category)&&d&&("All"==d._id||d._id==this.Entry.Product)?this.setMap(this.MapReference):this.setMap(void 0);let j=this.Entry;this.infoWindowHTML=`<div class="infowindow-rental">
<div>
<span class="title app-title-btn" onclick="window.GoogleMapRealEstateWindowClick.${RealEstateWindowMarker.titleClick}('${j._id}', true);">${j.Category}</span>
</div>
<div>
<span class="hours">${j.StreetNumber}, ${j.Street}</span>
</div>
<div class="img-list">${j.Images.filter((k,l)=>3>l).map(k=>{return`<div class="list-item app-border-btn"  onclick="window.GoogleMapRealEstateWindowClick.${RealEstateWindowMarker.titleClick}('${j._id}', true);">
<div class="item-image" style="background-image: url(${k});"></div>
</div>`}).join("")}</div>
<div class="field">
${RealEstateWindowMarker.buildContent(j)}
</div>
<div>
<span class="price">${RealEstateWindowMarker.parsePrice(j)}</span>
</div>
</div>`,this.InfoWindow=new google.maps.InfoWindow({content:this.infoWindowHTML}),this.InfoWindow.open(this.MapReference,this)}static buildContent(c){switch(c.Category){case"Land":return`Size: ${c.Land.LandSize}M<sup>2</sup>`;default:return`
<img class="unit" title="Number of Stories" src="https://rawgit.com/errisy/deploy/master/svg/stairs.svg" />
<span class="number">${c.MainBuilding.NumberOfStories}</span>

<img class="unit" title="Number of Bedrooms" src="https://rawgit.com/errisy/deploy/master/svg/bedroom.svg" />
<span class="number">${c.MainBuilding.NumberOfBedrooms}</span>

<img class="unit" title="Number of Bathrooms" src="https://rawgit.com/errisy/deploy/master/svg/bathroom.svg" />
<span class="number">${c.MainBuilding.NumberOfBathrooms}</span>

<img class="unit" title="Number of Toilets" src="https://rawgit.com/errisy/deploy/master/svg/toilet.svg" />
<span class="number">${c.MainBuilding.NumberOfToilets}</span>
`;}}static parsePrice(c){switch(c.PriceStrategy){case"Exact Price":return`$${c.Price}`;case"Plus":return`$${c.Price} Plus`;case"Offers Over":return`Offers over $${c.Price}`;case"POA":return`POA`;case"Submit Your Offer":return`Submit Your Offer`;case"Auction":return`Auction on ${c.AuctionDate}`;default:return"Negotiation";}}destroy(){this.InfoWindow&&this.InfoWindow.close(),this.infoWindowHTML=void 0,this.onRequireInfoWindow=void 0,this.setMap(void 0)}}RealEstateWindowMarker.ExplicitPriceStrategies=["Exact Price","Plus","Offers Over"],RealEstateWindowMarker.InexplicitPriceStrategies=["POA","Submit Your Offer","Auction"],exports.RealEstateWindowMarker=RealEstateWindowMarker;class SuburbMarker extends google.maps.Marker{constructor(c){super(c),this.addListener("click",()=>__awaiter(this,void 0,void 0,function*(){SuburbMarker.onSuburbClick&&SuburbMarker.onSuburbClick(this.Suburb._id,this.Suburb.Location.coordinates[1],this.Suburb.Location.coordinates[0])}))}destroy(){this.setMap(void 0)}}exports.SuburbMarker=SuburbMarker;class RegionMarker extends google.maps.Marker{constructor(c){super(c),this.addListener("click",()=>__awaiter(this,void 0,void 0,function*(){RegionMarker.onRegionClick&&RegionMarker.onRegionClick(this.Region._id,this.Region.Location.coordinates[1],this.Region.Location.coordinates[0])}))}destroy(){this.setMap(void 0)}}exports.RegionMarker=RegionMarker;function IndexSorter(c,d){return"number"==typeof c.Index?"number"==typeof d.Index?Math.sign(c.Index-d.Index):-1:"number"==typeof d.Index?1:0}exports.IndexSorter=IndexSorter;