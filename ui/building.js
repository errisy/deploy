"use strict";var __decorate=this&&this.__decorate||function(a,b,e,f){var j,g=arguments.length,h=3>g?b:null===f?f=Object.getOwnPropertyDescriptor(b,e):f;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)h=Reflect.decorate(a,b,e,f);else for(var l=a.length-1;0<=l;l--)(j=a[l])&&(h=(3>g?j(h):3<g?j(b,e,h):j(b,e))||h);return 3<g&&h&&Object.defineProperty(b,e,h),h},__metadata=this&&this.__metadata||function(a,b){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(a,b)};const core_1=require("@angular/core"),forms_1=require("@angular/forms"),http_1=require("@angular/http"),platform_browser_1=require("@angular/platform-browser"),errisy_ui_1=require("errisy-ui");let BuildingInfo=class{constructor(){this.Floors=[],this.ValueChange=new core_1.EventEmitter(!0)}AddRoom(b){b.Rooms.push({RoomType:"Bedroom Only",FloorMaterial:"Carpet",FloorColors:"Gray",InteriorWallMaterials:["Timber - Plywood"],InteriorWallColors:"White"}),this.ValueChange.emit(this.Floors)}DeleteRoom(b,e){b.Rooms.splice(e,1),this.ValueChange.emit(this.Floors)}AddFloor(){this.Floors.push({Level:this.Floors.length+1+"",Rooms:[]}),this.ValueChange.emit(this.Floors)}DeleteFloor(b){this.Floors.splice(b,1),this.ValueChange.emit(this.Floors)}SaveChange(){this.ValueChange.emit(this.Floors)}set Value(b){b=Array.isArray(b)?b:[],this.Floors=b.map(e=>{return Array.isArray(e.Rooms)||(e.Rooms=[]),e})}};__decorate([core_1.Input(),__metadata("design:type",Array),__metadata("design:paramtypes",[Array])],BuildingInfo.prototype,"Value",null),__decorate([core_1.Output(),__metadata("design:type",core_1.EventEmitter)],BuildingInfo.prototype,"ValueChange",void 0),BuildingInfo=__decorate([core_1.Component({selector:"building-info,[building-info]",template:`
<div *ngFor="let Floor of Floors; let Index = index;" style="display: flex; flex-direction: column; flex: 0 0 160px;">
    <div style="display: flex; flex-direction:row;">
        <span>Level</span>
        <div style="display: flex; flex-direction: row; border: 1px solid #666; border-radius: 4px; padding: 0 2px; cursor: text;">
            <span [(editor)]="Floor.Level" type="text" style="text-align: center; flex: 1 1 auto; min-width:20px; color: blue;"></span>
        </div>
        <div style="flex: 1 1 auto;"></div>
        <div style="flex: 0 0 auto;" class="btn-content" (click)="AddRoom(Floor)">Add Room</div>
        <div style="flex: 0 0 auto;" class="btn-content" (click)="DeleteFloor(Index)">Delete Level</div>
    </div>
    <div style="display: flex; flex-direction: column; overflow-y: auto;">
        <div *ngFor="let Room of Floor.Rooms; let rmIndex = index;" style="flex: 0 0 auto; display: flex; flex-direction: column; border: 1px solid blue; border-radius: 4px; padding: 3px;">
            <div style="border-bottom: 1px solid #666; background-color: #ffe6c2; border-radius: 4px 4px 0 0; display: flex; flex-direction: row; align-items: center; justify-content: center;">
                <span style="text-align: center;">Room - {{Room.RoomType}}</span>
                <div style="flex: 0 0 auto;" class="btn-content" (click)="DeleteRoom(Floor, rmIndex)">Delete</div>
            </div>
            <div style="flex: 0 0 auto; display: flex; flex-direction: row; align-items: center;">
                <span style="flex: 0 0 190px; font-family: Arial; font-weigth: normal;">Room Type</span>
                <div style="flex: 0 0 5px;"></div>
                <select [(ngModel)]="Room.RoomType" (ngModelChange)="SaveChange()">
                    <option value="Bedroom with Bathroom & Toilet (Ensuite)">Bedroom with Bathroom & Toilet (Ensuite)</option>
                    <option value="Bedroom with Bathroom">Bedroom with Bathroom</option>
                    <option value="Bedroom with Toilet">Bedroom with Toilet</option>
                    <option value="Bedroom Only">Bedroom Only</option>
                    <option value="Bathroom & Toilet (Independent)">Bathroom & Toilet (Independent)</option>
                    <option value="Toilet (Independent)">Toilet (Independent)</option>
                    <option value="Bathroom (Independent)">Bathroom (Independent)</option>
                    <option value="Living Room">Living Room</option>
                    <option value="Kitchen">Kitchen</option>
                    <option value="Dining Room">Dining Room</option>
                    <option value="Study Room/Office">Study Room/Office</option>
                    <option value="Storage Room (No Window)">Storage Room (No Window)</option>
                    <option value="Game/Ball/Sport Room">Game/Ball/Sport Room</option>
                    <option value="Balcony">Balcony</option>
                    <option value="Corridor">Corridor</option>
                    <option value="Garage">Garage</option>
                </select>
            </div>
            <div style="flex: 0 0 auto;display: flex; flex-direction: row; align-items: center;">
                <span style="flex: 0 0 190px; font-family: Arial; font-weigth: normal;">Floor Material</span>
                <div style="flex: 0 0 5px;"></div>
                <select [(ngModel)]="Room.FloorMaterial" (ngModelChange)="SaveChange()">
                    <option value="Carpet">Carpet</option>
                    <option value="Wood">Wood</option>
                    <option value="Polished Slabs">Polished Slabs</option>
                    <option value="Ceramic Tiles">Ceramic Tiles</option>
                    <option value="Synthetic/Vinyl Tiles">Synthetic/Vinyl Tiles</option>
                </select>
            </div>
            <div style="flex: 0 0 auto;display: flex; flex-direction: row; align-items: center;">
                <span style="flex: 0 0 190px; font-family: Arial; font-weigth: normal;">Floor Colors</span>
                <div style="flex: 0 0 5px;"></div>
                <div style="display: flex; flex-direction: row; border: 1px solid #666; border-radius: 4px; padding: 0 2px; cursor: text;">
                    <span [(editor)]="Room.FloorColors" (editorChange)="SaveChange()" type="text" style="text-align: center; flex: 1 1 auto; min-width:20px; color: blue;"></span>
                </div>
            </div>
            <div style="flex: 0 0 auto;display: flex; flex-direction: row; align-items: center;">
                <span style="flex: 0 0 190px; font-family: Arial; font-weigth: normal;">Interior Wall Materials</span>
                <div style="flex: 0 0 5px;"></div>
                <div single-option-array [(Value)]="Room.InteriorWallMaterials" (ValueChange)="SaveChange()" style="flex: 1 1 auto; display: flex; flex-direction: row; flex-wrap: wrap;flex-wrap: wrap;"
                     Options="['Timber - Plywood', 'Timber - Particle Board', 'Plasterboard', 'Concrete', 'Bricks']"></div>
            </div>
            <div style="flex: 0 0 auto;display: flex; flex-direction: row; align-items: center;">
                <span style="flex: 0 0 190px; font-family: Arial; font-weigth: normal;">Interior Wall Colors</span>
                <div style="flex: 0 0 5px;"></div>
                <div style="display: flex; flex-direction: row; border: 1px solid #666; border-radius: 4px; padding: 0 2px; cursor: text;">
                    <span [(editor)]="Room.InteriorWallColors" (editorChange)="SaveChange()" type="text" style="text-align: center; flex: 1 1 auto; min-width:20px; color: blue;"></span>
                </div>
            </div>
        </div>
    </div>
</div>
<div style="flex: 0 0 24px; display: flex; flex-direction: column; align-items: center;">
    <div style="flex; 0 0 auto;" class="btn-content" (click)="AddFloor()">Add Level</div>
</div>
`}),__metadata("design:paramtypes",[])],BuildingInfo),exports.BuildingInfo=BuildingInfo;let components=[BuildingInfo],BuildingUIModule=class{};BuildingUIModule=__decorate([core_1.NgModule({imports:[platform_browser_1.BrowserModule,forms_1.FormsModule,http_1.HttpModule,errisy_ui_1.ErrisyUIModule],declarations:[...components],entryComponents:[...components],providers:[],exports:[...components]}),__metadata("design:paramtypes",[])],BuildingUIModule),exports.BuildingUIModule=BuildingUIModule;