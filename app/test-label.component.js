"use strict";var _createClass=function(){function a(b,e){for(var g,f=0;f<e.length;f++)g=e[f],g.enumerable=g.enumerable||!1,g.configurable=!0,"value"in g&&(g.writable=!0),Object.defineProperty(b,g.key,g)}return function(b,e,f){return e&&a(b.prototype,e),f&&a(b,f),b}}(),_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a};function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}var __decorate=function(a,b,e,f){var j,g=arguments.length,h=3>g?b:null===f?f=Object.getOwnPropertyDescriptor(b,e):f;if("object"===("undefined"==typeof Reflect?"undefined":_typeof(Reflect))&&"function"==typeof Reflect.decorate)h=Reflect.decorate(a,b,e,f);else for(var l=a.length-1;0<=l;l--)(j=a[l])&&(h=(3>g?j(h):3<g?j(b,e,h):j(b,e))||h);return 3<g&&h&&Object.defineProperty(b,e,h),h},__metadata=function(a,b){if("object"===("undefined"==typeof Reflect?"undefined":_typeof(Reflect))&&"function"==typeof Reflect.metadata)return Reflect.metadata(a,b)},core_1=require("@angular/core"),TestLabelComponent=function(){function a(b){_classCallCheck(this,a),this.elementRef=b}return _createClass(a,[{key:"ngOnInit",value:function(){this._label="initialized"}},{key:"ngAfterViewInit",value:function(){}},{key:"label",set:function(e){this._label=e},get:function(){return this._label}}]),a}();__decorate([core_1.Input("value"),__metadata("design:type",String),__metadata("design:paramtypes",[String])],TestLabelComponent.prototype,"label",null),TestLabelComponent=__decorate([core_1.Component({selector:"[test-label]",template:"<span>{{label}}</span>",inputs:["label"]}),__metadata("design:paramtypes",[core_1.ElementRef])],TestLabelComponent),exports.TestLabelComponent=TestLabelComponent;