require=function(r,e,n){function t(n,o){function i(r){return t(i.resolve(r))}function f(e){return r[n][1][e]||e}if(!e[n]){if(!r[n]){var c="function"==typeof require&&require;if(!o&&c)return c(n,!0);if(u)return u(n,!0);var l=new Error("Cannot find module '"+n+"'");throw l.code="MODULE_NOT_FOUND",l}i.resolve=f;var s=e[n]=new t.Module(n);r[n][0].call(s.exports,i,s,s.exports)}return e[n].exports}function o(r){this.id=r,this.bundle=t,this.exports={}}var u="function"==typeof require&&require;t.isParcelRequire=!0,t.Module=o,t.modules=r,t.cache=e,t.parent=u;for(var i=0;i<n.length;i++)t(n[i]);return t}({15:[function(require,module,exports) {
var e={isMobile:function(){var e,i=!1;return e=navigator.userAgent||navigator.vendor||window.opera,(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|webgolds|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(e)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0,4)))&&(i=!0),i}},i=e.isMobile()?60:40,o=e.isMobile()?30:20,t=e.isMobile()?60:40,a=e.isMobile()?10:15,n=e.isMobile()?window.innerWidth:window.innerHeight>=window.innerWidth?window.innerWidth:window.innerHeight/4*3,r=window.innerHeight;exports.moveFps=i,exports.bulletFps=o,exports.controlFps=t,exports.pixelWeigth=a,exports.vwidth=n,exports.vheight=r,exports.w=Math.floor(n/a),exports.h=Math.floor(r/a),exports.objQuantity=1,exports.objPolling=[20,60],exports.renderTime=1e3/i,exports.bulletTime=1e3/o,exports.controlTime=1e3/t,exports.moveTime=1e3/30,exports.shipLife=5,exports.renderData={enemy:[],enemyBullet:[],aniEffect:[]};
},{}],9:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var w=require("./config");exports.default={zark:function(u){var r=[u];return u%w.w!=w.w-1&&r.push(u-w.w+1),u%w.w==0&&0!=u||r.push(u-w.w-1),r},"MK-1":function(u){var r=[u,u+w.w,u+3*w.w];return u%w.w!=w.w-1&&(r.push(u+2*w.w+1),r.push(u+3*w.w+2),r.push(u+4*w.w+1)),u%w.w!=0&&(r.push(u+2*w.w-1),r.push(u+3*w.w-2),r.push(u+4*w.w-1)),r},"MK-2":function(u){var r=[u,u+w.w,u+3*w.w];return u%w.w!=w.w-1&&r.push(u+2*w.w+1),u%w.w!=0&&r.push(u+2*w.w-1),r},"MK-3":function(u){var r=[u,u+w.w,u+2*w.w,u+4*w.w];return u%w.w!=w.w-1&&(r.push(u+2*w.w+1),r.push(u+3*w.w+1)),u%w.w!=0&&(r.push(u+2*w.w-1),r.push(u+3*w.w-1)),r}};
},{"./config":15}],11:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var i=require("./config");function t(t){var n=this.mainX-this.mainX%i.w,e=n+i.w-1;return this.mainX+=i.w,t>e?e:t<n?n:t}exports.default={goStop:function(){var t=this;this.getST()<6&&(this.position+=i.w),this.getST()>80&&(this.position+=i.w),this.position>i.w*i.h-1&&i.renderData.enemy.find(function(n,e){n===t&&i.renderData.enemy.splice(e,1)})},gostMove:function(){var n=this,e=(Math.floor(this.position/i.h),i.h/4),o=Math.floor(this.mainX/i.w),s=Math.sin(Math.PI/e*o),a=Math.floor(s*e);this.position=t.call(this,this.mainX+a),this.position>i.w*i.h-1&&i.renderData.enemy.find(function(t,e){t===n&&i.renderData.enemy.splice(e,1)})},goToOut:function(){this.position+=i.w;var t=this;this.position>i.w*i.h-1&&i.renderData.enemy.find(function(n,e){n===t&&i.renderData.enemy.splice(e,1)})}};
},{"./config":15}],13:[function(require,module,exports) {
"use strict";var e=require("./config");exports.animation=function(n,r){var i=1;return function t(a){i==n&&e.renderData.aniEffect.splice(e.renderData.aniEffect.indexOf(t),1),r(i,a),i++}};
},{"./config":15}],14:[function(require,module,exports) {
"use strict";var i=require("./config");exports.positionToXY=function(t){var o=t%i.w,e=Math.round((t-o)/i.w);return{ps:t,x:o*i.pixelWeigth+i.pixelWeigth/2,y:e*window.innerHeight/i.h,__x:o,__y:e,limit:i.w*i.h-1}},exports.xyToPosition=function(t,o){var e=(t-i.pixelWeigth/2)/i.pixelWeigth;return o/i.pixelWeigth*i.w+e},exports.positionTosXsY=function(t){var o=t%i.w;return{x:o,y:Math.round((t-o)/i.w)}},exports.sXsYToPosition=function(t,o){return o*i.w+t};
},{"./config":15}],17:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var o=require("./config"),n=require("./positionMethod");function r(o,n,r){return n in o?Object.defineProperty(o,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):o[n]=r,o}exports.default={normal:function(i,t){var e=i,s=45;return function(i){var t;s--;var u=(0,n.positionTosXsY)(e),a=(0,n.positionTosXsY)(e+o.w*o.h),l=1/45*(45-s),x=Math.round(u.x+(a.x-u.x)*l),y=Math.round(u.y+(a.y-u.y)*l),p=(0,n.positionToXY)(e),c=(0,n.positionToXY)(e+o.w*o.h),f=(l=1/45*(45-s),p.x+(c.x-p.x)*l),v=p.y+(c.y-p.y)*l;return r(t={position:(0,n.sXsYToPosition)(x,y),look:"",x:f,y:v},"look","laser"),r(t,"w",20),r(t,"h",60),r(t,"clear",s<-1),t}},track:function(r,i){var t=r,e=i||30,s=null,u=null;return function(r){e--;var i=(0,n.positionTosXsY)(t);s||(s=(0,n.positionTosXsY)(r));var a=.04*(25-e),l=Math.round(i.x+(s.x-i.x)*a),x=Math.round(i.y+(s.y-i.y)*a),y=(0,n.positionToXY)(t);u||(u=(0,n.positionToXY)(r));a=.04*(25-e);var p=y.x+(u.x-y.x)*a,c=y.y+(u.y-y.y)*a;return{position:(0,n.sXsYToPosition)(l,x),x:p,y:c,look:"bulletBall",w:15,h:15,clear:e<-15||l<0||l>o.w-1}}}};
},{"./config":15,"./positionMethod":14}],10:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=function(t){this.name=t.name,this.life=t.life,this.mainX=t.position,this.position=t.position,this.shot=t.shot,this.shotTime=t.shotTime,this.movePath=t.movePath,this.moveTime=t.moveTime||1,this.look=t.look,this.bulletType=t.bulletType||"normal";var e=t.deadCb||function(){},o=!1,h=0;this.getST=function(){return h},this.wasHit=function(t,e,s){var n=this;i.default[this.look](this.position).includes(t)&&(o=!0,this.life--,this.life<1?(l.renderData.enemy.find(function(t,i){if(t===n){localStorage.getItem("bestScore");l.renderData.enemy.splice(i,1)}}),this.dead()):(this.grapic.call(this,e),s&&s()))},this.grapic=function(t){var e=o?"red":"white";i.default[this.look](this.position).forEach(function(i,o){var s=(0,n.positionToXY)(i);t.beginPath(),t.rect(s.x-l.pixelWeigth/2,s.y,l.pixelWeigth,l.pixelWeigth),t.fillStyle=e,t.fill()})},this.action=function(t,i,e){if(this.grapic.call(this,i),"OBJ_MOVE"===t){if(u.call(this),h%this.shotTime[0]<this.shotTime[1])h%this.shotTime[0]%this.shotTime[2]==0&&this.shot&&f(this.position,this.bulletType,e);h++,o=!1}},this.dead=function(){var t=this.position,i=(0,n.positionToXY)(t),o=document.getElementById("explosion");l.renderData.aniEffect.push((0,s.animation)(50,function(t,e){e.drawImage(o,i.x-(50-t)/2,i.y,120-t,120-t)})),e()}};var t=require("./lookPath"),i=r(t),e=require("./movePathList"),o=r(e),s=require("./aniEffectMethod"),n=require("./positionMethod"),h=require("./enemyBulletType"),a=r(h),l=require("./config");function r(t){return t&&t.__esModule?t:{default:t}}function u(){o.default[this.movePath]&&this.getST()%this.moveTime==0&&o.default[this.movePath].call(this)}function f(t,i,e){var o=l.renderData.enemyBullet,s=a.default[i](t);o.reduce(function(i,e){return i||e.data.position===t},!1)||o.push({data:s(e),fn:s})}
},{"./lookPath":9,"./movePathList":11,"./aniEffectMethod":13,"./positionMethod":14,"./enemyBulletType":17,"./config":15}],12:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=function(i){this.name=i.name,this.life=i.life,this.deadPosition=i.position,this.position=i.position,this.killCount=0,this.bullet=[],this.look=i.look,this.isDead=!1;var e=i.deadCb||function(){};this.wasHit=function(i,e,o){t.default[this.look](this.position).includes(i)&&(this.life--,l.renderData.aniEffect.push((0,n.animation)(10,function(i,e){t.default[this.look](this.position).forEach(function(i,t){var o=(0,s.positionToXY)(i);e.beginPath(),e.rect(o.x-l.pixelWeigth/2,o.y,l.pixelWeigth+3,l.pixelWeigth+3),e.fillStyle="red",e.fill()})}.bind(this))),l.renderData.enemyBullet.splice(e,1),this.life<1&&(this.life=0,this.isDead=!0,this.dead()))},this.shot=function(){if(!this.isDead){var i=this.bullet;i.includes(this.position-l.w)||i.push(this.position-l.w)}},this.grapic=function(i){var e=this.wasHit.bind(this);this.isDead||(t.default[this.look](this.position).forEach(function(t,e){var o=(0,s.positionToXY)(t);i.beginPath(),i.rect(o.x-l.pixelWeigth/2,o.y,l.pixelWeigth,l.pixelWeigth+1),i.fillStyle="white",i.fill()}),l.renderData.enemyBullet.forEach(function(t,o){e(t.data.position,o,i)}),f.call(this),r.call(this,i))},this.dead=function(){var t=this.position,o=(0,s.positionToXY)(t),a=document.getElementById("explosion");l.renderData.aniEffect.push((0,n.animation)(50,function(t,e){e.drawImage(a,o.x-(50-t)/2,o.y,120-t,120-t),50==t&&(this.life=i.life,this.position=this.deadPosition,this.isDead=!1,this.bullet=[])}.bind(this))),e()}};var i=require("./lookPath"),t=a(i),e=require("./movePathList"),o=a(e),n=require("./aniEffectMethod"),s=require("./positionMethod"),l=require("./config");function a(i){return i&&i.__esModule?i:{default:i}}function h(i){var e=i.viewDom;t.default[i.lookType](i.position).forEach(function(i,t){var o=(0,s.positionToXY)(i);e.beginPath(),e.rect(o.x-l.pixelWeigth/2,o.y,l.pixelWeigth,l.pixelWeigth+1),e.fillStyle="white",e.fill()})}function f(){var i=this.bullet;for(var t in i)i[t]=i[t]-l.w,i[t]<0&&i.splice(t,1)}function r(i){var t=l.renderData.enemyBullet,e=document.getElementById("bulletImg"),o=this.bullet;o.map(function(n){var a=(0,s.positionToXY)(n);i.drawImage(e,a.x-6.5,a.y-5,13,64),t.forEach(function(i,e){i.data.position===n&&(t.splice(e,1),o.splice(o.indexOf(n),1)),i.data.position===n+l.w&&(t.splice(e,1),o.splice(o.indexOf(n),1))}),l.renderData.enemy.map(function(t){t.wasHit(n,i,function(){o.splice(o.indexOf(n),1)}),t.wasHit(n+l.w,i,function(){o.splice(o.indexOf(n),1)})})})}
},{"./lookPath":9,"./movePathList":11,"./aniEffectMethod":13,"./positionMethod":14,"./config":15}],8:[function(require,module,exports) {
"use strict";var e=require("./js/lookPath"),t=s(e),o=require("./js/movePathList"),n=s(o),i=require("./js/createEnemy"),a=s(i),r=require("./js/createShip"),d=s(r),u=require("./js/aniEffectMethod"),c=require("./js/positionMethod"),l=require("./js/config");function s(e){return e&&e.__esModule?e:{default:e}}var f=0,h=1,m=0,v={UP:!1,RIGHT:!1,DOWN:!1,LEFT:!1,SPACE:!1};function p(e,t){var o={38:function(){"keydown"==t&&(v.UP=!0),"keyup"==t&&(v.UP=!1)},39:function(){"keydown"==t&&(v.RIGHT=!0),"keyup"==t&&(v.RIGHT=!1)},40:function(){"keydown"==t&&(v.DOWN=!0),"keyup"==t&&(v.DOWN=!1)},37:function(){"keydown"==t&&(v.LEFT=!0),"keyup"==t&&(v.LEFT=!1)},32:function(){"keydown"==t&&(v.SPACE=!0),"keyup"==t&&(v.SPACE=!1)}};o[e]&&o[e]()}function g(e){var t={UP:function(){var t=e.position;e.position=t-l.w>-1?t-l.w:t},RIGHT:function(){var t=e.position;t+1<=l.w*l.h-1&&(t+1)%l.w!=0&&(e.position=t+1)},DOWN:function(){var t=e.position,o=Math.round((t-t%l.w)/l.w);t+l.w<l.w*l.h&&(e.position=o<l.h?t+l.w:t)},LEFT:function(){var t=e.position;t-1>-1&&t%l.w!=0&&(e.position=t-1)},SPACE:function(){e.shot()}};for(var o in v)1==v[o]&&t[o](),document.getElementById("debug").innerHTML=JSON.stringify((0,c.positionToXY)(l.renderData.position),null,2)}function w(e){var t=l.renderData.enemyBullet;for(var o in t)t[o].data=t[o].fn(e),t[o].data.clear&&t.splice(o,1)}var y=new d.default({name:"MK-2",life:l.shipLife,position:l.w*Math.floor(l.h/2)-Math.floor(l.w/2),deadPosition:l.w*Math.floor(l.h/2)-Math.floor(l.w/2),look:"MK-2",deadCb:function(){m=0}});function E(e){var t=localStorage.getItem("bestScore")||0,o=localStorage.getItem("bestMileage")||0;if("OBJ_MOVE"===e){if(f==h){for(var n=0;n<l.objQuantity;n++){var i=new a.default({name:"ZARK-ZERO",life:3,position:Math.floor(Math.random()*l.w),shot:!0,shotTime:[200,54,9],movePath:"gostMove",moveTime:5,look:"zark",bulletType:f%2==0?"normal":"track",deadCb:function(){t<++m&&localStorage.setItem("bestScore",m)}});l.renderData.enemy.push(i)}h=f+Math.floor(Math.random()*l.objPolling[1]+l.objPolling[0])}o<++f&&localStorage.setItem("bestMileage",f)}"BULLET_MOVE"===e&&w(y.position);var r=document.getElementById("view").getContext("2d");r.clearRect(0,0,l.vwidth,l.vheight),l.renderData.aniEffect.forEach(function(e){e(r)}),y.grapic(r),l.renderData.enemyBullet.map(function(e){(0,c.positionToXY)(e.data.position);var t=document.getElementById(e.data.look);r.drawImage(t,e.data.x-7.5,e.data.y-5,e.data.w,e.data.h)}),l.renderData.enemy.map(function(t){t.action(e,r,y.position)}),document.getElementById("score").innerHTML='Score: <div class="score">'+m+"</div><br/>Best score: "+(localStorage.getItem("bestScore")||0)+"<br/> Mileage: "+f+"<br/> Best Mileage: "+o+"<br/> Life: "+y.life,document.getElementById("life").style.width=100/l.shipLife*y.life+"%"}function M(e){E(e)}function T(e){if((e=e||window.event).preventDefault(),e.touches[0]){var t=Math.floor(e.touches[0].pageX/l.pixelWeigth),o=Math.floor(e.touches[0].pageY/l.pixelWeigth),n=l.w*o+t;y.position=n,y.shot(),document.getElementById("debug").innerHTML="Touch moved ("+t+","+o+"), "+(l.w*o+t)}}document.addEventListener("keydown",function(e){p(e.keyCode,"keydown")},!1),document.addEventListener("keyup",function(e){p(e.keyCode,"keyup")},!1),document.addEventListener("touchstart",T,!1),document.addEventListener("touchmove",T,!1),document.addEventListener("touchend",T,!1),document.getElementById("view").height=l.vheight,document.getElementById("view").width=l.vwidth,setInterval(function(){M("OBJ_MOVE")},l.renderTime),setInterval(function(){M("CONTROL_MOVE"),g(y)},l.controlTime),setInterval(function(){M("BULLET_MOVE")},l.bulletTime);
},{"./js/lookPath":9,"./js/movePathList":11,"./js/createEnemy":10,"./js/createShip":12,"./js/aniEffectMethod":13,"./js/positionMethod":14,"./js/config":15}]},{},[8])