/*
---
description: Provides a fallback for the placeholder property on input elements for older browsers.

license:
  - MIT-style license

authors:
  - Matthias Schmidt (http://www.m-schmidt.eu)

requires:
  core/1.2.5: '*'

provides:
  - Form.Placeholder

...
*/
(function(){if(!this.Form){this.Form={}}var a=("placeholder" in document.createElement("input"));if(!("supportsPlaceholder" in this)&&this.supportsPlaceholder!==false&&a){return}this.Form.Placeholder=new Class({Implements:Options,options:{color:"#A9A9A9",clearOnSubmit:true},initialize:function(c,b){this.setOptions(b);this.element=$(c);this.placeholder=this.element.get("placeholder");this.original_color=this.element.getStyle("color");if(this.element.get("value")==""){this.element.setStyle("color",this.options.color);this.element.set("value",this.placeholder)}this.element.addEvents({focus:function(){if(this.element.get("value")==this.placeholder){this.element.set("value","");this.element.setStyle("color",this.original_color)}}.bind(this),blur:function(){if(this.element.get("value")==""){this.element.setStyle("color",this.options.color);this.element.set("value",this.placeholder)}}.bind(this)});if(this.element.getParent("form")&&this.options.clearOnSubmit){this.element.getParent("form").addEvent("submit",function(d){if(this.element.get("value")==this.placeholder){this.element.set("value","")}}.bind(this))}}})})();