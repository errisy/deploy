"use strict";var __decorate=this&&this.__decorate||function(a,b,e,f){var j,g=arguments.length,h=3>g?b:null===f?f=Object.getOwnPropertyDescriptor(b,e):f;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)h=Reflect.decorate(a,b,e,f);else for(var l=a.length-1;0<=l;l--)(j=a[l])&&(h=(3>g?j(h):3<g?j(b,e,h):j(b,e))||h);return 3<g&&h&&Object.defineProperty(b,e,h),h},__metadata=this&&this.__metadata||function(a,b){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(a,b)};const core_1=require("@angular/core"),forms_1=require("@angular/forms"),http_1=require("@angular/http"),platform_browser_1=require("@angular/platform-browser"),errisy_ui_1=require("errisy-ui");let AgentComponent=class{constructor(){this.ValueChange=new core_1.EventEmitter(!0)}set Value(b){b?this._value=b:(this._value={},this.ValueChange.emit(this._value))}};__decorate([core_1.Input(),__metadata("design:type",Object),__metadata("design:paramtypes",[Object])],AgentComponent.prototype,"Value",null),__decorate([core_1.Output(),__metadata("design:type",core_1.EventEmitter)],AgentComponent.prototype,"ValueChange",void 0),__decorate([core_1.Input(),__metadata("design:type",Function)],AgentComponent.prototype,"Uploader",void 0),__decorate([core_1.Input(),__metadata("design:type",Object)],AgentComponent.prototype,"UploadService",void 0),AgentComponent=__decorate([core_1.Component({selector:"ui-agent,[ui-agent]",template:`
<div style="display: flex; flex-direction: row; height: 162px;">
    <div style="display: flex; flex-direction: column; flex: 1 1 auto;">
        <div style="flex: 0 0 24px; display: flex; flex-direction: row;">
            <input style="flex: 1 1 auto; align-self: stretch; font: 18px Arial;" [(ngModel)]="_value.Name" type="text" placeholder="Name"  name="Name" ngDefaultControl/>
        </div>
        <div style="flex: 0 0 24px; display: flex; flex-direction: row;">
            <img style="flex: 0 0 24px; align-self: center;" src="/svg/link.svg" height="24" />
            <input style="flex: 1 1 auto; align-self: stretch; font: 18px Arial;" [(ngModel)]="_value.Link" type="text" placeholder="Web Link" name="Link" ngDefaultControl/>
        </div>
        <div style="flex: 0 0 24px; display: flex; flex-direction: row;">
            <img style="flex: 0 0 24px; align-self: center;" src="/svg/phone.svg" height="24" />
            <input style="flex: 1 1 auto; align-self: stretch; font: 18px Arial;" [(ngModel)]="_value.Phone" type="text" placeholder="Phone" name="Phone" ngDefaultControl/>
        </div>
        <div style="flex: 0 0 24px; display: flex; flex-direction: row;">
            <img style="flex: 0 0 24px; align-self: center;" src="/svg/mobile.svg" height="24" />
            <input style="flex: 1 1 auto; align-self: stretch; font: 18px Arial;" [(ngModel)]="_value.Mobile" type="text" placeholder="Mobile" name="Mobile" ngDefaultControl/>
        </div>
        <div style="flex: 0 0 24px; display: flex; flex-direction: row;">
            <img style="flex: 0 0 24px; align-self: center;" src="/svg/email.svg" height="24" />
            <input style="flex: 1 1 auto; align-self: stretch; font: 18px Arial;" [(ngModel)]="_value.Email" type="text" placeholder="Email" name="Email" ngDefaultControl/>
        </div>
        <div style="flex: 1 1 auto; display: flex; flex-direction: row;">
            <img style="flex: 0 0 24px; align-self: center;" src="/svg/address.svg" height="24" />
            <textarea style="flex: 1 1 auto; align-self: stretch; font: 18px Arial;" [(ngModel)]="_value.Address" placeholder="Address" name="Address" ngDefaultControl></textarea>
        </div>
    </div>
    <div style="flex: 0 0 162px;">
        <image-upload ImageWidth="160" [Uploader]="Uploader" [UploadService]="UploadService" [(Value)]="_value.Image"></image-upload>
    </div>
</div>
`}),__metadata("design:paramtypes",[])],AgentComponent),exports.AgentComponent=AgentComponent;let ContactsComponent=class{constructor(){this.ValueChange=new core_1.EventEmitter(!0)}set Value(b){Array.isArray(b)?this._value=b:(this._value=[],this.ValueChange.emit(this._value))}DeleteContact(b){this._value.splice(b,1)}AddContact(){this._value.push({})}};__decorate([core_1.Input(),__metadata("design:type",Array),__metadata("design:paramtypes",[Array])],ContactsComponent.prototype,"Value",null),__decorate([core_1.Output(),__metadata("design:type",core_1.EventEmitter)],ContactsComponent.prototype,"ValueChange",void 0),__decorate([core_1.Input(),__metadata("design:type",Function)],ContactsComponent.prototype,"Uploader",void 0),__decorate([core_1.Input(),__metadata("design:type",Object)],ContactsComponent.prototype,"UploadService",void 0),ContactsComponent=__decorate([core_1.Component({selector:"ui-contacts,[ui-contacts]",template:`
<div *ngFor="let contact of _value;let index = Index;" style="display: flex; flex-direction: row; height: 184px; border: 1px solid #66b; border-radius: 4px; padding: 3px;">
    <div style="display: flex; flex-direction: column; flex: 1 1 auto;">
        <div style="flex: 0 0 24px; display: flex; flex-direction: row;">
            <input style="flex: 1 1 auto; align-self: stretch; font: 18px Arial;" [(ngModel)]="contact.Name" type="text" placeholder="Name"  name="Name" ngDefaultControl/>
        </div>
        <div style="flex: 0 0 24px; display: flex; flex-direction: row;">
            <img style="flex: 0 0 24px; align-self: center;" src="/svg/phone.svg" height="24" />
            <input style="flex: 1 1 auto; align-self: stretch; font: 18px Arial;" [(ngModel)]="contact.Phone" type="text" placeholder="Phone" name="Phone" ngDefaultControl/>
        </div>
        <div style="flex: 0 0 24px; display: flex; flex-direction: row;">
            <img style="flex: 0 0 24px; align-self: center;" src="/svg/mobile.svg" height="24" />
            <input style="flex: 1 1 auto; align-self: stretch; font: 18px Arial;" [(ngModel)]="contact.Mobile" type="text" placeholder="Mobile" name="Mobile" ngDefaultControl/>
        </div>
        <div style="flex: 0 0 24px; display: flex; flex-direction: row;">
            <img style="flex: 0 0 24px; align-self: center;" src="/svg/email.svg" height="24" />
            <input style="flex: 1 1 auto; align-self: stretch; font: 18px Arial;" [(ngModel)]="contact.Email" type="text" placeholder="Email" name="Email" ngDefaultControl/>
        </div>
        <div style="flex: 0 0 62px; display: flex; flex-direction: row;">
            <img style="flex: 0 0 24px; align-self: center;" src="/svg/address.svg" height="24" />
            <textarea style="flex: 1 1 auto; align-self: stretch; font: 18px Arial;" [(ngModel)]="contact.Address" placeholder="Address" name="Address" ngDefaultControl></textarea>
        </div>
        <div style="flex: 0 0 24px; display: flex; flex-direction: row; justify-content: center;">
            <div class="btn-content" (click)="DeleteContact(index)">Delete</div>
        </div>
    </div>
    <div style="flex: 0 0 182px;">
        <image-upload ImageWidth="180" [Uploader]="Uploader" [UploadService]="UploadService" [(Value)]="contact.Image"></image-upload>
    </div>
    
</div>
<div  class="btn-content" (click)="AddContact()">Add Contact</div>
`}),__metadata("design:paramtypes",[])],ContactsComponent),exports.ContactsComponent=ContactsComponent;let components=[AgentComponent,ContactsComponent],AgentUIModule=class{};AgentUIModule=__decorate([core_1.NgModule({imports:[platform_browser_1.BrowserModule,forms_1.FormsModule,http_1.HttpModule,errisy_ui_1.ErrisyUIModule],declarations:[...components],entryComponents:[...components],providers:[],exports:[...components]}),__metadata("design:paramtypes",[])],AgentUIModule),exports.AgentUIModule=AgentUIModule;