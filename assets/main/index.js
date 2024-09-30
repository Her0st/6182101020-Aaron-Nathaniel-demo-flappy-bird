System.register("chunks:///_virtual/background.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(n){var t,o,r,c,e;return{setters:[function(n){t=n.inheritsLoose},function(n){o=n.cclegacy,r=n._decorator,c=n.Vec3,e=n.Component}],execute:function(){var a;o._RF.push({},"cb5adxcOWhOMI8f/ut2i/K7","background",void 0);var u=r.ccclass;r.property,n("background",u("background")(a=function(n){function o(){for(var t,o=arguments.length,r=new Array(o),c=0;c<o;c++)r[c]=arguments[c];return(t=n.call.apply(n,[this].concat(r))||this).frameCount=0,t.secondCount=0,t.wbackground=288,t}t(o,n);var r=o.prototype;return r.start=function(){},r.update=function(n){this.node.translate(new c(-100*n,0,0)),this.node.position.x<=-1*(this.wbackground/2+this.wbackground)&&this.node.translate(new c(this.wbackground,0,0))},o}(e))||a);o._RF.pop()}}}));

System.register("chunks:///_virtual/Bird.ts",["./rollupPluginModLoBabelHelpers.js","cc","./resultScreen.ts"],(function(t){var n,o,e,i,r,c,s,a,u,p;return{setters:[function(t){n=t.inheritsLoose},function(t){o=t.cclegacy,e=t._decorator,i=t.input,r=t.Input,c=t.Collider2D,s=t.Contact2DType,a=t.Vec3,u=t.Component},function(t){p=t.resultScreen}],execute:function(){var l;o._RF.push({},"c282eLTctxMprkBA9isNxup","Bird",void 0);var h=e.ccclass;e.property,t("NewComponent",h("NewComponent")(l=function(t){function o(){for(var n,o=arguments.length,e=new Array(o),i=0;i<o;i++)e[i]=arguments[i];return(n=t.call.apply(t,[this].concat(e))||this).vy=0,n.gravitasi=500,n}n(o,t);var e=o.prototype;return e.start=function(){i.on(r.EventType.TOUCH_START,this.OnTouchStart,this);var t=this.getComponent(c);t&&t.on(s.BEGIN_CONTACT,this.onBeginContact,this)},e.onBeginContact=function(t,n,o){console.log("onBeginContact"),p.Instance.node.active=!0},e.OnTouchStart=function(t){console.log("touch start"),this.vy=200},e.update=function(t){this.node.translate(new a(0,this.vy*t,0)),this.vy-=this.gravitasi*t},o}(u))||l);o._RF.pop()}}}));

System.register("chunks:///_virtual/debug-view-runtime-control.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var e,o,i,n,s,l,r,a,g,h,p,c,C,d,m,u,L;return{setters:[function(t){e=t.applyDecoratedDescriptor,o=t.inheritsLoose,i=t.initializerDefineProperty,n=t.assertThisInitialized},function(t){s=t.cclegacy,l=t._decorator,r=t.Node,a=t.Color,g=t.Canvas,h=t.UITransform,p=t.instantiate,c=t.Label,C=t.RichText,d=t.Toggle,m=t.Button,u=t.director,L=t.Component}],execute:function(){var f,M,b,v,T,S,x,E,I;s._RF.push({},"b2bd1+njXxJxaFY3ymm06WU","debug-view-runtime-control",void 0);var A=l.ccclass,y=l.property;t("DebugViewRuntimeControl",(f=A("internal.DebugViewRuntimeControl"),M=y(r),b=y(r),v=y(r),f((x=e((S=function(t){function e(){for(var e,o=arguments.length,s=new Array(o),l=0;l<o;l++)s[l]=arguments[l];return e=t.call.apply(t,[this].concat(s))||this,i(e,"compositeModeToggle",x,n(e)),i(e,"singleModeToggle",E,n(e)),i(e,"EnableAllCompositeModeButton",I,n(e)),e._single=0,e.strSingle=["No Single Debug","Vertex Color","Vertex Normal","Vertex Tangent","World Position","Vertex Mirror","Face Side","UV0","UV1","UV Lightmap","Project Depth","Linear Depth","Fragment Normal","Fragment Tangent","Fragment Binormal","Base Color","Diffuse Color","Specular Color","Transparency","Metallic","Roughness","Specular Intensity","IOR","Direct Diffuse","Direct Specular","Direct All","Env Diffuse","Env Specular","Env All","Emissive","Light Map","Shadow","AO","Fresnel","Direct Transmit Diffuse","Direct Transmit Specular","Env Transmit Diffuse","Env Transmit Specular","Transmit All","Direct Internal Specular","Env Internal Specular","Internal All","Fog"],e.strComposite=["Direct Diffuse","Direct Specular","Env Diffuse","Env Specular","Emissive","Light Map","Shadow","AO","Normal Map","Fog","Tone Mapping","Gamma Correction","Fresnel","Transmit Diffuse","Transmit Specular","Internal Specular","TT"],e.strMisc=["CSM Layer Coloration","Lighting With Albedo"],e.compositeModeToggleList=[],e.singleModeToggleList=[],e.miscModeToggleList=[],e.textComponentList=[],e.labelComponentList=[],e.textContentList=[],e.hideButtonLabel=void 0,e._currentColorIndex=0,e.strColor=["<color=#ffffff>","<color=#000000>","<color=#ff0000>","<color=#00ff00>","<color=#0000ff>"],e.color=[a.WHITE,a.BLACK,a.RED,a.GREEN,a.BLUE],e}o(e,t);var s=e.prototype;return s.start=function(){if(this.node.parent.getComponent(g)){var t=this.node.parent.getComponent(h),e=.5*t.width,o=.5*t.height,i=.1*e-e,n=o-.1*o,s=this.node.getChildByName("MiscMode"),l=p(s);l.parent=this.node,l.name="Buttons";var r=p(s);r.parent=this.node,r.name="Titles";for(var u=0;u<2;u++){var L=p(this.EnableAllCompositeModeButton.getChildByName("Label"));L.setPosition(i+(u>0?450:150),n,0),L.setScale(.75,.75,.75),L.parent=r;var f=L.getComponent(c);f.string=u?"----------Composite Mode----------":"----------Single Mode----------",f.color=a.WHITE,f.overflow=0,this.labelComponentList[this.labelComponentList.length]=f}n-=20;for(var M=0,b=0;b<this.strSingle.length;b++,M++){b===this.strSingle.length>>1&&(i+=200,M=0);var v=b?p(this.singleModeToggle):this.singleModeToggle;v.setPosition(i,n-20*M,0),v.setScale(.5,.5,.5),v.parent=this.singleModeToggle.parent;var T=v.getComponentInChildren(C);T.string=this.strSingle[b],this.textComponentList[this.textComponentList.length]=T,this.textContentList[this.textContentList.length]=T.string,v.on(d.EventType.TOGGLE,this.toggleSingleMode,this),this.singleModeToggleList[b]=v}i+=200,this.EnableAllCompositeModeButton.setPosition(i+15,n,0),this.EnableAllCompositeModeButton.setScale(.5,.5,.5),this.EnableAllCompositeModeButton.on(m.EventType.CLICK,this.enableAllCompositeMode,this),this.EnableAllCompositeModeButton.parent=l;var S=this.EnableAllCompositeModeButton.getComponentInChildren(c);this.labelComponentList[this.labelComponentList.length]=S;var x=p(this.EnableAllCompositeModeButton);x.setPosition(i+90,n,0),x.setScale(.5,.5,.5),x.on(m.EventType.CLICK,this.changeTextColor,this),x.parent=l,(S=x.getComponentInChildren(c)).string="TextColor",this.labelComponentList[this.labelComponentList.length]=S;var E=p(this.EnableAllCompositeModeButton);E.setPosition(i+200,n,0),E.setScale(.5,.5,.5),E.on(m.EventType.CLICK,this.hideUI,this),E.parent=this.node.parent,(S=E.getComponentInChildren(c)).string="Hide UI",this.labelComponentList[this.labelComponentList.length]=S,this.hideButtonLabel=S,n-=40;for(var I=0;I<this.strMisc.length;I++){var A=p(this.compositeModeToggle);A.setPosition(i,n-20*I,0),A.setScale(.5,.5,.5),A.parent=s;var y=A.getComponentInChildren(C);y.string=this.strMisc[I],this.textComponentList[this.textComponentList.length]=y,this.textContentList[this.textContentList.length]=y.string,A.getComponent(d).isChecked=!!I,A.on(d.EventType.TOGGLE,I?this.toggleLightingWithAlbedo:this.toggleCSMColoration,this),this.miscModeToggleList[I]=A}n-=150;for(var D=0;D<this.strComposite.length;D++){var B=D?p(this.compositeModeToggle):this.compositeModeToggle;B.setPosition(i,n-20*D,0),B.setScale(.5,.5,.5),B.parent=this.compositeModeToggle.parent;var w=B.getComponentInChildren(C);w.string=this.strComposite[D],this.textComponentList[this.textComponentList.length]=w,this.textContentList[this.textContentList.length]=w.string,B.on(d.EventType.TOGGLE,this.toggleCompositeMode,this),this.compositeModeToggleList[D]=B}}else console.error("debug-view-runtime-control should be child of Canvas")},s.isTextMatched=function(t,e){var o=new String(t),i=o.search(">");return-1===i?t===e:(o=(o=o.substr(i+1)).substr(0,o.search("<")))===e},s.toggleSingleMode=function(t){for(var e=u.root.debugView,o=t.getComponentInChildren(C),i=0;i<this.strSingle.length;i++)this.isTextMatched(o.string,this.strSingle[i])&&(e.singleMode=i)},s.toggleCompositeMode=function(t){for(var e=u.root.debugView,o=t.getComponentInChildren(C),i=0;i<this.strComposite.length;i++)this.isTextMatched(o.string,this.strComposite[i])&&e.enableCompositeMode(i,t.isChecked)},s.toggleLightingWithAlbedo=function(t){u.root.debugView.lightingWithAlbedo=t.isChecked},s.toggleCSMColoration=function(t){u.root.debugView.csmLayerColoration=t.isChecked},s.enableAllCompositeMode=function(t){var e=u.root.debugView;e.enableAllCompositeMode(!0);for(var o=0;o<this.compositeModeToggleList.length;o++){this.compositeModeToggleList[o].getComponent(d).isChecked=!0}var i=this.miscModeToggleList[0].getComponent(d);i.isChecked=!1,e.csmLayerColoration=!1,(i=this.miscModeToggleList[1].getComponent(d)).isChecked=!0,e.lightingWithAlbedo=!0},s.hideUI=function(t){var e=this.node.getChildByName("Titles"),o=!e.active;this.singleModeToggleList[0].parent.active=o,this.miscModeToggleList[0].parent.active=o,this.compositeModeToggleList[0].parent.active=o,this.EnableAllCompositeModeButton.parent.active=o,e.active=o,this.hideButtonLabel.string=o?"Hide UI":"Show UI"},s.changeTextColor=function(t){this._currentColorIndex++,this._currentColorIndex>=this.strColor.length&&(this._currentColorIndex=0);for(var e=0;e<this.textComponentList.length;e++)this.textComponentList[e].string=this.strColor[this._currentColorIndex]+this.textContentList[e]+"</color>";for(var o=0;o<this.labelComponentList.length;o++)this.labelComponentList[o].color=this.color[this._currentColorIndex]},s.onLoad=function(){},s.update=function(t){},e}(L)).prototype,"compositeModeToggle",[M],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),E=e(S.prototype,"singleModeToggle",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),I=e(S.prototype,"EnableAllCompositeModeButton",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),T=S))||T));s._RF.pop()}}}));

System.register("chunks:///_virtual/demoDPG.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var e,n,o,r;return{setters:[function(t){e=t.inheritsLoose},function(t){n=t.cclegacy,o=t._decorator,r=t.Component}],execute:function(){var c;n._RF.push({},"65e89ZHxnRNN5AxwnGqtMIs","demoDPG",void 0);var u=o.ccclass;o.property,t("demoDPG",u("demoDPG")(c=function(t){function n(){return t.apply(this,arguments)||this}e(n,t);var o=n.prototype;return o.start=function(){},o.update=function(t){},n}(r))||c);n._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./debug-view-runtime-control.ts","./demoDPG.ts","./Bird.ts","./background.ts","./pipe.ts","./resultScreen.ts"],(function(){return{setters:[null,null,null,null,null,null],execute:function(){}}}));

System.register("chunks:///_virtual/pipe.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var n,e,o,i,r,a;return{setters:[function(t){n=t.inheritsLoose},function(t){e=t.cclegacy,o=t._decorator,i=t.Vec3,r=t.randomRangeInt,a=t.Component}],execute:function(){var s;e._RF.push({},"79b73V+fxBMdoYHKvBXrAcq","pipe",void 0);var c=o.ccclass;o.property,t("pipe",c("pipe")(s=function(t){function e(){for(var n,e=arguments.length,o=new Array(e),i=0;i<e;i++)o[i]=arguments[i];return(n=t.call.apply(t,[this].concat(o))||this).wbackground=288,n.wPipa=52,n}n(e,t);var o=e.prototype;return o.start=function(){this.node.translate(new i(0,r(-100,100),0))},o.update=function(t){this.node.translate(new i(-100*t,0,0)),this.node.position.x<=-196&&(this.node.position.y<0?this.node.translate(new i(this.wbackground+this.wPipa,r(0,100),0)):this.node.translate(new i(this.wbackground+this.wPipa,r(-100,0),0)))},e}(a))||s);e._RF.pop()}}}));

System.register("chunks:///_virtual/resultScreen.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){var t,n,r,c,o;return{setters:[function(e){t=e.inheritsLoose},function(e){n=e.cclegacy,r=e._decorator,c=e.director,o=e.Component}],execute:function(){var s,u;n._RF.push({},"c2904MjH+dOCIXh6Toy1b5B","resultScreen",void 0);var i=r.ccclass;r.property,e("resultScreen",i("resultScreen")(((u=function(e){function n(){return e.apply(this,arguments)||this}t(n,e);var r=n.prototype;return r.start=function(){n.Instance=this,this.node.active=!1},r.update=function(e){},r.doRestart=function(e,t){c.loadScene("gameplay")},n}(o)).Instance=void 0,s=u))||s);n._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});