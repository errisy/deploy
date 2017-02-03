"use strict";var __decorate=this&&this.__decorate||function(a,b,e,f){var j,g=arguments.length,h=3>g?b:null===f?f=Object.getOwnPropertyDescriptor(b,e):f;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)h=Reflect.decorate(a,b,e,f);else for(var l=a.length-1;0<=l;l--)(j=a[l])&&(h=(3>g?j(h):3<g?j(b,e,h):j(b,e))||h);return 3<g&&h&&Object.defineProperty(b,e,h),h},__metadata=this&&this.__metadata||function(a,b){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(a,b)};const core_1=require("@angular/core");let RentalTermComponent=class{constructor(){this.ValueChange=new core_1.EventEmitter(!0)}set Value(b){b?this._value=b:(this._value={},this.ValueChange.emit(this._value))}AddTerm(){}};__decorate([core_1.Input(),__metadata("design:type",Object),__metadata("design:paramtypes",[Object])],RentalTermComponent.prototype,"Value",null),__decorate([core_1.Output(),__metadata("design:type",core_1.EventEmitter)],RentalTermComponent.prototype,"ValueChange",void 0),RentalTermComponent=__decorate([core_1.Component({selector:"[rental-term]",template:`
<div *ngFor="let term of _value.RentalPrices;let index = Index;" 
    style="display: flex; flex-direction: row; height: 184px; border: 1px solid #66b; border-radius: 4px; padding: 3px;">
    <div style="display: flex; flex-direction: column; flex: 1 1 auto;">
        <div style="flex: 0 0 24px; display: flex; flex-direction: row;">
            <div>Tenants</div>
            <select [(ngModel)]="term.Tenant">
                <option value="Any">Any</option>
                <option value="Single">Single</option>
                <option value="Couple">Couple</option>
                <option value="Family">Family</option>
            </select>
        </div>
        <div style="flex: 0 0 24px; display: flex; flex-direction: row; align-items: center;">
            <div>Exit Cleaning</div>
            <input style="flex: 1 1 auto; align-self: stretch; font: 18px Arial;" [(ngModel)]="term.Mobile" type="text" placeholder="Exit Cleaning" ngDefaultControl/>
        </div>
        <div style="flex: 0 0 24px; display: flex; flex-direction: row; align-items: center;">
            <div>Cleaning Fee</div>
            <div spanbox type="n" style="min-width: 60px;" prefix="$" forceNumber="true" [(Value)]="term.ExitCleaningFee"> </div>
        </div>
        <div style="flex: 0 0 24px; display: flex; flex-direction: row; align-items: center;">
            <div>Min Term</div>
            <div spanbox type="n" style="min-width: 60px;" suffix="Days" forceNumber="true" [(Value)]="RentalQuery.TermMinDays"></div>
        </div>
        <div style="flex: 0 0 62px; display: flex; flex-direction: row; align-items: center;">
            <div>Max Term</div>
            <div spanbox type="n" style="min-width: 60px;" suffix="Days" forceNumber="true" [(Value)]="RentalQuery.TermMaxDays"></div>
        </div>
        <div style="flex: 0 0 24px; display: flex; flex-direction: row; align-items: center;">
            <div>Price Per Day</div>
            <div spanbox type="n" style="min-width: 60px;" prefix="$" forceNumber="true" [(Value)]="RentalQuery.PricePerDay"></div>
        </div>
        <div style="flex: 0 0 24px; display: flex; flex-direction: row; align-items: center;">
            <div>Bond</div>
            <div spanbox type="n" style="min-width: 60px;" prefix="$" forceNumber="true" [(Value)]="RentalQuery.Bond"></div>
        </div>
        <div style="flex: 0 0 24px; display: flex; flex-direction: row; justify-content: center;">
            <div class="btn-content" (click)="DeleteContact(index)">Delete</div>
        </div>
    </div>
</div>
<div  class="btn-content" (click)="AddTerm()">Add Rental Term Price</div>
`}),__metadata("design:paramtypes",[])],RentalTermComponent),exports.RentalTermComponent=RentalTermComponent;