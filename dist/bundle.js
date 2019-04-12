!function(e){var t={};function n(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(o,i,function(t){return e[t]}.bind(null,i));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t){e.exports=fabric},function(e,t,n){"use strict";n.r(t);var o=n(0),i=n.n(o);function r(e){e.__eventListeners&&(e.__eventListeners["mouse:down"]=[],e.__eventListeners["mouse:over"]=[],e.__eventListeners["mouse:out"]=[],e.__eventListeners["mouse:move"]=[],e.__eventListeners["mouse:up"]=[],e.__eventListeners["object:moving"]=[])}const a={};function s(e,t){return{left:e.origX,top:e.origY,width:t.x-e.origX,height:t.y-e.origY,stroke:"rgba(255,0,0)",strokeWidth:2,fill:"rgba(255,0,0,0)",shapeName:"bndBoxTemp"}}function l(e,t){const n=document.getElementById("labelNamePopUp");n.style.display="block";const o=document.getElementById("canvas-wrapper").getBoundingClientRect(),i=o.top,r=o.left;n.style.top=`${t+i}px`,n.style.left=`${e+r}px`}function c(){document.getElementById("labelNamePopUp").style.display="none"}a.tempBndBoxProps=s,a.finalBndBoxProps={fill:"rgba(255,0,0,0)",shapeName:"bndBox",objectCaching:!1,selectable:!1};const u={};function f(e,t){return{radius:3.5,fill:"#ffffff",stroke:"#333333",strokeWidth:.5,left:t.x,top:t.y,selectable:!0,hasBorders:!1,hasControls:!1,originX:"center",originY:"center",shapeName:"tempPoint",pointId:e,objectCaching:!1}}function d(e){return{radius:3.5,fill:"#ffffff",stroke:"#333333",strokeWidth:.5,selectable:!0,shapeName:"tempPoint",pointId:e,lockMovementX:!1,lockMovementY:!1}}function g(e,t){return{radius:3.5,fill:"blue",stroke:"#333333",strokeWidth:.5,left:t.x,top:t.y,selectable:!0,hasBorders:!1,hasControls:!1,originX:"center",originY:"center",shapeName:"point",objectCaching:!1,pointId:e,perPixelTargetFind:!0}}function h(e,t){const n={radius:4,fill:"red",stroke:"#333333",strokeWidth:.5,selectable:!0,hasBorders:!1,hasControls:!1,originX:"center",originY:"center",shapeName:"point",objectCaching:!1,pointId:e,perPixelTargetFind:!0,lockMovementX:!0,lockMovementY:!0};return t&&(n.left=t.x,n.top=t.y),n}u.newPolygon={stroke:"rgba(255,0,0)",strokeWidth:1.75,fill:"rgba(237, 237, 237, 0.01)",perPixelTargetFind:!0,hasBorders:!1,hasControls:!1,shapeName:"polygon",selectable:!1,evented:!0,objectCaching:!1,numberOfNullPolygonPoints:0},u.newTempPolygon={stroke:"#333333",strokeWidth:.8,fill:"#cccccc",opacity:.3,selectable:!1,hasBorders:!1,hasControls:!1,evented:!1,objectCaching:!1,numberOfNullPolygonPoints:-3},u.newLine={strokeWidth:1.1,fill:"#999999",stroke:"#999999",class:"line",originX:"center",originY:"center",selectable:!1,hasBorders:!1,hasControls:!1,evented:!1,objectCaching:!1},u.firstPoint={fill:"red",shapeName:"firstPoint",lockMovementX:!0,lockMovementY:!0},u.newPoint=f,u.changeRemovablePointToTemp=d,u.existingPolygonPoint=g,u.removablePolygonPoint=h;let p=null,m=[],b=null,y=null;function v(e,t,n,o){!function(e,t,n,o){p=e,m=t,b=n,y=o}(e,t,n,o);const r=function(){const e=new i.a.Polygon([],y.newPolygon);return e.set({id:p.id,selectable:!0}),e}();b.add(r);const a=function(e){let t=0;const n=[];return e.forEach(e=>{const o=new i.a.Circle(y.existingPolygonPoint(t,e));b.add(o),m.push(o),n.push({x:o.left-1,y:o.top-1}),t+=1}),n}(function(){const e=p.calcTransformMatrix();return p.get("points").map(e=>new i.a.Point(e.x-p.pathOffset.x,e.y-p.pathOffset.y)).map(t=>i.a.util.transformPoint(t,e))}());return b.remove(p),(p=r).set("points",a),function(){const e=p._calcDimensions();p.set({left:e.left,top:e.top,height:e.height,width:e.width,pathOffset:{x:e.left+e.width/2,y:e.top+e.height/2}}),p.setCoords(),b.renderAll()}(),p}let w=null,x=null,P=[],k=!1;function j(){return k}function N(){x=v(x,P,w,u),k=!0}function C(e,t){w=e,x=t}function O(e,t,n,o){C(e,t),e.discardActiveObject(),n?o?function(){let e=0;P=[],w.forEachObject(t=>{"tempPoint"!==t.shapeName&&"firstPoint"!==t.shapeName||(t.set(u.removablePolygonPoint(e)),P.push(t),e+=1)})}():function(){let e=0;x.get("points").forEach(t=>{const n=new i.a.Circle(u.removablePolygonPoint(e,t));w.add(n),P.push(n),e+=1})}():function(){let e=0;x.get("points").forEach(t=>{const n=new i.a.Circle(u.existingPolygonPoint(e,t));w.add(n),P.push(n),e+=1})}(),k=!0}function A(){0!==P.length&&(P.forEach(e=>{w.remove(e)}),w.renderAll(),P=[]),k=!1}function B(e){if(x.points.length-x.numberOfNullPolygonPoints>3){if(0===Object.keys(x.points[e]).length){for(let t=e-1;t>-1;t-=1)if(0!==Object.keys(x.points[t]).length){x.points[x.points.length-1]=x.points[t],x.points[t]={};break}}else if(x.points.length-1===e){for(let t=e-1;t>-1;t-=1)if(0!==Object.keys(x.points[t]).length){x.points[e]=x.points[t],x.points[t]={};break}}else x.points[e]={};w.remove(P[e]),P[e]=null,x.numberOfNullPolygonPoints+=1,x.points.length-x.numberOfNullPolygonPoints>3&&console.log("need to signal restrictions"),w.renderAll()}}let _=!1,E=!1,M=null,I=!1;function X(e,t){var n,o;I?(n=t,o=e.target,C(n,o),n.discardActiveObject(),N(),M=e.target.id):N(),_=!1}function W(){!function(){const e=x._calcDimensions();x.set({left:e.left,top:e.top,height:e.height,width:e.width,pathOffset:{x:e.left+e.width/2,y:e.top+e.height/2}}),x.setCoords(),w.renderAll()}(),E=!1}function Y(){A(),M=null}function L(e){e.target?(w&&(w.preserveObjectStacking=!1),"bndBox"===e.target.shapeName&&j()?(Y(),I=!1):"polygon"===e.target.shapeName&&e.target.id!==M?I=!0:(w.preserveObjectStacking=!0,I=!1)):I=!1}function T(e,t){_?X(e,t):I?function(e,t){j()&&A(),O(t,e.target),M=e.target.id}(e,t):E?W():e.target&&"polygon"===e.target.shapeName?(w.discardActiveObject(),P.forEach(e=>{e&&e.bringForward()}),k=!0):!e.target&&j()&&Y()}function R(e){e.target&&("polygon"===e.target.shapeName?(j()&&A(),_=!0):"point"===e.target.shapeName&&(!function(e){const{left:t}=e.target,{top:n}=e.target,o=e.target;x.points[o.pointId]={x:t,y:n}}(e),E=!0))}function U(){M=null}let S=null,$=!1,H=!1,F=null;function D(){F.forEachObject(e=>{"bndBox"===e.shapeName?e.selectable=!0:(e.lockMovementX=!1,e.lockMovementY=!1),"point"===e.shapeName&&(e.fill="blue",e.radius=3.5)})}function z(e){e.target&&"polygon"===e.target.shapeName&&$?(U(),function(e){j()&&(A(),H=!0),O(F,e.target,!0),S=e.target.id}(e)):(!e.target&&j()||e.target&&"bndBox"===e.target.shapeName)&&(A(),S=null)}function q(e,t){t?D():e.forEachObject(e=>{e.selectable=!0}),e.defaultCursor="default",e.hoverCursor="move",e.renderAll()}const G={};let J=!1,K=null,Q=null,V=0;function Z(e,t){K=e,Q=t,J=!0}function ee(){const e=document.getElementById("label-title").value;q(Q),c(),K.set("id",V),V+=1,G[K[K.id]]=e,J=!1}function te(){return J}function ne(e,t){e.discardActiveObject(),t||function(e){e.forEachObject(e=>{e.selectable=!1})}(e),e.defaultCursor="crosshair",e.hoverCursor="crosshair",e.renderAll()}let oe=null,ie=!1,re=!1;const ae={};function se(e){(oe=e).backgroundImage&&(ie=!0,ne(oe),oe.discardActiveObject()),e.on("mouse:down",()=>{!function(){if(ie){re=!0;const e=oe.getPointer(oe.e);ae.origX=e.x,ae.origY=e.y,ae.rect=new i.a.Rect(a.tempBndBoxProps(ae,e)),oe.add(ae.rect)}}()}),e.on("mouse:move",e=>{!function(e){if(!re)return;const t=oe.getPointer(e.e);ae.origX>t.x&&ae.rect.set({left:Math.abs(t.x)}),ae.origY>t.y&&ae.rect.set({top:Math.abs(t.y)}),ae.rect.set({width:Math.abs(ae.origX-t.x)}),ae.rect.set({height:Math.abs(ae.origY-t.y)}),oe.renderAll()}(e)}),e.on("mouse:up",e=>{!function(e){if(re){ie=!1,re=!1,ae.rect.setCoords(),ae.rect.set(a.finalBndBoxProps),q(oe);const t=oe.getPointer(e.e);Z(ae.rect,oe),l(t.x,t.y)}}(e)})}let le=!1,ce=!1;function ue(){return ce}function fe(e){le=e}function de(e){ce=e}let ge=null,he=[],pe=!0,me=!1,be=0,ye=null;function ve(){ge.remove(me),me=null}function we(){return null!==me}function xe(e){const t=ge.getPointer(e.e);(function(e){return!(!me||ye.x===e.x)})(t)||(e.target&&e.target.shapeName&&"firstPoint"===e.target.shapeName?function(e){const t=[];he.forEach(e=>{t.push({x:e.left,y:e.top}),ge.remove(e)}),ve();const n=new i.a.Polygon(t,u.newPolygon);ge.add(n),me=null,pe=!1,Z(n,ge),l(e.x,e.y)}(t):pe&&function(e){const t=new i.a.Circle(u.newPoint(be,e));be+=1,0===he.length&&t.set(u.firstPoint);let n=[e.x,e.y,e.x,e.y];if(me){(n=me.get("points")).push({x:e.x,y:e.y});const t=new i.a.Polygon(n,u.newTempPolygon);ge.remove(me),ge.add(t),me=t,ge.renderAll()}else{const t=[{x:e.x,y:e.y}],n=new i.a.Polygon(t,u.newTempPolygon);me=n,ge.add(n)}he.push(t),ge.add(t),ge.selection=!1}(t))}function Pe(){!function(){const e=me.get("points"),t=[];e.forEach(e=>{Object.keys(e).length>0&&t.push({x:e.x,y:e.y})}),me.set({points:t}),ge.renderAll();let n=0;const o=[];ge.forEachObject(e=>{"point"===e.shapeName&&(e.set(u.changeRemovablePointToTemp(n)),0===n&&e.set(u.firstPoint),n+=1,o.push(e))}),he=o,be=n,ge.renderAll(),t[he.length]={x:t[0].x,y:t[0].y},me.set({points:t}),ge.renderAll(),ne(ge,!0),ge.renderAll()}()}function ke(e,t){t?Pe():(pe=!0,(ge=e).discardActiveObject(),ne(ge)),e.on("mouse:down",e=>{(!e.target||e.target&&"tempPoint"!==e.target.shapeName)&&xe(e)}),e.on("object:moving",e=>{!function(e){if(me){const t=e.target.getCenterPoint().x,n=e.target.getCenterPoint().y;me.points[e.target.pointId]={x:t,y:n}}}(e)}),e.on("mouse:move",e=>{!function(e){if(me){const t=ge.getPointer(e.e);ye=t;const n=me.get("points");n[he.length]={x:t.x,y:t.y},me.set({points:n})}ge.renderAll()}(e)}),e.on("mouse:over",t=>{t.target&&t.target.selectable?e.hoverCursor="move":e.hoverCursor="crosshair"})}function je(e){e.getActiveObject()?e.remove(e.getActiveObject()):x&&w.remove(x),de(!1)}function Ne(e){e.on("mouse:down",e=>{L(e)}),e.on("mouse:up",t=>{T(t,e)}),e.on("object:moving",e=>{R(e)}),e.on("object:scaling",e=>{!function(e){if("bndBox"===e.target.shapeName){const t=e.target;t.width*=t.scaleX,t.height*=t.scaleY,t.scaleX=1,t.scaleY=1}}(e)}),e.on("mouse:over",t=>{!function(e,t){e.target&&"point"!==e.target.shapeName&&(e.target.set("fill","rgba(255,0,0,0.2)"),t.renderAll())}(t,e)}),e.on("mouse:out",t=>{t.target&&"point"!==t.target.shapeName&&("bndBox"===t.target.shapeName?function(e){e.target.set("fill","rgba(255,0,0,0")}(t):"polygon"===t.target.shapeName&&function(e){e.target.set("fill","rgba(255,0,0,0.01)")}(t),e.renderAll())})}function Ce(e){le||(r(e),q(e,ue()),Ne(e),ue()&&fe(!1),fe(!0))}function Oe(e){F=e,e.on("mouse:down",e=>{!function(e){e.target&&("polygon"===e.target.shapeName&&e.target.id!==S?$=!0:"point"===e.target.shapeName&&B(e.target.pointId))}(e)}),e.on("mouse:over",e=>{!function(e){e.target&&"point"===e.target.shapeName&&(e.target.stroke="red",F.renderAll())}(e)}),e.on("mouse:up",e=>{z(e)}),e.on("mouse:out",e=>{!function(e){e.target&&"point"===e.target.shapeName&&(e.target.stroke="black",F.renderAll())}(e)})}let Ae=null;function Be(e){var t;t=e,me.get("points").length-=1,O(Ae=t,me,!0,!0),e.on("mouse:down",e=>{!function(e){e.target&&"point"===e.target.shapeName&&B(e.target.pointId)}(e)}),e.on("mouse:over",e=>{!function(e){e.target&&"point"===e.target.shapeName&&(e.target.stroke="red",Ae.renderAll())}(e)}),e.on("mouse:up",e=>{}),e.on("mouse:out",e=>{!function(e){e.target&&"point"===e.target.shapeName&&(e.target.stroke="black",Ae.renderAll())}(e)})}function _e(e){ue()?(r(e),function(e){we()?(ke(e,!0),fe(!1)):(q(e,!0),Ne(e),fe(!0))}(e),de(!1)):(r(e),function(e){const t=we();t?Be(e):t||Oe(e)}(e),function(e){const t=we();t?function(e){e.defaultCursor="default",e.hoverCursor="default",e.renderAll()}(e):t||function(e){!function(e){e.forEachObject(e=>{"bndBox"===e.shapeName?e.selectable=!1:(e.lockMovementX=!0,e.lockMovementY=!0),"point"===e.shapeName&&(e.fill="red",e.radius=4)}),e.renderAll()}(e),e.defaultCursor="default",e.hoverCursor="default"}(e)}(e),fe(!1),de(!0))}const Ee={uploaded:!1,name:null},Me={};let Ie=null;function Xe(e,t){t?function(e,t){Ie.setWidth(t.width),Ie.setHeight(t.height),i.a.Image.fromURL(e.src,e=>{Ie.setBackgroundImage(e,Ie.renderAll.bind(Ie),{scaleX:Ie.width/e.width,scaleY:Ie.height/e.height})})}(e,t):function(e){Ie.setWidth(e.width),Ie.setHeight(e.height),Ie.setBackgroundColor({source:e.src},()=>{Ie.renderAll()})}(e)}function We(e){const t={},n=Me.maximumCanvasWidth/e.width;return t.width=Me.maximumCanvasWidth,t.height=e.height*n,t}function Ye(){Ee.uploaded=!0;const e=this;if(Me.maximumCanvasHeight<e.height){let t=function(e){const t={},n=Me.maximumCanvasHeight/e.height;return t.height=Me.maximumCanvasHeight,t.width=e.width*n,t}(e);Me.maximumCanvasWidth<t.width&&(t=We(t)),Xe(e,t)}else if(Me.maximumCanvasWidth<e.width){Xe(e,We(e))}else Xe(e)}function Le(e){const t=new Image;t.src=e.target.result,t.onload=Ye}function Te(e){Ie=e,Me.maximumCanvasHeight=window.innerHeight-54,Me.maximumCanvasWidth=window.innerWidth-110}function Re(e){return function e(t){let n="";return Object.keys(t).forEach(o=>{"object"==typeof t[o]?n+=`<${o}>${e(t[o])}</${o}>`:n+=`<${o}>${t[o]}</${o}>`}),n}(e)}let Ue=null;function Se(e){const t=document.createElement("a"),n=new Blob([e],{type:"text/plain"});return t.setAttribute("href",window.URL.createObjectURL(n)),t.setAttribute("download",`${new RegExp("^([^.]+)").exec(Ee.name)[0]}.xml`),t.dataset.downloadurl=["text/plain",t.download,t.href].join(":"),t.draggable=!0,t.classList.add("dragout"),t}function $e(){Se(Re(function(e,t){const n={};return n.annotations=function(e,t){return{folder:"Unknown",filename:t.name,path:"Unknown",source:{database:"Unknown"},size:{width:e.getWidth(),height:e.getHeight(),depth:1},segmented:0}}(e,t),n.annotations.object=function(e){let t={};return e.forEachObject(e=>{const n=e._objects[0],o=e._objects[1].text;t={name:o,pose:"Unspecified",truncated:1,difficult:0,bndbox:{xmin:n.left,ymin:n.top,xmax:n.left+n.width,ymax:n.top+n.height}}}),t}(e),n}(Ue,Ee))).click()}function He(e){!function(e){if(e.files&&e.files[0]){const t=new FileReader;Ee.name=e.files[0].name,t.onload=Le,t.readAsDataURL(e.files[0])}}(e)}let Fe=null;function De(){var e;r(e=Fe),se(e),fe(!1),de(!1)}function ze(){var e;r(e=Fe),ke(e),fe(!1),de(!1)}function qe(){je(Fe)}function Ge(){Ce(Fe)}function Je(){_e(Fe)}function Ke(){Fe.backgroundImage&&$e()}function Qe(e){He(e)}function Ve(){ee(),Ge()}function Ze(){te()&&(c(),Q.remove(K),J=!1)}function et(){he[0]&&(he.forEach(e=>{ge.remove(e)}),ve(),he=[],me=null,be=0),Ze(),A(),U(),H&&(D(),H=!1)}function tt(e){et(),e&&e()}!function(){const e=new i.a.Canvas("c",{selection:!1});i.a.Object.prototype.transparentCorners=!1,Fe=e,Te(e),function(e){Ue=e}(e)}(),function(){window.createNewBndBox=tt.bind(this,De),window.createNewPolygon=tt.bind(this,ze),window.removePoint=function(e){te()||e&&e()}.bind(this,Je),window.removeShape=tt.bind(this,qe),window.downloadXML=tt.bind(this,Ke),window.cancel=tt.bind(this,Ge),window.uploadImage=function(e,t,n){et(),t&&t(n)}.bind(this,this,Qe)}(),window.labelShape=Ve}]);