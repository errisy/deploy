"use strict";var __decorate=this&&this.__decorate||function(a,b,e,f){var j,g=arguments.length,h=3>g?b:null===f?f=Object.getOwnPropertyDescriptor(b,e):f;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)h=Reflect.decorate(a,b,e,f);else for(var l=a.length-1;0<=l;l--)(j=a[l])&&(h=(3>g?j(h):3<g?j(b,e,h):j(b,e))||h);return 3<g&&h&&Object.defineProperty(b,e,h),h},__metadata=this&&this.__metadata||function(a,b){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(a,b)};const core_1=require("@angular/core");let M2=class{};M2=__decorate([core_1.Component({selector:"[m2]",template:"<div>m2 of the component</div>"}),__metadata("design:paramtypes",[])],M2),exports.M2=M2;let H1Component=class{constructor(b){this.componentFactoryResolver=b,console.log("ComponentFactoryResolver: ",this.componentFactoryResolver)}ngAfterContentInit(){console.log("after content:",this.my)}ngAfterViewInit(){console.log("after view:",this.my)}};__decorate([core_1.ViewChild("my",{read:core_1.ViewContainerRef}),__metadata("design:type",core_1.ViewContainerRef)],H1Component.prototype,"my",void 0),H1Component=__decorate([core_1.Component({selector:"[hl]",template:"<h1 #my> H1 Title </h1>"}),__metadata("design:paramtypes",[core_1.ComponentFactoryResolver])],H1Component),exports.H1Component=H1Component;