"use strict";var __decorate=this&&this.__decorate||function(a,b,e,f){var j,g=arguments.length,h=3>g?b:null===f?f=Object.getOwnPropertyDescriptor(b,e):f;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)h=Reflect.decorate(a,b,e,f);else for(var l=a.length-1;0<=l;l--)(j=a[l])&&(h=(3>g?j(h):3<g?j(b,e,h):j(b,e))||h);return 3<g&&h&&Object.defineProperty(b,e,h),h},__metadata=this&&this.__metadata||function(a,b){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(a,b)};const core_1=require("@angular/core");let MenuTabItem=class{constructor(){this.hostClass="ribbon-container",this.hostDisplay="flex",this.flexGrow="1",this.flexShrink="1",this.flexDirection="column",this.flexWrap="wrap",this.alignItems="flex-start",this.alignContent="flex-start"}set active(b){this.hostDisplay="true"==b.toString()?"flex":"none"}get active(){return"flex"==this.hostDisplay}};__decorate([core_1.HostBinding("class"),__metadata("design:type",String)],MenuTabItem.prototype,"hostClass",void 0),__decorate([core_1.HostBinding("style.display"),__metadata("design:type",String)],MenuTabItem.prototype,"hostDisplay",void 0),__decorate([core_1.HostBinding("style.flex-grow"),__metadata("design:type",String)],MenuTabItem.prototype,"flexGrow",void 0),__decorate([core_1.HostBinding("style.flex-shrink"),__metadata("design:type",String)],MenuTabItem.prototype,"flexShrink",void 0),__decorate([core_1.HostBinding("style.flex-direction"),__metadata("design:type",String)],MenuTabItem.prototype,"flexDirection",void 0),__decorate([core_1.HostBinding("style.flex-wrap"),__metadata("design:type",String)],MenuTabItem.prototype,"flexWrap",void 0),__decorate([core_1.HostBinding("style.align-items"),__metadata("design:type",String)],MenuTabItem.prototype,"alignItems",void 0),__decorate([core_1.HostBinding("style.align-content"),__metadata("design:type",String)],MenuTabItem.prototype,"alignContent",void 0),__decorate([core_1.Input("tabTitle"),__metadata("design:type",String)],MenuTabItem.prototype,"title",void 0),__decorate([core_1.Input(),__metadata("design:type",Boolean),__metadata("design:paramtypes",[Boolean])],MenuTabItem.prototype,"active",null),MenuTabItem=__decorate([core_1.Component({selector:"menu-tab",styles:[`.ribbon-container>* {
    align-self: flex-start;
} `],template:`
    <ng-content></ng-content>
  `}),__metadata("design:paramtypes",[])],MenuTabItem),exports.MenuTabItem=MenuTabItem;let MenuTabContainer=class{constructor(){this.flex="flex",this.flexGrow="1",this.flexShrink="1",this.flexDirection="column",this.tabListChanges=()=>{console.log("tabListChanges")}}ngAfterViewInit(){}ngAfterContentInit(){this.tabs.notifyOnChanges(),this.tabs.changes.subscribe(this.tabListChanges);let b=this.tabs.filter(e=>e.active);0===b.length&&this.selectTab(this.tabs.first)}selectTab(b){this.tabs.toArray().forEach(e=>{b==e?b.active=!0:e.active=!1})}};__decorate([core_1.ContentChildren(MenuTabItem),__metadata("design:type",core_1.QueryList)],MenuTabContainer.prototype,"tabs",void 0),__decorate([core_1.HostBinding("style.display"),__metadata("design:type",String)],MenuTabContainer.prototype,"flex",void 0),__decorate([core_1.HostBinding("style.flex-grow"),__metadata("design:type",String)],MenuTabContainer.prototype,"flexGrow",void 0),__decorate([core_1.HostBinding("style.flex-shrink"),__metadata("design:type",String)],MenuTabContainer.prototype,"flexShrink",void 0),__decorate([core_1.HostBinding("style.flex-direction"),__metadata("design:type",String)],MenuTabContainer.prototype,"flexDirection",void 0),MenuTabContainer=__decorate([core_1.Component({selector:"menu-tabs",styles:[`
    .tab-title {
        font-family: Arial; 
        font-size: 14pt;
        color: #0080d4;
    }
`],template:`
    <ul class="nav nav-tabs" style="flex-basis: auto;">
      <li *ngFor="let tab of tabs" (click)="selectTab(tab)" [class.active]="tab.active">
        <a href="#" class="tab-title">{{tab.title}}</a>
      </li>
    </ul>
    <ng-content></ng-content>    
  `}),__metadata("design:paramtypes",[])],MenuTabContainer),exports.MenuTabContainer=MenuTabContainer;let CloseButton=class{constructor(){this.color="#800",this.hoverColor="#EB1000",this.clickColor="#5C1813",this.cursor="pointer",this.isMouseOver=!1,this.isMousePressed=!1,this.updateColor=()=>{this.fill=this.isMousePressed?this.clickColor:this.isMouseOver?this.hoverColor:this.color},this.svgStyle="width: 14px; height: 14px",this.pathStyle="fill: red;"}onMouseover(){this.isMouseOver=!0,this.updateColor()}onMouseout(){this.isMouseOver=!1,this.updateColor()}onMousedown(){this.isMousePressed=!0,this.updateColor()}onMouseup(){this.isMousePressed=!1,this.updateColor()}set fill(b){if(this.path){let e=this.path.nativeElement;e.style="fill: "+b+";"}}ngAfterViewInit(){this.fill=this.color}};__decorate([core_1.ViewChild("svg"),__metadata("design:type",core_1.ElementRef)],CloseButton.prototype,"svg",void 0),__decorate([core_1.ViewChild("path"),__metadata("design:type",core_1.ElementRef)],CloseButton.prototype,"path",void 0),__decorate([core_1.Input("color"),__metadata("design:type",String)],CloseButton.prototype,"color",void 0),__decorate([core_1.Input("hover-color"),__metadata("design:type",String)],CloseButton.prototype,"hoverColor",void 0),__decorate([core_1.Input("click-color"),__metadata("design:type",String)],CloseButton.prototype,"clickColor",void 0),__decorate([core_1.HostBinding("style.cursor"),__metadata("design:type",String)],CloseButton.prototype,"cursor",void 0),__decorate([core_1.HostListener("mouseover"),__metadata("design:type",Function),__metadata("design:paramtypes",[]),__metadata("design:returntype",void 0)],CloseButton.prototype,"onMouseover",null),__decorate([core_1.HostListener("mouseout"),__metadata("design:type",Function),__metadata("design:paramtypes",[]),__metadata("design:returntype",void 0)],CloseButton.prototype,"onMouseout",null),__decorate([core_1.HostListener("mousedown"),__metadata("design:type",Function),__metadata("design:paramtypes",[]),__metadata("design:returntype",void 0)],CloseButton.prototype,"onMousedown",null),__decorate([core_1.HostListener("mouseup"),__metadata("design:type",Function),__metadata("design:paramtypes",[]),__metadata("design:returntype",void 0)],CloseButton.prototype,"onMouseup",null),__decorate([core_1.Input(),core_1.HostBinding("style.width"),__metadata("design:type",String)],CloseButton.prototype,"width",void 0),__decorate([core_1.Input(),core_1.HostBinding("style.height"),__metadata("design:type",String)],CloseButton.prototype,"height",void 0),CloseButton=__decorate([core_1.Component({selector:"[close-button]",template:`
<svg #svg x="0px" y="0px" viewBox="0 0 348.333 348.334"  xml:space="preserve">
<g>
	<path #path d="M336.559,68.611L231.016,174.165l105.543,105.549c15.699,15.705,15.699,41.145,0,56.85   c-7.844,7.844-18.128,11.769-28.407,11.769c-10.296,0-20.581-3.919-28.419-11.769L174.167,231.003L68.609,336.563   c-7.843,7.844-18.128,11.769-28.416,11.769c-10.285,0-20.563-3.919-28.413-11.769c-15.699-15.698-15.699-41.139,0-56.85   l105.54-105.549L11.774,68.611c-15.699-15.699-15.699-41.145,0-56.844c15.696-15.687,41.127-15.687,56.829,0l105.563,105.554   L279.721,11.767c15.705-15.687,41.139-15.687,56.832,0C352.258,27.466,352.258,52.912,336.559,68.611z"/>
</g>
</svg>
`}),__metadata("design:paramtypes",[])],CloseButton),exports.CloseButton=CloseButton;let ViewTabItem=class{constructor(){this.hostClass="ribbon-container",this.hostDisplay="flex",this.flexGrow="1",this.flexShrink="1",this.flexDirection="column",this.flexWrap="wrap",this.alignItems="flex-start",this.alignContent="flex-start"}set active(b){this.hostDisplay="true"==b.toString()?"flex":"none"}get active(){return"flex"==this.hostDisplay}};__decorate([core_1.HostBinding("class"),__metadata("design:type",String)],ViewTabItem.prototype,"hostClass",void 0),__decorate([core_1.HostBinding("style.display"),__metadata("design:type",String)],ViewTabItem.prototype,"hostDisplay",void 0),__decorate([core_1.HostBinding("style.flex-grow"),__metadata("design:type",String)],ViewTabItem.prototype,"flexGrow",void 0),__decorate([core_1.HostBinding("style.flex-shrink"),__metadata("design:type",String)],ViewTabItem.prototype,"flexShrink",void 0),__decorate([core_1.HostBinding("style.flex-direction"),__metadata("design:type",String)],ViewTabItem.prototype,"flexDirection",void 0),__decorate([core_1.HostBinding("style.flex-wrap"),__metadata("design:type",String)],ViewTabItem.prototype,"flexWrap",void 0),__decorate([core_1.HostBinding("style.align-items"),__metadata("design:type",String)],ViewTabItem.prototype,"alignItems",void 0),__decorate([core_1.HostBinding("style.align-content"),__metadata("design:type",String)],ViewTabItem.prototype,"alignContent",void 0),__decorate([core_1.Input("tabTitle"),__metadata("design:type",String)],ViewTabItem.prototype,"title",void 0),__decorate([core_1.Input(),__metadata("design:type",Boolean),__metadata("design:paramtypes",[Boolean])],ViewTabItem.prototype,"active",null),__decorate([core_1.ViewChild("container",{read:core_1.ViewContainerRef}),__metadata("design:type",core_1.ViewContainerRef)],ViewTabItem.prototype,"container",void 0),ViewTabItem=__decorate([core_1.Component({selector:"view-tab",styles:[`.ribbon-container>* {
    align-self: flex-start;
} `],template:`
    <template #container></template>
  `}),__metadata("design:paramtypes",[])],ViewTabItem),exports.ViewTabItem=ViewTabItem;let ViewTabContainer=class{constructor(b){this.changeDetectorRef=b,this.tabItems=[],this.flex="flex",this.flexGrow="1",this.flexShrink="1",this.flexDirection="column",this.tabListChanges=()=>{console.log("tabListChanges")}}ngAfterViewInit(){}ngAfterContentInit(){this.tabs.notifyOnChanges(),this.tabs.changes.subscribe(this.tabListChanges);let b=this.tabs.filter(e=>e.active);0===b.length&&this.selectTab(this.tabs.first)}selectTab(b){this.tabItems.forEach(e=>{b==e?b.active=!0:e.active=!1})}};__decorate([core_1.ContentChildren(ViewTabItem),__metadata("design:type",core_1.QueryList)],ViewTabContainer.prototype,"tabs",void 0),__decorate([core_1.HostBinding("style.display"),__metadata("design:type",String)],ViewTabContainer.prototype,"flex",void 0),__decorate([core_1.HostBinding("style.flex-grow"),__metadata("design:type",String)],ViewTabContainer.prototype,"flexGrow",void 0),__decorate([core_1.HostBinding("style.flex-shrink"),__metadata("design:type",String)],ViewTabContainer.prototype,"flexShrink",void 0),__decorate([core_1.HostBinding("style.flex-direction"),__metadata("design:type",String)],ViewTabContainer.prototype,"flexDirection",void 0),ViewTabContainer=__decorate([core_1.Component({selector:"view-tabs",styles:[`
    .tab-title {
        font-family: Arial; 
        font-size: 14pt;
        color: #0080d4;
        text-wrap: avoid;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
    }
    .tab-title > span {
        padding: 0px 4px 0px 0px;
    }
`],template:`
    <ul class="nav nav-tabs" style="flex-basis: auto;">
      <li *ngFor="let tab of tabItems" (click)="selectTab(tab)" [class.active]="tab.active">
        <a href="#" class="tab-title"><span>{{tab.title}}</span><div close-button width="18px" height="18px"></div></a>
      </li>
    </ul>
    <ng-content></ng-content>    
  `}),__metadata("design:paramtypes",[core_1.ChangeDetectorRef])],ViewTabContainer),exports.ViewTabContainer=ViewTabContainer;