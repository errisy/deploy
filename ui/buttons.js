"use strict";var _createClass=function(){function a(b,e){for(var g,f=0;f<e.length;f++)g=e[f],g.enumerable=g.enumerable||!1,g.configurable=!0,"value"in g&&(g.writable=!0),Object.defineProperty(b,g.key,g)}return function(b,e,f){return e&&a(b.prototype,e),f&&a(b,f),b}}(),_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a};function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}var __decorate=function(a,b,e,f){var j,g=arguments.length,h=3>g?b:null===f?f=Object.getOwnPropertyDescriptor(b,e):f;if("object"===("undefined"==typeof Reflect?"undefined":_typeof(Reflect))&&"function"==typeof Reflect.decorate)h=Reflect.decorate(a,b,e,f);else for(var l=a.length-1;0<=l;l--)(j=a[l])&&(h=(3>g?j(h):3<g?j(b,e,h):j(b,e))||h);return 3<g&&h&&Object.defineProperty(b,e,h),h},__metadata=function(a,b){if("object"===("undefined"==typeof Reflect?"undefined":_typeof(Reflect))&&"function"==typeof Reflect.metadata)return Reflect.metadata(a,b)},core_1=require("@angular/core"),ButtonUpload=ButtonUpload_1=function(){function a(b){_classCallCheck(this,a),this.elementRef=b,this.svg=this.elementRef.nativeElement,ButtonUpload_1.injectStyle(),this.svg.setAttribute("viewBox","0 0 100 100"),this.svg.innerHTML="<ellipse class=\"test\" rx=\"50\" ry=\"50\" cx=\"50\" cy=\"50\" fill=\"yellow\" fill-opacity=\"0\" stroke=\"#888\" /><path d=\"M50,10 L90,50 L65,50 L65,86 L35,86 L35,50 L10,50 Z\" fill=\"black\" />"}return _createClass(a,null,[{key:"injectStyle",value:function(){if(!ButtonUpload_1.injected){var e=document.head||document.getElementsByTagName("head")[0],f=document.createElement("style");f.type="text/css",f.appendChild(document.createTextNode("\nsvg[btn-upload] {cursor: pointer;}\nsvg[btn-upload]:hover > ellipse{fill-opacity: 1;}\nsvg[btn-upload]:hover > line{stroke: #3366ff;}\nsvg[btn-upload]:active > line{ stroke: #ff0066;}\nsvg[btn-upload]:active > ellipse{fill-opacity: 1;fill: #006600;}\n")),e.appendChild(f),ButtonUpload_1.injected=!0}}}]),a}();ButtonUpload.injected=!1,ButtonUpload=ButtonUpload_1=__decorate([core_1.Directive({selector:"[btn-upload]"}),__metadata("design:paramtypes",[core_1.ElementRef])],ButtonUpload),exports.ButtonUpload=ButtonUpload;var ButtonAdd=ButtonAdd_1=function(){function a(b){_classCallCheck(this,a),this.elementRef=b,this.svg=this.elementRef.nativeElement,ButtonAdd_1.injectStyle(),this.svg.setAttribute("viewBox","0 0 100 100"),this.svg.innerHTML="<ellipse rx=\"50\" ry=\"50\" cx=\"50\" cy=\"50\" fill=\"yellow\" fill-opacity=\"0\" stroke=\"#888\" /><line x1=\"20\" x2=\"80\" y1=\"50\" y2=\"50\" stroke=\"#333\" stroke-linecap=\"round\" stroke-width=\"12\" /><line x1=\"50\" x2=\"50\" y1=\"20\" y2=\"80\" stroke=\"#333\" stroke-linecap=\"round\" stroke-width=\"12\" />"}return _createClass(a,null,[{key:"injectStyle",value:function(){if(!ButtonAdd_1.injected){var e=document.head||document.getElementsByTagName("head")[0],f=document.createElement("style");f.type="text/css",f.appendChild(document.createTextNode("\nsvg[btn-add] {cursor: pointer;}\nsvg[btn-add]:hover > line{stroke: #3366ff;}\nsvg[btn-add]:hover > ellipse{fill-opacity: 1;}\nsvg[btn-add]:active > line{ stroke: #ff0066;}\nsvg[btn-add]:active > ellipse{fill-opacity: 1;fill: #006600;}\n")),e.appendChild(f),ButtonAdd_1.injected=!0}}}]),a}();ButtonAdd.injected=!1,ButtonAdd=ButtonAdd_1=__decorate([core_1.Directive({selector:"[btn-add]"}),__metadata("design:paramtypes",[core_1.ElementRef])],ButtonAdd),exports.ButtonAdd=ButtonAdd;var ButtonRemove=ButtonRemove_1=function(){function a(b){_classCallCheck(this,a),this.elementRef=b,this.svg=this.elementRef.nativeElement,ButtonRemove_1.injectStyle(),this.svg.setAttribute("viewBox","0 0 100 100"),this.svg.innerHTML="<ellipse rx=\"50\" ry=\"50\" cx=\"50\" cy=\"50\" fill=\"yellow\" fill-opacity=\"0\" stroke=\"#888\" /><line x1=\"28.78679656\" y1=\"28.78679656\" x2=\"71.21320344\" y2=\"71.21320344\" stroke=\"#333\" stroke-linecap=\"round\" stroke-width=\"12\" /><line x1=\"28.78679656\" y1=\"71.21320344\" x2=\"71.21320344\" y2=\"28.78679656\" stroke=\"#333\" stroke-linecap=\"round\" stroke-width=\"12\" />"}return _createClass(a,null,[{key:"injectStyle",value:function(){if(!ButtonRemove_1.injected){var e=document.head||document.getElementsByTagName("head")[0],f=document.createElement("style");f.type="text/css",f.appendChild(document.createTextNode("\nsvg[btn-remove] {cursor: pointer;}\nsvg[btn-remove]:hover > line{stroke: #3366ff;}\nsvg[btn-remove]:hover > ellipse{fill-opacity: 1;}\nsvg[btn-remove]:active > line{ stroke: #ff0066;}\nsvg[btn-remove]:active > ellipse{fill-opacity: 1;fill: #006600;}\n")),e.appendChild(f),ButtonRemove_1.injected=!0}}}]),a}();ButtonRemove.injected=!1,ButtonRemove=ButtonRemove_1=__decorate([core_1.Directive({selector:"[btn-remove]"}),__metadata("design:paramtypes",[core_1.ElementRef])],ButtonRemove),exports.ButtonRemove=ButtonRemove;var LogoSynthenome=LogoSynthenome_1=function(){function a(b){_classCallCheck(this,a),this.elementRef=b,this.svg=this.elementRef.nativeElement,LogoSynthenome_1.injectStyle(),this.svg.setAttribute("viewBox","15 15 145 290"),this.svg.innerHTML="\n<path class=\"logo-frame\" d=\"M80,20 L120,60 L80,100 L40,60 Z\" stroke-width=\"10\" stroke=\"black\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-opacity=\"0\" />\n<path class=\"logo-frame\" d=\"M80,100 Q20,80 40,120\" stroke-width=\"10\" stroke=\"black\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-opacity=\"0\" />\n<path class=\"logo-frame\" d=\"M80,100 L120,140 A28.2842712,28.2842712 0 0,1 120,180 L40,260 Q20,280 40,300\" stroke-width=\"10\" stroke=\"black\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-opacity=\"0\" />\n<path class=\"logo-frame\" d=\"M100,120 Q70,120 70,150\" stroke-width=\"10\" stroke=\"black\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-opacity=\"0\" />\n<path class=\"logo-frame\" d=\"M120,140 Q90,140 90,170\" stroke-width=\"10\" stroke=\"black\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-opacity=\"0\" />\n<path class=\"logo-frame\" d=\"M80,220 L110,250\" stroke-width=\"10\" stroke=\"black\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-opacity=\"0\" />\n<path class=\"logo-frame\" d=\"M60,240 L90,270\" stroke-width=\"10\" stroke=\"black\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-opacity=\"0\" />\n<line class=\"logo-eye\" x1=\"90\" x2=\"100\" y1=\"60\" y2=\"60\" stroke-width=\"10\" stroke=\"red\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-opacity=\"0\" />\n<path d=\"M40,140 L120,220 A28.2842712,28.2842712 0 0,1 120,260 L80,300\" stroke-width=\"10\" stroke=\"red\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-opacity=\"0\" />\n"}return _createClass(a,null,[{key:"injectStyle",value:function(){if(!LogoSynthenome_1.injected){var e=document.head||document.getElementsByTagName("head")[0],f=document.createElement("style");f.type="text/css",f.appendChild(document.createTextNode("\nsvg[logo-synthenome] {\n    cursor: pointer;\n    transition-duration: 0.3s;\n}\nsvg[logo-synthenome] > line {\n    transition-duration: 0.3s;\n    transform: translateX(0px);\n}\nsvg[logo-synthenome]:hover > line {\n    transition-duration: 0.3s;\n    transform: translateX(-30px);\n}\nsvg[logo-synthenome] > .logo-frame {\n    transition-duration: 0.3s;\n    stroke: black;\n}\nsvg[logo-synthenome]:hover > .logo-frame {\n    transition-duration: 0.3s;\n    stroke: #fef918;\n}\nsvg[logo-synthenome]:active > .logo-frame {\n    transition-duration: 0.3s;\n    fill-opacity: 1;\n}\n")),e.appendChild(f),LogoSynthenome_1.injected=!0}}}]),a}();LogoSynthenome.injected=!1,LogoSynthenome=LogoSynthenome_1=__decorate([core_1.Directive({selector:"[logo-synthenome]"}),__metadata("design:paramtypes",[core_1.ElementRef])],LogoSynthenome),exports.LogoSynthenome=LogoSynthenome;var ButtonUpload_1,ButtonAdd_1,ButtonRemove_1,LogoSynthenome_1;