"use strict";var __decorate=this&&this.__decorate||function(a,b,e,f){var j,g=arguments.length,h=3>g?b:null===f?f=Object.getOwnPropertyDescriptor(b,e):f;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)h=Reflect.decorate(a,b,e,f);else for(var l=a.length-1;0<=l;l--)(j=a[l])&&(h=(3>g?j(h):3<g?j(b,e,h):j(b,e))||h);return 3<g&&h&&Object.defineProperty(b,e,h),h},__metadata=this&&this.__metadata||function(a,b){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(a,b)};const core_1=require("@angular/core");let ButtonUpload=ButtonUpload_1=class{constructor(b){this.elementRef=b,this.svg=this.elementRef.nativeElement,ButtonUpload_1.injectStyle(),this.svg.setAttribute("viewBox","0 0 100 100"),this.svg.innerHTML=`<ellipse class="test" rx="50" ry="50" cx="50" cy="50" fill="yellow" fill-opacity="0" stroke="#888" /><path d="M50,10 L90,50 L65,50 L65,86 L35,86 L35,50 L10,50 Z" fill="black" />`}static injectStyle(){if(!ButtonUpload_1.injected){let b=document.head||document.getElementsByTagName("head")[0],e=document.createElement("style");e.type="text/css",e.appendChild(document.createTextNode(`
svg[btn-upload] {cursor: pointer;}
svg[btn-upload]:hover > ellipse{fill-opacity: 1;}
svg[btn-upload]:hover > line{stroke: #3366ff;}
svg[btn-upload]:active > line{ stroke: #ff0066;}
svg[btn-upload]:active > ellipse{fill-opacity: 1;fill: #006600;}
`)),b.appendChild(e),ButtonUpload_1.injected=!0}}};ButtonUpload.injected=!1,ButtonUpload=ButtonUpload_1=__decorate([core_1.Directive({selector:"[btn-upload]"}),__metadata("design:paramtypes",[core_1.ElementRef])],ButtonUpload),exports.ButtonUpload=ButtonUpload;let ButtonAdd=ButtonAdd_1=class{constructor(b){this.elementRef=b,this.svg=this.elementRef.nativeElement,ButtonAdd_1.injectStyle(),this.svg.setAttribute("viewBox","0 0 100 100"),this.svg.innerHTML=`<ellipse rx="50" ry="50" cx="50" cy="50" fill="yellow" fill-opacity="0" stroke="#888" /><line x1="20" x2="80" y1="50" y2="50" stroke="#333" stroke-linecap="round" stroke-width="12" /><line x1="50" x2="50" y1="20" y2="80" stroke="#333" stroke-linecap="round" stroke-width="12" />`}static injectStyle(){if(!ButtonAdd_1.injected){let b=document.head||document.getElementsByTagName("head")[0],e=document.createElement("style");e.type="text/css",e.appendChild(document.createTextNode(`
svg[btn-add] {cursor: pointer;}
svg[btn-add]:hover > line{stroke: #3366ff;}
svg[btn-add]:hover > ellipse{fill-opacity: 1;}
svg[btn-add]:active > line{ stroke: #ff0066;}
svg[btn-add]:active > ellipse{fill-opacity: 1;fill: #006600;}
`)),b.appendChild(e),ButtonAdd_1.injected=!0}}};ButtonAdd.injected=!1,ButtonAdd=ButtonAdd_1=__decorate([core_1.Directive({selector:"[btn-add]"}),__metadata("design:paramtypes",[core_1.ElementRef])],ButtonAdd),exports.ButtonAdd=ButtonAdd;let ButtonRemove=ButtonRemove_1=class{constructor(b){this.elementRef=b,this.svg=this.elementRef.nativeElement,ButtonRemove_1.injectStyle(),this.svg.setAttribute("viewBox","0 0 100 100"),this.svg.innerHTML=`<ellipse rx="50" ry="50" cx="50" cy="50" fill="yellow" fill-opacity="0" stroke="#888" /><line x1="28.78679656" y1="28.78679656" x2="71.21320344" y2="71.21320344" stroke="#333" stroke-linecap="round" stroke-width="12" /><line x1="28.78679656" y1="71.21320344" x2="71.21320344" y2="28.78679656" stroke="#333" stroke-linecap="round" stroke-width="12" />`}static injectStyle(){if(!ButtonRemove_1.injected){let b=document.head||document.getElementsByTagName("head")[0],e=document.createElement("style");e.type="text/css",e.appendChild(document.createTextNode(`
svg[btn-remove] {cursor: pointer;}
svg[btn-remove]:hover > line{stroke: #3366ff;}
svg[btn-remove]:hover > ellipse{fill-opacity: 1;}
svg[btn-remove]:active > line{ stroke: #ff0066;}
svg[btn-remove]:active > ellipse{fill-opacity: 1;fill: #006600;}
`)),b.appendChild(e),ButtonRemove_1.injected=!0}}};ButtonRemove.injected=!1,ButtonRemove=ButtonRemove_1=__decorate([core_1.Directive({selector:"[btn-remove]"}),__metadata("design:paramtypes",[core_1.ElementRef])],ButtonRemove),exports.ButtonRemove=ButtonRemove;let LogoSynthenome=LogoSynthenome_1=class{constructor(b){this.elementRef=b,this.svg=this.elementRef.nativeElement,LogoSynthenome_1.injectStyle(),this.svg.setAttribute("viewBox","15 15 145 290"),this.svg.innerHTML=`
<path class="logo-frame" d="M80,20 L120,60 L80,100 L40,60 Z" stroke-width="10" stroke="black" stroke-linecap="round" stroke-linejoin="round" fill-opacity="0" />
<path class="logo-frame" d="M80,100 Q20,80 40,120" stroke-width="10" stroke="black" stroke-linecap="round" stroke-linejoin="round" fill-opacity="0" />
<path class="logo-frame" d="M80,100 L120,140 A28.2842712,28.2842712 0 0,1 120,180 L40,260 Q20,280 40,300" stroke-width="10" stroke="black" stroke-linecap="round" stroke-linejoin="round" fill-opacity="0" />
<path class="logo-frame" d="M100,120 Q70,120 70,150" stroke-width="10" stroke="black" stroke-linecap="round" stroke-linejoin="round" fill-opacity="0" />
<path class="logo-frame" d="M120,140 Q90,140 90,170" stroke-width="10" stroke="black" stroke-linecap="round" stroke-linejoin="round" fill-opacity="0" />
<path class="logo-frame" d="M80,220 L110,250" stroke-width="10" stroke="black" stroke-linecap="round" stroke-linejoin="round" fill-opacity="0" />
<path class="logo-frame" d="M60,240 L90,270" stroke-width="10" stroke="black" stroke-linecap="round" stroke-linejoin="round" fill-opacity="0" />
<line class="logo-eye" x1="90" x2="100" y1="60" y2="60" stroke-width="10" stroke="red" stroke-linecap="round" stroke-linejoin="round" fill-opacity="0" />
<path d="M40,140 L120,220 A28.2842712,28.2842712 0 0,1 120,260 L80,300" stroke-width="10" stroke="red" stroke-linecap="round" stroke-linejoin="round" fill-opacity="0" />
`}static injectStyle(){if(!LogoSynthenome_1.injected){let b=document.head||document.getElementsByTagName("head")[0],e=document.createElement("style");e.type="text/css",e.appendChild(document.createTextNode(`
svg[logo-synthenome] {
    cursor: pointer;
    transition-duration: 0.3s;
}
svg[logo-synthenome] > line {
    transition-duration: 0.3s;
    transform: translateX(0px);
}
svg[logo-synthenome]:hover > line {
    transition-duration: 0.3s;
    transform: translateX(-30px);
}
svg[logo-synthenome] > .logo-frame {
    transition-duration: 0.3s;
    stroke: black;
}
svg[logo-synthenome]:hover > .logo-frame {
    transition-duration: 0.3s;
    stroke: #fef918;
}
svg[logo-synthenome]:active > .logo-frame {
    transition-duration: 0.3s;
    fill-opacity: 1;
}
`)),b.appendChild(e),LogoSynthenome_1.injected=!0}}};LogoSynthenome.injected=!1,LogoSynthenome=LogoSynthenome_1=__decorate([core_1.Directive({selector:"[logo-synthenome]"}),__metadata("design:paramtypes",[core_1.ElementRef])],LogoSynthenome),exports.LogoSynthenome=LogoSynthenome;var ButtonUpload_1,ButtonAdd_1,ButtonRemove_1,LogoSynthenome_1;